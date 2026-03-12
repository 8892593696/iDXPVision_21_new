var selectedDataArray = [];
const jskeyCodes = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    CONTROL: 1000,
    SHIFT: 1001,
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
    DELETE: 46,
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
$(document).ready(function () {
    $(".slider").hide();
    $(".goto").click(function () {
        $("#table-of-content").hide();
        var switchTo = $(this).attr("switch-to");
        //alert(switchTo);

        if (switchTo) {
            $(".slider").not("." + switchTo).hide();
            $("." + switchTo).show();
            lastSwitch = switchTo;
        } else {
            $(".slider").hide();
        }
        // alert(switchTo);
        var slickOpts = {
            autoplay: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerMode: true,
            easing: 'swing', // see http://api.jquery.com/animate/
            speed: 1000,
            dots: true,
            customPaging: function (slick, index) {
                return '<a>' + (index + 1) + '</a>';
            }
        };
        $('[inner-slide]').slick(slickOpts);
        // $('.slider').slick(slickOpts);
    });
});
// Init slick carousel
var tabsOldData = {};
function backFunction() {
    $(".slider").hide();
    $("." + lastSwitch).hide();
    $('[inner-slide]').slick('unslick');
    $("#table-of-content").show();
}
var service_last_Switch;
var fieldsArray = new Array();
$(document).ready(function () {
    $(".slider").hide();
    $(".goto-service-contract").click(function () {
        $("#table-of-content").hide();
        var switchTo = $(this).attr("switch-to");
        //alert(switchTo);

        if (switchTo) {
            $(".slider").not("." + switchTo).hide();
            $("." + switchTo).show();
            service_last_Switch = switchTo;
        } else {
            $(".slider").hide();
        }
        // alert(switchTo);
        var slickOpts = {
            autoplay: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerMode: true,
            easing: 'swing', // see http://api.jquery.com/animate/
            speed: 1000,
            dots: true,
            customPaging: function (slick, index) {
                return '<a>' + (index + 1) + '</a>';
            }
        };
        $('[service-contract]').slick(slickOpts);
        // $('.slider').slick(slickOpts);
    });
});
function seriveBack() {
    $(".slider").hide();
    $("." + service_last_Switch).hide();
    $('[service-contract]').slick('unslick');
    $("#table-of-content").show();
}
var bpo_last_Switch;
$(document).ready(function () {
    $(".slider").hide();
    $(".goto-bpo").click(function () {
        $("#table-of-content").hide();
        var switchTo = $(this).attr("switch-to");
        //alert(switchTo);

        if (switchTo) {
            $(".slider").not("." + switchTo).hide();
            $("." + switchTo).show();
            bpo_last_Switch = switchTo;
        } else {
            $(".slider").hide();
        }
        // alert(switchTo);
        var slickOpts = {
            autoplay: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerMode: true,
            easing: 'swing', // see http://api.jquery.com/animate/
            speed: 1000,
            dots: true,
            customPaging: function (slick, index) {
                return '<a>' + (index + 1) + '</a>';
            }
        };
        $('[bpo-inner-slide]').slick(slickOpts);
        // $('.slider').slick(slickOpts);
    });
});
function bpoBack() {
    $(".slider").hide();
    $("." + bpo_last_Switch).hide();
    $('[bpo-inner-slide]').slick('unslick');
    $("#table-of-content").show();
}
var bppo_last_Switch;
$(document).ready(function () {
    $(".slider").hide();
    $(".goto-bppo").click(function () {
        $("#table-of-content").hide();
        var switchTo = $(this).attr("switch-to");
        //alert(switchTo);

        if (switchTo) {
            $(".slider").not("." + switchTo).hide();
            $("." + switchTo).show();
            bppo_last_Switch = switchTo;
        } else {
            $(".slider").hide();
        }
        // alert(switchTo);
        var slickOpts = {
            autoplay: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerMode: true,
            easing: 'swing', // see http://api.jquery.com/animate/
            speed: 1000,
            dots: true,
            customPaging: function (slick, index) {
                return '<a>' + (index + 1) + '</a>';
            }
        };
        $('[bppo-inner-slide]').slick(slickOpts);
        // $('.slider').slick(slickOpts);
    });
});
function bppoBack() {
    $(".slider").hide();
    $("." + bppo_last_Switch).hide();
    $('[bppo-inner-slide]').slick('unslick');
    $("#table-of-content").show();
}
var bpdm_last_Switch;
$(document).ready(function () {
    $(".slider").hide();
    $(".goto-bpdm").click(function () {
        $("#table-of-content").hide();
        var switchTo = $(this).attr("switch-to");
        //alert(switchTo);

        if (switchTo) {
            $(".slider").not("." + switchTo).hide();
            $("." + switchTo).show();
            bpo_last_Switch = switchTo;
        } else {
            $(".slider").hide();
        }
        // alert(switchTo);
        var slickOpts = {
            autoplay: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerMode: true,
            easing: 'swing', // see http://api.jquery.com/animate/
            speed: 1000,
            dots: true,
            customPaging: function (slick, index) {
                return '<a>' + (index + 1) + '</a>';
            }
        };
        $('[bpdm-inner-slide]').slick(slickOpts);
        // $('.slider').slick(slickOpts);
    });
});
function bpdmBack() {
    $(".slider").hide();
    $("." + bpdm_last_Switch).hide();
    $('[bpdm-inner-slide]').slick('unslick');
    $("#table-of-content").show();
}
var bpr_lastSwitch;
$(document).ready(function () {
    $(".slider").hide();
    $(".goto-bpr").click(function () {
        $("#table-of-content").hide();
        var switchTo = $(this).attr("switch-to");
        //alert(switchTo);

        if (switchTo) {
            $(".slider").not("." + switchTo).hide();
            $("." + switchTo).show();
            bpr_lastSwitch = switchTo;
        } else {
            $(".slider").hide();
        }
        // alert(switchTo);
        var slickOpts = {
            autoplay: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerMode: true,
            easing: 'swing', // see http://api.jquery.com/animate/
            speed: 1000,
            dots: true,
            customPaging: function (slick, index) {
                return '<a>' + (index + 1) + '</a>';
            }
        };
        $('[bpr-inner-slide]').slick(slickOpts);
        // $('.slider').slick(slickOpts);
    });
});
function bprBack() {
    $(".slider").hide();
    $("." + bpr_lastSwitch).hide();
    $('[bpr-inner-slide]').slick('unslick');
    $("#table-of-content").show();
}
$(document).ready(function () {
    var ssUsername = $("#ssUsername").val();
    var apiSubscriptionStatus = $("#apiSubscriptionStatus").val();
    var apiSubscriptionMessage = $("#apiSubscriptionMessage").val();
    if (ssUsername != null && ssUsername != '' && ssUsername != 'null') {
        if (apiSubscriptionStatus != null && apiSubscriptionStatus != '' && apiSubscriptionStatus != 'null' && apiSubscriptionStatus == "true") {
            $("#secondRow").css("display", "");
            $("#buyButton").css("display", "none");
        }
    }
    var spanId = "";
    $("#navItemDiv").on('click', function () {

        var selectedRole = "";
//         $("#secondRow").css("display","");
        if (ssUsername != null && ssUsername != '' && ssUsername != 'null') {


            console.log(this.id);
            spanId = this.id;
            if (apiSubscriptionStatus != null && apiSubscriptionStatus != '' && apiSubscriptionStatus != 'null' && apiSubscriptionStatus == "true") {

                $("#secondRow").css("display", "");
                $("#buyButton").css("display", "none");
            } else {
                var modalObj = {
                    title: 'Message',
                    body: apiSubscriptionMessage
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        click: function () {
                            //location.reload();
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("modalDailogDiv", modalObj);

            }
        } else {
            $('#loginModel').modal('show');
        }
//    alert(this.id);
    });


});
function getSubscription() {
    var ssUsername = $("#ssUsername").val();
    var apiSubscriptionStatus = $("#apiSubscriptionStatus").val();
//    var apiSubscriptionMessage = $("#apiSubscriptionMessage").val();
    if (ssUsername != null && ssUsername != '' && ssUsername != 'null') {
        if (apiSubscriptionStatus != null && apiSubscriptionStatus != '' && apiSubscriptionStatus != 'null' && apiSubscriptionStatus == "true") {
            $("#secondRow").css("display", "");
        }
    }

    if (ssUsername != null && ssUsername != '' && ssUsername != 'null') {
        $.ajax({
            type: 'POST',
            dataType: 'HTML',
            url: 'getCloudSubscriptionForm',
            cache: false,
            data: {
                highLevelMenu: $("#highLevelMenu").val(),
                formTpe: 'CLOUD_FORM'
            },
            success: function (response) {
                var modalObj = {
//                    title: 'Subscription',
                    title: labelObject['Subscription'] != null ? labelObject['Subscription'] : 'Subscription',
                    modelSize: 'modal-xl',
                    body: response,

                };
                cloudFormpopup("modalDailogDiv", modalObj);

            }, //success
            error: function (e) {

            }
        });//ajax
    } else {
        $('#loginModel').modal('show');
    }

}
function fetchTabGrid(selectedIndex) {

    showLoader();
    console.log("selectedTabIndex::" + selectedIndex);
    if (selectedIndex != null) {
        //  alert("::::"+selectedIndex);
        var gridIdStr = $("#gridIdStr").val();
        var gridIdArry = gridIdStr.split(",");
        for (var i = 0; i < gridIdArry.length; i++) {
            $("#" + gridIdArry[i] + "_FILTER_FORM").html("");
        }
        var compTypeStr = $("#compTypeStr").val();
        var compTypeArray = compTypeStr.split(",");
        var selectedGridCompType = compTypeArray[selectedIndex];
        var selectedGridId = gridIdArry[selectedIndex];
        var highLevelMenu = $("#highLevelMenu").val();
        $('#exportGridId').val(selectedGridId);
        if (selectedGridId != null && selectedGridId != '') {
            $('#' + selectedGridId).off('cellclick');
            alert("selectedGridId:::" + selectedGridId);
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: "getTabDataByCompId",
                cache: false,
                data: {
                    selectedCompId: selectedGridId,
                    selectedCompType: selectedGridCompType,
                    highLevelMenu: highLevelMenu,
                    modifySubscriptionFlag: $('#modifySubscriptionFlag').val(),
                    renewSubscriptionFlag: $('#renewSubscriptionFlag').val(),
                    subscriptionId: $('#subscriptionId').val()
                },
                success: function (response) {
                    stopLoader();
                    if (selectedGridCompType == 'HTML')
                    {
                        $("#" + selectedGridId).html(response['htmlStr']);
                    } else if (selectedGridCompType == "CHART") {
                        getChartsData(response, selectedGridId); //charts
                    } else if (selectedGridCompType == "SUBSCRIPTION") {
                        $("#" + selectedGridId).html(response['subStr']);
                    } else if (selectedGridCompType == "API") {
                        var divstr = '<div class="cloudHTMLFormChildDiv" id="' + selectedGridId + '_UPCOMMING_DIV" ><span class="" style="color: gray; cursor:pointer;" onclick="fetchSubscriptions(\'' + selectedGridId + '_UPCOMMING_DIV\', \'UPCOMING\',\'' + highLevelMenu + '\',\'' + selectedGridId + '\')">&#9654; Upcoming</span><div style="padding-top: 10px; display:none;"></div></div>';
                        divstr += '<div class="cloudHTMLFormChildDiv" id="' + selectedGridId + '_HISTORY_DIV" ><span class="" style="color: gray; cursor:pointer;" onclick="fetchSubscriptions(\'' + selectedGridId + '_HISTORY_DIV\', \'HISTORY\',\'' + highLevelMenu + '\',\'' + selectedGridId + '\')">&#9654; History</span><div style="padding-top: 10px; display:none;"></div></div>';
                        $("#" + selectedGridId).html('<div class="cloudHTMLFormChildDiv">' + response['apiStr'] + '</div>' + divstr);
                    } else if (selectedGridCompType == 'FILTER_GRID') {
                        $("#" + selectedGridId + "_FILTER_GRID").html(response['filterString']);
                        $("#" + selectedGridId + "_ACCORDIAN").accordion({
                            collapsible: true,
                            heightStyle: "content",
                            active: false,
                            autoHeight: false
                        });
                        $("#" + selectedGridId + "_ACCORDIAN  h3").bind('click', function () {
                            var self = this;
                            setTimeout(function () {
                                var theOffset = $(self).offset();
                                $('body,html').animate({scrollTop: theOffset.top - 40});
                            }, 310); // ensure the collapse animation is done
                        });
                        getFilterGridForm(selectedGridId, '', selectedIndex);
                        $("#" + selectedGridId + "_ACCORDIAN").accordion({active: 0});
                    } else {
                        gridConfig(response, 0, [], selectedGridId);
                    }

                },
                error: function (e) {
                    sessionTimeout(e);
                }// Error function in Ajax
            }); // end ajax call
        }// end if(selectedGridId != null && selectedGridId != '')
    }// end if (selectedIndex != null)

    $("#modifySubscriptionFlag").val("");
    $("#renewSubscriptionFlag").val("");
    $("#subscriptionId").val("");

}
function gridConfig(gridResultObj, selectedGridIndex, paramArray, selectedGridId) {

    showLoader();
    // ravi start 
    globalTabId = gridResultObj['gridId'];
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");

    // ravi end 
    console.log(":293::gridConfig::");
    if (selectedGridId != null && selectedGridId != '' && selectedGridId != undefined && selectedGridId == 'DEFAULT_HOME') {
        $("#" + gridResultObj['gridId']).remove();
        $("#showdomainBasedCards").html("<div id='" + gridResultObj['gridId'] + "'></div>");
    }
//    else if (selectedGridId != null && selectedGridId != '' && selectedGridId != undefined) {
//         $("#"+selectedGridId).html("<div id='" + gridResultObj['gridId'] + "'></div>");
//    } 
    else {
        if (!fioriThemeCheck) {
            $("#" + selectedGridId).html("<div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div id='submitDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabSubmit'></div></div><div id='exportDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabExport'></div></div></div><div id='" + gridResultObj['gridId'] + "'></div>");
        } else {
            var gridInitParamObj = gridResultObj['gridInitParamObj'];
            if (gridInitParamObj != null && gridInitParamObj != undefined && gridInitParamObj != '') {
                var srsFlag = gridInitParamObj['uuu_SRS_flag'];
                if (srsFlag != null && srsFlag != undefined && srsFlag != '' && srsFlag == 'Y') {
                    $("#" + selectedGridId).html("<div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div id='submitDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabSubmit'></div></div><div id='exportDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabExport'></div></div></div><div id='" + gridResultObj['gridId'] + "'></div>");
                } else {
                    //09-02-2026
//                    $("#showdynamicGridWrapper .card-header").html("<div id ='gridUI5Filter_" + gridResultObj['gridId'] + "'></div><div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div class=\"fiorirightgridControls\"><div class=\"fioriGridSearchwrap\" title = \"Show/Hide Filter\" onclick=\"toggleUI5FilterGridForm('" + gridResultObj['gridId'] + "')\"><img src=\"images/iDXPUI5Settings.svg\" title = \"Show/Hide Filter\" width=\"16px\"/></div><div id='submitDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabSubmit'></div><div id='exportDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabExport'></div></div></div></div></div>");
                    //09-02-2026
                    let selector = "#showdynamicGridWrapper .card-header";

                    if ($("#showdynamicGridWrapper .card-header").length === 0 || !$(".gridareaSection").is(":visible")) {
                        selector = "#showRelatedtabContentID";
                    }
                    if ($("#showRelatedtabContentID").length === 0) {
                        selector = "";
                    }
                    if ($("#dxpFioriContent").is(":visible")) {
                        selector = "#dxpFioriContent";
                    }
                    if (selector != null && selector != "" && selector != undefined) {
                        $(selector).html(
                                "<div id='gridUI5Filter_" + gridResultObj['gridId'] + "'></div>" +
                                "<div id='container' class='visionGenericTabContainer'>" +
                                "<div class='visionGenericTabsOpeartions'>" +
                                "<div class='d-flex align-items-center'>" +
                                "<div id='basketNameValId' class='materialBasketClass'></div>" +
                                "<div class='fiorirightgridControls'>" +
                                "<div class='fioriGridSearchwrap' title='Show/Hide Filter' " +
                                "onclick=\"toggleUI5FilterGridForm('" + gridResultObj['gridId'] + "')\">" +
                                "<img src='images/iDXPUI5AnimateArrow.gif' title='Show/Hide Filter' style='transform: rotate(-90deg);width:25px'/>" +
                                "</div>" +
                                "<div id='submitDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabSubmit'></div>" +
                                "<div id='exportDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabExport'></div>" +
                                "</div>" +
                                "<div id='uiGridIconsDivId' class='ui5gridbutton-row ch-javaTo-js'>" +
                                "<button class='ui5gridgo-btn go-btn' " +
                                "onclick=\"getUI5FilterGridResults('" + gridResultObj['gridId'] + "', '" + gridResultObj['gridId'] + "', '0', '')\">" +
                                "" + (labelObject['Go'] != null ? labelObject['Go'] : 'Go') + "</button>" +
                                "<button class='ui5gridgo-btn adopt-filters-btn' " +
                                "onclick=\"getSetgridPersonlization('" + gridResultObj['gridId'] + "', 'GRID')\">" +
                                "" + (labelObject['Adapt Filters'] != null ? labelObject['Adapt Filters'] : 'Adapt Filters') + "</button>" +
                                "<button class='ui5gridgo-btn import-btn' " +
                                "onclick=\"showgridUI5browsepopup('" + gridResultObj['gridId'] + "')\">" +
                                "" + (labelObject['Import Search'] != null ? labelObject['Import Search'] : 'Import Search') + "</button>" +
                                "<button class='ui5gridgo-btn reset-btn' " +
                                "onclick=\"clearUI5FilterGridSearch('" + gridResultObj['gridId'] + "')\">" +
                                "" + (labelObject['Reset'] != null ? labelObject['Reset'] : 'Reset') + "</button>" +
                                "</div>" +
                                "</div>" +
                                "</div>" +
                                (selector && (selector === "#showRelatedtabContentID" || selector == "#dxpFioriContent")
                                        ? "<div id='" + gridResultObj['gridId'] + "'></div>"
                                        : ""
                                        ) +
                                "</div>"
                                );
                    } else {
                        $("#showdynamicGridWrapper .card-header").html("<div id ='gridUI5Filter_" + gridResultObj['gridId'] + "'></div><div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div class=\"fiorirightgridControls\"><div class=\"fioriGridSearchwrap\" title = \"Show/Hide Filter\" onclick=\"toggleUI5FilterGridForm('" + gridResultObj['gridId'] + "')\"><img src=\"images/iDXPUI5Settings.svg\" title = \"Show/Hide Filter\" width=\"16px\"/></div><div id='submitDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabSubmit'></div><div id='exportDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabExport'></div></div></div></div></div>");
                    }
                    $("#gridUI5Filter_" + gridResultObj['gridId']).css("display", "none");
                    try {
                        if (gridResultObj['gridId'] != null && gridResultObj['gridId'] != undefined && gridResultObj['gridId'] != "") {
                            getUI5FilterGridForm(gridResultObj['gridId'], null, 'GRID', gridResultObj);
                        }
                    } catch (e) {

                    }
                }
            } else {
                $("#showdynamicGridWrapper .card-header").html("<div id ='gridUI5Filter_" + gridResultObj['gridId'] + "'></div><div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div class=\"fiorirightgridControls\"><div class=\"fioriGridSearchwrap\" title = \"Show/Hide Filter\" onclick=\"toggleUI5FilterGridForm('" + gridResultObj['gridId'] + "')\"><img src=\"images/iDXPUI5Settings.svg\" title = \"Show/Hide Filter\" width=\"16px\"/></div><div id='submitDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabSubmit'></div><div id='exportDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabExport'></div></div></div></div></div>");
                $("#gridUI5Filter_" + gridResultObj['gridId']).css("display", "none");
                try {
                    if (gridResultObj['gridId'] != null && gridResultObj['gridId'] != undefined && gridResultObj['gridId'] != "") {
                        getUI5FilterGridForm(gridResultObj['gridId'], null, 'GRID', gridResultObj);
                    }
                } catch (e) {

                }
            }
//           $("#showdynamicGridWrapper .card-header").html("<div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div class=\"fiorirightgridControls\"><div class=\"fioriGridSearchwrap\"><input type=\"text\" id='firorInput_" + gridResultObj['gridId'] + "'placeholder=\"Search\" /></div><div id='submitDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabSubmit'></div><div id='exportDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabExport'></div></div></div></div></div>");


        }

//         $("#" + selectedGridId).html("<div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div id='submitDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabSubmit'></div></div><div id='exportDropdown" + gridResultObj['gridId'] + "' class='visionGenericTabExport'></div></div></div><div id='" + gridResultObj['gridId'] + "'></div>");

    }


    try {
        // if(true) {
        try {
            $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'cells');
            $('#' + gridResultObj['gridId']).jqxGrid('clearfilters');
        } catch (e) {

        }


        if (gridResultObj != null) {
            //need to assign all hidden fields like hrefColumn,linkedColumns,stripValue,imageColumn,imageTable,imageTableColumn
            var hrefObj = {}; //hrefObj
            hrefObj = gridResultObj['hrefObj'];
            $("#basketName").val(gridResultObj['gridName']);
            $("#ssDuplCheckEnableFlag").val(gridResultObj['ssDuplCheckEnableFlag']);
            $("#hrefColumn").val(hrefObj['hrefColumn'] != null ? hrefObj['hrefColumn'] : "");
//                        $("#hrefColumn").val(hrefObj['hrefColumn']);
            $("#linkedColumns").val(hrefObj['linkedColumns']);
            $("#stripValue").val(hrefObj['stripValue']);
            $("#imageColumn").val(hrefObj['imageColumn']);
            $("#imageTable").val(hrefObj['imageTable']);
            $("#imageTableColumn").val(hrefObj['imageTableColumn']);
            $("#defaultValues").val(gridResultObj['defaultValues']);
            if (gridResultObj['defaultValues'] != '' && gridResultObj['defaultValues'] != undefined)
            {
                $("#defaultValues").val(gridResultObj['defaultValues']);
            } else {
                $("#defaultValues").val(gridResultObj['initialValues']);
            }

            var navigationDataField = hrefObj['hrefColumn'];
            var gridInitParamObj = {}; //gridInitParamObj
            gridInitParamObj = gridResultObj['gridInitParamObj'];
            try {
                if (gridInitParamObj != null && !jQuery.isEmptyObject(gridInitParamObj)) {
                    navigationDataField = gridInitParamObj['uuu_navigationDataField'];
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

            //  alert("hrefObj:::::"+JSON.stringify(hrefObj));
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
//                    $(element).addClass("show_detail");
                    $(element).find(".jqx-grid-cell").addClass("show_detail");
                    $(element).parent().jqxTooltip({position: 'mouse',
                        position: 'bottom-right',
                        showArrow: false,
                        content: "Data Sheet"});
                    //content: $(element).text()});
                }

                var renderToolbar = gridPropObj.renderToolbar;
//                gridPropObj.autorowheight = true;
                // console.log("renderToolbar::::"+renderToolbar);
                //  alert("renderToolbar:::"+renderToolbar);
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
//                var drpdownGridAndEditRender = function (row, columnfield, value, defaulthtml, columnproperties) {
//                    var cellValue = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', row, columnfield);
//                    var viewType = "GRID-VIEW";
//                    var editable = gridPropObj.editable;
//                    var celwidth = columnproperties.width;
//                    var colLabel = columnproperties.text;
//                    var ddwData = gridResultObj.dropDowndData;
//                    var ddwObj = ddwData[columnfield];
//                    var dependencyparams = ddwObj.dependencyparams;
//                    $("#" + gridResultObj['gridId']).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
//                    var imageHtml = '<img src="images/iDXPUI5SearchDropdown.png" onclick="visionDropdown(\'' + ddwObj.ddwId.trim() + '\',\'' + dependencyparams + '\',\'' + viewType + '\',\'' + ddwObj.gridId + '\',\'' + columnfield + '\',\'' + row + '\')">';
////        var cellHtml = '<div> ' +
////                '<input id = "' + tabId + columnfield + 'griddrpdownAndEditValueId' + row + '" class ="griddrpdownAndEditValue" type="text" style="width: 90%;height: ' + $("#" + tabId).jqxGrid('rowsheight') + 'px;" autocomplete="off"  value="' + value + '" data-column="' + columnfield + '" data-last-ed-field=\'' + columnfield + '\'  onfocus="selectFocusedRow(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" ' + 
//////                ' onkeydown="preventDeletekey(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" '+
////                ' onkeyup="updateCellValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
////                imageHtml +
////                '</div>'; 
////        var cellHtml = '<input id = "' + tabId + columnfield + 'griddrpdownAndEditValueId' + row + '" type="text" style="width: 90%;height: ' + $("#" + tabId).jqxGrid('rowsheight') + 'px;" autocomplete="off"  value="' + value + '" data-column="' + columnfield + '" data-last-ed-field=\'' + columnfield + '\'  onfocus="selectFocusedRow(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" onkeydown="preventDeletekey(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" onkeyup="updateCellValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
////                imageHtml ;
//
//                    var onkeyupfunc = ' onkeyup="updateCellValueDDW(\'' + $("#" + gridResultObj['gridId']) + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" value="' + value + '"'
////+' onfocus="selectFocusedRow(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" '
//                            + ' onkeydown="preventDeleteKey(\'' + $("#" + gridResultObj['gridId']) + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" '
//                            + '';
//                    var cellHtml = "<div  class='visionGridDataAlignInput'>"
//                            + "<div class='visionGridDataAlignInputField' style='width: 95%'>"
//                            + "<input type='text'"
//                            + " id = '" + $("#" + gridResultObj['gridId']) + columnfield + "griddrpdownAndEditValueId" + row + "'"
//                            + " data-column-label='" + colLabel + "' "
////                + " onkeyup=propValKeyUp1('" + tbid + "'," + row + ",'none','" + ddwObj.gridId + "','" + columnfield + "',event)"
//                            + " style=' border:none;width: 95%;height:" + $("#" + gridResultObj['gridId']).jqxGrid('rowsheight') + "px;' autocomplete='off'"
//                            + " " + onkeyupfunc + " "
//                            + "/>"
//                            + "</div><div class='visionGridDataAlignInputImage' >"
//                            + " <img src='images/iDXPUI5SearchDropdown.png' style='width: 12px; height: 12px;margin-top: 10px;margin-right: 15px; cursor: pointer;'"
//                            + " onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "'," + row + ",'" + ddwObj.gridId + row + "')>"
//                            + "</div>"
//                            + "</div>";
//
//
//                    return cellHtml;
//                };


                var drpdownGridAndEditRender = function (row, columnfield, value, defaulthtml, columnproperties) {
                    var tabId = gridResultObj['gridId'];
                    var cellValue = $("#" + tabId).jqxGrid('getcellvalue', row, columnfield);
                    var viewType = "GRID-VIEW";
                    var editable = gridPropObj.editable;
                    var celwidth = columnproperties.width;
                    var colLabel = columnproperties.text;
                    var ddwData = gridResultObj.dropDowndData;
                    var ddwObj = ddwData[columnfield];
                    var dependencyparams = ddwObj.dependencyparams;
                    $("#" + tabId).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
                    var imageHtml = '<img src="images/iDXPUI5SearchDropdown.png" onclick="visionDropdown(\'' + ddwObj.ddwId.trim() + '\',\'' + dependencyparams + '\',\'' + viewType + '\',\'' + ddwObj.gridId + '\',\'' + columnfield + '\',\'' + row + '\')">';
                    var onkeyupfunc = ' onkeyup="updateCellValueDDW(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" value="' + value + '"'
                            + ' onkeydown="preventDeleteKey(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" '
                            + '';
                    var cellHtml = "<div  class='visionGridDataAlignInput'>"
                            + "<div class='visionGridDataAlignInputField' style='width: 95%'>"
                            + "<input type='text'"
                            + " id = '" + tabId + columnfield + "griddrpdownAndEditValueId" + row + "'"
                            + " data-column-label='" + colLabel + "' "
                            + " style=' border:none;width: 95%;height:" + $('#' + tabId).jqxGrid('rowsheight') + "px;' autocomplete='off'"
                            + " " + onkeyupfunc + " "
                            + "/>"
                            + "</div><div class='visionGridDataAlignInputImage' >"
                            + " <img src='images/iDXPUI5SearchDropdown.png' style='width: 12px; height: 12px;margin-top: 10px;margin-right: 15px; cursor: pointer;'"
                            + " onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "'," + row + ",'" + ddwObj.gridId + row + "')>"
                            + "</div>"
                            + "</div>";


                    return cellHtml;
                };
                var gridTextCellComitRender = function (row, columnfield, value, defaulthtml, columnproperties) {
                    var tabId = gridResultObj['gridId'];
                    var cellValue = $("#" + tabId).jqxGrid('getcellvalue', row, columnfield);
                    var viewType = "GRID-VIEW";
                    var editable = gridPropObj.editable;
                    var celwidth = columnproperties.width;
                    $("#" + tabId).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
                    var celwidth1 = $("#" + tabId).jqxGrid('getcolumnproperty', columnfield, 'width');
                    var cellHtml = '<div> <input id = "' + tabId + columnfield + 'griddrpdownAndEditValueId' + row + '" type="text" style="width: 100%;height: ' + $("#" + tabId).jqxGrid('rowsheight') + 'px;"  autocomplete="off" value="' + value + '" data-column="' + columnfield + '"  onfocus="selectFocusedRow(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" ' +
                            ' onkeyup="updateCellValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
                            '</div>';
                    return cellHtml;
                };
                var gridTextCellCheckBoxRender = function (row, columnfield, value, defaulthtml, columnproperties) {
                    var tabId = gridResultObj['gridId'];
                    var cellValue = $("#" + tabId).jqxGrid('getcellvalue', row, columnfield);
                    var viewType = "GRID-VIEW";
                    var editable = gridPropObj.editable;
                    var celwidth = columnproperties.width;
                    $("#" + tabId).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
                    if (value != null && value != '' && value != undefined && (value == "Y" || value == "y"))
                    {
                        var cellHtml = '<label class="customcontainer"> <input id = "' + tabId + columnfield + 'griddcheckBoxRenderId' + row + '" type="checkbox" checked' +
                                ' value="Y" data-column="' + columnfield + '"   onchange="updateCheckBoxValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
                                '<span class="customecheckmark"></span></label>';
                    } else {
                        var cellHtml = '<label class="customcontainer"> <input id = "' + tabId + columnfield + 'griddcheckBoxRenderId' + row + '" type="checkbox" ' +
                                ' value="N" data-column="' + columnfield + '"   onchange="updateCheckBoxValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
                                '<span class="customecheckmark"></span></label>';
                    }

                    return cellHtml;
                };


                var urlRender
                        = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                            var element = $(defaulthtml);
                            element.attr("onclick", "openURLInTab('" + value + "')");
                            element.addClass("visionSearchUrlLink");
                            return element[0].outerHTML;

                        };

                var referenceurlRender
                        = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                            var textType = rowData['TYPE'];

                            if (textType != '' && textType != null && textType != undefined
                                    && textType.toUppercase == 'REF') {
                                var element = $(defaulthtml);
                                element.attr("onclick", "openURLInTab('" + value + "')");
                                element.addClass("visionSearchUrlLink");
                                return element[0].outerHTML;
                            }


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
                var FioriProgressBarRenderer
                        = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                            var status = rowData['STATUS'];
                            if (status && status.toLowerCase().includes("accepted")) {
                                return  "<div class='jqx-grid-cell-middle-align' style='font-weight: 600; margin-top: 10px'>"
                                        + "<div class='gridCellProgress'><div style='height: 12px' class='progress rounded-pill'>"
                                        + "<div role='progressbar' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100' style='width: 100%' class='progress-bar rounded-pill bg-gradient green'></div>"
                                        + "</div><div class='gridCellProgressCrossIcon'><img style='cursor:pointer;' src='images/FioriFinish.png' width=20px;/></div></div></div>";
                            } else if (status && status.toLowerCase().includes("rejected") || status.toLowerCase().includes("deleted")) {
                                return  "<div class='jqx-grid-cell-middle-align' style='font-weight: 600; margin-top: 10px'>"
                                        + "<div class='gridCellProgress'><div style='height: 12px' class='progress rounded-pill'>"
                                        + "<div role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style='width: 70%' class='progress-bar rounded-pill bg-gradient red'></div>"
                                        + "</div><div class='gridCellProgressCrossIcon'><img style='cursor:pointer;' src='images/crossRed.png' width=20px;/></div></div></div>";
                            } else {
                                return  "<div class='jqx-grid-cell-middle-align' style='font-weight: 600; margin-top: 10px'>"
                                        + "<div class='gridCellProgress'><div style='height: 12px' class='progress rounded-pill'>"
                                        + "<div role='progressbar' aria-valuenow='66' aria-valuemin='0' aria-valuemax='100' style='width: 40%' class='progress-bar rounded-pill bg-gradient orange'></div>"
                                        + "</div><div class='gridCellProgressCrossIcon'><img style='cursor:pointer;' src='images/FioriInfo.png' width=20px;/></div></div></div>";
                            }

                        };
                var descrenderListWise = function (row, columnfield, value, defaulthtml, columnproperties) {
//                     
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
                            var divClass = "jqx-grid-cell-left-align";
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
//                   return '<div style="'+uuu_columnstyle+'">' + value + '</div>';
//                    return '<div class="jqx-grid-cell-left-align" style="' + uuu_columnstyle + '">' + value + '</div>';
                    return '<div class="' + divClass + '" style="' + uuu_columnstyle + '">' + value + '</div>';
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

                var attachmentImageRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {

                    if (value != "" && value != null)
                    {
                        if (labelObject['Click to view the attachment'] != null && labelObject['Click to view the attachment'] != '' && labelObject['Click to view the attachment'] != undefined) {
                            return  "<img title='" + labelObject['Click to view the attachment'] != null ? labelObject['Click to view the attachment'] : 'Click to view the attachment' + "' style='cursor:pointer;' onclick=viewAttachment('" + gridResultObj['gridId'] + "'," + row + ",'" + tableName + "')  src='" + value + "' class='imageStyle visionTemplete'  id='dtlul_" + row + "' >";
                        } else
                        {
                            return  "<img title='Click to view the attachment' style='cursor:pointer;' onclick=viewAttachment('" + gridResultObj['gridId'] + "'," + row + ",'" + tableName + "')  src='" + value + "' class='imageStyle visionTemplete'  id='dtlul_" + row + "' >";
                        }


                    } else {
                        return "<div class='visionCoFileImage'>"
                                + "<input name='colFileImage' type='file' id ='visionColFileId' style ='display:none'/>"
                                + "<img src='images/attach_pin_icon_blue.png' onclick=showgridBrowseButton('" + gridResultObj['gridId'] + "') style='cursor:pointer;margin-left: 30%;'/>"
                                + "</div>";

                    }
                };

                var editable = gridPropObj.editable;
                var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                    var cellValue = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', row, columnfield);
                    var viewType = "GRID-VIEW";
                    var ddwData = gridResultObj.dropDowndData;
                    var ddwObj = ddwData[columnfield];
                    var dependencyparams = ddwObj.dependencyparams;
                    if (columnInitParamObj != null && columnInitParamObj != '' && columnInitParamObj != undefined)
                    {
                        var columnParams = columnInitParamObj[columnfield];
                        if (columnParams != null && columnParams != '' && columnParams != undefined) {
                            var editableFlag = columnParams['uuu_editable'];
                            var hiddenType = $('#' + gridResultObj['gridId']).jqxGrid('getcellvalue', row, gridResultObj['gridId'] + "_HIDDEN");
                        }
                    }
                    if (editable) {
                        if (editableFlag != null && editableFlag != '' && editableFlag == "Y")
                        {
                            $("#" + gridResultObj['gridId']).jqxGrid('setcolumnproperty', columnfield, 'editable', true);
                        }

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
                    if (gridResultObj['statuscolorflag'] === 'Y' && gridPropObj.columns[i].datafield === "STATUS") {
                        gridPropObj.columns[i].cellsrenderer = function (row, column, value) {
                            if (value && value.toLowerCase().includes("accepted")) {
                                return '<div class="jqx-grid-cell-middle-align" style="color: #90EE90; font-weight: 600; margin-top: 10px;">' + value + '</div>';
                            } else if (value && value.toLowerCase().includes("rejected") || value.toLowerCase().includes("deleted")) {
                                return '<div class="jqx-grid-cell-middle-align" style="color: #FF7F7F; font-weight: 600; margin-top: 10px;">' + value + '</div>';
                            } else {
                                return '<div class="jqx-grid-cell-middle-align" style="color: #cf9a38; font-weight: 600; margin-top: 10px;">' + value + '</div>';
                            }
                        };
                    }
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

                if (gridInitParamObj != null
                        && gridInitParamObj['uuu_FilterPopupNoData'] != 'Y') {
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
                }
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
                                var filter_columns_flag = ($("#" + gridResultObj['gridId'] + "_filter_columns_flag").val() != null
                                        ? $("#" + gridResultObj['gridId'] + "_filter_columns_flag").val() : "")
                                if ((gridInitParamObj != null
                                        && !jQuery.isEmptyObject(gridInitParamObj)
                                        && gridInitParamObj['uuu_FilterGridFormPopup'] == 'Y') || (gridInitParamObj != null
                                        && filter_columns_flag != null && filter_columns_flag != '' && filter_columns_flag != undefined
                                        && filter_columns_flag == 'Y')) {//
                                    data.paramArray = ($("#" + gridResultObj['gridId'] + "_filter_columns").val() != null
                                            ? $("#" + gridResultObj['gridId'] + "_filter_columns").val() : "");
                                }
                                if (gridInitParamObj != null
                                        && gridInitParamObj['uuu_FilterPopupNoData'] == 'Y'
                                        && $("#" + gridResultObj['gridId'] + "_filter_columns").val() != null
                                        && $("#" + gridResultObj['gridId'] + "_filter_columns").val() != "") {
                                    data['gridId'] = gridResultObj['gridId'];
                                    data['colsArray'] = JSON.stringify(gridResultObj['colsArray']);
                                    data['tableName'] = gridResultObj['tableName'];
                                    data['paramArray'] = data.paramArray;
                                    data['gridInitParamObj'] = gridInitParamObj;
                                    data['columnInitParamObj'] = JSON.stringify(columnInitParamObj),
                                            data['processClassAndMethod'] = $("#processClassAndMethod").val()
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
                                $("#basketNameValId").text(gridResultObj['gridName']);
//                                changeThemeVisualization();
                                try {
                                    if (gridInitParamObj != null
                                            && !jQuery.isEmptyObject(gridInitParamObj)
                                            && gridInitParamObj['uuu_GridPagesCountFlag'] == 'Y')
                                    {
                                        if (data[0] != null) {
                                            showgridPagesCount(gridResultObj['gridId'], 'Y', data[0].TotalRows)
                                        }
                                        if (gridInitParamObj != null
                                                && gridInitParamObj['uuu_FilterPopupNoData'] == 'Y'
                                                && $("#" + gridResultObj['gridId'] + "_filter_columns").val() != null
                                                && $("#" + gridResultObj['gridId'] + "_filter_columns").val() != "") {
                                            if (gridInitParamObj != null
                                                    && gridInitParamObj['uuu_AISRCreationFlag'] == 'Y') {
                                                getAILenServiceCreate(data, gridResultObj);
                                            }

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
//                   gridPropObj.groupable=true;

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
                $('#' + gridResultObj['gridId']).jqxGrid('destroy');
                if (fioriThemeCheck) {
                    $('#' + gridResultObj['gridId']).jqxGrid({
                        ...gridPropObj,
                        showfilterrow: false,
                        columnsheight: 35,

                    });
                } else {
                    $('#' + gridResultObj['gridId']).jqxGrid(gridPropObj);
                }
//                $('#dxpHomeContent').hide();
                try {
                    var gridColumnObj = gridPropObj.columns;
                    if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                        $("#" + gridResultObj['gridId']).jqxGrid('beginupdate');
                        for (var index = 0; index < gridColumnObj.length; index++) {
                            try {
                                var datacolName = gridColumnObj[index].datafield;
                                var cellalignColParamObj = columnInitParamObj[datacolName];
                                if (cellalignColParamObj != null && !jQuery.isEmptyObject(cellalignColParamObj)) {
                                    var cellaligndata = cellalignColParamObj['uuu_Colcellsalign'];
                                    if (cellaligndata != null && cellaligndata != undefined && cellaligndata != '') {
                                        $("#" + gridResultObj['gridId']).jqxGrid('setcolumnproperty', datacolName, 'align', cellaligndata);
                                        $("#" + gridResultObj['gridId']).jqxGrid('setcolumnproperty', datacolName, 'cellsalign', cellaligndata);
                                    }
                                }
                            } catch (e) {

                            }


                        }
                        $("#" + gridResultObj['gridId']).jqxGrid('endupdate');

                    }

                } catch (e) {
                }



                $("#" + gridResultObj['gridId']).on('cellbeginedit', function (event)
                {
                    $("#" + gridResultObj['gridId']).attr('data-last-ed-field', event.args.datafield);
                    $("#" + gridResultObj['gridId']).attr('data-last-ed-row', event.args.rowindex);
                    // event arguments.
                    var args = event.args;
                    // column data field.
                    var dataField = event.args.datafield;
                    // row's bound index.
                    var rowBoundIndex = event.args.rowindex;


                    $("#" + gridResultObj['gridId'] + "_Update").show();
                    $("#" + gridResultObj['gridId']).jqxGrid('selectrow', rowBoundIndex);
                });
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
                            if (navigationDataField != null && navigationDataField != '' &&
                                    navigationDataField != undefined && event.args.column.datafield == navigationDataField && navigationDataField == 'MOCR_NUMBER')
                            {
                                var mocrNo = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', event.args.rowindex, event.args.column.datafield);
                                var treeId = gridInitParamObj['uuu_mocrTreeId'];
                                getMocrCreateAssetTreeobject(treeId, "dxpMOCRPendingTreeDiv", mocrNo, dataField, $('#' + gridResultObj['gridId']).jqxGrid('getrowdata', event.args.rowindex), gridResultObj['gridId']);
                                //navigateToMOCRForm(event.args.column.datafield, $('#' + gridResultObj['gridId']).jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId'], "", event.args.rowindex, "N", "", mocrNo);
                            } else {
                                var mocrBatchFlag = gridInitParamObj['uuu_mocrGridBatchFlag'];
                                if (mocrBatchFlag == 'true') {
                                    var batchNumber = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', event.args.rowindex, event.args.column.datafield);
                                    $("#mocrBatchId").remove();
                                    $("body").append("<input type='hidden' id='mocrBatchId' value='" + batchNumber + "'/>");
                                }
                                navigateToForm(event.args.column.datafield, $('#' + gridResultObj['gridId']).jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId'], event.args.rowindex);
                            }
                        }
                    }
                    var fillDownColumns = gridInitParamObj['fillDownColumns'];
                    if (fillDownColumns != "" && fillDownColumns != undefined && fillDownColumns != "null")
                    {
                        var columnindex = args.columnindex;
                        var dataField = args.datafield;
                        var value = args.value;
                        var currentSelectFillDownData = "" + gridResultObj['gridId'] + ":" + rowBoundIndex + ":" + dataField + ":" + columnindex + ":" + fillDownColumns;
                        console.log("currentSelectFillDownData:::" + currentSelectFillDownData);
                        $("#currentSelectFillDownData").val(currentSelectFillDownData);
                        var uuu_fillDownDependencyColumns = gridInitParamObj['uuu_fillDownDependencyColumns'];
                        if (uuu_fillDownDependencyColumns != null && uuu_fillDownDependencyColumns != '') {
                            $("#currentSelectFillDownDependencyColumns").val(uuu_fillDownDependencyColumns);
                        }
                    }
                });
                $("#dxpContent").addClass('dxpContentAccPageClass');
                $(".dxpPageContent").css("overflow", "hidden", "important");
//                $("#searchgrid").on("cellclick", function (event)
//                {
//                    var args = event.args;
//                    var rowBoundIndex = args.rowindex;
//                    var columnindex = args.columnindex;
//                    var dataField = args.datafield;
//                    navigateToForm(event.args.column.datafield, $('#' + gridResultObj['gridId']).jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId'], event.args.rowindex);
//                });
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
//                    if (fioriThemeCheck) {
//                        showGridSideFormResults(JSON.stringify(event.args.row), "INFO");
//                    }

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
                $("#firorInput_" + gridResultObj['gridId']).unbind("keyup").on("keyup", function (event) {
                    if (event.key === "Enter" || event.keyCode === 13) {
                        var filterValue = $(this).val().trim();
                        if (filterValue) {
                            addFilter(gridResultObj, filterValue);
                        } else {
                            $('#' + gridResultObj['gridId']).jqxGrid("clearfilters");
                        }
                    }
                });


                //  
                alert("604 Grid");
                $(window).resize(function () {
                }).resize();
//                $('#' + gridResultObj['gridId']).parent().css("padding-top", "3px", "important");
//                $('#' + gridResultObj['gridId']).parent().css("padding-bottom", "3px", "important");
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
//    stopLoader();

}// end of function gridConfig(-)
function getFilterGridForm(selectedGridId, selectedTabId, selectedGridIndex) {

    $("#importfiltergridcriteria").html("");
    $.ajax({
        type: "post",
        traditional: true,
        // dataType: 'json',
        url: "getFilterGridForm",
        cache: false,
        data: {
            selectedGridId: selectedGridId,
            selectedTabId: selectedTabId,
            selectedGridIndex: selectedGridIndex

        },
        success: function (response) {
            if (response != null && response != '') {
                $("#" + selectedGridId + "_FILTER_FORM").html(response['result']);
//                $("#importsearchcriteria").html(response['importButtonDiv']);
                $("#importfiltergridcriteria").html(response['importButtonDiv']);
                var jsDateItems = response['dateObjArray'];
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
                                            });
                                } else {
                                }
                            });
                }

                selectedTitle = "";
                selectedTitleValue = "";
                var lovColumns = response['lovColumns'];
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
function getEnterKeyFilterSearch(event, selectedGridId, selectedGridIndex, selectedTabId) {
    if (event.which == 13) {
        showLoader();
        getFilterGridResults(selectedGridId, selectedGridIndex, selectedTabId);
        stopLoader();
    }
}
function getFilterGridResults(selectedGridId, selectedGridIndex, selectedTabId, selectedColumn, isImport) {
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
                    } else if (type != null && type == 'checkbox') {
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
                    gridConfig(response, selectedGridIndex, paramArray);
                },
                error: function (e) {
                    sessionTimeout(e);
                }// Error function in Ajax
            }); // end ajax call
        } else {
            var dialogSplitMessage = dialogSplitIconText("Please provide at least one value to Search.", "Y");
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
    }
}
function clearFilterGridSearch(selectedGridId) {
    $("#" + selectedGridId + "_filter_columns").remove();
    $("#" + selectedGridId + "_FILTER_FORM_TABLE input[type=checkbox]").prop('checked', false);
    $("#" + selectedGridId + "_FILTER_FORM_TABLE input[type=text]").val('');
    $("#" + selectedGridId + "_FILTER_FORM_TABLE input[type=text]").removeAttr('disabled');
    $("#" + selectedGridId + "_FILTER_FORM_TABLE :input").each(function () {
        var textid = $(this).attr("id");
        var type = $(this).attr("type");
        if (type == 'hidden') {
            $("#" + textid + "_LABELS").html("");
            $("#" + textid + "_LABELS").html($(this).attr("data-defaultlabel"));//defaultlabel
            $("#" + textid).val("");
        } else {
            if (textid != null && textid.indexOf("_jqxComboBox") > -1) {
                var comboBoxId = textid.replace("_jqxComboBox", "");
                $("#" + comboBoxId).jqxComboBox('clearSelection');
            } else {
                $("#" + textid + "_MIN").hide();
                $("#" + textid + "_MIN").css("display", "none");
                $("#" + textid + "_MAX").hide();
                $(".filtergridtd_range").hide();
                $(".filtergridtd_range").css("display", "none");
                $("#" + textid + "_MAX").css("display", "none");
                $("#" + textid + "_TO").hide();
            }

        }
    });
    var i = 0;
    $('select').each(function () {
        $(this).attr('data-staged', 'N');
        $(".fs-label").html("");
        $(".fs-option").removeClass('selected');
        $(".fs-label").html("Select");
        $("#" + "operator" + selectedGridId + i).prop('selectedIndex', 0);
        i++;
    });
    stopLoader();
}
function showCollapse(id)
{
    var value = id;
    var icons = $("#accordion").accordion("option", "icons");
    var operation = "update";
    var tableName = $("#SelectedCurrentTabId").val();
    if (tableName != null & tableName != undefined && tableName != "") {
        var dataView = $("#" + tableName + "_Update").attr("data-view");
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

        // showLoader();//1
        var lasteditedfield = $('#' + tableName).attr('data-last-ed-field');
        var lasteditedrow = $('#' + tableName).attr('data-last-ed-row');
        try {
            if ($('#' + tableName).find('.visionDropdownGrid').length > 0 && $('#' + tableName).find('.visionDropdownGrid').find('input[type="text"]').length > 0) {//03-01-2024 som   line 1198
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
//                                    changeflag = false;
//                                    tabSwitchflag = false;
                                    var jsonArray = [];
                                    jsonArray.push(jsonOBJ);
                                    jsonOBJ.basicData = basicData;
                                    UpdateOrDelete(JSON.stringify(jsonArray), dataView, tableName, operation);
                                }
                            }, {
                                text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                                click: function () {

                                    $(this).html("");
                                    $(this).dialog("close");
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
        } else if (dataView == "TABLE-VIEW") {
            selectedDataArray = gridOperation(operation, tableName);
            if (selectedDataArray != 0) {
                matchedCount = 1;
            }
            if (matchedCount > 0) {
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
//                                    changeflag = false;
//                                    tabSwitchflag = false;
                                endoperation(selectedDataArray, tableName, dataView, operation, basicData);
                            }
                        }, {
                            text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                            click: function () {

                                $(this).html("");
                                $(this).dialog("close");
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

            } else {
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
//                                    changeflag = false;
//                                    tabSwitchflag = false;
                                endoperation(selectedDataArray, tableName, dataView, operation, basicData);
                            }
                        }, {
                            text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                            click: function () {

                                $(this).html("");
                                $(this).dialog("close");
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


        }//if 
    }



    if (value === 'expandAll')
    {
        $('#expandAll').css("display", "none");
        $('#collapseAll').css("display", "inline-block");
        $("#accordion").children(".visionRegisterMaterialTableTab").attr("aria-hidden", "false");
        $("#accordion").children(".visionRegisterMaterialTableTab").css("display", "block");
        $("#accordion").children("h3").attr("aria-selected", "true");
        $("#accordion").children("h3").attr("aria-expanded", "true");
        $("#accordion").children("h3").attr("tabindex", "0");
        $("#accordion").children("h3").removeClass("ui-accordion-header-collapsed ui-corner-all ui-state-focus");
        $("#accordion").children("h3").addClass("ui-accordion-header-active ui-state-active ui-state-hover");


        var userIds = [];
        $('.ui-accordion-header').each(function (index, element) {
            var onclickFunction = $(this).attr('onclick');
            userIds.push(onclickFunction);
        });

        for (var i = 0; i < userIds.length; i++)
        {
            eval(userIds[i]);
        }
        $('.ui-accordion-header').removeClass('ui-corner-all').addClass('ui-accordion-header-active ui-state-active ui-corner-top').attr({
            'aria-selected': 'true',
            'tabindex': '0'
        });
        $('.ui-accordion-header-icon').addClass(icons.activeHeader);
//        $('.ui-accordion-header-icon').removeClass(icons.header).addClass(icons.headerSelected);
        $('.ui-accordion-content').addClass('ui-accordion-content-active').attr({
            'aria-expanded': 'true',
            'aria-hidden': 'false'
        }).show();
        $(".ui-accordion-header").addClass("ui-state-disabled");

    } else
    {
        $("#SelectedCurrentTabId").val();
        $('#collapseAll').css("display", "none");
        $("#accordion").children(".visionRegisterMaterialTableTab").attr("aria-hidden", "true");
        $("#accordion").children(".visionRegisterMaterialTableTab").css("display", "none");
        $("#accordion").children("h3").attr("aria-selected", "false");
        $("#accordion").children("h3").attr("aria-expanded", "false");
        $("#accordion").children("h3").attr("tabindex", "-1");
        $("#accordion").children("h3").removeClass("ui-accordion-header-active ui-state-active ui-state-hover");
        $("#accordion").children("h3").addClass("ui-accordion-header-collapsed ui-corner-all ui-state-focus");
        $('#expandAll').css("display", "inline-block");
//        $('.ui-accordion-header').removeClass('ui-accordion-header-active ui-state-active ui-corner-top').addClass('ui-corner-all').attr({
//            'aria-selected': 'false',
//            'tabindex': '-1'  
//        });
//        $('.ui-accordion-header-icon').removeClass(icons.activeHeader);
//        $('.ui-accordion-content').removeClass('ui-accordion-content-active').attr({
//            'aria-expanded': 'false',
//            'aria-hidden': 'true'
//        }).hide();
        $(".ui-accordion-header").removeClass("ui-state-disabled");
    }


//    }
// alert(value);
}
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
$(document).ready(function () {
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
});
function newDxpClassCreation(className, typedValue, abbrivation, content, conceptId, unspscCode, recordGroup) {
    showLoader();
    $('#firstDxpSplitter').jqxSplitter({width: '100%', height: '635', orientation: 'vertical', splitBarSize: 0, panels: [{size: 30}]});
    $('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
    $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 1450}]});
    $("#fourthDxpSplitter").html('');
    $('.searchFirstResultsList').hide();
    $('.searchResultsList').hide();
    $('.searchDXPCreate').hide();
    $('.decendingFirstOrder').hide();
    var itemsObj = {};
    var data = {};
    var linkedColumns = "CONTENT,TERM,CLASS,CLASS_TERM,DEFINITION,uid,UID,HIDDEN_GRID_ID";
    if (linkedColumns != null && linkedColumns != '') {
        for (var key in data) {
            if (linkedColumns.lastIndexOf(key) > -1) {
                var value = data[key];
                value = value.replace(/\s/gi, "_");
                value = value.replace(/[#]/g, "_");
                itemsObj[key] = value;
            }
        }
    }
    var gridId = '';
    var currentrole = sessionStorage.getItem("currentRole");
    var currentDomain = $("#currentDomain").val();
    if (currentDomain != null && currentDomain != '' && currentDomain != undefined
            && currentDomain == 'PRODUCT') {
        gridId = 'MM_SAP_NEW_REG';
    } else if (currentDomain != null && currentDomain != '' && currentDomain != undefined
            && currentDomain == 'SERVICE') {
        gridId = 'SM_SAP_NEW_REG';
    }
    itemsObj.currentrole = currentrole;
    itemsObj.linkedColumns = linkedColumns;
    itemsObj.CLASS = className;
    itemsObj.CLASS_TERM = className;
    itemsObj.typedValue = typedValue;
    itemsObj.gridId = gridId;
    itemsObj.ABBREVIATION = abbrivation;
    itemsObj.CONTENT = content;
    itemsObj.CONCEPT_ID = conceptId;
    itemsObj.UNSPSC_CODE = unspscCode;
    itemsObj.RECORD_GROUP = recordGroup;
//    itemsObj.panelId = "MM_PANEL_MGR_PENDING_REG";
    var items = JSON.stringify(itemsObj);
    $("#itemsstring").val(items);
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "itemRegisterForm",
        cache: false,
        data: {
            items: items,
            data: JSON.stringify(data),
            fioriThemeFlag: fioriThemeCheck,
        },
        success: function (response) {
            stopLoader();
            var form = response['formStr'];
            if (form != null && form != undefined && form != '') {
                $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 600}]});
                $("#thirdDxpSplitter").show();
                $("#thirdDxpSplitter").jqxSplitter('collapse');
                $("#fourthDxpSplitter").show();
                $("#fourthDxpSplitter").html(form);
                $("#treeGridDiv").show();
                $("#treeGridDiv").html(form);
                var recordVal = $("#RECORD_GROUP").val()
                if (recordVal == '' || recordVal == undefined || recordVal == null) {
                    $("#RECORD_GROUP").val("789654");
                }
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
function registerClickFunction() {
//    showLoader();
    $("#Register").click(function () {
        showLoader();
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
            var roleId = '';
            var currentDomain = $("#currentDomain").val();
            if (currentDomain != null && currentDomain != '' && currentDomain != undefined
                    && currentDomain == 'PRODUCT') {
                roleId = 'MM_MANAGER';
            } else if (currentDomain != null && currentDomain != '' && currentDomain != undefined
                    && currentDomain == 'SERVICE') {
                roleId = 'SM_MANAGER';
            } else if (currentDomain != null && currentDomain != '' && currentDomain != undefined
                    && currentDomain == 'VENDOR') {
                roleId = 'VM_MANAGER';
            }
            var roleStartsWith = roleId.substring(0, 2);
            var duplCheck = $("#Register").attr('data-dupl-flag');
            var dataReturnReason = $("#Register").attr('data-returnreason');
            $("#mat_creation_form_table :input").each(function () {
                var textid = $(this).attr("id");
                var displayAttr = $("#" + textid).attr("display");
                //  console.log(textid+"::::displayAttr:::"+displayAttr);
                var type = $(this).attr("type");
                var textval = $(this).val();
                if (type != 'hidden') {
//                if ((type != null && type != 'hidden') || type == null || type == '' || type == undefined || type == 'undefined' ) {
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

                //var registerValidateColumn = basicData['registerValidateColumn'];
                if ((roleStartsWith == "VM" || roleStartsWith == "CM") && duplCheck != null && duplCheck != ''
                        && duplCheck == 'Y') {
                    var vmDuplOnSubmit = "";
                    vmDuplOnSubmit = $("#vmDuplOnSubmit").val();

                    if (vmDuplOnSubmit == null) {
                        vmDuplOnSubmit = "";

                    }

                    // alert(vmDuplOnSubmit);

                    if (true) {
//            if (vmDuplOnSubmit == 'Y') {

//alert(vmDuplOnSubmit);
                        var req = {};
                        req.type = 'POST';
                        req.traditional = true;
                        req.dataType = 'html';

                        req.url = 'vmCmRegDuplicateCheck';
                        req.data = {
                            basicData: JSON.stringify(basicData),
//                    vendorName: $("#SUPPLIER_NAME").val().toUpperCase()
                        };

                        req.success = function (result) {
                            stopLoader();
                            var dataObj = JSON.parse(result);

                            if (!dataObj['flag']) {
                                registerCheckValidation(basicData);
                            } else {

                                $("#dialog2").html("");
                                $("#dialog2").html(dataObj['message']);
                                $("#dialog2").dialog({resizable: false,
                                    title: (labelObject['Duplicates Found'] != null ? labelObject['Duplicates Found'] : 'Duplicates Found'),
                                    opacity: 5.5,
                                    zIndex: 10000,
                                    width: '800',
                                    fluid: true,
                                    buttons: [{
                                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                            click: function () {
                                                var vmDuplPopUp = "";
                                                vmDuplPopUp = $("#vmDuplPopUp").val();
                                                if (vmDuplPopUp == null) {
                                                    vmDuplPopUp = "";

                                                }

                                                var role = $("#rolehid").val();
                                                if (dataReturnReason != null && dataReturnReason != '') {
//                                            try {
//                                                if (controlInd != null && controlInd != '') {
//                                                    controlInd = controlInd.toUpperCase();
//                                                }
//
//                                            } catch (e) {
//
//                                            }
//                                            console.log(controlInd + ":::1531:::::::::::::::");

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


                                                    } else if (rejectType != null && rejectType != '')
                                                    {
                                                        response = "";

                                                        $("#textReason").html("");

                                                        response += "<div id='textReason'>";
                                                        response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                                                        response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";


                                                        $("#dialog").html(response);
                                                    }

                                                    $("#dialog").dialog({resizable: false,
                                                        title: msgTitle,
                                                        modal: true,
                                                        height: 'auto',
                                                        minWidth: 300,
                                                        maxWidth: 'auto',
                                                        fluid: true,
                                                        buttons: [{
                                                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                                                click: function () {
                                                                    stopLoader();
                                                                    var retReasonText = "";
                                                                    var returnReasonData = "";
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
                                                                    } else if (rejectType != null && rejectType != '')
                                                                    {
                                                                        var textBoxData = $("#reasonId").val();
                                                                        retReasonText = textBoxData;
                                                                    }
                                                                    ////////////////////////////////////alert("rettext:::"+retReasonText);
                                                                    if (!retReasonText)
                                                                    {

                                                                        $("#dailog_error_id").show();
                                                                    } else if (retReasonText != null)
                                                                    {
                                                                        $("#dailog_error_id").hide();
                                                                        $(this).html("");
                                                                        $(this).dialog("close");
                                                                        $(this).dialog("destroy");
                                                                        var commentVal = $("#rejColumn").val();
                                                                        var rejColumn = "rejColumn";
                                                                        var rejectComment = "rejectComment";
                                                                        var ACCEPT_COMMENT = "ACCEPT_COMMENT";

                                                                        basicData[rejColumn] = commentVal;
                                                                        basicData[rejectComment] = retReasonText;
                                                                        basicData[ACCEPT_COMMENT] = retReasonText;
                                                                        registerCheckValidation(basicData);

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
                                                $(this).dialog("close");

                                            }},
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
                                        $(this).closest(".ui-dialog").addClass("visionFormDuplicateDialog");
                                        $(".visionHeaderMain").css("z-index", "999");
                                        $(".visionFooterMain").css("z-index", "999");
                                    },
                                    beforeClose: function (event, ui)
                                    {
                                        $(".visionHeaderMain").css("z-index", "99999");
                                        $(".visionFooterMain").css("z-index", "99999");
                                    },
                                    close: function () {
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");

                                    }


                                });
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
                        req.error = function (e) {
                            sessionTimeout(e);
                        };

                        $.ajax(req);

                    } else {
                        registerCheckValidation(basicData);
                    }

                } else
                {
                    registerCheckValidation(basicData);
                    stopLoader();
                }



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
}
function registerValidation1() {

    alert("registerValidation");
    var result = [];
    var validationObj = {};
    $("#mat_creation_form_table th :input:not(:hidden)").each(function () {

        var textid = $(this).attr("id");
        //  alert("textid:::"+textid);
        var displayAttr = $("#" + textid).attr("display");

        var type = $(this).attr("type");
        var textval = $(this).val();
        if (textval != null && textval != '') {
            textval = textval.trim();
        }
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
        var mandatory = $("#" + textid).attr("data-mandatory");
        if (textid != null && textval == '' && (mandatory != null && mandatory == 'M')) {
//        if (textid != null && textval == '' && (textid != 'SITE_VISIT' && textid != 'LIFNR' && textid != 'RECORD_NO' && textid != 'ANID' && textid != 'SIPM_ID' && textid != 'ERP_COMMENT' && textid != 'REQUEST_COMMENT' && textid != 'ACCEPT_COMMENT' && textid != 'APPROVER_NAME' && textid != 'STEWARD')) {

            if (textid == "REMARK_TAX")
                validationObj[textid] = 'Mention Exact Nature of Service Provided by Vendor';

            else if (textid == "ERP_NO")
            {
                var recordType = $('#RECORD_TYPE').val();
                if (recordType == 'ZROH' || recordType == 'ZFRT' || recordType == 'ZHLB' || recordType == 'ZFUE' || recordType == 'ZPAC' || recordType == 'ZUNB')
                {
                    validationObj[textid] = 'Please enter SAP No';
                } else if (recordType == 'ZSPA' || recordType == 'ZCON')
                {
                    $("#" + textid).val("");
                    $("#" + textid).attr("data-mandatory", "O");
                    $("#" + textid).attr("data-inputmandatory", "O");

                }
            } else
            {
                validationObj[textid] = 'Should not be Blank';
            }
        }
        if (Object.keys(validationObj).length == 0 && textid != null && textval != '') {
            if (textval != null && textval != '') {
                textval = textval.trim();
            }

            var resultFlag = true;
            var regex = $(this).attr("data-regex");
//            alert("regex:::" + regex);
            regex = (regex == "null") ? null : regex.replace(/\\\\/g, "\\");
//            alert("regex:::" + regex);
            if (regex != null && regex != '') {
                var patt = new RegExp(regex);
                resultFlag = patt.test(textval);
            }
            if (!resultFlag) {

                validationObj[textid] = $("#" + textid).attr("data-regex-msg");
                //result.push(validationObj);
            }
        }


    });
//    alert(Object.keys(validationObj).length);
    return validationObj;
}
function registerCheckValidation1(basicData) {
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var registerValidateColumn = basicData['registerValidateColumn'];
    alert("registerValidateColumn:::" + registerValidateColumn);
    if (registerValidateColumn != null && registerValidateColumn != '') {
        var conf_mesg = $("#Register").attr('data-conf');
        var success_msg = $("#Register").attr('data-success-conf');
        basicData['REG_CONF_MESG'] = conf_mesg;
        basicData['REG_SUCCESS_MSG'] = success_msg;
        $.ajax({
            type: "post",
            url: "registerValidation",
            cache: false,
            data: {'basicData': JSON.stringify(basicData)
            },
            traditional: true,
            dataType: 'html',
            success: function (response) {
                stopLoader();
                var jsonObj = JSON.parse(response);
                var message = jsonObj['message'];
                var flag = jsonObj['validateFlag'];

                if (!flag) {
                    var dialogSplitMessage = dialogSplitIconText(message, flag);
                    $("#dialogsucess").html(dialogSplitMessage);
                    var dailogProps = {};
                    dailogProps.title = (labelObject['Message'] != null ? labelObject['Message'] : 'Message');
                    dailogProps.modal = true;
                    var messagecount = message.length;
                    if (messagecount >= 600)
                    {
                        dailogProps.height = 300;
                        dailogProps.width = 400;
                    } else
                    {
                        dailogProps.height = "auto";
                        dailogProps.width = "auto";
                    }
                    dailogProps.buttons = [];
                    dailogProps.buttons.push({
                        text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            registration();
                        }
                    }, {
                        text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }
                    });
                    dailogProps.fluid = true;
                    dailogProps.open = function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                        $(this).closest(".ui-dialog").addClass("visionFormDataDialogSuccess");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    };
                    dailogProps.beforeClose = function () {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    };
                    $("#dialogsucess").dialog(dailogProps);
                } else {
                    registration();
                }
            },
            error: function (e) {
                sessionTimeout(e);
            }
        });
    } else {
        registration();
    }
}
function registration1() {
    showLoader();
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var roleId = $("#rolehid").val();
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
    var stripValue = $("#stripValue").val();
    if (stripValue == null || stripValue != undefined || stripValue == '') {
        stripValue = "CONCEPT_ID,#;";
        $("#stripValue").val(stripValue);
    }
    var stripValueObjArray = [];
    if (stripValue != null) {
        var stripValObj = stripValue.split(";");
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

    }
    basicData['stripValue'] = stripValueObjArray;
    basicData['imageTable'] = $("#imageTable").val();
    basicData['imageTableColumn'] = $("#imageTableColumn").val();
    basicData['imageColumn'] = $("#imageColumn").val();
//    basicData['CONCEPT_ID'] = $("#classConceptId").val();
    basicData['linkedColumns'] = $("#linkedColumns").val();
    var panelId = "";
    var currentrole = sessionStorage.getItem("currentRole");
    var currentDomain = $("#currentDomain").val();
    var vendorOnBoardFlag = $("#vendorOnBoardFlag").val();
//    if (currentDomain != null && currentDomain != '' && currentDomain != undefined
//            && currentDomain == 'PRODUCT') {
//        panelId = "MM_PANEL_MGR_PENDING_REG";
//        basicData['panelId'] = panelId;
//    } else 
    if (currentrole != null && currentrole != '' && currentrole != undefined
            && currentrole == 'MM_REQUESTOR') {
        var gridId = "MM_PENDING_REG";
        panelId = "MM_PANEL_REQ_PENDING_REG";
    } else if (currentrole != null && currentrole != '' && currentrole != undefined
            && currentrole == 'MM_APPROVER') {
        var gridId = "MM_PENDING_APP_REG";
        panelId = "MM_PANEL_APP_PENDING_REG";
    } else if (currentrole != null && currentrole != '' && currentrole != undefined
            && currentrole == 'MM_MANAGER') {
        var gridId = "MM_PENDING_MGR_REG";
        panelId = "MM_PANEL_MGR_PENDING_REG";
    }
    basicData['panelId'] = panelId;
    basicData['gridId'] = gridId;
    if (currentDomain != null && currentDomain != '' && currentDomain != undefined
            && currentDomain == 'SERVICE') {
        panelId = "SM_PANEL_MGR_PENDING_REG";
        basicData['panelId'] = panelId;
    } else if (currentDomain != null && currentDomain != '' && currentDomain != undefined
            && currentDomain == 'VENDOR') {
        panelId = 'VM_PANEL_MGR_NEW_REG';
        basicData['panelId'] = panelId;
        gridId = "VM_PENDING_REG_MGR";
        basicData['gridId'] = gridId;
    }
    basicData['controlType'] = 'Register';
    basicData['vendorOnBoardFlag'] = vendorOnBoardFlag;
    $.ajax({
        url: "registration",
        type: "post",
        traditional: true,
        dataType: 'html',
        cache: false,
        data: {
            basicData: JSON.stringify(basicData),
            basicIds: JSON.stringify(basicIds),
            panelId: basicData['panelId'],
            classconceptid: $("#CONCEPT_ID").val(),
            fioriThemeFlag: fioriThemeCheck,
        },
        success: function (result) {
            //   ////alert(result);
            stopLoader();
            $('.searchDXPCreate').show();
            $('.searchIconsList').show();
            $('.decendingOrder').show();
            $('.decendingOrder').show();
            $('.searchResultsList').show();
            $('.searchResultMaterialResults').show();
            $('#contentDXP_SEARCH_VIEW').show();
            $('#jqxScrollThumbhorizontalScrollBarDXP_SEARCH_VIEW').show();
            $('#pagerDXP_SEARCH_VIEW').show();
            secondPanelShowFlag = false;
            firstPanelShowFlag = true;
            $(".loaderwait").hide();
            if (result != null && result.indexOf("Failed") > -1 || result.indexOf("Exist") > -1) {
                var modalObj = {
                    title: 'Message',
                    body: result
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
                createModal("modalInfoDailogDiv", modalObj);
            } else {
                var jsonResponse = JSON.parse(result);
                var message = jsonResponse.MESSAGE;
                var messageFlag = jsonResponse.messageFlag;
                var recordNo = jsonResponse.RECORD_NO;
                var status = jsonResponse.O_STATUS;

                if (!messageFlag) {

                    var modalObj = {
                        title: 'Message',
                        body: message
                    };
                    createModal("dataDxpSplitterValue", modalObj);
                } else {
                    //mmFetchPropertiesTabData(recordProperties);
                    $("#RECORD_NO").val(recordNo);
                    var modalObj = {
                        title: 'Message',
                        body: message
                    };
                    var buttonArray = [
                        {
                            text: 'Ok',
                            click: function () {
//                                showLoader();
                                registerPanels(jsonResponse['basicdata'], jsonResponse['formData']);
//                                stopLoader();
                            },
                            isCloseButton: true,
//                            isDraggable:true
                        }
                    ];
                    $('.modal-content').draggable();
                    modalObj['buttons'] = buttonArray;
                    createModal("modalInfoDailogDiv", modalObj);
                }
                $('#register').attr("disabled", false);
                $("body").css({"pointer-events": "auto"});
            }
        },

        error: function (e) {// 
            sessionTimeout(e);
        }

    });

}
function registerPanels(itemsString, data) {
    showLoader();
    var linkedColumns = $('#linkedColumns').val();
    $("#dxpFormContent").html('');
    var formlinkedColumns = itemsString['linkedColumns'];
    if (formlinkedColumns != null && formlinkedColumns != undefined
            && formlinkedColumns != '' && formlinkedColumns != 'undefined') {
        itemsString['linkedColumns'] = formlinkedColumns;
        $('#linkedColumns').val(formlinkedColumns);
    } else if (linkedColumns != null && linkedColumns != undefined
            && linkedColumns != '' && linkedColumns != 'undefined') {
        itemsString['linkedColumns'] = linkedColumns;
    } else {
        itemsString['linkedColumns'] = "RECORD_NO,BUSSINESS_UNIT";
        $('#linkedColumns').val('RECORD_NO,BUSSINESS_UNIT');
    }

    itemsString['CONCEPT_ID'] = data['CONCEPT_ID']

    var itemsstring = JSON.stringify(itemsString);
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "formData",
        cache: false,
        data: {
            items: itemsstring,
            data: JSON.stringify(data)
        },
        success: function (response) {
            stopLoader();
            var form = response['formStr'];
            console.log("formData" + form);
            console.log("panellist" + panellist);

            try {
                var hrefColumn1 = response['hrefColumn'];
                if (hrefColumn1 != null
                        && hrefColumn1 != ''
                        && hrefColumn1 != undefined) {
                    var hrefColumn = hrefColumn1;
                }

            } catch (er) {

            }

            //$("#fourthDxpSplitter").html(form);
//            $("#dxpFormContent").html(form);
            var DuplCheckEnableflag = response['ssDuplCheckEnableFlag'];
            var panellist = response['panellist'];
            $("#ssDuplCheckEnableFlag").val(DuplCheckEnableflag);
            $("#hrefColumn").val(hrefColumn);
            $("#materialBasketId").html(itemsString['baskettype']);
            $("#materialBasketId").show();
            $("#currentGridId").val(itemsString['gridId']);
            let formDataObj = {};
            var currentSearchReqType = $("#currentSearchReqType").val();
            if (currentSearchReqType != null && currentSearchReqType != undefined && currentSearchReqType != '' && currentSearchReqType == 'M') {
                formDataObj.datafield = "SPEC_MODEL_NO";
            } else if (currentSearchReqType != null && currentSearchReqType != undefined && currentSearchReqType != '' && currentSearchReqType == 'V') {
                formDataObj.datafield = "VENDOR_ID";
            } else {
                formDataObj.datafield = "RECORD_NO";
            }
//            formDataObj.datafield = "RECORD_NO";

            formDataObj.data = data;
            formDataObj.itemsstring = itemsstring;
            formDataObj.redirectType = 'form';
            formDataObj.gridId = itemsString['gridId'];
            formDataObj.selectedTabId = '';
            formDataObj.selectingrowindex = itemsString['boundindex'];
            $('#dxpVisionFormRefreshDivSpanImg').attr('data-attr', JSON.stringify(formDataObj));
            $('#dxpVisionFormDataHidden').val(JSON.stringify(formDataObj));
            $('#accdiv').append(response['accForm'])
            $('.viewClassDiv').removeClass('active');
            $('.viewClassBasketDiv').removeClass('active');
            $('.viewGridDiv').removeClass('active');
            $('.viewGridBasketDiv').removeClass('active');
            $("#hintImageID").attr('onclick', 'productInnerPageGuideIntro()');
//            showSelectedTabContent(null, 'dxpFromTab', 'dxpFormContent', 'View Form', 'N');
            try {
                refreshFormDatawithId("dxpVisionFormRefreshDivSpanImg");
            } catch (e) {

            }
//            $(".accordian").accordion({
//                theme: 'energyblue',
//                collapsible: true,
//                heightStyle: "content",
//                active: false,
//                autoHeight: false,
//                animate: 300
//            });
//            $('.searchResultMaterialResults').show();
//            $('.accordian h3').bind('click', function () {
//                var self = this;
//                setTimeout(function () {
//                    var theOffset = $(self).offset();
//                    $('body,html').animate({scrollTop: theOffset.top - 40});
//                }, 310); // ensure the collapse animation is done
//            });
//            $("#CLASS_TERM").val(data['TERM']);
//            if (operationName == 'Extend') {
//
//                searchExtend();
//            } else if (operationName == 'delete') {
//
//                deleteRequest();
//            } else if (operationName == 'UnDelete') {
//
//                undeleteRequest();
//            } else if (operationName == 'Change') {
//
//                newChangeRequest();
//            }
////            validWorkflow();
//
//            saveOldPanelData();
//            firstPanelShowFlag = false;
//            validWorkflow();
//            $(".visionRegisterMaterialAccordians").find(".ui-accordion-header").addClass('particulorAccDiv');
//            $("#visionRegistartionGenericAccordionSpan img").addClass('accordianDefultImg');
//
//
//            $('.particulorAccDiv').on("mouseover", function () {
//                $('.particulorAccDiv img').map(function () {
//                    var findAttrt = $(this).attr('src');
//                    var nn = findAttrt.replaceAll('W', '');
//                    $(this).attr('src', nn);
//                });
//                var findAttr = $(this).find('.accordianDefultImg').attr('src');
//                var findedAttr = "";
//                if (findAttr != null && findAttr != undefined && findAttr != '') {
//                    findedAttr = findAttr.split('.');
//                }
//                if (findedAttr != null && findedAttr != undefined && findedAttr != '') {
//                    var srcFileName = findedAttr[0] + 'W.' + findedAttr[1];
//                    $(this).find('.accordianDefultImg').attr('src', srcFileName);
//                }
//
//
//            });
//
//            $('.particulorAccDiv').on("mouseout", function () {
//                $('.particulorAccDiv img').map(function () {
//                    var findAttrt = $(this).attr('src');
//                    var nn = findAttrt.replaceAll('W', '');
//                    $(this).attr('src', nn);
//                });
//            });
//            $("#charAccordianbtnID").draggable({
//                containment: "body",
//                start: function () {
//                    $(this).addClass('disableClickAction').addClass('startDragging').removeClass('stopedDragging')   // invenMngmnt.js
//
//
//                },
//                stop: function () {
//                    $(this).removeClass('startDragging').addClass('stopedDragging');
//                    setTimeout(function () {
//                        $("#charAccordianbtnID").removeClass('disableClickAction');
//                    }, 400);
//
//                }
//            });
//            $(".ccGuideInfo").mouseover(function () {
//                $('#colorBlueID').remove();
//                var htmlData = "<ul class=\"color_IndicatioUl\"><li class=\"listItemcolorIndication\"><span class=\"autoGenerateline\"></span><span class=\"mfGuideColorIndexText\"> AutoGenerate</span></li>"
//                        + "<li class=\"listItemcolorIndication\"><span class=\"mandatoryline\"></span><span class=\"mfGuideColorIndexText\"> Mandatory </span></li>"
//                        + "<li class=\"listItemcolorIndication\"><span class=\"optionalline\"></span><span class=\"mfGuideColorIndexText\"> Optional </span></li>"
//                        + "<li class=\"listItemcolorIndication\"><span class=\"autopopulateline\"></span><span class=\"mfGuideColorIndexText\"> AutoPopulate </span></li></ul>";
//                $(this).append('<div id = "colorBlueID">' + htmlData + '</div>');
//                var template = '<div class="popover custom-popoverSuggestion" role="tooltip">' +
//                        '<div class="arrow"></div>' +
//                        '<h3 class="popover-header"></h3>' +
//                        '<div class="popover-body"></div>' +
//                        '</div>';
//                $(".ccGuideInfo").popover({content: htmlData, trigger: "hover", position: 'right', html: true, template: template});
//            });
//            $(".ccGuideInfo").mouseover(function () {
//                $('#colorBlueID').remove();
//                var htmlData = "<ul class=\"color_IndicatioUl\"><li class=\"\"><span class=\"mfGuideColorIndex\"><svg  height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#000fff\"></svg></span><span class=\"mfGuideColorIndexText\"> AutoGenerate</span></li>"
//                        + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#ff1a1a\"></svg></span><span class=\"mfGuideColorIndexText\"> Mandatory </span></li>"
//                        + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#688280\"></svg></span><span class=\"mfGuideColorIndexText\"> Optional </span></li>"
//                        + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#32a852\"></svg></span><span class=\"mfGuideColorIndexText\"> AutoPopulate </span></li></ul>";
//                $(this).append('<div id = "colorBlueID"></div>');
//                $('#colorBlueID').html(htmlData);
//                $('#colorBlueID').jqxPopover({
//                    showArrow: true,
//                    width: 115,
//                    height: 120,
//                    showCloseButton: false,
//                    position: 'right',
//                    selector: $(this)
//                });
//                setTimeout(function () {
//                    $("#colorBlueID").jqxPopover('open');
//                }, 5000);
//            });
//            var matchcount = 0;
//            var Accordiangrid = "";
//            var gridid = "";
//            $("#accordion").on("accordionbeforeactivate", function (event, ui) {
//                var privioustabid = $("#SelectedCurrentTabId").val();
//                var oldDataFlag = false;
//                var tableName = "";
//                if (!executed) {
//                    var tabId = (globalTabId != null && globalTabId.indexOf('ERP_SAP') < 0) ? globalTabId : globalErpTab;
//                    if (tabId != null && tabId != undefined) {
//                        if (tabId != null && tabId != undefined) {
//                            $("#SelectedCurrentTabId").val(tabId);
//                        }
//                        tableName = privioustabid;
//                        if (erpglobalId != null && erpglobalId.indexOf('ERP_SAP')) {
//                            $("#previousCurrentTabId").val(erpglobalId);
//
//                        }
//
//                        var jsonOBJ = {};
//                        jsonOBJ.feildIds = [];
//                        jsonOBJ.feildValues = [];
//                        var matchedcount = 0;
//                        var dataView = $("#" + tableName + "_Update").attr("data-view");
//
//                        var errorCount = 0;
//                        if (dataView == "FORM-VIEW")
//                        {
//                            errorCount = 0;
//                            var v_ag = $("#hiddenAccountGroup").val();
//
//                            if (v_ag != null && (v_ag == "Material & Service (Foreign)")) {
//                                $("#BANKL").attr("data-mandatory", "O");
////                $("#BANKL").prop("disabled", "disabled");
//                                $("#BANKL").prop("readonly", true);
//                            }
//                            var jsonOBJ = {};
//                            var erpDataGridId = $("#erpDataGridId").val();
//                            var selectedTabOldData = tabsOldData[tableName];
//                            $("table#" + tableName + "_TABLE :input").each(function ()
//                            {
//                                var id = $(this).attr('id');
//                                var mand = $(this).attr("data-mandatory");
//                                var label = $(this).attr("data-label");
//                                mand = (mand === "M") ? "M" : "O";
//                                if (label != null && label == "Bank Key(IFSC)" && (v_ag != null && v_ag == "Material & Service (Foreign)")) {
//                                    $("#BANKL").attr("data-regex", "");
//                                }
//                                var regex = $(this).attr("data-regex");
//                                var returnBoolean = regexFunction(id, regex, mand, tableName, label);
//                                if (returnBoolean == false)
//                                {
//                                    errorCount++;
//                                    return false;
//                                }
//                            });
//                            if (errorCount == 0) {
//                                jsonOBJ.feildIds = [];
//                                jsonOBJ.feildValues = [];
//                                console.log(tableName + ":::textid:::");
//                                var matchedCount = 0;
//                                var gridIdHiddenValue = "UPDATE";
//                                $("table#" + tableName + "_TABLE :input").each(function () {
//                                    var textid = $(this).attr("id");
//                                    var type = $(this).attr("type");
//                                    var textval = $(this).val();
//                                    console.log("textid:::" + textid);
//                                    if (type != 'hidden') {
//                                        if (textval != null && textval != '') {
//                                            textval = textval.toUpperCase();
//                                        }
//                                    }
//
//                                    // var type = $(this).attr("type");
//                                    jsonOBJ.feildIds.push(textid);
//                                    if (type != null && type == 'checkbox') {//
//                                        if ($("#" + textid).is(':checked')) {
//                                            textval = "Y";
//                                        } else {
//                                            textval = "N";
//                                        }
//                                    }
//                                    jsonOBJ.feildValues.push(textval);
//                                    if (textid != null && textid.indexOf("AUDIT_ID") > -1)
//                                    {
//                                        basicData[textid] = textval;
//                                    }
//                                    var textOldVal = "";
//                                    if (selectedTabOldData != null) {
//                                        textOldVal = selectedTabOldData[textid];
//
//                                    }
//                                    console.log(textval + ":::" + textid + "::" + textOldVal);
//                                    if (textval != textOldVal) {
//                                        matchedCount++;
//                                    }
//                                    var tableNameHidden = tableName + "_HIDDEN";
//                                    if (textid == tableNameHidden) {
//                                        gridIdHiddenValue = $("#" + textid).val();
//                                    }
//                                });
//                                if (gridIdHiddenValue == 'INSERT' && matchedCount == 0) {
//                                    matchedCount = 1;
//                                }
//                            }
//                        } else if (dataView == "TABLE-VIEW") {
//                            selectedDataArray = gridOperation("update", tableName);
//                            if (selectedDataArray != 0) {
//                                matchedCount = 1;
//                            }
//                        } else if (dataView == "GRID-VIEW") {
//
//                            selectedDataArray = gridOperation("update", tableName);
//                            if (selectedDataArray != 0) {
//                                matchedCount = 1;
//                            }
//
//                        }//if 
//
//
//                        if (matchedCount > 0) {
//                            changeflag = true;
//                        }
//
//                        if (!changeflag) {
//                            $("[id^=regRorm]").removeClass("accordionContentShow");
//                        }
//
//                        console.log("in accordians before activate");
//                        labelObject = {};
//                        try {
//                            labelObject = JSON.parse($("#labelObjectHidden").val());
//                        } catch (e) {
//
//                        }
//                        var $this = $(this);
//                        var newPanelId = $(ui.newPanel).attr('id');
//                        var oldPanelId = $(ui.oldPanel).attr('id');
//                        var oldTabId = $(ui.oldHeader).attr('id');
//                        var newTabId = $(ui.newHeader).attr('id');
//                        var TabId = (oldTabId != null) ? oldTabId : newTabId;
//                        var dataOnclick = $("#" + TabId).attr('data-onclick');
//                        if (dataOnclick != null && dataOnclick.indexOf("_OLD") > -1) {
//                            oldDataFlag = true;
//                            var firstregRormID = $("#" + TabId).next().attr('id');
//                            var firstregRormIDNum = firstregRormID.substring(7, firstregRormID.length);
//                            var secondregRormIDNum = +firstregRormIDNum + +1;
//                            var secondregRormID = "regRorm" + secondregRormIDNum;
//                        }
//                        if (tabId != null && tabId != undefined && tabId == tableName) {
//                            changeflag = false;
//                        }
//                        if (changeflag) {
//                            if (oldDataFlag) {
//                                $("#" + secondregRormID).addClass("accordionContentShow");
//                            }
//                            if (accordionSwitchflag) {
//                                event.preventDefault();
//                            }
//
//// $("#regRorm4").css("display", "block");
//                            if (selectedDataArray.length != 0 && dataView != "FORM-VIEW") {
//                                $("#logoutDailog").html((labelObject['Unsaved changes will be lost'] != null ? labelObject['Unsaved changes will be lost'] : 'Unsaved changes will be lost') + ", " + (labelObject['you like to save'] != null ? labelObject['you like to save'] : 'you like to save') + "?");
//                                $("#logoutDailog").dialog({resizable: false,
//                                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
//                                    modal: true,
//                                    width: 300,
//                                    height: 135,
//                                    fluid: true,
//                                    buttons: [
//                                        {
//                                            text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
//                                            click: function () {
//                                                $(this).html("");
//                                                $(this).dialog("close");
//                                                $(this).dialog("destroy");
//                                                var newIndex = $(ui.newHeader).index('h3');
//                                                updaterecordData(selectedDataArray, tableName, "update", "", "", "", newIndex, tabId);
//                                                //iterationNum=0;
//
//                                            }
//                                        }
//                                        , {
//                                            text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
//                                            click: function () {
//                                                if (oldDataFlag) {
//                                                    $("#" + secondregRormID).removeClass("accordionContentShow");
//                                                }
//                                                $(this).html("");
//                                                $(this).dialog("close");
//                                                $(this).dialog("destroy");
//                                                var newIndex = $(ui.newHeader).index('h3');
//                                                console.log("newIndex::" + newIndex);
//                                                accordionSwitchflag = false;
//                                                changeflag = false;
//                                                executed = true;
//                                                if (newIndex > -1) {
//                                                    $("#accordion").accordion({
//                                                        active: newIndex
//                                                    });
//                                                } else if (newIndex < 0) {
//                                                    $("#accordion").accordion({active: false});
//                                                }
//                                                accordionSwitchflag = true;
//                                            }
//                                        }
//                                    ],
//                                    open: function ()
//                                    {
//                                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                                        $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
//                                        $(".visionHeaderMain").css("z-index", "999");
//                                        $(".visionFooterMain").css("z-index", "999");
//                                    },
//                                    beforeClose: function (event, ui)
//                                    {
//                                        $(".visionHeaderMain").css("z-index", "99999");
//                                        $(".visionFooterMain").css("z-index", "99999");
//                                    }
//                                });
//                            } else if (dataView == "FORM-VIEW" && matchedCount > 0) {
//                                $("#logoutDailog").html((labelObject['Unsaved changes will be lost'] != null ? labelObject['Unsaved changes will be lost'] : 'Unsaved changes will be lost') + ", " + (labelObject['you like to save'] != null ? labelObject['you like to save'] : 'you like to save') + "?");
//                                $("#logoutDailog").dialog({resizable: false,
//                                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
//                                    modal: true,
//                                    width: 300,
//                                    height: 135,
//                                    fluid: true,
//                                    buttons: [
//
//                                        {
//                                            text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
//                                            click: function () {
//                                                $(this).html("");
//                                                $(this).dialog("close");
//                                                $(this).dialog("destroy");
//                                                var newIndex = $(ui.newHeader).index('h3');
//                                                updaterecordData("", tableName, "update", "", "", "", newIndex, tabId);
//                                                //iterationNum=0;
//
//                                            }
//                                        }
//                                        , {
//                                            text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
//                                            click: function () {
//                                                if (oldDataFlag) {
//                                                    $("#" + secondregRormID).removeClass("accordionContentShow");
//                                                }
//                                                $(this).html("");
//                                                $(this).dialog("close");
//                                                $(this).dialog("destroy");
//                                                var newIndex = $(ui.newHeader).index('h3');
//                                                console.log("newIndex::" + newIndex);
//                                                accordionSwitchflag = false;
//                                                changeflag = false;
//                                                executed = true;
//                                                if (newIndex > -1) {
//                                                    $("#accordion").accordion({
//                                                        active: newIndex
//                                                    });
//                                                } else if (newIndex < 0) {
//                                                    $("#accordion").accordion({active: false});
//                                                }
//                                                accordionSwitchflag = true;
//                                            }
//                                        }
//                                    ],
//                                    open: function ()
//                                    {
//                                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                                        $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
//                                        $(".visionHeaderMain").css("z-index", "999");
//                                        $(".visionFooterMain").css("z-index", "999");
//                                    },
//                                    beforeClose: function (event, ui)
//                                    {
//                                        $(".visionHeaderMain").css("z-index", "99999");
//                                        $(".visionFooterMain").css("z-index", "99999");
//                                    }
//                                });
//
//                            } else {
//                                var results = "No Changes to Save";
//                                results = (labelObject[results] != null ? labelObject[results] : results);
//                                var dialogSplitMessage = dialogSplitIconText(results, "Y");
//                                $("#dialog").html(dialogSplitMessage);
//                                $("#dialog").dialog({resizable: false,
//                                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
//                                    modal: true,
//                                    height: 'auto',
//                                    minHeight: 'auto',
//                                    minWidth: 300,
//                                    maxWidth: 'auto',
//                                    fluid: true,
//                                    buttons: [{
//                                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
//                                            click: function () {
//                                                $(this).html("");
//                                                $(this).dialog("close");
//                                                $(this).dialog("destroy");
//                                                //   fetchTabData(tableName);
//                                                try {
//                                                    // $(tableName).jqxGrid('clearselection');
//                                                } catch (e) {
//
//                                                }
//
//
//                                            }
//
//                                        }],
//                                    open: function () {
//                                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                                        $(".visionHeaderMain").css("z-index", "999");
//                                        $(".visionFooterMain").css("z-index", "999");
//                                    },
//                                    beforeClose: function (event, ui)
//                                    {
//                                        $(".visionHeaderMain").css("z-index", "99999");
//                                        $(".visionFooterMain").css("z-index", "99999");
//                                    }
//                                });
//                            }
//                        }
//                    }
//                }
//            });
//            $(".ccGuideInfo").mouseout(function () {
//                $("#colorBlueID").jqxPopover('close');
//                $('#colorBlueID').remove();
//            });
            $(".defaultShowCards").hide();
            $("#accdiv h3").click(function () {
                var a = event.target.id;
                let self = $(this).offset().top;
                console.log(self);
                setTimeout(function () {
                    $('.dxpContentAccPageClass').animate({scrollTop: self - 80}, 'swing');
                }, 310);
            });

        },
        error: function (e) {
            stopLoader();
//            sessionTimeout(e);
        }// Error function in Ajax
    });
}
function showClassBasedButtons(gridIdresultObj, selectedIndex, gridInitParamObj) {
    showLoader();
    var labelObj = {};
    try {
        labelObj = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
    }
    if (gridIdresultObj['gridId'] != null && gridIdresultObj['gridId'] != '') {
        var selectedRowIndexes = $("#" + gridIdresultObj['gridId']).jqxGrid('getselectedrowindexes');
        var totalRowIndex = selectedRowIndexes.length;
        var datainformations = $('#' + gridIdresultObj['gridId']).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                    totalRowIndex = parseInt(pagesize);
                }

            }
        }
    }
    if (totalRowIndex > 0) {
        $.ajax({
            datatype: "json",
            type: "POST",
            url: 'getRenderedToolBarData',
            data: {
                'items': JSON.stringify(gridIdresultObj),
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                var toolbar = eval('(' + response + ')');
                $("#" + gridIdresultObj['gridId']).jqxGrid({rendertoolbar: toolbar});

            }
        });
    }
    stopLoader();
}
function getExportType(gridId)
{
    var exportType = $('#export' + gridId).val();
    if (exportType == "CSV")
    {
//        $("input.exportClass").css('background', '#fff url("images/export_as_csv_icon_blue.png") no-repeat 5px center');
        $("input.exportClass").hover(
                function () {
//                    $("input.exportClass").css('background', '#0071c5 url("images/export_as_csv_icon_white.png") no-repeat 5px center', 'important');
                }, function () {
//            $("input.exportClass").css('background', '#fff url("images/export_as_csv_icon_blue.png") no-repeat 5px center', 'important');
        });
        var exportvalue = "yes";
        $("#excelExport" + gridId).attr("disabled", false);
    } else if (exportType == "Xlsx" || exportType == "Xls" || exportType == "XLSX" || exportType == "XLS")
    {
//        $("input.exportClass").css('background', '#fff url("images/export_as_xlsx_icon_blue.png")  no-repeat 5px center', 'important');
        $("input.exportClass").hover(
                function () {
//                    $("input.exportClass").css('background', '#0071c5 url("images/export_as_xls_white.png")  no-repeat 5px center', 'important');
                }, function () {
//            $("input.exportClass").css('background', '#fff url("images/export_as_xlsx_icon_blue.png")  no-repeat 5px center', 'important');
        });
        var exportvalue = "yes";
        $("#excelExport" + gridId).attr("disabled", false);
    } else if ((exportType == "PDF"))
    {
//        $("input.exportClass").css('background', '#fff url("images/export_icon_blue.png")  no-repeat 5px center', 'important');
        $("input.exportClass").hover(
                function () {
//                    $("input.exportClass").css('background', '#0071c5 url("images/export_icon_white.png")  no-repeat 5px center', 'important');
                }, function () {
//            $("input.exportClass").css('background', '#fff url("images/export_icon_blue.png")  no-repeat 5px center', 'important');
        });
        $("#excelExport" + gridId).attr("disabled", false);
    } else if ((exportType == "XML"))
    {
//        $("input.exportClass").css('background', '#fff url("images/export_icon_blue.png") no-repeat 5px center');
        $("input.exportClass").hover(
                function () {
//                    $("input.exportClass").css('background', '#0071c5 url("images/export_icon_white.png") no-repeat 5px center', 'important');
                }, function () {
//            $("input.exportClass").css('background', '#fff url("images/export_icon_blue.png") no-repeat 5px center', 'important');
        });
        var exportvalue = "yes";
        $("#excelExport" + gridId).attr("disabled", false);
    } else {
        $("#excelExport" + gridId).attr("disabled", true);
    }
    stopLoader();
    $(".visionGridExportButton").show();
}
function finalExport(gridId, exportType, igFlag)
{
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    try {
        try {
            const element = document.getElementById("downloadData");
            element.remove();
        } catch (es) {
        }
        try {
            const element = document.getElementById("downloadData");
            element.remove();
        } catch (es) {
        }

        try {
            var form = document.createElement("form");
            form.setAttribute("id", "downloadData");
            form.setAttribute("action", "");
            form.setAttribute("target", "_blank");
            form.setAttribute("method", "POST");
            document.body.appendChild(form);
            var token = '';
            try {
                token = $('meta[name="_csrf"]').attr('content');
            } catch (es) {
                token = '';
            }
            $("#downloadData").append("<input id='downloadDatajsonData' type='hidden' name='jsonExpData' value=''>");
            $("#downloadData").append("<input id='exportGridId' type='hidden' name='gridId' value=''>");
            $("#downloadData").append("<input id='selectType' type='hidden' name='selectType' value=''>");
            $("#downloadData").append("<input id='exportRange' type='hidden' name='exportRange' value=''>");
            $("#downloadData").append("<input id='exportRangeCount' type='hidden' name='exportRangeCount' value=''>");
            $("#downloadData").append("<input id='selectedRowData' type='hidden' name='selectedRowData' value=''>");
            $("#downloadData").append("<input id='exportConsolidationGridId' type='hidden' name='exportGridId' value=''>");
            $("#downloadData").append("<input id='colsArrayStr' type='hidden' name='colsArrayStr' value=''>");
            $("#downloadData").append("<input id='columnsForExport' type='hidden' name='columns' value=''>");
            $('#downloadData').append("<input id='tableForExport' type='hidden' name='tableName' value=''>");
            $('#downloadData').append("<input id='filterConditionForExportGrid' type='hidden' name='paramArray' value=''>");
            $("#downloadData").append("<input id='igFlagForExport' type='hidden' name='igFlag' value='" + igFlag + "'>");
            $("#downloadData").append("<input id='_csrf' type='hidden' name='_csrf' value='" + token + "'>");
        } catch (es) {
        }
    } catch (es) {
    }

    var dataArray = [];
    var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
    if (selectedrowindexes != null && selectedrowindexes.length != 0)
    {
        if (exportType == null || exportType == "" || exportType == undefined) {
            exportType = $('#export' + gridId).val();
        }
        if (exportType == '')
        {
            $("#dialog1").html(labelObject['Please select an option to Export Process'] != null ? labelObject['Please select an option to Export Process'] : 'Please select an option to Export Process');
            $("#dialog1").dialog({resizable: false,
                title: labelObject['Export Record(s)'] != null ? labelObject['Export Record(s)'] : 'Export Record(s)',
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
        } else
        {
            // need to write Selected data export
            exportProcess(gridId, 'selected', igFlag);
        }
    } else
    {
        var exportRangeVal = $("#ssExportRange").val();
        var exportRangeCount = $("#ssExportCount").val();

        if (exportRangeVal != null && exportRangeVal != '' && exportRangeVal == 'Y')
        {
            if (!(exportRangeCount != null && exportRangeCount != '' && exportRangeCount != 0))

            {
                exportRangeCount = 20000;
            }
            $("#exportRangeCount").val(exportRangeCount);
            var sourceex = $('#' + gridId).jqxGrid('source');
            var totalRecords = sourceex.totalrecords;
            console.log('totalRecords:::' + totalRecords);
            var exportMesg = "<div>Select Range to Export:<select id='exportRecordsCount'>";

            if (parseInt(totalRecords) != 0 && parseInt(totalRecords) <= exportRangeCount) {
//                exportMesg += "<option value='0'>1-" + totalRecords.toLocaleString() + "</option>";
                exportProcess(gridId, 'ALL', igFlag);
            } else {

                var totalPages = parseFloat((parseInt(totalRecords) / exportRangeCount));
                var totalPagesForInt = parseInt((parseInt(totalRecords) / exportRangeCount));
                var finalPages = totalPages - totalPagesForInt;
                var j = 0;
                var i = 0;
                if (!(finalPages != null && finalPages != '' && finalPages != 0)) {
                    for (i = 0; i < totalPages; i++) {
                        exportMesg += "<option value='" + ((i * exportRangeCount) + 1) + "'>" + ((i * exportRangeCount) + 1).toLocaleString() + " - " + ((i + 1) * exportRangeCount).toLocaleString() + "</option>";
                    }
                } else {
                    for (i = 0; i < totalPages - 1; i++) {
                        exportMesg += "<option value='" + ((i * exportRangeCount) + 1) + "'>" + ((i * exportRangeCount) + 1).toLocaleString() + " - " + ((i + 1) * exportRangeCount).toLocaleString() + "</option>";
                    }
                }
//                            for (i = 0; i < totalPages; i++) {
//                                exportMesg += "<option value='" + ((i * exportRangeCount) + 1) + "'>" + ((i * exportRangeCount) + 1).toLocaleString() + " - " + ((i + 1) * exportRangeCount).toLocaleString() + "</option>";
//                            }
                var lastRecords = totalPages - totalPagesForInt;
                if (lastRecords != null && lastRecords != '' && lastRecords != 0) {
                    exportMesg += "<option value='" + ((i * exportRangeCount) + 1) + "'>" + ((i * exportRangeCount) + 1).toLocaleString() + " - " + totalRecords.toLocaleString() + "</option>"
                }

                exportMesg += "</select></div>";
                $("#dialog1").html(exportMesg);
                // $("#dialog1").html((labelObject['Do you want to export all records'] != null ? labelObject['Do you want to export all records'] : 'Do you want to export all records') + "?");
                $("#dialog1").dialog({resizable: false,
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                    modal: true,
                    height: 120,
                    minWidth: 300,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes',
                            click: function () {
                                $("#exportRange").val($("#exportRecordsCount").val());
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                // need to write all data export
                                exportProcess(gridId, 'ALL', igFlag);
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

            }
//                        else {
//                            var totalPages = parseInt((parseInt(totalRecords) / 20000)) + 1;
//                            var j = 0;
//                            for (var i = 0; i < totalPages; i++) {
//                                exportMesg += "<option value='" + ((i * 20000) + 1) + "'>" + ((i * 20000) + 1).toLocaleString() + " - " + ((i + 1) * 20000).toLocaleString() + "</option>";
//                            }
//                        }
//            exportMesg += "</select></div>";
//            $("#dialog1").html(exportMesg);
//            // $("#dialog1").html((labelObject['Do you want to export all records'] != null ? labelObject['Do you want to export all records'] : 'Do you want to export all records') + "?");
//            $("#dialog1").dialog({resizable: false,
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
//                            exportProcess(gridId, 'ALL', igFlag);
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
//                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
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
        } else
        {
            exportProcess(gridId, 'ALL', igFlag);
        }

    }
}
// process the export functionality
function exportProcess(gridId, selectType, igFlag) {
    showLoader();
    var ssExportColFlag = $("#ssExportColFlag").val();
    $("#selectType").val(selectType);
    var exportType = $('#export' + gridId).val();
    alert(selectType + ":::exportType:::" + exportType);
    if (allGridColumns[gridId] == null || allGridColumns[gridId] == "") {
        try {
            var selectedGridObjStr = $("#" + gridId).attr("data-gridResultObj");
            var responseObj = JSON.parse(selectedGridObjStr);
            allGridColumns[gridId] = responseObj.columns;
        } catch (e) {
        }
    }
    var fieldsArray = allGridColumns[gridId];
    var colsArray = [];
    if (exportType != null) {
        if (selectType != null && selectType == 'selected') {

            if (ssExportColFlag != null && ssExportColFlag != '' && ssExportColFlag == 'Y') {
                exportSelectedColsProcess(gridId, selectType, igFlag);
            } else {
                var exportJson = {};
                var count = 0;
                exportJson['headers'] = fieldsArray;
                if (fieldsArray != null && fieldsArray != '') {
                    for (var i = 0; i < fieldsArray.length; i++) {
                        var hiddenVal = fieldsData[i].hidden;
                        if (fieldsArray[i].text != null && fieldsArray[i].text != '' &&
                                !(fieldsArray[i].datafield.startsWith("HIDDEN_") || fieldsArray[i].datafield.endsWith("_HIDDEN"))) {
                            if (!(hiddenVal)) {
                                colsArray.push(fieldsArray[i].datafield);
                            }
                        }
                    }
                }
                var selectedRowsData = [];
                var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
                if (selectedrowindexes.length != 0) {
                    var totalRowIndex = selectedrowindexes.length;
                    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                    if (datainformations != null) {
                        var paginginformation = datainformations['paginginformation'];
                        var pagenum = paginginformation.pagenum;
                        if (paginginformation != null) {
                            var pagesize = paginginformation['pagesize'];
                            if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                                totalRowIndex = parseInt(pagesize);
                            }

                            if (pagenum != null && pagenum > 0) {
                                count = pagenum * pagesize;
                                totalRowIndex = count + pagesize;
                            }

                        }
                    }
                    for (var i = count; i < totalRowIndex; i++) {
                        selectedRowsData.push($('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]));
                    }
                    exportJson['data'] = selectedRowsData;
                    $('#colsArrayStr').val(JSON.stringify(colsArray));
                    $('#downloadDatajsonData').val(JSON.stringify(exportJson));
                    processExportRequest(gridId, exportType, igFlag);
                    stopLoader();
                }// end if
            }
        } else {


            if (ssExportColFlag != null && ssExportColFlag != '' && ssExportColFlag == 'Y') {
                exportSelectedColsProcess(gridId, selectType, igFlag);
            } else {
                var exportJson = {};
                exportJson['headers'] = fieldsArray;
                if (fieldsArray != null && fieldsArray != '') {
                    for (var i = 0; i < fieldsArray.length; i++) {
                        var hiddenVal = fieldsData[i].hidden;
                        if (fieldsArray[i].text != null && fieldsArray[i].text != '' &&
                                !(fieldsArray[i].datafield.startsWith("HIDDEN_") || fieldsArray[i].datafield.endsWith("_HIDDEN"))) {
                            if (!(hiddenVal)) {
                                colsArray.push(fieldsArray[i].datafield);
                            }
                        }
                    }
                }
                var rowsData = $('#' + gridId).jqxGrid('getrows');
                exportJson['data'] = rowsData;
                $('#colsArrayStr').val(JSON.stringify(colsArray));
                $('#downloadDatajsonData').val(JSON.stringify(exportJson));
                processExportRequest(gridId, exportType, igFlag);
                stopLoader();
            }
            //  var data = 

        }
    } else {
        alert(":::exportType::Not selected:");
    }


}// end of the function
function exportSelectedColsProcess(gridId, selectType, igFlag) {

    $('#exportGridId').val(gridId);
    var exportType = $('#export' + gridId).val();
    var ssExportColFlag = $("#ssExportColFlag").val();
    if (ssExportColFlag != null && ssExportColFlag != '' && ssExportColFlag == 'Y') {
        //var fieldsArray = allGridColumns[gridId];
        var fieldsData = allGridColumns[gridId];
        var fieldsArray = [];

        var inputString = "<div><table  style='width:100%' id ='gridColumns' border='1' class='gridImportColumns'><tr><td><input type='checkbox' class ='visionSelectAllCheckBox' id='selectall' value='selectall' checked></td><td style='text-align:left'>All</td> </tr>";
        if (fieldsData != null && fieldsData != '') {
            for (var i = 0; i < fieldsData.length; i++) {
                var hiddenVal = fieldsData[i].hidden;
                if (fieldsData[i].text != null && fieldsData[i].text != '' &&
                        !(fieldsData[i].datafield.startsWith("HIDDEN_") || fieldsData[i].datafield.endsWith("_HIDDEN"))) {
                    //if (!(fieldsData[i].hidden) || !(hiddenVal)){
                    if (!(hiddenVal)) {
                        inputString += "<tr><td><input type='checkbox' class ='visionSelectCheckBox' id='" + fieldsData[i].datafield + "' value='" + fieldsData[i].text + "' checked></td><td style='text-align:left' >" + fieldsData[i].text + "</td> </tr>";
                        fieldsArray.push(fieldsData[i].datafield);
                    }
                }
            }
            inputString += "</table></div>";
            console.log("inputString::::" + inputString);
        }
        stopLoader();
        $("#dialog").html(inputString);
        $("#dialog").dialog({resizable: false,
            title: labelObject['Selected Grid Colums'] != null ? labelObject['Selected Grid Colums'] : 'Selected Grid Colums',
            modal: true,
            height: 300,
            minWidth: 300,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                    click: function () {
                        var checkBoxVals = $('.visionSelectCheckBox:checked').map(function () {
                            return this.value;
                        }).get();

                        var headersArray = [];
                        if ($('#selectall').is(':checked')) {
                            headersArray = fieldsData;
                        } else {
                            if (fieldsData != null && fieldsData != '') {
                                for (var i = 0; i < fieldsData.length; i++) {
                                    for (var j = 0; j < checkBoxVals.length; j++) {
                                        if (fieldsData[i].text == checkBoxVals[j])
                                            headersArray.push(fieldsData[i]);
                                        fieldsArray.push(fieldsData[i].datafield);
                                    }

                                }
                            }
                        }
                        if (selectType != null && selectType != '' && selectType == 'selected') {
                            var exportJson = {};
                            exportJson['headers'] = headersArray;
                            var selectedRowsData = [];
                            var count = 0;
                            var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
                            if (selectedrowindexes.length != 0) {
                                var totalRowIndex = selectedrowindexes.length;
                                var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                                if (datainformations != null) {
                                    var paginginformation = datainformations['paginginformation'];
                                    var pagenum = paginginformation.pagenum;
                                    if (paginginformation != null) {
                                        var pagesize = paginginformation['pagesize'];
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
                                    selectedRowsData.push($('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]));
                                }
                                exportJson['data'] = selectedRowsData;
                                $('#colsArrayStr').val(JSON.stringify(fieldsArray));
                                $('#downloadDatajsonData').val(JSON.stringify(exportJson));
                                processExportRequest(gridId, exportType, igFlag);
                            }// end if
                        } else {
                            //$("#selectType").val(selectType);
                            var exportJson = {};
                            var rowsData = $('#' + gridId).jqxGrid('getdisplayrows');
                            exportJson['headers'] = headersArray;
                            //exportJson['data'] = rowsData;
                            $('#colsArrayStr').val(JSON.stringify(fieldsArray));
                            $('#downloadDatajsonData').val(JSON.stringify(exportJson));
                            processExportRequest(gridId, exportType, igFlag);

                        }
                        //var test=fieldsArray;
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
                $(this).html("");
                $(this).dialog("destroy");

                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });

        $("#selectall").click(function (event) {
            if (event.currentTarget.checked) {
                $(".visionSelectCheckBox").prop('checked', $(this).prop('checked'));
                $(".visionSelectCheckBox").prop("disabled", true);
            } else {
                $(".visionSelectCheckBox").prop('checked', $(this).prop('checked'));
                $(".visionSelectCheckBox").prop("disabled", false);
            }


        });
        $(".visionSelectCheckBox").prop('checked', true);
        $(".visionSelectCheckBox").prop("disabled", true);

    }
}        // end of function
function processExportRequest(gridId, exportType, igFlag) {
    stopLoader();
    $("#exportGridId").val(gridId);
    var jsonString = $('#downloadDatajsonData').val();
    $("#downloadData").attr("jsonexpdata", jsonString);
//    $('#igFlagForExport').remove();
//    $('#columnsForExport').remove();
    if (igFlag != null && igFlag != undefined && igFlag == 'IG') {
        var datafieldsArr = getDatafields();
        var datafields = datafieldsArr.join(",");
        var currentVisualizeChartTable = $("#currentVisualizeChartTable").val();
        var currentVisualizeChartParamArray = $("#currentVisualizeChartParamArray").val();
        $('#igFlagForExport').val("IG");
        $('#columnsForExport').val(datafields);
        $('#tableForExport').val(currentVisualizeChartTable);
        $('#filterConditionForExportGrid').val(currentVisualizeChartParamArray);
//        $("#downloadData").append("<input id='columnsForExport' type='hidden' name='columns' value='${datafieldsArr.join(",")}'>");
//        $("#downloadData").append("<input id='igFlagForExport' type='hidden' name='igFlag' value='IG'>");
        //$("#downloadData").append(`<input id='tableForExport' type='hidden' name='tableName' value='${tableName}'>`);

    }
    if (exportType == 'Xlsx' || exportType == 'XLSX') {
        $("#downloadData").attr("action", "exportXlsxData");
        $("#downloadDatajsonData").remove();
        $("#downloadData").append(`<input type="hidden" name="jsonExpData" id="downloadDatajsonData">`);
        $("#downloadDatajsonData").val(jsonString);
        $("#downloadData").submit();

    } else if (exportType == 'CSV') {
//        $("#downloadData").attr("jsonExpData", jsonString);
        $("#downloadData").attr("action", "exportCSVData");
        $("#downloadData").submit();

    } else if (exportType == 'PDF') {
//        $("#downloadData").attr("jsonExpData", jsonString);
        $("#downloadData").attr("action", "exportPDFData");
        // $("#downloadData").submit();

    } else if (exportType == 'XML') {
//        $("#downloadData").attr("jsonExpData", jsonString);
        $("#downloadData").attr("action", "exportXMLData");
        $("#downloadData").submit();

    }
    $('#' + gridId).jqxGrid('clearselection');
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
            selectBoxOptions += "<option value='" + $(this).attr('data-colname') + "' data-typeSelectStr='" + typeSelectStr + "' data-dlovcolname='" + dlovcolname + "'  >" + $(this).children('td').eq(0).text() + "</option>";
        }
    });
    $("#browsecolsddw").html(selectBoxOptions);
    $("#importfiltergridcriteria").show();
    $("#visionImportErrorMsg").show();
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
                    $("#importfiltergridcriteria").hide();
                    $("#importfiltergridcriteria").dialog('close');

                }
            },
            {
                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                click: function () {
                    $("#importfiltergridcriteria").hide();
                    $("#importfiltergridcriteria").dialog('close');

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
function showPdfData(gridId, rowIndex, formFlag) {
    showLoader();
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");

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
        var itemsstring = JSON.parse($('#itemsstring').val());
        rowData.imageTable = itemsstring['imageTable'];
        rowData.imageTableColumn = itemsstring['imageTableColumn'];
        rowData.imageColumn = itemsstring['imageColumn'];
        rowData.CONCEPT_ID = itemsstring['CONCEPT_ID'];
    } else {
        var rowData = $('#' + gridId).jqxGrid('getrowdata', rowIndex);
        var dataSheet = '';
        try {
            dataSheet = rowData['DATA_SHEET'];
        } catch (e) {
            dataSheet = '';
        }
    }
    if (dataSheet != null && dataSheet != '' && dataSheet != 'undefined' && dataSheet != undefined
            && dataSheet != '<div id="genericPdfDataSheetExport">nullnull</div>') {

        try {
            stopLoader();
//            var tiltle = "<div id='showHeaderNameAndExport' style='display:flex;margin-left: 12px;'><div id='showHeaderText'>Data Sheet</div><div style='display:flex;'><div id=\"pdfImgDiv\" class=\"pdfImgDiv\" style='margin-left: 12px;'></div><div id='dataSheetdownload" + gridId + "' ><input title='Export' id='dataSheetExport" + gridId + "'  class='exportClass visionSearchExportButton visionGridExportButton visionExportInput' type='button' width='-2px' disabled='disabled'></div></div></div> "

            var title = "<div id='showHeaderNameAndExport' style='display:flex;gap:10px;'><div id='showHeaderText'>Data Sheet</div><div style='display:flex;align-items: center'><button id=\"pdfImgDiv\" class=\"pdfImgDiv\" style='margin-left: 12px; display:none;' value='PDF' >PDF</button><div id='dataSheetdownload" + gridId + "' ><input title='Download' id='dataSheetExport" + gridId + "'  class='exportClass visionSearchExportButton visionGridExportButton visionExportInput visionSearchExportButtonUpdatedImagClass' type='button' width='-2px' disabled='disabled'></div></div></div> ";
            var modalObj = {
//                title: "<div id='showHeaderNameAndExport' style='display:flex;margin-left: 12px;'><div id='showHeaderText'>Data Sheet</div><div id=\"pdfImgDiv\" class=\"pdfImgDiv\" style='margin-left: 12px;'><img id=\"pdfDivExportMainDomain\" src=\"images/pdficon.png\"  width=\"25\"></div></div>",
                title: title,
                body: dataSheet
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
            $("#showExtendPdfTableData .modal-dialog").addClass("modal-xl");
            $("#showExtendPdfTableData .modal-dialog").css("margin", "3.75rem auto");
            var source = [
                "PDF",
//                "Excel",
//                "CSV",
            ];
//            $("#pdfImgDiv").jqxDropDownList({
//                source: source,
////                placeHolder: "Select Export Type",
////                placeHolder: "Select",
//                width: 100,
//                height: 30,
//                dropDownHeight: 100,
//                selectedIndex: 0,
//            });

//            $("#pdfImgDiv").jqxDropDownList('selectItem', 'PDF');
            $("#dataSheetExport" + gridId).attr("disabled", false);

//            $('#pdfImgDiv').on('change', function (event)
//            {
//                var args = event.args;
//                if (args) {
//                    var item = args.item;
//                    var value = item.value;
//                    getExportGenericFormData(value);
//                }
//            });
            $('#pdfImgDiv').on('change', function (event)
            {
                var exportType = $('#pdfImgDiv').val();
                if (exportType != null && exportType != '' && exportType != 'null' && exportType != 'undefined'
                        && exportType != undefined && exportType != 'Select') {
                    $("#dataSheetExport" + gridId).attr("disabled", false);
                } else {
                    $("#dataSheetExport" + gridId).attr("disabled", true);
                }
            });


//            $('#pdfImgDiv').on('onclick', function (event)
//            {
//                var args = event.args;
//                if (args) {
//                    var item = args.item;
//                    var value = item.value;
//                    getExportGenericFormData(value);
//                }
//            });
//            $('#dataSheetExport'+ gridId).on('onclick', function (event)
//            {
//                var args = event.args;
//                if (args) {
//                   var exportType = $('#pdfImgDiv').val();
//                   if (exportType != null && exportType != '' && exportType != 'null' && exportType != 'undefined'
//                        && exportType != undefined && exportType != 'Select') {
//                   getExportGenericFormData(exportType);
//                } else {
//                    $("#dataSheetExport" + gridId).attr("disabled", true);
//                }
//                    
//                }
//            });
            $('#dataSheetdownload' + gridId).on('click', function (event)
            {
                try {
                    showLoader();
                    var exportType = $('#pdfImgDiv').val();
                    if (exportType != null && exportType != '' && exportType != 'null' && exportType != 'undefined'
                            && exportType != undefined && exportType != 'Select') {
                        stopLoader();
                        getExportGenericFormData(exportType);
                    } else {
                        stopLoader();
                        $("#dataSheetExport" + gridId).attr("disabled", true);
                    }
                } catch (e) {
                    stopLoader();
                }


            });
        } catch (er) {
            stopLoader();
        }

    } else if (dataSheet != null && dataSheet != '' && dataSheet != 'undefined' && dataSheet != undefined
            && dataSheet == '<div id="genericPdfDataSheetExport">nullnull</div>') {
        stopLoader();
        var dialogSplitMessage = dialogSplitIconText("Data Sheet not Available against the selected row", "H", "350", "150");
        showErrorPopupMessage(dialogSplitMessage, "Message");
    } else if (rowData != null
            && !jQuery.isEmptyObject(rowData)
            && rowData.length != 0) {
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: 'genericDataSheet',
            traditional: true,
            cache: false,
            async: true,
            data: {
                'items': JSON.stringify(rowData),
                'gridId': gridId,
                'rowIndex': rowIndex,
            },
            success: function (result) {
                stopLoader();
                var pdfdata = result['mainStrDiv'];

                if (pdfdata != null && pdfdata != '' && pdfdata != 'undefined' && pdfdata != undefined) {

                } else {
                    pdfdata = 'Unable to retrive Data Sheet';
                }

//                var tiltle = "<div id='showHeaderNameAndExport' style='display:flex;margin-left: 12px;'><div id='showHeaderText'>Data Sheet</div><div style='display:flex;'><div id=\"pdfImgDiv\" class=\"pdfImgDiv\" style='margin-left: 12px;'></div><div id='dataSheetdownload" + gridId + "' ><input title='Export' id='dataSheetExport" + gridId + "'  class='exportClass visionSearchExportButton visionGridExportButton visionExportInput' type='button' width='-2px' disabled='disabled'></div></div></div> "
//                var tiltle = "<div id='showHeaderNameAndExport' style='display:flex;margin-left: 12px;'><div id='showHeaderText'>Data Sheet</div><div style='display:flex;align-items: center'><button id=\"pdfImgDiv\" class=\"pdfImgDiv\" style='margin-left: 12px;'>PDF</button><div id='dataSheetdownload" + gridId + "' ><input title='Export' id='dataSheetExport" + gridId + "'  class='exportClass visionSearchExportButton visionGridExportButton visionExportInput visionSearchExportButtonUpdatedImagClass' type='button' width='-2px' disabled='disabled'></div></div></div> "
                if (fioriThemeCheck) {
                    var title = "<div id='showHeaderNameAndExport' style='display:flex;gap:10px;'><div id='showHeaderText'>Data Sheet</div><div style='display:flex;align-items: center'><button id='pdfImgDiv' class='pdfImgDiv' style='margin-left: 12px; display:none;' value='PDF'>PDF</button><div id='dataSheetdownload" + gridId + "'><input title='Download' id='dataSheetExport" + gridId + "' class='exportClass visionSearchExportButton visionGridExportButton visionExportInput visionSearchExportButtonUpdatedImagClass' type='button' width='-2px' disabled='disabled'></div><div id='dataSheetEmail" + gridId + "' style='margin-left: 10px;'><input title='Email' id='dataSheetEmailExport" + gridId + "' class='exportClass visionSearchExportButton visionGridExportButton visionExportInput visionSearchExportButtonUpdatedImagClass' type='image' src='images/iDXPUI5Email.svg' style='width: 32px; height: 32px; padding: 4px; border: 1px solid #ccc;'></div></div></div>";
                } else {
                    var title = "<div id='showHeaderNameAndExport' style='display:flex;gap:10px;'><div id='showHeaderText'>Data Sheet</div><div style='display:flex;align-items: center'><button id=\"pdfImgDiv\" class=\"pdfImgDiv\" style='margin-left: 12px; display:none;' value='PDF' >PDF</button><div id='dataSheetdownload" + gridId + "' ><input title='Download' id='dataSheetExport" + gridId + "'  class='exportClass visionSearchExportButton visionGridExportButton visionExportInput visionSearchExportButtonUpdatedImagClass' type='button' width='-2px' disabled='disabled'></div></div></div> ";
                }

                $('#showPdfFormData').remove();
                $('body').append("<div id='showPdfFormData'></div>");
                $("#showPdfFormData").html(pdfdata);
                $("#showPdfFormData").dialog({
                    draggable: true,
                    modal: true,
                    height: 500,
                    minHeight: 400,
                    minWidth: 800,
//                    maxWidth:2000,
                    width: 1000,
                    fluid: true,
                    buttons: [{
                            text: 'Ok',
                            click: function () {
                                $(this).html("");
                                $(this).dialog("destroy");
                            }
                        }],
                    open: function () {
                        $(this).closest(".ui-dialog").css("z-index", "9999");
                        $(".ui-dialog-title").html(title)
                        $("#genericPdfDataSheetExport").addClass("pdfDataSheetExport")
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function (event, ui) {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                })

//                var modalObj = {
////                title: "<div id='showHeaderNameAndExport' style='display:flex;margin-left: 12px;'><div id='showHeaderText'>Data Sheet</div><div id=\"pdfImgDiv\" class=\"pdfImgDiv\" style='margin-left: 12px;'><img id=\"pdfDivExportMainDomain\" src=\"images/pdficon.png\"  width=\"25\"></div></div>",
//                    title: tiltle,
//                    body: pdfdata
//                };
//                var buttonArray = [
//                    {
//                        text: labelObject['Close'] != null ? labelObject['Close'] : 'Close',
//                        click: function () {
//                        },
//                        isCloseButton: true
//                    }
//                ];
//                modalObj['buttons'] = buttonArray;
//                createModal("showExtendPdfTableData", modalObj);
//                $("#showExtendPdfTableData .modal-dialog").addClass("modal-xl");
//                $("#showExtendPdfTableData .modal-dialog").css("margin", "3.75rem auto");
                var source = [
                    "PDF",
                    "",
//                "Excel",
//                "CSV",
                ];
//                $("#pdfImgDiv").jqxDropDownList({
//                    source: source,
////                placeHolder: "Select Export Type",
//                    placeHolder: "Select",
//                    width: 100,
//                    height: 30,
//                    dropDownHeight: 100,
//                    selectedIndex: 0,
//                });
//
//                $("#pdfImgDiv").jqxDropDownList('selectItem', 'PDF');
                $("#dataSheetExport" + gridId).attr("disabled", false);


//            $('#pdfImgDiv').on('change', function (event)
//            {
//                var args = event.args;
//                if (args) {
//                    var item = args.item;
//                    var value = item.value;
//                    getExportGenericFormData(value);  
//                }
//            });
//            
//            
//            $('#pdfImgDiv').on('onclick', function (event)
//            {
//                var args = event.args;
//                if (args) {
//                    var item = args.item;
//                    var value = item.value;
//                    getExportGenericFormData(value);
//                }
//            });

                $('#pdfImgDiv').on('change', function (event)
                {
                    var exportType = $('#pdfImgDiv').val();
                    if (exportType != null && exportType != '' && exportType != 'null' && exportType != 'undefined'
                            && exportType != undefined && exportType != 'Select') {
                        $("#dataSheetExport" + gridId).attr("disabled", false);
                    } else {
                        $("#dataSheetExport" + gridId).attr("disabled", true);
                    }
                });

//            $('#dataSheetExport'+ gridId).on('click', function (event)
//            {
//                   var exportType = $('#pdfImgDiv').val();
//                   if (exportType != null && exportType != '' && exportType != 'null' && exportType != 'undefined'
//                        && exportType != undefined && exportType != 'Select') {
//                   getExportGenericFormData(exportType);
//                } else {
//                    $("#dataSheetExport" + gridId).attr("disabled", true);  
//                }
//                });
                $('#dataSheetdownload' + gridId).on('click', function (event)
                {
                    try {
                        showLoader();
                        var exportType = $('#pdfImgDiv').val();
                        if (exportType != null && exportType != '' && exportType != 'null' && exportType != 'undefined'
                                && exportType != undefined && exportType != 'Select') {
                            stopLoader();
                            getExportGenericFormData(exportType);
                        } else {
                            stopLoader();
                            $("#dataSheetExport" + gridId).attr("disabled", true);
                        }
                    } catch (e) {
                        stopLoader();
                    }



                });
                $('#dataSheetEmailExport' + gridId).on('click', function (event) {
                    try {
                        showLoader();
                        sendasEmail(rowData);
                        stopLoader();
                    } catch (e) {
                        stopLoader();
                        console.error("Error while sending email:", e);
                        var errorMessage = dialogSplitIconText("Error sending Email", "H", "350", "150");
                        showErrorPopupMessage(errorMessage, "Message");
                    }
                });
            },
            error: function (e) {
                stopLoader();
//            showErrorPopupMessage("Unable to retrive Data Sheet", "Message");
            }
        });
        stopLoader();
    } else {
        stopLoader();
        var dialogSplitMessage = dialogSplitIconText("Unable to retrive Data Sheet", "H");
        showErrorPopupMessage(dialogSplitMessage, "Message", "350", "150");
    }


}
function showDuplicateFormExtendView() {
    $('.formDxpDuplicates').hide();
    var extendData = $("#dxpExtendFormViewData").val();
    var modalObj = {
        title: 'Extend View',
        body: extendData
    };
    var buttonArray = [
        {
        }
    ];
    modalObj['buttons'] = buttonArray;
    createModal("showExtendPdfTableData", modalObj);
    $("#showExtendPdfTableData .modal-dialog").addClass("modal-md opacity-animate3 extendedViewData");
}
function closeDuplicateFormExtendView() {
    $('.formDxpDuplicates').hide();
}
function showDefaultForm() {
    $(".mainBookMark").hide();
    firstPanelShowFlag = true;
    getFirstPanelShow(event);
    $("#secondDxpSplitter").hide();
}
function showClassesForm() {
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
function showGridForm() {
    secondPanelShowFlag = false;
    getSecondPanelShow(event);
    thirdPanelShowFlag = true;
    $('#fourthDxpSplitter').hide();
    $('.visionGridExportButton').hide();
    showThirdPanel();
    $('.viewFormDiv').removeClass('active');
    $('.viewGridDiv').addClass('active');
    $('.viewClassDiv').removeClass('active');
    $('.defaultDiv').removeClass('active');
    setTimeout(resizable, 100);
    $("#searchGrid").css("visibility", "visible");
    gridoperations('DXP_SEARCH_VIEW', 'refresh');
}
function showFormData() {
    $('#thirdDxpSplitter').show();
    thirdPanelShowFlag = false;
    showThirdPanel();
    $('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: "0px"}]});
    $('#fourthDxpSplitter').show();
    $('.viewFormDiv').addClass('active');
    $('.viewGridDiv').removeClass('active');
    $('.viewClassDiv').removeClass('active');
    $('.defaultDiv').removeClass('active');

}
function savePdf() {
    $("#pdfbodyFormId").submit();
}
$(document).ready(function () {
    $(document).on('show.bs.modal', '.modal', function () {
        const zIndex = 1040 + 10 * $('.modal:visible').length;
        $(this).css('z-index', zIndex);
        setTimeout(() => $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack'));
    });

});
function sendasEmail() {
    showLoader();
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    if (fioriThemeCheck) {
        showLoader();
        var rowData = {};

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
        var itemsstring = JSON.parse($('#itemsstring').val());
        rowData.imageTable = itemsstring['imageTable'];
        rowData.imageTableColumn = itemsstring['imageTableColumn'];
        rowData.imageColumn = itemsstring['imageColumn'];
        rowData.CONCEPT_ID = itemsstring['CONCEPT_ID'];

        $.ajax({
            url: 'mailDataSheet',
            type: 'POST',
            data: {
                items: JSON.stringify(rowData),
            },
            success: function (data) {
                stopLoader();
                //contentType: 'application/json',
                labelObject = {};
                try {
                    labelObject = JSON.parse($("#labelObjectHidden").val());
                } catch (e) {
                }
                if (data != null && data != undefined && data != "") {
                    showMesg(data);
                }
            },
            error: function (e) {}
        });
    } else {
        $.ajax({
            url: 'mailDataSheet',
            type: 'POST',
            success: function (data) {
                stopLoader();
                stopLoader();
                labelObject = {};
                try {
                    labelObject = JSON.parse($("#labelObjectHidden").val());
                } catch (e) {
                }
                var modalObj = {
                    title: 'Email',
                    body: data
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
                createModal("dialog", modalObj);
                $(".modal-dialog").addClass("modal-xl opacity-animate3");
            },
            error: function (e) {}
        });
    }

}
function printDataSheet() {

    try {
        window.print();
    } catch (e) {
        console.log(e);
    }
}
function newDxpVendorClassCreation(supplierName, gridId, ssDomain, ssRole) {
    showLoader();
    $('#firstDxpSplitter').jqxSplitter({width: '100%', height: '635', orientation: 'vertical', splitBarSize: 0, panels: [{size: 30}]});
    $('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
    $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 1450}]});
    $("#fourthDxpSplitter").html('');
    $('.searchFirstResultsList').hide();
    $('.searchResultsList').hide();
    $('.searchDXPCreate').hide();
    $('.decendingFirstOrder').hide();
    $("#rolehid").val(ssRole);
    var items = {};
    items['SUPPLIER_NAME'] = supplierName;
    items['gridId'] = gridId;
    items['ssDomain'] = ssDomain;
    items['ssRole'] = ssRole;
    var items = JSON.stringify(items);
    $("#itemsstring").val(items);
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "itemRegisterForm",
        cache: false,
        data: {
            items: items,
            fioriThemeFlag: fioriThemeCheck,
        },
        success: function (response) {
            stopLoader();
            var form = response['formStr'];
            if (form != null && form != undefined && form != '') {
                $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 600}]});
                $("#thirdDxpSplitter").show();
                $("#thirdDxpSplitter").jqxSplitter('collapse');
                $("#fourthDxpSplitter").show();
                $("#fourthDxpSplitter").html(form);
                $("#treeGridDiv").show();
                $("#ACC_GRP_DESCR").val("ADOM");
                $("#COMPANY_CDE").val("1000");
                $("#PURCHASE_ORG").val("9010");
                $("#treeGridDiv").html(form);
                registerClickFunction();
            } else {
                var message = response['message'];
                var modalObj = {
                    title: 'Message',
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
function showFormResultExtendView(event) {
//    $("#showExtendPdfTableData").
    $("#showExtendPdfTableData").modal('hide');
}
function addNewImage(conceptId, term, recordNo) {
    var params = {
        conceptId: conceptId,
        term: term,
        recordNo: recordNo
    };
    $("#browsecols").unbind("change").on("change", function () {
        var fileInput = this;
        var file = fileInput.files[0];
        var validExtensions = ['png', 'jpg', 'jpeg'];
        var fileExtension = file.name.split('.').pop().toLowerCase();

        if (!validExtensions.includes(fileExtension)) {
            alert("Invalid file type. Please upload a PNG, JPG, or JPEG file.");
            return;
        }

        var formData = new FormData();
        formData.append('file', file);
        formData.append('conceptId', conceptId);
        formData.append('term', term);
        formData.append('recordNo', recordNo);

        showLoader();

        $.ajax({
            url: "feedbackUpload",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                stopLoader();
//            console.log(JSON.stringify(response));
//            var message = JSON.stringify(response.message);
//            message = message.replace(/^"(.+)"$/, '$1');

                var modalObj = {
                    title: 'Upload Status Message',
                    body: response
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        click: function () {
                            var dataField = sessionStorage.getItem('dataField');
                            var rowBoundIndex = sessionStorage.getItem('rowBoundIndex');
                            var gridId = $('#gridId').val();
                            $('#loginModel').modal('show');
                            navigateToForm(dataField, $('#' + gridId).jqxGrid('getrowdata', rowBoundIndex), 'form', gridId, '', rowBoundIndex);
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
                $(".modal-dialog").addClass("modal-xs opacity-animate3");
            },
            error: function (xhr, status, error) {
                console.error("Error uploading file:", error);
                alert("File upload failed. Please try again.");
            },

        });
    });


    $("#browsecols").click();
}
function getDxpGridDataCompare(gridId, operationName) {
    showLoader();
    if (gridId == null && gridId == undefined && gridId == undefined) {
        gridId = $("#currentGridId").val();
    }
    var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
    if (selectedrowindexes != null && selectedrowindexes != undefined
            && selectedrowindexes != undefined && selectedrowindexes.length == 2) {
        var firstRowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[0]);
        var secondRowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[1]);
        firstRowData['RECORD_NO2'] = secondRowData['RECORD_NO'];
        firstRowData['operationName'] = operationName;
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getDxpCompareRecors",
            cache: false,
            data: {
                firstRowData: JSON.stringify(firstRowData),
                secondRowData: JSON.stringify(secondRowData),
                selectedrowindexes: selectedrowindexes,
                gridId: "DXP_SEARCH_VIEW",
            },
            success: function (response) {
                stopLoader();
                var gridResultObj = response;
                var pageSize = 10;
                var gridPropObj = gridResultObj['gridPropObj'];
                try {
                    var pagesizeoptions = gridPropObj['pagesizeoptions'];
                    pageSize = pagesizeoptions[0];
                } catch (e) {
                }
                consolidationResolutionGrid(firstRowData, gridResultObj, 0, pageSize, 30);
            }
        })


    } else {
        var modalObj = {
            title: 'Message',
            body: "Please select two records to compare."
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
        $(".modal-dialog").addClass("modal-xs");
    }

}
function consolidationResolutionGrid(basicData, gridResultObj, recordstartindex, pagesize, recordendindex) {

    if (gridResultObj != null) {
        if (recordstartindex != null && parseInt(recordstartindex) != 0) {
            recordstartindex = parseInt(recordstartindex) - 1;
        }
        $("#selectedCols").val(gridResultObj['totalColumnsArray']);
        var selectedCols = $("#selectedCols").val();
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
            selectedCols: selectedCols,
            recordstartindex: recordstartindex,
            pagesize: pagesize,
            recordendindex: recordendindex,
            currentPage: $("#currentPage").val()
        };

        $.ajax({
            type: 'POST',
            // async: false,
            url: 'consolidationResolutionGrid',
            data: data,
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

                if (response != null) {
                    var resultObj = JSON.parse(response);
                    $("#matrixGridDivId").show();
//                    $("#matrixGridId").html(resultObj['tabString']); //tabString
                    $("#resetConsolidation").show();
                    $("#processActionButton").show();
                    $("#createSubGroup").show();
                    $("#visionSearchExportButton").show();
                    var modalObj = {
                        title: 'Records Compare Info',
                        body: resultObj['tabString']
                    };
                    var buttonArray = [
                        {

                        }
                    ];
                    modalObj['buttons'] = buttonArray;
                    createModal("showCompareGridClass", modalObj);
                    $(".modal-dialog").addClass("modal-xl dxpCompareGridRowsData");
                    $('.showCompareGridClass').css('padding-top', '0');

                }

            },
            error: function (e) {
                sessionTimeout(e);
            }

        });
    }

}
function getViewColumnForm(row) {
    var currentRowIndex = $("#currentRowIndex").val();
    var vendorGridId = 'DXP_VM_SEARCH_VIEW';
    var currentGridId = $("#currentGridId").val()
    navigateToVendorForm('SUPPLIER_NAME', $('#' + currentGridId).jqxGrid('getrowdata', currentRowIndex), 'form', vendorGridId, '', currentRowIndex);
}
function navigateToVendorForm(datafield, data, redirectType, vendorGridId, selectedTabId, selectingrowindex) {
    showLoader();
    var items = {};
    var linkedColumns = "SUPPLIER_NAME";
    if (linkedColumns != null && linkedColumns != '') {
        // var linkedColumnArray = linkedColumns.split(",");

        for (var key in data) {
            if (linkedColumns.lastIndexOf(key) > -1) {
                var value = data[key];
                //    console.log("key::::" + key + ":::value::::" + value);
                value = value.replace(/\s/gi, "_");
                value = value.replace(/[#]/g, "_");
                //  console.log("key::::" + key + ":::value::::" + value);
                items[key] = value;
            }
        }
    }
//    items.stripValue = stripValueObjArray
//    items.imageColumn = $("#" + gridId + "_imageColumn").val();
//    items.imageTable = $("#" + gridId + "_imageTable").val();
//    items.imageTableColumn = $("#" + gridId + "_imageTableColumn").val();
    items.linkedColumns = linkedColumns;
    items.gridId = vendorGridId;
    items.SUPPLIER_NAME = 'BOSCH';
    items.panelId = 'VM_PANEL_MGR_REG_ACCEPTED_BY_ERP';
    items.formId = 'VM_FRM_RECORD_ACCEPTED_ERP_MGR';
    items.tabId = selectedTabId;
    items.vendorFormView = 'Y';
//    var datainformation = $('#' + gridId).jqxGrid('getdatainformation');
//    var rowscount = datainformation.rowscount;
//    items.selectingrowindex = selectingrowindex;
//    items.rowscount = rowscount;
    var itemsstring = JSON.stringify(items);
    $("#itemsstring").val(itemsstring);
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "formData",
        cache: false,
        data: {
            items: itemsstring,
            data: JSON.stringify(data)
        },
        success: function (response) {
            stopLoader();
//            var responseObj = JSON.parse(response);
            var modalObj = {
                title: 'Vendor Info',
                body: response['formStr']
            };
            var buttonArray = [
                {

                }
            ];
            modalObj['buttons'] = buttonArray;
            createModal("showCompareGridClass", modalObj);
            $(".modal-dialog").addClass("modal-xl dxpCompareGridRowsData");
            $('#showCompareGridClass').css("padding-top", "0");
            $('.dxpCompareGridRowsData').css("margin-top", "30");
            $(".accordian").accordion({
                theme: 'energyblue',
                collapsible: true,
                heightStyle: "content",
                active: false,
                autoHeight: false,
                animate: 300
            });
            $('.accordian h3').bind('click', function () {
                var self = this;
                setTimeout(function () {
                    var theOffset = $(self).offset();
                    $('body,html').animate({scrollTop: theOffset.top - 40});
                }, 310); // ensure the collapse animation is done
            });
        }
    });
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
//    var lat = '77.609255';
//    var lng = '30.19232525792222';
//     showMap(lat,lng);
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
function showMap(lat, lng) {
    var url = "https://maps.google.com/?q=" + lat + "," + lng;
    window.open(url);
}
function newDxpServiceClassCreation(className, gridId, domain, role, serviceCategory,
        subCategory, uom, recordGroup, sacCode, conceptId) {
    $('#firstDxpSplitter').jqxSplitter({width: '100%', height: '635', orientation: 'vertical', splitBarSize: 0, panels: [{size: 30}]});
    $('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
    $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 1450}]});
    $("#fourthDxpSplitter").html('');
    $('.searchFirstResultsList').hide();
    $('.searchResultsList').hide();
    $('.searchDXPCreate').hide();
    $('.decendingFirstOrder').hide();
    var itemsObj = {};
    var data = {};
    var linkedColumns = "CONTENT,TERM,CLASS,CLASS_TERM,DEFINITION,uid,UID,HIDDEN_GRID_ID";
    if (linkedColumns != null && linkedColumns != '') {
        for (var key in data) {
            if (linkedColumns.lastIndexOf(key) > -1) {
                var value = data[key];
                value = value.replace(/\s/gi, "_");
                value = value.replace(/[#]/g, "_");
                itemsObj[key] = value;
            }
        }
    }
    itemsObj.linkedColumns = linkedColumns;
    itemsObj.CLASS_TERM = className;
    itemsObj.gridId = gridId;
    itemsObj.DOMAIN = domain;
    itemsObj.ROLE = role;
    itemsObj.ASTYP_DESC = serviceCategory;
    itemsObj.LBNUM_DESC = subCategory;
    itemsObj.CONCEPT_ID = conceptId;
    itemsObj.UOM = uom;
    itemsObj.SAC_CODE = sacCode;
    itemsObj.RECORD_GROUP = recordGroup;
    itemsObj.panelId = "SM_PANEL_SAP_NEW_REG";
    var items = JSON.stringify(itemsObj);
    $("#itemsstring").val(items);
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "itemRegisterForm",
        cache: false,
        data: {
            items: items,
            data: JSON.stringify(data),
            fioriThemeFlag: fioriThemeCheck,
        },
        success: function (response) {
            var form = response['formStr'];
            if (form != null && form != undefined && form != '') {
                $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 600}]});
                $("#thirdDxpSplitter").show();
                $("#thirdDxpSplitter").jqxSplitter('collapse');
                $("#fourthDxpSplitter").show();
                $("#fourthDxpSplitter").html(form);
                $("#treeGridDiv").show();
                $("#treeGridDiv").html(form);
                registerClickFunction();
            } else {
                var message = response['message'];
                var modalObj = {
                    title: 'Message',
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
function newDxpVendorOnBoardClassCreation(currentGridId, gridId, panelId, operationName) {
    $('#firstDxpSplitter').jqxSplitter({width: '100%', height: '635', orientation: 'vertical', splitBarSize: 0, panels: [{size: 30}]});
    $('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
    $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
    $('.decendingOrder').hide();
    $('.decendingFirstOrder').hide();
    $('.searchFirstResultsList').hide();
    $('.searchDXPCreate').hide();
    $('.searchResultsList activeResult').hide();
    $('.searchResultMaterialResults').hide();
    $('.viewFormDiv').removeClass('active');
    $('.viewClassDiv').removeClass('active');
    var searchedValue = $("#searchedValue").val();
    var items = {};
    items['operationName'] = operationName;
    items['gridId'] = gridId;
    items['panelId'] = panelId;
    items['SUPPLIER_NAME'] = searchedValue;
    items['vendorOnBoardFlag'] = 'Y';
    $("#vendorOnBoardFlag").val('Y');
    var items = JSON.stringify(items);
    $("#itemsstring").val(items);
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "itemRegisterForm",
        cache: false,
        data: {
            items: items,
            fioriThemeFlag: fioriThemeCheck,
        },
        success: function (response) {
            var form = response['formStr'];
            if (form != null && form != undefined && form != '') {
                $('.viewClassDiv').removeClass('active');
                $('.viewGridDiv').removeClass('active');
                $(".searchResultsList").hide();
                $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
                $("#fourthDxpSplitter").show();
                $("#fourthDxpSplitter").html(form);
//                $("#treeGridDiv").show();
//                $("#ACC_GRP_DESCR").val("ADOM");
//                $("#COMPANY_CDE").val("1000");
//                $("#PURCHASE_ORG").val("9010");
//                $("#treeGridDiv").html(form);
                registerClickFunction();
            } else {
                var message = response['message'];
                var modalObj = {
                    title: 'Message',
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
function genieEffect() {
    var direction = "";
    var extendData = $("#dxpExtendFormViewData").val();
    var elementHtml = "<div id='mainDiv' class='geniemodalContainer'><div class='genieModalHeader'>Extend View"
            + "<img src='images/Collase-Outline-Icon.svg' title='Close' id='closeGeniePopup' class='genieCloseClass'/></div>"
            + "<div class='genieModalbodyContent'>" + extendData + "</div></div>";
    $('#temp-wrapper-content').append(elementHtml);

    $('#genie-target').css({
        width: $('#temp-wrapper-content').outerWidth(),
        height: $('#temp-wrapper-content').outerHeight()
    })
    $('[genie-source]').click(function () {
//        showFormExtendView();
        if (!($("#genie-target").hasClass("genie"))) {
            $(this).htmlGenieExpand($('#genie-target'), $('#temp-wrapper-content'), [this.className]);
            direction = this.className;
        }
    });

    $('#genie-target').click(function (event) {
        var target = event.target;
        var closeButtonId = target['id'];
        if (closeButtonId == 'closeGeniePopup') {
//        var cla = $("." + direction);
            $(this).htmlGenieCollapse($("." + direction), [direction]);
            $("#genie-target").removeClass("genie");
        }
    });
}
function hideErrors() {
    $(".allErrors").html("");
    $(".allErrors").hide();
}
function regexFunction(ele, regex, mandatory, basket, label) {

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
        if ($("#" + ele).is(":checked")) {
            str = true;
        } else {
            str = false;
        }
    } else {
        str = $("#" + ele).val();

        if (str != null)
        {
            str = str.replace(/(^\s*)/gi, "");
            str = str.replace(/[ ]{2,}/gi, " ");
            str = str.trim();
            $("#" + ele).val(str);
        }
    }
    var id = '#dis' + ele;
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
            if (nrCount != valCount && valCount != splitcount) {
                var msg = (labelObject['Enter Valid' + label] != null ? labelObject['Enter Valid' + label] : 'Enter Valid' + label);
                errorMessage(id, msg);
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
                splitid = $("#" + ele).attr("data-column");
                splitcount = $("#" + ele).attr("splitcount");
                for (var i = 1; i <= splitcount; i++) {
                    mtRequired = $("#" + splitid + "" + i).attr("data-mtrequired");
                    mtApplicable = $("#" + ele).attr("data-mtapplicable");
                    if (mtRequired == 'NR') {
                        ++nrCount;
                        ++valCount;
                    }
                    if ($("#" + splitid + "" + i).val() != "" && mtRequired == 'R') {
                        ++valCount;
                    }
                    if (mtApplicable == "NA") {
                        if (i > 1) {
                            var j = i - 1;
                            var splitidPrev = splitid + "" + j;
                            if ($("#" + splitidPrev).val().toUpperCase() == "NA") {
                                valCount = splitcount;
                                $("#" + splitid + "" + i).val('');
                                $("#" + splitid + "" + i).attr('readonly', true);
                                $(".allErrors").hide();
                                $("#" + splitid + "" + i).attr("data-mandatory", 'O');
                            }
                            if ($("#" + splitidPrev).val().toUpperCase() != "NA") {
                                $("#" + splitid + "" + i).attr('readonly', false);
                                $("#" + splitid + "" + i).attr("data-mandatory", 'M');
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
            if (nrCount != valCount && valCount != splitcount) {
                var msg = (labelObject['Enter Valid' + label] != null ? labelObject['Enter Valid' + label] : 'Enter Valid' + label);
                errorMessage(id, msg);
                return false;
            }
        }
        if (!str && mandatory == 'M' && type != 'hidden') {
            var msg = "";
            if (datatype == "L" || datatype == "C") {
                msg = (labelObject['Should be Selected'] != null ? labelObject['Should be Selected'] : 'Should be Selected');
            } else {
                msg = (labelObject['Should not be Blank'] != null ? labelObject['Should not be Blank'] : 'Should not be Blank');
                stopLoader();//7
            }
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
                        errorMessage(id, (labelObject['STD + Telephone No. length Should be 10'] != null ? labelObject['STD + Telephone No. length Should be 10'] : 'STD + Telephone No. length Should be 10'));
                        return false;
                    }
                }
            }
        }
        psCount(tabId);
        var msg = $("#" + ele).attr("data-regex-msg");
        if (str && res == false)
        {
            errorMessage(id, msg);
            return false;
        }
        if (ele == 'GST_NUMBER' || ele == 'STCD3') {
            return is_GST_All(ele);
        }
        $(id).html("");
        $(id).hide();
        if (ele == 'O_REORDER_POINT' || ele == 'O_MAX_INV_LEV') {
            onChangMrpValidation();
        }
        return true;
    } else {
        psCount(tabId);
        return false;
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
function UpdateOrDelete(data, dataView, tabId, operation) {
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
    }
    var jsondata = {};
    var basicData = {};
    var reviewIndFV;
    var vendorCode = $("#vendorCode").val();
    var referenceNo = $("#REFERENCE_NO").val();
    var referenceType = $("#REFERENCE_TYPE").val();
    var locatCode = $("#locatcode").val();
    var companyCode = $("#compCode").val();
    var accountGroup = $("#accountGroup").val();
    var purchaseOrg = $("#purchOrg").val();
    var purchaseOrg = $("#purchOrg").val();
    var baskettype = $('#baskettypehid').val();
    var requestNumber = $("#requestNumber").val();
    var vendorCode = $("#vendorCode").val();
    if ($('#foreignReviewIndicator').is(':checked')) {
        reviewIndFV = "Y";
    } else
    {
        reviewIndFV = "N";
    }
    var reviewIndCA = "";
    if ($('#caReviewIndicator').is(':checked')) {
        reviewIndCA = "Y";
    } else
    {
        reviewIndCA = "N";
    }
    var newIfsc = "";
    if ($('#NEW_BNK').is(':checked'))
    {
        newIfsc = "Y";
    } else
    {
        newIfsc = "N";
    }
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

    for (var key in basicData) {
        if (key != null && key.lastIndexOf("HiddenGridData") > -1) {
            var erpdata = basicData[key];
            if (erpdata != null && erpdata != '' && erpdata != 'undefined' && erpdata != undefined && erpdata.indexOf(tabId) > -1) {
                var erpTabGridId = key.replace("HiddenGridData", "");
                $("#erpTabGridId").val(erpTabGridId);
                basicData['erpTabGridId'] = erpTabGridId;
//             basicData['erpDataGridId'] = tabId;

            }

        }
    }
    var jsonOBJ = {};
    var dataArray = [];
    var finalData = "";
    if (dataView != "GRID-VIEW") {
        data.basicData = basicData;
        jsonOBJ = JSON.parse(data);
        jsonOBJ.basicData = basicData;
        dataArray.push(jsonOBJ);
        finalData = JSON.stringify(jsonOBJ);
    } else
    {
        jsonOBJ = {};
        var gridData = JSON.parse(data);
        finalData = JSON.stringify(gridData);
    }
    if ((referenceNo == null || referenceNo == "" || referenceNo == undefined) && dataView == "GRID-VIEW") {
        var selectedRowIndexes = $('#' + tabId).jqxGrid('getselectedrowindexes');
        if (selectedRowIndexes.length > 0) {
            for (var i = 0; i < selectedRowIndexes.length; i++) {
                if (selectedRowIndexes[i] !== undefined && selectedRowIndexes[i] >= 0) {
                    var rowData = $('#' + tabId).jqxGrid('getrowdata', selectedRowIndexes[i]);
                    if (rowData != null && rowData != "" && rowData != undefined) {
                        referenceNo = rowData['REFERENCE_NO'];
                        referenceType = rowData['REFERENCE_TYPE'];
                        break;
                    }
                }
            }
        }
    }
    var selectedGridInitObj = localStorage.getItem("selectedGridInitParamObj"); 
    var selectedGridInitParamObj = JSON.parse(selectedGridInitObj);
    var updateRefAILensCallFlag = selectedGridInitParamObj['uuu_UpdateRefAILensCallFlag'];
    if (referenceNo != null && referenceNo != "" && referenceNo != "") {
        var className = basicData["CLASS_TERM"];
        if (className == null || className == "" || className == "") {
            className = basicData["CLASS"];
            if (className == null || className == "" || className == "") {
                className = basicData["TERM"];
            }
        }
        try {
            var AIEnableOrDisableFlag = $("#AIEnableOrDisableFlag").val();
            if (AIEnableOrDisableFlag != null && AIEnableOrDisableFlag != undefined && AIEnableOrDisableFlag != "" && AIEnableOrDisableFlag == 'Y') {
                if (updateRefAILensCallFlag == null || updateRefAILensCallFlag == '' || updateRefAILensCallFlag == undefined) {
                    updateRefAILensCallFlag = 'Y';
                }
                if (operation != null && operation != undefined && operation != "" && operation == 'update') {
                    if (referenceNo != null && referenceNo != "" && referenceNo != "") {
                        var className = basicData["CLASS_TERM"];
                        if (className == null || className == "" || className == "") {
                            className = basicData["CLASS"];
                            if (className == null || className == "" || className == "") {
                                className = basicData["TERM"];
                            }
                        }
                        if (tabId != null
                                && (!(tabId.indexOf("_SAP") > -1
                                        || tabId.indexOf("SAP_") > -1
                                        || tabId.indexOf("_ERP") > -1
                                        || tabId.indexOf("ERP_") > -1))) {
                            var AilensEnrichTypes = localStorage.getItem("AilensEnrichTypes");
                            if (referenceType != null && referenceType != '' && referenceType != undefined) {
                                var ailensEnrichTypesArr = AilensEnrichTypes.split(',');
                                for (var j = 0; j < ailensEnrichTypesArr.length; j++) {
                                    if (referenceType == ailensEnrichTypesArr[j]) {
                                        if (updateRefAILensCallFlag != null && updateRefAILensCallFlag != ''
                                                && updateRefAILensCallFlag != undefined && updateRefAILensCallFlag == 'Y') {
                                            showAIReferenceNoAndClassBasedLinks(referenceNo, className, basicData['gridId'], basicData['RECORD_NO']);
                                            break;
                                        }
                                    }
                                }
                            }
//                            showAIReferenceNoAndClassBasedLinks(referenceNo, className, basicData['gridId'], basicData['RECORD_NO']);
                        }

                    }
                }
            }
        } catch (e) {

        }

    }
    var url = "";
    if (operation == "update" || operation == 'checkingTabData') {
        url = "updateRecord";
    } else if (operation == "delete")
    {
        url = "deleteRecord";
    } else if (operation == "calculateStock")
    {
        fetchCalculateStock(finalData, tabId, dataView);
    }
    if (operation === 'update') {
        var finalDataObj = JSON.parse(finalData);
        var returnFlag = false;
        finalDataObj.forEach(function (jsonObjectToUpdate) {
            var fieldIds = jsonObjectToUpdate.feildIds;
            var fieldValues = jsonObjectToUpdate.feildValues;
            var hasHTML = false;

            for (var i = 0; i < fieldValues.length; i++) {
                if (hasHTMLTags(fieldValues[i])) {
                    hasHTML = true;
                    break;
                }
            }

            if (hasHTML) {
                var modalObj = {
                    title: labelObject['Message'] || 'Message',
                    body: "<div id='successmsg'>Please Enter Valid Text</div>",
                    buttons: [
                        {
                            text: 'OK',
                            click: function () {},
                            isCloseButton: true
                        },
                        {
                            text: 'Cancel',
                            click: function () {},
                            isCloseButton: true
                        }
                    ]
                };

                createModal("dataDxpSplitterValue", modalObj);
                $(".modal-backdrop").show();
                $(".modal-dialog").addClass("modal-md");

                stopaiLoader();
                returnFlag = true;
                return false;
            }
        });

        if (returnFlag) {
            stopLoader();
            return false;
        }
    } else if (dataView == "GRID-VIEW" && operation == "delete") {
        var resultMessage = "";
        var deletedCount = 0;
        var updateFlag = false;

        try {
            var selectedRowIndexes = $('#' + tabId).jqxGrid('getselectedrowindexes');

            // Create a copy of the selectedRowIndexes array to avoid changes during iteration
            var indexesToDelete = selectedRowIndexes.slice();

            // Check for non-inserted rows
            for (var i = 0; i < indexesToDelete.length; i++) {
                if (indexesToDelete[i] != -1) {
                    var rowData = $('#' + tabId).jqxGrid('getrowdata', indexesToDelete[i]);
                    if (rowData[tabId + "_HIDDEN"] != null && rowData[tabId + "_HIDDEN"] != "INSERT") {
                        updateFlag = true;
                        break; // Exit early if we find a non-inserted row
                    }
                }
            }

            // If no non-inserted rows were found, proceed with deletion
            if (!updateFlag) {
                // Sort the indexesToDelete array in descending order to prevent index shifting issues
                indexesToDelete.sort(function (a, b) {
                    return b - a;
                });

                for (var i = 0; i < indexesToDelete.length; i++) {
                    var rowIndex = indexesToDelete[i];
                    if (rowIndex != -1) {
                        var rowData = $('#' + tabId).jqxGrid('getrowdata', rowIndex);

                        // Check if the row is "empty" or "inserted"
                        if (rowData && rowData[tabId + "_HIDDEN"] == "INSERT") {
                            var id = $("#" + tabId).jqxGrid('getrowid', rowIndex);
                            var success = $("#" + tabId).jqxGrid('deleterow', id);

                            if (success) {
                                deletedCount++;
                            } else {
                                console.error("Failed to delete row at index:", rowIndex);
                            }
                        }
                    }
                }

                if (deletedCount > 0) {
                    resultMessage = deletedCount + ' Row(s) Deleted Successfully';
                    var buttonsArray = [
                        {
                            text: 'OK',
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                            }
                        }
                    ];
                    showButtonPopupMessage(resultMessage, buttonsArray, 'Message');
                    stopLoader();
                    return;
                }
            }

        } catch (e) {
            console.error("Error during deletion:", e);
        }
    }
    let currentDomain = $("#currentDomain").val();  // Get actual value
    let currentTabId = $("#SelectedCurrentTabId").val();
    var verifyIdentityFlag = localStorage.getItem('verifyIdentityFlag');
    var selectedGridInitParam = localStorage.getItem('selectedGridInitParamObj');
    var selectedGridInitParamObj = {};
    var verifyGridIdentity = "";
    if (selectedGridInitParam != null && selectedGridInitParam != undefined && selectedGridInitParam != "") {
        selectedGridInitParamObj = JSON.parse(selectedGridInitParam);
        verifyGridIdentity = selectedGridInitParamObj['uuu_VerifyIdentity'];
        if (verifyGridIdentity == null || verifyGridIdentity == undefined || verifyGridIdentity == "") {
            verifyGridIdentity = "N";
        }
    }

    if (verifyIdentityFlag != null && verifyIdentityFlag != undefined
            && verifyIdentityFlag != "" && verifyIdentityFlag == "Y" &&
            verifyGridIdentity != null && verifyGridIdentity != undefined
            && verifyGridIdentity != "" && verifyGridIdentity == "Y") {
        $.ajax({
            url: "getVerificationFlag",
            type: "GET",
            traditional: true,
            data: {
                gridId: currentTabId
            },
            cache: false,
            success: function (response) {
                stopLoader();

                const isGlobalVerificationEnabled = response && response.identityVerificationFlag === 'Y';
                const isDomainApplicable = response && response.identityVerificationDomains && response.identityVerificationDomains.includes(currentDomain);
                const isInitParamVerificationEnabled = response && response.identityVerificationInitParam === 'Y';

                if (isGlobalVerificationEnabled) {
                    if (url === "updateRecord" && isDomainApplicable && isInitParamVerificationEnabled) {
                        processVerificationRequest(finalData, currentTabId)
                                .then(({ result, response}) => {
                                    if (result === true) {
                                        if (response &&
                                                response.verificationStatus &&
                                                response.verificationStatus['BANK_ACCOUNT_NUMBER'] &&
                                                response.verificationStatus['BANK_ACCOUNT_NUMBER'].includes('Bank Account details verified successfully.') &&
                                                response.verificationStatus['name_at_bank_cleaned'] &&
                                                response.verificationStatus['name_at_bank_cleaned'].trim() !== ''
                                                ) {

                                            let jsonDataArr;

                                            try {
                                                jsonDataArr = JSON.parse(finalData);
                                            } catch (e) {
                                                console.error("Error parsing JSON data:", e);
                                                return;
                                            }
                                            let jsonData = jsonDataArr[0];

                                            const koinhIndex = jsonData.feildIds.indexOf("KOINH");
                                            if (koinhIndex !== -1) {
                                                jsonData.feildValues[koinhIndex] = response.verificationStatus.name_at_bank_cleaned.trim();
                                            }

                                            finalData = JSON.stringify(jsonDataArr);

                                        }
                                        if (response &&
                                                response.verificationStatus &&
                                                response.verificationStatus['GST_NUMBER'] &&
                                                response.verificationStatus['GST_NUMBER'].includes('SUCCESS') &&
                                                response.verificationStatus['einvoiceStatusCode'] &&
                                                response.verificationStatus['einvoiceStatusCode'].trim() !== ''
                                                ) {

                                            let jsonDataArr;

                                            try {
                                                jsonDataArr = JSON.parse(finalData);
                                            } catch (e) {
                                                console.error("Error parsing JSON data:", e);
                                                return;
                                            }
                                            let jsonData = jsonDataArr[0];

                                            const koinhIndex = jsonData.feildIds.indexOf("MOVEND_COLUMN25");
                                            if (koinhIndex !== -1) {
                                                jsonData.feildValues[koinhIndex] = response.verificationStatus['einvoiceStatusCode'].trim();
                                            }

                                            finalData = JSON.stringify(jsonDataArr);

                                        }

                                    }
                                    processUpdateOrDeleteAjax(operation, url, dataView, finalData, tabId, basicData);

                                })
                                .catch(err => {
                                    console.error("Something went wrong:", err);
                                });
                    } else {
                        processUpdateOrDeleteAjax(operation, url, dataView, finalData, tabId, basicData);
                        setTimeout(changeflagFuction, 300);
                    }
                } else {
                    processUpdateOrDeleteAjax(operation, url, dataView, finalData, tabId, basicData);
                }
            },
            error: function (xhr) {
                console.error("Verification error:", xhr.responseText);
                showDialog(
                        `<p style="color: #8b0000; text-align: center;">Error: ${xhr.statusText || 'Unknown error occurred'}</p>`,
                        "Verification Error",
                        true
                        );
            }
        });
    } else {
        processUpdateOrDeleteAjax(operation, url, dataView, finalData, tabId, basicData);
    }

//    if (operation != 'calculateStock') {
//        var reqNumber = $("#REQ_NUMBER").val() != null ? $("#REQ_NUMBER").val() : "";
//        var status = $("#STATUS").val() != null ? $("#STATUS").val() : "";
//        $.ajax({
//            type: "POST",
//            url: url,
//            data: {
//                dataView: dataView,
//                jsonData: finalData,
//                gridId: tabId,
//                panelId: $("#panelId").val(),
//                'STATUS': status,
//                'REQ_NUMBER': reqNumber,
//                checkAttachType: ($("#checkAttachType").val() != null ? $("#checkAttachType").val() : ""),
//                initParamSource: ($("#initParamSource").val() != null ? $("#initParamSource").val() : "")
//            },
//            traditional: true,
//            cache: false,
//            success: function (result) {
//                stopLoader();
//                var resultMessage;
//                var response = JSON.parse(result);
//                var resultNew = response.Message;
//                var flag = response.messageFlag;
//                var reason = response.reason;
//                console.log(operation + ':::::reason:::::::::::::' + reason);
//
//                if (result == null || result == "") {
//                    result = "Failed to Update!"
//                    result = (labelObject[result] != null ? labelObject[result] : result);
//                }
//                var hiddenGridId = $('#' + tabId + "_HIDDEN").val();
//                if (dataView == "GRID-VIEW" && operation == "delete") {
//                    try {
//                        var selectedRowIndexes = $('#' + tabId).jqxGrid('getselectedrowindexes');
//                        for (var i = 0; i < selectedRowIndexes; i++) {
//                            if (selectedRowIndexes[i] != -1) {
//                                var rowData = $('#' + tabId).jqxGrid('getrowdata', selectedRowIndexes[i]);
//
//                                if (rowData != null) {
//                                    var hiddenGridId = rowData[tabId + "_HIDDEN"];
//                                }
//                            }
//                        }
//                    } catch (e) {
//                        var hiddenGridId = $('#' + tabId + "_HIDDEN").val();
//                    }
//
//                } else {
//                    var hiddenGridId = $('#' + tabId + "_HIDDEN").val();
//                }
//
//                if (hiddenGridId != null && hiddenGridId == "INSERT" && operation == "delete" && resultNew.lastIndexOf("Failed") > -1) {
//                    resultMessage = "No Record to Delete.";
//                    resultMessage = (labelObject[resultMessage] != null ? labelObject[resultMessage] : resultMessage);
//                } else
//                {
//                    resultMessage = response.Message;
//                }
//                if (operation == 'checkingTabData') {
//                    checkingTabData(tabId, basicData, dataView);
//                } else {
//                    stopLoader();//23
//                    var dialogSplitMessage = dialogSplitIconText(resultMessage, flag);
//                    //NKR
//                    var AIlensEnaOrDisFlag = 'N';
//                    try {
//                        AIlensEnaOrDisFlag = $("#AIEnableOrDisableFlag").val();
//                    } catch (er) {
//                        AIlensEnaOrDisFlag = 'N';
//                    }
//
////                    if (AIlensEnaOrDisFlag != null && AIlensEnaOrDisFlag != "" && AIlensEnaOrDisFlag != undefined && AIlensEnaOrDisFlag == 'Y') {
////                        AILensTypingAndConfirmationMsg(dialogSplitMessage, "aiNotificationsResultClass", "N", "", "");
////                        //NKR
////                    } else {
//                    var modalObj = {
//                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
//                        body: labelObject[dialogSplitMessage] != null ? labelObject[dialogSplitMessage] : dialogSplitMessage,
//                    };
////                        var buttonArray = [
////                            {
////                                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
////                                click: function () {
////                                    if (flag) {
////                                        if (tabId != null && tabId.indexOf("ERP") > -1) {
////                                            fetchErpTab(tabId, '');
////                                        } else if (tabId != null
////                                                && (tabId.indexOf("MM_ATTACHMENTS") > -1
////                                                        || tabId.indexOf("SM_ATTACHMENTS") > -1
////                                                        || tabId.indexOf("SPEC_ATTACHMENTS") > -1)) {
////                                            fetchAttachmentsTabGridData(tabId);
////                                        } else {
////                                            fetchTabData(tabId, '');
////                                            var role = $("#rolehid").val();
////                                        }
////                                    } else {
////                                        if (dataView == "GRID-VIEW") {
////                                            if (tabId != null &&
////                                                    (tabId.indexOf("MM_ATTACHMENTS") > -1
////                                                            || tabId.indexOf("SM_ATTACHMENTS") > -1
////                                                            || tabId.indexOf("SPEC_ATTACHMENTS") > -1)) {
////                                                fetchAttachmentsTabGridData(tabId);
////                                                $('#' + tabId).jqxGrid('clearselection');
////                                            } else if (tabId != null && tabId.indexOf("ERP") > -1) {
////                                                fetchErpTab(tabId, '');
////                                            } else {
////                                                fetchTabData(tabId);
////                                                $('#' + tabId).jqxGrid('clearselection');
////                                            }
////                                        } else if (dataView == "FORM-VIEW") {
////                                            if (hiddenGridId != null && hiddenGridId == "INSERT" && operation == "delete") {
////                                                fetchTabData(tabId);
////                                            }
////                                        }
////                                    }
////                                },
////                                isCloseButton: true
////                            }
////                        ];
//                    var buttonArray = [
//                        {
//                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
//                            click: function () {
//                                $(this).html("");
//                                $(this).dialog("close");
////                                $("#dialog5").dialog("destroy");
//                                if (flag) {
//                                    if (tabId != null && tabId.indexOf("ERP") > -1) {
//                                        fetchErpTab(tabId, '');
//                                    } else if (tabId != null
//                                            && (tabId.indexOf("MM_ATTACHMENTS") > -1
//                                                    || tabId.indexOf("SM_ATTACHMENTS") > -1
//                                                    || tabId.indexOf("SPEC_ATTACHMENTS") > -1)) {
//                                        fetchAttachmentsTabGridData(tabId);
//                                    } else {
//                                        fetchTabData(tabId, '');
//                                        var role = $("#rolehid").val();
//                                    }
//                                } else {
//                                    if (dataView == "GRID-VIEW") {
//                                        if (tabId != null &&
//                                                (tabId.indexOf("MM_ATTACHMENTS") > -1
//                                                        || tabId.indexOf("SM_ATTACHMENTS") > -1
//                                                        || tabId.indexOf("SPEC_ATTACHMENTS") > -1)) {
//                                            fetchAttachmentsTabGridData(tabId);
//                                            $('#' + tabId).jqxGrid('clearselection');
//                                        } else if (tabId != null && tabId.indexOf("ERP") > -1) {
//                                            fetchErpTab(tabId, '');
//                                        } else {
//                                            fetchTabData(tabId);
//                                            $('#' + tabId).jqxGrid('clearselection');
//                                        }
//                                    } else if (dataView == "FORM-VIEW") {
//                                        if (hiddenGridId != null && hiddenGridId == "INSERT" && operation == "delete") {
//                                            fetchTabData(tabId);
//                                        }
//                                    }
//                                }
//
//                            }
//                        }
//                    ];
//
////                        modalObj['buttons'] = buttonArray;
////                        createModal("dataDxpSplitterValue", modalObj);
////                            $(".modal-dialog").addClass("modal-xs");
//                    showButtonPopupMessage(resultMessage, buttonArray, 'Message');
//                    if (tabId != null && tabId.indexOf("GENERAL") > -1 && flag) {
//                        var gstCodeTax;
//                        gstCodeTax = $("#GST_CODE_GEN").val();
//                        $("#GST_CODE_BASE").val(gstCodeTax);
//                    }
//                    if (tabId != null && tabId.indexOf("TAXATION") > -1 && flag) {
//                        var reciepientType = "OT";
//                        var panCharTop, panCharTax;
//                        panCharTax = $("#O_1IPANNO").val();
//                        $("#PAN_NUMBER").val(panCharTax);
//                        panCharTop = $("#PAN_NUMBER").val();
//                        if (panCharTop && panCharTop.charAt(3) == "C") {
//                            reciepientType = "CO";
//                        }
//                        $("#QSREC").val(reciepientType);
//                    }
////                    }
//                }
//            },
//            error: function (e) {
//                console.log(e);
//                stopLoader();
//                sessionTimeout(e);
//            }
//        });
//    }
//    setTimeout(changeflagFuction, 300);
}// updateOrDelete fun
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
                            var modalObj = {
                                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                                body: labelObject[dialogSplitMessage] != null ? labelObject[dialogSplitMessage] : dialogSplitMessage,
                            };
                            var buttonArray = [
                                {
                                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                    click: function () {
                                        if (messageFlag) {
                                            fetchTabData(selectedGridId);
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
function formGrid(tabId, jsnobj, erpDataFlag) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    //var erpDataFlag = jsnobj['erpData'];
    console.log("erpDataFlag::::" + erpDataFlag);
    $("#" + tabId + "_Update").attr("data-view", "GRID-VIEW");
    $("#" + tabId + "_Delete").attr("data-view", "GRID-VIEW");
    $("#" + tabId).show();
    $("#" + tabId + '_TABLE').hide();
    var columns = jsnobj.columns;
    var gridview = jsnobj.view;
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
    gridPropObj = jsnobj.gridPropObj;
    var isParent = 'N';
    var nestedGridRelId = jsnobj.nestedGridRelId;
    var nestedGridId = jsnobj.nestedGridId;
    var renderToolbar = gridConfigObj.renderToolbar;

    var gridInitParamObj = {};
    gridInitParamObj = jsnobj['gridInitParamObj'];
    gridConfigObj.renderToolbar = eval('(' + renderToolbar + ')');


    try {
        if (gridInitParamObj != null && !jQuery.isEmptyObject(gridInitParamObj)) {
            $("#" + tabId).attr("data-gridinitparamobj", JSON.stringify(gridInitParamObj));
        }
        if (jsnobj != null && !jQuery.isEmptyObject(jsnobj)) {
            $("#" + tabId).attr("data-gridResultObj", JSON.stringify(jsnobj));
        }

    } catch (es) {
        console.log(es)
    }

    if (gridInitParamObj != null
            && !jQuery.isEmptyObject(gridInitParamObj)
            && gridInitParamObj['uuu_nestedGridParent'] == 'Y') {
        isParent = 'Y';

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

    var urlRender
            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                var element = $(defaulthtml);
                element.attr("onclick", "openURLInTab('" + value + "')");
                element.addClass("visionSearchUrlLink");
                return element[0].outerHTML;

            };
    var referenceurlRender
            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                var textType = rowData['TYPE'];

                if (textType != '' && textType != null && textType != undefined
                        && textType.toUppercase == 'REF') {
                    var element = $(defaulthtml);
                    element.attr("onclick", "openURLInTab('" + value + "')");
                    element.addClass("visionSearchUrlLink");
                    return element[0].outerHTML;
                }


            };
//    var drpdownGridAndEditRender = function (row, columnfield, value, defaulthtml, columnproperties) {
//        var cellValue = $("#" + tabId).jqxGrid('getcellvalue', row, columnfield);
//        var viewType = "GRID-VIEW";
//        var editable = gridConfigObj.editable;
//        var ddwData = jsnobj.dropDowndData;
//        var ddwObj = ddwData[columnfield];
//        var dependencyparams = ddwObj.dependencyparams;
//        var celwidth = columnproperties.width;
//        $("#" + tabId).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
//        var imageHtml = "<img src='images/iDXPUI5SearchDropdown.png' onclick='visionDropdown(\"" + ddwObj.ddwId.trim() + "\",\"" + dependencyparams + "\",\"" + viewType + "\",\"" + ddwObj.gridId + "\",\"" + columnfield + "\",\"" + row + "\")'>";
////        var cellHtml = '<div class="visionDropdownGrid visiontextinoutDropdown" style="position:relative;">' +
//        var cellHtml = '<div>' +
////                '<input type="text" style="width: 90%;height: 35px;" onkeyPress="getDataBasedonKey()" value="' + value + '" data-column="' + columnfield + '" oninput="updateCellValue(\''+tabId+'\,' + row + ', \'' + columnfield + '\',this)" onkeyup="updateCellValue(\''+tabId+'\,' + row + ', \'' + columnfield + '\',this)" />' +
////                '<input type="text" style="width: 90%;height: 35px;"  value="' + value + '" data-column="' + columnfield + '" oninput="updateCellValue(\''+tabId+'\,' + row + ', \'' + columnfield + '\')" onkeyup="updateCellValue(\''+tabId+'\,' + row + ', \'' + columnfield + '\')" />' +
////                '<input id = "' + tabId + columnfield + 'griddrpdownAndEditValueId' + row + '" type="text" style="width: 90%;height: 35px;" onkeyPress="getDataBasedonKey()"  value="' + value + '" data-column="' + columnfield + '"  onkeyup="updateCellValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
//                '<input id = "' + tabId + columnfield + 'griddrpdownAndEditValueId' + row + '" type="text"  style="width: 90%;height: '+$("#" + tabId).jqxGrid('rowsheight') + 'px;"   value="' + value + '" data-column="' + columnfield + '"  onkeyup="updateCellValueDDW(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
//                imageHtml +
//                '</div>';
//        return cellHtml;
//    };
    var drpdownGridAndEditRender = function (row, columnfield, value, defaulthtml, columnproperties) {
        var cellValue = $("#" + tabId).jqxGrid('getcellvalue', row, columnfield);
        var viewType = "GRID-VIEW";
        var editable = gridConfigObj.editable;
        var celwidth = columnproperties.width;
        var colLabel = columnproperties.text;
        var ddwData = jsnobj.dropDowndData;
        var ddwObj = ddwData[columnfield];
        var dependencyparams = ddwObj.dependencyparams;
        $("#" + tabId).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
        var imageHtml = '<img src="images/iDXPUI5SearchDropdown.png" onclick="visionDropdown(\'' + ddwObj.ddwId.trim() + '\',\'' + dependencyparams + '\',\'' + viewType + '\',\'' + ddwObj.gridId + '\',\'' + columnfield + '\',\'' + row + '\')">';
//        var cellHtml = '<div> ' +
//                '<input id = "' + tabId + columnfield + 'griddrpdownAndEditValueId' + row + '" class ="griddrpdownAndEditValue" type="text" style="width: 90%;height: ' + $("#" + tabId).jqxGrid('rowsheight') + 'px;" autocomplete="off"  value="' + value + '" data-column="' + columnfield + '" data-last-ed-field=\'' + columnfield + '\'  onfocus="selectFocusedRow(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" ' + 
////                ' onkeydown="preventDeletekey(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" '+
//                ' onkeyup="updateCellValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
//                imageHtml +
//                '</div>'; 
//        var cellHtml = '<input id = "' + tabId + columnfield + 'griddrpdownAndEditValueId' + row + '" type="text" style="width: 90%;height: ' + $("#" + tabId).jqxGrid('rowsheight') + 'px;" autocomplete="off"  value="' + value + '" data-column="' + columnfield + '" data-last-ed-field=\'' + columnfield + '\'  onfocus="selectFocusedRow(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" onkeydown="preventDeletekey(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" onkeyup="updateCellValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
//                imageHtml ;

        var onkeyupfunc = ' onkeyup="updateCellValueDDW(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" value="' + value + '"'
//+' onfocus="selectFocusedRow(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" '
                + ' onkeydown="preventDeleteKey(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" '
                + '';
        var cellHtml = "<div  class='visionGridDataAlignInput'>"
                + "<div class='visionGridDataAlignInputField' style='width: 95%'>"
                + "<input type='text'"
                + " id = '" + tabId + columnfield + "griddrpdownAndEditValueId" + row + "'"
                + " data-column-label='" + colLabel + "' "
//                + " onkeyup=propValKeyUp1('" + tbid + "'," + row + ",'none','" + ddwObj.gridId + "','" + columnfield + "',event)"
                + " style=' border:none;width: 95%;height:" + $('#' + tabId).jqxGrid('rowsheight') + "px;' autocomplete='off'"
                + " " + onkeyupfunc + " "
                + "/>"
                + "</div><div class='visionGridDataAlignInputImage' >"
                + " <img src='images/iDXPUI5SearchDropdown.png' style='width: 12px; height: 12px;margin-top: 10px;margin-right: 15px; cursor: pointer;'"
                + " onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "'," + row + ",'" + ddwObj.gridId + row + "')>"
                + "</div>"
                + "</div>";


        return cellHtml;
    };
    var gridTextCellComitRender = function (row, columnfield, value, defaulthtml, columnproperties) {
        var cellValue = $("#" + tabId).jqxGrid('getcellvalue', row, columnfield);
        var viewType = "GRID-VIEW";
        var editable = gridConfigObj.editable;
        var celwidth = columnproperties.width;
        $("#" + tabId).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
        var celwidth1 = $("#" + tabId).jqxGrid('getcolumnproperty', columnfield, 'width');

//        var cellHtml = '<div> <input id = "' + tabId + columnfield + 'griddrpdownAndEditValueId' + row + '" type="text" style="width: ' + celwidth + 'px;height: ' + $("#" + tabId).jqxGrid('rowsheight') + 'px;"   value="' + value + '" data-column="' + columnfield + '"  onkeyup="updateCellValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
        var cellHtml = '<div> <input id = "' + tabId + columnfield + 'griddrpdownAndEditValueId' + row + '" type="text" style="width: 100%;height: ' + $("#" + tabId).jqxGrid('rowsheight') + 'px;"  autocomplete="off" value="' + value + '" data-column="' + columnfield + '"  onfocus="selectFocusedRow(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" ' +
//                ' onkeydown="preventDeletekey(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" ' +
                ' onkeyup="updateCellValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
                '</div>';
        return cellHtml;
    };
    var gridTextCellCheckBoxRender = function (row, columnfield, value, defaulthtml, columnproperties) {
        var cellValue = $("#" + tabId).jqxGrid('getcellvalue', row, columnfield);
        var viewType = "GRID-VIEW";
        var editable = gridConfigObj.editable;
        var celwidth = columnproperties.width;
        $("#" + tabId).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
        if (value != null && value != '' && value != undefined && (value == "Y" || value == "y"))
        {
            var cellHtml = '<label class="customcontainer"> <input id = "' + tabId + columnfield + 'griddcheckBoxRenderId' + row + '" type="checkbox" checked' +
//                 ' style =" border-radius: 50% !important; width: 18px; height: 18px; position: absolute; top: 50%; left: 50%; margin-top: -9px; margin-left: -12px; overflow: visible; cursor: auto; '+
                    ' value="Y" data-column="' + columnfield + '"   onchange="updateCheckBoxValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
                    '<span class="customecheckmark"></span></label>';
        } else {
            var cellHtml = '<label class="customcontainer"> <input id = "' + tabId + columnfield + 'griddcheckBoxRenderId' + row + '" type="checkbox" ' +
//               ' style =" border-radius: 50% !important; width: 18px; height: 18px; position: absolute; top: 50%; left: 50%; margin-top: -9px; margin-left: -12px; overflow: visible; cursor: auto;" '+ 
                    ' value="N" data-column="' + columnfield + '"   onchange="updateCheckBoxValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
                    '<span class="customecheckmark"></span></label>';
        }

        return cellHtml;
    };


    var headerTooltipRenderer = function (element) {
        $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
            position: 'bottom-right',
            showArrow: false, content: $(element).text()});
    }
    var descrenderListWise = function (row, columnfield, value, defaulthtml, columnproperties) {

        return '<div class="jqx-grid-cell-left-align" style="white-space: pre-line;">' + value + '</div>';
    };

    var coldataWarpText = function (row, columnfield, value, defaulthtml, columnproperties) {
        var colwidth = $('#' + tabId).jqxGrid('getcolumnproperty', columnfield, 'width');
        var scrollPosition = $('#' + tabId).jqxGrid('scrollposition');
        $('#idsearchwraptempContainerdiv').css("width", colwidth);
        $('#idsearchwraptempContainerdiv').html(value);
        var textHeight = $("#idsearchwraptempContainerdiv").outerHeight(true);
        var textHeight1 = textHeight / 1.5;
        try {
            $('#idsearchwraptempContainerdiv').html("");
        } catch (w) {
            $('#idsearchwraptempContainerdiv').html("");
        }
        var gridrowsheight = $('#' + tabId).jqxGrid('rowsheight');

        var gridrowsheight1 = $('#' + tabId).jqxGrid('getrowheight', row);
        var gridrowsheight = $('#' + tabId).jqxGrid('rowsheight');
        if (gridrowsheight1 != null && gridrowsheight1 != ''
                && gridrowsheight1 != 'undefined'
                && gridrowsheight1 != undefined
                ) {

        } else {
            gridrowsheight1 = gridrowsheight;
        }

        if (textHeight1 > gridrowsheight1) {
            $('#' + tabId).jqxGrid('setrowheight', row, textHeight / 1.5);
        }
        $('#' + tabId).jqxGrid('scrolloffset', scrollPosition.top, scrollPosition.left);

        var uuu_columnstyle = "white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;";
        var divClass = "jqx-grid-cell-left-align";
        if (columnInitParamsObj != null && !jQuery.isEmptyObject(columnInitParamsObj)) {
            var selectedColumnInitParamObj = columnInitParamsObj[columnfield];
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


    var attachmentImageRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {

        if (value != "" && value != null)
        {
            if (labelObject['Click to view the attachment'] != null && labelObject['Click to view the attachment'] != '' && labelObject['Click to view the attachment'] != undefined) {
                return  "<img title='" + labelObject['Click to view the attachment'] != null ? labelObject['Click to view the attachment'] : 'Click to view the attachment' + "' style='cursor:pointer;' onclick=viewAttachment('" + tabId + "'," + row + ",'" + tableName + "')  src='" + value + "' class='imageStyle visionTemplete'  id='dtlul_" + row + "' >";
            } else
            {
                return  "<img title='Click to view the attachment' style='cursor:pointer;' onclick=viewAttachment('" + tabId + "'," + row + ",'" + tableName + "')  src='" + value + "' class='imageStyle visionTemplete'  id='dtlul_" + row + "' >";
            }


        } else {
            return "<div class='visionCoFileImage'>"
                    + "<input name='colFileImage' type='file' id ='visionColFileId' style ='display:none'/>"
                    + "<img src='images/attach_pin_icon_blue.png' onclick=showBrowseIdButton('" + tabId + "') style='cursor:pointer;margin-left: 30%;'/>"
                    + "</div>";

        }
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
    var dataSheetRendered = function (element) {
        $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
            position: 'bottom-right',
            showArrow: false, content: $(element).text()});
    }
    var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
        var cellValue = $("#" + tabId).jqxGrid('getcellvalue', row, columnfield);

        var viewType = "GRID-VIEW";
        var editable = gridConfigObj.editable;
        if (columnInitParamsObj != null && columnInitParamsObj != '' && columnInitParamsObj != undefined)
        {
            var columnParams = columnInitParamsObj[columnfield];
            if (columnParams != null && columnParams != '' && columnParams != undefined) {
                var editableFlag = columnParams['uuu_editable'];
                var hiddenType = $('#' + tabId).jqxGrid('getcellvalue', row, tabId + "_HIDDEN");
            }
        }
        if (editable) {
            if (editableFlag != null && editableFlag != '' && editableFlag == "N")
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
            datafields[i].values.source = listBoxAdapter.records;
            var changeFunObj = datafields[i].values;
            if (changeFunObj != null && changeFunObj['onchangeFunName'] != null && changeFunObj['onchangeFunName'] != '') {
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
    gridConfigObj.renderToolbar = eval('(' + renderToolbar + ')');
    try {
        $("#" + tabId).remove();
    } catch (e) {

    }
    if (erpDataFlag != 'Y') {

        if (gridInitParamObj['uuu_gridWrapperDivFlag'] != null && gridInitParamObj['uuu_gridWrapperDivFlag'] != ''
                && gridInitParamObj['uuu_gridWrapperDivFlag'] != 'null' && gridInitParamObj['uuu_gridWrapperDivFlag'] != 'undefined'
                && gridInitParamObj['uuu_gridWrapperDivFlag'] != undefined && gridInitParamObj['uuu_gridWrapperDivFlag'] == "Y") {
            $(".formGridWrapperClass").remove();
            $('#' + tabId + "_TABLE").after('<div class="formGridWrapperClass"><div id="' + tabId + '"></div></div>');
        } else {
            $('#' + tabId + "_TABLE").after("<div id='" + tabId + "'></div>");
        }
    } else {
        $("#" + tabId + "_FORM").after("<div id='" + tabId + "'></div>");
    }
//    if (fioriThemeCheck) {
//        $(".visionRegisterMaterialTableTab").hide();
//        $("#" + tabId).closest(".visionRegisterMaterialTableTab").show();
//    }
//    var pagerMode = $("#" + tabId).jqxGrid('pagermode');
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
            $("#" + tabId).jqxGrid('endupdate');

        }

    } catch (e) {
    }

//    $(".griddrpdownAndEditValue").addEventListener('keydown', function(event) {
//    var key = event.key; // const {key} = event; ES6+
//    if (key === "Delete") {
//        return false;
//    }
//});

    $('#' + tabId).on('celldoubleclick', function (event) {
        var args = event.args;
        var dataField = args.datafield;
        var dataField1 = args.text;
        var rowIndex = args.rowindex;
        var cellValue = args.value;
        var isEditable = $('#' + tabId).jqxGrid('getcolumnproperty', dataField, 'editable');
        var checkBoxColFlag = "N";
        console.log("isEditable::::" + isEditable)
        try {
            if (columnInitParamsObj != null && columnInitParamsObj != '' && columnInitParamsObj != undefined)
            {
                var columnParams = columnInitParamsObj[dataField];
                if (columnParams != null && columnParams != '' && columnParams != undefined) {
                    checkBoxColFlag = columnParams['uuu_checkBoxCol'];
                }
            }
        } catch (e) {
            checkBoxColFlag = "N";

        }


        var editable = gridConfigObj.editable;
        if ((!isEditable || !editable) && checkBoxColFlag == 'N') {
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

    $("#" + tabId).on('cellclick', function (event) {
        try {

            if (columnInitParamsObj != null && columnInitParamsObj != '' && columnInitParamsObj != undefined)
            {
                var args = event.args;
                var dataField = args.datafield;
                var dataField1 = args.text;
                var rowIndex = args.rowindex;
                var cellValue = args.value;
                var columnParams = columnInitParamsObj[dataField];
                if (columnParams != null && columnParams != '' && columnParams != undefined) {
                    var checkBoxColFlag = columnParams['uuu_checkBoxCol'];
                    var mocrNavigateColumnNameFlag = columnParams['uuu_mocrNavigateColumnNameFlag'];
                    var mocrTreeSearchColumnNameFlag = columnParams['uuu_mocrTreeSearchColumnNameFlag'];
                    if (mocrNavigateColumnNameFlag != null && mocrNavigateColumnNameFlag != '' && mocrNavigateColumnNameFlag != undefined
                            && mocrNavigateColumnNameFlag.startsWith("Y:"))
                    {
                        var mocrNavigateFlag = mocrNavigateColumnNameFlag.split(":")[0];
                        var mocrNavigateColName = mocrNavigateColumnNameFlag.split(":")[1];
                        if (mocrNavigateFlag && mocrNavigateColName != null && mocrNavigateColName != ''
                                && mocrNavigateColName != undefined && mocrNavigateColName == dataField) {
                            $.ajax({
                                type: "post",
                                traditional: true,
                                dataType: 'json',
                                url: "getDXPAssetTreeTabFormData",
                                cache: false,
                                data: {
                                    columnName: dataField,
                                    gridId: tabId,
                                    recordNo: cellValue
                                },
                                success: function (response, status, xhr) {
                                    stopLoader();
                                    if (response != null && !jQuery.isEmptyObject(response)) {
                                        var basicData = response['basicData'];
                                        var gridObj = response['gridObj'];
                                        var hrefColumn = response['hrefColumn'];
                                        if (basicData != null && !jQuery.isEmptyObject(basicData)
                                                && gridObj != null && !jQuery.isEmptyObject(gridObj))
                                        {
                                            showNavigateToTabForm(hrefColumn, basicData, 'form', tabId, "", 0, "N", gridObj, "dxpMOCRPendingTreeFormDiv");
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
                    if (checkBoxColFlag != null && checkBoxColFlag != '' && checkBoxColFlag != undefined
                            && checkBoxColFlag == 'Y') {
                        var lastcelleditfield = $("#" + tabId).attr('data-last-ed-field');
                        var lastcelleditrow = $("#" + tabId).attr('data-last-ed-row');
                        $("#" + tabId).jqxGrid('endcelledit', lastcelleditrow, lastcelleditfield, false);
                        let checkBoxinputdivId = tabId + dataField + 'griddcheckBoxRenderId' + rowIndex;
                        try {
                            var el = document.getElementById(checkBoxinputdivId);
                            if (el.checked) {
                                el.checked = false;
                                updateCheckBoxValue(tabId, rowIndex, dataField, 'N');
                            } else {
                                el.checked = true;
                                updateCheckBoxValue(tabId, rowIndex, dataField, 'Y');
                            }
                        } catch (e) {

                        }

                    }
                    if (mocrTreeSearchColumnNameFlag != null && mocrTreeSearchColumnNameFlag != '' && mocrTreeSearchColumnNameFlag != undefined
                            && mocrTreeSearchColumnNameFlag.startsWith("Y:"))
                    {
                        var mocrTreeSearchFlag = mocrTreeSearchColumnNameFlag.split(":")[0];
                        var mocrTreeSearchField = mocrTreeSearchColumnNameFlag.split(":")[1];
                        if (mocrTreeSearchFlag && mocrTreeSearchField != null && mocrTreeSearchField != ''
                                && mocrTreeSearchField != undefined) {
                            var rowdata = $('#' + tabId).jqxGrid('getrowdata', event.args.rowindex);
                            $("#treeMOCRSearchInput").val(rowdata[mocrTreeSearchField]).trigger("keyup");
                        }
                    }

                }
            } else {
                var lastcelleditfield = $("#" + tabId).attr('data-last-ed-field');
                var lastcelleditrow = $("#" + tabId).attr('data-last-ed-row');
                $("#" + tabId).jqxGrid('endcelledit', lastcelleditrow, lastcelleditfield, false);
            }
        } catch (e) {

        }
    });
    var checkBoxFlag = false;
    $("#" + tabId).on('cellvaluechanged', function (event)
    {
        var args = event.args;
        var dataField = args.datafield;
        var newCheckValue = args.newvalue;
        var rowIndex = args.rowindex;
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
        let gridInitStr = localStorage.getItem("selectedGridInitParamObj");
        if (gridInitStr != null && gridInitStr != undefined && gridInitStr != "") {
            var gridInitObj = JSON.parse(gridInitStr);

            if (gridInitObj['uuu_attachmentDefaultFlagCheck'] != null && gridInitObj['uuu_attachmentDefaultFlagCheck'] != undefined && gridInitObj['uuu_attachmentDefaultFlagCheck'] != "" && gridInitObj['uuu_attachmentDefaultFlagCheck'] == "Y")
            {
                if (dataField === "DEFAULT_FLAG" && newCheckValue === true) {
                    var rows = $("#" + tabId).jqxGrid('getrows');
                    for (var i = 0; i < rows.length; i++) {
                        if (i !== rowIndex && (rows[i][dataField] === "true" || rows[i][dataField] === true)) {
                            $("#" + tabId).jqxGrid('setcellvalue', i, dataField, false);
                            $("#" + tabId).jqxGrid('setcellvalue', i, "ATTACH_COLUMN15", false);
                        } else {
                            $("#" + tabId).jqxGrid('setcellvalue', i, "ATTACH_COLUMN15", true);
                        }
                    }
                }
            }
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
        var rowData = JSON.parse(JSON.stringify(args.row));
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

        $("#" + tabId + "_Update").show();
        $("#" + tabId).jqxGrid('selectrow', rowBoundIndex);
    });
//    $("#" + tabId).on('cellbeginedit', function (event)
//    {
//        $("#" + tabId).attr('data-last-ed-field', event.args.datafield);
//        $("#" + tabId).attr('data-last-ed-row', event.args.rowindex);
//        // event arguments.
//        var args = event.args;
//        // column data field.
//        var dataField = event.args.datafield;
//        // row's bound index.
//        var rowBoundIndex = event.args.rowindex;
//        // cell value
//        var value = args.value;
//        cellOldValue = value;
//        // cell old value.
//        var oldvalue = args.oldvalue;
//
//        $("#" + tabId).jqxGrid('selectrow', rowBoundIndex);
//
//        // row's data.
//        var rowData = args.row;
//        var columntype = args.columntype;
//
//        try {
//            if (columntype == "dropdownlist")
//            {
//                fieldVal = rowData[dataField.replace("_DLOV", "")];
//            }
//        } catch (e) {
//        }
//        var columnType = event.args.columntype;
//        if (columnInitParamsObj != null && columnInitParamsObj != '' && columnInitParamsObj != undefined)
//        {
//            var columnParams;
//            if (columnType == 'dropdownlist')
//            {
//                columnParams = columnInitParamsObj[dataField.replace("_DLOV", "")];
//            } else
//            {
//                columnParams = columnInitParamsObj[dataField];
//            }
//            if (columnParams != null && columnParams != '' && columnParams != undefined) {
//                var editable = columnParams['uuu_editable'];
//                if (editable != null && editable != '' && editable == "N")
//                {
//                    var hiddenType = $('#' + tabId).jqxGrid('getcellvalue', rowBoundIndex, tabId + "_HIDDEN");
//                    if (hiddenType != null && hiddenType != '' && hiddenType != undefined && hiddenType != "INSERT") {
//                        $("#" + tabId).jqxGrid('endcelledit', rowBoundIndex, dataField, true);
//                        if (columnType == "checkbox")
//                        {
//                            checkBoxFlag = true;
//                        }
//                    }
//                }
//            }
//        }
//
//        $("#" + tabId + "_Update").show();
//        //   //console.log("cell began event");
//    });

    $("#" + tabId).bind('rowselect', function (event) {
        var selectedrowindexes = $("#" + tabId).jqxGrid('selectedrowindexes');

        var rwindex = event.args.rowindex;
        if (selecteIndexes.indexOf(rwindex) == -1) {
            selecteIndexes.push(rwindex)
        }
        var column = event.args.column;
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
        if (onChangeFunctions != null) {
            var functionName = onChangeFunctions[currentDataField];
            if (functionName != null) {
                functionName = functionName.replace("'rowIndex'", currentRowIndex);
                eval(functionName);
            }
        }
    });
    $("#" + tabId).bind('rowunselect', function (event) {
        var selectedrowindexes = $("#" + tabId).jqxGrid('selectedrowindexes');
        var rwindex = event.args.rowindex;
        selecteIndexes.pop(rwindex)
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
        if (tabUnselectFlag == 'Y') {  //03-01-2023 som
            var rowIndexData = $('#' + tabId).jqxGrid('getselectedrowindexes');
            for (var r = 0; r < rowIndexData.length; r++) {
                $('#' + tabId).jqxGrid('selectrow', rowIndexData[r]);
            }
            tabUnselectFlag = 'N'
        }
    });


    $("#" + tabId).on('rowclick', function (event) {

        $("#" + tabId + '_Update').show();
        $("#" + tabId + '_Delete').show();
    });
    $("#" + tabId + "_MO_COUNT").text("");
    $("#" + tabId + "_ICON").hide();

//    try{
//         if (gridview != null && gridview != '' && gridview != undefined && gridview == "GRID-VIEW") {
//             $("#" + tabId).jqxGrid('selectrow', 0);
//         }
//        
//    }catch(eg){
//        
//    }
}// end of formGrid()
function navigateToFormSearch(datafield, data, redirectType, hrefGridId, panelId, baskettype, searchGridDivId, selectedTabId, selectingrowindex, showtabFlag) {
    var hrefColumn = "";
    try {
        var hrefColumn = $("#hrefColumn").val();
    } catch (ee) {
        hrefColumn = "";
    }
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");

    $("#currentGridId").val(hrefGridId);
    try {
        var selectedGridObjStr = $("#" + searchGridDivId).attr("data-gridResultObj");
        var responseObj = JSON.parse(selectedGridObjStr);
        var hrefObj = responseObj.hrefObj;

    } catch (e) {
    }
    console.log("hrefColumn:::::" + hrefColumn);
    //  var datafield = column.datafield;
    if (datafield != null && (datafield == hrefColumn || datafield == "show_detail")) {
        showLoader();
        var navigationGridId = "";
        firstPanelShowFlag = true;
        secondPanelShowFlag = true;
        $('.viewFormDiv').removeClass('active');
        $('.viewFormBasketDiv').removeClass('active');
        $('.viewClassDiv').removeClass('active');
        $('.viewClassBasketDiv').removeClass('active');
        var items = {};
        var linkedColumns = '';
        if (hrefObj != null && hrefObj != undefined && hrefObj != '') {
            linkedColumns = hrefObj['linkedColumns'];
        } else {
            linkedColumns = $("#linkedColumns").val();
        }
        linkedColumns.replace(/(^,)|(,$)/g, "");

//        var linkedColumns = "RECORD_NO,INSTANCE,BUSINESS_UNIT";
//        $("#linkedColumns").val(linkedColumns);
        if (linkedColumns != null && linkedColumns != '') {
            for (var key in data) {
                if (key.lastIndexOf("PLANT") > -1) {
                    items[key] = data[key];
                }
                if (linkedColumns.lastIndexOf(key) > -1) {

                    var value = data[key];
                    //    console.log("key::::" + key + ":::value::::" + value);
                    value = value.replace(/\s/gi, "_");
                    value = value.replace(/[#]/g, "_");
                    //  console.log("key::::" + key + ":::value::::" + value);
                    items[key] = value;
                }
            }
        }
        var stripValue = $("#stripValue").val();
        if (stripValue == null || stripValue != undefined || stripValue == '') {
            stripValue = "CONCEPT_ID,#;";
            $("#stripValue").val(stripValue);
        }
        var stripValueObjArray = [];
        if (stripValue != null) {
            var stripValObj = stripValue.split(";");
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

        }

        var hiddenObjStr = $("#hiddenObj").val();
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
                        var hiddenVal = data[hiddenIds[1]];
                        //alert("hiddenIds[1]:::"+hiddenIds[1]);
                        //  alert("hiddenVal:::"+hiddenVal);
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
        var panelId = "";
        var searchgrid = "";
        var currentGridId = $("#currentGridId").val();
        var currentDomain = $("#currentDomain").val();
        var operationName = $("#operationName").val();

//        var panelId = $("#panelId").val();
//        if (panelId == null || panelId == '' || panelId == undefined) {
//            panelId = responseObj.panelId;
//        }

        var panelId = '';
        try {
            if (panelId == null || panelId == '' || panelId == undefined) {
                panelId = data['panelId'];
            }
        } catch (e) {
        }
        try {
            if (panelId == null || panelId == '' || panelId == undefined) {
                panelId = responseObj.panelId;
            }
        } catch (e) {
        }
        try {
            if (panelId == null || panelId == '' || panelId == undefined) {
                panelId = $("#panelId").val();
            }
        } catch (e) {
        }

//        var currentGridId = $("#currentGridId").val();
        var currentDomain = $("#currentDomain").val();
        var operationName = $("#operationName").val();
        if (currentGridId == null || currentGridId == '' || currentGridId == undefined) {

            searchgrid = hrefGridId;
        } else {
            searchgrid = $("#currentGridId").val();
        }

//        $("#classConceptId").val(data['CONCEPT_ID']);  
        $("#panelId").val(panelId);
        items.stripValue = stripValueObjArray;
        items.imageTable = $("#imageTable").val();
        items.imageTableColumn = $("#imageTableColumn").val();
        items.imageColumn = $("#imageColumn").val();
        items.CONCEPT_ID = data['CONCEPT_ID'];
        items.linkedColumns = linkedColumns;
        items.gridId = searchgrid;
        items.panelId = panelId;

        if (data['TERM'] != null && data['TERM'] != '') {
            items.TERM = data['TERM'];
        }
        if (data['CLASS_TERM'] != null && data['CLASS_TERM'] != '') {
            items.CLASS_TERM = data['CLASS_TERM'];
        }
        items.BUSINESS_UNIT = data['BUSINESS_UNIT'];
        items.INSTANCE = data['INSTANCE'];
        items.selectingrowindex = data['boundindex'];
        items.showFlag = $("#showFlag").val();
//        items.tabId = "MM_PENDING_REQ_REG_MGR_TAB";
//    var datainformation = $('#' + items.gridId).jqxGrid('getdatainformation');
//    var rowscount = datainformation.rowscount;
//    items.selectingrowindex = selectingrowindex;
//    items.rowscount = rowscount;
        var itemsstring = JSON.stringify(items);
        $("#itemsstring").val(itemsstring);
        if (datafield == hrefColumn) {
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: "formData",
                cache: false,
                data: {
                    items: itemsstring,
                    data: JSON.stringify(data),
                    fioriThemeFlag: fioriThemeCheck,
                },
                success: function (response) {
                    stopLoader();
                    var form = response['formStr'];

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
                    $("#ssDuplCheckEnableFlag").val(DuplCheckEnableflag);
                    $("#hrefColumn").val(hrefColumn);
//             var tapForm = form['topForm'];
//            var formObj = {};
//            formObj = 
                    //fourthDxpSplitterData
                    $(".dxpGridHideShow").show();
//            $("#fourthDxpSplitter").show();
//            $("#thirdDxpSplitter").show();
                    try {
                        if ($("#dxpTabs").is(":visible")) {

                        } else {
                            toggleTabsAndMenus(event);
                        }
                    } catch (ee) {
                    }
                    var dxpAdavanceSearchOptions = $('#dxpAdavanceSearchOptions').val();
                    if (dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != undefined
                            && dxpAdavanceSearchOptions != '' && (dxpAdavanceSearchOptions == 'C' || dxpAdavanceSearchOptions == 'P' || dxpAdavanceSearchOptions == 'PRA')) {
//                $("#searchresultsSplitter").html(form);
                        $("#dxpFormContent").html(form);
                    } else if (dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != undefined
                            && dxpAdavanceSearchOptions != '' && (dxpAdavanceSearchOptions == 'S' || dxpAdavanceSearchOptions == 'D' ||
                                    dxpAdavanceSearchOptions == 'PR')) {
//                $("#fourthDxpSplitter").html(form);
                        $("#dxpFormContent").html(form);
                    } else {
//                $("#fourthDxpSplitter").html(form);
                        $("#dxpFormContent").html(form);
                    }
                    $(".materialBasketClass").show();
//                    var basketname = $("#basketName").val();
//                    if(basketname !='' && basketname !=undefined){
//                       $(".materialBasketClass").text(basketname); 
//                    }else{
//                           $(".materialBasketId").html("Search View"); 
//                    } 
                    let formDataObj = {};
                    formDataObj.datafield = datafield;
                    formDataObj.data = data;
                    formDataObj.redirectType = redirectType;
                    formDataObj.gridId = searchgrid;
                    formDataObj.selectedTabId = selectedTabId;
                    formDataObj.selectingrowindex = selectingrowindex;
                    $('#dxpVisionFormRefreshDivSpanImg').attr('data-attr', JSON.stringify(formDataObj));
                    $('#dxpVisionFormDataHidden').val(JSON.stringify(formDataObj));
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
                    if (data['SOURCE'] == "CHANGE") {
                        if (data['REQ_NUMBER'] != undefined && data['REQ_NUMBER'] != null) {

                            $("#accordion").find(".ui-state-disabled").hide();
                            for (let a = 2; a <= 15; a += 2) {
                                b = a + 1;
//                    $("#regRorm" + b).prepend("<b style=\"font-weight:700\">OLD Data.</b> ");
                                $("#regRorm" + b).appendTo($("#regRorm" + a));
                                $("#regRorm" + b).show();
                            }
                        }
                    }
                    saveOldPanelData();
                    firstPanelShowFlag = false;
                    showSelectedTabContent(event, 'dxpFromTab', 'dxpFormContent', 'View Form', 'N');
                    validWorkflow();
//                    $(".visionRegisterMaterialAccordians").find(".ui-accordion-header").addClass('particulorAccDiv');
//                    $("#visionRegistartionGenericAccordionSpan img").addClass('accordianDefultImg');
//
//
//                    $('.particulorAccDiv').on("mouseover", function () {
//                        $('.particulorAccDiv img').map(function () {
//                            var findAttrt = $(this).attr('src');
//                            var nn = findAttrt.replaceAll('W', '');
//                            $(this).attr('src', nn);
//                        });
//                        var findAttr = $(this).find('.accordianDefultImg').attr('src');
//                        var findedAttr = "";
//                        if (findAttr != null && findAttr != undefined && findAttr != '') {
//                            findedAttr = findAttr.split('.');
//                        }
//                        if (findedAttr != null && findedAttr != undefined && findedAttr != '') {
//                            var srcFileName = findedAttr[0] + 'W.' + findedAttr[1];
//                            $(this).find('.accordianDefultImg').attr('src', srcFileName);
//                        }
//
//
//                    });
//
//                    $('.particulorAccDiv').on("mouseout", function () {
//                        $('.particulorAccDiv img').map(function () {
//                            var findAttrt = $(this).attr('src');
//                            var nn = findAttrt.replaceAll('W', '');
//                            $(this).attr('src', nn);
//                        });
//                    });
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
//                    $(".ccGuideInfo").mouseover(function () {
//                        $('#colorBlueID').remove();
//                        var htmlData = "<ul class=\"color_IndicatioUl\"><li class=\"\"><span class=\"mfGuideColorIndex\"><svg  height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#000fff\"></svg></span><span class=\"mfGuideColorIndexText\"> AutoGenerate</span></li>"
//                                + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#ff1a1a\"></svg></span><span class=\"mfGuideColorIndexText\"> Mandatory </span></li>"
//                                + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#688280\"></svg></span><span class=\"mfGuideColorIndexText\"> Optional </span></li>"
//                                + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#32a852\"></svg></span><span class=\"mfGuideColorIndexText\"> AutoPopulate </span></li></ul>";
//                        $(this).append('<div id = "colorBlueID"></div>');
//                        $('#colorBlueID').html(htmlData);
//                        $('#colorBlueID').jqxPopover({
//                            showArrow: true,
//                            width: 115,
//                            height: 120,
//                            showCloseButton: false,
//                            position: 'right',
//                            selector: $(this)
//                        });
//                        setTimeout(function () {
//                            $("#colorBlueID").jqxPopover('open');
//                        }, 5000);
//                    })
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

//                    $(".ccGuideInfo").mouseout(function () {
//                        $("#colorBlueID").jqxPopover('close');
//                        $('#colorBlueID').remove();
//                    });
                    $(".defaultShowCards").hide();
                    $("#accdiv h3").click(function () {
                        var a = event.target.id;
                        let self = $(this).offset().top;
                        console.log(self);
                        setTimeout(function () {
                            $('.dxpContentAccPageClass').animate({scrollTop: self - 80}, 'swing');
                        }, 310);
                    });
                    if (fioriThemeCheck) {
                        $(document).ready(function () {
                            $('#allTabListMainWrapperId ul.fioriformTabUlListclass li:first').click();
                            $('#allTabListMainWrapperId ul.fioriformTabUlListclass li:first').addClass("fioriHighlightTab");
                        });
                    }


                },
                error: function (e) {
                    sessionTimeout(e);
                }// Error function in Ajax
            });
        } else if (datafield == "show_detail") {
            showPdfData(gridId, selectedTabId);
        }
    }
//    else if (datafield != null && gridId != null && gridId != '' && (datafield == 'CONTENT' || datafield == 'TERM')) {
////itemRegisterForm
//        console.log("Template Results Clicked::" + datafield);
//        var items = {};
//        if (data != null) {
//            var linkedColumns = "CONTENT,TERM,CLASS,CLASS_TERM,DEFINITION,uid,UID,HIDDEN_GRID_ID";
////            var linkedColumns = "CONTENT,TERM,CLASS,CLASS_TERM,CNT,DEFINITION,uid,UID,HIDDEN_GRID_ID";
//            for (var key in data) {
//                if (linkedColumns.lastIndexOf(key) > -1) {
//
//                } else {
//                    var value = data[key];
//                    if (value != null && value != '') {
//                        //  value = value.replace(/\s/gi, "_");
//                        // value = value.replace(/[#]/g, "_");
//                    }
//
//                    items[key] = value;
//                }
//            }
//            items['gridId'] = gridId;
//            var itemsstring = JSON.stringify(items);
//            $("#items").val(itemsstring);
//            $.ajax({
//                type: "post",
//                traditional: true,
//                dataType: 'json',
//                url: "itemRegisterForm",
//                cache: false,
//                data: {
//                    items: itemsstring,
//                    data: JSON.stringify(data)
//                },
//                success: function (response) {
//                    stopLoader();
//                    var form = response['formStr'];
//                    var baskettype = response['baskettype'];
//                    $("#dxpFormContent").html(form);
//                    $("#materialBasketId").html(baskettype);
//                    $("#materialBasketId").show();
//                    showSelectedTabContent(null, 'dxpFromTab', 'dxpFormContent','','N')
//                    //$("#fourthDxpSplitter").html(form);
//                    // $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
//                    $(".formDxpDuplicates").hide();
//                    $(".formDxpDuplicates").html("");
//                    if (form != null && form != undefined && form != '') {
//                        registerClickFunction();
//
//                        stopLoader();
//                    } else {
//                        var message = response['message'];
//                        var modalObj = {
////                    title: 'Message',
//                            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
//                            body: message
//                        };
//                        var buttonArray = [
//                            {
//                                text: 'Ok',
//                                click: function () {
//                                    $('#loginModel').modal('show');
//                                },
//                                isCloseButton: true
//                            }
//
//                        ];
////               $('#loginModel').draggable();
////                $('#loginModel').resizable();
//                        modalObj['buttons'] = buttonArray;
//                        createModal("dataDxpSplitterValue", modalObj);
//                    }
//                    $("#registration").inlineFormGuider({
//                        submitButton: "#Register",
//                        togglButtonContainer: ".visionFormTitleName"
//                    });
//
//                },
//                error: function (e) {
//                    sessionTimeout(e);
//                }// Error function in Ajax
//            });
////            $("#submitForm").attr("target", "thatframe");
////            $("#submitForm").attr("action", "itemRegisterForm");
////            $("#submitForm").submit();
//        }
//    }


}
function navigateToForm(datafield, data, redirectType, gridId, selectedTabId, selectingrowindex, showtabFlag, divId, validateFlag) {
    var hrefColumn = "";
    try {
        var hrefColumn = $("#hrefColumn").val();
    } catch (ee) {
        hrefColumn = "";
    }
    if (!(divId != null && divId != '' && divId != undefined))
    {
        divId = 'dxpFormContent'
    }
    $("#currentGridId").val(gridId);
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");

//    try {
//        if ($("#dxpTabs").is(":visible")) {
//
//        } else {
//            toggleTabsAndMenus(event);
//        }
//    } catch (ee) {
//    }
    try {
        var selectedGridObjStr = $("#" + gridId).attr("data-gridResultObj");
        var responseObj = JSON.parse(selectedGridObjStr);
        var hrefObj = responseObj.hrefObj;
        var hrefColumn1 = hrefObj['hrefColumn'];
        if (hrefColumn1 != null && hrefColumn1 != undefined && hrefColumn1 != '') {
            hrefColumn = hrefColumn1;
        }
    } catch (e) {
    }
    var basicData = {};

    if (responseObj)
        console.log("hrefColumn:::::" + hrefColumn);
    //  var datafield = column.datafield;
    if (datafield != null && (datafield == hrefColumn || datafield == "show_detail")) {
        showLoader();
        var navigationGridId = "";
        firstPanelShowFlag = true;
        secondPanelShowFlag = true;
        $('.viewFormDiv').removeClass('active');
        $('.viewFormBasketDiv').removeClass('active');
        $('.viewClassDiv').removeClass('active');
        $('.viewClassBasketDiv').removeClass('active');
        var items = {};
        var linkedColumns = '';
        var datalinkedColumns = '';
        try {
            datalinkedColumns = data['linkedColumns'];
        } catch (e) {
            datalinkedColumns = '';
        }
        if (hrefObj != null && hrefObj != undefined && hrefObj != '') {
            linkedColumns = hrefObj['linkedColumns'];
        } else
        {
            if (datalinkedColumns != null && datalinkedColumns != undefined && datalinkedColumns != '') {
                linkedColumns = datalinkedColumns;
            } else {
                linkedColumns = $("#linkedColumns").val();
            }

        }
        linkedColumns.replace(/(^,)|(,$)/g, "");

//        var linkedColumns = "RECORD_NO,INSTANCE,BUSINESS_UNIT";
//        $("#linkedColumns").val(linkedColumns);
        if (linkedColumns != null && linkedColumns != '') {
            for (var key in data) {
                if (key.lastIndexOf("PLANT") > -1) {
                    items[key] = data[key];
                }
                if (linkedColumns.lastIndexOf(key) > -1) {

                    var value = data[key];
                    //    console.log("key::::" + key + ":::value::::" + value);
                    value = value.replace(/\s/gi, "_");
                    value = value.replace(/[#]/g, "_");
                    //  console.log("key::::" + key + ":::value::::" + value);
                    items[key] = value;
                }
            }
        }
        var stripValue = $("#stripValue").val();
        if (stripValue == null || stripValue != undefined || stripValue == '') {
            stripValue = "CONCEPT_ID,#;";
            $("#stripValue").val(stripValue);
        }
        var stripValueObjArray = [];
        if (stripValue != null) {
            var stripValObj = stripValue.split(";");
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

        }

        var hiddenObjStr = $("#hiddenObj").val();
        if (hiddenObjStr != null && hiddenObjStr != '' && hiddenObjStr != undefined) {
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
//                                                items[columnsArray[i]] = encodeURIComponent(hiddenVal);

                            }
                        }

                    }
                } else {
                    //alert("Value is null");
                }
            }
        }

        var panelId = '';
        try {
            if (panelId == null || panelId == '' || panelId == undefined) {
                panelId = data['panelId'];
            }
        } catch (e) {
        }
        try {
            if (panelId == null || panelId == '' || panelId == undefined) {
                panelId = responseObj.panelId;
            }
        } catch (e) {
        }
        try {
            if (panelId == null || panelId == '' || panelId == undefined) {
                panelId = $("#panelId").val();
            }
        } catch (e) {
        }
        var formId = '';
        try {
            if (formId == null || formId == '' || formId == undefined) {
                formId = data['formId'];
            }
        } catch (e) {
        }
        try {
            if (formId == null || formId == '' || formId == undefined) {
                formId = responseObj.formId;
            }
        } catch (e) {
        }
        try {
            if (formId == null || formId == '' || formId == undefined) {
                formId = $("#formId").val();
            }
        } catch (e) {
        }
//        var currentGridId = $("#currentGridId").val();
        var currentDomain = $("#currentDomain").val();
        var operationName = $("#operationName").val();
        if (gridId == null || gridId == '' || gridId == undefined) {
            gridId = $("#currentGridId").val();
        }
//        $("#classConceptId").val(data['CONCEPT_ID']);  
        $("#panelId").val(panelId);
        $("#formId").val(formId);
        items.stripValue = stripValueObjArray;
        items.imageTable = $("#imageTable").val();
        items.imageTableColumn = $("#imageTableColumn").val();
        items.imageColumn = $("#imageColumn").val();
        items.CONCEPT_ID = data['CONCEPT_ID'];
        items.linkedColumns = linkedColumns;
        items.gridId = gridId;
        items.panelId = panelId;

        if (data['TERM'] != null && data['TERM'] != '') {
            items.TERM = data['TERM'];
        }
        if (data['CLASS_TERM'] != null && data['CLASS_TERM'] != '') {
            items.CLASS_TERM = data['CLASS_TERM'];
        }
        items.BUSINESS_UNIT = data['BUSINESS_UNIT'];
        items.INSTANCE = data['INSTANCE'];
        items.selectingrowindex = data['boundindex'];
        items.showFlag = $("#showFlag").val();
        items['VENDOR_NAME'] = data['SUPPLIER_NAME'];
        items['OldRole'] = localStorage.getItem("OldRole");
        data['OldRole'] = localStorage.getItem("OldRole");

//        items.tabId = "MM_PENDING_REQ_REG_MGR_TAB";
//    var datainformation = $('#' + items.gridId).jqxGrid('getdatainformation');
//    var rowscount = datainformation.rowscount;
//    items.selectingrowindex = selectingrowindex;
//    items.rowscount = rowscount;
        items['gridId'] = gridId;
        var itemsstring = JSON.stringify(items);
        $("#itemsstring").val(itemsstring);
        if (fioriThemeCheck) {
            try {
                var basketTitle = responseObj['gridName']
                var backClass = $(event.currentTarget).attr("class");
                firorMenuPopoverText(basketTitle);
                if (!(backClass != null && backClass != undefined) || !backClass.includes("Back")) {
                    var firorDomainObj = {};
                    firorDomainObj[basketTitle] = `navigateToForm(${datafield}, ${data}, ${redirectType},${redirectType}, ${gridId}, ${selectedTabId}, ${selectingrowindex}, ${showtabFlag})`;
                    backDomainCumArray.push(firorDomainObj);
                }

            } catch (e) {
                console.log(e);
            }
        }
        if (datafield == hrefColumn) {
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: "formData",
                cache: false,
                data: {
                    items: itemsstring,
                    data: JSON.stringify(data),
                    fioriThemeFlag: fioriThemeCheck,
                },
                success: function (response) {
                    stopLoader();
                    var form = response['formStr'];
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
//             var tapForm = form['topForm'];
//            var formObj = {};
//            formObj = 
                    //fourthDxpSplitterData
                    $(".dxpGridHideShow").show();
//            $("#fourthDxpSplitter").show();
//            $("#thirdDxpSplitter").show();
                    try {
                        if ($("#dxpTabs").is(":visible")) {

                        } else {
                            toggleTabsAndMenus(event);
                        }
                    } catch (ee) {
                    }
                    var dxpAdavanceSearchOptions = $('#dxpAdavanceSearchOptions').val();
                    if (dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != undefined
                            && dxpAdavanceSearchOptions != '' && (dxpAdavanceSearchOptions == 'C' || dxpAdavanceSearchOptions == 'P' || dxpAdavanceSearchOptions == 'PRA')) {
//                $("#searchresultsSplitter").html(form);
                        $("#" + divId).html(form);
                    } else if (dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != undefined
                            && dxpAdavanceSearchOptions != '' && (dxpAdavanceSearchOptions == 'S' || dxpAdavanceSearchOptions == 'D' ||
                                    dxpAdavanceSearchOptions == 'PR')) {
//                $("#fourthDxpSplitter").html(form);
                        $("#" + divId).html(form);
                    } else {
//                $("#fourthDxpSplitter").html(form);
                        $("#" + divId).html(form);
                    }
                    if (fioriThemeCheck) {
                        fioriTabSroller();
                        $("#registration").html("");
                        $(".fioriTopRightcontrolsdivWrapper div").each(function (index) {
                            if (index != 0) {
                                $(this).hide(); // Hide all except the first div
                            }
                        });
                        $("#" + divId).addClass("dxpFormSplitterTabsContent");
                    }
                    if (validateFlag != "" && validateFlag != undefined && validateFlag == 'Y') {
                        MOCRValidateRecords(gridId)
                    }
                    $(".materialBasketClass").show();
                    viewMapVendorList();
//                    var basketname = $("#basketName").val();
//                    if(basketname !='' && basketname !=undefined){
//                       $(".materialBasketClass").text(basketname); 
//                    }else{
//                           $(".materialBasketId").html("Search View"); 
//                    } 
                    let formDataObj = {};
                    formDataObj.datafield = datafield;
                    formDataObj.data = data;
                    formDataObj.redirectType = redirectType;
                    formDataObj.gridId = gridId;
                    formDataObj.selectedTabId = selectedTabId;
                    formDataObj.selectingrowindex = selectingrowindex;
                    $('#dxpVisionFormRefreshDivSpanImg').attr('data-attr', JSON.stringify(formDataObj));
                    $('#dxpVisionFormDataHidden').val(JSON.stringify(formDataObj));
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
                    if (showtabFlag != null && showtabFlag != undefined && showtabFlag != '' && showtabFlag == 'N') {
                    } else {
                        showSelectedTabContent(event, 'dxpFromTab', 'dxpFormContent', 'View Form', 'N');
                    }
//                      showSelectedTabContent(event, 'dxpFromTab', 'dxpFormContent','View Form','N');
                    validWorkflow();
                    if (fioriThemeCheck) {
                        $("#sortGerericDxpFormMianDiv").show();
                    } else {
                        $("#sortGerericDxpFormMianDiv").hide();
                    }

//                    $(".visionRegisterMaterialAccordians").find(".ui-accordion-header").addClass('particulorAccDiv');
//                    $("#visionRegistartionGenericAccordionSpan img").addClass('accordianDefultImg');
//
//
//                    $('.particulorAccDiv').on("mouseover", function () {
//                        $('.particulorAccDiv img').map(function () {
//                            var findAttrt = $(this).attr('src');
//                            var nn = findAttrt.replaceAll('W', '');
//                            $(this).attr('src', nn);
//                        });
//                        var findAttr = $(this).find('.accordianDefultImg').attr('src');
//                        var findedAttr = "";
//                        if (findAttr != null && findAttr != undefined && findAttr != '') {
//                            findedAttr = findAttr.split('.');
//                        }
//                        if (findedAttr != null && findedAttr != undefined && findedAttr != '') {
//                            var srcFileName = findedAttr[0] + 'W.' + findedAttr[1];
//                            $(this).find('.accordianDefultImg').attr('src', srcFileName);
//                        }
//
//
//                    });
//
//                    $('.particulorAccDiv').on("mouseout", function () {
//                        $('.particulorAccDiv img').map(function () {
//                            var findAttrt = $(this).attr('src');
//                            var nn = findAttrt.replaceAll('W', '');
//                            $(this).attr('src', nn);
//                        });
//                    });
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
//                    $(".ccGuideInfo").mouseover(function () {
//                        $('#colorBlueID').remove();
//                        var htmlData = "<ul class=\"color_IndicatioUl\"><li class=\"\"><span class=\"mfGuideColorIndex\"><svg  height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#000fff\"></svg></span><span class=\"mfGuideColorIndexText\"> AutoGenerate</span></li>"
//                                + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#ff1a1a\"></svg></span><span class=\"mfGuideColorIndexText\"> Mandatory </span></li>"
//                                + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#688280\"></svg></span><span class=\"mfGuideColorIndexText\"> Optional </span></li>"
//                                + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#32a852\"></svg></span><span class=\"mfGuideColorIndexText\"> AutoPopulate </span></li></ul>";
//                        $(this).append('<div id = "colorBlueID"></div>');
//                        $('#colorBlueID').html(htmlData);
//                        $('#colorBlueID').jqxPopover({
//                            showArrow: true,
//                            width: 115,
//                            height: 120,
//                            showCloseButton: false,
//                            position: 'right',
//                            selector: $(this)
//                        });
//                        setTimeout(function () {
//                            $("#colorBlueID").jqxPopover('open');
//                        }, 5000);
//                    });
                    var matchcount = 0;
                    var Accordiangrid = "";
                    var gridid = "";
                    if (fioriThemeCheck) {
                        $(".fioriformTabUlListclass li").on('click', function (event, ui) {
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
//                                    var $this = $(this);
//                                    var newPanelId = $(ui.newPanel).attr('id');
//                                    var oldPanelId = $(ui.oldPanel).attr('id');
//                                    var oldTabId = $(ui.oldHeader).attr('id');
//                                    var newTabId = $(ui.newHeader).attr('id');
//                                    var TabId = (oldTabId != null) ? oldTabId : newTabId;
//                                    var dataOnclick = $("#" + TabId).attr('data-onclick');
//                                    if (dataOnclick != null && dataOnclick.indexOf("_OLD") > -1) {
//                                        oldDataFlag = true;
//                                        var firstregRormID = $("#" + TabId).next().attr('id');
//                                        var firstregRormIDNum = firstregRormID.substring(7, firstregRormID.length);
//                                        var secondregRormIDNum = +firstregRormIDNum + +1;
//                                        var secondregRormID = "regRorm" + secondregRormIDNum;
//                                    }
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

// $("#regRorm4").css("display", "block");
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
                                                                var newIndex = $(event.newHeader).index();
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
                        //FIORI
                    }
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

// $("#regRorm4").css("display", "block");
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
//                    $("#accordion").on("accordionbeforeactivate", function (event, ui) {
//
//                        var oldDataFlag = false;
//                        if (!executed) {
//                            var tabId = (globalTabId != null && globalTabId.indexOf('ERP_SAP') < 0) ? globalTabId : globalErpTab;
//                            var priviousgridId = "";
//                            if (matchcount != 0) {
//                                gridid = Accordiangrid;
//                                Accordiangrid=tabId;
//                            } else {
//                                Accordiangrid = tabId;
//                                gridid = Accordiangrid;
//                                matchcount++;
//                            }
//                            //var  tabId= globalTabId;
//                            console.log("tabId : " + tabId);
//                            var jsonOBJ = {};
//                            jsonOBJ.feildIds = [];
//                            jsonOBJ.feildValues = [];
//                            var matchedcount = 0;
//                            var dataView = $("#" + tabId + "_Update").attr("data-view");
//                            if (tabId != null && (dataView == "TABLE-VIEW" || dataView == "FORM-VIEW")) {
//                                changeflag = false;
//                                if (dataView == "TABLE-VIEW") {
//                                    var table_view_tabId = tabId + '_tbl';
//                                    var selectedTabOldData = tabsOldData[table_view_tabId];
//                                } else {
//                                    var selectedTabOldData = tabsOldData[tabId];
//                                }
//
//
//                                $("[id*=" + tabId + "]  :input").each(function () {
//                                    var textid = $(this).attr("id");
//                                    var type = $(this).attr("type");
//                                    var textval = $(this).val();
////                console.log("textid:::" + textid);
//                                    if (type != 'hidden') {
//                                        if (textval != null && textval != '') {
//                                            textval = textval.toUpperCase();
//                                        }
//
//                                    }
//
//
//                                    if (type != null && type == 'checkbox') {//
//                                        if ($("#" + textid).is(':checked')) {
//                                            textval = "Y";
//                                        } else {
//                                            textval = "N";
//                                        }
//                                    }
//
//
//                                    var textOldVal = "";
//                                    if (selectedTabOldData != null) {
//                                        textOldVal = selectedTabOldData[textid];
//                                        if (textid != null && textid != 'CREATE_DATE' && textval != textOldVal) {
//                                            matchedcount++;
//                                        }
//                                    }
////                console.log(textval + ":::" + textid + "::" + textOldVal);
//
//                                });
//                            }
//
//
//                            if (matchedcount > 0) {
//                                changeflag = true;
//                            }
//
//
//
//                            if (!changeflag) {
//                                $("[id^=regRorm]").removeClass("accordionContentShow");
//                            }
//
//                            console.log("in accordians before activate");
//                            labelObject = {};
//                            try {
//                                labelObject = JSON.parse($("#labelObjectHidden").val());
//                            } catch (e) {
//
//                            }
//                            var $this = $(this);
//                            var newPanelId = $(ui.newPanel).attr('id');
//                            var oldPanelId = $(ui.oldPanel).attr('id');
//                            var oldTabId = $(ui.oldHeader).attr('id');
//                            var newTabId = $(ui.newHeader).attr('id');
//                            var TabId = (oldTabId != null) ? oldTabId : newTabId;
//                            var dataOnclick = $("#" + TabId).attr('data-onclick');
//                            if (dataOnclick != null && dataOnclick.indexOf("_OLD") > -1) {
//                                oldDataFlag = true;
//                                var firstregRormID = $("#" + TabId).next().attr('id');
//                                var firstregRormIDNum = firstregRormID.substring(7, firstregRormID.length);
//                                var secondregRormIDNum = +firstregRormIDNum + +1;
//                                var secondregRormID = "regRorm" + secondregRormIDNum;
//                            }
//                            if (changeflag) {
//                                if (oldDataFlag) {
//                                    $("#" + secondregRormID).addClass("accordionContentShow");
//                                }
//                                if (accordionSwitchflag) {
//                                    event.preventDefault();
//                                }
//
//// $("#regRorm4").css("display", "block");
//                                $("#logoutDailog").html((labelObject['Unsaved changes will be lost'] != null ? labelObject['Unsaved changes will be lost'] : 'Unsaved changes will be lost') + ", " + (labelObject['you like to save'] != null ? labelObject['you like to save'] : 'you like to save') + "?");
//                                $("#logoutDailog").dialog({ resizable: false,
//                                    title: (labelObject['Error'] != null ? labelObject['Error'] : 'Error'),
//                                    modal: true,
//                                    width: 300,
//                                    height: 135,
//                                    fluid: true,
//                                    buttons: [
//
//                                        {
//                                            text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
//                                            click: function () {
//                                                $(this).html("");
//                                                $(this).dialog("close");
//                                                $(this).dialog("destroy");
//                                                var newIndex = $(ui.newHeader).index('h3');
//                                                updaterecordData(gridid, "update", "", "", "", newIndex);
//                                                //iterationNum=0;
//
//                                            }
//                                        }
//                                        , {
//                                            text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
//                                            click: function () {
//                                                if (oldDataFlag) {
//                                                    $("#" + secondregRormID).removeClass("accordionContentShow");
//                                                }
//                                                $(this).html("");
//                                                $(this).dialog("close");
//                                                $(this).dialog("destroy");
//                                                var newIndex = $(ui.newHeader).index('h3');
//                                                console.log("newIndex::" + newIndex);
//                                                accordionSwitchflag = false;
//                                                changeflag = false;
//                                                executed = true;
//                                                if (newIndex > -1) {
//                                                    $("#accordion").accordion({
//                                                        active: newIndex
//                                                    });
//                                                } else if (newIndex < 0) {
//                                                    $("#accordion").accordion({active: false});
//                                                }
//                                                accordionSwitchflag = true;
//                                            }
//                                        }
//                                    ],
//                                    open: function ()
//                                    {
//                                         //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                                        $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
//                                        $(".visionHeaderMain").css("z-index", "999");
//                                        $(".visionFooterMain").css("z-index", "999");
//                                    },
//                                    beforeClose: function (event, ui)
//                                    {
//                                        $(".visionHeaderMain").css("z-index", "99999");
//                                        $(".visionFooterMain").css("z-index", "99999");
//                                    }
//                                });
//                            }
//
//                        }
//                    });

//                    $(".ccGuideInfo").mouseout(function () {
//                        $("#colorBlueID").jqxPopover('close');
//                        $('#colorBlueID').remove();
//                    });
                    $(".defaultShowCards").hide();
                    $("#accdiv h3").click(function () {
                        var a = event.target.id;
                        let self = $(this).offset().top;
                        console.log(self);
                        setTimeout(function () {
                            $('.dxpContentAccPageClass').animate({scrollTop: self - 80}, 'swing');
                        }, 310);
                    });
                    if (fioriThemeCheck) {
                        $(document).ready(function () {
                            $('#allTabListMainWrapperId ul.fioriformTabUlListclass li:first').click();
                            $('#allTabListMainWrapperId ul.fioriformTabUlListclass li:first').addClass("fioriHighlightTab");
                        });
                    }



                },
                error: function (e) {
                    stopLoader();
//                    sessionTimeout(e);
                }// Error function in Ajax
            });
        } else if (datafield == "show_detail") {
            showPdfData(gridId, selectedTabId);
        }
    }

//    else if (datafield != null && gridId != null && gridId != '' && (datafield == 'CONTENT' || datafield == 'TERM')) {
////itemRegisterForm
//        console.log("Template Results Clicked::" + datafield);
//        var items = {};
//        if (data != null) {
//            var linkedColumns = "CONTENT,TERM,CLASS,CLASS_TERM,DEFINITION,uid,UID,HIDDEN_GRID_ID";
////            var linkedColumns = "CONTENT,TERM,CLASS,CLASS_TERM,CNT,DEFINITION,uid,UID,HIDDEN_GRID_ID";
//            for (var key in data) {
//                if (linkedColumns.lastIndexOf(key) > -1) {
//
//                } else {
//                    var value = data[key];
//                    if (value != null && value != '') {
//                        //  value = value.replace(/\s/gi, "_");
//                        // value = value.replace(/[#]/g, "_");
//                    }
//
//                    items[key] = value;
//                }
//            }
//            items['gridId'] = gridId;
//            var itemsstring = JSON.stringify(items);
//            $("#items").val(itemsstring);
//            $.ajax({
//                type: "post",
//                traditional: true,
//                dataType: 'json',
//                url: "itemRegisterForm",
//                cache: false,
//                data: {
//                    items: itemsstring,
//                    data: JSON.stringify(data)
//                },
//                success: function (response) {
//                    stopLoader();
//                    var form = response['formStr'];
//                    var baskettype = response['baskettype'];
//                    $("#dxpFormContent").html(form);
//                    $("#materialBasketId").html(baskettype);
//                    $("#materialBasketId").show();
//                    showSelectedTabContent(null, 'dxpFromTab', 'dxpFormContent','','N')
//                    //$("#fourthDxpSplitter").html(form);
//                    // $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
//                    $(".formDxpDuplicates").hide();
//                    $(".formDxpDuplicates").html("");
//                    if (form != null && form != undefined && form != '') {
//                        registerClickFunction();
//
//                        stopLoader();
//                    } else {
//                        var message = response['message'];
//                        var modalObj = {
////                    title: 'Message',
//                            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
//                            body: message
//                        };
//                        var buttonArray = [
//                            {
//                                text: 'Ok',
//                                click: function () {
//                                    $('#loginModel').modal('show');
//                                },
//                                isCloseButton: true
//                            }
//
//                        ];
////               $('#loginModel').draggable();
////                $('#loginModel').resizable();
//                        modalObj['buttons'] = buttonArray;
//                        createModal("dataDxpSplitterValue", modalObj);
//                    }
//                    $("#registration").inlineFormGuider({
//                        submitButton: "#Register",
//                        togglButtonContainer: ".visionFormTitleName"
//                    });
//
//                },
//                error: function (e) {
//                    sessionTimeout(e);
//                }// Error function in Ajax
//            });
////            $("#submitForm").attr("target", "thatframe");
////            $("#submitForm").attr("action", "itemRegisterForm");
////            $("#submitForm").submit();
//        }
//    }


}
function getExportGenericFormData(val) {
    if (val == 'PDF') {
        showLoader();
        const element = document.getElementById('genericPdfDataSheetExport');
        const pdfOptions = {
            margin: 5,
            image: {type: 'jpeg', quality: 0.98},
            output: 'sample.pdf',
            html2canvas: {scale: 1.5},
            jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'},
        };

        html2pdf(element, pdfOptions)
                .then(() => {
                    stopLoader();
                    // PDF created
                })
                .catch((error) => {
                    // Handle errors here
                    console.error('Error generating PDF:', error);
                });
    } else if (val == 'Excel') {
        var ExportXLS = $('#genericPdfDataSheetExport').html();
        var uri = 'data:application/vnd.ms-excel;base64,',
                template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
                base64 = function (s) {
                    return window.btoa(unescape(encodeURIComponent(s)));
                },
                format = function (s, c) {
                    return s.replace(/{(\w+)}/g, function (m, p) {
                        return c[p];
                    });
                };
        var ctx = {
            worksheet: name || '',
            table: ExportXLS
        };
        var link = document.createElement("a");
        link.download = "export.xls";
        link.href = uri + base64(format(template, ctx))
        link.click();
    } else if (val == 'CSV') {
        $('#genericPdfDataSheetExport').tableExport({
            type: 'csv',
            postCallback: function () {
                console.log('done loading my humugoid file');
            }
        });
    }
}
function refreshFormData(id) {
    let dataAttr = "";
    try {
        if (event != undefined && event.target != null && event.target != undefined && event.target != "") {//01-05-2025
            dataAttr = event.target.getAttribute('data-attr');
        }
        if (dataAttr == null || dataAttr == '') {//01-05-2025
            dataAttr = $('#dxpVisionFormDataHidden').val();
        }
    } catch (e) {

    }

    if (dataAttr != null && dataAttr != '' && dataAttr != 'null' && dataAttr != 'undefined' && dataAttr != undefined) {
        var obj = $.parseJSON(dataAttr);
        navigateToForm(obj.datafield, obj.data, obj.redirectType, obj.gridId, obj.selectedTabId, obj.selectingrowindex);
    }

}
//tree orm view strat
function dxpTreeSearchFormData() {
    dataAttr = $('#dxpVisionFormDataHidden').val();
    var obj = $.parseJSON(dataAttr);
    obj.extTreeParams = JSON.stringify(obj.data);
    showLoader();
    $.ajax({
        type: 'POST',
        dataType: 'HTML',
        url: 'getGenericTreeOpt',
        traditional: true,
        cache: false,
        async: true,
        data: obj,
        success: function (data, textStatus, jqXHR) {
            stopLoader();
            var responce = $.parseJSON(data);
            $("#dialog1").html(responce.searchFieldData);
            $("#dialog1").dialog({resizable: false,
                title: 'Where Used List',
                modal: true,
                width: 600,
                height: 400,
                maxHeight: 800,
                fluid: true,
                dialogClass: "tree-search-Dilog1"
            });
//            treeSearchConfig(responce.treeObj);
            treeInputSerch();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            stopLoader();
        }
    });
}
function treeInputSerch() {
    $("#treeSearchResult").keydown(function (e) {
        var resultVal12 = $("#treeSearchResult").val();
        if ($("#treeSearchResult").val() != null && $("#treeSearchResult").val() != '') {
            $(".clear_searchField").show();
        } else {
            $(".clear_searchField").hide();
        }
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
                || e.keyCode == 89//left click
                ) {
            console.log('Ajax Not sent');
        } else {
            if (e.keyCode == 13 //Enter
                    && $(this).val().length > 2) {
                delay(function () {
                    var resultVal = $("#treeSearchResult").val();
                    resultVal = resultVal.replace(/\s\s+/g, ' ');
                    $("#treeSearchResult").val(resultVal);
                    if (resultVal != null && resultVal != '' && resultVal.length > 2) {
                        // showLoader();
                        //startAjax();
                        startTabLoader()
                        $("#typedResult").val(resultVal);
                        var paramArray = [];
                        searchResults('S', '', paramArray);
                    } else {
                        var labelObject = {};
                        $("#dialog").html("Enter a keyword of at least 3 chars,ignoring special chars(@.,;:/etc)  to search");
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
                }, 100);
            } else {
                delay(function () {
                    userval = $("#treeSearchResult").val();
                    userval = userval.replace(/\s\s+/g, ' ');
                    if (userval != null && userval != '') {
                        $.ajax({
                            type: "POST",
                            url: "treeHierarchySearchSuggestion",
                            data: {
                                searchtext: userval,
                                SelectedListData: SelectedTabData
                            },
                            success: function (response) {
                                if (response != null && response != "") {
                                    $("#intellisense").html("");
                                    var responseObj = JSON.parse(response);
                                    if (responseObj != null && response != '') {
                                        $("#intellisense1").html(responseObj['suggestion']);
                                        totalTime = new Date().getTime() - ajaxTime;
                                        totalTime = parseInt(totalTime) / 1000;
                                        $("#intellisensebox").show();
                                        $("#jqxTreeDiv").hide();
                                    }
                                } else {
                                    $("#text_count").text("No record(s) found");
                                    $("#tooltipdiv").html("");
                                    $("#tooltipdiv").jqxTooltip({'content': 'No record(s) found', theme: 'energyblue'});
                                    $("#tooltipdiv").jqxTooltip("open");
                                    $("#intellisensebox").hide();
                                    $("#jqxTreeDiv").show();
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


                }, 500);
            }
        }

    });
}
function treeSearchConfig(treeObj) {
    $("#treeGridDiv").hide();
    if (treeObj != null) {
        if ($('#treeSplitter').length != 0) {
            $('#treeSplitter').jqxSplitter({width: '100%',
                height: 30,
                orientation: 'vertical',
                theme: 'energyblue',
                panels: [{size: '30%', min: 150, resizable: true}, {size: '20%', min: 150, resizable: true}]});
        }
        $("#jqxExpander").jqxPanel({width: '100%', height: '100%', theme: 'energyblue'});
        var treeConfigObj = treeObj['treeConfigObj'];
        var treeInitParamObj = treeObj['treeInitParamObj'];
        var columnsObj = treeObj['treeColumnObj'];
        treeConfigObj.height = 30;
        $('#jqxTree').jqxTree(treeConfigObj);
        $("#jqxTree").jqxTree('focus');
        $('#jqxTree').on('expand', function (event) {
            var parentItem = $('#jqxTree').jqxTree('getItem', event.args.element);
            var level = parentItem.level;
            var $element = $(event.args.element);
            var loader = false;
            var loaderItem = null;
            var children = $element.find('ul:first').children();
            // var children = $element.find('ul:first').children();
            $.each(children, function () {
                var item = $('#jqxTree').jqxTree('getItem', this);
                if (item && item.value == 'ajax') {
                    loaderItem = item;
                    loader = true;
                    return false
                }
                ;
            });
            if (loaderItem != null) {
                var extTreeParams = $("#extTreeParams").val();
                $('#jqxTree').jqxTree('removeItem', loaderItem.element);
                $.ajax({
                    type: "post",
                    traditional: true,
                    dataType: 'json',
                    url: "getTreeDataOpt",
                    cache: false,
                    data: {
                        parentkey: parentItem.value,
                        treeId: treeObj['treeId'],
                        level: parentItem.level,
                        extTreeParams: extTreeParams,
                        columnsObj: JSON.stringify(columnsObj)
                    },
                    success: function (data, status, xhr) {
//                            var items = jQuery.parseJSON(data);
                        $('#jqxTree').jqxTree('addTo', data, $element[0]);
                        var items = $('#jqxTree').jqxTree('getItems');
                        $.each(items, function () {
                            $(this.titleElement).attr('title', this.label);
                            $("#" + this.titleElement[0].id).removeClass('visionETLParentHighight');
                        });
                        if (parentItem != null)
                        {
                            var parentItemEle = event.args.element;
                            for (var p = level; p >= 0; p--)
                            {
                                //var parentItemId = $('#' + treeId).jqxTree('getItem', parentItemEle);
                                var parentItemId = $('#jqxTree').jqxTree('getItem', parentItemEle);
                                //var parentItemId = parentItem.id;
                                if (parentItemId != null)
                                {
                                    // var divItemId = parentItemId;
                                    var divItemId = parentItemId.titleElement[0];
                                    $("#" + divItemId.id).addClass('visionETLParentHighight');
                                }
                                parentItemEle = parentItemEle.parentElement.parentElement;
                            }
                        }


                    },
                    error: function (e) {
                        console.log(e);
                        sessionTimeout(e);
                        ajaxStop();
                    }
                });
            }



        });

        $('#jqxTree').on('select', function (event)
        {
            var args = event.args;
            var item = $('#jqxTree').jqxTree('getItem', args.element);
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
                    $('#treeSplitter').jqxSplitter({
                        panels: [{size: '20%', min: 150, resizable: true}, {size: '80%', min: 150, resizable: true}]
                    });
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
                    } else if (compType == 'ANALYTICS') {

                    }
                }

            }
        });
    }
}

function updateCellValue(gridId, row, column, value) {
    try {
        let textinputdivId = gridId + column + 'griddrpdownAndEditValueId' + row;
        var el = document.getElementById(textinputdivId);
        var itext = el.value;
        var enteredKey = event.key;
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;

        // Handling Ctrl+C (Copy)
        if (event.ctrlKey && enteredKey === 'c') {
            try {
                navigator.clipboard.writeText(itext)
            } catch (e) {
                console.log('Copy operation failed: ', e);
            }
            return;
        }

        // Handling Ctrl+A (Select All)

        if (event.ctrlKey == true && (enteredKey == 'v' || enteredKey == 'V')) {
            enteredKey = '';
        }
        if (event.ctrlKey == true && (enteredKey == 'a' || enteredKey == 'A')) {
            enteredKey = '';
        }
        if ((event.ctrlKey == true && event.keyCode != 86)
                || (event.altKey == true)
                || (event.metaKey == true)) {
            enteredKey = '';
        }



//                if (enteredKey === 'Delete' 
////                        || enteredKey === 'Backspace'
//                        ) {
//            if (selectionStart !== selectionEnd) {
//                itext = itext.slice(0, selectionStart) + itext.slice(selectionEnd);
//            } else {
//                if (selectionStart < itext.length) {
//                    itext = itext.slice(0, selectionStart) + itext.slice(selectionStart + 1);
//                }
//            }
//            $('#' + gridId).jqxGrid('setcellvalue', row, column, itext);
//            $('#' + gridId).attr('data-last-ed-field', column);
//            $('#' + gridId).attr('data-last-ed-row', row);
//            el = document.getElementById(textinputdivId);
//            el.focus();
//            el.setSelectionRange(selectionStart, selectionStart);
////        if (typeof el.selectionStart == "number") {
////            el.selectionStart = el.selectionEnd = el.value.length;
////        } else if (typeof el.createTextRange != "undefined") {
////            var range = el.createTextRange();
////            range.collapse(false);
////            range.select();
////        }
//            $("#" + gridId).jqxGrid('selectrow', row);
//            return;
//        }
        if (enteredKey === 'Delete'
//                        || enteredKey === 'Backspace'
                ) {
            $('#' + gridId).jqxGrid('setcellvalue', row, column, itext);
            $('#' + gridId).attr('data-last-ed-field', column);
            $('#' + gridId).attr('data-last-ed-row', row);
            el = document.getElementById(textinputdivId);
            el.focus();
            el.setSelectionRange(selectionStart, selectionStart);
            $("#" + gridId).jqxGrid('selectrow', row);
            return;
        }
        if (enteredKey === 'Backspace'
                ) {
//            if (selectionStart !== selectionEnd) {
//                itext = itext.slice(0, selectionStart) + itext.slice(selectionEnd);
//            } else {
//                if (selectionStart < itext.length) {
//                    itext = itext.slice(0, selectionStart) + itext.slice(selectionStart + 1);
//                }
//            }
            $('#' + gridId).jqxGrid('setcellvalue', row, column, itext);
            $('#' + gridId).attr('data-last-ed-field', column);
            $('#' + gridId).attr('data-last-ed-row', row);
            el = document.getElementById(textinputdivId);
            el.focus();
            el.setSelectionRange(selectionStart, selectionStart);
            $("#" + gridId).jqxGrid('selectrow', row);
            return;
        }


        // Ignore special keys based on jskeyCodes
        if (enteredKey != null && enteredKey != undefined && enteredKey != '' && enteredKey != 'undefined'
                && jskeyCodes.hasOwnProperty(enteredKey.toUpperCase())
                && enteredKey != 'Backspace') {
            return;
        }


        itext = itext.slice(0, selectionStart) + enteredKey + itext.slice(selectionEnd);

        if (itext != null && itext != undefined && itext != '' && itext != 'undefined') {
            try {
                $('#' + gridId).jqxGrid('setcellvalue', row, column, itext);
                $('#' + gridId).attr('data-last-ed-field', column);
                $('#' + gridId).attr('data-last-ed-row', row);
                $("#" + gridId).jqxGrid('selectrow', row);
                el = document.getElementById(textinputdivId);
                el.focus();
                el.setSelectionRange(selectionStart + enteredKey.length, selectionStart + enteredKey.length);
            } catch (e) {
                console.error('Error setting cell value: ', e);
            }
        } else {
            value = $('#' + gridId).jqxGrid('getcellvalue', row, column);
            $('#' + gridId).jqxGrid('setcellvalue', row, column, enteredKey);
            $('#' + gridId).attr('data-last-ed-field', column);
            $('#' + gridId).attr('data-last-ed-row', row);
            el = document.getElementById(textinputdivId);
            el.focus();
            el.setSelectionRange(selectionStart + enteredKey.length, selectionStart + enteredKey.length);
        }

    } catch (ey) {
        console.error('Error updating cell value: ', ey);
    }
}

function updateCellValueDDW(gridId, row, column, value) {
    try {

        let textinputdivId = gridId + column + 'griddrpdownAndEditValueId' + row;
        var el = document.getElementById(textinputdivId);
        var itext = el.value;
        var enteredKey = event.key;
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
//         if (enteredKey === 'Delete' )
//        {    
//            el = document.getElementById(textinputdivId);
//            el.focus();
//            el.setSelectionRange(selectionStart, selectionStart);
//            return;
//        }
        // Handling Ctrl+C (Copy)
        if (event.ctrlKey && enteredKey === 'c') {
            try {
                navigator.clipboard.writeText(itext)
            } catch (e) {
                console.log('Copy operation failed: ', e);
            }
            return;
        }

        // Handling Ctrl+A (Select All)

        if (event.ctrlKey == true && (enteredKey == 'v' || enteredKey == 'V')) {
            enteredKey = '';
        }
        if (event.ctrlKey == true && (enteredKey == 'a' || enteredKey == 'A')) {
            enteredKey = '';
            el.focus();
            el.select();
            return;
        }
        if ((event.ctrlKey == true && event.keyCode != 86)
                || (event.altKey == true)
                || (event.metaKey == true)) {
            enteredKey = '';
        }


//        $("#" + gridId).jqxGrid('selectrow', row);

//        if (enteredKey === 'Delete' 
//                        ) {
////            if (selectionStart !== selectionEnd) {
////                itext = itext.slice(0, selectionStart) + itext.slice(selectionEnd);
////            } else {
////                if (selectionStart < itext.length) {
////                    itext = itext.slice(0, selectionStart) + itext.slice(selectionStart + 1);
////                }
////            }
////            $('#' + gridId).jqxGrid('setcellvalue', row, column, itext);
////            $('#' + gridId).attr('data-last-ed-field', column);
////            $('#' + gridId).attr('data-last-ed-row', row);
//            el = document.getElementById(textinputdivId);
//            var text = el.value;
//    
//    text = text.slice(0, el.selectionStart) + text.slice(el.selectionEnd);
//    el.value = text;
//    $('#' + gridId).jqxGrid('setcellvalue', row, column, text);
//            $('#' + gridId).attr('data-last-ed-field', column);
//            $('#' + gridId).attr('data-last-ed-row', row);
//            el.focus();
////            el.setSelectionRange(selectionStart, selectionStart);
////             $("#" + gridId).jqxGrid('selectrow', row);
//            return;
//    }




        if (enteredKey === 'Backspace'
                ) {

//                  if (selectionStart !== selectionEnd) {
//                itext = value.slice(0, selectionStart) + itext.slice(selectionEnd);
//            }
//            else {
//                if (selectionStart < itext.length) {
//                    itext = itext.slice(0, selectionStart) + itext.slice(selectionStart+1);
//                }
//            }   
            $('#' + gridId).jqxGrid('setcellvalue', row, column, itext);
            $('#' + gridId).attr('data-last-ed-field', column);
            $('#' + gridId).attr('data-last-ed-row', row);
            el = document.getElementById(textinputdivId);
            el.focus();
            el.setSelectionRange(selectionStart, selectionStart);
            $("#" + gridId).jqxGrid('selectrow', row);


            return;
        }


        // Ignore special keys based on jskeyCodes
        if (enteredKey != null && enteredKey != undefined && enteredKey != '' && enteredKey != 'undefined'
                && jskeyCodes.hasOwnProperty(enteredKey.toUpperCase())
                && enteredKey != 'Backspace') {
            return;
        } else if (enteredKey != null && enteredKey != undefined && enteredKey != '' && enteredKey != 'undefined')
        {
            enteredKey = enteredKey;
        } else {
            enteredKey = '';
        }
        var start = selectionStart;
        var end = selectionStart;
        try {


            if ((document.getElementById(gridId + "_griddrpdownAndEditValueId") !== undefined)
                    && (document.getElementById(gridId + "_griddrpdownAndEditValueId") !== null)) {
                var id = $("#" + gridId + "_griddrpdownAndEditValueId").val();
                if (id != undefined && id != null && id != "" && textinputdivId == id) {
                    $("#" + gridId + "_griddrpdownAndEditValueId").val(textinputdivId);
                    start = selectionStart + enteredKey.length
                    end = selectionStart;
                } else {
                    $("#" + gridId + "_griddrpdownAndEditValueId").val(textinputdivId);
                    itext = itext.slice(0, selectionStart) + enteredKey + itext.slice(selectionEnd);
                    start = selectionStart + enteredKey.length
                    end = selectionStart + enteredKey.length;
                }

            } else {
                $('#' + gridId).append("<input type='hidden' id='" + gridId + "_griddrpdownAndEditValueId' />");
                $("#" + gridId + "_griddrpdownAndEditValueId").val(textinputdivId);
                start = selectionStart + enteredKey.length
                end = selectionStart + enteredKey.length;
                itext = itext.slice(0, selectionStart) + enteredKey + itext.slice(selectionEnd);
            }
        } catch (e) {
            start = selectionStart + enteredKey.length
            end = selectionStart + enteredKey.length;
            itext = itext.slice(0, selectionStart) + enteredKey + itext.slice(selectionEnd);
        }



        if (itext != null && itext != undefined && itext != '' && itext != 'undefined') {
            try {
//        $('#' + gridId).jqxGrid('endcelledit', row, column, false);
//        $('#' + gridId).jqxGrid('begincelledit', row, column);
                $('#' + gridId).jqxGrid('setcellvalue', row, column, itext);
                $('#' + gridId).attr('data-last-ed-field', column);
                $('#' + gridId).attr('data-last-ed-row', row);
                $('#' + gridId).attr('isRenderFlagcolumn', column);
                $("#" + gridId).jqxGrid('selectrow', row);
                el = document.getElementById(textinputdivId);
//                selectionStart = el.selectionStart;
//               selectionEnd = el.selectionEnd;
                el.focus();
                el.setSelectionRange(start, end);
//                el.setSelectionRange(selectionStart + enteredKey.length, selectionStart);
//                 el.setSelectionRange(selectionStart + enteredKey.length);
//                el.setSelectionRange(selectionStart, selectionStart);
            } catch (ei) {

            }
        } else {
            value = $('#' + gridId).jqxGrid('getcellvalue', row, column);
            $('#' + gridId).jqxGrid('setcellvalue', row, column, enteredKey);
            $('#' + gridId).attr('data-last-ed-field', column);
            $('#' + gridId).attr('data-last-ed-row', row);
            $('#' + gridId).attr('isRenderFlagcolumn', column);
            $("#" + gridId).jqxGrid('selectrow', row);
//              selectionStart = el.selectionStart;
//               selectionEnd = el.selectionEnd;
            el.focus();
            el.setSelectionRange(start, end);
//                el.setSelectionRange(selectionStart + enteredKey.length, selectionStart + enteredKey.length);
//                el.setSelectionRange(selectionStart, selectionStart + enteredKey.length);
//                el.setSelectionRange(selectionStart, selectionStart);

        }

//        var el = document.getElementById(textinputdivId)
//        el.focus()
//        if (typeof el.selectionStart == "number") {
//            el.selectionStart = el.selectionEnd = el.value.length;
//        } else if (typeof el.createTextRange != "undefined") {
//            var range = el.createTextRange();
//            range.collapse(false);
//            range.select();
//        }
//value = $('#' + gridId).jqxGrid('getcellvalue', row, column);
//        console.log(value);

    } catch (ey) {

    }
}
function selectFocusedRow(gridId, row, column, value) {
    try {
        $("#" + gridId).jqxGrid('selectrow', row);
        let textinputdivId = gridId + column + 'griddrpdownAndEditValueId' + row;
        var el = document.getElementById(textinputdivId);
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
        el.focus();
        el.setSelectionRange(selectionStart, selectionStart);
    } catch (ey) {

    }
}

function updateCheckBoxValue(gridId, row, column, value) {
    try {
        $("#" + gridId).jqxGrid('selectrow', row);
        var lasteditedfield = $('#' + gridId).attr('data-last-ed-field');
        var lasteditedrow = $('#' + gridId).attr('data-last-ed-row');
        var isRenderFlagcolumn = $('#' + gridId).attr('isRenderFlagcolumn');
        try {
            if (isRenderFlagcolumn) {
                $('#' + gridId).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, true);
            } else {
                $('#' + gridId).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, false);
            }
        } catch (e) {
        }
        let checkBoxinputdivId = gridId + column + 'griddcheckBoxRenderId' + row;
        var el = document.getElementById(checkBoxinputdivId);


        if (el.checked) {
            $('#' + gridId).jqxGrid('setcellvalue', row, column, 'Y');
            $('#' + gridId).attr('data-last-ed-field', column);
            $('#' + gridId).attr('data-last-ed-row', row);
            $('#' + gridId).jqxGrid('endcelledit', row, column, false);
            changeflag = true;
        } else {
            $('#' + gridId).jqxGrid('setcellvalue', row, column, 'N');
            $('#' + gridId).attr('data-last-ed-field', column);
            $('#' + gridId).attr('data-last-ed-row', row);
            $('#' + gridId).jqxGrid('endcelledit', row, column, false);
            changeflag = true;
        }

    } catch (ey) {

    }
}


function updateCellValueDeleteData(gridId, row, column, value) {
    try {
        let textinputdivId = gridId + column + 'griddrpdownAndEditValueId' + row;
        var el = document.getElementById(textinputdivId);
        var itext = el.value;
        var enteredKey = event.key;
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
//$("#" + gridId).jqxGrid('selectrow', row);
//var enteredKey = event.key|| event.which;;
// let textinputdivId = gridId + column + 'griddrpdownAndEditValueId' + row;
        if (enteredKey === 'Delete') {

            $('#' + gridId).jqxGrid('setcellvalue', row, column, itext);
            $('#' + gridId).attr('data-last-ed-field', column);
            $('#' + gridId).attr('data-last-ed-row', row);
            $('#' + gridId).jqxGrid('endcelledit', row, column, false);
            changeflag = true;
            el.focus();
            el.setSelectionRange(selectionStart, selectionStart);
        }

    } catch (ey) {

    }
}
function preventDeleteKey(gridId, row, column, value) {
    try {
        let textinputdivId = gridId + column + 'griddrpdownAndEditValueId' + row;
        var el = document.getElementById(textinputdivId);
        var itext = el.value;
        var enteredKey = event.key;
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
        if (enteredKey === 'Delete'
//                        || enteredKey === 'Backspace'
                ) {
            if (selectionStart !== selectionEnd) {
                itext = value.slice(0, selectionStart) + itext.slice(selectionEnd);
            } else {
                if (selectionStart < itext.length) {
                    itext = itext.slice(0, selectionStart) + itext.slice(selectionStart + 1);
//                   selectionStart = selectionStart+1;
                }
            }

            $('#' + gridId).jqxGrid('setcellvalue', row, column, itext);
            $('#' + gridId).attr('data-last-ed-field', column);
            $('#' + gridId).attr('data-last-ed-row', row);
            el = document.getElementById(textinputdivId);
            el.focus();
            el.setSelectionRange(selectionStart, selectionStart);
            $("#" + gridId).jqxGrid('selectrow', row);
            return;
        }

    } catch (ey) {

    }
}


function showgridPagesCount(gridId, uuu_GridPagesCountFlag, totalRows) {
    var labelObj = {};
    // labelObject = {};
    try {
        labelObj = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    try {
//         $("#pager" + gridId).remove("<div class='showgridSlectedRowsCount'>" + divCode + "</div>");
        $("#pager" + gridId).removeClass("girdFooterPagerclass");
        $('#' + gridId + '_showgridPagesCountCount').remove();
    } catch (ed) {

    }

    if (gridId != null && gridId != '') {
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                var pagenum = paginginformation['pagenum'];
                // The number of all pages.
//     if (totalRows != null && pagesize != null && totalRows > 0 && pagesize > 0) {
//     var pagescount = Math.round(totalRows/pagesize);
//     }

                var pagescount = paginginformation['pagescount'];



            }
        }

        if (pagescount > 0) {
            var message = labelObject['Total Pages'] != null ? labelObject['Total Pages'] : 'Total Pages';
            if (uuu_GridPagesCountFlag != null && uuu_GridPagesCountFlag != '' && uuu_GridPagesCountFlag != undefined && uuu_GridPagesCountFlag == "Y") {
                var divCode = "";
                divCode += message + ': ' + pagescount + ' ';
            }

            if (divCode != null && divCode != '' && divCode != undefined) {
                $("#pager" + gridId).addClass("girdFooterPagerclass");
                $("#pager" + gridId).append("<div class='showgridPagesCountCount' id='" + gridId + "_showgridPagesCountCount'>" + divCode + "</div>");
            } else {
                try {
                    $("#pager" + gridId).removeClass("girdFooterPagerclass");
                    $('#' + gridId + '_showgridPagesCountCount').remove();
                } catch (ed) {
                    stopLoader();
                }
            }
        } else {
            try {
                $("#pager" + gridId).removeClass("girdFooterPagerclass");
                $('#' + gridId + '_showgridPagesCountCount').remove();
            } catch (ed) {

            }


        }
    } else {
        try {
            $("#pager" + gridId).removeClass("girdFooterPagerclass");
            $('#' + gridId + '_showgridPagesCountCount').remove();
        } catch (ed) {

        }
    }

}
function hasHTMLTags(text) {
    const htmlPattern = /<("[^"]*"|'[^']*'|[^'">])*>/;
    return htmlPattern.test(text);
}
//XML VIEWER START//
function showFormXmlData(gridId, formFlag, viewName, Colname, whereclauseCols) {
    showLoader();
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
        var itemsstring = JSON.parse($('#itemsstring').val());
        rowData.imageTable = itemsstring['imageTable'];
        rowData.imageTableColumn = itemsstring['imageTableColumn'];
        rowData.imageColumn = itemsstring['imageColumn'];
        rowData.CONCEPT_ID = itemsstring['CONCEPT_ID'];
    }
    if (rowData != null
            && !jQuery.isEmptyObject(rowData)
            && rowData.length != 0) {
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: 'getGenericXmlDataSheet',
            traditional: true,
            cache: false,
            async: true,
            data: {
                'items': JSON.stringify(rowData),
                'viewName': viewName,
                'Colname': Colname,
                'whereclauseCols': whereclauseCols
            },
            success: function (result) {
                stopLoader();
                if (result != null && result != '') {
                    var xmlHtml = result['xmlHtml'];
                    var xmlContent = result['xmlContent'];
                    var currentTime = new Date();
                    var month = currentTime.getMonth() + 1;
                    var day = currentTime.getDate();
                    var year = currentTime.getFullYear();
                    const hours = currentTime.getHours();
                    const minits = currentTime.getMinutes();
                    const seconds = currentTime.getSeconds();
                    xmlContent = `<transaction_level created_datetime="${year}${month}${day},${hours}:${minits}:${seconds}">${xmlContent}</transaction_level>`;
                    if (xmlContent != null && xmlContent != '' && xmlContent != 'undefined' && xmlContent != undefined) {
                        xmlContent = formatXmlContent(xmlContent, true, ' ');
                    } else {
                        xmlContent = 'Unable to retrive XML Sheet';
                    }

                    var title = "<div id='showXmlHeaderNameAndExport' style='display:flex;gap:10px;'><div id='showXmlHeaderText'>XML Viewer</div><div style='display:flex;align-items: center'><div id='xmldownload" + gridId + "' ><input title='Download' id='xmlExport" + gridId + "' onclick=downloadXmlSheet() class='exportClass visionSearchExportButton visionGridExportButton visionExportInput visionSearchExportButtonUpdatedImagClass' type='button' width='-2px' disabled='disabled'></div></div></div> ";

                    $('#xmlViewerDialog').remove();
                    $('body').append("<div id='xmlViewerDialog'></div>");
                    $("#xmlViewerDialog").html(xmlHtml);
                    $("#xmlViewerDialog").dialog({
                        draggable: true,
                        modal: true,
                        height: 500,
                        minHeight: 400,
                        minWidth: 800,
//                    maxWidth:2000,
                        width: 1000,
                        fluid: true,
                        buttons: [{
                                text: 'Ok',
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("destroy");
                                }
                            }],
                        open: function () {
                            $(this).closest(".ui-dialog").css("z-index", "9999");
                            $(".ui-dialog-title").html(title);
                            $("#genericXmlReport").html(xmlContent);
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                        },
                        beforeClose: function (event, ui) {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    })

                    $("#xmlExport" + gridId).attr("disabled", false);
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
        var dialogSplitMessage = dialogSplitIconText("Unable to retrive XML Sheet", "H");
        showErrorPopupMessage(dialogSplitMessage, "Message", "350", "150");
    }
}
function formatXmlContent(xml, colorize, indent) {
    function esc(s) {
        return s.replace(/[-\/&<> ]/g, function (c) {
            return c == ' ' ? '&nbsp;' : '&#' + c.charCodeAt(0) + ';';
        });
    }
    var sm = '<div class="idxpxmlviewxmt">', se = '<div class="idxpxmlviewxel">',
            sd = '<div class="idxpxmlviewxdt">', sa = '<div class="idxpxmlviewxat">',
            tb = '<div class="idxpxmlviewxtb">', tc = '<div class="idxpxmlviewxtc">',
            ind = indent || '  ', sz = '</div>', tz = '</div>', re = '', is = '', ib, ob, at, i;
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
        if (ob[1] == "</" && ob[2].trim() === "in_item_spec") {
            re += '<div style="border-bottom: 1px solid #fffff; margin: 10px 0;"></div>';
        }
        if (ob[1] == "<" && ob[2].trim() === "transaction_level") {
            re += '<div style="border-bottom: 2px solid #fffff; margin: 10px 0;"></div>';
        }
        if (ob[1] == "</" && ob[2].trim() === "transaction_level") {
            re += '<div style="border-bottom: 2px solid #ccc; margin: 10px 0;"></div>';
        }

        if (ob[1] + ob[3] + ib[2] == '<>')
            is += ind;
    });
    return re;
}

function downloadXmlSheet() {
    var xmlContent = document.getElementById("genericXmlReport").innerText;
//    var filename = "exported_data.xml";
//    var blob = new Blob([xmlContent], {type: "application/xml"});
//    var link = document.createElement("a");
//    link.href = URL.createObjectURL(blob);
//    link.download = filename;
//    document.body.appendChild(link);
//    link.click();
//    document.body.removeChild(link);
    var cleanedXmlContent = xmlContent.replace(/^\s+/gm, '');
    var filename = "exported_data.xml";
    var blob = new Blob([cleanedXmlContent], {type: "application/xml"});
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}

function showGridXmlData(gridId, viewName, Colname, whereclauseCols, multiFlag) {
    var rowData = {};
    var rowArr = [];
    var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
    if (multiFlag != null && multiFlag != '' && multiFlag != undefined && multiFlag == 'Y') {
        if (selectedrowindexes.length != 0) {
            for (var i = 0; i < selectedrowindexes.length; i++) {
                var rowDataval = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
                rowArr.push(rowDataval);
            }
            rowData = rowArr;
        } else {
            showMesg("Please select a row to Process");
            return;
        }
    } else {
        if (selectedrowindexes.length > 1) {
            showMesg("Please select 1 row only");
            return;
        } else if (selectedrowindexes.length == 0) {
            showMesg("Please select a row to Process");
            return;
        } else {
            rowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes);
            if (rowDataval.hasOwnProperty("BUSINESS_UNIT")) {
                rowDataval["PLANT"] = rowDataval["BUSINESS_UNIT"];
                delete rowDataval["BUSINESS_UNIT"];
            }
        }
    }

    if (rowData != null
            && !jQuery.isEmptyObject(rowData)
            && rowData.length != 0) {
        showLoader();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: 'getGenericXmlDataSheet',
            traditional: true,
            cache: false,
            async: true,
            data: {
                'items': JSON.stringify(rowData),
                'viewName': viewName,
                'Colname': Colname,
                'whereclauseCols': whereclauseCols,
                multiFlag: multiFlag
            },
            success: function (result) {
                stopLoader();
                if (result != null && result != '') {
                    var xmlHtml = result['xmlHtml'];
                    var xmlContent = result['xmlContent'];
                    var currentTime = new Date();
                    var month = currentTime.getMonth() + 1;
                    var day = currentTime.getDate();
                    var year = currentTime.getFullYear();
                    const hours = currentTime.getHours();
                    const minits = currentTime.getMinutes();
                    const seconds = currentTime.getSeconds();
//                    xmlContent = `<transaction_level created_datetime="${year}-${month}-${day}T${hours}:${minits}:${seconds}">${xmlContent}</transaction_level>`;
                    if (xmlContent != null && xmlContent != '' && xmlContent != 'undefined' && xmlContent != undefined) {
                        xmlContent = formatXmlContent(xmlContent, true, ' ');
                    } else {
                        xmlContent = 'Unable to retrive XML Sheet';
                    }
                    var title = "<div id='showXmlHeaderNameAndExport' style='display:flex;gap:10px;'><div id='showXmlHeaderText'>XML Viewer</div><div style='display:flex;align-items: center'><div id='xmldownload" + gridId + "' ><input title='Download' id='xmlExport" + gridId + "' onclick=downloadGridXmlSheet('" + gridId + "','" + viewName + "','" + Colname + "','" + whereclauseCols + "') class='exportClass visionSearchExportButton visionGridExportButton visionExportInput visionSearchExportButtonUpdatedImagClass' type='button' width='-2px' disabled='disabled'></div></div></div> ";
                    $('#xmlViewerDialog').remove();
                    $('body').append("<div id='xmlViewerDialog'></div>");
                    $("#xmlViewerDialog").html(xmlHtml);
                    $("#xmlViewerDialog").dialog({
                        draggable: true,
                        modal: true,
                        height: 500,
                        minHeight: 400,
                        minWidth: 800,
//                    maxWidth:2000,
                        width: 1000,
                        fluid: true,
                        buttons: [{
                                text: 'Ok',
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("destroy");
                                }
                            }],
                        open: function () {
                            $(this).closest(".ui-dialog").css("z-index", "9999");
                            $(".ui-dialog-title").html(title);
                            $("#genericXmlReport").html(xmlContent);
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                        },
                        beforeClose: function (event, ui) {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    })

                    $("#xmlExport" + gridId).attr("disabled", false);
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
        var dialogSplitMessage = dialogSplitIconText("Unable to retrive XML Sheet", "H");
        showErrorPopupMessage(dialogSplitMessage, "Message", "350", "150");
    }
}
function downloadGridXmlSheet(gridId, viewName, Colname, whereclauseCols) {
    var rowData = {};
    var rowArr = [];
    var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
    if (selectedrowindexes.length != 0) {
        for (var i = 0; i < selectedrowindexes.length; i++) {
            var rowDataval = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (rowDataval.hasOwnProperty("BUSINESS_UNIT")) {
                rowDataval["PLANT"] = rowDataval["BUSINESS_UNIT"];
                delete rowDataval["BUSINESS_UNIT"];
            }
            rowArr.push(rowDataval);
        }
        rowData = rowArr;
    }

    if (rowData != null
            && !jQuery.isEmptyObject(rowData)
            && rowData.length != 0) {
        showLoader();
        $.ajax({
            type: 'POST',
            url: 'downloadGridXmlDataSheet',
            traditional: true,
            cache: false,
            async: true,
            data: {
                'rowDataStr': JSON.stringify(rowData),
                'viewName': viewName,
                'Colname': Colname,
                'whereclauseCols': whereclauseCols
            },
            success: function (response) {
                stopLoader();
                if (response.status === 'success') {
                    showMesg("Files have been successfully saved on the server.");
                } else {
                    showMesg("Error: " + response.message);
                }
            },
            error: function (xhr, status, error) {
                stopLoader();
                console.log(error);
            }
        });
    } else {
        showMesg("No data to process");
    }
}
//XML VIEWER STOP//
function fioriTabSroller() {
    if ($(".iconMenuNavNext").length > 0) {
        $(".iconMenuNavNext").click(function () {
            $(this.parentElement).find('.fioriformTabUlListclass').animate({
                scrollLeft: '+=300'
            }, 500, 'swing');
        });
    }
    if ($(".iconMenuNavPrev").length > 0) {
        $(".iconMenuNavPrev").click(function () {
            $(this.parentElement).find('.fioriformTabUlListclass').animate({
                scrollLeft: '-=300'
            }, 500, 'swing');
        });
    }

    toggleScrollButtons();
    toggleScrollButtonsHorizontal();
}
function toggleScrollButtonsHorizontal() {
    setTimeout(function () {
        const $parent = $(".outerWidthcol").parent();
        const scrollWidth = $parent[0].scrollWidth;
        const clientWidth = $parent.width();

        if (scrollWidth > clientWidth) {
            $(".iconMenuNavPrev, .iconMenuNavNext").show();
        } else {
            $parent.find(".iconMenuNavPrev, .iconMenuNavNext").hide();
        }
    }, 200);
}

// Field level verification code start
function processVerificationRequest(jsonDataStr, currentTabId) {
    return new Promise((resolve, reject) => {
        let jsonDataArr;

        try {
            jsonDataArr = JSON.parse(jsonDataStr);
        } catch (e) {
            console.error("Error parsing JSON data:", e);
            resolve(false);
            return;
        }
        let jsonData = jsonDataArr[0];
        const fieldJson = {};
//        jsonData.fieldIds.forEach((key, index) => {
//            fieldJson[key] = jsonData.fieldValues[index];
//        });

        if (jsonData && Array.isArray(jsonData.feildIds) && Array.isArray(jsonData.feildValues)) {
//            const fieldJson = {};
            jsonData.feildIds.forEach((key, index) => {
//                fieldJson[key] = jsonData.feildValues[index];
                const value = jsonData.feildValues[index];
                if (value !== undefined && value !== null && value.toString().trim() !== "") {
                    fieldJson[key] = value;
                }
            });
        } else {
            console.error("Invalid jsonData format:", jsonData);
        }


        const finalJsonData = {
            basicData: jsonData.basicData,
            fieldData: fieldJson,
            tabId: currentTabId
        };

        let verificationFailed = false;

        $.ajax({
            url: "verifyIdentity",
            type: "POST",
            traditional: true,
            cache: false,
            data: {
                finalJsonData: JSON.stringify(finalJsonData)
            },
            success: function (response) {
                stopLoader();
                if (
                        response &&
                        typeof response === 'object' &&
                        response.verificationStatus &&
                        Object.keys(response.verificationStatus).length > 0
                        ) {
                    verificationFailed = !Object.values(response.verificationStatus).every(status => status.includes('SUCCESS'));
                    let tableHtml = `
                        <style>
                            #verificationStatusTable {
                                width: 100%;
                                border-collapse: collapse;
                                font-family: Arial, sans-serif;
                            }
                            #verificationStatusTable th, #verificationStatusTable td {
                                border: 1px solid #cccccc;
                                padding: 8px;
                                text-align: left;
                            }
                            #verificationStatusTable th {
                                background-color: #f2f2f2;
                                font-weight: bold;
                            }
                            .success {
                                background-color: #e6ffe6;
                                color: #006400;
                            }
                            .failed {
                                background-color: #ffe6e6;
                                color: #8b0000;
                            }
                            .not-verified {
                                background-color: #fffacd;
                                color: #8b8000;
                            }
                            .table-container {
                                padding: 16px;
                            }
                            .table-title {
                                font-size: 18px;
                                font-weight: bold;
                                text-align: center;
                                margin-bottom: 16px;
                            }
                            .update-count {
                                text-align: center;
                                margin-top: 16px;
                                font-family: Arial, sans-serif;
                            }
                        </style>
                        <div class="table-container">
                            <div class="table-title">Verification Status</div>
                            <table id="verificationStatusTable">
                                <thead>
                                    <tr>
                                        <th>Field</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                    `;

                    Object.entries(response.verificationStatus).forEach(([field, status]) => {
                        const fieldName = field.replace(/_/g, ' ');
                        const statusClass = status.includes('SUCCESS') || status.includes('Bank Account details verified successfully.') || status.includes('company_status(for_efiling)') || status.includes('id_found')
                                ? 'success'
                                : status.includes('FAILED')
                                ? 'failed'
                                : 'not-verified';
                        if (field !== 'name_at_bank_cleaned')
                            tableHtml += `
                            <tr>
                                <td>${fieldName}</td>
                                <td class="${statusClass}">${status}</td>
                            </tr>
                        `;
                    });

                    tableHtml += `
                                </tbody>
                            </table>
                        </div>
                    `;

                    $("#dialog").html(tableHtml).dialog({
                        resizable: false,
                        title: "Verification Result",
                        modal: true,
                        height: 'auto',
                        minHeight: 500,
                        minWidth: 1000,
                        maxWidth: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Ok'] || 'Ok'),
                                click: function () {
                                    $(this).html("").dialog("close");
//                                    resolve(!verificationFailed); // Resolve with the verification result
                                    resolve({result: true, response: response}); // Resolve with the verification result
                                }
                            }],
                        open: function () {
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                        },
                        beforeClose: function () {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });
                } else if (response && typeof response === 'object' && response.verificationStatus) {
                    resolve({result: true});
                } else if (response && typeof response === 'object' && response.status) {
                    verificationFailed = true;
                    $("#dialog").html(`<p style="color: #8b0000; text-align: center;">${response.message}</p>`).dialog({
                        resizable: false,
                        title: "Verification Error",
                        modal: true,
                        height: 'auto',
                        minHeight: 200,
                        minWidth: 400,
                        buttons: [{
                                text: (labelObject['Ok'] || 'Ok'),
                                click: function () {
                                    $(this).html("").dialog("close");
                                    resolve({result: false}); // Resolve with false
                                }
                            }]
                    });
                } else {
                    console.warn("Invalid or empty response:", response);
                    verificationFailed = true;
                    $("#dialog").html('<p style="color: #8b0000; text-align: center;">No valid verification data received.</p>').dialog({
                        resizable: false,
                        title: "Verification Error",
                        modal: true,
                        height: 'auto',
                        minHeight: 200,
                        minWidth: 400,
                        buttons: [{
                                text: (labelObject['Ok'] || 'Ok'),
                                click: function () {
                                    $(this).html("").dialog("close");
                                    resolve({result: false}); // Resolve with false
                                }
                            }]
                    });
                }
            },
            error: function (xhr) {
                console.error("Verification error:", xhr.responseText);
                verificationFailed = true;
                $("#dialog").html(`<p style="color: #8b0000; text-align: center;">Error: ${xhr.responseText || 'Unknown error occurred'}</p>`).dialog({
                    resizable: false,
                    title: "Verification Error",
                    modal: true,
                    height: 'auto',
                    minHeight: 200,
                    minWidth: 400,
                    buttons: [{
                            text: (labelObject['Ok'] || 'Ok'),
                            click: function () {
                                $(this).html("").dialog("close");
                                resolve({result: false});  // Resolve with false
                            }
                        }]
                });
            }
        });
    });
}
function processUpdateOrDeleteAjax(operation, url, dataView, finalData, tabId, basicData) {
    let labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
    }
    if (operation != 'calculateStock') {
        var reqNumber = $("#REQ_NUMBER").val() != null ? $("#REQ_NUMBER").val() : "";
        var status = $("#STATUS").val() != null ? $("#STATUS").val() : "";
        $.ajax({
            type: "POST",
            url: url,
            data: {
                dataView: dataView,
                jsonData: finalData,
                gridId: tabId,
                panelId: $("#panelId").val(),
                'STATUS': status,
                'REQ_NUMBER': reqNumber,
                checkAttachType: ($("#checkAttachType").val() != null ? $("#checkAttachType").val() : ""),
                initParamSource: ($("#initParamSource").val() != null ? $("#initParamSource").val() : "")
            },
            traditional: true,
            cache: false,
            success: function (result) {
                stopLoader();
                var resultMessage;
                var response = JSON.parse(result);
                var resultNew = response.Message;
                var flag = response.messageFlag;
                var reason = response.reason;
                console.log(operation + ':::::reason:::::::::::::' + reason);

                if (result == null || result == "") {
                    result = "Failed to Update!"
                    result = (labelObject[result] != null ? labelObject[result] : result);
                }
                var hiddenGridId = $('#' + tabId + "_HIDDEN").val();
                if (dataView == "GRID-VIEW" && operation == "delete") {
                    try {
                        var selectedRowIndexes = $('#' + tabId).jqxGrid('getselectedrowindexes');
                        for (var i = 0; i < selectedRowIndexes; i++) {
                            if (selectedRowIndexes[i] != -1) {
                                var rowData = $('#' + tabId).jqxGrid('getrowdata', selectedRowIndexes[i]);

                                if (rowData != null) {
                                    var hiddenGridId = rowData[tabId + "_HIDDEN"];
                                }
                            }
                        }
                    } catch (e) {
                        var hiddenGridId = $('#' + tabId + "_HIDDEN").val();
                    }

                } else {
                    var hiddenGridId = $('#' + tabId + "_HIDDEN").val();
                }

                if (hiddenGridId != null && hiddenGridId == "INSERT" && operation == "delete" && resultNew.lastIndexOf("Failed") > -1) {
                    resultMessage = "No Record to Delete.";
                    resultMessage = (labelObject[resultMessage] != null ? labelObject[resultMessage] : resultMessage);
                } else
                {
                    resultMessage = response.Message;
                }
                if (operation == 'checkingTabData') {
                    checkingTabData(tabId, basicData, dataView);
                } else {
                    stopLoader();//23
                    var dialogSplitMessage = dialogSplitIconText(resultMessage, flag);
                    //NKR
                    var AIlensEnaOrDisFlag = 'N';
                    try {
                        AIlensEnaOrDisFlag = $("#AIEnableOrDisableFlag").val();
                    } catch (er) {
                        AIlensEnaOrDisFlag = 'N';
                    }

//                    if (AIlensEnaOrDisFlag != null && AIlensEnaOrDisFlag != "" && AIlensEnaOrDisFlag != undefined && AIlensEnaOrDisFlag == 'Y') {
//                        AILensTypingAndConfirmationMsg(dialogSplitMessage, "aiNotificationsResultClass", "N", "", "");
//                        //NKR
//                    } else {
                    var modalObj = {
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                        body: labelObject[dialogSplitMessage] != null ? labelObject[dialogSplitMessage] : dialogSplitMessage,
                    };
//                        var buttonArray = [
//                            {
//                                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
//                                click: function () {
//                                    if (flag) {
//                                        if (tabId != null && tabId.indexOf("ERP") > -1) {
//                                            fetchErpTab(tabId, '');
//                                        } else if (tabId != null
//                                                && (tabId.indexOf("MM_ATTACHMENTS") > -1
//                                                        || tabId.indexOf("SM_ATTACHMENTS") > -1
//                                                        || tabId.indexOf("SPEC_ATTACHMENTS") > -1)) {
//                                            fetchAttachmentsTabGridData(tabId);
//                                        } else {
//                                            fetchTabData(tabId, '');
//                                            var role = $("#rolehid").val();
//                                        }
//                                    } else {
//                                        if (dataView == "GRID-VIEW") {
//                                            if (tabId != null &&
//                                                    (tabId.indexOf("MM_ATTACHMENTS") > -1
//                                                            || tabId.indexOf("SM_ATTACHMENTS") > -1
//                                                            || tabId.indexOf("SPEC_ATTACHMENTS") > -1)) {
//                                                fetchAttachmentsTabGridData(tabId);
//                                                $('#' + tabId).jqxGrid('clearselection');
//                                            } else if (tabId != null && tabId.indexOf("ERP") > -1) {
//                                                fetchErpTab(tabId, '');
//                                            } else {
//                                                fetchTabData(tabId);
//                                                $('#' + tabId).jqxGrid('clearselection');
//                                            }
//                                        } else if (dataView == "FORM-VIEW") {
//                                            if (hiddenGridId != null && hiddenGridId == "INSERT" && operation == "delete") {
//                                                fetchTabData(tabId);
//                                            }
//                                        }
//                                    }
//                                },
//                                isCloseButton: true
//                            }
//                        ];
                    var buttonArray = [
                        {
                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
//                                $("#dialog5").dialog("destroy");
                                if (flag) {
                                    if (tabId != null && tabId.indexOf("ERP") > -1) {
                                        fetchErpTab(tabId, '');
                                    } else if (tabId != null
                                            && (tabId.indexOf("MM_ATTACHMENTS") > -1
                                                    || tabId.indexOf("SM_ATTACHMENTS") > -1
                                                    || tabId.indexOf("SPEC_ATTACHMENTS") > -1)) {
                                        fetchAttachmentsTabGridData(tabId);
                                    } else {
                                        fetchTabData(tabId, '');
                                        var role = $("#rolehid").val();
                                    }
                                } else {
                                    if (dataView == "GRID-VIEW") {
                                        if (tabId != null &&
                                                (tabId.indexOf("MM_ATTACHMENTS") > -1
                                                        || tabId.indexOf("SM_ATTACHMENTS") > -1
                                                        || tabId.indexOf("SPEC_ATTACHMENTS") > -1)) {
                                            fetchAttachmentsTabGridData(tabId);
                                            $('#' + tabId).jqxGrid('clearselection');
                                        } else if (tabId != null && tabId.indexOf("ERP") > -1) {
                                            fetchErpTab(tabId, '');
                                        } else {
                                            fetchTabData(tabId);
                                            $('#' + tabId).jqxGrid('clearselection');
                                        }
                                    } else if (dataView == "FORM-VIEW") {
                                        if (hiddenGridId != null && hiddenGridId == "INSERT" && operation == "delete") {
                                            fetchTabData(tabId);
                                        }
                                    }
                                }

                            }
                        }
                    ];

                    showButtonPopupMessage(resultMessage, buttonArray, 'Message');
                    if (tabId != null && tabId.indexOf("GENERAL") > -1 && flag) {
                        var gstCodeTax;
                        gstCodeTax = $("#GST_CODE_GEN").val();
                        $("#GST_CODE_BASE").val(gstCodeTax);
                    }
                    if (tabId != null && tabId.indexOf("TAXATION") > -1 && flag) {
                        var reciepientType = "OT";
                        var panCharTop, panCharTax;
                        panCharTax = $("#O_1IPANNO").val();
                        $("#PAN_NUMBER").val(panCharTax);
                        panCharTop = $("#PAN_NUMBER").val();
                        if (panCharTop && panCharTop.charAt(3) == "C") {
                            reciepientType = "CO";
                        }
                        $("#QSREC").val(reciepientType);
                    }
//                    }
                }
            },
            error: function (e) {
                console.log(e);
                stopLoader();
                sessionTimeout(e);
            }
        });
    }
}

function visionVerifyIdentity(label, fieldId, fieldValue, functionRef) {

    let result = false;
    if (typeof window[functionRef] === "function") {
        result = window[functionRef](fieldId);
        console.log("Result:", result);
    }

    if (!result) {
        return;
    }
    showLoader();
    const icon = $("#verify" + fieldId);
    const basicData = collectFormData();
    const currentTabId = $("#SelectedCurrentTabId").val();
    const fieldJson = {};
    fieldJson[fieldId] = fieldValue;
    const finalJsonData = {basicData, fieldData: fieldJson, tabId: currentTabId};

    $.ajax({
        url: "verifyIdentity",
        type: "POST",
        traditional: true,
        cache: false,
        data: {finalJsonData: JSON.stringify(finalJsonData)},
        success: function (response) {
            stopLoader();
            if (response && typeof response === 'object' && response.verificationStatus) {
                const verificationFailed = Object.values(response.verificationStatus).some(status => status.includes('FAILED'));
                const tableHtml = buildVerificationTable(response);
                showDialog(tableHtml, "Verification Result");
            } else {
                console.warn("Invalid or empty response:", response);
                showDialog('<h5 style="color: #8b0000; text-align: center;">No valid verification data received.</h5>', "Verification Error", true);
            }
        },
        error: function (xhr) {
            console.error("Verification error:", xhr.responseText);
            showDialog(`<p style="color: #8b0000; text-align: center;">Error: ${xhr.statusText || 'Unknown error occurred'}</p>`, "Verification Error", true);
        }
    });

    function collectFormData() {
        const basicData = {};
        $("#mat_creation_form_table :input").each(function () {
            const textId = $(this).attr("id");
            let textVal = $(this).val();
            if (textVal && textId !== 'CREATE_DATE') {
                if ($(this).attr("type") !== 'hidden') {
                    textVal = textVal.toUpperCase();
                }
                basicData[textId] = textVal;
            }
            if (textId && textId.includes("HIDDEN")) {
                const columnNames = $("#" + textId).val();
                const columnsArray = columnNames ? columnNames.split(",") : [];
                const hiddenIds = textId.split("HIDDEN_");
                let hiddenVal = $("#" + hiddenIds[1]).val();
                if (hiddenVal) {
                    hiddenVal = hiddenVal.toUpperCase();
                    columnsArray.forEach(col => basicData[col] = hiddenVal);
                }
            }
        });
        for (const key in basicData) {
            if (key.includes("HiddenGridData")) {
                const erpData = basicData[key];
                if (erpData && erpData.includes(currentTabId)) {
                    const erpTabGridId = key.replace("HiddenGridData", "");
                    $("#erpTabGridId").val(erpTabGridId);
                    basicData['erpTabGridId'] = erpTabGridId;
                }
            }
        }
        return basicData;
    }

    function buildVerificationTable(response) {
//    let tableHtml = `
//      <div class="table-container">
//        <div class="table-title">Verification Status</div>
//        <table id="verificationStatusTable">
//          <thead><tr><th>Field</th><th>Status</th></tr></thead>
//          <tbody>
//    `;
//    Object.entries(response.verificationStatus).forEach(([field, status]) => {
//      const fieldName = field.replace(/_/g, ' ');
//      const statusClass = status === 'SUCCESS' ? 'success' : status.includes('FAILED') ? 'failed' : 'not-verified';
//      tableHtml += `<tr><td>${fieldName}</td><td class="${statusClass}">${status}</td></tr>`;
//    });
//    tableHtml += `</tbody></table></div>`;
//    return tableHtml;

        let tableHtml = `
                        <style>
                            #verificationStatusTable {
                                width: 100%;
                                border-collapse: collapse;
                                font-family: Arial, sans-serif;
                            }
                            #verificationStatusTable th, #verificationStatusTable td {
                                border: 1px solid #cccccc;
                                padding: 8px;
                                text-align: left;
                            }
                            #verificationStatusTable th {
                                background-color: #f2f2f2;
                                font-weight: bold;
                            }
                            .success {
                                background-color: #e6ffe6;
                                color: #006400;
                            }
                            .failed {
                                background-color: #ffe6e6;
                                color: #8b0000;
                            }
                            .not-verified {
                                background-color: #fffacd;
                                color: #8b8000;
                            }
                            .table-container {
                                padding: 16px;
                            }
                            .table-title {
                                font-size: 18px;
                                font-weight: bold;
                                text-align: center;
                                margin-bottom: 16px;
                            }
                            .update-count {
                                text-align: center;
                                margin-top: 16px;
                                font-family: Arial, sans-serif;
                            }
                        </style>
                        <div class="table-container">
                            <div class="table-title">Verification Status</div>
                            <table id="verificationStatusTable">
                                <thead>
                                    <tr>
                                        <th>Field</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                    `;

        Object.entries(response.verificationStatus).forEach(([field, status]) => {
            const fieldName = field.replace(/_/g, ' ');
            const statusClass = status === 'SUCCESS'
                    ? 'success'
                    : status.includes('FAILED')
                    ? 'failed'
                    : 'not-verified';
            tableHtml += `
                            <tr>
                                <td>${fieldName}</td>
                                <td class="${statusClass}">${status}</td>
                            </tr>
                        `;
        });

        tableHtml += `
                                </tbody>
                            </table>
                        </div>
                    `;
        return tableHtml;
    }

    function showDialog(html, title, isError = false) {
        $("#dialog").html(html).dialog({
            resizable: false,
            title,
            modal: true,
            height: 'auto',
            minHeight: isError ? 200 : 300,
            width: 500,
            buttons: [{
                    text: 'Ok',
                    click: function () {
                        $(this).html("").dialog("close");
                    }
                }],
            open: function () {
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function () {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });
    }
}
// Field level verification code end
function showGridSideFormResults(basicDataStr, showType) {
    if (basicDataStr != null && basicDataStr != undefined && basicDataStr != '') {
        localStorage.removeItem("basicDataStr");
        localStorage.setItem("basicDataStr", basicDataStr);
    } else {
        basicDataStr = localStorage.getItem("basicDataStr")
    }
    showLoader();

    if (showType != null && showType != undefined && showType != '' && showType == 'INFO') {
        var rowoverviewHTML = "<div class=\"custom-accordion\">\n" +
                "    <div class=\"accordion-section\">\n" +
                "      <div class=\"accordion-header d-flex align-items-center justify-content-between active\"><div class=\"\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> <span>Header Information</span></div><span><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></span></div>\n" +
                "      <div class=\"accordion-body\" id=\"headerDataAppend\">\n" +
//                "        <div class=\"d-flex align-items-center justify-content-between\">\n" +
//                "            <div class=\"rowInfoDataWrapper\">\n" +
//                "            </div>\n" +
//                "            <div class=\"rowinfoImg\">\n" +
//                "                 <img src=\"images/iDXPUI5GeneralInfo.svg\" alt=\"info_image\" />\n" +
//                "            </div>\n" +
//                "        </div>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "    \n" +
                "    <div class=\"accordion-section\">\n" +
                "      <div class=\"accordion-header d-flex align-items-center justify-content-between\" onclick=\"showGridSideFormResults('','CHAR')\"><div class=\"\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> <span>Characteristics Values</span></div><span><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></span></div>\n" +
                "      <div class=\"accordion-body\">\n" +
                "        <div class='accrCharFrmGridClass'></div>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "    \n" +
                "    <div class=\"accordion-section\">\n" +
                "      <div class=\"accordion-header d-flex align-items-center justify-content-between\" onclick=\"showGridSideFormResults('','REF')\"><div class=\"\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> <span>Reference Data</span></div><span><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></span></div>\n" +
                "      <div class=\"accordion-body\">\n" +
                "        <div class='accrRefFrmGridClass rowInfoDataWrapper '></div>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "    \n" +
                "    <div class=\"accordion-section\">\n" +
                "      <div class=\"accordion-header d-flex align-items-center justify-content-between\" onclick=\"showGridSideFormResults('','DOC')\"><div class=\"\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> <span>Documentation</span></div><span><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></span></div>\n" +
                "      <div class=\"accordion-body\">\n" +
                "        <div class='accrDocFrmGridClass rowInfoDataWrapper'></div>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "    <div class=\"accordion-section\">\n" +
                "      <div class=\"accordion-header d-flex align-items-center justify-content-between\" onclick=\"showGridSideFormResults('','ATT')\"><div class=\"\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> <span>Attachment Information</span></div><span><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></span></div>\n" +
                "      <div class=\"accordion-body\">\n" +
                "        <div class='accrAttachFrmGridClass'></div>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "    <div class=\"accordion-section\">\n" +
                "      <div class=\"accordion-header d-flex align-items-center justify-content-between\" onclick=\"showGridSideFormResults('','DES')\"><div class=\"\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> <span>Description Information</span></div><span><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></span></div>\n" +
                "      <div class=\"accordion-body\">\n" +
                "        <div class='accrDescFrmGridClass'></div>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "    <div class=\"accordion-section\">\n" +
                "      <div class=\"accordion-header d-flex align-items-center justify-content-between\" onclick=\"showGridSideFormResults('','ADD')\"><div class=\"\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> <span>Additional Text Information</span></div><span><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></span></div>\n" +
                "      <div class=\"accordion-body\">\n" +
                "        <div class='accrAddInfoFrmGridClass'></div>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "  </div>";

        $('.idxpGridRowOverviewWrapper').html(rowoverviewHTML);
        $('.accordion-section').eq(0).find('.accordion-body').slideDown();
        $('.accordion-header').click(function () {
            $(this).next('.accordion-body').slideToggle();
            $(this).toggleClass('active');
        });

    }

    $.ajax({
        url: "getGridSideFormResults",
        type: "POST",
        traditional: true,
        cache: false,
        data: {
            basicData: basicDataStr,
            showType: showType
        },
        traditional: true,
        cache: false,
        success: function (result) {
            stopLoader();
            $('.dxpContentWrapper').css('display', 'flex');
            $('.idxpGridRowOverviewWrapper').css({
                'width': '30%',
                'display': 'block'
            });
            $('.dxpContentAccPageClass').css({
                'width': '70%'
            });
            if (showType != null && showType != undefined && showType != '' && showType == 'INFO') {
                $('#headerDataAppend').html(result);
            } else if (showType != null && showType != undefined && showType != '' && showType == 'CHAR') {
                $('.accrCharFrmGridClass').html(result);
            } else if (showType != null && showType != undefined && showType != '' && showType == 'REF') {
                $('.accrRefFrmGridClass').html(result);
            } else if (showType != null && showType != undefined && showType != '' && showType == 'DOC') {
                $('.accrDocFrmGridClass').html(result);
            } else if (showType != null && showType != undefined && showType != '' && showType == 'ATT') {
                $('.accrAttachFrmGridClass').html(result);
            } else if (showType != null && showType != undefined && showType != '' && showType == 'DES') {
                $('.accrDescFrmGridClass').html(result);
            } else if (showType != null && showType != undefined && showType != '' && showType == 'ADD') {
                $('.accrAddInfoFrmGridClass').html(result);
            }
        }
    });
}
function updateInvForecastParameters(gridId, type) {
    showLoader();
    var selectedrowindexes = $("#" + gridId).jqxGrid('getselectedrowindexes');
    var rowsLength = selectedrowindexes.length;
    if (selectedrowindexes != null && selectedrowindexes.length != 0) {
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
                recordCount++;
            }
        }
        var columnArr = [];
        var columns = $("#" + gridId).jqxGrid('columns').records;
        columns.forEach(function (col) {
            if (col.columntype !== 'checkbox') {
                columnArr.push(col.datafield);
            }
        });
        $.ajax({
            type: 'post',
            traditional: true,
            dataType: 'json',
            url: 'updateInvForecastParameters',
            cache: false,
            data: {
                cols: JSON.stringify(columnArr),
                selectedRow: JSON.stringify(selectedRow),
                gridId: gridId,
                type: type,
                tableName: $('#tableName').val()
            },
            success: function (response) {
                stopLoader();
                if (response.status) {
                    $("#dialog").html(response.report);
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                        modal: true,
                        height: 'auto',
                        minWidth: 300,
                        maxWidth: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    gridoperations(gridId, 'refresh');
                                }
                            }],
                        open: function () {
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(".visionHeaderMain").css("z-index", "9999");
                            $(".visionFooterMain").css("z-index", "9999");
                        },
                        beforeClose: function (event, ui)
                        {
                            gridoperations(gridId, 'refresh');
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }, close: function () {
                            gridoperations(gridId, 'refresh');
                        }
                    });
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                stopLoader();
                console.log(textStatus);
            }
        });
    } else {
        var message = 'Please select record(s) to process';
        popupMessage(message);
    }
}
function getAnalysisFormDb(gridId, type, formId) {
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    showLoader();
    $.ajax({
        url: "getEmptyForm",
        type: "post",
        data: {
            gridId: formId,
            fioriThemeFlag: fioriThemeCheck,
        },
        success: function (response, textStatus, jqXHR) {
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
                    width: 800,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Run Analysis'] != null ? labelObject['Run Analysis'] : 'Run Analysis'),
                            click: async function () {
                                var result = await runAnalysisDynamic(gridId, type, formId);
                                $(this).html("");
                                $(this).dialog("destroy");
                                console.log(result);
                                if (result.status) {
                                    gridoperations(gridId, 'refresh');
                                }
                                $("#dialog").html('<div id="mcrAnlysisChart"></div>');
                                $("#dialog").dialog({resizable: false,
                                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                    modal: true,
                                    height: 'auto',
                                    minWidth: 600,
                                    maxWidth: 'auto',
                                    fluid: true,
                                    buttons: [{
                                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                            click: function () {
                                                $(this).html("");
                                                $(this).dialog("destroy");
                                                if (result.status) {
                                                    gridoperations(gridId, 'refresh');
                                                }
                                            }
                                        }],
                                    open: function () {
                                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                        $(".visionHeaderMain").css("z-index", "9999");
                                        $(".visionFooterMain").css("z-index", "9999");
                                        if (result.status) {
                                            var values = [];
                                            var labels = [];
                                            var colorArr = [];
                                            $.each(result.list, function (index, value) {
                                                if (+value[0] == 1) {
                                                    colorArr.push('green')
                                                } else if (+value[0] == 2) {
                                                    colorArr.push('yellow')
                                                } else if (+value[0] == 3) {
                                                    colorArr.push('red')
                                                }
                                                labels.push(value[0]);
                                                values.push(value[1]);
                                            });
                                            var marker = {colors: colorArr};
                                            var data = [{
                                                    values: values,
                                                    labels: labels,
                                                    type: 'pie',
                                                    marker: marker
                                                }];

                                            var layout = {
                                                height: 400,
                                                width: 500
                                            };
                                            Plotly.newPlot('mcrAnlysisChart', data, layout);
                                        }
                                    },
                                    beforeClose: function (event, ui)
                                    {
                                        gridoperations(gridId, 'refresh');
                                        $(".visionHeaderMain").css("z-index", "99999");
                                        $(".visionFooterMain").css("z-index", "99999");
                                    }, close: function () {
                                        if (result.status) {
                                            gridoperations(gridId, 'refresh');
                                        }
                                    }
                                });
                            }
                        }]
                });
                $(".ui-dialog").addClass("AnalysisPopupForm");
                $(".ui-dialog").addClass("analysisPopupGridForm");
            }
        },
        error: function (error) {

        }
    });
}

function runAnalysisDynamic(gridId, type, formId) {
    return new Promise((resolve, reject) => {
        var paramsObj = {};
        var BatchId = $("#BATCH_ID").val();
        var $form = $("#" + formId + "_InputTableForm").find("input");
        paramsObj['tableName'] = $("#tableName").val();
        var columnArr = [];
        $form.each(function (index, element) {
            var textid = $(this).attr("id");
            var type = $(this).attr("type");
            var textval = $(this).val();
            if (type !== 'hidden') {
                if (textval !== null && textval !== '') {
                    textval = textval.toUpperCase();
                }
            }
            if (textid === 'Plant' && textval.indexOf(",") > -1) {
                textval = textval.split(',');
                textval = JSON.stringify(textval);
                textval = textval.replace(/"/g, '').replace(/\'/g, '');
            }
            paramsObj[textid] = textval;
            columnArr.push(textid);
        });
        paramsObj['BATCH_ID'] = BatchId;
        var columnArr = [];
        var columns = $("#" + gridId).jqxGrid('columns').records;
        columns.forEach(function (col) {
            if (col.columntype !== 'checkbox') {
                columnArr.push(col.datafield);
            }
        });
        var columnString = columnArr.join(',');
        paramsObj['colsArray'] = columnString;
        var errorCount = 0;
        $("#" + formId + "_InputTableForm :input").each(function ()
        {

            var id = $(this).attr('id');
            var mand = $(this).attr("data-mandatory");
            var label = $(this).attr("data-label");
            mand = (mand === "M") ? "M" : "O";
            var regex = $(this).attr("data-regex");
            if (id != null && id != '' && id != 'undefined')
            {
                var returnBoolean = regexFunction(id, regex, mand, tableName, label);
                if (returnBoolean == false)
                {
                    errorCount++;
                }
            }

        });
        console.log("errorCount:::" + errorCount);
        if (errorCount == 0) {
            showLoader();
            $.ajax({
                type: 'post',
                traditional: true,
                dataType: 'json',
                url: 'updateInvForecastParameters',
                cache: false,
                data: {
                    requestBody: JSON.stringify(paramsObj),
                    type: type,
                    analysis: true
                },
                success: function (response, textStatus, jqXHR) {
                    stopLoader();
                    resolve(response);
                }, error: function (jqXHR, textStatus, errorThrown) {
                    stopLoader();
                    resolve(textStatus);
                }
            })
        }
    })
}
function configButtonFunRegistraion(gridId) {
    var basicData = {};
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    basicData['baskettype'] = "New Registration";
    if (!fioriThemeCheck) {
        basicData['baskettype'] = "New Registrations";
    }
    basicData['gridId'] = gridId;
    basicData['GRID_ID'] = gridId;
    basicData['buttonValue'] = "Register";
    basicData['PANEL_ID'] = $("#panelId").val();
    basicData['panelId'] = $("#panelId").val();
    basicData['FORM_ID'] = $("#formId").val();
    basicData['formId'] = $("#formId").val();
    basicData['imageTable'] = $("#imageTable").val();
    basicData['imageTableColumn'] = $("#imageTableColumn").val();
    basicData['linkedColumns'] = $("#linkedColumns").val();
    basicData['imageTable'] = $("#imageTable").val();
    basicData['STATUS'] = "V1-REGISTERED";
    basicData['IS_NEW'] = "Y";
    $("#currentSearchReqType").val("V");
    var itemStr = JSON.stringify(basicData);
    navigateToVendorRegistrationForm(itemStr);
}
function navigateToMOCRForm(datafield, data, redirectType, gridId, selectedTabId, selectingrowindex, showtabFlag, divId, parentTreeItemValue) {
    var hrefColumn = "";
    try {
        var hrefColumn = $("#hrefColumn").val();
    } catch (ee) {
        hrefColumn = "";
    }
    $("#currentGridId").val(gridId);
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    if (!(divId != null && divId != '' && divId != undefined))
    {
        divId = 'dxpMOCRPendingTreeFormDiv'
    }

    try {
        var selectedGridObjStr = $("#" + gridId).attr("data-gridResultObj");
        var responseObj = JSON.parse(selectedGridObjStr);
        var hrefObj = responseObj.hrefObj;
        var gridInitParamObj = responseObj.gridInitParamObj;
        var hrefColumn1 = hrefObj['hrefColumn'];
        if (hrefColumn1 != null && hrefColumn1 != undefined && hrefColumn1 != '') {
            hrefColumn = hrefColumn1;
        }
//        var treeId = gridInitParamObj['uuu_mocrTreeId'];
//        $('#dxpMOCRPendingTreeWithGridSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0,
//            panels: [{size: '25%', min: 150, resizable: true}, {size: '74%', min: 150, resizable: true}]
//        });
//        showSelectedTabContent(null, 'dxpMOCRPendingTreeWithGrid', 'dxpMOCRPendingTreeWithGridContent', 'View MOCR Form', 'N');
//        getPendingAssetTreeobject(treeId, "dxpMOCRPendingTreeDiv", parentTreeItemValue);
    } catch (e) {
    }
    var basicData = {};

    if (responseObj)
        console.log("hrefColumn:::::" + hrefColumn);
    //  var datafield = column.datafield;
    if (datafield != null && (datafield == hrefColumn || datafield == "show_detail")) {
        showLoader();
        var navigationGridId = "";
        firstPanelShowFlag = true;
        secondPanelShowFlag = true;
        $('.viewFormDiv').removeClass('active');
        $('.viewFormBasketDiv').removeClass('active');
        $('.viewClassDiv').removeClass('active');
        $('.viewClassBasketDiv').removeClass('active');
        var items = {};
        var linkedColumns = '';
        var datalinkedColumns = '';
        try {
            datalinkedColumns = data['linkedColumns'];
        } catch (e) {
            datalinkedColumns = '';
        }
        if (hrefObj != null && hrefObj != undefined && hrefObj != '') {
            linkedColumns = hrefObj['linkedColumns'];
        } else
        {
            if (datalinkedColumns != null && datalinkedColumns != undefined && datalinkedColumns != '') {
                linkedColumns = datalinkedColumns;
            } else {
                linkedColumns = $("#linkedColumns").val();
            }

        }
        linkedColumns.replace(/(^,)|(,$)/g, "");

//        var linkedColumns = "RECORD_NO,INSTANCE,BUSINESS_UNIT";
//        $("#linkedColumns").val(linkedColumns);
        if (linkedColumns != null && linkedColumns != '') {
            for (var key in data) {
                if (key.lastIndexOf("PLANT") > -1) {
                    items[key] = data[key];
                }
                if (linkedColumns.lastIndexOf(key) > -1) {

                    var value = data[key];
                    //    console.log("key::::" + key + ":::value::::" + value);
                    value = value.replace(/\s/gi, "_");
                    value = value.replace(/[#]/g, "_");
                    //  console.log("key::::" + key + ":::value::::" + value);
                    items[key] = value;
                }
            }
        }
        var stripValue = $("#stripValue").val();
        if (stripValue == null || stripValue != undefined || stripValue == '') {
            stripValue = "CONCEPT_ID,#;";
            $("#stripValue").val(stripValue);
        }
        var stripValueObjArray = [];
        if (stripValue != null) {
            var stripValObj = stripValue.split(";");
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

        }

        var hiddenObjStr = $("#hiddenObj").val();
        if (hiddenObjStr != null && hiddenObjStr != '' && hiddenObjStr != undefined) {
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
//                                                items[columnsArray[i]] = encodeURIComponent(hiddenVal);

                            }
                        }

                    }
                } else {
                    //alert("Value is null");
                }
            }
        }

        var panelId = '';
        try {
            if (panelId == null || panelId == '' || panelId == undefined) {
                panelId = data['panelId'];
            }
        } catch (e) {
        }
        try {
            if (panelId == null || panelId == '' || panelId == undefined) {
                panelId = responseObj.panelId;
            }
        } catch (e) {
        }
        try {
            if (panelId == null || panelId == '' || panelId == undefined) {
                panelId = $("#panelId").val();
            }
        } catch (e) {
        }
//        var currentGridId = $("#currentGridId").val();
        var currentDomain = $("#currentDomain").val();
        var operationName = $("#operationName").val();
        if (gridId == null || gridId == '' || gridId == undefined) {
            gridId = $("#currentGridId").val();
        }
//        $("#classConceptId").val(data['CONCEPT_ID']);  
        $("#panelId").val(panelId);
        items.stripValue = stripValueObjArray;
        items.imageTable = $("#imageTable").val();
        items.imageTableColumn = $("#imageTableColumn").val();
        items.imageColumn = $("#imageColumn").val();
        items.CONCEPT_ID = data['CONCEPT_ID'];
        items.linkedColumns = linkedColumns;
        items.gridId = gridId;
        items.panelId = panelId;

        if (data['TERM'] != null && data['TERM'] != '') {
            items.TERM = data['TERM'];
        }
        if (data['CLASS_TERM'] != null && data['CLASS_TERM'] != '') {
            items.CLASS_TERM = data['CLASS_TERM'];
        }
        items.BUSINESS_UNIT = data['BUSINESS_UNIT'];
        items.INSTANCE = data['INSTANCE'];
        items.selectingrowindex = data['boundindex'];
        items.showFlag = $("#showFlag").val();
        items['VENDOR_NAME'] = data['SUPPLIER_NAME'];
        items['OldRole'] = localStorage.getItem("OldRole");
        data['OldRole'] = localStorage.getItem("OldRole");

//        items.tabId = "MM_PENDING_REQ_REG_MGR_TAB";
//    var datainformation = $('#' + items.gridId).jqxGrid('getdatainformation');
//    var rowscount = datainformation.rowscount;
//    items.selectingrowindex = selectingrowindex;
//    items.rowscount = rowscount;
        items['gridId'] = gridId;
        var itemsstring = JSON.stringify(items);
        $("#itemsstring").val(itemsstring);
        if (fioriThemeCheck) {
            try {
                var basketTitle = responseObj['gridName']
                var backClass = $(event.currentTarget).attr("class");
                firorMenuPopoverText(basketTitle);
                if (!(backClass != null && backClass != undefined) || !backClass.includes("Back")) {
                    var firorDomainObj = {};
                    firorDomainObj[basketTitle] = `navigateToForm(${datafield}, ${data}, ${redirectType},${redirectType}, ${gridId}, ${selectedTabId}, ${selectingrowindex}, ${showtabFlag})`;
                    backDomainCumArray.push(firorDomainObj);
                }

            } catch (e) {
                console.log(e);
            }
        }
        if (datafield == hrefColumn) {
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: "formData",
                cache: false,
                data: {
                    items: itemsstring,
                    data: JSON.stringify(data),
                    fioriThemeFlag: fioriThemeCheck,
                },
                success: function (response) {
                    stopLoader();
                    var form = response['formStr'];
                    try {
                        var hrefColumn1 = response['hrefColumn'];
                        if (hrefColumn1 != null
                                && hrefColumn1 != ''
                                && hrefColumn1 != undefined) {
                            var hrefColumn = hrefColumn1;
                        }

                    } catch (er) {

                    }
                    //getMOCRHierData("", mocrNo);
                    var DuplCheckEnableflag = response['ssDuplCheckEnableFlag'];
                    var panellist = response['panellist'];
                    $("#ssDuplCheckEnableFlag").val(DuplCheckEnableflag);
                    $("#hrefColumn").val(hrefColumn);
//             var tapForm = form['topForm'];
//            var formObj = {};
//            formObj = 
                    //fourthDxpSplitterData
                    $(".dxpGridHideShow").show();
//            $("#fourthDxpSplitter").show();
//            $("#thirdDxpSplitter").show();
                    try {
                        if ($("#dxpTabs").is(":visible")) {

                        } else {
                            toggleTabsAndMenus(event);
                        }
                    } catch (ee) {
                    }
                    var dxpAdavanceSearchOptions = $('#dxpAdavanceSearchOptions').val();
                    if (dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != undefined
                            && dxpAdavanceSearchOptions != '' && (dxpAdavanceSearchOptions == 'C' || dxpAdavanceSearchOptions == 'P' || dxpAdavanceSearchOptions == 'PRA')) {
//                $("#searchresultsSplitter").html(form);
                        $("#" + divId).html(form);
                    } else if (dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != undefined
                            && dxpAdavanceSearchOptions != '' && (dxpAdavanceSearchOptions == 'S' || dxpAdavanceSearchOptions == 'D' ||
                                    dxpAdavanceSearchOptions == 'PR')) {
//                $("#fourthDxpSplitter").html(form);
                        $("#" + divId).html(form);
                    } else {
//                $("#fourthDxpSplitter").html(form);
                        $("#" + divId).html(form);
                    }
                    if (fioriThemeCheck) {
                        fioriTabSroller();
                        $("#registration").html("");
                        $(".fioriTopRightcontrolsdivWrapper div").each(function (index) {
                            if (index != 0) {
                                $(this).hide(); // Hide all except the first div
                            }
                        });
                        $("#" + divId).addClass("dxpFormSplitterTabsContent");
                    }
                    $(".materialBasketClass").show();
                    viewMapVendorList();
//                    var basketname = $("#basketName").val();
//                    if(basketname !='' && basketname !=undefined){
//                       $(".materialBasketClass").text(basketname); 
//                    }else{
//                           $(".materialBasketId").html("Search View"); 
//                    } 
                    let formDataObj = {};
                    formDataObj.datafield = datafield;
                    formDataObj.data = data;
                    formDataObj.redirectType = redirectType;
                    formDataObj.gridId = gridId;
                    formDataObj.selectedTabId = selectedTabId;
                    formDataObj.selectingrowindex = selectingrowindex;
                    $('#dxpVisionFormRefreshDivSpanImg').attr('data-attr', JSON.stringify(formDataObj));
                    $('#dxpVisionFormDataHidden').val(JSON.stringify(formDataObj));
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
                    if (showtabFlag != null && showtabFlag != undefined && showtabFlag != '' && showtabFlag == 'N') {
                    } else {
                        showSelectedTabContent(event, 'dxpFromTab', 'dxpFormContent', 'View Form', 'N');
                    }
//                      showSelectedTabContent(event, 'dxpFromTab', 'dxpFormContent','View Form','N');
                    validWorkflow();
                    if (fioriThemeCheck) {
                        $("#sortGerericDxpFormMianDiv").show();
                    } else {
                        $("#sortGerericDxpFormMianDiv").hide();
                    }

//                    $(".visionRegisterMaterialAccordians").find(".ui-accordion-header").addClass('particulorAccDiv');
//                    $("#visionRegistartionGenericAccordionSpan img").addClass('accordianDefultImg');
//
//
//                    $('.particulorAccDiv').on("mouseover", function () {
//                        $('.particulorAccDiv img').map(function () {
//                            var findAttrt = $(this).attr('src');
//                            var nn = findAttrt.replaceAll('W', '');
//                            $(this).attr('src', nn);
//                        });
//                        var findAttr = $(this).find('.accordianDefultImg').attr('src');
//                        var findedAttr = "";
//                        if (findAttr != null && findAttr != undefined && findAttr != '') {
//                            findedAttr = findAttr.split('.');
//                        }
//                        if (findedAttr != null && findedAttr != undefined && findedAttr != '') {
//                            var srcFileName = findedAttr[0] + 'W.' + findedAttr[1];
//                            $(this).find('.accordianDefultImg').attr('src', srcFileName);
//                        }
//
//
//                    });
//
//                    $('.particulorAccDiv').on("mouseout", function () {
//                        $('.particulorAccDiv img').map(function () {
//                            var findAttrt = $(this).attr('src');
//                            var nn = findAttrt.replaceAll('W', '');
//                            $(this).attr('src', nn);
//                        });
//                    });
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
//                    $(".ccGuideInfo").mouseover(function () {
//                        $('#colorBlueID').remove();
//                        var htmlData = "<ul class=\"color_IndicatioUl\"><li class=\"\"><span class=\"mfGuideColorIndex\"><svg  height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#000fff\"></svg></span><span class=\"mfGuideColorIndexText\"> AutoGenerate</span></li>"
//                                + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#ff1a1a\"></svg></span><span class=\"mfGuideColorIndexText\"> Mandatory </span></li>"
//                                + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#688280\"></svg></span><span class=\"mfGuideColorIndexText\"> Optional </span></li>"
//                                + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#32a852\"></svg></span><span class=\"mfGuideColorIndexText\"> AutoPopulate </span></li></ul>";
//                        $(this).append('<div id = "colorBlueID"></div>');
//                        $('#colorBlueID').html(htmlData);
//                        $('#colorBlueID').jqxPopover({
//                            showArrow: true,
//                            width: 115,
//                            height: 120,
//                            showCloseButton: false,
//                            position: 'right',
//                            selector: $(this)
//                        });
//                        setTimeout(function () {
//                            $("#colorBlueID").jqxPopover('open');
//                        }, 5000);
//                    });
                    var matchcount = 0;
                    var Accordiangrid = "";
                    var gridid = "";
                    if (fioriThemeCheck) {
                        $(".fioriformTabUlListclass li").on('click', function (event, ui) {
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

// $("#regRorm4").css("display", "block");
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
                                                                var newIndex = $(event.newHeader).index();
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
                        //FIORI
                    }
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

// $("#regRorm4").css("display", "block");
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
                    $(".defaultShowCards").hide();
                    $("#accdiv h3").click(function () {
                        var a = event.target.id;
                        let self = $(this).offset().top;
                        console.log(self);
                        setTimeout(function () {
                            $('.dxpContentAccPageClass').animate({scrollTop: self - 80}, 'swing');
                        }, 310);
                    });
                    if (fioriThemeCheck) {
                        $(document).ready(function () {
                            $('#allTabListMainWrapperId ul.fioriformTabUlListclass li:first').click();
                            $('#allTabListMainWrapperId ul.fioriformTabUlListclass li:first').addClass("fioriHighlightTab");
                        });
                    }
                },
                error: function (e) {
                    stopLoader();
//                    sessionTimeout(e);
                }// Error function in Ajax
            });
        } else if (datafield == "show_detail") {
            showPdfData(gridId, selectedTabId);
        }
    }
}
