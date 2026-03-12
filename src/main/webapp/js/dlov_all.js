/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function vprsv_All(ele){
    var value = $("#" + ele).val();
    
    if (value == "S"){
        $("#VERPR").attr('data-mandatory', 'O');
        $("#STPRS").attr('data-mandatory', 'M');
        $("#VERPR").parent().prev().attr('class','');
        $("#STPRS").parent().prev().attr('class','labelMandColorRed');
    }else if (value == "V"){
        $("#VERPR").attr('data-mandatory', 'M');
        $("#STPRS").attr('data-mandatory', 'O');
        $("#VERPR").parent().prev().attr('class','labelMandColorRed');
        $("#STPRS").parent().prev().attr('class','');
    }else{
    }
    $(".all_errors").hide();
}

function is_GST_All(ele) {
    var gstValue = $("#" + ele).val().toUpperCase();
    alert(gstValue);
    var errorId = '#dis' + ele;
    var tabId = $("#" + ele).attr('data-viewid');
    var mandatory = $("#" + ele).attr("data-mandatory");
    if (!gstValue && mandatory == 'M') {
            errorMessage(errorId, "Should not be Blank");
            return false;
        }
//    psCount(tabId);    
   // var GST_CODE = $("#GST_CODE").val().toUpperCase();
   var GST_CODE = $("#GST_CODE_BASE").val();
   if(GST_CODE != null && GST_CODE != undefined && GST_CODE != ''){
       GST_CODE = GST_CODE.toUpperCase();
   }
    var TAX_PAN = $("#O_1IPANNO").val().toUpperCase();
    if(TAX_PAN != null && TAX_PAN != undefined && TAX_PAN != ''){
       TAX_PAN = TAX_PAN.toUpperCase();
   }
    var regex = $("#" + ele).attr("data-regex")
    var regex = (regex == "null") ? null : regex;
    if (regex != null) {
            var gstRegx = regex;
        } else {
            var gstRegx = /^(na|NA|Na|nA|URP|urp)|([0-9]{2}([a-zA-Z]){3}(p|P|c|C|h|H|f|F|a|A|t|T|b|B|l|L|j|J|g|G)[a-zA-Z]([0-9]){4}([a-zA-Z]){1}[0-9a-zA-Z]{1}[a-zA-Z]{1}[0-9a-zA-Z]{1})$/;
        }
        
    var patt = new RegExp(gstRegx);
    var res = patt.test(gstValue);
    if (gstValue && !res) {
        errorMessage(errorId, "Enter Valid GST Number");
        return false;
    }else{
        var subGstCode = gstValue.slice(0, 2).toUpperCase();
        var subGstPan = gstValue.slice(2, 12).toUpperCase();
        if ( gstValue && gstValue != "NA" && gstValue != "URP" && TAX_PAN != subGstPan ) {
            err_msg(errorId, "Not Matched with PAN Number");
            return false;
        }
        if ( gstValue && gstValue != "NA" && gstValue != "URP" && GST_CODE != subGstCode ) {
            err_msg(errorId, "Not Matched with Country:Region GST Code");
            return false;
        }
        $(errorId).html("");
        $(errorId).hide();
        return true;
        
    }
}
