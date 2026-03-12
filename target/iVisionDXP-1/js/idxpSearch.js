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

const nonsearchkeyCodes = {
    TAB: 9,
    SHIFTLEFT: 16,
    SHIFTRIGHT: 16,
    CTRLLEFT: 17,
    CTRLRIGHT: 17,
    ALTLEFT: 18,
    ALTRIGHT: 18,
    PAUSE: 19,
    CAPSLOCK: 20,
    ESCAPE: 27,
    PAGEUP: 33,
    PAGEDOWN: 34,
    END: 35,
    HOME: 36,
    ARROWLEFT: 37,
    ARROWUP: 38,
    ARROWRIGHT: 39,
    ARROWDOWN: 40,
    INSERT: 45,
//    DELETE: 46,
    METALEFT: 91,
    METARIGHT: 92,
    SELECT: 93,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLOCK: 144,
    SCROLLLOCK: 145
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
async function keySearch(event) {
    var e = event || window.event;
    var ajaxTime = "";
    $("#searchResultsCountId").hide();
    $("#intellisense").hide();

    var totalTime = "";
    var lastKey = event.key;
    var userval = $('#SearchResult').val();
    var userval1 = userval;
    try {
//        userval = userval.trim();
    } catch (e) {
        userval = userval1;
    }
    $('#SearchResult').val(userval);
    $("#searchedValue").val(userval);
    $("#defaultShowCardsId").hide();
    $("#downloadData").next().next().hide();

//    if(userval.indexOf("_") != -1){
    var domainValue = $('#SelectedValue').val();
    var domainValue1 = $('#selectFilter').jqxDropDownList('getSelectedItem');
    var dxpAdavanceSearchOptions = $('#dxpAdavanceSearchOptions').val();
    var onlySpecialChar = onlySpecialchars(userval);
    if (domainValue1 != null && domainValue1 != undefined) {
        var div = domainValue1['html'];
        $("#selectdomainListId").remove();
        $("body").append("<div id='selectdomainListId' class='selectdomainListClass'></div>");
        $("#selectdomainListId").append(div);
        var searchdomain = $("#selectdomainListId").find("div").attr('data-filter-value');
        var searchattr = searchdomain.split(":");
        var templateflag = searchattr[3];
        $("#searchtemplateFlag").val(templateflag);

    } else {
        searchdomain = "FDXP_GENERIC_SEARCH:ALL";
        searchattr = searchdomain.split(":");
        dxpAdavanceSearchOptions = "S";
    }

    if (dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != undefined
            && dxpAdavanceSearchOptions != '' && dxpAdavanceSearchOptions == 'D') {
//        showLoader();
        if (e.keyCode == 13) {
            $("#SearchResult").blur();
//            await searchlucenData(event, domain, domainlist, gridId, templeteGrid, templetflag);
//            getDictionarySearchResults(userval,'D','null','null')
//showErrorPopupMessage('Message', 'Message', dialogWidth, dialogHeight);


//
            $("#dataDxpSplitterValue").show();
            var modalObj = {
                title: 'Message',
                body: "Please Select any Class from the displayed suggestions,Enter key is not allowed here."
            };

//            createModal("dataDxpSplitterValue", modalObj);
            searchModalPopup("dataDxpSplitterValue", modalObj);
            $("#dataDxpSplitterValue").css("z-index", "9999 !important");
        } else {
            if (userval != null && userval != '' && userval != undefined) {
                dictionaryAutoComplete(searchattr[1]);
            }

        }
//        stopLoader();
    } else if (dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != undefined
            && dxpAdavanceSearchOptions != '' && dxpAdavanceSearchOptions == 'PR') {
        repositoryAutoComplete(event);
    } else {

//        userval = userval.trim();
//        var responseObj = {};
//        $(".searchbutton").removeClass("searchbutton");
//        $("#rightsearchicon").addClass("replacedSearchButton");
//        $("#filterDownArrowIconID").show();
//        $('.ui-autocomplete').html('');
////        dictionaryAutoComplete("Y");
//        if (userval != null && userval != '') {
//            $(".clear_input").show();
//        } else {
//            $(".clear_input").hide();
//        }
//        userval = userval.trim();
        var responseObj = {};
        $(".searchbutton").removeClass("searchbutton");
        $("#rightsearchicon").addClass("replacedSearchButton");
//        $(".searchResultsDiv").show();
        $(".backbutton").show();
        $(".selectDropDown").show();
        $(".visualizationDashboardView").hide();
        $("#floatingfilterDownArrowIcon").show();
        $('.ui-autocomplete').html('');
//        $("#smartSaerchCountId").html('');
//        $("#smartSaerchCountId").show();
        if (userval != null && userval != '') {
            $(".clear_input").show();
        } else {
            if (e.keyCode == 13 && !(userval != null && userval != '' && userval != undefined)) {
//                $(".clear_input").hide();
//                $("#dataDxpSplitterValue").show();

                if (!($("#dataDxpSplitterValue").css('display') == 'none') && !($("#dataDxpSplitterValue").is(':empty')))
                {

                    $("#SearchResult").blur();
                    const mymodal = $('#dataDxpSplitterValue');

                    if (mymodal.hasClass("show")) {
                        mymodal.modal('hide');
                        $(".backGroundOpacity").css("display", "none");

                    }
                } else {
                    $("#SearchResult").blur();
                    $("#dataDxpSplitterValue").show();
                    var modalObj = {
                        title: 'Message',
                        body: "Please enter a keyword with at least 3 characters, ignoring special characters like @.,;:/ etc."
                    };

//                    createModal("dataDxpSplitterValue", modalObj);
                    searchModalPopup("dataDxpSplitterValue", modalObj);
                }
            } else {
                if ((userval != null && userval != '' && userval != undefined)) {
                    var modalObj = {
                        title: 'Message',
                        body: "Please enter a keyword with at least 3 characters, ignoring special characters like @.,;:/ etc."
                    };

//                    createModal("dataDxpSplitterValue", modalObj);
                    searchModalPopup("dataDxpSplitterValue", modalObj);
                }
                $(".clear_input").hide();
                stopLoader();
            }
        }
        if (e.keyCode == 45 //Insert
//        || e.keyCode == 32 //Space
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
            stopLoader();
            console.log('Ajax Not sent');
            return;
        } else {
            if (e.keyCode == 13) {
                $("#SearchResult").blur();
                //Enter
                showLoader();
                if (!(onlySpecialChar == false)) {
                    stopLoader();
                    $("#dataDxpSplitterValue").show();
                    var modalObj = {
                        title: 'Message',
                        body: "Please enter a keyword with at least 3 characters, ignoring special characters like @.,;:/ etc."
                    };

//                    createModal("dataDxpSplitterValue", modalObj);
                    searchModalPopup("dataDxpSplitterValue", modalObj);
                    return;
                }
                $("#intellisense").hide();
                $("#data-typedvalue").val(userval);
                $("#searchResultsCountId").hide();
                $("#firstDxpSplitter").show();
                $("#filterDownArrowIconID").find('img').hide();
                firstPanelShowFlag = true;
                // getFirstPanelShow(event);
                $("#SearchResult").val(userval);
                if (userval != null && userval != '' && userval != undefined) {
                    showLoader();
                    $("#typedResult").val(userval);
                    showLoader();
//                    getsearchitem(templateflag, searchattr[1], searchattr[0], '', '', '', '');
//                    searchBasedAILensResults(userval, searchattr[1]);

                    if (templateflag != 'Y' || templateflag == null || templateflag == undefined || templateflag == '') {
                        DXPSsearchResults('S', userval, searchattr[1], searchattr[0]);
                    } else {
                        let mypromise = new Promise(resolve => {

                            getsearchitem("Y", searchattr[1], searchattr[0], '', '', '', '');
                        });
                        await mypromise;
                    }
                    stopLoader();
                } else {
                    $("#SearchResult").blur();
                    stopLoader();
                    var modalObj = {
                        title: 'Message',
                        body: "Enter a keyword of at least 1 char,ignoring special chars(@.,;:/ etc)  to search"
                    };
//                    createModal("dataDxpSplitterValue", modalObj);
                    searchModalPopup("dataDxpSplitterValue", modalObj);
                }

            } else {
                delay(function () {
                    if (!(onlySpecialChar == false)) {
                        stopLoader();
                        $("#dataDxpSplitterValue").show();
                        var modalObj = {
                            title: 'Message',
                            body: "Please enter a keyword with at least 3 characters, ignoring special characters like @.,;:/ etc."
                        };

//                        createModal("dataDxpSplitterValue", modalObj);
                        searchModalPopup("dataDxpSplitterValue", modalObj);
                        return;
                    }
                    userval = userval.replace(/\s\s+/g, ' ');
                    $("#result").val(userval);
                    if (userval.length < 3)
                    {
//                clearTextSearch();

                        $(".searchResultsDiv").hide();
                        stopLoader();
                    } else {
//                        
                        console.log('if condition::::sending ' + userval + " to server....");
                        ajaxTime = new Date().getTime();
                        $("#intellisensebox").attr("data-space", "yes");
                        showLoader();
                        var locale_dd = $("#localedd").find(':selected').data('code');
                        var languageid = ""
                        try {
                            languageid = $("#localedd").find(':selected').val();
                            languageid = languageid.replace(/#/g, '_');
                        } catch (e) {
                        }
                        if (domainValue == null && domainValue == undefined) {
                            domainValue = searchattr[1];
                        }

                        $.ajax({
                            type: "POST",
                            url: "searchSuggestion",
                            data: {
                                'searchtext': userval,
                                'searchId': searchattr[0],
                                'domainValue': domainValue,
                                'locale': 'en_US',
                                'langID': '1007-1_LG-000001_1',
                                'fuzzyFlag': 'false',
                                'dxpAdavanceSearchOptions': dxpAdavanceSearchOptions,
                                'ActiveSearchFlag': 'Y'
                            },
                            success: function (response) {
//                                stopLoader();
                                stopLoader();
                                firstPanelShowFlag = true;
                                secondPanelShowFlag = true;
                                thirdPanelShowFlag = true;
//                                $("#filterDownArrowIconID").hide();
                                $(".clearicon").removeClass("onlyKeysearch");
                                $("#searchDxpSplitter").hide();
                                if (response != null && response != '') {
                                    $(".searchResultsDiv").show();
                                    $("#intellisense").show();
                                    $("#intellisense").html("");
                                    responseObj = JSON.parse(response);
                                    if (responseObj['flag']) {
                                        //suggestion
                                        $("#intellisense").html(responseObj['suggestion']);
                                        totalTime = new Date().getTime() - ajaxTime;
                                        totalTime = parseInt(totalTime) / 1000;
                                        $("#searchResultsCountId").show();
                                        $("#searchResultsCountId").text("      Showing " + responseObj['currentRecords'].toLocaleString() + " of " + responseObj['totalRecords'].toLocaleString() + " in " + totalTime + " Sec");
                                        $("#intellisensebox").show();
                                    } else {
                                        stopLoader();
                                        showLoader();
                                        if (responseObj['totalRecords'] == '0') {
                                            $("#intellisense").html("<div  class='ac-items' id='updateIntellisense_0'>No record's found</div>");
//                                            $("#intellisensebox").hide();
                                        } else {
                                            stopLoader();
                                            $("#intellisense").html("<div  class='ac-items' id='updateIntellisense_0'>No record's found</div>");
//                                            $("#intellisensebox").hide();
                                        }
                                    }
                                } else {
                                    stopLoader();
                                    showLoader();
                                    $("#intellisense").html("<div  class='ac-items' id='updateIntellisense_0'>No record's found</div>");
                                    $("#intellisensebox").hide();
                                }
                                stopLoader();
//                                $("#intellisense").children().click(function () {
//                                    if ($(".massSearchListItem").hasClass("massSearchToggleClass")) {
//                                        $(".massSearchToggleClass").hide();
//                                        $(".searchImgToggle").show();
//                                        $(".closeImgToggle").hide();
//                                    } else {
//                                        $(".searchImgToggle").hide();
//                                        $(".closeImgToggle").show();
//                                    }
//                                });
                            },
                            error: function (e) {
                                console.log(e);
                                stopLoader();
                                showLoader();
                                sessionTimeout(e);
                            }

                        });
                    }
                }, 1000);


            }

        }
//        
    }
//    stopLoader();
}
function updatebulkIntellisense(row, Domain, id) {
    var domainlist = $("#" + id).attr("dataattr");
    var gridId = $("#regGrdiId").val();
    var domaindata = domainlist.split(",");
    $("#typedResult").val($("#result").val());
    console.log("updateIntellisense:::" + row);
    var selectedStr = $("#updateIntellisense_" + row).text();
    console.log("selectedStr:::" + selectedStr);
    var replacestring = selectedStr.replace(/<b>|<\/b>/g, "");
    replacestring = replacestring.replace(/<b class="fuzzyItem">|<\/b>/g, "");
    replacestring = replacestring.replace(/<b class='fuzzyItem'>|<\/b>/g, "");
    $("#result").val(replacestring);
    var paramArray = [];
    $("#intellisense").hide();
    DXPSsearchResults('S', replacestring, Domain, domaindata[0], domaindata[1], domaindata[2], gridId);

}
async  function updateIntellisense(row, Domain, templateResultFlag, templeteGrid, id) {

    var domainlist = $("#" + id).attr("dataattr");
    var recordNo = $("#" + id).attr("data-recordno");
    var gridId = $("#regGrdiId").val();
    var domaindata = domainlist.split(",");
    $("#typedResult").val($("#result").val());
    console.log("updateIntellisense:::" + row);
    var selectedStr = $("#updateIntellisense_" + row).text();
    console.log("selectedStr:::" + selectedStr);
    var replacestring = selectedStr.replace(/<b>|<\/b>/g, "");
    replacestring = replacestring.replace(/<b class="fuzzyItem">|<\/b>/g, "");
    replacestring = replacestring.replace(/<b class='fuzzyItem'>|<\/b>/g, "");
    $("#result").val(replacestring);
    var reorcnotext = $("#intellisenseDiv").attr('data-recordnotextarray');
//    $("#templeteSearchResult").val(replacestring);
    var paramArray = [];
    $("#intellisense").hide();
    try {
        if ($("#dxpTabs").is(":visible")) {

        } else {
            toggleTabsAndMenus(event);
        }
    } catch (e) {

    }
    if (templateResultFlag != 'Y') {
        DXPSsearchResults('S', replacestring, Domain, domaindata[0], domaindata[1], domaindata[2], gridId);
    } else {
        let mypromise = new Promise(resolve => {

            getsearchitem("Y", Domain, domainlist, resolve, gridId, '', templeteGrid, '', '', recordNo, reorcnotext);
        });
        await mypromise;
    }
}
function showSearchBar(domain, type, role, gridId, searchrefreshFlag, pprDomainType) {
    //$("#thirdDxpSplitter").show();

    $("#VisualizePageBody").hide();
    $("#defaultShowCards").hide();
    $("#producttypeId").hide();
    $(".voiceNavigator").hide();
    $(".hasSubMenuItemsPopover").hide();
    $("#Task").hide();
    $("#filterexpendInOutID").hide();
    if (gridId != null && gridId != undefined) {
        $("#regGrdiId").val(gridId);
    }
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    if (fioriThemeCheck) {
        try {
            var basketTitle = $(event.currentTarget).text();
            var backClass = $(event.currentTarget).attr("class");
            firorMenuPopoverText(basketTitle);
            if (!(backClass != null && backClass != undefined) || !backClass.includes("Back")) {
                var firorDomainObj = {};
                firorDomainObj[basketTitle] = `showSearchBar(${domain}, ${type}, ${gridId},${searchrefreshFlag},${pprDomainType})`;
                backDomainCumArray.push(firorDomainObj);
            }

        } catch (e) {
            console.log(e);
        }
    }
    if (pprDomainType != null && pprDomainType != undefined && pprDomainType != '') {
        $("#pprDomainType").val(pprDomainType);
    } else {
        $("#pprDomainType").val(domain);
    }
    $("#currentshowSearchDomain").val(domain);
    $("#currentshowSearchId").val(type);
    $("#currentshowSearchRole").val(role);
    if (searchrefreshFlag != null && searchrefreshFlag != undefined
            && searchrefreshFlag != '' && searchrefreshFlag != 'undefined'
            && searchrefreshFlag == 'Y') {
//                     $("#dxpGridContent").html("");
        $("#dxp1Firstdiv").html("");
        $("#dxp1Seconddiv").html("");
        $("#dxpSearchFirstdiv").html("");
        $("#dxpSearchSeconddiv").html("");
        $("#searchtemplateFlag").val("");
        $("#searchtemplateGrid").val("");
        $("#currentSearchwithOutTemp").val("");
        setCrossIconsTabs(event, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent');
        setCrossIconsTabs(event, 'dxpSearchTab', 'dxpSearchContent');
//                     setCrossIconsTabs(event, 'dxpGridTab', 'dxpGridContent');
//                     $("#dxpSearchMainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
//                     $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
//                     
    }

    $("#dxpSearchMainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
    $.ajax({
        type: "post",
        traditional: true,
        datatype: "json",
        url: "getDomainAttribute",
        cache: false,
        async: false,
        data: {
            domainValue: domain,
            ssSearchId: type,
        },
        success: function (response) {
            stopLoader();
            if (response != null && response != '') {
                var dataobj = response['datalist'];
                var searchInitParamObj = response['searchInitParamObj'];
                var voicesearchIcon = response['VoiceSearchIcon'];
//                var listdata = dataobj[0];
                if (dataobj.length > 1) {
                    for (var i = 0; i < dataobj.length; i++) {
                        var listdata = dataobj[i];
                        var searchid = listdata[0];
                        if (searchid == type) {
                            break;
                        }
                    }
                } else {
                    var listdata = dataobj[0];
                }
                var searchid = listdata[0];
                var searchView = listdata[1];
                var RoleId = listdata[2];
                var TempleteFlag = listdata[3];
                var templeteGrid = listdata[4];
                var fuzzySearchFlag = listdata[5];
                try {
                    $("#fuzzySearchFlag").val(fuzzySearchFlag);
                } catch (e) {

                }
//                var searchfuzzyFlag = false;
//                try{
//                if (searchInitParamObj != null && !jQuery.isEmptyObject(searchInitParamObj)) {
//                    var searchfuzzy = searchInitParamObj['uuu_searchfuzzyFlag'];
//                    if (searchfuzzy != null && searchfuzzy != undefined
//                       && searchfuzzy != '' && searchfuzzy != 'undefined'
//                       && searchfuzzy == 'Y') {
//                     searchfuzzyFlag = true;
//                   }
//                }
//                }catch(e){
//                 searchfuzzyFlag = false;   
//                }
//                
//                try{
//                if (searchInitParamObj != null && !jQuery.isEmptyObject(searchInitParamObj)) {
//                   var searchtempleteFlag = searchInitParamObj['uuu_searchtempleteFlag'];
//                   var searchtempleteGrid = searchInitParamObj['uuu_searchtempleteGrid'];
//                   
//                   if (searchtempleteFlag != null && searchtempleteFlag != undefined
//                       && searchtempleteFlag != '' && searchtempleteFlag != 'undefined') {
//                     TempleteFlag = searchtempleteFlag;
//                   }else{
//                     TempleteFlag = listdata[3]; 
//                   }
//                   
//                   if (searchtempleteGrid != null && searchtempleteGrid != undefined
//                       && searchtempleteGrid != '' && searchtempleteGrid != 'undefined') {
//                     templeteGrid = searchtempleteGrid;
//                   }else{
//                     templeteGrid = listdata[4]; 
//                   }
//                }    
//                }catch(e){
//                 TempleteFlag = listdata[3];
//                 templeteGrid = listdata[4];   
//                }
                var fuzzyHtml = "";
                if (fuzzySearchFlag != null && fuzzySearchFlag != undefined && fuzzySearchFlag != "" && fuzzySearchFlag == "Y") {

                    fuzzyHtml = "<div class='visionfuzzycontainer'><input onchange='onFuzzyCheck(this)' type='checkbox' id='isFuzzy'><span class='visionfuzzyLabel'>Fuzzy</span> </div>"
                } else {
                    fuzzyHtml = "";
                }
                $("#currentSearchwithOutTemp").val("N");
                $("#searchtemplateFlag").val(TempleteFlag);
                $("#searchtemplateGrid").val(templeteGrid);
                $("#searchId").val(searchid);
                var ssLangListStr = localStorage.getItem("ssLangListStr");
//                $(".massSearchListItem").hide();
//                $("#DXPlLanguageSelectionId").hide();
//                var searchInputDiv = "<div id='searchbarDiv' class ='searchbarDivClass'><div class='searchResultCountView'><span class='searchResultsValue' id='smartSaerchCountId'></span></div><ul class='searchtempleteClass'><li class=\"searchDiv\"><input type=\"search\" name=\"search\" id='templeteSearchResult' placeholder=\"Search items here\" onkeyup=\"keydomainSearch(event,'" + domain + "','" + listdata + "','" + gridId + "','" + TempleteFlag + "','" + templeteGrid + "')\">"
//                var searchInputDiv = "<div id='searchbarDiv' class ='searchbarDivClass'><div class='searchResultCountView'><span class='searchResultsValue' id='smartSaerchCountId'></span></div><ul class='searchtempleteClass'><li class=\"searchDiv\"><input type=\"search\" name=\"search\" id='templeteSearchResult' value='' placeholder=\"Please enter a keyword with at least 3 characters, ignoring special characters\" ";
//                searchInputDiv += " onkeyup=\"keydomainSearch(event,'" + domain + "','" + listdata + "','" + gridId + "','" + TempleteFlag + "','" + templeteGrid + "')\"";
//                searchInputDiv += ">";
//                searchInputDiv += "<div class='floatingfilterDownArrowIcon' id='floatingfilterDownArrowIconID' style='display: none;'></div><span class='clear-icon'><i class='fa fa-close' style='font-size:24px'></i></span>"
//                        + "<div class=\"buttonIcon\"><img src=\"images/iDXPUI5Search.svg\" onclick=\"searchlucenData(event,'" + domain + "','" + listdata + "','" + gridId + "','" + templeteGrid + "','" + TempleteFlag + "')\" alt=\"RegisterIcon\" width=\"20px\">"
//                        + "</div>"
////                        +  fuzzyHtml
//                        + "<div id='speechStatus'></div>"
//                        + "<div data-selection-type='containing' data-text='NA' data-space='no' "
//                        + "class='smartsearchresults' id='intellisenseboxId' style='display:none;"
//                        + "style='background: transparent none repeat scroll 0% 0%;'>"
//                        + "<div class='smartsearchinnerclass' id='intellisenseDiv'></div>"
//                        + "</div>"
//                        + "</li>";
//                searchfuzzyFlag = true;
                 var searchInputDiv = "<div id='searchbarDiv' class='searchbarDivClass'>"
                        + "<div class='searchResultCountView'>"
                        + "<span class='searchResultsValue' id='smartSaerchCountId'></span>"
                        + "</div>"
                        + "<ul class='searchtempleteClass'>"
                        + "<li class='searchDiv'>"
                        + "<div class='searchHereClassId'>"
                        + "<div class='searchHereClassWrapperId'>"
                        + "<span class='clear-icon'><i class='fa fa-close' style='font-size:24px'></i></span>"
                        + "<input type='search' name='search' id='templeteSearchResult' value='' placeholder='Please enter a keyword with at least 3 characters, ignoring special characters' onkeyup=\"keydomainSearch(event,'" + domain + "','" + listdata + "','" + gridId + "','" + TempleteFlag + "','" + templeteGrid + "')\">"
                        + "</div>"
                        + "<div class='filter_SearchClassid'>"
                        + "<div class='floatingfilterDownArrowIcon' id='floatingfilterDownArrowIconID' style='display: none;'></div>"
                        + "<div class='buttonIcon'>"
                        + "<img src='images/iDXPUI5Search.svg' onclick=\"searchlucenData(event,'" + domain + "','" + listdata + "','" + gridId + "','" + templeteGrid + "','" + TempleteFlag + "')\" alt='RegisterIcon' width='20px'>"
                        + "</div>"
                        + "</div>"
                        + "</div>";
         searchInputDiv += "<div id='speechStatus'></div>"
                        + "<div data-selection-type='containing' data-text='NA' data-space='no' "
                        + "class='smartsearchresults' id='intellisenseboxId' style='display:none;"
                        + "style='background: transparent none repeat scroll 0% 0%;'>"
                        + "<div class='smartsearchinnerclass' id='intellisenseDiv'></div>"
                        + "</div>"
                        + "</li>";

                searchInputDiv += "<li class='voiceSearch'>";
                if (voicesearchIcon) {
                    searchInputDiv += "<span id='unmuteSpeechId'onclick=\"speechToText('templeteSearchResult','muteSpeechId','unmuteSpeechId','" + domain + "','" + listdata + "','" + gridId + "')\"><i class=\"fa fa-microphone\" style=\"font-size:24px\"></i></span>"
                            + "<span id='muteSpeechId' style='display: none;'><img src='images/animationMic.gif' style=\"width:24px\"></span>";
                }

//                searchInputDiv +="</li>" + ssLangListStr + "</ul>";
                searchInputDiv += "</li>" + ssLangListStr;
                if (fuzzySearchFlag != null && fuzzySearchFlag != undefined && fuzzySearchFlag != "" && fuzzySearchFlag == "Y") {
                    searchInputDiv += "<li id = 'idxpfuzzysearchId' class='idxpfuzzysearch'><input onchange='onFuzzyCheck(this)' type='checkbox' id='isFuzzy'><span class='idxpfuzzyLabel'> Fuzzy</span></li>";
                }
                searchInputDiv += "</ul></div>";
                let checkbox = $("#cb-switch");
                var fioriThemeCheck = checkbox.is(":checked");
                if (fioriThemeCheck) {
                    $("#dxpSearchSeconddiv").addClass("fioriSearchComponent");
                } else {
                    $("#dxpSearchSeconddiv").removeClass("fioriSearchComponent");
                }
//                        searchInputDiv += "</div>";
                $("#dxpSearchFirstdiv").html("<div id='templetesearchresult' class='templeteresultClass'></div>");
                $("#dxpSearchSeconddiv").html(searchInputDiv);
                $("#dxpSearchFirstdiv").resizable(false);
                $("#dxpTabsMenus").resizable(false);
                $('#templeteSearchResult').attr('autocomplete', 'off');
//                $('#templeteSearchResult').bind('input', function(event) {
//                  keydomainSearch(event,domain, listdata,gridId, TempleteFlag, templeteGrid);  
//                });
                $("#dxpSearchMainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
                showSelectedTabContent(null, 'dxpSearchTab', 'dxpSearchContent', 'Search', 'N');
                toggleTabsAndMenus(event);
                const searchInput = document.getElementById('templeteSearchResult');
                const clearIcon = document.querySelector('.clear-icon');
                searchInput.addEventListener('input', handleInputChange);
                clearIcon.addEventListener('click', handleClearIconClick);

                function handleInputChange() {
                    if (searchInput.value !== '') {
                        clearIcon.style.display = 'block';
                    } else {
                        clearIcon.style.display = 'none';
                    }
                }
                function handleClearIconClick() {
                    searchInput.value = ''; // Clear the input field
                    clearIcon.style.display = 'none'; // Hide the clear icon
                    $("#intellisenseDiv").html('');
                    $("#intellisenseDiv").hide();
                    $("#templeteSearchResult").focus();
                }
                $('#templeteSearchResult').bind('paste', function () {
                    setTimeout(function () {
                        $("#templeteSearchResult").autocomplete("search", $("#templeteSearchResult").val());
//                        searchAPIResultsBasedonDesc(domain, type, role, gridId);
//                         console.log('12233444');
                    }, 1000);
                });
                //added for KJO
                floatingadvancedSearches(event, domain, gridId, searchid, TempleteFlag, templeteGrid);
                //added for KJO
            }

        },
        error: function (e) {
            sessionTimeout(e);
        }// Error function in Ajax
    }); // end ajax call
}
function showSearchBarwithId(domain, type, role, gridId, title, searchrefreshFlag) {
    //$("#thirdDxpSplitter").show();
    $("#producttypeId").hide();
    $(".voiceNavigator").hide();
    $("#filterexpendInOutID").hide();
    if (gridId != null && gridId != undefined) {
        $("#regGrdiId").val(gridId);
    }
    $("#currentshowSearchDomain").val(domain);
    $("#currentshowSearchId").val(type);
    $("#currentshowSearchRole").val(role);

    if (searchrefreshFlag != null && searchrefreshFlag != undefined
            && searchrefreshFlag != '' && searchrefreshFlag != 'undefined'
            && searchrefreshFlag == 'Y') {
//                     $("#dxpGridContent").html("");
        $("#dxp1Firstdiv").html("");
        $("#dxp1Seconddiv").html("");
        $("#dxpSearchFirstdiv").html("");
        $("#dxpSearchSeconddiv").html("");
        $("#searchtemplateFlag").val("");
        $("#searchtemplateGrid").val("");
        $("#currentSearchwithOutTemp").val("");
        setCrossIconsTabs(event, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent');
        setCrossIconsTabs(event, 'dxpSearchTab', 'dxpSearchContent');
//                     setCrossIconsTabs(event, 'dxpGridTab', 'dxpGridContent');
//                     $("#dxpSearchMainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
//                     $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
//                     
    }

    $("#dxpSearchMainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
    $.ajax({
        type: "post",
        traditional: true,
        datatype: "json",
        url: "getSearchAttributewithId",
        cache: false,
        async: false,
        data: {
            domainValue: domain,
            ssSearchId: type,
        },
        success: function (response) {
            stopLoader();
            if (response != null && response != '') {
                var dataobj = response['searchObject'];
                var searchInitParamObj = response['searchInitParamObj'];
//                var listdata = dataobj[0];
                if (dataobj != null && !jQuery.isEmptyObject(dataobj)) {
                    var searchid = dataobj['SEARCH_ID'];
                    var searchView = dataobj['SEARCH_VIEW'];
                    var RoleId = dataobj['ROLE_ID'];
                    var TempleteFlag = dataobj['TEMP_RESULT_FLAG'];
                    var templeteGrid = dataobj['TEMPLETE_GRID'];
                    var listdata = [searchid, searchView, RoleId, TempleteFlag, templeteGrid];


                    $("#currentSearchwithOutTemp").val("Y");
                    $("#searchtemplateFlag").val(TempleteFlag);
                    $("#searchtemplateGrid").val(templeteGrid);
                    $("#searchId").val(searchid);
                    var ssLangListStr = localStorage.getItem("ssLangListStr");
//                $(".massSearchListItem").hide();
//                $("#DXPlLanguageSelectionId").hide();
                    var searchInputDiv = "<div id='searchbarDiv' class ='searchbarDivClass'><div class='searchResultCountView'><span class='searchResultsValue' id='smartSaerchCountId'></span></div><ul class='searchtempleteClass'><li class=\"searchDiv\"><input type=\"search\" name=\"search\" id='templeteSearchResult' placeholder=\"Search items here\" onkeyup=\"keydomainSearch(event,'" + domain + "','" + listdata + "','" + gridId + "','" + TempleteFlag + "','" + templeteGrid + "')\">"
                            + "<div class='floatingfilterDownArrowIcon' id='floatingfilterDownArrowIconID' style='display: none;'></div><span class='clear-icon'><i class='fa fa-close' style='font-size:24px'></i></span>"
                            + "<div class=\"buttonIcon\"><img src=\"images/iDXPUI5Search.svg\" onclick=\"searchlucenData(event,'" + domain + "','" + listdata + "','" + gridId + "','" + templeteGrid + "','" + TempleteFlag + "')\" alt=\"RegisterIcon\" width=\"20px\">"
                            + "</div>"
                            + "<div id='speechStatus'></div>"
                            + "<div data-selection-type='containing' data-text='NA' data-space='no' "
                            + "class='smartsearchresults' id='intellisenseboxId' style='display:none;"
                            + "style='background: transparent none repeat scroll 0% 0%;'>"
                            + "<div class='smartsearchinnerclass' id='intellisenseDiv'></div>"
                            + "</div>"
                            + "</li>"
                            + "<li class='voiceSearch'>"
                            + "<span id='unmuteSpeechId'onclick=\"speechToText('templeteSearchResult','muteSpeechId','unmuteSpeechId','" + domain + "','" + listdata + "','" + gridId + "')\"><i class=\"fa fa-microphone\" style=\"font-size:24px\"></i></span>"
                            + "<span id='muteSpeechId' style='display: none;'><img src='images/animationMic.gif' style=\"width:24px\"></span>"
                            + "</li>" + ssLangListStr + "</ul>"
                            + "</div>";
                    $("#dxpSearchFirstdiv").html("<div id='templetesearchresult' class='templeteresultClass'></div>");
                    $("#dxpSearchSeconddiv").html(searchInputDiv);
                    $('#templeteSearchResult').attr('autocomplete', 'off');
                    $("#dxpSearchMainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});


                    if (title != null && title != undefined && title != '' && title != 'undefined') {
                        showSelectedTabContent(null, 'dxpSearchTab', 'dxpSearchContent', title, 'N');
                    } else {
                        showSelectedTabContent(null, 'dxpSearchTab', 'dxpSearchContent', 'Search', 'N');
                    }
                    toggleTabsAndMenus(event);
                    const searchInput = document.getElementById('templeteSearchResult');
                    const clearIcon = document.querySelector('.clear-icon');
                    searchInput.addEventListener('input', handleInputChange);
                    clearIcon.addEventListener('click', handleClearIconClick);

                    function handleInputChange() {
                        if (searchInput.value !== '') {
                            clearIcon.style.display = 'block';
                        } else {
                            clearIcon.style.display = 'none';
                        }
                    }
                    function handleClearIconClick() {
                        searchInput.value = ''; // Clear the input field
                        clearIcon.style.display = 'none'; // Hide the clear icon
                        $("#intellisenseDiv").html('');
                        $("#intellisenseDiv").hide();
                    }
                    $('#templeteSearchResult').bind('paste', function () {
                        setTimeout(function () {
//                        searchAPIResultsBasedonDesc(domain, type, role, gridId);
                            $("#templeteSearchResult").autocomplete("search", $("#templeteSearchResult").val());
                        }, 1000);
                    });
                    //added for KJO
                    floatingadvancedSearches(event, domain, gridId, searchid, TempleteFlag, templeteGrid);
                    //added for KJO
                }


            }

        },
        error: function (e) {
            sessionTimeout(e);
        }// Error function in Ajax
    }); // end ajax call
}
function searchAPIResultsBasedonDesc(domain, type, role, gridId) {
    showLoader();
    var searchValue = $("#templeteSearchResult").val();
    $.ajax({
        datatype: "html",
        type: "POST",
        url: 'getAPIResultsBasedOnDesc',
        data: {
            'domainValue': domain,
            'type': type,
            'role': role,
            'gridId': gridId,
            'searchValue': searchValue

        },
        traditional: true,
        cache: false,
        success: function (response) {
//            keydomainSearch(event);
            stopLoader();
            $("#intellisenseboxId").show();
            $("#intellisenseDiv").html(response);
        }
    });

}
function floatingadvancedSearches(event, domainValue, gridId, searchId, templeteflag, templeteGrid) {

    stopLoader();
    $("#floatingfilterDownArrowIconID").show();
    clearTextSearch();
//    var domainValue = $('#SelectedValue').val(); 
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'floatingAdvancedSearches',
        data: {
            'domainValue': domainValue,
            'searchId': searchId,
            'templateflag': templeteflag,
            'templateGrid': templeteGrid
        },
        traditional: true,
        cache: false,
        success: function (response) {
//            keydomainSearch(event);
            stopLoader();
            $("#floatingfilterDownArrowIconID").html(response);
            $("#intellisense").hide();
            $("#dxpAdavanceSearchOptions").focus("");
        }
    });
}
function onlySpecialchars(str)
{
    var regex = /^[^a-zA-Z0-9]+$/;
    if (str.length < 1) {
        return;
    }
    var matchedAuthors = regex.test(str);
    if (matchedAuthors)
        return true;
    else
        return false;
}
async function keydomainSearch(event, domain, domainlist, gridId, templetflag, templeteGrid) {
//    showLoader();
    var e = event || window.event;
    var ajaxTime = "";
    var totalTime = "";
    var lastKey = event.key;
// if (event.ctrlKey == true || event.keyCode==17) {
//               return;  
//        }

    if (e.keyCode == 45 //Insert
            // e.keyCode == 32 //Space                
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
            || e.keyCode == 27//Escape
            || (lastKey != null && lastKey != undefined && lastKey != '' && lastKey != 'undefined'
                    && nonsearchkeyCodes.hasOwnProperty(lastKey.toUpperCase()))
            || (event.ctrlKey == true && event.keyCode != 86)
            || (event.altKey == true)
            || (event.metaKey == true)
            ) {
        stopLoader();


        console.log('Ajax Not sent');
        return;
    } else {
        $("#intellisenseboxId").hide();
        $("#intellisense").hide();
        $("#smartSaerchCountId").html(" ");
    }


    var userval = $('#templeteSearchResult').val();
    var userval1 = userval;
    try {
        userval = userval.trim();
    } catch (e) {
        userval = userval1;
    }

//    $('#templeteSearchResult').val(userval);
    $("#searchedValue").val(userval);
    $("#downloadData").next().next().hide();

    var fuzzyflag = $("#isFuzzy").is(':checked');
//    if(userval.indexOf("_") != -1){
    var domainValue = "";
    $("#dataDxpSplitterValue").hide();
    var searchId = $("#searchId").val();
    var onlySpecialChar = onlySpecialchars(userval);
    var dxpAdavanceSearchOptions = $('#floatingdxpAdavanceSearchOptions').val();
    if (dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != undefined
            && dxpAdavanceSearchOptions != '' && dxpAdavanceSearchOptions == 'D') {
//        showLoader();
        $("#intellisenseDiv").html("");
        $("#intellisensebox").hide();
        $("#intellisenseDiv").hide();
        $("#intellisenseboxId").hide();
        $("#smartSaerchCountId").html(" ");
        if (!(onlySpecialChar == false)) {
            stopLoader();
//
            try {
                try {
                    $("#SearchResult").autocomplete("destroy");
                    $("#intellisenseDiv").html("");
                    $("#intellisensebox").hide();
                    $("#intellisenseDiv").hide();
                    $("#intellisenseboxId").hide();
                    $("#smartSaerchCountId").html(" ");
                } catch (e) {

                }
                try {
                    $("#templeteSearchResult").autocomplete("destroy");
                    $("#intellisenseDiv").html("");
                    $("#intellisensebox").hide();
                    $("#intellisenseDiv").hide();
                    $("#intellisenseboxId").hide();
                    $("#smartSaerchCountId").html(" ");
                } catch (e) {
                }

                return;
            } catch (e) {

            }

        }
        if (e.keyCode == 13 && (userval.trim()).length > 2) {
            $("#templeteSearchResult").blur();
//            await searchlucenData(event, domain, domainlist, gridId, templeteGrid, templetflag);
//            getDictionarySearchResults(userval,'D','null','null')
//showErrorPopupMessage('Message', 'Message', dialogWidth, dialogHeight);

            try {
                $("#SearchResult").autocomplete("destroy");
                $("#intellisenseDiv").html("");
                $("#intellisensebox").hide();
                $("#intellisenseDiv").hide();
                $("#intellisenseboxId").hide();
                $("#smartSaerchCountId").html(" ");
            } catch (e) {

            }
            try {
                $("#templeteSearchResult").autocomplete("destroy");
                $("#intellisenseDiv").html("");
                $("#intellisensebox").hide();
                $("#intellisenseDiv").hide();
                $("#intellisenseboxId").hide();
                $("#smartSaerchCountId").html(" ");
            } catch (e) {
            }
        }
        if (e.keyCode == 13 && (userval.trim()).length > 2) {
            $("#templeteSearchResult").blur();
//            await searchlucenData(event, domain, domainlist, gridId, templeteGrid, templetflag);
//            getDictionarySearchResults(userval,'D','null','null')
//showErrorPopupMessage('Message', 'Message', dialogWidth, dialogHeight);

            try {
                $("#SearchResult").autocomplete("destroy");
                $("#intellisenseDiv").html("");
                $("#intellisensebox").hide();
                $("#intellisenseDiv").hide();
                $("#intellisenseboxId").hide();
                $("#smartSaerchCountId").html(" ");
            } catch (e) {

            }
            try {
                $("#templeteSearchResult").autocomplete("destroy");
                $("#intellisenseDiv").html("");
                $("#intellisensebox").hide();
                $("#intellisenseDiv").hide();
                $("#intellisenseboxId").hide();
                $("#smartSaerchCountId").html(" ");
            } catch (e) {
            }
            try {
                $.ajax({
                    type: "post",
                    url: "descriptorSuggestions",
                    cache: false,
                    data: {
                        term: userval.trim(),
                        searchId: searchId,
                        domainValue: domain,
                    },
                    traditional: true,
                    dataType: 'json',
                    success: function (item) {
                        console.log(item);
//           response(item);
                        var message = "Please Select any Class from the displayed suggestions,Enter key is not allowed here.";
                        if (item != null && item.length > 0) {
                            message = "Please Select any Class from the displayed suggestions,Enter key is not allowed here.";
                        } else {
                            message = "Class(s) not available with provided keyword(s).";
                        }
                        $("#dataDxpSplitterValue").show();
                        var modalObj = {
                            title: 'Message',
                            body: message
                        };
                        var buttonArray = [
                            {
                                text: 'Ok',
                                click: function () {
                                    $("#SearchResult").focus();
                                    $("#templeteSearchResult").focus();
                                    if (userval != null && userval != '' && userval != undefined && (userval.trim()).length > 2) {
                                        dictionaryAutoComplete(domain);
                                    }
                                },
                                isCloseButton: true


                            }
                        ];
                        modalObj['buttons'] = buttonArray;
//            createModal("dataDxpSplitterValue", modalObj);
                        searchModalPopup("dataDxpSplitterValue", modalObj);
                        $("#dataDxpSplitterValue").css("z-index", "9999 !important");


                    }
                });
            } catch (e) {

            }

//            $("#dataDxpSplitterValue").show();
//            var modalObj = {
//                title: 'Message',
//                body: "Please Select any Class from the displayed suggestions,Enter key is not allowed here."
//            };
//            var buttonArray = [
//                {
//                    text: 'Ok',
//                    click: function () {
//                        $("#SearchResult").focus();
//                        $("#templeteSearchResult").focus();
//                    },
//                    isCloseButton: true
//
//
//                }
//            ];
//            modalObj['buttons'] = buttonArray;
////            createModal("dataDxpSplitterValue", modalObj);
//            searchModalPopup("dataDxpSplitterValue", modalObj);
//            $("#dataDxpSplitterValue").css("z-index", "9999 !important");
        } else {
            if (e.keyCode == 13 && (userval.trim()).length <= 2) {
                var modalObj = {
                    title: 'Message',
                    body: "Please enter a keyword with at least 3 characters, ignoring special characters like @.,;:/ etc."
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        click: function () {
                            $("#SearchResult").focus();
                            $("#templeteSearchResult").focus();
                        },
                        isCloseButton: true


                    }
                ];
                modalObj['buttons'] = buttonArray;
//                    createModal("dataDxpSplitterValue", modalObj);
                searchModalPopup("dataDxpSplitterValue", modalObj);
                return;
            } else {
                delay(function () {
                    userval = $('#templeteSearchResult').val();
                    userval1 = userval;
                    try {
                        userval = userval.trim();
                    } catch (e) {
                        userval = userval1;
                    }

                    if ((userval.trim()).length > 2) {
                        dictionaryAutoComplete(domain);
                    } else {
                        return;
                    }
                }, 500);
            }
        }
//        stopLoader();
    } else if (dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != undefined
            && dxpAdavanceSearchOptions != '' && dxpAdavanceSearchOptions == 'PR') {
        repositoryAutoComplete(event);
    } else {


        userval = userval.trim();
        var responseObj = {};
        $(".searchbutton").removeClass("searchbutton");
        $("#rightsearchicon").addClass("replacedSearchButton");
        $(".searchResultsDiv").show();
        $(".backbutton").show();
        $(".selectDropDown").show();
        $(".visualizationDashboardView").hide();
        $("#floatingfilterDownArrowIcon").show();
        $('.ui-autocomplete').html('');
//        $("#smartSaerchCountId").html('');
//        $("#smartSaerchCountId").show();
        if (userval != null && userval != '') {
            $(".clear_input").show();
        } else {
            if (e.keyCode == 13 && !(userval != null && userval != '' && userval != undefined)) {
                $(".clear_input").hide();
//                $("#dataDxpSplitterValue").show();

                if (!($("#dataDxpSplitterValue").css('display') == 'none') && !($("#dataDxpSplitterValue").is(':empty')))
                {
                    $("#templeteSearchResult").blur();
                    const mymodal = $('#dataDxpSplitterValue');

                    if (mymodal.hasClass("show")) {
                        mymodal.modal('hide');
                        $(".backGroundOpacity").css("display", "none");

                    }
                } else {
                    $("#templeteSearchResult").blur();
                    $("#dataDxpSplitterValue").show();
                    $("#intellisenseboxId").hide();
                    $("#intellisense").hide();
                    var modalObj = {
                        title: 'Message',
                        body: "Please enter a keyword with at least 3 characters, ignoring special characters like @.,;:/ etc."
                    };

//                    createModal("dataDxpSplitterValue", modalObj);
                    searchModalPopup("dataDxpSplitterValue", modalObj);
                }
            } else {
                if ((userval != null && userval != '' && userval != undefined)) {
                    $("#intellisenseboxId").hide();
                    $("#intellisense").hide();
                    $("#templeteSearchResult").blur();
                    var modalObj = {
                        title: 'Message',
                        body: "Please enter a keyword with at least 3 characters, ignoring special characters like @.,;:/ etc."
                    };

//                    createModal("dataDxpSplitterValue", modalObj);
                    searchModalPopup("dataDxpSplitterValue", modalObj);
                }
                $(".clear_input").hide();
                stopLoader();
            }
        }
        if (e.keyCode == 45 //Insert
                // e.keyCode == 32 //Space                
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
                || e.keyCode == 27//Escape
                || (lastKey != null && lastKey != undefined && lastKey != '' && lastKey != 'undefined'
                        && nonsearchkeyCodes.hasOwnProperty(lastKey.toUpperCase()))
                ) {
            stopLoader();
            console.log('Ajax Not sent');
            return;
        } else {
            if (e.keyCode == 13) {
                $("#templeteSearchResult").blur();
                if (!(onlySpecialChar == false)) {
                    stopLoader();
                    $("#intellisenseboxId").hide();
                    $("#intellisense").hide();
                    $("#dataDxpSplitterValue").show();
                    var modalObj = {
                        title: 'Message',
                        body: "Please enter a keyword with at least 3 characters, ignoring special characters like @.,;:/ etc."
                    };
                    var buttonArray = [
                        {
                            text: 'Ok',
                            click: function () {
                                $("#SearchResult").focus();
                                $("#templeteSearchResult").focus();
                            },
                            isCloseButton: true


                        }
                    ];
                    modalObj['buttons'] = buttonArray;
//                    createModal("dataDxpSplitterValue", modalObj);
                    searchModalPopup("dataDxpSplitterValue", modalObj);
                    return;
                }
                $("#smartSaerchCountId").html(" ");
                $("#intellisenseboxId").hide();//Enter
                $("#intellisense").hide();//Enter
//                showLoader();
//                $(".massSearchListItem").show();

                firstPanelShowFlag = true;
                //getFirstPanelShow(event);
                $("#templeteSearchResult").val(userval);
                if (userval != null && userval != '' && userval != undefined && userval.length > 2) {
//                    $(".massSearchListItem").show();
                    $(".massSearchListItem #rightsearchicon").removeClass("replacedSearchButton");
                    $(".massSearchListItem #rightsearchicon").addClass("searchbutton");
                    $("#filterDownArrowIconID").find('img').hide();
//                    showLoader();
                    $("#typedResult").val(userval);
                    $("#result").val(userval);
                    if (domain != null && templetflag != "Y" && templetflag != undefined) {
                        stopLoader();
                        var domainList = domainlist.split(',');
                        DXPSsearchResults('S', userval, domain, domainList[0], domainList[1], domainList[2], "N", gridId);
                        searchBasedAILensResults(userval, domain);
                    } else {
                        stopLoader();
                        let mypromise = new Promise(resolve => {
                            getsearchitem("Y", domain, domainlist, resolve, gridId, '', templeteGrid);
                        });
                        await mypromise;
                        searchBasedAILensResults(userval, domain);
                    }
                    ajaxTime = new Date().getTime();

//                    stopLoader();
                } else {
                    if (e.keyCode == 13 && userval != null && userval != '' && userval != undefined && userval.length <= 2) {
                        $(".clear_input").hide();
//                        $("#dataDxpSplitterValue").show();
                        stopLoader();
                        if (!($("#dataDxpSplitterValue").css('display') == 'none') && !($("#dataDxpSplitterValue").is(':empty')))
                        {
                            $("#templeteSearchResult").blur();
                            const mymodal = $('#dataDxpSplitterValue');

                            if (mymodal.hasClass("show")) {
                                mymodal.modal('hide');
                                $(".backGroundOpacity").css("display", "none");

                            }
                        } else {
                            $("#templeteSearchResult").blur();
                            $("#dataDxpSplitterValue").show();
                            $("#intellisenseboxId").hide();
                            $("#intellisense").hide();
                            var modalObj = {
                                title: 'Message',
                                body: "Please enter a keyword with at least 3 characters, ignoring special characters like @.,;:/ etc."
                            };
                            var buttonArray = [
                                {
                                    text: 'Ok',
                                    click: function () {
                                        $("#SearchResult").focus();
                                        $("#templeteSearchResult").focus();
                                    },
                                    isCloseButton: true


                                }
                            ];
                            modalObj['buttons'] = buttonArray;

//                            createModal("dataDxpSplitterValue", modalObj);
                            searchModalPopup("dataDxpSplitterValue", modalObj);
                        }

                        return;
                    } else {
                        if (e.keyCode != 13) {
                            $("#templeteSearchResult").blur();
                            $("#intellisenseboxId").hide();
                            $("#intellisense").hide();
                            var modalObj = {
                                title: 'Message',
                                body: "Please enter a keyword with at least 3 characters, ignoring special characters like @.,;:/ etc."
                            };
                            var buttonArray = [
                                {
                                    text: 'Ok',
                                    click: function () {
                                        $("#SearchResult").focus();
                                        $("#templeteSearchResult").focus();
                                    },
                                    isCloseButton: true


                                }
                            ];
                            modalObj['buttons'] = buttonArray;
//                            createModal("dataDxpSplitterValue", modalObj);
                            searchModalPopup("dataDxpSplitterValue", modalObj);
                            return;
                        }
                        $(".clear_input").hide();
                        stopLoader();
                    }

                }
//                showLoader();
            } else {
                try {
                    delay(function () {
                        if (!(onlySpecialChar == false || onlySpecialChar == undefined)) {
                            stopLoader();
                            $("#intellisenseboxId").hide();
                            $("#intellisense").hide();
                            $("#dataDxpSplitterValue").show();
                            $("#templeteSearchResult").blur();
                            var modalObj = {
                                title: 'Message',
                                body: "Please enter a keyword with at least 3 characters, ignoring special characters like @.,;:/ etc."
                            };

//                            createModal("dataDxpSplitterValue", modalObj);
                            searchModalPopup("dataDxpSplitterValue", modalObj);
                            return;
                        }
                        userval = userval.replace(/\s\s+/g, ' ');
                        $("#result").val(userval);
                        if (userval.length < 3)
                        {
                            $("#smartSaerchCountId").html(" ");
//                clearTextSearch();
                            $("#intellisenseboxId").hide();
                            $("#intellisenseboxId").hide();

                            stopLoader();
                        } else {
                            stopLoader();
                            console.log('if condition::::sending ' + userval + " to server....");
                            ajaxTime = new Date().getTime();
                            $("#intellisensebox").attr("data-space", "yes");
//                        showLoader();
                            var locale_dd = $("#localedd").find(':selected').data('code');
                            var languageid = ""
                            try {
                                languageid = $("#localedd").find(':selected').val();
                                languageid = languageid.replace(/#/g, '_');
                            } catch (e) {
                            }
                            try {
                                showLoader();
                                $("#templeteSearchResult").blur
                                $.ajax({
                                    type: "POST",
                                    url: "searchSuggestion",
                                    data: {
                                        'searchtext': userval,
                                        'domainValue': domain,
                                        'locale': 'en_US',
                                        'langID': '1007-1_LG-000001_1',
//                                        'fuzzyFlag': "false",
                                        'fuzzyFlag': fuzzyflag,
                                        'templeteGrid': templeteGrid,
                                        'templetflag': templetflag
                                    },
                                    success: function (response) {
//                                stopLoader();
                                        stopLoader();
                                        firstPanelShowFlag = true;
                                        secondPanelShowFlag = true;
                                        thirdPanelShowFlag = true;

                                        $("#filterDownArrowIconID").hide();
                                        $("#searchDxpSplitter").hide();
                                        if (response != null && response != '') {
                                            $("#intellisenseDiv").show();
                                            $("#intellisenseDiv").html("");
                                            responseObj = JSON.parse(response);
                                            if (responseObj['flag']) {
                                                //suggestion
                                                stopLoader();
                                                $("#intellisenseDiv").html(responseObj['suggestion']);
                                                $("#intellisenseDiv").attr('data-recordNoTextArray', responseObj['recordNoTextArray']);
                                                totalTime = new Date().getTime() - ajaxTime;
                                                totalTime = parseInt(totalTime) / 1000;
                                                $("#smartSaerchCountId").text("(Showing " + responseObj['currentRecords'].toLocaleString() + " of " + responseObj['totalRecords'].toLocaleString() + " in " + totalTime + " Sec)");
//                                        $("#text_count").text("(Showing " + responseObj['currentRecords'].toLocaleString() + " of " + responseObj['totalRecords'].toLocaleString() + " in " + totalTime + " Sec)");
                                                $("#intellisensebox").show();
                                                $("#intellisenseboxId").show();
                                                $("#templeteSearchResult").focus();
                                            } else {
                                                $("#smartSaerchCountId").html(" ");
                                                stopLoader();
//                                        showLoader();
                                                if (responseObj['totalRecords'] == '0') {
                                                    stopLoader();
                                                    $("#intellisenseDiv").html("<div  class='ac-items' id='updateIntellisense_0'>No Record(s) found</div>");
                                                    $("#updateIntellisense_0").css("color", "red");
                                                    $("#intellisensebox").show();
                                                    $("#intellisenseboxId").show();
                                                    $("#templeteSearchResult").focus();
                                                } else {
                                                    stopLoader();
                                                    $("#intellisenseDiv").html("<div  class='ac-items' id='updateIntellisense_0'>No Record(s) found</div>");
                                                    $("#updateIntellisense_0").css("color", "red");
                                                    $("#intellisensebox").show();
                                                    $("#intellisenseboxId").show();
                                                    $("#templeteSearchResult").focus();
                                                }
//                                        showLoader();
                                            }
                                        } else {
                                            stopLoader();

//                                    showLoader();
                                            $("#intellisenseDiv").html("<div  class='ac-items' id='updateIntellisense_0'>No Record(s) found</div>");
                                            $("#updateIntellisense_0").css("color", "red");
                                            $("#intellisensebox").show();
                                            $("#intellisenseboxId").show();
                                            $("#templeteSearchResult").focus();

                                        }
                                        stopLoader();
                                    },
                                    error: function (e) {
                                        console.log(e);
                                        $("#templeteSearchResult").focus();
                                        stopLoader();
//                                showLoader();
//                                sessionTimeout(e);
                                    }

                                });
                            } catch (er) {
                                stopLoader();
                            }

                        }

                    }, 1000);
                } catch (er) {
                    stopLoader();
                }
            }

        }
    }
//    stopLoader();
}
function getsearchitem(TempleteFlag, domain, domainlist, resolve, gridId, searchType, templeteGrid, paramArray, searchName, recordNo, reorcnotext) {
    showLoader();
//    $(".massSearchListItem").show();
//    $(".selectDropDown").hide();
//    $(".backbutton").hide();
    $(".searchSettingIcon").show();
    $("#DXPlLanguageSelectionId").show();
//    $("#intellisense").hide();
    $("#searchResultsCountId").hide();
    $('#templetesearchresult').remove();
    $("#dxp1Seconddiv").html("");
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    try {
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridisImport", "");
    } catch (e) {

    }
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
    }
    if (searchType == null || searchType == '' || searchType == undefined) {
        searchType = "S";

    }

//    if (searchType != 'S' && TempleteFlag == 'Y') {
//        $('.dxpParamsDotsButton').css("display", "none");
//        $('#classProperties').css("display", "none");
//        $('.main_card').css("display", "none");
//        $('.threeDomainCards').css("display", "none");
//        $('.visionParamSearchCover').css("display", "none");
//        $('.paramSearchbtn').css("display", "none");
//        $("#dxp1Firstdiv").append("<div class='showHideDivClass' id='showHideDivId' onclick=\"shrinkParamsDiv('" + searchType + "')\"><i class='fa fa-angle-double-up' aria-hidden='true'></i></div>");
//       
//        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
//         try {            
//            $('#dxp1MainSplitter').jqxSplitter('expand');
//        }catch(e){
//            
//        }
//        $("#dxp1Firstdiv").append("<div id='templetesearchresult' class='templeteresultClass'></div>");
//    } else {
//        $("#VisualizePageBody").hide();
//        $("#dxpClassficationAppendClass").hide();
//        $(".visionjqxTreeDiv").hide();
//        $("#DxpParamSplitterDotsClass").show();
//
//        $("#dxp1Firstdiv").html("<div id='templetesearchresult' class='templeteresultClass'></div>");
//        $("#dxp1Firstdiv").addClass("PilogresearchSearch");
//        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
//          try {            
//            $('#dxp1MainSplitter').jqxSplitter('expand');
//        }catch(e){
//            
//        }
//        //        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'Search Results', 'N');
//        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'Search Results', 'N');
//    }

    if (searchType != 'S' && TempleteFlag == 'Y') {
        $('.dxpParamsDotsButton').css("display", "none");
        $('#classProperties').css("display", "none");
        $('.main_card').css("display", "none");
        $('.threeDomainCards').css("display", "none");
        $('.visionParamSearchCover').css("display", "none");
        if (!fioriThemeCheck) {
            $('.paramSearchbtn').css("display", "none");
        }
        try {
            if ($('.dxpParamsDotsButton').hasClass('showParamsDiv')) {
                $('.dxpParamsDotsButton').removeClass('showParamsDiv');
            }
        } catch (e) {

        }
        try {
            if ($('#classProperties').hasClass('showParamsDiv')) {
                $('#classProperties').removeClass('showParamsDiv');
            }
        } catch (e) {

        }
        try {
            $("#showHideDivId").remove();
        } catch (e) {

        }
        try {
            $("#templetesearchresult").remove();
        } catch (e) {

        }

        $("#dxp1Firstdiv").append("<div class='showHideDivClass' id='showHideDivId' title='Back to Parametric Search' onclick=\"shrinkParamsDiv('" + searchType + "')\"><i class='fa fa-angle-double-up' aria-hidden='true'></i></div>");

        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
        $('#dxp1MainSplitter').jqxSplitter({resizable: false});
        $('#dxp1MainSplitter').on('expanded', function (event) {
            $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
            $('#dxp1MainSplitter').jqxSplitter({resizable: false});
            refreshGrid('searchResults');
        });
//        try {
//            $('#dxp1MainSplitter').on('resize', function (event) {
//            refreshGrid('searchResults');
//        });
//        } catch (e) {
//
//        }
        try {
            $('#dxp1MainSplitter').jqxSplitter('expand');
        } catch (e) {

        }
        $("#dxp1Firstdiv").append("<div id='templetesearchresult' class='templeteresultClass'></div>");

    } else {
        $("#VisualizePageBody").hide();
        $("#dxpClassficationAppendClass").hide();
        $(".visionjqxTreeDiv").hide();
        $("#DxpParamSplitterDotsClass").show();

        $("#dxp1Firstdiv").html("<div id='templetesearchresult' class='templeteresultClass'></div>");
        if ($('.classProperties').hasClass('showParamsDiv')) {
            $('.classProperties').removeClass('showParamsDiv');
        }
        $("#dxp1Firstdiv").addClass("PilogresearchSearch");
        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
        $('#dxp1MainSplitter').jqxSplitter({resizable: false});
        $('#dxp1MainSplitter').on('expanded', function (event) {
            $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
            $('#dxp1MainSplitter').jqxSplitter({resizable: false});
            refreshGrid('searchResults');
        });
//        try {
//            $('#dxp1MainSplitter').on('resize', function (event) {
//            refreshGrid('searchResults');
//        });
//        } catch (e) {
//
//        }
        try {
            $('#dxp1MainSplitter').jqxSplitter('expand');
        } catch (e) {

        }
        //        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'Search Results', 'N');
        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'Search Results', 'N');
    }
    var typedResult = $("#typedResult").val();
    var locale = $("#localedd").find(':selected').data('code');
//    var searchType = $("#currentSearchType").val();
    var paramArrayStr = $("#currentSearchData").val();
    var cattype = $("#currentSearchCatType").val();
    //templateResultsCover
//    var searchText = ($("#result").val() != null ? $("#result").val() : "");
    var searchText = ($("#templeteSearchResult").val() != null ? $("#templeteSearchResult").val() : "");
    if (!(searchText != null && searchText != '')) {
        searchText = $("#searchedValue").val();
    }

    if ((searchText != null && searchText != '') || (paramArrayStr != null && paramArrayStr != '')) {
//        $(".searchtempleteClass").html("");
        $.ajax({
            type: "POST",
            url: 'getTemplateGrid',
//             async: false,
            data: {
                'searchType': 'S',
                'langID': 'en_US',
                'locale': 'en_US',
                'templeteFlag': 'Y',
                'templeteGrid': templeteGrid,
                'templeteFlag': TempleteFlag,
            },
            traditional: true,
            cache: false,
            success: function (gridResultObj) {
                if (gridResultObj != null) {
                    showLoader();
                    try {
                        $("#templateResults").jqxGrid("destroy");
                    } catch (e) {
                    }
                    $("#templetesearchresult").html("<div id='templateResults'></div>");

                    var gridInitParamObj = {}; //gridInitParamObj
                    gridInitParamObj = gridResultObj['gridInitParamObj'];

                    if (gridInitParamObj != null && !jQuery.isEmptyObject(gridInitParamObj)) {
                        $("#templateResults").attr("data-gridinitparamobj", JSON.stringify(gridInitParamObj));
                    }
                    if (gridResultObj != null && !jQuery.isEmptyObject(gridResultObj)) {
                        $("#templateResults").attr("data-gridResultObj", JSON.stringify(gridResultObj));
                    }
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
                        //  fieldsArray.length = 0;
                        // fieldsArray = gridResultObj.columns;
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
                        var levelhoverrander = function (row, columnfield, value, defaulthtml, columnproperties) {
                            return  "<div title='View Data' style='cursor:pointer;'   class='imageStyle visionTemplete' data-count='" + value + "' id='dtlul_" + row + "' >" + value + "</div>";
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
//                                    async: false,
                                    data: {
                                        gridId: gridResultObj['gridId'],
                                        colsArray: JSON.stringify(gridResultObj['colsArray']),
                                        tableName: "STG_TERMINOLOGY",
                                        searchText: (searchText != null ? searchText : ""),
                                        searchType: searchType,
                                        filterColumnName: gridResultObj['filterColumnName'],
                                        'langID': ($("#localedd").val() != null ? $("#localedd").val() : ""),
                                        'locale': "en_US",
                                        'cattype': cattype,
                                        'paramArray': paramArrayStr,
                                        'recordNo': recordNo,
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
                                        try {
                                            if (gridInitParamObj != null
                                                    && !jQuery.isEmptyObject(gridInitParamObj)
                                                    && gridInitParamObj['uuu_GridPagesCountFlag'] == 'Y')
                                            {
                                                if (data[0] != null) {
                                                    showgridPagesCount('templateResults', 'Y', data[0].TotalRows)
                                                }
                                            }
                                        } catch (e) {
                                        }
                                    },
                                    beforeprocessing: function (data) {
                                        stopLoader();
                                        if (data[0] != null) {
                                            //  alert(data.JSONObjectList[0].TotalRows);
                                            if (data[0].TotalRows != null) {
                                                var splittersSizeData = {};
                                                source.totalrecords = data[0].TotalRows;
//                                                var domainList = domainlist.split(',');
//                                                if (searchType == 'S') {
//                                                    DXPSsearchResults('S', searchText, domain, domainList[0], domainList[1], domainList[2], TempleteFlag);
//
//                                                } else {
//                                                    searchResults(searchType, searchType, paramArray, cattype, searchName, TempleteFlag, templeteGrid);
//                                                }

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
                                            var domainList = domainlist.split(',');
                                            if (searchType == 'S') {
                                                DXPSsearchResults('S', searchText, domain, domainList[0], domainList[1], domainList[2], TempleteFlag, reorcnotext);

                                            } else {
                                                searchResults(searchType, searchType, paramArray, cattype, searchName, TempleteFlag, templeteGrid, reorcnotext);
                                            }
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
                        gridPropObj.columnsresize = false;
                        $('#templateResults').jqxGrid(gridPropObj);
                        $('#templateResults').on('cellclick', function (event) {//newRegGridId
                            console.log("event.args.column.datafield::templateResults:::" + event.args.column.datafield);
                            var args = event.args;
                            var rowBoundIndex = args.rowindex;
                            $("#currentRowIndex").val(rowBoundIndex);
//                            $("#currentGridId").val(gridResultObj['gridId']);
//                             
                            var gridId = $("#regGrdiId").val();

                            if (gridId == null || gridId == undefined || gridId == "") {
                                gridId = gridResultObj['newRegGridId'];
                            }
                            if (gridId == null || gridId == undefined || gridId == "") {
                                gridId = gridResultObj['gridId'];
                            }
//                            $("#currentGridId").val(gridId);
                            var columnindex = args.columnindex;
                            var dataField = args.datafield;
                            if (columnindex == 1) {
                                CreationBasedOnDomainWithGrid(event.args.column.datafield, $('#templateResults').jqxGrid('getrowdata', event.args.rowindex), 'form', gridId, '', 'New Registrations')
                                showSelectedTabContent(event, 'dxpFromTab', 'dxpFormContent', 'View Form', 'N');
                            }
//                            if (dataField == 'CNT') {
//                                var domainList = domainlist.split(',');
//                                getcountData(event.args.column.datafield, $('#templateResults').jqxGrid('getrowdata', event.args.rowindex), domain, domainList[2]);
////                                showSelectedTabContent('viewFormTab');
//                            }
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

                    }// end if(gridPropObj != null)
                }
                // stopLoader();
//                resolve("resolved");
            },
            error: function (e) {
                resolve("resolved");
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
function DXPSsearchResults(searchType, userval, domainValue, searchId, searchView, role, resultflag, reorcnotext) {
//    var searchId = $("#accordion").attr("data-id");
    $(".voiceNavigator").show();
    $("#VisualizePageBody").hide();
    $(".voiceNavigator").show();
    $(".searchSettingIcon").show();
    $("#DXPlLanguageSelectionId").show();
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    if (!fioriThemeCheck) {
        $("#showdomainBasedCards").html("");
    }
    $("#searchId").val(searchId);
//    $("#showdomainBasedCards").html("");
//    $("#intellisense").hide();
    $("#searchResultsCountId").hide();
    $("#dxp1Seconddiv").html("");
    try {
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridisImport", "");
    } catch (e) {

    }
    var isFirstTime = true;
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }


    var searchText = $("#result").val() != null ? $("#result").val() : "";
    var locale = $("#localedd").find(':selected').data('code');
    if (locale != null && locale != '') {

    } else {
        locale = "";
    }
    var langID = $("#localedd").val() != null ? $("#localedd").val() : "";

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
        $("#searchResultsParamsData").attr("data-searchreqType", "");
        $("#searchResultsParamsData").attr("data-searchName", "");
        $("#searchResultsParamsData").attr("data-searchtemplateFlag", "");
        $("#searchResultsParamsData").attr("data-searchtemplateGrid", "");

    } catch (e) {

    }
    try {
        $("#searchResultsParamsData").attr("data-searchflag", "Y");
        $("#searchResultsParamsData").attr("data-searchType", searchType);
        $("#searchResultsParamsData").attr("data-searchId", searchId);
        $("#searchResultsParamsData").attr("data-searchView", searchView);
        $("#searchResultsParamsData").attr("data-searchrole", role);
        $("#searchResultsParamsData").attr("data-searchresultflag", resultflag);
        $("#searchResultsParamsData").attr("data-searchuserval", userval);
        $("#searchResultsParamsData").attr("data-searchText", searchText);
        $("#searchResultsParamsData").attr("data-searchdomainValue", domainValue);
        $("#searchResultsParamsData").attr("data-searchparamsArray", "");
        $("#searchResultsParamsData").attr("data-searchcattype", "");
        $("#searchResultsParamsData").attr("data-searchreqType", "");
        $("#searchResultsParamsData").attr("data-searchName", "");
        $("#searchResultsParamsData").attr("data-searchtemplateFlag", "");
        $("#searchResultsParamsData").attr("data-searchtemplateGrid", "");

    } catch (e) {

    }

    $('#search_count').text("");
    var resultStartTime = new Date().getTime();
    $.ajax({
        type: "POST",
        url: 'genericSearchGrid',
        data: {
            'searchType': searchType,
            'langID': langID,
//            'langID': $("#localedd").val(),
            'locale': locale,
            searchId: searchId,
            searchView: searchView,
            role: role
        },
        traditional: true,
        cache: false,
        success: function (gridResultObj) {
//            showLoader();
            if (gridResultObj != null) {
//                $(".massSearchListItem").hide();
//                $(".massSearchListItem").removeClass("massSearchToggleClass");
//                $(".closeImgToggle").hide();
//                $(".searchImgToggle").show();
                $("#accordion").accordion({active: parseInt($("#accordion").attr("data-searchresults"))});
//                $("#accordion").accordion({active: 4});
                try {
                    $("#searchResults").jqxGrid("destroy");
                } catch (e) {
                }

                if (resultflag != null && resultflag == 'Y') {
                    $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
                    $('#dxp1MainSplitter').jqxSplitter({resizable: false});
                    $("#dxp1Seconddiv").html("<div id='searchResults'></div>");
//                     $('#dxp1MainSplitter').jqxSplitter('collapse');
                    $('#dxp1MainSplitter').on('collapsed', function (event) {
                        refreshGrid('searchResults');

                    });
                    $('#dxp1MainSplitter').on('expanded', function (event) {
                        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
                        $('#dxp1MainSplitter').jqxSplitter({resizable: false});
                        refreshGrid('searchResults');
                    });
//                    try {
//            $('#dxp1MainSplitter').on('resize', function (event) {
//            refreshGrid('searchResults');
//        });
//        } catch (e) {
//
//        }
                    try {
                        $('#dxp1MainSplitter').jqxSplitter('expand');
                    } catch (e) {

                    }
                    showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'Search Results', 'N');

                } else {
                    $("#dxp1Firstdiv").html("");
//                    if (domainValue.toUpperCase() == 'ALL') {
//                        $("#dxpGridContent").html("<div id='searchResults'></div>");
//                    } else {
//                        $("#dxpGridContent").html("<div id='searchResults'></div>");
//                    }
                    if (domainValue.toUpperCase() == 'ALL') {
                        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '100%'}]});
                        $('#dxp1MainSplitter').jqxSplitter({resizable: false});
                        $('#dxp1MainSplitter').on('expanded', function (event) {
                            $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '100%'}]});
                            $('#dxp1MainSplitter').jqxSplitter({resizable: false});
                            refreshGrid('searchResults');
                        });
//                        try {
//            $('#dxp1MainSplitter').on('resize', function (event) {
//            refreshGrid('searchResults');
//        });
//        } catch (e) {
//
//        }
                        try {
                            $('#dxp1MainSplitter').jqxSplitter('expand');
                        } catch (e) {

                        }
                        $("#dxp1Firstdiv").html("");
                        $("#dxp1Firstdiv").html("<div id='searchResults'></div>");
                    } else {
                        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '100%'}]});
                        $('#dxp1MainSplitter').jqxSplitter({resizable: false});
                        $('#dxp1MainSplitter').on('expanded', function (event) {
                            $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '100%'}]});
                            $('#dxp1MainSplitter').jqxSplitter({resizable: false});
                            refreshGrid('searchResults');
                        });
//                        try {
//            $('#dxp1MainSplitter').on('resize', function (event) {
//            refreshGrid('searchResults');
//        });
//        } catch (e) {
//
//        }
                        try {
                            $('#dxp1MainSplitter').jqxSplitter('expand');
                        } catch (e) {

                        }
                        $("#dxp1Firstdiv").html("<div id='searchResults'></div>");
                    }
//                    if (domainValue.toUpperCase() == 'ALL') {
//                        $("#dxpGridContent").html("<div id='searchResults'></div>");
//                    } else {
//                        $("#dxpGridContent").html("<div id='searchResults'></div>");
//                    }
//                    showSelectedTabContent(nullsh, 'dxpGridTab', 'dxpGridContent');
//                    showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', 'Search Results','N');
                    showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'Search Results', 'N');


                }
                var hrefObj = {}; //hrefObj
                hrefObj = gridResultObj['hrefObj'];
                $("#hrefColumn").val(hrefObj['hrefColumn'] != null ? hrefObj['hrefColumn'] : "");
//                        $("#hrefColumn").val(hrefObj['hrefColumn']);
                $("#linkedColumns").val(hrefObj['linkedColumns']);
                $("#stripValue").val(hrefObj['stripValue']);
                $("#imageColumn").val(hrefObj['imageColumn']);
                $("#imageTable").val(hrefObj['imageTable']);
                $("#imageTableColumn").val(hrefObj['imageTableColumn']);
                $("#hrefGridId").val(hrefObj['hrefGridId']);
                var hiddenObj = gridResultObj['hiddenObj'];
                if (hiddenObj != null) {
                    $("#hiddenObj").val(JSON.stringify(hiddenObj));
                }
                var searchButtonObj = gridResultObj['searchButtonObj'];
                if (searchButtonObj != null) {
                    $("#searchButtonObj").val(JSON.stringify(searchButtonObj));
                }
                var gridInitParamObj = {}; //gridInitParamObj
                gridInitParamObj = gridResultObj['gridInitParamObj'];
                try {
                    if (gridInitParamObj != null && !jQuery.isEmptyObject(gridInitParamObj)) {
                        $("#searchResults").attr("data-gridinitparamobj", JSON.stringify(gridInitParamObj));
                    }
                    if (gridResultObj != null && !jQuery.isEmptyObject(gridResultObj)) {
                        $("#searchResults").attr("data-gridResultObj", JSON.stringify(gridResultObj));
                    }
                } catch (ey) {

                }

                if (gridInitParamObj['uuu_smartSearchexportRangeCount'] != null && gridInitParamObj['uuu_smartSearchexportRangeCount'] != '' && (searchType == "S" || searchType == "s")) {
                    $("#ssExportCount").val(gridInitParamObj['uuu_smartSearchexportRangeCount']);
                } else {
                    if (gridInitParamObj['uuu_exportRangeCount'] != null && gridInitParamObj['uuu_exportRangeCount'] != '') {
                        $("#ssExportCount").val(gridInitParamObj['uuu_exportRangeCount']);
                    }
                }

                //searchButtonObj
                //  alert("hrefObj:::::"+JSON.stringify(hrefObj));
                if (gridResultObj != null && gridResultObj.datafields) {

                }
                var dataFeilds = gridResultObj.datafields;
                var hrefObj = gridResultObj.hrefObj;
                var localData = gridResultObj.data;
                var formId = gridResultObj.formId;
                var panelId = gridResultObj.panelId;
                var gridOperation = gridResultObj.gridOperation;
                //////////////////console.log("gridOperation:::"+gridOperation);

                ////////////////////console.log("formId::::::"+formId);
                $('#formId').val(formId);
                $('#panelId').val(panelId);
                var gridPropObj = {};
                gridPropObj = gridResultObj.gridPropObj;
                var hiddenObj = gridResultObj['hiddenObj'];
                if (hiddenObj != null) {
                    $("#hiddenObj").val(JSON.stringify(hiddenObj));
                }
                var fieldsInitParamObj = gridResultObj['fieldsInitParamObj'];
                if (fieldsInitParamObj != null) {
                    $("#fieldsInitParamObjStr").val(JSON.stringify(fieldsInitParamObj));
                }


                if (gridPropObj != null) {
                    fieldsArray.length = 0;
                    fieldsArray = gridResultObj.columns;
                    gridPropObj.columns = gridResultObj.columns;

                    var headerTooltipRenderer = function (element) {
                        $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
                            position: 'bottom-right',
                            showArrow: false, content: $(element).text()});
                    }

                    var renderToolbar = gridPropObj.renderToolbar;
                    // console.log("renderToolbar::::"+renderToolbar);
                    //  alert("renderToolbar:::"+renderToolbar);
                    gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');
                    //      var defaultTabName = $("#defaultTabName").val();
                    var descrenderListWise = function (row, columnfield, value, defaulthtml, columnproperties) {

                        return '<div class="jqx-grid-cell-left-align" style="white-space: pre-line;">' + value + '</div>';
                    };
                    var coldataWarpText = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var colwidth = $("#searchResults").jqxGrid('getcolumnproperty', columnfield, 'width');
                        var scrollPosition = $("#searchResults").jqxGrid('scrollposition');
                        $('#idsearchwraptempContainerdiv').css("width", colwidth);
                        $('#idsearchwraptempContainerdiv').html(value);
                        var textHeight = $("#idsearchwraptempContainerdiv").outerHeight(true);
                        var textHeight1 = textHeight / 1.5;
                        try {
                            $('#idsearchwraptempContainerdiv').html("");
                        } catch (w) {
                            $('#idsearchwraptempContainerdiv').html("");
                        }
                        var gridrowsheight1 = $("#searchResults").jqxGrid('getrowheight', row);
                        var gridrowsheight = $("#searchResults").jqxGrid('rowsheight');
                        if (gridrowsheight1 != null && gridrowsheight1 != ''
                                && gridrowsheight1 != 'undefined'
                                && gridrowsheight1 != undefined
                                ) {

                        } else {
                            gridrowsheight1 = gridrowsheight;
                        }

                        if (textHeight1 > gridrowsheight1) {
                            $("#searchResults").jqxGrid('setrowheight', row, textHeight / 1.5);
                        }
                        $("#searchResults").jqxGrid('scrolloffset', scrollPosition.top, scrollPosition.left);

                        var uuu_columnstyle = "white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;";
                        var divClass = "jqx-grid-cell-left-align";
                        if (fieldsInitParamObj != null && !jQuery.isEmptyObject(fieldsInitParamObj)) {
                            var selectedColumnInitParamObj = fieldsInitParamObj[columnfield];
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
                                element.removeProp('overflow');
                                element.css('overflow-y', 'scroll');
                                return element[0].outerHTML;

                            };
                    var searchDateRenderer = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                        var cellValue = $("#searchResults").jqxGrid('getcellvalue', row, columnfield);
                        console.log("cellValue::" + cellValue);
                        if (cellValue != null && cellValue != '') {
                            var cellsformat = columnproperties['cellsformat'];
                            if (cellsformat != null && cellsformat != '') {

                            } else {
                                cellsformat = "dd-MM-yyyy HH:mm:ss";
                            }
                            var dateValue = $.jqx.dataFormat.formatdate(value, cellsformat, $("#searchResults").jqxGrid('gridlocalization'));
                            console.log("dateValue:::" + dateValue);
                            cellValue = dateValue;
                        }
                        var element = $(defaulthtml);
                        element.html(cellValue);
                        return element[0].outerHTML;
//                       return '<div style="overflow: hidden; text-overflow: ellipsis; padding-bottom: 2px; text-align: left; margin-right: 2px; margin-left: 4px; margin-top: 15px;">'+cellValue+'</div>';
                        //return cellValue;
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
                    var searchText = $("#result").val() != null ? $("#result").val() : "";
                    if (searchText == null || searchText == "" || searchText == undefined) {
                        searchText = userval;
                    }
                    $("#colsArrayStr").val(JSON.stringify(gridResultObj['colsArray']));

                    $("#currentSmartSearchData").val(userval);
//                    $("#currentSearchData").val(JSON.stringify(paramsArray));
                    $("#currentSearchType").val(searchType);
//                    var fuzzyFlag = false;
//                                try {
//                                    if ($("#isFuzzy").is(':checked')) {
//                                        fuzzyFlag = true;
//                                    } else {
//                                        fuzzyFlag = false;
//                                    }
//                                } catch (e) {
//                                fuzzyFlag = false;
//                                }

                    var source =
                            {
                                type: 'POST',
//                                                async: false,
                                datatype: "json",
                                datafields: dataFeilds,
                                data: {
                                    gridId: gridResultObj['gridId'],
                                    colsArray: JSON.stringify(gridResultObj['colsArray']),
                                    tableName: gridResultObj['tableName'],
                                    searchType: searchType,
                                    searchText: searchText,
                                    searchId: searchId,
                                    searchView: searchView,
                                    reorcnotext: reorcnotext,
                                    fuzzyFlag: $("#isFuzzy").is(':checked'),
                                    role: role
                                },
                                url: 'genericSearchGridResults',
                                cache: false,
                                beforeSend: function (xhr) {
                                    xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                                    showLoader();
                                }, loadError: function (xhr, status, error) {
                                    stopLoader();
                                    throw new Error(error);
                                }, loadComplete: function (data)
                                {
                                    stopLoader();
                                    try {
                                        if (gridInitParamObj != null
                                                && !jQuery.isEmptyObject(gridInitParamObj)
                                                && gridInitParamObj['uuu_GridPagesCountFlag'] == 'Y')
                                        {
                                            if (data[0] != null) {
                                                showgridPagesCount('searchResults', 'Y', data[0].TotalRows)
                                            }
                                        }
                                    } catch (e) {
                                    }
                                },
                                downloadComplete: function (data, status, xhr) {


                                    return data;
                                },
                                beforeprocessing: function (data) {
                                    showLoader();
                                    if (data[0] != null) {
                                        //  alert(data.JSONObjectList[0].TotalRows);
                                        if (data[0].TotalRows != null) {
                                            source.totalrecords = data[0].TotalRows;
                                            if (isFirstTime) {
                                                isFirstTime = false;
                                                $("#search_count").attr('totalRecords', data[0].TotalRows.toLocaleString());
                                                $("#search_count").html("(" + (labelObject['Fetched'] != null ? labelObject['Fetched'] : 'Fetched') + " "
                                                        + $("#search_count").attr('totalRecords') + " "
                                                        + (labelObject['records in'] != null ? labelObject['records in'] : 'records in') + " "
                                                        + (new Date().getTime() - resultStartTime) / 1000 + " sec)");
                                            }
                                        } else {
                                            source.totalrecords = 0;
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

                                        stopLoader();
                                    } else {
                                        $("#search_count").attr('totalRecords', 0);
                                        source.totalrecords = 0;
                                        if (isFirstTime) {
                                            isFirstTime = false;
                                            $("#search_count").html("(" + (labelObject['No record(s) found'] != null ? labelObject['No record(s) found'] : 'No record(s) found') + ")");
                                        }
                                        // $("#search_count").text("(No record(s) found)");
                                        stopLoader();
                                    }

                                },
                                sort: function ()
                                {
                                    $("#searchResults").jqxGrid('updatebounddata', 'sort');
                                    try {
                                        $("#searchResults").jqxGrid('clearselection');
                                    } catch (e) {
                                    }
                                    stopLoader();
                                },
                                filter: function () {

                                    $("#searchResults").jqxGrid('updatebounddata', 'filter');
                                    try {
                                        $("#searchResults").jqxGrid('clearselection');
                                    } catch (e) {
                                    }
                                    stopLoader();
                                }


                            };
                    var dataAdapter = new $.jqx.dataAdapter(source);
                    gridPropObj.source = dataAdapter;
                    gridPropObj.showtoolbar = true;
                    gridPropObj.rowdetails = false;
                    gridPropObj.rendergridrows = function () {
                        return dataAdapter.records;
                    };
                    var renderToolbar = gridPropObj.renderToolbar;
                    gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');

                    gridPropObj.rowdetailstemplate = {
                        rowdetails: "<div style='margin-top:0.2%' class='visionSearchRowDtl'></div>",
                        rowdetailsheight: 32
                    };
                    //autoheight
                    gridPropObj.autoheight = false;
                    //  showLoader();
                    gridPropObj.initrowdetails = function (index, parentElement, gridElement, datarecord) {
                        showLoader();
                        $.ajax({
                            type: "POST",
                            url: 'fetchRowDetails',
                            data: {
                                'selectedRowData': JSON.stringify(datarecord),
                                searchType: searchType
                            },
                            traditional: true,
                            cache: false,
                            success: function (response) {
                                if (response != null && response != '') {
                                    //row0searchResults
                                    //   var rowDetailDiv = "<div style='margin-top:0.2%' class='visionSearchRowDtl'></div>";
                                    // var rowId = "row"+index+"searchResults";
                                    console.log("response::Row Detail::" + response);
                                    var responseObj = JSON.parse(response);
                                    if (responseObj['rowDetailFlag']) {
                                        //   var dataCopyRecord = datarecord;
                                        var details = $($(parentElement).children()[0]);
                                        console.log("response::rowDetailMessage::" + responseObj['rowDetailMessage']);
                                        details.html('<div class="searchRowDtl">' + responseObj['rowDetailMessage'] + '<div>');
                                        var detailTypes = responseObj['detailTypes'];
                                        var initParamObj = responseObj['initParamObj'];

                                        $("#initParamObj").val(JSON.stringify(initParamObj));
                                        var detailTypesArray = detailTypes.split(",");
                                        var dataRecordConverted = {};
                                        //delete datarecord['ERPSFD'];
                                        //  delete datarecord['PURCHASE'];
                                        for (var key in datarecord) {
                                            if (key != null && key.indexOf("DATE") > -1) {

                                                dataRecordConverted[key] = datarecord[key];
                                            } else {
                                                if (datarecord[key] != null && datarecord[key] != '' && isNaN(datarecord[key])) {
                                                    datarecord[key] = datarecord[key].replace(/&/g, '&amp;');
                                                    datarecord[key] = datarecord[key].replace(/"/g, '&quot;');
                                                    datarecord[key] = datarecord[key].replace(/\\/g, '&bsol;');
                                                    //  .replace(/\\/g, '/');
                                                    for (var entitykey in HtmlEntities) {
                                                        try {
                                                            var entity = HtmlEntities[entitykey];
                                                            var regex = new RegExp(entitykey, 'g');
                                                            datarecord[key] = datarecord[key].replace(regex, entity);
                                                        } catch (e) {
                                                        }

                                                    }
                                                    dataRecordConverted[key] = datarecord[key];
                                                } else {
                                                    dataRecordConverted[key] = datarecord[key];
                                                }
                                            }

                                        }
                                        // var dataStr = JSON.stringify(dataRecordConverted);
                                        for (var i = 0; i < detailTypesArray.length; i++) {
                                            if (detailTypesArray[i] != null && detailTypesArray[i] != '') {
                                                var dataDetailObj = responseObj[detailTypesArray[i]];
                                                if (dataDetailObj != null) {
                                                    var functionName = "";
                                                    if (detailTypesArray[i] != 'COPY') {

                                                        functionName = "navigateToFormIcon('" + dataDetailObj['dataField'] + "','" + JSON.stringify(dataRecordConverted) + "','form','" + dataDetailObj['gridId'] + "','" + dataDetailObj['panelId'] + "','" + dataDetailObj['basketType'] + "','" + detailTypesArray[i] + "');";

//                                                        functionName = "navigateToFormIcon('" + dataDetailObj['dataField'] + "','" + JSON.stringify(dataRecordConverted) + "','form','" + dataDetailObj['gridId'] + "','" + dataDetailObj['panelId'] + "','" + dataDetailObj['basketType'] + "');";
                                                    } else {
                                                        $("#copyFormId").val(dataDetailObj['formId']);
                                                        dataRecordConverted['formId'] = dataDetailObj['formId'];
                                                        dataRecordConverted['gridId'] = dataDetailObj['gridId'];
                                                        dataRecordConverted['panelId'] = dataDetailObj['panelId'];
                                                        dataRecordConverted['baskettype'] = dataDetailObj['basketType'];
                                                        dataRecordConverted['objectid'] = dataDetailObj['formId'];
//                                                       
                                                        functionName = "copyItem('" + dataDetailObj['copyId'] + "','" + JSON.stringify(dataRecordConverted) + "');";
                                                        //copyFormId
                                                    }
                                                    $('#' + detailTypesArray[i] + '_' + datarecord['uid']).attr('onClick', functionName);
                                                    if (detailTypesArray[i] == 'SOW') {//onkar SOW
                                                        functionName = "sowDocDownload('" + JSON.stringify(dataRecordConverted) + "','" + dataDetailObj['basketType'] + "')";
                                                        $('#' + detailTypesArray[i] + '_' + datarecord['uid']).attr('onClick', functionName);
                                                    }
                                                }


                                            }

                                        }

                                    } else {
                                        $("#dialog").html(responseObj['rowDetailMessage']);
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
                                                $(".ui-dialog").addClass("copyIconDialog");
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
                                //  alert('Error: ' + JSON.stringify(e));
                                stopLoader();
                                console.log(e);
                                var meg = e.statusText;
                                var status = e.status;
                            }

                        });
                    };
                    $("#currentGridpageNum").val(0);
                    $("#currentGridId").val(gridResultObj['gridId']);
                    $('#searchResults').jqxGrid(gridPropObj);
                    $('#searchResults').parent().css("padding-top", "3px", "important");
                    $('#searchResults').parent().css("padding-bottom", "3px", "important");
                    $('#searchResults').jqxGrid('showtoolbar', true);
                    $('#searchResults').on('cellclick', function (event) {
//                                    $('#searchResults').bind('cellclick', function (event) {
                        var panelId = $("#panelId").val();
                        console.log(panelId + ":::event.args.column.datafield:::::" + event.args.column.datafield);
                        var args = event.args;
                        var rowBoundIndex = args.rowindex;
                        var columnindex = args.columnindex;
                        if (columnindex == 1) {
                            navigateToFormSearch(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', hrefObj['hrefGridId'], gridResultObj['panelId'], 'Search View', 'searchResults', hrefObj['hrefGridId'], event.args.rowindex);
                            // navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId']);                  
                        }
                    });
                    $("#" + gridResultObj['gridId']).on("cellclick", function (event)
                    {
                        var args = event.args;
                        var rowBoundIndex = args.rowindex;
                        var columnindex = args.columnindex;
                        var dataField = args.datafield;
                        navigateToForm(event.args.column.datafield, $('#' + gridResultObj['gridId']).jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId'], event.args.rowindex);
                    });
                    $("#searchResults").on('celldoubleclick', function (event) {
                        var args = event.args;
                        var dataField = args.datafield;
                        var dataField1 = args.text;
                        var rowIndex = args.rowindex;
                        var cellValue = args.value;
                        var isEditable = $('#searchResults').jqxGrid('getcolumnproperty', dataField, 'editable');
                        console.log("isEditable::::" + isEditable)
                        if (!isEditable) {
                            var column = $("#searchResults").jqxGrid('getcolumn', event.args.datafield).text;
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
                    $('#searchResults').on("pagechanged", function (event) {
                        var oldPageNum = $("#currentGridpageNum").val();
                        console.log("oldPageNum:::" + oldPageNum + "::::Current Page Num:::" + event.args.pagenum);
                        // event arguments.
                        var args = event.args;
                        // page number.
                        var pagenum = args.pagenum;
                        // page size.
                        var pagesize = args.pagesize;
                        if (parseInt(event.args.pagenum) != parseInt(oldPageNum)) {
                            var selectedrowindexes = $('#searchResults').jqxGrid('selectedrowindexes');
                            console.log("searchResults:::selectedrowindexes:::" + selectedrowindexes);
                            try {
                                if (selectedrowindexes != null
                                        && selectedrowindexes.length != 0
                                        && selectedrowindexes[0] != -1) {
                                    $('#searchResults').jqxGrid('clearselection');
                                }

                            } catch (e) {
                            }
                        }
                        $("#currentGridpageNum").val(event.args.pagenum);
                    });
                    $('#searchResults').on("pagesizechanged", function (event) {
                        console.log("::pagesizechanged:::" + event.args.pagenum);
                        $("#currentGridpageNum").val(0);
                    });


                }// end if(gridPropObj != null)


            }
        },
        error: function (e) {
            stopLoader();
            console.log(e);
            sessionTimeout(e);
        }


    });
    //stopLoader();
    if (parseInt($("#accordion").attr("data-templateresults")) != 0) {
        showLoader();
        // fetchTemplateResults(searchType, paramsArray, cattype);
    }

}
function getClassSearchResults(className, domain, role, typedValue) {
    showLoader();
    $("#currentClass").val(className);
    $("#currentTypedValue").val(typedValue);
    var gridId = '';
    $("#currentDomain").val(domain);
    if (domain != null && domain != '' && domain != undefined
            && (domain == 'All' || domain == 'PRODUCT')) {
        gridId = "DXP_SEARCH_VIEW";
        $("#currentGridId").val(gridId);
    } else if (domain != null && domain != '' && domain != undefined
            && domain == 'SERVICE') {
        gridId = "DXP_SM_SEARCH_VIEW";
        $("#currentGridId").val(gridId);
    } else if (domain != null && domain != '' && domain != undefined
            && domain == 'VENDOR') {
//        $('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 30}]});
        gridId = "DXP_VM_SEARCH_VIEW";
        $("#currentGridId").val(gridId);
    } else {
        gridId = "PM_SEARCH_VIEW";
        $("#currentGridId").val(gridId);
    }
//    showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent')

    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'showSearchDxpClassResults',
        data: {
            'gridId': gridId,
            'roleId': role
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            stopLoader();
            var resultObj = {};
            var resultdata = response['result'];
            resultObj = JSON.parse(resultdata);
            templetegridConfig(resultObj, 0, [], gridId, className);

        }
    });


}
function templetegridConfig(gridResultObj, selectedGridIndex, paramArray, selectedGridId, className) {

    showLoader();
    // ravi start 
    globalTabId = gridResultObj['gridId'];
    // ravi end 
    console.log(":293::gridConfig::");
    try {
        $("#searchResults").jqxGrid("destroy");
    } catch (e) {
    }
    $("#dxp1Seconddiv").html("<div id='searchResults'></div>");


    try {
        // if(true) {

        // $('#' + gridResultObj['gridId']).jqxGrid('destroy');
        alert(subTabId + "::::" + $("#" + gridResultObj['gridId']).length);

        if (gridResultObj != null) {
            //need to assign all hidden fields like hrefColumn,linkedColumns,stripValue,imageColumn,imageTable,imageTableColumn
            var hrefObj = {}; //hrefObj
            hrefObj = gridResultObj['hrefObj'];
            $("#hrefColumn").val(hrefObj['hrefColumn'] != null ? hrefObj['hrefColumn'] : "");
//                        $("#hrefColumn").val(hrefObj['hrefColumn']);
            $("#linkedColumns").val(hrefObj['linkedColumns']);
            $("#stripValue").val(hrefObj['stripValue']);
            $("#imageColumn").val(hrefObj['imageColumn']);
            $("#imageTable").val(hrefObj['imageTable']);
            $("#imageTableColumn").val(hrefObj['imageTableColumn']);
            $("#defaultValues").val(gridResultObj['defaultValues']);

            var gridInitParamObj = {}; //gridInitParamObj
            gridInitParamObj = gridResultObj['gridInitParamObj'];
            if (gridInitParamObj != null && !jQuery.isEmptyObject(gridInitParamObj)) {
                $("#" + gridResultObj['gridId']).attr("data-gridinitparamobj", JSON.stringify(gridInitParamObj));
            }
            if (gridResultObj != null && !jQuery.isEmptyObject(gridResultObj)) {
                $("#" + gridResultObj['gridId']).attr("data-gridResultObj", JSON.stringify(gridResultObj));
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

            //  alert("hrefObj:::::"+JSON.stringify(hrefObj));
            if (gridResultObj != null && gridResultObj.datafields) {

            }
            var dataFeilds = gridResultObj.datafields;

            var hrefObj = gridResultObj.hrefObj;
            var localData = gridResultObj.data;
            var formId = gridResultObj.formId;
            var panelId = gridResultObj.panelId;
            var gridOperation = gridResultObj.gridOperation;
            //////////////////console.log("gridOperation:::"+gridOperation);

            ////////////////////console.log("formId::::::"+formId);
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
                var renderToolbar = gridPropObj.renderToolbar;
                gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');
                //      var defaultTabName = $("#defaultTabName").val();
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



                //   gridPropObj.rendergridrows=function(obj) {return obj.data;};   
                // for work flow start
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


                                var crmParamArray = [];
                                var crpParamObj = {};
                                crpParamObj['value'] = className;
                                crpParamObj['column'] = 'TERM';
                                crpParamObj['operator'] = 'LIKE';
                                crpParamObj['rangeFlag'] = 'N'
                                crpParamObj['minvalue'] = "";
                                crpParamObj['maxvalue'] = "";
                                crmParamArray.push(crpParamObj);
                                if (crmParamArray != null && crmParamArray.length != 0) {
                                    data.paramArray = JSON.stringify(crmParamArray);
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
                            },
                            beforeprocessing: function (data) {
                                if (data[0] != null) {
                                    //  alert(data.JSONObjectList[0].TotalRows);
                                    source.totalrecords = data[0].TotalRows;
//     console.log("data[0] != null::: $(\"#export\").attr(\"disabled\":::::" + $("#export" + gridResultObj['gridId']).attr("disabled"));
                                } else {

                                    source.totalrecords = 0;
//                                   
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
                                $('#searchResults').jqxGrid('updatebounddata', 'sort');
                                try {
                                    $('#searchResults').jqxGrid('clearselection');
                                } catch (e) {
                                }
                                stopLoader();
                            },
                            filter: function () {

                                $('#searchResults').jqxGrid('updatebounddata', 'filter');
                                try {
                                    $('#searchResults').jqxGrid('clearselection');
                                } catch (e) {
                                }
                                stopLoader();
                            }


                        };
                var dataAdapter = new $.jqx.dataAdapter(source);
                gridPropObj.source = dataAdapter;
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
                gridPropObj.rendergridrows = function () {
                    return dataAdapter.records;
                };

                $("#submitDropdown" + gridResultObj['gridId']).html(gridResultObj['buttonObj']);
                $("#exportDropdown" + gridResultObj['gridId']).html(gridResultObj['gridOperation']);
                gridPropObj.rowdetails = false;

                alert("Before Grid");
                //subTabId

                if (editable)
                {
                    $('#gridRefreshButton').hide();
//                                        $('div#submitDropdown > img').remove();
                }


                $("#currentGridpageNum").val(0);

                $('#searchResults').jqxGrid(gridPropObj);
                $('#searchResults').on("cellclick", function (event)
                {
                    var args = event.args;
                    var rowBoundIndex = args.rowindex;
                    $("#currentRowIndex").val(rowBoundIndex);
                    $("#currentGridId").val(gridResultObj['gridId']);
                    var columnindex = args.columnindex;
                    var dataField = args.datafield;
                    sessionStorage.setItem('dataField', dataField);
                    sessionStorage.setItem('rowBoundIndex', rowBoundIndex);
                    if (columnindex == 1) {
                        navigateToForm(event.args.column.datafield, $('#' + gridResultObj['gridId']).jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId'], event.args.rowindex);
                    }

                });
                $('#searchResults').on('celldoubleclick', function (event) {
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
                $('#searchResults').on('rowunselect', function (event) {
//                                    showSelectedRows(gridResultObj['gridId'],null,gridInitParamObj['uuu_GridNtfnFlag']);
                });
                $('#searchResults').on('rowselect', function (event) {
                    showClassBasedButtons(gridResultObj, event.args.rowindex, gridInitParamObj);

//                                    showSelectedRows(gridResultObj['gridId'], event.args.rowindex,gridInitParamObj['uuu_GridNtfnFlag']);
                });

                $('#searchResults').on("pagechanged", function (event) {
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
                $('#searchResults').on("pagesizechanged", function (event) {
                    console.log("::pagesizechanged:::" + event.args.pagenum);
                    $("#currentGridpageNum").val(0);
                });


                //  
                alert("604 Grid");

                $('#searchResults').parent().css("padding-top", "3px", "important");
                $('#searchResults').parent().css("padding-bottom", "3px", "important");
                //   $('#' + gridResultObj['gridId']).jqxGrid('showtoolbar', false);
                if ((srsRegiterButton != null && srsRegiterButton != undefined && srsRegiterButton == 'Y')
                        || (hideToolBar != null && hideToolBar != undefined && hideToolBar == 'Y'))

                {
                    $('#searchResults').jqxGrid('showtoolbar', true);
                    console.log("iam in if grid condition in toolbar 1016" + srsRegiterButton);
                } else
                {
                    $('#searchResults').jqxGrid('showtoolbar', false);
                    console.log("iam in else grid condition in toolbar 1021" + srsRegiterButton);
                }

// navigation clicking 
                //   stopLoader(); /* for loader we commented by RGA */
                alert("683 Grid");
            }// end if(gridPropObj != null)

        }
        //  }

    } catch (e) {
        stopLoader();
    }
    stopLoader();

}// end of function gridConfig(-)
function getFloatingParamForm(searchId, templateFlag, templeteGrid, divId, reqType, searchName, aiSearchString, AIFlag) {
    showLoader();
    $("#SearchResult").attr("disabled", false);
    $("#SearchResult").val("");
    $("#templeteSearchResult").val("");
    $("#dxp1Filterdiv").html("");
//    $("#dxp1Firstdiv").html("");
//$("#dxp1Seconddiv").html(""); 
    $("#SelectedValue").val("All");
    $("#mainDxpSplitter").hide();
    $("#searchDxpSplitter").hide();
    $("#smartSaerchCountId").hide();
    $("#dxpClassficationAppendClass").hide();
    $("#searchtemplateFlag").val(templateFlag);
    $("#searchtemplateGrid").val(templeteGrid);
    $("#currentSearchReqType").val($("#floatingdxpAdavanceSearchOptions").val());
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    try {
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridisImport", "");
    } catch (e) {

    }
    if (reqType == null && reqType == undefined) {
        reqType = $("#floatingdxpAdavanceSearchOptions").val();
    }


//    var fuzzySearchFlag = "N";
//    
//    try{
//      fuzzySearchFlag = $("#fuzzySearchFlag").val();
//       }catch(e){            
//        }
    var regGrdiId = $("#regGrdiId").val();
    var pprDomainType = $("#pprDomainType").val();
    var currentshowSearchDomain = $("#currentshowSearchDomain").val();
    var currentshowSearchId = $("#currentshowSearchId").val();
    var currentshowSearchRole = $("#currentshowSearchRole").val();
    if (reqType == null || reqType == undefined || reqType == '') {
        reqType = $("#dxpAdavanceSearchOptions").val();
    }
    if (reqType == 'S') {
        $("#searchbarDiv").show;
        $("#searchResultsCountId").show;
        showSearchBar(currentshowSearchDomain, searchId, currentshowSearchRole, regGrdiId, 'N', pprDomainType)
        showSelectedTabContent(null, 'dxpSearchTab', 'dxpSearchContent', 'Search', 'N');
        if ($("#dxpTabs").is(":visible")) {

        } else {
            toggleTabsAndMenus(event);
        }
    } else if (reqType == 'D') {
        $("#searchbarDiv").show;
        try {
            $("#idxpfuzzysearchId").hide;
        } catch (e) {
        }


        showSelectedTabContent(null, 'dxpSearchTab', 'dxpSearchContent', 'Search', 'N');
//        dictionaryAutoComplete();
        if ($("#dxpTabs").is(":visible")) {

        } else {
            toggleTabsAndMenus(event);
        }
    } else {
        $("#searchbarDiv").hide();
    }

    if (reqType != null && reqType != undefined && reqType != '' && (reqType == 'PR' || reqType == 'S')) {
        stopLoader();
    } else if (reqType != null && reqType != undefined && reqType != '' && reqType == 'C') {
        $("#SearchResult").attr("disabled", true);
        $("#searchDxpSplitter").css("display", "none");
        $(".visionjqxTreeDiv").show();
        $("#dxpClassficationAppendClass").show();
        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'Classification Search', 'N');
        getClassificationForm(searchId, reqType);

    } else {
        if (reqType != 'C' || reqType != 'PR' || reqType != 'S') {
            $(".visionjqxTreeDiv").hide();
        }
        $("#dxpClassficationAppendClass").hide();
        //$("#searchDxpSplitter").show();
        $("#searchDefaultSplitter").show();
        //$("#mainDxpSplitter").hide();
        $("#searchsettingsSplitter").val('');
        $(".dxpDictionaryDotsButton").hide();
        $(".dxpDictionaryFormData").hide();
        $("#searchresultsSplitter").html('');
//        $("#searchResults").remove();
        $("#intellisenseDiv").hide();
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

        $.ajax({
            type: "POST",
            url: 'getParamSearchForm',
            data: {
                'searchId': searchId,
                'reqType': reqType,
                'templateFlag': templateFlag,
                'templateGrid': templeteGrid,
                fioriThemeCheck: fioriThemeCheck
//            searchName: searchName
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                $("#dxpClassficationAppendClass").hide();
                //$("#searchDxpSplitter").show();
                $(".visionjqxTreeDiv").hide();
//                $("#dxpClassficationAppendClass").hide();
                $("#DxpParamSplitterDotsClass").show();
                if (response != null && response != '') {
                    console.log("divId:::" + divId);
                    var responseObj = JSON.parse(response);
                    var searchLebel = responseObj['searchLebel'];
                    $("#aiLensAttachedmentFile").html(''); //som
                    $('#aiAttachedmentImageUpload').val("");
                    $('#aiImageAttachedmentUpload').val('');
                    if (!fioriThemeCheck) {
                        getPersonalizationDataOpt(searchId, reqType, templateFlag, templeteGrid);
                    }
                    getClassificationSuggetions();
                    if (reqType == 'D') {
//                        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '0'}]});
                        $('#dxpSearchMainSplitter').jqxSplitter('expand');
                        $("#dxpSearchMainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', panels: [{size: '0'}]});
                        showSelectedTabContent(null, 'dxpSearchTab', 'dxpSearchContent', 'Search', 'N');
                        if ($("#dxpTabs").is(":visible")) {

                        } else {
                            toggleTabsAndMenus(event);
                        }

                    } else {
                        $("#dxp1Firstdiv").html("");
                        $("#dxp1Seconddiv").html("");

                        try {
                            $('#dxp1MainSplitter').jqxSplitter('expand');
                        } catch (e) {

                        }
                        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '100%'}]});
                        $('#dxp1MainSplitter').on('expanded', function (event) {
                            $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '100%'}]});

                        });

                        try {
                            $('#dxp1MainSplitter').jqxSplitter('expand');
                        } catch (e) {

                        }
                        if (!fioriThemeCheck) {
                            $("#dxp1Filterdiv").remove();
                            $("#dxp1Firstdiv").html(responseObj['formString']);
                            $("#dxp1Firstdiv").css("width", "100%");
                            $("#dxp1Firstdiv").addClass("PilogresearchSearch");
                        } else {
                            $("#dxp1Filterdiv").show();
                            $("#dxp1Filterdiv").html(responseObj['formString']);
                            $("#dxp1Filterdiv").css("width", "100%");
                            $("#dxp1Filterdiv").addClass("PilogresearchSearch");
                        }
                        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', searchLebel, 'N');
                        if ($("#dxpTabs").is(":visible")) {

                        } else {
                            toggleTabsAndMenus(event);
                        }
                        if (AIFlag == "Y") {
                            $("#aiTypedValue").attr('readonly', true);
                            var paramArray = [];
                            var paramObj = {};
                            paramObj.datatype = "string";
                            paramObj.column = "PURCHASE";
                            paramObj.rangeflag = "N";
                            paramObj.minvalue = "";
                            paramObj.maxvalue = "";
                            paramObj.value = aiSearchString.replace(" ", "%");
                            paramObj.operator = "LIKE";
                            paramObj.staged = "N";
                            paramObj.andOrOperator = "AND";
                            paramObj.typeSelectStr = "";
                            paramObj.dlovcolname = "";
                            paramObj.valuestripflag = "N";
                            paramObj.valuetrimcharflag = "N";
                            paramArray.push(paramObj);
                            setTimeout(function () {
                                var i = 0;
                                $("#pprsearch tbody tr").each(function () {
                                    var colname = $(this).attr('data-colname');
                                    if (colname == 'PURCHASE') {
                                        $("#" + reqType + "tb" + i).val(aiSearchString.replace(" ", "%"));
                                    }
                                    ++i;
                                });
                                searchResults(reqType, '', paramArray, '', 'Select One', '', '');
                            }, 1500);
                            closeAINavigation();
                            $("#aiTypedValue").attr('readonly', false);
                        } else if (AIFlag == "M") {
                            $("#aiTypedValue").attr('readonly', true);
                            var paramArray = [];
                            var paramObj = {};
                            paramObj.datatype = "string";
                            paramObj.column = "REFERENCE_NO";
                            paramObj.rangeflag = "N";
                            paramObj.minvalue = "";
                            paramObj.maxvalue = "";
                            paramObj.value = aiSearchString;
                            paramObj.operator = "IN";
                            paramObj.staged = "N";
                            paramObj.andOrOperator = "AND";
                            paramObj.typeSelectStr = "";
                            paramObj.dlovcolname = "";
                            paramObj.valuestripflag = "N";
                            paramObj.valuetrimcharflag = "N";
                            paramArray.push(paramObj);


                            setTimeout(function () {
                                var i = 0;
                                $("#pprsearch tbody tr").each(function () {
                                    var colname = $(this).attr('data-colname');
                                    if (colname == 'REFERENCE_NO') {
                                        $("#" + reqType + "tb" + i).val(aiSearchString.replace(" ", "%"));
                                    }
                                    ++i;
                                });
                                searchResults(reqType, '', paramArray, '', 'Select One', '', '');
                            }, 1500);
                            closeAINavigation();
                            $("#aiTypedValue").attr('readonly', false);
                        }
                    }

                    $("#dxp1TabsWithGridContent").addClass("gridHeight");
//                      $("#searchTypeSplitter").html(responseObj['formString']);
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
function navigateSearchButton(id, isFormURL, buttonObjId) {

    var searchButtonObjStr = $("#" + buttonObjId).val();
    if (searchButtonObjStr != null && searchButtonObjStr != '') {
        var searchButtonObj = JSON.parse(searchButtonObjStr);
        var url = searchButtonObj[id];
        if (url != '' && url.indexOf("<<--") > -1 && url.indexOf("-->>")) {
            var resultId = url.substring(url.indexOf("<<--") + 4, url.indexOf("-->>"));
            var replacedStr = "<<--" + resultId + "-->>";
            var replacedValue = $("#" + resultId).val();
            if (replacedValue != null && replacedValue != '') {
                replacedValue = replacedValue.replace(/&/g, '&amp;');
                replacedValue = replacedValue.replace(/"/g, '&quot;');
                replacedValue = replacedValue.replace(/\\/g, '&bsol;');
                for (var entitykey in HtmlEntities) {
                    try {
                        var entity = HtmlEntities[entitykey];
                        var regex = new RegExp(entitykey, 'g');
                        replacedValue = replacedValue.replace(regex, entity);
                    } catch (e) {
                    }

                }
            }

            url = url.replace(replacedStr, replacedValue);

        }
        if (isFormURL == 'Y') {
            //  eval(url);
            console.log("url::::" + url);
            eval('(' + url + ')');
        } else {
            navigateToFormURL(url);
        }

    }
    //
}
function onFuzzyCheck(event) {
    keydomainSearch(event);
}
function attachSearchKeyupFunction() {
    $("#sidebarsearch").unbind("keyup").keyup(function () {
        let g = $(this).val().trim().toLowerCase();
        $(".domain_sidebar_menu > ul > li").each(function () {
            $(this).fadeOut(0);
            if (!$(this).hasClass("highorderMenuItem")) {
                $(this).addClass("highorderMenuItem")
            }
        })
        $(".searchResultService").each(function () {
            let s = $(this).text().trim().toLowerCase();
            if (s.indexOf(g) != -1) {
                $(this).closest(".highorderMenuItem").fadeIn(0);
            }
        });
    })
}
async function searchlucenData(event, domain, domainlist, gridId, templeteGrid, templateFlag) {
//    showLoader();
    showLoader();
    var e = event || window.event;
    var ajaxTime = "";
    var totalTime = "";
    var lastKey = event.key;
    var userval = $('#templeteSearchResult').val();
    $("#searchedValue").val(userval);
    $("#downloadData").next().next().hide();
//    if(userval.indexOf("_") != -1){
    var domainValue = "";
    var dxpAdavanceSearchOptions = $('#floatingdxpAdavanceSearchOptions').val();
    showLoader();
    userval = userval.trim();
    var responseObj = {};
    $(".searchbutton").removeClass("searchbutton");
    $("#rightsearchicon").addClass("replacedSearchButton");
    $(".searchResultsDiv").show();
    $(".backbutton").show();
    $(".selectDropDown").show();
    $(".visualizationDashboardView").hide();
    $("#floatingfilterDownArrowIcon").show();
    $('.ui-autocomplete').html('');
    if (userval != null && userval != '') {
        $(".clear_input").show();
    } else {
        $(".clear_input").hide();
    }

    $("#intellisenseboxId").hide();//Enter
    showLoader();
    $("#filterDownArrowIconID").find('img').hide();
    firstPanelShowFlag = true;
    //getFirstPanelShow(event);
    $("#templeteSearchResult").val(userval);
    var onlySpecialChar = onlySpecialchars(userval);

    if (!(onlySpecialChar == false)) {
        stopLoader();
        $("#intellisenseboxId").hide();
        $("#intellisense").hide();
        $("#dataDxpSplitterValue").show();
        var modalObj = {
            title: 'Message',
            body: "Please enter a keyword with at least 3 characters, ignoring special characters like @.,;:/ etc."
        };
        var buttonArray = [
            {
                text: 'Ok',
                click: function () {
                    $("#SearchResult").focus();
                    $("#templeteSearchResult").focus();
                },
                isCloseButton: true


            }
        ];
        modalObj['buttons'] = buttonArray;
//                    createModal("dataDxpSplitterValue", modalObj);
        searchModalPopup("dataDxpSplitterValue", modalObj);
        return;
    }

    if (dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != undefined
            && dxpAdavanceSearchOptions != '' && dxpAdavanceSearchOptions == 'D') {
        $("#dataDxpSplitterValue").show();
        var modalObj = {
            title: 'Message',
            body: "Please Select any Class from the displayed suggestions,Enter key is not allowed here."
        };

        createModal("dataDxpSplitterValue", modalObj);
    } else {
        if (userval != null && userval != '' && userval != undefined && userval.length > 2) {

            showLoader();
            $("#typedResult").val(userval);
            $("#result").val(userval);
            if (templateFlag != null && templateFlag != "Y") {
                var domainList = domainlist.split(',');
                DXPSsearchResults('S', userval, domain, domainList[0], domainList[1], domainList[2], "N");
            } else {
                let mypromise = new Promise(resolve => {
                    getsearchitem("Y", domain, domainlist, resolve, gridId, '', templeteGrid);
                });
                await mypromise;
                z
            }
        } else {
            var modalObj = {
                title: 'Message',
                body: "Please enter a keyword with at least 3 characters, ignoring special characters like @.,;:/ etc."
            };
            createModal("dataDxpSplitterValue", modalObj);
        }
    }

    stopLoader();
}
function getClassificationForm(searchtype) {
    $("#dxp1Seconddiv").html("");
    $("#dxp1Firstdiv").html("");
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

    showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'Classification Search', 'N');
    $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '100%'}]});
    $('#dxp1MainSplitter').jqxSplitter({resizable: false});
    $('#dxp1MainSplitter').on('expanded', function (event) {
        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '100%'}]});
        $('#dxp1MainSplitter').jqxSplitter({resizable: false});
        refreshGrid('searchResults');
    });
//    try {
//            $('#dxp1MainSplitter').on('resize', function (event) {
//            refreshGrid('searchResults');
//        });
//        } catch (e) {
//
//        }

    try {
        $('#dxp1MainSplitter').jqxSplitter('expand');
    } catch (e) {

    }
    getTreeNestedGrid(searchtype + '_UNSPSC_TREE', 'dxp1Firstdiv');
}
function getClassificationForm1(searchtype) {
    $("#dxp1Seconddiv").html("");
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        url: "ClassificationForm",
        cache: false,
        data: {
            searchtype: searchtype
        },
        success: function (response) {
            if (response != null && !jQuery.isEmptyObject(response)) {
                $("#dxp1Firstdiv").html(response);
                $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '40%'}]});
                try {
                    $('#dxp1MainSplitter').jqxSplitter('expand');
                } catch (e) {

                }
                showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'Classification Search', 'N');
                $("#classficationtext").autocomplete(
                        {
                            source: function (request, response) {
                                showLoader();
                                $.ajax({
                                    url: "descriptorSuggestions",
                                    dataType: "json",
                                    data: {
                                        term: $("#classficationtext").val()
                                    },
                                    success: function (item) {
                                        stopLoader();
                                        response(item);
                                    }
                                });
                            },
//                source: "descriptorSuggestions?searchLimit=15",
                            minLength: 2,
                            params: {
                                'classification': function () {
                                    return $('#classificationtype').val();
                                }},
                            create: function () {
                                $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
                                    imageid = parseInt(imageid) + 1;
                                    return $('<li>')
                                            .append("<table style='color:inherit;background-color:inherit;width:100%;border:none'><tr><td style='width:70%;color:inherit;background-color:inherit;'> " + item.value + "</td><td style='width:30%'> <img id='img" + imageid + "' "
                                                    + " onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id)  style='color:inherit;background-color:inherit;height:40px;width:40px' src='" + item.content + "'/></td></tr></table>")
                                            .appendTo(ul);
                                };
                            },
                            open: function () {
                                $('.ui-autocomplete').css('width', '400px'); // HERE
                                $('.ui-autocomplete').addClass('repositoryAutoCompleteClass');
                            },
                            select: function (event, ui) {
                                $("#classficationtext").attr("data-conceptid", $.trim(ui.item.termid));
                                onClassificationchng();
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
function getParamSearchWidgetForm(reqType, searchId) {
    var referenceNum = $("#REFERENCE_NO").val();
    var referenceType = $("#REFERENCE_TYPE").val();
    var vendorName = $("#VENDOR_NAME").val();
    var docVendorName = $("#DOC_VENDOR_NAME").val();
    reqType = 'PPRA';
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
        $.ajax({
            type: "POST",
            url: 'getParamSearchForm',
            data: {
                reqType: reqType,
                searchId: ""
            },
            traditional: true,
            cache: false,
            success: function (result) {
                stopLoader();
                var resultObj = JSON.parse(result);
                $("#accordionCardBodyS").html(resultObj['formString']);
            }
        });
    }
}
function getPPRWidgetResults(reqType, searchId) {
    var tableId = "paramsearch";
    if (reqType == 'ppr' || reqType == 'PRA' || reqType == 'PPRA') {
        tableId = "pprsearch";
    } else if (reqType == 'spec') {
        tableId = "specsearch";
    }
    var i = 0;
    var paramArray = [];
    $("#" + tableId + " tbody tr").each(function () {
        var isAllow = false;
        var paramObj = {};
        var colname = $(this).attr('data-colname')
        var tbmin = $("#" + reqType + "tbmin" + i).val();
        var tbmax = $("#" + reqType + "tbmax" + i).val();
        var value = $("#" + reqType + "tb" + i).val();
        var andOrOperator = $("#" + reqType + "andOrOperator" + i).val();
        var typeSelectStr = $("#" + reqType + "typeSelectStr" + i).val();
        var dlovcolname = $("#" + reqType + "typeSelectStr" + i).attr("data-dlovcolname");
        console.log("colname::" + colname + "::value::" + value + "::tbmin::" + tbmin + ":::tbmax:::" + tbmax);
        if (value != null && value != '') {
            isAllow = true;
        } else if (tbmin != null && tbmax != null && tbmin != '' && tbmax != '') {
            isAllow = true;
        }
        var type = $("#" + reqType + "tb" + i).attr("type");
        if (type != null && type == 'checkbox') {
            var textval = "N";
            if ($("#" + reqType + "tb" + i).is(':checked')) {
                isAllow = true;
            } else {
                isAllow = false;
            }
        }
        console.log("isAllow::::" + isAllow);
        if (isAllow) {
            paramObj.datatype = $.trim($(this).attr('data-type'));
            paramObj.column = $.trim($(this).attr('data-colname'));
            paramObj.rangeflag = $.trim($(this).attr('data-range')) == 'Y' ? 'Y' : 'N';
            paramObj.minvalue = $.trim($("#" + reqType + "tbmin" + i).val());
            paramObj.maxvalue = $.trim($("#" + reqType + "tbmax" + i).val());
            var type = $("#" + reqType + "tb" + i).attr("type");
            if (type != null && type == 'checkbox') {
                var textval = "N";
                if ($("#" + reqType + "tb" + i).is(':checked')) {
                    textval = "Y";
                } else {
                    textval = "N";
                }
                paramObj.value = textval;
            } else {
                paramObj.value = $.trim($("#" + reqType + "tb" + i).val());
            }
            paramObj.operator = $("#" + reqType + "ddw" + i).val();
            paramObj.symbol = $.trim($("#" + reqType + "ddw" + i).find('option:selected').text());
            paramObj.staged = $("#" + reqType + "ddw" + i).attr('data-staged') == "Y" ? "Y" : "N";
            paramObj.andOrOperator = andOrOperator;
            paramObj.typeSelectStr = typeSelectStr;
            paramObj.dlovcolname = dlovcolname;
            paramObj.valuestripflag = $("#" + colname).attr("data-valuestripflag");
            paramObj.valuetrimcharflag = $("#" + colname).attr("data-valuetrimcharflag");
            paramArray.push(paramObj);
        }
        ++i;
    });
    getPPRWidgetsearchResults(reqType, "", paramArray, "", "");
    $("#currentSearchData").val(JSON.stringify(paramArray));

}
function getPPRWidgetsearchResults(searchType, reqType, paramsArray, cattype, searchName) {
    showLoader();
    $("#searchId").val("FMM_PPRA_MATERIAL_SEARCH");
    var searchId = $("#searchId").val();
    var isFirstTime = true;
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var locale = $("#localedd").find(':selected').data('code');
    if (locale != null && locale != '') {

    } else {
        locale = "";
    }
    var langID = $("#localedd").val() != null ? $("#localedd").val() : "";

    $('#search_count').text("");
    var resultStartTime = new Date().getTime();
    $.ajax({
        type: "POST",
        url: 'genericSearchGrid',
        data: {
            'searchType': searchType,
            'langID': langID,
//            'langID': $("#localedd").val(),
            'locale': "en_US",
//            'locale': locale,
            searchName: "Repository Search",
            searchId: searchId
        },
        traditional: true,
        cache: false,
        success: function (gridResultObj) {

            stopLoader();

            if (gridResultObj != null) {
                try {
                    $("#formPPRWidgetGrid").jqxGrid("destroy");
                    $("#formPPRWidgetGrid").remove();
                } catch (e) {
                }
                $("#dxpPPRFormWidgetGrid").html("<div id='formPPRWidgetGrid'></div>");
                //need to assign all hidden fields like hrefColumn,linkedColumns,stripValue,imageColumn,imageTable,imageTableColumn
                var hrefObj = {}; //hrefObj
                hrefObj = gridResultObj['hrefObj'];
                $("#hrefColumn").val(hrefObj['hrefColumn'] != null ? hrefObj['hrefColumn'] : "");
//                        $("#hrefColumn").val(hrefObj['hrefColumn']);
                $("#linkedColumns").val(hrefObj['linkedColumns']);
                $("#stripValue").val(hrefObj['stripValue']);
                $("#imageColumn").val(hrefObj['imageColumn']);
                $("#imageTable").val(hrefObj['imageTable']);
                $("#imageTableColumn").val(hrefObj['imageTableColumn']);
                $("#hrefGridId").val(hrefObj['hrefGridId']);
                var hiddenObj = gridResultObj['hiddenObj'];
                if (hiddenObj != null) {
                    $("#hiddenObj").val(JSON.stringify(hiddenObj));
                }
                var searchButtonObj = gridResultObj['searchButtonObj'];
                if (searchButtonObj != null) {
                    $("#searchButtonObj").val(JSON.stringify(searchButtonObj));
                }
                var gridInitParamObj = {}; //gridInitParamObj
                gridInitParamObj = gridResultObj['gridInitParamObj'];
                if (gridInitParamObj['uuu_smartSearchexportRangeCount'] != null && gridInitParamObj['uuu_smartSearchexportRangeCount'] != '' && (searchType == "S" || searchType == "s")) {
                    $("#ssExportCount").val(gridInitParamObj['uuu_smartSearchexportRangeCount']);
                } else {
                    if (gridInitParamObj['uuu_exportRangeCount'] != null && gridInitParamObj['uuu_exportRangeCount'] != '') {
                        $("#ssExportCount").val(gridInitParamObj['uuu_exportRangeCount']);
                    }
                }
                if (gridResultObj != null && gridResultObj.datafields) {
                }
                var dataFeilds = gridResultObj.datafields;
                var hrefObj = gridResultObj.hrefObj;
                var localData = gridResultObj.data;
                var formId = gridResultObj.formId;
                var panelId = gridResultObj.panelId;
                var gridOperation = gridResultObj.gridOperation;
                $('#formId').val(formId);
                $('#panelId').val(panelId);
                var gridPropObj = {};
                gridPropObj = gridResultObj.gridPropObj;
                var hiddenObj = gridResultObj['hiddenObj'];
                if (hiddenObj != null) {
                    $("#hiddenObj").val(JSON.stringify(hiddenObj));
                }
                var fieldsInitParamObj = gridResultObj['fieldsInitParamObj'];
                if (fieldsInitParamObj != null) {
                    $("#fieldsInitParamObjStr").val(JSON.stringify(fieldsInitParamObj));
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

                    var renderToolbar = gridPropObj.renderToolbar;
                    // console.log("renderToolbar::::"+renderToolbar);
                    //  alert("renderToolbar:::"+renderToolbar);
                    gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');
                    //      var defaultTabName = $("#defaultTabName").val();
                    var descrenderListWise = function (row, columnfield, value, defaulthtml, columnproperties) {

                        return '<div class="jqx-grid-cell-left-align" style="white-space: pre-line;">' + value + '</div>';
                    };



                    var coldataWarpText = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var colwidth = $("#searchResults").jqxGrid('getcolumnproperty', columnfield, 'width');
                        var scrollPosition = $("#searchResults").jqxGrid('scrollposition');
                        $('#idsearchwraptempContainerdiv').css("width", colwidth);
                        $('#idsearchwraptempContainerdiv').html(value);
                        var textHeight = $("#idsearchwraptempContainerdiv").outerHeight(true);
                        var textHeight1 = textHeight / 1.5;
                        try {
                            $('#idsearchwraptempContainerdiv').html("");
                        } catch (w) {
                            $('#idsearchwraptempContainerdiv').html("");
                        }
                        var gridrowsheight1 = $("#searchResults").jqxGrid('getrowheight', row);
                        var gridrowsheight = $("#searchResults").jqxGrid('rowsheight');
                        if (gridrowsheight1 != null && gridrowsheight1 != ''
                                && gridrowsheight1 != 'undefined'
                                && gridrowsheight1 != undefined
                                ) {

                        } else {
                            gridrowsheight1 = gridrowsheight;
                        }

                        if (textHeight1 > gridrowsheight1) {
                            $("#searchResults").jqxGrid('setrowheight', row, textHeight / 1.5);
                        }
                        $("#searchResults").jqxGrid('scrolloffset', scrollPosition.top, scrollPosition.left);

                        var uuu_columnstyle = "white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;";
                        var divClass = "jqx-grid-cell-left-align";
                        if (fieldsInitParamObj != null && !jQuery.isEmptyObject(fieldsInitParamObj)) {
                            var selectedColumnInitParamObj = fieldsInitParamObj[columnfield];
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
                                element.removeProp('overflow');
                                element.css('overflow-y', 'scroll');
                                return element[0].outerHTML;
                            };
                    var searchDateRenderer = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                        var cellValue = $("#searchResults").jqxGrid('getcellvalue', row, columnfield);
                        console.log("cellValue::" + cellValue);
                        if (cellValue != null && cellValue != '') {
                            var cellsformat = columnproperties['cellsformat'];
                            if (cellsformat != null && cellsformat != '') {

                            } else {
                                cellsformat = "dd-MM-yyyy HH:mm:ss";
                            }
                            var dateValue = $.jqx.dataFormat.formatdate(value, cellsformat, $("#searchResults").jqxGrid('gridlocalization'));
                            console.log("dateValue:::" + dateValue);
                            cellValue = dateValue;
                        }
                        var element = $(defaulthtml);
                        element.html(cellValue);
                        return element[0].outerHTML;
//                       return '<div style="overflow: hidden; text-overflow: ellipsis; padding-bottom: 2px; text-align: left; margin-right: 2px; margin-left: 4px; margin-top: 15px;">'+cellValue+'</div>';
                        //return cellValue;
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
                    var searchText = $("#result").val() != null ? $("#result").val() : "";
                    $("#colsArrayStr").val(JSON.stringify(gridResultObj['colsArray']));

                    $("#currentSmartSearchData").val(searchText);
                    $("#currentSearchData").val(JSON.stringify(paramsArray));
                    $("#currentSearchType").val(searchType);
                    $("#currentSearchReqType").val($("#floatingdxpAdavanceSearchOptions").val());
                    $("#currentSearchCatType").val(cattype);
                    var source =
                            {
                                type: 'POST',
//                                                async: false,
                                datatype: "json",
                                datafields: dataFeilds,
                                data: {
                                    gridId: gridResultObj['gridId'],
                                    colsArray: JSON.stringify(gridResultObj['colsArray']),
                                    tableName: gridResultObj['tableName'],
                                    searchType: searchType,
                                    reqType: reqType,
                                    searchText: searchText,
                                    'langID': langID,
                                    searchId: searchId,
                                    'cattype': cattype,
                                    'fuzzyFlag': $("#isFuzzy").is(':checked'),
                                    paramsArray: JSON.stringify(paramsArray)

                                },
                                url: 'genericSearchGridResults',
                                cache: false,
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
                                downloadComplete: function (data, status, xhr) {
                                    return data;
                                },
                                beforeprocessing: function (data) {
                                    showLoader();
                                    stopLoader();

                                    if (data[0] != null) {
                                        //  alert(data.JSONObjectList[0].TotalRows);
                                        if (data[0].TotalRows != null) {
                                            source.totalrecords = data[0].TotalRows;
                                            if (isFirstTime) {
                                                isFirstTime = false;
                                                $("#search_count").attr('totalRecords', data[0].TotalRows.toLocaleString());
                                                $("#search_count").html("(" + (labelObject['Fetched'] != null ? labelObject['Fetched'] : 'Fetched') + " "
                                                        + $("#search_count").attr('totalRecords') + " "
                                                        + (labelObject['records in'] != null ? labelObject['records in'] : 'records in') + " "
                                                        + (new Date().getTime() - resultStartTime) / 1000 + " sec)");
                                            }
                                        } else {
                                            source.totalrecords = 0;
                                        }

                                        stopLoader();
                                    } else {
                                        $("#search_count").attr('totalRecords', 0);
                                        source.totalrecords = 0;
                                        if (isFirstTime) {
                                            isFirstTime = false;
                                            $("#search_count").html("(" + (labelObject['No record(s) found'] != null ? labelObject['No record(s) found'] : 'No record(s) found') + ")");
                                        }
                                        // $("#search_count").text("(No record(s) found)");
                                        stopLoader();
                                    }

                                },
                                sort: function ()
                                {
                                    $("#formPPRWidgetGrid").jqxGrid('updatebounddata', 'sort');
                                    try {
                                        $("#formPPRWidgetGrid").jqxGrid('clearselection');
                                    } catch (e) {
                                    }
                                    stopLoader();
                                },
                                filter: function () {

                                    $("#formPPRWidgetGrid").jqxGrid('updatebounddata', 'filter');
                                    try {
                                        $("#formPPRWidgetGrid").jqxGrid('clearselection');
                                    } catch (e) {
                                    }
                                    stopLoader();
                                }


                            };
                    var dataAdapter = new $.jqx.dataAdapter(source);
                    gridPropObj.source = dataAdapter;
                    gridPropObj.showtoolbar = true;
                    gridPropObj.rowdetails = true;
                    gridPropObj.rendergridrows = function () {
                        return dataAdapter.records;
                    };
                    var renderToolbar = gridPropObj.renderToolbar;
                    gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');
                    $("#currentGridpageNum").val(0);
                    $('#formPPRWidgetGrid').jqxGrid(gridPropObj);
                    $('#formPPRWidgetGrid').parent().css("padding-top", "3px", "important");
                    $('#formPPRWidgetGrid').parent().css("padding-bottom", "3px", "important");
                    $('#formPPRWidgetGrid').jqxGrid('showtoolbar', true);
//                    $('#' + gridResultObj['gridId']).jqxGrid('pagermode', 'simple');
                    $('#formPPRWidgetGrid').on('cellclick', function (event) {
//                                    $('#searchResults').bind('cellclick', function (event) {
                        var panelId = $("#panelId").val();
                        console.log(panelId + ":::event.args.column.datafield:::::" + event.args.column.datafield);
                        navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', hrefObj['hrefGridId'], panelId, 'Search View');
                        // navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId']);
                    });
                    $("#formPPRWidgetGrid").on('celldoubleclick', function (event) {
                        var args = event.args;
                        var dataField = args.datafield;
                        var dataField1 = args.text;
                        var rowIndex = args.rowindex;
                        var cellValue = args.value;
                        var isEditable = $('#formPPRWidgetGrid').jqxGrid('getcolumnproperty', dataField, 'editable');
                        console.log("isEditable::::" + isEditable)
                        if (!isEditable) {
                            var column = $("#formPPRWidgetGrid").jqxGrid('getcolumn', event.args.datafield).text;
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
                    $('#formPPRWidgetGrid').on("pagechanged", function (event) {
                        var oldPageNum = $("#currentGridpageNum").val();
                        console.log("oldPageNum:::" + oldPageNum + "::::Current Page Num:::" + event.args.pagenum);
                        // event arguments.
                        var args = event.args;
                        // page number.
                        var pagenum = args.pagenum;
                        // page size.
                        var pagesize = args.pagesize;
                        if (parseInt(event.args.pagenum) != parseInt(oldPageNum)) {
                            var selectedrowindexes = $('#formPPRWidgetGrid').jqxGrid('selectedrowindexes');
                            console.log("formPPRWidgetGrid:::selectedrowindexes:::" + selectedrowindexes);
                            try {
                                if (selectedrowindexes != null
                                        && selectedrowindexes.length != 0
                                        && selectedrowindexes[0] != -1) {
                                    $('#formPPRWidgetGrid').jqxGrid('clearselection');
                                }

                            } catch (e) {
                            }
                        }
                        $("#currentGridpageNum").val(event.args.pagenum);
                    });
                    $('#formPPRWidgetGrid').on("pagesizechanged", function (event) {
                        console.log("::pagesizechanged:::" + event.args.pagenum);
                        $("#currentGridpageNum").val(0);
                    });

                }// end if(gridPropObj != null)

            }
        },
        error: function (e) {
            stopLoader();
            console.log(e);
            sessionTimeout(e);
        }


    });
    //stopLoader();
    if (parseInt($("#accordion").attr("data-templateresults")) != 0) {
        showLoader();
        // fetchTemplateResults(searchType, paramsArray, cattype);
    }

}
function fetchPropertyValues(selectedrowid) {
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }
    var propertyid = $("#cb" + selectedrowid).attr('data-propertyid');
//    var classid = $("#SearchResult").attr("data-conceptid");
    var classid = $("#idxpDictionayFormHeaderName").attr("data-conceptid");

    var propertyUom = $("#propuom" + selectedrowid).val();
    var rowid = 0;
    var propertyValues = [];
    var propertyValObj = null;
    $("#dictionarytbl tbody tr").each(function () {
        if (($.trim($("#tb" + rowid).val()) != ""
                && $.trim($("#propuom" + rowid).val()) != "") && rowid != selectedrowid) {
            propertyValObj = new Object();
            propertyValObj.name = $.trim($(this).find('td:eq(0)').find('div').text());
            propertyValObj.value = $.trim($("#tb" + rowid).val());
            propertyValObj.uom = $("#propuom" + rowid).val();
            propertyValObj.id = $("#cb" + rowid).attr('data-propertyid');
            propertyValObj.valueOp = $("#dictddw" + rowid).val();
            propertyValues.push(propertyValObj);
        }
        ++rowid;
    });


    $.ajax({
        type: "GET",
        url: 'getPropertyValues',
        data: {
            propertyuom: propertyUom,
            conceptid: classid,
            propertyid: propertyid,
            propertyValues: JSON.stringify(propertyValues)
        },
        traditional: true, cache: false,
        success: function (response) {
            $("#valuesgridpopup").empty();
            $("#valuesgridpopup").append("<div id='valuesGrid'></div>");
            $("#valuesgridpopup").dialog({resizable: false,
                resizable: false,
                title: labelObject['Property Values'] != null ? labelObject['Property Values'] : 'Property Values',
                autoOpen: true,
                height: 'auto',
                width: "300",
                fluid: true,
                modal: true,
                open: function () {
                    $(this).closest(".ui-dialog").addClass("visionClassificationDialog");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                },
                beforeClose: function (event, ui)
                {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }

            });
            var source =
                    {
                        localdata: response,
                        datafields:
                                [
                                    {name: 'value', type: 'string'}
                                ],
                        datatype: "json"
                    };
            var adapter = new $.jqx.dataAdapter(source);
            $("#valuesGrid").jqxGrid(
                    {
                        width: '99%',
                        theme: 'energyblue',
                        source: adapter,
                        filterable: true,
                        enabletooltips: true,
                        showfilterrow: true,
                        height: '380',
                        columnsresize: true,
                        columnsreorder: true,
                        sortable: true,
                        ready: function () {

                            stopLoader();
                        },
                        columns: [
                            {text: labelObject['Value'] != null ? labelObject['Value'] : 'Value',
                                filtertype: 'input', hidden: false, width: '99%', editable: false, align: 'center', datafield: 'value', cellsalign: 'left'}
                        ]
                    });
            stopLoader();
            $("#valuesGrid").on('rowclick', function (event) {
                var args = event.args;
                var boundIndex = args.rowindex;
                var value = $('#valuesGrid').jqxGrid('getcellvalue', boundIndex, "value");
                console.log("value::" + value);
                $("#tb" + selectedrowid).val(value);
                $("#valuesgridpopup").empty();
                $("#valuesgridpopup").dialog('close');
            });
        },
        error: function (e) {
            console.log(e);
            stopLoader();
            sessionTimeout(e);
        }

    });
}
//voice analysis functions start
function speechToText(id, muteId, unmuteId, domain, domainlist, gridId) {

    $("#" + muteId).show();
    $("#" + unmuteId).hide();
    $("#SearchResult").css("font-size", "12px")
    $("#SearchResult").css("font-family", "inherit")

    var noteContent = '';
    var instructions = $("#speechStatus");
    const clearIcon = document.querySelector('.clearicon');
    const clearIcon2 = document.querySelector('.clear-icon');
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.continuous = true;
//    recognition.interimResults = true;

    recognition.lang = $(".languageSelectionBox").val();
    recognition.start();
    $("#" + id).val('Listening...')

    recognition.onresult = function (event) {


        var current = event.resultIndex;

        var transcript = event.results[current][0].transcript;

        noteContent += transcript;
        var searchText = noteContent.toLowerCase();
        $("#" + id).val(searchText);

        if (id == "templeteSearchResult") {
            voiceSearchSuggesations("intellisenseDiv", searchText, domain);
            clearIcon2.style.display = 'block';

        } else {
            voiceTextResults(searchText);
            clearIcon.style.display = 'block';
        }
//        speak("opening")
        recognition.stop();


    }

    document.querySelector("#" + muteId).onclick = () => {
        $("#" + muteId).hide();
        $("#" + unmuteId).show();
        $("#" + id).val('')
        recognition.stop();
    };
    recognition.onstart = function () {
        instructions.text('Voice recognition activated. Try speaking into the microphone.');
    }

    recognition.onspeechend = function () {
        $("#" + muteId).hide();
        $("#" + unmuteId).show();
        instructions.text('voice recognition turned  off.');
    }

    recognition.onerror = function (event) {
        if (event.error == 'no-speech') {
            $("#" + muteId).hide();
            $("#" + unmuteId).show();
            instructions.text('No speech was detected. Try again.');
        }
    }


}
function speak(text) {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);

}
function voiceTextResults(speechText) {
    let variableValues = {};
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getVoicesearchResults',
        data: {
            'speechText': speechText,

        },
        traditional: true,
        cache: false,
        success: function (response) {
            if (Object.keys(response).length !== 0) {
                speak("opening")
                var functionName = response['functionName'];
                var functionparams = response['functionParams'];
                var voiceMessage = response['voiceMessage'];
                var dataArray = functionparams.split(',');

                for (var i = 0; i < dataArray.length; i++) {

                    var variableName = 'variable_' + i;
                    var variableValue = dataArray[i].replace(/\s/g, "");
                    // Create individual variables dynamically
                    eval('var ' + variableName + ' = "' + variableValue + '";');
                    variableValues[variableName] = variableValue;
                }
                speak(voiceMessage);
                if (functionName != null && functionName != '' && functionName != undefined)
                {
                    let values = Object.values(variableValues);
                    window[functionName](...values);
                }
            } else {

                voiceSearchSuggesations("intellisense", speechText, "PRODUCT");

            }
        }

    });
}
function textSearchConfirmation(speechText) {
    var modalObj = {
        title: 'Confirmation',
        body: 'Do you want to search in google?',
    };
    var buttonArray = [
        {
            text: 'YES',
            click: function () {
                searchAPIResultsBasedonDesc("PRODUCT", "MRO", "MM_MANAGER", "MM_SAP_NEW_REG");
            },
            isCloseButton: true
        },
        {
            text: 'NO',
            click: function () {
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    createModal("dataDxpSplitterValue", modalObj);
    $(".modal-dialog").addClass("opacity-animate3");
}
function searchInGoogle(searchText) {
//    showLoader()
    let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;
    window.open(searchUrl, "_blank");
}
function voiceSearchSuggesations(id, userval, domainValue) {
    showLoader();
    $.ajax({
        type: "POST",
        url: "searchSuggestion",
        data: {
            'searchtext': userval,
            'domainValue': domainValue,
            'locale': 'en_US',
            'langID': '1007-1_LG-000001_1',
            'fuzzyFlag': 'true',
            'dxpAdavanceSearchOptions': "",
            'ActiveSearchFlag': 'Y'
        },
        success: function (response) {
            stopLoader();
            $("#filterDownArrowIconID").hide();
            $("#searchDxpSplitter").hide();
            if (response != null && response != '') {
                $("#" + id).html("");
                $("#" + id).show();
                var responseObj = JSON.parse(response);
                if (responseObj['flag']) {
                    //suggestion
                    $("#" + id).html(responseObj['suggestion']);
                    $("#intellisensebox").show();
                    $("#intellisenseboxId").show();
                    speak("opening" + userval)
                } else {
                    stopLoader();
                    if (responseObj['totalRecords'] == '0') {
                        $("#" + id).html("<div  class='ac-items' id='updateIntellisense_0'>No record's found</div>");
                        $("#intellisensebox").hide();
                        $("#intellisenseboxId").show();
                        textSearchConfirmation(userval)

                    } else {
                        stopLoader();
                        $("#" + id).html("<div  class='ac-items' id='updateIntellisense_0'>No record's found</div>");
                        $("#intellisensebox").hide();
                        $("#intellisenseboxId").show();
                        speak("No results found ");
                        textSearchConfirmation(userval)
                    }
                }
            } else {
                stopLoader();
                $("#intellisense").html("<div  class='ac-items' id='updateIntellisense_0'>No record's found</div>");
                $("#intellisenseboxId").show();
                $("#intellisensebox").hide();
            }
            stopLoader();
        },
        error: function (e) {
            console.log(e);
            stopLoader();
            showLoader();
            sessionTimeout(e);
        }

    });
}
//voice analysis functions end
function showsearchbrowsepopup(reqtype, templateFlag, templateGrid) {

    $("#importreccount").attr("data-isSearch", "N");
    $("#importreccount").html("");
    var importButton = '<input type="button" value="Upload" class="visionFileUpload" onclick="importSearch()" width="4px">'
            + '<input id="browsecols" name="importFile" class="upload" type="file" value="Import file" style="display:none;">'
            + '<input type="hidden" id="browsecolsHidden" value="">'
            + '<input type="hidden" id="dlovcolname" value="">'
            + '<input type="hidden" id="typeSelectStr" value="">'
            + '<div id="importreccount" data-isSearch="" ></div>';
    $("#uploadButtonDiv").html(importButton);

    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }
    var selectBoxOptions = "";
    if (reqtype == 'PRA') {
        var id = 'pprsearch';
    } else {
        id = 'paramsearch';
    }
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    if (!fioriThemeCheck) {
        $("#" + id + " tbody tr").each(function () {
            if ($(this).css('display') != 'none') {
                var dataColumnName = $(this).attr('data-colname');
                var i = $("#" + dataColumnName).attr('data-columnindex');
                var typeSelectStr = $("#typeSelectStr" + i).val();
                var dlovcolname = $("#typeSelectStr" + i).attr("data-dlovcolname");
                console.log(dataColumnName + "::::::" + typeSelectStr);
                selectBoxOptions += "<option value='" + $(this).attr('data-colname') + "' data-typeSelectStr='" + typeSelectStr + "' data-dlovcolname='" + dlovcolname + "'  >" + $(this).children('td').eq(0).text() + "</option>";
            }
        });
    }
    else{
         $("#" + id + ".ui5gridfilter-container-form .ui5gridfilter-item").each(function () {
            if ($(this).css('display') != 'none') {
                var dataColumnName = $(this).attr('data-colname');
                var i = $("#" + dataColumnName).attr('data-columnindex');
                var typeSelectStr = $("#typeSelectStr" + i).val();
                var dlovcolname = $("#typeSelectStr" + i).attr("data-dlovcolname");
                console.log(dataColumnName + "::::::" + typeSelectStr);
                selectBoxOptions += "<option value='" + $(this).attr('data-colname') + "' data-typeSelectStr='" + typeSelectStr + "' data-dlovcolname='" + dlovcolname + "'  >" + $(this).children('label').eq(0).text() + "</option>";
            }
        });
    }
    $("#browsecolsddw").html(selectBoxOptions);
    $("#importsearchcriteria").show();
    $("#visionImportErrorMsg").show();
    $("#importsearchcriteria").dialog({resizable: false,
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

                    var selectedColumn = $("#browsecolsHidden").val();
                    var typeSelectStr = $("#typeSelectStr").val();
                    var dlovcolname = $("#dlovcolname").val();
                    var importreccount = $("#importreccount").attr("data-issearch");

                    if (importreccount == 'Y') {
                        var paramArray = [];
                        var paramObj = {};
                        paramObj.datatype = "string";
                        paramObj.column = selectedColumn;
                        paramObj.rangeflag = "N";
                        paramObj.minvalue = "";
                        paramObj.maxvalue = "";
                        paramObj.value = "";
                        paramObj.dlovcolname = dlovcolname;
                        paramObj.typeSelectStr = typeSelectStr;

                        paramObj.staged = "Y";
//                        paramObj.operator = "IN";
                        paramArray.push(paramObj);

                        var i = 0;
                        console.log("getParamSearchResults::::" + reqType);
                        var reqType = "";
                        var tableId = "paramsearch";
                        if (reqType == 'ppr') {
                            tableId = "pprsearch";
                        } else if (reqType == 'spec') {
                            tableId = "specsearch";
                        }

                        if (selectedColumn != null && selectedColumn != '' && selectedColumn != 'LOCALE') {
                            var localeCount = 0;
                            $("#" + tableId + " tbody tr").each(function () {
                                var isAllow = false;
                                var paramObj = {};
                                var colname = $(this).attr('data-colname');
                                if (colname != null && colname == 'LOCALE') {
                                    localeCount = 1;
                                    var tbmin = $("#" + reqType + "tbmin" + i).val();
                                    var tbmax = $("#" + reqType + "tbmax" + i).val();
                                    var value = $("#" + reqType + "tb" + i).val();
                                    var andOrOperator = $("#" + reqType + "andOrOperator" + i).val();
                                    var typeSelectStr = $("#" + reqType + "typeSelectStr" + i).val();
                                    var dlovcolname = $("#" + reqType + "typeSelectStr" + i).attr("data-dlovcolname");
                                    console.log("colname::" + colname + "::value::" + value + "::tbmin::" + tbmin + ":::tbmax:::" + tbmax);
                                    if (value != null && value != '') {
                                        isAllow = true;
                                    } else if (tbmin != null && tbmax != null && tbmin != '' && tbmax != '') {
                                        isAllow = true;
                                    }
                                    var type = $("#" + reqType + "tb" + i).attr("type");
                                    if (type != null && type == 'checkbox') {
                                        var textval = "N";
                                        if ($("#" + reqType + "tb" + i).is(':checked')) {
                                            isAllow = true;
                                        } else {
                                            isAllow = false;
                                        }
                                    }
                                    console.log("isAllow::::" + isAllow);
                                    if (isAllow) {
                                        paramObj.datatype = $.trim($(this).attr('data-type'));
                                        paramObj.column = $.trim($(this).attr('data-colname'));
                                        paramObj.rangeflag = $.trim($(this).attr('data-range')) == 'Y' ? 'Y' : 'N';
                                        paramObj.minvalue = $.trim($("#" + reqType + "tbmin" + i).val());
                                        paramObj.maxvalue = $.trim($("#" + reqType + "tbmax" + i).val());
                                        var type = $("#" + reqType + "tb" + i).attr("type");
                                        if (type != null && type == 'checkbox') {
                                            var textval = "N";
                                            if ($("#" + reqType + "tb" + i).is(':checked')) {
                                                textval = "Y";
                                            } else {
                                                textval = "N";
                                            }
                                            paramObj.value = textval;
                                        } else {
                                            paramObj.value = $.trim($("#" + reqType + "tb" + i).val());
                                        }
                                        paramObj.operator = $("#" + reqType + "ddw" + i).val();
                                        paramObj.symbol = $.trim($("#" + reqType + "ddw" + i).find('option:selected').text());
                                        paramObj.staged = $("#" + reqType + "ddw" + i).attr('data-staged') == "Y" ? "Y" : "N";
                                        paramObj.andOrOperator = andOrOperator;
                                        paramObj.typeSelectStr = typeSelectStr;
                                        paramObj.dlovcolname = dlovcolname;
                                        paramObj.valuestripflag = $("#" + colname).attr("data-valuestripflag");
                                        paramObj.valuetrimcharflag = $("#" + colname).attr("data-valuetrimcharflag");
                                        paramArray.push(paramObj);
                                    }
                                    ++i;
                                }

                            });
                            if (localeCount == 0) {
                                paramObj = {};
                                paramObj.datatype = "string";
                                paramObj.column = "LOCALE";
                                paramObj.rangeflag = "N";
                                paramObj.minvalue = "";
                                paramObj.maxvalue = "";
                                paramObj.value = $("#sessionLocale").val();
                                paramObj.symbol = "=";
                                paramObj.operator = "EQUALS";
                                paramObj.staged = "N";
                                paramObj.andOrOperator = "AND";
                                paramObj.typeSelectStr = "";
                                paramObj.dlovcolname = "";
                                paramObj.valuestripflag = "N";
                                paramObj.valuetrimcharflag = "N";
                                paramArray.push(paramObj);
                            }
                        }
                        searchResults("P", '', paramArray, "", "", templateFlag, templateGrid);
                        if (templateFlag == 'N') {
                            searchResults(reqtype, '', paramArray, '', "searchName", templateFlag, templateGrid);
                        } else {
                            let mypromise = new Promise(resolve => {
                                getsearchitem(templateFlag, '', '', '', '', reqtype, templateGrid, paramArray, "");

                            });
                        }

                    }
                    $("#importsearchcriteria").hide();
                    $("#importsearchcriteria").dialog('close');

                }
            },
            {
                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                click: function () {
                    $("#importsearchcriteria").hide();
                    $("#importsearchcriteria").dialog('close');

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
function importSearch() {

    var selectedImportColumn = $("#browsecolsddw").val();
    $("#importreccount").attr("data-isSearch", "N");
    var selectedColumn = $("#browsecolsddw").val();
    $("#browsecolsHidden").val(selectedImportColumn);
    $("#typeSelectStr").val($("#browsecolsddw").find(':selected').attr("data-typeselectstr"));
    $("#dlovcolname").val($("#browsecolsddw").find(':selected').attr("data-dlovcolname"));
    console.log("importParamSearch::::" + selectedColumn);
    var params = {
        selectedColumn: selectedColumn
    };
    $("#browsecols").ajaxfileupload({
        'action': "importParamSearch",
        params: params,
        valid_extensions: ['xls', 'xlsx', 'XLS', 'XLSX', 'PNG'],
        'onComplete': function (response) {
            console.log("response:::" + JSON.stringify(response));
            if (response != null && response['message'] != '') {
                $("#importreccount").attr("data-isSearch", "Y");
                $("#importreccount").html(response['message']);
            }
            stopLoader();
        },
        'onStart': function () {
            showLoader();
        }
    });
    $("#browsecols").click();
}
function updatePersonalization(id, searchType, searchId) {
    var searchName = $("#" + id).val();
    $("#searchId").val(searchId);
    $("#settings_panel").hide();
    console.log(":::searchName::::" + searchName);
    if (searchName == 'Select One') {
        $("#savedSearchName").val("");
    } else {
        $("#savedSearchName").val(searchName);
    }
    showLoader();
    $.ajax({
        type: "POST",
        url: 'getSavedSearchData',
        data: {
            'searchType': searchType,
            searchName: searchName
        },
        traditional: true,
        cache: false,
        success: function (response) {
            console.log("response:2490:::" + response);
            if (response != null && response != '') {

                var savedSearchData = JSON.parse(response);
                if (savedSearchData != null) {
                    if (savedSearchData['personalizationData'] != null && savedSearchData['personalizationData'] != "" && savedSearchData['personalizationData'] != undefined) {
                        $("#personalize_fields").html(savedSearchData['personalizationData']);
                    }
                    getSavedParamForm(searchId, 'paramsearch', searchType, searchName);
                }

            }
            stopLoader();
        },
        error: function (e) {
            console.log(e);
            stopLoader();
            sessionTimeout(e);
        }

    });
}
function deleteSearchConfirm(id, searchType) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }
    $.ajax({
        type: "POST",
        url: 'deleteSavedSearchData',
        data: {
            'searchName': $("#" + id).val(),
            'searchType': searchType
        },
        traditional: true, cache: false,
        success: function (response) {
            console.log('Response::' + JSON.stringify(response));
            $("#savedSearchName").val("");
            var dialogSplitMessage = dialogSplitIconText(response, "Y");
            $("#dialog1").html(dialogSplitMessage);
            $("#dialog1").dialog({resizable: false,
                title: labelObject['Search Criteria'] != null ? labelObject['Search Criteria'] : 'Search Criteria',
                modal: true,
                height: 'auto',
                minHeight: 'auto',
                width: 300,
                fluid: true,
                buttons: {
                    Ok: function () {
                        $(this).empty();
                        $(this).dialog('close');
                        getSavedParamForm($("#searchId").val(), 'paramsearch', searchType, "");
                        getPersonalizationDataOpt($("#searchId").val(), searchType);
                    }
                }
            });
        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}
function getSavedParamForm(searchId, divId, reqType, searchName) {
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    $.ajax({
        type: "POST",
        url: 'getParamsavedSearchForm',
        data: {
            'searchId': searchId,
            reqType: reqType,
            searchName: searchName,
            fioriThemeCheck: fioriThemeCheck,
        },
        traditional: true,
        cache: false,
        success: function (response) {
            if (response != null && response != '') {
                console.log("divId:::" + divId);
                var responseObj = JSON.parse(response);
//                console.log("jsDateItems:::" + responseObj['formString']);
                $("#" + divId).html(responseObj['formString']);
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
function splitterSearch(event, tabId, roleId) {
//    $("#dxp2FirstDiv").html(""); 
    showLoader();
    var e = event || window.event;
    var ajaxTime = "";
    var totalTime = "";
    var lastKey = event.key;
//    var userval = $('#secondSplitterSearchId').val();
    var userval = event.target.value;
    if (userval == undefined) {
        userval = event.target.previousSibling.value;
    }
    delay(function () {
        $.ajax({
            type: "POST",
            url: 'materialWorkFlow',
            data: {
                'userval': userval,
                'tabId': tabId,
                'roleId': roleId
            },
            traditional: true,
            cache: false,
            success: function (response) {
                if (response != null && response != '') {
                    stopLoader();
                    let element = $(event.target).closest('.dxpSplitterListDiv').children().last();
                    if (userval != null && userval != undefined) {
                        $("#dxpMenus").hide();
                        $("#dxpGridContent").hide();
                        $("#dxpTabs").show();
                        $("#dxp2TabsWithGrid").show();
                        $("#dxp2TabsWithGridContent").show();
                        $("#" + element[0].id).empty();
                        $("#" + element[0].id).html(response);
                        $("#dxp2FirstDiv").css("visibility", "visible", "!important");
                        $('#dxp2MainSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 270}]});
                    } else {
                        $("#dxpMenus").hide();
                        $("#dxpGridContent").hide();
                        $("#dxpTabs").show();
                        $("#dxp2TabsWithGrid").show();
                        $("#dxp2TabsWithGridContent").show();
                        $("#" + element[0].id).empty();
                        $("#" + element[0].id).html(response);
                        $("#dxp2FirstDiv").css("visibility", "visible", "!important");
                        $('#dxp2MainSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 270}]});
                    }


                }
                stopLoader();
            },
            error: function (e) {
                console.log(e);
                // stopLoader();
                sessionTimeout(e);
            }

        });
    }, 500);
}
//DEcomposition tree end
function indexManager(indexId) {
//    $(".searchResultCardViewMainSection").hide();
    $("#showdomainBasedCards").hide();
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    $.ajax({
        datatype: "html",
        type: "POST",
        url: 'indexManager',
        data: {
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
//            $("#dxpClusterContent").show();
            $("#dxpClusterContent").html(response);
            if (fioriThemeCheck) {
                $('.dxpSplitterTabsContent').hide();
                $('#dxpHomeContent').show();
                $("#dxpClusterContent").show();
            } else {
                $("#dxpClusterContent").show();
            }
        }
    });

}
function refreshIndex() {
    // startAjax();
    var indexManagerStr = "<div>"
            + "<div style='float:left;'><input type=\"radio\" name=\"indexType\" value=\"All\" checked>Re-Build All Indexes</div><br>"
            + "<div style='float:left;'><input type=\"radio\" name=\"indexType\" value=\"Create Date\">From Date:<input type=\"text\" name=\"fromDate\" id=\"fromDate\" value=\"\"><div id='dateError' style='display:none;color:red;'>Select From Date</div></div>"
            + "</div>";

    $("#modalDailogDiv").html(indexManagerStr);
    $("#fromDate").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy",
        showOn: "button",
        buttonImage: 'images/iDXPUI5Calendar.svg',
        buttonImageOnly: true
    });
    $("#modalDailogDiv").dialog({resizable: false,
        title: 'Index Manager',
        modal: true,
        height: 150,
        width: 300,
        fluid: true,
        buttons: {
            Ok: function () {
                var selectType = $("input[name='indexType']:checked").val();
                var selectDate = $("#fromDate").val();
                if (selectType != null && selectType == 'Create Date') {
                    if (selectDate != null && selectDate != '') {
                        $("#dateError").hide();
                        $("#modalDailogDiv").html("");
                        $("#modalDailogDiv").empty();
                        $("#modalDailogDiv").dialog('close');
                        processIndexing(selectType, selectDate);
                    } else {
                        $("#dateError").show();
                    }
                } else {
                    $("#modalDailogDiv").html("");
                    $("#modalDailogDiv").empty();
                    $("#modalDailogDiv").dialog('close');
                    processIndexing(selectType, selectDate);
                }

            }
        }, open: function () {
            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog");
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
function processIndexing(indexType, selectDate) {

    var processId = Array.from({length: 32}, () => Math.floor(Math.random() * 16).toString(16)).join('');
    indexLogFile(processId);
    //$("#ajaxProgresss").show();
    $.ajax({
        url: 'purgeIndexes',
        type: 'post',
        async: true,
        data: {
            'searchview': $("input[name='searchoption']:checked").val(),
            indexType: indexType,
            selectDate: selectDate,
            processId: processId
        },
        success: function (result) {
            //     endAjax();
            alert("result::" + result);
            //$("#ajaxProgresss").hide();
//            if (result == "Success") {
//                alert("Entered Success");
//                $("#modalDailogDiv1").html("");
//                $("#modalDailogDiv1").append("<div style='display:block;margin-bottom: 1%;'>"
//                        + "Refreshed Indexes Successfully</div>");
//                $("#modalDailogDiv1").dialog({resizable: false,
//                    title: 'Index Manager',
//                    modal: true,
//                    height: 120,
//                    width: 300,
//                    fluid: true,
//                    buttons: {
//                        Ok: function () {
//                            $("#modalDailogDiv1").empty();
//                            $("#modalDailogDiv1").dialog('close');
//                        }
//                    }, open: function () {
//                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                        $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
//                        $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog");
//                        $(".visionHeaderMain").css("z-index", "999");
//                        $(".visionFooterMain").css("z-index", "999");
//                    },
//                    beforeClose: function (event, ui)
//                    {
//                        $(".visionHeaderMain").css("z-index", "99999");
//                        $(".visionFooterMain").css("z-index", "99999");
//                    }
//
//                });
//
//            } else if (result == "Failure") {
//                alert("Entered Failure");
//                $("#dialog1").html("");
//                $("#dialog1").append("<div style='display:block;margin-bottom: 1%;'>"
//                        + "Unable to refresh Indexes</div>");
////        $("#dialog1").append("<div style='display:block;margin-bottom: 1%;'>Review personalization info before saving the search</div>"
//                //                + "<input type='text' id='searchName' class='saveSrchinput jqx-widget-content jqx-widget-content-arctic jqx-input jqx-input-arctic jqx-widget jqx-widget-arctic jqx-rc-all jqx-rc-all-arctic' placeholder='Name your search'/>");
//                $("#dialog1").dialog({resizable: false,
//                    title: 'Index Manager',
//                    modal: true,
//                    height: 120,
//                    width: 300,
//                    fluid: true,
//                    buttons: {
//                        Ok: function () {
//                            $("#dialog1").empty();
//                            $("#dialog1").dialog('close');
//                        }
//                    }, open: function () {
//                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                        $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
//                        $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog");
//                        $(".visionHeaderMain").css("z-index", "999");
//                        $(".visionFooterMain").css("z-index", "999");
//                    },
//                    beforeClose: function (event, ui)
//                    {
//                        $(".visionHeaderMain").css("z-index", "99999");
//                        $(".visionFooterMain").css("z-index", "99999");
//                    }
//
//                });
//            }




        },
        error: function (err) {
            //   endAjax();
            sessionTimeout(err);
        }
    });
}
//function processIndexing(indexType, selectDate) {
//    $("#ajaxProgresss").show();
//    $.ajax({
//        url: 'purgeIndexes',
//        type: 'post',
//        data: {
//            'searchview': $("input[name='searchoption']:checked").val(),
//            indexType: indexType,
//            selectDate: selectDate
//        },
//        success: function (result) {
//            //     endAjax();
//            alert("result::" + result);
//            $("#ajaxProgresss").hide();
//            if (result == "Success") {
//                alert("Entered Success");
//                $("#modalDailogDiv1").html("");
//                $("#modalDailogDiv1").append("<div style='display:block;margin-bottom: 1%;'>"
//                        + "Refreshed Indexes Successfully</div>");
//                $("#modalDailogDiv1").dialog({resizable: false,
//                    title: 'Index Manager',
//                    modal: true,
//                    height: 120,
//                    width: 300,
//                    fluid: true,
//                    buttons: {
//                        Ok: function () {
//                            $("#modalDailogDiv1").empty();
//                            $("#modalDailogDiv1").dialog('close');
//                        }
//                    }, open: function () {
//                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                        $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
//                        $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog");
//                        $(".visionHeaderMain").css("z-index", "999");
//                        $(".visionFooterMain").css("z-index", "999");
//                    },
//                    beforeClose: function (event, ui)
//                    {
//                        $(".visionHeaderMain").css("z-index", "99999");
//                        $(".visionFooterMain").css("z-index", "99999");
//                    }
//
//                });
//
//            } else if (result == "Failure") {
//                alert("Entered Failure");
//                $("#dialog1").html("");
//                $("#dialog1").append("<div style='display:block;margin-bottom: 1%;'>"
//                        + "Unable to refresh Indexes</div>");
////        $("#dialog1").append("<div style='display:block;margin-bottom: 1%;'>Review personalization info before saving the search</div>"
//                //                + "<input type='text' id='searchName' class='saveSrchinput jqx-widget-content jqx-widget-content-arctic jqx-input jqx-input-arctic jqx-widget jqx-widget-arctic jqx-rc-all jqx-rc-all-arctic' placeholder='Name your search'/>");
//                $("#dialog1").dialog({resizable: false,
//                    title: 'Index Manager',
//                    modal: true,
//                    height: 120,
//                    width: 300,
//                    fluid: true,
//                    buttons: {
//                        Ok: function () {
//                            $("#dialog1").empty();
//                            $("#dialog1").dialog('close');
//                        }
//                    }, open: function () {
//                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                        $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
//                        $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog");
//                        $(".visionHeaderMain").css("z-index", "999");
//                        $(".visionFooterMain").css("z-index", "999");
//                    },
//                    beforeClose: function (event, ui)
//                    {
//                        $(".visionHeaderMain").css("z-index", "99999");
//                        $(".visionFooterMain").css("z-index", "99999");
//                    }
//
//                });
//            }
//
//
//
//
//        },
//        error: function (err) {
//            //   endAjax();
//            sessionTimeout(err);
//        }
//    });
//}
function DictionarySsearchResults(searchType, userval, domainValue, searchId, searchView, role, resultflag) {
//    var searchId = $("#accordion").attr("data-id");
    $(".voiceNavigator").show();
    $("#VisualizePageBody").hide();
//    $(".massSearchListItem").show();
//    $(".selectDropDown").hide();
//    $(".backbutton").hide();
    $(".voiceNavigator").show();
    $(".searchSettingIcon").show();
    $("#DXPlLanguageSelectionId").show();
    $("#showdomainBasedCards").html("");
    $("#intellisense").hide();
    $("#searchResultsCountId").hide();
    var isFirstTime = true;
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var searchText = $("#SearchResult").val();
    var locale = $("#localedd").find(':selected').data('code');
    if (locale != null && locale != '') {

    } else {
        locale = "";
    }
    var langID = $("#localedd").val() != null ? $("#localedd").val() : "";

    $('#search_count').text("");
    var resultStartTime = new Date().getTime();
    $.ajax({
        type: "POST",
        url: 'genericSearchGrid',
        data: {
            'searchType': searchType,
            'langID': langID,
//            'langID': $("#localedd").val(),
            'locale': locale,
            searchId: searchId,
            searchView: searchView,
            role: role
        },
        traditional: true,
        cache: false,
        success: function (gridResultObj) {
//            showLoader();
            if (gridResultObj != null) {
                $("#accordion").accordion({active: parseInt($("#accordion").attr("data-searchresults"))});
//                $("#accordion").accordion({active: 4});
                try {
                    $("#searchResults").jqxGrid("destroy");
                } catch (e) {
                }

                if (resultflag != null && resultflag == 'Y') {
                    $("#dxp1Seconddiv").html("<div id='searchResults'></div>");
                } else if (searchType != null && searchType == 'D') {
                    $("#dxp1Seconddiv").html("<div id='searchResults'></div>");
                } else {
                    if (domainValue.toUpperCase() == 'ALL') {
                        $("#dxpGridContent").html("<div id='searchResults'></div>");
                    } else {
                        $("#dxpGridContent").html("<div id='searchResults'></div>");
                    }
                    showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', 'View Data', 'N');

                }
                var hrefObj = {}; //hrefObj
                hrefObj = gridResultObj['hrefObj'];
                $("#hrefColumn").val(hrefObj['hrefColumn'] != null ? hrefObj['hrefColumn'] : "");
//                        $("#hrefColumn").val(hrefObj['hrefColumn']);
                $("#linkedColumns").val(hrefObj['linkedColumns']);
                $("#stripValue").val(hrefObj['stripValue']);
                $("#imageColumn").val(hrefObj['imageColumn']);
                $("#imageTable").val(hrefObj['imageTable']);
                $("#imageTableColumn").val(hrefObj['imageTableColumn']);
                $("#hrefGridId").val(hrefObj['hrefGridId']);
                var hiddenObj = gridResultObj['hiddenObj'];
                if (hiddenObj != null) {
                    $("#hiddenObj").val(JSON.stringify(hiddenObj));
                }
                var searchButtonObj = gridResultObj['searchButtonObj'];
                if (searchButtonObj != null) {
                    $("#searchButtonObj").val(JSON.stringify(searchButtonObj));
                }
                var gridInitParamObj = {}; //gridInitParamObj
                gridInitParamObj = gridResultObj['gridInitParamObj'];
                if (gridInitParamObj['uuu_smartSearchexportRangeCount'] != null && gridInitParamObj['uuu_smartSearchexportRangeCount'] != '' && (searchType == "S" || searchType == "s")) {
                    $("#ssExportCount").val(gridInitParamObj['uuu_smartSearchexportRangeCount']);
                } else {
                    if (gridInitParamObj['uuu_exportRangeCount'] != null && gridInitParamObj['uuu_exportRangeCount'] != '') {
                        $("#ssExportCount").val(gridInitParamObj['uuu_exportRangeCount']);
                    }
                }

                //searchButtonObj
                //  alert("hrefObj:::::"+JSON.stringify(hrefObj));
                if (gridResultObj != null && gridResultObj.datafields) {
                }
                var dataFeilds = gridResultObj.datafields;
                var hrefObj = gridResultObj.hrefObj;
                var localData = gridResultObj.data;
                var formId = gridResultObj.formId;
                var panelId = gridResultObj.panelId;
                var gridOperation = gridResultObj.gridOperation;
                //////////////////console.log("gridOperation:::"+gridOperation);

                ////////////////////console.log("formId::::::"+formId);
                $('#formId').val(formId);
                $('#panelId').val(panelId);
                var gridPropObj = {};
                gridPropObj = gridResultObj.gridPropObj;
                var hiddenObj = gridResultObj['hiddenObj'];
                if (hiddenObj != null) {
                    $("#hiddenObj").val(JSON.stringify(hiddenObj));
                }
                var fieldsInitParamObj = gridResultObj['fieldsInitParamObj'];
                if (fieldsInitParamObj != null) {
                    $("#fieldsInitParamObjStr").val(JSON.stringify(fieldsInitParamObj));
                }


                if (gridPropObj != null) {
                    fieldsArray.length = 0;
                    fieldsArray = gridResultObj.columns;
                    gridPropObj.columns = gridResultObj.columns;

                    var headerTooltipRenderer = function (element) {
                        $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
                            position: 'bottom-right',
                            showArrow: false, content: $(element).text()});
                    }

                    var renderToolbar = gridPropObj.renderToolbar;
                    // console.log("renderToolbar::::"+renderToolbar);
                    //  alert("renderToolbar:::"+renderToolbar);
                    gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');
                    //      var defaultTabName = $("#defaultTabName").val();

                    var descrenderListWise = function (row, columnfield, value, defaulthtml, columnproperties) {

                        return '<div class="jqx-grid-cell-left-align" style="white-space: pre-line;">' + value + '</div>';
                    };


                    var coldataWarpText = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var colwidth = $("#searchResults").jqxGrid('getcolumnproperty', columnfield, 'width');
                        var scrollPosition = $("#searchResults").jqxGrid('scrollposition');
                        $('#idsearchwraptempContainerdiv').css("width", colwidth);
                        $('#idsearchwraptempContainerdiv').html(value);
                        var textHeight = $("#idsearchwraptempContainerdiv").outerHeight(true);
                        var textHeight1 = textHeight / 1.5;
                        try {
                            $('#idsearchwraptempContainerdiv').html("");
                        } catch (w) {
                            $('#idsearchwraptempContainerdiv').html("");
                        }
                        var gridrowsheight1 = $("#searchResults").jqxGrid('getrowheight', row);
                        var gridrowsheight = $("#searchResults").jqxGrid('rowsheight');
                        if (gridrowsheight1 != null && gridrowsheight1 != ''
                                && gridrowsheight1 != 'undefined'
                                && gridrowsheight1 != undefined
                                ) {

                        } else {
                            gridrowsheight1 = gridrowsheight;
                        }

                        if (textHeight1 > gridrowsheight1) {
                            $("#searchResults").jqxGrid('setrowheight', row, textHeight / 1.5);
                        }
                        $("#searchResults").jqxGrid('scrolloffset', scrollPosition.top, scrollPosition.left);

                        var uuu_columnstyle = "white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;";
                        var divClass = "jqx-grid-cell-left-align";
                        if (fieldsInitParamObj != null && !jQuery.isEmptyObject(fieldsInitParamObj)) {
                            var selectedColumnInitParamObj = fieldsInitParamObj[columnfield];
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
                                element.removeProp('overflow');
                                element.css('overflow-y', 'scroll');
                                return element[0].outerHTML;
                            };
                    var searchDateRenderer = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                        var cellValue = $("#searchResults").jqxGrid('getcellvalue', row, columnfield);
                        console.log("cellValue::" + cellValue);
                        if (cellValue != null && cellValue != '') {
                            var cellsformat = columnproperties['cellsformat'];
                            if (cellsformat != null && cellsformat != '') {

                            } else {
                                cellsformat = "dd-MM-yyyy HH:mm:ss";
                            }
                            var dateValue = $.jqx.dataFormat.formatdate(value, cellsformat, $("#searchResults").jqxGrid('gridlocalization'));
                            console.log("dateValue:::" + dateValue);
                            cellValue = dateValue;
                        }
                        var element = $(defaulthtml);
                        element.html(cellValue);
                        return element[0].outerHTML;
//                       return '<div style="overflow: hidden; text-overflow: ellipsis; padding-bottom: 2px; text-align: left; margin-right: 2px; margin-left: 4px; margin-top: 15px;">'+cellValue+'</div>';
                        //return cellValue;
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
                    var searchText = $("#result").val() != null ? $("#result").val() : "";
                    $("#colsArrayStr").val(JSON.stringify(gridResultObj['colsArray']));

                    $("#currentSmartSearchData").val(userval);
//                    $("#currentSearchData").val(JSON.stringify(paramsArray));
                    $("#currentSearchType").val(searchType);
//                    $("#currentSearchReqType").val(reqType);
//                    $("#currentSearchCatType").val(cattype);
                    var source =
                            {
                                type: 'POST',
//                                                async: false,
                                datatype: "json",
                                datafields: dataFeilds,
                                data: {
                                    gridId: gridResultObj['gridId'],
                                    colsArray: JSON.stringify(gridResultObj['colsArray']),
                                    tableName: gridResultObj['tableName'],
                                    searchType: searchType,
                                    searchText: $("#SearchResult").val(),
                                    searchId: searchId,
                                    searchView: searchView,
                                    role: role
                                },
                                url: 'DictionarySearchGridResults',
                                cache: false,
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
                                downloadComplete: function (data, status, xhr) {


                                    return data;
                                },
                                beforeprocessing: function (data) {
                                    showLoader();
                                    if (data[0] != null) {
                                        //  alert(data.JSONObjectList[0].TotalRows);
                                        if (data[0].TotalRows != null) {
                                            source.totalrecords = data[0].TotalRows;
                                            if (isFirstTime) {
                                                isFirstTime = false;
                                                $("#search_count").attr('totalRecords', data[0].TotalRows.toLocaleString());
                                                $("#search_count").html("(" + (labelObject['Fetched'] != null ? labelObject['Fetched'] : 'Fetched') + " "
                                                        + $("#search_count").attr('totalRecords') + " "
                                                        + (labelObject['records in'] != null ? labelObject['records in'] : 'records in') + " "
                                                        + (new Date().getTime() - resultStartTime) / 1000 + " sec)");
                                            }
                                        } else {
                                            source.totalrecords = 0;
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

                                        stopLoader();
                                    } else {
                                        $("#search_count").attr('totalRecords', 0);
                                        source.totalrecords = 0;
                                        if (isFirstTime) {
                                            isFirstTime = false;
                                            $("#search_count").html("(" + (labelObject['No record(s) found'] != null ? labelObject['No record(s) found'] : 'No record(s) found') + ")");
                                        }
                                        // $("#search_count").text("(No record(s) found)");
                                        stopLoader();
                                    }

                                },
                                sort: function ()
                                {
                                    $("#searchResults").jqxGrid('updatebounddata', 'sort');
                                    try {
                                        $("#searchResults").jqxGrid('clearselection');
                                    } catch (e) {
                                    }
                                    stopLoader();
                                },
                                filter: function () {

                                    $("#searchResults").jqxGrid('updatebounddata', 'filter');
                                    try {
                                        $("#searchResults").jqxGrid('clearselection');
                                    } catch (e) {
                                    }
                                    stopLoader();
                                }


                            };
                    var dataAdapter = new $.jqx.dataAdapter(source);
                    gridPropObj.source = dataAdapter;
                    gridPropObj.showtoolbar = true;
                    gridPropObj.rowdetails = false;
                    gridPropObj.rendergridrows = function () {
                        return dataAdapter.records;
                    };
                    var renderToolbar = gridPropObj.renderToolbar;
                    // console.log("renderToolbar::::"+renderToolbar);
                    //  alert("renderToolbar:::"+renderToolbar);
                    gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');

                    gridPropObj.rowdetailstemplate = {
                        rowdetails: "<div style='margin-top:0.2%' class='visionSearchRowDtl'></div>",
                        rowdetailsheight: 32
                    };
                    //autoheight
                    gridPropObj.autoheight = false;
                    //  showLoader();
                    gridPropObj.initrowdetails = function (index, parentElement, gridElement, datarecord) {
                        showLoader();
                        $.ajax({
                            type: "POST",
                            url: 'fetchRowDetails',
                            data: {
                                'selectedRowData': JSON.stringify(datarecord),
                                searchType: searchType
                            },
                            traditional: true,
                            cache: false,
                            success: function (response) {
                                if (response != null && response != '') {
                                    //row0searchResults
                                    //   var rowDetailDiv = "<div style='margin-top:0.2%' class='visionSearchRowDtl'></div>";
                                    // var rowId = "row"+index+"searchResults";
                                    console.log("response::Row Detail::" + response);
                                    var responseObj = JSON.parse(response);
                                    if (responseObj['rowDetailFlag']) {
                                        //   var dataCopyRecord = datarecord;
                                        var details = $($(parentElement).children()[0]);
                                        console.log("response::rowDetailMessage::" + responseObj['rowDetailMessage']);
                                        details.html('<div class="searchRowDtl">' + responseObj['rowDetailMessage'] + '<div>');
                                        var detailTypes = responseObj['detailTypes'];
                                        var initParamObj = responseObj['initParamObj'];

                                        $("#initParamObj").val(JSON.stringify(initParamObj));
                                        var detailTypesArray = detailTypes.split(",");
                                        var dataRecordConverted = {};
                                        //delete datarecord['ERPSFD'];
                                        //  delete datarecord['PURCHASE'];
                                        for (var key in datarecord) {
                                            if (key != null && key.indexOf("DATE") > -1) {

                                                dataRecordConverted[key] = datarecord[key];
                                            } else {
                                                if (datarecord[key] != null && datarecord[key] != '' && isNaN(datarecord[key])) {
                                                    datarecord[key] = datarecord[key].replace(/&/g, '&amp;');
                                                    datarecord[key] = datarecord[key].replace(/"/g, '&quot;');
                                                    datarecord[key] = datarecord[key].replace(/\\/g, '&bsol;');
                                                    //  .replace(/\\/g, '/');
                                                    for (var entitykey in HtmlEntities) {
                                                        try {
                                                            var entity = HtmlEntities[entitykey];
                                                            var regex = new RegExp(entitykey, 'g');
                                                            datarecord[key] = datarecord[key].replace(regex, entity);
                                                        } catch (e) {

                                                        }
                                                    }
                                                    dataRecordConverted[key] = datarecord[key];
                                                } else {
                                                    dataRecordConverted[key] = datarecord[key];
                                                }
                                            }

                                        }
                                        // var dataStr = JSON.stringify(dataRecordConverted);
                                        for (var i = 0; i < detailTypesArray.length; i++) {
                                            if (detailTypesArray[i] != null && detailTypesArray[i] != '') {
                                                var dataDetailObj = responseObj[detailTypesArray[i]];
                                                if (dataDetailObj != null) {
                                                    var functionName = "";
                                                    if (detailTypesArray[i] != 'COPY') {

                                                        functionName = "navigateToFormIcon('" + dataDetailObj['dataField'] + "','" + JSON.stringify(dataRecordConverted) + "','form','" + dataDetailObj['gridId'] + "','" + dataDetailObj['panelId'] + "','" + dataDetailObj['basketType'] + "','" + detailTypesArray[i] + "');";

//                                                        functionName = "navigateToFormIcon('" + dataDetailObj['dataField'] + "','" + JSON.stringify(dataRecordConverted) + "','form','" + dataDetailObj['gridId'] + "','" + dataDetailObj['panelId'] + "','" + dataDetailObj['basketType'] + "');";
                                                    } else {
                                                        $("#copyFormId").val(dataDetailObj['formId']);
                                                        dataRecordConverted['formId'] = dataDetailObj['formId'];
                                                        dataRecordConverted['gridId'] = dataDetailObj['gridId'];
                                                        dataRecordConverted['panelId'] = dataDetailObj['panelId'];
                                                        dataRecordConverted['baskettype'] = dataDetailObj['basketType'];
                                                        dataRecordConverted['objectid'] = dataDetailObj['formId'];
//                                                       
                                                        functionName = "copyItem('" + dataDetailObj['copyId'] + "','" + JSON.stringify(dataRecordConverted) + "');";
                                                        //copyFormId
                                                    }
                                                    $('#' + detailTypesArray[i] + '_' + datarecord['uid']).attr('onClick', functionName);
                                                    if (detailTypesArray[i] == 'SOW') {//onkar SOW
                                                        functionName = "sowDocDownload('" + JSON.stringify(dataRecordConverted) + "','" + dataDetailObj['basketType'] + "')";
                                                        $('#' + detailTypesArray[i] + '_' + datarecord['uid']).attr('onClick', functionName);
                                                    }
                                                }


                                            }

                                        }

                                    } else {
                                        $("#dialog").html(responseObj['rowDetailMessage']);
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
                                                $(".ui-dialog").addClass("copyIconDialog");
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
                                //  alert('Error: ' + JSON.stringify(e));
                                stopLoader();
                                console.log(e);
                                var meg = e.statusText;
                                var status = e.status;
                            }

                        });
                    };
                    $("#currentGridpageNum").val(0);
                    $('#searchResults').jqxGrid(gridPropObj);
                    $('#searchResults').parent().css("padding-top", "3px", "important");
                    $('#searchResults').parent().css("padding-bottom", "3px", "important");
                    $('#searchResults').jqxGrid('showtoolbar', true);
                    $('#searchResults').on('cellclick', function (event) {
//                                    $('#searchResults').bind('cellclick', function (event) {
                        var panelId = $("#panelId").val();
                        console.log(panelId + ":::event.args.column.datafield:::::" + event.args.column.datafield);
                        var args = event.args;
                        var rowBoundIndex = args.rowindex;
                        var columnindex = args.columnindex;
                        if (columnindex == 1) {
                            navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', hrefObj['hrefGridId'], panelId, 'Search View');
                            // navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId']);                  
                        }
                    });
                    $("#" + gridResultObj['gridId']).on("cellclick", function (event)
                    {
                        var args = event.args;
                        var rowBoundIndex = args.rowindex;
                        var columnindex = args.columnindex;
                        var dataField = args.datafield;
                        navigateToForm(event.args.column.datafield, $('#' + gridResultObj['gridId']).jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId'], event.args.rowindex);
                    });
                    $("#searchResults").on('celldoubleclick', function (event) {
                        var args = event.args;
                        var dataField = args.datafield;
                        var dataField1 = args.text;
                        var rowIndex = args.rowindex;
                        var cellValue = args.value;
                        var isEditable = $('#searchResults').jqxGrid('getcolumnproperty', dataField, 'editable');
                        console.log("isEditable::::" + isEditable)
                        if (!isEditable) {
                            var column = $("#searchResults").jqxGrid('getcolumn', event.args.datafield).text;
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
                    $('#searchResults').on("pagechanged", function (event) {
                        var oldPageNum = $("#currentGridpageNum").val();
                        console.log("oldPageNum:::" + oldPageNum + "::::Current Page Num:::" + event.args.pagenum);
                        // event arguments.
                        var args = event.args;
                        // page number.
                        var pagenum = args.pagenum;
                        // page size.
                        var pagesize = args.pagesize;
                        if (parseInt(event.args.pagenum) != parseInt(oldPageNum)) {
                            var selectedrowindexes = $('#searchResults').jqxGrid('selectedrowindexes');
                            console.log("searchResults:::selectedrowindexes:::" + selectedrowindexes);
                            try {
                                if (selectedrowindexes != null
                                        && selectedrowindexes.length != 0
                                        && selectedrowindexes[0] != -1) {
                                    $('#searchResults').jqxGrid('clearselection');
                                }

                            } catch (e) {
                            }
                        }
                        $("#currentGridpageNum").val(event.args.pagenum);
                    });
                    $('#searchResults').on("pagesizechanged", function (event) {
                        console.log("::pagesizechanged:::" + event.args.pagenum);
                        $("#currentGridpageNum").val(0);
                    });
                }// end if(gridPropObj != null)
            }
        },
        error: function (e) {
            stopLoader();
            console.log(e);
            sessionTimeout(e);
        }


    });
    //stopLoader();
    if (parseInt($("#accordion").attr("data-templateresults")) != 0) {
        showLoader();
        // fetchTemplateResults(searchType, paramsArray, cattype);
    }

}
function fetchPropertyUoms(selectedrowid) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }
    showLoader();
    var rowid = 0;
    var propertyValues = [];
    var propertyValObj = null;
    var propertyid = $("#cb" + selectedrowid).attr('data-propertyid');
//    var classid = $("#SearchResult").attr("data-conceptid");
    var classid = $("#idxpDictionayFormHeaderName").attr("data-conceptid");
    var propertyUom = $("#propuom" + selectedrowid).val();
    var propertyvalue = $.trim($("#propval" + selectedrowid).val());
    $("#dictionarytbl tbody tr").each(function () {
        if (($.trim($("#tb" + rowid).val()) != "")) {
            propertyValObj = new Object();
            propertyValObj.name = $.trim($(this).find('td:eq(0)').find('div').text());
            propertyValObj.value = $.trim($("#tb" + rowid).val());
            propertyValObj.uom = $("#propuom" + rowid).val();
            propertyValObj.id = $("#cb" + rowid).attr('data-propertyid');
            propertyValObj.valueOp = $("#dictddw" + rowid).val();
            propertyValues.push(propertyValObj);
        }
        ++rowid;
    });

    propertyvalue = '';
    propertyValues = [];
    $.ajax({
        type: "GET",
        url: 'getUomsByProperty',
        data: {
            propertyval: propertyvalue,
            conceptid: classid,
            propertyid: propertyid,
            propertyValues: JSON.stringify(propertyValues)
        },
        traditional: true, cache: false,
        success: function (response) {
            //  alert('Success: ' + response);
            $("#uomgridpopup").empty();
            $("#uomgridpopup").append("<div id='uomsGrid'></div>");
            $("#uomgridpopup").dialog({resizable: false,
                resizable: false,
                title: labelObject['Property UOMs'] != null ? labelObject['Property UOMs'] : 'Property UOMs',
                autoOpen: true,
                height: 'auto',
                width: "350",
                fluid: true,
                modal: true,
                open: function () {
                    $(this).closest(".ui-dialog").addClass("visionSearchUOMDialog visionClassificationDialog");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                },
                beforeClose: function (event, ui)
                {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }

            });
            var source =
                    {
//                        localdata: JSON.parse(response),
                        localdata: response,
                        datafields:
                                [
                                    {name: 'uom', type: 'string'}
                                ],
                        datatype: "JSON"
                    };
            var adapter = new $.jqx.dataAdapter(source);
            $("#uomsGrid").jqxGrid(
                    {
                        width: '99%',
                        theme: 'energyblue',
                        source: adapter,
                        filterable: true,
                        enabletooltips: true,
                        showfilterrow: true,
                        height: '380',
                        columnsresize: true,
                        columnsreorder: true,
                        sortable: true,
                        ready: function () {

                            stopLoader();
                        },
                        columns: [
                            {text: labelObject['UoM'] != null ? labelObject['UoM'] : 'UoM', hidden: false, width: '99%', editable: false,
                                filtertype: 'input', align: 'center', datafield: 'uom', cellsalign: 'left'}
                        ]
                    });
            stopLoader();
            $("#uomsGrid").on('rowclick', function (event) {
                var args = event.args;
                var boundIndex = args.rowindex;
                var uomValue = $('#uomsGrid').jqxGrid('getcellvalue', boundIndex, "uom");
                console.log("uomValue::" + uomValue);
                $("#propuom" + selectedrowid).val(uomValue);
                $("#uomgridpopup").empty();
                $("#uomgridpopup").dialog('close');
            });
        },
        error: function (e) {
            console.log(e);
            stopLoader();
            sessionTimeout(e);
        }

    });
}
function searchResults(searchType, reqType, paramsArray, cattype, searchName, templateFlag, templateGrid) {
    showLoader();
    var searchId = $("#searchId").val();
    $("#dxp1Seconddiv").html("");
    var isFirstTime = true;
    showLoader();
//    $('.accordion').remove();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
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
    try {
        $("#searchResultsParamsData").attr("data-searchflag", "Y");
        $("#searchResultsParamsData").attr("data-searchType", searchType);
        $("#searchResultsParamsData").attr("data-searchId", searchId);
        $("#searchResultsParamsData").attr("data-searchView", "");
        $("#searchResultsParamsData").attr("data-searchrole", "");
        $("#searchResultsParamsData").attr("data-searchresultflag", "");
        $("#searchResultsParamsData").attr("data-searchuserval", "");
        $("#searchResultsParamsData").attr("data-searchText", "");
        $("#searchResultsParamsData").attr("data-searchdomainValue", "");
        $("#searchResultsParamsData").attr("data-searchparamsArray", JSON.stringify(paramsArray));
        $("#searchResultsParamsData").attr("data-searchcattype", cattype);
        $("#searchResultsParamsData").attr("data-searchName", searchName);
        $("#searchResultsParamsData").attr("data-searchtemplateFlag", templateFlag);
        $("#searchResultsParamsData").attr("data-searchtemplateGrid", templateGrid);
    } catch (e) {

    }
    var locale = $("#localedd").find(':selected').data('code');
    if (locale != null && locale != '') {

    } else {
        locale = "";
    }
    var langID = $("#localedd").val() != null ? $("#localedd").val() : "";

    $('#search_count').text("");
    var resultStartTime = new Date().getTime();
    var pprDrpdwnDomain = $("#pprDomainType").val();
    $("#currentSearchData").val(JSON.stringify(paramsArray));
    var params = paramsArray[0];
    var searchText = params['value'];
    $("#result").val(searchText);
    searchName = searchText;
    $.ajax({
        type: "POST",
        url: 'genericSearchGrid',
        data: {
            'searchType': searchType,
            'langID': langID,
//            'langID': $("#localedd").val(),
            'locale': locale,
//            'locale': locale,
            searchName: searchName,
            searchId: searchId,
            pprDrpdwnDomain: pprDrpdwnDomain
        },
        traditional: true,
        cache: false,
        success: function (gridResultObj) {


//            $("#searchDxpSplitter").jqxSplitter({
//                width: '100%',
//                height: '100%',
//                orientation: 'vertical',
//                splitBarSize: 0,
//                panels: [{size: 400}]
//            });
            if (gridResultObj != null) {
                $("#accordion").accordion({active: parseInt($("#accordion").attr("data-searchresults"))});
                $("#accordion").accordion({active: 1});
                $(".accordion-Template-contents").hide();
                try {
                    $("#searchResults").jqxGrid("destroy");
//                    $("#searchResults").remove();
                } catch (e) {
                }
                if (templateFlag == 'Y' && searchType != 'PRA') {

//                    getsearchitem(templateFlag, '', '', '', '', searchType, templateGrid);
//                     $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
//                    try {
//                        $('#dxp1MainSplitter').jqxSplitter('expand');
//                    } catch (e) {
//
//                    }
                    $("#dxp1Seconddiv").html("<div id='searchResults'></div>");
                    $('#dxp1MainSplitter').on('collapsed', function (event) {
                        refreshGrid('searchResults');
                    });
                    $('#dxp1MainSplitter').on('expanded', function (event) {
                        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
                        $('#dxp1MainSplitter').jqxSplitter({resizable: false});
                        refreshGrid('searchResults');
                    });
//                    try {
//            $('#dxp1MainSplitter').on('resize', function (event) {
//            refreshGrid('searchResults');
//        });
//        } catch (e) {
//
//        }

                } else if (searchType == 'I') {
                    $("#visionClassficationSearchIds").html("<div id='searchResults' style='opacity:0.99 !important'></div>")

                } else {

                    $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
                    try {
                        $('#dxp1MainSplitter').jqxSplitter('expand');
                    } catch (e) {

                    }
                    $("#dxp1Seconddiv").html("<div id='searchResults'></div>");
                    try {
                        $('#dxp1MainSplitter').jqxSplitter('collapse');
                    } catch (e) {

                    }

                    $('#dxp1MainSplitter').on('collapsed', function (event) {
                        refreshGrid('searchResults');

                    });
                    $('#dxp1MainSplitter').on('expanded', function (event) {
                        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
                        $('#dxp1MainSplitter').jqxSplitter({resizable: false});
                        refreshGrid('searchResults');
                    });
//                    try {
//            $('#dxp1MainSplitter').on('resize', function (event) {
//            refreshGrid('searchResults');
//        });
//        } catch (e) {
//
//        }

                }
                //$("#searchresultsSplitter").show();
                //$("#searchresultsSplitter").html("<div id='searchResults'></div>");
//                $("#dxp1Seconddiv").html("<div id='searchResults'></div>");
                //need to assign all hidden fields like hrefColumn,linkedColumns,stripValue,imageColumn,imageTable,imageTableColumn
                var hrefObj = {}; //hrefObj
                hrefObj = gridResultObj['hrefObj'];
                try {
                    $("#hrefColumn").val(hrefObj['hrefColumn'] != null ? hrefObj['hrefColumn'] : "");
                } catch (e) {

                }

//                        $("#hrefColumn").val(hrefObj['hrefColumn']);
                $("#linkedColumns").val(hrefObj['linkedColumns']);
                $("#stripValue").val(hrefObj['stripValue']);
                $("#imageColumn").val(hrefObj['imageColumn']);
                $("#imageTable").val(hrefObj['imageTable']);
                $("#imageTableColumn").val(hrefObj['imageTableColumn']);
                $("#hrefGridId").val(hrefObj['hrefGridId']);
                var hiddenObj = gridResultObj['hiddenObj'];
                if (hiddenObj != null) {
                    $("#hiddenObj").val(JSON.stringify(hiddenObj));
                }
                var searchButtonObj = gridResultObj['searchButtonObj'];
                if (searchButtonObj != null) {
                    $("#searchButtonObj").val(JSON.stringify(searchButtonObj));
                }
                var gridInitParamObj = {}; //gridInitParamObj
                gridInitParamObj = gridResultObj['gridInitParamObj'];
                if (gridInitParamObj != null && !jQuery.isEmptyObject(gridInitParamObj)) {
                    $("#searchResults").attr("data-gridinitparamobj", JSON.stringify(gridInitParamObj));
                }
                if (gridResultObj != null && !jQuery.isEmptyObject(gridResultObj)) {
                    $("#searchResults").attr("data-gridResultObj", JSON.stringify(gridResultObj));
                }

                if (gridInitParamObj['uuu_smartSearchexportRangeCount'] != null && gridInitParamObj['uuu_smartSearchexportRangeCount'] != '' && (searchType == "S" || searchType == "s")) {
                    $("#ssExportCount").val(gridInitParamObj['uuu_smartSearchexportRangeCount']);
                } else {
                    if (gridInitParamObj['uuu_exportRangeCount'] != null && gridInitParamObj['uuu_exportRangeCount'] != '') {
                        $("#ssExportCount").val(gridInitParamObj['uuu_exportRangeCount']);
                    }
                }
                if (gridResultObj != null && gridResultObj.datafields) {
                }
                var dataFeilds = gridResultObj.datafields;
                var hrefObj = gridResultObj.hrefObj;
                var localData = gridResultObj.data;
                var formId = gridResultObj.formId;
                var panelId = gridResultObj.panelId;
                var gridOperation = gridResultObj.gridOperation;
                $('#formId').val(formId);
                $('#panelId').val(panelId);
                var gridPropObj = {};
                gridPropObj = gridResultObj.gridPropObj;
                var hiddenObj = gridResultObj['hiddenObj'];
                if (hiddenObj != null) {
                    $("#hiddenObj").val(JSON.stringify(hiddenObj));
                }
                var fieldsInitParamObj = gridResultObj['fieldsInitParamObj'];
                if (fieldsInitParamObj != null) {
                    $("#fieldsInitParamObjStr").val(JSON.stringify(fieldsInitParamObj));
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

                    var renderToolbar = gridPropObj.renderToolbar;
                    // console.log("renderToolbar::::"+renderToolbar);
                    //  alert("renderToolbar:::"+renderToolbar);
                    gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');
                    //      var defaultTabName = $("#defaultTabName").val();

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

                    var descrenderListWise = function (row, columnfield, value, defaulthtml, columnproperties) {

                        return '<div class="jqx-grid-cell-left-align" style="white-space: pre-line;">' + value + '</div>';
                    };
                    var coldataWarpText = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var colwidth = $("#searchResults").jqxGrid('getcolumnproperty', columnfield, 'width');
                        var scrollPosition = $("#searchResults").jqxGrid('scrollposition');
                        $('#idsearchwraptempContainerdiv').css("width", colwidth);
                        $('#idsearchwraptempContainerdiv').html(value);
                        var textHeight = $("#idsearchwraptempContainerdiv").outerHeight(true);
                        var textHeight1 = textHeight / 1.5;
                        try {
                            $('#idsearchwraptempContainerdiv').html("");
                        } catch (w) {
                            $('#idsearchwraptempContainerdiv').html("");
                        }
                        var gridrowsheight1 = $("#searchResults").jqxGrid('getrowheight', row);
                        var gridrowsheight = $("#searchResults").jqxGrid('rowsheight');
                        if (gridrowsheight1 != null && gridrowsheight1 != ''
                                && gridrowsheight1 != 'undefined'
                                && gridrowsheight1 != undefined
                                ) {

                        } else {
                            gridrowsheight1 = gridrowsheight;
                        }

                        if (textHeight1 > gridrowsheight1) {
                            $("#searchResults").jqxGrid('setrowheight', row, textHeight / 1.5);
                        }
                        $("#searchResults").jqxGrid('scrolloffset', scrollPosition.top, scrollPosition.left);

                        var uuu_columnstyle = "white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;";
                        var divClass = "jqx-grid-cell-left-align";
                        if (fieldsInitParamObj != null && !jQuery.isEmptyObject(fieldsInitParamObj)) {
                            var selectedColumnInitParamObj = fieldsInitParamObj[columnfield];
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
                    var descoptrender
                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                                var element = $(defaulthtml);
                                element.addClass('visionSearchWrapDescrDiv');
                                element.removeProp('overflow');
                                element.css('overflow-y', 'scroll');
                                return element[0].outerHTML;
                            };
                    var searchDateRenderer = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                        var cellValue = $("#searchResults").jqxGrid('getcellvalue', row, columnfield);
                        console.log("cellValue::" + cellValue);
                        if (cellValue != null && cellValue != '') {
                            var cellsformat = columnproperties['cellsformat'];
                            if (cellsformat != null && cellsformat != '') {

                            } else {
                                cellsformat = "dd-MM-yyyy HH:mm:ss";
                            }
                            var dateValue = $.jqx.dataFormat.formatdate(value, cellsformat, $("#searchResults").jqxGrid('gridlocalization'));
                            console.log("dateValue:::" + dateValue);
                            cellValue = dateValue;
                        }
                        var element = $(defaulthtml);
                        element.html(cellValue);
                        return element[0].outerHTML;
//                       return '<div style="overflow: hidden; text-overflow: ellipsis; padding-bottom: 2px; text-align: left; margin-right: 2px; margin-left: 4px; margin-top: 15px;">'+cellValue+'</div>';
                        //return cellValue;
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
                    var searchText = $("#result").val() != null ? $("#result").val() : "";
                    $("#colsArrayStr").val(JSON.stringify(gridResultObj['colsArray']));

                    $("#currentSmartSearchData").val(searchText);
                    $("#currentSearchData").val(JSON.stringify(paramsArray));
                    $("#currentSearchType").val(searchType);
                    $("#currentSearchReqType").val($("#floatingdxpAdavanceSearchOptions").val());
                    $("#currentSearchCatType").val(cattype);
                    var source =
                            {
                                type: 'POST',
//                                                async: false,
                                datatype: "json",
                                datafields: dataFeilds,
                                data: {
                                    gridId: gridResultObj['gridId'],
                                    colsArray: JSON.stringify(gridResultObj['colsArray']),
                                    tableName: gridResultObj['tableName'],
                                    searchType: searchType,
                                    reqType: reqType,
                                    searchText: searchText,
                                    'langID': langID,
                                    searchId: searchId,
                                    'cattype': cattype,
                                    'fuzzyFlag': $("#isFuzzy").is(':checked'),
                                    paramsArray: JSON.stringify(paramsArray),
                                    pprDrpdwnDomain: pprDrpdwnDomain

                                },
                                url: 'genericSearchGridResults',
                                cache: false,
                                beforeSend: function (xhr) {
                                    xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                                    showLoader();
                                }, loadError: function (xhr, status, error) {
                                    stopLoader();
                                    throw new Error(error);
                                }, loadComplete: function (data)
                                {
                                    showLoader();
                                    setTimeout(function () {
                                        stopLoader();
                                    }, 5000)


                                    try {
                                        if (gridInitParamObj != null
                                                && !jQuery.isEmptyObject(gridInitParamObj)
                                                && gridInitParamObj['uuu_GridPagesCountFlag'] == 'Y')
                                        {
                                            if (data[0] != null) {
                                                showgridPagesCount('searchResults', 'Y', data[0].TotalRows)
                                            }
                                        }
                                    } catch (e) {
                                    }
                                },
                                downloadComplete: function (data, status, xhr) {
                                    return data;
                                },
                                beforeprocessing: function (data) {
                                    showLoader();

                                    if (data[0] != null) {
                                        //  alert(data.JSONObjectList[0].TotalRows);
                                        if (data[0].TotalRows != null) {
                                            source.totalrecords = data[0].TotalRows;
                                            if (isFirstTime) {
                                                isFirstTime = false;
                                                $("#search_count").attr('totalRecords', data[0].TotalRows.toLocaleString());
                                                $("#search_count").html("(" + (labelObject['Fetched'] != null ? labelObject['Fetched'] : 'Fetched') + " "
                                                        + $("#search_count").attr('totalRecords') + " "
                                                        + (labelObject['records in'] != null ? labelObject['records in'] : 'records in') + " "
                                                        + (new Date().getTime() - resultStartTime) / 1000 + " sec)");
                                            }
                                        } else {
                                            source.totalrecords = 0;
//                                            var modalObj = {
//                                                title: 'Message',
//                                                body: data[0],
//                                            };
//                                            var buttonArray = [
//                                                {
//                                                    text: 'Close',
//                                                    click: function () {
//                                                    },
//                                                    isCloseButton: true
//                                                }
//                                            ];
//                                            modalObj['buttons'] = buttonArray;
//                                            createModal("dataDxpSplitterValue", modalObj);
                                        }

                                        stopLoader();
                                    } else {
                                        $("#search_count").attr('totalRecords', 0);
                                        source.totalrecords = 0;
                                        if (isFirstTime) {
                                            isFirstTime = false;
                                            $("#search_count").html("(" + (labelObject['No record(s) found'] != null ? labelObject['No record(s) found'] : 'No record(s) found') + ")");
                                        }
                                        // $("#search_count").text("(No record(s) found)");
                                        stopLoader();
                                    }

                                },
                                sort: function ()
                                {
                                    $("#searchResults").jqxGrid('updatebounddata', 'sort');
                                    try {
                                        $("#searchResults").jqxGrid('clearselection');
                                    } catch (e) {
                                    }
                                    stopLoader();
                                },
                                filter: function () {

                                    $("#searchResults").jqxGrid('updatebounddata', 'filter');
                                    try {
                                        $("#searchResults").jqxGrid('clearselection');
                                    } catch (e) {
                                    }
                                    stopLoader();
                                }


                            };
                    var dataAdapter = new $.jqx.dataAdapter(source);
                    gridPropObj.source = dataAdapter;
                    gridPropObj.showtoolbar = true;
//                    gridPropObj.rowdetails = true;
                    gridPropObj.rowdetails = false;
                    gridPropObj.rendergridrows = function () {
                        return dataAdapter.records;
                    };
                    var renderToolbar = gridPropObj.renderToolbar;
                    gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');
                    gridPropObj.rowdetailstemplate = {
                        rowdetails: "<div style='margin-top:0.2%' class='visionSearchRowDtl'></div>",
                        rowdetailsheight: 32
                    };
                    //autoheight
                    gridPropObj.autoheight = false;
                    //  showLoader();
                    gridPropObj.initrowdetails = function (index, parentElement, gridElement, datarecord) {
                        showLoader();
                        $.ajax({
                            type: "POST",
                            url: 'fetchRowDetails',
                            data: {
                                'selectedRowData': JSON.stringify(datarecord),
                                searchType: searchType
                            },
                            traditional: true,
                            cache: false,
                            success: function (response) {
                                if (response != null && response != '') {
                                    console.log("response::Row Detail::" + response);
                                    var responseObj = JSON.parse(response);
                                    if (responseObj['rowDetailFlag']) {
                                        //   var dataCopyRecord = datarecord;
                                        var details = $($(parentElement).children()[0]);
                                        console.log("response::rowDetailMessage::" + responseObj['rowDetailMessage']);
                                        details.html('<div class="searchRowDtl">' + responseObj['rowDetailMessage'] + '<div>');
                                        var detailTypes = responseObj['detailTypes'];
                                        var initParamObj = responseObj['initParamObj'];

                                        $("#initParamObj").val(JSON.stringify(initParamObj));
                                        var detailTypesArray = detailTypes.split(",");
                                        var dataRecordConverted = {};
                                        //delete datarecord['ERPSFD'];
                                        //  delete datarecord['PURCHASE'];
                                        for (var key in datarecord) {
                                            if (key != null && key.indexOf("DATE") > -1) {

                                                dataRecordConverted[key] = datarecord[key];
                                            } else {
                                                if (datarecord[key] != null && datarecord[key] != '' && isNaN(datarecord[key])) {
                                                    datarecord[key] = datarecord[key].replace(/&/g, '&amp;');
                                                    datarecord[key] = datarecord[key].replace(/"/g, '&quot;');
                                                    datarecord[key] = datarecord[key].replace(/\\/g, '&bsol;');
                                                    //  .replace(/\\/g, '/');
                                                    for (var entitykey in HtmlEntities) {
                                                        var entity = HtmlEntities[entitykey];
                                                        var regex = new RegExp(entitykey, 'g');
                                                        datarecord[key] = datarecord[key].replace(regex, entity);
                                                    }
                                                    dataRecordConverted[key] = datarecord[key];
                                                } else {
                                                    dataRecordConverted[key] = datarecord[key];
                                                }
                                            }

                                        }
                                        // var dataStr = JSON.stringify(dataRecordConverted);
                                        for (var i = 0; i < detailTypesArray.length; i++) {
                                            if (detailTypesArray[i] != null && detailTypesArray[i] != '') {
                                                var dataDetailObj = responseObj[detailTypesArray[i]];
                                                if (dataDetailObj != null) {
                                                    var functionName = "";
                                                    if (detailTypesArray[i] != 'COPY') {

                                                        functionName = "navigateToFormIcon('" + dataDetailObj['dataField'] + "','" + JSON.stringify(dataRecordConverted) + "','form','" + dataDetailObj['gridId'] + "','" + dataDetailObj['panelId'] + "','" + dataDetailObj['basketType'] + "','" + detailTypesArray[i] + "');";

//                                                        functionName = "navigateToFormIcon('" + dataDetailObj['dataField'] + "','" + JSON.stringify(dataRecordConverted) + "','form','" + dataDetailObj['gridId'] + "','" + dataDetailObj['panelId'] + "','" + dataDetailObj['basketType'] + "');";
                                                    } else {
                                                        $("#copyFormId").val(dataDetailObj['formId']);
                                                        dataRecordConverted['formId'] = dataDetailObj['formId'];
                                                        dataRecordConverted['gridId'] = dataDetailObj['gridId'];
                                                        dataRecordConverted['panelId'] = dataDetailObj['panelId'];
                                                        dataRecordConverted['baskettype'] = dataDetailObj['basketType'];
                                                        dataRecordConverted['objectid'] = dataDetailObj['formId'];
//                                                       
                                                        functionName = "copyItem('" + dataDetailObj['copyId'] + "','" + JSON.stringify(dataRecordConverted) + "');";
                                                        //copyFormId
                                                    }
                                                    $('#' + detailTypesArray[i] + '_' + datarecord['uid']).attr('onClick', functionName);
                                                    if (detailTypesArray[i] == 'SOW') {//onkar SOW
                                                        functionName = "sowDocDownload('" + JSON.stringify(dataRecordConverted) + "','" + dataDetailObj['basketType'] + "')";
                                                        $('#' + detailTypesArray[i] + '_' + datarecord['uid']).attr('onClick', functionName);
                                                    }
                                                }


                                            }

                                        }

                                    } else {
                                        var modalObj = {
                                            title: 'Message',
                                            body: responseObj['rowDetailMessage'],
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
                                    }
                                }
                                stopLoader();
                            },
                            error: function (e) {
                                //  alert('Error: ' + JSON.stringify(e));
                                stopLoader();
                                console.log(e);
                                var meg = e.statusText;
                                var status = e.status;
                            }

                        });
                    };
                    $("#currentGridId").val(gridResultObj['gridId']);
                    $("#currentGridpageNum").val(0);
                    $('#searchResults').jqxGrid(gridPropObj);
                    $('#searchResults').parent().css("padding-top", "3px", "important");
                    $('#searchResults').parent().css("padding-bottom", "3px", "important");
                    $(".accordion-Search-contents").css("display", "block", "important");
                    $('#searchResults').jqxGrid('showtoolbar', true);
//                    $('#' + gridResultObj['gridId']).jqxGrid('pagermode', 'simple');
                    $('#searchResults').on('cellclick', function (event) {
//                                    $('#searchResults').bind('cellclick', function (event) {
                        var panelId = $("#panelId").val();
                        console.log(panelId + ":::event.args.column.datafield:::::" + event.args.column.datafield);
                        navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', hrefObj['hrefGridId'], panelId, 'Search View');
                        // navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId']);
                    });
                    $("#searchResults").on('celldoubleclick', function (event) {
                        var args = event.args;
                        var dataField = args.datafield;
                        var dataField1 = args.text;
                        var rowIndex = args.rowindex;
                        var cellValue = args.value;
                        var isEditable = $('#searchResults').jqxGrid('getcolumnproperty', dataField, 'editable');
                        console.log("isEditable::::" + isEditable)
                        if (!isEditable) {
                            var column = $("#searchResults").jqxGrid('getcolumn', event.args.datafield).text;
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
                    $('#searchResults').on("pagechanged", function (event) {
                        var oldPageNum = $("#currentGridpageNum").val();
                        console.log("oldPageNum:::" + oldPageNum + "::::Current Page Num:::" + event.args.pagenum);
                        // event arguments.
                        var args = event.args;
                        // page number.
                        var pagenum = args.pagenum;
                        // page size.
                        var pagesize = args.pagesize;
                        if (parseInt(event.args.pagenum) != parseInt(oldPageNum)) {
                            var selectedrowindexes = $('#searchResults').jqxGrid('selectedrowindexes');
                            console.log("searchResults:::selectedrowindexes:::" + selectedrowindexes);
                            try {
                                if (selectedrowindexes != null
                                        && selectedrowindexes.length != 0
                                        && selectedrowindexes[0] != -1) {
                                    $('#searchResults').jqxGrid('clearselection');
                                }

                            } catch (e) {
                            }
                        }
                        $("#currentGridpageNum").val(event.args.pagenum);
                    });
                    $('#searchResults').on("pagesizechanged", function (event) {
                        console.log("::pagesizechanged:::" + event.args.pagenum);
                        $("#currentGridpageNum").val(0);
                    });


                }// end if(gridPropObj != null)


            }
        },
        error: function (e) {
            stopLoader();
            console.log(e);
            sessionTimeout(e);
        }


    });
    //stopLoader();
    if (parseInt($("#accordion").attr("data-templateresults")) != 0) {
        showLoader();
        // fetchTemplateResults(searchType, paramsArray, cattype);
    }

}
function getEnterKeySearch(event, reqType, id, selectType, domain)
{
    if (event.which == 13) {
        if (reqType == 'D') {
            dictionarySearchResults();
        } else if (reqType == 'C')
        {
            classificationSearchDetails();
        } else if (reqType == 'I') {

            categoryClassSearch(id, selectType, domain);
        }
        //console.log("reqType is :::" + reqType);
        else {
//            getParamSearchResults(reqType);
            var templateFlag = $("#searchtemplateFlag").val();
            var templeteGrid = $("#searchtemplateGrid").val();
            var regGrdiId = $("#regGrdiId").val();
            var searchId = $("#searchId").val();
            if (reqType == 'M'){
                getParamSearchResults(reqType,"FSM_SERVICE_SPEC_SEARCH",templateFlag,templeteGrid,''); 
            } else {
                getParamSearchResults(reqType, searchId, templateFlag, templeteGrid, regGrdiId);
            }
            

        }

    }
    paramsSearchClearData(id);

}
function updatePersonalize(tbid) {
    console.log("tbid::" + tbid);
    console.log("datacol:::" + $("#" + tbid).attr("data-col"));
    if (tbid.toString().indexOf('search') > -1) {
        if ($("#" + tbid).prop('checked')) {
            $("#P" + $("#" + tbid).attr("data-col")).show();
        } else {
            $("#P" + $("#" + tbid).attr("data-col")).hide();
        }

    } else if (tbid.toString().indexOf('display') > -1) {
        var columnName = tbid.toString().replace("_display", "");
        try {

            if ($("#" + tbid).is(':checked')) {
                console.log("showing;;;" + columnName);
                $('#searchResults').jqxGrid('showcolumn', columnName);
            } else {

                $('#searchResults').jqxGrid('hidecolumn', columnName);
            }

        } catch (e) {

        }
        //   $("#" + $("#" + tbid).attr("data-col")).toggle();

    } else if (tbid.toString().indexOf('freeeze') > -1) {
        var columnName = tbid.toString().replace("_freeeze", "");
        console.log("pinning column::" + columnName);

        try {
            if ($("#" + tbid).is(":checked")) {
                $('#searchResults').jqxGrid('pincolumn', columnName);
            } else {
                $('#searchResults').jqxGrid('unpincolumn', columnName);
            }
        } catch (e) {
        }
    }
}
function classificationSearchDetails() {
    $('.accordion').remove();
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }
    var classificationTypeLbl = $("#classificationtype").find(':selected').data('optlabel');
    $.ajax({
        type: "GET",
        url: 'classificationSearch',
        data: {
            'classificationCode': $('#classificationcode').val(),
            'classTerm': $("#classficationtext").val(),
            'classificationType': $('#classificationtype').val()
        },
        traditional: true,
        success: function (gridResultObj) {
            $('#searchresultsSplitter').html("");
            $('#searchresultsSplitter').append("<div id='classificationinfo' style='opacity:0.99 !important'></div>");
            $("#searchDxpSplitter").jqxSplitter({
                width: '100%',
                height: '100%',
                orientation: 'vertical',
                splitBarSize: 0,
                panels: [{size: 300}]
            });
            if (gridResultObj != null) {
                if (gridResultObj != null) {
                    try {
                        $("#classificationinfo").jqxGrid("destroy");
                        $("#classificationinfo").remove();
                    } catch (e) {
                    }
                    var accdTabs = "<ul class=\"accordion\">"
                            + "<li>"
                            + "<h5 class=\"accordion-trigger\">Template</h5>"
                            + "</li>"
                            + "<div id='visionClassficationTemplateIds' class=\"accordion-contents\"></div>"
                            + "<li>"
                            + "<h5 class=\"accordion-trigger\">Result</h5>"
                            + "</li>"
//                            + "<div id='visionClassficationGrid' class=\"accordion-contents\"></div>"
                            + "</ul>";
//                    $("#searchresultsSplitter").html("<div id='searchResults'></div>");
                    $("#dxp1Seconddiv").append(accdTabs);
//                    $('.accordion-contents').hide();
                    $('.accordion').on('click', '.accordion-trigger', function (e) {
                        e.preventDefault();
                        $('.accordion-contents:visible').slideUp(300);
                        $('.accordion-contents').show();
                        $(this)
                                .next('.accordion-contents')
                                .not(':animated')
                                .slideToggle(300);
                    });
                    $("#visionClassficationTemplateIds").append("<div id='classificationinfo' style='opacity:0.99 !important'></div>");
//                     
//                                   $("#dxp1Firstdiv").append("<div id='classificationinfo' style='opacity:0.99 !important'></div>");
                    //need to assign all hidden fields like hrefColumn,linkedColumns,stripValue,imageColumn,imageTable,imageTableColumn
                    var hrefObj = {}; //hrefObj
                    hrefObj = gridResultObj['hrefObj'];

                    if (gridResultObj != null && gridResultObj.datafields) {

                        var imagerenderer = function (row, datafield, value) {

                            return '<img src="" id="ind' + row + '" class="indimage"><label id="imgLabel' + row + '" class="indimage">Show Image</label>';
                        };
                    }
                    var dataFeilds = gridResultObj.datafields;
                    // var hrefObj = gridResultObj.hrefObj;
                    var localData = gridResultObj.data;
                    var formId = gridResultObj.formId;
                    var panelId = gridResultObj.panelId;
                    var gridOperation = gridResultObj.gridOperation;
                    var gridPropObj = {};
                    gridPropObj = gridResultObj.gridPropObj;
                    if (gridPropObj != null) {
                        gridPropObj.columns = gridResultObj.columns;
                        var headerTooltipRenderer = function (element) {
                            $(element).parent().jqxTooltip({position: 'mouse',
                                position: 'bottom-right',
                                showArrow: false, content: $(element).text()});
                        }

                        var renderToolbar = gridPropObj.renderToolbar;

                        gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');
                        //      var defaultTabName = $("#defaultTabName").val();


                        var descrender
                                = function (row, columnfield, value, defaulthtml, columnproperties) {
                                    //return '<textarea readonly class="ta_style" rows=1 >' + value + '</textarea>';
                                    console.log("hiiiii");
                                    return '<div style="height:' + $('#classificationinfo').jqxGrid('rowsheight') + 'px" class="ta_style" rows=1 >' + value + '</div>';
                                };
                        var classTermRender
                                = function (row, columnfield, value, defaulthtml, columnproperties) {
                                    //return '<textarea readonly class="ta_style" rows=1 >' + value + '</textarea>';
                                    console.log("hiiiii");
                                    return '<div style="cursor:pointer;" class="vend_style">' + value + '</div>';
                                };
                        var descriptorImageRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
                            return  "<img title='Click to create a record' style='cursor:pointer;'  src='" + value + "' class='imageStyle visionTemplete' data-count='" + $('#classificationinfo').jqxGrid('pagesize') + "' id='dtlul_"
                                    + row + "' onmouseover=templeteMouseOver('dtlul_" + row + "'," + $("#classificationinfo").jqxGrid("pagesize") + ") onmouseout=templeteMouseOut('dtlul_" + row + "'," + $("#classificationinfo").jqxGrid("pagesize") + ")>";
                        };
                        var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                            var cellValue = $("#classificationinfo").jqxGrid('getcellvalue', row, columnfield);
                            var viewType = "GRID-VIEW";
                            var ddwData = gridResultObj.dropDowndData;
                            var ddwObj = ddwData[columnfield];
                            var dependencyparams = ddwObj.dependencyparams;
                            var editable = gridPropObj.editable;
                            if (editable) {
                                return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img id='dd" + "classificationinfo" + columnfield + "' src='images/iDXPUI5SearchDropdown.png'  onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
//                                return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img src='images/iDXPUI5SearchDropdown.png' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                            } else
                            {
                                return "<div class='visionGridDataAlign'>" + cellValue + "</div>";
                            }

                        };
                        var viewParentRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
                            var codifcode = $('#classificationinfo').jqxGrid('getcellvalue', row, 'CODE');
                            console.log("viewParentRenderer:::" + codifcode);
                            var conceptid = $('#classificationinfo').jqxGrid('getcellvalue', row, "CONCEPT_ID");
                            return "<div class='visionGridDataAlign' style='text-align:center;cursor:pointer;'><input id='fetchtree" + codifcode + "' type='checkbox' style='width:15px;  height: 17px; margin-top: 5px;' onclick=onChecked(" + codifcode + ",'fetchtree" + codifcode + "','" + conceptid + "') > </div>";
                        };
                        var descriptorrenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
                            var descriptorClass = $('#classificationinfo').jqxGrid('getcellvalue', row, "TERM");
                            //  console.log("Descriptor Class:" + descriptorClass);
                            var descriptorClass1 = descriptorClass.replace(/\s/g, "+");
                            var conceptid = $('#classificationinfo').jqxGrid('getcellvalue', row, "CONCEPT_ID");
                            console.log("conceptid:descriptorrenderer:" + conceptid);
                            return "<div class='visionGridDataAlign' style='text-align: left;cursor:pointer' onclick=fetchDescriptorMaterials('" + descriptorClass1 + "','" + conceptid + "')>" + descriptorClass + " </div>";
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
                                        tableName: gridResultObj['tableName'],
                                        'classificationCode': $('#classificationcode').val(),
                                        'classTerm': $("#classficationtext").val(),
                                        'classificationType': $('#classificationtype').val(),
                                        classificationTypeLbl: classificationTypeLbl

                                    },
                                    url: 'getClassificationSearchresults',
                                    cache: false,
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
                                    beforeprocessing: function (data) {
                                        showLoader();
                                        if (data[0] != null) {
                                            //  alert(data.JSONObjectList[0].TotalRows);
                                            source.totalrecords = data[0].TotalRows;
                                        } else {
//                                        $("#search_count").attr('totalRecords', 0);
                                            source.totalrecords = 0;
                                        }
                                        try {
//                                            $("#classificationinfo").jqxGrid('clearselection');
                                        } catch (e) {
                                        }

                                        stopLoader();
                                    },
                                    sort: function ()
                                    {
                                        $("#classificationinfo").jqxGrid('updatebounddata', 'sort');
                                        try {
                                            $("#classificationinfo").jqxGrid('clearselection');
                                        } catch (e) {
                                        }

                                    },
                                    filter: function () {

                                        $("#classificationinfo").jqxGrid('updatebounddata', 'filter');
                                        try {
                                            $("#classificationinfo").jqxGrid('clearselection');
                                        } catch (e) {
                                        }
                                    }


                                };

                        var dataAdapter = new $.jqx.dataAdapter(source);
                        gridPropObj.source = dataAdapter;
                        gridPropObj.showtoolbar = false;
                        gridPropObj.rowdetails = false;
                        gridPropObj.rendergridrows = function () {
                            return dataAdapter.records;
                        };
                        gridPropObj.rendertoolbar = function (toolbar) {
                            // appends buttons to the tool bar.
                            var container = $("<div style='overflow: hidden; position: relative; margin: 5px;'></div>");
//                        var buttonTemplate = "<div  class='visionRefreshIndexBtn' style='float: left; padding: 3px; margin: 2px;'></div>";

                            var reloadButton = $("<div style='float: left;margin-left: 5px;'><img style='position: relative;width:16px;height:16px; margin-top: 2px;' src='images/iDXPUI5Refresh.svg'/></div>");
                            container.append(reloadButton);
                            // reload grid data.
                            reloadButton.click(function () {
//                                    $('#classificationinfo').jqxGrid({source: dataAdapter});
//                                    $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'cells');
                                $("#classificationinfo").jqxGrid('clearselection');
                                $("#classificationinfo").jqxGrid('clearfilters');
                            });
                            reloadButton.jqxButton({cursor: "pointer", enableDefault: false});
//                    reloadButton.find('div:first').addClass("visionRefreshIndexBtn");
                            reloadButton.jqxTooltip({position: 'bottom', content: "Refresh"});
                            //toolbar.append(container);
                        };
//                        gridPropObj.enabletooltips = false;
                        gridPropObj.cellhover = function (element, pageX, pageY)
                        {

                            var cell = $('#classificationinfo').jqxGrid('getcellatposition', pageX, pageY);
                            //\\alert("hello"+cell.row);
                            var datainformation = $('#classificationinfo').jqxGrid('getdatainformation');
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
                        $('#classificationinfo').jqxGrid(gridPropObj);
                        $('#classificationinfo').parent().css("padding-top", "3px", "important");
                        $('#classificationinfo').parent().css("padding-bottom", "3px", "important");
                        $('#classificationinfo').jqxGrid('showtoolbar', false);

                    }// end if(gridPropObj != null)
                }
            }
        },
        error: function (e) {
            console.log(e);
            stopLoader();
            sessionTimeout(e);
        }
    });
}
function getClassificationSuggetions() {
    $('.ui-autocomplete').html('');
    $(document).ready(function ()
    {
        $("#classficationtext").autocomplete(
                {
                    source: function (request, response) {
                        showLoader();
                        $.ajax({
                            url: "descriptorSuggestions",
                            dataType: "json",
                            data: {
                                term: $("#classficationtext").val()
                            },
                            success: function (item) {
                                stopLoader();
                                response(item);
                            }
                        });
                    },
//                source: "descriptorSuggestions?searchLimit=15",
                    minLength: 2,
                    params: {
                        'classification': function () {
                            return $('#classificationtype').val();
                        }},
                    create: function () {
                        $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
                            imageid = parseInt(imageid) + 1;
                            return $('<li>')
                                    .append("<table style='color:inherit;background-color:inherit;width:100%;border:none'><tr><td style='width:70%;color:inherit;background-color:inherit;'> " + item.value + "</td><td style='width:30%'> <img id='img" + imageid + "' "
                                            + " onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id)  style='color:inherit;background-color:inherit;height:40px;width:40px' src='" + item.content + "'/></td></tr></table>")
                                    .appendTo(ul);
                        };
                    },
                    open: function () {
                        $('.ui-autocomplete').css('width', '400px'); // HERE
                        $('.ui-autocomplete').addClass('repositoryAutoCompleteClass');
                    },
                    select: function (event, ui) {
                        $("#classficationtext").attr("data-conceptid", $.trim(ui.item.termid));
                        onClassificationchng();
                    }
                });
        $("#classificationcode").autocomplete(
                {
                    source: function (request, response) {
                        showLoader();
                        $.ajax({
                            url: "classificationSuggestions",
                            dataType: "json",
                            data: {
                                classification: $('#classificationtype').val(),
                                term: $("#classificationcode").val()
                            },
                            success: function (item) {
                                stopLoader();
                                response(item);
                            }
                        });
                    },
//                source: "classificationSuggestions?searchLimit=15&classification=" + $('#classificationtype').val(),
                    minLength: 2,
                    select: function (event, ui) {
                        console.log("selectedValue::: " + $.trim(ui.item.value));
                        console.log("Term Id::: " + $.trim(ui.item.termid));
                        console.log("Term Id::: " + $.trim(ui.item.term));
                        //  console.log("classificationdesc Id::: " + $.trim(ui.item.classificationdesc));
                        $('#classficationtext').val($.trim(ui.item.term));
                        $('#classficationtext').attr('data-conceptid', $.trim(ui.item.termid));
                        $('#classificationcode').val($.trim(ui.item.value));
                        $("#classificationdesc").val($.trim(ui.item.classificationdesc));
                    }
                });
        $("#dictionarytext").autocomplete(
                {
                    source: function (request, response) {
                        showLoader();
                        $.ajax({
                            url: "descriptorSuggestions",
                            dataType: "json",
                            data: {
                                term: $("#dictionarytext").val()
                            },
                            success: function (item) {
                                stopLoader();
                                response(item);
                            }
                        });
                    },
//            {source: "descriptorSuggestions?searchLimit=15",
                    minLength: 2,
                    create: function () {
                        $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
                            $(".clear_input").show();
                            // console.log(JSON.stringify(item));
                            imageid = parseInt(imageid) + 1;
                            return $('<li>')
                                    .append("<table style='color:inherit;background-color:inherit;width:100%;border:none'><tr><td style='width:70%;color:inherit;background-color:inherit;'> " + item.value + "</td><td style='width:30%'> <img id='img" + imageid + "' "
                                            // +" onmouseover='onAcImageFocus(id)'"
                                            + " onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id)  style='color:inherit;background-color:inherit;width:40px;height:40px' src='" + item.content + "'/></td></tr></table>")
                                    .appendTo(ul);

                        };
                    },
                    select: function (event, ui) {
                        console.log("selectedValue::: " + $.trim(ui.item.value));
                        console.log("Term Id::: " + $.trim(ui.item.termid));
                        $("#dictionarytext").attr("data-conceptid", $.trim(ui.item.termid));
                        getPropertiesByClassName(ui.item.value, ui.item.termid);
                    }
                });
        $("#categorytextfield").keydown(function (e) {
            $(".clear_category_input").show();
            var imageid = 0;
            $("#categorytextfield").autocomplete({
                source: function (request, response) {
                    $.ajax({
                        url: "categorySearchSuggestions",
                        dataType: "json",
                        data: {
                            categorytextfieldval: $('#categorytextfieldval').val(),
                            disciplinetextfieldval: $('#disciplinetextfieldval').val(),
                            subDisciplinetextfieldval: $('#subDisciplinetextfieldval').val(),
                            term: $("#categorytextfield").val()
                        },
                        success: function (item) {
                            response(item);
                        }
                    });
                },
                minLength: 2,
                create: function () {
                    $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
                        $(".clear_category_input").show();
                        imageid = parseInt(imageid) + 1;
                        return $('<li>')
                                .append("<table style='color:inherit;background-color:inherit;width:100%;border:none'><tr><td style='width:70%;color:inherit;background-color:inherit;'> " + item.value + "</td><td style='width:30%'> <img id='img" + imageid + "' "
                                        + " onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id)  style='color:inherit;background-color:inherit;width:40px;height:40px' src='" + item.content + "'/></td></tr></table>")
                                .appendTo(ul);

                    };
                },
                select: function (event, ui) {
                    console.log("selectedValue::: " + $.trim(ui.item.value));
                    console.log("Term Id::: " + $.trim(ui.item.termid));
                    $("#categorytextfield").attr("data-conceptid", $.trim(ui.item.termid));
                    categoryTextSearchResults(ui.item.value);
                }
            });
        });

    });

}
function templeteMouseOver(result1, result2) {
    var templeteId = result1;
    var imagePath = $("#" + templeteId).attr("src");
    console.log(templeteId + ' templeteId');
    $("#visionTempleteHoverImage").empty();
//    var imagePaths = "<span><img src='" + imagePath + "'></span>";
    var imagePaths = "<div class='templatehoverdImagexpand'><div class='templatehovercloseIcon text-right'><img src='images/crossicon.png' onclick='closetempleteHoverImage()'  width='16px' /></div><div class='templateimagecontentAppend'><img src='" + imagePath + "'></div></div>";
    $("#visionTempleteHoverImage").show();
    $("#visionTempleteHoverImage").append(imagePaths);
}
function templeteMouseOverDialog(imgId, title) {
    var templeteId = imgId;
    var imagePath = $("#" + templeteId).attr("src");
    console.log(templeteId + ' templeteId');
    $("#visionTempleteImagePopup").html("");
    try {
        $("#visionTempleteImagePopup").dialog("destroy");
    } catch (e) {

    }
    try {
        $("#visionTempleteImagePopup").dialog("close");
    } catch (e) {

    }
//    var imagePaths = "<span><img src='" + imagePath + "'></span>";
    var imagePaths = "<div class='templatehoverdImagexpand'><div class='templateimagecontentAppend'><img src='" + imagePath + "'></div></div>";
//    $("#visionTempleteHoverImage").show();
    $("#visionTempleteImagePopup").html(imagePaths);
//    $("#visionTempleteImagePopup").append(imagePaths); 

    $("#visionTempleteImagePopup").dialog({resizable: false,
        title: (labelObject[title] != null ? labelObject[title] : 'Image View'),
        modal: true,
        width: 'auto',
        height: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
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
            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                $("#visionTempleteImagePopup").show();
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
            try {
                $(this).dialog("close");
            } catch (e) {

            }


            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });


}

function templeteMouseOutDialogClose(result1, result2) {

//    $("#visionTempleteHoverImage").empty();
//    $("#visionTempleteHoverImage").hide();

    $("#visionTempleteImagePopup").html("");
    try {
        $("#visionTempleteHoverImage").hide();
        $("#visionTempleteImagePopup").dialog("destroy");
    } catch (e) {

    }
    try {
        $("#visionTempleteImagePopup").dialog("close");
    } catch (e) {

    }

}
function templeteMouseOut(result1, result2) {

    $("#visionTempleteHoverImage").empty();
    $("#visionTempleteHoverImage").hide();
}
function closetempleteHoverImage(result1, result2) {
    $("#visionTempleteHoverImage").empty();
    $("#visionTempleteHoverImage").hide();
}
function onClassificationchng() {
    showLoader();
    var classification = $("#classificationtype").val();
    var conceptId = $("#classficationtext").attr('data-conceptid');
//    $("#classificationcode").autocomplete("option", "source",
//            "classificationSuggestions?searchLimit=15&classification=" + $('#classificationtype').val());
    $.ajax({
        type: "GET",
        url: 'getDescClassification',
        data: {
            conceptId: conceptId,
            classification: classification
        },
        traditional: true, cache: false,
        success: function (response) {
            $("#classificationcode").val(response.code);
            $("#classificationdesc").val(response.desc);
            stopLoader();
        },
        error: function (e) {
            console.log(e);
            stopLoader();
            sessionTimeout(e);
        }

    });
}
function fetchDescriptorMaterials(descriptor, descriptorid) {
    showLoader();
    var dataObject = {};
    var dataArray = [];
    var dataObject = {};
    dataObject.property = "";
    dataObject.propertyid = "";
    dataObject.datatype = "";
    dataObject.value = "";
    dataObject.uom = "";
    dataObject.range = "";
    dataObject.minvalue = "";
    dataObject.maxvalue = "";
    // var conceptId = $("#dictionarytext").attr("data-conceptid");
    if (descriptorid != null && descriptorid != '') {
        dataObject.conceptId = descriptorid;
        dataObject.classTerm = descriptor.toUpperCase().replace(/\+/g, " ");
    } else {
        dataObject.conceptId = descriptorid;
        dataObject.classTerm = descriptor.toUpperCase().replace(/\+/g, " ") + "%";
    }

    dataArray.push(dataObject);
    classificationsearchResults('C', '', dataArray, '');

}
function dictionarySearchResults() {
    showLoader();
    var dataArray = [];
    var classTerm = $("#SearchResult").val();
    if (classTerm != null && classTerm != '') {
        var i = 0;
        $("#dictionarytbl tbody tr").each(function () {
            console.log("$(#propval + i).val():::" + $("#propval" + i).val());
            console.log("$(#propval + i).val():::" + $("#propuom" + i).val());
            if (!($.trim($("#propval" + i).val()) == "" && $.trim($("#propuom" + i).val() == ""))) {
                var dataObject = {};
                dataObject.property = $.trim($(this).find("td:eq(0)").text());
                dataObject.propertyid = $.trim($("#propertyid" + i).attr("data-propertyid"));
                dataObject.datatype = $.trim($(this).find("td:eq(1)").text());
                dataObject.value = $.trim($("#propval" + i).val());
                dataObject.uom = $.trim($("#propuom" + i).val());
                dataObject.range = $.trim($("#trdic" + i).attr('data-isrange'));
                dataObject.minvalue = $.trim($("#propminval" + i).val());
                dataObject.maxvalue = $.trim($("#propmaxval" + i).val());
                dataObject.conceptId = $("#dictionarytext").attr("data-conceptid");
                dataObject.classTerm = classTerm.toUpperCase();
                dataObject.valueOp = $("#dictddw" + i).val();
                dataArray.push(dataObject);
            }
            i++;
        });
        if (dataArray.length == 0) {
            var dataObject = {};
            dataObject.property = "";
            dataObject.propertyid = "";
            dataObject.datatype = "";
            dataObject.value = "";
            dataObject.uom = "";
            dataObject.range = "";
            dataObject.minvalue = "";
            dataObject.maxvalue = "";
            var conceptId = $("#SearchResult").attr("data-conceptid");
            if (conceptId != null && conceptId != '') {
                dataObject.conceptId = $("#SearchResult").attr("data-conceptid");
                dataObject.classTerm = classTerm.toUpperCase();
            } else {
                dataObject.conceptId = $("#SearchResult").attr("data-conceptid");
                dataObject.classTerm = classTerm.toUpperCase() + "%";
            }

            dataArray.push(dataObject);
        }
        console.log("dataArray:::" + JSON.stringify(dataArray));
        searchResults('D', '', dataArray, '');
    } else {
        searchResults('D', '', dataArray, '');
        console.log("Class Term Empty");
    }

}
function dictionaryreset() {
    $("#dictionarytext").val("");
    $("#classProperties").html("");
    $("#dictionarytext").attr("data-conceptid", "");
    $(".clear_input").hide();
    stopLoader();
}
function resetDictionarySearch() {
    $("#dictionarytbl tbody tr").each(function () {
        $(this).find('td').each(function () {
            if ($(this).find("input[type=text]").length > 0) {
                $(this).find("input[type=text]").val("");
            }
            if ($(this).find("select").length > 0) {
                $(this).find("select").val("EQUALS");
            }
        });
    });
}
function getPropertiesByClassName(classTerm, conceptId, domainValue, templetflag, templeteGrid, category) {

    $("#searchresultsSplitter").html("");
    $("#dxp1Firstdiv").html("");
    $("#dxp1Seconddiv").html("");
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
    var searchId = $("#searchId").val();
    console.log("classTerm:::" + classTerm + "::conceptId:::" + conceptId);
    console.log("searchId:::" + searchId);

    if (conceptId != null && conceptId != '') {
        showLoader();

        try {
            $.ajax({
                type: "POST",
                url: 'getParamSearchForm',
                data: {
                    'searchId': searchId,
                    'reqType': 'D',
                    'templateFlag': templetflag,
                    'templateGrid': templeteGrid,
//            searchName: searchName
                },
                traditional: true,
                cache: false,
                success: function (response) {
//                stopLoader();
                    $("#dxpClassficationAppendClass").hide();
                    //$("#searchDxpSplitter").show();
                    $(".visionjqxTreeDiv").hide();
//                $("#dxpClassficationAppendClass").hide();
                    $("#DxpParamSplitterDotsClass").show();
                    if (response != null && response != '') {
//                    console.log("divId:::" + divId); 
                        var responseObj = JSON.parse(response);
                        $("#dxp1Firstdiv").html(responseObj['formString']);
                        $("#dxp1Firstdiv").addClass("PilogresearchSearch");
                        $("#dxp1TabsWithGridContent").addClass("gridHeight");
//                      $("#searchTypeSplitter").html(responseObj['formString']);
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
//                 stopLoader();
//                sessionTimeout(e);
                }

            });
        } catch (e) {
            console.log(e);
        }


        try {
            var enableDisAI = $("#AIEnableOrDisableFlag").val();
            if (enableDisAI != null && enableDisAI != undefined && enableDisAI != "" && enableDisAI == 'Y') {
                searchBasedAILensResults(classTerm, domainValue);
            }
        } catch (er) {

        }

        $.ajax({
            type: "POST",
            url: 'descriptorProperties',
            data: {
                conceptId: conceptId,
                classTerm: classTerm,
                domainValue: domainValue,
                templateFlag: templetflag,
                templeteGrid: templeteGrid,
                searchId: searchId,
                category: category,

            },
            traditional: true,
            cache: false,
            success: function (response) {
                var responceObj = JSON.parse(response);
                console.log('Response::' + response);
                $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
                $('#dxp1MainSplitter').jqxSplitter({resizable: false});
//                 $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '100%'}]});
//                    $('#dxp1MainSplitter').jqxSplitter('expand');
//                    showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent','Search','N');
                $('#dxp1MainSplitter').on('collapsed', function (event) {
                    refreshGrid('searchResults');

                });
                $('#dxp1MainSplitter').on('expanded', function (event) {
                    $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
                    $('#dxp1MainSplitter').jqxSplitter({resizable: false});
                    refreshGrid('searchResults');
                });
//                try {
//            $('#dxp1MainSplitter').on('resize', function (event) {
//            refreshGrid('searchResults');
//        });
//        } catch (e) {
//
//        }
                try {
                    $('#dxp1MainSplitter').jqxSplitter('expand');
                } catch (e) {

                }
                showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'Dictionary Search', 'N');
                if ($("#dxpTabs").is(":visible")) {

                } else {
                    toggleTabsAndMenus(event);
                }
                $('.searchSetting').css("right", "27.9%", "!important");
//                $('.searchtempleteClass').css("padding-right", "114px", "!important");
                $(".dxpDictionaryFormClassData").html(responceObj['formResult']);
                $("#searchresultsSplitter").html(responceObj['nextPageResult']);
                $("#classProperties").html(responceObj['result']);
                $("#idxpDictionayFormHeaderName").attr("data-conceptid", conceptId);
                $("#idxpDictionayFormHeaderName").attr("data-classTerm", classTerm);
//                DictionarySsearchResults('D', $("#SearchResult").val(), domainValue, "FMM_MGR_MATERIAL_SEARCH", '', '', '');
//                   getDictionarySearchResults(classTerm,'D',templetflag,templeteGrid); 
                $('.dictionaryclasssearch table').each(function () {

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
                                }).wrap('<div class="sticky-wrap" />');
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
                                                top: $stickyWrap.scrollTop()
                                            });
                                            $(".visionHeaderMain").css("position", "absolute");
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
                                                top: $w.scrollTop() - $t.offset().top
                                            });
                                            $(".visionHeaderMain").css("position", "absolute");
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
//                        $t.parent('.sticky-wrap').scroll($.throttle(250, function () {
//                            repositionStickyHead();
//                            repositionStickyCol();
//                        }));
//                        $w.load(setWidths)
//                                .resize($.debounce(250, function () {
//                                    setWidths();
//                                    repositionStickyHead();
//                                    repositionStickyCol();
//                                }))
//                                .scroll($.throttle(250, repositionStickyHead));
                    }
                });
                stopLoader();
//                dictionarySearchResults();
            },
            error: function (e) {
                console.log(e);
                stopLoader();
                sessionTimeout(e);
            }

        });
    }
}
function categoryAutoComplete() {
    showLoader();
    $("#categorytextfield").keydown(function (e) {
        $(".clear_category_input").show();
        var imageid = 0;
        $("#categorytextfield").autocomplete({
            source: function (request, response) {
                $.ajax({
                    url: "categorySearchSuggestions",
                    dataType: "json",
                    data: {
                        categorytextfieldval: $('#categorytextfieldval').val(),
                        disciplinetextfieldval: $('#disciplinetextfieldval').val(),
                        subDisciplinetextfieldval: $('#subDisciplinetextfieldval').val(),
                        term: $("#categorytextfield").val()
                    },
                    success: function (item) {
                        response(item);
                    }
                });
            },
            minLength: 2,
            create: function () {
                $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
                    $(".clear_category_input").show();
                    imageid = parseInt(imageid) + 1;
                    return $('<li>')
                            .append("<table style='color:inherit;background-color:inherit;width:100%;border:none'><tr><td style='width:90%;color:inherit;background-color:inherit;'> " + item.value + "</td><td style='width:10%'> <img id='img" + imageid + "' "
                                    + " onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id)  style='color:inherit;background-color:inherit;width:40px;height:40px' src='" + item.content + "'/></td></tr></table>")
                            .appendTo(ul);

                };
            },
            open: function () {
                $('.ui-autocomplete').css('width', '287px'); // HERE
            },
            select: function (event, ui) {
                console.log("selectedValue::: " + $.trim(ui.item.value));
                console.log("Term Id::: " + $.trim(ui.item.termid));
                $("#categorytextfield").attr("data-conceptid", $.trim(ui.item.termid));
                categoryTextSearchResults(ui.item.value);
            }
        });
    });
}

function dictionaryAutoComplete(domainValue) {
//    showLoader();
    var searchId = $("#searchId").val();
    var category = "";
    var dxpAdavanceSearchOptions = $('#floatingdxpAdavanceSearchOptions');
    if (dxpAdavanceSearchOptions.length == 0 || dxpAdavanceSearchOptions == undefined) {
        dxpAdavanceSearchOptions = $('#dxpAdavanceSearchOptions');
        if (dxpAdavanceSearchOptions.val() == 'D') {
            dxpAdavanceSearchOptions.on('change', function () {
                $("#SearchResult").autocomplete("destroy");
                stopLoader();
            });
        }
        $("#SearchResult").autocomplete(
                {
                    source: function (request, response) {
                        showLoader();
                        $.ajax({
                            url: "descriptorSuggestions",
                            dataType: "json",
                            data: {
                                term: ($("#SearchResult").val()).trim(),
                                searchId: searchId,
                                domainValue: domainValue
                            },
                            success: function (item) {
//                                $("#SearchResult").blur();
                                stopLoader();
                                stopLoader();
                                response(item);
                            }
                        });
                    },
//            {source: "descriptorSuggestions?searchLimit=15",
                    minLength: 2,
                    create: function () {
                        $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
                            $(".clear_input").show();
                            // console.log(JSON.stringify(item));
                            imageid = parseInt(imageid) + 1;
                            var itemStr = "";
                            var wiprecordCount = item.wiprecordCount;
                            var wipActiveCountFlag = item.wipActiveCountFlag;
                            var activerecordCount = item.activerecordCount;
                            category = item.category;
                            if (item.wipActiveCountFlag == 'Y') {
                                itemStr = "<div class='dxpDictionaryMainClass'>"
                                        + "<div class='media'>"
                                        + "<img id='img" + imageid + "' onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id) src='" + item.content + "' class='align-self-start mr-3' style='width:60px; height:60px; border-radius: 3px;'>"
                                        + "<div class='media-body'>"
                                        + "<h4>" + item.value + " <span class='recordText' style='color:blue;'>WIP</span><span class='badge badge-pill badge-info'>" + item.wiprecordCount + ",</span><span class='recordText' style='color:green;'>Active</span><span class='badge badge-pill badge-info'>" + item.activerecordCount + "</span></h4>"
                                        + "<p>" + item.definition + "</p>"
                                        + "</div>"
                                        + "</div>";
                            } else {
                                itemStr = "<div class='dxpDictionaryMainClass'>"
                                        + "<div class='media'>"
                                        + "<img id='img" + imageid + "' onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id) src='" + item.content + "' class='align-self-start mr-3' style='width:60px; height:60px; border-radius: 3px;'>"
                                        + "<div class='media-body'>"
                                        + "<h4>" + item.value + " <span class='recordText' style='color:green;'>Active Records</span><span class='badge badge-pill badge-info'>" + item.count + "</span></h4>"
                                        + "<p>" + item.definition + "</p>"
                                        + "</div>"
                                        + "</div>";
                            }
                            return $('<li>').append(itemStr).appendTo(ul);
//                                    .append("<div class='dxpDictionaryMainClass'>"
//                                            + "<div class='media'>"
//                                            + "<img id='img" + imageid + "' onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id) src='" + item.content + "' class='align-self-start mr-3' style='width:60px; height:60px; border-radius: 3px;'>"
//                                            + "<div class='media-body'>"
//                                            + "<h4>" + item.value + " <span class='recordText' style='color:green;'>Active Records</span><span class='badge badge-pill badge-info'>" + item.count + "</span></h4>"
//                                            + "<p>" + item.definition + "</p>"
//                                            + "</div>"
//                                            + "</div>").appendTo(ul);
//                                    .append("<div class='dxpDictionaryMainClass'>"
//                                            + "<div class='media'>"
//                                            + "<img id='img" + imageid + "' onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id) src='" + item.content + "' class='align-self-start mr-3' style='width:60px'>"
//                                            + "<div class='media-body'>"
//                                            + "<h4>" + item.value + " <span class='recordText' style='color:green;'>Active Records</span><span class='badge badge-pill badge-info'>" + item.count + "</span></h4>"
//                                            + "<p>" + item.definition + "</p>"
//                                            + "</div>"
//                                            + "</div>").appendTo(ul);

                        };
                    },
                    open: function () {
                        $('.ui-autocomplete').css('width', '600px'); // HERE
                        $('#ui-id-1').css('z-index', '1'); // HERE
                        $(".ui-autocomplete").addClass("dictonary-home-dropdown");
                    },
                    select: function (event, ui) {
                        console.log("selectedValue::: " + $.trim(ui.item.value));
                        console.log("Term Id::: " + $.trim(ui.item.termid));
                        var termId = $.trim(ui.item.termid);
                        termId = termId.toLocaleLowerCase();
                        $("#SearchResult").attr("data-conceptid", termId);
                        $("#VisualizePageBody").hide();
//                        $("#SearchResult").blur();
//                        getPropertiesByClassName(ui.item.value, ui.item.termid, domainValue);
                        var e = event || window.event;
                        var code = e.keyCode
                        if (e.keyCode != 13) {
                            getPropertiesByClassName(ui.item.value, ui.item.termid, domainValue,category);
                        }
                    }
                });
    } else if (domainValue == "Y") {
        $("#SearchResult").autocomplete("destroy");
    } else {
        if (dxpAdavanceSearchOptions.val() == 'D') {
            dxpAdavanceSearchOptions.on('change', function () {
                $("#templeteSearchResult").autocomplete("destroy");
                $("#intellisenseDiv").html("");
                $("#intellisensebox").hide();
                $("#intellisenseDiv").hide();
                $("#intellisenseboxId").hide();
                $("#smartSaerchCountId").html(" ");
                stopLoader();
            });
        }
        var userVal = $("#templeteSearchResult").val();
        if (userVal.trim() != null && userVal.trim() != '' && userVal.trim() != 'undefined'
                && userVal.trim() != undefined
                && (userVal.trim()).length < 3) {
            return;
        }
        var flag = true;
        try {
            showLoader();
            $.ajax({
                type: "post",
                url: "descriptorSuggestions",
                cache: false,
                data: {
                    term: userVal.trim(),
                    searchId: searchId,
                    domainValue: domainValue,
                },
                traditional: true,
                dataType: 'json',
                success: function (item) {

                    if (item != null && item.length > 0) {
                        flag = true;
                        $("#intellisenseDiv").html("");
                        $("#intellisensebox").hide();
                        $("#intellisenseDiv").hide();
                        $("#intellisenseboxId").hide();
                        var ulStr = "";
                        for (var i = 0; i < item.length; i++) {
                            var obj = item [i];
                            var listr = "";
                            imageid = parseInt(imageid) + 1;
                            var wiprecordCount = obj.wiprecordCount;
                            var wipActiveCountFlag = obj.wipActiveCountFlag;
                            var activerecordCount = obj.activerecordCount;
                            var category = obj.category;



                            listr = "<li id = 'classcontent" + i + "' onclick = \"getPropertiesByClassName('" + obj.value + "','" + obj.termid + "','" + domainValue + "','','','"+category+"')\">"
                                    + "<div class='dxpDictionaryMainClass'>"
                                    + "<div class='media'>"
                                    + "<img id='img" + i + "' "
                                    + " onmouseover='templeteMouseOver(id)' "
                                    + " onmouseout=templeteMouseOut(id) "
                                    + "src='" + obj.content + "' class='align-self-start mr-3' style='width:60px'>"
                                    + "<div class='media-body'>";
                            if (wipActiveCountFlag == 'Y') {
                                listr = listr + "<h4>" + obj.value + " <span class='recordText' style='color:green;'>"+(labelObject['Active'] != null ? labelObject['Active'] : 'Active')+"</span><span class='badge badge-pill badge-info'>" + activerecordCount + "</span><span class='recordText' style='color:#007bff;padding-right:5px;'>WIP</span><span class='badge badge-pill badge-info' style='background-color:#007bff !important;'>" + wiprecordCount + "</span></h4>";
                            } else {
                                listr = listr + "<h4>" + obj.value + " <span class='recordText' style='color:green;'>"+(labelObject['Active Records'] != null ? labelObject['Active Records'] : 'Active Records')+"</span><span class='badge badge-pill badge-info'>" + obj.count + "</span></h4>";
                            }


                            listr = listr + "<p>" + obj.definition + "</p>"
                                    + "</div>"
                                    + "</div></li>";
                            ulStr += listr
                        }
                        ulStr = "<div><ul class='ac-items'>" + ulStr + "</ul></div>";
                        $("#intellisenseDiv").html(ulStr);
//                        $("#updateIntellisense_0").css("color", "red");
                        $("#intellisenseboxId").show();
                        $("#intellisenseDiv").show();
                        $("#intellisensebox").show();
                        stopLoader();
                    } else {
                        flag = false;
                        stopLoader();
                        try {
                            $("#intellisenseDiv").html("");
                            $("#intellisensebox").hide();
                            $("#intellisenseDiv").hide();
                            $("#intellisenseboxId").hide();
                        } catch (e) {
                            stopLoader();
                        }
                        $("#intellisenseDiv").html("<div  class='ac-items' id='updateIntellisense_0'>No Class(s) found</div>");
                        $("#updateIntellisense_0").css("color", "red");
                        $("#intellisenseboxId").show();
                        $("#intellisenseDiv").show();
                        $("#intellisensebox").show();
                        stopLoader();

                    }


                },
                error: function (e) {
                    flag = true;
                }
            });
        } catch (e) {
            stopLoader();
        }

//            $("#templeteSearchResult").focus();
//            
//       -----------commented by Ajay-----------------------
//        $("#templeteSearchResult").autocomplete({
//
//            source: function (request, response) {
//
//                showLoader();
//                $.ajax({
//                    url: "descriptorSuggestions",
//                    dataType: "json",
//                    data: {
////                                term: $("#templeteSearchResult").val(),
//                        term: userVal.trim(),
//                        searchId: searchId,
//                        domainValue: domainValue,
//                    },
//                    success: function (item) {                      
//                            stopLoader();
//                            stopLoader();
//                            response(item);
//                        
//                    }
//                });
//
//
//            },
////            {source: "descriptorSuggestions?searchLimit=15",
//            minLength: 3,
//            create: function () {
//                $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
//                    $(".clear_input").show();
//                    // console.log(JSON.stringify(item));
//                    imageid = parseInt(imageid) + 1;
//                    return $('<li>')
//
//                            .append("<div class='dxpDictionaryMainClass'>"
//                                    + "<div class='media'>"
//                                    + "<img id='img" + imageid + "' onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id) src='" + item.content + "' class='align-self-start mr-3' style='width:60px'>"
//                                    + "<div class='media-body'>"
//                                    + "<h4>" + item.value + " <span class='recordText' style='color:green;'>Active Records</span><span class='badge badge-pill badge-info'>" + item.count + "</span></h4>"
//                                    + "<p>" + item.definition + "</p>"
//                                    + "</div>"
//                                    + "</div>")
////                                +"<div class='dxpDictionaryImageClass' style='width:30%'> <img id='img" + imageid + "' onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id)  style='color:inherit;background-color:inherit;width:40px;' src='" + item.content + "'/></div>"
////                                         +"<div class='dxpDictionaryValueClass' style='width:70%;color:inherit;background-color:inherit;' title='"+item.value+"'> " + item.value + "</div>"
////                                         +"<div class='dxpDictionaryCountClass' style='width:70%;color:inherit;background-color:inherit;'> " + item.count + "</div>"
////                                         +"<div class='dxpDictionaryDefClass' style='width:70%;color:inherit;background-color:inherit;' title='"+item.definition+"'> " + item.definition + "</div></div>")
//                            .appendTo(ul);
//
//                };
//
//            },
//            open: function () {
//                $('.ui-autocomplete').css('width', '600px'); // HERE
//                $('#ui-id-1').css('z-index', '1'); // HERE
//                $(".ui-autocomplete").addClass("dictonary-search-dropdown");
//            },
//            select: function (event, ui) {
//                console.log("selectedValue::: " + $.trim(ui.item.value));
//                console.log("Term Id::: " + $.trim(ui.item.termid));
//                var termId = $.trim(ui.item.termid);
//                termId = termId.toLocaleLowerCase();
//                $("#SearchResult").attr("data-conceptid", termId);
////                        $("#templeteSearchResult").blur();
////                        getPropertiesByClassName(ui.item.value, ui.item.termid, domainValue);
//                var e = event || window.event;
//                var code = e.keyCode
//                if (e.keyCode != 13) {
//                    getPropertiesByClassName(ui.item.value, ui.item.termid, domainValue);
//                }
//            }
//        });
//       -----------commented by Ajay-----------------------
    }
}
function dictionaryAutoComplete1(domainValue) {
//    showLoader();
    var searchId = $("#searchId").val();
    var dxpAdavanceSearchOptions = $('#floatingdxpAdavanceSearchOptions');
    if (dxpAdavanceSearchOptions.length == 0 || dxpAdavanceSearchOptions == undefined) {
        dxpAdavanceSearchOptions = $('#dxpAdavanceSearchOptions');
        if (dxpAdavanceSearchOptions.val() == 'D') {
            dxpAdavanceSearchOptions.on('change', function () {
                $("#SearchResult").autocomplete("destroy");
                stopLoader();
            });
        }
        $("#SearchResult").autocomplete(
                {
                    source: function (request, response) {
                        showLoader();
                        $.ajax({
                            url: "descriptorSuggestions",
                            dataType: "json",
                            data: {
                                term: ($("#SearchResult").val()).trim(),
                                searchId: searchId,
                                domainValue: domainValue
                            },
                            success: function (item) {
//                                $("#SearchResult").blur();
                                stopLoader();
                                stopLoader();
                                response(item);
                            }
                        });
                    },
//            {source: "descriptorSuggestions?searchLimit=15",
                    minLength: 2,
                    create: function () {
                        $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
                            $(".clear_input").show();
                            // console.log(JSON.stringify(item));
                            imageid = parseInt(imageid) + 1;
                            return $('<li>')
                                    .append("<div class='dxpDictionaryMainClass'>"
                                            + "<div class='media'>"
                                            + "<img id='img" + imageid + "' onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id) src='" + item.content + "' class='align-self-start mr-3' style='width:60px; height:60px; border-radius: 3px;'>"
                                            + "<div class='media-body'>"
                                            + "<h4>" + item.value + " <span class='recordText' style='color:green;'>Active Records</span><span class='badge badge-pill badge-info'>" + item.count + "</span></h4>"
                                            + "<p>" + item.definition + "</p>"
                                            + "</div>"
                                            + "</div>").appendTo(ul);
//                                    .append("<div class='dxpDictionaryMainClass'>"
//                                            + "<div class='media'>"
//                                            + "<img id='img" + imageid + "' onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id) src='" + item.content + "' class='align-self-start mr-3' style='width:60px'>"
//                                            + "<div class='media-body'>"
//                                            + "<h4>" + item.value + " <span class='recordText' style='color:green;'>Active Records</span><span class='badge badge-pill badge-info'>" + item.count + "</span></h4>"
//                                            + "<p>" + item.definition + "</p>"
//                                            + "</div>"
//                                            + "</div>").appendTo(ul);

                        };
                    },
                    open: function () {
                        $('.ui-autocomplete').css('width', '600px'); // HERE
                        $('#ui-id-1').css('z-index', '1'); // HERE
                        $(".ui-autocomplete").addClass("dictonary-home-dropdown");
                    },
                    select: function (event, ui) {
                        console.log("selectedValue::: " + $.trim(ui.item.value));
                        console.log("Term Id::: " + $.trim(ui.item.termid));
                        var termId = $.trim(ui.item.termid);
                        termId = termId.toLocaleLowerCase();
                        $("#SearchResult").attr("data-conceptid", termId);
                        $("#VisualizePageBody").hide();
//                        $("#SearchResult").blur();
//                        getPropertiesByClassName(ui.item.value, ui.item.termid, domainValue);
                        var e = event || window.event;
                        var code = e.keyCode
                        if (e.keyCode != 13) {
                            getPropertiesByClassName(ui.item.value, ui.item.termid, domainValue,'','','');
                        }
                    }
                });
    } else if (domainValue == "Y") {
        $("#SearchResult").autocomplete("destroy");
    } else {
        if (dxpAdavanceSearchOptions.val() == 'D') {
            dxpAdavanceSearchOptions.on('change', function () {
                $("#templeteSearchResult").autocomplete("destroy");
                stopLoader();
            });
        }
        var userVal = $("#templeteSearchResult").val();
        var flag = true;
        try {
            $.ajax({
                type: "post",
                url: "descriptorSuggestions",
                cache: false,
                data: {
                    term: userVal.trim(),
                    searchId: searchId,
                    domainValue: domainValue,
                },
                traditional: true,
                dataType: 'json',
                success: function (item) {
                    if (item != null && item.length > 0) {
                        flag = true;
                        $("#intellisenseDiv").html("");
                        $("#intellisensebox").hide();
                        $("#intellisenseDiv").hide();
                        $("#intellisenseboxId").hide();
                        $("#templeteSearchResult").autocomplete({

                            source: function (request, response) {

                                showLoader();
                                $.ajax({
                                    url: "descriptorSuggestions",
                                    dataType: "json",
                                    data: {
//                                term: $("#templeteSearchResult").val(),
                                        term: userVal.trim(),
                                        searchId: searchId,
                                        domainValue: domainValue,
                                    },
                                    success: function (item) {
                                        stopLoader();
                                        stopLoader();
                                        response(item);

                                    }
                                });


                            },
//            {source: "descriptorSuggestions?searchLimit=15",
                            minLength: 3,
                            create: function () {
                                $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
                                    $(".clear_input").show();
                                    // console.log(JSON.stringify(item));
                                    imageid = parseInt(imageid) + 1;
                                    return $('<li>')

                                            .append("<div class='dxpDictionaryMainClass'>"
                                                    + "<div class='media'>"
                                                    + "<img id='img" + imageid + "' onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id) src='" + item.content + "' class='align-self-start mr-3' style='width:60px'>"
                                                    + "<div class='media-body'>"
                                                    + "<h4>" + item.value + " <span class='recordText' style='color:green;'>Active Records</span><span class='badge badge-pill badge-info'>" + item.count + "</span></h4>"
                                                    + "<p>" + item.definition + "</p>"
                                                    + "</div>"
                                                    + "</div>")
//                                +"<div class='dxpDictionaryImageClass' style='width:30%'> <img id='img" + imageid + "' onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id)  style='color:inherit;background-color:inherit;width:40px;' src='" + item.content + "'/></div>"
//                                         +"<div class='dxpDictionaryValueClass' style='width:70%;color:inherit;background-color:inherit;' title='"+item.value+"'> " + item.value + "</div>"
//                                         +"<div class='dxpDictionaryCountClass' style='width:70%;color:inherit;background-color:inherit;'> " + item.count + "</div>"
//                                         +"<div class='dxpDictionaryDefClass' style='width:70%;color:inherit;background-color:inherit;' title='"+item.definition+"'> " + item.definition + "</div></div>")
                                            .appendTo(ul);

                                };

                            },
                            open: function () {
                                $('.ui-autocomplete').css('width', '600px'); // HERE
                                $('#ui-id-1').css('z-index', '1'); // HERE
                                $(".ui-autocomplete").addClass("dictonary-search-dropdown");
                            },
                            select: function (event, ui) {
                                console.log("selectedValue::: " + $.trim(ui.item.value));
                                console.log("Term Id::: " + $.trim(ui.item.termid));
                                var termId = $.trim(ui.item.termid);
                                termId = termId.toLocaleLowerCase();
                                $("#SearchResult").attr("data-conceptid", termId);
//                        $("#templeteSearchResult").blur();
//                        getPropertiesByClassName(ui.item.value, ui.item.termid, domainValue);
                                var e = event || window.event;
                                var code = e.keyCode
                                if (e.keyCode != 13) {
                                    getPropertiesByClassName(ui.item.value, ui.item.termid, domainValue,'','','');
                                }
                            }
                        });
                    } else {
                        flag = false;
                        try {
                            $("#templeteSearchResult").autocomplete("destroy");
                        } catch (e) {
                        }
                        $("#intellisenseDiv").html("<div  class='ac-items' id='updateIntellisense_0'>No Class(s) found</div>");
                        $("#updateIntellisense_0").css("color", "red");
                        $("#intellisenseboxId").show();
                        $("#intellisenseDiv").show();
                        $("#intellisensebox").show();

                    }


                },
                error: function (e) {
                    flag = true;
                }
            });
        } catch (e) {

        }

//            $("#templeteSearchResult").focus();
//            
//       -----------commented by Ajay-----------------------
//        $("#templeteSearchResult").autocomplete({
//
//            source: function (request, response) {
//
//                showLoader();
//                $.ajax({
//                    url: "descriptorSuggestions",
//                    dataType: "json",
//                    data: {
////                                term: $("#templeteSearchResult").val(),
//                        term: userVal.trim(),
//                        searchId: searchId,
//                        domainValue: domainValue,
//                    },
//                    success: function (item) {                      
//                            stopLoader();
//                            stopLoader();
//                            response(item);
//                        
//                    }
//                });
//
//
//            },
////            {source: "descriptorSuggestions?searchLimit=15",
//            minLength: 3,
//            create: function () {
//                $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
//                    $(".clear_input").show();
//                    // console.log(JSON.stringify(item));
//                    imageid = parseInt(imageid) + 1;
//                    return $('<li>')
//
//                            .append("<div class='dxpDictionaryMainClass'>"
//                                    + "<div class='media'>"
//                                    + "<img id='img" + imageid + "' onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id) src='" + item.content + "' class='align-self-start mr-3' style='width:60px'>"
//                                    + "<div class='media-body'>"
//                                    + "<h4>" + item.value + " <span class='recordText' style='color:green;'>Active Records</span><span class='badge badge-pill badge-info'>" + item.count + "</span></h4>"
//                                    + "<p>" + item.definition + "</p>"
//                                    + "</div>"
//                                    + "</div>")
////                                +"<div class='dxpDictionaryImageClass' style='width:30%'> <img id='img" + imageid + "' onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id)  style='color:inherit;background-color:inherit;width:40px;' src='" + item.content + "'/></div>"
////                                         +"<div class='dxpDictionaryValueClass' style='width:70%;color:inherit;background-color:inherit;' title='"+item.value+"'> " + item.value + "</div>"
////                                         +"<div class='dxpDictionaryCountClass' style='width:70%;color:inherit;background-color:inherit;'> " + item.count + "</div>"
////                                         +"<div class='dxpDictionaryDefClass' style='width:70%;color:inherit;background-color:inherit;' title='"+item.definition+"'> " + item.definition + "</div></div>")
//                            .appendTo(ul);
//
//                };
//
//            },
//            open: function () {
//                $('.ui-autocomplete').css('width', '600px'); // HERE
//                $('#ui-id-1').css('z-index', '1'); // HERE
//                $(".ui-autocomplete").addClass("dictonary-search-dropdown");
//            },
//            select: function (event, ui) {
//                console.log("selectedValue::: " + $.trim(ui.item.value));
//                console.log("Term Id::: " + $.trim(ui.item.termid));
//                var termId = $.trim(ui.item.termid);
//                termId = termId.toLocaleLowerCase();
//                $("#SearchResult").attr("data-conceptid", termId);
////                        $("#templeteSearchResult").blur();
////                        getPropertiesByClassName(ui.item.value, ui.item.termid, domainValue);
//                var e = event || window.event;
//                var code = e.keyCode
//                if (e.keyCode != 13) {
//                    getPropertiesByClassName(ui.item.value, ui.item.termid, domainValue);
//                }
//            }
//        });
//       -----------commented by Ajay-----------------------
    }
}
function repositoryAutoComplete(event) {
    showLoader();
    var paramsArray = [];
    var paramObj = {};
    paramObj.datatype = "string";
    paramObj.rangeflag = "N";
    paramObj.column = "PURCHASE";
    paramObj.value = $("#SearchResult").val();
    paramObj.operator = "LIKE";
    paramObj.symbol = "Like";
    paramObj.staged = "N";
    paramObj.andOrOperator = "AND";
    paramsArray.push(paramObj);
    paramObj.datatype = "string";
    paramObj.rangeflag = "N";
    paramObj.column = "TERM";
    paramObj.value = $("#SearchResult").val();
    paramObj.operator = "LIKE";
    paramObj.symbol = "Like";
    paramObj.staged = "N";
    paramObj.andOrOperator = "AND";
    paramsArray.push(paramObj);
    var dxpAdavanceSearchOptions = $('#dxpAdavanceSearchOptions');
    if (dxpAdavanceSearchOptions.val() == 'D') {
        dxpAdavanceSearchOptions.on('change', function () {
            $("#SearchResult").autocomplete("destroy");
        });
    }
    var keyCode = event.keyCode;
    if (keyCode == 13) {
        getRepositorySmartSearchResults($("#SearchResult").val());
        $(".ui-autocomplete").hide();
    } else {
        $("#SearchResult").autocomplete(
                {
                    source: function (request, response) {
                        showLoader();
                        $.ajax({
                            url: "repositorySuggestions",
                            dataType: "json",
                            data: {
                                term: $("#SearchResult").val(),
                                paramsArray: JSON.stringify(paramsArray),
                            },
                            success: function (item) {
                                stopLoader();
                                response(item);
                            }
                        });
                    },
                    open: function () {
                        $('.ui-autocomplete').css('width', '600px'); // HERE
                    },
//            {source: "descriptorSuggestions?searchLimit=15",
                    minLength: 2,
//                    create: function () {
//                        $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
//                            $(".clear_input").show();
//                            return $('<li>')
//                                    .append("<div class='dxpRespoClass' style='color:inherit;background-color:inherit;width:100%;border:none'>"
////                                         + "<div class='dxpItemClassName' style='width:70%;color:inherit;background-color:inherit;'> " + item.class + "</div> "
//                                            + "<div class='dxpRepoItemPurchaseName' style='color:inherit;background-color:inherit;'> " + item.purchase + "</div></div>")
//                                    .appendTo(ul);
//
//                        };
//                    },
                    create: function () {
                        // var userSearch = $("#SearchResult").val();
                        $(this).data('ui-autocomplete')._renderItem = function (ul, item) {

                            $(".clear_input").show();

                            //13122
                            var replacedTermPurchase;
                            var userSearch = $("#SearchResult").val();
                            $.each(item, function (index, value) {
                                var termPurchase = value;
                                var userSearchedUppCase = userSearch;
                                replacedTermPurchase = termPurchase.replace(userSearch, "<b style= 'color: red;'>" + userSearchedUppCase + "</b>");
                                console.log(replacedTermPurchase);
                                item.purchase = replacedTermPurchase;
                            });

                            return $('<li>')
                                    .append("<div class='dxpRespoClass' style='color:inherit;background-color:inherit;width:100%;border:none'>"
//                                         + "<div class='dxpItemClassName' style='width:70%;color:inherit;background-color:inherit;'> " + item.class + "</div> "
                                            + "<div class='dxpRepoItemPurchaseName' style='color:inherit;background-color:inherit;'> " + item.purchase + "</div></div>")
                                    .appendTo(ul);

                        };
                    },

                    select: function (event, ui) {
                        console.log("selectedValue::: " + $.trim(ui.item.value));
                        console.log("Term Id::: " + $.trim(ui.item.termid));
                        var termId = $.trim(ui.item.termid);
                        termId = termId.toLocaleLowerCase();
                        $("#SearchResult").attr("data-conceptid", termId);
                        getRepositorySmartSearchResults($("#SearchResult").val());
                    }
                });
    }
}
function getDictionarySearchResults(className, reqType, templateFlag, templateGrid) {
//    $("#searchId").val("");
    var dataArray = [];
    var dataObject = {};
    if (className != null && className != '') {
        var i = 0;
        dataArray = [];
        $("#dictionarytbl tbody tr").each(function () {
            console.log("$(#propval + i).val():::" + $("#propval" + i).val());
            console.log("$(#propval + i).val():::" + $("#propuom" + i).val());
            if (!($.trim($("#tb" + i).val()) == "" && $.trim($("#propuom" + i).val() == ""))) {
                dataObject = {};
                dataObject.property = $.trim($(this).find("td:eq(0)").text());
                dataObject.propertyid = $.trim($("#cb" + i).attr("data-propertyid"));
                dataObject.datatype = $.trim($(this).find("td:eq(1)").text());
                dataObject.value = $.trim(($("#tb" + i).val()).toUpperCase());
                dataObject.uom = $.trim($("#propuom" + i).val());
                dataObject.range = $.trim($("#trdic" + i).attr('data-isrange'));
//                dataObject.minvalue = $.trim($("#propminval" + i).val());
//                dataObject.maxvalue = $.trim($("#propmaxval" + i).val());
                dataObject.minvalue = ($.trim($("#propminval" + i).val())) ? $.trim(($("#propminval" + i).val()).toUpperCase()) : $.trim($("#propminval" + i).val());
                dataObject.maxvalue = ($.trim($("#propmaxval" + i).val())) ? $.trim(($("#propmaxval" + i).val()).toUpperCase()) : $.trim($("#propmaxval" + i).val());
//                dataObject.conceptId = $("#SearchResult").attr("data-conceptid");
                dataObject.conceptId = $("#idxpDictionayFormHeaderName").attr("data-conceptid");
//                var classid = $("#idxpDictionayFormHeaderName").attr("data-conceptid");
                dataObject.classTerm = className.toUpperCase();
                dataObject.valueOp = $("#dictddw" + i).val();
                dataArray.push(dataObject);
            }
            i++;
        });
        if (dataArray.length == 0) {
            dataObject = {};
            dataObject.property = "";
            dataObject.propertyid = "";
            dataObject.datatype = "";
            dataObject.value = "";
            dataObject.uom = "";
            dataObject.range = "";
            dataObject.minvalue = "";
            dataObject.maxvalue = "";
            var conceptId = $("#dictionarytext").attr("data-conceptid");
            if (conceptId != null && conceptId != '') {
                dataObject.conceptId = $("#dictionarytext").attr("data-conceptid");
                dataObject.classTerm = className.toUpperCase();
            } else {
                dataObject.conceptId = $("#dictionarytext").attr("data-conceptid");
                dataObject.classTerm = className.toUpperCase() + "%";
            }

            dataArray.push(dataObject);
//            $("#currentSearchData").val(JSON.stringify(dataArray));
        }
        $("#currentSearchData").val(JSON.stringify(dataArray));
        $("#currentSearchCatType").val('D');
        var domain = $("#currentDomain").val();
        var domainlist = [domain];
        var regGrdiId = $("#regGrdiId").val();
        var templateFlag = $("#searchtemplateFlag").val();
        var templeteGrid = $("#searchtemplateGrid").val();
        console.log("dataArray:::" + JSON.stringify(dataArray));
//        searchResults('D', '', dataArray, '', '', templateFlag, templateGrid);
//        getsearchitem('Y', '', '', '', '', 'D', 'MM_CREATE_TEMPLATE');
//        searchResults('D', '', dataArray, '', '', 'Y', 'MM_CREATE_TEMPLATE') 
//        getsearchitem("Y", domain, domainlist, '', regGrdiId, 'D', templeteGrid, dataArray);
        if (templateFlag != null && templateFlag != '' && templateFlag != 'undefined' && templateFlag != undefined
                && templateFlag == 'N') {
            searchResults('D', '', dataArray, '', '', templateFlag, templateGrid);
        } else {
            getsearchitem(templateFlag, '', '', '', '', 'D', templateGrid, dataArray);
        }


//        $("#currentSearchData").val("");
    } else {
//        dataArray = [];
//        dataObject = {};
//            dataObject.property = "";
//            dataObject.propertyid = "";
//            dataObject.datatype = "";
//            dataObject.value = "";
//            dataObject.uom = "";
//            dataObject.range = "";
//            dataObject.minvalue = "";
//            dataObject.maxvalue = "";
//            var conceptId = $("#dictionarytext").attr("data-conceptid");
//            if (conceptId != null && conceptId != '') {
//                dataObject.conceptId = $("#dictionarytext").attr("data-conceptid");
//                dataObject.classTerm = className.toUpperCase();
//            } else {
//                dataObject.conceptId = $("#dictionarytext").attr("data-conceptid");
//                dataObject.classTerm = className.toUpperCase() + "%";
//            }
//
//            dataArray.push(dataObject);
//            $("#currentSearchData").val(JSON.stringify(dataArray));
        searchResults('D', '', dataArray, '', '', templateFlag, templateGrid);
        console.log("Class Term Empty");
    }
}
function getDictionaryPanelShow(value) {
    if (paramPanelShowFlag) {
        $("#searchDxpSplitter").jqxSplitter({
            width: '100%',
            height: '100%',
            theme: 'energyblue',
            orientation: 'vertical',
            splitBarSize: 0,
            panels: [{size: 1000}]
        });
        paramPanelShowFlag = false;
    } else {
        $("#searchDxpSplitter").jqxSplitter({
            width: '100%',
            height: '100%',
            orientation: 'vertical',
            splitBarSize: 0,
            panels: [{size: 400}]
        });
        paramPanelShowFlag = true;
    }
}
function getParamPanelShow(value) {
    if (searchPanelShowFlag) {
        $("#searchDxpSplitter").jqxSplitter({
            width: '100%',
            height: '100%',
            theme: 'energyblue',
            orientation: 'vertical',
            splitBarSize: 0,
            panels: [{size: 1000}]
        });
        searchPanelShowFlag = false;
    } else {
        $("#searchDxpSplitter").jqxSplitter({
            width: '100%',
            height: '100%',
            orientation: 'vertical',
            splitBarSize: 0,
            panels: [{size: 400}]
        });
        searchPanelShowFlag = true;
    }
}
function getClassficationPanelShow(value) {
    if (classificatePanelShowFlag) {
        $("#searchDxpSplitter").jqxSplitter({
            width: '100%',
            height: '100%',
            theme: 'energyblue',
            orientation: 'vertical',
            splitBarSize: 0,
            panels: [{size: 1000}]
        });
        classificatePanelShowFlag = false;
    } else {
        $("#searchDxpSplitter").jqxSplitter({
            width: '100%',
            height: '100%',
            orientation: 'vertical',
            splitBarSize: 0,
            panels: [{size: 400}]
        });
        classificatePanelShowFlag = true;
    }
}
function clearParamSearch(id) {
    $("#" + id + " input[type=checkbox]").prop('checked', false);
    $("#" + id + " input[type=text]").val('');
    $("#" + id + " input[type=text]").removeAttr('disabled');
    $('select').each(function () {
        $(this).prop('selectedIndex', 0);
        $(this).attr('data-staged', 'N');
        toggleOperatorLOV($(this).attr('id').toString().replace("ddw", ""));
    });
}
function toggleOperatorLOV(rowid) {
    if ($.trim($("#ddw" + rowid).val()) == 'BETWEEN') {
        $("#tbmin" + rowid).show();
        $("#tbmax" + rowid).show();
        $("#tbmaxddw" + rowid).show();
        $("#tbminddw" + rowid).show();
        $("#to" + rowid).show();
        $("#tb" + rowid).hide();
        $("#tbddw" + rowid).hide();
        $("#tb" + rowid).removeAttr('disabled');
    } else if ($.trim($("#ddw" + rowid).val()) == 'IS' || $.trim($("#ddw" + rowid).val()) == 'IS NOT') {
        $("#tbddw" + rowid).show();
        $("#tbmin" + rowid).hide();
        $("#tbmax" + rowid).hide();
        $("#to" + rowid).hide();
        $("#tb" + rowid).show();
        $("#tbmaxddw" + rowid).hide();
        $("#tbminddw" + rowid).hide();
        $("#tb" + rowid).val('NULL');
        $("#tb" + rowid).attr('disabled', 'disabled');
    } else {
        $("#tbddw" + rowid).show();
        $("#tbmin" + rowid).hide();
        $("#tbmax" + rowid).hide();
        $("#to" + rowid).hide();
        $("#tb" + rowid).show();
        $("#tbmaxddw" + rowid).hide();
        $("#tbminddw" + rowid).hide();
        $("#tb" + rowid).removeAttr('disabled');
        if ($.trim($("#tb" + rowid).val()) == 'NULL')
        {
            $("#tb" + rowid).val('');
        }
    }
}
function clearDictSearch(result1, result1) {
//    var length = $('#dictionarytbl').find('tbody').find('tr').length;
//    for (var i = 0; i < length; i++) {
//        $("#tb" + i).val('');
//        $("#propuom" + i).val('');
//    }
    var j = 0;
    $("#dictionarytbl tbody tr").each(function () {
        $("#tb" + j).val('');
        $("#propuom" + j).val('');
        j++;
    });

}
function getFormPanelShow() {
    $("#thirdDxpSplitter").hide();
    $(".dxpFormHideShow").show();
}
function saveSearchConfirm(searchType) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }



    $("#dialog1").html("");
    var persConfirmation = "Review personalization info before saving the search";
    persConfirmation = labelObject[persConfirmation] != null ? labelObject[persConfirmation] : persConfirmation;
    var results = "<div style='display:block;margin-bottom: 1%;'>" + persConfirmation + "</div>"
            + "<input type='text' id='searchName' class='saveSrchinput jqx-widget-content jqx-widget-content-arctic jqx-input jqx-input-arctic jqx-widget jqx-widget-arctic jqx-rc-all jqx-rc-all-arctic' placeholder='Name your search'/>"
            // + "<div id='searchNameError' style='color:red;display:none;'>" + labelObject["Should not be null"] != null ? labelObject["Should not be null"] : "Should not be null" + "</div>";
            + "<div id='searchNameError' style='color:red;display:none;'>Should not be null</div>";
    var dialogSplitMessage = dialogSplitIconText(results, "Y");
    $("#dialog1").append(dialogSplitMessage);
    $("#dialog1").dialog({resizable: false,
        title: labelObject['Search Criteria'] != null ? labelObject['Search Criteria'] : 'Search Criteria',
        modal: true,
        height: 180,
        width: 500,
        fluid: true,
        buttons: [
            {
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    ajaxStop();
                    var searchName = $("#searchName").val();
                    //  var searchName ='Parametric Search';
                    if (searchName != null && searchName != '') {
                        $("#searchNameError").hide();
                        $(this).html("");
                        try {
                            $(this).dialog("destroy");
                        } catch (e) {

                        }
                        try {
                            $(this).dialog("close");
                        } catch (e) {

                        }
                        saveSearch(searchType, searchName);

                    } else {
                        $("#searchNameError").show();
                    }

                }
            },
            {
                text: (labelObject['Close'] != null ? labelObject['Close'] : 'close'),
                click: function () {
                    ajaxStop();
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
            }
        ],
        open: function () {
            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
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
    }
    );
}
function saveSearch(searchType, searchName) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }

    searchName = searchName.replace(/^\s+|\s+$/g, "");
    var savedSearchObject = null;
    var savedSearchArray = [];
    var tableId = "paramsearch";
    $("#pers_criteria  > tbody  > tr").each(function () {
        //$.trim($(this).find("td:eq(1)").find("input[type='checkbox']").is(':checked'));
        // console.log(++i);
        console.log("Column Stat:: Ready" + $.trim($(this).find("td:eq(2)").find("input[type='checkbox']").attr("data-property")));
        savedSearchObject = new Object();
        var columnName = $(this).find("td:eq(0)").attr('data-col');
        savedSearchObject.persCol = columnName;
        savedSearchObject.searchFlag = $(this).find("td:eq(1)").find("input[type='checkbox']").is(':checked') == true ? "Y" : "N";
        savedSearchObject.displayFlag = $("#" + columnName + "_display").is(':checked') == true ? "Y" : "N";
        savedSearchObject.freezeFlag = $("#" + columnName + "_freeeze").is(':checked') == true ? "Y" : "N";
        savedSearchObject.defaultFlag = $("#" + searchType + $(this).find("td:eq(0)").attr('data-col')).css('display') == 'none' ? "N" : "Y";

        var i = 0;
        $("#" + tableId + " tbody tr").each(function () {
            var isAllow = false;
            var colname = $(this).attr('data-colname');
            if (colname == columnName) {
                var tbmin = $("#Ptbmin" + i).val();
                var tbmax = $("#Ptbmax" + i).val();
                var value = $("#Ptb" + i).val();
                console.log("colname::" + colname + "::value::" + value + "::Ptbmin::" + tbmin + ":::Ptbmax:::" + tbmax);
                if (value != null && value != '') {
                    isAllow = true;
                } else if (tbmin != null && tbmax != null && tbmin != '' && tbmax != '') {
                    isAllow = true;
                }
                var type = $("#Ptb" + i).attr("type");
                if (type != null && type == 'checkbox') {
                    var textval = "N";
                    if ($("#Ptb" + i).is(':checked')) {
                        isAllow = true;
                    } else {
                        isAllow = false;
                    }
                }
                console.log("isAllow::::" + isAllow);
                if (isAllow) {
                    var andOrOperator = $("#andOrOperator" + i).val();
                    var typeSelectStr = $("#typeSelectStr" + i).val();
                    savedSearchObject.rangeflag = $.trim($(this).attr('data-range')) == 'Y' ? 'Y' : 'N';
                    savedSearchObject.minvalue = $.trim($("#Ptbmin" + i).val());
                    savedSearchObject.maxvalue = $.trim($("#Ptbmax" + i).val());
                    var type = $("#Ptb" + i).attr("type");
                    if (type != null && type == 'checkbox') {
                        var textval = "N";
                        if ($("#Ptb" + i).is(':checked')) {
                            textval = "Y";
                        } else {
                            textval = "N";
                        }
                        savedSearchObject.value = textval;
                    } else {
                        savedSearchObject.value = $.trim($("#Ptb" + i).val());
                    }
                    savedSearchObject.andOrOperator = andOrOperator;
                    savedSearchObject.typeSelectStr = typeSelectStr;
                    savedSearchObject.operator = $("#Pddw" + i).val();
                    savedSearchObject.symbol = $.trim($("#Pddw" + i).find('option:selected').text());
                    savedSearchObject.staged = $("#Pddw" + i).attr('data-staged') == "Y" ? "Y" : "N";

                }

                return false;
            }
            ++i;
        });
        savedSearchArray.push(savedSearchObject);

        // }
    });
    $.ajax({
        type: "POST",
        url: 'saveSrchCritera',
        data: {
            searchName: searchName,
            searchType: searchType,
            searchitems: JSON.stringify(savedSearchArray)
        },
        traditional: true,
        cache: false,
        success: function (response) {
            if (response == "success") {
                var results = "Saved search criteria Successfully";
                $("#searchddw").append("<option value=" + searchName.toString().toUpperCase() + ">" + searchName.toString().toUpperCase() + "</option>");
                var dialogSplitMessage = dialogSplitIconText(results, "Y");
                var modalObj = {
                    title: 'Search Criteria',
                    body: dialogSplitMessage
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        click: function () {
                            stopLoader();
                            $("#savedSearchName").val(searchName.toString().toUpperCase());
                            getPersonalizationDataOpt('', searchType);
                        },
                        text: 'Close',
                        click: function () {

                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
            } else if (response == "duplicatename") {
                var results = "Please provide different name for search criteria as this name exists";
                var dialogSplitMessage = dialogSplitIconText(results, "Y");
                var modalObj = {
                    title: 'Search Criteria',
                    body: dialogSplitMessage
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
            } else if (response == "failure") {
                var results = "Unable to save search criteria";
                var dialogSplitMessage = dialogSplitIconText(results, "Y");
                var modalObj = {
                    title: 'Search Criteria',
                    body: dialogSplitMessage
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
            } else if (response == "blank") {
                var results = "Search criteria name can't be blank";
                var dialogSplitMessage = dialogSplitIconText(results, "Y");
                var modalObj = {
                    title: 'Search Criteria',
                    body: dialogSplitMessage
                };
                var buttonArray = [
                    {
                        text: 'Close',
                        click: function () {
                            stopLoader();
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
            }
        },
    });
}
function getCategoryTreeForm(searchId, reqType) {
    searchId = "DXP_CATEGORY_TREE";
    $("#searchsettingsSplitter").children("#jqxTreeDiv").appendTo($("#expanderDesc").children("#jqxTreeDiv"));
    $("#searchsettingsSplitter").children("#jqxTreeDiv").removeAttr('id');
    $.ajax({
        type: "POST",
        url: 'getGenericDxpTree',
        data: {
            'treeId': searchId,
        },
        traditional: true,
        cache: false,
        success: function (treeObject) {
            $("#searchDefaultSplitter").hide();

//            $("#pageBodyContent").html(treeObject['divid']);
            $("#dxpClassficationAppendClass").html(treeObject['divid']);
//                $("#DxpParamSplitterDotsClass").show();
            if (treeObject != null && !jQuery.isEmptyObject(treeObject)) {
                $("#expanderDesc").html(treeObject['treeDesc']);//treeDesc
                var extTreeParams = {};
                extTreeParams = treeObject['extTreeParams'];
                $("#selectedFldValue").val((treeObject['treeColumnObj'])[0]['HL_FLD_NAME']);
                selectedColumnData = (treeObject['treeColumnObj'])[0];
                if (extTreeParams != null && !jQuery.isEmptyObject(extTreeParams)) {
                    $("#extTreeParams").val(JSON.stringify(extTreeParams));
                }
                $("#firstDxpSplitterTree").jqxSplitter({
                    width: '100%',
                    height: '100%',
                    orientation: 'vertical',
                    splitBarSize: 0,
                    panels: [{size: 400}]
                });

                treeConfig(treeObject);
                dxpTreeSearch();
            }
        }
    });
}
function dxpTreeSearch() {
    $("#dxptreeSearchResult").autocomplete(
            {
                source: function (request, response) {
                    showLoader();
                    $.ajax({
                        url: "classificationAllSuggestions",
                        dataType: "json",
                        data: {
                            term: $("#dxptreeSearchResult").val()
                        },
                        success: function (item) {
                            stopLoader();
                            response(item);
                        }
                    });
                },
                minLength: 2,
//                create: function () {
//                    $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
//                        $(".clear_input").show();
//                        // console.log(JSON.stringify(item));
//                        imageid = parseInt(imageid) + 1;
//                        return $('<li>')
//
//                                .append("<div class='dxpClassificationMainClass'>"
//                                        + "<div class='media'>"
//                                        + "<div class='media-body' title='" + item.definition + "' style='font-size: 10px;'>" + item.value + "</div>"
//                                        + "<img id='img" + imageid + "' onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id) src='" + item.content + "' class='align-self-start mr-3' style='width:22px'>"
//                                        + "</div>"
//                                        + "</div>")
//                                .appendTo(ul);
//
//                    };
//                },
                create: function () {
                    $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
                        $(".clear_input").show();


                        //13122
                        var replacedTermPurchase;
                        var userSearch = $("#dxptreeSearchResult").val();
                        $.each(item, function (index, value) {

                            var termValue = item['value'];
                            var userSearchedTreeUppCase = userSearch.toUpperCase();
                            replacedTermValue = termValue.replace(userSearchedTreeUppCase, "<b style= 'color: red;'>" + userSearchedTreeUppCase + "</b>");
                            console.log(replacedTermPurchase);
                            item['newValue'] = replacedTermValue;
                        });

                        // console.log(JSON.stringify(item));
                        imageid = parseInt(imageid) + 1;
                        return $('<li>')

                                .append("<div class='dxpClassificationMainClass'>"
                                        + "<div class='media'>"
                                        + "<div class='media-body' title='" + item.definition + "' style='font-size: 10px;'>" + item['newValue'] + "</div>"
                                        + "<img id='img" + imageid + "' onmouseover='templeteMouseOver(id)' onmouseout=templeteMouseOut(id) src='" + item["content"] + "' class='align-self-start mr-3' style='width:22px'>"
                                        + "</div>"
                                        + "</div>")
                                .appendTo(ul);

                    };
                },
                open: function () {
                    $('.ui-autocomplete').css('width', '260px'); // HERE
                },
                select: function (event, ui) {
                    console.log("selectedValue::: " + $.trim(ui.item.value));
                    console.log("Term Id::: " + $.trim(ui.item.termid));
                    var termId = $.trim(ui.item.termid);
                    termId = termId.toLocaleLowerCase();
                    $("#dxptreeSearchResult").attr("data-conceptid", termId);
                    updateIntellisense(ui.item.termid, ui.item.value);
                }
            });

//    $("#dxptreeSearchResult").keyup(function (e) {
//        var resultVal12 = $("#dxptreeSearchResult").val();
//         $(".dxpTreesearchinnerclass").show();
//        if ($("#dxptreeSearchResult").val() != null && $("#dxptreeSearchResult").val() != '') {
//            $(".clear_searchField").show();
//        } else {
//            $(".clear_searchField").hide();
//        }
//        console.log('Keyevent raised:::' + e.keyCode);
//        var ajaxTime = "";
//        var totalTime = "";
//        var SelectedTabData = $("#localedd").val();
//        //var
//        if (e.keyCode == 32 //Space
//                || e.keyCode == 45 //Insert
//                || e.keyCode == 33 //Page Up
//                || e.keyCode == 34 //Page Down
//                || e.keyCode == 36//Home
//                || e.keyCode == 16 //Shift
//                || e.keyCode == 17 //Ctrl
//                || e.keyCode == 18 //Alt
//                || e.keyCode == 35//End
//                || e.keyCode == 37 //Left arrow
//                || e.keyCode == 38 //Up arrow
//                || e.keyCode == 39 //Right arrow
//                || e.keyCode == 40//Down arrow
//                || e.keyCode == 89//left click
//                ) {
//            console.log('Ajax Not sent');
//        } else {
//            if (e.keyCode == 13 //Enter
//                    && $(this).val().length > 2) {
//                $("#intellisenseTree").html("");
//                $("#jqxTreeDiv").html("");
//
//                //  delay(function () {
//                var resultVal = $("#dxptreeSearchResult").val();
//                resultVal = resultVal.replace(/\s\s+/g, ' ');
//                $("#dxptreeSearchResult").val(resultVal);
//                if (resultVal != null && resultVal != '' && resultVal.length > 2) {
//                    DxpSearchGridResults();
//                } else {
//                    var results = "Enter a keyword of at least 3 chars,ignoring special chars(@.,;:/etc)  to search";
//                    var dialogSplitMessage = dialogSplitIconText(results, "Y");
//                    var modalObj = {
//                        title: 'Message',
//                        body: dialogSplitMessage
//                    };
//                    var buttonArray = [
//                        {
//                            text: 'Close',
//                            click: function () {
//                                stopLoader();
//                            },
//                            isCloseButton: true
//                        }
//                    ];
//                    modalObj['buttons'] = buttonArray;
//                    createModal("dataDxpSplitterValue", modalObj);
//                }
//            } else {
//                userval = $("#dxptreeSearchResult").val();
//                userval = userval.replace(/\s\s+/g, ' ');
//                if (userval != null && userval != '') {
//                    $.ajax({
//                        type: "POST",
//                        url: "dxpsearchSuggestion",
//                        data: {
//                            searchtext: userval,
//                            SelectedListData: SelectedTabData
//                        },
//                        success: function (response) {
//                            if (response != null && response != "") {
//                                $("#intellisenseTree").html("");
//                                var responseObj = JSON.parse(response);
//                                if (responseObj != null && response != '') {
//                                    $("#intellisenseTree").html(responseObj['suggestion']);
//                                    totalTime = new Date().getTime() - ajaxTime;
//                                    totalTime = parseInt(totalTime) / 1000;
//                                    $("#dxpTreeintellisense").show();
//                                    // $("#jqxTreeDiv").hide();
//                                }
//                            } else {
//                                $("#text_count").text("No record(s) found");
//                                $("#tooltipdiv").html("");
//                                $("#tooltipdiv").jqxTooltip({'content': 'No record(s) found', theme: 'energyblue'});
//                                $("#tooltipdiv").jqxTooltip("open");
//                                $("#dxpTreeintellisense").hide();
//                                $("#jqxTreeDiv").show();
//                            }
//                        },
//                        error: function (e) {
//                            console.log(e);
//                            stopLoader();
//                            sessionTimeout(e);
//                        }
//
//                    });
//                } else {
//                    $("#intellisenseTree").html("");
//                }
//            }
//        }
//
//    });

}
$(document).ready(function ()
{
    $("#settingheaderImage").click(function () {
        $("#SearchResult").val("");
    });
})
function getRepositorySmartSearchResults(searchedValue) {
//    showLoader();
    showLoader();//30322
    $.ajax({
        type: "POST",
        url: 'showDxpRepositorySearchResults',
        data: {
            'typedValue': searchedValue,
            'domainValue': 'PRODUCT',
            'sortFlag': "",
            'typeValueChange': 'Y'
        },
        traditional: true,
        cache: false,
        success: function (result) {
            stopLoader();
            $("#mainDxpSplitter").show();
            $('#firstDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
            $("#thirdDxpSplitter").hide();
            $("#secondDxpSplitterData").html(result);

        }
    });
}
function getShowDxpRepClassSearchResults(className, typedValue) {
//    $("#ui-id-1").hide();
    $("#intellisense").hide();
    $("#thirdDxpSplitter").val('');
    $("#fourthDxpSplitter").val('');
    $("#thirdDxpSplitter").show();
    $("#excelExportsearchResults").show();
    $(".searchResultsList").hide();
    $(".searchDXPCreate").hide();
//    $('#thirdDxpSplitter').jqxSplitter('expand');
    secondPanelShowFlag = true;
    $(".searchResultsList").addClass('activeResult');

    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'showSearchDxpClassResults',
        data: {
            'typedValue': typedValue,
            'className': className,
            'gridId': "DXP_REP_SEARCH_VIEW"
        },
        traditional: true,
        cache: false,
        success: function (response) {
            var resultObj = {};
            resultObj = JSON.parse(response);
            resultObj['className'] = className;
            resultObj['typedValue'] = typedValue;
            gridConfig(resultObj, 0, [], "");
            $("#searchGrid").show();

        }
    });
}

async function smartTextSearch(typediId, domainId, enterFlag) {
    var domainValue = $('#SelectedValue').val();
    var userval = $('#SearchResult').val();
    var domainValue1 = $('#selectFilter').jqxDropDownList('getSelectedItem');
    var dxpAdavanceSearchOptions = $('#dxpAdavanceSearchOptions').val();
    if (domainValue1 != null && domainValue1 != undefined) {
        var div = domainValue1['html'];
        $("#selectdomainListId").remove();
        $("body").append("<div id='selectdomainListId' class='selectdomainListClass'></div>");
        $("#selectdomainListId").append(div);
        var searchdomain = $("#selectdomainListId").find("div").attr('data-filter-value');
        var searchattr = searchdomain.split(":");
        var templateflag = searchattr[3];
        $("#searchtemplateFlag").val(templateflag);

    } else {
        searchdomain = "FDXP_GENERIC_SEARCH:ALL";
        searchattr = searchdomain.split(":");
        dxpAdavanceSearchOptions = "S";
    }
    if (userval != null && userval != '' && userval != undefined) {
        showLoader();
        $("#typedResult").val(userval);
        showLoader();
        var domain = searchattr[1];
        var domainlist = searchattr[0];
        $("#intellisense").hide();

        if (templateflag != 'Y' || templateflag == null || templateflag == undefined || templateflag == '') {
            DXPSsearchResults('S', userval, searchattr[1], searchattr[0]);
        } else {
            let mypromise = new Promise(resolve => {

                getsearchitem("Y", domain, domainlist, '', "", '', "");
            });
            await mypromise;
        }







//                    getclassData(userval, searchdomain);
//        getsearchitem("Y", Domain, domainlist, '', gridId, '', templeteGrid);

//        DXPSsearchResults('S', userval, searchattr[1], searchattr[0], "STG_GENERIC_SEARCH", searchattr[2], "N");

//                    smartTextSearch(userval, domainValue, 'Y');
//                    DXPSmartsearchResults(domainValue);
        stopLoader();
    } else {
        stopLoader();
        var modalObj = {
            title: 'Message',
            body: "Enter a keyword of at least 1 char,ignoring special chars(@.,;:/ etc)  to search"
        };
        createModal("dataDxpSplitterValue", modalObj);
    }
}
function classificationsearchResults(searchType, reqType, paramsArray, cattype, searchName, fromTabflag) {
    showLoader();
    var searchId = $("#searchId").val();
//
//    if (fromTabflag != null && fromTabflag != '' && fromTabflag != 'null' && fromTabflag != 'undefined'
//            && fromTabflag != undefined && fromTabflag == 'Y') {
//        try {
//            $("#searchResults").jqxGrid("destroy");
//        } catch (e) {
//        }
//    } else {
//        try {
//            $("#searchResults").jqxGrid("destroy");
//            $("#searchResults").remove();
//        } catch (e) {
//            $("#searchResults").remove();
//        }
//    }
    $("#searchResults").remove();
    $("#visionClassficationGridResults").remove();
    var isFirstTime = true;
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
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
        $("#searchResultsParamsData").attr("data-searchreqType", "");
        $("#searchResultsParamsData").attr("data-searchName", "");
        $("#searchResultsParamsData").attr("data-searchtemplateFlag", "");
        $("#searchResultsParamsData").attr("data-searchtemplateGrid", "");
    } catch (e) {

    }
    try {
        $("#searchResultsParamsData").attr("data-searchflag", "Y");
        $("#searchResultsParamsData").attr("data-searchType", searchType);
        $("#searchResultsParamsData").attr("data-searchId", searchId);
        $("#searchResultsParamsData").attr("data-searchView", "");
        $("#searchResultsParamsData").attr("data-searchrole", "");
        $("#searchResultsParamsData").attr("data-searchresultflag", "");
        $("#searchResultsParamsData").attr("data-searchuserval", "");
        $("#searchResultsParamsData").attr("data-searchText", "");
        $("#searchResultsParamsData").attr("data-searchdomainValue", "");
        $("#searchResultsParamsData").attr("data-searchparamsArray", JSON.stringify(paramsArray));
        $("#searchResultsParamsData").attr("data-searchcattype", cattype);
        $("#searchResultsParamsData").attr("data-searchreqType", reqType);
        $("#searchResultsParamsData").attr("data-searchName", searchName);
        $("#searchResultsParamsData").attr("data-searchtemplateFlag", "");
        $("#searchResultsParamsData").attr("data-searchtemplateGrid", "");
    } catch (e) {

    }

    var locale = $("#localedd").find(':selected').data('code');
    if (locale != null && locale != '') {

    } else {
        locale = "";
    }
    var langID = $("#localedd").val() != null ? $("#localedd").val() : "";

    $('#search_count').text("");
    var resultStartTime = new Date().getTime();
    $.ajax({
        type: "POST",
        url: 'genericSearchGrid',
        data: {
            'searchType': searchType,
            'langID': langID,
//            'langID': $("#localedd").val(),
            'locale': locale,
//            'locale': locale,
            searchName: searchName,
            searchId: searchId
        },
        traditional: true,
        cache: false,
        success: function (gridResultObj) {
            $("#visionClassficationTemplateIds").css("display", "none");
//             $('.accordion').on('click', '.accordion-trigger', function (e) {
//                        e.preventDefault();
//                        $('.accordion-contents:visible').slideUp(300);
//                        $(this)
//                                .next('.accordion-contents')
//                                .not(':animated')
//                                .slideToggle(300);
//                    });


//            $("#searchDxpSplitter").jqxSplitter({
//                width: '100%',
//                height: '100%',
//                orientation: 'vertical',
//                splitBarSize: 0,
//                panels: [{size: 400}]
//            });
            if (gridResultObj != null) {

                $("#accordion").accordion({active: parseInt($("#accordion").attr("data-searchresults"))});
                $(".accordion").append("<div id='visionClassficationGridResults' class=\"accordion-contents accordionGridResults\"><div id='searchResults'></div></div>");

//                $("#accordion").accordion({active: 4});
//                try {
//                    if (fromTabflag != null && fromTabflag != '' && fromTabflag != 'null' && fromTabflag != 'undefined'
//                            && fromTabflag != undefined && fromTabflag == 'Y') {
//                    } else {
//                        $("#accordion").accordion({active: parseInt($("#accordion").attr("data-searchresults"))});
//                        $(".accordion").append("<div id='visionClassficationGridResults' class=\"accordion-contents accordionGridResults\"><div id='searchResults'></div></div>");
//                    }
//                } catch (e) {
//                    $("#accordion").accordion({active: parseInt($("#accordion").attr("data-searchresults"))});
//                    $(".accordion").append("<div id='visionClassficationGridResults' class=\"accordion-contents accordionGridResults\"><div id='searchResults'></div></div>");
//                }
                //$("#searchresultsSplitter").show();
                //$("#searchresultsSplitter").html("<div id='searchResults'></div>");
//                $("#dxp1Seconddiv").html("<div id='searchResults'></div>");
                //need to assign all hidden fields like hrefColumn,linkedColumns,stripValue,imageColumn,imageTable,imageTableColumn
                var hrefObj = {}; //hrefObj
                hrefObj = gridResultObj['hrefObj'];
                $("#hrefColumn").val(hrefObj['hrefColumn'] != null ? hrefObj['hrefColumn'] : "");
//                        $("#hrefColumn").val(hrefObj['hrefColumn']);
                $("#linkedColumns").val(hrefObj['linkedColumns']);
                $("#stripValue").val(hrefObj['stripValue']);
                $("#imageColumn").val(hrefObj['imageColumn']);
                $("#imageTable").val(hrefObj['imageTable']);
                $("#imageTableColumn").val(hrefObj['imageTableColumn']);
                $("#hrefGridId").val(hrefObj['hrefGridId']);
                var hiddenObj = gridResultObj['hiddenObj'];
                if (hiddenObj != null) {
                    $("#hiddenObj").val(JSON.stringify(hiddenObj));
                }
                var searchButtonObj = gridResultObj['searchButtonObj'];
                if (searchButtonObj != null) {
                    $("#searchButtonObj").val(JSON.stringify(searchButtonObj));
                }
                var gridInitParamObj = {}; //gridInitParamObj
                gridInitParamObj = gridResultObj['gridInitParamObj'];

                if (gridInitParamObj != null && !jQuery.isEmptyObject(gridInitParamObj)) {
                    $("#searchResults").attr("data-gridinitparamobj", JSON.stringify(gridInitParamObj));
                }
                if (gridResultObj != null && !jQuery.isEmptyObject(gridResultObj)) {
                    $("#searchResults").attr("data-gridResultObj", JSON.stringify(gridResultObj));
                }
                if (gridInitParamObj['uuu_smartSearchexportRangeCount'] != null && gridInitParamObj['uuu_smartSearchexportRangeCount'] != '' && (searchType == "S" || searchType == "s")) {
                    $("#ssExportCount").val(gridInitParamObj['uuu_smartSearchexportRangeCount']);
                } else {
                    if (gridInitParamObj['uuu_exportRangeCount'] != null && gridInitParamObj['uuu_exportRangeCount'] != '') {
                        $("#ssExportCount").val(gridInitParamObj['uuu_exportRangeCount']);
                    }
                }
                if (gridResultObj != null && gridResultObj.datafields) {
                }
                var dataFeilds = gridResultObj.datafields;
                var hrefObj = gridResultObj.hrefObj;
                var localData = gridResultObj.data;
                var formId = gridResultObj.formId;
                var panelId = gridResultObj.panelId;
                var gridOperation = gridResultObj.gridOperation;
                $('#formId').val(formId);
                $('#panelId').val(panelId);
                var gridPropObj = {};
                gridPropObj = gridResultObj.gridPropObj;
                var hiddenObj = gridResultObj['hiddenObj'];
                if (hiddenObj != null) {
                    $("#hiddenObj").val(JSON.stringify(hiddenObj));
                }
                var fieldsInitParamObj = gridResultObj['fieldsInitParamObj'];
                if (fieldsInitParamObj != null) {
                    $("#fieldsInitParamObjStr").val(JSON.stringify(fieldsInitParamObj));
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

                    var renderToolbar = gridPropObj.renderToolbar;
                    // console.log("renderToolbar::::"+renderToolbar);
                    //  alert("renderToolbar:::"+renderToolbar);
                    gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');
                    //      var defaultTabName = $("#defaultTabName").val();

                    var descrenderListWise = function (row, columnfield, value, defaulthtml, columnproperties) {

                        return '<div class="jqx-grid-cell-left-align" style="white-space: pre-line;">' + value + '</div>';
                    };


                    var coldataWarpText = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var colwidth = $("#searchResults").jqxGrid('getcolumnproperty', columnfield, 'width');
                        var scrollPosition = $("#searchResults").jqxGrid('scrollposition');
                        $('#idsearchwraptempContainerdiv').css("width", colwidth);
                        $('#idsearchwraptempContainerdiv').html(value);
                        var textHeight = $("#idsearchwraptempContainerdiv").outerHeight(true);
                        var textHeight1 = textHeight / 1.5;
                        try {
                            $('#idsearchwraptempContainerdiv').html("");
                        } catch (w) {
                            $('#idsearchwraptempContainerdiv').html("");
                        }
                        var gridrowsheight1 = $("#searchResults").jqxGrid('getrowheight', row);
                        var gridrowsheight = $("#searchResults").jqxGrid('rowsheight');
                        if (gridrowsheight1 != null && gridrowsheight1 != ''
                                && gridrowsheight1 != 'undefined'
                                && gridrowsheight1 != undefined
                                ) {

                        } else {
                            gridrowsheight1 = gridrowsheight;
                        }

                        if (textHeight1 > gridrowsheight1) {
                            $("#searchResults").jqxGrid('setrowheight', row, textHeight / 1.5);
                        }
                        $("#searchResults").jqxGrid('scrolloffset', scrollPosition.top, scrollPosition.left);

                        var uuu_columnstyle = "white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;";
                        var divClass = "jqx-grid-cell-left-align";
                        if (fieldsInitParamObj != null && !jQuery.isEmptyObject(fieldsInitParamObj)) {
                            var selectedColumnInitParamObj = fieldsInitParamObj[columnfield];
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
                                element.removeProp('overflow');
                                element.css('overflow-y', 'scroll');
                                return element[0].outerHTML;
                            };
                    var searchDateRenderer = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                        var cellValue = $("#searchResults").jqxGrid('getcellvalue', row, columnfield);
                        console.log("cellValue::" + cellValue);
                        if (cellValue != null && cellValue != '') {
                            var cellsformat = columnproperties['cellsformat'];
                            if (cellsformat != null && cellsformat != '') {

                            } else {
                                cellsformat = "dd-MM-yyyy HH:mm:ss";
                            }
                            var dateValue = $.jqx.dataFormat.formatdate(value, cellsformat, $("#searchResults").jqxGrid('gridlocalization'));
                            console.log("dateValue:::" + dateValue);
                            cellValue = dateValue;
                        }
                        var element = $(defaulthtml);
                        element.html(cellValue);
                        return element[0].outerHTML;
//                       return '<div style="overflow: hidden; text-overflow: ellipsis; padding-bottom: 2px; text-align: left; margin-right: 2px; margin-left: 4px; margin-top: 15px;">'+cellValue+'</div>';
                        //return cellValue;
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
                    var searchText = $("#result").val() != null ? $("#result").val() : "";
                    $("#colsArrayStr").val(JSON.stringify(gridResultObj['colsArray']));

                    $("#currentSmartSearchData").val(searchText);
                    $("#currentSearchData").val(JSON.stringify(paramsArray));
                    $("#currentSearchType").val(searchType);
                    $("#currentSearchReqType").val($("#floatingdxpAdavanceSearchOptions").val());
                    $("#currentSearchCatType").val(cattype);
                    var source =
                            {
                                type: 'POST',
//                                                async: false,
                                datatype: "json",
                                datafields: dataFeilds,
                                data: {
                                    gridId: gridResultObj['gridId'],
                                    colsArray: JSON.stringify(gridResultObj['colsArray']),
                                    tableName: gridResultObj['tableName'],
                                    searchType: searchType,
                                    reqType: reqType,
                                    searchText: searchText,
                                    'langID': langID,
                                    searchId: searchId,
                                    'cattype': cattype,
                                    'fuzzyFlag': $("#isFuzzy").is(':checked'),
                                    paramsArray: JSON.stringify(paramsArray)

                                },
                                url: 'genericSearchGridResults',
                                cache: false,
                                beforeSend: function (xhr) {
                                    xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                                    showLoader();
                                }, loadError: function (xhr, status, error) {
                                    stopLoader();
                                    throw new Error(error);
                                }, loadComplete: function (data)
                                {
                                    stopLoader();
                                    try {
                                        if (gridInitParamObj != null
                                                && !jQuery.isEmptyObject(gridInitParamObj)
                                                && gridInitParamObj['uuu_GridPagesCountFlag'] == 'Y')
                                        {
                                            if (data[0] != null) {
                                                showgridPagesCount('searchResults', 'Y', data[0].TotalRows)
                                            }
                                        }
                                    } catch (e) {
                                    }
                                },
                                downloadComplete: function (data, status, xhr) {
                                    return data;
                                },
                                beforeprocessing: function (data) {
                                    showLoader();

                                    if (data[0] != null) {
                                        //  alert(data.JSONObjectList[0].TotalRows);
                                        if (data[0].TotalRows != null) {
                                            source.totalrecords = data[0].TotalRows;
                                            if (isFirstTime) {
                                                isFirstTime = false;
                                                $("#search_count").attr('totalRecords', data[0].TotalRows.toLocaleString());
                                                $("#search_count").html("(" + (labelObject['Fetched'] != null ? labelObject['Fetched'] : 'Fetched') + " "
                                                        + $("#search_count").attr('totalRecords') + " "
                                                        + (labelObject['records in'] != null ? labelObject['records in'] : 'records in') + " "
                                                        + (new Date().getTime() - resultStartTime) / 1000 + " sec)");
                                            }
                                        } else {
                                            source.totalrecords = 0;
//                                            var modalObj = {
//                                                title: 'Message',
//                                                body: data[0],
//                                            };
//                                            var buttonArray = [
//                                                {
//                                                    text: 'Close',
//                                                    click: function () {
//                                                    },
//                                                    isCloseButton: true
//                                                }
//                                            ];
//                                            modalObj['buttons'] = buttonArray;
//                                            createModal("dataDxpSplitterValue", modalObj);
                                        }

                                        stopLoader();
                                    } else {
                                        $("#search_count").attr('totalRecords', 0);
                                        source.totalrecords = 0;
                                        if (isFirstTime) {
                                            isFirstTime = false;
                                            $("#search_count").html("(" + (labelObject['No record(s) found'] != null ? labelObject['No record(s) found'] : 'No record(s) found') + ")");
                                        }
                                        // $("#search_count").text("(No record(s) found)");
                                        stopLoader();
                                    }

                                },
                                sort: function ()
                                {
                                    $("#searchResults").jqxGrid('updatebounddata', 'sort');
                                    try {
                                        $("#searchResults").jqxGrid('clearselection');
                                    } catch (e) {
                                    }
                                    stopLoader();
                                },
                                filter: function () {

                                    $("#searchResults").jqxGrid('updatebounddata', 'filter');
                                    try {
                                        $("#searchResults").jqxGrid('clearselection');
                                    } catch (e) {
                                    }
                                    stopLoader();
                                }


                            };
                    var dataAdapter = new $.jqx.dataAdapter(source);
                    gridPropObj.source = dataAdapter;
                    gridPropObj.showtoolbar = true;
                    gridPropObj.rowdetails = true;
                    gridPropObj.rendergridrows = function () {
                        return dataAdapter.records;
                    };
                    var renderToolbar = gridPropObj.renderToolbar;
                    gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');
//                    gridPropObj.rowdetailstemplate = {
//                        rowdetails: "<div style='margin-top:0.2%' class='visionSearchRowDtl'></div>",
//                        rowdetailsheight: 32
//                    };
                    //autoheight
                    gridPropObj.autoheight = false;
                    //  showLoader();
//                    gridPropObj.initrowdetails = function (index, parentElement, gridElement, datarecord) {
//                        showLoader();
//                        $.ajax({
//                            type: "POST",
//                            url: 'fetchRowDetails',
//                            data: {
//                                'selectedRowData': JSON.stringify(datarecord),
//                                searchType: searchType
//                            },
//                            traditional: true,
//                            cache: false,
//                            success: function (response) {
//                                if (response != null && response != '') {
//                                    console.log("response::Row Detail::" + response);
//                                    var responseObj = JSON.parse(response);
//                                    if (responseObj['rowDetailFlag']) {
//                                        //   var dataCopyRecord = datarecord;
//                                        var details = $($(parentElement).children()[0]);
//                                        console.log("response::rowDetailMessage::" + responseObj['rowDetailMessage']);
//                                        details.html('<div class="searchRowDtl">' + responseObj['rowDetailMessage'] + '<div>');
//                                        var detailTypes = responseObj['detailTypes'];
//                                        var initParamObj = responseObj['initParamObj'];
//
//                                        $("#initParamObj").val(JSON.stringify(initParamObj));
//                                        var detailTypesArray = detailTypes.split(",");
//                                        var dataRecordConverted = {};
//                                        //delete datarecord['ERPSFD'];
//                                        //  delete datarecord['PURCHASE'];
//                                        for (var key in datarecord) {
//                                            if (key != null && key.indexOf("DATE") > -1) {
//
//                                                dataRecordConverted[key] = datarecord[key];
//                                            } else {
//                                                if (datarecord[key] != null && datarecord[key] != '' && isNaN(datarecord[key])) {
//                                                    datarecord[key] = datarecord[key].replace(/&/g, '&amp;');
//                                                    datarecord[key] = datarecord[key].replace(/"/g, '&quot;');
//                                                    datarecord[key] = datarecord[key].replace(/\\/g, '&bsol;');
//                                                    //  .replace(/\\/g, '/');
//                                                    for (var entitykey in HtmlEntities) {
//                                                        var entity = HtmlEntities[entitykey];
//                                                        var regex = new RegExp(entitykey, 'g');
//                                                        datarecord[key] = datarecord[key].replace(regex, entity);
//                                                    }
//                                                    dataRecordConverted[key] = datarecord[key];
//                                                } else {
//                                                    dataRecordConverted[key] = datarecord[key];
//                                                }
//                                            }
//
//                                        }
//                                        // var dataStr = JSON.stringify(dataRecordConverted);
//                                        for (var i = 0; i < detailTypesArray.length; i++) {
//                                            if (detailTypesArray[i] != null && detailTypesArray[i] != '') {
//                                                var dataDetailObj = responseObj[detailTypesArray[i]];
//                                                if (dataDetailObj != null) {
//                                                    var functionName = "";
//                                                    if (detailTypesArray[i] != 'COPY') {
//
//                                                        functionName = "navigateToFormIcon('" + dataDetailObj['dataField'] + "','" + JSON.stringify(dataRecordConverted) + "','form','" + dataDetailObj['gridId'] + "','" + dataDetailObj['panelId'] + "','" + dataDetailObj['basketType'] + "','" + detailTypesArray[i] + "');";
//
////                                                        functionName = "navigateToFormIcon('" + dataDetailObj['dataField'] + "','" + JSON.stringify(dataRecordConverted) + "','form','" + dataDetailObj['gridId'] + "','" + dataDetailObj['panelId'] + "','" + dataDetailObj['basketType'] + "');";
//                                                    } else {
//                                                        $("#copyFormId").val(dataDetailObj['formId']);
//                                                        dataRecordConverted['formId'] = dataDetailObj['formId'];
//                                                        dataRecordConverted['gridId'] = dataDetailObj['gridId'];
//                                                        dataRecordConverted['panelId'] = dataDetailObj['panelId'];
//                                                        dataRecordConverted['baskettype'] = dataDetailObj['basketType'];
//                                                        dataRecordConverted['objectid'] = dataDetailObj['formId'];
////                                                       
//                                                        functionName = "copyItem('" + dataDetailObj['copyId'] + "','" + JSON.stringify(dataRecordConverted) + "');";
//                                                        //copyFormId
//                                                    }
//                                                    $('#' + detailTypesArray[i] + '_' + datarecord['uid']).attr('onClick', functionName);
//                                                    if (detailTypesArray[i] == 'SOW') {//onkar SOW
//                                                        functionName = "sowDocDownload('" + JSON.stringify(dataRecordConverted) + "','" + dataDetailObj['basketType'] + "')";
//                                                        $('#' + detailTypesArray[i] + '_' + datarecord['uid']).attr('onClick', functionName);
//                                                    }
//                                                }
//
//
//                                            }
//
//                                        }
//
//                                    } else {
//                                        var modalObj = {
//                                            title: 'Message',
//                                            body: responseObj['rowDetailMessage'],
//                                        };
//                                        var buttonArray = [
//                                            {
//                                                text: 'Close',
//                                                click: function () {
//
//                                                },
//                                                isCloseButton: true
//                                            }
//                                        ];
//                                        modalObj['buttons'] = buttonArray;
//                                        createModal("dataDxpSplitterValue", modalObj);
//                                    }
//                                }
//                                stopLoader();
//                            },
//                            error: function (e) {
//                                //  alert('Error: ' + JSON.stringify(e));
//                                stopLoader();
//                                console.log(e);
//                                var meg = e.statusText;
//                                var status = e.status;
//                            }
//
//                        });
//                    };
                    $("#currentGridpageNum").val(0);
                    $('#searchResults').jqxGrid(gridPropObj);
                    $('#searchResults').parent().css("padding-top", "3px", "important");
                    $('#searchResults').parent().css("padding-bottom", "3px", "important");
                    $('#searchResults').jqxGrid('showtoolbar', true);
                    $('#searchResults').jqxGrid('height', true);
//                    $('#' + gridResultObj['gridId']).jqxGrid('pagermode', 'simple');
                    $('#searchResults').on('cellclick', function (event) {
//                                    $('#searchResults').bind('cellclick', function (event) {
                        var panelId = $("#panelId").val();
                        console.log(panelId + ":::event.args.column.datafield:::::" + event.args.column.datafield);
                        navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', hrefObj['hrefGridId'], panelId, 'Search View');
                        // navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId']);
                    });
                    $("#searchResults").on('celldoubleclick', function (event) {
                        var args = event.args;
                        var dataField = args.datafield;
                        var dataField1 = args.text;
                        var rowIndex = args.rowindex;
                        var cellValue = args.value;
                        var isEditable = $('#searchResults').jqxGrid('getcolumnproperty', dataField, 'editable');
                        console.log("isEditable::::" + isEditable)
                        if (!isEditable) {
                            var column = $("#searchResults").jqxGrid('getcolumn', event.args.datafield).text;
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
                    $('#searchResults').on("pagechanged", function (event) {
                        var oldPageNum = $("#currentGridpageNum").val();
                        console.log("oldPageNum:::" + oldPageNum + "::::Current Page Num:::" + event.args.pagenum);
                        // event arguments.
                        var args = event.args;
                        // page number.
                        var pagenum = args.pagenum;
                        // page size.
                        var pagesize = args.pagesize;
                        if (parseInt(event.args.pagenum) != parseInt(oldPageNum)) {
                            var selectedrowindexes = $('#searchResults').jqxGrid('selectedrowindexes');
                            console.log("searchResults:::selectedrowindexes:::" + selectedrowindexes);
                            try {
                                if (selectedrowindexes != null
                                        && selectedrowindexes.length != 0
                                        && selectedrowindexes[0] != -1) {
                                    $('#searchResults').jqxGrid('clearselection');
                                }

                            } catch (e) {
                            }
                        }
                        $("#currentGridpageNum").val(event.args.pagenum);
                    });
                    $('#searchResults').on("pagesizechanged", function (event) {
                        console.log("::pagesizechanged:::" + event.args.pagenum);
                        $("#currentGridpageNum").val(0);
                    });


                }// end if(gridPropObj != null)


            }
        },
        error: function (e) {
            stopLoader();
            console.log(e);
            sessionTimeout(e);
        }


    });
    //stopLoader();
    if (parseInt($("#accordion").attr("data-templateresults")) != 0) {
        showLoader();
        // fetchTemplateResults(searchType, paramsArray, cattype);
    }

}
function resetClassificationData() {
    $("#classficationtext").val("");
    $("#classificationtype").val("UNSPSC_CODE"); //UNSPSC_CODE
    $("#classificationcode").val("");
    $("#classificationdesc").val("");
    $("#classiicationdtlCover").empty();
    stopLoader();
}
function processMLLabelObjRefresh() {

//    var mlConfigFlag = document.getElementById("mlConfigFlag");
    var mlConfigFlag = $("#mlConfigFlag").val();
    var mlConfigFlag = 'Y';
    var selectedLocale = $("input[name='multilingualCheckbox']:checked").val();
    if (mlConfigFlag != null && mlConfigFlag == 'Y') {
        $("#ajaxProgresss").show();
        $.ajax({
            url: 'refreshMLLabelObj',
            type: 'POST',
            data: {
                selectedLocale: selectedLocale ? selectedLocale : null
            },
            success: function (result) {
                //     endAjax();
                alert("result::" + result);
                $("#ajaxProgresss").hide();
                if (result == "Success") {
                    alert("Entered Success");
                    $("#dialog1").html("");
                    $("#dialog1").append("<div style='display:block;margin-bottom: 1%;'>"
                            + "Refreshed ML Labels Successfully</div>");
                    $("#dialog1").dialog({resizable: false,
                        title: 'Message',
                        modal: true,
                        height: 120,
                        width: 300,
                        fluid: true,
                        buttons: {
                            Ok: function () {
                                $("#dialog1").empty();
                                $("#dialog1").dialog('close');
                            }
                        }, open: function () {
                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                        },
                        beforeClose: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }

                    });



                } else if (result == "Failure") {
                    alert("Entered Failure");
                    $("#dialog1").html("");
                    $("#dialog1").append("<div style='display:block;margin-bottom: 1%;'>"
                            + "Unable to refresh ML Labels</div>");
                    $("#dialog1").dialog({resizable: false,
                        title: 'Message',
                        modal: true,
                        height: 120,
                        width: 300,
                        fluid: true,
                        buttons: {
                            Ok: function () {
                                $("#dialog1").empty();
                                $("#dialog1").dialog('close');
                            }
                        }, open: function () {
                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog");
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
            error: function (err) {
                $("#ajaxProgresss").hide();
                sessionTimeout(err);
            }
        });

    }
    $("#ajaxProgresss").hide();
}
async function getParamSearchResults(reqType, searchId, templateFlag, templateGrid, reggridid) {
    showLoader();
    var paramArray = [];
    labelObject = {};
//    $("#SearchResult").remove();
    $("#settingheaderImage").remove();
    $("#DXPlLanguageSelectionId").remove();
//    $("#rightsearchicon").remove();
    $("#searchId").html("");
    $("#regGrdiId").val(reggridid);
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    $("#searchId").val(searchId);
    var i = 0;
    console.log("getParamSearchResults::::" + reqType);
    $(".accordion").remove();
    var tableId = "paramsearch";
    if (reqType == 'ppr' || reqType == 'PRA') {
        tableId = "pprsearch";
    } else if (reqType == 'spec') {
        tableId = "specsearch";
    }


    if (!fioriThemeCheck) {
        $("#" + tableId + " tbody tr").each(function () {
            var isAllow = false;
            var paramObj = {};
            var colname = $(this).attr('data-colname')
            var tbmin = $("#" + reqType + "tbmin" + i).val();
            var tbmax = $("#" + reqType + "tbmax" + i).val();
            var value = $("#" + reqType + "tb" + i).val();
            var andOrOperator = $("#" + reqType + "andOrOperator" + i).val();
            var typeSelectStr = $("#" + reqType + "typeSelectStr" + i).val();
            var dlovcolname = $("#" + reqType + "typeSelectStr" + i).attr("data-dlovcolname");
            console.log("colname::" + colname + "::value::" + value + "::tbmin::" + tbmin + ":::tbmax:::" + tbmax);
            if (value != null && value != '') {
                isAllow = true;
            } else if (tbmin != null && tbmax != null && tbmin != '' && tbmax != '') {
                isAllow = true;
            }
            var type = $("#" + reqType + "tb" + i).attr("type");
            if (type != null && type == 'checkbox') {
                var textval = "N";
                if ($("#" + reqType + "tb" + i).is(':checked')) {
                    isAllow = true;
                } else {
                    isAllow = false;
                }
            }
            console.log("isAllow::::" + isAllow);
            if (isAllow) {
                paramObj.datatype = $.trim($(this).attr('data-type'));
                paramObj.column = $.trim($(this).attr('data-colname'));
                paramObj.rangeflag = $.trim($(this).attr('data-range')) == 'Y' ? 'Y' : 'N';
                paramObj.minvalue = $.trim($("#" + reqType + "tbmin" + i).val());
                paramObj.maxvalue = $.trim($("#" + reqType + "tbmax" + i).val());
                var type = $("#" + reqType + "tb" + i).attr("type");
                if (type != null && type == 'checkbox') {
                    var textval = "N";
                    if ($("#" + reqType + "tb" + i).is(':checked')) {
                        textval = "Y";
                    } else {
                        textval = "N";
                    }
                    paramObj.value = textval;
                } else {
                    paramObj.value = $.trim($("#" + reqType + "tb" + i).val());
                }
                paramObj.operator = $("#" + reqType + "ddw" + i).val();
                paramObj.symbol = $.trim($("#" + reqType + "ddw" + i).find('option:selected').text());
                paramObj.staged = $("#" + reqType + "ddw" + i).attr('data-staged') == "Y" ? "Y" : "N";
                paramObj.andOrOperator = andOrOperator;
                paramObj.typeSelectStr = typeSelectStr;
                paramObj.dlovcolname = dlovcolname;
                paramObj.valuestripflag = $("#" + colname).attr("data-valuestripflag");
                paramObj.valuetrimcharflag = $("#" + colname).attr("data-valuetrimcharflag");
                paramArray.push(paramObj);
            }
            ++i;
        });
    } else {
        $(".ui5gridfilter-container-form .ui5gridfilter-item").each(function () {
            var isAllow = false;
            var paramObj = {};
            var colname = $(this).attr('data-colname')
            var tbmin = $("#" + reqType + "tbmin" + i).val();
            var tbmax = $("#" + reqType + "tbmax" + i).val();
            var value = $("#" + reqType + "tb" + i).val();
            var andOrOperator = $("#" + reqType + "andOrOperator" + i).val();
            var typeSelectStr = $("#" + reqType + "typeSelectStr" + i).val();
            var dlovcolname = $("#" + reqType + "typeSelectStr" + i).attr("data-dlovcolname");
            console.log("colname::" + colname + "::value::" + value + "::tbmin::" + tbmin + ":::tbmax:::" + tbmax);
            if (value != null && value != '') {
                isAllow = true;
            } else if (tbmin != null && tbmax != null && tbmin != '' && tbmax != '') {
                isAllow = true;
            }
            var type = $("#" + reqType + "tb" + i).attr("type");
            if (type != null && type == 'checkbox') {
                var textval = "N";
                if ($("#" + reqType + "tb" + i).is(':checked')) {
                    isAllow = true;
                } else {
                    isAllow = false;
                }
            }
            console.log("isAllow::::" + isAllow);
            if (isAllow) {
                paramObj.datatype = $.trim($(this).attr('data-type'));
                paramObj.column = $.trim($(this).attr('data-colname'));
                paramObj.rangeflag = $.trim($(this).attr('data-range')) == 'Y' ? 'Y' : 'N';
                paramObj.minvalue = $.trim($("#" + reqType + "tbmin" + i).val());
                paramObj.maxvalue = $.trim($("#" + reqType + "tbmax" + i).val());
                var type = $("#" + reqType + "tb" + i).attr("type");
                if (type != null && type == 'checkbox') {
                    var textval = "N";
                    if ($("#" + reqType + "tb" + i).is(':checked')) {
                        textval = "Y";
                    } else {
                        textval = "N";
                    }
                    paramObj.value = textval;
                } else {
                    paramObj.value = $.trim($("#" + reqType + "tb" + i).val());
                }
                paramObj.operator = $("#" + reqType + "ddw" + i).val();
                paramObj.symbol = $.trim($("#" + reqType + "ddw" + i).find('option:selected').text());
                paramObj.staged = $("#" + reqType + "ddw" + i).attr('data-staged') == "Y" ? "Y" : "N";
                paramObj.andOrOperator = andOrOperator;
                paramObj.typeSelectStr = typeSelectStr;
                paramObj.dlovcolname = dlovcolname;
                paramObj.valuestripflag = $("#" + colname).attr("data-valuestripflag");
                paramObj.valuetrimcharflag = $("#" + colname).attr("data-valuetrimcharflag");
                paramArray.push(paramObj);
            }
            ++i;
        });
    }
    $("#currentSearchData").val(JSON.stringify(paramArray));



    console.log(":::paramArray:::" + JSON.stringify(paramArray));
    if (paramArray != null && paramArray.length != 0) {
        var searchName = $("#searchddw").val();
        if (reqType == 'ppr' || reqType == 'PRA') {
//             let mypromise = new Promise(resolve => {
//                getsearchitem('', '', '', "PRA");
//            });
//            await mypromise;
//             getsearchitem('', '', '', "PRA"); 
//            searchResults('PRA', '', paramArray);
            searchResults('PRA', '', paramArray, '', searchName, templateFlag, templateGrid);
        } else if (reqType == 'spec' || reqType == 'M') {
            searchResults('M', '', paramArray, '', searchName);
        } else if (!(templateFlag != null || templateFlag != '' || templateFlag != undefined) || templateFlag == 'N') {
            searchResults('P', '', paramArray, '', searchName, templateFlag, templateGrid);
        } else {
            let mypromise = new Promise(resolve => {
//                getsearchitem('', '', '', "P");
//                searchResults('P', '', paramArray, '', searchName, templateFlag, templateGrid);
                getsearchitem(templateFlag, '', '', '', '', "P", templateGrid, paramArray, searchName);

            });
//            await mypromise;
//             getsearchitem('', '', '', "P");
//            searchResults('P', '', paramArray, '', searchName);
//            stopLoader();

        }
    } else {
        stopLoader();
        var modalObj = {
            title: 'Message',
            body: "Please provide at least one value to Search."
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
        $(".modal-dialog").addClass("opacity-animate3");
    }
}
function getParametricSearchData(searchId) {
    var parametricInd = $("#accordion").attr("data-parametric");
    console.log("parametricInd::::" + parametricInd);
    if (parametricInd == 'N') {
        $("#accordion").attr("data-parametric", "Y");
        getParamForm(searchId, 'paramSearchCover', '');

    }
    getPersonalizationDataOpt('', 'P');
    stopLoader();
}
function getParamForm(searchId, divId, reqType, searchName, pprDropdownId) {
    var pprDrpdwnDomain = "";
    if (pprDropdownId != null && pprDropdownId != "" && pprDropdownId != undefined) {
        pprDrpdwnDomain = $("#" + pprDropdownId).val();
    }


    $("#searchResultsCountId").hide();
    $("#dxp1Firstdiv").html("");
    $("#dxp1Seconddiv").html("");
    $("#SearchResult").attr("disabled", false);
    $("#searchId").val(searchId);
    $("#SearchResult").val("");
    $(".accordion").remove();
    $("#mainDxpSplitter").hide();
    $("#searchDxpSplitter").hide();
    $("#dxpClassficationAppendClass").hide();
    $("#VisualizePageBody").hide();
    $("#defaultShowCards").hide();
    $("#defaultShowCards").html("");
    $("#basketNameValId").remove();
    try {
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridisImport", "");
    } catch (e) {

    }
    try {


        setCrossIconsTabs(event, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent');
        setCrossIconsTabs(event, 'dxpSearchTab', 'dxpSearchContent');


        $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridisImport", "");
    } catch (e) {

    }

    try {
        setCrossIconsTabs(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent');
        setCrossIconsTabs(null, 'dxpSearchTab', 'dxpSearchContent');
    } catch (e) {

    }


    reqType = $("#dxpAdavanceSearchOptions").val();
    if (reqType != 'S' && reqType != 'D') {
//        $("#SearchResult")
        document.getElementById("SearchResult").readOnly = true;
    } else {
        document.getElementById("SearchResult").readOnly = false;
    }
    if (reqType != null && reqType != undefined && reqType != '' && (reqType == 'PR' || reqType == 'S')) {
        $("#searchDxpSplitter").hide();
        $("#firstDxpSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 75}]});
        $("#secondDxpSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 270}]});
        $("#thirdDxpSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '100%'}]});
//    } else if (reqType != null && reqType != undefined && reqType != '' && reqType == 'I') {
//        $("#SearchResult").attr("disabled", true);
//        $("#searchDxpSplitter").css("display", "none");
//        $(".visionjqxTreeDiv").show();
//        $("#dxpClassficationAppendClass").show();
//        $("#VisualizePageBody").hide();
//        getCategoryTreeForm(searchId, reqType);
    } else if (reqType != null && reqType != undefined && reqType != '' && reqType == 'C') {
        $("#SearchResult").attr("disabled", true);
        $("#searchDxpSplitter").css("display", "none");
        $(".visionjqxTreeDiv").show();
        $("#dxpClassficationAppendClass").show();
        $("#VisualizePageBody").hide();
//        $(".massSearchListItem").hide();
//        $(".massSearchListItem").removeClass("massSearchToggleClass");
//        $(".closeImgToggle").hide();
//        $(".searchImgToggle").show();
        getClassificationForm(searchId, reqType);


    } else {
        if ((reqType != 'C' || reqType != 'PR' || reqType != 'S') && reqType != 'D' && reqType != 'DB') {
            $(".visionjqxTreeDiv").hide();
            $("#VisualizePageBody").hide();
//            $(".massSearchListItem").hide();
//            $(".massSearchListItem").removeClass("massSearchToggleClass");
//            $(".closeImgToggle").hide();
//            $(".searchImgToggle").show();
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
//        $("#searchDxpSplitter").css("display", "block");
//        $("#searchDxpSplitter").jqxSplitter({
//            width: '100%',
//            height: '100%',
//            orientation: 'vertical',
//            splitBarSize: 0,
//            panels: [{size: 500}]
//        });
        $.ajax({
            type: "POST",
            url: 'getParamSearchForm',
            data: {
                'searchId': searchId,
                'reqType': reqType,
                pprDrpdwnDomain: pprDrpdwnDomain
            },
            traditional: true,
            cache: false,
            success: function (response) {
                $("#dxpClassficationAppendClass").hide();
                //$("#searchDxpSplitter").show();
                $(".visionjqxTreeDiv").hide();

//                $("#dxpClassficationAppendClass").hide();
                $("#DxpParamSplitterDotsClass").show();
                if (response != null && response != '') {
                    var responseObj = JSON.parse(response);
                    getPersonalizationDataOpt(searchId, reqType);
                    getClassificationSuggetions();
//                    dxpTreeSearch();
//                    if ($(".massSearchListItem").hasClass("massSearchToggleClass")) {
//                        $(".massSearchToggleClass").hide();
//                    }
//                    $("#dxp1Firstdiv").html(responseObj['formString']);
//                    if (reqType != null && reqType != undefined && reqType != '' && (reqType == 'D')) {
//                        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '0%'}]});
//                        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent','Dictionary Search','N');
//                    } else {
//                        $("#dxp1Firstdiv").addClass("PilogresearchSearch");
//                        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '40%'}]});
//                        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent','Parametric Search','N');
//                    }
                    if (reqType == 'D') {
////                        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '0'}]});
//                        $("#dxpSearchMainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', panels: [{size: '0'}]});
//                        try {
//                            $('#dxpSearchMainSplitter').jqxSplitter('expand');
//                        } catch (e) {
//
//                        }
////                        showSelectedTabContent(null, 'dxpSearchTab', 'dxpSearchContent', 'Search','N');
//                        if ($("#dxpTabs").is(":visible")) {
//
//                        } else {
//                            toggleTabsAndMenus(event);
//                        }

                    } else {
                        $("#dxp1Firstdiv").html("");
                        $("#dxp1Seconddiv").html("");

                        try {
                            $('#dxp1MainSplitter').jqxSplitter('expand');
                        } catch (e) {

                        }
                        try {
                           $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '100%'}]});
                        $('#dxp1MainSplitter').on('expanded', function (event) {
                            $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '100%'}]});

                        });
                        } catch (e) {

                        }
                        

                        try {
                            $('#dxp1MainSplitter').jqxSplitter('expand');
                        } catch (e) {

                        }
                        $("#dxp1Firstdiv").html(responseObj['formString']);
                        $("#dxp1Firstdiv").css("width", "100%");
                        $("#dxp1Firstdiv").addClass("PilogresearchSearch");
                        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'Parametric Search', 'N');
                        if ($("#dxpTabs").is(":visible")) {

                        } else {
                            toggleTabsAndMenus(event);
                        }
//                        $("#dxp1Firstdiv").html("");
//                        $("#dxp1Seconddiv").html("");
//                        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '100%'}]});
//                        try {
//                            $('#dxp1MainSplitter').jqxSplitter('expand');
//                        } catch (e) {
//
//                        }
//                        $("#dxp1Firstdiv").html(responseObj['formString']);
//                        $("#dxp1Firstdiv").addClass("PilogresearchSearch");
//                        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'Parametric Search','N');
//                        if ($("#dxpTabs").is(":visible")) {
//
//                        } else {
//                            toggleTabsAndMenus(event);
//                        }
                    }

                    $("#dxp1TabsWithGridContent").addClass("gridHeight");

//                      $("#searchTypeSplitter").html(responseObj['formString']);
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
                    if (pprDrpdwnDomain != null && pprDrpdwnDomain != undefined && pprDrpdwnDomain != "") {
                        $("#pprMultiDomainSearch").val(pprDrpdwnDomain);
                    } else {
                        $("#pprMultiDomainSearch").val("PRODUCT");
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

function closeModelPopup() {
    $("#SearchResult").focus();
    $("#templeteSearchResult").focus();
}
function searchModalPopup(modalDivId, modalObj, loginmessageflag) {
    $("#" + modalDivId).html("");
    var buttonsArray = modalObj['buttons'];
    $("#" + modalDivId).addClass("modal fade");
    $("#" + modalDivId).attr("role", "dialog");
    $("#" + modalDivId).attr("data-backdrop", "static");
    $("#" + modalDivId).css("padding-top", "58px");
    let inputElement = document.getElementById(modalDivId);
    inputElement.focus();
    var modalContant = ''
            + '<div class="modal-dialog opacity-animate3">'
            + '<div class="modal-content">'
            + '<div class="modal-header">'
            + '<h4 class="modal-title text-center">' + modalObj['title'] + '</h4>'
            + '<button type="button" class="close" onclick=\"closeModelPopup()\" data-toggle="modal" data-target="#' + modalDivId + '"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'
            + '</div>'
            + '<div class="modal-body">'
            + modalObj['body']
            + ' </div>';
    modalContant += '</div>'
            + '</div>';
    $("#" + modalDivId).html(modalContant);
    if (buttonsArray != null && buttonsArray.length != 0) {
        var footer = $('<div class="modal-footer">');
        for (var i = 0; i < buttonsArray.length; i++) {
            var buttonObj = buttonsArray[i];
            if (buttonObj != null && !jQuery.isEmptyObject(buttonObj)) {
                var onclickButtonfunction = "";
                var isDismissButton = "";
                if (buttonObj['isCloseButton'] == true) {
                    isDismissButton = " data-dismiss=\"modal\" ";
                }
                var button = $('<button type="button" class="btn btn-primary" ' + isDismissButton + ' >' + buttonObj['text'] + '</button>');
                if (buttonObj['click'] != null && buttonObj['click'] != '') {
                    $(button).click(buttonObj['click']);
                }
                $(footer).append(button);
            }
        }
        $("#" + modalDivId + " .modal-content").append(footer);
    } else {
        $("#" + modalDivId + " .modal-content").append('<div class="modal-footer">'
                + ' <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>'
                + '</div>');
    }
//     $('#' + modalDivId).draggable();
//     $('#' + modalDivId).resizable();
//     $('#' + modalDivId).resize();
    $('#' + modalDivId).modal('show');
    $('#' + modalDivId).focus();
    $('#' + modalDivId).find("btn btn-primary").eq(1).focus();
//    $(".modal").draggable();
//    $(".modal").css("cursor", "move");
    $(document).keydown(function (e) {
        const mymodal = $('#' + modalDivId);
        if (loginmessageflag != null && loginmessageflag != undefined && loginmessageflag != "" && loginmessageflag == 'Y') {

        } else {
            if (e.keyCode == 27) {
                if (mymodal.hasClass("show")) {
                    mymodal.modal('hide');
                    $(".backGroundOpacity").css("display", "none");
                    $("#SearchResult").focus();
                    $("#templeteSearchResult").focus();
                }
            } else if (e.keyCode == 13) {
                if (mymodal.hasClass("show")) {
                    mymodal.modal('hide');
                    $(".backGroundOpacity").css("display", "none");
                    setTimeout(function () {
                        $("#SearchResult").focus();
                        $("#templeteSearchResult").focus();
                    }, 500);

                }
            }
        }

    });


}
function paramsSearchClearData(id) {
    const inputId = id;
    console.log(inputId);
    const searchIconDivId = $('#' + inputId).next().attr('id');
    $("#" + searchIconDivId).show();
    const userInputSearch = $('#' + id).val();
//    const $crossIcon = $input.siblings(".visionParamInputCrossIcon");
//    function toggleCrossIcon() {
    if (userInputSearch != null && userInputSearch != undefined && userInputSearch != "") {
        if (userInputSearch.trim() !== "") {
            $("#" + searchIconDivId).show();
        } else {
            $("#" + searchIconDivId).hide();
        }
    }
//    toggleCrossIcon();
    $("#" + searchIconDivId).on("click", function () {
        $("#" + inputId).val('');
        $("#" + searchIconDivId).hide();
//        toggleCrossIcon();
    });
}
function getDomainNameOnChnage(id) {
    var domainListDropdown = $("#" + id).val();
    localStorage.setItem("domainListValue", domainListDropdown);
    localStorage.setItem("domainNameChngFlag", "Y");
    getPPRTemplateForm("FMM_MGR_MATERIAL_SEARCH");
}
function showAnalyticsBasedOnPPRClasification(domain) {
    showLoader();
    var dataSegment = $("#currentUNSPSCDataSegment").val();
    domain = $("#domainListDropdown").val();
    if (dataSegment != null && dataSegment != undefined && dataSegment != "") {
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: 'showAnalyticsBasedOnPPRClasification',
            traditional: true,
            cache: false,
            async: true,
            data: {
                domain: domain,
                dataSegment: dataSegment,
            },
            success: function (response) {
                stopLoader();
                if (response != null && response != undefined && response != '') {
                    if (response != null && response != undefined && response != '' && domain == 'ASSET') {
                        var pmObjTypeLabelsList = response['pmObjTypeLabelsList'];
                        var pmObjTypeValuesList = response['pmObjTypeValuesList'];

                        var pmObjectEquipComLabelsList = response['pmObjectEquipComLabelsList'];
                        var pmObjectEquipComValuesList = response['pmObjectEquipComValuesList'];

                        var pmObjEqupUnspscLabelsList = response['pmObjEqupUnspscLabelsList'];
                        var pmObjEqupUnspscValuesList = response['pmObjEqupUnspscValuesList'];

                        var pmObjectEqupDiscLabelsList = response['pmObjectEqupDiscLabelsList'];
                        var pmObjectEqupDiscValuesList = response['pmObjectEqupDiscValuesList'];

                        var bomTypesCountLabelsList = response['bomTypesCountLabelsList'];
                        var bomTypesCountValuesList = response['bomTypesCountValuesList'];

                        var taskListsCountLabelsList = response['taskListsCountLabelsList'];
                        var taskListsCountValuesList = response['taskListsCountValuesList'];

                        var taskListFreq3MLabelsList = response['taskListFreq3MLabelsList'];
                        var taskListFreq3MValuesList = response['taskListFreq3MValuesList'];

                        var taskListFreq6MLabelsList = response['taskListFreq6MLabelsList'];
                        var taskListFreq6MValuesList = response['taskListFreq6MValuesList'];

                        var taskListFreq9MLabelsList = response['taskListFreq9MLabelsList'];
                        var taskListFreq9MValuesList = response['taskListFreq9MValuesList'];

                        var taskListFreq1YLabelsList = response['taskListFreq1YLabelsList'];
                        var taskListFreq1YValuesList = response['taskListFreq1YValuesList'];

                        var mItemTypesLabelsList = response['mItemTypesLabelsList'];
                        var mItemTypesValuesList = response['mItemTypesValuesList'];

                        var mItemTypesFreq3MLabelsList = response['mItemTypesFreq3MLabelsList'];
                        var mItemTypesFreq3MValuesList = response['mItemTypesFreq3MValuesList'];

                        var mItemTypesFreq6MLabelsList = response['mItemTypesFreq6MLabelsList'];
                        var mItemTypesFreq6MValuesList = response['mItemTypesFreq6MValuesList'];

                        var mItemTypesFreq9MLabelsList = response['mItemTypesFreq9MLabelsList'];
                        var mItemTypesFreq9MValuesList = response['mItemTypesFreq9MValuesList'];

                        var mItemTypesFreq1YLabelsList = response['mItemTypesFreq1YLabelsList'];
                        var mItemTypesFreq1YValuesList = response['mItemTypesFreq1YValuesList'];

                        var mPlanTypesLabelsList = response['mPlanTypesLabelsList'];
                        var mPlanTypesValuesList = response['mPlanTypesValuesList'];

                        var mPlanTypesFreq3MLabelsList = response['mPlanTypesFreq3MLabelsList'];
                        var mPlanTypesFreq3MValuesList = response['mPlanTypesFreq3MValuesList'];

                        var mPlanTypesFreq6MLabelsList = response['mPlanTypesFreq6MLabelsList'];
                        var mPlanTypesFreq6MValuesList = response['mPlanTypesFreq6MValuesList'];

                        var mPlanTypesFreq9MLabelsList = response['mPlanTypesFreq9MLabelsList'];
                        var mPlanTypesFreq9MValuesList = response['mPlanTypesFreq9MValuesList'];

                        var mPlanTypesFreq1YLabelsList = response['mPlanTypesFreq1YLabelsList'];
                        var mPlanTypesFreq1YValuesList = response['mPlanTypesFreq1YValuesList'];

                        var taskListLubricateTypeLabelsList = response['taskListLubricateTypeLabelsList'];
                        var taskListLubricateTypeValuesList = response['taskListLubricateTypeValuesList'];

                        var taskListInspectionTypeLabelsList = response['taskListInspectionTypeLabelsList'];
                        var taskListInspectionTypeValuesList = response['taskListInspectionTypeValuesList'];

                        var taskListPmTypeLabelsList = response['taskListPmTypeLabelsList'];
                        var taskListPmTypeValuesList = response['taskListPmTypeValuesList'];

                        var taskListCalibrateTypeLabelsList = response['taskListCalibrateTypeLabelsList'];
                        var taskListCalibrateTypeValuesList = response['taskListCalibrateTypeValuesList'];

                        var mItemLubricateTypeLabelsList = response['mItemLubricateTypeLabelsList'];
                        var mItemLubricateTypeValuesList = response['mItemLubricateTypeValuesList'];

                        var mItemInspectionTypeLabelsList = response['mItemInspectionTypeLabelsList'];
                        var mItemInspectionTypeValuesList = response['mItemInspectionTypeValuesList'];

                        var mItemPmTypeLabelsList = response['mItemPmTypeLabelsList'];
                        var mItemPmTypeValuesList = response['mItemPmTypeValuesList'];

                        var mItemCalibrateTypeLabelsList = response['mItemCalibrateTypeLabelsList'];
                        var mItemCalibrateTypeValuesList = response['mItemCalibrateTypeValuesList'];

                        var mPlanLubricateTypeLabelsList = response['mPlanLubricateTypeLabelsList'];
                        var mPlanLubricateTypeValuesList = response['mPlanLubricateTypeValuesList'];

                        var mPlanInspectionTypeLabelsList = response['mPlanInspectionTypeLabelsList'];
                        var mPlanInspectionTypeValuesList = response['mPlanInspectionTypeValuesList'];

                        var mPlanPmTypeLabelsList = response['mPlanPmTypeLabelsList'];
                        var mPlanPmTypeValuesList = response['mPlanPmTypeValuesList'];

                        var mPlanCalibrateTypeLabelsList = response['mPlanCalibrateTypeLabelsList'];
                        var mPlanCalibrateTypeValuesList = response['mPlanCalibrateTypeValuesList'];





                        var modalObj = {
                            title: labelObject['Message'] != null ? labelObject['Message'] : " UNSPSC (" + dataSegment + ") DashBoards",
                            body: "<div id='UnspscPPRAnalyticsMainClassId' class='UnspscPPRAnalyticsMainClass'>\n\
                           <div class='container-fluid'>\n\
                            <div class='row'>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType1' class='UnspscPPRAnalyticsType1 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType2' class='UnspscPPRAnalyticsType2 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType3' class='UnspscPPRAnalyticsType3 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType4' class='UnspscPPRAnalyticsType4 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType5' class='UnspscPPRAnalyticsType5 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType6' class='UnspscPPRAnalyticsType6 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType7' class='UnspscPPRAnalyticsType7 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType8' class='UnspscPPRAnalyticsType8 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType10' class='UnspscPPRAnalyticsType10 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType11' class='UnspscPPRAnalyticsType11 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType12' class='UnspscPPRAnalyticsType12 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType13' class='UnspscPPRAnalyticsType13 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType16' class='UnspscPPRAnalyticsType16 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType17' class='UnspscPPRAnalyticsType17 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType18' class='UnspscPPRAnalyticsType18 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType20' class='UnspscPPRAnalyticsType20 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType21' class='UnspscPPRAnalyticsType21 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType22' class='UnspscPPRAnalyticsType22 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType23' class='UnspscPPRAnalyticsType23 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType24' class='UnspscPPRAnalyticsType24 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType25' class='UnspscPPRAnalyticsType25 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType26' class='UnspscPPRAnalyticsType26 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType27' class='UnspscPPRAnalyticsType27 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType28' class='UnspscPPRAnalyticsType28 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType29' class='UnspscPPRAnalyticsType29 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType30' class='UnspscPPRAnalyticsType30 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType31' class='UnspscPPRAnalyticsType31 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType32' class='UnspscPPRAnalyticsType32 aigraphContainer'></div></div>\n\
                            </div>\n\
                            </div\n\
                           </div>",
                        };
                        var buttonArray = [
                            {
                                text: 'OK',
                                click: function () {
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
                        $(".modal-dialog").addClass("modal-xl");
                        $("#dataDxpSplitterValue").addClass("viewAnalysticsPopup");
                        aiLensDashBoardCreation('donut', 'UnspscPPRAnalyticsType1', pmObjTypeLabelsList, pmObjTypeValuesList, 'PM Objects  Categories (Top 10)');
                        aiLensDashBoardCreation('lines', 'UnspscPPRAnalyticsType2', pmObjectEquipComLabelsList, pmObjectEquipComValuesList, 'Commodity Wise Equipments (Top 10)');
                        aiLensDashBoardCreation('funnel', 'UnspscPPRAnalyticsType3', pmObjEqupUnspscLabelsList, pmObjEqupUnspscValuesList, 'UNSPSC Wise Equipments (Top 10)');
                        aiLensDashBoardCreation('pie', 'UnspscPPRAnalyticsType4', pmObjectEqupDiscLabelsList, pmObjectEqupDiscValuesList, 'Discipline Wise Equipments (Top 10)');
                        aiLensDashBoardCreation('bar', 'UnspscPPRAnalyticsType5', bomTypesCountLabelsList, bomTypesCountValuesList, 'eBOM  Categories (Top 10)');
                        aiLensDashBoardCreation('bubble', 'UnspscPPRAnalyticsType6', taskListsCountLabelsList, taskListsCountValuesList, 'Task List  Categories (Top 10)');
                        aiLensDashBoardCreation('stacked', 'UnspscPPRAnalyticsType7', taskListFreq3MLabelsList, taskListFreq3MValuesList, 'Task List Categories with 3M Duration (Top 10)');
                        aiLensDashBoardCreation('HorizentalBar', 'UnspscPPRAnalyticsType8', taskListFreq6MLabelsList, taskListFreq6MValuesList, 'Task List Categories with 6M Duration (Top 10)');
//                        aiLensDashBoardCreation('column', 'UnspscPPRAnalyticsType9', taskListFreq9MLabelsList, taskListFreq9MValuesList, 'Task List Categories with 9M Duration (Top 10)');
                        aiLensDashBoardCreation('funnel', 'UnspscPPRAnalyticsType10', taskListFreq1YLabelsList, taskListFreq1YValuesList, 'Task List Categories with 1Y Duration (Top 10)');
                        aiLensDashBoardCreation('lines', 'UnspscPPRAnalyticsType11', mItemTypesLabelsList, mItemTypesValuesList, 'MItems  Categories (Top 10)');
                        aiLensDashBoardCreation('scatterpolar', 'UnspscPPRAnalyticsType12', mItemTypesFreq3MLabelsList, mItemTypesFreq3MValuesList, 'MItems  Categories With 3M Duration (Top 10)');
                        aiLensDashBoardCreation('pie', 'UnspscPPRAnalyticsType13', mItemTypesFreq6MLabelsList, mItemTypesFreq6MValuesList, 'MItems  Categories With 6M Duration (Top 10)');
//                        aiLensDashBoardCreation('lines', 'UnspscPPRAnalyticsType14', mItemTypesFreq9MLabelsList, mItemTypesFreq9MValuesList, 'MItems  Categories With 9M Duration (Top 10)');
//                        aiLensDashBoardCreation('column', 'UnspscPPRAnalyticsType15', mItemTypesFreq1YLabelsList, mItemTypesFreq1YValuesList, 'MItems  Categories With 1Y Duration (Top 10)');
                        aiLensDashBoardCreation('lines', 'UnspscPPRAnalyticsType16', mPlanTypesLabelsList, mPlanTypesValuesList, 'MPlan  Categories (Top 10)');
                        aiLensDashBoardCreation('bar', 'UnspscPPRAnalyticsType17', mPlanTypesFreq3MLabelsList, mPlanTypesFreq3MValuesList, 'MPlans  Categories with 3M Duration (Top 10)');
                        aiLensDashBoardCreation('scatterpolar', 'UnspscPPRAnalyticsType18', mPlanTypesFreq6MLabelsList, mPlanTypesFreq6MValuesList, 'MPlans  Categories with 6M Duration (Top 10)');
//                        aiLensDashBoardCreation('donut', 'UnspscPPRAnalyticsType19', mPlanTypesFreq9MLabelsList, mPlanTypesFreq9MValuesList, 'MPlans  Categories with 9M Duration (Top 10)');
                        aiLensDashBoardCreation('bubble', 'UnspscPPRAnalyticsType20', mPlanTypesFreq1YLabelsList, mPlanTypesFreq1YValuesList, 'MPlans  Categories with 1Y Duration (Top 10)');
                        aiLensDashBoardCreation('funnel', 'UnspscPPRAnalyticsType21', taskListLubricateTypeLabelsList, taskListLubricateTypeValuesList, 'TaskLists  Lubricant Frequency (Top 10)');
                        aiLensDashBoardCreation('stacked', 'UnspscPPRAnalyticsType22', taskListInspectionTypeLabelsList, taskListInspectionTypeValuesList, 'TaskLists  Inspection Frequency (Top 10)');
                        aiLensDashBoardCreation('scatterpolar', 'UnspscPPRAnalyticsType23', taskListPmTypeLabelsList, taskListPmTypeValuesList, 'TaskLists  Pm Frequency (Top 10)');
                        aiLensDashBoardCreation('donut', 'UnspscPPRAnalyticsType24', taskListCalibrateTypeLabelsList, taskListCalibrateTypeValuesList, 'TaskLists  Calibrate Frequency (Top 10)');
                        aiLensDashBoardCreation('lines', 'UnspscPPRAnalyticsType25', mItemLubricateTypeLabelsList, mItemLubricateTypeValuesList, 'MItems  Lubricant Frequency (Top 10)');
                        aiLensDashBoardCreation('bar', 'UnspscPPRAnalyticsType26', mItemInspectionTypeLabelsList, mItemInspectionTypeValuesList, 'MItems  Inspection Frequency (Top 10)');
                        aiLensDashBoardCreation('bubble', 'UnspscPPRAnalyticsType27', mItemPmTypeLabelsList, mItemPmTypeValuesList, 'MItems  Pm Frequency (Top 10)');
                        aiLensDashBoardCreation('HorizentalBar', 'UnspscPPRAnalyticsType28', mItemCalibrateTypeLabelsList, mItemCalibrateTypeValuesList, 'MItems  Calibrate Frequency (Top 10)');
                        aiLensDashBoardCreation('funnel', 'UnspscPPRAnalyticsType29', mPlanLubricateTypeLabelsList, mPlanLubricateTypeValuesList, 'MPlans  Lubricant Frequency (Top 10)');
                        aiLensDashBoardCreation('bubble', 'UnspscPPRAnalyticsType30', mPlanInspectionTypeLabelsList, mPlanInspectionTypeValuesList, 'MPlans  Inspection Frequency (Top 10)');
                        aiLensDashBoardCreation('lines', 'UnspscPPRAnalyticsType31', mPlanPmTypeLabelsList, mPlanPmTypeValuesList, 'MPlans  Pm Frequency (Top 10)');
                        aiLensDashBoardCreation('pie', 'UnspscPPRAnalyticsType32', mPlanCalibrateTypeLabelsList, mPlanCalibrateTypeValuesList, 'MPlans  Calibrate Frequency (Top 10)');

                    } else {
                        var clsLabelsList = response['clsLabelsList'];
                        var clsValuesList = response['clsValuesList'];
                        var refLabelsList = response['refLabelsList'];
                        var refValuesList = response['refValuesList'];
                        var refTypeLabelsList = response['refTypeLabelsList'];
                        var refTypeValuesList = response['refTypeValuesList'];
                        var venNameLabelsList = response['venNameLabelsList'];
                        var venNameValuesList = response['venNameValuesList'];
                        var commodityLabelsList = response['commodityLabelsList'];
                        var commodityValuesList = response['commodityValuesList'];
                        var subCategoryLabelsList = response['subCategoryLabelsList'];
                        var subCategoryValuesList = response['subCategoryValuesList'];
                        var modalObj = {
                            title: labelObject['Message'] != null ? labelObject['Message'] : " UNSPSC (" + dataSegment + ") DashBoards",
                            body: "<div id='UnspscPPRAnalyticsMainClassId' class='UnspscPPRAnalyticsMainClass'>\n\
                           <div class='container-fluid'>\n\
                            <div class='row'>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType1' class='UnspscPPRAnalyticsType1 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType2' class='UnspscPPRAnalyticsType2 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType3' class='UnspscPPRAnalyticsType3 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType4' class='UnspscPPRAnalyticsType4 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType5' class='UnspscPPRAnalyticsType5 aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='UnspscPPRAnalyticsType6' class='UnspscPPRAnalyticsType6 aigraphContainer'></div></div>\n\
                            </div>\n\
                            </div\n\
                           </div>",
                        };
                        var buttonArray = [
                            {
                                text: 'OK',
                                click: function () {
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
                        $(".modal-dialog").addClass("modal-xl");
                        $("#dataDxpSplitterValue").addClass("viewAnalysticsPopup");
                        aiLensDashBoardCreation('donut', 'UnspscPPRAnalyticsType1', clsLabelsList, clsValuesList, 'Class Wise UNSPSC');
                        aiLensDashBoardCreation('pie', 'UnspscPPRAnalyticsType2', refLabelsList, refValuesList, 'Reference No Wise UNSPSC');
                        aiLensDashBoardCreation('pie', 'UnspscPPRAnalyticsType3', refTypeLabelsList, refTypeValuesList, 'Reference Type Wise UNSPSC');
                        aiLensDashBoardCreation('donut', 'UnspscPPRAnalyticsType4', venNameLabelsList, venNameValuesList, 'Vendor Name Wise UNSPSC');
                        aiLensDashBoardCreation('pie', 'UnspscPPRAnalyticsType5', commodityLabelsList, commodityValuesList, 'Commodity Wise UNSPSC');
                        aiLensDashBoardCreation('donut', 'UnspscPPRAnalyticsType6', subCategoryLabelsList, subCategoryValuesList, 'Sub Category UNSPSC');
                    }
                }
            }
        });
    } else {
        stopLoader();
        var modalObj = {
            title: labelObject['Message'] != null ? labelObject['Message'] : "DashBoards",
            body: ' Please select type(Like UNSPSC)',
        };
        var buttonArray = [
            {
                text: 'OK',
                click: function () {
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
        $(".modal-dialog").addClass("modal-xs");
    }
}
function ViewAllTypesXMLData(xmlType) {
    var resultStr = "";
    var currentMasterGridId = $("#currentSelectMasterGridId").val();
    if (xmlType != null && xmlType != undefined && xmlType != "" && xmlType == "SAP") {
        resultStr = "<div id='idxpPPRSearchSapXML' class='idxpPPRSearchSapXMLClass'><div class='leftSelectButtonOptions'><ul class='idxpPPRSearchSapXMLInnerClass'>"
                + "<li onclick=\"getSelectBasedSapXml('SAP','T', event,'" + currentMasterGridId + "')\">"
                + "<span class=\"viewIcon\"><img src=\"images/PprXml.png\" class=\"\" width='18px;'></span>"
                + "<span class=\"viewText\">Template</span></li>"
                + "<li onclick=\"getSelectBasedSapXml('SAP','TD', event,'" + currentMasterGridId + "')\">"
                + "<span class=\"viewIcon\"><img src=\"images/PprXmlData.png\" class=\"\" width='18px;'></span>"
                + "<span class=\"viewText\">Master Data</span></li>"
                + "<li onclick=\"getSelectBasedSapXml('SAP','CS', event,'" + currentMasterGridId + "')\">"
                + "<span class=\"viewIcon\"><img src=\"images/PprCrossMap.png\" class=\"\" width='18px;'></span>"
                + "<span class=\"viewText\">Cross Mapping</span></li>"
                + "<li onclick=\"getSelectBasedSapXml('SAP','PX', event,'" + currentMasterGridId + "')\">"
                + "<span class=\"viewIcon\"><img src=\"images/ppr.png\" class=\"\" width='18px;'></span>"
                + "<span class=\"viewText\">PIDX</span></li>"
                + "<li onclick=\"getSelectBasedSapXml('SAP','PP', event,'" + currentMasterGridId + "')\">"
                + "<span class=\"viewIcon\"><img src=\"images/ppo.png\" class=\"\" width='18px;'></span>"
                + "<span class=\"viewText\">PPO</span></li>"
                + "<li onclick=\"getSelectBasedSapXml('SAP','EC', event,'" + currentMasterGridId + "')\">"
                + "<span class=\"viewIcon\"><img src=\"images/PprEclass.png\" class=\"\" width='18px;'></span>"
                + "<span class=\"viewText\">eClass</span></li>"
                + "</ul></div><div id='rightResultsDivId' class='rightResultsDiv'></div></div>";
    } else if (xmlType != null && xmlType != undefined && xmlType != "" && xmlType == "PiLog") {
        resultStr = "<div id='idxpPPRSearchSapXML' class='idxpPPRSearchSapXMLClass'><div class='leftSelectButtonOptions'><ul class='idxpPPRSearchSapXMLInnerClass'>"
                + "<li onclick=\"getSelectBasedSapXml('PiLog','T', event,'" + currentMasterGridId + "')\">"
                + "<span class=\"viewIcon\"><img src=\"images/PprXml.png\" class=\"\" width='18px;'></span>"
                + "<span class=\"viewText\">Template</span></li>"
                + "<li onclick=\"getSelectBasedSapXml('PiLog','TD', event,'" + currentMasterGridId + "')\">"
                + "<span class=\"viewIcon\"><img src=\"images/PprXmlData.png\" class=\"\" width='18px;'></span>"
                + "<span class=\"viewText\">Master Data</span></li>"
                + "<li onclick=\"getSelectBasedSapXml('PiLog','CS', event,'" + currentMasterGridId + "')\">"
                + "<span class=\"viewIcon\"><img src=\"images/PprCrossMap.png\" class=\"\" width='18px;'></span>"
                + "<span class=\"viewText\">Cross Mapping</span></li>"
                + "<li onclick=\"getSelectBasedSapXml('PiLog','PX', event,'" + currentMasterGridId + "')\">"
                + "<span class=\"viewIcon\"><img src=\"images/ppr.png\" class=\"\" width='18px;'></span>"
                + "<span class=\"viewText\">PIDX</span></li>"
                + "<li onclick=\"getSelectBasedSapXml('SAP','PP', event,'" + currentMasterGridId + "')\">"
                + "<span class=\"viewIcon\"><img src=\"images/ppo.png\" class=\"\" width='18px;'></span>"
                + "<span class=\"viewText\">PPO</span></li>"
                + "<li onclick=\"getSelectBasedSapXml('SAP','EC', event,'" + currentMasterGridId + "')\">"
                + "<span class=\"viewIcon\"><img src=\"images/PprEclass.png\" class=\"\" width='18px;'></span>"
                + "<span class=\"viewText\">eClass</span></li>"
                + "</ul></div><div id='rightResultsDivId' class='rightResultsDiv'></div></div>";
    }
    $("#dialog").html(resultStr);
    $("#dialog").dialog({
        resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : '' + xmlType + ' JSON'),
        modal: true,
        height: 'auto',
        minHeight: 'auto',
        minWidth: 800,
        maxWidth: 'auto',
        fluid: true,
        buttons: [
            {
                text: (labelObject['OK'] != null ? labelObject['OK'] : 'OK'),
                click: function () {
//                    showLoader();
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }

            }
        ], open: function () {
            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");

        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });


}

function getSelectBasedSapXml(xmlSelectType, xmlDataType, e, masterGridId) {
    var activeClass = e.currentTarget;
    $('.idxpPPRSearchSapXMLInnerClass li').removeClass("active");
    $(activeClass).addClass("active");
    showLoader();
    var PPRXmlArray = [];
//    $('.dataDxpSplitterValue').modal('hide'); 
    $('#rightResultsDivId').html();
    var selectedrowindexes = $('#' + masterGridId).jqxGrid('selectedrowindexes');
    var rowData = $('#' + masterGridId).jqxGrid('getrowdata', selectedrowindexes);
    PPRXmlArray.push(rowData);
    var xmlDomainType = $('#domainListDropdown').val();
    if (xmlSelectType != null && xmlSelectType != undefined && xmlSelectType != "") {
        $.ajax({
            type: "POST",
            url: 'getSapXmlSelectedTemplateData',
            data: {
                'xmlSelectType': xmlSelectType,
                'xmlDataType': xmlDataType,
                'xmlDomainType': xmlDomainType,
                'masterGridId': masterGridId,
                'itemsString': JSON.stringify(PPRXmlArray),
            },
            success: function (response) {
                stopLoader();
                if (response != null && response != undefined && response != "") {
                    var responseObj = JSON.parse(response);
                    if (xmlDataType != null && xmlDataType != undefined && xmlDataType != "" && xmlDataType == 'T') {
                        $("#rightResultsDivId").html(responseObj['Template']);
                    } else {
                        var dataStr = "<div id=\"sapBodyXmlMsgBody\" class=\"sapBodyXmlMsgBody\"></div>";
                        dataStr += "<div class=''><div class='sapBodyXmlDivID' id='sapBodyXmlDivID'><pre>" + highlightXml(formatXml(responseObj['resultObjectStr'])) + "</pre></div><div class='xmlActionButtons'>" + responseObj['buttonObjectStr'] + "</div></div>";
                        $("#rightResultsDivId").html(dataStr);
                    }
                }
            }
        });
    }
}

function formatXml(xml) {
    var formatted = '';
    var reg = /(>)(<)(\/*)/g;
    xml = xml.replace(reg, '$1\r\n$2$3');
    var pad = 0;
    $.each(xml.split('\r\n'), function (index, node) {
        var indent = 0;
        if (node.match(/.+<\/\w[^>]*>$/)) {
            indent = 0;
        } else if (node.match(/^<\/\w/)) {
            if (pad !== 0) {
                pad -= 1;
            }
        } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
            indent = 1;
        } else {
            indent = 0;
        }

        var padding = '';
        for (var i = 0; i < pad; i++) {
            padding += '  ';
        }

        formatted += padding + node + '\r\n';
        pad += indent;
    });

    return formatted;
}
function getPPRTemplateForm(searchId, divId, reqType, searchName, pprDropdownId) {
    var pprDrpdwnDomain = "";
    if (pprDropdownId != null && pprDropdownId != "" && pprDropdownId != undefined) {
        pprDrpdwnDomain = $("#" + pprDropdownId).val();
    }
    var domainNameChangeFlag = localStorage.getItem("domainNameChngFlag");
    if (domainNameChangeFlag != null && domainNameChangeFlag != ""
            && domainNameChangeFlag != undefined && domainNameChangeFlag == 'Y') {
        pprDrpdwnDomain = $("#domainListDropdown").val();
        if (pprDrpdwnDomain == null || pprDrpdwnDomain == "" || pprDrpdwnDomain == undefined) {
            pprDrpdwnDomain = "ASSET";
        }
    }

    $("#searchResultsCountId").hide();
    $("#dxp1Firstdiv").html("");
    $("#dxp1Seconddiv").html("");
    $("#SearchResult").attr("disabled", false);
    $("#searchId").val(searchId);
    $("#SearchResult").val("");
    $(".accordion").remove();
    $("#mainDxpSplitter").hide();
    $("#searchDxpSplitter").hide();
    $("#dxpClassficationAppendClass").hide();
    $("#VisualizePageBody").hide();
    $("#defaultShowCards").hide();
    $("#defaultShowCards").html("");
    $("#basketNameValId").remove();
    try {
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridisImport", "");
    } catch (e) {

    }

    reqType = $("#dxpAdavanceSearchOptions").val();
    if (reqType == null || reqType == undefined || reqType == '') {
        reqType = $("#currentSearchReqType").val();
    }

    if (reqType != 'S' && reqType != 'D') {
//        $("#SearchResult")
        document.getElementById("SearchResult").readOnly = true;
    } else {
        document.getElementById("SearchResult").readOnly = false;
    }
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
        $.ajax({
            type: "POST",
            url: 'getParamSearchForm',
            data: {
                'searchId': searchId,
                'reqType': reqType,
                pprDrpdwnDomain: pprDrpdwnDomain
            },
            traditional: true,
            cache: false,
            success: function (response) {
                $("#dxpClassficationAppendClass").hide();
                //$("#searchDxpSplitter").show();
                $(".visionjqxTreeDiv").hide();

//                $("#dxpClassficationAppendClass").hide();
                $("#DxpParamSplitterDotsClass").show();
                if (response != null && response != '') {
                    var responseObj = JSON.parse(response);
                    getPersonalizationDataOpt(searchId, reqType);
                    getClassificationSuggetions();
                    if (reqType == 'D') {

                    } else {
                        $("#dxp1Firstdiv").html("");
                        $("#dxp1Seconddiv").html("");

                        try {
                            $('#dxp1MainSplitter').jqxSplitter('expand');
                        } catch (e) {

                        }
                        $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '100%'}]});
                        $('#dxp1MainSplitter').on('expanded', function (event) {
                            $("#dxp1MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '100%'}]});

                        });

                        try {
                            $('#dxp1MainSplitter').jqxSplitter('expand');
                        } catch (e) {

                        }
                        $("#dxp1Firstdiv").html(responseObj['formString']);
                        $("#dxp1Firstdiv").css("width", "100%");
                        $("#dxp1Firstdiv").addClass("PilogresearchSearch");
                        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'Parametric Search', 'N');
                        if ($("#dxpTabs").is(":visible")) {

                        } else {
                            toggleTabsAndMenus(event);
                        }
                    }

                    $("#dxp1TabsWithGridContent").addClass("gridHeight");

//                      $("#searchTypeSplitter").html(responseObj['formString']);
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
                    if (pprDrpdwnDomain != null && pprDrpdwnDomain != undefined && pprDrpdwnDomain != "") {
                        $("#pprMultiDomainSearch").val(pprDrpdwnDomain);
                    } else {
                        $("#pprMultiDomainSearch").val("PRODUCT");
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

// Function to highlight XML string
function highlightXml(xml) {
    xml = xml.replace(/</g, '&lt;').replace(/>/g, '&gt;'); // Escape HTML brackets
    xml = xml.replace(/(&lt;\/?[^&gt;]+&gt;)/g, function (match) {
        return "<span class='xml-tag'>" + match + "</span>";
    });
    xml = xml.replace(/(\s+[\w-]+="[^"]*")/g, function (match) {
//        return '<span class="xml-attribute">' + match + '</span>';
        return "<span class='xml-attribute'>" + match + "</span>";
    });
    xml = xml.replace(/("[^"]*")/g, function (match) {
//        return '<span class="xml-value">' + match + '</span>';
        return "<span class='xml-value'>" + match + "</span>";
    });
    return xml;
}
function indexLogFile(processId) {
    var processLogTable = "<div id='indexProcessLogDiv' class='LogTableMain'>"
            + "<div id=''> "
            + " <div class='logIconDiv'>"
            + "</div>"
            + "</div"
            + "<input type='hidden' id='currentIndexProcesslogDate'/><input type='hidden' id='currentIndexProcesslogIndex'/><input type='hidden' id='previousIndexProcessLogIndex'/>"//currentProcesslogIndex
            + "<table id='indexProcesslogTable' class='logtable' style='width:100%'>"
            + "<thead>"
            + "<tr>"
            + "<th width='5%'></th>"
            + "<th width='25%' style='background: #0071c5 none repeat scroll 0 0;color: #FFF;text-align: center;'>Time Stamp</th>"
            + "<th width='70%' style='background: #0071c5 none repeat scroll 0 0;color: #FFF;text-align: center;'>Message</th>"
            + "</tr>"
            + "</thead>"
            + "<tbody>"
            + "</tbody>"
            + "</table>"
            + "</div>";

    $("#dialog").html(processLogTable);
    $("#dialog").dialog({
        title: (labelObject['Index Log File'] != null ? labelObject['Index Log File'] : 'Index Log File'),
        modal: false,
        width: 'auto',
        maxWidth: 500,
        height: 'auto',
        maxHeight: 500,
        position: {
            my: 'right bottom',
            at: 'right bottom-40',
            of: window
        },
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    if (processLogInterval != null) {
                        clearInterval(processLogInterval);
                    }
                    $(this).html("");
                    //                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }

            }],
        open: function () {
            processLogInterval = setInterval(function () {
                indexRefreshLogFile(processId) // this will run after every 1 seconds
            }, 2000);


            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
            $(".ui-dialog").addClass('visionDMTreePopup');
            //                            $("#dataMigrationTabs").jqxTabs({width: "100%", height: "130px", position: 'top', theme: 'ui-redmond', reorder: true});
            //
            //                            $('#dataMigrationTabs').unbind('selected').on('selected', function (event) {
            //                                $('#iconsdiv').attr('style', 'margin-top:4px !important');
            //                            });
            //                            $("#dataMigrationTabs").jqxTabs({width: "100%", height: "100%", position: 'top', theme: 'ui-redmond', reorder: true});

            if ($("#dialog").find(".ui-dialog-titlebar").hasClass("maxMinBtns")) {
                $(".maxMinBtns").remove();
                $("#dialog").closest(".ui-dialog").find(".ui-dialog-titlebar").append('<div class="maxMinBtns" style="display: flex;margin-right:15px;"><button id="maximizeDialog" class="ui-button ui-corner-all ui-widget">â›¶</button><button id="minimizeDialog" class="ui-button ui-corner-all ui-widget">-</button></div>');
            } else {
                $(".maxMinBtns").remove();
                $("#dialog").closest(".ui-dialog").find(".ui-dialog-titlebar").append('<div class="maxMinBtns" style="display: flex;margin-right:15px;"><button id="maximizeDialog" class="ui-button ui-corner-all ui-widget">â›¶</button><button id="minimizeDialog" class="ui-button ui-corner-all ui-widget">-</button></div>');
            }

            $("#maximizeDialog").on("click", function () {
                $("#dialog").dialog("option", "height", 500);
                $("#dialog").dialog("option", "position", {my: "right bottom", at: "right bottom-40", of: window});
            });
            $("#minimizeDialog").on("click", function () {
                $("#dialog").dialog("option", "height", 240);
                $("#dialog").dialog("option", "position", {my: "right bottom", at: "right bottom-40", of: window});
            });
        },
        beforeClose: function (event, ui) {

            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }, close: function (event, ui) {
            if (processLogInterval != null) {
                clearInterval(processLogInterval);
            }
        }
    });
}

function indexRefreshLogFile(processId) {
    stopLoader();
    var currentProcesslogDate = $("#currentIndexProcesslogDate").val();
    var currentProcesslogIndex = $("#currentIndexProcesslogIndex").val();
    $.ajax({
        type: 'post',
        traditional: true,
        dataType: 'html',
        cache: false,
        url: 'refreshIndexProcessLog',
        async: true,
        data: {
            currentIndexProcesslogDate: ((currentProcesslogDate != null && currentProcesslogDate != '') ? currentProcesslogDate : ""),
            currentIndexProcesslogIndex: ((currentProcesslogIndex != null && currentProcesslogIndex != '') ? currentProcesslogIndex : ""),
            processId: processId
        },
        success: function (response) {
            if (response != null && response != '') {
                var resultObj = JSON.parse(response);
                if (resultObj != null && !jQuery.isEmptyObject(resultObj)) {
                    showRecordCountOnOp(resultObj);
                    $("#previousIndexProcessLogIndex").val($("#currentIndexProcesslogIndex").val());
                    $("#currentIndexProcesslogIndex").val(resultObj['currentProcesslogIndex']);
                    var logTxt = resultObj['logTxt'];
                    if (logTxt != null && logTxt != '') {

                        console.log("logTxt : " + logTxt);


                        if ($("#currentIndexProcesslogIndex").val() != $("#previousIndexProcessLogIndex").val()) {
                            if ($("#indexProcessingLoaderId").length > 0) {
                                $("#indexProcesslogTable tr:last").remove();
                            }
                            $("#indexProcesslogTable tbody").append(logTxt);
                            var logText = "<tr>"//44warning.png
                                    + "<td width='5%'><img src='images/information.gif' style='width:16px;height:16px;padding:2px'></td>"
                                    + "<td width='25%'>" + resultObj['currentDate'] + "</td>"
                                    + "<td style='width:70%;text-align:-webkit-center;'  ><div id = 'indexProcessingLoaderId' class='dot-flashing' ></div></td>"
                                    + "</tr>";
                            $("#indexProcesslogTable tbody").append(logText);
                        }
                        $("#currentIndexProcesslogDate").val(resultObj['currentProcesslogDate']);
                        if (resultObj['processFlag'] == 'N') {
                            clearInterval(processLogInterval);
                            if ($("#indexProcessingLoaderId").length > 0) {
                                $("#indexProcesslogTable tr:last").remove();
                            }
                        }


                    } else {
                        if ($("#indexProcessingLoaderId").length > 0) {
                            $("#indexProcesslogTable tr:last").remove();
                        }

                        var logText = "<tr>"//44warning.png
                                + "<td width='5%'><img src='images/information.gif' style='width:16px;height:16px;padding:2px'></td>"
                                + "<td width='25%'>" + resultObj['currentDate'] + "</td>"
                                + "<td style='width:70%;text-align:-webkit-center;'  ><div id = 'indexProcessingLoaderId' class='dot-flashing' ></div></td>"
                                + "</tr>";
                        $("#indexProcesslogTable tbody").append(logText);
                    }
                } else {

                }
            } else {

            }
        },
        error: function (e) {
            sessionTimeout(e);
            stopLoader();
            if (processLogInterval != null) {
                clearInterval(processLogInterval);
            }
        }

    });
}
function defaultSearchFun(event) {
    advancedSearches(event);
    $(".dxpLoginHeader .massSearchListItem").css({
        "margin-right": "inherit",
        "display": "block",
        "transition": "all 3s ease-in-out"
    });
    $(".globalSearchBar").addClass("makeCenterSearchBar");
    $(".dxpLoginHeader #collapsibleNavbar .globalSearchBar .headerSearchIcon img").css("display", "none");
}
