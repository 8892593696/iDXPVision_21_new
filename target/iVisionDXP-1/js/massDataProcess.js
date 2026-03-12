/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


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
    validateData(gridId, '');

    //gridValidationMessage();


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

    var tableName = $('#tableName').val();
    var batchInd = $('#batchIndicator').val();
    var ValidateCommentColumn = $("#massValidateComment").val();
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
                $("#logoutDailog").dialog({ resizable: false,
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
                                    $("#wait").css("opacity", "0.99");
                                    $("#wait").css("display", "block");
                                    $("body").css("pointer-events", "none");

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
                                                $("#logoutDailog").dialog({ resizable: false,
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
                                                                $("#" + gridId).jqxGrid('updatebounddata', 'cells');

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
            for (var i = 0; i < selectedrowindexes.length; i++) {
                var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
                var value = $('#' + gridId).jqxGrid('getcellvalue', selectedrowindexes[i], ValidateCommentColumn);
                if (value != null && value != undefined && value == 'Record processed')
                {
                    var message = 'Selected record(s) are already Processed';
                    popupMessage(message);
                    return;
                } else if (value != null && value != undefined && (value == 'OK' || value == 'Record Verified'))
                {
                    var message = 'Selected record(s) are already Verified';
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
//                var value = $('#' + gridId).jqxGrid('getcellvalue', selectedrowindexes[i], "IMPORT_VALIDATION_COMMENTS");
//                if (value != null && value != undefined && value == 'Record processed')
//                {
//                    var message = 'Selected record(s) are already Processed';
//                    popupMessage(message);
//                    return;
//                } else
//                {
//                    if (data != null) {
//                        selectedRowsData.push(data);
//                    }
//                }
//
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
                        $("#logoutDailog").dialog({ resizable: false,
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
                popupMessage(message);
            }
        } else {
            var message = 'Please select record(s) to process';
            popupMessage(message);
        }

    }


    return resultObj;


}


function processDataDH(gridId)
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
    console.log("gfjhfhshfs" + JSON.stringify(data));
//    selectedRowsData.push(data);

    var batchInd = $('#batchIndicator').val();
    var tableName = $('#tableName').val();
    var ValidateCommentColumn = $("#massValidateComment").val();
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
                    $("#logoutDailog").html((labelObject[response] != null ? labelObject[response] : response));
                    $("#logoutDailog").dialog({ resizable: false,
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
                                        if (data != null)
                                        {
                                            selectedRowsData.push(data);
                                        }
                                        $.ajax({
                                            type: "post",
                                            url: "autoProcessData",
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
                                                $("#wait").css("display", "none");
                                                $("body").css("pointer-events", "auto");

                                                $("#logoutDailog").html((labelObject[response] != null ? labelObject[response] : response));
                                                $("#logoutDailog").dialog({ resizable: false,
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

                    //$("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                                                                   
                }
            });
        }
    } else
    {
        if (selectedrowindexes != null && selectedrowindexes.length > 0)
        {
            for (var i = 0; i < selectedrowindexes.length; i++) {
                var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
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
                    popupMessage(message);
                    return;
                } else
                {
                    var message = 'Please select only record(s) with no Validation error(s)';
                    popupMessage(message);
                    return;
                }
            }
//            for (var i = 0; i < selectedrowindexes.length; i++) {
//                var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
//                if (data != null) {
//                    selectedRowsData.push(data);
//                }
//            }
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
                        $("#wait").css("display", "none");
                        $("body").css("pointer-events", "auto");

                        $("#logoutDailog").html((labelObject[response] != null ? labelObject[response] : response));
                        $("#logoutDailog").dialog({ resizable: false,
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
                popupMessage(message);
            }

        } else {
            var message = 'Please select record(s) to process';
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
            $("#logoutDailog").dialog({ resizable: false,
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
                                        $("#logoutDailog").dialog({ resizable: false,
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
    var tableName = $("#tableName").val();
    $("#wait").css("opacity", "0.99");
    $("#wait").css("display", "block");
    $("body").css("pointer-events", "none");
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
            $("#logoutDailog").dialog({ resizable: false,
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
                                        $("#logoutDailog").dialog({ resizable: false,
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
        for (var i = 0; i < selectedrowindexes.length; i++)
        {
//                var errorMsg = "";
            var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
            var dataString = "";

            dataString = JSON.stringify(data);

            console.log("gfjhfhshfs" + JSON.stringify(data));
            selectedRowsData.push(data);

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
    var batchInd = $('#batchIndicator').val();
    var ValidateCommentColumn = $("#massValidateComment").val();
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
                    $("#logoutDailog").dialog({ resizable: false,
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
                                                $("#dialog").dialog({ resizable: false,
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
                                                            $("#" + gridId).jqxGrid('clearfilters');
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
            for (var i = 0; i < selectedrowindexes.length; i++) {
                var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
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
                    popupMessage(message);
                    return;
                } else
                {
                    var message = 'Please select only record(s) with no Validation error(s)';
                    popupMessage(message);
                    return;
                }
            }
//            for (var i = 0; i < selectedrowindexes.length; i++) {
//                var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
//                var value = $('#' + gridId).jqxGrid('getcellvalue', selectedrowindexes[i], "IMPORT_VALIDATION_COMMENTS");
//                if (value != null && value != undefined && (value == 'OK' || value == 'Record Verified'))
//                {
//                    if (data != null)
//                    {
//                        selectedRowsData.push(data);
//                    }
//                } else if (value != null && value != undefined && value == 'Record processed')
//                {
//                    var message = 'Selected record(s) are already Processed';
//                    popupMessage(message);
//                    return;
//                } else
//                {
//                    var message = 'Please select only record(s) with no Validation error(s)';
//                    popupMessage(message);
//                    return;
//                }
//            }


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
                        $("#dialog").dialog({ resizable: false,
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
                                    $("#" + gridId).jqxGrid('clearfilters');
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
                popupMessage(message);
            }
        } else {
            var message = 'Please select a Record(s) to process';
            popupMessage(message);
        }
    }




}