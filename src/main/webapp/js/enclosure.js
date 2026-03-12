/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var labelObject = {};
// ENCLOSURE DATA
var fetchEnclosure = false;
window.chckValues = new Array();
function fetchEnclosureData()
{
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    if (fioriThemeCheck) {
        $(".visionRegisterMaterialMainWrapper").html();
        $(".visionRegisterMaterialTableTab").hide();

        try {
            var currentTargetElement = $(event.target).closest("li");
            if (currentTargetElement.length > 0) {
                $("#allTabListMainWrapperId .fioriformTabUlListclass").find("li").removeClass("fioriHighlightTab");
                currentTargetElement.addClass("fioriHighlightTab");
            }
        } catch (e) {
            console.log(e);
        }


    }

//    try {
//       
//        var fullScreenViewFlag = $("#extendedFullScreenViewFlag").val();
//        if (fullScreenViewFlag != null && fullScreenViewFlag != 'undefined'
//                && fullScreenViewFlag != undefined && fullScreenViewFlag != "" && (fullScreenViewFlag == "Y"|fullScreenViewFlag == "NA"))
//        {
//            toggleFullScreen();
//        }
//        $("#extendedFullScreenViewFlag").val("NA");
//    } catch (e) {
//
//    }
    try {
        exitFullScreenMode();
    } catch (e) {

    }

    if (true)
    {
        // $(".ui-state-disabled").next("div").hide();
        if (!fetchEnclosure)
        {
            fetchEnclosure = true;
            var itemsObject = {};

            var baskettype = $('#baskettypehid1').val();
            var recordNo = $("#RECORD_NO").val();
            var plant = $("#PLANT").val();
            var account_group = $("#ACCOUNT_GROUP").val();
            var purchage_org = $("#PURCHASE_ORG").val();
            var company_code = $("#COMPANY_CDE").val();
            var reqNumber = $("#REQ_NUMBER").val();

            itemsObject.recordNo = recordNo;
            itemsObject.plant = plant;
            itemsObject.baskettype = baskettype;
            itemsObject.account_group = account_group;
            itemsObject.purchage_org = purchage_org;
            itemsObject.company_code = company_code;
            itemsObject.reqNumber = reqNumber;
            itemsObject.encEditable = $("#encEditable").val();
            var jsonDataString = JSON.stringify(itemsObject);


            $.ajax({
                url: 'enclosureSelect',
                type: "post",
                traditional: true,
                dataType: 'html',
                cache: false,
                data: {
                    items: jsonDataString

                },
                success: function (result) {

                    alert(result);
                    if (fioriThemeCheck) {
//                        $(".visionRegisterMaterialTableTab").hide();
                        $("#generalDivId").hide();
                        $(".mainEnclousreDataClass").show();
                        $("#enclosureTableFioriId").show();
                        $("#enclosureTableFioriId").html(result);
                    } else {
                        $("#encloseTable").html(result);
                    }
                    fetchEnclosure = false;

                },
                error: function (e) {
                    sessionTimeout(e);
                }

            });
        }
    }
}

function showVendorBrowseButton(param) {

    var validExtension = ['gif', 'png', 'jpg', 'jpeg', 'tif', 'tiff', 'pdf', 'bmp', 'pdf', 'svg'];
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    $(".addIcon_" + param).hide();
    $("#plusIcon_" + param).hide();
    var listval1 = $('#list_' + param).val();
    var encvalue = listval1;
    var suppl_code = $('#RECORD_NO').val();
    var plant = $("#PLANT").val();
    var validExtensionStr = $('#validExt_' + param).val();
    if (validExtensionStr != null && validExtensionStr != '' && validExtensionStr != 'null') {
        validExtension = validExtensionStr.split(",");
    } else {
        validExtensionStr = "gif,png,jpg,jpeg,tif,tiff,pdf,bmp,svg";
    }

    console.log("validExtension:::::" + validExtension);

    console.log("suppl_code::::" + suppl_code + ":::plant::::" + plant);

    var baskettype1 = $("#baskettypehid").val();
    var baskettype = baskettype1.replace(/\s/gi, "_");
    var requestNumber = $("#REQ_NUMBER").val();
    console.log("baskettype::" + baskettype);
//    var listval = encodeURIComponent(listval1);
    console.log("listval:::" + listval1);
    var locate_code = $("#PLANT").val();



    var url = 'UploadEnclosureFiles?recordNo=' + $("#RECORD_NO").val() + '&plant=' + $("#PLANT").val() + '&attachType=' + listval1 + '&reqNumber=' + requestNumber + '&baskettype= ' + baskettype;

    console.log("url::" + url);


    window.chckValues.push(param);

    var attach_val = $("#attchInd_" + param).val();
    console.log("attach_val::" + attach_val);
    $("#browseTdId_" + param).css("width", "55px");

    if (attach_val.trim() == 'Y')
    {

        var id = "#browseTdId_" + param;
        var browseId = "#browseId_" + param;
        $(id).show();
        if ($("#expiryDateInd_" + param).val() != null && $("#expiryDateInd_" + param).val() == 'Y') {
            $("#dateId_" + param).datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: "dd-mm-yy",
                showOn: "button",
                buttonImage: 'images/date_picker_icon.png',
                buttonImageOnly: true,
                buttonText: "Choose Expiry Date"
            });
            $("#dateTdId_" + param).show();
        }
        var params = {recordNo: $("#RECORD_NO").val(),
            plant: $("#PLANT").val(),
            attachType: listval1,
            reqNumber: requestNumber,
            baskettype: baskettype,
            expiryDateInd: $("#expiryDateInd_" + param).val(),
            'attachVMPramSeq': param
//                validExtensions: JSON.stringify(validExtension)
        };
//        var csrfToken =$("input[name='_csrf']").val();
//        if (csrfToken != null && csrfToken != '') {
//            params['_csrf'] = $("input[name='_csrf']").val();
//        }
        $(browseId).on('change', function () {
            const file = $(this)[0].files[0];
            let prompt = '';
            let $row = $(this).closest('tr');
            let $children = $row.children();
            if ($children.length > 0 && $children.first().length > 0) {
                let text = $children.first().text().trim();
                prompt = text !== "" ? text : "Extract data";
            } else {
                prompt = 'Extract data';
            }
            enclosureAttachFileAIReader(file, validExtension, prompt);
        });
        $(browseId).ajaxfileupload({
            'action': "UploadEnclosureFiles",
//            'action': url,
            params: params,
            valid_extensions: validExtension,
//            valid_extensions: ['gif', 'png', 'jpg', 'jpeg', 'tif', 'tiff', 'pdf', 'bmp', 'pdf', 'svg'],
            'onComplete': function (response) {

                // $('#upload').hide();

                $("#wait").css("display", "none");


                var serverResponce = JSON.stringify(response.message);

                $(id).hide();

                if (serverResponce.lastIndexOf("File is Empty,Can't be Uploaded.") > -1) {//File is Empty,Cann't be Uploaded.
                    serverResponce = (labelObject[serverResponce] != null ? labelObject[serverResponce] : serverResponce);
                    var baskettype = $("#baskettypehid").val();
                    var dialogSplitMessage = dialogSplitIconText(serverResponce, "Y");
                    $("#dialog").html(dialogSplitMessage);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        width: 270,
                        height: 'auto',
                        minHeight: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    $(this).dialog("close");

                                    $("#browseTdId_" + param).show();

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

                } else if (serverResponce.lastIndexOf("Size of each file should not exceed 5000KB.") > -1) {//Size of each file should not exceed 5000KB.
                    serverResponce = (labelObject[serverResponce] != null ? labelObject[serverResponce] : serverResponce);
                    var dialogSplitMessage = dialogSplitIconText(serverResponce, "Y");
                    $("#dialog").html(dialogSplitMessage);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        width: 270,
                        height: 'auto',
                        minHeight: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    $(this).dialog("close");
                                    $("#browseTdId_" + param).show();
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



                } else if (serverResponce.lastIndexOf("Image or PDF File Only.") > -1) {//Size of each file should not exceed 5000KB.
                    serverResponce = "Please Upload Valid Extensions (" + validExtensionStr + ") files Only.";
                    var dialogSplitMessage = dialogSplitIconText(serverResponce, "Y");
                    $("#dialog").html(dialogSplitMessage);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        width: 270,
                        height: 'auto',
                        minHeight: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    $(this).dialog("close");
                                    $("#browseTdId_" + param).show();
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


                } else if (serverResponce.lastIndexOf("Please Select Expiry Date.") > -1) {//Size of each file should not exceed 5000KB.
                    serverResponce = (labelObject[serverResponce] != null ? labelObject[serverResponce] : serverResponce);
                    var dialogSplitMessage = dialogSplitIconText((labelObject["Please Select Expiry Date."] != null ? labelObject["Please Select Expiry Date."] : "Please Select Expiry Date."), "Y");
                    $("#dialog").html(dialogSplitMessage);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        width: 270,
                        height: 'auto',
                        minHeight: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    $(this).dialog("close");
                                    $("#browseTdId_" + param).show();
                                    $("#dateTdId_" + param).show();
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


                } else
                {


                    fetchEnclosureData();
                }
                $("body").css({"pointer-events": "auto"});
            },
            'onStart': function () {
                $('#wait').show();
                $("body").css({"pointer-events": "none"});
                $("#wait").css("display", "block");
                // $('#message').hide();
            }
        });
        $("#browseTdId_" + param).show();
        $(id).on('uploadEnd', function (event) {
            var args = event.args;
            var fileName = args.file;
            var serverResponce = args.response;

            $(id).hide();

            if (serverResponce.lastIndexOf("File is Empty,Can't be Uploaded.") > -1) {//File is Empty,Cann't be Uploaded.
                serverResponce = (labelObject[serverResponce] != null ? labelObject[serverResponce] : serverResponce);
                var baskettype = $("#baskettypehid").val();
                var dialogSplitMessage = dialogSplitIconText(serverResponce, "Y");
                $("#dialog").html(dialogSplitMessage);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    width: 270,
                    height: 'auto',
                    minHeight: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                $(this).dialog("close");

                                $("#browseTdId_" + param).show();

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


            } else if (serverResponce.lastIndexOf("Size of each file should not exceed 5000KB.") > -1) {//Size of each file should not exceed 5000KB.
                serverResponce = (labelObject[serverResponce] != null ? labelObject[serverResponce] : serverResponce);
                var dialogSplitMessage = dialogSplitIconText(serverResponce, "Y");
                $("#dialog").html(dialogSplitMessage);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    width: 270,
                    height: 'auto',
                    minHeight: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                $(this).dialog("close");
                                $("#browseTdId_" + param).show();
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



            } else if (serverResponce.lastIndexOf("Image or PDF File Only.") > -1) {//Size of each file should not exceed 5000KB.
                serverResponce = "Please Upload Valid Extensions (" + validExtensionStr + ") files Only.";
                var dialogSplitMessage = dialogSplitIconText(serverResponce, "Y");
                $("#dialog").html(dialogSplitMessage);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    width: 270,
                    height: 'auto',
                    minHeight: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                $(this).dialog("close");
                                $("#browseTdId_" + param).show();
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



            } else if (serverResponce.lastIndexOf("Please Select Expiry Date.") > -1) {//Size of each file should not exceed 5000KB.
                serverResponce = (labelObject[serverResponce] != null ? labelObject[serverResponce] : serverResponce);
                var dialogSplitMessage = dialogSplitIconText("Please Select Expiry Date.", "Y");
                $("#dialog").html(dialogSplitMessage);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    width: 270,
                    height: 'auto',
                    minHeight: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                $(this).dialog("close");
                                $("#browseTdId_" + param).show();
                                $("#dateTdId_" + param).show();
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


            } else
            {


                getEnclosureList(encvalue, param);
            }

        });

    } else
    {
        $("#browseTdId_" + param).hide();
        $("#dateTdId_" + param).hide();

    }
}

// display the lightbox
function showVendorImage(row_id) {

    $('#deleteAttachmentId').hide();
    //  $('#deleteAttachmentId1').hide();
    $('#addAttachmentId').hide();
    $('#thedialog').hide();
    var baskettype = $("#baskettypehid1").val();
    var insertContent = "";
    var imgContent = "";
    var downloadAttachIcon = "";

    insertContent = $('#image_' + row_id).attr("src");
    //imgContent = "<img src='images/delete.gif' id='deleteimgAttachmentId'  class='visionDeleteAttachment' title='Delete' onclick=\"updateVendorEnclousure('delete','image')\">";
    // downloadAttachIcon = "<img src='images/download.png' id='downloadAttachmentId'  class='visionDeleteAttachment' title='Download' onclick=\"downloadVendorEnclousure()\">";


    var maincontent = "";
    // var imgContent="<img src='images/delete.gif' id='deleteimgAttachmentId'  class='visionDeleteAttachment' title='Delete' onclick=\"updateAttachments('delete', 'image','" + tabId + "')\">";
    console.log("baskettype::" + baskettype);
    var role = $('#rolehid').val();
    console.log("enc list:show Image::" + role);
    var encEditable = $("#encEditable").val();
    var encDelete = $("#encDelete").val();
    if (encEditable != null && encEditable == 'N')

    {
        console.log("IF SHOW IMAGE:::");
        $("#imgdialog").attr('src', insertContent);
        $("#deleteimgAttachmentId").hide();
        $("#imgdiv").dialog({resizable: false,
            modal: true,
            title: '',
            width: 1100,
            height: 500,
//          maxWidth: dia_wid,
//          maxHeight: dia_ht,
            fluid: true,
            close: function () {
                // $("#imgdialog").attr('src', "about:blank");
            },
            open: function ()
            {
                $(this).closest(".ui-dialog").addClass("visionFormImageView");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {
                $("#imgdialog").attr('src', '');
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });

//        maincontent = "<img src='" + insertContent + "' height='250' width='450' style='border:solid 1px #000;' />";
//        $("#deleteAttachmentId").hide();
//        $("#downloadAttachmentId").hide();

    } else
    {

        $("#imgdialog").attr('src', insertContent);
        if (encDelete != null && encDelete == 'N')
        {
            $("#deleteimgAttachmentId").hide();
        }
        $("#imgdiv").dialog({resizable: false,
            modal: true,
            title: '',
            width: 1100,
            height: 500,
//          maxWidth: dia_wid,
//          maxHeight: dia_ht,
            fluid: true,
            close: function () {
                //  $("#imgdialog").attr('src', "about:blank");
            },
            open: function ()
            {
                $(this).closest(".ui-dialog").addClass("visionFormImageView");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {
                $("#imgdialog").attr('src', '');
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });
//        $("#deleteImg").html(imgContent);
//        $("#downloadImg").html(downloadAttachIcon);
    }

    $('#hiddenRowId').val(row_id);
    $("#imgdiv #expandAttachmentId").attr(
            "onclick",
            "navigateVendorAttachmentNextPage('" + row_id + "', '', 'image')"
            );
    $("#imagedispid").html(maincontent);
}
//function showVendorImage(row_id) {
//    labelObject = {};
//    try {
//        labelObject = JSON.parse($("#labelObjectHidden").val());
//    } catch (e) {
//
//    }
//
////    alert(row_id);
//    $('#deleteAttachmentId').hide();
//    $('#downloadAttachmentId').show();
//    $('#addAttachmentId').hide();
//
//    var baskettype = $("#baskettypehid1").val();
//    var insertContent = $('#image_' + row_id).attr("src");
//    var maincontent = "";
//    console.log("baskettype::" + baskettype);
//    var role = $('#rolehid').val();
//    console.log("enc list:show Image::" + role);
//    var encEditable = $("#encEditable").val();
//    if (encEditable != null && encEditable == 'N')
//
//    {
//        console.log("IF SHOW IMAGE:::");
//        maincontent = "<img src='" + insertContent + "' height='250' width='450' style='border:solid 1px #000;' />";
//        $("#deleteAttachmentId").hide();
//        $("#downloadAttachmentId").hide();
//    } else
//    {
//        maincontent = "<img src='" + insertContent + "' height='250' width='450' style='border:solid 1px #000;' onload='showVendorDeleteButton()'/>";
//        console.log("ELSE SHOW IMAGE:::");
//    }
//    $('#closeAttachmentId').show();
//    $('#hiddenRowId').val(row_id);
//    $("#imagedispid").html(maincontent);
//    var encloseTable = $("#encloseTable").outerHeight(true);
//    $("#imagedispid").css("height", (encloseTable - 60) + "px", "important");
//    $(".visionFormPdfView").css("height", (encloseTable - 60) + "px", "important");
//}

function showVendorPdf(id)
{
    $("#pdfMM").css('display', 'block');
    $("#pdfMM").html("");

    var baskettype = $("#baskettypehid").val();
    console.log("baskettype::" + baskettype);
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
    var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
    var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
    var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6




    var content = "";
    var deleteIcon = "";
    // $('#deleteAttachmentId').show();
    $('#addAttachmentId').hide();
    content = $('#pdfHiddenId_' + id).val();
    deleteIcon = "<img src='images/delete.gif' id='deleteAttachmentId' class='visionDeleteAttachment' title='Delete' onclick=\"updateVendorEnclousure('delete','pdf')\" >";


    $('#hiddenRowId').val(id);
    var pdfContent = "";
    var browserType = "";
    var role = $('#rolehid').val();
    console.log("enc list:show pdf::" + role);
    var encEditable = $("#encEditable").val();
    var encDelete = $("#encDelete").val();
    var reqNumber = $("#REQ_NUMBER").val();
    if (reqNumber != null) {
        reqNumber = reqNumber;
    } else {
        reqNumber = "";
    }
    if (encEditable != null && encEditable == 'N')
    {
        pdfContent = " <iframe id='thedialog' class='visionFormTheDialog' src='vendorPdfAttachment?sequenceNo=" + id + "&REQ_NUMBER=" + reqNumber + "' ></iframe>";
        // $("#thedialog").attr('src', 'materialPDF/' + id);
        $("#somediv").dialog({resizable: false,
            modal: true,
            title: '',
            width: 1100,
            height: 500,
//          maxWidth: dia_wid,
//          maxHeight: dia_ht,
            fluid: true,
            close: function () {
                $("#thedialog").attr('src', '');
                // $("#thedialog").attr('src', "about:blank");
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
        pdfContent = " <iframe id='thedialog' class='visionFormTheDialog' src='vendorPdfAttachment?sequenceNo=" + id + "&REQ_NUMBER=" + reqNumber + "' ></iframe>";
        //$("#thedialog").attr('src', 'attachments/' + content);

        $("#somediv").dialog({resizable: false,
            modal: true,
            title: '',
            width: 1100,
            height: 500,
//          maxWidth: dia_wid,
//          maxHeight: dia_ht,
            fluid: true,
            close: function () {
                // $("#thedialog").attr('src', "about:blank");
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
        if (encDelete != null && encDelete == 'Y')
        {
            $("#deleteIcon").html(deleteIcon);
        }

        //  frameContent = "<iframe frameborder='0' height='100' width='100' src='tempFiles/" + content + "' style='border:solid 1px #000;' id='iframeid' onload='showDeleteButton()'/>";
    }
    // $('#closeAttachmentId').show();
    console.log(pdfContent);

    $("#thedialog").show();
    $("#somediv #expandPdfAttachmentId").attr(
            "onclick",
            "navigateVendorAttachmentNextPage('" + id + "', '" + reqNumber + "')"
            );
    $("#pdfMM").html(pdfContent);

}


function showDoc(id)
{
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var baskettype = $("#baskettypehid").val();
    console.log("baskettype::" + baskettype);
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
    var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
    var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
    var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6





    $('#deleteAttachmentId').show();
    $('#downloadAttachmentId').hide();
    $('#addAttachmentId').hide();
    var content = $('#pdfHiddenId_' + id).val();
    console.log("content:::::::::" + content)
    $('#hiddenRowId').val(id);
    var frameContent = "";
    var browserType = "";
    var role = $('#rolehid').val();
    console.log("enc list:show pdf::" + role);
    var reqNumber = $("#REQ_NUMBER").val();
    if (reqNumber != null) {
        reqNumber = reqNumber;
    } else {
        reqNumber = "";
    }
    var encEditable = $("#encEditable").val();
    var encDelete = $("#encDelete").val();
    if (encEditable != null && encEditable == 'N')
    {
        console.log("baskettype null if::");
        frameContent = "<iframe class='visionFormPdfView' frameborder='0' height='250' width='450' src='vendorPdfAttachment?sequenceNo=" + id + "&REQ_NUMBER=" + reqNumber + "' style='border:solid 1px #000;' id='iframeid' />";
        $("#deleteAttachmentId").hide();

    } else
    {

        frameContent = "<iframe class='visionFormPdfView' frameborder='0' height='250' width='450' src='vendorPdfAttachment?sequenceNo=" + id + "&REQ_NUMBER=" + reqNumber + "' style='border:solid 1px #000;' id='iframeid' onload='f()'/>";
        if (encDelete != null && encDelete == 'N')
        {
            $('#deleteAttachmentId').hide();
        }
    }

    console.log("frame content::::" + frameContent);
    $('#closeAttachmentId').show();

    $("#imagedispid").html(frameContent);
    var encloseTable = $("#encloseTable").outerHeight(true);
    $("#imagedispid").css("height", (encloseTable - 60) + "px", "important");
    $(".visionFormPdfView").css("height", (encloseTable - 60) + "px", "important");
}
// showing delete button
function showVendorDeleteButton()
{

    $('#deleteAttachmentId').show();
    $('#closeAttachmentId').show();

}


function updateVendorEnclousure(reqtype, type)
{
    console.log("type::::" + type);
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var row_id = $('#hiddenRowId').val();
    var encval = $(".openImage_" + row_id).val();
    var locat_cde = $("#locatcode").val();
    var baskettype1 = $("#baskettypehid").val();
    var baskettype = baskettype1.replace(/\s/gi, "_");
    console.log("updateVendorEnclousure Delete " + baskettype);
    if (reqtype == 'delete') {

        var result = "Are you sure want to Delete";
        result = (labelObject[result] != null ? labelObject[result] : result) + " ?";
        var dialogSplitMessage = dialogSplitIconText(result, "Y");
        $("#dialog").html(dialogSplitMessage);

        // Define the Dialog and its properties.
        $("#dialog").dialog({resizable: false,
            resizable: false,
            modal: true,
            title: (labelObject['Confirmation'] != null ? labelObject['Confirmation'] : 'Confirmation'),
            height: 'auto',
            minHeight: 'auto',
            width: 300,
            fluid: true,
            buttons: [{
                    text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                    click: function () {
                        $(this).dialog('close');

                        //=====

                        $.ajax({
                            type: "POST",
                            url: "DeleteEnclousureFile",
                            cache: false,
                            data:
                                    {
                                        'sequenceno': row_id,
                                        'enc_val': encval,
                                        recordNo: $("#RECORD_NO").val(),
                                        reqNumber: $("#REQ_NUMBER").val(),
                                        'baskettype': baskettype
                                    },
                            traditional: true,
                            dataType: 'html',
                            cache: false,
                            success: function (response) {
                                // alert(response);
//                                $('#deleteAttachmentId').hide();
//                                $('#downloadAttachmentId').hide();
//                                $('#closeAttachmentId').hide();
//                                $("#imagedispid").html("");

                                if (type != null && type == 'pdf')
                                {
                                    $("#thedialog").attr('src', "");
                                    $("#somediv").dialog('close');
                                } else if (type != null && type == 'image')
                                {
                                    $("#imgdialog").attr('src', "");
                                    $("#imgdiv").dialog('close');
                                } else
                                {
                                    $('#deleteAttachmentId').hide();
                                    $('#downloadAttachmentId').hide();
                                    $('#closeAttachmentId').hide();
                                    $("#imagedispid").html("");
                                }

                                fetchEnclosureData();

                            },
                            error: function (e) {
                                sessionTimeout(e);
                            }

                        });

                    }
                },
                {
                    text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                    click: function () {
                        $(this).dialog('close');

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

    } else if (reqtype == 'close') {

        $("#imagedispid").html("");
        $('#deleteAttachmentId').hide();
        $('#downloadAttachmentId').hide();
        $('#closeAttachmentId').hide();

    } else {
        $('#updateBrowse').val('');
        $('#updateBrowse').show();
        $('#addAttachmentId').hide();
    }


}

function downloadVendorEnclousure() {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var hiddenRowId = $("#hiddenRowId").val();
    var reqNumber = $("#REQ_NUMBER").val();
    if (reqNumber != null) {
        reqNumber = reqNumber
    } else {
        reqNumber = "";
    }
    var url = 'downloadAttachFile?sequenceNo=' + hiddenRowId + "&REQ_NUMBER=" + reqNumber;

    //window.location.href = url;
    //window.open(url);
    window.open(url, "_blank");
}

var fetchattach = false;
function fetchAttachmentsTabGridData(tabId, tabOldId, dependentAccorId, currntAccorId, wrapInd) {
    showLoader();
    console.log("fetchAttachmentsTabGridData ::: START");
//    try {
//      
//        var fullScreenViewFlag = $("#extendedFullScreenViewFlag").val();
//        if (fullScreenViewFlag != null && fullScreenViewFlag != 'undefined'
//                && fullScreenViewFlag != undefined && fullScreenViewFlag != "" && fullScreenViewFlag == "Y")
//        {
//            toggleFullScreen();
//        }
//         $("#extendedFullScreenViewFlag").val("NA");
//    } catch (e) {
//
//    }
    try {
        exitFullScreenMode();
    } catch (e) {

    }
    try {
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
        var currentTargetElement = $(event.target).closest("li");
        if (currentTargetElement.length > 0) {
            $("#allTabListMainWrapperId .fioriformTabUlListclass").find("li").removeClass("fioriHighlightTab");
            currentTargetElement.addClass("fioriHighlightTab");
        }
    } catch (e) {
        console.log(e);
    }
    var dependentAccorId = dependentAccorId;
    globalTabId = tabId;
    if (currntAccorId > -1) {
        alert(currntAccorId);
        // startAjax();
        $("[class*=_OLD]").addClass("ui-state-disabled");
        $(".ui-state-disabled").not(dependentAccorId).next("div").hide();
        $(dependentAccorId).next("div").toggle();
        $(".visionAccordionSeperator").remove();
        $("#" + tabId).after("<div class='visionAccordionSeperator'></div>");
        fetchAttachmentsTabGridData(tabOldId, tabId, '', '-1', 1);
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
//                    jsonOBJ.feildIds.push(textid);
//                    jsonOBJ.feildValues.push(textval);

    });
    if (!fetchattach)
    {

        $.ajax({
            type: "post",
            traditional: true,
            // url: "SelectFiles?recordNo=" + record_No + "&&specModelNo= " + specModelNo + "&&baskettype=" + baskettype + "&&reqNumber=" + requestNumber + "&&tabId=" + tabId + "&&enclosureEdit=" + enclosureedit,
            url: "fetchAttachmentTab",
            //url: "SelectFiles?recordNo=" + record_No + "&&baskettype=" + baskettype + "&&reqNumber=" +requestNumber +" &&tabId=" +tabId,
            data: {
                basicData: JSON.stringify(basicData),
                gridId: tabId

            },
            cache: false,
            async: true,
            dataType: 'json', 
            success: function (result) {
                stopLoader();
                if (result != null && result != undefined) {
                    var gridObj = result['gridObj'];
                    var selectedGridInitParamObj = gridObj['gridInitParamObj'];
                    localStorage.removeItem("selectedGridInitParamObj");
                    localStorage.setItem("selectedGridInitParamObj", JSON.stringify(selectedGridInitParamObj));
//                    var panelObj = result['panelObject'];
//                    var attachmentArray = result['attachmentArray'];
                    gridObj['data'] = result['attachmentArray'];
                    gridObj['panelData'] = result['panelObject'];
                    $("#" + tabId + "_defaultValues").remove();
                    $("#mat_creation_form_table").append("<input type='hidden' id='" + tabId + "_defaultValues' />");
                    $("#" + tabId + "_defaultValues").val(gridObj['initialValues']);
                    formGrid(tabId, gridObj, 'N');
                }

            },
            error: function (e) {
                //  alert(e.message)
                sessionTimeout(e);
            }

        });
    }



    console.log("fetchAttachmentsTabGridData ::: END ");
    changeflag = false;
}

function enclosureAttachFileAIReader(file, validExtension, prompt) {
    console.log('file read');
    if (Array.isArray(validExtension)) {
        const fileName = file.name;
        const fileExt = fileName.split('.').pop().toLowerCase();
        if (validExtension.includes(fileExt)) {
            enclosureAttachFileAIReaderPrompt(file, prompt);
        } else {
            console.log("Invalid file type. Allowed extensions: " + validExtension.join(', '));
        }
    }
}

function enclosureAttachFileAIReaderPrompt(file, promptValue) {
    openAINavigation();
    showaiLoader();
    const fileName = file.name;
    const fileExt = fileName.split('.').pop().toLowerCase();
    var data;
    var formattedHTML = "";
    var randomNumber = generateRandomNumber();
    var pdfFileData = new FormData();
    pdfFileData.append("pdfData", file);
    pdfFileData.append("prompt", promptValue);
    pdfFileData.append("extractFileType", 'vendorPdf');
    data = pdfFileData;
    $.ajax({
        url: 'getEnclosureAttachFileAIReaderData',
        type: "POST",
        data: pdfFileData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        success: function (response) {
            if (response != null && response != "") {
                stopaiLoader();
                aiAutoScrollContainer();
                const products = response.split('\n\n---\n\n').filter(Boolean);
                products.forEach(product => {
                    const lines = product.split('\n').map(line => line.trim()).filter(Boolean);
                    formattedHTML += '<ul>';
                    lines.forEach(line => {
                        formattedHTML += '<li>' + line.replace(/\*\*(.*?)\*\*/, '<strong>$1</strong>') + '</li>';
                    });

                    formattedHTML += '</ul>';
                });
            }
            var logData = "<div id='aiApiResultData" + randomNumber + "' class='aiLensResultDataClass' style='width:348px;'>"
                    + '<div class="introGuiderAi" id="introGuiderAi"><p><b>' + promptValue + '</b></p></div>'
                    + "<div>" + formattedHTML + "</div>"
                    + "</div>";
            defaultAITypingBasedOnResponse(logData, '', "", "");
            $(".aiChatgptResponseContainer").append("<div id='aiApiResultDataPdf" + randomNumber + "' class='aiApiResultDataPdf" + randomNumber + "'  style='width:348px; display:none'>" + response + "</div>");
            const table = document.querySelector("#aiApiResultDataPdf" + randomNumber + " table");
            const json = {};
            table.querySelectorAll("tr").forEach(row => {
                const cells = row.querySelectorAll("td");
                if (cells.length >= 2) {
                    const key = cells[0].innerText.trim();
                    const value = cells[1].innerText.trim();
                    if (key && value) {
                        json[key] = value;
                    }
                }
            });
            $("#aiApiResultDataPdf" + randomNumber).remove();
            console.log(json);
            callMappingFunction(json)
        }
        , error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}
function navigateVendorAttachmentNextPage(seqId, reqNumber, type) {
    if (type != null && type !== undefined && type != "" && type === 'image') {
        let imgSrc = $('#image_' + seqId).attr("src");
        let htmlContent = `
                <!DOCTYPE html>
                <html>
                <head>
                  <title>Image Viewer</title>
                  <style>
                    body { margin:0; display:flex; justify-content:center; align-items:center; height:100vh; background:#fafafa; }
                    img { max-width:100%; max-height:100%; border:1px solid #ccc; border-radius:8px; }
                  </style>
                </head>
                <body>
                  <img src="${imgSrc}" alt="Attachment">
                </body>
                </html>
            `;
        let blob = new Blob([htmlContent], {type: "text/html"});
        let url = URL.createObjectURL(blob);

        let a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

    } else {
        // Remove existing form if present
        $("#pdfForm").remove();
        var currentDomain = $("#currentDomain").val();
        let action = 'vendorPdfAttachment'
        if (currentDomain != null && currentDomain != undefined && currentDomain != ''
                && currentDomain == "PRODUCT") {
            action = 'materialPDF'
        }


        // Create form
        var form = $("<form>", {
            method: "POST",
            action: action,
            target: "_blank",
            id: "pdfForm"
        });

        form.append($("<input>", {type: "hidden", name: "sequenceNo", value: seqId}));
        form.append($("<input>", {type: "hidden", name: "REQ_NUMBER", value: reqNumber}));
        form.append($("<input>", {type: "hidden", name: "id", value: seqId}));
        form.append($("<input>", {type: "hidden", name: "tabId", value: seqId}));
        form.append($("<input>", {
            type: "hidden",
            name: "_csrf",
            value: $('meta[name="csrf-token"]').attr('content')
        }));

        // Append and submit
        $("body").append(form);
        form.submit();

        // Clean up
        setTimeout(function () {
            form.remove();
        }, 1000);
    }
}

// vendor pdf extract auto Mapping code start

function callMappingFunction(json) {
    var mappedObj = {};
    var htmlDiv = "<div id='importFileColumnsMapppingOptionsDiv' >"
            + "<img id='importFileColumnsMapppingInfo' onclick='importColumnMappingAssistant()' src='images/Information_icon_Blue.svg' style='float:right;width:20px;' />"
            + "</div>"
            + "<div id='importFileColumnMappingId' class='importFileColumnMappingMain' ></div>";
    $("#messagedialog5").html(htmlDiv);
    $("#messagedialog5").dialog({resizable: false,
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
                    //26-11-2025
                    var tableStr = `
<style>
    .confirm-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 8px;
        font-family: "Segoe UI", "Roboto", "Helvetica", sans-serif;
        font-size: 14px;
        color: #333;
    }
    .confirm-table th, .confirm-table td {
        padding: 10px 12px;
        text-align: left;
    }
    .confirm-table tr:nth-child(odd) {
        background-color: #f9fafb;
    }
    .confirm-table tr:nth-child(even) {
        background-color: #ffffff;
    }
    .confirm-table td:first-child {
        font-weight: 600;
        color: #0a6ed1; /* SAP Blue accent for labels */
        width: 35%;
    }
    .confirm-table td:last-child {
        color: #1d1d1d;
    }
    .confirm-table-container {
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        padding: 10px;
        background: #fff;
    }
</style>

<div class="confirm-table-container">
    <table class="confirm-table">
        <tbody>
`;

                    var i = 0;
                    $.each(mappedObj, function (key, value) {
                        if (i === 0) {
                            $.each(value.feildIds, function (index, val) {
                                var labal = $('#' + val).attr('data-label');
                                var labalStr = '';
                                if (labal != undefined && labal != '') {
                                    labalStr = labal + ` (${val})`;
                                } else {
                                    labalStr = val;
                                }
                                tableStr += `<tr>`
                                        + `<td>${labalStr}</td>`
                                        + `<td>${value.feildValues[index]}</td>`
                                        + `</tr>`;
                            });
                        }
                        i++;
                    });

                    tableStr += `
        </tbody>
    </table>
</div>
`;


                    $("#dialog").html(tableStr);
                    $("#dialog").dialog({resizable: false,
                        resizable: false,
                        modal: true,
                        title: (labelObject['Matched Columns'] != null ? labelObject['Matched Columns'] : 'Matched Columns'),
                        height: 'auto',
                        minHeight: 'auto',
                        width: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
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
                                    $.each(mappedObj, function (key, value) {
                                        let checkbox = $("#cb-switch");
                                        var fioriThemeCheck = checkbox.is(":checked");
                                        $("#" + key).attr('data-fetchInd', true);
                                        var jsonOBJ = {};
                                        jsonOBJ.basicData = basicData;
                                        jsonOBJ.feildIds = [];
                                        jsonOBJ.feildValues = [];
                                        $("#" + key + "_TABLE").find('input, select, textarea').each(function () {
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
                                        $.each(value.feildIds, function (key, data) {
                                            var val = value.feildValues[key];
                                            const index = jsonOBJ.feildIds.indexOf(data);
                                            if (index == -1) {
                                                jsonOBJ.feildValues.push(val);
                                                jsonOBJ.feildIds.push(data);
                                            } else {
                                                jsonOBJ.feildValues[index] = val;
                                            }
                                        });
                                        var finalDataArr = [];
                                        finalDataArr.push(jsonOBJ);
                                        var finalData = JSON.stringify(finalDataArr);
                                        processUpdateDataMapping('update', 'updateRecord', 'FORM-VIEW', finalData, key, basicData);
                                    });
                                    $("#messagedialog5").html("");
                                    $("#messagedialog5").dialog("close");

                                }
                            },
                            {
                                text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                                click: function () {
                                    $(this).dialog('close');

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
                    //26-11-2025
                }
            }],
        open: async function () {
            // var columnDefinitions = $('#' + gridId).jqxGrid('getInstance').columns.records;

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

            var mappedGridColumnsArray = [];
            var mappedGridLabelssArray = [];
            var mappedFileHeadersArray = [];
            var columnMappingObj = {};
            var columnNameInputs = {};
            var columnNameArray = [];
            var inputCount = 0;
            $.each(json, function (key, value) {
                var input = {};
                input['label'] = key;
                input['value'] = value;
                columnNameInputs['input_' + inputCount] = input;
                inputCount++;
                columnNameArray.push(key);
            });
            //som

            //14-11-2025
            var mappData = await getMappingTableData();
            //14-11-2025

            var lengthData = {};  //18-11-2025
            var dataArr = [];
//            var gridID = [];
//            gridID.push('VM_GENERAL_DATA');
//            gridID.push('VM_TAXATION_DATA');
            var gridID = mappData.tables;
            for (const value of gridID) {
                await fetchTabDataDetails(value); // waits properly
                //26-11-2025
                const jsonOBJ = {};
                $("table#" + value + "_TABLE :input").each(function () {
                    var textid = $(this).attr("id");
                    var inputtype = $(this).attr("data-inputtype");
                    var type = $(this).attr("type");
                    const label = $(this).attr("data-label");
                    var textval = $(this).val();
                    if (inputtype != undefined && inputtype == 'MT') {
                        var dataColumn = $(this).attr("data-column");
                        jsonOBJ[label] = dataColumn;
                    } else if (label != undefined && textid != undefined) {
                        jsonOBJ[label] = textid;
                    }
                    console.log("textid:::" + textid);
                    //18-11-2025 
                    var maxLen = $(this).attr("maxlength");
                    if (maxLen != undefined) {
                        lengthData[textid] = +maxLen.trim()
                    }
                    //18-11-2025
                });
                //26-11-2025

                dataArr.push(jsonOBJ);
            }


            //19-11-2025
            if (mappData.defaultColMapSize != undefined) {
                $.each(mappData.defaultColMapSize, function (key, value) {
                    lengthData[key] = +value;
                });
            }
            //19-11-2025




            //som
            var linksData = {};
            var fileHeaderOutputs = {};
            var linkId = 0;
            var maxHeaderLength = 0;
            var matchedColumns = [];
            $.each(dataArr, function (index, obj) {
                $.each(obj, function (key, value) {
                    var output = {};
                    output['label'] = key;
                    output['value'] = value;
                    output['gridId'] = gridID[index];
                    var linkdata = {};
                    linkdata['fromConnector'] = "input_" + linkId;
                    linkdata['fromOperator'] = "operator1";
                    linkdata['fromSubConnector'] = 0;
                    linkdata['toConnector'] = "output_" + linkId;
                    linkdata['toOperator'] = "operator2";
                    linkdata['toSubConnector'] = 0;
                    linksData[linkId] = linkdata;
                    matchedColumns.push(key);
                    maxHeaderLength = key.length > maxHeaderLength ? key.length : maxHeaderLength;
                    fileHeaderOutputs['output_' + linkId] = output;
                    linkId++;
                });
            });
            var data = {
                operators: {
                    operator1: {
                        top: 20,
                        left: 20,
                        properties: {
                            title: 'Attachment fields',
                            inputs: {},
                            outputs: columnNameInputs
                        }
                    },
                    operator2: {
                        top: 20,
                        left: 500,
                        properties: {
                            title: 'data',
                            inputs: fileHeaderOutputs,
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
//            $(".flowchart-operator-connector-label").each(function (i) {
//                var linkData = linksData[i];
//
//                // 🧩 1. Validate linkData before using it
//                if (!linkData || !linkData.fromOperator || !linkData.fromConnector) {
//                    console.warn("⚠️ Skipping — linkData missing for index:", i, linkData);
//                    return; // skip this iteration
//                }
//
//                var text = $(this).text().trim();
//                const textWords = text.split(" ");
//                let matched = false;
//                let matchedOperatorId = null;
//                let matchedConnectorId = null;
//
//                // 🔹 2. Loop through matchedColumns
//                for (const test of matchedColumns) {
//                    let label = typeof test === "string" ? test : test.label;
//                    if (!label)
//                        continue;
//
//                    const words = label.toLowerCase().split(" ");
//                    for (const tw of textWords) {
//                        if (words.includes(tw)) {
//                            matched = true;
//                            // ✅ If it's an object, use IDs directly
//                            if (typeof test === "object") {
//                                matchedOperatorId = test.operatorId;
//                                matchedConnectorId = test.connectorId;
//                            } else {
//                                // ✅ If it's just a label, find matching operator dynamically
//                                $('#importFileColumnMappingId .flowchart-operator').each(function () {
//                                    const opId = $(this).data('operator_id');
//                                    const opData = $('#importFileColumnMappingId').flowchart('getOperatorData', opId);
//
//                                    if (opData && opData.properties && opData.properties.inputs) {
//                                        for (const key in opData.properties.inputs) {
//                                            const labelVal = opData.properties.inputs[key].label;
//                                            if (labelVal && labelVal.includes(label)) {
//                                                matchedOperatorId = opId;
//                                                matchedConnectorId = key;
//                                                break;
//                                            }
//                                        }
//                                    }
//                                });
//                            }
//                            break;
//                        }
//                    }
//                    if (matched)
//                        break;
//                }
//
//                // ✅ 3. Set color based on match
//                if (matched) {
//                    $(this).css("color", "green");
//
//                    const fromOperator = linkData.fromOperator;
//                    const fromConnector = linkData.fromConnector;
//                    const toOperator = matchedOperatorId;
//                    const toConnector = matchedConnectorId;
//
//                    console.log("🔗 Match found for:", text, {
//                        fromOperator,
//                        fromConnector,
//                        toOperator,
//                        toConnector
//                    });
//
//                    // 🧩 4. Check if operators actually exist before linking
//                    const fromOpData = $('#importFileColumnMappingId').flowchart('getOperatorData', fromOperator);
//                    const toOpData = $('#importFileColumnMappingId').flowchart('getOperatorData', toOperator);
//
//                    if (fromOperator && fromConnector && toOperator && toConnector && fromOpData && toOpData) {
//                        try {
//                            // 🕐 Small delay ensures flowchart DOM is ready
//                            setTimeout(() => {
//
//                                const linkId = $('#importFileColumnMappingId').flowchart('addLink', {
//                                    fromOperator,
//                                    fromConnector,
//                                    toOperator,
//                                    toConnector
//                                });
//                                console.log("✅ Auto-linked:", linkId, fromOperator, "→", toOperator);
//                            }, 100);
//                        } catch (err) {
//                            console.error("⚠️ Link creation failed:", err);
//                        }
//                    } else {
//                        console.warn("⚠️ Skipped link creation (missing operator/connector):", {
//                            fromOperator,
//                            fromConnector,
//                            toOperator,
//                            toConnector
//                        });
//                    }
//                } else {
//                    $(this).css("color", "red");
//                }
//            });



            //14-11-2025

//            var tableMap = {};
//            tableMap['Vendor Name'] = 'Name1,Name2';
            var tableMap = mappData.colMappingData;

            $(".flowchart-operator-connector-label").each(function (i) {
                var linkData = linksData[i];

                // 🧩 1. Validate linkData before using it
                if (!linkData || !linkData.fromOperator || !linkData.fromConnector) {
                    console.warn("⚠️ Skipping — linkData missing for index:", i, linkData);
                    return; // skip this iteration
                }

                var text = $(this).text().trim();
                if (tableMap[text] != undefined) {
                    const textWords = tableMap[text].split(",").map(word => word.trim());



                    // 🔹 2. Loop through matchedColumns
                    for (const test of matchedColumns) {
                        let label = typeof test === "string" ? test : test.label;
                        if (!label)
                            continue;
                        for (const tw of textWords) {
                            let matched = false;
                            let matchedOperatorId = null;
                            let matchedConnectorId = null;
                            if (label === tw) {
                                matched = true;
                                // ✅ If it's an object, use IDs directly
                                if (typeof test === "object") {
                                    matchedOperatorId = test.operatorId;
                                    matchedConnectorId = test.connectorId;
                                } else {
                                    // ✅ If it's just a label, find matching operator dynamically
                                    $('#importFileColumnMappingId .flowchart-operator').each(function () {
                                        const opId = $(this).data('operator_id');
                                        const opData = $('#importFileColumnMappingId').flowchart('getOperatorData', opId);

                                        if (opData && opData.properties && opData.properties.inputs) {
                                            for (const key in opData.properties.inputs) {
                                                const labelVal = opData.properties.inputs[key].label;
                                                if (labelVal && labelVal == label) {
                                                    matchedOperatorId = opId;
                                                    matchedConnectorId = key;
                                                }
                                            }
                                        }
                                    });
                                }
                            }
                            if (matched) {
                                $(this).css("color", "green");

                                const fromOperator = linkData.fromOperator;
                                const fromConnector = linkData.fromConnector;
                                const toOperator = matchedOperatorId;
                                const toConnector = matchedConnectorId;

                                console.log("🔗 Match found for:", text, {
                                    fromOperator,
                                    fromConnector,
                                    toOperator,
                                    toConnector
                                });

                                // 🧩 4. Check if operators actually exist before linking
                                const fromOpData = $('#importFileColumnMappingId').flowchart('getOperatorData', fromOperator);
                                const toOpData = $('#importFileColumnMappingId').flowchart('getOperatorData', toOperator);

                                if (fromOperator && fromConnector && toOperator && toConnector && fromOpData && toOpData) {
                                    try {
                                        // 🕐 Small delay ensures flowchart DOM is ready
                                        setTimeout(() => {

                                            const linkId = $('#importFileColumnMappingId').flowchart('addLink', {
                                                fromOperator,
                                                fromConnector,
                                                toOperator,
                                                toConnector
                                            });
                                            console.log("✅ Auto-linked:", linkId, fromOperator, "→", toOperator);
                                        }, 300);
                                    } catch (err) {
                                        console.error("⚠️ Link creation failed:", err);
                                    }
                                } else {
                                    console.warn("⚠️ Skipped link creation (missing operator/connector):", {
                                        fromOperator,
                                        fromConnector,
                                        toOperator,
                                        toConnector
                                    });
                                }
                            } else {
                                $(this).css("color", "red");
                            }
                        }
                    }
                }
            });

            //14-11-2025




//            $(".flowchart-operator-connector-label").each(function (i) {
//                var linkData = linksData[i];
//                var text = $(this).text();
//
//                if (matchedColumns.indexOf(text) > -1) {
//                    $(this).css("color", "green");
//                } else {
//                    $(this).css("color", "red");
//                }
//
//            })

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
                    var value1 = fromOperatorData['properties']['outputs'][fromConnector]['value'];
//                    mappedFileHeadersArray.push(value1);
                    var toOperator = linkData['toOperator']
                    var toConnector = linkData['toConnector'];
                    var toOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', toOperator);
                    var value = toOperatorData['properties']['inputs'][toConnector]['value'];
                    var tolabel = toOperatorData['properties']['inputs'][toConnector]['label'];
                    var gridId = toOperatorData['properties']['inputs'][toConnector].gridId;
                    //18-11-2025
                    if (mappData.defaultColMap != undefined && mappData.defaultColMap.value != undefined) {
                        value1 = mappData.defaultColMap.value;
                    }
                    if (lengthData[value] != undefined) {
                        var maxlength = lengthData[value];
                        value1 = value1.substring(0, maxlength);
                    }
                    var dataInputtype = $('#' + value).attr('data-type')
                    if (dataInputtype == 'MT') {
                        var ipVal = $('#' + value).val()
                        let lastIndex = ipVal.lastIndexOf("-");
                        var opVal = ipVal.substring(0, lastIndex + 1);
                        var dataInputtypeValue = opVal + value1;
                        mappedFileHeadersArray.push(dataInputtypeValue);
                    } else {
                        mappedFileHeadersArray.push(value1);
                    }
                    //18-11-2025

                    mappedGridColumnsArray.push(value);
                    mappedGridLabelssArray.push(tolabel);
                    columnMappingObj[label] = value;
                    var gridFieldObj = {};
                    gridFieldObj.feildIds = mappedGridColumnsArray;
                    gridFieldObj.feildValues = mappedFileHeadersArray;
                    gridFieldObj.basicData = basicData;
                    mappedObj[gridId] = gridFieldObj;
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
                    var gridId = toOperatorData['properties']['inputs'][toConnector].gridId;
                    var mappedValueIndex = mappedGridColumnsArray.indexOf(value);
                    mappedGridColumnsArray.splice(mappedValueIndex, 1);
                    var mappedLabelIndex = mappedGridLabelssArray.indexOf(tolabel);
                    mappedGridLabelssArray.splice(mappedLabelIndex, 1);
                    var fromOperator = linkData['fromOperator']
                    var fromConnector = linkData['fromConnector'];
                    var fromOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', fromOperator);
                    var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                    mappedFileHeadersArray.splice(mappedValueIndex, 1);
                    var gridFieldObj = {};
                    gridFieldObj.feildIds = mappedGridColumnsArray;
                    gridFieldObj.feildValues = mappedFileHeadersArray;
                    gridFieldObj.basicData = basicData;
                    mappedObj[gridId] = gridFieldObj;
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
                    $('#importFileColumnMappingId').one('click', function () {
                        $('#importFileColumnMappingId').flowchart('deleteSelected');
                    });
                    return true;
                }

            });
            $(".flowchart-operator-connector-label").show();
            $(".flowchart-operator-connector-label").css("width", maxHeaderLength * 10 + "px", "!important");
            $(".flowchart-operator").css("width", "auto", "!important");
            $(".flowchart-operator").css("height", "auto", "!important");
            $(".flowchart-operator-title").show();


            const $dataDiv = $('#importFileColumnMappingId');
            const $outputs = $dataDiv.find('.flowchart-operator-inputs-outputs .flowchart-operator-outputs');
            const $inputs = $dataDiv.find('.flowchart-operator-inputs-outputs .flowchart-operator-inputs');
            // Calculate height safely, even if children are absolutely positioned
            const calcHeight = ($el) => {
                if ($el.children().length === 0)
                    return 0;
                return Math.max(...$el.children().map(function () {
                    return $(this).position().top + $(this).outerHeight(true);
                }).get());
            };
            const outputHeight = calcHeight($outputs);
            const inputHeight = calcHeight($inputs);
            const maxHeight = Math.max(outputHeight, inputHeight);
            $dataDiv.css('height', (maxHeight > 0 ? maxHeight + 68 : 'auto') + 'px');

//
//
//            $.each(linksData, function (linkid, linkdata) {
//                $('#importFileColumnMappingId').flowchart('addLink', linkdata);
//            })



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
            $("#importFileColumnsMapppingInfo").on("shown.bs.popover", function () {
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
        },
        beforeClose: function (event, ui)
        {
            $(".popover").remove();
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}

function fetchTabDataDetails(tabId, tabOldId, dependentAccorId, currntAccorId, wrapInd, stgNo) {
    showLoader();
    return new Promise((resolve, reject) => {
        let checkbox = $("#cb-switch");
        var fioriThemeCheck = checkbox.is(":checked");

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

                            resolve(response);


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
    })
//    formPageScroll();
}// end of fetch tab data fun

function processUpdateDataMapping(operation, url, dataView, finalData, tabId, basicData) {
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
                    var resultMessage = `
<div style="
    display: flex;
    align-items: center;
    gap: 10px;
    color: #256029;
    padding: 6px 15px;
    font-family: 'Segoe UI', 'Roboto', sans-serif;
    font-size: 14px;
">
    <span style="
        background-color: #2ecc71;
        color: white;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 22px;
        height: 22px;
        font-weight: bold;
    ">✓</span>
    <span>Matched Column(s) are updated successfully.</span>
</div>
`;
                    defaultAITypingBasedOnResponse(resultMessage);
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

                    var modalObj = {
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                        body: labelObject[dialogSplitMessage] != null ? labelObject[dialogSplitMessage] : dialogSplitMessage,
                    };

                    var buttonArray = [
                        {
                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                            }
                        }
                    ];

//                    showButtonPopupMessage(resultMessage, buttonArray, 'Message');

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
function getMappingTableData() {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: 'getMappingTableData',
            data: {},
            traditional: true,
            cache: false,
            success: function (result) {
                resolve(result);
            }, error: function (jqXHR, textStatus, errorThrown) {
                var dataObj = {};
                var gridID = [];
                gridID.push('VM_GENERAL_DATA');
                dataObj.tables = gridID;
                dataObj.colMappingData = {};
                resolve(dataObj);
            }
        })
    })
}
// vendor pdf extract auto Mapping code end