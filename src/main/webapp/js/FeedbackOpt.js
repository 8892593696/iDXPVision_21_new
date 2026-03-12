


$('.recommended.Rating_recommended').circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: .9,
    fill: {color: 'green'}
});
$('.Rating_sugestions.Rating_sugestions_main').circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: .0,
    fill: {color: '#999'}
});
$("#rating-input-1-5").hover(function () {
    $('.Rating_sugestionsrecommended').html('Perfect');
});
$("#rating-input-1-4").hover(function () {
    $('.Rating_sugestionsrecommended').html('Good');
});
$("#rating-input-1-3").hover(function () {
    $('.Rating_sugestionsrecommended').html('Average');
});
$("#rating-input-1-2").hover(function () {
    $('.Rating_sugestionsrecommended').html('Bad');
});
$("#rating-input-1-1").hover(function () {
    $('.Rating_sugestionsrecommended').html('Disappointing');
});


function uemail(ele) {
    var err = 'dis_' + ele;
    var id = "#" + err;
    var str = $("#email_id").val();
    var hidden_str = $("#hidden_email_id").val();
    if (!str) {
        var msg = "Enter  Email Address";
        err_msg(id, msg);
        return false;
    }
    var patt_seq_spchar = /^(.*)[`!@#$%^&*()=_+{}\[\]\\|:;"'<>?,./\-][~!@`#$%^&*()=_+{}\[\]\\|:;"'<>?,./\-](.*)$/;
    var res_seq_spchar = patt_seq_spchar.test(str);
    if (res_seq_spchar == true) {
        $("#dis_email_id").html("Sequential special </br>characteres are not allowed");
        $("#dis_email_id").show();
        return false;
    } else {
        $("#dis_email_id").html("");
    }
    var patt = /^[a-zA-Z0-9_.-]+@[a-zA-Z]([a-zA-Z0-9.]{2,})+\.[a-zA-Z0-9.]{2,}$/;
    var res = patt.test(str);
    if (str && res == false)
    {
        var msg = "Enter Valid Email";
        err_msg(id, msg);
        return true;
    }

}
function RegisterName(ele) {
    var ele = ele;
    var unwantedSpaceValid = unwantedSpaces(ele);
    if (unwantedSpaceValid == true) {
        var str = $("#" + ele).val();
        var err = 'dis_' + ele;
        var errMsg = '#error_' + ele;
        var patt_an = /^[0-9]+$/;
        var patt_spchar = /^[&()\s]+$/;
        var patt_seq_spchar = /^(.*)[`!@#$%^&*()=_+{}\[\]\\|:;"'<>?,./\-][~!@`#$%^&*()=_+{}\[\]\\|:;"'<>?,./\-](.*)$/;
        var patt = /^[a-zA-Z\s]+$/;
        var res = patt.test(str);
        var res_an = patt_an.test(str);
        var res_spchar = patt_spchar.test(str);
        var res_seq_spchar = patt_seq_spchar.test(str);
        var id = "#" + err;
        if (ele == "first_name") {
            var msg = "Please Enter First Name";
            $("#error_first_name").hide();

        }
        if (ele == "last_name") {
            var msg = "Please Enter Last Name";
        }
        if (!str) {
            err_msg(id, msg);
            return false;
        }
        if (res_an == true) {
            var msg = "Enter only Alphabets";
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
        if (str && res == false)
        {
            var msg = "Enter only Alphabets";
            err_msg(id, msg);
            return false;
        }
        $(id).hide();
        $(errMsg).hide();
        str = str.trim();
        $("#" + ele).val(str);
        return true;

    } else
        return false;
}



function resetAllValues() {
    document.getElementById("myfeedbackform").reset();
    $(".all_errors").hide();
    $("#picshow").hide();
}

$(document).ready(function () {
    resetAllValues();
    $('.rating').click(function () {
        $('.choice').attr("data-value", this.value);
    });
    $("#displayfeedback").jqxNotification({
        width: 250, position: "top-right", opacity: 0.9,
        autoOpen: false, animationOpenDelay: 800, autoClose: true,
        autoCloseDelay: 3000, template: "info"
    });
});
function hideError(ele) {
    var inputData = $("#" + ele).val();
    if (inputData) {
        $("." + ele).html("");
        //                $("." + ele).hide();
    }

}


function isSpecialChar(event, ele, regex, mandatory) {
    var msg = "Special Characters are not Allowed";
    var err = '#dis' + ele;
    //console.log(regex);
    var keyCode = event.keyCode == 0 ? event.charCode : event.keyCode;
    if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(event.keyCode) != -1 && event.charCode != event.keyCode)) {
    } else {
        $(err).html(msg);
        $(err).fadeIn(500);
        $(err).fadeOut(1500);
        return false;
    }

}

function isSpecialCharPM(event, ele, regex, mandatory) {
    var msg = "Special Characters are not Allowed<br> Except + and -";
    var err = '#dis' + ele;
    //console.log(regex);
    var keyCode = event.keyCode == 0 ? event.charCode : event.keyCode;
    if ((keyCode == 43) || (keyCode == 45) || (keyCode >= 48 && keyCode <= 57) || (specialKeys.indexOf(event.keyCode) != -1 && event.charCode != event.keyCode)) {
    } else {
        $(err).html(msg);
        $(err).fadeIn(500);
        $(err).fadeOut(1500);
        return false;
    }

}

/* BIndhu*/

function populateUserDetails(ele) {
    var username = $('#user_name').val();
    var username = username.toUpperCase();

    if (username == null || username == "") {
        $("#error_user_name").html("Please Enter User Name");
        $("#error_user_name").show();

    } else {
        $("#error_user_name").hide();
    }



    $.ajax({
        type: "POST",
        traditional: true,
        dataType: 'json',
        url: 'checkUserDetails',
        cache: false,
        data: {'username': username},
        success: function (response) {
            var result = JSON.stringify(response);
            var flag = response.flag;
            //if (result != null && result != "" && result != "{}") {
            if (result != null && result != "" && flag == 'Y') {

                $('#email_id').val(response.email);
                $('#mobile_number').val(response.mobile);
                $('#first_name').val(response.firstname);
                $('#last_name').val(response.lastname);
                $('#pers_id').val(response.persid);
                $('#orgn_name').val(response.orgnname);
                $('#orgn_id').val(response.orgnid);
                $(".all_errors").hide();

            } else if (flag == 'N') {
                $("#error_user_name").html("Please Enter Valid User Name");
                $("#error_user_name").show();
                $("#dis_first_name").hide();
                $("#dis_email_id").hide();


            } else {
                $("#error_user_name").html("Please Enter User Name");
                $("#error_user_name").show();
            }

        }
    });



}


function submitFeedback()
{

    var username = $("#user_name").val();
    if (username != null || username != "")
    {
        username = username.toUpperCase();
    }

    var firstname = $("#first_name").val();
    if (firstname != null || firstname != "")
    {
        firstname = firstname.toUpperCase();
    }
    var lastname = $("#last_name").val();
    if (lastname != null || lastname != "")
    {
        lastname = lastname.toUpperCase();
    }
    var email = $("#email_id").val();
    if (email != null || email != "")
    {
        email = email.toUpperCase();
    }
    var feedbackcat = $("#feedback_category").val();
    var mobileno = $("#mobile_number").val();
    var orgnname = $("#orgn_name").val();
    var orgnid = $("#orgn_id").val();
    var persid = $("#pers_id").val();
    var primarypurpose = $("#primary_purpose").val();
    var suggestions = $("#user_suggestions").val();
    var userrating = $('.choice').attr("data-value");
// var question8 = $("#profilepic").val();
    // var question9 = $("#profilepichidden").val();
    var first_name = $("#error_first_name").val();
    var email_id = $("#error_email_id").val();
    // var image = $("#profilepichidden").val();

    if (!firstname) {
        $("#error_first_name").html("<br>Please Enter First Name");
        $("#error_first_name").show();
        $("#dis_first_name").hide();
        return false;
    } else if (!email) {
        $("#error_email_id").html("<br>Please Enter Email Id");
        $("#error_email_id").show();
        return false;
    } else if (!primarypurpose) {
        $("#error_purpose").html("<br>Please enter some value");
        $("#error_purpose").show();
        return false;
    } else if (!suggestions) {
        $("#error_improvements").html("<br>Please enter some value");
        $("#error_improvements").show();
        return false;
    } else if (!userrating) {
        $("#error_rating").html("<br>Please enter some value");
        $("#error_rating").show();
        return false;
    } else if (primarypurpose && feedbackcat && suggestions && userrating) {

        $.ajax({
            type: "POST",
            traditional: true,
            dataType: 'json',
            url: 'saveFeedbackData',
            cache: false,
            data: {
                'username': username,
                'firstname': firstname,
                'lastname': lastname,
                'email': email,
                'mobileno': mobileno,
                'feedbackcat': feedbackcat,
                'persid': persid,
                'orgnname': orgnname,
                'orgnid': orgnid,
                'primarypurpose': primarypurpose,
                'suggestions': suggestions,
                'userrating': userrating
            },
            success: function (result) {


                $("#picshow").hide();
                //updateRating();
                // updateFetching();
                $(".Feedback_view").html("");
                $("#displayfeedback").html("<div>Feedback Submitted Successfully</div>");
                $("#displayfeedback").jqxNotification("open");
                $("#primary_purpose").val("");
                $("#user_suggestions").val("");
                $("#first_name").val("");
                $("#email_id").val("");
                $("#mobile_number").val("");
                $(".choice").attr("data-value", 0);
                resetAllValues();
                $("#myfeedbackform").submit();
            },
            error: function (result) {
                resetAllValues();
                sessionTimeout(result);
            }
        });
    } else {
        $(".all_errors").hide();
    }

}



function refreshFeddback(startIndex, endIndex, pageSize) {

    $.ajax({
        type: "POST",
        traditional: true,
        url: 'getFeedbackDataOnScroll',
        cache: false,
        data: {
            'startIndex': startIndex,
            'endIndex': endIndex,
            'pageSize': pageSize
        },
        success: function (result) {
            console.log("result" + result);
            if (result != null && result != '') {
                $('#startIndex').val(endIndex + 1);
                $('#feedbackScrollData').append(result);
            }

        },
        error: function (e) {
            sessionTimeout(e);
        }


    });
}

/* BIndhu*/
