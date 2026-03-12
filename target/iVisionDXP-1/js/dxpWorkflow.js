/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var HtmlEntities = {
    "'": "&apos;",
    "<": "&lt;",
    "?": "&#63;",
    ">": "&gt;",
    // " ": "&nbsp;",
    "¡": "&iexcl;",
    "¢": "&cent;",
    "£": "&pound;",
    "¤": "&curren;",
    "¥": "&yen;",
    "¦": "&brvbar;",
    "§": "&sect;",
    "¨": "&uml;",
    "©": "&copy;",
    "ª": "&ordf;",
    "«": "&laquo;",
    "¬": "&not;",
    "®": "&reg;",
    "¯": "&macr;",
    "°": "&deg;",
    "±": "&plusmn;",
    "²": "&sup2;",
    "³": "&sup3;",
    "´": "&acute;",
    "µ": "&micro;",
    "¶": "&para;",
    "·": "&middot;",
    "¸": "&cedil;",
    "¹": "&sup1;",
    "º": "&ordm;",
    "»": "&raquo;",
    "¼": "&frac14;",
    "½": "&frac12;",
    "¾": "&frac34;",
    "¿": "&iquest;",
    "À": "&Agrave;",
    "Á": "&Aacute;",
    "Â": "&Acirc;",
    "Ã": "&Atilde;",
    "Ä": "&Auml;",
    "Å": "&Aring;",
    "Æ": "&AElig;",
    "Ç": "&Ccedil;",
    "È": "&Egrave;",
    "É": "&Eacute;",
    "Ê": "&Ecirc;",
    "Ë": "&Euml;",
    "Ì": "&Igrave;",
    "Í": "&Iacute;",
    "Î": "&Icirc;",
    "Ï": "&Iuml;",
    "Ð": "&ETH;",
    "Ñ": "&Ntilde;",
    "Ò": "&Ograve;",
    "Ó": "&Oacute;",
    "Ô": "&Ocirc;",
    "Õ": "&Otilde;",
    "Ö": "&Ouml;",
    "×": "&times;",
    "Ø": "&Oslash;",
    "Ù": "&Ugrave;",
    "Ú": "&Uacute;",
    "Û": "&Ucirc;",
    "Ü": "&Uuml;",
    "Ý": "&Yacute;",
    "Þ": "&THORN;",
    "ß": "&szlig;",
    "à": "&agrave;",
    "á": "&aacute;",
    "â": "&acirc;",
    "ã": "&atilde;",
    "ä": "&auml;",
    "å": "&aring;",
    "æ": "&aelig;",
    "ç": "&ccedil;",
    "è": "&egrave;",
    "é": "&eacute;",
    "ê": "&ecirc;",
    "ë": "&euml;",
    "ì": "&igrave;",
    "í": "&iacute;",
    "î": "&icirc;",
    "ï": "&iuml;",
    "ð": "&eth;",
    "ñ": "&ntilde;",
    "ò": "&ograve;",
    "ó": "&oacute;",
    "ô": "&ocirc;",
    "õ": "&otilde;",
    "ö": "&ouml;",
    "÷": "&divide;",
    "ø": "&oslash;",
    "ù": "&ugrave;",
    "ú": "&uacute;",
    "û": "&ucirc;",
    "ü": "&uuml;",
    "ý": "&yacute;",
    "þ": "&thorn;",
    "ÿ": "&yuml;",
    "Œ": "&OElig;",
    "œ": "&oelig;",
    "Š": "&Scaron;",
    "š": "&scaron;",
    "Ÿ": "&Yuml;",
    "ƒ": "&fnof;",
    "ˆ": "&circ;",
    "˜": "&tilde;",
    "Α": "&Alpha;",
    "Β": "&Beta;",
    "Γ": "&Gamma;",
    "Δ": "&Delta;",
    "Ε": "&Epsilon;",
    "Ζ": "&Zeta;",
    "Η": "&Eta;",
    "Θ": "&Theta;",
    "Ι": "&Iota;",
    "Κ": "&Kappa;",
    "Λ": "&Lambda;",
    "Μ": "&Mu;",
    "Ν": "&Nu;",
    "Ξ": "&Xi;",
    "Ο": "&Omicron;",
    "Π": "&Pi;",
    "Ρ": "&Rho;",
    "Σ": "&Sigma;",
    "Τ": "&Tau;",
    "Υ": "&Upsilon;",
    "Φ": "&Phi;",
    "Χ": "&Chi;",
    "Ψ": "&Psi;",
    "Ω": "&Omega;",
    "α": "&alpha;",
    "β": "&beta;",
    "γ": "&gamma;",
    "δ": "&delta;",
    "ε": "&epsilon;",
    "ζ": "&zeta;",
    "η": "&eta;",
    "θ": "&theta;",
    "ι": "&iota;",
    "κ": "&kappa;",
    "λ": "&lambda;",
    "μ": "&mu;",
    "ν": "&nu;",
    "ξ": "&xi;",
    "ο": "&omicron;",
    "π": "&pi;",
    "ρ": "&rho;",
    "ς": "&sigmaf;",
    "σ": "&sigma;",
    "τ": "&tau;",
    "υ": "&upsilon;",
    "φ": "&phi;",
    "χ": "&chi;",
    "ψ": "&psi;",
    "ω": "&omega;",
    "ϑ": "&thetasym;",
    "ϒ": "&Upsih;",
    "ϖ": "&piv;",
    "–": "&ndash;",
    "—": "&mdash;",
    "‘": "&lsquo;",
    "’": "&rsquo;",
    "‚": "&sbquo;",
    "“": "&ldquo;",
    "”": "&rdquo;",
    "„": "&bdquo;",
    "†": "&dagger;",
    "‡": "&Dagger;",
    "•": "&bull;",
    "…": "&hellip;",
    "‰": "&permil;",
    "′": "&prime;",
    "″": "&Prime;",
    "‹": "&lsaquo;",
    "›": "&rsaquo;",
    "‾": "&oline;",
    "⁄": "&frasl;",
    "€": "&euro;",
    "ℑ": "&image;",
    "℘": "&weierp;",
    "ℜ": "&real;",
    "™": "&trade;",
    "ℵ": "&alefsym;",
    "←": "&larr;",
    "↑": "&uarr;",
    "→": "&rarr;",
    "↓": "&darr;",
    "↔": "&harr;",
    "↵": "&crarr;",
    "⇐": "&lArr;",
    "⇑": "&UArr;",
    "⇒": "&rArr;",
    "⇓": "&dArr;",
    "⇔": "&hArr;",
    "∀": "&forall;",
    "∂": "&part;",
    "∃": "&exist;",
    "∅": "&empty;",
    "∇": "&nabla;",
    "∈": "&isin;",
    "∉": "&notin;",
    "∋": "&ni;",
    "∏": "&prod;",
    "∑": "&sum;",
    "−": "&minus;",
    "∗": "&lowast;",
    "√": "&radic;",
    "∝": "&prop;",
    "∞": "&infin;",
    "∠": "&ang;",
    "∧": "&and;",
    "∨": "&or;",
    "∩": "&cap;",
    "∪": "&cup;",
    "∫": "&int;",
    "∴": "&there4;",
    "∼": "&sim;",
    "≅": "&cong;",
    "≈": "&asymp;",
    "≠": "&ne;",
    "≡": "&equiv;",
    "≤": "&le;",
    "≥": "&ge;",
    "⊂": "&sub;",
    "⊃": "&sup;",
    "⊄": "&nsub;",
    "⊆": "&sube;",
    "⊇": "&supe;",
    "⊕": "&oplus;",
    "⊗": "&otimes;",
    "⊥": "&perp;",
    "⋅": "&sdot;",
    "⌈": "&lceil;",
    "⌉": "&rceil;",
    "⌊": "&lfloor;",
    "⌋": "&rfloor;",
    "⟨": "&lang;",
    "⟩": "&rang;",
    "◊": "&loz;",
    "♠": "&spades;",
    "♣": "&clubs;",
    "♥": "&hearts;",
    "♦": "&diams;"
};
var panaloldData = {};
var basicDatas = {};
var copyData = {};
var treeDataArr = [];
var addCustomLevel = false;
var pinnedData = false;
var globalTreeData = '';
var aiLensFlagTrue = 'Y';
$(function () {
    var count = 0;
    var buttonArray = ["Change", "Delete", "Extend", "Undelete", "Block", "Unblock", "Create"];
    var imageArray = ["images/Change-icon-OutLine.svg", "images/delete_icon.svg", "images/Extensions_icon.svg", "images/del_undel.svg", "images/block_icon_1.png", "images/unblock_icon_1.png", "images/add_icon.svg"];
    setInterval(function () {
        $("#autoChangeText").fadeOut(300, function () {
            if (count === buttonArray.length) {
                count = 0;
            }
            $("#creationPopOver").attr("src", imageArray[count]).fadeIn(500);
            $(this).text(buttonArray[count++]).fadeIn(500);
        });
    }, 2000);
});
function workflowBasketTabs(tabId, menuId, roleId) {
    //NKR//
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    if (fioriThemeCheck) {
        $("#dxp2TabsWithGridContent").hide();
        $("#dxpSearchTab").hide()
        $("#dxp1TabsWithGrid").hide()
        $("#dxpFromTab").hide()
        $("#dxp2TabsWithGrid").hide()
        $("#dxpGridTab").hide()
        $("#dxpClassesTab").hide()
        $("#dxpClusterTab").hide()
        $("#dxpClusterTab2").hide()
        $("#dxpAnalyticsTab").hide()
        $("#dxpconsolidationTab").hide();
        try {
            var basketTitle = $(event.currentTarget).text();
            var backClass = $(event.currentTarget).attr("class");
            basketTitle = (basketTitle != null && basketTitle != undefined && basketTitle != "") ? basketTitle : submenutitle
            firorMenuPopoverText(basketTitle);
            if (!(backClass != null && backClass != undefined) || !backClass.includes("Back")) {
                var firorDomainObj = {};
                firorDomainObj[basketTitle] = `workflowBasketTabs(${tabId}, ${menuId}, ${roleId})`;
                backDomainCumArray.push(firorDomainObj);
            }

        } catch (e) {
            console.log(e);
        }

    } else {
        $("#dxp2FioriTabsWithGridContent").hide();
    }
    $("#sidebarsearch").hide();
    $("#dxp2FioriTabsWithGridContent").html('');
    //NKR//
    $(".visualizationDashboardView").hide();
    $("#VisualizePageBody").hide();
    $("#defaultShowCards").hide();
//    $("#firstDxpSplitterData").html('');
    $("#dxp21MainSplitter").hide();
    $(".dxpSplitterTabsContent").hide();
    $("#dxpDomainMenus").hide();
    $("#dxpGridContent").hide();
    $("#dxpAnalyticsContent").hide();
    $("#dxpHomeContent").hide();
    $("#dxClassesContent").hide();
    $("#dxpFormContent").hide();
    $("#dxpCluster").hide();
    $("#Task").show();
    $("#dxpconsolidationFormView").hide();
    $("#dxpClusterContent").hide();
    $("#dxp1TabsWithGridContent").hide();
    $("#dxp2TabsWithGridContent").hide();

    showLoader();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'materialWorkFlow',
        data: {
            'tabId': tabId,
            'menuId': menuId,
            'roleId': roleId,
            fioriThemeFlag: fioriThemeCheck, //NKR
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
//            toggleTabsAndMenus(event);
            if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {
                //NKR//
                if (!fioriThemeCheck) {
                    showSelectedTabContent(null, 'dxp2TabsWithGrid', 'dxp2TabsWithGridContent', tabname, 'N');
                } else {
                    showSelectedTabContent(null, 'dxp2TabsWithGrid', 'dxp2FioriTabsWithGridContent', tabname, 'N');
                }
                //NKR//
            } else {
                showSelectedTabContent(null, 'dxp2TabsWithGrid', 'dxp2TabsWithGridContent', 'View Tabs Data', 'N');
            }
            if ($("#dxpTabs").is(":visible")) {

            } else {
                toggleTabsAndMenus(event);
            }
            $("#dxpMenus").hide();
            $("#dxpGridContent").hide();
            $("#dxpTabs").show();
            $("#dxp2TabsWithGrid").show();
            //NKR//
            if (fioriThemeCheck) {
                $("#dxp2FioriTabsWithGridContent").show();
                $("#dxp2FioriTabsWithGridContent").html(response);
                getScrollFioriTheme();
                if ($("#innerCardDetailsitemId0").length != 0) {
                    $("#innerCardDetailsitemId0").click();
                } else {
                    $("#cardIteamId0").click();
                }
                $(".fioriPendingContainer").find(".innerCardDetailsitem").eq(0).addClass("active");
                $(".innerCardWrapper .innerCardDetailsitem .count").each(function () {
                    let countText = $(this).text().trim();
                    let number = parseInt(countText, 10);
                    if (!isNaN(number)) {
                        let formatted = number.toLocaleString();
                        $(this).text(formatted);
                    }
                });
            } else {

                $("#dxp2TabsWithGridContent").show();
                $("#dxp2FirstDiv").empty();
                $("#dxp2FirstDiv").html(response);
                $("#dxp2FirstDiv").css("visibility", "visible", "!important");
                $('#dxp2MainSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 270}]});
                $("#dxp2FirstDiv").addClass('dxpSplitterListDiv');
            }
            try {
                let currentTabName = $(event.currentTarget).find(".submenuText").text();
                var tabname = currentTabName.split('\n')[0];
                insertUserClickedNavigations(tabname);
            } catch (e) {

            }
            //NKR//

        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });
}
function getMaterialComponentResults(componentType, componentId, roleId) {
    $("#dxpMaterialListId div").removeClass('domainPendingRegactiveTab');
    $(event.currentTarget).addClass("domainPendingRegactiveTab");
    showLoader();
    $("#decendingOrder").hide();
    $("#dxp21FirstDiv").show();
    $("#dxp21FirstDiv").html('');
    $("#dxp21SecondDiv").hide();
//    $('#firstDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 30}]});
    $(".searchFirstResultsList").hide();
    $(".decendingFirstOrder").hide();
    firstPanelShowFlag = true;
    if (componentType == "DMA") {
        showFileDataForImport();
        return;
    }
    //NKR//
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    if (fioriThemeCheck) {
        $("#showRelatedtabContentID").html('');
        $("#dxpFioriGridContent").html('');
        $("#dxp2FioriTabsWithGridContent .gridareaSection").show();
    }
    //NKR//
    try {
        let currentTabName = event.currentTarget.innerText;
        var tabname = currentTabName.split('\n')[0];
        insertUserClickedNavigations(tabname);

    } catch (e) {

    }
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getsubtabResults',
        data: {
            'componentType': componentType,
            'componentId': componentId,
            'roleId': roleId,
            fioriThemeFlag: fioriThemeCheck,
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            secondPanelShowFlag = true;
            //getSecondPanelShow(event);
            //NKR//
            if (fioriThemeCheck) {
                $("#showRelatedtabContentID").html(response);
                if (componentType != null && componentType != undefined && componentType != '' && componentType == 'TAB') {
                    $("#innerCardDetailsitemId0").click();
                }
                $(".fioriPendingContainer").find(".innerCardDetailsitem").eq(0).addClass("active");
                try {
                    $(".innerCardWrapper .innerCardDetailsitem .count").each(function () {
                        let countText = $(this).text().trim();
                        let number = parseInt(countText, 10);
                        if (!isNaN(number)) {
                            let formatted = number.toLocaleString();
                            $(this).text(formatted);
                        }
                    });
                } catch (e) {

                }
            } else {
                $("#dxp21MainSplitter").show();
                $("#dxp21FirstDiv").css("visibility", "visible", "!important");
                $("#dxp21FirstDiv").html(response);
                $('#dxp21MainSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 270}]});
                $("#dxp21FirstDiv").addClass('dxpSplitterListDiv');
            }
            //NKR//
//            $("#dxpMaterialListId").hide();
        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });
}
function getMaterialComponentGrid(componentType, gridId, roleId, fromgridTab, processFlag) {
    showLoader();
    $("#secondSplitterListData div").removeClass('domainPendingRegactiveTab');
    $(event.currentTarget).addClass("domainPendingRegactiveTab");
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    try {
        if (fioriThemeCheck) {
            $('#dxpHomeContent').hide();//17-03-2025
//            $('#dxpFioriContent').show();//17-03-2025
            $('.innerCardWrapper').find('.active').removeClass('active');
            $(event.currentTarget).addClass("active");
            const scrollableContainer = document.querySelector('.innerCardWrapper');

            // Add wheel event listener
            scrollableContainer.addEventListener('wheel', function (event) {
                // Modify scrollLeft instead of scrollTop for horizontal scrolling
                if (event.deltaY > 0) {
                    // Scrolling right
                    scrollableContainer.scrollLeft += 100; // Adjust scroll amount
                } else {
                    // Scrolling left
                    scrollableContainer.scrollLeft -= 100; // Adjust scroll amount
                }

                // Prevent the default vertical scroll behavior
                event.preventDefault();
            });

        }
    } catch (e) {

    }

//    $("#dxpGridTab").attr("data-gridcomponenttype", "");
//    $("#dxpGridTab").attr("data-selectedgridId", "");
//    $("#dxpGridTab").attr("data-selectedRoleId", "");
//    $("#dxpGridTab").attr("data-functionName", "");
    if ($('.visionTask').is(':visible')) {
        let target = event.currentTarget;
        visionSetTaskActive(target);
    }

    try {
        let currentTabName = event.currentTarget.innerText;
        var tabname = currentTabName.split('\n')[0];
        insertUserClickedNavigations(tabname);
    } catch (e) {

    }
    $("#intellisense").hide();
    $("#searchResultsCountId").hide();
    $("#rolehid").val(roleId);
    //$("#dxp21MainSplitter").jqxSplitter('collapse');
    $("#dxp21SecondDiv").val('');
    $("#fourthDxpSplitter").val('');
    $("#dxp21SecondDiv").show();
    $('.viewClassDiv').removeClass('active');
    $("#excelExportsearchResults").show();
    var selectedValue = $("#SelectedValue").val();
    $(".searchResultsList").hide();
    $(".searchDXPCreate").hide();
    closefioriPopOver("producttypeId");
    secondPanelShowFlag = true;
    if (componentType != null && componentType != undefined && componentType != 'FILTER_GRID') {

        $.ajax({
            datatype: "json",
            type: "POST",
            url: 'getCloudGrid',
            data: {
                'gridId': gridId,
                'roleId': roleId,
            },
            traditional: true,
            cache: false,
            async: true,
            success: function (response) {
                stopLoader();
                //NKR//
                if (fioriThemeCheck) {
                    if ($("#" + gridId).length != 0) {
                        try {
                            $("#" + gridId).jqxGrid('destroy');
                            $("#" + gridId).remove();
                        } catch (error) {
                            console.log(error)
                            $("#" + gridId).remove();
                        }
                    }

                    if (fromgridTab != null && fromgridTab != undefined && fromgridTab == 'GRID') {
                        //                        $("#dxpFioriContent").html("<div id='" + gridId + "'></div>");
                        $("#dxpFioriContent").html("<div id ='gridUI5Filter_" + gridId + "'></div><div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div class=\"fiorirightgridControls\"><div class=\"fioriGridSearchwrap\" title = \"Show/Hide Filter\" onclick=\"toggleUI5FilterGridForm('" + gridId + "')\"><img src=\"images/iDXPUI5Settings.svg\" title = \"Show/Hide Filter\" width=\"16px\"/></div></div></div></div></div></div><div id='" + gridId + "'></div>");
                        $("#gridUI5Filter_" + gridId).css("display", "none");
                        try {
                            getUI5FilterGridForm(gridId, null, 'GRID', response);
                        } catch (e) {

                        }

                    } else if ($("body").find(".firstLevelMenuSection").length > 0) {
                        $("#dxpFioriGridContent").html("<div id='" + gridId + "'></div>");
                    } else {
//                        $("#dxpFioriContent").html("<div id='" + gridId + "'></div>");
//                        $("#dxpFioriContent").html("<div id ='gridUI5Filter_" + gridId + "'></div><div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div class=\"fiorirightgridControls\"><div class=\"fioriGridSearchwrap\" title = \"Show/Hide Filter\" onclick=\"toggleUI5FilterGridForm('" + gridId + "')\"><img src=\"images/iDXPUI5Settings.svg\" title = \"Show/Hide Filter\" width=\"16px\"/></div></div></div></div></div></div><div id='" + gridId + "'></div>");
//                        $("#gridUI5Filter_" + gridId).css("display", "none");
//                        try {
//                            getUI5FilterGridForm(gridId, null, 'GRID', response)
//                        } catch (e) {
//
//                        }
// $("#showdynamicGridWrapper .card-header").html("<div id ='gridUI5Filter_" + response['gridId'] + "'></div><div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div class=\"fiorirightgridControls\"><div class=\"fioriGridSearchwrap\" title = \"Show/Hide Filter\" onclick=\"toggleUI5FilterGridForm('" + response['gridId'] + "')\"><img src=\"images/iDXPUI5Settings.svg\" title = \"Show/Hide Filter\" width=\"16px\"/></div><div id='submitDropdown" + response['gridId'] + "' class='visionGenericTabSubmit'></div><div id='exportDropdown" + response['gridId'] + "' class='visionGenericTabExport'></div></div></div></div></div>");
                        $("#dxpFioriContent").html("<div id ='gridUI5Filter_" + gridId + "'></div><div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div class=\"fiorirightgridControls\"><div class=\"fioriGridSearchwrap\" title = \"Show/Hide Filter\" onclick=\"toggleUI5FilterGridForm('" + gridId + "')\"><img src=\"images/iDXPUI5Settings.svg\" title = \"Show/Hide Filter\" width=\"16px\"/></div><div id='submitDropdown" + gridId + "' class='visionGenericTabSubmit'></div><div id='exportDropdown" + gridId + "' class='visionGenericTabExport'></div></div></div></div></div><div id='" + gridId + "'></div>");
                        $("#gridUI5Filter_" + gridId).css("display", "none");
                        try {
                            getUI5FilterGridForm(gridId, null, 'GRID', response);
                        } catch (e) {

                        }
                    }

                } else {
                    $("#dxpGridContent").html("<div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div id='submitDropdown" + response['gridId'] + "' class='visionGenericTabSubmit'></div></div><div id='exportDropdown" + response['gridId'] + "' class='visionGenericTabExport'></div></div></div><div id='" + response['gridId'] + "'></div>");
                }
                //NKR//

                if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {

                    if (fromgridTab != null && fromgridTab != undefined && fromgridTab == 'Y') {
                    } else {
                        if (fioriThemeCheck) {
                            if ($("body").find(".firstLevelMenuSection").length > 0 && fromgridTab != 'GRID') {
                                try {
                                    var gridInitParamObj = response['gridInitParamObj'];
                                    if (gridInitParamObj['uuu_tatShowReport'] != null && gridInitParamObj['uuu_tatShowReport'] != undefined
                                            && gridInitParamObj['uuu_tatShowReport'] != "") {
                                        var uuu_tatShowReport = gridInitParamObj['uuu_tatShowReport'];
                                        if (uuu_tatShowReport != null && uuu_tatShowReport != undefined
                                                && uuu_tatShowReport != '' && uuu_tatShowReport == 'Y') {
                                            $('#dxpFioriContent').show();
                                        }
                                    } else {
                                        $('#dxpFioriContent').hide();
                                    }
                                } catch (e) {

                                }
//                                if(&uuu_tatShowReport=Y)

//                        showSelectedTabContent(null, 'dxpFioriGridContentTab', 'dxpFioriGridContent', tabname, 'N');
                            } else {
                                $('#dxpFioriContent').show();
                                showSelectedTabContent(null, 'dxpFioriContentTab', 'dxpFioriContent', tabname, 'N');
                            }

                        } else {
                            showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', tabname, 'N');
                        }
//                        showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', tabname, 'N');
                    }
                } else {
                    if (fromgridTab != null && fromgridTab != undefined && fromgridTab == 'Y') {
                    } else {
                        if (fioriThemeCheck) {
                            if ($("body").find(".firstLevelMenuSection").length > 0 && fromgridTab != 'GRID') {
                                $('#dxpFioriContent').hide();
//                                showSelectedTabContent(null, 'dxpFioriGridContentTab', 'dxpFioriGridContent', 'View Data', 'N');
                            } else {
                                $('#dxpFioriContent').show();
                                showSelectedTabContent(null, 'dxpFioriContentTab', 'dxpFioriContent', 'View Data', 'N');
                            }

                        } else {
                            showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', 'View Data', 'N');
                        }
//                        showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', 'View Data', 'N');
                    }
                }
                $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
                $("#dxpGridTab").attr("data-selectedgridId", gridId);
                $("#dxpGridTab").attr("data-selectedRoleId", roleId);
                $("#dxpGridTab").attr("data-functionName", "getMaterialComponentGrid");
                $("#dxpFioriContentTab").attr("data-gridcomponenttype", componentType);
                $("#dxpFioriContentTab").attr("data-selectedgridId", gridId);
                $("#dxpFioriContentTab").attr("data-selectedRoleId", roleId);
                $("#dxpFioriContentTab").attr("data-functionName", "getMaterialComponentGrid");
                $("#dxpFioriGridContentTab").attr("data-gridcomponenttype", componentType);
                $("#dxpFioriGridContentTab").attr("data-selectedgridId", gridId);
                $("#dxpFioriGridContentTab").attr("data-selectedRoleId", roleId);
                $("#dxpFioriGridContentTab").attr("data-functionName", "getMaterialComponentGrid");
                if ($("#dxpTabs").is(":visible")) {
                } else {
                    toggleTabsAndMenus(event);
                }
                var rejettype = response['ssRejectCommentObj'];
                var processrejetreasons = response['ssProcessRejectCommentObj'];
                $("#rejectData").val((rejettype));
                $("#rejectReasonsObj").val((rejettype));
                $("#processWiserejectReasonsObj").val((processrejetreasons));
                delete response['ssRejectCommentObj'];
                delete response['ssProcessRejectCommentObj'];
//             showLoader();
                //NKR
                if (fioriThemeCheck) {
                    gridConfig(response, 0, [], gridId);
                    console.log("processFlag value is: ", processFlag);
                    if (processFlag != null && processFlag != undefined && processFlag != '' && processFlag == 'Y') {
                        setTimeout(() => {
                            var title = labelObject['Calculation process completed successfully.'] != null ? labelObject['Calculation process completed successfully.'] : 'Calculation process completed successfully.';
                            $("#dialog1").html(title);
                            $("#dialog1").dialog({resizable: false,
                                modal: true,
                                height: 150,
                                width: 350,
                                fluid: true,
                                buttons: [
                                    {
                                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                        click: function () {
                                            stopLoader();
                                            $(this).empty();
                                            $(this).dialog('close');
                                        }
                                    }
                                ],
                                open: function () {

                                }
                                ,
                                beforeClose: function (event, ui)
                                {
                                    $(".visionHeaderMain").css("z-index", "99999");
                                    $(".visionFooterMain").css("z-index", "99999");
                                }
                            });

                        }, 500);
                    }
                    try {
                        if (fromgridTab != null && fromgridTab != undefined && fromgridTab != '') {
                            var clickedTitle = fromgridTab.target.lastChild.innerText;
                            if (clickedTitle == null || clickedTitle == '' || clickedTitle == undefined) {
                                clickedTitle = fromgridTab.target.lastChild.previousSibling.innerText;
                            }
                            fioriGridTabTitle.textContent = clickedTitle;
                        }
                    } catch (e) {

                    }


                } else {
                    gridConfig(response, 0, [], 'searchGrid');

//                    if (showCalcMsgFlag === true) {
//                        setTimeout(() => {
//                            alert("Calculation Successful");
//                        }, 500);
//                    }
                }
//                if (fioriThemeCheck) {
//                    gridConfig(response, 0, [], gridId);
//                    try {
//                        if (fromgridTab != null && fromgridTab != undefined && fromgridTab != '') {
//                            var clickedTitle = fromgridTab.target.lastChild.innerText;
//                            if (clickedTitle == null || clickedTitle == '' || clickedTitle == undefined) {
//                                clickedTitle = fromgridTab.target.lastChild.previousSibling.innerText;
//                            }
//                            fioriGridTabTitle.textContent = clickedTitle;
//                        }
//                    } catch (e) {
//
//                    }
//
//
//                } else {
//                    gridConfig(response, 0, [], 'searchGrid');
//                }//NKR
//             stopLoader();
                $(".searchDXPCreate").show();
                $("#searchGrid").show();
                $("#searchGrid").css("visibility", "visible");
                $(".dxpClassHideShow").show();
                // $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 1550}]}); //31122
                $("#fourthDxpSplitter").hide();
                $("#thirdDxpSplitter").show();
//            stopLoader();
            }, error: function (e) {
                console.log("The Error Message is:::" + e.message);
                stopLoader();
                sessionTimeout(e);
            }
        });
    } else if (componentType == 'FILTER_GRID') {
        getFilterGridForm(gridId);
    }
}
//function getMaterialComponentGrid(componentType, gridId, roleId, fromgridTab) {
//    showLoader();
//    $("#secondSplitterListData div").removeClass('domainPendingRegactiveTab');
//    $(event.currentTarget).addClass("domainPendingRegactiveTab");
//    let checkbox = $("#cb-switch");
//    var fioriThemeCheck = checkbox.is(":checked");
//    try {
//        if (fioriThemeCheck) {
//            $('#dxpHomeContent').hide();//17-03-2025
////            $('#dxpFioriContent').show();//17-03-2025
//            $('.innerCardWrapper').find('.active').removeClass('active');
//            $(event.currentTarget).addClass("active");
//            const scrollableContainer = document.querySelector('.innerCardWrapper');
//
//            // Add wheel event listener
//            scrollableContainer.addEventListener('wheel', function (event) {
//                // Modify scrollLeft instead of scrollTop for horizontal scrolling
//                if (event.deltaY > 0) {
//                    // Scrolling right
//                    scrollableContainer.scrollLeft += 100; // Adjust scroll amount
//                } else {
//                    // Scrolling left
//                    scrollableContainer.scrollLeft -= 100; // Adjust scroll amount
//                }
//
//                // Prevent the default vertical scroll behavior
//                event.preventDefault();
//            });
//
//        }
//    } catch (e) {
//
//    }
//
////    $("#dxpGridTab").attr("data-gridcomponenttype", "");
////    $("#dxpGridTab").attr("data-selectedgridId", "");
////    $("#dxpGridTab").attr("data-selectedRoleId", "");
////    $("#dxpGridTab").attr("data-functionName", "");
//    if ($('.visionTask').is(':visible')) {
//        let target = event.currentTarget;
//        visionSetTaskActive(target);
//    }
//
//    try {
//        let currentTabName = event.currentTarget.innerText;
//        var tabname = currentTabName.split('\n')[0];
//        insertUserClickedNavigations(tabname);
//    } catch (e) {
//
//    }
//    //NKR//
//
//    //NKR//
//    $("#intellisense").hide();
//    $("#searchResultsCountId").hide();
//    $("#rolehid").val(roleId);
//    //$("#dxp21MainSplitter").jqxSplitter('collapse');
//    $("#dxp21SecondDiv").val('');
//    $("#fourthDxpSplitter").val('');
//    $("#dxp21SecondDiv").show();
//    $('.viewClassDiv').removeClass('active');
//    $("#excelExportsearchResults").show();
//    var selectedValue = $("#SelectedValue").val();
//    $(".searchResultsList").hide();
//    $(".searchDXPCreate").hide();
//    secondPanelShowFlag = true;
//    if (componentType != null && componentType != undefined && componentType != 'FILTER_GRID') {
//
//        $.ajax({
//            datatype: "json",
//            type: "POST",
//            url: 'getCloudGrid',
//            data: {
//                'gridId': gridId,
//                'roleId': roleId,
//            },
//            traditional: true,
//            cache: false,
//            success: function (response) {
//                stopLoader();
//                //NKR//
//                if (fioriThemeCheck) {
//                    if ($("#" + gridId).length != 0) {
//                        try {
//                            $("#" + gridId).jqxGrid('destroy');
//                            $("#" + gridId).remove();
//                        } catch (error) {
//                            console.log(error)
//                            $("#" + gridId).remove();
//                        }
//                    }
//                    if ($("body").find(".firstLevelMenuSection").length > 0) {
//                        $("#dxpFioriGridContent").html("<div id=" + gridId + "></div>");
//                    } else {
//                        $("#dxpFioriContent").html("<div id=" + gridId + "></div>");
//                    }
//
//                } else {
//                    $("#dxpGridContent").html("<div id='searchGrid'></div>");
//                }
//                //NKR//
//
//                if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {
//
//                    if (fromgridTab != null && fromgridTab != undefined && fromgridTab == 'Y') {
//                    } else {
//                        if (!fioriThemeCheck) {
//                            showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', tabname, 'N');
//                        }
////                        showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', tabname, 'N');
//                    }
//
//                } else {
//                    if (fromgridTab != null && fromgridTab != undefined && fromgridTab == 'Y') {
//                    } else {
//                        if (!fioriThemeCheck) {
//                            showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', 'View Data', 'N');
//                        }
////                        showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', 'View Data', 'N');
//                    }
//                }
//                $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
//                $("#dxpGridTab").attr("data-selectedgridId", gridId);
//                $("#dxpGridTab").attr("data-selectedRoleId", roleId);
//                $("#dxpGridTab").attr("data-functionName", "getMaterialComponentGrid");
//                if ($("#dxpTabs").is(":visible")) {
//
//                } else {
//                    toggleTabsAndMenus(event);
//                }
//
//                var rejettype = response['ssRejectCommentObj'];
//                var processrejetreasons = response['ssProcessRejectCommentObj'];
//                $("#rejectData").val((rejettype));
//                $("#rejectReasonsObj").val((rejettype));
//                $("#processWiserejectReasonsObj").val((processrejetreasons));
//                delete response['ssRejectCommentObj'];
//                delete response['ssProcessRejectCommentObj'];
////             showLoader();
//                //NKR
//                if (fioriThemeCheck) {
//                    gridConfig(response, 0, [], gridId);
//                    try {
//                        if (fromgridTab != null && fromgridTab != undefined && fromgridTab != '') {
//                            var clickedTitle = fromgridTab.target.lastChild.innerText;
//                            if (clickedTitle == null || clickedTitle == '' || clickedTitle == undefined) {
//                                clickedTitle = fromgridTab.target.lastChild.previousSibling.innerText;
//                            }
//                            fioriGridTabTitle.textContent = clickedTitle;
//                        }
//                    } catch (e) {
//
//                    }
//
//
//                } else {
//                    gridConfig(response, 0, [], 'searchGrid');
//                }//NKR
////             stopLoader();
//                $(".searchDXPCreate").show();
//                $("#searchGrid").show();
//                $("#searchGrid").css("visibility", "visible");
//                $(".dxpClassHideShow").show();
//                // $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 1550}]}); //31122
//                $("#fourthDxpSplitter").hide();
//                $("#thirdDxpSplitter").show();
////            stopLoader();
//            }, error: function (e) {
//                console.log("The Error Message is:::" + e.message);
//                stopLoader();
//                sessionTimeout(e);
//            }
//        });
//    } else if (componentType == 'FILTER_GRID') {
//        getFilterGridForm(gridId);
//    }
//}
function visionSetTaskActive(target) {
    try {
        let closestRow = target.closest('tr');
        let parentChildren = closestRow.parentElement.children;
        $.each(parentChildren, function () {
            if ($(this).hasClass('visionTaskActive')) {
                $(this).removeClass('visionTaskActive').addClass('visionTaskInActive');
            }
        });
        closestRow.classList.remove('visionTaskInActive');
        closestRow.classList.add('visionTaskActive');
    } catch (e) {
    }
}
function showActionForm() {
    $(".mainBookMark").hide();
    $('#firstDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 270}]});
    $('#fourthDxpSplitter').jqxSplitter('collapse');
    $('.decendingFirstOrder').show();
    $('.mainBookMark').hide();
    $('.searchIconsList').show();
    $('#dxpMaterialListId').show();
    $("#secondDxpSplitter").hide();
    $(".searchIconMainInput").show();
    $("#dxpFilterPopOver").show();
    $(".searchIconFilter").show();
    $("#dxpDecendingOrder").show();
    $("#decendingOrder").show();
}
function showActionListForm() {
    $("#secondDxpSplitter").show();
    firstPanelShowFlag = false;
    secondPanelShowFlag = true;
    getFirstPanelShow(event);
    getSecondPanelShow(event);
    $("#thirdDxpSplitter").hide();
    $("#fourthDxpSplitter").hide();
    $('.viewClassDiv').addClass('active');
    $('.viewFormDiv').removeClass('active');
    $('.viewGridDiv').removeClass('active');
    $('.defaultDiv').removeClass('active');
}
function showActionGridForm(gridId) {
    secondPanelShowFlag = false;
    getSecondPanelShow(event);
    thirdPanelShowFlag = true;
    $('#fourthDxpSplitter').hide();
    showThirdPanel();
    $('.viewFormDiv').removeClass('active');
    $('.viewGridDiv').addClass('active');
    $('.viewClassDiv').removeClass('active');
    $('.defaultDiv').removeClass('active');
    setTimeout(resizable, 200);
    gridoperations(gridId, 'refresh');
}
function openMoreItemsPopup(gridId, operationName) {
    var girdID = gridId;
    $(".openMoreItemsDxpPopupClass").val('');
    $("#openMoreItemsDxpPopup").show();
    $("#openMoreItemsDxpPopup").animate({
        width: 200
    }, 500);
    $("#" + girdID + " .jqx-grid-toolbar").addClass("moreOptions");
}
function dxpMoreItemsPopupClose(id) {
    $("#openMoreItemsDxpPopup").hide();
}
function dxpCustomizeButtons() {
    $("#openMoreItemsDxpPopup").hide();
    var customizeTable = $("#customizeToolbarData").val();
    var modalObj = {
        title: 'Customize',
        body: customizeTable
    };
    var buttonArray = [
        {
            text: 'Reset',
            click: function () {
                dxpCustomizeButtons();
            },
        },
        {
            text: 'Save',
            click: function () {
                dxpCustomizeSave();
            },
            isCloseButton: true
        },
        {
            text: 'Cancel',
            click: function () {
            },
            isCloseButton: true,
        },
    ];
    modalObj['buttons'] = buttonArray;
    createModal("intiateRequestClass", modalObj);
    $(".modal-dialog").addClass("modal-xl dxpToolBarCustomize opacity-animate3");
    callCheckbox();
}
function dxpToolBarBtnClose(divId, checkId) {
    $("#" + divId).hide();
    $("#" + checkId).prop('checked', false);
}
function callCheckbox() {
    $(document).ready(function () {
        $('#customizeAdd').on('change', function (event) {
            var checked = this.checked;
            if (!checked) {
                $("#modalToolbarAdd").hide();
            } else {
                $("#modalToolbarAdd").show();
            }
        });
        $('#customizeDelete').on('change', function (event) {
            var checked = this.checked;
            if (!checked) {
                $("#modalToolbarDelete").hide();
            } else {
                $("#modalToolbarDelete").show();
            }
        });
        $('#customizeRefresh').on('change', function (event) {
            var checked = this.checked;
            if (!checked) {
                $("#modalToolbarRefresh").hide();
            } else {
                $("#modalToolbarRefresh").show();
            }
        });
        $('#customizeCompare').on('change', function (event) {
            var checked = this.checked;
            if (!checked) {
                $("#modalToolbarDataCompare").hide();
            } else {
                $("#modalToolbarDataCompare").show();
            }
        });
        $('#customizeCockpit').on('change', function (event) {
            var checked = this.checked;
            if (!checked) {
                $("#modalToolbarCockpit").hide();
            } else {
                $("#modalToolbarCockpit").show();
            }
        });
        $('#customizeCopy').on('change', function (event) {
            var checked = this.checked;
            if (!checked) {
                $("#modalToolbarCopy").hide();
            } else {
                $("#modalToolbarCopy").show();
            }
        });
        $('#customizeChange').on('change', function (event) {
            var checked = this.checked;
            if (!checked) {
                $("#modalToolbarChange").hide();
            } else {
                $("#modalToolbarChange").show();
            }
        });
        $('#customizeExtend').on('change', function (event) {
            var checked = this.checked;
            if (!checked) {
                $("#modalToolbarExtend").hide();
            } else {
                $("#modalToolbarExtend").show();
            }
        });
        $('#customizeUndelete').on('change', function (event) {
            var checked = this.checked;
            if (!checked) {
                $("#modalToolbarUnDelete").hide();
            } else {
                $("#modalToolbarUnDelete").show();
            }
        });
        $('#customizeDuplicate').on('change', function (event) {
            var checked = this.checked;
            if (!checked) {
                $("#modalToolbarDuplicate").hide();
            } else {
                $("#modalToolbarDuplicate").show();
            }
        });
        $('#customizeAudit').on('change', function (event) {
            var checked = this.checked;
            if (!checked) {
                $("#modalToolbarAudit").hide();
            } else {
                $("#modalToolbarAudit").show();
            }
        });
        $('#customizeEnrich').on('change', function (event) {
            var checked = this.checked;
            if (!checked) {
                $("#modalToolbarEnrichment").hide();
            } else {
                $("#modalToolbarEnrichment").show();
            }
        });
        $('#customizeReVal').on('change', function (event) {
            var checked = this.checked;
            if (!checked) {
                $("#modalToolbarValidate").hide();
            } else {
                $("#modalToolbarValidate").show();
            }
        });
        $('#customizeQuality').on('change', function (event) {
            var checked = this.checked;
            if (!checked) {
                $("#modalToolbarQuality").hide();
            } else {
                $("#modalToolbarQuality").show();
            }
        });
        $('#customizeUpdate').on('change', function (event) {
            var checked = this.checked;
            if (!checked) {
                $("#modalToolbarUpdate").hide();
            } else {
                $("#modalToolbarUpdate").show();
            }
        });
    });
}
function dxpCustomizeSave() {
    var modalObj = {
        title: 'Confirmation',
        body: 'Do you want to save the changes?',
    };
    var buttonArray = [
        {
            text: 'Ok',
            click: function () {
                dxpCustomizeFormUpdate();
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
function dxpCustomizeFormUpdate() {
    showLoader();
    var initParamsUnChecked = '';
    var initParams = '';
    var initParamUnChecked = '';
    var chekedValue = '';
    var initParam = '';
    var checkBoxIds = $('#checkBoxIds').val();
    if (checkBoxIds != null && checkBoxIds != undefined && checkBoxIds != '') {
        var checkBoxIdsArr = checkBoxIds.split(",");
        if (checkBoxIdsArr != null) {
            for (var i = 0; i < checkBoxIdsArr.length; i++) {
                chekedValue = document.getElementById(checkBoxIdsArr[i]).checked;
                if (chekedValue) {
                    initParam = $("#" + checkBoxIdsArr[i]).attr("initparam");
                    if (initParam != null && initParam != undefined && initParam != '') {
                        if (i == 0) {
                            initParams += initParam;
                        } else {
                            if (initParams != '') {
                                initParams += ',' + initParam;
                            } else {
                                initParams += initParam;
                            }

                        }
                    }
                } else {
                    initParamUnChecked = $("#" + checkBoxIdsArr[i]).attr("initparam");
                    if (initParamUnChecked != null && initParamUnChecked != undefined && initParamUnChecked != '') {
                        if (i == 0) {
                            initParamsUnChecked += initParamUnChecked;
                        } else {
                            if (initParamsUnChecked != '') {
                                initParamsUnChecked += ',' + initParamUnChecked;
                            } else {
                                initParamsUnChecked += initParamUnChecked;
                            }

                        }
                    }
                }
            }

        }

    }
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'updateCustomizeToolBar',
        data: {
            'initParams': initParams,
            'initParamsUnChecked': initParamsUnChecked,
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && response != undefined && response != '') {
                var responseObj = JSON.parse(response);
                var message = responseObj['message'];
                var messageFlag = responseObj['messageFlag'];
                if (messageFlag) {
                    var className = $("#currentClass").val();
                    var typedValue = $("#currentTypedValue").val();
                    var domainValue = $("#currentDomain").val();
                    getShowDxpClassSearchResults(className, typedValue, "", "", "", "", "", domainValue);
                }
            }
        }
    });
}
function getMaterialGridResults(compType, compId, roleId, fromgridTab) {
    showLoader();
    $("#intellisense").hide();
    $("#searchResultsCountId").hide();
    //$("#dxp21MainSplitter").jqxSplitter('collapse');
    $("#dxp21SecondDiv").val('');
    $("#fourthDxpSplitter").val('');
    $("#dxp21SecondDiv").show();
    $('.viewClassDiv').removeClass('active');
    $("#excelExportsearchResults").show();
    var selectedValue = $("#SelectedValue").val();
    $("#dxpGridTab").attr("data-gridcomponenttype", "");
    $("#dxpGridTab").attr("data-selectedgridId", "");
    $("#dxpGridTab").attr("data-selectedRoleId", "");
    $("#dxpGridTab").attr("data-functionName", "");
    $(".searchResultsList").hide();
    $(".searchDXPCreate").hide();

    secondPanelShowFlag = true;
    try {
        let currentTabName = event.currentTarget.innerText;
        var tabname = currentTabName.split('\n')[0];
        insertUserClickedNavigations(tabname);
    } catch (e) {

    }
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    if (fioriThemeCheck) {
        $("#dxp2FioriTabsWithGridContent .gridareaSection").hide();
    }
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getCloudGrid',
        data: {
            'gridId': compId,
            'roleId': roleId,
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            // $("#thirdDxpSplitter").val('');
            if (fioriThemeCheck) {
                if ($("#" + compId).length != 0) {
                    try {
                        $("#" + compId).jqxGrid('destroy');
                        $("#" + compId).remove();
                    } catch (error) {
                        console.log(error)
                        $("#" + compId).remove();
                    }
                }
//                $("#showRelatedtabContentID").html("<div id=" + compId + "></div>");
                $("#showRelatedtabContentID").html("");
                $("#showRelatedtabContentID").html("<div id ='gridUI5Filter_" + compId + "'></div><div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div class=\"fiorirightgridControls\"><div class=\"fioriGridSearchwrap\" title = \"Show/Hide Filter\" onclick=\"toggleUI5FilterGridForm('" + compId + "')\"><img src=\"images/iDXPUI5Settings.svg\" title = \"Show/Hide Filter\" width=\"16px\"/></div><div id='submitDropdown" + compId + "' class='visionGenericTabSubmit'></div><div id='exportDropdown" + compId + "' class='visionGenericTabExport'></div></div></div></div></div><div id=" + compId + "></div>");
                $("#gridUI5Filter_" + compId).css("display", "none");
            } else {
                $("#dxpGridContent").html("<div id='searchGrid'></div>");
            }
            if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {

                if (fromgridTab != null && fromgridTab != undefined && fromgridTab == 'Y') {
                } else {
                    if (!fioriThemeCheck) {
                        showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', tabname, 'N');
                    }
                }

            } else {
                if (fromgridTab != null && fromgridTab != undefined && fromgridTab == 'Y') {
                } else {
                    if (!fioriThemeCheck) {
                        showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', 'View Data', 'N');
                    }
                }
            }
            $("#dxpGridTab").attr("data-gridcomponenttype", compType);
            $("#dxpGridTab").attr("data-selectedgridId", compId);
            $("#dxpGridTab").attr("data-selectedRoleId", roleId);
            $("#dxpGridTab").attr("data-functionName", "getMaterialGridResults");
            if ($("#dxpTabs").is(":visible")) {

            } else {
                toggleTabsAndMenus(event);
            }
            gridConfig(response, 0, [], 'searchGrid');
            $(".searchDXPCreate").show();
            $("#searchGrid").show();
            $("#searchGrid").css("visibility", "visible");
            $(".dxpClassHideShow").show();
            // $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 1550}]}); //31122
            $("#fourthDxpSplitter").hide();
            $("#thirdDxpSplitter").show();
            if (compId == 'PM_MOCR_REQ_SAP_INPROCESS_REQUESTS') {
                processStepsInterval = setInterval(function () {
                    // this will run after every 5 seconds
                    refreshMOCRProcessStatus("", "Z");
                }, 1000);
            }
        }
    });
}
function SaveorUpdate1(messageFlag, controlType, type) {
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
    }
    var errorCount = 0;
    var saveResult = false;
    if (errorCount == 0) {
        var basicDataJSON = {};
        var updateJSON = {};
        panalData = {};
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
                }
            }
        });
        if (type == 'RE-EVALUATION')
        {
            panalData['RE_EVALUATION_IND'] = 'Y';
            panalData['SOURCE'] = 'CREATE';
        }
        alert("basicDataJSON::::" + JSON.stringify(panalData));
        console.log("panaloldData::::" + JSON.stringify(panaloldData));
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
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'html',
                url: "panalUpdate",
                cache: false,
//                    async: false,
                async: true,
                data: {'jsonData': jsonString,
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
                    stopLoader();
                    if (messageFlag)
                    {
                        console.log("FIRST:::result::" + result);
                        var res = "";
                        var qstr = {};
                        var jsonData = {};
                        var jsonObj = JSON.parse(result);
                        result = jsonObj.Message;
                        var flag = jsonObj.messageFlag;
                        var dialogSplitMessage = dialogSplitIconText(result, "V");
                        jsonData = jsonObj.ssfromobject;
                        if (jsonData != null) {
                            var stripValue = jsonData['stripValue'];
                            console.log("stripValue:::" + stripValue);
                            if (stripValue != null && stripValue.length != 0) {
                                var stripValueObjArray = [];
                                if (stripValue != null && stripValue.length != 0) {
                                    var stripValueObjArray = [];
                                    for (var i = 0; i < stripValue.length; i++) {
                                        var stripValueObj = {};
                                        if (stripValue[i] != null && stripValue[i] != ''
                                                && typeof stripValue[i] != 'undefined') {
                                            var stripObj = stripValue[i];
                                            if (typeof stripValue[i] == 'object') {
                                                //if (stripObj.value.indexOf(",") > -1) {
                                                stripValueObj.columnName = stripObj['columnName'];
                                                stripValueObj.value = stripObj['value'];
//                                                    stripValueObj.value = encodeURIComponent(stripObj['value']);
                                                stripValueObjArray.push(stripValueObj);
                                                //}
                                            } else {
                                                stripValueObj.columnName = stripObj['columnName'];
                                                stripValueObj.value = stripObj['value'];
                                                stripValueObjArray.push(stripValueObj);
                                            }
                                        }
                                    }
                                }
                            }
                            jsonData['stripValue'] = stripValueObjArray;
                            //stripValue
                        }
                        var baskettype1 = $('#baskettypehid1').val();
                        stopLoader();
                        var modalObj = {
                            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                            body: labelObject[dialogSplitMessage] != null ? labelObject[dialogSplitMessage] : dialogSplitMessage,
                        };
                        var buttonArray = [
                            {
                                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                click: function () {
                                    if (flag) {
                                        $("#accordion").accordion({'active': 'none'});
                                        var paramsData = {};
                                        var urlString = $('#urlString').val();
                                        if (urlString == "clusterFormData" && urlString != null) {
                                            if (baskettype1 != 'New Registrations') {
                                                paramsData = {
                                                    items: JSON.stringify(jsonData)
                                                }
                                                dataOnPopup(paramsData);
                                            } else {
                                                var regExp = /^MM|^SM/g;
                                                var initTabOpenFlag = $("#rolehid").val().match(regExp);
                                                if (initTabOpenFlag != null && initTabOpenFlag.length > 0) {
                                                } else {
                                                }
                                            }
                                        } else {
                                            if (baskettype1 != 'New Registrations') {
                                                $("#items").val(JSON.stringify(jsonData));
                                                //  $("#submitForm").attr("action", "formData");
                                                $("#submitForm").submit();
                                            } else {
                                                var regExp = /^MM|^SM/g;
                                                var initTabOpenFlag = $("#rolehid").val().match(regExp);
                                                if (initTabOpenFlag != null && initTabOpenFlag.length > 0) {
                                                } else {
                                                }
                                            }
                                            // after updating refresh the old data.
                                            panaloldData = {};
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
                                        }
                                    }
                                },
                                isCloseButton: true
                            }
                        ];
                        modalObj['buttons'] = buttonArray;
                        createModal("dataDxpSplitterValue", modalObj);
                        $(".modal-dialog").addClass("modal-xs");
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
                $("#dis" + textIdKey).html(resultArray[textIdKey]);
                $("#dis" + textIdKey).show();
            }
            stopLoader();
        }
    }
    return saveResult;
}
function onSubmitIncl1(controlInd, returnReason, success_msg, dataReturnReason) {
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var roleId = $("#rolehid").val();
    var roleStartsWith = roleId.substring(0, 2);
    var moduleCode = $("#modulehid").val();
    var status = $("#STATUS").val();
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
    controlInd = controlInd.toUpperCase();
    console.log(roleStartsWith + ":::::;;4276:::onSubmitIncl:::controlInd::::" + controlInd);
    var ssDuplCheckEnableFlag = $("#ssDuplCheckEnableFlag").val();
    if ((roleStartsWith == "VM" || roleStartsWith == "CM")) {
//        if ((roleStartsWith == "VM" || roleStartsWith == "CM") && controlInd.indexOf("Delete") == -1 && controlInd.indexOf("DELETE") == -1 && controlInd.indexOf("Return") == -1 && controlInd.indexOf("RETURN") == -1) {
        var vmDuplOnSubmit = "";
        vmDuplOnSubmit = $("#vmDuplOnSubmit").val();
        if (vmDuplOnSubmit == null) {
            vmDuplOnSubmit = "";
        }
        if (true) {
            var req = {};
            req.type = 'POST';
            req.traditional = true;
            req.dataType = 'html';
            req.url = 'duplicatecheckvendor';
            req.data = {
                basicData: JSON.stringify(basicData),
//                    vendorName: $("#SUPPLIER_NAME").val().toUpperCase()
            };
            req.success = function (result) {
                stopLoader();
                stopLoader();
                var dataObj = JSON.parse(result);
                if (!dataObj['flag']) {
                    onSubmit(controlInd, returnReason, success_msg, "");
                } else {
                    var modalObj = {
                        title: (labelObject['Duplicates Found'] != null ? labelObject['Duplicates Found'] : 'Duplicates Found'),
                        body: labelObject[dataObj['message']] != null ? labelObject[dataObj['message']] : dataObj['message'],
                    };
                    var buttonArray = [
                        {
                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                            click: function () {
                                var vmDuplPopUp = "";
                                vmDuplPopUp = $("#vmDuplPopUp").val();
                                if (vmDuplPopUp == null) {
                                    vmDuplPopUp = "";
                                }

                                var role = $("#rolehid").val();
                                if ((dataReturnReason != null && dataReturnReason != '') && dataReturnReason == '7' || dataReturnReason == '1') {
                                    try {
                                        if (controlInd != null && controlInd != '') {
                                            controlInd = controlInd.toUpperCase();
                                        }

                                    } catch (e) {

                                    }
                                    console.log(controlInd + ":::1531:::::::::::::::");
                                    var msgTitle = "Duplicate comment";
                                    msgTitle = (labelObject[msgTitle] != null ? labelObject[msgTitle] : msgTitle);
                                    var rejectType = $("#rejectType").val();
                                    if (rejectType == 0)
                                    {
                                        response = "";
                                        $("#textReason").html("");
                                        response += "<div id='textReason'>";
                                        response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                                        response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
                                        $("#dialog").html(response);
                                    } else if (rejectType == 1)
                                    {
                                        response = "";
                                        $("#reasonDialog").html("");
                                        var rejectData = $("#rejectData").val();
                                        console.log(rejectData);
                                        response += "<div id='rejectComboBox' class='visionRejectFormComboBox'></div>";
                                        response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
                                        $("#dialog").html(response);
                                        if (rejectData != null && rejectData != '') {
                                            var rejectDataArray = JSON.parse(rejectData);
                                            $("#rejectComboBox").jqxComboBox({source: rejectDataArray, searchMode: 'contains', multiSelect: true, width: 280, height: 25});
                                        }
                                    } else if (rejectType == 4)
                                    {
                                        response = "";
                                        $("#reasonDialog").html("");
                                        var rejectData = $("#rejectData").val();
                                        console.log(rejectData);
                                        response += "<div id='rejectComboBox'  class='visionRejectFormComboBox'></div>";
                                        $("#textReason").html("");
                                        response += "<div id='textReason'>";
                                        response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                                        response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
                                        $("#dialog").html(response);
                                        if (rejectData != null && rejectData != '') {
                                            var rejectDataArray = JSON.parse(rejectData);
                                            $("#rejectComboBox").jqxComboBox({source: rejectDataArray,
                                                searchMode: 'containsignorecase',
                                                multiSelect: true,
                                                autoComplete: true,
                                                theme: 'energyblue',
                                                openDelay: 1,
                                                closeDelay: 1,
                                                enableSelection: true,
                                                width: 280, height: 25});
                                        }
                                    }
                                    var modalObj = {
                                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                                        body: '',
                                    };
                                    var buttonArray = [
                                        {
                                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                            click: function () {
                                                var retReasonText = "";
                                                var returnReasonData = "";
                                                var checkBoxdata = "";
                                                if (rejectType == 0)
                                                {
                                                    var textBoxData = $("#reasonId").val();
                                                    retReasonText = textBoxData;
                                                } else if (rejectType == 1)
                                                {
                                                    var selectReason = $("#rejectComboBox").jqxComboBox('getSelectedItems');
                                                    for (var i = 0; i < selectReason.length; i++)
                                                    {
                                                        checkBoxdata += selectReason[i].value;
                                                        checkBoxdata += ",";
                                                    }
                                                    if (checkBoxdata != null && checkBoxdata != '')
                                                    {
                                                        var returnReasonData = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                                        retReasonText = returnReasonData;
                                                    }
                                                } else if (rejectType == 4)
                                                {
                                                    var selectReason = $("#rejectComboBox").jqxComboBox('getSelectedItems');
                                                    for (var i = 0; i < selectReason.length; i++)
                                                    {
                                                        checkBoxdata += selectReason[i].value;
                                                        checkBoxdata += ",";
                                                    }
                                                    if (checkBoxdata != null && checkBoxdata != '')
                                                    {
                                                        var returnReasonData = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                                        retReasonText = returnReasonData;
                                                        var textBoxData = $("#reasonId").val();
                                                        if (returnReasonData != null && returnReasonData != '')
                                                        {
                                                            retReasonText = returnReasonData + ", " + textBoxData;
                                                        } else {
                                                            retReasonText = textBoxData;
                                                        }
                                                    } else
                                                    {
                                                        var textBoxData = $("#reasonId").val();
                                                        if (returnReasonData != null && returnReasonData != '')
                                                        {
                                                            retReasonText = returnReasonData + ", " + textBoxData;
                                                        } else {
                                                            retReasonText = textBoxData;
                                                        }
                                                    }
                                                } else
                                                {
                                                    if (returnReason != null && returnReason != '') {
                                                        retReasonText = returnReason + "," + retReasonText;
                                                    }
                                                    onSubmit(controlInd, retReasonText, success_msg);
                                                }
                                                if (!retReasonText)
                                                {
                                                    $("#dailog_error_id").show();
                                                } else if (retReasonText != null)
                                                {
                                                    $("#dailog_error_id").hide();
                                                    if (returnReason != null && returnReason != '') {
                                                        retReasonText = returnReason + "," + retReasonText;
                                                    }
                                                    onSubmit(controlInd, retReasonText, success_msg);
                                                } else
                                                {
                                                    var returnReasonData = selectReason;
                                                    console.log("returnReasonData:::" + returnReasonData);
                                                    if (returnReasonData == '' && returnReasonData == null)
                                                    {
                                                        $("#dailog_error_id").show();
                                                    }
                                                    //returnReason = returnReason.trim();
                                                    if (returnReasonData != '' && returnReasonData != null) {
                                                        $("#dailog_error_id").hide();
                                                        onSubmit(controlInd, returnReasonData, success_msg);
                                                    } else
                                                    {
                                                        $("#dailog_error_id").show();
                                                    }
                                                }

                                                showLoader();
                                            },
                                            isCloseButton: true
                                        }
                                    ];
                                    modalObj['buttons'] = buttonArray;
                                    createModal("dataDxpSplitterValue", modalObj);
                                    $(".modal-dialog").addClass("modal-xs");
                                } else {
                                    $("#wait").css("display", "block");
                                    //onSubmit(controlInd, '', success_msg, "");
                                    onSubmit(controlInd, returnReason, success_msg);
                                }

                                $(this).dialog("close");
                            },
                            isCloseButton: true
                        }
                    ];
                    modalObj['buttons'] = buttonArray;
                    createModal("dataDxpSplitterValue", modalObj);
                    $(".modal-dialog").addClass("modal-xs");
                    $("#dialog2").dialog('open');
                    var heightGrid;
                    if (dataObj['count'] >= 5)
                    {
                        heightGrid = "250";
                    } else
                    {
                        heightGrid = "auto";
                    }
                    $("#dialog2").dialog({resizable: false,
                        height: heightGrid
                    });
                }
            };
            $.ajax(req);
        } else {
            onSubmit(controlInd, returnReason, success_msg, "");
        }
    } else if ((roleStartsWith == 'MM' || roleStartsWith == 'SM')) {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            url: "duplicateCheck",
            cache: false,
            data: {'basicData': JSON.stringify(basicData),
                ModelSpecDuplicateFlag: $("#ModelSpecDuplicateChecFlag").val()

            },
            success: function (result) {
                stopLoader();
                var duplicateObj = JSON.parse(result);
                if (duplicateObj['messageFlag']) {
                    try {
                        delete basicData['typ3Matched'];
                    } catch (e) {
                    }
                    basicData['typ3Matched'] = duplicateObj['typ3Matched'];
                    showOnSubmitDuplicates(basicData, ssDuplCheckEnableFlag, controlInd, returnReason, success_msg, dataReturnReason);
                } else {
                    onSubmit(controlInd, returnReason, success_msg, "");
                }
            },
            error: function (e) {
                sessionTimeout(e);
            }
        });
    } else {
        onSubmit(controlInd, returnReason, success_msg, "");
    }
}
function onSubmit1(controlInd, returnReason, success_msg, updatedUser, duplicateCheckMergeFlag, masterRecordData, basicData) {
    showLoader(); /* ramu commented */
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    if (basicData != null && !jQuery.isEmptyObject(basicData)) {
        var controlType = "controlType";
        var commentVal = $("#rejColumn").val();
        var rejColumn = "rejColumn";
        var rejectComment = "rejectComment";
        var ACCEPT_COMMENT = "ACCEPT_COMMENT";
        basicDatas = basicData;
        basicDatas[controlType] = controlInd;
        //basicDatas[ACCEPT_COMMENT] = commentVal1;
        basicDatas[rejColumn] = commentVal;
        basicDatas[rejectComment] = returnReason;
    } else {
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
            var controlType = "controlType";
            var commentVal = $("#rejColumn").val();
            var rejColumn = "rejColumn";
            var rejectComment = "rejectComment";
            var ACCEPT_COMMENT = "ACCEPT_COMMENT";
            if (textid != null && textid != 'CREATE_DATE') {
                basicDatas[textid] = textval;
                basicDatas[controlType] = controlInd;
                //basicDatas[ACCEPT_COMMENT] = commentVal1;
                basicDatas[rejColumn] = commentVal;
                basicDatas[rejectComment] = returnReason;
            }
            if (textid != null && textid.lastIndexOf("HIDDEN") > -1) {
                var columnNames = $("#" + textid).val();
                var columnsArray = columnNames.split(",");
                var hiddenIds = textid.split("HIDDEN_");
                // ////////alert("hiddenIds:::" + hiddenIds);
                console.log("textid::::" + textid);
                var hiddenVal = $("#" + hiddenIds[1]).val();
                for (var i = 0; i < columnsArray.length; i++) {
                    if (hiddenVal != null) {
                        hiddenVal = hiddenVal.toUpperCase();
                    }
                    basicDatas[columnsArray[i]] = hiddenVal;
                }
            }
        });
    }
    var controltype = controlInd;
    var ERP_COMMENT = returnReason;
    var baskettype = $("#baskettypehid").val();
    var formIds = $("#formId").val();
    if (updatedUser != null && updatedUser != '' && updatedUser != 'null')
    {
        basicDatas['updatedUser'] = updatedUser;
    }
    $.ajax({
        type: "post",
        url: "formSubmit",
        cache: false,
        data: {
            'jsonData': JSON.stringify(basicDatas),
            'masterRecordData': JSON.stringify(masterRecordData),
            'basketType': baskettype,
        },
        traditional: true,
        dataType: 'html',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
            showLoader();
        }, loadError: function (xhr, status, error) {
            stopLoader();
            throw new Error(error);
        }, loadComplete: function (data)
        {
            stopLoader();
        },
        success: function (response) {
            stopLoader();
            console.log("response::::" + response);
            var jsonObj = JSON.parse(response);
            var message = jsonObj.Message;
            var flag = jsonObj.messageFlag;
            var modalObj = {
                title: 'Message',
                body: message
            };
            var buttonArray = [
                {
                    text: 'Ok',
                    click: function () {
                    },
                    isCloseButton: true
                }
            ];
            modalObj['buttons'] = buttonArray;
            createModal("intiateRequestClass", modalObj);
        },
        error: function (e) {
            sessionTimeout(e);
        }
    });
    stopLoader();
}
function dialogWidth1(message, dailogProps)
{
    var messagecount = message.length;
    if (messagecount < 25) {
        dailogProps.width = 300;
    } else if ((messagecount >= 25) && (messagecount <= 42)) {

        dailogProps.width = 330;
    } else if ((messagecount >= 43) && (messagecount <= 52))
    {
        dailogProps.width = 390;
    } else if ((messagecount >= 51) && (messagecount <= 62))
    {
        dailogProps.width = 455;
    } else {
        dailogProps.width = 500;
    }
}
function showActionBasketForm() {
    $(".mainBasketBookMark").hide();
    $(".dxpMaterialListClass").show();
    $('#firstDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 270}]});
    $('#fourthDxpSplitter').jqxSplitter('collapse');
    $('.decendingFirstOrder').show();
    $('.searchIconsList').show();
    $('#dxpMaterialListId').show();
    $("#secondDxpSplitter").hide();
    $(".searchIconMainInput").show();
    $("#dxpFilterPopOver").show();
    $(".searchIconFilter").show();
    $("#dxpDecendingOrder").show();
    $("#decendingOrder").show();
}
function showActionBasketListForm() {
    $("#secondDxpSplitter").show();
    firstPanelShowFlag = false;
    secondPanelShowFlag = true;
    getFirstPanelShow(event);
    getSecondPanelShow(event);
    $("#thirdDxpSplitter").hide();
    $("#fourthDxpSplitter").hide();
    $('.viewClassBasketDiv').addClass('active');
    $('.viewFormBasketDiv').removeClass('active');
    $('.viewGridBasketDiv').removeClass('active');
    $('.defaultBasketDiv').removeClass('active');
}
function showActionBasketGridForm(gridId) {
    secondPanelShowFlag = false;
    getSecondPanelShow(event);
    thirdPanelShowFlag = true;
    $('#fourthDxpSplitter').hide();
    showThirdPanel();
    $('.viewFormBasketDiv').removeClass('active');
    $('.viewGridBasketDiv').addClass('active');
    $('.viewClassBasketDiv').removeClass('active');
    $('.defaultBasketDiv').removeClass('active');
    $(".searchIconMainInput").hide();
    $(".searchIconFilter").hide();
    $("#dxpFilterPopOver").hide();
    $(".filterDxpResults").hide();
    $("#dxpDecendingOrder").hide();
    setTimeout(resizable, 200);
    var currentGridId = $("#currentGridId").val();
    gridoperations(currentGridId, 'refresh');
}
function copyRequest1() {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var gridId = $("#gridId").val();
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
        copyData[textid] = textval;
        if (textid != null && textid.lastIndexOf("HIDDEN") > -1) {
            var columnNames = $("#" + textid).val();
            var columnsArray = columnNames.split(",");
            var hiddenIds = textid.split("HIDDEN_");
            var hiddenVal = $("#" + hiddenIds[1]).val();
            for (var i = 0; i < columnsArray.length; i++) {
                if (hiddenVal != null) {
                    hiddenVal = hiddenVal.toUpperCase();
                }
                copyData[columnsArray[i]] = hiddenVal;
            }
        }
    });
    $.ajax({
        type: "POST",
        traditional: true,
        dataType: 'json',
        data: {
            gridId: gridId
        },
        url: "instanceDataMgr",
        cache: false,
        async: false,
        success: function (response) {
            stopLoader();
            console.log("response::::4061:::;" + response);
            var plantdata = response['plantdata'];
            if (response != null && response['instantPopupFlag'] != '') {
                var instantPopupFlag = response['instantPopupFlag'];
                if (instantPopupFlag != null && instantPopupFlag != ''
                        && instantPopupFlag == 'N') {
                    plantdata = '';
                    var selectedInstanceValue = "100:ALL"
                    showLoader();
                    copyRequestProcess(copyData, selectedInstanceValue);
                }
            }
            if (response != null && plantdata != '') {

                var instanceDropDownDiv = "<div class='visionFormExtendDropdown'><div class='visionFormExtendTitle'>"
                        + (labelObject['Instance : Plant'] != null ? labelObject['Instance : Plant'] : 'Instance : Plant')
                        + "</div><div id='instance_div' class='visionFormExtendInfo'>" +
                        "" + response['plantdata'] +
                        "</div></div>";
                $("#dataDxpSplitterValue").html(instanceDropDownDiv);
                $("#selectedInstance").chosen({allow_single_deselect: true});
                stopLoader();
                var modalObj = {
                    title: (labelObject['Instance : Plant'] != null ? labelObject['Instance : Plant'] : 'Instance : Plant'),
                    body: instanceDropDownDiv,
                };
                var buttonArray = [
                    {
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {
                            var selectedInstanceValue = $('#selectedInstance').val();
                            console.log("selectedInstance::::" + selectedInstanceValue);
                            if (selectedInstanceValue != null && selectedInstanceValue != '') {
                                showLoader();
                                copyRequestProcess(copyData, selectedInstanceValue);
                            }
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
                $(".modal-dialog").addClass("modal-xs");
            }
        },
        error: function (e) {
            //  ////////alert(e.message)
            sessionTimeout(e);
        }
    });
}
function copyRequestProcess1(copyData, selectedInstanceValue) {
//    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var selectedInstance = selectedInstanceValue.split(':');
    copyData['NEW_INSTANCE'] = selectedInstance[0];
    copyData['NEW_BUSINESS_UNIT'] = selectedInstance[1];
    copyData['NEW_PLANT'] = selectedInstance[1];
    var controlType = "Copy";
    var copyId = $('#copyId').val();
    var copyJSON = {};
    copyJSON.formdata = copyData;
    copyJSON.ssfromobject = copyData;
    var jsonString = JSON.stringify(copyJSON);
    $.ajax({
        type: 'post',
        url: 'copyRecords',
        async: true,
        data: {'jsonData': jsonString,
            'copyId': copyId, 'controlType': controlType, 'formId': $("#objectid").val()
        },
        success: function (response) {
            stopLoader();
            alert("JSON.parse(response)::::" + response);
            var jsonData = {};
            var jsonObj = JSON.parse(response);
            response = jsonObj.Message;
            var flag = jsonObj.messageFlag;
            var dialogSplitMessage = dialogSplitIconText(response, flag);
            jsonData = jsonObj.ssfromobject;
            if (jsonData != null) {
                var stripValue = jsonData['stripValue'];
                console.log("stripValue:::" + stripValue);
                if (stripValue != null && stripValue.length != 0) {
                    var stripValueObjArray = [];
                    for (var i = 0, max = 10; i < stripValue.length; i++) {
                        var stripValueObj = {};
                        var stripObj = stripValue[i];
                        stripValueObj.columnName = stripObj['columnName'];
                        stripValueObj.value = stripObj['value'];
//                                        stripValueObj.value = encodeURIComponent(stripObj['value']);
                        stripValueObjArray.push(stripValueObj);
                    }

                }
                jsonData['stripValue'] = stripValueObjArray;
                //stripValue
            }

            var modalObj = {
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                body: dialogSplitMessage,
            };
            var buttonArray = [
                {
                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                    click: function () {
                        if (flag) {

                            registerPanels(jsonData, jsonData);
                        }
                    },
                    isCloseButton: true
                }
            ];
            modalObj['buttons'] = buttonArray;
            createModal("dataDxpSplitterValue", modalObj);
            $(".modal-dialog").addClass("modal-xs");
        },
        error: function (e)
        {
            sessionTimeout(e);
        }

    });
}
function dataOnPopup1(paramsData) {
    showLoader();
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
//                    $.getScript("/VisionDev/js/valid.js");
//                    $.getScript("/VisionDev/js/uniquefunctions.js")
                    var modalObj = {
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                        body: response,
                    };
                    var buttonArray = [
                        {
                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                            click: function () {
                                newDxpClassCreation(data['TERM']);
                            },
                            isCloseButton: true
                        }
                    ];
                    modalObj['buttons'] = buttonArray;
                    createModal("dataDxpSplitterValue", modalObj);
                    $(".modal-dialog").addClass("modal-xs");
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
                    });
                    $('.visionRegisterMaterialTableTab').on("click", "li", function () {
                        var self = this;
                        setTimeout(function () {
                            var theOffset = $(self).offset();
                            $('body,html').animate({scrollTop: theOffset.top - 80});
                            $(this).next().visionTabMenuFormData('show', 20);
                        }, 310); // ensure the collapse animation is done
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
var response = "";
function returnReasons1(controlInd, success_msg, duplicateCheckMergeFlag, masterRecordData)
{
    try {
        controlInd = controlInd.toUpperCase();
    } catch (e) {

    }
    console.log(controlInd + ":::1531:::::::::::::::");
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var msgTitle = "";
    if (controlInd.lastIndexOf("DELETE") > -1) {
        msgTitle = "Deletion Reason";
    } else {
        msgTitle = "Rejection Reason";
    }
    msgTitle = (labelObject[msgTitle] != null ? labelObject[msgTitle] : msgTitle);
    var rejectType = $("#rejectType").val();
    if (rejectType == null || rejectType == '' || rejectType == undefined) {
        rejectType = 0;
    }
    if (rejectType == 0)
    {
        response = "";
        $("#textReason").html("");
        ////////////////////alert("after empty");
        response += "<div id='textReason'>";
        response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
        response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
        $("#dialog2").html(response);
    } else if (rejectType == 1)
    {
        response = "";
        $("#reasonDialog").html("");
        var rejectData = $("#rejectData").val();
        console.log(rejectData);
        response += "<div id='rejectComboBox' class='visionRejectFormComboBox'></div>";
        response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
        $("#dialog2").html(response);
        if (rejectData != null && rejectData != '') {
            var rejectDataArray = JSON.parse(rejectData);
            $("#rejectComboBox").jqxComboBox({source: rejectDataArray, searchMode: 'contains', multiSelect: true, width: 280, height: 25});
        }
    } else if (rejectType == 4)
    {
        response = "";
        $("#reasonDialog").html("");
        var rejectData = $("#rejectData").val();
        console.log(rejectData);
        response += "<div id='rejectComboBox'  class='visionRejectFormComboBox'></div>";
        $("#textReason").html("");
        ////////////////////alert("after empty");
        response += "<div id='textReason'>";
        response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
        response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
        $("#dialog2").html(response);
        if (rejectData != null && rejectData != '') {
            var rejectDataArray = JSON.parse(rejectData);
            $("#rejectComboBox").jqxComboBox({source: rejectDataArray,
                searchMode: 'containsignorecase',
                multiSelect: true,
                autoComplete: true,
                theme: 'energyblue',
                openDelay: 1,
                closeDelay: 1,
                enableSelection: true,
                width: 280, height: 25});
        }
    }
    var modalObj = {
        title: labelObject['Return/Rejection reason'] != null ? labelObject['Return/Rejection reason'] : 'Return/Rejection reason',
        body: response,
    };
    var buttonArray = [
        {
            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
            click: function () {
                var retReasonText = "";
                var returnReason = "";
//                        var selectReason = $("#selectReason").val();
                var checkBoxdata = "";
                if (rejectType == 0)
                {
                    var textBoxData = $("#reasonId").val();
                    retReasonText = textBoxData;
                } else if (rejectType == 1)
                {
                    var selectReason = $("#rejectComboBox").jqxComboBox('getSelectedItems');
                    for (var i = 0; i < selectReason.length; i++)
                    {
                        checkBoxdata += selectReason[i].value;
                        checkBoxdata += ",";
                    }
                    if (checkBoxdata != null && checkBoxdata != '')
                    {
                        var returnReason = checkBoxdata.substring(0, checkBoxdata.length - 1);
                        retReasonText = returnReason;
                    }
                } else if (rejectType == 4)
                {
                    var selectReason = $("#rejectComboBox").jqxComboBox('getSelectedItems');
                    for (var i = 0; i < selectReason.length; i++)
                    {
                        checkBoxdata += selectReason[i].value;
                        checkBoxdata += ",";
                    }
                    if (checkBoxdata != null && checkBoxdata != '')
                    {

                        var returnReason = checkBoxdata.substring(0, checkBoxdata.length - 1);
                        retReasonText = returnReason;
                        var textBoxData = $("#reasonId").val();
                        if (textBoxData != null && textBoxData != '')
                        {
                            retReasonText = returnReason + ", " + textBoxData;
                        }


                    } else
                    {
                        var textBoxData = $("#reasonId").val();
                        if (textBoxData != null && textBoxData != '')
                        {
                            retReasonText = textBoxData;
                        }
                    }
                } else
                {
                    onSubmit(controlInd, retReasonText, success_msg, "", duplicateCheckMergeFlag, masterRecordData);
//                            onSubmit(controlInd, retReasonText, success_msg);
                }
                ////////////////////////////////////alert("rettext:::"+retReasonText);
                if (!retReasonText)
                {
                    ////////////////////////////////////alert("empty"+retReasonText);
                    $("#dailog_error_id").show();
                } else if (retReasonText != null)
                {
                    $("#dailog_error_id").hide();
                    onSubmit(controlInd, retReasonText, success_msg, "", duplicateCheckMergeFlag, masterRecordData);
                } else
                {
                    var returnReason = selectReason;
//                            var returnReason = rejectArray;
                    console.log("returnReason:::" + returnReason);
                    if (returnReason == '' && returnReason == null)
                    {
                        $("#dailog_error_id").show();
                    }
                    //returnReason = returnReason.trim();
                    if (returnReason != '' && returnReason != null) {
                        $("#dailog_error_id").hide();
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        onSubmit(controlInd, returnReason, success_msg, "", duplicateCheckMergeFlag, masterRecordData);
                    } else
                    {
                        $("#dailog_error_id").show();
                    }
                }

                showLoader();
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    createModal("dataDxpSplitterValue", modalObj);
    $(".modal-dialog").addClass("modal-xs");
}
function showDuplicates1(basicData) {
    showLoader();
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var duplicateCheckGridId = $("#duplicateCheckGridId").val();
    $.ajax({
        type: 'post',
        url: 'duplicatecheckGrid',
        async: true,
        data: {gridId: duplicateCheckGridId
        },
        success: function (response) {
            stopLoader();
            if (response != null && response != '') {
                var gridResultObj = JSON.parse(response);
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
                showDuplicatesGrid(basicData, gridResultObj, 0, pageSize, 30);
                $("#duplicateCheckForm").dialog({resizable: false,
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
                                $(this).dialog('close');
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
            sessionTimeout(e);
        }

    });
}
function showDuplicatesGridbackup(basicData, gridResultObj, recordstartindex, pagesize, recordendindex) {
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
function getDxpDecompositionTreeForm(gridId, reqType) {
    showLoader(); //dataUnificationMainDiv
    $("#treeContainerWithBoxes").hide();
    $.ajax({
        type: "POST",
        url: 'getDxpDecompositionTree',
        data: {
            'gridId': gridId,
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            var result = JSON.parse(response);
            $(".visualizationDashboardView").hide();
            $("#mainDxpSplitter").show();
            $("#firstDxpSplitter").html(result['result']);
            $("#secondDxpSplitter").show();
            $("#searchGrid").css("visibility", "visible");
            var treeData = result['result'];
            var margin = {top: 150, right: 120, bottom: 150, left: 120},
                    width = 1600 - margin.right - margin.left,
                    height = 900 - margin.top - margin.bottom;
            var i = 0,
                    duration = 1500,
                    root;
            var tree = d3.layout.tree()
                    .size([height, width]);
            var diagonal = d3.svg.diagonal()
                    .projection(function (d) {
                        return [d.y, d.x];
                    });
            var svg = d3.select("#firstDxpSplitter").append("svg")
                    .attr("width", width + margin.right + margin.left)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            root = treeData[0];
            root.x0 = height / 2;
            root.y0 = 0;
            root.children.forEach(collapse);
            function collapse(d) {
                if (d.children) {
                    d._children = d.children;
                    d._children.forEach(collapse);
                    d.children = null;
                }
            }
            update(root);
            d3.select(self.frameElement).style("height", "800px");
            function update(source) {

                var nodes = tree.nodes(root).reverse(),
                        links = tree.links(nodes);
                var nodeLength = nodes.length;
                nodes.forEach(function (d) {
                    d.y = d.depth * 180;
                });
                // Update the nodes…
                var node = svg.selectAll("g.node")
                        .data(nodes, function (d) {
                            return d.id || (d.id = ++i);
                        });
                // Enter any new nodes at the parent's previous position.
                var nodeEnter = node.enter().append("g")
                        .attr("class", "node")
                        .attr("transform", function (d) {
                            return "translate(" + source.y0 + "," + source.x0 + ")";
                        })
                        .on("click", click);
                nodeEnter.append("circle")
                        .attr("r", 1e-6)
                        .style("fill", function (d) {
                            return d._children ? "lightsteelblue" : "#fff";
                        });
                nodeEnter.append("text")
                        .attr("x", function (d) {
                            return d.children || d._children ? -13 : 13;
                        })
                        .attr("dy", ".35em")
                        .attr("text-anchor", function (d) {
                            return d.children || d._children ? "end" : "start";
                        })
                        .text(function (d) {
                            return d.name;
                        })
                        .style("fill-opacity", 1e-6);
                // Transition nodes to their new position.
                var nodeUpdate = node.transition()
                        .duration(duration)
                        .attr("transform", function (d) {
                            return "translate(" + d.y + "," + d.x + ")";
                        });
                nodeUpdate.select("circle")
                        .attr("r", 10)
                        .style("fill", function (d) {
                            return d._children ? "lightsteelblue" : "#fff";
                        });
                nodeUpdate.select("text")
                        .style("fill-opacity", 1);
                // Transition exiting nodes to the parent's new position.
                var nodeExit = node.exit().transition()
                        .duration(duration)
                        .attr("transform", function (d) {
                            return "translate(" + source.y + "," + source.x + ")";
                        })
                        .remove();
                nodeExit.select("circle")
                        .attr("r", 1e-6);
                nodeExit.select("text")
                        .style("fill-opacity", 1e-6);
                // Update the links…
                var link = svg.selectAll("path.link")
                        .data(links, function (d) {
                            return d.target.id;
                        });
                // Enter any new links at the parent's previous position.
                link.enter().insert("path", "g")
                        .attr("class", "link")
                        .attr("d", function (d) {
                            var o = {x: source.x0, y: source.y0};
                            return diagonal({source: o, target: o});
                        });
                // Transition links to their new position.
                link.transition()
                        .duration(duration)
                        .attr("d", diagonal);
                // Transition exiting nodes to the parent's new position.
                link.exit().transition()
                        .duration(duration)
                        .attr("d", function (d) {
                            var o = {x: source.x, y: source.y};
                            return diagonal({source: o, target: o});
                        })
                        .remove();
                // Stash the old positions for transition.

                nodes.forEach(function (d) {
                    d.x0 = d.x;
                    d.y0 = d.y;
                });
            }

        }
    });
}
function decompositionBoxesTree(gridId, levelFlag) {

    if (levelFlag != null && levelFlag != undefined && levelFlag != ''
            && levelFlag == true) {
        addCustomLevel = true;
    }
    if (gridId == "" || gridId == null || gridId == undefined) {
        gridId = "DATA_UNIFICATION_PORTAL_TREE_GRID";
    }
    showLoader();
    $("#mainDxpSplitter").hide();
    $(".visualizationDashboardView").hide();
    $.ajax({
        type: "POST",
        url: 'getDxpDecompositionBoxesTree',
        data: {
            'gridId': gridId,
            addCustomLevel: addCustomLevel,
        },
        traditional: true,
        cache: false,
        success: function (response) {
            addCustomLevel = false;
            $(".svgContainer").remove();
            var result = JSON.parse(response);
            var treeData = result;
            $("#treeContainerWithBoxes").show();
            var result = treeData['result'];
            var exportBoxTreeJson = {}; //30422 working on exporting the tree
            exportBoxTreeJson['data'] = treeData['tree'];
//            exportBoxTreeJson['headers'] = Object.keys(treeData['tree']);
            treeDataArr = [];
            nestedObjToArray(exportBoxTreeJson['data']);
            createTableFromArray(treeDataArr); //10522
            $("#dxpDecompositionLevels").html(result);
            d3.json(treeData, function (error, json) {
                treeData['tree']['collapse'] = false;
                var color, colorHex, depthLevel;
                $(".colorAdder").on('input', function (event) {//27422
                    color = $(this).val();
                    depthLevel = $(this).attr("level");
                    changeTreeColor(color, depthLevel); //27422
                });
                $("#collapseChildren").click(function (event) {
                    dropDownLevel();
                    if (globalTreeData) {
                        globalTreeData['tree']['collapse'] = true;
                        globalTreeData['tree']['init'] = true;
                        $(".svgContainer").remove();
                        if (id == 'AddLevelsSecondary' && id != null && id != undefined) {
                            gridTreeBoxes('', globalTreeData['tree']);
                        } else {
                            $("#treeContainerWithBoxes").show();
                            $(".decompositionBoxTreeSection").find(".decompositionBoxTreeSection").remove();
                            treeBoxes('', globalTreeData['tree']);
                        }
                    } else {
                        treeData['tree']['collapse'] = true;
                        treeData['tree']['init'] = true;
                        $(".svgContainer").remove();
                        if (id == 'AddLevelsSecondary' && id != null && id != undefined) {
                            gridTreeBoxes('', treeData['tree']);
                        } else {
                            $("#treeContainerWithBoxes").show();
//1622 removes the dupilicate id idk how this comes from java
                            $(".decompositionBoxTreeSection").find(".decompositionBoxTreeSection").remove();
                            treeBoxes('', treeData['tree']);
                        }
                    }

                });
                treeData['tree']['color'] = '#0b4a99'; //20422
                if (id == 'AddLevelsSecondary' && id != null && id != undefined) {
                    gridTreeBoxes('', treeData['tree']);
                } else {
                    $("#dxpDecompositionLevels").append(result);//24522 impt displays the list to create query
                    $("#dxpDecompositionLevels").append(result['resultList']);
                    $("#treeContainerWithBoxes").show();//24522 impt
                    treeBoxes('', treeData['tree']);
                }
            });
            stopLoader();
            $("#dxpDecompositionLevels").children().remove();
        }
    });

}
function saveOldPanelData() {//12422
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
            }
        }
    });
    //panelOldData stored in global var
}
function showColorPalette() {
    $(".colorAdder").click();
}
function dropDownLevel() {
//    $(".colorselectMainForm").show();
    $("#DropdownList").toggleClass("show");
}
function generateDecompositionBoxesTree() {
    showLoader();
    $("#treeContainerWithBoxes").show();
    $("#mainDxpSplitter").hide();
    $(".visualizationDashboardView").hide();
    var level0value = $("#Decompose0Level").val();
    var level1value = $("#Decompose1Level").val();
    var level2value = $("#Decompose2Level").val();
    var level3value = $("#Decompose3Level").val();
    if (addCustomLevel == true) {
        var level4value = $("#Decompose4Level").val();
    }
//    if()
    if ((level0value != null && level0value != '' && level0value != undefined) &&
            (level1value != null && level1value != '' && level1value != undefined) &&
            (level2value != null && level2value != '' && level2value != undefined) &&
            (level3value != null && level3value != '' && level3value != undefined)
//                if (addCustomLevel == true) {
//        && (level4value != null && level4value != '' && level4value != undefined)
//                }
            ) {
//        addCustomLevel = true;
        $("#tree-container").html("");
        $.ajax({
            type: "POST",
            url: 'getDxpDecompositionBoxesTree',
            data: {
                'gridId': "DATA_UNIFICATION_PORTAL_TREE_GRID",
                level0value: level0value,
                level1value: level1value,
                level2value: level2value,
                level3value: level3value,
                level4value: level4value,
                addCustomLevel: addCustomLevel

            },
            traditional: true,
            cache: false,
            success: function (response) {
                addCustomLevel = false;
                var result = JSON.parse(response);
                var treeData = result;
                globalTreeData = [];
                globalTreeData = treeData;
                var result = treeData['result'];
                var listOfValues = treeData['listOfValues'];
                $("#listOfValues").val(listOfValues);
                $("#dxpDecompositionLevels").html(result);
                d3.json(treeData, function (error, json) {
                    treeData['tree']['collapse'] = false;
                    var color, colorHex, depthLevel;
                    $(".colorAdder").change(function (event) {
                        color = $(this).val();
                        depthLevel = $(this).attr("level");
                        $(".svgContainer").remove(); //21422
                        treeData['tree']['color'] = color;
                        treeData['tree']['depthLevel'] = depthLevel;
//                    $("#depthSelector").find(":selected").attr("colorHex", color);//25422
//                    nodeColor = $(this).val();
                        treeBoxes('', treeData['tree']);
//                    changeColor(nodeColor);
                    });

                    $("#depthSelector").change(function (event) {
                        colorHex = $("#depthSelector").find(":selected").attr("colorHex");
                        $(".colorAdder").val(colorHex);
                    });
                    treeData['tree']['color'] = '#0b4a99'; //20422
                    treeBoxes('', treeData['tree']);
                });
                stopLoader();
                $("#Decompose0Level").val(level0value);
                $("#Decompose1Level").val(level1value);
                $("#Decompose2Level").val(level2value);
                $("#Decompose3Level").val(level3value);
                $("#Decompose4Level").val(level4value);
            }
        });
    } else {
        stopLoader();
        var modalObj = {
            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
            body: labelObject['Please select level value(s)'] != null ? labelObject['Please select level value(s)'] : 'Please select level value(s)',
        };
        var buttonArray = [
            {
                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                click: function () {
                },
                isCloseButton: true
            }
        ];
        modalObj['buttons'] = buttonArray;
        createModal("dataDxpSplitterValue", modalObj);
        $(".modal-dialog").addClass("modal-xs");
    }
}
function dxpAddTreeLevel(gridId, event, id) {
    var labelObject = {};
    try {
        $(".decompositionBoxTreeSection").find(".decompositionBoxTreeSection").remove();
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var listOfValues = $("#listOfValues").val();
    var bodyValue = '<div class="dxpSelectOptionLevel"><input type="text" id="level4" name="fourthLevel" value="Level 4">\n\
                    <select class="dxpClassSelection" id="dxpClassSelection">' + listOfValues + '</select></div>'
    var modalObj = {
        title: labelObject['Choose Level'] != null ? labelObject['Choose Level'] : 'Choose Level',
        body: bodyValue,
    };
    var buttonArray = [
        {
            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
            click: function () {
                addCustomLevel = true;
                var levelFlag = addCustomLevel;
                decompositionGridBoxesTree(gridId, levelFlag, id);
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    createModal("dataDxpSplitterValue", modalObj);
    $(".modal-dialog").addClass("modal-xs");
}
function changeTreeColor(color, depthLevel) {
    var nodeDepthLevel = $("rect[nodeDepth = nodeDepthLevel" + depthLevel + "]");
    $.each(nodeDepthLevel, function (index, ele) {
        console.log(ele);
        $(this).attr("fill", color);
    });
}
function downloadBoxTree(exportType) {//30422
    if (exportType != null || exportType != '' || exportType != undefined) {
        $("#exportTreeTable").show();
        if (exportType == 'pdf') {//add condition
            $("#exportTreeTable").tableExport({
                fileName: "sFileName",
                type: "pdf",
                jspdf: {
                    format: "bestfit",
                    margins: {left: 20, right: 10, top: 20, bottom: 20},
                    autotable: {
                        styles: {overflow: "linebreak"},
                        tableWidth: "wrap",
                        tableExport: {
                            onBeforeAutotable: "DoBeforeAutotable",
                            onCellData: "DoCellData",
                        },
                    },
                },
            });
        }
        if (exportType == 'xlsx') {//add condition
            $("#exportTreeTable").tableExport({
                type: "xlsx",
            });
        }
        if (exportType == 'csv') {//add condition
            $("#exportTreeTable").tableExport({
                type: "csv",
            });
        }
        if (exportType == 'xml') {//add condition
            $("#exportTreeTable").tableExport({
                type: "xml",
            });
        }
        if (exportType == 'xls') {//add condition
            $("#exportTreeTable").tableExport({
                type: "xls",
            });
        }
    }
    $("#exportTreeTable").hide();
}
function nestedObjToArray(daObj) {
    if (daObj instanceof Array) {
        for (var i = 0; i < daObj.length; i++) {
            nestedObjToArray(daObj[i]);
        }
    } else {
        processObject(daObj);
    }
}
function processObject(daObj) {
    if (daObj.name !== undefined && daObj.type !== undefined) {
        treeDataArr.push({
            name: daObj.name,
            parent: daObj.parent,
            type: daObj.type,
        });
    }

    for (var prop in daObj) {
        if (daObj[prop] instanceof Array) {
            nestedObjToArray(daObj[prop]);
        }
    }
}
//function nestedObjToArray(daObj) {
//    var result = null;
//    if (daObj instanceof Array) {
//        for (var i = 0; i < daObj.length; i++) {
//            result = nestedObjToArray(daObj[i]);
//        }
//    } else
//    {
//        for (var prop in daObj) {
//            if (daObj[prop] instanceof Array) {
//                treeDataArr.push(
//                        {
//                            name: daObj.name,
//                            parent: daObj.parent, //assigning parent obj to daobj for its children 
//                            type: daObj.type, //type is nothing but depth of the tree
//                        }
//                );
//                result = nestedObjToArray(daObj[prop]);
//            }
//        }
//    }
//}
function createTableFromArray(treeDataArr) {//10522
    $("#exportTreeTable").remove();
    var table = document.createElement('table');
    table.setAttribute('id', 'exportTreeTable');
    var tableBody = document.createElement('tbody');
    var tableHead = table.createTHead();
    var headers = ['NAME', 'PARENT_PATH', 'DEPTH_LEVEL'];
    var headerRow = tableHead.insertRow(-1);
    for (var i = 0; i < headers.length; i++) {
        var cell = headerRow.insertCell(-1);
        cell.innerHTML = headers[i];
        headerRow.appendChild(cell);
        tableHead.appendChild(headerRow);
    }
    for (var i = 0; i < treeDataArr.length; i++) {
        var row = document.createElement('tr');
        var arrObj = Object.values(treeDataArr[i]);
        for (var j = 0; j < arrObj.length; j++) {
            var baseArray = arrObj[j];
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(baseArray));
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    document.body.appendChild(table);
    $("#exportTreeTable").hide();
}
function exportTypeDropDown() {
    $("#exportTypeContainer").toggleClass("show");
}
function decompositionTreeSettingsOpen() {
    $('#settingsPanel').toggle('slide', {direction: 'right'}, 800);
    $('#settingsPanelSecondary').toggle('slide', {direction: 'right'}, 800);
}
function decompositionTreeSettingsClose() {
    $('#settingsPanel').toggle('slide', {direction: 'right'}, 800);
}
function getDecomposeTree(gridId, operationName) {
    $("#dxpDecompositionLevelsSecondary").html();
    showLoader();
    $.ajax({
        type: "POST",
        url: 'getDxpGridLevelDecomposeTree',
        data: {
            'gridId': gridId,
            addCustomLevel: addCustomLevel,
        },
        traditional: true,
        cache: false,
        success: function (response) {
            $(".svgContainer").remove();
            var result = JSON.parse(response);
            var treeData = result;
            globalTreeData = treeData;
            var personalize = treeData['personalize'];
            var exportBoxTreeJson = {};
            exportBoxTreeJson['data'] = treeData['tree'];
            exportBoxTreeJson['headers'] = Object.keys(treeData['tree']);
            treeDataArr = [];//25522 to clean the global array
            nestedObjToArray(exportBoxTreeJson['data']);
            createTableFromArray(treeDataArr);
            var modalObj = {
                title: labelObject['DecompositionTree'] != null ? labelObject['DecompositionTree'] : 'DecompositionTree',
                body: "<div id='dxpDataCompositionTreeBody' class='row'>"
                        + "<div id='dxpDecomposeTreeClass' class='col-md-8'></div>"
                        + "<div class='col-md-4' id='dxpTreeBtnPersonalizeClass'>"
                        + "<div class='buttonDivPopup'>"
                        + "<button class='settingsopenbtn btn btn-info' onclick=\"decompositionTreeSettingsOpen()\">"
                        + "<span class='dSettings'><img src='images/iDXPUI5Settings.svg' width='18px' title='Settings' /></span>"
                        + "<span class='btnTitle'>Personalize</span></button></div>"
                        + "<div id='appendSectionId' class='appendSectionClass'></div></div></div>",
            };
            var buttonArray = [
                {
                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                    click: function () {
                        $(".decompositionBoxTreeSection").removeClass("repositionBoxTreeSelectionDiv");
                        $("#treeContainerWithBoxes").hide();
                    },
                    isCloseButton: true
                }
            ];
            modalObj['buttons'] = buttonArray;
            createModal("dxpDataCompositionTree", modalObj);
            $(".modal-dialog").addClass("modal-xl");
            d3.json(treeData, function (error, json) {
                treeData['tree']['color'] = '#0b4a99';
                $("#dxpDataCompositionTreeBody").append(result['resultPersonalizeBtnSecondary']);
//                $("#hiddenPersonalizeBtn").append(result['resultPersonalizeBtnSecondary']);
                $("#dxpDecompositionLevelsSecondary").append(result['resultListSecondary']);
                gridTreeBoxes('', treeData['tree']);
            });
            stopLoader();
        }
    });
}
function showGridBasedOnGridId(gridId) {
    $.ajax({
        type: "POST",
        url: 'getCloudGrid',
        data: {
            gridId: gridId,
            roleId: $("#rolehid").val(),
        },
        traditional: true,
        cache: false,
        success: function (result) {

            var divstr = "<div class='dataUnificationMainDiv'>"
                    + "<div id='tabsdiv'>"
                    + "<div class ='registryTabHeader active' id='defaultTab' style='display:none;'  onclick='switchRegistryTabs(\"defaultTab\", \"treeGridDiv\")' ><p class='oddClass'>Default</p></div>"
                    + "<div class ='registryTabHeader' id='refernceDataTab' style='display:none;'  onclick='switchRegistryTabs(\"refernceDataTab\", \"refernceDataTabContent\")' ><p class='evenClass'>Reference</p></div>"
                    + "<div class ='registryTabHeader' id='charDataTab' style='display:none;'  onclick='switchRegistryTabs(\"charDataTab\", \"charDataTabContent\")' ><p class='oddClass'>Characteristics</p></div>"
//                    + "<div class ='registryTabHeader' id='classAllocationTab' style='display:none;'  onclick='switchRegistryTabs(\"classAllocationTab\", \"classAllocationTabContent\")' ><p class='evenClass'>Class Allocation</p></div>"
                    + "<div class ='registryTabHeader' id='dataProfilingTab' style='display:none;'  onclick='switchRegistryTabs(\"dataProfilingTab\", \"dataProfilingTabContent\")' ><p class='oddClass'>Data Profiling</p></div>"
                    + "<div class ='registryTabHeader' id='dataHealthAssessmentTab' style='display:none;'  onclick='switchRegistryTabs(\"dataHealthAssessmentTab\", \"dataHealthAssessmentTabContent\")' ><p class='evenClass'>DHA</p></div>"
                    + "<div class ='registryTabHeader' id='duplicateCheckTab' style='display:none;'  onclick='switchRegistryTabs(\"duplicateCheckTab\", \"duplicateCheckTabContent\")' ><p class='evenClass'>Duplicates</p></div>"
                    + "</div>"
                    + "<div id='tabsContentdiv'>"
                    + "<div class ='registryTabContent' id='treeGridDiv'></div>"
                    + "<div class ='registryTabContent' id='refernceDataTabContent'></div>"
                    + "<div class ='registryTabContent' id='charDataTabContent'></div>"
//                    + "<div class ='registryTabContent' id='classAllocationTabContent'></div>"
                    + "<div class ='registryTabContent' id='dataProfilingTabContent'></div>"
                    + "<div class ='registryTabContent' id='dataHealthAssessmentTabContent'></div>"
                    + "<div class ='registryTabContent' id='duplicateCheckTabContent'></div>"
                    + "</div>"
                    + "</div>";

            $("#pageBodyContent").remove();
            $("#pageBody").append('<div class="page-body-content" id="pageBodyContent">' + divstr + '</div></div>');

            var paramObj = {};

//          paramObj.column = 'RECORD_NO';
//          paramObj.value = '3120002935423';
            paramObj.column = '1';
            paramObj.value = '1';
            paramObj.operator = "EQUALS";
            paramObj.symbol = "Euqals";
            gridNewConfigPoc(result, "", paramObj, gridId);
        }
    });
}
$("#myBtn").click(function () {
    $("#myDropdown").toggle();
});
function getProfileUserNames() {
    showLoader();
    $(".visualizationDashboardView").hide();
    $.ajax({
        type: "POST",
        url: 'getDXPProfileTemplateNamesData',
        data: {
            gridId: "",
        },
        traditional: true,
        cache: false,
        success: function (result) {
            stopLoader();
            $("#mainDxpSplitter").show();
//            $("#mainDxpSplitter").show();
            $('#firstDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 250}]});
            $("#firstDxpSplitterData").html(result);
            $("#secondDxpSplitter").hide();
        }
    });
}
function getUserProfileData(userName, event, currentElement) {
    showLoader();
    $("#profileUser").val(userName);
    $('.dxpUserBasedTemplateClass').removeClass('activeClass');
    var parentDIv = $(currentElement).parent();
    parentDIv.addClass('activeClass');
    $.ajax({
        type: "POST",
        url: 'getDXPProfileUserTemplateData',
        data: {
            userName: userName,
        },
        traditional: true,
        cache: false,
        success: function (result) {
            stopLoader();

            $("#secondDxpSplitter").show();
            $('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 1500}]});
            $("#secondDxpSplitterData").html(result);
            var partyName = $("#partyName").val();
            if (partyName == 'BJP') {
                $(".profileBioData .card-header").addClass('bjp');
            } else if (partyName == 'INC') {
                $(".profileBioData .card-header").addClass('inc');
            } else if (partyName == 'AIMIM') {
                $(".profileBioData .card-header").addClass('aimim');
            } else if (partyName == 'TRS') {
                $(".profileBioData .card-header").addClass('trs');
            } else {
                $(".profileBioData .card-header").addClass('default');
            }

            $("#selectCandidate").jqxComboBox({
                theme: 'energyblue',
                checkboxes: true,
                placeHolder: "Select Candidate",
            });
            $("#selectCandidate").jqxComboBox('uncheckAll');
            $('#selectCandidate').on('checkChange', function (event) {
                var args = event.args;
                var checkedCandidates = "";
                checkedCandidates = args.label;
                if (!args.checked) {
                    var cand = checkedCandidates.replace(/\s+/g, '');
                    $("#table" + cand + "").remove();
                }
            });

            $("#defaultOpenTwitter").click();
        }

    });
}
function colorAdderSecondary(thisEle) {
    var color = $(thisEle).val();
    var depthLevel = $(thisEle).attr("level");
    changeTreeColor(color, depthLevel);
}
function applyColorChanges() {
    dropDownLevel();
    if (globalTreeData != null && globalTreeData != undefined && globalTreeData != '') {
        globalTreeData['tree']['collapse'] = true;
        globalTreeData['tree']['init'] = true;
        $(".svgContainer").remove();
        gridTreeBoxes('', globalTreeData['tree']);
    }
}
function generateDecompositionBoxesTreeSecondary(gridId) {
    showLoader();

    var level0value = $("#Decompose0LevelSecondary").val();
    var level1value = $("#Decompose1LevelSecondary").val();
    var level2value = $("#Decompose2LevelSecondary").val();
    var level3value = $("#Decompose3LevelSecondary").val();
    if (addCustomLevel == true) {
        var level4value = $("#Decompose4LevelSecondary").val();
    }
//    if()
    if ((level0value != null && level0value != '' && level0value != undefined) &&
            (level1value != null && level1value != '' && level1value != undefined) &&
            (level2value != null && level2value != '' && level2value != undefined) &&
            (level3value != null && level3value != '' && level3value != undefined)
            ) {
        $('#settingsPanelSecondary').toggle('slide', {direction: 'right'}, 800);
        $("#tree-container").html("");
        $.ajax({
            type: "POST",
            url: 'getDxpGridLevelDecomposeTree',
            data: {
                'gridId': gridId,
                level0value: level0value,
                level1value: level1value,
                level2value: level2value,
                level3value: level3value,
                level4value: level4value,
                addCustomLevel: addCustomLevel

            },
            traditional: true,
            cache: false,
            success: function (response) {
                $(".svgContainer").remove(); //24522
                addCustomLevel = false;
                var result = JSON.parse(response);
                var treeData = result;
                globalTreeData = [];//cleaning old data
                globalTreeData = treeData;
                var result = treeData['result'];
                var listOfValues = treeData['listOfValues'];
                $("#listOfValues").val(listOfValues);
                d3.json(treeData, function (error, json) {
                    treeData['tree']['collapse'] = false;
                    var color, colorHex, depthLevel;
                    $(".colorAdder").change(function (event) {
                        color = $(this).val();
                        depthLevel = $(this).attr("level");
                        $(".svgContainer").remove(); //21422
                        treeData['tree']['color'] = color;
                        treeData['tree']['depthLevel'] = depthLevel;
                        gridTreeBoxes('', treeData['tree']);

                    });
                    $("#depthSelector").change(function (event) {
                        colorHex = $("#depthSelector").find(":selected").attr("colorHex");
                        $(".colorAdder").val(colorHex);
                    });
                    gridTreeBoxes('', treeData['tree']);
                });
                stopLoader();
                $("#Decompose0LevelSecondary").val(level0value);
                $("#Decompose1LevelSecondary").val(level1value);
                $("#Decompose2LevelSecondary").val(level2value);
                $("#Decompose3LevelSecondary").val(level3value);
                $("#Decompose4LevelSecondary").val(level4value);
            }
        });
    } else {
        stopLoader();
        var modalObj = {
            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
            body: labelObject['Please select level value(s)'] != null ? labelObject['Please select level value(s)'] : 'Please select level value(s)',
        };
        var buttonArray = [
            {
                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                click: function () {
                },
                isCloseButton: true
            }
        ];
        modalObj['buttons'] = buttonArray;
        createModal("dataDxpSplitterValue", modalObj);
        $(".modal-dialog").addClass("modal-xs");
    }
}
function decompositionGridBoxesTree(gridId, levelFlag, id) {
    showLoader();
    if (levelFlag != null && levelFlag != undefined && levelFlag != ''
            && levelFlag == true) {
        addCustomLevel = true;
    }
    $.ajax({
        type: "POST",
        url: 'getDxpGridLevelDecomposeTree',
        data: {
            'gridId': gridId,
            addCustomLevel: addCustomLevel,
        },
        traditional: true,
        cache: false,
        success: function (response) {
            if (addCustomLevel && ($("#colorAdderlevel4").val() == undefined || $("#colorAdderlevel4").val() == '')) {//16522
                $(".colorselectDiv").append("<div class='innerColorSelect'><span class='colorLevelLabel' value='4' colorHex='#0b4a99'>Level 4</span><span class='colorLevelSelect'><input type='color' class='colorAdder' id='colorAdderlevel4' level ='4' value='#0b4a99'></span>");
            }

            addCustomLevel = false;
            $(".svgContainer").remove();
            var result = JSON.parse(response);
            var treeData = result;
            var listOfValues = result['listOfValues'];
            var addCustomLevel = result['addCustomLevel'];
            if (addCustomLevel) {
                var level4 = "<div class='levelInnerMainDiv'>"
                        + "<div class='levelLabel'>Level 4</div>"
                        + "<div class='level0DropdownDiv'>"
                        + "<select id='Decompose4LevelSecondary'>" + listOfValues + "</select>"
                        + "</div>"
                        + "</div>";
                $(".colorselectDiv").append("<div class='innerColorSelect'><span class='colorLevelLabel' value='4' colorHex='#0b4a99'>Level 4</span><span class='colorLevelSelect'><input type='color' class='colorAdder' id='colorAdderlevel4' level ='4' value='#0b4a99'></span>");
            }
            $(".levelsMainDiv").append(level4);
            $("#treeContainerWithBoxes").show();
            var result = treeData['result'];
            var resultListSecondary = treeData['resultListSecondary'];
            var exportBoxTreeJson = {}; //30422 working on exporting the tree
            exportBoxTreeJson['data'] = treeData['tree'];
            exportBoxTreeJson['headers'] = Object.keys(treeData['tree']);
            treeDataArr = [];
            nestedObjToArray(exportBoxTreeJson['data']);
            createTableFromArray(treeDataArr); //10522
            $("#dxpDecompositionLevels").html(resultListSecondary);
            d3.json(treeData, function (error, json) {
                treeData['tree']['collapse'] = false;
                var color, colorHex, depthLevel;
                $(".colorAdder").on('input', function (event) {//27422
                    color = $(this).val();
                    depthLevel = $(this).attr("level");
                    changeTreeColor(color, depthLevel); //27422
                });
                treeData['tree']['color'] = '#0b4a99'; //20422
                if (id == 'AddLevelsSecondary' && id != null && id != undefined) {
                    gridTreeBoxes('', treeData['tree']);

                } else {
                    $("#dxpDecompositionLevels").append(result);//24522 impt displays the list to create query
                    $("#dxpDecompositionLevels").append(result['resultList']);
                    $("#treeContainerWithBoxes").show();//24522 impt
                    treeBoxes('', treeData['tree']);
                    $(".decompositionBoxTreeSection").find(".decompositionBoxTreeSection").remove();
                }

            });

            stopLoader();
            $("#dxpDecompositionLevels").children().remove();
            $("#dxpDecomposeTreeClass").html(result['resultPersonalizeBtnSecondary']);
            $("#dxpDecompositionLevelsSecondary").html(result['resultListSecondary']);
        }
    });

}
function getShowDxpProfileResults(parent, childSelector, keySelector) {
    parent = $("#searchedDxpFirstSearchProfilResults");
    childSelector = "div";
    keySelector = "div.dxpUserBasedTemplateSpanClass";
    var items = parent.children(childSelector).sort(function (a, b) {
        var vA = $(keySelector, a).text();
        var vB = $(keySelector, b).text();
        return (vA > vB) ? -1 : (vA > vB) ? 1 : 0;
    });
    parent.append(items);
    $("#decendingFirstProfileOrder").hide();
    $("#AccendingOrderProfile").show();
}
function getShowDxpProfileAscResults(parent, childSelector, keySelector) {
    parent = $("#searchedDxpFirstSearchProfilResults");
    childSelector = "div";
    keySelector = "div.dxpUserBasedTemplateSpanClass";
    var items = parent.children(childSelector).sort(function (a, b) {
        var vA = $(keySelector, a).text();
        var vB = $(keySelector, b).text();
        return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;
    });
    parent.append(items);
    $("#AccendingOrderProfile").hide();
    $("#decendingFirstProfileOrder").show();
}
function getChartCounts(id, columnName, fromWeek, toWeek, table, chartType) {
    var icon = {
        'width': 1000,
        'path': 'm250 850l-187 0-63 0 0-62 0-188 63 0 0 188 187 0 0 62z m688 0l-188 0 0-62 188 0 0-188 62 0 0 188 0 62-62 0z m-875-938l0 188-63 0 0-188 0-62 63 0 187 0 0 62-187 0z m875 188l0-188-188 0 0-62 188 0 62 0 0 62 0 188-62 0z m-125 188l-1 0-93-94-156 156 156 156 92-93 2 0 0 250-250 0 0-2 93-92-156-156-156 156 94 92 0 2-250 0 0-250 0 0 93 93 157-156-157-156-93 94 0 0 0-250 250 0 0 0-94 93 156 157 156-157-93-93 0 0 250 0 0 250z" transform="matrix(1 0 0 -1 0 850)"',
        'ascent': 850,
        'descent': -150
    };
    var selectType = $("#visionDXPProfileTwitterchartTypesId").val();
    if (selectType != null && selectType != '' && selectType != undefined)
    {
        chartType = selectType;
    }

    var value = '';
    var constitutionName = $("#dxpConstitutionsListClass").val();
    var district = $("#dxpDistrictListClass").val();
    var test = $('#selectCandidate').jqxComboBox('getCheckedItems');
    var selectedCandidates = '';
    test.forEach(function (i, x) {
        var names = i.label;
        var index = i.index;
        if (index != 0) {
            selectedCandidates += ',' + names;
        } else if (index != 1) {
            selectedCandidates += names;
        }
    });
    if (id != null && id != '' && id != undefined && id == 'dxpConstitutionsListClass') {
        value = constitutionName;
    } else if (id != null && id != '' && id != undefined && id == 'dxpDistrictListClass') {
        value = district;
    } else if (id != null && id != '' && id != undefined && id == 'selectCandidate') {
        value = selectedCandidates;
        value = value.replace("Select Candidate,", "");
    }
    var userName = $("#profileUser").val();
    $.ajax({
        type: "POST",
        url: 'getDXPProfileUsersChartsData',
        data: {
            'userName': userName,
            'value': value,
            'id': id,
            'columnName': columnName,
            'chartType': chartType,
            'fromWeek': fromWeek,
            'toWeek': toWeek,
            'table': table
        },
        traditional: true,
        cache: false,
        success: function (response) {
            if (response != null && response != undefined && response != '') {
                var chartDataObj = response['data'];
                var selectBoxStr = response['selectBoxStr'];
                var chartType = response['chartType'];
                userName = userName.replace(" ", "_");
                var chartId = userName + columnName + "_Expand";
                var data = [];
                try {
                    $("#dialog1").html("");
                    $("#dialog1").dialog("close");
                    $("#dialog1").dialog("destroy");
                } catch (e)
                {

                }

                $("#dialog1").html("<div class='visionDXPProfileTwitterChartsClass'><div id='visionDXPProfileTwitterChartsTypeId' class='visionDXPProfileTwitterChartsTypeClass'></div><div id = '" + chartId + "' class = 'visionDXPProfileTwitterChartsImage'></div></div>");
                $("#visionDXPProfileTwitterChartsTypeId").html(selectBoxStr);
                $("#dialog1").dialog({resizable: false,
                   title: labelObject['Image'] != null ? labelObject['Image'] : 'Image',
                    modal: true,
                    width: 600,
                    height: 500,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");


                            }
                        }],
                    open: function (event, ui)
                    {
                        var axisColumnName = "USER_NAME";
                        if (chartType != null && chartType != '' && chartType == 'pie')
                        {
                            $.each(chartDataObj, function (key) {
                                var traceObj = {};
                                var colorObj = {};
                                if (key !== axisColumnName) {
                                    traceObj['labels'] = chartDataObj[axisColumnName];
                                    traceObj['values'] = chartDataObj[key];
                                    traceObj['type'] = 'pie';
                                    traceObj['name'] = 'count';
                                    traceObj['marker'] = colorObj;
                                }
                                if (traceObj !== null && !jQuery.isEmptyObject(traceObj)) {
                                    data.push(traceObj);
                                }
                            });
                        } else if (chartType != null && chartType != '' && chartType == 'bar')
                        {
                            $.each(chartDataObj, function (key) {
                                var traceObj = {};
                                var colorObj = {};
                                if (key !== axisColumnName) {
                                    traceObj['y'] = chartDataObj[axisColumnName];
                                    traceObj['x'] = chartDataObj[key];
                                    traceObj['type'] = 'bar';
                                    traceObj['name'] = 'count';
                                    traceObj['marker'] = colorObj;
                                    traceObj['orientation'] = 'h';
                                }
                                if (traceObj !== null && !jQuery.isEmptyObject(traceObj)) {
                                    data.push(traceObj);
                                }
                            });
                        } else if (chartType != null && chartType != '' && chartType == 'column')
                        {
                            $.each(chartDataObj, function (key) {
                                var traceObj = {};
                                var colorObj = {};
                                if (key !== axisColumnName) {
                                    traceObj['x'] = chartDataObj[axisColumnName];
                                    traceObj['y'] = chartDataObj[key];
                                    traceObj['type'] = 'bar';
                                    traceObj['name'] = 'count';
                                    traceObj['marker'] = colorObj;
                                }
                                if (traceObj !== null && !jQuery.isEmptyObject(traceObj)) {
                                    data.push(traceObj);
                                }
                            });

                        } else if (chartType != null && chartType != '' && chartType == 'donut')
                        {
                            $.each(chartDataObj, function (key) {
                                var traceObj = {};
                                var colorObj = {};
                                if (key !== axisColumnName) {
                                    traceObj['labels'] = chartDataObj[axisColumnName];
                                    traceObj['values'] = chartDataObj[key];
                                    traceObj['type'] = 'pie';
                                    traceObj['hole'] = 0.4;
                                    traceObj['name'] = 'count';
                                    traceObj['marker'] = colorObj;
                                }
                                if (traceObj !== null && !jQuery.isEmptyObject(traceObj)) {
                                    data.push(traceObj);
                                }
                            });
                        }

                        var config = {
                            responsive: true,
                            displayModeBar: true,
                            downloadImage: true,
                            displaylogo: false,
                            modeBarButtonsToAdd: [{name: 'Delete Chart', icon: icon, click: function (chartId) {
                                        $("#" + chartId).remove();
                                    }
                                }],
                            modeBarButtonsToRemove: ['zoom2d', 'pan', 'pan2d', 'zoomIn2d', 'zoomOut2d', 'resetViewMapbox', 'resetScale2d', 'sendDataToCloud', 'hoverClosestCartesian', 'autoScale2d', 'lasso2d', 'select2d', 'zoom2d']
                        };
                        var layout = {
                            margin: {
                                l: 65,
                                r: 30,
                                b: 50,
                                t: 20,
                                pad: 4
                            },
                            height: 400,
                            width: 500,
                            dragmode: false

                        };
                        layout['showlegend'] = true;
                        Plotly.newPlot(chartId, data, layout, config);

                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                        $(this).closest(".ui-dialog").addClass("visionAnalyticgraphDialog");
                        $(".ui-dialog").css("z-index", "99999");
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
function getkeyProfilResults(event) {
    showLoader();
    var value = $("#firstSplitterSearchId").val().toUpperCase();
    console.log("value" + value);
    $(".dxpUserBasedTemplateClass").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    $.ajax({
        type: "POST",
        url: 'getSearchProfileData',
        data: {
            'value': value,
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            $("#mainDxpSplitter").show();
            $('#firstDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 250}]});
            $("#searchedDxpFirstSearchProfilResults").html(response);
        }
    });
}
function audioModal(url) {
    var controlInd = $(this).attr("data-value");

    var iframe = "<div class='dxpvideo'><iframe width='100%' height='315' id='iFrameVideo' src='" + url + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>";
    var modalObj = {
        title: 'User Profile Data',
        body: iframe
    };
    var buttonArray = [
        {
            text: 'OK',
            click: function () {
                $('#iFrameVideo').attr('src', "");
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    createModal("dataDxpSplitterValue", modalObj);
    $(".modal-dialog").addClass("modal-xs");
}
function dxpprofClose() {
    pinnedData = true;
    $(".dxpProfileMoreDataApndClass").hide();
    $(".dxpProfileMoreDataApndClass").val("");
    $(".dxpProfileMoreDetails").show();
    $(".dxpProfilePinClass").show();
}
function getMobileNoShow(mobileNo) {
    var modalObj = {
        title: labelObject['Mobile Number'] != null ? labelObject['Mobile Number'] : 'Mobile Number',
        body: mobileNo,
    };
    var buttonArray = [
        {
            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
            click: function () {
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    createModal("dataDxpSplitterValue", modalObj);
    $(".modal-dialog").addClass("modal-xs");
}
function initialize() {

    var body = '<div id="map_canvas" style="width:100%; height:100%;"></div>';
    var modalObj = {
        title: 'Vendor Location',
        body: body
    };
    var buttonArray = [
        {

        }
    ];
    modalObj['buttons'] = buttonArray;
    createModal("dxpClassficationAppendClass", modalObj);
    $(".modal-dialog").addClass("modal-xl dxpCompareGridRowsData");
    $(".dxpClassficationAppendClass").css("padding-top", "0");
    $(".dxpCompareGridRowsData .modal-dialog").css("margin-top", "20");
    $(".dxpCompareGridRowsData .modal-body").addClass("mapData");
    var points = [
        ['name1', 77.609255, 30.19232525792222, 12, 'https://docs.jsfiddle.net/use-cases/code-snippets-hosting'],
        ['name2', 59.941412822085645, 30.263564729357767, 11, 'https://jsfiddle.net/about'],
        ['name3', 59.939177197629455, 30.273554411974955, 10, 'https://docs.jsfiddle.net/']
    ];
    var myOptions = {
        center: new google.maps.LatLng(59.91823239768787, 30.243222856188822),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    setMarkers(map, points);
}
function setMarkers(map, locations) {
    var shape = {
        coord: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };

    for (var i = 0; i < locations.length; i++) {
        var place = locations[i];
        var myLatLng = new google.maps.LatLng(place[1], place[2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            shape: shape,
            title: place[0],
            zIndex: place[3],
            url: place[4]
        });
        google.maps.event.addListener(marker, 'click', function () {
            window.location.href = this.url;
        });
    }
}
function selectedDataShowInPopup(colname, colValue) {
    var modalObj = {
        title: labelObject[colname] != null ? labelObject[colname] : colname,
        body: colValue,
    };
    var buttonArray = [
        {
            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
            click: function () {
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    createModal("showPopupdialogBox", modalObj);
    $(".modal-dialog").addClass("modal-xs");
    $(".showPopupdialogBox").css("z-index", '9999');
}
function calanderEventCompare(calendarEl, type, value, tableName) {

    var obj = {
        initialView: 'dayGridMonth',
        initialDate: '2022-06-07',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        dayMaxEvents: true, //28622 for multiple event Popup
        themeSystem: 'bootstrap5',
        eventClick: function (calEvent, jsEvent, view) {
            detailedSocialMediaPosts(calEvent, value, tableName);
        },
    };
    $.ajax({
        type: 'POST',
        url: "getCalanderEvents",
        data: {
            compareType: type,
            compareValue: value
        },
        traditional: true,
        cache: false,
        success: function (result) {
            if (result != null && result != undefined && result != '') {
                obj.events = [];
                console.log(result);
                result = JSON.parse(result);
                if (result.userList != null && result.userList != undefined && result.userList != '') {
                    result.userList = result.userList.split(",");
                    for (let i in result.start) {
                        var resultObj = {};

                        resultObj.start = result.start[i];
                        resultObj.title = result.title[i];
                        if (resultObj.title == result.userList[1]) {
                            resultObj.backgroundColor = "red";
                        } else {
                            resultObj.backgroundColor = "blue";

                        }
                        obj.events.push(resultObj);
                    }
                }
                console.log(resultObj);
                var calendar = new FullCalendar.Calendar(calendarEl, obj);
                calendar.render();
            }
        }
    });

}
function convert(str) {
    var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
}
function showSubmenus() {
    console.log('values');
}
function domainBasedFormView(domainName) {
    showLoader();
    $("#showdomainBasedCards").html("");
    $('#defaultShowCardsId').hide();

    $.ajax({
        type: 'POST',
        url: "getDomainBasedDXPForm",
        data: {
            domainName: domainName,
        },
        traditional: true,
        cache: false,
        success: function (result) {
            $("#showdomainBasedCards").html(result);
            stopLoader();

        }
    });
}
function threedotImg(type) {
    $("#listofGroupFiltersId" + type).toggle();
}
function showMoreOptionData(currentIcon, id, optionType, flag) {
    var homepageCurrentCardId = $(currentIcon).closest("div.trendsCols").attr('id');
    if (optionType != null && optionType != '' && optionType != 'undefined' && optionType == 'EX') {
        var homepageTrendsCards = $('#rowAllShowCard').children();
        $.each(homepageTrendsCards, function (index, element) {
            var currentLoopElementId = $(this).attr('id')
            $(this).toggle();
            if (homepageCurrentCardId === currentLoopElementId) {
                $(this).show();
                $(this).toggleClass('ic-maximize');
            }
        });
    }
}
function homeSideMenu() {
    if ($('.ui-widget-overlay').length > 0) {
        return;
    }
    $("#sidebar").toggle();
    $(".closeFullscreenIcon").toggle();
    $(".dxpPageContent").toggleClass("fluidWidth");
    $('.dxpLoginHeader').toggle();
    $(".dxpPageWrapper ").toggleClass("withoutHeaderSideBar");
    $(".dxpPageWrapper ").toggleClass("hide-sidebar-header");
    if ($(".dxpPageContent").hasClass("fluidWidth")) {
        $(".dxpPageWrapper.withoutHeaderSideBar").css({"margin-left": "20px"});
    } else {
        $(".dxpPageWrapper").css({"margin-left": "0px"});
    }
}
function getHomePageSelectBoxResults(type) {
    $(".mainConversationalAIcontainer").show();

    if (type != null && type != undefined && type != '' && type == 'CHARTS') {
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
        var defaultFioriEnableFlag = localStorage.getItem("defaultFioriEnableFlag");
        if (!(defaultFioriEnableFlag != null && defaultFioriEnableFlag != ''
                && defaultFioriEnableFlag != undefined && defaultFioriEnableFlag == "Y")) {
            getHomePageChartDiv();

        }
        setTimeout(function () {
            $("#mainintelliSenseInnerSelectBoxId").html(htmlData);
            $(".chartSelectionsDropDown").show();
            $("#mainintelliSenseSelectBoxId").show();
            $("#isMainPageDropdownBoxes").hide();
            $("#pilogHomePageCreateCard").hide();
            $("#dxpAnalyticsContent").remove();
            $('#intellisenseHomeSelectBox option').removeAttr('selected').filter('[value=CHARTS]').attr('selected', true)
            showLoader();
            getVisualizationchart();
        }, 5000);
    } else if (type != null && type != undefined && type != '' && type == 'PILOG_SOCIAL_MEDIA') {
        $('#dxpMain').hide();
        getPilogMedialShowCaseCards(type);
    } else if (type != null && type != undefined && type != '' && type == 'HOME') {

        var role = sessionStorage.getItem("currentRole");
        if (role == null || type != undefined || type != '') {
            role = localStorage.getItem("currentRole");
        }
        try {
            if (role.endsWith("ADMIN")) {
                $("#domainBasedcountflag").val("Y");

            }
        } catch (er) {
        }

        try {
            if (!($("#cb-switch").is(":checked"))) {
                $(".searchIconsFirstSplitterList").show();
                getDefaultCreateFormWithCardResults(type);
            }
//          console.timeEnd();
        } catch (er) {

        }
        $('#dxpMain').show();
        $('#userProfileIconLi .userMainProfile').attr("src", localStorage['profile_imgStr']);
        var defaultFioriEnableFlag = localStorage.getItem("defaultFioriEnableFlag");
        if (!(defaultFioriEnableFlag != null && defaultFioriEnableFlag != ''
                && defaultFioriEnableFlag != undefined && defaultFioriEnableFlag == "Y")) {
            getHomePageChartDiv();
            $("#Loader img").attr("src", "images/PiLog_Gif7.gif");
        }


        if (role.includes("CONFIG_ADMIN")) {
            gettabcomponent("", role, "PRODUCT_CONFIG_PROCESSES", "MM_CONFIG_PROCESSES_TAB");
            setTimeout(function () {
                window.onload = homePageGuide();
            }, 1000);

        } else {
            var defaultFioriEnableFlag = localStorage.getItem("defaultFioriEnableFlag");
            if (!(defaultFioriEnableFlag != null && defaultFioriEnableFlag != ''
                    && defaultFioriEnableFlag != undefined && defaultFioriEnableFlag == "Y")) {
                getHomePageChartDiv();

            }
            setTimeout(function () {
                $("#mainintelliSenseInnerSelectBoxId").html(htmlData);
                $(".chartSelectionsDropDown").show();
                $("#mainintelliSenseSelectBoxId").show();
                $("#isMainPageDropdownBoxes").hide();
                $("#pilogHomePageCreateCard").hide();
                $("#dxpAnalyticsContent").remove();
                $('#intellisenseHomeSelectBox option').removeAttr('selected').filter('[value=CHARTS]').attr('selected', true)
                showLoader();
                getVisualizationchart();
                var aiflagStore = localStorage.getItem('aiLensFlagTrue');
                if (aiflagStore == undefined) {
                    $("#introGuiderAi").show();
                    localStorage.setItem('aiLensFlagTrue', 'F');
                    aiLensFlagTrue = 'N';
                }
                $("#introGuiderAi").show();
//                openAINavigation();
                showDefaultOutputBasedOnAIType('LOGIN', 'KNOWLEDGE');
                showExpiryDetailsinPopup(localStorage.getItem("userName"));
            }, 1000);
            setTimeout(function () {
                setIntroFn('DAL_MAIN_TAB');
            }, 1000);
//            handleThemeAction(false);
            $("#idxpUserProfileRoleValId").text(localStorage.getItem("ssUsernamedescr"));
            $(".visualizationDashboardView").hide();
            let cond = localStorage.getItem('defIntro');
            if (cond == 'N') {
                $('#introCheckbox').prop('checked', true);
            }

        }
    }

}
function getWeatherDetails(flag, title) {

    if ($('.ui-widget-overlay').length > 0) {
        return;
    }
    showLoader();
    insertUserClickedNavigations(title);
    var city = sessionStorage.getItem("city");
    var country = sessionStorage.getItem("country");
    $.ajax({
        type: "POST",
        url: "getWeatherDetailsFromCity",
        cache: false,
        data: {
            city: city,
            country: country,
            flag: flag
        },
        success: function (response) {
            stopLoader();
            //TODO: Need to add Loader
            if (response != null && !jQuery.isEmptyObject(response)) {
                var responseMsg = response['response'];
                if (flag == "HD") {
                    getHoverAndImageData(response['temperature'], response['description'], response['dayOfWeek'], response['sunrise'], response['sunset']);
                    return;
                }
                $("#dialog1").html(responseMsg);
                //getHoverAndImageData(response['temperature'],response['description'],response['dayOfWeek'],response['sunrise'],response['sunset']);
                $("#dialog1").dialog({resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    width: 600,
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
                        $(".ui-dialog .ui-dialog-content").css("height", "400px");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                        $(".ui-dialog").addClass("editDashboardPopup");

                    },
                    beforeClose: function (event, ui) {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
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
function getHoverAndImageData(temp, description, dayOfWeek, sunriseTime, sunsetTime) {
    var image = "sunrise"
    const sunrise = new Date(sunriseTime);
    const sunset = new Date(sunsetTime);
    const currentDate = new Date();
    $('.weatherIcon').attr('title', "");
    if (description.includes("rain")) {
        $('.weatherIcon').find("img").attr('src', "images/rainy.png");
        $('.weatherIcon').find("img").css('width', "30px");
        var img = $('.weatherIcon').find("img").attr('src');
    } else if (currentDate >= sunrise && currentDate <= sunset) {
        // Daytime
        $('.weatherIcon').find("img").attr('src', "images/Sunrise.png");
        $('.weatherIcon').find("img").css('width', "30px");
        var img = $('.weatherIcon').find("img").attr('src');
    } else {
        // Nighttime
        $('.weatherIcon').find("img").attr('src', "images/Sunset.png");
        $('.weatherIcon').find("img").css('width', "30px");
        var img = $('.weatherIcon').find("img").attr('src');
    }
    $("#tooltip-content").remove();
    $(".weatherIcon").append("<div id=\"tooltip-content\">"
            + "<span>" + description + "</span>"
            + "<div class=\"d-flex\" style=\"display:none\"><img src=" + img + " style=\"width:50px;vertical-align: middle;\"><h3>" + temp + "<sup>°C|°F</sup></h3></div>"
            + "<span>" + dayOfWeek + "</span>"
            + "</div>");
    $("#tooltip-content").hide();
    $('.weatherIcon').mouseenter(function () {
        $("#tooltip-content").show();
        $("#tooltip-content").jqxPopover({
            offset: {left: 0, top: 35},
            position: 'right',
            width: 147,
            height: 90,
            autoClose: true,
            /*title: "Weather Details",*/
            /*showCloseButton: true,*/
            selector: $(".weatherIcon")

        });
        $("#tooltip-content").jqxPopover('open');
        $(".jqx-popover-arrow").css('top', '30%', '!important');
    }).mouseleave(function () {
        $("#tooltip-content").jqxPopover('close');
    });


}
function getSelectBoxResults(type) {
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
    var val = '';
    if (type == 'G') {
        val = $("#infographHomeSelectBox").val();
    } else if (type == 'C') {
        val = $("#cardHomeSelectBox").val();
    } else if (type == 'H') {
        val = 'CHARTS';
    }
    if (val != null && val != undefined && val == 'PILOG_SOCIAL_MEDIA') {
        $(".visualizationDashboardView").css("display", "none");
        $("#selectDasbordHomeCard").css("display", "block");
        $("#visionSalectHomeCardData").html('');
    } else if (val != null && val != undefined && val == 'CHARTS') {
        $("#defaultShowCardsId").html('');
        $("#mainDxpSplitter").hide();
//        $("#defaultShowCardsId").hide();
        $(".visualizationDashboardView").css("display", "block");
        $("#selectDasbordHomeCard").css("display", "none");

//        $("#selectDasbordHomeCard").html(htmlData);

    } else if (val != null && val != undefined && val == 'HOME') {
        $(".visualizationDashboardView").css("display", "none");
        try {
            showSelectedTabContent(event, 'dxpHomeTab', 'dxpHomeContent');
        } catch (e) {
        }
    }

//    $(".visualizationDashboardView").remove();
//    //$("#pageBodyContent").append(chartSectionHtml);
//    $("#dxpAnalyticsContent").append(chartSectionHtml);
//
//    showSelectedTabContent(null, 'dxpAnalyticsTab', 'dxpAnalyticsContent', 'InfoGraphics', 'N');
//    toggleTabsAndMenus(event);
//    getHomePageSelectBoxResults(val);
//    stopLoader();
}
function getPilogMedialShowCaseCards(data) {
    showLoader();
    $("#selectDasbordHomeCard").html('');
    $.ajax({
        type: "POST",
        dataType: 'json',
        traditional: true,
        url: 'getPilogMedialShowCaseCards',
        data: {
            constitution: "transactions",
            data: data
        },
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && response != undefined && response != '') {
                $("#selectDasbordHomeCard").append(response['homePageOptions']);
                var data = response['data'];
                for (var i = 0; i < data.length; i++) {
                    $("#rowAllShowCard").append(data[i]['cardDiv']);
                    $("#listofGroupFiltersId" + data[i]['cardFlag']).append(data[i]['selectOption']);
                    $("#headerPinCardData" + data[i]['cardFlag']).append(data[i]['headerPin']);
                    $("#mediaCardtitle" + data[i]['cardFlag']).append(data[i]['title']);
                    $("#mediaCardImageClass" + data[i]['cardFlag']).append(data[i]['CAEDIMG']);
                    $("#headerRefreshCardData" + data[i]['cardFlag']).append(data[i]['refresh']);
                    $("#headerSortDropDownCardData" + data[i]['cardFlag']).append(data[i]['sort']);
                    $("#headerThreeDotsCardData" + data[i]['cardFlag']).append(data[i]['treeDots']);
                    $("#headerfilterCalendarCardData" + data[i]['cardFlag']).append(data[i]['calenderStr']);
                    $("#headerfilterTypesCardData" + data[i]['cardFlag']).append(data[i]['flterStr']);
                    $("#cardFooterMainDiv" + data[i]['cardFlag']).append(data[i]['analyticStr']);
                    $("#pilogListofTrendsOuter" + data[i]['cardFlag']).append(data[i]['strData']);
                }
                $('#cardHomeSelectBox').val('PILOG_SOCIAL_MEDIA');
                GartnerPI_Widget({
                    size: "large",
                    theme: "light",
                    sourcingLink: "https://gtnr.it/2YwPiDk",
                    widget_id: "YzMyZjJkYTctMDZhOC00NDg2LTg0ZTktOWI1NDQ4Mjk5YzM1",
                    version: "2",
                    container: document.querySelector('#myNodeContainer')
                });
            }
        }
    });
}
function domainBasedFormView(domainValue, title, gridId, roleId, subscribedflag) {
    showLoader();
    if (subscribedflag == undefined) {
        subscribedflag = 'Y';
    }
    if (subscribedflag != undefined && subscribedflag == 'Y') {
        if (gridId == null && gridId == undefined) {
            gridId = 'DXP_DEFAULT_PRODUCT_GRID';
            roleId = 'MM_MANAGER'
        }
        var currentDomain = '';
        try {
            currentDomain = $("#currentDomain").val();
        } catch (e)
        {
            currentDomain = '';
        }

        if (!(currentDomain != null && currentDomain != '' && currentDomain != 'undefined' && currentDomain != undefined)) {

            stopLoader();
            var message = 'Please click on ' + title + ' menu to process any sub operations or activities';
            var modalObj = {
//                    title: 'Message',
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                body: message
            };
            var buttonArray = [
                {
                    text: 'Ok',
                    click: function () {
                    },
                    isCloseButton: true
                }

            ];
//               $('#loginModel').draggable();
//                $('#loginModel').resizable();
            modalObj['buttons'] = buttonArray;
            createModal("dataDxpSplitterValue", modalObj);

        } else if (currentDomain != null && currentDomain != '' && currentDomain != 'undefined'
                && currentDomain != undefined && currentDomain != domainValue) {
            stopLoader();
            var message = 'Please click on ' + title + ' menu to process any sub operations or activities';
            var modalObj = {
//                    title: 'Message',
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                body: message
            };
            var buttonArray = [
                {
                    text: 'Ok',
                    click: function () {
                    },
                    isCloseButton: true
                }

            ];
            modalObj['buttons'] = buttonArray;
            createModal("dataDxpSplitterValue", modalObj);

        } else if (currentDomain != null && currentDomain != '' && currentDomain != 'undefined' && currentDomain != undefined
                && currentDomain == domainValue) {
            stopLoader();
            domainBasedGridData(domainValue, title, gridId, roleId, subscribedflag)
        } else {
            stopLoader();
            domainBasedGridData(domainValue, title, gridId, roleId, subscribedflag)
        }


    } else {
        var divid = "<div id='tyestds'></div><span id='test'></span>";
        var modalObj = {
            title: 'Message',
            body: divid
        };
        var buttonArray = [
            {
                text: 'Close',
                click: function () {

                },
                isCloseButton: true
            }
        ];
        modalObj['buttons'] = buttonArray;
        createModal("dataDxpSplitterValue", modalObj);
        $("#dataDxpSplitterValue").addClass("subscriptionMesgPop");
        $("#dataDxpSplitterValue .modal-dialog").addClass("modal-md");
        $("#tyestds").html("<img src='images/subscription.png' style=width:50px; id ='subcriptionid' class='subcriptionclass themeModeDark'/>");
        $("#test").html("<h6>Subscription is not Available for " + title + "</h6>");
        $("#Loader").css("display", "none");
        $("body").css({"pointer-events": "auto"});
    }
}
function domainBasedGridData(domainValue, title, gridId, roleId, subscribedflag, fromHometab) {
    try {
        showLoader();
        var id = "";
        $("#VisualizePageBody").hide();
        if (fromHometab != null && fromHometab != '' && fromHometab != undefined && fromHometab == 'Y') {
        } else {
            $("#dxpGridTab").css("display", "none");
            $("#dxpClassesTab").css("display", "none");
            $("#dxpFromTab").css("display", "none");
            $("#dxpClusterTab").css("display", "none");
            $("#dxp1TabsWithGrid").css("display", "none");
            $("#dxp2TabsWithGrid").css("display", "none");
            $("#dxpClusterTab2").css("display", "none");
            $("#dxpSearchTab").css("display", "none");
            $(".menutabclass").html("");
            $(".menutabClass").css("background-color", "");
        }

        $("#currentDomain").val(domainValue);
        $.ajax({
            datatype: "json",
            type: "POST",
            async: false,
            url: 'showSearchDxpClassResults',
            data: {
                domainValue: domainValue,
                'gridId': gridId,
                'roleId': roleId
            },
            traditional: true,
            cache: false,

            success: function (response) {
//                stopLoader();
                stopLoader();
                var resultObj = {};
                var taslListdata = response['taslListdata'];
                var resultdata = response['result'];
                resultObj = JSON.parse(resultdata);
                $("#showdomainBasedCards").remove();
                $("#allContentMainDiv").append("<div id='showdomainBasedCards' class='row'></div>");
                $("#showdomainBasedCards").show();
                $("#showdomainBasedCards").attr("data-homegridId", gridId);
                $("#showdomainBasedCards").attr("data-homegriddomainValue", domainValue);
                $("#showdomainBasedCards").attr("data-homegridtitle", title);
                $("#showdomainBasedCards").attr("data-homegridroleId", roleId);
                $("#showdomainBasedCards").attr("data-homegridsubscribedflag", subscribedflag);
                $("#showdomainBasedCards").addClass("showGridHeight");
                gridConfig(resultObj, 0, [], "DEFAULT_HOME");
                if (fromHometab != null && fromHometab != '' && fromHometab != undefined && fromHometab == 'Y') {
                } else {
                    $("#dxpTaskListDivId").remove();
                    $("#showdomainBasedCards").append("<div id='dxpTaskListDivId' class='dxpTaskListDivClass'></div>");
                    $("#dxpTaskListDivId").append("<div class='dxpTaskListIcons' id='Task' title='Task List'><img src='images/iDXPUI5TaskList.svg'></div>");
                    $("#dxpTaskListDivId").append(taslListdata);
                    getTaskListOnClickInfo();
                }

            }
        });
    } catch (e) {
        stopLoader();
    }
}
function CreationBasedOnDomainWithGrid(datafield, data, redirectType, hrefGridId, panelId, baskettype) {
    showLoader();
    var itemsObj = {};
    var items = {};
    var linkedColumns = "CONTENT,TERM,CLASS,CLASS_TERM,DEFINITION,uid,UID,HIDDEN_GRID_ID";
//var linkedColumns = "";
    for (var key in data) {

        if (linkedColumns.lastIndexOf(key) > -1) {
        } else {
            var value = data[key];
            value = value.toString();
            if (value != null && value != '') {
                //  value = value.replace(/\s/gi, "_");
                // value = value.replace(/[#]/g, "_");
            }

            items[key] = value;
        }
    }
    var gridId = '';
    var className = "";
    var currentrole = sessionStorage.getItem("currentRole");
//    var currentDomain = $("#currentDomain").val();
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    items.CLASS = data['TERM'];
    items.CLASS_TERM = data['TERM'];
    items.RECORD_GROUP = data['RECORD_GROUP'];
    items.CONCEPT_ID = data['CONCEPT_ID'];
    items.gridId = hrefGridId;
    var itemsStr = JSON.stringify(items);
    $("#itemsstring").val(itemsStr);
    $("#currentGridId").val(hrefGridId);
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "itemRegisterForm",
        cache: false,
        data: {
            items: itemsStr,
            data: JSON.stringify(data),
            fioriThemeFlag: fioriThemeCheck,
        },
        success: function (response) {
            stopLoader();
            var form = response['formStr'];
            var baskettype = response['baskettype'];
            $("#dxpFormContent").html("");
            $("#dxpFormContent").html(form);
            $("#materialBasketId").html(baskettype);
            $("#materialBasketId").show();
            $('#dxpVisionFormRefreshDivSpanImg').attr('data-attr', '');
            $('#dxpVisionFormDataHidden').val('');
            showSelectedTabContent(event, 'dxpFromTab', 'dxpFormContent', 'View Form', 'N');
            //$("#fourthDxpSplitter").html(form);
            // $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
            $(".formDxpDuplicates").hide();
            $(".formDxpDuplicates").html("");
            if (form != null && form != undefined && form != '') {
                registerClickFunction();

                stopLoader();
            } else {
                var message = response['message'];
                var modalObj = {
//                    title: 'Message',
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                    body: message
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        click: function () {
                            $('#loginModel').modal('show');
                        },
                        isCloseButton: true
                    }

                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
            }

        },
        error: function (e) {
            sessionTimeout(e);
        }// Error function in Ajax
    });
}
function DXPSmartsearchResults(domainValue) {
    var domain = $('#SelectedValue').val();
    var userval = $('#SearchResult').val();
    if (domainValue != null && domainValue == 'All') {
        getDefaultCreateFormWithCardResults("HOME");
//        var role = sessionStorage("ssRole");
        setTimeout(function () {
            getsearchFormWithCardsCreation(userval, 'CREATE');
            searchdomainBasedFormView(userval, domainValue, "FMM_MGR_MATERIAL_SEARCH", "STG_MM_SEARCH");
        }, 1000);
    } else {
        $.ajax({
            url: 'getDomainAttribute',
            type: "POST",
            datatype: "json",
            async: false,
            data: {
                domainValue: domain
            },
            success: function (response) {
                stopLoader();
                var dataobj = response['datalist'];
                var listdata = dataobj[0];
                var searchid = listdata[0];
                var searchView = listdata[1];
                var RoleId = listdata[2];
                getDefaultCreateFormWithCardResults("HOME");
                setTimeout(function () {
                    getsearchFormWithCardsCreation(userval, 'CREATE');
                    searchdomainBasedFormView(userval, domainValue, searchid, searchView, RoleId);
                }, 1000);
            }, error: function (e) {
                sessionTimeout(e);
            }
        });
    }
}
function searchdomainBasedFormView(userval, domainValue, searchId, searchView, role) {
    if (domainValue != null && domainValue == 'All') {
        $(".menutabclass").html("");
        $(".menutabClass").css("background-color", "");
        DXPSsearchResults('S', userval, domainValue, searchId, searchView, role);
        $("#submenutabIdPRODUCT").html("<i style='color:limegreen' class='fa fa-check fa-lg'></i>");
        $("#submenutabIdPRODUCT").css("background-color", "#e1eaf7");
    } else {
        $(".menutabclass").html("");
        $(".menutabClass").css("background-color", "");
        DXPSsearchResults('S', userval, domainValue, searchId, searchView, role);
        $("#submenutabId" + domainValue + "").html("<i style='color:limegreen' class='fa fa-check fa-lg'></i>");
        $("#submenutabId" + domainValue + "").css("background-color", "#e1eaf7");
    }
}
function createitem() {
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var typedResult = $("#typedResult").val();
    var locale = $("#localedd").find(':selected').data('code');
    var searchType = $("#currentSearchType").val();
    var paramArrayStr = $("#currentSearchData").val();
    var cattype = $("#currentSearchCatType").val();
    //templateResultsCover
    var searchText = ($("#result").val() != null ? $("#result").val() : "");
    if ((searchText != null && searchText != '') || (paramArrayStr != null && paramArrayStr != '')) {

        $.ajax({
            type: "POST",
            url: 'getTemplateGrid',
            data: {
                'searchType': 'S',
//                'langID': ($("#localedd").val() != null ? $("#localedd").val() : ''),
                'langID': 'en_US',
                'locale': 'en_US'
            },
            traditional: true,
            cache: false,
            success: function (gridResultObj) {
                if (gridResultObj != null) {

                    try {
                        $("#templateResults").jqxGrid("destroy");
                    } catch (e) {
                    }

//                      $("#showdomainBasedCards").html("<div id='searchResults'></div>");
                    $("#dxClassesContent").html("<div id='templateResults'></div>");
                    showSelectedTabContent(null, 'dxpClassesTab', 'dxClassesContent', 'View Classes', 'N');
                    //need to assign all hidden fields like hrefColumn,linkedColumns,stripValue,imageColumn,imageTable,imageTableColumn
                    var hrefObj = {}; //hrefObj
                    hrefObj = gridResultObj['hrefObj'];
                    var searchButtonObj = gridResultObj['searchButtonObj'];
                    if (searchButtonObj != null) {
                        $("#templateButtonObj").val(JSON.stringify(searchButtonObj));
                    }
                    if (gridResultObj != null && gridResultObj.datafields) {

                        var imagerenderer = function (row, datafield, value) {

                            return '<img src="" id="ind' + row + '" class="indimage"><label id="imgLabel' + row + '" class="indimage">Show Image</label>';
                        };
                    }
                    var dataFeilds = gridResultObj.datafields;
                    var hrefObj = gridResultObj.hrefObj;
                    var localData = gridResultObj.data;
                    var formId = gridResultObj.formId;
                    var panelId = gridResultObj.panelId;
                    var gridOperation = gridResultObj.gridOperation;
                    var gridPropObj = {};
                    gridPropObj = gridResultObj.gridPropObj;
                    if (gridPropObj != null) {
                        gridPropObj.columns = gridResultObj.columns;
                        var headerTooltipRenderer = function (element) {
                            $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
                                position: 'bottom-right',
                                showArrow: false, content: $(element).text()});
                        }

                        var renderToolbar = gridPropObj.renderToolbar;
                        gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');
                        var descrender
                                = function (row, columnfield, value, defaulthtml, columnproperties) {
                                    //return '<textarea readonly class="ta_style" rows=1 >' + value + '</textarea>';
                                    console.log("hiiiii");
                                    return '<div style="height:' + $('#templateResults').jqxGrid('rowsheight') + 'px" class="ta_style" rows=1 >' + value + '</div>';
                                };
                        var classTermRender
                                = function (row, columnfield, value, defaulthtml, columnproperties) {
                                    //return '<textarea readonly class="ta_style" rows=1 >' + value + '</textarea>';
                                    console.log("hiiiii");
                                    return '<div style="cursor:pointer;" class="vend_style">' + value + '</div>';
                                };
                        var descriptorImageRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
                            return  "<img title='Click to create a record' style='cursor:pointer;'  src='" + value + "' class='imageStyle visionTemplete' data-count='" + $('#templateResults').jqxGrid('pagesize') + "' id='dtlul_"
                                    + row + "' onmouseover=templeteMouseOver('dtlul_" + row + "'," + $("#templateResults").jqxGrid("pagesize") + ") onmouseout=templeteMouseOut('dtlul_" + row + "'," + $("#templateResults").jqxGrid("pagesize") + ")>";
                        };
                        var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                            var cellValue = $("#templateResults").jqxGrid('getcellvalue', row, columnfield);
                            var viewType = "GRID-VIEW";
                            var ddwData = gridResultObj.dropDowndData;
                            var ddwObj = ddwData[columnfield];
                            var dependencyparams = ddwObj.dependencyparams;
                            var editable = gridPropObj.editable;
//                         
                            if (editable) {
                                return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img id='dd" + "templateResults" + columnfield + "' src='images/iDXPUI5SearchDropdown.png'  onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                                // return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img src='images/iDXPUI5SearchDropdown.png' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                            } else
                            {
                                return "<div class='visionGridDataAlign'>" + cellValue + "</div>";
                            }

                        };
                        for (var i = 0; i < gridPropObj.columns.length; i++) {
                            if (gridPropObj.columns [i].cellsrenderer != null) {
                                gridPropObj.columns [i].cellsrenderer = eval(gridPropObj.columns [i].cellsrenderer);
                            }
                            if (gridPropObj.columns[i].rendered != null) {
                                gridPropObj.columns[i].rendered = eval('(' + gridPropObj.columns[i].rendered + ')');
                            }
                        }

                        if (gridPropObj.rendergridrows != null && gridPropObj.rendergridrows != "") {

                            gridPropObj.rendergridrows = eval('(' + gridPropObj.rendergridrows + ')');
                        }
                        if (gridPropObj.rowsheight != null) {
                            gridPropObj.rowsheight = parseInt(gridPropObj.rowsheight);
                            //  gridPropObj.autorowheight = true;
                            $('.show_detail').css('height', parseInt(gridPropObj.rowsheight + "px"));
                        } else {
                            $('.show_detail').css('height', '25px');
                        }

                        var source =
                                {
                                    type: 'POST',
                                    datatype: "json",
                                    datafields: dataFeilds,
                                    data: {
                                        gridId: gridResultObj['gridId'],
                                        colsArray: JSON.stringify(gridResultObj['colsArray']),
                                        tableName: "STG_TERMINOLOGY",
                                        searchText: ($("#result").val() != null ? $("#result").val() : ""),
                                        searchType: "S",
                                        filterColumnName: gridResultObj['filterColumnName'],
                                        'langID': ($("#localedd").val() != null ? $("#localedd").val() : ""),
                                        'locale': "en_US",
                                        'cattype': cattype,
                                        'paramArray': paramArrayStr
                                    },
                                    url: 'getTemplateResults',
                                    cache: false,
                                    beforeSend: function (xhr) {
                                        xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
//                                    showLoader();
                                    }, loadError: function (xhr, status, error) {
//                                      stopLoader();
                                        throw new Error(error);
                                    }, loadComplete: function (data)
                                    {
//                                    stopLoader();
                                    },
                                    beforeprocessing: function (data) {
//                                                 
                                        if (data[0] != null) {
                                            //  alert(data.JSONObjectList[0].TotalRows);
                                            if (data[0].TotalRows != null) {
                                                source.totalrecords = data[0].TotalRows;
                                            } else {
                                                $("#dialog").html(data[0]);
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
                                        } else {
//                                        $("#search_count").attr('totalRecords', 0);
                                            source.totalrecords = 0;
                                            // $("#search_count").text("(No record(s) found)");
//                                        $("#search_count").html("(" + (labelObject['No record(s) found'] != null ? labelObject['No record(s) found'] : 'No record(s) found') + ")");
                                        }
                                        try {
//                                        $("#templateResults").jqxGrid('clearselection');
                                        } catch (e) {
                                        }
                                        stopLoader();
                                    },
                                    sort: function ()
                                    {
                                        $("#templateResults").jqxGrid('updatebounddata', 'sort');
                                        try {
                                            $("#templateResults").jqxGrid('clearselection');
                                        } catch (e) {
                                        }

                                    },
                                    filter: function () {

                                        $("#templateResults").jqxGrid('updatebounddata', 'filter');
                                        try {
                                            $("#templateResults").jqxGrid('clearselection');
                                        } catch (e) {
                                        }
                                    }


                                };

                        var dataAdapter = new $.jqx.dataAdapter(source);
                        gridPropObj.source = dataAdapter;
                        gridPropObj.showtoolbar = true;
                        gridPropObj.rowdetails = true;
                        gridPropObj.rendergridrows = function () {
                            return dataAdapter.records;
                        };

                        gridPropObj.cellhover = function (element, pageX, pageY)
                        {

                            var cell = $('#templateResults').jqxGrid('getcellatposition', pageX, pageY);
                            //\\alert("hello"+cell.row);
                            var datainformation = $('#templateResults').jqxGrid('getdatainformation');
                            var paginginformation = datainformation.paginginformation;
                            var rowscount = paginginformation.pagesize;
                            var pagenum = paginginformation.pagenum;
                            var cellRow = cell.row;
//                              alert(cellRow);
                            if (cellRow >= rowscount && pagenum > 0)
                            {
                                var cellvalue = rowscount * pagenum;
                                if (cellRow == rowscount)
                                {
                                    cellRow = (cellRow - cellvalue);
                                } else
                                {
                                    cellRow = (cellRow - cellvalue);
                                }
                                console.log(cellRow + "cellRow");
                            } else
                            {
                                cellRow = cellRow;
                            }


                        };
                        gridPropObj.rowdetails = false;
                        gridPropObj.autorowheight = false;
                        $('#templateResults').jqxGrid(gridPropObj);
                        $('#templateResults').parent().css("padding-top", "3px", "important");
                        $('#templateResults').parent().css("padding-bottom", "3px", "important");
                        $('#templateResults').jqxGrid('showtoolbar', true);
                        $('#templateResults').on('cellclick', function (event) {//newRegGridId
                            console.log("event.args.column.datafield::templateResults:::" + event.args.column.datafield);
                            var args = event.args;
                            var rowBoundIndex = args.rowindex;
//                            var gridid = $("regGrdiId").val();
                            var gridid = gridResultObj['gridId'];
                            $("#currentRowIndex").val(rowBoundIndex);
//                            $("#currentGridId").val(gridResultObj['gridId']);
                            var columnindex = args.columnindex;
                            var dataField = args.datafield;
                            if (columnindex == 1) {
                                CreationBasedOnDomainWithGrid(event.args.column.datafield, $('#templateResults').jqxGrid('getrowdata', event.args.rowindex), 'form', gridid, '', 'New Registrations')
                                showSelectedTabContent(null, 'dxpFromTab', 'dxpFormContent', 'View Form', 'N');
                            }
                        });
                        $("#templateResults").on('celldoubleclick', function (event) {
                            var args = event.args;
                            var dataField = args.datafield;
                            var dataField1 = args.text;
                            var rowIndex = args.rowindex;
                            var cellValue = args.value;
                            var isEditable = $('#templateResults').jqxGrid('getcolumnproperty', dataField, 'editable');
                            if (!isEditable) {
                                var column = $("#templateResults").jqxGrid('getcolumn', event.args.datafield).text;
                                if (column.trim() != null && column.trim() != '' && column.trim()
                                        != 'null' && column.trim() != 'undefined' && column.trim() != undefined
                                        && cellValue.trim() != null && cellValue.trim() != '' && cellValue.trim()
                                        != 'null' && cellValue.trim() != 'undefined' && cellValue.trim() != undefined
                                        && !(cellValue.trim().startsWith("data:image/png"))
                                        && !(cellValue.trim().startsWith("data:image/jpg"))
                                        && !(cellValue.trim().startsWith("data:image/jpeg"))
                                        )
                                {
                                    popupedit(column, cellValue);
                                }
                            }

                        });
                        // stopLoader();
                        // stopLoader();

                    }// end if(gridPropObj != null)


                }
                // stopLoader();
            },
            error: function (e) {
                stopLoader();
                console.log(e);
                sessionTimeout(e);
            }


        });
    } else {

        $("#dialog").html((labelObject['Search something to get Template Results'] != null ? labelObject['Search something to get Template Results'] : 'Search something to get Template Results'));
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

//    stopLoader();
}

function adjustSplitters(splittersSizeData) {
    $('#firstDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: splittersSizeData['firstDxpSplitter']}]});
    $('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: splittersSizeData['secondDxpSplitter']}]});
    $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: splittersSizeData['thirdDxpSplitter']}]});

}
function getsubcomponent(event, id, highLevelMenuId) {

    $(".dxpSubdomainMenuItem").css("background-color", "#fff");
    if ($("#" + id + "_submenu").length > 0 && $("#" + id + "_submenu").find(".dxpSubdomainMenuItem").length > 0) {
        $("#" + id + "_submenu").empty();
        $("#" + id).removeClass("active");
    } else {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            url: "getsubDomainComponent",
            cache: false,
            async: false,
            data: {
                highLevelMenuId: highLevelMenuId
            },
            success: function (response) {
                stopLoader();
                if (response != null && response != '') {
                    // $("#"+id).find(".dxpSubdomainMenuItem").remove();
                    $("#" + id + "_submenu").append(response);
                    $("#" + id + "_submenu").css("background-color", "#eee")
                    // $('#bla').after('<div id="space"></div>');
                }

            },
            error: function (e) {
                sessionTimeout(e);
            }// Error function in Ajax
        }); // end ajax call
    }


}
function scroller() {
    var current = 0;
    var ScrollX_pixelPer = 40;
    $("#filterRowButton").on("mousewheel", function (e) {
        e.preventDefault();
        var delta = ScrollX_pixelPer * (parseInt(e.originalEvent.deltaY) / 33);
        current += delta;
        $(this).scrollLeft(current);
    });
}
function getproducttypes(menudiv, domain) {
    var id = menudiv.id;
    var ptype = "<div class='searchFirstResultsList createForm' onclick=\"showSearchBar(this,'" + domain + "')\">"
            + "<div class=\"materialImage\"><img id='creationPopOver' src=\"images/add_icon.svg\" "
            + "class=\"themeModeDark\" width=\"25px\" title=\"Create\"/></div>"
            + "<div class=\"searchResultVendor\" id=\"autoChangeText\">MRO</div>"
            + "</div>";
    ptype += "<div class='searchFirstResultsList createForm' onclick=\"showSearchBar(this,'" + domain + "')\">"
            + "<div class=\"materialImage\"><img id='creationPopOver' src=\"images/add_icon.svg\" "
            + "class=\"themeModeDark\" width=\"25px\" title=\"Create\"/></div>"
            + "<div class=\"searchResultVendor\" id=\"autoChangeText\">Raw Materials</div>"
            + "</div>";
    ptype += "<div class='searchFirstResultsList createForm' onclick=\"showSearchBar(this,'" + domain + "')\">"
            + "<div class=\"materialImage\"><img id='creationPopOver' src=\"images/add_icon.svg\" "
            + "class=\"themeModeDark\" width=\"25px\" title=\"Create\"/></div>"
            + "<div class=\"searchResultVendor\" id=\"autoChangeText\">Finished Good</div>"
            + "</div>";
    $("#producttypeId").html(ptype);
    $("#producttypeId").jqxPopover('open');
    $("#producttypeId").jqxPopover({
        offset: {left: -5, top: 70},
        arrowOffsetValue: -55,
        position: 'right',
        width: 100,
        height: 200,
        showCloseButton: true,
        selector: $("#" + id)
    });
    $("#producttypeId").addClass('dxpFilterPopOverClass');
    $('#producttypeId').jqxPopover('open');
    $("#producttypeId").find('.jqx-popover-title').css("display", "none");
}
//new layout code
function toggleTabsAndMenus(event) {
    var headerFioriFlag = $("#cb-switch").is(":checked");//27-03-2025
    if (headerFioriFlag) {
        toggleFioriTabsAndMenus(event);
    } else {
        if ($("#dxpTabs").is(":visible")) {
            $('#dxpMain').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', resizable: false, splitBarSize: 0, panels: [{size: 100}]});
            $("#dxpTabs").hide();
            $("#dxpDomainMenus").show();
            $("#dxpMenus").hide();
            $("#sidebarsearchButton").show();//200623
            $("#nextScreenClass").show();//200623
            $("#dxp1Firstdiv").css({
                width: "42%"
            });
            $("#dxp1Seconddiv").css({
                width: "56.9%"
            });
        } else {
            $('#dxpMain').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', resizable: false, splitBarSize: 0, panels: [{size: 30}]});
            $("#dxpTabs").show();
            $("#dxpTabs").css("overflow-y", "auto")
            $("#dxpTabs").css("overflow-x", "hidden")
            $("#dxpDomainMenus").hide();
            $("#dxpMenus").hide();
            $("#sidebarsearchButton").hide();//200623
            $("#nextScreenClass").hide();//200623
            $("#dxp1Firstdiv").css({
                width: "40%"
            });
            $("#dxp1Seconddiv").css({
                width: "59.4%"
            });
        }
    }
    $("#sidebarsearch").val('');
}
function showSelectedTabContent(event, tabHeader, tabContent, tabName, refreshFlag, taskListHideFlag) {
    try {
        $(".dxpSplitterTabs").removeClass("active");

        $("#" + tabHeader).show();
        $("#" + tabHeader).addClass("active");
        insertUserClickedNavigations(tabName);
        $(".dxpSplitterTabsContent").removeClass("active");
        $(".dxpSplitterTabsContent").hide();
        $("#basketNameValId").show();
        var rolehId = $("#rolehid").val();
        if (rolehId != null && rolehId != undefined && rolehId != '' &&
                (rolehId.indexOf("_DG_") === -1 || rolehId.indexOf("_FOUNDRY_") === -1)) {
            localStorage.removeItem("OldRole");
            localStorage.setItem("OldRole", rolehId);
            $("#rolehid").val(rolehId);
        }

//      if (fioriThemeCheck && tabHeader === "dxpHomeTab" && tabContent === "dxpHomeContent") {
//            tabName = "Home"
//        }  

//        $("#" + tabContent).show();
        let checkbox = $("#cb-switch");
        var fioriThemeCheck = checkbox.is(":checked");
        if (fioriThemeCheck && tabContent === "dxp2TabsWithGridContent") {
            tabContent = "dxp2FioriTabsWithGridContent";
            $("#" + tabContent).show();
        } else if (fioriThemeCheck) {
            $("#" + tabContent).show();
            $("#dxp2FioriTabsWithGridContent").hide();
        } else {
            $("#" + tabContent).show();
        }
        try {

            if ((tabContent != null && tabContent != '' && tabContent != undefined && tabContent == 'dxpFormContent') ||
                    (taskListHideFlag != null && taskListHideFlag != '' && taskListHideFlag != undefined && taskListHideFlag == 'Y')) {
//                stopLoader();
                try {
                    $("#dxpTaskListDivId").remove();
                } catch (e) {

                }

            } else {
                var taslListdata = $("#dxpTaskListDivId").html();
                $("#dxpTaskListDivId").remove();
                $("#dxpContent").append("<div id='dxpTaskListDivId' class='dxpTaskListDivClass'</div>");
                $("#dxpTaskListDivId").append(taslListdata);
                getTaskListOnClickInfo();
                $('.visionTask').hide();
            }
//            if ($("#dxp2FioriTabsWithGridContent").length != 0 && !$("#dxp2FioriTabsWithGridContent").is(":visible")) {
//                $("#dxp2FioriTabsWithGridContent").show();
//            } else if ($("#dxp2FioriTabsWithGridContent").length != 0 && $("#dxp2FioriTabsWithGridContent").is(":visible")) {
//                $("#dxp2FioriTabsWithGridContent").hide();
//            }
            if ($("#dxp2FioriTabsWithGridContent").length != 0 && $("#dxp2FioriTabsWithGridContent").html().trim() === "") {
                $("#dxp2FioriTabsWithGridContent").hide();
            }


        } catch (e) {

        }
        if (tabContent == 'dxpSearchContent') {
            $(".massSearchListItem").hide();
            $("#DXPlLanguageSelectionId").hide();
            $("#Task").hide();
            $("#dxpTaskListDivId").hide();
        }
//        else {
//            $(".globalSearchBar").show();
//        }


        try {
            $("#filterGridForm").dialog("close");
        } catch (e) {
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

        try {
            if (tabName != null && tabHeader != '' && tabHeader != undefined) {
                $("#" + tabHeader).find('p').find('b').text(tabName);
//        $("#" + tabHeader).find('p').find('b').attr("title", tabName);
            } else {
                $("#" + tabHeader).find('p').find('b').attr("defaulttabname", tabName);
//        $("#" + tabHeader).find('p').find('b').attr("title", tabName);
            }
        } catch (ee) {
        }

        try {
            const titleElements = document.querySelectorAll('.tabTitle b');
            titleElements.forEach((title) => {
                let titleText = title.innerText;
                title.setAttribute('title', titleText)
            })
        } catch (e) {

        }

        var tabtittle = $("#" + tabHeader).find('p').find('b').text();


        try {

            if (tabHeader != null && tabHeader != '' && tabHeader != undefined && tabHeader == 'dxpHomeTab') {
                var homegridId = $("#showdomainBasedCards").attr("data-homegridId");
                var domainValue = $("#showdomainBasedCards").attr("data-homegriddomainValue");
                var title = $("#showdomainBasedCards").attr("data-homegridtitle");
                var roleId = $("#showdomainBasedCards").attr("data-homegridroleId");
                var subscribedflag = $("#showdomainBasedCards").attr("data-homegridsubscribedflag");
                if (homegridId != null && homegridId != '' && homegridId != undefined
                        && domainValue != null && domainValue != '' && domainValue != undefined
                        && roleId != null && roleId != '' && roleId != undefined) {
                    if (!fioriThemeCheck) {
                        domainBasedGridData(domainValue, title, homegridId, roleId, subscribedflag, 'Y');
                    }
                }
                if (fioriThemeCheck) {
                    try {
                        let functionString = $('#defaultHeaderFirorTabId').attr('onclick');
                        if (functionString != null && functionString != "" && functionString != undefined) {
                            let functionName = functionString.match(/([a-zA-Z0-9_]+)\(([^)]*)\)/);

                            if (functionName && functionName.length > 2) {
                                let name = functionName[1];
                                let argsString = functionName[2];


                                let args = argsString.split(',').map(arg => arg.trim().replace(/^'|'$/g, ''));

                                // Dynamically call the function
                                if (typeof window[name] === 'function') {
                                    window[name](...args);
                                } else {
                                    console.error('Function not found: ' + name);
                                }
                            } else {
                                console.error('Invalid function string:', functionString);
                            }
                        }
                    } catch (e) {
                        console.log(e)
                    }
                }


                $("#Task").show();
                $("#dxpTaskListDivId").show();

                var idxpglobalsearchflag = $('#idxpglobalsearchflag').val();
                if (idxpglobalsearchflag != null && idxpglobalsearchflag != ''
                        && idxpglobalsearchflag != undefined && idxpglobalsearchflag == 'Y') {
                    $(".globalSearchBar").show();
                }


            }
        } catch (e) {

        }

        try {

            if (tabHeader != null && tabHeader != '' && tabHeader != undefined && tabHeader == 'dxpGridTab') {
                var gridcomponenttype = $("#dxpGridTab").attr("data-gridcomponenttype");
                var selectedgridId = $("#dxpGridTab").attr("data-selectedgridId");
                var roleId = $("#dxpGridTab").attr("data-selectedRoleId");
                var functionName = $("#dxpGridTab").attr("data-functionName");
                if (gridcomponenttype != null && gridcomponenttype != '' && gridcomponenttype != undefined
                        && selectedgridId != null && selectedgridId != '' && selectedgridId != undefined
                        && roleId != null && roleId != '' && roleId != undefined && refreshFlag != 'N') {
                    if (functionName != null && functionName != '' && functionName != undefined
                            && functionName == 'getMaterialComponentGrid') {
                        getMaterialComponentGrid(gridcomponenttype, selectedgridId, roleId, "Y");
                    } else if (functionName != null && functionName != '' && functionName != undefined
                            && functionName == 'getMaterialGridResults') {
                        getMaterialGridResults(gridcomponenttype, selectedgridId, roleId, "Y");
                    } else {
                        getMaterialGridResults(gridcomponenttype, selectedgridId, roleId, "Y");
                    }


                }
                $("#Task").show();
                $("#dxpTaskListDivId").show();
            }
        } catch (e) {

        }

        try {
            if (tabContent != null && tabContent != '' && tabContent != undefined && tabContent == 'dxpKDSTabContent') {
                $(".defaultShowCards").hide();
                $("#iDXPKDSContainerId").show();
                $("#dxpHomeContent").show();
            }
            if (tabHeader != null && tabHeader != '' && tabHeader != undefined && tabHeader == 'dxpFromTab'
                    && refreshFlag == 'N') {

                $("#Task").hide();
                $("#dxpTaskListDivId").hide();

            } else if (tabHeader != null && tabHeader != '' && tabHeader != undefined && tabHeader == 'dxpFromTab') {
                stopLoader();
                var dataAttr = $("#dxpVisionFormRefreshDivSpanImg").attr("data-attr");
                if (dataAttr == null) {
                    dataAttr = $('#dxpVisionFormDataHidden').val();
                }
                if (dataAttr != null && dataAttr != '' && dataAttr != 'null' && dataAttr != 'undefined' && dataAttr != undefined) {
                    var obj = $.parseJSON(dataAttr);
                    navigateToForm(obj.datafield, obj.data, obj.redirectType, obj.gridId, obj.selectedTabId, obj.selectingrowindex, 'N');
                }
                $("#Task").hide();
                $("#dxpTaskListDivId").hide();

            }

        } catch (e) {
            stopLoader();
        }

        try {
            if (tabContent != null && tabContent != '' && tabContent != undefined && tabContent == 'dxp1TabsWithGridContent'
                    && refreshFlag == 'N'
                    ) {

                if (tabtittle.indexOf("Search Results") > -1 || tabtittle.indexOf("Parametric Search") > -1
                        || tabtittle.indexOf("Dictionary Search") > -1 || tabtittle.indexOf("Classification Search") > -1) {
                    $("#Task").hide();
                    $("#dxpTaskListDivId").hide();

                } else {
                    $("#Task").show();
                    $("#dxpTaskListDivId").show();
                }


//          stopLoader(); 
            } else if (tabContent != null && tabContent != '' && tabContent != undefined && tabContent == 'dxp1TabsWithGridContent') {
                stopLoader();

                if (tabtittle.indexOf("Search Results") > -1 || tabtittle.indexOf("Parametric Search") > -1
                        || tabtittle.indexOf("Dictionary Search") > -1 || tabtittle.indexOf("Classification Search") > -1) {
                    try {
                        var searchflag = $("#searchResultsParamsData").attr("data-searchflag");
                        var searchType = $("#searchResultsParamsData").attr("data-searchType");
                        var searchId = $("#searchResultsParamsData").attr("data-searchId");
                        var searchView = $("#searchResultsParamsData").attr("data-searchView");
                        var role = $("#searchResultsParamsData").attr("data-searchrole");
                        var resultflag = $("#searchResultsParamsData").attr("data-searchresultflag");
                        var userval = $("#searchResultsParamsData").attr("data-searchuserval");
                        var searchText = $("#searchResultsParamsData").attr("data-searchText");
                        var domainValue = $("#searchResultsParamsData").attr("data-searchdomainValue");
                        var paramsArray = $("#searchResultsParamsData").attr("data-searchparamsArray");
                        var cattype = $("#searchResultsParamsData").attr("data-searchcattype");
                        var reqType = $("#searchResultsParamsData").attr("data-searchreqType");
                        var searchName = $("#searchResultsParamsData").attr("data-searchName");
                        var templateFlag = $("#searchResultsParamsData").attr("data-searchtemplateFlag");
                        var templateGrid = $("#searchResultsParamsData").attr("data-searchtemplateGrid");

                        $("#Task").hide();
                        $("#dxpTaskListDivId").hide();
                    } catch (e) {
                    }
                    try {
                        if (searchflag != null && searchflag != '' && searchflag != 'null' && searchflag != 'undefined'
                                && searchflag != undefined && searchflag == 'Y' && searchType != null && searchType != ''
                                && searchType != 'null' && searchType != 'undefined'
                                && searchType != undefined &&
                                searchId != null && searchId != '' && searchId != 'null' && searchId != 'undefined'
                                && searchId != undefined) {
                            $("#searchId").val(searchId);
                            if (searchType == 'S') {
//                                DXPSsearchResults(searchType, userval, domainValue, searchId, searchView, role, resultflag);
                            } else if (searchType == 'C') {
                                classificationsearchResults(searchType, reqType, JSON.parse(paramsArray), cattype, searchName, 'Y');
                            } else {
                                searchResults(searchType, reqType, JSON.parse(paramsArray), cattype, searchName, templateFlag, templateGrid);
                            }


                        }
                    } catch (e) {

                    }
                } else {
                    try {
                        var filterGridselectedGridIndex = $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex");
                        var filterGridselectedgridId = $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId");
                        var filterGridselectedTabId = $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId");
                        var filterGridselectedColumn = $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn");
                        var filterGridisImport = $("#dxp1TabsWithGrid").attr("data-filterGridisImport");
                    } catch (e) {

                    }
                    try {
                        if (filterGridselectedgridId != null && filterGridselectedgridId != ''
                                && filterGridselectedgridId != 'null' && filterGridselectedgridId != 'undefined'
                                && filterGridselectedgridId != undefined) {

                            getFilterGridResults(filterGridselectedgridId, filterGridselectedGridIndex, filterGridselectedTabId, filterGridselectedColumn, filterGridisImport)

                        }
                    } catch (e) {

                    }
                    $("#Task").show();
                    $("#dxpTaskListDivId").show();
                }

            }

        } catch (e) {
            stopLoader();
        }




        try {
            var dxpAdavanceSearchOptions = '';
            try {
                dxpAdavanceSearchOptions = $('#floatingdxpAdavanceSearchOptions').val();
            } catch (et) {
                var dxpAdavanceSearchOptions = '';
            }

            if (tabContent != null && tabContent != '' && tabContent != undefined && tabContent == 'dxpSearchContent')
            {
                $(".searchbarDivClass").css("display", "block", "!important")
                var currentSearchDomain = $("#currentshowSearchDomain").val();
                var currentSearchId = $("#currentshowSearchId").val();
                var currentSearchRole = $("#currentshowSearchRole").val();
                var currentSearchwithOutTemp = $("#currentSearchwithOutTemp").val();
                var regGrdiId = $("#regGrdiId").val();
                $("#Task").hide();
                $("#dxpTaskListDivId").hide();
                if (currentSearchDomain != null && currentSearchDomain != '' && currentSearchDomain != undefined
                        && currentSearchId != null && currentSearchId != '' && currentSearchId != undefined
                        && currentSearchRole != null && currentSearchRole != '' && currentSearchRole != undefined
                        && dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != '' && dxpAdavanceSearchOptions != undefined
                        && dxpAdavanceSearchOptions != 'S' && dxpAdavanceSearchOptions != 'D') {
                    if (currentSearchwithOutTemp != null && currentSearchwithOutTemp != '' && currentSearchwithOutTemp != undefined
                            && currentSearchwithOutTemp == 'Y') {
                        showSearchBarwithId(currentSearchDomain, currentSearchId, currentSearchRole, regGrdiId, 'Search')
                    } else {
                        showSearchBar(currentSearchDomain, currentSearchId, currentSearchRole, regGrdiId);
                    }

                    if ($("#dxpTabs").is(":visible")) {

                    } else {
                        toggleTabsAndMenus(event);
                    }
                }
            }
            if (tabContent != null && tabContent != '' && tabContent != undefined
                    && tabContent == 'dxpCluster' && event != null) {
                var masterClusterId = $("#masterClusterId").val();
                if (tabContent != null && tabContent != '' && tabContent != undefined) {
                    var currentDomain = $("#currentDomain").val();
                    var roleId = localStorage.getItem("OldRole");
//                    getcluster(masterClusterId, roleId, currentDomain, 'N');
                }

            }

        } catch (ey) {
        }
    } catch (ef) {
    }
}
async  function asyncgetDefaultCreateFormWithCardResults(formType) {
    let mypromise = new Promise(resolve => {
        getDefaultCreateFormWithCardResults(formType)
    });
    await mypromise;
}
function getDefaultCreateFormWithCardResults(formType) {
    $('#selectDasbordHomeCard').hide();
    var csrfToken = $('meta[name="_csrf"]').attr('content');
    if (!(csrfToken != null && csrfToken != undefined && csrfToken != '' && csrfToken != 'undefined')) {
        csrfToken = $('meta[name="csrf-token"]').attr('content');
    }
    $.ajax({
        datatype: "html",
        type: "POST",
        url: 'getDefaultCreateFormWithCardResults',
        async: false,
        data: {
            'formType': formType,
        },
        headers: {
            'X-XSRF-TOKEN': csrfToken
        },
        traditional: true,
        cache: false,
        success: function (response) {

            $("#dxpMenus").html(response);
            $("#dxpTabs").show();
            toggleTabsAndMenus();
            var domainBasedcountflag = "Y"
            try {
                domainBasedcountflag = $("#domainBasedcountflag").val();
            } catch (e) {
                domainBasedcountflag = "Y"
            }
            try {
                if (domainBasedcountflag != null && domainBasedcountflag != ''
                        && domainBasedcountflag != 'undefined' && domainBasedcountflag != undefined
                        && domainBasedcountflag == 'N') {
                } else {
                    $("#dxpMenus").show();
                }

            } catch (e) {
                $("#dxpMenus").show();
            }

            $(".searchFirstResultsList").click(function (event) {
                var gridId = $(event.currentTarget).attr("data-grid");
                var id = $(event.currentTarget).attr("id");
                var typedvalue = $(event.currentTarget).attr("data-typedvalue");
                //typedvalue = typedvalue!=null?typedvalue:"";
                var domain = $(event.currentTarget).attr("data-domain");
                var role = $(event.currentTarget).attr("data-role");

            });
        }
    });
}
//function getDomaincomponent(domain, role, componentType, searchId, subscriptionflag, title, nogridFlag) {
//
//    $("#VisualizePageBody").hide();
//    $("#defaultShowCards").hide();
//    $("#searchResultsCountId").hide();
//    $("#defaultShowCards").html("");
//    $("#basketNameValId").remove();
//    $("#sidebar").attr("data-role", role);
//    $("#rolehid").val(role);
//    $("#sidebarsearch").val('');
//    $("#sidebarsearch").hide();
//    insertUserClickedNavigations(title);
//    if (event != undefined && event.target.tagName.toLowerCase() != 'li') {
//        $('.outerWidthcol').removeClass("highlightCard");
//    }
//    var defaultFioriEnableFlag = localStorage.getItem("defaultFioriEnableFlag");
//    if (defaultFioriEnableFlag != null && defaultFioriEnableFlag != ''
//            && defaultFioriEnableFlag != undefined && defaultFioriEnableFlag == 'N') {
//        if (event != undefined && event.target.tagName.toLowerCase() != 'li') {
//            $(event.target.closest('.outerWidthcol')).addClass("highlightCard");
//        }
//    }
//    $(".dhDataParentView").remove();
//    let checkbox = $("#cb-switch");
//    var fioriThemeCheck = checkbox.is(":checked");
//    if (fioriThemeCheck) {
//        //NKR TILES
//        $("#filterRowButton").hide();
//        try {
//            var id = $(event.currentTarget).attr("id");
//            var backId = $("#firorHomeClick").val() != null ? $("#firorHomeClick").val() : id;
//            if (id != undefined && id.includes("home") || backId != undefined && backId.includes("Home")) {
//                $("#filterRowButton").show();
//                $("#showdomainBasedCards").hide();
//                $(".pilogFioriBackBtnDiv").hide();
//                var homeText = $("#headerLogTextId").attr("data-orignial");
//                firorMenuPopoverText(homeText);
//            } else if (id != undefined && 'dxpHomeTab' == id || id != undefined && backId.includes("Home")) {//28-03-2025
//                $("#filterRowButton").show();
//                $("#dxpHomeContent").show();
//                $("#showdomainBasedCards").hide();
//                $("#dxp2FioriTabsWithGridContent").hide();
//                $(".pilogFioriBackBtnDiv").hide();
//            } else {
//                $("#showdomainBasedCards").show();
//                $(".pilogFioriBackBtnDiv").show();
//                firorMenuPopoverText(title);
//            }
//        } catch (exception) {
//            console.log(exception)
//        }
//
//        $("#showdomainBasedCards").html('');
//        $(".outerWidthcol").removeClass("menuTabActive");
//        if (defaultFioriEnableFlag != null && defaultFioriEnableFlag != ''
//                && defaultFioriEnableFlag != undefined && defaultFioriEnableFlag == 'N') {
//            if (event != undefined && event.target.tagName.toLowerCase() != 'li') {
//                $(event.target.closest('.outerWidthcol')).addClass("highlightCard");
//            }
//        }
//        if (event != undefined) {
//            $(event.target.closest('.outerWidthcol')).addClass("highlightCard");
//        }
////        $(event.currentTarget).addClass("menuTabActive");
//        //NKR TILES 
//    }
//    clearTextSearch();
//    try {
//        $(event.target.closest('.outerWidthcol')).addClass("highlightCard");
//    } catch (e) {
//
//    }
//
//    showLoader();
////    $("#defaultShowCardsId").hide();
//    $("#currentDomain").val(domain);
//    if (subscriptionflag != null && subscriptionflag == 'Y') {
//        if (componentType == "ISPIR") {
//            clusterForm();
//        } else {
//            var menuId = "";
//            $.ajax({
//                url: 'getDomainMenus',
//                type: "POST",
//                datatype: "html",
//                data: {
//                    domain: domain,
//                    menuId: componentType,
//                    role: role,
//                    searchId: searchId,
//                    fioriThemeFlag: fioriThemeCheck,
//                    title: title,
//                },
//                success: function (response) {
//                    var menustr = response['menustr'];
//                    var menulistarr = response['menuDeatilsList'];
//                    var ssRejectCommentObj = response['ssRejectCommentObj'];
//                    var ssProcessRejectCommentObj = response['ssProcessRejectCommentObj'];
//                    var menulist = menulistarr[0];
//                    stopLoader();
//                    var AilensEnrichTypes = response['AilensEnrichTypes'];
//                    localStorage.removeItem("AilensEnrichTypes");
//                    localStorage.setItem("AilensEnrichTypes", AilensEnrichTypes);
//                    $("#hintImageID").attr('onclick', 'productPageGuideIntro()');
//                    $("#dxpMenus").hide();
//                    if (!fioriThemeCheck) { //27-03-2025
////                        toggleTabsAndMenus(event);
//                        $("#dxpTabs").hide();
//                    }
//                    $("#dxpDomainMenus").show();
//                    $("#showdomainBasedCards").addClass("showGridHeight");
//                    if (!fioriThemeCheck) {
//                        //NKR TILES
//                        $("#dxpDomainMenus").html(menustr);
//                        //NKR TILES
//                    } else {
//                        $("#dxpDomainMenus").html("");
//                    }
//                    try {
//                        if (ssRejectCommentObj != null) {
//                            if (typeof ssRejectCommentObj === "object") {
//                                $("#rejectData").val(JSON.stringify(ssRejectCommentObj));
//                                $("#rejectReasonsObj").val(JSON.stringify(ssRejectCommentObj));
//                            } else if (typeof ssRejectCommentObj === "string") {
//                                $("#rejectData").val(ssRejectCommentObj);
//                                $("#rejectReasonsObj").val(ssRejectCommentObj);
//                            }
//                        }
//                    } catch (e) {
//                    }
//                    try {
//                        if (ssProcessRejectCommentObj != null) {
//                            if (typeof ssProcessRejectCommentObj === "object") {
//                                $("#processWiserejectReasonsObj").val(JSON.stringify(ssProcessRejectCommentObj));
//                            } else if (typeof ssProcessRejectCommentObj === "string") {
//                                $("#processWiserejectReasonsObj").val(ssProcessRejectCommentObj);
//                            }
//                        }
//                    } catch (e) {
//                    }
//
//
//                    var domainBasedchartsflag = 'N';
//                    try {
//                        domainBasedchartsflag = $("#domainBasedchartsflag").val();
//                    } catch (et) {
//                        domainBasedchartsflag = 'N';
//                    }
////                    domainBasedchartsflag = 'Y';
//                    if (domainBasedchartsflag != null && domainBasedchartsflag != ''
//                            && domainBasedchartsflag != undefined && domainBasedchartsflag != 'undefined' && domainBasedchartsflag == 'Y') {
//                        $("#showdomainBasedCards").hide();
//                        var defaultFioriEnableFlag = localStorage.getItem("defaultFioriEnableFlag");
//                        if (!(defaultFioriEnableFlag != null && defaultFioriEnableFlag != ''
//                                && defaultFioriEnableFlag != undefined && defaultFioriEnableFlag == "Y")) {
//                            getHomePageChartDiv();
//
//                        }
////                        $("#mainintelliSenseInnerSelectBoxId").html(htmlData);
//
//                        $("#mainintelliSenseSelectBoxId").show();
//                        $("#isMainPageDropdownBoxes").hide();
//                        $("#pilogHomePageCreateCard").hide();
//                        $("#dxpAnalyticsContent").remove();
//                        $('#intellisenseHomeSelectBox option').removeAttr('selected').filter('[value=CHARTS]').attr('selected', true)
////                        getVisualizationchart();
//                        getVisualizationchart('', '', '', domain, role);
//                    } else if (nogridFlag != null && nogridFlag != ''
//                            && nogridFlag != undefined && nogridFlag != 'undefined' && nogridFlag == 'Y') {
//
//                    } else {
//                        if (fioriThemeCheck) {
//                            //NKR TILES
//                            $("#showdomainBasedCards").html(menustr);
//                            localStorage.removeItem("firorDomainBasketTitle");
//
//                            localStorage.setItem("firorDomainBasketTitle", title);
//                            var backClass = $(event.currentTarget).attr("class");
//                            if (!(backClass != null && backClass != undefined) || !backClass.includes("Back")) {
//                                var firorDomainObj = {};
//                                firorDomainObj[title] = "getDomaincomponent(" + domain + ", " + role + ", " + componentType + ", " + searchId + ", " + subscriptionflag + ", " + title + ", " + nogridFlag + ")";
//                                backDomainCumArray.push(firorDomainObj);
//                            }
//                            let functionString = $('#homeTilescomponent').attr('onclick');
//                            if (functionString != null && functionString != "" && functionString != undefined) {
//                                localStorage.removeItem("homeIdComponent", functionString);
//                                localStorage.setItem("homeIdComponent", functionString);
//                            }
////                            const onclick = $('#homeTilescomponent').attr('onclick');//28-03-2028
////                            $('#dxpHomeTab').attr('onclick', onclick);
//                            if (!$(".outerWidthcol").hasClass("highlightCard")) {
//                                $(".outerWidthcol").eq(0).addClass("highlightCard");
//                            }
//                            $('#dxpMain').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 30}]});
////                        toggleTabsAndMenus(event);
//                            //NKR TILES
//                        } else {
//                            try {
//                                domainBasedFormView(domain, menulist[1], menulist[0], role, menulist[2]);
//                                $('#dxpMain').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 100}]});
//                            } catch (e) {
//
//                            }
//                        }
//                    }
////                    $('#dxpMain').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 100}]});
//                    $('.level3Domaindropdown').hover(function () {
//                        $(this).find('.level3Domainsubmenu').stop().slideToggle(1000);
//                    });
//
//                    setTimeout(function () {
//                        setIntroFn(domain, role);
//                    }, 500);
//                    console.log("The result is:::" + response);
//
//                }, error: function (e) {
//                    console.log("The Error Message is:::" + e.message);
//                    stopLoader();
//                    sessionTimeout(e);
//                }
//            });
//        }
//    } else {
//        var divid = "<div id='tyestds'></div><span id='test'></span>";
//        var modalObj = {
//            title: 'Message',
//            body: divid
//        };
//        var buttonArray = [
//            {
//                text: 'Close',
//                click: function () {
//
//                },
//                isCloseButton: true
//            }
//        ];
//        modalObj['buttons'] = buttonArray;
//        createModal("dataDxpSplitterValue", modalObj);
//        $("#dataDxpSplitterValue").addClass("subscriptionMesgPop");
//        $("#dataDxpSplitterValue .modal-dialog").addClass("modal-md");
//        $("#tyestds").html("<img src='images/subscription.png' style=width:50px; id ='subcriptionid' class='subcriptionclass themeModeDark'/>");
//        $("#test").html("<h6>Subscription is not Available for " + title + "</h6>");
//        $("#Loader").css("display", "none");
//        $("body").css({"pointer-events": "auto"});
//
//    }
//
//}
function getDomaincomponent(domain, role, componentType, searchId, subscriptionflag, title, nogridFlag, mainMenuFlag) {

    $("#VisualizePageBody").hide();
    $("#defaultShowCards").hide();
    $("#searchResultsCountId").hide();
    $("#defaultShowCards").html("");
    $("#basketNameValId").hide();
    $("#sidebar").attr("data-role", role);
    $("#rolehid").val(role);
    $("#sidebarsearch").val('');
    $("#sidebarsearch").hide();
    insertUserClickedNavigations(title);
    localStorage.removeItem("taskListBasketType");
    localStorage.setItem("taskListBasketType", title);
    $("#searchId").val(searchId);
    try {
        if (event != undefined && event.target.tagName.toLowerCase() != 'li') {
            $('.outerWidthcol').removeClass("highlightCard");
        }
        var defaultFioriEnableFlag = localStorage.getItem("defaultFioriEnableFlag");
        if (defaultFioriEnableFlag != null && defaultFioriEnableFlag != ''
                && defaultFioriEnableFlag != undefined && defaultFioriEnableFlag == 'N') {
            if (event != undefined && event.target.tagName.toLowerCase() != 'li') {
                $(event.target.closest('.outerWidthcol')).addClass("highlightCard");
            }
        }
    } catch (e) {

    }

    try {
        var csrfToken = $('meta[name="_csrf"]').attr('content');
        if (!(csrfToken != null && csrfToken != undefined && csrfToken != '' && csrfToken != 'undefined')) {
            csrfToken = $('meta[name="csrf-token"]').attr('content');
        }
    } catch (e) {

    }

    $(".dhDataParentView").remove();
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");

    if (fioriThemeCheck) {

        //NKR TILES

        $("#filterRowButton").hide();
        try {
            try {
                var id = $(event.currentTarget).attr("id");
                var backClass = $(event.currentTarget).attr("class");
            } catch (e) {
            }
            var backId = $("#firorHomeClick").val() != null ? $("#firorHomeClick").val() : id;
            if (id != undefined && id.includes("home") || backId != undefined && backId.includes("Home")) {
                $("#filterRowButton").show();
//                $("#showdomainBasedCards").hide();
                $(".pilogFioriBackBtnDiv").hide();
                var homeText = $("#headerLogTextId").attr("data-orignial");
                firorMenuPopoverText(homeText);
                mainMenuFlag = "Y";
            } else if (id != undefined && 'dxpHomeTab' == id || id != undefined && backId.includes("Home")) {//28-03-2025
                $("#filterRowButton").show();
                $("#dxpHomeContent").show();
                $("#showdomainBasedCards").hide();
                $("#dxp2FioriTabsWithGridContent").hide();
                $(".pilogFioriBackBtnDiv").hide();
                mainMenuFlag = "Y";
            } else {
                $("#showdomainBasedCards").show();
                $(".pilogFioriBackBtnDiv").show();
                firorMenuPopoverText(title);
            }
        } catch (exception) {
            console.log(exception)
        }
        if (!(mainMenuFlag != null && mainMenuFlag != undefined && mainMenuFlag !== "")) {
            $(".homeTabsContentlistwrapper").hide();
        } else {
            $(".homeTabsContentlistwrapper").show();
        }
        try {
            $(".outerWidthcol").removeClass("menuTabActive");
            if (defaultFioriEnableFlag != null && defaultFioriEnableFlag != ''
                    && defaultFioriEnableFlag != undefined && defaultFioriEnableFlag == 'N') {
                if (event != undefined && event.target.tagName.toLowerCase() != 'li') {
                    $(event.target.closest('.outerWidthcol')).addClass("highlightCard");
                }
            }
            if (event != undefined) {
                $(event.target.closest('.outerWidthcol')).addClass("highlightCard");
            }
        } catch (e) {

        }


//        $(event.currentTarget).addClass("menuTabActive");
        //NKR TILES 
    }
    clearTextSearch();
    try {
        $(event.target.closest('.outerWidthcol')).addClass("highlightCard");
    } catch (e) {

    }

    showLoader();
//    $("#defaultShowCardsId").hide();

    $("#currentDomain").val(domain);
    if (subscriptionflag != null && subscriptionflag == 'Y') {
        if (componentType == "ISPIR") {
            clusterForm();
        } else {
            var menuId = "";
            $.ajax({
                url: 'getDomainMenus',
                type: "POST",
                datatype: "html",
                data: {
                    domain: domain,
                    menuId: componentType,
                    role: role,
                    searchId: searchId,
                    fioriThemeFlag: fioriThemeCheck,
                    title: title,
                    mainMenuFlag: mainMenuFlag
                },
                headers: {
                    'X-XSRF-TOKEN': csrfToken
                },
                success: function (response) {
                    var menustr = response['menustr'];
                    var menulistarr = response['menuDeatilsList'];
                    var ssRejectCommentObj = response['ssRejectCommentObj'];
                    var ssProcessRejectCommentObj = response['ssProcessRejectCommentObj'];
                    var aiAgentEnableFlag = response['aiAgentEnableFlag'];
                    $("#aiAgentEnableFlag").val(aiAgentEnableFlag);
                    var menulist = menulistarr[0];
                    stopLoader();
                    var AilensEnrichTypes = response['AilensEnrichTypes'];
                    localStorage.removeItem("AilensEnrichTypes");
                    localStorage.setItem("AilensEnrichTypes", AilensEnrichTypes);
                    $("#hintImageID").attr('onclick', 'productPageGuideIntro()');
                    $("#dxpMenus").hide();
                    if (!fioriThemeCheck) { //27-03-2025
//                        toggleTabsAndMenus(event);
                        $("#dxpTabs").hide();
                    }
                    $("#dxpDomainMenus").show();
                    $("#showdomainBasedCards").addClass("showGridHeight");
                    if (!fioriThemeCheck) {
                        //NKR TILES
                        $("#dxpDomainMenus").html(menustr);
                        //NKR TILES
                    } else {
                        $("#dxpDomainMenus").html("");
                    }
                    try {
                        if (ssRejectCommentObj != null) {
                            if (typeof ssRejectCommentObj === "object") {
                                $("#rejectData").val(JSON.stringify(ssRejectCommentObj));
                                $("#rejectReasonsObj").val(JSON.stringify(ssRejectCommentObj));
                            } else if (typeof ssRejectCommentObj === "string") {
                                $("#rejectData").val(ssRejectCommentObj);
                                $("#rejectReasonsObj").val(ssRejectCommentObj);
                            }
                        }
                    } catch (e) {
                    }
                    try {
                        if (ssProcessRejectCommentObj != null) {
                            if (typeof ssProcessRejectCommentObj === "object") {
                                $("#processWiserejectReasonsObj").val(JSON.stringify(ssProcessRejectCommentObj));
                            } else if (typeof ssProcessRejectCommentObj === "string") {
                                $("#processWiserejectReasonsObj").val(ssProcessRejectCommentObj);
                            }
                        }
                    } catch (e) {
                    }


                    var domainBasedchartsflag = 'N';
                    try {
                        domainBasedchartsflag = $("#domainBasedchartsflag").val();
                    } catch (et) {
                        domainBasedchartsflag = 'N';
                    }
//                    domainBasedchartsflag = 'Y';
                    if (domainBasedchartsflag != null && domainBasedchartsflag != ''
                            && domainBasedchartsflag != undefined && domainBasedchartsflag != 'undefined' && domainBasedchartsflag == 'Y') {
                        $("#showdomainBasedCards").hide();
                        var defaultFioriEnableFlag = localStorage.getItem("defaultFioriEnableFlag");
                        if (!(defaultFioriEnableFlag != null && defaultFioriEnableFlag != ''
                                && defaultFioriEnableFlag != undefined && defaultFioriEnableFlag == "Y")) {
                            getHomePageChartDiv();

                        }
//                        $("#mainintelliSenseInnerSelectBoxId").html(htmlData);

                        $("#mainintelliSenseSelectBoxId").show();
                        $("#isMainPageDropdownBoxes").hide();
                        $("#pilogHomePageCreateCard").hide();
                        $("#dxpAnalyticsContent").remove();
                        $('#intellisenseHomeSelectBox option').removeAttr('selected').filter('[value=CHARTS]').attr('selected', true)
//                        getVisualizationchart();
                        getVisualizationchart('', '', '', domain, role);
                    } else if (nogridFlag != null && nogridFlag != ''
                            && nogridFlag != undefined && nogridFlag != 'undefined' && nogridFlag == 'Y') {

                    } else {
                        if (fioriThemeCheck) {
                            //NKR TILES
                            $("#showdomainBasedCards").html(menustr);
                            firortabsActiveMenuScroll();
                            if (!(backClass != null && backClass != undefined) || !backClass.includes("Back")) {
                                var firorDomainObj = {};
                                firorDomainObj[title] = "getDomaincomponent(" + domain + ", " + role + ", " + componentType + ", " + searchId + ", " + subscriptionflag + ", " + title + ", " + nogridFlag + ")";
                                backDomainCumArray.push(firorDomainObj);
                            }
                            if (!$(".outerWidthcol").hasClass("highlightCard")) {
                                $(".outerWidthcol").eq(0).addClass("highlightCard");
                            }
                            $('#dxpMain').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 30}]});
//                        toggleTabsAndMenus(event);
                            //NKR TILES
                        } else {
                            try {
                                domainBasedFormView(domain, menulist[1], menulist[0], role, menulist[2]);
                                $('#dxpMain').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 100}]});
                            } catch (e) {

                            }
                        }
                    }
//                    $('#dxpMain').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 100}]});
                    $('.level3Domaindropdown').hover(function () {
                        $(this).find('.level3Domainsubmenu').stop().slideToggle(1000);
                    });
                    $("#dxpTaskListDivId").remove();
                    $("#showdomainBasedCards").append("<div id='dxpTaskListDivId' class='dxpTaskListDivClass'></div>");
                    $("#dxpTaskListDivId").append("<div class='dxpTaskListIcons' id='Task' title='Task List'><img src='images/iDXPUI5TaskList.svg'></div>");
                    $("#dxpTaskListDivId").append(response['taslListdata']);
                    getTaskListOnClickInfo();

                    setTimeout(function () {
                        setIntroFn(domain, role);
                    }, 500);
                    console.log("The result is:::" + response);

                }, error: function (e) {
                    console.log("The Error Message is:::" + e.message);
                    stopLoader();
                    sessionTimeout(e);
                }
            });
        }
    } else {
        var divid = "<div id='tyestds'></div><span id='test'></span>";
        var modalObj = {
            title: 'Message',
            body: divid
        };
        var buttonArray = [
            {
                text: 'Close',
                click: function () {

                },
                isCloseButton: true
            }
        ];
        modalObj['buttons'] = buttonArray;
        createModal("dataDxpSplitterValue", modalObj);
        $("#dataDxpSplitterValue").addClass("subscriptionMesgPop");
        $("#dataDxpSplitterValue .modal-dialog").addClass("modal-md");
        $("#tyestds").html("<img src='images/subscription.png' style=width:50px; id ='subcriptionid' class='subcriptionclass themeModeDark'/>");
        $("#test").html("<h6>Subscription is not Available for " + title + "</h6>");
        $("#Loader").css("display", "none");
        $("body").css({"pointer-events": "auto"});

    }

}
function domainSubMenus(domain, highLevelMenuId, id)
{
    $(".dxpSubdomainMenuItem").css("background-color", "#fff");
    if ($("#" + id + "_submenu").length > 0 && $("#" + id + "_submenu").find(".dxpSubdomainMenuItem").length > 0) {
        $("#" + id + "_submenu").empty();
        $("#" + id).removeClass("active");
    } else {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            url: "getsubDomainComponent",
            cache: false,
            async: false,
            data: {
                highLevelMenuId: highLevelMenuId
            },
            success: function (response) {
                stopLoader();
                if (response != null && response != '') {
                    $("#producttypeId").html(response);
                    $("#producttypeId").jqxPopover('open');

                    $("#producttypeId").jqxPopover({
                        offset: {left: 15, top: 40},
                        arrowOffsetValue: -55,
                        position: 'right',
                        width: 100,
                        height: "auto",
                        showCloseButton: true,
                        selector: $("#" + id)
                    });

                    $("#producttypeId").addClass('dxpFilterPopOverClass');
                    $('#producttypeId').jqxPopover('open');
                    $("#producttypeId").find('.jqx-popover-title').css("display", "none");
                    $(".sidebar-content").scroll(closePopOverSideMenu)
                    $(".sidebar-content").mouseenter(closePopOverSideMenu)
                }

            },
            error: function (e) {
                sessionTimeout(e);
            }// Error function in Ajax
        }); // end ajax call
    }
}
function closePopOverSideMenu() {
    $('#producttypeId').jqxPopover('close');
}
function getsearchFormWithCardsCreation(userval, formType) {
    var searchdomain = $('#SelectedValue').val();
    $('#selectDasbordHomeCard').hide();
    $(".menutabclass").html("");
    $(".menutabClass").css("background-color", "");
    $.ajax({
        datatype: "html",
        type: "POST",
        url: 'getsearchDomainWithResults',
        async: false,
        data: {
            'formType': formType,
            userval: userval,
            searchdomain: searchdomain
        },
        traditional: true,
        cache: false,
        success: function (response) {
//            $('#secondDxpSplitter').show();
//            $('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '100%'}]});
            if (searchdomain == "All") {
                $("#dxpGridContent").html(response);
            } else {

            }

            //$("#dxpGridContent").html(response);
            $(".searchDXPCreate").hide();
            $("#submenutabIdPRODUCT").html("<i style='color:limegreen' class='fa fa-check fa-lg'></i>");
            $("#submenutabIdPRODUCT").css("background-color", "#e1eaf7");
            $(".searchFirstResultsList").click(function (event) {
                var id = $(event.currentTarget).attr("id");
                var typedvalue = $(event.currentTarget).attr("data-typedvalue");
                //typedvalue = typedvalue!=null?typedvalue:"";
                var domain = $(event.currentTarget).attr("data-domain");
                if (domain != null) {
                    $("#menupopoverid").remove();
                    $("body").append("<div id='menupopoverid' style='width:150px;'></div>");
                    $("#menupopoverid").jqxPopover('open');
                    $("#menupopoverid").jqxPopover({
                        offset: {left: 0, top: 0},
                        arrowOffsetValue: 0,
                        position: 'right',
                        //title: "Components",
                        showCloseButton: true,
                        selector: $("#" + id)
                    });
                    var content = '<div class="popoverMenuItemsul"  >'
                            + '<div  onclick=showDxpDomainDataAnalytics(\'\',\'' + domain + '\')  class="popoverMenuItem" ><img src="images/iDXPUI5AnalyticsShowCard.svg"  /><span>Analytics</span></div>'
                            + '<div onclick=getShowDxpSearchResults(\'' + typedvalue + '\',\'' + domain + '\') class="popoverMenuItem" ><img src="images/iDXPUI5AnalyticsShowCard.svg"  /><span>Data</span></div>'
                            + '</div>'
                    $("#menupopoverid").addClass('dxpFilterPopOverClass');
                    $('#menupopoverid').jqxPopover('open');
                    $("#menupopoverid").find('.jqx-popover-title').css("display", "none");

                    $("#menupopoverid").find(".jqx-popover-content").html(content);

                    $(".popoverMenuItem").click(function () {
                        $("#menupopoverid").remove();
                        $("body").append("<div id='menupopoverid' style='width:150px;'></div>");
                    })
                }

            })

        }
    });
}
function getcountData(row, data, domain, role) {

    var classTerm = data['TERM'];
    getClassSearchResults(classTerm, 'PRODUCT', role);
}
function navigateToFormURL(href) {
//    alert("::navigateCocpitView::::"+href);
    if (href != null) {
        console.log("Before:::" + href);
        $("#hrefURL").html(href);
        href = $("#hrefURL").text();
        console.log("After:::" + href);
        var hrefArray = href.split("?");
        $("#urlSubmitForm").attr("action", hrefArray[0]);
        var token = $("input[name='_csrf']").val();

        $("#urlSubmitForm").find('input').remove();
        if (hrefArray[1] != null) {
            if (hrefArray[1].indexOf("items={") > -1) {
                var inputArray = hrefArray[1].split("=");
                var inputType = "<input type='hidden' name='" + inputArray[0] + "' value='" + inputArray[1] + "'/>";
                inputType += "<input type='hidden' name='_csrf' value='" + token + "'/>";
                $("#urlSubmitForm").append(inputType);
            } else {
                var inputParams = hrefArray[1].split("&");
                for (var i = 0; i < inputParams.length; i++) {
                    if (inputParams[i] != null) {
                        var inputArray = inputParams[i].split("=");
                        var inputType = "<input type='hidden' name='" + inputArray[0] + "' value='" + inputArray[1] + "'/>";
                        inputType += "<input type='hidden' name='_csrf' value='" + token + "'/>";
                        $("#urlSubmitForm").append(inputType);
                    }

                }

            }
        }

        $("#urlSubmitForm").submit();
    }

}
function navigateToVendorRegistrationForm(itemsStr) {
    showLoader();
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "formData",
        cache: false,
        data: {
            items: itemsStr,
            fioriThemeFlag: fioriThemeCheck,
        },
        success: function (response) {
            stopLoader();
            var form = response['formStr'];
            $("#dxpFormContent").html(form);
            showSelectedTabContent(null, 'dxpFromTab', 'dxpFormContent', 'View Form', 'N')
            $(".formDxpDuplicates").hide();
            $(".formDxpDuplicates").html("");
            if (form != null && form != undefined && form != '') {
                registerClickFunction();
                stopLoader();
            } else {
                var message = response['message'];
                var modalObj = {
//                    title: 'Message',
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                    body: message
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        click: function () {
                            $('#loginModel').modal('show');
                        },
                        isCloseButton: true
                    }

                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
            }
            $("#registration").inlineFormGuider({
                submitButton: "#Register",
                togglButtonContainer: ".visionFormTitleName"
            });


        }
    });
}
function shrinkExpandCard() {

    $('#filterRowButton').toggleClass('shrinkSection');

    $('#expendInOutDivID i').toggleClass('fa-angle-double-up').toggleClass('fa-angle-double-down');
}
function getclassData(searchtext, domain) {
    $.ajax({
        datatype: "html",
        type: "POST",
        url: 'gettextsearchResults',
        async: false,
        data: {
            Domain: domain,
            searchtext: searchtext
        },
        traditional: true,
        cache: false,
        success: function (response) {

            $("#dxpMenus").html(response);
            $("#dxpTabs").show();
            toggleTabsAndMenus();
            $("#dxpMenus").show();
            $(".searchFirstResultsList").click(function (event) {
                var id = $(event.currentTarget).attr("id");
                var typedvalue = $(event.currentTarget).attr("data-typedvalue");
                //typedvalue = typedvalue!=null?typedvalue:"";
                var domain = $(event.currentTarget).attr("data-domain");
                if (domain != null) {
                    $("#menupopoverid").remove();
                    $("body").append("<div id='menupopoverid' style='width:150px;'></div>");
                    $("#menupopoverid").jqxPopover('open');
                    $("#menupopoverid").jqxPopover({
                        offset: {left: 0, top: 0},
                        arrowOffsetValue: 0,
                        position: 'right',
                        //title: "Components",
                        showCloseButton: true,
                        selector: $("#" + id)
                    });
                    var content = '<div class="popoverMenuItemsul"  >'
                            + '<div  onclick=showDxpDomainDataAnalytics(\'\',\'' + domain + '\') class="popoverMenuItem" ><img src="images/iDXPUI5AnalyticsShowCard.svg"  /><span>Analytics</span></div>'
                            + '<div onclick=getShowDxpSearchResults(\'' + typedvalue + '\',\'' + domain + '\') class="popoverMenuItem" ><img src="images/table-grid.png"  /><span>Data</span></div>'
                            + '</div>'
                    $("#menupopoverid").addClass('dxpFilterPopOverClass');
                    $('#menupopoverid').jqxPopover('open');
                    $("#menupopoverid").find('.jqx-popover-title').css("display", "none");

                    $("#menupopoverid").find(".jqx-popover-content").html(content);

                    $(".popoverMenuItem").click(function () {
                        $("#menupopoverid").remove();
                        $("body").append("<div id='menupopoverid' style='width:150px;'></div>");
                    })
                }

            })
        }
    });
}
function defaulthomepagecard() {
//    showLoader();
    $(".showDefulthomepageCard").draggable();
    $('#defaultShowCards').remove();
//    showLoader();
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'JSON',
        url: "showDefaultMenuCards",
        cache: false,
        data: {
            items: "",
        },
        success: function (response) {
            stopLoader();
//            var resultObj = JSON.parse()
            $("#dxpContent").append("<div class='defaultShowCards' id='defaultShowCards' style='display:none;'><div class='dridHomePageCards' id='defaultShowCardsId' ></div></div>");
            $("#defaultShowCards").show();
            $("#defaultShowCardsId").html(response['result']);

//            $('.card').click(function () {
//                $(this).toggleClass('is-flipped');
//            })
            $(".card").draggable({
                revert: true,
                refreshPositions: true,
                cursor: 'move',
                zindex: false,
                opacity: false,
                start: function (event, ui) {
                    var charts = $(".trendsCols");
                    var zindexMaxVal = 399;
                    $.each(charts, function (i, val) {
                        var zIndex = $(this).css("z-index");
                        if (zIndex != null && zIndex != '' && zIndex == 'auto')
                        {
                            zIndex = 399;
                        }
                        zIndex = parseInt(zIndex);
                        if (zIndex > zindexMaxVal) {
                            zindexMaxVal = zIndex
                        }

                    })
                    var target = event.target;
                    var chartDragId = target['id'];
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggableTable");

                }
            });
            $(".trendscolumn").droppable({
                revert: "invalid",
                refreshPositions: true,
                cursor: 'move',
                accept: '.card',
                drop: function (event, ui) {
                    var $this = $(this);
                    var children = $(this).children();
                    var draggable = $(ui.draggable);
                    if ($(this).children().length > 0) {
                        var move = $(this).children().detach();
                        $(ui.draggable).parent().append(move);
                    }
                    $(this).append($(ui.draggable));
                }
            });
            $('.flipCardImg').click(function () {
                $(this).closest(".card").toggleClass('is-flipped');
            })
            showAnalyticsChartCardsFrontChartView('defaultAwaitingAppCard', 'Awaiting Approval', 'defaultAwaitingAppCardChartShow');
            showAnalyticsChartCardsFrontChartView('defaultContributionCard', 'Contribution', 'defaultContributionCardChartShow');
            showAnalyticsChartCardsFrontChartView('defaultdataQualityLevelCard', 'Data Quality Score', 'defaultDataQualityLevelCardChartShow');
            showAnalyticsChartCardsFrontChartView('defaultTatReportsCard', 'Tat Reports', 'defaultTatReportsCardChartShow');
            showAnalyticsChartCardsFrontChartView('defaultBusinessCard', 'Stats Of Plant', 'defaultStatsOfPlantCardChartShow');
            showAnalyticsChartCardsFrontChartView('defaultMaterialCard', 'Material Type', 'defaultMaterialTypeCardChartShow');
            showAnalyticsChartCardsFrontChartView('defaultQualityCard', 'Data Quality Level', 'defaultQualityLevelDataCardChartShow');
            showAnalyticsChartCardsFrontChartView('defaultCrossDomainCard', 'Cross Domain Function stats', 'defaultCrossDomainCardChartShow');
            showAnalyticsChartCardsFrontChartView('defaultTaxonomyCard', 'Taxonomy Stats', 'defaultTaxonomyCardChartShow');
            showAnalyticsChartCardsFrontChartView('defaultSpendAnalysisCard', 'Spend Analysis', 'defaultSpendAnalysisCardChartShow');
            showAnalyticsChartCardsFrontChartView('defaultSourceAnalysisCard', 'Sourcing Analysis', 'defaultSourceAnalysisCardChartShow');
            showAnalyticsChartCardsFrontChartView('defaultMaturityAnalysisCard', 'Maturity Analysis', 'defaultMaturityAnalysisCardChartShow');
        }
    });
}
function showBusinessPartnerProcess() {

    let result = "";

    result += `
        <div id="businessPartnerProcess" class="businessPartnerProcess" style="opacity:0">
    <form>
            <select
              data-questionName="What you would like to create?"
              data-questionDesc="Please select one of the option form here"
              placeholder="Search options" name="selectCreationMode">
                <option value="vendor">Vendor</option>
                <option value="customer">Customer</option>
            </select>
        <select
              data-questionName="What you would like to do?"
              data-questionDesc="Please select one of the option form here"
              placeholder="Search action">
                <option value="vendor">Registrations</option>
                <option value="customer">Extensions</option>
                <option value="client">Change Requests</option>
                <option value="client">Block</option>
                <option value="client">UnBlock</option>
                <option value="client">ERP Tables</option>
                <option value="client">TAT Reports</option>
                <option value="client">Data Harmonization</option>
            </select>
            <select
              data-questionName="Want to Create new Vendor?"
              data-questionDesc="Please select one of the option form here"
              placeholder="Search action">
                <option value="vendor">Vendor Name</option>
                <option value="customer">Company Code</option>
                <option value="client">General Data</option>
                <option value="client">Purchasing Organization Data</option>
                <option value="client">Taxation Data</option>
                <option value="client">Accounting Data</option>
                <option value="client">Payment Data</option>
                <option value="client">Enclosure Data</option> 
            </select>
    <select
              data-questionName="Want to enter Details?"
              data-questionDesc="Please select one of the option form here"
              placeholder="Search action">
                <option value="vendor">Title</option>
                <option value="customer">Name</option>
                <option value="client">Country</option>
                <option value="client">Mobile Number</option>
                <option value="client">Email Address</option>
                <option value="client">Contact Person</option>
                <option value="client">Vendor As a Customer</option>
                <option value="client">Postal Code</option> 
            </select>
            <button id="creationSubmit">Save</button>
    </form>
        </div>`;

    $("#dxpContent").html(result);

    $(".guidedFormModule").remove()

    let moduleForm = $("#businessPartnerProcess").modalFormGuider({
        submitButton: "#creationSubmit",
        nextButtonClick: function (inputName, inputValue) {
            console.log(inputName, inputValue)
            if (inputValue == "vendor" && inputName == "selectCreationMode") {
                navigateSearchButton('searchToolBarButton_0', 'Y', 'searchButtonObj');
                this.removeGuidedPanel();
                let vendorForm = `
                    <div class="vendorCreationForm makeStaticForm">
                        <input type="text" name="vendorName" placeholer="vendorName" data-label="vendor name">
                    </div>
                `;
                $("#dxpContent").html(vendorForm);
                $(".makeStaticForm").inlineFormGuider({
                    submitButton: "#Submit"
                });

            }

        }
    });

    moduleForm.showmfGuidedFormPanel();
}
function collapseRecords() {
    let containerVal = $("#registration").position();
    $("#extended").toggleClass("collapse_records");
    if ($("#extended").hasClass("collapse_records")) {
        $("#show_records").show();
        $("#sortGerericDxpFormMianDiv").show();
//        $(".collapse_img").attr("src", "images/Down arrow.gif");
        $('#extended i').toggleClass('fa-angle-double-up').toggleClass('fa-angle-double-down');
        $("#accordion").addClass("accordianExtend");
//        $(".extended_Records").css("top", containerVal.top + "px");
    } else {
        $("#show_records").hide();
        $("#sortGerericDxpFormMianDiv").hide();
//        $(".collapse_img").attr("src", "images/Up arrow.gif");
        $('#extended i').toggleClass('fa-angle-double-down').toggleClass('fa-angle-double-up');
        $("#accordion").removeClass("accordianExtend");
        $(".extended_Records").removeAttr('style');
    }

    $(".collapse_img").toggleClass("collapse_img_animation");
    $('#registration').slideToggle();

}
$(function () {
    $("#hintImageID").draggable({
        containment: "body",
        start: function () {
            $(this).addClass('disableClickAction').addClass('startDragging').removeClass('stopedDragging')

        },
        stop: function () {
            $(this).removeClass('startDragging').addClass('stopedDragging');
            setTimeout(function () {
                $("#hintImageID").removeClass('disableClickAction');
            }, 500);

        }
    });
});
function setNavigatorPinnOrUnpinnedDIV(flag) {
    event.stopPropagation();
    if (flag == 'P') {
        $("#dxpNavigatorPinImgID").hide();
        $("#dxpNavigatorUnPinImgID").show();
        $("#hintImageID").draggable('disable');
    } else if (flag == 'U') {
        $("#dxpNavigatorPinImgID").show();
        $("#dxpNavigatorUnPinImgID").hide();
        $("#hintImageID").draggable('enable');
    }
}
function setProfilePinnOrUnpinnedDIV(flag) {
    if (flag == 'A') {
        $("#formDxpDuplicatesPinImgID").hide();
        $("#formDxpDuplicatesUnPinImgID").show();
        $(".formDxpDuplicates").draggable('disable');
    } else if (flag == 'I') {
        $("#formDxpDuplicatesPinImgID").show();
        $("#formDxpDuplicatesUnPinImgID").hide();
        $(".formDxpDuplicates").draggable('enable');
    }
}
function showFormExtendView(flag) {
    if (flag == 'P') {
        $("#formExtendViewId").hide();
        $("#formExitViewId").show();
        $(".formDxpDuplicates").draggable('enable');
        $(".formDxpDuplicates").toggleClass('formDxpDuplicatesFullScreen');

    } else if (flag == 'R') {
        $("#formExtendViewId").show();
        $("#formExitViewId").hide();
        $(".formDxpDuplicates").draggable('enable');
        $(".formDxpDuplicates").toggleClass('formDxpDuplicatesFullScreen');

    }
}
function setToggleCharAccordianbtn() {
    if ($('#charAccordianbtnID').hasClass('disableClickAction')) {
        console.log("stoppp")
        return;
    }
    $('#charAccordionsContainerExDiv').toggle();
}
function AddRecordsWhenNoOnCollapse() {
    var itemsstring = $("#itemsstring").val();
    var dataObj = JSON.parse(itemsstring);
    var recordNo = $("#RECORD_NO").val();
    var className = $("#TERM").val();
    var longDesc = $("#PURCHASE").val();

    var html = "";
    html += `<div class="show_table">
            <table>  
                <thead>
                     <th>Record NO</th>
                     <th><input value="${dataObj['RECORD_NO']}" />
                     <th>Class</th>
                     <th><input value="${dataObj['TERM']}"/>
                     <th>Long Description</th>
                     <th style="width:60%"><input value="${longDesc}" readonly style="width:100%" /></th>
                </thead>
            </table>
            </div>
               `;

    $("#show_records").html(html);
}
function showAnalyticsBasedOnCharDuplicates() {
    var duplicateList = $("#charDupRecordListForAnalytics").val();
    if (duplicateList != null && duplicateList != undefined && duplicateList != "") {
        var duplicateResultsArray = JSON.parse(duplicateList);
        var recordArray = duplicateResultsArray[0]['recordArray'];
        var erpNoArray = duplicateResultsArray[0]['erpNoArray'];
        var stausArray = duplicateResultsArray[0]['stausArray'];
        var pdrArray = duplicateResultsArray[0]['pdrArray'];
        var dataArray = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
        var modalObj = {
            title: labelObject['InfoGraphics'] != null ? labelObject['InfoGraphics'] : 'InfoGraphics',
            body: "<div class=\"duplicateDataCards\" style='disply:flex;'><div id=\"duplicateRecordCard\"></div><div id=\"duplicateErpCard\"></div><div id=\"duplicateStatusCard\"></div><div id=\"duplicatePdrCard\"></div></div>"
        };
        var buttonArray = [
            {
                text: labelObject['Close'] != null ? labelObject['Close'] : 'Close',
                click: function () {
                },
                isCloseButton: true
            }
        ];
        modalObj['buttons'] = buttonArray;
        createModal("dataDxpSplitterValue", modalObj);
        $(".modal-dialog").addClass("modal-xl");
        $("#dataDxpSplitterValue").draggable();
        showDuplicatePieChart(recordArray, dataArray, "duplicateRecordCard", "Duplicate Record No's");
        showDuplicatePieChart(erpNoArray, dataArray, "duplicateErpCard", "Duplicate ERP Record No's");
        showDuplicatePieChart(stausArray, dataArray, "duplicateStatusCard", "Duplicate Status Record No's");
        showDuplicatePieChart(pdrArray, dataArray, "duplicatePdrCard", "Duplicate Pdr Record No's");
    }
}
function showDuplicatePieChart(labelsArray, valuesArray, chartId, message) {
    var markerObj = {};
    var ultimateColors = [
        ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)'],
        ['rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)'],
        ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)'],
        ['rgb(146, 123, 21)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)', 'rgb(175, 51, 21)', 'rgb(35, 36, 21)']
    ];
    markerObj['colors'] = ['#00c60b', '#f99800', '#fc0203'];
    var data = [{
            values: valuesArray[0],
            labels: labelsArray,
            type: 'pie',
            name: 'Starry Night',
            marker: {
                colors: ultimateColors[0]
            },
            domain: {
                row: 0,
                column: 0
            },
            hoverinfo: 'label+percent+name',
            textinfo: 'title'
        },
    ];

    var layout = {
        height: 400,
        width: 500,
        grid: {rows: 2, columns: 2}
    };
    var config = {
        'displaylogo': false
    }
    Plotly.newPlot(chartId, data, layout, config);
}
function floatingMenuSearch() {
    $("#sidebarsearch").slideToggle();
    attachSearchKeyupFunction();
}
function showAnalyticsChartCards(id, titleName) {
    var imgId = event.target.id;
    var labelsArray = $("#" + id).find("img").attr("arr-obj");
    var valuesArray = $("#" + id).find("img").attr("arr-val");
    labelsArray = (labelsArray != null) ? JSON.parse(labelsArray) : [];
    valuesArray = (valuesArray != null) ? JSON.parse(valuesArray) : [];
    var modalObj = {
        title: labelObject[titleName] != null ? labelObject[titleName] : titleName,
        body: "<div class=\"mainDomainjqxPopOverDiv\" id=\"mainDomainjqxPopOverDiv\"><img src=\"images/InfoGraphicSettings.png\" width=\"20\" onclick =\"setMainDomainJqxPopOverImg('" + imgId + "', '" + titleName + "')\" id=\"mainDomainJqxPopOverImg\"></div>"
                + "<div class='showAnalyticsChartCardsData' id='showAnalyticsChartCardsData'></div>"
    };
    var buttonArray = [
        {
            text: labelObject['Close'] != null ? labelObject['Close'] : 'Close',
            click: function () {
                $("#isMultiFlterDxpMainDomainDiv").jqxPopover('close');
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    createModal("dataDxpSplitterValue", modalObj);
    $(".modal-dialog").addClass("modal-lg");
    $(".modal-header").addClass("dxpMainDomainCloseBtn");
    $(".dataDxpSplitterValue").find(".modal-dialog").addClass("homePageGraphPopUp");
    $("#dataDxpSplitterValue").draggable();
    if (titleName == 'Tat Reports') {
        var data = [
            {
                name: "2018",
                type: "waterfall",
                orientation: "v",
                x: labelsArray,
                textposition: "outside",
                y: valuesArray,
                connector: {
                    line: {
                        color: "rgb(63, 63, 63)"
                    }
                },
            }
        ];
        var layout = {
            xaxis: {
                type: "category"
            },
            yaxis: {
                type: "linear"
            },
            showlegend: false,
            margin: {l: 20, r: 20, b: 20, t: 20, pad: 4},
            height: 350,
            width: 700
        };
        Plotly.newPlot('showAnalyticsChartCardsData', data, layout, {displayModeBar: false});
    } else {
        var data = [{
                values: valuesArray,
                labels: labelsArray,
                type: 'pie',
//            marker: markerObj
            }];
        var layout = {
            height: 400,
            width: 600,
            title: titleName,
        };
        Plotly.newPlot('showAnalyticsChartCardsData', data, layout);
    }
    $('.dxpMainDomainCloseBtn .close').click(function () {
        $("#isMultiFlterDxpMainDomainDiv").jqxPopover('close');
    });
}
function showAnalyticsChartCardsFrontChartView(id, titleName, chartId) {
    var labelsArray = $("#" + id).find("img").attr("arr-obj");
    var valuesArray = $("#" + id).find("img").attr("arr-val");
    labelsArray = (labelsArray != null) ? JSON.parse(labelsArray) : [];
    valuesArray = (valuesArray != null) ? JSON.parse(valuesArray) : [];
    if ((labelsArray != null && labelsArray != "" && labelsArray != undefined)
            || valuesArray != null && valuesArray != "" && valuesArray != undefined) {
        var markerObj = {};
        markerObj['colors'] = ['#00c60b', '#fc0203', '#f99800'];
        if (titleName == 'Tat Reports') {


            var data = [
                {
                    name: "2018",
                    type: "waterfall",
                    orientation: "v",
//                measure: ["relative","relative","total", "relative","relative","total"],
                    x: labelsArray,
                    textposition: "outside",
//                text: ["+60","+80","","-40","-20","Total"],
                    y: valuesArray,
                    connector: {
                        line: {
                            color: "rgb(63, 63, 63)"
                        }
                    },
                    marker: markerObj,
                }
            ];
            layout = {
                xaxis: {
                    type: "category"
                },
                yaxis: {
                    type: "linear"
                },
//            autosize: true,
                showlegend: false,
                margin: {
                    l: 20,
                    r: 20,
                    b: 20,
                    t: 20,
                    pad: 4
                },
                height: 160,
                width: 250
            };
            Plotly.newPlot(chartId, data, layout, {displayModeBar: false});
        } else {
            var data = [{
                    values: valuesArray,
                    labels: labelsArray,
                    type: 'pie',
//            textinfo: 'none'  
                    marker: markerObj
                }];
            var layout = {
                margin: {
                    l: 20,
                    r: 20,
                    b: 20,
                    t: 20,
                    pad: 4
                },
                height: 160,
                width: 250,
                dragmode: false

            };
            layout['showlegend'] = false;
            Plotly.newPlot(chartId, data, layout, {displayModeBar: false});
        }
    } else {
        $("#" + chartId).html("No Data To Dispaly");
        $("#" + chartId).css("font-size", "initial");
        $("#" + chartId).css("margin-top", "70px");

    }
}
function stopStartFlipFunctionality() {
    console.log(event.target, 'target');

    if (event.target.getAttribute("src") == "images/pindxp.png") {
        event.target.setAttribute("src", "images/unpincard.png");
        $(".card").draggable('disable');
    } else {
        event.target.setAttribute("src", "images/pindxp.png");
        $(".card").draggable('enable');
    }
}
function setMenuButtonPopoverData(domain, role, componentType, searchId, subscriptionflag, title) {
    event.stopPropagation();
    var id = event.target.id;
    showLoader();
    $('#isMultiFlterDxpMainDiv').remove();
    if (subscriptionflag != null && subscriptionflag == 'Y') {
        try {
            getDomaincomponent(domain, role, componentType, searchId, subscriptionflag, title);
        } catch (e) {
        }
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'getMenuDropDownDomainComponent',
            traditional: true,
            cache: false,
            async: true,
            data: {
                domain: domain,
                menuId: componentType,
                role: role,
                searchId: searchId
            },
            success: function (data, textStatus, jqXHR) {
                stopLoader();
                var menustr = data['menustr'];
                $("#" + id).html("<div id='isMultiFlterDxpMainDiv'>" + menustr + "</div>");
                $("#isMultiFlterDxpMainDiv").html(data['htmlData']);
                $("#isMultiFlterDxpMainDiv").jqxPopover({offset: {left: 0, top: 0},
                    offset: {left: 0, top: 0},
                    position: 'bottom',
                    width: 200,
                    height: 300,
                    autoClose: false,
                    showArrow: true,
                    arrowOffsetValue: 0,
                    showCloseButton: true,
                    selector: $("#" + id),
                    title: domain
                });
                $("#isMultiFlterDxpMainDiv").jqxPopover('open');
                $('.level3DomaindropdownDiv').click(function () {
                    $(this).next(".level3Domainsubmenu").slideToggle("slow");
                });
                $('.mainChildLevelDomaindropdown').click(function () {
                    $("#isMultiFlterDxpMainDiv").jqxPopover('close');
                });
                $('.mainLevelDomaindropdown').click(function () {
                    $("#isMultiFlterDxpMainDiv").jqxPopover('close');
                });
                $("#mainDomainDropdownSerchInput").on("keyup", function () {
                    var value = $(this).val().toLowerCase();
                    $(".main_Domain_dropdown_menu ul li").filter(function () {
                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                    });
                });

            }
        });
    }
}
function hideRecordGridTable() {
    var $formDxpDuplicates = $(".formDxpDuplicates");
    var $formDxpDuplicatesFullScreen = $('.formDxpDuplicatesFullScreen');

    if ($formDxpDuplicates.is(':hidden')) {
        $formDxpDuplicates.show();
        $('#isMultiFlterDxpFormMainDiv').remove();
        $formDxpDuplicatesFullScreen.hide();
    } else {
        $formDxpDuplicates.hide();
        $formDxpDuplicatesFullScreen.hide();
    }
}
//var hideVal = true;
//function hideRecordGridTable() {
//    if (hideVal) {
//        $(".formDxpDuplicates").show();
//        hideVal = false;
//        $('#isMultiFlterDxpFormMainDiv').remove();
//
//    } else {
//        $(".formDxpDuplicates").hide();
//        $('.formDxpDuplicatesFullScreen').hide();
//        hideVal = true;
//
//    }
//
//}
function showtextOninputVal() {
    var inputs = $(".visionFormCharactristicsInput").find("input");
    $(inputs).keyup(function () {
        $(inputs).map(function (i) {
            var inputVal = inputs[i].value;
            console.log(inputVal)
        });
    });
}
function setMainDomainJqxPopOverImg(idData, titleName) {
    $('#isMultiFlterDxpMainDomainDiv').remove();
    var id = event.target.id;
    var arrObj = $('#' + idData).attr('arr-obj');
    var arrVal = $('#' + idData).attr('arr-val');
    var imgHtml = "<div id='dxpMainDomainImgDiv' class='dxpMainDomainImgDiv'>"
            + "<img src=\"images/Pie.svg\" arr-obj='" + arrObj + "' arr-val='" + arrVal + "' onclick=\"setMainDomainchartsImg('pie', '" + titleName + "')\" width=\"20\">"
            + "<img src=\"images/WaterfallChart.svg\" arr-obj='" + arrObj + "' arr-val='" + arrVal + "' onclick=\"setMainDomainchartsImg('waterfall','" + titleName + "')\" width=\"20\">"
            + "<img src=\"images/Bar1.png\" arr-obj='" + arrObj + "' arr-val='" + arrVal + "' onclick=\"setMainDomainchartsImg('column','" + titleName + "')\" width=\"20\">"
            + "<img src=\"images/Bar.svg\" arr-obj='" + arrObj + "' arr-val='" + arrVal + "' onclick=\"setMainDomainchartsImg('bar','" + titleName + "')\" width=\"20\">"
            + "<img src=\"images/Donut.svg\" arr-obj='" + arrObj + "' arr-val='" + arrVal + "' onclick=\"setMainDomainchartsImg('donut','" + titleName + "')\" width=\"20\">"
            + "</div>";
    $("#" + id).html("<div id='isMultiFlterDxpMainDomainDiv'>" + imgHtml + "</div>");
    $("#isMultiFlterDxpMainDomainDiv").jqxPopover({offset: {left: 0, top: 0},
        offset: {left: 0, top: 0},
        position: 'right',
        width: 100,
        height: 100,
        autoClose: false,
        showArrow: true,
        arrowOffsetValue: 0,
        showCloseButton: true,
        selector: $("#" + id),
        title: 'Filter'
    });
    $("#isMultiFlterDxpMainDomainDiv").jqxPopover('open');
}
function setMainDomainchartsImg(type, titleName) {
    var labelsArray = JSON.parse(event.target.getAttribute('arr-obj'));
    var valuesArray = JSON.parse(event.target.getAttribute('arr-val'));
    $('#showAnalyticsChartCardsData').html('');
    var data;
    var layout;
    var config = {
        responsive: true,
        editable: true,
        modeBarButtonsToRemove: ['pan2d', 'select2d', 'lasso2d', 'resetScale2d', 'zoomOut2d', 'zoomIn2d', 'zoom2d', 'autoScale2d'],
        displaylogo: false
    }
    if (type == 'pie') {
        data = [{
                values: valuesArray,
                labels: labelsArray,
                type: 'pie'
            }];
        layout = {
            height: 400,
            width: 600,
            title: titleName,
        };

    } else if (type == 'donut') {
        data = [{
                values: valuesArray,
                labels: labelsArray,
                type: 'pie',
                hole: .4
            }];
        layout = {
            height: 400,
            width: 600,
            title: titleName,
        };
    } else if (type == 'waterfall') {
        data = [
            {
                name: "2018",
                type: "waterfall",
                orientation: "v",
                x: labelsArray,
                textposition: "outside",
                y: valuesArray,
                connector: {
                    line: {
                        color: "rgb(63, 63, 63)"
                    }
                },
            }
        ];
        layout = {
            xaxis: {
                type: "category"
            },
            yaxis: {
                type: "linear"
            },
            showlegend: false,
            margin: {l: 20, r: 20, b: 20, t: 20, pad: 4},
            height: 350,
            width: 700
        };
    } else if (type == 'column') {
        data = [
            {
                x: labelsArray,
                y: valuesArray,
                type: 'bar'
            }
        ];
        var layout = {
            title: titleName
        };
    } else if (type == 'bar') {
        data = [
            {
                x: valuesArray,
                y: labelsArray,
                type: 'bar',
                orientation: "h"
            }
        ];
        var layout = {
            title: titleName
        };
    }
    Plotly.newPlot('showAnalyticsChartCardsData', data, layout, config);
}
function setMainDomainInfographicsImg(divId, chartId) {
    $('#isMultiFlter' + divId).remove();
    var id = event.target.id;
    var arrObj = $('#' + id).attr('arr-obj');
    var arrVal = $('#' + id).attr('arr-val');
    var imgHtml = "<div id='dxpMainDomainImgDiv' class='dxpMainDomainImgDiv'>"
            + "<img src=\"images/Pie.svg\" arr-obj='" + arrObj + "' arr-val='" + arrVal + "' onclick=\"setMainDomainInfographicscharts('pie','" + chartId + "')\" width=\"20\">"
            + "<img src=\"images/WaterfallChart.svg\" arr-obj='" + arrObj + "' arr-val='" + arrVal + "' onclick=\"setMainDomainInfographicscharts('waterfall','" + chartId + "')\" width=\"20\">"
            + "<img src=\"images/Bar1.png\" arr-obj='" + arrObj + "' arr-val='" + arrVal + "' onclick=\"setMainDomainInfographicscharts('column','" + chartId + "')\" width=\"20\">"
            + "<img src=\"images/Bar.svg\" arr-obj='" + arrObj + "' arr-val='" + arrVal + "' onclick=\"setMainDomainInfographicscharts('bar','" + chartId + "')\" width=\"20\">"
            + "<img src=\"images/Donut.svg\" arr-obj='" + arrObj + "' arr-val='" + arrVal + "' onclick=\"setMainDomainInfographicscharts('donut','" + chartId + "')\" width=\"20\">"
            + "</div>";
    $("#" + id).html("<div id='isMultiFlter" + divId + "'>" + imgHtml + "</div>");
    $('#isMultiFlter' + divId).jqxPopover({offset: {left: 0, top: 0},
        offset: {left: 0, top: 0},
        position: 'right',
        width: 100,
        height: 100,
        autoClose: false,
        showArrow: true,
        arrowOffsetValue: 0,
        showCloseButton: true,
        selector: $("#" + id),
        title: 'Filter'
    });
    $('#isMultiFlter' + divId).jqxPopover('open');
}
function setMainDomainInfographicscharts(type, id) {
    var labelsArray = JSON.parse(event.target.getAttribute('arr-obj'));
    var valuesArray = JSON.parse(event.target.getAttribute('arr-val'));
    $('#' + id).html('');
    var data;
    var layout;
    var config = {
        responsive: true,
        editable: true,
        modeBarButtonsToRemove: ['pan2d', 'select2d', 'lasso2d', 'resetScale2d', 'zoomOut2d', 'zoomIn2d', 'zoom2d', 'autoScale2d'],
        displaylogo: false
    }
    if (type == 'pie') {
        data = [{
                values: valuesArray,
                labels: labelsArray,
                type: 'pie'
            }];
        layout = {
            height: 400,
            width: 500,
        };

    } else if (type == 'donut') {
        data = [{
                values: valuesArray,
                labels: labelsArray,
                type: 'pie',
                hole: .4
            }];
        layout = {
            height: 400,
            width: 500,
        };
    } else if (type == 'waterfall') {
        data = [
            {
                name: "2018",
                type: "waterfall",
                orientation: "v",
                x: labelsArray,
                textposition: "outside",
                y: valuesArray,
                connector: {
                    line: {
                        color: "rgb(63, 63, 63)"
                    }
                },
            }
        ];
        layout = {
            xaxis: {
                type: "category"
            },
            yaxis: {
                type: "linear"
            },
            showlegend: false,
            margin: {l: 20, r: 20, b: 20, t: 20, pad: 4},
            height: 350,
            width: 500
        };
    } else if (type == 'column') {
        data = [
            {
                x: labelsArray,
                y: valuesArray,
                type: 'bar'
            }
        ];
        var layout = {
            width: 500,
            height: 350,
        };
    } else if (type == 'bar') {
        data = [
            {
                x: valuesArray,
                y: labelsArray,
                type: 'bar',
                orientation: "h"
            }
        ];
        var layout = {
            width: 500,
            height: 350,
        };
    }
    Plotly.newPlot(id, data, layout, config)
}
function setHomePageCardsJqxPopOverImg() {
    var id = event.target.id;
    $('#isMultiFlterHomePageCards').remove();
    var imgHtml = "<div id='dxHomePageCardsPopOverDiv' class='dxHomePageCardsPopOverDiv'>"
            + "<div id=\"dxpMainRoleDropDownList\"></div>"
            + "<div id=\"dxpMainDomainDropDownList\"></div>"
            + "</div>";
    $("#" + id).html("<div id='isMultiFlterHomePageCards'>" + imgHtml + "</div>");
    $('#isMultiFlterHomePageCards').jqxPopover({offset: {left: 0, top: 0},
        offset: {left: 0, top: 0},
        position: 'bottom',
        width: 200,
        height: 100,
        autoClose: false,
        showArrow: true,
        arrowOffsetValue: 0,
        showCloseButton: true,
        selector: $("#" + id),
        title: 'Filter'
    });
    $('#isMultiFlterHomePageCards').jqxPopover('open');
    var roleLIst = ["MM_MANAGER", "MM_APPROVER", "MM_REQUESTOR", "PM_MANAGER"];
    var domainLIst = ["MATERIAL MASTER", "PRODUCT", "MATERIAL MASTER", "ServiceMaster"];
    $('#dxpMainRoleDropDownList').jqxDropDownList({
        source: roleLIst,
        height: 25,
        width: 170,
        checkboxes: true,
        filterable: true,
        dropDownHeight: 130,
        filterPlaceHolder: "Role Id",
        placeHolder: "Select Role...",
        popupZIndex: 99999
    });
    $('#dxpMainDomainDropDownList').jqxDropDownList({
        source: domainLIst,
        height: 25,
        width: 170,
        checkboxes: true,
        filterable: true,
        dropDownHeight: 130,
        filterPlaceHolder: "Domain Id",
        placeHolder: "Select Domain...",
        popupZIndex: 99999
    });
}
function showDomainBasedMap(locationName, domain) {
    if (domain != null && domain != undefined && domain != '' && domain == 'BP'
            && (locationName == '' || locationName == undefined || locationName == null || locationName == 'null')) {
        locationName = $("#ENTITY_NAME").val();
    } else if (domain != null && domain != undefined && domain != '' && domain == 'CM' || domain == 'VM'
            && (locationName == '' || locationName == undefined || locationName == null || locationName == 'null')) {
        locationName = $("#SUPPLIER_NAME").val();
    }
    var url = "https://maps.google.com/?q=" + locationName + "&t=&z=13&ie=UTF8&iwloc=&output=embed";
    var iframe = "<iframe width='100%' height='500' id='gmap_canvas' src='" + url + "' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe>";
//    window.open(url);
    var modalObj = {
        title: labelObject["" + locationName + ""] != null ? labelObject["" + locationName + ""] : "" + locationName + "",
        body: iframe,
    };
    var buttonArray = [
        {
            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
            click: function () {
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    createModal("dataDxpSplitterValue", modalObj);
    $(".dataDxpSplitterValue").addClass('candidateLocation');
    $("#dataDxpSplitterValue .modal-dialog").addClass("modal-xl");
    stopLoader();
}
function homeChartCardsColorPalette(chartId, selectorId) {
    var defaultColors;
    if (chartId != null && chartId != '' && chartId != undefined) {
        var graphDiv = document.getElementById(chartId);
        var data = graphDiv.data;
        var charttype = data[0].type;
        if (charttype != null && charttype == 'pie' && charttype != undefined) {
            defaultColors = data[0]['marker']['colors'];
        } else if (charttype != null && charttype == 'lines' && charttype != undefined) {
            defaultColors = [];
            defaultColors.push(data[0]['marker']['color']);
        } else if (charttype != null && charttype == 'scatterpolar' && charttype != undefined || charttype == 'scatter') {
            defaultColors = [];
            defaultColors.push(data[0]['marker']['color']);
        } else {
            defaultColors = data[0]['marker']['color'];
        }
    }
    var offset = "";
    var parrantId = "";
    var position = "";
    if (chartId != null && chartId != undefined) {
        var selector = $("#" + chartId).find('.modebar-btn').find($("a[data-title='Chart Types']"));
        var select = $(selector['prevObject'][7]);
        position = "left";
        parrantId = select;
    } else {
        parrantId = $("#imageid");
        position = "";
        offset = {left: 290, top: 60}
    }
    $.ajax({
        type: "POST",
        url: "getcolorpalleteform",
        cache: false,
        dataType: 'json',
        async: false,
        data: {
            coloobjdata: JSON.stringify(data),
            chartid: chartId,
            defaultColors: JSON.stringify(defaultColors)
        },
        success: function (response) {
            if (response != null) {
                var colorpallateobj = response['colorpalateobj'];
                $("#dxpColorPopOver").remove();
                $("#dxpCreatePopOver").html("<div id='dxpColorPopOver'></div>");
                $("#dxpColorPopOver").html(colorpallateobj);
                //$("#dxpColorPopOver").jqxPopover('open');
                $("#dxpColorPopOver").jqxPopover({
                    offset: offset,
                    position: position,
                    width: 262,
                    height: 155,
                    autoClose: true,
                    title: "Color Palette",
                    showCloseButton: true,
                    selector: $("#" + selectorId)

                });

                // $('#dxpColorPopOver').jqxPopover({showArrow: true, arrowOffsetValue: 10});
                $('#dxpColorPopOver').addClass('chartPallettePopup');
                $("#dxpColorPopOver").jqxPopover('open');


            }
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });

}
function setHomeDefaultHomePageCardDXP() {
    showLoader();
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: 'setHomeDefaultHomePageCardDXP',
        traditional: true,
        cache: false,
        async: true,
        data: {},
        success: function (data) {
            stopLoader();
            $("#dxpContent").append("<div class='defaultShowCards' id='defaultShowCards' style='display:none;'><div class='dridHomePageCards row' id='defaultShowCardsId' ></div></div>");
            $('#defaultShowCards').show();
            $('#defaultShowCardsId').html('');
            $.each(data['resultObjList'], function (index, val) {
                $('#defaultShowCardsId').append(val['mainDiv']);
                var cardId = val['cardList']['id'];
                var frontTitle = val['cardList']['frontPageTitle']
                $('#headeTitleFront' + cardId).html(frontTitle);
                $('#headeTitleBack' + cardId).html(val['cardList']['backPageTitle']);
                $('#cardHeaderFront' + cardId).html(val['card_Front_Span']);
                $('#cardHeaderBack' + cardId).html(val['card_Back_Span']);
                showAnalyticsChartCardsFrontChartView('defaultCard' + cardId, frontTitle, 'defaultCharts' + cardId);
                $('#cardBackBody' + cardId).html(val['tableResult']);
            });
            $(".card").draggable({
                revert: true,
                refreshPositions: true,
                cursor: 'move',
                zindex: false,
                opacity: false,
                start: function (event, ui) {
                    var charts = $(".trendsCols");
                    var zindexMaxVal = 399;
                    $.each(charts, function (i, val) {
                        var zIndex = $(this).css("z-index");
                        if (zIndex != null && zIndex != '' && zIndex == 'auto')
                        {
                            zIndex = 399;
                        }
                        zIndex = parseInt(zIndex);
                        if (zIndex > zindexMaxVal) {
                            zindexMaxVal = zIndex
                        }

                    })
                    var target = event.target;
                    var chartDragId = target['id'];
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggableTable");

                }
            });
            $(".trendscolumn").droppable({
                revert: "invalid",
                refreshPositions: true,
                cursor: 'move',
                accept: '.card',
                drop: function (event, ui) {
                    var $this = $(this);
                    var children = $(this).children();
                    var draggable = $(ui.draggable);
                    if ($(this).children().length > 0) {
                        var move = $(this).children().detach();
                        $(ui.draggable).parent().append(move);
                    }
                    $(this).append($(ui.draggable));
                }
            });
            $('.flipCardImg').click(function () {
                $(this).closest(".card").toggleClass('is-flipped');
            });
        }
    });
}
function getFilterGridForm(selectedGridId) {
    try {
        $("#VisualizePageBody").hide();
        $("#defaultShowCards").hide();
        $("#filterexpendInOutID").remove();
        $("#dxp1Firstdiv").html("");
        $("#dxp1Seconddiv").html("");
        $("#importfiltergridcriteria").html("");
        $(".hasSubMenuItemsPopover").hide();
        try {
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridisImport", "");
        } catch (e) {

        }
        try {
            $("#searchResultsParamsData").attr("data-searchflag", "");
            $("#searchResultsParamsData").attr("data-searchType", "");
            $("#searchResultsParamsData").attr("data-searchId", "");
            $("#searchResultsParamsData").attr("data-searchView", "");
            $("#searchResultsParamsData").attr("data-searchrole", "");
            $("#searchResultsParamsData").attr("data-searchresultflag", "");
            $("#searchResultsParamsData").attr("data-searchuserval", "");
            $("#searchResultsParamsData").attr("data-searchText", "");
            $("#searchResultsParamsData").attr("data-searchdomainValue", "");
            $("#searchResultsParamsData").attr("data-searchparamsArray", "");
            $("#searchResultsParamsData").attr("data-searchcattype", "");
            $("#searchResultsParamsData").attr("data-searchName", "");
            $("#searchResultsParamsData").attr("data-searchtemplateFlag", "");
            $("#searchResultsParamsData").attr("data-searchtemplateGrid", "");
        } catch (e) {

        }
        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
        var titleString
        let checkbox = $("#cb-switch");
        var fioriThemeCheck = checkbox.is(":checked");
        if (fioriThemeCheck) {
            const tabContent = document.querySelector("#Lapse\\ Time\\ Reports");
            if (tabContent) {
                const firstItem = tabContent.querySelector(".innerCardDetailsitem");
                titleString = firstItem.querySelector(".titleDescription").textContent.trim();
            }
            if (titleString == null || titleString == '' || titleString == undefined) {
//                titleString = event.currentTarget.outerText;
                titleString = $(event.currentTarget).find(".titleDescription").text();
            }
        } else {
//            var titleStr = event.currentTarget.outerText;
            titleString = $(event.currentTarget).find(".titleDescription").text();
            var str = titleString.split("\n");
            titleString = str[0];
        }
        insertUserClickedNavigations(titleString);

//        var titleStr = event.currentTarget.outerText;
//        var str = titleStr.split("\n");
//        var titleString = str[0];
        showLoader();
        $.ajax({
            type: "post",
            traditional: true,
            // dataType: 'json',
            url: "getFilterGridForm",
            cache: false,
            data: {
                selectedGridId: selectedGridId,
                selectedTabId: "",
                selectedGridIndex: 0,
                titleStr: titleString,

            },
            success: function (response) {
                stopLoader();
                if (response != null && response != '') {
                    var filterFormObj = JSON.parse(response);
                    $("#dxp1Seconddiv").html("");
                    $("#dxp1Firstdiv").html("");
                    $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
                    $('#dxp1MainSplitter').jqxSplitter({resizable: false});
                    $("#dxp1Firstdiv").html(filterFormObj['result']);
                    $('#dxp1MainSplitter').on('collapsed', function (event) {
                        refreshGrid(selectedGridId);

                    });
                    $('#dxp1MainSplitter').on('expanded', function (event) {
                        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
                        $('#dxp1MainSplitter').jqxSplitter({resizable: false});
                        refreshGrid(selectedGridId);
                    });
                    try {
                        $('#dxp1MainSplitter').jqxSplitter('expand');
                    } catch (e) {

                    }
//                     try {
//            $('#dxp1MainSplitter').on('resize', function (event) {
//            refreshGrid(selectedGridId);
//        });
//        } catch (e) {
//
//        }

                    if (titleString != null && titleString != undefined && titleString != '' && titleString != 'undefined') {
                        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', titleString, 'N');
                    } else {
                        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'View Tabs Data', 'N');
                    }
                    if ($("#dxpTabs").is(":visible")) {

                    } else {
                        toggleTabsAndMenus(event);
                    }
//                    showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent')
//                    toggleTabsAndMenus(event);
                    $("#importfiltergridcriteria").append(filterFormObj['importButtonDiv']);
//                $("#dxp1TabsWithGridContent").append("<div class=\"filterexpendInOutClass\" id=\"filterexpendInOutID\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"  onclick=\"ExpandCard('" + selectedGridId + "')\"></i></div>");

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
                    selectedTitle = "";
                    selectedTitleValue = "";
                    var lovColumns = filterFormObj['lovColumns'];
                    if (lovColumns != null && !jQuery.isEmptyObject(lovColumns)) {
                        for (var lovColumnanme in lovColumns) {
                            if (lovColumnanme != null && lovColumnanme != '') {
                                var comboBoxOptions = {
                                    searchMode: 'containsignorecase',
                                    width: 315,
                                    height: 20,
                                    dropDownHeight: 100,
                                    autoComplete: true
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
                                        // get item's label and value.

                                    }
                                });
                            }
                        }
                    }
                }

            },
            error: function (e) {
                sessionTimeout(e);
            }// Error function in Ajax
        }); // end ajax call   
    } catch (er) {
        $("#dxp1MainSplitter").html("");
        $("#dxp1MainSplitter").html("<div id='dxp1Firstdiv'></div> <div id='dxp1Seconddiv'></div>");
    }

}
function ExpandCard(selectedGridId) {
    $('#dxp1Firstdiv').toggleClass('showhideSection');
    $('#expendInOutID i').toggleClass('fa-angle-double-right').toggleClass('fa-angle-double-left');
    if ($('#dxp1Firstdiv').hasClass('showhideSection')) {
        $('#filterexpendInOutID').css("margin", "0%");
        $('#dxp1Firstdiv').find('.visionFilterGrid').remove();
        $('.paramSearchbtn').remove();
        $('#dxp1MainSplitter').find('.jqx-fill-state-normal').css("left", "0");
        $('#dxp1Seconddiv').css("left", "0", "!important");
        $('#dxp1Seconddiv').css("width", "100%", "!important");
        $('#dxp1Seconddiv').find('.jqx-clear').find('.jqx-overflow-hidden').css("width", "100%", "!important");
        $('#dxp1Seconddiv').find('.jqx-clear').find('.jqx-grid-pager-energyblue').css("width", "100%", "!important");
        $('#dxp1Seconddiv').find('.jqx-clear').find('.jqx-grid-pager-energyblue').css("top", "650px", "!important");

    } else {
        getExpanFilterGridForm(selectedGridId);
        $('#dxp1Firstdiv').show();
        $("#dxp1Firstdiv").css("display", "block");
        $('#dxp1Seconddiv').find('.jqx-clear').find('.jqx-overflow-hidden').css("width", "100%", "!important");
        $('#dxp1Seconddiv').find('.jqx-clear').find('.jqx-grid-pager-energyblue').css("width", "100%", "!important");
        $('#dxp1Seconddiv').find('.jqx-clear').find('.jqx-grid-pager-energyblue').css("top", "550px", "!important");
    }

}
function getExpanFilterGridForm(selectedGridId) {
//       $("#dxp1Seconddiv").html(""); 
    $("#filterexpendInOutID").remove();
    try {
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridisImport", "");
    } catch (e) {

    }
    $.ajax({
        type: "post",
        traditional: true,
        // dataType: 'json',
        url: "getFilterGridForm",
        cache: false,
        data: {
            selectedGridId: selectedGridId,
            selectedTabId: "",
            selectedGridIndex: 0

        },
        success: function (response) {
            if (response != null && response != '') {
                var filterFormObj = JSON.parse(response);
                $("#dxp1Firstdiv").html(filterFormObj['result']);
                $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '40%'}]});
                try {
                    $('#dxp1MainSplitter').jqxSplitter('expand');
                } catch (e) {

                }
                showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'View Tabs Data', 'N');
                $("#importsearchcriteria").append(filterFormObj['importButtonDiv']);
                $("#filterexpendInOutID").remove();
                $("#dxp1TabsWithGridContent").append("<div class=\"filterexpendInOutClass\" id=\"filterexpendInOutID\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"  onclick=\"ExpandCard('" + selectedGridId + "')\"></i></div>");
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
                selectedTitle = "";
                selectedTitleValue = "";
                var lovColumns = filterFormObj['lovColumns'];
                if (lovColumns != null && !jQuery.isEmptyObject(lovColumns)) {
                    for (var lovColumnanme in lovColumns) {
                        if (lovColumnanme != null && lovColumnanme != '') {
                            var comboBoxOptions = {
                                searchMode: 'containsignorecase',
                                width: 315,
                                height: 20,
                                dropDownHeight: 100,
                                autoComplete: true
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
                                    // get item's label and value.

                                }
                            });
                        }
                    }
                }

            }

        },
        error: function (e) {
            sessionTimeout(e);
        }// Error function in Ajax
    }); // end ajax call
}
function getFilterGridResults(selectedGridId, selectedGridIndex, selectedTabId, selectedColumn, isImport) {
    showLoader();
    try {
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", selectedGridIndex);
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", selectedGridId);
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", selectedTabId);
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", selectedColumn);
        $("#dxp1TabsWithGrid").attr("data-filterGridisImport", isImport);
    } catch (e) {

    }

    try {
        $("#" + selectedGridId).jqxGrid("destroy");
        $("#" + selectedGridId).remove();
    } catch (e) {
    }
    if (selectedGridId != null && selectedGridId != '') {
        var i = 0;
        var paramArray = [];
        if (isImport != null && isImport != '' && isImport == 'Y') {
            var paramObj = {};
            paramObj.column = selectedColumn;
            paramObj.operator = $("#operator" + selectedGridId + i).val();
            paramObj.symbol = $.trim($("#operator" + selectedGridId + i).find('option:selected').text());
            paramObj.isImport = isImport;
            paramArray.push(paramObj);
        } else {
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
                    //operatorMM_PENDING_REQ_REG_MGR0
                    //  paramObj.datatype = $.trim($(this).attr('data-type'));
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
        }

        if (paramArray != null && paramArray.length > 0) {
            $('#' + selectedGridId).off('cellclick');
            alert("selectedGridId:::" + selectedGridId);
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: "getTabDataByGridId",
                cache: false,
                data: {
                    gridId: selectedGridId,
                    selectedGridCompType: "GRID",

                },
                success: function (response) {
                    $("#" + selectedGridId + "_ACCORDIAN").accordion({active: 1});
//                                    gridfilterConfig(response, selectedGridId, "", paramArray);
                    try {
                        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
                    } catch (e) {

                    }
                    filtergridConfig(response, selectedGridIndex, paramArray, selectedGridId);
                },
                error: function (e) {
                    sessionTimeout(e);
                }// Error function in Ajax
            }); // end ajax call
        } else {
            stopLoader();
            var message = "Please provide at least one value to Search.";
            message = labelObject[message] != null ? labelObject[message] : message;
            var dialogSplitMessage = dialogSplitIconText(message, "Y");
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
                            $(this).empty();
                            $(this).dialog('close');
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
}
function filtergridConfig(gridResultObj, selectedGridIndex, paramArray, selectedGridId) {

    showLoader();
    // ravi start 
    globalTabId = gridResultObj['gridId'];
    // ravi end 
    console.log(":293::gridConfig::");
//    if ($('#' + gridResultObj['gridId'] + '_DIV_GRID').length) {
//        $('#' + gridResultObj['gridId'] + '_DIV_GRID').html("<div id='" + gridResultObj['gridId'] + "'></div>");
//    } else {
//        $("#dxp1Seconddiv").html("<div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div id='submitDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabSubmit'></div></div><div id='exportDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabExport'></div></div></div><div class='filterGridWrapper'><div id='" + gridResultObj['gridId'] + "'></div></div>");
//    }
//    $("#dxp1Seconddiv").html("<div id='" + gridResultObj['gridId'] + "'></div>");
    $("#dxp1Seconddiv").html("<div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div id='submitDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabSubmit'></div></div><div id='exportDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabExport'></div></div></div><div class='filterGridWrapper'><div id='" + gridResultObj['gridId'] + "'></div></div>");
    try {
        // if(true) {
        try {
            $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'cells');
            $('#' + gridResultObj['gridId']).jqxGrid('clearfilters');
        } catch (e) {

        }

        // ravi end
        if (gridResultObj != null) {
            //need to assign all hidden fields like hrefColumn,linkedColumns,stripValue,imageColumn,imageTable,imageTableColumn
            var hrefObj = {}; //hrefObj
            hrefObj = gridResultObj['hrefObj'];
            if (gridResultObj['nvgnFlag'] != null && gridResultObj['nvgnFlag'] == 'Y') {
                $("#hrefColumn").val(hrefObj['hrefColumn'] != null ? hrefObj['hrefColumn'] : "");
//                        $("#hrefColumn").val(hrefObj['hrefColumn']);
                $("#linkedColumns").val(hrefObj['linkedColumns']);
                $("#stripValue").val(hrefObj['stripValue']);
                $("#imageColumn").val(hrefObj['imageColumn']);
                $("#imageTable").val(hrefObj['imageTable']);
                $("#imageTableColumn").val(hrefObj['imageTableColumn']);
                $("#defaultValues").val(gridResultObj['defaultValues']);
            }


            var gridInitParamObj = {}; //gridInitParamObj
            gridInitParamObj = gridResultObj['gridInitParamObj'];
            try {
                if (gridInitParamObj != null && !jQuery.isEmptyObject(gridInitParamObj)) {
                    $("#" + gridResultObj['gridId']).attr("data-gridinitparamobj", JSON.stringify(gridInitParamObj));
                }
                if (gridResultObj != null && !jQuery.isEmptyObject(gridResultObj)) {
                    $("#" + gridResultObj['gridId']).attr("data-gridResultObj", JSON.stringify(gridResultObj));
                }

            } catch (es) {
                console.log(es)
            }
            $("#processClassAndMethod").val(gridInitParamObj['uuu_processClassAndMethod'] != null ? gridInitParamObj['uuu_processClassAndMethod'] : "");
            var batchInd = gridInitParamObj["uuu_BatchInd"];
            $("#massColumnHide").val(gridInitParamObj['massColumnHide']);
            $("#massValidateComment").val(gridInitParamObj['uuu_ValidateComment']);
            $("#batchIndicator").val(batchInd);
            var tableName = gridResultObj['tableName'];
            $("#tableName").val(tableName);
            var barCodeColumnName = gridInitParamObj['uuu_BarCodeColumn'];
            $("#barCodeColumnName").val(barCodeColumnName);

            if (gridInitParamObj['uuu_exportRangeCount'] != null && gridInitParamObj['uuu_exportRangeCount'] != '') {
                $("#ssExportCount").val(gridInitParamObj['uuu_exportRangeCount']);
            }

            var columnInitParamObj = {};
            columnInitParamObj = gridResultObj['columnInitParamsObj'];
            $("#columnInitParams").val(JSON.stringify(columnInitParamObj));

            var dropDownListData = gridResultObj.dropDownListData;
            if (gridResultObj != null && gridResultObj.datafields) {

            }
            var dataFeilds = gridResultObj.datafields;

            var hrefObj = gridResultObj.hrefObj;
            var localData = gridResultObj.data;
            var formId = gridResultObj.formId;
            var panelId = gridResultObj.panelId;
            var gridOperation = gridResultObj.gridOperation;
            var isParent = 'N';
            var nestedGridRelId = gridResultObj.nestedGridRelId;
            var nestedGridId = gridResultObj.nestedGridId;
            $('#formId').val(formId);
            $('#panelId').val(panelId);
            var gridPropObj = {};
            gridPropObj = gridResultObj.gridPropObj;
            var hiddenObj = gridResultObj['hiddenObj'];
            if (hiddenObj != null) {
                $("#hiddenObj").val(JSON.stringify(hiddenObj));
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
                var renderToolbar = gridPropObj.renderToolbar;
                gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');
                //      var defaultTabName = $("#defaultTabName").val();

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
                                        var nestedparamobj = {};
                                        $("#currentSelectGridIndex").val(index);
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
                var imageRender
                        = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                            if (value != "" && value != null)
                            {
                                return  "<img  title='View the attachment Logo' style='cursor:pointer;'"
                                        + " src='" + value + "' class='imageStyle'  id='dtlul_" + row + "'" + "'"
                                        + " onmouseover=imageMouseHover('dtlul_" + row + "') onmouseout=imageMouseOut() >";
                            }
                        };
                var descrenderListWise = function (row, columnfield, value, defaulthtml, columnproperties) {

                    return '<div class="jqx-grid-cell-left-align" style="white-space: pre-line;">' + value + '</div>';
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

                            var cellalignClass = selectedColumnInitParamObj['uuu_Colcellsalign'];

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

                if (gridPropObj.rendergridrows != null && gridPropObj.rendergridrows != "") {

                    gridPropObj.rendergridrows = eval('(' + gridPropObj.rendergridrows + ')');
                }

                var subTabId = "jqxTabs";
                console.log("before dataFeilds" + JSON.stringify(dataFeilds));
                var data = {
                    gridId: gridResultObj['gridId'],
                    colsArray: JSON.stringify(gridResultObj['colsArray']),
                    tableName: gridResultObj['tableName'],
                    paramArray: JSON.stringify(paramArray),
                    gridInitParamObj: JSON.stringify(gridInitParamObj),
                    columnInitParamObj: JSON.stringify(columnInitParamObj),
                    processClassAndMethod: $("#processClassAndMethod").val()

                };
                var source =
                        {
                            type: 'POST',
//                                                async: false,
                            datatype: "json",
                            datafields: dataFeilds,
                            data: data,
                            url: 'cloudGridResults',
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
                                throw new Error(error);
                            }, loadComplete: function (data)
                            {
                                stopLoader();
//                                changeThemeVisualization();
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
                                if (data[0] != null) {
                                    //  alert(data.JSONObjectList[0].TotalRows);
                                    source.totalrecords = data[0].TotalRows;
//                                    $("#excelExport" + gridResultObj['gridId']).attr("disabled", true);
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
//                                    $("#excelExport" + gridResultObj['gridId']).attr("disabled", true);
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
                gridPropObj.rendergridrows = function () {
                    return dataAdapter.records;
                };

                try {

                    if (gridResultObj['buttonObj'] != null && !jQuery.isEmptyObject(gridResultObj['buttonObj'])) {
                        $("#submitDropdown" + gridResultObj['gridId']).html(gridResultObj['buttonObj']);
                    } else if (gridResultObj['buttonObj'] == null || jQuery.isEmptyObject(gridResultObj['buttonObj'])) {
                        $("#submitDropdown" + gridResultObj['gridId']).hide();
                    }

                    if (gridResultObj['gridOperation'] != null && !jQuery.isEmptyObject(gridResultObj['gridOperation'])) {
                        $("#exportDropdown" + gridResultObj['gridId']).html(gridResultObj['gridOperation']);
                    } else if (gridResultObj['gridOperation'] == null || jQuery.isEmptyObject(gridResultObj['gridOperation'])) {
                        $("#exportDropdown" + gridResultObj['gridId']).hide();
                    }


                } catch (e) {

                }
                gridPropObj.rowdetails = false;

                alert("Before Grid");
                //subTabId

                if (editable)
                {
                    $('#gridRefreshButton').hide();
//                                        $('div#submitDropdown > img').remove();
                }


                $("#currentGridpageNum").val(0);

                $('#' + gridResultObj['gridId']).jqxGrid(gridPropObj);
                $("#" + gridResultObj['gridId']).on("cellclick", function (event)
                {
                    var args = event.args;
                    var rowBoundIndex = args.rowindex;
                    $("#currentRowIndex").val(rowBoundIndex);
                    $("#currentGridId").val(gridResultObj['gridId']);
                    var columnindex = args.columnindex;
                    var dataField = args.datafield;
                    sessionStorage.setItem('dataField', dataField);
                    sessionStorage.setItem('rowBoundIndex', rowBoundIndex);
                    var isEditable = $("#" + gridResultObj['gridId']).jqxGrid('getcolumnproperty', event.args.column.datafield, 'editable');
                    if (!editable || !isEditable) {
                        var hiddenGridIdValue = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', event.args.rowindex, gridResultObj['gridId'] + "_HIDDEN");
                        if (hiddenGridIdValue != 'INSERT') {
                            navigateToForm(event.args.column.datafield, $('#' + gridResultObj['gridId']).jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId'], event.args.rowindex);
                        }
                    }

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
                $('#' + gridResultObj['gridId']).on('rowunselect', function (event) {
//                                    showSelectedRows(gridResultObj['gridId'],null,gridInitParamObj['uuu_GridNtfnFlag']);
                });
                $('#' + gridResultObj['gridId']).on('rowselect', function (event) {
                    showClassBasedButtons(gridResultObj, event.args.rowindex, gridInitParamObj);

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


                //  
                alert("604 Grid");
                try {
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
                } catch (e) {

                }
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

                alert("683 Grid");
            }// end if(gridPropObj != null)

        }
        //  }

    } catch (e) {
        stopLoader();
    }


}// end of function gridConfig(-)
function setCrossIconsTabs(event, tabsId, id) {
    event.stopPropagation();
    event.preventDefault();

    var $targetElement = $('#' + id);
    var $tabsElement = $('#' + tabsId);

    $targetElement.hide();
    $tabsElement.hide();
    var prevElementId = $tabsElement.prevAll().filter(':visible:first').attr('id');
    $('#' + prevElementId).click();
    if (prevElementId == undefined) {
        var nextElementId = $tabsElement.nextAll().filter(':visible:first').attr('id');
        $('#' + nextElementId).click();
        console.log(nextElementId);
    }

    if (id != null && id != '' && id != undefined && id != 'undefined' && id == 'dxpFormContent') {
        $('#dxpFormContent').html('');
    }

}
function srsFormGrid() {
    var roleId = $("#rolehid").val();
    if (roleId == null || roleId == undefined || roleId == "") {
        roleId = localStorage['OldRole'];
    }
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getCloudGrid',
        data: {
            'gridId': 'GEN_SRS_REQ_HISTORY',
            roleId: roleId,
        },
        traditional: true,
        cache: false,
        success: function (response) {
//                stopLoader();
            stopLoader();
            if (response != null) {
                $("#defaultShowCards").hide();
                $("#dxpGridContent").html("<div id='searchGrid'></div>");
                showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', 'View Data', 'N');
                gridConfig(response, 0, [], 'searchGrid');
                $(".searchDXPCreate").show();
                $("#searchGrid").show();
                $("#searchGrid").css("visibility", "visible");

            }
        }
    });
}
function navigateSrsForm(gridid) {
    var itemString = "{\"buttonValue\":\"SrsRegister\",\"baskettype\":\"New_Registrations\",\"gridId\":\"" + gridid + "\"}";
    srsRegistrationForm(itemString);
}
function srsRegistrationForm(itemString) {
    showLoader();
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "srsformData",
        cache: false,
        data: {
            items: itemString,
            roleid: 'MM_MANAGER',
            orgnId: 'C1F5CFB03F2E444DAE78ECCEAD80D27D',
            ssUsername: "system"
        },
        success: function (response) {
            stopLoader();
            var form = response['formStr'];
            $("#dialog1").html(form);
            $("#dialog1").dialog({resizable: false,
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                modal: true,
                height: 400,
                width: 1000,
                fluid: true,
                buttons: [
                    {
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            srsFormGrid();
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
                    registerClickFunction();
                }
                ,
                beforeClose: function (event, ui)
                {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
            $("#SRS_Register").click(function () {
                labelObject = {};
                try {
                    labelObject = JSON.parse($("#labelObjectHidden").val());
                } catch (e) {

                }
                var errorCount = 0;


                if (errorCount == 0) {

                    //  ////alert("CALL AJAX");
                    var basicIds = [];
                    var basicData = {};
                    $("#mat_creation_form_table :input").each(function () {
                        var textid = $(this).attr("id");
                        var displayAttr = $("#" + textid).attr("display");
                        //  console.log(textid+"::::displayAttr:::"+displayAttr);
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
                        ("column nameL:::" + textid);
                        console.log("column Value:::" + textval);

                        basicIds.push(textid);
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
                                basicIds.push(columnsArray[i]);
                                if (hiddenVal != null) {
                                    hiddenVal = hiddenVal.toUpperCase();
                                }
                                basicData[columnsArray[i]] = hiddenVal;
//                        basicData[columnsArray[i]] = encodeURIComponent(hiddenVal);
                            }
                        }

                    });
                    alert("Basic_data#" + JSON.stringify(basicData));
                    // return false;
                    //  ////alert("before ajax call");
                    var resultArray = registerValidation();
                    alert("resultArray:::" + JSON.stringify(resultArray));
                    if (resultArray != null && Object.keys(resultArray).length == 0) {
                        $(".allErrors").hide();
                        srsRegistration();

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
            });
            $('.visionSRSFileUpload').on('drop', function (e) {
                //e.stopPropagation();
                //e.preventDefault();
                console.log("iam in drop functionality");
                var files = e.originalEvent.dataTransfer.files;
                srsFileNames(files);
                console.log("iam in drop functionality1" + files);
            });
            $("#USER_SUP_DESC").click(function () {
                console.log("iam in clickable ");
                $("#visionSRSFiles").click();
            });
            var fileslist = [];
            $("#visionSRSFiles").on('change', function (event) {
                console.log("iam in files change ");
                fileslist = event.target.files;
                srsFileNames(fileslist);

            });
        }

    });
}
$("#SRS_Register").click(function () {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var errorCount = 0;


    if (errorCount == 0) {

        //  ////alert("CALL AJAX");
        var basicIds = [];
        var basicData = {};
        $("#mat_creation_form_table :input").each(function () {
            var textid = $(this).attr("id");
            var displayAttr = $("#" + textid).attr("display");
            //  console.log(textid+"::::displayAttr:::"+displayAttr);
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
            ("column nameL:::" + textid);
            console.log("column Value:::" + textval);

            basicIds.push(textid);
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
                    basicIds.push(columnsArray[i]);
                    if (hiddenVal != null) {
                        hiddenVal = hiddenVal.toUpperCase();
                    }
                    basicData[columnsArray[i]] = hiddenVal;
//                        basicData[columnsArray[i]] = encodeURIComponent(hiddenVal);
                }

            }


        });


        alert("Basic_data#" + JSON.stringify(basicData));
        // return false;
        //  ////alert("before ajax call");
        var resultArray = registerValidation();
        alert("resultArray:::" + JSON.stringify(resultArray));
        if (resultArray != null && Object.keys(resultArray).length == 0) {
            $(".allErrors").hide();
            srsRegistration();
            //var registerValidateColumn = basicData['registerValidateColumn'];



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
});
function navigateToPdfDataForm(datafield, data, redirectType, hrefGridId, panelId, baskettype) {
    showLoader();
    navigationGridId = "";
    var hrefColumn = $("#hrefColumn").val();
    if (datafield != null && (datafield == hrefColumn || datafield == 'show_detail')) {
        var items = {};
        var linkedColumns = $("#linkedColumns").val();
        if (linkedColumns != null && linkedColumns != '') {
            for (var key in data) {
                if (linkedColumns.lastIndexOf(key) > -1) {
                    var value = data[key];
                    if (value != null && value != '') {
                        //    console.log("key::::" + key + ":::value::::" + value);
                        value = value.replace(/\s/gi, "_");
                        value = value.replace(/[#]/g, "_");
                    }

                    //  console.log("key::::" + key + ":::value::::" + value);
                    items[key] = value;
                }
            }
        }
        items.baskettype = baskettype;
        var fieldInitParamObj = $("#fieldsInitParamObjStr").val();
        var colInitParamObj = "";
        if (fieldInitParamObj != null && fieldInitParamObj != '' && fieldInitParamObj != undefined)
        {
            fieldInitParamObj = JSON.parse(fieldInitParamObj);
            colInitParamObj = fieldInitParamObj;
        }
        items.colInitParamObj = colInitParamObj;
//        items.baskettype = "Search View";
        var stripValueStr = $("#stripValue").val();
        var stripValueObjArray = [];
        if (stripValueStr != null) {
            var stripValObj = stripValueStr.split(";");
            for (var i = 0; i < stripValObj.length; i++)
            {
                var stripValueObj = {};
                if (stripValObj[i] != null && stripValObj[i] != '' && typeof stripValObj[i] != 'undefined') {
                    if (stripValObj[i].indexOf(",") > -1) {
                        var stripVal = stripValObj[i].split(",");
                        stripValueObj.columnName = stripVal[0];
                        stripValueObj.value = stripVal[1];
                        stripValueObjArray.push(stripValueObj);
                    }
                }
            }
        }//

        var hiddenObjStr = $("#hiddenObj").val();
        if (hiddenObjStr != null && hiddenObjStr != '') {
            var hiddenObj = JSON.parse(hiddenObjStr);
            for (var key in hiddenObj) {
                var value = hiddenObj[key];
                // alert(key+":::::"+value);
                if (value != null && value != '' && value != 'null') {
                    if (key != null && key.lastIndexOf("HIDDEN") > -1) {

                        var columnsArray = value.split(",");
                        //  alert("columnsArray:::"+columnsArray);
                        var hiddenIds = key.split("HIDDEN_");
                        var hiddenVal = data[hiddenIds[1]];
                        //alert("hiddenIds[1]:::"+hiddenIds[1]);
                        //  alert("hiddenVal:::"+hiddenVal);
                        for (var i = 0; i < columnsArray.length; i++) {
                            if (columnsArray[i] != 'NAME1') {
                                items[columnsArray[i]] = hiddenVal;
                            }
                        }

                    }
                } else {
//alert("Value is null");
                }
            }
        }
        items.stripValue = stripValueObjArray
        items.imageColumn = $("#imageColumn").val();
        items.imageTable = $("#imageTable").val();
        items.imageTableColumn = $("#imageTableColumn").val();
        items.linkedColumns = linkedColumns;
        items.gridId = hrefGridId;
        items.SOURCE = data['SOURCE'];
//        items.gridId = $("#hrefGridId").val();
        items.panelId = panelId;
//        items.panelId = $("#panelId").val();
        items.tabId = "";
        var itemsstring = JSON.stringify(items);
        $("#items").val(itemsstring);
        var rowIndex = data['boundindex'];
        // var rowData = $('#' + hrefGridId).jqxGrid('getrowdata', rowIndex);

        itemsstring.imageTable = itemsstring['imageTable'];
        itemsstring.imageTableColumn = itemsstring['imageTableColumn'];
        itemsstring.imageColumn = itemsstring['imageColumn'];
        itemsstring.CONCEPT_ID = itemsstring['CONCEPT_ID'];
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: 'genericDataSheet',
            traditional: true,
            cache: false,
            async: true,
            data: {
                'items': itemsstring,
                'gridId': hrefGridId,
                'rowIndex': rowIndex,
            },
            success: function (result) {
                stopLoader();

                var modalObj = {
                    title: "<div id='showHeaderNameAndExport' style='display:flex;margin-left: 12px;'><div id='showHeaderText'>Data Sheet</div></div>",
                    body: result['mainStrDiv']
                };
                var buttonArray = [
                    {
                        text: labelObject['Close'] != null ? labelObject['Close'] : 'Close',
                        click: function () {
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("showExtendPdfTableData", modalObj);
                $(".modal-dialog").addClass("modal-xl");
                $('.modal-dialog').draggable({
                    handle: ".modal-header"
                });

            }
        });


    }

}
function showPdf(id, tabId)
{
    $("#pdfMM").css('display', 'block');
    $("#pdfMM").html("");
    alert("hijkj");
    var baskettype = $("#baskettypehid").val();
    console.log("baskettype::" + baskettype);
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
        pdfContent = " <iframe id='thedialog' class='visionFormTheDialog' src='materialPDF?id=" + id + "&tabId=" + tabId + "&specModelNo=" + specModelNo + "' onload='showDeleteButton()' ></iframe>";
        $("#somediv").dialog({resizable: false,
            modal: true,
            title: '',
            width: 1100,
            height: 500,
            fluid: true,
            close: function () {
                $("#thedialog").attr('src', '');
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
    } else
    {
        pdfContent = " <iframe id='thedialog' class='visionFormTheDialog' src='materialPDF?id=" + id + "&tabId=" + tabId + "&specModelNo=" + specModelNo + "'  ></iframe>";
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
//                $("#thedialog").attr('src', '');
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });
        $("#deleteIcon").html(deleteIcon);
    }
    $("#thedialog").show();
    $("#somediv #expandPdfAttachmentId").attr(
            "onclick",
            "navigateVendorAttachmentNextPage('" + id + "', '', 'pdf')"
            );
    $("#pdfMM").html(pdfContent);
}
function fetchTasks(fetchFlag, direction, recordsfrom, showrows) {
    callStartAjax();
    var taskListBasketType = localStorage.getItem("taskListBasketType");
    if (fetchFlag != null && fetchFlag == 'N') {
        showLoader();
        $.ajax({
            type: "post",
            url: "fetchTasks",
            cache: false,
            data: {
                recordsfrom: recordsfrom,
                direction: direction,
                showrows: showrows,
                taskListBasketType: taskListBasketType
            },
            traditional: true,
            dataType: 'html',
            success: function (response) {
                stopLoader();
                alert("response::::" + response);
                $("#visionTaskActionItemsId").html(response);
                callEndAjax();
                $('.visionTask').show();
                var tasksCount = parseInt($("#tasksCount").val());
//                if (tasksCount > 0 && nextClickCount != null && nextClickCount >= 0) {
                if (nextClickCount != null && nextClickCount >= 0) {
                    var from = (nextClickCount * showrows) + 1;
//                    var to = (nextClickCount * showrows) + +tasksCount;
                    var to = (nextClickCount * showrows) + +showrows;
                    //var to =((nextClickCount+1)*10)>=totalRecordsCount? totalRecordsCount :((nextClickCount+1)*10);
                } else {
                    from = 0;
                    to = showrows;
                }
                $("#recordsCount").html(from + " - " + to);
            },
            error: function (e) {
                sessionTimeout(e);
            }

        });
    }

}
function notifications() {
    if ($('.ui-widget-overlay').length > 0) {
        return;
    }
    var recordsfrom = 0;
    nextClickCount = 0;
    var showrows = 10;
    if ($('.visionTask').css('display') !== 'none')
    {

        $("#Task img").attr('src', 'images/task_List-02.png');
        $('.visionTask').hide();
        $('.visionmenuinner').removeClass("visionMenuAdjust");
    } else
    {
        $("#Task img").attr('src', 'images/arrowRightAnim.gif');
        var fetchFlag = $(".visionTask").attr("data-fetchFlag");//data-fetchFlag
        //                            $('.visionTask').show();
        //                                $('.visionTask').show("slide", {direction: "right"}, 900);
        if (fetchFlag != null && fetchFlag == 'N') {

            $(".visionTask").attr("data-fetchFlag", "Y");

            fetchTasks(fetchFlag, 'next', recordsfrom, showrows);



        } else {
            $('.visionTask').show();
        }
        $('.visionmenuinner').addClass("visionMenuAdjust");

        $('body,html').stop().animate({
            scrollTop: 0
        }, 1000);

    }
    if (!$(".iconMenuNavPrev").length > 0) {
        $("#filterRowButton").prepend(`<div class="iconMenuNavPrev"><i class="fa fa fa-angle-double-left"></i></div>`);

        $(".iconMenuNavPrev").click(function () {
            $('#filterRowButton .col-12').animate({
                scrollLeft: '-=300'
            }, 500, 'swing');
        });
    }
}
function FooterShrink() {
    $('.footer').toggleClass("HideFooter");
    if ($('.footer').hasClass("HideFooter")) {
        $("#expendFooterInOutDivClass i").addClass("fa-angle-double-down");
        $("#expendFooterInOutDivClass i").removeClass("fa-angle-double-up");
        $(".dxpPageWrapper").addClass("withFotterHeight");
    } else {
        $("#expendFooterInOutDivClass i").addClass("fa-angle-double-up");
        $("#expendFooterInOutDivClass i").removeClass("fa-angle-double-down");
        $(".dxpPageWrapper").removeClass("withFotterHeight")
    }
    $('.footer').slideToggle()
}
function updatePassFormBeforeLogin() {

    var result = '<div class="changepassword" id="changepassword">'
            + '<div class="titlepasswordClass row ">'
            + '<div class="col-12" id="loginOtpMsg" style="display:none"></div>'
            + '<div class="col-12"id="otpStatusMsg"></div>'
            + '<div id=\"otp-wrapper\"></div>'

            + '<div class="col-md-4 userHideLabel"><label  data-error="wrong" data-success="right" for="form34">User Name<sup style="color: red">*</sup></label></div>'
            + '<div class="col-md-8 userHideLabel form-group"><div class=\"user-wrapper\"><input autocomplete=\"off\" type=\"text\" name=\"userNameText\" id=\"userNameText\" class="userNameText form-control " title=\"\"\"><button class="userValidClass btn btn-primary" onclick="forgotUserValidate()">Validate</button></div>'
            + "<div id='userNameError'></div>"
            + '</div>'
            + '<div class="col-md-4">'
            + "<label data-error='wrong' data-success='right' for='form34'>New Password<sup style='color: red'>*</sup></label>"
            + '</div>'
            + '<div class="col-md-8 form-group eye_icon">'
            + "<input autocomplete='off' type='password' name='password' id='newPassword' class='newPassword form-control' onblur=\"genericpasswordvalidation(id)\" placeholder='' title='EX:New Password' data-pswdregex=\"(.){8,15}:::[0-9]{1,}:::[a-z]{1,}:::[A-Z]{1,}:::([!,%,&amp;,@,#,$,^,*,?,_,~]{1,}):::(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}:::\" data-pswddesc=\"Password must contain minimum of 8 characters:::Password must contain one number(0-9):::Password must contain one lowercase letter (a-z):::Password must contain one Uppercase letter (A-Z):::Password must contain one Special Character:::Enter Password As Specified:::\"> <i class='fa fa-eye-slash' id='neweyeshowhide' onclick='showNewPassword()' aria-hidden='true'></i>"
            + "<span id=\"error_pwd\" class=\"all_errors\"></span>"
            + "<div id='dis_newPassword' class='all_errors'></div>"
            + '<div class="passwordDecription" style="display:none">'
            + '<div class="gridd"><span id="8char" class="fa fa-times"></span><span class="text-body">min length 8</span><span id="caps" class="fa fa-times"></span>'
            + '<span class="text-body">Uppercase</span><span id="spchar" class="fa fa-times"></span><span class="text-body">Special Character</span><span id="int" class="fa fa-times"></span><span class="text-body">number</span>'
            + '</div></div>'
            + '</div>'

            + '<div class="col-md-4">'
            + "<label data-error='wrong' data-success='right' for='form34'>Confirm Password<sup  style='color: red'>*</sup></label>"
            + '</div>'
            + '<div class="col-md-8 form-group eye_icon">'
            + "<input autocomplete=\"off\" type=\"password\" name=\"password\" id=\"confirmPassword\" class='confirmPassword form-control' onblur=\"return checkPasswordMatchReType()\" placeholder=\"\" title=\"\" data-pswdregex=\"(.){7,15}:::[0-9]{1,}:::[a-z]{1,}:::[A-Z]{1,}:::([!,%,&amp;,@,#,$,^,*,?,_,~]{1,}):::(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}:::\" data-pswddesc=\"Password must contain minimum of 8 characters:::Password must contain one number(0-9):::Password must contain one lowercase letter (a-z):::Password must contain one Uppercase letter (A-Z):::Password must contain one Special Character:::Enter Password As Specified:::\"><i class='fa fa-eye-slash' id='confirmeyeshowhide' onclick='showConfirmPassword()' aria-hidden='true'></i>"
            + "<span id=\"error_password2\" class=\"all_errors\"></span>"
            + "<div id='dis_confirmPassword' class='all_errors'></div>"
            + '</div>'
            + "<div class=\"visionChangePasswordData visionErrorCells col-12\" >"
            + "<span id=\"error_password2\" class=\"all_errors\"></span>"
            + "<div id=\"dis_password2\" class=\"all_errors\"></div></div>"
            + "<div class=\"visionChangePasswordData visionErrorCells col-12\"> <input type=\"text\" style=\"display: none\" value=\"\" id=\"pers_Id\"></div>"
            + "</div>"
            + '</div>';
    var modalObj = {
        title: labelObject['Message'] != null ? labelObject['Message'] : 'Forgot Password',
        body: result
    };
    var buttonArray = [
        {
            text: 'Apply Changes',
            click: function () {
                checkpasswordchange('N')

            },
            isCloseButton: false
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
    $(".modal-backdrop").show();
    $(".modal-dialog").addClass("modal-md");
    $(".dataDxpSplitterValue").addClass("updatepasswordClass");
//    $(".modal-header").append('<img class="logo" src="images/PilogCloudRedBlue.gif">');
    passDescriptionShow();
    $("#oldpassword").prop("readonly", true);
    $("#newPassword").prop("readonly", true);
    $("#confirmPassword").prop("readonly", true);
    try {
        var rsUsername = $('#rsUsername').val();
        if (rsUsername != null && rsUsername != '' && rsUsername != undefined && rsUsername != 'undefined') {
            $("#userNameText").val(rsUsername);
        } else {
            $("#userNameText").val('');
        }
    } catch (e) {
        $("#userNameText").val('');
    }
    $("#userNameText").prop("readonly", false);

}
//function updatePassForm() {
////    closeAllDialogsBoxes();
//    var result = '<div class="changepassword" id="changepassword">'
//            + '<div class="titlepasswordClass row ">'
//            + '<div class="col-12" id="loginOtpMsg" style="display:none"></div>'
//            + '<div class="col-12"id="otpStatusMsg"></div>'
//            + '<div id=\"otp-wrapper\"></div>'
//
//            + '<div class="col-md-4 userHideLabel"><label  data-error="wrong" data-success="right" for="form34">User Name<sup style="color: red">*</sup></label></div>'
//            + '<div class="col-md-8 userHideLabel form-group"><div class=\"user-wrapper\"><input autocomplete=\"off\" type=\"text\" name=\"userNameText\" id=\"userNameText\" class="userNameText form-control " title=\"\"\"><button class="userValidClass btn btn-primary" onclick="forgotUserValidate()">Send OTP</button></div>'
//            + "<div id='userNameError'></div>"
//            + '</div>'
//            + '<div class="col-md-4"><label data-error="wrong" data-success="right" for="form34">Old Password<sup style="color: red">*</sup></label></div>'
////            + '<div class="col-md-8 form-group eye_icon"><input autocomplete=\"off\" type=\"password\" name=\"password\" id=\"oldpassword\" class="oldPassword form-control" onblur=\"genericpasswordvalidation(id)\" placeholder=\"\" title=\"\" data-pswdregex=\"(.){8,15}:::[0-9]{1,}:::[a-z]{1,}:::[A-Z]{1,}:::([!,%,&amp;,@,#,$,^,*,?,_,~]{1,}):::(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}:::\" data-pswddesc=\"Password must contain minimum of 8 characters:::Password must contain one number(0-9):::Password must contain one lowercase letter (a-z):::Password must contain one Uppercase letter (A-Z):::Password must contain one Special Character:::Enter Password As Specified:::\"> <i class="fa fa-eye-slash" id="eyeshowhide" onclick="showPassword()" aria-hidden="true"></i>'
//            + '<div class="col-md-8 form-group eye_icon"><input autocomplete=\"off\" type=\"password\" name=\"password\" id=\"oldpassword\" class="oldPassword form-control" placeholder=\"\" title=\"\"  > <i class="fa fa-eye-slash" id="eyeshowhide" onclick="showPassword()" aria-hidden="true"></i>'
//            + "<span id=\"error_old_password\" class=\"all_errors\"></span>"
//            + "<div id='dis_oldpassword' class='all_errors'></div>"
//            + '</div>'
//            + '<div class="col-md-4">'
//            + "<label data-error='wrong' data-success='right' for='form34'>New Password<sup style='color: red'>*</sup></label>"
//            + '</div>'
//            + '<div class="col-md-8 form-group eye_icon">'
//            + "<input autocomplete='off' type='password' name='password' id='newPassword' class='newPassword form-control' onblur=\"genericpasswordvalidation(id)\" placeholder='' title='EX:New Password' data-pswdregex=\"(.){8,15}:::[0-9]{1,}:::[a-z]{1,}:::[A-Z]{1,}:::([!,%,&amp;,@,#,$,^,*,?,_,~]{1,}):::(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}:::\" data-pswddesc=\"Password must contain minimum of 8 characters:::Password must contain one number(0-9):::Password must contain one lowercase letter (a-z):::Password must contain one Uppercase letter (A-Z):::Password must contain one Special Character:::Enter Password As Specified:::\"> <i class='fa fa-eye-slash' id='neweyeshowhide' onclick='showNewPassword()' aria-hidden='true'></i>"
//            + "<span id=\"error_pwd\" class=\"all_errors\"></span>"
//            + "<div id='dis_newPassword' class='all_errors'></div>"
//            + '<div class="passwordDecription" style="display:none">'
//            + '<div class="gridd"><span id="8char" class="fa fa-times"></span><span class="text-body">min length 8</span><span id="caps" class="fa fa-times"></span>'
//            + '<span class="text-body">Uppercase</span><span id="spchar" class="fa fa-times"></span><span class="text-body">Special Character</span><span id="int" class="fa fa-times"></span><span class="text-body">number</span>'
//            + '</div></div>'
//            + '</div>'
//
//            + '<div class="col-md-4">'
//            + "<label data-error='wrong' data-success='right' for='form34'>Confirm Password<sup  style='color: red'>*</sup></label>"
//            + '</div>'
//            + '<div class="col-md-8 form-group eye_icon">'
//            + "<input autocomplete=\"off\" type=\"password\" name=\"password\" id=\"confirmPassword\" class='confirmPassword form-control' onblur=\"return checkPasswordMatchReType()\" placeholder=\"\" title=\"\" data-pswdregex=\"(.){7,15}:::[0-9]{1,}:::[a-z]{1,}:::[A-Z]{1,}:::([!,%,&amp;,@,#,$,^,*,?,_,~]{1,}):::(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}:::\" data-pswddesc=\"Password must contain minimum of 8 characters:::Password must contain one number(0-9):::Password must contain one lowercase letter (a-z):::Password must contain one Uppercase letter (A-Z):::Password must contain one Special Character:::Enter Password As Specified:::\"><i class='fa fa-eye-slash' id='confirmeyeshowhide' onclick='showConfirmPassword()' aria-hidden='true'></i>"
//            + "<span id=\"error_password2\" class=\"all_errors\"></span>"
//            + "<div id='dis_confirmPassword' class='all_errors'></div>"
//            + '</div>'
//            + "<div class=\"visionChangePasswordData visionErrorCells col-12\" >"
//            + "<span id=\"error_password2\" class=\"all_errors\"></span>"
//            + "<div id=\"dis_password2\" class=\"all_errors\"></div></div>"
//            + "<div class=\"visionChangePasswordData visionErrorCells col-12\"> <input type=\"text\" style=\"display: none\" value=\"\" id=\"pers_Id\"></div>"
//            + "</div>"
//            + '</div>';
//    var modalObj = {
//        title: labelObject['Message'] != null ? labelObject['Message'] : 'Change Password',
//        body: result
//    };
//    var buttonArray = [
//        {
//            text: 'Apply Changes',
//            click: function () {
//                checkpasswordchange('Y')
//                $("#backgroundShadowDiv").hide();
//            },
//            isCloseButton: false
//        },
//        {
//            text: 'Cancel',
//            click: function () {
//                $("#backgroundShadowDiv").hide();
//            },
//            isCloseButton: true
//        }
//    ];
//    modalObj['buttons'] = buttonArray;
//    createModal("dataDxpSplitterValue", modalObj);
//    $(".modal-backdrop").show();
//    $(".modal-dialog").addClass("modal-md");
//    $(".dataDxpSplitterValue").addClass("updatepasswordClass");
////    $(".modal-header").append('<img class="logo" src="images/PilogCloudRedBlue.gif">');
//    passDescriptionShow();
//    $("#oldpassword").prop("readonly", true);
//    $("#newPassword").prop("readonly", true);
//    $("#confirmPassword").prop("readonly", true);
//    var objstrValue = $('#userProfileImgDiv').attr('objstr');
//    var inputBox = $('#userNameText').val(objstrValue);
////    inputBox.val(objstrValue);
//    $("#userNameText").prop("readonly", true);
//
//}

function updatePassForm(mode) {
    console.log("Mode received:", mode);
    if (mode == null || mode == undefined || mode == '') {
        mode = 'F';
    }
    console.log("Mode received:", mode);
    var isForgot = (mode === 'F');
    var isChange = (mode === 'C');
    var result = "";
    if (isForgot) {
        result += '<div class="changepassword" id="changepassword">'
                + '<div class="titlepasswordClass row ">'
                + '<div class="col-12" id="loginOtpMsg" style="display:none"></div>'
                + '<div class="col-12"id="otpStatusMsg"></div>'
                + '<div id=\"otp-wrapper\"></div>'
                + '<div class="col-md-4 userHideLabel"><label  data-error="wrong" data-success="right" for="form34">User Name<sup style="color: red">*</sup></label></div>'
                + '<div class="col-md-8 userHideLabel form-group"><div class=\"user-wrapper\"><input autocomplete=\"off\" type=\"text\" name=\"userNameText\" id=\"userNameText\" class="userNameText form-control " title=\"\"\"><button class="userValidClass btn btn-primary" onclick="forgotUserValidate()">Send OTP</button></div>'
                + "<div id='userNameError'></div>"
                + '</div>'
                //  + '<div class="col-md-4"><label data-error="wrong" data-success="right" for="form34">Old Password<sup style="color: red">*</sup></label></div>'
//            + '<div class="col-md-8 form-group eye_icon"><input autocomplete=\"off\" type=\"password\" name=\"password\" id=\"oldpassword\" class="oldPassword form-control" onblur=\"genericpasswordvalidation(id)\" placeholder=\"\" title=\"\" data-pswdregex=\"(.){8,15}:::[0-9]{1,}:::[a-z]{1,}:::[A-Z]{1,}:::([!,%,&amp;,@,#,$,^,*,?,_,~]{1,}):::(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}:::\" data-pswddesc=\"Password must contain minimum of 8 characters:::Password must contain one number(0-9):::Password must contain one lowercase letter (a-z):::Password must contain one Uppercase letter (A-Z):::Password must contain one Special Character:::Enter Password As Specified:::\"> <i class="fa fa-eye-slash" id="eyeshowhide" onclick="showPassword()" aria-hidden="true"></i>'
                // + '<div class="col-md-8 form-group eye_icon"><input autocomplete=\"off\" type=\"password\" name=\"password\" id=\"oldpassword\" class="oldPassword form-control" placeholder=\"\" title=\"\"  > <i class="fa fa-eye-slash" id="eyeshowhide" onclick="showPassword()" aria-hidden="true"></i>'
                // + "<span id=\"error_old_password\" class=\"all_errors\"></span>"
                //+ "<div id='dis_oldpassword' class='all_errors'></div>"
                //+ '</div>'
                + '<div class="col-md-4">'
                + "<label data-error='wrong' data-success='right' for='form34'>New Password<sup style='color: red'>*</sup></label>"
                + '</div>'
                + '<div class="col-md-8 form-group eye_icon">'
                + "<input autocomplete='off' type='password' name='password' id='newPassword' class='newPassword form-control' onblur=\"genericpasswordvalidation(id)\" placeholder='' title='EX:New Password' data-pswdregex=\"(.){8,15}:::[0-9]{1,}:::[a-z]{1,}:::[A-Z]{1,}:::([!,%,&amp;,@,#,$,^,*,?,_,~]{1,}):::(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}:::\" data-pswddesc=\"Password must contain minimum of 8 characters:::Password must contain one number(0-9):::Password must contain one lowercase letter (a-z):::Password must contain one Uppercase letter (A-Z):::Password must contain one Special Character:::Enter Password As Specified:::\"> <i class='fa fa-eye-slash' id='neweyeshowhide' onclick='showNewPassword()' aria-hidden='true'></i>"
                + "<span id=\"error_pwd\" class=\"all_errors\"></span>"
                + "<div id='dis_newPassword' class='all_errors'></div>"
                + '<div class="passwordDecription" style="display:none">'
                + '<div class="gridd"><span id="8char" class="fa fa-times"></span><span class="text-body">min length 8</span><span id="caps" class="fa fa-times"></span>'
                + '<span class="text-body">Uppercase</span><span id="spchar" class="fa fa-times"></span><span class="text-body">Special Character</span><span id="int" class="fa fa-times"></span><span class="text-body">number</span>'
                + '</div></div>'
                + '</div>'

                + '<div class="col-md-4">'
                + "<label data-error='wrong' data-success='right' for='form34'>Confirm Password<sup  style='color: red'>*</sup></label>"
                + '</div>'
                + '<div class="col-md-8 form-group eye_icon">'
                + "<input autocomplete=\"off\" type=\"password\" name=\"password\" id=\"confirmPassword\" class='confirmPassword form-control' onblur=\"return checkPasswordMatchReType()\" placeholder=\"\" title=\"\" data-pswdregex=\"(.){7,15}:::[0-9]{1,}:::[a-z]{1,}:::[A-Z]{1,}:::([!,%,&amp;,@,#,$,^,*,?,_,~]{1,}):::(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}:::\" data-pswddesc=\"Password must contain minimum of 8 characters:::Password must contain one number(0-9):::Password must contain one lowercase letter (a-z):::Password must contain one Uppercase letter (A-Z):::Password must contain one Special Character:::Enter Password As Specified:::\"><i class='fa fa-eye-slash' id='confirmeyeshowhide' onclick='showConfirmPassword()' aria-hidden='true'></i>"
                + "<span id=\"error_password2\" class=\"all_errors\"></span>"
                + "<div id='dis_confirmPassword' class='all_errors'></div>"
                + '</div>'
                + "<div class=\"visionChangePasswordData visionErrorCells col-12\" >"
                + "<span id=\"error_password2\" class=\"all_errors\"></span>"
                + "<div id=\"dis_password2\" class=\"all_errors\"></div></div>"
                + "<div class=\"visionChangePasswordData visionErrorCells col-12\"> <input type=\"text\" style=\"display: none\" value=\"\" id=\"pers_Id\"></div>"
                + "</div>"
                + '</div>';
    }
    if (isChange) {
        result += '<div class="changepassword" id="changepassword">'
                           + '<div class="titlepasswordClass row ">'
                           + '<div class="col-12" id="loginOtpMsg" style="display:none"></div>'
                           + '<div class="col-12"id="otpStatusMsg"></div>'
                           + '<div id=\"otp-wrapper\"></div>'
                + '<div class="col-md-4 userHideLabel"><label  data-error="wrong" data-success="right" for="form34">User Name<sup style="color: red">*</sup></label></div>'
                           + '<div class="col-md-8 userHideLabel form-group"><div class=\"user-wrapper\"><input autocomplete=\"off\" type=\"text\" name=\"userNameText\" id=\"userNameText\" class="userNameText form-control " title=\"\"\"><button class="userValidClass btn btn-primary" onclick="forgotUserValidate()">Send OTP</button></div>'
                           + "<div id='userNameError'></div>"
                           + '</div>'
                           + '<div class="col-md-4"><label data-error="wrong" data-success="right" for="form34">Old Password<sup style="color: red">*</sup></label></div>'
//            + '<div class="col-md-8 form-group eye_icon"><input autocomplete=\"off\" type=\"password\" name=\"password\" id=\"oldpassword\" class="oldPassword form-control" onblur=\"genericpasswordvalidation(id)\" placeholder=\"\" title=\"\" data-pswdregex=\"(.){8,15}:::[0-9]{1,}:::[a-z]{1,}:::[A-Z]{1,}:::([!,%,&amp;,@,#,$,^,*,?,_,~]{1,}):::(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}:::\" data-pswddesc=\"Password must contain minimum of 8 characters:::Password must contain one number(0-9):::Password must contain one lowercase letter (a-z):::Password must contain one Uppercase letter (A-Z):::Password must contain one Special Character:::Enter Password As Specified:::\"> <i class="fa fa-eye-slash" id="eyeshowhide" onclick="showPassword()" aria-hidden="true"></i>'
                           + '<div class="col-md-8 form-group eye_icon"><input autocomplete=\"off\" type=\"password\" name=\"password\" id=\"oldpassword\" class="oldPassword form-control" placeholder=\"\" title=\"\"  > <i class="fa fa-eye-slash" id="eyeshowhide" onclick="showPassword()" aria-hidden="true"></i>'
                           + "<span id=\"error_old_password\" class=\"all_errors\"></span>"
                           + "<div id='dis_oldpassword' class='all_errors'></div>"
                           + '</div>'
                           + '<div class="col-md-4">'
                           + "<label data-error='wrong' data-success='right' for='form34'>New Password<sup style='color: red'>*</sup></label>"
                           + '</div>'
                           + '<div class="col-md-8 form-group eye_icon">'
                           + "<input autocomplete='off' type='password' name='password' id='newPassword' class='newPassword form-control' onblur=\"genericpasswordvalidation(id)\" placeholder='' title='EX:New Password' data-pswdregex=\"(.){8,15}:::[0-9]{1,}:::[a-z]{1,}:::[A-Z]{1,}:::([!,%,&amp;,@,#,$,^,*,?,_,~]{1,}):::(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}:::\" data-pswddesc=\"Password must contain minimum of 8 characters:::Password must contain one number(0-9):::Password must contain one lowercase letter (a-z):::Password must contain one Uppercase letter (A-Z):::Password must contain one Special Character:::Enter Password As Specified:::\"> <i class='fa fa-eye-slash' id='neweyeshowhide' onclick='showNewPassword()' aria-hidden='true'></i>"
                           + "<span id=\"error_pwd\" class=\"all_errors\"></span>"
                           + "<div id='dis_newPassword' class='all_errors'></div>"
                           + '<div class="passwordDecription" style="display:none">'
                           + '<div class="gridd"><span id="8char" class="fa fa-times"></span><span class="text-body">min length 8</span><span id="caps" class="fa fa-times"></span>'
                           + '<span class="text-body">Uppercase</span><span id="spchar" class="fa fa-times"></span><span class="text-body">Special Character</span><span id="int" class="fa fa-times"></span><span class="text-body">number</span>'
                           + '</div></div>'
                           + '</div>'
                           + '<div class="col-md-4">'
                           + "<label data-error='wrong' data-success='right' for='form34'>Confirm Password<sup  style='color: red'>*</sup></label>"
                           + '</div>'
                           + '<div class="col-md-8 form-group eye_icon">'
                           + "<input autocomplete=\"off\" type=\"password\" name=\"password\" id=\"confirmPassword\" class='confirmPassword form-control' onblur=\"return checkPasswordMatchReType()\" placeholder=\"\" title=\"\" data-pswdregex=\"(.){7,15}:::[0-9]{1,}:::[a-z]{1,}:::[A-Z]{1,}:::([!,%,&amp;,@,#,$,^,*,?,_,~]{1,}):::(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}:::\" data-pswddesc=\"Password must contain minimum of 8 characters:::Password must contain one number(0-9):::Password must contain one lowercase letter (a-z):::Password must contain one Uppercase letter (A-Z):::Password must contain one Special Character:::Enter Password As Specified:::\"><i class='fa fa-eye-slash' id='confirmeyeshowhide' onclick='showConfirmPassword()' aria-hidden='true'></i>"
                           + "<span id=\"error_password2\" class=\"all_errors\"></span>"
                           + "<div id='dis_confirmPassword' class='all_errors'></div>"
                           + '</div>'
                           + "<div class=\"visionChangePasswordData visionErrorCells col-12\" >"
                           + "<span id=\"error_password2\" class=\"all_errors\"></span>"
                           + "<div id=\"dis_password2\" class=\"all_errors\"></div></div>"
                           + "<div class=\"visionChangePasswordData visionErrorCells col-12\"> <input type=\"text\" style=\"display: none\" value=\"\" id=\"pers_Id\"></div>"
                           + "</div>"
                           + '</div>';
    }

    var modalObj = {
        title: labelObject['Message'] != null ? labelObject['Message'] : (mode === 'C' ? 'Change Password' : 'Forgot Password'),
        body: result
    };
    var buttonArray = [
        {
            text: 'Apply Changes',
            click: function () {
                checkpasswordchange('N');
                $("#backgroundShadowDiv").hide();
            },
            isCloseButton: false
        },
        {
            text: 'Cancel',
            click: function () {
                $("#backgroundShadowDiv").hide();
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    createModal("dataDxpSplitterValueNew", modalObj);
    $(".modal-backdrop").show();
    $(".modal-dialog").addClass("modal-md");
    $(".dataDxpSplitterValueNew").addClass("updatepasswordClass");
//    $("#dialog10").dialog("destroy");
//    $(".modal-header").append('<img class="logo" src="images/PilogCloudRedBlue.gif">');
    passDescriptionShow();
//    $("#oldpassword").prop("readonly", true);
//    $("#newPassword").prop("readonly", true);
//    $("#confirmPassword").prop("readonly", true);
    var objstrValue = $('#userProfileImgDiv').attr('objstr');
    var inputBox = $('#userNameText').val(objstrValue);
    // inputBox.val(objstrValue);
//    $("#userNameText").prop("readonly", true);


}
function checkpasswordchange(loginFlag) {
    if (loginFlag == 'N') {
        var newPassword = $("#newPassword").val();
        var Confirm_newPas = $("#confirmPassword").val();
        if (!newPassword) {
            var id = "#dis_newPassword";
            var msg = "Enter New Password";
//        $("#old_password").text("")
            err_msg(id, msg);
            return false;
        } else if (!Confirm_newPas) {
            var id = "#dis_confirmPassword";
            var msg = "Re-Type New Password";
            $("#new_password").text("")
            err_msg(id, msg);
            return false;
        } else if (Confirm_newPas != newPassword) {
            var id = "#dis_password2";
            var msg = "Confirm password and New password are not same";
            err_msg(id, msg);
            return false;
        } else if (!genericpasswordvalidation("newPassword", loginFlag)) {
            return false;
        } else if (newPassword == Confirm_newPas) {
            updateNewPassword(loginFlag);
        }
    } else {
        var oldPassword = $("#oldpassword").val();
        var newPassword = $("#newPassword").val();
        var Confirm_newPas = $("#confirmPassword").val();
        if (!oldPassword) {
            var id = "#dis_oldpassword";
            var msg = "Enter Old Password";
            err_msg(id, msg);
            return false;
        } else if (!newPassword) {
            var id = "#dis_newPassword";
            var msg = "Enter New Password";
            $("#old_password").text("")
            err_msg(id, msg);
            return false;
        } else if (!Confirm_newPas) {
            var id = "#dis_confirmPassword";
            var msg = "Re-Type New Password";
            $("#new_password").text("")
            err_msg(id, msg);
            return false;
        } else if (oldPassword == newPassword) {
            var id = "#dis_password2";
            var msg = "Old password and new password are same";
            err_msg(id, msg);
            return false;
        } else if (Confirm_newPas != newPassword) {
            var id = "#dis_password2";
            var msg = "Confirm password and New password are not same";
            err_msg(id, msg);
            return false;
        } else if (!genericpasswordvalidation("newPassword")) {
            return false;
        } else if (newPassword == Confirm_newPas) {
            updateNewPassword(loginFlag);
        }
    }

}
function err_msg(id, msg) {
    $(id).fadeIn(1000).html(msg);

}
function checkPasswordMatchReType() {

    var pass = $("#newPassword").val();
    var confirmPassword = $("#confirmPassword").val();
    if (pass == confirmPassword) {
        $("#dis_confirmPassword").html("");
    } else
    {
        $("#dis_confirmPassword").show();
        $("#dis_confirmPassword").html(labelObject["Passwords do not match."] != null ? labelObject["Passwords do not match."] : "Passwords do not match.");
//        $("#restpassword").prop('disabled', true);
    }

}
function genericpasswordvalidation(ele, loginFlag) {
    var ele = ele;
    var str = $("#" + ele).val();
    var errorID = "#dis_" + ele;
    var regex;
    var desc;
    var patt;
    var dataRegex = $("#" + ele).attr("data-pswdRegex");
    var dataDesc = $("#" + ele).attr("data-pswdDesc");
    var user_name = $("#ssUsername").val();
    if (loginFlag != null && loginFlag != '' && loginFlag != undefined && loginFlag != 'undefined'
            && loginFlag == 'N') {
        user_name = $("#userNameText").val();
    } else {
        user_name = $("#ssUsername").val();
    }

    if (user_name == null || user_name == '' || user_name == undefined) {
        user_name = $("#userNameText").val();
        $("#ssUsername").val(user_name);
    }
    if (str != null && str != '') {
        if (user_name != null && user_name != '' && user_name.toUpperCase() != str.toUpperCase()) {
            var pswdRegex = dataRegex.split(":::");
            var pswdDesc = dataDesc.split(":::");
            for (var i = 0; i < pswdRegex.length; i++) {
                regex = pswdRegex[i];
                patt = new RegExp(regex);

                if (!patt.test(str)) {
                    var msg = pswdDesc[i];
                    err_msg(errorID, msg);
                    return false;
                } else {
                    $(errorID).hide();
                    $("#dis_newPassword").html("");
                    $("#confirmPassword").prop('disabled', false);
                    //            $("#restpassword").prop('disabled', true);
                }
            }
            return true;
        } else {
            msg = "Password & Username should not match.";
            err_msg(errorID, msg);
            return false;
        }
    } else {
        msg = "Password should not blank.";
        msg = labelObject[msg] != null ? labelObject[msg] : msg;
        err_msg(errorID, msg);
        return false;
    }
}
function updateNewPassword(loginFlag) {
    var secretKey = $('meta[name=keygeneration]').attr("content");
    var newPassword = $("#newPassword").val();
    var ssUsername = $("#ssUsername").val();
    if (ssUsername == null || ssUsername == '' || ssUsername == undefined) {
        ssUsername = $("#userNameText").val();
        $("#ssUsername").val(ssUsername);
    }
    var Confirm_newPas = $("#confirmPassword").val();

    try {
        var old_password = $("#oldpassword").val();
        var encryptedOldPassword = CryptoJS.AES.encrypt(old_password, secretKey);
        $("#oldpassword").val(encryptedOldPassword);
    } catch (ep) {

    }
    var password = $("#newPassword").val();
    var encryptedPassword = CryptoJS.AES.encrypt(password, secretKey);
    $("#newPassword").val(encryptedPassword);

    var confirm_password = $("#confirmPassword").val();
    var encryptedConfirmPassword = CryptoJS.AES.encrypt(confirm_password, secretKey);
    $("#confirmPassword").val(encryptedConfirmPassword);
    showLoader();
    $.ajax({
        type: "POST",
        traditional: true,
        dataType: 'html',
        url: 'changepassword',
        traditional: true,
        cache: false,
        data: {
            old_password: $("#oldpassword").val(),
            password: $("#newPassword").val(),
            confirm_password: Confirm_newPas,
            ssUsername: ssUsername.toUpperCase(),
            loginFlag: loginFlag,
        },
        success: function (response) {

            stopLoader();
            if (response != null) {
                var oldPassValid = JSON.parse(response).oldPassValid;
                var MessageStatus = JSON.parse(response).message;
                var MessageFlag = JSON.parse(response).messageFlag;
            }
            if (oldPassValid == false) {
                $("#oldpassword").val("");
                $("#newPassword").val("");
                $("#confirmPassword").val("");

                var errorID = "#dis_oldpassword";
                msg = labelObject[MessageStatus] != null ? labelObject[MessageStatus] : MessageStatus;
                err_msg(errorID, msg);
                $('#dis_oldpassword').show();
                return false;
            } else {
                var modalObj = {
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                    body: MessageStatus
                };

                var buttonArray = [
                    {
                        text: 'Ok',
                        click: function () {
                            if (MessageFlag == true) {
                                logout()
                            } else {
                                updatePassword()
                            }

                        },
                        isCloseButton: true
                    }
                ];

                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
                $(".modal-dialog").addClass("modal-xs");
            }


        }
    });
}
function passDescriptionShow() {
    $("#newPassword").focus(function () {
        $(".passwordDecription").show(500);
    });
    $("#newPassword").focusout(function () {
        $(".passwordDecription").hide(500);
    });
    var password = document.getElementById("newPassword");
    password.onkeyup = function checkval(password) {
        password = document.getElementById("newPassword");
        var char8 = document.getElementById("8char");
        var uper = document.getElementById("caps");
        var spchar = document.getElementById("spchar");
        var int = document.getElementById("int");

        var ucase = new RegExp("[A-Z]+");

        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var num = new RegExp("[0-9]+");
        if (password.value.length >= 8) {
            char8.classList.remove("fas", "fa-times");
            char8.classList.add("fas", "fa-check-circle");
        } else if (password.value.length < 8) {
            char8.classList.remove("fas", "fa-check-circle");
            char8.classList.add("fas", "fa-times");

            showErrorText(password, `${getFieldNameChange(password)} must be at least 8 characters`);
        }

        //if (password.value == password.value.toUpperCase()) {
        if (ucase.test(password.value) == true) {
            uper.classList.remove("fas", "fa-times");
            uper.classList.add("fas", "fa-check-circle");
        } else if (ucase.test(password.value) == false) {
            uper.classList.remove("fas", "fa-check-circle");
            uper.classList.add("fas", "fa-times");
            showErrorText(password, `${getFieldNameChange(password)} must have at least 1 Uppercase`);
        }
        if (specialChars.test(password.value) == true) {
            spchar.classList.remove("fas", "fa-times");
            spchar.classList.add("fas", "fa-check-circle");
        } else if (specialChars.test(password.value) == false) {
            spchar.classList.remove("fas", "fa-check-circle");
            spchar.classList.add("fas", "fa-times");
            showErrorText(password, `${getFieldNameChange(password)} must have atleast 1 special character`);
        }
        if (num.test(password.value) == true) {
            int.classList.remove("fas", "fa-times");
            int.classList.add("fas", "fa-check-circle");
        } else if (num.test(password.value) == false) {
            int.classList.remove("fas", "fa-check-circle");
            int.classList.add("fas", "fa-times");
            showErrorText(password, `${getFieldNameChange(password)} must have 1 number`);
        }
    };
}
function showErrorText(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-group col-md-8 eye_icon";
    const div = formControl.querySelector("div");
    div.innerText = message;
}
function getFieldNameChange(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function showPassword() {
    var passAttribute = $("#oldpassword").attr("type");
    var eyeClass = $("#eyeshowhide").attr("class");
    if (passAttribute == "password") {
        $("#oldpassword").attr("type", "text");
        $("#eyeshowhide").attr("class", "fa fa-eye");
    } else {
        $("#oldpassword").attr("type", "password");
        $("#eyeshowhide").attr("class", "fa fa-eye-slash");
    }
}
function showNewPassword() {
    var passAttribute = $("#newPassword").attr("type");
    var eyeClass = $("#neweyeshowhide").attr("class");
    if (passAttribute == "password") {
        $("#newPassword").attr("type", "text");
        $("#neweyeshowhide").attr("class", "fa fa-eye");
    } else {
        $("#newPassword").attr("type", "password");
        $("#neweyeshowhide").attr("class", "fa fa-eye-slash");
    }
}
function showConfirmPassword() {
    var passAttribute = $("#confirmPassword").attr("type");
    var eyeClass = $("#confirmeyeshowhide").attr("class");
    if (passAttribute == "password") {
        $("#confirmPassword").attr("type", "text");
        $("#confirmeyeshowhide").attr("class", "fa fa-eye");
    } else {
        $("#confirmPassword").attr("type", "password");
        $("#confirmeyeshowhide").attr("class", "fa fa-eye-slash");
    }
}
function shrinkParamsDiv(searchType) {
    $('.showHideDivClass i').toggleClass('fa-angle-double-up').toggleClass('fa-angle-double-down');
    if (searchType == 'P') {
        var searchId = $("#searchId").val();
        $('.dxpParamsDotsButton').toggleClass('showParamsDiv');

        if ($('.dxpParamsDotsButton').hasClass('showParamsDiv')) {
            $('.dxpParamsDotsButton').css("display", "block !important");
            $('.visionParamSearchCover').css("display", "block !important");
            $('.paramSearchbtn').css("display", "block !important");
            $('#templeteresultClass').removeClass("templeteresultClass")
            $('#templeteresultClass').css("display", "none");
            $('.dxpParamsDotsButton').css("height", "100%");
            $('.templeteresultClass').hide();
//            getFloatingParamForm(searchId, "Y", "MM_CREATE_TEMPLATE", "", "P", "", "", "");
        } else {
            $('#templeteresultClass').css("display", "block !important");
            $('#templeteresultClass').addClass("templeteresultClass");
            $('.templeteresultClass').css("display", "block !important");
            $('.dxpParamsDotsButton').css("display", "none !important");
            $('.templeteresultClass').show();
        }
        $('.dxpParamsDotsButton').slideToggle();
        $('.visionParamSearchCover').slideToggle();
        $('.paramSearchbtn').slideToggle();
    }
    if (searchType == 'D') {
        $('#classProperties').toggleClass('showParamsDiv');
        if ($('#classProperties').hasClass('showParamsDiv')) {
            $('#classProperties').css("display", "block !important");
            $('#templeteresultClass').css("display", "none !important");
            $('.templeteresultClass').css("display", "none !important");
            $('.templetesearchresult').css("display", "none !important");
            $('.templeteresultClass').hide();
        } else {
            $('#templeteresultClass').css("display", "block !important");
            $('.templeteresultClass').css("display", "block !important");
            $('#classProperties').css("display", "none !important");
            $('.templeteresultClass').show();
        }
        $('#classProperties').slideToggle();
    }
    if (searchType == 'PRA') {
        $('.dxpParamsDotsButton').toggleClass('showParamsDiv');
        $('.main_card').toggleClass('showParamsDiv');
        $('.threeDomainCards').toggleClass('showParamsDiv');
        $('.visionParamSearchCover').toggleClass('showParamsDiv');
        $('.paramSearchbtn').toggleClass('showParamsDiv');

        if ($('.dxpParamsDotsButton').hasClass('showParamsDiv')) {
            $('.dxpParamsDotsButton').css("display", "block !important");
        }
        if ($('.main_card').hasClass('showParamsDiv')) {
            $('.main_card').css("display", "block !important");
        }
        if ($('.threeDomainCards').hasClass('showParamsDiv')) {
            $('.threeDomainCards').css("display", "block !important");
        }
        if ($('.visionParamSearchCover').hasClass('showParamsDiv')) {
            $('.visionParamSearchCover').css("display", "block !important");
        }
        if ($('.paramSearchbtn').hasClass('showParamsDiv')) {
            $('.paramSearchbtn').css("display", "block !important");
            $('.paramSearchbtn').css("height", "100%");

        } else {
            $('.templeteresultClass').css("display", "block !important");
            $('.paramSearchbtn').css("display", "none !important");
        }
        $('.dxpParamsDotsButton').slideToggle();
        $('.main_card').slideToggle();
        $('.threeDomainCards').slideToggle();
        $('.visionParamSearchCover').slideToggle();
        $('.paramSearchbtn').slideToggle();
    }
}
function changetoArabicapp(getlanguage) {
    showLoader();
    setTimeout(function () {
        let language = getlanguage;
        if (language == 'arabic') {
            $('body').addClass('arabic-body-app');
            $('.themeModeDark').each(function () {
                let getMatch = $(this).attr('src');
                if (!getMatch.match("greenimages")) {
                    $(this).attr('src', $(this).attr('src').replace(/images/i, "greenimages"));
                    $('#rsUsername').attr('placeholder', 'اسم المستخدم');
                    $('#rsPassword').attr('placeholder', 'شعار');
                }
                stopLoader();

            });
        } else {
            $('body').removeClass('arabic-body-app');
            $('.themeModeDark').each(function () {
                $(this).attr('src', $(this).attr('src').replace(/greenimages/i, "images"));
                $('#rsUsername').attr('placeholder', 'User Name');
                $('#rsPassword').attr('placeholder', 'Password');
                stopLoader();
            });
        }
    }, 1200);

}
function showCardBasedVideo(domainType, titleText) {
    var url = '';
    titleText = "<div class='dxpTitleNameText' id='dxpTitleNameText'>" + titleText + "</div>";
    if (domainType != null && domainType != undefined && domainType != "" && domainType == 'VENDOR') {
        url = '/Bandicam/homePageConversion.mp4';
    } else if (domainType != null && domainType != undefined && domainType != "" && domainType == 'PRODUCT') {
        url = 'https://www.youtube.com/embed/X44pFqLbTIo';
    } else if (domainType != null && domainType != undefined && domainType != "" && domainType == 'SERVICE') {
        url = '';
    } else if (domainType != null && domainType != undefined && domainType != "" && domainType == 'ONBOARD') {
        url = '';
    }
    var iframe = "<div class='cardBasedVideo'><iframe width='100%' height='315' id='iFrameCardBasedVideo' src='" + url + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' type='video/mp4' allowfullscreen></iframe></div>";
    var modalObj = {
        title: titleText,
        body: iframe
    };
    var buttonArray = [
        {
            text: 'OK',
            click: function () {
                $('#iFrameCardBasedVideo').attr('src', "");
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    createModal("showExtendPdfTableData", modalObj);
    $(".modal-dialog").addClass("modal-xl");
}
function openSettingPannel(clickedIcon) {
    var clickedTitle = "";
    if ($('.ui-widget-overlay').length > 0) {
        return;
    }
    $('#settingsIcon').val('');
    $("#settingPannelDXP").width(245);
    $("#settingPannelDXP").height('auto');

    try {
        $("#intellisenseDiv").html("");
        $("#intellisensebox").hide();
        $("#intellisenseboxId").hide();
        $("#intellisenseDiv").hide();
        $(".searchResultCountView").hide();
    } catch (e) {

    }

    if (clickedIcon === 'settingdiv') {
        $(".rightPannelSettings").removeClass("rightPanelClickOPenLeftPanel");
        var clickedTitle = labelObject["Settings"] != undefined ? labelObject["Settings"] : "Settings";
        insertUserClickedNavigations(clickedTitle);
        $("#backgroundShadowDiv").show();
        $('#settingContentDiv').show();
        $('.pannelTitle').show();
        $('#helpContentDiv').hide();
        $('#externalMenuContentDiv').hide();
        $('#userContentDiv').hide();
        $('#calendarContentDiv').hide();
        $("#settingPannel").addClass("settingPannelPopPannel");
        $("#settingPannel").removeClass("HelpPannelPopPannel");
        $("#settingPannel").addClass("userLoginPannelPopPannel");
        $('#clickedTitle').html(clickedTitle);
        $('#settingsIcon').html("<img src='images/settingsWhiteSet.png' width='20px' class='themeModeDark'/>");
        $("#settingPannelDXP .settingPannelInnerWrapper #settingContentDiv.listofSettingDiv").addClass("idxpTools");
        console.log("Setting Pannel");
        $(".rightPannelSettings").css("display", "none");

        $("#dialog10").dialog({
            modal: true,
            dialogClass: "settingsClassID",
            title: labelObject["Settings"] != undefined ? labelObject["Settings"] : "Settings",
            width: 350,
            create: function (event, ui) {
                const htmlString = `<div class="settingPannelInnerWrapper">
                <div class='listofSettingDiv' id='settingContentDiv'>
                    <ul class="m-0">
                       <li id="fontChangeSettingId" class="fontChangeIcon dropdown">
                            <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                                <span class="listImage"><img id="fontChangeSettingImgId" src="images/iDXPUI5FontType.svg" style="width: 20px;" title="${labelObject["Font Type"] != undefined ? labelObject["Font Type"] : "Font Type"}" class="fontChangeButton themeModeDark">
                                </span>
                                <span id="fontChangeSettingTitleId" class="mobileTitle">${labelObject["Font Type"] != undefined ? labelObject["Font Type"] : "Font Type"}</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li onclick="fontUpperCase('UpperCase')"><a tabindex="-1" href="#" id="upperCaseMenu" >${labelObject["Uppercase"] != undefined ? labelObject["Uppercase"] : "Uppercase"}</a></li>
                                <li onclick="fontUpperCase('LowerCase')"><a tabindex="-1" href="#" id="LowerCaseMenu" >${labelObject["Lowercase"] != undefined ? labelObject["Lowercase"] : "Lowercase"}</a></li>
                                <li onclick="fontUpperCase('Default')"><a tabindex="-1" href="#" id="capitaliseFontMenu" >${labelObject["Default"] != undefined ? labelObject["Default"] : "Default"}</a></li>
                            </ul>
                        </li>
                        <li id="fontSizeSettingId" class="fontSizeIcon dropdown">
                            <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                                <span class="listImage">
                                    <img id="fontSizeSettingImgId" src="images/iDXPUI5FontSize.svg" style="width: 20px;" title="Font Size" class="fontSizeChangeButton themeModeDark">
                                </span>
                                <span id="fontSizeSettingTitleId" class="mobileTitle">${labelObject["Font Size"] != undefined ? labelObject["Font Size"] : "Font Size"}</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li onclick="changeFontSize('Smaller')"><a tabindex="-1" href="#" id="SmallerFontSize">${labelObject["Smaller"] != undefined ? labelObject["Smaller"] : "Smaller"}</a></li>
                                <li onclick="changeFontSize('Medium')"><a tabindex="-1" href="#" id="MediumFontSize">${labelObject["Medium"] != undefined ? labelObject["Medium"] : "Medium"}</a></li>
                                <li onclick="changeFontSize('Large')"><a tabindex="-1" href="#" id="LargeFontSize">${labelObject["Large"] != undefined ? labelObject["Large"] : "Large"}</a></li>
                                <li onclick="changeFontSize('Default')"><a tabindex="-1" href="#" id="DefaultFontSize" >${labelObject["Default"] != undefined ? labelObject["Default"] : "Default"}</a></li>
                            </ul>
                        </li>
                        <li id="themeSettingId" class="themeSettingIcon dropdown">
                            <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                                <span class="listImage">
                                    <img id="fontSizeSettingImgId" src="images/iDXPUI5Appearance.svg" style="width: 20px;" title="Font Size" class="fontSizeChangeButton themeModeDark">
                                </span>
                                <span id="fontSizeSettingTitleId" class="mobileTitle">${labelObject["Appearance"] != undefined ? labelObject["Appearance"] : "Appearance"}</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li data-themeClass="fiorithemeClass" onclick="changeOpenUiTheme('fiorithemeClass')"><div class="themeColorBox SAPmHorizon"></div><div><a href="#">${labelObject["SAP Morning Horizon"] != undefined ? labelObject["SAP Morning Horizon"] : "SAP Morning Horizon"}</a></div><div id="SAPmorningHorizon" class="themeCheckIndication" data-checkmarkIcon="&#xe1c2"></div></li>
                                <li data-themeClass="fiorithemeClassDark" onclick="changeOpenUiTheme('fiorithemeClassDark')"><div class="themeColorBox SAPeHorizon"></div><div><a href="#">${labelObject["SAP Evening Horizon"] != undefined ? labelObject["SAP Evening Horizon"] : "SAP Evening Horizon"}</a></div><div id="SAPeveningHorizon" class="themeCheckIndication" data-checkmarkIcon="&#xe1c2" style="display:none"></div></li>
                                <li data-themeClass="quartzLiteThemeClass" onclick="changeOpenUiTheme('fiorithemeClassQuartzLight')"><div class="themeColorBox SAPqLite"></div><div><a href="#">${labelObject["SAP Quartz Light"] != undefined ? labelObject["SAP Quartz Light"] : "SAP Quartz Light"}</a></div><div id="SAPquartzLite" class="themeCheckIndication" data-checkmarkIcon="&#xe1c2" style="display:none"></div></li>
                            </ul>
                        </li> 
                        <li id="extendedViewSettingId" class="extendedViewIcon" onclick="toggleFullScreen()">
                            <a href="#!" class="waves-effect waves-light">
                                <span class="listImage">
                                    <img id="extendedViewSettingImgId" src="images/iDXPUI5FullScreen.svg" class="themeModeDark" width="20px" id="IntelliSenseFs" title="${labelObject["View Full Screen"] != undefined ? labelObject["View Full Screen"] : "View Full Screen"}">
                                </span>		
                                <span id="extendedViewSettingTitleId" class="mobileTitle">${labelObject["View Full Screen"] != undefined ? labelObject["View Full Screen"] : "View Full Screen"}</span>				     
                            </a>						    
                        </li>
                        <li id="languageChangeSettingId" class="languageChangeIcon" onclick="changeLanguage()">
                            <a class="" href="#">
                                <span class="listImage"> 
                                    <img id="languageChangeSettingImgId" src="images/iDXPUI5LanguageChange.svg" title="${labelObject["Language"] != undefined ? labelObject["Language"] : "Language"}" class="themeModeDark" width="20px">  
                                </span>
                                <span id="languageChangeSettingTiteId" class="mobileTitle">${labelObject["Language"] != undefined ? labelObject["Language"] : "Language"}</span>
                            </a>
                        </li>
                        <li id="feedbackSettingId" class="feedbackIcon">
                            <a href="#" onclick="openFeedBackPagePopup()">
                                <span class="listImage">
                                    <img id="feedbackSettingImgId" src="images/iDXPUI5FeedBack.svg" title="${labelObject["Feedback"] != undefined ? labelObject["Feedback"] : "Feedback"}" class="headerFeedback themeModeDark" width="20px">
                                </span>
                                <span id="feedbackSettingTitleId" class="mobileTitle">${labelObject["Feedback"] != undefined ? labelObject["Feedback"] : "Feedback"}</span>
                            </a> 
                        </li>
                        <li id = "contactPreferencesSettingId" class="contactPreferencesIcon">
                            <a class="" href="#" onclick="getHtmlContentBasedOnQueryPopUp('Contact Preferences', 'Contact Preferences', 'CONTACT PREFERENCES', 'H', 'Contact Preferences', 'N')" >
                                <span class="listImage">
                                    <img id = "contactPreferencesSettingImgId" src="images/iDXPUI5ContactPreferences.svg" title="Contact Preferences" class="profile-img themeModeDark" width="20px"> 
                                </span>							
                                <span id = "contactPreferencesSettingTitleId" class="mobileTitle">${labelObject["Contact Preferences"] != undefined ? labelObject["Contact Preferences"] : "Contact Preferences"}</span>
                            </a>
                        </li>
                        <li id = "passwordChageSettingId" class="passworIcon" onclick="updatePassForm('C')">
                            <a class="" href="#">
                                <span class="listImage">
                                    <img id = "passwordChageSettingImgId" src="images/iDXPUI5ChangePassword.svg" title="Change Password" class="profile-img themeModeDark" width="20px">
                                </span>

                                <span id = "passwordChageSettingTitleId" class="mobileTitle">${labelObject["Change Password"] != undefined ? labelObject["Change Password"] : "Change Password"}</span>
                            </a>
                        </li>
                        <li id = "aboutUsSettingId" class="aboutUsIcon">
                            <a class="" href="https://www.piloggroup.com/" target="_blank">
                                <span class="listImage">
                                    <img id = "aboutUsSettingImgId" src="images/iDXPUI5AboutUs.svg" title="About Us" class="profile-img themeModeDark" width="20px">
                                </span>

                                <span id = "aboutUsSettingTitleId" class="mobileTitle">${labelObject["About Us"] != undefined ? labelObject["About Us"] : "About Us"}</span>
                            </a>
                        </li>
                        <li id = "OtherSettingsId" class="OtherIcon">
                            <a class="" href="https://www.piloggroup.com/innovative-products.php" target="_blank">
                                <span class="listImage">
                                    <img id = "OtherSettingsImgId" src="images/iDXPUI5RegistrationAccepted.svg" title="Other" class="profile-img themeModeDark" width="20px">
                                </span>							

                                <span id = "OtherSettingsTitleId" class="mobileTitle">${labelObject["Other"] != undefined ? labelObject["Other"] : "Other"}</span>
                            </a>
                        </li>
                <li id = "outOfOfficeSettingId" class="outOfOfficeIcon">
                            <a onclick="closeAllDialogsBoxes(); $('#backgroundShadowDiv').removeClass('backGroundOpacity'); workflowBasketTabs('OUT_OF_OFC_TAB', 'PRODUCT_APPROVALS', localStorage.getItem('currentRole'));" target="_blank">
                                <span class="listImage">
                                    <img id = "outOfOfficeSettingImgId" src="images/iDXPUI5AboutUs.svg" title="Out of Office" class="profile-img themeModeDark" width="20px">
                                </span>
                                <span id = "outOfOfficeSettingTitleId" class="mobileTitle">${labelObject["Out of Office"] != undefined ? labelObject["Out of Office"] : "Out of Office"}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                </div>`;
                $(this).html(htmlString);
            },
            buttons: [
                {
                    text: labelObject["Save"] != undefined ? labelObject["Save"] : "Save",
                    click: function () {
                        console.log("Save button clicked");
                        $(this).dialog("close");
                        $('.backGroundOpacity').css("display", "none");
                        var updateThemeClass = $("body").attr("class");
                        localStorage.setItem("themeClass", updateThemeClass);
                        updateUserThemes("modeChange", updateThemeClass);
                    }

                },
                {
                    text: labelObject["Cancel"] != undefined ? labelObject["Cancel"] : "Cancel",
                    click: function () {
                        $(this).dialog("close");
                        $('.backGroundOpacity').css("display", "none");
                    }
                }
            ],
            open: function (event, ui) {
                let localThemeClass = localStorage.getItem("themeClass");
                let themeAttr = localThemeClass.split(" ");
                let lastClickedTheme = themeAttr[themeAttr.length - 1];
                $('#themeSettingId .dropdown-menu li').each(function () {
                    let themeClass = $(this).attr("data-themeclass");
                    if (lastClickedTheme === themeClass) {
                        $(this).find('.themeCheckIndication').show();
                    } else {
                        $(this).find('.themeCheckIndication').hide();
                    }
                });
            },
            close: function (event, ui) {
                $('.backGroundOpacity').css("display", "none");
            }
        });
    } else if (clickedIcon == 'helpdiv') {
        var clickedTitle = labelObject["Help"] != undefined ? labelObject["Help"] : "Help";
        insertUserClickedNavigations(clickedTitle);
        $(".rightPannelSettings").removeClass("rightPanelClickOPenLeftPanel");
        $("#backgroundShadowDiv").show();
        $('.pannelTitle').show();
        $('#settingContentDiv').hide();
        $('#helpContentDiv').show();
        $('#externalMenuContentDiv').hide();
        $('#userContentDiv').hide();
        $('#calendarContentDiv').hide();
        $("#settingPannel").addClass("helpPannelPopPannel");
        $("#settingPannel").removeClass("settingPannelPopPannel");
        $("#settingPannel").removeClass("userLoginPannelPopPannel");
        $('#clickedTitle').html(clickedTitle);
        $('#settingsIcon').html("<img src='images/helpWhiteSet.png' width='20px' class='themeModeDark'/>");
        $("#settingPannelDXP .settingPannelInnerWrapper #settingContentDiv.listofSettingDiv").removeClass("idxpTools");
        console.log("Help Pannel");
        // $("#settingPannel").width(300);
    } else if (clickedIcon == 'useraccdiv') {
        let userLogin = localStorage['userName'];
        var userDetails = localStorage['userDetails'];
        var domainBasedRole = $("#sidebar").attr("data-role");
        try {
            domainBasedRole = domainBasedRole.replace("_", " ");
            domainBasedRole = convertStringToTitleCase(domainBasedRole, 1);
        } catch (e) {
            domainBasedRole = $("#sidebar").attr("data-role");
        }
        insertUserClickedNavigations("User Profile");
        $(".rightPannelSettings").removeClass("rightPanelClickOPenLeftPanel");
        $("#backgroundShadowDiv").show();
        $('.pannelTitle').hide();
        $('#settingContentDiv').hide();
        $('#helpContentDiv').hide();
        $('#externalMenuContentDiv').hide();
        $('#userContentDiv').show();
        $(".rightPannelSettings").show();
        var headerWeatherFlag = $('#headerWeatherFlag').val();
        var headerCalenderFlag = $("#headerCalenderFlag").val();
        var headerFioriFlag = $('#headerFioriFlag').val();
        var headerNotificationFlag = $('#headerNotificationFlag').val();
        if (!$("#userDataId").length) {
            $('#userContentDiv').append("<div id='userDataId' class='userDataClass'></div>")
            $('#userDataId').html(userDetails);
            let userDataList = $('#userDataId ul');
            if (userDataList.length > 0) {
                if (headerWeatherFlag != null && headerWeatherFlag != undefined && headerWeatherFlag != "" && headerWeatherFlag == "Y") {
                    let weatherHtml = `
                <li class='weatherIcon' onclick="getWeatherDetails()" title='Weather ForeCast' data-idx="1">
                    <span><img src='images/iDXPUI5Weather.svg' width='24px' class='themeModeDark' /></span>
                    <span class="headerOptionTitle">Weather ForeCast</span>
                    <div class="showHeaderpopUpBox" style="display: none">
                        <div class="media border p-2">
                            <img src="images/iDXPUI5Weather.svg" alt="" class="popupInnerImgShowClass themeModeDark mr-2 mt-1" style="width:40px;">
                            <div class="media-body">
                                <h4>Weather</h4>
                                <small>View the Weather Report</small>
                            </div>
                        </div>
                    </div>
                </li>`;

                    let lastItem = userDataList.children("li").last();
                    if (lastItem.length > 0) {
                        lastItem.before(weatherHtml);
                    } else {
                        userDataList.append(weatherHtml);
                    }
                }
                if (headerCalenderFlag != null && headerCalenderFlag != undefined && headerCalenderFlag != "" && headerCalenderFlag == "Y") {
                    let calenderHtml = `<li class='calendarIcon' onclick="openSettingPannel('calendardiv')"
                                    title='Calender' data-idx="2"><span><img src='images/iDXPUI5Calendar.svg'
                                                                   width='20px' class='themeModeDark' /></span><span class="headerOptionTitle" >${labelObject["Calendar"] != undefined ? labelObject["Calendar"] : "Calendar"}</span>
                                    <div class="showHeaderpopUpBox" style="display: none"><div class="media border p-2"><img src="images/iDXPUI5Calendar.svg" alt="" class="popupInnerImgShowClass themeModeDark mr-2 mt-1 " style="width:40px;">
                                            <div class="media-body"><h4>Activity Calender</h4><small>Click to View the Events</small></div></div></div>

                                </li>  `;
                    let lastItem = userDataList.children("li").last();
                    if (lastItem.length > 0) {
                        lastItem.before(calenderHtml);
                    } else {
                        userDataList.append(calenderHtml);
                    }
                }
                if (headerFioriFlag != null && headerFioriFlag != undefined && headerFioriFlag != "" && headerFioriFlag == "Y") {
                    let fioriHtml = document.querySelector("#fioriMainSwich");
                    let lastItem = userDataList.children("li").last();
                    if (lastItem.length > 0) {
                        lastItem.before(fioriHtml);
                    } else {
                        userDataList.append(fioriHtml);
                    }
                    $("#fioriMainSwich").show();
                }

                if (headerNotificationFlag != null && headerNotificationFlag != undefined && headerNotificationFlag != "" && headerNotificationFlag == "Y") {
                    let notificationHtml = `<li class='notificationIcon' id='usernotificationid'  onclick="notificationsData('notifications');"
                                    title='Notifications'><span class='notificationIconClass'><img src='images/iDXPUI5Notification.svg' width='20px' class='themeModeDark' />
                     <sup id="notificationindicatorID" class="notificationDot" style="display: none;"></sup></span>
                    <span class="headerOptionTitle" >${labelObject["Notifications"] != undefined ? labelObject["Notifications"] : "Notifications"}</span>                              
                                </li>  `;
                    let lastItem = userDataList.children("li").last();
                    if (lastItem.length > 0) {
                        lastItem.before(notificationHtml);
                    } else {
                        userDataList.append(notificationHtml);
                    }
                }

                let settingHelpHtml = `<li class="settingIcon" onclick="openSettingPannel('settingdiv')" title="${labelObject["Settings"] != undefined ? labelObject["Settings"] : "Settings"}" data-idx="3">
<span><img src="images/iDXPUI5Settings.svg" class="themeModeDark" width="20px" title="Settings" /></span>
<span class="headerOptionTitle">${labelObject["Settings"] != undefined ? labelObject["Settings"] : "Settings"}</span>
</li><li class='helpIcon'  onclick="openSettingPannel('helpdiv')" title='Help' data-idx="5"><img
src='images/iDXPUI5Help.svg' width='20px' class='themeModeDark' /><span class="headerOptionTitle">${labelObject["Help"] != undefined ? labelObject["Help"] : "Help"}</span>
<div class="showHeaderpopUpBox" style="display: none"><div class="media border p-2"><span><img src="images/iDXPUI5Help.svg" alt="" class="popupInnerImgShowClass themeModeDark mr-2 mt-1 " style="width:40px;"></span>
    <div class="media-body"><h4>Help</h4><small>Support with Chat and Help Manuals</small></div></div></div>
</li>
<li class='signatureIcon'  onclick="showDigitalSignature()" title='Digital Signature' data-idx="5"><img
src='images/iDXPUI5DigitalSignature.svg' width='20px' class='themeModeDark' /><span class="headerOptionTitle">${labelObject["Digital Signature"] != undefined ? labelObject["Digital Signature"] : "Digital Signature"}</span>
</li>               
`;

                let lastItem = userDataList.children("li").last();
                if (lastItem.length > 0) {
                    lastItem.before(settingHelpHtml);
                } else {
                    userDataList.append(settingHelpHtml);
                }
            }
        }

        $(".closeSettings").show();
        $('#calendarContentDiv').hide();
        $("#settingPannel").addClass("userLoginPannelPopPannel");
        $("#settingPannel").removeClass("helpPannelPopPannel");
        $("#settingPannel").removeClass("settingPannelPopPannel");
        $('#clickedTitle').html(userLogin);
        console.log("userAccountDetails");
        $('#settingsIcon').html("<img src='images/userWhiteSet.png' width='20px' class='themeModeDark'/>");
        $("#settingPannelDXP .settingPannelInnerWrapper #settingContentDiv.listofSettingDiv").removeClass("idxpTools");
        // $("#settingPannel").width(300);
    } else if (clickedIcon == 'calendardiv') {
        var clickedTitle = labelObject["Calender"] != undefined ? labelObject["Calender"] : "Calender";
        insertUserClickedNavigations(clickedTitle);
        $(".rightPannelSettings").removeClass("rightPanelClickOPenLeftPanel");
        $("#backgroundShadowDiv").show();
        $('.pannelTitle').show();
        $('#settingContentDiv').hide();
        $('#helpContentDiv').hide();
        $('#userContentDiv').hide();
        $('#externalMenuContentDiv').hide();
        $('#calendarContentDiv').show();
        $("#settingPannelDXP").width(280);
        $('#clickedTitle').html(clickedTitle);
        $('#settingsIcon').html("<img src='images/calendarWhiteSet.png' width='20px' class='themeModeDark'/>");
        $("#settingPannelDXP .settingPannelInnerWrapper #settingContentDiv.listofSettingDiv").removeClass("idxpTools");
        showCustomScheduledCalendar();
    } else if (clickedIcon == 'externalMenus') {
        var clickedTitle = "Menu";
        insertUserClickedNavigations("External Menu's");
        $(".rightPannelSettings").addClass("rightPanelClickOPenLeftPanel");
        $("#backgroundShadowDiv").show();
        $('.pannelTitle').show();
        $('#settingContentDiv').hide();
        $('#helpContentDiv').hide();
        $('#userContentDiv').hide();
        $('#calendarContentDiv').hide();
        $('#externalMenuContentDiv').show();
        $("#settingPannelDXP").width(330);
        $('#clickedTitle').html(clickedTitle);
        $('#settingsIcon').html("<img src='images/menu_icon_bullet.png' width='20px' class='themeModeDark'/>");
        $("#settingPannelDXP .settingPannelInnerWrapper #settingContentDiv.listofSettingDiv").removeClass("idxpTools");
    }
    $('#imagePreview').css('background-image', 'url(' + localStorage['profile_imgStr'] + ')');
    $('#imagePreview').show();
    $("#imageUpload").change(function () {
        setuserProfileUpdateIcon(this);
    })
}
function onclickSignout() {
    closesettingPannel();
    try {
        $("#intellisenseDiv").html("");
        $("#intellisensebox").hide();
        $("#intellisenseboxId").hide();
        $("#intellisenseDiv").hide();
        $(".searchResultCountView").hide();
    } catch (e) {

    }
//    var message = labelObject['Unsaved data will be lost, do you want to logout?'] != null ? labelObject['Unsaved data will be lost, do you want to logout?'] : 'Unsaved data will be lost, do you want to logout?';
    var message = labelObject['Unsaved data will be lost, do you want to signout?'] != null ? labelObject['Unsaved data will be lost, do you want to signout?'] : 'Do you want to log off from the current session?';
    var logoutmessage = '<div><p style ="font-size:14px; text-align:justify; display:flex;align-items:center;margin-bottom:0;padding-left:5px;"><span style = "color:#566d81;font-size:30px;margin:4px;"><i class="fa fa-exclamation-triangle"></i></span>' + message + '</p></div>'
    $("#logoutDailog").html(logoutmessage);
    $("#logoutDailog").dialog({resizable: false,
        title: (labelObject['Sign Out'] != null ? labelObject['Sign Out'] : 'Sign Out'),
        modal: true,
        height: 150,
        minWidth: 450,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Yes'] != null ? labelObject['Yes'] : "Yes"),
                click: function () {
                    logout();
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }

            },
            {
                text: (labelObject['No'] != null ? labelObject['No'] : "No"),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
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
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });


}
function closesettingPannel() {
    $("#backgroundShadowDiv").hide()
    $("#settingPannelDXP").width(0);
    $("#settingPannelDXP").height(0);
}
function showPlanInfoDetails(descRUrl, descTitle, flagType) {
    var planInfo = "";
    var popupSize = "";
    var titleText = "<div class='dxpTitleNameText' id='dxpTitleNameText'>" + descTitle + "</div>";
    if (flagType != null && flagType != undefined && flagType != "" && flagType == 'I') {
        planInfo = "<div class='dxpDescPlanInfoText' id='dxpDescPlanInfoText'><p>" + descRUrl + "</p></div>";
        popupSize = "modal-xs";
    } else if (flagType != null && flagType != undefined && flagType != "" && flagType == 'V') {
        planInfo = "<div class='cardBasedVideo'><iframe width='100%' height='315' id='iFrameCardBasedVideo' src='" + descRUrl + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' type='video/mp4' allowfullscreen></iframe></div>";
        popupSize = "modal-xl";
    } else if (flagType != null && flagType != undefined && flagType != "" && flagType == 'G') {
        planInfo = "<div class='cardBasedVideo'><iframe width='100%' height='315' id='iFrameCardBasedVideo' src='" + descRUrl + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' type='video/mp4' allowfullscreen></iframe></div>";
        popupSize = "modal-xl";
    }
    var modalObj = {
        title: titleText,
        body: planInfo
    };
    var buttonArray = [
        {
            text: 'OK',
            click: function () {
                $('#iFrameCardBasedVideo').attr('src', "");
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    createModal("showPlanInfoDescData", modalObj);
    $(".modal-dialog").addClass(popupSize);
}
function gettabcomponent(domain, role, componenttype, TabId, editableflag, title) {
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    if (fioriThemeCheck) {
        $("#showdomainBasedCards").append("<div class='defaultShowCards' id='defaultShowCards' style='display:none;'><div class='dridHomePageCards' id='defaultShowCardsId' ></div></div>")
        $(".searchResultCardViewMainSection").addClass("fioriconfigMainWrapper");
    } else {
        $("#dxpContent").append("<div class='defaultShowCards' id='defaultShowCards' style='display:none;'><div class='dridHomePageCards' id='defaultShowCardsId' ></div></div>");
        $(".searchResultCardViewMainSection").removeClass("fioriconfigMainWrapper");
    }
    $("#defaultShowCardsId").html("");
    $("#defaultShowCards").hide();
    if (fioriThemeCheck) {
        try {
            $("#defaultShowCards").hide();
            $("#iDXPKDSContainerId").hide();
            $('.outerWidthcol').removeClass("highlightCard menuTabActive");
            $(event.target.closest('.outerWidthcol')).addClass("highlightCard menuTabActive");
        } catch (e) {
        }
    } else {
        try {
            $('.outerWidthcol').removeClass("highlightCard");
            $(event.target.closest('.outerWidthcol')).addClass("highlightCard");
        } catch (e) {
        }
    }
    $.ajax({
        type: "post",
        url: "fetchTabStr",
        cache: false,
        data: {
            tabId: TabId,
            role: role,
            componenttype: componenttype,
            fioriThemeFlag: fioriThemeCheck,
        },
        traditional: true,
        dataType: 'html',
        success: function (response) {
            var resultobj = JSON.parse(response);
            var tabsarr = resultobj['tabsArray'];
            var tabstring = resultobj['tabstring'];


//            $("#showdomainBasedCards").html(tabstring);
            $("#defaultShowCards").show();
            $("#defaultShowCards").html(tabstring);
            var gridId = "";
            var type = "";
            if (fioriThemeCheck) {
                gridId = resultobj['tabComponentId'];
                type = resultobj['tabComponentType'];
                $("#defaultShowCards").addClass('fioriConfigWBWrapper');
            } else {
                gridId = tabsarr[0].tabComponentId;
                type = tabsarr[0].tabComponentType;
                $("#defaultShowCards").removeClass('fioriConfigWBWrapper');
            }
            $('.activeTabMainDiv').each(function (index, item) {
                var $mainContainer = $(this);
                var $menuContainer = $(this).find('.activeTabMainDiv-nav__item');
                var $label = $(this).find('.at-tab-__title_text');
                var $content = $(this).find('.activeTabMainDiv-content__item');

                $content.hide();
                //adding data attribute 
                $label.each(function (idx, ele) {
                    $(this).attr('data-target', idx)
                });
                $($menuContainer[0], $label[0]).addClass('current');
                $($content[0]).show();

                //Display current tab content
                $(this).find('.activeTabMainDiv-nav__item').click(function (ele) {
                    //debugger;
                    $(this.parentNode.children).each(function () {
                        if ($(this).is(".current")) {
                            $(this).removeClass('current');
                        }
                    })
                    $(this).addClass('current')
                    $(this.parentNode.parentNode.children[1].children).each(function () {
                        if ($(this).is(":visible")) {
                            $(this).find('.activeTabMainDiv-nav__item').map(function () {
                                $(this).removeClass('current');
                            })
                            var neee = $(this).find('.activeTabMainDiv-nav__item')[1];
                            $(neee).addClass('current')
                        }
                    })
                    $(this).find('.at-tab-__title_text').addClass('current');
                    $(this).closest('.activeTabMainDiv').find('.activeTabMainDiv-content:first > .activeTabMainDiv-content__item').hide();
                    $(this).closest('.activeTabMainDiv').find('.activeTabMainDiv-content:first > .activeTabMainDiv-content__item').eq(parseInt($(this).find('[data-target]').attr('data-target'))).show()
                    $(this).closest('current').find('.at-tab-__title_text').addClass('current');
                });
            });

            if (type != null && type != undefined && type == 'GRID') {
                if (fioriThemeCheck) {
                    showparrentTabContent(gridId, type, role);
                } else {
                    getGrid(gridId, role);
                }

            }
            if (type != null && type != undefined && type == 'FORM') {
                $("#inneractiveTabMainDiv").html("<div id ='" + gridId + "'></div>");
                getBasicSubscriptionDetails();
            } else if (type != null && type == 'TAB') {
                getNestedtab(gridId, role);
            }
            $(document).keydown(function (event) {
                if (event.which === 37) {
                    $('#preButtonsId').click();
                } else if (event.which === 39) {
                    $('#nextButtonId').click();
                } else if (event.which === 38) {
                    $('.activeTabInnerBtnDiv .current').prev().click(); // Change this line to select the previous element
                    $(this).addClass("step-active");
                } else if (event.which === 40) {
                    $('.activeTabInnerBtnDiv .current').next().click(); // Change this line to select the next element
                    $(this).addClass("step-active");
                }
            });

        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}
function getBasicSubscriptionDetails() {
    showLoader();
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: 'getBasicSubscriptionDetails',
        traditional: true,
        cache: false,
        async: true,
        data: {
            event: event
        },
        success: function (data, textStatus, jqXHR) {
            stopLoader()
            if (fioriThemeCheck) {
                $('#searchTabContentID').html(data['str']);
            } else {
                $('#inneractiveTabMainDiv').html(data['str']);
                $('#dxpHomeContent').hide();
                $('#nextButtonId').show();
                $('#proceedToConfigureBTN').remove();
                $('#activeMainTabId .current').addClass("step-active");
            }
        }
    })
}
function tabSwitch(type) {
    var totalSteps = $("#activeMainTabId .activeTabMainDiv-nav__item").length;
//    $("#nextButtonId").on("click", function () {
//        return false;
//    });
    $(".activeTabMainDiv-nav .activeTabMainDiv-nav__item:first-child").addClass("step-active");
    if (type == 'next') {
        let fchildId = $('#activeMainTabId').children().first().attr('id');
        let lchildID = $('#activeMainTabId').children().last().attr('id');
        if (fchildId != null && fchildId != undefined && fchildId != "" && fchildId == 'tab0'
                && lchildID != null && lchildID != undefined && lchildID != "" && lchildID == 'tab4') {
            if ($('#' + fchildId).hasClass('current')) {
                $(".showConfigTimer").show();
                $(".showTimerWithImage").show();
                $(".showConfigTimer").val("00:00");
                showProcessConfigTimer();
            }
        }
        $('#activeMainTabId .current').next().click();
        if (!($('#' + fchildId).hasClass('current'))) {
            $('#preButtonsId').show();
        }
        if ($('#' + lchildID).hasClass('current')) {
            $('#nextButtonId').hide();
            $('#proceedToConfigureBTN').remove();
            $('#activeTabMainDiv-c2a3d74 .pre_nextButtonClass').append("<button class=\"proceedToConfigureBTN\" id=\"proceedToConfigureBTN\" onclick=\"setProceedToConfigure()\"><img class='hammer_icon' src='./images/gavel.png' alt='' ><span>Commit To Configure</span></button>");
//            $('#activeTabMainDiv-c2a3d74 .pre_nextButtonClass').append("<button class=\"proceedToConfigureBTN\" id=\"proceedToConfigureBTN\" onclick=\"setProceedToConfigure()\">Commit To Configure</button>");
        }
    } else if (type = 'pre') {
        let lchildID = $('#activeMainTabId').children().last().attr('id');
        if ($('#' + lchildID).hasClass('current')) {
            $('#nextButtonId').show();
            $('#proceedToConfigureBTN').remove();
        }
        let getBack = $('#activeMainTabId').children()
        $(getBack).each(function (index, value) {
            if ($(this).hasClass('current')) {
                $(this).prev().click();
                return false;
            }
            $(".activeTabMainDiv-nav .activeTabMainDiv-nav__item").eq($(this).parents(".activeTabMainDiv-content__item").index() - totalSteps).removeClass("step-active");
            $(this).parents(".activeTabMainDiv-content__item").removeClass("step-active").prev().addClass("step-active");
        });
        let fchildId = $('#activeMainTabId').children().first().attr('id');
        if ($('#' + fchildId).hasClass('current')) {
            $('#preButtonsId').hide();
            $('#proceedToConfigureBTN').remove();
        }
    }
}
function showProcessConfigTimer() {
    var $worked = $("#worked");

    function update() {
        var myTime = $worked.html();
        var ss = myTime.split(":");
        var dt = new Date();
        dt.setHours(0);
        dt.setMinutes(ss[0]);
        dt.setSeconds(ss[1]);

        var dt2 = new Date(dt.valueOf() + 1000);
        var temp = dt2.toTimeString().split(" ");
        var ts = temp[0].split(":");

        $worked.html(ts[1] + ":" + ts[2]);
        setTimeout(update, 1000);
    }

    setTimeout(update, 1000);
}
function showparrentTabContent(componentId, componentType, role) {
    $(".searchTabsULClass").find('li').removeClass("active");
    $(event.currentTarget).addClass("active");
    if (componentType == 'GRID') {
        if ($("#" + componentId).hasClass("jqx-grid")) {
            $('#' + componentId).show();
            $('#' + componentId).jqxGrid('destroy');
        }
    }
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    if (fioriThemeCheck) {
        $(".searchTabsULClass").find('li').removeClass("active");
        $(event.currentTarget).addClass("active");
    }
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getCloudGrid',
        data: {
            'gridId': componentId,
            'roleId': role
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            $(".showTimerWithImage").show();
            showProcessConfigTimer();
            $(".activeTabMainDiv-nav .activeTabMainDiv-nav__item").on("click", function () {
                $(this).prevAll().addClass("step-active");
//        $(this).addClass("step-active");
                $(this).nextAll().removeClass("step-active");
                $(".activeTabMainDiv-content__item").removeClass("step-active");
            });


            if (!($("#" + componentId).length > 0)) {
                let childData = $('#activeTabInnercontentDiv').children();
                $(childData).each(function (index, val) {
                    let comid = val.id
                    $('#' + comid).hide();
                });
                $('#activeTabInnercontentDiv').html("<div class=\"activeTabMainDiv-content__item gridMainTabDivItem-content\" id = '" + componentId + "'></div>\n");
            }
            if (componentType != null && componentType == 'GRID') {
                if (fioriThemeCheck) {
                    $("#searchTabContentID").html("<div id ='" + componentId + "'></div>");
                } else {
                    $("#inneractiveTabMainDiv").html("<div id ='" + componentId + "'></div>");
                }
                gridConfig(response, 0, [], componentId);
            } else if (componentType != null && componentType == 'NESTEDGRID') {
                $("#inneractiveTabMainDiv").html("<div id ='" + componentId + "'></div>");
                getNestedGridConfig(response, componentId, "Y", {}, "", "", "", "");
            } else if (componentType != null && componentType == 'FORM') {
                $("#inneractiveTabMainDiv").html("<div id ='" + componentId + "'></div>");
                getBasicSubscriptionDetails();

            } else if (componentType != null && componentType == 'CLUSTER') {
                if (fioriThemeCheck) {
                    $("#searchTabContentID").html("<div id ='" + componentId + "'></div>");
                } else {
                    $("#inneractiveTabMainDiv").html("<div id ='" + componentId + "'></div>");
                }
                getclusterComponent(componentId, role, 'PRODUCT', 'N')
            } else if (componentType != null && componentType == 'TAB') {
                getNestedtab(componentId, role);
            }
            setTimeout(function () {
                setIntroFn(componentId, role);
            }, 4000);
        }

    });
}
function getclusterComponent(clusterId, roleId, domain, tabsflag) {
    showLoader();
    $("#inneractiveTabMainDiv").html("");
    try {
//        let currentTabName = event.currentTarget.innerText;
        let currentTabName = $(event.currentTarget).find(".submenuText").text();
        var tabname = currentTabName.split('\n')[0];

    } catch (e) {

    }

    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "getclusterFormData",
        cache: false,
        async: false,
        data: {
            clusterId: clusterId,
            roleId: roleId,
            domain: domain,
            tabsflag: tabsflag
        },
        success: function (response) {
            stopLoader();
            var masterObject = response['masterObject'];
            var masterId = masterObject['masterId'];
            var tabstring = response['tabsString'];
            var tabhdString = response['tabhdString'];
            var tabsHeadersString = response['tabsHeadersString'];
            if (tabsHeadersString != null && tabsHeadersString != undefined && tabsHeadersString != ''
                    && tabsflag != null && tabsflag != undefined && tabsflag != '' && tabsflag == 'Y')
            {
                $("#dxpHomeContent").hide();
                $("#dxpFormContent").hide();

                $("#dxpClusterMainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 270}]});
                $("#dxpClusterSecondDiv").html("");
                $("#dxpClusterFirstDiv").html("");
                $("#dxpClusterFirstDiv").html(tabsHeadersString);
                $("#dxpClusterSecondDiv").html("<div id='clusterFormData' class = 'dxpclusterFormDataClass' ></div>");
                $("#clusterSplitter").addClass("customSplitterHt")
//                $("#inneractiveTabMainDiv").html(tabsHeadersString);
//                $("#inneractiveTabMainDiv").html("<div id='clusterFormData' ></div>");                
                if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {
                    showSelectedTabContent(null, 'dxpClusterTab', 'dxpClusterContent', tabname, 'N');
                } else {
                    showSelectedTabContent(null, 'dxpClusterTab', 'dxpClusterContent', 'View Cluster', 'N');
                }
                if ($("#dxpTabs").is(":visible")) {

                } else {
                    toggleTabsAndMenus(event);
                }
            } else {
                $("#dxpGridContent").hide();
                $("#dxpFormContent").hide();
                $("#dxpHomeContent").hide();
                $("#dxpClusterContent").hide();
                $("#dxpCluster").html("");
                $("#dxpCluster").show();
//                $("#inneractiveTabMainDiv").html("<div id='clusterFormData' ></div>");
                $("#dxpCluster").html("<div id='clusterFormData' class = 'dxpclusterFormDataClass' ></div>");
                $("#clusterSplitter").removeClass("customSplitterHt");

                if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {
                    showSelectedTabContent(null, 'dxpClusterTab2', 'dxpCluster', tabname, 'N');
                } else {
                    showSelectedTabContent(null, 'dxpClusterTab2', 'dxpCluster', 'View Cluster', 'N');
                }
                if ($("#dxpTabs").is(":visible")) {

                } else {
                    toggleTabsAndMenus(event);
                }

            }
            $("#clusterFormData").html(tabstring);

            var theme = "ui-redmond";
            $("#" + masterId + "_TAB").jqxTabs({position: 'top', theme: theme, reorder: true, autoHeight: true, keyboardNavigation: true, scrollPosition: 'both'});
            $("#" + masterId + "_TAB ul").show();
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
            if (masterObject != null) {
                var paramArray = [];
                var masterGridObj = masterObject['masterGridObj'];
                clusterGridConfig(masterGridObj, masterGridObj['gridId'], masterId, masterObject['compType'], "Y", paramArray, "", "", "Y");
                if (tabsHeadersString != null && tabsHeadersString != undefined && tabsHeadersString != '') {
                    $("#clusterSplitter").jqxSplitter({width: "1390px", height: "750px", orientation: 'horizontal'});
                    if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {
                        showSelectedTabContent(null, 'dxpClusterTab', 'dxpClusterContent', tabname, 'N');
                    } else {
                        showSelectedTabContent(null, 'dxpClusterTab', 'dxpClusterContent', 'View Cluster', 'N');
                    }

                }
            }

        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }
    });
    stopLoader();
}
function showchildTabContent(componentId, componentType, role, contentDivId, kdsColumnName) {
    showLoader();
    localStorage.removeItem("kdsColumnName");
    localStorage.setItem("kdsColumnName", kdsColumnName);
    $(event.currentTarget.parentNode.children).map(function () {
        $(this).removeClass('current');
        try {
            var img = $(this).find("img");
            img.prop("src", img.prop("src").replace("White", "Blue"));
        } catch (ee) {

        }
    });
    event.currentTarget.classList.add('current');
//    $(this).attr('src', $(this).attr('src').replace(/Blue/i, "White"));
    try {
//     var currentTarget = event.currentTarget.firstchild.find;
        var img = $(event.currentTarget.children).find("img")
        img.prop("src", img.prop("src").replace("Blue", "White"));
        console.log(img);
    } catch (ee) {
    }

    if (componentType == 'GRID') {
        if ($("#" + componentId).hasClass("jqx-grid")) {
            $('#' + componentId).show();
            $('#' + componentId).jqxGrid('destroy');
        }
    }

    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getCloudGrid',
        data: {
            'gridId': componentId,
            'roleId': role
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (!($("#" + componentId).length > 0)) {
                let childData = $('#activeTabInnercontentDiv').children();
                $(childData).each(function (index, val) {
                    let comid = val.id
                    $('#' + comid).hide();
                });
                if (componentType != null && componentType == 'TREENESTEDGRID') {
                    var divId = 'treeNestedGriddivId';
                    $('#activeTabInnercontentDiv').html("<div class=\"activeTabMainDiv-content__item gridMainTabDivItem-content\" id = '" + divId + "'></div>\n");
                } else {
                    var divId = componentId;
                    if (contentDivId != null && contentDivId != undefined && contentDivId != "") {
                        if (response.gridInitParamObj['uuu_gridWrapperDivFlag'] != null && response.gridInitParamObj['uuu_gridWrapperDivFlag'] != ''
                                && response.gridInitParamObj['uuu_gridWrapperDivFlag'] != 'null' && response.gridInitParamObj['uuu_gridWrapperDivFlag'] != 'undefined'
                                && response.gridInitParamObj['uuu_gridWrapperDivFlag'] != undefined && response.gridInitParamObj['uuu_gridWrapperDivFlag'] == "Y") {
                            $('#' + contentDivId).html("<div class=\"kdsFormGridWrapperClass\"><div class=\"activeTabMainDiv-content__item gridMainTabDivItem-content\" id = '" + divId + "'></div></div>\n");
                        } else {
                            $('#' + contentDivId).html("<div class=\"activeTabMainDiv-content__item gridMainTabDivItem-content\" id = '" + divId + "'></div>\n");
                        }
                    } else {
                        $('#activeTabInnercontentDiv').html("<div class=\"activeTabMainDiv-content__item gridMainTabDivItem-content\" id = '" + divId + "'></div>\n");
                    }

                }
            }
            if (componentType != null && componentType == 'GRID') {
//                 $("#inneractiveTabMainDiv").html("<div id ='"+componentId+"'></div>");
                $("#activeTabMainDiv-content").html("<div id ='" + componentId + "'></div>");
                gridConfig(response, 0, [], componentId);
            } else if (componentType != null && componentType == 'NESTEDGRID') {
//                 $("#inneractiveTabMainDiv").html("<div id ='"+componentId+"'></div>");
                $("#activeTabMainDiv-content").html("<div id ='" + componentId + "'></div>");
//                gridConfig(response, 0, [], componentId);                
                getNestedGridConfig(response, componentId, "Y", {}, "", "", "", "");
            } else if (componentType != null && componentType == 'FORM') {
//                  $("#inneractiveTabMainDiv").remove();
                getBasicSubscriptionDetails();
            } else if (componentType != null && componentType == 'TAB') {
                getNestedtab(componentId, role);
            } else if (componentType != null && componentType == 'TREENESTEDGRID') {
                try {
                    $("#" + divId).html("");
//                $("#treeNestedGriddivId").html("");    
                } catch (es) {
                    console.log(es);
                }
//                $("#activeTabMainDiv-content").html("<div id ='htmltreeNestedGrid" + componentId + "'></div>");
                getTreeNestedGrid(componentId, divId);
            }
        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });


}
function getNestedtab(tabId, roleId) {
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getNestedTab',
        data: {
            'tabId': tabId,
            'roleId': roleId
        },
        traditional: true,
        cache: false,
        success: function (response) {

            var strNav = response['strNav'];
            var defaulttabObj = response['defaulttabObj'];
//                  $("#activeTabMainDiv-c2a3d74").html("");
            if (fioriThemeCheck) {
                $('#searchTabContentID').html(strNav);
            } else {
                $("#inneractiveTabMainDiv").html(strNav);
            }
            var gridId = defaulttabObj['tabComponentId'];
            var type = defaulttabObj['tabComponentType'];

            if (type != null && type == 'GRID') {
//                 gridConfig(response, 0, [], gridId);
                showNestedSelectedTabContent(gridId, type, roleId);

            } else if (type != null && type == 'FORM') {
                getBasicSubscriptionDetails();

            } else {
                showNestedSelectedTabContent(gridId, type, roleId);
            }
            let tabDiv = $('.activeTabMainDiv').find('.activeTabInnerBtnDiv');
            $(tabDiv.children).map(function () {
                $(this).removeClass('current');
            })
            tabDiv.children()[1].classList.add('current');
            try {
//     var currentTarget = event.currentTarget.firstchild.find;
                var img = $(tabDiv.children()[1].children).find("img")
                img.prop("src", img.prop("src").replace("Blue", "White"));
            } catch (ee) {
            }

            stopLoader();


        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });
}
function showNestedSelectedTabContent(componentId, componentType, role) {
    if (componentType == 'GRID') {
        if ($("#" + componentId).hasClass("jqx-grid")) {
            $('#' + componentId).show();
            $('#' + componentId).jqxGrid('destroy');
        }
    }
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getCloudGrid',
        data: {
            'gridId': componentId,
            'roleId': role
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (!($("#" + componentId).length > 0)) {
                let childData = $('#activeTabInnercontentDiv').children();
                $(childData).each(function (index, val) {
                    let comid = val.id
                    $('#' + comid).hide();
                });
                $('#activeTabInnercontentDiv').html("<div class=\"activeTabMainDiv-content__item gridMainTabDivItem-content\" id = '" + componentId + "'></div>\n");
            }
            if (componentType != null && componentType == 'GRID') {
                gridConfig(response, 0, [], componentId);
            } else if (componentType != null && componentType == 'NESTEDGRID') {
                $("#activeTabMainDiv-content").html("<div id ='" + componentId + "'></div>");
                getNestedGridConfig(response, componentId, "Y", {}, "", "", "", "");
            } else if (componentType != null && componentType == 'FORM') {
                getForm();
            } else if (componentType != null && componentType == 'TAB') {
                getNestedtab(componentId, role);
            }
        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });


}
function openAutoTestingData() {
    showLoader();
    $.ajax({
        type: "POST",
        url: "getAutoTestingData",
        cache: false,
        data: {
        },
        success: function (response) {
            stopLoader();
            //TODO: Need to add Loader
            if (response != null && !jQuery.isEmptyObject(response)) {
                var responseMsg = response['result'];
                var resultobj = JSON.parse(responseMsg);
                var tablediv = "<table class='visionAotomationClass' border=\"1px\">"
                        + "<tbody>"
                for (var key in resultobj) {
                    console.log(key);
                    console.log(resultobj[key]);
                    tablediv += "<tr><td>" + key + "</td><td>" + resultobj[key] + "</td></tr>"
                }
                +"</tbody>"
                        + "</table>";
                $("#dialog1").html(tablediv);
                $("#dialog1").dialog({resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    width: 450,
                    height: "auto",
                    maxHeight: 1000,
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
                        $(".ui-dialog").addClass("editDashboardPopup");

                    },
                    beforeClose: function (event, ui) {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
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
function setProceedToConfigure() {

    try {
        $("#dialog1").html(labelObject['Please confirm to Proceed for configuring your LG iMDRM Instance?'] != null ? labelObject['Please confirm to Proceed for configuring your LG iMDRM Instance?'] : 'Please confirm to Proceed for configuring your LG iMDRM Instance?' );
        $("#dialog1").dialog({resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            width: 450,
            height: "auto",
            maxHeight: 1000,
            fluid: true,
            buttons: [{
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {
                        showLoader();
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        $.ajax({
                            type: 'POST',
                            dataType: 'JSON',
                            url: 'setProcessToConfigureLGInstance',
                            traditional: true,
                            cache: false,
                            async: true,
                            success: function (result) {
                                stopLoader();
                                var message = result.message;
                                if (message != '' && message != 'null')
                                {
                                    $("#dialog").html(labelObject[message] != null ? labelObject[message] : message);

                                    $("#dialog").dialog({resizable: false,
                                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                        modal: true,
                                        width: 450,
                                        height: "auto",
                                        maxHeight: 1000,
                                        fluid: true,
                                        buttons: [{
                                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                                click: function () {
                                                    $(this).html("");
                                                    $(this).dialog("close");
                                                    $(this).dialog("destroy");
                                                    showparrentTabContent('LG_SUBSCRIPTION_DETAILS', 'FORM', 'MM_ADMIN');
                                                }
                                            }],
                                        open: function () {
                                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                            $(".visionHeaderMain").css("z-index", "999");
                                            $(".visionFooterMain").css("z-index", "999");
                                            $(".ui-dialog").addClass("editDashboardPopup");

                                        },
                                        beforeClose: function (event, ui) {
                                            $(".visionHeaderMain").css("z-index", "99999");
                                            $(".visionFooterMain").css("z-index", "99999");
                                        }
                                    });
                                }

                            }
                        })
                    }
                },
                {text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                }

            ],
            open: function () {
                $("#dialog1").closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
                $(".ui-dialog").addClass("editDashboardPopup");

            },
            beforeClose: function (event, ui) {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });
    } catch (e) {
        stopLoader();
    }

}
function setIntroCloseAndOnFn() {
    let check = $(event.target).prop('checked');
    if (check) {
        localStorage.setItem('defIntro', 'N');
    } else {
        localStorage.setItem('defIntro', 'Y');
    }
}
function opentab(tabid) {
    var tablinks = document.getElementsByClassName("buttonClass");
    var tabInnerContents = document.getElementsByClassName("passDataInfo");
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabInnerContent of tabInnerContents) {
        tabInnerContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabid).classList.add("active-tab");
}
function openFeedBackPagePopup() {
    $('#chartViewId').html("");
    $('#chartViewId').remove();
    showLoader();
    try {
        $(".homeTabsContentlistwrapper").find(".active").removeClass("active");
        $(event.target).closest("li").addClass("active");
    } catch (e) {

    }
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: 'setFeedBackCloud',
        data: {},
        traditional: true,
        cache: false,
        async: true,
        success: function (data, textStatus, jqXHR) {
            stopLoader();
            showFeedBackDilog(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            stopLoader();
        }
    });
}
function showFeedBackDilog(data) {
    closesettingPannel();
    let checkbox = $("#cb-switch");//09-06-2025
    var fioriThemeCheck = checkbox.is(":checked");
    if (fioriThemeCheck) {
        $('.dxpSplitterTabsContent').hide();
        $('#dxpHomeContent').show();
        $('#dxp2TabsWithGridContent').show();
        $('#dxp2TabsWithGridContent').html(data.html);
    } else {//09-06-2025

        $("#dialog1").html(data.html);
        $("#dialog1").dialog({resizable: false,
            title: labelObject['Leave Feedback'] != null ? labelObject['Leave Feedback'] : 'Leave Feedback',
            modal: true,
            width: 850,
            height: "auto",
            maxHeight: 800,
            fluid: true,
            dialogClass: "dialogFactsAndStatsDiv event-Open_feedBack-Dialog",
            close: function () {
                $(this).html("");
                $(this).dialog("close");
                $(this).dialog("destroy");
            },
            beforeClose: function (event, ui)
            {
                $(this).html("");
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });
    }
    categoryWiseChartRatingView();
    $('#rating-input-feedback input').click(function () {
        let val = $(this).val();
        $('#rating-input-feedback-field').val(val);
    });
    $('#suggestion-input-feedback').val('');

    $('#resetFeedbackBtn').click(function () {
        $('#feedback-input-field .feedback').each(function (i, element) {
            if (element.value != '') {
                $(this).val('');
            }
        });
    });
}
function submitFeedback() {
    let obj = {};
    let condition = true;
    $('#feedback-input-field .feedback').each(function (i, element) {
        if (element.value != '') {
            obj[element.name] = element.value;
            condition = true;
            $(this).css('border', '1px solid #ccc');
        } else {
            $(this).css('border', '1px solid red');
            condition = false;
            return false;
        }
    });
    if (condition) {
        showLoader();
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: 'saveFeedbackData',
            data: obj,
            traditional: true,
            cache: false,
            async: true,
            success: function (data, textStatus, jqXHR) {
                stopLoader();
                if (data['status']) {
                    showMesg("Submitted successfully");
                    const stars = document.querySelectorAll('.rate-the-app input[name="rating"]');
                    stars.forEach(star => {
                        star.checked = false; // Uncheck each star
                    });
                    $('#feedback-input-field .feedback').each(function (i, element) {
                        if (element.value != '') {
                            element.value = '';
                        }
                    });
                    categoryWiseChartRatingView();
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                stopLoader();
            },
        });
    }
}
function changeLanguage() {
    var languagelist;
    $.ajax({
        type: "POST",
        url: 'languageChange',
        datatype: 'html',
        data: {

        },
        traditional: true,
        cache: false,
        success: function (response) {
            languagelist = response;
            var result = " <div id='chnageLanguageDivId'>"
                    + "<table class='visionLanguageFormTable'>"
                    + " <tr>"
                    + " <td class='visionLanguageFormData'><span class='visionLanguageFormLabel'> Language:</span></td>"
                    + " <td class='visionLanguageFormData'><select id='language' name='language'>";
            result += languagelist
                    + " </select></td>"
                    + " </tr>"
                    + " </table></div>";

            var modalObj = {
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Change Language',
                body: result
            };
            var buttonArray = [
                {
                    text: 'Apply Changes',
                    click: function () {
                        var value = $('#language').val();
                        applyLang(value);

                    },
                    isCloseButton: false
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
            $(".modal-backdrop").show();
            $(".modal-dialog").addClass("modal-md");
            $(".dataDxpSplitterValue").addClass("changeLanguageClass");

        }
    });
}
function applyLang(value) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'applylanguage',
        data: {
            language: value
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            var modalObj = {
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Change Language',
                body: "<div id='successmsg'>Language is changed successfully!</div>"
            };
            var buttonArray = [
                {
                    text: 'OK',
                    click: function () {
                    },
                    isCloseButton: false
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
            $(".modal-backdrop").show();
            $(".modal-dialog").addClass("modal-md");
            $(".dataDxpSplitterValue").addClass("changeLanguageClass");
            navigationMenuUrl('homePage');

        }
    });
}
//DEcomposition tree start
function dxpDeCompTreefN(gridID, rollId, recordNo) {
    showLoader();
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: 'getDecTreeGridData',
        traditional: true,
        cache: false,
        async: true,
        data: {
            gridId: gridID,
            rollId: rollId,
            recordNo: recordNo
        },
        success: function (data, textStatus, jqXHR) {
            stopLoader();
            treeDataArr = [];
            $('#dxpDecomposeTreeClass').remove();
            $('#dxpDecomposeTreeMainDiv').remove();
            $("#dialog1").html(data.html);
            $("#dialog1").dialog({resizable: false,
                title: labelObject['Decomposition Tree'] != null ? labelObject['Decomposition Tree'] : 'Decomposition Tree',
                modal: true,
                width: 1200,
                height: 500,
                maxHeight: 900,
                fluid: true,
                dialogClass: "event-Open_De-Tree-Dialog",
                open: function () {
                    $(".event-Open_De-Tree-Dialog").css("z-index", "9999");

                }
            });
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
function decompositionTreeSettingsOpenPopup() {
    $('#popupSettingsPanel').toggle('slide', {direction: 'right'}, 800);
    $('#deComMainDiv input').each(function (i, v) {
        let val = v.value;
        $('#colorAdderlevelP' + i).val(val);
    });
}
function decompositionTreeSettingsClose() {
    $('#popupSettingsPanel').toggle('slide', {direction: 'right'}, 800);
}
function popUpNestedObjToArray(daObj, flag) {

    if (daObj instanceof Array) {
        for (var i = 0; i < daObj.length; i++) {
            nestedObjToArray(daObj[i]);
        }
    } else {
        processObject(daObj);
    }

    if (flag) {
        createTableFromArray(treeDataArr);
    }
}
//function popUpNestedObjToArray(daObj, flag) {
//    var result = null;
//    if (daObj instanceof Array) {
//        for (var i = 0; i < daObj.length; i++) {
//            result = nestedObjToArray(daObj[i]);
//        }
//    } else
//    {
//        for (var prop in daObj) {
//            if (daObj[prop] instanceof Array) {
//                if (daObj.name != undefined && daObj.type != undefined) {
//                    treeDataArr.push(
//                            {
//                                name: daObj.name,
//                                parent: daObj.parent, //assigning parent obj to daobj for its children 
//                                type: daObj.type, //type is nothing but depth of the tree
//                            }
//                    );
//                }
//                result = nestedObjToArray(daObj[prop], false);
//            }
//        }
//    }
//    if (flag) {
//        createTableFromArray(treeDataArr); //10522 
//    }
//}
function changeTreeColorPoppup(color, depthLevel, node) {
    $('#deComTreeNodeColor' + depthLevel).val(color);
    var nodeDepthLevel = $("g[nodeDepth=nodeDepthLevel" + depthLevel + "]");
    $.each(nodeDepthLevel, function (index, ele) {
        console.log(ele);
        $(this).css('stroke', color);
        changeLinkColour(ele, color);
    });


}
function changeLinkColour(node, color) {
    try {
        node.selectAll(".link")
                .filter(d => d.source === node || d.target === node)
                .attr("stroke", color);
    } catch (e) {

    }
}
//DEcomposition tree end
function hoverCard(imgsrc, header, $this) {
    var ssUsername = $("#ssUsername").val();
    if (!(header != null && header != "" && header != undefined)) {
        header = "Notification"
    } else if (ssUsername != "" && ssUsername == header) {
        header = "Profile"
    }
    $(($this)).popover({
        html: true,
        container: "body",
        trigger: "hover",
        placement: 'bottom',
        title: header ? header : "",
        content: function () {
            return $(".showCustomDiscriptionPopUp").html();
        }
    });
    $("#hover-containerId").hide();


    $.ajax({
        type: 'POST',
        dataType: 'html',
        async: false,
        url: "getHeaderButtonsContent",
        traditional: true,
        cache: false,
        data: {
            header: header,
        },
        success: function (data, textStatus, jqXHR) {
            if (data != null && data != undefined && data != '') {
                $("#hover-containerId").append(data);
            }
        }
    });

}
function categoryWiseChartRatingView() {

    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        async: false,
        url: "getCategoryWiseRatingData",
        traditional: true,
        cache: false,
        success: function (data, textStatus, jqXHR) {
            if (data != null && data != undefined && data != '') {
                var chartsData = data['categoryData'];

                for (var category in chartsData) {
                    if (chartsData.hasOwnProperty(category)) {
                        var categoryInfo = chartsData[category];

                        var chartData = {
                            values: categoryInfo['values'],
                            labels: categoryInfo['labels'],
                            textinfo: "label+value",
                            type: 'pie'
                        };

                        var layout = {
                            height: 350,
                            width: 350,
                            title: 'Reviews for ' + category,
                            margin: {
                                t: 50,
                                b: 50,
                                l: 50,
                                r: 50
                            }
                        };
                        var sobj = {
                            displayModeBar: false,
                            scrollZoom: true,
                            responsive: true
                        };

                        var chartId = 'chartViewId-' + category;
                        $('<div>').attr('id', chartId).appendTo('#chartViewId');
                        $('#' + chartId).attr('labelsData', categoryInfo['labels'])
                        $('#' + chartId).attr('valuesData', categoryInfo['values'])
                        Plotly.newPlot(chartId, [chartData], layout, sobj);

                    }
                }
                $("#chartViewId").slick({
                    dots: false,
                    arrows: true,
                    autoplay: true,
                    //        fade: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 4000,
                    speed: 2000,
                    pauseOnHover: true,
                    responsive: [
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        }


                    ]
                            //        cssEase: 'linear'
                });

            }
        }
    });
}
function getFeedbackRatingChart(chartType) {

    var chartId = $('#chartViewId').find('.slick-active').children().children().attr("id");
    var labels = $('#' + chartId).attr('labelsData');
    var values = $('#' + chartId).attr('valuesData');


    labels = labels.split(',');
    values = values.split(',');


    var sobj = {
        displayModeBar: false,
        scrollZoom: true,
        responsive: true
    };

    var data;
    if (chartType != '' && chartType != undefined && chartType === 'column') {
        data = [{
                x: labels,
                y: values,
                type: 'bar'
            }];
    } else if (chartType != '' && chartType != undefined && chartType === 'bar') {
        data = [{
                x: values,
                y: labels,
                orientation: 'h',
                type: 'bar'
            }];
    } else if (chartType != '' && chartType != undefined && chartType === 'pie') {
        data = [{
                values: values,
                labels: labels,
                type: 'pie'
            }];

    } else if (chartType != '' && chartType != undefined && chartType === 'donut') {
        data = [{
                values: values,
                labels: labels,
                hole: 0.4,
                type: 'pie'
            }];

    } else if (chartType != '' && chartType != undefined && chartType === 'lines') {
        data = [{
                y: values,
                x: labels,
                type: 'scatter',
                mode: 'lines'
            }];

    } else if (chartType != '' && chartType != undefined && chartType === 'scatter') {
        data = [{
                y: values,
                x: labels,
                mode: 'markers'
            }];

    }
    var layout = {
        height: 350,
        width: 350,
        title: "Reviews for " + chartId.replace("chartViewId-", "")
    };

    Plotly.newPlot(chartId, data, layout, sobj);
}
function togglePRange(rowid) {
    $("#Pto" + rowid).toggle();
    $("#Ptbmin" + rowid).toggle();
    $("#Ptbmax" + rowid).toggle();
    $("#Ptb" + rowid).toggle();
    if ($("#Ptb" + rowid).css('display') != 'none') {
        $("#Ptbmin" + rowid).val("");
        $("#Ptbmax" + rowid).val("");
        $("#Pddw" + rowid).val("EQUALS");
    } else {
        $("#Pddw" + rowid).val("BETWEEN");
        $("#Ptb" + rowid).val("");
    }

}
function showRetrivalData(searchId) {
    $("#dxp1Seconddiv").html("");
    $("#SearchResult").attr("disabled", false);
    $("#searchId").val(searchId);
    $("#SearchResult").val("");
    $(".accordion").remove();
    $("#mainDxpSplitter").hide();
    $("#searchDxpSplitter").hide();
    $("#dxpClassficationAppendClass").hide();
    try {
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridisImport", "");
    } catch (e) {

    }

    reqType = $("#dxpAdavanceSearchOptions").val();
    if (reqType != null && reqType != undefined && reqType != '' && (reqType == 'PR' || reqType == 'S')) {
        $("#searchDxpSplitter").hide();
        $("#firstDxpSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 75}]});
        $("#secondDxpSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 270}]});
        $("#thirdDxpSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '100%'}]});
    } else if (reqType != null && reqType != undefined && reqType != '' && reqType == 'C') {
        $("#SearchResult").attr("disabled", true);
        $("#searchDxpSplitter").css("display", "none");
        $(".visionjqxTreeDiv").show();
        $("#dxpClassficationAppendClass").show();
        $("#VisualizePageBody").hide();
        getClassificationForm(searchId, reqType);


    } else {
        if ((reqType != 'C' || reqType != 'PR' || reqType != 'S') && reqType != 'D' && reqType != 'DB') {
            $(".visionjqxTreeDiv").hide();
            $("#VisualizePageBody").hide();
        }
        $("#dxpClassficationAppendClass").hide();
        //$("#searchDxpSplitter").show();
        $("#searchDefaultSplitter").show();
        //$("#mainDxpSplitter").hide();
        $("#searchsettingsSplitter").val('');
        $(".dxpDictionaryDotsButton").hide();
        $(".dxpDictionaryFormData").hide();
        $("#searchresultsSplitter").html('');
        $("#searchResults").remove();
        $("#intellisense").hide();
        $.ajax({
            type: "POST",
            url: 'getParamSearchForm',
            data: {
                'searchId': searchId,
                'reqType': reqType,
                pprDrpdwnDomain: "",
            },
            traditional: true,
            cache: false,
            success: function (response) {
                $("#dxpClassficationAppendClass").hide();
                //$("#searchDxpSplitter").show();
                $(".visionjqxTreeDiv").hide();
                $("#DxpParamSplitterDotsClass").show();
                if (response != null && response != '') {
                    var responseObj = JSON.parse(response);
                    getPersonalizationDataOpt('', reqType);
                    getClassificationSuggetions();
                    $("#dxp1Seconddiv").html(responseObj['formString']);
                    if (reqType != null && reqType != undefined && reqType != '' && (reqType == 'D')) {
                        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '0%'}]});
                        try {
                            $('#dxp1MainSplitter').jqxSplitter('expand');
                        } catch (e) {

                        }
                        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'View Tabs Data', 'N');
                    } else {
                        $("#dxp1Seconddiv").addClass("PilogresearchSearch");
                        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '30%'}]});
                        try {
                            $('#dxp1MainSplitter').jqxSplitter('expand');
                        } catch (e) {

                        }

                        //                        $("#dxp11MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '30%'}]});
                        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'View Tabs Data', 'N');
                    }
                    var jsDateItems = responseObj['dateArray'];
                    var dateArraySize = responseObj['dateArraySize'];
//                console.log("jsDateItems:::" + dateArraySize);
                    if (dateArraySize != null && dateArraySize != 0) {

                        for (var i = 0; i < jsDateItems.length; i++) {
                            console.log("tbid:::" + jsDateItems[i].tbid);
                            $("#" + jsDateItems[i].tbid).on('change', function () {
                                $(this).focus();
                            })

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

                    }

                }
            },
            error: function (e) {
                console.log(e);
                // stopLoader();
                sessionTimeout(e);
            }

        });
    }
}
function introONOFFBtnFun(element) {
    if ($('.ui-widget-overlay').length > 0) {
        return;
    }
    let imgElement = $("#introON_OFFBtnId").find("img");
    if (imgElement.attr("src").endsWith("images/Bulb_Icon_Widget.png")) {
        imgElement.attr("src", "images/Bulb_Icon_Widget_off.png");
        $("#hintImageID").hide();
    } else {
        imgElement.attr("src", "images/Bulb_Icon_Widget.png");
        $("#hintImageID").show();
    }
}
function disableEnableAiLens(element) {
    let imgElement = $("#aiLensToggleBtnId").find("img");
    if (imgElement.attr("src").endsWith("images/aiEnable.png")) {
        imgElement.attr("src", "images/ai_disable.png");
        $(".openAiButton").hide();
        $(".OpenAisection").hide();
    } else {
        imgElement.attr("src", "images/aiEnable.png");
        $(".openAiButton").show();
        $(".OpenAisection").show();
    }
}

function getTaskListOnClickInfo()
{
    try {
        try {
            $(".visionTask").attr("data-fetchFlag", "N");
        } catch (et) {

        }
        $("#prev").click(function () {
            var recordsfrom = parseInt($("#previterationCountId").val());
            var showrows = parseInt($('#selectRecordsCount').val());
            nextClickCount = nextClickCount - 1;
            if (nextClickCount >= 0) {
                recordsfrom = (nextClickCount * showrows) + 1
                if (nextClickCount != null && nextClickCount >= 0) {
                    fetchTasks('N', 'prev', recordsfrom, showrows);
                }
            }
            if (nextClickCount < 0) {
                nextClickCount = 0;
            }
        });
        $("#next").click(function () {
            var recordsfrom = parseInt($("#nextiterationCountId").val());
            var totalRecordsCount = parseInt($("#totalRecordsCount").val());
            var showrows = parseInt($('#selectRecordsCount').val());
            if (recordsfrom !== null && recordsfrom < totalRecordsCount) {
                nextClickCount++;
                recordsfrom = (nextClickCount * showrows) + 1
                fetchTasks('N', 'next', recordsfrom, showrows);
            }
        });
        $("#Task").click(function () {
            var recordsfrom = 0;
            nextClickCount = 0;
            var showrows = 10;
            if ($('.visionTask').css('display') !== 'none')
            {
                $("#Task img").attr('src', 'images/iDXPUI5TaskList.svg');
                $('.visionTask').hide();
                $('.visionmenuinner').removeClass("visionMenuAdjust");
            } else
            {
                $("#Task img").attr('src', 'images/iDXPUI5RightDoubleArrow.svg');
                var fetchFlag = $(".visionTask").attr("data-fetchFlag");//data-fetchFlag
                //                            $('.visionTask').show();
                //                                $('.visionTask').show("slide", {direction: "right"}, 900);
                if (fetchFlag != null && fetchFlag == 'N') {
                    $(".visionTask").attr("data-fetchFlag", "Y");
                    fetchTasks(fetchFlag, 'next', recordsfrom, showrows);
                } else {
                    $('.visionTask').show();
                }
                $('.visionmenuinner').addClass("visionMenuAdjust");

                $('body,html').stop().animate({
                    scrollTop: 0
                }, 1000);
                //                            $('.visionmenuinner').addClass("visionMenuAdjust").show("slide", {direction: "left"}, 1000);


            }

        });
        nextClickCount = 0;
//$("#prev").append("<a href='#' >  &#9668;  </a>");
//$("#next").append("<a href='#' >  &#9658;  </a>");

        $("#prev").html("<a href='#' class='visionPrevArrow'>  <img src=\"images/previousBicon.png\" width=\"14px\" />  </a>");
        $("#next").html("<a href='#' class='visionNextArrow'>  <img src=\"images/nextBicon.png\" width=\"14px\" />  </a>");

    } catch (e) {

    }
}
function getHtmlTreeComponent(treeId, treeTittle, treewidth)
{
    try {
        $(".visualizationDashboardView").hide();
        $("#dxp1Seconddiv").html("");
        $("#dxp1Firstdiv").html("");
        $("#dxp21MainSplitter").hide();
        $(".dxpSplitterTabsContent").hide();
        $("#dxpDomainMenus").hide();
        $("#dxpGridContent").hide();
        $("#dxpAnalyticsContent").hide();
        $("#dxpHomeContent").hide();
        $("#dxClassesContent").hide();
        $("#dxpFormContent").hide();
        $("#dxpCluster").hide();
        $("#dxpconsolidationFormView").hide();
        $("#dxpClusterContent").hide();
        $("#dxp1TabsWithGridContent").hide();
        $("#dxp2TabsWithGridContent").hide();
        $("#dxpMenus").hide();
        try {
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridisImport", "");
        } catch (e) {

        }
        try {
            let currentTabName = event.currentTarget.innerText;
            var tabname = currentTabName.split('\n')[0];
            insertUserClickedNavigations(tabname);
        } catch (e) {

        }

        if (treeTittle != null && treeTittle != undefined && treeTittle != '' && treeTittle != 'undefined') {
            tabname = treeTittle;
        }
        if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {
            tabname = 'Tree View';
        }

        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', tabname, 'N', 'Y');

        if ($("#dxpTabs").is(":visible")) {

        } else {
            toggleTabsAndMenus(event);
        }
        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '100%'}]});
        try {
            $('#dxp1MainSplitter').jqxSplitter('expand');
        } catch (e) {

        }
        getTreeNestedGrid(treeId, 'dxp1Firstdiv', treewidth);
    } catch (er) {
        console.log(e);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.querySelector('.filterButtonrow > .col-12');
    try {
        scrollContainer.addEventListener('wheel', function (event) {
            if (event.deltaY !== 0) {
                event.preventDefault(); // Prevent vertical scrolling
                scrollContainer.scrollLeft += event.deltaY;
            }
        });
    } catch (e) {

    }
});


function convertStringToTitleCase(str, Uppercnt) {
    var i = 0
    return str.toLowerCase().split(' ').map(function (word) {
        i = i + 1;
        if (i < Uppercnt) {
            return word.toUpperCase();
        } else {
            return word.replace(word[0], word[0].toUpperCase());
        }

    }).join(' ');
}
//DMA START
function showDMAReport(gridId, tabId, flag, reportGridId) {
    var columnData = [];
    showLoader();

    // Check if the element with the given tabId exists in the DOM
    var $tabElement = $("#" + tabId);
    if (($tabElement.length === 0 || flag == "Y") && $tabElement.children().length === 0) {

        var cols = $("#" + gridId).jqxGrid("columns").records;
        cols.forEach(function (col) {
            if (col.text) {
                columnData.push(col.datafield);
            }
        });

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
                reportGridId: reportGridId
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
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                stopLoader();
                console.error("Error fetching DMA report data: ", textStatus, errorThrown);
            }
        });
    } else if ($tabElement.children().length > 0) {
        $tabElement.toggle();
        stopLoader();
    }
}

function showChartLabelsonHover(chartId)
{
    var axisLabelCountToShow = 6;
    $("#" + chartId + " .svg-container").append("<div class='xAxisLabelTooltip'></div>");
    var currentChartXaxisLabelSelector = $("#" + chartId).find(".xaxislayer-above").children();
    currentChartXaxisLabelSelector.each(function (index, element) {
        var labelTitle = $(this).children().text();
        var result = labelTitle.slice(0, axisLabelCountToShow) + (labelTitle.length > axisLabelCountToShow ? "..." : "");
        $("#" + chartId + " .xAxisLabelTooltip").append('<span class="xlabelTooltipText">' + labelTitle + "</span>");
        $(this).children().text(result);

    });
    $("#" + chartId + " .xtick").unbind("mouseenter").mouseenter(function (e) {
        var cssTransformProp = $(this).children().attr("transform");
        var firstIndexOfTransformProp = cssTransformProp.split(",")[0];
        var indexOfTransformOpenPar = firstIndexOfTransformProp.indexOf("(");
        var transformHorStr = firstIndexOfTransformProp.substring(indexOfTransformOpenPar + 1, cssTransformProp.length);
        var transformHorVal = parseInt(transformHorStr) - 15;
        showAxisLabelsTooltipOnHover($(this), "xAxisLabelTooltip", chartId, transformHorVal, 0);
    });
    $("#" + chartId + " .xtick").unbind("mouseleave").mouseleave(function (e) {
        hideAxisLabelsTooltipOnHover($(this), "xAxisLabelTooltip", chartId);
    });

    $("#" + chartId + " .svg-container").append("<div class='yAxisLabelTooltip'></div>");
    var currentChartXaxisLabelSelector = $("#" + chartId).find(".yaxislayer-above").children();
    currentChartXaxisLabelSelector.each(function (index, element) {
        var labelTitle = $(this).children().text();
        var result = labelTitle.slice(0, axisLabelCountToShow) + (labelTitle.length > axisLabelCountToShow ? "..." : "");
        $("#" + chartId + " .yAxisLabelTooltip").append('<span class="ylabelTooltipText">' + labelTitle + "</span>");
        $(this).children().text(result);
    });
    $("#" + chartId + " .ytick").unbind("mouseenter").mouseenter(function (e) {
        var cssTransformProp = $(this).children().attr("transform");
        var firstIndexOfTransformProp = cssTransformProp.split(",")[1];
        var transformVerStr = firstIndexOfTransformProp.substring(0, firstIndexOfTransformProp.length - 1);
        var transformVerVal = parseInt(transformVerStr) - 230;
        showAxisLabelsTooltipOnHover($(this), "yAxisLabelTooltip", chartId, 0, transformVerVal);
    });
    $("#" + chartId + " .ytick").unbind("mouseleave").mouseleave(function (e) {
        hideAxisLabelsTooltipOnHover($(this), "yAxisLabelTooltip", chartId);
    });
}


function showDMAReportBatchId(gridId, tableName) {

    $("#dmadialog").remove();
    $("#selectDMABatchIdListBox").remove();
    $("body").append("<div id='dmadialog'></div>");
    $("#dmadialog").html("<div id='selectDMABatchIdListBox' ></div>"
            + "<div id='errorDmaBatchId'></div>");
    $("#dmadialog").dialog({resizable: false,
        title: (labelObject['Batch ID'] != null ? labelObject['Batch ID'] : 'Batch ID'),
        modal: true,
        html: true,
        height: 'auto',
        width: 320,
        maxWidth: 300,
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    showLoader();
                    var batchId = $("#selectDMABatchIdListBox").jqxComboBox('getSelectedItem')['value'];
                    $("#dmabatchId").remove();
                    if (batchId != null && batchId != '' && batchId != undefined && batchId != 'select')
                    {
                        $("#errorDmaBatchId").html("");
                        $("body").append("<input type='hidden' id='dmabatchId' value='" + batchId + "'/>");
                        showDMAReport(gridId, tableName);
                        $(this).html("");
                        $(this).dialog("destroy");
                    } else {
                        $("#errorDmaBatchId").html("Please select any Batch Id for process");
                    }

                }
            }],
        open: function () {
            showLoader();
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: 'getBatchIdsWithGridParams',
                cache: false,
                data: {
                    gridId: gridId
                },
                success: function (response) {
                    stopLoader();
                    var batchIdsArray = response['checkBoxData'] != null ? response['checkBoxData'] : [];
                    stopLoader();
                    $("#selectDMABatchIdListBox").jqxComboBox({
                        source: batchIdsArray,
                        width: '200px',
                        animationType: 'slide',
                        searchMode: 'contains',
                        placeHolder: "Select BatchId"

                    });
                    var timeout = null;
                    $("#selectDMABatchIdListBox").find(".jqx-combobox-input").on("keydown", function (e) {
                        clearTimeout(timeout);
                        timeout = setTimeout(function () {
                            var searchString = $(e.currentTarget).val();
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
                                    var batchIdsArray = response['checkBoxData'] != null ? response['checkBoxData'] : [];
                                    stopLoader();
                                    $("#selectBatchIdListBox").jqxComboBox({
                                        source: batchIdsArray
                                    });
                                    $("#selectBatchIdListBox").jqxComboBox('open');
                                    $("#selectBatchIdListBox").find(".jqx-combobox-input").val(searchString);
                                },
                                error: function (e) {
                                    console.log(e);
                                    sessionTimeout(e);
                                    stopLoader();
                                }
                            })
                        }, 1000)

                    })

                },
                error: function (e) {
                    console.log(e);
                    sessionTimeout(e);
                    stopLoader();
                }
            })
            $(this).closest(".ui-dialog").css("z-index", "9999")
            //  $(this).closest(".ui-dialog").addClass("dialogzindex"); $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui) {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });



}


function showDMAAffectedRecords(title, gridId, responseId, event) {
    title = title.replaceAll("_", " ");
    var tableName = $("#tableName").val();
    var columnName = $("#dmaUniqueColumn").val();
    if (responseId != null && responseId != "" && responseId != undefined && responseId == "Y") {
        const button = event.target;

        // Get the parent <tr> of the button
        const row = button.closest('tr');

        // Get the value of the first <td> (ID) and the second <td> (Name) in the row
        const labelName = row.cells[0].innerText;
        const name = row.cells[1].innerText;
        title = title.trim().split(" ")[0] + " " + labelName;

    }

    $.ajax({
        type: "POST",
        url: 'getDMAGridParamResults',
        data: {
            title: title,
            gridId: gridId,
            responseId: responseId,
            tableName: tableName,
            columnName: columnName,
        },
        traditional: true,
        cache: false,
        success: function (response) {
            if (response != null && !jQuery.isEmptyObject(response)) {
                var recordList = response['recordList'];
                var paramArray = [];
                var paramObj = {};
                paramObj.colName = columnName;
                paramObj.operator = 'IN';
                paramObj.values = recordList;
                paramObj.valuetype = 'DMA';
                paramObj.isDMAReport = 'Y';
                paramArray.push(paramObj);
                var arrayStr = [{"tableName": tableName, "columnName": columnName}];
                getGridData(arrayStr, "", "", JSON.stringify(paramArray), tableName, "");

            }


        },
        error: function (e) {
            console.log(e);
            // stopLoader();
            sessionTimeout(e);
        }

    });
}
function getCloudFormData(formId) {
    $(".visualizationDashboardView").hide();
//    $("#firstDxpSplitterData").html('');
    $("#dxp21MainSplitter").hide();
    $(".dxpSplitterTabsContent").hide();
    $("#dxpDomainMenus").hide();
    $("#dxpGridContent").hide();
    $("#dxpAnalyticsContent").hide();
    $("#dxpHomeContent").hide();
    $("#dxClassesContent").hide();
    $("#dxpFormContent").hide();
    $("#dxpCluster").hide();
    $("#dxpconsolidationFormView").hide();
    $("#dxpClusterContent").hide();
    $("#dxp1TabsWithGridContent").hide();
    $("#dxp2TabsWithGridContent").hide();
    $("#VisualizePageBody").hide();
    showLoader();
    $.ajax({
        async: true,
        url: "cloudForm",
        dataType: 'html',
        cache: false,
        data: {
            'formId': formId
        },
        success: function (response, textStatus, jqXHR) {
            stopLoader();
            $("#dxpFormContent").show();
            var resultObj = JSON.parse(response);
            $("#dxpFormContent").append("<div class='container-fluid' id='InventManagementID'></div>")
            $("#InventManagementID").html(resultObj['htmlFormStr']);
            $("#dxpFormContent").addClass("inventoryManagementContent");
            $('.nav-link').on('click', function () {
                $('.nav-link').removeClass('active');
                $(this).addClass('active');
            });

        },
        error: function (jqXHR, textStatus, errorThrown) {

        }

    })


}
var chartsRendered = 0;
var totalCharts = 0;

function getDMAReportPdf(responseId) {
    showLoader();
    $("#pdfMainDiv").remove();
    $("body").append("<div id='pdfMainDiv' class='pdfMainDiv' style='display:none;'></div>");
    var tempElement = document.getElementById('pdfMainDiv');

    chartsRendered = 0;
    totalCharts = 0;

    var tabIds = ['ST', 'DHQA', 'scorecards', 'ET'];

    // Function to handle each tab data
    function fetchDMATabData(tabId) {
        return $.ajax({
            url: "getDMAPdfData",
            dataType: 'json',
            cache: false,
            data: {
                'responseId': responseId,
                'tabId': tabId
            }
        }).then(function (response) {
            if (tabId == 'ST' || tabId == 'ET') {
                tempElement.insertAdjacentHTML('beforeend', response['htmlString']);
                $("#pdfMainDiv #Preface").attr("class", "");
                $("#pdfMainDiv #ProcessandMethodologytodeliveryscope").attr("class", "");
                $("#pdfMainDiv #Considerationondataanalysis").attr("class", "");
                $("#pdfMainDiv #businessRules").attr("class", "");
                $("#pdfMainDiv #keyrecomendations").attr("class", "");
                //$("#pdfMainDiv [data-target='#scorecards']").remove();
            } else if (tabId === 'DHQA') {
                handleDHQAResponse(response, tempElement);
            } else if (tabId === 'scorecards') {
                handleScorecardsResponse(response, tempElement);
            }


        });
    }

    // Sequentially process each tabId
    function processTabsSequentially(tabIds) {
        var promise = $.Deferred().resolve();  // Initial resolved promise

        tabIds.forEach(function (tabId) {
            promise = promise.then(function () {
                return fetchDMATabData(tabId);
            });
        });

        return promise;
    }

    processTabsSequentially(tabIds)
            .then(function () {

                setTimeout(function () {
                    showLoader();
                    $("#pdfMainDiv .row .col-md-6").css({
                        "width": "50%",
                        "display": "inline-block",
                        "vertical-align": "top"
                    });
                    $("#pdfMainDiv .row table").attr(
                            "style",
                            "border:1px solid black; border-collapse:collapse;"
                            );
                    $("#pdfMainDiv .row table tr td").attr(
                            "style",
                            "padding:12px !important; font-size:12px !important; border:1px solid black;"
                            );
                    $("#pdfMainDiv .row table tr th").attr(
                            "style",
                            "padding:15px !important;text-align:center; font-size:18px !important; background:#0b4a99; color:#fff; border:1px solid black;"
                            );
                    $("#pdfMainDiv h3, #pdfMainDiv h4").attr(
                            "style",
                            "padding: inherit !important; font-size:18px !important;"
                            );
                    $("#pdfMainDiv .row table tr td.red").attr(
                            "style",
                            "color:red"
                            );
                    $("#pdfMainDiv .row table tr td.red").attr(
                            "style",
                            "background-color:#FF0000;color:#fff;"
                            );
                    $("#pdfMainDiv .row table tr td.green").attr(
                            "style",
                            "background-color:#008000; color:#fff;"
                            );
                    $("#pdfMainDiv .row table tr td.yellow").attr(
                            "style",
                            "background-color:#FFFF00; color:#000;"
                            );
                    $("#pdfMainDiv .row .col-md-6").attr(
                            "style",
                            "float:left; width:50%;"
                            );

                    generateReport(tempElement);
                    setTimeout(function () {
                        tempElement.remove();
                    }, 500)

                }, 500);  // Increase delay to ensure charts are fully rendered
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                stopLoader();
                console.error('Error fetching DMA report data:', errorThrown);
            });
}


function handleDHQAResponse(response, tempElement) {
    var pythonData = response['pythonData'];

    pythonData.forEach(function (val) {
        var htmlString = val['result'];
        tempElement.insertAdjacentHTML('beforeend', htmlString);

        var lArray = val['labelsArr'];
        var vArr = val['valuesArr'];
        var divIdCount = val['divIdCount'];

        if (lArray && lArray.length > 0 && vArr && vArr.length > 0) {
            totalCharts++;
            var chartId = "dataHealthReportChartDiv" + divIdCount;
            var pdfChartId = "dataHealthPdfChartDiv" + divIdCount;
            $("#pdfMainDiv").find("#" + chartId).attr("id", pdfChartId);

            var chartData = [{
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
                    b: 50
                }
            };

            var config = {
                displayModeBar: false
            };

            Plotly.newPlot(pdfChartId, chartData, layout, config).then(function () {
                return Plotly.toImage(pdfChartId, {format: 'png', height: 350, width: 400});
            }).then(function (imgData) {
                var img = document.createElement('img');
                img.src = imgData;
                document.getElementById(pdfChartId).replaceWith(img);
            }).catch(function (error) {
                console.error('Error converting chart to image:', error);
            });

            showChartLabelsonHover(pdfChartId);
        }
    });
}

function handleScorecardsResponse(response, tempElement) {
    var pythonData = response['pythonData'];
    if (pythonData !== null && pythonData.length > 0) {

        tempElement.insertAdjacentHTML('beforeend', pythonData[0]['result']);

        var pythonChartData = [];

        pythonData.forEach(function (val) {
            if (val['scoreCardObj'] && val['scoreCardLabelsObj']) {
                var scorecardObj = val['scoreCardObj'];
                $.each(scorecardObj, function (key, keyval) {
                    let firstKey = Object.keys(val['scoreCardLabelsObj'])[0];

                    var chartDataItem = {
                        labelsArr: val['scoreCardLabelsObj'][firstKey],
                        valuesArr: keyval,
                        title: key
                    };
                    pythonChartData.push(chartDataItem);
                });
            }
        });

        pythonChartData.forEach(function (val, i) {
            totalCharts++;
            var labelArray = val['labelsArr'];
            var valuesArr = val['valuesArr'];
            var title = val['title'];

            var chartId = 'scoreCardChartDiv' + i;
            var pdfChartId = "scoreCardPdfChartDiv" + i
            $("#pdfMainDiv").find("#" + chartId).attr("id", pdfChartId);

            var valuesArr = val['valuesArr'];
            var title = val['title'];

            var chartData = [];

            // Dynamic data trace
            var dynamicTrace = {
                type: 'scatterpolar', // Radar chart type
                r: valuesArr, // The values array
                theta: labelArray, // The labels array
                fill: 'toself', // Fill the area under the radar chart
                marker: {
                    color: valuesArr.map(getColor)
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
                marker: {
                    color: '#3469aa'
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

            Plotly.newPlot(pdfChartId, chartData, layout, config).then(function () {
                return Plotly.toImage(pdfChartId, {format: 'png', height: 280, width: 350});
            }).then(function (imgData) {
                var img = document.createElement('img');
                img.src = imgData;
                document.getElementById(pdfChartId).replaceWith(img);
            }).catch(function (error) {
                console.error('Error converting chart to image:', error);
            });

            showChartLabelsonHover(pdfChartId);
        });
    }
}

// Function to determine color based on value
function getColor(value) {
    if (value < 50) {
        return '#FF0000';
    } else if (value <= 80) {
        return '#FFFF00';
    } else {
        return '#008000';
    }
}


// Function to generate the PDF
function generateReport(tempElement) {

    let exportType = $("#dmaExportSelectTypes").val();
    if (exportType != null && exportType != undefined && exportType != "" && exportType == "word") {
        const header = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Document</title>
        <!-- Word specific namespaces help Word interpret it better -->
        <meta name="ProgId" content="Word.Document" />
        <meta name="Generator" content="Web" />
      </head>
      <body>
  `;
        const footer = `</body></html>`;

        const blob = new Blob([header + tempElement.innerHTML + footer], {type: 'application/msword'});
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = "DMA Report.doc";
        document.body.appendChild(a);
        a.click();
        a.remove();
        // cleanup
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    } else if (exportType != null && exportType != undefined && exportType != "" && exportType == "pdf") {
        showLoader();

        const compressed = pako.gzip(tempElement.innerHTML);

        $.ajax({
            url: 'downloadHtmlDMAReport?type=' + encodeURIComponent(exportType), // send type as query param
            type: 'POST',
            contentType: 'application/octet-stream',
            processData: false,
            data: compressed,
            headers: {
                'Content-Encoding': 'gzip'
            },
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data, status, xhr) {
                let mimeType, fileName;

                if (exportType.toLowerCase() === 'word') {
                    mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                    fileName = 'DMA_Report.docx';
                } else {
                    mimeType = 'application/pdf';
                    fileName = 'DMA_Report.pdf';
                }

                const blob = new Blob([data], {type: mimeType});
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);

                stopLoader();
                $("#analysisDialog").html("");
                $("#analysisDialog").dialog("destroy");
            },
            error: function (xhr, status, error) {
                console.error('Error generating report:', error);
                stopLoader();
                alert('Error generating report: ' + error);
            }
        });
    }
}
//DMA STOP
function getScrollFioriTheme() {
    $(".fioriThemeTabMenuNavNext").click(function () {
        $(".fioriPendingContainer .nav").animate({
            scrollLeft: "+=300"
        }, 500);
    });

    $(".fioriThemeTabMenuNavPrev").click(function () {
        $(".fioriPendingContainer .nav").animate({
            scrollLeft: "-=300"
        }, 500);
    });


    let menuContainerWidth = $(".fioriPendingContainer .nav").outerWidth();
    let totalWidth = 0;

    $(".fioriPendingContainer .nav > li").each(function () {
        totalWidth += $(this).outerWidth(true);
    });

    if (menuContainerWidth < totalWidth) {
        $(".fioriThemeTabMenuNavPrev, .fioriThemeTabMenuNavNext").show();
    } else {
        $(".fioriThemeTabMenuNavPrev, .fioriThemeTabMenuNavNext").hide();
    }
}
function showConfigWorkflow(gridId) {
    $("#mainBodyContentworkbench").html("");
    showLoader();
    $.ajax({
        async: false,
        url: "getConfigWorkflow",
        dataType: 'JSON',
        cache: false,
        data: {
            'gridId': gridId
        },
        success: function (response) {
            stopLoader();
            $("#dialog1").html(response['configStr']);
            $("#dialog1").dialog({resizable: false,
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Configuration Workbench',
                modal: true,
                height: 600,
                width: 1100,
                fluid: true,
                buttons: [
                    {
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            stopLoader();
                            $(this).empty();
                            $(this).dialog('close');
                        }
                    }
                ],
                open: function () {
                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    //    $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                    $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog wbconfigWrapper");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                    setTimeout(() => {
                        HelpDocumentIntro(gridId)
                    }, 3000);
                }
                ,
                beforeClose: function (event, ui)
                {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
        }
    });
}
function configWorkFlowOnChange(id, type, tableName, columnName, configFlag, uptDelFromStatus, uptDelToStatus, newStatusFrom, newStatusTo) {
    var domainVal = $("#configDomain").val();
    var roleVal = $("#configRole").val();
    var sourceVal = $("#configSource").val();
    var configProcesstype = $("#configProcesstype").val();
    var configStatusFrom = $("#configStatusFrom").val();
    var configStatusTo = $("#configStatusTo").val();
    $("tr").removeClass("updateCurrentRow");
    $(event.currentTarget).closest('tr').addClass("updateCurrentRow");
    if (configFlag != null && configFlag != undefined && configFlag != "" && configFlag == 'I') {
        if (domainVal == null || domainVal == undefined || domainVal == ""
                || roleVal == null || roleVal == undefined || roleVal == ""
                || sourceVal == null || sourceVal == undefined || sourceVal == ""
                || configStatusFrom == null || configStatusFrom == undefined || configStatusFrom == ""
                || configProcesstype == null || configProcesstype == undefined || configProcesstype == ""
                || configStatusTo == null || configStatusTo == undefined || configStatusTo == "") {
            $("#formContentmainDivID").html("<div class='wbnoDatafound'>Please Select Criteria To Add workflow.</div>");
            return;
        }
    }
    if (configStatusFrom != null && configStatusFrom != undefined && configStatusFrom != ""
            && configStatusTo != null && configStatusTo != undefined && configStatusTo != "" && configStatusFrom == configStatusTo) {
        $("#formContentmainDivID").html("<div class='wbnoDatafound'>Status From And Status To both are same Please Choose different.</div>");
        return;
    }
    showLoader();
    if (domainVal != null && domainVal != undefined && domainVal != "") {
        $.ajax({
            async: false,
            url: "configWorkFlowOnChange",
            dataType: 'JSON',
            cache: false,
            data: {
                'domainVal': domainVal,
                type: type,
                tableName: tableName,
                columnName: columnName,
                configFlag: configFlag,
                roleVal: roleVal,
                sourceVal: sourceVal,
                configProcesstype: configProcesstype,
                configStatusTo: configStatusTo,
                configStatusFrom: configStatusFrom,
                uptDelFromStatus: uptDelFromStatus,
                uptDelToStatus: uptDelToStatus,
                newStatusFrom: newStatusFrom,
                newStatusTo: newStatusTo
            },
            success: function (response) {
                stopLoader();
                if (configFlag != null && configFlag != undefined && configFlag != '' && configFlag == 'L') {
                    $("#formContentmainDivID").html(response['configStr']);
                } else if (configFlag != null && configFlag != undefined && configFlag != '' && configFlag == 'U') {
                    $("#dialog2").html(response['configStr']);
                    $("#dialog2").dialog({resizable: false,
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Update Configuration Workbench',
                        modal: true,
                        height: 150,
                        width: 700,
                        fluid: true,
                        buttons: [
                            {
                                text: (labelObject['Update'] != null ? labelObject['Update'] : 'Update'),
                                click: function () {
                                    var configStatusFrom = $("#configStatusFromU").val();
                                    var configStatusTo = $("#configStatusToU").val();
                                    configWorkFlowOnChange(id, type, tableName, columnName, "US", uptDelFromStatus, uptDelToStatus, configStatusFrom, configStatusTo);
                                    stopLoader();
                                    $(this).empty();
                                    $(this).dialog('close');

                                }
                            },
                            {
                                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                                click: function () {
                                    stopLoader();
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
                        }
                        ,
                        beforeClose: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });
                } else if (configFlag != null && configFlag != undefined && configFlag != ''
                        && (configFlag == 'I' || configFlag == 'D' || configFlag == 'US')) {
                    var modalObj = {
                        title: 'Confirmation Message',
                        body: response['configStr'],
                    };
                    var buttonArray = [
                        {
                            text: 'Ok',
                            click: function () {
                                configWorkFlowOnChange("", type, tableName, columnName, "L");
                            },
                            isCloseButton: true,
                        },
                        {
                            text: 'Cancel',
                            click: function () {
                            },
                            isCloseButton: true,
                        },
                    ];
                    modalObj['buttons'] = buttonArray;
                    createModal("dataDxpSplitterValueNew", modalObj);
                    $(".modal-dialog").addClass("modal-xs");
//                    $("#formContentmainDivID").html(response['configStr']);

                } else if (domainVal != null && domainVal != undefined && domainVal != "" && configFlag != 'US') {
                    $("#configRole").html(response['configStr']);
                }

            }
        });
    }
}
function showHelpDocVidGif(fileType, defaultFlag) {
    closesettingPannel();
    var domainVal = $("#helpDomain").val();
    var rolehId = $("#rolehid").val();
    if (rolehId != null && rolehId != undefined && rolehId != '' &&
            (rolehId.indexOf("_DG_") > -1 || rolehId.indexOf("_FOUNDRY_") > -1)) {
        rolehId = localStorage['currentRole']
        $("#rolehid").val(rolehId);
    }
    showLoader();
    $.ajax({
        async: false,
        url: "getHelpConfigResultsData",
        dataType: 'html',
        cache: false,
        data: {
            'fileType': fileType,
            domainVal: domainVal,
            defaultFlag: defaultFlag,
            roleId: rolehId,
        },
        success: function (response) {
            stopLoader();
            if (defaultFlag != null && defaultFlag != undefined && defaultFlag != "") {
                $(".helplistDatacontainer").html(response);
            } else {
                var title = "<div id='showXmlHeaderNameAndExport' style='display:flex;gap:10px;'><div id='showXmlHeaderText'>Help " + fileType + "</div><div style='display:flex;align-items: center'><div id='xmldownload" + fileType + "' ><input title='Download' id='xmlExport" + fileType + "' onclick=\"downloadHelpDocumentFiles()\" class='exportClass visionSearchExportButton visionGridExportButton visionExportInput visionSearchExportButtonUpdatedImagClass' type='button' width='-2px'></div></div></div> ";
                $("#dialog1").html(response);
                $("#dialog1").dialog({resizable: false,
//                    title: labelObject['Message'] != null ? labelObject['Message'] : title ,
                    modal: true,
                    height: 'auto',
                    width: 1200,
                    fluid: true,
                    buttons: [
                        {
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                stopLoader();
                                $(this).empty();
                                $(this).dialog('close');
                            }
                        }
                    ],
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        //    $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                        $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                        $(".ui-dialog-title").html(title);
                        $(".wbrightContentWrapper").html('');
                        setTimeout(() => {
                            HelpDocumentIntro(fileType);
                        }, 3000);
                    }
                    ,
                    beforeClose: function (event, ui)
                    {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                        $("#iframeid").remove();
                    }
                });
            }
        }
    });
}
function showDocVidGifonPopup(url) {
    $('.helplistDataItemul').find('.active').removeClass('active');
    $(event.target).addClass('active');
    var frameContent = "<iframe class='visionFormPdfView' frameborder='0' height='100%' width='100%' src='" + encodeURI(url) + "' id='iframeid'></iframe>";
    $(".wbrightContentWrapper").html(frameContent);
    const $wbrightContentWrapperShow = $('#wbleftSideMenuTogglerDivId');
    $wbrightContentWrapperShow.show();
}
function wbleftSideMenuToggler() {
    const $toggleIcon = $("#wbtoggleIconId");
    const $wbleftSideMenu = $('#wbleftSideMenuId');
    const $wbrightContentWrapper = $('#wbrightContentWrapperId');
    if ($toggleIcon.hasClass("wbDefultLeftIcon")) {
        $toggleIcon.removeClass("wbDefultLeftIcon").addClass("wbtoggleIcon");
        $wbleftSideMenu.hide();
        $wbrightContentWrapper.css('width', '100%');
        $("#wbleftSideMenuTogglerDivId").css('left', '5px');
    } else {
        $toggleIcon.removeClass("wbtoggleIcon").addClass("wbDefultLeftIcon");
        $wbleftSideMenu.show();
        $wbrightContentWrapper.css('width', '84%');
        $("#wbleftSideMenuTogglerDivId").css('left', '14%');

    }
}
function initializeScrollFunctionality() {
    if (!$(".iconMenuNavNext").length > 0) {
        $("#filterRowButton").append(`<div class="iconMenuNavNext"><i class="fa fa-angle-double-right"></i></div>`);
        $(".iconMenuNavNext").click(function () {
            $('#filterRowButton .col-12').animate({
                scrollLeft: '+=300'
            }, 500, 'swing');
        });
    }
    if (!$(".iconMenuNavPrev").length > 0) {
        $("#filterRowButton").prepend(`<div class="iconMenuNavPrev"><i class="fa fa-angle-double-left"></i></div>`);
        $(".iconMenuNavPrev").click(function () {
            $('#filterRowButton .col-12').animate({
                scrollLeft: '-=300'
            }, 500, 'swing');
        });
    }

    toggleScrollButtons();
}

function toggleScrollButtons(selector) {
    if (selector === null || selector === "") {
        selector = '.outerWidthcol';
    }
    let elements = $(selector);
    let totalItems = elements.length;
    let outerColWidth_Mac = window.matchMedia("(min-width: 768px) and (max-width: 1366px)");
    let outerColWidth_Wind = window.matchMedia("(min-width: 1920px)");

    if (outerColWidth_Mac.matches && totalItems >= 10) {
        $(".iconMenuNavPrev").show();
        $(".iconMenuNavNext").show();
        $(".homeTabsContentlistwrapper").css("width", "98%");
    } else if (outerColWidth_Wind.matches && totalItems >= 12) {
        $(".iconMenuNavPrev").show();
        $(".iconMenuNavNext").show();
    } else if (!outerColWidth_Wind.matches && totalItems >= 10) {
        $(".iconMenuNavPrev").show();
        $(".iconMenuNavNext").show();
    } else {
        $(".iconMenuNavPrev").hide();
        $(".iconMenuNavNext").hide();
        $(".homeTabsContentlistwrapper").css("width", "100%");
    }
}
function showExpiryDetailsinPopup(userName) {
    showLoader();
    $.ajax({
        type: "POST",
        url: "showExpiryDetailsinPopup",
        cache: false,
        data: {
            userName: userName,
        },
        success: function (response) {
            stopLoader();
            if (response != null && response != "" && response != undefined) {
                var modalObj = {
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                    body: response
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        click: function () {
                        },
                        isCloseButton: true
                    }

                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
            }
        }
    });
}
function toggleFioriTabsAndMenus(event) {
    var headerFioriFlag = $("#cb-switch").is(":checked"); //27-03-2025
    if (headerFioriFlag) {
//        showSelectedTabContent(event, "dxpHomeTab", "dxpHomeContent", "Home");
        $('#dxpTabsMenusIcons').hide();
        $('#dxpMain').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', resizable: false, splitBarSize: 0, panels: [{size: 30}]});
        $("#dxpTabs").show();
        $("#dxpTabs").css("overflow-y", "auto")
        $("#dxpTabs").css("overflow-x", "hidden")
        $("#dxpDomainMenus").hide();
        $("#dxpMenus").hide();
        $("#sidebarsearchButton").hide();//200623
        $("#nextScreenClass").hide();//200623
        setTimeout(() => {
            $('#dxpMain').jqxSplitter('expand');
        }, 200);
    }
}

function viewMapVendorList() {
    var vendorStr = $('#imgMapIconVendorList').attr('data-vendorlist');
    if (vendorStr != null && vendorStr != undefined && vendorStr != '') {
        const vendorList = vendorStr.split("&&").map(item => item.trim());
        if (vendorList != null && vendorList != undefined && vendorList != '') {
            try {
                navigator.geolocation.getCurrentPosition(
                        function (position) {
                            var userLatLng = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            };
                            var map = new google.maps.Map(document.getElementById('vendorMapDiv'), {
                                center: userLatLng,
                                zoom: 5 // Adjust the zoom level as needed
                            });
                            document.getElementById('vendorMapDiv').classList.add('vendor-map-loaded');
                            // Add a marker for the user's location
                            var userMarker = new google.maps.Marker({
                                map: map,
                                position: userLatLng,
                                title: 'My Location',
                                icon: {
                                    url: 'images/location.png',
                                    scaledSize: new google.maps.Size(24, 24),
                                    fillColor: 'blue',
                                    fillOpacity: 0.7,
                                    strokeColor: 'white',
                                    strokeWeight: 2
                                }
                            });
                            // Add info window for user's marker
                            var userInfowindow = new google.maps.InfoWindow({
                                content: 'Your Location'
                            });
                            userMarker.addListener('click', function () {
                                userInfowindow.open(map, userMarker);
                            });
                            // Geocode and add markers with info windows for each address
                            vendorList.forEach(function (address) {
                                var geocoder = new google.maps.Geocoder();
                                showLoader();
                                geocoder.geocode({address: address}, function (results, status) {
                                    if (status === 'OK') {
                                        stopLoader();
                                        var marker = new google.maps.Marker({
                                            map: map,
                                            position: results[0].geometry.location,
                                            title: address
                                        });
                                        let randomInt = getRandomInt(80, 90);
                                        // Add info window for the address marker
                                        var infowindow = new google.maps.InfoWindow({
                                            content: "<div class='info-window-content'>$" + randomInt + "</div>"
                                        });
                                        infowindow.open(map, marker);
                                    } else {
                                        stopLoader();
                                        console.error('Geocode was not successful for the following reason: ' + status);
                                    }
                                });
                            });
                            stopLoader();
                        },
                        function (error) {
                            stopLoader();
                            console.log('Error getting user location: ' + error.message);
                        }

                );
                stopLoader();
            } catch (e) {
                stopLoader();
            }
            stopLoader();
        }
    }
}
//RDS Tree code START
function getFunctionalTreeComponent(treeId, treeTittle, dataGridId) {
    try {
        $(".visualizationDashboardView").hide();
        $("#dxp1Seconddiv").html("");
        $("#dxp1Firstdiv").html("");
        $("#dxp21MainSplitter").hide();
        $(".dxpSplitterTabsContent").hide();
        $("#dxpDomainMenus").hide();
        $("#dxpGridContent").hide();
        $("#dxpAnalyticsContent").hide();
        $("#dxpHomeContent").hide();
        $("#dxClassesContent").hide();
        $("#dxpFormContent").hide();
        $("#dxpCluster").hide();
        $("#dxpconsolidationFormView").hide();
        $("#dxpClusterContent").hide();
        $("#dxp1TabsWithGridContent").hide();
        $("#dxp2TabsWithGridContent").hide();
        $("#dxpMenus").hide();
        $("#VisualizePageBody").hide();
        try {
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridisImport", "");
        } catch (e) {

        }
        try {
            let currentTabName = event.currentTarget.innerText;
            var tabname = currentTabName.split('\n')[0];
            insertUserClickedNavigations(tabname);
        } catch (e) {

        }

        if (treeTittle != null && treeTittle != undefined && treeTittle != '' && treeTittle != 'undefined') {
            tabname = treeTittle;
        }
        if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {
            tabname = 'Tree View';
        }

        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', tabname, 'N', 'Y');

        if ($("#dxpTabs").is(":visible")) {

        } else {
            toggleTabsAndMenus(event);
        }
        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '100%'}]});
        try {
            $('#dxp1MainSplitter').jqxSplitter('expand');
        } catch (e) {

        }
        var treeIds = treeId.split(":");
        $("#dxp1Firstdiv").html("<div id='treeContainerView' class='treeContainerViewDataClass'></div>");
        for (var t = 0; t < treeIds.length; t++)
        {
            if (t == 0) {
                $("#treeContainerView").append("<div id='jqxTreeData" + t + "' class='indivizualTreewrap indivizualFirstTreewrap'>"
                        + "<div class='treeplusAddButton'>"
                        + "<div class='iconRDSTreeMenuNavPrev' style='display: none;'><i class='fa fa-angle-double-left'></i></div>"
                        + "<div class='rdsTreeButtonsClass'>"
                        + "<div class ='addChildTreeButtonClass outerWidthcol'><button id='dataMainTreeButtonId' onclick=\"showRDSTreeData('" + dataGridId + "')\" class='btn btn-info'>View Data</button></div>"
                        + "<div class ='addChildTreeButtonClass outerWidthcol'><button id='addMainTreeButtonId' onclick='showAddTreeDataForm()' class='btn btn-info'>Add System</button></div>"
                        + "<div class ='addChildTreeButtonClass outerWidthcol'><button id='addMainTreeButtonId' onclick='showRDSTreeMapping()' class='btn btn-info'>RDS Mapping</button></div>"
                        + "<div class ='addChildTreeButtonClass outerWidthcol'><button id='addMainTreeButtonId' onclick='moveRDSTreeToSapAPM()' class='btn btn-info'>Transfer to SAP APM</button></div>"
                        + "</div>"
                        + "<div class='iconRDSTreeMenuNavNext' style='display: none; '><i class='fa fa-angle-double-right'></i></div>"
                        + "<div id='jqxTree" + t + "'></div>"
                        + "</div>"
                        + "</div>");
                RDSTreeButtonsTabScroller();
                getFunctionalTreeobject(treeIds[0], "jqxTree" + t, '50');
            } else {
                var searchDivId = "";
                if (t == 3)
                {
                    searchDivId = "<div id='jqxTreeSearchDivId" + t + "' class='jqxTreeSearchDivClass'></div>"
                }
                var treeDivId = treeIds[t];
                treeDivId = treeDivId.replaceAll("_", " ");
                treeDivId = treeDivId.split(' ').map(function (word) {
                    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                }).join('');
                var treeDivClass = treeDivId + "treeDivClass";
                $("#treeContainerView").append("<div id='jqxTreeData" + t + "' class='indivizualTreewrap " + treeDivClass + "'>" + searchDivId + "<div id='jqxTree" + t + "'></div></div>");
            }
        }





    } catch (er) {
        console.log(e);
    }
}


function getFunctionalTreeobject(treeId, treeDivId, trwidth) {
    if (treeId != null) {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getGenericDxpTree",
            cache: false,
            data: {
                treeId: treeId
            },
            success: function (treeObject) {
                treeFunctionalConfig(treeObject, treeDivId);
                stopLoader();
            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });

    }

}


function treeFunctionalConfig(treeObj, treeDivId) {
    var treeConfigObj = treeObj['treeConfigObj'];
    var treeInitParamObj = treeObj['treeInitParamObj'];
    var columnsObj = treeObj['treeColumnObj'];
    //treeConfigObj.height = parseInt("600px");
    // treeConfigObj.width = "auto";
    // treeConfigObj.enableHover = false;
    // treeConfigObj.allowDrag = true;
    // treeConfigObj.allowDrop = true;

    //    treeConfigObj.dragStart = function (dragItem)
//    {
//        if (!(dragItem.level == 5))
//        {
//            var message = "Please drag only Bom materials";
//            popupedit(message, message);
//            return false;
//        }
//    };
//    treeConfigObj.dragEnd = function (dragItem, dropItem, args, dropPosition, tree)
//    {
//        if (dragItem.level == 5 && dragItem.level - 1 == dropItem.level)
//        {
//            showLoader();
//            var dragParentsData = "";
//            var $dragItem = $(dragItem.element);
//            var dragParentItem = dragItem.parentElement;
//            var $dragParentItem = $(dragParentItem);
//            dragParentsData = $($dragItem).first().attr('item-description');
//            var dragItemLabel = dragItem.label;
//            var dragItemValue = dragItem.value;
//            var dropParentsData = "";
//            var $dropItem = $(dropItem.element);
//            dropParentsData = $($dropItem).first().attr('item-description');
//            var dragParentsDataArr = dragParentsData.split("-:");
//            var dropParentsDataArr = dropParentsData.split("-:");
//            for (var i = 0; i < 2; i++)
//            {
//                if (dragParentsDataArr[i] != dropParentsDataArr[i])
//                {
//                    var errorMsg = "Please drag same plants boms to same plants Equipments";
//                    popupedit(errorMsg, errorMsg);
//                    return false;
//                }
//            }
//
//            $($dragItem).first().attr('item-description', dropParentsData + "-:" + dragItemValue);
//            $.ajax({
//                type: "post",
//                traditional: true,
//                dataType: 'json',
//                url: "addBomToEquipmentinTree",
//                cache: false,
//                data: {
//                    dragItemValue: dragItemValue,
//                    dropItemValue: dropItem.value,
//                },
//                success: function (result, status, xhr) {
//                    stopLoader();
//                    var response = result;
//                    var message = response['Message'];
//                    if (message != null && message != '' && message != undefined)
//                    {
//                        popupedit(message, message);
//                        var mainDragObj = {};
//                        var dummyObj = {};
//                        dummyObj['label'] = dragItemLabel;
//                        dummyObj['value'] = 'ajax';
//                        var dummyArr = [dummyObj];
//                        mainDragObj['label'] = dragItemLabel;
//                        mainDragObj['value'] = dragItemValue;
//                        mainDragObj['items'] = dummyArr;
//                        mainDragObj['description'] = dragParentsData;
//                        $('#' + treeDivId).jqxTree('addTo', [mainDragObj], $($dragParentItem[0]));
//
//                    }
//
//                },
//                error: function (e) {
//                    console.log(e);
//                    sessionTimeout(e);
//                    stopLoader();
//                }
//            });
//
//            // Insert the cloned item at the target position (addAfter or addBefore)
//
//
//
//        } else {
//            var message = "Please drag only Bom materials to Equipment";
//            popupedit(message, message);
//            return false;
//        }
//    };

    $('#' + treeDivId).jqxTree(treeConfigObj);
    $("#" + treeDivId).jqxTree('focus');
    $("#jqxTreeDropdown").hide();

    $('#' + treeDivId).unbind('mouseenter').on('mouseenter', '.jqx-tree-item', function (e) {
        $(this).removeAttr('title');
    });



    $('#' + treeDivId).on('expand', function (event) {
        showLoader();
        var parentItem = $('#' + treeDivId).jqxTree('getItem', event.args.element);
        var level = parentItem.level;
        var $element = $(event.args.element);
        var loader = false;
        var loaderItem = null;
        var parentsData = null;
        if (level > 0) {
            parentsData = $($element).first().attr('item-description');
        }
        var children = $element.find('ul:first').children();
        $.each(children, function () {
            var item = $('#' + treeDivId).jqxTree('getItem', this);
            if (item && item.value == 'ajax') {
                loaderItem = item;
                loader = true;
                return false;
            }

        });

        if (parentItem != null && level != 0)
        {
            var parentWhereCondArr = [];
            var parentItemEle = event.args.element;
            parentItemEle = parentItemEle.parentElement.parentElement;
            for (var p = level - 1; p >= 0; p--)
            {
                var parentItemId = $('#' + treeDivId).jqxTree('getItem', parentItemEle);
                if (parentItemId != null)
                {
                    var parentVal = parentItemId.value;
                    var colObj = columnsObj[p];
                    var parentCol = colObj['HL_FLD_NAME'];
                    if (parentCol != null && parentCol != '' && parentCol != undefined
                            && parentVal != null && parentVal != '' && parentVal != undefined)
                    {
                        var parentWhereCondObj = {};
                        parentWhereCondObj['column'] = parentCol;
                        parentWhereCondObj['operator'] = "EQUALS";
                        parentWhereCondObj['value'] = parentVal;
                        parentWhereCondArr.push(parentWhereCondObj);
                    }
                }
                parentItemEle = parentItemEle.parentElement.parentElement;

            }
            $("#" + treeDivId).attr("parentWhereCondArr", JSON.stringify(parentWhereCondArr));
        }
        var parentWhereCondArrStr = $("#" + treeDivId).attr("parentWhereCondArr");
        if (parentWhereCondArrStr != null && parentWhereCondArrStr != '' && parentWhereCondArrStr != undefined)
        {
            parentWhereCondArr = JSON.parse(parentWhereCondArrStr);
        }
        if (loaderItem != null) {
            var extTreeParams = $("#extTreeParams").val();
            $('#' + treeDivId).jqxTree('removeItem', loaderItem.element);
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: "getTreeDataOpt",
                cache: false,
                data: {
                    parentkey: parentItem.value,
                    parentsData: parentsData,
                    treeId: treeObj['treeId'],
                    level: parentItem.level,
                    extTreeParams: extTreeParams,
                    columnsObj: JSON.stringify(columnsObj),
                    parentWhereCondArr: JSON.stringify(parentWhereCondArr)
                },
                success: function (data, status, xhr) {

                    $('#' + treeDivId).jqxTree('addTo', data, $element[0]);
                    var items = $('#' + treeDivId).jqxTree('getItems');
                    stopLoader();
                    $.each(items, function () {
                        $(this.titleElement).attr('title', this.label);
                        $("#" + this.titleElement[0].id).removeClass('visionETLParentHighight');
                    });
                    var treeId = treeDivId;
                    $('#' + treeId).on('select', function (event)
                    {
                        var args = event.args;
                        var item = $('#' + treeId).jqxTree('getItem', args.element);
                        var label = item.label;
                        var type = args.type; // mouse, keyboard or null. If the user selects with the mouse, the type will be "mouse".
                        var level = item['level'];
                        var selectedValue = item['value'];
                        if (level != null && level != '' && level != '0') {
                            level = parseInt(level) - 1;
                        }
                        var selectedColumnObj = columnsObj[level];
                        if (selectedColumnObj != null && !jQuery.isEmptyObject(selectedColumnObj)) {
                            console.log(JSON.stringify(selectedColumnObj) + ":::::" + selectedValue);
                            var compType = selectedColumnObj['FOLLOWUP_COMP_TYPE'];
                            if (selectedColumnObj['FOLLOWUP_COMP_ID'] != null
                                    && selectedColumnObj['FOLLOWUP_COMP_ID'] != ''
                                    && compType != null && compType != '') {

                                if (compType == 'CLUSTER') {// grids,tabs,form ,cluster
                                    var clusterDiv = '<div id="clusterSplitter">'
                                            + '<div class="visionMasterDetailPanelTop" id="levelTabId"></div>'
                                            + '<div class="visionMasterDetailPanelBottom" id="level1TabId"></div>'
                                            + '</div>';
                                    $("#treeGridDiv").html(clusterDiv);
                                    fetchCluster(selectedColumnObj, selectedValue, level);
                                } else if (compType == 'TREE') {
                                    var childTreeDiv = ' <div id="jqxChildExpander">'
                                            + ' <div id="expanderChildDesc" class="visionTreeDescription"></div>'
                                            + ' <div style="border: none;" id="jqxChildTreeDropdown" class="visionTreeDropDown" ></div>'
                                            + ' <div style="overflow: hidden;" id="jqxChildTreeDiv">'
                                            + '<div style="border: none;" id="jqxChildTree"></div>'
                                            + '</div>'
                                            + '</div>';
                                    $("#treeGridDiv").html(childTreeDiv);
                                    fetchChildTree('jqxTree', selectedColumnObj, selectedValue, level);
                                } else if (compType == 'RDSTREE') {
                                    var childTreeIds = selectedColumnObj['FOLLOWUP_COMP_ID'];
                                    var childTreeValueArr = childTreeIds.split(":");
                                    if (item != null && level >= 0)
                                    {
                                        var parentWhereCondArr = [];
                                        var parentItemEle = event.args.element;
                                        for (var p = level; p >= 0; p--)
                                        {
                                            var parentItemId = $('#' + treeDivId).jqxTree('getItem', parentItemEle);
                                            if (parentItemId != null)
                                            {
                                                var parentVal = parentItemId.value;
                                                var colObj = columnsObj[p];
                                                var parentCol = colObj['FLD_NAME'];
                                                if (parentCol != null && parentCol != '' && parentCol != undefined)
                                                {
                                                    var parentWhereCondObj = {};
                                                    parentWhereCondObj['column'] = parentCol;
                                                    parentWhereCondObj['operator'] = "EQUALS";
                                                    parentWhereCondObj['value'] = parentVal;
                                                    parentWhereCondArr.push(parentWhereCondObj);
                                                }
                                            }
                                            parentItemEle = parentItemEle.parentElement.parentElement;

                                        }
                                    }
                                    $.each(childTreeValueArr, function (i, val) {
                                        var j = i + 1;
                                        var treeDivId = "jqxTree" + j;
                                        // $("#treeContainerView").append("<div id='jqxTreeData" + j + "' class='indivizualTreewrap'><div id='jqxTree" + j + "'></div></div>");
                                        $("#" + treeDivId).attr("parentWhereCondArr", JSON.stringify(parentWhereCondArr));
                                        $("#" + treeDivId).attr("treeIdVal", val);
                                        getFunctionalChildTreeobject(val, treeDivId, "100%");
                                    });
                                }
                            }

                        }



                    });



                },
                error: function (e) {
                    console.log(e);
                    sessionTimeout(e);
                    stopLoader();
                }
            });
        }


    });

}

function getFunctionalChildTreeobject(treeId, treeDivId, trwidth) {
    if (treeId != null) {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getGenericDxpTree",
            cache: false,
            data: {
                treeId: treeId
            },
            success: function (treeObject) {
                childtreeFunctionalConfig(treeObject, treeDivId);
                stopLoader();
            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });

    }

}

function childtreeFunctionalConfig(treeObj, treeDivId) {
    var treeConfigObj = treeObj['treeConfigObj'];
    var treeInitParamObj = treeObj['treeInitParamObj'];
    var columnsObj = treeObj['treeColumnObj'];
    //treeConfigObj.height = parseInt("660px");
    treeConfigObj.allowDrag = true;
    treeConfigObj.allowDrop = true;
    window.dragSource = null;
    var dragfirstPart;
    treeConfigObj.dragStart = function (dragItem) {
        dragItemLevel = dragItem.level;
        dragItem.treeId = $("#" + treeDivId).attr('treeIdVal');
        //Zak
        var $dragItem = $(dragItem.element);
        dataType = $dragItem.find('div[data-type]').attr('data-type') || '';
        var dragItemed = $(dragItem.element);
        var description = dragItemed.attr('item-description');
        if (description) {
            var parts = description.split('-:');
            var currentValue = dragItem.value;
            var currentIndex = parts.indexOf(currentValue);
            dragfirstPart = currentIndex > 0 ? parts[currentIndex - 1] : null;
        }

        if (dragItem.treeId === "PM_ASSET_PA_HIERARCHY_TREE" && dragItemLevel === 1) {
            var message = "Drag and drop wont allow in Product Aspect";
            popupedit(message, message);
            return false;
        } else if (dragItem.treeId === "PM_ASSET_PA_HIERARCHY_TREE" && dataType !== "ASPECT") {
            return false;
        } else {
            if ((dragItemLevel == 0)) {
                var message = "Drag not allowed at primary level";
                popupedit(message, message);
                return false;
            }
        }
        window.draggedItem = dragItem;
        var tree = $('#' + treeDivId).jqxTree('getInstance');
        var dragItemElement = document.getElementById(dragItem.id);
        window.dragSource = {
            item: dragItem,
            parent: dragItem.parentElement ? tree.getItem(dragItem.parentElement) : null,
            wasExpanded: tree.isExpanded(dragItemElement),
            index: $(dragItemElement).index()
        };
        return true;
    };
    treeConfigObj.dragEnd = function (dragItem, dropItem, args, dropPosition, tree)
    {
        var dropItemLevel = dropItem.level;
        var treeid = tree[0];
        var treeDivId = treeid.id;
        var $dropItem = $(dropItem.element);
        var dropdataType = $dropItem.find('div[data-type]').attr('data-type') || '';
        var dropIdVal = $("#" + treeDivId).attr('treeIdVal');
        var dropItemed = $(dropItem.element);
        var description = dropItemed.attr('item-description');
        if (description) {
            var parts = description.split('-:');
            var currentValue = dropItem.value;
            var currentIndex = parts.indexOf(currentValue);
            dropItemId = currentIndex > 0 ? parts[currentIndex - 1] : null;
        }
        var droppartId = dropItem.value;
        if (dragItem.treeId === dropIdVal) {
            if ((dropItemLevel === 0))
            {
                var message = " drop wont work in primary level";
                popupedit(message, message);
                return false;
            } else if (dragItem.treeId === "PM_ASSET_PA_HIERARCHY_TREE" && dropItemLevel > dragItemLevel) {

                popupedit("Drop not allowed at lower level", "Error");
                return false;

            } else if (dragItem.treeId === "PM_ASSET_PA_HIERARCHY_TREE" && dropdataType !== "ASPECT") {
                popupedit("Drag and drop not allowed at class or property level", "Error");
                return false;
            } else if (dragItem.treeId === "PM_ASSET_PA_HIERARCHY_TREE" && droppartId === dragfirstPart) {

                popupedit("Drag and drop not allowed in same level or parent level", "Error");
                return false;

            } else if (dragItem.treeId === "PM_ASSET_PA_HIERARCHY_TREE" && dropItemId === dragfirstPart) {
                popupedit("Drag and drop not allowed in same level or parent level", "Error");
                return false;
            } else {
                var dragParentItem = dragItem.parentElement;
                var $dragParentItem = $(dragParentItem);
                showMoveCopyDialog(dragItem, dropItem, dropPosition, tree, treeDivId, $dragParentItem);
                return true;
            }
        } else {
            var message = " Drag and Drop work with in the tree only";
            popupedit(message, message);
            return false;
        }

    };

    //somanath add ,delete code start  

    $('#' + treeDivId).jqxTree(treeConfigObj);
    $("#" + treeDivId).jqxTree('focus');
    $("#jqxTreeDropdown").hide();
    if (instance != undefined) {
        instance.deleteEveryEndpoint();
    }
    applyTreeNodeLink(treeDivId);
    $("#" + treeDivId).attr("columnsObj", JSON.stringify(columnsObj))

    $('#' + treeDivId).unbind('mouseenter').on('mouseenter', '.jqx-tree-item', function (e) {
        e.stopPropagation();
//        var node = $(this);
        $(this).removeAttr('title');
//        var itemPar = node[0]['parentElement'];
//        var itemData = $('#' + treeDivId).jqxTree('getItem', itemPar);
//        var itemLevel = itemData['level'];
//        // node.css('background-color', '#f0f0f0');
//        var plusIconStyle = 'display:none;';
//        var minusIconStyle = 'display:none;';
//        var treeIdVal = $("#" + treeDivId).attr('treeIdVal');
//        if (node.find('.plus-icon').length === 0 && (!(treeIdVal == 'PM_ASSET_PA_HIERARCHY_TREE' && itemLevel >= 2))) {
//            if (itemLevel > 0) {
//                minusIconStyle = 'display:inline;';
//            }
//            if (itemLevel == 0 || (columnsObj[itemLevel - 1] != null && columnsObj[itemLevel - 1] != '' && columnsObj[itemLevel - 1] != undefined
//                    && !jQuery.isEmptyObject(columnsObj[itemLevel - 1]))) {
//                plusIconStyle = 'display:inline;';
//            }
//
//            //  if (itemLevel == 0 || (columnsObj[itemLevel - 1] != null && columnsObj[itemLevel - 1] != '' && columnsObj[itemLevel - 1] != undefined
//            //   && !jQuery.isEmptyObject(columnsObj[itemLevel - 1]))) {
//            node.append('<span class="plus-icon" style="' + plusIconStyle + ' padding-left: 5px;">&#43;</span>'
//                    + '<span class="minus-icon" style="' + minusIconStyle + ' padding-left:5px;">&#8722;</span>');
//            // setTimeout(function(){
//            // callAddIcon();
//            //},100);
//
//            //}
//        }
//        //if (node.find('.minus-icon').length === 0) {
//        //if (itemLevel > 0) {
//        //node.append('<span class="minus-icon" style="font-size: 16px; margin-left:15px;">&#8722;</span>');
//        // setTimeout(function () {
//        // callMinusIcon();
//        // }, 500);
//        // }
//        // }
//        // callAddIcon();
//        callMinusIcon();
    }).on('mouseleave', '.jqx-tree-item', function () {
//        var node = $(this);
//        node.css('background-color', '');
//        node.find('.plus-icon').remove();
//        node.find('.minus-icon').remove();
    });
//    function callMinusIcon() {
//        $('#' + treeDivId).off('click', '.minus-icon').on('click', '.minus-icon', function (e) {
//            e.stopPropagation();
//            let sourceId = $(this).closest('.jtk-connected').attr('id');//10-04-2025
//            if (sourceId != null && sourceId != undefined && sourceId != '') {
//                let targetId = instance.getAllConnections()
//                        .filter(conn => conn.sourceId === sourceId)
//                        .map(conn => conn.targetId);
//                deleteTreeLink(sourceId, targetId);
//            }
//            var itemElement = $(this).closest('li')[0];
//            var itemData = $('#' + treeDivId).jqxTree('getItem', itemElement);
//            if (itemData) {
//                var removeVal = itemData['value'];
//                var treeIdVal = $('#' + treeDivId).attr('treeIdVal');
//                removeRDSTreeSubItems(removeVal, itemData, treeDivId, treeIdVal);
//
//            }
//        });
//    }



//    $('#' + treeDivId).unbind('click').on('click', '.plus-icon', function (e) {
//        e.stopPropagation();
//        var parentItem = $(this).closest('.jqx-tree-item');
//        var newChildLabel = 'New Child'; // Default label
//        var newChild = {label: newChildLabel};
//        var item = $('#' + treeDivId).jqxTree('getSelectedItem');
//        var parentNodeData = $('#' + treeDivId).jqxTree('getItem', item);
//        var items = $('#' + treeDivId).jqxTree('getItems');
//        var newChildItem = true;
//        if (newChildItem) {
//            var $element = $(parentItem[0]);
//            $element.addClass('new-node-highlight');
//            var inputHtml = `<input type="text" class="tree-edit-input" value="" />`;
//            var $nextElement = $element.next(); // Get the next element after the parent (to append the input here)
//            $nextElement.prepend(inputHtml);
//            var $input = $nextElement.find('input');
//            $input.focus();
//            function saveInput() {
//                var newLabel = $input.val();
//                var newChildInputItem = {label: newLabel, value: newLabel, items: [{label: newLabel, value: newLabel}]};
//                var $item = $(item.element);
//                $('#' + treeDivId).jqxTree('addTo', newChildInputItem, $item[0]);
//                $nextElement.find("input").remove();
//                $('#' + treeDivId).jqxTree('expandItem', $item[0]);
//
//                setTimeout(function () {
//                    stopLoader();
//                }, 200);
//            }
//            //  $input.on('blur', saveInput);
//            $input.unbind('keyup').on('keyup', function (e) {
//                if (e.which === 13) {
//                    e.stopImmediatePropagation(); // Prevent event from bubbling and triggering other handlers
//                    e.preventDefault();
//                    saveInput();
//                }
//            });
//        }
//    });
    //function callAddIcon() {

//    $('#' + treeDivId).unbind('click').on('click', '.plus-icon', function (e) {
//        e.stopPropagation();
//        var parentItem = $(this).closest('.jqx-tree-item');
//        var item = $('#' + treeDivId).jqxTree('getSelectedItem');
//        var parentNodeData = $('#' + treeDivId).jqxTree('getItem', item);
//        var newChildItem = true;
//        if (newChildItem) {
//            var addLevel = parentNodeData.level;
//            var parentWhereCondArrStr = $('#' + treeDivId).attr('parentWhereCondArr');
//            var treeIdVal = $('#' + treeDivId).attr('treeIdVal');
//            if (parentItem != null && addLevel > 0)
//            {
//                var parentChildWhereCondArr = [];
//                var parentItemEle = $(item.element)[0];
//                for (var p = addLevel - 1; p >= 0; p--)
//                {
//                    var parentItemId = $('#' + treeDivId).jqxTree('getItem', item);
//                    if (parentItemId != null)
//                    {
//                        var parentVal = parentItemId.value;
//                        var colObj = columnsObj[p];
//                        var parentCol = colObj['FLD_NAME'];
//                        if (parentCol != null && parentCol != '' && parentCol != undefined)
//                        {
//                            var parentChilWhereCondObj = {};
//                            parentChilWhereCondObj['column'] = parentCol;
//                            parentChilWhereCondObj['operator'] = "EQUALS";
//                            parentChilWhereCondObj['value'] = parentVal;
//                            parentChildWhereCondArr.push(parentChilWhereCondObj);
//                        }
//                    }
//                    if (p > 0)
//                    {
//                        parentItemEle = parentItemEle.parentElement.parentElement;
//                    }
//
//                }
//            }
//            if (!(parentChildWhereCondArr != null && parentChildWhereCondArr != '' && parentChildWhereCondArr != undefined
//                    && !jQuery.isEmptyObject(parentChildWhereCondArr)))
//            {
//                parentChildWhereCondArr = [];
//            }
//            addChildTreeAspectsData(addLevel, treeIdVal, parentWhereCondArrStr, item, columnsObj[addLevel], parentChildWhereCondArr[0], treeDivId);
//        }
//    });


    //}
    //somanath add ,delete code end
    var rightClick = false;
    $('#' + treeDivId).on('select', function (event)
    {
        var args = event.args;
        var item = $('#' + treeDivId).jqxTree('getItem', args.element);
        var label = item.label;
        var type = args.type; // mouse, keyboard or null. If the user selects with the mouse, the type will be "mouse".
        var level = item['level'];
        var selectedValue = item['value'];
        var selectTree = $('#' + treeDivId).jqxTree('getInstance');
        var treeIdVal = $('#' + treeDivId).attr('treeIdVal');
        if (!rightClick && level == 0 && treeIdVal == 'PM_ASSET_LA_HIERARCHY_TREE') {
            rightClick = false;
            var compType = "ASSET_STRUCTURE";
            var compId = "Process Function(=):PM_ASSET_FA_HIERARCHY_TREE;"
                    + "Process Product(-):PM_ASSET_PA_HIERARCHY_TREE;"
                    + "Infrastructure Function(==):PM_ASSET_IF_HIERARCHY_TREE;"
                    + "Infrastructure Product(--):PM_ASSET_IP_HIERARCHY_TREE;"
                    + "Location(++):PM_ASSET_LA_HIERARCHY_TREE;"
                    + "Functional Location:PM_ASSET_FLA_HIERARCHY_TREE;"
                    + "Equipment:PM_ASSET_EA_HIERARCHY_TREE;"
                    + "Material:PM_ASSET_MATERIAL_HIERARCHY_TREE;"
                    + "Legacy:PM_ASSET_LEGACY_HIERARCHY_TREE";
            if (compId != null
                    && compId != '' && compId != undefined
                    && compType != null && compType != '' && compType != undefined) {
                if (compType == 'ASSET_STRUCTURE') {
                    var compIds = compId.split(";");
                    var compHtml = "<ul>";
                    $.each(compIds, function (i, val) {
                        if (val != null && val != '' && val != undefined) {
                            var compVals = val.split(":");
                            compHtml += "<li><label><input type=\"radio\" name ='showSelectedRDSStructureRadioButtonName' class=\"single-select\" value='" + compVals[1] + "'>" + compVals[0] + "</label></li>";
                        }
                    });
                    compHtml += "</ul>";
                    $("#showStructuresId").remove();
                    $("body").append("<div id=\"showStructuresId\" class=\"showRDSStructuresClass\">"
                            + compHtml
                            + "</div>");
                    var itemId = item['id'];
                    var itemParticularId = $("#" + itemId).find("div:first").attr('id');
                    $("#showStructuresId").jqxPopover({
                        offset: {left: 30 + "px", top: 0},
                        position: 'bottom',
                        width: 250,
                        height: 140,
                        autoClose: true,
                        title: "<h6 class='iDXPSelectRDSStructurePopoverTitleClass'>Select Structure  :</h6>",
                        showCloseButton: true,
                        selector: $("#" + itemParticularId)

                    });
                    $("#showStructuresId").jqxPopover('open');
                    $("#showStructuresId").addClass('showRDSStructuresClass');
                    $('#showStructuresId .jqx-popover-header').hide();
                    $(".jqx-popover-arrow").css({
                        'top': '-9%',
                        'left': '88px'
                    });
                    $('input[name="showSelectedRDSStructureRadioButtonName"]').on('change', function () {
                        const selectedValue = $('input[name="showSelectedRDSStructureRadioButtonName"]:checked').val();
                        $('input[name="showSelectedRDSStructureRadioButtonName"]').prop('checked', false);
                        if (selectedValue == 'PM_ASSET_FLA_HIERARCHY_TREE')
                        {
                            getFunctionalChildLocationTreeobject(selectedValue, treeDivId, "100%");
                            return;
                        }
                        $("#jqxTreeSearchDivId3").hide();
                        var parentWhereCondArr = $("#" + treeDivId).attr("parentWhereCondArr");
                        var treeIdVal = $("#" + treeDivId).attr("treeIdVal");
                        var count = treeDivId.replace("jqxTree", "");
                        $("#" + treeDivId).jqxTree("destroy");
                        $("#jqxTreeData" + count).append("<div id='" + treeDivId + "'></div>");
                        $("#" + treeDivId).attr("parentWhereCondArr", parentWhereCondArr);
                        $("#" + treeDivId).attr("treeIdVal", treeIdVal);
                        refreshAllConnections();
                        if (selectedValue == 'PM_ASSET_EA_HIERARCHY_TREE')
                        {
                            getFunctionalChildEquipmentTreeobject(selectedValue, treeDivId, "100%");
                        } else if (selectedValue == 'PM_ASSET_LA_HIERARCHY_TREE')
                        {
                            getFunctionalChildTreeobject(selectedValue, treeDivId, "100%");
                        }
                        console.log('Selected value:', selectedValue);
                    });

                }
            }



        }

    });


    var treeId = treeDivId;
    //if (parentItem.level >= 0 && (!(treeId == 'PM_ASSET_PA_HIERARCHY_TREE' && parentItem.level >= 2))) {
    $('#' + treeDivId).on('mousedown', function (event) {
        var target = $(event.target).parents('li:first')[0];
        rightClick = isRightClick(event);
        if (rightClick && target != null) {
            $('#' + treeId).jqxTree('selectItem', target);
            var selectedItem = $('#' + treeId).jqxTree('getSelectedItem');
            var selectedType = $(selectedItem.element).find(".jqxRDSTreeImgWithLabelClass").first().attr('data-type');
            var selectedParentItem = {};
            try {
                selectedParentItem = $('#' + treeId).jqxTree('getItem', selectedItem.parentElement);
                if (selectedParentItem != null) {
                    selectedParentItem = $('#' + treeId).jqxTree('getItem', selectedParentItem.parentElement);
                }
            } catch (e) {
            }
            rightClick = false;
            var treeIdValue = $('#' + treeDivId).attr('treeIdVal');
            if (!(treeIdValue == 'PM_ASSET_PA_HIERARCHY_TREE' && selectedItem.level >= 2 && selectedType != "ASPECT")) {
                var rightClickFunc = "";
                if (selectedItem.level == 0 || (columnsObj[selectedItem.level - 1] != null && columnsObj[selectedItem.level - 1] != '' && columnsObj[selectedItem.level - 1] != undefined
                        && !jQuery.isEmptyObject(columnsObj[selectedItem.level - 1]))) {
                    rightClickFunc += "Add:addRDSTreeChildTreeNodes(this,'" + treeDivId + "','" + treeIdValue + "');";
                }
                if (selectedItem.level > 0 && (!(treeId == 'PM_ASSET_PA_HIERARCHY_TREE' && selectedItem.level >= 2))) {
                    rightClickFunc += "Edit:editRDSTreeChildTreeNodes(this,'" + treeDivId + "','" + treeIdValue + "');";
                }
                if (selectedItem.level > 0) {
                    rightClickFunc += "Delete:deleteRDSTreeChildTreeNodes(this,'" + treeDivId + "','" + treeIdValue + "');"
                }
                var menuItems = "";
                var menuHeight;
                if (rightClickFunc != null) {
                    var options = rightClickFunc.split(";");
                    menuHeight = options.length;
                    $.each(options, function (index) {
                        var menuItem = options[index].split(":")[0];
                        var funcName = options[index].split(":")[1];
                        if (menuItem != null && menuItem != '' && menuItem != undefined
                                && funcName != null && funcName != '' && funcName != undefined)
                        {
                            menuItems += "<li onclick=\"" + funcName + "\">" + menuItem + "</li>"
                        }
                        // menuItems += "<li onclick=\"\">" + menuItem + "</li>"
                    });
                }
                $("#jqxMenu").remove();
                $("body").append("<div id='jqxMenu' class='jqxMenuClass'><ul></ul></div>");
                $("#jqxMenu ul").html(menuItems);
                var contextMenu = $("#jqxMenu").jqxMenu({width: '120px', height: menuHeight * 30 + 'px', autoOpenPopup: false, mode: 'popup', theme: 'energyblue'}); // ravi start
                var scrollTop = $(window).scrollTop();
                var scrollLeft = $(window).scrollLeft();
                contextMenu.jqxMenu('open', parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                return true;



            } else {
                return false;
            }
            rightClick = false;

        }
    });


    // disable the default browser's context menu.
    $(document).on('contextmenu', function (e) {
        if ($(e.target).parents('.jqx-tree').length > 0) {
            return false;
        }
        return true;
    });


    //$("#panelContentpaneljqxTree").hide();
    $('#' + treeDivId).on('expand', function (event) {
        showLoader();
        var parentItem = $('#' + treeDivId).jqxTree('getItem', event.args.element);
        var subTreeId = $(parentItem.element).find(".jqxRDSTreeImgWithLabelClass").first().attr('id');
        var level = parentItem.level;
        var $element = $(event.args.element);
        var loader = false;
        var loaderItem = null;
        var parentsData = null;
        if (level > 0) {
            parentsData = $($element).first().attr('item-description');
        }
        if (subTreeId != null && subTreeId != '' && subTreeId != undefined)
        {
            subTreeId = subTreeId.split(":")[0];
        }
        var children = $element.find('ul:first').children();
        // var children = $element.find('ul:first').children();
        $.each(children, function () {
            var item = $('#' + treeDivId).jqxTree('getItem', this);
            if (item && item.value == 'ajax') {
                loaderItem = item;
                loader = true;
                return false;
            }

        });
        var parentWhereCondArr = [];
        var parentWhereCondArrStr = $("#" + treeDivId).attr("parentWhereCondArr");
        if (parentWhereCondArrStr != null && parentWhereCondArrStr != '' && parentWhereCondArrStr != undefined)
        {
            parentWhereCondArr = JSON.parse(parentWhereCondArrStr);
        }
        if (parentItem != null && level > 2)
                //if (parentItem != null && level != 0 && level != 1)
                {
                    var parentItemEle = event.args.element;
                    var $li = $(parentItemEle);
                    var dataType = $li.find('.jqxRDSTreeImgWithLabelClass').attr('data-type');
                    if (dataType != null && dataType != '' && dataType != undefined
                            && (dataType == 'CLASS' || dataType == 'PROPERTY_TERM')) {
                        parentItemEle = parentItemEle.parentElement.parentElement;
                        for (var p = level - 1; p >= level - 1; p--)
                        {
                            var parentItemId = $('#' + treeDivId).jqxTree('getItem', parentItemEle);
                            if (parentItemId != null)
                            {
                                var parentVal = parentItemId.value;
                                var colObj = columnsObj[p];
                                var parentCol = "";
                                if (!(colObj != null && colObj != '' && colObj != undefined && !jQuery.isEmptyObject(colObj)))
                                {
                                    parentCol = $(parentItemId.element).find(".jqxRDSTreeImgWithLabelClass").first().attr('data-colName');
                                } else
                                {
                                    parentCol = colObj['HL_FLD_NAME'];
                                }
                                if (parentCol != null && parentCol != '' && parentCol != undefined)
                                {
                                    var parentWhereCondObj = {};
                                    parentWhereCondObj['column'] = parentCol;
                                    parentWhereCondObj['operator'] = "EQUALS";
                                    parentWhereCondObj['value'] = parentVal;
                                    parentWhereCondArr.push(parentWhereCondObj);
                                }
                            }
                            parentItemEle = parentItemEle.parentElement.parentElement;

                        }
                    }
                }

        if (loaderItem != null) {
            var extTreeParams = $("#extTreeParams").val();
            $('#' + treeDivId).jqxTree('removeItem', loaderItem.element);
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: "getTreeDataOpt",
                cache: false,
                data: {
                    parentkey: parentItem.value,
                    parentsData: parentsData,
                    treeId: treeObj['treeId'],
                    level: parentItem.level,
                    extTreeParams: extTreeParams,
                    columnsObj: JSON.stringify(columnsObj),
                    parentWhereCondArr: JSON.stringify(parentWhereCondArr),
                    subTreeId: subTreeId
                },
                success: function (data, status, xhr) {

                    $('#' + treeDivId).jqxTree('addTo', data, $element[0]);
                    var items = $('#' + treeDivId).jqxTree('getItems');
                    stopLoader();
                    $.each(items, function () {
//                        var div = $(this.element).closest('li')[0];
//                        var dataType = $(div).find("div.jqxRDSTreeImgWithLabelClass").attr("data-type");
//                        if (dataType == 'CLASS')
//                        {
//                            $(div).addClass("iDXPRDSTreeClassAndPropertyTerm");
//                        }
                        var li = $(this.element).closest('li');
                        var innerDiv = li.children("div").children("div.jqxRDSTreeImgWithLabelClass[data-type='CLASS']");
                        if (innerDiv.length > 0) {
                            li.addClass("iDXPRDSTreeClassAndPropertyTerm");
                        }
                        $(this.titleElement).attr('title', this.label);
                        $("#" + this.titleElement[0].id).removeClass('visionETLParentHighight');
                    });
                    setTimeout(function () {
                        $('#' + treeDivId).jqxTree('refresh');
                    }, 500);



                    // }





                },
                error: function (e) {
                    console.log(e);
                    sessionTimeout(e);
                    stopLoader();
                }
            });
        } else {
            stopLoader();
        }


    });

}


function showAddTreeDataForm()
{
    var htmlStr = "<div id='subTreeChildDataId' class='subTreeChildDataClass'>"
            + "<span> <label for='mainSystemId'>Main System</label>"
            + "<input type='text' class='form-control' id='mainSystemId' value=''/>"
            + "<span id='mainSystemIdErrorId' style='display:none;color:red'>should not be null</span>"
            + "</span>"
            + "<span> <label for='mainSystemId'>Sub Category</label>"
            + "<input type='text' class='form-control' id='subCategoryId' value=''/>"
            + "<span id='subCategoryIdErrorId' style='display:none;color:red'>should not be null</span>"
            + "</span>"
            + "<span> <label for='mainSystemId'>Sub System</label>"
            + "<input type='text' class='form-control' id='subSystemId' value=''/>"
            + "<span id='subSystemIdErrorId' style='display:none;color:red'>should not be null</span>"
            + "</span>"
            + "<span> <label for='mainSystemId'>Functional Aspect</label>"
            + "<input type='text' class='form-control' id='functionalAspectId' value=''/>"
            + "<span id='functionalAspectIdErrorId' style='display:none;color:red'>should not be null</span>"
            + "</span>"
            + "<span> <label for='mainSystemId'>Product Aspect</label>"
            + "<input type='text' class='form-control' id='productAspectId' value=''/>"
            + "<span id='productAspectIdErrorId' style='display:none;color:red'>should not be null</span>"
            + "</span>"
            + "<span> <label for='mainSystemId'>Product PPO Class</label>"
            + "<input type='text' class='form-control' id='productPPOClassId' value=''/>"
            + "<span id='productPPOClassIdErrorId' style='display:none;color:red'>should not be null</span>"
            + "</span>"
            + "<span> <label for='mainSystemId'>Location Aspect</label>"
            + "<input type='text'  class='form-control' id='locationAspectId' value=''/>"
            + "<span id='locationAspectIdErrorId' style='display:none;color:red'>should not be null</span>"
            + "</span>"
            + "</div>";

    $("#dialog1").html(htmlStr);
    $("#dialog1").dialog({
        resizable: false,
        title: labelObject['Add New System'] != null ? labelObject['Add New System'] : 'Add New System',
        modal: true,
        height: 300,
        width: 600,
        fluid: true,
        buttons: [
            {
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                class: 'rdsMoveCopyButton',
                click: function () {
                    var mainSystemId = $("#mainSystemId").val();
                    var subCategoryId = $("#subCategoryId").val();
                    var subSystemId = $("#subSystemId").val();
                    var functionalAspectId = $("#functionalAspectId").val();
                    var productAspectId = $("#productAspectId").val();
                    var productPPOClass = $("#productPPOClassId").val();
                    var locationAspectId = $("#locationAspectId").val();
                    $("#mainSystemIdErrorId").hide();
                    $("#subCategoryIdErrorId").hide();
                    $("#subSystemIdErrorId").hide();
                    $("#functionalAspectIdErrorId").hide();
                    $("#productAspectIdErrorId").hide();
                    $("#productPPOClassIdErrorId").hide();
                    $("#locationAspectIdErrorId").hide();
                    if (!(mainSystemId != null && mainSystemId != '' && mainSystemId != undefined))
                    {
                        $("#mainSystemIdErrorId").show();
                        return;
                    }
                    if (!(subCategoryId != null && subCategoryId != '' && subCategoryId != undefined))
                    {
                        $("#subCategoryIdErrorId").show();
                        return;
                    }
                    if (!(subSystemId != null && subSystemId != '' && subSystemId != undefined))
                    {
                        $("#subSystemIdErrorId").show();
                        return;
                    }
                    if (!(functionalAspectId != null && functionalAspectId != '' && functionalAspectId != undefined))
                    {
                        $("#functionalAspectIdErrorId").show();
                        return;
                    }
                    if (!(productAspectId != null && productAspectId != '' && productAspectId != undefined))
                    {
                        $("#productAspectIdErrorId").show();
                        return;
                    }
                    if (!(productPPOClass != null && productPPOClass != '' && productPPOClass != undefined))
                    {
                        $("#productPPOClassIdErrorId").show();
                        return;
                    }
                    if (!(locationAspectId != null && locationAspectId != '' && locationAspectId != undefined))
                    {
                        $("#locationAspectIdErrorId").show();
                        return;
                    }
                    addRdsTreeMainStructureData(mainSystemId, subCategoryId, subSystemId,
                            functionalAspectId, productAspectId, productPPOClass, locationAspectId);
                    $(this).html("");
                    $(this).dialog('close');
                    $(this).dialog('destroy');
                }
            },
            {
                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                class: 'rdsMoveCopyButton',
                click: function () {
                    $(this).html("")
                    $(this).dialog('close');
                    $(this).dialog('destroy');
                }
            }
        ],
        open: function () {
            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            //    $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");

        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
            $("#iframeid").remove();
        }
    });
}

function addRdsTreeMainStructureData(mainSystemId, subCategoryId, subSystemId,
        functionalAspectId, productAspectId, productPPOClass, locationAspectId)
{
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "addRDSMainDatainTree",
        cache: false,
        data: {
            mainSystemId: mainSystemId,
            subCategoryId: subCategoryId,
            subSystemId: subSystemId,
            functionalAspectId: functionalAspectId,
            productAspectId: productAspectId,
            productPPOClass: productPPOClass,
            locationAspectId: locationAspectId
        },
        success: function (result, status, xhr) {
            stopLoader();
            var response = result;
            var message = response['Message'];
            if (message != null && message != '' && message != undefined)
            {
                popupedit("Message", message);
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function addChildTreeAspectsData(addLevel, addTreeId, parentWhereCondArrStr, item, columnsObj, parentChildWhereCondArrObj, treeDivId)
{
    $("#subTreeChildDataId").remove();
    var parentWhereCondArr = JSON.parse(parentWhereCondArrStr);
    var htmlStr = "<div id='subTreeChildDataId' class='subTreeChildDataClass'>";
    $.each(parentWhereCondArr, function (i, val) {
        var colsObj = val;
        var colName = colsObj['column'];
        var colVal = colsObj['value'];
        var colLabel = colName.replace("_", " ");
        colLabel = colLabel.replace("_ID", " ");
        colLabel = colLabel.split(' ').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
        htmlStr += "<span> <label for='" + colName + "'>" + colLabel + "</label>"
                + "<input type='text' class='form-control' readonly id='" + colName + "' value='" + colVal + "'/>"
                + "</span>"
    });
    // $.each(parentChildWhereCondArr, function (i, val) {
    if (parentChildWhereCondArrObj != null && parentChildWhereCondArrObj != '' && parentChildWhereCondArrObj != undefined && !jQuery.isEmptyObject(parentChildWhereCondArrObj)) {
        var colsObj = parentChildWhereCondArrObj;
        var colName = colsObj['column'];
        var colVal = colsObj['value'];
        var colLabel = colName.replace("_", " ");
        colLabel = colLabel.replace("_ID", " Parent");
        colLabel = colLabel.split(' ').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
        htmlStr += "<span> <label for='" + colName + "'>" + colLabel + "</label>"
                + "<input type='text' readonly class='form-control' id='" + colName + "' value='" + colVal + "'/>"
                + "</span>";
        // });
    }
    if (columnsObj != null && columnsObj != '' && columnsObj != undefined && !jQuery.isEmptyObject(columnsObj))
    {
        //var colName = columnsObj['DISP_FLD_NAME'];
        var colName = "FUNCTIONAL_ASPECT";
        if (addTreeId == 'PM_ASSET_FA_HIERARCHY_TREE')
        {
            colName = 'FUNCTIONAL_ASPECT';
        } else if (addTreeId == 'PM_ASSET_PA_HIERARCHY_TREE')
        {
            colName = 'PRODUCT_ASPECT';
        } else if (addTreeId == 'PM_ASSET_LA_HIERARCHY_TREE') {
            colName = 'LOCATION_ASPECT';
        }
        var colLabel = colName.replace("_", " ");
        colLabel = colLabel.replace("_ID", " ");
        colLabel = colLabel.split(' ').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
        htmlStr += "<span> <label for='" + colName + "'>" + colLabel + "</label>"
                + "<input type='text' class='form-control' id='" + colName + "' value=''/>"
                + "<span id='" + colName + "ErrorId' style='display:none;color:red'>should not be null</span>"
                + "</span>";
        if (addTreeId == 'PM_ASSET_PA_HIERARCHY_TREE')
        {
            htmlStr += "<span> <label for='CLASS_TERM'>Class</label>"
                    + "<input type='text' class='form-control' id='CLASS_TERM' value=''/>"
                    + "<span id='CLASS_TERMErrorId' style='display:none;color:red'>should not be null</span>"
                    + "</span>";
        }
    } else {
        var colName = "FUNCTIONAL_ASPECT";
        if (addTreeId == 'PM_ASSET_FA_HIERARCHY_TREE')
        {
            colName = 'FUNCTIONAL_ASPECT';
        } else if (addTreeId == 'PM_ASSET_PA_HIERARCHY_TREE')
        {
            colName = 'PRODUCT_ASPECT';
        } else if (addTreeId == 'PM_ASSET_LA_HIERARCHY_TREE') {
            colName = 'LOCATION_ASPECT';
        }
        var colLabel = colName.replace("_", " ");
        colLabel = colLabel.replace("_ID", " ");
        colLabel = colLabel.split(' ').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
        htmlStr += "<span> <label for='" + colName + "'>" + colLabel + "</label>"
                + "<input type='text' class='form-control' id='" + colName + "' value=''/>"
                + "<span id='" + colName + "ErrorId' style='display:none;color:red'>should not be null</span>"
                + "</span>";
        if (addTreeId == 'PM_ASSET_PA_HIERARCHY_TREE')
        {
            htmlStr += "<span> <label for='CLASS_TERM'>Class</label>"
                    + "<input type='text' class='form-control' id='CLASS_TERM' value=''/>"
                    + "<span id='CLASS_TERMErrorId' style='display:none;color:red'>should not be null</span>"
                    + "</span>";
        }
    }



    htmlStr += "</div>";
    var min = 100;  // Minimum value (inclusive)
    var max = 100000; // Maximum value (inclusive)
    var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    var dialogId = "dialog" + randomInt;
    $("body").append("<div id='" + dialogId + "'></div>");
    $("#" + dialogId).html(htmlStr);
    $("#" + dialogId).dialog({
        title: labelObject['Add Tree Childs'] != null ? labelObject['Add Tree Childs'] : 'Add Tree Child',
        modal: true,
        height: 230,
        width: 600,
        fluid: true,
        buttons: [
            {
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                class: 'rdsMoveCopyButton',
                click: function () {
                    var colsArr = [];
                    $("#subTreeChildDataId").find("input[type='text']").each(function () {
                        var id = $(this).attr('id');
                        $("#" + id + "ErrorId").hide();
                        var value = $("#" + id).val();
                        if (!(value != null && value != '' && value != undefined))
                        {
                            $("#" + id + "ErrorId").show();
                            return;
                        }
                        var colsObj = {};
                        colsObj['column'] = id;
                        colsObj['value'] = value;
                        colsObj['operator'] = 'EQUALS';
                        colsArr.push(colsObj);
                    });
                    $(this).html("");
                    $(this).dialog('close');
                    $(this).dialog('destroy');
                    addRdsSubTreeStructureData(colsArr, addLevel, addTreeId, item, treeDivId);
                }
            },
            {
                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                class: 'rdsMoveCopyButton',
                click: function () {
                    $(this).html("")
                    $(this).dialog('close');
                    $(this).dialog('destroy');
                }
            }
        ],
        open: function () {
            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            //    $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");

        },
        beforeClose: function (event, ui)
        {
            $(this).html("");
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
            $("#iframeid").remove();
        }
    });
}

function addRdsSubTreeStructureData(colsArr, addLevel, addTreeId, item, treeDivId) {
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "addRDSSubTreesData",
        cache: false,
        data: {
            colsArr: JSON.stringify(colsArr),
            addLevel: addLevel,
            addTreeId: addTreeId
        },
        success: function (result, status, xhr) {
            stopLoader();
            var response = result;
            var message = response['Message'];
            var newItem = response['newItem'];
            if (message != null && message != '' && message != undefined)
            {
                var $item = $(item.element);
                $("#" + treeDivId).jqxTree("addTo", newItem, $item[0]);
                popupedit("Message", message);
                treeChildDataRefersh(treeDivId, item);
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}


function removeRDSTreeSubItems(removeVal, itemData, treeDivId, treeIdVal)
{
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "removeRDSSubTreesData",
        cache: false,
        data: {
            removeVal: removeVal,
            treeIdVal: treeIdVal,

        },
        success: function (result, status, xhr) {
            stopLoader();
            var response = result;
            var message = response['Message'];
            if (message != null && message != '' && message != undefined)
            {
                $('#' + treeDivId).jqxTree('removeItem', itemData.element);
                $('#' + treeDivId).jqxTree('refresh');
                popupedit("Message", message);
                treeChildDataRefersh(treeDivId, itemData);
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}


function editRDSTreeChildTreeNodes($this, treeId, treeIdVal)
{
    var item = $("#" + treeId).jqxTree('getSelectedItem');
    var selectedItem = $("#" + treeId).jqxTree('getItem', item);
    var label = $(item.element).find(".jqxRDSTreeLabelSpanClass").first().text();
    if (!(label != null && label != '' && label != undefined))
    {
        label = selectedItem.label;
    }
    var htmlStr = "<div id='editRDSChildTreeDivId' class='editRDSChildTreeDivClass'>"
            + "<input type='text' id='editRDSChildTreeInputId' value='" + label + "'/>"
            //+ "<input type='text' id='editRDSChildTreeInputId' value='" + selectedItem.label + "'/>"
            + "</div>";
    var selectedValue = selectedItem.value;
    var min = 100;  // Minimum value (inclusive)
    var max = 100000; // Maximum value (inclusive)
    var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    var dialogId = "dialog" + randomInt;
    $("body").append("<div id='" + dialogId + "'></div>");
    $("#" + dialogId).html(htmlStr);
    $("#" + dialogId).dialog({
        title: labelObject['Edit Tree Child'] != null ? labelObject['Edit Tree Child'] : 'Edit Tree Child',
        modal: true,
        height: 130,
        width: 300,
        fluid: true,
        buttons: [
            {
                text: (labelObject['Save'] != null ? labelObject['Save'] : 'Save'),
                class: 'rdsMoveCopyButton',
                click: function () {
                    var inputValue = $("#editRDSChildTreeInputId").val();
                    updateRDSChildTreeEditedLabel(treeIdVal, selectedValue, treeId, inputValue, selectedItem);
                    $(this).html("");
                    $(this).dialog('close');
                    $(this).dialog('destroy');

                }
            },
            {
                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                class: 'rdsMoveCopyButton',
                click: function () {
                    $(this).html("")
                    $(this).dialog('close');
                    $(this).dialog('destroy');
                }
            }
        ],
        open: function () {
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");

        },
        beforeClose: function (event, ui)
        {
            $(this).html("");
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
            $("#iframeid").remove();
        }
    });
}

function updateRDSChildTreeEditedLabel(treeIdVal, selectedValue, treeDivId, inputValue, selectedItem)
{
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "updateRDSChildTreesEditLabel",
        cache: false,
        data: {
            selectedValue: selectedValue,
            treeIdVal: treeIdVal,
            selectedLabel: inputValue

        },
        success: function (result, status, xhr) {
            stopLoader();
            var response = result;
            var message = response['Message'];
            if (message != null && message != '' && message != undefined)
            {
                $('#' + treeDivId).jqxTree('updateItem', selectedItem.element, {label: inputValue});
                $('#' + treeDivId).jqxTree('refresh');
                popupedit("Message", message);
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function showRDSTreeData(gridId)
{
    getMaterialComponentGrid("GRID", gridId, 'PM_MANAGER', 'N');
//    showLoader();
//    $.ajax({
//        datatype: "json",
//        type: "POST",
//        url: 'getCloudGrid',
//        data: {
//            'gridId': gridId,
//        },
//        traditional: true,
//        cache: false,
//        success: function (response) {
//            stopLoader();
//            var paramArray = [];
//
//            $("#dxp1Seconddiv").css({
//                "width": "500px !important",
//                "height": "500px !important",
//                "display": "block",
//                "position": "static"
//            });
//            gridConfig(response, 0, paramArray, 'dxp1Seconddiv');
//            setTimeout(function () {
//                stopLoader();
//                $("#dxp1Firstdiv").css("display", "none");
//                $("#dxp1Seconddiv").get(0).style.setProperty('width', '100%', 'important');
//                gridoperations(gridId,'refresh');
//            }, 2000);
//
//        }
//    });
}


function showMoveCopyDialog(dragItem, dropItem, dropPosition, tree, treeDivId, $dragParentItem) {
    var dialogHtml = "<div class='treeJqxDialogClass'>"
            + "<h3 class='jqxRDSTreeDragAndDropItemTextClass'>Action for " + dragItem.label + "</h3>"
            + "<p class='jqxRDSTreeDragAndDropItemMessageClass'>Do you want to move or copy this item?</p>"
            + "</div>";


    var min = 100;  // Minimum value (inclusive)
    var max = 100000; // Maximum value (inclusive)
    var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    var dialogId = "dialog" + randomInt;
    $("body").append("<div id='" + dialogId + "'></div>");
    $("#" + dialogId).html(dialogHtml);
    $("#" + dialogId).dialog({
        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
        modal: true,
        height: 230,
        width: 600,
        fluid: true,
        buttons: [
            {
                text: (labelObject['Move'] != null ? labelObject['Move'] : 'Move'),
                class: 'rdsMoveCopyButton',
                click: function () {
                    performMoveAction(dragItem, dropItem, dropPosition, tree, treeDivId, $dragParentItem);
                    $(this).html("");
                    $(this).dialog('close');
                    $(this).dialog('destroy');

                }
            },
            {
                text: (labelObject['Copy'] != null ? labelObject['Copy'] : 'Copy'),
                class: 'rdsMoveCopyButton',
                click: function () {
                    performCopyAction(dragItem, dropItem, dropPosition, tree, treeDivId, $dragParentItem);
                    $(this).html("");
                    $(this).dialog('close');
                    $(this).dialog('destroy');

                }
            },
            {
                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                class: 'rdsMoveCopyButton',
                click: function () {
                    if (window.dragSource) {
                        var tree = $('#' + treeDivId).jqxTree('getInstance');
                        tree.removeItem(dragItem);
                        if (window.dragSource.parent) {
                            tree.addTo(window.dragSource.item, window.dragSource.parent);
                            tree.expandItem(window.dragSource.parent);
                        } else {
                            tree.addTo(window.dragSource.item, null);
                        }
                    }
                    $(this).html("")
                    $(this).dialog('close');
                    $(this).dialog('destroy');
                }
            }
        ],
        open: function () {
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");

        },
        beforeClose: function (event, ui)
        {
            $(this).html("");
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
            $("#iframeid").remove();
        }
    });

//    var dialogHtml = `
//        <div class="treeJqxDialog">
//    <h3 class="treeJqxDialog__title">Action for "${dragItem.label}"</h3>
//    <p class="treeJqxDialog__message">Do you want to move or copy this item?</p>
//    <div class="treeJqxDialog__actions">
//        <button id="btnMove" class="treeJqxDialog__button treeJqxDialog__button--move">Move</button>
//        <button id= "btnCopy" class="treeJqxDialog__button treeJqxDialog__button--copy">Copy</button>
//        <button id = "btnCancel" class="treeJqxDialog__button treeJqxDialog__button--cancel">Cancel</button>
//    </div>
//</div>
//<div class="treeJqxDialog-overlay"></div>
//    `;

//    // Append to body
//    $('body').append(dialogHtml);
//    // Button event handlers
//    $('#btnMove').click(function () {
//        var buttom = $('#this').val();
//        performMoveAction(dragItem, dropItem, dropPosition, tree, treeDivId);
//        closeDialog();
//    });
//
//    $('#btnCopy').click(function () {
//        performCopyAction(dragItem, dropItem, dropPosition, tree, treeDivId);
//        closeDialog();
//    });
//
//    $('#btnCancel').click(function () {
//        closeDialog();
//    });
//
//    $('.treeJqxDialog, .treeJqxDialog-overlay').click(closeDialog);

}
function closeDialog() {
    $('.treeJqxDialog, .treeJqxDialog-overlay').remove();
}

function performCopyAction(dragItem, dropItem, dropPosition, tree, treeDivId, $dragParentItem) {
    showLoader();
    var treeIdVal = $("#" + treeDivId).attr('treeIdVal');
    var dragParentsData = $(dragItem.element).closest('li').attr('item-description');
    var dropParentsData = $(dropItem.element).closest('li').attr('item-description');
    var dragItemLabel = dragItem.label;
    var dragItemValue = dragItem.value;
    var dropItemValue = dropItem.value;
    $(dragItem.element).closest('li').attr('item-description', dropParentsData + "-:" + dragItemValue);
//    var dragParentsDataArr = dragParentsData.split("-:");
//    var dropParentsDataArr = dropParentsData.split("-:");
//    for (var i = 0; i < 1; i++) {
//        if (dragParentsDataArr[i] == dropParentsDataArr[i]) {
//            var errorMsg = "Please drag same plants boms to same plants Equipments";
//            popupedit(errorMsg, errorMsg);
//            stopLoader();
//            return false;
//        }
//    }

    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "draganddropTreeData",
        cache: false,
        data: {
            dragItemValue: dragItemValue,
            dropItemValue: dropItemValue,
            actionType: "copy", // Indicates this is a copy operation
            treeIdVal: treeIdVal
        },
        success: function (result, status, xhr) {
            stopLoader();
            var response = result;
            var message = response['Message'];

            if (message) {
                if (window.dragSource) {
                    var tree = $('#' + treeDivId).jqxTree('getInstance');
                    tree.removeItem(dragItem);
                }
                var mainDragObj = {};
                var dummyObj = {};
                dummyObj['label'] = dragItemLabel;
                dummyObj['value'] = 'ajax';
                var dummyArr = [dummyObj];
                mainDragObj['label'] = dragItemLabel;
                mainDragObj['value'] = dragItemValue;
                mainDragObj['items'] = dummyArr;
                mainDragObj['description'] = dragParentsData;
                $('#' + treeDivId).jqxTree('addTo', [mainDragObj], $($dragParentItem[0]));
                popupedit("Message", message);
                $("#" + treeDivId).jqxTree('collapseItem', $(dropItem.element));
            }
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function performMoveAction(dragItem, dropItem, dropPosition, tree, treeDivId, $dragParentItem) {
    showLoader();
    var treeIdVal = $("#" + treeDivId).attr('treeIdVal');
    // Get necessary data
    var dragParentsData = $(dragItem.element).first().attr('item-description');
    var dragItemValue = dragItem.value;
    var dropItemValue = dropItem.value;
    var dropParentsData = $(dropItem.element).first().attr('item-description');

    // AJAX call for copy
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "draganddropTreeData",
        cache: false,
        data: {
            dragItemValue: dragItemValue,
            dropItemValue: dropItemValue,
            actionType: "move", // Add action type parameter
            treeIdVal: treeIdVal
        },
        success: function (result, status, xhr) {
            stopLoader();
            var response = result;
            var message = response['Message'];

            if (message) {
                if (window.dragSource) {
                    var tree = $('#' + treeDivId).jqxTree('getInstance');
                    tree.removeItem(dragItem);
                }
                // $(dragItem.element).first().attr('item-description', dropParentsData + "-:" + dragItemValue);
                $("#" + treeDivId).jqxTree('collapseItem', $(dropItem.element));
                //$("#" + treeDivId).jqxTree('expandItem', $(dropItem.element));
                popupedit("Message", message);
            }
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}
function rdsTreetempleteOver(imgId)
{
    console.log("RDS img id:::" + imgId);
    templeteMouseOver("img" + imgId);
}
function rdsTreetempleteout(imgId)
{
    console.log("RDS img id:::" + imgId);
    templeteMouseOut("img" + imgId);

}






var allUserConnections = [];
let instance;
var treeLinkId = [];

function saveTreeLink(mainListArr, connObj) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'post',
            traditional: true,
            dataType: 'json',
            url: 'saveTreeLink',
            cache: false,
            async: false,
            data: {
                source: connObj.source,
                target: connObj.target,
                mainListArr: mainListArr
            },
            success: function (result, status, xhr) {
                const arr = result.list;
                resolve(arr);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
            }
        });
    });
}

function deleteTreeLink(sourceId, targetId) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'post',
            traditional: true,
            dataType: 'json',
            url: 'deleteTreeLink',
            cache: false,
            async: false,
            data: {
                source: sourceId,
                target: targetId
            },
            success: function (result, status, xhr) {
                const arr = result.list;
                resolve(arr);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
            }
        });
    });
}

function getTreeLink() {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'post',
            traditional: true,
            dataType: 'json',
            url: 'getTreeLink',
            cache: false,
            async: false,
            data: {},
            success: function (result, status, xhr) {
                const arr = result.list;
                resolve(arr);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
            }
        });
    });
}

async function applyTreeNodeLink(id)
{
    if (!treeLinkId.includes(id)) {
        treeLinkId.push(id);
    }
    instance = jsPlumb.getInstance({
        Container: 'dxp1MainSplitter' //10-04-2025
    });

    instance.bind("connection", async function (info)
    {
        const connObj = {
            source: info.sourceId,
            target: info.targetId
        };
        if (!allUserConnections.some(c => c.source === connObj.source && c.target === connObj.target)) {
//            allUserConnections.push(connObj);
            let expandedItems = [];
            let items = $('#jqxTree0').jqxTree('getItems');
            for (let i = 0; i < items.length; i++) {
                if (i !== 0 && (items[i].isExpanded || items[i].selected)) {
                    let htmlLabel = items[i].label;
                    if (/<[a-z][\s\S]*>/i.test(htmlLabel)) {
                        htmlLabel = $(htmlLabel).text();
                    }
                    expandedItems.push(htmlLabel);
                }
            }
            const mainListArr = JSON.stringify(expandedItems);
            const sourceContent = info.source.textContent;
            const targetContent = info.target.textContent;
            const inputStr = info.source.id;
            const parts = inputStr.split('-');
            var arrObj = await saveTreeLink(mainListArr, connObj);
            allUserConnections = []
            if (arrObj.length !== 0) {
                allUserConnections.push(...arrObj);
            }
            setTimeout(() => {
                instance.getConnections().forEach(conn => {
                    instance.deleteConnection(conn);
                });
                restoreConnections();
            }, 500);
        }
    });
    var arrObj = await getTreeLink();
    allUserConnections = []
    if (arrObj.length !== 0) {
        allUserConnections.push(...arrObj);
    }
    $('#' + id).on('expand', function (event) {
        refreshJsPlumb(event, id);
    });

    $('#' + id).on('collapse', function (event) {
        refreshJsPlumb(event, id);
    });
    setTimeout(() => {
        if (id.includes("1")) {
            enableJsPlumb(id, 'Right');
        } else if (id.includes("2")) {
            enableJsPlumb(id, 'Left');
            enableJsPlumb(id, 'Right');
        } else if (id.includes("3")) {
            enableJsPlumb(id, 'Left');
        }
    }, 300);
}

function refreshAllConnections() {
    if (instance != undefined) {
        instance.deleteEveryEndpoint();
    }
    $.each(treeLinkId, function (ind, id) {
        if (id.includes("1")) {
            enableJsPlumb(id, 'Right');
        } else if (id.includes("2")) {
            enableJsPlumb(id, 'Left');
            enableJsPlumb(id, 'Right');
        } else if (id.includes("3")) {
            enableJsPlumb(id, 'Left');
        }
    });
    if (instance != undefined) {
        instance.repaintEverything();
    }
    restoreConnections();
}

function restoreConnections() {
    setTimeout(() => {
        allUserConnections.forEach(conn => {
            if ($('#' + conn.source).is(':visible') && $('#' + conn.target).is(':visible')) {
                const sourceLeft = $('#' + conn.source).offset().left;
                const targetLeft = $('#' + conn.target).offset().left;

                const anchors = sourceLeft < targetLeft
                        ? ['RightMiddle', 'LeftMiddle']
                        : ['LeftMiddle', 'RightMiddle'];

                const connection = instance.connect({
                    source: conn.source,
                    target: conn.target,
                    anchors: anchors,
                    paintStyle: {stroke: '#006BB8', strokeWidth: 3, dashstyle: "2 2"},
                    connector: ['Bezier', {curviness: 50}],
                    endpoint: ['Dot', {radius: 4}],
                    endpointStyle: {fill: 'transparent'}, //10-04-2025
                    overlays: [
                        ['Label', {
                                label: '✖',
                                location: 0.5,
                                cssClass: 'delete-conn-tree-link',
                                events: {
                                    click: async function (labelOverlay, originalEvent) {
                                        const connection = labelOverlay.component;
                                        instance.deleteConnection(connection);
//                                        const index = allUserConnections.findIndex(c =>
//                                            c.source === connection.sourceId && c.target === connection.targetId
//                                        );
//                                        if (index !== -1) {
//                                            allUserConnections.splice(index, 1);
//                                        }
                                        var arrObj = await deleteTreeLink(connection.sourceId, connection.targetId);
                                        allUserConnections = []
                                        if (arrObj.length !== 0) {
                                            allUserConnections.push(...arrObj);
                                        }
                                        instance.repaintEverything();
                                        refreshAllConnections();
                                    }

                                }
                            }]
                    ]
                });
            }
        });
    }, 300);
}


function refreshJsPlumb(event, id) {
    const $targetNode = $(event.args.element);
    const $childList = $targetNode.children('ul');
    const isExpanded = $childList.length > 0 && $childList.is(':visible');

    setTimeout(() => {

        instance.removeAllEndpoints(id)
                ;
        if (id.includes("1")) {
            enableJsPlumb(id, 'Right');
        } else if (id.includes("2")) {
            enableJsPlumb(id, 'Left');
            enableJsPlumb(id, 'Right');
        } else if (id.includes("3")) {
            enableJsPlumb(id, 'Left');
        }
        instance.repaintEverything();
        restoreConnections();
    }, 300);

    if (!isExpanded) {
        console.log("Collapsing: hiding nodes and connections");
        $childList.find('.jqx-tree-item').each(function () {
            const nodeId = $(this).attr('id');
            if (nodeId) {
                $('#' + nodeId).hide();
                instance.getConnections().forEach(conn => {
                    if (conn.sourceId === nodeId || conn.targetId === nodeId) {
                        instance.deleteConnection(conn);
                    }
                });
            }
        });
    } else {
        console.log("Expanding: showing nodes and restoring links");
        $childList.find('.jqx-tree-item').each(function () {
            const nodeId = $(this).attr('id');
            if (nodeId) {
                $('#' + nodeId).show();
            }
        });
        restoreConnections();
    }
}


function enableJsPlumb(treeId, direction) {
    $('#' + treeId).find('.jqx-tree-item').each(function (index) {
        if (index === 0)
            return;
        const $node = $(this);
//        let nodeId = $node.attr('id');
//        if (!nodeId) {
//            nodeId = 'node-' + Math.random().toString(36).substr(2, 9);
//            $node.attr('id', nodeId);
//        }
        if ($node.text().trim() === '' || $node.text().includes('Default'))
            return;
        let nodeId = '';
        nodeId = $(this).closest('.jqx-tree-item-li').attr('item-description');
        if (typeof nodeId === 'undefined' || nodeId.trim() === '') {
            return; // skip node if no item-description
        }
        if (nodeId != undefined) {
            var nodeIds = nodeId.split("-:");
            nodeId = nodeIds[nodeIds.length - 1];
            nodeId = nodeId.replaceAll('-:', '-')
                    .replaceAll(' ', '')
                    .replaceAll('#', '--')
                    .replaceAll(',', '_');
            $node.attr('id', nodeId);
        } else {
            nodeId = $(this).closest('.jqx-tree-item-li').attr('id');
            if (nodeId != undefined) {
                $node.attr('id', nodeId);
            }
        }

        instance.draggable($node, {containment: '#treeContainerView'});
        $node.addClass('drag-tree-node');
        instance.addEndpoint(nodeId, {
            anchor: direction + 'Middle',
            isSource: true,
            isTarget: true,
            endpoint: ['Dot', {radius: 4}],
            paintStyle: {fill: 'transparent', strokeWidth: 3, dashstyle: "2 2"},
            cssClass: 'dot-hover ' + (direction === 'Right' ? 'dot-left' : 'dot-right')
        });

        function repaintIfNeeded(targetId) {
            $('#' + targetId).animate({
                scrollTop: $('#' + targetId).offset().top
            }, 10, function () {  //10-04-2025
                instance.repaint(targetId);
            });
        }
        const $tree = $('#' + treeId);

        $tree.on('scroll', () => repaintIfNeeded(treeId));

        $tree.parents().on('scroll', () => repaintIfNeeded(treeId));
        $('#' + treeId).on('valueChanged', function (event) {
            repaintIfNeeded(treeId);
        });
        setInterval(function () {
            if ($('#dxp1TabsWithGridContent').css('display') === 'none') {
                instance.deleteEveryConnection();
            }
        }, 1000);
        //scroll
        //10-04-2025
        $('.dot-hover').on('mouseenter', function () {
            $(this).find('circle').css('fill', '#006BB8');
        }).on('mouseleave', function () {
            $(this).find('circle').css('fill', 'transparent');
        });
        //10-04-2025
    });
}

function treeChildDataRefersh(treeDivId, item) {
    var $tree = $('#' + treeDivId);
    $tree.jqxTree('collapseItem', item.element);
    var children = $tree.jqxTree('getItems').filter(function (child) {
        return child.parentElement === item.element;
    });

    children.forEach(function (child) {
        $tree.jqxTree('removeItem', child);
    });
    $tree.jqxTree('addTo', {
        label: 'Load Children',
        value: 'ajax'
    }, item.element);
    $tree.jqxTree('expandItem', item.element);
    setTimeout(() => {
        refreshAllConnections();
    }, 200);
}

function showRDSTreeMapping()
{
    var parentWhereCondArrStr = $("#jqxTree1").attr("parentWhereCondArr");
    $.ajax({
        type: 'post',
        traditional: true,
        dataType: 'json',
        url: 'showRDSMapping',
        cache: false,
        async: false,
        data: {
            parentWhereCondArr: parentWhereCondArrStr
        },
        success: function (result, status, xhr) {
            var mappingStr = result['mappingStr']
            var min = 100;  // Minimum value (inclusive)
            var max = 100000; // Maximum value (inclusive)
            var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
            var dialogId = "dialog" + randomInt;
            $("body").append("<div id='" + dialogId + "'></div>");
            $("#" + dialogId).html(mappingStr);

            const connections = [
                ['left1', 'right1'],
                ['left1', 'right2'],
                ['left1', 'right4'],
                ['left1', 'right5'],
                ['left2', 'right6'],
                ['left2', 'right7'],
                ['left2', 'right8'],
                ['left2', 'right9'],
                ['left3', 'right3'],
            ];

            const svg = document.getElementById("rdsToISOMappingConnectorSvg");
            //svg.innerHTML = '<defs> <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"> <polygon points="0 0, 10 3.5, 0 7" fill="#4a90e2"/> </marker> </defs>';
// connections.forEach(([leftId, rightId]) => {
//                const from = document.getElementById(leftId);
//                const to = document.getElementById(rightId);
//                if (!from || !to)
//                    return;
//
//                const fromRect = from.getBoundingClientRect();
//                const toRect = to.getBoundingClientRect();
//                const containerRect = document.getElementById('rdsToISOMappingId').getBoundingClientRect();
//
//                const x1 = fromRect.right - containerRect.left;
//                const y1 = fromRect.top + fromRect.height / 2 - containerRect.top;
//
//                const x2 = toRect.left - containerRect.left;
//                const y2 = toRect.top + toRect.height / 2 - containerRect.top;
//
//                const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
//                line.setAttribute("x1", x1);
//                line.setAttribute("y1", y1);
//                line.setAttribute("x2", x2);
//                line.setAttribute("y2", y2);
//                line.setAttribute("marker-end", "url(#arrowhead)");
//                svg.appendChild(line);
//            });
            svg.innerHTML = `<defs>
                      <marker id="arrowhead" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                        <polyline points="2,2 8,5 2,8" fill="none" stroke="#007bff" stroke-width="2"/>
                      </marker>
                    </defs>
                  `;

            connections.forEach(([leftId, rightId], index) => {
                const from = document.getElementById(leftId);
                const to = document.getElementById(rightId);
                if (!from || !to)
                    return;

                const fromRect = from.getBoundingClientRect();
                const toRect = to.getBoundingClientRect();
                const containerRect = document.getElementById('rdsToISOMappingId').getBoundingClientRect();

                const x1 = fromRect.right - containerRect.left;
                const y1 = fromRect.top + fromRect.height / 2 - containerRect.top;
                const x2 = toRect.left - containerRect.left;
                const y2 = toRect.top + toRect.height / 2 - containerRect.top;

                // Create a cubic Bézier curve
                const controlX1 = x1 + (x2 - x1) * 0.4;
                const controlY1 = y1;
                const controlX2 = x2 - (x2 - x1) * 0.4;
                const controlY2 = y2;

                // Create the path
                const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                const pathD = `M ${x1},${y1} C ${controlX1},${controlY1} ${controlX2},${controlY2} ${x2},${y2}`;
                path.setAttribute("d", pathD);
                path.setAttribute("stroke", "#2980b9");
                path.setAttribute("stroke-width", "2");
                path.setAttribute("stroke-opacity", "0.8");
                path.setAttribute("fill", "none");
                path.setAttribute("marker-end", "url(#arrowhead)");
                path.setAttribute("id", `path-${index}`);
                svg.appendChild(path);
            });




            $("#" + dialogId).dialog({
                title: labelObject['ISO 81346 to ISO 14224 Mapping'] != null ? labelObject['ISO 81346 to ISO 14224 Mapping'] : 'ISO 81346 to ISO 14224 Mapping',
                modal: true,
                height: 600,
                width: 1200,
                fluid: true,
                buttons: [
                    {
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        class: 'rdsMoveCopyButton',
                        click: function () {

                            $(this).html("");
                            $(this).dialog('close');
                            $(this).dialog('destroy');

                        }
                    }
                ],
                open: function () {
//                   
//                    window.addEventListener("load", drawLines);
//                    window.addEventListener("resize", drawLines);
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");

                },
                beforeClose: function (event, ui)
                {
                    $(this).html("");
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                    $("#iframeid").remove();
                }
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });

}

function addRDSTreeChildTreeNodes($this, treeDivId, treeIdValue)
{
    var colName = "";
    if (treeIdValue == 'PM_ASSET_FA_HIERARCHY_TREE')
    {
        colName = "FUNCTIONAL_ASPECT_ID";
    } else if (treeIdValue == 'PM_ASSET_PA_HIERARCHY_TREE')
    {
        colName = "PRODUCT_ASPECT_ID";
    } else if (treeIdValue == 'PM_ASSET_LA_HIERARCHY_TREE')
    {
        colName = "LOCATION_ASPECT_ID";
    }
    var columnsObj = [];
    var columnsObjStr = $('#' + treeDivId).attr('columnsObj');
    if (columnsObjStr != null && columnsObjStr != '' && columnsObjStr != undefined)
    {
        columnsObj = JSON.parse(columnsObjStr);
    }
    var parentItem = $(this).closest('.jqx-tree-item');
    var item = $('#' + treeDivId).jqxTree('getSelectedItem');
    var parentNodeData = $('#' + treeDivId).jqxTree('getItem', item);
    var newChildItem = true;
    if (newChildItem) {
        var addLevel = parentNodeData.level;
        var parentWhereCondArrStr = $('#' + treeDivId).attr('parentWhereCondArr');
        var treeIdVal = $('#' + treeDivId).attr('treeIdVal');
        if (parentItem != null && addLevel > 0)
        {
            var parentChildWhereCondArr = [];
            var parentItemEle = $(item.element)[0];
            for (var p = addLevel - 1; p >= 0; p--)
            {
                var parentItemId = $('#' + treeDivId).jqxTree('getItem', parentItemEle);
                if (parentItemId != null)
                {
                    var parentVal = parentItemId.value;
                    var colObj = columnsObj[p];
                    var parentCol = colObj['FLD_NAME'];
                    if (parentCol != null && parentCol != '' && parentCol != undefined)
                    {
                        var parentChilWhereCondObj = {};
                        parentChilWhereCondObj['column'] = colName//parentCol;
                        parentChilWhereCondObj['operator'] = "EQUALS";
                        parentChilWhereCondObj['value'] = parentVal;
                        parentChildWhereCondArr.push(parentChilWhereCondObj);
                    }
                }
                if (p > 0)
                {
                    parentItemEle = parentItemEle.parentElement.parentElement;
                }

            }
        }
        if (!(parentChildWhereCondArr != null && parentChildWhereCondArr != '' && parentChildWhereCondArr != undefined
                && !jQuery.isEmptyObject(parentChildWhereCondArr)))
        {
            parentChildWhereCondArr = [];
        }
        addChildTreeAspectsData(addLevel, treeIdVal, parentWhereCondArrStr, item, columnsObj[addLevel], parentChildWhereCondArr[0], treeDivId);
    }
}


function deleteRDSTreeChildTreeNodes($this, treeDivId, treeIdVal)
{
    let sourceId = $(this).closest('.jtk-connected').attr('id');//10-04-2025
    if (sourceId != null && sourceId != undefined && sourceId != '') {
        let targetId = instance.getAllConnections()
                .filter(conn => conn.sourceId === sourceId)
                .map(conn => conn.targetId);
        deleteTreeLink(sourceId, targetId);
    }
//    var itemElement = $this.closest('li')[0];
//    var itemData = $('#' + treeDivId).jqxTree('getItem', itemElement);
    var item = $('#' + treeDivId).jqxTree('getSelectedItem');
    var itemData = $('#' + treeDivId).jqxTree('getItem', item);
    if (itemData) {
        var removeVal = itemData['value'];
        removeRDSTreeSubItems(removeVal, itemData, treeDivId, treeIdVal);

    }
}

function populateRDSTreeData(browseId, gridId) {
    $("#" + browseId).unbind("change").on("change", function () {
        var file = $('#' + browseId)[0].files[0];
        getRDSMutipleFileUploadColMapping(file, file['name'], gridId);

    })
    $("#" + browseId).click();

}
async function getRDSMutipleFileUploadColMapping(file, fileName, gridId) {
    var settimeout = '10000';
    var formData = new FormData();
    formData.append("importFile", file, fileName);
    formData.append("gridId", gridId);
    showLoader();
    $.ajax({
        url: 'importMultiFileAjaxColMapping',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        settimeout: settimeout,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
//            $("#Loader").css({opacity: "0.99", display: "block"});
//            $("body").css("pointer-events", "none");
            // Optional: Include your custom start logic
        },
        success: function (result) {
            var multiResultObject = JSON.parse(result);
            var multiListGridIdArr = multiResultObject['multiListGridId']
            var columnMappingGlobalObj = {};
            var mappedFileHeadersObject = {};
            var mappedGridColumnsObj = {};
            var fileHeadersObj = {};
            var gridTable = "";
            var filePath = "";
            var htmlDiv = "";
            for (var key in multiListGridIdArr) {
                if (multiListGridIdArr.hasOwnProperty(key)) {
                    var gridListId = multiListGridIdArr[key];

                    htmlDiv += "<div id='importFileColumnsMapppingOptionsDiv_" + gridListId + "' >"
                            + "<img id='importFileColumnsMapppingInfo_" + gridListId + "' onclick='importColumnMappingAssistant()' src='images/Information_icon_Blue.svg' style='float:right;width:20px;' />"
                            + "</div>"
                            + "<div id='importFileColumnMappingId_" + gridListId + "' class='' ></div>";

                }
            }
            $("#messagedialog5").html(htmlDiv);
            $("#messagedialog5").addClass("ai-panel-flowchart multipleMappingsFlowChart");
            $("#messagedialog5").dialog({resizable: false,
                modal: true,
                title: (labelObject['Map Columns'] != null ? labelObject['Map Columns'] : 'Map Columns'),
                height: 500,
                minHeight: 'auto',
                width: 900,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: (labelObject['Import'] != null ? labelObject['Import'] : 'Import'),
                        click: function () {
                            stopLoader();
                            $.ajax({
                                type: "post",
                                traditional: true,
                                dataType: 'html',
                                url: 'importExcelMultiColMapping',
                                cache: false,
                                data: {
                                    tableName: gridTable,
                                    filePath: filePath,
                                    gridId: gridId,
                                    mappedFileHeadersArray: JSON.stringify(mappedFileHeadersObject),
                                    mappedGridColumnsArray: JSON.stringify(mappedGridColumnsObj),
                                    fileHeaders: JSON.stringify(fileHeadersObj),
                                    columnMappingObjStr: JSON.stringify(columnMappingGlobalObj)
                                },
                                success: function (result) {
                                    stopLoader();
                                    var responseObj = JSON.parse(result);
                                    $('#' + gridId).jqxGrid('updatebounddata');
                                    showRDSTreeMessage("Data Imported Successfully", 'PM_ASSET_FLOC_HIERARCHY_TREE');

                                },
                                error: function (e) {
                                    console.log(e);
                                    sessionTimeout(e);
                                    stopaiLoader();
                                    stopLoader();
                                }
                            })

                            $(this).html("");
                            $(this).dialog("close");
                        }
                    }],
                open: function () {
                    for (var key in multiResultObject) {
                        if (multiResultObject.hasOwnProperty(key) && key != "multiListGridId") {
                            var resultObject = multiResultObject[key];
                            var fileHeaders = resultObject['headersArray']
                            if (resultObject['filePath'] != null && resultObject['filePath'] != "") {
                                filePath = resultObject['filePath'];
                            }
                            gridTable = resultObject['gridTable'];
                            var columnLabels = resultObject['columnLabels']
                            var datafields = resultObject['datafields']
                            var columnNameInputs = {};
                            var columnNameArray = [];
                            var mappedGridColumnsArray = [];
                            var mappedGridLabelssArray = [];
                            var mappedFileHeadersArray = [];
                            fileHeadersObj[key] = fileHeaders;
                            var columnMappingObj = {};
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

                            var fileHeaders = resultObject['headersArray']
                            //var filePath = resultObject['filePath']
                            var fileName = resultObject['fileName']

                            var headersCount = resultObject['headersCount']
                            var fileRowCount = resultObject['fileRowCount']

                            var fileTitle = "<div>File Name : " + fileName + "<br>"
                                    + "Columns Count : " + headersCount + "<br>"
                                    + "Rows Count : " + fileRowCount + "</div>";
//                    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                            var tableTitle = "<div>Staging Table <br>"
                                    + "Columns Count : " + columnNameArray.length + "<br>"
                                    + "Rows Count : " + fileRowCount + "</div>";
                            var fileHeaderObject = {};
                            $.each(fileHeaders, function (i) {
                                var header = fileHeaders[i];
                                fileHeaderObject[header] = header;
                            })
                            if (fileHeaders.length > Object.keys(fileHeaderObject).length) {
                                showMesg("Duplicate file headers found. Please make changes to proceed.");
                                $(this).html("");
                                $(this).dialog("close");
                                throw new Error("Duplicate file headers found.");
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
                                        width: 300,
                                        properties: {
                                            title: fileTitle,
                                            inputs: {},
                                            outputs: fileHeaderOutputs,
                                        }
                                    },
                                    operator2: {
                                        top: 20,
                                        left: 500,
                                        width: 300,
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
                            $('#importFileColumnMappingId_' + key).flowchart({
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

                            $('#importFileColumnMappingId_' + key).flowchart({
                                onOperatorMoved: function (operatorId, position) {
                                    if (position.top < 0) {
                                        var operatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', operatorId);
                                        operatorData.top = 20;
                                        $('#importFileColumnMappingId_' + key).flowchart('setOperatorData', operatorId, operatorData);
                                        $(".flowchart-operator-connector-label").show();
//                                        $(".flowchart-operator").css("width", "300px", "!important"); 
//                                        $(".flowchart-operator").css("height", "auto", "!important");
                                        $(".flowchart-operator-title").show();
                                    }
                                    return true;
                                },
                                onLinkCreate: function (linkId, linkData) {
                                    var getdata = $('#importFileColumnMappingId_' + key).flowchart('getData');
                                    var fromOperator = linkData['fromOperator']
                                    var fromConnector = linkData['fromConnector'];
                                    var fromOperatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', fromOperator);
                                    var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                                    mappedFileHeadersArray.push(label);
                                    var toOperator = linkData['toOperator']
                                    var toConnector = linkData['toConnector'];
                                    var toOperatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', toOperator);
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

                                    var flowChartData = $('#importFileColumnMappingId_' + key).flowchart('getData');
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
                                    var fromOperatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', fromOperator);
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
                                    var linkId = $('#importFileColumnMappingId_' + key).flowchart('getSelectedLinkId');
                                    $('#importFileColumnMappingId_' + key).one('click', function () {
                                        $('#importFileColumnMappingId').flowchart('deleteSelected');
                                    });
                                    return true;
                                }

                            });
                            $(".flowchart-operator-connector-label").show();
//                            $(".flowchart-operator-connector-label").css("width", maxHeaderLength * 10 + "px", "!important");
                            $(".flowchart-operator").css("width", "300px", "!important");
                            $(".flowchart-operator").css("height", "auto", "!important");
                            $(".flowchart-operator-title").show();
                            $.each(linksData, function (linkid, linkdata) {
                                $('#importFileColumnMappingId_' + key).flowchart('addLink', linkdata);
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
                            $("#importFileColumnsMapppingInfo_" + key).popover({
                                trigger: "click",
                                html: true,
                                maxwidth: 'auto',
                                placement: "left",
                                //                title: "Event Timings", 
                                content: function (event) {
                                    var html = "<div id='carouselExampleControls'class='carousel slide'data-bs-ride='carousel'>"
                                            + "<ul>"
                                            + "<li><img src='images/list-point-Icons.png' alt='' > <span> Map File columns to Table columns by using your mouse.</span></li>"
                                            + "<li><img src='images/list-point-Icons.png' alt='' > <span> Map File columns to Table columns by using your mouse.</span></li>"
                                            + "<li><img src='images/list-point-Icons.png' alt='' > <span> Map File columns to Table columns by using your mouse.</span></li>"
                                            + "<li><img src='images/list-point-Icons.png' alt='' > <span> Map File columns to Table columns by using your mouse.</span></li>"
                                            + "</ul>"
                                            + "<div class='mappingiconwrapper'>"
                                            + "<span><img src='images/mapping.svg' alt='' ></span>"
                                            + "<span><img src='images/mapping.svg' alt='' ></span>"
                                            + "<span><img src='images/mapping.svg' alt='' ></span>"
                                            + "<span><img src='images/mapping.svg' alt='' ></span>"
                                            + "</div>"

                                            + "</div>";
                                    return html;
                                },
                                //                    height:250px,
                            });
                            $("#importFileColumnsMapppingInfo_" + key).on("shown.bs.popover", function () {
                                $("#carouselExampleControls").parent().addClass("helpIconPopOverclass");
                            });
                            $("#fileAnalyticsId").attr("title", "Analysis");
                            $("#fileDataTypesValidationId").attr("title", "Validate Datatypes");
                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                            $(this).closest(".ui-dialog").addClass("visionCommonDialog");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");

                            mappedFileHeadersObject[key] = mappedFileHeadersArray;
                            mappedGridColumnsObj[key] = mappedGridColumnsArray;
                            columnMappingGlobalObj[key] = columnMappingObj;
                        }
                    }
                },
                beforeClose: function (event, ui)
                {
                    $(".popover").remove();
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
            try {
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
}
function showRDSTreeMessage(Message, treeId)
{
    stopLoader();
    $("#dialog").html(Message);
    $("#dialog").dialog({resizable: false,
        title: 'Message',
        modal: true,
        width: 300,
        height: 160,
        fluid: true,
        buttons: [
            {
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    showSelectedTabContent(this, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent');
                    getFunctionalTreeobject(treeId, "jqxTree0", '100%');
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }, {
                text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }
        ],
        open: function (event, ui) {

        },
        beforeClose: function (event, ui) {
            $(this).html("");
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}
function getFunctionalChildEquipmentTreeobject(treeId, treeDivId, width)
{
    if (treeId != null) {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getGenericDxpTree",
            cache: false,
            data: {
                treeId: treeId
            },
            success: function (treeObject) {
                stopLoader();
                var treeConfigObj = treeObject['treeConfigObj'];
                var treeInitParamObj = treeObject['treeInitParamObj'];
                var columnsObj = treeObject['treeColumnObj'];
                treeConfigObj.allowDrag = true;
                treeConfigObj.allowDrop = true;
                treeConfigObj.width = '100%';
                treeConfigObj.height = '100%';
                treeConfigObj.source = [{"label": "Equipment", "value": "Equipment", "items": [{"label": "Equipment", "value": "ajax"}]}];
                treeConfigObj.enableHover = true;
                treeConfigObj.theme = "energyblue";
                treeConfigObj.incrementalSearch = true;
                $('#' + treeDivId).jqxTree(treeConfigObj);
                $("#" + treeDivId).jqxTree('focus');
                $("#jqxTreeSearchDivId3").show();
                $("#jqxTreeSearchDivId3").html(`<input type="text" id="jqxTreeEquipmentSearchResult" autocomplete="off" 
                        title="Enter atleast 3 characters to Search" placeholder="Type keyword(s) to search" data-no="NA" 
                        aria-haspopup="true" aria-multiline="false" aria-readonly="false" aria-disabled="false" aria-autocomplete="both" 
                        role="textbox" class="visionSearchClearResize clearable clearable2 ac jqx-widget-content jqx-widget-content-arctic jqx-input
                        jqx-input-arctic jqx-widget jqx-widget-arctic jqx-rc-all jqx-rc-all-arctic smartserachclass" data-selected="NO">
                        <a class="clear_searchField" style="position: absolute;font-size: 18px; cursor: pointer; display: none; top:2.5px; right: 5px;"
                        onclick="clearjqxTreeRDSEquipmentsearch();">×</a>
                        <div class="jqxTreeRDSsearchButton">
                        <input type="submit" id="jqxTreeRDSEquipmentsearch" class="jqxTreeRDSEquipmentsearchbutton" 
                        value="" onclick="getJqxTreeRDSEquipmentsearch('${treeId}','${treeDivId}','${width}')" title="Click here to Search"></div>`);
                $('#' + treeDivId).unbind('mouseenter').on('mouseenter', '.jqx-tree-item', function (e) {
                    $(this).removeAttr('title');
                });
                $('#' + treeDivId).on('expand', function (event) {
                    showLoader();
                    var parentItem = $('#' + treeDivId).jqxTree('getItem', event.args.element);
                    var level = parentItem.level;
                    var $element = $(event.args.element);
                    var loader = false;
                    var loaderItem = null;
                    var classTerm = $("#jqxTreeEquipmentSearchResult").val();
                    var children = $element.find('ul:first').children();
                    // var children = $element.find('ul:first').children();
                    $.each(children, function () {
                        var item = $('#' + treeDivId).jqxTree('getItem', this);
                        if (item && item.value == 'ajax') {
                            loaderItem = item;
                            loader = true;
                            return false;
                        }
                    });
                    var parentWhereCondArr = [];
                    if (classTerm != null && classTerm != '' && classTerm != undefined)
                    {
                        classTerm = classTerm.toUpperCase();
                        var colsObj = columnsObj[level];
                        var parentWhereCondObj = {};
                        parentWhereCondObj['column'] = colsObj['FLD_NAME'];
                        parentWhereCondObj['operator'] = "LIKE";
                        parentWhereCondObj['value'] = classTerm + "%";
                        parentWhereCondArr.push(parentWhereCondObj);
                    }
                    if (loaderItem != null) {
                        var extTreeParams = $("#extTreeParams").val();
                        $('#' + treeDivId).jqxTree('removeItem', loaderItem.element);
                        $.ajax({
                            type: "post",
                            traditional: true,
                            dataType: 'json',
                            url: "getTreeDataOpt",
                            cache: false,
                            data: {
                                parentkey: parentItem.value,
                                treeId: treeId,
                                level: parentItem.level,
                                extTreeParams: extTreeParams,
                                columnsObj: JSON.stringify(columnsObj),
                                parentWhereCondArr: JSON.stringify(parentWhereCondArr)
                            },
                            success: function (data, status, xhr) {
                                stopLoader();
                                if (data != null && !jQuery.isEmptyObject(data) && data.length > 0) {
                                    $('#' + treeDivId).jqxTree('addTo', data, $element[0]);
                                    var items = $('#' + treeDivId).jqxTree('getItems');
                                    $.each(items, function () {
                                        $(this.titleElement).attr('title', this.label);
                                        $("#" + this.titleElement[0].id).removeClass('visionETLParentHighight');
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
                });

                $('#' + treeDivId).on('select', function (event)
                {
                    var args = event.args;
                    var item = $('#' + treeDivId).jqxTree('getItem', args.element);
                    var label = item.label;
                    var type = args.type; // mouse, keyboard or null. If the user selects with the mouse, the type will be "mouse".
                    var level = item['level'];
                    var selectedValue = item['value'];
                    var selectTree = $('#' + treeDivId).jqxTree('getInstance');
                    selectTree.clearSelection();
                    if (level == 0) {
                        var compType = "ASSET_STRUCTURE";
                        var compId = "Process Function(=):PM_ASSET_FA_HIERARCHY_TREE;"
                                + "Process Product(-):PM_ASSET_PA_HIERARCHY_TREE;"
                                + "Infrastructure Function(==):PM_ASSET_IF_HIERARCHY_TREE;"
                                + "Infrastructure Product(--):PM_ASSET_IP_HIERARCHY_TREE;"
                                + "Location(++):PM_ASSET_LA_HIERARCHY_TREE;"
                                + "Functional Location:PM_ASSET_FLA_HIERARCHY_TREE;"
                                + "Equipment:PM_ASSET_EA_HIERARCHY_TREE;"
                                + "Material:PM_ASSET_MATERIAL_HIERARCHY_TREE;"
                                + "Legacy:PM_ASSET_LEGACY_HIERARCHY_TREE";
                        if (compId != null
                                && compId != '' && compId != undefined
                                && compType != null && compType != '' && compType != undefined) {
                            if (compType == 'ASSET_STRUCTURE') {
                                var compIds = compId.split(";");
                                var compHtml = "<ul>";
                                $.each(compIds, function (i, val) {
                                    if (val != null && val != '' && val != undefined) {
                                        var compVals = val.split(":");
                                        compHtml += "<li><label><input type=\"radio\" name ='showSelectedRDSStructureRadioButtonName' class=\"single-select\" value='" + compVals[1] + "'>" + compVals[0] + "</label></li>";
                                    }
                                });
                                compHtml += "</ul>";
                                $("#showStructuresId").remove();
                                $("body").append("<div id=\"showStructuresId\" class=\"showRDSStructuresClass\">"
                                        + compHtml
                                        + "</div>");
                                var itemId = item['id'];
                                var itemParticularId = $("#" + itemId).find("div:first").attr('id');
                                $("#showStructuresId").jqxPopover({
                                    offset: {left: 30 + "px", top: 0},
                                    position: 'bottom',
                                    width: 250,
                                    height: 140,
                                    autoClose: true,
                                    title: "<h6 class='iDXPSelectRDSStructurePopoverTitleClass'>Select Structure  :</h6>",
                                    showCloseButton: true,
                                    selector: $("#" + itemParticularId)

                                });
                                $("#showStructuresId").jqxPopover('open');
                                $("#showStructuresId").addClass('showRDSStructuresClass');
                                $('#showStructuresId .jqx-popover-header').hide();
                                $(".jqx-popover-arrow").css({
                                    'top': '-9%',
                                    'left': '88px'
                                });
                                $('input[name="showSelectedRDSStructureRadioButtonName"]').on('change', function () {
                                    const selectedValue = $('input[name="showSelectedRDSStructureRadioButtonName"]:checked').val();
                                    if (selectedValue == 'PM_ASSET_FLA_HIERARCHY_TREE')
                                    {
                                        getFunctionalChildLocationTreeobject(selectedValue, treeDivId, "100%");
                                        return;
                                    }
                                    $("#jqxTreeSearchDivId3").hide();
                                    var parentWhereCondArr = $("#" + treeDivId).attr("parentWhereCondArr");
                                    var treeIdVal = $("#" + treeDivId).attr("treeIdVal");
                                    var count = treeDivId.replace("jqxTree", "");
                                    $("#" + treeDivId).jqxTree("destroy");
                                    $("#jqxTreeData" + count).append("<div id='" + treeDivId + "'></div>");
                                    $("#" + treeDivId).attr("parentWhereCondArr", parentWhereCondArr);
                                    $("#" + treeDivId).attr("treeIdVal", treeIdVal);
                                    refreshAllConnections();
                                    if (selectedValue == 'PM_ASSET_EA_HIERARCHY_TREE')
                                    {
                                        getFunctionalChildEquipmentTreeobject(selectedValue, treeDivId, "100%");
                                    } else if (selectedValue == 'PM_ASSET_LA_HIERARCHY_TREE')
                                    {
                                        getFunctionalChildTreeobject(selectedValue, treeDivId, "100%");
                                    }
                                    console.log('Selected value:', selectedValue);
                                });
                            }
                        }
                    } else if (level >= 1)
                    {
                        if (level != null && level != '' && level != '0') {
                            level = parseInt(level) - 1;
                        }
                        var selectedColumnObj = columnsObj[level];
                        if (selectedColumnObj != null && !jQuery.isEmptyObject(selectedColumnObj)) {
                            console.log(JSON.stringify(selectedColumnObj) + ":::::" + selectedValue);
                            var compType = selectedColumnObj['FOLLOWUP_COMP_TYPE'];
                            var compId = selectedColumnObj['FOLLOWUP_COMP_ID'];
                            if (compId != null
                                    && compId != '' && compId != undefined
                                    && compType != null && compType != '' && compType != undefined) {
                                if (compType == 'CLUSTER') {
                                    var clusterDiv = '<div id="clusterSplitter">'
                                            + '<div class="visionMasterDetailPanelTop" id="levelTabId"></div>'
                                            + '<div class="visionMasterDetailPanelBottom" id="level1TabId"></div>'
                                            + '</div>';
                                    $("#dialog").html(clusterDiv);
                                    $("#dialog").dialog({
                                        resizable: false,
                                        title: labelObject['Asset Data'] != null ? labelObject['Asset Data'] : 'Asset Data',
                                        modal: true,
                                        height: 700,
                                        width: 1400,
                                        fluid: true,
                                        buttons: [
                                            {
                                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                                class: 'rdsMoveCopyButton',
                                                click: function () {

                                                    $(this).html("");
                                                    $(this).dialog('close');
                                                    $(this).dialog('destroy');
                                                }
                                            },
                                            {
                                                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                                                class: 'rdsMoveCopyButton',
                                                click: function () {
                                                    $(this).html("")
                                                    $(this).dialog('close');
                                                    $(this).dialog('destroy');
                                                }
                                            }
                                        ],
                                        open: function () {
                                            fetchCluster(selectedColumnObj, selectedValue, level);
                                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                            //    $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                                            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
                                            $(".visionHeaderMain").css("z-index", "999");
                                            $(".visionFooterMain").css("z-index", "999");
                                        },
                                        beforeClose: function (event, ui)
                                        {
                                            $(".visionHeaderMain").css("z-index", "99999");
                                            $(".visionFooterMain").css("z-index", "99999");
                                            $("#iframeid").remove();
                                        }
                                    });

                                }
                            }
                        }
                    }

                });
            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });
    }
}

function getJqxTreeRDSEquipmentsearch(treeId, treeDivId, width)
{
    showLoader();
    var classTerm = $("#jqxTreeEquipmentSearchResult").val();
    if (classTerm != null & classTerm != '' && classTerm != undefined)
    {
        var tree = $("#" + treeDivId).jqxTree();
        var firstItem = tree.jqxTree('getItems')[0];
        var $item = $(firstItem.element);
        var children = $item.find('ul:first').children();
        $.each(children, function (i, child) {
            $("#" + treeDivId).jqxTree("removeItem", child);
        });
        $("#" + treeDivId).jqxTree("collapseItem", $item[0]);
        setTimeout(function () {
            $("#" + treeDivId).jqxTree("addTo", [{"label": "ajax", "value": "ajax"}], $item[0]);
            $("#" + treeDivId).jqxTree("expandItem", $item[0]);
        }, 500);
    }
}

//RDS Tree code end
function closeDuplicatePopover(duplicatClass) {
    $("." + duplicatClass).hide();
}

function cloudFoundryAdaptProcess(gridId, copyId, formId) {
    var selectedRowIndexes = $("#searchResults").jqxGrid('getselectedrowindexes');
    var totalRowIndex = selectedRowIndexes.length;
    if (totalRowIndex != null && totalRowIndex > 0) {
        var selected = '';
        var imgHtml = "<div id=\"icfAdaptDropdownListClass\" class=\"icfAdaptDropdownListId\">"
                + "<div id=\"icfAdaptManufactDrpdwnListId\" class=\"icfAdaptManufactDrpdwnListClass\"></div></div>";
        $("#dialog").html(imgHtml);
        $("#dialog").dialog({resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Select Required Maintenance Strategies'),
            modal: true,
            height: 330,
            width: 350,
//        minHeight: 'auto',
//        minWidth: 500,
//        maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        var rowdata = $("#searchResults").jqxGrid('getrowdata', selectedRowIndexes);
                        rowdata['MAINTENANCE_STRATEGIES'] = selected;
//    var gridId = $("#gridId").val();
                        var jsonString = JSON.stringify(rowdata);
                        $.ajax({
                            type: "POST",
                            traditional: true,
                            dataType: 'json',
                            data: {
                                gridId: gridId,
                                jsonString: jsonString

                            },
                            url: "instanceDataMgr",
                            cache: false,
                            async: false,
                            success: function (response) {
                                stopLoader();
                                console.log("response::::4061:::;" + response);
//alert(response);
                                var plantdata = response['plantdata'];
                                if (response != null && response['instantPopupFlag'] != '') {
                                    var instantPopupFlag = response['instantPopupFlag'];
                                    if (instantPopupFlag != null && instantPopupFlag != ''
                                            && instantPopupFlag == 'N') {
                                        plantdata = '';

                                        var selectedInstanceValue = "100:ALL"
                                        showLoader();
                                        cfAdaptcopyRequestProcess(rowdata, selectedInstanceValue, copyId, formId);
                                    }
                                }
                                if (response != null && plantdata != '') {

                                    var instanceDropDownDiv = "<div class='visionFormExtendDropdown'><div class='visionFormExtendTitle'>"
                                            + (labelObject['Instance : Plant'] != null ? labelObject['Instance : Plant'] : 'Instance : Plant')
                                            + "</div><div id='instance_div' class='visionFormExtendInfo'>" +
                                            "" + response['plantdata'] +
                                            "</div></div>";
                                    $("#instanceDialogBox").html(instanceDropDownDiv);
                                    $("#selectedInstance").chosen({allow_single_deselect: true});
                                    stopLoader();

                                    $("#instanceDialogBox").dialog({resizable: false,
                                        modal: true,
                                        title: (labelObject['Instance : Plant'] != null ? labelObject['Instance : Plant'] : 'Instance : Plant'),
//                        // commented by Ajay minHeight: 0,
//                        minWidth: 300,
                                        width: 300,
                                        maxWidth: 'auto',
                                        height: 'auto',
                                        fluid: true,
                                        buttons: [{
                                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                                click: function () {

                                                    var selectedInstanceValue = $('#selectedInstance').val();
                                                    console.log("selectedInstance::::" + selectedInstanceValue);

                                                    if (selectedInstanceValue != null && selectedInstanceValue != '') {
                                                        $(this).html("");
                                                        $(this).dialog("close");
                                                        $(this).dialog("destroy");
                                                        showLoader();
                                                        cfAdaptcopyRequestProcess(rowdata, selectedInstanceValue, copyId, formId);

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
                }],
            open: function () {
                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
                var datlist = ["PREVENTIVE MAINTENANCE (PM)",
                    "PREDICTIVE MAINTENANCE (PDM)",
                    "CONDITION-BASED MAINTENANCE (CBM)",
                    "RELIABILITY-CENTERED MAINTENANCE (RCM)",
                    "TOTAL PRODUCTIVE MAINTENANCE (TPM)",
                    "CORRECTIVE MAINTENANCE (CM)"];
                $('#icfAdaptManufactDrpdwnListId').jqxDropDownList({
                    source: datlist,
                    height: 22,
                    width: 300,
                    checkboxes: true,
                    filterable: true,
                    dropDownHeight: 200,
//                filterPlaceHolder: "Maintenance Strategy",
                    placeHolder: "Select Maintenance Strategy",
//                popupZIndex: 99999
                });

                $("#icfAdaptManufactDrpdwnListId").on('checkChange', function (event) {
                    var selectedData = $("#icfAdaptManufactDrpdwnListId").jqxDropDownList('val');
                    if (selectedData == "") {
                        $("#icfAdaptManufactDrpdwnListId").jqxDropDownList("close");
                    } else {
                        selected = selectedData;
                    }
                });


            },
            beforeClose: function (event, ui)
            {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });
    } else {
        $("#dialog").html("Please select one row to Adapt.");
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
function cfAdaptcopyRequestProcess(copyData, selectedInstanceValue, copyId, formId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
//       showLoader();
    var selectedInstance = selectedInstanceValue.split(':');
    copyData['NEW_INSTANCE'] = selectedInstance[0];
    copyData['NEW_BUSINESS_UNIT'] = selectedInstance[1];
    copyData['NEW_PLANT'] = selectedInstance[1];
    copyData['objectid'] = formId;
//    var formId = "PM_EQUIPMENT_MGR_FRM_NEW_REG";
    // extensions(jsonString, success_msg);
    var controlType = "Copy";
//    var copyId = "PM_REG_COPY_MGR";
    var copyJSON = {};
    copyJSON.formdata = copyData;
    copyJSON.ssfromobject = copyData;

    var jsonString = JSON.stringify(copyJSON);
    $.ajax({
        type: 'post',
        url: 'copyRecords',
        async: true,
        data: {'jsonData': jsonString,
            'copyId': copyId, 'controlType': controlType, 'formId': formId
        },
        success: function (response) {
            stopLoader();
            alert("JSON.parse(response)::::" + response);
            var jsonData = {};
            var jsonObj = JSON.parse(response);

            response = jsonObj.Message;
            var flag = jsonObj.messageFlag;
            var dialogSplitMessage = dialogSplitIconText(response, flag);
            jsonData = jsonObj.ssfromobject;
            if (jsonData != null) {
                var stripValue = jsonData['stripValue'];
                console.log("stripValue:::" + stripValue);
                if (stripValue != null && stripValue.length != 0) {
                    var stripValueObjArray = [];
                    for (var i = 0, max = 10; i < stripValue.length; i++) {
                        var stripValueObj = {};
                        var stripObj = stripValue[i];
                        stripValueObj.columnName = stripObj['columnName'];

                        stripValueObj.value = stripObj['value'];
//                                        stripValueObj.value = encodeURIComponent(stripObj['value']);
                        stripValueObjArray.push(stripValueObj);
                    }

                }
                jsonData['stripValue'] = stripValueObjArray;
                //stripValue
            }

            // ////alert("JSON.stringify(jsonData))::::"+JSON.stringify(jsonData));
            var baskettype1 = $('#baskettypehid1').val();

            $("#dialog").html(dialogSplitMessage);
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                height: 'auto',
                // commented by Ajay minHeight: 'auto',
                minWidth: 300,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {

                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            if (flag)
                                    //  if (response.lastIndexOf("Successfully") > -1 || response.lastIndexOf("successfully") > -1)
                                    {

                                        // if (baskettype1 != 'New Registrations') {

                                        // var urlString= encodeURIComponent(qstr);
//                                                    window.location.href = "formData?items=" + JSON.stringify(jsonData);
                                        // }
                                        var urlString = $('#urlString').val();
                                        var paramsData = {};
                                        if (urlString == "clusterFormData" && urlString != null) {
//                                            
                                            paramsData = {
                                                items: JSON.stringify(jsonData)
                                            }
                                            navigateToRefreshForm(jsonData);
//                                            navigateToForm('RECORD_NO',jsonData , 'form', jsonData['gridId'], '', jsonData['selectingrowindex']);



                                        } else {
                                            $("#items").val(JSON.stringify(jsonData));
                                            // $("#submitForm").attr("action", "formData");
//                                            formdata(jsonData);
                                            navigateToRefreshForm(jsonData);
//                                            navigateToForm('RECORD_NO',jsonData , 'form', jsonData['gridId'], '', jsonData['selectingrowindex']);

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
        },
        error: function (e)
        {
            sessionTimeout(e);
        }

    });

}
function moveRDSTreeToSapAPM()
{
    $("#RDSMessageDialogId").remove();
    $("body").append("<div id='RDSMessageDialogId'></div>");
    var message = "RDS structure has been submitted successfully.";
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var labelObject = {};
    $("#RDSMessageDialogId").html(message);
    $("#RDSMessageDialogId").dialog({resizable: false,
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
function moveRDSTreeEquipmentsToSap()
{
    $("#RDSMessageDialogId").remove();
    $("body").append("<div id='RDSMessageDialogId'></div>");
    var message = "EAM Objects has been submitted successfully.";
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var labelObject = {};
    $("#RDSMessageDialogId").html(message);
    $("#RDSMessageDialogId").dialog({resizable: false,
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

function RDSTreeButtonsTabScroller() {
    if ($(".iconRDSTreeMenuNavNext").length > 0) {
        $(".iconRDSTreeMenuNavNext").click(function () {
            $('.rdsTreeButtonsClass').animate({
                scrollLeft: '+=300'
            }, 500, 'swing');
        });
    }
    if ($(".iconRDSTreeMenuNavPrev").length > 0) {
        $(".iconRDSTreeMenuNavPrev").click(function () {
            $('.rdsTreeButtonsClass').animate({
                scrollLeft: '-=300'
            }, 500, 'swing');
        });
    }

    toggleRDSTreeScrollButtonsHorizontal();
}
function toggleRDSTreeScrollButtonsHorizontal() {
    setTimeout(function () {
        const $parent = $(".outerWidthcol").parent();
        const scrollWidth = $parent[0].scrollWidth;
        const clientWidth = $parent.width();

        if (scrollWidth > clientWidth) {
            $(".iconRDSTreeMenuNavPrev, .iconRDSTreeMenuNavNext").show();
        } else {
            $parent.find(".iconRDSTreeMenuNavPrev, .iconRDSTreeMenuNavNext").hide();
        }
    }, 200);
}
function updateSRSReInstantiate(gridId, hideFlag) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
    }
    var selectedRowIndexes = $("#" + gridId).jqxGrid('getselectedrowindexes');
    var selectedRowData = [];
    selectedRowIndexes.forEach(function (index) {
        var rowdata = $("#" + gridId).jqxGrid('getrowdata', index);
        selectedRowData.push(rowdata);
    });
    if (selectedRowIndexes.length > 0) {
//    var jsonString = JSON.stringify(copyJSON);
        $.ajax({
            type: 'post',
            url: 'srsReIntiateUpdate',
            async: true,
            data: {'gridId': gridId,
                'srsCreAppFlag': 'U',
                'itemsString': JSON.stringify(selectedRowData),
            },
            success: function (response) {
                stopLoader();
//            alert("JSON.parse(response)::::" + response);
//            var jsonData = {};
//            var jsonObj = JSON.parse(response);
                $("#dialog").html(response);
                $("#dialog").dialog({resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    height: 'auto',
                    // commented by Ajay minHeight: 'auto',
                    minWidth: 300,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {

                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                getMaterialGridResults('GRID', gridId, $("#role").val())
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
            error: function (e)
            {
                sessionTimeout(e);
            }

        });
    } else {
        $("#dialog").html("Please select a row to process");
        $("#dialog").dialog({resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            height: 'auto',
            // commented by Ajay minHeight: 'auto',
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
function OpenUITabSroller() {
    if ($(".iconMenuNavNext").length > 0) {
        $(".iconMenuNavNext").click(function () {
            $(this.parentElement).find('.homeTabsContentlistwrapper ul').animate({
                scrollLeft: '+=300'
            }, 500, 'swing');
        });
    }
    if ($(".iconMenuNavPrev").length > 0) {
        $(".iconMenuNavPrev").click(function () {
            $(this.parentElement).find('.homeTabsContentlistwrapper ul').animate({
                scrollLeft: '-=300'
            }, 500, 'swing');
        });
    }

    toggleScrollButtons(".homeTabsContentlistwrapper ul li");

}
function getFunctionalChildLocationTreeobject(treeId, treeDivId)
{
    $("#showStructuresId").find("div.jqx-icon-close").click();
    var parentWhereCondArr = [];
    var parentWhereCondArrStr = $("#" + treeDivId).attr("parentWhereCondArr");
    if (parentWhereCondArrStr != null && parentWhereCondArrStr != '' && parentWhereCondArrStr != undefined)
    {
        parentWhereCondArr = JSON.parse(parentWhereCondArrStr);
    }
    var functionLocationId = "1000-HPP-WD-02";
    treeId = 'PM_ASSET_TREE_HIERARCHY';
    if (treeId != '') {
        var columnMap = {};
        var operatorMap = {};
        operatorMap['ERP_NO'] = "CONTAINING";
        columnMap['ERP_NO'] = functionLocationId;
        $("#dxpMOCRTreeGridDiv").html("");
        showLoader()
        $.ajax({
            datatype: 'json',
            type: 'POST',
            url: 'getDXPAssetTreeFilterData',
            data: {
                'treeId': treeId,
                'columnMap': JSON.stringify(columnMap),
                'operatorMap': JSON.stringify(operatorMap),
            },
            traditional: true,
            cache: false,
            success: async function (response) {
                showLoader();
                $("#dxpAssetFLOCTreeContent").remove();
                var tabhtml = `
<div id="dxpAssetFLOCTreeContent" class="dxpSplitterTabs dxpTabBlue"
     onclick="showSelectedTabContent(event, 'dxpAssetFLOCTreeContent', 'RdsMOCRTreeData')"
     style="display:none;" data-defaulttabname="View Tabs Data">

    <p class="tabTitle">
        <b defaulttabname="View Tabs Data">MOCR Search</b>
        <span class="dxpSplitterTabsCrossSpan">
            <img src="images/crossicon.png"
                 onclick="setCrossIconsTabs(event, 'dxpAssetFLOCTreeContent', 'RdsMOCRTreeData')"
                 class="dxpSplitterTabsCrossIcon" width="10">
        </span>
    </p>

</div>`;
                $("#dxpTabs").find('.showBookMarkTab').append(tabhtml);

                var divHtml = "<div id='dxpRDSTreeWithGridSplitter' class='dxpRDSTreeWithGridSplitterClass'>"
                        + "<div id='dxpAssetRDSTreeSplitter' class='dxpAssetRDSTreeSplitterClass'>"
                        + "<div id='dxpAssetRDSTreeButtonsId' class='dxpAssetRDSTreeButtonsClass'>"
                        + "<button type='button' onclick='RDSTreeMOCRtransfertoSAP()'>Transfer to SAP</button>"
                        + "</div>"
                        + "<div id='dxpAssetRDSTree' class='dxpAssetTreeClass'></div>"
                        + "</div>"
                        + "<div id='dxpRDSMOCRTreeGridDiv'></div>"
                        + "</div>";
                $("#RdsMOCRTreeData").remove();
                $("#dxpContent").append("<div id='RdsMOCRTreeData' class='dxpSplitterTabsContent' style='height:100%;display:none;'></div>");
                $("#RdsMOCRTreeData").html(divHtml);
                showSelectedTabContent(null, 'dxpAssetFLOCTreeContent', 'RdsMOCRTreeData', 'Functional Location', 'N');
                $('#dxpRDSTreeWithGridSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0,
                    panels: [{size: '25%', min: 150, resizable: true}, {size: '74%', min: 150, resizable: true}]
                });
                $("#dxpRDSMOCRTreeGridDiv").show();
                getAssetTreeConfig(response, 'dxpAssetRDSTree', '', 'dxpRDSMOCRTreeGridDiv');
                setTimeout(function () {
                    var targetLi = $('#dxpAssetRDSTree').find('li').has('div#PM_ASSET_TREE_HIERARCHY_P8000353251000-HPP-WD-02');
                    var selectedItem = $("#dxpAssetRDSTree").jqxTree('getItem', targetLi[3]);
                    $("#dxpAssetRDSTree").jqxTree('checkItem', selectedItem, true);
                    expandAssetRDSMOCRTreeHierDataWithGrid('dxpAssetRDSTree', 'PM_ASSET_MOCR_FLOC_MGR_PENDING_CREATE_REQUESTS', 'dxpRDSMOCRTreeGridDiv');
                }, 1500);
//                $("#RdsMOCRTreeData").remove();
//                $("body").append("<div id='RdsMOCRTreeData'></div>");
//                $("#RdsMOCRTreeData").html(divHtml);
//                $("#RdsMOCRTreeData").dialog({resizable: false,
//                    title: (labelObject['Functional Hierarchy'] != null ? labelObject['Functional Hierarchy'] : 'Functional Hierarchy'),
//                    modal: true,
//                    height: 700,
//                    width: 1400,
//                    fluid: true,
//                    buttons: [{
//                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
//                            click: function () {
//                                $(this).dialog('close');
//                            }
//                        }],
//                    open: function () {
//                        $('#dxpRDSTreeWithGridSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0,
//                            panels: [{size: '25%', min: 150, resizable: true}, {size: '74%', min: 150, resizable: true}]
//                        });
//                        $("#dxpRDSMOCRTreeGridDiv").show();
//                        getAssetTreeConfig(response, 'dxpAssetRDSTree', '', 'dxpRDSMOCRTreeGridDiv');
//                        setTimeout(function () {
//                            var targetLi = $('#dxpAssetRDSTree').find('li').has('div#PM_ASSET_TREE_HIERARCHY_P8000353251000-HPP-WD-02');
//                            var selectedItem = $("#dxpAssetRDSTree").jqxTree('getItem', targetLi[3]);
//                            $("#dxpAssetRDSTree").jqxTree('checkItem', selectedItem, true);
//                            expandAssetRDSMOCRTreeHierDataWithGrid('dxpAssetRDSTree', 'PM_ASSET_MOCR_FLOC_MGR_PENDING_CREATE_REQUESTS', 'dxpRDSMOCRTreeGridDiv');
//                        }, 1500);
//                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                        $(".visionHeaderMain").css("z-index", "999");
//                        $(".visionFooterMain").css("z-index", "999");
//                    },
//                    beforeClose: function (event, ui)
//                    {
//                        $(".visionHeaderMain").css("z-index", "99999");
//                        $(".visionFooterMain").css("z-index", "99999");
//                    }
//                });




            }, error: function (jqXHR, textStatus, errorThrown) {
                stopLoader();
            }
        })
    }
}
function expandAssetRDSMOCRTreeHierDataWithGrid(treeDivId, gridId, gridDivId)
{
    showLoader();
    var tree = $('#' + treeDivId);
    var checkedItems = tree.jqxTree('getCheckedItems');
    var checkedVal = '';
    var checkedLabel = '';
    var item;
    var itemType;
    var basicData = {};
    var columnsObj = $("#" + treeDivId).attr("columnsObj");
    if (checkedItems != null && !jQuery.isEmptyObject(checkedItems) && checkedItems.length == 1) {
        $.each(checkedItems, function (i, val) {
            if (val['value'] != null && val['value'] != '' && val['value'] != undefined && val['value'] != 'ajax')
            {
                item = val;
                checkedVal = val['value'];
                checkedLabel = val['label'];
                var idMatch = checkedLabel.match(/id='([^']+)'/);
                var labelId = idMatch[1];
                gridId = $("#" + labelId).attr("data-grid_id");
                itemType = $("#" + labelId).attr("data-object_type");
                var instance = $("#" + labelId).attr("data-instance");
                var businessUnit = $("#" + labelId).attr("data-business_unit");
                var recordNo = $("#" + labelId).attr("data-record_no");
                var erpNo = $("#" + labelId).attr("data-erp_no");
                var conceptId = $("#" + labelId).attr("data-concept_id");
                basicData['CONCEPT_ID'] = conceptId;
                basicData['INSTANCE'] = instance;
                basicData['BUSINESS_UNIT'] = businessUnit;
                basicData['RECORD_NO'] = recordNo;
                basicData['ERP_NO'] = erpNo;
                basicData['NODE_TYPE'] = itemType;
                basicData['gridId'] = gridId;
            }
        });
    }
    if (itemType != null && itemType != '' && itemType != undefined) {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "expandAssetHierData",
            cache: false,
            data: {
                checkedVal: checkedVal,
                'gridId': gridId,
                'columnsObj': columnsObj
            },
            success: function (result, status, xhr) {
                var response = result;
                var treeData = response['treeData'];
                var gridObj = response['gridObj'];
                var hrefColumn = response['hrefColumn'];
                if (treeData != null && !jQuery.isEmptyObject(treeData))
                {
                    var parentNode = $("#" + treeDivId).jqxTree('getItem', item);
                    if (parentNode != null) {
                        // Remove existing children under the parent node
                        var $element = $(parentNode['element']);
                        var children = $element.find('ul:first').children();
                        for (var i = 0; i < children.length; i++) {
                            $("#" + treeDivId).jqxTree('removeItem', children[i]);
                        }
                    }
                    var $item = $(item.element);
                    $("#" + treeDivId).jqxTree("addTo", treeData, $item[0]);
                    $("#" + treeDivId).jqxTree("expandItem", $item[0]);
                    try {
                        setTimeout(function () {
                            $("#dxpFormContent").empty();
                            var $tabsElement = $('#dxpFromTab');
                            $tabsElement.hide();
                            if (!(gridDivId != null && gridDivId != '' && gridDivId != undefined)) {
                                gridDivId = 'dxpMOCRTreeGridDiv';
                            }
                            showNavigateToForm(hrefColumn, basicData, 'form', gridId, "", 0, "N", gridObj, gridDivId);
                        }, 1000);
                    } catch (e)
                    {

                    }

                }


            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });
    }
}

function RDSTreeMOCRtransfertoSAP()
{
    showLoader();
    setTimeout(function () {
        stopLoader();
        showAssetTreeErrorMsg("Message", "Transfer to SAP Successfully.");
    }, 2000);
}



