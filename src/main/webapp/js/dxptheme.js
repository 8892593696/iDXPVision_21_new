/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var backDomainCumArray = [];
const isNullOrUndefined = o => o == null;
$(document).ready(function () {
//    $(".sidebar-dropdown").find(".dxpMaxMinMenuClass").on('mouseenter',function () {
//    $(".sidebar-submenu").slideUp(300);
//    var anchorTag = $(this).closest("a");
//  
//    if (anchorTag.parent().hasClass("active")) {
//      $(".sidebar-dropdown").removeClass("active");
//      anchorTag.parent().removeClass("active");
//    }
//    else {
//      $(".sidebar-dropdown").removeClass("active");
//      anchorTag.next(".sidebar-submenu").slideDown(300);
//      anchorTag.parent().addClass("active");
//    }
//  });

//    var timeOut = null;

    $(".sidebar-dropdown > a").on('click', function () {
        var $this = this;
        clearTimeout(timeOut);
//        timeOut = setTimeout(function () {
        $(".sidebar-submenu").slideUp(100);
        if ($($this).parent().hasClass("active")) {
            $(".sidebar-dropdown").removeClass("active");
            $($this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $($this).next(".sidebar-submenu").slideDown(100);
            $($this).parent().addClass("active");
        }
//        }, 1000)
    });





    $(".level2dropdown >a").on('click', function () {
        var $this = this;
        clearTimeout(timeOut);
//        timeOut = setTimeout(function () {
        $(".level2submenu").slideUp(100);
        if ($($this).parent().hasClass("active")) {
            $(".level2dropdown").removeClass("active");
            $($this).parent().removeClass("active");
        } else {
            $(".level2dropdown").removeClass("active");
            $($this).next(".level2submenu").slideDown(100);
            $($this).parent().addClass("active");
        }
//        }, 1000)
    });
    $(".level3dropdown >a").on('click', function () {
        var $this = this;
        clearTimeout(timeOut);
//        timeOut = setTimeout(function () {
        $(".level3submenu").slideUp(100);
        if ($($this).parent().hasClass("active")) {
            $(".level3dropdown").removeClass("active");
            $($this).parent().removeClass("active");
        } else {
            $(".level3dropdown").removeClass("active");
            $($this).next(".level3submenu").slideDown(100);
            $($this).parent().addClass("active");
        }
//        }, 1000)
    });
    $(".level4dropdown >a").on('click', function () {
        var $this = this;
        clearTimeout(timeOut);
//        timeOut = setTimeout(function () {
        $(".level4submenu").slideUp(100);
        if ($($this).parent().hasClass("active")) {
            $(".level4dropdown").removeClass("active");
            $($this).parent().removeClass("active");
        } else {
            $(".level4dropdown").removeClass("active");
            $($this).next(".level4submenu").slideDown(100);
            $($this).parent().addClass("active");
        }
//        }, 1000)
    });


//   $('.photos div').on('mouseenter mouseleave',function () {

//     $(this).find('img.nocolor').togglefade('slow');
// });

//  $(".level2dropdown").find(".dxpMaxMinSecondClass").on('mouseenter',function () {
//    $(".level2submenu").slideUp(300);
//    var anchorTag = $(this).closest("a");
//    if (anchorTag.parent().hasClass("active")) {
//      $(".level2dropdown").removeClass("active");
//      anchorTag.parent().removeClass("active");
//    }
//    else {
//      $(".level2dropdown").removeClass("active");
//      anchorTag.next(".level2submenu").slideDown(300);
//      anchorTag.parent().addClass("active");
//    }
//  });

    $(".level3dropdown").find(".dxpMaxMinThirdClass").on('click', function () {
        var $this = this;
        clearTimeout(timeOut);
//        timeOut = setTimeout(function () {
        $(".level3submenu").slideUp(100);
        var anchorTag = $($this).closest("a");
        if (anchorTag.parent().hasClass("active")) {
            $(".level3dropdown").removeClass("active");
            anchorTag.parent().removeClass("active");
        } else {
            $(".level3dropdown").removeClass("active");
            anchorTag.next(".level3submenu").slideDown(100);
            anchorTag.parent().addClass("active");
        }
//        }, 1000)
    });

//    $('#sidebar').on('mouseenter mouseleave', function () {
//
//            $('#sidebar').toggleClass('toggled');
//            $('.menuTitle').toggleClass("titleactive");
//            // $(".sidebarTitle").toggle();
//
//    });

    $('#sidebar').on('mouseenter', function () {
        if ($('.ui-widget-overlay').length > 0) {
            return;
        }
        clearTimeout(timeOut);
        timeOut = setTimeout(function () {
            $('#sidebar').removeClass('toggled');
            $('.menuTitle').removeClass("titleactive");
            // $(".sidebarTitle").toggle();
        }, 400)
    });

    $('#sidebar').on('mouseleave', function () {
        if ($('.ui-widget-overlay').length > 0) {
            return;
        }
        clearTimeout(timeOut);
        $('#sidebar').addClass('toggled');
        $('.menuTitle').addClass("titleactive");
        // $(".sidebarTitle").toggle();

    });


//  $('#show-sidebar').on('click', function () {
//    $('#sidebar').toggleClass('toggled');
//    $('.menuTitle').toggleClass("titleactive");
//    // $(".sidebarTitle").toggle();
//  });

    $(".moreThemesShowDiv").click(function () {
        $(".moreThemes").show();
        $(".moreThemesShowDiv").hide();
        $(".moreThemesHideDiv").show();
    });
    $(".moreThemesHideDiv").click(function () {
        $(".moreThemes").hide();
        $(".moreThemesHideDiv").hide();
        $(".moreThemesShowDiv").show();
    });
});




/* Theme Change Javascript Starts Here by Santhosh */
function changeTheme(event) {
    let userLogin = localStorage['userName'];
    var element = $('body');
//    element.toggleClass("dark-mode");
//    if ($(element).hasClass('dark-mode')) {
//        localStorage.setItem("localValue", userLogin.toUpperCase());
////        localStorage.setItem("theme", "dark-mode");
////        applyTheme(this, 'colorAsBgTheme', 'defalutBlackcoloredTheme');
//        $("#themesShowClass").hide();
//        $("#themeChangeSettingTitleId").text("Light Mode");
////        updateUserThemes("modeChange", "dark-mode")
//    } else {
        localStorage.setItem("localValue", "");
        localStorage.setItem("theme", "");
//        $("#themeChangeSettingTitleId").text("Dark Mode");
        $("#themesShowClass").show();
        updateUserThemes("modeChange", "Default")
//         applyTheme(this, 'colorAsBgTheme', 'defalutWhitecoloredTheme'); 
//    }
}
/* Theme Change Javascript Ends Here by Santhosh */

//$(window).load(function () {
//$(document).ready(function () {
//    let userLogin = localStorage['userName']
//    let userLogintoUpper = userLogin.toUpperCase();
//    let localValue = localStorage['localValue']
//    if (userLogintoUpper === localValue) {
//        let element = $('body');
//        element.addClass("dark-mode");
//        if ($(element).hasClass('dark-mode')) {
//            console.log("alreadyhasclass");
//            $("#themeChangeSettingTitleId").text("Light Mode");
//            
//        } else {
//            $('body').removeClass('dark-mode');
//            $("#themeChangeSettingTitleId").text("Dark Mode");
//        }
//    }
//});



/* Theme Change Javascript Ends Here by Santhosh */

function applyTheme($this, themeBackground, defaultColor, storedTheme = null) {
    $(".dxpLoginHeader").removeClass('lightthemeColors');
    var defaultColor = defaultColor;
    let userLogin = localStorage['userName'];
    let userLogintoUpper = userLogin.toUpperCase();
    let localValue = localStorage['localValue'];
    let themeItem = storedTheme || localStorage.getItem(`${userLogin}_headerTheme`);
    if (themeItem) {
        if (themeItem.startsWith("url(")) {
            $(".dxpLoginHeader").css("background", themeItem, "!important")
        } else {
            $(".dxpLoginHeader").css("background", themeItem, "!important");
        }
        $(".dxpLoginHeader").addClass('lightthemeColors');
    }
    if (themeBackground == 'colorAsBgTheme') {
        var currentEventBackgroundColor = $($this).children().css('background-color');
        $(".dxpLoginHeader").css("background", currentEventBackgroundColor);
        $(".dxpLoginHeader").addClass('lightthemeColors');
        try {
            updateUserThemes("backgroundTheme", currentEventBackgroundColor)
        } catch (e) {

        }
    } else if (themeBackground == 'imageAsBgTheme') {
        var currentEventBackgroundImage = $($this).children().attr("src");
        $(".dxpLoginHeader").css('background-image', 'url(' + currentEventBackgroundImage + ')');
        $(".dxpLoginHeader").addClass('lightthemeColors');
        try {
            updateUserThemes("backgroundTheme", 'url(' + currentEventBackgroundImage + ')')
        } catch (e) {

        }
    }
    if (themeBackground === "colorAsBgTheme" || themeBackground === "imageAsBgTheme") {
        let elementStyle = document.querySelector(".lightthemeColors");
        if (elementStyle && themeBackground === "colorAsBgTheme") {
            let style = $(elementStyle).attr("style");
            if (style) {
                const rgba = style.split(":")[1].trim().replace(/;$/, '');
                localStorage.setItem(`${userLogin}_headerTheme`, rgba);
            }
        } else if (elementStyle && themeBackground === "imageAsBgTheme") {
            let style = $(elementStyle).attr("style");
            if (style) {
                const url = style.split('url(')[1].split(')')[0];
                localStorage.setItem(`${userLogin}_headerTheme`, 'url(' + url + ')');
            }
        }
        applyImageColorFilter(themeBackground);
}


}
function resetToDefault() {
    let userLogin = localStorage['userName'];
    $(".dxpLoginHeader").css({
        "background": "inherit",
        "background-image": "inherit"
    });
    $(".dxpLoginHeader").removeClass('lightthemeColors white-bg');
    localStorage.removeItem(`${userLogin}_headerTheme`);
    $(".dxpLoginHeader img").css("filter", "none");
    $(".ImageIconThemeShadeRight").removeClass("activeAsbgTheme");
    $(".ImageIconThemeShadeLeft").removeClass("activeAsbgTheme");
    $(".ImageIconThemeShadeRight").removeClass("activeAsbgImg");
    $(".ImageIconThemeShadeLeft").removeClass("activeAsbgImg");
    updateUserThemes("backgroundTheme", "Default");
}

/*home themes code ends here by Rajasekhar on 28-12-2022*/

function removeUserProfilePic() {
    showLoader();
    var userProfileImage = $("#userProfileImage").attr("src");
    if (userProfileImage != null && userProfileImage != '' && userProfileImage != undefined
            && userProfileImage == 'images/Profile_Icon.svg') {
        stopLoader();
        closesettingPannel();
        showErrorPopupMessage(dialogSplitIconText('Profile Image not available to delete.', "H"), 'Message');
    } else {

        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            url: "removeUserProfilePic",
            cache: false,
            data: {
                userName: "",
            },
            success: function (response) {
                stopLoader();
                if (response != null && response != '' && response != undefined) {
//                $("#removeUserProfilePic").html('');
                    $("#imagePreview").html('');
                    $("#imagePreview").css("background-image", "");
                    $("#userProfileImage").attr("src", "images/Profile_Icon.svg");
                    sessionStorage.removeItem("profile_imgStr");
                    localStorage.removeItem("profile_imgStr");
                    $('#imagePreview').css("background-image", "url('images/Profile_Icon.svg')");
                    $('#userProfileIconLi .userMainProfile').attr('src', "images/Profile_Icon.svg");
                    sessionStorage.setItem('profile_imgStr', "images/Profile_Icon.svg");
                    if (response.indexOf('Profile Image Deleted Successfully') > -1) {
                        closesettingPannel();
                        showErrorPopupMessage(dialogSplitIconText('Profile Image Deleted Successfully', "H"), 'Message');

                    } else {
                        stopLoader();
                        closesettingPannel();
                        showErrorPopupMessage(dialogSplitIconText('Profile Image not available to delete', "H"), 'Message');
                    }
//                var modalObj = {
//                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
//                    body: response,
//                };
//                var buttonArray = [
//                    {
//                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
//                        click: function () {
//                        },
//                        isCloseButton: true
//                    }
//                ];
//                modalObj['buttons'] = buttonArray;
//                createModal("dataDxpSplitterValue", modalObj);
//                $(".modal-alogalog").addClass("modal-xs");
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                stopLoader();
            }
        });
    }
}


function fontUpperCase(value, savedValue) {
//    showLoader();
    console.log(value);
    if (value == "UpperCase") {
        $('body').addClass("UpperCase");
        $('body').removeClass("LowerCase");
        $('body').removeClass("Default");
        try {
            if (savedValue != null && savedValue != '' && savedValue != undefined) {
            } else {
                updateUserThemes("fontTypeChange", value);
            }
        } catch (e) {

        }
    }
    if (value == "LowerCase") {
        $('body').addClass("LowerCase");
        $('body').removeClass("UpperCase");
        $('body').removeClass("Default");
        try {
            if (savedValue != null && savedValue != '' && savedValue != undefined) {
            } else {
                updateUserThemes("fontTypeChange", value);
            }
        } catch (e) {

        }
    }
    if (value == "Default") {
        $('body').addClass("Default");
        $('body').removeClass("UpperCase");
        $('body').removeClass("LowerCase");
        try {
            if (savedValue != null && savedValue != '' && savedValue != undefined) {
            } else {
                updateUserThemes("fontTypeChange", value);
            }
        } catch (e) {

        }
    }
}


function changeFontSize(size, savedSize) {
    try {
        if (size == 'Smaller') {
            document.body.classList.add('smallerFontClass');
            document.body.classList.remove('mediumFontClass');
            document.body.classList.remove('largeFontClass');
            try {
                if (savedSize != null && savedSize != '' && savedSize != undefined) {
                } else {
                    updateUserThemes("fontSizeChange", size);
                }
            } catch (e) {

            }
        } else if (size == 'Medium') {
            document.body.classList.add('mediumFontClass');
            document.body.classList.remove('smallerFontClass');
            document.body.classList.remove('largeFontClass');
            try {
                if (savedSize != null && savedSize != '' && savedSize != undefined) {
                } else {
                    updateUserThemes("fontSizeChange", size);
                }
            } catch (e) {

            }
        } else if (size == 'Large') {
            document.body.classList.add('largeFontClass');
            document.body.classList.remove('mediumFontClass');
            document.body.classList.remove('smallerFontClass');
            try {
                if (savedSize != null && savedSize != '' && savedSize != undefined) {
                } else {
                    updateUserThemes("fontSizeChange", size);
                }
            } catch (e) {

            }
        } else {
            document.body.classList.remove('largeFontClass');
            document.body.classList.remove('smallerFontClass');
            document.body.classList.remove('mediumFontClass');
            try {
                if (savedSize != null && savedSize != '' && savedSize != undefined) {
                } else {
                    updateUserThemes("fontSizeChange", 'Default');
                }
            } catch (e) {

            }
        }
    } catch (e) {
        document.body.classList.remove('largeFontClass');
        document.body.classList.remove('smallerFontClass');
        document.body.classList.remove('mediumFontClass');
        try {
            if (savedSize != null && savedSize != '' && savedSize != undefined) {
            } else {
                updateUserThemes("fontSizeChange", 'Default');
            }
        } catch (e) {

        }
    }

}


//The below function is for changing the  font size;
function menuFontSizeData(List, val) {

    if (List = "Menu") {

        if (val != null && val != '' && val != undefined && val == 'Smaller') {
            $(".menuTitle").css("font-size", "12px", '!important');
            $(".menuTitle").addClass("menuCaptalizeClass");


        } else if (val != null && val != '' && val != undefined && val == 'Medium') {
            $(".menuTitle").css("font-size", "medium", '!important');
        } else if (val != null && val != '' && val != undefined && val == 'Large') {
            $(".menuTitle").css("font-size", "x-large", '!important');

        } else if (val != null && val != '' && val != undefined && val == 'Reset') {
            $(".menuTitle").css("font-size", "13px", '!important');
        }
    }
}
function ChangingFontSize(type, value) {
    if (type == 'Content') {
        if (value != '' && value != undefined && value == 'Smaller') {
            $('.page-body-content').find('div').children().children().children().addClass('smallerFontSize');
            $('.page-body-content').find('div').children().children().children().children().removeClass('mediumFontSize');
            $('.page-body-content').find('div').children().children().children().children().removeClass('largerFontSize');
            $(".jqx-grid-cell").css("font-size", '12px', "!important");
            $('#DXP_DEFAULT_PRODUCT_GRID').jqxGrid({rowsheight: 20});
            $('#firstDxpSplitter').jqxSplitter({panels: [{size: 60}]});


        } else if (value != '' && value != undefined && value == 'Medium') {
            $('.page-body-content').find('div').children().children().children().children().addClass('mediumFontSize');
            $('.page-body-content').find('div').children().children().children().children().removeClass('smallerFontSize');
            $('.page-body-content').find('div').children().children().children().children().removeClass('largerFontSize');
            $(".jqx-grid-cell").css("font-size", '14px', "!important");
            $('#DXP_DEFAULT_PRODUCT_GRID').jqxGrid({rowsheight: 23});
            $('#firstDxpSplitter').jqxSplitter({panels: [{size: 65}]});


        } else if (value != '' && value != undefined && value == 'Large') {
            $('.page-body-content').find('div').children().children().children().children().removeClass('mediumFontSize');
            $('.page-body-content').find('div').children().children().children().children().removeClass('smallerFontSize');
            $('.page-body-content').find('div').children().children().children().addClass('largerFontSize');
            $(".jqx-grid-cell").css("font-size", '16px', "!important");
            $('#DXP_DEFAULT_PRODUCT_GRID').jqxGrid({rowsheight: 25});
            $('#firstDxpSplitter').jqxSplitter({panels: [{size: 120}]});



        } else if (value != '' && value != undefined && value == 'Reset') {
            $('.page-body-content').find('div').children().children().children().children().removeClass('mediumFontSize');
            $('.page-body-content').find('div').children().children().children().children().removeClass('smallerFontSize');
            $('.page-body-content').find('div').children().children().children().children().removeClass('largerFontSize');
            $('#DXP_DEFAULT_PRODUCT_GRID').jqxGrid({rowsheight: 28});
            $('#firstDxpSplitter').jqxSplitter({panels: [{size: 75}]});
            $(".jqx-grid-cell").css("font-size", '12px', "!important");

        }
    }

}

function setuserProfileUpdateIcon(input) {
    if (input.files && input.files[0]) {
        if (input.files[0].size <= 5000000) {
            var reader = new FileReader();
            reader.onload = function (e) {
                showLoader();
                $.ajax({
                    type: 'POST',
                    dataType: 'JSON',
                    url: 'setuserProfileUpdateIcon',
                    traditional: true,
                    cache: false,
                    async: true,
                    data: {
                        imgURL: e.target.result,
//                        userName: $('#userProfileImgDiv').attr('objstr'),
                        fileName: input.files[0].name
                    },
//                    data: {
//                        imgURL: e.target.result,
//                        userName: $('#userProfileImgDiv').attr('objstr'),
//                        fileName: input.files[0].name
//                    },
                    success: function (data) {
                        stopLoader();
                        if (data['flag'] === true) {
                            var message = data['message'] || 'Operation was successful.';
                            $("#dialog").html(message);
                            $("#dialog").dialog({
                                resizable: false,
                                title: labelObject['Message'] || 'Message',
                                modal: true,
                                height: 'auto',
                                minHeight: 'auto',
                                minWidth: 300,
                                maxWidth: 'auto',
                                buttons: [
                                    {
                                        text: labelObject['Ok'] || 'Ok',
                                        click: function () {
                                            $(this).html("");
                                            try {
                                                $(this).dialog("close");
                                            } catch (e) {
                                                console.error('Error closing dialog:', e);
                                            }
                                        }
                                    }
                                ]
                            });
                            $('#imagePreview').css('background-image', 'url(' + data['image'] + ')');
                            $('#userProfileIconLi .userMainProfile').attr('src', data['image']);                                                       //commented
                            localStorage.setItem("profile_imgStr", data['image']);
                            $('#imagePreview').hide();
                            $('#imagePreview').fadeIn(650);
                            try {
                                var $el = $(input);
                                $el.wrap('<form>').closest('form').get(0).reset();
                                $el.unwrap();
                            } catch (ex) {
                                console.error('Error resetting input field:', ex);
                            }

                        } else if (data['flag'] === false) {
                            $("#dialog").html(data['message']);
                            $("#dialog").dialog({
                                resizable: false,
                                title: labelObject['Message'] || 'Message',
                                modal: true,
                                height: 'auto',
                                minHeight: 'auto',
                                minWidth: 300,
                                maxWidth: 'auto',
                                buttons: [
                                    {
                                        text: labelObject['Ok'] || 'Ok',
                                        click: function () {
                                            $(this).html("");
                                            try {
                                                $(this).dialog("destroy");
                                            } catch (e) {
                                                console.error('Error destroying dialog:', e);
                                            }
                                            try {
                                                $(this).dialog("close");
                                            } catch (e) {
                                                console.error('Error closing dialog:', e);
                                            }
                                        }
                                    }
                                ],
                                open: function () {
                                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                    $(".visionHeaderMain").css("z-index", "999");
                                    $(".visionFooterMain").css("z-index", "999");
                                },
                                beforeClose: function () {
                                    $(".visionHeaderMain").css("z-index", "99999");
                                    $(".visionFooterMain").css("z-index", "99999");
                                }
                            });
                            try {
                                var $el = $(input);
                                $el.wrap('<form>').closest('form').get(0).reset();
                                $el.unwrap();
                            } catch (ex) {
                                console.error('Error resetting input field:', ex);
                            }

                        } else {
                            $("#dialog").html(data['message'] || 'An unknown error occurred.');
                            $("#dialog").dialog({
                                resizable: false,
                                title: labelObject['Message'] || 'Message',
                                modal: true,
                                height: 'auto',
                                minHeight: 'auto',
                                minWidth: 300,
                                maxWidth: 'auto',
                                buttons: [
                                    {
                                        text: labelObject['Ok'] || 'Ok',
                                        click: function () {
                                            $(this).html("");
                                            try {
                                                $(this).dialog("close");
                                            } catch (e) {
                                                console.error('Error closing dialog:', e);
                                            }
                                        }
                                    }
                                ]
                            });
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        stopLoader();
                        try {
                            var $el = $(input);
                            $el.wrap('<form>').closest('form').get(0).reset();
                            $el.unwrap();
                        } catch (ex) {

                        }
                    }
                });
            }
            reader.readAsDataURL(input.files[0]);

        } else {
            try {
                var $el = $(input);
                $el.wrap('<form>').closest('form').get(0).reset();
                $el.unwrap();
            } catch (ex) {

            }
//            $("#dialog1").html('Max size of file is 5 MB');
//            $("#dialog1").dialog({ resizable: false,
//                title: 'Image Size',
//                modal: true,
//                width: 300,
//                height: "auto",
//                maxHeight: 100,
//                fluid: true,
//                dialogClass: "dialogFactsAndStatsDiv event-Open_feedBack-Dialog"
//            });
            closesettingPannel();
            var buttonArray = [
                {
                    Ok: function () {
                        closesettingPannel();
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                }

            ];
            showButtonPopupMessage("Max size of file is 5 MB", buttonArray, "Message");
        }
    }
}



function updateUserThemes(themetype, themedata) {
    try {
        if (themetype != null && themetype != '' && themetype != undefined
                && themedata != null && themedata != '' && themedata != undefined) {
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'html',
                url: "updateUserThemes",
                cache: false,
                data: {
                    themetype: themetype,
                    themedata: themedata,
                },
                success: function (response) {
                    stopLoader();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    stopLoader();
                }
            });
        }
    } catch (e) {
        console.log(e);
    }

}


function applyUsersSavedThemes(uisaveddisplaymode, uisavedtheme, uisavedfonttype, uisavedfontsize) {
    let userLogin = localStorage['userName'];

    try {
        try {
            if (uisaveddisplaymode != null && uisaveddisplaymode != '' && uisaveddisplaymode != undefined
                    && uisaveddisplaymode != 'Default') {
                let element = $('body');
//                element.addClass("dark-mode");
                localStorage.setItem("localValue", userLogin.toUpperCase());
//                localStorage.setItem("theme", "dark-mode");
//                $("#themeChangeSettingTitleId").text("Light Mode");
                $("#themesShowClass").hide();
            } else {
//                $('body').removeClass('dark-mode');
//                $("#themeChangeSettingTitleId").text("Dark Mode");
                localStorage.setItem("localValue", "");
                localStorage.setItem("theme", "");
//                $("#themeChangeSettingTitleId").text("Dark Mode");
                $("#themesShowClass").show();
            }
        } catch (et) {

        }


        try {
            if (uisavedtheme != null && uisavedtheme != '' && uisavedtheme != undefined
                    && uisavedtheme != 'Default') {
                applyTheme(null, null, null, uisavedtheme);
                localStorage.setItem(`${userLogin}_headerTheme`, uisavedtheme);
            } else {
                resetToDefault();
            }

        } catch (et) {

        }


        try {
            if (uisavedfonttype != null && uisavedfonttype != '' && uisavedfonttype != undefined) {
                fontUpperCase(uisavedfonttype, uisavedfonttype)
                localStorage.setItem(`${userLogin}_fonttype`, uisavedfonttype);
            }

        } catch (et) {

        }
        try {
            if (uisavedfontsize != null && uisavedfontsize != '' && uisavedfontsize != undefined) {
                changeFontSize(uisavedfontsize, uisavedfontsize);
                localStorage.setItem(`${userLogin}_fontsize`, uisavedfontsize);
            }

        } catch (et) {

        }
    } catch (et) {

    }
}
function applyImageColorFilter(themeBackground) {
    let headerImages = $(".dxpLoginHeader img");
    if (themeBackground === "colorAsBgTheme") {
        headerImages.css("filter", "grayscale(100%) brightness(0.5) invert(0)");
        $(".ImageIconThemeShadeRight").addClass("activeAsbgTheme");
        $(".ImageIconThemeShadeLeft").addClass("activeAsbgTheme");
    } else if (themeBackground === "imageAsBgTheme") {
        headerImages.css("filter", "brightness(0) invert(1)");
        $(".ImageIconThemeShadeRight").addClass("activeAsbgImg");
        $(".ImageIconThemeShadeLeft").addClass("activeAsbgImg");

    } else {
        headerImages.css("filter", "none");
    }
}
function handleThemeAction(checkbox) {

    let highlightedElement = $('.highlightCard');
    if (checkbox == null || checkbox == undefined || checkbox === '') {
        checkbox = $("#cb-switch");
        checkbox = checkbox.is(":checked");
    }
    var clickfunc = '';
    var role = localStorage.getItem("currentRole");
    if (checkbox === true) {
        localStorage.setItem("defaultFioriEnableFlag", "Y");
        var currentDomain = $("#currentDomain").val();
        if (currentDomain != null && currentDomain != undefined && currentDomain != '') {
            clickfunc = $("#" + currentDomain + "-attr").val();
            try {
                clickfunc = clickfunc.split(",");
            } catch (e) {

            }
        } else {
            if (role != null && role != undefined && role != '' && role.indexOf("_BNAC_") > -1 || role.indexOf("_ICF_") > -1 || role.indexOf("PM_") > -1) {
                currentDomain = "ASSET";
            } else {
                currentDomain = "PRODUCT";
            }

            clickfunc = $("#" + currentDomain + "-attr").val();
            try {
                clickfunc = clickfunc.split(",");
            } catch (e) {

            }
        }
        $("#dxpSearchTab").hide()
        $("#dxp1TabsWithGrid").hide()
        $("#dxpFromTab").hide()
        $("#dxp2TabsWithGrid").hide()
        $("#dxpGridTab").hide()  
        $("#dxpClassesTab").hide()
        $("#dxpClusterTab").hide()
        $("#dxpClusterTab2").hide()
        $("#dxpAnalyticsTab").hide()
        $("#dxpconsolidationTab").hide()
        showSelectedTabContent(event, "dxpHomeTab", "dxpHomeContent", "Home");
        toggleTabsAndMenus(event);
//        getDomaincomponent(clickfunc[0], clickfunc[1], clickfunc[2], clickfunc[3], clickfunc[4], clickfunc[5]);
        console.log("perform some action");
        $("body").addClass("fiorithemeClass");
         var themeClass = localStorage.getItem("themeClass");
        $("body").addClass(themeClass);	
        try {
            if ($(event.currentTarget).closest(".toggle-switch").length) {
                location.reload();
                return;
            }
        } catch (e) {
        }

    } else {
        localStorage.setItem("defaultFioriEnableFlag", "N");//27-03-2025
        location.reload();
//        var currentDomain = $("#currentDomain").val();
//        if (currentDomain != null && currentDomain != undefined && currentDomain != '') {
//            clickfunc = $("#" + currentDomain + "-attr").val();
//            clickfunc = clickfunc.split(",");
//        } else {
//            currentDomain = "PRODUCT";
//            clickfunc = $("#" + currentDomain + "-attr").val();
//            clickfunc = clickfunc.split(",");
//        }
//        getDomaincomponent(clickfunc[0], clickfunc[1], clickfunc[2], clickfunc[3], clickfunc[4], clickfunc[5]);
//        console.log("persome some other action");
//        $("body").removeClass("fiorithemeClass");
    }

    if (highlightedElement.length > 0) {
        highlightedElement.addClass("highlightCard");
    }
}
function generateHomeTilesStr(domain, role, componentType, searchId, subscriptionflag, title) {

    $.ajax({
        datatype: "json",
        type: "POST",
        async: false,
        url: 'generateHomeTilesStr',
        data: {
            domain: domain,
            'role': role,
            'componentType': componentType,
            searchId: searchId,
            subscriptionflag: subscriptionflag,
            title: title
        },
        traditional: true,
        cache: false,

        success: function (response) {
            $("#showdomainBasedCards").html(response);
        }
    });
}
function showDataSubList(id, getselectedDomain, getselectedMenulevel, highLevelMenu) {
    $("#" + id).slideToggle();
    showLoader();
    var getselectedMenulevelName = getselectedMenulevel;
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    $("#sapfioriwrappsubmenuID").html('');
    $(".fioriBreadCrum ul").append("<li>" + getselectedMenulevelName + "</li>");
    if (fioriThemeCheck) {
        try {
            var basketTitle = $(event.currentTarget).text();
            basketTitle = (basketTitle != null && basketTitle != "" && basketTitle != undefined) ? basketTitle : getselectedMenulevel;
            var backClass = $(event.currentTarget).attr("class");
            firorMenuPopoverText(basketTitle);
            $(".fioriTabTitleDiv h4").text(basketTitle);
            if (backClass == null || !backClass.includes("Back")) {
                const firorDomainObj = {};
                firorDomainObj[basketTitle] = `showDataSubList(${id}, ${getselectedDomain}, ${getselectedMenulevel}, ${highLevelMenu})`;
                backDomainCumArray.push(firorDomainObj);
            }


        } catch (e) {
            console.log(e);
        }
    }
    $.ajax({
        datatype: "json",
        type: "POST",
        async: true,
        url: 'getPopOverFourthMenuList',
        data: {
            getselectedMenulevel: getselectedMenulevel,
            getselectedDomain: getselectedDomain,
            fioriThemeFlag: fioriThemeCheck,
            highLevelMenu: highLevelMenu
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            console.log(response.menustr);
            $("#sapfioriwrappsubmenuID").html(response.menustr);

        }
    });
}

function showSubMenuItems(elem, highLevelMenu, domain, submenutitle) {
    showLoader();
    var targetmenuSubmenuID = $(elem);
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    try {
        var currentId = $(event.currentTarget).attr("id");
    } catch (e) {

    }
    if (fioriThemeCheck) {
        $(".homeTabsContentlistwrapper").hide();
        $("#dxpSearchTab").hide()
        $("#dxp1TabsWithGrid").hide()
        $("#dxpFromTab").hide()
        $("#dxp2TabsWithGrid").hide()
        $("#dxpGridTab").hide()
        $("#dxpClassesTab").hide()
        $("#dxpClusterTab").hide()
        $("#dxpClusterTab2").hide()
        $("#dxpAnalyticsTab").hide()
        $("#dxpconsolidationTab").hide()
        $(".pilogFioriBackBtnDiv").show();
    }
    if ($("#submenu").length != 0) {
        $(".fioriBreadCrum li:contains('" + submenutitle + "')").nextAll().remove();
        $("#submenu").remove();
    }

    $("#sapfioriwrappsubmenuID").html('');
    if (fioriThemeCheck) {
        $(".fioriBreadCrum ul").append("<li id='submenu' onclick=\"showSubMenuItems(this, '" + highLevelMenu + "', '" + domain + "', '" + submenutitle + "')\">" + submenutitle + "</li>");
        try {
            var basketTitle = $(event.currentTarget).text();
            var backClass = $(event.currentTarget).attr("class");
            basketTitle = (basketTitle != null && basketTitle != undefined && basketTitle != "") ? basketTitle : submenutitle
            firorMenuPopoverText(basketTitle);
            $(".fioriTabTitleDiv h4").text(basketTitle);
            firorMenuPopoverText(basketTitle);
            if (!(backClass != null && backClass != undefined) || !backClass.includes("Back")) {
                var firorDomainObj = {};
                firorDomainObj[basketTitle] = `showSubMenuItems("", ${highLevelMenu}, ${domain}, ${submenutitle})`;
                backDomainCumArray.push(firorDomainObj);
            }
        } catch (e) {
            console.log(e);
        }

    } else {
        $(".fioriBreadCrum ul").append("<li>" + submenutitle + "</li>");
        if ($("#" + currentId).find(".subMenuListPopoverClass").length > 0) {
            $("#" + currentId).find(".subMenuListPopoverClass").toggle();
            stopLoader();
            return;
        }

    }
    $.ajax({
        datatype: "json",
        type: "POST",
        async: true,
        url: 'getPopOverMenuList',
        data: {
            highLevelMenu: highLevelMenu,
            domain: domain,
            fioriThemeFlag: fioriThemeCheck,
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            console.log(response.menustr);
            if (fioriThemeCheck) {
                $("#showdomainBasedCards").html(response.menustr);
            } else {
                $("#" + currentId).append(response.menustr);
            }

        }
    });
}
function deleteAttachedFile(fileId) {
    $("#dialog3").html("Are you sure you want to delete this file?");
    $("#dialog3").dialog({
        resizable: false,
        height: "auto",
        title: "Delete",
        width: 400,
        modal: true,
        buttons: {
            "Delete": function () {
                showLoader();
                $.ajax({
                    type: "POST",
                    url: 'deleteVideoFile',
                    traditional: true,
                    cache: false,
//                     dataType: 'html',
                    data: {'TemplateID': fileId},
                    success: function (response) {
                        stopLoader();
                        $("#dialog3").dialog({
                            title: "Success",
                            resizable: false,
                            height: "auto",
                            width: 400,
                            modal: true,
                            open: function () {
                                $(this).text(response);
                            },
                            buttons: {
                                OK: function () {
                                    getAIDataView('MM_DH_TAB_DATA_DAP_PROCESS');
                                    $(this).dialog("close");

                                }
                            }
                        });
                    },
                    error: function (error) {
                        console.error("Error deleting file:", error);
                        alert("Failed to delete the file. Please try again.");
                    }
                });
                $(this).dialog("close");
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        }
    });
}
function addFilter(gridResultObj, value) {
    var gridId = gridResultObj['gridId'];
    var grid = $("#" + gridId);
    grid.jqxGrid("clearfilters");
    setTimeout(function () {
        showLoader();
    }, 50)

    setTimeout(function () {

        var selectedColumns = gridResultObj['colsArray'].filter(item =>
            (item.includes("NO") || item.includes("TERM") || item.includes("DES")) && !item.includes("HIDDEN")
        );

        grid.jqxGrid('beginupdate');
        showLoader();

        selectedColumns.forEach(columnName => {
            var filtergroup = new $.jqx.filter();
            var filtercondition = 'contains';
            var filter1 = filtergroup.createfilter('stringfilter', value, filtercondition);
            filtergroup.addfilter(1, filter1);
            grid.jqxGrid('addfilter', columnName, filtergroup);
        });

        grid.jqxGrid('applyfilters');
        grid.jqxGrid('endupdate');

        stopLoader();
    }, 500)

}
function getFiroriSearchInputValue() {
    const getSearchValue = event.target.value.toLowerCase();
    const menuItems = Array.from(document.getElementsByClassName("fioriMenuSingleItem"));
    let anyMatch = false;
    menuItems.map(menuItem => {
        const submenuTextElement = menuItem.querySelector(".submenuText");
        const textValue = submenuTextElement ? submenuTextElement.textContent.trim().toLowerCase() : "";
        if (textValue.includes(getSearchValue)) {
            menuItem.style.display = "";
            anyMatch = true;
        } else {
            menuItem.style.display = "none";
        }
    });
    const noRecordsDiv = $("#norecordsFoundDiv");
    if (!anyMatch) {
        noRecordsDiv.text("No Results Found!");
        $("#sapfioriwrappsubmenuID").css("padding", '0px');
        noRecordsDiv.css({
            "color": "#32363a",
            "font-size": "14px",
            "text-align": "center",
            "width": "99%",
            "margin": "0 auto",
            "padding": "6px",
            "background-color": "#fff",
            "border": "1px solid transparent",
            "box-shadow": "0 0 0 .0625rem rgba(0, 0, 0, 0.1), 0 .125rem .5rem 0 rgba(0, 0, 0, 0.1)",
        });
    } else {
        noRecordsDiv.text("");
        $("#sapfioriwrappsubmenuID").css("padding", '15px');
        noRecordsDiv.css({
            "padding": "0",
            "background-color": "inherit",
            "border": "none",
            "box-shadow": "none",
            "border-radius": "0"
        });
    }
}

//theme openUI5 change start
function getFioriThemeSettings() {
    $.ajax({
        type: "POST",
        url: 'getHeaderMenuPopver',
        traditional: true,
        cache: false,
        dataType: 'json',
        data: {},
        success: function (response) {
            if (response != null) {
                var resultStr = response['result']
                var spanImage = $("#headerLogTextId");
                var templateDiv = `<div class="popover fiorithemeSettingPopOver" role="tooltip" id=''><div class="arrow"></div><div class='popOverheader'><div class='popoverTitle'><h3 class="popover-header">HOME</h3></div> <div class='' onclick = closefioriPopOver('headerLogTextId')><img src='images/close.png' /></div></div><div class="popover-body"></div></div>`;
                spanImage.popover({
                    animation: true,
                    title: 'HOME',
                    maxwidth: '600',
                    trigger: 'click',
                    content: resultStr,
                    template: templateDiv,
                    html: true,
                    sanitize: false,
                    boundary: 'viewport',
                    placement: 'auto'});
                spanImage.popover('show');
                $(".listFiltersPopeverul li").eq(0).trigger("click");
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("Error fetching data:", textStatus, errorThrown);
        }
    });
}
function closefioriPopOver(popOverID) {
    try {
        $("#" + popOverID).popover('dispose');
        if ($("#" + popOverID).hasClass("jqx-popover")) {
            $("#" + popOverID).jqxPopover("close");
        }

    } catch (e) {
    }
}

function getFiriorPopeverDomain(domain, role, componentType, searchId, subscriptionflag, title, nogridFlag) {
    if (!$(event.currentTarget).hasClass("fioriMenuPopverSingleItem")) {
        $(".listFiltersPopeverul .outerWidthcolPopever ").removeClass("activePopoverClass")

        if ($(event.currentTarget).hasClass("outerWidthcolPopever")) {
            $(event.currentTarget).addClass("activePopoverClass")
        } else {
            $(".listFiltersPopeverul li").eq(0).addClass("activePopoverClass");
        }
    }
    $("#dxpFioriContent").hide();
    $("#dxpSearchContent").hide();
    $("#dxpHomeContent").show();
    $.ajax({
        url: 'getHeaderMenuPopver',
        type: "POST",
        datatype: "html",
        data: {
            domain: domain,
            menuId: componentType,
            role: role,
            searchId: searchId,
            title: title,
        },
        success: function (response) {
            stopLoader();
            var menustr = response['result'];
            $("#showdomainPopeverCards").html(menustr);

        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });
}
function firorMenuPopoverText(title) {
    var popoverId = "headerLogTextId";
    $("#" + popoverId).text(title)
    closefioriPopOver(popoverId);
}
function moveBackFn() {
    var onclickStr = "";
    $("#dxpFioriContent").hide();
    $("#dxpSearchContent").hide();
    $("#dxpHomeContent").show();

    if (!Array.isArray(backDomainCumArray)) {
        console.error("backDomainCumArray is not an array");
        return;
    }

    let index = backDomainCumArray.length - 1;
    
    if (index >= 0) {
        const lastItem = backDomainCumArray[index-1];

        if (lastItem && typeof lastItem === 'object') {

            let onclickArr = Object.entries(lastItem);
            onclickStr = onclickArr[0][1];
        } else {
            onclickStr = lastItem;
        }
        backDomainCumArray.pop();
    }



    if (onclickStr) {
        try {
            let functionNameMatch = onclickStr.match(/^([a-zA-Z0-9_]+)\(([^)]*)\)$/);

            if (functionNameMatch) {
                let functionName = functionNameMatch[1];
                let argsString = functionNameMatch[2];

                let args = argsString
                        ? argsString.split(',').map(arg => arg.trim().replace(/^['"]|['"]$/g, ''))
                        : [];


                if (typeof window[functionName] === 'function') {
                    window[functionName](...args);
                } else {
                    console.error('Function not found:', functionName);
                }
            } else {
                console.error('Invalid function format:', onclickStr);
            }
        } catch (e) {
            console.error('Error executing function:', e);
        }
    } else {
        var homeText = $("#headerLogTextId").attr("data-orignial");
        firorMenuPopoverText(homeText);
        $("#firorHomeClick").remove();
        $("body").append("<input type='hidden' id ='firorHomeClick' value='Home'/>");
        showSelectedTabContent(null, 'dxpHomeTab', 'dxpHomeContent');
        $(".pilogFioriBackBtnDiv").hide();
        setTimeout(function () {
            $("#firorHomeClick").remove();
        }, 1000);
    }
}

//theme openUI5 change end

function firortabsActiveMenuScroll() {
    const tabs = document.querySelectorAll(".homeTabsContentlistwrapper li");
    const sections = document.querySelectorAll(".sapfioriMainwrappsubmenu");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeTab = document.querySelector(`[data-target="${entry.target.id}"]`);
                if (activeTab) {
                    document.querySelectorAll(".homeTabsContentlistwrapper li").forEach(tab => tab.classList.remove("active"));
                    activeTab.classList.add("active");
                }

            }
        });
    }, {
        root: null,
        rootMargin: "48px",
        threshold: 0.6
    });

    sections.forEach(section => observer.observe(section));

    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelectorAll(".homeTabsContentlistwrapper li").forEach(tab => tab.classList.remove("active"));

            event.currentTarget.classList.add("active");

            const targetSectionId = event.currentTarget.getAttribute('data-target');
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                setTimeout(() => {
                    observer.unobserve(targetSection);
                    observer.observe(targetSection);
                }, 300);
            }
        });
    });

}
function showTimelineDigSignature(timelineDigSignature,event){
    $("#"+timelineDigSignature).toggle();
}
function changeOpenUiTheme(theme) { 
    if (theme === 'fiorithemeClassQuartzLight') {
        if ($("body").hasClass("fiorithemeClass")) {
            $("body").removeClass("fiorithemeClassDark");
            $("body").removeClass("quartzLiteThemeClass");
            $("body").addClass("quartzLiteThemeClass");
            $("#SAPmorningHorizon").hide();
            $("#SAPeveningHorizon").hide();
            $("#SAPquartzLite").show();
        }
    } else if (theme === 'fiorithemeClass') {
        if ($("body").hasClass("quartzLiteThemeClass")) {
            $("body").removeClass("quartzLiteThemeClass");
            $("body").removeClass("fiorithemeClassDark");
            $("body").addClass("fiorithemeClass");
            $("#SAPmorningHorizon").show();
            $("#SAPeveningHorizon").hide();
            $("#SAPquartzLite").hide();
        } else if ($("body").hasClass("fiorithemeClassDark")) {
            $("body").removeClass("quartzLiteThemeClass");
            $("body").removeClass("fiorithemeClassDark");
            $("body").addClass("fiorithemeClass");
            $("#SAPmorningHorizon").show();
            $("#SAPeveningHorizon").hide();
            $("#SAPquartzLite").hide();
        }
    } else if (theme === 'fiorithemeClassDark') {
        if ($("body").hasClass("fiorithemeClass")) {
            $("body").removeClass("fiorithemeClassDark");
            $("body").removeClass("quartzLiteThemeClass"); 
            $("body").addClass("fiorithemeClassDark");
            $("#SAPeveningHorizon").show(); 
            $("#SAPmorningHorizon").hide();
            $("#SAPquartzLite").hide();
        } else if ($("body").hasClass("quartzLiteThemeClass")) {
            $("body").removeClass("fiorithemeClassDark");
            $("body").removeClass("quartzLiteThemeClass");
            $("body").addClass("fiorithemeClassDark");
            $("#SAPeveningHorizon").show();
            $("#SAPmorningHorizon").hide();
            $("#SAPquartzLite").hide();
        }
    }
}
//DIGITAL SIGNATURE START
function showDigitalSignature() {
    var userName = $("#ssUsername").val();
    var htmlStr = `
    <div class="digitalSignPadWrapper"><div class="dsHeader"><h6>User : ${userName}</h6><div class="color-picker">
        <span Class='signInput ' >
        <input type="color" class="digitalSignIcon" data-att-signature = "&#xe0c1" id="pen-color" value="#000000" />
    </span>
    </div></div> 
    <canvas class='signature-component' id="signature"></canvas>
    <div class="buttonsDiv">
        <button class="signatureBtnClass" id="clear-signature">Clear Signature</button>
        <button class="signatureBtnClass" id="save-signature">Save Signature</button>
        <button class="signatureBtnClass" id="preview-signature">Preview Signature</button>
       <button class="signatureBtnClass" id="upload-signature">Upload Signature</button>
        <input id='signatureInputFile'type="file" class="signFileClass" accept=".png, .jpg, .jpeg" />
    </div>
    <div id='errorSignatureMsg'></div>
    <div id="saved-image" class="signPreviewDivclass"></div></div>`;
    $("#dialog1").html(htmlStr);
    $("#dialog1").dialog({
        resizable: false,
        title: labelObject['Digital Signature'] != null ? labelObject['Digital Signature'] : 'Digital Signature',
        modal: true,
        width: 500,
        height: 500,
        fluid: true,
        buttons: [
            {
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    stopLoader();
                    $(this).dialog("destroy");
                    $("#dialog1").html('');
                }
            }
        ],
        close: function (event, ui) {
            $(this).dialog("destroy");
            $("#dialog1").html('');
        },
        open: function () {
            var canvas = document.getElementById("signature");
            var signaturePad = new SignaturePad(canvas);

            function resizeCanvas() {
                const ratio = Math.max(window.devicePixelRatio || 1, 1);
                canvas.width = canvas.offsetWidth * ratio;
                canvas.height = canvas.offsetHeight * ratio;
                canvas.getContext("2d").scale(ratio, ratio);
                signaturePad.clear(); // Clear the content after resizing
            }
            window.addEventListener("resize", resizeCanvas);
            resizeCanvas();

            $('#clear-signature').on('click', function () {
                signaturePad.clear();
                $('#saved-image').html("");
            });

            $('#preview-signature').on('click', function () {
                if (signaturePad.isEmpty()) {
                    alert("Please provide a signature first.");
                } else {
                    var dataURL = signaturePad.toDataURL();
                    $('#saved-image').html('<h4>Preview :</h4><img src="' + dataURL + '" alt="Saved Signature" />');
                    $('#saved-image img').css({
                        "padding": "4px",
                        "border": "1px solid #ddd",
                        "border-radius": "0.5rem"
                    });
                }
            });
            $('#save-signature').on('click', function () {
                if (!signaturePad.isEmpty()) {
                    var dataURL = signaturePad.toDataURL();
                    saveUserDigitalSignature(dataURL);
                } else {
                    saveUserDigitalSignature();
                }
            });
            $('#pen-color').on('change', function () {
                signaturePad.penColor = $(this).val();
            });
            $('#signatureInputFile').on('change', function (event) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#saved-image').html('<h4>Preview :</h4><img src="' + e.target.result + '" alt="Saved Signature" />');
                    $('#saved-image img').css({
                        "padding": "4px",
                        "border": "1px solid #ddd",
                        "border-radius": "0.5rem"
                    });
                };
                reader.readAsDataURL(event.target.files[0]);
            });
        }
    });
}

function saveUserDigitalSignature(imageUrl) {
    var input = document.getElementById("signatureInputFile");
    var fileName = "customSignature";

    if (!(imageUrl !== null && imageUrl !== undefined && imageUrl !== "") && input) {
        if (input.files && input.files[0]) {
            if (input.files[0].size <= 5000000) { // 5MB limit
                var reader = new FileReader();
                reader.onload = function (e) {
                    imageUrl = e.target.result;
                    fileName = input.files[0].name;
                    uploadSignature(imageUrl, fileName);
                };
                reader.readAsDataURL(input.files[0]);
            } else {
                input.value = "";
                showMesg("Max size of file is 5 MB");
                return;
            }
        } else {
            showMesg("No file selected");
            return;
        }
    } else if (imageUrl) {
        uploadSignature(imageUrl, fileName);
    } else {
        showMesg("No file selected");
        return;
    }

}
function uploadSignature(imgUrl, fName) {
    showLoader();
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: 'setUserDigitalSignature',
        traditional: true,
        cache: false,
        async: true,
        data: {
            imgURL: imgUrl,
            fileName: fName
        },
        success: function (data) {
            stopLoader();
            if (data.flag === true) {
                showMesg("Signature saved successfully");
            } else {
                showMesg("Failed to save signature");
            }
        },
        error: function () {
            stopLoader();
            showMesg("Error occurred while uploading");
        }
    });
}
function deleteSignature() {
    showLoader();
    $.ajax({
        type: 'POST',
        dataType: 'html',
        url: 'deletUserDigitalSignature',
        traditional: true,
        cache: false,
        async: true,
        data: {

        },
        success: function (data) {
            stopLoader();
            if (data != null && data != "" && data != undefined) {
                showMesg("Deleted successfully");
            } else {
                showMesg("Failed to save signature");
            }
        },
        error: function () {
            stopLoader();
            showMesg("Error occurred while uploading");
        }
    });
}
//DIGITAL SIGNATURE STOP

function updateSRSReInstantiate(){
    
}