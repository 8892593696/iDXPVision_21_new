/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var HtmlEntities = {
    "'": "&apos;",
    "<": "&lt;",
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
function startAjax() {
    $("#wait1").css("opacity", "0.99");
    $("#wait1").css("display", "block");
    $("body").css("pointer-events", "none");

}
function endAjax() {
    alert("End Ajax");
    console.log("called end Ajax");
    // delay(function () {
    $("#wait1").css("display", "none");
    $("body").css("pointer-events", "auto");
    //}, 150);
}
var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();
var userval = "";
$(document).ready(function () {
    var imageid = 0;
    $("#dictionarytext").keydown(
            function (e) {

                $(".clear_input").show();
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
    $(document).mouseup(function (e)
    {
        var container = $("#settings_panel");
        var container1 = $(".personaliseoption");
        if ((!container.is(e.target)
                && container.has(e.target).length === 0)
                && (!container1.is(e.target)
                        && container1.has(e.target).length === 0)
                )
        {
            $(container).hide();
            $("#personalizeid").toggleClass("ui-icon-triangle-1-s");
        }
    });

    $("#result").keydown(function (e) {
        e = e || window.event;
        console.log('Keyevent raised:::' + e.keyCode);
        var ajaxTime = "";
        var totalTime = "";
        //var
        if ($("#result").val() != null && $("#result").val() != '') {
            $(".clear_input").show();
        } else {
            $(".clear_input").hide();
        }
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
                    && $(this).val().length > 2) {
                delay(function () {
                    var resultVal = $("#result").val();
                    // resultVal = resultVal.replace(/[^a-zA-Z\d\s:]/g, "");
                    resultVal = resultVal.replace(/\s\s+/g, ' ');
                    $("#result").val(resultVal);
                    if (resultVal != null && resultVal != '' && resultVal.length > 2) {
                        showLoader();
                        $("#typedResult").val(resultVal);
                        var paramArray = [];
                        searchResults('S', '', paramArray);
                    } else {
                        var labelObject = {};
                        $("#dialog").html("Enter a keyword of at least 3 chars,ignoring special chars(@.,;:/ etc)  to search");
                        $("#dialog").dialog({ resizable: false,
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
                        //  $("#tooltipdiv").jqxTooltip({content: 'Enter a keyword of at least 3 chars,ignoring special chars(@.,;:/ etc)  to search', theme: 'energyblue'});
                        //  $("#tooltipdiv").jqxTooltip("close");
//                                $("#tooltipdiv").jqxTooltip();
                    }
                    //$("#tooltipdiv").jqxTooltip("close");
                }, 100);
            } else {
                $("#tooltipdiv").jqxTooltip("close");
                delay(function () {
                    userval = $("#result").val();
                    // userval = userval.replace(/[^a-zA-Z\d\s:]/g, "");
                    userval = userval.replace(/\s\s+/g, ' ');
                    // alert('userval.length:' + userval.length);
                    $("#result").val(userval);
                    if (userval.length == 0)
                    {
                        clearTextSearch();
                    } else if (userval.length <= 2)
                    {
                        $("#tooltipdiv").jqxTooltip("open");
                    } else {
                        $("#tooltipdiv").jqxTooltip("close");
                        if (userval.length > 2 || e.keyCode == 8 //Backspace
                                || e.keyCode == 46//Delete
                                ) {

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
                            $.ajax({
                                type: "POST",
                                url: "searchSuggestion",
                                data: {
                                    'searchtext': userval,
                                    'locale': locale_dd,
                                    'langID': languageid,
                                    'fuzzyFlag': $("#isFuzzy").is(':checked')
                                },
                                success: function (response) {
                                    if (response != null && response != '') {
                                        $("#intellisense").html("");
                                        var responseObj = JSON.parse(response);
                                        if (responseObj['flag']) {
                                            //suggestion
                                            $("#intellisense").html(responseObj['suggestion']);
                                            totalTime = new Date().getTime() - ajaxTime;
                                            totalTime = parseInt(totalTime) / 1000;
                                            $("#text_count").text("(Showing " + responseObj['currentRecords'].toLocaleString() + " of " + responseObj['totalRecords'].toLocaleString() + " in " + totalTime + " Sec)");
                                            $("#intellisensebox").show();
                                        } else {
                                            if (responseObj['totalRecords'] == '0') {
                                                $("#text_count").text("No record(s) found");
                                                $("#tooltipdiv").html("");
                                                $("#tooltipdiv").jqxTooltip({'content': 'No record(s) found', theme: 'energyblue'});
                                                $("#tooltipdiv").jqxTooltip("open");
                                                $("#intellisensebox").hide();
                                            } else {
                                                $("#tooltipdiv").html("");
                                                $("#tooltipdiv").jqxTooltip({content: 'Enter a keyword of at least 3 chars,ignoring special chars(@.,;:/ etc)  to search', theme: 'energyblue'});
                                                $("#tooltipdiv").jqxTooltip("close");
                                                $("#intellisensebox").hide();
                                            }

                                        }
                                    } else {
                                        $("#text_count").text("No record(s) found");
                                        $("#tooltipdiv").html("");
                                        $("#tooltipdiv").jqxTooltip({'content': 'No record(s) found', theme: 'energyblue'});
                                        $("#tooltipdiv").jqxTooltip("open");
                                        $("#intellisensebox").hide();
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
                    }

                }, 500);
            }
        }

    }
    );


});// END OF DOCUMENT LOAD

function getPropertiesByClassName(classTerm, conceptId) {
    console.log("classTerm:::" + classTerm + "::conceptId:::" + conceptId);
    if (conceptId != null && conceptId != '') {
        showLoader();
        $.ajax({
            type: "POST",
            url: 'descriptorProperties',
            data: {
                conceptId: conceptId
            },
            traditional: true,
            cache: false,
            success: function (response) {

                console.log('Response::' + response);
                $("#classProperties").html(response);
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
                });
                stopLoader();
            },
            error: function (e) {
                console.log(e);
                stopLoader();
                sessionTimeout(e);
            }

        });
    }
}
function clearTabs(searchType) {

}
function getPprSearchData(searchId) {
    var pprsearchInd = $("#accordion").attr("data-pprsearch");
    console.log("pprsearchInd::::" + pprsearchInd);
    if (pprsearchInd == 'N') {
        $("#accordion").attr("data-pprsearch", "Y");
        getParamForm(searchId, 'pprSearchCover', 'ppr');

    }
    getPersonalizationDataOpt('PR');
}
function getSpecSearchData(searchId) {
    var pprsearchInd = $("#accordion").attr("data-specsearch");
    console.log("pprsearchInd::::" + pprsearchInd);
    $("#currentSpecSearchId").val(searchId);
    if (pprsearchInd == 'N') {
        $("#accordion").attr("data-specsearch", "Y");
        getParamForm(searchId, 'specSearchCover', 'spec');

    }
    getPersonalizationDataOpt('M');
    stopLoader();
}
function getParametricSearchData(searchId) {
    var parametricInd = $("#accordion").attr("data-parametric");
    console.log("parametricInd::::" + parametricInd);
    if (parametricInd == 'N') {
        $("#accordion").attr("data-parametric", "Y");
        getParamForm(searchId, 'paramSearchCover', '');

    }
    getPersonalizationDataOpt('P');
    stopLoader();
}

function clearParamSearch(paramId, type) {
    $("#" + paramId + " input[type=checkbox]").prop('checked', false);
    $("#" + paramId + " input[type=text]").val('');
    $("#" + paramId + " input[type=text]").removeAttr('disabled');
    $('select').each(function () {
        $(this).prop('selectedIndex', 0);
        $(this).attr('data-staged', 'N');
        if (type == 'ppr') {
            togglePprOperatorLOV($(this).attr('id').toString().replace("ddw", ""));
        } else {
            $(this).prop('selectedIndex', 0);
            $(this).attr('data-staged', 'N');
            toggleOperatorLOV($(this).attr('id').toString().replace("ddw", ""));
        }

//        togglePprOperatorLOV($(this).attr('id').toString().replace("ddw", ""));
    });
    stopLoader();
}
function getParamForm(searchId, divId, reqType, searchName) {
    $.ajax({
        type: "POST",
        url: 'getParamSearchForm',
        data: {
            'searchId': searchId,
            reqType: reqType,
            searchName: searchName
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
function toggleRange(rowid) {
    $("#to" + rowid).toggle();
    $("#tbmin" + rowid).toggle();
    $("#tbmax" + rowid).toggle();
    $("#tb" + rowid).toggle();
    if ($("#tb" + rowid).css('display') != 'none') {
        $("#tbmin" + rowid).val("");
        $("#tbmax" + rowid).val("");
        $("#ddw" + rowid).val("EQUALS");
    } else {
        $("#ddw" + rowid).val("BETWEEN");
        $("#tb" + rowid).val("");
    }

}
//spec//
function toggleSpecRange(rowid) {
    $("#specto" + rowid).toggle();
    $("#spectbmin" + rowid).toggle();
    $("#spectbmax" + rowid).toggle();
    $("#spectb" + rowid).toggle();
    if ($("#spectb" + rowid).css('display') != 'none') {
        $("#spectbmin" + rowid).val("");
        $("#spectbmax" + rowid).val("");
        $("#specddw" + rowid).val("EQUALS");
    } else {
        $("#specddw" + rowid).val("BETWEEN");
        $("#spectb" + rowid).val("");
    }
}
//spec//
function togglePprRange(rowid) {
    $("#pprto" + rowid).toggle();
    $("#pprtbmin" + rowid).toggle();
    $("#pprtbmax" + rowid).toggle();
    $("#pprtb" + rowid).toggle();
    if ($("#pprtb" + rowid).css('display') != 'none') {
        $("#pprtbmin" + rowid).val("");
        $("#pprtbmax" + rowid).val("");
        $("#pprddw" + rowid).val("EQUALS");
    } else {
        $("#pprddw" + rowid).val("BETWEEN");
        $("#pprtb" + rowid).val("");
    }

}
function togglePprOperatorLOV(rowid) {
    if ($.trim($("#ddw" + rowid).val()) == 'BETWEEN') {
        $("#pprtbmin" + rowid).show();
        $("#pprtbmax" + rowid).show();
        $("#pprtbmaxddw" + rowid).show();
        $("#pprtbminddw" + rowid).show();
        $("#pprto" + rowid).show();
        $("#pprtb" + rowid).hide();
        $("#pprtbddw" + rowid).hide();
        $("#pprtb" + rowid).removeAttr('disabled');
    } else if ($.trim($("#pprddw" + rowid).val()) == 'IS'
            || $.trim($("#pprddw" + rowid).val()) == 'IS NOT') {
        $("#pprtbddw" + rowid).show();
        $("#pprtbmin" + rowid).hide();
        $("#pprtbmax" + rowid).hide();
        $("#pprto" + rowid).hide();
        $("#pprtb" + rowid).show();
        $("#pprtbmaxddw" + rowid).hide();
        $("#pprtbminddw" + rowid).hide();
        $("#pprtb" + rowid).val('NULL');
        $("#pprtb" + rowid).attr('disabled', 'disabled');
    } else {
        $("#pprtbddw" + rowid).show();
        $("#pprtbmin" + rowid).hide();
        $("#pprtbmax" + rowid).hide();
        $("#pprto" + rowid).hide();
        $("#pprtb" + rowid).show();
        $("#pprtbmaxddw" + rowid).hide();
        $("#pprtbminddw" + rowid).hide();
        $("#pprtb" + rowid).removeAttr('disabled');
        if ($.trim($("#pprtb" + rowid).val()) == 'NULL')
        {
            $("#pprtb" + rowid).val('');
        }


    }


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
function toggleSpecOperatorLOV(rowid) {
    if ($.trim($("#specddw" + rowid).val()) == 'BETWEEN') {
        $("#spectbmin" + rowid).show();
        $("#spectbmax" + rowid).show();
        $("#spectbmaxddw" + rowid).show();
        $("#spectbminddw" + rowid).show();
        $("#specto" + rowid).show();
        $("#spectb" + rowid).hide();
        $("#spectbddw" + rowid).hide();
        $("#spectb" + rowid).removeAttr('disabled');
    } else if ($.trim($("#specddw" + rowid).val()) == 'IS' || $.trim($("#specddw" + rowid).val()) == 'IS NOT') {
        $("#spectbddw" + rowid).show();
        $("#spectbmin" + rowid).hide();
        $("#spectbmax" + rowid).hide();
        $("#specto" + rowid).hide();
        $("#spectb" + rowid).show();
        $("#spectbmaxddw" + rowid).hide();
        $("#spectbminddw" + rowid).hide();
        $("#spectb" + rowid).val('NULL');
        $("#spectb" + rowid).attr('disabled', 'disabled');
    } else {
        $("#spectbddw" + rowid).show();
        $("#spectbmin" + rowid).hide();
        $("#spectbmax" + rowid).hide();
        $("#specto" + rowid).hide();
        $("#spectb" + rowid).show();
        $("#spectbmaxddw" + rowid).hide();
        $("#spectbminddw" + rowid).hide();
        $("#spectb" + rowid).removeAttr('disabled');
        if ($.trim($("#spectb" + rowid).val()) == 'NULL')
        {
            $("#spectb" + rowid).val('');
        }


    }


}
function populateDropDown(dddwid, cssid, rowid, dependencyColumns, reqtype)
{
//    var dependencyColumnsStr = "";
//    if (dependencyColumns != null && dependencyColumns != 'null' && dependencyColumns != '') {
//        var dependencyColumnsArray = dependencyColumns.split(",");
//        for (var i = 0; i < dependencyColumnsArray.length; i++) {
//      var colIndex =  $("#"+reqtype+dependencyColumnsArray[i]).attr("data-columnindex");
//      dependencyColumnsStr+=reqtype+"tb"+colIndex;
//            if (i != dependencyColumnsArray.length-1) {
//                 dependencyColumnsStr+=",";
//            }
//        }
//    }
//    console.log("dependencyColumnsStr:::"+dependencyColumnsStr)
    visionDropdown(dddwid, "", "SEARCH-VIEW", "", "", "", cssid, rowid);
}
function slideSettings() {
//  $("#settings_panel").toggle(100)
    $('#settings_panel').toggle('slide', {direction: 'right'}, 500);
    $("#personalizeid").toggleClass("ui-icon-triangle-1-s");
    var slideSettingsInd = $("#accordion").attr("data-slidesettingsind");
//    if (slideSettingsInd == 'N') {
//         $("#accordion").attr("data-slidesettingsind","Y");
//        getPersonalizationData();
//    }

    //$('#showcriteria').toggle();
}
function clearTextSearch() {
    stopLoader();
    $("#text_count").text("");
    $("#result_count").text('');
    $("#result").cleanData;
    $("#result").val('');
    $("#intellisense").empty();
    $("#intellisense1").empty();
    $("#intellisensebox").css("background", "none");
    //$("#searchResults").jqxGrid('clear');
    // $("#templatesearchResults").jqxGrid('clear');
    $("#intellisensebox").attr("data-space", "no");
    $("#result").attr("data-selected", "NO");
    $("#intellisensebox").attr("data-selection-type", "contain");
    $("#tresults").attr("data-clicked", "no");
    $("#containsearch").prop("checked", "checked");
    //$("#localedd").find('option:first').attr('selected', 'selected');
//    $("#localedd").prop('selectedIndex', 0);


    $("#localedd option").each(function () {
        if ($(this).attr('data-code') == $("#sessionLocale").val())
        {
            $('#localedd').val(this.value);
            return false;
        }
    });
    sourceArray = [];
    $("#tooltipdiv").jqxTooltip("close");
    //   $("#intellisensebox").hide();

    $("#intellisensebox").attr('data-text', 'NA');
    try {
        $('#searchResults').jqxGrid('clear');
        $("#search_count").html("");
//        $('#templatesearchResults').jqxGrid('clear');
    } catch (err) {
        console.log("Caught error while clearing textsearch:::" + err);
    }
    $(".clear_input").hide();
}
var fieldsArray = [];
function searchResults(searchType, reqType, paramsArray, cattype, searchName) {
    var searchId = $("#accordion").attr("data-id");
    visionSearchIconsChange(searchId + "_" + reqType);
    visionSearchIconsChange("resulttabid");
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
            'locale': locale,
//            'locale': locale,
            searchName: searchName
        },
        traditional: true,
        cache: false,
        success: function (gridResultObj) {
            showLoader();
            if (gridResultObj != null) {
                $("#accordion").accordion({active: parseInt($("#accordion").attr("data-searchresults"))});
//                $("#accordion").accordion({active: 4});
                try {
                    $("#searchResults").jqxGrid("destroy");
                } catch (e) {
                }
                $("#searchResultsCover").html("<div id='searchResults'></div>");
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

                //searchButtonObj
                //  alert("hrefObj:::::"+JSON.stringify(hrefObj));
                if (gridResultObj != null && gridResultObj.datafields) {

//                    var imagerenderer = function (row, datafield, value) {
//
//                        return '<img src="" id="ind' + row + '" class="indimage"><label id="imgLabel' + row + '" class="indimage">Show Image</label>';
//                    };
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

                        return '<div style="white-space: pre-line;">' + value + '</div>';
                    };
                    var coldataWarpText = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var colwidth = $("#searchResults").jqxGrid('getcolumnproperty', columnfield, 'width');
                        var scrollPosition = $("#searchResults").jqxGrid('scrollposition');
                        var tempContainerdiv = '<div id = "wraptempContainerdiv"style="display:inline-block; visibility:hidden; position:absolute; white-space: normal; word-wrap: break-word; width:' + colwidth + 'px; ">';
//                        var tempContainerdiv = '<div id = "wraptempContainerdiv"style="display:inline-block; visibility:hidden; position:absolute; white-space: normal; word-wrap: break-word;">';
                        var tempContainer = $(tempContainerdiv)
                                .html(value)
                                .appendTo('body');
                        var textHeight = tempContainer.outerHeight(true);
                        try {
                            $('#wraptempContainerdiv').remove();
                            tempContainer.remove();
                        } catch (w) {
                            tempContainer.remove();
                        }
                        var gridrowsheight = $("#searchResults").jqxGrid('rowsheight');
                        
                        if (textHeight > gridrowsheight) {
                            $("#searchResults").jqxGrid('setrowheight', row, textHeight / 1.5);
                        }
                            
                         $("#searchResults").jqxGrid('scrolloffset', scrollPosition.top, scrollPosition.left);
                         
                         var uuu_columnstyle = "white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;";
                    if (fieldsInitParamObj != null && !jQuery.isEmptyObject(fieldsInitParamObj)) {
                                var selectedColumnInitParamObj = fieldsInitParamObj[columnfield];
                                if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
                                    uuu_columnstyle = selectedColumnInitParamObj['uuu_columnstyle'];
                                    if (uuu_columnstyle != null && uuu_columnstyle != ''
                                            && uuu_columnstyle != 'undefined'
                                            && uuu_columnstyle != undefined
                                            ) {
                                         
                                    }else{
                                        uuu_columnstyle = "white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;";
                                    }
                                }
                            }
//                   return '<div style="white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;">' + value + '</div>';
                   return '<div style="'+uuu_columnstyle+'">' + value + '</div>';

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



                    //   gridPropObj.rendergridrows=function(obj) {return obj.data;};   
                    // for work flow start
                    if (gridPropObj.rendergridrows != null && gridPropObj.rendergridrows != "") {

                        gridPropObj.rendergridrows = eval('(' + gridPropObj.rendergridrows + ')');
                    }
//                    if (gridPropObj.rowsheight != null) {
//                        gridPropObj.rowsheight = parseInt(gridPropObj.rowsheight);
//                        gridPropObj.autorowheight = true;
//                        $('.show_detail').css('height', parseInt(gridPropObj.rowsheight + "px"));
//                    } else {
//                        $('.show_detail').css('height', '25px');
//                    }
                    var searchText = $("#result").val() != null ? $("#result").val() : "";
                    $("#colsArrayStr").val(JSON.stringify(gridResultObj['colsArray']));

                    $("#currentSmartSearchData").val(searchText);
                    $("#currentSearchData").val(JSON.stringify(paramsArray));
                    $("#currentSearchType").val(searchType);
                    $("#currentSearchReqType").val(reqType);
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
                                    'locale': locale,
                                    'cattype': cattype,
                                    'fuzzyFlag': $("#isFuzzy").is(':checked'),
                                    paramsArray: JSON.stringify(paramsArray)

                                },
                                url: 'genericSearchGridResults',
                                cache: false,
                                beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                                    showLoader();
                                }, loadError: function (xhr, status, error) {
                                    stopLoader();
                                    throw new Error(error);
                                }, loadComplete: function (data)
                                {
                                    stopLoader();
                                },
                                downloadComplete: function (data, status, xhr) {

//                                    $(window).resize(function () {
//                                        setTimeout(function () {
//
//                                            var noOfRows = $('#searchResults').jqxGrid('getrows');
//                                            for (var n = 0; n < noOfRows.length; n++) {
////                                        var resultsTopValue = $("#row" + n + 'searchResults').outerHeight(true) - 25;
//                                                var resultsTopValue = $("#row" + n + 'searchResults').outerHeight(true) - 17;
//                                                $("#row" + n + 'searchResults').find('.row' + n + 'Detail').remove();
//                                                if (searchType != 'PR') {
//                                                    $("#row" + n + 'searchResults').append("<img src='images/double_arrow_svg_icon.svg' style='top:" + resultsTopValue / 2 + "px'  class='showDetails row" + n + "Detail'  alt=" + n + ">");
//                                                }
//
//                                            }
//                                            var Gridwidth = $("#contentsearchResults").css("width");
//                                            var Content_marginleft = $("#contenttablesearchResults").css("margin-left");
//                                            var rowWidth = parseInt(Gridwidth) - parseInt(Content_marginleft) - 50;
//                                            $(" .showDetails").css({'left': rowWidth});
//                                            $("#contenttablesearchResults").on('DOMMouseScroll', function (e) {
//                                                var delta = e.originalEvent.detail;
//                                                if (delta < 0) {
//                                                    $("div[role='row']").find(".showDetails").hide();
//                                                } else {
//                                                    $("div[role='row']").find(".showDetails").hide();
//                                                }
//                                            });
//                                            $("#contenttablesearchResults").on('mousewheel', function (e) {
//                                                var delta = e.originalEvent.wheelDelta;
//                                                if ((delta < 0) || (delta > 0)) {
//                                                    $("div[role='row']").find(".showDetails").hide();
//                                                }
//                                            });
//                                            $("div[role='row'] .jqx-grid-cell").hover(function () {
//                                                $(this).parent().find(".showDetails").show();
//                                                Content_marginleft = $("#contenttablesearchResults").css("margin-left");
//                                                var rowWidth = parseInt(Gridwidth) - parseInt(Content_marginleft) - 50;
//                                                $(" .showDetails").css({'left': rowWidth});
//                                            });
//                                            $("div[role='row']").hover(
//                                                    function () {
//                                                        $(this).find(".showDetails").show();
//                                                        Content_marginleft = $("#contenttablesearchResults").css("margin-left");
//                                                        var rowWidth = parseInt(Gridwidth) - parseInt(Content_marginleft) - 50;
//                                                        $(" .showDetails").css({'left': rowWidth});
//                                                    },
//                                                    function () {
//                                                        $(this).find(".showDetails").hide();
//                                                    }
//                                            );
//                                            $(".showDetails").click(function () {
//                                                console.log("showDetails::::");
//                                                var id = $(this).attr("alt");
//                                                var grid_index = $('#searchResults').jqxGrid('getrowboundindexbyid', id);
//                                                var hrefColumn = $("#hrefColumn").val();
//                                                var panelId = $("#panelId").val();
//                                                console.log(hrefColumn + ":::grid_index:::::" + grid_index);
//                                                navigateToForm(hrefColumn, $('#searchResults').jqxGrid('getrowdata', grid_index), 'form', hrefObj['hrefGridId'], panelId, 'Search View');
//                                            });
//                                            //stopLoader();
//                                        }, 500);
//                                    }).resize();
                                    return data;
                                },
                                beforeprocessing: function (data) {
                                    showLoader();
//                                                    try{
//                                                     $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
//                                                 }
//                                                 catch(e){}

                                    //   alert("beforeprocessing::::" + JSON.stringify(data));

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
                                            $("#dialog").dialog({ resizable: false,
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
                    gridPropObj.rowdetails = true;
                    gridPropObj.rendergridrows = function () {
                        return dataAdapter.records;
                    };
                    var renderToolbar = gridPropObj.renderToolbar;
                    // console.log("renderToolbar::::"+renderToolbar);
                    //  alert("renderToolbar:::"+renderToolbar);
                    gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');

//                    gridPropObj.enabletooltips = false;
//                    gridPropObj.cellhover = function (element, pageX, pageY)
//                    {
//                        var cellToolTip = $(element).text();
//                        if (cellToolTip != null && cellToolTip != '') {
//                            $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
//                                showArrow: false, content: cellToolTip});
//                            $(element).parent().jqxTooltip('open', pageX + 5, pageY + 5);
//                        }
//                    };

// Herae Row Detail Code Start
                    //  gridPropObj.rowdetails = true;
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
                                        $("#dialog").html(responseObj['rowDetailMessage']);
                                        $("#dialog").dialog({ resizable: false,
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
                        navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', hrefObj['hrefGridId'], panelId, 'Search View');
                        // navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId']);
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
                            popupedit(column, cellValue);
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
function searchResultsHandler(searchtype, luceneInd, classificationClass, descriptorid) {
    var labelObject = {};
    var searchId = $("#accordion").attr("data-id");
//    visionSearchIconsChange(searchId + "_S");
//    visionSearchIconsChange("resulttabid");
    visionSearchIconsChange();
    userval = $("#result").val();
    var resultVal = $("#result").val();
    $("#typedResult").val(resultVal);
    // resultVal = resultVal.replace(/[^a-zA-Z\d\s:]/g, "");
    resultVal = resultVal.replace(/\s\s+/g, ' ');
    $("#result").val(resultVal);
    if (resultVal != null && resultVal != '' && resultVal.length > 2) {
        var paramArray = [];
        searchResults(searchtype, '', paramArray);
    } else {
        $("#dialog").html("Enter a keyword of at least 3 chars,ignoring special chars(@.,;:/ etc)  to search");
        $("#dialog").dialog({ resizable: false,
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
function updateIntellisense(row) {
    visionSearchIconsChange();
    $("#typedResult").val($("#result").val());
    console.log("updateIntellisense:::" + row);
    var selectedStr = $("#updateIntellisense_" + row).text();
    console.log("selectedStr:::" + selectedStr);
    var replacestring = selectedStr.replace(/<b>|<\/b>/g, "");
    replacestring = replacestring.replace(/<b class="fuzzyItem">|<\/b>/g, "");
    replacestring = replacestring.replace(/<b class='fuzzyItem'>|<\/b>/g, "");
    $("#result").val(replacestring);
    var paramArray = [];
    searchResults('S', 'resultSuggestion', paramArray);

}


function navigateToFormIcon(datafield, dataStr, redirectType, hrefGridId, panelId, basketType, detailType) {

    var dataObj = JSON.parse(dataStr);
    if (detailType == 'PROCESS')
    {
        viewPendingRequest(dataObj);
    } else if (detailType == 'TIMELINE') {
        getTimeLineInfo(dataObj, hrefGridId);
    } else if (detailType == 'TREE') {
        viewSearchTreeStructure(hrefGridId, basketType, 'blank', dataObj);
    } else
    {
        navigateToForm(datafield, dataObj, redirectType, hrefGridId, panelId, basketType);
    }
}
function copyItem(copyid, jsonDataStr) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }

    if (copyid == '') {
        var copyMessage = labelObject['Copy id not configured'] != null ? labelObject['Copy id not configured'] : 'Copy id not configured';
        var dialogSplitMessage = dialogSplitIconText(copyMessage, true);
        $("#dialog").html(dialogSplitMessage);
        $("#dialog").dialog({ resizable: false,
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
        stopLoader();
    } else {
        var jsonData = JSON.parse(jsonDataStr);
        var items = {};
        var linkedColumns = $("#linkedColumns").val();
        if (linkedColumns != null && linkedColumns != '') {
            for (var key in jsonData) {
                if (linkedColumns.lastIndexOf(key) > -1) {
                    var value = jsonData[key];
                    if (value != null && value != '') {
                        value = value.replace(/\s/gi, "_");
                        value = value.replace(/[#]/g, "_");
                    }
                    //    console.log("key::::" + key + ":::value::::" + value);

                    //  console.log("key::::" + key + ":::value::::" + value);
                    items[key] = value;
                }
            }
        }
        items.baskettype = jsonData['basketType'];
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
                        var hiddenVal = jsonData[hiddenIds[1]];
                        //alert("hiddenIds[1]:::"+hiddenIds[1]);
                        //  alert("hiddenVal:::"+hiddenVal);
                        for (var i = 0; i < columnsArray.length; i++) {
                            if (columnsArray[i] != 'NAME1') {
                                items[columnsArray[i]] = hiddenVal;
                                jsonData[columnsArray[i]] = hiddenVal;
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
        items.gridId = jsonData['gridId'];
//        items.gridId = $("#hrefGridId").val();
        items.panelId = jsonData['panelId'];
        items.objectid = jsonData['formId'];
        items.formId = jsonData['formId'];
//        items.panelId = $("#panelId").val();
        items.tabId = "";
        //  console.log("items:::" + JSON.stringify(items));
        //   console.log("data:::" + JSON.stringify(data));
        var itemsstring = JSON.stringify(items);
        showLoader();
        instanceDropDownMM(items, copyid, jsonData);
    }
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
function navigateToForm(datafield, data, redirectType, hrefGridId, panelId, baskettype) {
    navigationGridId = "";
    var hrefColumn = $("#hrefColumn").val();
    try {
        if ($("#dxpTabs").is(":visible")) {

        } else {
            toggleTabsAndMenus(event);
        }
    } catch (ee) {
    }
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
//        items.gridId = $("#hrefGridId").val();
        items.panelId = panelId;
//        items.panelId = $("#panelId").val();
        items.tabId = "";
        //  console.log("items:::" + JSON.stringify(items));
        //   console.log("data:::" + JSON.stringify(data));
        var itemsstring = JSON.stringify(items);
        $("#items").val(itemsstring);

        if (datafield == hrefColumn) {
// navigationGridId = gridId;
            $("#submitForm").attr("action", "formData");
//                            $("#submitForm").attr("target", "target");
            $("#submitForm").attr("target", "thatframe");
            $("#submitForm").submit();
        } else if (datafield == "show_detail") {
            $("#submitForm").attr("target", "_blank");
            $("#submitForm").attr("action", "genericDataSheet");
            $("#submitForm").submit();
        }
    } else if (datafield != null && hrefGridId != null && hrefGridId != '' && (datafield == 'CONTENT' || datafield == 'TERM')) {
//itemRegisterForm
        console.log("Template Results Clicked::" + datafield);
        var items = {};
        if (data != null) {
            var linkedColumns = "CONTENT,TERM,CLASS,CLASS_TERM,DEFINITION,uid,UID,HIDDEN_GRID_ID";
//            var linkedColumns = "CONTENT,TERM,CLASS,CLASS_TERM,CNT,DEFINITION,uid,UID,HIDDEN_GRID_ID";
            for (var key in data) {
                if (linkedColumns.lastIndexOf(key) > -1) {

                } else {
                    var value = data[key];
                    if (value != null && value != '') {
                        //  value = value.replace(/\s/gi, "_");
                        // value = value.replace(/[#]/g, "_");
                    }

                    items[key] = value;
                }
            }
            items['gridId'] = hrefGridId;
            var itemsstring = JSON.stringify(items);
            $("#items").val(itemsstring);
            $("#submitForm").attr("target", "thatframe");
            $("#submitForm").attr("action", "itemRegisterForm");
            $("#submitForm").submit();
        }
    } else if (datafield != null && datafield == 'RESEARCH_URL') {
        var enableFlag = true;
        var fieldsInitParamObjStr = $("#fieldsInitParamObjStr").val();
        if (fieldsInitParamObjStr != null && fieldsInitParamObjStr != '') {
            var fieldsInitParamObj = JSON.parse(fieldsInitParamObjStr);
            if (fieldsInitParamObj != null && fieldsInitParamObj[datafield] != null) {
                var fieldInitParamObj = fieldsInitParamObj[datafield];
                if (fieldInitParamObj != null && fieldInitParamObj['URL_DISABLE'] == 'Y') {
                    enableFlag = false;
                }
            }
        }
        console.log("enableFlag:::" + enableFlag);
        if (enableFlag) {
            window.open(data['RESEARCH_URL'], '_blank');
        }

    }

}
//function templeteMouseOver(result1, result2)
//{
//    var templeteId = result1;
//    var imagePath = $("#" + templeteId).attr("src");
//    console.log(templeteId + 'templeteId');
//    $("#visionTempleteHoverImage").empty();
////    console.log(imagePath + 'imagePath');
//    var imagePaths = "<span><img src='" + imagePath + "'></span>";
//    $("#visionTempleteHoverImage").show();
//    $("#visionTempleteHoverImage").append(imagePaths);
//}
//function templeteMouseOut(result1, result2)
//{
//    $("#visionTempleteHoverImage").empty();
//    $("#visionTempleteHoverImage").hide();
//}
function instanceDropDownMM(ssFromObject, copyId, jsonData) {
    showLoader();

//   console.log("jsondata:::iiii:::"+jsonData);
    var jsCopyObject1 = new Object();
    //jsCopyObject.formdata = response.itemstring;
    var new_locatecode = "";
    var gridId = ssFromObject['gridId'];
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $.ajax({
        type: "POST",
        traditional: true,
        dataType: 'json',
        url: "instanceDataMgr",
        data: {
            gridId: gridId
        },
        cache: false,
        success: function (response) {
            console.log("response::::4061:::;" + response);
//alert(response);
            var plantdata = response['plantdata'];
            if (response != null && response['instantPopupFlag'] != '') {
                var instantPopupFlag = response['instantPopupFlag'];
                if (instantPopupFlag != null && instantPopupFlag != ''
                        && instantPopupFlag == 'N') {
                    plantdata = '';

                    showLoader();

                    var jsCopyObject = jsonData;
                    console.log("jsCopyObject::::" + JSON.stringify(jsCopyObject));
                    jsCopyObject.NEW_PLANT = "ALL";
                    jsCopyObject.NEW_BUSINESS_UNIT = "ALL";
                    jsCopyObject.NEW_INSTANCE = "100";
                    jsCopyObject1.formdata = jsCopyObject;
                    jsCopyObject1.ssFromObject = ssFromObject;
                    //     jsonData['INSTANCE'] = selectedInstance[0];
                    // var jsonString = JSON.stringify(jsonData);

                    console.log("jsonString::::" + JSON.stringify(jsCopyObject1));
                    $.ajax({
                        type: 'post',
                        url: 'copyRecords',
                        //            async: false,
                        data: {
                            'jsonData': JSON.stringify(jsCopyObject1),
                            'copyId': copyId,
                            'controlType': 'COPY',
                            'isSearch': 'Y',
                            'formId': jsCopyObject['formId']
                        },
                        success: function (response) {
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
                                        stripValueObjArray.push(stripValueObj);
                                    }
                                }
                                jsonData['stripValue'] = stripValueObjArray;
                                //stripValue
                            }
                            stopLoader();
                            // ////alert("JSON.stringify(jsonData))::::"+JSON.stringify(jsonData));
                            //var baskettype1 = $('#baskettypehid1').val();

                            $("#dialog").html(dialogSplitMessage);
                            $("#dialog").dialog({ resizable: false,
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
                                            if (flag)
                                            {
                                                jsonData.baskettype = jsCopyObject['baskettype'];
                                                jsonData.gridId = jsCopyObject['gridId'];
                                                $("#items").val(JSON.stringify(jsonData));
                                                $("#submitForm").attr("action", "formData");
                                                $("#submitForm").submit();
                                            }

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
                        },
                        error: function (e)
                        {
                            stopLoader();
                            sessionTimeout(e);
                        }

                    });
                    // extensions(jsonString, success_msg);
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
//                    $("#selectedInstance").select2({
//                        data: response.plantdata
//                    });
//                    
                // Define the Dialog and its properties.

                //  $("#selectedInstance").chosen({allow_single_deselect: true});
                //  $("#selectedInstance").chosen({allow_single_deselect: true});
                stopLoader();
                $("#instanceDialogBox").dialog({ resizable: false,
                    modal: true,
                    title: (labelObject['Instance : Plant'] != null ? labelObject['Instance : Plant'] : 'Instance : Plant'),
//                        minHeight: 0,
//                        minWidth: 300,
                    width: 300,
                    maxWidth: 'auto',
                    height: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {

                                showLoader();
                                var selectedInstance = $('#selectedInstance').val();
                                console.log("selectedInstance::::" + selectedInstance);
                                selectedInstance = selectedInstance.split(':');
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                if (selectedInstance != null && selectedInstance != '') {
//                                    delete jsonData['PLANT'];
//                                    delete jsonData['INSTANCE'];
//                                    delete jsonData['BUSINESS_UNIT'];
                                    var jsCopyObject = jsonData;
                                    console.log("jsCopyObject::::" + JSON.stringify(jsCopyObject));
                                    jsCopyObject.NEW_PLANT = selectedInstance[1];
                                    jsCopyObject.NEW_BUSINESS_UNIT = selectedInstance[1];
                                    jsCopyObject.NEW_INSTANCE = selectedInstance[0];
                                    jsCopyObject1.formdata = jsCopyObject;
                                    jsCopyObject1.ssFromObject = ssFromObject;
                                    //     jsonData['INSTANCE'] = selectedInstance[0];
                                    // var jsonString = JSON.stringify(jsonData);

                                    console.log("jsonString::::" + JSON.stringify(jsCopyObject1));
                                    $.ajax({
                                        type: 'post',
                                        url: 'copyRecords',
//            async: false,
                                        data: {
                                            'jsonData': JSON.stringify(jsCopyObject1),
                                            'copyId': copyId,
                                            'controlType': 'COPY',
                                            'isSearch': 'Y',
                                            'formId': jsCopyObject['formId']
                                        },
                                        success: function (response) {
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
                                                        stripValueObjArray.push(stripValueObj);
                                                    }
                                                }
                                                jsonData['stripValue'] = stripValueObjArray;
                                                //stripValue
                                            }
                                            stopLoader();
                                            // ////alert("JSON.stringify(jsonData))::::"+JSON.stringify(jsonData));
                                            //var baskettype1 = $('#baskettypehid1').val();

                                            $("#dialog").html(dialogSplitMessage);
                                            $("#dialog").dialog({ resizable: false,
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
                                                            if (flag)
                                                            {
                                                                jsonData.baskettype = jsCopyObject['baskettype'];
                                                                jsonData.gridId = jsCopyObject['gridId'];
                                                                $("#items").val(JSON.stringify(jsonData));
                                                                $("#submitForm").attr("action", "formData");
                                                                $("#submitForm").submit();
                                                            }

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
                                        },
                                        error: function (e)
                                        {
                                            stopLoader();
                                            sessionTimeout(e);
                                        }

                                    });
                                    // extensions(jsonString, success_msg);
                                }

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
        },
        error: function (e) {
            stopLoader();
            //  ////////alert(e.message)
            sessionTimeout(e);
        }
    });
}
function getExportType(selectedGridId)
{
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    //  var selectedGridId = $('#exportGridId').val();
    var exportType = $('#export' + selectedGridId).val();
    if (exportType == "CSV")
    {
        $("input.exportClass").css('background', '#fff url("images/export_as_csv_icon_blue.png") no-repeat 5px center');
        $("input.exportClass").hover(
                function () {
                    $("input.exportClass").css('background', '#0071c5 url("images/export_as_csv_icon_white.png") no-repeat 5px center', 'important');
                }, function () {
            $("input.exportClass").css('background', '#fff url("images/export_as_csv_icon_blue.png") no-repeat 5px center', 'important');
        });
        var exportvalue = "yes";
        $("#excelExport" + selectedGridId).attr("disabled", false);
    } else if (exportType == "Xlsx" || exportType == "Xls")
    {
        $("input.exportClass").css('background', '#fff url("images/export_as_xlsx_icon_blue.png")  no-repeat 5px center', 'important');
        $("input.exportClass").hover(
                function () {
                    $("input.exportClass").css('background', '#0071c5 url("images/export_as_xls_white.png")  no-repeat 5px center', 'important');
                }, function () {
            $("input.exportClass").css('background', '#fff url("images/export_as_xlsx_icon_blue.png")  no-repeat 5px center', 'important');
        });
        var exportvalue = "yes";
        $("#excelExport" + selectedGridId).attr("disabled", false);
    } else if (exportType == "XML")
    {
        $("input.exportClass").css('background', '#fff url("images/export_icon_blue.png")  no-repeat 5px center', 'important');
        $("input.exportClass").hover(
                function () {
                    $("input.exportClass").css('background', '#0071c5 url("images/export_icon_white.png")  no-repeat 5px center', 'important');
                }, function () {
            $("input.exportClass").css('background', '#fff url("images/export_icon_blue.png")  no-repeat 5px center', 'important');
        });
        var exportvalue = "yes";
        $("#excelExport" + selectedGridId).attr("disabled", false);
    } else if ((exportType == "PDF"))
    {
        $("input.exportClass").css('background', '#fff url("images/export_icon_blue.png")  no-repeat 5px center', 'important');
        $("input.exportClass").hover(
                function () {
                    $("input.exportClass").css('background', '#0071c5 url("images/export_icon_white.png")  no-repeat 5px center', 'important');
                }, function () {
            $("input.exportClass").css('background', '#fff url("images/export_icon_blue.png")  no-repeat 5px center', 'important');
        });
        $("#excelExport" + selectedGridId).attr("disabled", false);
    } else {
        $("#excelExport" + selectedGridId).attr("disabled", true);
    }
}
//function finalExport(gridId, searchType)
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
//                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
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
//            // need to write Selected data export
//            exportProcess(gridId, 'selected', searchType);
//        }
//    } else
//    {
//        var sourceex = $('#' + gridId).jqxGrid('source');
//        var totalRecords = sourceex.totalrecords;
//        console.log('totalRecords:::' + totalRecords);
//        var exportMesg = "<div>Select Records to Export:<select id='exportRecordsCount'>";
//        var exportRangeCount = $("#ssExportCount").val();
//
//        if (!(exportRangeCount != null && exportRangeCount != '' && exportRangeCount != 0))
//
//        {
//            exportRangeCount = 20000;
//        }
//        $("#exportRangeCount").val(exportRangeCount);
//        if (parseInt(totalRecords) != 0 && parseInt(totalRecords) <= exportRangeCount) {
//            exportMesg += "<option value='0'>1-" + totalRecords.toLocaleString() + "</option>";
//        } else {
//
//            var totalPages = parseFloat((parseInt(totalRecords) / exportRangeCount));
//            var totalPagesForInt = parseInt((parseInt(totalRecords) / exportRangeCount));
//            var finalPages = totalPages - totalPagesForInt;
//            var j = 0;
//            var i = 0;
//            if (!(finalPages != null && finalPages != '' && finalPages != 0)) {
//                for (i = 0; i < totalPages; i++) {
//                    exportMesg += "<option value='" + ((i * exportRangeCount) + 1) + "'>" + ((i * exportRangeCount) + 1).toLocaleString() + " - " + ((i + 1) * exportRangeCount).toLocaleString() + "</option>";
//                }
//            } else {
//                for (i = 0; i < totalPages - 1; i++) {
//                    exportMesg += "<option value='" + ((i * exportRangeCount) + 1) + "'>" + ((i * exportRangeCount) + 1).toLocaleString() + " - " + ((i + 1) * exportRangeCount).toLocaleString() + "</option>";
//                }
//            }
////            for (i = 0; i < totalPages; i++) {
////                exportMesg += "<option value='" + ((i * exportRangeCount) + 1) + "'>" + ((i * exportRangeCount) + 1).toLocaleString() + " - " + ((i + 1) * exportRangeCount).toLocaleString() + "</option>";
////            }
//            var lastRecords = totalPages - totalPagesForInt;
//            if (lastRecords != null && lastRecords != '' && lastRecords != 0) {
//                exportMesg += "<option value='" + ((i * exportRangeCount) + 1) + "'>" + ((i * exportRangeCount) + 1).toLocaleString() + " - " + totalRecords.toLocaleString() + "</option>"
//            }
//
//        }
////        else {
////            var totalPages = parseInt((parseInt(totalRecords) / 20000)) + 1;
////            var j = 0;
////            for (var i = 0; i < totalPages; i++) {
////                exportMesg += "<option value='" + ((i * 20000) + 1) + "'>" + ((i * 20000) + 1).toLocaleString() + " - " + ((i + 1) * 20000).toLocaleString() + "</option>";
////            }
////        }
//        exportMesg += "</select></div>";
//
//        $("#dialog1").html(exportMesg);
////        $("#dialog1").html((labelObject['Do you want to export all records'] != null ? labelObject['Do you want to export all records'] : 'Do you want to export all records') + "?");
//        $("#dialog1").dialog({ resizable: false,
//            title: labelObject['Export Records'] != null ? labelObject['Export Records'] : 'Export Records',
//            modal: true,
//            height: 120,
//            minWidth: 300,
//            maxWidth: 'auto',
//            fluid: true,
//            buttons: [{
//                    text: labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes',
//                    click: function () {
//                        $("#exportRange").val($("#exportRecordsCount").val());
//                        $(this).html("");
//                        $(this).dialog("close");
//                        $(this).dialog("destroy");
//                        // need to write all data export
//
//                        exportProcess(gridId, 'all', searchType);
//                    }
//                },
//                {
//                    text: labelObject['No'] != null ? labelObject['No'] : 'No',
//                    click: function () {
//                        $(this).html("");
//                        $(this).dialog("close");
//                        $(this).dialog("destroy");
//                    }
//                }],
//            open: function () {
//                 //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
//                $(".visionHeaderMain").css("z-index", "999");
//                $(".visionFooterMain").css("z-index", "999");
//            },
//            beforeClose: function (event, ui)
//            {
//                $(".visionHeaderMain").css("z-index", "99999");
//                $(".visionFooterMain").css("z-index", "99999");
//            }
//        });
//    }
//}
// process the export functionality
//function exportProcess(gridId, selectType, searchType) {
//    labelObject = {};
//    try {
//        labelObject = JSON.parse($("#labelObjectHidden").val());
//    } catch (e) {
//
//    }
//    var exportType = $('#export' + gridId).val();
//    alert(selectType + ":::exportType:::" + exportType);
//    if (exportType != null) {
//        if (selectType != null && selectType == 'selected') {
//            // for selected export
//            var exportJson = {};
//            exportJson['headers'] = fieldsArray;
//            var count = 0;
//            var selectedRowsData = [];
//            var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
//            if (selectedrowindexes.length != 0) {
//                var totalRowIndex = selectedrowindexes.length;
//                var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
//                if (datainformations != null) {
//                    var paginginformation = datainformations['paginginformation'];
//                    var pagenum = paginginformation.pagenum;
//                    if (paginginformation != null) {
//                        var pagesize = paginginformation['pagesize'];
//                        if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
//                            totalRowIndex = parseInt(pagesize);
//                        }
//
//                        if (pagenum != null && pagenum > 0) {
//                            count = pagenum * pagesize;
//                            totalRowIndex = count + pagesize;
//                        }
//
//                    }
//                }
//                for (var i = count; i < totalRowIndex; i++) {
////                    selectedRowsData.push($('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]));
//                    var selectRowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
//                    if (selectRowData != null) {
//                        selectedRowsData.push(selectRowData);
//                    }
//                }
//                exportJson['data'] = selectedRowsData;
//                $('#downloadDatajsonData').val(JSON.stringify(exportJson));
//                processExportRequest(gridId, exportType, searchType);
//            }// end if
//
//
//        } else {
//            // for all data export 
//            // alert("for all data export");
//            $("#selectType").val(selectType);
//            //  $('#' + gridId).jqxGrid('selectallrows');
//            //  var rowsData = $('#' + gridId).jqxGrid('getdisplayrows');
//            var exportJson = {};
//            exportJson['headers'] = fieldsArray;
//            //  exportJson['data'] = rowsData;
//            $('#downloadDatajsonData').val(JSON.stringify(exportJson));
//            processExportRequest(gridId, exportType, searchType);
//            //  var data = 
//        }
//
//    } else {
//        alert(":::exportType::Not selected:");
//    }
//
//
//}
//function processExportRequest(gridId, exportType, searchType) {
//    labelObject = {};
//    try {
//        labelObject = JSON.parse($("#labelObjectHidden").val());
//    } catch (e) {
//
//    }
////    if (searchType != 'S') {
////        $("#exportGridId").val(gridId);
////    } else {
////        $("#exportGridId").val("");
////    }
//    $("#exportGridId").val(gridId);
//    if (exportType == 'Xlsx') {
//        //$("#downloadData").attr("action");
//        $("#downloadData").attr("action", "exportXlsxData");
//        $("#downloadData").submit();
//    } else if (exportType == 'CSV') {
//        $("#downloadData").attr("action", "exportCSVData");
//        $("#downloadData").submit();
//    } else if (exportType == 'XML') {
//        $("#downloadData").attr("action", "exportXMLData");
//        $("#downloadData").submit();
//    } else if (exportType == 'PDF') {
//        $("#downloadData").attr("action", "exportPDFData");
//        // $("#downloadData").submit();
//
//    }
//    $('#' + gridId).jqxGrid('clearselection');
//}

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
                    var entity = HtmlEntities[entitykey];
                    var regex = new RegExp(entitykey, 'g');
                    replacedValue = replacedValue.replace(regex, entity);
                }
            }

            url = url.replace(replacedStr, replacedValue);

        }
        if (isFormURL == 'N') {
            //  eval(url);
            console.log("url::::" + url);
            eval('(' + url + ')');
        } else {
            navigateToFormURL(url);
        }


    }
    //
}

function getParamSearchResults(reqType) {
    var paramArray = [];
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var i = 0;
    console.log("getParamSearchResults::::" + reqType);

    var tableId = "paramsearch";
    if (reqType == 'ppr') {
        tableId = "pprsearch";
    } else if (reqType == 'spec') {
        tableId = "specsearch";
    }


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


    console.log(":::paramArray:::" + JSON.stringify(paramArray));
    if (paramArray != null && paramArray.length != 0) {
        var searchName = $("#searchddw").val();
        if (reqType == 'ppr') {
            searchResults('PR', '', paramArray);
        } else if (reqType == 'spec') {
            searchResults('M', '', paramArray, '', searchName);
        } else {
            searchResults('P', '', paramArray, '', searchName);
        }
    } else {
        var dialogSplitMessage = dialogSplitIconText("Please provide at least one value to Search.", "Y");
        $("#dialog1").append(dialogSplitMessage);
        $("#dialog1").dialog({ resizable: false,
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
                        $("#dialog1").empty();
                        $("#dialog1").dialog('close');
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


    //visionSearchIconsChange();
}

function getPersonalizationDataOpt(searchType) {
    console.log("searchType:::" + searchType);
    $.ajax({
        type: "post",
        traditional: true,
        cache: false,
        url: "getPersonalizationData",
        data: {
            searchType: searchType,
            searchName: $("#savedSearchName").val()
        },
        success: function (response) {
            stopLoader();
//            console.log("response:::" + response);
            if (response != null) {
                var typesCheckBox = {};
                $("#settings_panel").html("");
                $("#settings_panel").html(response);
                $("#personalize_types :input").each(function () {
                    var textid = $(this).attr("id");
                    var type = $(this).attr("type");
                    var textval = $(this).val();
                    if (type != null && type == 'checkbox') {
                        if ($("#" + textid).is(':checked')) {
                            typesCheckBox[textid] = "Y";
                        }
                    }


                });
//                $("#settings_panel").html(response);
                if (typesCheckBox != null) {
                    for (var key in typesCheckBox) {
                        $("#" + key).attr('checked', true);
                    }
                }

                $('.visionSearchPersonalise table').each(function () {

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
                        $t.parent('.sticky-wrap').scroll($.throttle(250, function () {
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
        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}
function toggleTabs(tabid) {
    console.log("toggling " + tabid);
    $("#" + tabid).toggle();
    $("#" + tabid).next().hide();
}
function updatePersonalize(tbid) {
    console.log("tbid::" + tbid);
    console.log("datacol:::" + $("#" + tbid).attr("data-col"));
    if (tbid.toString().indexOf('search') > -1) {
        if ($("#" + tbid).prop('checked')) {
            $("#" + $("#" + tbid).attr("data-col")).show();
        } else {
            $("#" + $("#" + tbid).attr("data-col")).hide();
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
            + "<div id='searchNameError' style='color:red;display:none;'>Should not be null</div>";
    var dialogSplitMessage = dialogSplitIconText(results, "Y");
    $("#dialog1").append(dialogSplitMessage);
    $("#dialog1").dialog({ resizable: false,
        title: labelObject['Search Criteria'] != null ? labelObject['Search Criteria'] : 'Search Criteria',
        modal: true,
        height: 180,
        width: 500,
        fluid: true,
        buttons: [
            {
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    stopLoader();
                    var searchName = $("#searchName").val();
                    if (searchName != null && searchName != '') {
                        $("#searchNameError").hide();
                        saveSearch(searchType, searchName);
                        $("#dialog1").empty();
                        $("#dialog1").dialog('close');
                    } else {
                        $("#searchNameError").show();
                    }

                }
            },
            {
                text: (labelObject['Close'] != null ? labelObject['Close'] : 'close'),
                click: function () {
                    stopLoader();
                    $("#dialog1").empty();
                    $("#dialog1").dialog('close');
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
        savedSearchObject.defaultFlag = $("#" + $(this).find("td:eq(0)").attr('data-col')).css('display') == 'none' ? "N" : "Y";

        var i = 0;
        $("#" + tableId + " tbody tr").each(function () {
            var isAllow = false;
            var colname = $(this).attr('data-colname');
            if (colname == columnName) {
                var tbmin = $("#tbmin" + i).val();
                var tbmax = $("#tbmax" + i).val();
                var value = $("#tb" + i).val();
                console.log("colname::" + colname + "::value::" + value + "::tbmin::" + tbmin + ":::tbmax:::" + tbmax);
                if (value != null && value != '') {
                    isAllow = true;
                } else if (tbmin != null && tbmax != null && tbmin != '' && tbmax != '') {
                    isAllow = true;
                }
                var type = $("#tb" + i).attr("type");
                if (type != null && type == 'checkbox') {
                    var textval = "N";
                    if ($("#tb" + i).is(':checked')) {
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
                    savedSearchObject.minvalue = $.trim($("#tbmin" + i).val());
                    savedSearchObject.maxvalue = $.trim($("#tbmax" + i).val());
                    var type = $("#tb" + i).attr("type");
                    if (type != null && type == 'checkbox') {
                        var textval = "N";
                        if ($("#tb" + i).is(':checked')) {
                            textval = "Y";
                        } else {
                            textval = "N";
                        }
                        savedSearchObject.value = textval;
                    } else {
                        savedSearchObject.value = $.trim($("#tb" + i).val());
                    }
                    savedSearchObject.andOrOperator = andOrOperator;
                    savedSearchObject.typeSelectStr = typeSelectStr;
                    savedSearchObject.operator = $("#ddw" + i).val();
                    savedSearchObject.symbol = $.trim($("#ddw" + i).find('option:selected').text());
                    savedSearchObject.staged = $("#ddw" + i).attr('data-staged') == "Y" ? "Y" : "N";

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

                $("#dialog1").html("");
                var results = "Saved search criteria Successfully";
                var dialogSplitMessage = dialogSplitIconText(results, "Y");
                $("#dialog1").append(dialogSplitMessage);
                $("#dialog1").dialog({ resizable: false,
                    title: labelObject['Search Criteria'] != null ? labelObject['Search Criteria'] : 'Search Criteria',
                    modal: true,
                    height: 'auto',
                    minHeight: 'auto',
                    width: 300,
                    fluid: true,
                    buttons: [
                        {
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                $("#savedSearchName").val(searchName.toString().toUpperCase());
//                                getPersonalizationDataOpt('P');
                                getPersonalizationDataOpt(searchType);
//                                try {
//                                    $('#searchddw').append($("<option></option>")
//                                            .attr("value", searchName.toString().toUpperCase())
//                                            .text(searchName.toString().toUpperCase()));
//                                } catch (e) {
//                                    $('#searchddw').append($("<option></option>")
//                                            .attr("value", searchName)
//                                            .text(searchName));
//                                }
                                $("#dialog1").empty();
                                $("#dialog1").dialog('close');
                                ajaxStop()
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
                    },
                    beforeClose: function (event, ui)
                    {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }

                });
            } else if (response == "duplicatename") {
                $("#dialog1").html("");
                var results = "Please provide different name for search criteria as this name exists";
                results = labelObject[results] != null ? labelObject[results] : results;
                var dialogSplitMessage = dialogSplitIconText(results, "Y");
                $("#dialog1").append(dialogSplitMessage);
                $("#dialog1").dialog({ resizable: false,
                    title: labelObject['Search Criteria'] != null ? labelObject['Search Criteria'] : 'Search Criteria',
                    modal: true,
                    height: 'auto',
                    minHeight: 'auto',
                    width: 300,
                    fluid: true,
                    buttons: [
                        {
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                $("#dialog1").empty();
                                $("#dialog1").dialog('close');
                                stopLoader();
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
                    },
                    beforeClose: function (event, ui)
                    {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }

                });
            } else if (response == "failure") {

                $("#dialog1").html("");
                var results = "Unable to save search criteria";
                results = labelObject[results] != null ? labelObject[results] : results;
                var dialogSplitMessage = dialogSplitIconText(results, "Y");
                $("#dialog1").append(dialogSplitMessage);
                $("#dialog1").dialog({ resizable: false,
                    title: labelObject['Search Criteria'] != null ? labelObject['Search Criteria'] : 'Search Criteria',
                    modal: true,
                    height: 'auto',
                    minHeight: 'auto',
                    width: 300,
                    fluid: true,
                    buttons: [
                        {
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                $("#dialog1").empty();
                                $("#dialog1").dialog('close');
                                stopLoader();
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
                    },
                    beforeClose: function (event, ui)
                    {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }

                });
            } else if (response == "blank") {

                $("#dialog1").html("");
                var results = "Search criteria name can't be blank";
                results = labelObject[results] != null ? labelObject[results] : results;
                var dialogSplitMessage = dialogSplitIconText(results, "Y");
                $("#dialog1").append(dialogSplitMessage);
                $("#dialog1").dialog({ resizable: false,
                    title: labelObject['Search Criteria'] != null ? labelObject['Search Criteria'] : 'Search Criteria',
                    modal: true,
                    height: 'auto',
                    minHeight: 'auto',
                    width: 300,
                    fluid: true,
                    buttons: [
                        {
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                $("#dialog1").empty();
                                $("#dialog1").dialog('close');
                                stopLoader();
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
                    },
                    beforeClose: function (event, ui)
                    {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }

                });
            }
//            console.log('Response::' + JSON.stringify(response));
        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
//}
}
function updatePersonalization(id, searchType) {
    var searchName = $("#" + id).val();
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
                    $("#personalize_fields").html(savedSearchData['personalizationData']);

                    $('#personalize_fields :input').each(function () {
                        var tbid = $(this).attr("id");
                        var type = $(this).attr("type");
                        if (type != null && type == 'checkbox') {//
                            if (tbid.toString().indexOf('display') > -1) {
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
                    });
                    var searchId = $("#accordion").attr("data-id");
                    getParamForm(searchId, 'paramSearchCover', '', searchName);

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
//var searchType = 'P';
    var selectedSearch = $("#" + id).val();
    if (selectedSearch != null && selectedSearch != '') {
        var response = "Are you sure you want to delete the search criteria?";
        response = labelObject[response] != null ? labelObject[response] : response;
        var dialogSplitMessage = dialogSplitIconText(response, "Y");
        $("#dialog1").append(dialogSplitMessage);
        $("#dialog1").dialog({ resizable: false,
            title: labelObject['Search Criteria'] != null ? labelObject['Search Criteria'] : 'Search Criteria',
            modal: true,
            height: 'auto',
            minHeight: 'auto',
            width: 300,
            fluid: true,
            buttons: [
                {
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {
                        $("#dialog1").empty();
                        $("#dialog1").dialog('close');
                        deleteSavedSearch(searchType, id);
                        stopLoader();
                    }
                },
                {
                    text: (labelObject['Close'] != null ? labelObject['close'] : 'Close'),
                    click: function () {
                        $("#dialog1").empty();
                        $("#dialog1").dialog('close');
                        stopLoader();
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
            },
            beforeClose: function (event, ui)
            {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }

        });
    } else {
        var response = "There is no saved search criteria to delete";
        response = labelObject[response] != null ? labelObject[response] : response;
        var dialogSplitMessage = dialogSplitIconText(response, "Y");
        $("#dialog1").append(dialogSplitMessage);
        $("#dialog1").dialog({ resizable: false,
            title: labelObject['Search Criteria'] != null ? labelObject['Search Criteria'] : 'Search Criteria',
            modal: true,
            height: 'auto',
            minHeight: 'auto',
            width: 300,
            fluid: true,

            buttons: [
                {
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {
                        $("#dialog1").empty();
                        $("#dialog1").dialog('close');
                        stopLoader();
                    }
                },
                {
                    text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
                    click: function () {
                        $("#dialog1").empty();
                        $("#dialog1").dialog('close');
                        stopLoader();
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
            },
            beforeClose: function (event, ui)
            {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }

        });
    }


}
function deleteSavedSearch(searchType, id) {
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
            $("#dialog1").dialog({ resizable: false,
                title: labelObject['Search Criteria'] != null ? labelObject['Search Criteria'] : 'Search Criteria',
                modal: true,
                height: 'auto',
                minHeight: 'auto',
                width: 300,
                fluid: true,
                buttons: {
                    Ok: function () {
                        $("#dialog1").empty();
                        $("#dialog1").dialog('close');
                        var searchId = $("#accordion").attr("data-id");
                        getParamForm(searchId, 'paramSearchCover', '', $("#savedSearchName").val());
                        getPersonalizationDataOpt(searchType);
                    }
                }
            });
        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}

function handleClick(typeOfCategory, searchType) {
    showLoader();
    console.log("typeOfCategory:::" + typeOfCategory + "::::searchType:::" + searchType);
    $("#navigationIcons").hide();
    $("#categorytextfield").hide();
    $("#categorytextfield").val('');
    $(".clear_category_input").hide();
    $("#categorysearchresult").hide();
    if (typeOfCategory != null && typeOfCategory != '') {
        $.ajax({
            type: "POST",
            url: 'getCategoryData',
            data: {
                'typeOfCategory': typeOfCategory,
                'searchType': searchType
            },
            traditional: true, cache: false,
            success: function (response) {
//                console.log('Response::' + response);
                if (response != '') {
                    var categoryObj = JSON.parse(response);
                    $("#categorysrchnvgn").html(categoryObj['breadCrumb']);
                    if (typeOfCategory == 'UNSPSC') {
                        $("#disciplineTypes").html(categoryObj['unspscStr']);

                    } else {
                        $("#disciplineTypes").html(categoryObj['disciplineTypes']);
                        $(".folder-cover").click(function (event) {
                            //  e.preventDefault();
                            console.log("content::" + $("#" + $(this).attr("id")).attr("data-content"));
                            var discipline = $("#" + $(this).attr("id")).attr("data-content").replace(/_/g, " ");
                            console.log('$(".discipline-heading").text()::' + $(".discipline-heading").text());
                            discplineTypes(discipline, typeOfCategory, 'N');
                            $(this).off(event);
                        });
                    }

                    $("#categorysrchnvgn").show();

                }
                stopLoader();
            },
            error: function (e) {
                sessionTimeout(e);
                stopLoader();
            }

        });
    }

}

function discplineTypes(discipline, typeOfCategory, isnested) {
    showLoader();
    console.log("discipline:::" + discipline + ":::typeOfCategory:::" + typeOfCategory + ":::isnested:::" + isnested);
    $("#navigationIcons").hide();
    $("#categorytextfield").hide();
    $("#categorytextfield").val('');
    $(".clear_category_input").hide();
    $("#categorysearchresult").hide();
    if (discipline != null && discipline != '') {
        $.ajax({
            type: "POST",
            url: 'getDiscplineTypes',
            data: {
                'typeOfCategory': typeOfCategory,
                'discipline': discipline,
                isNested: isnested
            },
            traditional: true, cache: false,
            success: function (response) {
//                console.log('Response::' + response);
                if (response != '') {
                    var categoryObj = JSON.parse(response);
                    $("#categorysrchnvgn").html(categoryObj['breadCrumb']);
                    $("#disciplineTypes").html(categoryObj['disciplineTypes']);
//                    data-totalrecords='0' data-startindex='0'

                }
                stopLoader();
            },
            error: function (e) {
                stopLoader();
                sessionTimeout(e);
            }

        });
    }

}
function fetchClassbyDiscipline(typeOfCategory, discipline, subDiscipline, startindex, endindex) {
    console.log("subDiscipline:::" + subDiscipline + "::::discipline:::" + discipline + ":::typeOfCategory:::" + typeOfCategory + ":::startindex:::" + startindex + ":::endindex:" + endindex);
    // fetchClassbyDiscipline(classification, type, discipline, startindex, endindex, filterval, filtercondition)
    showLoader();
    $('#categorytextfieldval').val(typeOfCategory);
    $('#disciplinetextfieldval').val(discipline);
    $('#subDisciplinetextfieldval').val(subDiscipline);
    $("#categorytextfield").val('');

//    $(".clear_category_input").hide();
    if (discipline != null && discipline != '') {
        $.ajax({
            type: "POST",
            url: 'getClassByDiscipline',
            data: {
                'typeOfCategory': typeOfCategory,
                'discipline': discipline,
                subDiscipline: subDiscipline,
                startIndex: startindex,
                endIndex: endindex
            },
            traditional: true, cache: false,
            success: function (response) {
//                console.log('Response:fetchClassbyDiscipline:' + response);
                if (response != '') {
                    var categoryObj = JSON.parse(response);
                    $("#categorysrchnvgn").html(categoryObj['breadCrumb']);
                    $("#disciplineTypes").html(categoryObj['disciplineTypes']);

                    if (parseInt(categoryObj['startIndex']) == 0) {
                        $("#navigationIcons").attr("data-totalrecords", categoryObj['totalCount']);
                        $("#navigationIcons").html(categoryObj['navigationIcons']);
                    } else {
                        $("#navigationIcons").attr("data-startindex", categoryObj['startIndex']);
                        $("#navigationIcons").attr("data-endindex", parseInt(categoryObj['startIndex']) + 9);
                        if (parseInt(categoryObj['startIndex']) + 9 > parseInt(categoryObj['totalCount']))
                        {
                            $("#categoryMinIndex").html(parseInt(categoryObj['startIndex']));
                            $("#categoryMaxIndex").html(parseInt(categoryObj['totalCount']));
                        } else
                        {
                            $("#categoryMinIndex").html(parseInt(categoryObj['startIndex']));
                            $("#categoryMaxIndex").html(parseInt(categoryObj['startIndex']) + 9);
                        }
//                        $("#categoryMinIndex").html(parseInt(categoryObj['startIndex']));
//                        $("#categoryMaxIndex").html(parseInt(categoryObj['startIndex']) + 9);
                    }

                    //  $("#categoryTtlRecs").html(categoryObj['totalCount']);
                    $("#navigationIcons").show();
                    $("#categorytextautocomplete").show();
                    $("#categorysearchmarkbox").remove();
                    $(".clear_category_input").hide();
//                    $("#categorytextautocompleteBox").append(categoryObj['searchBox']);
                    $("#categorytextautocompleteBox").html(categoryObj['searchBox']);
                    $("#categorytextautocomplete").append(categoryObj['textBox']);
                    $("#categorytextfield").show();
                    categoryAutoComplete();
                }
                stopLoader();
            },
            error: function (e) {
                stopLoader();
                sessionTimeout(e);
            }

        });
    }
}


function getNextRecords(typeOfCategory, discipline, subDiscipline, domain) {
    showLoader();
    if (parseInt($("#navigationIcons").attr('data-endindex')) < parseInt($("#navigationIcons").attr('data-totalrecords')))
    {
        fetchClassbyDiscipline(typeOfCategory, discipline, subDiscipline,
                parseInt($("#navigationIcons").attr('data-endindex')) + 1,
                parseInt($("#navigationIcons").attr('data-endindex')) + 10
                );

    }
}
function getPrevRecords(typeOfCategory, discipline, subDiscipline, domain) {
    showLoader();
    alert("Entered Prev records");
    if (parseInt($("#navigationIcons").attr('data-startindex')) > 1) {
        fetchClassbyDiscipline(typeOfCategory, discipline, subDiscipline,
                parseInt($("#navigationIcons").attr('data-startindex')) - 10,
                parseInt($("#navigationIcons").attr('data-startindex')) - 1
                );

    }
}
function resetCategorySearch() {
    $("#categorytextfield").hide();
    $("#categorytextautocomplete").hide();
    $(".clear_category_input").hide();
    $('input[name=ImageType]').attr('checked', false);
    $("#categorysrchnvgn").hide();
    $("#navigationIcons").hide();
    $("#disciplineTypes").empty();
    $("#disciplineSubTypes").attr('data-category', "");
    $("#disciplineSubTypes").attr('data-subcategory', "");
    $("#disciplineSubTypes").empty();

}
function fetchServiceClasses(category, subcategory, startindex, endindex) {
    showLoader();
    $('#categorytextfieldval').val('');
    $('#disciplinetextfieldval').val('');
    $('#subDisciplinetextfieldval').val('');
    $("#categorytextfield").val('');
//    $(".clear_category_input").hide();
    var disciplane = $('#disciplinetextfieldval').val();
    if (!(disciplane != null && disciplane != '' && disciplane != undefined))
    {
        $('#disciplinetextfieldval').val(category);
    }
    var subDisciplane = $('#subDisciplinetextfieldval').val();
    if (!(subDisciplane != null && subDisciplane != '' && subDisciplane != undefined)) {
        $('#subDisciplinetextfieldval').val(subcategory);
    }

    $.ajax({
        type: "POST",
        url: 'getServiceTerms',
        data: {

            category: category,
            subcategory: subcategory,
            startIndex: startindex,
            endIndex: endindex

        },
        traditional: true, cache: false,
        success: function (response) {
            //$("#visionClassFilter").remove();
//            $("#disciplineSubTypes").html("");
            if (response != '') {
                var categoryObj = JSON.parse(response);
                $("#categorysrchnvgn").html(categoryObj['breadCrumb']);
                $("#disciplineTypes").html(categoryObj['disciplineTypes']);

                if (parseInt(categoryObj['startIndex']) == 0) {
                    $("#navigationIcons").attr("data-totalrecords", categoryObj['totalCount']);
                    $("#navigationIcons").html(categoryObj['navigationIcons']);
                } else {
                    $("#navigationIcons").attr("data-startindex", categoryObj['startIndex']);
                    $("#navigationIcons").attr("data-endindex", parseInt(categoryObj['startIndex']) + 9);
                    if (parseInt(categoryObj['startIndex']) + 9 > parseInt(categoryObj['totalCount']))
                    {
                        $("#categoryMinIndex").html(parseInt(categoryObj['startIndex']));
                        $("#categoryMaxIndex").html(parseInt(categoryObj['totalCount']));
                    } else
                    {
                        $("#categoryMinIndex").html(parseInt(categoryObj['startIndex']));
                        $("#categoryMaxIndex").html(parseInt(categoryObj['startIndex']) + 9);
                    }
//                    $("#categoryMinIndex").html(parseInt(categoryObj['startIndex']));
//                    $("#categoryMaxIndex").html(parseInt(categoryObj['startIndex']) + 9);
                }

                //  $("#categoryTtlRecs").html(categoryObj['totalCount']);
                $("#navigationIcons").show();
                $("#categorytextautocomplete").show();
                $("#categorysearchmarkbox").remove();
                $(".clear_category_input").hide();
//                $("#categorytextautocompleteBox").append(categoryObj['searchBox']);
                $("#categorytextautocompleteBox").html(categoryObj['searchBox']);
                $("#categorytextautocomplete").append(categoryObj['textBox']);
                $("#categorytextfield").show();
                categoryAutoComplete();
            }

            stopLoader();
        },
        error: function (e) {
            //$("#visionClassFilter").remove();   
            stopLoader();
            console.log(e);
            sessionTimeout(e);
        }

    });
}
function categoryClassSearch(id, selectionType, cattype, domain) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }
    showLoader();
    console.log("selectionType::::" + selectionType);
    var ImageType = $("#ImageType").val();
    console.log("ImageType::::;" + ImageType);
    var paramArray = [];
    var classTerm = "";
    var operator = "";
    var i = 0;
    var count = 0;
    //data-cattype
    if (selectionType == 'M') {
        // count = 1;

        $('#categorySearchpanel input:checked').each(function () {

            classTerm += $(this).attr('data-content');
            //   selected.push($(this).attr('name'));
            classTerm += "#";
            cattype = $(this).attr('data-cattype');
            //var countId = "disciplinetype"+i+"img";
            count += parseInt($(this).attr('data-count'));
            i++;
        });


    } else {
        classTerm = $("#" + id).attr('data-content');
        count = $("#" + id).attr('data-count'); //data-count
    }
    var paramObj = {};
    paramObj.datatype = "string";
    paramObj.column = "TERM";
    paramObj.rangeflag = "N";
    paramObj.minvalue = "";
    paramObj.maxvalue = "";
    paramObj.value = classTerm;
    if (i > 1) {
        paramObj.symbol = "In";
        paramObj.operator = "IN";
    } else {
        paramObj.symbol = "=";
        paramObj.operator = "EQUALS";
    }
    paramObj.staged = "N";
    paramArray.push(paramObj);

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
    paramArray.push(paramObj);

    console.log("classTerm::::" + classTerm + ":::count:::" + count);
    if (parseInt(count) != 0) {
        searchResults('I', '', paramArray, cattype);
    } else {
        stopLoader();
        var message = labelObject['No Records found'] != null ? labelObject['No Records found'] : 'No Records found';
        var dialogSplitMessage = dialogSplitIconText(message, "Y");
        $("#dialog1").html(dialogSplitMessage);
        $("#dialog1").dialog({ resizable: false,
            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
            modal: true,
            height: 'auto',
            minHeight: 'auto',
            width: 300,
            fluid: true,
            buttons: {
                Ok: function () {
                    $("#dialog1").empty();
                    $("#dialog1").dialog('close');
                    if (parseInt($("#accordion").attr("data-templateresults")) != 0) {
                        $("#accordion").accordion({active: parseInt($("#accordion").attr("data-templateresults"))});
                        //showLoader();
                        fetchTemplateResults("I", paramArray, cattype);
                        //  stopLoader();
                    }
                }
            }
        });
    }

}
function getunspscByHighLevel(unspscCode, nvgnFlag) {
    showLoader();
    console.log("unspscCode:::" + unspscCode);
    $.ajax({
        type: "post",
        traditional: true,
        cache: false,
        url: "unspscCategories",
        data: {
            highLevelCode: unspscCode,
            unspschighcode: $("#categorysrchnvgn").attr("data-unspschighcode")
        },
        success: function (response) {
            console.log("response:::" + response);
            if (response != null && response != '') {
                var categoryObj = JSON.parse(response);
                //$("#categorysrchnvgn").html(categoryObj['breadCrumb']);
                $("#disciplineTypes").html(categoryObj['unspscStr']);

                if (nvgnFlag) {
                    $("#categorysrchnvgn ul")
                            .append("<li class='uSeparator'><span></span></li>"
                                    + "<li>"
                                    + "<a href='#'  "
                                    + "onclick=getunspscByHighLevel('" + unspscCode + "'," + false + ")>"
                                    + unspscCode + "</a>"
                                    + "</li>");
                } else {
                    var deleteflag = false;
                    $("#categorysrchnvgn ul li").each(function () {
                        if (deleteflag) {
                            $(this).remove();
                        } else {
                            if ($(this).find('a').text() == unspscCode)
                            {
                                deleteflag = true;

                            }
                        }
                    });
                }

            }

            stopLoader();
        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }

    });
}
function fetchPropertyValues(selectedrowid) {
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }
    var propertyid = $("#propertyid" + selectedrowid).attr('data-propertyid');
    var classid = $("#dictionarytext").attr("data-conceptid");

    var propertyUom = $("#propuom" + selectedrowid).val();
    var rowid = 0;
    var propertyValues = [];
    var propertyValObj = null;
    $("#dictionarytbl tbody tr").each(function () {
        if (($.trim($("#propval" + rowid).val()) != ""
                || $.trim($("#propuom" + rowid).val()) != "") && rowid != selectedrowid) {
            propertyValObj = new Object();
            propertyValObj.name = $.trim($(this).find('td:eq(0)').find('div').text());
            propertyValObj.value = $.trim($("#propval" + rowid).val());
            propertyValObj.uom = $("#propuom" + rowid).val();
            propertyValObj.id = $("#propertyid" + rowid).attr('data-propertyid');
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

            //  alert('Success: ' + response);
            console.log('Response::' + JSON.stringify(response));
//              jsObject.put("value", listCharVal.getId().getTerm());
//                jsObject.put("valueid", listCharVal.getId().getValueConceptId());
//                jsObject.put("propertyid", listCharVal.getId().getPropertyConceptId());
//                jsObject.put("classid", listCharVal.getId().getClassConceptId());
            $("#valuesgridpopup").empty();
            $("#valuesgridpopup").append("<div id='valuesGrid'></div>");
            $("#valuesgridpopup").dialog({ resizable: false,
                resizable: false,
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                autoOpen: true,
                height: 'auto',
                width: "300",
                fluid: true,
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
                                    // ,{name: 'valueid', type: 'string'},
                                    // {name: 'propertyid', type: 'string'},
                                    // {name: 'classid', type: 'string'}

                                ],
                        datatype: "json"
                    };
            var adapter = new $.jqx.dataAdapter(source);
            $("#valuesGrid").jqxGrid(
                    {
                        width: '99%',
                        //selectionmode: 'singlecell',
                        // editable: true,
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
                            //,{text: '', hidden: true, editable: false, align: 'center', datafield: 'valueid', cellsalign: 'left'},
                            // {text: '', hidden: true, editable: false, align: 'center', datafield: 'propertyid', cellsalign: 'left'},
                            // {text: '', hidden: true, editable: false, align: 'center', datafield: 'classid', cellsalign: 'left'}
                        ]
                    });
            stopLoader();
            $("#valuesGrid").on('rowclick', function (event) {


                var args = event.args;
                var boundIndex = args.rowindex;
                var value = $('#valuesGrid').jqxGrid('getcellvalue', boundIndex, "value");
                console.log("value::" + value);
                $("#propval" + selectedrowid).val(value);
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
    var propertyid = $("#propertyid" + selectedrowid).attr('data-propertyid');
    var propertyvalue = $.trim($("#propval" + selectedrowid).val());
    var classid = $("#dictionarytext").attr("data-conceptid");
    $("#dictionarytbl tbody tr").each(function () {
        if (($.trim($("#propval" + rowid).val()) != ""
                || $.trim($("#propuom" + rowid).val()) != "") && rowid != selectedrowid) {
            propertyValObj = new Object();
            propertyValObj.name = $.trim($(this).find('td:eq(0)').find('div').text());
            propertyValObj.value = $.trim($("#propval" + rowid).val());
            propertyValObj.uom = $("#propuom" + rowid).val();
            propertyValObj.id = $("#propertyid" + rowid).attr('data-propertyid');
            propertyValues.push(propertyValObj);
        }
        ++rowid;
    });


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
            $("#uomgridpopup").dialog({ resizable: false,
                resizable: false,
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                autoOpen: true,
                height: 'auto',
                width: "350",
                fluid: true,
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
                        width: '98%',
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

function dictionarySearchResults() {
    showLoader();
    var dataArray = [];
    var classTerm = $("#dictionarytext").val();
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
            var conceptId = $("#dictionarytext").attr("data-conceptid");
            if (conceptId != null && conceptId != '') {
                dataObject.conceptId = $("#dictionarytext").attr("data-conceptid");
                dataObject.classTerm = classTerm.toUpperCase();
            } else {
                dataObject.conceptId = $("#dictionarytext").attr("data-conceptid");
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
function onClassificationchng() {
    showLoader();
    var classification = $("#classificationtype").val();
    var conceptId = $("#classficationtext").attr('data-conceptid');
    $("#classificationcode").autocomplete("option", "source",
            "classificationSuggestions?searchLimit=15&classification=" + $('#classificationtype').val());
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
function resetClassificationData() {
    $("#classficationtext").val("");
    $("#classificationtype").val("UNSPSC_CODE");//UNSPSC_CODE
    $("#classificationcode").val("");
    $("#classificationdesc").val("");
    $("#classiicationdtlCover").empty();
    stopLoader();
}

function classificationSearchDetails() {
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

            $('#classiicationdtlCover').html("");
            $('#classiicationdtlCover').append("<div id='classificationinfo' style='opacity:0.99 !important'></div>");
            if (gridResultObj != null) {
                if (gridResultObj != null) {
//                $("#accordion").accordion({active: parseInt($("#accordion").attr("data-templateresults"))});
//                $("#accordion").accordion({active: 4});
                    try {
                        $("#classificationinfo").jqxGrid("destroy");
                    } catch (e) {
                    }
                    $("#classiicationdtlCover").html("<div id='classificationinfo' style='opacity:0.99 !important'></div>");
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
                    //////////////////console.log("gridOperation:::"+gridOperation);

                    ////////////////////console.log("formId::::::"+formId);
                    //     $('#formId').val(formId);
                    //  $('#panelId').val(panelId);
                    var gridPropObj = {};
                    gridPropObj = gridResultObj.gridPropObj;
//                var hiddenObj = gridResultObj['hiddenObj'];
//                if (hiddenObj != null) {
//                     $("#hiddenObj").val(JSON.stringify(hiddenObj));
//                }
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
                        // console.log("renderToolbar::::"+renderToolbar);
                        //  alert("renderToolbar:::"+renderToolbar);
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
//                                var GridRowHeight = $('#classificationinfo').jqxGrid('rowsheight');

                            // console.log("GridRowHeight" + GridRowHeight);
//                                var GridRowHeightInner = (GridRowHeight – 11)/2;
//                                console.log(GridRowHeightInner+"GridRowHeightInner");
//                               position:relative;top:" + GridRowHeightInner / 2 + "px
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

                            return "<div class='visionGridDataAlign' style='text-align:center;cursor:pointer;'><input id='fetchtree" + codifcode + "' type='checkbox' style='width:15px;  height: 17px; margin-top: 5px;' onclick=onChecked(" + codifcode + ",'fetchtree" + codifcode + "','" + conceptid + "') > </div>";
                        };
                        var descriptorrenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
                            var descriptorClass = $('#classificationinfo').jqxGrid('getcellvalue', row, "TERM");
                            //  console.log("Descriptor Class:" + descriptorClass);
                            var descriptorClass1 = descriptorClass.replace(/\s/g, "+");
                            var conceptid = $('#classificationinfo').jqxGrid('getcellvalue', row, "CONCEPT_ID");
                            console.log("conceptid:descriptorrenderer:" + conceptid);
                            return "<div class='visionGridDataAlign' style='text-align: left;text-decoration: underline;cursor:pointer' onclick=fetchDescriptorMaterials('" + descriptorClass1 + "','" + conceptid + "')>" + descriptorClass + " </div>";
                        };
                        for (var i = 0; i < gridPropObj.columns.length; i++) {
                            if (gridPropObj.columns [i].cellsrenderer != null) {
                                gridPropObj.columns [i].cellsrenderer = eval(gridPropObj.columns [i].cellsrenderer);
                            }
                            if (gridPropObj.columns[i].rendered != null) {
                                gridPropObj.columns[i].rendered = eval('(' + gridPropObj.columns[i].rendered + ')');
                            }
                        }



                        //   gridPropObj.rendergridrows=function(obj) {return obj.data;};   
                        // for work flow start
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
                                    beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
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
//                                        $("#search_count").attr('totalRecords', data[0].TotalRows.toLocaleString());
//                                        $("#search_count").html("(" + (labelObject['Fetched'] != null ? labelObject['Fetched'] : 'Fetched') + " "
//                                                + $("#search_count").attr('totalRecords') + " "
//                                                + (labelObject['records in'] != null ? labelObject['records in'] : 'records in') + " "
//                                                + (new Date().getTime() - resultStartTime) / 1000 + " sec)");
                                        } else {
//                                        $("#search_count").attr('totalRecords', 0);
                                            source.totalrecords = 0;
                                            // $("#search_count").text("(No record(s) found)");
//                                        $("#search_count").html("(" + (labelObject['No record(s) found'] != null ? labelObject['No record(s) found'] : 'No record(s) found') + ")");
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

                            var reloadButton = $("<div style='float: left;margin-left: 5px;'><img style='position: relative;width:16px;height:16px; margin-top: 2px;' src='images/iDXPUI5Search.svg'/></div>");
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
                            reloadButton.jqxTooltip({position: 'bottom', content: "Refresh", theme: 'energyblue'});
                            //toolbar.append(container);
                        };
//                        gridPropObj.enabletooltips = false;
                        gridPropObj.cellhover = function (element, pageX, pageY)
                        {
//                            var cellToolTip = $(element).text();
//                            if (cellToolTip != null && cellToolTip != '') {
//                                $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
//                                    showArrow: false, content: cellToolTip});
//                                $(element).parent().jqxTooltip('open', pageX + 5, pageY + 5);
//                            }

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
//            stopLoader();
        },
        error: function (e) {
            console.log(e);
            stopLoader();
            sessionTimeout(e);
        }
    });

}
function onChecked(codifcode, id, conceptId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }
    var checkboxid = id;
    var prop_chkd = $("#fetchtree" + codifcode).prop('checked');
    //        //alert('prop_chkd:' + prop_chkd);
    if (prop_chkd == true) {
        $('#treeDialog1').remove();
        $("#treeDialog").empty();
        var $newdiv1 = $("<div id='treeDialog1' class='visionClassficationTreeData'></div>");
        //                 var existingdiv1 = document.getElementById( "dropdownwidget" );
        //                //$( "#searchResultsCover" ).append( $newdiv1,  existingdiv1 );
        $("#treeDialog").append($newdiv1);
        ////alert($("classificationid").text() + $("#codeid").text());


        var unspsccode = codifcode;
        unspsccode = unspsccode.toString().replace(/0*$/g, "");
        var levellength = unspsccode.length;
        console.log(parseInt(unspsccode) % 2);
        console.log(parseInt(unspsccode) % 2);
        console.log(parseInt(unspsccode) % 2);
        if (parseInt(unspsccode) % 2 != 0)
        {
            levellength = levellength + 1;
        }
        levellength = levellength + 2;
        // alert(levellength);
        showLoader();
        $.ajax({
            type: "GET",
            url: 'getClassificationTree',
            data: {
                'classificationcode': codifcode,
                'level': levellength


            },
            traditional: true,
            cache: false,
            success: function (response) {
                //alert('Success: ' + JSON.stringify(response));
                var source =
                        {
                            datatype: "json",
                            datafields: [
                                {name: 'id'},
                                {name: 'parentid'},
                                {name: 'text'},
                                {name: 'value'}
                            ], id: 'id',
                            localdata: response
                        };
                // create data adapter.
                var dataAdapter = new $.jqx.dataAdapter(source);
                // perform Data Binding.
                dataAdapter.dataBind();
                // get the tree items. The first parameter is the item's id. The second parameter is the parent item's id. The 'items' parameter represents 
                // the sub items collection name. Each jqxTree item has a 'label' property, but in the JSON data, we have a 'text' field. The last parameter 
                // specifies the mapping between the 'text' and 'label' fields.  
                var records = dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{name: 'text', map: 'label'}]);
                $('#treeDialog1').jqxTree({theme: 'energyblue', source: records, width: 'auto'});
                //$("#treeDialog").text(response);
                $("#treeDialog1 .jqx-tree-item").click(function (event) {
                    var that = this;
                    setTimeout(function () {
                        var dblclick = parseInt($(that).data('double'), 10);
                        if (dblclick > 0) {
                            $(that).data('double', dblclick - 1);
                        } else {
                            // singleClick.call(that, event);
                        }
                    }, 300);
                }).dblclick(function (event) {
                    $(this).data('double', 2);
                    // doubleClick.call(this, event);
                    //  function doubleClick(event) {
                    var text = event.target.textContent;
                    var text2 = text.replace(/\s+/g, ' ');
                    //alert(text2);
                    ontreenodeselect(checkboxid, conceptId);
                    // };


                });
                // $('<input type="button" class="treepopup" onclick="ontreenodeselect('+checkboxid+');" value="Search">').insertAfter('#treeDialog1');
                $("<input type='button' class='treepopup' "
                        + "onclick=ontreenodeselect('" + checkboxid + "') "
                        + "value=" + (labelObject['Search'] != null ? labelObject['Search'] : 'Search') + ">").insertAfter('#treeDialog1');
                $("#treeDialog").dialog({ resizable: false,
                    'title': labelObject['Classification Tree'] != null ? labelObject['Classification Tree'] : 'Classification Tree',
                    minwidth: '310px',
                    'max-width': 'auto',
                    height: 200,
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
                $("#treeDialog").dialog("open");
                stopLoader();
            },
            error: function (e) {
                console.log(e);
                stopLoader();
                sessionTimeout(e);
            }

        });
    }
    if (prop_chkd == false) {
        $("#treeDialog").dialog("close");
    }

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
    searchResults('D', '', dataArray, '');

}
function ontreenodeselect(checkboxid) {
    showLoader();
    visionSearchIconsChange();
    alert("checkboxid::" + checkboxid);
    try {
        var item = $('#treeDialog1').jqxTree('getSelectedItem');
        console.log("item::" + item.label);
        var search_count = 0;
        var template_count = 0;
        showLoader();
        //searchResults('TREE', 'N', $.trim(item.value));
        item.label = item.label.substr(0, item.label.indexOf("("));
        //(searchType, reqType, paramsArray, cattype)
        var dataObject = {};
        var dataArray = [];
        dataObject['searchText'] = $.trim(item.value);
        dataArray.push(dataObject);
        searchResults('C', '', dataArray, '');
        $("#treeDialog").empty();
        $("#treeDialog").dialog("close");
        $("#" + checkboxid).prop('checked', false);
    } catch (exception) {
        console.log("exception in treenodeselect function::" + exception);
    }


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
function showbrowsepopup() {
    $("#importreccount").attr("data-isSearch", "N");
    $("#importreccount").html("");
    var importButton = '<input type="button" value="Upload" class="visionFileUpload" onclick="importParamSearch()" width="4px">'
            + '<input id="browsecols" name="importFile" class="upload" type="file" value="Import file" style="display:none;">'
            + '<input type="hidden" id="browsecolsHidden" value="">'
            + '<input type="hidden" id="dlovcolname" value="">'
            + '<input type="hidden" id="typeSelectStr" value="">';
    $("#uploadButtonDiv").html(importButton);

    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }
    var selectBoxOptions = "";

    $("#paramsearch tbody tr").each(function () {
        if ($(this).css('display') != 'none') {
            var dataColumnName = $(this).attr('data-colname');
            var i = $("#" + dataColumnName).attr('data-columnindex');
            var typeSelectStr = $("#typeSelectStr" + i).val();
            var dlovcolname = $("#typeSelectStr" + i).attr("data-dlovcolname");
            console.log(dataColumnName + "::::::" + typeSelectStr);
            //.lastIndexOf(needle, 0)
//            if (dataColumnName != null && dataColumnName.lastIndexOf("D_", 0) == -1) {
//                selectBoxOptions += "<option value='" + $(this).attr('data-colname') + "' >" + $(this).children('td').eq(0).text() + "</option>";
//            }
//            if (dataColumnName != null && dataColumnName.lastIndexOf("D_", 0) == -1) {
            selectBoxOptions += "<option value='" + $(this).attr('data-colname') + "' data-typeSelectStr='" + typeSelectStr + "' data-dlovcolname='" + dlovcolname + "'  >" + $(this).children('td').eq(0).text() + "</option>";
//            }


        }
    });
    $("#browsecolsddw").html(selectBoxOptions);
    $("#importsearchcriteria").show();
    $("#visionImportErrorMsg").show();
    $("#importsearchcriteria").dialog({ resizable: false,
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



                        searchResults("P", '', paramArray, "");
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
function onimportddwChange() {

    var selectedImportColumn = $("#browsecolsddw").val();
    console.log("selectedImportColumn::" + selectedImportColumn);
    if (selectedImportColumn != null && selectedImportColumn != '') {
        // importParamSearch(selectedImportColumn);
        $("#browsecolsHidden").val(selectedImportColumn);
        $("#typeSelectStr").val($("#browsecolsddw").find(':selected').attr("data-typeselectstr"));
        $("#dlovcolname").val($("#browsecolsddw").find(':selected').attr("data-dlovcolname"));


    }
}
function importParamSearch() {

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
//         var csrfToken = $("input[name='_csrf']").val();
//    if (csrfToken != null && csrfToken != '') {
//        params['_csrf'] = $("input[name='_csrf']").val();
//    }
    $("#browsecols").ajaxfileupload({
        'action': "importParamSearch",
        params: params,
        valid_extensions: ['xls', 'xlsx', 'XLS', 'XLSX'],
        'onComplete': function (response) {
            // $("#wait").css("display", "none");
            console.log("response:::" + JSON.stringify(response));
            if (response != null && response['message'] != '') {
                $("#importreccount").attr("data-isSearch", "Y");
                $("#importreccount").html(response['message']);
            }

            stopLoader();
            //  $("body").css({"pointer-events": "auto"});
        },
        'onStart': function () {
            showLoader();
//            $('#wait').show();
//            $("body").css({"pointer-events": "none"});
//            $("#wait").css("display", "block");
            // $('#message').hide();
        }
    });
    $("#browsecols").click();
}
function catalogItems(catCopy) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }
    console.log("inside catalogue ");
    var catalogArray = [];
    var tabName = "searchResults";
    // var data;
    var selectedrowindexes = $('#' + tabName).jqxGrid('selectedrowindexes');
    console.log(selectedrowindexes.length);
    var totalRowIndex = selectedrowindexes.length;
    var datainformations = $('#' + tabName).jqxGrid('getdatainformation');
    if (datainformations != null) {
        var paginginformation = datainformations['paginginformation'];
        if (paginginformation != null) {
            var pagesize = paginginformation['pagesize'];
            if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                totalRowIndex = parseInt(pagesize);
            }

        }
    }
    for (var i = 0; i < totalRowIndex; i++)
    {

        var data = $('#' + tabName).jqxGrid('getrowdata', selectedrowindexes[i]);
        catalogArray.push(data);
        console.log("data::::::" + JSON.stringify(catalogArray));
    }
    // var catCopy = $("#pprcatalogCopyId").val();
    showLoader();
    $.ajax({
        type: "POST",
        url: 'addToCatalogue',
        data: {
            'data': JSON.stringify(catalogArray),
            'catalogCopyId': catCopy

        },
        traditional: true, cache: false,
        success: function (response) {
            stopLoader();
            console.log("success" + response);
            var jsonObj = JSON.parse(response);
            response = jsonObj.message;
            var flag = jsonObj.messageFlag;
            var recordObj = jsonObj.RECORD_NO;
            var recordArray = "";
            console.log("recordObj:::::" + recordObj);
            console.log(recordObj.length);
            for (var i = 0; i < recordObj.length; i++)
            {
                recordArray = recordObj + ",";
            }
            var edited = recordArray.replace(/^,|,$/g, '');
            console.log("edited::::" + edited);
            var dialogSplitMessage = "";
            dialogSplitMessage = dialogSplitIconText(edited + ":" + response, flag);
            // dialogSplitMessage = dialogSplitIconText(recordNo + " : " + response, flag);

            $("#addCatalogue").html(dialogSplitMessage);
            $("#addCatalogue").dialog({ resizable: false,
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                modal: true,
                height: 'auto',
                minHeight: 'auto',
                minWidth: 300,
                maxWidth: 'auto',
                fluid: true,
                buttons: [
                    {
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            $("#searchResults").jqxGrid('clearSelection');
                        }
                    }
                ],

//                buttons: {
//                    Ok: function () {
//                        $(this).html("");
//                        $(this).dialog("close");
//                        $(this).dialog("destroy");
//                        $("#searchResults").jqxGrid('clearSelection');
//                    }
//                },
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
            var dialogText = "Unable to catalog item";
            $("#addCatalogue").html(labelObject[dialogText] != null ? labelObject[dialogText] : dialogText);
            $("#addCatalogue").dialog({ resizable: false,
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                modal: true,
                height: 120,
                minWidth: 300,
                maxWidth: 'auto',
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
//                buttons: {
//                    Ok: function () {
//                        $(this).html("");
//                        $(this).dialog("close");
//                        $(this).dialog("destroy");
//                    }
//
//                },
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
            sessionTimeout(e);
        }

    });
}

function onFuzzyCheck(fuzzyid) {
    $("#result").keydown();
}
function onOpertorChange(searchtype) {
    console.log('searchtype:' + searchtype + ". value:" + $("#" + searchtype + " :selected").text().toUpperCase());
    var id = $("#" + searchtype).parent().parent().attr("id");
    if ($("#" + searchtype + " :selected").text().toUpperCase() == 'BETWEEN')
    {
        $('#' + id).children('td').eq(2).find("input:text").removeAttr('disabled');
        $('#' + id).children('td').eq(2).find("input:button").click();
    } else if ($("#" + searchtype + " :selected").text().toUpperCase() == 'IS' || $("#" + searchtype + " :selected").text().toUpperCase() == 'IS NOT')
    {
        $('#' + id).children('td').eq(2).find("input:text").attr('disabled', 'disabled');
        $('#' + id).children('td').eq(2).find("input:text").val('NULL');
    } else {


        $('#' + id).children('td').eq(2).find("input:text").removeAttr('disabled');
    }



}

//var statusDesc = "";
function viewPendingRequest(dataObj)
{
    // var dataObj = JSON.parse(recordDetails);
    //$("#pndgProcessViewData").empty();
    var recordNo = dataObj['RECORD_NO'];
    var status = dataObj['STATUS'];
    var createBy = dataObj['CREATE_BY'];
    var mesgData = "";

    $.ajax({
        type: "GET",
        url: 'getRecordData',
        data: {
            'status': status,
            'recordNo': recordNo

        },
        traditional: true, cache: false,
        success: function (response) {
            console.log("response:::" + response);
            if (response != null && response != '' && response != undefined) {
                var data = JSON.parse(response);
//            mesgData += "<table style='width: 100%;' border='1'><tr><th>Material No</th><th>" + recordNo + "</th></tr><tr><th>Create By</th><th>" + data.createBy + "</th></tr><tr><th>Status</th><th>" + data.status + "</th></tr><tr><th>Status Description</th><th>" + data.statusDesc + "</th></tr>\n\
//                   <tr><th>Instance</th><th>" + data.instance + "</th></tr><tr><th>Plant</th><th>" + data.plant + "</th></tr>";
                if (data['searchInProcessFlag'] != null && data['searchInProcessFlag'] == 'Y') {
                    $("#pndgProcessView").html(data['inProcessFormString']);
                } else {
                    $("#pndgProcessView").html("<table style='width: 100%;' border='1'><tr><th>Material No</th><th>" + recordNo + "</th></tr><tr><th>Create By</th><th>" + data.createBy + "</th></tr><tr><th>Status</th><th>" + data.status + "</th></tr><tr><th>Status Description</th><th>" + data.statusDesc + "</th></tr>\n\
                   <tr><th>Instance</th><th>" + data.instance + "</th></tr><tr><th>Plant</th><th>" + data.plant + "</th></tr>");
                }
            }
        }

    });


    //console.log("mesgData"+mesgData);
    //  $("#pndgProcessViewData").html(mesgData);
    $("#pndgProcessView").dialog({ resizable: false,
        title: labelObject['View Details'] != null ? labelObject['View Details'] : 'View Details',
        modal: true,
        height: 250,
        minWidth: 300,
        maxWidth: 400,
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
//                buttons: {
//                    Ok: function () {
//                        $(this).html("");
//                        $(this).dialog("close");
//                        $(this).dialog("destroy");
//                    }
//
//                },
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
/*
 Start of Add to Catalogue new Functionality
 */

function PopulateCatalogForm(catCopy, panelId, formId) {
    //var attrType = "";
    if (!(formId != null && formId != '')) {
        formId = "";
    }
    var catalogArray = [];
    var tabName = "searchResults";
    var recordType = $('#RECORD_TYPE').val();
    var linkedColumns = $("#linkedColumns").val();
    //var panelId = $("#panelId").val();
    var selectedrowindexes = $('#' + tabName).jqxGrid('selectedrowindexes');
    console.log(selectedrowindexes.length);

    if (selectedrowindexes.length != 0) {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + tabName).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                    totalRowIndex = parseInt(pagesize);
                }

            }
        }
        for (var i = 0; i < totalRowIndex; i++)
        {
            var data = $('#' + tabName).jqxGrid('getrowdata', selectedrowindexes[i]);
            catalogArray.push(data);

        }
        $.ajax({
            type: "POST",
            url: 'getcatalogformdata',
            data: {
                'data': JSON.stringify(catalogArray),
                'gridId': catCopy,
                'formId': formId
            },

            success: function (response) {

                var resultstring = response.updateResultString;
                // var hidden fields
                var message = response.message;
                if (message != null && message != "") {
                    $("#dialog").html(message);
                    $("#dialog").dialog({ resizable: false,
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
                                    $("#searchResults").jqxGrid('clearSelection');
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

                    $("#addCatalogue").addClass("addToCatalogue");
                    //$("#mat_creation_form_table").append("<input type='hidden' id='" + selectedGridId + "_defaultValues' />");
                    // "<input type="hidden" id="RECORD_NO" value="M300219237" />"
                    $("#addCatalogue").html(resultstring);
                    $("#addCatalogue").dialog({ resizable: false,
                        title: labelObject['Catlog Data'] != null ? labelObject['Catlog Data'] : 'Catlog Data',
                        modal: true,
                        minHeight: 'auto',
                        height: 250,
                        width: 800,
                        fluid: true,
                        buttons: [
                            {
                                text: (labelObject['Process'] != null ? labelObject['Process'] : 'Process'),
                                click: function () {

                                    Process(catCopy, catalogArray, panelId, formId);


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
                        },
                        close: function (event, ui)
                        {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
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
        $("#addCatalogue").html(labelObject['Please select an option to Process'] != null ? labelObject['Please select an option to Process'] : 'Please select an option to Process');

        $("#addCatalogue").dialog({ resizable: false,
            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
            modal: true,
            height: 120,
            //minWidth: 300,
            // maxWidth: 'auto',
            width: 335,
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
function Process(catCopy, catalogArray, panelId, formId) {
    var resultArray = registerValidation();
    if (resultArray != null && Object.keys(resultArray).length == 0) {
        $(".allErrors").hide();
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {
            labelObject = [];
        }



        var baskettype = $("#baskettypehid").val();

        var basicData = {};
//            window.open('dupRes?recordNo_Text=' + $("#RECORD_NO").val());
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

            console.log("textid:::" + textid);
//                  jsonOBJ.ids.push(textid.toLowerCase());
            if (textid != null && textid != 'CREATE_DATE' && textid != 'CREATE_BY') {
                basicData[textid] = textval;
                basicData[rejColumn] = commentVal;


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
                    basicData[columnsArray[i]] = hiddenVal;
//                    basicDatas[columnsArray[i]] = encodeURIComponent(hiddenVal);

                }

            }

        });
        basicData['baskettype'] = 'New Registrations';
        basicData['controlType'] = 'CatalogRegister';
        basicData['baskettypehid'] = 'New Registrations';
        basicData['objectid'] = formId;
        basicData['panelId'] = panelId;
        basicData['gridId'] = catCopy;

        showLoader();
        $.ajax({
            type: "POST",
            url: 'addToCatalogue',
            data: {
                'data': JSON.stringify(catalogArray),
                'basicData': JSON.stringify(basicData),
                'PANEL_ID': panelId,
                'GRID_ID': catCopy,
                'formId': formId,
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                console.log("success" + response);
                var jsonObj = JSON.parse(response);
                var message = jsonObj.message;
                var flag = jsonObj.messageFlag;
                var dialogSplitMessage = "";
                if (message != null && message.indexOf("<table") > -1) {
                    dialogSplitMessage = message;
                } else {
                    dialogSplitMessage = dialogSplitIconText(message, flag);

                }

                $("#addCatalogue").html(dialogSplitMessage);
                $("#addCatalogue").dialog({ resizable: false,
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                    modal: true,
                    height: 'auto',
                    minHeight: 250,
                    width: 'auto',
                    maxWidth: 460,
                    fluid: true,
                    buttons: [
                        {
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                $("#searchResults").jqxGrid('clearSelection');
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
            },
            error: function (e) {
                stopLoader();
                var dialogText = "Unable to catalog item";
                $("#addCatalogue").html(labelObject[dialogText] != null ? labelObject[dialogText] : dialogText);
                $("#addCatalogue").dialog({ resizable: false,
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                    modal: true,
                    height: 120,
                    width: 335,
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
                sessionTimeout(e);
            }

        });
    } else {
        for (var textIdKey in resultArray) {
            $("#dis" + textIdKey).html(resultArray[textIdKey]);
            $("#dis" + textIdKey).show();


        }
    }


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
//                alert(lblFieldId+":psMTMandCount:"+psMTMandCount);
                //                alert(lblFieldId+":psMTEnteredCount:"+psMTEnteredCount);
            }
        }
    });
    //               
    if (psTotalCount > 0)
        $("#" + tabId + "_MO_COUNT").text(psEnteredCount + "/" + psTotalCount);
    else
        $("#" + tabId + "_MO_COUNT").text("");

}
function childDependacyChange(ele, colValue) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

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


            if (dataType == "T" || dataType == "TA") {
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
function spiltToArray(data) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var dataArray = [];
    if (data != null) {
        dataArray = data.split(",");
    }


    return dataArray;
}

/*
 end of Add to Catalogue new Functionality
 */
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
            getParamSearchResults(reqType);
        }

        //$("#BreadCrumbButton").trigger("click");

    }

}

/*
 * 
 * @param {type} typeOfCategory
 * @param {type} discipline
 * @param {type} subDiscipline
 * @param {type} domain
 * @param {type} searchTerm
 * @returns {undefined}
 * category search autocomplete New Code Start
 */
function getCategoryNextRecords(typeOfCategory, discipline, subDiscipline, domain, searchTerm) {
    showLoader();
    console.log("data end index" + parseInt($("#navigationIcons").attr('data-endindex')));
    console.log("data total records" + parseInt($("#navigationIcons").attr('data-totalrecords')));
//    var endIndex = parseInt($("#navigationIcons").attr('data-endindex'));
//    var startIndex = parseInt($("#navigationIcons").attr('data-startindex'));
//    var totalCount = parseInt($("#navigationIcons").attr('data-totalrecords'));
    if ($("#navigationIcons").attr('data-endindex') != null &&
            $("#navigationIcons").attr('data-totalrecords') != null &&
            parseInt($("#navigationIcons").attr('data-endindex')) >= parseInt($("#navigationIcons").attr('data-totalrecords'))) {
        if ($("#navigationIcons").attr('data-startindex') != null &&
                $("#navigationIcons").attr('data-totalrecords') != null
                && parseInt($("#navigationIcons").attr('data-startindex')) >= parseInt($("#navigationIcons").attr('data-totalrecords'))) {
            $("#navigationIcons").attr("data-startindex", parseInt($("#navigationIcons").attr('data-startindex')) - 10);
        }
        if ($("#navigationIcons").attr('data-startindex') != null &&
                parseInt($("#navigationIcons").attr('data-startindex')) > 1) {
            $("#navigationIcons").attr("data-endindex", parseInt($("#navigationIcons").attr('data-startindex')) - 1);
        }
    }
    if ($("#navigationIcons").attr('data-endindex') != null &&
            $("#navigationIcons").attr('data-totalrecords') != null &&
            parseInt($("#navigationIcons").attr('data-endindex')) < parseInt($("#navigationIcons").attr('data-totalrecords')))
    {
        categoryTextSearchResult(typeOfCategory, discipline, subDiscipline,
                parseInt($("#navigationIcons").attr('data-endindex')) + 1,
                parseInt($("#navigationIcons").attr('data-endindex')) + 10
                );
    }
}

function getCategoryPrevRecords(typeOfCategory, discipline, subDiscipline, domain, searchTerm) {
    showLoader();
    alert("Entered Prev records");
    if ($("#navigationIcons").attr('data-startindex') != null && parseInt($("#navigationIcons").attr('data-startindex')) > 1) {
        categoryTextSearchResult(typeOfCategory, discipline, subDiscipline,
                parseInt($("#navigationIcons").attr('data-startindex')) - 10,
                parseInt($("#navigationIcons").attr('data-startindex')) - 1
                );
    }
}

function categoryTextSearchResult(typeOfCategory, discipline, subDiscipline, startindex, endindex)
{
    if (startindex != null && startindex != '' && startindex != undefined && startindex == 1) {
        startindex = 0;
    }
    var searchTerm = $("#categorytextfield").val();
    showLoader();
    if (searchTerm != null && searchTerm != '' && searchTerm != undefined) {
        $.ajax({
            type: "POST",
            url: 'getClassByDiscipline',
            data: {
                'typeOfCategory': typeOfCategory,
                'discipline': discipline,
                subDiscipline: subDiscipline,
                startIndex: startindex,
                endIndex: endindex,
                searchTerm: searchTerm
            },
            traditional: true, cache: false,
            success: function (response) {
                if (response != '') {
                    var categoryObj = JSON.parse(response);
                    $("#categorysrchnvgn").html(categoryObj['breadCrumb']);
                    $("#disciplineTypes").html(categoryObj['disciplineTypes']);
                    if (parseInt(categoryObj['startIndex']) == 0) {
                        $("#navigationIcons").attr("data-totalrecords", categoryObj['totalCount']);
                        $("#navigationIcons").html(categoryObj['navigationIcons']);
                    } else {
                        $("#navigationIcons").attr("data-startindex", categoryObj['startIndex']);
                        $("#navigationIcons").attr("data-endindex", parseInt(categoryObj['startIndex']) + 9);
                        if (parseInt(categoryObj['startIndex']) + 9 > parseInt(categoryObj['totalCount']))
                        {
                            $("#categoryMinIndex").html(parseInt(categoryObj['startIndex']));
                            $("#categoryMaxIndex").html(parseInt(categoryObj['totalCount']));
                        } else
                        {
                            $("#categoryMinIndex").html(parseInt(categoryObj['startIndex']));
                            $("#categoryMaxIndex").html(parseInt(categoryObj['startIndex']) + 9);
                        }
                    }
                    $("#categorytextfield").show();
                    $("#categorysearchmarkbox").remove();
//                    $("#categorytextautocompleteBox").append(categoryObj['searchBox']);
                    $("#categorytextautocompleteBox").html(categoryObj['searchBox']);
                    $("#categorytextautocomplete").append(categoryObj['textBox']);
                    $("#categorytextfield").show();

                    $(".clear_category_input").show();
                    $("#categorytextfield").val(searchTerm);
                    categoryAutoComplete();
                }
                stopLoader();
            },
            error: function (e) {
                stopLoader();
                sessionTimeout(e);
            }

        });
    }
}

function categoryTextSearchClasses(discipline, subDiscipline, startindex, endindex) {

    var searchTerm = $("#categorytextfield").val();
    if (searchTerm != null && searchTerm != '' && searchTerm != undefined) {
        showLoader();
        $.ajax({
            type: "POST",
            url: 'getServiceTerms',
            data: {

                category: discipline,
                subcategory: subDiscipline,
                startIndex: startindex,
                endIndex: endindex,
                searchTerm: searchTerm

            },
            traditional: true, cache: false,
            success: function (response) {
                if (response != null && response != '' && response != undefined) {
                    var categoryObj = JSON.parse(response);
                    $("#categorysrchnvgn").html(categoryObj['breadCrumb']);
                    $("#disciplineTypes").html(categoryObj['disciplineTypes']);

                    if (parseInt(categoryObj['startIndex']) == 0) {
                        $("#navigationIcons").attr("data-totalrecords", categoryObj['totalCount']);
                        $("#navigationIcons").html(categoryObj['navigationIcons']);
                    } else {
                        $("#navigationIcons").attr("data-startindex", categoryObj['startIndex']);
                        $("#navigationIcons").attr("data-endindex", parseInt(categoryObj['startIndex']) + 9);
                        $("#categoryMinIndex").html(parseInt(categoryObj['startIndex']));
                        $("#categoryMaxIndex").html(parseInt(categoryObj['startIndex']) + 9);
                    }
                    $("#navigationIcons").show();
                    $("#categorysearchmarkbox").remove();
//                    $("#categorytextautocompleteBox").append(categoryObj['searchBox']);
                    $("#categorytextautocompleteBox").html(categoryObj['searchBox']);
                    $("#categorytextautocomplete").append(categoryObj['textBox']);
                    $("#categorytextfield").show();

                    $(".clear_category_input").show();
                    $("#categorytextfield").val(searchTerm);
                    categoryAutoComplete();
                }
                stopLoader();
            },
            error: function (e) {
                stopLoader();
                console.log(e);
                sessionTimeout(e);
            }

        });
    }
}

function categoryTextSearchResults(classTerm)
{
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }
    showLoader();
    var ImageType = $("#ImageType").val();
    console.log("ImageType::::;" + ImageType);
    var paramArray = [];
    var operator = "";
    var i = 0;
    var count = 0;
    var paramObj = {};
    paramObj.datatype = "string";
    paramObj.column = "TERM";
    paramObj.rangeflag = "N";
    paramObj.minvalue = "";
    paramObj.maxvalue = "";
    paramObj.value = classTerm;
    if (i > 1) {
        paramObj.symbol = "In";
        paramObj.operator = "IN";
    } else {
        paramObj.symbol = "=";
        paramObj.operator = "EQUALS";
    }
    paramObj.staged = "N";
    paramArray.push(paramObj);

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
    paramArray.push(paramObj);

    console.log("classTerm::::" + classTerm + ":::count:::" + count);
    searchResults('I', '', paramArray, "");

}

function categoryAutoComplete() {
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
}

function fetchMaterialDataAfterEnter(event, typeOfCategory, discipline, subDiscipline, startIndex, endIndex)
{
    if (event.which == 13) {

        $(".ui-autocomplete").css("display", "none");
        categoryTextSearchResult(typeOfCategory, discipline, subDiscipline, startIndex, endIndex);
    }

}

function fetchServiceDataAfterEnter(event, discipline, subDiscipline, startIndex, endIndex)
{
    if (event.which == 13) {
        $(".ui-autocomplete").css("display", "none");
        categoryTextSearchClasses(discipline, subDiscipline, startIndex, endIndex);
    }
}
function viewSearchTreeStructure(gridId, treeId, targetBlank, dataObj) {
    $("#treeId").remove();
    $("#extTreeParams").remove();
    $("#urlSubmitForm").find('input').remove();
    //var selectedRowData = $('#' + gridId).jqxGrid('getrowdata', 0);
    $("#urlSubmitForm").append("<input type='hidden' name='treeId' id='treeId' value='" + treeId + "'/>");
    $("#urlSubmitForm").append("<input type='hidden' name='extTreeParams' id='extTreeParams' value='" + JSON.stringify(dataObj) + "'/>");
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
function sowDocDownload(dataRecord, sowDocId) {
    $("#downloadSOWDoc").html("");
    var inputType = "<input type='hidden' name='dataRecord' value='" + dataRecord + "'/>";
    $("#downloadSOWDoc").append(inputType);
    var inputType = "<input type='hidden' name='sowDocId' value='" + sowDocId + "'/>";
    $("#downloadSOWDoc").append(inputType);
    $("#downloadSOWDoc").submit();
}
//modelspecimport//
function showbrowsepopupformodelspec() {
    $("#importreccount").attr("data-isSearch", "N");
    $("#importreccount").html("");
    var importButton = '<input type="button" value="Upload" class="visionFileUpload" onclick="importParamSearch()" width="4px">'
            + '<input id="browsecols" name="importFile" class="upload" type="file" value="Import file" style="display:none;">'
            + '<input type="hidden" id="browsecolsHidden" value="">'
            + '<input type="hidden" id="dlovcolname" value="">'
            + '<input type="hidden" id="typeSelectStr" value="">';
    $("#uploadButtonDiv").html(importButton);

    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }
    var selectBoxOptions = "";

    $("#specsearch tbody tr").each(function () {

        if ($(this).css('display') != 'none') {
            var dataColumnName = $(this).attr('data-colname');
            var i = $("#" + dataColumnName).attr('data-columnindex');
            var typeSelectStr = $("#typeSelectStr" + i).val();
            var dlovcolname = $("#typeSelectStr" + i).attr("data-dlovcolname");
            console.log(dataColumnName + "::::::" + typeSelectStr);
            //.lastIndexOf(needle, 0)
//            if (dataColumnName != null && dataColumnName.lastIndexOf("D_", 0) == -1) {
//                selectBoxOptions += "<option value='" + $(this).attr('data-colname') + "' >" + $(this).children('td').eq(0).text() + "</option>";
//            }
//            if (dataColumnName != null && dataColumnName.lastIndexOf("D_", 0) == -1) {
            selectBoxOptions += "<option value='" + $(this).attr('data-colname') + "' data-typeSelectStr='" + typeSelectStr + "' data-dlovcolname='" + dlovcolname + "'  >" + $(this).children('td').eq(0).text() + "</option>";
//            }


        }
    });
    $("#browsecolsddw").html(selectBoxOptions);
    $("#importsearchcriteria").show();
    $("#visionImportErrorMsg").show();
    $("#importsearchcriteria").dialog({ resizable: false,
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
                        //new code
                        var reqType = "spec";
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


                        //searchResults("P", '', paramArray, "");
                        //new code 
                        searchResults("M", 'spec', paramArray, "");
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

//modelspecimport//
