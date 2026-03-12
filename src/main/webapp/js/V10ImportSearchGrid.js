/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function onimportddwChange(selectedGridId) {

    var selectedImportColumn = $("#" + selectedGridId + "browsecolsddw").val();
    console.log("selectedImportColumn::" + selectedImportColumn);
    if (selectedImportColumn != null && selectedImportColumn != '') {
        // importParamSearch(selectedImportColumn);
        $("#" + selectedGridId + "browsecolsHidden").val(selectedImportColumn);


    }
}
function showbrowsepopup(selectedGridId) {
    $("#" + selectedGridId + "importreccount").attr("data-isSearch", "N");
    $("#" + selectedGridId + "importreccount").html("");


    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }


    $("#importsearchcriteria").show();
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

function importParamSearch(selectedGridId) {
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
                $("#" + selectedGridId + "importreccount").html(response['message']);
                var importButton = "   <input id=\"" + selectedGridId + "uploadbutton\" type=\"button\" value=\"Upload\" class=\"visionFileUpload\" onclick=\"importParamSearch('" + selectedGridId + "')\"/>"
                        + " <input id='" + selectedGridId + "browsecols' name='importFile' class=\"upload\" type=\"file\" value=\"Import file\" style=\"display:none;\"/>"
                        + " <input type=\"hidden\" id=\"" + selectedGridId + "browsecolsHidden\" value=\"\"/>"
                        + "";
                $("#" + selectedGridId + "uploadButtonDiv").html(importButton);
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
    $("#" + selectedGridId + "browsecols").click();
}