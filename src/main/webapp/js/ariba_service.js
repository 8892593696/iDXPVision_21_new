var sourcejsonArray = [];
var resultjsonArray = [];
var msgIdArray = [];
var windowHeight;
var pageHeader;
var pageFooter;
var pageBreadcrum;
var pageOperations;
var gridHeight;
var gridHeightInner;
var tabHeightInner;
var buttonGroups = "";
var pageBodycontainerdata;
var $pageBodycontainer;
var pageBodycontinertop;
var pageBodycontinerbottom;
$(document).ready(function () {
    $(window).resize(function ()
    {

        windowHeight = $(window).height();
        pageHeader = $(".visionHeader").height();
        pageFooter = $(".visionFooterMain").height();
        pageBreadcrum = $(".visionBreadcrumMain").height();
        $pageBodycontainer = $('.visionBodyContent');
        pageBodycontinertop = parseInt($pageBodycontainer.css('padding-top'));
        pageBodycontinerbottom = parseInt($pageBodycontainer.css('padding-bottom'));
        gridHeight = windowHeight - pageHeader - pageFooter - pageBreadcrum - pageBodycontinertop - pageBodycontinerbottom - 5;
        pageBodycontainerdata = $('.visionAribaTable').outerHeight(true);
        gridHeightInner = gridHeight - pageBodycontainerdata - 20;


    }).resize();

});
function getAribaMessages() {
    $(window).resize(function ()
    {
        var windowWidth = $(this).width();
        if (windowWidth >= 500)
        {
            $(".visionAribaMain").css("height", gridHeight + "px", "important");
        } else
        {
            $(".visionAribaMain").css("height", "auto", "important");
        }
    }).resize();
    msgIdArray = [];
    var req = {};
    req.type = 'POST';
    req.url = 'aribagetmessagesfromservice';
    req.data = {};
    req.success = function (response) {
        resultjsonArray = JSON.parse(response);
        sourcejsonArray = [];
        var i = 0;
        for (i = 0; i < resultjsonArray.length; i++) {

            var jobj = {};
            var extended_profile_ApplicationName = resultjsonArray[i].extended_profile.applicationName;
            var extended_profile_Path = resultjsonArray[i].extended_profile.path;
            var buyerId = extended_profile_Path;
            var baseId = "";
            buyerId = (buyerId.substring(buyerId.indexOf("Buyers('") + 8, buyerId.length));
            buyerId = buyerId.substring(0, buyerId.indexOf("')"));
            if (extended_profile_ApplicationName == "SIPM") {
                baseId = extended_profile_Path;
                baseId = (baseId.substring(baseId.indexOf("baseId='") + 8, baseId.length - 1));
                jobj.extendUpdate = true;
            }
            jobj.msgId = resultjsonArray[i].msgId;
            jobj.profile_Path = resultjsonArray[i].profile.path;
            jobj.profile_Status = resultjsonArray[i].profile.status;
            jobj.supplierId = resultjsonArray[i].supplierId;
            jobj.supplierstatus = resultjsonArray[i].status;
            jobj.extended_profile_status = resultjsonArray[i].extended_profile.status;
            jobj.extended_profile_ApplicationName = extended_profile_ApplicationName;
            jobj.extended_profile_Path = extended_profile_Path;
            jobj.buyerId = buyerId;
            jobj.baseId = baseId;
            jobj.createvendor = resultjsonArray[i].msgId;
            sourcejsonArray.push(jobj);
            msgIdArray.push(resultjsonArray[i].msgId);
        }
        if (sourcejsonArray.length > 0) {
            createGridDiv();
            var source = {
                localData: sourcejsonArray,
                dataType: "array",
                datafields:
                        [
                            {name: 'msgId', type: 'string'}
                            , {name: 'supplierId', type: 'string'}
                            , {name: 'buyerId', type: 'string'},
                            , {name: 'profile_Status', type: 'string'}
                            , {name: 'baseId', type: 'string'}
                            , {name: 'extended_profile_status', type: 'string'}
                            , {name: 'extended_profile_Path', type: 'string'}
                            , {name: 'profile_Path', type: 'string'}
                            , {name: 'extended_profile_ApplicationName', type: 'string'}
                            , {name: 'createvendor', type: 'string'}
                            , {name: 'extendUpdate', type: 'string'}

                        ]
            };


            var dataAdapter = new $.jqx.dataAdapter(source);

            $(window).resize(function ()
            {
                var windowWidth = $(this).width();
                if (windowWidth >= 500)
                {
                    $("#dataTable").jqxGrid({'height': gridHeightInner + "px"});
                } else
                {
                    $("#dataTable").jqxGrid({'height': "100%"});
                }
            }).resize();

            $("#dataTable").jqxGrid({
                source: dataAdapter,
                showtoolbar: false,
                width: '99%',
                autoshowfiltericon: true,
                theme: 'energyblue',
                columnsresize: true,
                pageable: true,
                pagesize: 15,
                selectionmode: 'checkbox',
                verticalscrollbarstep: 100,
                pagesizeoptions: ['15', '25', '50', '100', '250', '500', '1000'],
                sortable: true,
                showfilterrow: true,
                filterable: true,
                columns: [
                    {text: 'Message ID', dataField: 'msgId', width: 270, align: 'center', cellsalign: 'left'},
                    {text: 'Supplier ID', dataField: 'supplierId', width: 140, align: 'center', cellsalign: 'left'},
                    {text: 'Buyer ID', dataField: 'buyerId', width: 140, align: 'center', cellsalign: 'left'},
                    {text: 'Basic Profile Status', dataField: 'profile_Status', width: 140, align: 'center', cellsalign: 'left'},
                    {text: 'Base ID', dataField: 'baseId', width: 165, align: 'center', cellsalign: 'left'},
                    {text: 'Extend Profile Status', dataField: 'extended_profile_status', width: 165, align: 'center', cellsalign: 'left'},
                    {text: 'Extend Application Name', dataField: 'extended_profile_ApplicationName', width: 240, align: 'center', cellsalign: 'left'},
                    {text: 'Basic Profile Path', dataField: 'profile_Path', hidden: true}, {text: 'Extend Profile Path', dataField: 'extended_profile_Path', hidden: true}
                ]
            });

            $("#dataTable").on("filter", function (event) {

                $("#dataTable").jqxGrid('clearselection');


            });
            $(window).resize(function () {
                var windowWidth = $(this).width();
                if (windowWidth <= 415)
                {
                    $("#dataTable").jqxGrid({pagerheight: 70});
                } else if (windowWidth >= 416 && windowWidth <= 500)
                {
                    $("#dataTable").jqxGrid({pagerheight: 40});
                } else
                {
                    $("#dataTable").jqxGrid({pagerheight: 30});
                }
            }).resize();
            disableButton("apq");
            enableButton("doi");
        } else {
            destroyGridDiv();
            $("#ariba").empty();
            var resutls = "No Items in Mail Queue.";
            var dialogSplitMessage = dialogSplitIconText(resutls, "Y");
            $("#ariba").html(dialogSplitMessage);
            $("#ariba").dialog({ resizable: false,
                title: "Messages",
                opacity: 5.5,
                zIndex: 10000,
                height: 'auto',
                minHeight: 'auto',
                fluid: true,
                buttons: {
                    ok: function () {
                        $("#ariba").dialog("close");
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

            $("#ariba").dialog('open');
            viewAribaData();
        }
    };
    req.error = function (e) {
        if (e.lastIndexOf("Session Timeout") > -1) {
            $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='images/help.png'></img></div><div style='float:left;margin-left: 10%;'>Session Timeout.</div></div>");
            $("#logoutDailog").dialog({ resizable: false,
                title: 'Message',
                modal: true,
                width: 270,
                height: 135,
                fluid: true,
                buttons: {
                    Ok: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        window.location.href = "timeout";
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
    };


    $.ajax(req);









}
;

function saveAribaMessages() {
    $(window).resize(function ()
    {
        var windowWidth = $(this).width();
        if (windowWidth >= 500)
        {
            $(".visionAribaMain").css("height", gridHeight + "px", "important");
        } else
        {
            $(".visionAribaMain").css("height", "auto", "important");
        }
    }).resize();
    var selectedVendors = {};
    selectedVendors.selectedvendornos = [];
    var rowindexes = $('#dataTable').jqxGrid('selectedrowindexes');
    for (var i = 0; i < rowindexes.length; i++)
    {
        selectedVendors.selectedvendornos.push($('#dataTable').jqxGrid('getrowdata', rowindexes[i]));
    }
    ;
    var req = {};
    req.url = 'aribasavemessages';
    req.method = 'post';
    req.data = {};
    req.data.jsonArray = JSON.stringify(selectedVendors.selectedvendornos);
    req.success = function (response) {
        disableButton("doi");
        viewAribaData();
    };
    req.error = function (e) {
        var status = e.status;
        if (e.lastIndexOf("Session Timeout") > -1) {
            $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='images/help.png'></img></div><div style='float:left;margin-left: 10%;'>Session Timeout.</div></div>");
            $("#logoutDailog").dialog({ resizable: false,
                title: 'Message',
                modal: true,
                width: 270,
                height: 135,
                fluid: true,
                buttons: {
                    Ok: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        window.location.href = "timeout";
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
    };
    $.ajax(req);


}
;





function viewAribaData() {
    $(window).resize(function ()
    {
        var windowWidth = $(this).width();
        if (windowWidth >= 500)
        {
            $(".visionAribaMain").css("height", (gridHeight + $(".visionAribaProcessButton").outerHeight(true) + 10) + "px", "important");
        } else
        {
            $(".visionAribaMain").css("height", "auto", "important");
        }
    }).resize();
    var req = {};
    req.url = 'aribaviewData';
    req.type = 'POST';
    req.data = {};
    req.success = function (response) {
        var array = JSON.parse(response);
        if (array.length > 0) {
            createGridDiv();
            var source = {
                localData: array,
                datafields:
                        [
                            {name: "MESSAGE_ID", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "SIPM_ID", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "ANID", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "NAME1", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "EMAIL", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "TELF1", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "TELFX", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "STREET1", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "STREET2", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "STREET3", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "CITY", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "POSTALCODE", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "REGIO", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "INCO1", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "ZTERM", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "J_1IEXRN", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "J_1IEXRG", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "J_1IEXDI", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "J_1IEXCO", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "J_1ICSTNO", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "J_1ILSTNO", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "J_1ISERN", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "J_1ISSIST", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "J_1IPANNO", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "ZWELS", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "BANKL", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "BANKN", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "BANKA", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "STRAS", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "BRNCH", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "PROVZ", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "TEL_CC_ISO", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "FAX_CC_ISO", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "FAX_AREA_CITY_CDE", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "TEL_AREA_CODE", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "SWIFT", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "IBAN", type: "string", align: 'center', cellsalign: 'left'}


                        ],
                datatype: "json"
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
            $(window).resize(function ()
            {
                var windowWidth = $(this).width();
                if (windowWidth >= 500)
                {
                    $("#dataTable").jqxGrid({'height': gridHeightInner + "px"});
                } else
                {
                    $("#dataTable").jqxGrid({'height': "100%"});
                }
            }).resize();
            $("#dataTable").jqxGrid({
                source: dataAdapter,
                showtoolbar: false,
                width: '99%',
                autoshowfiltericon: true,
                theme: 'energyblue',
                columnsresize: true,
                pageable: true,
                pagesize: 10,
                verticalscrollbarstep: 100,
                pagesizeoptions: ['15', '25', '50', '100', '250', '500', '1000'],
                ready: function () {
                },
                sortable: true,
                showfilterrow: true,
                filterable: true,
                selectionmode: 'checkbox',
                columns: [
                    {text: 'Message ID', hidden: true, dataField: 'MESSAGE_ID', width: 270, cellsalign: 'left', align: 'center'},
                    {text: 'SIPM ID', dataField: 'SIPM_ID', width: 270, cellsalign: 'left', align: 'center'},
                    {text: 'Ariba ID', dataField: 'ANID', width: 200, cellsalign: 'left', align: 'center'},
                    {text: 'Name', dataField: 'NAME1', width: 200, cellsalign: 'left', align: 'center'},
                    {text: 'E-Mail', dataField: 'EMAIL', width: 230, cellsalign: 'left', align: 'center'},
                    {text: 'Mobile No', dataField: 'TELF1', width: 210, cellsalign: 'left', align: 'center'},
                    {text: 'Fax No', dataField: 'TELFX', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Street 1', dataField: 'STREET1', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Street 2', dataField: 'STREET2', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Street 3', dataField: 'STREET3', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'City', dataField: 'CITY', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Postal Code', dataField: 'POSTALCODE', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'State', dataField: 'REGIO', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Inco Term', dataField: 'INCO1', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Payment Term', dataField: 'ZTERM', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Excise Registration No', dataField: 'J_1IEXRN', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Excise Range', dataField: 'J_1IEXRG', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Excise Division', dataField: 'J_1IEXDI', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Excise Commissionerate', dataField: 'J_1IEXCO', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'CST No', dataField: 'J_1ICSTNO', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'VAT LST No', dataField: 'J_1ILSTNO', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Service Tax Reg No', dataField: 'J_1ISERN', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'PAN No', dataField: 'J_1IPANNO', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'SSI Status', dataField: 'J_1ISSIST', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Mode Of Payment', dataField: 'ZWELS', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'IFSC Code', dataField: 'BANKL', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Account No', dataField: 'BANKN', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Bank Name', dataField: 'BANKA', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Address', dataField: 'STRAS', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Branch Name', dataField: 'BRNCH', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Bank State', dataField: 'PROVZ', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Tel CC', hidden: true, dataField: 'TEL_CC_ISO', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Fax CC', hidden: true, dataField: 'FAX_CC_ISO', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Fax Area Code', hidden: true, dataField: 'FAX_AREA_CITY_CDE', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Tel Area Code', hidden: true, dataField: 'TEL_AREA_CODE', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Tel Area Code', dataField: 'SWIFT', width: 240, cellsalign: 'left', align: 'center'},
                    {text: 'Tel Area Code', dataField: 'IBAN', width: 240, cellsalign: 'left', align: 'center'}
                ]});
            $("#dataTable").on("filter", function (event) {

                $("#dataTable").jqxGrid('clearselection');


            });
//            var $button = $("<input type='button' value='Process' class='visionAribaProcess' id='approvebutt' onclick='createVendorsAriba();'/>");
//            $("#pagerdataTable > div:first-child").append($button);
//            $button.attr('disabled', 'disabled');
//            $button.css('pointer-events', 'none');
//            var createButtonFn = function (event) {
//                var selectedrowindexes = $('#dataTable').jqxGrid('selectedrowindexes');
//                if (selectedrowindexes.length > 0) {
//                    $button.removeAttr('disabled');
//                    $button.css('pointer-events', 'auto');
//                } else {
//                    $button.attr('disabled', 'disabled');
//                    $button.css('pointer-events', 'none');
//                }
//            };
//            $("#dataTable").bind('rowselect', createButtonFn);
//            $("#dataTable").bind('rowunselect', createButtonFn);
//            $("#dataTable").jqxGrid('clearselection');
            $(".visionAribaData").css("padding", "10px");
            $(".visionAribaProcess").css("pointer-events", "none");
            $(".visionAribaProcess").attr("disabled", 'disabled');
            $(".visionAribaProcessButton").css("display", "block");
            var createButtonFn = function (event) {
                var selectedrowindexes = $('#dataTable').jqxGrid('selectedrowindexes');
                if (selectedrowindexes.length > 0)
                {
                    $(".visionAribaProcess").css("pointer-events", "auto");
                    $(".visionAribaProcess").removeAttr("disabled");
                } else
                {
                    $(".visionAribaProcess").css("pointer-events", "none");
                    $(".visionAribaProcess").attr("disabled", 'disabled');
                }
            };
            $("#dataTable").bind('rowselect', createButtonFn);
            $("#dataTable").bind('rowunselect', createButtonFn);
            $(window).resize(function () {
                var windowWidth = $(this).width();
                if (windowWidth <= 415)
                {
                    $("#dataTable").jqxGrid({pagerheight: 70});
                } else if (windowWidth >= 416 && windowWidth <= 500)
                {
                    $("#dataTable").jqxGrid({pagerheight: 40});
                } else
                {
                    $("#dataTable").jqxGrid({pagerheight: 30});
                }
            }).resize();
            $("#dataTable").jqxGrid('clearselection');
        } else {
            destroyGridDiv();
            $("#ariba").empty();
            var results = "No Pending Messages in view.";
            var dialogSplitMessage = dialogSplitIconText(results, "Y");
            $("#ariba").html(dialogSplitMessage);
            $("#ariba").dialog({ resizable: false,
                title: "Messages",
                opacity: 5.5,
                zIndex: 10000,
                height: 'auto',
                minHeight: 'auto',
                fluid: true,
                buttons: {
                    ok: function () {
                        $("#ariba").dialog("close");
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


            $("#ariba").dialog('open');
        }

    };
    req.error = function (e) {//
        var meg = e.statusText;
        var status = e.status;
        if (meg.lastIndexOf("Session Timeout") > -1) {
            $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='images/help.png'></img></div><div style='float:left;margin-left: 10%;'>Session Timeout.</div></div>");
            $("#logoutDailog").dialog({ resizable: false,
                title: 'Message',
                modal: true,
                width: 270,
                height: 135,
                fluid: true,
                buttons: {
                    Ok: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        window.location.href = "timeout";
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
    };
    $.ajax(req);
}
;

function createVendors(selectedInstance) {
    $(window).resize(function ()
    {
        var windowWidth = $(this).width();
        if (windowWidth >= 500)
        {
            $(".visionAribaMain").css("height", (gridHeight + $(".visionAribaProcessButton").outerHeight(true) + 10) + "px", "important");
        } else
        {
            $(".visionAribaMain").css("height", "auto", "important");
        }
    }).resize()
    var selectedVendors = {};
    selectedVendors.selectedvendornos = [];
    var rowindexes = $('#dataTable').jqxGrid('selectedrowindexes');
    for (var i = 0; i < rowindexes.length; i++)
    {
        selectedVendors.selectedvendornos.push($('#dataTable').jqxGrid('getrowdata', rowindexes[i]));
    }
    ;
    var req = {};
    req.url = 'aribasavearibaviewdata';
    req.type = 'POST';
    req.data = {};
    req.data.array = JSON.stringify(selectedVendors.selectedvendornos);
    req.data.selectedInstance = selectedInstance;
    req.success = function (response) {
        var resultJSON = JSON.parse(response);
        var $grid = $("<div></div>");
        var source =
                {
                    localdata: resultJSON,
                    datafields:
                            [
                                {name: "anid", type: "string", align: 'center', cellsalign: 'left'},
                                {name: "vendNo", type: "string", align: 'center', cellsalign: 'left'},
                                {name: "Message", type: "string", align: 'center', cellsalign: 'left'}
                            ],
                    datatype: "json"
                };
        var dataAdapter = new $.jqx.dataAdapter(source);
        $(window).resize(function ()
        {
            var windowWidth = $(this).width();
            if (windowWidth >= 500)
            {
                $grid.jqxGrid({'height': gridHeightInner + "px"});
            } else {
                $grid.jqxGrid({'height': "100%"});
            }
        }).resize();
        $(window).resize(function () {
            var windowWidth = $(this).width();
            if (windowWidth <= 360)
            {
                $grid.jqxGrid({pagerheight: 70});
            } else if (windowWidth >= 361 && windowWidth <= 500)
            {
                $grid.jqxGrid({pagerheight: 40});
            } else
            {
                $grid.jqxGrid({pagerheight: 30});
            }
        }).resize();
        $grid.jqxGrid(
                {
                    width: '100%',
                    source: dataAdapter,
                    autoshowfiltericon: true,
                    theme: 'energyblue',
                    columnsresize: true,
                    verticalscrollbarstep: 100,
                    sortable: true,
                    showfilterrow: true,
                    filterable: true,
                    ready: function () {
                    },
                    columns: [
                        {text: 'Ariba ID', dataField: 'anid', align: 'center', cellsalign: 'left', width: 180},
                        {text: 'Vendor Number', dataField: 'vendNo', align: 'center', cellsalign: 'left', width: 140},
                        {text: 'Message', dataField: 'Message', align: 'center', cellsalign: 'left', width: 270}
                    ]
                });

        $("#ariba").empty();
        $("#ariba").append($grid);
        $("#ariba").dialog({ resizable: false,
            title: 'Message',
            minWidth: 560,
            maxWidth: 800,
            height: 'auto',
            minHeight: 0,
            fluid: true,
            buttons: {
                Ok: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    window.location.reload();
                },
                close: function () {
                    window.location.reload();

                }
            },
            open: function () {
                $(this).closest(".ui-dialog").addClass("visionAribaVendorCreation");
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




    };
    req.error = function (e) {//
        var meg = e.statusText;
        var status = e.status;
        if (meg.lastIndexOf("Session Timeout") > -1) {
            $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='images/help.png'></img></div><div style='float:left;margin-left: 10%;'>Session Timeout.</div></div>");
            $("#logoutDailog").dialog({ resizable: false,
                title: 'Message',
                modal: true,
                width: 270,
                height: 135,
                fluid: true,
                buttons: {
                    Ok: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        window.location.href = "timeout";
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
    };
    $.ajax(req);
}
;



function viewErrorLog() {

    $(window).resize(function ()
    {
        var windowWidth = $(this).width();
        if (windowWidth >= 500)
        {
            $(".visionAribaMain").css("height", gridHeight + "px", "important");
        } else
        {
            $(".visionAribaMain").css("height", "auto", "important");
        }
    }).resize();
    var req = {};
    req.url = 'aribaErrorLog';
    req.type = 'POST';
    req.data = {};
    req.success = function (response) {
        var array = JSON.parse(response);
        if (array.length > 0) {
            createGridDiv();
            var source = {
                localData: array,
                datafields:
                        [
                            {name: "RECORD_NO", type: "string", align: 'left', cellsalign: 'center'},
                            {name: "RECORD_DESC", type: "string", align: 'left', cellsalign: 'center'},
                            {name: "CREATE_BY", type: "string", align: 'left', cellsalign: 'center'},
                            {name: "CREATE_DATE", type: "string", align: 'left', cellsalign: 'center'}


                        ],
                datatype: "json"
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
            $(window).resize(function ()
            {
                var windowWidth = $(this).width();
                if (windowWidth >= 500)
                {
                    $("#dataTable").jqxGrid({'height': gridHeightInner + "px"});
                } else
                {
                    $("#dataTable").jqxGrid({'height': "100%"});
                }
            }).resize();
            $("#dataTable").jqxGrid({
                source: dataAdapter,
                showtoolbar: false,
                width: '99%',
                autoshowfiltericon: true,
                theme: 'energyblue',
                columnsresize: true,
                pageable: true,
                pagesize: 10,
                verticalscrollbarstep: 100,
                pagesizeoptions: ['15', '25', '50', '100', '250', '500', '1000'],
                ready: function () {
                },
                sortable: true,
                showfilterrow: true,
                filterable: true,
                columns: [
                    {text: 'Record No', dataField: 'RECORD_NO', width: 100, cellsalign: 'left', align: 'center'},
                    {text: 'Record Desc', dataField: 'RECORD_DESC', width: 830, cellsalign: 'left', align: 'center'},
                    {text: 'Create By', dataField: 'CREATE_BY', width: 100, cellsalign: 'left', align: 'center', filtertype: 'checkedlist'},
                    {text: 'Create Date', dataField: 'CREATE_DATE', width: 160, cellsalign: 'left', align: 'center'}
                ]});
            $("#dataTable").jqxGrid('clearselection');
            $("#dataTable").on("filter", function (event) {

                $("#dataTable").jqxGrid('clearselection');


            });
            $(window).resize(function () {
                var windowWidth = $(this).width();
                if (windowWidth <= 415)
                {
                    $("#dataTable").jqxGrid({pagerheight: 70});
                } else if (windowWidth >= 416 && windowWidth <= 500)
                {
                    $("#dataTable").jqxGrid({pagerheight: 40});
                } else
                {
                    $("#dataTable").jqxGrid({pagerheight: 30});
                }
            }).resize();
        } else {
            destroyGridDiv();
            $("#ariba").empty();
            var results = "No Record Errors.";
            var dialogSplitMessage = dialogSplitIconText(results, "Y");
            $("#ariba").html(dialogSplitMessage);
            $("#ariba").dialog({ resizable: false,
                title: "Messages",
                opacity: 5.5,
                zIndex: 10000,
                height: 'auto',
                minHeight: 'auto',
                fluid: true,
                buttons: {
                    ok: function () {
                        $("#ariba").dialog("close");
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


            $("#ariba").dialog('open');
        }
    };
    req.error = function (e) {//
        var meg = e.statusText;
        var status = e.status;
        if (meg.lastIndexOf("Session Timeout") > -1) {
            $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='images/help.png'></img></div><div style='float:left;margin-left: 10%;'>Session Timeout.</div></div>");
            $("#logoutDailog").dialog({ resizable: false,
                title: 'Message',
                modal: true,
                width: 270,
                height: 135,
                fluid: true,
                buttons: {
                    Ok: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        window.location.href = "timeout";
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
    };
    $.ajax(req);
}
;

function viewProcessLog() {
    $(window).resize(function ()
    {
        var windowWidth = $(this).width();
        if (windowWidth >= 500)
        {
            $(".visionAribaMain").css("height", gridHeight + "px", "important");
        } else
        {
            $(".visionAribaMain").css("height", "auto", "important");
        }
    }).resize();
    $(".visionAribaProcessButton").css("display", "none");
    var req = {};
    req.url = 'aribaProcessLog';
    req.type = 'POST';
    req.data = {};
    req.success = function (response) {
        var array = JSON.parse(response);
        if (array.length > 0) {
            var source = {
                localData: array,
                datafields:
                        [
                            {name: "ARIBA_ID", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "ARIBA_DESC", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "CREATE_BY", type: "string", align: 'center', cellsalign: 'left'},
                            {name: "CREATE_DATE", type: "string", align: 'center', cellsalign: 'left'}


                        ],
                datatype: "json"
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
            $(window).resize(function ()
            {
                var windowWidth = $(this).width();
                if (windowWidth >= 500)
                {
                    $("#dataTable").jqxGrid({'height': gridHeightInner + "px"});
                } else
                {
                    $("#dataTable").jqxGrid({'height': "100%"});
                }
            }).resize();
            $("#dataTable").jqxGrid({
                source: dataAdapter,
                showtoolbar: false,
                width: '99%',
                autoshowfiltericon: true,
                theme: 'energyblue',
                columnsresize: true,
                pageable: true,
                pagesize: 10,
                verticalscrollbarstep: 100,
                pagesizeoptions: ['15', '25', '50', '100', '250', '500', '1000'],
                ready: function () {
                },
                sortable: true,
                showfilterrow: true,
                filterable: true,
                columns: [
                    {text: 'Ariba ID', dataField: 'ARIBA_ID', width: 100, cellsalign: 'left', align: 'center'},
                    {text: 'Ariba Desc', dataField: 'ARIBA_DESC', width: 830, cellsalign: 'left', align: 'center'},
                    {text: 'Create By', dataField: 'CREATE_BY', width: 100, cellsalign: 'left', align: 'center', filtertype: 'checkedlist'},
                    {text: 'Create Date', dataField: 'CREATE_DATE', width: 160, cellsalign: 'left', align: 'center'}
                ]});
            $("#dataTable").jqxGrid('clearselection');
            $("#dataTable").on("filter", function (event) {

                $("#dataTable").jqxGrid('clearselection');


            });
            $(window).resize(function () {
                var windowWidth = $(this).width();
                if (windowWidth <= 415)
                {
                    $("#dataTable").jqxGrid({pagerheight: 70});
                } else if (windowWidth >= 416 && windowWidth <= 500)
                {
                    $("#dataTable").jqxGrid({pagerheight: 40});
                } else
                {
                    $("#dataTable").jqxGrid({pagerheight: 30});
                }
            }).resize();
        } else {

            destroyGridDiv();
            $("#ariba").empty();
            var results = "No Process Errors.";
            var dialogSplitMessage = dialogSplitIconText(results, "Y");
            $("#ariba").html(dialogSplitMessage);
            $("#ariba").dialog({ resizable: false,
                title: "Messages",
                opacity: 5.5,
                zIndex: 10000,
                height: 'auto',
                minHeight: 'auto',
                fluid: true,
                buttons: {
                    ok: function () {
                        $("#ariba").dialog("close");
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


            $("#ariba").dialog('open');
        }

    };
    req.error = function (e) {
        var meg = e.statusText;
        var status = e.status;
        if (meg.lastIndexOf("Session Timeout") > -1) {
            $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='images/help.png'></img></div><div style='float:left;margin-left: 10%;'>Session Timeout.</div></div>");
            $("#logoutDailog").dialog({ resizable: false,
                title: 'Message',
                modal: true,
                width: 270,
                height: 135,
                fluid: true,
                buttons: {
                    Ok: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        window.location.href = "timeout";
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
    };
    $.ajax(req);
}
;


function enableButton(id) {
    $("#" + id).removeAttr('disabled');
    $("#" + id).css('pointer-events', 'auto');
}
;
function disableButton(id) {
    $("#" + id).attr('disabled', 'disabled');
    $("#" + id).css('pointer-events', 'none');

}
;


function createGridDiv() {
    destroyGridDiv();
    $("#datatablecontainer").append('<div id="dataTable" class="visionAribaDataTables"></div>');
}
function destroyGridDiv() {
    $("#datatablecontainer").empty();
}



function createVendorsAriba() {
    var new_locatecode = "";

    $.ajax({
        type: "POST",
        traditional: true,
        dataType: 'html',
        url: "instanceData",
        cache: false,
        success: function (response) {
//alert(response);
            if (response != null && response != '') {
                $("#result").html("<div class='visionFormExtendDropdown'><div class='visionFormExtendTitle'>SAP Instance:" +
                        "</div><div id='instance_div' class='visionFormExtendInfo'><select id='selectedInstance' >" + response +
                        "</select></div></div>");
                // Define the Dialog and its properties.
                $("#result").dialog({ resizable: false,
                    modal: true,
                    title: "SAP Instance",
                    height: 'auto',
//                    minHeight: 0,
//                    minWidth: 300,
                    width: 300,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: {
                        "Ok": function () {

                            var selectedInstance = $('#selectedInstance').val();
                            //  alert("selectedInstance::::" + selectedInstance);


                            if (selectedInstance != null && selectedInstance != '') {
                                createVendors(selectedInstance);

                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
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

            }


        },
        error: function (e) {
            //  ////////alert(e.message)
            sessionTimeout(e);
        }
    });



}