/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//function whApplicability_ADANI(ele) {
//    var value = $("#" + ele).val();
//    
//    var downPayment = $("#DOWN_PAYMENT_APPL_TAX").val();
//    if (value == "N") {
//        $("#DOWN_PAYMENT_APPL_TAX").attr('disabled', true);
//        $("#LIABLE").attr('disabled', true);
//        $("#WH_COUNTRY").attr('readonly', true);
////        $("#QSREC").attr('disabled', true); //Recipient Type
//        $("#ddWITHT_TAX").hide();
//        $("#ddWITHT_I_TAX").hide();
//        $("#ddWT_WITHCD_TAX").hide();
//        $("#WT_EXNR_TAX").attr('readonly', true);
//        $("#WT_EXRT_TAX").attr('readonly', true);
//        $("#ddWT_WTEXRS_TAX").hide();
//        $("#WT_EXDF_TAX").datepicker("option", "disabled", true);
//        $("#WT_EXDT_TAX").datepicker("option", "disabled", true);
////        $("#REMARK_TAX").attr('disabled', true);
//        
////        $(".lblMand" + dataArray[i]).hide();
//        
//        $("#WT_WITHCD_TAX").attr('data-mandatory', "O");
//        $("#WITHT_TAX").attr('data-mandatory', "O");
//        $("#WITHT_I_TAX").attr('data-mandatory', "O");
//        $('.lblMandWT_WITHCD_TAX').hide();
//        $('.lblMandWITHT_TAX').hide();
//        $('.lblMandWITHT_I_TAX').hide();
//        
//    } else {
//        $("#DOWN_PAYMENT_APPL_TAX").attr('disabled', false);
//        $("#LIABLE").attr('disabled', false);
//        $("#WH_COUNTRY").attr('readonly', false);
////        $("#QSREC").attr('disabled', false); //Recipient Type
//        $("#ddWITHT_TAX").show();
//        $("#ddWITHT_I_TAX").show();
//        $("#ddWT_WITHCD_TAX").show();
//        $("#WT_EXNR_TAX").attr('readonly', false);
//        $("#WT_EXRT_TAX").attr('readonly', false);
//        $("#ddWT_WTEXRS_TAX").show();
//        $("#WT_EXDF_TAX").datepicker("option", "disabled", false);
//        $("#WT_EXDT_TAX").datepicker("option", "disabled", false);
////        $("#REMARK_TAX").attr('disabled', false);
//
//        if (downPayment.lastIndexOf("Y") > -1) {
//            $("#WT_WITHCD_TAX").attr('data-mandatory', "O");
//            $('.lblMandWT_WITHCD_TAX').hide();
//        } else {
//            $("#WT_WITHCD_TAX").attr('data-mandatory', "M");
//            $('.lblMandWT_WITHCD_TAX').show();
//        }
//        $("#WITHT_TAX").attr('data-mandatory', "M");
//        $("#WITHT_I_TAX").attr('data-mandatory', "M");
//        $('.lblMandWITHT_TAX').show();
//        $('.lblMandWITHT_I_TAX').show();
//        
//        
//    }
//    
//    var tabId = $("#" + ele).attr('data-viewid');
//    psCount(tabId);
//}
//
//function downPaymentAppl_TAX_ADANI(ele){
//    var downPayment = $("#" + ele).val();
//    
//    if (downPayment.lastIndexOf("Y") > -1) {
//            $("#WT_WITHCD_TAX").attr('data-mandatory', "O");
//            $('.lblMandWT_WITHCD_TAX').hide();
//        } else {
//            $("#WT_WITHCD_TAX").attr('data-mandatory', "M");
//            $('.lblMandWT_WITHCD_TAX').show();
//        }
//        
//    var tabId = $("#" + ele).attr('data-viewid');
//    psCount(tabId);
//    
//}
//
//function lowerTDS_ADANI(ele){
//    var value = $("#" + ele).val();
//    
//    if (value == "N"){
//        $("#DOWN_PAYMENT_APPL").attr('disabled', true);
//        $("#ddSECCODE").hide();
//        $("#ddWITHT").hide();
//        $("#ddWITHT_I").hide();
//        $("#ddWT_WITHCD").hide();
//        $("#WT_EXNR").attr('readonly', true);
//        $("#WT_EXRT").attr('readonly', true);
//        $("#ddWT_WTEXRS").hide();
//        $("#WT_EXDF").datepicker("option", "disabled", true);
//        $("#WT_EXDT").datepicker("option", "disabled", true);
//        $("#FIWTIN_EXEM_THR").attr('readonly', true);
//        $("#ddWAERS_TAN").hide();
//    }else{
//        $("#DOWN_PAYMENT_APPL").attr('disabled', false);
//        $("#ddSECCODE").show();
//        $("#ddWITHT").show();
//        $("#ddWITHT_I").show();
//        $("#ddWT_WITHCD").show();
//        $("#WT_EXNR").attr('readonly', false);
//        $("#WT_EXRT").attr('readonly', false);
//        $("#ddWT_WTEXRS").show();
//        $("#WT_EXDF").datepicker("option", "disabled", false);
//        $("#WT_EXDT").datepicker("option", "disabled", false);
//        $("#FIWTIN_EXEM_THR").attr('readonly', false);
//        $("#ddWAERS_TAN").show();
//        
//         $("#SECCODE").attr('data-mandatory', "M");
//            $('.lblMandSECCODE').show();
//        $("#WT_WITHCD").attr('data-mandatory', "M");
//            $('.lblMandWT_WITHCD').show();
//        $("#WT_EXDF").attr('data-mandatory', "M");
//            $('.lblMandWT_EXDF').show();
//        $("#FIWTIN_EXEM_THR").attr('data-mandatory', "M");
//            $('.lblMandFIWTIN_EXEM_THR').show();
//
//    }
//    
//    var tabId = $("#" + ele).attr('data-viewid');
//    psCount(tabId);
//}
//
//function downPaymentAppl_TAN_ADANI(ele){
//    var downPayment = $("#" + ele).val();
//    
//    if (downPayment.lastIndexOf("Y") > -1) {
//            $("#WT_WITHCD").attr('data-mandatory', "O");
//            $('.lblMandWT_WITHCD').hide();
//        } else {
//            $("#WT_WITHCD").attr('data-mandatory', "M");
//            $('.lblMandWT_WITHCD').show();
//        }
//        
//    var tabId = $("#" + ele).attr('data-viewid');
//    psCount(tabId);
//    
//}
//
//function Service_Appl_Adani(ele){
//    var appl = $("#" + ele).val();
//    if (appl.lastIndexOf("N") > -1) {
//            $("#O_1ISERN1").attr('data-mandatory', "O");
//            $("#O_1ISERN2").attr('data-mandatory', "O");
//            $('.lblMandO_1ISERN').hide();
//        } else {
//            $("#O_1ISERN1").attr('data-mandatory', "M");
//            $("#O_1ISERN2").attr('data-mandatory', "M");
//            $('.lblMandO_1ISERN').show();
//        }
//    var tabId = $("#" + ele).attr('data-viewid');
//    psCount(tabId);    
//}
//
//function ECC_Applicability_ADANI(ele){
//    var appl = $("#" + ele).val();
//    if (appl.lastIndexOf("N") > -1) {
//            $("#O_1IEXCD1").attr('data-mandatory', "O");
//            $("#O_1IEXCD2").attr('data-mandatory', "O");
//            $('.lblMandO_1IEXCD').hide();
//            $("#O_1IEXRN").attr('data-mandatory', "O");
//            $('.lblMandO_1IEXRN').hide();
//            $("#O_1IEXRG").attr('data-mandatory', "O");
//            $('.lblMandO_1IEXRG').hide();
//            $("#O_1IEXDI").attr('data-mandatory', "O");
//            $('.lblMandO_1IEXDI').hide();
//            $("#O_1IEXCO").attr('data-mandatory', "O");
//            $('.lblMandO_1IEXCO').hide();
//        } else {
//            $("#O_1IEXCD1").attr('data-mandatory', "M");
//            $("#O_1IEXCD2").attr('data-mandatory', "M");
//            $('.lblMandO_1IEXCD').show();
//            $("#O_1IEXRN").attr('data-mandatory', "M");
//            $('.lblMandO_1IEXRN').show();
//            $("#O_1IEXRG").attr('data-mandatory', "M");
//            $('.lblMandO_1IEXRG').show();
//            $("#O_1IEXDI").attr('data-mandatory', "M");
//            $('.lblMandO_1IEXDI').show();
//            $("#O_1IEXCO").attr('data-mandatory', "M");
//            $('.lblMandO_1IEXCO').show();
//        }
//    var tabId = $("#" + ele).attr('data-viewid');
//    psCount(tabId);    
//}
//function gstClassification_ADANI(ele) {
//    var gstClassification = $("#" + ele).val();
////    if (gstClassification == 1 || gstClassification == 3 || gstClassification == 4) {
////        $("#GST_NUMBER").attr('data-mandatory', "M");
////        $('.lblMandGST_NUMBER').show();
////    } else {
////        $("#GST_NUMBER").attr('data-mandatory', "O");
////        $('.lblMandGST_NUMBER').hide();
////    }
//
//if (gstClassification == 1 || gstClassification == 3 || gstClassification == 4) {
//        $("#GST_NUMBER").attr('data-mandatory', "M");
//        $("#GST_NUMBER").attr('readonly', false);
//        $('.lblMandGST_NUMBER').show();
//    } else {
//        $("#GST_NUMBER").attr('data-mandatory', "O");
//        $("#GST_NUMBER").attr('readonly', true);
//        $("#GST_NUMBER").val('');
//        $('.lblMandGST_NUMBER').hide();
//    }
//
//    var tabId = $("#" + ele).attr('data-viewid');
//    psCount(tabId);
//}


////////////////////updated
function whApplicability_ADANI(ele) {
    var value = $("#" + ele).val();

    if (value == "N") {

        $("#LIABLE").attr('disabled', true);
        $("#WH_COUNTRY").attr('readonly', true);

        $("#ddWITHT_TAX").hide();
        $("#ddWITHT_I_TAX").hide();
        $("#ddWT_WITHCD_TAX").hide();
        $("#WT_EXNR_TAX").attr('readonly', true);
        $("#WT_EXRT_TAX").attr('readonly', true);
//        $("#WTAX_REV_IND").attr('readonly', true);
//        $("#WTAX_REV_IND").attr('disabled', true);
        $("#ddWT_WTEXRS_TAX").hide();

        $("#WT_EXDF_TAX").datepicker("option", "disabled", true);
        $("#WT_EXDT_TAX").datepicker("option", "disabled", true);

        $("#WT_WITHCD_TAX").attr('data-mandatory', "O");
        $("#WITHT_TAX").attr('data-mandatory', "O");
        $("#WITHT_I_TAX").attr('data-mandatory', "O");
        $("#WTAX_REV_IND").attr('data-mandatory', "O");

        $('.lblMandWT_WITHCD_TAX').hide();
        $('.lblMandWITHT_TAX').hide();
        $('.lblMandWITHT_I_TAX').hide();
        $('.lblMandWTAX_REV_IND').hide();

    } else {

        $("#LIABLE").attr('disabled', false);
        $("#WH_COUNTRY").attr('readonly', false);
        $("#WTAX_REV_IND").attr('disabled', false);
        $("#ddWITHT_TAX").show();
        $("#ddWITHT_I_TAX").show();
        $("#ddWT_WITHCD_TAX").show();

        $("#WT_EXNR_TAX").attr('readonly', false);
        $("#WT_EXRT_TAX").attr('readonly', false);
        $("#ddWT_WTEXRS_TAX").show();
        $("#WT_EXDF_TAX").datepicker("option", "disabled", false);
        $("#WT_EXDT_TAX").datepicker("option", "disabled", false);

        $("#WITHT_TAX").attr('data-mandatory', "M");
        $("#WITHT_I_TAX").attr('data-mandatory', "M");
        $("#WTAX_REV_IND").attr('data-mandatory', "M");
        $('.lblMandWITHT_TAX').show();
        $('.lblMandWITHT_I_TAX').show();
        $('.lblMandWTAX_REV_IND').show();

        var with_tax = $("#WITHT_TAX").val();
        var with_i_tax = $("#WITHT_I_TAX").val();


        if (with_tax) {
            $("#WITHT_I_TAX").attr('data-mandatory', "O");
            $('.lblMandWITHT_I_TAX').hide();
        }
        if (with_i_tax) {
            $("#WITHT_TAX").attr('data-mandatory', "O");
            $('.lblMandWITHT_TAX').hide();
        }




    }

    var tabId = $("#" + ele).attr('data-viewid');
    psCount(tabId);
}

function lowerTDS_ADANI(ele) {
    var value = $("#" + ele).val();

    if (value == "N") {
        $("#ddSECCODE").hide();
        $("#ddWITHT").hide();
        $("#ddWITHT_I").hide();
        $("#ddWT_WITHCD").hide();
        $("#WT_EXNR").attr('readonly', true);
        $("#WT_EXRT").attr('readonly', true);
        $("#ddWT_WTEXRS").hide();
        $("#WT_EXDF").datepicker("option", "disabled", true);
        $("#WT_EXDT").datepicker("option", "disabled", true);
        $("#FIWTIN_EXEM_THR").attr('readonly', true);
        $("#ddWAERS_TAN").hide();

        $("#SECCODE").attr('data-mandatory', "O");
        $('.lblMandSECCODE').hide();
        $("#WT_WITHCD").attr('data-mandatory', "O");
        $('.lblMandWT_WITHCD').hide();
        $("#WT_EXDF").attr('data-mandatory', "O");
        $('.lblMandWT_EXDF').hide();
        $("#FIWTIN_EXEM_THR").attr('data-mandatory', "O");
        $('.lblMandFIWTIN_EXEM_THR').hide();

        $("#WT_EXRT").attr('data-mandatory', "O");
        $('.lblMandWT_EXRT').hide();
        $("#WT_WTEXRS").attr('data-mandatory', "O");
        $('.lblMandWT_WTEXRS').hide();
        $("#WITHT_I").attr('data-mandatory', "O");
        $('.lblMandWITHT_I').hide();
        $("#WITHT").attr('data-mandatory', "O");
        $('.lblMandWITHT').hide();
        $("#WT_EXDT").attr('data-mandatory', "O");
        $('.lblMandWT_EXDT').hide();
        $("#WAERS_TAN").attr('data-mandatory', "O");
        $('.lblMandWAERS_TAN').hide();
        $("#WT_EXNR").attr('data-mandatory', "O");
        $('.lblMandWT_EXNR').hide();


    } else {
        $("#ddSECCODE").show();
        $("#ddWITHT").show();
        $("#ddWITHT_I").show();
        $("#ddWT_WITHCD").show();
        $("#WT_EXNR").attr('readonly', false);
        $("#WT_EXRT").attr('readonly', false);
        $("#ddWT_WTEXRS").show();
        $("#WT_EXDF").datepicker("option", "disabled", false);
        $("#WT_EXDT").datepicker("option", "disabled", false);
        $("#FIWTIN_EXEM_THR").attr('readonly', false);
        $("#ddWAERS_TAN").show();

        $("#SECCODE").attr('data-mandatory', "M");
        $('.lblMandSECCODE').show();
        $("#WT_WITHCD").attr('data-mandatory', "M");
        $('.lblMandWT_WITHCD').show();
        $("#WT_EXDF").attr('data-mandatory', "M");
        $('.lblMandWT_EXDF').show();
        $("#FIWTIN_EXEM_THR").attr('data-mandatory', "M");
        $('.lblMandFIWTIN_EXEM_THR').show();

        $("#WT_EXRT").attr('data-mandatory', "M");
        $('.lblMandWT_EXRT').show();
        $("#WT_WTEXRS").attr('data-mandatory', "M");
        $('.lblMandWT_WTEXRS').show();
        $("#WITHT_I").attr('data-mandatory', "M");
        $('.lblMandWITHT_I').show();
        $("#WITHT").attr('data-mandatory', "M");
        $('.lblMandWITHT').show();
        $("#WT_EXDT").attr('data-mandatory', "M");
        $('.lblMandWT_EXDT').show();
        $("#WAERS_TAN").attr('data-mandatory', "M");
        $('.lblMandWAERS_TAN').show();
        $("#WT_EXNR").attr('data-mandatory', "M");
        $('.lblMandWT_EXNR').show();



        var witht = $("#WITHT").val();
        var witht_i = $("#WITHT_I").val();


        if (witht) {
            $("#WITHT_I").attr('data-mandatory', "O");
            $('.lblMandWITHT_I').hide();
        }
        if (witht_i) {
            $("#WITHT").attr('data-mandatory', "O");
            $('.lblMandWITHT').hide();
        }
    }

    var tabId = $("#" + ele).attr('data-viewid');
    psCount(tabId);
}

function gstClassification_ADANI(ele) {
    var gstClassification = $("#" + ele).val();
//    if (gstClassification == 1 || gstClassification == 3 || gstClassification == 4) {
//        $("#GST_NUMBER").attr('data-mandatory', "M");
//        $('.lblMandGST_NUMBER').show();
//    } else {
//        $("#GST_NUMBER").attr('data-mandatory', "O");
//        $('.lblMandGST_NUMBER').hide();
//    }

//    if (gstClassification == 1 || gstClassification == 3 || gstClassification == 4) {
        $("#GST_NUMBER").attr('data-mandatory', "M");
        $("#GST_NUMBER").attr('readonly', false);
        $('.lblMandGST_NUMBER').show();
        $("#GST_NUMBER").removeClass("visionInputDisable");

//    } else {
//        $("#GST_NUMBER").attr('data-mandatory', "O");
//        $("#GST_NUMBER").attr('readonly', true);
//        $("#GST_NUMBER").val('');
//        $('.lblMandGST_NUMBER').hide();
//        $( "#GST_NUMBER" ).addClass("visionInputDisable");  
//
//    }

    var tabId = $("#" + ele).attr('data-viewid');
    psCount(tabId);
}

function ExistingVendor_ADANI(ele) {
    var value = $("#" + ele).val();
    if (value == "N") {
        $("#EXISTING_VENDOR_CODE").attr('data-mandatory', "O");
        $('.lblMandEXISTING_VENDOR_CODE').hide();

    } else {
        $("#EXISTING_VENDOR_CODE").attr('data-mandatory', "M");
        $('.lblMandEXISTING_VENDOR_CODE').show();

    }
}

function gstClassification_UTCL(ele) {
    var gstClassification = $("#" + ele).val();
//    if (gstClassification == 1 || gstClassification == 3 || gstClassification == 4) {
//        $("#GST_NUMBER").attr('data-mandatory', "M");
//        $('.lblMandGST_NUMBER').show();
//    } else {
//        $("#GST_NUMBER").attr('data-mandatory', "O");
//        $('.lblMandGST_NUMBER').hide();
//    }

    if (gstClassification == 1 || gstClassification == 3 || gstClassification == 4 || gstClassification == 'N') {
        $("#GST_NUMBER").attr('data-mandatory', "M");
        $("#GST_NUMBER").attr('readonly', false);
        $('.lblMandGST_NUMBER').show();
    } else if (gstClassification == 2) {
        $("#GST_NUMBER").attr('data-mandatory', "O");
        $("#GST_NUMBER").attr('readonly', false);
        $("#GST_NUMBER").val('');
        $('.lblMandGST_NUMBER').hide();
    } else
    {
        $("#GST_NUMBER").attr('data-mandatory', "O");
        $("#GST_NUMBER").attr('readonly', true);
        $("#GST_NUMBER").val('');
        $('.lblMandGST_NUMBER').hide();
    }

    var tabId = $("#" + ele).attr('data-viewid');
    psCount(tabId);
}
function gstAnnexure2PPBags(ele) {
    var getBusinessType = $("#" + ele).val();

    if (getBusinessType == 'Mining') {
        $("#MINING_SRC").attr('data-mandatory', "M");
        $("#ESTIMTD_RSRVS").attr('data-mandatory', "M");
        $("#MINING_SRC").attr('readonly', false);
        $("#ESTIMTD_RSRVS").attr('readonly', false);
        $('.lblMandMINING_SRC').show();
        $('.lblMandESTIMTD_RSRVS').show();
    } else
    {
        $("#MINING_SRC").attr('data-mandatory', "O");
        $("#ESTIMTD_RSRVS").attr('data-mandatory', "O");
        $("#MINING_SRC").attr('readonly', true);
        $("#ESTIMTD_RSRVS").attr('readonly', true);
        $("#MINING_SRC").val('');
        $("#ESTIMTD_RSRVS").val('');
        $('.lblMandMINING_SRC').hide();
        $('.lblMandESTIMTD_RSRVS').hide();
    }

    var tabId = $("#" + ele).attr('data-viewid');
    psCount(tabId);
}

function validateCodeFlag(ele)
{
    var getCodeConductFlag = $("#" + ele).val();
    if (getCodeConductFlag == 'N')
    {
        $("#MODIFICATION").attr('data-mandatory', "M");
        $("#MODIFICATION").attr('readonly', false);
        $('.lblMandMODIFICATION').show();
    } else
    {
        $("#MODIFICATION").attr('data-mandatory', "O");
        $("#MODIFICATION").attr('readonly', true);
        $('.lblMandMODIFICATION').hide();
    }
}

function validateVendorType(ele)
{
    var vendorType = $("#OB_VEN_TYPE").val();
    if(vendorType == 'Other-specify')
    {
        $("#OB_VEN_TYP_SPECIFY").attr('data-mandatory', "M");
        $("#OB_VEN_TYP_SPECIFY").attr('readonly', false);
        $('.lblMandOB_VEN_TYP_SPECIFY').show();
    } else
    {
        $("#OB_VEN_TYP_SPECIFY").attr('data-mandatory', "O");
        $("#OB_VEN_TYP_SPECIFY").attr('readonly', true);
        $('.lblMandOB_VEN_TYP_SPECIFY').hide();
    }
}
function validateUltratechMgmnt(ele)
{
    var ultratechMgmntValue = $("#REL_UT_MANG").val();
    if(ultratechMgmntValue == 'Y')
    {
        $("#UT_EMP_NAME").attr('data-mandatory', "M");
        $("#UT_EMP_NAME").attr('readonly', false);
        $('.lblMandUT_EMP_NAME').show();
    } else
    {
        $("#UT_EMP_NAME").attr('data-mandatory', "O");
        $("#UT_EMP_NAME").attr('readonly', true);
        $('.lblMandUT_EMP_NAME').hide();
    }
}
function validateLoomType(ele)
{
    var loomTypeValue = $("#LOOM_TYPE").val();
    if(loomTypeValue == 'Others-specify')
    {
        $("#LOOM_TYP_SPECIFY").attr('data-mandatory', "M");
        $("#LOOM_TYP_SPECIFY").attr('readonly', false);
        $('.lblMandLOOM_TYP_SPECIFY').show();
    } else
    {
        $("#LOOM_TYP_SPECIFY").attr('data-mandatory', "O");
        $("#LOOM_TYP_SPECIFY").attr('readonly', true);
        $('.lblMandLOOM_TYP_SPECIFY').hide();
    }
}

//// for cm
function whApplicability_ADANI_CM(ele) {
    var value = $("#" + ele).val();

    if (value == "N") {

        $("#WT_AGENT").attr('disabled', true);
        $("#ddQLAND").hide();
        $("#ddWITHT_I_TAX").hide();
        $("#ddWITHT_TAX").hide();
        $("#ddWT_WITHCD_TAX").hide();
        $("#ddWT_WTEXRS_TAX").hide();
        $("#WT_EXNR").attr('readonly', true);
        $("#WT_EXRT").attr('readonly', true);
        $("#WT_WTSTCD").attr('readonly', true);
        $("#WT_WTEXRS").attr('readonly', true);


        $("#WT_AGTDF").datepicker("option", "disabled", true);
        $("#WT_AGTDT").datepicker("option", "disabled", true);
        $("#WT_EXDF").datepicker("option", "disabled", true);
        $("#WT_EXDT").datepicker("option", "disabled", true);

        $("#WT_WITHCD_TAX").attr('data-mandatory', "O");
        $("#WITHT_TAX").attr('data-mandatory', "O");
        $("#WITHT_I_TAX").attr('data-mandatory', "O");

        $('.lblMandWT_WITHCD').hide();
        $('.lblMandWITHT_TAX').hide();
        $('.lblMandWITHT_I_TAX').hide();

    } else {

        $("#WT_AGENT").attr('disabled', false);
        $("#ddQLAND").show();
        $("#ddWITHT_TAX").show();
        $("#ddWITHT_I_TAX").show();
        $("#ddWT_WITHCD_TAX").show();
        $("#ddWT_WTEXRS_TAX").show();
        $("#WT_EXNR").attr('readonly', false);
        $("#WT_EXRT").attr('readonly', false);
        $("#WT_WTSTCD").attr('readonly', false);
        $("#WT_WTEXRS").attr('readonly', false);

        $("#WT_AGTDF").datepicker("option", "disabled", false);
        $("#WT_AGTDT").datepicker("option", "disabled", false);
        $("#WT_EXDF").datepicker("option", "disabled", false);
        $("#WT_EXDT").datepicker("option", "disabled", false);



        $("#WITHT_TAX").attr('data-mandatory', "M");
        $("#WITHT_I_TAX").attr('data-mandatory', "M");
        $('.lblMandWITHT_TAX').show();
        $('.lblMandWITHT_I_TAX').show();

        var with_tax = $("#WITHT_TAX").val();
        var with_i_tax = $("#WITHT_I_TAX").val();


        if (with_tax) {
            $("#WITHT_I_TAX").attr('data-mandatory', "O");
            $('.lblMandWITHT_I_TAX').hide();
        }
        if (with_i_tax) {
            $("#WITHT_TAX").attr('data-mandatory', "O");
            $('.lblMandWITHT_TAX').hide();
        }


    }

    var tabId = $("#" + ele).attr('data-viewid');
    psCount(tabId);
}

function dateToDMY(str) {
    str = $.trim(str);
    var castedData = "";
    if (str.length > 10) {
        str = str.toString().replace("Date", "");
        var date = new Date(str),
                mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                day = ("0" + date.getDate()).slice(-2);
//               alert('date::' + [date.getFullYear(), mnth, day].join("-"));
        castedData = [day, mnth, date.getFullYear() + 2].join("-");
    } else {
        castedData = str;
    }

    return castedData;
}

function validateMsmedStatus(ele)
{
    var MsmedStatus = $("#BANK_GURNT_FLAG").val();
    if (MsmedStatus == 'Y')
    {
        var d = new Date();
        var toDate = dateToDMY(d)
//      var y = d.getFullYear()+2;
//      d.setFullYear(y);
//       var toDate = d.toISOString().slice(0, 10);

        $("#MSME_REG_NO").attr('data-mandatory', "M");
        $("#MSME_REG_NOE").attr('readonly', false);
        $('.lblMandMSME_REG_NO').show();
        $("#MSME_REG_VALID_DATE").attr('data-mandatory', "M");
        $("#MSME_REG_VALID_DATE").attr('readonly', false);
        $('.lblMandMSME_REG_VALID_DATE').show();
        $("#MSME_REG_VALID_DATE").val(toDate);
        $("#MSME_REG_DATE").attr('data-mandatory', "M");
        $("#MSME_REG_DATE").attr('readonly', false);
        $('.lblMandMSME_REG_DATE').show();
    } else
    {
        $("#MSME_REG_NO").attr('data-mandatory', "O");
        $("#MSME_REG_NO").attr('readonly', true);
        $("#MSME_REG_NO").val("");
        $('.lblMandMSME_REG_NO').hide();
        $("#MSME_REG_VALID_DATE").attr('data-mandatory', "O");
        $("#MSME_REG_VALID_DATE").attr('readonly', true);
        $("#MSME_REG_VALID_DATE").val("");
        $('.lblMandMSME_REG_VALID_DATE').hide();
        $("#MSME_REG_DATE").attr('data-mandatory', "O");
        $("#MSME_REG_DATE").attr('readonly', true);
        $("#MSME_REG_DATE").val("");
        $('.lblMandMSME_REG_DATE').hide();
    }
}
//function validateMsmedStatus(ele)
//{
//    var MsmedStatus = $("#BANK_GURNT_FLAG").val();
//    if (MsmedStatus == 'Y')
//    {
//        $("#MSME_REG_NO").attr('data-mandatory', "M");
//        $("#MSME_REG_NOE").attr('readonly', false);
//        $('.lblMandMSME_REG_NO').show();
//        $("#MSME_REG_VALID_DATE").attr('data-mandatory', "M");
//        $("#MSME_REG_VALID_DATE").attr('readonly', false);
//        $('.lblMandMSME_REG_VALID_DATE').show();
//        $("#MSME_REG_DATE").attr('data-mandatory', "M");
//        $("#MSME_REG_DATE").attr('readonly', false);
//        $('.lblMandMSME_REG_DATE').show();
//
//    } else
//    {
//        $("#MSME_REG_NO").attr('data-mandatory', "O");
//        $("#MSME_REG_NOE").attr('readonly', true);
//        $('.lblMandMSME_REG_NO').hide();
//        $("#MSME_REG_VALID_DATE").attr('data-mandatory', "O");
//        $("#MSME_REG_VALID_DATE").attr('readonly', true);
//        $('.lblMandMSME_REG_VALID_DATE').hide();
//        $("#MSME_REG_DATE").attr('data-mandatory', "O");
//        $("#MSME_REG_DATE").attr('readonly', true);
//        $('.lblMandMSME_REG_DATE').hide();
//    }
//}


function validateVendorCat(ele)
{
    var VendorCat = $("#VENDOR_CAT").val();
    if(VendorCat == 'SERVICE')
    {
        $("#REMARK_TAX").attr('data-mandatory', "M");
        $("#REMARK_TAX").attr('readonly', false);
        $('.lblMandREMARK_TAX').show();
        $("#ddREMARK_TAX").show(); 
              
    } else if (VendorCat == 'MATERIAL & SERVICE')     
    {
        $("#REMARK_TAX").attr('data-mandatory', "M");
        $("#REMARK_TAX").attr('readonly', false);
        $('.lblMandREMARK_TAX').show();
        $("#ddREMARK_TAX").show();
  }
    else
        {
        $("#REMARK_TAX").attr('data-mandatory', "O");
        $("#REMARK_TAX").attr('readonly', true);
        $('.lblMandREMARK_TAX').hide();
        $("#ddREMARK_TAX").hide();
               
    }
    }
    function validateUtclCustColumns(ele)
{
    var CementIndustry = $("#ANNEXURE_CUST_COLUMN5").val();
    var OtherIndustry = $("#ANNEXURE_CUST_COLUMN7").val();
    var OwnsMine = $("#ANNEXURE_CUST_COLUMN16").val();
     var UltratechOfficialsVisit = $("#ANNEXURE_CUST_COLUMN18").val();
      var UltratechOfficialsMeeting = $("#ANNEXURE_CUST_COLUMN19").val();
       var VerticalBussiness = $("#ANNEXURE_CUST_COLUMN22").val();
    if (CementIndustry == 'Y')
    {
        $("#ANNEXURE_CUST_COLUMN6").attr('data-mandatory', "M");
        $("#ANNEXURE_CUST_COLUMN6").attr('readonly', false);
        $('.lblMandANNEXURE_CUST_COLUMN6').show();
        $("#ANNEXURE_CUST_COLUMN6").removeClass("visionInputDisable");
     } else
    {
        $("#ANNEXURE_CUST_COLUMN6").attr('data-mandatory', "O");
        $("#ANNEXURE_CUST_COLUMN6").attr('readonly', true);
        $('.lblMandANNEXURE_CUST_COLUMN6').hide();
         $("#ANNEXURE_CUST_COLUMN6").val('');
        $("#ANNEXURE_CUST_COLUMN6").addClass("visionInputDisable");
    }
    
    if (OtherIndustry == 'Y')
    {
        $("#ANNEXURE_CUST_COLUMN8").attr('data-mandatory', "M");
        $("#ANNEXURE_CUST_COLUMN8").attr('readonly', false);
        $('.lblMandANNEXURE_CUST_COLUMN8').show();
        $("#ANNEXURE_CUST_COLUMN8").removeClass("visionInputDisable");
     } else
    {
        $("#ANNEXURE_CUST_COLUMN8").attr('data-mandatory', "O");
        $("#ANNEXURE_CUST_COLUMN8").attr('readonly', true);
        $('.lblMandANNEXURE_CUST_COLUMN8').hide();
         $("#ANNEXURE_CUST_COLUMN8").val('');
        $("#ANNEXURE_CUST_COLUMN8").addClass("visionInputDisable");
    }
    
    if (OwnsMine == 'Y')
    {
        $("#ANNEXURE_CUST_COLUMN17").attr('data-mandatory', "M");
        $("#ANNEXURE_CUST_COLUMN17").attr('readonly', false);
        $('.lblMandANNEXURE_CUST_COLUMN17').show();
        $("#ANNEXURE_CUST_COLUMN17").removeClass("visionInputDisable");
     } else
    {
        $("#ANNEXURE_CUST_COLUMN17").attr('data-mandatory', "O");
        $("#ANNEXURE_CUST_COLUMN17").attr('readonly', true);
        $('.lblMandANNEXURE_CUST_COLUMN17').hide();
        $("#ANNEXURE_CUST_COLUMN17").val('');
        $("#ANNEXURE_CUST_COLUMN17").addClass("visionInputDisable");
    }
    
    if (UltratechOfficialsMeeting == 'Y')
    {
        $("#ANNEXURE_CUST_COLUMN20").attr('data-mandatory', "M");
        $("#ANNEXURE_CUST_COLUMN20").attr('readonly', false);
        $('.lblMandANNEXURE_CUST_COLUMN20').show();
        $("#ANNEXURE_CUST_COLUMN20").removeClass("visionInputDisable");
     } else
    {
        $("#ANNEXURE_CUST_COLUMN20").attr('data-mandatory', "O");
        $("#ANNEXURE_CUST_COLUMN20").attr('readonly', true);
        $('.lblMandANNEXURE_CUST_COLUMN20').hide();
        $("#ANNEXURE_CUST_COLUMN20").val('');
        $("#ANNEXURE_CUST_COLUMN20").addClass("visionInputDisable");
    }
    
     if (VerticalBussiness == 'Y')
    {
        $("#ANNEXURE_CUST_COLUMN23").attr('data-mandatory', "M");
        $("#ANNEXURE_CUST_COLUMN23").attr('readonly', false);
        $('.lblMandANNEXURE_CUST_COLUMN23').show();
        $("#ANNEXURE_CUST_COLUMN23").removeClass("visionInputDisable");
     } else
    {
        $("#ANNEXURE_CUST_COLUMN23").attr('data-mandatory', "O");
        $("#ANNEXURE_CUST_COLUMN23").attr('readonly', true);
        $('.lblMandANNEXURE_CUST_COLUMN23').hide();
        $("#ANNEXURE_CUST_COLUMN23").val('');
        $("#ANNEXURE_CUST_COLUMN23").addClass("visionInputDisable");
    }
}

