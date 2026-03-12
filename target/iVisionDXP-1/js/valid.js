var oldJSON = {};
var vendorOldJSON = {};

//////////////new variable
var jsondata = {};
var basicDatas = {};
var panalData = {};
var copyData = {};
var panaloldData = {};
var jsobj = {};
var panalobj = {};
var panalOldobj = {};
var labelObject = {};
var rejectData = [];
window.rejectArray = [];
rejectData = $("#rejectData").val();
var response = "";
function validWorkflow() {
    /*SRs File Upload Start*/
    var fileslist = [];
    $("html").on("dragover", function (e) {
        e.preventDefault();
        e.stopPropagation();

    });
    $("html").on("drop", function (e) {
        e.preventDefault();
        e.stopPropagation();
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

    $("#visionSRSFiles").on('change', function (event) {
        console.log("iam in files change ");
        fileslist = event.target.files;
        srsFileNames(fileslist);

    });
    /*SRs File Upload End*/

    /* Accordion start*/
    $('.ui-state-disabled').on('click', function () {
        return false;
    });
    $('.ui-state-disabled').hide();
    /* Accordion end*/

    ///// for panel OldData Start
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
//                panaloldData[columnsArray[i]] = encodeURIComponent(hiddenVal);
            }

        }
    });

    ///// for panel OldData Start End



    var name1 = $("#vendorName").val();
    var locatcode = $("#locatcode").val();
    var account_group = $("#accountGroup").val();
    var comp_code = $("#compCode").val();
    var purch_org = $("#purchOrg").val();
    var suppl_code = $('#vendorCode').val();
    var baskettype = $('#baskettypehid').val();

    vendorOldJSON.vendorCode = $("#vendorCode").val();
    //// console.log("name1::" + name1);
    if (name1 != null)
    {
        vendorOldJSON.name1 = name1.toUpperCase();
    }

    vendorOldJSON.locatcode = locatcode;
    vendorOldJSON.accountGroup = account_group;
    vendorOldJSON.compCode = comp_code;
    vendorOldJSON.purchOrg = purch_org;
    vendorOldJSON.status = $('#statushid').val();
    vendorOldJSON.objectcode = $('#objecthid').val();
    //// console.log("oldJSON::" + JSON.stringify(oldJSON));



    $('input[type="button"]').each(function () {
        var value = $(this).val();
        var size = value.length;
        // playing with the size attribute
        $(this).attr('width', size - 2 + 'px');
    });

    $(".im1 a").click(function () {
//        ////alert($(this).closest('div').attr('class'));
        $(".m1 section").removeClass("activeback");
        $(this).closest('section').addClass("activeback");
//        $(this).parent().parent().parent().parent().parent().parent().addClass("activeback");        
    });
    $(".im2 a").click(function () {

        $(".m1 section").removeClass("activeback");
        $(this).closest('section').addClass("activeback");

    });
    $(".overlay ").on("click", function () {
        if ($(".m1 section").hasClass("activeback"))
        {
            $(".m1 section").removeClass("activeback");
        }

    });
    $(document).on("click", function (event) {
        var $trigger = $(".m1 .im1 a").add(".m1 .im2");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $(".m1 section").removeClass("activeback");
        }
    });
    $("#Bar_Code").click(function () {
        console.log("Iam in Generte_Bar_Code");
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
                console.log("bar code");
                SaveorUpdate(false, 'Save', '');
                $("#wait").css("display", "none");
                $("body").css("pointer-events", "auto");
                var conf_mesg = $("#Bar_Code").attr('data-conf');
                var success_msg = $("#Bar_Code").attr('data-success-conf');
                var duplCheck = $("#Bar_Code").attr('data-dupl-flag');
                var dataReturnReason = $("#Bar_Code").attr('data-returnreason');
                var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
                var controlInd = $(this).attr("data-value");
//            alert("controlInd:::"+controlInd);
                $("#dialog").html(dialogSplitMessage);
                $("#dialog").dialog({resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    height: 'auto',
                    // commented by Ajay minHeight: 'auto',
                    minWidth: 370,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [
                        {
                            text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                            click: function () {
                                showLoader();
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                barCodeGeneration();
                            }

                        },
                        {
                            text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }
                        }
                    ], open: function () {
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
    $("#Create").click(function () {
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

                //var registerValidateColumn = basicData['registerValidateColumn'];
                registerCheckValidation(basicData);


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
    $("#CheckOpenDocs").click(function () {
        var conf_mesg = $("#CheckOpenDocs").attr('data-conf');
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

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
        //var results = "Are you sure you want to CheckOpenDocs for this Record?"
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
        $("#dialog").html(dialogSplitMessage).dialog({resizable: false,
            title: (labelObject['CheckOpenDocs'] != null ? labelObject['CheckOpenDocs'] : 'CheckOpenDocs'),
            modal: true,
            height: 'auto',
            // commented by Ajay minHeight: 'auto',
            minWidth: 370,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");


//                        processOpenDocs(JSON.stringify(basicData));
                        processOpenDocsinForm(JSON.stringify(basicData));
                        //returnReasons(controlInd, success_msg);
//                    returnReasons('DELETE', success_msg);

//                   submitReg('DELETE');

                    }},
                {
                    text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");


                    }
                }],
            autoOpen: true,
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

    $("#Create_Template").click(function () {
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
//                        basicData[columnsArray[i]] = encodeURIComponent(hiddenVal);
                }

            }


        });
        var resultArray = registerValidation();
        alert("resultArray:::" + JSON.stringify(resultArray));
        if (resultArray != null && Object.keys(resultArray).length == 0) {
            $(".allErrors").hide();

            //var registerValidateColumn = basicData['registerValidateColumn'];

            $.ajax({
                type: "post",
                url: "createClassTemplate",
                cache: false,
                data: {'basicData': JSON.stringify(basicData)
                },
                traditional: true,
                dataType: 'html',
                success: function (response) {
                    if (response != null && response != '') {
                        var resultObj = JSON.parse(response);
                        if (resultObj != null) {
                            var messageFlag = resultObj['messageFlag'];
                            if (messageFlag) {

                                var dialogSplitMessage = dialogSplitIconText(resultObj['message'], messageFlag);
                                $("#result").html(dialogSplitMessage);
                                $("#result").dialog({resizable: false,
                                    modal: true,
                                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                    minWidth: 300,
                                    maxWidth: 'auto',
                                    height: 'auto',
                                    // commented by Ajay minHeight: 'auto',
                                    fluid: true,
                                    buttons: [{
                                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                            click: function () {
                                                $("#CONCEPT_ID").val(resultObj['CONCEPT_ID']);
                                                $("#Create_Template").hide();
                                                $("#accdiv").show();
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

                },
                error: function (e) {
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
        }

    });

///////////////// generic code for Submit,Delete,Approve,Return,Return-Approver,Return-Requestor
    $("#Restore").click(function () {
        //  console.log("Reset::::"+JSON.stringify(panaloldData));
        $("#COMPANY_CDE").val(panaloldData['COMPANY_CDE']);
        $("#PURCHASE_ORG").val(panaloldData['PURCHASE_ORG']);
        $("#INSTANCE").val(panaloldData['INSTANCE']);
    });

    $("#Submit").click(function () {

        workflowButtonOnclick('Submit');

    });

    $("#Send_Mail").click(function () {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        var resultArray = registerValidation();
        if (resultArray != null && Object.keys(resultArray).length == 0) {
            $(".allErrors").hide();
            SaveorUpdate(false, 'Save', '');
            stopLoader();
            var conf_mesg = "";
            if ($("#SITE_VISIT").val() != null) {
                if ($("#SITE_VISIT").is(':checked')) {
                    sendMailConfMessage();
                } else
                {
                    conf_mesg = "You haven't Selected Site Visit. Do You want to continue this process?";
                    conf_mesg = (labelObject[conf_mesg] != null ? labelObject[conf_mesg] : conf_mesg)
//                conf_mesg = "You haven't Selected Site Visit. Do You want to continue this process?";
                    var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
                    $("#dialog").html(dialogSplitMessage);
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                        modal: true,
                        height: 'auto',
                        // commented by Ajay minHeight: 'auto',
                        minWidth: 500,
                        maxWidth: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                    // need to call send Mail 
//                                sendMailPopup();
                                    sendMailConfMessage();
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
                            $(this).closest(".ui-dialog").addClass("visionDialogAlignMail");
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
                sendMailConfMessage();
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

        // call ajax for processing that Send Mail Functionality


    });
    $("#3rd_Party_Mail").click(function () {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        var textid = $(this).attr("id");
        var errorCount = 0;
        if ($('#THIRD_EMAILID').val() == "") {
            errorCount = 1;
            $("#dialog").html("You Haven't Provided Third Party Email Id");
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

        }

        var resultArray = [];
        if (errorCount == 0 && resultArray != null && Object.keys(resultArray).length == 0) {
            $(".allErrors").hide();
            SaveorUpdate(false, 'Save', '');
            $("#wait").css("display", "none");
            $("body").css("pointer-events", "auto");
            var conf_mesg = "";
            if ($("#SITE_VISIT").val() != null) {
                if ($("#SITE_VISIT").is(':checked')) {
                    thirdPartyMailConfMessage();
                } else
                {
                    conf_mesg = "You haven't Selected Site Visit. Do You want to continue this process?";
                    conf_mesg = (labelObject[conf_mesg] != null ? labelObject[conf_mesg] : conf_mesg)
//                conf_mesg = "You haven't Selected Site Visit. Do You want to continue this process?";
                    var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
                    $("#dialog").html(dialogSplitMessage);
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                        modal: true,
                        height: 'auto',
                        // commented by Ajay minHeight: 'auto',
                        minWidth: 500,
                        maxWidth: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                    // need to call send Mail 
//                                sendMailPopup();
                                    thirdPartyMailConfMessage();
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
                            $(this).closest(".ui-dialog").addClass("visionDialogAlignMail");
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
                thirdPartyMailConfMessage();
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

        // call ajax for processing that Send Mail Functionality


    });
    //start evaluation process
    $("#Evaluation").click(function () {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        alert("inside evaluate");
        var resultArray = registerValidation();
        if (resultArray != null && Object.keys(resultArray).length == 0) {
            $(".allErrors").hide();
            var type = "RE-EVALUATION";
            SaveorUpdate(false, 'Save', type);
            stopLoader();
            var conf_mesg = $("#Evaluation").attr('data-conf');
            var success_msg = $("#Evaluation").attr('data-success-conf');
            var returnReason = $("#Evaluation").attr('data-returnreason');
            var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
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
                        text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            // need to call send Mail 
//                                sendMailPopup();
                            // sendMailProcess("RE-EVALUATION");
                            if (returnReason == 3)
                            {
                                mailPopUp("RE-EVALUATION");
                            } else
                            {
                                sendMailProcess("RE-EVALUATION");
                            }
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
            for (var textIdKey in resultArray) {
                //allErrors
                console.log(":::::::::#error_" + textIdKey);
                //$("#dis" + resultArray[i]).html("Should not be null.");
                $("#dis" + textIdKey).html(resultArray[textIdKey]);
                $("#dis" + textIdKey).show();

            }
        }

        // call ajax for processing that Send Mail Functionality


    });
    //end evaluation process


    $("#Transfer_to_ERP").click(function () {
        workflowButtonOnclick('Transfer_to_ERP');

    });

    $("#Transfer_to_SAP").click(function () {
        workflowButtonOnclick('Transfer_to_SAP');
    });

    $("#Transfer_To_ERP").click(function () {
        workflowButtonOnclick('Transfer_To_ERP');

    });

    $("#Transfer_to_Oracle").click(function () {
        workflowButtonOnclick('Transfer_to_Oracle');

    });

    $("#Transfer_To_Oracle").click(function () {
        workflowButtonOnclick('Transfer_To_Oracle');

    });
    $("#Delete").click(function () {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }

        var conf_mesg = $("#Delete").attr('data-conf');
        var success_msg = $("#Delete").attr('data-success-conf');
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "D");
        var controlInd = $(this).attr("data-value");
        console.log("success_msg:::delte" + success_msg);
        //NKR
        var AIlensEnaOrDisFlag = 'N';
//        try {
//            AIlensEnaOrDisFlag = $("#AIEnableOrDisableFlag").val();
//        } catch (er) {
//            AIlensEnaOrDisFlag = 'N';
//        }
        if (AIlensEnaOrDisFlag != null && AIlensEnaOrDisFlag != "" && AIlensEnaOrDisFlag != undefined && AIlensEnaOrDisFlag == 'Y') {
            $(".aiChatgptResponseContainer").html("");
            AILensTypingAndConfirmationMsg(dialogSplitMessage, "aiNotificationsResultClass", "Y", "returnReasons('" + controlInd + "','" + success_msg + "')", "closeAINavigation()");
            //NKR
        } else {
            workflowButtonOnclick('Delete');
        }

    });
    $("#Approve").click(function () {
        workflowButtonOnclick('Approve');
    });
    $("#Return").click(function () {
        workflowButtonOnclick('Return');

    });
    $("#ReturnApprover").click(function () {
        workflowButtonOnclick('ReturnApprover');
    });
    $("#ReturnRequestor").click(function () {
        workflowButtonOnclick('ReturnRequestor');
    });
    $("#ReturnRegistrar").click(function () {
        workflowButtonOnclick('ReturnRegistrar');
    });


    $("#Save").click(function () {
        //("moldJSON:::Save click");
        // save(true);
        labelObject = {};
        var resultArray = registerValidation();
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        if (resultArray != null && Object.keys(resultArray).length == 0) {
            SaveorUpdate(true, 'Save', '');
        } else
        {
            for (var textIdKey in resultArray) {
                //allErrors
                console.log(":::::::::#error_" + textIdKey);
                //$("#dis" + resultArray[i]).html("Should not be null.");
                $("#dis" + textIdKey).html(resultArray[textIdKey]);
                $("#dis" + textIdKey).show();

            }
        }
    });

    $("#Copy").click(function () {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        var conf_mesg = $("#Copy").attr('data-conf');
        var success_msg = $("#Copy").attr('data-success-conf');
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "C");
        //NKR
        var AIlensEnaOrDisFlag = 'N';
//        try {
//            AIlensEnaOrDisFlag = $("#AIEnableOrDisableFlag").val();
//        } catch (er) {
//            AIlensEnaOrDisFlag = 'N';
//        }
        if (AIlensEnaOrDisFlag != null && AIlensEnaOrDisFlag != "" && AIlensEnaOrDisFlag != undefined && AIlensEnaOrDisFlag == 'Y') {
            $(".aiChatgptResponseContainer").html("");
            AILensTypingAndConfirmationMsg(dialogSplitMessage, "aiNotificationsResultClass", "Y", "copyRequest()", "closeAINavigation()");
            //NKR
        } else {
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
                        text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");

                            copyRequest();

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
        }

    });
    $("#Instantiate").click(function () {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        var conf_mesg = $("#Instantiate").attr('data-conf');
        var success_msg = $("#Instantiate").attr('data-success-conf');
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
        var controlInd = $(this).attr("data-value");
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
                    text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        onSubmitIncl(controlInd, '', success_msg);
//                    onSubmitIncl('INSTANTIATE', '', success_msg);
//                                    submitReg('SUBMIT', '');

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

        //  }

    });
    $("#Instate").click(function () {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        var conf_mesg = $("#Instate").attr('data-conf');
        var success_msg = $("#Instate").attr('data-success-conf');
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
        var controlInd = $(this).attr("data-value");
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
                    text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        onSubmitIncl(controlInd, '', success_msg);
//                    onSubmitIncl('INSTANTIATE', '', success_msg);
//                                    submitReg('SUBMIT', '');

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

        //  }

    });

    $("#SaveData").click(function () {
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

                //var registerValidateColumn = basicData['registerValidateColumn'];

                console.log("basic data::::::::::0" + JSON.stringify(basicData));
                saveAribaData(basicData);


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

    $("#Assign").click(function () {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        var gridId = $("#gridId").val();
        var roleId = $("#rolehid").val();
        var roleStartsWith = roleId.substring(0, 2);
        var moduleCode = $("#modulehid").val();
        var basicData = {};
        var data = [];
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

        data.push(basicData);

        var result = "<select id='assign'>";
        $.ajax({
            type: "get",
            url: "getUser",
            cache: false,
            traditional: true,
            data: {'jsonData': JSON.stringify(data)},
            dataType: 'html',
            success: function (response) {
                var obj = JSON.parse(response);
                var flag = obj.flag;


                var dailogProps = {};
                dailogProps.title = "Message";
                dailogProps.modal = true;

                dailogProps.height = "auto";
                dailogProps.width = 350;

                dailogProps.buttons = [];
                dailogProps.fluid = true;
                //  dailogProps.buttons = {};
                // dailogProps.fluid = true;
                dailogProps.beforeClose = function () {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                };
                //  alert("flag" + flag);
                if (flag)
                {
                    alert("alert inside flag value true");
//                    $("#dialog1").html("<div id='value'></div>");
//                    $('#value').append(obj.userDiv);
                    var selectUser = "<div class='visionFormAssignDropdown'><div class='visionFormAssignTitle'>"
                            + (labelObject['Select User'] != null ? labelObject['Select User'] : 'Select User')
                            + "</div><div id='value'></div></div>";
                    $("#dialog1").html(obj.userDiv);
//                    $('#value').append(obj.userDiv);
                    dailogProps.buttons.push(
                            {text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    var newCreateBy = "";
                                    var assignSelectItem = $("#assign").jqxComboBox('getSelectedItem');
                                    if (assignSelectItem != null) {
                                        newCreateBy = assignSelectItem['value'];
                                    }
//                                    var newCreateBy = $("#assign").val();
                                    console.log(newCreateBy + ":newCreateBy");
                                    if (newCreateBy != null && newCreateBy != 'null')
                                    {


                                        onSubmit("ASSIGN", "", "", newCreateBy);
                                    }

                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                    //      $('#' + gridId).jqxGrid('clearselection');

                                }});
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
                    var selectUser = "<div class='visionFormAssignDropdown'><div class='visionFormAssignTitle'>"
                            + (labelObject['Select User'] != null ? labelObject['Select User'] : 'Select User')
                            + "</div><div id='value'></div></div>";
                    $("#dialog1").html(obj.userDiv);
//                    $('#value').append(obj.userDiv);
//                    $("#dialog1").html("<div id='value'></div>");
//                    // var dialogSplitMessage = dialogSplitIconText(obj.userDiv, flag);
//                    $('#value').append(obj.userDiv);
                    dailogProps.open = function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
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
//                $("#assign").chosen({allow_single_deselect: true});
                // $("#dialog1").html("<div id='value'></div>");
                // $('#value').append(obj.userDiv);
                $("#dialog1").dialog(dailogProps);
            }
            ,
            error: function (e) {
                sessionTimeout(e);
            }

        });
    });
    $("#Validation").unbind("click").on("click", async function () {
        let agentNo = "007";
        var randomDigit = "Agent:QC-" + agentNo + "";
        const AiMessage = async (message, processName, agentFlag) => {
            try {
                var logData = "";
                if (agentFlag != null && agentFlag != undefined && agentFlag != '' && agentFlag == "N") {
                    logData = `<div class='aiLensRobotDataClass' id='${"AI" + processName}'>
                            <label><span>${message}</span></label></div>`;
                } else {
                    logData = `<div class='aiLensRobotDataClass' id='${"AI" + processName}'>
                            <label><span><span><b>${randomDigit}</b></span>${message}</span></label></div>`;
                }
                // Construct the logData based on the message and process name

                await defaultAgentAiTypingBasedOnResponse(logData);
            } catch (error) {
                console.error("Error in AiMessage:", error);
            }
        };
        var basicDatas = {};
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
            console.log("textid:::" + textid);
            if (textid != null && textid != 'CREATE_DATE') {
                basicDatas[textid] = textval;
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
        console.log(basicDatas);
        //showLoader();
        showaiLoader();
        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>Validation(Quality Check)</div>");
        openAINavigation(),
                await AiMessage("Please wait... Your record is now undergoing the quality check process.", "Quality Check", "N");
        await aiLensAgentLogOperations("insert", agentNo, randomDigit);
        await aiLensAgentLogOperations("", agentNo, randomDigit);
        await AiMessage("is initiating the quality checking process.", "Quality Check");
        await AiMessage("is fetching your record details.", "Quality Check");
        await AiMessage(
                "<table class='table table-bordered validationrecordInfo'>"
                + "<tbody>"
                + "<tr><th>Record No</th><td>" + basicDatas["RECORD_NO"] + "</td></tr>"
                + "<tr><th>Plant</th><td>" + basicDatas["PLANT"] + "</td></tr>"
                + "<tr><th>Instance</th><td>" + basicDatas["INSTANCE"] + "</td></tr>"
                + "<tr><th>Material Group</th><td>" + basicDatas["RECORD_GROUP"] + "</td></tr>"
                + "<tr><th>Material Type</th><td>" + basicDatas["RECORD_TYPE"] + "</td></tr>"
                + "<tr><th>Status</th><td>" + basicDatas["STATUS"] + "</td></tr>"
                + "</tbody>"
                + "</table>"
                , "Table", "N");
        await AiMessage("is fetching the Quality Check Tab(s) details.", "Quality Check");
        await AiMessage("is verifying/validating the details in the Characteristics tab.", "Quality Check");
        await AiMessage("is verifying/validating the reference data details.", "Quality Check");
        await AiMessage("is verifying/validating the document data details.", "Quality Check");
        await AiMessage("has completed the Quality Check process. Please review the details below.", "Quality Check");

        var gridId = $("#currentGridId").val();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: 'getQCValidationsByRecNoPlant',
            traditional: true,
            cache: false,
            async: true,
            data: {
                basicDatas: JSON.stringify(basicDatas),
                gridId: gridId

            },
            success: function (data, textStatus, jqXHR) {
                stopLoader();
                stopaiLoader();
                if (data != null && data != undefined && data != "") {
                    var qcValView = data['qcValView'];
                    if (qcValView != null && qcValView != undefined && qcValView != "") {
                        setTimeout(function () {
                            defaultAITypingBasedOnResponse(data['resultStr'], '', "", "");
                            setTimeout(function () {
                                KDSAIlensDefaultYesNo('Do you want to review any further details related to this record?', 'aiValRecOtherYes',
                                        'aiValRecOtherNo', 'Yes', 'No', 'aiDefaultYesImgClass', 'aiDefaultNoImgClass');
                                $(document).one("click", "#aiValRecOtherYes", async function () {

                                    const KDSAILensReview = async function (message) {
                                        try {
                                            console.log("Starting AI Review:", message);
                                            await AIlensRecReviewOptions();
                                            KDSAIlensDefaultYesNo('Do you want to see more tab details about this record?',
                                                    'aiValRecTabYes', 'aiValRecTabNo', 'Yes', 'No',
                                                    'aiDefaultYesImgClass', 'aiDefaultNoImgClass');
                                            $(document).one("click", "#aiValRecTabYes", async function () {
                                                try {
                                                    await AIlensRecShowTabs();
                                                } catch (error) {
                                                    console.error("AI Tabs Error:", error);
                                                }
                                            });
                                        } catch (error) {
                                            console.error("Error in AiMessage:", error);
                                        }
                                    };
                                    await KDSAILensReview("KDSAILensReview");
                                    console.log("✅ Review flow completed");
                                });
                                $(document).one("click", "#aiValRecOtherNo", function () {
//                                    KDSAIlensReviewOptions();
                                });
                            }, 3000);
                        }, 1000)
                    } else {
                        $("#dialog").html(labelObject[data.msg] != null ? labelObject[data.msg] : data.msg);
                        $("#dialog").dialog({
                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                            modal: true,
                            height: 300,
                            minHeight: 300,
                            minWidth: 500,
                            maxWidth: 400,
                            fluid: true,
                            buttons: [{
                                    text: (labelObject['ok'] != null ? labelObject['ok'] : 'ok'),
                                    click: function () {
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                    }
                                }],
                            open: function () {
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
                    }
                }
            }, error: function (jqXHR, textStatus, errorThrown) {
                ajaxStop();
                console.log(textStatus);
            }
        });
    });
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
                        //  $("#tooltipdiv").jqxTooltip({content: 'Enter a keyword of at least 3 chars,ignoring special chars(@.,;:/etc)  to search', theme: 'energyblue'});
                        //  $("#tooltipdiv").jqxTooltip("close");
//                                $("#tooltipdiv").jqxTooltip();
                    }
                    //$("#tooltipdiv").jqxTooltip("close");
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
                                        $("#intellisense").html(responseObj['suggestion']);
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
                                // stopLoader();
                                //endAjax();
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







//Material Master
//============================================================
    var descriptor = $("#descriptor_Text").val();
    var conceptId = $("#conceptId").val();
    var erp_Text = $("#erp_Text").val();
    var materialType_Text = $("#materialType_Text").val();
    var materialGrp_Text = $("#materialGrp_Text").val();
    var uom_Text = $("#uom_Text").val();
    var regDate_Tex = $("#regDate_Tex").val();
    var originator_Text = $("#originator_Text").val();

    oldJSON.descriptor = descriptor;
    oldJSON.conceptId = conceptId;
    oldJSON.erp = erp_Text;
    oldJSON.materialType = materialType_Text;
    oldJSON.materialGroup = materialGrp_Text;
    oldJSON.uom = uom_Text;
    oldJSON.regDate = regDate_Tex;
    oldJSON.originator = originator_Text;



    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content",
        active: false,
        width: 300,
        create: function (event, ui) {
            var tempActiveIndex;
            $(".ui-state-disabled").next("div").hide();
        },
        beforeActivate: function (event, ui)
        {
            tempActiveIndex = $("#accordion").accordion("option", "active");
            $(".ui-state-disabled").next("div").hide();
        },
        activate: function (event, ui) {
            var activeIndex = $(this).find("h3").index(ui.newHeader[0]);
            var accId = activeIndex + 1;
            var accordionActive = $("#accordion").accordion("option", "active");
            var onClickEvent = $("#ui-id-" + accId).attr("data-onclick");
            if (tempActiveIndex.toString() == "false") {
                eval(onClickEvent);
            } else if (tempActiveIndex == activeIndex) {
                $(".ui-state-disabled").next("div").hide();
                return false;
            } else if (accordionActive.toString() == "false") {
                return false;
            } else {
                $(".ui-state-disabled").next("div").hide();
                eval(onClickEvent);
            }
        }
    });

    $("#materialtypedialog").dialog({resizable: false,
        autoOpen: false,
        width: 400,
        height: 400,
        title: (labelObject['Material Type'] != null ? labelObject['Material Type'] : 'Material Type'),
        fluid: true,
        show: {
        },
        hide: {
        },
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
    $("#materialgroupdialog").dialog({resizable: false,
        autoOpen: false,
        width: 400,
        height: 400,
        title: (labelObject['Material Group'] != null ? labelObject['Material Group'] : 'Material Group'),
        fluid: true,
        show: {
        },
        hide: {
        },
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


    $("#plant_dialog").dialog({resizable: false,
        autoOpen: false,
        width: 400,
        height: 520,
        title: (labelObject['Business Unit'] != null ? labelObject['Business Unit'] : 'Business Unit'),
        fluid: true,
        show: {
        },
        hide: {
        },
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
    $("#uom_dialog").dialog({resizable: false,
        autoOpen: false,
        width: 350,
        height: 500,
        title: (labelObject['UoM'] != null ? labelObject['UoM'] : 'UoM'),
        fluid: true,
        show: {
        },
        hide: {
        },
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
    $("#status_dialog").dialog({resizable: false,
        autoOpen: false,
        width: 400,
        height: 500,
        title: (labelObject['Status'] != null ? labelObject['Status'] : 'Status'),
        fluid: true,
        show: {
        },
        hide: {
        },
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
    $("#prop_uom_dialog").dialog({resizable: false,
        autoOpen: false,
        width: 350,
        height: 500,
        title: (labelObject['UoM'] != null ? labelObject['UoM'] : 'UoM'),
        fluid: true,
        show: {
        },
        hide: {
        },
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
    $("#descriptor_dialog").dialog({resizable: false,
        autoOpen: false,
        width: 450,
        height: 550,
        title: (labelObject['Descriptor'] != null ? labelObject['Descriptor'] : 'Descriptor'),
        fluid: true,
        show: {
        },
        hide: {
        },
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




    $("#mmc_Register").click(function () {
        showLoader();
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }

        //////alert("mmc_Register");
        console.log("mmc_Register");
        if (topPannelValidation()) {

            var domain = $("#domain_Text").val();
            var orgId = $("#orgId_Text").val();
            //   var recordNo = $("#recordNo_Text").val();
            var descriptor = $("#descriptor_Text").val();
            var conceptId = $("#conceptId").val();



            var erpNo = $("#erpNo_Text").val();

            var materialType = $("#materialType_Text").val();

            var materialGrp = $("#materialGrp_Text").val();
            var uom = $("#uom_Text").val();

            var originator = $("#originator_Text").val();
            var regDate = $("#regDate_Tex").val();
            var shortDesc = $("#shortDesc_TextArea").val();
            var erp = $("#erp_Text").val();





            $.ajax({
                url: "materialRegister",
                async: false,
                cache: false,
                method: "POST",
                data: {
                    orgId: orgId,
                    descriptor: descriptor,
                    conceptId: conceptId,
                    materialType: materialType,
                    materialGrp: materialGrp,
                    uom: uom,
                    originator: originator,
                    regDate: regDate,
                    erp: erp,
                },
                success: function (response) {
                    // ////alert(response);
                    stopLoader();
                    var recordarray = response.split(":");

                    var result = JSON.parse(response);
                    var flag = result.messageFlag;
                    if (flag)
                            // if (result.MESSAGE.indexOf("Registered Successfully!") > -1)
                            {

                                var recordNo = result.RECORD_NO;

                                $("#mmc_Register").hide();
                                $("#Save").show();
                                $("#Submit").show();
                                $("#Delete").show();
                                $("#mmc_DuplicateChk").show();
                                $("#accdiv").show();
                                //$("#accordion").accordion({'active':0});
                                $("#Generate_Description").show();
                                $("#status_Text").parent().show();
                                $("#Generate_Description").prop("disabled", true);

                                var role = $("#rolehid").val();
                                console.log("role:::" + role);
                                var status = "";
                                if (role.lastIndexOf("REQUESTOR") > -1)
                                {
                                    status = "A1-REGISTERED";

                                } else if (role.lastIndexOf("STEWARD") > -1 || role.lastIndexOf("MANAGER") > -1)
                                {
                                    status = "A4-CAT REGISTERED";

                                }
                                $("#status_Text").val(status);

                                $("#status_Text").show();
                                $(".statusLabel").show();



                                $("#recordNo_Text").val(recordNo);

                                // fetchPropertiesTabData();
                                //  stepActions(1);

                                var baskettype = $('#baskettypehid').val();
                                var baskettype1 = $('#baskettypehid1').val();


                                var descriptor = $("#descriptor_Text").val();
                                var conceptId = $("#conceptId").val();
                                var erp_Text = $("#erp_Text").val();
                                var materialType_Text = $("#materialType_Text").val();
                                var materialGrp_Text = $("#materialGrp_Text").val();
                                var uom_Text = $("#uom_Text").val();
                                var regDate_Tex = $("#regDate_Tex").val();
                                var originator_Text = $("#originator_Text").val();
                                var recordNo_Text = $("#recordNo_Text").val();
                                oldJSON.descriptor = descriptor;
                                oldJSON.conceptId = conceptId;
                                oldJSON.erp = erp_Text;
                                oldJSON.materialType = materialType_Text;
                                oldJSON.materialGroup = materialGrp_Text;
                                oldJSON.uom = uom_Text;
                                oldJSON.regDate = regDate_Tex;
                                oldJSON.originator = originator_Text;
                                oldJSON.recordNo = recordNo_Text;

                                oldJSON.status = $("#statushid").val();
                                //var qstr = "/materialcreation";
                                //window.location.href = qstr;
                                $("#step1").jqxTooltip('close');
                                $("#step2").jqxTooltip({content: 'Enter Characteristics or Reference or Document Data.', theme: 'energyblue', position: 'top', autoHide: false, trigger: "none", closeOnClick: false, showDelay: 10000});
                                $("#step2").jqxTooltip('open');
                                var dialogSplitMessage = dialogSplitIconText(result.MESSAGE, flag);
                                $("#dialog").html(dialogSplitMessage);
                                $("#dialog").dialog({resizable: false,
                                    resizable: false,
                                    modal: true,
                                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                    height: 'auto',
                                    // commented by Ajay minHeight: 'auto',
                                    width: 300,
                                    fluid: true,
                                    buttons: [{
                                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                            click: function () {
                                                $(this).html("");
                                                $(this).dialog("close");
                                                if (result.MESSAGE.indexOf("Already Finished Material Creation Limit.") > -1) {
                                                    window.location.href = ("trialUser");
                                                }

                                                $(this).dialog("destroy");


                                            }
//                                "No": function () {
//                                    $(this).html("");
//                                    $(this).dialog("close");
//                                    $(this).dialog("destroy");
//                                }
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

                            } else if (!(flag)) {
                        //else if (result.MESSAGE.indexOf("Already Finished Material Creation Limit.") > -1 || result.MESSAGE.indexOf("Material Creation Limit Finished.")) {


                        var dialogSplitMessage = dialogSplitIconText(result.MESSAGE, flag);
                        $("#dialog").html(dialogSplitMessage);
                        $("#dialog").dialog({resizable: false,
                            resizable: false,
                            modal: true,
                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                            height: 'auto',
                            // commented by Ajay minHeight: 'auto',
                            width: 300,
                            fluid: true,
                            buttons: [{
                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                    click: function () {
                                        $(this).html("");
                                        $(this).dialog("close");
                                        if (result.MESSAGE.indexOf("Already Finished Material Creation Limit.") > -1) {
                                            window.location.href = ("trialUser");
                                        }

                                        $(this).dialog("destroy");


                                    }
//                                "No": function () {
//                                    $(this).html("");
//                                    $(this).dialog("close");
//                                    $(this).dialog("destroy");
//                                }
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

                        errorMsg("Registration Failed!");


                    }

                },
                error: function (e) {
                    //  ////alert(e.message)
                    sessionTimeout(e);
                }
            });


        }
    });












    $("#Duplicate_Check").click(function () {
//        Duplicate_Check();
        showLoader();
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        var role = $("#rolehid").val();
        var roleStartsWith = role.substring(0, 2);
        if (role != null && (roleStartsWith == "VM" || roleStartsWith == "CM")) {
//        if (role != null && role.startsWith("VM")) {
            vendorDuplicateTable();
        } else {
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
//            $("#wait").css("display", "block");
            $.ajax({
                type: "get",
                traditional: true,
                dataType: 'html',
                url: "duplicateCheck",
                cache: false,
                data: {
                    basicData: JSON.stringify(basicData)

                },
                error: function (result) {
                    return false;
                    sessionTimeout(result);
                },
                success: function (result) {
                    stopLoader();
                    alert("result::::" + result);
                    if ($.trim(result) != null) {
                        var duplicateObject = JSON.parse($.trim(result));
                        if (duplicateObject != null) {
                            if (duplicateObject['messageFlag']) {
                                showDuplicates(basicData);
//                                var duplicatesArray = duplicateObject['duplicateArray'];
//                                console.log("duplicatesArray:::" + JSON.stringify(duplicatesArray));
//                                $("#dupResFormResult").val(JSON.stringify(duplicatesArray));
//                                $("#dupResForm").submit();

//                                var form = $(document.createElement('form'));
//                                $(form).attr("action", "dupRes");
//                                $(form).attr("method", "POST");
//                                $(form).attr("target", "_blank");
//                                $(form).attr("id", "dupResForm");
//                                $("#dupResForm").html("");
//                                var duplicatesArray = duplicateObject['duplicateArray'];
//                                //   console.log("duplicatesArray:::" + JSON.stringify(duplicatesArray));
//                                var input = $("<input>")
//                                        .attr("type", "hidden")
//                                        .attr("name", "dupResFormResult")
//                                        .val(JSON.stringify(duplicatesArray));
//
//
//                                $("#dupResForm").html($(input));
//                                $("#dupResForm").submit();

                            } else {
                                $("#dialog").empty();
                                var results = duplicateObject['message'];
                                results = labelObject[results] != null ? labelObject[results] : results;
                                var dialogSplitMessage = dialogSplitIconText(results, "P");
                                $("#dialog").html(dialogSplitMessage).dialog({resizable: false,
                                    title: (labelObject['Duplicate Check'] != null ? labelObject['Duplicate Check'] : 'Duplicate Check'),
                                    height: 'auto',
                                    // commented by Ajay minHeight: 'auto',
                                    minWidth: 250,
                                    maxWidth: 'auto', // here also madatory please do nit remove this.

                                    modal: true,
                                    buttons: [{
                                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                            click: function () {

                                                $(this).dialog('close');
                                            }

                                        }],
                                    autoOpen: true,
                                    fluid: true,
                                    open: function () {
                                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                                        $(".visionHeaderMain").css("z-index", "999");
//                                        $(".visionFooterMain").css("z-index", "999");
                                        $(this).closest(".ui-dialog").css("z-index", "99999");
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
            );


        }

//        stopLoader();
    });


    /////////////////////////////////////////////////
    //deletion requests

    $("#Delete_Request").click(function () {
//        showLoader();
        var success_msg = $("#Delete_Request").attr('data-success-conf');
        var conf_mesg = $("#Delete_Request").attr('data-conf');
        var resultArray = registerValidation();
        //  alert("resultArray:::"+resultArray);
        if (resultArray != null && Object.keys(resultArray).length == 0) {

            $(".allErrors").hide();
            // alert("Undelete_Request");
            var baskettype = $('#baskettypehid').val();
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
            delete basicData['PLANT'];
            delete basicData['PURCHASE_ORG'];
            delete basicData['COMPANY_CDE'];
            delete basicData['INSTANCE'];
            basicData['PLANT'] = panaloldData['PLANT'];
            basicData['PURCHASE_ORG'] = panaloldData['PURCHASE_ORG'];
            basicData['COMPANY_CDE'] = panaloldData['COMPANY_CDE'];
            basicData['INSTANCE'] = panaloldData['INSTANCE'];
            basicData['controlType'] = "Delete Request";
            var folowuppanel = '';
            var folowupgridId = '';
            folowupgridId = $('#FOLLOWUP_GRID_ID').val();
            folowuppanel = $('#FOLLOWUP_PANEL_ID').val();
            basicData['FOLLOWUP_PANEL_ID'] = folowuppanel;
            basicData['FOLLOWUP_GRID_ID'] = folowupgridId;
            var role = $("#rolehid").val();
            var jsonString = JSON.stringify(basicData);
            console.log("jsonString::::" + JSON.stringify(jsonString));
            var aiLensAutomationFlag = $("#aiLensAutomationFlag").val();
            if (aiLensAutomationFlag != null && aiLensAutomationFlag != ''
                    && aiLensAutomationFlag != undefined && aiLensAutomationFlag != "N") {
                changeRequest(jsonString, 'deleteRequest', success_msg);
            } else {
                var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
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
                            text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                //processEnrichment(jsonString);
                                changeRequest(jsonString, 'deleteRequest', success_msg);
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
            }
//            changeRequest(jsonString, 'deleteRequest', success_msg);
        } else {
            for (var textIdKey in resultArray) {
                //allErrors
                console.log(":::::::::#error_" + textIdKey);
                //$("#dis" + resultArray[i]).html("Should not be null.");
                $("#dis" + textIdKey).html(resultArray[textIdKey]);
                $("#dis" + textIdKey).show();

            }
        }
    });

/////////////////////////////////////////////////////////////////////////
//Undeletion code starts

    $("#Undelete_Request").click(function () {
        var conf_mesg = $("#Undelete_Request").attr('data-conf');
        var success_msg = $("#Undelete_Request").attr('data-success-conf');
        // alert("Undelete_Request");
        var baskettype = $('#baskettypehid').val();
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
        delete basicData['PLANT'];
        delete basicData['PURCHASE_ORG'];
        delete basicData['COMPANY_CDE'];
        delete basicData['INSTANCE'];
        basicData['PLANT'] = panaloldData['PLANT'];
        basicData['PURCHASE_ORG'] = panaloldData['PURCHASE_ORG'];
        basicData['COMPANY_CDE'] = panaloldData['COMPANY_CDE'];
        basicData['INSTANCE'] = panaloldData['INSTANCE'];
        var folowuppanel = '';
        var folowupgridId = '';
        folowupgridId = $('#FOLLOWUP_GRID_ID').val();
        folowuppanel = $('#FOLLOWUP_PANEL_ID').val();
        basicData['FOLLOWUP_PANEL_ID'] = folowuppanel;
        basicData['FOLLOWUP_GRID_ID'] = folowupgridId;
        basicData['controlType'] = "Undelete Request";
        var role = $("#rolehid").val();
        var jsonString = JSON.stringify(basicData);
        console.log("jsonString::::" + JSON.stringify(jsonString));
        var aiLensAutomationFlag = $("#aiLensAutomationFlag").val();
        if (aiLensAutomationFlag != null && aiLensAutomationFlag != ''
                && aiLensAutomationFlag != undefined && aiLensAutomationFlag != "N") {
            changeRequest(jsonString, 'undeleteRequest', success_msg);
        } else {
            var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
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
                        text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            //processEnrichment(jsonString);
                            changeRequest(jsonString, 'undeleteRequest', success_msg);
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
        }
//        changeRequest(jsonString, 'undeleteRequest', success_msg);

    });
    //////////////////////////Active Request code for ADAC specific/////

    $("#Active_Request").click(function () {

        var success_msg = $("#Active_Request").attr('data-success-conf');
        // alert("Undelete_Request");
        var baskettype = $('#baskettypehid').val();
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
        console.log("panaloldData::::" + JSON.stringify(panaloldData));
        basicData['NEW_PURCHASE_ORG'] = basicData['PURCHASE_ORG'];
        basicData['NEW_COMPANY_CDE'] = basicData['COMPANY_CDE'];
        delete basicData['PLANT'];
        delete basicData['PURCHASE_ORG'];
        delete basicData['COMPANY_CDE'];
        delete basicData['INSTANCE'];
        basicData['PLANT'] = panaloldData['PLANT'];
        basicData['PURCHASE_ORG'] = panaloldData['PURCHASE_ORG'];
        basicData['COMPANY_CDE'] = panaloldData['COMPANY_CDE'];
        basicData['INSTANCE'] = panaloldData['INSTANCE'];
        basicData['controlType'] = "Active Request";
        var role = $("#rolehid").val();
        var jsonString = JSON.stringify(basicData);
        console.log("jsonString::::" + JSON.stringify(jsonString));
        changeRequest(jsonString, 'undeleteRequest', success_msg);

    });


//////////////////////////InActive Request code for ADAC specific/////

    $("#Inactive_Request").click(function () {
        var success_msg = $("#Inactive_Request").attr('data-success-conf');

        var resultArray = registerValidation();
        //  alert("resultArray:::"+resultArray);
        if (resultArray != null && Object.keys(resultArray).length == 0) {

            $(".allErrors").hide();
            // alert("Undelete_Request");
            var baskettype = $('#baskettypehid').val();
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
            console.log("panaloldData::::" + JSON.stringify(panaloldData));
            basicData['NEW_PURCHASE_ORG'] = basicData['PURCHASE_ORG'];
            basicData['NEW_COMPANY_CDE'] = basicData['COMPANY_CDE'];
            delete basicData['PLANT'];
            delete basicData['PURCHASE_ORG'];
            delete basicData['COMPANY_CDE'];
            delete basicData['INSTANCE'];
            basicData['PLANT'] = panaloldData['PLANT'];
            basicData['PURCHASE_ORG'] = panaloldData['PURCHASE_ORG'];
            basicData['COMPANY_CDE'] = panaloldData['COMPANY_CDE'];
            basicData['INSTANCE'] = panaloldData['INSTANCE'];
            basicData['controlType'] = "Inactive Request";
            var role = $("#rolehid").val();
            var jsonString = JSON.stringify(basicData);
            console.log("jsonString::::" + JSON.stringify(jsonString));
            changeRequest(jsonString, 'deleteRequest', success_msg);
        } else {
            for (var textIdKey in resultArray) {
                //allErrors
                console.log(":::::::::#error_" + textIdKey);
                //$("#dis" + resultArray[i]).html("Should not be null.");
                $("#dis" + textIdKey).html(resultArray[textIdKey]);
                $("#dis" + textIdKey).show();

            }
        }
    });

    $("#AI_Duplicate_Check").click(function () {
//        Duplicate_Check();
        showLoader();
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        var role = $("#rolehid").val();
        var roleStartsWith = role.substring(0, 2);

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
//            $("#wait").css("display", "block");
        $.ajax({
            type: "get",
            traditional: true,
            dataType: 'html',
            url: "getAIDuplicateCheckResponse",
            cache: false,
            data: {
                basicData: JSON.stringify(basicData)

            },
            error: function (result) {
                return false;
                sessionTimeout(result);
            },
            success: function (result) {
                stopLoader();
                $("#dialog").empty();

                $("#dialog").html(result).dialog({resizable: false,
                    title: (labelObject['AI Duplicate Check'] != null ? labelObject['AI Duplicate Check'] : 'AI Duplicate Check'),
                    height: 'auto',
                    // commented by Ajay minHeight: 'auto',
                    minWidth: 250,
                    maxWidth: 'auto', // here also madatory please do nit remove this.

                    modal: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {

                                $(this).dialog('close');
                            }

                        }],
                    autoOpen: true,
                    fluid: true,
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                                        $(".visionHeaderMain").css("z-index", "999");
//                                        $(".visionFooterMain").css("z-index", "999");
                        $(this).closest(".ui-dialog").css("z-index", "99999");
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

//        stopLoader();
    });
    ////////////////////////////////////////////////////////////////////////////////////
    ////Extension creation Start
    $("#Extend").click(function () {
        var conf_mesg = $("#Extend").attr('data-conf');
        var resultArray = registerValidation();
        //  alert("resultArray:::"+resultArray);
        if (resultArray != null && Object.keys(resultArray).length == 0) {
            $(".allErrors").hide();
            var baskettype = $('#baskettypehid').val();
            var success_msg = $("#Extend").attr('data-success-conf');

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
//                console.log("column nameL:::"+textid);
//                console.log("column Value:::"+textval);

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
                        basicData[columnsArray[i]] = hiddenVal;
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
            console.log("panaloldData::::" + JSON.stringify(basicData));
            //  basicData['NEW_PLANT'] = basicData['PLANT'];
            basicData['NEW_PURCHASE_ORG'] = basicData['PURCHASE_ORG'];
            basicData['NEW_COMPANY_CDE'] = basicData['COMPANY_CDE'];
            // basicData['NEW_INSTANCE'] = basicData['INSTANCE'];
            /// FOR CM
            basicData['NEW_DISTRIBUTION_CHANNEL'] = basicData['DISTRIBUTION_CHANNEL'];
            basicData['NEW_DIVISION'] = basicData['DIVISION'];
            basicData['NEW_SALES_ORG'] = basicData['SALES_ORG'];
            delete basicData['PLANT'];
            delete basicData['PURCHASE_ORG'];
            delete basicData['COMPANY_CDE'];
            delete basicData['INSTANCE'];
            delete basicData['DISTRIBUTION_CHANNEL'];
            delete basicData['SALES_ORG'];
            delete basicData['DIVISION'];
            basicData['PLANT'] = panaloldData['PLANT'];
            basicData['PURCHASE_ORG'] = panaloldData['PURCHASE_ORG'];
            basicData['COMPANY_CDE'] = panaloldData['COMPANY_CDE'];
            basicData['INSTANCE'] = panaloldData['INSTANCE'];
            basicData['DISTRIBUTION_CHANNEL'] = panaloldData['DISTRIBUTION_CHANNEL'];
            basicData['DIVISION'] = panaloldData['DIVISION'];
            basicData['SALES_ORG'] = panaloldData['SALES_ORG'];
            basicData['controlType'] = "Extend";
            var folowuppanel = '';
            var folowupgridId = '';
            folowupgridId = $('#FOLLOWUP_GRID_ID').val();
            folowuppanel = $('#FOLLOWUP_PANEL_ID').val();
            basicData['FOLLOWUP_PANEL_ID'] = folowuppanel;
            basicData['FOLLOWUP_GRID_ID'] = folowupgridId;
            var role = $("#rolehid").val();
            var roleStartsWith = role.substring(0, 2);
            var aiLensAutomationFlag = $("#aiLensAutomationFlag").val();
            if (aiLensAutomationFlag != null && aiLensAutomationFlag != ''
                    && aiLensAutomationFlag != undefined && aiLensAutomationFlag != "N") {
                basicData['SOURCE_TYPE'] = 'EXTEND';
                var newPlant = "";
                var plant = basicData['NEW_PLANT'];
                if (plant != null && plant != undefined && plant != '') {
                    if (plant == "1000") {
                        newPlant = "0001";
                    }
                    if (plant == "0001") {
                        newPlant = "1000";
                    } else {
                        newPlant = "2000";
                    }
                }
                var selectedInstance = "100:" + newPlant + "";
                delete basicData['NEW_PLANT'];
                delete basicData['NEW_INSTANCE'];
                delete basicData['NEW_BUSINESS_UNIT'];
                basicData['NEW_PLANT'] = selectedInstance[1];
                basicData['NEW_BUSINESS_UNIT'] = selectedInstance[1];
                basicData['NEW_INSTANCE'] = selectedInstance[0];
                var jsonString = JSON.stringify(basicData);
                extensions(jsonString, success_msg, selectedInstance);
            } else {
                var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
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
                            text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                //processEnrichment(jsonString);
                                //changeRequest(jsonString, 'changeRequest', success_msg);
                                if (roleStartsWith == "VM" && basicData['NEW_PURCHASE_ORG'] == basicData['PURCHASE_ORG'] &&
                                        basicData['NEW_COMPANY_CDE'] == basicData['COMPANY_CDE']) {
                                    basicData['NEW_ACCOUNT_GROUP'] = panaloldData['ACCOUNT_GROUP'];
                                    // for instance level
                                    instanceDropDown(basicData);
//            } else if (role.startsWith("VM")) {
                                } else if (roleStartsWith == "CM" && basicData['NEW_SALES_ORG'] == basicData['SALES_ORG']
                                        && basicData['NEW_COMPANY_CDE'] == basicData['COMPANY_CDE']
                                        && basicData['NEW_DISTRIBUTION_CHANNEL'] == basicData['DISTRIBUTION_CHANNEL']
                                        && basicData['NEW_DIVISION'] == basicData['DIVISION']
                                        ) {
                                    basicData['NEW_ACCOUNT_GROUP'] = panaloldData['ACCOUNT_GROUP'];
                                    // for instance level
                                    instanceDropDown(basicData);
                                } else if (roleStartsWith == "VM" || roleStartsWith == "CM") {
                                    // for company code and Purchase Org Level Exdtension In Manager And Steward.
                                    delete basicData['NEW_PLANT'];
                                    delete basicData['NEW_INSTANCE'];
                                    basicData['NEW_PLANT'] = panaloldData['PLANT'];
                                    basicData['NEW_INSTANCE'] = panaloldData['PLANT'];
                                    basicData['NEW_ACCOUNT_GROUP'] = panaloldData['ACCOUNT_GROUP'];
                                    // basicData['NEW_PURCHASE_ORG'] = basicData['PURCHASE_ORG'];
                                    var jsonString = JSON.stringify(basicData);

                                    console.log("jsonString::::" + JSON.stringify(jsonString));
                                    extensions(jsonString, success_msg);
                                } else {
                                    basicData['SOURCE_TYPE'] = 'EXTEND';
                                    instanceDropDownMM(basicData, success_msg);
                                }
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
            }
            // call function and catch the return value

//            if (roleStartsWith == "VM" && basicData['NEW_PURCHASE_ORG'] == basicData['PURCHASE_ORG'] &&
//                    basicData['NEW_COMPANY_CDE'] == basicData['COMPANY_CDE']) {
//                basicData['NEW_ACCOUNT_GROUP'] = panaloldData['ACCOUNT_GROUP'];
//                // for instance level
//                instanceDropDown(basicData);
////            } else if (role.startsWith("VM")) {
//            } else if (roleStartsWith == "CM" && basicData['NEW_SALES_ORG'] == basicData['SALES_ORG']
//                    && basicData['NEW_COMPANY_CDE'] == basicData['COMPANY_CDE']
//                    && basicData['NEW_DISTRIBUTION_CHANNEL'] == basicData['DISTRIBUTION_CHANNEL']
//                    && basicData['NEW_DIVISION'] == basicData['DIVISION']
//                    ) {
//                basicData['NEW_ACCOUNT_GROUP'] = panaloldData['ACCOUNT_GROUP'];
//                // for instance level
//                instanceDropDown(basicData);
//            } else if (roleStartsWith == "VM" || roleStartsWith == "CM") {
//                // for company code and Purchase Org Level Exdtension In Manager And Steward.
//                delete basicData['NEW_PLANT'];
//                delete basicData['NEW_INSTANCE'];
//                basicData['NEW_PLANT'] = panaloldData['PLANT'];
//                basicData['NEW_INSTANCE'] = panaloldData['PLANT'];
//                basicData['NEW_ACCOUNT_GROUP'] = panaloldData['ACCOUNT_GROUP'];
//                // basicData['NEW_PURCHASE_ORG'] = basicData['PURCHASE_ORG'];
//                var jsonString = JSON.stringify(basicData);
//
//                console.log("jsonString::::" + JSON.stringify(jsonString));
//                extensions(jsonString, success_msg);
//            } else {
//                instanceDropDownMM(basicData, success_msg);
//            }


//            } else {
//                // for all requestors and approvers
//                var jsonString = JSON.stringify(basicData);
//
//                console.log("jsonString::::" + JSON.stringify(jsonString));
//                extensions(jsonString, success_msg);
//            }
        } else {
            for (var textIdKey in resultArray) {
                //allErrors
                console.log(":::::::::#error_" + textIdKey);
                //$("#dis" + resultArray[i]).html("Should not be null.");
                $("#dis" + textIdKey).html(resultArray[textIdKey]);
                $("#dis" + textIdKey).show();

            }
        }
    });
////Extension creation End

    $("#Extend_Plants").click(function () {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        var resultArray = registerValidation();
        if (resultArray != null && Object.keys(resultArray).length == 0) {
            $(".allErrors").hide();
            SaveorUpdate(false, 'Save', '');
            var conf_mesg = $("#Extend_Plants").attr('data-conf');
            var success_msg = $("#Extend_Plants").attr('data-success-conf');
            var duplCheck = $("#Extend_Plants").attr('data-dupl-flag');
            var returnReason = $("#Extend_Plants").attr('data-returnReason');
            var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
            var controlInd = $(this).attr("data-value");
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
                        text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                        click: function () {
                            showLoader();
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            selectplant(success_msg);

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
            for (var textIdKey in resultArray) {
                //allErrors
                console.log(":::::::::#error_" + textIdKey);
                //$("#dis" + resultArray[i]).html("Should not be null.");
                $("#dis" + textIdKey).html(resultArray[textIdKey]);
                $("#dis" + textIdKey).show();

            }
        }
    });

    $("#Generate_Description").click(function () {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }

        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            url: "generateRecordDescription",
            cache: false,
            data:
                    {
                        //type: selectedValue,
                        items: JSON.stringify({
                            recordNo_Text: $("#RECORD_NO").val(),
                            REQ_NUMBER: $("#REQ_NUMBER").val(),
                            STATUS: $("#STATUS").val()
                        })


                    },
            success: function (response) {


                var responseJSON = JSON.parse(response);

                // stepActions(responseJSON.STEPS);

                $("#shortDesc_Text").val(responseJSON.shortdesc);
                if (true) {
                    $(".accordian").accordion({
                        active: 5
                    });
                    mmFetchDescriptionsTabData();
                } else {
                    var resultdialogprops = {};
                    resultdialogprops.buttons = {};
                    //resultdialogprops.width = 400;
                    resultdialogprops.modal = true;
                    resultdialogprops.title = responseJSON.title,
                            resultdialogprops.height = 120,
                            resultdialogprops.minWidth = 300,
                            resultdialogprops.maxWidth = 'auto',
                            resultdialogprops.modal = true,
                            resultdialogprops.buttons = [];
                    resultdialogprops.buttons.push(
                            {
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    //$(this).css('color', 'darkblue');
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                    //  //////alert("see now");
                                    //$("#ui-id-4").click();



                                    $(".accordian").accordion({
                                        active: 5
                                    });
                                    mmFetchDescriptionsTabData();

                                    // ////alert("have u observed anything");

                                }

                            });
//                    resultdialogprops.buttons.Ok = function () {
//                        //$(this).css('color', 'darkblue');
//                        $(this).html("");
//                        $(this).dialog("close");
//                        $(this).dialog("destroy");
//                        //  //////alert("see now");
//                        //$("#ui-id-4").click();
//
//
//
//                        $(".accordian").accordion({
//                            active: 5
//                        });
//                        mmFetchDescriptionsTabData();
//
//                        // ////alert("have u observed anything");
//
//                    };
                    //$("#dialog").css('text-align','center');
                    $("#dialog").html("<div style='margin-top:30px;margin-left:30px;'>" + responseJSON.MESSAGE + "</div>");
                    $("#dialog").dialog(resultdialogprops);
                }
            },
            error: function (e) {
                //  ////alert(e.message)
                sessionTimeout(e);
            }

        });





        //Duplicate_Check();
    });


    $("#descriptionsupdate").click(function () {

        fetchDescriptionsTabData();
    });


    ////////////////////////////////////////////////////////////////////////////////////
    ////Change Request Creation Start
    $("#Change").click(function () {

        var success_msg = $("#Change").attr('data-success-conf');
        var conf_mesg = $("#Change").attr('data-conf');
        var baskettype = $('#baskettypehid').val();
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

        console.log("panaloldData::::" + JSON.stringify(panaloldData));
        var baskettype = $('#baskettypehid').val();
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
        var aiLensAutomationFlag = $("#aiLensAutomationFlag").val();
        if (aiLensAutomationFlag != null && aiLensAutomationFlag != ''
                && aiLensAutomationFlag != undefined && aiLensAutomationFlag != "N") {
            changeRequest(jsonString, 'changeRequest', success_msg);
        } else {
            var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
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
                        text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            //processEnrichment(jsonString);
                            changeRequest(jsonString, 'changeRequest', success_msg);
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
        }
//        changeRequest(jsonString, 'changeRequest', success_msg);
    });
    $("#DescriptionChange").click(function () {

        var success_msg = $("#DescriptionChange").attr('data-success-conf');
        var conf_mesg = $("#DescriptionChange").attr('data-conf');
        var baskettype = $('#baskettypehid').val();
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
        console.log("panaloldData::::" + JSON.stringify(panaloldData));
        var baskettype = $('#baskettypehid').val();
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
        basicData['controlType'] = "DescriptionChange";
        var role = $("#rolehid").val();
        var jsonString = JSON.stringify(basicData);
        console.log("jsonString::::" + JSON.stringify(jsonString));
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
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
                    text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        //processEnrichment(jsonString);
                        changeRequest(jsonString, 'changeRequest', success_msg);
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
//        changeRequest(jsonString, 'changeRequest', success_msg);

    });

    $("#StockChange").click(function () {

        var success_msg = $("#StockChange").attr('data-success-conf');
        var conf_mesg = $("#StockChange").attr('data-conf');
        var baskettype = $('#baskettypehid').val();
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
        console.log("panaloldData::::" + JSON.stringify(panaloldData));
        var baskettype = $('#baskettypehid').val();
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
        basicData['controlType'] = "StockChange";
        var role = $("#rolehid").val();
        var jsonString = JSON.stringify(basicData);
        console.log("jsonString::::" + JSON.stringify(jsonString));
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
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
                    text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        //processEnrichment(jsonString);
                        changeRequest(jsonString, 'changeRequest', success_msg);
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
//        changeRequest(jsonString, 'changeRequest', success_msg);

    });

    $("#Enrich").click(function () {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        var baskettype = $('#baskettypehid').val();
        var basicIds = [];
        var basicData = {};
        var conf_mesg = $("#Enrich").attr('data-conf');
        var success_msg = $("#Enrich").attr('data-success-conf');
        var returnReason = $("#Enrich").attr('data-returnreason');
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
        console.log("panaloldData::::" + JSON.stringify(panaloldData));
        var baskettype = $('#baskettypehid').val();
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
        basicData['controlType'] = "Enrich";
        var role = $("#rolehid").val();
        var jsonString = JSON.stringify(basicData);
        console.log("jsonString::::" + JSON.stringify(jsonString));
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
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
                    text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        processEnrichment(jsonString);
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


    });
    $("#Open_Docs").click(function () {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        var baskettype = $('#baskettypehid').val();
        var basicIds = [];
        var basicData = {};
        var conf_mesg = $("#Open_Docs").attr('data-conf');
        var success_msg = $("#Open_Docs").attr('data-success-conf');
        var returnReason = $("#Open_Docs").attr('data-returnreason');
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
        console.log("panaloldData::::" + JSON.stringify(panaloldData));
        var baskettype = $('#baskettypehid').val();
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
        basicData['controlType'] = "Enrich";
        var role = $("#rolehid").val();
        var jsonString = JSON.stringify(basicData);
        console.log("jsonString::::" + JSON.stringify(jsonString));
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
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
                    text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        processOpenDocs(jsonString);
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


    });
    $("#Block").click(function () {
        var success_msg = $("#Block").attr('data-success-conf');

        var baskettype = $('#baskettypehid').val();
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
        delete basicData['PLANT'];
        delete basicData['PURCHASE_ORG'];
        delete basicData['COMPANY_CDE'];
        delete basicData['INSTANCE'];
        basicData['PLANT'] = panaloldData['PLANT'];
        basicData['PURCHASE_ORG'] = panaloldData['PURCHASE_ORG'];
        basicData['COMPANY_CDE'] = panaloldData['COMPANY_CDE'];
        basicData['INSTANCE'] = panaloldData['INSTANCE'];
        basicData['controlType'] = "Block";
        var folowuppanel = '';
        var folowupgridId = '';
        folowupgridId = $('#FOLLOWUP_GRID_ID').val();
        folowuppanel = $('#FOLLOWUP_PANEL_ID').val();
        basicData['FOLLOWUP_PANEL_ID'] = folowuppanel;
        basicData['FOLLOWUP_GRID_ID'] = folowupgridId;
        var role = $("#rolehid").val();
        var jsonString = JSON.stringify(basicData);
        console.log("jsonString::::" + JSON.stringify(jsonString));
        changeRequest(jsonString, 'block', success_msg);

    });
    $("#Unblock").click(function () {

        var success_msg = $("#Block").attr('data-success-conf');
        var baskettype = $('#baskettypehid').val();
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
        basicData['NEW_PURCHASE_ORG'] = basicData['PURCHASE_ORG'];
        basicData['NEW_COMPANY_CDE'] = basicData['COMPANY_CDE'];
        delete basicData['PLANT'];
        delete basicData['PURCHASE_ORG'];
        delete basicData['COMPANY_CDE'];
        delete basicData['INSTANCE'];
        basicData['PLANT'] = panaloldData['PLANT'];
        basicData['PURCHASE_ORG'] = panaloldData['PURCHASE_ORG'];
        basicData['COMPANY_CDE'] = panaloldData['COMPANY_CDE'];
        basicData['INSTANCE'] = panaloldData['INSTANCE'];
        basicData['controlType'] = "Unblock";
        var folowuppanel = '';
        var folowupgridId = '';
        folowupgridId = $('#FOLLOWUP_GRID_ID').val();
        folowuppanel = $('#FOLLOWUP_PANEL_ID').val();
        basicData['FOLLOWUP_PANEL_ID'] = folowuppanel;
        basicData['FOLLOWUP_GRID_ID'] = folowupgridId;
        var role = $("#rolehid").val();
        var jsonString = JSON.stringify(basicData);
        console.log("jsonString::::" + JSON.stringify(jsonString));
        changeRequest(jsonString, 'unblock', success_msg);

    });
    $("#Infographics").click(function () {
        var itemString = $("#itemsstring").val();
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'JSON',
            url: "showFormInfographics",
            cache: false,
            data: {
                itemString: itemString,
            },
            success: function (response) {
                if (response != null) {
                    var termArray = response['termArray'];
                    var termValuesArray = response['termValuesArray'];
                    var business_unitArray = response['business_unitArray'];
                    var business_unitValuesArray = response['business_unitValuesArray'];
                    var create_byArray = response['create_byArray'];
                    var create_byValuesArray = response['create_byValuesArray'];
                    var instanceArray = response['instanceArray'];
                    var instanceValuesArray = response['instanceValuesArray'];
                    var matl_typeArray = response['matl_typeArray'];
                    var matl_typeValuesArray = response['matl_typeValuesArray'];
                    var statusArray = response['statusArray'];
                    var statusValuesArray = response['statusValuesArray'];
                    stopLoader();
                    var modalObj = {
                        title: labelObject['InfoGraphics'] != null ? labelObject['InfoGraphics'] : 'InfoGraphics',
                        body: "<div class='showFormAllInfographicsCards' id='showFormAllInfographicsCards' style='display:flex;overflow: auto;'>"
                                + "<div class=\"mainDomainjqxPopOverDiv\" id=\"mainDomainTermInfographicsDiv\"><img src=\"images/InfoGraphicSettings.png\" arr-obj='" + JSON.stringify(termArray) + "' arr-val='" + JSON.stringify(termValuesArray) + "' width=\"20\" onclick =\"setMainDomainInfographicsImg('TermInfographics','showTermInfographicsCard')\" id=\"mainDomainTermInfographicsImg\"></div>"
                                + "<div class='showTermInfographicsCard' id='showTermInfographicsCard'></div>"
                                + "<div class=\"mainDomainjqxPopOverDiv\" id=\"mainDomainBusinessUnitInfographicsDiv\"><img src=\"images/InfoGraphicSettings.png\" arr-obj='" + JSON.stringify(business_unitArray) + "' arr-val='" + JSON.stringify(business_unitValuesArray) + "' width=\"20\" onclick =\"setMainDomainInfographicsImg('BusinessUnitInfographics','showBusinessUnitInfographicsCard')\" id=\"mainDomainBusinessUnitInfographicsImg\"></div>"
                                + "<div class='showBusinessUnitInfographicsCard' id='showBusinessUnitInfographicsCard'></div>"
                                + "<div class=\"mainDomainjqxPopOverDiv\" id=\"mainDomainCreateByInfographicsDiv\"><img src=\"images/InfoGraphicSettings.png\" arr-obj='" + JSON.stringify(create_byArray) + "' arr-val='" + JSON.stringify(create_byValuesArray) + "' width=\"20\" onclick =\"setMainDomainInfographicsImg('CreateByInfographics','showCreateByInfographicsCard')\" id=\"mainDomainCreateByInfographicsImg\"></div>"
                                + "<div class='showCreateByInfographicsCard' id='showCreateByInfographicsCard'></div>"
                                + "<div class=\"mainDomainjqxPopOverDiv\" id=\"mainDomainInstanceInfographicsDiv\"><img src=\"images/InfoGraphicSettings.png\" arr-obj='" + JSON.stringify(instanceArray) + "' arr-val='" + JSON.stringify(instanceValuesArray) + "' width=\"20\" onclick =\"setMainDomainInfographicsImg('InstanceInfographics','showInstanceInfographicsCard')\" id=\"mainDomainInstanceInfographicsImg\"></div>"
                                + "<div class='showInstanceInfographicsCard' id='showInstanceInfographicsCard'></div>"
                                + "<div class=\"mainDomainjqxPopOverDiv\" id=\"mainDomainMaterialTypeInfographicsDiv\"><img src=\"images/InfoGraphicSettings.png\" arr-obj='" + JSON.stringify(matl_typeArray) + "' arr-val='" + JSON.stringify(matl_typeValuesArray) + "' width=\"20\" onclick =\"setMainDomainInfographicsImg('MaterialTypeInfographics', 'showMaterialTypeInfographicsCard')\" id=\"mainDomainMaterialTypeInfographicsImg\"></div>"
                                + "<div class='showMaterialTypeInfographicsCard' id='showMaterialTypeInfographicsCard'></div>"
                                + "<div class=\"mainDomainjqxPopOverDiv\" id=\"mainDomainStatusInfographicsDiv\"><img src=\"images/InfoGraphicSettings.png\" arr-obj='" + JSON.stringify(statusArray) + "' arr-val='" + JSON.stringify(statusValuesArray) + "' width=\"20\" onclick =\"setMainDomainInfographicsImg('StatusInfographics', 'showStatusInfographicsCard')\" id=\"mainDomainStatusInfographicsImg\"></div>"
                                + "<div class='showStatusInfographicsCard' id='showStatusInfographicsCard'></div>"
                                + "</div>"
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
                    $(".modal-header").addClass("dxpMainDomainCloseBtn");
                    $(".dataDxpSplitterValue").find(".modal-dialog").addClass("homePageGraphPopUp");
                    $("#dataDxpSplitterValue").draggable();
                    showFormInfographicsData(termValuesArray, termArray, 'Class Term', 'showTermInfographicsCard');
                    showFormInfographicsData(business_unitValuesArray, business_unitArray, 'BusinessUnit', 'showBusinessUnitInfographicsCard');
                    showFormInfographicsData(create_byValuesArray, create_byArray, 'Create By', 'showCreateByInfographicsCard');
                    showFormInfographicsData(instanceValuesArray, instanceArray, 'Instance', 'showInstanceInfographicsCard');
                    showFormInfographicsData(matl_typeValuesArray, matl_typeArray, 'Material Type', 'showMaterialTypeInfographicsCard');
                    showFormInfographicsData(statusValuesArray, statusArray, 'Status', 'showStatusInfographicsCard');
                }
            }
        });

    });
    function showFormInfographicsData(valuesArray, labelsArray, title, chartId) {
        var data = [{
                values: valuesArray,
                labels: labelsArray,
                type: 'pie',
            }];
        var layout = {
            height: 400,
            width: 480,
            title: title,
        };
        Plotly.newPlot(chartId, data, layout);
    }


}
///// these method for Submit,Delete,Approve,Return,Return-Approver,Return-Requestor
function onSubmitClick(controlInd, returnReason, success_msg) {


    var controltype = controlInd;
    if (returnReason.indexOf(" "))
    {

        onSubmitIncl(controlInd, returnReason, success_msg);
    } else
    {
        var ERP_COMMENT1 = returnReason;
        var ERP_COMMENT = JSON.stringify(ERP_COMMENT1);
        onSubmitIncl(controlInd, ERP_COMMENT, success_msg);
    }
}



function returnReasons(controlInd, success_msg, duplicateCheckMergeFlag, masterRecordData)
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
    var response = "";
    if (controlInd.lastIndexOf("DELETE") > -1) {
        msgTitle = "Deletion Reason";
    } else if (controlInd.lastIndexOf("RETURN") > -1) {
        msgTitle = "Rejection Reason";
    } else if (controlInd.indexOf("RETURN") > -1) {
        msgTitle = "Rejection Reason";
    } else {
        msgTitle = "Reason";

    }
    msgTitle = (labelObject[msgTitle] != null ? labelObject[msgTitle] : msgTitle);
    var rejectType = 0;
    try {
        rejectType = $("#rejectType").val();
    } catch (e) {
        rejectType = 0;
    }
    var rejectData = '';
    try {
        rejectData = $("#rejectData").val();
    } catch (et) {
        rejectData = '';
    }
//        if (rejectType > 1) {
//            onSubmitIncl(controlInd, " ");
//        }

    // //////alert("before empty" + rejectType);
    if (rejectType == 0)
    {
        response = "";

        try {
            $("#textReason").html("");
        } catch (et) {
        }
        ////////////////////alert("after empty");
        response += "<div id='textReason'>";
        response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
        response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";


        $("#dialog2").html(response);




    } else if (rejectType == 1)
    {
        response = "";
        try {
            $("#reasonDialog").html("");
        } catch (et) {
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


        if (rejectData != null && rejectData != '' && rejectData != null && rejectDataArray.length > 0) {
            response += "<div id='rejectComboBox' class='visionRejectFormComboBox'></div>";
            response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
            $("#dialog2").html(response);
//            var rejectDataArray = JSON.parse(rejectData);
            $("#rejectComboBox").jqxComboBox({source: rejectDataArray, searchMode: 'contains', multiSelect: true, width: 280, height: 25});
        } else {
            try {
                $("#textReason").html("");
            } catch (et) {
            }
            ////////////////////alert("after empty");
            response += "<div id='textReason'>";
            response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
            response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";


            $("#dialog2").html(response);
        }
    } else if (rejectType == 4 || rejectType == 3)
    {
        response = "";
        try {
            $("#reasonDialog").html("");
        } catch (et) {
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




        if (rejectData != null && rejectData != '' && rejectData != null && rejectDataArray.length > 0) {
            try {
                $("#textReason").html("");
            } catch (et) {
            }
            ////////////////////alert("after empty");
            response += "<div id='rejectComboBox'  class='visionRejectFormComboBox'></div>";
            response += "<div id='textReason'>";
            response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
            response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";

            $("#dialog2").html(response);

            $("#rejectComboBox").jqxComboBox({source: rejectDataArray,
                searchMode: 'containsignorecase',
                multiSelect: true,
                autoComplete: true,
                theme: 'energyblue',
                openDelay: 1,
                closeDelay: 1,
                enableSelection: true,
                width: 280, height: 25});
        } else {
            try {
                $("#textReason").html("");
            } catch (et) {
            }
            ////////////////////alert("after empty");
            response += "<div id='textReason'>";
            response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
            response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
            $("#dialog2").html(response);
        }
//        $("#dropdownlistArrowrejectComboBox").css("height","25");


    }

    $("#dialog2").dialog({resizable: false,
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
                    var returnReason = "";
//                        var selectReason = $("#selectReason").val();
                    var checkBoxdata = "";
                    if (rejectType == 0) {
                        var textBoxData = '';
                        try {
                            textBoxData = $("#reasonId").val();
                        } catch (et) {
                            textBoxData = '';
                        }
                        retReasonText = textBoxData;
                    } else if (rejectType == 1) {
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
                                retReasonText = returnReason;
                            }
                        } else {

                            var textBoxData = '';
                            try {
                                textBoxData = $("#reasonId").val();
                            } catch (et) {
                                textBoxData = '';
                            }

                            //retReasonText = textBoxData;
                            retReasonText = textBoxData;

                        }


                    } else if (rejectType == 4) {
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
                                retReasonText = returnReason;
                                var textBoxData = '';
                                try {
                                    textBoxData = $("#reasonId").val();
                                } catch (et) {
                                    textBoxData = '';
                                }
                                if (textBoxData != null && textBoxData != '')
                                {
                                    retReasonText = returnReason + ", " + textBoxData;
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
                                retReasonText = textBoxData;
                            }
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
                                retReasonText = returnReason;
                                var textBoxData = '';
                                try {
                                    textBoxData = $("#reasonId").val();
                                } catch (et) {
                                    textBoxData = '';
                                }
                                if (textBoxData != null && textBoxData != '')
                                {
                                    retReasonText = returnReason + ", " + textBoxData;
                                } else {
                                    $("#dailog_error_id").text("Textbox needs to be filled");
                                    retReasonText = "";
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
                                retReasonText = textBoxData;
                            }
                            if (!(selectReason !== null && selectReason.length > 0)) {
                                $("#dailog_error_id").text("Selection box needs to be filled");
                                retReasonText = "";
                            }
                        }
                        if ((textBoxData == null || textBoxData == '') && (selectReason === null || selectReason !== null && selectReason.length == 0)) {
                            $("#dailog_error_id").text("Please give a reason");
                        }
                    } else {
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
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        onSubmit(controlInd, retReasonText, success_msg, "", duplicateCheckMergeFlag, masterRecordData);
//                            onSubmitClick(controlInd, retReasonText, success_msg);
                        // $("#labeld").empty();
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

//                    showLoader();
                }
            },
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
        },
//            close: function () {
//                $(this).html("");
//                $(this).dialog("close");
//                $(this).dialog("destroy");
//            }
    });
}


function feactchCheckvalue(parameters) {
    // //////////alert("feactchCheckvalue:::"+parameters);
    //  //////////alert($("#reject_"+parameters).val());
    if ($("#" + parameters).is(":checked")) {

        rejectArray.push($("#reject_" + parameters).val());
    } else
    {
        rejectArray.pop($("#reject_" + parameters).val());
    }
    //  //////////alert("rejectArray:::"+rejectArray);
}
function showDuplicates(basicData) {
    showLoader();
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var duplicateCheckGridId = $("#duplicateCheckGridId").val();
    var duplicateCheckdiv = '<div id="duplicateCheckForm" style="display: none"> <div class="visionRegisterMaterialTableTab"> <b> <input data-datasize="" type="button" value="Update Action" id="updateActionButton" class="updateActionButton" onclick="updateDuplicateAction()" width="11px"> <input type="button" value="Reset Actions" id="resetConsolidation" class="visionConsolidationResetButton" onclick="resetConsolidationActions();" width="11px"> <input type="button" value="Export" id="exportConsolidation" class="visionConsolidationExportButton" onclick="exportConsolidationData();" width="4px"> </b> <div id="matrixGridDivId" class="visionRegisterMaterialAccordians visionPDRMatrixDiv"> <div id="matrixGridId" class="visionPDRFormTable"> </div> </div> <div id="paginationDiv" class="visionPDRMatrixPaginationDiv "> <div class="visionPDRMatrixSelectInfo" id="showRowsDiv"> </div> <div class="visionPaginationMain"> <div id="paginationCountId" class="visionPaginationCount"></div> <div class="visionPaginationInfo" id="visionPDRPaginationDiv" style="float:left;"> </div> <input type="hidden" id="nestedGridObjHidden"> <input type="hidden" id="selectedGridObjHidden"> <input type="hidden" id="basicDataObjHidden"> <input type="hidden" id="currentPage" value="1"> <input type="hidden" id="selectedGridObjColumns"> <input type="hidden" id="selectedGridActions"> </div> </div> </div> </div>'
    $("#duplicateCheckForm").remove();
    $('#dxpFormContent').append(duplicateCheckdiv);
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
                    height = 550;
                    width = 1200;
                }


                try {
                    var pagesizeoptions = gridPropObj['pagesizeoptions'];
                    pageSize = pagesizeoptions[0];
                } catch (e) {
                }
                $("#selectedGridObjColumns").val(JSON.stringify(gridResultObj['columnsArray']));
                showLoader();
//                let mypromise = new Promise(resolve => {
////                getsearchitem('', '', '', "P");
//                    showDuplicatesGrid(basicData, gridResultObj, 0, pageSize, 30);
//                });
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


                $("#duplicateCheckForm").dialog({resizable: true,
                    title: (labelObject['Duplicates'] != null ? labelObject['Duplicates'] : 'Duplicates'),
                    modal: true,
                    height: height,
                    maxHeight: 'auto', //this is mandatory here for duplicate check.
                    // commented by Ajay minHeight: 'auto',
                    minWidth: width,
                    maxWidth: 'auto', //this is mandatory here for duplicate check.
                    fluid: true,
//                    draggable: false,
//                    resizable: false,
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
                                            try {
                                                $('#duplicateCheckForm').dialog("destroy");
                                            } catch (e) {

                                            }
                                            try {
                                                $('#duplicateCheckForm').dialog("close");
                                            } catch (e) {

                                            }
                                            onSumbitDeleteDuplicateConfirm("DELETE", success_msg, masterRecordData, sourceRecordData);
                                        } else {
                                            openSubmitActionDialog("Please select at least on Master record");
                                        }

                                    } else {
                                        $(this).dialog("close");
                                        try {
                                            $('#duplicateCheckForm').dialog("destroy");
                                        } catch (e) {

                                        }
                                        try {
                                            $('#duplicateCheckForm').dialog("close");
                                        } catch (e) {

                                        }
                                    }
                                } else {
                                    openSubmitActionDialog("Please update actions before processing the record");
                                }


//                                $(this).html("");
//                                try {
//                                    $('#duplicateCheckForm').dialog("destroy");
//                                } catch (e) {
//
//                                }
//                                try {
//                                    $('#duplicateCheckForm').dialog("close");
//                                } catch (e) {
//
//                                }


                            }
                        }],
                    open: function () {
                        showDuplicatesGrid(basicData, gridResultObj, 0, pageSize, 30);
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                        $(".visionHeaderMain").css("z-index", "999");
//                        $(".visionFooterMain").css("z-index", "999");
                        $(this).closest(".ui-dialog").addClass("duplicateCheckFormPopup");
                    },
                    beforeClose: function (event, ui)
                    {

                        try {
                            $('#duplicateCheckForm').dialog("destroy");
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
        },
        error: function (e)
        {
            sessionTimeout(e);
        }

    });
}
function mergeDataFromSourceToMaster(masterRecordData) {
    showLoader();
    if (masterRecordData != null) {
        var basicData = {};
        $("#mat_creation_form_table :input").each(function () {

            var textid = $(this).attr("id");
            var type = $(this).attr("type");
            var textval = $(this).val();
            if (type != 'hidden') {
                textval = textval.toUpperCase();
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
            if (textid != null && textid != 'CREATE_DATE') {
                basicData[textid] = textval;
//                    basicData[controlType] = controlInd;
                //basicDatas[ACCEPT_COMMENT] = commentVal1;
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
        $.ajax({
            type: "POST",
            traditional: true,
            data: {
                selectedMasterData: JSON.stringify(masterRecordData),
                basicData: JSON.stringify(basicData)
            },
            dataType: 'html',
            url: "mergeDataFromSourceToMaster",
            cache: false,
            async: false,
            success: function (response) {
                stopLoader();
                if (response != null && response != '') {
                    var responseObj = JSON.parse(response);
                    var dialogSplitMessage = dialogSplitIconText((labelObject[responseObj.Message] != null ? labelObject[responseObj.Message] : responseObj.Message), false);
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
                                    $("#gridReload", window.opener.document).val("Y");
                                    var objWin = window.self;
                                    objWin.open('', '_self', '');
                                    objWin.close();
                                    window.top.close();
//                                        if (responseObj.messageFlag) {
//                                           
//                                        }
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
            error: function (e) {
                //  ////////alert(e.message)
                sessionTimeout(e);
            }
        });
    }
    // 
}

function onSumbitDeleteDuplicateConfirm(controlInd, success_msg, masterRecordData, sourceRecordData) {
    // returnReasons("Delete", success_msg);
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var duplicateCheckMergeFlag = $("#duplicateCheckMergeFlag").val();
    var conf_mesg = $("#Delete").attr('data-conf');
    if (duplicateCheckMergeFlag == 'Y') {
        conf_mesg = "The data will be merge to master Record" +
                "<br>Are you sure you want to Delete this Record?"
    } else {
        if (sourceRecordData != null && masterRecordData != null) {
            if (masterRecordData['STATUS'] == 'B2-ERP ACCEPTED'
                    || masterRecordData['STATUS'] == 'C2-RFC STAGED'
                    || masterRecordData['STATUS'] == 'C2-RFE STAGED'
                    || masterRecordData['STATUS'] == 'C2-RFD STAGED'
                    || masterRecordData['STATUS'] == 'C2-RFUD STAGED'
                    ) {
                if (sourceRecordData['PLANT'] == masterRecordData['PLANT']) {

                    conf_mesg = "Use the " + masterRecordData['RECORD_NO'] + " & add more details as description change" +
                            "<br>Are you sure you want to Delete this(" + sourceRecordData['RECORD_NO'] + ") Record?"
                } else {
                    conf_mesg = "Use the " + masterRecordData['RECORD_NO'] + " & add more details as Extension" +
                            "<br>Are you sure you want to Delete this(" + sourceRecordData['RECORD_NO'] + ") Record?"
                }

            } else {
                conf_mesg = "Use the record Number " + masterRecordData['RECORD_NO'] + " instead of " + sourceRecordData['RECORD_NO'] +
                        "<br>Are you sure you want to Delete this(" + sourceRecordData['RECORD_NO'] + ") Record?"
            }

        }
    }



//        if (conf_mesg != null && conf_mesg != '') {
//
//        } else {
//            conf_mesg = "Are you sure you want to Delete this Record?"
//        }
    var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
    var controlInd = $(this).attr("data-value");
    console.log("success_msg:::delte" + success_msg);
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
                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");

                    if (duplicateCheckMergeFlag != null && duplicateCheckMergeFlag == 'Y') {

                        returnReasons('DELETE', success_msg, duplicateCheckMergeFlag, masterRecordData);
                    } else {
                        returnReasons('DELETE', success_msg, "", masterRecordData);
                    }
                    // need to call merge functionality
//                       

//                    returnReasons('DELETE', success_msg);

//                   submitReg('DELETE');

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
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
//            $(this).closest(".ui-dialog").addClass("visionDialogAlignCommon");
        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}
function onSumbitBulkDeleteDuplicateConfirm(controlInd, success_msg, masterRecordData, sourceRecordData) {
    // returnReasons("Delete", success_msg);
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var duplicateCheckMergeFlag = $("#duplicateCheckMergeFlag").val();
    var conf_mesg = $("#Delete").attr('data-conf');
    if (duplicateCheckMergeFlag == 'Y') {
        conf_mesg = "The data will be merge to master Record" +
                "<br>Are you sure you want to Delete this Record?"
    } else {
        if (sourceRecordData != null && masterRecordData != null) {
            if (masterRecordData['STATUS'] == 'B2-ERP ACCEPTED'
                    || masterRecordData['STATUS'] == 'C2-RFC STAGED'
                    || masterRecordData['STATUS'] == 'C2-RFE STAGED'
                    || masterRecordData['STATUS'] == 'C2-RFD STAGED'
                    || masterRecordData['STATUS'] == 'C2-RFUD STAGED'
                    ) {
                if (sourceRecordData['PLANT'] == masterRecordData['PLANT']) {

                    conf_mesg = "Use the " + masterRecordData['RECORD_NO'] + " & add more details as description change" +
                            "<br>Are you sure you want to Delete this(" + sourceRecordData['RECORD_NO'] + ") Record?"
                } else {
                    conf_mesg = "Use the " + masterRecordData['RECORD_NO'] + " & add more details as Extension" +
                            "<br>Are you sure you want to Delete this(" + sourceRecordData['RECORD_NO'] + ") Record?"
                }

            } else {
                conf_mesg = "Use the record Number " + masterRecordData['RECORD_NO'] + " instead of " + sourceRecordData['RECORD_NO'] +
                        "<br>Are you sure you want to Delete this(" + sourceRecordData['RECORD_NO'] + ") Record?"
            }

        }
    }



//        if (conf_mesg != null && conf_mesg != '') {
//
//        } else {
//            conf_mesg = "Are you sure you want to Delete this Record?"
//        }
    var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
    var controlInd = $(this).attr("data-value");
    console.log("success_msg:::delte" + success_msg);
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
                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");

                    if (duplicateCheckMergeFlag != null && duplicateCheckMergeFlag == 'Y') {

                        returnReasons('DELETE', success_msg, duplicateCheckMergeFlag, masterRecordData);
                    } else {
                        returnReasons('DELETE', success_msg, "", masterRecordData);
                    }
                    // need to call merge functionality
//                       

//                    returnReasons('DELETE', success_msg);

//                   submitReg('DELETE');

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
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
//            $(this).closest(".ui-dialog").addClass("visionDialogAlignCommon");
        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}
function showOnSubmitDuplicates(basicData, ssDuplCheckEnableFlag, controlInd, returnReasonDataText, success_msg, dataReturnReason, matchedClassFlag) {
    showLoader();
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var duplicateCheckGridId = $("#duplicateCheckGridId").val();
    var duplicateCheckdiv = '<div id="duplicateCheckForm" style="display: none"> <div class="visionRegisterMaterialTableTab"> <b> <input data-datasize="" type="button" value="Update Action" id="updateActionButton" class="updateActionButton" onclick="updateDuplicateAction()" width="11px"> <input type="button" value="Reset Actions" id="resetConsolidation" class="visionConsolidationResetButton" onclick="resetConsolidationActions();" width="11px"> <input type="button" value="Export" id="exportConsolidation" class="visionConsolidationExportButton" onclick="exportConsolidationData();" width="4px"> </b> <div id="matrixGridDivId" class="visionRegisterMaterialAccordians visionPDRMatrixDiv"> <div id="matrixGridId" class="visionPDRFormTable"> </div> </div> <div id="paginationDiv" class="visionPDRMatrixPaginationDiv "> <div class="visionPDRMatrixSelectInfo" id="showRowsDiv"> </div> <div class="visionPaginationMain"> <div id="paginationCountId" class="visionPaginationCount"></div> <div class="visionPaginationInfo" id="visionPDRPaginationDiv" style="float:left;"> </div> <input type="hidden" id="nestedGridObjHidden"> <input type="hidden" id="selectedGridObjHidden"> <input type="hidden" id="basicDataObjHidden"> <input type="hidden" id="currentPage" value="1"> <input type="hidden" id="selectedGridObjColumns"> <input type="hidden" id="selectedGridActions"> </div> </div> </div> </div>'
    $("#duplicateCheckForm").remove();
    $('#dxpFormContent').append(duplicateCheckdiv);
    setReasonListsObj('DUPLICATECHECK');
//    
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
//                let mypromise = new Promise(resolve => {
//                    showDuplicatesGrid(basicData, gridResultObj, 0, pageSize, 30);
//                });
                if (basicData['typ3Matched'] == 'Y') {
                    ssDuplCheckEnableFlag = 'Y';
                }
//                    showLoader();
                var buttonArray = [];
                if (ssDuplCheckEnableFlag != null && ssDuplCheckEnableFlag == 'N') {
                    buttonArray = [];
                    buttonArray.push({
                        text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                        id: "my-button-id-yes",
                        click: function () {
                            //  $("#duplicateGrid").jqxGrid("destroy");
                            //   $(this).html("");

                            // $(this).dialog("destroy");
                            // $("#wait").css("display", "block");
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
                                        onSumbitDeleteDuplicateConfirm("DELETE", success_msg, masterRecordData, sourceRecordData);
                                    } else {
                                        openSubmitActionDialog("Please select at least on Master record");
                                    }

//                                    onSumbitDeleteDuplicateConfirm("DELETE", success_msg);
                                } else {
                                    $(this).dialog("close");
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
                                        var rejectType = 0;
                                        try {
                                            rejectType = $("#rejectType").val();
                                        } catch (e) {
                                            rejectType = 0;
                                        }



                                        if (rejectType == 0)
                                        {
                                            response = "";


                                            try {
                                                $("#textReason").html("");
                                            } catch (et) {
                                            }

                                            response += "<div id='textReason'>";
                                            response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                                            response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";


                                            $("#dialog2").html(response);




                                        } else if (rejectType == 1)
                                        {
                                            response = "";
                                            try {
                                                $("#reasonDialog").html("");
                                            } catch (et) {
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

                                            if (rejectData != null && rejectData != '' && rejectDataArray != null && rejectDataArray.length > 0) {
                                                response += "<div id='rejectComboBox' class='visionRejectFormComboBox'></div>";
                                                response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
                                                $("#dialog2").html(response);
//                                                var rejectDataArray = JSON.parse(rejectData);
                                                $("#rejectComboBox").jqxComboBox({source: rejectDataArray, searchMode: 'contains', multiSelect: true, width: 280, height: 25});
                                            } else {
                                                try {
                                                    $("#textReason").html("");
                                                } catch (et) {
                                                }

                                                response += "<div id='textReason'>";
                                                response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                                                response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";


                                                $("#dialog2").html(response);

                                            }
                                        } else if (rejectType == 4)
                                        {
                                            response = "";
                                            try {
                                                $("#reasonDialog").html("");
                                            } catch (et) {
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


                                            try {
                                                $("#textReason").html("");
                                            } catch (et) {
                                            }


                                            if (rejectData != null && rejectData != '' && rejectDataArray != null && rejectDataArray.length > 0) {
                                                response += "<div id='rejectComboBox'  class='visionRejectFormComboBox'></div>";
                                                response += "<div id='textReason'>";
                                                response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                                                response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";

                                                $("#dialog2").html(response);
//                                                var rejectDataArray = JSON.parse(rejectData);
                                                $("#rejectComboBox").jqxComboBox({source: rejectDataArray,
                                                    searchMode: 'containsignorecase',
                                                    multiSelect: true,
                                                    autoComplete: true,
                                                    theme: 'energyblue',
                                                    openDelay: 1,
                                                    closeDelay: 1,
                                                    enableSelection: true,
                                                    width: 280, height: 25});
                                            } else {
                                                response += "<div id='textReason'>";
                                                response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                                                response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
                                                $("#dialog2").html(response);
                                            }


                                        }

                                        $("#dialog2").dialog({resizable: false,
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
                                                        var returnReason = "";
//                        var selectReason = $("#selectReason").val();
                                                        var checkBoxdata = "";
                                                        if (rejectType == 0)
                                                        {
                                                            var textBoxData = '';
                                                            try {
                                                                textBoxData = $("#reasonId").val();
                                                            } catch (et) {
                                                                textBoxData = '';
                                                            }
                                                            retReasonText = textBoxData;
                                                        } else if (rejectType == 1)
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
                                                                    retReasonText = returnReason;
                                                                }
                                                            } else {

                                                                var textBoxData = '';
                                                                try {
                                                                    textBoxData = $("#reasonId").val();
                                                                } catch (et) {
                                                                    textBoxData = '';
                                                                }

                                                                retReasonText = textBoxData;

                                                            }
                                                        } else if (rejectType == 4)
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
                                                                    retReasonText = returnReason;
                                                                    var textBoxData = '';
                                                                    try {
                                                                        textBoxData = $("#reasonId").val();
                                                                    } catch (et) {
                                                                        textBoxData = '';
                                                                    }
                                                                    if (textBoxData != null && textBoxData != '')
                                                                    {

                                                                        retReasonText = returnReason + ", " + textBoxData;
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
                                                                    if (returnReason != null && returnReason != '')
                                                                    {
                                                                        retReasonText = returnReason + ", " + textBoxData;
                                                                    } else {
                                                                        retReasonText = textBoxData;
                                                                    }
//                                                                    retReasonText = returnReason + ", " + textBoxData;
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if (returnReasonDataText != null && returnReasonDataText != '') {
                                                                retReasonText = returnReasonDataText + "," + retReasonText;

                                                            }
                                                            onSubmit(controlInd, retReasonText, success_msg);
                                                        }
                                                        ////////////////////////////////////alert("rettext:::"+retReasonText);
                                                        if (!retReasonText)
                                                        {
                                                            ////////////////////////////////////alert("empty"+retReasonText);
                                                            $("#dailog_error_id").show();
                                                        } else if (retReasonText != null)
                                                        {
                                                            $("#dailog_error_id").hide();
                                                            $(this).html("");
                                                            $(this).dialog("close");
                                                            $(this).dialog("destroy");
                                                            if (returnReasonDataText != null && returnReasonDataText != '') {
                                                                retReasonText = returnReasonDataText + "," + retReasonText;

                                                            }
                                                            onSubmit(controlInd, retReasonText, success_msg);

                                                        } else
                                                        {

                                                            var returnReason = selectReason;
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
                                                                onSubmit(controlInd, returnReason, success_msg);
                                                            } else
                                                            {
                                                                $("#dailog_error_id").show();
                                                            }
                                                        }

//                                                        showLoader();
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

                                    } else {
                                        $("#wait").css("display", "block");
                                        onSubmit(controlInd, returnReasonDataText, success_msg, "");
                                    }
                                }
                            } else {

                                openSubmitActionDialog("Please update actions before processing the record");
                            }


                        }
                    },
                            {
                                text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                                id: "my-button-id-no",
                                click: function () {
                                    //   $("#duplicateGrid").jqxGrid("destroy");
                                    //  $(this).html("");
                                    try {
                                        $("#duplicateCheckForm").dialog("close");
                                    } catch (e) {

                                    }
                                    try {
                                        $("#duplicateCheckForm").dialog("destroy");
                                    } catch (e) {

                                    }



                                    //   $("#duplicateDialog").html("<div id='duplicateGrid'></div>");
                                    //  


                                }
                            }, {
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        id: "my-button-id-ok",
                        click: function () {
                            //   $("#duplicateGrid").jqxGrid("destroy");
                            //  $(this).html("");
                            try {
                                $("#duplicateCheckForm").dialog("close");
                            } catch (e) {

                            }
                            try {
                                $("#duplicateCheckForm").dialog("destroy");
                            } catch (e) {

                            }



                            //   $("#duplicateDialog").html("<div id='duplicateGrid'></div>");
                            //  


                        }
                    });
                } else {
                    buttonArray = [];
                    buttonArray.push({
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            //   $("#duplicateGrid").jqxGrid("destroy");
//                                $(this).html("");
                            try {
                                $("#duplicateCheckForm").dialog("close");
                            } catch (e) {

                            }
                            try {
                                $("#duplicateCheckForm").dialog("destroy");
                            } catch (e) {

                            }
                            // $("#duplicateDialog").html("<div id='duplicateGrid'></div>");
//                                    $("")
                            //onSubmit(controlInd, returnReason, success_msg, "");
                        }
                    });
                }

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
                showDuplicatesGrid(basicData, gridResultObj, 0, pageSize, 30, buttonArray, matchedClassFlag);

//                $("#duplicateCheckForm").dialog({resizable: false,
//                    title: (labelObject['Duplicates'] != null ? labelObject['Duplicates'] : 'Duplicates'),
//                    modal: true,
//                    height: 'auto',
//                    // commented by Ajay minHeight: 'auto',
//                    maxHeight: 550,
//                    width: 1150,
//                    fluid: true,
////                    draggable: false,
////                    resizable: false,
//                    buttons: buttonArray,
//                    open: function () {
//                        $("#matrixGridDivId").show();
//                         $("#my-button-id-yes").hide();
//                        $("#my-button-id-no").hide(); 
//                        $("#my-button-id-ok").hide(); 
//                        $("#matrixGridId").html("");
//
//
//                        showDuplicatesGrid(basicData, gridResultObj, 0, pageSize, 30);
//                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
////                        $(".visionHeaderMain").css("z-index", "999");
////                        $(".visionFooterMain").css("z-index", "999");
//                        $(this).closest(".ui-dialog").addClass("duplicateCheckFormPopup");
//                    },
//                    beforeClose: function (event, ui)
//                    {
////                        $("#duplicateCheckForm").dialog("close");
//                        try {
//                            $("#duplicateCheckForm").dialog("destroy");
//                        } catch (e) {
//
//                        }
//                        try {
//                            $("#duplicateCheckForm").remove();
//                        } catch (e) {
//
//                        }
//                        $(".visionHeaderMain").css("z-index", "99999");
//                        $(".visionFooterMain").css("z-index", "99999");
//                    }
//                });
            }
        },
        error: function (e)
        {
            sessionTimeout(e);
        }

    });
}

function SaveorUpdate(messageFlag, controlType, type) {
    if (messageFlag) {
        showLoader();
    }
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
        try {
            $(".visionRegisterMaterialCreation :input").each(function () {

                try {
                    var textid = $(this).attr("id");
                    var type = $(this).attr("type");
                    var textval = $(this).val();
                    delete panalData [textid];
                    panalData[textid] = textval;
                } catch (e) {

                }
            });
        } catch (e) {

        }
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
                data: {'jsonData': jsonString,
                    'baskettype': baskettype,
                    'panelId': panelId,
                    'formId': $('#objectid').val(),
                    'controlType': controlType
                },
                complete: function (result) {
                    if (messageFlag) {
                        stopLoader();
                    }

                },
                success: function (result) {
                    alert(result);

                    if (messageFlag) {
                        stopLoader();
                        console.log("FIRST:::result::" + result);
                        var res = "";
                        var qstr = {};
                        var jsonData = {};
                        var jsonObj = JSON.parse(result);

                        result = jsonObj.Message;
                        var flag = jsonObj.messageFlag;
                        var dialogSplitMessage = dialogSplitIconText(result, flag);
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
//                                                    stripValueObj.value = encodeURIComponent(stripObj['value']);
//                                                    stripValueObj.value = encodeURIComponent(stripObj['value']);
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
                        dialogSplitMessage = dialogSplitIconText(result, "SV");
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
                                        stopLoader();
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                        if (flag)
                                                // if (result.lastIndexOf("Successfully") > -1)
                                                {
                                                    $("#accordion").accordion({'active': 'none'});
                                                    var paramsData = {};
                                                    var urlString = $('#urlString').val();
                                                    if (urlString == "clusterFormData" && urlString != null) {
                                                        if (baskettype1 != 'New Registrations') {
                                                            paramsData = {
                                                                items: JSON.stringify(jsonData)
                                                            }
                                                            navigateToRefreshForm(jsonData);
//                                                            dataOnPopup(paramsData);
                                                        } else {
                                                            var regExp = /^MM|^SM/g;
                                                            var initTabOpenFlag = $("#rolehid").val().match(regExp);

                                                            if (initTabOpenFlag != null && initTabOpenFlag.length > 0) {

                                                                // GenerateInstantDescription(true);
//                                                                var initTabId = $("#accordion h3:first").attr("onclick");
//                                                                if (initTabId != null) {
//                                                                    initTabId = initTabId.replace(/\s/g, "");
//                                                                    initTabId = initTabId.replace("javascript:fetchTabData('", '');
//                                                                    initTabId = initTabId.replace("'fetchTabData('", '');
//                                                                    initTabId = initTabId.replace("')", '');
//                                                                    fetchTabData(initTabId);
//                                                                    $("#accordion").accordion({'active': 0});
//                                                                }


                                                            } else {

//                                                    var icons = $("#accordion").accordion("option", "icons");
//
//                                                    $('.ui-accordion-header')
//                                                            .removeClass('ui-accordion-header-active ui-state-active ui-corner-top')
//                                                            .addClass('ui-corner-all').attr({
//                                                        'aria-selected': 'false',
//                                                        'tabindex': '-1'
//                                                    });
//                                                    $('.ui-accordion-header-icon')
//                                                            .removeClass(icons.headerSelected).addClass(icons.header);
//                                                    $('.ui-accordion-content')
//                                                            .removeClass('ui-accordion-content-active')
//                                                            .attr({
//                                                                'aria-expanded': 'false',
//                                                                'aria-hidden': 'true'
//                                                            }).hide();

                                                            }

                                                        }
                                                    } else {
                                                        if (baskettype1 != 'New Registrations') {

                                                            // var urlString= encodeURIComponent(qstr);
//                                                        window.location.href = "formData?items=" + JSON.stringify(jsonData);
                                                            $("#items").val(JSON.stringify(jsonData));
                                                            //  $("#submitForm").attr("action", "formData");
                                                            formdata(jsonData);
                                                        } else {
                                                            var regExp = /^MM|^SM/g;
                                                            var initTabOpenFlag = $("#rolehid").val().match(regExp);

                                                            if (initTabOpenFlag != null && initTabOpenFlag.length > 0) {

                                                                // GenerateInstantDescription(true);
//                                                                var initTabId = $("#accordion h3:first").attr("onclick");
//                                                                if (initTabId != null) {
//                                                                    initTabId = initTabId.replace(/\s/g, "");
//                                                                    initTabId = initTabId.replace("javascript:fetchTabData('", '');
//                                                                    initTabId = initTabId.replace("'fetchTabData('", '');
//                                                                    initTabId = initTabId.replace("')", '');
//                                                                    fetchTabData(initTabId);
//                                                                    $("#accordion").accordion({'active': 0});
//                                                                }


                                                            } else {

//                                                    var icons = $("#accordion").accordion("option", "icons");
//
//                                                    $('.ui-accordion-header')
//                                                            .removeClass('ui-accordion-header-active ui-state-active ui-corner-top')
//                                                            .addClass('ui-corner-all').attr({
//                                                        'aria-selected': 'false',
//                                                        'tabindex': '-1'
//                                                    });
//                                                    $('.ui-accordion-header-icon')
//                                                            .removeClass(icons.headerSelected).addClass(icons.header);
//                                                    $('.ui-accordion-content')
//                                                            .removeClass('ui-accordion-content-active')
//                                                            .attr({
//                                                                'aria-expanded': 'false',
//                                                                'aria-hidden': 'true'
//                                                            }).hide();

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
                                                            // console.log("old data::After Updating:" + JSON.stringify(panaloldData));
                                                        });

                                                    }

                                                }

                                    }
                                }],
                            open: function () {
                                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                                 //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                $(".visionHeaderMain").css("z-index", "999");
                                $(".visionFooterMain").css("z-index", "999");
                                stopLoader();
                            },
                            beforeClose: function (event, ui)
                            {
                                $(".visionHeaderMain").css("z-index", "99999");
                                $(".visionFooterMain").css("z-index", "99999");
                                stopLoader();
//                                    location.reload();

                            }
                        });



                    } else {

                        saveResult = true;
                    }

//                        var regExp = /^MM|^SM/g;
//                        var initTabOpenFlag = $("#rolehid").val().match(regExp);
//                        if (initTabOpenFlag != null && initTabOpenFlag.length > 0) {
//                            var resultObj = {};
//                            try {
//                                resultObj = JSON.parse(result);
//                            } catch (e) {
//                            }
//
//                            var resultMessage = resultObj['Message'];
//                            if (resultMessage != null && resultMessage.indexOf("No Changes to Save") == -1) {
//                                // GenerateInstantDescription(true);
//                                stopLoader();
//                            }
//
//                        }
                    saveResult = true;
                },
                error: function (e) {
                    stopLoader();
                    sessionTimeout(e);
                    //foreignVendorResult = "Error occured while updating foreign Vendors data.";
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
function changeRequest(jsonString, reqType, success_msg) {
    //   alert("reqType:::"+reqType);
    //   alert("jsonString:::"+jsonString);
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    console.log("panaloldData::::" + jsonString);
    if (jsonString != null) {
        $.ajax({
            type: "POST",
            traditional: true,
            dataType: 'html',
            url: reqType,
            cache: false,
            data: {'basicData': jsonString},
            success: function (response) {
                stopLoader();
                var jsonData = {};
                var jsonObj = JSON.parse(response);
                response = jsonObj.Message;
                jsonData = jsonObj.ssfromobject;
                var flag = jsonObj.messageFlag;
                var showOpenDocsinAILensFlag = jsonObj['showOpenDocsinAILensFlag'];
                var dialogWidth = 300;
                var dialogHeight = jsonObj.openDocsHeight;
                var conformProceedFlag = jsonObj['conformProceedFlag'];
                var remediationFlag = jsonObj['remediationFlag'];

                if (conformProceedFlag) {
                    if (jsonObj.openDocsWidth != null && jsonObj.openDocsWidth != undefined && jsonObj.openDocsWidth > 0) {
                        dialogWidth = jsonObj.openDocsWidth;
                    } else {
                        dialogWidth = 500;
                    }
                } else {
                    if (jsonObj.openDocsWidth != null && jsonObj.openDocsWidth != undefined && jsonObj.openDocsWidth > 0) {
                        dialogWidth = jsonObj.openDocsWidth;
                    } else {
                        dialogWidth = 300;
                    }
                }

//                     var requestNumber = jsonObj.requestNumber;
                //  alert(response);
                //  alert(flag);

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
//                                stripValueObj.value = encodeURIComponent(stripObj['value']);
                            stripValueObjArray.push(stripValueObj);
                        }

                    }
                    jsonData['stripValue'] = stripValueObjArray;
                }

                var baskettype1 = $('#baskettypehid1').val();
                var dialogSplitMessage = "";
                //  alert(success_msg);
                dialogSplitMessage = dialogSplitIconText((labelObject[response] != null ? labelObject[response] : response), flag);
//                    if (flag)
//                    {
//                        if (success_msg != null && success_msg != "")
//                        {
//                            dialogSplitMessage = dialogSplitIconText((labelObject[success_msg] != null ? labelObject[success_msg] : success_msg), flag);
//                        } else
//                        {
//                            dialogSplitMessage = dialogSplitIconText((labelObject[response] != null ? labelObject[response] : response), flag);
//                        }
//                        
//                        
//                    } else
//                    {
//                        dialogSplitMessage = dialogSplitIconText((labelObject[response] != null ? labelObject[response] : response), flag);
//                    }
                if (response != null && response != '' && response.indexOf("<table") > -1) {
                    $("#dialog").html(response);
                } else {
                    $("#dialog").html(dialogSplitMessage);
                }
                if (remediationFlag) {
                    if (showOpenDocsinAILensFlag && response != null && response != '' && response.indexOf("<table") > -1) {
                        openAINavigation();
                        aiLensIpactAnalysisAgent(showOpenDocsinAILensFlag, jsonObj['AIAgent']);
//                     defaultAITypingBasedOnResponse(response, 'Open Docs Details', "", "");   
                    }
                    $("#dialog").html("");
                    try {
                        fetchTabData('PM_IMPACTED_OBJECTS');
                    } catch (e) {

                    }


                } else if (conformProceedFlag) {
                    if (showOpenDocsinAILensFlag && response != null && response != '' && response.indexOf("<table") > -1) {
                        openAINavigation();
                        defaultAITypingBasedOnResponse(response, 'Open Docs Details', "", "");
                    }
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                        modal: true,
                        height: 'auto',
                        minHeight: 'auto',
//                        minWidth: 500,                          
                        minWidth: dialogWidth,
                        maxWidth: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Proceed'] != null ? labelObject['Proceed'] : 'Proceed'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                    openDocsProceedChangeRequest(jsonString, reqType);
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

                } else {
                    if (showOpenDocsinAILensFlag && response != null && response != '' && response.indexOf("<table") > -1) {
                        openAINavigation();
                        defaultAITypingBasedOnResponse(response, 'Open Docs Details', "", "");
                    }
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                        modal: true,
                        height: 'auto',
//                        width:dialogWidth
                        minHeight: 'auto',
                        minWidth: dialogWidth,
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
//                                                if (baskettype1 != 'New Registrations') {
                                                $("#items").val("");
                                                $("#items").val(JSON.stringify(jsonData));
                                                // $("#submitForm").attr("action", "formData");
                                                formdata(jsonData, jsonObj.SOURCE);
//                                                window.location.href = "formData?items=" + JSON.stringify(jsonData);
//                                                }


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
                stopLoader();
                sessionTimeout(e);
            }
        });
    }
}
function processEnrichment(jsonString) {

    $.ajax({
        url: "getEnricmentRequestors",
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
//                $("#dialog").html(dialogSplitMessage);
//                $("#enrichRequestors").chosen({allow_single_deselect: true});
            $("#dialog").html(response);
            $("#enrichRequestors").jqxComboBox({searchMode: 'containsignorecase', multiSelect: false, width: 280,
                autoComplete: true,
                theme: 'energyblue',
                openDelay: 1,
                closeDelay: 1,
                enableSelection: true,
                height: 25});
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                height: 'auto',
                // commented by Ajay minHeight: 'auto',
                minWidth: 450,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            // call change
                            var success_msg = $("#Enrich").attr('data-success-conf');
//                                var enrichRequestors = $("#enrichRequestors").val();
                            var enrichRequestorsItem = $("#enrichRequestors").jqxComboBox('getSelectedItem');
                            if (enrichRequestorsItem != null) {
                                var enrichRequestors = enrichRequestorsItem['value'];
                                var basicData = JSON.parse(jsonString);
                                basicData['NEW_CUSTOM_COLUMN5'] = enrichRequestors;
                                jsonString = JSON.stringify(basicData);
                                changeRequest(jsonString, 'changeRequest', success_msg);
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }


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
}

function processOpenDocs(jsonString) {
    showLoader();
    $.ajax({
        url: "checkOpenDoc",
        type: "post",
        dataType: 'html',
        cache: false,
        data:
                {
                    basicData: jsonString
                },
        traditional: true,
        success: function (response) {
            stopLoader();
            console.log("The result is:::" + response);
            var jsonObj = JSON.parse(response);
            var message = jsonObj.Message;
            var flag = jsonObj.messageFlag;
            var dialogSplitMessage = dialogSplitIconText(message, flag);
            $("#dialog").html(dialogSplitMessage);
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                height: 'auto',
                // commented by Ajay minHeight: 'auto',
                minWidth: 350,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {

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
}
function processOpenDocsinForm(jsonString) {

    $.ajax({
        url: "formCheckOpenDoc",
        type: "post",
        dataType: 'html',
        cache: false,
        data:
                {
                    basicData: jsonString
                },

        traditional: true,
        success: function (response) {
            if (response != null && response != '') {
                console.log("The result is:::" + response);
                var jsonObj = JSON.parse(response);
                var message = jsonObj.Message;
                var flag = jsonObj.messageFlag;
                var dialogSplitMessage = dialogSplitIconText(message, flag);
                $("#dialog").html(dialogSplitMessage);
                $("#dialog").dialog({resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    height: 'auto',
                    // commented by Ajay minHeight: 'auto',
                    minWidth: 350,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {

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
            }
        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }

    });
}
function instanceDropDown(basicData) {
    console.log("instanceDropDown");
    var new_locatecode = "";
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $.ajax({
        type: "POST",
        traditional: true,
        dataType: 'html',
        url: "instanceData",
        cache: false,
        success: function (response) {
            alert("instanceDropDown:::" + response);
            if (response != null && response != '') {
                $("#result").html("<div class='visionFormExtendDropdown'><div class='visionFormExtendTitle'>Instance:" +
                        "</div><div id='instance_div' class='visionFormExtendInfo'><select id='selectedInstance' >" + response +
                        "</select></div></div>");
                // Define the Dialog and its properties.
                $("#result").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Instance'] != null ? labelObject['Instance'] : 'Instance'),
                    height: 'auto',
//                        // commented by Ajay minHeight: 0,
//                        minWidth: 300,
                    width: 300,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {

                                var selectedInstance = $('#selectedInstance').val();
                                //  alert("selectedInstance::::" + selectedInstance);


                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");

                                if (selectedInstance != null && selectedInstance != '') {
                                    delete basicData['NEW_PLANT'];
                                    delete basicData['NEW_INSTANCE'];
                                    basicData['NEW_PLANT'] = selectedInstance;
                                    basicData['NEW_INSTANCE'] = selectedInstance;
                                    var jsonString = JSON.stringify(basicData);

                                    console.log("jsonString::::" + JSON.stringify(jsonString));
                                    extensions(jsonString);
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

function instanceDropDownMM(basicData, success_msg) {
    var new_locatecode = "";
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $.ajax({
        type: "POST",
        traditional: true,
        dataType: 'html',
        url: "instanceDataMgr",
        cache: false,
        data:
                {
                    jsonString: JSON.stringify(basicData)
                },
        success: function (response) {

            var data = JSON.parse(response);
            console.log("response::::4061:::;" + data);
//alert(response);
            if (response != null && response != '') {
                var descriptionColumnFlag = data['descriptionColumnFlag'];
                var instanceDropDownDiv = "<div class='visionFormExtendDropdown'><div class='visionFormExtendTitle'>"
                        + (labelObject['Instance : Plant'] != null ? labelObject['Instance : Plant'] : 'Instance : Plant')
                        + "</div><div id='instance_div' class='visionFormExtendInfo'> " + data['plantdata'] + "</div></div>";
//                    var instanceDropDownDiv = "<div class='visionFormExtendDropdown'><div class='visionFormExtendTitle'>"
//                            + (labelObject['Instance : Plant'] != null ? labelObject['Instance : Plant'] : 'Instance : Plant')
//                            + "</div><div id='instance_div' class='visionFormExtendInfo'><select id='selectedInstance' multiple>" +
//                            "" + response +
//                            "</select></div></div>";
                $("#dialog1").html(instanceDropDownDiv);
//                    $("#selectedInstance").select2({
//                        data: response.plantdata
//                    });
//                    
                // Define the Dialog and its properties.

                $("#selectedInstance").chosen({allow_single_deselect: true});
                var width = 300;
                if (descriptionColumnFlag != null && descriptionColumnFlag != "" && descriptionColumnFlag != undefined) {
                    width = 500;
                }
                $("#dialog1").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Instance : Plant'] != null ? labelObject['Instance : Plant'] : 'Instance : Plant'),
//                        // commented by Ajay minHeight: 0,
//                        minWidth: 300,
                    width: width,
                    maxWidth: 'auto',
                    height: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {

                                var selectedInstance = $('#selectedInstance').val();
                                console.log("selectedInstance::::" + selectedInstance);
                                var multipleExtendFlag = $('#ssMultipleExtensionFlag').val();
                                console.log("multipleExtendFlag::::" + multipleExtendFlag);
                                if (multipleExtendFlag != '' && multipleExtendFlag == 'Y')
                                {

                                } else
                                {
                                    selectedInstance = selectedInstance.split(':');
                                }

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
                                    extensions(jsonString, success_msg, selectedInstance);
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

function extensions(jsonString, success_msg, selectedInstance) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    console.log("extensions:::" + success_msg);
    if (jsonString != null) {
        $.ajax({
            type: "POST",
            traditional: true,
            dataType: 'html',
            url: "extension",
            cache: false,
            data: {'basicData': jsonString,
                'selectedInstance': (selectedInstance != null ? selectedInstance : "")

            },
            success: function (response) {

                var jsonData = {};
                var jsonObj = JSON.parse(response);
                if (jsonObj['Message'] != null && jsonObj['Message'] != '') {
                    success_msg = jsonObj['Message'];
                }
                // response = jsonObj.Message;
                var flag = jsonObj.messageFlag;
                console.log("message:::::" + response);
                console.log("message:::::" + flag);
                ///////alert("JSON.parse(response)::::"+jsonObj.Message);
                jsonData = jsonObj.ssfromobject;
                if (jsonData != null) {
                    var stripValue = jsonData['stripValue'];
                    console.log("stripValue:::" + stripValue);
                    if (stripValue != null && stripValue.length != 0) {
                        var stripValueObjArray = [];
                        for (var i = 0; i < stripValue.length; i++) {
                            var stripValueObj = {};
                            if (stripValue[i] != null && stripValue[i] != '' && typeof stripValue[i] != 'undefined') {
                                // if (stripValue[i].indexOf(",") > -1) {
                                var stripObj = stripValue[i];
                                stripValueObj.columnName = stripObj['columnName'];

//                                    stripValueObj.value = encodeURIComponent(stripObj['value']);
                                stripValueObj.value = stripObj['value'];
//                                    stripValueObj.value = encodeURIComponent(stripObj['value']);
                                stripValueObjArray.push(stripValueObj);
                                //  }
                            }

                        }


                    }

                    jsonData['stripValue'] = stripValueObjArray;
                    //stripValue
                }

                // ////alert("JSON.stringify(jsonData))::::"+JSON.stringify(jsonData));
                var baskettype1 = $('#baskettypehid1').val();
                var dialogSplitMessage = "";
//                    if (success_msg != null && success_msg != "")
                if (!flag)
                {
                    dialogSplitMessage = dialogSplitIconText((labelObject[success_msg] != null ? labelObject[success_msg] : success_msg), flag);
                } else
                {
                    dialogSplitMessage = dialogSplitIconText((labelObject[success_msg] != null ? labelObject[success_msg] : success_msg), flag);
                }
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
                                        //   if (response.lastIndexOf("Successfully") > -1 || response.lastIndexOf("successfully") > -1)
                                        {

                                            if (baskettype1 != 'New Registrations') {

                                                // var urlString= encodeURIComponent(qstr);
//                                                window.location.href = "formData?items=" + JSON.stringify(jsonData);
                                                $("#items").val(JSON.stringify(jsonData));
                                                //  $("#submitForm").attr("action", "formData");
                                                formdata(jsonData);
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
            error: function (e) {
                //  ////////alert(e.message)
                sessionTimeout(e);
            }
        });
    }
}
function onSubmitIncl(controlInd, returnReason, success_msg, dataReturnReason) {
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

        // alert(vmDuplOnSubmit);

        if (true) {
//            if (vmDuplOnSubmit == 'Y') {

//alert(vmDuplOnSubmit);
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
                var dataObj = JSON.parse(result);

                if (!dataObj['flag']) {
                    onSubmit(controlInd, returnReason, success_msg, "");
                } else {
                    var heightGrid = "250px";
                    if (dataObj['count'] >= 5)
                    {
                        heightGrid = "250px";
                    } else
                    {
                        heightGrid = "500px";
                    }

                    $("#dialog2").html("");
                    $("#dialog2").html(dataObj['message']);
                    $("#dialog2").dialog({resizable: false,
                        title: (labelObject['Duplicates Found'] != null ? labelObject['Duplicates Found'] : 'Duplicates Found'),
                        modal: true,
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
                                    if ((dataReturnReason != null && dataReturnReason != '') && dataReturnReason == '7' || dataReturnReason == '1') {
                                        try {
                                            if (controlInd != null && controlInd != '') {
                                                controlInd = controlInd.toUpperCase();
                                            }

                                        } catch (e) {

                                        }
                                        console.log(controlInd + ":::1531:::::::::::::::");

                                        var msgTitle = "Duplicate comment";
                                        var response = "";

                                        msgTitle = (labelObject[msgTitle] != null ? labelObject[msgTitle] : msgTitle);
                                        var rejectType = 0;
                                        try {
                                            rejectType = $("#rejectType").val();
                                        } catch (e) {
                                            rejectType = 0;
                                        }



                                        if (rejectType == 0)
                                        {
                                            response = "";

                                            try {
                                                $("#textReason").html("");
                                            } catch (et) {
                                            }

                                            response += "<div id='textReason'>";
                                            response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                                            response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";


                                            $("#dialog").html(response);




                                        } else if (rejectType == 1)
                                        {
                                            response = "";
                                            try {
                                                $("#reasonDialog").html("");
                                            } catch (et) {
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

                                            if (rejectData != null && rejectData != '' && rejectDataArray != null && rejectDataArray.length > 0) {
                                                response += "<div id='rejectComboBox' class='visionRejectFormComboBox'></div>";
                                                response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";

                                                $("#dialog").html(response);
//                                                var rejectDataArray = JSON.parse(rejectData);
                                                $("#rejectComboBox").jqxComboBox({source: rejectDataArray, searchMode: 'contains', multiSelect: true, width: 280, height: 25});
                                            } else {
                                                try {
                                                    $("#textReason").html("");
                                                } catch (et) {
                                                }

                                                response += "<div id='textReason'>";
                                                response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                                                response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";


                                                $("#dialog2").html(response);

                                            }
                                        } else if (rejectType == 4)
                                        {
                                            response = "";
                                            try {
                                                $("#reasonDialog").html("");
                                            } catch (et) {
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


                                            try {
                                                $("#textReason").html("");
                                            } catch (et) {
                                            }

                                            if (rejectData != null && rejectData != '' && rejectDataArray != null && rejectDataArray.length > 0) {
                                                response += "<div id='rejectComboBox'  class='visionRejectFormComboBox'></div>";
                                                response += "<div id='textReason'>";
                                                response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                                                response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";

                                                $("#dialog").html(response);
//                                                var rejectDataArray = JSON.parse(rejectData);
                                                $("#rejectComboBox").jqxComboBox({source: rejectDataArray,
                                                    searchMode: 'containsignorecase',
                                                    multiSelect: true,
                                                    autoComplete: true,
                                                    theme: 'energyblue',
                                                    openDelay: 1,
                                                    closeDelay: 1,
                                                    enableSelection: true,
                                                    width: 280, height: 25});
                                            } else {
                                                response += "<div id='textReason'>";
                                                response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                                                response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
                                                $("#dialog2").html(response);
                                            }


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
                                                            var textBoxData = '';
                                                            try {
                                                                textBoxData = $("#reasonId").val();
                                                            } catch (et) {
                                                                textBoxData = '';
                                                            }
                                                            retReasonText = textBoxData;
                                                        } else if (rejectType == 1)
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
                                                                    var returnReasonData = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                                                    retReasonText = returnReasonData;
                                                                }
                                                            } else {

                                                                var textBoxData = '';
                                                                try {
                                                                    textBoxData = $("#reasonId").val();
                                                                } catch (et) {
                                                                    textBoxData = '';
                                                                }
                                                                retReasonText = textBoxData;

                                                            }

                                                        } else if (rejectType == 4)
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

                                                                    var returnReasonData = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                                                    retReasonText = returnReasonData;
                                                                    var textBoxData = '';
                                                                    try {
                                                                        textBoxData = $("#reasonId").val();
                                                                    } catch (et) {
                                                                        textBoxData = '';
                                                                    }
                                                                    if (returnReasonData != null && returnReasonData != '')
                                                                    {
                                                                        retReasonText = returnReasonData + ", " + textBoxData;
                                                                    } else {
                                                                        retReasonText = textBoxData;
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
                                                                $(this).html("");
                                                                $(this).dialog("close");
                                                                $(this).dialog("destroy");
                                                                onSubmit(controlInd, returnReasonData, success_msg);
                                                            } else
                                                            {
                                                                $("#dailog_error_id").show();
                                                            }
                                                        }

                                                        showLoader();
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

                                    } else {
                                        $("#wait").css("display", "block");
                                        //onSubmit(controlInd, '', success_msg, "");
                                        onSubmit(controlInd, returnReason, success_msg);
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
            $.ajax(req);

        } else {


            onSubmit(controlInd, returnReason, success_msg, "");
        }




    } else if ((roleStartsWith == 'MM' || roleStartsWith == 'SM' || roleStartsWith == 'PM')) {
//        else if ((roleStartsWith == 'MM' || roleStartsWith == 'SM') &&
//                (controlInd == 'SUBMIT' || controlInd == 'APPROVE' || controlInd == 'RE-SUBMIT' || controlInd.lastIndexOf("TRANSFER") > -1 || controlInd.lastIndexOf("TRANSFER") > -1)) {

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
                var duplicateObj = JSON.parse(result);
                //   var duplicateArray = duplicateObj['duplicateArray'];
                if (duplicateObj['messageFlag']) {
                    try {
                        delete basicData['typ3Matched'];
                    } catch (e) {
                    }
                    basicData['typ3Matched'] = duplicateObj['typ3Matched'];
                    var matchedClassFlag = duplicateObj['DuplicateClassFlag'];
                    showOnSubmitDuplicates(basicData, ssDuplCheckEnableFlag, controlInd, returnReason, success_msg, dataReturnReason, matchedClassFlag);
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

function registerClickFunction() {
    $("#Register").click(function () {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        $("#Register").prop("disabled", false);
        var errorCount = 0;


        if (errorCount == 0) {

            //  ////alert("CALL AJAX");
            var basicIds = [];
            var basicData = {};
            var roleId = $("#rolehid").val();
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
                if ((roleStartsWith == "VM" || roleStartsWith == "CM") && duplCheck != null && duplCheck != '' && duplCheck == 'Y') {
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
                                                    var rejectType = 0;
                                                    try {
                                                        rejectType = $("#rejectType").val();
                                                    } catch (e) {
                                                        rejectType = 0;
                                                    }



                                                    if (rejectType == 0)
                                                    {
                                                        response = "";

                                                        try {
                                                            $("#textReason").html("");
                                                        } catch (et) {
                                                        }

                                                        response += "<div id='textReason'>";
                                                        response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                                                        response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";


                                                        $("#dialog").html(response);




                                                    } else if (rejectType == 1)
                                                    {
                                                        response = "";
                                                        try {
                                                            $("#reasonDialog").html("");
                                                        } catch (et) {
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

                                                        if (rejectData != null && rejectData != '' && rejectDataArray != null && rejectDataArray.length > 0) {
                                                            response += "<div id='rejectComboBox' class='visionRejectFormComboBox'></div>";
                                                            response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";

                                                            $("#dialog").html(response);
//                                                            var rejectDataArray = JSON.parse(rejectData);
                                                            $("#rejectComboBox").jqxComboBox({source: rejectDataArray, searchMode: 'contains', multiSelect: true, width: 280, height: 25});
                                                        } else {
                                                            try {
                                                                $("#textReason").html("");
                                                            } catch (et) {
                                                            }

                                                            response += "<div id='textReason'>";
                                                            response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                                                            response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";


                                                            $("#dialog2").html(response);

                                                        }
                                                    } else if (rejectType == 4)
                                                    {
                                                        response = "";
                                                        try {
                                                            $("#reasonDialog").html("");
                                                        } catch (et) {
                                                        }
                                                        var rejectData = '';
                                                        var rejectDataArray = [];
                                                        try {
                                                            rejectData = $("#rejectData").val();
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


                                                        try {
                                                            $("#textReason").html("");
                                                        } catch (et) {
                                                        }

                                                        if (rejectData != null && rejectData != '' && rejectDataArray != null && rejectDataArray.length > 0) {
                                                            response += "<div id='rejectComboBox'  class='visionRejectFormComboBox'></div>";
                                                            response += "<div id='textReason'>";
                                                            response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                                                            response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";

                                                            $("#dialog").html(response);
//                                                            var rejectDataArray = JSON.parse(rejectData);
                                                            $("#rejectComboBox").jqxComboBox({source: rejectDataArray,
                                                                searchMode: 'containsignorecase',
                                                                multiSelect: true,
                                                                autoComplete: true,
                                                                theme: 'energyblue',
                                                                openDelay: 1,
                                                                closeDelay: 1,
                                                                enableSelection: true,
                                                                width: 280, height: 25});
                                                        } else {
                                                            response += "<div id='textReason'>";
                                                            response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                                                            response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
                                                            $("#dialog2").html(response);
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
                                                                        var textBoxData = '';
                                                                        retReasonText = textBoxData;
                                                                        try {
                                                                            textBoxData = $("#reasonId").val();
                                                                        } catch (et) {
                                                                            textBoxData = '';
                                                                        }
                                                                    } else if (rejectType == 1)
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
                                                                                var comboListBoxdata = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                                                                //retReasonText = returnReason;
                                                                                retReasonText = comboListBoxdata;
                                                                            }
                                                                        } else {

                                                                            var textBoxData = '';
                                                                            try {
                                                                                textBoxData = $("#reasonId").val();
                                                                            } catch (et) {
                                                                                textBoxData = '';
                                                                            }

                                                                            //retReasonText = textBoxData;
                                                                            retReasonText = textBoxData;

                                                                        }
                                                                    } else if (rejectType == 4)
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

                                                                                var comboListBoxdata = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                                                                retReasonText = comboListBoxdata;
                                                                                var textBoxData = '';
                                                                                try {
                                                                                    textBoxData = $("#reasonId").val();
                                                                                } catch (et) {
                                                                                    textBoxData = '';
                                                                                }
                                                                                if (textBoxData != null && textBoxData != '')
                                                                                {
                                                                                    retReasonText = comboListBoxdata + ", " + textBoxData;
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
                                                                                retReasonText = textBoxData;
//                                                                    retReasonText = comboListBoxdata;//nirmala
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
                            $("#Register").prop("disabled", true);
                        };

                        $.ajax(req);

                    } else {
                        registerCheckValidation(basicData);
                    }

                } else
                {
                    registerCheckValidation(basicData);
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

function returnReasonFun(controlind)
{
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $("#dialog").html((labelObject['Reason'] != null ? labelObject['Reason'] : 'Reason') + ": <BR><BR><textarea id='returnreason' value='' class='visionDeleteReason'/><br><div id='dailog_error_id' style='color:red;display:none;'>" + (labelObject['Please Enter Reason'] != null ? labelObject['Please Enter Reason'] : 'Please Enter Reason') + "</div>");
    $("#dialog").dialog({resizable: false,
        title: (labelObject['Comments'] != null ? labelObject['Comments'] : 'Comments'),
        modal: true,
        height: 230,
        minWidth: 300,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    var returnReason = $("#returnreason").val();
                    console.log("returnReason:::" + returnReason);
                    returnReason = returnReason.trim();
                    if (returnReason != '' && returnReason != null) {
                        $("#dailog_error_id").hide();

                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");

                        submitReg(controlind, returnReason);
                    } else
                    {
                        $("#dailog_error_id").show();
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
function submitReg(controlind, returnreason) {

    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var moduleCode = $("#modulehid").val();
    console.log("moduleCode:::" + moduleCode);
    var url = "";
    var jsonString = "";
    if (moduleCode != null && moduleCode != '' && moduleCode.indexOf("Material") > -1) {
        url = "regSubmit";
        var baskettype = $('#baskettypehid').val();
        //  ////alert("(::::"+baskettype);
        var data = {};
        var descriptor = $("#descriptor_Text").val();
        var conceptId = $("#conceptId").val();
        var erp_Text = $("#erp_Text").val();
        var materialType_Text = $("#materialType_Text").val();
        var materialGrp_Text = $("#materialGrp_Text").val();
        var uom_Text = $("#uom_Text").val();
        var regDate_Tex = $("#regDate_Tex").val();
        var originator_Text = $("#originator_Text").val();
        var recordNo_Text = $("#recordNo_Text").val();
        var status = $("#statushid").val();
        var objectid = $("#objecthid").val();
        var comment_Text = $("#comment_Text").val();
        var businessUnit = $("#plant_Text").val();
        data.descriptor = descriptor;
        data.conceptId = conceptId;
        data.erp = erp_Text;
        data.materialType = materialType_Text;
        data.materialGroup = materialGrp_Text;
        data.uom = uom_Text;
        data.regDate = regDate_Tex;
        data.originator = originator_Text;
        data.recordNo = recordNo_Text;
        data.baskettype = baskettype;
        data.status = status;
        data.objectid = objectid;
        data.controlType = controlind;
        data.newerpComment = returnreason;
        data.olderpComment = comment_Text;
        data.businessUnit = businessUnit;
        data.moduleCode = moduleCode;

        jsonString = JSON.stringify(data);

    } else if (moduleCode != null && moduleCode != '' && moduleCode.indexOf("Vendor") > -1) {

        url = "vmSubmit";
        var baskettype = $('#baskettypehid').val();
        //  ////alert("Save::::"+baskettype);
        var data = {};
        var vendorName = $("#vendorName").val();
        var accountGroup = $("#accountGroup").val();
        var compCode = $("#compCode").val();
        var purchOrg = $("#purchOrg").val();
        var regdate = $("#regdate").val();
        var originator = $("#originator").val();
        var vendorCode = $("#vendorCode").val();
        var status = $("#statushid").val();
        var objectid = $("#objecthid").val();
        var commentText = $("#commentText").val();
        var locatcode = $("#locatcode").val();

        data.originator = originator;
        data.regdate = regdate;
        data.vendorName = vendorName;
        data.vendorCode = vendorCode;
        data.accountGroup = accountGroup;
        data.compCode = compCode;
        data.purchOrg = purchOrg;
        data.baskettype = baskettype;
        data.status = status;
        data.objectid = objectid;
        data.controlType = controlind;
        data.newerpComment = returnreason;
        data.olderpComment = commentText;
        data.locatecode = locatcode;
        data.moduleCode = moduleCode;

        jsonString = JSON.stringify(data);
        console.log("moduleCode:::" + moduleCode);
        console.log("jsonString:::" + jsonString);

    } else if (moduleCode != null && moduleCode != '' && moduleCode.indexOf("Customer") > -1) {


    } else if (moduleCode != null && moduleCode != '' && moduleCode.indexOf("Service") > -1) {

    }



//         if (baskettype.indexOf("Registrations") > -1)
//            {

    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        url: url,
        cache: false,
        data: {'jsonData': jsonString

        },
        success: function (result) {
            console.log("FIRST:::result::" + result);
            var res = "";
            var qstr = "";
            var jsonObj = JSON.parse(result);

            result = jsonObj.Message
            qstr = jsonObj.url;

            $("#dialog").html(result);
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
                            if (result.lastIndexOf("Successfully") > -1)
                            {
                                window.location.href = qstr;

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


//                                oldJSON = newJSON;
            //foreignVendorResult = "Foreign Vendors Data Update Successfull";
        },
        error: function (e) {
            sessionTimeout(e);
            //foreignVendorResult = "Error occured while updating foreign Vendors data.";
        }
    });


//            }

}
function Duplicate_Check() {

    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var req = {};
    req.url = 'DuplicateCheck';
    req.method = 'post';
    req.async = true;
    req.data = {};
    req.data.recordNo_Text = $("#recordNo_Text").val();

    req.success = function (response) {
        var array = JSON.parse(response);
        if (array.length == 0) {
            $("#dialog").empty();
            var result = 'No Duplicates Found';

            var dialogSplitMessage = dialogSplitIconText((labelObject[result] != null ? labelObject[result] : result), "Y");
            $("#dialog").html(dialogSplitMessage).dialog({resizable: false,
                title: (labelObject['Duplicate Check'] != null ? labelObject['Duplicate Check'] : 'Duplicate Check'),
                fluid: true,
                buttons:
                        [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {

                                    $(this).dialog('close');
                                }

                            }],
                autoOpen: true,
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
            Duplicate_Check_Table(array);

    };
    $.ajax(req);
}

function Duplicate_Check_Table(array) {

    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $("#dddw").empty();
    //$("#dddw").append("<div id='ddGrid'></div>");
    var source =
            {
                localdata: array,
                datafields:
                        [
                            {name: 'record_no', type: 'string'}

                        ],
                datatype: "JSON"
            };
    var adapter = new $.jqx.dataAdapter(source);
    $("<div></div>").jqxGrid(
            {
                width: '150',
                theme: 'energyblue',
                source: adapter,
                filterable: true,
                enabletooltips: true,
                showfilterrow: true,
                height: 360,
                columnsresize: true,
                sortable: true,
                columns: [
                    {text: 'Record No', align: 'center', datafield: 'record_no', width: "120", cellsalign: 'left'}

                ]
            }).appendTo("#dddw");
    //$("#dddw").css("overflow", "hidden");
    $("#dddw").dialog({resizable: false,
        title: (labelObject['Duplicate List'] != null ? labelObject['Duplicate List'] : 'Duplicate List')
        , width: 180
        , modal: true
        , fluid: true
        , open: function () {
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
        , close: function () {
            $(this).empty();
            $(this).dialog('close');
            $(this).dialog('destroy');
        }
    });
    //$("#dddw").dialog({ resizable: false,height: 450,width: 400});

}


function changeRequests() {

    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var baskettype = $('#baskettypehid').val();
    //  ////alert("Save::::"+baskettype);
    var data = {};
    var descriptor = $("#descriptor_Text").val();
    var conceptId = $("#conceptId").val();
    var erp_Text = $("#erp_Text").val();
    var materialType_Text = $("#materialType_Text").val();
    var materialGrp_Text = $("#materialGrp_Text").val();
    var uom_Text = $("#uom_Text").val();
    var regDate_Tex = $("#regDate_Tex").val();
    var originator_Text = $("#originator_Text").val();
    var recordNo_Text = $("#recordNo_Text").val();
    var status = $("#statushid").val();
    var objectid = $("#objecthid").val();
    var comment_Text = $("#comment_Text").val();
    var businessUnit = $("#plant_Text").val();
    data.descriptor = descriptor;
    data.conceptId = conceptId;
    data.erp = erp_Text;
    data.materialType = materialType_Text;
    data.materialGroup = materialGrp_Text;
    data.uom = uom_Text;
    data.regDate = regDate_Tex;
    data.originator = originator_Text;
    data.recordNo = recordNo_Text;
    data.baskettype = baskettype;
    data.status = status;
    data.objectid = objectid;
    data.olderpComment = comment_Text;
    data.businessUnit = businessUnit;

    var jsonString = JSON.stringify(data);

    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        url: "changeReq",
        cache: false,
        data: {'jsonData': jsonString

        },
        success: function (result) {
            console.log("FIRST:::result::" + result);
            var res = "";
            var qstr = "";
            var jsonObj = JSON.parse(result);

            result = jsonObj.Message
            qstr = jsonObj.url;

            $("#dialog").html(result);
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
                            if (result.lastIndexOf("Successfully") > -1)
                            {
                                window.location.href = qstr;

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
        error: function (e) {
            sessionTimeout(e);
        }
    });
}//changeRequests


function  topPannelValidationOld() {

    var moduleCode = $("#modulehid").val();
    console.log(moduleCode);


    if (moduleCode != null && moduleCode != '' && moduleCode.indexOf("Material") > -1) {

        var erp = $("#plant_Text").attr("data-erp");

        var matTypeLable = "";
        var descriptLable = "";
        var matGroupLable = "";
        var result = false;

        if (erp == "SAP" || erp == "sap") {

            matTypeLable = "Material Type";
            descriptLable = "Descriptor";
            matGroupLable = "Material Group";

        } else if (erp == "DYNAMICS" || erp == "dynamics") {

            matTypeLable = "Item Type";
            descriptLable = "Descriptor";
            matGroupLable = "Item Category";


        } else if (erp == "ORACLE" || erp == "oracle") {
            matTypeLable = "Template Id";
            descriptLable = "ICC";
            matGroupLable = "Category Id";

        }

        var descriptor = $("#descriptor_Text").val();

        var instance = $("#plant_Text").val();
        var materialType = $("#materialType_Text").val();
        var materialGrp = $("#materialGrp_Text").val();
        var instance = $("#plant_Text").val();
        var uom = $("#uom_Text").val();



        if (descriptor == "" || descriptor == null) {

            errorMsg("Please Select " + descriptLable);
            // return false;
            result = false;

        } else if (instance == "" || instance == null) {

            errorMsg("Invalied Instance!");
            // return false;
            result = false;
        } else if (materialType == "" || materialType == null) {

            errorMsg("Please Select " + matTypeLable);
            //return false;
            result = false;

        } else if (!validateData("BMtrlType", "id.type", materialType)) {
            validatorDilogue("Please Select Valid " + materialType, "materialType_Text");
            //return false;
            result = false;
        } else if (materialGrp == "" || materialGrp == null) {
            errorMsg("Please Select " + matGroupLable);
            //return false;
            result = false;

        } else if (!validateData("BMtrlGroups", "id.mtrlGroup", materialGrp)) {
            validatorDilogue("Please Select Valid " + matGroupLable, "materialGrp_Text");
            //return false;
            result = false;
        } else if (uom == "" || uom == null) {
            errorMsg("Please Select UOM!");
            //return false;
            result = false;


        } else if (!validateData("OrgnTerminology", "abbreviation", uom)) {
            validatorDilogue("Please Select Valid UoM!", "uom_Text");
            // return false;
            result = false;
        } else {

            result = true;
        }

        return result;

    } else if (moduleCode != null && moduleCode != '' && moduleCode.indexOf("Vendor") > -1) {


        // VENDOR 
    }


}
function  topPannelValidation() {
    var moduleCode = $("#modulehid").val();
    if (moduleCode != null && moduleCode != '' && moduleCode.indexOf("VENDOR") > -1) {
        var errorCount = 0;
//        $("table#" + tableName + "_TABLE :input").each(function () {
        $("table#mat_creation_form_table th :input:not(:hidden)").each(function () {
            var id = $(this).attr('id');
            var mand = $(this).attr("data-mandatory");
            var label = $(this).attr("data-label");
            var regex = $(this).attr("data-regex");
            regex = (regex == "null") ? null : regex.replace(/\\\\/g, "\\");
            mand = (mand === "M") ? "M" : "O";
            var returnBoolean = regexFunction(id, regex, mand, "mat_creation_form_table", label);
//                ////alert(id+"-->"+returnBoolean);
            if (returnBoolean == false) {
                errorCount++;
                return false;
            }
//                ////alert(id+"-->"+errorCount);
        });
//        ////alert(errorCount);
        if (errorCount == 0) {
            return true;
        } else {
            return false;
        }
    } else {
        var erp = "SAP";
        //  var erp = $("#plant_Text").attr("data-erp");

        var matTypeLable = "";
        var descriptLable = "";
        var matGroupLable = "";
        var result = false;

        if (erp == "SAP" || erp == "sap") {

            matTypeLable = "Material Type";
            descriptLable = "Descriptor";
            matGroupLable = "Material Group";

        } else if (erp == "DYNAMICS" || erp == "dynamics") {

            matTypeLable = "Item Type";
            descriptLable = "Descriptor";
            matGroupLable = "Item Category";


        } else if (erp == "ORACLE" || erp == "oracle") {
            matTypeLable = "Template Id";
            descriptLable = "ICC";
            matGroupLable = "Category Id";

        }

        var descriptor = $("#descriptor_Text").val();

        var instance = $("#plant_Text").val();
        var materialType = $("#materialType_Text").val();
        var materialGrp = $("#materialGrp_Text").val();
        var instance = $("#plant_Text").val();
        var uom = $("#uom_Text").val();



        if (descriptor == "" || descriptor == null) {

            errorMsg("Please Select " + descriptLable);
            // return false;
            result = false;

        } else if (instance == "" || instance == null) {

            errorMsg("Invalied Instance!");
            // return false;
            result = false;
        } else if (materialType == "" || materialType == null) {

            errorMsg("Please Select " + matTypeLable);
            //return false;
            result = false;

        } else if (!validateData("BMtrlType", "id.type", materialType)) {
            validatorDilogue("Please Select Valid " + materialType, "materialType_Text");
            //return false;
            result = false;
        } else if (materialGrp == "" || materialGrp == null) {
            errorMsg("Please Select " + matGroupLable);
            //return false;
            result = false;

        } else if (!validateData("BMtrlGroups", "id.mtrlGroup", materialGrp)) {
            validatorDilogue("Please Select Valid " + matGroupLable, "materialGrp_Text");
            //return false;
            result = false;
        } else if (uom == "" || uom == null) {
            errorMsg("Please Select UOM!");
            //return false;
            result = false;


        } else if (!validateData("OrgnTerminology", "abbreviation", uom)) {
            validatorDilogue("Please Select Valid UoM!", "uom_Text");
            // return false;
            result = false;
        } else {

            result = true;
        }

        return result;
    }

}

function save(messageFlag) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var saveResult = false;

    //if (true)
    if (topPannelValidation())
    {

        var moduleCode = $("#modulehid").val();
        console.log(moduleCode);
        var url = "";
        var jsonString = "";
        if (moduleCode != null && moduleCode != '' && moduleCode.indexOf("Material") > -1) {

            url = "regUpdate";
            var baskettype = $('#baskettypehid').val();
            var baskettype1 = $('#baskettypehid1').val();
//             ////alert("Save::::"+baskettype1);
            var newJSON = {};
            var descriptor = $("#descriptor_Text").val();
            var conceptId = $("#conceptId").val();
            var erp_Text = $("#erp_Text").val();
            var materialType_Text = $("#materialType_Text").val();
            var materialGrp_Text = $("#materialGrp_Text").val();
            var uom_Text = $("#uom_Text").val();
            var regDate_Tex = $("#regDate_Tex").val();
            var originator_Text = $("#originator_Text").val();
            var recordNo_Text = $("#recordNo_Text").val();
            newJSON.descriptor = descriptor;
            newJSON.conceptId = conceptId;
            newJSON.erp = erp_Text;
            newJSON.materialType = materialType_Text;
            newJSON.materialGroup = materialGrp_Text;
            newJSON.uom = uom_Text;
            newJSON.regDate = regDate_Tex;
            newJSON.originator = originator_Text;
            newJSON.recordNo = recordNo_Text;
            newJSON.baskettype = baskettype;
            newJSON.status = $("#statushid").val();

//         if (baskettype.indexOf("Registrations") > -1)
//            {
            var updateJSON = {};
            updateJSON.old = oldJSON;
            updateJSON.new = newJSON;
            jsonString = JSON.stringify(updateJSON);



        } else if (moduleCode != null && moduleCode != '' && moduleCode.indexOf("Vendor") > -1) {

            url = "vmUpdate";
            var baskettype = $('#baskettypehid').val();
            var baskettype1 = $('#baskettypehid1').val();
//             ////alert("Save::::"+baskettype1);
            var newJSON = {};
            var vendorName = $("#vendorName").val();
            var accountGroup = $("#accountGroup").val();
            var compCode = $("#compCode").val();
            var purchOrg = $("#purchOrg").val();
            var regdate = $("#regdate").val();
            var originator = $("#originator").val();
            var vendorCode = $("#vendorCode").val();
            var status = $("#statushid").val();
            var objectid = $("#objecthid").val();
            var commentText = $("#commentText").val();
            var locatcode = $("#locatcode").val();

            newJSON.originator = originator;
            newJSON.regdate = regdate;
            newJSON.vendorName = vendorName;
            newJSON.vendorCode = vendorCode;
            newJSON.accountGroup = accountGroup;
            newJSON.compCode = compCode;
            newJSON.purchOrg = purchOrg;
            newJSON.baskettype = baskettype;
            newJSON.status = status;
            newJSON.objectid = objectid;

            newJSON.olderpComment = commentText;
            newJSON.locatecode = locatcode;
            newJSON.moduleCode = moduleCode;

//         if (baskettype.indexOf("Registrations") > -1)
//            {
            var updateJSON = {};
            updateJSON.old = vendorOldJSON;
            updateJSON.new = newJSON;
            jsonString = JSON.stringify(updateJSON);


        } else if (moduleCode != null && moduleCode != '' && moduleCode.indexOf("Customer") > -1) {

        } else if (moduleCode != null && moduleCode != '' && moduleCode.indexOf("Service") > -1) {

        }


        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            url: url,
            cache: false,
            async: false,
            data: {'jsonData': jsonString,
                'baskettype': baskettype
            },
            success: function (result) {


                if (messageFlag)
                {
                    console.log("FIRST:::result::" + result);
                    var res = "";
                    var qstr = "";
                    var jsonObj = JSON.parse(result);

                    result = jsonObj.Message
                    qstr = jsonObj.url;

                    $("#dialog").html(result);
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
                                    if (result.lastIndexOf("Successfully") > -1)
                                    {

                                        if (baskettype1 != 'New Registrations') {

                                            window.location.href = qstr;
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


                    oldJSON = newJSON;
                    //foreignVendorResult = "Foreign Vendors Data Update Successfull";
                } else {

                    saveResult = true;
                }

                saveResult = true;
            },
            error: function (e) {
                sessionTimeout(e);
                //foreignVendorResult = "Error occured while updating foreign Vendors data.";
            }
        });

    }

    return saveResult;
}

function copyTabs(oldRecordNo, newRecordNo) {

    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    $.ajax({
        type: 'post',
        url: 'CopyTabs',
        async: false,
        data: {
            oldRecordNo: oldRecordNo,
            newRecordNo: newRecordNo},
        success: function (response) {
            var items = {
                "mat_itemno": newRecordNo,
                "conceptId": $("#conceptId").val(),
                "locat_code": "V2",
                "STATUS": "A1-REGISTERED",
                "baskettype": "Pending_Registrations"
            };
            var rurl = "RegMM?items=" + encodeURIComponent(JSON.stringify(items));
//            console.log(rurl);



            $("#dialog").empty();
            var result = "Copied Successfully";
            var dialogSplitMessage = dialogSplitIconText(result, "true");
            $("#dialog").append(dialogSplitMessage);
            //var link = "<div style='display:none;' class='ui-dialog-buttonpane ui-widget-content ui-helper-clearfix'><div class='show_detail_cover ui-dialog-buttonset'><a id='copylink' style='text-decoration: none !important;' class='show_detail  jqx-rc-all jqx-rc-all-energyblue jqx-button jqx-button-energyblue jqx-widget jqx-widget-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue' method='POST' href='" + rurl + "'><button class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only' style='padding: .2em 1em;'>OK</button></span> </a></div></div>";
            var link = "<a id='copylink' style='display: none !important;' method='POST' href='" + rurl + "'> </a>";

            //            var link = "<div class='show_detail_cover'><a style=' text-decoration: none !important;' class='show_detail  jqx-rc-all jqx-rc-all-energyblue jqx-button jqx-button-energyblue jqx-widget jqx-widget-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue' method='POST' href='" + rurl + "'><span style='padding: .2em 1em;'>OK</span></span> </a></div>";
            $("#dialog").append("<BR/>" + link);
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                height: 'auto',
                // commented by Ajay minHeight: 'auto',
                width: 300,
                fluid: true,
                buttons: [{
                        text: (labelObject['OK'] != null ? labelObject['OK'] : 'OK'),
                        click: function () {
                            //$("<a id='copylink' style='display: none !important;' method='POST' href='" + rurl + "'> </a>").click();
                            window.location.href = (rurl);
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
            //  ////alert(e.message)
            sessionTimeout(e);
        }

    });
}

function VendorName(ele) {
    var ele = ele;
    var unwantedSpaceValid = unwantedSpaces(ele);
    if (unwantedSpaceValid == true) {
        var str = $("#" + ele).val();

        var err = 'dis' + ele;
        var patt_an = /^[0-9]+$/;
        var patt_spchar = /^[&()\s]+$/;
        var patt_seq_spchar = /^(.*)[`!@#$%^&*()=_+{}\[\]\\|:;"'<>?,./\-][~!@`#$%^&*()=_+{}\[\]\\|:;"'<>?,./\-](.*)$/;
        var patt = /^[a-zA-Z0-9&()\s]+$/;
        var res = patt.test(str);
        var res_an = patt_an.test(str);
        var res_spchar = patt_spchar.test(str);
        var res_seq_spchar = patt_seq_spchar.test(str);

        var id = "#" + err;
        var msg = "Enter Valid Vendor Name";
        if (res_an == true) {
            err_msg(id, msg);
            return false;
        }
        if (res_spchar == true) {
            err_msg(id, msg);
            return false;
        }
        if (res_seq_spchar == true) {
            err_msg(id, msg);
            return false;
        }
        if (res == false)
        {
            err_msg(id, msg);
            return false;
        }
        $(id).hide();

        str = str.trim();
        $("#" + ele).val(str);
        if (ele == "name1") {
            //gen_progress_count();
        }
        return true;
    } else
        return false;
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
function err_msg(id, msg) {
    $(id).fadeIn(1000).html(msg);
}
function IsSpecialCharSpace(e, id) {
    // console.log("AKLSJD");
    var err = 'error' + id;
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    if ((keyCode >= 33 && keyCode <= 37) || (keyCode == 39) || (keyCode >= 42 && keyCode <= 47) || (keyCode >= 58 && keyCode <= 64) || (keyCode >= 91 && keyCode <= 96) || (keyCode >= 123 && keyCode <= 126)) {
        $("#" + err).fadeIn(500);
        $("#" + err).fadeOut(1500);
        return false;
    }
}

function registerValidation() {
    alert("registerValidation");
    var result = [];
    var validationObj = {};
    //  $("#mat_creation_form_table :input[type='text'],#mat_creation_form_table textarea").each(function () {
//    $("#mat_creation_form_table :input[type='text'],textarea").each(function () {
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
            }
            /// For Tech Mahindra PoC Start
//          if (textid == "EQUIP_CLASS")
//            {
//                var recordType = $('#RECORD_TYPE').val();
//                 var quipclass =  $("#EQUIP_CLASS").val();
//                if (recordType == 'ERSA')
//                {
//                    $("#CONS_TYPE").attr('disabled', true);
//                    $("#CONS_TYPE").attr("data-mandatory", "O");
//                    $("#CONS_SUB_TYPE").attr('disabled', true);
//                    $("#CONS_SUB_TYPE").attr("data-mandatory", "O");
//                    $("#EQUIP_CLASS").attr("data-inputmandatory", "M");
//                    $("#EQUIP_CLASS").attr("data-mandatory", "M");
//                    $("#EQUIP_MODEL").attr("data-mandatory", "M");
//                    $("#EQUIP_MODEL").attr("data-inputmandatory", "M");
//                    $("#ddEQUIP_MODEL").show();
//                    $("#ASSEMBLY_CODE").attr("data-mandatory", "M");
//                    $("#ASSEMBLY_CODE").attr("data-inputmandatory", "M");
//                    $("#ddASSEMBLY_CODE").show();
//                    $("#SERIAL_NO").attr("data-mandatory", "M");
//                    $("#CHECK_DIGIT").attr("data-mandatory", "M");
//                    validationObj[textid] = 'Should not be Blank';
//                } else if (recordType == 'NLAG' && quipclass !=null )
//                { 
//                    
//                    $("#CONS_TYPE").attr("data-mandatory", "M");
//                    $("#CONS_SUB_TYPE").attr("data-mandatory", "M");
//
//                    $("#EQUIP_CLASS").attr("data-inputmandatory", "M");
//                    $("#EQUIP_CLASS").attr("data-mandatory", "M");
//                    $("#EQUIP_MODEL").attr("data-mandatory", "O");
//                    $("#EQUIP_MODEL").attr("data-inputmandatory", "O");
//                    $("#ASSEMBLY_CODE").attr("data-mandatory", "O");
//                    $("#ASSEMBLY_CODE").attr("data-inputmandatory", "O");
//                    $("#ddEQUIP_MODEL").hide();
//                    $("#ddASSEMBLY_CODE").hide();
//                    $("#CONS_TYPE").attr('disabled', false);
//                    $("#CONS_SUB_TYPE").attr('disabled', false);
//
//                    validationObj[textid] = 'Should not be Blank';
//                } else {
//                    $("#CONS_TYPE").attr("data-mandatory", "O");
//                    $("#CONS_SUB_TYPE").attr("data-mandatory", "O");
//                    $("#SERIAL_NO").attr("data-mandatory", "O");
//                    $("#CHECK_DIGIT").attr("data-mandatory", "O");
//                    $("#EQUIP_MODEL").attr("data-mandatory", "O");
//                    $("#EQUIP_MODEL").attr("data-inputmandatory", "O");
//                    $("#ASSEMBLY_CODE").attr("data-mandatory", "O");
//                    $("#ASSEMBLY_CODE").attr("data-inputmandatory", "O");
//                    $("#EQUIP_CLASS").attr("data-inputmandatory", "O");
//                    $("#EQUIP_CLASS").attr("data-mandatory", "O");
//                    $("#CONS_TYPE").attr('disabled', false);
//                    $("#CONS_SUB_TYPE").attr('disabled', false);
//
//                }
//            } 
            /// For Tech Mahindra PoC End
            else
            {
                validationObj[textid] = 'Should not be Blank';
            }

            //  result.push(validationObj);

        }
//        alert(Object.keys(validationObj).length);
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

function vendorDuplicateTable() {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
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


    var req = {};
    req.type = 'POST';
    req.traditional = true;
    req.dataType = 'html';

    req.url = 'duplicatecheckvendor';
    req.data = {
        basicData: JSON.stringify(basicData)
    };
    req.success = function (result) {
        stopLoader();
        var heightGrid;
        var dataObj = JSON.parse(result);
        if (dataObj['count'] >= 5)
        {
            heightGrid = "250";
        } else
        {
            heightGrid = "400";
        }
//            var JSONTable = JSON.parse(result);

        if (dataObj['flag']) {
            $("#dialog").html(dataObj['message']);
            $("#dialog").dialog({resizable: false,
//                width: '800',
////                minWidth: 300,
//                maxWidth: 'auto',
////                height: '400',
//                    // commented by Ajay minHeight: '250',
//                    maxHeight: heightGrid,
//                modal: true,
                opacity: 5.5,
                zIndex: 10000,
                width: '800',
                title: (labelObject['Potential Duplicates Found'] != null ? labelObject['Potential Duplicates Found'] : 'Potential Duplicates Found.'),
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
        } else {
            var dialogSplitMessage = dialogSplitIconText(dataObj['message'], "Y");
            $("#dialog").html(dialogSplitMessage);
            $("#dialog").dialog({resizable: false,
//                    modal: true,
                height: 'auto',
                // commented by Ajay minHeight: 'auto',
                width: 300,
                maxWidth: 'auto',
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
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


//        $("#dialog").dialog({ resizable: false,
//            height: heightGrid
//        });

    };
    req.error = function (result) {
        $("#dialog").html("<div style='text-align:center'>" + result + "</div>");
        $("#dialog").dialog();
    };
//        req.async = false;
    $.ajax(req);
}
$(document).ready(function () {

    $(".breadcrum_toggle_class").click(function () {
        $(".breadcrum_toggle_class").toggleClass("inactive_toggle");
        $(".breadcrum_div").toggleClass("inactive_breadcrum");
    });

//    // DON'T REMOVE BELOW COMMENTED CODE 
//
//    // TO DISABLE MOUSE RIGHT CLICK EVENT
//    $(document).bind('contextmenu', function (e) {
//        e.preventDefault();
//    });
//
//    // TO DISABLE F-12 KEY EVENT
//    $(window).keydown(function (event) {
//        if (event.keyCode == 123) {
//            event.preventDefault();
//        }
//        // TO DISABLE Ctrl+U(View Source)
//        if (event.ctrlKey && (event.keyCode === 85 || event.keyCode === 117)) {
//            return false;
//        }
//    });
//
//// TO DISABLE BROWSER BACKWARD NAVIGATION
//    window.onload = disableBack();
//    window.onpageshow = function (evt) {
//        if (evt.persisted)
//            disableBack();
//    };

//    document.onselectstart = new Function("return false");

});

function disableBack() {
    window.history.forward();
}
function sendMailPopup() {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $("#dialog").html("Sender Mail: <BR><BR><input type='text' value='' class='visionSenderMail' id='sendMailAdd'/><br><div id='dailog_error_id' style='color:red;display:none;'></div>");
    $("#dialog").dialog({resizable: false,
        title: (labelObject['Sender Mail'] != null ? labelObject['Sender Mail'] : 'Sender Mail'),
        modal: true,
        height: 170,
        minWidth: 300,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    var sendMailAdd = $("#sendMailAdd").val();
                    console.log("returnReason:::" + sendMailAdd);
                    sendMailAdd = sendMailAdd.trim();
                    if (sendMailAdd != '' && sendMailAdd != null) {
                        $("#dailog_error_id").hide();
                        var res;
                        var regex = "^[a-zA-Z0-9]{1}[a-zA-Z0-9_.-]+@[a-zA-Z0-9]([a-zA-Z0-9_.-]{1,})+\.[a-zA-Z0-9]{1,}[._-]{0,1}[a-zA-Z0-9]{1,}$";
                        if (regex != null) {
                            var patt = new RegExp(regex);
                            res = patt.test(sendMailAdd);
                        } else {
                            res = true;
                        }

                        console.log("res::::" + res);
                        if (res) {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            sendMailProcess(sendMailAdd);
                        } else {
                            $("#dailog_error_id").html("Please Enter Valid Sender Mail");
                            $("#dailog_error_id").show();
                        }


                    } else
                    {
                        $("#dailog_error_id").html("Please Enter Sender Mail");
                        $("#dailog_error_id").show();
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

function sendMailProcess(controlType, customizedValue, staticValue) {
    var basicDatas = {};
    alert(staticValue);
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

//    if (sendMailAdd != '' && sendMailAdd != null) {
    //
//        console.log("sendMailAdd:::"+sendMailAdd);
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
        //   var controlType = "controlType";
        var commentVal = $("#rejColumn").val();
        var rejColumn = "rejColumn";
        var rejectComment = "rejectComment";
        var ACCEPT_COMMENT = "ACCEPT_COMMENT";
        var customizedData = "customizedData";

        if (customizedValue != null && customizedValue != '')
        {
            basicDatas['customizedData'] = customizedValue;
        } else
        {
            alert("inside else" + staticValue);
            basicDatas['customizedData'] = staticValue;
        }

        console.log("textid:::" + textid);
//                  jsonOBJ.ids.push(textid.toLowerCase());
        if (textid != null && textid != 'CREATE_DATE' && textid != 'CREATE_BY') {
            basicDatas[textid] = textval;
            basicDatas['controlType'] = controlType;
//            basicDatas['controlType'] = 'SEND MAIL';
            //basicDatas[ACCEPT_COMMENT] = commentVal1;
            basicDatas[rejColumn] = commentVal;
//                basicDatas[rejectComment] = sendMailAdd;

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
//                    basicDatas[columnsArray[i]] = encodeURIComponent(hiddenVal);

            }

        }

    });

    // basicDatas['senderMail'] = sendMailAdd;
    var baskettype = $("#baskettypehid").val();
    $.ajax({
        type: "post",
        url: "formSubmit",
        cache: false,
        data: {'jsonData': JSON.stringify(basicDatas),
            'basketType': baskettype,
        },
        traditional: true,
        dataType: 'html',
        success: function (response) {

            var jsonObj = JSON.parse(response);
            var message = jsonObj.Message;
            var flag = jsonObj.messageFlag;

            var url = jsonObj.url;
            var count = jsonObj.count;


            var baskettype1 = $('#baskettypehid1').val();
            console.log("baskettype1:::" + baskettype1);
            var dialogSplitMessage = dialogSplitIconText(message, flag);
            // //////////////////alert(success_msg);
            $("#dialogsucess").html(dialogSplitMessage);
            //$("#dialog1").html(message);

            var dailogProps = {};
            dailogProps.title = (labelObject['Message'] != null ? labelObject['Message'] : 'Message');
            dailogProps.modal = true;
            if (flag)
                    //  if (message.lastIndexOf("Successfully") > -1 || message.lastIndexOf("Failed") > -1)
                    {
                        dailogProps.width = 300;
//                    dailogProps.minWidth = 300;
//                    dailogProps.maxWidth = 450;
//            dailogProps.maxHeight = 250;
                        dailogProps.height = 'auto';
                        dailogProps.minHeight = 'auto';
//                    dailogProps.minHeight = 130;
                    } else
            {

                /* css for the deafult  properties 
                 dailogProps.width = 400;
                 dailogProps.minWidth = 300;
                 dailogProps.maxWidth = 450;
                 dailogProps.height = 300;
                 dailogProps.minHeight = 130;
                 css for the deafult  properties  */

//                    var messagecontent = $(message).text();
                var messagecount = message.length;
                if (messagecount >= 600)
                {
                    dailogProps.height = 300;
                    dailogProps.width = 600;
                } else
                {
                    dailogProps.height = "auto";
                    dailogProps.width = "auto";
                }

//            dailogProps.maxHeight = 250;

            }

            dailogProps.buttons = [];
            dailogProps.buttons.push({
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    if (flag)
                            // if (message.lastIndexOf("Successfully") > -1)
                            {
                                //window.location.href = url;


                                if (baskettype1 != 'New Registrations') {
//                                    var href = document.referrer;
//                                    window.location.reload(href);
                                    window.opener.location.reload(true);
                                    var objWin = window.self;
                                    objWin.open('', '_self', '');
                                    objWin.close();

                                    window.top.close();
                                } else {
                                    var objWin = window.self;
                                    objWin.open('', '_self', '');
                                    objWin.close();

                                    window.top.close();

                                }
                            }

                }
            });
            dailogProps.fluid = true;
            dailogProps.open = function () {
                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(this).closest(".ui-dialog").addClass("visionFormDataDialogSuccess");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            };
            dailogProps.beforeClose = function () {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            };
//            dailogProps.buttons.Ok = function () {
//                $(this).html("");
//                $(this).dialog("close");
//                $(this).dialog("destroy");
//                if (flag)
//                        // if (message.lastIndexOf("Successfully") > -1)
//                        {
//                            //window.location.href = url;
//
//
//                            if (baskettype1 != 'New Registrations') {
////                                    var href = document.referrer;
////                                    window.location.reload(href);
////                                    window.opener.location.reload(true);
//                                window.top.close();
//                            } else {
//                                window.top.close();
//
//                            }
//                        }
//
//            };

            $("#dialogsucess").dialog(dailogProps);

        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
//    }

}
function registerCheckValidation(basicData) {

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
                var jsonObj = JSON.parse(response);
                var message = jsonObj['message'];
                var flag = jsonObj['validateFlag'];

                if (!flag) {
                    var dialogSplitMessage = dialogSplitIconText(message, flag);
                    $("#dialogsucess").html(dialogSplitMessage);
                    var dailogProps = {};
                    dailogProps.title = (labelObject['Message'] != null ? labelObject['Message'] : 'Message');
                    dailogProps.modal = true;
//                    if (!flag)
//                    {
//                        dailogProps.width = 300;
//                        dailogProps.height = 'auto';
//                        dailogProps.minHeight = 'auto';
//
//                    } else {


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

//                    }

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
//                    dailogProps.buttons.Yes = function () {
//                        $(this).html("");
//                        $(this).dialog("close");
//                        $(this).dialog("destroy");
//                        registration();
//
//                    };
//                    dailogProps.buttons.No = function () {
//                        $(this).html("");
//                        $(this).dialog("close");
//                        $(this).dialog("destroy");
//
//
//                    };

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
function registration() {
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
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
    var folowuppanel = '';
    var folowupgridId = '';
    var mocrNumber = '';

    folowupgridId = $('#FOLLOWUP_GRID_ID').val();
    folowuppanel = $('#FOLLOWUP_PANEL_ID').val();
    mocrNumber = $('#mocrNumber').val();

    basicData['FOLLOWUP_PANEL_ID'] = folowuppanel;
    basicData['FOLLOWUP_GRID_ID'] = folowupgridId;
    basicData['mocrNumber'] = mocrNumber;
    basicData['controlType'] = 'Register';

    $.ajax({
        url: "registration",
        type: "post",
        traditional: true,
        dataType: 'html',
        cache: false,
        data: {
            basicData: JSON.stringify(basicData),
            basicIds: JSON.stringify(basicIds),
            panelId: $("#panelId").val(),
            classconceptid: $("#CONCEPT_ID").val(),
            fioriThemeFlag: fioriThemeCheck,
        },
        success: function (result) {
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
                    $("#dialog1").html(message);
                    $("#dialog1").dialog({resizable: false,
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                        modal: true,
                        height: 'auto',
                        // commented by Ajay minHeight: 'auto',
                        width: 300,
                        fluid: true,
                        buttons: {
                            Ok: function () {
                                registerPanels(jsonResponse['formData'], jsonResponse['basicdata']);
                                messageFlag = false;
                                $(this).html("");
                                $(this).dialog("destroy");
                                $(this).dialog("close");
                            }
                        },
                        open: function () {
                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                            $(".ui-dialog").addClass("copyIconDialog");

                            $(document).keydown(function (e) {
                                if (messageFlag) {
                                    if (e.keyCode == 27 || e.keyCode == 13) {

                                        registerPanels(jsonResponse['formData'], jsonResponse['basicdata']);
                                        messageFlag = false;

                                    }
                                }

                            });

                        },
                        beforeClose: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                            registerPanels(jsonResponse['formData'], jsonResponse['basicdata']);
                            messageFlag = false;
                        }
                    });
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
function sendMailConfMessage() {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var conf_mesg = $("#Send_Mail").attr('data-conf');
    var success_msg = $("#Send_Mail").attr('data-success-conf');
    var returnReason = $("#Send_Mail").attr('data-returnreason');
    conf_mesg = "An Email will be send to " + $("#SENDER_MAIL").val() + ". " + conf_mesg;
    var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
    $("#dialog").html(dialogSplitMessage);
    $("#dialog").dialog({resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        height: 'auto',
        // commented by Ajay minHeight: 'auto',
        minWidth: 350,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    // need to call send Mail 
//                                sendMailPopup();
                    if (returnReason == 3 || returnReason == 2)
                    {
                        mailPopUp("SEND MAIL", returnReason);

                    } else
                    {
                        sendMailProcess("SEND MAIL");
                    }
                    // sendMailProcess();
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

function mailPopUp(controlType, returnReason)
{

    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var response = "";
    var mailMessage = $("#MAIL_MESG").val();
    response += "<div class='visionFormEvaluation'><div class='visionFormEvaluationSelectmain'><div class='visionFormEvaluationDropdown'><div id='dailog_error_id' class='visionFormEvaluationLabel'></div>";
    response += "<div class ='visionFormEvaluationTitle'>" + (labelObject['The following text would be send to vendor as an email'] != null ? labelObject['The following text would be send to vendor as an email'] : 'The following text would be send to vendor as an email') + "</div>";
    response += "<div id='reEvaluation_Static' class='visionFormEvaluationTextarea visionFormEvaluationProcess'><textarea class='visionFormEvaluationInformation' id='staticValue' disabled>" + mailMessage + "</textarea></div>";
    if (returnReason == 3) {
        response += "<div class ='visionFormEvaluationTitle'>" + (labelObject['Type in new text, if you want to change the default text'] != null ? labelObject['Type in new text, if you want to change the default text'] : 'Type in new text, if you want to change the default text') + "</div>";
        response += "<div id='reEvaluationcustomized' class='visionFormEvaluationTextarea visionFormEvaluationProcess'><textarea id='customizedValue'></textarea></div></div>";
    }
//    response += "<div class ='visionFormEvaluationTitle'>" + (labelObject['Type in new text, if you want to change the default text'] != null ? labelObject['Type in new text, if you want to change the default text'] : 'Type in new text, if you want to change the default text') + "</div>";
//    response += "<div id='reEvaluationcustomized' class='visionFormEvaluationTextarea visionFormEvaluationProcess'><textarea id='customizedValue'></textarea></div></div>";
    $("#dialog2").html(response);
    $("#dialog2").dialog({resizable: false,
        title: (labelObject['Reason'] != null ? labelObject['Reason'] : 'Reason'),
//        title: (labelObject['Evaluation Reason'] != null ? labelObject['Evaluation Reason'] : 'Evaluation Reason'),
        modal: true,
        height: 'auto',
//        minWidth: 300,
        width: 600,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    var customizedValue = $('#customizedValue').val();
                    var staticValue = $('#staticValue').val();

                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    sendMailProcess(controlType, customizedValue, staticValue);


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
            $(this).closest(".ui-dialog").addClass("visionFormEvolutionDialog");
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
function dialogWidth(message, dailogProps)
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

function thirdPartyMailPopUp(controlType)
{

    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var response = "";
    var mailMessage = $("#MAIL_MESG").val();
    response += "<div class='visionFormEvaluation'><div class='visionFormEvaluationSelectmain'><div class='visionFormEvaluationDropdown'><div id='dailog_error_id' class='visionFormEvaluationLabel'></div>";
    response += "<div class ='visionFormEvaluationTitle'>" + (labelObject['The following text would be send to vendor as an email'] != null ? labelObject['The following text would be send to vendor as an email'] : 'The following text would be send to vendor as an email') + "</div>";
    response += "<div id='reEvaluation_Static' class='visionFormEvaluationTextarea visionFormEvaluationProcess'><textarea class='visionFormEvaluationInformation' id='staticValue' disabled>" + mailMessage + "</textarea></div>";
    response += "<div class ='visionFormEvaluationTitle'>" + (labelObject['Type in new text, if you want to change the default text'] != null ? labelObject['Type in new text, if you want to change the default text'] : 'Type in new text, if you want to change the default text') + "</div>";
    response += "<div id='reEvaluationcustomized' class='visionFormEvaluationTextarea visionFormEvaluationProcess'><textarea id='customizedValue'></textarea></div></div>";
    $("#dialog2").html(response);
    $("#dialog2").dialog({resizable: false,
        title: (labelObject['Reason'] != null ? labelObject['Reason'] : 'Reason'),
//        title: (labelObject['Evaluation Reason'] != null ? labelObject['Evaluation Reason'] : 'Evaluation Reason'),
        modal: true,
        height: 'auto',
//        minWidth: 300,
        width: 600,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    var customizedValue = $('#customizedValue').val();
                    var staticValue = $('#staticValue').val();

                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    thirdPartyMailProcess(controlType, customizedValue, staticValue);


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
            $(this).closest(".ui-dialog").addClass("visionFormEvolutionDialog");
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

function thirdPartyMailProcess(controlType, customizedValue, staticValue) {
    var basicDatas = {};
    alert(staticValue);
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

//    if (sendMailAdd != '' && sendMailAdd != null) {
    //
//        console.log("sendMailAdd:::"+sendMailAdd);
    var success_msg = $("#3rd_Party_Mail").attr('data-success-conf');
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
        //   var controlType = "controlType";
        var commentVal = $("#rejColumn").val();
        var rejColumn = "rejColumn";
        var rejectComment = "rejectComment";
        var ACCEPT_COMMENT = "ACCEPT_COMMENT";
        var customizedData = "customizedData";

        if (customizedValue != null && customizedValue != '')
        {
            basicDatas['customizedData'] = customizedValue;
        } else
        {
            alert("inside else" + staticValue);
            basicDatas['customizedData'] = staticValue;
        }

        console.log("textid:::" + textid);
//                  jsonOBJ.ids.push(textid.toLowerCase());
        if (textid != null && textid != 'CREATE_DATE' && textid != 'CREATE_BY') {
            basicDatas[textid] = textval;
            basicDatas['controlType'] = controlType;
//            basicDatas['controlType'] = 'SEND MAIL';
            //basicDatas[ACCEPT_COMMENT] = commentVal1;
            basicDatas[rejColumn] = commentVal;
//                basicDatas[rejectComment] = sendMailAdd;

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
//                    basicDatas[columnsArray[i]] = encodeURIComponent(hiddenVal);

            }

        }

    });

    // basicDatas['senderMail'] = sendMailAdd;
    var baskettype = $("#baskettypehid").val();
    basicDatas['sendThirdPartyMail'] = "Y";
    $.ajax({
        type: "post",
        url: "sendThirdPartyMail",
        cache: false,
        data: {'jsonData': JSON.stringify(basicDatas),
            'basketType': baskettype,
        },
        traditional: true,
        dataType: 'html',
        success: function (response) {

            console.log("ResponseBefore::" + response);
            var jsonObj = JSON.parse(response);
            console.log("ResponseAfter::" + response);
            var message = jsonObj.Message;
            var flag = jsonObj.messageFlag;

            var url = jsonObj.url;
            var count = jsonObj.count;


            var baskettype1 = $('#baskettypehid1').val();
            console.log("baskettype1:::" + baskettype1);
            if (success_msg != null && success_msg != '') {
                message = labelObject[success_msg] != null ? labelObject[success_msg] : success_msg;
            }
            var dialogSplitMessage = dialogSplitIconText(message, flag);
            // //////////////////alert(success_msg);
            $("#dialogsucess").html(dialogSplitMessage);
            //$("#dialog1").html(message);

            var dailogProps = {};
            dailogProps.title = (labelObject['Message'] != null ? labelObject['Message'] : 'Message');
            dailogProps.modal = true;
            if (flag)
                    //  if (message.lastIndexOf("Successfully") > -1 || message.lastIndexOf("Failed") > -1)
                    {
                        dailogProps.width = 300;
//                    dailogProps.minWidth = 300;
//                    dailogProps.maxWidth = 450;
//            dailogProps.maxHeight = 250;
                        dailogProps.height = 'auto';
                        dailogProps.minHeight = 'auto';
//                    dailogProps.minHeight = 130;
                    } else
            {

                /* css for the deafult  properties 
                 dailogProps.width = 400;
                 dailogProps.minWidth = 300;
                 dailogProps.maxWidth = 450;
                 dailogProps.height = 300;
                 dailogProps.minHeight = 130;
                 css for the deafult  properties  */

//                    var messagecontent = $(message).text();
                var messagecount = message.length;
                if (messagecount >= 600)
                {
                    dailogProps.height = 300;
                    dailogProps.width = 600;
                } else
                {
                    dailogProps.height = "auto";
                    dailogProps.width = "auto";
                }

//            dailogProps.maxHeight = 250;

            }

            dailogProps.buttons = [];
            dailogProps.buttons.push({
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    if (flag)
                            // if (message.lastIndexOf("Successfully") > -1)
                            {
                                //window.location.href = url;


                                if (baskettype1 != 'New Registrations') {
//                                    var href = document.referrer;
//                                    window.location.reload(href);
                                    window.opener.location.reload(true);
                                    var objWin = window.self;
                                    objWin.open('', '_self', '');
                                    objWin.close();

                                    window.top.close();
                                } else {
                                    var objWin = window.self;
                                    objWin.open('', '_self', '');
                                    objWin.close();

                                    window.top.close();

                                }
                            }

                }
            });
            dailogProps.fluid = true;
            dailogProps.open = function () {
                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(this).closest(".ui-dialog").addClass("visionFormDataDialogSuccess");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            };
            dailogProps.beforeClose = function () {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            };
//            dailogProps.buttons.Ok = function () {
//                $(this).html("");
//                $(this).dialog("close");
//                $(this).dialog("destroy");
//                if (flag)
//                        // if (message.lastIndexOf("Successfully") > -1)
//                        {
//                            //window.location.href = url;
//
//
//                            if (baskettype1 != 'New Registrations') {
////                                    var href = document.referrer;
////                                    window.location.reload(href);
////                                    window.opener.location.reload(true);
//                                window.top.close();
//                            } else {
//                                window.top.close();
//
//                            }
//                        }
//
//            };

            $("#dialogsucess").dialog(dailogProps);

        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
//    }

}

function thirdPartyMailConfMessage() {
    stopLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var conf_mesg = $("#3rd_Party_Mail").attr('data-conf');
    var success_msg = $("#3rd_Party_Mail").attr('data-success-conf');
    var returnReason = $("#3rd_Party_Mail").attr('data-returnreason');
    conf_mesg = "An Email will be send to " + $("#THIRD_EMAILID").val() + ". " + conf_mesg;
    var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
    $("#dialog").html(dialogSplitMessage);
    $("#dialog").dialog({resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        height: 'auto',
        // commented by Ajay minHeight: 'auto',
        minWidth: 350,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    // need to call send Mail 
//                                sendMailPopup();
                    if (returnReason == 3)
                    {
                        thirdPartyMailPopUp("3rd_Party_Mail");
                    } else
                    {
                        thirdPartyMailProcess("3rd_Party_Mail");
                    }
                    // sendMailProcess();
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

function srsRegistration() {
    showLoader();
    console.log("iam in srs registration");
    //var MyForm = new FormData();
    //MyForm.append("fileattach", files[0]);
    // var fileattach = new FormData(this);
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
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
            // MyForm.append(textid,textval);
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

    console.log("iam in srs Register Is :::" + basicData);
    $.ajax({
        url: "SRSRegister",
        type: "post",
        dataType: 'html',
        cache: false,
        data:
                {
                    'srsbasicData': JSON.stringify(basicData)
                },

        traditional: true,
        success: function (response) {
            stopLoader();
            console.log("The result is:::" + response);
            closeAllDialogsBoxes();
            var dialogSplitMessage = dialogSplitIconText(response, "Y");
            $("#dialog").html(dialogSplitMessage);
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                height: 'auto',
                // commented by Ajay minHeight: 'auto',
                minWidth: 350,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            srsFormGrid();
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

}


function srsFileNames(files) {
    showLoader();
    const allowedExtensions = new Set(['txt', 'png', 'jpg', 'jpeg', 'bmp', 'svg', 'tif', 'tiff', 'bat', 'gif', 'sql', 'xlsx', 'xls', 'doc', 'pdf']);
    const srsFileFormData = new FormData();

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const ext = file.name.split('.').pop().toLowerCase();

        console.log(`The size of the file is ::: ${file.size}`);
        console.log(`File extension is ::: ${ext}`);

        if (!allowedExtensions.has(ext)) {
            console.log('Invalid extension!');
            const fileErrorMessage = 'Please upload jpg, png, txt, sql files only!';
            $("#disUSER_SUP_DESC").html(fileErrorMessage).show();
            stopLoader();
            return;
        } else {
            $(".allErrors").hide();
            srsFileFormData.append("srsFiles[]", file);
            $('#visionSRSFileList').append(`
                <div class="VisionFileNameSpace" id="file_${i}">
                    <span class="visionSRSRemoveFile">${file.name} </span> 
                    
                    <img src="images/closeIcon_blue.png" class="visionSRSRemoveSpaceClass" onclick="removeFileName(this)" title="Delete File"/>
                </div>
            `);
        }
    }
    console.log("Updating list with files:", files);
    console.log("File data in FormData:", srsFileFormData.getAll("srsFiles[]"));

    $.ajax({
        url: 'srsUploadFiles',
        type: 'POST',
        data: srsFileFormData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        success: function (response) {
            stopLoader();
            console.log("Upload was successful.");
        },
        error: function (xhr, status, error) {
            stopLoader();
            console.log("Status Code:", xhr.status);
            console.log("Error occurred:", error);
            console.log("Status:", status);
            console.log("Response:", xhr.responseText);
            sessionTimeout(e);

        }
    });
}

function removeFileName(obj)
{
    showLoader();
    console.log("iam in removeFile::::" + obj.parentElement.innerText);
    var fileName = obj.parentElement.innerText;
    var jqObj = $(obj);
    var container = jqObj.closest('div');
    //var index = container.attr("id").split('_')[1];
    container.remove();
    stopLoader();
//    $.ajax({
//        url: 'srsRemoveFiles',
//        type: "POST",
//        data:
//                {
//                    srsRemoveFile: fileName
//                },
//        traditional: true,
//        dataType: 'html',
//        success: function (response) {
//            stopLoader();
//            console.log("The result is:::" + response);
//
//        }, error: function (e) {
//            stopLoader();
//            console.log("The Error Message is:::" + e.message);
//            sessionTimeout(e);
//        }
//    });
}


function selectplant(success_msg)
{
    var resultArray = registerValidation();
    if (resultArray != null && Object.keys(resultArray).length == 0) {
        $(".allErrors").hide();
        var baskettype = $('#baskettypehid').val();
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
                    basicData[columnsArray[i]] = hiddenVal;
                }
            }
        });
        var role = $("#rolehid").val();
        var roleStartsWith = role.substring(0, 2);
        if (roleStartsWith == "MM") {
            plantDataMM(basicData, success_msg);
        }
    } else {
        for (var textIdKey in resultArray) {
            $("#dis" + textIdKey).html(resultArray[textIdKey]);
            $("#dis" + textIdKey).show();

        }
    }

}

function plantDataMM(basicData, success_msg) {
    showLoader();
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
            stopLoader();
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
//                        // commented by Ajay minHeight: 0,
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

function insertinbulebel(selectedInstance, jsonString, success_msg)
{
    showLoader();
    if (jsonString != null) {
        $.ajax({
            type: "POST",
            traditional: true,
            dataType: 'html',
            url: "insertplant",
            cache: false,
            data: {'basicData': jsonString,
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
                            // commented by Ajay minHeight: 'auto',
                            fluid: true,
                            buttons: [{
                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                    click: function () {

                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                        location.reload();

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
}
//BulkUploadImagesProcess

function bulkUploadImagesPopulateBrowser(browseId, gridId)
{
    var filesList = [];
//       $("#" + browseId).attr('data-clicked', 'Y');
    $("#" + browseId).click();
    $("#" + browseId).on('change', function (event) {
        console.log("iam in files change ");
        filesList = event.target.files;
        bulkUploadImageFiles(filesList, browseId, gridId);

    });
}
function bulkUploadImageFiles(files, browseId, gridId) {
    showLoader();
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var bulkUploadImageFiles = new FormData();
    var uploadedFilesSize = 0;
    for (var i = 0; i < files.length; i++) {

        var filename = files[i];
        var filesize = files[i].size;

        console.log("The size of the file is ::::" + filesize);
        bulkUploadImageFiles.append("bulkUploadImageFiles[]", files[i]);
        uploadedFilesSize = uploadedFilesSize + files[i].size;

    }
    var filesSizeInKB = uploadedFilesSize / 1024;
    var filesSizeInMB = filesSizeInKB / 1024;
    bulkUploadImageFiles.append("filesSizeInMB", filesSizeInMB);
    bulkUploadImageFiles.append("gridId", gridId);
//          var csrfToken = $("input[name='_csrf']").val();
//    if (csrfToken != null && csrfToken != '') {
//        bulkUploadImageFiles.append("_csrf",$("input[name='_csrf']").val());
//    }
    console.log("iam in updateList" + files);
    console.log("iam in filedata" + bulkUploadImageFiles.get("bulkUploadImageFiles[]"));
    $.ajax({
        url: 'importBulkUploadFiles',
        type: "POST",
        data: bulkUploadImageFiles,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        cache: false,
        success: function (response) {
            console.log("The result is:::" + response);
            console.log("response:::::::" + response);
            stopLoader();
            //var dialogSplitMessage = dialogSplitIconText((labelObject[response] != null ? labelObject[response] : response));

            var setWidth;

            if (response['resultFlag'] != "" && response['resultFlag'] != null && response['resultFlag'] == "false")
            {
                var dialogSplitMessage = dialogSplitIconText(response['result'], "Y");
                $("#dialog").html(dialogSplitMessage);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    height: 'auto',
                    // commented by Ajay minHeight: 'auto',
                    maxWidth: 'auto',
                    width: 400,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {

                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                $('#' + gridId).jqxGrid('updatebounddata');
//                                $('#' + gridId).jqxGrid('updatebounddata', 'cells');
                                $('#' + gridId).jqxGrid('clearselection');
//                                $("#" + gridId).jqxGrid('selectrow', 1);
                                var rows = $('#' + gridId).jqxGrid('getrows');
                                if (rows != null && rows != '')
                                {
                                    $("#" + gridId).jqxGrid('selectrow', 0);
                                    $("#drop" + gridId).removeAttr("disabled");
                                    $("#drop" + gridId).removeAttr("opacity");
                                } else
                                {
                                    $("#approvebutt" + gridId).attr("disabled", true);
                                    $("#drop" + gridId).attr("disabled", true);
                                    $("#drop" + gridId).css("opacity", "0.5");
                                }
                                stopLoader();
                            }
                        }],
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                        // $(this).closest(".ui-dialog").addClass("visionCommonDialog");
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
                $("#dialog").html(response['result']);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    height: 250,
                    // commented by Ajay minHeight: 'auto',
                    //minWidth: dialogWidthResize(message, setWidth),
                    maxWidth: 'auto',
                    width: 400,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {

                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                $('#' + gridId).jqxGrid('updatebounddata');
//                                $('#' + gridId).jqxGrid('updatebounddata', 'cells');
                                $('#' + gridId).jqxGrid('clearselection');
//                                $("#" + gridId).jqxGrid('selectrow', 1);
                                var rows = $('#' + gridId).jqxGrid('getrows');
                                if (rows != null && rows != '')
                                {
                                    $("#" + gridId).jqxGrid('selectrow', 0);
                                    $("#drop" + gridId).removeAttr("disabled");
                                    $("#drop" + gridId).removeAttr("opacity");
                                } else
                                {
                                    $("#approvebutt" + gridId).attr("disabled", true);
                                    $("#drop" + gridId).attr("disabled", true);
                                    $("#drop" + gridId).css("opacity", "0.5");
                                }
                                stopLoader();
                            }
                        }],
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                        // $(this).closest(".ui-dialog").addClass("visionCommonDialog");
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
            $img.before("<input id='" + browseId + "' type='file' multiple name='bulkUploadImagesImportFile' />");
            $("#" + browseId).hide();

        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });

}

function bulkUploadDataPopulateBrowser(browseId, gridId)
{
    var filesList = [];
//       $("#" + browseId).attr('data-clicked', 'Y');
    $("#" + browseId).click();
    $("#" + browseId).on('change', function (event) {
        console.log("iam in files change ");
        filesList = event.target.files;
        bulkUploadDataFiles(filesList, browseId);
    });

}
function bulkUploadDataFiles(filesList, browseId)
{
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var bulkUploadDataFiles = new FormData();
    for (var i = 0; i < filesList.length; i++) {
        var filename = filesList[i];
        var filesize = filesList[i].size;
        console.log("The size of the file is ::::" + filesize);
        bulkUploadDataFiles.append("bulkUploadDataFiles", filesList[i]);
    }
//     var csrfToken = $("input[name='_csrf']").val();
//    if (csrfToken != null && csrfToken != '') {
//        bulkUploadDataFiles.append("_csrf", $("input[name='_csrf']").val());
//    }
    console.log("iam in updateList" + filesList);
    console.log("iam in filedata" + bulkUploadDataFiles.get("bulkUploadDataFiles"));
    if (filesList != 'null' && filesList != "")
    {
//     $("#" + browseId).ajaxfileupload({
//
//        'action': 'importSapFile',
//        enctype: 'multipart/form-data',
//        processData: false,
//        contentType: false,
//        cache: false,
//        async: false,
//        onStart: function () {
//            showLoader();//30
//        },
//     'onComplete': function (result) {
        $.ajax({
            url: 'importBulkUploadFile',
            type: "POST",
            data: bulkUploadDataFiles,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            cache: false,
            success: function (result) {
                //console.log("reqtype11::::" + reqtype)
                console.log("result::555::" + result);
                try {
                    console.log("response:::::::" + result);
                    // var dialogSplitMessage = dialogSplitIconText((labelObject[result] != null ? labelObject[result] : result));
                    var dialogSplitMessage = dialogSplitIconText(result, "Y");
                    $("#dialog").html(dialogSplitMessage);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                        height: 'auto',
                        // commented by Ajay minHeight: 'auto',
                        minWidth: 350,
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
                            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                            // $(this).closest(".ui-dialog").addClass("visionCommonDialog");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                        },
                        beforeClose: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");

                        }
                    });


                    //}

                    var $img = $("#" + browseId).next('img');
                    $("#" + browseId).remove();
                    $img.before("<input id='" + browseId + "' type='file' name='bulkUploadDataImportFile' />");
                    $("#" + browseId).hide();

                    stopLoader();//27
                } catch (e) {

                    stopLoader();//28
                }
            }
            , onCancel: function () {

                stopLoader();//29
            }
            //catch()}
        });
    }
}
function bulkUploadFilesProcessRequest(gridId)
{
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    console.log("iam in bulkUploadFilesProcessRequest::::" + gridId);
    if (gridId != null && gridId != '') {
        // Process The Request
        var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
        alert(selectedrowindexes);
        if (selectedrowindexes.length != 0) {

            var reqDescrFlag = true;
            var indexesArray = [];
            var selectedDataArray = [];
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
                console.log("selectedRowData::::" + selectedRowData);
                if (selectedRowData != null) {
                    selectedDataArray.push(selectedRowData);
                }


            }
            if (selectedDataArray != null && selectedDataArray.length != 0) {
                $("#dialog1").html((labelObject['Are you sure you want to process the Record(s)'] != null ? labelObject['Are you sure you want to process the Record(s)'] : 'Are you sure you want to process the Record(s)') + "?");
//                            $("#dialog1").html(labelObject['Please select an option to Process'] != null ? labelObject['Please select an option to Process'] : 'Please select an option to Process');
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
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                processbulkUploadFiles(selectedDataArray, gridId);

                            }}, {
                            text: labelObject['No'] != null ? labelObject['No'] : 'No',
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
            $("#dialog1").html(labelObject['Please select Records to Process'] != null ? labelObject['Please select Records to Process'] : 'Please select Records to Process');
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
}

function processbulkUploadFiles(selectedDataArray, gridId)
{
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $.ajax({
        type: "post",
        url: "bulkUploadProcess",
        cache: false,
        data: {
            'jsonData': JSON.stringify(selectedDataArray),
            'gridId': gridId
        },
        traditional: true,
        dataType: 'html',
        success: function (response) {
            $("#dialog1").html(response);
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
                            try {
                                $('#' + gridId).jqxGrid('updatebounddata');
                            } catch (e) {

                            }

                            try {
                                $('#' + gridId).jqxGrid('updatebounddata', 'cells');
                            } catch (e) {

                            }

                            try {
                                $('#' + gridId).jqxGrid('clearselection');
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
    });
}

function copyRequest() {
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
//                                copyData[columnsArray[i]] = encodeURIComponent(hiddenVal);
            }

        }


    });
    try {
        $(".visionRegisterMaterialCreation :input").each(function () {

            try {
                var textid = $(this).attr("id");
                var type = $(this).attr("type");
                var textval = $(this).val();
                delete copyData [textid];
                copyData[textid] = textval;
            } catch (e) {

            }
        });
    } catch (e) {

    }
    var jsonString = JSON.stringify(copyData);
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
                    copyRequestProcess(copyData, selectedInstanceValue);
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
                                    copyRequestProcess(copyData, selectedInstanceValue);

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

function copyRequestProcess(copyData, selectedInstanceValue) {
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

    // extensions(jsonString, success_msg);
    var controlType = "Copy";
    var copyId = $('#copyId').val();
    var copyJSON = {};
    copyJSON.formdata = copyData;

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
function navigateToRefreshForm(data) {
//    ajaxStart();
    showLoader();
    var navigationGridId = "";
    firstPanelShowFlag = true;
    secondPanelShowFlag = true;
    //  var datafield = column.datafield;
    // $('#firstDxpSplitter').jqxSplitter({width: '100%', height: '635', orientation: 'vertical', splitBarSize: 0, panels: [{size: 30}]});
    //$('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
    // $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
    //$('.decendingOrder').hide();
    //$('.mainBasketBookMark').show();
    //$('.searchIconsList').hide();
    //$('.decendingFirstOrder').hide();
    //$('.searchFirstResultsList').hide();
    //$('.searchDXPCreate').hide();
    //$('.dxpMaterialListClass').hide();
    //$('.viewFormBasketDiv').hide();
    //$('.searchResultsList activeResult').hide();
    //$('.searchResultMaterialResults').hide();
    $('.viewFormDiv').removeClass('active');
    $('.viewFormBasketDiv').removeClass('active');
    $('.viewClassDiv').removeClass('active');
    $('.viewClassBasketDiv').removeClass('active');
    var hrefColumn = "";
    try {
        var hrefColumn = $("#hrefColumn").val();
    } catch (ee) {
        hrefColumn = "RECORD_NO";
    }
    var items = {};
    var linkedColumns = data['linkedColumns'];
    if (linkedColumns == null && linkedColumns == '' && linkedColumns == undefined) {
        linkedColumns = $("#linkedColumns").val();
    }
//    var linkedColumns = "RECORD_NO,INSTANCE,BUSINESS_UNIT";
//    $("#linkedColumns").val(linkedColumns);  
    if (linkedColumns != null && linkedColumns != '') {
        for (var key in data) {
            if (key.lastIndexOf("PLANT") > -1) {
                items[key] = data[key];
            }
            if (linkedColumns.lastIndexOf(key) > -1) {

                var value = data[key];
                if (value != null && value != '') {
                    value = value.replace(/\s/gi, "_");
                    value = value.replace(/[#]/g, "_");
                    //  console.log("key::::" + key + ":::value::::" + value);
                    items[key] = value;
                }
                //    console.log("key::::" + key + ":::value::::" + value);

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
    if (hiddenObjStr != null && hiddenObjStr != undefined && hiddenObjStr != '') {
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
    var roleId = data['ROLE_ID'];
    var baskettype = data['baskettype'];
    $("#currentGridId").val(data['gridId']);
    var currentDomain = $("#currentDomain").val();
    var operationName = $("#operationName").val();
    $("#panelId").val(data['panelId']);
    items.stripValue = stripValueObjArray;
    items.imageTable = $("#imageTable").val();
    items.imageTableColumn = $("#imageTableColumn").val();
    items.imageColumn = $("#imageColumn").val();
    items.CONCEPT_ID = data['CONCEPT_ID'];
    items.linkedColumns = linkedColumns;
    items.panelId = data['panelId'];

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
    items['gridId'] = data['gridId'];
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
//            ajaxStop();
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

//             var tapForm = form['topForm'];
//            var formObj = {};
//            formObj = 
            //fourthDxpSplitterData
            $(".dxpGridHideShow").show();
//            $("#fourthDxpSplitter").show();
//            $("#thirdDxpSplitter").show();
            var DuplCheckEnableflag = response['ssDuplCheckEnableFlag'];
            var panellist = response['panellist'];
            $("#ssDuplCheckEnableFlag").val(DuplCheckEnableflag);
            $("#hrefColumn").val(hrefColumn);
            var basicData = {};
            var dxpAdavanceSearchOptions = $('#dxpAdavanceSearchOptions').val();
            if (dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != undefined
                    && dxpAdavanceSearchOptions != '' && (dxpAdavanceSearchOptions == 'C' || dxpAdavanceSearchOptions == 'P' || dxpAdavanceSearchOptions == 'PRA')) {
//                $("#searchresultsSplitter").html(form);
                $("#dxpFormContent").html(form);
            } else if (dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != undefined
                    && dxpAdavanceSearchOptions != '' && (dxpAdavanceSearchOptions == 'S' || dxpAdavanceSearchOptions == 'D' ||
                            dxpAdavanceSearchOptions == 'PR')) {
//                $("#fourthDxpSplitter").html(form);
                console.log("formData" + form);
                console.log("panellist" + panellist);
//                $("#dxpFormContent").html(form);
            } else {
//                $("#fourthDxpSplitter").html(form);
//                $("#dxpFormContent").html(form);
            }
            let formDataObj = {};
            formDataObj.datafield = hrefColumn;
            formDataObj.data = data;
            formDataObj.redirectType = 'form';
            formDataObj.gridId = data['gridId'];
            formDataObj.selectedTabId = '';
            formDataObj.selectingrowindex = data['boundindex'];
            $('#dxpVisionFormRefreshDivSpanImg').attr('data-attr', JSON.stringify(formDataObj));
            $('#dxpVisionFormDataHidden').val(JSON.stringify(formDataObj));
            $('#accdiv').append(response['accForm'])
            $('.viewClassDiv').removeClass('active');
            $('.viewClassBasketDiv').removeClass('active');
            $('.viewGridDiv').removeClass('active');
            $('.viewGridBasketDiv').removeClass('active');
            $("#materialBasketId").html(data['baskettype']);
            $("#materialBasketId").show();
            try {
                refreshFormDatawithId("dxpVisionFormRefreshDivSpanImg");
            } catch (e) {

            }

//            $("#hintImageID").show();
// try{
//             $("#hintImageID").attr('onclick', 'productInnerPageGuideIntro()');
//            //$(".searchIconsList").hide();
//            //$(".searchResultsList").hide();
//            // $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
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
//            showSelectedTabContent(event, 'dxpFromTab', 'dxpFormContent', 'View Form', 'N');
//            validWorkflow();
////            $(".visionRegisterMaterialAccordians").find(".ui-accordion-header").addClass('particulorAccDiv');
////            $("#visionRegistartionGenericAccordionSpan img").addClass('accordianDefultImg');
////
////
////            $('.particulorAccDiv').on("mouseover", function () {
////                $('.particulorAccDiv img').map(function () {
////                    var findAttrt = $(this).attr('src');
////                    var nn = findAttrt.replaceAll('W', '');
////                    $(this).attr('src', nn);
////                });
////                var findAttr = $(this).find('.accordianDefultImg').attr('src');
////                var findedAttr = "";
////                if (findAttr != null && findAttr != undefined && findAttr != '') {
////                    findedAttr = findAttr.split('.');
////                }
////                if (findedAttr != null && findedAttr != undefined && findedAttr != '') {
////                    var srcFileName = findedAttr[0] + 'W.' + findedAttr[1];
////                    $(this).find('.accordianDefultImg').attr('src', srcFileName);
////                }
////
////
////            });
////
////            $('.particulorAccDiv').on("mouseout", function () {
////                $('.particulorAccDiv img').map(function () {
////                    var findAttrt = $(this).attr('src');
////                    var nn = findAttrt.replaceAll('W', '');
////                    $(this).attr('src', nn);
////                });
////            });
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
//                    $('#colorBlueID').remove();
//                    var htmlData = "<ul class=\"color_IndicatioUl\"><li class=\"listItemcolorIndication\"><span class=\"autoGenerateline\"></span><span class=\"mfGuideColorIndexText\"> AutoGenerate</span></li>"
//                            + "<li class=\"listItemcolorIndication\"><span class=\"mandatoryline\"></span><span class=\"mfGuideColorIndexText\"> Mandatory </span></li>"
//                            + "<li class=\"listItemcolorIndication\"><span class=\"optionalline\"></span><span class=\"mfGuideColorIndexText\"> Optional </span></li>"
//                            + "<li class=\"listItemcolorIndication\"><span class=\"autopopulateline\"></span><span class=\"mfGuideColorIndexText\"> AutoPopulate </span></li></ul>";
//                    $(this).append('<div id = "colorBlueID">' + htmlData + '</div>');
//                    var template = '<div class="popover custom-popoverSuggestion" role="tooltip">' +
//                            '<div class="arrow"></div>' +
//                            '<h3 class="popover-header"></h3>' +
//                            '<div class="popover-body"></div>' +
//                            '</div>';
//                    $(".ccGuideInfo").popover({content: htmlData, trigger: "hover", position: 'right', html: true, template: template});
//                });
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
//                                $("#logoutDailog").dialog({ resizable: false,
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
//                                $("#logoutDailog").dialog({ resizable: false,
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
//                                $("#dialog").dialog({ resizable: false,
//                                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
//                                    modal: true,
//                                    height: 'auto',
//                                    // commented by Ajay minHeight: 'auto',
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
//
//
//            $(".defaultShowCards").hide();
//            $("#accdiv h3").click(function () {
//                var a = event.target.id;
//                let self = $(this).offset().top;
//                console.log(self);
//                setTimeout(function () {
//                    $('.dxpContentAccPageClass').animate({scrollTop: self - 80}, 'swing');
//                }, 310);
//            });
//            }catch(er){
//              stopLoader();  
//            }

//
//            try{
//             refreshFormDatawithId("dxpVisionFormRefreshDivSpanImg");   
//            }catch(er){
//              stopLoader();  
//            }
        },
        error: function (e) {
            sessionTimeout(e);
        }// Error function in Ajax
    });

}

function refreshFormDatawithId(id) {
    let dataAttr = $('#dxpVisionFormRefreshDivSpanImg').attr('data-attr')
    if (dataAttr == null) {
        dataAttr = $('#dxpVisionFormDataHidden').val();
    }
    if (dataAttr != null && dataAttr != '' && dataAttr != 'null' && dataAttr != 'undefined' && dataAttr != undefined) {
        var obj = $.parseJSON(dataAttr);
        var data = obj['data'];
        var divId = "";
        var showtabFlag = "";
        if (data != null && !jQuery.isEmptyObject(data) && data.hasOwnProperty('mocrNumber'))
        {
            var mocrNumber = data['mocrNumber'];
            var recordNo = data['RECORD_NO'];
            var instance = data['INSTANCE'];
            if (mocrNumber != null && mocrNumber != '' && mocrNumber != undefined && mocrNumber != 'null')
            {
                divId = 'dxpMOCRPendingTreeFormDiv';
                showtabFlag = "N";
                var createAssetToMOCRObjStr = $("#createAssetToMOCRObjId").val();
                if (createAssetToMOCRObjStr != null && createAssetToMOCRObjStr != ''
                        && createAssetToMOCRObjStr != undefined && createAssetToMOCRObjStr != 'null')
                {
                    var createAssetToMOCRObj = JSON.parse(createAssetToMOCRObjStr);
                    if (createAssetToMOCRObj != null && !jQuery.isEmptyObject(createAssetToMOCRObj)) {
                        var treeId = createAssetToMOCRObj['treeId'];
                        var treeDivId = createAssetToMOCRObj['treeDivId'];
                        var selectedTreeValue = createAssetToMOCRObj['selectedTreeValue'];
                        var fromType = createAssetToMOCRObj['fromType'];
                        var allowType = createAssetToMOCRObj['addType'];
                        var parentRecordNo = createAssetToMOCRObj['parentRecordNo'];
                        var mocrNo = createAssetToMOCRObj['mocrNo'];
                        var erpNo = createAssetToMOCRObj['erpNo'];
                        insertAssettoMOCR(treeId, treeDivId, recordNo, fromType, allowType, parentRecordNo, mocrNo, erpNo, instance);
                    }
                }
            }
        }
        navigateToForm(obj.datafield, obj.data, obj.redirectType, obj.gridId, obj.selectedTabId, obj.selectingrowindex, showtabFlag, divId);
    }

}

function openDocsProceedChangeRequest(basicData, reqType)
{
    stopLoader();
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    console.log("panaloldData::::" + basicData);
    if (basicData != null) {
        $.ajax({
            type: "POST",
            traditional: true,
            dataType: 'html',
            url: reqType,
            cache: false,
            data: {
                'basicData': basicData,
                'openDocsFlag': "true"
            },
            success: function (response) {
                stopLoader();
                var jsonData = {};
                var jsonObj = JSON.parse(response);
                response = jsonObj.Message;
                jsonData = jsonObj.ssfromobject;
                var flag = jsonObj.messageFlag;
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
//                                stripValueObj.value = encodeURIComponent(stripObj['value']);
                            stripValueObjArray.push(stripValueObj);
                        }

                    }
                    jsonData['stripValue'] = stripValueObjArray;
                }

                var baskettype1 = $('#baskettypehid1').val();
                var dialogSplitMessage = "";
                dialogSplitMessage = dialogSplitIconText((labelObject[response] != null ? labelObject[response] : response), flag);
                if (response != null && response != '' && response.indexOf("<table") > -1) {
                    $("#dialog").html(response);
                } else {
                    $("#dialog").html(dialogSplitMessage);
                }
                $("#dialog").dialog({resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    height: 'auto',
                    // commented by Ajay minHeight: 'auto',
                    minWidth: 500,
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
                                            if (baskettype1 != 'New Registrations') {
                                                $("#items").val("");
                                                $("#items").val(JSON.stringify(jsonData));
                                                // $("#submitForm").attr("action", "formData");
                                                formdata(jsonData);
//                                                window.location.href = "formData?items=" + JSON.stringify(jsonData);
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
            error: function (e) {
                stopLoader();
                //  ////////alert(e.message)
                sessionTimeout(e);
            }
        });
    }
}


function barCodeGeneration() {
    console.log("iam in bar code generation");
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
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
            // MyForm.append(textid,textval);
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
    var gridId = $("#gridId").val();
    console.log("iam in bar code generation Is :::" + basicData);
    var itemsstring = JSON.stringify(basicData);
    $("#items").val(itemsstring);
    $("#submitForm").attr("target", "_blank");
    $("#submitForm").attr("action", "barCodeFormSubmit");
    $("#submitForm").submit();

}

function toggleFilterGridRange(columnName, rowid, gridId) {
    $("#" + gridId + "_" + columnName + "_TO").toggle();
    $("#" + gridId + "_" + columnName + "_MIN").toggle();
    $("#" + gridId + "_" + columnName + "_MAX").toggle();
    $("#" + gridId + "_" + columnName).toggle();
    if ($("#" + gridId + "_" + columnName).css('display') != 'none') {
        $("#" + gridId + "_" + columnName + "_MIN").val("");
        $("#" + gridId + "_" + columnName + "_MAX").val("");
        $("#operator" + gridId + rowid).val("EQUALS");//operatorMM_NEW_CHNG_MGR1
        try {
            $("#operator_" + gridId + "_" + columnName).val("EQUALS");
        } catch (d) {
        }
    } else {
        $("#operator" + gridId + rowid).val("BETWEEN");
        try {
            $("#operator_" + gridId + "_" + columnName).val("BETWEEN");
        } catch (d) {
        }
        $("#" + gridId + "_" + columnName).val("");
    }
}
function createBulkUsers(gridId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var selectedDataArray = [];
    var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');

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
                selectedDataArray.push(data);
            }

        }
    }



    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        url: "bulkUserRegistration",
        cache: false,
        data: {
            'gridId': gridId,
            'gridData': JSON.stringify(selectedDataArray)


        },
        success: function (response) {
            var result1 = JSON.parse(response);
            console.log("response::" + response);
            console.log("result::" + result1);
            var message = result1.result;
            $("#dialog").html(message);
            var dailogProps = {};
            dailogProps.title = labelObject['Message'] != null ? labelObject['Message'] : 'Message';
            dailogProps.modal = true;
            if (result1['MessageFlag'] == 'Y')
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
            $("#dialog").dialog(dailogProps);

        },
        error: function (e) {
            sessionTimeout(e);
        }
    });
}

function rejectBulkUsers(gridId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var selectedDataArray = [];
    var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');

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
                selectedDataArray.push(data);
            }


        }

        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            url: "bulkUserRejection",
            cache: false,
            data: {
                'gridId': gridId,
                'gridData': JSON.stringify(selectedDataArray)
            },
            success: function (response) {
                var result1 = JSON.parse(response);
                console.log("response::" + response);
                console.log("result::" + result1);
                var message = result1.result;
                $("#dialog").html(message);
                var dailogProps = {};
                dailogProps.title = labelObject['Message'] != null ? labelObject['Message'] : 'Message';
                dailogProps.modal = true;
                if (result1['MessageFlag'] == 'Y')
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
                $("#dialog").dialog(dailogProps);

            },
            error: function (e) {
                sessionTimeout(e);
            }
        });
    }
    // else(selectedrowindexes.length == 0 && selectedrowindexes != 0 )
    else
    {
        $("#dialog").html("Please select a record to process");
        $("#dialog").dialog({resizable: false,
            title: 'Message',
            modal: true,
            height: 120,
            minWidth: 300,
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

}

function resolveBulkDuplicatesData() {
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
                var conf_mesg = $("#Delete").attr('data-conf');
                var success_msg = $("#Delete").attr('data-success-conf');
                var controlInd = "Delete";
                onSumbitBulkDeleteDuplicateConfirm("DELETE", success_msg, masterRecordData, sourceRecordData);
            } else {
                openSubmitActionDialog("Please select at least on Master record");
            }

        } else {
            openSubmitActionDialog("Please change actions before resolving duplicates");
        }
    } else {
        openSubmitActionDialog("Please update actions before resolving duplicates");
    }



}
function onSumbitBulkDeleteDuplicateConfirm(controlInd, success_msg, masterRecordData, sourceRecordData) {
    // returnReasons("Delete", success_msg);
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var duplicateCheckMergeFlag = $("#duplicateCheckMergeFlag").val();


    var conf_mesg = $("#Delete").attr('data-conf');
    if (duplicateCheckMergeFlag == 'Y') {
        conf_mesg = "The data will be merge to master Record" +
                "<br>Are you sure you want to Delete this Record?"
    } else {
        if (sourceRecordData != null && masterRecordData != null) {
            if (masterRecordData['STATUS'] == 'B2-ERP ACCEPTED'
                    || masterRecordData['STATUS'] == 'C2-RFC STAGED'
                    || masterRecordData['STATUS'] == 'C2-RFE STAGED'
                    || masterRecordData['STATUS'] == 'C2-RFD STAGED'
                    || masterRecordData['STATUS'] == 'C2-RFUD STAGED'
                    ) {
                if (sourceRecordData['PLANT'] == masterRecordData['PLANT']) {

                    conf_mesg = "Use the " + masterRecordData['RECORD_NO'] + " & add more details as description change" +
                            "<br>Are you sure you want to Delete this(" + sourceRecordData['RECORD_NO'] + ") Record?"
                } else {
                    conf_mesg = "Use the " + masterRecordData['RECORD_NO'] + " & add more details as Extension" +
                            "<br>Are you sure you want to Delete this(" + sourceRecordData['RECORD_NO'] + ") Record?"
                }

            } else {
                conf_mesg = "Use the record Number " + masterRecordData['RECORD_NO'] + " instead of " + sourceRecordData['RECORD_NO'] +
                        "<br>Are you sure you want to Delete this(" + sourceRecordData['RECORD_NO'] + ") Record?"
            }

        }
    }



//        if (conf_mesg != null && conf_mesg != '') {
//
//        } else {
//            conf_mesg = "Are you sure you want to Delete this Record?"
//        }
    var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
    //  var controlInd = $(this).attr("data-value");
    console.log("success_msg:::delte" + success_msg);
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
                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");

                    if (duplicateCheckMergeFlag != null && duplicateCheckMergeFlag == 'Y') {

                        returnBulkReasons('DELETE', success_msg, duplicateCheckMergeFlag, masterRecordData);
                    } else {
                        returnBulkReasons('DELETE', success_msg, "", masterRecordData);
                    }
                    // need to call merge functionality
//                       

//                    returnReasons('DELETE', success_msg);

//                   submitReg('DELETE');

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
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
//            $(this).closest(".ui-dialog").addClass("visionDialogAlignCommon");
        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}
function returnBulkReasons(controlInd, success_msg, duplicateCheckMergeFlag, masterRecordData)
{
    var response = "";
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var duplicateGridbasicData = $("#duplicateGridbasicData").val();

    var basicData = {};
    if (duplicateGridbasicData != null && duplicateGridbasicData != '') {
        basicData = JSON.parse(duplicateGridbasicData);
    }
    try {
        controlInd = controlInd.toUpperCase();
    } catch (e) {

    }
    console.log(controlInd + ":::1531:::::::::::::::");

    var msgTitle = "";
    if (controlInd.lastIndexOf("DELETE") > -1) {
        msgTitle = "Deletion Reason";
    } else {
        msgTitle = "Rejection Reason";

    }
    msgTitle = (labelObject[msgTitle] != null ? labelObject[msgTitle] : msgTitle);
    var rejectType = 0;
    try {
        rejectType = $("#rejectType").val();
    } catch (e) {
        rejectType = 0;
    }
//        if (rejectType > 1) {
//            onSubmitIncl(controlInd, " ");
//        }

    // //////alert("before empty" + rejectType);
    if (rejectType == 0)
    {
        response = "";

        try {
            $("#textReason").html("");
        } catch (et) {
        }
        ////////////////////alert("after empty");
        response += "<div id='textReason'>";
        response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
        response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";


        $("#dialog2").html(response);




    } else if (rejectType == 1)
    {
        response = "";
        try {
            $("#reasonDialog").html("");
        } catch (et) {
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


        if (rejectData != null && rejectData != '' && rejectDataArray != null && rejectDataArray.length > 0) {
            response += "<div id='rejectComboBox' class='visionRejectFormComboBox'></div>";
            response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
            $("#dialog2").html(response);
//            var rejectDataArray = JSON.parse(rejectData);
            $("#rejectComboBox").jqxComboBox({source: rejectDataArray, searchMode: 'contains', multiSelect: true, width: 280, height: 25});
        } else {
            try {
                $("#textReason").html("");
            } catch (et) {
            }

            response += "<div id='textReason'>";
            response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
            response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";


            $("#dialog2").html(response);

        }
    } else if (rejectType == 4)
    {
        response = "";
        try {
            $("#reasonDialog").html("");
        } catch (et) {
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


        try {
            $("#textReason").html("");
        } catch (et) {
        }

        ////////////////////alert("after empty");



        if (rejectData != null && rejectData != '' && rejectDataArray != null && rejectDataArray.length > 0) {
            response += "<div id='rejectComboBox'  class='visionRejectFormComboBox'></div>";
            response += "<div id='textReason'>";
            response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
            response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
            $("#dialog2").html(response);
//            var rejectDataArray = JSON.parse(rejectData);
            $("#rejectComboBox").jqxComboBox({source: rejectDataArray,
                searchMode: 'containsignorecase',
                multiSelect: true,
                autoComplete: true,
                theme: 'energyblue',
                openDelay: 1,
                closeDelay: 1,
                enableSelection: true,
                width: 280, height: 25});
        } else {
            response += "<div id='textReason'>";
            response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
            response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
            $("#dialog2").html(response);
        }


    }

    $("#dialog2").dialog({resizable: false,
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
                    var returnReason = "";
//                        var selectReason = $("#selectReason").val();
                    var checkBoxdata = "";
                    if (rejectType == 0)
                    {
                        var textBoxData = '';
                        retReasonText = textBoxData;
                        try {
                            textBoxData = $("#reasonId").val();
                        } catch (et) {
                            textBoxData = '';
                        }
                    } else if (rejectType == 1)
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
                                var comboListBoxdata = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                //retReasonText = returnReason;
                                retReasonText = comboListBoxdata;
                            }
                        } else {

                            var textBoxData = '';
                            try {
                                textBoxData = $("#reasonId").val();
                            } catch (et) {
                                textBoxData = '';
                            }

                            //retReasonText = textBoxData;
                            retReasonText = textBoxData;

                        }
                    } else if (rejectType == 4)
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

                                var comboListBoxdata = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                retReasonText = comboListBoxdata;
                                var textBoxData = '';
                                try {
                                    textBoxData = $("#reasonId").val();
                                } catch (et) {
                                    textBoxData = '';
                                }
                                if (textBoxData != null && textBoxData != '')
                                {
                                    retReasonText = comboListBoxdata + ", " + textBoxData;
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
                                retReasonText = textBoxData;
//                                                                    retReasonText = comboListBoxdata;//nirmala
                            }
                        }
                    } else
                    {
                        onSubmit(controlInd, retReasonText, success_msg, "", duplicateCheckMergeFlag, masterRecordData, basicData);
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
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        onSubmit(controlInd, retReasonText, success_msg, "", duplicateCheckMergeFlag, masterRecordData, basicData);
//                            onSubmitClick(controlInd, retReasonText, success_msg);
                        // $("#labeld").empty();
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
                            onSubmit(controlInd, returnReason, success_msg, "", duplicateCheckMergeFlag, masterRecordData, basicData);
                        } else
                        {
                            $("#dailog_error_id").show();
                        }
                    }

                    showLoader();
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
            //            $(this).closest(".ui-dialog").addClass("visionDialogAlignCommon");
        },
        beforeClose: function (event, ui)
        {
            $("#duplicateGridbasicData").val("");
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}

function onSubmit(controlInd, returnReason, success_msg, updatedUser, duplicateCheckMergeFlag, masterRecordData, basicData) {
    showLoader();  /* ramu commented */
    labelObject = {};
    basicDatas = {};
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
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
        try {
            $(".visionRegisterMaterialCreation :input").each(function () {

                try {
                    var textid = $(this).attr("id");
                    var type = $(this).attr("type");
                    var textval = $(this).val();
                    delete basicDatas [textid];
                    basicDatas[textid] = textval;
                } catch (e) {

                }
            });
        } catch (e) {

        }
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

            console.log("textid:::" + textid);
//                  jsonOBJ.ids.push(textid.toLowerCase());
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
//                    basicDatas[columnsArray[i]] = encodeURIComponent(hiddenVal);

                }

            }

        });
        try {
            $(".visionRegisterMaterialCreation :input").each(function () {

                try {
                    var textid = $(this).attr("id");
                    var type = $(this).attr("type");
                    var textval = $(this).val();
                    delete basicDatas [textid];
                    basicDatas[textid] = textval;
                } catch (e) {

                }
            });
        } catch (e) {

        }
    }
    var controltype = controlInd;
    var ERP_COMMENT = returnReason;
    var baskettype = $("#baskettypehid").val();
    var formIds = $("#formId").val();
    var gridId = basicDatas['gridId'];
    if (updatedUser != null && updatedUser != '' && updatedUser != 'null')
    {
        basicDatas['updatedUser'] = updatedUser;
//            basicDatas['CREATE_BY'] = updatedUser;
        // basicDatas['O_APPR_BY'] = updatedUser;
    }



    //  jsobj.basicData = basicDatas;

    console.log("dataarray:::::::" + JSON.stringify(basicDatas));
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
//            $(".loaderwait").hide();
//            showLoader();
        }, loadError: function (xhr, status, error) {
//            stopLoader();
            throw new Error(error);
        }, loadComplete: function (data)
        {
//            stopLoader();
        },
        success: function (response) {
            if (!(response != null && response != undefined && response != "")) {
                stopLoader();
            }
            console.log("response::::" + response);
            var jsonObj = JSON.parse(response);
            var message = jsonObj.Message;
            var flag = jsonObj.messageFlag;
            var batchId = jsonObj.batchId;
            var mocrTransferTOSAPFlag = jsonObj.mocrTransferTOSAPFlag;
            if (mocrTransferTOSAPFlag != null && mocrTransferTOSAPFlag != undefined
                    && mocrTransferTOSAPFlag != "" && mocrTransferTOSAPFlag == "Y") {
                stopLoader();
                showMOCRProcessMessage("The MOCR process on Transfer to SAP has been initiated. You will be notified once it is completed.");
                processStepsInterval[batchId] = setInterval(function () {
                    // this will run after every 5 seconds
                    refreshMOCRProcessStatus(batchId);
                }, 500);
                return;
            }
            var onSubValMsgEnableAILensFlag = jsonObj.onSubValMsgEnableAILensFlag;
//                if (controlInd == 'Transfer To ERP') {
//                    flag = jsonObj.messageFlag;
//                }

            var url = jsonObj.url;
            var count = jsonObj.count;

            var baskettype1 = $('#baskettypehid1').val();
            console.log("baskettype1:::" + baskettype1);
            if (onSubValMsgEnableAILensFlag != null && onSubValMsgEnableAILensFlag != undefined
                    && onSubValMsgEnableAILensFlag != '' && onSubValMsgEnableAILensFlag == 'Y') {
                openAINavigation();
                var rawMessage = jsonObj.Message;

// STEP 1: Remove all HTML tags
                var textMessage = rawMessage.replace(/<[^>]*>/g, "").trim();

// STEP 2: Split at the first colon
                var colonIndex = textMessage.indexOf(":");
                var title = textMessage.substring(0, colonIndex).trim();
                var remaining = textMessage.substring(colonIndex + 1).trim();

// STEP 3: Split remaining messages by semicolon
                var parts = remaining.split(";").map(p => p.trim()).filter(p => p);

// STEP 4: Build clean HTML
                var innerHtml = "<strong class='error-title'>" + title + ":</strong>";

                innerHtml += "<ul class='error-list'>";
                parts.forEach(err => {
                    innerHtml += "<li><span class='arrow'>&#10095;</span> " + err + "</li>";
                });
                innerHtml += "</ul>";
                var message =
                        "<div class='onSubEnableAILensClass' id='onSubEnableAILensClass'>" +
                        innerHtml +
                        "</div>";



                defaultAITypingBasedOnResponse(message);
            } else {

                var dialogSplitMessage = dialogSplitIconText(message, flag);
                // //////////////////alert(success_msg);

                $("#dialogsucess").html(dialogSplitMessage);
                //$("#dialog1").html(message);

                var dailogProps = {};
                dailogProps.title = (labelObject['Message'] != null ? labelObject['Message'] : 'Message');
                dailogProps.modal = true;
                if (flag)
                        //  if (message.lastIndexOf("Successfully") > -1 || message.lastIndexOf("Failed") > -1)
                        {
                            dailogProps.width = 300;
//                    dailogProps.minWidth = 300;
//                    dailogProps.maxWidth = 450;
//            dailogProps.maxHeight = 250;
                            dailogProps.height = 'auto';
                            dailogProps.minHeight = 'auto';
                            dialogWidth(message, dailogProps);
//                    dailogProps.minHeight = 130;
                        } else
                {

                    /* css for the deafult  properties 
                     dailogProps.width = 400;
                     dailogProps.minWidth = 300;
                     dailogProps.maxWidth = 450;
                     dailogProps.height = 300;
                     dailogProps.minHeight = 130;
                     css for the deafult  properties  */

//                    var messagecontent = $(message).text();
                    if (message != null) {
                        var messagecount = message.length;
                        if (messagecount >= 600)
                        {
                            dailogProps.height = 300;
                            dailogProps.width = 600;
                        } else
                        {
                            dailogProps.height = "auto";
                            dailogProps.width = "auto";
                        }
                    }


//            dailogProps.maxHeight = 250;

                }

                dailogProps.buttons = [];
                dailogProps.fluid = true;

                dailogProps.open = function () {
                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(this).closest(".ui-dialog").addClass("visionFormDataDialogSuccess");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");

                };
                dailogProps.beforeClose = function () {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                };
                dailogProps.close = function () {
                    if (flag)
                    {
                        var duplMergeConfig = $("#duplMergeConfig").val();
                        if (duplicateCheckMergeFlag == 'Y' && duplMergeConfig != null && duplMergeConfig != '') {
                            mergeDataFromSourceToMaster(masterRecordData)
                        } else {

                            $("#dxpFormContent").empty();
                            $("#dxpFormContent").hide();
                            $("#dxpFromTab").hide();
//                        $("#dxp2TabsWithGrid").addClass("dxpTabBlue active");
//                        $("#dxp2TabsWithGridContent").show();
                            var basketNameValId = $("#basketNameValId").text();
                            let el = document.getElementById(gridId);
                            try {
                                if (el != null) {
                                    refreshGrid(gridId);
                                    if (fioriThemeCheck) {

                                        showSelectedTabContent(null, 'dxp2TabsWithGrid', 'dxp2TabsWithGridContent');

                                    } else {
                                        showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', basketNameValId, 'N');
                                    }
                                } else {
                                    showSelectedTabContent(null, 'dxpHomeTab', 'dxpHomeContent');
                                }
                            } catch (e) {

                                if (el != null) {

                                    refreshGridData(gridId);
                                    if (fioriThemeCheck) {

                                        showSelectedTabContent(null, 'dxp2TabsWithGrid', 'dxp2TabsWithGridContent');

                                    } else {
                                        showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', basketNameValId, 'N');
                                    }
                                } else {
                                    showSelectedTabContent(null, 'dxpHomeTab', 'dxpHomeContent');
                                }
                            }


                        }

                    }
                };

                dailogProps.buttons.push({
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {
                        //  showLoader();
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");

                        try {
                            $("#dialogbluksubmit").html("");
                            $("#dialogbluksubmit").dialog("close");
                            $("#dialogbluksubmit").dialog("destroy");
                        } catch (e) {

                        }




                    }
                });

                $("#dialogsucess").dialog(dailogProps);
                stopLoader();
            }
        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
//    stopLoader();


}
//forward click && backward click code
function dataOnPopup(paramsData) {
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
                    $.getScript("/VisionDev/js/valid.js");
                    $.getScript("/VisionDev/js/uniquefunctions.js")
                    $('#dialog2').html(response);
                    $("#dialog2").dialog({resizable: false,

                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                        modal: true,
                        height: 'auto',
                        // commented by Ajay minHeight: 'auto',
                        minWidth: '1100',
                        maxWidth: 'auto',
                        fluid: true,
                        beforeClose: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });

//                open: function () {
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

//                    }
                }
            },
            error: function (e) {
                stopLoader();
                sessionTimeout(e);
            }


        });
    }
}


function formdata(jsonData, source) {
    showLoader();
    var roleId = jsonData['ROLE_ID'];
    var hrefColumn = "";
    try {
        var hrefColumn = $("#hrefColumn").val();
    } catch (ee) {
        hrefColumn = "RECORD_NO";
    }
    $.ajax({
        type: "post",
        dataType: 'json',
        url: "formData",
        traditional: true,
        cache: false,
        data: {
            items: JSON.stringify(jsonData)
        },
        success: function (response) {
            stopLoader();
            if (response != null && response != "") {
//                var responseData = JSON.parse(response);
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

                var panellist = response['panellist'];
                var DuplCheckEnableflag = response['ssDuplCheckEnableFlag'];
                $("#ssDuplCheckEnableFlag").val(DuplCheckEnableflag);
                $("#hrefColumn").val(hrefColumn);
                //$("#fourthDxpSplitter").html(form);
                console.log("formData" + form);
                console.log("panellist" + panellist);
//                $("#dxpFormContent").html(form);
                try {
//                  $("#materialBasketId").html(data['baskettype']);
                    $("#materialBasketId").show();
                } catch (e) {
                }

                var basicData = {};
                let formDataObj = {};
                formDataObj.datafield = hrefColumn;
                formDataObj.data = jsonData;
                formDataObj.redirectType = 'form';
                formDataObj.gridId = jsonData['gridId'];
                formDataObj.selectedTabId = '';
                formDataObj.selectingrowindex = jsonData['boundindex'];
                $('#dxpVisionFormRefreshDivSpanImg').attr('data-attr', JSON.stringify(formDataObj));
                $('#dxpVisionFormDataHidden').val(JSON.stringify(formDataObj));
                $('#accdiv').append(response['accForm'])
                $('.viewClassDiv').removeClass('active');
                $('.viewClassBasketDiv').removeClass('active');
                $('.viewGridDiv').removeClass('active');
                $('.viewGridBasketDiv').removeClass('active');
                $("#hintImageID").attr('onclick', 'productInnerPageGuideIntro()');
                try {
                    refreshFormDatawithId("dxpVisionFormRefreshDivSpanImg");
                } catch (er) {
                    stopLoader();
                }
//                $(".accordian").accordion({
//                    theme: 'energyblue',
//                    collapsible: true,
//                    heightStyle: "content",
//                    active: false,
//                    autoHeight: false,
//                    animate: 300
//                });
//                $('.searchResultMaterialResults').show();
//                $('.accordian h3').bind('click', function () {
//                    var self = this;
//                    setTimeout(function () {
//                        var theOffset = $(self).offset();
//                        $('body,html').animate({scrollTop: theOffset.top - 40});
//                    }, 310); // ensure the collapse animation is done
//                });
//                try {
//                    if (data['TERM'] != null && data['TERM'] != '') {
//                        $("#CLASS_TERM").val(data['TERM']);
//                    }
//                    if (data['CLASS_TERM'] != null && data['CLASS_TERM'] != '') {
//                        $("#CLASS_TERM").val(data['CLASS_TERM']);
//                    }
//                } catch (er) {
//
//                }
//                if (operationName == 'Extend') {
//
//                    searchExtend();
//                } else if (operationName == 'delete') {
//
//                    deleteRequest();
//                } else if (operationName == 'UnDelete') {
//
//                    undeleteRequest();
//                } else if (operationName == 'Change') {
//
//                    newChangeRequest();
//                }
//            validWorkflow();

//                saveOldPanelData();
//                firstPanelShowFlag = false;
//                showSelectedTabContent(event, 'dxpFromTab', 'dxpFormContent', 'View Form', 'N');
//                validWorkflow();
//                $(".visionRegisterMaterialAccordians").find(".ui-accordion-header").addClass('particulorAccDiv');
//                $("#visionRegistartionGenericAccordionSpan img").addClass('accordianDefultImg');
//
//
//                $('.particulorAccDiv').on("mouseover", function () {
//                    $('.particulorAccDiv img').map(function () {
//                        var findAttrt = $(this).attr('src');
//                        var nn = findAttrt.replaceAll('W', '');
//                        $(this).attr('src', nn);
//                    });
//                    var findAttr = $(this).find('.accordianDefultImg').attr('src');
//                    var findedAttr = "";
//                    if (findAttr != null && findAttr != undefined && findAttr != '') {
//                        findedAttr = findAttr.split('.');
//                    }
//                    if (findedAttr != null && findedAttr != undefined && findedAttr != '') {
//                        var srcFileName = findedAttr[0] + 'W.' + findedAttr[1];
//                        $(this).find('.accordianDefultImg').attr('src', srcFileName);
//                    }
//
//
//                });
//
//                $('.particulorAccDiv').on("mouseout", function () {
//                    $('.particulorAccDiv img').map(function () {
//                        var findAttrt = $(this).attr('src');
//                        var nn = findAttrt.replaceAll('W', '');
//                        $(this).attr('src', nn);
//                    });
//                });
//                $("#charAccordianbtnID").draggable({
//                    containment: "body",
//                    start: function () {
//                        $(this).addClass('disableClickAction').addClass('startDragging').removeClass('stopedDragging')   // invenMngmnt.js
//
//
//                    },
//                    stop: function () {
//                        $(this).removeClass('startDragging').addClass('stopedDragging');
//                        setTimeout(function () {
//                            $("#charAccordianbtnID").removeClass('disableClickAction');
//                        }, 400);
//
//                    }
//                });
//                $(".ccGuideInfo").mouseover(function () {
//                    $('#colorBlueID').remove();
//                    var htmlData = "<ul class=\"color_IndicatioUl\"><li class=\"listItemcolorIndication\"><span class=\"autoGenerateline\"></span><span class=\"mfGuideColorIndexText\"> AutoGenerate</span></li>"
//                            + "<li class=\"listItemcolorIndication\"><span class=\"mandatoryline\"></span><span class=\"mfGuideColorIndexText\"> Mandatory </span></li>"
//                            + "<li class=\"listItemcolorIndication\"><span class=\"optionalline\"></span><span class=\"mfGuideColorIndexText\"> Optional </span></li>"
//                            + "<li class=\"listItemcolorIndication\"><span class=\"autopopulateline\"></span><span class=\"mfGuideColorIndexText\"> AutoPopulate </span></li></ul>";
//                    $(this).append('<div id = "colorBlueID">' + htmlData + '</div>');
//                    var template = '<div class="popover custom-popoverSuggestion" role="tooltip">' +
//                            '<div class="arrow"></div>' +
//                            '<h3 class="popover-header"></h3>' +
//                            '<div class="popover-body"></div>' +
//                            '</div>';
//                    $(".ccGuideInfo").popover({content: htmlData, trigger: "hover", position: 'right', html: true, template: template});
//                });
//                $(".ccGuideInfo").mouseover(function () {
//                    $('#colorBlueID').remove();
//                    var htmlData = "<ul class=\"color_IndicatioUl\"><li class=\"\"><span class=\"mfGuideColorIndex\"><svg  height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#000fff\"></svg></span><span class=\"mfGuideColorIndexText\"> AutoGenerate</span></li>"
//                            + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#ff1a1a\"></svg></span><span class=\"mfGuideColorIndexText\"> Mandatory </span></li>"
//                            + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#688280\"></svg></span><span class=\"mfGuideColorIndexText\"> Optional </span></li>"
//                            + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#32a852\"></svg></span><span class=\"mfGuideColorIndexText\"> AutoPopulate </span></li></ul>";
//                    $(this).append('<div id = "colorBlueID"></div>');
//                    $('#colorBlueID').html(htmlData);
//                    $('#colorBlueID').jqxPopover({
//                        showArrow: true,
//                        width: 115,
//                        height: 120,
//                        showCloseButton: false,
//                        position: 'right',
//                        selector: $(this)
//                    });
//                    setTimeout(function () {
//                        $("#colorBlueID").jqxPopover('open');
//                    }, 5000);
//                });
//                var matchcount = 0;
//                var Accordiangrid = "";
//                var gridid = "";
//                $("#accordion").on("accordionbeforeactivate", function (event, ui) {
//                    var privioustabid = $("#SelectedCurrentTabId").val();
//                    var oldDataFlag = false;
//                    var tableName = "";
//                    if (!executed) {
//                        var tabId = (globalTabId != null && globalTabId.indexOf('ERP_SAP') < 0) ? globalTabId : globalErpTab;
//                        if (tabId != null && tabId != undefined) {
//                            if (tabId != null && tabId != undefined) {
//                                $("#SelectedCurrentTabId").val(tabId);
//                            }
//                            tableName = privioustabid;
//                            if (erpglobalId != null && erpglobalId.indexOf('ERP_SAP')) {
//                                $("#previousCurrentTabId").val(erpglobalId);
//
//                            }
//
//                            var jsonOBJ = {};
//                            jsonOBJ.feildIds = [];
//                            jsonOBJ.feildValues = [];
//                            var matchedcount = 0;
//                            var dataView = $("#" + tableName + "_Update").attr("data-view");
//
//                            var errorCount = 0;
//                            if (dataView == "FORM-VIEW")
//                            {
//                                errorCount = 0;
//                                var v_ag = $("#hiddenAccountGroup").val();
//
//                                if (v_ag != null && (v_ag == "Material & Service (Foreign)")) {
//                                    $("#BANKL").attr("data-mandatory", "O");
////                $("#BANKL").prop("disabled", "disabled");
//                                    $("#BANKL").prop("readonly", true);
//                                }
//                                var jsonOBJ = {};
//                                var erpDataGridId = $("#erpDataGridId").val();
//                                var selectedTabOldData = tabsOldData[tableName];
//                                $("table#" + tableName + "_TABLE :input").each(function ()
//                                {
//                                    var id = $(this).attr('id');
//                                    var mand = $(this).attr("data-mandatory");
//                                    var label = $(this).attr("data-label");
//                                    mand = (mand === "M") ? "M" : "O";
//                                    if (label != null && label == "Bank Key(IFSC)" && (v_ag != null && v_ag == "Material & Service (Foreign)")) {
//                                        $("#BANKL").attr("data-regex", "");
//                                    }
//                                    var regex = $(this).attr("data-regex");
//                                    var returnBoolean = regexFunction(id, regex, mand, tableName, label);
//                                    if (returnBoolean == false)
//                                    {
//                                        errorCount++;
//                                        return false;
//                                    }
//                                });
//                                if (errorCount == 0) {
//                                    jsonOBJ.feildIds = [];
//                                    jsonOBJ.feildValues = [];
//                                    console.log(tableName + ":::textid:::");
//                                    var matchedCount = 0;
//                                    var gridIdHiddenValue = "UPDATE";
//                                    $("table#" + tableName + "_TABLE :input").each(function () {
//                                        var textid = $(this).attr("id");
//                                        var type = $(this).attr("type");
//                                        var textval = $(this).val();
//                                        console.log("textid:::" + textid);
//                                        if (type != 'hidden') {
//                                            if (textval != null && textval != '') {
//                                                textval = textval.toUpperCase();
//                                            }
//                                        }
//
//                                        // var type = $(this).attr("type");
//                                        jsonOBJ.feildIds.push(textid);
//                                        if (type != null && type == 'checkbox') {//
//                                            if ($("#" + textid).is(':checked')) {
//                                                textval = "Y";
//                                            } else {
//                                                textval = "N";
//                                            }
//                                        }
//                                        jsonOBJ.feildValues.push(textval);
//                                        if (textid != null && textid.indexOf("AUDIT_ID") > -1)
//                                        {
//                                            basicData[textid] = textval;
//                                        }
//                                        var textOldVal = "";
//                                        if (selectedTabOldData != null) {
//                                            textOldVal = selectedTabOldData[textid];
//
//                                        }
//                                        console.log(textval + ":::" + textid + "::" + textOldVal);
//                                        if (textval != textOldVal) {
//                                            matchedCount++;
//                                        }
//                                        var tableNameHidden = tableName + "_HIDDEN";
//                                        if (textid == tableNameHidden) {
//                                            gridIdHiddenValue = $("#" + textid).val();
//                                        }
//                                    });
//                                    if (gridIdHiddenValue == 'INSERT' && matchedCount == 0) {
//                                        matchedCount = 1;
//                                    }
//                                }
//                            } else if (dataView == "TABLE-VIEW") {
//                                selectedDataArray = gridOperation("update", tableName);
//                                if (selectedDataArray != 0) {
//                                    matchedCount = 1;
//                                }
//                            } else if (dataView == "GRID-VIEW") {
//
//                                selectedDataArray = gridOperation("update", tableName);
//                                if (selectedDataArray != 0) {
//                                    matchedCount = 1;
//                                }
//
//                            }//if 
//
//
//                            if (matchedCount > 0) {
//                                changeflag = true;
//                            }
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
//                            if (tabId != null && tabId != undefined && tabId == tableName) {
//                                changeflag = false;
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
//                                if (selectedDataArray.length != 0 && dataView != "FORM-VIEW") {
//                                    $("#logoutDailog").html((labelObject['Unsaved changes will be lost'] != null ? labelObject['Unsaved changes will be lost'] : 'Unsaved changes will be lost') + ", " + (labelObject['you like to save'] != null ? labelObject['you like to save'] : 'you like to save') + "?");
//                                    $("#logoutDailog").dialog({ resizable: false,
//                                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
//                                        modal: true,
//                                        width: 300,
//                                        height: 135,
//                                        fluid: true,
//                                        buttons: [
//                                            {
//                                                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
//                                                click: function () {
//                                                    $(this).html("");
//                                                    $(this).dialog("close");
//                                                    $(this).dialog("destroy");
//                                                    var newIndex = $(ui.newHeader).index('h3');
//                                                    updaterecordData(selectedDataArray, tableName, "update", "", "", "", newIndex, tabId);
//                                                    //iterationNum=0;
//
//                                                }
//                                            }
//                                            , {
//                                                text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
//                                                click: function () {
//                                                    if (oldDataFlag) {
//                                                        $("#" + secondregRormID).removeClass("accordionContentShow");
//                                                    }
//                                                    $(this).html("");
//                                                    $(this).dialog("close");
//                                                    $(this).dialog("destroy");
//                                                    var newIndex = $(ui.newHeader).index('h3');
//                                                    console.log("newIndex::" + newIndex);
//                                                    accordionSwitchflag = false;
//                                                    changeflag = false;
//                                                    executed = true;
//                                                    if (newIndex > -1) {
//                                                        $("#accordion").accordion({
//                                                            active: newIndex
//                                                        });
//                                                    } else if (newIndex < 0) {
//                                                        $("#accordion").accordion({active: false});
//                                                    }
//                                                    accordionSwitchflag = true;
//                                                }
//                                            }
//                                        ],
//                                        open: function ()
//                                        {
//                                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                                            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
//                                            $(".visionHeaderMain").css("z-index", "999");
//                                            $(".visionFooterMain").css("z-index", "999");
//                                        },
//                                        beforeClose: function (event, ui)
//                                        {
//                                            $(".visionHeaderMain").css("z-index", "99999");
//                                            $(".visionFooterMain").css("z-index", "99999");
//                                        }
//                                    });
//                                } else if (dataView == "FORM-VIEW" && matchedCount > 0) {
//                                    $("#logoutDailog").html((labelObject['Unsaved changes will be lost'] != null ? labelObject['Unsaved changes will be lost'] : 'Unsaved changes will be lost') + ", " + (labelObject['you like to save'] != null ? labelObject['you like to save'] : 'you like to save') + "?");
//                                    $("#logoutDailog").dialog({ resizable: false,
//                                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
//                                        modal: true,
//                                        width: 300,
//                                        height: 135,
//                                        fluid: true,
//                                        buttons: [
//
//                                            {
//                                                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
//                                                click: function () {
//                                                    $(this).html("");
//                                                    $(this).dialog("close");
//                                                    $(this).dialog("destroy");
//                                                    var newIndex = $(ui.newHeader).index('h3');
//                                                    updaterecordData("", tableName, "update", "", "", "", newIndex, tabId);
//                                                    //iterationNum=0;
//
//                                                }
//                                            }
//                                            , {
//                                                text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
//                                                click: function () {
//                                                    if (oldDataFlag) {
//                                                        $("#" + secondregRormID).removeClass("accordionContentShow");
//                                                    }
//                                                    $(this).html("");
//                                                    $(this).dialog("close");
//                                                    $(this).dialog("destroy");
//                                                    var newIndex = $(ui.newHeader).index('h3');
//                                                    console.log("newIndex::" + newIndex);
//                                                    accordionSwitchflag = false;
//                                                    changeflag = false;
//                                                    executed = true;
//                                                    if (newIndex > -1) {
//                                                        $("#accordion").accordion({
//                                                            active: newIndex
//                                                        });
//                                                    } else if (newIndex < 0) {
//                                                        $("#accordion").accordion({active: false});
//                                                    }
//                                                    accordionSwitchflag = true;
//                                                }
//                                            }
//                                        ],
//                                        open: function ()
//                                        {
//                                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                                            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
//                                            $(".visionHeaderMain").css("z-index", "999");
//                                            $(".visionFooterMain").css("z-index", "999");
//                                        },
//                                        beforeClose: function (event, ui)
//                                        {
//                                            $(".visionHeaderMain").css("z-index", "99999");
//                                            $(".visionFooterMain").css("z-index", "99999");
//                                        }
//                                    });
//
//                                } else {
//                                    var results = "No Changes to Save";
//                                    results = (labelObject[results] != null ? labelObject[results] : results);
//                                    var dialogSplitMessage = dialogSplitIconText(results, "Y");
//                                    $("#dialog").html(dialogSplitMessage);
//                                    $("#dialog").dialog({ resizable: false,
//                                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
//                                        modal: true,
//                                        height: 'auto',
//                                        // commented by Ajay minHeight: 'auto',
//                                        minWidth: 300,
//                                        maxWidth: 'auto',
//                                        fluid: true,
//                                        buttons: [{
//                                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
//                                                click: function () {
//                                                    $(this).html("");
//                                                    $(this).dialog("close");
//                                                    $(this).dialog("destroy");
//                                                    //   fetchTabData(tableName);
//                                                    try {
//                                                        // $(tableName).jqxGrid('clearselection');
//                                                    } catch (e) {
//
//                                                    }
//
//
//                                                }
//
//                                            }],
//                                        open: function () {
//                                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                                            $(".visionHeaderMain").css("z-index", "999");
//                                            $(".visionFooterMain").css("z-index", "999");
//                                        },
//                                        beforeClose: function (event, ui)
//                                        {
//                                            $(".visionHeaderMain").css("z-index", "99999");
//                                            $(".visionFooterMain").css("z-index", "99999");
//                                        }
//                                    });
//                                }
//                            }
//                        }
//                    }
//                });

//                $(".ccGuideInfo").mouseout(function () {
//                    $("#colorBlueID").jqxPopover('close');
//                    $('#colorBlueID').remove();
//                });
//                $(".defaultShowCards").hide();
//                $("#accdiv h3").click(function () {
//                    var a = event.target.id;
//                    let self = $(this).offset().top;
//                    console.log(self);
//                    setTimeout(function () {
//                        $('.dxpContentAccPageClass').animate({scrollTop: self - 80}, 'swing');
//                    }, 310);
//                });
            } else {

            }
            // stopLoader();
            //endAjax();
//            stopLoader();

        },
        error: function (e) {
            console.log(e);
            stopLoader();
            sessionTimeout(e);
        }

    });

}

function workflowButtonOnclick(id) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var conf_mesg = $("#" + id).attr('data-conf');
    var success_msg = $("#" + id).attr('data-success-conf');
    var controlInd = $("#" + id).attr("data-value");
    var controlIndmatch = controlInd.toUpperCase();
    if (controlIndmatch.lastIndexOf("DELETE") > -1) {
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "D");
    } else if (controlIndmatch.lastIndexOf("RETURN") > -1) {
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "R");
    } else if (controlIndmatch.indexOf("RETURN") > -1) {
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "R");
    } else if (controlIndmatch.indexOf("APPROVE") > -1) {
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "S");
    } else if (controlIndmatch.indexOf("SUBMIT") > -1) {
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "SB");
    } else if (controlIndmatch.indexOf("TRANSFER") > -1) {
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "T");
    } else {
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "H");
    }

    $("#dialog").html(dialogSplitMessage);
    $("#dialog").dialog({resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        height: 'auto',
//        // commented by Ajay minHeight: 'auto', 
        minWidth: 370,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    try {
                        var controlIndmatch = controlInd.toUpperCase();
                    } catch (e) {

                    }

                    if (controlIndmatch.lastIndexOf("DELETE") > -1) {
                        setReasonListsObj('DELETE');
                        returnReasons(controlInd, success_msg);
                    } else if (controlIndmatch.lastIndexOf("RETURN") > -1) {
                        setReasonListsObj('RETURN');
                        returnReasons(controlInd, success_msg);
                    } else if (controlIndmatch.indexOf("RETURN") > -1) {
                        setReasonListsObj('RETURN');
                        returnReasons(controlIndmatch, success_msg);
                    } else if (controlIndmatch.indexOf("APPROVE") > -1) {
                        setReasonListsObj('APPROVE');
                        forwardworkflow(id)
                    } else if (controlIndmatch.indexOf("SUBMIT") > -1) {
                        setReasonListsObj('SUBMIT');
                        forwardworkflow(id)
                    } else if (controlIndmatch.indexOf("TRANSFER") > -1) {
                        setReasonListsObj('SUBMIT');
                        forwardworkflow(id)
                    } else {
                        returnReasons(controlInd, success_msg);
                    }

//                    returnReasons('RETURN', success_msg);
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

}


function forwardworkflow(id) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var resultArray = registerValidation();
    //  alert("resultArray:::"+resultArray);
    if (resultArray != null && Object.keys(resultArray).length == 0) {
        $(".allErrors").hide();
        setTimeout(function () {
            SaveorUpdate(false, 'Save', '');
        }, 4000);
//        SaveorUpdate(false, 'Save', '');
        var conf_mesg = $("#" + id).attr('data-conf');
        var success_msg = $("#" + id).attr('data-success-conf');
        var duplCheck = $("#" + id).attr('data-dupl-flag');
        var controlInd = $("#" + id).attr("data-value");
        var dataReturnReason = $("#" + id).attr('data-returnreason');
        console.log("success_msg:::" + controlInd + ":::::" + success_msg);
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "S");

        if (duplCheck != null && duplCheck != '' && duplCheck == 'Y')
        {
            if ((dataReturnReason != null && dataReturnReason != '')
                    && dataReturnReason == '1' || dataReturnReason == '6') {
                // if (returnReason != null && returnReason == '6' || returnReason == '1') {
                var msgTitle = controlInd + " Reason";
                var response = "";

                msgTitle = (labelObject[msgTitle] != null ? labelObject[msgTitle] : msgTitle);
                var rejectType = 0;
                try {
                    rejectType = $("#rejectType").val();
                } catch (e) {
                    rejectType = 0;
                }
                if (rejectType == 0)
                {
                    response = "";

                    try {
                        $("#textReason").html("");
                    } catch (et) {
                    }
                    ////////////////////alert("after empty");
                    response += "<div id='textReason'>";
                    response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                    response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";


                    $("#dialog2").html(response);




                } else if (rejectType == 1)
                {
                    response = "";
                    try {
                        $("#reasonDialog").html("");
                    } catch (et) {
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

                    if (rejectData != null && rejectData != '' && rejectDataArray != null && rejectDataArray.length > 0) {
                        response += "<div id='rejectComboBox' class='visionRejectFormComboBox'></div>";
                        response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";

                        $("#dialog2").html(response);
//                                            var rejectDataArray = JSON.parse(rejectData);
                        $("#rejectComboBox").jqxComboBox({source: rejectDataArray, searchMode: 'contains', multiSelect: true, width: 280, height: 25});
                    } else {
                        try {
                            $("#textReason").html("");
                        } catch (et) {
                        }

                        response += "<div id='textReason'>";
                        response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                        response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";


                        $("#dialog2").html(response);

                    }
                } else if (rejectType == 4)
                {
                    response = "";
                    try {
                        $("#reasonDialog").html("");
                    } catch (et) {
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

                    try {
                        $("#textReason").html("");
                    } catch (et) {
                    }



                    ////////////////////alert("after empty");


                    if (rejectData != null && rejectData != '' && rejectDataArray != null && rejectDataArray.length > 0) {
                        response += "<div id='rejectComboBox'  class='visionRejectFormComboBox'></div>";
                        response += "<div id='textReason'>";
                        response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                        response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
                        $("#dialog2").html(response);

                        $("#rejectComboBox").jqxComboBox({source: rejectDataArray,
                            searchMode: 'containsignorecase',
                            multiSelect: true,
                            autoComplete: true,
                            theme: 'energyblue',
                            openDelay: 1,
                            closeDelay: 1,
                            enableSelection: true,
                            width: 280, height: 25});
                    } else {
                        response += "<div id='textReason'>";
                        response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                        response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
                        $("#dialog2").html(response);
                    }


                }
                $("#dialog2").dialog({resizable: false,
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
                                //var returnReason = "";
//                        var selectReason = $("#selectReason").val();
                                var checkBoxdata = "";
                                if (rejectType == 0)
                                {
                                    var textBoxData = '';
                                    try {
                                        textBoxData = $("#reasonId").val();
                                    } catch (et) {
                                        textBoxData = '';
                                    }
                                    //retReasonText = textBoxData;
                                    retReasonText = textBoxData;
                                } else if (rejectType == 1)
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
                                            var comboListBoxdata = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                            //retReasonText = returnReason;
                                            retReasonText = comboListBoxdata;
                                        }
                                    } else {

                                        var textBoxData = '';
                                        try {
                                            textBoxData = $("#reasonId").val();
                                        } catch (et) {
                                            textBoxData = '';
                                        }

                                        //retReasonText = textBoxData;
                                        retReasonText = textBoxData;

                                    }
                                } else if (rejectType == 4)
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

                                            var comboListBoxdata = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                            retReasonText = comboListBoxdata;
                                            var textBoxData = '';
                                            try {
                                                textBoxData = $("#reasonId").val();
                                            } catch (et) {
                                                textBoxData = '';
                                            }
                                            if (textBoxData != null && textBoxData != '')
                                            {
                                                retReasonText = comboListBoxdata + ", " + textBoxData;
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
                                            retReasonText = textBoxData;
//                                                                retReasonText = comboListBoxdata;
                                        }
                                    }
                                }
                                if (!retReasonText)
                                {
                                    ////////////////////////////////////alert("empty"+retReasonText);
                                    $("#dailog_error_id").show();
                                } else if (retReasonText != null)
                                {
                                    $("#dailog_error_id").hide();
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");


                                    // showOnSubmitDuplicates(basicData, ssDuplCheckEnableFlag, controlInd, returnReason, success_msg, retReasonText);
                                    onSubmitIncl(controlInd, retReasonText, success_msg, dataReturnReason);
                                } else
                                {

                                    var returnReason = selectReason;

                                    console.log("comboListBoxdata:::" + comboListBoxdata);
                                    if (comboListBoxdata == '' && comboListBoxdata == null)
                                    {
                                        $("#dailog_error_id").show();
                                    }
                                    //returnReason = returnReason.trim();
                                    if (returnReason != '' && returnReason != null) {
                                        $("#dailog_error_id").hide();
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");

                                        // showOnSubmitDuplicates(basicData, ssDuplCheckEnableFlag, controlInd, returnReason, success_msg, comboListBoxdata);
                                        onSubmitIncl(controlInd, returnReason, success_msg, dataReturnReason);
                                    } else
                                    {
                                        $("#dailog_error_id").show();
                                    }
                                }
                                showLoader();

                            }},
                        {
                            text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                // $("#labeld").empty();

                            }

                        }], open: function () {
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
                    },
//                                        close: function () {  
//                                            $(this).html("");
//                                            $(this).dialog("close");   
//                                            $(this).dialog("destroy");
//                                            // $("#labeld").empty();
//
//                                        }

                });

                //}
            } else {//if(dataReturnReason )
                onSubmitIncl(controlInd, '', success_msg, dataReturnReason);
            }

        } else {
            if ((duplCheck != null && duplCheck != '' && duplCheck == 'N') &&
                    dataReturnReason == '6' || dataReturnReason == '1')
            {
                returnReasons(controlInd, success_msg);

            } else// IF DUPLICATE EMPTY && IF DUPLICATE EMPTY,RETURN REASON EMPTY
            {
                onSubmit(controlInd, '', success_msg, "");
            }
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

function setReasonListsObj(id) {
    var rejectData = '';
    var rejectReasonsObj = '';
    var processWiserejectReasonsObj = '';
    var rejectDataArray = [];
    rejectData = $("#rejectData").val();
    try {
        rejectReasonsObj = $("#rejectReasonsObj").val();
        processWiserejectReasonsObj = $("#processWiserejectReasonsObj").val();

        if (processWiserejectReasonsObj != null && processWiserejectReasonsObj != ''
                && processWiserejectReasonsObj != undefined) {
            var processWiserejectData = JSON.parse(processWiserejectReasonsObj);
            if (processWiserejectData != null && !jQuery.isEmptyObject(processWiserejectData)) {
                var processWiserejectreasons = processWiserejectData [id];
                if (processWiserejectreasons != null && processWiserejectreasons != ''
                        && processWiserejectreasons != undefined) {
                    $("#rejectData").val(JSON.stringify(processWiserejectreasons));

                } else {
                    if (rejectReasonsObj != null && rejectReasonsObj != '' && rejectReasonsObj != undefined) {
                        $("#rejectData").val(rejectReasonsObj);
                    } else {
                        $("#rejectData").val(rejectData);
                    }
                }
            } else {
                if (rejectReasonsObj != null && rejectReasonsObj != '' && rejectReasonsObj != undefined) {
                    $("#rejectData").val(rejectReasonsObj);
                } else {
                    $("#rejectData").val(rejectData);
                }
            }

        } else {
            if (rejectReasonsObj != null && rejectReasonsObj != '' && rejectReasonsObj != undefined) {
                $("#rejectData").val(rejectReasonsObj);
            } else {
                $("#rejectData").val(rejectData);
            }

        }
    } catch (et) {
        $("#rejectData").val(rejectData);
    }
}
function workflowMOCRButtonOnclick(id, gridId, dataField) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var conf_mesg = $("#" + id).attr('data-conf');
    var success_msg = $("#" + id).attr('data-success-conf');
    var controlInd = $("#" + id).attr("data-value");
    var controlIndmatch = controlInd.toUpperCase();
    if (controlIndmatch.lastIndexOf("MOCR VALIDATE") > -1) {
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "V");
    } else if (controlIndmatch.lastIndexOf("MOCR PROCESS") > -1) {
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "P");
    } else {
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "H");
    }

    $("#dialog").html(dialogSplitMessage);
    $("#dialog").dialog({resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        height: 'auto',
//        // commented by Ajay minHeight: 'auto', 
        minWidth: 370,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    try {
                        var controlIndmatch = controlInd.toUpperCase();
                    } catch (e) {

                    }

                    if (controlIndmatch.lastIndexOf("MOCR VALIDATE") > -1) {
                        masterMOCRDataValidate(gridId);
                    } else if (controlIndmatch.lastIndexOf("MOCR PROCESS") > -1) {
                        saveMOCRBulkData(gridId, dataField, controlInd);
                    } else {
                        returnReasons(controlInd, success_msg);
                    }

//                    returnReasons('RETURN', success_msg);
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

}

//forward click && backward click code