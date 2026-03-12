/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var shakeOptions = {times: 10, direction: "left", distance: 30};
var ssDatePickerObj = {};
var grioldDataObj = {};
var selecteIndexes = [];
var globalTabId;
var testInterval;
var labelObject = {};
var initialTblViewData = "";
var accordionSwitchflag = true;
var tabSwitchflag = true;
var changeflag = false;
var tabSwitched = true;
var tabsOldData = {};
var oldClickedValue = "";
var currentRole = "";
var chatsObj = {};
var matchCount = 0;
var updateflag = false;
var erpglobalId;
$(document).ready(function () {
//    localStorage.removeItem("cookie_consent_status");
    $("#roleSecure").hide();
    $('#loginModel').keyup(function (event) {
        if (event.which === 13) {
            event.preventDefault();
            loginOpeartions();
        }
    });
    $("#loginModel").on("hidden.bs.modal", function () {
        $("#loginError").html("");
        $("#rsUsername").val("");
        $("#rsPassword").val("");
    });

    localStorage.setItem('previousTabUrl', window.location.href);
    localStorage.setItem('userName', $("#ssUsername").val() || '');

    $(window).on('visibilitychange', function (event) {
        handleTabChange(event);
    });
    const consentKey = "cookie_consent_status";
    const bannerShownKey = "cookie_banner_shown_this_tab";
    function showBanner() {
//        $("#cookieConsentBanner").fadeIn(300);
        $("#cookieConsentBanner").show();
//        $(".smartBIrow").css("opacity", 0.5);
    }

    function hideBanner() {
//        $("#cookieConsentBanner").fadeOut(300);
//        $("#cookiesBannerMainId").fadeOut(300);
        $("#cookieConsentBanner").hide();
        $("#cookiesBannerMainId").hide();
        $("#showPassword").prop("disabled", false);
        $("#rsUsername").prop("disabled", false);
        $("#forgotePassword").removeClass("disabled-link");
        $(".smartBIrow").css("opacity", 1);
        $(".disabled-link").removeClass("disabled-link");

    }
    const bannerAlreadyShown = sessionStorage.getItem(bannerShownKey);
    const storedConsent = localStorage.getItem(consentKey);
//    if (!storedConsent) {
//        setTimeout(showBanner, 1000);
//    }
//      if (storedConsent !=null&& storedConsent !=undefined && storedConsent !="" ) {
//        setTimeout(hideBanner, 100);
//      }

    if (!bannerAlreadyShown) {
//        setTimeout(showBanner, 1000);
        showBanner();
        sessionStorage.setItem(bannerShownKey, "true");
    } else if (storedConsent) {
//        setTimeout(hideBanner, 100);
        hideBanner();
    } else {
        showBanner();
    }

    $("#acceptCookies").on("click", function () {
//        localStorage.removeItem(consentKey, "accepted");
        localStorage.setItem(consentKey, "accepted");
        hideBanner();
        // Add tracking logic here
    });


    $("#denyCookies").on("click", function () {
        localStorage.setItem(consentKey, "denied");
        hideBanner();
    });


    $("#privacyPolicyIdBtn").on("click", function () {
        $("#cookiesBannerMainId").addClass("show");
//        $(".smartBIrow").css("opacity", 0.5);

    });

// Close readable policy
    $("#closeReadableContentId").on("click", function () {
        $("#cookiesBannerMainId").removeClass("show");
//        $(".smartBIrow").css("opacity", 1);
    });


});
const enableCopySelectFlag = localStorage.getItem('enableCopySelectFlag');
if (enableCopySelectFlag != null && enableCopySelectFlag != undefined
        && enableCopySelectFlag != '' && enableCopySelectFlag == 'Y') {
    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey && event.key === "c") {
            event.preventDefault(); // Prevent copy action
        }
    });
    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey && event.key === "a") {
            event.preventDefault(); // Prevent default select all behavior
        }
    });
    document.addEventListener("keydown", function (event) {
        if (
                (event.ctrlKey && event.key === "a") || // Ctrl + A (Select All)
                (event.ctrlKey && event.key === "c") // Ctrl + C (Copy)
                ) {
            event.preventDefault();
            console.log("Ctrl + A and Ctrl + C are disabled.");
        }
    });
}
//KIRAJ
function handleTabChange(event) {
    var currentTabUrl = window.location.href;
    var previousTabUrl = localStorage.getItem('previousTabUrl');
    var prevUserName = localStorage.getItem('userName');
    var currentUserName = $("#ssUsername").val();
    var contextPath = window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
    var originUri = window.location.origin + contextPath;

    if (document.visibilityState === 'visible') {
        if (currentTabUrl && previousTabUrl && currentTabUrl !== previousTabUrl && !isSpecialController(currentTabUrl, previousTabUrl)) {
            window.location.href = previousTabUrl;
        } else {
            const fullPath = window.location.pathname;
            const pathSegments = fullPath.split('/');
            const contextPath = pathSegments.length > 1 ? pathSegments[1] : '';
            const controller = pathSegments.length > 2 ? pathSegments[2] : '';
            if (currentUserName && prevUserName) {
                currentUserName = currentUserName.toUpperCase();
                prevUserName = prevUserName.toUpperCase();
                if (controller && (controller === 'cloudLogout' || controller === 'timeout')) {
                    window.location.href = originUri;
                } else if (currentUserName !== prevUserName) {
                    window.location.href = previousTabUrl;
                }
            }
        }
    }
    localStorage.setItem('previousTabUrl', currentTabUrl);
    localStorage.setItem('userName', currentUserName || '');
}
function isSpecialController(currentUrl, previousUrl) {

    var specialControllers = ["/", "/timeout", "/cloudLogout"];
    var currentUrlFlag = specialControllers.some(endpoint => currentUrl.endsWith(endpoint));
    var previousUrlFlag = specialControllers.some(endpoint => previousUrl.endsWith(endpoint));

    return currentUrlFlag && previousUrlFlag;
}
//KIRAJ
function closeLoginForm() {
    $("#roleSecure").hide();
}
function cloudUserRegister(basicData, currentIndex) {
    showLoader();
    if (basicData != null && basicData != undefined) {
        $.ajax({
            datatype: "json",
            type: "POST",
            url: "register",
            traditional: true,
            cache: false,
            data: {
                basicData: JSON.stringify(basicData),
                currentIndex: currentIndex,
                ssOrgId: "C1F5CFB03F2E444DAE78ECCEAD80D27D",
                ssRole: "CLOUD",
                ssLocale: "en_US"
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                if (response != null && !jQuery.isEmptyObject(response)) {
                    var modalObj = {
                        title: 'Message',
                        body: response['Message']
                    };
                    var buttonArray = [
                        {
                            text: 'Close',
                            click: function () {
                                if (response['MessageFlag']) {
//                                    window.location.href = "https://pilogcloud.com/iVisionDXP/";
                                } else {
                                    $("#myModal").css("display", "none");
                                }
                            },
                            isCloseButton: true
                        }
                    ];
                    modalObj['buttons'] = buttonArray;
                    createModal("myModal", modalObj);
                }
            },
            error: function (e) {
                stopLoader();
                alert('Error: ' + e);
            }
        });
    }
}
$(document).ready(function () {
    $.validator.addMethod('strongPassword', function (value, element) {
        return this.optional(element)
                || value.length >= 8
                && /\d/.test(value)
                && /[a-z]/i.test(value)
                && /[A-Z]/g.test(value)
                && /[0-9]/g.test(value)
                && /[=!\-@._*\$\#\%\^\&\(\)\~\`\<\>\/\?\\\|\{\}\[\]\;\:\'\"\,\+]/.test(value);
    });
    $("#ValidateResetPassword").validate({
        rules: {
            old_password: {
                required: true
            },
            new_password: {
                required: true,
                strongPassword: true,
            },
            confirm_password: {
                required: true,
                equalTo: "#new-password"
            }
        },
        messages: {
            old_password: {
                required: "Please provide an oldpassword",
                strongPassword: "Password must contain atleast 8 characters length and a number, a special character, a lowercase and a uppercase letter"
            },
            new_password: {
                required: "Please provide an new password",
                strongPassword: "Password must contain atleast 8 characters length and a number, a special character, a lowercase and a uppercase letter"
            },
            confirm_password: {
                required: "Please provide confirm password",
                equalTo: "New password and confirm password must be same"
            },
        }
    });
});
function changepassword() {
    showLoader();
    $("#ValidateResetPassword").valid();
    var oldPassword = $("#old-password").val();
    var pwd = $("#new-password").val();
    var password2 = $("#confirm-password").val();
    var secretKey = $('meta[name=keygeneration]').attr("content");
    if (!oldPassword) {
        return false;
    } else if (!pwd) {
        return false;
    } else if (!password2) {
        return false;
    } else if (oldPassword == pwd) {
        return false;
    } else if (pwd == password2)
    {
        var oldPassword = $("#old-password").val();
        var encryptedOldPassword = CryptoJS.AES.encrypt(oldPassword, secretKey);
        $("#old-password").val(encryptedOldPassword);

        var password = $("#new-password").val();
        var encryptedPassword = CryptoJS.AES.encrypt(password, secretKey);
        $("#new-password").val(encryptedPassword);

        var confirm_password = $("#confirm-password").val();
        var encryptedConfirmPassword = CryptoJS.AES.encrypt(confirm_password, secretKey);
        $("#confirm-password").val(encryptedConfirmPassword);
        $('#wait').show();
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: 'changepassword',
            data: {
                old_password: $("#old-password").val(),
                password: $("#new-password").val(),
                confirm_password: $("#confirm-password").val()

            },
            cache: false,
            success: function (response) {
                stopLoader();
                $('#wait').hide();
                if (response != null && !jQuery.isEmptyObject(response)) {
                    var modalObj = {
                        title: 'Message',
                        body: response['message']
                    };
                    var buttonArray = [
                        {
                            text: 'Close',
                            click: function () {
                                if (response['messageFlag']) {
                                    window.location.href = "cloudLogout";
                                } else {
                                    $("#passWordErrorShowModal").css("display", "none");
                                }
                            },
                            isCloseButton: true
                        }
                    ];
                    modalObj['buttons'] = buttonArray;
                    createModal("passWordErrorShowModal", modalObj);
                }

            },
            error: function (e) {
                //  //alert(e.message)
                sessionTimeout(e);
            }

        });

    }
}
function genericpasswordvalidation1(ele) {

    var ele = ele;
    var str = $("#" + ele).val();
    var errorID = "#dis_" + ele;
    var regex;
    var desc;
    var patt;
    var dataRegex = $("#" + ele).attr("data-pswdRegex");
    var dataDesc = $("#" + ele).attr("data-pswdDesc");
    var user_name = $("#user_name").val();
    if (str != null && str != '') {
        if (user_name != null && user_name != '' && user_name.toUpperCase() != str.toUpperCase()) {
            var pswdRegex = dataRegex.split(":::");
            var pswdDesc = dataDesc.split(":::");
            for (var i = 0; i < pswdRegex.length; i++) {
                regex = pswdRegex[i];
                patt = new RegExp(regex);

                if (!patt.test(str)) {
                    var msg = pswdDesc[i];
                    err_msg(errorID, msg);
                    return false;
                } else {
                    $(errorID).hide();
                    $("#dis_pwd").html("");
                    $("#password2").prop('disabled', false);
                    //            $("#restpassword").prop('disabled', true);
                }
            }
            return true;
        } else {
            msg = "Password & Username should not match.";
            $("#myModal .registerMsg").append(msg);
            return false;
        }
    } else {
        msg = "Password should not blank.";
        $("#myModal .registerMsg").append(msg);
        return false;
    }

}
$(document).ready(function () {

    $("#ValidateForgotPassword").validate({
        rules: {
            User_Name: {
                required: true
            },
            E_Mail: {
                required: true,
            },
            Contact_Number: {
                required: true
            }


        },
        messages: {
            User_Name: {
                required: "Please provide an username"
            },
            E_Mail: {
                required: "Please provide an email"
            },
            Contact_Number: {
                required: "Please provide a contact number",
            },

        }
    });
});
function validate() {
    $("#ValidateForgotPassword").valid();
    showLoader();
    var email_id = $("#email_id").val();
    var user_id = $("#user_id").val();
    var contact_number = $("#contact_number").val();
    if (!user_id) {
        return false;
    } else
    if (!email_id) {
        return false;
    } else
    if (!contact_number) {
        return false;
    } else
    {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: 'forgotPassword',
            data: {
                email_id: $("#email_id").val(),
                user_id: $("#user_id").val(),
                contact_number: $("#contact_number").val()
            },
            cache: false,
            success: function (result) {
                // //alert(result);
                stopLoader();
                $('#wait').hide();
                var modalObj = {
                    title: 'Message',
                    body: result['response']
                };
                var buttonArray = [
                    {
                        text: 'Close',
                        click: function () {
                            window.location.href = 'homePage';
//                            $('#loginModel').modal('show');
                            $("#passWordErrorShowModal").css("display", "none");

                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("passWordErrorShowModal", modalObj);
            },
            error: function (e) {
                sessionTimeout(e);
            }

        });
    }
}
$(document).ready(function () {
    $("#updateProfile").validate({
        rules: {
            username: {
                required: true,

            },
            dob: {
                required: true,
            },
            mobile: {
                required: true
            },
            email: {
                required: true
            },
            country: {
                required: true
            },
            Address: {
                required: true
            }
        },
        messages: {
            username: {
                required: "Please provide username"
            },
            email: {
                required: "Please provide email-Id"
            },
            dob: {
                required: "Please provide date of birth"
            },
            mobile: {
                required: "Please provide mobile number"
            },
            country: {
                required: "Please provide country"
            },
            Address: {
                required: "Please provide address"
            }
        }
    })
});

function submitData()
{
    showLoader();
    $("#updateProfile").valid();
    var data = userprofileValidation();
    //  alert("alert"+data);
    if (data) {

        var jsonOBJ = {};
        jsonOBJ.ids = [];
        jsonOBJ.values = [];
        $(".profile-form :input").each(function () {
            var textid = $(this).attr("id");
            var textval = $(this).val();
            jsonOBJ.ids.push(textid);
            jsonOBJ.values.push(textval);

        });

        $.ajax({
            traditional: true,
            dataType: 'html',
            type: 'POST',
            url: 'updateProfileData',
            cache: false,
            data: {
                jsonData: JSON.stringify(jsonOBJ)
            },
            success: function (response) {
                stopLoader();
                var modalObj = {
                    title: 'Message',
                    body: "Updated Successfully"
                };
                var buttonArray = [
                    {
                        text: 'Close',
                        click: function () {
//                                submitData();
                            window.location.href = 'userProfile';
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("profileShowModal", modalObj);
            },
            error: function (e) {
                if (e.status == 1)
                {
                    sessionTimeout(e);
                } else
                {
                    var modalObj = {
                        title: 'Message',
                        body: "Failed to update"
                    };
                    var buttonArray = [
                        {
                            text: 'Close',
                            click: function () {
                                window.location.href = 'userProfile';
                                $("#profileShowModal").css("display", "none");

                            },
                            isCloseButton: true
                        }
                    ];
                    modalObj['buttons'] = buttonArray;
                    createModal("profileShowModal", modalObj);
                }
            }



        });

        console.log(JSON.stringify(jsonOBJ));
    }
}
var UsrErrRslt = "";
function userdataValidation()
{
//   //alert("hi");
    var fname = $("#first_name").val();   // firstname
    UsrErrRslt = "";
    var lname = $("#last_name").val();    //lastname
    var mnumber = $("#mobile_number").val();  //mobilenumber
    var usremail = $("#email_id").val();   //email
    var hidden_usremail = $("#hidden_email_id").val();   //email
    var doy = $(".dateselector-year option:selected").val();  //dateofbirth
    var dom = $(".dateselector-month option:selected").val();  //dateofbirth
    var dod = $(".dateselector-day option:selected").val();  //dateofbirth
    var uname = $("#user_name").val();      //username
    var upass = $("#pwd").val();         //password
    var cpass = $("#password2").val();       //confirmpassword
    var uReg = $("#regionTxt").val();         //region
    var uLcle = $("#usr_lcle").val();         //locale
    var uRle = $("#usr_rle").val();           //role
    var uRprt = $("#usr_rpt").val();         //report to
    var uPlnt = $("#usr_plnt").val();        //plant  
    //  var uTelNo_a = $("#tel_no_a").val();        //Country code --additional data  
    var uTelNo_c = $("#tel_no_c").val();        //STD--additional data
    var uTelNo_b = $("#phone_number").val();        //phone_number--additional data
    var purposeofReg = $("#purposeofReg").val();        //phone_number--additional data


    var Trim_captch = $("#Usercaptch").val();  //To remove space in between
    var charPos = Trim_captch.charAt(4);
    if (charPos == " ")
    {
        var res = Trim_captch.replace(charPos, "");
        var ucptch = res;
        // //alert(ucptch);
    } else {
        var ucptch = Trim_captch;
    }
    var ccptch = $("#Matchcaptch").val();
    var uOrgId = $("#usr_orgid").val();


    var alphaNumeric = /^[a-zA-Z0-9&()\s]+$/;
    var alpha = /^[a-zA-Z\s]+$/;
    var nameAlpha = alpha.test(fname);
    var name1Alpha = alpha.test(lname);


    var mobileNo = /^\d{10}$/;
    var mobUsr = mobileNo.test(mnumber);
    var mobzero = /^[0]{1,}$/;


    var mail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.]([a-zA-Z0-9.]{1,})+\.[a-zA-Z0-9.]{2,}$/;
    var PiLogmail = /^[a-zA-Z0-9_.-]+@(pilog)+\.[a-zA-Z0-9.]{2,}$/;
    var emailUsr = mail.test(usremail);
    var pilogUsr = PiLogmail.test(usremail);


    var passwrd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var upasswrd = passwrd.test(upass);
    var cnfrmpss = passwrd.test(cpass);

    if (!fname) {
        return false;
    }
    $("#dis_first_name").hide();

    if (!lname) {
        return false;
    }
    $("#dis_last_name").hide();
    if (fname && (nameAlpha == false)) {
        return false;
    }
    $("#dis_first_name").hide();
    if (lname && (name1Alpha == false)) {
        return false;
    }
    $("#dis_last_name").hide();
    if (!uname) {
        return false;
    }
    $("#dis_user_name").hide();

    if (!uReg) {
        return false;
    }
    $("#dis_region").hide();
    if (!uRle) {
        return false;
    }
    $("#dis_usr_rle").hide();
    if (uRle != "FUNCT_CONSULTANT") {
        if (!upass) {
            return false;
        }
        $("#dis_pwd").hide();
        if (upass && (upasswrd == false)) {
            return false;
        }

        $("#dis_pwd").hide();
        if (!cpass) {
            return false;
        }
        $("#dis_password2").html("");
        if (upass != cpass) {
            return false;
        }

        $("#dis_password2").hide();

    } else
    {
        $("#password_star").hide();
        $("#pwd").html("disable", "disabled");
        $("#password2_star").hide();
        $("#password2").html("disable", "disabled");
    }

    /////////////////  

    if (!uLcle) {
        return false;
    }
    $("#dis_usr_lcle").hide();
    if (!uOrgId) {
        return false;
    }
    $("#dis_usr_orgid").hide();

    /*updated by ramu Start */
    if ((uRle.indexOf('VM_', 0) != 0) && (uRle.indexOf('CM_', 0) != 0)) {
        if (!uPlnt) {
            return false;
        }
        $("#dis_usr_plnt").hide();
    } else {
        $("#dis_usr_plnt").html("");
    }
    /*updated by ramu end */

    if (uRle.lastIndexOf("REQUESTOR") > -1)
    {
        if (!uRprt) {
            return false;
        }
        $("#dis_usr_rpt").hide();
    } else {
        $("#dis_usr_rpt").html("");
//   return true;
    }

    if ((doy == "") || (dom == "") || (dod == "")) {
        return false;
    }
    $("#dis_dateofbirth").hide();


    if (!ucptch)
    {
        $("#dis_Usercaptch").show();
        $("#dis_Usercaptch").html("Should Not Be Null");
        return false;
    }

    if (ucptch && (ucptch == ccptch)) {
        $("#dis_Usercaptch").html("");

    } else
    {
        $("#dis_Usercaptch").html("Captch do not match.");
        $("#dis_Usercaptch").show();
        return false;

    }

    if (!usremail) {
        return false;
    }
    $("#dis_email_id").hide();
    if (uRle != "FUNCT_CONSULTANT")
    {
        if (usremail && (emailUsr == false)) {
            return false;
        } else {
            $("#dis_email").html("");
        }


    } else
    {
        if (usremail && (pilogUsr == false))
        {
            return false;

        } else {
            $("#dis_email").html("");
        }
    }

    if (usremail != hidden_usremail) {
        // //alert("hiii");
        $("#dis_email_id").hide();
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            url: 'emailIdValidate',
            data: {
                email_id: $("#email_id").val()
            },
            cache: false,
            success: function (result) {

                ////alert(result);
                // //alert(result);

                if (result == 'false')
                {

                    var id = "#dis_email_id";
                    var msg = "Email Already Exist.";
                    err_msg(id, msg);
                    return false;

                }
            },
            error: function (e) {
                //  //alert(e.message)
                sessionTimeout(e);
            }

        });
    }

    if (mnumber && (mobUsr == false)) {
        return false;
    }

    if (mobzero.test(mnumber) == true) {
        return false;
    }

    $("#dis_mobile_number").hide();

    if ((uTelNo_b && !uTelNo_c) || (!uTelNo_b && uTelNo_c)) {
        var id = ".dis_tel_no_c";

        if (!uTelNo_b) {
            msg = "Enter Telephone number";
        } else {

            msg = "Enter STD Code";
        }
        return false;
    }

    if (uTelNo_b && uTelNo_c) {

        var id = ".dis_tel_no_c";

        var StdZero = /^[0]{1,}$/;
        ;
        var StdRg3 = /^[0-9]{3,5}$/;
        var res = StdRg3.test(uTelNo_c);
        if (StdZero.test(uTelNo_c) == true) {
            return false;
        } else {
            $(id).hide();
        }
        if (res == false)
        {
            return false;
        } else {
            $(id).hide();
        }
        //////////////////tel no

        var TelReg = /^[0-9]{6,8}$/;
        var res = TelReg.test(uTelNo_b);
        var TelZero = /^[0]{1,}$/;
        if (TelZero.test(uTelNo_b) == true) {
            return false;
        } else {
            $(id).hide();
        }

        if (res == false)
        {
            return false;
        } else {
            $(id).hide();

        }

    }
//////////////////
    if ($('#agree').is(':checked') == false) {
        return false;
    }

    return true;

}
function userprofileValidation() {
    var usremail = $("#email_id").val();
    var hidden_usremail = $("#hidden_email_id").val();
    var user_name = $("#user_name").val();
    var dob = $("#dob").val();
    var address = $("#address").val();
    var country = $("#country").val();
    var mobileno = $("#mobileno").val();
    if (!usremail) {
        return false;
    } else if (!user_name) {
        return false;
    } else if (!dob) {
        return false;
    } else if (!address) {
        return false;
    } else if (!country) {
        return false;
    } else if (!mobileno) {
        return false;
    }

    $("#dis_email_id").hide();
    if (usremail != hidden_usremail) {
        $("#dis_email_id").hide();
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            url: 'emailIdValidate',
            data: {
                email_id: $("#email_id").val()
            },
            cache: false,
            success: function (result) {
                if (result == 'false')
                {
                    var id = "#dis_email_id";
                    var msg = "Email Already Exist.";
                    err_msg(id, msg);
                    return false;
                }
            },
            error: function (e) {
                sessionTimeout(e);
            }

        });
    }
    return true;
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
            }
        }
    });
    //                alert("psTotalCount::"+psTotalCount);
    if (psTotalCount > 0)
        $("#" + tabId + "_MO_COUNT").text(psEnteredCount + "/" + psTotalCount);
    else
        $("#" + tabId + "_MO_COUNT").text("");
}
function disableOrEnableWthTanTabAttribuetes() {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
    }
    var lowerTDSValue = $("#TDS_APPL").val();
    if (lowerTDSValue == "Y" || lowerTDSValue == "y")
    {
        $("#VM_WTH_TAN_DATA_Update").show();
        $("table#" + "VM_WTH_TAN_DATA" + "_TABLE").each(function ()
        {
            $(this).find("img").show();
        });
        $("table#" + "VM_WTH_TAN_DATA" + "_TABLE :input").each(function ()
        {
            var id = $(this).attr('id');
            if (id !== "WT_EXNR_TAN" && id != "WT_EXRT_TAN" && id != "FIWTIN_EXEM_THR")
            {
//                $("#" + id).attr("disabled", true);
                $("#" + id).attr("readonly", true);

            } else
            {
//                $("#" + id).attr("disabled", false);
                $("#" + id).attr("readonly", false);
            }
        });
    } else if (lowerTDSValue == "N" || lowerTDSValue == "n") {
        $("#VM_WTH_TAN_DATA_Update").hide();
        $("table#" + "VM_WTH_TAN_DATA" + "_TABLE").each(function ()
        {
//            $(this).find("input").attr('disabled', true);
            $(this).find("input").attr('readonly', true);
            $(this).find("img").hide();
        });
    }

}
function erpTab(tabId, erpDataObj, erpDataFlag, formView) {
    labelObject = {};
    erpglobalId = tabId;
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    tabsOldData = {};
    if (erpDataObj != null) {
        if (erpDataObj['tabGridId'] != null && erpDataObj['tabGridId'] != '' && erpDataObj['tabGridId'].indexOf('_OLD') < 0) {
            globalErpTab = erpDataObj['tabGridId'];
        }
        if (erpDataFlag == 'Y') {
            var erpGridDataObj = erpDataObj['erpGridResults'];
            if (erpGridDataObj != null) {
                var erpGridConfig = erpGridDataObj['gridPropObj'];
                console.log("erpGridDataObj['tableData']::::" + JSON.stringify(erpGridDataObj['tableData']));
                console.log("erpGridDataObj['columns']::::" + JSON.stringify(erpGridDataObj['columns']));
                var source =
                        {
                            datatype: "json",
                            localdata: erpGridDataObj['tableData'],
                            datafields: erpGridDataObj['datafields']

                        };
                var dataAdapter = new $.jqx.dataAdapter(source);
                erpGridConfig.source = dataAdapter;
                var renderToolbar = erpGridConfig.renderToolbar;
                erpGridConfig.renderToolbar = eval('(' + renderToolbar + ')');
                erpGridConfig.columns = erpGridDataObj['columns'];

                var headerTooltipRenderer = function (element) {
                    $(element).parent().jqxTooltip({position: 'mouse',
                        position: 'bottom-right',
                        showArrow: false, content: $(element).text()});
                }
                var dataSheetRendered = function (element) {

                    // $(element).html("<div class='show_detail' ></div>");
                    $(element).addClass("show_detail");
                    $(element).parent().jqxTooltip({position: 'mouse',
                        position: 'bottom-right',
                        showArrow: false,
                        content: "Data Sheet"});
                    //content: $(element).text()});
                }
                var descrender = function (row, columnfield, value, defaulthtml, columnproperties) {

                    return '<div style="height:' + $("#" + tabId).jqxGrid('rowsheight') + 'px" class="ta_style ta_style_Desc"  ><pre>' + value + '</pre></div>';
                };

                var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                    var cellValue = $("#" + tabId + "_TABLE").jqxGrid('getcellvalue', row, columnfield);
                    var viewType = "GRID-VIEW";
                    var ddwData = erpGridConfig.dropDowndData;
                    var ddwObj = ddwData[columnfield];
                    var dependencyparams = ddwObj['dependencyparams'];
                    var editable = erpGridConfig['editable'];
                    if (editable) {
                        return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img id='dd" + tabId + "_TABLE" + columnfield + "' src='images/iDXPUI5SearchDropdown.png' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
//                        return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img src='images/iDXPUI5SearchDropdown.png' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                    } else
                    {
                        return "<div class='visionGridDataAlign'>" + cellValue + "</div>";
                    }
                };
//                erpGridConfig.enabletooltips = false;
                erpGridConfig.cellhover = function (element, pageX, pageY)
                {
                };
                for (var i = 0; i < erpGridConfig.columns.length; i++) {
                    if (erpGridConfig.columns [i].cellsrenderer != null) {
                        erpGridConfig.columns [i].cellsrenderer = eval(erpGridConfig.columns [i].cellsrenderer);
                    }
                    if (erpGridConfig.columns[i].rendered != null) {
                        erpGridConfig.columns[i].rendered = eval('(' + erpGridConfig.columns[i].rendered + ')');
                    }
                }
                var paginationFlag = erpGridConfig['pageable'];
                if (paginationFlag) {
                    erpGridConfig.virtualmode = false;

                }
                if (erpGridConfig['rowsheight'] != null && erpGridConfig['rowsheight'] != '') {//rowsheight
                    erpGridConfig.autorowheight = true;
                }
                $('#' + tabId + "_TABLE").jqxGrid(erpGridConfig);
                $('#' + tabId + "_TABLE").on('celldoubleclick', function (event) {
                    var args = event.args;
                    var dataField = args.datafield;
                    var dataField1 = args.text;
                    var rowIndex = args.rowindex;
                    var cellValue = args.value;
                    var isEditable = $('#' + tabId + "_TABLE").jqxGrid('getcolumnproperty', dataField, 'editable');
                    console.log("isEditable::::" + isEditable)
                    if (!isEditable) {
                        var column = $('#' + tabId + "_TABLE").jqxGrid('getcolumn', event.args.datafield).text;
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
            }

            alert("tabId::::" + tabId);
            if ($('#' + tabId).html() != "") {
                $('#' + tabId).jqxTabs('destroy');
                $('#' + tabId + "_TABLE").after('<div id="' + tabId + '"></div>');
            } else {
                $("#" + tabId).remove();
                $('#' + tabId + "_TABLE").after('<div id="' + tabId + '"></div>');
            }
//            if (fioriThemeCheck) {
//                $(".visionRegisterMaterialTableTab").hide();
//                $("#" + tabId).closest(".visionRegisterMaterialTableTab").show();
//            }
            $('#' + tabId).html(erpDataObj['tabString']);
//                                        $('#erpData').html(erpDataObj['tabString']);
            $('#' + tabId).html(erpDataObj['tabString']);
            $('#' + tabId).jqxTabs({position: 'top', width: '100%', reorder: true, theme: 'ui-redmond', keyboardNavigation: true});

            $('#' + erpDataObj['tabGridId'] + "Icon").html(erpDataObj['tabOperationIcon']);
            //   var erpTabGridId = $("#erpTabGridId").val();
            if (erpDataObj['erpTabGridId'] != null && erpDataObj['erpTabGridId'] != '' && (erpDataObj['erpTabGridId']).toString().indexOf("_OLD") == -1) {
                //  $("#erpTabGridId").val(erpDataObj['erpTabGridId']);
                $("#erpTabGridId").val(erpDataObj['erpTabGridId']);
            }
            if ($("#" + erpDataObj['erpTabGridId'] + "HiddenGridData").length == 0) {
                $("#mat_creation_form_table").append("<input type='hidden' id='" + erpDataObj['erpTabGridId'] + "HiddenGridData' value='' />");
            }
            $("#" + erpDataObj['erpTabGridId'] + "HiddenGridData").val(erpDataObj['gridIds']);
            alert("erpDataGridId:::After::" + $("#erpDataGridId").val());


            var unSelectTab = "";
            var gridIds = $("#" + tabId + "HiddenGridData").val();
            var gridIdsArry = gridIds.split(",");
//            $('#' + tabId).on('unselecting', function (event) {
//                unSelectTab = event.args.item;
//            });

            var UnselectedGridId = "";
            var matchedcount = 0;
            $('#' + tabId).on('unselecting', function (event) {

                UnselectedGridId = gridIdsArry[event.args.item];
                console.log("before matchedcount : " + matchedcount);
                console.log("change matchedcount : " + changeflag);
                console.log("UnselectedGridId : " + UnselectedGridId);

                var jsonOBJ = {};
                jsonOBJ.feildIds = [];
                jsonOBJ.feildValues = [];
                matchedcount = 0;
                console.log("after matchedcount : " + matchedcount);

                var dataView = $("#" + UnselectedGridId + "_Update").attr("data-view");
                var selectedTabOldData = tabsOldData[UnselectedGridId];

                if (dataView == "FORM-VIEW") {
                    changeflag = false;
                    $("[id*=" + UnselectedGridId + "]  :input").each(function () {
                        var textid = $(this).attr("id");
                        var type = $(this).attr("type");
                        var textval = $(this).val();
//                console.log("textid:::" + textid);
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


                        var textOldVal = "";
                        if (selectedTabOldData != null) {
                            textOldVal = selectedTabOldData[textid];
                            if (textid != null && textid != 'CREATE_DATE' && textval != textOldVal) {
                                matchedcount++;
                            }
                        }
//                console.log(textval + ":::" + textid + "::" + textOldVal);

                        if (matchedcount > 0) {
                            changeflag = true;
                        }


                    });

                }

                if (dataView == "GRID-VIEW") {
                    matchedcount = 1;
                    console.log(" GRID-VIEW CODE");
                    var changecount = 0;
                    $("[id^=contenttable]  :input").each(function () {
                        //            var textid = $(this).attr("id");
                        var type = $(this).attr("type");
                        var textval = $(this).val();
                        console.log(" type : " + type + " textval : " + textval + " cell old value " + cellOldValue);

                        if (type == 'textbox' && textval != null && textval != cellOldValue) {
                            changecount++;
                        }
                    });
                    if (changecount > 0) {
                        console.log(" grid input changed ccount " + changecount);
                        changeflag = true;
                        console.log("grid input changed : changeflag = " + changeflag);
                    }
                }


            });
            matchCount = 0;
            var jsonArray = [];
            $('#' + tabId).on('selecting', function (event) {
//                $("#SelectedTabId").html("");
                priviousTabIndex = event.args.item;
                var previousValue = $("#hdnPreviousValue").val();
                var baskettype = $('#' + tabId).jqxTabs('getTitleAt', unSelectTab);
                var unselectedGridId = gridIdsArry[unSelectTab];
                var selectedGridId = gridIdsArry[event.args.item];
                var selectedTab = event.args.item;
                gridId = gridIdsArry[matchCount];
                var dataView = $("[id='" + gridId + "_Update']").attr("data-view");
//                var dataView = $("#" + gridId + "_Update").attr("data-view");
                $("#previousCurrentTabId").val(tabId);
//                if (matchCount == 0) {
//                    updateflag = false;
//                }
                if (updateflag == true) {
                    changeflag = false;
                    updateflag = false;

                }
                matchCount = selectedTab;
                $("#SelectedCurrentTabId").val(selectedGridId);
                var erpTab = tabId;

                if (changeflag && matchedcount > 0) {
                    if (tabSwitchflag) {
                        event.cancel = true;
                        // event.preventDefault();
                    }
                    if (dataView == 'GRID-VIEW') {
                        jsonArray = gridOperation("update", gridId);
                    }
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

                                    updaterecordData(jsonArray, gridId, "update", selectedTab, selectedGridId, erpTab, "");
                                    matchedcount = 1;


                                }
                            }, {
                                text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                                click: function () {

                                    $(this).html("");
                                    $(this).dialog("close");
                                    tabSwitchflag = false;
                                    updateflag = true;
                                    var selectedTab = event.args.item;
                                    console.log("selectedTab  :: " + selectedTab);
                                    changeflag = false;
                                    $('#' + tabId).jqxTabs('select', selectedTab);
                                    fetchErpTab(selectedGridId, erpTab);
                                    $(this).dialog("close");
                                    changeflag = false;
                                    tabSwitchflag = true;
                                    console.log(length + " tabSwitchflag  : " + tabSwitchflag);

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
                if (!changeflag) {
                    fetchErpTab(selectedGridId, erpTab);
                } else if (tabId != null && tabId.indexOf("_OLD") > 0) {
                    fetchErpTab(selectedGridId, erpTab);
                }
            });
//            matchCount =0;
//            $('#' + tabId).on('selecting', function (event) {
//                priviousTabIndex = event.args.item;
//                var previousValue = $("#hdnPreviousValue").val();
//                var baskettype = $('#' + tabId).jqxTabs('getTitleAt', unSelectTab);
//                var unselectedGridId = gridIdsArry[unSelectTab];
//                var selectedGridId = gridIdsArry[event.args.item];
//                var selectedTab = event.args.item;
//                gridId = gridIdsArry[matchCount];
//                matchCount = selectedTab;
//                var erpTab = tabId;
//                if (updateflag == true) {
//                    changeflag = false;
//                    updateflag = false;
//
//                }
//                if (changeflag && matchedcount > 0) {
//                    if (tabSwitchflag) {
//                        event.cancel = true;
//                        // event.preventDefault();
//                    }
//
//                    $("#logoutDailog").html((labelObject['Unsaved changes will be lost'] != null ? labelObject['Unsaved changes will be lost'] : 'Unsaved changes will be lost') + ", " + (labelObject['you like to save'] != null ? labelObject['you like to save'] : 'you like to save') + "?");
//                    $("#logoutDailog").dialog({ resizable: false,
//                        title: (labelObject['Error'] != null ? labelObject['Error'] : 'Error'),
//                        modal: true,
//                        width: 300,
//                        height: 135,
//                        fluid: true,
//                        buttons: [
//                            {
//                                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
//                                click: function () {
//                                    $(this).html("");
//                                    $(this).dialog("close");
//                                    $(this).dialog("destroy");
////                                    changeflag = false;
////                                    tabSwitchflag = false;
//                                    updaterecordData(gridId, "update", selectedTab, selectedGridId, erpTab, tabId);
//                                    matchedcount = 1;
//
//
//                                }
//                            }, {
//                                text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
//                                click: function () {
//
//                                    $(this).html("");
//                                    $(this).dialog("close");
//                                    tabSwitchflag = false;
//                                    updateflag=true;
//                                    var selectedTab = event.args.item;
//                                    console.log("selectedTab  :: " + selectedTab);
//                                    changeflag = false;
//                                    $('#' + tabId).jqxTabs('select', selectedTab);
//                                    fetchErpTab(selectedGridId, erpTab);
//                                    $(this).dialog("close");
//                                    changeflag = false;
//                                    tabSwitchflag = true;
//                                    console.log(length + " tabSwitchflag  : " + tabSwitchflag);
//
//                                }
//                            }
//                        ],
//                        open: function ()
//                        {
//                             //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
//                            $(".visionHeaderMain").css("z-index", "999");
//                            $(".visionFooterMain").css("z-index", "999");
//                        },
//                        beforeClose: function (event, ui)
//                        {
//                            $(".visionHeaderMain").css("z-index", "99999");
//                            $(".visionFooterMain").css("z-index", "99999");
//                        }
//                    });
//
//
//                }
//                if (!changeflag) {
//                    fetchErpTab(selectedGridId, erpTab);
//                } else if (tabId != null && tabId.indexOf("_OLD") > 0) {
//                    fetchErpTab(selectedGridId, erpTab);
//                }
//            });
//            $('#' + tabId).on('selecting', function (event) {
//                var baskettype = $('#' + tabId).jqxTabs('getTitleAt', unSelectTab);
//                var unselectedGridId = gridIdsArry[unSelectTab];
//                var selectedGridId = gridIdsArry[event.args.item];
//                var erpTab = tabId;
//                if (changeflag && matchedcount > 0) {
//                    if (tabSwitchflag) {
//                        event.cancel = true;
//                        // event.preventDefault();
//                    }
//                    $("#logoutDailog").html((labelObject['Unsaved changes will be lost'] != null ? labelObject['Unsaved changes will be lost'] : 'Unsaved changes will be lost') + ", " + (labelObject['you like to save'] != null ? labelObject['you like to save'] : 'you like to save') + "?");
//                    $("#logoutDailog").dialog({ resizable: false,
//                        title: (labelObject['Error'] != null ? labelObject['Error'] : 'Error'),
//                        modal: true,
//                        width: 300,
//                        height: 135,
//                        fluid: true,
//                        buttons: [
//                            {
//                                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
//                                click: function () {
//                                    $(this).html("");
//                                    $(this).dialog("close");
//                                    $(this).dialog("destroy");
//                                }
//                            }, {
//                                text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
//                                click: function () {
//
//                                    $(this).html("");
//                                    $(this).dialog("close");
//                                    tabSwitchflag = false;
//                                    var selectedTab = event.args.item;
//                                    console.log("selectedTab  :: " + selectedTab);
//                                    changeflag = false;
//                                    $('#' + tabId).jqxTabs('select', selectedTab);
//                                    fetchErpTab(selectedGridId, erpTab);
//                                    $(this).dialog("close");
//                                    changeflag = false;
//                                    tabSwitchflag = true;
//                                    console.log(length + " tabSwitchflag  : " + tabSwitchflag);
//
//                                }
//                            }
//                        ],
//                        open: function ()
//                        {
//                             //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
//                            $(".visionHeaderMain").css("z-index", "999");
//                            $(".visionFooterMain").css("z-index", "999");
//                        },
//                        beforeClose: function (event, ui)
//                        {
//                            $(".visionHeaderMain").css("z-index", "99999");
//                            $(".visionFooterMain").css("z-index", "99999");
//                        }
//                    });
//
//                }
//                if (!changeflag) {
//                    fetchErpTab(selectedGridId, erpTab);
//                } else if (tabId != null && tabId.indexOf("_OLD") > 0) {
//                    fetchErpTab(selectedGridId, erpTab);
//                }
//            });
            $('#' + tabId + "_TABLE").on('rowselect', function (event) {
                var rows = $('#' + tabId + "_TABLE").jqxGrid('getrows');
                // alert(rows.length);
                var index = event.args.rowindex;
                for (var i = 0; i < rows.length; i++)
                {
                    if (i != index) {
                        try {
                            var bindex = $('#' + tabId + "_TABLE").jqxGrid('getrowboundindex', i);
                            $('#' + tabId + "_TABLE").jqxGrid('unselectrow', bindex);
                        } catch (err) {
                        }
                    }
                }
                refreshErpTab(rows[event.args.rowindex], tabId);
            });
            if (formView == 'FORM-VIEW') {
                $("#SelectedCurrentTabId").val("");
                $("#SelectedCurrentTabId").val(erpDataObj['tabGridId']);
                $('#' + erpDataObj['tabGridId'] + "_FORM").html(erpDataObj['data']);
                $("#" + erpDataObj['tabGridId'] + "_FORM" + " :input[data-type='D']").each(function ()
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

                $("#" + erpDataObj['tabGridId'] + "_TABLE" + " :input").each(function ()
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
                    if (textid != null && textid != 'CREATE_DATE') {
                        tabOldObj[textid] = textval;
                    }
                });
                if (tabOldObj != null) {
                    tabsOldData[erpDataObj['tabGridId']] = tabOldObj;
                }
            } else {
                $("#SelectedCurrentTabId").val("");
                $("#SelectedCurrentTabId").val(erpDataObj['tabGridId']);
                setTimeout(function () {
                    formGrid(erpDataObj['tabGridId'], erpDataObj, erpDataFlag);
                }, 50);
            }
        } else {
            $("#SelectedCurrentTabId").val("");
            $("#SelectedCurrentTabId").val(tabId);
            setTimeout(function () {
                formGrid(tabId, erpDataObj, erpDataFlag);
            }, 50);
        }
    }
}// end of erpTab()
//function UpdateOrDelete(data, dataView, tabId, operation) {
//    labelObject = {};
//    try {
//        labelObject = JSON.parse($("#labelObjectHidden").val());
//    } catch (e) {
//    }
//    console.log("UpdateOrDelete::: check data" + tabId + ":::" + operation);
//    console.log(data);
//    var jsondata = {};
//    var basicData = {};
//    var reviewIndFV;
//    var vendorCode = $("#vendorCode").val();
//    var locatCode = $("#locatcode").val();
//    var companyCode = $("#compCode").val();
//    var accountGroup = $("#accountGroup").val();
//    var purchaseOrg = $("#purchOrg").val();
//    var purchaseOrg = $("#purchOrg").val();
//    var baskettype = $('#baskettypehid').val();
//    var requestNumber = $("#requestNumber").val();
//    var vendorCode = $("#vendorCode").val();
//    if ($('#foreignReviewIndicator').is(':checked')) {
//        reviewIndFV = "Y";
//    } else
//    {
//        reviewIndFV = "N";
//    }
//    var reviewIndCA = "";
//    if ($('#caReviewIndicator').is(':checked')) {
//        reviewIndCA = "Y";
//    } else
//    {
//        reviewIndCA = "N";
//    }
//    var newIfsc = "";
//    if ($('#NEW_BNK').is(':checked'))
//    {
//        newIfsc = "Y";
//
//    } else
//    {
//        newIfsc = "N";
//    }
//    $("#mat_creation_form_table :input").each(function () {
//        var textid = $(this).attr("id");
//        var textval = "";
//        if ($("#" + textid).val() !== null && $("#" + textid).val() !== "") {
//            var type = $(this).attr("type");
//            textval = $(this).val();
//            if (type != 'hidden') {
//                if (textval != null && textval != '') {
//                    textval = textval.toUpperCase();
//                }
//            }
//        }
//        if (textid != null && textid != 'CREATE_DATE') {
//            basicData[textid] = textval;
//        }
//        if (textid != null && textid.lastIndexOf("HIDDEN") > -1) {
//            var columnNames = $("#" + textid).val();
//            var columnsArray = columnNames.split(",");
//
//            var hiddenIds = textid.split("HIDDEN_");
//            var hiddenVal = $("#" + hiddenIds[1]).val();
//            for (var i = 0; i < columnsArray.length; i++) {
//                if (hiddenVal != null) {
//                    hiddenVal = hiddenVal.toUpperCase();
//                }
//                basicData[columnsArray[i]] = hiddenVal;
//            }
//        }
//    });
//    console.log(JSON.stringify(basicData));
//    var jsonOBJ = {};
//    var dataArray = [];
//    var finalData = "";
//    console.log("basicData::::" + JSON.stringify(basicData));
//    if (dataView != "GRID-VIEW") {
//        jsonOBJ = JSON.parse(data);
//        jsonOBJ.basicData = basicData;
//        dataArray.push(jsonOBJ);
//        finalData = JSON.stringify(jsonOBJ);
//    } else
//    {
//        jsonOBJ = {};
//        var gridData = JSON.parse(data);
//        finalData = JSON.stringify(gridData);
//    }
//    var url = "";
//
//    if (operation == "update" || operation == 'checkingTabData') {
//        url = "updateRecord";
//    } else if (operation == "delete")
//    {
//        url = "deleteRecord";
//    } else if (operation == "calculateStock")
//    {
////        fetchCalculateStock(finalData, tabId, dataView);
//    }
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
//                var resultMessage;
//                var response = JSON.parse(result);
//                // var resultNew = response.resultVal;
//                var resultNew = response.Message;
//                var flag = response.messageFlag;
//                if (result == null || result == "") {
//                    result = "Failed to Update!"
//                    result = (labelObject[result] != null ? labelObject[result] : result);
//
//                }
//                var hiddenGridId = $('#' + tabId + "_HIDDEN").val();
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
//                    $("#dialog").html(dialogSplitMessage);
//                    $("#dialog").dialog({ resizable: false,
//                        modal: true,
//                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
//                        height: 'auto',
//                        minHeight: 'auto',
//                        minWidth: 300,
//                        maxWidth: 'auto',
//                        fluid: true,
//                        buttons: [{
//                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
//                                click: function () {
//                                    if (flag) {
//                                        // if (result.lastIndexOf("Successfully") > -1 || result.lastIndexOf("successfully") > -1) {
//                                        alert("Successfully");
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
//                                            // GenerateInstantDescription(tabId.indexOf("ERP") == -1 && tabId.indexOf("ATTACH") == -1 && role != null && ((role.indexOf("MM") == 0) || (role.indexOf("SM") == 0)));
//                                        }
//                                    } else
//                                    {
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
//
//                                    $(this).html("");
//                                    $(this).dialog("close");
//                                    $(this).dialog("destroy");
//                                }
//                            }],
//                        open: function () {
//                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                            $(".visionHeaderMain").css("z-index", "999");
//                            $(".visionFooterMain").css("z-index", "999");
//                        },
//                        beforeClose: function (event, ui)
//                        {
//                            $(".visionHeaderMain").css("z-index", "99999");
//                            $(".visionFooterMain").css("z-index", "99999");
//                        }
//                    });
//
//                    if (tabId != null && tabId.indexOf("GENERAL") > -1 && flag) {
////                if (dialogSplitMessage.lastIndexOf("Update") > -1 && dialogSplitMessage.lastIndexOf("Success") > -1) {
//                        var gstCodeTax;
//                        gstCodeTax = $("#GST_CODE_GEN").val();
//                        $("#GST_CODE_BASE").val(gstCodeTax);
////                }
//                    }
//                    if (tabId != null && tabId.indexOf("TAXATION") > -1 && flag) {
////                if (dialogSplitMessage.lastIndexOf("Update") > -1 && dialogSplitMessage.lastIndexOf("Success") > -1) {
//                        var reciepientType = "OT";
//                        var panCharTop, panCharTax;
//                        panCharTax = $("#O_1IPANNO").val();
//                        $("#PAN_NUMBER").val(panCharTax);
//                        panCharTop = $("#PAN_NUMBER").val();
//                        if (panCharTop && panCharTop.charAt(3) == "C") {
//                            reciepientType = "CO";
//                        }
//                        $("#QSREC").val(reciepientType);
////                }
//                    }
//                }
//            },
//            error: function (e) {
//                console.log(e);
//                sessionTimeout(e);
//            }
//        });
//    }
//    console.log("withholdingTanUpdate ::: END");
//    setTimeout(changeflagFuction, 300);
//}// updateOrDelete fun
function formGrid2(tabId, jsnobj, erpDataFlag) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
    }
    //var erpDataFlag = jsnobj['erpData'];
    console.log("erpDataFlag::::" + erpDataFlag);
    $("#" + tabId + "_Update").attr("data-view", "GRID-VIEW");
    $("#" + tabId + "_Delete").attr("data-view", "GRID-VIEW");
    $("#" + tabId).show();
    $("#" + tabId + '_TABLE').hide();
    var columns = jsnobj.columns;
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
    var renderToolbar = gridConfigObj.renderToolbar;
    var gridInitParamObj = {};
    gridInitParamObj = jsnobj['gridInitParamObj'];
    gridConfigObj.renderToolbar = eval('(' + renderToolbar + ')');
    $("#" + tabId + "_DIV").html("<div id='" + tabId + "'></div>");
    var isParent = 'N';
    var nestedGridRelId = jsnobj.nestedGridRelId;
    var nestedGridId = jsnobj.nestedGridId;

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
    var headerTooltipRenderer = function (element) {
        $(element).parent().jqxTooltip({position: 'mouse',
            position: 'bottom-right',
            showArrow: false, content: $(element).text()});
    }
    var attachmentImageRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {

        if (value != "" && value != null)
        {
            // return value;
            // $( ".visionGridColFileClass" ).tooltip({ content: 'click to show' });
            return  "<img title='Click to view the attachment' style='cursor:pointer;' onclick=viewAttachment('" + tabId + "'," + row + ",'" + tableName + "')  src='" + value + "' class='imageStyle visionTemplete'  id='dtlul_" + row + "' >";

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
        $(element).parent().jqxTooltip({position: 'mouse',
            position: 'bottom-right',
            showArrow: false, content: $(element).text()});
    }
    var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
        var cellValue = $("#" + tabId).jqxGrid('getcellvalue', row, columnfield);

        var viewType = "GRID-VIEW";
        var editable = gridConfigObj.editable;
        console.log("===============================================");
        console.log("Inside gridDrpdownRenderor editable::" + editable)
        console.log("===============================================");
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
        console.log("Entered TB_DDW renderer");
        //   var editable = response.gridPropObj.editable;
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
    var viewLocationRenderer
            = function (row, columnfield, value, defaulthtml, columnproperties) {
                //return '<textarea readonly class="ta_style" rows=1 >' + value + '</textarea>';
                console.log("hiiiii");
                return '<div class="nestedGridBorrowButton nestedGridBuyBorrowCol" onclick=initialize("' + row + '") style="cursor:pointer;"><img src="images/location.png">&nbsp;Location</div>';
            };
    var viewAddressRenderer
            = function (row, columnfield, value, defaulthtml, columnproperties) {
                //return '<textarea readonly class="ta_style" rows=1 >' + value + '</textarea>';
                console.log("hiiiii");
                return '<div class="nestedGridBorrowButton nestedGridBuyBorrowCol" onclick=getViewColumnForm("' + row + '") style="cursor:pointer;"><img src="images/address.png">&nbsp;Vendor Info</div>';
            };
    var charRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
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
    console.log("Editable::" + gridConfigObj.editable);
    console.log("tabId::::::6327::::" + tabId);
    try {
        $("#" + tabId).remove();
    } catch (e) {
    }
    if (erpDataFlag != 'Y') {

        $("#" + tabId + "_TABLE").after("<div id='" + tabId + "'></div>");
    } else {
        $("#" + tabId + "_FORM").after("<div id='" + tabId + "'></div>");
    }
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
    $('#' + tabId).jqxGrid('pagermode', 'simple');
    $('#' + tabId).on('celldoubleclick', function (event) {
        var args = event.args;
        var dataField = args.datafield;
        var dataField1 = args.text;
        var rowIndex = args.rowindex;
        var cellValue = args.value;
        var isEditable = $('#' + tabId).jqxGrid('getcolumnproperty', dataField, 'editable');
        console.log("isEditable::::" + isEditable)
        var editable = gridConfigObj.editable;
        if (!isEditable || !editable) {
            var column = $('#' + tabId).jqxGrid('getcolumn', event.args.datafield).text;
            if (column.trim() != null && column.trim() != '' && column.trim()
                    != 'null' && column.trim() != 'undefined' && column.trim() != undefined
                    && cellValue.trim() != null && cellValue.trim() != '' && cellValue.trim()
                    != 'null' && cellValue.trim() != 'undefined' && cellValue.trim() != undefined
                    && !(cellValue.trim().startsWith("data:image/png"))
                    && !(cellValue.trim().startsWith("data:image/jpg"))
                    && !(cellValue.trim().startsWith("data:image/jpeg"))
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
    var checkBoxFlag = false;
    $("#" + tabId).on('cellvaluechanged', function (event)
    {
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

        // row's data.
        var rowData = args.row;
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
        $("#" + tabId).jqxGrid('selectrow', rowBoundIndex);
        $("#" + tabId + "_Update").show();
        //   //console.log("cell began event");
    });
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
        // ////console.log("rowunselect:::::"+selectedrowindexes);
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
    });
    $("#" + tabId).on('rowclick', function (event) {
        $("#" + tabId + '_Update').show();
        $("#" + tabId + '_Delete').show();
    });
    $("#" + tabId + "_MO_COUNT").text("");
    $("#" + tabId + "_ICON").hide();
}// end of formGrid()
//function refreshErpTab(selectedErpGridData, erpTabGridId) {
//    labelObject = {};
//    try {
//        labelObject = JSON.parse($("#labelObjectHidden").val());
//    } catch (e) {
//
//    }
//    tabsOldData = {};
//    alert(":::::" + JSON.stringify(selectedErpGridData));
//    console.log(":::::::::" + JSON.stringify(selectedErpGridData));
//    var editableFlag = "N";
//    if (selectedErpGridData != null) {
//        var basicData = {};
//        $("#mat_creation_form_table :input").each(function () {
//            var textid = $(this).attr("id");
//            var type = $(this).attr("type");
//            var textval = $(this).val();
//            if (type != 'hidden') {
//                if (textval != null && textval != '') {
//                    textval = textval.toUpperCase();
//                }
//            }
////                  jsonOBJ.ids.push(textid.toLowerCase());
//            if (textid != null && textid != 'CREATE_DATE') {
//                if (selectedErpGridData[textid] != null) {
//                    textval = selectedErpGridData[textid];
//                }
//                basicData[textid] = textval;
//            }
//
//            if (textid != null && textid.lastIndexOf("HIDDEN") > -1) {
//                var columnNames = $("#" + textid).val();
//                var columnsArray = columnNames.split(",");
//
//                var hiddenIds = textid.split("HIDDEN_");
//                var hiddenVal = $("#" + hiddenIds[1]).val();
//                if (selectedErpGridData[hiddenIds[1]] != null) {
//                    hiddenVal = selectedErpGridData[hiddenIds[1]];
//                }
//                for (var i = 0; i < columnsArray.length; i++) {
//                    basicData[columnsArray[i]] = hiddenVal;
//                }
//
//            }
//
//
//        });
//        var instance = $("#INSTANCE").val();
//        var plant = $("#BUSINESS_UNIT").val();
//        console.log(basicData['INSTANCE'] + ":::instance::::" + instance);
//        console.log(basicData['BUSINESS_UNIT'] + ":::BUSINESS_UNIT::::" + plant);
//        if (basicData != null && basicData['INSTANCE'] == instance && plant == basicData['BUSINESS_UNIT']) {
//
//            editableFlag = "Y";
//
//        } else {
//            editableFlag = "N"
//            delete basicData['SOURCE'];
//        }
//
//        basicData['editableFlag'] = editableFlag;
//        basicData['erpTabGridId'] = erpTabGridId;
////        alert("::basicData:::" + JSON.stringify(basicData));
//        var jsonOBJ = {};
//        jsonOBJ.basicData = basicData;
//        // var erpTabGridId =  $("#erpTabGridId").val();
//        console.log("JSON.stringify(basicData):::" + JSON.stringify(basicData))
//        $.ajax({
//            type: "POST",
//            url: 'selectRecord',
//            data: {
//                'jsonData': JSON.stringify(jsonOBJ),
//                'panelId': $("#panelId").val(),
//                'gridId': erpTabGridId
////                'gridId': $("#erpTabGridId").val()
//            },
//            //headers: {"Access-Control-Allow-Origin": true},
//            traditional: true, cache: false,
//            success: function (response) {
//                //  alert(response);
//                var jsnobj = JSON.parse(response);
//                if (jsnobj != null) {
//                    var erpDataObj = jsnobj;
//                    $('#' + erpTabGridId).jqxTabs('destroy');
//                    $('#' + erpTabGridId + "_TABLE").after('<div id="' + erpTabGridId + '"></div>');
//
//                    $('#' + erpTabGridId).html(erpDataObj['tabString']);
//                    // $('#erpData').html(erpDataObj['tabString']);
//
//                    $('#' + erpTabGridId).jqxTabs({position: 'top', width: '100%', reorder: true, theme: 'ui-redmond', keyboardNavigation: true});
//                    $('#' + erpDataObj['tabGridId'] + "_FORM").html(erpDataObj['data']);
//
//                    if (erpDataObj['erpTabGridId'] != null && erpDataObj['erpTabGridId'] != '' && (erpDataObj['erpTabGridId']).toString().indexOf("_OLD") == -1) {
//                        //  $("#erpTabGridId").val(erpDataObj['erpTabGridId']);
//                        $("#erpTabGridId").val(erpDataObj['erpTabGridId']);
//                    }
////                    $("#mat_creation_form_table").append("<input type='hidden' id='" + erpDataObj['erpTabGridId'] + "HiddenGridData' value='' />");
//                    $("#" + erpDataObj['erpTabGridId'] + "HiddenGridData").val(erpDataObj['gridIds']);
//                    if (editableFlag == 'Y') {
//                        $('#' + erpDataObj['tabGridId'] + "Icon").html(erpDataObj['tabOperationIcon']);
//                        $("#" + erpDataObj['tabGridId'] + " :input[data-type='D']").each(function ()
//                        {
//                            var id = $(this).attr('id');
////                                    var id = "#" + id;
////                                    //////////alert(id);
//                            var isEditable = $("#" + id).attr('data-editable');
//                            if (isEditable == "Y") {
//                                $("#" + id).datepicker({
//                                    changeMonth: true,
//                                    changeYear: true,
//                                    dateFormat: "dd-mm-yy",
//                                    showOn: "button",
//                                    buttonImage: 'images/date_picker_icon.png',
//                                    buttonImageOnly: true
//                                });
//                            }
//                        });
//                        var tabOldObj = {};
//                        $("#" + erpDataObj['tabGridId'] + "_TABLE" + " :input").each(function ()
//                        {
//                            var textid = $(this).attr("id");
//                            var type = $(this).attr("type");
//                            var textval = $(this).val();
//                            if (type != 'hidden') {
//                                if (textval != null && textval != '') {
//                                    textval = textval.toUpperCase();
//                                }
//                            }
//                            if (type != null && type == 'checkbox') {//
//                                if ($("#" + textid).is(':checked')) {
//                                    textval = "Y";
//                                } else {
//                                    textval = "N";
//                                }
//                            }
////                  jsonOBJ.ids.push(textid.toLowerCase());
//                            if (textid != null && textid != 'CREATE_DATE') {
//                                tabOldObj[textid] = textval;
//                            }
//                        });
//                        if (tabOldObj != null) {
//                            tabsOldData[erpDataObj['tabGridId']] = tabOldObj;
//                        }
//                    }
//                    $("#erpTabGridId").val(erpDataObj['erpTabGridId']);
//                    $("#" + erpDataObj['erpTabGridId'] + "HiddenGridData").val(erpDataObj['gridIds']);
//                    var UnselectedGridId;
//
//                    var matchedcount = 0;
//                    $('#' + erpTabGridId).on('unselecting', function (event) {
//                        UnselectedGridId = globalErpTab;
//
//                        console.log("before matchedcount : " + matchedcount);
//                        console.log("change matchedcount : " + changeflag);
//                        //console.log("UnselectedGridId : "+UnselectedGridId);
//
//                        var jsonOBJ = {};
//                        jsonOBJ.feildIds = [];
//                        jsonOBJ.feildValues = [];
//                        matchedcount = 0;
//                        console.log("after matchedcount : " + matchedcount);
//
//                        var dataView = $("#" + UnselectedGridId + "_Update").attr("data-view");
//                        var selectedTabOldData = tabsOldData[UnselectedGridId];
//                        if (dataView == "FORM-VIEW" && editableFlag == 'Y') {
//                            changeflag = false;
//                            $("[id*=" + UnselectedGridId + "]  :input").each(function () {
//                                var textid = $(this).attr("id");
//                                var type = $(this).attr("type");
//                                var textval = $(this).val();
////                console.log("textid:::" + textid);
//                                if (type != 'hidden') {
//                                    if (textval != null && textval != '') {
//                                        textval = textval.toUpperCase();
//                                    }
//                                }
//                                if (type != null && type == 'checkbox') {//
//                                    if ($("#" + textid).is(':checked')) {
//                                        textval = "Y";
//                                    } else {
//                                        textval = "N";
//                                    }
//                                }
//                                var textOldVal = "";
//                                if (selectedTabOldData != null) {
//                                    textOldVal = selectedTabOldData[textid];
//                                    if (textid != null && textid != 'CREATE_DATE' && textval != textOldVal) {
//                                        matchedcount++;
//                                    }
//                                }
//                                if (matchedcount > 0) {
//                                    changeflag = true;
//                                }
//                            });
//                        }
//                        if (dataView == "GRID-VIEW") {
//                            matchedcount = 1;
//                            console.log(" GRID-VIEW CODE");
//                            var changecount = 0;
//                            $("[id^=contenttable]  :input").each(function () {
//                                //            var textid = $(this).attr("id");
//                                var type = $(this).attr("type");
//                                var textval = $(this).val();
//                                console.log(" type : " + type + " textval : " + textval + " cell old value " + cellOldValue);
//
//                                if (type == 'textbox' && textval != null && textval != cellOldValue) {
//                                    changecount++;
//                                }
//                            });
//                            if (changecount > 0) {
//                                console.log(" grid input changed ccount " + changecount);
//                                changeflag = true;
//                                console.log("grid input changed : changeflag = " + changeflag);
//                            }
//                        }
//                    });
//
//                    $('#' + erpTabGridId).on('selecting', function (event) {
//                        var gridIds = $("#" + erpTabGridId + "HiddenGridData").val();
////                        var gridIds = $("#erpDataGridId").val();
//                        var gridIdsArry = gridIds.split(",");
//                        var selectedGridId = gridIdsArry[event.args.item];
//
//                        if (changeflag && matchedcount > 0) {
//                            if (tabSwitchflag) {
//                                event.cancel = true;
//                                // event.preventDefault();
//                            }
//                            $("#logoutDailog").html((labelObject['Unsaved changes will be lost'] != null ? labelObject['Unsaved changes will be lost'] : 'Unsaved changes will be lost') + ", " + (labelObject['you like to save'] != null ? labelObject['you like to save'] : 'you like to save') + "?");
//                            $("#logoutDailog").dialog({ resizable: false,
//                                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
//                                modal: true,
//                                width: 300,
//                                height: 135,
//                                fluid: true,
//                                buttons: [
//                                    {
//                                        text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
//                                        click: function () {
//                                            $(this).html("");
//                                            $(this).dialog("close");
//                                            $(this).dialog("destroy");
//                                        }
//                                    }, {
//                                        text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
//                                        click: function () {
//                                            $(this).html("");
//                                            $(this).dialog("close");
//                                            tabSwitchflag = false;
//                                            var selectedTab = event.args.item;
//                                            console.log("selectedTab  :: " + selectedTab);
//                                            changeflag = false;
//                                            $('#' + erpTabGridId).jqxTabs('select', selectedTab);
//                                            fetchErpTab(selectedGridId, erpTabGridId);
//                                            $(this).dialog("close");
//
//                                            changeflag = false;
//                                            tabSwitchflag = true;
//
//                                            console.log(length + " tabSwitchflag  : " + tabSwitchflag);
//
//                                        }
//                                    }
//                                ],
//                                open: function ()
//                                {
//                                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                                    $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
//                                    $(".visionHeaderMain").css("z-index", "999");
//                                    $(".visionFooterMain").css("z-index", "999");
//                                },
//                                beforeClose: function (event, ui)
//                                {
//                                    $(".visionHeaderMain").css("z-index", "99999");
//                                    $(".visionFooterMain").css("z-index", "99999");
//                                }
//                            });
//                        }
//
//                        if (!changeflag) {
//                            fetchErpTab(selectedGridId, erpTabGridId);
//                        } else if (erpTabGridId != null && erpTabGridId.indexOf("_OLD") > 0) {
//                            fetchErpTab(selectedGridId, erpTabGridId);
//                        }
//                        // fetchErpTab(selectedGridId, erpTabGridId);
//                    });
//                }
//
//            },
//            error: function (e) {
//                //  (e.message)
//                sessionTimeout(e);
//            }
//        });
//    }
//}
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
//        $("#extendedFullScreenViewFlag").val("NA");
//    } catch (e) {
//
//    }
    try {
        exitFullScreenMode();
    } catch (e) {

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
    if (!fetchattach)
    {
        $.ajax({
            type: "post",
            traditional: true,
            url: "fetchAttachmentTab",
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
                    gridObj['data'] = result['attachmentArray'];
                    gridObj['panelData'] = result['panelObject'];
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
function changeflagFuction() {
    changeflag = false;
    console.log("changeflagFuction -> " + changeflag);
}
//function eval(x) { 
//};
var fetchattach = false;
function fetchAttachmentsTabData(tabId, tabOldId, dependentAccorId, currntAccorId, wrapInd) {
    console.log("fetchAttachmentsTabData ::: START");
    var dependentAccorId = dependentAccorId;
    if (currntAccorId > -1) {
        alert(currntAccorId);
        // startAjax();
        $("[class*=_OLD]").addClass("ui-state-disabled");
        $(".ui-state-disabled").not(dependentAccorId).next("div").hide();
        $(dependentAccorId).next("div").toggle();
        $(".visionAccordionSeperator").remove();
        $("#" + tabId).after("<div class='visionAccordionSeperator'></div>");
        fetchAttachmentsTabData(tabOldId, tabId, '', '-1', 1);
    }


    var record_No = $('#RECORD_NO').val();
    var specModelNo = $("#SPEC_MODEL_NO").val();


    var requestNumber = $('#REQ_NUMBER').val();
    var baskettype = $('#baskettypehid').val();
    var enclosureedit = $("#encEditable").val();
    if (!fetchattach)
    {
        ajaxStartAttachments();
        setTimeout(function () {
            $.ajax({
                type: "post",
                traditional: true,
                // url: "SelectFiles?recordNo=" + record_No + "&&specModelNo= " + specModelNo + "&&baskettype=" + baskettype + "&&reqNumber=" + requestNumber + "&&tabId=" + tabId + "&&enclosureEdit=" + enclosureedit,
                url: "SelectFiles?recordNo=" + record_No + "&&specModelNo= " + specModelNo + "&&baskettype=" + baskettype + "&&reqNumber=" + requestNumber + "&&tabId=" + tabId + "&&enclosureEdit=" + enclosureedit,
                //url: "SelectFiles?recordNo=" + record_No + "&&baskettype=" + baskettype + "&&reqNumber=" +requestNumber +" &&tabId=" +tabId,
                cache: false,
                async: false,
                dataType: 'html',
                success: function (result) {
                    stopLoader();
                    $("#" + tabId).html(result);
                    $("#" + tabId).removeClass('visionEnclosureTable');
                    $("#" + tabId).addClass('visionEnclosureTable');
                    var i = 0;
                    if ($("#baskettypehid").val() == 'Search_View'
                            ||
                            $("#baskettypehid").val() == '_New_Extension_Requests' ||
                            $("#baskettypehid").val() == '_New_Change_Requests' ||
                            $("#baskettypehid").val() == '_New_Deletion_Requests' ||
                            $("#baskettypehid").val() == '_New_Undeletion_Requests') {

                    }
                    fetchattach = false;
                },
                error: function (e) {
                    //  alert(e.message)
                    sessionTimeout(e);
                }

            });
        }, 888);
    }
}
var colorcount = 0;
function getDictionaryPropertyDetails(classConceptId, className, propertyConceptId, property, event) {
    showLoader();
    var outerText = event.target.outerText;
    var offsetParent = event.target.offsetParent.className;
    var dictbl = $("#dictionarytbl").find("td");
    var domain = $('#SelectedValue').val();

    $.ajax({
        type: "POST",
        url: 'getDictionaryPropertyDetails',
        data: {
            'property': property,
            'className': className,
            'classConceptId': classConceptId,
            'propertyConceptId': propertyConceptId,
            domain: domain,
        },
        traditional: true,
        cache: false,
        success: function (result) {
            stopLoader();
            $("#dxp1Seconddiv").show();
            $("#dxp1Seconddiv").html(result);
            if (dictbl.hasClass('coloredActive') && colorcount >= 1) {
                dictbl.removeClass("coloredActive");
            }
            if (outerText != null && outerText != '' && outerText != undefined && outerText == property) {
                $("." + offsetParent).addClass("coloredActive");
                colorcount++;
//                $("."+oldClickedValue).removeClass("coloredActive");
            }
//            callApi();
//            const userAction = async () => {
//                const response = await fetch('http://idxp.pilogcloud.com:6655/BEARING/TYPE', {
//                    method: 'POST',
////                    body: "JSON", // string or object
//                    headers: {
//                        'Content-Type': 'application/json'
//                    }
//                });
//                const myJson = await response.json(); //extract JSON from the http response
//                // do something with myJson
//            }
        }

    });
}
function showBrowseButton1(param, tabId, dataView, response)
{
    try {
        if (response != null && response != '' && response != undefined) {
            $("div.visionCoFileImage").html(response);
        }
    } catch (e) {

    }
//    try {
//        var fullScreenViewFlag = $("#extendedFullScreenViewFlag").val();
//        if (fullScreenViewFlag != null && fullScreenViewFlag != 'undefined'
//                && fullScreenViewFlag != undefined && fullScreenViewFlag != "" && fullScreenViewFlag == "Y")
//        {
//            toggleFullScreen();
//        }
//    } catch (e) {
//
//    }
    try {
        exitFullScreenMode();
    } catch (e) {

    }
    $(".addIcon_" + param).hide();
    if (tabId == "MM_ATTACHMENTS_OLD")
    {
        var listval1 = $('#listOld_' + param).val();
    } else
    {
        var listval1 = $('#list_' + param).val();
    }

    var encvalue = listval1;
    var record_No = $('#RECORD_NO').val();
    var specModelNo = $("#SPEC_MODEL_NO").val();
    var vendorId = $('#VENDOR_ID').val();
    var baskettype1 = $("#baskettypehid").val();
    var source = $('#SOURCE').val();
    var accountId = $('#ACCOUNT_ID').val();
    if (!(source != null && source != '' && source != undefined))
    {
        source = $("#" + tabId).attr("initParamSource");
        if (!(source != null && source != '' && source != undefined))
        {
            source = $("#initParamSource").val();
        }
    }
    var defaultFlag = "";
    var baskettype = "";
    if (baskettype1 != null && baskettype1 != '') {
        baskettype = baskettype1.replace(/\s/gi, "_");
    }
    var request_number = $("#REQ_NUMBER").val();
    var locate_code = $("#locatcode").val();
    var url = 'UploadAttachFiles';
    var params = {
        tabId: tabId,
        gridId: tabId
    };
    if (dataView != null && dataView != '' && dataView == "GRID-VIEW")
    {
        params['panelId'] = $("#panelId").val();
        params['tableName'] = $("#tableName").val();
        listval1 = $('#' + tabId).jqxGrid('getcellvalue', 0, "ATTACH_TYPE");
        var checkAttachType = $("#checkAttachType").val();
        if (!(checkAttachType != null && checkAttachType != '' && checkAttachType != undefined))
        {
            checkAttachType = $("#" + tabId).attr("checkAttachType");
        }
        params['checkAttachType'] = checkAttachType;
        defaultFlag = $('#' + tabId).jqxGrid('getcellvalue', 0, "DEFAULT_FLAG");
        if (defaultFlag)
        {
            defaultFlag = "Y";
        } else
        {
            defaultFlag = "N";
        }
        params['defaultFlag'] = defaultFlag;
        params['source'] = source;
        params['accountId'] = accountId;
        try {
            var data = $('#' + tabId).jqxGrid('getrowdata', 0);
            if (data != null) {

                for (var datakey in data) {
                    if (datakey != null && datakey != 'CONTENT') {
                        params[datakey] = data[datakey];
                    }
                }
            }
        } catch (e) {

        }

        try {
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
//            if (textid != null && textid != 'CREATE_DATE' && textid != 'EDIT_DATE') {
//
//                basicData[textid] = textval;
//            }

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

            if (basicData != null) {

                for (var key in basicData) {
                    if (key != null && key != 'CONTENT' && key != 'AUDIT_ID') {
                        params[key] = basicData[key];
                    }
                }
            }


        } catch (e) {

        }

        var masterId = $("#mastergridid").val();
        if (masterId != null) {
            var selectedrowindex = $('#' + masterId).jqxGrid('getselectedrowindex');
            record_No = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "RECORD_NO");
            request_number = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "REQ_NUMBER");
            specModelNo = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "SPEC_MODEL_NO");
            var spirRecId = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "SPIR_REC_ID");
            vendorId = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "VENDOR_ID");
            params['spirRecId'] = spirRecId;
        }
    }
    params['recordNo'] = record_No;
    params['requestNumber'] = request_number;
    params['specModelNo'] = specModelNo;
    params['attachType'] = listval1;
    params['vendorId'] = vendorId;
//    window.chckValues.push(param);
    var attach_val = "Y";
    if (attach_val.trim() == 'Y')
    {
        var id = "#browseTdId_" + param;
        if (tabId == "MM_ATTACHMENTS_OLD")
        {
            browseId = "#browseIdOld_" + param;
        } else
        {
            browseId = "#browseId_" + param;
        }
        if (dataView == "GRID-VIEW")
        {
            browseId = "#visionColFileId";
        }
        $(id).show();
        var validExtensions = ['xps', 'gif', 'png', 'jpg', 'jpeg', 'tif', 'tiff', 'pdf', 'bmp', 'xls', 'xlsx', 'doc', 'docx', 'txt'];
        var validExtensionsString = $(browseId).attr("accept");
        if (validExtensionsString != null && validExtensionsString != 'undefined' && validExtensionsString != '') {
            var validExtensionsStr = validExtensionsString.replace(/\./gi, "");
            validExtensions = validExtensionsStr.split(',');
        }
        $(browseId).ajaxfileupload({
            'action': url,
            params: params,
            valid_extensions: validExtensions,
            'onComplete': function (response) {

                $("#wait").css("display", "none");

                var serverResponce = JSON.stringify(response.message);

                $(id).hide();

                if (serverResponce.lastIndexOf("File is Empty,Can't be Uploaded.") > -1) {//File is Empty,Cann't be Uploaded.

                    var baskettype = $("#baskettypehid").val();
                    var modalObj = {
                        title: 'Message',
                        body: serverResponce,
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
                    createModal("dataDxpSplitterValue", modalObj);
                } else if (serverResponce.lastIndexOf("Size of each file should not exceed 5000KB.") > -1) {//Size of each file should not exceed 5000KB.

                    var modalObj = {
                        title: 'Message',
                        body: serverResponce,
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
                    createModal("dataDxpSplitterValue", modalObj);

                } else if (serverResponce.lastIndexOf("Maximum Size") > -1) {//Size of each file should not exceed based on max size in battachtype table.
                    var res = serverResponce.replace('"', '').replace('"', '').replace('"', '').replace('"', '').replace('"', '').replace('"', '');
                    var modalObj = {
                        title: 'Message',
                        body: res,
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
                    createModal("dataDxpSplitterValue", modalObj);

                } else if (serverResponce.lastIndexOf("Please Upload Image or PDF File Only.") > -1
                        || serverResponce.lastIndexOf("Please Upload files with") > -1) {//Size of each file should not exceed 5000KB.
                    var modalObj = {
                        title: 'Message',
                        body: "Please Upload files with " + validExtensionsString + " extension(s) only",
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
                    createModal("dataDxpSplitterValue", modalObj);
                } else if (serverResponce.lastIndexOf("Failed to Insert.Multiple rows does not allow Default Flag") > -1
                        || serverResponce.lastIndexOf("Please Insert one Attachment with Default Flag") > -1) {//Size of each file should not exceed 5000KB.
                    serverResponce = serverResponce.replace(/['"]+/g, '');
                    var dialogSplitMessage = dialogSplitIconText(serverResponce, "Y");
                    var modalObj = {
                        title: 'Message',
                        body: dialogSplitMessage,
                    };
                    var buttonArray = [
                        {
                            text: 'Close',
                            click: function () {
                                if (dataView == "GRID-VIEW")
                                {

                                    if ($("#attachGridViewFlag").val() != null && $("#attachGridViewFlag").val() == "Y") {
                                        //fetchTabsData(masterId, selectedrowindex);
//                                        refreshGridData(tabId);
                                    } else {
                                        fetchAttachmentsTabGridData(tabId);
                                    }
                                }
                            },
                            isCloseButton: true
                        }
                    ];
                    modalObj['buttons'] = buttonArray;
                    createModal("dataDxpSplitterValue", modalObj);
                } else
                {
                    if (dataView == "GRID-VIEW")
                    {

                        if ($("#attachGridViewFlag").val() != null && $("#attachGridViewFlag").val() == "Y") {
                            //fetchTabsData(masterId, selectedrowindex);
                            refreshGridData(tabId);
                        } else {
                            fetchAttachmentsTabGridData(tabId);
                        }
                    } else
                    {
                        fetchAttachmentsTabData(tabId);
                    }

//                    fetchAttachmentsTabData(tabId);
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
//        $("#browseTdId_" + param).show();

        $(id).on('uploadEnd', function (event) {
            var args = event.args;
            var fileName = args.file;
            var serverResponce = args.response;

            $(id).hide();

            if (serverResponce.lastIndexOf("File is Empty,Can't be Uploaded.") > -1) {//File is Empty,Cann't be Uploaded.

                var baskettype = $("#baskettypehid").val();
                var modalObj = {
                    title: 'Message',
                    body: serverResponce,
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
                createModal("dataDxpSplitterValue", modalObj);
            } else if (serverResponce.lastIndexOf("Size of each file should not exceed 5000KB.") > -1) {//Size of each file should not exceed 5000KB.

                var modalObj = {
                    title: 'Message',
                    body: serverResponce,
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
                createModal("dataDxpSplitterValue", modalObj);
            } else if (serverResponce.lastIndexOf("Please Uplaod Image or PDF File Only.") > -1) {//Size of each file should not exceed 5000KB.

                var modalObj = {
                    title: 'Message',
                    body: serverResponce,
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
                createModal("dataDxpSplitterValue", modalObj);
            } else {
                getEnclosureList(encvalue, param);
            }
        });
        if (dataView == "GRID-VIEW")
        {
            $(browseId).click();
        }
    } else {
    }
}
function showPdf(id, tabId)
{
    $("#pdfMM").css('display', 'block');
    $("#pdfMM").html("");
    alert("hijkj");
    var baskettype = $("#baskettypehid").val();
    console.log("baskettype::" + baskettype);
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
    var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
    var content = "";
    var deleteIcon = "";
    $('#addAttachmentId').hide();
    if (tabId == 'MM_ATTACHMENTS_OLD')
    {
        content = $('#pdfHiddenIdOld_' + id).val();
        deleteIcon = "";
    } else
    {
        content = $('#pdfHiddenId_' + id).val();
        deleteIcon = "<img src='images/delete.gif' id='deleteAttachmentId' class='visionDeleteAttachment' title='Delete' onclick=\"updateAttachments('delete', 'pdf','" + tabId + "')\" >";
    }
    $('#hiddenRowId').val(id);
    var pdfContent = "";
    var browserType = "";
    //var deleteIcon="<img src='images/delete.gif' id='deleteAttachmentId' class='visionDeleteAttachment' title='Delete' onclick=\"updateAttachments('delete', 'pdf','" + tabId + "')\" >";
    var role = $('#rolehid').val();
    var specModelNo = $('#SPEC_MODEL_NO').val();
    console.log("enc list:show pdf::" + role);
    var encEditable = $("#encEditable").val();
    if (encEditable != null && encEditable == 'N')

    {
        pdfContent = " <iframe id='thedialog' class='visionFormTheDialog' src='materialPDF?id=" + id + "&tabId=" + tabId + "&specModelNo=" + specModelNo + "' onload='showDeleteButton()' ></iframe>";
        $("#somediv").dialog({resizable: false,
            modal: true,
            title: '',
            width: 1100,
            height: 500,
            fluid: true,
            close: function () {
                $("#thedialog").attr('src', '');
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
        pdfContent = " <iframe id='thedialog' class='visionFormTheDialog' src='materialPDF?id=" + id + "&tabId=" + tabId + "&specModelNo=" + specModelNo + "'  ></iframe>";
        $("#somediv").dialog({resizable: false,
            modal: true,
            title: '',
            width: 1100,
            height: 500,
            fluid: true,
            close: function () {
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
        $("#deleteIcon").html(deleteIcon);

        //  frameContent = "<iframe frameborder='0' height='100' width='100' src='tempFiles/" + content + "' style='border:solid 1px #000;' id='iframeid' onload='showDeleteButton()'/>";
    }
    console.log(pdfContent);

    $("#thedialog").show();

    $("#pdfMM").html(pdfContent);

}
function showImage(row_id, tabId) {
    alert(tabId);
    $('#deleteAttachmentId').hide();
    //  $('#deleteAttachmentId1').hide();
    $('#addAttachmentId').hide();
    $('#thedialog').hide();
    var baskettype = $("#baskettypehid1").val();
    var insertContent = "";
    var imgContent = "";
    if (tabId == "MM_ATTACHMENTS_OLD")
    {
        insertContent = $('#imageOld_' + row_id).attr("src");
        imgContent = "";
    } else
    {
        insertContent = $('#image_' + row_id).attr("src");
        imgContent = "<img src='images/delete.gif' id='deleteimgAttachmentId'  class='visionDeleteAttachment' title='Delete' onclick=\"updateAttachments('delete', 'image','" + tabId + "')\">";
    }

    var maincontent = "";
    // var imgContent="<img src='images/delete.gif' id='deleteimgAttachmentId'  class='visionDeleteAttachment' title='Delete' onclick=\"updateAttachments('delete', 'image','" + tabId + "')\">";
    console.log("baskettype::" + baskettype);
    var role = $('#rolehid').val();
    console.log("enc list:show Image::" + role);
    var encEditable = $("#encEditable").val();
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
            fluid: true,
            close: function () {
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

    } else
    {
        $("#imgdialog").attr('src', insertContent);
        $("#imgdiv").dialog({resizable: false,
            modal: true,
            title: '',
            width: 1100,
            height: 500,
            fluid: true,
            close: function () {
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
        $("#deleteImg").html(imgContent);
    }
    $('#hiddenRowId').val(row_id);
    $("#imagedispid").html(maincontent);
}
//otp verification code//
function save_email_toDB(basicData) {//21222
    var verified_email = $("#email_id").val();
    showLoader();
    $.ajax({
        dataType: 'html',
        type: "POST",
        url: 'register',
        traditional: true,
        cache: false,
        data: {
            'verified_email': verified_email
        },
        success: function () {
            stopLoader();
        }
    });
}
function sendOtp() {
    $(".otp_status").text("");
    var email = $("#email_id").val();
    $(".email_status").text(""); //16322 otp to email
    $("#again_otp").hide(); //17322
    $("#otp_textfield").css({"border": "none", "border-bottom": "1px solid #ddd"}); //17322

    showLoader();
    $.ajax({
        datatype: 'html',
        type: "POST",
        url: 'emailOtpVerification',
        traditional: true,
        cache: false,
        data: {
            'email': email
        },
        success: function (result) {

            var resultObj = {};
            resultObj = JSON.parse(result);
            var message = resultObj['message'];
            var flag = resultObj['flag'];
            var mail_already_exists = resultObj['mail_already_exists'];
            if (mail_already_exists) {
                $("#form-total").find("button").show();
                $("#email_id").css({"border": "#00FF00 solid 1px"}); //15322
                //11322
                $("#form-total").find("button").removeAttr("disabled");
            }
            if (flag) {
                stopLoader();
                clearInterval(testInterval);
                cooldown();
                $("#otp_textfield").show();

                $("#verifyOtpBtn").show();
                $(".email_status").show();
                $(".email_status").removeClass("otp_status_red");
                $(".email_status").addClass("otp_status_green");
                $(".email_status").text("Otp sent successfully to: " + email);
            } else {
                stopLoader();
                $(".email_status").show();
                $(".email_status").text(message);
                $(".email_status").addClass("otp_status_red");
            }
        }
    });
}
//17222
function verifyAddress(event) {
    var email = $("#email_id");
    $(".email_status").removeClass("otp_status_red"); //16322 otp to email_status
    $(".email_status").removeClass("otp_status_green");
    $("#form-total").find("button").attr("disabled", "true");
    $("#email_id").css({"border": "none", "border-bottom": "1px solid #ddd"});
    $("#verifyOtpBtn").hide();
    $("#verifyOtpBtn").css({"display": "none"});
//    verifyOtpBtn
//                        $("#email_id").css({"border": "none", "border - bottom": "1px solid #ddd"});
    if ((/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.val())))
    {
        $("#first_verify_acc").show();
//        $("#verifyOtpBtn").show();15322 changed the id from button to a in jsp
        $("#form-total").find("button").hide();
        $("#activate_account").show(); //7322
    } else {
        $("#first_verify_acc").hide();
        $("#verifyOtpBtn").hide();
//        $("#form-total").find(".btn").show();
        $(".email_status").hide();
        $("#activate_account").hide(); //7322
    }
}
//18222
function verify_email_otp() {
    $("#verifyOtpBtn").hide();
    $(".otp_status").text("");
    $(".otp_status").removeClass("otp_status_green");
    $(".otp_status").removeClass("otp_status_red");

    var otpValue = $("#otp_textfield").val();
//    var recievedotp = $("#otp_gen").val();
    $.ajax({
        dataType: 'html',
        type: "POST",
        url: 'checkOtpVal',
        traditional: true,
        cache: false,
        data: {
            'otpValue': otpValue
        },
        success: function (valid) {
            // if (otpValue == recievedotp) {
            var validVar = JSON.parse(valid);
            $("#otp_textfield").val(""); //17322
            if ($("#timer").val() == 0) {//21322 for expiry otp
                validVar = 0;
//                $(".otp_status").removeClass("otp_status_green");
                $(".otp_status").addClass("otp_status_red");
                $(".otp_status").text("OTP expired please send the OTP again");
                $("#first_verify_acc").show();
                $("#verifyOtpBtn").show(); //16322
                $("#timer").hide(); //17322
                $("#again_otp").show(); //17322
                $("#otp_textfield").css({"border": "#ff2C2C solid 1px"}); //16322

            } else if (validVar.check) {
                clearInterval(testInterval);
                cooldown(1);
                $(".email_status").hide(); //16322
//                $(".otp_status").removeClass("otp_status_red");
                $(".otp_status").addClass("otp_status_green");
                $(".otp_status").text("Account Verified");
                $("#form-total").find("button").show();
                $("#verifyOtpBtn").hide();
                $("#otp_textfield").hide();
                $(".otp_notify").show();
                $("#first_verify_acc").hide();
//                #00FF00 #1faf1f
                $("#email_id").css({"border": "#00FF00 solid 1px"});
                $("#form-total").find("button").removeAttr("disabled");
            } else {
                $(".otp_status").text("");
//                $(".otp_status").removeClass("otp_status_green");
                $(".otp_status").addClass("otp_status_red");
                $(".otp_status").text("OTP was Incorrect");
                $("#first_verify_acc").show();
                $("#verifyOtpBtn").show(); //16322
                $("#timer").hide(); //17322
                $("#again_otp").show(); //17322

//                $("#first_verify_acc").text("Verify Again");
                $("#otp_textfield").css({"border": "#ff2C2C solid 1px"}); //16322
            }
        }
    });
}

function cooldown(breakCooldown) {
//    aparently u cant write int in forloop in js use let instead
    $("#first_verify_acc").hide();
    $("#timer").show();
    var stopTimer = 0;
    if (breakCooldown == 1) {
        $("#again_otp").hide();
        $("#timer").hide();
        $("#again_otp").hide();
        stopTimer = 1;
    } else {
        var c = 30;
        testInterval = setInterval(function () {
            if (c >= 0) {
                $("#timer").val(c);
                c--;
            }
            if (c == 0 && stopTimer == 0) {
                $("#timer").hide();
                $("#again_otp").show();
            }
        }
        , 1000);
    }
}
//otp verification code//
$(document).ready(function () {
    var redirectFromActiveUser = window.location.search;
    if (redirectFromActiveUser != '' && redirectFromActiveUser.includes("id")) {
        $('#accountActivationModal').modal('show');
        setTimeout(function () {
            window.close();
        }, 10000);
    }
});
function activateAccount() {//7322
    var email = $("#email_id").val();
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: 'accountActivation',
        traditional: true,
        cache: false,
        data: {
            email: email,
        },
        success: function (data, textStatus, jqXHR) {
        }
    });
}
function sideMenuAccess(ssRole) {
    var ssUserName = $("#ssUsername").val();
    if (ssUserName == null || ssUserName == undefined || ssUserName == '') {
        console.log("hypothesys BreakDown");
        var modalObj = {
            title: 'Message',
            body: "Please signin to access the services"
        };
        var buttonArray = [
            {
                text: 'Close',
                click: function () {
                    if (modalObj['body']) {
                    } else {
                        $("#myModal").css("display", "none");
                    }
                },
                isCloseButton: true
            }
        ];
        modalObj['buttons'] = buttonArray;
        createModal("dataDxpSplitterValue", modalObj);
        setTimeout(stopLoader, 1000);
    }
}
function activationMailToUser(userName) {
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: "activateUserThroughLink",
        traditional: true,
        cache: false,
        data: {
            userName: userName,
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var modalObj = {
                    title: 'Message',
                    body: response['message']
                };
                var buttonArray = [
                    {
                        text: 'Close',
                        click: function () {
                            if (response['messageFlag']) {
                                window.location.href = "https://pilogcloud.com/iVisionDXP/";
                            } else {
                                $("#myModal").css("display", "none");
                            }
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("myModal", modalObj);
            }
        },
    });
}
function processLoginAuth(rsUsername) {
    showLoader();
    var user = rsUsername.toUpperCase();
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: 'getProcessLoginAuth',
        traditional: true,
        cache: false,
        data: {
            userName: user
        },
        success: function (response) {
            stopLoader();
            var processVal = response['processVal'];
            if (processVal != null && processVal.includes("otp") && processVal.includes("captcha")) {
                localStorage.setItem("securityVerify", processVal)
                var OtpCode = response['OtpCode'];
                var captchaCode = response['captchaCode'];
                $("#verifyLoginSecurity").html(captchaCode);
                $("#verifyLoginSecurity").append(OtpCode);
                CreateCaptcha();
                $(".showorHidePassword").show();
                $("#showPassword").hide();
                $("#processLoginID2").show();
                $("#loginError").hide();
                $("#rsPassword").focus();
            } else if (processVal != null && processVal != "" && processVal != undefined && processVal.includes('captcha')) {
                var captchaCode = response['captchaCode'];
                localStorage.setItem("securityVerify", processVal);
                $("#verifyLoginSecurity").html(captchaCode);
                $("#showPassword").hide();
                $("#processLoginID2").show();
                $("#loginError").hide();
                $("#rsPassword").focus();
                CreateCaptcha();
                $(".showorHidePassword").show();
            } else if (processVal != null && processVal != "" && processVal != undefined && processVal == 'otp') {
                var OtpCode = response['OtpCode'];
                localStorage.setItem("securityVerify", processVal);
                $("#verifyLoginSecurity").html("");
                $("#verifyLoginSecurity").append(OtpCode);
//                CreateCaptcha();
                $(".showorHidePassword").show();
                $("#showPassword").hide();
                $("#processLoginID2").show();
                $("#loginError").hide();
                $("#rsPassword").focus();
            } else if (processVal != null && processVal != "" && processVal != undefined && processVal == 'none') {
                localStorage.setItem("securityVerify", processVal);
                $("#verifyLoginSecurity").html("");
                $(".showorHidePassword").show();
                $("#showPassword").hide();
                $("#processLoginID2").show();
                $("#loginError").hide();
                $("#rsPassword").focus();
            }
            try {
                $("#languageMainDivId").parent().show();
                $("#languageMainDivId").html($("#selectionHiddenId").val());
            } catch (e) {
            }


        }
    });
}
//otp
//function processLoginAuth(rsUsername) {
//    showLoader();
//    var user = rsUsername.toUpperCase();
//    $.ajax({
//        dataType: 'JSON',
//        type: 'POST',
//        url: 'getProcessLoginAuth',
//        traditional: true,
//        cache: false,
//        data: {
//            userName: user
//        },
//        success: function (response) {
//            stopLoader();
//            var message = response['message'];
//            var messageFlag = response['messageFlag'];
//            localStorage.setItem("userName", user);
//            console.log("userName:::" + user + "messageFlag:::::" + messageFlag);
//            if (messageFlag === false) {
//                $("#loginError").html(message);
//                var passwordFlag = response['passwordFlag'];
//                var status = response['status'];
//                if (status == "INACTIVE") {
//                    $("#loginError").html(message);
//                    return false;
//                }
//                if (passwordFlag == "N" || passwordFlag == "R") {
//                    $("#processLoginID2").hide();
//                    $(".showorHidePassword").remove();
//                    $("#loginError").hide();
//                    resetPasswordForInActiveUsers(user, passwordFlag);
//                } else {
//                    $("#processLoginID2").hide();
//                    $("#loginError").show();
//                    $(".showorHidePassword").hide();
//                    $(".showorHidePassword").css("display", "none !important");
//                    $("#showPassword").show();
//                    return false;
//                }
//
//            } else {
//
//                var processVal = response['processVal'];
//                if (processVal != null && processVal.includes("otp") && processVal.includes("captcha")) {
//                    localStorage.setItem("securityVerify", processVal)
//                    var OtpCode = response['OtpCode'];
//                    var captchaCode = response['captchaCode'];
//                    $("#verifyLoginSecurity").html(captchaCode);
//                    $("#verifyLoginSecurity").append(OtpCode);
//                    CreateCaptcha();
//                    $(".showorHidePassword").show();
//                    $("#showPassword").hide();
//                    $("#processLoginID2").show();
//                    $("#loginError").hide();
//                    $("#rsPassword").focus();
//                } else if (processVal != null && processVal != "" && processVal != undefined && processVal.includes('captcha')) {
//                    var captchaCode = response['captchaCode'];
//                    localStorage.setItem("securityVerify", processVal);
//                    $("#verifyLoginSecurity").html(captchaCode);
//                    $("#showPassword").hide();
//                    $("#processLoginID2").show();
//                    $("#loginError").hide();
//                    $("#rsPassword").focus();
//                    CreateCaptcha();
//                    $(".showorHidePassword").show();
//                } else if (processVal != null && processVal != "" && processVal != undefined && processVal == 'otp') {
//                    var OtpCode = response['OtpCode'];
//                    localStorage.setItem("securityVerify", processVal);
//                    $("#verifyLoginSecurity").html("");
//                    $("#verifyLoginSecurity").append(OtpCode);
////                CreateCaptcha();
//                    $(".showorHidePassword").show();
//                    $("#showPassword").hide();
//                    $("#processLoginID2").show();
//                    $("#loginError").hide();
//                    $("#rsPassword").focus();
//
//                } else if (processVal != null && processVal != "" && processVal != undefined && processVal == 'none') {
//                    localStorage.setItem("securityVerify", processVal);
//                    $("#verifyLoginSecurity").html("");
//                    $(".showorHidePassword").show();
//                    $("#showPassword").hide();
//                    $("#processLoginID2").show();
//                    $("#loginError").hide();
//                    $("#rsPassword").focus();
//                }
//
//            }
//        }
//    });
//}

function CreateCaptcha() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
    }
    cd = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f;
    $('#CaptchaImageCode').empty().append('<div id="CapCode" class="capcode" width="200" height="70">' + cd + '</div>')
}
let isotpSendButtonClicked = false;
function otpSend(username, processVal) {
    if (processVal && processVal.includes("otp") && processVal.includes("captcha")) {
        var captcha = $("#CapCode").text();
        var val = $("#userCaptchaCode").val();
        if (val == '') {
            $("#captchaErrorrText").insertBefore
                    ("#userCaptchaCode").html("<div style='color:red;margin-bottom:4px;'>Captcha cannot be empty</div>");
            $("#userCaptchaCode").css("border", "2px solid red")
            return;
        } else if (val != captcha.replaceAll(' ', '')) {
            CreateCaptcha();
            $("#userCaptchaCode").val("");
            $("#captchaErrorrText").html("<blink style='color:red;'>Invalid captcha code. Please try again.</blink>");
            return;
        }
        $("#captchaErrorrText").html("");
        $("#userCaptchaCode").css("border", "2px solid green");
    }

    isotpSendButtonClicked = true;
    showLoader();
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: 'getProcessLoginOtpAuth',
        traditional: true,
        cache: false,
        data: {
            userName: username
        },
        success: function (response) {
            stopLoader();
            var status = response['status'];
            if (status != null && status != "" && status != undefined && status == 'success') {
                var otpInput = response['otpInput'];
//                var OtpCode = response['otp'];
//                localStorage.setItem("otp", OtpCode);
                $("#processLoginID2").show();
                $("#securityVerifyOtp").hide();
                $("#OtpEnterError").html("");
                $("#verifyLoginSecurity").append(otpInput);
                $("#otpStatus").html(response.otpmsg);
                $("#otpUserCode").focus();
            } else {

                $("#OtpEnterError").text(response.otpInput);
                $("#OtpEnterError").css("color", "red");
            }
        }
    });
}
function securityVerifyAuth(encCode, securityVerify) {
    var capCodI = $("#userCaptchaCode").val();
    if (capCodI != "") {
        if (encCode == capCodI || encCode == btoa(capCodI)) {
            $("#loginError").hide();
            $("#processLoginID2").hide();
            $("#processLoginID").show();
            processLoginSubmit();
        } else {
            if (securityVerify == 'captcha') {
                $("#loginError").html("Please Enter correct Captcha");
                $("#loginError").show();
            } else if (securityVerify == 'otp') {
                $("#loginError").html("Please Enter correct OTP");
                $("#loginError").show();
            }
        }
    } else {
        if (securityVerify == 'captcha') {
            $("#loginError").html("captcha cannot be empty");
            $("#loginError").show();
        } else if (securityVerify == 'otp') {
            $("#loginError").html("OTP cannot be empty");
            $("#loginError").show();
        }
    }
}
//otp
function callApi() {
    let request = new XMLHttpRequest();
    request.open("GET", "http://idxp.pilogcloud.com:6655/BEARING/TYPE");
    request.send();
    request.onload = () => {
        console.log(request);
        if (request.status == 200) {
            console.log(JSON.parse(request.responseText));
        } else {
            console.log(JSON.parse(request.responseText));
        }
    }
    console.log(request);
    var modalObj = {
        title: "Api Response",
        body: request
    };
    var buttonArray = [
        {
            text: "OK",
            click: function () {
            },
            isCloseButton: true
        },
    ];
    modalObj['buttons'] = buttonArray;
    createModal("dataDxpSplitterValue", modalObj);
    $(".modal-dialog").addClass("modal-xl dxpToolBarCustomize opacity-animate3");
}
var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();
//$(document).ready(function () {
//    $("#roleSecure").hide();
//    $('#visionLoginpageInner').keyup(function (event) {
//        if (event.which === 13) {
//            event.preventDefault();
//            loginOpeartions();
//        }
//    });
//    $("#visionLoginpageInner").on("hidden.bs.modal", function () {
//        $("#loginError").html("");
//        $("#rsUsername").val("");
//        $("#rsPassword").val("");
//    });
//
//});
$(document).ready(function () {
    $("#roleSecure").hide();
    $('#visionLoginpageInner').keyup(function (event) {
        if (event.which !== 13)
            return;
        event.preventDefault();
        const securityStatus =
                (localStorage.getItem("securityVerify") || "").toLowerCase();
        const hasOtp = securityStatus.includes("otp");
        const hasCaptcha = securityStatus.includes("captcha");
        if ($("#rsUsername").is(":visible") && !$("#rsPassword").is(":visible")) {
            $("#processLoginID").click();
            return;
        }
        if (hasOtp && hasCaptcha) {
            if ($("#userCaptchaCode").is(":visible") &&
                    !$("#otpUserCode").is(":visible")) {
                $("#securityVerifyOtp").click();
                return;
            }
            if ($("#otpUserCode").is(":visible")) {
                $("#processLoginID2").click();
                return;
            }
        }
        if (hasOtp && !hasCaptcha) {

            if (!$("#otpUserCode").is(":visible")) {
                $("#securityVerifyOtp").click();
                return;
            }
            $("#processLoginID2").click();
            return;
        }
        if (!hasOtp && hasCaptcha) {
            $("#processLoginID2").click();
            return;
        }
        $("#processLoginID2").click();
    });
    $("#visionLoginpageInner").on("hidden.bs.modal", function () {
        $("#loginError").html("");
        $("#rsUsername").val("");
        $("#rsPassword").val("");
    });

});
function showNextPassword() {
    var userName = $("#rsUsername").val();
    if (userName != null && userName != undefined && userName != '') {
        processLoginAuth(userName);
    } else {
        $("#loginError").html("Username cannot be empty");
    }

}
function loginOpeartions() {
    $("#loginError").hide();
    var rsUsername = $("#rsUsername").val();
    var rsPassword = $("#rsPassword").val();
    if (rsUsername != null && rsUsername != '' && rsUsername != undefined) {
        $("#processLoginID").text("Sign In");
        $("#roleSecure").show();
        $("#processLoginID").hide();
        $("#processLoginID2").show();
    }
    if (!(rsUsername != null && rsUsername != '')) {
        $("#loginError").html("Username cannot be empty");
        $("#loginError").show();
//        $(".visionLoginpageInner").effect("shake", shakeOptions);
        $("#rsUsername").focus();
    } else {
        var userCaptchaCode = $("#userCaptchaCode").val();
        if (userCaptchaCode != null && userCaptchaCode != '' && userCaptchaCode != undefined) {
            $("#loginError").hide();
            if (rsUsername != null && rsUsername != '' &&
                    rsPassword != null && rsPassword != '') {
                processLoginSubmit();
            } else {
                processLoginAuth(rsUsername);
            }
        } else {
            processLoginAuth(rsUsername);
        }
    }
}
function loginOpeartions2() {
    var secVerify = localStorage.getItem("securityVerify");
    var rsPassword = $("#rsPassword").val();
    var rsUsername = $("#rsUsername").val();
    if (!(rsUsername != null && rsUsername != "")) {
//        $(".visionLoginpageInner").effect("shake", shakeOptions);
        $("#rsUsername").focus();
//       $("#processLoginID2").hide();
        $("#processLoginID").hide();
        $("#loginError").show();
        var blinkText = "<blink>Username cannot be empty</blink>";
        $("#loginError").html(blinkText);
        $("#roleSecure").hide();
        $("#rsPassword").val('');
        $("#loginError").css("color", "red");
        return;
    } else if (!(rsPassword != null && rsPassword != "")) {
        $("#passwordError").show();
        $("#loginError").hide();
        var blinkText = "<blink>Password cannot be empty</blink>";
        $("#passwordError").html(blinkText);
//        $(".visionLoginpageInner").effect("shake", shakeOptions);
        $("#rsPassword").focus();
        $("#passwordError").css("color", "red");
        return;
    } else if (rsPassword != null && rsPassword != "" && secVerify.includes("captcha") && secVerify.includes("otp")) {
        var captcha = $("#CapCode").text();
        var otpField = $("#otpUserCode").val();
        var security = localStorage['otp'];
        var val = $("#userCaptchaCode").val();
        $("#userCaptchaCode").css("border", "1px solid #ced4da");
        $("#captchaErrorrText").html("");
        if (val == captcha.replaceAll(' ', '')) {
            $("#captchaErrorrText").html("");
            $("#userCaptchaCode").css("border", "2px solid green");
        } else if (val == '') {
            $("#userCaptchaCode").focus();
            $("#captchaErrorrText").insertBefore
                    ("#userCaptchaCode").html("<div style='color:red;margin-bottom:4px;'>Captcha cannot be empty</div>");
            $("#userCaptchaCode").css("border", "2px solid red");

            return;
        } else {
            CreateCaptcha();
            $("#userCaptchaCode").val("");
            $("#captchaErrorrText").html("<blink style='color:red;'>Captcha not matched</blink>");
            return;
        }
//         if (isotpSendButtonClicked) {
//        otpSend(rsUsername, secVerify);
//        return;
//    }
//        if (security == btoa(otpField)) {
//            localStorage.setItem("otp", "");
//            processLoginSubmit();
//
//
//        } else if (security != btoa(otpField) && otpField != '') {
//            if (isotpSendButtonClicked == false) {
//                $("#OtpEnterError").html("Click OTP to generate");
//                return;
//            } else {
//                $("#otpUserCode").val("");
//                $("#otpStatus").html("<blink style='color:red;'>Invalid otp</blink>");
//                return;
//            }
//        } else {
//            $("#otpStatus").html("<blink style='color:red;'>otp cannot be empty</blink>");
//            $("#OtpEnterError").html("");
//            return;
//        }

        validateotp(rsUsername, otpField);
//        return;

//        processLoginSubmit();

    } else if (rsPassword != null && rsPassword != "" && secVerify.includes("captcha")) {
        var captcha = $("#CapCode").text();
        var val = $("#userCaptchaCode").val();
        if (val == captcha.replaceAll(' ', '')) {
            processLoginSubmit();
        } else if (val == '') {
            $("#captchaErrorrText").insertBefore
                    ("#userCaptchaCode").html("<div style='color:red;margin-bottom:4px;'>Captcha cannot be empty</div>");
            $("#userCaptchaCode").css("border", "2px solid red")
            return;
        } else {
            CreateCaptcha();
            $("#userCaptchaCode").val("");
            $("#captchaErrorrText").html("<blink style='color:red;'>Invalid captcha code. Please try again.</blink>");
            return;
        }

    } else if (rsPassword != null && rsPassword != "" && secVerify.includes("otp")) {
        var otpField = $("#otpUserCode").val();
//        var security = localStorage['otp'];
//        if (security == btoa(otpField)) {
//            localStorage.setItem("otp", "");
//            processLoginSubmit();
//
//        } else if (security != btoa(otpField) && otpField != '')
//            if (isotpSendButtonClicked == false) {
//                $("#OtpEnterError").html("Click OTP to generate");
//                return;
//            } else {
//                $("#otpStatus").html("<blink style='color:red;'>Incorrect OTP</blink>");
//                $("#OtpEnterError").html("");
//                return;
//            }
//        else {
//            $("#otpStatus").html("<blink style='color:red;'>otp cannot be empty</blink>");
//            return;
//        }      
        $("#otpStatus").css("color", "red");
        const username = $('#rsUsername').val()

        if (!(otpField != null && otpField != undefined && otpField != '')) {
            $("#otpStatus").text("OTP cannot be empty.");
            return;
        }
        validateotp(username, otpField);
        return;
    }
    if (
            !secVerify.includes("otp") &&
            !secVerify.includes("captcha")
            ) {
        processLoginSubmit();
    }


//    else {
//        $("#loginError").hide();
////        $("#processLoginID2").hide();
//        $("#processLoginID").show();
//        processLoginSubmit();
////        var  showLoader = setTimeout("$('#Loader').show()", 300);
//    }
}
function closeLoginForm() {
    $("#roleSecure").hide();
}
function processLoginSubmit() {
    showLoader();
    $("#loginError").hide();
    localStorage.removeItem('aiLensFlagTrue');
    var secretKey = $('meta[name=keygeneration]').attr("content");
    var rsUsername = $("#rsUsername").val();
    var rsPassword = $("#rsPassword").val();
    try {
        $("#rsUsername").blur();
        $("#rsPassword").blur();
        $("#userCaptchaCode").blur();
        $("#otpUserCode").blur();
    } catch (el) {
    }
    var encryptedPassword = CryptoJS.AES.encrypt(rsPassword, secretKey);
    $("#rsPasswordHid").val(encryptedPassword);
    console.log(encryptedPassword);
    $("#rsPassword").attr("disabled", "disabled");
    var rsPassword = $("#rsPassword").val();
    var currentPageURL = $("#currentPageUrl").val();
    var data = {};
    $("#visionLoginpageInner :input").each(function () {
        var textid = $(this).attr("id");
        var type = $(this).attr("type");
        var inputName = $(this).attr("name");
        var textval = $(this).val();
        if (type != 'hidden') {
            if (textval != null && textval != '') {
                textval = textval;
            }
        }
        if (textid != null && textid != 'CREATE_DATE') {
            data[inputName] = textval;
        }
    });
    let langSlectionVal = $("#languageSelectionId").val();
    if (langSlectionVal !== null && langSlectionVal !== "" && langSlectionVal !== undefined) {
        data['language'] = langSlectionVal;
    }
    if (data != null && !jQuery.isEmptyObject(data)) {
        $.ajax({
            datatype: "json",
            type: "POST",
            url: "cloudLogin",
            data: data,
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                if (response != null && !jQuery.isEmptyObject(response)) {
                    var returnCde = response['returnCde'];
                    if (!handleUnsuccessfulLogin(response, rsUsername)) {
                        return;
                    }
//                if (response != null && !jQuery.isEmptyObject(response)) {  
                    localStorage.setItem("userName", rsUsername);
                    localStorage.removeItem("userDetails");
                    localStorage.removeItem("ssLangListStr");
                    localStorage.removeItem("defaultRoleChangeFlag");
                    localStorage.removeItem("defaultFioriEnableFlag");
                    localStorage.removeItem("enableCopySelectFlag");
                    localStorage.removeItem("googleApiKey");
                    localStorage.setItem("userDetails", response['userDetails']);
                    localStorage.setItem("ssLangListStr", response['ssLangListStr']);
                    localStorage.setItem("defaultRoleChangeFlag", response['defaultRoleChangeFlag']);
                    localStorage.setItem("defaultFioriEnableFlag", response['defaultFioriEnableFlag']);
                    localStorage.setItem("enableCopySelectFlag", response['enableCopySelectFlag']);
                    localStorage.setItem("googleApiKey", response['googleApiKey']);
//                    var token = xhr.getResponseHeader('X-CSRF-TOKEN');
                    var returnCde = response['returnCde'];
                    var role = response['role'];
                    var csrfToken = response['csrftoken'];
                    localStorage.removeItem("profile_imgStr");
//                    var sessionObj = response['sessionObj'];
                    localStorage.setItem("currentRole", response['role']);
                    sessionStorage.setItem("currentRole", response['role']);
//                    $("#result").val(sessionObj);
                    //KRAJ
                    var contextPath = window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
                    var redirectPage = response['redirectpage'];
                    if (redirectPage == null || redirectPage == undefined || redirectPage == "") {
                        redirectPage = "homePage";
                    }
                    var originUri = window.location.origin + contextPath + "/" + redirectPage;
                    localStorage.removeItem("previousTabUrl");
                    localStorage.setItem("previousTabUrl", originUri);
                    //KRAJ
                    console.log("returnCde:::" + returnCde);
                    if (returnCde != null && returnCde != '') {
                        if (response['profile_imgStr'] != 'No_data') {
                            localStorage.setItem("profile_imgStr", response['profile_imgStr']);
//                            sessionStorage.setItem("profile_imgStr", 'images/no-image.jpg');
                        } else {
                            localStorage.setItem("profile_imgStr", 'images/Profile_Icon.svg');
                        }
                        if (returnCde.indexOf("success") > -1) {
                            if (currentPageURL != null && currentPageURL != '' &&
                                    currentPageURL != undefined && currentPageURL != "null") {
                                navigationMenuUrl(currentPageURL);
                            } else {
                                navigationMenuUrl(response['redirectpage']);

//                                window.location.href = 'homePage';
                            }
                        } else if (returnCde.indexOf("alreadyLoggedIn") > -1) {//alreadyLoggedIn
//                            var modalObj = {
//                                title: 'Message',
//                                body: response['htmlStr']
//                            };
//                            var buttonArray = [
//                                {
//                                    text: 'Ok',
//                                    "class": 'dialogyes',
//                                    click: function () {
////                                        navigationMenuUrl("homePage");
//                                        navigationMenuUrl("modulechooserR?terminate=1");
////                                        navigationMenuUrl("homePage?ssUsername='" + response['ssUsername'] + "'");
//                                        $("#Loader").css("display", "none");
//                                        $('#chatBotIcon').attr('data-flag', 'A');////update flag
//
//
//                                    },
//                                    isCloseButton: true
//                                },
//                                {
//                                    text: 'Cancel',
//                                    "class": 'dialogno',
//                                    click: function () {
//                                        navigationMenuUrl("cloudLogout");
//                                        $('#chatBotIcon').attr('data-flag', 'I');////update flag
//
//                                    },
//                                    isCloseButton: true
//                                }
//                            ];
//                            modalObj['buttons'] = buttonArray;
//                            createModal("modalInfoDailogDiv", modalObj, "Y"); 

                            $("#dialog").html(response['htmlStr']);
                            $("#dialog").dialog({resizable: false,
                                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                modal: true,
                                width: 400,
                                height: 200,
//                                      width: 'auto',
//                                height: 'auto',
//                                minHeight: 'auto',
                                fluid: true,
                                buttons: [

                                    {
                                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
//                                            "class": 'dialogyes',
                                        click: function () {
                                            $(this).html("");
                                            try {
                                                $(this).dialog("destroy");
                                            } catch (e) {
                                            }
                                            try {
                                                $(this).dialog("close");
                                            } catch (e) {
                                            }
//                                                 navigationMenuUrl("timeout");         
//                                            navigationMenuUrl("modulechooserR?terminate=1");      
                                            navigationMenuUrl("homePage?terminate=1");
                                            $("#Loader").css("display", "none");
                                            $('#chatBotIcon').attr('data-flag', 'A');////update flag

                                        }
                                    }
                                    , {
                                        text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
//                                            "class": 'dialogno',
                                        click: function () {
                                            $(this).html("");
                                            try {
                                                $(this).dialog("destroy");
                                            } catch (e) {
                                            }
                                            try {
                                                $(this).dialog("close");
                                            } catch (e) {
                                            }

                                            navigationMenuUrl("cloudLogout");
                                            $('#chatBotIcon').attr('data-flag', 'I');////update flag
                                        }
                                    }
                                ],
                                open: function ()
                                {
                                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                                    $(".ui-dialog-titlebar-close").hide();
                                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                                        $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                                    $(".visionHeaderMain").css("z-index", "999");
                                    $(".visionFooterMain").css("z-index", "999");
                                },
                                beforeClose: function (event, ui)
                                {
                                    $(this).html("");
                                    try {
                                        $(this).dialog("destroy");
                                    } catch (e) {
                                    }
                                    $(".visionHeaderMain").css("z-index", "99999");
                                    $(".visionFooterMain").css("z-index", "99999");
                                }
                            });

                        } else {
//                            $(".visionLoginpageInner").effect("shake", shakeOptions);
                            $("#loginError").html(response['errorMesg']);
                            $("#loginError").show();
                            $("#rsPassword").removeAttr("disabled");
                            $("#rsPassword").val("");
//                            $("#rsUsername").val("");
                        }
                    }
                }
            },
            error: function (e) {
                stopLoader();
                alert('Error: ' + e);

            }
        });
    }
}
function showorHideError(status, passFlag) {
    var securityStatus = localStorage['securityVerify'];
    if (status == 'username') {

        if (event.which === 13) {
            showNextPassword();
        }
    } else if (status == 'password') {
        $('#' + securityStatus + 'UserCode').removeAttr("disabled");
        $("#passwordError").html("");
        if (securityStatus == "none") {
            if (event.which === 13) {
                loginOpeartions2();
            } else if (passFlag != null && passFlag != "" && passFlag != undefined && passFlag == 'P') {
//                showNextPassword();
                loginOpeartions2();
            }

        } else if (securityStatus.includes("captcha") && securityStatus.includes("otp")) {
            $("#captchaErrorrText").html("");
            $("#otpStatus").html("");
            if (event && event.which === 13 && passFlag !== 'P') {
                return false;
            }
            if (passFlag === 'P') {
                loginOpeartions2();
                return;
            } else if (event.which === 13) {
                $("#passwordError").html("<blink>Password cannot be empty</blink>");
            }
        } else if (securityStatus == 'captcha') {
            var passFild = $("#rsPassword").val();
            $("#captchaErrorrText").html("");
            $("#CaptchaImageCode").css("border", "none");
            if ((event && event.which === 13) || passFlag === 'P') {
                $("#userCaptchaCode").focus();
                var passFild = $("#rsPassword").val();
                var captcha = $("#CapCode").text();
                if (passFild != '' && captcha != "") {
                    loginOpeartions2()
                } else {
                    $("#passwordError").html("<blink>Password cannot be empty</blink>");
                }
            } else if (passFild == '' && event.which === 13) {
                loginOpeartions2();
            }
        } else if (securityStatus == 'otp') {
            $("#otpStatus").html("");
            var otpField = $("#otpUserCode").val();
            if (otpField == undefined) {
                if (event.which === 13) {
                    loginOpeartions2();
                }
            } else {
//                if (event.which === 13) {
//                    var security = localStorage['otp'];
//                    if (security == btoa(otpField)) {
                loginOpeartions2()
//                    } else {
//                        $("#otpUserCode").val("");
//                        $("#otpStatus").html("<blink style='color:red;'>Incorrect OTP</blink>");
//                    }
//                }
            }
        }
    }
}
//chatbot
var convCalled = false;
function chatApplication() {
    console.log("clicked");
    if (!convCalled) {
        chatWindow.talk(convo);
    }
    convCalled = true;

    $('.chatBox').toggle({
        height: 'toggle'
    }, 400);

}

function minimizeChatBot() {
    console.log(1);
    var chatBotHeight = $(".bubble-container").height();
    if (chatBotHeight >= 548 && chatBotHeight <= 550) {
        $(".chatBoxLargeSpaced").addClass("chatbotShrinked").removeClass("chatBoxLargeSpaced");
        console.log(chatBotHeight);
        $(".bubble-container").animate({
            height: 60
        }, 400);
        // $(".chatBotHeaderBottom").css("display", "none");
        $(".chatBotHeaderTop").css("height", 60);
        $(".input-wrap").css("display", "none");
        $("#maxminIcon").attr("src", "images/maximize.png");
        $("#maxminIcon").attr("title", "maximize");
    } else {
        $(".chatbotShrinked").removeClass("chatbotShrinked").addClass("chatBoxLargeSpaced");
        console.log("not eqal to 400");
        $(".bubble-container").animate({
            height: 400
        }, 400);
        // $(".chatBotHeaderTop").css("height", 30);
        // $(".bubble-wrap").css("top", 110);
        $(".input-wrap").css("display", "block");
        $("#maxminIcon").attr('src', 'images/minimize.png');
        $("#maxminIcon").attr("title", "minimize");
    }
}
function closeChatBot() {
    console.log("closed");
    localStorage.removeItem("chatBotLanguage");
    $(".bubble").remove();
    $('.chatBox').hide();
    convCalled = false;
}
var convo = {
    ice: {
        says: ["Welcome to PiLog SaaS solution", "Are you willing to know about our solution?"],
        reply: [
            {
                question: "Yes",
                answer: "YES1"
            },
            {
                question: "No",
                answer: "NO1"
            }
        ],
    }

}
var convCalled = false;
var i = 0;
var chatWindow;
function chatApplication() {
    chatWindow = new Bubbles(document.getElementById('chat'), 'chatWindow', {
        inputCallbackFn: function (o) {
            sendMessage(o.input, chatWindow);
            i++;
        },
        responseCallbackFn: function (r)
        {
            sendMessage(r, chatWindow);
        }
    });

    console.log("clicked");
    if (!convCalled) {
        chatWindow.talk(convo);
    }
    convCalled = true;

    var flag = $('#chatBotIcon').attr('data-flag');
    /*if(flag == "A"){
     $(".userLoginChatbot").hide();
     $(".bubble-wrap").show();
     $(".input-wrap").show();
     } else{
     $(".bubble-wrap").hide();
     $(".input-wrap").hide();
     $(".userLoginChatbot").remove();
     $("#chat").append('<div class="userLoginChatbot" id="userLogin-Chatbot" style="margin-top:100px;margin-left: 20px;margin-right: 20px;">' 
     + '<input type="email" name="chatBotEmail" id="chatBotEmail" value="" style="width:100%;padding:12px 20px;margin: 8px 0;display:inline-block;border: 1px solid #ccc;border-radius: 4px;box-sizing: border-box;" placeholder="email" required>'
     +'<p id="emailValMsg" style="color: red;"></p>'
     + '<input type="text" name="chatBotUsername" id="chatBotUsername" value="" style="width:100%;padding:12px 20px;margin: 8px 0;display:inline-block;border: 1px solid #ccc;border-radius: 4px;box-sizing: border-box;" placeholder="username" required>'
     +'<p id="usernameValMsg" style="color: red;"></p>'
     +'<button type="button" class="btn btn-primary btn-lg btn-block" onclick="displayChatbot()">Start Chat</button>'
     +'<p id="chatValMsg" style="color: red;"></p>'
     +'<input type="hidden" id="loginSessionId" name="loginSessionId" val=""></div>')
     $("#chat").children(".userLoginChatbot").show();
     //$('.userLoginChatbot').attr('data-flag', 'A');
     
     }*/


    $('.chatBox').toggle({
        height: 'toggle'
    }, 400);

    $('.bubble-typing').hide();

}
function chatWindow_answer(reply)
{
//    showLoader();
    /*var convocation1 = {
     ice:{
     says:["Hello,Im chat","plz select any one of the below"],
     reply:[
     {
     question:"Analytics",
     answer:"Analytics"
     },
     {
     question:"Integration",
     answer:"Integration"
     }
     ],
     
     }
     };*/
    $(".input-wrap").find("textarea").attr("disabled", "true");
    $('.bubble-typing').show();
    var [lang, sessionId] = getChatbotParams();
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: "getDXPChatBotResponse",
        traditional: true,
        cache: false,
        data: {
            message: reply,
            lang: lang,
            sessionId: sessionId
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                chatWindow.talk(response);
                var lang = response['ice'].lang;
                localStorage.setItem("chatBotLanguage", lang);
            }
            setTimeout(function () {

                $('.bubble-typing').hide();
            }, 2000);
            setTimeout(function () {
                $(".input-wrap").find("textarea").removeAttr('disabled');
            }, 4000);

        },
    });

}
function sendMessage(msg, chatWindow) {
//    showLoader();
    msg = DOMPurify.sanitize(msg);
    if (msg === "Kindly give a valid message.") {
        return;
    }
    var [lang, sessionId] = getChatbotParams();
    $(".input-wrap").find("textarea").attr("disabled", "true");
    $('.bubble-typing').show();
    $(".input-wrap").find("textarea").val("");
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: "getDXPChatBotResponse",
        traditional: true,
        cache: false,
        data: {
            message: msg,
            lang: lang,
            sessionId: sessionId
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                chatWindow.talk(response);
                var lang = response['ice'].lang;
                localStorage.setItem("chatBotLanguage", lang);
            }
            setTimeout(function () {
                $('.bubble-typing').hide();
            }, 2000);
            setTimeout(function () {
                $(".input-wrap").find("textarea").removeAttr('disabled');
            }, 4000);
        },
    });
}
function getChatbotParams() {
//	var resultObj;
    var lang = localStorage['chatBotLanguage'];
    var sessionId;
    var cond = $(document).find('.signupClass').html();
    if (cond != null && cond != "" && cond != undefined) {

        if (cond.includes("jsessionid")) {
            var sessionAttr = $('.signupClass').children()[0].href;

            var sessionIdStr = sessionAttr.split(';')[1].split('.')[0];
            var jsessionId = sessionIdStr.split('=')[1]
            sessionId = jsessionId;
            localStorage.setItem("jsessionId", jsessionId);

        } else if (cond.includes("cloudRegistrationForm") && localStorage['jsessionId'] == undefined) {
            sessionId = localStorage['newLoginSession'];
        } else if (localStorage['jsessionId'] != null && localStorage['jsessionId'] != "" && localStorage['jsessionId'] != undefined) {
            sessionId = localStorage['jsessionId'];
        } else {
            var loginSession = localStorage['loginSession'];
            var newLoginSession = localStorage['newLoginSession'];
            var flag = $('#chatBotIcon').attr('data-flag');
            sessionId = loginSession;
            if (flag == "A") {
                sessionId = loginSession;
            } else {
                sessionId = newLoginSession;
            }
        }
    } else {
        var loginSession = localStorage['loginSession'];
        var newLoginSession = localStorage['newLoginSession'];
        var flag = $('#chatBotIcon').attr('data-flag');
        if (flag == "A") {
            sessionId = loginSession;
        } else {
            sessionId = newLoginSession;
        }
    }

    if (sessionId == null || sessionId == undefined || sessionId || "") {
        sessionId = localStorage['session'];
    }
    if (lang == null || lang == undefined || lang || "") {
        lang = 'english';
    }
//	resultObj = {
//		"sessionId": sessionId,
//		"lang": lang
//	}
    return [lang, sessionId];


}
function setFactsAndStatsChartsData(chartId, type) {
    showLoader();
    try {
        let title = $(event.currentTarget).find('p:visible').text();
        $.ajax({
            dataType: 'JSON',
            type: 'POST',
            url: 'getFactsAndStatsChartsData',
            data: {
                chartId: chartId,
                type: type,
                title: title
            },
            traditional: true,
            cache: false,
            success: function (data, textStatus, jqXHR) {
                stopLoader();
                showModelPopup(data['dialog']);
                setMultiCharts(data['chartsIdMultImgID']);
                factsAndStatsCharts(data['charts']);
                chatsObj = data['charts'];
                var stopslick = $('#factsStatdataCount');
                stopslick[0].slick.paused = true;
                // dialog close and autoplay start
                $(".dailogclose .ui-dialog-titlebar-close").click(function () {
                    var stopslick = $('#factsStatdataCount');
                    stopslick[0].slick.paused = false;
                });
            }
        })
    } catch (e) {
        stopLoader();
    }

}
function setMultiCharts(id) {
//    $("#" + id).html("<img src=\"images/iDXPUI5AnalyticsShowCard.svg\" id=\"multiImgFactsAndStats\" width=\"20\"/><div id=\"multiImgFactsAndStatsDiv\" class=\"multiImgFactsAndStats\"></div>");
    $("#" + id).html("<div id=\"multiImgFactsAndStatsDiv\" class=\"multiImgFactsAndStats\"></div>");
//    $('#multiImgFactsAndStats').click(function () {
    var chartTypes = "<div id='charttypeId' class ='charttypeId'>"
            + "<div id='visionVisualizeBasicTabs' class='visionVisualizeChartsTabsClass'>"
            + "<img onclick=\"setFactsAndStatsCharts('pie')\" src='images/Pie.svg' width=\"20\"  title='Pie chart'>"
//                + "<img onclick=\"setFactsAndStatsCharts('bar')\" src='images/Bar.svg' width=\"20\"  title='Bar chart'>"
            + "<img onclick=\"setFactsAndStatsCharts('donut')\"  src='images/Donut.svg' width=\"20\"  title='Donut chart'>"
            + "<img onclick=\"setFactsAndStatsCharts('column')\"  src='images/Column.svg' width=\"20\"  title='Column chart'>"
            + "<img onclick=\"setFactsAndStatsCharts('lines')\"  src='images/Line.svg' width=\"20\"  title='Line chart'>"
//                + "<img onclick=\"setFactsAndStatsCharts('scatter')\"  src='images/Scatter.svg' width=\"20\" title='Scatter chart'>"
            + "</div>";
//        $("#multiImgFactsAndStatsPopupDiv").remove();
    $("#multiImgFactsAndStatsDiv").html("<div id=\"multiImgFactsAndStatsPopupDiv\"></div>");
    $("#multiImgFactsAndStatsPopupDiv").html(chartTypes);
//        $("#multiImgFactsAndStatsPopupDiv").jqxPopover({
//            offset: {left: 0, top: 20},
//            position: 'right',
//            width: 95,
//            height: 80,
//            autoClose: true,
//            title: "Graph",
//            showCloseButton: true,
//            selector: $("#multiImgFactsAndStats")
//        });
//        $('#multiImgFactsAndStatsPopupDiv').jqxPopover({showArrow: true, arrowOffsetValue: -20});
//        $("#multiImgFactsAndStatsPopupDiv").jqxPopover('open');
//    });
}
function setFactsAndStatsCharts(type) {
    chatsObj.type = type;
    factsAndStatsCharts(chatsObj);
}
function showModelPopup(obj) {
    $('#' + obj.id).html(obj.body);
    $('#' + obj.id).dialog({resizable: false,
        modal: true,
        title: (labelObject[obj.title] != null ? labelObject[obj.title] : obj.title),
        height: obj.height,
        minHeight: obj.minHeight,
        minWidth: obj.minWidth,
        maxWidth: obj.maxWidth,
        dialogClass: obj.class + ' dailogclose',
        fluid: true,
//        buttons: [{
//                text: (labelObject[obj.BTNText] != null ? labelObject[obj.BTNText] : obj.BTNText),
//                click: function () {
//                    $(this).html("");
//                    $(this).dialog("close");
//                    $(this).dialog("destroy");
//                },
//                class: obj.btnClss
//            }]
    });
}
function factsAndStatsCharts(obj) {
    let type = obj['type']
    var margin = {l: 30, r: 30, b: 10, t: 10, pad: 10};
    var sobj = {};
    sobj.displayModeBar = false;
    sobj.scrollZoom = true;
    sobj.responsive = true;
    var xaxis = {
        titlefont: {
            family: 'Arial, sans-serif',
            size: 12,
            color: 'lightgrey'
        },
        showticklabels: true,
        tickangle: 'auto',
        tickfont: {
            family: 'Old Standard TT, serif',
            size: 12,
            color: 'black'
        },
        exponentformat: 'e',
        showexponent: 'all'
    };

    var yaxis = {
        titlefont: {
            family: 'Arial, sans-serif',
            size: 12,
            color: 'lightgrey'
        },
        showticklabels: true,
        tickangle: 45,
        tickfont: {
            family: 'Old Standard TT, serif',
            size: 12,
            color: 'black'
        },
        exponentformat: 'e',
        showexponent: 'all'
    };
    if (type == 'column' && type != '' && type != null) {
        var data = [
            {
                x: obj.level,
                y: obj.value,
                type: 'bar'
            }
        ];
        var layout = {margin: {l: 30, r: 30, b: 150, t: 10, pad: 10},
            xaxis: xaxis,
            yaxis: yaxis,
            width: 380,
            height: 350
        };
        Plotly.newPlot(obj.id, data, layout, sobj);
    } else if (type == 'bar' && type != '' && type != null) {
        var data = [
            {
                x: obj.value,
                y: obj.level,
                orientation: 'h',
                type: 'bar'
            }
        ];
        var layout = {margin: {l: 200, r: 30, b: 100, t: 10, pad: 10}, xaxis: xaxis, yaxis: yaxis};
        Plotly.newPlot(obj.id, data, layout, sobj);
    } else if (type == 'pie' && type != '' && type != null) {
        var colors = obj.color;
        var data = [{
                values: obj.value,
                labels: obj.level,
                type: type,
                marker: {'colors': colors},
            }];

        var layout = {
            height: 250,
            width: 350,
            margin: margin,
            showlegend: false
//            showlegend: true
        };
        window.myChart = Plotly.newPlot(obj.id, data, layout, sobj);
        positionHomePageChartLegend(type, obj.id, colors, obj.level, data, layout, '');
    } else if (type == 'donut' && type != '' && type != null) {
        var colors = obj.color;
        var data = [{
                values: obj.value,
                labels: obj.level,
                hole: .4,
                type: 'pie',
                marker: {'colors': colors},
            }];

        var layout = {
            height: 250,
            width: 380,
            margin: margin,
            showlegend: false
//            showlegend: true
        };
        Plotly.newPlot(obj.id, data, layout, sobj);
        positionHomePageChartLegend('pie', obj.id, colors, obj.level, data, layout, '');
    } else if (type == 'lines' && type != '' && type != null) {
        var data = [{
                y: obj.value,
                x: obj.level,
                type: type,
            }];

        var layout = {
            margin: {l: 30, r: 30, b: 150, t: 10, pad: 10},
            xaxis: xaxis,
            yaxis: yaxis,
            width: 380,
            height: 320
        };
        Plotly.newPlot(obj.id, data, layout, sobj);
    } else if (type == 'scatter' && type != '' && type != null) {
        var data = [{
                y: obj.value,
                x: obj.level,
                mode: 'markers'
            }];

        var layout = {
            margin: {l: 30, r: 30, b: 150, t: 10, pad: 10},
            xaxis: xaxis,
            yaxis: yaxis,
            width: 380,
            height: 320
        };
        Plotly.newPlot(obj.id, data, layout, sobj);
    }
}
function setPopOverServiceHelp(title) {
    event.stopPropagation();
    let element = event.currentTarget
    let data = setPopOverServiceHelpDivObj(title);
    openServicePopOver(data, element, title);
}
function setPopOverServiceHelpDivObj(title) {
    let resultObj = {};
    let divStr = "";
    if (title == 'Product') {
        divStr = "<ul class=\"list-group multServisHelpListUL\">"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Select the class for which you want to create the record.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">A form opens which displays information such as Material type, Material Group, HSN Code etc. which are auto filled according to the Class name selected.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Click on Register Button. Additional tabs are displayed which contains the information of the record.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Goto the respective tabs and update the mandatory fields and save it.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">The record is successfully submitted to the ‘Pending Transfer to SAP’ basket.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "</ul>";
    } else if (title == 'Service') {
        divStr = "<ul class=\"list-group multServisHelpListUL\">"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Search for a Service record.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Register a Service record. Registration process consists of Identifying the Class of the Services.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Identifying and filling all mandatory and optional characteristics values of Services, adding reference data, attachments and descriptions and duplicate check process.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Goto the respective tabs and update the mandatory fields and save it.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">The record is successfully submitted to the ‘Pending Transfer to SAP’ basket.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "</ul>";
    } else if (title == 'Vendor') {
        divStr = "<ul class=\"list-group multServisHelpListUL\">"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Search for a Vendor record.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Register a New Vendor</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">User needs to provide all vendor information like, Vendor Name, Account group, company code, Purchasing Org etc.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Goto the respective tabs and update the mandatory fields and save it.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">The record is successfully submitted to the ‘Pending Transfer to SAP’ basket.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "</ul>";
    } else if (title == 'Onboard') {
        divStr = "<ul class=\"list-group multServisHelpListUL\">"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Search for a Vendor Onboard.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Register a New Vendor and send mail to registered user.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">User needs to provide all vendor information like, Vendor Name, Account group, company code, Purchasing Org etc.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Goto the respective tabs and update the mandatory fields and save it.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">The record is successfully submitted to the ‘Pending Transfer to SAP’ basket.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "</ul>";
    } else if (title == 'Asset') {
        divStr = "<ul class=\"list-group multServisHelpListUL\">"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Search for a Asset.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Register a Asset.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
//            + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">User needs to provide all vendor information like, Vendor Name, Account group, company code, Purchasing Org etc.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Goto the respective tabs and update the mandatory fields and save it.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">The record is successfully submitted to the ‘Pending Transfer to SAP’ basket.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "</ul>";
    } else if (title == 'Customer') {
        divStr = "<ul class=\"list-group multServisHelpListUL\">"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Search for a Customer.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Register as a new Customer.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
//            + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">User needs to provide all vendor information like, Vendor Name, Account group, company code, Purchasing Org etc.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">Goto the respective tabs and update the mandatory fields and save it.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "<li class=\"list-group-item multServisHelpListLi\"><span class=\"multServisHelpListSpan\" style=\"flex-grow: 1\">The record is successfully submitted to the ‘Pending Transfer to SAP’ basket.</span><span class=\"multServisHelpListImg\"><img src=\"images/AboutUsSet.png\" width=\"15\"></span></li>"
                + "</ul>";
    }
    resultObj.divStr = divStr;
    return resultObj;
}
function openServicePopOver(data, element, title) {
    $('#multiImgServisHelpPopOverDiv').remove();
    $(element).append("<div id=\"multiImgServisHelpPopOverDiv\"></div>");
    $("#multiImgServisHelpPopOverDiv").html("<div class=\"multServisHelpListDiv\" id=\"multServisHelpListDiv\">" + data['divStr'] + "</div>");
    $("#multiImgServisHelpPopOverDiv").jqxPopover({
        offset: {left: 0, top: 80},
        position: 'left',
        width: 250,
        height: 250,
        arrowOffsetValue: -80,
        autoClose: true,
        title: title,
        showCloseButton: true,
        selector: $(element)
    });
    $('#multiImgServisHelpPopOverDiv').jqxPopover({showArrow: true});
    $("#multiImgServisHelpPopOverDiv").jqxPopover('open');
}
function setPopupServiceVideo(title, url, popupwidth, popupheight) {
    event.stopPropagation();
    let data = setPopupServiceVideoTextObj(title, url, popupwidth, popupheight);
    showModelPopup(data['dialog']);
    $("#multiImgServisHelpPopOverDiv").jqxPopover('close');
}
function setPopupServiceVideoTextObj(title, url, popupwidth, popupheight) {
    let iframe = "<div class='cardBasedVideo'><iframe width='100%' height='500' id='iFrameCardBasedVideo' src='" + url + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' type='video/mp4' allowfullscreen></iframe></div>";
    let bodyStr = '';
    bodyStr += "<div id=\"dialogServicesHelpMainDiv\" class=\"dialogServicesHelpMainDiv\">";
    bodyStr += iframe;
    bodyStr += "</div>";

    var dialogwidth = 900;
    var dialogheight = 600;

    if (popupwidth != null && popupwidth != "" && popupwidth != 'undefined') {
        dialogwidth = popupwidth;
    }
    if (popupheight != null && popupheight != "" && popupheight != 'undefined') {
        dialogheight = popupheight;
    }

    let paramObj = {};
    paramObj.body = bodyStr;
    paramObj.title = 'Info';
    paramObj.dialogID = "dialog";
    paramObj.height = dialogheight;
    paramObj.minWidth = dialogwidth;
    let resultObj = getPopupDynamicDataObj(paramObj, title);
    return resultObj;
}
function getPopupDynamicDataObj(paramObj, title) {
    var resultObj = {};
    var dialogID = paramObj.dialogID;
    var dialogDivObj = {
        body: paramObj.body,
        id: dialogID,
        height: paramObj.height,
        minHeight: "auto",
        minWidth: paramObj.minWidth,
        maxWidth: "auto",
        class: "dialogFactsAndStatsDiv",
        btnClss: "dialogFactsAndStatsCloseBtn",
        title: title,
        BTNText: "Ok"
    };
    resultObj.dialog = dialogDivObj;
    return resultObj;
}
function setPopupServiceGif(title, url) {
    event.stopPropagation();
    let data = setPopupServiceGifTextObj(title, url);
    showModelPopup(data['dialog']);
    $("#multiImgServisHelpPopOverDiv").jqxPopover('close');
}
function setPopupServiceGifTextObj(title, url) {
    var resultObj = {};
    var title = title; // Set your title here
    var iframe = "<div class='cardBasedVideo'><img src='images/" + url + "' alt='Computer man' style='width:380px; height:350px;'></div>";
    var bodyStr = "<div id='dialogServicesHelpMainDiv' class='dialogServicesHelpMainDiv'>" + iframe + "</div></div>";
    var paramObj = {};
    paramObj.body = bodyStr;
    paramObj.title = title;
    paramObj.dialogID = "dialog";
    paramObj.height = 400;
    paramObj.minWidth = 400;
    resultObj = getPopupDynamicDataObj(paramObj, title);
    return resultObj;
}
function resetPasswordForInActiveUsers(userName, passwordFlag) {
    try {
        $("#userName").val(userName);
        var messagerstr = "";
        if (passwordFlag == 'N') {
            var messagerstr = "Your are logging into the System for the First Time, Please set your password.";
        } else if (passwordFlag == 'R') {
            var messagerstr = "Your ID has been reset,Please set your password.";
        } else {
            var messagerstr = "Please set your password.";
        }

        var result = '<div class="changepassword" id="changepassword">'
                + '<div class="statusFlagErrorMessage ">' + messagerstr + '</div>'
                + '<div class="titlepasswordClass row ">'

                + '<div class="col-md-4"><label data-error="wrong" data-success="right" for="form34">UserName:<sup style="color: red">*</sup></label></div>'
                + '<div class="col-md-8 form-group">'
                + "<span class=\"username\">" + userName + "</span>"
                + '</div>'
                + '<div class="col-md-4">'
                + "<label data-error='wrong' data-success='right' for='form34'>New Password<sup style='color: red'>*</sup></label>"
                + '</div>'
                + '<div class="col-md-8 form-group eye_icon">'
                + "<input autocomplete='off' type='password' name='password' id='newPassword' class='newPassword form-control' onblur=\"getgenericpasswordvalidation(id)\" placeholder='' title='EX:New Password' data-pswdregex=\"(.){8,15}:::[0-9]{1,}:::[a-z]{1,}:::[A-Z]{1,}:::([!,%,&amp;,@,#,$,^,*,?,_,~]{1,}):::(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}:::\" data-pswddesc=\"Password must contain minimum of 8 characters:::Password must contain one number(0-9):::Password must contain one lowercase letter (a-z):::Password must contain one Uppercase letter (A-Z):::Password must contain one Special Character:::Enter Password As Specified:::\"> <i class='fa fa-eye-slash' id='neweyeshowhide' onclick='showNewPassword()' aria-hidden='true'></i>"
                + "<span id=\"error_pwd\" class=\"all_errors\"></span>"
                + "<div id='dis_newPassword' class='all_errors'></div>"
                + '<div class="passwordDecription" style="display:none">'
                + '<div class="gridd"><span id="8char" class="fa fa-times"></span><span class="text-body">min length 8</span><span id="caps" class="fa fa-times"></span>'
                + '<span class="text-body">Uppercase</span><span id="spchar" class="fa fa-times"></span><span class="text-body">Special Character</span><span id="int" class="fa fa-times"></span><span class="text-body">number</span>'
                + '</div></div>'
                + '</div>'
                + '<div class="col-md-4">'
                + "<label data-error='wrong' data-success='right' for='form34'>Confirm Password<sup  style='color: red'>*</sup></label>"
                + '</div>'
                + '<div class="col-md-8 form-group eye_icon">'
                + "<input autocomplete=\"off\" type=\"password\" name=\"password\" id=\"confirmPassword\" class='confirmPassword form-control' onblur=\"return checkPasswordMatchReType()\" placeholder=\"\" title=\"\" data-pswdregex=\"(.){7,15}:::[0-9]{1,}:::[a-z]{1,}:::[A-Z]{1,}:::([!,%,&amp;,@,#,$,^,*,?,_,~]{1,}):::(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}:::\" data-pswddesc=\"Password must contain minimum of 8 characters:::Password must contain one number(0-9):::Password must contain one lowercase letter (a-z):::Password must contain one Uppercase letter (A-Z):::Password must contain one Special Character:::Enter Password As Specified:::\"><i class='fa fa-eye-slash' id='confirmeyeshowhide' onclick='showConfirmPassword()' aria-hidden='true'></i>"
                + "<span id=\"error_password2\" class=\"all_errors\"></span>"
                + "<div id='dis_confirmPassword' class='all_errors'></div>"
                + '</div>'
                + "<div class=\"visionChangePasswordData visionErrorCells col-12\" >"
                + "<span id=\"error_password2\" class=\"all_errors\"></span>"
                + "<div id=\"dis_password2\" class=\"all_errors\"></div></div>"
                + "<div class=\"visionChangePasswordData visionErrorCells col-12\"> <input type=\"text\" style=\"display: none\" value=\"\" id=\"pers_Id\"></div>"
                + "</div>"
                + '</div>';

        var modalObj = {
            title: labelObject['Message'] != null ? labelObject['Message'] : 'Reset Password',
            body: result
        };
        var buttonArray = [
            {
                text: 'Update Password',
                click: function () {
                    resetPassword(userName, passwordFlag)
                },
                isCloseButton: false
            },
            {
                text: 'Cancel',
                click: function () {
                },
                isCloseButton: true
            }
        ];
        modalObj['buttons'] = buttonArray;
        createModal("dataDxpSplitterValue", modalObj);
        $(".modal-backdrop").show();
        $(".modal-dialog").addClass("modal-md");
        $(".dataDxpSplitterValue").addClass("updatepasswordClass");
        passDescriptionShow();
    } catch (e) {

    }


}
function resetPassword(userName, passwordFlag) {
    try {
        var newPassword = $("#newPassword").val();
        var confirmPassword = $("#confirmPassword").val();
        if (!newPassword) {
            var id = "#dis_newPassword";
            var msg = "Enter New Password";
            err_msg(id, msg);
            return false;
        } else if (!confirmPassword) {
            var id = "#dis_confirmPassword";
            var msg = "Re-Type New Password";
            $("#new_password").text("")
            err_msg(id, msg);
            return false;
        } else if (newPassword != confirmPassword) {
            var id = "#dis_password2";
            var msg = "newPassword & confirmPassword should not match.";
            err_msg(id, msg);
            return false;
        } else if (newPassword == confirmPassword) {
            updateNewPasswordForInActive(userName, passwordFlag);
        }
    } catch (e) {

    }


}
function updateNewPasswordForInActive(userName, passwordFlag) {
    try {
        var secretKey = $('meta[name=keygeneration]').attr("content");
        var newPassword = $("#newPassword").val();
        var ssUsername = userName;
        var Confirm_newPas = $("#confirmPassword").val();
        var password = $("#newPassword").val();
        var encryptedPassword = CryptoJS.AES.encrypt(password, secretKey);
        $("#newPassword").val(encryptedPassword);

        var confirm_password = $("#confirmPassword").val();
        var encryptedConfirmPassword = CryptoJS.AES.encrypt(confirm_password, secretKey);
        $("#confirmPassword").val(encryptedConfirmPassword);
        showLoader();
        $.ajax({
            type: "POST",
            traditional: true,
            dataType: 'html',
            url: 'changepassword',
            traditional: true,
            cache: false,
            data: {
                password: $("#newPassword").val(),
                confirm_password: Confirm_newPas,
                ssUsername: ssUsername,
                passwordFlag: passwordFlag,
            },
            success: function (response) {
                stopLoader();
                if (response != null) {
                    var MessageStatus = JSON.parse(response).message;
                    var MessageFlag = JSON.parse(response).messageFlag;
                }
                var modalObj = {
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                    body: MessageStatus
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        click: function () {
                            if (MessageFlag == true) {
                                logout()
                            } else {
                                updatePassword()
                            }

                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
                $(".modal-dialog").addClass("modal-xs");


            }
        });
    } catch (e) {

    }


}
function getgenericpasswordvalidation(ele) {

    var ele = ele;
    var str = $("#" + ele).val();
    var errorID = "#dis_" + ele;
    var regex;
    var desc;
    var patt;
    var dataRegex = $("#" + ele).attr("data-pswdRegex");
    var dataDesc = $("#" + ele).attr("data-pswdDesc");
    var user_name = $("#userName").val();
    if (str != null && str != '') {
        if (user_name != null && user_name != '' && user_name.toUpperCase() != str.toUpperCase()) {
            var pswdRegex = dataRegex.split(":::");
            var pswdDesc = dataDesc.split(":::");
            for (var i = 0; i < pswdRegex.length; i++) {
                regex = pswdRegex[i];
                patt = new RegExp(regex);

                if (!patt.test(str)) {
                    var msg = pswdDesc[i];
                    err_msg(errorID, msg);
                    return false;
                } else {
                    $(errorID).hide();
                    $("#dis_newPassword").html("");
                    $("#confirmPassword").prop('disabled', false);
                    //            $("#restpassword").prop('disabled', true);
                }
            }
            return true;
        }
    } else {
        msg = "Password should not blank.";
        msg = labelObject[msg] != null ? labelObject[msg] : msg;
        err_msg(errorID, msg);
        return false;
    }

}
function registerForm()
{

//    var modalObj = {
//        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
//        body: "<div style='display: flex;'><span><img src='images/SignUp.png' class='themeModeDark' style='width:22px;'></span><span style='font-weight:700;margin-left: 8px;'>User Registration is not available for this SaaS Model, Please Contact Administrator.</span></div>",
//    };
//    var buttonArray = [
//        {
//            text: 'Ok',
//            click: function () {
//
//            },
//            isCloseButton: true
//        }
//    ];
//    modalObj['buttons'] = buttonArray;
//    createModal("dataDxpSplitterValue", modalObj);
//    $(".modal-dialog").addClass("modal-xs");
    $("#registerForm").attr("target", "_blank");
    $("#registerForm").attr("action", "cloudRegistrationForm");
    $("#registerForm").submit();
}
function loginAwardsMouseOver(result1, result2)
{
    $("#visionTempleteHoverImage").addClass('loginAwardsImgHover');
    var templeteId = result1;
    var imagePath = $("#" + templeteId).attr("src");
    console.log(templeteId + 'templeteId');
    $("#visionTempleteHoverImage").empty();
//    console.log(imagePath + 'imagePath');
    var imagePaths = "<span><img src='" + imagePath + "'></span>";
    $("#visionTempleteHoverImage").show();
    $("#visionTempleteHoverImage").append(imagePaths);
}
function loginAwardsMouseOut(result1, result2)
{
    $("#visionTempleteHoverImage").empty();
    $("#visionTempleteHoverImage").hide(0);
}
function positionHomePageChartLegend(chartType, chartId, colors, chartlabels, data, layout, config) {
    $('#' + chartId + '_legends').remove();
    if (chartType != null && chartType != '' && chartType != undefined && (chartType == 'donut' || chartType == 'pie')) {
        var html = "<div class='pieLegends' id='" + chartId + "_legends' >";
        $.each(chartlabels, function (i) {
            html += "<div class='pieLegendLabelItem' lable-index='" + i + "' legend-color-code='" + colors[i] + "' ><div style='height:12px;width:12px;background-color:" + colors[i] + ";' ></div><span>" + this + "</span></div>";
        })
        html += "</div>";
        $("#" + chartId + "_legends").remove();
        //$("#" + chartId).append(html);
        $(html).insertAfter($("#" + chartId));
    }

    $("#" + chartId).parent().find(".pieLegendLabelItem").click(function (event) {

        var graphdata = document.getElementById(chartId)

        var graphdata = graphdata.data; // => current data
        var graphchartlabels = graphdata[0]['labels'];
        var graphchartValues = graphdata[0]['values'];
        //var layout = graphdata.layout;

        if (!$(event.currentTarget).hasClass("filteredLegend")) {

            var newdata = JSON.parse(JSON.stringify(graphdata));
            $(event.currentTarget).addClass("filteredLegend");
            var label = $(event.currentTarget).find("span").text();
            var index = graphchartlabels.indexOf(label);
            newdata[0]['labels'].splice(index, 1);
            newdata[0]['values'].splice(index, 1);
            var colorcode = $(event.currentTarget).attr("legend-color-code");
            var colorcodeindex = newdata[0]['marker']['colors'].indexOf(colorcode);
            newdata[0]['marker']['colors'].splice(colorcodeindex, 1);
            Plotly.newPlot(chartId, newdata, layout, config);
        } else {
            $(event.currentTarget).removeClass("filteredLegend");
            var filteredLegends = $("#" + chartId).find(".filteredLegend");
            var newdata = JSON.parse(JSON.stringify(data));
            $.each(filteredLegends, function (indx) {
                var label = $(this).find("span").text();
                var index = newdata[0]['labels'].indexOf(label);
                newdata[0]['labels'].splice(index, 1);
                newdata[0]['values'].splice(index, 1);
                var colorcode = $(this).attr("legend-color-code");
                var colorcodeindex = newdata[0]['marker']['colors'].indexOf(colorcode);
                newdata[0]['marker']['colors'].splice(colorcodeindex, 1);
            })

            Plotly.newPlot(chartId, newdata, layout, config);
        }

    })
}
function setPopOverMouseOut(domain) {
    $("#multiImgServisHelpPopOverDiv").remove();
}
//tabs and Accordian Switch
function updaterecordData(selectedDataArray, tableName, operation, selectedTab, selectedGridId, erpTab, newIndex, tabId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var dataView = $("#" + tableName + "_Update").attr("data-view");

    alert("operation:::" + operation + ":::dataView::::" + dataView);
    if (dataView == null) {
        try {
            var sourceex = $('#' + tableName).jqxGrid('source');
            if (sourceex != null) {
                dataView = "GRID-VIEW";
            } else {
                dataView = "FORM-VIEW";
            }
        } catch (e) {
        }
    }
    alert("operation::A:" + operation + ":::dataView::::" + dataView);
//////console.log("dataView:::"+dataView);
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
//        if (operation == 'checkingTabData') {
//            checkingTabData(tableName, basicData, dataView);
//        } else
    if (operation == "update")
    {
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
        var erpTabGridId = $("#previousCurrentTabId").val();
        var selectedTabOldData = tabsOldData[tableName];
        basicData['erpTabGridId'] = erpTabGridId;
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
                    jsonOBJ.basicData = basicData;
                    console.log("jsonOBJ.feildIds:::" + JSON.stringify(jsonOBJ.feildIds));
                    console.log("jsonOBJ.feildValues:::" + JSON.stringify(jsonOBJ.feildValues));
                    var jsonArray = [];
                    jsonArray.push(jsonOBJ);
                    UpdatebeforeTabSwitch(JSON.stringify(jsonArray), dataView, tableName, operation, selectedTab, selectedGridId, erpTab, newIndex, tabId);
                } else {
                    stopLoader();//8
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
                                        $('#' + tabId).jqxTabs('select', selectedTab);
                                        fetchErpTab(selectedGridId, erpTab);
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
        } else if (dataView == "TABLE-VIEW") {

            selectedDataArray = gridOperation(operation, tableName);
            if (Array.isArray(selectedDataArray) && selectedDataArray.length == 0) {
                stopLoader();//9
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
                                fetchTabData(tableName);
                                $(tableName).jqxGrid('clearselection');

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

            } else if (!(Array.isArray(selectedDataArray))
                    && selectedDataArray.errorMesssage != null
                    && selectedDataArray.errorMesssage != '') {
                var errorMessageTable = "<table style='width: 100%;' border='1'>"
                        + "<tr><th style='background: #0071c5 none repeat scroll 0 0;color: #FFF;text-align: center'>Property Name</th>"
                        + "<th style='background: #0071c5 none repeat scroll 0 0;color: #FFF;text-align: center'>Error Message</th>";
                errorMessageTable += selectedDataArray.errorMesssage;
                errorMessageTable += '</table>';

                labelObject = {};
                try {
                    labelObject = JSON.parse($("#labelObjectHidden").val());
                } catch (e) {
                }
                console.log(errorMessageTable + "::::::::::::::::::");
                if (errorMessageTable !== "" && errorMessageTable !== null)
                {
                    errorMessageTable = (labelObject[errorMessageTable] != null ? labelObject[errorMessageTable] : errorMessageTable);
                    var dialogSplitMessage = dialogSplitIconText(errorMessageTable, "false");
                    $("#dialog").html(errorMessageTable);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        title: (labelObject['Error'] != null ? labelObject['Error'] : 'Error'),
                        textAlign: 'center',
                        minWidth: 'auto',
                        maxWidth: 'auto',
                        height: 'auto',
                        minHeight: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    //$(this).html("");
                                    $(this).dialog("close");
//                        $("#" + mintb).val('');
//                        $("#" + mintb).focus();
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

            } else {
//                 UpdatebeforeTabSwitch(JSON.stringify(jsonArray), dataView, tableName, operation, selectedTab, selectedGridId, erpTab, newIndex);
                endoperation(selectedDataArray, tableName, dataView, operation, basicData, selectedTab, selectedGridId, erpTab, newIndex, tabId);
            }


        } else if (dataView == "GRID-VIEW") {
//            if (operation == 'checkingTabData') {
//                selectedDataArray = $('#' + tableName).jqxGrid('getdisplayrows');
//            } else {
//                selectedDataArray = gridOperation(operation, tableName);
//            }


            console.log("selectedDataArray::::" + selectedDataArray.length);
            console.log("selectedDataArray::758::" + JSON.stringify(selectedDataArray));
            alert(selectedDataArray.length);
            //console.log("selectedDataArray size:::::" + JSON.stringify(selectedDataArray));
            if (selectedDataArray == 0) {
                stopLoader();//10
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
                                // fetchTabData(tableName);
                                $(tableName).jqxGrid('clearselection');
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
                endoperation(selectedDataArray, tableName, dataView, operation, basicData, selectedTab, selectedGridId, erpTab, newIndex, tabId);
//                endoperation(selectedDataArray, tableName, dataView, operation, basicData);
            }


        }//if 


    } else if (operation == "Grid_View")
    {


        fetchTabData(tableName);


    }
///fetching generically
}
function UpdatebeforeTabSwitch(data, dataView, tabId, operation, selectedTab, selectedGridId, erpTab, newIndex, CurrenttabId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
    }
    console.log("UpdateOrDelete::: check data" + tabId + ":::" + operation);
    console.log(data);
    var jsondata = {};
    var basicData = {};
    var reviewIndFV;
    var vendorCode = $("#vendorCode").val();
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
    console.log(JSON.stringify(basicData));
    var jsonOBJ = {};
    var dataArray = [];
    var finalData = "";
    console.log("basicData::::" + JSON.stringify(basicData));
    if (dataView != "GRID-VIEW") {
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
    var url = "";

    if (operation == "update" || operation == 'checkingTabData') {
        url = "updateRecord";
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
                var resultMessage;
                var response = JSON.parse(result);
                // var resultNew = response.resultVal;
                var resultNew = response.Message;
                var flag = response.messageFlag;
                var reason = response.reason;
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


                stopLoader(); //23
                var dialogSplitMessage = dialogSplitIconText(resultMessage, flag);
                $("#dialog").html(dialogSplitMessage);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    height: 'auto',
                    minHeight: 'auto',
                    minWidth: 300,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                if (flag) {

//                                    if (!(CurrenttabId =='undefined' )) {
//                                        CurrenttabId = selectedGridId
//                                    }
                                    if (CurrenttabId != null) {

                                        accordionSwitchflag = false;
                                        changeflag = false;
                                        executed = true;
                                        if (newIndex > -1) {
                                            $("#accordion").accordion({
                                                active: newIndex
                                            });
//                                             fetchTab(selectedGridId, erpTab);
                                            if (CurrenttabId.indexOf("_ATTACHMENTS") > -1) {
                                                fetchAttachmentsTabGridData(CurrenttabId);
                                            } else {
                                                fetchTabData(CurrenttabId);
                                            }

                                        } else if (newIndex < 0) {
                                            $("#accordion").accordion({active: false});
                                        }
                                        accordionSwitchflag = true;
                                    } else {

                                        updateflag = true;
                                        changeflag = false;
                                        matchedcount = 0;
                                        $('#' + erpTab).jqxTabs('select', selectedTab);
                                        fetchErpTab(selectedGridId, erpTab);
                                    }

                                } else
                                {
                                    $("#SelectedCurrentTabId").val(tabId);
                                }

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
            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
            }
        });
    }
    console.log("withholdingTanUpdate ::: END");
    setTimeout(changeflagFuction, 300);
}

function getSSOLoginSessionObj(username) {
    try {
        $.ajax({
            type: 'POST',
            url: 'getSSOLoginSessionObj',
            traditional: true,
            cache: false,
            data: {
                userName: username
            },
            success: function (response) {
//            var resultObject  = response['resultObject'];

                if (response != null && !jQuery.isEmptyObject(response)) {
                    var ssSessionObj = response['ssSessionObj'];
                    var ssUserDetails = response['ssUserDetails'];
                    var ssLangListStr = response['ssLangListStr'];
                    var profile_imgStr = response['profile_imgStr'];
                    var ssRole = response['ssRole'];
                    localStorage.removeItem("userName");
                    localStorage.removeItem("userDetails");
                    localStorage.removeItem("ssLangListStr");
                    localStorage.setItem("userName", username);
                    localStorage.setItem("userDetails", ssUserDetails);
                    localStorage.setItem("ssLangListStr", ssLangListStr);
                    localStorage.removeItem("profile_imgStr");
                    localStorage.setItem("currentRole", ssRole);
                    sessionStorage.setItem("currentRole", ssRole);
                    localStorage.removeItem("defaultRoleChangeFlag");
                    localStorage.removeItem("defaultFioriEnableFlag");
                    localStorage.removeItem("enableCopySelectFlag");
                    localStorage.removeItem("googleApiKey");
                    localStorage.setItem("defaultRoleChangeFlag", response['defaultRoleChangeFlag']);
                    localStorage.setItem("defaultFioriEnableFlag", response['defaultFioriEnableFlag']);
                    localStorage.setItem("enableCopySelectFlag", response['enableCopySelectFlag']);
                    localStorage.setItem("googleApiKey", response['googleApiKey']);
                    if (profile_imgStr != 'No_data') {
                        localStorage.setItem("profile_imgStr", profile_imgStr);
                        //                            sessionStorage.setItem("profile_imgStr", 'images/no-image.jpg');
                    } else {
                        localStorage.setItem("profile_imgStr", 'images/Profile_Icon.svg');
                    }
                }
            }
        });
    } catch (e) {
    }

}
async function insertUserClickedNavigations(navMenuName) {
    var csrfToken = $('meta[name="_csrf"]').attr('content');
    $.ajax({
        type: "POST",
        url: 'insertUserClickedNavigations',
        dataType: "json",
        data: {
            navMenuName: navMenuName,
            //csrf_token: $('meta[name="csrf-token"]').attr('content') 
        },
        headers: {
            'X-XSRF-TOKEN': csrfToken,
        },

        traditional: true,
        cache: false,
        success: function (response) {
            console.log("Success:", response);
//            stopLoader();
        },
        error: function (xhr, status, error) {
            stopLoader();
            console.error("Error:", xhr.responseText);
        }
    });

}
function handleUnsuccessfulLogin(response, userName) {
    var returnCde = response.returnCde || "";

    if (returnCde.includes("success") || returnCde.includes("alreadyLoggedIn")) {
        return true;
    }

    if (returnCde.includes("userInactive")) {
        $("#loginError").html(response.errorMesg).show();
        return false;
    }

    if (returnCde.includes("userResetPswd")) {
        $("#processLoginID2").hide();
        $(".showorHidePassword").remove();
        $("#loginError").hide();

        var passwordFlag = returnCde.split("::")[1];
        if (passwordFlag) {
            resetPasswordForInActiveUsers(userName, passwordFlag);
        }
        return false;
    }
    $("#loginError").html(response.errorMesg).show();
    $(".showorHidePassword").hide();
    $("#rsPassword").removeAttr("disabled");

    return false;
}
function validateotp(username, otp) {
    $.ajax({
        type: "POST",
        url: 'verifyotp',
        data: {
            userName: username,
            OTP: otp
        },
        success: function (response) {
            if (
                    response.message === "Email Verified Successfully" ||
                    response.message === "OTP verified successfully." ||
                    response.messageFlag === true
                    ) {
                $("#verifyLoginSecurity").hide();
                $("#processLoginID2").show();
                localStorage.setItem("securityVerify", "none");
                processLoginSubmit();
            } else {
                if (otp == null || otp === "") {
                    $("#otpStatus").text("OTP cannot be empty.");
                } else if (response.message && response.message !== "") {
                    $("#otpStatus").text(response.message);
                } else {
                    $("#otpStatus").text("Invalid OTP");
                }
                $("#otpStatus").css("color", "red");
                $("#otpUserCode").val("").focus();
            }
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
        }
    });
}




