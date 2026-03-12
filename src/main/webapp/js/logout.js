/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function () {

    $.ajaxSetup({
        beforeSend: function (xhr) {
            var csrfToken = $('meta[name="_csrf"]').attr('content');
            if (!(csrfToken != null && csrfToken != undefined && csrfToken != '' && csrfToken != 'undefined')) {
                csrfToken = $('meta[name="csrf-token"]').attr('content');
            }

            if (csrfToken) {
                xhr.setRequestHeader('X-XSRF-TOKEN', csrfToken);
            }
        }
    });
    //kk23-05-24
//    $(document).keydown(function (objEvent) {
//        if (objEvent.ctrlKey) {
//            if (objEvent.keyCode == 65) {
//                return false;
//            }
//        }
//    });

    //kk23-05-24

//    $(document).ajaxSend(function (e, xhr, options) {
////        var token = $("input[name='_csrf']").val();
//        var token = $('meta[name="_csrf"]').attr('content');
//        var header = "X-CSRF-TOKEN";
//        var url = options.url;
//        xhr.setRequestHeader(header, token);
////        if (url != 'homePage'){
////        xhr.setRequestHeader(header, token);
////    }
////        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
//
//    });
    const allowedHosts = ['localhost:8080', 'localhost:8081'];
    try {
        app.use((req, res, next) => {
            const host = req.headers.host;
            if (!allowedHosts.includes(host)) {
                return res.status(400).send('Invalid Host header');
            }
            next();
        });
    } catch (e) {

    }
    $(document).ajaxError(function (event, jqxhr, settings, thrownError) {
        var sessionStatus = jqxhr;
        stopLoader();
        var text = 'Session Timeout';

        if (sessionStatus.status == 0 && sessionStatus.statusText == 'abort') {
            console.log('AjaxError:::StatusCode::::' + sessionStatus.status + '::::StatusText::::' + sessionStatus.statusText + '::::::Time out error.');
            return;
        } else if (sessionStatus.status == 0 || sessionStatus.statusText == 'error') {
            console.log('AjaxError:::StatusCode::::' + sessionStatus.status + '::::StatusText::::' + sessionStatus.statusText + '::::::Not connect.n Verify Network or Requested Url is not up and running');
            text = 'Requested Url is not working or Network Error';
        } else if (sessionStatus.status == 404) {
            console.log('AjaxError:::StatusCode::::' + sessionStatus.status + '::::StatusText::::' + sessionStatus.statusText + '::::::Requested page not found. [404]');
            text = 'Requested page not found. [404]';
        } else if (sessionStatus.status == 500) {
            console.log('AjaxError:::StatusCode::::' + sessionStatus.status + '::::StatusText::::' + sessionStatus.statusText + '::::::Internal Server Error [500].');
            text = 'Internal Server Error [500].';
        } else if (sessionStatus.statusText == 'parsererror') {
            console.log('AjaxError:::StatusCode::::' + sessionStatus.status + '::::StatusText::::' + sessionStatus.statusText + '::::::Requested JSON parse failed.');
            text = 'Requested Data parsing failed.';
        } else if (sessionStatus.status == 1 || sessionStatus.statusText == 'timeout') {
            console.log('AjaxError:::StatusCode::::' + sessionStatus.status + '::::StatusText::::' + sessionStatus.statusText + '::::::Time out error.');
            text = 'Session Timeout';
        } else {
            if (sessionStatus.statusText != null && sessionStatus.statusText != '' && sessionStatus.statusText != undefined && sessionStatus.statusText != 'undefined') {
                text = sessionStatus.statusText + " from " + settings.url;
                console.log('AjaxError:::StatusCode::::' + sessionStatus.status + '::::StatusText::::' + sessionStatus.statusText + '::::::Other error.');

            }
        }

        var helpImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAEZ0FNQQAAsY58+1GTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJpSURBVHja5JrNkaMwEIU/VBMAITiDnT3rMEwGZGCTgRWBiwhEBh5HsM5g8YHzOAQ2A0LYA5qxhz9jSTBm91X54BIlvadudbdoAnxAFREQAS/Ayvy6UJrfCcjRMnddOnAkvQZiILScpQKOwMFWTGBJfGd23CdyIL1XSHAH8RWwn4B4E0dAoWU55mExkvwGeJ+BPMYl382aHiygCg1s+R5kaKnsBahiD2wsFy+NO2As92w5zxtaJvcLcCOv0DLrcMO9bxFiwG1syact8gBavgGp5Zwbw2mEgHqntk5+azd2C9uugy06QqV2iuVaVr2j9ZhL9tWGY68FtENWnQNhc4NFI8PGjgtEqCK8+Yxrnqi5tiyw87RL24HI5iuf7L6G0VrRb4+mTkzUadZQvzy66Cta5k/mz9qzr+5RxdqUzQA/PLhnE2vgU0A8wYGLJq6dYiAJUEVsTLtEvAqHGuUREAlzDVwqXp4G7q+uOJsr40cCmsLSq6kEdIVRl2q0V4CYgHzeIn+pRnPfiwkWjikElJZjDyPgj+XY/+tC5YL5l/+EgNOCBZzEBLG5HMwRnnOOMC9Tq5kE+ESFlvlHFDou0H2O12H0sEABh4uA2o3yBZH/7O5cJ7J0Fr/1g7Sdif1ZoZ+klmcvvn/VxRGtOt51l/yQHNoc1V8L1W0d9cC+nzRbT6Ln4pFZL9F4+doYCx3IZ2jZCvdTNDjOA1bUlnfj3gbHlC0mXxhsMYkbBzLBrSnhimyI/G0LXCwRmzcK4UzEK3Ngb5Y4425k9UQ/Z6qZ6rVGkB9vga/WiFjkpwbdQhb4sUe/mIhv+Nzm7wAR5sTpFrB9RAAAAABJRU5ErkJggg==';
        if (sessionStatus.status == 1 || sessionStatus.status == 0 || sessionStatus.statusText == 'error') {
            $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='" + helpImage + "'></img></div><div style='float:left;margin-left: 10%;'>" + (labelObject['Session Timeout'] != null ? labelObject['Session Timeout'] : 'Session Timeout') + ".</div></div>");
        } else {
            $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='" + helpImage + "'></img></div><div style='float:left;margin-left: 10%;'>" + (labelObject[text] != null ? labelObject[text] : text) + ".</div></div>");
//         window.location.href = "httpError";
//          navigationMenuUrl('httpError');
//        $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='images/help.png'></img></div><div style='float:left;margin-left: 10%;'>" + (labelObject['Access is forbidden to the requested page'] != null ? labelObject['Access is forbidden to the requested page'] : 'Access is forbidden to the requested page') + ".</div></div>");
        }
        $("#logoutDailog").dialog({resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
//            height: 'auto',
//            minHeight: 'auto',
            width: 350,
            height: 135,
            fluid: true,
            buttons: [{
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
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
//                     navigationMenuUrl('timeout');
                        if (sessionStatus.status == 1 || sessionStatus.status == 0 || sessionStatus.statusText == 'error') {
//                        navigationMenuUrl("timeout");
                            window.location.href = "timeout";
                        } else {
                            if (sessionStatus.statusText == null
                                    || sessionStatus.statusText == ''
                                    || sessionStatus.statusText == undefined ||
                                    sessionStatus.statusText == 'undefined' || sessionStatus.statusText == 'error') {
                                window.location.href = "homePage";
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
    });



//    $(document).ajaxComplete(function (event, xhr, settings) {
////        var token = $("input[name='_csrf']").val();
////         var token = xhr.getResponseHeader('X-CSRF-TOKEN');
////         $('#_csrf').val(token);
//console .log(settings);
//console .log(xhr.getAllResponseHeaders());
//console .log(xhr.getResponseHeaders());
//console .log(xhr);
//    });
    $("html").addClass('visionScrollBar');
//    var request = new XMLHttpRequest();
//document.referrer = "http://www.google.com";
//    XMLHttpRequest.setRequestHeader("Referer", "http://www.google.com");
    var buttonValue = $('#visionHideBreadcrumbInput').val();
    if (buttonValue == '>>') {
        $(".visionHideBreadcrumbBtn").attr("title", "Click here to show Bread Crumb & Quick Links");
    } else {
        $(".visionHideBreadcrumbBtn").attr("title", "Click here to hide Bread Crumb & Quick Links");
    }
//    if ($(".visionHideBreadcrumbBtn").hasClass("inactive_toggle")) {
////        $(".visionBodyContentInner").addClass("visionExpandBodyContentInner");
//        $(".visionHideBreadcrumbBtn").attr("title", "Click here to show Bread Crumb & Quick Links");
//    } else {
////        $(".visionBodyContentInner").removeClass("visionExpandBodyContentInner");
//        $(".visionHideBreadcrumbBtn").attr("title", "Click here to hide Bread Crumb & Quick Links");
//    }
});
(function () {
    function forceCloseTab() {
        try {
            window.close();
        } catch (e) {
        }

        setTimeout(() => {
            try {
                window.open('', '_self').close();
            } catch (e) {
            }
        }, 50);

        setTimeout(() => {
            try {
                if (window.history.length > 1) {
                    window.history.go(-(window.history.length - 1));
                }
                window.close();
            } catch (e) {
            }
        }, 100);

        setTimeout(() => {
            try {
                const win = window.open('about:blank', '_self');
                win.close();
            } catch (e) {
            }
        }, 150);
    }

    // Each tab gets a unique ID
    const tabId = Date.now() + "_" + Math.random();
    const currentDomain = window.location.origin;  // domain only
    const channel = new BroadcastChannel('close-tabs');

    // Notify others a new tab is active for this domain
    channel.postMessage({type: 'new-tab', tabId, domain: currentDomain});

    channel.onmessage = (event) => {
        const data = event.data;

        if (data.type === 'new-tab' && data.tabId !== tabId) {
            // If same domain → close this old tab
            if (data.domain === currentDomain) {
                forceCloseTab();
            }
        }
    };
})();
//console.log = function () {};
alert = function () {};
confirm = function () {};
prompt = function () {};
var validNavigation = false;
var dialogValueResize = "true";
var labelObject = {};
var resultFlag = true;
var imageid = 0;
var basicDatas = {};
var firstPanelShowFlag = false;
var secondPanelShowFlag = false;
var thirdPanelShowFlag = false;
var fourthPanelShowFlag = true;
var searchPanelShowFlag = false;
var formPanelShowFlag = true;
var paramPanelShowFlag = false;
var classificatePanelShowFlag = false;
var selectedColumnData;
var fieldsArray = [];
var HtmlEntities = {
    " ": "&nbsp;"
};
function logout()
{
    $('#signOut').modal('hide');
    //KRAJ
    var contextPath = window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
    var originUri = window.location.origin + contextPath + "/" + "cloudLogout";
    localStorage.removeItem("previousTabUrl");
    localStorage.setItem("previousTabUrl", originUri);
    //KRAJ
//    navigationMenuUrl("cloudLogout");
    window.location.href = "cloudLogout";
}
$(window).resize(function () {
    fluidDialog();
});
$(document).on("dialogopen", ".ui-dialog", function (event, ui) {
    fluidDialog();
});
$(document).ready(function () {
    var notificationActiveFlag = $("#notificationActivatedID").val();
    if (notificationActiveFlag != null && notificationActiveFlag == 'Y') {
//        setInterval(getnotification, 5000);
    }

});
//function getnotification() {
//
//    $.ajax({
//        type: "POST",
//        url: 'getnotification',
//        data: {
//        },
//        success: function (response) {
//            var count = response['count'];
//            if (count > 0) {
//                $("#NotificationCountId").show();
//                $("#NotificationCountId").html(count);
//
//            } else {
//                $("#NotificationCountId").hide();
//            }
//
//            var strData = response['str'];
//            $("#notificationDialog").html(strData);
//        },
//        error: function (xhr, status, error) {
//            console.error("Error:", error);
//        }
//    });
//}
function fluidDialog()
{
    var $visible = $(".ui-dialog:visible");
    $visible.each(function () {
        var $this = $(this);
        var dialog = $this.find(".ui-dialog-content").data("ui-dialog");
        if (dialog.options.fluid)
        {
            var wWidth = $(window).width();
            if (wWidth < (parseInt(dialog.options.maxWidth) + 50))
            {
                $this.css("max-width", "90%");
            } else
            {
                $this.css("max-width", dialog.options.maxWidth + "px");
            }
            dialog.option("position", dialog.options.position);
        }
    });
}
function dialogSplitIconText() {
    var changeDialogText;
    if (arguments[1] == true) {
        changeDialogText = "<div class='visionDialogSperate'><span class='statuspopupIcon'><img src='images/iDXPUI5Help.svg'></span><span class='statuspopupMessage'>" + arguments[0] + "</span></div>";
    } else if (arguments[1] == "H") {
        changeDialogText = "<div class='visionDialogSperate'><span class='statuspopupIcon'><img src='images/iDXPUI5Help.svg'></span><span class='statuspopupMessage'>" + arguments[0] + "</span></div>";
    } else if (arguments[1] == "D") {
        changeDialogText = "<div class='visionDialogSperate'><span class='statuspopupIcon'><img src='images/iDXPUI5Delete.svg'></span><span class='statuspopupMessage'>" + arguments[0] + "</span></div>";
    } else if (arguments[1] == "P") {
        changeDialogText = "<div class='visionDialogSperate'><span class='statuspopupIcon'><img src='images/iDXPUI5DuplicateCheck.svg'></span><span class='statuspopupMessage'>" + arguments[0] + "</span></div>";
    } else if (arguments[1] == "S") {
        changeDialogText = "<div class='visionDialogSperate'><span class='statuspopupIcon'><img src='images/iDXPUI5Approve.svg' style = 'width: 20px;' ></span><span class='statuspopupMessage'>" + arguments[0] + "</span></div>";
    } else if (arguments[1] == "R") {
        changeDialogText = "<div class='visionDialogSperate'><span class='statuspopupIcon'><img src='images/iDXPUI5Unapprove.svg' style = 'width: 20px;' ></span><span class='statuspopupMessage'>" + arguments[0] + "</span></div>";
    } else if (arguments[1] == "C") {
        changeDialogText = "<div class='visionDialogSperate'><span class='statuspopupIcon'><img src='images/iDXPUI5Copy.svg'></span><span class='statuspopupMessage'>" + arguments[0] + "</span></div>";
    } else if (arguments[1] == "V") {
        changeDialogText = "<div class='visionDialogSperate'><span class='statuspopupIcon'><img src='images/iDXPUI5Save.svg'></span><span class='statuspopupMessage'>" + arguments[0] + "</span></div>";
    } else if (arguments[1] == "T") {
        changeDialogText = "<div class='visionDialogSperate'><span class='statuspopupIcon'><img src='images/iDXPUI5TransfertoERP.svg' style = 'width: 20px;' ></span><span class='statuspopupMessage'>" + arguments[0] + "</span></div>";
    } else if (arguments[1] == "SB") {
        changeDialogText = "<div class='visionDialogSperate'><span class='statuspopupIcon'><img src='images/iDXPUI5Submit.svg' style = 'width: 25px;' ></span><span class='statuspopupMessage'>" + arguments[0] + "</span></div>";
    } else if (arguments[1] == "I") {
        changeDialogText = "<div class='visionDialogSperate'><span class='statuspopupIcon'><img src='images/iDXPUI5ServiceInstancetoInstance.svg' style = 'width: 25px;' ></span><span class='statuspopupMessage'>" + arguments[0] + "</span></div>";
    } else if (arguments[1] == "SV") {
        changeDialogText = "<div class='visionDialogSperate'><span class='statuspopupIcon'><img src='images/iDXPUI5Save.svg' style = 'width: 25px;' ></span><span class='statuspopupMessage'>" + arguments[0] + "</span></div>";
    } else {
        changeDialogText = "<div class='visionDialogSperate'><span class='statuspopupIcon'><img src='images/iDXPUI5ChangeRequest.svg' style = 'width: 25px;' ></span><span class='statuspopupMessage'>" + arguments[0] + "</span></div>";
    }
    return changeDialogText;
}
/* breadcrumb menu change */
$(document).ready(function ()
{
    $("#breadCrumbMenu").change(function ()
    {
        if ($(this).val() !== "none")
        {
            $('#breadCrumbCheck').val($(this).val());
        }
    });
    $("#BreadCrumbButton").unbind("click").click(function ()
    {
        var selectedValueItem = $("#breadCrumbMenu").jqxComboBox('getSelectedItem');
        var selectedValue = selectedValueItem['value'];
//        var selectedValue = $("#breadCrumbMenu").val();
        if (selectedValue != null && selectedValue !== "none" && selectedValue !== "")
        {
            breadCrumbCheck(selectedValue);
        }
    });
    $("#BreadCrumbSearchButton").unbind("click").click(function ()
    {
        var selectedValueItem = $("#breadCrumbMenuSearch").jqxComboBox('getSelectedItem');
        var selectedValue = selectedValueItem['value'];
        if (selectedValue != null && selectedValue !== "none" && selectedValue !== "")
        {
            breadCrumbSearchCheck(selectedValue);
        }
    });

});
function breadCrumbSearchCheck(selectedValue)
{
    if ($("#breadCrumbSearchCheck").is(':checked'))
    {
        navigationMenuUrl(selectedValue, 'Y');
    } else
    {
        navigationMenuUrl(selectedValue);
    }
}
function breadCrumbCheck(selectedValue)
{
    if ($("#breadCrumbCheck").is(':checked'))
    {
//        var checkBox = $('#breadCrumbCheck').val();
//        window.open(checkBox, '_blank');
        navigationMenuUrl(selectedValue, 'Y');
    } else
    {
//        var checkBox = $('#breadCrumbCheck').val();
//        window.open(checkBox, '_self');
        navigationMenuUrl(selectedValue);
    }
}
function startTabLoader() {
    console.log("in start startTabLoader ");
    $("#wait").css("opacity", "0.99");
    $("#wait").css("display", "block");
    $("body").css("pointer-events", "none");
}
function endTabLoader() {
    console.log("in endTabLoaderregister");
    $("#wait").css("display", "none");
    $("body").css("pointer-events", "auto");
}
function callStartAjax() {
    $("#wait").css("opacity", "0.99");
    $("#wait").css("display", "block");
    $("body").css("pointer-events", "none");
}
function callEndAjax()
{
    $("#wait").css("display", "none");
    $("body").css("pointer-events", "auto");
}
function ajaxStart() {
    $(document).ajaxStart(function () {
        $("#Loader").css("opacity", "0.99");
        $("#Loader").css("display", "block");
        $("body").css("pointer-events", "none");
    });
}
function ajaxStop() {
    $(document).ajaxStop(function () {
        $("#Loader").css("display", "none");
        $("body").css("pointer-events", "auto");
//         $('.dxpSideMenuClass').hide();
    });
}
function sessionTimeout(sessionStatus)
{
    stopLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var text = 'Session Timeout';
    if (sessionStatus.statusText != null && sessionStatus.statusText != '' && sessionStatus.statusText != undefined && sessionStatus.statusText != 'undefined') {
        text = sessionStatus.statusText;
    }

    var helpImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAEZ0FNQQAAsY58+1GTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJpSURBVHja5JrNkaMwEIU/VBMAITiDnT3rMEwGZGCTgRWBiwhEBh5HsM5g8YHzOAQ2A0LYA5qxhz9jSTBm91X54BIlvadudbdoAnxAFREQAS/Ayvy6UJrfCcjRMnddOnAkvQZiILScpQKOwMFWTGBJfGd23CdyIL1XSHAH8RWwn4B4E0dAoWU55mExkvwGeJ+BPMYl382aHiygCg1s+R5kaKnsBahiD2wsFy+NO2As92w5zxtaJvcLcCOv0DLrcMO9bxFiwG1syact8gBavgGp5Zwbw2mEgHqntk5+azd2C9uugy06QqV2iuVaVr2j9ZhL9tWGY68FtENWnQNhc4NFI8PGjgtEqCK8+Yxrnqi5tiyw87RL24HI5iuf7L6G0VrRb4+mTkzUadZQvzy66Cta5k/mz9qzr+5RxdqUzQA/PLhnE2vgU0A8wYGLJq6dYiAJUEVsTLtEvAqHGuUREAlzDVwqXp4G7q+uOJsr40cCmsLSq6kEdIVRl2q0V4CYgHzeIn+pRnPfiwkWjikElJZjDyPgj+XY/+tC5YL5l/+EgNOCBZzEBLG5HMwRnnOOMC9Tq5kE+ESFlvlHFDou0H2O12H0sEABh4uA2o3yBZH/7O5cJ7J0Fr/1g7Sdif1ZoZ+klmcvvn/VxRGtOt51l/yQHNoc1V8L1W0d9cC+nzRbT6Ln4pFZL9F4+doYCx3IZ2jZCvdTNDjOA1bUlnfj3gbHlC0mXxhsMYkbBzLBrSnhimyI/G0LXCwRmzcK4UzEK3Ngb5Y4425k9UQ/Z6qZ6rVGkB9vga/WiFjkpwbdQhb4sUe/mIhv+Nzm7wAR5sTpFrB9RAAAAABJRU5ErkJggg==';
    if (sessionStatus.status == 1) {
        $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='" + helpImage + "'></img></div><div style='float:left;margin-left: 10%;'>" + (labelObject['Session Timeout'] != null ? labelObject['Session Timeout'] : 'Session Timeout') + ".</div></div>");
    } else {
        $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='" + helpImage + "'></img></div><div style='float:left;margin-left: 10%;'>" + (labelObject[text] != null ? labelObject[text] : text) + ".</div></div>");
//         window.location.href = "httpError";
//          navigationMenuUrl('httpError');
//        $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='images/help.png'></img></div><div style='float:left;margin-left: 10%;'>" + (labelObject['Access is forbidden to the requested page'] != null ? labelObject['Access is forbidden to the requested page'] : 'Access is forbidden to the requested page') + ".</div></div>");
    }
    $("#logoutDailog").dialog({resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        width: 350,
        height: 135,
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
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
//                     navigationMenuUrl('timeout');
                    if (sessionStatus.status == 1) {
//                        navigationMenuUrl("timeout");
                        window.location.href = "timeout";
                    } else {
                        if (sessionStatus.statusText == null
                                || sessionStatus.statusText == ''
                                || sessionStatus.statusText == undefined ||
                                sessionStatus.statusText == 'undefined') {
                            window.location.href = "homePage";
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
}
function navigationSubMenuUrl() {
    $('.tooltip-inner').hide();
    $('.showDXPSplitterSecondGovdata').hide();
    $('.showDXPSplitterTaxonomyDxpdata').hide();
    var url = arguments[0];
    var moduleCode = "";
    var role = "";
    if (url != null) {
        var urlArray = url.split("?");
        if (urlArray[0] != null) {
            url = urlArray[0];

            if (urlArray[1] != null) {
                var parametersArray = urlArray[1].split("&");

                if (parametersArray != null && parametersArray.length > 0) {
                    for (var i = 0; i < parametersArray.length; i++) {
                        console.log("parametersArray[i]:::" + parametersArray[i]);
                        if (parametersArray[i] != null && parametersArray[i].indexOf("target=blank") == -1) {
                            var paramsNamesArray = parametersArray[i].split("=");
                            if (paramsNamesArray[0] != null) {
                                moduleCode = paramsNamesArray[0];
                                role = paramsNamesArray[1];
                            }

                        }

                    }

                }
            }
            $.ajax({
                datatype: "json",
                type: "POST",
                url: url,
                data: {
                    'moduleCode': moduleCode,
                    'role': role
                },
                traditional: true,
                cache: false,
                success: function (response) {
                    stopLoader();
                    if (response != null && !jQuery.isEmptyObject(response)) {
                        $("#showDXPSplitterTaxonomyDxpdata").hide();
                        $("#dxpTaxonomyRepositories").html(response);
                        $("#dxpTaxonomyRepositories").show();
                    }

                },
                error: function (e) {
                    stopLoader();
                    alert('Error: ' + e);

                }
            });
        }
    }


}
function dialogWidthResize(message, setWidth)
{
    if (message != null && message != '') {
        var messagecount = message.toString().length;
        // var messagecount = message.length;
        if (messagecount <= 25) {
            setWidth = 275;
        } else if ((messagecount > 25) && (messagecount <= 32)) {
            setWidth = 300;
        } else if ((messagecount >= 32) && (messagecount <= 42)) {
            setWidth = 330;
        } else if ((messagecount >= 43) && (messagecount <= 52))
        {
            setWidth = 390;
        } else if ((messagecount >= 51) && (messagecount <= 62))
        {
            setWidth = 455;
        } else {
            setWidth = 500;
        }
        if ($(window).width() > setWidth) {

            return setWidth;
        } else if ($(window).width() < setWidth) {

            setWidth = $(window).width() - 5;
            return setWidth;
        }

    }
}
function popupedit(column, cellValue) {
    if (true) {


        var message = cellValue;
        var setWidth = dialogWidthResize(message, setWidth);
//        showErrorPopupMessage(message, column, setWidth);
        $("#dialog1").dialog({resizable: false,
            modal: true,
            title: column,
            width: dialogWidthResize(message, setWidth),
            height: 'auto',
            minHeight: 'auto',
            maxHeight: 250,
            fluid: true,
            buttons: {
                Ok: function () {
                    $(this).html("");

                    try {
                        $(this).dialog("destroy");
                    } catch (e) {

                    }
                    try {
                        $(this).dialog("close");
                    } catch (e) {

                    }


                }
            },
            open: function () {
                $(this).html(cellValue);
                $(this).closest(".ui-dialog").addClass("cellValuePopup");
            },
            beforeClose: function (event, ui)
            {

            }
        }); //end confirm dialog


        console.log(column + " : " + cellValue);
    }

}
function showContent(id) {
    var column = $("#" + id).attr("data-label");
    var cellValue = $("#" + id).val();
    if (cellValue != null && cellValue != '') {
        popupedit(column, cellValue);
    } else {
        var cellValue = $("#" + id).text().trim();
        if (cellValue != null && cellValue != '') {
            popupedit(column, cellValue);
        }
    }
}
function clearFieldData(id) {
    //$("#"+id).attr("value", "");
    $("#" + id).val('');
}
function clearComboBoxField(id) {
    $("#" + id).jqxComboBox('clearSelection');
}
function showConsolidationContent(index, columnName, type) {
    var cellValue = "";
    if (type == 'table') {
        cellValue = $("#" + columnName + "_" + index).html();
    } else {
        cellValue = $("#hidden_" + columnName + "_" + index).val();
    }
//    cellValue = $("#hidden_" + columnName + "_" + index).val();  
    var column = $("#label_" + columnName).html();
    if (cellValue != null && cellValue != '' && cellValue != 'null') {
        popupedit(column, cellValue);
    }

}
function selectAllCheckBox(id) {
    $(".recordCheckBox").prop('checked', $("#" + id).prop('checked'));
}
function navigateToIconURL(href, gridId, selectedRecordData) {
//    alert("::navigateCocpitView::::"+href);
    if (href != null) {
        console.log("Before:::" + href);
        console.log("After:::" + href);
        var hrefArray = href.split("?");
        $("#navigationUrlForm").attr("action", hrefArray[0]);
        $("#navigationUrlForm").attr("target", "_blank");
        var token = $("input[name='_csrf']").val();
        if (!(selectedRecordData != null && !jQuery.isEmptyObject(selectedRecordData)) && gridId != null && gridId != '') {
            var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
            if (selectedrowindexes != null && selectedrowindexes.length != 0) {
                selectedRecordData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[0]);
            } else {
                selectedRecordData = $('#' + gridId).jqxGrid('getrowdata', 0);
            }
        }
        $("#navigationUrlForm").find('input').remove();
        if (hrefArray[1] != null) {
            var inputParams = hrefArray[1].split("&");
            for (var i = 0; i < inputParams.length; i++) {
                if (inputParams[i] != null) {
                    if (inputParams[i] != null && inputParams[i] != '') {

                        if (inputParams[i] != null && inputParams[i] != '' && inputParams[i].indexOf("items={") > -1) {
                            var inputParamsArray = inputParams[i].split("=");
                            var value = inputParamsArray[1];
                            if (selectedRecordData != null && !jQuery.isEmptyObject(selectedRecordData)
                                    && value != null && value.indexOf("<<--") > -1) {
                                for (var columnName in selectedRecordData) {
                                    var matchedColumn = "<<--" + columnName + "-->>";
                                    if (value.indexOf(matchedColumn) > -1) {
                                        value = value.replace(matchedColumn, selectedRecordData[columnName]);
                                    }
                                }
                            }
                            var inputType = "<input type='hidden' name='" + inputParamsArray[0] + "' value='" + value + "'/>";
                            $("#navigationUrlForm").append(inputType);
                        } else {
                            var inputArray = inputParams[i].split("=");
                            var value = inputArray[1];
                            if (selectedRecordData != null && !jQuery.isEmptyObject(selectedRecordData)
                                    && value != null && value.indexOf("<<--") > -1) {
                                for (var columnName in selectedRecordData) {
                                    var matchedColumn = "<<--" + columnName + "-->>";
                                    if (value.indexOf(matchedColumn) > -1) {
                                        value = value.replace(matchedColumn, selectedRecordData[columnName]);
                                    }
                                }
                            }
                            var inputType = "<input type='hidden' name='" + inputArray[0] + "' value='" + value + "'/>";
                            $("#navigationUrlForm").append(inputType);
                        }

                    }

                }

            }
            inputType = "<input type='hidden' name='_csrf' value='" + token + "'/>";
            $("#navigationUrlForm").append(inputType);
        }

        $("#navigationUrlForm").submit();
    }

}
function showHelp(gridId, opName) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $.ajax({
        type: "POST",
        url: 'helpHref',
        dataType: 'html',
        data: {
            'compId': gridId

        },
        traditional: true,
        cache: false,
        success: function (response) {
            if (response != null && response != '') {
                var ssThemesURL = $("#ssThemesURL").val();
                var fullPath = ssThemesURL + '/' + response;
                $("#dialog").html('<iframe style="border: 0px; " src="' + fullPath + '" width="940px" height="400px"></iframe>').dialog({resizable: false,
                    title: (labelObject[opName] != null ? labelObject[opName] : opName),
                    modal: true,
                    height: 'auto',
                    minHeight: 500,
                    minWidth: 1000,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
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
        }, error: function (e) {
            console.log(e);
            sessionTimeout(e);
        }

    })


}
function viewXml(gridId, index, columnfield, tableName) {
    var data = $('#' + gridId).jqxGrid('getrowdata', index);
    if (data != null) {
        var sequenceNo = data['SEQUENCE_NO'];
        var recordNo = data['RECORD_NO'];
        var plant = data['PLANT'];
        $("#urlSubmitForm").find('input').remove();
        var csrfToken = $("input[name='_csrf']").val();
        if (csrfToken != null && csrfToken != '') {
            var csrf = "<input type='hidden' name='_csrf' value='" + csrfToken + "'/>";
            $("#urlSubmitForm").append(csrf);
        }
        //$("#urlSubmitForm").attr("action", "viewPayLoad");
        $("#urlSubmitForm").attr("action", "viewXml");
        $("#urlSubmitForm").attr("target", "_blank");
        $("#urlSubmitForm").find('input').remove();
        if (columnfield != null && columnfield != '') {
            var selectingDataField = "<input type='hidden' name='selectingDataField' value='" + columnfield + "'/>";
            $("#urlSubmitForm").append(selectingDataField);
        }
        if (tableName != null && tableName != '') {
            var gridTableName = "<input type='hidden' name='tableName' value='" + tableName + "'/>";
            $("#urlSubmitForm").append(gridTableName);
        }
        var inputType = "<input type='hidden' name='xmlJSONData' value='" + JSON.stringify(data) + "'/>";
        $("#urlSubmitForm").append(inputType);
        $("#urlSubmitForm").submit();
    }

}
function showSelectedRows(gridId, selectedIndex, uuu_GridNtfnFlag) {
    var labelObj = {};
    // labelObject = {};
    try {
        labelObj = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $('#' + gridId + '_showgridSlectedRowsCount').remove();
    //$("#pager"+gridId).remove("<div class='showRowsCount'></div>");
//     clearTimeout(5000);
    if (gridId != null && gridId != '') {
        var selectedRowIndexes = $("#" + gridId).jqxGrid('getselectedrowindexes');
        var totalRowIndex = selectedRowIndexes.length;
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
    }
    if (totalRowIndex > 0) {
//$('.showRowsCount').show();
        // $('#showRowsCount').show();
        var ntfnFlag = "Y";
        var nthRowNtfn = "Y";
        if (uuu_GridNtfnFlag != null && uuu_GridNtfnFlag != '') {
            var uuu_GridNtfnFlagArray = uuu_GridNtfnFlag.split(":");
            if (uuu_GridNtfnFlagArray != null && uuu_GridNtfnFlagArray.length != 0) {
                try {
                    ntfnFlag = (uuu_GridNtfnFlagArray[0] != null && uuu_GridNtfnFlagArray[0] != '' ? uuu_GridNtfnFlagArray[0] : "Y");
                } catch (e) {
                }
                try {
                    nthRowNtfn = (uuu_GridNtfnFlagArray[1] != null && uuu_GridNtfnFlagArray[1] != '' ? uuu_GridNtfnFlagArray[1] : "Y");
                } catch (e) {
                }
            }
        }
        var divCode = "";
//         divCode = '<div class="showRowsCountInner">';
        if (ntfnFlag == 'Y') {
//            divCode += '<div class="visionCountNtfctnDiv">'
//                    + '<img src="images/about_us_white.png" alt="Notification" class="visionCountNtfctnIcon">'
//                    + '</div>'
//            divCode += '<p>You have selected ' + totalRowIndex + ' row(s)';
//            divCode += 'You have selected ' + totalRowIndex + ' row(s)';
            divCode += 'Total row(s) selected: ' + totalRowIndex + '';
            // divCode += '<div class="visionCancelDiv"><img src="images/cancel_icon.png" onclick="hideRows()" alt="Notification" class="visionCancelIcon">'

        }
        if (nthRowNtfn == 'Y') {
            if (selectedIndex != null) {
                if ($.isArray(selectedIndex)) {
                    selectedIndex = -1;
                } else {
                    try {
                        selectedIndex = parseInt(selectedIndex);
                    } catch (e) {
                    }
                }

//                if (selectedIndex == -1) {
//                    selectedIndex = 0;
//                }
                if (selectedIndex != -1) {
                    selectedIndex = parseInt(selectedIndex) + 1;
                    var supTag = "<sup>th</sup>";
                    switch (selectedIndex) {
                        case 1:
                            supTag = "<sup>st</sup>"
                            break;
                        case 2:
                            supTag = "<sup>nd</sup>"
                            break;
                        case 3:
                            supTag = "<sup>rd</sup>"
                            break;
                        default:
                            supTag = "<sup>th</sup>"
                            break;
                    }
//                divCode += '<div class="visionCountNtfctnDiv">'
//                        + '<img src="images/about_us_white.png" alt="Notification" class="visionSelectedNtfctnIcon">'
//                        + '</div>'
//                    divCode += ' , ' + selectedIndex + supTag + ' row</p>';
//                    divCode += ' , Last selected row' + selectedIndex + supTag + ''; 
                    divCode += ', Selected row# ' + selectedIndex + '';
                }


            }
//            divCode += '<div class="visionCancelDiv"><img src="images/cancel_icon.png" onclick="hideRows()" alt="Notification" class="visionCancelIcon">'
//                    + '</div>';
        }
        if (divCode != null && divCode != '') {
            // divCode = '<div class="showRowsCountInner">'+divCode+'</div>';
            // $('#showRowsCount').html(divCode);
//            $("#pager" + gridId).append("<div class='showgridSlectedRowsCount' id='" + gridId + "_showgridSlectedRowsCount'>" + divCode + "</div>");
            $("#pager" + gridId).append("<div id='" + gridId + "_showgridSlectedRowsCount'>" + divCode + "</div>");
//            setTimeout(function () {
//                $('#showRowsCount').hide();
//            }, 5000);
        } else {
            try {
//         $("#pager" + gridId).remove("<div class='showgridSlectedRowsCount'>" + divCode + "</div>"); 
                $('#' + gridId + '_showgridSlectedRowsCount').remove();
            } catch (ed) {
                stopLoader();
            }
        }
    } else {
        try {
//         $("#pager" + gridId).remove("<div class='showgridSlectedRowsCount'>" + divCode + "</div>");
            $('#' + gridId + '_showgridSlectedRowsCount').remove();
        } catch (ed) {
            stopLoader();
        }


    }

}
function hideRows() {
    $('#showRowsCount').hide();
    $('#showgridSlectedRowsCount').hide();
}
function chartEndTabLoader() {
    console.log("in endTabLoaderregister");
    $("#wait").css("display", "none");
    $("body").css("pointer-events", "auto");
}
function chartStartTabLoader() {
    console.log("in start startTabLoader ");
    setTimeout(function () {
        $("#wait").css("opacity", "0.99");
        $("#wait").css("display", "block");
        $("body").css("pointer-events", "none");
    }, 50);
}
function hideBreadcrumb() {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }


    $(".visionBreadcrumMain").toggle();
    if ($(".visionBreadcrumMain").is(":visible")) {
        $('#visionHideBreadcrumbInput').val('<<'); //visionHideBreadcrumbInput
        $(".visionHideBreadcrumbBtn").attr("title", "Click here to hide Bread Crumb & Quick Links");
        $(".visionHideBreadcrumbBtn").removeClass("visionHideBreadcrumbBtnRes");
    } else {
        $('#visionHideBreadcrumbInput').val('>>');
        $(".visionHideBreadcrumbBtn").attr("title", "Click here to show Bread Crumb & Quick Links");
        $(".visionHideBreadcrumbBtn").addClass("visionHideBreadcrumbBtnRes");
    }
}
function showLoader() {
    $("#Loader").css("opacity", "0.99");
    $("#Loader").css("display", "block");
    $("body").css("pointer-events", "none");
}
function stopLoader()
{
    $("#Loader").css("display", "none");
    $("body").css("pointer-events", "auto");
}
function showHelpMenu(helpMenuURL, buttonType, desc) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
    }
    buttonType = buttonType + ":";
    if (helpMenuURL != null
            && helpMenuURL != ''
            && helpMenuURL != 'null'
            && helpMenuURL != '#'
            && helpMenuURL.indexOf(buttonType) > -1) {
        var ssRole = $("#helpMenuRole").val();
        var ssThemesURL = $("#helpMenuThemesURL").val();
        var ssBusinessRole = $("#helpMenuBuRole").val();
        if (ssBusinessRole != null && ssBusinessRole != '' && ssBusinessRole != 'null') {
            ssRole = ssBusinessRole;
        }
        var helpMenuURLArray = helpMenuURL.split(";");
        if (helpMenuURLArray != null && helpMenuURLArray.length != 0) {
            var helpURL = "";
            for (var i = 0; i < helpMenuURLArray.length; i++) {
                var helpURLStr = helpMenuURLArray[i];
                if (helpURLStr != null
                        && helpURLStr != ''
                        && helpURLStr != 'null'
                        && helpURLStr != '#'
                        && helpURLStr.indexOf(buttonType) > -1) {
                    helpURLStr = helpURLStr.replace(buttonType, "");
                    if (helpURLStr.match("^http")
                            || helpURLStr.match("^Http")
                            ) {//str.match("^Hello")
                        helpURL = helpURLStr;
                    } else {
                        if (buttonType == 'H:') {
                            helpURL = ssThemesURL + "Help/" + ssRole + "/" + helpURLStr.replace(buttonType, "");

                        } else if (buttonType == 'I:') {
                            helpURL = ssThemesURL + "Info/" + ssRole + "/" + helpURLStr.replace(buttonType, "");
                        } else if (buttonType == 'V:') {
                            helpURL = ssThemesURL + "Video/" + ssRole + "/" + helpURLStr.replace(buttonType, "");
                        }
                    }
                    console.log("helpURL::" + helpURL);
                    break;
                }
            }
            var title = helpMenuURLArray[3];
            var titleArray = title.split(":");
            if (helpURL != null && helpURL != '' && helpURL != 'null') {
                var ifmHelpStr = "<div ><iframe  id='ifmHelp' width ='100%' src='" + helpURL + "'  height='500' frameborder='0' allowfullscreen > </iframe> </div>";
                var modalObj = {
                    title: titleArray[1],
                    body: ifmHelpStr
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
                createVideoModal("modalInfoDailogDiv", modalObj);

//  $("#ifmHelp").attr('src', helpURL);        
            }
//        }
        }
    }
}
function createVideoModal(modalDivId, modalObj) {
    $("#" + modalDivId).html("");
    var buttonsArray = modalObj['buttons'];
    $("#" + modalDivId).addClass("modal fade");
    $("#" + modalDivId).attr("role", "dialog");
    $("#" + modalDivId).attr("data-backdrop", "static");
    $("#" + modalDivId).addClass("videoDataPopup");
    var modalContant = ''
            + '<div class="modal-dialog modal-lg">'
            + '<div class="modal-content">'
            + '<div class="modal-header">'
            + '<h4 class="modal-title text-center">' + modalObj['title'] + '</h4>'
            + '<button type="button" class="close" data-toggle="modal" data-target="#' + modalDivId + '"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'
            + '</div>'
            + '<div class="modal-body">'
            + modalObj['body']
            + ' </div>';
    modalContant += '</div>'
            + '</div>';
    $("#" + modalDivId).html(modalContant);
    if (buttonsArray != null && buttonsArray.length != 0) {
        var footer = $('<div class="modal-footer">');
        for (var i = 0; i < buttonsArray.length; i++) {
            var buttonObj = buttonsArray[i];
            if (buttonObj != null && !jQuery.isEmptyObject(buttonObj)) {
                var onclickButtonfunction = "";
                var isDismissButton = "";
                if (buttonObj['isCloseButton'] == true) {
                    isDismissButton = " data-dismiss=\"modal\" ";
                }
                var button = $('<button type="button" class="btn btn-primary" ' + isDismissButton + ' >' + buttonObj['text'] + '</button>');
                if (buttonObj['click'] != null && buttonObj['click'] != '') {
                    $(button).click(buttonObj['click']);
                }
                $(footer).append(button);
            }
        }
        $("#" + modalDivId + " .modal-content").append(footer);
    } else {
        $("#" + modalDivId + " .modal-content").append('<div class="modal-footer">'
                + ' <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>'
                + '</div>');
    }
    $('#' + modalDivId).modal('show');
}
//function createModal(modalDivId, modalObj, loginmessageflag) {
//    console.log('Creating modal:', modalDivId, 'loginmessageflag:', loginmessageflag);
//    $("#" + modalDivId).html("").addClass("modal fade").attr({
//        "role": "dialog",
//        "data-bs-backdrop": "static"
//    }).css("padding-top", "58px");
//
//    var modalContant = `
//        <div class="modal-dialog opacity-animate3">
//            <div class="modal-content">
//                <div class="modal-header">
//                    <h4 class="modal-title text-center">${modalObj['title']}</h4>
//                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                </div>
//                <div class="modal-body">
//                    ${modalObj['body']}
//                </div>
//            </div>
//        </div>
//    `;
//
//    $("#" + modalDivId).html(modalContant);
//
//    var buttonsArray = modalObj['buttons'];
//    if (buttonsArray && buttonsArray.length > 0) {
//        var footer = $('<div class="modal-footer">');
//        for (var i = 0; i < buttonsArray.length; i++) {
//            var buttonObj = buttonsArray[i];
//            if (buttonObj && !$.isEmptyObject(buttonObj)) {
//                var isDismissButton = buttonObj['isCloseButton'] ? ' data-bs-dismiss="modal" ' : '';
//                var button = $('<button type="button" class="btn btn-primary" ' + isDismissButton + '>' + buttonObj['text'] + '</button>');
//                if (buttonObj['click']) {
//                    button.click(buttonObj['click']);
//                } else if (buttonObj['isCloseButton']) {
//                    button.click(function () {
//                        console.log('Custom close button clicked');
//                        $('#' + modalDivId).modal('hide');
//                    });
//                }
//                footer.append(button);
//            }
//        }
//        $("#" + modalDivId + " .modal-content").append(footer);
//    } else {
//        $("#" + modalDivId + " .modal-content").append(
//                '<div class="modal-footer">' +
//                '<button type="button" class="btn btn-primary" data-bs-dismiss="modal">Ok</button>' +
//                '</div>'
//                );
//    }
//
//    $('#' + modalDivId).on('click', '.btn-close', function () {
//        console.log('Close button (×) clicked');
//        $('#' + modalDivId).modal('hide');
//    });
//
//    try {
//        $('#' + modalDivId).modal('show');
//        console.log('Modal shown');
//    } catch (e) {
//        console.error('Error showing modal:', e);
//    }
//
//
//    let inputElement = document.getElementById(modalDivId);
//    inputElement.focus();
//
//    let buttons = $('#' + modalDivId).find(".btn.btn-primary");
//    if (buttons.length > 1) {
//        buttons.eq(1).focus();
//    } else if (buttons.length > 0) {
//        buttons.eq(0).focus();
//    }
//
//    $(document).off('keydown.modal').on('keydown.modal', function (e) {
//        const mymodal = $('#' + modalDivId);
//        console.log('Key pressed:', e.key, 'Modal visible:', mymodal.hasClass('show'), 'loginmessageflag:', loginmessageflag);
//        if (loginmessageflag !== 'Y') {
//            if (e.key === 'Escape' || e.key === 'Enter') {
//                if (mymodal.hasClass('show')) {
//                    console.log('Hiding modal');
//                    mymodal.modal('hide');
//                } else {
//                    console.log('Modal not visible');
//                }
//            }
//        } else {
//            console.log('Keydown ignored due to loginmessageflag = Y');
//        }
//    });
//}
function createModal(modalDivId, modalObj, loginmessageflag) {
    $("#" + modalDivId).html("");
    var buttonsArray = modalObj['buttons'];
    $("#" + modalDivId).addClass("modal fade");
    $("#" + modalDivId).attr("role", "dialog");
    $("#" + modalDivId).attr("data-backdrop", "static");
    $("#" + modalDivId).css("padding-top", "58px");
    let inputElement = document.getElementById(modalDivId);
    inputElement.focus();
    var modalContant = ''
            + '<div class="modal-dialog opacity-animate3">'
            + '<div class="modal-content">'
            + '<div class="modal-header">'
            + '<h4 class="modal-title text-center">' + modalObj['title'] + '</h4>'
            + '<button type="button" class="close" data-toggle="modal" data-target="#' + modalDivId + '"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'
            + '</div>'
            + '<div class="modal-body">'
            + modalObj['body']
            + ' </div>';
    modalContant += '</div>'
            + '</div>';
    $("#" + modalDivId).html(modalContant);
    if (buttonsArray != null && buttonsArray.length != 0) {
        var footer = $('<div class="modal-footer">');
        for (var i = 0; i < buttonsArray.length; i++) {
            var buttonObj = buttonsArray[i];
            if (buttonObj != null && !jQuery.isEmptyObject(buttonObj)) {
                var onclickButtonfunction = "";
                var isDismissButton = "";
                if (buttonObj['isCloseButton'] == true) {
                    isDismissButton = " data-dismiss=\"modal\" ";
                }
                var button = $('<button type="button" class="btn btn-primary" ' + isDismissButton + ' >' + buttonObj['text'] + '</button>');
                if (buttonObj['click'] != null && buttonObj['click'] != '') {
                    $(button).click(buttonObj['click']);
                }
                $(footer).append(button);
            }
        }
        $("#" + modalDivId + " .modal-content").append(footer);
    } else {
        $("#" + modalDivId + " .modal-content").append('<div class="modal-footer">'
                + ' <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>'
                + '</div>');
    }
//     $('#' + modalDivId).draggable();
//     $('#' + modalDivId).resizable();
//     $('#' + modalDivId).resize();
    $('#' + modalDivId).modal('show');
    $('#' + modalDivId).focus();
    $('#' + modalDivId).find("btn btn-primary").eq(1).focus();
//    $(".modal").draggable();
//    $(".modal").css("cursor", "move");
    $(document).keydown(function (e) {
        const mymodal = $('#' + modalDivId);
        if (loginmessageflag != null && loginmessageflag != undefined && loginmessageflag != "" && loginmessageflag == 'Y') {

        } else {
            if (e.keyCode == 27) {
                if (mymodal.hasClass("show")) {
                    mymodal.modal('hide');
                    $(".backGroundOpacity").css("display", "none");
                }
            } else if (e.keyCode == 13) {
                if (mymodal.hasClass("show")) {
                    mymodal.modal('hide');
                    $(".backGroundOpacity").css("display", "none");
                }
            }
        }
    });


}
function cloudFormpopup(modalDivId, modalObj) {
    $("#" + modalDivId).html("");
    var buttonsArray = modalObj['buttons'];
    var modelSize = modalObj['modelSize'];
    $("#" + modalDivId).addClass("modal fade");
    $("#" + modalDivId).attr("role", "dialog");
    var modalContant = ''
    if (modelSize != null && modelSize != undefined && modelSize != "" &&
            modelSize != "null" && modelSize == "modal-xl") {
        modalContant += '<div class="modal-dialog ' + modelSize + '">';
    } else {
        modalContant += '<div class="modal-dialog">';
    }
    modalContant += '<div class="modal-content">'
            + '<div class="modal-header">'
            + '<h4 class="modal-title text-center">' + modalObj['title'] + '</h4>'
            + '<button type="button" class="close" data-dismiss="modal">&times;</button>'
            + '</div>'
            + '<div class="modal-body">'
            + modalObj['body']
            //            + '<div id="modalDailogDiv1" class="modal fade" style="padding-top:58px">'

            + '</div>'
            + ' </div>';
    modalContant += '</div>'
            + '</div>';

    $("#" + modalDivId).html(modalContant);
    $('#' + modalDivId).modal('show');
    $('.cloudSubFormDiv').addClass("cloudFormDiv");
}
function navigationMenuUrl() {
    if ($('.ui-widget-overlay').length > 0) {
        return;
    }
    var url = arguments[0];
    var nextPage = arguments[1];
    var searchId = '';
    alert(nextPage + ":::navigationMenuUrl::::" + url);
    $("#navigationUrlForm").empty();
    if (nextPage != null && nextPage == 'Y' && arguments.length > 1) {
        $("#navigationUrlForm").attr("target", "_blank");
    } else {
        $("#navigationUrlForm").removeAttr("target");
        if (url != null && url.indexOf("target=blank") > -1) {
            $("#navigationUrlForm").attr("target", "_blank");
            url = url.replace("?target=blank", "");
            url = url.replace("&target=blank", "");
        }
    }
    if (url != null) {
        var urlArray = url.split("?");
        if (urlArray[0] != null) {
            $("#navigationUrlForm").attr("action", urlArray[0]);
            if (urlArray[1] != null) {
                var parametersArray = urlArray[1].split("&");
                if (parametersArray != null && parametersArray.length > 0) {
                    for (var i = 0; i < parametersArray.length; i++) {
                        console.log("parametersArray[i]:::" + parametersArray[i]);
                        if (parametersArray[i] != null && parametersArray[i].indexOf("target=blank") == -1) {
                            var paramsNamesArray = parametersArray[i].split("=");
                            if (paramsNamesArray[0] != null) {
                                searchId = paramsNamesArray[1];
                                $("#navigationUrlForm").append("<input type='hidden' name='" + paramsNamesArray[0] + "' value='" + paramsNamesArray[1] + "'/>");
                            }

                        }

                    }

                }
            }

//            if (url != null && url != '' && url != undefined 
//                     && url != 'homePage' && url != 'cloudLogout' && url != 'HomePage' && url != 'timeout'){
//             var csrfToken = $("input[name='_csrf']").val();
//            if (csrfToken != null && csrfToken != '') {
//                var csrf = "<input type='hidden' name='_csrf' value='" + csrfToken + "'/>";
//                $("#navigationUrlForm").append(csrf);
//            }   
//            }

            var csrfToken = $('meta[name="_csrf"]').attr('content');
            if (csrfToken != null && csrfToken != '') {
                var csrf = "<input type='hidden' name='_csrf' value='" + csrfToken + "'/>";
                $("#navigationUrlForm").append(csrf);
            }

            if (urlArray[0] != null && urlArray[0] != undefined && urlArray[0] != '' && urlArray[0] == 'GenericSearch') {
                creationProcess(urlArray[0], searchId)
            } else {
                $("#navigationUrlForm").submit();
            }

        }
    }
}
function showDXPButtons(value) {
    $(".showDXPSplitterSecondGovdata").hide();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'showSecondSplitterMenu',
        data: {
            'moduleCode': "",
            'role': "role"
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {

                $(".showDXPSplitterSecondGovdata").show();
                $(".dxpTaxonomyRepositories").show();
                $("#secondDxpSplitterData").html(response);

            }

        },
        error: function (e) {
            stopLoader();
            alert('Error: ' + e);

        }
    });
}
function showDXPTaxButtons() {
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'showTaxonomyRepositorySubData',
        data: {
            'moduleCode': "",
            'role': "role"
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                $(".dxpTaxonomyRepositories").show();
                $("#secondDxpSplitterData").html(response);

            }

        },
        error: function (e) {
            stopLoader();
            alert('Error: ' + e);

        }
    });
}
function showDXPGovButtons() {
    var resultObj = {};
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'GenericSearch',
        data: {
            'moduleCode': "",
            'role': "role"
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                resultObj = JSON.parse(response);
//                $(".mainThirdDxpSplitter").html('<div id="accordioncover" class="acrdn visionMaterialGeneric"></div>');
                $("#searchDefaultSplitter").show();
                $("#accordioncoverSplitter").html('<div id="accordioncover" class="acrdn visionMaterialGeneric"></div>');
                $("#accordioncover").html(resultObj['searchInfo']);
                $("#accordion").accordion(
                        {active: 0,
                            collapsible: true,
                            heightStyle: 'content', activate: function (event, ui) {

                            }}
                );
                $("#childAccordion").accordion(
                        {active: 0, collapsible: true,
                            heightStyle: 'content'}
                );
                getPersonalizationDataOpt('', 'P');

            }

        },
        error: function (e) {
            stopLoader();
            alert('Error: ' + e);

        }
    });
}
function getShowDxpSearchResults(typedValue, domainValue, roleId, gridId, sortFlag) {
    showLoader();
    showLoader();
//    var gridId = ""
    $("#intellisense").hide();
    firstPanelShowFlag = true;
//    var roleId = "";
    $('#defaultShowCards').hide();
    $('#dxpAnalyticsContent').css("display", "none");
    $('#dxpHomeContent').css("display", "block");

    var typedvalue = $(event.currentTarget).attr("data-typedvalue");
//    if (domainValue != null && domainValue == "PRODUCT") {
//        gridId = "DXP_DEFAULT_PRODUCT_GRID";
//        roleId = "MM_MANAGER";
//    } else {
//        gridId = "DXP_DEFAULT_SERVICE_GRID";
//        roleId = "SM_MANAGER";
//    }
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'showSearchDxpClassResults',
        data: {
            domainValue: domainValue,
            'gridId': gridId,
            'roleId': roleId
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            stopLoader();
            var resultObj = {};
//            resultObj = JSON.parse(response);
            var result = response['result'];
            resultObj = JSON.parse(result);
            gridConfig(resultObj, 0, [], "DEFAULT_HOME");
            $("#submenutabId" + domainValue).html("<i style='color:limegreen' class='fa fa-check fa-lg'></i>");
            $("#menutabId" + domainValue).css("background-color", "#e1eaf7");
        }
    });
}
function getShowDxpClassSearchResults(className, typedValue, abbr, def, conceptId, unspsc, recordgroup, domainValue) {
    showLoader();
    showLoader();
    $("#intellisense").hide();
    secondPanelShowFlag = true;
//    $('#fourthDxpSplitter').jqxSplitter('collapse');
    $(".searchResultsList").addClass('activeResult');
    $("#currentClass").val(className);
    $("#currentTypedValue").val(typedValue);
    try {
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", "");
        $("#dxp1TabsWithGrid").attr("data-filterGridisImport", "");
    } catch (e) {

    }
    var gridId = '';
    $("#currentDomain").val(domainValue);
    if (domainValue != null && domainValue != '' && domainValue != undefined
            && (domainValue == 'All' || domainValue == 'PRODUCT')) {
        gridId = "DXP_SEARCH_VIEW";
        $("#currentGridId").val(gridId);
    } else if (domainValue != null && domainValue != '' && domainValue != undefined
            && domainValue == 'SERVICE') {
        gridId = "DXP_SM_SEARCH_VIEW";
        $("#currentGridId").val(gridId);
    } else if (domainValue != null && domainValue != '' && domainValue != undefined
            && domainValue == 'VENDOR') {
//        $('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 30}]});
        gridId = "DXP_VM_SEARCH_VIEW";
        $("#currentGridId").val(gridId);
    }
    showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', 'Search', 'N');
    // showSelectedTabContent("viewGridTab");
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'showSearchDxpClassResults',
        data: {
            'typedValue': typedValue,
            'className': className,
            'gridId': gridId
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            stopLoader();
            var resultObj = {};
            resultObj = JSON.parse(response);
            resultObj['className'] = className;
            resultObj['typedValue'] = typedValue;
            var customizeToolbar = resultObj['customizeToolbar'];
            var checkBoxIds = resultObj['checkBoxIds'];
            $("#customizeToolbarData").val(customizeToolbar);
            $("#checkBoxIds").val(checkBoxIds);

            gridConfig(resultObj, 0, [], "dxp1Seconddiv");

        }
    });
}
function creationProcess(url, searchId) {
    var searchId = searchId.toLowerCase();
    searchId = searchId.replace(/^./, searchId => searchId.toUpperCase())
    $('#SearchResult').attr('placeholder', 'Search & ' + searchId);
    keySearch(event);
    $(".searchResultsDiv").hide();
}
function getSearchResults(typedValue, domainValue, sortFlag) {
    var searchValue = $("#secondSplitterSearchId").val();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'showSearchDxpResults',
        data: {
            'typedValue': typedValue,
            'domainValue': domainValue,
            'sortFlag': sortFlag,
            'searchValue': searchValue,
            'typeValueChange': 'Y'
        },
        traditional: true,
        cache: false,
        success: function (response) {
            $("#secondDxpSplitterData").html(response);
            $(".searchDXPCreate").hide();
        }
    });
}
function getDxpFilterResults(typedValue, domainValue, sortFlag) {
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'showFilterSearchDxpResults',
        data: {
            'typedValue': typedValue,
            'domainValue': domainValue,
            'sortFlag': sortFlag,
        },
        traditional: true,
        cache: false,
        success: function (response) {
//            $("#dxpFilterPopOver").show();
            $("#filterDxpResults").html(response);
            $('#dxpFilterPopOver').jqxPopover('open');
            if (resultFlag) {
                $("#dxpFilterPopOver").jqxPopover({
                    offset: {left: -50, top: 0},
                    arrowOffsetValue: 50,
                    title: "Filter Data",
                    showCloseButton: true,
                    selector: $("#Filter"),

                });
                $('#dxpFilterPopOver').jqxPopover('open');
                $("#filterDxpResults").html(response);
                resultFlag = false;

            }
            $(".dxpFilterSearchCheckClass").change(function (event)
            {
                var checkedValues = $(".dxpFilterSearchCheckClass:checked").map(function () {
                    return this.value;
                }).get().join(",");
                if (checkedValues != null && checkedValues != '' && checkedValues != undefined) {
                    getDxpFilterpopupResults(typedValue, domainValue, sortFlag, checkedValues);
                }
            });

//            $("#dxpFilterSearchCheckId").jqxCheckBox({ width: 120, height: 25 });
//              $("#dxpFilterPopOver").show();
//       $("#dxpFilterPopOver").css("display","block",'!important');
        }
    });
}
function getDxpFilterpopupResults(typedValue, domainValue, sortFlag, checkedValues) {
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'showFilterpopoverDxpResults',
        data: {
            'typedValue': typedValue,
            'domainValue': domainValue,
            'sortFlag': sortFlag,
            'checkedValues': checkedValues
        },
        traditional: true,
        cache: false,
        success: function (response) {
            $("#secondDxpSplitterData").html(response);
            $(".searchDXPCreate").hide();
        }
    });
}
function getFirstPanelShow(event) {
    if (firstPanelShowFlag) {
        $('#firstDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 75}]});
        $('#fourthDxpSplitter').jqxSplitter('collapse');
        $('.decendingFirstOrder').show();
        $('.mainBookMark').hide();
        $('.searchIconsList').show();
        $('.searchFirstResultsList').show();
        $('#contentDXP_SEARCH_VIEW').show();
        $('#jqxScrollThumbhorizontalScrollBarDXP_SEARCH_VIEW').show();
        $('#pagerDXP_SEARCH_VIEW').show();
        firstPanelShowFlag = false;
    } else {
        $('#firstDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 30}]});
//        $('#fourthDxpSplitter').jqxSplitter('collapse');
        $('.decendingFirstOrder').hide();
        $('.mainBookMark').show();
        $('.searchIconsList').show();
        $('.searchFirstResultsList').hide();
        firstPanelShowFlag = true;
    }

}
function getSecondPanelShow(event) {
    if (secondPanelShowFlag) {
        $('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 270}]});
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
    } else {
        $('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
//        $('#fourthDxpSplitter').jqxSplitter('collapse');
        $('#fourthDxpSplitter').show();
        $('.searchDXPCreate').hide();
        $('.decendingFirstOrder').hide();
        $('.searchIconsList').show();
        $('.searchResultsList activeResult').hide();
        $('.searchResultMaterialResults').hide();
//        $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: "100%"}]});
        secondPanelShowFlag = true;
    }
}
function showThirdPanel(event) {
    reqType = $("#dxpAdavanceSearchOptions").val();
    //21122added resizing for the resitory search too

    if (thirdPanelShowFlag) {
        //19122
        //hiding all 4thpanel elements except the panel button(3 dots)
        $("#formSplitterDotsId").show();
        $(".formDxpDuplicates").hide();
        $(".visionRegistartionGeneric").hide();
        //$("#fourthDxpSplitter").prev().css('left', '1550px');

        //20122ThirdPanelOpen
        $('#thirdDxpSplitter').show();
//        $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '100%'}]});/*19122*/
//        $('#fourthDxpSplitter').jqxSplitter('collapse');contentDXP_SEARCH_VIEW
        $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: "100%"}]});

        if (reqType == 'PR') {
            $('#contentDXP_REP_SEARCH_VIEW').show();
            $('.repdecendingOrder').show();
            $('.repdecendingOrder').show();

            $('#jqxScrollThumbhorizontalScrollBarDXP_REP_SEARCH_VIEW').show();
            $('#pagerDXP_REP_SEARCH_VIEW').show();

        }
        $('#contentDXP_SEARCH_VIEW').show();
        $('.decendingOrder').show();
        $('.decendingOrder').show();

        $('#jqxScrollThumbhorizontalScrollBarDXP_SEARCH_VIEW').show();
        $('#pagerDXP_SEARCH_VIEW').show();
        $('.searchIconsList').show();
        setTimeout(resizable, 500);
        thirdPanelShowFlag = false;
        formPanelShowFlag = true;
    }
    //ThirdPanelClose


    else {
//        /*24122 MAIN CHANGE*/$('#thirdDxpSplitter').jqxSplitter('collapse');
        $("#toolbarDXP_SEARCH_VIEW").show();
        $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '100%'}]});
        if (reqType == 'PR') {
            $("#contentDXP_REP_SEARCH_VIEW").hide();
            $(".repSearchResultsList").hide();
            $('#pagerDXP_REP_SEARCH_VIEW').hide();
            $('.repdecendingFirstOrder').hide();
            $('#jqxScrollThumbhorizontalScrollBarDXP_REP_SEARCH_VIEW').hide();
        }
        //$('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: "100%"}]});
        $('#contentDXP_SEARCH_VIEW').hide();
        $('#pagerDXP_SEARCH_VIEW').hide();
        $('.decendingFirstOrder').hide();
        $('.searchIconsList').show();
        $('#jqxScrollThumbhorizontalScrollBarDXP_SEARCH_VIEW').hide();
        thirdPanelShowFlag = true;
        formPanelShowFlag = false;
        //20122FourthPanelShow
        $(".formDxpDuplicates").show();
        $(".visionRegistartionGeneric").show();
    }


}
function advancedSearches(event) {
    if ($('.ui-widget-overlay').length > 0) {
        return;
    }
    stopLoader();

    $(".dxpLoginHeader .leftNavList").css("width", "26%");
    $(".searchMainWrap .has-search input.form-control").css("border-radius", "0");
    if (!($('#selectdomainListId').length < 0)) {
        let domainData = $("#selectdomainListId").find("div").attr('data-filter-value');
        if (domainData != null && domainData != domainData) {
            return false;
        } else {
            if ($('#selectFilter').is(':visible')) {
                return false;
            }
        }
        $("#filterDownArrowIconID").show();
//        clearTextSearch();
        $(".clearicon").addClass("onlyKeysearch");
        var domainparam = $('#SelectedValue').val();
//        if (!(domainparam != null && domainparam != '' && domainparam != undefined))
//        {
//            domainparam = 'PRODUCT:FMM_MGR_MATERIAL_SEARCH:MM_MANAGER';
//        }
        if (domainparam != null && domainparam != '' && domainparam != undefined)
        {
            var dataarr = domainparam.split(":");
            var domainValue = dataarr[0];
            var searchid = dataarr[1];
            var roleId = dataarr[2];
        }


        $.ajax({
            datatype: "json",
            type: "POST",
            url: 'advancedSearches',
            data: {
                'domainValue': domainValue,
                'searchid': searchid,
                'roleId': roleId
            },
            traditional: true,
            cache: false,
            success: function (response) {
//            keySearch(event);
                stopLoader();
                var result = response['result'];
                var dropdownobj = response['dropdownobj'];
                var selectFilter = dropdownobj['selecttype'];
                if (selectFilter != null && selectFilter != '' && selectFilter != undefined)
                {
                    selectFilter = JSON.parse(selectFilter);

                }
                $("#selectFilter").remove();
                $(".selectDropDown").append("<div class='form-group' id='selectFilter'></div>");
                var domainlist = dropdownobj['domainlist'];
                var domaincount = domainlist.length;
                $("#selectFilter").jqxDropDownList({
                    source: selectFilter,
                    selectedIndex: 0,
                    width: '250',
                    height: '35px'
                });
                if (domaincount <= 3) {
                    var height = domaincount * 35 + 'px';
                    $("#listBoxselectFilter").css("height", "" + height + "");
                }

                $(".dxpLoginHeader .massSearchListItem").css("margin-right", "inherit");
                $(".searchbutton").removeClass("searchbutton");
                $("#rightsearchicon").addClass("replacedSearchButton");
                $(".searchResultsDiv").show();
                $(".backbutton").show();
                $(".selectDropDown").show();
//            $(".visualizationDashboardView").hide();
                $("#filterDownArrowIconID").show();
                $('.ui-autocomplete').html('');
                $("#filterDownArrowIconID").html(result);
                $("#filterDownArrowIconID").show();
                $("#dxpAdavanceSearchOptions").show();
                $("#intellisense").hide();
//                $(".has-search").css("width","550px");
                $(".has-search").addClass("expand-search");
                $(".searchMainWrap .has-search input.form-control").css("background-color", "#fff");
                $(".dxpLoginHeader .searchMainWrap").css("border-radius", "inherit");

//            $("#dxpAdavanceSearchOptions").focus("");

//            $("#dxpAdavanceSearchOptions").click(); 
//            $(".searchDXPCreate").hide(); 

                $('#selectFilter').on('change', function (event)
                {
                    var div = event.currentTarget['children'][0];
                    var childDiv = $(div).find("#dropdownlistWrapperselectFilter");
                    var value = $(childDiv).children("div:first-child").children("div:first-child").attr("data-filter-value");
                    alert(value);

                    var domainparam = value;
                    var dataarr = domainparam.split(":");
                    var domainValue = dataarr[1];
                    var searchid = dataarr[0];
                    var roleId = dataarr[2];
                    $.ajax({
                        datatype: "json",
                        type: "POST",
                        url: 'advancedSearches',
                        data: {
                            'domainValue': domainValue,
                            'searchid': searchid,
                            'roleId': roleId
                        },
                        traditional: true,
                        cache: false,
                        success: function (response) {
//            keySearch(event);
                            stopLoader();
                            $("#filterDownArrowIconID").html(response['result']);
                            $("#intellisense").hide();
                            $("#dxpAdavanceSearchOptions").focus("");
                        }
                    });


                });
            }
        });
    }
}
function getParametricResults() {
    var domainValue = $('#SelectedValue').val();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getParametricForm',
        data: {
            'domainValue': domainValue
        },
        traditional: true,
        cache: false,
        success: function (response) {
            $("#searchMainDxpSplitter").show();
            $("#searchDxpSplitter").html(response);
        }
    });
}
function getPersonalizationDataOpt(SearchId, searchType) {
    console.log("searchType:::" + searchType);
    $("#searchId").val(SearchId);
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    $.ajax({
        type: "post",
        traditional: true,
        cache: false,
        url: "getPersonalizationData",
        data: {
            searchType: searchType,
            searchName: $("#savedSearchName").val()
        },
        success: function (response) {
            stopLoader();
//            console.log("response:::" + response);
            if (response != null) {
                var typesCheckBox = {};
                $("#personalize_types :input").each(function () {
                    var textid = $(this).attr("id");
                    var type = $(this).attr("type");
                    var textval = $(this).val();
                    if (type != null && type == 'checkbox') {
                        if ($("#" + textid).is(':checked')) {
                            typesCheckBox[textid] = "Y";
                        }
                    }
                });
                if (fioriThemeCheck) {
                    showMesg(response);
                } else {
                    $("#settings_panel").html(response);
                }
                if (typesCheckBox != null) {
                    for (var key in typesCheckBox) {
                        $("#" + key).attr('checked', true);
                    }
                }
                $('.visionSearchPersonalise table').each(function () {
                    if ($(this).find('thead').length > 0 && $(this).find('th').length > 0) {
                        // Clone <thead>
                        var $w = $(window),
                                $t = $(this),
                                $thead = $t.find('thead').clone(),
                                $col = $t.find('thead, tbody').clone();
                        // Add class, remove margins, reset width and wrap table
                        $t
                                .addClass('sticky-enabled')
                                .css({
                                    margin: 0,
                                    width: '100%'
                                }).wrap('<div class="sticky-wrap" />');
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
                                                top: $stickyWrap.scrollTop()
                                            });
//                                $(".visionHeaderMain").css("position", "absolute");
                                        } else {
                                            // When top of wrapping parent is in view
                                            $stickyHead.add($stickyInsct).css({
                                                opacity: 0,
                                                top: 0
                                            });
//                                $(".visionHeaderMain").css("position", "fixed");
                                        }
                                    } else {
                                        // If it is not overflowing (basic layout)
                                        // Position sticky header based on viewport scrollTop
                                        if ($w.scrollTop() > $t.offset().top && $w.scrollTop() < $t.offset().top + $t.outerHeight() - allowance) {
                                            // When top of viewport is in the table itself
                                            $stickyHead.add($stickyInsct).css({
                                                opacity: 1,
                                                top: $w.scrollTop() - $t.offset().top
                                            });
//                                $(".visionHeaderMain").css("position", "absolute");

                                        } else {
                                            // When top of viewport is above or below table
                                            $stickyHead.add($stickyInsct).css({
                                                opacity: 0,
                                                top: 0
                                            });
//                                $(".visionHeaderMain").css("position", "fixed");

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
//                        $t.parent('.sticky-wrap').scroll($.throttle(250, function () {
//                            repositionStickyHead();
//                            repositionStickyCol();
//                        }));
//                        $w
//                                .load(setWidths)
//                                .resize($.debounce(250, function () {
//                                    setWidths();
//                                    repositionStickyHead();
//                                    repositionStickyCol();
//                                }))
//                                .scroll($.throttle(250, repositionStickyHead));
                    }
                });
            }
        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}
function slideSettings() {
//  $("#settings_panel").toggle(100)
    $('#settings_panel').toggle('slide', {direction: 'right'}, 500);
    $("#personalizeid").toggleClass("ui-icon-triangle-1-s");
    var slideSettingsInd = $("#accordion").attr("data-slidesettingsind");
//    if (slideSettingsInd == 'N') {
//         $("#accordion").attr("data-slidesettingsind","Y");
//        getPersonalizationData();
//    }

    //$('#showcriteria').toggle();
}
function toggleTabs(tabid) {
    console.log("toggling " + tabid);
    $("#" + tabid).toggle();
    $("#" + tabid).next().hide();
}
function handleClick(typeOfCategory, searchType) {
    showLoader();
    console.log("typeOfCategory:::" + typeOfCategory + "::::searchType:::" + searchType);
    $("#navigationIcons").hide();
    $("#categorytextfield").hide();
    $("#categorytextfield").val('');
    $(".clear_category_input").hide();
    $("#categorysearchresult").hide();
    if (typeOfCategory != null && typeOfCategory != '') {
        $.ajax({
            type: "POST",
            url: 'getCategoryData',
            data: {
                'typeOfCategory': typeOfCategory,
                'searchType': searchType
            },
            traditional: true, cache: false,
            success: function (response) {
//                console.log('Response::' + response);
                if (response != '') {
                    categoryAutoComplete();
                    var categoryObj = JSON.parse(response);
                    $("#categorysrchnvgn").html(categoryObj['breadCrumb']);
                    if (typeOfCategory == 'UNSPSC') {
                        $("#disciplineTypes").html(categoryObj['unspscStr']);

                    } else {
                        $("#disciplineTypes").html(categoryObj['disciplineTypes']);
                        $(".folder-cover").click(function (event) {
                            //  e.preventDefault();
                            console.log("content::" + $("#" + $(this).attr("id")).attr("data-content"));
                            var discipline = $("#" + $(this).attr("id")).attr("data-content").replace(/_/g, " ");
                            console.log('$(".discipline-heading").text()::' + $(".discipline-heading").text());
                            discplineTypes(discipline, typeOfCategory, 'N');
                            $(this).off(event);
                        });
                    }

                    $("#categorysrchnvgn").show();

                }
                stopLoader();
            },
            error: function (e) {
                sessionTimeout(e);
                stopLoader();
            }

        });
    }

}
function discplineTypes(discipline, typeOfCategory, isnested) {
    showLoader();
    console.log("discipline:::" + discipline + ":::typeOfCategory:::" + typeOfCategory + ":::isnested:::" + isnested);
    $("#navigationIcons").hide();
    $("#categorytextfield").hide();
    $("#categorytextfield").val('');
    $(".clear_category_input").hide();
    $("#categorysearchresult").hide();
    if (discipline != null && discipline != '') {
        $.ajax({
            type: "POST",
            url: 'getDiscplineTypes',
            data: {
                'typeOfCategory': typeOfCategory,
                'discipline': discipline,
                isNested: isnested
            },
            traditional: true, cache: false,
            success: function (response) {
//                console.log('Response::' + response);
                if (response != '') {
                    var categoryObj = JSON.parse(response);
                    $("#categorysrchnvgn").html(categoryObj['breadCrumb']);
                    $("#disciplineTypes").html(categoryObj['disciplineTypes']);
                    categoryAutoComplete();
//                    data-totalrecords='0' data-startindex='0'

                }
                stopLoader();
            },
            error: function (e) {
                stopLoader();
                sessionTimeout(e);
            }

        });
    }

}
function fetchClassbyDiscipline(typeOfCategory, discipline, subDiscipline, startindex, endindex) {
    console.log("subDiscipline:::" + subDiscipline + "::::discipline:::" + discipline + ":::typeOfCategory:::" + typeOfCategory + ":::startindex:::" + startindex + ":::endindex:" + endindex);
    showLoader();
    $('#categorytextfieldval').val(typeOfCategory);
    $('#disciplinetextfieldval').val(discipline);
    $('#subDisciplinetextfieldval').val(subDiscipline);
    $("#categorytextfield").val('');
    if (discipline != null && discipline != '') {
        $.ajax({
            type: "POST",
            url: 'getClassByDiscipline',
            data: {
                'typeOfCategory': typeOfCategory,
                'discipline': discipline,
                subDiscipline: subDiscipline,
                startIndex: startindex,
                endIndex: endindex
            },
            traditional: true, cache: false,
            success: function (response) {
                if (response != '') {
                    var accdTabs = "<ul class=\"accordion\" >"
                            + "<li>"
                            + "<h5 class=\"accordion-trigger\" onclick=\"javascript:showHideResults()\">Search Results</h5>"
                            + "</li>"
                            + "<div id='visionClassficationSearchIds' class=\"accordion-Search-contents\" data-searchresults=\"1\" ></div>"
                            + "<li>"
                            + "<h5 class=\"accordion-trigger\" onclick=\"javascript:fetchTemplateResults('I')\">Template Results</h5>"
                            + "</li>"
                            + "<div id='visionClassficationTemplateIds' class=\"accordion-Template-contents\" data-templateresults=\"2\"></div>"
                            + "</ul>";

                    $("#dxp1Seconddiv").append(accdTabs);
                    $('.accordion').on('click', '.accordion-trigger', function (e) {
                        e.preventDefault();
                        $('.accordion-contents:visible').slideUp(300);
                        $('.accordion-contents').show();
                        $(this)
                                .next('.accordion-contents')
                                .not(':animated')
                                .slideToggle(300);
                    });
                    var categoryObj = JSON.parse(response);
                    $("#categorysrchnvgn").html(categoryObj['breadCrumb']);
                    $("#disciplineTypes").html(categoryObj['disciplineTypes']);

                    if (parseInt(categoryObj['startIndex']) == 0) {
                        $("#navigationIcons").attr("data-totalrecords", categoryObj['totalCount']);
                        $("#navigationIcons").html(categoryObj['navigationIcons']);
                    } else {
                        $("#navigationIcons").attr("data-startindex", categoryObj['startIndex']);
                        $("#navigationIcons").attr("data-endindex", parseInt(categoryObj['startIndex']) + 9);
                        if (parseInt(categoryObj['startIndex']) + 9 > parseInt(categoryObj['totalCount']))
                        {
                            $("#categoryMinIndex").html(parseInt(categoryObj['startIndex']));
                            $("#categoryMaxIndex").html(parseInt(categoryObj['totalCount']));
                        } else
                        {
                            $("#categoryMinIndex").html(parseInt(categoryObj['startIndex']));
                            $("#categoryMaxIndex").html(parseInt(categoryObj['startIndex']) + 9);
                        }
                    }
                    $("#navigationIcons").show();
                    $("#categorytextautocomplete").show();
                    $("#categorysearchmarkbox").remove();
                    $(".clear_category_input").hide();
                    $("#categorytextautocompleteBox").html(categoryObj['searchBox']);
                    $("#categorytextautocomplete").append(categoryObj['textBox']);
                    $("#categorytextfield").show();
                    categoryAutoComplete();
                }
                stopLoader();
            },
            error: function (e) {
                stopLoader();
                sessionTimeout(e);
            }

        });
    }
}
function getNextRecords(typeOfCategory, discipline, subDiscipline, domain) {
    showLoader();
    if (parseInt($("#navigationIcons").attr('data-endindex')) < parseInt($("#navigationIcons").attr('data-totalrecords')))
    {
        fetchClassbyDiscipline(typeOfCategory, discipline, subDiscipline,
                parseInt($("#navigationIcons").attr('data-endindex')) + 1,
                parseInt($("#navigationIcons").attr('data-endindex')) + 10
                );

    }
}
function getPrevRecords(typeOfCategory, discipline, subDiscipline, domain) {
    showLoader();
    alert("Entered Prev records");
    if (parseInt($("#navigationIcons").attr('data-startindex')) > 1) {
        fetchClassbyDiscipline(typeOfCategory, discipline, subDiscipline,
                parseInt($("#navigationIcons").attr('data-startindex')) - 10,
                parseInt($("#navigationIcons").attr('data-startindex')) - 1
                );

    }
}
function categoryTextSearchResults(classTerm)
{
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }
    showLoader();
    var ImageType = $("#ImageType").val();
    console.log("ImageType::::;" + ImageType);
    var paramArray = [];
    var operator = "";
    var i = 0;
    var count = 0;
    var paramObj = {};
    paramObj.datatype = "string";
    paramObj.column = "TERM";
    paramObj.rangeflag = "N";
    paramObj.minvalue = "";
    paramObj.maxvalue = "";
    paramObj.value = classTerm;
    if (i > 1) {
        paramObj.symbol = "In";
        paramObj.operator = "IN";
    } else {
        paramObj.symbol = "=";
        paramObj.operator = "EQUALS";
    }
    paramObj.staged = "N";
    paramArray.push(paramObj);

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
    paramArray.push(paramObj);

    console.log("classTerm::::" + classTerm + ":::count:::" + count);
    searchResults('I', '', paramArray, "");

}
function categoryClassSearch(id, selectionType, cattype, domain) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }
    showLoader();
    console.log("selectionType::::" + selectionType);
    var ImageType = $("#ImageType").val();
    console.log("ImageType::::;" + ImageType);
    var paramArray = [];
    var classTerm = "";
    var operator = "";
    var i = 0;
    var count = 0;
    //data-cattype
    if (selectionType == 'M') {
        // count = 1;
        if (!$("#disciplineSubTypes").find("#searchResults").length) {
            $("#disciplineTypes").hide();
            if (!$("#disciplineSubTypes").is(":visible")) {
                $("#disciplineSubTypes").show();
            }
            $("#disciplineSubTypes").append('<div id="searchResults"></div>');
        } else {
            if (!$("#disciplineSubTypes").is(":visible")) {
                $("#disciplineSubTypes").show();
            }
            $("#disciplineTypes").hide();
            $("#searchResults").remove();
            $("#disciplineSubTypes").append('<div id="searchResults"></div>');
        }
        $('#categorySearchpanel input:checked').each(function () {

            classTerm += $(this).attr('data-content');
            //   selected.push($(this).attr('name'));
            classTerm += "#";
            cattype = $(this).attr('data-cattype');
            //var countId = "disciplinetype"+i+"img";
            count += parseInt($(this).attr('data-count'));
            i++;
        });


    } else {
        classTerm = $("#" + id).attr('data-content');
        count = $("#" + id).attr('data-count'); //data-count
    }

    var paramObj = {};
    paramObj.datatype = "string";
    paramObj.column = "TERM";
    paramObj.rangeflag = "N";
    paramObj.minvalue = "";
    paramObj.maxvalue = "";
    paramObj.value = classTerm;
    if (i > 1) {
        paramObj.symbol = "In";
        paramObj.operator = "IN";
    } else {
        paramObj.symbol = "=";
        paramObj.operator = "EQUALS";
    }
    paramObj.staged = "N";
    paramArray.push(paramObj);

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
    paramArray.push(paramObj);
    $("#result").val(classTerm);
    $("#currentSearchData").val(JSON.stringify(paramArray));
    console.log("classTerm::::" + classTerm + ":::count:::" + count);
    if (parseInt(count) != 0) {
        searchResults('I', '', paramArray, cattype);
    } else if (count == 0 && classTerm != '') {
        stopLoader();
        var message = labelObject['No Records found'] != null ? labelObject['No Records found'] : 'No Records are found in this basket';
        var dialogSplitMessage = dialogSplitIconText(message, "Y");
        $("#dialog1").html(dialogSplitMessage);
        $("#dialog1").dialog({resizable: false,
            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
            modal: true,
            height: 'auto',
            minHeight: 'auto',
            width: 300,
            fluid: true,
            buttons: {
                Ok: function () {
                    $("#dialog1").empty();
                    $("#dialog1").dialog('close');
//                    if (parseInt($("#accordion").attr("data-templateresults")) != 0) {
//                        $("#accordion").accordion({active: parseInt($("#accordion").attr("data-templateresults"))});
                    //showLoader();

                    $("#visionClassficationSearchIds").hide();
                    fetchTemplateResults("I", paramArray, cattype);
                    $(this).html("");
                    try {
                        $(this).dialog("destroy");
                    } catch (e) {

                    }
                    try {
                        $(this).dialog("close");
                    } catch (e) {

                    }
                    //  stopLoader();
//                    }
                }
            }
        });
    } else if (classTerm == '') {
        stopLoader();
        var message = labelObject['Please check Any item on the baskets'] != null ? labelObject['Please check Any item on the baskets'] : 'Please check Any item on the baskets';
        var dialogSplitMessage = dialogSplitIconText(message, "Y");
        $("#dialog1").html(dialogSplitMessage);
        $("#dialog1").dialog({resizable: false,
            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
            modal: true,
            height: 'auto',
            minHeight: 'auto',
            width: 300,
            fluid: true,
            buttons: {
                Ok: function () {
                    $(this).html("");
                    try {
                        $(this).dialog("destroy");
                    } catch (e) {

                    }
                    try {
                        $(this).dialog("close");
                    } catch (e) {

                    }
                }

            }
        });

    }

}
function getunspscByHighLevel(unspscCode, nvgnFlag) {
    showLoader();
    console.log("unspscCode:::" + unspscCode);
    if (!$("#disciplineTypes").is(":visible")) {
        $("#disciplineTypes").show();
    }
    $("#disciplineSubTypes").hide();
    $.ajax({
        type: "post",
        traditional: true,
        cache: false,
        url: "unspscCategories",
        data: {
            highLevelCode: unspscCode,
            unspschighcode: $("#categorysrchnvgn").attr("data-unspschighcode")
        },
        success: function (response) {
            console.log("response:::" + response);
            if (response != null && response != '') {
                var categoryObj = JSON.parse(response);
                //$("#categorysrchnvgn").html(categoryObj['breadCrumb']);
                $("#disciplineTypes").html(categoryObj['unspscStr']);

                if (nvgnFlag) {
                    $("#categorysrchnvgn ul")
                            .append("<li class='uSeparator'><span></span></li>"
                                    + "<li>"
                                    + "<a href='#'  "
                                    + "onclick=getunspscByHighLevel('" + unspscCode + "'," + false + ")>"
                                    + unspscCode + "</a>"
                                    + "</li>");
                } else {
                    var deleteflag = false;
                    $("#categorysrchnvgn ul li").each(function () {
                        if (deleteflag) {
                            $(this).remove();
                        } else {
                            if ($(this).find('a').text() == unspscCode)
                            {
                                deleteflag = true;

                            }
                        }
                    });
                }

            }

            stopLoader();
        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }

    });
}
function resetCategorySearch() {
    $("#categorytextfield").hide();
    $("#categorytextautocomplete").hide();
    $(".clear_category_input").hide();
    $('input[name=ImageType]').attr('checked', false);
    $("#categorysrchnvgn").hide();
    $("#navigationIcons").hide();
    $("#disciplineTypes").empty();
    $("#disciplineSubTypes").attr('data-category', "");
    $("#disciplineSubTypes").attr('data-subcategory', "");
    $("#disciplineSubTypes").empty();

}
function fetchMaterialDataAfterEnter(event, typeOfCategory, discipline, subDiscipline, startIndex, endIndex)
{
    if (event.which == 13) {

        $(".ui-autocomplete").css("display", "none");
        categoryTextSearchResult(typeOfCategory, discipline, subDiscipline, startIndex, endIndex);
    }
}
function categoryTextSearchResult(typeOfCategory, discipline, subDiscipline, startindex, endindex)
{
    if (startindex != null && startindex != '' && startindex != undefined && startindex == 1) {
        startindex = 0;
    }
    var searchTerm = $("#categorytextfield").val();
    showLoader();
    if (searchTerm != null && searchTerm != '' && searchTerm != undefined) {
        $.ajax({
            type: "POST",
            url: 'getClassByDiscipline',
            data: {
                'typeOfCategory': typeOfCategory,
                'discipline': discipline,
                subDiscipline: subDiscipline,
                startIndex: startindex,
                endIndex: endindex,
                searchTerm: searchTerm
            },
            traditional: true, cache: false,
            success: function (response) {
                if (response != '') {
                    var categoryObj = JSON.parse(response);
                    $("#categorysrchnvgn").html(categoryObj['breadCrumb']);
                    $("#disciplineTypes").html(categoryObj['disciplineTypes']);
                    if (parseInt(categoryObj['startIndex']) == 0) {
                        $("#navigationIcons").attr("data-totalrecords", categoryObj['totalCount']);
                        $("#navigationIcons").html(categoryObj['navigationIcons']);
                    } else {
                        $("#navigationIcons").attr("data-startindex", categoryObj['startIndex']);
                        $("#navigationIcons").attr("data-endindex", parseInt(categoryObj['startIndex']) + 9);
                        if (parseInt(categoryObj['startIndex']) + 9 > parseInt(categoryObj['totalCount']))
                        {
                            $("#categoryMinIndex").html(parseInt(categoryObj['startIndex']));
                            $("#categoryMaxIndex").html(parseInt(categoryObj['totalCount']));
                        } else
                        {
                            $("#categoryMinIndex").html(parseInt(categoryObj['startIndex']));
                            $("#categoryMaxIndex").html(parseInt(categoryObj['startIndex']) + 9);
                        }
                    }
                    $("#categorytextfield").show();
                    $("#categorysearchmarkbox").remove();
//                    $("#categorytextautocompleteBox").append(categoryObj['searchBox']);
                    $("#categorytextautocompleteBox").html(categoryObj['searchBox']);
                    $("#categorytextautocomplete").append(categoryObj['textBox']);
                    $("#categorytextfield").show();

                    $(".clear_category_input").show();
                    $("#categorytextfield").val(searchTerm);
                    categoryAutoComplete();
                }
                stopLoader();
            },
            error: function (e) {
                stopLoader();
                sessionTimeout(e);
            }

        });
    }
}
function navigateCatalogueButton() {

}
function PopulateCatalogForm(catCopy, panelId, formId) {
    //var attrType = "";
    if (!(formId != null && formId != '')) {
        formId = "";
    }
    var tabName = "";
    if (formId == 'Y') {
        tabName = "searchResults";
    } else {
        tabName = "searchResults";
//        tabName = "DXP_REP_SEARCH_VIEW";
    }
    var catalogArray = [];
    var selectedrowindexes = $('#' + tabName).jqxGrid('selectedrowindexes');
    console.log(selectedrowindexes.length);

    if (selectedrowindexes.length != 0) {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + tabName).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                    totalRowIndex = parseInt(pagesize);
                }

            }
        }
        for (var i = 0; i < totalRowIndex; i++)
        {
            var data = $('#' + tabName).jqxGrid('getrowdata', selectedrowindexes[i]);
            catalogArray.push(data);

        }
        $.ajax({
            type: "POST",
            url: 'getcatalogformdata',
            data: {
                'data': JSON.stringify(catalogArray),
                'gridId': catCopy,
                'formId': formId
            },

            success: function (response) {

                var resultstring = response.updateResultString;
                // var hidden fields
                var message = response.message;
                if (message != null && message != "") {
                    var dialogSplitMessage = dialogSplitIconText(message, "Y");
                    var modalObj = {
                        title: 'Message',
                        body: dialogSplitMessage
                    };
                    var buttonArray = [
                        {
                            text: 'Ok',
                            click: function () {
                                $("#searchResults").jqxGrid('clearSelection');
                            },
                            text: 'Close',
                            click: function () {
                                stopLoader();
                            },
                            isCloseButton: true
                        }
                    ];
                    modalObj['buttons'] = buttonArray;
                    createModal("dataDxpSplitterValue", modalObj);
                    $(".modal-dialog").addClass("opacity-animate3");

                } else {
                    $("#addCgetShowDxpRepClassSearchResultsatalogue").addClass("addToCatalogue");
                    var modalObj = {
                        title: 'Catalog',
                        body: resultstring
                    };
                    var buttonArray = [
                        {
                            text: 'Process',
                            click: function () {
                                Process(catCopy, catalogArray, panelId, formId);
                            },
//                            isCloseButton: true
                        }
                    ];
                    modalObj['buttons'] = buttonArray;
                    createModal("dataDxpSplitterValue", modalObj);
                    $(".modal-dialog").addClass("modal-xl opacity-animate3 catalogFormTemplate");
                    $("#RECORD_GROUP").val('789654');
                }
            },
            error: function (e) {
                sessionTimeout(e);
            }
        });
    } else {
        var modalObj = {
            title: 'Message',
            body: 'Please select an option to Process'
        };
        var buttonArray = [
            {
                text: 'Ok',
                click: function () {
                },
                isCloseButton: true
            }
        ];
        modalObj['buttons'] = buttonArray;
        createModal("dataDxpSplitterValue", modalObj);
        $(".modal-dialog").css("width", "500px");
        $(".modal-dialog").addClass("opacity-animate3");
    }

}
function Process(catCopy, catalogArray, panelId, formId) {
    var resultArray = registerValidation();
    if (resultArray != null && Object.keys(resultArray).length == 0) {
        $(".allErrors").hide();
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {
            labelObject = [];
        }
        var baskettype = $("#baskettypehid").val();
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
        basicData['baskettype'] = 'New Registrations';
        basicData['controlType'] = 'CatalogRegister';
        basicData['baskettypehid'] = 'New Registrations';
        basicData['objectid'] = formId;
        basicData['panelId'] = panelId;
        basicData['gridId'] = catCopy;
        showLoader();
        $.ajax({
            type: "POST",
            url: 'addToCatalogue',
            data: {
                'data': JSON.stringify(catalogArray),
                'basicData': JSON.stringify(basicData),
                'PANEL_ID': panelId,
                'GRID_ID': catCopy,
                'formId': formId,
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                console.log("success" + response);
                var jsonObj = JSON.parse(response);
                var message = jsonObj.message;
                var flag = jsonObj.messageFlag;
                var dialogSplitMessage = "";
                if (message != null && message.indexOf("<table") > -1) {
                    dialogSplitMessage = message;
                } else {
                    dialogSplitMessage = dialogSplitIconText(message, flag);
                }
                var modalObj = {
                    title: 'Message',
                    body: dialogSplitMessage
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        click: function () {
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
//                $(".modal-dialog").css("width", "500px");
                $("#dataDxpSplitterValue .modal-dialog").addClass("cataLogTableDataPopup");
                $("#addCatalogue").html(dialogSplitMessage);
            },
            error: function (e) {
                stopLoader();
                var modalObj = {
                    title: 'Message',
                    body: 'Unable to catalog item'
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        click: function () {
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
                sessionTimeout(e);
            }

        });
    } else {
        for (var textIdKey in resultArray) {
            $("#dis" + textIdKey).html(resultArray[textIdKey]);
            $("#dis" + textIdKey).show();


        }
    }


}
function getFormSplitterClose(event) {
    $('#thirdDxpSplitter').show();
    $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '100%'}]});
    $("#fourthDxpSplitter").hide();
}
function resizable() {
    reqType = $("#dxpAdavanceSearchOptions").val();
    var currentGridId = $("#currentGridId").val();
//    $("#thirdDxpSplitter").jqxSplitter('expand');
    if (reqType == 'PR') {
        $("#DXP_REP_SEARCH_VIEW").css('width', '100%');
        $("#contentDXP_REP_SEARCH_VIEW").css('width', '100%');
        $("#contentDXP_SEARCH_VIEW").css('width', '100%');
        // $("#contentDXP_SEARCH_VIEW").next().css('width','100%'); 
        $("#contentDXP_REP_SEARCH_VIEW").first().css('width', '100%');
        //$("#contentDXP_SEARCH_VIEW::nth-child(2)").css('width','100%'); 
        $("#toolbarDXP_REP_SEARCH_VIEW").css('width', '100%');
        $("#contenttableDXP_REP_SEARCH_VIEW").css('width', '100%');
        $("#jqxScrollWrapverticalScrollBarDXP_REP_SEARCH_VIEW").hide();
        $("#pagerDXP_REP_SEARCH_VIEW").css('width', '100%');
        $("#columntableDXP_REP_SEARCH_VIEW").parent().css('width', '100%');
        $("#columntableDXP_REP_SEARCH_VIEW").css('width', '100%');
    } else {
        $("#" + currentGridId).css('width', '100%');
        $("#content" + currentGridId).css('width', '100%');
        // $("#contentDXP_SEARCH_VIEW").next().css('width','100%'); 
        $("#content" + currentGridId).first().css('width', '100%');
        //$("#contentDXP_SEARCH_VIEW::nth-child(2)").css('width','100%'); 
        $("#toolbar" + currentGridId).css('width', '100%');
        $("#contenttable" + currentGridId).css('width', '100%');
        //31122$("#jqxScrollWrapverticalScrollBarDXP_SEARCH_VIEW").hide();
        $("#pager" + currentGridId).css('width', '100%');
        $("#columntable" + currentGridId).parent().css('width', '100%');
        $("#columntable" + currentGridId).css('width', '100%');
    }
}
function dxpDetailViewData(industry) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'getIndustryClasses',
        data: {
            'industry': industry,
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            var modalObj = {
                title: 'Industry Info',
                body: response
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
            createModal("showExtendPdfTableData", modalObj);
            $(".modal-dialog").addClass("modal-xl opacity-animate3");
        }
    });

}
function ajaxStartAttachments() {
    $("#Loader").css("opacity", "0.99");
    $("#Loader").css("display", "block");
    $("body").css("pointer-events", "none");
}
function ajaxStopAttachments() {

    $("#Loader").css("display", "none");
    $("body").css("pointer-events", "auto");
}
function getShowDxpServiceClassSearchResults(className, typedValue, serviceCategory,
        subCategory, uom, recordGroup, sacCode, conceptId, domainValue) {
    showLoader();
    $("#intellisense").hide();
    $("#thirdDxpSplitter").val('');
    $("#fourthDxpSplitter").val('');
    $("#classConceptId").val(conceptId);
    $("#thirdDxpSplitter").show();
    $('.viewClassDiv').removeClass('active');
    $("#excelExportsearchResults").show();
    var selectedValue = $("#SelectedValue").val();
    $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '100%'}]});
    $('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
    $(".searchResultsList").hide();
    $(".searchDXPCreate").hide();
    secondPanelShowFlag = true;
//    $('#fourthDxpSplitter').jqxSplitter('collapse');
    $(".searchResultsList").addClass('activeResult');
    var gridId = '';
    $("#currentDomain").val(domainValue);
    if (domainValue != null && domainValue != '' && domainValue != undefined
            && domainValue == 'All') {
        gridId = "DXP_SEARCH_VIEW";
        $("#currentGridId").val(gridId);
    } else if (domainValue != null && domainValue != '' && domainValue != undefined
            && domainValue == 'SERVICE') {
        gridId = "DXP_SM_SEARCH_VIEW";
        $("#currentGridId").val(gridId);
    }
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'showSearchDxpClassResults',
        data: {
            'typedValue': typedValue,
            'className': className,
            'gridId': gridId
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            var resultObj = {};
            resultObj = JSON.parse(response);
            resultObj['className'] = className;
            resultObj['typedValue'] = typedValue;
            $("#thirdDxpSplitter").val('');
            gridConfig(resultObj, 0, [], "");
            $(".searchDXPCreate").show();
            $("#searchGrid").show();
            $('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
//            $("#thirdDxpSplitter").hide();
            $(".dxpClassHideShow").show();
            $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 1550}]});//31122
            $("#fourthDxpSplitter").hide();
            $("#thirdDxpSplitter").show();
//            $(".mainThirdDxpSplitter").html(resultObj);

        }
    });
}
function copyItem(copyid, jsonDataStr) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }

    if (copyid == '') {
        var copyMessage = labelObject['Copy id not configured'] != null ? labelObject['Copy id not configured'] : 'Copy id not configured';
        var dialogSplitMessage = dialogSplitIconText(copyMessage, true);
        var modalObj = {
            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
            body: dialogSplitMessage,
        };
        var buttonArray = [
            {
                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                click: function () {
                },
                isCloseButton: true
            }
        ];
        modalObj['buttons'] = buttonArray;
        createModal("dataDxpSplitterValue", modalObj);
        $(".modal-dialog").addClass("modal-xs");
        stopLoader();
    } else {
        var jsonData = JSON.parse(jsonDataStr);

        var items = {};
        items['CONCEPT_ID'] = $("#classConceptId").val();
        var linkedColumns = $("#linkedColumns").val();
        if (linkedColumns != null && linkedColumns != '') {
            for (var key in jsonData) {
                if (linkedColumns.lastIndexOf(key) > -1) {
                    var value = jsonData[key];
                    if (value != null && value != '') {
                        value = value.replace(/\s/gi, "_");
                        value = value.replace(/[#]/g, "_");
                    }
                    //    console.log("key::::" + key + ":::value::::" + value);

                    //  console.log("key::::" + key + ":::value::::" + value);
                    items[key] = value;
                }
            }
        }
//        items.baskettype = jsonData['basketType'];
//        items.baskettype = "Search View";
        var stripValueStr = $("#stripValue").val();
        var stripValueObjArray = [];
        if (stripValueStr != null) {
            var stripValObj = stripValueStr.split(";");
            for (var i = 0; i < stripValObj.length; i++)
            {
                var stripValueObj = {};
                if (stripValObj[i] != null && stripValObj[i] != '' && typeof stripValObj[i] != 'undefined') {
                    if (stripValObj[i].indexOf(",") > -1) {
                        var stripVal = stripValObj[i].split(",");
                        stripValueObj.columnName = stripVal[0];
                        stripValueObj.value = stripVal[1];
                        stripValueObjArray.push(stripValueObj);
                    }
                }
            }
        }//

        var hiddenObjStr = $("#hiddenObj").val();
        if (hiddenObjStr != null && hiddenObjStr != '') {
            var hiddenObj = JSON.parse(hiddenObjStr);
            for (var key in hiddenObj) {
                var value = hiddenObj[key];
                // alert(key+":::::"+value);
                if (value != null && value != '' && value != 'null') {
                    if (key != null && key.lastIndexOf("HIDDEN") > -1) {

                        var columnsArray = value.split(",");
                        //  alert("columnsArray:::"+columnsArray);
                        var hiddenIds = key.split("HIDDEN_");
                        var hiddenVal = jsonData[hiddenIds[1]];
                        //alert("hiddenIds[1]:::"+hiddenIds[1]);
                        //  alert("hiddenVal:::"+hiddenVal);
                        for (var i = 0; i < columnsArray.length; i++) {
                            if (columnsArray[i] != 'NAME1') {
                                items[columnsArray[i]] = hiddenVal;
                                jsonData[columnsArray[i]] = hiddenVal;
                            }
                        }

                    }
                } else {
//alert("Value is null");
                }
            }
        }
        items.stripValue = stripValueObjArray
        items.imageColumn = $("#imageColumn").val();
        items.imageTable = $("#imageTable").val();
        items.imageTableColumn = $("#imageTableColumn").val();
        items.linkedColumns = linkedColumns;
        items.gridId = $("#currentGridId").val();
//        items.gridId = $("#hrefGridId").val();
        items.panelId = $("#panelId").val();
        $("#objectid").val("MM_FRM_RECORD_REG_MGR");
        items.objectid = "MM_FRM_RECORD_REG_MGR";
        items.formId = "MM_FRM_RECORD_REG_MGR";
        items.conceptId = $("#classConceptId").val();
        jsonData.formId = "MM_FRM_RECORD_REG_MGR";
        jsonData.objectid = "MM_FRM_RECORD_REG_MGR";
        jsonData.gridId = $("#currentGridId").val();
        jsonData.conceptId = $("#classConceptId").val();
//        items.panelId = $("#panelId").val();
        items.tabId = "";
        items.gridId = jsonData['gridId'];
        $("#currentGridId").val(items.gridId);
        //  console.log("items:::" + JSON.stringify(items));
        //   console.log("data:::" + JSON.stringify(data));
        var itemsstring = JSON.stringify(items);
        showLoader();
        instanceCopyDropDownMM(itemsstring, copyid, jsonData);
    }
}
function instanceCopyDropDownMM(itemsstring, copyId, jsonData) {
    showLoader();
    var jsCopyObject1 = new Object();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
//    var gridId = jsonData['gridId'];

    $.ajax({
        type: "POST",
        traditional: true,
        dataType: 'json',
        url: "instanceDataMgr",
        data: {
            'jsonString': itemsstring,
        },
        cache: false,
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

                    showLoader();

                    var jsCopyObject = jsonData;
                    console.log("jsCopyObject::::" + JSON.stringify(jsCopyObject));
                    jsCopyObject.NEW_PLANT = "ALL";
                    jsCopyObject.NEW_BUSINESS_UNIT = "ALL";
                    jsCopyObject.NEW_INSTANCE = "100";
                    jsCopyObject1.formdata = jsCopyObject;
//                    jsCopyObject1.ssFromObject = ssFromObject;
                    //     jsonData['INSTANCE'] = selectedInstance[0];
                    // var jsonString = JSON.stringify(jsonData);

                    console.log("jsonString::::" + JSON.stringify(jsCopyObject1));
                    $.ajax({
                        type: 'post',
                        url: 'copyRecords',
                        //            async: false,
                        data: {
                            'jsonData': JSON.stringify(jsCopyObject1),
                            'copyId': copyId,
                            'controlType': 'COPY',
                            'isSearch': 'Y',
                            'formId': jsCopyObject['formId']
                        },
                        success: function (response) {
                            alert("JSON.parse(response)::::" + response);
                            var jsonData = {};
                            var jsonObj = JSON.parse(response);
                            response = jsonObj.Message;
//                            var flag = jsonObj.messageFlag;
                            var flag = "C";
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
                                        stripValueObjArray.push(stripValueObj);
                                    }
                                }
                                jsonData['stripValue'] = stripValueObjArray;
                                //stripValue
                            }
                            stopLoader();
                            // ////alert("JSON.stringify(jsonData))::::"+JSON.stringify(jsonData));
                            //var baskettype1 = $('#baskettypehid1').val();

                            $("#dialog").html(dialogSplitMessage);
                            $("#dialog").dialog({resizable: false,
                                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                modal: true,
                                height: 'auto',
                                minHeight: 'auto',
                                minWidth: 500,
                                maxWidth: 'auto',
                                fluid: true,
                                buttons: [{
                                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
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
                                            if (flag)
                                            {
                                                jsonData.baskettype = jsCopyObject['baskettype'];
                                                jsonData.gridId = jsCopyObject['gridId'];
                                                $("#items").val(JSON.stringify(jsonData));
                                                $("#submitForm").attr("action", "formData");
                                                $("#submitForm").submit();
                                            }

                                        }
                                    }],
                                open: function () {
                                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                    $(".visionHeaderMain").css("z-index", "999");
                                    $(".visionFooterMain").css("z-index", "999");
                                    $(".ui-dialog").addClass("copyIconDialog");
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
                            stopLoader();
                            sessionTimeout(e);
                        }

                    });
                    // extensions(jsonString, success_msg);
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
//                        minHeight: 0,
//                        minWidth: 300,
                    width: 300,
                    maxWidth: 'auto',
                    height: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {

                                showLoader();
                                var selectedInstance = $('#selectedInstance').val();
                                console.log("selectedInstance::::" + selectedInstance);
                                selectedInstance = selectedInstance.split(':');
                                $(this).html("");
                                try {
                                    $(this).dialog("destroy");
                                } catch (e) {

                                }
                                try {
                                    $(this).dialog("close");
                                } catch (e) {

                                }
                                if (selectedInstance != null && selectedInstance != '') {
                                    var operationName = $('#operationName').val();
                                    if (operationName != 'Extend') {
                                        var jsCopyObject = jsonData;
                                        console.log("jsCopyObject::::" + JSON.stringify(jsCopyObject));
                                        jsCopyObject.NEW_PLANT = selectedInstance[1];
                                        jsCopyObject.NEW_BUSINESS_UNIT = selectedInstance[1];
                                        jsCopyObject.NEW_INSTANCE = selectedInstance[0];
                                        jsCopyObject1.formdata = jsCopyObject;
                                        jsCopyObject1.ssFromObject = jsonData;
                                        //     jsonData['INSTANCE'] = selectedInstance[0];
                                        // var jsonString = JSON.stringify(jsonData);

                                        console.log("jsonString::::" + JSON.stringify(jsCopyObject1));
                                        $.ajax({
                                            type: 'post',
                                            url: 'copyRecords',
//            async: false,
                                            data: {
                                                'jsonData': JSON.stringify(jsCopyObject1),
                                                'copyId': copyId,
                                                'controlType': 'COPY',
                                                'isSearch': 'Y',
                                                'formId': jsCopyObject['formId']
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
                                                            stripValueObjArray.push(stripValueObj);
                                                        }
                                                    }
                                                    jsonData['stripValue'] = stripValueObjArray;
                                                    //stripValue
                                                }
                                                stopLoader();
                                                // ////alert("JSON.stringify(jsonData))::::"+JSON.stringify(jsonData));
                                                //var baskettype1 = $('#baskettypehid1').val();
                                                var modalObj = {
                                                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                                                    body: dialogSplitMessage,
                                                };
                                                var buttonArray = [
                                                    {
                                                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                                        click: function () {
                                                            if (flag)
                                                            {
                                                                jsonData.baskettype = jsCopyObject['baskettype'];
                                                                jsonData.gridId = jsCopyObject['gridId'];
                                                                jsonData.TERM = jsCopyObject['TERM'];
                                                                jsonData.CLASS_TERM = jsCopyObject['TERM'];
                                                                jsonData.CONCEPT_ID = jsCopyObject['conceptId'];
                                                                var stripValue = "CONCEPT_ID,#;";
                                                                var stripValueObjArray = [];
                                                                if (stripValue != null) {
                                                                    var stripValObj = stripValue.split(";");
                                                                    for (var i = 0; i < stripValObj.length; i++)
                                                                    {
                                                                        var stripValueObj = {};
                                                                        if (stripValObj[i] != null && stripValObj[i] != '' && typeof stripValObj[i] != 'undefined') {
                                                                            if (stripValObj[i].indexOf(",") > -1) {
                                                                                var stripVal = stripValObj[i].split(",");
                                                                                stripValueObj.columnName = stripVal[0];
                                                                                stripValueObj.value = stripVal[1];
                                                                                stripValueObjArray.push(stripValueObj);
                                                                            }

                                                                        }

                                                                    }

                                                                }//
                                                                jsonData.stripValue = stripValueObjArray;
                                                                $("#TERM").val(jsCopyObject['TERM']);
                                                                registerPanels(jsonData, jsCopyObject);
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
                                                                $(".dxpGridHideShow").show();
                                                                $("#fourthDxpSplitter").show();
                                                                $('.viewClassDiv').removeClass('active');
                                                                $('.viewGridDiv').removeClass('active');
                                                                $("#TERM").val(jsCopyObject['TERM']);

                                                                $(".searchResultsList").hide();
                                                                $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
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
//                                                                $("#items").val(JSON.stringify(jsonData));
//                                                                $("#submitForm").attr("action", "formData");
//                                                                $("#submitForm").submit();
                                                            }
                                                        },
                                                        isCloseButton: true
                                                    }
                                                ];
                                                modalObj['buttons'] = buttonArray;
                                                createModal("dataDxpSplitterValue", modalObj);
                                                $(".modal-dialog").addClass("modal-xs");
                                            },
                                            error: function (e)
                                            {
                                                stopLoader();
                                                sessionTimeout(e);
                                            }

                                        });
                                    } else {
                                        var basicData = {};
                                        basicData = JSON.parse(itemsstring);
                                        basicData.NEW_PLANT = selectedInstance[1];
                                        basicData.NEW_BUSINESS_UNIT = selectedInstance[1];
                                        basicData.NEW_INSTANCE = selectedInstance[0];
                                        extensions(JSON.stringify(basicData), jsonData['success_msg'], selectedInstance);
                                    }
                                    // extensions(jsonString, success_msg);
                                }

                            }
                        }],
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                        $(".ui-dialog").addClass("copyIconDialog");
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
            stopLoader();
            //  ////////alert(e.message)
            sessionTimeout(e);
        }
    });
}
function searchExtend() {
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
            console.log("panaloldData::::" + JSON.stringify(basicData));
            //  basicData['NEW_PLANT'] = basicData['PLANT'];
            basicData['NEW_PURCHASE_ORG'] = basicData['PURCHASE_ORG'];
            basicData['NEW_COMPANY_CDE'] = basicData['COMPANY_CDE'];
            // basicData['NEW_INSTANCE'] = basicData['INSTANCE'];
            /// FOR CM
            basicData['NEW_DISTRIBUTION_CHANNEL'] = basicData['DISTRIBUTION_CHANNEL'];
            basicData['NEW_DIVISION'] = basicData['DIVISION'];
            basicData['NEW_SALES_ORG'] = basicData['SALES_ORG'];
//        delete basicData['PLANT'];
//        delete basicData['PURCHASE_ORG'];
//        delete basicData['COMPANY_CDE'];
//        delete basicData['INSTANCE'];
//        delete basicData['DISTRIBUTION_CHANNEL'];
//        delete basicData['SALES_ORG'];
//        delete basicData['DIVISION'];
//        basicData['PLANT'] = panaloldData['PLANT'];
//        basicData['PURCHASE_ORG'] = panaloldData['PURCHASE_ORG'];
//        basicData['COMPANY_CDE'] = panaloldData['COMPANY_CDE'];
//        basicData['INSTANCE'] = panaloldData['INSTANCE'];
//        basicData['DISTRIBUTION_CHANNEL'] = panaloldData['DISTRIBUTION_CHANNEL'];
//        basicData['DIVISION'] = panaloldData['DIVISION'];
//        basicData['SALES_ORG'] = panaloldData['SALES_ORG'];
//        basicData['controlType'] = "Extend";

            var role = $("#rolehid").val();
            var roleStartsWith = role.substring(0, 2);
            var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
            var modalObj = {
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                body: dialogSplitMessage,
            };
            var buttonArray = [
                {
                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                    click: function () {
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
                            var operationName = $("#operationName").val();
                            basicData['success_msg'] = success_msg;
                            basicData['operationName'] = operationName;
                            basicData['controlType'] = operationName;
                            instanceDropDownMM(JSON.stringify(basicData), '', success_msg);
                        }
                    },
                    isCloseButton: true
                }
            ];
            modalObj['buttons'] = buttonArray;
            createModal("dataDxpSplitterValue", modalObj);
            $(".modal-dialog").addClass("modal-xs");
        } else {
            for (var textIdKey in resultArray) {
                console.log(":::::::::#error_" + textIdKey);
                $("#dis" + textIdKey).html(resultArray[textIdKey]);
                $("#dis" + textIdKey).show();

            }
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
                var modalObj = {
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                    body: labelObject[dialogSplitMessage] != null ? labelObject[dialogSplitMessage] : dialogSplitMessage,
                };
                var buttonArray = [
                    {
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {
                            registerPanels(jsonData, JSON.stringify(jsonData));
//                            $("#CLASS_TERM").val(jsonData['TERM']);
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
                $(".modal-dialog").addClass("modal-xs");
            },
            error: function (e) {
                sessionTimeout(e);
            }
        });
    }
}
function deleteRequest() {
    $("#Delete_Request").click(function () {
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
//            console.log("panaloldData::::" + JSON.stringify(panaloldData));
            basicData['NEW_PURCHASE_ORG'] = basicData['PURCHASE_ORG'];
            basicData['NEW_COMPANY_CDE'] = basicData['COMPANY_CDE'];
//            delete basicData['PLANT'];
//            delete basicData['PURCHASE_ORG'];
//            delete basicData['COMPANY_CDE'];
//            delete basicData['INSTANCE'];
//            basicData['PLANT'] = panaloldData['PLANT'];
//            basicData['PURCHASE_ORG'] = panaloldData['PURCHASE_ORG'];
//            basicData['COMPANY_CDE'] = panaloldData['COMPANY_CDE'];
//            basicData['INSTANCE'] = panaloldData['INSTANCE'];
            basicData['controlType'] = "Delete Request";
            var role = $("#rolehid").val();
            var jsonString = JSON.stringify(basicData);
            console.log("jsonString::::" + JSON.stringify(jsonString));
            var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
            var modalObj = {
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                body: dialogSplitMessage,
            };
            var buttonArray = [
                {
                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                    click: function () {
                        $("#showFlag").val('N');
                        basicData['CLASS_TERM'] = basicData['TERM'];
                        changeRequest(jsonString, 'deleteRequest', success_msg);

                    },
                    isCloseButton: true
                }
            ];
            modalObj['buttons'] = buttonArray;
            createModal("dataDxpSplitterValue", modalObj);
            $(".modal-dialog").addClass("modal-xs");
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
}
function changeRequest(jsonString, reqType, success_msg) {
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

                var jsonData = {};
                var jsonObj = JSON.parse(response);
                var message = jsonObj.Message;
                jsonData = jsonObj.ssfromobject;
                var flag = jsonObj.messageFlag;
                var conformProceedFlag = jsonObj['conformProceedFlag'];
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
//                    var dialogSplitMessage = "";
//                    var resultMessage ="";
//                    //  alert(success_msg);
//                    dialogSplitMessage = dialogSplitIconText((labelObject[response] != null ? labelObject[response] : response), flag);
//                    if (response != null && response != '' && response.indexOf("<table") > -1) {
//                        resultMessage=response;
//                    } else {
//                        resultMessage=dialogSplitMessage;
//                    }

                if (conformProceedFlag) {
                    var modalObj = {
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                        body: message,
                    };
                    var buttonArray = [
                        {
                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                            click: function () {
                                openDocsProceedChangeRequest(jsonString, reqType);

                            },
                            isCloseButton: true
                        }
                    ];
                    modalObj['buttons'] = buttonArray;
                    createModal("dataDxpSplitterValue", modalObj);
                    $(".modal-dialog").addClass("modal-xs");
                } else {
                    var modalObj = {
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                        body: message,
                    };
                    var buttonArray = [
                        {
                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                            click: function () {
                                if (flag) {
                                    registerPanels(jsonData, JSON.stringify(jsonData));
                                }

                            },
                            isCloseButton: true
                        }
                    ];
                    modalObj['buttons'] = buttonArray;
                    createModal("intiateRequestClass", modalObj);
                    $(".modal-dialog").addClass("modal-xs");
                }
            },
            error: function (e) {
                sessionTimeout(e);
            }
        });
    }
}
function undeleteRequest() {
    showLoader();
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
//        console.log("panaloldData::::" + JSON.stringify(panaloldData));
        basicData['NEW_PURCHASE_ORG'] = basicData['PURCHASE_ORG'];
        basicData['NEW_COMPANY_CDE'] = basicData['COMPANY_CDE'];
//        delete basicData['PLANT'];
//        delete basicData['PURCHASE_ORG'];
//        delete basicData['COMPANY_CDE'];
//        delete basicData['INSTANCE'];
//        basicData['PLANT'] = panaloldData['PLANT'];
//        basicData['PURCHASE_ORG'] = panaloldData['PURCHASE_ORG'];
//        basicData['COMPANY_CDE'] = panaloldData['COMPANY_CDE'];
//        basicData['INSTANCE'] = panaloldData['INSTANCE'];
        basicData['controlType'] = "Undelete Request";
        var role = $("#rolehid").val();
        var jsonString = JSON.stringify(basicData);
        console.log("jsonString::::" + JSON.stringify(jsonString));
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
        var modalObj = {
            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
            body: dialogSplitMessage,
        };
        var buttonArray = [
            {
                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                click: function () {
                    $("#showFlag").val('N');
                    basicData['CLASS_TERM'] = basicData['TERM'];
                    changeRequest(jsonString, 'undeleteRequest', success_msg);
                    undeleteRequest();
                },
                isCloseButton: true
            }
        ];
        modalObj['buttons'] = buttonArray;
        createModal("showExtendPdfTableData", modalObj);
        $(".modal-dialog").addClass("modal-xs");

    });
}
function newChangeRequest() {
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
//        console.log("panaloldData::::" + JSON.stringify(panaloldData));
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
//        console.log("panaloldData::::" + JSON.stringify(panaloldData));
        basicData['NEW_PURCHASE_ORG'] = basicData['PURCHASE_ORG'];
        basicData['NEW_COMPANY_CDE'] = basicData['COMPANY_CDE'];
        basicData['NEW_DISTRIBUTION_CHANNEL'] = basicData['DISTRIBUTION_CHANNEL'];
        basicData['NEW_SALES_ORG'] = basicData['SALES_ORG'];
//        delete basicData['PLANT'];
//        delete basicData['PURCHASE_ORG'];
//        delete basicData['COMPANY_CDE'];
//        delete basicData['INSTANCE'];
//        delete basicData['DISTRIBUTION_CHANNEL'];
//        delete basicData['SALES_ORG'];
//        basicData['PLANT'] = panaloldData['PLANT'];
//        basicData['PURCHASE_ORG'] = panaloldData['PURCHASE_ORG'];
//        basicData['COMPANY_CDE'] = panaloldData['COMPANY_CDE'];
//        basicData['INSTANCE'] = panaloldData['INSTANCE'];
//        basicData['DISTRIBUTION_CHANNEL'] = panaloldData['DISTRIBUTION_CHANNEL'];
//        basicData['SALES_ORG'] = panaloldData['SALES_ORG'];
        basicData['controlType'] = "Change";
        var role = $("#rolehid").val();
        var jsonString = JSON.stringify(basicData);
        console.log("jsonString::::" + JSON.stringify(jsonString));
        var dialogSplitMessage = dialogSplitIconText(conf_mesg, "Y");
        var modalObj = {
            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
            body: dialogSplitMessage,
        };
        var buttonArray = [
            {
                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                click: function () {
                    $("#showFlag").val('N');
                    basicData['CLASS_TERM'] = basicData['TERM'];
                    changeRequest(jsonString, 'changeRequest', success_msg);
//                        undeleteRequest();
                },
                isCloseButton: true
            }
        ];
        modalObj['buttons'] = buttonArray;
        createModal("showExtendPdfTableData", modalObj);
        $(".modal-dialog").addClass("modal-xs");

    });
}
function refreshGrid(gridId) {
    try {
        $('#' + gridId).jqxGrid('clearselection');
        $('#' + gridId).jqxGrid('clearfilters');
    } catch (er) {
        console.log(er);
    }

}
function getNewFormWithCardsCreation(typedValue, formType) {
    $('#selectDasbordHomeCard').hide();
    $.ajax({
        datatype: "html",
        type: "POST",
        url: 'getCreateFormWithCardResults',
        data: {
            'typedValue': typedValue,
            'formType': formType,
        },
        traditional: true,
        cache: false,
        success: function (response) {

            $('#secondDxpSplitter').show();
            $('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '100%'}]});
            $("#secondDxpSplitterData").html(response);
            $(".searchDXPCreate").hide();
        }
    });
}
// new layout code
//function getNewDefaultFormWithCardsCreation(formType) {
//    $('#selectDasbordHomeCard').hide();
//    $.ajax({
//        datatype: "html",
//        type: "POST",
//        url: 'getDefaultDomainWithResults',
//        data: {
//            'formType': formType,
//        },
//        traditional: true,
//        cache: false,
//        success: function (response) {
//
//            //$('#secondDxpSplitter').show();    
//            //$('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '100%'}]});
//            $("#dxpHomeContent").html(response);
//            showSelectedTabContent(event, "dxpHomeTab", "dxpHomeContent", 'Home','N');
//            if (!$(".iconMenuNavNext").length > 0) {
//                $("#filterRowButton").append(`<div class="iconMenuNavNext"><i class="fa fa fa-angle-double-right"></i></div>`);
//                $(".iconMenuNavNext").click(function () {
//                    $('#filterRowButton .col-12').animate({
//                        scrollLeft: '+=300'
//                    }, 500, 'swing');
//                })
//            }
//            if (!$(".iconMenuNavPrev").length > 0) {
//                $("#filterRowButton").prepend(`<div class="iconMenuNavPrev"><i class="fa fa fa-angle-double-left"></i></div>`);
//
//                $(".iconMenuNavPrev").click(function () {
//                    $('#filterRowButton .col-12').animate({ 
//                        scrollLeft: '-=300'
//                    }, 500, 'swing');
//                });
//            }
//            //$(".searchDXPCreate").hide(); 
//            $(".cardInnerImageClass").mouseenter(function () {
//                var hoveredImageId = $(this).attr('id');
//                $('#topMenuPopover').remove();
//                var Imagrsrc = $(this).attr('src');
//                var text = $(this).attr('title');
//                console.log(Imagrsrc);
//                var htmlData = `<div class="menuPopoverContent">
//                   <div class="ImgSection">
//                    <img src='${Imagrsrc}' width='30px' />
//                   </div>
//                    <div class="popup-text">
//                   <h6>${text}</h6>                          
//                    </div>
//                </div>`;
//                $(this).append('<div id = "topMenuPopover" class="">' + htmlData + '</div>');
//                var template = '<div class="popover customMenupopover" role="tooltip">' +
//                        '<div class="arrow"></div>' +
//                        '<div class="popover-body"></div>' +
//                        '</div>';
//                $('#' + hoveredImageId).popover({content: htmlData, trigger: "hover", position: 'top', html: true, template: template});
//                 $('#' + hoveredImageId).popover('show');
//            });
//        }
//    });
//}
function getNewDefaultFormWithCardsCreation(formType) {
    $('#selectDasbordHomeCard').hide();
    var csrfToken = $('meta[name="_csrf"]').attr('content');
    var defaultFioriEnableFlag = localStorage.getItem("defaultFioriEnableFlag");
    if (!(csrfToken != null && csrfToken != undefined && csrfToken != '' && csrfToken != 'undefined')) {
        csrfToken = $('meta[name="csrf-token"]').attr('content');
    }
    $.ajax({
        datatype: "html",
        type: "POST",
        url: 'getDefaultDomainWithResults',
        async: false,
        data: {
            'formType': formType,
            'firorthemeFlag': defaultFioriEnableFlag
        },

        headers: {
            'X-XSRF-TOKEN': csrfToken,

        },
        traditional: true,
        cache: false,
        success: function (response) {

            //$('#secondDxpSplitter').show();    
            //$('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: '100%'}]});
            $("#dxpHomeContent").html(response);
            initializeScrollFunctionality();
//            let menuContainerWidth = $(".filterButtonrow > .col-12").width();
//            console.log(menuContainerWidth);
            let elements = $(".outerWidthcol");
            let totalWidth = 0;
            let totalgapWidth = 0;
            elements.each(function () {
                totalWidth += $(this).outerWidth(true); // true includes margins
                totalgapWidth = totalWidth + 25;
            });
            console.log("Total width of items:", totalWidth);
//            var averageWidth = totalWidth / elements.length;
//            var totalItemWidth = averageWidth * elements.length;
            console.log("Total width:", totalgapWidth);
            showSelectedTabContent(event, "dxpHomeTab", "dxpHomeContent", 'Home', 'N');
            var role = sessionStorage.getItem("currentRole");
            if (role == null || role == undefined || role == '') {
                role = localStorage.getItem("currentRole");
            }
            try {
                if (role.endsWith("ADMIN")) {
                    $("#dxpHomeContent section").addClass("searchResultMainSectionAdmin");
                } else {
                    $("#dxpHomeContent section").removeClass("searchResultMainSectionAdmin");
                }
                $('.searchResultMainSectionAdmin ul li').click(function () {            //09-06-2025new 
                    $('.searchResultMainSectionAdmin ul li').removeClass("active");
                    $(this).addClass('active');
                });
            } catch (er) {
            }

            //$(".searchDXPCreate").hide(); 
//            $(".cardInnerImageClass").mouseenter(function () {
//                var hoveredImageId = $(this).attr('id');
//                $('#topMenuPopover').remove();
//                var Imagrsrc = $(this).attr('src');
//                var text = $(this).attr('title');
//                console.log(Imagrsrc);
//                var htmlData = `<div class="menuPopoverContent">
//                   <div class="ImgSection">
//                    <img src='${Imagrsrc}' width='30px' />
//                   </div>
//                    <div class="popup-text">
//                   <h6>${text}</h6>                          
//                    </div>
//                </div>`;
//                $(this).append('<div id = "topMenuPopover" class="">' + htmlData + '</div>');
//                var template = '<div class="popover customMenupopover" role="tooltip">' +
//                        '<div class="arrow"></div>' +
//                        '<div class="popover-body"></div>' +
//                        '</div>';
//                $('#' + hoveredImageId).popover({content: htmlData, trigger: "hover", position: 'top', html: true, template: template});
//                $('#' + hoveredImageId).popover('show');
//            });
            try {
                let labelObj = $("#labelObjectHidden").val();
                labelObject = JSON.parse(labelObj);
            } catch (e) {

            }
            var defaultFioriEnableFlag = localStorage.getItem("defaultFioriEnableFlag");
            if (defaultFioriEnableFlag != null && defaultFioriEnableFlag != ''
                    && defaultFioriEnableFlag != undefined && defaultFioriEnableFlag == "Y") {
                $("#cb-switch").prop("checked", true).trigger("change");
                handleThemeAction(true);
                OpenUITabSroller();
                setTimeout(function () {
                    $("#defaultHeaderFirorTabId").attr("homeMainMenuFlag", "Y");
                    $("#defaultHeaderFirorTabId").trigger("click");
                }, 500)
            }
            $(document).on('click', '.homeTabsContentlistwrapper ul li', function () {
                var title = $(this).find('a').text().trim();
                if (title === "KDS Configuration WB") {
                    $('#dxpContent').addClass('KDSConfigurationWBClass');
                } else {
                    $('#dxpContent').removeClass('KDSConfigurationWBClass');
                }
            });



        }
    });
}
function onChecked(codifcode, id, conceptid) {
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }
    var checkboxid = id;
    var prop_chkd = $("#fetchtree" + codifcode).prop('checked');
    //        //alert('prop_chkd:' + prop_chkd);
    if (prop_chkd == true) {
        $('#treeDialog1').remove();
        $("#treeDialog").remove("");
        $("body").append("<div id='treeDialog'></div>");
        var $newdiv1 = $("<div id='treeDialog1' class='visionClassficationTreeData'></div>");
        //                 var existingdiv1 = document.getElementById( "dropdownwidget" );
        //                //$( "#searchResultsCover" ).append( $newdiv1,  existingdiv1 );
        $("#treeDialog").append($newdiv1);
        ////alert($("classificationid").text() + $("#codeid").text());


        var unspsccode = codifcode;
        unspsccode = unspsccode.toString().replace(/0*$/g, "");
        var levellength = unspsccode.length;
        console.log(parseInt(unspsccode) % 2);
        console.log(parseInt(unspsccode) % 2);
        console.log(parseInt(unspsccode) % 2);
        if (parseInt(unspsccode) % 2 != 0)
        {
            levellength = levellength + 1;
        }
        levellength = levellength + 2;
        // alert(levellength);
        startAjax();
        $.ajax({
            type: "GET",
            url: 'getClassificationTree',
            data: {
                'classificationcode': codifcode,
//                'unspsc': codifcode,
                'level': levellength,
                searchViewName: $.trim($("#classificationsearchview").val()),
                searchId: $("#accordion").attr('data-id')


            },
            traditional: true,
            cache: false,
            success: function (response) {
                //alert('Success: ' + JSON.stringify(response));
                var source =
                        {
                            datatype: "json",
                            datafields: [
                                {name: 'id'},
                                {name: 'parentid'},
                                {name: 'text'},
                                {name: 'value'}
                            ], id: 'id',
                            localdata: response
                        };
                // create data adapter.
                var dataAdapter = new $.jqx.dataAdapter(source);
                // perform Data Binding.
                dataAdapter.dataBind();
                // get the tree items. The first parameter is the item's id. The second parameter is the parent item's id. The 'items' parameter represents 
                // the sub items collection name. Each jqxTree item has a 'label' property, but in the JSON data, we have a 'text' field. The last parameter 
                // specifies the mapping between the 'text' and 'label' fields.  
                var records = dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{name: 'text', map: 'label'}]);
                $('#treeDialog1').jqxTree({theme: 'energyblue', source: records, width: 'auto', height: 'auto'});
                //$("#treeDialog").text(response);
                $("#treeDialog1 .jqx-tree-item").click(function (event) {
                    var that = this;
                    setTimeout(function () {
                        var dblclick = parseInt($(that).data('double'), 10);
                        if (dblclick > 0) {
                            $(that).data('double', dblclick - 1);
                        } else {
                            // singleClick.call(that, event);
                        }
                    }, 300);
                }).dblclick(function (event) {
                    $(this).data('double', 2);
                    // doubleClick.call(this, event);
                    //  function doubleClick(event) {
                    var text = event.target.textContent;
                    var text2 = text.replace(/\s+/g, ' ');
                    //alert(text2);
                    ontreenodeselect(checkboxid, conceptid);
                    // };


                });
                // $('<input type="button" class="treepopup" onclick="ontreenodeselect('+checkboxid+');" value="Search">').insertAfter('#treeDialog1');
                $("<input type='button' class='treepopup' "
                        + "onclick=ontreenodeselect('" + checkboxid + "') "
                        + "value=" + (labelObject['Search'] != null ? labelObject['Search'] : 'Search') + ">").insertAfter('#treeDialog1');
                $("#treeDialog").dialog({resizable: false,
                    'title': labelObject['Classification Tree'] != null ? labelObject['Classification Tree'] : 'Classification Tree',
                    minwidth: 400,
                    'max-width': 'auto',
                    height: 'auto',
                    fluid: true,
                    open: function ()
                    {
//                        $(".visionHeaderMain").css("z-index", "999");
//                        $(".visionFooterMain").css("z-index", "999");
                        $(".ui-dialog").addClass("ClassificationSearchViewPopup");
                        $(".ui-dialog.ClassificationSearchViewPopup").css("z-index", '9999', "!important");
                    },
                    beforeClose: function (event, ui)
                    {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
                $("#treeDialog").dialog("open");
//                endAjax();
                stopLoader();
            },
            error: function (e) {
                console.log(e);
                endAjax();
                sessionTimeout(e);
            }

        });
    }
    if (prop_chkd == false) {
        $("#treeDialog").dialog("close");
        stopLoader();
    }

}
function ontreenodeselect(checkboxid, conceptid) {
//    visionSearchIconsChange();
    alert("checkboxid::" + checkboxid);
    try {
        var item = $('#treeDialog1').jqxTree('getSelectedItem');
        console.log("item::" + item.label);
        var search_count = 0;
        var template_count = 0;
        startAjax();
        //searchResults('TREE', 'N', $.trim(item.value));
        item.label = item.label.substr(0, item.label.indexOf("("));
//        classificationsearchResults('TREE', 'N', $.trim(item.value), $.trim(item.label));
        var dataArray = [];
        var dataObject = {};
        dataObject['searchText'] = $.trim(item.value);
        dataArray.push(dataObject);
        classificationsearchResults('C', '', dataArray, '');
        $("#treeDialog").empty();
        $("#treeDialog").dialog("close");
        $("#" + checkboxid).prop('checked', false);
    } catch (exception) {
        console.log("exception in treenodeselect function::" + exception);
    }


}
function forgotUserValidate() {
    var userName = $("#userNameText").val();
    if (!(userName != null && userName != undefined && userName != '')) {
        $("#userNameError").css("color", "red");
        $("#userNameError").text("Username cannot be empty.");
        return;
    }
    showLoader();
    $("#Loader").addClass("modalLoader");
    var user = userName.toUpperCase();
    $("#userNameError").text("");
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
            var message = response['message'];
//            var maskedMail = response['email'];
            if (message != undefined && message != '' && message != null) {
                $("#userNameError").css("color", "red");
                $("#userNameError").text(message);
            } else {
                beforeLoginOtpSend(user);
            }
        }
    });
}
function beforeLoginOtpSend(username) {
    showLoader();
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: 'getProcessLoginOtpAuth',
        traditional: true,
        cache: false,
        data: {
            userName: username,
            beforeLogin: 'Y'
        },
        success: function (response) {
            stopLoader();
            var status = response.status;
            var maskedMail = response.email || '';
            var otpInput = response.otpInput || '';
            var otpMsg = response.otpmsg || '';

            if (status === 'success') {
                $("#otp-wrapper").html(otpInput);
                $(".userHideLabel").hide();
                $(".userValidClass").hide();
                $("#userNameText").hide();
                $("#loginOtpMsg").show();
                $("#loginOtpMsg").html(
                        (otpMsg || "User successfully validated. An OTP has been sent to the registered email address.") +
                        "<span style='color:#0b4a99;'> " + maskedMail + "</span>"
                        );
                $("#loginOtpMsg").css("color", "green");
                $("#loginOtpCode").focus();
                $("#Loader").removeClass("modalLoader");
                $(".changepassword .titlepasswordClass.row").css("margin-top", "0");

//                $("#checkOtpAndEnableId").on('click', function () {
//                    checkOtpAndEnableIp();
//                });
            } else {
                $("#loginOtpMsg").show();
                $("#loginOtpMsg").html(
                        (otpMsg || "Unable to send OTP, User's Email not maintained or Email is Incorrect.") +
                        (maskedMail ? "<span style='color:#0b4a99;'> " + maskedMail + "</span>" : "")
                        );
                $("#loginOtpMsg").css("color", "red");
                $("#otp-wrapper").html(otpInput);
            }
        },
    });
}
//function beforeLoginOtpSend(username) {
//    showLoader();
//    $.ajax({
//        dataType: 'JSON',
//        type: 'POST',
//        url: 'getProcessLoginOtpAuth',
//        traditional: true,
//        cache: false,
//        data: {
//            userName: username,
//            beforeLogin: 'Y'
//        },
//        success: function (response) {
//            stopLoader();
//            var status = response['status'];
//            if (status != null && status != "" && status != undefined && status == 'success') {
//                var otpInput = response['otpInput'];
//                var maskedMail = response['email'];
////                var OtpCode = response['otp'];
////                localStorage.setItem("beforLoginotp", OtpCode);
//                $("#otp-wrapper").html(otpInput);
//                $(".userHideLabel").hide();
//                $(".userValidClass").hide();
//                $("#userNameText").hide();
//                $("#loginOtpMsg").show();
//                $("#loginOtpMsg").text(response.otpmsg != undefined ? response.otpmsg : "User successfully validated. An OTP has been sent to the registered email address.");
//                $("#loginOtpMsg").css("color", "green");
//                $("#loginOtpMsg").append("<span style='color:#0b4a99;'>" + maskedMail + "</span>");
//                $("#loginOtpCode").focus();
//                $("#Loader").removeClass("modalLoader");
//                $(".changepassword .titlepasswordClass.row").css("margin-top", "0");
//            } else {
//                $("#loginOtpMsg").show();
//                $("#loginOtpMsg").text(response.otpInput != undefined ? response.otpInput : "Unable to send OTP, User's Email not maintained or Email is Incorrect.");
//                $("#loginOtpMsg").css("color", "red");
//                $("#loginOtpMsg").append("<span style='color:#0b4a99;'>" + maskedMail + "</span>");
//            }
//        }
//    });
//}
function checkOtpAndEnableIp() {
    var otpField = $("#loginOtpCode").val();
    var userName = $("#userNameText").val();

    $.ajax({
        type: "POST",
        url: 'verifyotp',
        data: {
            userName: userName,
            OTP: otpField
        },
        success: function (response) {
            if (response.message === "Email Verified Successfully" || response.messageFlag
                    || response.message === "OTP verified successfully.") {
                // Update UI for successful OTP verification
                $("#loginOtpMsg").hide();
                $("#loginOtpCode").hide();
                $("#otpLabelId").hide();
                $("#loginOtpStatus").hide();
                $("#checkOtpAndEnableId").hide();
                $("#otpStatusMsg").css("color", "green");
                $("#otpStatusMsg").text("OTP verified successfully. Please fill in the details below")
                try {
                    $("#oldpassword").prop("readonly", false);
                } catch (eo) {

                }

                $("#newPassword").prop("readonly", false);
                $("#confirmPassword").prop("readonly", false);
            } else {
                $("#otpStatusMsg").css("color", "red");
                if (!(otpField != null && otpField != undefined && otpField != '')) {
                    $("#otpStatusMsg").text("OTP cannot be empty.");
                } else if (!response.messageFlag) {
                    $("#otpStatusMsg").text(response.message);
                } else {
                    $("#otpStatusMsg").text("The OTP entered does not match");
                }
            }
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
        }
    });
}
function fetchTemplateResults(searchType, paramArrayStr, cattype) {
    visionSearchIconsChange();
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var typedResult = $("#typedResult").val();
    var locale = $("#sessionLocale").val();
    if (searchType == '' || searchType == undefined || searchType == null) {
        searchType = $("#currentSearchType").val();
    }
    var paramArrayStr = $("#currentSearchData").val();
    var cattype = $("#currentSearchCatType").val();
    //templateResultsCover
    var searchText = ($("#result").val() != null ? $("#result").val() : "");
    if ((searchText != null && searchText != '') && (paramArrayStr != null && paramArrayStr != '')) {
        $.ajax({
            type: "POST",
            url: 'getTemplateGrid',
            data: {
                'searchType': searchType,
                'langID': ($("#localedd").val() != null ? $("#localedd").val() : ''),
                'locale': locale
            },
            traditional: true,
            cache: false,
            success: function (gridResultObj) {
                if (gridResultObj != null) {
                    $("#accordion").accordion({active: 2});
                    $(".accordion-Search-contents").hide();
                    try {
                        $("#templateResults").jqxGrid("destroy");
                    } catch (e) {
                    }
                    if (searchType == 'I') {
                        $("#visionClassficationTemplateIds").html("<div id='templateResults' style='opacity:0.99 !important'></div>");

                    } else {
                        $("#dxp1Seconddiv").html("<div id='templateResults'></div>");
                    }
                    //need to assign all hidden fields like hrefColumn,linkedColumns,stripValue,imageColumn,imageTable,imageTableColumn
                    var hrefObj = {}; //hrefObj
                    hrefObj = gridResultObj['hrefObj'];
                    var searchButtonObj = gridResultObj['searchButtonObj'];
                    if (searchButtonObj != null) {
                        $("#templateButtonObj").val(JSON.stringify(searchButtonObj));
                    }
                    if (gridResultObj != null && gridResultObj.datafields) {

                        var imagerenderer = function (row, datafield, value) {

                            return '<img src="" id="ind' + row + '" class="indimage"><label id="imgLabel' + row + '" class="indimage">Show Image</label>';
                        };
                    }
                    var dataFeilds = gridResultObj.datafields;
                    var hrefObj = gridResultObj.hrefObj;

                    var gridPropObj = {};
                    gridPropObj = gridResultObj.gridPropObj;
                    if (gridPropObj != null) {
                        //  fieldsArray.length = 0;
                        // fieldsArray = gridResultObj.columns;
                        gridPropObj.columns = gridResultObj.columns;
                        var headerTooltipRenderer = function (element) {
                            $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
                                position: 'bottom-right',
                                showArrow: false, content: $(element).text()});
                        }

                        var renderToolbar = gridPropObj.renderToolbar;
                        // console.log("renderToolbar::::"+renderToolbar);
                        //  alert("renderToolbar:::"+renderToolbar);
                        gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');
                        //      var defaultTabName = $("#defaultTabName").val();


                        var descrender
                                = function (row, columnfield, value, defaulthtml, columnproperties) {
                                    //return '<textarea readonly class="ta_style" rows=1 >' + value + '</textarea>';
                                    console.log("hiiiii");
                                    return '<div style="height:' + $('#templateResults').jqxGrid('rowsheight') + 'px" class="ta_style" rows=1 >' + value + '</div>';
                                };
                        var classTermRender
                                = function (row, columnfield, value, defaulthtml, columnproperties) {
                                    //return '<textarea readonly class="ta_style" rows=1 >' + value + '</textarea>';
                                    console.log("hiiiii");
                                    return '<div style="cursor:pointer;" class="vend_style">' + value + '</div>';
                                };
                        var descriptorImageRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
                            return  "<img title='Click to create a record' style='cursor:pointer;'  src='" + value + "' class='imageStyle visionTemplete' data-count='" + $('#templateResults').jqxGrid('pagesize') + "' id='dtlul_"
                                    + row + "' onmouseover=templeteMouseOver('dtlul_" + row + "'," + $("#templateResults").jqxGrid("pagesize") + ") onmouseout=templeteMouseOut('dtlul_" + row + "'," + $("#templateResults").jqxGrid("pagesize") + ")>";
                        };
                        var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                            var cellValue = $("#templateResults").jqxGrid('getcellvalue', row, columnfield);
                            var viewType = "GRID-VIEW";
                            var ddwData = gridResultObj.dropDowndData;
                            var ddwObj = ddwData[columnfield];
                            var dependencyparams = ddwObj.dependencyparams;
                            var editable = gridPropObj.editable;
                            if (editable) {
                                return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img id='dd" + "templateResults" + columnfield + "' src='images/iDXPUI5SearchDropdown.png'  onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                                // return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img src='images/iDXPUI5SearchDropdown.png' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                            } else
                            {
                                return "<div class='visionGridDataAlign'>" + cellValue + "</div>";
                            }

                        };
                        for (var i = 0; i < gridPropObj.columns.length; i++) {
                            if (gridPropObj.columns [i].cellsrenderer != null) {
                                gridPropObj.columns [i].cellsrenderer = eval(gridPropObj.columns [i].cellsrenderer);
                            }
                            if (gridPropObj.columns[i].rendered != null) {
                                gridPropObj.columns[i].rendered = eval('(' + gridPropObj.columns[i].rendered + ')');
                            }
                        }

                        if (gridPropObj.rendergridrows != null && gridPropObj.rendergridrows != "") {

                            gridPropObj.rendergridrows = eval('(' + gridPropObj.rendergridrows + ')');
                        }
                        if (gridPropObj.rowsheight != null) {
                            gridPropObj.rowsheight = parseInt(gridPropObj.rowsheight);
                            //  gridPropObj.autorowheight = true;
                            $('.show_detail').css('height', parseInt(gridPropObj.rowsheight + "px"));
                        } else {
                            $('.show_detail').css('height', '25px');
                        }

                        var source =
                                {
                                    type: 'POST',
                                    datatype: "json",
                                    datafields: dataFeilds,
                                    data: {
                                        gridId: gridResultObj['gridId'],
                                        colsArray: JSON.stringify(gridResultObj['colsArray']),
                                        tableName: gridResultObj['tableName'],
                                        searchText: ($("#result").val() != null ? $("#result").val() : ""),
                                        searchType: searchType,
                                        filterColumnName: gridResultObj['filterColumnName'],
                                        'langID': ($("#localedd").val() != null ? $("#localedd").val() : ""),
                                        'locale': locale,
                                        'cattype': cattype,
                                        'paramArray': paramArrayStr

                                    },
                                    url: 'getTemplateResults',
                                    cache: false,
                                    beforeSend: function (xhr) {
                                        xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
//                                    showLoader();
                                    }, loadError: function (xhr, status, error) {
//                                      stopLoader();
                                        throw new Error(error);
                                    }, loadComplete: function (data)
                                    {
//                                    stopLoader();
                                    },
                                    beforeprocessing: function (data) {
//                                                 
                                        if (data[0] != null) {
                                            //  alert(data.JSONObjectList[0].TotalRows);
                                            if (data[0].TotalRows != null) {
                                                source.totalrecords = data[0].TotalRows;
                                            } else {
                                                $("#dialog").html(data[0]);
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
                                                                try {
                                                                    $(this).dialog("destroy");
                                                                } catch (e) {

                                                                }
                                                                try {
                                                                    $(this).dialog("close");
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

                                        } else {
//                                        $("#search_count").attr('totalRecords', 0);
                                            source.totalrecords = 0;
                                            // $("#search_count").text("(No record(s) found)");
//                                        $("#search_count").html("(" + (labelObject['No record(s) found'] != null ? labelObject['No record(s) found'] : 'No record(s) found') + ")");
                                        }
                                        try {
//                                        $("#templateResults").jqxGrid('clearselection');
                                        } catch (e) {
                                        }
                                        stopLoader();
                                    },
                                    sort: function ()
                                    {
                                        $("#templateResults").jqxGrid('updatebounddata', 'sort');
                                        try {
                                            $("#templateResults").jqxGrid('clearselection');
                                        } catch (e) {
                                        }

                                    },
                                    filter: function () {

                                        $("#templateResults").jqxGrid('updatebounddata', 'filter');
                                        try {
                                            $("#templateResults").jqxGrid('clearselection');
                                        } catch (e) {
                                        }
                                    }


                                };

                        var dataAdapter = new $.jqx.dataAdapter(source);
                        gridPropObj.source = dataAdapter;
                        gridPropObj.showtoolbar = true;
                        gridPropObj.rowdetails = true;
                        gridPropObj.rendergridrows = function () {
                            return dataAdapter.records;
                        };
                        gridPropObj.cellhover = function (element, pageX, pageY)
                        {

                            var cell = $('#templateResults').jqxGrid('getcellatposition', pageX, pageY);
                            //\\alert("hello"+cell.row);
                            var datainformation = $('#templateResults').jqxGrid('getdatainformation');
                            var paginginformation = datainformation.paginginformation;
                            var rowscount = paginginformation.pagesize;
                            var pagenum = paginginformation.pagenum;
                            var cellRow = cell.row;
//                              alert(cellRow);
                            if (cellRow >= rowscount && pagenum > 0)
                            {
                                var cellvalue = rowscount * pagenum;
                                if (cellRow == rowscount)
                                {
                                    cellRow = (cellRow - cellvalue);
                                } else
                                {
                                    cellRow = (cellRow - cellvalue);
                                }
                                console.log(cellRow + "cellRow");
                            } else
                            {
                                cellRow = cellRow;
                            }


                        };
                        gridPropObj.rowdetails = false;
                        gridPropObj.autorowheight = false;
                        $('#templateResults').jqxGrid(gridPropObj);
                        $('#templateResults').parent().css("padding-top", "3px", "important");
                        $('#templateResults').parent().css("padding-bottom", "3px", "important");
                        $('#templateResults').jqxGrid('showtoolbar', true);
                        $(".accordion-Template-contents").css("display", "block", "important");
                        $('#templateResults').on('cellclick', function (event) {//newRegGridId
                            console.log("event.args.column.datafield::templateResults:::" + event.args.column.datafield);
                            navigateToForm(event.args.column.datafield, $('#templateResults').jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['newRegGridId'], '', 'New Registrations');
                        });
                        $("#templateResults").on('celldoubleclick', function (event) {
                            var args = event.args;
                            var dataField = args.datafield;
                            var dataField1 = args.text;
                            var rowIndex = args.rowindex;
                            var cellValue = args.value;
                            var isEditable = $('#templateResults').jqxGrid('getcolumnproperty', dataField, 'editable');
                            if (!isEditable) {
                                var column = $("#templateResults").jqxGrid('getcolumn', event.args.datafield).text;
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

                    }// end if(gridPropObj != null)


                }
                // stopLoader();
            },
            error: function (e) {
                stopLoader();
                console.log(e);
                sessionTimeout(e);
            }


        });
    } else {
        stopLoader();
        $("#dialog").html((labelObject['Search something to get Template Results'] != null ? labelObject['Search something to get Template Results'] : 'Search something to get Template Results'));
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
                        try {
                            $(this).dialog("destroy");
                        } catch (e) {

                        }
                        try {
                            $(this).dialog("close");
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

//    stopLoader();
}
function visionSearchIconsChange(tabid)
{
    var arrayvalues = [];
    var tabsids = $('.visionMaterialGeneric .ui-state-default').map(function () {
        return $(this).attr('id');
    });
    var tabidscount = tabsids.length;
    var tabasctiveids = $('.visionMaterialGeneric .ui-state-active').map(function () {
        return $(this).attr('id');
    });
    var tabasctivecount = tabasctiveids.length;
    for (var j = 0; j <= tabasctivecount - 1; j++)
    {
        arrayvalues[j] = tabasctiveids[j];

    }

    var resulttabid = tabid == undefined ? 'resulttabid' : tabid;
    if (arrayvalues.length > 0)
    {
        arrayvalues[arrayvalues.length] = resulttabid;
    }

    tabasctivecount = arrayvalues.length;
    for (var j = 0; j <= tabidscount - 1; j++)
    {
        for (var k = 0; k <= tabasctivecount - 1; k++)
        {
            if (arrayvalues[k] == tabsids[j])
            {
                iconsWhite(arrayvalues[k]);
            } else
            {
                iconsBlue(tabsids[j]);

            }

        }
    }


}
function iconsWhite(id)
{
    var imgSrc = $("#" + id + " img").attr("src");

    if (imgSrc.indexOf('_white.png') <= 0)
    {
        var imagepath2 = imgSrc.split('_blue.png');
        $("#" + id + " img").attr('src', imagepath2[0] + "_white.png");

    }
    return true;

}
function iconsBlue(id)
{
    var imgSrc2 = $("#" + id + " img").attr("src");
    if (imgSrc2.indexOf('_blue.png') <= 0)
    {
        var imagepath3 = imgSrc2.split('_white.png');
        $("#" + id + " img").attr('src', imagepath3[0] + "_blue.png");
    }
}
function showHideResults() {

    $(".accordion-Search-contents").show();
    $(".accordion-Search-contents").css("display", "block", "important");
}
function updateCsrfToken() {
    return new Promise((resolve, reject) => {
        showLoader();
        $.ajax({
            url: 'csrfToken',
            datatype: "json",
            type: "GET",
            traditional: true,
            async: true,
            cache: false,
            success: function (data, textStatus, jqXHR) {
                stopLoader();
                setCsrfTokenInMeta(data.token);
                resolve(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                stopLoader();
                reject(errorThrown || textStatus);
            }
        });
    });
}
function setCsrfTokenInMeta(token) {
    let meta = document.querySelector('meta[name="csrf-token"]');
    let meta1 = document.querySelector('meta[name="_csrf"]');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'csrf-token';
        document.head.appendChild(meta);
    }
    meta.setAttribute('content', token);
    meta1.setAttribute('content', token);
}
//$(document).ready(function () {
//        var lastClickedElement = null;
//        function selectText(element) {
//            if (element && element.nodeType === Node.TEXT_NODE) {
//                var range = document.createRange();
//                range.selectNode(element);
//                var selection = window.getSelection();
//                selection.removeAllRanges();
//                selection.addRange(range);
//            }
//        }
//        $(document).on('click', 'div', function () {
//            if ($(this).contents().length === 1 && $(this).contents().first().get(0).nodeType === Node.TEXT_NODE) {
//                lastClickedElement = $(this).contents().first().get(0);
//            }
//        });
//
//        $(document).keydown(function (event) {
//            if (event.ctrlKey && event.keyCode === 65) { 
//                event.preventDefault();
//                selectText(lastClickedElement);
//            }
//        });
//    });

$(document).ready(function () {
    var lastClickedElement = null;
    function selectText(element) {
        var range = document.createRange();
        if (element.nodeType === Node.TEXT_NODE) {
            range.selectNodeContents(element);
        } else if (element.nodeType === Node.ELEMENT_NODE && element.tagName === 'INPUT') {

            element.setSelectionRange(0, element.value.length);
            return;
        }
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }

    $(document).on('click', 'div, input', function () {
        if ($(this).is('input')) {
            lastClickedElement = this;
        } else if ($(this).contents().length === 1 && $(this).contents().first().get(0).nodeType === Node.TEXT_NODE) {
            lastClickedElement = $(this).contents().first().get(0);
        }
    });
    $(document).keydown(function (event) {
        if (event.ctrlKey && event.keyCode === 65) {
            event.preventDefault();
            selectText(lastClickedElement);
        }
    });
});
//function showNotificationPanel() {
//    const panel = document.getElementById("NotificationPanel_dxp");
//
//    if (panel.style.display == "none") {
//        panel.style.display = "block"
//    } else {
//        panel.style.display = "none"
//    }
//}
//function notificationsData() {
//    $("#NotificationPanel_dxp").remove();
//
//    closesettingPannel();
//    $.ajax({
//        type: "POST",
//        url: 'getnotificationData',
//        data: {
//        },
//        success: function (response) {
//
////            var strData = response['str'];
//            var strData = response['Resulr'];
////            $("#NotificationPanel_dxp").html('');
//            $("#pageBody").append(strData);
//            showNotificationPanel();
//            $("#notificationindicatorID").show();
////            $("#notification").html(strData);
////            $("#notification").jqxPopover({
////                offset: {left: -50, top: 0},
////                arrowOffsetValue: 50,
////                title: "<h6>Notification</h6>",
////                width: 400,
////                height: 400,
////                theme: 'energyblue',
////                showCloseButton: true,
////                selector: $("#NotificationCountId")});
////
////            $("#notification").addClass('notificationClass');
//
//        },
//        error: function (xhr, status, error) {
//            console.error("Error:", error);
//        }
//    });
//}
//function NotificationViewDetails(seqNumber) {
//    showNotificationPanel();
//    showLoader();
//    $(".notificationClass").hide();
//
//    $.ajax({
//        type: "POST",
//        url: 'getitemDetails',
//        data: {
//            seqNumber: seqNumber
//        },
//        success: function (response) {
//            if (response != null) {
//
//
//                if ($(this).find('.notificationClass:visible').length) {
//                    $('.notificationClass').popover('hide');
//                }
//                $("#dialog").append(response);
//                $(".mcnButtonBlock").hide();
//                $("#dialog").dialog({resizable: false,
//                    title: (labelObject['Notification'] != null ? labelObject['Notification'] : 'Notification'),
//                    modal: true,
////            height: 'auto',
////            minHeight: 'auto',
//                    width: 1200,
//                    height: 600,
//                    fluid: true,
//                    buttons: [{
//                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
//                            click: function () {
//                                $(this).html("");
//                                try {
//                                    $(this).dialog("destroy");
//                                } catch (e) {
//
//                                }
//                                try {
//                                    $(this).dialog("close");
//                                } catch (e) {
//
//                                }
//
//
//
//                            }
//                        }],
//                    open: function () {
//                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                        $(".visionHeaderMain").css("z-index", "999");
//                        $(".visionFooterMain").css("z-index", "999");
//
//                    },
//                    beforeClose: function (event, ui)
//                    {
//                        $(".visionHeaderMain").css("z-index", "99999");
//                        $(".visionFooterMain").css("z-index", "99999");
//                    }
//                });
//            }
//
//            stopLoader();
//        },
//        error: function (xhr, status, error) {
//            console.error("Error:", error);
//        }
//    });
//
//}