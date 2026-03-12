/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */ //KIRAN RAJ
var aiResultBoxCount = 0;
let aiUsersentDynamicId = 0;
var dragfile;
var aiNextMessageType = 'TEXT';
function openAINavigation() {
    try {
        if ($(".openAiButton img").attr("src").endsWith("images/aieyeLensclick.png")) {
//        showAIClickedValueResults(); 
        } else {
            document.getElementById("myNav").style.width = "400px";
            $("#myNav").addClass('pannelAIwrapper');
            $(".dragLeftArrowDiv").show();
            $(".dragRightArrowDiv").hide();
            loadInitialButtons("LENS_HEADER_ICONS");
            //start

            var dropArea = $('#userAIInputBottomWidgetId');
            var dragCounter = 0;
            dropArea.on('dragover', function (event) {
                event.preventDefault();
                event.stopPropagation();

                if (!$(this).hasClass('overlayDragContainer')) {
                    $(this).addClass('overlayDragContainer');
                }
            });

            dropArea.on('dragenter', function (event) {
                event.preventDefault();
                event.stopPropagation();
                dragCounter++;

                if (!$(this).hasClass('overlayDragContainer')) {
                    $(this).addClass('overlayDragContainer');
                }
            });

            dropArea.on('dragleave', function (event) {
                event.preventDefault();
                event.stopPropagation();
                dragCounter--;

                if (dragCounter === 0) {
                    $(this).removeClass('overlayDragContainer');
                }
            });


            dropArea.on('drop', function (event) {
                event.preventDefault();
                event.stopPropagation();
                var files = event.originalEvent.dataTransfer.files;
                dragfile = event.originalEvent.dataTransfer.files[0];
                $(this).removeClass('overlayDragContainer');
                $('#aiTypedValue').focus();
                dragCounter = 0;
                if (files.length > 0) {
                    var file = files[0];
                    var filetype = file.type;
                    if (filetype.startsWith('image/')) {
                        loadImage(file);
                        showAITypeSearchResults();
                    } else if (filetype === 'text/plain') {
                        loadAiDataFile(file);
                    } else {
                        alert("Unsupported file type. Please drop an image or text file.");
                    }
                }
            });
////            End
            toggleMic('aiTypedValue');
            $(".aiLensImgSrcAppend").attr('src', 'images/AILens.gif');
//    aiButtonsAnimations();  
        }
    } catch (e) {
    }

}

//function openAINavigation() {
//    try {
//        if ($(".openAiButton img").attr("src").endsWith("images/aieyeLensclick.png")) {
////        showAIClickedValueResults();
//        } else {
//            document.getElementById("myNav").style.width = "400px";
//            $("#myNav").addClass('pannelAIwrapper');
//            $(".dragLeftArrowDiv").show();
//            $(".dragRightArrowDiv").hide();
//            //drag and drop 03-12-24 start//
//            const dropArea = document.getElementById('aiTypedValue');
//            dropArea.addEventListener('drop', (event) => {
//                event.preventDefault();
//                const file = event.dataTransfer.files[0];
//                dragfile = event.dataTransfer.files[0];
//                if (!file) {
//                    console.error("No file was Dropped");
//                    return;
//                }
//                if (file.type.startsWith('image/')) {
//                    aiLensDragAndDropLoadImage(file, 'aiTypedValue');
//                } else if (file.type === 'text/plain') {
//                    aiLensDragAndDropLoadFile(file, 'aiTypedValue');
//                } else {
//                    alert('Only images and text files are allowed!');
//                }
//            });
//            //drag and drop 03-12-24 stop//
//            loadInitialButtons("LENS_HEADER_ICONS");
//            toggleMic('aiTypedValue');
//            $(".aiLensImgSrcAppend").attr('src', 'images/AILens.gif');
////    aiButtonsAnimations();  
//        }
//    } catch (e) {
//    }
//
//}
function aiEnableBasedOnClick() {
    document.getElementById("myNav").style.width = "400px";
    $("#myNav").addClass('pannelAIwrapper');
    $(".dragLeftArrowDiv").show();
    $(".dragRightArrowDiv").hide();
    loadInitialButtons("LENS_HEADER_ICONS");
    toggleMic('aiTypedValue');
    $(".aiLensImgSrcAppend").attr('src', 'images/AILens.gif');
    $(".aiEnaDisShowHideImgClass").attr('src', 'images/AILens.gif');
    $("#AIEnableOrDisableFlag").val("Y");
    aILensFileDragDropEventLoad();
    aiLensFeaturesLoad();
//    var stringHtml = `<div class="createFunActiveWrapper" style="display:none" id="createFunActive">
//                        <button class="btn btn-primary" >Image</button>
//                        <span class="Close" onclick="closeImgGenFunc();"><img src="images/iDXPUI5AiTextClose.png" alt="iDxpClose" ></span>
//                      </div>`
//
//    $(".idxpDropMenuWrapper").on("click", "li", function () {
//        if ($('#createFunActive').length === 0) {  
//            var $ul = $('.moreaiOptions ul').first();
//            if ($ul.length)
//                $ul.append(stringHtml); 
//        }
//        $("#createFunActive button").text($(this).text());
//        $("#createFunActive").show();
//    });
//    showDefaultOutputBasedOnAIType('LOGIN', 'KNOWLEDGE'); 
}
function closeImgGenFunc() {
    $("#aiTypedValue").attr("placeholder", "Ask me anything...");
    $("#createFunActive").remove();
}
function aILensFileDragDropEventLoad() {
    var dropArea = $('#userAIInputBottomWidgetId');
    var dragCounter = 0;
    dropArea.on('dragover', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (!$(this).hasClass('overlayDragContainer')) {
            $(this).addClass('overlayDragContainer');
        }
    });

    dropArea.on('dragenter', function (event) {
        event.preventDefault();
        event.stopPropagation();
        dragCounter++;

        if (!$(this).hasClass('overlayDragContainer')) {
            $(this).addClass('overlayDragContainer');
        }
    });

    dropArea.on('dragleave', function (event) {
        event.preventDefault();
        event.stopPropagation();
        dragCounter--;

        if (dragCounter === 0) {
            $(this).removeClass('overlayDragContainer');
        }
    });


    dropArea.on('drop', function (event) {
        event.preventDefault();
        event.stopPropagation();
        var files = event.originalEvent.dataTransfer.files;
        dragfile = event.originalEvent.dataTransfer.files[0];
        $(this).removeClass('overlayDragContainer');
        $(".aicontentArea").addClass("overLoaderAiLensBody");
        $('#aiTypedValue').focus();
        dragCounter = 0;
        if (files.length > 0) {
            var file = files[0];
            var filetype = file.type;
            if (filetype.startsWith('image/')) {
                loadImage(file);
                showAITypeSearchResults();
            } else if (filetype === 'text/plain') {
                loadAiDataFile(file);
            } else {
                loadAiDataFile(file);
            }
        }
    });
}
function showRecentPromptData() {
    showaiLoader();
    try {
        $.ajax({
            type: "POST",
            url: 'showAILensRecentHistory',
            data: {
                notificationFlag: "Y",
            },
            traditional: true,
            cache: false,
            success: function (response) {
                if (response != null && response != undefined && response != "") {
                    stopaiLoader();
                    $("#aiRecentDataId").html("");
                    $(".aiPromtDataDiv").toggle();
                    var modalObj = {
                        title: labelObject['AI Prompt Data'] != null ? labelObject['AI Prompt Data'] : 'AI Prompt Data',
                        body: response,
                    };
                    var buttonArray = [
                        {
                            text: 'OK',
                            click: function () {
                            },
                            isCloseButton: true
                        }
                    ];
                    modalObj['buttons'] = buttonArray;
                    createModal("dataDxpSplitterValue", modalObj);
                    $(".modal-backdrop").show();
                    $(".modal-dialog").addClass("modal-md");
                    $("#dataDxpSplitterValue").css("z-index", "99999");
                }
            }
        });
    } catch (e) {
    }
}

function closeAINavigation() {
    try {
        $(".aiLensImgSrcAppend").attr('src', '');
        $("#myNav").removeClass('pannelAIwrapper');
//    $("#myNav").resizable('destroy');
        $("#myNav").css('left', 'inherit');
        document.getElementById("myNav").style.width = "0%";
//    $(".aiChatContainer").html('');
//        $(".aiNotificationsResultClass").html('');
        $("#stopResponsingID").hide(1000);
        $("#aiTypedValue").attr('readonly', false);
        $(".aiAfterDisablerClassImg").attr('src', 'images/AILens.gif');
//        $("#AIEnableOrDisableFlag").val("Y");
    } catch (e) {
    }
}


function w3AddClass(element, name) {
    try {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
            }
        }
    } catch (e) {
    }
}

function w3RemoveClass(element, name) {
    try {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    } catch (e) {
    }
}

function leftDragAIPanel(oldWidth) {
    const $ul = $(".aiLensResultDataClass > div > ul");
    try {
        $(".dragRightArrowDiv").show();
        const currentWidth = $("#myNav").width();
        const newWidth = currentWidth + 2 + 300;
        if (oldWidth !== null && oldWidth !== undefined && oldWidth !== '') {
            newWidth = parseInt(oldWidth, 10);
        }
        $("#myNav").animate({width: newWidth}, 200, function () {


            if (newWidth >= 1200) {
                $ul.removeClass("ai-col-1 ai-col-2").addClass("ai-col-3");
                $(".dragLeftArrowDiv").hide();
                $("#dragLeftArrowImgId").off("click");
                var modalObj = {
                    title: labelObject['AI Message'] != null ? labelObject['AI Message'] : 'AI Message',
                    body: "<div class='aiUserNotif'> This is the maximum we can expand. </div>"
                };
                var buttonArray = [
                    {
                        text: 'OK',
                        click: function () {
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
                $(".modal-backdrop").show();
                $(".modal-dialog").addClass("modal-md");
                $("#dataDxpSplitterValue").css("z-index", "99999");
            } else if (newWidth <= 1200) {
                $ul.removeClass("ai-col-1 ai-col-3").addClass("ai-col-2");
            }
        });
    } catch (e) {
    }
}

function rightDragAIPanel() {
    const $ul = $(".aiLensResultDataClass > div > ul");
    try {
        $(".dragLeftArrowDiv").show();
        const currentWidth = $("#myNav").width();
        let newWidth = currentWidth + 2 - 300;

        if (newWidth < 400) {
            newWidth = 400;
        }

        $("#myNav").animate({width: newWidth}, 200, function () {

            if (newWidth <= 400) {
                $ul.removeClass("ai-col-2 ai-col-3").addClass("ai-col-1");
                $(".dragRightArrowDiv").hide();
                $(".dragLeftArrowDiv").show();
                $("#dragRightArrowImgId").off("click");
            } else if (newWidth >= 1000) {
                $ul.removeClass("ai-col-1 ai-col-3").addClass("ai-col-2");
            }
        });
    } catch (e) {
        console.error(e);
    }
}

var searchBar = true;
function showAISearch() {
    try {
        $("#searchdown").hide();
        $("#searchup").hide();
        $("#searchCount").hide();
        $("#clearAISearch").hide();
        if (searchBar) {
            $('.searchAiBarDiv').delay(200).slideDown(600);
            searchBar = false;
            $('.aiSearh-input').val('');
            $('#clearAISearch').on('click', function () {
                $('.aiSearh-input').val('');
                $(".aiSearh-input").val("").trigger("input");
                $(".searchrightInnerContainer").hide();
            });
        } else {
            $('.searchAiBarDiv').delay(200).slideUp(600);
            searchBar = true;
        }
    } catch (e) {
    }
}
function showAINotification(selectedType) {
    showaiLoader();
    try {
        $('#stopResponsingID').show(1000);
        $("#aiTypedValue").attr('readonly', true);
        $.ajax({
            type: "POST",
            url: 'showAILensNotificationsData',
            data: {
                selectedType: selectedType,
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopaiLoader();
                aiAutoScrollContainer();
                const notificationJson = [];
                $("#aiTypedValue").val('');
                if (response != null && response != undefined && response != "") {
                    var responseObj = JSON.parse(response);
                    $(".typed-cursor").hide();
                    var length = Object.keys(responseObj).length;
                    for (var i = 0; i < length; i++) {
                        var dataObj = {};
                        var messagePopupCreation = "<div class='aiLensResultDataClass'>" + responseObj[(i + 1) + 'row'] + "</div>";
                        dataObj['id'] = i + 1;
                        dataObj['notif'] = messagePopupCreation;
                        notificationJson.push(dataObj);
                    }
                    const notificationStrings = notificationJson.map((elem) => elem.notif);
                    $(".typed-cursor").hide();
                    animateListItem(0);
                    function animateListItem(index) {
                        if (index < notificationJson.length) {
                            const listItem = $(`<div class='airesponseWrapperDiv aiLensReceiverImgClass' data-id='${notificationJson[index].id}'><div class='aiLensMainResultBoxClass' id='aiLensMainResultBoxClass'>`
                                    + `<div class='listItemsText'></div>`
                                    + `<div class='aiLensImageDataClass' id='aiLensImageDataClass'>`
                                    + `<span id='aiResulBoxLikeClassId` + aiResultBoxCount + `'><img src=\"images/like_blue.png\" title='Like' style='width:20px;cursor:pointer;' data-id='${notificationJson[index].id}' onclick="likeAIGivenData('LIKE', event, this)"></span>`
                                    + `<span id='aiResulBoxDisLikeClassId` + aiResultBoxCount + `'><img src=\"images/dislike_blue.png\" title='Dislike' style='width:20px;cursor:pointer;' + onclick="likeAIGivenData('DISLIKE', event, this)"></span>`
                                    + `<span id='aiResulBoxCopyClassId` + aiResultBoxCount + `'><img src=\"images/aiCopy.png\" title='Copy' style='width:20px;cursor:pointer;'></span>`
                                    + `<span id='aiResulBoxDownloadClassId` + aiResultBoxCount + `'><img src=\"images/aiDownload.png\" title='Download' style='width:20px;curser:pointer;' id='aiTextDwnldBtn` + aiResultBoxCount + `' onclick="downloadAIGivenData()"></span>`
                                    + `</div>`
                                    + `</div>`);
                            $(".aiChatgptResponseContainer").append(listItem);
                            const typed = new Typed(listItem.find('.listItemsText')[0], {
                                strings: [notificationStrings[index]],
                                typeSpeed: 20,
                                onComplete: function () {
                                    console.log('Animation completed for', notificationJson[index].id);
                                    $(".typed-cursor").hide();
                                    $("#stopResponsingID").hide();
                                    $("#aiTypedValue").attr('readonly', false);
                                    $(`#aiResulBoxCopyClassId${aiResultBoxCount}`).click(function () {
                                        aiResponseCopy();
                                    });
                                    aiResultBoxCount++;
                                    animateListItem(index + 1);
                                    $(".aiLensResultDataClass").attr("data-result-value", notificationStrings[index]);
                                }
                            });
                            $('#stopResponsingID').click(function () {
                                typed.stop();
                                $("#aiTypedValue").removeAttr("readonly");
                                $('#stopResponsingID').hide();
                            });
                        }
                    }
                    stopaiLoader();
                }
            }
        });
    } catch (e) {
    }
}
async function showAITypeSearchResults(searchWord, showKeyword) {
    try {
        const prompt = $("#aiTypedValue").val();
        if (!prompt)
            return;
        if (aiNextMessageType === "IMAGE") {
            event.preventDefault();
            event.stopImmediatePropagation();
            $(".aiChatgptResponseContainer").append(
                    "<div class='aiAppendSenderDataClass userSelectedOption'>" +
                    prompt +
                    "</div>"
                    );
            createImageFromPrompt(prompt);
            aiNextMessageType = "TEXT";
            $("#aiTypedValue").val("");
            $("#aiTypedValue").attr("placeholder", "Ask me anything...");

            return false;
        }
        showaiLoader();
        $('#stopResponsingID').show(1000);
        $('.aicontentArea').scrollTop($('.aicontentArea')[0].scrollHeight);
        aiAutoScrollContainer();
        if (searchWord == null || searchWord == '' || searchWord == undefined) {
            searchWord = $("#aiTypedValue").val();
        }
        if (hasHTMLTags(searchWord)) {
            var modalObj = {
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                body: "<div id='successmsg'>Please Enter Valid Text</div>"
            };
            var buttonArray = [
                {
                    text: 'OK',
                    click: function () {
                    },
                    isCloseButton: true
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

            stopaiLoader();

            return;
        }
        var fileValue = $('#aiAttachedmentImageUpload').val();
        var imgValue = $('#aiImageAttachedmentUpload').val();
        var dragFIle = $('#aiFileDragDrop').children().text();
        var dragimage = $('#aiImageDragDrop').children('img').attr('src');
        if ((fileValue != '' && fileValue != undefined && fileValue != null) || (dragFIle != '' && dragFIle != undefined && dragFIle != null)) {   //10-07-1024
            if (searchWord != '') {
                searchWord += ' and ';
            }
            var file = $('#aiAttachedmentImageUpload')[0].files[0];
            if (!file) {
                file = dragfile;
            }
            searchWord += await getFileText(file);
            var imgHtml = '<img src="images/Excel.png" width=\"50\" style=\"background: transparent;\" alt="Converted Image">';
            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>" + imgHtml + "</div>");
            $(".aiAppendSenderDataClass").addClass("aiAppendImageUploadDataClass");

            if (file['name'] != null && file['name'] != undefined && file['name'] != "" && (file['name'].indexOf(".xlsx") > -1 || file['name'].indexOf(".xls") > -1)
                    && (file['name'].indexOf("mass") > -1 || file['name'].indexOf("Mass") > -1)) {
                $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>" + userInput + "</div>");
                getAIAgentAttachFileBrowserColMapping("Choose file to upload", "Data imported successfully in staging area", "MASSDATAPROCESSCREATE", "Y", "N", "ASSET", "PM_MANAGER", "browsePM_MASS_DATA_PROCESS_CREATE", "PM_MASS_DATA_PROCESS_CREATE", "NESTEDGRID", "PM_MASS_REG_PROCESS_CLUSTER", "5000", "AUTOPROCESS", file, file['name']);
                return;
            } else if (file['name'] != null && file['name'] != undefined && file['name'] != "" && (file['name'].indexOf(".xlsx") > -1 || file['name'].indexOf(".xls") > -1)
                    && (file['name'].indexOf("ISPIR") > -1 || file['name'].indexOf("iSPIR") > -1 || file['name'].indexOf("ispir")) > -1) {
//                validationProcessField(file);
                return;
            } else if (file['name'] != null && file['name'] != undefined && file['name'] != "" && (file['name'].indexOf(".xlsx") > -1 || file['name'].indexOf(".xls") > -1)
                    && (file['name'].indexOf("TASK") > -1 || file['name'].indexOf("Task") > -1 || file['name'].indexOf("task")) > -1
                    && (file['name'].indexOf("CHANGE") > -1 || file['name'].indexOf("change") > -1 || file['name'].indexOf("chng")) > -1
                    || file['name'].indexOf("Change") > -1) {
                getAIAgentMutipleFileUploadColMapping(file, file['name'], 'PM_MASS_DATA_PROCESS_CHANGE');
                return;
            } else if (file['name'] != null && file['name'] != undefined && file['name'] != "" && (file['name'].indexOf(".xlsx") > -1 || file['name'].indexOf(".xls") > -1)
                    && (file['name'].indexOf("TASK") > -1 || file['name'].indexOf("Task") > -1 || file['name'].indexOf("task")) > -1) {
                getAIAgentMutipleFileUploadColMapping(file, file['name'], 'PM_TL_MASS_DATA_PROCESS_CREATE');
                return;
            }
        } else if ((imgValue != '' && imgValue != undefined && imgValue != null) || (dragimage != '' && dragimage != undefined && dragimage != null)) {
            if (searchWord != '') {
                searchWord += ' and ';
            }
            var file = $('#aiImageAttachedmentUpload')[0].files[0];
            if (!file) {
                file = dragfile;
            }

            searchWord += JSON.stringify(await getImageToText(file));
            if (file) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var imgHtml = '<img src="' + e.target.result + '" width=\"100\" alt="Converted Image">';
                    $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>" + imgHtml + "</div>");
                    $(".aiAppendSenderDataClass").addClass("aiAppendImageUploadDataClass");
                };
                reader.readAsDataURL(file);
            }
        } else {
            if (searchWord != '') {
                if (showKeyword != null && showKeyword != undefined && showKeyword != '') {
                    $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass' id='aiAppendSenderDataID" + aiUsersentDynamicId + "'>\n\
                        <div class='editTextContainerWrapper' id='editTextContainerWrapperId" + aiUsersentDynamicId + "'><div class='aiLensPencilIconClass' id='appendEditIcon" + aiUsersentDynamicId + "' style='display:none' onclick=\"initializeEditModeHandlers('" + searchWord + "')\" title='Edit Data' style='cursor:pointer;width:20px;'></div>"
                            + "<div id='appendText" + aiUsersentDynamicId + "' style='padding: 5px 10px;background-color: #0b4a99;border-radius: 10px;border: 1px solid #0b4a99;' class='appendTextClass'>"

                            + showKeyword + "</div></div><div class='aieditPromptActionButtonsClass' id='aiEditActionbutton" + aiUsersentDynamicId + "'></div></div>");
                    aiUsersentDynamicId++;
                    console.log("showKeyword" + showKeyword);
                    console.log("searchWord" + searchWord);
                } else {
                    $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass' id='aiAppendSenderDataID" + aiUsersentDynamicId + "'>\n\
                        <div class='editTextContainerWrapper' id='editTextContainerWrapperId" + aiUsersentDynamicId + "'><div class='aiLensPencilIconClass' id='appendEditIcon" + aiUsersentDynamicId + "' style='display:none' onclick=\"initializeEditModeHandlers('" + searchWord + "')\" title='Edit Data' style='cursor:pointer;width:20px;'></div>"
                            + "<div id='appendText" + aiUsersentDynamicId + "' style='padding: 5px 10px;background-color: #0b4a99;border-radius: 10px;border: 1px solid #0b4a99;' class='appendTextClass'>"

                            + searchWord + "</div></div><div class='aieditPromptActionButtonsClass' id='aiEditActionbutton" + aiUsersentDynamicId + "'></div></div>");
                    aiUsersentDynamicId++;
                    console.log("searchWord" + searchWord);
                }

            }
        }
//        if (fileValue.includes('xlsx') && fileValue.includes('iSPIR') && searchWord != "") {
//            var file = $('#aiAttachedmentImageUpload')[0].files[0];
//            stopaiLoader();
//            validationProcessField(file);
//            return;
//        }
//        if (file['name'] != null && file['name'] != undefined && file['name'] != "" && file['name'].indexOf(".xlsx") > -1) {
//            return;
//        }
        $("#aiTypedValue").attr('readonly', true);
        if (searchWord != null && searchWord != undefined && searchWord != "") {
            $.ajax({
                type: "POST",
                url: 'showAITypedValueResults',
                data: {
                    aiTypedValue: searchWord,
                },
                traditional: true,
                cache: false,
                success: function (response) {
                    stopaiLoader();
                    aiAutoScrollContainer();
                    const notificationJson = [];
                    $("#aiTypedValue").val('');
                    if (response != null && response != undefined && response != "") {
                        var responseObj = JSON.parse(response);
                        $("#aiLensAttachedmentFile").html('');
                        $('#aiAttachedmentImageUpload').val("");
                        $('#aiImageAttachedmentUpload').val('');
                        $(".typed-cursor").hide();
                        var length = Object.keys(responseObj).length;
                        for (var i = 0; i < length; i++) {
                            var dataObj = {};
                            var messagePopupCreation = "<div class='aiLensResultDataClass'>" + responseObj[(i + 1) + 'row'] + "</div>";
                            dataObj['id'] = i + 1;
                            dataObj['notif'] = messagePopupCreation;
                            notificationJson.push(dataObj);
                        }
                        const notificationStrings = notificationJson.map((elem) => elem.notif);
                        $(".typed-cursor").hide();
                        if (fileValue == "" || fileValue == null) {
                            animateListItem(0);
                        }
//                        animateListItem(0);
                        function animateListItem(index) {
                            if (index < notificationJson.length) {
                                const listItem = $(`<div class='airesponseWrapperDiv aiLensReceiverImgClass' data-id='${notificationJson[index].id}'><div class='aiLensMainResultBoxClass' id='aiLensMainResultBoxClass'>`
                                        + `<div class='listItemsText'></div>`
                                        + `<div class='aiLensImageDataClass' id='aiLensImageDataClass'>`
                                        + `<span id='aiResulBoxLikeClassId` + aiResultBoxCount + `'><img src=\"images/like_blue.png\" title='Like' style='width:20px;cursor:pointer;' data-id='${notificationJson[index].id}' onclick="likeAIGivenData('LIKE', event, this)"></span>`
                                        + `<span id='aiResulBoxDisLikeClassId` + aiResultBoxCount + `'><img src=\"images/dislike_blue.png\" title='Dislike' style='width:20px;cursor:pointer;' + onclick="likeAIGivenData('DISLIKE', event, this)"></span>`
                                        + `<span id='aiResulBoxCopyClassId` + aiResultBoxCount + `'><img src=\"images/aiCopy.png\" title='Copy' style='width:20px;cursor:pointer;'></span>`
                                        + `<span id='aiResulBoxDownloadClassId` + aiResultBoxCount + `'><img src=\"images/aiDownload.png\" title='Download' style='width:20px;curser:pointer;' id='aiTextDwnldBtn` + aiResultBoxCount + `' onclick="downloadAIGivenData()"></span>`
                                        + `</div>`
                                        + `</div>`);
                                $(".aiChatgptResponseContainer").append(listItem);
//                            $(".typed-cursor").hide();
                                const typed = new Typed(listItem.find('.listItemsText')[0], {
                                    strings: [notificationStrings[index]],
                                    typeSpeed: 20,
                                    onComplete: function () {
                                        console.log('Animation completed for', notificationJson[index].id);
                                        aiAutoScrollContainer();
                                        $(".typed-cursor").hide();
                                        $("#stopResponsingID").hide();
                                        $("#aiTypedValue").attr('readonly', false);
                                        $(`#aiResulBoxCopyClassId${aiResultBoxCount}`).click(function () {
                                            aiResponseCopy();
                                        });
                                        aiResultBoxCount++;
                                        animateListItem(index + 1);
                                        $(".aiLensResultDataClass").attr("data-result-value", notificationStrings[index]);
//                                    if (index < notificationJson.length) {
//                                        var dxpAdavanceSearchOptions = $('#dxpAdavanceSearchOptions').val();
//                                        if (dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != undefined
//                                                && dxpAdavanceSearchOptions != '' && dxpAdavanceSearchOptions == 'D') {
//                                            var userval = $('#SearchResult').val();
//                                            var searchKeyword = "";
//                                            var aiSearchType = '';
//                                            if (aiSearchType != null && aiSearchType != undefined && aiSearchType != "" && aiSearchType != "Uom") {
//                                                searchKeyword = userval + ' ' + searchWord + ' ' + 'Values';
//                                                aiSearchType = "Uom";
//                                            } else {
//                                                searchKeyword = userval + ' ' + searchWord + ' ' + 'Uoms';
//                                                aiSearchType = "";
//                                            }
//                                            showAITypeSearchResults(searchKeyword);
//                                        }
//                                    }
//                                    showRecentPromptData();
                                    }

                                });
                                $('#stopResponsingID').click(function () {
                                    typed.stop();
                                    $("#aiTypedValue").removeAttr("readonly");
                                    $('#stopResponsingID').hide();
                                });
                            }

                        }


                        stopaiLoader();
//            $(".aiNotificationsResultClass").html(response);
                    }
                }
            });
            $(".aiAppendSenderDataClass .editTextContainerWrapper").mouseenter(function () {
                var dynamicid = $(this).attr('id');
                var getParentDivID = $("#" + dynamicid).closest(".aiAppendSenderDataClass").attr('id');
                $("#" + getParentDivID).addClass("editTextparentClass");
                $(this).find('.aiLensPencilIconClass').show();
            });
            $(".aiAppendSenderDataClass .editTextContainerWrapper").mouseleave(function () {
                var dynamicid = $(this).attr('id');
                var getParentDivID = $("#" + dynamicid).closest(".aiAppendSenderDataClass").attr('id');
                $("#" + getParentDivID).addClass("editTextparentClass");
                $(this).find('.aiLensPencilIconClass').hide();
            });

        } else {
            var modalObj = {
                title: labelObject['Message'] != null ? labelObject['Message'] : 'AI Message',
                body: "<div id='successmsg'>Please Enter a word to search.</div>"
            };
            var buttonArray = [
                {
                    text: 'OK',
                    click: function () {
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
            stopaiLoader();
        }
    } catch (e) {
    }
}
function showAIKeyDownResults(event) {
    var role = $("#rolehid").val();
    var moduleCode = $("#currentDomain").val();
    try {
        let userInput = $("#aiTypedValue").val();
        if (hasHTMLTags(userInput)) {
            var modalObj = {
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                body: "<div id='successmsg'>Please Enter Valid Text</div>"
            };
            var buttonArray = [
                {
                    text: 'OK',
                    click: function () {
                    },
                    isCloseButton: true
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
            stopaiLoader();
            return;
        }
        if (event.keyCode == 13) {
            const prompt = $("#aiTypedValue").val().trim();
            if (!prompt)
                return;
            if (aiNextMessageType === "IMAGE") {
                event.preventDefault();
                event.stopImmediatePropagation();
                $(".aiChatgptResponseContainer").append(
                        "<div class='aiAppendSenderDataClass userSelectedOption'>" +
                        prompt +
                        "</div>"
                        );
                createImageFromPrompt(prompt);
                aiNextMessageType = "TEXT";
                $("#aiTypedValue").val("");
                $("#aiTypedValue").attr("placeholder", "Ask me anything...");

                return false;
            }
            $("#sendMessageIconId").attr("style", "opacity:0.5");
            $(".userAIInputBottomWidget").attr("style", "border-bottom: 1px solid #ddd;");
            $(".aiTypesValSuggetionsClass").attr("style", "display: none");
            var fileValue = $('#aiAttachedmentImageUpload').val();
            var imgValue = $('#aiImageAttachedmentUpload').val();
            var dragFIle = $('#aiFileDragDrop').children().text();
            var dragimage = $('#aiImageDragDrop').children('img').attr('src');
            var aiAgentEnableFlag = $("#aiAgentEnableFlag").val();
            if (aiAgentEnableFlag != null && aiAgentEnableFlag != undefined && aiAgentEnableFlag != '' && aiAgentEnableFlag == 'N') {
                if ((fileValue != '' && fileValue != undefined && fileValue != null) || (dragFIle != '' && dragFIle != undefined && dragFIle != null)) {   //10-07-1024
                    var file = $('#aiAttachedmentImageUpload')[0].files[0];
                    if (!file) {
                        file = dragfile;
                    }


                    if (file['name'] != null && file['name'] != undefined && file['name'] != "" && (file['name'].indexOf(".xlsx") > -1 || file['name'].indexOf(".xls") > -1)
                            && (file['name'].indexOf("mass") > -1 || file['name'].indexOf("Mass") > -1)) {
                        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>" + userInput + "</div>");

                        if (moduleCode != null && moduleCode != undefined && moduleCode != "" && moduleCode == "PRODUCT") {
                            if (file['name'].indexOf("Article") > -1 || file['name'].indexOf("ARTICLE") > -1 || file['name'].indexOf("article") > -1) {
                                //$(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>" + userInput + "</div>");
                                $("#aiLensAttachedmentFile").html("");
                                $("#aiTypedValue").val("");
                                $("#aiFileDragDrop").empty();
                                getAIAgentMutipleFileUploadColMapping(file, file['name'], "MM_AM_MASS_DATA_PROCESS_CREATE", "Choose file to upload", "Data imported successfully in staging area", "MASSDATAPROCESSARTICLECREATE", "Y", "N", moduleCode, role, "browseMM_AM_MASS_DATA_PROCESS_CREATE", "MM_AM_MASS_DATA_PROCESS_CREATE", "CLUSTER", "MM_AM_MASS_REG_PROCESS_CLUSTER", "5000", "AUTOPROCESS");
                                return;
                            }
                            getAIAgentAttachFileBrowserColMapping("Choose file to upload", "Data imported successfully in staging area", "MASSDATAPROCESSCREATE", "Y", "N", "PRODUCT", role, "browseMM_AI_MASS_DATA_PROCESS_CREATE", "MM_AI_MASS_DATA_PROCESS_CREATE", "NESTEDGRID", "MM_MASS_REG_PROCESS_CLUSTER", "5000", "AUTOPROCESS", file, file['name']);
                            return;
                        } else if (moduleCode != null && moduleCode != undefined && moduleCode != "" && moduleCode == "ASSET") {
                            if ((file['name'].indexOf("FLOC") > -1 || file['name'].indexOf("Floc") > -1 || file['name'].indexOf("floc") > -1) && (file['name'].indexOf("Change") > -1
                                    || file['name'].indexOf("CHANGE") > -1)) {
                                getAIAgentAttachFileBrowserColMapping("", "Data imported successfully in staging area", "MASSDATAPROCESSCREATE", "Y", "N", "ASSET", role, "browsePM_MASS_DATA_PROCESS_CHANGE_FLOC", "PM_MASS_DATA_PROCESS_CHANGE_FLOC", "NESTEDGRID", "PM_MASS_REG_PROCESS_CLUSTER", "5000", "AUTOPROCESS", file, file['name']);
                                return;
                            }
                            if ((file['name'].indexOf("FLOC") > -1 || file['name'].indexOf("Floc") > -1 || file['name'].indexOf("floc") > -1) && (file['name'].indexOf("Create") > -1
                                    || file['name'].indexOf("CREATE") > -1)) {
                                getAIAgentAttachFileBrowserColMapping("", "Data imported successfully in staging area", "MASSDATAPROCESSCREATE", "Y", "N", "ASSET", role, "browsePM_MASS_DATA_PROCESS_CREATE_FLOC", "PM_MASS_DATA_PROCESS_CREATE_FLOC", "NESTEDGRID", "PM_MASS_REG_PROCESS_CLUSTER", "5000", "AUTOPROCESS", file, file['name']);
                                return;
                            }
                            if (file['name'].indexOf("Change") > -1 || file['name'].indexOf("Chng") > -1 || file['name'].indexOf("CHANGE") > -1
                                    || file['name'].indexOf("change") > -1) {
                                getAIAgentMutipleFileUploadColMapping(file, file['name'], 'PM_MASS_DATA_PROCESS_CHANGE');
                                return;
                            }
                            if (file['name'].indexOf("SAP") > -1 || file['name'].indexOf("sap") > -1 || file['name'].indexOf("Sap") > -1
                                    || file['name'].indexOf("Sap") > -1) {
                                getAIAgentAttachFileBrowserColMapping("", "", "MASSDATAPROCESSCREATE", "Y", "N", "ASSET", role, "browsePM_MASS_DATA_PROCESS_CLASS_CHANGE", "PM_MASS_DATA_PROCESS_CLASS_CHANGE", "NESTEDGRID", "PM_MASS_REG_PROCESS_CLUSTER", "5000", "", file, file['name']);
                                return;
                            }

                            getAIAgentAttachFileBrowserColMapping("Choose file to upload", "Data imported successfully in staging area", "MASSDATAPROCESSCREATE", "Y", "N", "ASSET", role, "browsePM_MASS_DATA_PROCESS_CREATE", "PM_MASS_DATA_PROCESS_CREATE", "NESTEDGRID", "PM_MASS_REG_PROCESS_CLUSTER", "5000", "AUTOPROCESS", file, file['name']);
                            return;
                        } else if (moduleCode != null && moduleCode != undefined && moduleCode != "" && moduleCode == "SERVICE") {
                            if (file['name'] != null && file['name'] != undefined && file['name'] != "" && (file['name'].indexOf(".xlsx") > -1 || file['name'].indexOf(".xls") > -1)
                                    && (file['name'].indexOf("mass") > -1 || file['name'].indexOf("Mass") > -1)) {
                                $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>" + userInput + "</div>");
                                getAIAgentAttachFileBrowserColMapping("Choose file to upload", "Data imported successfully in staging area", "MASSDATAPROCESSCREATE", "Y", "N", moduleCode, role, "browseSM_MASS_DATA_PROCESS_CREATE", "SM_MASS_DATA_PROCESS_CREATE", "NESTEDGRID", "SM_MASS_DATA_PROCESS_CREATE_CLUSTER", "5000", "AUTOPROCESS", file, file['name']);
                                return;
                            } else if (file['name'] != null && file['name'] != undefined && file['name'] != "" && (file['name'].indexOf(".xlsx") > -1 || file['name'].indexOf(".xls") > -1)
                                    && (file['name'].indexOf("ISPIR") > -1 || file['name'].indexOf("iSPIR") > -1 || file['name'].indexOf("ispir")) > -1) {
//                validationProcessField(file);
                                return;
                            } else if (file['name'] != null && file['name'] != undefined && file['name'] != "" && (file['name'].indexOf(".xlsx") > -1 || file['name'].indexOf(".xls") > -1)
                                    && (file['name'].indexOf("TASK") > -1 || file['name'].indexOf("Task") > -1 || file['name'].indexOf("task")) > -1
                                    && (file['name'].indexOf("CHANGE") > -1 || file['name'].indexOf("change") > -1 || file['name'].indexOf("chng")) > -1
                                    || file['name'].indexOf("Change") > -1) {
                                getAIAgentMutipleFileUploadColMapping(file, file['name'], 'PM_MASS_DATA_PROCESS_CHANGE');
                                return;
                            }
                        }
                    } else if (file['name'] != null && file['name'] != undefined && file['name'] != "" && (file['name'].indexOf(".xlsx") > -1 || file['name'].indexOf(".xls") > -1)
                            && (file['name'].indexOf("ISPIR") > -1 || file['name'].indexOf("iSPIR") > -1 || file['name'].indexOf("ispir")) > -1) {
                        //validationProcessField(file);
                        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>" + userInput + "</div>");
                        $("#aiLensAttachedmentFile").html("");
                        $("#aiTypedValue").val("");
                        $("#aiFileDragDrop").empty();
                        validationProcessField(file);
                        return;
                    } else if (file['name'] != null && file['name'] != undefined && file['name'] != "" && (file['name'].indexOf(".xlsx") > -1 || file['name'].indexOf(".xls") > -1)
                            && (file['name'].indexOf("TASK") > -1 || file['name'].indexOf("Task") > -1 || file['name'].indexOf("task")) > -1
                            && (file['name'].indexOf("CHANGE") > -1 || file['name'].indexOf("change") > -1 || file['name'].indexOf("chng")) > -1
                            || file['name'].indexOf("Change") > -1) {
                        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>" + userInput + "</div>");
                        $("#aiLensAttachedmentFile").html("");
                        $("#aiTypedValue").val("");
                        $("#aiFileDragDrop").empty();
                        getAIAgentMutipleFileUploadColMapping(file, file['name'], 'PM_MASS_DATA_PROCESS_CHANGE');
                        return;

                    } else if (file['name'] != null && file['name'] != undefined && file['name'] != "" && (file['name'].indexOf(".xlsx") > -1 || file['name'].indexOf(".xls") > -1)
                            && (file['name'].indexOf("TASK") > -1 || file['name'].indexOf("Task") > -1 || file['name'].indexOf("task")) > -1) {
                        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>" + userInput + "</div>");
                        $("#aiLensAttachedmentFile").html("");
                        $("#aiTypedValue").val("");
                        $("#aiFileDragDrop").empty();
                        getAIAgentMutipleFileUploadColMapping(file, file['name'], 'PM_TL_MASS_DATA_PROCESS_CREATE');
                        return;
                    } else {
                        getAIAttachmentBasedOnQuery(file);
                    }

                } else if ((imgValue != '' && imgValue != undefined && imgValue != null)
                        || (dragimage != '' && dragimage != undefined && dragimage != null)) {
                    var file = $('#aiImageAttachedmentUpload')[0].files[0];
                    if (!file) {
                        file = dragfile;
                    }
                    getAIAttachmentBasedOnQuery(file);

                } else {
                    var promptDescFocusFlag = localStorage.getItem("aiPrmtFocDescFlag");
                    if (promptDescFocusFlag != null && promptDescFocusFlag != ''
                            && promptDescFocusFlag != undefined && promptDescFocusFlag == 'Y') {
                        if (moduleCode != null && moduleCode != undefined && moduleCode != "" && moduleCode == "SERVICE") {
                            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>" + userInput + "</div>");
                            aiLensServiceAutoCreate('SM_MASS_DATA_PROCESS_CREATE', '' + userInput + '');
                            $("#aiTypedValue").val("");
                        } else if (moduleCode != null && moduleCode != undefined && moduleCode != "" && moduleCode == "PRODUCT") {
                            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>" + userInput + "</div>");
                            aiLensServiceAutoCreate('MM_AI_MASS_DATA_PROCESS_CREATE', '' + userInput + '');
                            $("#aiTypedValue").val("");
                        }
                    } else {
                        const input = userInput.toLowerCase();
                        const requiredWords = ["create new", "new item", "item record", "new material", "new record", "item new", "material new", "material item", "create material", "create record", "create item"]; // must contain all
                        const mocrWords = ["MOCR create", "Mocr Create", "Create MOCR", "Create Mocr", "mocr create", "MOCR Create", "create mocr"]; // must contain all
                        const anyMatch = requiredWords.some(word => input.includes(word));
                        const anyMOCRMatch = mocrWords.some(mocrWords => input.includes(mocrWords));
                        if (anyMOCRMatch) {
                            getAIContentBasedOnQuery('Do you have Template to Upload Data', 'File Upload For MOCR Create', 'MASSDATAMOCRPROCESSCREATE', 'YL', 'N')
//                        getAIContentBasedOnQuery('Do you want to create single item?', userInput, 'SEARCH', 'S', 'N', userInput);
                        } else if (anyMatch) {
//                        getAIContentBasedOnQuery('Do you want to create new item?', userInput, 'SEARCH', 'S', 'N', userInput);
                            getAIContentBasedOnQuery('Do you want to create single item?', userInput, 'SEARCH', 'S', 'N', userInput);
                            userInput = '';
                            console.log("✅ Detected 'create new item' intent");
                        } else {
                            getAIContentBasedOnQuery('Do you want search P_AI_QUERY_ANSWER in', userInput, 'SEARCH', 'S', 'N', userInput);
                            userInput = '';
                        }
                    }
                }
            } else {

                if (userInput != null && userInput != undefined && userInput != '') {
                    $("#urlInputContainer").remove();
                    const isUrl = userInput.toLowerCase().includes("url") || userInput.toLowerCase().includes("URL");
                    if (isUrl) {
                        const dataHtml = `<div id="urlInputContainer" class="urlInputContainerClass">
                                <input type="text" id="dataUrlInput" class="dataUrlInputClass" name="dataUrlInput" placeholder="Enter a URL to extract data...">
                                <button id="sendUrlbyAiAgent" class="sendUrlDataButtonClass" onclick="sendUrlToAgent()">Extract</button>
                                </div>`;
                        $(".aiChatgptResponseContainer").append(dataHtml);
                        aiAutoScrollContainer();
                        $("#additionalUrlInput").show();
                    } else {
                        gettextprocess(userInput, fileValue, imgValue, dragFIle);
                    }

                }
            }
        } else {
            $("#aiLensAutomationFlag").val("Y");
            if (userInput && userInput.trim() !== "") {

                if (userInput.trim().length < 3) {
                    document.getElementById("aiTypesValSuggetionsId").style.display = "none";
                    return;
                }

                $.ajax({
                    type: "POST",
                    url: "aiLensSearchSuggetion",
                    data: {aiTypedValue: userInput},
                    cache: false,
                    success: function (response) {

                        stopaiLoader();

                        let aiLensSuggestions = [];

                        try {
                            aiLensSuggestions = typeof response === "string"
                                    ? JSON.parse(response)
                                    : response;
                        } catch (e) {
                            console.error("Invalid AI Lens response", e);
                            return;
                        }

                        // Inject CSS once
                        if (!document.getElementById("aiLensStyle")) {
                            const style = document.createElement("style");
                            style.id = "aiLensStyle";
                            style.innerHTML = `
                    .aiTypesValSuggetionsClass {
                        position: absolute;
                        bottom: 71px; 
                        left: 0;
                        right: 0;
                        background: #fff;
                        border: 1px solid #c7d3eb;
                        border-radius: 10px;
                        max-height: 220px;
                        overflow-y: auto;
                        box-shadow: 0 4px 15px rgba(0,0,0,.15);
                        z-index: 2000;
                        display: none;
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    .aiTypesValSuggetionsClass li {
                        padding: 10px 14px;
                        cursor: pointer;
                        border-bottom: 1px solid #e7edf7;
                    }
                    .aiTypesValSuggetionsClass li:hover {
                        background: #f3f7ff;
                        border-left: 4px solid #0b56d0;
                    }
                    .ai-highlight {
                        font-weight: 600;
                        color: #0b56d0;
                        background: #e8f0ff;
                        padding: 0 3px;
                        border-radius: 3px;
                    }
                `;
                            document.head.appendChild(style);
                        }

                        const suggestionBox = document.getElementById("aiTypesValSuggetionsId");
                        suggestionBox.innerHTML = "";

                        if (!Array.isArray(aiLensSuggestions) || aiLensSuggestions.length === 0) {
                            suggestionBox.style.display = "none";
                            return;
                        }

                        const searchText = userInput.trim().toLowerCase();

                        aiLensSuggestions.forEach(item => {

                            const queryText = item.AI_QUERY || "";
                            const hiddenType = item.AI_LENS_CUST_COLN7 || ""; // used internally only

                            const li = document.createElement("li");

                            li.innerHTML = queryText.replace(
                                    new RegExp(`(${searchText})`, "gi"),
                                    "<span class='ai-highlight'>$1</span>"
                                    );

                            li.onclick = () => {
                                document.getElementById("aiTypedValue").value = queryText;
                                suggestionBox.style.display = "none";
                                handleAISearch(queryText, hiddenType);
                            };

                            suggestionBox.appendChild(li);
                        });

                        suggestionBox.style.display = "block";

                        function handleAISearch(query, values) {

                            $(".aiChatgptResponseContainer").append(
                                    `<div class="aiAppendSenderDataClass userSelectedOption">${query}</div>`
                                    );

                            $("#aiTypedValue").val("");
                            if (values != null && values != undefined && values != '') {
                                var parts = values.split(",");
                                var gridOrComponentId = parts[0]; // MM_NEW_CHNG_MGR
                                var compColName = parts[1]; // RECORD_NO
                                var CompType = parts[2]; // componenet type GRID
                                var compDesc = parts[3]; // Label Change Request
                                var compRoleId = parts[4]; // Role Id MM_MANAGER
                                var processId = parts[5]; // processId like Create
                                var compDomain = parts[6]; // Domain like PRODUCT
                                var compSearchId = parts[7]; // SearchId like FMM_MGR_MATERIAL_SEARCH
                                if (processId != null && processId != undefined && processId != '' && processId == 'Create') {
//                                    showSearchBar(compDomain, compSearchId, compRoleId, gridOrComponentId, 'N', compDomain);
//                                    showAILensFixedMessageInAIFormat("Your " + compDesc + " is currently being processed. Once the search bar opens, please select the appropriate search type, enter the class name, and proceed to create the record.");
                                    var raiseReqhtml = `
<ul class="listItemsViews">
    <li>
        <div class="textContent" title="Do you want search mdm in">
            Please select a process to continue.
        </div>
        <div class="viewData AILensDisOrEnaClass" style="flex-wrap:wrap; gap:5px">
            <div class="viewButton"
                 onclick="aiRaiseReqBasedOnLensInput('${query}','CLASS','Using Class','${values}')">
                <span class="viewIcon">
                    <img src="" class="aiidqmdecsriptionImgClass">
                </span>
                <span class="viewText">Using Class</span>
            </div>

            <div class="viewButton"
                 onclick="aiRaiseReqBasedOnLensInput('${query}','GRID','Using Description','${values}')">
                <span class="viewIcon">
                    <img src="" class="aidescriptionsImgClass">
                </span>
                <span class="viewText">Using Description</span>
            </div>
        </div>
    </li>
</ul>`;


                                    defaultAITypingBasedOnResponse(raiseReqhtml, "", "", "");
                                } else {

                                    var raiseReqhtml = `
<ul class="listItemsViews">
    <li>
        <div class="textContent" title="Do you want search mdm in">
            Please select a process to continue.
        </div>

        <div class="viewData AILensDisOrEnaClass" style="flex-wrap:wrap; gap:5px">

            <div class="viewButton"
                 onclick="aiRaiseReqBasedOnLensInput('${query}','RECORD_NO','Using RecordNo','${values}')">
                <span class="viewIcon">
                    <img src="" class="aidictionaryImgClass">
                </span>
                <span class="viewText">Using RecordNo</span>
            </div>

            <div class="viewButton"
                 onclick="aiRaiseReqBasedOnLensInput('${query}','CLASS','Using Class','${values}')">
                <span class="viewIcon">
                    <img src="" class="aiidqmdecsriptionImgClass">
                </span>
                <span class="viewText">Using Class</span>
            </div>

            <div class="viewButton"
                 onclick="aiRaiseReqBasedOnLensInput('${query}','GRID','Using Grid Data','${values}')">
                <span class="viewIcon">
                    <img src="" class="aidescriptionsImgClass">
                </span>
                <span class="viewText">Using Grid Data</span>
            </div>

        </div>
    </li>
</ul>`;


                                    defaultAITypingBasedOnResponse(raiseReqhtml, "", "", "");
                                }
                            }


                        }
                    },
                    error: function () {
                        stopaiLoader();
                        console.error("Error fetching AI Lens suggestions");
                    }
                });
            }


        }
        if (userInput.trim() == "") {
            $(".userAIInputText img").css("filter", "");
            $("#sendMessageIconId").attr("style", "opacity:0.5");
            $(".userAIInputBottomWidget").attr("style", "border-bottom: 1px solid #ddd;");
        } else {
            $(".userAIInputText img").css("filter", "inherit");
            $("#sendMessageIconId").attr("style", "opacity: inherit;");
            $(".userAIInputBottomWidget").attr("style", "border-bottom: 2px solid #0b4a99;");

        }
    } catch (e) {
    }
}
function assetAILenItemCreateHierWithNewMocr(gridId, aiFlag)
{
    aiAgentTypingMessage('Click to upload the file for MOCR Create');
//    $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>Click to upload the file for MOCR Create</div>");
    $("#importAILensMOCRTreeDMFile").remove();
    var response = "<input type='file' name='importAILensMOCRTreeDMFile' id='importAILensMOCRTreeDMFile' class='visionMOCRTreeDMFilesInput' accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'/>";
    $("body").append(response);
    $("#importAILensMOCRTreeDMFile").click();
    $("#importAILensMOCRTreeDMFile").on('change', function (event) {
        var files = event.target.files;
        var file = files[0];
        $("#importAILensMOCRTreeDMFile").remove();
        getMOCRMutipleFileUploadSheetMapping(file, file['name'], gridId, aiFlag);
        $("#importAILensMOCRTreeDMFile").val('');

    });
}
function showAIClickedValueResults(searchWord, classTerm, category, aiDictClickVal) {
    try {
        openAINavigation();
        KDSAIlensDefaultYesNo('Do you want know about ' + searchWord + ' of  ' + classTerm + '?', 'aiClickValResYes',
                'aiClickValResNo', 'Yes, Continue', 'No, Thank you', 'aiDefaultYesImgClass', 'aiDefaultNoImgClass');
        $(document).one("click", "#aiClickValResYes", function () {
            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>Yes, Continue</div>");
            var searchKeyword = '';
            var showKeyword = '';
            $("#AIClickedProperty").val('');
            var dxpAdavanceSearchOptions = $('#dxpAdavanceSearchOptions').val();
            if (!(dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != '' && dxpAdavanceSearchOptions != undefined))
            {
                dxpAdavanceSearchOptions = $('#floatingdxpAdavanceSearchOptions').val();
            }
            if (dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != undefined
                    && dxpAdavanceSearchOptions != '' && dxpAdavanceSearchOptions == 'D') {
                $("#AIClickedProperty").val(searchWord);
                var userval = $('#SearchResult').val();
                if (!(userval != null && userval != '' && userval != undefined)) {
                    userval = $('#searchedValue').val();
                }
                var ailensDictClickVal = "";
                if (aiDictClickVal != null && aiDictClickVal != undefined && aiDictClickVal != '') {
                    ailensDictClickVal = aiDictClickVal;
                } else {
                    ailensDictClickVal = " PROVIDE THE RESPONSE SHORT AND CLEAR COMPRISING IT TO 5-6 LINES";
                }
                if (category != null && category != undefined && category != '' &&
                        ailensDictClickVal != null && ailensDictClickVal != undefined && ailensDictClickVal != '') {
                    searchKeyword = searchWord + ' OF  ' + classTerm + ' RELATED TO ' + category + ' ' + ailensDictClickVal + '';
                } else {
                    searchKeyword = searchWord + ' OF  ' + classTerm;
                }
                showKeyword = searchWord + ' OF  ' + classTerm;
            } else {
                searchKeyword = searchWord;
                showKeyword = searchWord;
            }
            if (classTerm != null && classTerm != undefined && classTerm != "") {
                if (category != null && category != undefined && category != '' &&
                        ailensDictClickVal != null && ailensDictClickVal != undefined && ailensDictClickVal != '') {
                    searchKeyword = searchWord + ' OF  ' + classTerm + ' RELATED TO ' + category + ' ' + ailensDictClickVal + '';
                } else {
                    searchKeyword = searchWord + ' OF  ' + classTerm;
                }
                showKeyword = searchWord + ' OF  ' + classTerm;
            }
            $("#aiTypedValue").val(searchKeyword);
            showAITypeSearchResults(searchKeyword, showKeyword);
        });
        $(document).one("click", "#aiClickValResNo", function () {
            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>No, Thank you</div>");
        });
    } catch (e) {
    }
}
function showaiLoader() {
    try {
        $("#ailoaderTextID").text("Please wait while your request is being processed");
        $("#threeDotsLoader").css("opacity", "0.99");
        $("#threeDotsLoader").css("display", "block");
        setTimeout(function () {
            $("body").css("pointer-events", "auto");
            aiAutoScrollContainer();
        }, 500);
    } catch (e) {
    }
}
function stopaiLoader() {
    try {
        $("#threeDotsLoader").css("display", "none");
    } catch (e) {
    }
}
function loadInitialButtons(uxIconsType) {
    try {
        let displayButtonsStatus = false;
        let showLessContainer = false;
        if (uxIconsType == null || uxIconsType == undefined || uxIconsType == "") {
            uxIconsType = $("#loaddeafaultlensicons").val();
        }
        $.ajax({
            type: "POST",
            url: 'loadIntialButtonsData',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            },
            data: {
                uxIconsType: uxIconsType
            },
            traditional: true,
            cache: false,
            async: false,
            success: function (response) {
                if (response != null && response != undefined && response != "") {
                    if (uxIconsType != null && uxIconsType != undefined && uxIconsType != "" && uxIconsType != "LENS_HEADER_ICONS") {
                        var buttonsJson = JSON.parse(response);
                        $("#myBtnContainer").off("click", "#showmoreContent");
                        $("#myBtnContainer").off("click", "#showLessContent");
                        let buttonsToShowInitially = 5; // taking a number to display initial values or say elements
                        let hiddenButtons = buttonsJson.slice(buttonsToShowInitially); // we loop thorugh the the value we provided to the end of array
                        displayButtons(buttonsJson.slice(0, buttonsToShowInitially)); // we load the initial values when the dom loads
                        $("#myBtnContainer").on("click", "#showmoreContent", function () {
                            if (!displayButtonsStatus) {
                                displayButtons(hiddenButtons, !showLessContainer);
                                displayButtonsStatus = true;
                                $(this).hide();
                                $("#showLessContent").show();
                            }
                        });
                        $("#myBtnContainer").on("click", "#showLessContent", function () {
                            $("#myBtnContainer").empty();
                            displayButtons(buttonsJson.slice(0, buttonsToShowInitially));
                            displayButtonsStatus = false;
                            showLessContainer = false;
                            $("<button class='btn' id='showmoreContent'><span class='aitabimage'><img src='images/ai-show_plus.png' width='18px' /></span> <span class='aitabTitle'>Show More</span></button>").appendTo("#myBtnContainer");
                        });
                        $("<button class='btn' id='showmoreContent'><span class='aitabimage'><img src='images/ai-show_plus.png' width='18px' /></span> <span class='aitabTitle'>Show More</span></button>").appendTo("#myBtnContainer");
                    } else {
                        var buttonsJson = JSON.parse(response);
                        $(".aipanelRightIconsDiv").html(buttonsJson);
                    }
                }
            }
        });
    } catch (e) {
    }
}

function displayButtons(dataArray, showLessContainer) {
    try {
        let container = $("#myBtnContainer");
        dataArray.forEach(data => {
            container.append(`<button class="btn animation-anime" onclick="showDefaultOutputBasedOnAIType('${data.text}','KNOWLEDGE')"> <span class='aitabimage'><img src='${data.img}' width='18px' /></span><span class='aitabTitle'>${data.text}</span></button>`);
        });
        if (showLessContainer) {
            $("<button class='btn' id='showLessContent'> <span class='aitabimage'><img src='images/aiShowMore.png' width='18px' /></span> <span class='aitabTitle'>Show less</span></button>").appendTo(container);
        }
    } catch (e) {
    }
}

function aiButtonsAnimations() {
    try {
        const animationEleme = document.querySelectorAll('.animation-anime')
        anime({
            targets: animationEleme,
            translateY: ['-300px', '0'],
            easing: 'easeInOutQuad',
            delay: function (el, i, l) {
                return i * 100;
            },
        });
    } catch (e) {
    }
}
document.addEventListener('DOMContentLoaded', () => {
    loadInitialButtons();
});
function aiAutoScrollContainer() {
    try {
        let container = $(".aicontentArea");
        container.animate({
            scrollTop: container[0].scrollHeight
        }, 100, "swing");
    } catch (e) {
    }
}
function showNewChatData() {
    try {
        $(".aiChatgptResponseContainer").html("");
        $(".aiNotificationsResultClass").html("");
//    $(".airesponseWrapperDiv").html("");
        $("#aiTypedValue").trigger("focus");
        $("#aiTypedValue").attr('readonly', false);
        showDefaultOutputBasedOnAIType('LOGIN', 'KNOWLEDGE');
    } catch (e) {
    }
}
function showAIDictClickedValResults(clickedValue) {
    try {
        openAINavigation();
        var clickedPropertyVal = $("#AIClickedProperty").val();
        var searchKeyword = clickedPropertyVal + ' ' + clickedValue;
        $("#aiTypedValue").val(searchKeyword)
        showAITypeSearchResults(searchKeyword);
    } catch (e) {
    }
}
function toggleMic(textInputId) {
    try {
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
        $("#" + textInputId).val('');
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = $(".languageSelectionBox").val();
        // Event delegation for mute/unmute buttons
        $(".moreaiOptions").on("click", "#muteMicId", function () {
            $(this).attr("src", "images/animationMic.gif");
            $(this).attr("id", "unmuteMicId");
            console.log('Voice recognition turned off.');
            recognition.start();
        });
        $(".moreaiOptions").on("click", "#unmuteMicId", function () {
            $(this).attr("src", "images/Mike-OutLine-Icon-01.png");
            $(this).attr("id", "muteMicId");
            console.log('Voice recognition activated. Try speaking into the microphone.');
            recognition.stop();
        });
        recognition.onresult = function (event) {
            var current = event.resultIndex;
            var transcript = event.results[current][0].transcript;
            if (transcript != null && transcript != undefined && transcript != '') {
                $("#" + textInputId).val(transcript);
                var modalObj = {
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'AI Message',
                    body: "<div id='successmsg'>Are you want to Search?</div>"
                };
                var buttonArray = [
                    {
                        text: 'OK',
                        click: function () {
                            showAITypeSearchResults(transcript);
                            $("#unmuteMicId").attr("src", "images/Mike-OutLine-Icon-01.png");
                            $("#unmuteMicId").attr("id", "muteMicId");
                            console.log('Voice recognition activated. Try speaking into the microphone.');
                            recognition.stop();
//                         isCloseButton: false

                        },
                        isCloseButton: true
                    },
                    {
                        text: 'Cancel',
                        click: function () {
                            $("#unmuteMicId").attr("src", "images/Mike-OutLine-Icon-01.png");
                            $("#unmuteMicId").attr("id", "muteMicId");
                            console.log('Voice recognition activated. Try speaking into the microphone.');
                            recognition.stop();
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
                $(".modal-backdrop").show();
                $(".modal-dialog").addClass("modal-md");
            }

        }

        recognition.onstart = function () {
            console.log('Voice recognition activated. Try speaking into the microphone.');
        }

        recognition.onspeechend = function () {
            console.log('Voice recognition turned off.');
            $(this).attr("src", "images/Mike-OutLine-Icon-01.png");
            $(this).attr("id", "muteMicId");
        }

        recognition.onerror = function (event) {
            if (event.error == 'no-speech') {
                console.log('No speech was detected. Try again.');
            } else if (event.error == 'audio-capture') {
                console.log('Error capturing audio. Check your microphone settings.');
            } else if (event.error == 'not-allowed') {
                console.log('Microphone access is not allowed. Please enable it in your browser settings.');
            }
        }
    } catch (e) {
    }
}
function showAIReferenceNoAndClassBasedLinks(referenceNo, className, gridId, recordNo) {
    try {
        openAINavigation();
        KDSAIlensDefaultYesNo('Do you need fetch data from AI Lens?', 'aiRefNoClassYes',
                'aiRefNoClassNo', 'Yes, Continue', 'No, Thank you', 'aiDefaultYesImgClass', 'aiDefaultNoImgClass');
        $(document).one("click", "#aiRefNoClassYes", function () {
            showaiLoader();
            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>Yes, Continue</div>");
            var enableDisAI = $("#AIEnableOrDisableFlag").val();
            if (enableDisAI != null && enableDisAI != undefined && enableDisAI != "" && enableDisAI == 'Y') {

                $("#aiTypedValue").val(className + ' ' + referenceNo);
                $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>AI Lens : " + className + ' ' + referenceNo + "</div>");
                $("#aiTypedValue").attr('readonly', true);
                $('#stopResponsingID').show(1000);
                $.ajax({
                    type: "POST",
                    url: 'getReferenceLinksBasedOnRefNoAndClass',
                    data: {
                        referenceNo: referenceNo,
                        className: className,
                        recordNo: recordNo
                    },
                    traditional: true,
                    cache: false,
                    success: function (response) {
                        stopaiLoader();
                        aiAutoScrollContainer();
                        const notificationJson = [];
                        $("#aiTypedValue").val('');
                        if (response != null && response != undefined && response != "") {
                            var responseObj = JSON.parse(response);
                            var mappingObj = responseObj['mappingObj'];
                            var duplicateStr = responseObj['duplicateStr'];
                            var aiLensRefDocDuplicateFlag = responseObj['aiLensRefDocDuplicateFlag'];
                            var aiLensRefDocMappingFlag = responseObj['aiLensRefDocMappingFlag'];
                            var propertyList = responseObj['properties'];
                            if (duplicateStr != null && duplicateStr != undefined && duplicateStr != "") {
                                delete responseObj['duplicateStr'];
                            }
                            var duplicateMsg = responseObj['duplicateMsg'];
                            delete responseObj['mappingObj'];
                            delete responseObj['duplicateMsg'];
                            $(".typed-cursor").hide();
//                        var length = Object.keys(responseObj).length;
//                        for (var i = 0; i < length; i++) {
                            var dataObj = {};
                            var messagePopupCreation = "<div class='aiLensResultDataClass'>" + responseObj['1row'] + "</div>";
                            dataObj['id'] = 1;
                            dataObj['notif'] = messagePopupCreation;
                            notificationJson.push(dataObj);
//                        }
                            const notificationStrings = notificationJson.map((elem) => elem.notif);
                            $(".typed-cursor").hide();
                            animateListItem(0);
                            function animateListItem(index) {
                                if (index < notificationJson.length) {
                                    const listItem = $(`<div class='airesponseWrapperDiv aiLensReceiverImgClass' data-id='${notificationJson[index].id}'><div class='aiLensMainResultBoxClass' id='aiLensMainResultBoxClass'>`
                                            + `<div class='listItemsText'></div>`
                                            + `<div class='aiLensImageDataClass' id='aiLensImageDataClass'>`
                                            + `<span id='aiResulBoxLikeClassId` + aiResultBoxCount + `'><img src=\"images/like_blue.png\" title='Like' style='width:20px;cursor:pointer;' data-id='${notificationJson[index].id}' onclick="likeAIGivenData('LIKE', event, this)"></span>`
                                            + `<span id='aiResulBoxDisLikeClassId` + aiResultBoxCount + `'><img src=\"images/dislike_blue.png\" title='Dislike' style='width:20px;cursor:pointer;' + onclick="likeAIGivenData('DISLIKE', event, this)"></span>`
                                            + `<span id='aiResulBoxCopyClassId` + aiResultBoxCount + `'><img src=\"images/aiCopy.png\" title='Copy' style='width:20px;cursor:pointer;'></span>`
                                            + `<span id='aiResulBoxDownloadClassId` + aiResultBoxCount + `'><img src=\"images/aiDownload.png\" title='Download' style='width:20px;curser:pointer;' id='aiTextDwnldBtn` + aiResultBoxCount + `' onclick="downloadAIGivenData()"></span>`
                                            + `</div>`
                                            + `</div>`);
                                    $(".aiChatgptResponseContainer").append(listItem);
//                            $(".typed-cursor").hide();
                                    const typed = new Typed(listItem.find('.listItemsText')[0], {
                                        strings: [notificationStrings[index]],
                                        typeSpeed: 20,
                                        onComplete: function () {
                                            console.log('Animation completed for', notificationJson[index].id);
                                            aiAutoScrollContainer();
                                            if (aiLensRefDocDuplicateFlag != null && aiLensRefDocDuplicateFlag != undefined
                                                    && aiLensRefDocDuplicateFlag != "" && aiLensRefDocDuplicateFlag == 'Y') {
                                                AILensOperationPopup(duplicateMsg, duplicateStr, mappingObj, recordNo, aiLensRefDocMappingFlag, propertyList);
                                            }
                                            $(".typed-cursor").hide();
                                            $("#stopResponsingID").hide();
                                            $("#aiTypedValue").attr('readonly', false);
                                            $(`#aiResulBoxCopyClassId${aiResultBoxCount}`).click(function () {
                                                aiResponseCopy();
                                            });
                                            aiResultBoxCount++;
                                            if (gridId != null && gridId != undefined && gridId != '') {
                                                $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                                            }
                                            animateListItem(index + 1);
                                            $(".aiLensResultDataClass").attr("data-result-value", notificationStrings[index]);
                                        }


                                    });
                                    $('#stopResponsingID').click(function () {
                                        typed.stop();
                                        $("#aiTypedValue").removeAttr("readonly");
                                        $('#stopResponsingID').hide();
                                    });
                                }

                            }
                            stopaiLoader();
//            $(".aiNotificationsResultClass").html(response);
                        }
                    }
                });
            }
        });
        $(document).one("click", "#aiRefNoClassNo", function () {
            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>No, Thank you</div>");
        });
    } catch (e) {
    }
}

function AILensOperationPopup(duplicateMsg, duplicateStr, mappingObj, recordNo, aiLensRefDocMappingFlag, propertyList) {
    try {
        var itemsString = $("#itemsstring").val();
        var duplicateDataStr = duplicateStr != null ? duplicateStr : "";
        var modalObj = {
            title: labelObject['Message'] != null ? labelObject['Message'] : 'AI Message',
            body: "<div id='successmsg' class='successmsg'>" + duplicateMsg + "</div><div id='showAILensUpdatedTableClass' class='showAILensUpdatedTableClass'>" + duplicateDataStr + "</div>"
        };
        var buttonArray = [
            {
                text: 'OK',
                click: function () {
                    if (aiLensRefDocMappingFlag != null && aiLensRefDocMappingFlag != undefined
                            && aiLensRefDocMappingFlag != "" && aiLensRefDocMappingFlag == "Y") {
                        getAILensManualMappingData(mappingObj, itemsString, recordNo, propertyList, aiLensRefDocMappingFlag)
                    } else {
                        getAILensMappingObjData(mappingObj, itemsString, recordNo);
                    }
                },
                isCloseButton: true
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
        $("#dataDxpSplitterValue").addClass("checkDuplicatesPopUpClass");
        $("#dataDxpSplitterValue .modal-dialog").addClass("modal-md");
        stopaiLoader();
    } catch (e) {
    }
}
function getAILensMappingObjData(mappingObj, itemsString, recordNo) {
    try {
        showLoader();
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
        itemsString = JSON.stringify(basicData);
        $.ajax({
            type: "POST",
            url: 'getAILensMappingObjData',
            data: {
                mappingObj: mappingObj,
                itemsString: itemsString,
                recordNo: recordNo,
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                if (response != null) {
                    var responseObj = JSON.parse(response);
                    var message = responseObj['message'];
                    var flag = responseObj['flag'];
                    var successResult = "";
                    if (flag) {
                        var resultStr = responseObj['resultStr'];
                        var resultDataStr = resultStr != null ? resultStr : "";
                        successResult = "<div id='showAILensUpdatedTableClass' class='showAILensUpdatedTableClass'>" + resultDataStr + "</div>";
                    }
                    var modalObj = {
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'AI Message',
                        body: "<div id='successmsg' class='successmsg'>" + message + "</div>" + successResult + ""
                    };
                    var buttonArray = [
                        {
                            text: 'OK',
                            click: function () {
                            },
                            isCloseButton: true
                        },
                        {
                            text: 'Cancel',
                            click: function () {
                            },
                            isCloseButton: true
                        }
                    ];
                    modalObj['buttons'] = buttonArray;
                    createModal("dataDxpSplitterValueNew", modalObj);
                    $(".modal-dialog").addClass("showAILensUpdatePopUpCustomClass");
                }
            }
        });
    } catch (e) {
    }
}
//function disableEnableAiLens(element) {
//    let imgElement = $("#aiLensToggleBtnId").find("img");
//    if (imgElement.attr("src").endsWith("images/aiEnable.png")) {
//        imgElement.attr("src", "images/ai_disable.png");
//        $(".openAiButton").hide();
//        $(".OpenAisection").hide();
//        $("#AIEnableOrDisableFlag").val("N");
//    } else {
//        imgElement.attr("src", "images/aiEnable.png");
//        $(".openAiButton").show();
//        $(".OpenAisection").show();
//        $("#AIEnableOrDisableFlag").val("Y");
//    }
//}
function AILensTypingAndConfirmationMsg(typingData, className, confMsgFlag, confMsgYesFunWithParams, confMsgNoFunWithParams) {
    try {
        showaiLoader();
        openAINavigation();
        $("#alLensConfiramtionMessage").html('');
        $(".airesponseWrapperDiv").html('');
        var dataObj = {};
        const notificationJson = [];
        var messagePopupCreation = "<div class='aiLensResultDataClass'>" + typingData + "</div><div class='alLensConfiramtionMessage' id='alLensConfiramtionMessage'></div>";
        if (confMsgFlag != null && confMsgFlag != undefined && confMsgFlag != "" && confMsgFlag == 'Y') {
            var confirmationMessageYesOrNo = "<div class='alLensConfSubClass'><span class='alLensConfSubSpanYesClass'>\n\
<button class='btn btn-primary' onclick=\"" + confMsgYesFunWithParams + "\">Yes</button></span><span class='alLensConfSubSpanNoClass'>\n\
<button class='btn btn-primary' onclick=\"" + confMsgNoFunWithParams + "\">No</button></span></div>";
        }

        dataObj['id'] = 1;
        dataObj['notif'] = messagePopupCreation;
        notificationJson.push(dataObj);
        const notificationStrings = notificationJson.map((elem) => elem.notif);
        $(".typed-cursor").hide();
        animateListItem(0);
        function animateListItem(index) {
            if (index < notificationJson.length) {
                const listItem = $(`<div class='airesponseWrapperDiv aiLensReceiverImgClass' data-id='${notificationJson[index].id}'><div class='aiLensMainResultBoxClass' id='aiLensMainResultBoxClass'>`
                        + `<div class='listItemsText'></div>`
//                    + `<div class='aiLensImageDataClass' id='aiLensImageDataClass'>`
//                    + `<span id='aiResulBoxLikeClassId` + aiResultBoxCount + `'><img src=\"images/like_blue.png\" title='Like' style='width:20px;curser:pointer;'></span>`
//                    + `<span id='aiResulBoxDisLikeClassId` + aiResultBoxCount + `'><img src=\"images/dislike_blue.png\" title='Dislike' style='width:20px;curser:pointer;'></span>`
//                    + `<span id='aiResulBoxCopyClassId` + aiResultBoxCount + `'><img src=\"images/aiCopy.png\" title='Copy' style='width:20px;curser:pointer;'></span>`
//                    + `<span id='aiResulBoxDownloadClassId` + aiResultBoxCount + `'><img src=\"images/aiDownload.png\" title='Download' style='width:20px;curser:pointer;'></span>`
//                    + `</div>`
                        + `</div>`);
                $("." + className).append(listItem);
//                            $(".typed-cursor").hide();
                const typed = new Typed(listItem.find('.listItemsText')[0], {
                    strings: [notificationStrings[index]],
                    typeSpeed: 20,
                    onComplete: function () {

                        console.log('Animation completed for', notificationJson[index].id);
                        aiAutoScrollContainer();
                        $(".typed-cursor").hide();
                        $("#aiTypedValue").attr('readonly', false);
                        if (confMsgFlag != null && confMsgFlag != undefined && confMsgFlag != "" && confMsgFlag == 'Y') {
                            $("#alLensConfiramtionMessage").html(confirmationMessageYesOrNo);
                            stopaiLoader();
                        }
                        $(`#aiResulBoxCopyClassId${aiResultBoxCount}`).click(function () {
                            aiResponseCopy();
                        });
                        aiResultBoxCount++;
                        animateListItem(index + 1);
                        $(".aiLensResultDataClass").attr("data-result-value", notificationStrings[index]);
                    }


                });
                $('#stopResponsingID').click(function () {
                    typed.stop();
                    $("#aiTypedValue").removeAttr("readonly");
                    $('#stopResponsingID').hide();
                });
            }

        }
    } catch (e) {
    }
}
function openIntroWithAI() {
    try {
//        $("#introGuiderAi").hide();
//        closeAINavigation();
//        homePageGuide2();
    } catch (e) {
    }
}
function closeIntroWithAI() {
    try {
        closeAINavigation();
        $("#introGuiderAi").hide();
    } catch (e) {
    }
}
function generate360Image() {
    try {
        var div = '<div id="product" style="width: 640px; height: 480px; overflow: hidden;"> <img src="images/Gasket1.png" /> <img src="images/Gasket2.png" /> <img src="images/Gasket3.png" /> <img src="images/Gasket2.png" </div>';
        var modalObj = {
            title: labelObject['Message'] != null ? labelObject['Message'] : 'AI Message',
            body: "<div id='successmsg' class='successmsg'>" + div + "</div>",
        };
        var buttonArray = [
            {
                text: 'OK',
                click: function () {
                },
                isCloseButton: true
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
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-36251023-1']);
        _gaq.push(['_setDomainName', 'jqueryscript.net']);
        _gaq.push(['_trackPageview']);
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
        $('#product').j360();
    } catch (e) {
    }
}
function disableEnableAiLens(element) {
    try {
        closeAINavigation();
        $(".openAiButton img").attr("src", "images/aieyeLensclick.png");
        $("#myNav").addClass("disable");
        $("#AIEnableOrDisableFlag").val("N");
        $(".aiLensImgSrcAppend").attr('src', 'images/AILens.gif');
    } catch (e) {
    }
}

function downloadAIGivenData(e) {
    try {
        function downloadDiv(filename, elementClass, mimeType) {
            let closestMainResultBox = event.target.closest('.aiLensMainResultBoxClass');
            let valueID = event.currentTarget.id;
            if (closestMainResultBox) {
                let resultDataChild = closestMainResultBox.querySelector('.aiLensResultDataClass');
                if (resultDataChild) {
                    let elementHtml = resultDataChild.innerHTML;
                    let filename = 'AIResponse.html';
                    let mimeType = 'text/plain';

                    let link = document.createElement('a');
                    link.setAttribute('download', filename);
                    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elementHtml.replace("<br>", "")));
                    link.click();
                    const tooltip = $('<div class="downloadedTooltip"><span class="tooltiptext"> downloaded </span></div>');
                    $("#" + valueID).append(tooltip);
                    setTimeout(function () {
                        tooltip.remove();
                    }, 1000);
                }
            }
        }

        var fileName = 'aiLensResultDataClass.html';
        var elementClass = 'aiLensResultDataClass';
        downloadDiv(fileName, elementClass);
    } catch (e) {
    }
}

function getTheDataBasedOnDateOptions(analysisType, viewType, data, showId) {
    try {
        $("#AILensDateOpt" + showId + "Id").html("");
        if (viewType != null && viewType != undefined && viewType != "" && viewType == "DATA") {
            var optionhtml = "<div class=\"textContent\">Please choose below option</div>"
                    + "<div class=\"AIlensOptionsData\" style='display:flex;'><div class=\"viewData\"><div class=\"viewButton\" "
                    + "onclick=\"showAnalyticsBasedOnAnalysis('" + analysisType + "')\"><span class=\"viewIcon\">"
                    + "<img src=\"\" class=\"\"></span><span class=\"viewText\">This Year</span></div></div>"
                    + "<div class=\"viewData\"><div class=\"viewButton\" onclick=\"showAnalyticsBasedOnAnalysis('" + analysisType + "')\"><span class=\"viewIcon\">"
                    + "<img src=\"\" class=\"\"></span><span class=\"viewText\">2023</span></div></div>"
                    + "<div class=\"viewData\"><div class=\"viewButton\" onclick=\"showAnalyticsBasedOnAnalysis('" + analysisType + "')\"><span class=\"viewIcon\">"
                    + "<img src=\"\" class=\"\"></span><span class=\"viewText\">2022</span></div></div>"
                    + "<div class=\"viewData\"><div class=\"viewButton\" onclick=\"showAnalyticsBasedOnAnalysis('" + analysisType + "')\"><span class=\"viewIcon\">"
                    + "<img src=\"\" class=\"\"></span><span class=\"viewText\">2021</span></div></div></div>";
            $("#AILensDateOpt" + showId + "Id").show();
            $("#AILensDateOpt" + showId + "Id").html(optionhtml);
//        showAnalyticsBasedOnAnalysis(analysisType);
        } else if (viewType != null && viewType != undefined && viewType != "" && viewType == "CHART") {
            var optionhtml = "<div class=\"textContent\">Please choose below option</div>"
                    + "<div class=\"AIlensOptionsData\" style='display:flex;'><div class=\"viewData\"><div class=\"viewButton\" "
                    + "onclick=\"showAISpendAnalytics('" + analysisType + "')\"><span class=\"viewIcon\">"
                    + "<img src=\"\" class=\"\"></span><span class=\"viewText\">This Year</span></div></div>"
                    + "<div class=\"viewData\"><div class=\"viewButton\" onclick=\"showAISpendAnalytics('" + analysisType + "')\"><span class=\"viewIcon\">"
                    + "<img src=\"\" class=\"\"></span><span class=\"viewText\">2023</span></div></div>"
                    + "<div class=\"viewData\"><div class=\"viewButton\" onclick=\"showAISpendAnalytics('" + analysisType + "')\"><span class=\"viewIcon\">"
                    + "<img src=\"\" class=\"\"></span><span class=\"viewText\">2022</span></div></div>"
                    + "<div class=\"viewData\"><div class=\"viewButton\" onclick=\"showAISpendAnalytics('" + analysisType + "')\"><span class=\"viewIcon\">"
                    + "<img src=\"\" class=\"\"></span><span class=\"viewText\">2021</span></div></div></div>";
            $("#AILensDateOpt" + showId + "Id").show();
            $("#AILensDateOpt" + showId + "Id").html(optionhtml);
//        showAISpendAnalytics(analysisType);
        } else if (viewType != null && viewType != undefined && viewType != "" && viewType == "MAP") {
            var optionhtml = "<div class=\"textContent\">Please choose below option</div>"
                    + "<div class=\"AIlensOptionsData\" style='display:flex;'><div class=\"viewData\"><div class=\"viewButton\" "
                    + "onclick=\"viewInMap('" + data + "')\"><span class=\"viewIcon\">"
                    + "<img src=\"\" class=\"\"></span><span class=\"viewText\">This Year</span></div></div>"
                    + "<div class=\"viewData\"><div class=\"viewButton\" onclick=\"viewInMap('" + data + "')\"><span class=\"viewIcon\">"
                    + "<img src=\"\" class=\"\"></span><span class=\"viewText\">2023</span></div></div>"
                    + "<div class=\"viewData\"><div class=\"viewButton\" onclick=\"viewInMap('" + data + "')\"><span class=\"viewIcon\">"
                    + "<img src=\"\" class=\"\"></span><span class=\"viewText\">2022</span></div></div>"
                    + "<div class=\"viewData\"><div class=\"viewButton\" onclick=\"viewInMap('" + data + "')\"><span class=\"viewIcon\">"
                    + "<img src=\"\" class=\"\"></span><span class=\"viewText\">2021</span></div></div></div>";
//        viewInMap(data);
            $("#AILensDateOpt" + showId + "Id").show();
            $("#AILensDateOpt" + showId + "Id").html(optionhtml);
        } else if (viewType != null && viewType != undefined && viewType != "" && viewType == "PIVOT") {
            var optionhtml = "<div class=\"textContent\">Please choose below option</div>"
                    + "<div class=\"AIlensOptionsData\" style='display:flex;'><div class=\"viewData\"><div class=\"viewButton\" "
                    + "onclick=\"getAILensPivotData('" + data + "')\"><span class=\"viewIcon\">"
                    + "<img src=\"\" class=\"\"></span><span class=\"viewText\">This Year</span></div></div>"
                    + "<div class=\"viewData\"><div class=\"viewButton\" onclick=\"getAILensPivotData('" + data + "')\"><span class=\"viewIcon\">"
                    + "<img src=\"\" class=\"\"></span><span class=\"viewText\">2023</span></div></div>"
                    + "<div class=\"viewData\"><div class=\"viewButton\" onclick=\"getAILensPivotData('" + data + "')\"><span class=\"viewIcon\">"
                    + "<img src=\"\" class=\"\"></span><span class=\"viewText\">2022</span></div></div>"
                    + "<div class=\"viewData\"><div class=\"viewButton\" onclick=\"getAILensPivotData('" + data + "')\"><span class=\"viewIcon\">"
                    + "<img src=\"\" class=\"\"></span><span class=\"viewText\">2021</span></div></div></div>";
//        getAILensPivotData(data);
            $("#AILensDateOpt" + showId + "Id").show();
            $("#AILensDateOpt" + showId + "Id").html(optionhtml);
        }
        $(event.currentTarget).parent().children().removeClass('active');
        $(event.currentTarget).addClass('active');
        let mainEle = event.target;
        $(mainEle).closest('.listItemsViews').find('li').each(function (index, ele) {
            let children = $(ele).children();
            if (children.length === 3 && $(ele).get(0) !== $(mainEle).closest('li').get(0)) {
                children.last().hide();
                $(ele).find('.active').removeClass('active');
            }
        });
    } catch (e) {
    }
}
function showAnalyticsBasedOnAnalysis(analysisType, erpNo) {
    try {
        showLoader();
//        var erpNo = localStorage["ERP_NO"];
        $.ajax({
            type: "POST",
            url: 'getAnalysisResultsBasedOnType',
            data: {
                analysisType: analysisType,
                erpNo: erpNo,
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                var modalObj = {
                    title: labelObject['Message'] != null ? labelObject['Message'] : analysisType,
                    body: "<div id='aiAnalyticsBasedOnAnalysis' class='aiAnalyticsBasedOnAnalysis'>" + response + "</div>",
                };
                var buttonArray = [
                    {
                        text: 'OK',
                        click: function () {
                        },
                        isCloseButton: true
                    },
                    {
                        text: 'Cancel',
                        click: function () {
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dialog2", modalObj);
                $(".modal-dialog").addClass("modal-md");
            }
        });
    } catch (e) {
    }
}
function viewInMap(erpNo) {
    try {
        $("#map").remove();
        $("body").append("<div id=map></div>");
        showLoader();
        $.ajax({
            type: "POST",
            url: 'getVendorLocations',
            data: {
                erpNo: erpNo
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                if (response != null && response != undefined && response != '') {
                    var addresses = [];
                    var addressesObj = response;
                    $.each(addressesObj, function (i) {
                        if (addressesObj[i][0] != null) {
                            var rowData = addressesObj[i];
                            addresses.push(rowData[0] + ", " + rowData[1]);
                        }
                    });
                    navigator.geolocation.getCurrentPosition(
                            function (position) {
                                var userLatLng = {
                                    lat: position.coords.latitude,
                                    lng: position.coords.longitude
                                };
                                var map = new google.maps.Map(document.getElementById('mapDialog'), {
                                    center: userLatLng,
                                    zoom: 5 // Adjust the zoom level as needed
                                });
                                // Add a marker for the user's location
                                var userMarker = new google.maps.Marker({
                                    map: map,
                                    position: userLatLng,
                                    title: 'My Location',
                                    icon: {
                                        url: 'images/location.png',
                                        scaledSize: new google.maps.Size(24, 24),
                                        fillColor: 'blue',
                                        fillOpacity: 0.7,
                                        strokeColor: 'white',
                                        strokeWeight: 2
                                    }
                                });
                                // Add info window for user's marker
                                var userInfowindow = new google.maps.InfoWindow({
                                    content: 'Your Location'
                                });
                                userMarker.addListener('click', function () {
                                    userInfowindow.open(map, userMarker);
                                });
                                // Geocode and add markers with info windows for each address
                                addresses.forEach(function (address) {
                                    var geocoder = new google.maps.Geocoder();
                                    showLoader();
                                    geocoder.geocode({address: address}, function (results, status) {
                                        if (status === 'OK') {
                                            stopLoader();
                                            var marker = new google.maps.Marker({
                                                map: map,
                                                position: results[0].geometry.location,
                                                title: address
                                            });
                                            let randomInt = getRandomInt(80, 90);
                                            // Add info window for the address marker
                                            var infowindow = new google.maps.InfoWindow({
                                                content: "<div class='info-window-content'>$" + randomInt + "</div>"
                                            });
                                            infowindow.open(map, marker);
                                        } else {
                                            stopLoader();
                                            console.error('Geocode was not successful for the following reason: ' + status);
                                        }
                                    });
                                });
                            },
                            function (error) {
                                stopLoader();
                                console.error('Error getting user location: ' + error.message);
                            }
                    );
//                    closeDialogBox("#dialog");
                    $("#dialog").html('<div id="mapDialog" style="height: 400px; width: 100%;"></div>');
                    $("#dialog").dialog({resizable: false,
                        title: labelObject['Vendor Locations'] != null ? labelObject['Vendor Locations'] : 'Vendor Locations',
                        modal: true,
                        height: 'auto',
                        minWidth: 300,
                        width: 1000,
                        fluid: true,
                        buttons: [{
                                text: 'Ok',
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("destroy");
                                }
                            }],
                        open: function () {
//                            $(this).closest(".ui-dialog").css("z-index", "9999");
//                            //   //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                            $(".visionHeaderMain").css("z-index", "999");
//                            $(".visionFooterMain").css("z-index", "999");
                        },
                        beforeClose: function (event, ui) {
                            $(this).html("");
                            $(this).dialog("destroy");
                        }
                    });
                }
            }
        });
    } catch (e) {
    }
}

function addMarker(map, locationData, bounds) {
    try {
        var location = locationData.geometry.location;
        bounds.extend(location);
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            title: locationData.name
        });
        var infoWindow = new google.maps.InfoWindow({
            content: `<strong>${locationData.name}</strong><br>${locationData.formatted_address}<br>Your custom information here`
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker);
        });
        google.maps.event.addListener(marker, 'mouseover', function () {
            infoWindow.open(map, marker);
        });
        google.maps.event.addListener(marker, 'mouseout', function () {
            infoWindow.close();
        });
    } catch (e) {
    }
}
function aiResponseCopy(e) {
    try {
        $(".aiLensResultDataClass").each(function () {
            let value = $(this).attr("data-result-value");
            let valueID = $(event.currentTarget).attr("id");
            const innterTextResponse = $("#" + valueID).text();
            console.log(innterTextResponse);
            let regex = /<div\b[^>]*>(.*?)<\/div>/g;
            let output = value.replace(regex, "$1");
            const textarea = document.createElement('textarea');
            textarea.value = output;
            $("body").append(textarea);
            textarea.select();
            document.execCommand('copy');
            $(textarea).remove();
            const tooltip = $('<div class="copiedTooltip"><span class="tooltiptext"> Copied </span></div>');
            $("#" + valueID).append(tooltip);
            setTimeout(function () {
                tooltip.remove();
            }, 1500);
        });
    } catch (e) {
    }
}
function showAISpendAnalytics(analysisType, erpNo) {
    try {
        showLoader();
        $.ajax({
            type: "POST",
            url: 'showAILensAnalyticsBasedType',
            data: {
                analysisType: analysisType,
                erpNo: erpNo,
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                if (response != null && response != undefined && response != '') {
                    var responseObj = JSON.parse(response);
                    if (analysisType != null && analysisType != undefined && analysisType != '' && analysisType == 'Spend Analysis') {
                        var yearList = responseObj['yearList'];
                        var vendorNameList = responseObj['vendorNameList'];
                        var effectiveValList = responseObj['effectiveValList'];
                        var orderQtyList = responseObj['orderQtyList'];
                        var plantList = responseObj['plantList'];
                        var netOrderPriceList = responseObj['netOrderPriceList'];
                        var modalObj = {
                            title: labelObject['Message'] != null ? labelObject['Message'] : analysisType,
                            body: "<div id='aiLensMainDashBoardsClass' class='aiLensMainDashBoardsClass'>\n\
                           <div class='container-fluid'>\n\
                            <div class='row'>\n\
                            <div class='col-lg-6'><div id='aiLensQtyDashBoardsClass' class='aiLensQtyDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensNetPrDashBoardsClass' class='aiLensNetPrDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensNetWrDashBoardsClass' class='aiLensNetWrDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensGrDashBoardsClass' class='aiLensGrDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensGrValDashBoardsClass' class='aiLensGrValDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensOrderDashBoardsClass' class='aiLensOrderDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensEvalDashBoardsClass' class='aiLensEvalDashBoardsClass aigraphContainer'></div></div>\n\
                            </div>\n\
                            </div\n\
                           </div>",
                        };
                        var buttonArray = [
                            {
                                text: 'OK',
                                click: function () {
                                },
                                isCloseButton: true
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
                        $(".modal-dialog").addClass("modal-xl");
                        $("#dataDxpSplitterValue").addClass("viewAnalysticsPopup");
//                aiLensDashBoardCreation('bar', 'aiLensQtyDashBoardsClass', labelsList, yearsList, effectiveValList);
                        aiLensDashBoardCreation('donut', 'aiLensQtyDashBoardsClass', yearList, effectiveValList, 'Year Wise Total Spent');
                        aiLensDashBoardCreation('bar', 'aiLensNetPrDashBoardsClass', yearList, orderQtyList, 'Year Wise Order Quantity');
                        aiLensDashBoardCreation('scatter', 'aiLensNetWrDashBoardsClass', plantList, netOrderPriceList, 'Plant Wise Net Price');
                        aiLensDashBoardCreation('funnel', 'aiLensGrDashBoardsClass', plantList, orderQtyList, 'Plant Wise Order Quantity');
                        aiLensDashBoardCreation('column', 'aiLensGrValDashBoardsClass', vendorNameList, netOrderPriceList, 'Vendor Wise Net Price');
                        aiLensDashBoardCreation('lines', 'aiLensOrderDashBoardsClass', vendorNameList, orderQtyList, 'Vendor Wise Order Quantity');
                    } else if (analysisType != null && analysisType != undefined && analysisType != '' && analysisType == 'Equipment Linkage') {
                        var equipmentList = responseObj['equipmentList'];
                        var plantList = responseObj['plantList'];
                        var bomQtyList = responseObj['bomQtyList'];
                        var modalObj = {
                            title: labelObject['Message'] != null ? labelObject['Message'] : analysisType,
                            body: "<div id='aiLensMainDashBoardsClass' class='aiLensMainDashBoardsClass'>\n\
                           <div class='container-fluid'>\n\
                            <div class='row'>\n\
                            <div class='col-lg-6'><div id='aiLensQtyDashBoardsClass' class='aiLensQtyDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensNetPrDashBoardsClass' class='aiLensNetPrDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensNetWrDashBoardsClass' class='aiLensNetWrDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensGrDashBoardsClass' class='aiLensGrDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensGrValDashBoardsClass' class='aiLensGrValDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensOrderDashBoardsClass' class='aiLensOrderDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensEvalDashBoardsClass' class='aiLensEvalDashBoardsClass aigraphContainer'></div></div>\n\
                            </div>\n\
                            </div\n\
                           </div>",
                        };
                        var buttonArray = [
                            {
                                text: 'OK',
                                click: function () {
                                },
                                isCloseButton: true
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
                        $(".modal-dialog").addClass("modal-xl");
                        $("#dataDxpSplitterValue").addClass("viewAnalysticsPopup");
//                aiLensDashBoardCreation('bar', 'aiLensQtyDashBoardsClass', labelsList, yearsList, effectiveValList);
                        aiLensDashBoardCreation('donut', 'aiLensQtyDashBoardsClass', equipmentList, bomQtyList, 'Equipment With Bom Quantity');
                        aiLensDashBoardCreation('pie', 'aiLensNetPrDashBoardsClass', plantList, bomQtyList, 'Plant Wise Bom Quantity');
//                    aiLensDashBoardCreation('column', 'aiLensNetWrDashBoardsClass', equipmentList, plantList, 'Equipment Wise Plant');
//                    aiLensDashBoardCreation('pie', 'aiLensGrDashBoardsClass', plantList, orderQtyList, 'Plant Wise Order Quantity');
//                    aiLensDashBoardCreation('pie', 'aiLensGrValDashBoardsClass', vendorNameList, netOrderPriceList, 'Vendor Wise Net Price');
//                    aiLensDashBoardCreation('pie', 'aiLensOrderDashBoardsClass', vendorNameList, orderQtyList, 'Vendor Wise Order Quantity');
                    } else if (analysisType != null && analysisType != undefined && analysisType != '' && analysisType == 'Purchasing/Sourcing History') {
                        var purchasingDocList = responseObj['purchasingDocList'];
                        var poYearList = responseObj['poYearList'];
                        var createdDateList = responseObj['createdDateList'];
                        var orderQtyList = responseObj['orderQtyList'];
                        var netPriceList = responseObj['netPriceList'];
                        var effectiveValList = responseObj['effectiveValList'];
                        var vendorNameList = responseObj['vendorNameList'];
                        var modalObj = {
                            title: labelObject['Message'] != null ? labelObject['Message'] : analysisType,
                            body: "<div id='aiLensMainDashBoardsClass' class='aiLensMainDashBoardsClass'>\n\
                           <div class='container-fluid'>\n\
                            <div class='row'>\n\
                            <div class='col-lg-6'><div id='aiLensQtyDashBoardsClass' class='aiLensQtyDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensNetPrDashBoardsClass' class='aiLensNetPrDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensNetWrDashBoardsClass' class='aiLensNetWrDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensGrDashBoardsClass' class='aiLensGrDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensGrValDashBoardsClass' class='aiLensGrValDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensOrderDashBoardsClass' class='aiLensOrderDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensEvalDashBoardsClass' class='aiLensEvalDashBoardsClass aigraphContainer'></div></div>\n\
                            </div>\n\
                            </div\n\
                           </div>",
                        };
                        var buttonArray = [
                            {
                                text: 'OK',
                                click: function () {
                                },
                                isCloseButton: true
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
                        $(".modal-dialog").addClass("modal-xl");
                        $("#dataDxpSplitterValue").addClass("viewAnalysticsPopup");
//                aiLensDashBoardCreation('bar', 'aiLensQtyDashBoardsClass', labelsList, yearsList, effectiveValList);
                        aiLensDashBoardCreation('donut', 'aiLensQtyDashBoardsClass', poYearList, orderQtyList, 'P.O Year Wise Order Quantity');
                        aiLensDashBoardCreation('funnel', 'aiLensNetPrDashBoardsClass', poYearList, netPriceList, 'P.O Year Wise Net Price');
                        aiLensDashBoardCreation('lines', 'aiLensNetWrDashBoardsClass', vendorNameList, orderQtyList, 'Vendor Name Wise Order Quantity');
                        aiLensDashBoardCreation('scatter', 'aiLensGrDashBoardsClass', vendorNameList, netPriceList, 'Vendor Name Wise Net Price');
                        aiLensDashBoardCreation('bar', 'aiLensGrValDashBoardsClass', vendorNameList, effectiveValList, 'Vendor Name Wise Effective Value');
                        aiLensDashBoardCreation('column', 'aiLensOrderDashBoardsClass', vendorNameList, purchasingDocList, 'Vendor Name Wise Purchasing Id');
                    } else if (analysisType != null && analysisType != undefined && analysisType != '' && analysisType == 'Sourcing Location With Price') {
                        var vendorIdList = responseObj['vendorIdList'];
                        var vendorNameList = responseObj['vendorNameList'];
                        var vendorAddList = responseObj['vendorAddList'];
                        var vendorCityList = responseObj['vendorCityList'];
                        var vendorStateList = responseObj['vendorStateList'];
                        var vendorCountryList = responseObj['vendorCountryList'];
                        var vendorPinList = responseObj['vendorPinList'];
                        var modalObj = {
                            title: labelObject['Message'] != null ? labelObject['Message'] : analysisType,
                            body: "<div id='aiLensMainDashBoardsClass' class='aiLensMainDashBoardsClass'>\n\
                           <div class='container-fluid'>\n\
                            <div class='row'>\n\
                            <div class='col-lg-6'><div id='aiLensQtyDashBoardsClass' class='aiLensQtyDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensNetPrDashBoardsClass' class='aiLensNetPrDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensNetWrDashBoardsClass' class='aiLensNetWrDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensGrDashBoardsClass' class='aiLensGrDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensGrValDashBoardsClass' class='aiLensGrValDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensOrderDashBoardsClass' class='aiLensOrderDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensEvalDashBoardsClass' class='aiLensEvalDashBoardsClass aigraphContainer'></div></div>\n\
                            </div>\n\
                            </div\n\
                           </div>",
                        };
                        var buttonArray = [
                            {
                                text: 'OK',
                                click: function () {
                                },
                                isCloseButton: true
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
                        $(".modal-dialog").addClass("modal-xl");
                        $("#dataDxpSplitterValue").addClass("viewAnalysticsPopup");
//                aiLensDashBoardCreation('bar', 'aiLensQtyDashBoardsClass', labelsList, yearsList, effectiveValList);
                        aiLensDashBoardCreation('donut', 'aiLensQtyDashBoardsClass', vendorNameList, vendorIdList, 'Vendor Name Wise Vendor Id');
                        aiLensDashBoardCreation('bar', 'aiLensNetPrDashBoardsClass', vendorNameList, vendorAddList, 'Vendor Name Wise Vendor Address');
                        aiLensDashBoardCreation('scatter', 'aiLensNetWrDashBoardsClass', vendorNameList, vendorCityList, 'Vendor Name Wise Vendor City');
                        aiLensDashBoardCreation('lines', 'aiLensGrDashBoardsClass', vendorNameList, vendorStateList, 'Vendor Name Wise Vendor State');
                        aiLensDashBoardCreation('funnel', 'aiLensGrValDashBoardsClass', vendorNameList, vendorCountryList, 'Vendor Name Wise Vendor Country');
                        aiLensDashBoardCreation('column', 'aiLensOrderDashBoardsClass', vendorNameList, vendorPinList, 'Vendor Name Wise Vendor PinCode');
                    } else if (analysisType != null && analysisType != undefined && analysisType != '' && analysisType == 'Inventory Visibility') {
                        var materalList = responseObj['materalList'];
                        var plantList = responseObj['plantList'];
                        var storageLocList = responseObj['storageLocList'];
                        var orderQtyList = responseObj['orderQtyList'];
                        var modalObj = {
                            title: labelObject['Message'] != null ? labelObject['Message'] : analysisType,
                            body: "<div id='aiLensMainDashBoardsClass' class='aiLensMainDashBoardsClass'>\n\
                           <div class='container-fluid'>\n\
                            <div class='row'>\n\
                            <div class='col-lg-6'><div id='aiLensQtyDashBoardsClass' class='aiLensQtyDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensNetPrDashBoardsClass' class='aiLensNetPrDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensNetWrDashBoardsClass' class='aiLensNetWrDashBoardsClass aigraphContainer'></div></div>\n\
                            <div class='col-lg-6'><div id='aiLensGrDashBoardsClass' class='aiLensGrDashBoardsClass aigraphContainer'></div></div>\n\
                            </div>\n\
                            </div\n\
                           </div>",
                        };
                        var buttonArray = [
                            {
                                text: 'OK',
                                click: function () {
                                },
                                isCloseButton: true
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
                        $(".modal-dialog").addClass("modal-xl");
                        $("#dataDxpSplitterValue").addClass("viewAnalysticsPopup");
//                aiLensDashBoardCreation('bar', 'aiLensQtyDashBoardsClass', labelsList, yearsList, effectiveValList);
                        aiLensDashBoardCreation('donut', 'aiLensQtyDashBoardsClass', materalList, plantList, 'Material Wise Plant');
                        aiLensDashBoardCreation('bar', 'aiLensNetWrDashBoardsClass', storageLocList, orderQtyList, 'Storage Location Wise Quantity');
                        aiLensDashBoardCreation('donut', 'aiLensNetPrDashBoardsClass', materalList, storageLocList, 'Material Wise Storage Location');
                        aiLensDashBoardCreation('bar', 'aiLensGrDashBoardsClass', plantList, orderQtyList, 'Plant Wise Quantity');
                    }


                }
            }
        });
    } catch (e) {
    }
}
function aiLensDashBoardCreation(chartType, chartClass, chartLabels, chartValues, textValues) {
    try {
        if (chartType != null && chartType != undefined && chartType != "" && chartType == 'pie') {
            var traceObj = {};
            var colorObj = {};
            var chartData = {};
            var layout = {
                height: 400,
                width: 400,
                title: textValues,
                showlegend: false,
            };
            var data = [];
            traceObj['labels'] = chartLabels;
            traceObj['values'] = chartValues;
            traceObj['type'] = chartType;
            traceObj['name'] = 'value';
            traceObj['textposition'] = 'inside';
//            traceObj['LABELPOSITION'] = 'inside';
            var colorArr = ['235183', '306d9f', '3476a2'];
            traceObj.marker = {colors: colorArr};
            $.each(chartData, function (key, val)
            {
                traceObj[key] = val;
            });
            if (traceObj !== null && !jQuery.isEmptyObject(traceObj)) {
                data.push(traceObj);
            }
            Plotly.newPlot(chartClass, data, layout, {displayModeBar: false});
            var positionLegendcolorArr = ['#235183', '#306d9f', '#3476a2'];
            positionChartLegend(chartType, chartClass, positionLegendcolorArr, chartLabels, data, layout, {displayModeBar: false});

        } else if (chartType != null && chartType != undefined && chartType != "" && chartType == 'bar') {
            var trace1 = {
                y: chartLabels,
                x: chartValues,
                type: 'bar',
                orientation: 'h',
//            text: chartLabels,
                marker: {
//                    color: generateRandomColourArray(labels)
                }
            };
            var data = [trace1];
            var layout = {
                title: textValues,
                font: {
                    family: 'Raleway, sans-serif'
                },
                showlegend: false,
                xaxis: {
                    tickangle: -45
                },
                yaxis: {
                    zeroline: false,
                    gridwidth: 2
                },
                bargap: 0.05
            };
            Plotly.newPlot(chartClass, data, layout, {displayModeBar: false});
        } else if (chartType != null && chartType != '' && chartType != undefined && chartType == 'lines') {
            var chartDataArr = [];
            var linesData = {};
            linesData['x'] = chartLabels;
            linesData['y'] = chartValues;
            linesData['type'] = 'lines';
            var colorArr = ['#00c60b', '#fc0203', '#f99800'];
            var markerObj = {};
            markerObj['color'] = colorArr;
            linesData['marker'] = markerObj;
            chartDataArr.push(linesData);
            var data = chartDataArr;
            var layout = {
                height: 300,
                width: 400,
                title: textValues,
                margin: {
                    l: 60,
                    b: 90,
                    t: 40,
                    r: 50,
                },
                modebar: {
                    color: '#0b4a99',
                    activecolor: '#9ED3CD'
                },
            };
            Plotly.newPlot(chartClass, data, layout, {displayModeBar: false});
        } else if (chartType != null && chartType != '' && chartType != undefined && chartType == 'donut') {
            var traceObj = {};
            var colorObj = {};
            var chartData = {};
            layout = {
                height: 400,
                width: 400,
                title: textValues,
                showlegend: false
            };
            var data = [];
            traceObj['labels'] = chartLabels;
            traceObj['values'] = chartValues;
            traceObj['hole'] = 0.4;
            traceObj['type'] = 'pie';
            traceObj['name'] = 'value';
            traceObj['textposition'] = 'inside';
            var colorArr = ['235183', '306d9f', '3476a2'];
            traceObj.marker = {colors: colorArr};
            $.each(chartData, function (key, val)
            {
                traceObj[key] = val;
            });
            if (traceObj !== null && !jQuery.isEmptyObject(traceObj)) {
                data.push(traceObj);
            }
            Plotly.newPlot(chartClass, data, layout, {displayModeBar: false});
            var positionLegendcolorArr = ['#235183', '#306d9f', '#3476a2'];
            positionChartLegend(chartType, chartClass, positionLegendcolorArr, chartLabels, data, layout, {displayModeBar: false});
        } else if (chartType != null && chartType != '' && chartType != undefined && chartType == 'column') {
            layout = {
                height: 300,
                width: 400,
                title: textValues,
            };
            var data = [{
                    x: chartLabels,
                    y: chartValues,
                    type: 'bar',
                    textinfo: "percent",
                    marker: {
//                        color: generateRandomColourArray(labels)
                    }
                }];
            Plotly.newPlot(chartClass, data, layout, {displayModeBar: false});
        } else if (chartType != null && chartType != '' && chartType != undefined && chartType == 'scatter') {
            var traceObj = {};
            var colorObj = {};
            var chartData = {};
            var labels = '';
            layout = {
                height: 300,
                width: 400,
                title: textValues,
            };
            var data = [];
            traceObj['x'] = chartLabels,
                    traceObj['y'] = chartValues;
            traceObj['type'] = chartType;
            traceObj['mode'] = 'markers';
            traceObj['marker'] = colorObj;
            if (traceObj !== null && !jQuery.isEmptyObject(traceObj)) {
                data.push(traceObj);
            }
            Plotly.newPlot(chartClass, data, layout, {displayModeBar: false});
        } else if (chartType != null && chartType != '' && chartType != undefined && chartType == 'funnel') {
            var traceObj = {};
            var colorObj = {};
            var chartData = {};
            var labels = '';
            layout = {
                height: 300,
                width: 400,
                title: textValues,
            };
            var data = [];
            traceObj['x'] = chartLabels,
                    traceObj['y'] = chartValues;
            traceObj['type'] = chartType;
            traceObj['mode'] = 'markers';
            traceObj['marker'] = colorObj;
            if (traceObj !== null && !jQuery.isEmptyObject(traceObj)) {
                data.push(traceObj);
            }
            Plotly.newPlot(chartClass, data, layout, {displayModeBar: false});
        } else if (chartType != null && chartType != '' && chartType != undefined && chartType == 'scatterpolar')
        {
            var labels = '';
            layout = {
                height: 300,
                width: 400,
                title: textValues,
            };
            var data = [];
            var traceObj = {};
            var colorObj = {};
            traceObj['r'] = chartLabels;
            traceObj['theta'] = chartValues;
            traceObj['type'] = chartType;
            traceObj['fill'] = 'toself';
            if (traceObj !== null && !jQuery.isEmptyObject(traceObj)) {
                data.push(traceObj);
            }
            Plotly.newPlot(chartClass, data, layout, {displayModeBar: false});
        } else if (chartType != null && chartType != '' && chartType != undefined && chartType == 'waterfall') {
            layout = {
                height: 300,
                width: 400,
                title: textValues,
            };

            var data = [{
                    type: 'waterfall',
                    x: chartLabels,
                    y: chartValues,
                    connector: {
                        line: {
                            color: "rgb(63, 63, 63)"
                        }
                    }
                }];

            Plotly.newPlot(chartClass, data, layout, {displayModeBar: false});
        } else if (chartType != null && chartType != '' && chartType != undefined && chartType == 'stackedAreaChart') {
            layout = {
                height: 300,
                width: 400,
                title: textValues,
                xaxis: {
                    type: 'category'
                },
                yaxis: {
                    title: 'Value'
                }
            };

            var data = [];

            var colorArr = ['#1f77b4', '#ff7f0e', '#2ca02c'];

            for (var i = 0; i < chartValues.length; i++) {
                data.push({
                    x: chartLabels,
                    y: chartValues[i],
                    type: 'scatter',
                    mode: 'lines',
                    fill: (i === 0 ? 'tozeroy' : 'tonexty'),
                    name: 'Series ' + (i + 1),
                    line: {color: colorArr[i % colorArr.length]}
                });
            }

            Plotly.newPlot(chartClass, data, layout, {displayModeBar: false});
        } else if (chartType != null && chartType != '' && chartType != undefined && chartType == 'gradStackAreaChart') {
            layout = {
                height: 300,
                width: 400,
                title: textValues,
                xaxis: {
                    type: 'category'
                },
                yaxis: {
                    title: 'Value'
                }
            };

            var data = [];

            var colorArr = ['rgba(31,119,180,0.6)', 'rgba(255,127,14,0.6)', 'rgba(44,160,44,0.6)'];

            for (var i = 0; i < chartValues.length; i++) {
                data.push({
                    x: chartLabels,
                    y: chartValues[i],
                    type: 'scatter',
                    mode: 'lines',
                    fill: (i === 0 ? 'tozeroy' : 'tonexty'),
                    fillcolor: colorArr[i % colorArr.length],
                    line: {
                        color: colorArr[i % colorArr.length],
                        width: 2
                    },
                    name: 'Series ' + (i + 1)
                });
            }

            Plotly.newPlot(chartClass, data, layout, {displayModeBar: false});
        }
    } catch (e) {
    }
}
function getRandomInt(min, max) {
    try {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    } catch (e) {
    }
}
function showAIAuditAndTimeLineData(auditId, viewType, recordNo) {
    try {
        showLoader();
        var erpNo = localStorage["ERP_NO"];
        var appendCls = "";
        if (viewType != null && viewType != undefined && viewType != "" && viewType == 'TIMELINE') {
            appendCls = "aiAnalyticsAuditAnalysis";
        }
        $.ajax({
            type: "POST",
            url: 'showAIAuditAndTimeLineData',
            data: {
                auditId: auditId,
                viewType: viewType,
                erpNo: erpNo,
                recordNo: recordNo,
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                var modalObj = {
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'AILens TimeLine',
                    body: "<div id='aiAnalyticsBasedOnAnalysis' class='aiAnalyticsBasedOnAnalysis " + appendCls + "'>" + response + "</div>",
                };
                var buttonArray = [
                    {
                        text: 'OK',
                        click: function () {
                        },
                        isCloseButton: true
                    },
                    {
                        text: 'Cancel',
                        click: function () {
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dialog2", modalObj);
                $("#dialog2").addClass("viewTimeLineData");
                $(".modal-dialog").addClass("modal-md");
                if (viewType != null && viewType != undefined && viewType != "" && viewType == 'TIMELINE') {
                    $("#dialog2 .modal-dialog").addClass("customClassForTimeline");
                    var items = document.querySelectorAll(".timeline li");
                    callbackFunc();
                    function isElementInViewport(el) {
                        var rect = el.getBoundingClientRect();
                        return (
                                rect.top >= 0 &&
                                rect.left >= 0 &&
                                rect.bottom <=
                                (window.innerHeight || document.documentElement.clientHeight) &&
                                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                                );
                    }

                    function callbackFunc() {
                        for (var i = 0; i < items.length; i++) {
                            if (isElementInViewport(items[i])) {
                                items[i].classList.add("in-view");
                            }
                        }
                    }

                    // listen for events
//            window.addEventListener("load", callbackFunc);
//                window.addEventListener("resize", callbackFunc);
//                window.addEventListener("scroll", callbackFunc);
                }

            }
        });
    } catch (e) {
    }
}
function getAILensPivotData(gridId, whereCond) {
    $("#output").val("");
    try {
        var searchedValue = $("#searchedValue").val();
        showLoader();
        var dialogwidth = '1200';
        var dialogheight = '600';
        $("#output").html('');
        $.ajax({
            type: "post",
            traditional: true,
            url: "pivotGrid",
            cache: false,
            data: {
                'gridId': gridId,
                whereCond: whereCond,
                searchedValue: searchedValue,
            },
            success: function (response) {
                stopLoader();
                if (response != null) {
                    var data = response['data'];
                    var rows = response['rows'];
                    var columns = response['columns'];
                    var rawData = data;
                    var sum = $.pivotUtilities.aggregatorTemplates.sum;
                    var numberFormat = $.pivotUtilities.numberFormat;
                    var intFormat = numberFormat({digitsAfterDecimal: 0});
                    var derivers = $.pivotUtilities.derivers;
                    var responseString = response['resultString'];
                    var rowsResultString = response['rowsResultString'];
                    var columnsList = response['columnsList'];
                    var renderers = $.extend(
                            $.pivotUtilities.renderers,
                            $.pivotUtilities.c3_renderers,
                            $.pivotUtilities.d3_renderers,
                            $.pivotUtilities.export_renderers,
                            $.pivotUtilities.plotly_renderers
                            );
                    $("#output").pivotUI(rawData,
                            {
                                renderers: renderers,
                                rows: rows,
                                cols: columns,
                                aggregator: sum(intFormat)(["QUOTED_AMOUNT"]),
//                                            colOrder:"key_a_to_z",

                            });
                    $(".pvtRows").append(rowsResultString);
//                                $(".pvtUnused").append(responseString);


                    $("#pivotGridDialog").dialog({resizable: false,

                        title: labelObject['Pivot Table'] != null ? labelObject['Pivot Table'] : 'Pivot Table',
//                        title: (labelObject[tmessage] != null ? labelObject[tmessage] : tmessage),
                        modal: true,
//                                    height: 550,
//                                    width: 1200,
                        height: dialogheight,
                        minWidth: dialogwidth,
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Close'] != null ? labelObject['Close'] : 'Ok'),
                                click: function () {
//                                                                                                $(this).html("");
                                    $("#output").html('');
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
                            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                            $(this).closest(".ui-dialog").addClass("visionPersonalizationSaveDialog");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                        },
                        beforeClose: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }


                    });
                    PivotTableGridResults(gridId, columnsList);
                    PivotRowsTableGridResults(gridId, columnsList);
                }
            }
        });
    } catch (e) {
    }
}
function PivotTableGridResults(gridId, columnsList) {
    try {
        $("#pivotTableSearch").click(function () {
            $("#pivotTableSearch").html(columnsList);
            $("#pivotTableSearch").show();
            $("#clear_pvtRowsText").show();
            $("#pivotTableSearch").autocomplete({

                source: columnsList

            });
        });
    } catch (e) {
    }
}
function PivotRowsTableGridResults(gridId, columnsList) {
    try {
        $("#pivotTableSearchPvtRows").click(function () {
            $("#pivotTableSearchPvtRows").html(columnsList);
            $("#pivotTableSearchPvtRows").show();
            $("#clear_unUsedText").show();
            $("#pivotTableSearchPvtRows").autocomplete({

                source: columnsList

            });
        });
    } catch (e) {
    }
}
function getPivotSearchResults(event) {
    try {
        var columnName = $("#pivotTableSearch").val();
        var columnNameRows = $("#pivotTableSearchPvtRows").val();
        var parent = $(".pvtAttr").parent();
        var columnValue = $(".pvtAxisLabel").parent();
//                    var selectedColumnName = columnName.prevObject;
        for (var i = 0; i < parent.length; i++) {
            var className = parent[i].className;
            var innerText = parent[i].innerText;
//                        var textContent = selectedColumnName[i].textContent;
            if (columnNameRows != null && columnNameRows != "" && columnNameRows != undefined) {
                if (innerText.includes(columnNameRows, 0)) {
                    console.log('columnNameRows' + columnNameRows);
                    $(".pvtUnused").append(parent[i]);
                    $(".pvtRows").append(parent[i]);
                    if (columnNameRows) {
                        $("th.pvtAxisLabel").remove(columnNameRows);
                    }
                    break;
                }

            }
        }
    } catch (e) {
    }
}
function showAILensSpendInvEqSorceAnalysisData(erpNo, recordNo, clickedName, msgName) {
    try {
        openAINavigation();
        showaiLoader();
        localStorage["ERP_NO"] = erpNo;
        if (clickedName != null && clickedName != undefined && clickedName != "") {
            $("#aiTypedValue").val(clickedName);
            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>" + clickedName + "</div><div class='aiAppendResponseDataCls'></div>");
        }
        $("#AILensDisOrEnaClassId *").attr("disabled", "disabled").off('click');
//    $(".aiLensMainResultBoxClass").remove();
//    $(".aiChatgptResponseContainer").html("");
        $.ajax({
            type: "POST",
            url: 'showAILensSpendInvEqSorceAnalysisData',
            data: {
                erpNo: erpNo,
                recordNo: recordNo,
                clickedName: clickedName,
                msgName: msgName,
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopaiLoader();
                if (response != null && response != undefined && response != "") {
                    if (response != null && response != undefined && response != "") {
                        AILensAfterClickRecordDetails(response, clickedName, erpNo, recordNo, msgName);
                    } else {
                        defaultAITypingBasedOnResponse(response, clickedName);
                    }

                }
            }
        });
    } catch (e) {
    }
}

function defaultAITypingRequest(erpNo, recordNo) {
    try {
        openAINavigation();
//    showaiLoader();
        localStorage["ERP_NO"] = erpNo;
//    $(".aiLensMainResultBoxClass").remove();
        $(".aiNotificationsResultClass").html("");
        $("#aiTypedValue").attr('readonly', true);
        var qtnTxt = ' What you would like to see about this Record?';
        var responseHtml = "<ul class=\"listItemsViews\">"
                + "<li><div class=\"textContent\" title='" + qtnTxt + "'>" + qtnTxt + "</div>"
                + "<div class=\"viewData AILensDisOrEnaClass\" id='AILensDisOrEnaClassId'><div class=\"viewButton\" onclick=\"showAILensSpendInvEqSorceAnalysisData('" + erpNo + "','" + recordNo + "','Details','Is This Helpful?')\">"
                + " <span class = \"viewIcon\"><img src=\"\" class=\"aiDefaultChatImgClass\"></span>"
                + "<span class=\"viewText\">Details</span></div>"
                + "<div class=\"viewAnalyticsbutton\" onclick=\"showAILensSpendInvEqSorceAnalysisData('" + erpNo + "','" + recordNo + "','SAP Details','Is This Helpful?')\"><span class=\"viewIcon\"><img src=\"\" class='aiSapDetailsImgClass'></span>"
                + "<span class = \"viewText\">SAP Details</span></div><div class=\"viewAnalyticsbutton\" onclick=\"showAISpendAnalytics('Spend Analysis')\">"
                + "<span class=\"viewIcon\"><img src=\"\" class='aiSpendAnalyticsImgrClass'></span><span class=\"viewText\">Analytics</span></div>"
                + "<div class=\"viewAnalyticsbutton\" onclick=\"getAILensPivotData('AI_LENS_SPEND_ANALYSIS')\">"
                + "<span class=\"viewIcon\"><img src=\"\" class='aiSpendAnalyticsPivotImgClass'></span><span class=\"viewText\">Pivot</span></div>"
                + "</div>"
                + "</div>"
                + "</li></ul>";
        defaultAITypingBasedOnResponse(responseHtml, '', erpNo, recordNo);
    } catch (e) {
    }
}
function defaultAIConfMsgTypingRequest(message, clickedName, erpNo, recordNo) {
    try {
        openAINavigation();
//    $(".aiLensMainResultBoxClass").remove();
//    $(".aiChatgptResponseContainer").html("");
        var responseHtml = '';
        $("#aiTypedValue").attr('readonly', true);
        $("#AILensConHelpMsgFlag").val('');
        if (message != null && message != undefined && message != "" && message == 'STOP') {
            return;
        } else if (message != null && message != undefined && message != "" && message == 'Yes') {
            $("#aiTypedValue").val(message);
            $(".aiAppendSenderDataClass").val(message);
            message = 'Thank You.';
            responseHtml = "<ul class=\"listItemsViews\"><li><div class=\"textContent\" title='" + message + "'>" + message + "</div></li></ul>";
            AILensAfterClickRecordDetails(responseHtml, clickedName, erpNo, recordNo, 'STOP');
        } else {
            if (message == null || message == undefined || message == "") {
                message = ' Is This Helpful?';
            }
            responseHtml = "<ul class=\"listItemsViews\">"
                    + "<li><div class=\"textContent\" title='" + message + "'>" + message + "</div>"
                    + "<div class=\"viewData\"><div class=\"viewButton\" onclick=\"defaultAIConfMsgTypingRequest('Yes')\">"
                    + " <span class = \"viewIcon\"><img src=\"\" class=\"aiDefaultChatImgClass\"></span>"
                    + "<span class=\"viewText\">Yes</span></div>"
                    + "<div class=\"viewAnalyticsbutton\" onclick=\"defaultAITypingRequest('" + erpNo + "','" + recordNo + "')\"><span class=\"viewIcon\"><img src=\"\" class='aiDefaultChatImgClass'></span>"
                    + "<span class = \"viewText\">No</span></div>"
                    + "</div><input type='hidden' name='AILensConHelpMsgFlag' id='AILensConHelpMsgFlag' value='Y'>"
                    + "</li></ul>";
            AILensAfterClickRecordDetails(responseHtml);
        }
    } catch (e) {
    }

}
function AILensAfterClickRecordDetails(response, clickedName, erpNo, recordNo, msgName) {
    try {
        var dataObj = {};
        const notificationJson = [];
        dataObj['id'] = 1;
        dataObj['notif'] = response;
        notificationJson.push(dataObj);
        const notificationStrings = notificationJson.map((elem) => elem.notif);
        $(".typed-cursor").hide();
        animateListItem(0);
        function animateListItem(index) {
            if (index < notificationJson.length) {
                const listItem = $(`<div class='airesponseWrapperDiv aiLensReceiverImgClass' data-id='${notificationJson[index].id}${aiResultBoxCount}'><div class='aiLensMainResultBoxClass' id='aiLensMainResultBoxClass'>`
                        + `<div class='listItemsText'></div>`
                        + `</div></div>`);
                $(".aiChatgptResponseContainer").append(listItem);
                const typed = new Typed(listItem.find('.listItemsText')[0], {
                    strings: [notificationStrings[index]],
                    typeSpeed: 20,
                    onComplete: function () {

                        console.log('Animation completed for', notificationJson[index].id);
                        aiAutoScrollContainer();
                        $(".typed-cursor").hide();
                        $("#aiTypedValue").attr('readonly', false);
                        $(`#aiResulBoxCopyClassId${aiResultBoxCount}`).click(function () {
                            aiResponseCopy();
                        });
                        aiResultBoxCount++;
                        animateListItem(index + 1);
                        $(".aiDefaultChatImgClass").attr("src", "images/airecentchat.png");
                        $(".aiSourcingLocationClass").attr("src", "images/location.png");
                        $(".aiSpendAnalyticsImgrClass").attr("src", "images/iDXPUI5AnalyticsShowCard.svg");
                        $(".aiSpendTimelineImgrClass").attr("src", "images/timelinedxp.png");
                        $(".aiSpendAnalyticsPivotImgClass").attr("src", "images/iDXPUI5PivotTable.svg");
                        $(".spendAnalysis").attr("src", "images/spendAnalysis.png");
                        $(".purchasingHist").attr("src", "images/purchasingHist.png");
                        $(".sourcingLoc").attr("src", "images/sourcingLoc.png");
                        $(".InventoryVis").attr("src", "images/InventoryVis.png");
                        $(".equipmentLink").attr("src", "images/equipmentLink.png");
                        $(".aiLensMaterialImgClass").attr("src", "images/MaterialMaster.png");
                        $(".aiLensERPImgClass").attr("src", "images/AILenserp.png");
                        $(".aiSapDetailsImgClass").attr("src", "images/SAPData.png");
                        if (index + 1 == notificationJson.length) {
                            var AILensConHelpMsgFlag = $("#AILensConHelpMsgFlag").val();
                            if (AILensConHelpMsgFlag == null || AILensConHelpMsgFlag == undefined || AILensConHelpMsgFlag == "") {
                                AILensConHelpMsgFlag = 'N';
                            }
                            if (AILensConHelpMsgFlag == "N") {
                                if (msgName == null || msgName == '' || msgName == undefined) {
                                    msgName = 'Yes';
                                }
                                defaultAIConfMsgTypingRequest(msgName, clickedName, erpNo, recordNo);
                            }
                            return;
                        }
                        $("#stopResponsingID").hide();
                    }
                });
                $('#stopResponsingID').click(function () {
                    typed.stop();
                    $("#aiTypedValue").removeAttr("readonly");
                    $('#stopResponsingID').hide();
                });
            }
//        defaultAIConfMsgTypingRequest();
        }
    } catch (e) {
    }
}
function searchBasedAILensResults(searchTerm, domainName) {
    try {
        openAINavigation();
        showaiLoader();
        $('#stopResponsingID').show(1000);
        $.ajax({
            type: "POST",
            url: 'getSearchBasedAILensResults',
            data: {
                searchTerm: searchTerm,
                domainName: domainName,
                regGrdiId: $("#regGrdiId").val(),
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopaiLoader();
                if (response != null && response != undefined && response != "") {
                    var responseObj = JSON.parse(response);
                    var relevantStr = responseObj['relevantStr']; //$("#relevantClsYesClickId")
                    var createStr = responseObj['createStr'];
                    var relevantConf = responseObj['relevantConf'];
                    var dataObj = {};
                    const notificationJson = [];
                    dataObj['id'] = 1;
                    dataObj['notif'] = responseObj['1row'];
                    notificationJson.push(dataObj);
                    const notificationStrings = notificationJson.map((elem) => elem.notif);
                    $(".typed-cursor").hide();
                    animateListItem(0);
                    function animateListItem(index) {
                        if (index < notificationJson.length) {
                            const listItem = $(`<div class='airesponseWrapperDiv aiLensReceiverImgClass' data-id='${notificationJson[index].id}${aiResultBoxCount}'><div class='aiLensMainResultBoxClass' id='aiLensMainResultBoxClass'>`
                                    + `<div class='listItemsText'></div>`
                                    + `</div></div>`);
                            $(".aiChatgptResponseContainer").append(listItem);
                            const typed = new Typed(listItem.find('.listItemsText')[0], {
                                strings: [notificationStrings[index]],
                                typeSpeed: 20,
                                onComplete: function () {

                                    console.log('Animation completed for', notificationJson[index].id);
                                    aiAutoScrollContainer();
                                    $(".typed-cursor").hide();
                                    $("#stopResponsingID").hide();
                                    $("#aiTypedValue").attr('readonly', false);
                                    $(`#aiResulBoxCopyClassId${aiResultBoxCount}`).click(function () {
                                        aiResponseCopy();
                                    });
                                    aiResultBoxCount++;
                                    animateListItem(index + 1);
                                    if (domainName != null && domainName != "" && domainName != undefined && domainName == 'VENDOR') {
                                        $("#relevantConfiVendorId").val(relevantConf);
                                    } else {
                                        $("#relevantClsYesClickId").val(relevantStr);
                                        $("#createClsYesClickId").val(createStr);
                                        $("#relevantConfirmationId").val(relevantConf);
                                    }

                                    $(".aiLensSearchRecordCount").attr("src", "images/MaterialMaster.png");
                                    $(".aiLensRecordInfoImgCls").attr("src", "images/information.gif");
                                    $(".aiLensSearchProcessCount").attr("src", "images/process_icon_blue.png");
                                    $(".aiLensProcessInfoImgCls").attr("src", "images/information.gif");
                                    $(".aiLensSearchERPCount").attr("src", "images/SAPData.png");
                                    $(".aiLensERPInfoImgCls").attr("src", "images/information.gif");
                                }
                            });
                            $('#stopResponsingID').click(function () {
                                typed.stop();
                                $("#aiTypedValue").removeAttr("readonly");
                                $('#stopResponsingID').hide();
                            });
                        }
//        defaultAIConfMsgTypingRequest();
                    }
                }
            }
        });
    } catch (e) {
    }
}
function aILensNewItemCreation(dataField, term, defntn, conceptId, recpordGroup, abbreviation, gridId, basketType) {
    try {
        var dataObj = {};
        dataObj['TERM'] = term;
        dataObj['DEFINITION'] = defntn;
        dataObj['CONCEPT_ID'] = conceptId;
        dataObj['RECORD_GROUP'] = recpordGroup;
        dataObj['ABBREVIATION'] = abbreviation;
        dataObj['GRID_ID'] = gridId;
        dataObj['gridId'] = gridId;
        dataObj['basketType'] = basketType;
        CreationBasedOnDomainWithGrid(dataField, dataObj, "", gridId, "", basketType);
        closeAINavigation();
    } catch (e) {
    }
}
function aiLensRelkevantYesClick(clickedType) {
    try {
        if (clickedType != null && clickedType != undefined && clickedType != "" && clickedType == 'RELEVANT') {
            var response = $("#relevantClsYesClickId").val();
            defaultAITypingBasedOnResponse(response, "", "", "");
            $(".aiLensProcessInfoImgCls").attr("src", "images/information.gif");
        } else if (clickedType != null && clickedType != undefined && clickedType != "" && clickedType == 'CREATE') {
            var response = $("#createClsYesClickId").val();
            defaultAITypingBasedOnResponse(response, "", "", "");
            $(".aiLensProcessInfoImgCls").attr("src", "images/information.gif");
        } else if (clickedType != null && clickedType != undefined && clickedType != "" && clickedType == 'ASK') {
            var response = $("#relevantConfirmationId").val();
            defaultAITypingBasedOnResponse(response, "", "", "");
            $(".aiLensProcessInfoImgCls").attr("src", "images/information.gif");
        }
    } catch (e) {
    }
}
function aiLensSearchRecordInfo(whereCond, searchType, classTerm, domainName) {
    try {
        showLoader();
        $('#stopResponsingID').show(1000);
        $.ajax({
            type: "POST",
            url: 'getAILensSearchedRecordInfo',
            data: {
                whereCond: whereCond,
                searchType: searchType,
                classTerm: classTerm,
                domainName: domainName,
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                if (response != null && response != undefined && response != "") {
                    var title = "<div id='showAIinfoNameAndExport' style='display:flex;gap:10px;'><div id='aiInfoHeaderText'>AI Info</div><div style='display:flex;align-items: center'><div id='aiInfodownload' ><input title='Download' id='aiInfoExport' onclick=\"downloadAiInfofile('" + whereCond + "', '" + searchType + "', '" + classTerm + "', '" + domainName + "')\" class='exportClass visionSearchExportButton visionGridExportButton visionExportInput visionSearchExportButtonUpdatedImagClass' type='button' width='-2px'></div></div></div>";
                    $("#dialog1").html(response);
                    $("#dialog1").dialog({resizable: false,
//                        title: labelObject['Pivot Table'] != null ? labelObject['Pivot Table'] : 'AI Info',
//                        title: (labelObject[tmessage] != null ? labelObject[tmessage] : tmessage),
                        modal: true,
                        height: 550,
                        width: 1200,
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Close'] != null ? labelObject['Close'] : 'Ok'),
                                click: function () {
//                                                                                                $(this).html("");
                                    $(this).html('');
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
                            $(".ui-dialog-title").html(title);
                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                            $(this).closest(".ui-dialog").addClass("visionPersonalizationSaveDialog");
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
        });
    } catch (e) {
    }
}
function aiLensDetailsBasedOnDomainTabs(domainTabName, domainClickedName) {
    try {
        $("#aiTypedValue").val(domainClickedName);
        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>" + domainClickedName + "</div><div class='aiAppendResponseDataCls'></div>");
        showaiLoader();
        $('#stopResponsingID').show(1000);
        $.ajax({
            type: "POST",
            url: 'aiLensDetailsBasedOnDomainTabs',
            data: {
                domainTabName: domainTabName,
                domainClickedName: domainClickedName,
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopaiLoader();
                if (response != null && response != undefined && response != "") {
                    AILensAfterClickRecordDetails(response, '', '', '', 'STOP');
                }

            }
        });
    } catch (e) {

    }
}
function showAILensDomainBasedViewData(status, domainName, domainClickedName, showType) {
    try {
        $("#aiTypedValue").val(domainClickedName);
        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>" + domainClickedName + "</div><div class='aiAppendResponseDataCls'></div>");
        if (showType != null && showType != undefined && showType != '' && showType == 'PIVOT') {
            if (status != null && status != undefined && status != '' && status == 'ALL') {
                getAILensPivotData('DXP_SEARCH_VIEW', status);
            }
        } else {
            showaiLoader();
            $('#stopResponsingID').show(1000);
            $.ajax({
                type: "POST",
                url: 'showAILensDomainBasedViewData',
                data: {
                    status: status,
                    domainName: domainName,
                    domainClickedName: domainClickedName,
                    showType: showType,
                },
                traditional: true,
                cache: false,
                success: function (response) {
                    stopaiLoader();
                    if (response != null && response != undefined && response != "") {
                        $("#dialog1").html(response);
                        $("#dialog1").dialog({resizable: false,
                            title: labelObject['Pivot Table'] != null ? labelObject['Pivot Table'] : 'AI Info',
//                        title: (labelObject[tmessage] != null ? labelObject[tmessage] : tmessage),
                            modal: true,
                            height: 550,
                            width: 1200,
                            fluid: true,
                            buttons: [{
                                    text: (labelObject['Close'] != null ? labelObject['Close'] : 'Ok'),
                                    click: function () {
//                                                                                                $(this).html("");
                                        $(this).html('');
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
                                $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                                $(this).closest(".ui-dialog").addClass("visionPersonalizationSaveDialog");
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
            });
        }
    } catch (e) {

    }
}


// DYNAMIC AILENS STARTING NKR//

function showDefaultOutputBasedOnAIType(aiType, queryType, aiSearchString, aiRecordNo,
        aiReqNo, aiInstance, aiPlant, aiCompany, aiPorg, aiSorg, aiDC, aiDivision) {
// Add active class to the current button (highlight it
    try {
        showaiLoader();
        $(".aiNotificationsResultClass").html("");
        $(".aiChatgptResponseContainer").html("");
        $('#myBtnContainer .btn').click(function () {
            $('#myBtnContainer .btn.active').removeClass('active');
            $(this).addClass('active');
        });
        var x, i;
        x = document.getElementsByClassName("aigridcolumn");
        if (aiType == "all")
            aiType = "";
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "aishow");
            if (x[i].className.indexOf(aiType) > -1)
                w3AddClass(x[i], "aishow");
        }
        if (aiSearchString == null || aiSearchString == "undefined" || aiSearchString == undefined) {
            aiSearchString = '';
        }

        if (aiRecordNo == null || aiRecordNo == "undefined" || aiRecordNo == undefined) {
            aiRecordNo = '';
        }
        if (aiReqNo == null || aiReqNo == "undefined" || aiReqNo == undefined) {
            aiReqNo = '';
        }
        if (aiInstance == null || aiInstance == "undefined" || aiInstance == undefined) {
            aiInstance = '';
        }
        if (aiPlant == null || aiPlant == "undefined" || aiPlant == undefined) {
            aiPlant = '';
        }
        if (aiCompany == null || aiCompany == "undefined" || aiCompany == undefined) {
            aiCompany = '';
        }
        if (aiPorg == null || aiPorg == "undefined" || aiPorg == undefined) {
            aiPorg = '';
        }
        if (aiSorg == null || aiSorg == "undefined" || aiSorg == undefined) {
            aiSorg = '';
        }

        if (aiDC == null || aiDC == "undefined" || aiDC == undefined) {
            aiDC = '';
        }

        if (aiDivision == null || aiDivision == "undefined" || aiDivision == undefined) {
            aiDivision = '';
        }
        if (aiType != null && aiType != "" && aiType != undefined) {

            $.ajax({
                type: "POST",
                url: 'getAILensContentFromDB',
                data: {
                    aiType: aiType,
                    aiQueryType: queryType,
                    aiSubQueryFlag: "N",
                    aiQuery: "",
                    aiQueryAns: "",
                    aiTypeFlag: 'Y',
                    aiSearchString: aiSearchString,
                    aiRecordNo: aiRecordNo,
                    aiReqNo: aiReqNo,
                    aiInstance: aiInstance,
                    aiPlant: aiPlant,
                    aiCompany: aiCompany,
                    aiPorg: aiPorg,
                    aiSorg: aiSorg,
                    aiDC: aiDC,
                    aiDivision: aiDivision,
                },
                traditional: true,
                cache: false,
                success: function (response) {
                    stopaiLoader();
                    if (response != null && response != "" && response != undefined) {
                        defaultAITypingBasedOnResponse(response, '', "", "");
//                        $(event.target.closest('.outerWidthcol')).addClass("highlightCard");
                    }

                }
            });


//            var qtnTxt = " What you would like to see about " + getaiTabName + "?";
//            var responseHtml = "<ul class=\"listItemsViews\">"
//                    + "<li><div class=\"textContent\" title='" + qtnTxt + "'>" + qtnTxt + "</div>"
//                    + "<div class=\"viewData AILensDisOrEnaClass\" id='AILensDisOrEnaClassId'><div class=\"viewButton\" onclick=\"aiLensDetailsBasedOnDomainTabs('" + getaiTabName + "','Details')\">"
//                    + " <span class = \"viewIcon\"><img src=\"\" class=\"aiDefaultChatImgClass\"></span>"
//                    + "<span class=\"viewText\">Details</span></div>"
//                    + "<div class=\"viewAnalyticsbutton\" onclick=\"aiLensDetailsBasedOnDomainTabs('" + getaiTabName + "','SAP Details')\"><span class=\"viewIcon\"><img src=\"\" class='aiSapDetailsImgClass'></span>"
//                    + "<span class = \"viewText\">SAP Details</span></div><div class=\"viewAnalyticsbutton\" onclick=\"aiLensDetailsBasedOnDomainTabs('" + getaiTabName + "','Analytics')\">"
//                    + "<span class=\"viewIcon\"><img src=\"\" class='aiSpendAnalyticsImgrClass'></span><span class=\"viewText\">Analytics</span></div>"
////                    + "<div class=\"viewAnalyticsbutton\" onclick=\"aiLensDetailsBasedOnDomainTabs('" + getaiTabName + "','Pivot')>"
////                    + "<span class=\"viewIcon\"><img src=\"\" class='aiSpendAnalyticsPivotImgClass' width='15px';></span><span class=\"viewText\">Pivot</span></div>"
//                    + "</div>"
//                    + "</div>"
//                    + "</li></ul>";
//            defaultAITypingBasedOnResponse(responseHtml, '', "", "");
        }
    } catch (e) {
        stopaiLoader();
    }
}
async function getAIContentBasedOnQuery(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag,
        aiSearchString, aiRecordNo, aiReqNo, aiInstance, aiPlant, aiCompany, aiPorg, aiSorg, aiDC, aiDivision, aiERPNo, aiProcess) {
    openAINavigation();
// Add active class to the current button (highlight it
    try {
        var fileValue = $('#aiAttachedmentImageUpload').val();
        var imgValue = $('#aiImageAttachedmentUpload').val();
        if (fileValue != '' && fileValue != undefined && fileValue != null
                && (aiSearchString == null || aiSearchString == '' || aiSearchString == undefined)) {
            if (aiSearchString != '') {
                aiSearchString += ' about ';
            }
            var file = $('#aiAttachedmentImageUpload')[0].files[0];
            aiSearchString += await getFileText(file);
        } else if (imgValue != '' && imgValue != undefined && imgValue != null) {
            if (aiSearchString != '') {
                aiSearchString += ' about ';
            }
            var file = $('#aiImageAttachedmentUpload')[0].files[0];
            aiSearchString += await getImageToText(file);
        }
        $("#aiTypedValue").val(aiQueryAns);
        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>" + aiQueryAns + "</div>");
        $("#aiTypedValue").attr('readonly', true);
        showaiLoader();
        if (aiTypeFlag == null || aiTypeFlag == "" || aiTypeFlag == undefined) {
            aiTypeFlag = 'N';
        }
        if (aiSearchString == null || aiSearchString == "undefined" || aiSearchString == undefined) {
            aiSearchString = '';
        }

        if (aiRecordNo == null || aiRecordNo == "undefined" || aiRecordNo == undefined) {
            aiRecordNo = '';
        }
        if (aiReqNo == null || aiReqNo == "undefined" || aiReqNo == undefined) {
            aiReqNo = '';
        }
        if (aiInstance == null || aiInstance == "undefined" || aiInstance == undefined) {
            aiInstance = '';
        }
        if (aiPlant == null || aiPlant == "undefined" || aiPlant == undefined) {
            aiPlant = '';
        }
        if (aiCompany == null || aiCompany == "undefined" || aiCompany == undefined) {
            aiCompany = '';
        }
        if (aiPorg == null || aiPorg == "undefined" || aiPorg == undefined) {
            aiPorg = '';
        }
        if (aiSorg == null || aiSorg == "undefined" || aiSorg == undefined) {
            aiSorg = '';
        }

        if (aiDC == null || aiDC == "undefined" || aiDC == undefined) {
            aiDC = '';
        }

        if (aiDivision == null || aiDivision == "undefined" || aiDivision == undefined) {
            aiDivision = '';
        }
        if (aiERPNo == null || aiERPNo == "undefined" || aiERPNo == undefined) {
            aiERPNo = '';
        }
        try {
            if (aiSubQueryFlag != null && aiSubQueryFlag != undefined && aiSubQueryFlag != "" && aiSubQueryFlag == 'MH') {
                showSubMenuItems(null, aiQuery, aiSearchString, aiQueryAns)
            }
        } catch (er) {

        }

        $(".aiNotificationsResultClass").html("");
//        $(".aiChatgptResponseContainer").html("");

        $.ajax({
            type: "POST",
            url: 'getAILensContentFromDB',
            data: {
                aiQuery: aiQuery,
                aiQueryAns: aiQueryAns,
                aiQueryType: aiQueryType,
                aiSubQueryFlag: aiSubQueryFlag,
                aiTypeFlag: aiTypeFlag,
                aiSearchString: aiSearchString,
                aiRecordNo: aiRecordNo,
                aiReqNo: aiReqNo,
                aiInstance: aiInstance,
                aiPlant: aiPlant,
                aiCompany: aiCompany,
                aiPorg: aiPorg,
                aiSorg: aiSorg,
                aiDC: aiDC,
                aiDivision: aiDivision,
                aiERPNo: aiERPNo,
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopaiLoader();
                if (response != null && response != "" && response != undefined
                        && aiProcess != null && aiProcess != "" && response != aiProcess && aiProcess == 'AUTOPROCESS') {
                    sessionStorage.removeItem("aiAutoResults");
                    sessionStorage.setItem("aiAutoResults", response);
                    $("#aiTypedValue").val('');
                    $("#aiLensAttachedmentFile").html('');
                    $('#aiAttachedmentImageUpload').val("");
                    $('#aiImageAttachedmentUpload').val('');
                    var result = "<div class='listItemsText'>" +
                            "<ul class='listItemsViews'>" +
                            "<li>" +
                            "<div class='aiLensResultDataClass' title='How do you want to process the data?'>" +
                            "How do you want to process the data?" +
                            "</div>" +
                            "<div class='viewData AILensDisOrEnaClass'>" +
//                            "<div class='viewButton' onclick='getAiLensExcelAutoProcess(\"" + aiSearchString + "\", \"aiAutoResults\")'>" +
//                            "<span><span class='viewIcon'><img src='images/process_icon_blue.png' class='aiDefaultYesImgClass'></span>Auto Process</span>" +
//                            "</div>" +
                            "<div class='viewButton' id='manualDHProcess' onclick='getAiLensExcelAutoProcess(\"manual\", \"aiAutoResults\",\"Conversational AI\",\"Conversational AI\",\"" + aiQueryType + "\")'>" +
                            "<span><span class='viewIcon'><img src='' class='aiManualProcessImgClass'></span><span style='margin-left:10px;'>Conversational AI</span></span>" +
                            "</div>" +
                            "<div class='viewButton' onclick='getAiLensExcelAutoProcess(\"" + aiSearchString + "\", \"aiAutoResults\",\"aiAgent\",\"AI Agent\",\"" + aiQueryType + "\")'>" +
                            "<span><span class='viewIcon'><img class='aiAgentImgClass'></span><span style='margin-left:10px;'>AI Agent</span></span>" +
                            "</div>" +
                            "</div>" +
                            "</li>" +
                            "</ul>" +
                            "</div>";
                    defaultAITypingBasedOnResponse(result, '', "", "");
                    return;
                } else
                if (response != null && response != "" && response != undefined) {
                    let randomId = Math.floor(Math.random() * 1000);
                    $("#dataResponse").remove();
                    $("body").append("<div id='dataResponse' style='display:none'></div>");
                    $("#dataResponse").append(response);

                    var length = $("#dataResponse .viewData div").length;
                    var responseStr = '<ul class="listItemsViews"><li>';
                    responseStr += $("#dataResponse .viewButton").prop('outerHTML');
                    responseStr += '<div class="viewData AILensDisOrEnaClass" id="aiResponse' + randomId + '">';
//                    let showMoreStr = "";
//                    if (length > 5) {
//                        $("#dataResponse .viewData div").each(function (index) {
//                            if (length > 4 && index <= 4) {
//                                responseStr += $(this).prop('outerHTML');
//                            } else if (length > 4 && index > 4) {
//                                $(this).addClass("showMoreContentClass");
//                                showMoreStr += $(this).prop('outerHTML');
//                            }
//                            if (index === length - 1) {
//                                responseStr += "</li></ul>";
//                                responseStr += "<div class='showMoreToggleBtn'><span id='showMoreContentAi" + randomId + "' class='showMoreToggle'>Show More</span></div>";
//                                responseStr += "</div>";
//                                response = responseStr;
//
//                            }
//                        });
//                    }
                    defaultAITypingBasedOnResponse(response, '', "", "");
//                    setTimeout(function () {
//                        $("#showMoreContentAi" + randomId).unbind("click").on("click", function (e) {
//                            let content = $(".showMoreContentClass");
//                            let button = $("#" + e.currentTarget.id);
//
//                            if (content.is(":visible")) {
//                                $(".showMoreContentClass").remove();
//                                content.attr("style", "display: none !important;");
//                                button.text("Show More");
//                            } else {
//                                $("#aiResponse" + randomId).append(showMoreStr);
//                                content.attr("style", "display: block !important;");
//                                button.text("Show Less");
//                            }
//                        })
//                    }, 6000)
                    $("#aiTypedValue").val('');
                    $("#aiLensAttachedmentFile").html('');
                    $('#aiAttachedmentImageUpload').val("");
                    $('#aiImageAttachedmentUpload').val('');
                }
            }
        });
    } catch (e) {
        stopaiLoader();
    }
}
function defaultAITypingBasedOnResponse(response, clickedVal, erpNo, recordNo) {
    try {
        var dataObj = {};
        const notificationJson = [];
        dataObj['id'] = 1;
        dataObj['notif'] = response;
        notificationJson.push(dataObj);
        const notificationStrings = notificationJson.map((elem) => elem.notif);

        $(".typed-cursor").hide();
        $('#stopResponsingID').show(1000);
        animateListItem(0);

        function animateListItem(index) {
            // 1. Get the main scrollable container
            const $cont = $(".aicontentArea");

            if (index < notificationJson.length) {
                // Create the new list item
                const listItem = $(`<div class='airesponseWrapperDiv${aiResultBoxCount} aiLensReceiverImgClass' data-id='${notificationJson[index].id}${aiResultBoxCount}'><div class='aiLensMainResultBoxClass' id='aiLensMainResultBoxClass'>`
                        + `<div class='listItemsText'></div>`
                        + `</div></div>`);

                $(".aiChatgptResponseContainer").append(listItem);

                // Target the specific element where text is being typed
                const targetTextNode = listItem.find('.listItemsText')[0];

                // --- SMART SCROLL LOGIC START ---
                // Initialize variable to track the height
                let lastScrollHeight = $cont[0].scrollHeight;

                const scrollObserver = new MutationObserver(function (mutations) {
                    let currentScrollHeight = $cont[0].scrollHeight;

                    // Only scroll if the height has INCREASED (meaning a new line was added)
                    if (currentScrollHeight > lastScrollHeight) {
                        $cont.scrollTop(currentScrollHeight);
                        lastScrollHeight = currentScrollHeight; // Update the tracker
                    }
                });

                // Start observing the target text node for changes
                if (targetTextNode) {
                    scrollObserver.observe(targetTextNode, {
                        childList: true, // Watch for new HTML tags (like <br>)
                        subtree: true, // Watch nested elements
                        characterData: true // Watch for text content changes
                    });
                }
                // --- SMART SCROLL LOGIC END ---

                const typed = new Typed(targetTextNode, {
                    strings: [notificationStrings[index]],
                    typeSpeed: 20,
                    onComplete: function () {
                        // Stop observing since typing is done to save memory
                        scrollObserver.disconnect();

                        // Perform one final scroll to ensure the very end is visible
                        $cont.scrollTop($cont[0].scrollHeight);

                        console.log('Animation completed for', notificationJson[index].id);
                        $(".typed-cursor").hide();
                        $("#aiTypedValue").attr('readonly', false);

                        $(`#aiResulBoxCopyClassId${aiResultBoxCount}`).click(function () {
                            aiResponseCopy();
                        });

                        aiResultBoxCount++;
                        animateListItem(index + 1);
                        aiLensImageBasedOnClass();
                        $("#stopResponsingID").hide();
                    }
                });

                // Handle the Stop Button Click
                $('#stopResponsingID').click(function () {
                    typed.stop();
                    // IMPORTANT: Stop the observer if user manually stops typing
                    scrollObserver.disconnect();

                    $("#aiTypedValue").removeAttr("readonly");
                    $('#stopResponsingID').hide();
                });
            }
        }
    } catch (e) {
        console.error("Error in defaultAITypingBasedOnResponse:", e);
    }
}
function getAILensDomaincomponent(domain, role, componentType, searchId, subscriptionflag, title, gridId, processFlag, clickedTitle) {
    if (processFlag != null && processFlag != undefined && processFlag != "" && processFlag != 'MH') {
        $("#aiTypedValue").val(clickedTitle);
        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>" + clickedTitle + "</div>");
        $("#aiTypedValue").attr('readonly', true);
        closeAINavigation();
    }
    if (processFlag != null && processFlag != undefined && processFlag != "" && processFlag == 'S') {
        getDomaincomponent(domain, role, componentType, searchId, subscriptionflag, title);
        showSearchBar(domain, searchId, role, gridId);

    } else if (processFlag != null && processFlag != undefined && processFlag != "" && processFlag == 'I') {
        getSelectBoxResults('H');

    } else if (processFlag != null && processFlag != undefined && processFlag != ""
            && (processFlag == 'C' || processFlag == 'E' || processFlag == 'D' || processFlag == 'UD')) {
        getDomaincomponent(domain, role, componentType, searchId, subscriptionflag, title);
        getFilterGridForm(gridId);
        setTimeout(function () {
            toggleTabsAndMenus(event);
        }, 1500);

    } else if (processFlag != null && processFlag != undefined && processFlag != "" && processFlag == 'MH') {
        getDomaincomponent(domain, role, componentType, searchId, subscriptionflag, title);
        setTimeout(function () {
            getAIContentBasedOnQuery(componentType, title, 'KNOWLEDGE', 'MH', 'N', domain);
        }, 1500);

    }

    $("#aiTypedValue").val('');
}
function getAIContentBasedOnQueryPopUp(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag,
        aiSearchString, aiRecordNo, aiReqNo, aiInstance, aiPlant, aiCompany, aiPorg, aiSorg, aiDC, aiDivision, aiERPNo) {
// Add active class to the current button (highlight it
    try {
        $("#aiTypedValue").val(aiQueryAns);
        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>" + aiQueryAns + "</div>");
        $("#aiTypedValue").attr('readonly', true);
        showaiLoader();
        if (aiTypeFlag == null || aiTypeFlag == "" || aiTypeFlag == undefined) {
            aiTypeFlag = 'N';
        }
        if (aiSearchString == null || aiSearchString == "undefined" || aiSearchString == undefined) {
            aiSearchString = '';
        }

        if (aiRecordNo == null || aiRecordNo == "undefined" || aiRecordNo == undefined) {
            aiRecordNo = '';
        }
        if (aiReqNo == null || aiReqNo == "undefined" || aiReqNo == undefined) {
            aiReqNo = '';
        }
        if (aiInstance == null || aiInstance == "undefined" || aiInstance == undefined) {
            aiInstance = '';
        }
        if (aiPlant == null || aiPlant == "undefined" || aiPlant == undefined) {
            aiPlant = '';
        }
        if (aiCompany == null || aiCompany == "undefined" || aiCompany == undefined) {
            aiCompany = '';
        }
        if (aiPorg == null || aiPorg == "undefined" || aiPorg == undefined) {
            aiPorg = '';
        }
        if (aiSorg == null || aiSorg == "undefined" || aiSorg == undefined) {
            aiSorg = '';
        }

        if (aiDC == null || aiDC == "undefined" || aiDC == undefined) {
            aiDC = '';
        }

        if (aiDivision == null || aiDivision == "undefined" || aiDivision == undefined) {
            aiDivision = '';
        }
        if (aiERPNo == null || aiERPNo == "undefined" || aiERPNo == undefined) {
            aiERPNo = '';
        }


        $(".aiNotificationsResultClass").html("");
//        $(".aiChatgptResponseContainer").html("");

        $.ajax({
            type: "POST",
            url: 'getAILensContentFromDB',
            data: {
                aiQuery: aiQuery,
                aiQueryAns: aiQueryAns,
                aiQueryType: aiQueryType,
                aiSubQueryFlag: aiSubQueryFlag,
                aiTypeFlag: aiTypeFlag,
                aiSearchString: aiSearchString,
                aiRecordNo: aiRecordNo,
                aiReqNo: aiReqNo,
                aiInstance: aiInstance,
                aiPlant: aiPlant,
                aiCompany: aiCompany,
                aiPorg: aiPorg,
                aiSorg: aiSorg,
                aiDC: aiDC,
                aiDivision: aiDivision,
                aiERPNo: aiERPNo,
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopaiLoader();
                if (response != null && response != "" && response != undefined) {
                    if (aiSubQueryFlag != null && aiSubQueryFlag != "" && aiSubQueryFlag != undefined && aiSubQueryFlag == 'MAP') {

//                        dialogWidth = '800';
//                        dialogHeight = '400';
                        aiLensViewInMap(response);
                    } else {
                        var dialogWidth = '1300';
                        var dialogHeight = '600';
                        if (aiSubQueryFlag != null && aiSubQueryFlag != "" && aiSubQueryFlag != undefined && aiSubQueryFlag == 'TLD') {
                            $("#airightinnercontentAreaID").html('');
                            $("#airightinnercontentAreaID").addClass("aiAnalyticsBasedOnAnalysis aiAnalyticsAuditAnalysis");
                            $("#airightinnercontentAreaID").addClass("viewTimeLineData");
                            $("#airightinnercontentAreaID").addClass("customClassForTimeline");
                            $("#airightinnercontentAreaID").html(response);
                            var items = document.querySelectorAll(".timeline li");
                            callbackFunc();
                            function isElementInViewport(el) {
                                var rect = el.getBoundingClientRect();
                                return (
                                        rect.top >= 0 &&
                                        rect.left >= 0 &&
                                        rect.bottom <=
                                        (window.innerHeight || document.documentElement.clientHeight) &&
                                        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                                        );
                            }

                            function callbackFunc() {
                                for (var i = 0; i < items.length; i++) {
                                    if (isElementInViewport(items[i])) {
                                        items[i].classList.add("in-view");
                                    }
                                }
                            }

                        } else {

                            if (aiSubQueryFlag != null && aiSubQueryFlag != "" && aiSubQueryFlag != undefined && aiSubQueryFlag == 'TH') {

                                dialogWidth = '800';
                                dialogHeight = '400';
                                $("#dialog").html("");

                            }
                            showErrorPopupMessage(response, 'AI Info', dialogWidth, dialogHeight);
                            $("#aiTypedValue").val('');
                        }

                    }



                }
            }
        });
        $("#aiTypedValue").attr('readonly', false);
    } catch (e) {
        stopaiLoader();
    }
}
async function getAIPPRResults(domain, roleId, componentType, formSearchId, searchType, repSearchId, gridId, aiSearchString, aiClickedTitle) {
    $("#aiTypedValue").val(aiClickedTitle);
    var fileValue = $('#aiAttachedmentImageUpload').val();
    var imgValue = $('#aiImageAttachedmentUpload').val();
    if (fileValue != '' && fileValue != undefined && fileValue != null) {
        if (aiSearchString != '') {
            aiSearchString += ' about ';
        }
        var file = $('#aiAttachedmentImageUpload')[0].files[0];
        aiSearchString += await getFileText(file);
    } else if (imgValue != '' && imgValue != undefined && imgValue != null) {
        if (aiSearchString != '') {
            aiSearchString += ' about ';
        }
        var file = $('#aiImageAttachedmentUpload')[0].files[0];
        aiSearchString += await getImageToText(file);
    }
    $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>Searching " + aiSearchString + " in " + aiClickedTitle + "</div><input type='hidden' id='floatingdxpAdavanceSearchOptions' value='" + searchType + "'/>");
    $("#aiTypedValue").attr('readonly', true);
    getDomaincomponent(domain, roleId, componentType, formSearchId, 'Y', domain);
    setTimeout(function () {
//        showSearchBar(domain, formSearchId, roleId, gridId); 
        getFloatingParamForm(formSearchId, '', '', '', searchType, '', aiSearchString, 'Y');
    }, 1000);
//    let mypromise = new Promise(resolve => {
//        getFloatingParamForm(formSearchId, '', '', '');
//    });
//    await mypromise;
//    $("#aiTypedValue").attr('readonly', true);
//
////        $("#PRAtb3").val(searchString.replace(" ", "%"));
////     = row.index();
//    var paramArray = [];
//    var paramObj = {};
//    paramObj.datatype = "string";
//    paramObj.column = "PURCHASE";
//    paramObj.rangeflag = "N";
//    paramObj.minvalue = "";
//    paramObj.maxvalue = "";
//    paramObj.value = aiSearchString.replace(" ", "%");
////    paramObj.symbol = "=";
//    paramObj.operator = "LIKE";
//    paramObj.staged = "N";
//    paramObj.andOrOperator = "AND";
//    paramObj.typeSelectStr = "";
//    paramObj.dlovcolname = "";
//    paramObj.valuestripflag = "N";
//    paramObj.valuetrimcharflag = "N";
//    paramArray.push(paramObj);
//    setTimeout(function () {
//        var i = 0;
//        $("#pprsearch tbody tr").each(function () {
//            var colname = $(this).attr('data-colname')
//            if (colname == 'PURCHASE') {
//                $("#" + searchType + "tb" + i).val(aiSearchString.replace(" ", "%"));
//            }
//            ++i;
//        });
//        searchResults(searchType, '', paramArray, '', 'Select One', '', '');
//    }, 1500);
//    closeAINavigation();
//    $("#aiTypedValue").attr('readonly', false);

}
function getAIInternetResults(aiDomain, aiSearchString, aiClickedTitle) {
// Add active class to the current button (highlight it
    try {
        $("#aiTypedValue").val(aiClickedTitle);
        var fileValue = $('#aiAttachedmentImageUpload').val();
        var imgValue = $('#aiImageAttachedmentUpload').val();
        if (fileValue != '' && fileValue != undefined && fileValue != null) {   //10-07-1024
            var file = $('#aiAttachedmentImageUpload')[0].files[0];
            var imgHtml = '<img src="images/Excel.png" width=\"50\" style=\"background: transparent;\" alt="Converted Image">';
            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'><div style=\"justify-content: end; display:flex; font-size: 12px; gap: 2px;\">Searching in " + aiClickedTitle + " <b> " + aiSearchString + "</b></div>" + imgHtml + "</div>");
//            aiSearchString += await getFileText(file);
        } else if (imgValue != '' && imgValue != undefined && imgValue != null) {
            var file = $('#aiImageAttachedmentUpload')[0].files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var imgHtml = '<img src="' + e.target.result + '" width=\"100\" alt="Converted Image">';
                    $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'><div style=\"justify-content: end; display:flex; font-size: 12px;gap: 2px;\">Searching in " + aiClickedTitle + " <b> " + aiSearchString + "</b></div>" + imgHtml + "</div></b></div>");
                };
                reader.readAsDataURL(file);
            }
//            aiSearchString += await getImageToText(file);
        } else {
            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'><div style=\"justify-content: end; display:flex; font-size: 12px;\">Searching in " + aiClickedTitle + "</div><b>" + aiSearchString + "</b></div>");
        }
        $("#aiTypedValue").attr('readonly', true);
        showaiLoader();
        $('.aicontentArea').scrollTop($('.aicontentArea')[0].scrollHeight);

        $.ajax({
            type: "POST",
            url: 'getReferenceLinksBasedOnRefNoAndClass',
            data: {
                referenceNo: aiSearchString,
                className: aiSearchString,
                recordNo: '',
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopaiLoader();
                if (response != null && response != "" && response != undefined) {
                    var responseObj = JSON.parse(response);
                    defaultAITypingBasedOnResponse(responseObj['1row'], '', "", "");
                    $("#aiTypedValue").val('');
                    $("#aiTypedValue").attr('readonly', false);
                    $("#aiLensAttachedmentFile").html('');
                    $('#aiAttachedmentImageUpload').val("");
                    $('#aiImageAttachedmentUpload').val('');
                }
            }
        });
    } catch (e) {
        stopaiLoader();
    }
}
function aiLensImageBasedOnClass() {
    $(".aimroImgClass").attr("src", "images/iDXPMROCreate.png");
    $(".aifinishedgoodsImgClass").attr("src", "images/iDXPFinishedGoodsCreate.png");
    $(".airohImgClass").attr("src", "images/iDXPRawaterialsCreate.png");
    $(".aiproductImgClass").attr("src", "images/MaterialMaster.png");
    $(".aiispirImgClass").attr("src", "images/spir.png");
    $(".aimbomImgClass").attr("src", "images/mbom.png");
    $(".aiserviceImgClass").attr("src", "images/ServiceMaster.png");
    $(".aivendorImgClass").attr("src", "images/VendorMaster.png");
    $(".aicustomerImgClass").attr("src", "images/CustomerMaster.png");
    $(".aiassetImgClass").attr("src", "images/AssetMaster.png");
    $(".aibusinesspartnerImgClass").attr("src", "images/BusinessPartner.png");
    $(".aiProductImgClass").attr("src", "images/MaterialMaster.png");
    $(".aiiSPIRImgClass").attr("src", "images/spir.png");
    $(".aimBOMImgClass").attr("src", "images/mbom.png");
    $(".aiServiceImgClass").attr("src", "images/ServiceMaster.png");
    $(".aiVendorImgClass").attr("src", "images/VendorMaster.png");
    $(".aiCustomerImgClass").attr("src", "images/CustomerMaster.png");
    $(".aiAssetImgClass").attr("src", "images/AssetMaster.png");
    $(".aiBusinessPartnerImgClass").attr("src", "images/BusinessPartner.png");
    $(".aiDefaultNoImgClass").attr("src", "images/aiConfNo.png");
    $(".aiDefaultYesImgClass").attr("src", "images/aiConfYes.png");
    $(".aiDefaultChatImgClass").attr("src", "images/airecentchat.png");
    $(".aiSourcingLocationClass").attr("src", "images/location.png");
    $(".aiSpendAnalyticsImgrClass").attr("src", "images/iDXPUI5AnalyticsShowCard.svg");
    $(".aiSpendTimelineImgrClass").attr("src", "images/timelinedxp.png");
    $(".aiDefaultTimeLineImgClass").attr("src", "images/aiTimeLine.png");
    $(".aiSpendAnalyticsPivotImgClass").attr("src", "images/iDXPUI5PivotTable.svg");
    $(".aiLensMaterialImgClass").attr("src", "images/MaterialMaster.png");
    $(".aiLensERPImgClass").attr("src", "images/AILenserp.png");
    $(".aiSapDetailsImgClass").attr("src", "images/SAPData.png");
    $(".aiLensProcessInfoImgCls").attr("src", "images/information.gif");
    $(".aiDefaulVideoImgClass").attr("src", "images/SearchVideoPlay.png");
    $(".aiDefaultGifImgClass").attr("src", "images/SearchGif.png");
    $(".aiDefaultHelpImgClass").attr("src", "images/SearchHelp.png");
    $(".aiDefaultSearchImgClass").attr("src", "images/iDXPUI5Search.svg");
    $(".aiDefaultInfoGraphsImgClass").attr("src", "images/iDXPUI5AnalyticsShowCard.svg");
    $(".aiDefaultChangeImgClass").attr("src", "images/iDXPModifyIcon.png");
    $(".aiDefaultExtendImgClass").attr("src", "images/iDXPExtend.png");
    $(".aiDefaultDeleteImgClass").attr("src", "images/iDXPDeleteIcon.png");
    $(".aiDefaultUnDeleteImgClass").attr("src", "images/iDXPUndeleteicon.png");
    $(".aiDefaultPPRImgClass").attr("src", "images/PiLog-Cloud-LogoRedBlue4.png");
    $(".aiDefaultLocPrImgClass").attr("src", "images/ppo.png");
    $(".aiDefaultInternetImgClass").attr("src", "images/aiInternet.png");
    $(".aiDefaultKnowledgeImgClass").attr("src", "images/Bulb_Icon_Widget.png");
    $(".aiDefaultViewDetailsImgClass").attr("src", "images/iDXPUI5BaseTable.svg");
    $(".aiaccountassignmentgroupImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiaccountgroupImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiapprovalsImgClass").attr("src", "images/iDXPApprovals.png");
    $(".aiarchivingunarchivingImgClass").attr("src", "images/iDXPArchivingUnarchiving.png");
    $(".aiassetmasterImgClass").attr("src", "images/AssetMaster.png");
    $(".aiassociateddataImgClass").attr("src", "images/iDXPAssociatedData.png");
    $(".aiattachmentmanagerImgClass").attr("src", "images/iDXPAttachmentManager.png");
    $(".aiautoservicecontractextractImgClass").attr("src", "images/ServiceMaster.png");
    $(".aibankbranchImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aibankkeyImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aibanknameImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aibankregioncodeImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aibasetableImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiblockImgClass").attr("src", "images/iDXPBlockIcon.png");
    $(".aiblockfunctionImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aibpprocessesImgClass").attr("src", "images/BusinessPartner.png");
    $(".aicashmanagementgroupImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aicategoryImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aichangerequestImgClass").attr("src", "images/iDXPChangeRequest.gif");
    $(".aicharacteristicsImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aicityImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aicompanycodeImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiconfirmationcontrolImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiconsolidationplanImgClass").attr("src", "images/iDXPSmartConsolidation.png");
    $(".aiconsolidationresolutionImgClass").attr("src", "images/iDXPSmartConsolidation.png");
    $(".aiconsolidationresolutionfinalisationImgClass").attr("src", "images/iDXPSmartConsolidation.png");
    $(".aiconsolidationresolutionrequestorrejectImgClass").attr("src", "images/iDXPSmartConsolidation.png");
    $(".aicontactperson-countryImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aicountryImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aicreateImgClass").attr("src", "images/iDXPCreateIcon.png");
    $(".aicreatemodifyImgClass").attr("src", "images/iDXPModifyIcon.png");
    $(".aicurrencyImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aicust.pric.procedureImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aicust.statsgroupImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aicustomeraccountgroupImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aicustomergroupImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aicustomermasterImgClass").attr("src", "images/CustomerMaster.png");
    $(".aicustomerprocessesImgClass").attr("src", "images/CustomerMaster.png");
    $(".aidataharmonizationImgClass").attr("src", "images/Data_Harmonization-01.png");
    $(".aidataroutingworkbenchImgClass").attr("src", "images/iDXPDataRoutingorkbench.png");
    $(".aidataunificationportalImgClass").attr("src", "images/Data-Unification.svg");
    $(".aideleteImgClass").attr("src", "images/iDXPDeleteIcon.png");
    $(".aideliveryplantImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aideliverypriorityImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aideparturecountryImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aidescriptionsImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aidictionaryImgClass").attr("src", "images/iDXPDictionary.png");
    $(".aidistributionchannelImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aidivisionImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aidocumentationdataImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiebomprocessesImgClass").attr("src", "images/ebom.png");
    $(".aiemployeemasterImgClass").attr("src", "images/employee_master.png");
    $(".aiequipmentprocessesImgClass").attr("src", "images/AssetMaster.png");
    $(".aierpbasetablesImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiextendImgClass").attr("src", "images/iDXPExtend.png");
    $(".aifbomprocessesImgClass").attr("src", "images/fbom.png");
    $(".aifunctionallocationprocessesImgClass").attr("src", "images/AssetMaster.png");
    $(".aiglaccountsImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiharmonizedataImgClass").attr("src", "images/Data_Harmonization-01.png");
    $(".aiharmonizedataspecificImgClass").attr("src", "images/Data_Harmonization-01.png");
    $(".aiidqmdecsriptionImgClass").attr("src", "images/Descriptions.png");
    $(".aiifarprocessesImgClass").attr("src", "images/iFAR.png");
    $(".aiimageworkflowImgClass").attr("src", "images/Image_WorkFlow-01.png");
    $(".aiincotermsImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiincoterms1ImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiindustrysectorImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiinfographicsImgClass").attr("src", "images/iDXPReports.png");
    $(".aiinterestcalculationindicatorImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiinterestcycleImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiinventoryoptimizationImgClass").attr("src", "images/Inventory_Optimization_icon.png");
    $(".aiispirprocessedrecordsImgClass").attr("src", "images/registration_icon.png");
    $(".aiispirregisteranduploadImgClass").attr("src", "images/iDXPAttachmentManager.png");
    $(".aiispiruploaddatatocatalogueprocessImgClass").attr("src", "images/bulk_creation.png");
    $(".aiispirverificationprocessImgClass").attr("src", "images/data_verification_icon.png");
    $(".aimaintainanceplanprocessesImgClass").attr("src", "images/PMMaintanancePlan.png");
    $(".aimassdataprocessImgClass").attr("src", "images/Mass_Registration_Transfer-01.png");
    $(".aimassdataprocessingImgClass").attr("src", "images/Mass_Registration_Transfer-01.png");
    $(".aimassdescriptionchangeImgClass").attr("src", "images/Mass_Registration_Transfer-01.png");
    $(".aimassextensionImgClass").attr("src", "images/Mass_Registration_Transfer-01.png");
    $(".aimassregistrationImgClass").attr("src", "images/Mass_Registration_Transfer-01.png");
    $(".aimaterialclusterImgClass").attr("src", "images/iDXPMaterialCluster.png");
    $(".aimaterialmasterImgClass").attr("src", "images/MaterialMaster.png");
    $(".aimeasuringpointprocessesImgClass").attr("src", "images/PMMeasuringPoints.png");
    $(".aimodifyImgClass").attr("src", "images/iDXPModifyIcon.png");
    $(".aiordercurrencyImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aipaymentblockImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aipendingapprovalsImgClass").attr("src", "images/iDXPApprovals.png");
    $(".aipendingrequestsImgClass").attr("src", "images/iDXPPendingRequests.png");
    $(".aipricegroupImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aipricelistImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiproductdataimportImgClass").attr("src", "images/iDXPAttachmentManager.png");
    $(".aiproductprocessesImgClass").attr("src", "images/MaterialMaster.png");
    $(".aipurchaseorganizationImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aireasonforexemptionImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aireconciliationaccountImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aireferencedataImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".airegionImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".airegionstateprovincecountyImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aireportsImgClass").attr("src", "images/iDXPReports.png");
    $(".aireverseinterfacewbImgClass").attr("src", "images/iDXPReverseInterfaceWB.png");
    $(".aisaccodeImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aisalesdistrictImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aisalesgroupImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aisalesofficeImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aisalesorganizationImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aischemagroupImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiserviceconfiguratorImgClass").attr("src", "images/ServiceMaster.png");
    $(".aiservicehierarchyImgClass").attr("src", "images/ServiceMaster.png");
    $(".aiserviceinstancetoinstancecopy1ImgClass").attr("src", "images/ServiceMaster.png");
    $(".aiservicemasterImgClass").attr("src", "images/ServiceMaster.png");
    $(".aiserviceprocessesImgClass").attr("src", "images/ServiceMaster.png");
    $(".aiservicespecmodelImgClass").attr("src", "images/ServiceMaster.png");
    $(".aishippingconditionsImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aismartconsolidationImgClass").attr("src", "images/iDXPSmartConsolidation.png");
    $(".aismrcreateImgClass").attr("src", "images/iDXPCreateIcon.png");
    $(".aisortkeyImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aistreetImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aisubcategoryImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aisupersededmaterialsImgClass").attr("src", "images/iDXPSupersededMaterials.png");
    $(".aiswiftcodeImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aitasklistprocessesImgClass").attr("src", "images/PMTaskList.png");
    $(".aitatreportImgClass").attr("src", "images/iDXPTATReport.png");
    $(".aitatreportsImgClass").attr("src", "images/iDXPTATReport.png");
    $(".aitaxcategoryImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aitaxclassificationforcustomerImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aitaxonomymanagerImgClass").attr("src", "images/Taxonomy_Manager-01.png");
    $(".aitaxonomyworkbenchImgClass").attr("src", "images/Taxonomy_Workbench-01.png");
    $(".aitermsofpaymentImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aititleImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aitradingpartnerImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aitransportationzoneImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiunblockImgClass").attr("src", "images/iDXPUnBlockIcon.png");
    $(".aiundeleteImgClass").attr("src", "images/iDXPUndeleteicon.png");
    $(".aiunsupersededmaterialsImgClass").attr("src", "images/iDXPUnSupersededMaterials.png");
    $(".aiuploadtransfertoerpImgClass").attr("src", "images/material_icon.png");
    $(".aiuploadtransfertosapImgClass").attr("src", "images/material_icon.png");
    $(".aivaluestandardizationImgClass").attr("src", "images/iDXPValueStandardization.png");
    $(".aivendormasterImgClass").attr("src", "images/VendorMaster.png");
    $(".aivendorprocessesImgClass").attr("src", "images/VendorMaster.png");
    $(".aiwithholdingtaxcodeImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiwithholdingtaxtypeImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiworkcenterprocessesImgClass").attr("src", "images/PMWorkCentre.png");
    $(".aiproductdataImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiclassificationhierarchyhsnImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aiimporteddataImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aidataanalysisImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aibasetablesImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aihsnimportImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aimroImgClass").attr("src", "images/iDXPMROCreate.png");
    $(".aidataplanningImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aihsnexportImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aicreatenewproductImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aifinishedgoodsImgClass").attr("src", "images/iDXPFinishedGoodsCreate.png");
    $(".aiproducthierarchyImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".airohImgClass").attr("src", "images/iDXPRawaterialsCreate.png");
    $(".aidataharmonizationprocessImgClass").attr("src", "images/Data_Harmonization-01.png");
    $(".aidataunificationportalImgClass").attr("src", "images/Data-Unification.svg");
    $(".aimassProfillingImgClass").attr("src", "images/Data_Profiling.png");
    $(".aimassDeduplicationImgClass").attr("src", "images/iDXPSmartConsolidation.png");
    $(".aimassvalidationprocessImgClass").attr("src", "images/data_verification_icon.png");
    $(".aiautoHarmonizeprocessImgClass").attr("src", "images/Data_Harmonization-01.png");
    $(".aiCharAllocationprocessImgClass").attr("src", "images/Characteristics_Automation.png");
    $(".aiRefDocAllocationprocessImgClass").attr("src", "images/Reference_Automation.png");
    $(".aidataprocessImgClass").attr("src", "images/process_icon_new.png");
    $(".aistatsandfactsImgClass").attr("src", "images/statsAndFacts.png");
    $(".aicontentviewerImgClass").attr("src", "images/contentViewer.png");
    $(".aiindustryImgClass").attr("src", "images/stat_industry.png");
    $(".aidisciplineImgClass").attr("src", "images/stats_discipline.png");
    $(".aimodelpartImgClass").attr("src", "images/AssetMaster.png");
    $(".aitasklistsImgClass").attr("src", "images/PMTaskList.png");
    $(".aitasklistImgClass").attr("src", "images/PMTaskList.png");
    $(".aimaintenanceplanImgClass").attr("src", "images/PMMaintanancePlan.png");
    $(".aimaintenanceitemImgClass").attr("src", "images/PMMeasuringPoints.png");
    $(".aifailurecodesImgClass").attr("src", "images/44warning.png");
    $(".aimaintenancepointcounterImgClass").attr("src", "images/PMMeasuringPoints.png");
    $(".aitaxonomyImgClass").attr("src", "images/Dictionary_Icon_Blue.png");
    $(".aiattributesImgClass").attr("src", "images/attributes.png");
    $(".aiuomImgClass").attr("src", "images/uom.png");
    $(".aipilog’staxonomyImgClass").attr("src", "images/Dictionary_Icon_Blue.png");
    $(".aipilog’staxonomyhierarchyImgClass").attr("src", "images/deCompositionTree.png");
    $(".aieclassclassificationdataImgClass").attr("src", "images/iDXPBaseTable.png");
    $(".aipilog’staxonomyclassificationsImgClass").attr("src", "images/deCompositionTree.png");
    $(".aiPdfDataIconImgClass").attr("src", "images/pdficon.png");
    $(".aiXlsxDataImgClass").attr("src", "images/idqmXlsx.png");
    $(".aiImageAttachImgClass").attr("src", "images/idqmImg.png");
    $(".aiUrlDataImgClass").attr("src", "images/UrlFile.png");
    $(".aiManualProcessImgClass").attr("src", "images/manualProcess.png");
    $(".aiAgentImgClass").attr("src", "images/aiAgent.png");
    $(".aimeasuringpointImgClass").attr("src", "images/PMMeasuringPoints.png");
    $(".aifunctionallocationImgClass").attr("src", "images/AssetMaster.png");
    $(".aiworkcenterImgClass").attr("src", "images/PMWorkCentre.png");
    $(".aipmhrminimasterImgClass").attr("src", "images/EmployeeMaster.png");
    $(".aimaterialImgClass").attr("src", "images/MaterialMaster.png");
    $(".aiebomImgClass").attr("src", "images/ebom.png");
    $(".aibosmssImgClass").attr("src", "images/ServiceMaster.png");
    $(".aiifarImgClass").attr("src", "images/iFAR.png");
    $(".aiDefaultICFImgClass").attr("src", "images/iDXPUI5ContentFoundry.svg");
    $(".aidatagovernanceImgClass").attr("src", "images/Data-Governance.svg");
    $(".aidataqualityImgClass").attr("src", "images/Data Harmonization-Blue-01.png");
    $(".aicontentfoundryImgClass").attr("src", "images/iContentFoundryLogo.png");
    $(".aimdgaddonImgClass").attr("src", "images/additionT.png");
    $(".aidatamigrationImgClass").attr("src", "images/data_migration_icon.svg");
    $(".aihrminimasterImgClass").attr("src", "images/employee_master.png");
    $(".aiworkflowconfiguratorImgClass").attr("src", "images/configuration_WorkBench.png");
    $(".aianalyticsandreportsImgClass").attr("src", "images/analyticsShowCard.png");
    $(".aiassetfunctionalhierarchyImgClass").attr("src", "images/Assetworkbench.png");
    $(".aiassethierarchyImgClass").attr("src", "images/deCompositionTree.png");
    $(".aifbomImgClass").attr("src", "images/fbom.png");
    $(".aiworkflowandgovernanceImgClass").attr("src", "images/Creation_WorkflowBlue.png");
    $(".aidataconsolidationandclusterImgClass").attr("src", "images/iDXPSmart Consolidation.png");
    $(".aiinventoryandoptimizationImgClass").attr("src", "images/Inventory_Optimization_icon.png");
    $(".aidatamodelingandqualityImgClass").attr("src", "images/Data Harmonization-Blue-01.png");
    $(".aianalyticsandreportsImgClass").attr("src", "images/Data Analytics-icon-Blue-01.png");
    $(".aiispirmanagementImgClass").attr("src", "images/spir.png");
    $(".aimassregistrationtransferImgClass").attr("src", "images/Massdataprocessing.png");
    $(".aianalyticssuiteImgClass").attr("src", "images/Data Analytics-icon-Blue-01.png");
    $(".aiolapanalyticsImgClass").attr("src", "images/analyticsShowCard.png");
    $(".aipunchoutImgClass").attr("src", "images/Data validation.png");
    $(".aimanufacturermanagementImgClass").attr("src", "images/Quality_Management_Icon_Blue.png");
    $(".aiservicemasterrecordsanalysisImgClass").attr("src", "images/Serviceworkbench.png");
    $(".aiknowledgebaseImgClass").attr("src", "images/Industry Knowledge Base-Blue-01.png");
    $(".aicustomerhierarchyImgClass").attr("src", "images/CustomerDataprofiling.png");
    $(".aiintegrationandinterfacesImgClass").attr("src", "images/interfaceConfiguration.png");
    $(".aimasterdataentitiesImgClass").attr("src", "images/Master_Detail_View.png");
    $(".aiknowledgemanagementImgClass").attr("src", "images/Industry Knowledge Base-Blue-01.png");
    $(".aimeasuringpointcounterImgClass").attr("src", "images/VendorDataProfiling.png");
    $(".aibosmssImgClass").attr("src", "images/mss.png");
    $(".aicockpitviewImgClass").attr("src", "images/cockpit_icon.png");
    $(".aiDefaultDropDownImgClass").attr("src", "images/iDXPUI5SearchDropdown.png");
    $(".aiarticleretailImgClass").attr("src", "images/iDXPUI5ArticleMaster.png");
    $(".aiCheckBoxViewImgClass").attr("src", "images/aiEnable.png");
    $(".aiCopyImgClass").attr("src", "images/aiCopy.png");
    $(".aiCreateImgClass").attr("src", "images/Create-Icon.svg");
}
function aiLensViewInMap(mapData) {
    try {
        $("#map").remove();
        $("body").append("<div id=map></div>");
        if (mapData != null && mapData != undefined && mapData != '') {
            var addressesP = [];
            var addressesC = [];
            var polylineMap = [];
            var responseObj = JSON.parse(mapData);
            var addressesObjPArr = responseObj['PDATA'];
            var addressesObjCArr = responseObj['CDATA'];
            var addressesPObj = addressesObjPArr;
            var addressesCObj = addressesObjCArr;
            $.each(addressesPObj, function (i) {
                if (addressesPObj[i]['NAME'] != null && addressesPObj[i]['ADDRESS'] != null) {
                    var rowData = addressesPObj[i];
                    addressesP.push(rowData['NAME'] + ", " + rowData['ADDRESS']);
                }
            });
            $.each(addressesCObj, function (i) {
                if (addressesCObj[i]['NAME'] != null && addressesCObj[i]['ADDRESS'] != null) {
                    var rowData = addressesCObj[i];
                    addressesC.push(rowData['NAME'] + ", " + rowData['ADDRESS']);
                }
            });
            navigator.geolocation.getCurrentPosition(
                    function (position) {
                        var userLatLng = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        var map = new google.maps.Map(document.getElementById('mapDialog'), {
                            center: userLatLng,
                            zoom: 5 // Adjust the zoom level as needed
                        });
                        // Add a marker for the user's location
                        polylineMap.push(userLatLng);
                        var userMarker = new google.maps.Marker({
                            map: map,
                            position: userLatLng,
                            title: 'My Location',
                            icon: {
                                url: 'images/aiLocRed.png',
                                scaledSize: new google.maps.Size(24, 24),
                                fillColor: 'red',
                                fillOpacity: 0.7,
                                strokeColor: 'white',
                                strokeWeight: 2
                            }
                        });
                        // Add info window for user's marker
                        var userInfowindow = new google.maps.InfoWindow({
                            content: 'Your Location'
                        });
                        userMarker.addListener('click', function () {
                            userInfowindow.open(map, userMarker);
                        });
                        // Geocode and add markers with info windows for each address
                        addressesP.forEach(function (address) {
                            var geocoder = new google.maps.Geocoder();
                            showLoader();
                            geocoder.geocode({address: address}, function (results, status) {
                                if (status === 'OK') {
                                    stopLoader();
                                    polylineMap.push(results[0].geometry.location);
                                    var marker = new google.maps.Marker({
                                        map: map,
                                        position: results[0].geometry.location,
                                        title: address,
                                        icon: {
                                            url: 'images/aiLocGreen.png',
                                            scaledSize: new google.maps.Size(24, 24),
                                            fillColor: 'green',
                                            fillOpacity: 0.7,
                                            strokeColor: 'white',
                                            strokeWeight: 2
                                        }
                                    });
                                    const pinBorder = new PinElement({
                                        borderColor: "#137333",
                                    });
                                    let randomInt = getRandomInt(80, 90);
                                    // Add info window for the address marker
//                                    var infowindow = new google.maps.InfoWindow({
//                                        content: "<div class='info-window-content'>$" + randomInt + "</div>"
//                                    });
//                                    infowindow.open(map, marker);
                                } else {
                                    stopLoader();
                                    console.error('Geocode was not successful for the following reason: ' + status);
                                }
                            });
                        });
                        addressesC.forEach(function (address) {
                            var geocoder = new google.maps.Geocoder();
                            showLoader();
                            geocoder.geocode({address: address}, function (results, status) {
                                if (status === 'OK') {
                                    stopLoader();
                                    polylineMap.push(results[0].geometry.location);
                                    var marker = new google.maps.Marker({
                                        map: map,
                                        position: results[0].geometry.location,
                                        title: address,
                                        icon: {
                                            url: 'images/aiLocBlue.png',
                                            scaledSize: new google.maps.Size(24, 24),
                                            fillColor: 'blue',
                                            fillOpacity: 0.7,
                                            strokeColor: 'white',
                                            strokeWeight: 2
                                        }
                                    });
                                    let randomInt = getRandomInt(80, 90);
                                    // Add info window for the address marker
//                                    var infowindow = new google.maps.InfoWindow({
//                                        content: "<div class='info-window-content'>$" + randomInt + "</div>"
//                                    });
//                                    infowindow.open(map, marker);
                                } else {
                                    stopLoader();
                                    console.error('Geocode was not successful for the following reason: ' + status);
                                }
                            });
                        });

                        try {
                            //Intialize the Path Array
                            var path = new google.maps.MVCArray();

                            //Intialize the Direction Service
                            var service = new google.maps.DirectionsService();


                            var polylinePath = new google.maps.Polyline({
                                path: polylineMap,
                                geodesic: true,
                                strokeColor: '#F57E16',
                                strokeOpacity: 1.0,
                                strokeWeight: 2
                            });
                            polylinePath.setMap(map);
                        } catch (er) {

                        }

                    },
                    function (error) {
                        stopLoader();
                        console.error('Error getting user location: ' + error.message);
                    }
            );
            closeDialogBox("#dialog");
            $("#dialog").html('<div id="mapDialog" style="height: 400px; width: 100%;"></div>');
            $("#dialog").dialog({resizable: false,
                title: 'Vendor Locations',
                modal: true,
                height: 'auto',
                minWidth: 300,
                width: 1000,
                fluid: true,
                buttons: [{
                        text: 'Ok',
                        click: function () {
                            $(this).html("");
                            $(this).dialog("destroy");
                        }
                    }],
                open: function () {
                    $(this).closest(".ui-dialog").css("z-index", "9999");
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
    } catch (e) {
    }
}
function getAIhtmlTreesubComponent(id)
{

//    let a = $("#" + id).attr("id");
    let highlevelValue = $("#" + id).attr("data-hiLevelvalue");
    let dataparentnode = $("#" + id).attr("data-parentnode");
    let datafilterColName = $("#" + id).attr("data-filterColName");
    let datasegement = $("#" + id).attr("data-segement");
    let datafamily = $("#" + id).attr("data-family");
    let dataclass = $("#" + id).attr("data-class");
    let datacomodity = $("#" + id).attr("data-comodity");
    console.log(highlevelValue);
    console.log(datafilterColName);
    console.log(dataparentnode);
    console.log(datasegement);
    console.log(datafamily);
    console.log(dataclass);
    console.log(datacomodity);




    var filterItems = $('[data-hiLevelvaluefilter-item]');
    filterItems.removeClass('active');
    var ulfilterItems = $('[data-ulfilter-item]');
    ulfilterItems.removeClass('htmlsubtree');
    ulfilterItems.addClass('htmlsubtree');

    if ($("#" + id).hasClass('active')) {
        $("#" + id).removeClass('active');
        $("#" + id).next('ul.htmlsubtree').toggle();
    } else {
        $("#" + id).toggleClass('active');

        if (datasegement != null && datasegement != '' && datasegement != undefined && datasegement != 'undefined') {
            $("#htmlsubtree" + datasegement).removeClass('htmlsubtree');
            var datasegementId = 'htmltreeproductname' + datasegement;
            if (id != datasegementId) {
                $("#" + datasegementId).toggleClass('active');
            }

        }
        if (datafamily != null && datafamily != '' && datafamily != undefined && datafamily != 'undefined') {
            $("#htmlsubtree" + datafamily).removeClass('htmlsubtree');
            var datafamilyId = 'htmltreeproductname' + datafamily;
            if (id != datafamilyId) {
                $("#" + datafamilyId).toggleClass('active');
            }
        }
        if (dataclass != null && dataclass != '' && dataclass != undefined && dataclass != 'undefined') {
            $("#htmlsubtree" + dataclass).removeClass('htmlsubtree');
            var dataclassId = 'htmltreeproductname' + dataclass;
            if (id != dataclassId) {
                $("#" + dataclassId).toggleClass('active');
            }
        }
        if (datacomodity != null && datacomodity != '' && datacomodity != undefined && datacomodity != 'undefined') {
            $("#htmlsubtree" + datacomodity).removeClass('htmlsubtree');
            var datacomodityId = 'htmltreeproductname' + datacomodity;
            if (id != datacomodityId) {
                $("#" + datacomodityId).toggleClass('active');
            }
        }

    }
}

function getHtmlContentBasedOnQueryPopUp(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, titleMessage, popupwidth, popupheight,
        aiTypeFlag, aiSearchString, aiRecordNo, aiReqNo, aiInstance, aiPlant, aiCompany, aiPorg, aiSorg, aiDC, aiDivision, aiERPNo) {
// Add active class to the current button (highlight it
    try {
        var dialogwidth = '1200';
        var dialogheight = '600';
        var tmessage = "Message";
        $("#dialog").html("");
        showLoader();
        if (popupwidth != null && popupwidth != '' && popupwidth != 'undefined')
        {
            dialogwidth = popupwidth;
        }
        if (popupheight != null && popupheight != '' && popupheight != 'undefined')
        {
            dialogheight = popupheight;
        }
        if (titleMessage != null && titleMessage != '' && titleMessage != 'undefined')
        {
            tmessage = titleMessage;
        }

        if (aiTypeFlag == null || aiTypeFlag == "" || aiTypeFlag == undefined) {
            aiTypeFlag = 'N';
        }
        if (aiSearchString == null || aiSearchString == "undefined" || aiSearchString == undefined) {
            aiSearchString = '';
        }

        if (aiRecordNo == null || aiRecordNo == "undefined" || aiRecordNo == undefined) {
            aiRecordNo = '';
        }
        if (aiReqNo == null || aiReqNo == "undefined" || aiReqNo == undefined) {
            aiReqNo = '';
        }
        if (aiInstance == null || aiInstance == "undefined" || aiInstance == undefined) {
            aiInstance = '';
        }
        if (aiPlant == null || aiPlant == "undefined" || aiPlant == undefined) {
            aiPlant = '';
        }
        if (aiCompany == null || aiCompany == "undefined" || aiCompany == undefined) {
            aiCompany = '';
        }
        if (aiPorg == null || aiPorg == "undefined" || aiPorg == undefined) {
            aiPorg = '';
        }
        if (aiSorg == null || aiSorg == "undefined" || aiSorg == undefined) {
            aiSorg = '';
        }

        if (aiDC == null || aiDC == "undefined" || aiDC == undefined) {
            aiDC = '';
        }

        if (aiDivision == null || aiDivision == "undefined" || aiDivision == undefined) {
            aiDivision = '';
        }
        if (aiERPNo == null || aiERPNo == "undefined" || aiERPNo == undefined) {
            aiERPNo = '';
        }

        $.ajax({
            type: "POST",
            url: 'getAILensContentFromDB',
            data: {
                aiQuery: aiQuery,
                aiQueryAns: aiQueryAns,
                aiQueryType: aiQueryType,
                aiSubQueryFlag: aiSubQueryFlag,
                aiTypeFlag: aiTypeFlag,
                aiSearchString: aiSearchString,
                aiRecordNo: aiRecordNo,
                aiReqNo: aiReqNo,
                aiInstance: aiInstance,
                aiPlant: aiPlant,
                aiCompany: aiCompany,
                aiPorg: aiPorg,
                aiSorg: aiSorg,
                aiDC: aiDC,
                aiDivision: aiDivision,
                aiERPNo: aiERPNo,
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();

                if (response != null && response != "" && response != undefined) {
                    showErrorPopupMessage(response, tmessage, dialogwidth, dialogheight);
                }
            },
            error: function (e) {
//                    sessionTimeout(e);
                stopLoader();
            }
        });

    } catch (e) {
        console.log(e)
        stopLoader();
    }
}



function getHtmlContentBasedOnQuery(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, titleMessage, popupwidth, popupheight,
        aiTypeFlag, aiSearchString, aiRecordNo, aiReqNo, aiInstance, aiPlant, aiCompany, aiPorg, aiSorg, aiDC, aiDivision, aiERPNo) {
// Add active class to the current button (highlight it
    try {
        showLoader();
        var returnData = "";
        if (aiTypeFlag == null || aiTypeFlag == "" || aiTypeFlag == undefined) {
            aiTypeFlag = 'N';
        }
        if (aiSearchString == null || aiSearchString == "undefined" || aiSearchString == undefined) {
            aiSearchString = '';
        }

        if (aiRecordNo == null || aiRecordNo == "undefined" || aiRecordNo == undefined) {
            aiRecordNo = '';
        }
        if (aiReqNo == null || aiReqNo == "undefined" || aiReqNo == undefined) {
            aiReqNo = '';
        }
        if (aiInstance == null || aiInstance == "undefined" || aiInstance == undefined) {
            aiInstance = '';
        }
        if (aiPlant == null || aiPlant == "undefined" || aiPlant == undefined) {
            aiPlant = '';
        }
        if (aiCompany == null || aiCompany == "undefined" || aiCompany == undefined) {
            aiCompany = '';
        }
        if (aiPorg == null || aiPorg == "undefined" || aiPorg == undefined) {
            aiPorg = '';
        }
        if (aiSorg == null || aiSorg == "undefined" || aiSorg == undefined) {
            aiSorg = '';
        }

        if (aiDC == null || aiDC == "undefined" || aiDC == undefined) {
            aiDC = '';
        }

        if (aiDivision == null || aiDivision == "undefined" || aiDivision == undefined) {
            aiDivision = '';
        }
        if (aiERPNo == null || aiERPNo == "undefined" || aiERPNo == undefined) {
            aiERPNo = '';
        }

        $.ajax({
            type: "POST",
            url: 'getAILensContentFromDB',
            data: {
                aiQuery: aiQuery,
                aiQueryAns: aiQueryAns,
                aiQueryType: aiQueryType,
                aiSubQueryFlag: aiSubQueryFlag,
                aiTypeFlag: aiTypeFlag,
                aiSearchString: aiSearchString,
                aiRecordNo: aiRecordNo,
                aiReqNo: aiReqNo,
                aiInstance: aiInstance,
                aiPlant: aiPlant,
                aiCompany: aiCompany,
                aiPorg: aiPorg,
                aiSorg: aiSorg,
                aiDC: aiDC,
                aiDivision: aiDivision,
                aiERPNo: aiERPNo,
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();

                if (response != null && response != "" && response != undefined) {
                    returnData = response;
                } else {
                    returnData = "";
                }
            }, error: function (e) {
//                    sessionTimeout(e);
                stopLoader();
                returnData = "";
            }
        });

    } catch (e) {
        console.log(e)
        returnData = "";
        stopLoader();
    }


}



function getiDXPcomponentfromAILens(
        aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, type, componentId,
        domain, role, componentType, searchId, subscriptionflag, title, gridId, processFlag, clickedTitle,
        aiSearchString, aiRecordNo, aiReqNo, aiInstance, aiPlant, aiCompany, aiPorg, aiSorg, aiDC, aiDivision, aiERPNo, pramparamArray) {

//   if (clickedTitle != null && clickedTitle != '' && clickedTitle != 'undefined' && clickedTitle != undefined) {
//    $("#aiTypedValue").val(clickedTitle);
//    $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>" + clickedTitle + "</div>");
//    $("#aiTypedValue").val('');  
//}
    var paramArray = [];
    var paramObj = {};
    paramObj.column = 'BATCH_ID';
    paramObj.value = 'BATCH_ID';
    paramObj.operator = 'EQUALS';
//                                        paramObj.symbol = '=';
    paramObj.selectNum = 1;
    paramArray.push(paramObj);
    getDomaincomponent(domain, role, componentType, searchId, subscriptionflag, title, 'Y');
    setTimeout(function () {
        if (type != null && type != '' && type != 'undefined' && type != undefined) {

            if (type == 'CLUSTER') {
                getcluster(componentId, role, domain, 'N', paramArray);
            } else if (type == 'NESTEDGRID') {
                getnestedGrid(componentId, paramArray, 0, 'dxpGridContent', "", 'Y');
                $("#basketNameValId").hide();
                try {
                    showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', clickedTitle, 'N');
                } catch (e) {

                }
                $("#dxpGridTab").attr("data-gridcomponenttype", type);
                $("#dxpGridTab").attr("data-selectedgridId", componentId);
                $("#dxpGridTab").attr("data-selectedRoleId", role);
                $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
            } else if (type == 'GRID') {
                getnestedGrid(type, paramArray, 0, 'dxpGridContent', "", 'N');
                try {
                    showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', clickedTitle, 'N');
                } catch (e) {

                }
                $("#dxpGridTab").attr("data-gridcomponenttype", type);
                $("#dxpGridTab").attr("data-selectedgridId", componentId);
                $("#dxpGridTab").attr("data-selectedRoleId", role);
                $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
            }

        } else {
            getnestedGrid(type, paramArray, 0, 'dxpGridContent', "", 'N');
            try {
                showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', clickedTitle, 'N');
            } catch (e) {

            }
            $("#dxpGridTab").attr("data-gridcomponenttype", type);
            $("#dxpGridTab").attr("data-selectedgridId", componentId);
            $("#dxpGridTab").attr("data-selectedRoleId", role);
            $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
        }

//        

    }, 2000);

    setTimeout(function () {
        getAIContentBasedOnQuery(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag,
                aiSearchString, aiRecordNo, aiReqNo, aiInstance, aiPlant, aiCompany, aiPorg, aiSorg, aiDC, aiDivision, aiERPNo)
    }, 3500);
}

function getAILensdownloadTemplate(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, gridId) {
    downloadTemplate(gridId);
    setTimeout(function () {
        getAIContentBasedOnQuery(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag);
    }, 1000);
}
async function getAILensMassProcessesData(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, url, gridId, batchId, tableName, title) {
    return new Promise((resolve, reject) => {
        try {
            $('#' + gridId).jqxGrid('selectrow', 0);
            var data = $('#' + gridId).jqxGrid('getrowdata', 0);
            var selectedRowsData = [];
            if (data != null) {
                sessionStorage.removeItem("gridData")
                selectedRowsData.push(data);
                sessionStorage.setItem("gridData", JSON.stringify(data));
            } else {
                var data = sessionStorage.getItem("gridData");
                data = JSON.parse(data);
                selectedRowsData.push(data);
            }
            var agentNo = sessionStorage.getItem("AgentNo");
            var agentFlag = sessionStorage.getItem("AgentFlag");
            const AiMessage = (message) => {
                const AiData = `<div class='aiLensRobotDataClass' id='${"AI" + title}'><label><span><b>${agentNo}</b></span><span>${message}</span></label></div>`;
                defaultAgentAiTypingBasedOnResponse(AiData, '', "", "");
            };
            var viewname = "";
            if (title != null && title != undefined && title != "" && title == 'Validations') {
                viewname = 'Quality Check';
            } else {
                viewname = title;
            }
            agentFlag != null && agentFlag != "" ? AiMessage("has initiated Data " + viewname + " process.") : ""

//        var logData = "<div class='aiLensResultDataClass'>"
//                + "<p class='queryanswerTitle'>Data " + title + " process initiated</p>"
//                + "</div>"
//        defaultAITypingBasedOnResponse(logData, '', "", "");
            showaiLoader();
//        showLoader();
            $.ajax({
                type: "post",
                url: url,
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
                    stopLoader();
                    stopaiLoader();
                    var responseData = "";
                    if (response != null && response != undefined && response != "") {
                        try {
                            var responseObj = JSON.parse(response);
                        } catch (e) {

                        }
                        if (responseObj !== null && !jQuery.isEmptyObject(responseObj)) {
                            var flag = responseObj['flag'];
                            var recordNoList = responseObj['recordNoList'];
                            localStorage.setItem("recordNoList", recordNoList);
                            var resultMessage = responseObj['resultMessage'];
                            responseData = resultMessage;
                        } else {
                            if (response.trim().includes(",")) {
                                var dataArray = response.split(',');
                                var modifiedLines = dataArray.map(function (line) {
                                    return line.trim().replace(/^\d+\s*:\s*/, ''); // Removes leading spaces and digits with colon
                                });
                                var resultList = "<ul>";
                                modifiedLines.forEach(item => {
                                    resultList += "<li>" + item + "</li>"
                                });
                                responseData = resultList += "</ul>"
                                responseData = responseData.replaceAll("Validation", "Quality Check");

                            } else {
                                responseData = response;
                                responseData = responseData.replaceAll("Validation", "Quality Check");
                            }
                        }
                        var viewname = "";
                        if (title != null && title != undefined && title != "" && title == 'Validations') {
                            viewname = 'Quality Check';
                        } else {
                            viewname = title;
                        }
                        var dataViewonclick1 = "getAIContentBasedOnQueryPopUp('Data " + title + " process completed Processed Data','View Details', '" + aiQueryType + "','H','N','" + batchId + "')";
                        var dataViewonclick2 = "getAIContentBasedOnQueryPopUp('Data " + title + " process completed Failed Data','View Details','" + aiQueryType + "','H','N','" + batchId + "')";
//                    var logData = "<div class='aiLensResultDataClass' style='width:348px;height:200px; overflow:auto'>"
                        var logData = "<div class='aiLensResultDataClass'>"
                                + "<p class='queryanswerTitle'>Data " + viewname + " process completed</p>";
                        logData = logData + "<div>" + responseData + "</div>"
                                + "<div><a href='#' class='connectionExplorerBreadCrumb' onclick=\"" + dataViewonclick1 + "\">View " + viewname + " Processed Records</a></div>"
                                + "<div><a href='#' class='connectionExplorerBreadCrumb' onclick=\"" + dataViewonclick2 + "\">View " + viewname + " Failed Records</a></div>"
                        if (recordNoList != null && recordNoList != undefined && recordNoList != "") {
                            logData = logData + "<div>Record No(s): " + recordNoList + "</div>";
                        }
                        logData = logData + "</div>";
                        defaultAITypingBasedOnResponse(logData, '', "", "");


                        $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                        if (aiQueryType != null && aiQueryType != "" && aiQueryType.indexOf("MOCR") > -1) {
                            fetchTabData(gridId);
                        }
                        resolve("Task completed successfully!");

                    } else {
                        stopLoader();
                        stopaiLoader();
                        var logData = "<div class='aiLensResultDataClass'>"
                                + "<p class='queryanswerTitle'>Unable to process Data " + viewname + "</p>"
                                + "</div>"
                        defaultAITypingBasedOnResponse(logData, '', "", "");
                    }




                }, error: function (e) {
//                    sessionTimeout(e);
                    stopLoader();
                    stopaiLoader();
                }
            });

        } catch (e) {

        }
    });
}

function getAILensDHAProfilingReport(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, gridId, batchId, url, title, columns, tableName, popupheight, popupwidth, titleMessage) {
    let onclick;
    try {
        var dialogwidth = '300';
        var dialogheight = '120';
        var tmessage = titleMessage != null ? titleMessage : "Report";
        if (popupwidth != null && popupwidth != "" && popupwidth != 'undefined')
        {
            dialogwidth = popupwidth;
        }
        if (popupheight != null && popupheight != "" && popupheight != 'undefined')
        {
            dialogheight = popupheight;
        }



        if (gridId != null && gridId != '' && gridId != undefined && batchId != null && batchId != '' && batchId != undefined
                && url != null && url != '' && url != undefined) {
            url.includes("Profiling") ? (onclick = "downloadiFrameHtml('dataProfileFormframe')") : (onclick = "getDownloadiFrameHtml('dataProfileFormframe')");
            var logData = "<div class='aiLensResultDataClass'>"
                    + "<div>Data " + title + " process initiated</div>"
                    + "</div>"
            defaultAITypingBasedOnResponse(logData, '', "", "");
            showaiLoader();
            showLoader();
            $.ajax({
                type: "post",
                url: url,
                cache: false,
                data: {
                    'gridId': gridId,
                    columnArray: columns,
                    batchId: batchId,
                    tableName: tableName
                },
                traditional: true,
                dataType: 'html',
                async: true,
                success: function (response) {
                    if (response != null && response != undefined && response != "") {
                        stopLoader();
                        stopaiLoader();
                        var logData = "<div class='aiLensResultDataClass'>"
                                + "<div>Data Profiling process completed, Please view the Report</div>"
                                + "</div>"
                        defaultAITypingBasedOnResponse(logData, '', "", "");
                        if (!url.includes("Profiling")) {
                            var response = JSON.parse(response);
                            const encodebase64String = response['base64PdfContent'] !== null ? response['base64PdfContent'] : "";
                            onclickEvent = "getDownloadiFrameHtml('" + encodebase64String + "')";

                        } else {
                            onclickEvent = "downloadiFrameHtml('dataProfileFormframe')";
                        }
                        var iconDiv = '<div class="viewButton" style = "text-align-last:end" onclick="' + onclick + '"><span class="viewIcon"><img src = "images/Download-Iocn.svg" width="18px"></span></div>';
                        $("#reasonmessagedialog5").html(iconDiv + '<iframe id="dataProfileFormframe" style="width:100%;height:580px;" srcdoc=""></iframe>');
                        var resultStr = response['resultStr'] ? response['resultStr'] : response;
                        resultStr.replace("https://pilogcloud.com/iVisionDXP/images/PilogCloudRedBlue.gif", "images/PilogCloudRedBlue.gif");
                        $("#dataProfileFormframe").attr("srcdoc", resultStr);
                        closeAINavigation();
                        $("#reasonmessagedialog5").dialog({resizable: false,
                            title: (labelObject[tmessage] != null ? labelObject[tmessage] : tmessage),
                            modal: true,
                            height: dialogheight,
                            minWidth: dialogwidth,
                            maxWidth: 'auto',
                            fluid: true,
                            buttons: [{
                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : "Ok"),
                                    click: function () {
                                        openAINavigation();
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
                                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                $(".visionHeaderMain").css("z-index", "999");
                                $(".visionFooterMain").css("z-index", "999");
                            },
                            beforeClose: function (event, ui)
                            {
                                openAINavigation();
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
                        stopLoader();
                        stopaiLoader();
                        var logData = "<div class='aiLensResultDataClass'>"
                                + "<div>Unable to process Data Profiling</div>"
                                + "</div>"
                        defaultAITypingBasedOnResponse(logData, '', "", "");
                    }
                }, error: function (e) {
//                    sessionTimeout(e);
                    stopLoader();
                    stopaiLoader();
                }
            });
        }
    } catch (e) {

    }
}

async function getAILensAutoHarmonize(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, gridId, batchId, url, paramArray) {

    var progressObjects = [];
    function createProgressBar(targetId, duration) {
        var el = document.getElementById(targetId);
        if (!el)
            return null;
        var old = el.parentNode.querySelector(".aiProgressBarContainer");
        if (old)
            old.remove();
        var container = document.createElement("div");
        container.className = "aiProgressBarContainer";
        container.style.cssText = "display:block;width:100%;margin:6px 0;padding-left:40px;";
        container.innerHTML =
                "<div style='width:90%;background:#e0e0e0;border-radius:4px;height:20px;overflow:hidden;position:relative;'>" +
                "<div class='aiProgressBarFill' style='width:0%;height:100%;background:linear-gradient(90deg,#007bff,#0056b3);transition:width .2s ease;'></div>" +
                "<div style='position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:#000'>" +
                "<span class='aiProgressBarText' style='color:#000'>0%</span></div></div>";
        el.parentNode.insertBefore(container, el.nextSibling);
        return {
            container: container,
            bar: container.querySelector(".aiProgressBarFill"),
            text: container.querySelector(".aiProgressBarText"),
            duration: duration || 2000,
            start: Date.now(),
            interval: null,
            done: false
        };
    }

    function startProgress(obj) {
        if (!obj)
            return;
        obj.start = Date.now();
        obj.done = false;
        obj.interval = setInterval(function () {

            if (aiLensController.stopped) {
                clearInterval(obj.interval);
                return;
            }

            if (aiLensController.paused) {
                return;
            }

            var elapsed = Date.now() - obj.start;
            var percent = (elapsed / obj.duration) * 100;
            percent = Math.min(percent, 93);
            obj.bar.style.width = percent + "%";
            obj.text.textContent = Math.floor(percent) + "%";
        }, 200);
    }


    function completeProgress(obj) {
        if (!obj || obj.done)
            return;
        obj.done = true;
        clearInterval(obj.interval);
        obj.bar.style.transition = "width 0.4s ease-out";
        obj.bar.style.width = "100%";
        obj.bar.style.background = "linear-gradient(90deg,#28a745,#1e7e34)";
        obj.text.style.color = "#000";
        obj.text.textContent = "100%";
//        setTimeout(function () {
//            if (obj.container && obj.container.parentNode)
//                obj.container.parentNode.removeChild(obj.container);
//            removeOldControls(true);
//        }, 500);
    }


    var aiLensController = {
        paused: false,
        stopped: false,
        resumeResolver: null,
        xhrList: []
    };
    function updateAllButtons() {
        var buttons = document.querySelectorAll(".aiToggleButton");
        for (var i = 0; i < buttons.length; i++) {
            var btn = buttons[i];
            if (aiLensController.stopped) {
                btn.disabled = true;
                btn.style.opacity = "0.5";
            } else {
                btn.disabled = false;
                btn.innerHTML = aiLensController.paused ? "▶ Resume" : "⏸ Pause";
                btn.style.background = aiLensController.paused ? "#28a745" : "#007bff";
                btn.style.color = "#fff";
            }
        }
        var stopButtons = document.querySelectorAll(".aiStopButton");
        for (var j = 0; j < stopButtons.length; j++) {
            stopButtons[j].disabled = aiLensController.stopped;
            stopButtons[j].style.opacity = aiLensController.stopped ? "0.4" : "1";
        }
    }

//    function removeOldControls() {
//        var controls = document.querySelectorAll(".aiControlsInjected");
//        if (controls.length > 1) {
//            for (var i = 0; i < controls.length - 1; i++) {
//                controls[i].remove();
//            }
//        }
//    }

    function removeOldControls(allButtonsRemove) {
        var controls = document.querySelectorAll(".aiControlsInjected");
        var total = controls.length;

        if (!total)
            return;

        if (allButtonsRemove === true) {
            controls.forEach(function (el) {
                el.remove();
            });
        } else {
            for (var i = 0; i < total - 1; i++) {
                controls[i].remove();
            }
        }
    }


    function togglePauseResume() {
        if (aiLensController.stopped)
            return;
        aiLensController.paused = !aiLensController.paused;
        if (!aiLensController.paused) {
            try {

                showaiLoader();
            } catch (e) {
            }
            var logResume = "<div class='aiLensResultDataClass' style='background:#0b4a99;color: white;border-radius: 12px;margin: 8px;padding: 10px;line-height=1.5'>"
                    + "<h5>Process Resumed</h5>"
                    + "<div>The AI Agent has resumed processing.</div>"
                    + "<div>Please wait while the operation continues...</div>"
                    + "</div>";
            defaultAgentAiTypingBasedOnResponse(logResume);
            if (aiLensController.resumeResolver) {
                aiLensController.resumeResolver();
                aiLensController.resumeResolver = null;
            }

        } else {
            try {
                stopaiLoader();
            } catch (e) {
            }

            var logPause = "<div class='aiLensResultDataClass' style='background: #0b4a99;color: white;border-radius: 12px;margin: 8px;padding: 10px;'>"
                    + "<h5>Process Paused</h5>"
                    + "<div>The AI Agent has paused the current operation.</div>"
                    + "<div>Please click <b>Resume Button</b> to continue.</div>"
                    + "</div>";
            defaultAgentAiTypingBasedOnResponse(logPause);
        }

        updateAllButtons();
    }

    function stopAILens() {
        if (aiLensController.stopped)
            return;
        aiLensController.stopped = true;
        for (var i = 0; i < aiLensController.xhrList.length; i++) {
            var xhr = aiLensController.xhrList[i];
            if (xhr && xhr.abort)
                xhr.abort();
        }
        aiLensController.xhrList = [];
        if (aiLensController.resumeResolver) {
            aiLensController.resumeResolver();
            aiLensController.resumeResolver = null;
        }
        try {
            stopLoader();
        } catch (e) {
        }
        try {
            stopaiLoader();
        } catch (e) {
        }
        updateAllButtons();
        var logStop = "<div class='aiLensResultDataClass' style='background: #0b4a99;color: white;border-radius: 12px;margin: 8px;padding: 10px;'>"
                + "<h5>Process Stopped</h5>"
                + "<div>The AI Agent has stopped the current operation.</div>"
                + "<div>No further processing will continue.</div>"
                + "</div>";
        defaultAgentAiTypingBasedOnResponse(logStop);
    }

    function waitForResume() {
        return new Promise(function (resolve) {
            aiLensController.resumeResolver = resolve;
        });
    }

    async function checkPauseStop() {
        if (aiLensController.stopped)
            throw new Error("STOPPED");
        if (aiLensController.paused)
            await waitForResume();
        if (aiLensController.stopped)
            throw new Error("STOPPED");
    }

    var rowCount = 10;
    try {
        var rowCountVal = $("#rowCount_" + batchId).val();
        if (rowCountVal)
            rowCount = parseInt(rowCountVal) || 10;
    } catch (e) {
        rowCount = 10;
    }

    function injectControls(targetId) {
        var el = document.getElementById(targetId);
        if (!el)
            return;
        var existing = el.parentNode.querySelector(".aiControlsInjected");
        if (existing)
            existing.parentNode.removeChild(existing);
        var ctrl = document.createElement("div");
        ctrl.className = "aiControlsInjected";
        ctrl.style.cssText = "display:block; width:100%; margin:10px 0 15px 0; padding-left:40px; text-align:left;";
        var isPaused = aiLensController.paused;
        var isStopped = aiLensController.stopped;
        var toggleText = isPaused ? "▶ Resume" : "⏸ Pause";
        var toggleBg = isPaused ? "#28a745" : "#007bff";
        var toggleOpacity = isStopped ? "0.5" : "1";
        var stopOpacity = isStopped ? "0.4" : "1";
        var disabledAttr = isStopped ? "disabled" : "";
        ctrl.innerHTML =
                "<button class='aiToggleButton' style='padding:6px 12px; cursor:pointer; border:1px solid #007bff; border-radius:0.5rem;" +
                "background:" + toggleBg + "; color:#fff; margin-right:8px; font-weight:600; opacity:" + toggleOpacity + ";' " + disabledAttr + ">" +
                toggleText +
                "</button>" +
                "<button class='aiStopButton' style='padding:6px 12px; cursor:pointer; border:1px solid #dc3545; border-radius:0.5rem;" +
                "background:#dc3545; color:#fff; font-weight:600; opacity:" + stopOpacity + ";' " + disabledAttr + ">" +
                "⏹ Stop" +
                "</button>";
        ctrl.querySelector(".aiToggleButton").onclick = togglePauseResume;
        ctrl.querySelector(".aiStopButton").onclick = stopAILens;
        el.parentNode.insertBefore(ctrl, el.nextSibling);
        try {
            if (el.getAttribute("data-progress-added") !== "true") {
                el.setAttribute("data-progress-added", "true");
                var duration = 2000;
                if (targetId === "classAllocationAiId")
                    duration = rowCount * 400;
                if (targetId === "dataExtractionAiId")
                    duration = rowCount * 5000;
                if (targetId === "charRefDocUpdateAiId")
                    duration = rowCount * 100;
                var barObj = createProgressBar(targetId, duration);
                if (barObj) {
                    progressObjects.push(barObj);
                    startProgress(barObj);
                }
            }
        } catch (e) {
            console.warn("progress inject error", e);
        }
    }

    function trackedAjax(config) {
        var xhr = $.ajax(config);
        aiLensController.xhrList.push(xhr);
        return xhr;
    }

    var responseData = "";
    return new Promise(function (resolve, reject) {
        try {
            var paramObject = JSON.parse(paramArray);
            var classparamArray = JSON.stringify(paramObject['classparams']);
            var dataParamArray = JSON.stringify(paramObject['dataParams']);
            var updateParam = JSON.stringify(paramObject['updateParams']);
            var agentNo = sessionStorage.getItem("AgentNo");
            var agentFlag = sessionStorage.getItem("AgentFlag");
            var AiMessage = async function (message, id) {
                if (id) {
                    var old = document.getElementById(id);
                    if (old)
                        old.removeAttribute("id");
                }

                var AiData = "<div class='aiLensRobotDataClass' id='" + (id || "") + "'>" +
                        "<label><span><b>" + agentNo + "</b></span><span>" + message + "</span></label>" +
                        "</div>";
                await defaultAgentAiTypingBasedOnResponse(AiData, '', "", "");
                if (id) {
                    setTimeout(function () {
                        injectControls(id);
//                        removeOldControls();
                    }, 600);
                }
            };
            if (classparamArray != null && classparamArray != '' && classparamArray != undefined &&
                    dataParamArray != null && dataParamArray != '' && dataParamArray != undefined) {
                var agentCode = sessionStorage.getItem("agentCode");
//                if (agentCode != null && agentCode != undefined && agentCode != '' && agentCode == 'MOCR') {
//                    setTimeout(async function () {
//                        var logData = "<div class='aiLensResultDataClass'>"
//                                + "<div>Data Enrichment process initiated</div>"
//                                + "</div>";
//
//                        if (agentFlag != null && agentFlag !== "") {
//                            await AiMessage("Data Enrichment process has been initiated.");
//                        } else {
//                            defaultAITypingBasedOnResponse(logData, '', "", "");
//                        }
//                    }, 10000);
//
//                } else {
                var logData = "<div class='aiLensResultDataClass'><div>Data Enrichment process initiated</div></div>";
                if (agentFlag != null && agentFlag != "") {
                    AiMessage("has initiated Data Enrichment process.");
                } else {
                    defaultAITypingBasedOnResponse(logData, '', "", "");
                }
//                }
                checkPauseStop().then(function () {
//                    if (agentCode != null && agentCode != undefined && agentCode != '' && agentCode == 'MOCR') {
//                        setTimeout(async function () {
//                            var logData = "<div class='aiLensResultDataClass'>"
//                                    + "<div>Class Allocation process initiated</div>"
//                                    + "</div>";
//
//                            if (agentFlag != null && agentFlag !== "") {
//                                await AiMessage(
//                                        "Class Allocation process has been initiated.",
//                                        "classAllocationAiId"
//                                        );
//                            } else {
//                                defaultAITypingBasedOnResponse(logData, '', "", "");
//                            }
//                        }, 15000);
//
//                    } else {
                    var logData2 = "<div class='aiLensResultDataClass'><div>Class Allocation process initiated</div></div>";
                    if (agentFlag != null && agentFlag != "") {
                        AiMessage("has initiated Class Allocation process.", "classAllocationAiId");
                    } else {
                        defaultAITypingBasedOnResponse(logData2, '', "", "");
                    }
//                    }
                    checkPauseStop().then(function ()
                    {
                        setTimeout(function () {
                            showaiLoader();
                            trackedAjax({
                                type: "post",
                                url: url,
                                cache: false,
                                data: {paramArray: classparamArray, batchId: batchId},
                                traditional: true,
                                dataType: 'html',
                                async: true,
                                success: function (response) {

                                    checkPauseStop().then(function () {
                                        stopLoader();
                                        stopaiLoader();
                                        if (progressObjects.length)
                                            completeProgress(progressObjects.pop());
                                        removeOldControls(true);
                                        if (response != null && response != undefined && response != "") {
                                            var el = document.getElementById("classAllocationAiId");
                                            if (el)
                                                el.className += " aiAgentAnimationRemoveClass";
                                            if (response.indexOf('Exception::') === 0) {
                                                var logDataErr = "<div class='aiLensResultDataClass'><div>Unable to process Data for Class Allocation</div><div>" + response + "</div></div>";
                                                defaultAITypingBasedOnResponse(logDataErr, '', "", "");
                                            } else {
                                                if (response.trim().indexOf(",") > -1) {
                                                    var dataArray = response.split(',');
                                                    var modifiedLines = [];
                                                    for (var k = 0; k < dataArray.length; k++) {
                                                        modifiedLines.push(dataArray[k].trim().replace(/^\d+\s*:\s*/, ''));
                                                    }
                                                    var resultList = "<ul>";
                                                    for (var m = 0; m < modifiedLines.length; m++) {
                                                        resultList += "<li>" + modifiedLines[m] + "</li>";
                                                    }
                                                    responseData = resultList + "</ul>";
                                                } else {
                                                    responseData = response;
                                                }

                                                var classonclick = "getAIContentBasedOnQueryPopUp('Class Allocation process completed','View Details','" + aiQueryType + "','H','N','" + batchId + "')";
                                                var logDataDone = "<div class='aiLensResultDataClass' style='width:348px;'>" +
                                                        "<h5>Class Allocation process completed:</h5>" +
                                                        "<div>" + responseData + "</div>" +
                                                        "<a href='#' class='connectionExplorerBreadCrumb' onclick=\"" + classonclick + "\">View Data</a>" +
                                                        "</div>";
                                                defaultAITypingBasedOnResponse(logDataDone, '', "", "");
                                                if (gridId != null && gridId != undefined && gridId != '') {
                                                    $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                                                    if (aiQueryType != null && aiQueryType != "" && aiQueryType.indexOf("MOCR") > -1) {
                                                        fetchTabData(gridId);
                                                    }
                                                }

                                                checkPauseStop().then(function () {
                                                    var logData3 = "<div class='aiLensResultDataClass'><div>Associated Data Extraction process initiated.</div></div>";
                                                    if (agentFlag != null && agentFlag != "") {
                                                        AiMessage("has initiated Associated Data Extraction process.", "dataExtractionAiId");
                                                    } else {
                                                        defaultAITypingBasedOnResponse(logData3, '', "", "");
                                                    }


                                                    checkPauseStop().then(function () {
                                                        setTimeout(function () {
                                                            showaiLoader();
                                                            trackedAjax({
                                                                type: "post",
                                                                url: url,
                                                                cache: false,
                                                                data: {paramArray: dataParamArray, batchId: batchId},
                                                                traditional: true,
                                                                dataType: 'html',
                                                                async: true,
                                                                success: function (response) {

                                                                    checkPauseStop().then(function () {
                                                                        stopLoader();
                                                                        stopaiLoader();
                                                                        if (progressObjects.length)
                                                                            completeProgress(progressObjects.pop());
                                                                        removeOldControls(true);
                                                                        if (response != null && response != undefined && response != "") {
                                                                            var el = document.getElementById("dataExtractionAiId");
                                                                            if (el)
                                                                                el.className += " aiAgentAnimationRemoveClass";
                                                                            if (response.indexOf('Exception::') === 0) {
                                                                                var logDataErr2 = "<div class='aiLensResultDataClass'><div>Unable to process Data Extraction</div><div>" + response + "</div></div>";
                                                                                defaultAITypingBasedOnResponse(logDataErr2, '', "", "");
                                                                            } else {
                                                                                if (response.trim().indexOf(",") > -1) {
                                                                                    var dataArray = response.split(',');
                                                                                    var modifiedLines = [];
                                                                                    for (var k = 0; k < dataArray.length; k++) {
                                                                                        modifiedLines.push(dataArray[k].trim().replace(/^\d+\s*:\s*/, ''));
                                                                                    }
                                                                                    var resultList = "<ul>";
                                                                                    for (var m = 0; m < modifiedLines.length; m++) {
                                                                                        resultList += "<li>" + modifiedLines[m] + "</li>";
                                                                                    }
                                                                                    responseData = resultList + "</ul>";
                                                                                } else {
                                                                                    responseData = response;
                                                                                }

                                                                                var dataonclick = "getAIContentBasedOnQueryPopUp('Data Extraction process completed','View Details','" + aiQueryType + "','H','N','" + batchId + "')";
                                                                                var logDataDone2 = "<div class='aiLensResultDataClass' style='width:348px;'>" +
                                                                                        "<h5>Data Extraction process completed:</h5>" +
                                                                                        "<div>" + responseData + "</div>" +
                                                                                        "<a href='#' class='connectionExplorerBreadCrumb' onclick=\"" + dataonclick + "\">View Data</a>" +
                                                                                        "</div>";
                                                                                defaultAITypingBasedOnResponse(logDataDone2, '', "", "");
                                                                                // STEP 4: Update Process
                                                                                checkPauseStop().then(function () {
                                                                                    var logData4 = "<div class='aiLensResultDataClass'><div>Characteristics, Reference, Documentation Data Mapping and Update processes initiated</div></div>";
                                                                                    if (agentFlag != null && agentFlag != "") {
                                                                                        AiMessage("has initiated Characteristics, Reference, Documentation Data Mapping and Update process.", "charRefDocUpdateAiId");
                                                                                    } else {
                                                                                        defaultAITypingBasedOnResponse(logData4, '', "", "");
                                                                                    }


                                                                                    checkPauseStop().then(function () {
                                                                                        setTimeout(function () {
                                                                                            showaiLoader();
                                                                                            trackedAjax({
                                                                                                type: "post",
                                                                                                url: "aiInsertorUpdateDatabasedOnId",
                                                                                                cache: false,
                                                                                                data: {tabId: gridId, updateParamArray: updateParam, batchId: batchId},
                                                                                                traditional: true,
                                                                                                dataType: 'html',
                                                                                                async: true,
                                                                                                success: function (response) {
                                                                                                    checkPauseStop().then(function () {
                                                                                                        stopLoader();
                                                                                                        stopaiLoader();
                                                                                                        if (progressObjects.length)
                                                                                                            completeProgress(progressObjects.pop());
                                                                                                        removeOldControls(true);
//                                                                                        setTimeout(function () {
                                                                                                        if (response != null && response != undefined && response != "") {
                                                                                                            var el = document.getElementById("charRefDocUpdateAiId");
                                                                                                            if (el)
                                                                                                                el.className += " aiAgentAnimationRemoveClass";
                                                                                                            var responseObj = JSON.parse(response);
                                                                                                            var updateParamsdata = paramObject['updateParams'];
                                                                                                            var updateParamsKeys = updateParamsdata['updateIds'];
                                                                                                            var excludeParamsdata = updateParamsdata['excludeParams'];
                                                                                                            var updateParamArray = updateParamsKeys.split(',');
                                                                                                            for (var i = 0; i < updateParamArray.length; i++) {
                                                                                                                var updateParamkeydata = updateParamArray[i];
                                                                                                                if (updateParamkeydata != null && updateParamkeydata != undefined && updateParamkeydata != "" &&
                                                                                                                        !excludeParamsdata.includes(updateParamkeydata)) {
                                                                                                                    var responseDataStr = responseObj[updateParamkeydata];
                                                                                                                    if (responseDataStr != null && responseDataStr != undefined && responseDataStr != "" && responseDataStr != "0") {
                                                                                                                        if (responseDataStr.trim().indexOf(',') > -1) {
                                                                                                                            var dataArray = responseDataStr.split(',');
                                                                                                                            var modifiedLines = [];
                                                                                                                            for (var k = 0; k < dataArray.length; k++) {
                                                                                                                                modifiedLines.push(dataArray[k].trim().replace(/^\d+\s*:\s*/, ''));
                                                                                                                            }
                                                                                                                            var resultList = "<ul>";
                                                                                                                            for (var m = 0; m < modifiedLines.length; m++) {
                                                                                                                                resultList += "<li>" + modifiedLines[m] + "</li>";
                                                                                                                            }
                                                                                                                            responseData = resultList + "</ul>";
                                                                                                                        } else {
                                                                                                                            responseData = responseDataStr;
                                                                                                                        }

                                                                                                                        var refonclick = "getAIContentBasedOnQueryPopUp('Data Extraction process completed " + updateParamkeydata + "','View Details','" + aiQueryType + "','H','N','" + batchId + "')";
                                                                                                                        var logDataRefDone = "<div class='aiLensResultDataClass' style='width:348px;'>" +
                                                                                                                                "<h5>" + updateParamkeydata + " process completed:</h5>" +
                                                                                                                                "<a href='#' class='connectionExplorerBreadCrumb' onclick=\"" + refonclick + "\">View Data</a>" +
                                                                                                                                "</div>";
                                                                                                                        defaultAITypingBasedOnResponse(logDataRefDone, '', "", "");
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                            resolve("Task completed successfully!");
                                                                                                        } else {
                                                                                                            var logDataErr3 = "<div class='aiLensResultDataClass'><div>Unable to process Data Mappings and Updates</div></div>";
                                                                                                            defaultAITypingBasedOnResponse(logDataErr3, '', "", "");
                                                                                                            reject("Task completed unsuccessfully!");
                                                                                                        }
                                                                                                    }).catch(function (e) {
                                                                                                        if (e.message === "STOPPED")
                                                                                                            resolve("Stopped by user");
                                                                                                        else
                                                                                                            reject(e);
                                                                                                    });
                                                                                                },
                                                                                                error: function () {
                                                                                                    stopLoader();
                                                                                                    stopaiLoader();
                                                                                                    if (aiLensController.stopped) {
                                                                                                        resolve("Stopped by user");
                                                                                                    } else {
                                                                                                        reject("Error during update step");
                                                                                                    }
                                                                                                }
                                                                                            });
                                                                                        }, 4000);
                                                                                    }).catch(function (e) {
                                                                                        if (e.message === "STOPPED")
                                                                                            resolve("Stopped by user");
                                                                                        else
                                                                                            reject(e);
                                                                                    });
                                                                                }).catch(function (e) {
                                                                                    if (e.message === "STOPPED")
                                                                                        resolve("Stopped by user");
                                                                                    else
                                                                                        reject(e);
                                                                                });
                                                                            }
                                                                        } else {
                                                                            var logDataErr4 = "<div class='aiLensResultDataClass'><div>Unable to process Data Extraction</div></div>";
                                                                            defaultAITypingBasedOnResponse(logDataErr4, '', "", "");
                                                                            reject("Task completed unsuccessfully!");
                                                                        }

                                                                    }).catch(function (e) {
                                                                        if (e.message === "STOPPED")
                                                                            resolve("Stopped by user");
                                                                        else
                                                                            reject(e);
                                                                    });
                                                                },
                                                                error: function () {
                                                                    stopLoader();
                                                                    stopaiLoader();
                                                                    if (aiLensController.stopped)
                                                                        resolve("Stopped by user");
                                                                    else
                                                                        reject("Error during data extraction AJAX");
                                                                }
                                                            });
                                                        }).catch(function (e) {
                                                            if (e.message === "STOPPED")
                                                                resolve("Stopped by user");
                                                            else
                                                                reject(e);
                                                        });
                                                    }, 3000);
                                                }).catch(function (e) {
                                                    if (e.message === "STOPPED")
                                                        resolve("Stopped by user");
                                                    else
                                                        reject(e);
                                                });
                                            }
                                        }
                                    }).catch(function (e) {
                                        if (e.message === "STOPPED")
                                            resolve("Stopped by user");
                                        else
                                            reject(e);
                                    });
                                },
                                error: function () {
                                    stopLoader();
                                    stopaiLoader();
                                    if (aiLensController.stopped)
                                        resolve("Stopped by user");
                                    else
                                        reject("Error during class allocation AJAX");
                                }
                            });
                        }, 3000);
                    }).catch(function (e) {

                        if (e.message === "STOPPED")
                            resolve("Stopped by user");
                        else
                            reject(e);
                    });
                }).catch(function (e) {
                    if (e.message === "STOPPED")
                        resolve("Stopped by user");
                    else
                        reject(e);
                });
            } else {
                reject("Invalid parameters provided");
            }
        } catch (e) {
            stopLoader();
            stopaiLoader();
            if (e && e.message === "STOPPED") {
                resolve("Stopped by user");
            } else {
                reject(e);
            }
        }
    });
}

function getAILenspopulateFileBrowserColMapping(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, processName) {

    $("#aiTypedValue").val('');

    var params = {};
    params['gridId'] = gridId;

    if (settimeout != null && settimeout != '' && settimeout != 'undefined' && settimeout != undefined) {

    } else {
        settimeout = '10000';
    }
    $("#messagedialog4").html("");
    var inputfiledivId = "<div id='inputfiledivId" + browseId + "'><input name='importFile' id='" + browseId + "' type='file' style='display:none'></div>";
    $("#messagedialog4").html(inputfiledivId);
    $("#" + browseId).ajaxfileupload({

        'action': 'importFileAjaxColMapping',
//        headers: {"X-CSRF-TOKEN": $("input[name='_csrf']").val()},
//        'action': 'importFile?gridId=' + gridId + '&tableName=' + tableName,
        params: params,
//        'action': 'importFile?gridId=' + gridId,
        async: true,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
        },
        onStart: function () {
            $("#Loader").css("opacity", "0.99");
            $("#Loader").css("display", "block");
            $("body").css("pointer-events", "none");
            startAjax();
//            showLoader();//30
        },
        'onComplete': function (result) {
//            stopLoader();//30
            $("#Loader").css("display", "none");
            $("body").css("pointer-events", "auto");
            endAjax();
            //var columnDefinitions = $('#' + gridId).jqxGrid('getInstance').columns.records;

            var resultObject = result['message'];

            //var resultObject = JSON.parse(resultStr);
            var fileHeaders = resultObject['headersArray']
            var filePath = resultObject['filePath']
            var gridTable = resultObject['gridTable']
            var columnLabels = resultObject['columnLabels']
            var datafields = resultObject['datafields']

            var htmlDiv = "<div id='importFileColumnsMapppingOptionsDiv' >"
                    + "<img id='importFileColumnsMapppingInfo' onclick='importColumnMappingAssistant()' src='images/Information_icon_Blue.svg' style='float:right;width:20px;' />"
                    + "</div>"
                    + "<div id='importFileColumnMappingId' class='importFileColumnMappingMain' ></div>";

            var mappedGridColumnsArray = [];
            var mappedGridLabelssArray = [];

            var mappedFileHeadersArray = [];
            var columnMappingObj = {};
//             $("#messagedialog4").html("");
            $("#messagedialog5").html(htmlDiv);
            $("#messagedialog5").addClass("ai-panel-flowchart");
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

                            showLoader();
                            $.ajax({
                                type: "post",
                                traditional: true,
                                dataType: 'html',
                                url: 'importExcelColMapping',
                                cache: false,
                                data: {
                                    tableName: gridTable,
                                    filePath: filePath,
                                    gridId: gridId,
                                    mappedFileHeadersArray: JSON.stringify(mappedFileHeadersArray),
                                    mappedGridColumnsArray: JSON.stringify(mappedGridColumnsArray),
                                    fileHeaders: JSON.stringify(fileHeaders),
                                    columnMappingObjStr: JSON.stringify(columnMappingObj)
                                },
                                success: function (result) {
                                    stopLoader();
                                    var responseObj = JSON.parse(result);
                                    var dialogSplitMessage = responseObj['finalresult'];
                                    var batchNumber = responseObj['batchNumber'];
                                    $("#batchID").val(batchNumber);
                                    var finalresult = responseObj['finalresult'];
                                    var flag = responseObj['flag'];
                                    var rowCount = responseObj['rowCount'];
                                    var rowCountId = "rowCount_" + batchNumber;
                                    if (!$("#" + rowCountId).length)
                                        $("body").append("<input type='hidden' id='" + rowCountId + "'>");
                                    $("#" + rowCountId).val("").val(rowCount);

                                    if (flag) {
                                        var domainString = 'Asset(s).';
                                        if (domain != null && domain != undefined && domain != "" && domain == 'ASSET') {
                                            var filename = resultObject['fileName'];
                                            if (filename != null && filename != undefined && filename != "" &&
                                                    (filename.indexOf("FLOC") > -1 || filename.indexOf("Floc") > -1 || filename.indexOf("floc") > -1)) {
                                                domainString = 'Function Location(s)';
                                            }

                                        } else if (domain != null && domain != undefined && domain != "" && domain == 'PRODUCT') {
                                            domainString = " Material(s).";
                                        }
//                                        var logData = "<div class='aiLensResultDataClass' style='width:348px;'>"
                                        var logData = "<div class='aiLensResultDataClass' >"
                                                + "<p class='queryanswerTitle'>" + aiQueryAns + ", In Uploaded Document we found <b>" + rowCount + " " + domainString + ".</b></p>"
//                                                + "<p class='queryanswerTitle'>" + aiQueryAns + ", In Uploaded Document we found <b>" + responseObj['PRODUCT'] + " Materials </b> and <b>" + responseObj['ASSET'] + " Assets.</b></p>"
//            + "<div>" + dialogSplitMessage + "</div>"
                                                + "<table class='table table-bordered'>"
                                                + "<tbody>"
                                                + "<tr><td><b>Batch No </b></td><td>" + batchNumber + "</td></tr>"
                                                + "<tr><td><b>Imported Rows </b></td><td>" + rowCount + "</td></tr>"
//                                                + "<tr><td><b>Material Rows </b></td><td>" + responseObj['PRODUCT'] + "</td></tr>"
//                                                + "<tr><td><b>Asset Rows </b></td><td>" + rowCount + "</td></tr>"
                                                + "</tbody>"
                                                + "</table>"
                                                + "</div>"

                                        defaultAITypingBasedOnResponse(logData, '', "", "");
                                        var paramArray = [];
                                        var paramObj = {};
                                        paramObj.column = 'BATCH_ID';
                                        paramObj.value = batchNumber;
                                        paramObj.operator = 'EQUALS';
//                                        paramObj.symbol = '=';
                                        paramObj.selectNum = 1;
                                        paramArray.push(paramObj);
//                                        $("#" + componentId + "_filter_columns").remove();
//                                        $("#" + componentId).append("<input type='hidden' id='" + gridId + "_filter_columns' value=''/>");
//                                        $("#" + componentId + "_filter_columns").val(JSON.stringify(paramArray));
//                                        closeAINavigation();
                                        setTimeout(function () {
                                            try {
                                                if (componentType != null && componentType != '' && componentType != 'undefined' && componentType != undefined) {

                                                    if (componentType == 'CLUSTER') {
                                                        getcluster(clusterId, role, domain, 'N', paramArray);
//                                                    $("#" + gridId + "_filter_columns").remove();
//                                                    $("#" + gridId).append("<input type='hidden' id='" + selectedGridId + "_filter_columns' value=''/>");
//                                                    $("#" + gridId + "_filter_columns").val(JSON.stringify(paramArray));
//                                                    if (gridId != null && gridId != undefined && gridId != '') {
//                                                        $("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                                                    }
                                                    } else if (componentType == 'NESTEDGRID') {
                                                        $("#dxpGridContent").html("");
                                                        getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'Y');
                                                        try {
                                                            showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', "View Data", 'N');
                                                        } catch (e) {

                                                        }
                                                        $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
                                                        $("#dxpGridTab").attr("data-selectedgridId", gridId);
                                                        $("#dxpGridTab").attr("data-selectedRoleId", role);
                                                        $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
                                                    } else if (componentType == 'GRID') {
                                                        $("#dxpGridContent").html("");
                                                        getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'N');
                                                        try {
                                                            showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', "View Data", 'N');
                                                        } catch (e) {

                                                        }
                                                        $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
                                                        $("#dxpGridTab").attr("data-selectedgridId", gridId);
                                                        $("#dxpGridTab").attr("data-selectedRoleId", role);
                                                        $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
                                                    }

                                                } else {
                                                    $("#dxpGridContent").html("");
                                                    getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'N');
                                                    try {
                                                        showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', "View Data", 'N');
                                                    } catch (e) {

                                                    }
                                                    $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
                                                    $("#dxpGridTab").attr("data-selectedgridId", gridId);
                                                    $("#dxpGridTab").attr("data-selectedRoleId", role);
                                                    $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
                                                }
                                            } catch (e) {
                                            }
                                        }, 2000);

                                        setTimeout(function () {
                                            openAINavigation();
                                            getAIContentBasedOnQuery(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, batchNumber, '', '', '', '', '', '', '', '', '', '', processName);
                                        }, settimeout);
                                    } else {
//                                        var logData = "<div class='aiLensResultDataClass' style='width:348px;'>"
                                        var logData = "<div class='aiLensResultDataClass' >"
                                                + "<h5>Imported Data</h5>"
                                                + "<div>" + dialogSplitMessage + "</div>"
                                                + "</div>"
                                        defaultAITypingBasedOnResponse(logData, '', "", "");
                                    }
                                },
                                error: function (e) {
                                    console.log(e);
                                    sessionTimeout(e);
                                    stopLoader();
                                }
                            })

                            $(this).html("");
                            $(this).dialog("close");

                        }
                    }],
                open: function () {

                    // var columnDefinitions = $('#' + gridId).jqxGrid('getInstance').columns.records;

                    var columnNameInputs = {};
                    var columnNameArray = [];
                    var inputCount = 0;
                    $.each(columnLabels, function (i) {

                        var columname = columnLabels[i];
                        var datafield = datafields[i];
                        if (columname != null && columname != "" && columname.indexOf("_HIDDEN")) {
                            //gridColumns.push(columname);

                            var input = {};
                            input['label'] = columname;
                            input['value'] = datafield;
                            columnNameInputs['input_' + inputCount] = input;
                            inputCount++;
                            columnNameArray.push(columname);
                        }
                    });

                    var resultObject = result['message'];
                    var fileHeaders = resultObject['headersArray']
                    var filePath = resultObject['filePath']
                    var fileName = resultObject['fileName']

                    var headersCount = resultObject['headersCount']
                    var fileRowCount = resultObject['fileRowCount']

                    var fileTitle = "<div>File Name : " + fileName + "<br>"
                            + "Columns Count : " + headersCount + "<br>"
                            + "Rows Count : " + fileRowCount + "</div>"
//                            + "<div>"
//                            + "<img  id='fileAnalyticsId'  src='images/Data-Analytics-icon.svg' style='width:20px;height:20px;float:right;' >"
//                            + "<img  id='fileDataTypesValidationId' src='images/validation.png' style='width:20px;height:20px;float:right;' >"
//                            + "</div>"
                            ;


//                    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                    var tableTitle = "<div>Staging Table <br>"
                            + "Columns Count : " + columnNameArray.length + "<br>"
                            + "Rows Count : " + fileRowCount + "</div>";


                    var fileHeaderObject = {};
                    $.each(fileHeaders, function (i) {
                        var header = fileHeaders[i];
                        fileHeaderObject[header] = header;
                    })
                    if (fileHeaders.length > Object.keys(fileHeaderObject).length) {
                        showMesg("Duplicate file headers found. Please change to proceed");
                        $(this).html("");
                        $(this).dialog("close");
                        throw new Error("Duplecate file headers found");
                    }

                    var linksData = {};
                    var fileHeaderOutputs = {};
                    var linkId = 0;
                    var maxHeaderLength = 0;
                    var matchedColumns = [];
                    $.each(fileHeaders, function (i) {
                        var output = {};
                        output['label'] = fileHeaders[i];
                        if (columnNameArray.indexOf(fileHeaders[i]) > -1) {
                            var linkdata = {};
                            linkdata['fromConnector'] = "output_" + i;
                            linkdata['fromOperator'] = "operator1";
                            linkdata['fromSubConnector'] = 0;
                            linkdata['toConnector'] = "input_" + (columnNameArray.indexOf(fileHeaders[i]));
                            linkdata['toOperator'] = "operator2";
                            linkdata['toSubConnector'] = 0;
                            linksData[linkId] = linkdata;
                            linkId++;
                            matchedColumns.push(fileHeaders[i]);
                        }

                        maxHeaderLength = fileHeaders[i].length > maxHeaderLength ? fileHeaders[i].length : maxHeaderLength;

                        fileHeaderOutputs['output_' + i] = output;
                    })

                    var data = {
                        operators: {
                            operator1: {
                                top: 20,
                                left: 20,
                                properties: {
                                    title: fileTitle,
                                    inputs: {},
                                    outputs: fileHeaderOutputs,
                                }
                            },
                            operator2: {
                                top: 20,
                                left: 500,
                                properties: {
                                    title: tableTitle,
                                    inputs: columnNameInputs,
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


                    $(".flowchart-operator-connector-label").each(function (i) {
                        var linkData = linksData[i];
                        var text = $(this).text();
                        if (matchedColumns.indexOf(text) > -1) {
                            $(this).css("color", "green");
                        } else {
                            $(this).css("color", "red");
                        }

                    })

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
                            mappedFileHeadersArray.push(label);

                            var toOperator = linkData['toOperator']
                            var toConnector = linkData['toConnector'];
                            var toOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', toOperator);
                            var value = toOperatorData['properties']['inputs'][toConnector]['value'];
                            var tolabel = toOperatorData['properties']['inputs'][toConnector]['label'];
                            mappedGridColumnsArray.push(value);
                            mappedGridLabelssArray.push(tolabel);
                            columnMappingObj[label] = value;
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
                            var mappedValueIndex = mappedGridColumnsArray.indexOf(value);
                            mappedGridColumnsArray.splice(mappedValueIndex, 1);
                            var mappedLabelIndex = mappedGridLabelssArray.indexOf(tolabel);
                            mappedGridLabelssArray.splice(mappedLabelIndex, 1);


                            var fromOperator = linkData['fromOperator']
                            var fromConnector = linkData['fromConnector'];
                            var fromOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', fromOperator);
                            var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                            mappedFileHeadersArray.splice(mappedValueIndex, 1);

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


                    $.each(linksData, function (linkid, linkdata) {
                        $('#importFileColumnMappingId').flowchart('addLink', linkdata);
                    });
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
//                                    + "<div class='carousel-inner'>"
//                                    + "<div class='carousel-item active'>"
//                                    + "<span>Map File columns to Table columns by drawing a link between them using your mouse.</span><hr />"
//                                    + "<img src='images/importColMapping.gif' class='d-block w-100' width='260px' alt='Map Columns'>"
//                                    + "</div>"
//                                    + "<div class='carousel-item'>"
//                                    + "<span>To delete a link select a link by clicking on the link and press delete.</span><hr />"
//                                    + "<img src='images/importColMapping.gif' class='d-block w-100' width='260px' alt='Map Columns'>"
//                                    + "</div>"
//                                    + "</div>"
//                                    + "<button class='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='prev'>"
//                                    + "<span class='carousel-control-prev-icon' aria-hidden='true'></span>"
//                                    + "<span class='visually-hidden'>Previous</span>"
//                                    + "</button>"
//                                    + "<button class='carousel-control-next' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='next'>"
//                                    + "<span class='carousel-control-next-icon' aria-hidden='true'></span>"
//                                    + "<span class='visually-hidden'>Next</span>"
//                                    + "</button>"
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


            try {
                var $img = $("#" + browseId).next('img');
                $("#" + browseId).remove();
                $img.before("<input id='" + browseId + "' type='file' name='importFile' />");
                $("#" + browseId).hide();

                stopLoader();//27
            } catch (e) {
                stopLoader();//28
            }
        }
        , onCancel: function () {
            $("#Loader").css("display", "none");
            $("body").css("pointer-events", "auto");
//            stopLoader();//29
        }
        //catch()}
    });


    $("#" + browseId).click();


}
async function fetchDataExtractionAIUsingUrl(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, clickedTitle) {
    const dataHtml = `<div id="urlInputContainer" class="urlInputContainerClass">
            <input type="text" id="dataUrlInput" class="dataUrlInputClass" name="dataUrlInput" placeholder="Type your URL here...">
            <button id="sendUrlDataButton" class="sendUrlDataButtonClass">Send</button>
        </div>`;


    $(".aiChatgptResponseContainer").append(`<div class='aiAppendSenderDataClass userSelectedOption'>Url</div>`);
    $(".aiChatgptResponseContainer").append(dataHtml);
    aiAutoScrollContainer();

    $('#sendUrlDataButton').click(async function () {
        const permission = await accessPermission();
        if (!permission)
            return;
        const url = $("#dataUrlInput").val();
        const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;

        if (!url || !urlPattern.test(url)) {
            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>Please enter a valid URL.</div>");
            return;
        }

        showaiLoader();
        $('#sendUrlDataButton').prop('disabled', true);

        try {
            const csrfToken = $("meta[name='_csrf']").attr("content");
            const response = await fetch('getUrlExtractionData', {
                method: 'POST',
                headers: {
                    'X-XSRF-TOKEN': csrfToken,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `url=${encodeURIComponent(url)}`,
            });

            stopaiLoader();
            $('#sendUrlDataButton').prop('disabled', false);

            if (response.ok) {
                const file = await response.blob();
                const contentDisposition = response.headers.get('Content-Disposition');
                let filename = 'extractedFile.xlsx';

                if (contentDisposition) {
                    const matches = contentDisposition.match(/filename="(.+)"/);
                    if (matches && matches[1])
                        filename = matches[1];
                }

                getAILenspopulateURLFileBrowserColMapping(
                        aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, clickedTitle, file, filename, true
                        );
            } else {
                $(".aiChatgptResponseContainer").append(`<div class='aiAppendSenderDataClass userSelectedOption'>Error: ${response.statusText}</div>`);
            }
        } catch (error) {
            $(".aiChatgptResponseContainer").append(`<div class='aiAppendSenderDataClass userSelectedOption'>An error occurred: ${error.message}</div>`);
            $('#sendUrlDataButton').prop('disabled', false);
        }
    });
}
function  handleAILensFileBrowserColMappingSuccess(
        aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, resultObject
        ) {

    //var resultObject = JSON.parse(resultStr);
    var fileHeaders = resultObject['headersArray']
    var filePath = resultObject['filePath']
    var gridTable = resultObject['gridTable']
    var columnLabels = resultObject['columnLabels']
    var datafields = resultObject['datafields']

    var htmlDiv = "<div id='importFileColumnsMapppingOptionsDiv' >"
            + "<img id='importFileColumnsMapppingInfo' onclick='importColumnMappingAssistant()' src='images/Information_icon_Blue.svg' style='float:right;width:20px;' />"
            + "</div>"
            + "<div id='importFileColumnMappingId' class='importFileColumnMappingMain' ></div>";

    var mappedGridColumnsArray = [];
    var mappedGridLabelssArray = [];

    var mappedFileHeadersArray = [];
    var columnMappingObj = {};
    $("#messagedialog5").html(htmlDiv);
    $("#messagedialog5").addClass("ai-panel-flowchart");
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

                    showLoader();
                    $.ajax({
                        type: "post",
                        traditional: true,
                        dataType: 'html',
                        url: 'importExcelColMapping',
                        cache: false,
                        data: {
                            tableName: gridTable,
                            filePath: filePath,
                            gridId: gridId,
                            mappedFileHeadersArray: JSON.stringify(mappedFileHeadersArray),
                            mappedGridColumnsArray: JSON.stringify(mappedGridColumnsArray),
                            fileHeaders: JSON.stringify(fileHeaders),
                            columnMappingObjStr: JSON.stringify(columnMappingObj)
                        },
                        success: function (result) {
                            stopLoader();
                            var responseObj = JSON.parse(result);
                            var dialogSplitMessage = responseObj['finalresult'];
                            var batchNumber = responseObj['batchNumber'];
                            var finalresult = responseObj['finalresult'];
                            var flag = responseObj['flag'];
                            var rowCount = responseObj['rowCount'];

                            if (flag) {
//                                        var logData = "<div class='aiLensResultDataClass' style='width:348px;'>"
                                var logData = "<div class='aiLensResultDataClass' >"
                                        + "<h5>" + aiQueryAns + "</h5>"
//            + "<div>" + dialogSplitMessage + "</div>"
                                        // + "<div>Batch No: <span>" + batchNumber + "</span></div>"
                                        + "<div>Imported Rows : <span>" + rowCount + "</span></div>"
//                                        + "<div onclick =\"showDHTableGridData('" + gridTable + "','" + gridId + "', '" + batchNumber + "')\">View Data</div>"
                                        + "<div>"
                                        + "  <input type='checkbox' id='validateCheckbox' onclick=\"if(this.checked) { getAIContentBasedOnQuery('Do you want to validate data', 'Validate Data', 'KNOWLEDGE', 'Y', 'N'); }\">"
                                        + "  <label for='validateCheckbox'> Validate Data</label>"
                                        + "</div>"
                                        + "</div>";
                                defaultAITypingBasedOnResponse(logData, '', "", "");
                                $("#aILensExtractedBatchId, #aILensExtractedRowsCount").remove();
                                $("body").append(`<input type='hidden' id='aILensExtractedBatchId' value='${batchNumber}'>`);
                                $("body").append(`<input type='hidden' id='aILensExtractedRowsCount' value='${rowCount}'>`);
                                var paramArray = [];
                                var paramObj = {};
                                paramObj.column = 'BATCH_ID';
                                paramObj.value = batchNumber;
                                paramObj.operator = 'EQUALS';
//                                        paramObj.symbol = '=';
                                paramObj.selectNum = 1;
                                paramArray.push(paramObj);
//                                        $("#" + componentId + "_filter_columns").remove();
//                                        $("#" + componentId).append("<input type='hidden' id='" + gridId + "_filter_columns' value=''/>");
//                                        $("#" + componentId + "_filter_columns").val(JSON.stringify(paramArray));
//                                        closeAINavigation();
                                setTimeout(function () {
                                    try {
                                        if (componentType != null && componentType != '' && componentType != 'undefined' && componentType != undefined) {

                                            if (componentType == 'CLUSTER') {
                                                getcluster(clusterId, role, domain, 'N', paramArray);
//                                                    $("#" + gridId + "_filter_columns").remove();
//                                                    $("#" + gridId).append("<input type='hidden' id='" + selectedGridId + "_filter_columns' value=''/>");
//                                                    $("#" + gridId + "_filter_columns").val(JSON.stringify(paramArray));
//                                                    if (gridId != null && gridId != undefined && gridId != '') {
//                                                        $("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                                                    }
                                            } else if (componentType == 'NESTEDGRID') {
                                                $("#dxpGridContent").html("");
                                                getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'Y');
                                                try {
                                                    showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', "View Data", 'N');
                                                } catch (e) {

                                                }
                                                $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
                                                $("#dxpGridTab").attr("data-selectedgridId", gridId);
                                                $("#dxpGridTab").attr("data-selectedRoleId", role);
                                                $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
                                            } else if (componentType == 'GRID') {
                                                $("#dxpGridContent").html("");
                                                getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'N');
                                                try {
                                                    showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', "View Data", 'N');
                                                } catch (e) {

                                                }
                                                $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
                                                $("#dxpGridTab").attr("data-selectedgridId", gridId);
                                                $("#dxpGridTab").attr("data-selectedRoleId", role);
                                                $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
                                            }

                                        } else {
                                            $("#dxpGridContent").html("");
                                            getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'N');
                                            try {
                                                showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', "View Data", 'N');
                                            } catch (e) {

                                            }
                                            $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
                                            $("#dxpGridTab").attr("data-selectedgridId", gridId);
                                            $("#dxpGridTab").attr("data-selectedRoleId", role);
                                            $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
                                        }
                                    } catch (e) {
                                    }
                                }, 2000);

                                setTimeout(function () {
                                    openAINavigation();
//                                    getAIContentBasedOnQuery(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, batchNumber);
                                }, settimeout);
                            } else {
//                                        var logData = "<div class='aiLensResultDataClass' style='width:348px;'>"
                                var logData = "<div class='aiLensResultDataClass' >"
                                        + "<h5>Imported Data</h5>"
                                        + "<div>" + dialogSplitMessage + "</div>"
                                        + "</div>"
                                defaultAITypingBasedOnResponse(logData, '', "", "");
                            }
                        },
                        error: function (e) {
                            console.log(e);
                            sessionTimeout(e);
                            stopLoader();
                        }
                    })

                    $(this).html("");
                    $(this).dialog("close");

                }
            }],
        open: function () {

            // var columnDefinitions = $('#' + gridId).jqxGrid('getInstance').columns.records;

            var columnNameInputs = {};
            var columnNameArray = [];
            var inputCount = 0;
            $.each(columnLabels, function (i) {

                var columname = columnLabels[i];
                var datafield = datafields[i];
                if (columname != null && columname != "" && columname.indexOf("_HIDDEN")) {
                    //gridColumns.push(columname);

                    var input = {};
                    input['label'] = columname;
                    input['value'] = datafield;
                    columnNameInputs['input_' + inputCount] = input;
                    inputCount++;
                    columnNameArray.push(columname);
                }
            });


            var fileHeaders = resultObject['headersArray']
            var filePath = resultObject['filePath']
            var fileName = resultObject['fileName']

            var headersCount = resultObject['headersCount']
            var fileRowCount = resultObject['fileRowCount']

            var fileTitle = "<div>File Name : " + fileName + "<br>"
                    + "Columns Count : " + headersCount + "<br>"
                    + "Rows Count : " + fileRowCount + "</div>"
//                    + "<div>"
//                    + "<img  id='fileAnalyticsId'  src='images/Data-Analytics-icon.svg' style='width:20px;height:20px;float:right;' >"
//                    + "<img  id='fileDataTypesValidationId' src='images/validation.png' style='width:20px;height:20px;float:right;' >"
//                    + "</div>"
                    ;


//            var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
            var tableTitle = "<div>Staging Table <br>"
                    + "Columns Count : " + columnNameArray.length + "<br>"
//                    + "Rows Count : " + datainformations['rowscount'] 
                    + "</div>";


            var fileHeaderObject = {};
            $.each(fileHeaders, function (i) {
                var header = fileHeaders[i];
                fileHeaderObject[header] = header;
            })
            if (fileHeaders.length > Object.keys(fileHeaderObject).length) {
                showMesg("Duplicate file headers found. Please change to proceed");
                $(this).html("");
                $(this).dialog("close");
                throw new Error("Duplecate file headers found");
            }

            var linksData = {};
            var fileHeaderOutputs = {};
            var linkId = 0;
            var maxHeaderLength = 0;
            var matchedColumns = [];
            $.each(fileHeaders, function (i) {
                var output = {};
                output['label'] = fileHeaders[i];
                if (columnNameArray.indexOf(fileHeaders[i]) > -1) {
                    var linkdata = {};
                    linkdata['fromConnector'] = "output_" + i;
                    linkdata['fromOperator'] = "operator1";
                    linkdata['fromSubConnector'] = 0;
                    linkdata['toConnector'] = "input_" + (columnNameArray.indexOf(fileHeaders[i]));
                    linkdata['toOperator'] = "operator2";
                    linkdata['toSubConnector'] = 0;
                    linksData[linkId] = linkdata;
                    linkId++;
                    matchedColumns.push(fileHeaders[i]);
                }

                maxHeaderLength = fileHeaders[i].length > maxHeaderLength ? fileHeaders[i].length : maxHeaderLength;

                fileHeaderOutputs['output_' + i] = output;
            })

            var data = {
                operators: {
                    operator1: {
                        top: 20,
                        left: 20,
                        properties: {
                            title: fileTitle,
                            inputs: {},
                            outputs: fileHeaderOutputs,
                        }
                    },
                    operator2: {
                        top: 20,
                        left: 500,
                        properties: {
                            title: tableTitle,
                            inputs: columnNameInputs,
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


            $(".flowchart-operator-connector-label").each(function (i) {
                var linkData = linksData[i];
                var text = $(this).text();
                if (matchedColumns.indexOf(text) > -1) {
                    $(this).css("color", "green");
                } else {
                    $(this).css("color", "red");
                }

            })

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
                        $(".ai-panel-flowchart .flowchart-operator").addClass("margeTableTitlesClass");
                        $(".ai-panel-flowchart .flowchart-operator.margeTableTitlesClass:last-child").css("left", "275px");
                    }
                    return true;
                },
                onLinkCreate: function (linkId, linkData) {
                    var getdata = $('#importFileColumnMappingId').flowchart('getData');
                    var fromOperator = linkData['fromOperator']
                    var fromConnector = linkData['fromConnector'];
                    var fromOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', fromOperator);
                    var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                    mappedFileHeadersArray.push(label);

                    var toOperator = linkData['toOperator']
                    var toConnector = linkData['toConnector'];
                    var toOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', toOperator);
                    var value = toOperatorData['properties']['inputs'][toConnector]['value'];
                    var tolabel = toOperatorData['properties']['inputs'][toConnector]['label'];
                    mappedGridColumnsArray.push(value);
                    mappedGridLabelssArray.push(tolabel);
                    columnMappingObj[label] = value;
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
                    var mappedValueIndex = mappedGridColumnsArray.indexOf(value);
                    mappedGridColumnsArray.splice(mappedValueIndex, 1);
                    var mappedLabelIndex = mappedGridLabelssArray.indexOf(tolabel);
                    mappedGridLabelssArray.splice(mappedLabelIndex, 1);


                    var fromOperator = linkData['fromOperator']
                    var fromConnector = linkData['fromConnector'];
                    var fromOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', fromOperator);
                    var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                    mappedFileHeadersArray.splice(mappedValueIndex, 1);

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
                    $('#importFileColumnMappingId').on('click', '.flowchart-link', function () {
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

            $.each(linksData, function (linkid, linkdata) {
                $('#importFileColumnMappingId').flowchart('addLink', linkdata);
            })

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
                            + "<div class='carousel-inner'>"
                            + "<div class='carousel-item active'>"
                            + "<span>Map File columns to Table columns by drawing a link between them using your mouse.</span><hr />"
                            + "<img src='images/importColMapping.gif' class='d-block w-100' width='260px' alt='Map Columns'>"
                            + "</div>"
                            + "<div class='carousel-item'>"
                            + "<span>To delete a link select a link by clicking on the link and press delete.</span><hr />"
                            + "<img src='images/importColMapping.gif' class='d-block w-100' width='260px' alt='Map Columns'>"
                            + "</div>"
                            + "</div>"
                            + "<button class='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='prev'>"
                            + "<span class='carousel-control-prev-icon' aria-hidden='true'></span>"
                            + "<span class='visually-hidden'>Previous</span>"
                            + "</button>"
                            + "<button class='carousel-control-next' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='next'>"
                            + "<span class='carousel-control-next-icon' aria-hidden='true'></span>"
                            + "<span class='visually-hidden'>Next</span>"
                            + "</button>"
                            + "</div>";
                    return html;

                },
                //                    height:250px,
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


    try {
        var $img = $("#" + browseId).next('img');
        $("#" + browseId).remove();
        $img.before("<input id='" + browseId + "' type='file' name='importFile' />");
        $("#" + browseId).hide();

        stopLoader();//27
    } catch (e) {
        stopLoader();//28
    }
}
function extractedDataAutoProcess() {
    var batchId = $("#aILensExtractedBatchId").val();
    var rowCount = $("#aILensExtractedRowsCount").val();

    if (batchId != null && batchId != "" && batchId != undefined) {
        if (rowCount != null && rowCount != "" && rowCount != undefined) {
            if (rowCount == 1) {

            } else {
                getAIContentBasedOnQuery('Data Validated Successfully. Do you want to Process data ?', 'Yes', 'KNOWLEDGE', 'Y', 'N')
            }
        }
    }
}


function showExtractedGridData(gridId, batchId) {
    if (batchId == null || batchId == "" || batchId == undefined) {
        batchId = $("#aILensExtractedBatchId").val();
    }
    showLoader();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getCloudGrid',
        data: {
            'gridId': gridId,
            roleId: $("#rolehid").val(),
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            closeDialogBox("#dialog");
            $("#dialog").html('');
            $("#dialog").html("<div id='" + gridId + "'></div>");
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Extracted Data'] != null ? labelObject['Extracted Data'] : 'Extracted Data'),
                modal: true,
                width: 800,
                height: 500,
                fluid: true,
                buttons: [{
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {
                            var selectedRowIndexes = $("#" + gridId).jqxGrid('getselectedrowindexes');
                            var selectedRowData = [];
                            selectedRowIndexes.forEach(function (index) {
                                var rowdata = $("#" + gridId).jqxGrid('getrowdata', index);
                                selectedRowData.push(rowdata);
                            });
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            if (selectedRowData.length > 0) {
                                $(".aiChatgptResponseContainer").append(`<div class='aiAppendSenderDataClass userSelectedOption'>Rows Selected: ${selectedRowData.length}</div>`);
                                showaiLoader();
                                $.ajax({
                                    datatype: "json",
                                    type: "POST",
                                    url: 'getUpdateBatchRecords',
                                    data: {
                                        'rowData': JSON.stringify(selectedRowData),
                                    },
                                    traditional: true,
                                    cache: false,
                                    success: function (response) {
                                        if (response != null && response != "" && response != undefined && response.includes('Updated Successfully')) {
                                            batchId = response.match(/B\d+/);
                                            $("#aILensExtractedBatchId").val(batchId);
                                            aiAutoScrollContainer();
                                            extractedDataAutomation()
                                        }
                                    }, error: function (jqXHR, textStatus, errorThrown) {
                                        stopLoader();
                                    }

                                });
                            } else {
                                $(".aiChatgptResponseContainer").append(`<div class='aiAppendSenderDataClass userSelectedOption'>Please select the rows</div>`);
                            }

                        }


                    }],
                open: function ()
                {
                    var paramArray = [];
                    var paramObj = {}
                    paramObj.column = "BATCH_ID";
                    paramObj.operator = "EQUALS";
                    paramObj.value = batchId;
                    paramArray.push(paramObj);
                    gridConfig(response, 0, paramArray, gridId, batchId);
                    $("#basketNameValId").hide();
                    $(this).closest(".ui-dialog").addClass("visionHeaderMain");
                    $(".visionHeaderMain").css("z-index", "9999");
                    $(".visionFooterMain").css("z-index", "9999");
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

function extractedDataAutomation() {
    var batchId = "";
    if (batchId == null || batchId == "" || batchId == undefined) {
        batchId = $("#aILensExtractedBatchId").val();
    }
    getAIContentBasedOnQuery('Choose file to upload', 'Data Imported Successfully in staging area', 'MASSDATAPROCESSCREATE', "Y", "N", batchId, '', '', '', '', '', '', '', '', '', '', 'AUTOPROCESS');
}

function accessPermission() {
    return new Promise((resolve) => {
        var accessData = `<div class='aiLensResultDataClass'>
                <div>Do you have Permission to access this site?</div>

                <div class="viewData AILensDisOrEnaClass" style='display:flex;'>
                    <div class="viewButton" onclick="resolveAccess(true)">
                        <span><span class="viewIcon"><img src="" class="aiDefaultYesImgClass"></span> Yes</span>
                    </div>
                    <div class="viewButton" onclick="resolveAccess(false)" style='margin-left:15px;'>
                        <span><span class="viewIcon"><img src="" class="aiDefaultNoImgClass"></span> No</span>
                    </div>
                </div>
            </div>`;

        defaultAITypingBasedOnResponse(accessData);

        // Define a function globally to resolve the Promise
        window.resolveAccess = function (response) {
            console.log("User response:", response);
            var value = 'Yes';
            if (!response) {
                value = 'No';
            }
            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>" + value + "</div>");
            resolve(response); // Return true for Yes, false for No
        };
    });
}
function AIregistration() {
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    var CUSTOM_COLUMN5 = "";
    var FOLLOWUP_GRID_ID = "";
    var FOLLOWUP_PANEL_ID = "";
    var MATL_TYPE = "";
    var gridId = "";
    var objectid = "";
    var panelId = "";
    var moduleCode = $("#currentDomain").val();
    if (moduleCode != null && moduleCode != undefined && moduleCode != "" && moduleCode == 'PRODUCT') {
        FOLLOWUP_GRID_ID = "MM_PENDING_MGR_REG";
        FOLLOWUP_PANEL_ID = "MM_PANEL_REGISTRATIONS";
        MATL_TYPE = "ERSA";
        gridId = "MM_SAP_NEW_REG";
        objectid = "MM_FRM_RECORD_REG_MGR";
        panelId = "MM_PANEL_REGISTRATIONS";
    } else if (moduleCode != null && moduleCode != undefined && moduleCode != "" && moduleCode == 'ASSET') {
        CUSTOM_COLUMN5 = "ICF_MODEL";
        FOLLOWUP_GRID_ID = "PM_EQUIPMENT_MGR_PENDING_CREATE_REQUESTS";
        FOLLOWUP_PANEL_ID = "PM_EQUIPMENT_PANEL_REGISTRATIONS";
        MATL_TYPE = "M";
        gridId = "PM_SAP_EQ_NEW_REG";
        objectid = "PM_EQUIPMENT_MGR_FRM_NEW_REG";
        panelId = "PM_PANEL_SAP_NEW_REG";
    }

    var basicData = {
        ABBREVIATION: "NO OBJECT",
        BUSINESS_UNIT: "1000",
        BWKEY: "1000",
        CLASS_TERM: "NO OBJECT",
        CONCEPT_ID: "2007-1#01-1070872#1",
        CREATE_BY: $("#ssUsername").val(),
        CUSTOM_COLUMN5: CUSTOM_COLUMN5,
        DATA_SOURCE: "PILOG_MDRM",
        DR_ID1: "42DEB0631DDB438BB129811D09B28BC5",
        ERP_NO: "",
        FOLLOWUP_GRID_ID: FOLLOWUP_GRID_ID,
        FOLLOWUP_PANEL_ID: FOLLOWUP_PANEL_ID,
        HIDDEN_BUSINESS_UNIT: "PLANT,BWKEY,WERKS",
        HIDDEN_INSTANCE: "MANDT",
        HIDDEN_RECORD_NO: "EQUNR,MATNR",
        HIDDEN_RECORD_TYPE: "MATL_TYPE",
        HIDDEN_REGION: "SPRAS",
        HIDDEN_UOM: "MEINH,MEINS",
        INSTANCE: "100",
        LOCALE: "en_US",
        MANDT: "100",
        MATL_TYPE: MATL_TYPE,
        MEINH: "EA",
        MEINS: "EA",
        PLANT: "1000",
        RECORD_GROUP: "11111111",
        RECORD_NO: "",
        RECORD_TYPE: MATL_TYPE,
        REGION: "IN",
        Register: "REGISTER",
        SPRAS: "IN",
        STATUS: "A3-REGISTERED",
        UOM: "EA",
        WERKS: "1000",
        checkAttachType: "",
        controlType: "Register",
        datepickerCols: "",
        defaultFlag: "",
//        dxpExtendFormViewData: "<div class='formDxpExtendDuplicates'><table class='form-tab'><thead><tr><th>Record No's</th><th>Match Percentage</th><th>Match Criteria</th><th>Long Description</th></tr></thead><tbody></tbody></table><div class='dxpShowExtendDuplicateformView'><img src='images/Collase-Outline-Icon.svg' class='formExtendresultViewClass' id='formExtendResultViewId' title='Collapse View' onclick='showFormResultExtendView(event)'></div></div>",
        erpDataGridId: "",
        erpTabGridId: "",
        gridId: gridId,
        initParamSource: "",
        moduleCode: moduleCode,
        objectid: objectid,
        panelId: panelId,
        statushid: "",
        tabColumn: "null",
    };
    const basicIds = [
        "RECORD_NO",
        "CLASS_TERM",
        "INSTANCE",
        "BUSINESS_UNIT",
        "RECORD_TYPE",
        "RECORD_GROUP",
        "UOM",
        "CREATE_BY",
        "CREATE_DATE",
        "CUSTOM_COLUMN5",
        "ERP_NO",
        "STATUS",
        "HSN_CODE",
        "LOCALE",
        "REGION",
        "ABBREVIATION",
        "CONCEPT_ID",
        "DR_ID1",
        "HIDDEN_BUSINESS_UNIT",
        "PLANT",
        "BWKEY",
        "WERKS",
        "HIDDEN_UOM",
        "MEINH",
        "MEINS",
        "HIDDEN_STG_TRMNLGY_CUST_COL41",
        "BU_CUST_COL16",
        "HIDDEN_REGION",
        "SPRAS",
        "HIDDEN_RECORD_TYPE",
        "MATL_TYPE",
        "HIDDEN_RECORD_NO",
        "EQUNR",
        "HIDDEN_INSTANCE",
        "MANDT",
        "HIDDEN_CUSTOM_COLUMN18",
        "BU_CUST_COL18",
        "HIDDEN_CUSTOM_COLUMN17",
        "BU_CUST_COL17",
        "DATA_SOURCE",
        "datepickerCols",
        "Register",
        "tabColumn",
        "registerValidateColumn",
        "FOLLOWUP_PANEL_ID",
        "FOLLOWUP_GRID_ID",
        "registerValidateColumn",
        "FOLLOWUP_PANEL_ID",
        "FOLLOWUP_GRID_ID",
        "registerValidateColumn",
        "FOLLOWUP_PANEL_ID",
        "FOLLOWUP_GRID_ID",
        "registerValidateColumn",
        "FOLLOWUP_PANEL_ID",
        "FOLLOWUP_GRID_ID",
        "registerValidateColumn",
        "FOLLOWUP_PANEL_ID",
        "FOLLOWUP_GRID_ID",
        "rejColumn",
        "objecthid",
        "baskettypehid",
        "baskettypehid1",
        "moduleCode",
        "panelId",
        "gridId",
        "defaultFlag",
        "checkAttachType",
        "dxpExtendFormViewData",
        "initParamSource",
        "objectid",
        "erpDataGridId",
        "erpTabGridId"
    ];

    $.ajax({
        url: "registration",
        type: "post",
        traditional: true,
        dataType: 'html',
        cache: false,
        data: {
            basicData: JSON.stringify(basicData),
            basicIds: JSON.stringify(basicIds),
            panelId: panelId,
            classconceptid: "2007-1#01-1070872#1",
            fioriThemeFlag: fioriThemeCheck,
        },
        success: function (result) {
            stopaiLoader();
            stopLoader();
            if (result != null && result.indexOf("Failed") > -1 || result.indexOf("Exist") > -1) {
                var modalObj = {
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
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
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
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
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                var aiLensCreationFlag = $("#aiLensRegisterFlag").val();
                                if (aiLensCreationFlag != null && aiLensCreationFlag != "" && aiLensCreationFlag != undefined) {
                                    updateLensRecordData(jsonResponse['RECORD_NO'], aiLensCreationFlag);
                                }
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
                            //registerPanels(jsonResponse['formData'], jsonResponse['basicdata']);
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
function getAIPromptExtractAutoCleansing(aiQuery, tableName, aiSubQueryFlag, aiTypeFlag, gridId, batchId, url, paramArray) {
    let responseData = "";
    var paramArrayObj = JSON.parse(paramArray);

    const logMessage = (message) => {
        const logData = `<div class='aiLensResultDataClass'><div>${message}</div></div>`;
        defaultAITypingBasedOnResponse(logData, '', "", "");
    };
    let sequence = '';
    const characters = '0123456789ABCDEF';
    let length = 16;
    for (let i = 0; i < length; i++) {
        sequence += characters[Math.floor(Math.random() * 16)];
    }
    let selectedRowsData = [{
            "BATCH_ID": batchId,
            "SOURCE": "CREATE",
            "SEQUENCE_NO": sequence
        }];
//    try {
//        var data = $('#' + gridId).jqxGrid('getrowdata', 0);
//        var selectedRowsData = [];
//        if (data != null) {
//            selectedRowsData.push(data);
//        }
//    } catch (e) {
//
//    }


    const handleAjaxSuccess = (response, processName, callback) => {
        stopLoader();
        stopaiLoader();

        if (!response) {
            logMessage(`Unable to process ${processName}`);
            return;
        }

        if (response != null && response != "" && response != undefined) {
            if (response.startsWith('Exception::')) {
                logMessage(`Unable to process ${processName}: ${response}`);
            } else {
                responseData = response;
                if (processName != "Data Staging Process") {
                    response = response.replace("Validation Failed Records: 0", "");
                    const dataArray = response.trim().includes(",") ? response.split(',') : [response];
                    const modifiedLines = dataArray.map(line => line.trim().replace(/^\d+\s*:\s*/, ''));
                    const resultList = modifiedLines.map(item => `<li>${item}</li>`).join('');
                    responseData = `<ul>${resultList}</ul>`;
                    var viewDataclick = "showAIGridData('', '" + gridId + "','" + batchId + "','BATCH_ID')";
                    let viewDataStr = `<div class="viewButton" onclick="${viewDataclick}">
                <span class="viewText">View Data</span></div></div>`;

                } else if (processName == "Data Staging Process") {
                    var resultMessage = JSON.parse(response)['resultMessage'];
                    responseData = resultMessage;
                }
                logMessage(`${processName} completed`);
                logMessage(responseData + viewDataStr);
                callback && callback();
            }
        }

    };

    const executeAjaxCall = (url, processName, data, callback) => {
        showaiLoader();

        $.ajax({
            type: "post",
            url: url,
            cache: false,
            data: data,
            traditional: true,
            dataType: 'html',
            async: true,
            success: (response) => handleAjaxSuccess(response, processName, callback),
            error: (e) => {
                console.error(e);
                stopLoader();
                stopaiLoader();
                logMessage(`Error during ${processName}`);
            }
        });
    };

    try {
        const classParamArray = JSON.stringify(paramArrayObj['classparams']);
        const dataParamArray = JSON.stringify(paramArrayObj['dataParams']);
        const referenceParam = JSON.stringify(paramArrayObj['refDocParams']);

        if (classParamArray && dataParamArray) {
            logMessage("Data Automation process initiated");

            logMessage("Class Allocation process initiated");
            executeAjaxCall("getPhythonDHSApiResponse", "Class Allocation", {paramArray: classParamArray, batchId: batchId}, () => {

                logMessage("Data Validation  process initiated");
                executeAjaxCall("massValidateData", "Data Validation", {'jsonData': JSON.stringify(selectedRowsData),
                    'tableName': tableName,
                    'gridId': gridId,
                    'batchId': batchId
                }, () => {

                    logMessage("Data Staging process initiated");
                    executeAjaxCall("massSaveRecord", "Data Staging Process", {'jsonData': JSON.stringify(selectedRowsData),
                        'tableName': tableName,
                        'gridId': gridId,
                        'batchId': batchId
                    }, () => {

                        logMessage("Characteristics Extraction initiated");
                        executeAjaxCall("getPhythonDHSApiResponse", "Characteristics Extraction", {paramArray: dataParamArray, batchId: batchId}, () => {

                            logMessage("Characteristics Update initiated");
                            executeAjaxCall("confirmCharacteristicsUpdate", "Characteristics Update", {batchId: batchId}, () => {

                                logMessage("Reference Allocation process initiated");
                                executeAjaxCall("getPhythonDHSApiResponse", "Reference Allocation", {paramArray: referenceParam, batchId: batchId});
                            });
                        });
                    });
                });
            });
        }
    } catch (e) {
        console.error(e);
        stopLoader();
        stopaiLoader();
        logMessage("Unexpected error occurred during processing.");
    }
}
function sendFileDataWithPrompt(files, promptValue, fileType, existingFlag) {
    aiAutoScrollContainer();
    showaiLoader();
    var data;
    var formattedHTML = "";
    var randomNumber = generateRandomNumber();
    var pdfFileData = new FormData();
    pdfFileData.append("pdfData", files);
    pdfFileData.append("prompt", promptValue);
    pdfFileData.append("extractFileType", fileType);
    data = pdfFileData;
    $.ajax({
        url: 'extractFileData',
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
                    // Split the product details into lines and trim each line
                    const lines = product.split('\n').map(line => line.trim()).filter(Boolean);

                    // Create a new unordered list for each product
                    formattedHTML += '<ul>';  // Start the <ul>

                    // Iterate over the lines and add them to the list
                    lines.forEach(line => {
                        // Just trim and add the line as is, preserving line numbers and bold formatting
                        formattedHTML += '<li>' + line.replace(/\*\*(.*?)\*\*/, '<strong>$1</strong>') + '</li>';
                    });

                    formattedHTML += '</ul>';  // Close the <ul>
                });
            }

            var logData = "<div id='aiApiResultData" + randomNumber + "' class='aiLensResultDataClass' style='width:348px;'>"
                    + "<div>" + formattedHTML + "</div>"
                    + "</div>"

            $(".aiChatgptResponseContainer").append(logData);
            // Create the parameter object
            if (existingFlag !== null && existingFlag !== undefined && existingFlag !== "" && existingFlag === "Y") {
                let resultId = "aiApiResultData" + randomNumber;
                aiAttachmentExtractUpdateData(resultId);
            } else {
                aILensItemCreate(randomNumber);
            }
//            if (response != null && !response.includes("No Data") && response != "Try Again") {
//                var typingMsg = "<div class='aiLensResultDataClass' style='width:348px;'>"
//                        + "<button onclick='aILensItemCreate(\"TERM\", \"NO OBJECT\", \"\", \"2007-1#01-1070872#1\", \"\",\"\", \"PM_SAP_EQ_NEW_REG\", \"New Registrations\",\"" + randomNumber + "\")'>Create New Record</button>"
//                        + "<button onclick='getMasterRecordData(\"MM_MASTER_DATA_LENS_DATA\", \"" + randomNumber + "\")'>Add to Existing Record</button>"
//                        //+ "<button class='btn btn-primary' onclick='getAILensAutoHarmonize(\"Please proceed to Process the Imported Data\", \"3.Auto Harmonize\", \"MASSDATAPROCESSCREATE\", \"N\", \"N\", \"MM_AI_MASS_DATA_PROCESS_CREATE\", P_SEARCH_STRING, \"getPhythonDHSApiResponse\", \"{&quot;classparams&quot; : [{&quot;apiParamName&quot;:&quot;tableName&quot;,&quot;apiParamType&quot;:&quot;F&quot;,&quot;apiParamValue&quot;:&quot;V_MM_STG_MASS_CREATE&quot;},{&quot;apiParamName&quot;:&quot;colsArray&quot;,&quot;apiParamType&quot;:&quot;F&quot;,&quot;apiParamValue&quot;:&quot;AUDIT_ID,STG_COLUMN1,STG_COLUMN3&quot;},{&quot;apiParamName&quot;:&quot;colsarry&quot;,&quot;apiParamType&quot;:&quot;F&quot;,&quot;apiParamValue&quot;:&quot;STG_NO,STG_COLUMN1,STG_COLUMN3&quot;},{&quot;apiParamName&quot;:&quot;BATCH_ID&quot;,&quot;apiParamType&quot;:&quot;F&quot;,&quot;apiParamValue&quot;:&quot;B_SEARCH_STRING&quot;},{&quot;apiParamName&quot;:&quot;batch_id&quot;,&quot;apiParamType&quot;:&quot;F&quot;,&quot;apiParamValue&quot;:&quot;B_SEARCH_STRING&quot;},{&quot;apiParamName&quot;:&quot;analysisType&quot;,&quot;apiParamType&quot;:&quot;F&quot;,&quot;apiParamValue&quot;:&quot;CLASS_ALLOCATION&quot;},{&quot;apiParamName&quot;:&quot;accessName&quot;,&quot;apiParamType&quot;:&quot;B&quot;,&quot;apiParamValue&quot;:&quot;IDXPDBNAME&quot;},{&quot;apiParamName&quot;:&quot;access_name&quot;,&quot;apiParamType&quot;:&quot;B&quot;,&quot;apiParamValue&quot;:&quot;IDXPDBNAME&quot;},{&quot;apiParamName&quot;:&quot;user_name&quot;,&quot;apiParamType&quot;:&quot;B&quot;,&quot;apiParamValue&quot;:&quot;IDXPDBUSERNAME&quot;},{&quot;apiParamName&quot;:&quot;password&quot;,&quot;apiParamType&quot;:&quot;B&quot;,&quot;apiParamValue&quot;:&quot;IDXPDBPWD&quot;},{&quot;apiParamName&quot;:&quot;host&quot;,&quot;apiParamType&quot;:&quot;B&quot;,&quot;apiParamValue&quot;:&quot;IDXPDBHOST&quot;},{&quot;apiParamName&quot;:&quot;port&quot;,&quot;apiParamType&quot;:&quot;B&quot;,&quot;apiParamValue&quot;:&quot;IDXPDBPORT&quot;},{&quot;apiParamName&quot;:&quot;update_table&quot;,&quot;apiParamType&quot;:&quot;F&quot;,&quot;apiParamValue&quot;:&quot;STG_MASS_UPLOAD&quot;},{&quot;apiParamName&quot;:&quot;update_columns&quot;,&quot;apiParamType&quot;:&quot;F&quot;,&quot;apiParamValue&quot;:&quot;STG_COLUMN1&quot;},{&quot;apiParamName&quot;:&quot;filter_column&quot;,&quot;apiParamType&quot;:&quot;F&quot;,&quot;apiParamValue&quot;:&quot;AUDIT_ID&quot;},{&quot;apiParamName&quot;:&quot;apiURL&quot;,&quot;apiParamType&quot;:&quot;B&quot;,&quot;apiParamValue&quot;:&quot;CLASS_ALLOCATION_URL&quot;}], &quot;dataParams&quot; : [{&quot;apiParamName&quot;:&quot;table_name&quot;,&quot;apiParamType&quot;:&quot;F&quot;,&quot;apiParamValue&quot;:&quot;V_MM_STG_MASS_CREATE&quot;}, {&quot;apiParamName&quot;:&quot;colsarry&quot;,&quot;apiParamType&quot;:&quot;F&quot;,&quot;apiParamValue&quot;:&quot;STG_NO,STG_COLUMN1,STG_COLUMN3&quot;}, {&quot;apiParamName&quot;:&quot;batch_id&quot;,&quot;apiParamType&quot;:&quot;F&quot;,&quot;apiParamValue&quot;:&quot;B_SEARCH_STRING&quot;},{&quot;apiParamName&quot;:&quot;access_name&quot;,&quot;apiParamType&quot;:&quot;B&quot;,&quot;apiParamValue&quot;:&quot;IDXPDBNAME&quot;}, {&quot;apiParamName&quot;:&quot;user_name&quot;,&quot;apiParamType&quot;:&quot;B&quot;,&quot;apiParamValue&quot;:&quot;IDXPDBUSERNAME&quot;},{&quot;apiParamName&quot;:&quot;password&quot;,&quot;apiParamType&quot;:&quot;B&quot;,&quot;apiParamValue&quot;:&quot;IDXPDBPWD&quot;}, {&quot;apiParamName&quot;:&quot;host&quot;,&quot;apiParamType&quot;:&quot;B&quot;,&quot;apiParamValue&quot;:&quot;IDXPDBHOST&quot;},{&quot;apiParamName&quot;:&quot;port&quot;,&quot;apiParamType&quot;:&quot;B&quot;,&quot;apiParamValue&quot;:&quot;IDXPDBPORT&quot;},{&quot;apiParamName&quot;:&quot;apiURL&quot;,&quot;apiParamType&quot;:&quot;B&quot;,&quot;apiParamValue&quot;:&quot;DATA_EXTRACTION_URL&quot;}], &quot;updateParams&quot; : {&quot;updateIds&quot;:&quot;DataMapping1,DataMapping2,Characterstics,Reference,Document,FFT&quot;, &quot;excludeParams&quot;:&quot;DataMapping1,DataMapping2,FFT&quot;}}\")'>Auto Cleansing</button>"
//                        + "</div>";
//
//                defaultAITypingBasedOnResponse(typingMsg);
//
//            }
        }
        , error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}

function getMasterRecordData(gridId, aiTextId) {
    showLoader();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getCloudGrid',
        data: {
            'gridId': gridId,
            roleId: $("#rolehid").val(),
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            $(".aiChatgptResponseContainer").append("<div id='" + gridId + "'></div>");

            gridConfig(response, 0, [], gridId, []);
            setTimeout(function () {
                $(".aiChatgptResponseContainer").append(
                        "<button onclick='updateLensRecordData(\"" + gridId + "\",\"" + aiTextId + "\")'>Submit</button>"
                        );
            }, 500);
            aiAutoScrollContainer();
        }, error: function (jqXHR, textStatus, errorThrown) {
            stopLoader();
        }

    });
}
function updateLensRecordData(gridId, aiTextId) {
    openAINavigation();
    if (gridId != null && gridId != "" && gridId != undefined) {
        var recordNo;
        if (gridId != null && gridId != undefined && gridId != "") {
            recordNo = gridId;
        } else {

            var selectedRowIndexes = $("#" + gridId).jqxGrid('getselectedrowindexes');
            var rowList = [];

// Loop through the selected row indexes and get the corresponding row data
            $.each(selectedRowIndexes, function (index, rowIndex) {
                var rowData = $("#" + gridId).jqxGrid('getrowdata', rowIndex);
                rowList.push(rowData); // Add the row data to the list
            });

// Now, rowList contains all the checked rows
            $.each(rowList, function (index, row) {
                recordNo = row.RECORD_NO; // Assuming RECORD_NO is a field in the row data
                console.log("Record No: " + recordNo); // Do something with the recordNo
            });
        }
        var aiText = $("#prompEditText" + aiTextId).val();
        $.ajax({
            datatype: "json",
            type: "POST",
            url: 'updateLensTextData',
            data: {
                'recordNo': recordNo,
                'aiText': aiText
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                if (response != null && response != "" && response != "null") {
                    var message = labelObject[response] != null ? labelObject[response] : response;
                    var paramsObject = {
                        classparams: [
                            {apiParamName: "tableName", apiParamType: "F", apiParamValue: "O_RECORD_MASTER"},
                            {apiParamName: "colsArray", apiParamType: "F", apiParamValue: "RECORD_NO,MASTER_COLUMN8,MASTER_COLUMN10"},
                            {apiParamName: "BATCH_ID", apiParamType: "F", apiParamValue: recordNo},
                            {apiParamName: "analysisType", apiParamType: "F", apiParamValue: "CLASS_ALLOCATION_RECORD"},
                            {apiParamName: "access_name", apiParamType: "B", apiParamValue: "IDXPDBNAME"},
                            {apiParamName: "user_name", apiParamType: "B", apiParamValue: "IDXPDBUSERNAME"},
                            {apiParamName: "password", apiParamType: "B", apiParamValue: "IDXPDBPWD"},
                            {apiParamName: "host", apiParamType: "B", apiParamValue: "IDXPDBHOST"},
                            {apiParamName: "port", apiParamType: "B", apiParamValue: "IDXPDBPORT"},
                            {apiParamName: "update_table", apiParamType: "F", apiParamValue: "O_RECORD_MASTER,STG_MM_SEARCH"},
                            {apiParamName: "filter_column", apiParamType: "F", apiParamValue: "RECORD_NO,RECORD_NO"},
                            {apiParamName: "filter_column1", apiParamType: "F", apiParamValue: "RECORD_NO"},
                            {apiParamName: "update_columns", apiParamType: "F", apiParamValue: "CLASS_TERM,TERM"},
                            {apiParamName: "apiURL", apiParamType: "B", apiParamValue: "CLASS_ALLOCATION_URL1"}
                        ],
                        dataParams: [
                            {apiParamName: "table_name", apiParamType: "F", apiParamValue: "O_RECORD_MASTER"},
                            {apiParamName: "colsarry", apiParamType: "F", apiParamValue: "RECORD_NO,CLASS_TERM,MASTER_COLUMN10"},
                            {apiParamName: "batch_id", apiParamType: "F", apiParamValue: recordNo},
                            {apiParamName: "access_name", apiParamType: "B", apiParamValue: "IDXPDBNAME"},
                            {apiParamName: "user_name", apiParamType: "B", apiParamValue: "IDXPDBUSERNAME"},
                            {apiParamName: "password", apiParamType: "B", apiParamValue: "IDXPDBPWD"},
                            {apiParamName: "host", apiParamType: "B", apiParamValue: "IDXPDBHOST"},
                            {apiParamName: "port", apiParamType: "B", apiParamValue: "IDXPDBPORT"},
                            {apiParamName: "filter_column1", apiParamType: "F", apiParamValue: "RECORD_NO"},
                            {apiParamName: "apiURL", apiParamType: "B", apiParamValue: "DATA_EXTRACTION_URL1"}
                        ],
                        refDocParams: [
                            {"apiParamName": "inpt_type", "apiParamType": "F", "apiParamValue": "REFERENCE"},
                            {"apiParamName": "batch_id", "apiParamType": "F", "apiParamValue": recordNo},
                            {"apiParamName": "access_name", "apiParamType": "B", "apiParamValue": "IDXPDBNAME"},
                            {"apiParamName": "user_name", "apiParamType": "B", "apiParamValue": "IDXPDBUSERNAME"},
                            {"apiParamName": "password", "apiParamType": "B", "apiParamValue": "IDXPDBPWD"},
                            {"apiParamName": "host", "apiParamType": "B", "apiParamValue": "IDXPDBHOST"},
                            {"apiParamName": "port", "apiParamType": "B", "apiParamValue": "IDXPDBPORT"},
//                            {apiParamName: "filter_column", apiParamType: "F", apiParamValue: "RECORD_NO"},
                            {"apiParamName": "apiURL", "apiParamType": "B", "apiParamValue": "DATA_REF_DOC_URL"}
                        ],

                    };
                    var resultHtmlstr = "<div>"
                            + "<span>" + message + "</span>"
                            + "<button onclick='getAIPromptAutoCleansing(\"Please proceed to Process the Imported Data\", \"3.Auto Harmonize\", \"MASSDATAPROCESSCREATE\", \"N\", \"N\", \"MM_AI_MASS_DATA_PROCESS_CREATE\", \"" + recordNo + "\", \"getPhythonDHSApiResponse\", " + JSON.stringify(paramsObject) + ")'>Auto Cleansing</button>"
                            + "</div>";

                    defaultAITypingBasedOnResponse(resultHtmlstr);
//                    $("#aiLensCreationFlag").val("");
                    aiAutoScrollContainer();

                }

            }, error: function (jqXHR, textStatus, errorThrown) {
                stopLoader();
            }

        });
    }

}
function aILensItemCreate(aiRandomId) {
    try {
        $("#aiLensRegisterFlag").remove();

        $("body").append("<input id='aiLensRegisterFlag' type='hidden' value='" + aiRandomId + "'/>");
        var promptValue = $("#aiApiResultData" + aiRandomId).text();

        // HTML for the prompt input field
        var showPromptInput = '<label style="font-weight: bold; color: black; margin-bottom: 5px;">Prompt :</label>' +
                '<textarea id="prompText' + aiRandomId + '" style="width: 100%; height: 250px; border: 1px solid #ccc; border-radius: 4px; padding: 5px;">' + promptValue + '</textarea>' +
                '<div><span class="prompt-error" style="color: red; font-size: 12px;"></span></div>';
        if (promptValue != null && promptValue != undefined && promptValue != "" && promptValue != "null" && !promptValue.includes("No Data")) {
            $("#dialog").html(showPromptInput);
            $("#dialog").dialog({
                resizable: false,
                dialogClass: "editPromptResultsClass",
                title: (labelObject['Edit Prompt Results'] != null ? labelObject['Edit Prompt Results'] : 'Edit Prompt Results'),
                width: 600,
                height: 400,
                fluid: true,
                buttons: [
                    {
                        text: labelObject['CREATE'] != null ? labelObject['CREATE'] : 'CREATE',
                        click: function () {
                            // Retrieve the edited value from the textarea
                            var editDescriptionVal = $("#prompText" + aiRandomId).val();

                            // Store the edited value in a hidden input field for further processing if needed
                            $("body").append("<input id='prompEditText" + aiRandomId + "' type='hidden'/>");
                            $("#prompEditText" + aiRandomId).val(editDescriptionVal);
                            $("#dxpHomeContent").hide();
                            AIregistration();
                            closeAllDialogsBoxes();
                        }
                    },
                    {
                        text: labelObject['EXISTING'] != null ? labelObject['EXISTING'] : 'EXISTING',
                        click: function () {
                            // Retrieve the edited value from the textarea
                            var editDescriptionVal = $("#prompText" + aiRandomId).val();

                            // Store the edited value in a hidden input field for further processing if needed
                            $("body").append("<input id='prompEditText" + aiRandomId + "' type='hidden'/>");
                            $("#prompEditText" + aiRandomId).val(editDescriptionVal);

                            // Proceed with further processing using the edited value
                            //aILensNewItemCreation(dataField, term, defntn, conceptId, recpordGroup, abbreviation, gridId, basketType);

                            // Close the dialog
                            closeAllDialogsBoxes();
                        }
                    }
                ],
                open: function () {
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(this).closest(".ui-dialog").css("z-index", "1999");
                    $(".visionHeaderMain").css("z-index", "999999");
                    $(".visionFooterMain").css("z-index", "999999");
                    var title = "<div id='showHeaderNameAndExport' style='display:flex;gap:10px;'>" +
                            "<div id='showHeaderText'>Edit Prompt Results</div>" +
                            "<div style='display:flex;align-items:center'>" +
                            "<div id='dataSheetdownload" + aiRandomId + "' onclick=\"aiExtractToTable('" + aiRandomId + "','Y')\">" +
                            "<input title='Download' id='dataSheetExport" + aiRandomId + "' " +
                            "class='exportClass visionSearchExportButton visionGridExportButton visionExportInput visionSearchExportButtonUpdatedImagClass' " +
                            "type='button' width='-2px'>" +
                            "</div>" +
                            "</div>" +
                            "</div>";

                    $(".ui-dialog-title").html(title);
                },
                beforeClose: function (event, ui) {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
        }
    } catch (e) {
        console.error("Error in aILensItemCreate: ", e);
    }

}
async function getAIPromptAutoCleansing(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, gridId, batchId, url, paramArray) {
    let responseData = "";
    $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>Auto Cleansing</div>");

    const logMessage = (message) => {
        const logData = `<div class='aiLensResultDataClass'><div>${message}</div>`
        defaultAITypingBasedOnResponse(logData, '', "", "");
    };


    const handleAjaxSuccess = (response, processName, gridID, callback) => {
        stopLoader();
        stopaiLoader();

        if (!response) {
            logMessage(`Unable to process ${processName}`);
            return;
        }

        if (response.startsWith('Exception::')) {
            logMessage(`Unable to process ${processName}: ${response}`);
        } else {
            const dataArray = response.trim().includes(",") ? response.split(',') : [response];
            const modifiedLines = dataArray.map(line => line.trim().replace(/^\d+\s*:\s*/, ''));
            const resultList = modifiedLines.map(item => `<li>${item}</li>`).join('');
            responseData = `<ul>${resultList}</ul>`;
            var viewDataclick = "showAIGridData('', '" + gridID + "','" + batchId + "','RECORD_NO')";
            let viewDataStr = `<div class="viewButton" onclick="${viewDataclick}">
                <span class="viewText">View Data</span></div></div>`;
            logMessage(`${processName} completed`);
            logMessage(responseData + viewDataStr);
            callback && callback();
        }
    };

    const executeAjaxCall = (processName, data, gridID, callback) => {
        showaiLoader();
        if (processName.includes("Confirm")) {
            url = 'confirmCharacteristicsUpdateRec'
        } else {
            url = 'getPhythonDHSApiResponse'
        }
        $.ajax({
            type: "post",
            url: url,
            cache: false,
            data: data,
            traditional: true,
            dataType: 'html',
            async: true,
            success: (response) => handleAjaxSuccess(response, processName, gridID, callback),
            error: (e) => {
                console.error(e);
                stopLoader();
                stopaiLoader();
                logMessage(`Error during ${processName}`);
            }
        });
    };

    try {
        const classParamArray = JSON.stringify(paramArray['classparams']);
        const dataParamArray = JSON.stringify(paramArray['dataParams']);
        const referenceParam = JSON.stringify(paramArray['refDocParams']);
        //01-05-2025
        let pannelStr = '';
        try {
            let pannelObj = {};
            if (panaloldData != undefined) {
                pannelObj['oldPannelData'] = panaloldData;
            }
            pannelObj['newPannelData'] = await getPannelData();
            pannelStr = JSON.stringify(pannelObj);
        } catch (e) {
            console.error(e);
        }
        //01-05-2025
        if (classParamArray && dataParamArray) {
            logMessage("<b>Automated data cleansing process has been successfully initiated to detect and correct inconsistencies, inaccuracies, or formatting issues within the dataset.</b>");
            logMessage("<b>Class allocation process has been successfully initiated to assign classes based on predefined criteria.</b>");

            executeAjaxCall("Class Allocation", {paramArray: classParamArray, batchId: batchId, pannelStr: pannelStr, flag: true}, 'MM_MASTER_DATA_LENS_DATA', () => {  //01-05-2025
                logMessage("</b>Data extraction process has been initiated to retrieve relevant data from the source systems for further processing and analysis.</b>");

                executeAjaxCall("Data Extraction", {paramArray: dataParamArray, batchId: batchId}, 'MM_AUTOMATION_TABLE', () => {
                    logMessage("Confirming Characteristics Update");

                    executeAjaxCall("Confirm Characteristics Update", {recordNo: batchId}, 'MM_AIPROPERTIES', () => {
                        logMessage("<b>Update of characteristics is being confirmed to ensure all changes have been successfully applied.</b>");

                        logMessage("<b>Reference allocation process has been initiated to assign appropriate reference data or identifiers based on predefined mapping rules or criteria.</b>");
                        executeAjaxCall("Reference Allocation", {paramArray: referenceParam, batchId: batchId}, 'MM_AIREFERENCE');
                        setTimeout(function () {
                            refreshFormData();
                        }, 500);
                    });
                });
            });
        }
    } catch (e) {
        console.error(e);
        stopLoader();
        stopaiLoader();
        logMessage("Unexpected error occurred during processing.");
    }
}

//function getAIPromptAutoCleansing(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, gridId, batchId, url, paramArray) {
//    let responseData = "";
//    $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>Auto Cleansing</div>");
//
//    const logMessage = (message) => {
//        const logData = `<div class='aiLensResultDataClass'><div>${message}</div>`
//        defaultAITypingBasedOnResponse(logData, '', "", "");
//    };
//
//
//    const handleAjaxSuccess = (response, processName, gridID, callback) => {
//        stopLoader();
//        stopaiLoader();
//
//        if (!response) {
//            logMessage(`Unable to process ${processName}`);
//            return;
//        }
//
//        if (response.startsWith('Exception::')) {
//            logMessage(`Unable to process ${processName}: ${response}`);
//        } else {
//            const dataArray = response.trim().includes(",") ? response.split(',') : [response];
//            const modifiedLines = dataArray.map(line => line.trim().replace(/^\d+\s*:\s*/, ''));
//            const resultList = modifiedLines.map(item => `<li>${item}</li>`).join('');
//            responseData = `<ul>${resultList}</ul>`;
//            var viewDataclick = "showAIGridData('', '" + gridID + "','" + batchId + "','RECORD_NO')";
//            let viewDataStr = `<div class="viewButton" onclick="${viewDataclick}">
//                <span class="viewText">View Data</span></div></div>`;
//            logMessage(`${processName} completed`);
//            logMessage(responseData + viewDataStr);
//            callback && callback();
//        }
//    };
//
//    const executeAjaxCall = (processName, data, gridID, callback) => {
//        showaiLoader();
//        if (processName.includes("Confirm")) {
//            url = 'confirmCharacteristicsUpdateRec'
//        } else {
//            url = 'getPhythonDHSApiResponse'
//        }
//        $.ajax({
//            type: "post",
//            url: url,
//            cache: false,
//            data: data,
//            traditional: true,
//            dataType: 'html',
//            async: true,
//            success: (response) => handleAjaxSuccess(response, processName, gridID, callback),
//            error: (e) => {
//                console.error(e);
//                stopLoader();
//                stopaiLoader();
//                logMessage(`Error during ${processName}`);
//            }
//        });
//    };
//
//    try {
//        const classParamArray = JSON.stringify(paramArray['classparams']);
//        const dataParamArray = JSON.stringify(paramArray['dataParams']);
//        const referenceParam = JSON.stringify(paramArray['refDocParams']);
//
//        if (classParamArray && dataParamArray) {
//            logMessage("<b>Automated data cleansing process has been successfully initiated to detect and correct inconsistencies, inaccuracies, or formatting issues within the dataset.</b>");
//            logMessage("<b>Class allocation process has been successfully initiated to assign classes based on predefined criteria.</b>");
//
//            executeAjaxCall("Class Allocation", {paramArray: classParamArray, batchId: batchId}, 'PM_MASTER_DATA_LENS_DATA', () => {
//                logMessage("</b>Data extraction process has been initiated to retrieve relevant data from the source systems for further processing and analysis.</b>");
//
//                executeAjaxCall("Data Extraction", {paramArray: dataParamArray, batchId: batchId}, 'PM_AUTOMATION_TABLE', () => {
//                    logMessage("Confirming Characteristics Update");
//
//                    executeAjaxCall("Confirm Characteristics Update", {recordNo: batchId}, 'PM_AIPROPERTIES', () => {
//                        logMessage("<b>Update of characteristics is being confirmed to ensure all changes have been successfully applied.</b>");
//
//                        logMessage("<b>Reference allocation process has been initiated to assign appropriate reference data or identifiers based on predefined mapping rules or criteria.</b>");
//                        executeAjaxCall("Reference Allocation", {paramArray: referenceParam, batchId: batchId}, 'PM_AIREFERENCE');
//                        setTimeout(function () {
//                            refreshFormData();
//                        }, 500)
//                    });
//                });
//            });
//        }
//    } catch (e) {
//        console.error(e);
//        stopLoader();
//        stopaiLoader();
//        logMessage("Unexpected error occurred during processing.");
//    }
//}
function getAILenspopulateURLFileBrowserColMapping(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, clickedTitle, file, fileName, useAjaxFileFormSend
        ) {
    $("#aiTypedValue").val('');

    var params = {gridId: gridId};

    settimeout = settimeout || '10000';

    if (useAjaxFileFormSend) {
        var formData = new FormData();
        formData.append("importFile", file, fileName);
        formData.append("gridId", gridId);

        $.ajax({
            url: 'importFileAjaxColMapping',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            settimeout: settimeout,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                $("#Loader").css({opacity: "0.99", display: "block"});
                $("body").css("pointer-events", "none");
                startAjax(); // Optional: Include your custom start logic
            },
            success: function (result) {
                $("#Loader").css("display", "none");
                $("body").css("pointer-events", "auto");
                endAjax();

                const resultObject = JSON.parse(result);
                const fileHeaders = resultObject['headersArray'];
                const filePath = resultObject['filePath'];
                const gridTable = resultObject['gridTable'];
                const columnLabels = resultObject['columnLabels'];
                const datafields = resultObject['datafields'];

                var paramArray = [];
                var paramObj = {};
                paramObj.column = 'BATCH_ID';
                paramObj.value = 'BATCH_ID';
                paramObj.operator = 'EQUALS';
//                                        paramObj.symbol = '=';
                paramObj.selectNum = 1;
                paramArray.push(paramObj);
//                getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'Y');
                setTimeout(() => {

//                    if (componentType != null && componentType != '' && componentType != 'undefined' && componentType != undefined) {
//
//                        if (componentType == 'CLUSTER') {
//                            getcluster(gridId, role, domain, 'N', paramArray);
//                        } else if (componentType == 'NESTEDGRID') {
//                            getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'Y');
//                            $("#basketNameValId").hide();
//                            try {
//                                showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', clickedTitle, 'N');
//                            } catch (e) {
//
//                            }
//                            $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
//                            $("#dxpGridTab").attr("data-selectedgridId", gridId);
//                            $("#dxpGridTab").attr("data-selectedRoleId", role);
//                            $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
//                        } else if (componentType == 'GRID') {
//                            getnestedGrid(componentType, paramArray, 0, 'dxpGridContent', "", 'N');
//                            try {
//                                showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', clickedTitle, 'N');
//                            } catch (e) {
//
//                            }
//                            $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
//                            $("#dxpGridTab").attr("data-selectedgridId", gridId);
//                            $("#dxpGridTab").attr("data-selectedRoleId", role);
//                            $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
//                        }
//
//                    } else {
//                        getnestedGrid(componentType, paramArray, 0, 'dxpGridContent', "", 'N');
//                        try {
//                            showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', clickedTitle, 'N');
//                        } catch (e) {
//
//                        }
//                        $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
//                        $("#dxpGridTab").attr("data-selectedgridId", gridId);
//                        $("#dxpGridTab").attr("data-selectedRoleId", role);
//                        $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
//                    }

                    handleAILensFileBrowserColMappingSuccess(
                            aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, resultObject
                            );
                }, 2000);



            },
            error: function (error) {
                $("#Loader").css("display", "none");
                $("body").css("pointer-events", "auto");
                console.error("File upload failed", error);
            },
            complete: function () {
            }
        });
    } else {
        $("#" + browseId).ajaxfileupload({

            'action': 'importFileAjaxColMapping',
            params: params,
            async: true,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
            },
            onStart: function () {
                $("#Loader").css("opacity", "0.99");
                $("#Loader").css("display", "block");
                $("body").css("pointer-events", "none");
                startAjax();
            },
            'onComplete': function (result) {
                $("#Loader").css("display", "none");
                $("body").css("pointer-events", "auto");
                endAjax();
                var resultObject = result['message'];
                handleAILensFileBrowserColMappingSuccess(
                        aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, resultObject
                        );
            }
            , onCancel: function () {
                $("#Loader").css("display", "none");
                $("body").css("pointer-events", "auto");
            }
        });
        $("#" + browseId).click();
    }
}
function showAISearchHistory() {
    const categories = ["Today", "Yesterday", "7 Days", "30 Days", "90 Days", "Custom Range"];
    let aiSearchHistoryHtml = `<div id='aIHistoryContainer' class='aIHistoryContainerClass'><div id='aIHistorycategory' class='aIHistorycategoryClass'>`;

    categories.forEach(category => {
        const categoryId = category.toLowerCase().replace(/ /g, '-');
        aiSearchHistoryHtml += `
            <div id='${categoryId}-history' class='aIHistoryCategory' onclick=showAISearchHistoryData('${categoryId}')>${category}</div>
        `;
    });
    aiSearchHistoryHtml += `</div><div id='aIHistoryContent'><ol id='aIHistoryContentUl'></ol></div></div>`;

    closeDialogBox("#dialog");
    $("#dialog").html(aiSearchHistoryHtml);
    $("#dialog").dialog({
        resizable: false,
        title: labelObject['AISearchHistory'] != null ? labelObject['AISearchHistory'] : 'AISearchHistory',
        modal: true,
        height: 500,
        minWidth: 1200,
        width: 1200,
        fluid: true,
        buttons: [{
                text: 'Ok',
                click: function () {
                    $(this).html("");
                    $(this).dialog("destroy");
                }
            }],
        open: function () {
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
        },
        beforeClose: function (event, ui) {
            // Custom before close actions can be defined here
        }
    });
    $(".ui-dialog").addClass("showAIPromptsHistroy");
}

function showAISearchHistoryData(categoryId) {
    if (categoryId == 'custom-range') {
        $(".aIHistorycategoryClass").find(".active").removeClass("active");
        $("#" + categoryId + "-history").addClass("active");
        const contentElement = $('#aIHistoryContent');
        const today = new Date().toISOString().split('T')[0];

        contentElement.html(`<form id="aISearchHistorycustomRange" class="aISearchHistorycustomRangeClass">  
                <div class='dateSelectorWrapper'>
                    <div>
                        <div>
                            <label for="fromDate">From Date:</label>
                            <input type="date" id="aISearchFromDate" name="fromDate" required>
                        </div>
                        <div id="fromDateValidationMessage" style="color: red;"></div>  
                    </div>
                    <div>
                        <div>
                            <label for="toDate">To Date:</label>
                            <input type="date" id="aISearchToDate" name="toDate" required max="${today}" value="${today}">
                        </div>
                        <div id="toDateValidationMessage" style="color: red;"></div>
                    </div>
                </div>    
            </form>`);



        $('#aISearchFromDate').change(function () {
            const fromDate = $('#aISearchFromDate').val();
            const toDate = $('#aISearchToDate').val();
            const fromValidationMessageElement = $('#fromDateValidationMessage');
            const toValidationMessageElement = $('#toDateValidationMessage');

            if (!fromDate) {
                fromValidationMessageElement.text('Please enter a From date.');
                toValidationMessageElement.text('');
                return;
            } else if (!toDate) {
                toValidationMessageElement.text('Please enter a To date.');
                fromValidationMessageElement.text('');
                return;
            } else {
                toValidationMessageElement.text('');
                fromValidationMessageElement.text('');
            }
            $("#aIHistoryContent").html("<ol id='aIHistoryContentUl'></ol>");
            showLoader();
            try {
                $.ajax({
                    type: "POST",
                    url: 'showAISearchHistory',
                    data: {
                        category: categoryId,
                        startDate: fromDate,
                        endDate: toDate
                    },
                    traditional: true,
                    cache: false,
                    success: function (response) {
                        stopLoader();
                        if (response != null && response != undefined && response != "") {
                            var aISearchHisroryDataHtml = response['aISearchHistoryDataHtml'];
                            $("#aIHistoryContentUl").html(aISearchHisroryDataHtml);
                        }
                    }
                });
            } catch (e) {
                console.log(e);
                stopLoader();
            }
        });
        $('#aISearchToDate').change(function () {
            const fromDate = $('#aISearchFromDate').val();
            const toDate = $('#aISearchToDate').val();
            const fromValidationMessageElement = $('#fromDateValidationMessage');
            if (!fromDate) {
                fromValidationMessageElement.text('Please enter a From date.');
                return;
            } else {
                fromValidationMessageElement.text('');
            }
            $("#aIHistoryContent").html("<ol id='aIHistoryContentUl'></ol>");
            showLoader();
            try {
                $.ajax({
                    type: "POST",
                    url: 'showAISearchHistory',
                    data: {
                        category: categoryId,
                        startDate: fromDate,
                        endDate: toDate
                    },
                    traditional: true,
                    cache: false,
                    success: function (response) {
                        stopLoader();
                        if (response != null && response != undefined && response != "") {
                            var aISearchHisroryDataHtml = response['aISearchHistoryDataHtml'];
                            $("#aIHistoryContentUl").html(aISearchHisroryDataHtml);
                        }
                    }
                });
            } catch (e) {
                console.log(e);
                stopLoader();
            }
        });
    } else {
        $(".aIHistorycategoryClass").find(".active").removeClass("active");
        $("#" + categoryId + "-history").addClass("active");
        $("#aIHistoryContent").html("<ol id='aIHistoryContentUl'></ol>");
        showLoader();
        try {
            $.ajax({
                type: "POST",
                url: 'showAISearchHistory',
                data: {
                    category: categoryId,
                },
                traditional: true,
                cache: false,
                success: function (response) {
                    stopLoader();
                    if (response != null && response != undefined && response != "") {
                        var aISearchHisroryDataHtml = response['aISearchHistoryDataHtml'];
                        $("#aIHistoryContentUl").html(aISearchHisroryDataHtml);
                    }
                }
            });
        } catch (e) {
            console.log(e);
            stopLoader();
        }
    }
}


var highlights = [];
var currentIndex = -1;
function highlightTextSearch(event) {
    var input = event.target.value.trim().toLowerCase();
    if (input != null && input != undefined && input != "") {
        $("#searchdown").show();
        $("#searchup").show();
        $("#searchCount").show();
        $("#clearAISearch").show();
    } else {
        $("#searchdown").hide();
        $("#searchup").hide();
        $("#searchCount").hide();
        $("#clearAISearch").hide();
    }
    var count = 0;
    var regex = new RegExp(`(${input})`, "gi");
    $(".searchrightInnerContainer").show();
    highlights = [];
    currentIndex = -1;
    $("#showmoreContent").click();
    $('#myBtnContainer .btn').each(function () {
        const buttonText = $(this).find('.aitabTitle').text().trim().toLowerCase();
        if (input && buttonText.includes(input)) {
            $(this).addClass('active');
            count++;
        } else {
            $(this).removeClass('active');
            // $(".searchrightInnerContainer").hide();
        }
    });

    $('.aiChatgptResponseContainer').each(function () {
        var container = $(this);
        container.find('.highlight').each(function () {
            var element = $(this);
            var content = element.html();
            element.replaceWith(content);
        });

        if (input) {
            container.find('.viewText, .textContent, td, th, .viewButton, .appendTextClass, .aiLensResultDataClass, .aiAppendSenderDataClass ').each(function () {
                var textContent = $(this).text();
                if (textContent.toLowerCase().includes(input)) {
                    var regex = new RegExp('(' + input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
                    var highlightedText = textContent.replace(regex, '<span class="highlight">$1</span>');
                    $(this).html(highlightedText);

                    // Store highlighted elements
                    var matches = $(this).find('.highlight');
                    highlights.push(...matches);
                    count += (textContent.match(regex) || []).length;
                }
            });
        }
    });

    if (input === "") {
        document.getElementById('searchCount').innerText = "";
        document.getElementById('showLessContent').click();
        $("#searchdown").hide();
        $("#searchup").hide();
        return;
    }

//    let countElement = document.getElementById('searchCount');
//    countElement.innerText = `${count}`;
    $("#searchdown").show();
    $("#searchup").show();
    //display current hilights
    if (highlights.length > 0) {
        currentIndex = 0;
        displayCurrentHighlightCount();
        scrollToHighlight();
    }
}

function goToNextHighlight() {
    if (highlights.length === 0)
        return;
    currentIndex = (currentIndex + 1) % highlights.length;
    displayCurrentHighlightCount();
    scrollToHighlight();
}

function goToPreviousHighlight() {
    if (highlights.length === 0)
        return;
    currentIndex = (currentIndex - 1 + highlights.length) % highlights.length;
    displayCurrentHighlightCount();
    scrollToHighlight();
}

function scrollToHighlight() {
    var currentHighlight = highlights[currentIndex];
    currentHighlight.scrollIntoView({behavior: 'smooth', block: 'center'});
    highlights.forEach((element, index) => {
        if (index === currentIndex) {
            element.classList.add('current-highlight');
        } else {
            element.classList.remove('current-highlight');
        }
    });
}
function displayCurrentHighlightCount() {
    let countElement = $("#searchCount");
    countElement.text(`${currentIndex + 1}/${highlights.length}`);
}
function getFileText(file) {
    return new Promise((resolve, reject) => {
        var fileType = file.name.split('.').pop().toLowerCase();
        var reader = new FileReader();
        reader.onerror = function () {
            reject('Error reading file.');
        };
        if (fileType === 'xlsx' || fileType === 'xls') {
            reader.onload = function (e) {
                var data = new Uint8Array(e.target.result);
                var workbook = XLSX.read(data, {type: 'array'});
                var sheetName = workbook.SheetNames[0];
                var sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: 1});
                var textContent = sheet.map(row => row.join(' ')).join('\n');
                resolve(textContent);
            };
            reader.readAsArrayBuffer(file);
        } else if (fileType === 'pdf') {
            reader.onload = function (e) {
                var pdfData = new Uint8Array(e.target.result);
                pdfjsLib.getDocument({data: pdfData}).promise.then(function (pdf) {
                    pdf.getPage(1).then(function (page) {
                        page.getTextContent().then(function (textContent) {
                            var text = textContent.items.map(item => item.str).join(' ');
                            resolve(text);
                        }).catch(reject);
                    }).catch(reject);
                }).catch(reject);
            };
            reader.readAsArrayBuffer(file);
        } else if (fileType === 'txt' || fileType === 'html') {
            reader.onload = function (e) {
                if (fileType === 'html') {
                    var htmlContent = $(e.target.result);
                    var textContent = htmlContent.text();
                    resolve(textContent);
                } else {
                    resolve(e.target.result);
                }
            };
            reader.readAsText(file);
        } else {
            reject('Unsupported file type. Please upload a text, PDF, HTML, or Excel file.');
        }
    });
}
async function getAIAttachmentBasedOnQuery(file) {
    var searchWord = $("#aiTypedValue").val();
    if (file) {
        try {
            var test = `<ul class="listItemsViews">`
                    + `<li>`
                    + `<div class="textContent" title="Do you want search mdm in">Do you want search ` + file.name + ` and ` + searchWord + ` in</div>`
                    + `<div class="viewData AILensDisOrEnaClass" style = "flex-wrap:wrap; gap:5px">`
                    + `<div  class="viewButton" onclick="getAIContentBasedOnQuery('Do you want search P_AI_QUERY_ANSWER in','Local Premise','SEARCH','Q','N','` + searchWord + `')" >`
                    + `<span  class = "viewIcon"><img src="" class="aiDefaultLocPrImgClass" ></span><span  class="viewText">Local Premise</span></div>`
                    + `<div  class="viewButton" onclick="getAIPPRResults('PRODUCT','MM_MANAGER','PRODUCT_PROCESSES','FMM_MGR_MATERIAL_SEARCH','PRA','FMM_PPR_MATERIAL_SEARCH','MM_SAP_NEW_REG','` + searchWord + `','PiLog Cloud')" >`
                    + `<span  class = "viewIcon"><img src="" class="aiDefaultPPRImgClass" ></span><span  class="viewText">PiLog Cloud</span></div>`
                    + `<div  class="viewButton" onclick="getAIInternetResults('PRODUCT','` + searchWord + `','Internet')" ><span  class = "viewIcon"><img src="" class="aiDefaultInternetImgClass" ></span><span  class="viewText">Internet</span></div></li></ul>`;
            defaultAITypingBasedOnResponse(test, '', "", "");
        } catch (error) {
            alert('Error reading file: ' + error);
        }
    }
}

let isSearchResultsShown = false;
function aiLensAttachedment(id)

{
    $('#' + id).val('');
    let fileName = event.target.files[0].name;
    let html = '<div class=\"aiLensAttachedmentFileNameDiv\"  tabindex=\"0\">'
            + '<span><img src="images/aieyeLensclick.png/" onclick="showImageAI()" width="20px"  class="attached-file-icon"/></span>'
            + '<span class=\"aiLensAttachedmentFileName\"> ' + fileName + '</span>'
            + '<span class=\"fa fa-times aiLensAttachedmentCrossIcon\" id=\"aiLensAttachedmentCrossIcon\"></span>'
            + '</div>';
    $('#aiLensAttachedmentFile').html(html);
    $('#aiLensAttachedmentCrossIcon').click(function () {
        $('#aiLensAttachedmentFile').html("");
        $('#aiAttachedmentImageUpload').val("");
        $('#aiImageAttachedmentUpload').val('');
    });

    console.log('attachdment file');

    if (!isSearchResultsShown) {
        isSearchResultsShown = true;
        document.addEventListener('keyup', function (event) {
            var searchWord = $("#aiTypedValue").val();
            if (event.key === 'Enter') {
                event.preventDefault();
                if (searchWord == '') {
                    showAITypeSearchResults();
                }
            }
        });
    }
}
function getImageToText(file) {
    return new Promise((resolve, reject) => {
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var formData = new FormData();
                formData.append('file', file); // Append the file, not 'text'
                showLoader();
                $.ajax({
                    url: 'detect-text', // Replace with your server endpoint
                    type: 'POST',
                    data: formData,
                    async: true,
                    cache: false,
                    enctype: 'multipart/form-data',
                    contentType: false,
                    processData: false,
                    success: function (response) {
                        stopLoader();
                        if (!($.isEmptyObject(response))) {
                            resolve(response.text); // Resolve the promise with response
                        } else {
                            reject('Empty response'); // Reject if response is empty
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        stopLoader();
                        reject(errorThrown); // Reject with error message
                    }
                });
            };
            reader.readAsDataURL(file);
        } else {
            reject('No file selected');
        }
    });
}
async function showImageAI(aiLensAttachedmentFileName) {
    var fileValue = $('#aiAttachedmentImageUpload').val();
    var imgValue = $('#aiImageAttachedmentUpload').val();
    if (fileValue != '' && fileValue != undefined && fileValue != null) {   //10-07-1024
        var file = $('#aiAttachedmentImageUpload')[0].files[0];
        var test = await getFileText(file);
        showDialogBoxAI('<div>' + test + '</div>');
    } else if (imgValue != '' && imgValue != undefined && imgValue != null) {
        var file = $('#aiImageAttachedmentUpload')[0].files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                //   var imgHtml = '<img src="' + e.target.result + '" width=\"270px\" alt="Converted Image">';
                var content = '<img src="' + e.target.result + '" width="370px" alt="Uploaded Image">';
                showDialogBoxAI(content);
                //$("#dialog").html(imgHtml);


            };
            reader.readAsDataURL(file);
        }
    }

}

function showDialogBoxAI(html) {
    $("#dialog").html(html);
    $("#dialog").dialog({
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        height: 'auto',
        minHeight: 'auto',
        minWidth: 400,
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
function aiLensSearchBasedVendorReg(id, IsFormUrlFlag, dataObj, aiQueryAns) {
    $("#aiTypedValue").val(aiQueryAns);
    $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>" + aiQueryAns + "</div>");
    $("#aiTypedValue").attr('readonly', true);
    navigateSearchButton(id, IsFormUrlFlag, dataObj);
    setTimeout(function () {
        $("#img_panel").hide();
    }, 1000);

}

function initializeEditModeHandlers(searchWord) {
    console.log(event.target.id);
    var getCurrentEditId = event.target.id;
    var geteditTextId = $("#" + getCurrentEditId).closest('.aiAppendSenderDataClass').find('.appendTextClass').attr('id');
    var getParentid = $("#" + getCurrentEditId).closest('.aiAppendSenderDataClass').attr('id');
//    $("#"+getParentid).addClass('editTextparentClass');
    var getactionButtondivId = $("#" + getCurrentEditId).closest('.aiAppendSenderDataClass').find('.aieditPromptActionButtonsClass').attr('id');
    var editButtonoptionsDiv = "<div class='editButtonoptionsDivclass'><span class='aieditcancelbutton'><button class='aieditcancelbuttonbtn' onclick=\"editedPromptInput('" + searchWord + "','cancel')\">Cancel</button></span><span class='aieditsendbutton'><button class='aieditsendbuttonbtn' onclick=\"editedPromptInput('" + searchWord + "','send')\">Send</button></span>"
    $("#" + geteditTextId).attr("contenteditable", 'true').focus();
    $("#" + geteditTextId).addClass('textBgcolor');
    $("#" + getactionButtondivId).html(editButtonoptionsDiv);
}

function editedPromptInput(actualValue, geteditType) {
    var actionType = geteditType;
    var getCurrentactionButtonId = $(event.target).closest(".aieditPromptActionButtonsClass").attr('id');
    var geteditTextId = $(event.target).closest(".aiAppendSenderDataClass").find(".appendTextClass").attr('id');
    var getParentid = $(event.target).closest(".aiAppendSenderDataClass").attr('id');
//    $("#"+getParentid).removeClass('editTextparentClass');
    $("#" + geteditTextId).attr("contenteditable", "false");
    $("#" + geteditTextId).removeClass("textBgcolor");
    var geteditText = $("#" + geteditTextId).text();
    $("#" + geteditTextId).text(actualValue);
    $("#" + getCurrentactionButtonId).html('');
    if (actionType == 'send') {
        showAITypeSearchResults(geteditText);
    } else {
        console.log("Sending the Edited Text Failed");
    }
}
function downloadAiInfofile(whereCond, searchType, classTerm, domainName) {
    var token = '';
    try {
        token = $('meta[name="_csrf"]').attr('content');
    } catch (es) {
        token = '';
    }
    $("#exportAiInfoData").remove();
    var formStr = '<form id="exportAiInfoData" action="downloadAILensSearchedRecordInfo" method="POST" target="_blank">'
            + '<input type="hidden" name="whereCond" id="whereCond"/>'
            + '<input type="hidden" name="searchType" id="searchType"/>'
            + '<input type="hidden" name="classTerm" id="classTerm"/>'
            + '<input type="hidden" name="domainName" id="domainName"/>'
            + '<input id="_csrf" type="hidden" name="_csrf" value="' + token + '">'
            + '</form>';
    $("#pageBody").append(formStr);
    $("#whereCond").val(whereCond);
    $("#searchType").val(searchType);
    $("#classTerm").val(classTerm);
    $("#domainName").val(domainName);
    $("#exportAiInfoData").submit();
    $("#exportAiInfoData").remove();
}
function getAILensManualMappingData(mappingObjString, itemsString, recordNo, propertyList, aiLensRefDocMappingFlag) {
    var mappingObj = JSON.parse(mappingObjString);

    var htmlDiv = "<div id='aILensManualMappingDataDiv' class='aILensManualMappingMain'></div>";

    var mappedAiPropertiesArray = [];

    var mappedPropertiesArray = [];
    var columnMappingObj = {};
    $("#messagedialog1").html(htmlDiv);
    $("#messagedialog1").addClass("ai-panel-flowchart");
    $("#messagedialog1").dialog({resizable: false,
        modal: true,
        title: (labelObject['Map Properties'] != null ? labelObject['Map Properties'] : 'Map Properties'),
        height: 500,
        minHeight: 'auto',
        width: 860,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Map'] != null ? labelObject['Map'] : 'Map'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("destroy");
                    showLoader();
                    $.ajax({
                        type: "POST",
                        url: 'getAILensMappingObjData',
                        data: {
                            aiLensRefDocMappingFlag: aiLensRefDocMappingFlag,
                            mappingObj: JSON.stringify(mappingObj),
                            columnMappingObjStr: JSON.stringify(columnMappingObj),
                            itemsString: itemsString,
                            recordNo: recordNo,
                        },
                        traditional: true,
                        cache: false,
                        success: function (response) {
                            stopLoader();
                            if (response != null) {
                                var responseObj = JSON.parse(response);
                                var message = responseObj['message'];
                                var flag = responseObj['flag'];
                                var successResult = "";
                                if (flag) {
                                    var resultStr = responseObj['resultStr'];
                                    var resultDataStr = resultStr != null ? resultStr : "";
                                    successResult = "<div id='showAILensUpdatedTableClass' class='showAILensUpdatedTableClass'>" + resultDataStr + "</div>";
                                }
                                var modalObj = {
                                    title: labelObject['Message'] != null ? labelObject['Message'] : 'AI Message',
                                    body: "<div id='successmsg' class='successmsg'>" + message + "</div>" + successResult + ""
                                };
                                var buttonArray = [
                                    {
                                        text: 'OK',
                                        click: function () {
                                        },
                                        isCloseButton: true
                                    },
                                    {
                                        text: 'Cancel',
                                        click: function () {
                                        },
                                        isCloseButton: true
                                    }
                                ];
                                modalObj['buttons'] = buttonArray;
                                createModal("dataDxpSplitterValueNew", modalObj);
                                $(".modal-dialog").addClass("showAILensUpdatePopUpCustomClass");
                            }
                        },
                        error: function (e) {
                            console.log(e);
                            sessionTimeout(e);
                            stopLoader();
                        }
                    });

                }
            }],
        open: function () {

            var aiProperties = Object.keys(mappingObj).map(key => key.toUpperCase());

            var PropertyNameInputs = {};
            var PropertyNameArray = [];
            var inputCount = 0;
            $.each(propertyList, function (i) {

                var propertyname = propertyList[i];
                if (propertyname != null && propertyname != "") {
                    var input = {};
                    input['label'] = propertyname;
                    PropertyNameInputs['input_' + inputCount] = input;
                    inputCount++;
                    PropertyNameArray.push(propertyname);
                }
            });

            var recordPropTitle = "<div>Record Properties</div>";
            var aIPropTitle = "<div>AI Properties</div>";

            var linksData = {};
            var aiPropertyOutputs = {};
            var linkId = 0;
            var maxPropertyNameLength = 0;
            var matchedColumns = [];
            $.each(aiProperties, function (i) {
                var output = {};
                output['label'] = aiProperties[i];
                if (PropertyNameArray.indexOf(aiProperties[i]) > -1) {
                    var linkdata = {};
                    linkdata['fromConnector'] = "output_" + i;
                    linkdata['fromOperator'] = "operator1";
                    linkdata['fromSubConnector'] = 0;
                    linkdata['toConnector'] = "input_" + (PropertyNameArray.indexOf(aiProperties[i]));
                    linkdata['toOperator'] = "operator2";
                    linkdata['toSubConnector'] = 0;
                    linksData[linkId] = linkdata;
                    linkId++;
                    matchedColumns.push(aiProperties[i]);
                }

                maxPropertyNameLength = aiProperties[i].length > maxPropertyNameLength ? aiProperties[i].length : maxPropertyNameLength;

                aiPropertyOutputs['output_' + i] = output;
            })

            var data = {
                operators: {
                    operator1: {
                        top: 20,
                        left: 20,
                        properties: {
                            title: aIPropTitle,
                            inputs: {},
                            outputs: aiPropertyOutputs,
                        }
                    },
                    operator2: {
                        top: 20,
                        left: 500,
                        properties: {
                            title: recordPropTitle,
                            inputs: PropertyNameInputs,
                            outputs: {}
                        }
                    },
                },
                links: {}
            };

            // Apply the plugin on a standard, empty div...
            $('#aILensManualMappingDataDiv').flowchart({
                data: data,
                linkWidth: 2,
                multipleLinksOnOutput: true,
                canUserEditLinks: true,
                canUserMoveOperators: true
            });


            $(".flowchart-operator-connector-label").each(function (i) {
                var linkData = linksData[i];
                var text = $(this).text();
                if (matchedColumns.indexOf(text) > -1) {
                    $(this).css("color", "green");
                } else {
                    $(this).css("color", "red");
                }

            })

            $('#aILensManualMappingDataDiv').flowchart({
                onOperatorMoved: function (operatorId, position) {
                    if (position.top < 0) {
                        var operatorData = $('#aILensManualMappingDataDiv').flowchart('getOperatorData', operatorId);
                        operatorData.top = 20;
                        $('#aILensManualMappingDataDiv').flowchart('setOperatorData', operatorId, operatorData);

                        $(".flowchart-operator-connector-label").show();
                        $(".flowchart-operator").css("width", "250px", "!important");
                        $(".flowchart-operator").css("height", "auto", "!important");
                        $(".flowchart-operator-title").show();
                    }
                    return true;
                },
                onLinkCreate: function (linkId, linkData) {
                    var getdata = $('#aILensManualMappingDataDiv').flowchart('getData');
                    var fromOperator = linkData['fromOperator']
                    var fromConnector = linkData['fromConnector'];
                    var fromOperatorData = $('#aILensManualMappingDataDiv').flowchart('getOperatorData', fromOperator);
                    var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                    mappedAiPropertiesArray.push(label);

                    var toOperator = linkData['toOperator']
                    var toConnector = linkData['toConnector'];
                    var toOperatorData = $('#aILensManualMappingDataDiv').flowchart('getOperatorData', toOperator);
                    var tolabel = toOperatorData['properties']['inputs'][toConnector]['label'];
                    mappedPropertiesArray.push(tolabel);
                    columnMappingObj[label] = tolabel;
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

                    var flowChartData = $('#aILensManualMappingDataDiv').flowchart('getData');
                    var links = flowChartData['links'];
                    var linkData = links[linkId];

                    var toOperator = linkData['toOperator']
                    var toConnector = linkData['toConnector'];
                    var toOperatorData = $('#aILensManualMappingDataDiv').flowchart('getOperatorData', toOperator);
                    var tolabel = toOperatorData['properties']['inputs'][toConnector]['label'];
                    var mappedValueIndex = mappedAiPropertiesArray.indexOf(tolabel);
                    mappedAiPropertiesArray.splice(mappedValueIndex, 1);
                    var mappedLabelIndex = mappedAiPropertiesArray.indexOf(tolabel);
                    mappedAiPropertiesArray.splice(mappedLabelIndex, 1);


                    var fromOperator = linkData['fromOperator']
                    var fromConnector = linkData['fromConnector'];
                    var fromOperatorData = $('#aILensManualMappingDataDiv').flowchart('getOperatorData', fromOperator);
                    var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                    mappedPropertiesArray.splice(mappedValueIndex, 1);

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
                    var linkId = $('#aILensManualMappingDataDiv').flowchart('getSelectedLinkId');

                    return true;
                }
            });


            $(".flowchart-operator-connector-label").show();
            $(".flowchart-operator-connector-label").css("width", maxPropertyNameLength * 10 + "px", "!important");
            $(".flowchart-operator").css("width", "auto", "!important");
            $(".flowchart-operator").css("height", "auto", "!important");
            $(".flowchart-operator-title").show();

            $.each(linksData, function (linkid, linkdata) {
                $('#aILensManualMappingDataDiv').flowchart('addLink', linkdata);
            })
            const $dataDiv = $('#aILensManualMappingDataDiv');
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


            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
            $(this).closest(".ui-dialog").addClass("visionCommonDialog");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $(this).html("");
            $(this).dialog("destroy");
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");

        }
    });

}
//function pdfDataExtractionType() {
//    try {
//        var htmlStr = `
//        <div style="padding: 10px;">
//            <label>
//                <div 
//                    onclick="fetchDataExtractionAI('pdf')"> PDF</div>
//            </label><br>
//            <label>
//                <div
//                    onclick="fetchDataExtractionAI('pdfScanned')"> Scanned PDF
//    </div>
//            </label>
//        </div>
//    `;
//
//        $(event.currentTarget).popover({
//            trigger: "click",
//            html: true,
//            placement: "right",
//            content: function () {
//                return $(`<div class="pdftypeClass">${htmlStr}</div>`);
//            }
//        });
//
//        $(event.currentTarget).popover('show');
//    } catch (e) {
//        console.log(e);
//    }
//}
//function fetchDataExtractionAI(fileType) {
//    var title = $(event.currentTarget).find(".viewText").text();
//    try {
//        $('.popover').popover('dispose');
//    } catch (e) {
//
//    }
//    var acceptance = "";
//    if (title == "Image") {
//        acceptance = "accept='image/png, image/jpeg'";
//    } else {
//        acceptance = "accept='application/pdf'";
//    }
//    var response = "<div id ='treeDMFileId' class ='treeDMFileDivClass'>"
//            + "<div id='visionShowFileUploadMsg'></div>";
//    response += "<input type='file' name='importDMFile' id='importAILensDMFile' style='display:none' " + acceptance + ">";
//    response += "<div class='visionTreeDMFileUploadclass' id='visionTreeDmFileUpload'>";
//    response += "<input type='hidden' id='selectedLensTypeName' value=''>";
//    response += "<input type='hidden' id='selectedTreeType' value=''>";
//    response += "<div id = 'imageDiv' class='imageDivClass'>"
//    response += "<div class='VisionDMUploadFileContent'><h5><img src='images/file-import.png' alt='file-import'><span>Import  File</span></h5></div>";
//    response += "</div>";
//    $("#dialog").html(response);
//    $("#dialog").dialog({resizable: false,
//        title: (labelObject['Upload File'] != null ? labelObject['PDF Extraction'] : 'Upload File'),
//        width: 500,
//        height: 300,
//        fluid: true,
//        dialogClass: "importFileClassids",
//        open: function () {
//            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//            $(this).closest(".ui-dialog").css("z-index", "999");
//            $(".visionHeaderMain").css("z-index", "999999");
//            $(".visionFooterMain").css("z-index", "999999");
//            $("#imageDiv").on('click', function (event) {
//                $("#importAILensDMFile").click();
//            })
//
//            $("#importAILensDMFile").on('change', function (event) {
//                var filetype = $('#selectedLensTypeName').val();
//                console.log("iam in files change ");
//                var files = event.target.files;
//                closeAllDialogsBoxes();
//                var showPromptInput = '<label style="font-weight: bold; color: black; margin-bottom: 5px;">Prompt :</label>' +
//                        '<textarea id="prompText" style="width: 100%; height: 100px; border: 1px solid #ccc; border-radius: 4px; padding: 5px;"></textarea>' +
//                        '<div><span class="prompt-error" style="color: red; font-size: 12px;"></span></div>';
//                $("#dialog").html(showPromptInput);
//                $("#dialog").dialog({resizable: false,
//                    title: (labelObject['Prompt'] != null ? labelObject['Prompt'] : 'Prompt'),
//                    width: 300,
//                    height: 300,
//                    fluid: true,
//                    dialogClass: "prompTextariaClassid",
//                    buttons: [
//                        {
//                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
//                            click: function () {
//                                var promptValue = $("#prompText").val();
//                                if (promptValue) {
//                                    openAINavigation();
//                                    var file = files[0];
//                                    var dataHtml = "";
//                                    if (files[0]['type'] == 'application/pdf') {
//                                        dataHtml = '<div class=\"aiAppendSenderDataClass aiAppendImageUploadDataClass\"  tabindex=\"0\">'
//                                                + '<span><img src="images/ETL_PDFIcon.png/" onclick="showImageAI()" width="20px"  class="attached-file-icon"/></span>'
//                                                + '</div>'
//                                                + '<div class="aiAppendSenderDataClass">'
//                                                + '<div> ' + promptValue + '</div>';
//                                        +'<div class=\"aiLensAttachedmentFileName\"> ' + files[0]['name'] + '</div>'
//                                                + '</div>'
//                                        $(".aiChatgptResponseContainer").append(dataHtml);
//                                        aiAutoScrollContainer();
//                                        closeAllDialogsBoxes();
//                                        accessPermission().then(permission => {
//                                            if (permission) {
//                                                sendFileDataWithPrompt(files[0], promptValue, fileType);
//                                            }
//                                        });
//
//                                    } else {
//                                        if (file) {
//                                            var reader = new FileReader();
//                                            reader.onload = function (e) {
//                                                var imgHtml = '<img src="' + e.target.result + '" width=\"100\" alt="Converted Image">';
//                                                var dataHtml = "<div class='aiAppendSenderDataClass aiAppendImageUploadDataClass'>" + imgHtml + "</div><div class='aiAppendSenderDataClass'> " + promptValue + "</div>";
//                                                $(".aiAppendSenderDataClass").addClass("aiAppendImageUploadDataClass");
//                                                $(".aiChatgptResponseContainer").append(dataHtml);
//                                                aiAutoScrollContainer();
//                                                closeAllDialogsBoxes();
//                                                accessPermission().then(permission => {
//                                                    if (permission) {
//                                                        sendFileDataWithPrompt(files[0], promptValue);
//                                                    }
//                                                });
//                                            };
//                                            reader.readAsDataURL(file);
//                                        }
//                                    }
//
//
//
//                                } else {
//                                    $(".prompt-error").text("Enter the prompt");
//
//                                }
//
//                            }
//                        }
//                    ],
//                    open: function () {
//
//                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                        $(this).closest(".ui-dialog").css("z-index", "999");
//                        $(".visionHeaderMain").css("z-index", "999999");
//                        $(".visionFooterMain").css("z-index", "999999");
//
//
//                    },
//                    beforeClose: function (event, ui)
//                    {
//
//                        $(".visionHeaderMain").css("z-index", "99999");
//                        $(".visionFooterMain").css("z-index", "99999");
//                    }
//
//                })
//            });
//        },
//        beforeClose: function (event, ui)
//        {
//
//            $(".visionHeaderMain").css("z-index", "99999");
//            $(".visionFooterMain").css("z-index", "99999");
//        }
//
//    })
//}
//function aiLensDragAndDropRemoveButton(parentContainer, useImageStyle = true) {
//    const removeButton = document.createElement('span');
//    removeButton.textContent = '×';
//    if (useImageStyle) {
//        removeButton.classList.add("removeButtonImage");
//    } else {
//        removeButton.classList.add("removeButton")
//    }
//    removeButton.addEventListener('click', () => {
//        if (parentContainer) {
//            parentContainer.remove();
//            console.log("Container removed");
//        } else {
//            console.error("Parent container not found");
//        }
//    });
//    return removeButton;
//}
//function aiLensDragAndDropLoadImage(file, aiTypedValue) {
//    const container = document.getElementById(aiTypedValue);
//    if (!container) {
//        console.error("Target container not found");
//        return;
//    }
//    const fileURL = URL.createObjectURL(file);
//    const imgContainer = document.createElement('div');
//    imgContainer.classList.add("imgDragDrop");
//    const img = document.createElement('img');
//    img.src = fileURL;
//    img.classList.add("dragDropImage");
//    const removeButton = createRemoveButton(imgContainer, true);
//    imgContainer.appendChild(img);
//    imgContainer.appendChild(removeButton);
//    container.parentElement.parentElement.appendChild(imgContainer);
//}
//function aiLensDragAndDropLoadFile(file, aiTypedValue) {
//    const container = document.getElementById(aiTypedValue);
//    if (!container) {
//        console.error("Target container not found");
//        return;   
//    }
//    const reader = new FileReader();
//    reader.onload = () => {
//        const fileContainer = document.createElement('div');
//        fileContainer.classList.add("fileContainer");
//        const fileIcon = document.createElement('img');
//        fileIcon.src = 'https://banner2.cleanpng.com/20180410/upe/avgayu1y4.webp';
//        fileIcon.classList.add("fileIcon");
//        const fileName = document.createElement('div');
//        fileName.textContent = file.name;
//        fileName.classList.add("fileName");
//        const removeButton = aiLensDragAndDropRemoveButton(fileContainer, false);
//        fileContainer.appendChild(fileIcon);
//        fileContainer.appendChild(fileName);
//        fileContainer.appendChild(removeButton);
//        container.parentElement.parentElement.appendChild(fileContainer);
//    };
//    reader.readAsDataURL(file);
//}
function createRemoveButton(parentContainer, useImageStyle = true) {
    const removeButton = document.createElement('span');
    removeButton.textContent = '×';
    if (useImageStyle) {
        removeButton.classList.add("removeButtonImage");
    } else {
        removeButton.classList.add("removeButton");
    }
    removeButton.addEventListener('click', () => {
        if (parentContainer) {
            parentContainer.remove();
            console.log("Container removed");
        } else {
            console.error("Parent container not found");
        }
    });
    return removeButton;
}

function loadImage(file) {
    const container = $('#aiTypedValue').get(0);
    if (!container) {
        console.error("Target container not found");
        return;
    }
    const existingImageContainer = document.getElementById('aiImageDragDrop');
    if (existingImageContainer) {
        existingImageContainer.remove();
    }
    const fileURL = URL.createObjectURL(file);
    const imgContainer = document.createElement('div');
    imgContainer.classList.add("imgDragDrop");
    imgContainer.id = "aiImageDragDrop";
    const img = document.createElement('img');
    img.src = fileURL;
    img.classList.add("dragDropImage");
    const removeButton = createRemoveButton(imgContainer, true);
    imgContainer.appendChild(img);
    imgContainer.appendChild(removeButton);
    container.parentElement.parentElement.appendChild(imgContainer);

}

function loadAiDataFile(file) {
    const container = $('#aiTypedValue').get(0);
    if (!container) {
        console.error("Target container not found");
        return;
    }
    $("#aiFileDragDrop").empty();
    const existingFileContainer = document.getElementById('aiFileDragDrop');
    if (existingFileContainer) {
        existingFileContainer.remove();
    }
    const reader = new FileReader();
    reader.onload = () => {
        $(".fileContainer").remove();
        const fileContainer = document.createElement('div');
        fileContainer.id = "aiFileDragDrop";
        fileContainer.classList.add("fileContainer");
        const fileIcon = document.createElement('img');
        fileIcon.src = 'https://banner2.cleanpng.com/20180410/upe/avgayu1y4.webp';
        fileIcon.classList.add("fileIcon");
        const fileName = document.createElement('div');
        fileName.textContent = file.name;
        fileName.classList.add("fileName");
        const removeButton = createRemoveButton(fileContainer, false);
        fileContainer.appendChild(fileIcon);
        fileContainer.appendChild(fileName);
        fileContainer.appendChild(removeButton);
        container.parentElement.parentElement.appendChild(fileContainer);
//        showAITypeSearchResults();
        $(removeButton).on('click', function () {
            $(fileContainer).remove();
            $('.overLoaderAiLensBody').removeClass('overLoaderAiLensBody'); // Remove class
        });
    };

    reader.readAsDataURL(file);

}
async function getAiLensExcelAutoProcess(aiSearchString, data, processType, titleName, aiQueryType) {
//    let agentNo = "10" + Math.floor(Math.random() * 9);
    let agentCode = "DH"
    let agentNo = "007";
    let agentStr = "";
    let domain = $("#currentDomain").val();
    let role = $("#rolehid").val();
    if (domain !== null && domain !== undefined && domain !== "" && domain === 'ASSET') {
        if (role.indexOf("_DH") > -1) {
            agentCode = "DQM-PM";
        } else if (aiQueryType != null && aiQueryType != "" && aiQueryType.indexOf("MOCR") > -1) {
            agentCode = "MOCR";
        }


    } else if (domain !== null && domain !== undefined && domain !== "" && domain === 'PRODUCT') {
        if (role.indexOf("_DH") > -1) {
            agentCode = "DQM-MM";
        }
    } else if (domain !== null && domain !== undefined && domain !== "" && domain === 'SERVICE') {
        if (role.indexOf("_DH") > -1) {
            agentCode = "DQM-SM";
        }
    }

    var randomDigit = "Agent:" + agentCode + "-" + agentNo + "";
    sessionStorage.removeItem("AgentNo");
    sessionStorage.setItem("AgentNo", randomDigit);
    sessionStorage.removeItem("AgentFlag");
    sessionStorage.setItem("AgentFlag", "Y");
    sessionStorage.removeItem("agentCode");
    sessionStorage.setItem("agentCode", agentCode);
    $("#aiTypedValue").val(processType);
    $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>" + titleName + "</div>");
    $("#aiTypedValue").attr('readonly', true);
    $("#aILensAutoDiv").remove();
    $("#aiTypedValue").val("");
    data = sessionStorage.getItem("aiAutoResults");
    if (aiSearchString != null && aiSearchString != undefined && aiSearchString != "" && aiSearchString != "null" && aiSearchString == "manual") {
        defaultAITypingBasedOnResponse(data, '', "", "");
        return;
    }
    $("body").append("<div id='aILensAutoDiv' style='display:none'></div>")
    $("#aILensAutoDiv").html(data);

    let result = "";

    const logMessage = async (message) => {
        const logData = `<div class='aiLensResultDataClass'><div>${message}</div></div>`;
        await defaultAgentAiTypingBasedOnResponse(logData, '', "", "");
    };

    const AiMessage = async (message, processName) => {
        const logData = `<div class='aiLensRobotDataClass' id='${"AI" + processName}'><label><span><b>${randomDigit}</b>${message}</span></label></div>`;
        await defaultAgentAiTypingBasedOnResponse(logData, '', "", "");
    };
    const elements = $("#aILensAutoDiv .viewData div");
    let divElementFlag = false;

    for (let index = 0; index < elements.length; index++) {
        const element = $(elements[index]);
        const text = element.find(".viewText").text() || "";

        if (text.includes("Profiling") || text.includes("De-Duplication")) {
            divElementFlag = true;
//            return;
        }

    }
    if (divElementFlag) {
        const handleAjaxSuccess = (response, processName, callback) => {
            stopLoader();
            stopaiLoader();

            if (!response) {
                logMessage(`Unable to process ${processName}`);
                return;
            }

            if (response.startsWith('Exception::')) {
                logMessage(`Unable to process ${processName}: ${response}`);
            } else {

                if (processName == 'Profiling') {
                    sessionStorage.removeItem("profilingResponse");
                    sessionStorage.setItem("profilingResponse", response);

                    result = '<div class="viewButton" onclick="showAILensIframePopup(\'profilingResponse\', \'' + processName + '\')">' +
                            '<span class="viewIcon"><span class="viewText">View Data</span></span></div>';
                } else {
                    sessionStorage.removeItem("duplicationResponse");
                    sessionStorage.setItem("duplicationResponse", response);
                    result = '<div class="viewButton" onclick="showAILensIframePopup(\'duplicationResponse\', \'' + processName + '\')">' +
                            '<span class="viewIcon"><span class="viewText">View Data</span></span></div>';
                    setTimeout(() => {
                        $("#batchID").val(aiSearchString);
                        processElementsWithClickWait();
                    }, 100);

                }
                setTimeout(function () {
                    $("#AI" + processName).addClass("aiAgentAnimationRemoveClass");
                }, 1000);

                logMessage(`${processName} Process is Completed` + result);
                //logMessage(result);
                callback && callback();
            }
        };

        const executeAjaxCall = (processName, data, url, callback) => {
            showaiLoader();
            $.ajax({
                type: "post",
                url: url,
                cache: false,
                data: data,
                traditional: true,
                dataType: 'html',
                async: true,
                success: (response) => handleAjaxSuccess(response, processName, callback),
                error: (e) => {
                    console.error(e);
                    stopLoader();
                    stopaiLoader();
                    logMessage(`Error during ${processName}`);
                }
            });
        };

        try {

            if (processType == "aiAgent") {

                await aiLensAgentLogOperations("insert", agentNo, randomDigit);
                await aiLensAgentLogOperations("", agentNo, randomDigit);


                await AiMessage(" has assigned for processing the data.")
                await logMessage("Your request has successfully assigned to <b>" + randomDigit + "</b> and is currently being processed. Please wait while the system completes the necessary tasks. You will be notified once the process is complete.");

            } else {
                await logMessage("The Automated data processing has successfully initiated");
            }

            await AiMessage(" has initiated Data profiling process.", "Profiling");
            await logMessage("Data profiling process has successfully initiated. The system is now analyzing and processing the required data.");

            executeAjaxCall("Profiling", {
                gridId: 'MM_AI_MASS_DATA_PROCESS_CREATE',

                columnArray: JSON.stringify(["ERP_NO", "CLASS", "ORIGINAL_LONG_DESC", "UOM", "PLANT", "MATERIAL_TYPE", "MATERIAL_GROUP", "PURCHASING_GROUP", "PLANT_SPTL_MTRL_STATUS", "MRP_TYPE", "MRP_CONTROLLER", "ABC_INDICATOR", "AVAILABILITY_CHECK", "INDUSTRY_SECTOR", "PROFIT_CENTER", "PROCUREMENT_TYPE", "STORAGE_LOCATION", "VALUATION_TYPE", "VALUATION_CATEGORY", "CONTROL_CODE", "PLANNED_DELIVERY_TIME"]),
                batchId: aiSearchString,
                tableName: 'V_DH_PROFILING'
            }, 'getDataProfilingResponse', async () => {


                const batchId = aiSearchString;


                await AiMessage(" has initiated De-Duplication process.", "De-Duplication");
                await logMessage("The De-duplication process has successfully initiated. The system is now identifying duplicate entries to ensure data accuracy.");

                executeAjaxCall("De-Duplication", {aiQuery: "Please proceed to Process the Imported Data 2.De-Duplication", aiQueryAns: "View Details", aiQueryType: "MASSDATAPROCESSCREATE", aiSubQueryFlag: "H", aiSearchString: aiSearchString}, 'getAILensContentFromDB', () => {

                });
            });


        } catch (e) {
            console.error("Unexpected error occurred:", e);
            stopLoader();
            stopaiLoader();
            logMessage(`Unexpected error occurred: ${e.message}`);
        }
    } else {
        $("#batchID").val(aiSearchString);
        processElementsWithClickWait();
    }

}
function showAILensIframePopup(id, tmessage) {
    var result = sessionStorage.getItem(id); // Ensure result is not null

    // Encode result to prevent potential XSS issues
    var safeResult = $("<div>").html(result).html();

    if (tmessage.includes("Profiling")) {
        $("#reasonmessagedialog5").html(
                '<iframe id="dataProfileFormframe" style="width:100%; height:580px;" srcdoc=""></iframe>'
                );
    } else {
        $("#reasonmessagedialog5").html(result);
    }


    closeAINavigation(); // Close AI navigation before showing dialog

    $("#reasonmessagedialog5").dialog({
        resizable: false,
        title: labelObject[tmessage] || tmessage, // Use fallback if labelObject[tmessage] is null
        modal: true,
        height: 550,
        width: 1100,
        fluid: true,
        buttons: [
            {
                text: labelObject["Ok"] || "Ok",
                click: function () {
                    openAINavigation();
                    $(this).empty(); // Use empty() instead of html("")
                    try {
                        $(this).dialog("destroy");
                    } catch (e) {
                        console.error("Error destroying dialog:", e);
                    }
                },
            },
        ],
        open: function () {
            // Find the "Ok" button dynamically to avoid hardcoded index
            $(this)
                    .closest(".ui-dialog")
                    .find(".ui-button:contains('Ok')")
                    .addClass("dialogyes");

            // Ensure visibility of header and footer
            $(".visionHeaderMain, .visionFooterMain").css("z-index", "999");

            // Set iframe content safely
            $("#dataProfileFormframe").attr("srcdoc", safeResult);
        },
        beforeClose: function () {
            openAINavigation();
            $(this).empty(); // Clear content on close
            try {
                $(this).dialog("destroy"); // Destroy is enough, no need for extra close()
            } catch (e) {
                console.error("Error destroying dialog:", e);
            }
            $(".visionHeaderMain, .visionFooterMain").css("z-index", "99999");
        },
    });
}
function showAIGridData(tableName, gridId, batchId, paramColumn) {
    showLoader();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getCloudGrid',
        data: {
            'gridId': gridId,
            roleId: $("#rolehid").val(),
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            closeAllDialogsBoxes();
            $("#dialog").html("<div id='" + gridId + "'></div>");
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                width: 800,
                height: 500,
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
                    var paramArray = [];
                    var paramObj = {}
                    paramObj.column = paramColumn;
                    paramObj.operator = "EQUALS";
                    paramObj.value = batchId;
                    paramArray.push(paramObj);
                    gridConfig(response, 0, paramArray, gridId, batchId);
                    $("#basketNameValId").hide();
                    $(this).closest(".ui-dialog").addClass("visionHeaderMain");
                    $(".visionHeaderMain").css("z-index", "9999");
                    $(".visionFooterMain").css("z-index", "9999");
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
function aiAgentTypingMessage(message) {
    const logData = `<div class='aiLensRobotDataClass'><label><span>${message}</span></label></div>`;
    defaultAgentAiTypingBasedOnResponse(logData, '', "", "");
}
function aiLensAgentLogOperations(operationFlag, aiAgentId, aiAgentName) {
    return new Promise(async (resolve, reject) => {
        try {
            var agentName = "AI" + (aiAgentId);
            agentName = (aiAgentName != null && aiAgentName != undefined && aiAgentName != "") ? aiAgentName : "Agent:DH-007";

            const AiMessage = async (message) => {
                const logData = `<div class='aiLensRobotDataClass'><label><span>${message}</span></label></div>`;
                await defaultAgentAiTypingBasedOnResponse(logData, '', "", "");
            };

            if (operationFlag.includes("insert")) {
                showaiLoader();
                await AiMessage("The appropriate AI agent will be assigned shortly.");
            }

            if (aiAgentId != null && aiAgentId !== "") {
                $.ajax({
                    type: 'POST',
                    dataType: 'html',
                    url: "aiLensAgentLog",
                    cache: false,
                    data: {
                        operationFlag: operationFlag,
                        aiAgentId: aiAgentId,
                        agentName: agentName
                    },
                    success: async function (data, textStatus, jqXHR) {
                        if (data && data.includes("Sucessfully")) {
                            console.log(operationFlag + " completed");
                            resolve("success");
                        } else {
                            await AiMessage("One agent is found. <b>" + agentName + "</b>");
                            resolve("fallback-message-shown");
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log("Error:", textStatus);
                        reject(textStatus);
                    }
                });
            } else {
                resolve("no-agent-id");
            }
        } catch (err) {
            reject(err);
        }
    });
}
function getAIAgentAttachFileBrowserColMapping(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, processName, file, fileName) {

    $("#aiTypedValue").val('');

    var params = {};
    params['gridId'] = gridId;

    if (settimeout != null && settimeout != '' && settimeout != 'undefined' && settimeout != undefined) {

    } else {
        settimeout = '10000';
    }
    var formData = new FormData();
    formData.append("importFile", file, fileName);
    formData.append("gridId", gridId);

    $.ajax({
        url: 'importFileAjaxColMapping',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        settimeout: settimeout,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
            $("#Loader").css({opacity: "0.99", display: "block"});
            $("body").css("pointer-events", "none");
            startAjax(); // Optional: Include your custom start logic
        },
        success: function (result) {
            $("#Loader").css("display", "none");
            $("body").css("pointer-events", "auto");
            endAjax();
//            stopLoader();//30
            $("#Loader").css("display", "none");
            $("body").css("pointer-events", "auto");
            endAjax();
            //var columnDefinitions = $('#' + gridId).jqxGrid('getInstance').columns.records;
            $("#aiFileDragDrop").html("");
            var resultObject = JSON.parse(result);

            //var resultObject = JSON.parse(resultStr);
            var fileHeaders = resultObject['headersArray']
            var filePath = resultObject['filePath']
            var gridTable = resultObject['gridTable']
            var columnLabels = resultObject['columnLabels']
            var datafields = resultObject['datafields']

            var htmlDiv = "<div id='importFileColumnsMapppingOptionsDiv' >"
                    + "<img id='importFileColumnsMapppingInfo' onclick='importColumnMappingAssistant()' src='images/Information_icon_Blue.svg' style='float:right;width:20px;' />"
                    + "</div>"
                    + "<div id='importFileColumnMappingId' class='importFileColumnMappingMain' ></div>";

            var mappedGridColumnsArray = [];
            var mappedGridLabelssArray = [];

            var mappedFileHeadersArray = [];
            var columnMappingObj = {};
//             $("#messagedialog4").html("");
            $("#messagedialog5").html(htmlDiv);
            $("#messagedialog5").addClass("ai-panel-flowchart");
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

                            showLoader();
                            $.ajax({
                                type: "post",
                                traditional: true,
                                dataType: 'html',
                                url: 'importExcelColMapping',
                                cache: false,
                                data: {
                                    tableName: gridTable,
                                    filePath: filePath,
                                    gridId: gridId,
                                    mappedFileHeadersArray: JSON.stringify(mappedFileHeadersArray),
                                    mappedGridColumnsArray: JSON.stringify(mappedGridColumnsArray),
                                    fileHeaders: JSON.stringify(fileHeaders),
                                    columnMappingObjStr: JSON.stringify(columnMappingObj)
                                },
                                success: function (result) {
                                    stopLoader();
                                    var responseObj = JSON.parse(result);
                                    var dialogSplitMessage = responseObj['finalresult'];
                                    var batchNumber = responseObj['batchNumber'];
                                    $("#batchID").val(batchNumber);
                                    var finalresult = responseObj['finalresult'];
                                    var flag = responseObj['flag'];
                                    var rowCount = responseObj['rowCount'];

                                    if (flag) {
                                        var domainString = 'Asset(s).';
                                        if (domain != null && domain != undefined && domain != "" && domain == 'ASSET') {
                                            var filename = resultObject['fileName'];
                                            if (filename != null && filename != undefined && filename != "" &&
                                                    (filename.indexOf("FLOC") > -1 || filename.indexOf("Floc") > -1 || filename.indexOf("floc") > -1)) {
                                                domainString = 'Function Location(s)';
                                            }

                                        } else if (domain != null && domain != undefined && domain != "" && domain == 'PRODUCT') {
                                            domainString = " Material(s).";
                                        } else if (domain != null && domain != undefined && domain != "" && domain == 'SERVICE') {
                                            domainString = " Service(s).";
                                        }
//                                        var logData = "<div class='aiLensResultDataClass' style='width:348px;'>"
                                        var logData = "<div class='aiLensResultDataClass' >"
                                                + "<p class='queryanswerTitle'>" + aiQueryAns + ", In Uploaded Document we found <b>" + rowCount + " " + domainString + "</b></p>"
//                                                + "<p class='queryanswerTitle'>" + aiQueryAns + ", In Uploaded Document we found <b>" + responseObj['PRODUCT'] + " Materials </b> and <b>" + responseObj['ASSET'] + " Assets.</b></p>"
//            + "<div>" + dialogSplitMessage + "</div>"
                                                + "<table class='table table-bordered'>"
                                                + "<tbody>"
                                                + "<tr><td><b>Batch No </b></td><td>" + batchNumber + "</td></tr>"
                                                + "<tr><td><b>Imported Rows </b></td><td>" + rowCount + "</td></tr>"
//                                                + "<tr><td><b>Material Rows </b></td><td>" + responseObj['PRODUCT'] + "</td></tr>"
//                                                + "<tr><td><b>Asset Rows </b></td><td>" + rowCount + "</td></tr>"
                                                + "</tbody>"
                                                + "</table>"
                                                + "</div>"

                                        defaultAITypingBasedOnResponse(logData, '', "", "");
                                        var paramArray = [];
                                        var paramObj = {};
                                        paramObj.column = 'BATCH_ID';
                                        paramObj.value = batchNumber;
                                        paramObj.operator = 'EQUALS';
//                                        paramObj.symbol = '=';
                                        paramObj.selectNum = 1;
                                        paramArray.push(paramObj);
                                        setTimeout(function () {
                                            try {
                                                if (componentType != null && componentType != '' && componentType != 'undefined' && componentType != undefined) {

                                                    if (componentType == 'CLUSTER') {
                                                        getcluster(clusterId, role, domain, 'N', paramArray);
                                                    } else if (componentType == 'NESTEDGRID') {
                                                        $("#dxpGridContent").html("");
                                                        getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'Y');
                                                        try {
                                                            showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', "View Data", 'N');
                                                        } catch (e) {

                                                        }
                                                        $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
                                                        $("#dxpGridTab").attr("data-selectedgridId", gridId);
                                                        $("#dxpGridTab").attr("data-selectedRoleId", role);
                                                        $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
                                                    } else if (componentType == 'GRID') {
                                                        $("#dxpGridContent").html("");
                                                        getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'N');
                                                        try {
                                                            showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', "View Data", 'N');
                                                        } catch (e) {

                                                        }
                                                        $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
                                                        $("#dxpGridTab").attr("data-selectedgridId", gridId);
                                                        $("#dxpGridTab").attr("data-selectedRoleId", role);
                                                        $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
                                                    }

                                                } else {
                                                    $("#dxpGridContent").html("");
                                                    getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'N');
                                                    try {
                                                        showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', "View Data", 'N');
                                                    } catch (e) {

                                                    }
                                                    $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
                                                    $("#dxpGridTab").attr("data-selectedgridId", gridId);
                                                    $("#dxpGridTab").attr("data-selectedRoleId", role);
                                                    $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
                                                }
                                            } catch (e) {
                                            }
                                        }, 2000);

                                        setTimeout(function () {
                                            openAINavigation();
                                            if (!(aiQuery !== null && aiQuery !== "" && aiQuery !== undefined)) {
                                                var agentCode = "FL";
                                                setTimeout(() => {
                                                    AiLensTaskListAutoProcess(fileName, agentCode, gridId, batchNumber);
                                                }, 1000);
                                                return;
                                            }
                                            getAIContentBasedOnQuery(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, batchNumber, '', '', '', '', '', '', '', '', '', '', processName);
                                        }, settimeout);
                                    } else {
//                                        var logData = "<div class='aiLensResultDataClass' style='width:348px;'>"
                                        var logData = "<div class='aiLensResultDataClass' >"
                                                + "<h5>Imported Data</h5>"
                                                + "<div>" + dialogSplitMessage + "</div>"
                                                + "</div>"
                                        defaultAITypingBasedOnResponse(logData, '', "", "");
                                    }
                                },
                                error: function (e) {
                                    console.log(e);
                                    sessionTimeout(e);
                                    stopLoader();
                                }
                            })

                            $(this).html("");
                            $(this).dialog("close");

                        }
                    }],
                open: function () {

                    // var columnDefinitions = $('#' + gridId).jqxGrid('getInstance').columns.records;

                    var columnNameInputs = {};
                    var columnNameArray = [];
                    var inputCount = 0;
                    $.each(columnLabels, function (i) {

                        var columname = columnLabels[i];
                        var datafield = datafields[i];
                        if (columname != null && columname != "" && columname.indexOf("_HIDDEN")) {
                            //gridColumns.push(columname);

                            var input = {};
                            input['label'] = columname;
                            input['value'] = datafield;
                            columnNameInputs['input_' + inputCount] = input;
                            inputCount++;
                            columnNameArray.push(columname);
                        }
                    });

                    var resultObject = JSON.parse(result);
                    var fileHeaders = resultObject['headersArray']
                    var filePath = resultObject['filePath']
                    var fileName = resultObject['fileName']

                    var headersCount = resultObject['headersCount']
                    var fileRowCount = resultObject['fileRowCount']

                    var fileTitle = "<div>File Name : " + fileName + "<br>"
                            + "Columns Count : " + headersCount + "<br>"
                            + "Rows Count : " + fileRowCount + "</div>";


//                    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                    var tableTitle = "<div>Staging Table <br>"
                            + "Columns Count : " + columnNameArray.length + "<br>"
                            + "Rows Count : " + fileRowCount + "</div>";


                    var fileHeaderObject = {};
                    $.each(fileHeaders, function (i) {
                        var header = fileHeaders[i];
                        fileHeaderObject[header] = header;
                    })
                    if (fileHeaders.length > Object.keys(fileHeaderObject).length) {
                        showMesg("Duplicate file headers found. Please change to proceed");
                        $(this).html("");
                        $(this).dialog("close");
                        throw new Error("Duplecate file headers found");
                    }

                    var linksData = {};
                    var fileHeaderOutputs = {};
                    var linkId = 0;
                    var maxHeaderLength = 0;
                    var matchedColumns = [];
                    $.each(fileHeaders, function (i) {
                        var output = {};
                        output['label'] = fileHeaders[i];
                        if (columnNameArray.indexOf(fileHeaders[i]) > -1) {
                            var linkdata = {};
                            linkdata['fromConnector'] = "output_" + i;
                            linkdata['fromOperator'] = "operator1";
                            linkdata['fromSubConnector'] = 0;
                            linkdata['toConnector'] = "input_" + (columnNameArray.indexOf(fileHeaders[i]));
                            linkdata['toOperator'] = "operator2";
                            linkdata['toSubConnector'] = 0;
                            linksData[linkId] = linkdata;
                            linkId++;
                            matchedColumns.push(fileHeaders[i]);
                        }

                        maxHeaderLength = fileHeaders[i].length > maxHeaderLength ? fileHeaders[i].length : maxHeaderLength;

                        fileHeaderOutputs['output_' + i] = output;
                    })

                    var data = {
                        operators: {
                            operator1: {
                                top: 20,
                                left: 20,
                                properties: {
                                    title: fileTitle,
                                    inputs: {},
                                    outputs: fileHeaderOutputs,
                                }
                            },
                            operator2: {
                                top: 20,
                                left: 500,
                                properties: {
                                    title: tableTitle,
                                    inputs: columnNameInputs,
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


                    $(".flowchart-operator-connector-label").each(function (i) {
                        var linkData = linksData[i];
                        var text = $(this).text();
                        if (matchedColumns.indexOf(text) > -1) {
                            $(this).css("color", "green");
                        } else {
                            $(this).css("color", "red");
                        }

                    })

                    $('#importFileColumnMappingId').flowchart({
                        onOperatorMoved: function (operatorId, position) {
                            if (position.top < 0) {
                                var operatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', operatorId);
                                operatorData.top = 20;
                                $('#importFileColumnMappingId').flowchart('setOperatorData', operatorId, operatorData);
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
                            mappedFileHeadersArray.push(label);

                            var toOperator = linkData['toOperator']
                            var toConnector = linkData['toConnector'];
                            var toOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', toOperator);
                            var value = toOperatorData['properties']['inputs'][toConnector]['value'];
                            var tolabel = toOperatorData['properties']['inputs'][toConnector]['label'];
                            mappedGridColumnsArray.push(value);
                            mappedGridLabelssArray.push(tolabel);
                            columnMappingObj[label] = value;
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
                            var mappedValueIndex = mappedGridColumnsArray.indexOf(value);
                            mappedGridColumnsArray.splice(mappedValueIndex, 1);
                            var mappedLabelIndex = mappedGridLabelssArray.indexOf(tolabel);
                            mappedGridLabelssArray.splice(mappedLabelIndex, 1);


                            var fromOperator = linkData['fromOperator']
                            var fromConnector = linkData['fromConnector'];
                            var fromOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', fromOperator);
                            var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                            mappedFileHeadersArray.splice(mappedValueIndex, 1);

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

                    $.each(linksData, function (linkid, linkdata) {
                        $('#importFileColumnMappingId').flowchart('addLink', linkdata);
                    })
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
            try {
//                var $img = $("#" + browseId).next('img');
//                $("#" + browseId).remove();
//                $img.before("<input id='" + browseId + "' type='file' name='importFile' />");
//                $("#" + browseId).hide();

                stopLoader();//27
            } catch (e) {
                stopLoader();//28
            }
        }
        , onCancel: function () {
            $("#Loader").css("display", "none");
            $("body").css("pointer-events", "auto");
//            stopLoader();//29
        }
        //catch()}
    });
}
//ispir ai agent start 12-03-2025
async function validationProcessField(file) {
    let randomId = Math.floor(Math.random() * 1000);
    let agentNo = "007";
    var randomDigit = "Agent:DE-" + agentNo + "";
    const AiMessage = async(message, processName) => {
        const logData = `<div class='aiLensRobotDataClass' id='${"AI" + processName}'><label><span><b>${randomDigit}</b>${message}</span></label></div>`;
        await defaultAgentAiTypingBasedOnResponse(logData, '', "", "");
    };

    $("#aiLensAttachedmentFile").html("");
    $("#aiTypedValue").val("");
    $.ajax({
        type: "POST",
        async: false,
        datatype: "json",
        data: {
            aiRandomId: randomId
        },
        url: "aiLensiSPIRFormData",
        cache: false,

        success: async function (response) {
            stopaiLoader();
            defaultAITypingBasedOnResponse(response, '', "", "");
            $(document).unbind("click").on("click", "#processSubmit" + randomId, async function () {
                let isValid = true;
                $("#processForm select").each(function () {
                    var value = $(this).val().trim();
                    var label = $(this).attr("data-column").trim();
                    var errorSpan = $(this).next(".errormsg");

                    if (!(value != null && value != undefined && value != "") || value.includes("Select")) {
                        isValid = false;
                        errorSpan.text(label + " field is required").css("color", "red");
                    } else {
                        errorSpan.text("");
                    }
                });

                if (isValid) {
                    try {
                        await Promise.all([
                            aiLensAgentLogOperations("insert", agentNo, randomDigit),
                            aiLensAgentLogOperations("", agentNo, randomDigit)
                        ]);
                        await AiMessage(" has assigned for processing the data.", "Processing");
                        await AiMessage(` Your request has successfully been assigned to <b>${randomDigit}</b> and is currently being processed. Please wait while the system completes the necessary tasks. You will be notified once the process is complete.`);
                        processAILensiSPIR(file, "update", "MM_MGR_SPER_REG");


                    } catch (error) {
                        console.error("Error in agent log operations:", error);
                    }
                }
            });

        },
        error: function (xhr, status, error) {
            stopLoader();
            console.error("AJAX Error:", status, error);
            throw new Error(error);
        },
        complete: function () {

        }
    });

}
function processAILensiSPIR(file, operationName, gridId) {
    showaiLoader();
    let url = "";
    getDomaincomponent('PRODUCT', 'MM_MANAGER', 'ISPIR_PROCESSES', 'ISPIR_SEARCH', 'Y', 'iSPIR');
    var selectedDataArray = [];
    const spirData = {
        AUDIT_ID: "",
        CREATE_DATE: new Date(),
        CREATE_USER: "KIRAN_MGR",
        EDIT_DATE: new Date(),
        EDIT_USER: $("#sidebar").attr("data-role"),
        MM_MGR_SPER_REG_HIDDEN: "INSERT",
        REGION: "IN",
        SPIR_COMMENT: "",
        SPIR_CUST_COLUMN5: "",
        SPIR_DESCR: "",
        SPIR_EQUIP_MNFR: "",
        SPIR_EQUIP_MNFR_ID: "",
        SPIR_FUNC_AREA: "",
        SPIR_INSTANCE: "100",
        SPIR_NO: "",
        PROJECT: $("#iSpirProjectAiId").val(),
        SPIR_PLANT: $("#iSpirAiPlantId").val(),
        SPIR_REC_ID: "",
        SPIR_REG_BY: $("#sidebar").attr("data-role"),
        SPIR_STATUS: "SPIR_REGISTERED",
        SPIR_SUPPL_CDE: "",
        boundindex: 0,
        uid: 0,
        uniqueid: "2019-30-30-30-262723",
        visibleindex: 0
    };
    var paramArray = [];
    var paramObj = {}
    paramObj.column = 'SPIR_REC_ID';
    paramObj.operator = "EQUALS";
    paramObj.value = '';
    paramArray.push(paramObj);
    getcluster('MM_SPIR_REG_PROCESS', 'MM_MANAGER', 'PRODUCT', 'N', paramArray);
    selectedDataArray.push(spirData)
    if (selectedDataArray.length != 0) {
        $.ajax({
            type: "POST",
            url: "gridUpdateRecords",
            data: {
                gridJsonData: JSON.stringify(selectedDataArray),
                gridId: gridId,
                tableName: "O_SPIR_ATTACH",
                aiIspirFlag: "Y"
            },
            traditional: true,
            cache: false,
            success: function (result) {
                stopaiLoader()

                if (result != null && result != '' && result != undefined) {
                    var dataStr = result.split(":");
                    $("#spirRecId").remove();
                    if (dataStr.length > 1) {
                        var responsStr = "<span>" + dataStr[0] + "</span>";
                        $("body").append(dataStr[1]);
                        var spirRecId = $("#spirRecId").val();
                    } else {
                        console.error("Invalid format: result does not contain ':'");
                    }
                    var paramArray = [];
                    var paramObj = {}
                    paramObj.column = 'SPIR_REC_ID';
                    paramObj.operator = "EQUALS";
                    paramObj.value = spirRecId;
                    paramArray.push(paramObj);
                    getcluster('MM_SPIR_REG_PROCESS', 'MM_MANAGER', 'PRODUCT', 'N', paramArray);
                    setTimeout(function () {
                        AILensSpirFileUpload(file, selectedDataArray, gridId, "O_SPIR_ATTACH", responsStr);
                    }, 5000)

                }

            },
            error: function (e)
            {
                stopLoader();
                sessionTimeout(e);
            }

        });
    }
}
async function calculateiSPIRCounts(file) {

    return new Promise((resolve, reject) => {


        if (!file) {
            reject("No file selected");
            return;
        }

        const reader = new FileReader();

        reader.onload = function (e) {
            try {

                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, {type: "array"});

                // ✅ Sheet count
                const sheetCount = workbook.SheetNames.length;

                const sheet = workbook.Sheets[workbook.SheetNames[0]];
                const range = XLSX.utils.decode_range(sheet['!ref']);

                let equipmentCount = 0;
                let spareCount = 0;

                const startRow = 13;        // adjust based on your sheet
                const equipmentStartCol = 0;   // Column A
                const equipmentEndCol = 22;    // Column W

                for (let row = startRow; row <= range.e.r; row++) {

                    let rowHasSpare = false;

                    for (let col = equipmentStartCol; col <= equipmentEndCol; col++) {

                        const cellAddress = XLSX.utils.encode_cell({r: row, c: col});
                        const cell = sheet[cellAddress];

                        if (cell && cell.v === 1) {
                            equipmentCount++;
                            rowHasSpare = true;
                        }
                    }

                    if (rowHasSpare) {
                        spareCount++;
                    }
                }

                resolve({
                    fileType: "iSPIR",
                    sheets: sheetCount,
                    equipmentTags: equipmentCount,
                    spares: spareCount
                });

            } catch (error) {
                reject(error);
            }
        };

        reader.onerror = function () {
            reject("Error reading file");
        };

        reader.readAsArrayBuffer(file);
    });
}
async function AILensSpirFileUpload(file, selectedDataArray, gridId, tableName, responsStr) {
    let agentNo = "007";
    var randomDigit = "Agent:DE-" + agentNo + "";
    const AiMessage = async(message, processName) => {
        const logData = `<div class='aiLensRobotDataClass' id='${"AI" + processName}'><label><span><b>${randomDigit}</b></span><span>${message}</span></span></label></div>`;
        await defaultAgentAiTypingBasedOnResponse(logData, '', "", "");
    };
    await AiMessage("Please hold on, the file analysis is currently in progress...");
    var spirRecId = $("#spirRecId").val();
//    var spirNo = $("#spirNo").val();
    var spirNo = '';
    var dataObject = selectedDataArray[0];
    dataObject['SPIR_REC_ID'] = spirRecId;
    dataObject['MM_MGR_SPER_REG_HIDDEN'] = 'UPDATE';
    if (Object.keys(dataObject).length > 0) {
        var secretKey = $('meta[name=keygeneration]').attr("content");

        var basicDataStr = JSON.stringify(dataObject);

        var formData = new FormData();

        if (basicDataStr && basicDataStr !== '{}' && basicDataStr !== 'null') {
            basicDataStr = CryptoJS.AES.encrypt(basicDataStr, secretKey);
            formData.append('basicDataStr', basicDataStr);
        }

        formData.append('importFile', file);
        formData.append('reqType', "SPIR");
        formData.append('gridId', gridId);
        formData.append('selectedGridId', gridId);
        formData.append('tableName', tableName);

        for (let key in dataObject) {
            formData.append(key, dataObject[key]);
        }
        showaiLoader();
        $.ajax({
            url: 'importFile',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: async function (result) {
                stopaiLoader();
                const data = await calculateiSPIRCounts(file);
                const tableHtml = `<span>This file has been identified as SPIR</span>
    <table class='table table-bordered validationrecordInfo'">
        <tbody>
            <tr>
                <td >File Type</td>
                <td>${data.fileType}</td>
            </tr>
            <tr>
                <td >No of Sheets</td>
                <td >${data.sheets}</td>
            </tr>
            <tr>
                <td >No of Equipment Tags</td>
                <td >${data.equipmentTags}</td>
            </tr>
            <tr>
                <td>No of Spares</td>
                <td>${data.spares}</td>
            </tr>
        </tbody>
    </table>
`;

                defaultAITypingBasedOnResponse(tableHtml);
                //$("#aiprocesId").off("click").on("click", function () {
                await AiMessage("System is checking whether you are Authorized for processing to this specific Plant, Project");
                setTimeout(async function () {
                    await AiMessage("Yes, you are Authorized");
                    setTimeout(function () {
                        handleAuthorization(gridId, result);
                    }, 1000)
                }, 1000)
                //}, 10000);


            },
            error: function (xhr, status, error) {
                console.error("Error uploading file: ", error);
                $("#Loader").css("display", "none");
                $("body").css("pointer-events", "auto");
                stopLoader();
            }
        });
    }
}
function AiLensAutoiSPIRProcess(gridId, dataObject, spirNo) {
    var selectedRowDataArray = [];
    var paramArray = [];
    $("#" + gridId).jqxGrid('selectallrows');
    var rowIndexes = $("#" + gridId).jqxGrid('getselectedrowindexes');
    let agentNo = "007";
    var randomDigit = "Agent:DE-" + agentNo + "";
    const AiMessage = (message, id) => {
        const logData = `<div class='aiLensRobotDataClass' ><label><span><b>${randomDigit}</b><span id='${id}'>${message}</span></span></label></div>`;
        defaultAgentAiTypingBasedOnResponse(logData, '', "", "");
    };

    rowIndexes.forEach(index => {
        var rowData = $("#" + gridId).jqxGrid('getrowdata', index);
        if (rowData) {
            selectedRowDataArray.push(rowData);
        }
    });

    console.log(selectedRowDataArray); // This will contain the selected rows' data

    const logMessage = (message) => {
        const logData = `<div class='aiLensResultDataClass'><div>${message}</div>`;
        defaultAITypingBasedOnResponse(logData, '', "", "");
    };

    const handleAjaxSuccess = (response, processName, callback) => {
        stopLoader();
        stopaiLoader();

        if (!response) {
            logMessage(`Unable to process ${processName}`);
            return;
        }

        if (response.startsWith('Exception::')) {
            logMessage(`Unable to process ${processName}: ${response}`);
        } else {
//            if (processName == "Data Validation") {
            var responseobj = JSON.parse(response);
            logMessage(responseobj['message']);
//            } else {
//                const dataArray = response.trim().includes(",") ? response.split(',') : [response];
//                const modifiedLines = dataArray.map(line => line.trim().replace(/^\d+\s*:\s*/, ''));
//                const resultList = modifiedLines.map(item => `<li>${item}</li>`).join('');
//                responseData = `<ul>${resultList}</ul>`;
//                logMessage(responseData);
//            }

            var paramObj = {}
            paramObj.column = 'SPIR_NO';
            paramObj.operator = "EQUALS";
            paramObj.value = spirNo;
            paramArray.push(paramObj);
            logMessage("Quality Check process completed for selected Records of SPIR No:" + spirNo + "");

            getcluster('MM_SPIR_DATA_UPLOAD_PROCESS', 'MM_MANAGER', 'PRODUCT', 'N', paramArray);
            setTimeout(function () {
                //callback && callback();
                var defaultValues = $("#MM_MGR_SPER_VERIFICATION_COMPLETED_defaultValues").val();

                $("#MM_MGR_SPER_VERIFICATION_COMPLETED").jqxGrid('selectallrows');
                var rowIndexes = $("#MM_MGR_SPER_VERIFICATION_COMPLETED").jqxGrid('getselectedrowindexes');

                rowIndexes.forEach(index => {
                    var rowData = $("#MM_MGR_SPER_VERIFICATION_COMPLETED").jqxGrid('getrowdata', index);
                    if (rowData) {
                        selectedRowDataArray.push(rowData);
                    }
                });
                AiMessage(" Staging to Active area process initiated for Imported Records of SPIR No:" + spirNo + "");
                showaiLoader();
                $.ajax({

                    type: "post",
                    url: "saveRecord",
                    cache: false,
                    data: {
                        jsonData: JSON.stringify(selectedRowDataArray),
                        gridId: 'MM_MGR_SPER_VERIFICATION_COMPLETED',
                        panelId: $('#panelId').val(),
                        formId: $('#formId').val(),
                        tableName: $('#tableName').val(),
                        defaultValues: defaultValues,
                        dropVal: "Create"
                    },
                    traditional: true,
                    dataType: 'html',
                    success: function (response) {
                        stopLoader();
                        stopaiLoader();
                        alert("response::::" + response);
                        if (response != null && response != '') {
                            var responseObj = JSON.parse(response);
                            var response1 = labelObject[responseObj['message']];
                            var response1 = responseObj['message'];
                            var response2 = responseObj['resultMessage'];
//                            logMessage(response1);
                            logMessage(response2);

                            logMessage("Staging to Active area process completed for selected Records of SPIR No:" + spirNo + "");
                            setTimeout(() => {
                                AiMessage("Please wait...", "aiEndingId");
                            }, 2000)
                            getcluster('MM_SPIR_PROCESS_COMPLETED', 'MM_MANAGER', 'PRODUCT', 'N', paramArray);
                            setTimeout(() => {

                                $("#aiEndingId").text('Ensuring all operations are completed...');
                                sessionStorage.removeItem("AgentNo");
                                sessionStorage.removeItem("AgentFlag");
                                setTimeout(() => {
                                    $("#aiEndingId").text(' Successfully completed the process.');
//                                aiLensAgentLogOperations("update", agentNo)
                                    sessionStorage.removeItem("AgentNo");
                                    sessionStorage.removeItem("AgentFlag");
                                }, 10000);
                            }, 5000);

                            setTimeout(function () {
                                logMessage("<span>Please view these items in this basket</span>" +
                                        "<div class='viewData AILensDisOrEnaClass' style='display:flex;'>" +
                                        "<div class='viewButton' id='transferViewData'>" +
                                        "<span><span class='viewIcon'></span>Navigate</span>" +
                                        "</div>" +
                                        "</div>");
                                $(document).on("click", "#transferViewData", function () {
                                    getMaterialComponentGrid('GRID', 'MM_TRF_REG_ERP_MGR', 'MM_MANAGER', "");
                                });


                            }, 500)

                        }

                    },
                    error: function (e) {
                        sessionTimeout(e);
                        stopaiLoader();
                    }

                });


            }, 5000)
        }
    };

    const executeAjaxCall = (url, processName, data, gridID, callback) => {
        if (!url) {
            console.error(`Invalid URL for ${processName}`);
            return;
        }

        showaiLoader();
        $.ajax({
            type: "POST",
            url: url,
            cache: false,
            data: data,
            traditional: true,
            dataType: 'html',
            async: true,
            success: (response) => handleAjaxSuccess(response, processName, gridID, callback),
            error: (e) => {
                console.error(`Error during ${processName}:`, e);
                stopLoader();
                stopaiLoader();
                logMessage(`Error during ${processName}`);
            }
        });
    };

    try {

        AiMessage(" Quality Check process initiated for selected Records of SPIR No:" + spirNo + "");
        executeAjaxCall("spirOperation", "Data Validation", {
            selectedRowData: JSON.stringify(selectedRowDataArray),
            gridId: 'MM_MGR_SPER_UPLOAD',
            operationName: 'VALIDATE'
        }, () => {


            executeAjaxCall("spirOperation", "Data Validation", {
                selectedRowData: JSON.stringify(selectedRowDataArray),
                gridId: 'MM_MGR_SPER_VERIFICATION_COMPLETED',
                operationName: 'REGISTER'
            }, () => {



                logMessage("Staging to Active area process completed for Imported Records of SPIR No:" + spirNo + "");
                getcluster('MM_SPIR_PROCESS_COMPLETED', 'MM_MANAGER', 'PRODUCT', 'N', paramArray);



            });



        });

    } catch (e) {
        console.error("Unexpected error:", e);
        stopLoader();
        stopaiLoader();
        logMessage("Unexpected error occurred during processing.");
    }
}

// Function to handle authorization logic
async function handleAuthorization(gridId, result) {
    //$("#aiAuthoriseId").off("click").on("click",function () {
    var spirRecId = $("#spirRecId").val();
    var spirNo = "";
    var paramArray = [];
    var paramObj = {}
    var spirRecId = $("#spirRecId").val();
    paramObj.column = 'SPIR_REC_ID';
    paramObj.operator = "EQUALS";
    paramObj.value = spirRecId;
    paramArray.push(paramObj);
    getcluster('MM_SPIR_REG_PROCESS', 'MM_MANAGER', 'PRODUCT', 'N', paramArray);

    setTimeout(function () {

        var selectedRowDataArray = [];
        var rowData;
        var data = $('#' + gridId).jqxGrid('getrowdata', 0);
        var paramArray = [];
        var paramObj = {}
        paramObj.column = 'SPIR_NO';
        paramObj.operator = "EQUALS";
        paramObj.value = data['SPIR_NO'];
        spirNo = data['SPIR_NO'];
        paramArray.push(paramObj);
        defaultAITypingBasedOnResponse("<span>" + result.replace("processed", "Imported") + "for SPIR No: " + spirNo + "</span>");
        getcluster('MM_SPIR_VERIFICATION_PROCESS', 'MM_MANAGER', 'PRODUCT', 'N', paramArray);

    }, 2000)
    setTimeout(function () {
        getAILensiSPIRAutoHarmonize('Please_proceed_to_Process_the_Imported_Data', 'Auto_Harmonize', 'ISPIRPROCESS', 'N', 'N', 'MM_MGR_SPER_UPLOAD', spirNo, 'getPhythonDHSApiResponse', '{"classparams":[{"apiParamName":"tableName","apiParamType":"F","apiParamValue":"V_MM_ISPIR"},{"apiParamName":"colsArray","apiParamType":"F","apiParamValue":"PART_REF,OBJ_QUAL,LONG_DESC"},{"apiParamName":"colsarry","apiParamType":"F","apiParamValue":"PART_REF,OBJ_QUAL,LONG_DESC"},{"apiParamName":"BATCH_ID","apiParamType":"F","apiParamValue":"B_SEARCH_STRING"},{"apiParamName":"batch_id","apiParamType":"F","apiParamValue":"B_SEARCH_STRING"},{"apiParamName":"analysisType","apiParamType":"F","apiParamValue":"CLASS_ALLOCATION"},{"apiParamName":"accessName","apiParamType":"B","apiParamValue":"IDXPDBNAME"},{"apiParamName":"access_name","apiParamType":"B","apiParamValue":"IDXPDBNAME"},{"apiParamName":"user_name","apiParamType":"B","apiParamValue":"IDXPDBUSERNAME"},{"apiParamName":"password","apiParamType":"B","apiParamValue":"IDXPDBPWD"},{"apiParamName":"host","apiParamType":"B","apiParamValue":"IDXPDBHOST"},{"apiParamName":"port","apiParamType":"B","apiParamValue":"IDXPDBPORT"},{"apiParamName":"update_table","apiParamType":"F","apiParamValue":"STG_ESPIR"},{"apiParamName":"update_columns","apiParamType":"F","apiParamValue":"OBJ_QUAL"},{"apiParamName":"filter_column","apiParamType":"F","apiParamValue":"PART_REF"},{"apiParamName":"apiURL","apiParamType":"B","apiParamValue":"CLASS_ALLOCATION_URL"}],"dataParams":[{"apiParamName":"table_name","apiParamType":"F","apiParamValue":"V_MM_ISPIR"},{"apiParamName":"colsarry","apiParamType":"F","apiParamValue":"PART_REF,OBJ_QUAL,LONG_DESC"},{"apiParamName":"batch_id","apiParamType":"F","apiParamValue":"B_SEARCH_STRING"},{"apiParamName":"access_name","apiParamType":"B","apiParamValue":"IDXPDBNAME"},{"apiParamName":"user_name","apiParamType":"B","apiParamValue":"IDXPDBUSERNAME"},{"apiParamName":"password","apiParamType":"B","apiParamValue":"IDXPDBPWD"},{"apiParamName":"host","apiParamType":"B","apiParamValue":"IDXPDBHOST"},{"apiParamName":"port","apiParamType":"B","apiParamValue":"IDXPDBPORT"},{"apiParamName":"apiURL","apiParamType":"B","apiParamValue":"DATA_EXTRACTION_URL"}],"updateParams":{"updateIds":"DataMapping1,DataMapping2,Characterstics,Reference,Document,FFT","excludeParams":"DataMapping1,DataMapping2,FFT"}}')

    }, 3000)

    // });
}
async function getAILensiSPIRAutoHarmonize(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, gridId, batchId, url, paramArray) {
    var responseData = "";
    let agentNo = "007";
    var randomDigit = "Agent:DE-" + agentNo + "";
    const AiMessage = async (message, processName) => {
        const logData = `<div class='aiLensRobotDataClass' id='${"AI" + processName}'><label><span><span><b><${randomDigit}</b></span>${message}</span></label></div>`;
        await defaultAgentAiTypingBasedOnResponse(logData, '', "", "");
    };

    try {

//         var paramArraystr = paramArray.replace("B_SEARCH_STRING", batchId);
        var paramArraystr = paramArray.replace(/B_SEARCH_STRING/g, batchId);

        var paramObject = JSON.parse(paramArraystr)
        var classparamArray = JSON.stringify(paramObject['classparams']);
        var dataParamArray = JSON.stringify(paramObject['dataParams']);
        var updateParam = JSON.stringify(paramObject['updateParams']);

        if (classparamArray != null && classparamArray != '' && classparamArray != undefined && dataParamArray != null && dataParamArray != '' && dataParamArray != undefined
                && batchId != null && batchId != '' && batchId != 'null' && batchId != undefined) {


            var logData = "<div class='aiLensResultDataClass'>"
                    + "<div>Auto Harmonization process initiated for selected Records of SPIR No: " + batchId + "</div>"
                    + "</div>"
            openAINavigation();
            await AiMessage("Auto Harmonization process initiated for selected Records of SPIR No: " + batchId + "", '', "", "");

            var logData = "<div class='aiLensResultDataClass'>"
                    + "<div>Class Allocation process initiated for selected Records of SPIR No: " + batchId + "</div>"
                    + "</div>"
            await AiMessage("Class Allocation process initiated for selected Records of SPIR No: " + batchId + "", '', "", "");
            showaiLoader();
//            showLoader();
            $.ajax({
                type: "post",
                url: url,
                cache: false,
                data: {
                    paramArray: classparamArray,
                    batchId: batchId
                },
                traditional: true,
                dataType: 'html',
                async: true,
                success: async function (response) {
                    stopLoader();
                    stopaiLoader();
                    if (response != null && response != undefined && response != "") {


                        if (response.startsWith('Exception::')) {
                            var logData = "<div class='aiLensResultDataClass'>"
                                    + "<div>Unable to process Data for Class Allocation</div>"
                                    + "<div>" + response + "</div>"
                                    + "</div>"
                            defaultAITypingBasedOnResponse(logData, '', "", "");
                        } else {
                            if (response.trim().includes(",")) {
                                var dataArray = response.split(',');
                                var modifiedLines = dataArray.map(function (line) {
                                    return line.trim().replace(/^\d+\s*:\s*/, ''); // Removes leading spaces and digits with colon
                                });
                                var resultList = "<ul>";
                                modifiedLines.forEach(item => {
                                    resultList += "<li>" + item + "</li>"
                                });
                                responseData = resultList += "</ul>"

                            } else {
                                responseData = response;
                            }
                            var classonclick = "getAIContentBasedOnQueryPopUp('Class Allocation process completed for iSPIR Imported Records','View Details','ISPIRPROCESS','H','N','" + batchId + "')";
                            var logData = "<div class='aiLensResultDataClass' style='width:348px;'>"
                                    + "<h5>Class Allocation process completed:</h5>"
                                    + "<div>" + responseData + "</div>"
                                    + "<a href='#' class='connectionExplorerBreadCrumb' onclick=\"" + classonclick + "\">View Data</a>"
                                    + "</div>"
                            defaultAITypingBasedOnResponse(logData, '', "", "");
                            if (gridId != null && gridId != undefined && gridId != '') {
                                $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                            }
                            var logData = "<div class='aiLensResultDataClass'>"
                                    + "<div>Data Enrichment process has initiated for selected Records of SPIR No: " + batchId + "</div>"
                                    + "</div>"
                            await AiMessage("Data Enrichment process has initiated for selected Records of SPIR No: " + batchId + "", '', "", "");
                            showaiLoader();
//                            showLoader();
                            $.ajax({
                                type: "post",
                                url: url,
                                cache: false,
                                data: {
                                    paramArray: dataParamArray,
                                    batchId: batchId
                                },
                                traditional: true,
                                dataType: 'html',
                                async: true,
                                success: function (response) {
                                    stopLoader();
                                    stopaiLoader();
                                    if (response != null && response != undefined && response != "") {
                                        if (response.startsWith('Exception::')) {
                                            var logData = "<div class='aiLensResultDataClass'>"
                                                    + "<div>Unable to process Data Extraction</div>"
                                                    + "<div>" + response + "</div>"
                                                    + "</div>"
                                            AiMessage(logData, '', "", "");
                                        } else {
                                            if (response.trim().includes(",")) {
                                                var dataArray = response.split(',');
                                                var modifiedLines = dataArray.map(function (line) {
                                                    return line.trim().replace(/^\d+\s*:\s*/, ''); // Removes leading spaces and digits with colon
                                                });
                                                var resultList = "<ul>";
                                                modifiedLines.forEach(item => {
                                                    resultList += "<li>" + item + "</li>"
                                                });
                                                responseData = resultList += "</ul>"

                                            } else {
                                                responseData = response;
                                            }
                                            var dataonclick = "getAIContentBasedOnQueryPopUp('Data Extraction process completed for iSPIR Imported Records','View Details','ISPIRPROCESS','H','N','" + batchId + "')";
                                            var logData = "<div class='aiLensResultDataClass' style='width:348px;'>"
                                                    + "<h5>Data Enrichment process is completed</h5>"
                                                    + "<div>" + responseData + "</div>"
                                                    //+ "<a href='#' class='connectionExplorerBreadCrumb' onclick=\"" + dataonclick + "\">View Data</a>"
                                                    + "</div>"
                                            defaultAITypingBasedOnResponse(logData, '', "", "");
//                                            var logData = "<div class='aiLensResultDataClass'>"
//                                                    + "<div>Characteristics, Reference, Documentation Data Mapping and Update processes initiated for Imported Records of SPIR No: " + batchId + "</div>"
//                                                    + "</div>"
//                                            defaultAITypingBasedOnResponse(logData, '', "", "");
                                            //showaiLoader();

//                                            var refonclick = "getAIContentBasedOnQueryPopUp('Data Extraction process completed for iSPIR Imported Records','View Details','ISPIRPROCESS','H','N','" + batchId + "')";
//                                            var logData = "<div class='aiLensResultDataClass' style='width:348px;'>"
//                                                    + "<h5>Enrichment process is completed</h5>"
////                                                                        + "<div>" + responseData + "</div>"
//                                                    + "<a href='#' class='connectionExplorerBreadCrumb' onclick=\"" + refonclick + "\">View Data</a>"
//                                                    + "</div>"
//
//                                            setTimeout(function () {
//                                                defaultAITypingBasedOnResponse(logData, '', "", "");
//
//                                            }, 2000);
                                            stopaiLoader();
                                            setTimeout(function () {
                                                AiLensAutoiSPIRProcess('MM_MGR_SPER_UPLOAD', null, batchId);
                                            }, 2500)


                                        }

                                    } else {
                                        stopLoader();
                                        stopaiLoader();
                                        var logData = "<div class='aiLensResultDataClass'>"
                                                + "<div>Unable to process Data Extraction for Imported Records of SPIR No: " + batchId + "</div>"
                                                + "</div>"
                                        AiMessage(logData, '', "", "");
                                    }
                                }, error: function (e) {
//                    sessionTimeout(e);
                                    stopLoader();
                                    stopaiLoader();
                                }
                            });



                        }

                    } else {
                        stopLoader();
                        stopaiLoader();
                        var logData = "<div class='aiLensResultDataClass'>"
                                + "<div>Unable to process Data for Class Allocation for Imported Records of SPIR No: " + batchId + "</div>"
                                + "</div>"
                        defaultAITypingBasedOnResponse(logData, '', "", "");
                    }
                }, error: function (e) {
//                    sessionTimeout(e);
                    stopLoader();
                    stopaiLoader();
                }
            });

        }

    } catch (e) {
        stopLoader();
        stopaiLoader();
    }

}
//ispir ai agent end 12-03-2025
function showFioriGeneralData(fioriFlag) {
//    validWorkflow();
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    if (fioriThemeCheck) {
        try {
            $("#mocrvalidatecount").show();
            $("#registration").html("");
            $("#generalDivId").show();
            $("#timeLineDivcontentId").hide();
            $("#allTabListMainWrapperId .fioriformTabUlListclass").find("li").removeClass("fioriHighlightTab");
            var currentTargetElement = $(event.target).closest("li");
            currentTargetElement.addClass("fioriHighlightTab");
            $(".visionRegisterMaterialTableTab").each(function () {
                $(this).hide(); // Hide each div
            });
        } catch (e) {
            console.log(e);
        }
    }

}
function showFioriTLData(defaultFlag, processColumn, auditId) {
    showLoader();
    var itemsString = $("#itemsstring").val();
    if (defaultFlag != null && defaultFlag != '' && defaultFlag != undefined && defaultFlag == 'Y') {
        let checkbox = $("#cb-switch");
        var fioriThemeCheck = checkbox.is(":checked");
        if (fioriThemeCheck) {
            try {
                $("#registration").html("");
//            $("#generalDivId").show();
                $("#allTabListMainWrapperId .fioriformTabUlListclass").find("li").removeClass("fioriHighlightTab");
                var currentTargetElement = $(event.target).closest("li");
                currentTargetElement.addClass("fioriHighlightTab");
                $(".visionRegisterMaterialTableTab").each(function () {
                    $(this).hide(); // Hide each div
                });
            } catch (e) {
                console.log(e);
            }
        }
    } else if (processColumn != null && processColumn != '' && processColumn != undefined
            && (processColumn == 'STATUS' || processColumn == 'COLUMN_NAME')) {
        $(".viewBtn").removeClass("active");
        $(event.currentTarget).addClass("active");
    }
    $.ajax({

        type: "POST",
        url: 'showFioriTimeLineData',
        dataType: "json",
        data: {
            itemsString: itemsString,
            processColumn: processColumn,
            auditId: auditId,
            defaultFlag: defaultFlag,
        },
        traditional: true,
        cache: false,
        async: false,
        success: function (response) {
            $("#generalDivId").hide();
            if (defaultFlag != null && defaultFlag != '' && defaultFlag != undefined && defaultFlag == 'Y') {
                $("#fioriTimeLinecontainer").show();
                $("#timeLineDivcontentId").show();
                $(".fioriTimeLinecontainer").html(response['dataStr']);
                var rolelist = response['rolelist'];
                var tatHrsList = response['tatHrsList'];
                var tatMinsList = response['tatMinsList'];
                $("#updatesChartIdOne").attr("rolelist", rolelist);
                $("#updatesChartIdOne").attr("tatHrsList", tatHrsList);
                $("#updatesChartIdOne").attr("tatMinsList", tatMinsList);
                aiLensDashBoardCreation('donut', 'updatesChartIdOne', rolelist, tatHrsList, 'TAT(in Hours)');
                aiLensDashBoardCreation('pie', 'updatesChartIdTwo', rolelist, tatMinsList, 'TAT(in Minutes)');
                aiLensDashBoardCreation('lines', 'updatesChartIdThree', rolelist, tatHrsList, tatMinsList, 'TAT(in Hours and Minutes)');
                stopLoader();
            } else if (processColumn != null && processColumn != '' && processColumn != undefined
                    && (processColumn == 'SHOW_DETAIL' || processColumn == 'COLUMN_NAME')) {
                var responseDiv = "<div class=\"showDetailsPopupWrapper\">" + response['dataStr'] + "</div>";
                $("#dialog1").html('');
                $("#dialog1").html(responseDiv);
                $("#dialog1").dialog({
                    resizable: false,
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Audit Details',
                    modal: true,
                    width: 750,
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
                });
                stopLoader();

            } else if (processColumn != null && processColumn != '' && processColumn != undefined
                    && processColumn == 'STATUS') {
                $(".timelineDataMainWrapper").html(response['dataStr']);
                stopLoader();

            }
        },
        error: function (xhr, status, error) {
            // Handle the error case (optional)
        }
    });

}
function showTimeLineCommentsData(status, userName, recordNo, instance, plant) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'showTimeLineCommentsData',
        data: {
            status: status,
            userName: userName,
            recordNo: recordNo,
            instance: instance,
            plant: plant,
        },
        traditional: true,
        cache: false,
        async: false,
        success: function (response) {
            stopLoader();
            if (response != null && response != '' && response != undefined) {
                var responseObj = JSON.parse(response);
                var responseDiv = "<div class=\"commentsPopupWrapper\">" + responseObj['dataStr'] + "</div>";
                $("#dialog1").html('');
                $("#dialog1").html(responseDiv);
                $("#dialog1").dialog({
                    resizable: false,
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Comments',
                    modal: true,
                    width: 600,
                    height: 300,
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
                });

            }
        }
    });
}
//task list operations start


//30-09-2025
async function getAIAgentMutipleFileUploadColMapping(file, fileName, gridId, aiQuery,
        aiQueryAns,
        aiQueryType,
        aiSubQueryFlag,
        aiTypeFlag,
        domain,
        role,
        browseId,
        componentType,
        clusterId,
        settimeout,
        processName) {
    showaiLoader();
    let agentNo = "007";
    var domainStr = "Task List(s)";
    var randomDigit = "Agent:TL-" + agentNo;
    var settimeout = '10000';
    file['name'] = fileName;
    $("#aiLensAttachedmentFile").html("");
    $("#aiTypedValue").val("");
    $('#aiAttachedmentImageUpload').val("");
    $('#aiImageAttachedmentUpload').val("");
    if (file['name'] != null && file['name'] != undefined && file['name'] != "" && file['name'].indexOf(".xlsx") > -1
            && (file['name'].indexOf("Task") > -1 || file['name'].indexOf("task") > -1 || file['name'].indexOf("TASK") > -1
                    || (file['name'].indexOf("TL") > -1 || file['name'].indexOf("tl") > -1))) {

        getDomaincomponent('ASSET', 'PM_MANAGER', 'PM_TL_PROCESSES', 'PM_GENERIC_TL_SEARCH', 'Y', 'Task List');

    } else if (file['name'] != null && file['name'] != undefined && file['name'] != "" && file['name'].indexOf(".xlsx") > -1
            && (file['name'].indexOf("Mass") > -1 || file['name'].indexOf("MASS") > -1 || file['name'].indexOf("mass")) > -1
            && (file['name'].indexOf("CHANGE") > -1 || file['name'].indexOf("change") > -1 || file['name'].indexOf("chng")) > -1
            || file['name'].indexOf("Change") > -1) {
        randomDigit = "Agent:DH-" + agentNo;
        domainStr = "";
        firorMenuPopoverText("Mass Change");
        setTimeout(function () {
            getcluster('PM_MASS_CHNG_PROCESS_CLUSTER', 'PM_MANAGER', 'PRODUCT', 'N');
        }, 500);
    } else if
            (file['name'] != null && file['name'] != undefined && file['name'] != "" && file['name'].indexOf(".xlsx") > -1
                    && (file['name'].indexOf("TASK") > -1 || file['name'].indexOf("Task") > -1 || file['name'].indexOf("task")) > -1
                    && (file['name'].indexOf("CHANGE") > -1 || file['name'].indexOf("change") > -1 || file['name'].indexOf("chng")) > -1
                    || file['name'].indexOf("Change") > -1) {
        setTimeout(function () {
            getcluster('PM_MASS_CHNG_PROCESS_CLUSTER', 'PM_MANAGER', 'PRODUCT', 'N');
        }, 500);
    } else {
        randomDigit = "Agent:DH-" + agentNo;
        if (domain != null && domain != undefined && domain != "" && domain == 'ASSET') {
            domainStr = " Asset(s).";
            var filename = file['name'];
            if (filename != null && filename != undefined && filename != "" &&
                    (filename.indexOf("FLOC") > -1 || filename.indexOf("Floc") > -1 || filename.indexOf("floc") > -1)) {
                domainStr = 'Function Location(s)';
            }
        } else if (domain != null && domain != undefined && domain != "" && domain == 'PRODUCT') {
            domainStr = " Material(s).";
            if (fileName != null && fileName != undefined && fileName != "" &&
                    (fileName.indexOf("Article") > -1 || fileName.indexOf("ARTICLE") > -1 || fileName.indexOf("article") > -1)) {
                domainStr = " Article(s).";
            }

        }
        settimeout = '5000';
        if (componentType == 'GRID') {
            $("#dxpGridContent").show();
            getnestedGrid(gridId, [], 0, 'dxpGridContent', "", 'Y');
            await aiDelay(500);
        }
    }

    const AiMessage = (message, processName) => {
        const logData = `<div class='aiLensRobotDataClass' id='${"AI" + processName}'><label><span><b>${randomDigit}</b></span><span>${message}</span></span></label></div>`;
        defaultAgentAiTypingBasedOnResponse(logData, '', "", "");
    };
    const logMessage = (message) => {
        const logData = `<div class='aiLensResultDataClass'><div>${message}</div></div>`;
        defaultAITypingBasedOnResponse(logData, '', "", "");
    };

    const aiMessages = [
        "Please hold on, the file analysis is in progress.",
        "File with multiple sheets identified.",
        "Reading all sheets one by one.",
        "Please map the columns of the sheet."
    ];

// Log operations first
    if (domainStr === "Task List(s)") {
        await aiLensAgentLogOperations("insert", agentNo, randomDigit);
        await aiLensAgentLogOperations("", agentNo, randomDigit);

        setTimeout(() => {
            AiMessage(" has assigned for processing the data.", randomDigit);
            logMessage("Your request has successfully assigned to <b>" + randomDigit + "</b> and is currently being processed. Please wait while the system completes the necessary tasks. You will be notified once the process is complete.");
        }, 2000);

        aiMessages.forEach((msg, index) => {
            setTimeout(() => {
                AiMessage(msg, randomDigit);
            }, (index + 2) * 3000);
        });
        $("#aiTypedValue").val('');
    }

    var formData = new FormData();
    formData.append("importFile", file, fileName);
    formData.append("gridId", gridId);
    setTimeout(() => {
        showaiLoader();
        $.ajax({
            url: 'importMultiFileAjaxColMapping',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            settimeout: settimeout,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                showaiLoader();
            },
            success: function (result) {
//                stopaiLoader();
                setTimeout(function () {
                    showaiLoader();
                    var multiResultObject = JSON.parse(result);
                    var multiListGridIdArr = multiResultObject['multiListGridId']
                    var columnMappingGlobalObj = {};
                    var mappedFileHeadersObject = {};
                    var mappedGridColumnsObj = {};
                    var fileHeadersObj = {};
                    var gridTable = "";
                    var filePath = "";
                    var htmlDiv = "";
                    for (var key in multiListGridIdArr) {
                        if (multiListGridIdArr.hasOwnProperty(key)) {
                            var gridListId = multiListGridIdArr[key];

                            htmlDiv += "<div id='importFileColumnsMapppingOptionsDiv_" + gridListId + "' >"
                                    + "<img id='importFileColumnsMapppingInfo_" + gridListId + "' onclick='importColumnMappingAssistant()' src='images/Information_icon_Blue.svg' style='float:right;width:20px;' />"
                                    + "</div>"
                                    + "<div id='importFileColumnMappingId_" + gridListId + "' class='' ></div>";

                        }
                    }
                    $("#messagedialog5").html(htmlDiv);
                    $("#messagedialog5").addClass("ai-panel-flowchart multipleMappingsFlowChart");
                    $("#messagedialog5").dialog({resizable: false,
                        modal: true,
                        title: (labelObject['Map Columns'] != null ? labelObject['Map Columns'] : 'Map Columns'),
                        height: 500,
                        minHeight: 'auto',
                        width: 900,
                        maxWidth: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Import'] != null ? labelObject['Import'] : 'Import'),
                                click: function () {
                                    showaiLoader();
                                    $.ajax({
                                        type: "post",
                                        traditional: true,
                                        dataType: 'html',
                                        url: 'importExcelMultiColMapping',
                                        cache: false,
                                        data: {
                                            tableName: gridTable,
                                            filePath: filePath,
                                            gridId: gridId,
                                            mappedFileHeadersArray: JSON.stringify(mappedFileHeadersObject),
                                            mappedGridColumnsArray: JSON.stringify(mappedGridColumnsObj),
                                            fileHeaders: JSON.stringify(fileHeadersObj),
                                            columnMappingObjStr: JSON.stringify(columnMappingGlobalObj)
                                        },
                                        success: async function (result) {
                                            ///stopaiLoader();
                                            showaiLoader();
                                            var responseObj = JSON.parse(result);
                                            var batchNumber = responseObj['batchNumber'];
                                            var resultStr = responseObj['finalresult'];
                                            const resultObjStr = `[${resultStr.replace(/}\s*{/g, '},{')}]`;

                                            const resultObj = JSON.parse(resultObjStr);
                                            showaiLoader();


                                            var tableHtml = '<span>Data imported sucessfully in staging area, In Uploaded Document we found <b>' + resultObj[0]['rowCount'] + '' + domainStr + '</b></span>' +
                                                    '<table class="table table-bordered validationrecordInfo">' +
                                                    '<tbody>' +
                                                    '<tr>' +
                                                    '<td>Batch No</td>' +
                                                    '<td>' + batchNumber + '</td>' +
                                                    '</tr>' +
                                                    '<tr>' +
                                                    '<td>Imported Rows</td>' +
                                                    '<td>' + resultObj[0]['rowCount'] + '</td>' +
                                                    '</tr>' +
//                                                        '<tr>' +
//                                                        '<td>Equipent Rows </td>' +
//                                                        '<td>' + resultObj[0]['rowCount'] + '</td>' +
//                                                        '</tr>' +
                                                    '</tbody>' +
                                                    '</table>';

                                            defaultAITypingBasedOnResponse(tableHtml);

                                            showaiLoader();
                                            stopaiLoader();
                                            $("#batchID").val(batchNumber);
                                            var paramArray = [];
                                            var paramObj = {};
                                            paramObj.column = 'BATCH_ID';
                                            paramObj.value = batchNumber;
                                            paramObj.operator = 'EQUALS';
                                            paramObj.selectNum = 1;
                                            paramArray.push(paramObj);
                                            if (file['name'] != null && file['name'] != undefined && file['name'] != "" && file['name'].indexOf(".xlsx") > -1
                                                    && (file['name'].indexOf("Task") > -1 || file['name'].indexOf("task") > -1 || file['name'].indexOf("TASK") > -1
                                                            || (file['name'].indexOf("TL") > -1 || file['name'].indexOf("tl") > -1))) {
                                                getcluster('PM_TL_MASS_REG_PROCESS_CLUSTER', 'PM_MANAGER', 'PRODUCT', 'N', paramArray);
                                            }
                                            setTimeout(async function () {
                                                if (file['name'] != null && file['name'] != undefined && file['name'] != "" && file['name'].indexOf(".xlsx") > -1
                                                        && (file['name'].indexOf("mass") > -1 || file['name'].indexOf("Mass") > -1)
                                                        && (file['name'].indexOf("CHANGE") > -1 || file['name'].indexOf("change") > -1 || file['name'].indexOf("chng")) > -1
                                                        || file['name'].indexOf("Change") > -1)
                                                {
                                                    let agentCode = "DH";
                                                    stopaiLoader();
                                                    defaultAITypingBasedOnResponse(
                                                            generateAccessData(
                                                                    "Do you want to export characteristic data",
                                                                    "",
                                                                    "getMassChangeTriggerClick('YES', 'finalExport(\\'PM_CHNG_MASS_DATA_PROCESS_CHAR_EXPORT\\')','AiLensTaskListAutoProcess(\\'" + file['name'] + "\\',\\'" + agentCode + "\\',\\'" + gridId + "\\', \\'" + batchNumber + "\\')')",
                                                                    "getMassChangeTriggerClick('NO','AiLensTaskListAutoProcess(\\'" + file['name'] + "\\',\\'" + agentCode + "\\',\\'" + gridId + "\\', \\'" + batchNumber + "\\')')"
                                                                    )
                                                            );

                                                } else if (file['name'] != null && file['name'] != undefined && file['name'] != "" && file['name'].indexOf(".xlsx") > -1
                                                        && (file['name'].indexOf("Task") > -1 || file['name'].indexOf("task") > -1 || file['name'].indexOf("TASK") > -1
                                                                || (file['name'].indexOf("TL") > -1 || file['name'].indexOf("tl") > -1))) {

                                                    AiLensTaskListAutoProcess("", "TL", gridId, batchNumber);

                                                } else {
                                                    try {
                                                        if (componentType != null && componentType != '' && componentType != 'undefined' && componentType != undefined) {

                                                            if (componentType == 'CLUSTER') {
                                                                getcluster(clusterId, role, domain, 'N', paramArray);
                                                            } else if (componentType == 'NESTEDGRID') {
                                                                $("#dxpGridContent").html("");
                                                                getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'Y');
                                                                try {
                                                                    showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', "View Data", 'N');
                                                                } catch (e) {

                                                                }
                                                                $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
                                                                $("#dxpGridTab").attr("data-selectedgridId", gridId);
                                                                $("#dxpGridTab").attr("data-selectedRoleId", role);
                                                                $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
                                                            } else if (componentType == 'GRID') {
                                                                $("#dxpGridContent").html("");
                                                                getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'N');
                                                                try {
                                                                    showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', "View Data", 'N');
                                                                } catch (e) {

                                                                }
                                                                $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
                                                                $("#dxpGridTab").attr("data-selectedgridId", gridId);
                                                                $("#dxpGridTab").attr("data-selectedRoleId", role);
                                                                $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
                                                            }

                                                        } else {
                                                            $("#dxpGridContent").html("");
                                                            getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'N');
                                                            try {
                                                                showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', "View Data", 'N');
                                                            } catch (e) {

                                                            }
                                                            $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
                                                            $("#dxpGridTab").attr("data-selectedgridId", gridId);
                                                            $("#dxpGridTab").attr("data-selectedRoleId", role);
                                                            $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
                                                        }
                                                    } catch (e) {
                                                    }
                                                    await aiDelay(1000);
                                                    openAINavigation();
                                                    getAIContentBasedOnQuery(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, batchNumber, '', '', '', '', '', '', '', '', '', '', processName);

                                                }
                                            }, parseInt(settimeout));


                                        },
                                        error: function (e) {
                                            console.log(e);
                                            sessionTimeout(e);
                                            stopaiLoader();
                                        }
                                    })

                                    $(this).html("");
                                    $(this).dialog("close");
                                }
                            }],
                        open: function () {
                            showaiLoader();
                            for (var flowKey in multiResultObject) {
                                let key = flowKey;
                                if (multiResultObject.hasOwnProperty(key) && key != "multiListGridId") {
                                    var resultObject = multiResultObject[key];
                                    var fileHeaders = resultObject['headersArray']
                                    if (resultObject['filePath'] != null && resultObject['filePath'] != "") {
                                        filePath = resultObject['filePath'];
                                    }
                                    gridTable = resultObject['gridTable'];
                                    var columnLabels = resultObject['columnLabels']
                                    var datafields = resultObject['datafields']
                                    var columnNameInputs = {};
                                    var columnNameArray = [];
                                    var mappedGridColumnsArray = [];
                                    var mappedGridLabelssArray = [];
                                    var mappedFileHeadersArray = [];
                                    mappedGridColumnsObj[key] = mappedGridColumnsArray;
                                    mappedFileHeadersObject[key] = mappedFileHeadersArray;
                                    fileHeadersObj[key] = fileHeaders;
                                    var columnMappingObj = {};
                                    columnMappingGlobalObj[key] = columnMappingObj;
                                    var inputCount = 0;
                                    $.each(columnLabels, function (i) {
                                        var columname = columnLabels[i];
                                        var datafield = datafields[i];
                                        if (columname != null && columname != "" && columname.indexOf("_HIDDEN")) {
                                            //gridColumns.push(columname);

                                            var input = {};
                                            input['label'] = columname;
                                            input['value'] = datafield;
                                            columnNameInputs['input_' + inputCount] = input;
                                            inputCount++;
                                            columnNameArray.push(columname);
                                        }
                                    });

                                    var fileHeaders = resultObject['headersArray']
                                    //var filePath = resultObject['filePath']
                                    var fileName = resultObject['fileName']

                                    var headersCount = resultObject['headersCount']
                                    var fileRowCount = resultObject['fileRowCount']

                                    var fileTitle = "<div>File Name : " + fileName + "<br>"
                                            + "Columns Count : " + headersCount + "<br>"
                                            + "Rows Count : " + fileRowCount + "</div>";
//                    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                                    var tableTitle = "<div>Staging Table <br>"
                                            + "Columns Count : " + columnNameArray.length + "<br>"
                                            + "Rows Count : " + fileRowCount + "</div>";
                                    var fileHeaderObject = {};
                                    $.each(fileHeaders, function (i) {
                                        var header = fileHeaders[i];
                                        fileHeaderObject[header] = header;
                                    })
                                    if (fileHeaders.length > Object.keys(fileHeaderObject).length) {
                                        showMesg("Duplicate file headers found. Please make changes to proceed.");
                                        $(this).html("");
                                        $(this).dialog("close");
                                        throw new Error("Duplicate file headers found.");
                                    }

                                    var linksData = {};
                                    var fileHeaderOutputs = {};
                                    var linkId = 0;
                                    var maxHeaderLength = 0;
                                    var matchedColumns = [];
                                    $.each(fileHeaders, function (i) {
                                        var output = {};
                                        output['label'] = fileHeaders[i];
                                        if (columnNameArray.indexOf(fileHeaders[i]) > -1) {
                                            var linkdata = {};
                                            linkdata['fromConnector'] = "output_" + i;
                                            linkdata['fromOperator'] = "operator1";
                                            linkdata['fromSubConnector'] = 0;
                                            linkdata['toConnector'] = "input_" + (columnNameArray.indexOf(fileHeaders[i]));
                                            linkdata['toOperator'] = "operator2";
                                            linkdata['toSubConnector'] = 0;
                                            linksData[linkId] = linkdata;
                                            linkId++;
                                            matchedColumns.push(fileHeaders[i]);
                                        }

                                        maxHeaderLength = fileHeaders[i].length > maxHeaderLength ? fileHeaders[i].length : maxHeaderLength;
                                        fileHeaderOutputs['output_' + i] = output;
                                    })

                                    var data = {
                                        operators: {
                                            operator1: {
                                                top: 20,
                                                left: 20,
                                                width: 300,
                                                properties: {
                                                    title: fileTitle,
                                                    inputs: {},
                                                    outputs: fileHeaderOutputs,
                                                }
                                            },
                                            operator2: {
                                                top: 20,
                                                left: 500,
                                                width: 300,
                                                properties: {
                                                    title: tableTitle,
                                                    inputs: columnNameInputs,
                                                    outputs: {}
                                                }
                                            },
                                        },
                                        links: {}
                                    };
                                    // Apply the plugin on a standard, empty div...
                                    $('#importFileColumnMappingId_' + key).flowchart({
                                        data: data,
                                        linkWidth: 2,
                                        multipleLinksOnOutput: true,
                                        canUserEditLinks: true,
                                        canUserMoveOperators: true
                                    });
                                    $(".flowchart-operator-connector-label").each(function (i) {
                                        var linkData = linksData[i];
                                        var text = $(this).text();
                                        if (matchedColumns.indexOf(text) > -1) {
                                            $(this).css("color", "green");
                                        } else {
                                            $(this).css("color", "red");
                                        }

                                    })

                                    $('#importFileColumnMappingId_' + key).flowchart({
                                        onOperatorMoved: function (operatorId, position) {
                                            if (position.top < 0) {
                                                var operatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', operatorId);
                                                operatorData.top = 20;
                                                $('#importFileColumnMappingId_' + key).flowchart('setOperatorData', operatorId, operatorData);
                                                $(".flowchart-operator-connector-label").show();
//                                         $(".flowchart-operator-connector-label").show();
                                                $(".flowchart-operator").css("width", "250px", "!important");
                                                $(".flowchart-operator").css("height", "auto", "!important");
                                                $(".flowchart-operator-title").show();
                                            }
                                            return true;
                                        },
                                        onLinkCreate: function (linkId, linkData) {
                                            var getdata = $('#importFileColumnMappingId_' + key).flowchart('getData');
                                            var fromOperator = linkData['fromOperator']
                                            var fromConnector = linkData['fromConnector'];
                                            var fromOperatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', fromOperator);
                                            var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                                            //mappedFileHeadersArray.push(label);
                                            var toOperator = linkData['toOperator']
                                            var toConnector = linkData['toConnector'];
                                            var toOperatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', toOperator);
                                            var value = toOperatorData['properties']['inputs'][toConnector]['value'];
                                            var tolabel = toOperatorData['properties']['inputs'][toConnector]['label'];

                                            if (Array.isArray(mappedFileHeadersObject[key])) {
                                                mappedFileHeadersObject[key].push(label);
                                            }

                                            if (Array.isArray(mappedGridColumnsObj[key])) {
                                                mappedGridColumnsObj[key].push(value);
                                            }

                                            if (columnMappingGlobalObj[key] && typeof columnMappingGlobalObj[key] === "object") {
                                                columnMappingGlobalObj[key][label] = value;
                                            }



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

                                            var flowChartData = $('#importFileColumnMappingId_' + key).flowchart('getData');
                                            var links = flowChartData['links'];
                                            var linkData = links[linkId];
                                            var toOperator = linkData['toOperator']
                                            var toConnector = linkData['toConnector'];
                                            var toOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', toOperator);
                                            var value = toOperatorData['properties']['inputs'][toConnector]['value'];
                                            var tolabel = toOperatorData['properties']['inputs'][toConnector]['label'];
                                            var mappedValueIndex = mappedGridColumnsArray.indexOf(value);
                                            mappedGridColumnsArray.splice(mappedValueIndex, 1);
                                            var mappedLabelIndex = mappedGridLabelssArray.indexOf(tolabel);
                                            mappedGridLabelssArray.splice(mappedLabelIndex, 1);
                                            var fromOperator = linkData['fromOperator']
                                            var fromConnector = linkData['fromConnector'];
                                            var fromOperatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', fromOperator);
                                            var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                                            mappedFileHeadersArray.splice(mappedValueIndex, 1);
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
                                            var linkId = $('#importFileColumnMappingId_' + key).flowchart('getSelectedLinkId');
                                            $('#importFileColumnMappingId_' + key).one('click', function () {
                                                $('#importFileColumnMappingId').flowchart('deleteSelected');
                                            });
                                            return true;
                                        }

                                    });
                                    $(".flowchart-operator-connector-label").show();
//                                    $(".flowchart-operator-connector-label").css("width", maxHeaderLength * 10 + "px", "!important");
                                    $(".flowchart-operator").css("width", "300px", "!important");
                                    $(".flowchart-operator").css("height", "auto", "!important");
                                    $(".flowchart-operator-title").show();
                                    const $outputs = $('#importFileColumnMappingId_' + key).find('.flowchart-operator-outputs');
                                    const $dataDiv = $('#importFileColumnMappingId_' + key);
                                    if ($outputs.children().length > 0) {
                                        const height = $outputs.outerHeight() + 100;
                                        $dataDiv.css('height', height + 'px');
                                    }

                                    $.each(linksData, function (linkid, linkdata) {
                                        $('#importFileColumnMappingId_' + key).flowchart('addLink', linkdata);
                                    })

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
                                    $("#importFileColumnsMapppingInfo_" + key).popover({
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
                                    $("#importFileColumnsMapppingInfo_" + key).on("shown.bs.popover", function () {
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

//                                   
                                }
                            }
                        },
                        beforeClose: function (event, ui)
                        {
                            $(".popover").remove();
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });
                    stopaiLoader();
                }, 10000);

            }, error: function (jqXHR, textStatus, errorThrown) {
                defaultAITypingBasedOnResponse(textStatus);
                stopaiLoader();
            }

            , onCancel: function () {
                $("#Loader").css("display", "none");
                $("body").css("pointer-events", "auto");
//            stopLoader();//29
            }
            //catch()}
        });
    }, aiMessages.length * 1500); // Start AJAX after all messages
}

async function AiLensTaskListAutoProcess(fileName, agentCode, gridId, batchId) {
    return new Promise(async (resolve) => {
        var selectedRowDataArray = [];
        var role = $("#rolehid").val();
        const AiMessage = async (message, id = "") => {
            const logData = `<div class='aiLensRobotDataClass'>
            <label><span><b>Agent:${agentCode}-007 </b></span><span id='${id}'>${message}</span></label>
        </div>`;
            await defaultAgentAiTypingBasedOnResponse(logData, '', "", "");
        };
        $("#" + gridId).jqxGrid('selectallrows');
        var rowIndexes = $("#" + gridId).jqxGrid('getselectedrowindexes');

        rowIndexes.forEach(index => {
            var rowData = $("#" + gridId).jqxGrid('getrowdata', index);
            if (rowData) {
                selectedRowDataArray.push(rowData);
            }
        });

        console.log(selectedRowDataArray);

        const handleAjaxSuccess = async (response, processName, callback) => {
            stopLoader();
            stopaiLoader();

            if (!response) {
                AiMessage(`Unable to process ${processName}`);
                return;
            }

            if (response.startsWith('Exception::')) {
                AiMessage(`Unable to process ${processName}: ${response}`);
            } else {
                if (processName.includes("Quality")) {
                    var result = (labelObject["Please review the comments(Error log)."] != null ?
                            labelObject["Please review the comments(Error log)."] :
                            "Please review the comments(Error log).");
                    $('#' + gridId).jqxGrid('updatebounddata');
                    await AiMessage(result);
                } else {
                    var result = JSON.parse(response);
                    if (fileName !== null && fileName !== "" && fileName !== undefined) {
                        await AiMessage(result['resultMessage']);
                        $('#' + gridId).jqxGrid('updatebounddata');
                        if (!(Array.isArray(result['recordNoList']) && result['recordNoList'].length === 0)) {


                            await AiMessage("Moved Succesfully Record (No)s " + result['recordNoList'].toString());

                            $("#aiTypedValue").blur();
                            await AiMessage("Please check the results of the moved record(s).");
                            if (fileName != null && fileName != undefined && fileName != "" && fileName.indexOf(".xlsx") > -1
                                    && (fileName.indexOf("mass") > -1 || fileName.indexOf("Mass") > -1)
                                    && (fileName.indexOf("CHANGE") > -1 || fileName.indexOf("change") > -1 || fileName.indexOf("chng")) > -1
                                    || fileName.indexOf("Change") > -1)
                            {

                                workflowBasketTabs('PM_EQUIPMENT_MGR_PENDING_TAB', 'PM_EQUIPMENT_PENDING_REQUEST', 'PM_MANAGER')

                                getMaterialComponentResults('TAB', 'PM_EQUIPMENT_PENDING_CHNG_MGR_TAB', 'PM_MANAGER', null);

                                await AiMessage("mass change processing completed.");
                                stopaiLoader();
                                return;

                            }
                            if ((fileName.indexOf("FLOC") > -1 || fileName.indexOf("Floc") > -1 || fileName.indexOf("floc") > -1) && (fileName.indexOf("Create") > -1
                                    || fileName.indexOf("CREATE") > -1)) {
                                if (role != null && role != '' && role != undefined && role == 'PM_MANAGER') {
                                    workflowBasketTabs('PM_FLOC_MGR_PENDING_TAB', 'PM_FLOC_PENDING_REQUEST', role);
                                } else {
                                    workflowBasketTabs('PM_FLOC_REQ_PENDING_TAB', 'PM_FLOC_PENDING_REQUEST', 'PM_REQUESTOR')
                                }

                                await AiMessage("Mass Floc processing completed.");
                                stopaiLoader();
                                return;
                            }
                            if ((fileName.indexOf("FLOC") > -1 || fileName.indexOf("Floc") > -1 || fileName.indexOf("floc") > -1) && (fileName.indexOf("Change") > -1
                                    || fileName.indexOf("CHANGE") > -1)) {
                                if (role != null && role != '' && role != undefined && role == 'PM_MANAGER') {
                                    workflowBasketTabs('PM_FLOC_MGR_PENDING_TAB', 'PM_FLOC_PENDING_REQUEST', role);
                                } else {
                                    workflowBasketTabs('PM_FLOC_REQ_PENDING_TAB', 'PM_FLOC_PENDING_REQUEST', 'PM_REQUESTOR')
                                }
                                await AiMessage("Mass Floc processing completed.");
                                stopaiLoader();
                                return;
                            }

                            workflowBasketTabs('PM_TASK_LIST_MGR_PENDING_TAB', 'PM_TL__PENDING_REQUEST', 'PM_MANAGER');
                            if (gridId != null && gridId != undefined && gridId != "" && (gridId.indexOf("CHANGE") > -1
                                    || (gridId.indexOf("CHNG") > -1))) {
                                getMaterialComponentResults('TAB', 'PM_TASK_LIST_PENDING_CHNG_MGR_TAB', 'PM_MANAGER', null);
                            }

                            await AiMessage("Task list mass processing completed.");


                        }
                    } else {
                        var responseData = "";
                        var aiQueryType = "Data Process (Staging to Active Area)";
                        var viewname = "Staging to Active Area";
                        var title = "Staging to Active Area";
                        if (result !== null && !jQuery.isEmptyObject(result)) {
                            var recordNoList = result['recordNoList'];
                            localStorage.setItem("recordNoList", recordNoList);
                            var resultMessage = result['resultMessage'];
                            responseData = resultMessage;
                        }

                        var dataViewonclick1 = "getAIContentBasedOnQueryPopUp('Data " + title + " process completed Processed Data','View Details', '" + aiQueryType + "','H','N','" + batchId + "')";
                        var dataViewonclick2 = "getAIContentBasedOnQueryPopUp('Data " + title + " process completed Failed Data','View Details','" + aiQueryType + "','H','N','" + batchId + "')";
//                    var logData = "<div class='aiLensResultDataClass' style='width:348px;height:200px; overflow:auto'>"
                        var logData = "<div class='aiLensResultDataClass'>"
                                + "<p class='queryanswerTitle'>Data " + viewname + " process completed</p>";
                        logData = logData + "<div>" + responseData + "</div>"
                                + "<div><a href='#' class='connectionExplorerBreadCrumb' onclick=\"" + dataViewonclick1 + "\">View " + viewname + " Processed Records</a></div>"
                                + "<div><a href='#' class='connectionExplorerBreadCrumb' onclick=\"" + dataViewonclick2 + "\">View " + viewname + " Failed Records</a></div>"
                        if (recordNoList != null && recordNoList != undefined && recordNoList != "") {
                            logData = logData + "<div>Record No(s): " + recordNoList + "</div>";
                        }
                        logData = logData + "</div>";
                        defaultAITypingBasedOnResponse(logData, '', "", "");
                        $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                        resolve(true);
                    }
                }
                showaiLoader();
                if (processName.includes("Quality")) {
                    if (callback)
                        await defaultAgentAiTypingBasedOnResponse(generateAccessData("Do you want process to Staging Area to Active area", "aiTaskListProcess"));
                    stopaiLoader();
                    $(document).on('click', '#aiTaskListProcess', function () {
                        callback();
                    });


                } else {
                    stopaiLoader();
                    if (callback)
                        callback();
                }
            }
        };

        const executeAjaxCall = (url, processName, data, callback) => {
            if (!url) {
                console.error(`Invalid URL for ${processName}`);
                return;
            }

            showaiLoader();
            $.ajax({
                type: "POST",
                url: url,
                cache: false,
                data: data,
                traditional: true,
                dataType: 'html',
                async: true,
                success: (response) => handleAjaxSuccess(response, processName, callback),
                error: (e) => {
                    console.error(`Error during ${processName}:`, e);
                    stopLoader();
                    stopaiLoader();
                    AiMessage(`Error during ${processName}`);
                }
            });
        };

        try {
            var tableName = $('#tableName').val();
            var defaultValues = $("#defaultValues").val();
            var panelId = $('#panelId').val();
            var formId = $('#formId').val();

            await AiMessage("Data processing initiated.");
            await AiMessage(`Quality Check process initiated for ${selectedRowDataArray.length} record(s).`);

            executeAjaxCall("massValidateData", "Quality Check", {
                jsonData: JSON.stringify(selectedRowDataArray),
                tableName: tableName,
                gridId: gridId,
                batchId: batchId
            }, async () => {
                await AiMessage(`Staging to Active area process initiated for ${selectedRowDataArray.length} record(s).`);
                executeAjaxCall("massSaveRecord", "Move the data from Staging to Active area", {
                    jsonData: JSON.stringify(selectedRowDataArray),
                    defaultValues: defaultValues,
                    formId: formId,
                    tableName: tableName,
                    gridId: gridId,
                    panelId: panelId,
                    batchId: batchId
                }, async () => {
                    await AiMessage("Data processing completed.");
                    stopaiLoader();
                });
            });

        } catch (e) {
            console.error("Unexpected error:", e);
            stopLoader();
            stopaiLoader();
            logMessage("Unexpected error occurred during processing.");
        }
    });
}
async function AiLensTaskListAutoProcess(fileName, agentCode, gridId, batchId) {
    var selectedRowDataArray = [];
    var role = $("#rolehid").val();
    const AiMessage = async (message, id = "") => {
        const logData = `<div class='aiLensRobotDataClass'>
            <label><span><b>Agent:${agentCode}-007 </b></span><span id='${id}'>${message}</span></label>
        </div>`;
        await defaultAgentAiTypingBasedOnResponse(logData, '', "", "");
    };
    $("#" + gridId).jqxGrid('selectallrows');
    var rowIndexes = $("#" + gridId).jqxGrid('getselectedrowindexes');

    rowIndexes.forEach(index => {
        var rowData = $("#" + gridId).jqxGrid('getrowdata', index);
        if (rowData) {
            selectedRowDataArray.push(rowData);
        }
    });

    console.log(selectedRowDataArray);

    const handleAjaxSuccess = async (response, processName, callback) => {
        stopLoader();
        stopaiLoader();

        if (!response) {
            AiMessage(`Unable to process ${processName}`);
            return;
        }

        if (response.startsWith('Exception::')) {
            AiMessage(`Unable to process ${processName}: ${response}`);
        } else {
            if (processName.includes("Quality")) {
                var result = (labelObject["Please review the comments(Error log)."] != null ?
                        labelObject["Please review the comments(Error log)."] :
                        "Please review the comments(Error log).");
                $('#' + gridId).jqxGrid('updatebounddata');
                await AiMessage(result);
            } else {
                var result = JSON.parse(response);
                await AiMessage(result['resultMessage']);
                $('#' + gridId).jqxGrid('updatebounddata');
                if (!(Array.isArray(result['recordNoList']) && result['recordNoList'].length === 0)) {


                    await AiMessage("Moved Succesfully Record (No)s " + result['recordNoList'].toString());

                    $("#aiTypedValue").blur();
                    await AiMessage("Please check the results of the moved record(s).");
                    if (fileName != null && fileName != undefined && fileName != "" && fileName.indexOf(".xlsx") > -1
                            && (fileName.indexOf("mass") > -1 || fileName.indexOf("Mass") > -1)
                            && (fileName.indexOf("CHANGE") > -1 || fileName.indexOf("change") > -1 || fileName.indexOf("chng")) > -1
                            || fileName.indexOf("Change") > -1)
                    {

                        workflowBasketTabs('PM_EQUIPMENT_MGR_PENDING_TAB', 'PM_EQUIPMENT_PENDING_REQUEST', 'PM_MANAGER')

                        getMaterialComponentResults('TAB', 'PM_EQUIPMENT_PENDING_CHNG_MGR_TAB', 'PM_MANAGER', null);

                        await AiMessage("mass change processing completed.");
                        stopaiLoader();
                        return;

                    }
                    if ((fileName.indexOf("FLOC") > -1 || fileName.indexOf("Floc") > -1 || fileName.indexOf("floc") > -1) && (fileName.indexOf("Create") > -1
                            || fileName.indexOf("CREATE") > -1)) {
                        if (role != null && role != '' && role != undefined && role == 'PM_MANAGER') {
                            workflowBasketTabs('PM_FLOC_MGR_PENDING_TAB', 'PM_FLOC_PENDING_REQUEST', role);
                        } else {
                            workflowBasketTabs('PM_FLOC_REQ_PENDING_TAB', 'PM_FLOC_PENDING_REQUEST', 'PM_REQUESTOR')
                        }

                        await AiMessage("Mass Floc processing completed.");
                        stopaiLoader();
                        return;
                    }
                    if ((fileName.indexOf("FLOC") > -1 || fileName.indexOf("Floc") > -1 || fileName.indexOf("floc") > -1) && (fileName.indexOf("Change") > -1
                            || fileName.indexOf("CHANGE") > -1)) {
                        if (role != null && role != '' && role != undefined && role == 'PM_MANAGER') {
                            workflowBasketTabs('PM_FLOC_MGR_PENDING_TAB', 'PM_FLOC_PENDING_REQUEST', role);
                        } else {
                            workflowBasketTabs('PM_FLOC_REQ_PENDING_TAB', 'PM_FLOC_PENDING_REQUEST', 'PM_REQUESTOR')
                        }
                        await AiMessage("Mass Floc processing completed.");
                        stopaiLoader();
                        return;
                    }

                    workflowBasketTabs('PM_TASK_LIST_MGR_PENDING_TAB', 'PM_TL__PENDING_REQUEST', 'PM_MANAGER');
                    if (gridId != null && gridId != undefined && gridId != "" && (gridId.indexOf("CHANGE") > -1
                            || (gridId.indexOf("CHNG") > -1))) {
                        getMaterialComponentResults('TAB', 'PM_TASK_LIST_PENDING_CHNG_MGR_TAB', 'PM_MANAGER', null);
                    }

                    await AiMessage("Task list mass processing completed.");


                }
            }
            showaiLoader();
            if (processName.includes("Quality")) {
                if (callback)
                    await defaultAgentAiTypingBasedOnResponse(generateAccessData("Do you want process to Staging Area to Active area", "aiTaskListProcess"));
                stopaiLoader();
                $(document).on('click', '#aiTaskListProcess', function () {
                    callback();
                });


            } else {
                stopaiLoader();
                if (callback)
                    callback();
            }
        }
    };

    const executeAjaxCall = (url, processName, data, callback) => {
        if (!url) {
            console.error(`Invalid URL for ${processName}`);
            return;
        }

        showaiLoader();
        $.ajax({
            type: "POST",
            url: url,
            cache: false,
            data: data,
            traditional: true,
            dataType: 'html',
            async: true,
            success: (response) => handleAjaxSuccess(response, processName, callback),
            error: (e) => {
                console.error(`Error during ${processName}:`, e);
                stopLoader();
                stopaiLoader();
                AiMessage(`Error during ${processName}`);
            }
        });
    };

    try {
        var tableName = $('#tableName').val();
        var defaultValues = $("#defaultValues").val();
        var panelId = $('#panelId').val();
        var formId = $('#formId').val();

        await AiMessage("Data processing initiated.");
        await AiMessage(`Quality Check process initiated for ${selectedRowDataArray.length} record(s).`);

        executeAjaxCall("massValidateData", "Quality Check", {
            jsonData: JSON.stringify(selectedRowDataArray),
            tableName: tableName,
            gridId: gridId,
            batchId: batchId
        }, async () => {
            await AiMessage(`Staging to Active area process initiated for ${selectedRowDataArray.length} record(s).`);
            executeAjaxCall("massSaveRecord", "Move the data from Staging to Active area", {
                jsonData: JSON.stringify(selectedRowDataArray),
                defaultValues: defaultValues,
                formId: formId,
                tableName: tableName,
                gridId: gridId,
                panelId: panelId,
                batchId: batchId
            }, async () => {
                await AiMessage("Data processing completed.");
                stopaiLoader();
            });
        });

    } catch (e) {
        console.error("Unexpected error:", e);
        stopLoader();
        stopaiLoader();
        logMessage("Unexpected error occurred during processing.");
    }
}
function fetchDataExtractionAI(fileType, aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, clickedTitle, aiExcelFlag) {
    var title = $(event.currentTarget).find(".viewText").text();
    let randomId = Math.floor(Math.random() * 1000000);
    $("#currentGridId").val(gridId);
    try {
        $('.popover').popover('dispose');
    } catch (e) {

    }
    var acceptance = "";
    if (title == "Image") {
        acceptance = "accept='image/png, image/jpeg'";
    } else {
        acceptance = "accept='application/pdf'";
    }

    var htmlStr = "<input type='file' name='importDMFile' id='importAILensDMFile' style='display:none' " + acceptance + ">";
    $("#importAILensDMFile").remove();
    $("body").append(htmlStr);
    $("#importAILensDMFile").click();
    $("#importAILensDMFile").on('change', function (event) {
        console.log("iam in files change ");
        var files = event.target.files;
        closeAllDialogsBoxes();
        let showPromptInput = `<ul class="listItemsViews">
                <li><div class="viewButton">Please Enter the prompt to extract</div></li>
                <li><div id="mainAiFilterInputdiv" class="ui5gridfilter-inputFeildDiv">  
                    <span id="inputDependSearch" class="ui5gridinputFeildSpan"> 
                        <textarea id="prompText${randomId}" class="ui5gridsearch-input ui5gridform-control" style="width:325px;"></textarea>

                    </span>
                      <span class="prompt-error" style="color: red; font-size: 12px;"></span>
                    
                </div></li>
            </ul>
                <button id='promptSubmitId${randomId}'>Submit</button>
            `;

        defaultAITypingBasedOnResponse(showPromptInput);
        $(document).one("click", "#promptSubmitId" + randomId + "", function () {
            let promptValue = $("#prompText" + randomId).val();
            if (promptValue) {
                openAINavigation();
                var file = files[0];
                var dataHtml = "";
                if (files[0]['type'] == 'application/pdf') {
                    dataHtml = '<div class=\"aiAppendSenderDataClass aiAppendImageUploadDataClass\"  tabindex=\"0\">'
                            + '<span><img src="images/ETL_PDFIcon.png/" onclick="showImageAI()" width="20px"  class="attached-file-icon"/></span>'
                            + '</div>'
                            + '<div class="aiAppendSenderDataClass">'
                            + '<div> ' + promptValue + '</div>';
                    +'<div class=\"aiLensAttachedmentFileName\"> ' + files[0]['name'] + '</div>'
                            + '</div>'
                    $(".aiChatgptResponseContainer").append(dataHtml);
                    aiAutoScrollContainer();
                    closeAllDialogsBoxes();

                    if (aiExcelFlag !== null && aiExcelFlag !== "" && aiExcelFlag !== undefined && aiExcelFlag === "Y") {
                        aiLensBytesFileUpload(files[0], promptValue, fileType, aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, clickedTitle);
                    } else if (fileType != null && fileType !== "" && fileType !== undefined && fileType === "pdfFileUpload") {
                        sendFileExtractDataWithPrompt(files[0], promptValue, fileType, aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, clickedTitle, aiExcelFlag);
                    } else {
                        sendFileDataWithPrompt(files[0], promptValue, fileType, aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, clickedTitle, aiExcelFlag);
                    }
                } else {
                    if (file) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            var imgHtml = '<img src="' + e.target.result + '" width=\"100\" alt="Converted Image">';
                            var dataHtml = "<div class='aiAppendSenderDataClass aiAppendImageUploadDataClass'>" + imgHtml + "</div><div class='aiAppendSenderDataClass'> " + promptValue + "</div>";
                            $(".aiAppendSenderDataClass").addClass("aiAppendImageUploadDataClass");
                            $(".aiChatgptResponseContainer").append(dataHtml);
                            aiAutoScrollContainer();
                            closeAllDialogsBoxes();
                            if (aiExcelFlag !== null && aiExcelFlag !== "" && aiExcelFlag !== undefined && aiExcelFlag === "Y") {
                                aiLensBytesFileUpload(files[0], promptValue, fileType, aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, clickedTitle);
                            } else {
                                sendFileDataWithPrompt(files[0], promptValue, fileType, aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, clickedTitle, aiExcelFlag);
                            }

                        };
                        reader.readAsDataURL(file);
                    }
                }



            } else {
                $(".prompt-error").text("Enter the prompt");

            }


        });


    });



}
function pdfDataExtractionType(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, clickedTitle, aiExcelFlag) {
    try {
        //            <label>
//                <div 
//                    onclick="fetchDataExtractionAI('pdf', '${aiQuery}', '${aiQueryAns}', '${aiQueryType}', '${aiSubQueryFlag}', '${aiTypeFlag}', '${domain}', '${role}', '${browseId}', '${gridId}', '${componentType}', '${clusterId}', '${settimeout}', '${clickedTitle}','${aiExcelFlag}')"> PDF</div>
//            </label><br>
        var htmlStr = `
        <div style="padding: 10px;">
            <label>
                <div
                    onclick="fetchDataExtractionAI('pdfScanned','${aiQuery}', '${aiQueryAns}', '${aiQueryType}', '${aiSubQueryFlag}', '${aiTypeFlag}', '${domain}', '${role}', '${browseId}', '${gridId}', '${componentType}', '${clusterId}', '${settimeout}', '${clickedTitle}','${aiExcelFlag}')"> Scanned PDF
    </div>
            </label>
        <label>
                <div
                    onclick="fetchDataExtractionAI('pdfFileUpload','${aiQuery}', '${aiQueryAns}', '${aiQueryType}', '${aiSubQueryFlag}', '${aiTypeFlag}', '${domain}', '${role}', '${browseId}', '${gridId}', '${componentType}', '${clusterId}', '${settimeout}', '${clickedTitle}','N')"> Scanned Multi-PDF
    </div>
            </label>
        </div>
    `;

        $(event.currentTarget).popover({
            trigger: "click",
            html: true,
            placement: "right",
            content: function () {
                return $(`<div class="pdftypeClass">${htmlStr}</div>`);
            }
        });

        $(event.currentTarget).popover('show');
    } catch (e) {
        console.log(e);
    }
}
//30-09-2025
//30-09-2025 NEW FUN START
async function aiDelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function aiLensBulksubmitRequest(gridId, controlType, recordOpenFlag, formRecordNo, formId, panelId) {

    return new Promise(async (resolve) => {
        var paramArray = [];
        var paramObj = {};
        paramObj.column = 'CUSTOM_COLUMN14';
        paramObj.value = $("#batchID").val();
        paramObj.operator = 'EQUALS';
//                                        paramObj.symbol = '=';
        paramObj.selectNum = 1;
        paramArray.push(paramObj);
        getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'Y');
        var agentNo = sessionStorage.getItem("AgentNo");
        const AiMessage = async (message, id) => {
            const AiData = `<div class='aiLensRobotDataClass' id='${id}'><label><span><b>${agentNo}</b></span><span>${message}</span></label></div>`;
            await defaultAgentAiTypingBasedOnResponse(AiData, '', "", "");
        };
        await AiMessage("has intiated Data Transfer process.");
        aiDelay(1000);
        $('#' + gridId).jqxGrid('selectallrows');
        var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
        var selectedDataArray = [];
        var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
        alert(JSON.stringify(selectedrowindexes));
        if (selectedrowindexes.length != 0) {
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
                    data['panelId'] = $("#panelId").val();
                    data['objectid'] = $("#formId").val();
                    data['formId'] = $("#formId").val();
                    var hiddenObjStr = $("#hiddenObj").val();
                    if (hiddenObjStr != null) {
                        var hiddenObj = JSON.parse(hiddenObjStr);
                        for (var key in hiddenObj) {
                            var value = hiddenObj[key];
                            if (value != null && value != '' && value != 'null') {
                                if (key != null && key.lastIndexOf("HIDDEN") > -1) {
                                    var columnsArray = value.split(",");
                                    var hiddenIds = key.split("HIDDEN_");
                                    var hiddenVal = data[hiddenIds[1]];
                                    for (var j = 0; j < columnsArray.length; j++) {
                                        data[columnsArray[j]] = hiddenVal;
                                        //                                                    data[columnsArray[j]] = encodeURIComponent(hiddenVal);
                                    }
                                }
                            } else {
//alert("Value is null");
                            }
                        }
                    }
                    selectedDataArray.push(data);
                    $("#bomLinkErpNo").remove();
                    $("body").append("<input id='bomLinkErpNo' type='hidden'/>");
                    $("#bomLinkErpNo").val(data['ERP_NO']);

                }

            }
        }

        showaiLoader();
        $.ajax({
            type: "post",
            url: "bulkRegSubmit",
            cache: false,
            data: {'jsonData': JSON.stringify(selectedDataArray),
                'controlType': controlType,
                'formId': formId,
                'panelId': panelId,
                gridId: gridId,
                recordOpenFlag: recordOpenFlag,
                formRecordNo: formRecordNo


            },
            traditional: true,
            dataType: 'html',
            success: function (response) {
                stopaiLoader();
                var jsonObj = JSON.parse(response);
                var message = jsonObj.Message;
                defaultAITypingBasedOnResponse(message);
                resolve(true);
            },

            error: function (e) {
                stopLoader();
                resolve(false);
                sessionTimeout(e);
            }

        });
    });
}
function aichangeDomainAutoProcess(gridId, domain, role, componentType, searchId, subscriptionflag, title, aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag) {
    return new Promise(async (resolve) => {
        let update = aiLensAssetUpdatedata('bomLinkErpNo');
        if (update) {
            getDomaincomponent(domain, role, componentType, searchId, subscriptionflag, title);
            aiDelay(1000);
            $("#dxpGridContent").html("");
            $("#dxpHomeContent").hide();
            var paramArray = [];
            var paramObj = {};
            paramObj.column = 'BATCH_ID';
            paramObj.value = $("#batchID").val();
            paramObj.operator = 'EQUALS';
            var paramObj1 = {};
            paramObj1.column = 'DOMAIN';
            paramObj1.value = domain;
            paramObj1.operator = 'EQUALS';
            paramObj1.selectNum = 1;
            paramArray.push(paramObj);
            paramArray.push(paramObj1);
            getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'Y');
            await aiDelay(10000);
            let process = await AiLensTaskListAutoProcess('', 'DH', gridId, $("#batchID").val());
            if (process) {
                resolve(true);
            }

        }

    });
}

function aiLensBytesFileUpload(files, promptValue, fileType, aiQuery,
        aiQueryAns,
        aiQueryType,
        aiSubQueryFlag,
        aiTypeFlag,
        domain,
        role,
        browseId,
        gridId,
        componentType,
        clusterId,
        settimeout,
        clickedTitle) {
    try {

        showaiLoader();
        aiAutoScrollContainer();
        const csrfToken = $("meta[name='_csrf']").attr("content");

        var pdfFileData = new FormData();
        pdfFileData.append("pdfData", files);
        pdfFileData.append("prompt", promptValue);

        $.ajax({
            url: 'extractExcelFileData',
            type: "POST",
            headers: {
                'X-XSRF-TOKEN': csrfToken // Add CSRF token
            },
            data: pdfFileData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (response, textStatus, xhr) {
                stopaiLoader();
                const file = response;
                $('#sendUrlDataButton').prop('disabled', false);

                const contentDisposition = xhr.getResponseHeader('Content-Disposition');
                let filename = 'extractedFile.xlsx';

                if (contentDisposition) {
                    const matches = contentDisposition.match(/filename="(.+)"/);
                    if (matches && matches[1]) {
                        filename = matches[1];
                    }
                }
                getAIAgentMutipleFileUploadColMapping(file, filename, gridId, aiQuery,
                        aiQueryAns,
                        aiQueryType,
                        aiSubQueryFlag,
                        aiTypeFlag,
                        domain,
                        role,
                        browseId,
                        componentType,
                        clusterId,
                        settimeout,
                        clickedTitle);


            },
            error: function (xhr, textStatus, errorThrown) {
                stopaiLoader();
                $('#sendUrlDataButton').prop('disabled', false);

                $(".aiChatgptResponseContainer").append(
                        `<div class='aiAppendSenderDataClass userSelectedOption'>Error: ${xhr.statusText || errorThrown}</div>`
                        );
            }
        });
    } catch (error) {
        $(".aiChatgptResponseContainer").append(
                `<div class='aiAppendSenderDataClass userSelectedOption'>An error occurred: ${error.message}</div>`
                );
        $('#sendUrlDataButton').prop('disabled', false);
    }
}
//30-09-2025 NEW FUN END



//async function AiLensTaskListAutoProcess(fileName, agentCode, gridId, batchId) {
//    var selectedRowDataArray = [];
//    var role = $("#rolehid").val();
//    const AiMessage = async (message, id = "") => {
//        const logData = `<div class='aiLensRobotDataClass'>
//            <label><span><b>Agent:${agentCode}-007 </b></span><span id='${id}'>${message}</span></label>
//        </div>`;
//        await defaultAgentAiTypingBasedOnResponse(logData, '', "", "");
//    };
//    $("#" + gridId).jqxGrid('selectallrows');
//    var rowIndexes = $("#" + gridId).jqxGrid('getselectedrowindexes');
//
//    rowIndexes.forEach(index => {
//        var rowData = $("#" + gridId).jqxGrid('getrowdata', index);
//        if (rowData) {
//            selectedRowDataArray.push(rowData);
//        }
//    });
//
//    console.log(selectedRowDataArray);
//
//    const handleAjaxSuccess = async (response, processName, callback) => {
//        stopLoader();
//        stopaiLoader();
//
//        if (!response) {
//            AiMessage(`Unable to process ${processName}`);
//            return;
//        }
//
//        if (response.startsWith('Exception::')) {
//            AiMessage(`Unable to process ${processName}: ${response}`);
//        } else {
//            if (processName.includes("Quality")) {
//                var result = (labelObject["Please review the comments(Error log)."] != null ?
//                        labelObject["Please review the comments(Error log)."] :
//                        "Please review the comments(Error log).");
//                $('#' + gridId).jqxGrid('updatebounddata');
//                await AiMessage(result);
//            } else {
//                var result = JSON.parse(response);
//                await AiMessage(result['resultMessage']);
//                $('#' + gridId).jqxGrid('updatebounddata');
//                if (!(Array.isArray(result['recordNoList']) && result['recordNoList'].length === 0)) {
//
//
//                    await AiMessage("Moved Succesfully Record (No)s " + result['recordNoList'].toString());
//
//                    $("#aiTypedValue").blur();
//                    await AiMessage("Please check the results of the moved record(s).");
//                    if (fileName != null && fileName != undefined && fileName != "" && fileName.indexOf(".xlsx") > -1
//                            && (fileName.indexOf("mass") > -1 || fileName.indexOf("Mass") > -1)
//                            && (fileName.indexOf("CHANGE") > -1 || fileName.indexOf("change") > -1 || fileName.indexOf("chng")) > -1
//                            || fileName.indexOf("Change") > -1)
//                    {
//
//                        workflowBasketTabs('PM_EQUIPMENT_MGR_PENDING_TAB', 'PM_EQUIPMENT_PENDING_REQUEST', 'PM_MANAGER')
//
//                        getMaterialComponentResults('TAB', 'PM_EQUIPMENT_PENDING_CHNG_MGR_TAB', 'PM_MANAGER', null);
//
//                        await AiMessage("mass change processing completed.");
//                        stopaiLoader();
//                        return;
//
//                    }
//                    if ((fileName.indexOf("FLOC") > -1 || fileName.indexOf("Floc") > -1 || fileName.indexOf("floc") > -1) && (fileName.indexOf("Create") > -1
//                            || fileName.indexOf("CREATE") > -1)) {
//                        if (role != null && role != '' && role != undefined && role == 'PM_MANAGER') {
//                            workflowBasketTabs('PM_FLOC_MGR_PENDING_TAB', 'PM_FLOC_PENDING_REQUEST', role);
//                        } else {
//                            workflowBasketTabs('PM_FLOC_REQ_PENDING_TAB', 'PM_FLOC_PENDING_REQUEST', 'PM_REQUESTOR')
//                        }
//
//                        await AiMessage("Mass Floc processing completed.");
//                        stopaiLoader();
//                        return;
//                    }
//                    if ((fileName.indexOf("FLOC") > -1 || fileName.indexOf("Floc") > -1 || fileName.indexOf("floc") > -1) && (fileName.indexOf("Change") > -1
//                            || fileName.indexOf("CHANGE") > -1)) {
//                        if (role != null && role != '' && role != undefined && role == 'PM_MANAGER') {
//                            workflowBasketTabs('PM_FLOC_MGR_PENDING_TAB', 'PM_FLOC_PENDING_REQUEST', role);
//                        } else {
//                            workflowBasketTabs('PM_FLOC_REQ_PENDING_TAB', 'PM_FLOC_PENDING_REQUEST', 'PM_REQUESTOR')
//                        }
//                        await AiMessage("Mass Floc processing completed.");
//                        stopaiLoader();
//                        return;
//                    }
//
//                    workflowBasketTabs('PM_TASK_LIST_MGR_PENDING_TAB', 'PM_TL__PENDING_REQUEST', 'PM_MANAGER');
//                    if (gridId != null && gridId != undefined && gridId != "" && (gridId.indexOf("CHANGE") > -1
//                            || (gridId.indexOf("CHNG") > -1))) {
//                        getMaterialComponentResults('TAB', 'PM_TASK_LIST_PENDING_CHNG_MGR_TAB', 'PM_MANAGER', null);
//                    }
//
//                    await AiMessage("Task list mass processing completed.");
//
//
//                }
//            }
//            showaiLoader();
//            if (processName.includes("Quality")) {
//                if (callback)
//                    await defaultAgentAiTypingBasedOnResponse(generateAccessData("Do you want process to Staging Area to Active area", "aiTaskListProcess"));
//                stopaiLoader();
//                $(document).on('click', '#aiTaskListProcess', function () {
//                    callback();
//                });
//
//
//            } else {
//                stopaiLoader();
//                if (callback)
//                    callback();
//            }
//        }
//    };
//
//    const executeAjaxCall = (url, processName, data, callback) => {
//        if (!url) {
//            console.error(`Invalid URL for ${processName}`);
//            return;
//        }
//
//        showaiLoader();
//        $.ajax({
//            type: "POST",
//            url: url,
//            cache: false,
//            data: data,
//            traditional: true,
//            dataType: 'html',
//            async: true,
//            success: (response) => handleAjaxSuccess(response, processName, callback),
//            error: (e) => {
//                console.error(`Error during ${processName}:`, e);
//                stopLoader();
//                stopaiLoader();
//                AiMessage(`Error during ${processName}`);
//            }
//        });
//    };
//
//    try {
//        var tableName = $('#tableName').val();
//        var defaultValues = $("#defaultValues").val();
//        var panelId = $('#panelId').val();
//        var formId = $('#formId').val();
//
//        await AiMessage("Data processing initiated.");
//        await AiMessage(`Quality Check process initiated for ${selectedRowDataArray.length} record(s).`);
//
//        executeAjaxCall("massValidateData", "Quality Check", {
//            jsonData: JSON.stringify(selectedRowDataArray),
//            tableName: tableName,
//            gridId: gridId,
//            batchId: batchId
//        }, async () => {
//            await AiMessage(`Staging to Active area process initiated for ${selectedRowDataArray.length} record(s).`);
//            executeAjaxCall("massSaveRecord", "Move the data from Staging to Active area", {
//                jsonData: JSON.stringify(selectedRowDataArray),
//                defaultValues: defaultValues,
//                formId: formId,
//                tableName: tableName,
//                gridId: gridId,
//                panelId: panelId,
//                batchId: batchId
//            }, async () => {
//                await AiMessage("Data processing completed.");
//                stopaiLoader();
//            });
//        });
//
//    } catch (e) {
//        console.error("Unexpected error:", e);
//        stopLoader();
//        stopaiLoader();
//        logMessage("Unexpected error occurred during processing.");
//    }
//}

function generateAccessData(message, id, yesonclickStr, noOnclickStr) {
    return `
        <div class='aiLensResultDataClass'>
            <div>${message}</div>
            <div class="viewData AILensDisOrEnaClass" style='display:flex;'>
                <div class="viewButton" id="${id}" onclick="${yesonclickStr}">
                    <span><span class="viewIcon"><img src="" class="aiDefaultYesImgClass"></span> Yes</span>
                </div>
                <div class="viewButton" onclick="${noOnclickStr}" style='margin-left:15px;'>
                    <span><span class="viewIcon"><img src="" class="aiDefaultNoImgClass"></span> No</span>
                </div>
            </div>
        </div>`;
}
// Queue for AI messages
let aiMessageQueue = [];
let isProcessingQueue = false;

// Process messages with delay
function processAiMessageQueue(delay = 1000) {
    if (isProcessingQueue || aiMessageQueue.length === 0)
        return;

    isProcessingQueue = true;

    const showNextMessage = async () => {
        if (aiMessageQueue.length === 0) {
            isProcessingQueue = false;
            return;
        }

        var {message, id, agentCode} = aiMessageQueue.shift();
        agentCode = agentCode != null && agentCode != undefined && agentCode != "" ? agentCode : "TL";
        const logData = `<div class='aiLensRobotDataClass'>
            <label><span><b>Agent:${agentCode}-007 </b></span><span id='${id}'>${message}</span></label>
        </div>`;
        await defaultAgentAiTypingBasedOnResponse(logData, '', "", "");

        setTimeout(showNextMessage, delay);
    };

    showNextMessage();
}

// Function to queue AI messages with optional ID


//task list operations end

function defaultAgentAiTypingBasedOnResponse(response, aiAgentFlag) {
    try {

        return new Promise((resolve) => {
            var dataObj = {};
            const notificationJson = [];
            dataObj['id'] = 1;
            dataObj['notif'] = response;
            notificationJson.push(dataObj);

            const notificationStrings = notificationJson.map((elem) => elem.notif);

            $(".typed-cursor").hide();
            $("#pauseResponsingID").show(1000);
            $('#stopResponsingID').show(1000);
            $('#stopResponsingID').addClass("stopAgentRespModify");
            let totalMessages = notificationJson.length;
            let completedMessages = 0;

            animateListItem(0);

            function animateListItem(index) {
                const $cont = $(".aicontentArea");
                if (index < notificationJson.length) {
                    const showAgentImage = aiAgentFlag !== "N";
                    const listItem = $(`<div class='airesponseWrapperDiv${aiResultBoxCount} aiLensReceiverImgClass' 
                                      data-id='${notificationJson[index].id}${aiResultBoxCount}' 
                                      style="display: flex; align-items: flex-start; margin: 15px 0;">
                                      <div class='aiLensMainResultBoxClass' id='aiLensMainResultBoxClass'>
                                      <div class='aiAgentAiLensPromptMainClass'>${showAgentImage ? `
                                      <div class='aiAgentImgClass'><img src="images/aiAgent.png" alt="AI Agent" 
                                      style="height: 30px;"></div>` : ``}<div class='listItemsText'></div></div></div></div>`);
                    $(".aiChatgptResponseContainer").append(listItem);
                    let targetTextNode = listItem.find('.listItemsText')[0];
                    let lastScrollHeight = $cont[0].scrollHeight;

                    const scrollObserver = new MutationObserver(function (mutations) {
                        let currentScrollHeight = $cont[0].scrollHeight;

                        // Only scroll if the height has INCREASED (meaning a new line was added)
                        if (currentScrollHeight > lastScrollHeight) {
                            $cont.scrollTop(currentScrollHeight);
                            lastScrollHeight = currentScrollHeight; // Update the tracker
                        }
                    });

                    // Start observing the target text node for changes
                    if (targetTextNode) {
                        scrollObserver.observe(targetTextNode, {
                            childList: true, // Watch for new HTML tags (like <br>)
                            subtree: true, // Watch nested elements
                            characterData: true // Watch for text content changes
                        });
                    }

                    const typed = new Typed(targetTextNode, {
                        strings: [notificationStrings[index]],
                        typeSpeed: 20,
                        onComplete: function () {
                            console.log('Animation completed for', notificationJson[index].id);
                            aiAutoScrollContainer();
                            $(".typed-cursor").hide();
                            $("#aiTypedValue").attr('readonly', false);
                            $(`#aiResulBoxCopyClassId${aiResultBoxCount}`).click(function () {
                                aiResponseCopy();
                            });
                            aiResultBoxCount++;
                            completedMessages++;

                            if (completedMessages === totalMessages) {
                                scrollObserver.disconnect();
                                $cont.scrollTop($cont[0].scrollHeight);
                                $('#stopResponsingID').hide();
                                $('#stopResponsingID').removeClass("stopAgentRespModify");
                                resolve(); // Resolve the promise once all messages are done
                            }
                            animateListItem(index + 1); // Continue with the next message
                        }
                    });

                    $('#stopResponsingID').click(function () {
                        typed.stop();
                        $("#aiTypedValue").removeAttr("readonly");
                        $('#stopResponsingID').hide();
                        resolve(); // Resolve immediately if stop is clicked
                    });
                }
            }
        });
    } catch (e) {
        console.error("Error in defaultAgentAiTypingBasedOnResponse:", e);
    }
}
function getPannelData() {
    return new Promise((resolve, reject) => {
        try {
            let panalData = {};
            $("#mat_creation_form_table :input").each(function () {
                let textid = $(this).attr("id");
                let type = $(this).attr("type");
                let textval = $(this).val();
                if (type !== 'hidden') {
                    if (textval) {
                        textval = textval.toUpperCase();
                    }
                }
                if (type === 'checkbox') {
                    textval = $("#" + textid).is(':checked') ? "Y" : "N";
                }
                if (textid && textid !== 'CREATE_DATE' && textid !== 'CREATE_BY') {
                    panalData[textid] = textval;
                }
                if (textid && textid.includes("HIDDEN")) {
                    let columnNames = $("#" + textid).val();
                    let columnsArray = columnNames.split(",");
                    let hiddenIds = textid.split("HIDDEN_");
                    let hiddenVal = $("#" + hiddenIds[1]).val();
                    if (hiddenVal)
                        hiddenVal = hiddenVal.toUpperCase();
                    columnsArray.forEach(col => {
                        panalData[col] = hiddenVal;
                    });
                }
            });
            $(".visionRegisterMaterialCreation :input").each(function () {
                try {
                    let textid = $(this).attr("id");
                    let textval = $(this).val();
                    delete panalData[textid];
                    panalData[textid] = textval;
                } catch (e) {
                    console.error(e);
                }
            });
            if (panalData['type'] === 'RE-EVALUATION') {
                panalData['RE_EVALUATION_IND'] = 'Y';
                panalData['SOURCE'] = 'CREATE';
            }
            resolve(panalData);
        } catch (err) {
            reject(err);
        }
    });
}
function aiLensIpactAnalysisAgent(showOpenDocsinAILensFlag, agentDataObj) {
    var agentName = "Agent:IA-007";
    const AiMessage = (message) => {
        const logData = `<div class='aiLensRobotDataClass'><label><span>${message}</span></label></div>`;
        defaultAgentAiTypingBasedOnResponse(logData, '', "", "");
    };
    showaiLoader();
    AiMessage("Please wait...The appropriate <b>Impact Analysis(IA)</b> AI Agent will be assigned shortly.");
    stopaiLoader();

    setTimeout(function () {
        showaiLoader();
        AiMessage(" One agent is found. <b>" + agentName + "<b>");
        stopaiLoader();
    }, 2000);

    setTimeout(function () {
        showaiLoader();
        AiMessage(" <b>" + agentName + "</b> was successfully initiated and is displaying the " + agentDataObj['Title'] + ".");
        stopaiLoader();
    }, 5000);

    setTimeout(function () {
        showaiLoader();
        AiMessage(" " + agentDataObj['BOM(s)'] + " ");
        stopaiLoader();
    }, 8000);

    setTimeout(function () {
        showaiLoader();
        AiMessage(" " + agentDataObj['Linked FLoc(s)'] + " ");
        stopaiLoader();
    }, 11000);

    setTimeout(function () {
        showaiLoader();
        AiMessage(" " + agentDataObj['Maintenance Item(s)'] + " ");
        stopaiLoader();
    }, 14000);

    setTimeout(function () {
        showaiLoader();
        AiMessage(" " + agentDataObj['Maintenance Notification(s)'] + " ");
        stopaiLoader();
    }, 17000);

    setTimeout(function () {
        showaiLoader();
        AiMessage(" " + agentDataObj['Maintenance Order(s)'] + " ");
        stopaiLoader();
    }, 20000);

    setTimeout(function () {
        showaiLoader();
        AiMessage(" " + agentDataObj['Maintenance Plan(s)'] + " ");
        stopaiLoader();
    }, 23000);

    setTimeout(function () {
        showaiLoader();
        AiMessage(" " + agentDataObj['Task List(s)'] + " ");
        stopaiLoader();
    }, 26000);

    setTimeout(function () {
        showaiLoader();
        AiMessage("<b>" + agentName + "</b> has successfully completed the  " + agentDataObj['Title'] + " process.");
        stopaiLoader();
    }, 30000);

}
function getMassChangeTriggerClick(eventClick, clickStr, nextMethodStr) {
    if (eventClick !== null && eventClick !== undefined && eventClick !== "") {
        if (eventClick === "YES") {
            $("#li_PM_CHNG_MASS_DATA_PROCESS_CHAR_EXPORT").trigger("click");
            setTimeout(function () {
                try {
                    $("#PM_CHNG_MASS_DATA_PROCESS_CHAR_EXPORT").jqxGrid('clearselection');
                } catch (e) {

                }
                $("#exportPM_CHNG_MASS_DATA_PROCESS_CHAR_EXPORT").val("Xlsx");

                try {
                    eval(clickStr);
                } catch (e) {
                    console.error('Error executing function:', e);
                }

                setTimeout(function () {
                    $("#li_PM_MASS_DATA_PROCESS_CHAR").trigger("click");
                    const logData = `
<div class='aiLensResultDataClass'>Please upload the updated characteristic data.</div>
<div class="viewData AILensDisOrEnaClass" style="display:flex;">    
    <div class="viewButton" id=""
        onclick="getMassChangeTriggerClick('UPLOAD', 'populateFileBrowser(\\'browsePM_MASS_DATA_PROCESS_CHAR\\', \\'PM_MASS_DATA_PROCESS_CHAR\\', \\'uploadTemplate\\')', '${nextMethodStr.replace(/'/g, "\\'")}')">
        <span class='viewIcon'><img src='images/iDXPUI5Upload.svg'/></span>
        <span class='viewText'>Upload File</span>
    </div>
</div>`;
                    defaultAITypingBasedOnResponse(logData, '', "", "");

                }, 10000);
            }, 3000)


        }
        if (eventClick === "UPLOAD") {
            try {
                eval(clickStr);
            } catch (e) {
                console.error('Error executing function:', e);
            }
            setTimeout(function () {
                var rowsCount = $("#PM_MASS_DATA_PROCESS_CHAR").jqxGrid('getdatainformation').rowscount;
                if (rowsCount > 0) {
                    try {
                        eval(nextMethodStr);
                    } catch (e) {
                        console.error('Error executing function:', e);
                    }
                }
            }, 10000)

        }

    }
}
function bnacHarmonizationProcess(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, gridId) {
    var $logoutDialog = $("#logoutDailog");
    showLoader();

    $.ajax({
        type: "POST",
        url: 'getBatchIdsWithGridParams',
        dataType: 'json',
        data: {
            gridId: gridId,
        },
        traditional: true,
        async: true,
        cache: false,
        success: function (response) {
            stopLoader();
            var checkBoxList = response['checkBoxData'];
            var body = "<div id='selectBatchIdsWithGridParams'></div><div id='errorBatchId' style='color:red;'></div>";
            $logoutDialog.html(body);

            $("#selectBatchIdsWithGridParams").jqxListBox({
                filterable: true,
                checkboxes: true,
                source: checkBoxList,
                theme: 'energyblue',
                displayMember: 'text',
                valueMember: 'value',
                width: '100%'
            });

            $logoutDialog.dialog({
                title: (labelObject['Select Batch Ids'] != null ? labelObject['Select Batch Ids'] : 'Select Batch Ids'),
                modal: true,
                width: 300,
                height: 310,
                fluid: true,
                buttons: [{
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {
                            var batchId = $("#selectBatchIdsWithGridParams").val();

                            if (batchId != null && batchId !== "" && batchId !== undefined && batchId !== "null") {
                                openAINavigation();
                                aiQuery = aiQuery.replace(/_/g, " ");
                                aiQueryAns = aiQueryAns.replace(/_/g, " ");
                                getAIAgentProcess(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, batchId, gridId, "BNAC", '', '', '', '', '', '', '', '', '', '', "AUTOPROCESS");
                                $logoutDialog.dialog("close");
                            } else {
                                $("#errorBatchId").text("Please select a Batch ID.");
                            }
                        }
                    }],
                open: function () {
                    $(this).closest(".ui-dialog").find(".ui-button").eq(0).addClass("dialogyes");
                    $(".visionHeaderMain, .visionFooterMain").css("z-index", "999");

                    $("#filterselectBatchIdsWithGridParams input").on("keyup", function (e) {
                        showLoader();
                        var searchString = e.currentTarget.value;

                        $.ajax({
                            type: "POST",
                            traditional: true,
                            dataType: 'json',
                            url: 'getBatchIdsWithGridParams',
                            cache: false,
                            data: {
                                gridId: gridId,
                                searchString: searchString
                            },
                            success: function (response) {
                                stopLoader();
                                const batchIdsArray = response['checkBoxData'] || [];
                                const listBox = $("#selectBatchIdsWithGridParams");
                                listBox.jqxListBox('clear');
                                batchIdsArray.forEach(item => listBox.jqxListBox('addItem', item));
                            },
                            error: function (e) {
                                console.log(e);
                                sessionTimeout(e);
                            }
                        });
                    });
                },
                beforeClose: function () {
                    $(".visionHeaderMain, .visionFooterMain").css("z-index", "99999");
                }
            });
        },
        error: function (e) {
            stopLoader();
            console.error("Error fetching batch IDs:", e);
            sessionTimeout(e);
        }
    });
}
function getDuplicateCheckData(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, url, gridId, batchId, tableName, title) {
//        Duplicate_Check();
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var agentNo = sessionStorage.getItem("AgentNo");
    var agentFlag = sessionStorage.getItem("AgentFlag");
    const AiMessage = (message) => {
        const AiData = `<div class='aiLensRobotDataClass' id='${"AI" + title}'><label><span><b>${agentNo}</b></span><span>${message}</span></label></div>`;
        defaultAgentAiTypingBasedOnResponse(AiData, '', "", "");
    };
    agentFlag != null && agentFlag != "" ? AiMessage("has initiated Data " + title + " process.") : ""
    var basicData = {};

    var controlType = "controlType";
    var commentVal = $("#rejColumn").val();
    var rejColumn = "rejColumn";
    var rejectComment = "rejectComment";
    var ACCEPT_COMMENT = "ACCEPT_COMMENT";
    basicData['controlType'] = controlType;
    basicData['commentVal'] = commentVal;
    basicData['rejColumn'] = rejColumn;
    basicData['rejectComment'] = rejectComment;
    basicData['ACCEPT_COMMENT'] = ACCEPT_COMMENT;
    basicData['gridId'] = gridId;
    basicData['BATCH_ID'] = batchId;
    basicData['tableName'] = tableName;
    basicData['AI_FLAG'] = "Y";
    basicData['title'] = title;
    basicData['RECORD_NO'] = localStorage.getItem("recordNoList");
    basicData['SOURCE_RECORD_NO'] = localStorage.getItem("recordNoList");


//            $("#wait").css("display", "block");
    $.ajax({
        type: "get",
        traditional: true,
        dataType: 'html',
        url: url,
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

    });
}
async function processElementsWithClickWait() {
    const elements = $("#aILensAutoDiv .viewData div");
    for (let index = 0; index < elements.length; index++) {
        const element = $(elements[index]);
        const text = element.find(".viewText").text() || "";
        if (text.includes("Profiling") || text.includes("De-Duplication"))
            continue;
        showaiLoader();
        try {
            const onclickAttr = element.attr("onclick");
            if (!onclickAttr) {
                console.warn("No function found for element", index);
                continue;
            }

            // Extract function name and argument string
            const fnMatch = onclickAttr.match(/^([a-zA-Z0-9_$.]+)\((.*)\)$/);
            if (!fnMatch) {
                console.warn("Invalid function format in attribute:", onclickAttr);
                continue;
            }

            const functionName = fnMatch[1]; // getAILensAutoHarmonize
            const rawArgs = fnMatch[2]; // 'param1','param2',...

            // Convert raw args string into an array safely
            const args = eval(`[${rawArgs}]`); // ⚠ safe here ONLY because input is controlled by you

            const fnRef = window[functionName];
            if (typeof fnRef === "function") {
                const result = await fnRef(...args);   // added 
                if (result === "Stopped by user") {                 // added 
                    console.warn("🛑 Parent loop terminated by child STOP");
                    return;
                }
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log(`✅ Completed: ${index + 1} of ${elements.length}`);
            } else {
                console.warn("Function not found on window:", functionName);
            }
        } catch (err) {
            if (err && err.message === "STOPPED") {           // added 
                console.warn("🛑 Parent loop caught STOPPED");
                return;
            }
            console.error(`❌ Error in element ${index + 1}:`, err);
        }

        stopaiLoader();
    }

    setTimeout(() => {
        var agentCode = sessionStorage.getItem("agentCode");
        if (agentCode != null && agentCode != undefined && agentCode != '' && agentCode == 'MOCR') {
            defaultAgentAiTypingBasedOnResponse("<div class='aiLensResultDataClass'>The MOCR request from staging to active is in process. You will be notified when it is completed.</div>");
//            setTimeout(() => {
//                defaultAITypingBasedOnResponse("<div class='aiLensResultDataClass'>Your MOCR request is in process. You will be notified when it is completed.</div>");
//            }, 16000);
        } else {
            defaultAgentAiTypingBasedOnResponse("<div class='aiLensResultDataClass'>✅ AI Agent has Successfully Completed Mass Creation Process.</div>");
        }
    }, 5000);
}
function aiExtractToTable(randomId, downloadFlag) {
    const tableElement = document.querySelector("#aiApiResultData" + randomId + " table");
    if (!tableElement) {
        showMesg("No valid table found to download.");
        return;
    }

    const worksheet = {};
    const range = {s: {c: 1000000, r: 1000000}, e: {c: 0, r: 0}};
    let rowIndex = 0;
    for (let row of tableElement.rows) {
        let colIndex = 0;
        for (let cell of row.cells) {
            if (range.s.r > rowIndex)
                range.s.r = rowIndex;
            if (range.s.c > colIndex)
                range.s.c = colIndex;
            if (range.e.r < rowIndex)
                range.e.r = rowIndex;
            if (range.e.c < colIndex)
                range.e.c = colIndex;

            const cellRef = XLSX.utils.encode_cell({r: rowIndex, c: colIndex});
            worksheet[cellRef] = {v: cell.innerText, t: "s"};
            colIndex++;
        }
        rowIndex++;
    }
    worksheet["!ref"] = XLSX.utils.encode_range(range);

    // Build workbook object
    const workbook = {SheetNames: ["Sheet1"], Sheets: {"Sheet1": worksheet}};

    // Write workbook to binary string
    const wopts = {bookType: "xlsx", type: "binary"};
    const wbout = XLSX.write(workbook, wopts);

    // Convert binary string to ArrayBuffer
    function s2ab(s) {
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf);
        for (let i = 0; i < s.length; i++)
            view[i] = s.charCodeAt(i) & 0xff;
        return buf;
    }

    const blob = new Blob([s2ab(wbout)], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });

    if (downloadFlag === "Y") {
        // Download file
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `Mass Create-${randomId}.xlsx`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } else {
        const file = new File([blob], `Mass Create-${randomId}.xlsx`, {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });

        let filename = file.name;

        getAILenspopulateURLFileBrowserColMapping(
                'Choose file to upload',
                'Data imported successfully in staging area',
                'MASSDATAPROCESSCREATE',
                'Y',
                'N',
                'PRODUCT',
                'MM_MANAGER',
                'browseMM_AI_MASS_DATA_PROCESS_CREATE',
                'MM_AI_MASS_DATA_PROCESS_CREATE',
                'NESTEDGRID',
                'MM_MASS_REG_PROCESS_CLUSTER',
                '5000',
                'AUTOPROCESS',
                file,
                filename,
                true
                );
    }
}


async function aiAgentconfirmMesClick(aiQuesMessage, yesLabel, noLabel, yesClick, noClick) {
    let randomId = Math.floor(Math.random() * 1000000);
    return new Promise((resolve) => {
        stopaiLoader();

        let aiConfirmMessage = `
            <ul class="listItemsViews">
                <li>
                    <div class="viewButton" title="${aiQuesMessage}">${aiQuesMessage}</div>
                    <div class="viewData AILensDisOrEnaClass">
                        <div class="aiViewButtonCLick viewButton" id="aiYesBtn${randomId}">
                            <span class="viewIcon"><img src="" class="aiDefaultYesImgClass"></span>
                            <span class="viewText">${yesLabel}</span>
                        </div>
                        <div class="aiViewButtonCLick viewButton" id="aiNoBtn${randomId}">
                            <span class="viewIcon"><img src="" class="aiDefaultNoImgClass"></span>
                            <span class="viewText">${noLabel}</span>
                        </div>
                    </div>
                </li>
            </ul>
        `;

        defaultAITypingBasedOnResponse(aiConfirmMessage);
//        let bomStr ="";
        $(document).one("click", "#aiYesBtn" + randomId + "", function () {
            let bomStr = `<ul class="listItemsViews">
                <li><div class="viewButton">Select the Equipment No to Link </div></li>
                <li><div id="mainAiFilterInputdiv" class="ui5gridfilter-inputFeildDiv">  
                    <span id="inputDependSearch" class="ui5gridinputFeildSpan"> 
                        <input id="aiInputResultId" type="text" readonly="true"
                            class="ui5gridsearch-input ui5gridform-control" width='225px'> 
                    </span>
                    <span class="ui5gridsearch-icon">
                        <img src="" class= "aiDefaultDropDownImgClass" width='18px;'
                            onclick="visionDropdown('DDW_AI_BOM_LIST','INSTANCE','SEARCH-VIEW',
                            'aiInputResultId','','','aiInputResultId','')">
                    </span>
                </div></li>
            </ul>
                <button id='bomSubmitId${randomId}'>Submit</button>
            `;

            defaultAITypingBasedOnResponse(bomStr);

            $(document).one("click", "#bomSubmitId" + randomId + "", function () {
                let result = aiLensAssetUpdatedata("aiInputResultId");
                if (result) {
                    defaultAITypingBasedOnResponse(`<ul class="listItemsViews"><li>Bom Submitted Successfully</li></ul>`);
                    resolve(true);
                }
            });
        });

        $(document).one("click", "#aiNoBtn" + randomId + "", function () {
            resolve(false);
        });
    });
}
function aiLensAssetUpdatedata(id) {
    return new Promise((resolve) => {
        let updateStr = $("#" + id).val();
        $.ajax({
            type: "POST",
            traditional: true,
            dataType: 'html',
            url: 'aiLensAssetUpdatedata',
            cache: false,
            data: {
                'updateStr': updateStr,
                batchId: $("#batchID").val()
            },

            success: function (result) {
                if (result !== null && result !== "" && result !== undefined) {
                    resolve(true);
                }
            }, error: function (jqXHR, textStatus, errorThrown) {
                sessionTimeout(textStatus);
                resolve(false);
            }
        });
    });
}
function sendFileExtractDataWithPrompt(files, promptValue, fileType, aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, clickedTitle, aiExcelFlag) {
    aiAutoScrollContainer();
    showaiLoader();
    var data;
    var formattedHTML = "";
    var randomNumber = generateRandomNumber();
    var pdfFileData = new FormData();
    pdfFileData.append("pdfData", files);
    pdfFileData.append("prompt", promptValue);
    pdfFileData.append("extractFileType", fileType);
    data = pdfFileData;
    $.ajax({
        url: 'extractFileData',
        type: "POST",
        data: pdfFileData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        async: true,
        success: async function (response) {
            let resultObj = {};

            stopaiLoader();
            aiAutoScrollContainer();

            if (response !== null && response !== undefined && response !== "") {
                try {
                    resultObj = JSON.parse(response);
                    if (resultObj !== null && !jQuery.isEmptyObject(resultObj)) {
                        response = resultObj['replacedStr'];
                    }
                } catch (e) {
                }
                const products = response.split('\n\n---\n\n').filter(Boolean);

                products.forEach(product => {

                    const lines = product.split('\n').map(line => line.trim()).filter(Boolean);


                    formattedHTML += '<ul>';

                    lines.forEach(line => {

                        formattedHTML += '<li>' + line.replace(/\*\*(.*?)\*\*/, '<strong>$1</strong>') + '</li>';
                    });

                    formattedHTML += '</ul>';
                });


                var logData = "<div id='aiApiResultData" + randomNumber + "' class='aiLensResultDataClass' style='width:348px;'>"
                        + "<div>" + formattedHTML + "</div>"
                        + "</div>"

                $(".aiChatgptResponseContainer").append(logData);
                await aiDelay(1000);
                let extractedStr = resultObj['extractedJsonStr'];
                $("#aiExtractedJsonStr" + randomNumber).remove();
                $("body").append(`<input type='hidden' id='${"aiExtractedJsonStr" + randomNumber}' value='${extractedStr}'/>`);
                let yesOnclickStr = `insertFileExtractResultData('${"aiExtractedJsonStr" + randomNumber}',   '${aiQuery}', '${aiQueryAns}', '${aiQueryType}', '${aiSubQueryFlag}', 
    '${aiTypeFlag}', '${domain}', '${role}', '${browseId}', '${gridId}', '${componentType}', '${clusterId}', '${settimeout}', 
    '${clickedTitle}', '${aiExcelFlag}')`;
                defaultAITypingBasedOnResponse(generateAccessData("Do you want to process the data ?", "aiConfirmMsg", yesOnclickStr));

            } else {
                var logData = "<div id='aiApiResultData" + randomNumber + "' class='aiLensResultDataClass' style='width:348px;'>"
                        + "<div>No Data Extracted</div>"
                        + "</div>";

                defaultAITypingBasedOnResponse(logData);
            }
        }

        , error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}
function insertFileExtractResultData(extractedResultId, aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, clickedTitle, aiExcelFlag) {
    aiAutoScrollContainer();
    showaiLoader();
    let extractedDataStr = $("#" + extractedResultId).val();
    var pdfFileData = new FormData();
    var dummyContent = "This is a dummy PDF content for testing.";
    var dummyFile = new Blob([dummyContent], {type: "application/pdf"});
    pdfFileData.append("pdfData", dummyFile);
    pdfFileData.append("extractedDataStr", extractedDataStr);
    $.ajax({
        type: "POST",
        traditional: true,
        dataType: 'html',
        url: 'importFileExtractResultsStr',
        cache: false,
        data: pdfFileData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        async: true,
        success: function (result) {
            stopaiLoader();
            if (result !== null && result !== "" && result !== undefined) {
                $("#" + extractedResultId).remove();
                let logStr = "<div class='aiLensResultDataClass'>" + result + "</div>";
                defaultAITypingBasedOnResponse(logStr);
                let match = result.match(/BatchNo:\s*(\w+)/);
                let batchId = match ? match[1] : "";
                if (batchId !== null && batchId !== "" && batchId !== undefined) {
                    $("#batchID").val(batchId);
                    $("#dxpGridContent").show();
                    $("#dxpHomeContent").hide();
                    var paramArray = [];
                    var paramObj = {};
                    paramObj.column = 'BATCH_ID';
                    paramObj.value = batchId;
                    paramObj.operator = 'EQUALS';
                    paramObj.selectNum = 1;
                    paramArray.push(paramObj);
                    getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'N');
                    setTimeout(function () {
                        getAIContentBasedOnQuery(aiQuery, 'Data Imported Successfully in staging area', 'MASSDATAPROCESSCREATE', "Y", "N", batchId, '', '', '', '', '', '', '', '', '', '', 'AUTOPROCESS');
                    }, 1000);
                }


            }
        }, error: function (jqXHR, textStatus, errorThrown) {
            defaultAITypingBasedOnResponse(errorThrown);
        }
    });

}
function getAiLensPopupResponseInputAPI(labelsStr, url, title, agentName, flag, subFlag, gridId) {
    showaiLoader();
    let htmlStr = "";
    if (labelsStr) {
        let labelArray = labelsStr.includes(",") ? labelsStr.split(",") : [labelsStr];
        labelArray.forEach(label => {
            let displayLabel = label
                    .replace(/_/g, " ")
                    .replace(/^\w/, c => c.toUpperCase());

            htmlStr += `<div class='invoiceFormClass'style="margin-bottom:8px;">
                    <label style="margin-right:6px;">${displayLabel}:</label>
                    <input type="text" name="${label}" />
                </div>
            `;
        });
    }
    $("#dialog1").html(htmlStr);
    $("#dialog1").dialog({
        resizable: false,
        title: labelObject[title] || title,
        modal: true,
        width: 300,
        height: 135,
        fluid: true,
        buttons: [{
                text: labelObject['ok'] || 'ok',
                click: function () {
                    let formData = {};
                    $(".invoiceFormClass input[type='text']").each(function () {
                        formData[$(this).attr("name")] = $(this).val();
                    });
                    getAiLensPopupResponse(url, title, agentName, flag, subFlag, formData, gridId);
                    $(this).html("").dialog("close").dialog("destroy");
                }
            }],
        open: function () {
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
            $(".visionHeaderMain, .visionFooterMain").css("z-index", "999");
        },
        beforeClose: function () {
            $(".visionHeaderMain, .visionFooterMain").css("z-index", "99999");
        }
    });
}
function getAiLensPopupResponse(url, title, agentName, apiId, subFalg, formData, gridId) {
    let batchId = $("#batchID").val();
    if (!formData) {
        formData = {};
    }
    formData['flag'] = apiId;
    formData['label'] = subFalg;
    formData['batchId'] = batchId;
    return new Promise(async (resolve) => {
        const AiMessage = async (message) => {
            const AiData = `<div class='aiLensRobotDataClass' id='${"AI" + title}'><label><span><b>${agentName}</b></span><span>${message}</span></label></div>`;
            await defaultAgentAiTypingBasedOnResponse(AiData, '', "", "");
        };
        if (agentName !== null && agentName !== "" && agentName !== undefined) {

            await AiMessage("has initiated Data " + title + " process.");
        }

        $.ajax({
            type: "post",
            url: url,
            cache: false,
            data: formData,
            traditional: true,
            dataType: 'html',
            async: true,
            success: function (response) {
                stopaiLoader();
                $("#logoutDailog").html((labelObject[response] != null ? labelObject[response] : response));
                $("#logoutDailog").dialog({
                    title: (labelObject[title] != null ? labelObject[title] : title),
                    modal: true,
                    width: 700,
                    height: 400,
                    fluid: true,
                    buttons: [{
                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                            click: function () {
                                var paramArray = [];
                                var paramObj = {};
                                paramObj.column = 'BATCH_ID';
                                paramObj.value = batchId;
                                paramObj.operator = 'EQUALS';
                                paramObj.selectNum = 1;
                                paramArray.push(paramObj);
                                getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'Y');
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");

                            }
                        }],
                    open: function ()
                    {
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
            }, error: function (jqXHR, textStatus, errorThrown) {

            }

        });
    });
}
function getAINewCreateItem(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag) {
    let randomId = Math.floor(Math.random() * 1000000);

    // Inject global-scoped CSS (only once)
//    if (!document.getElementById("aiLensCreateNewItemStyle")) {
//        const style = document.createElement("style");
//        style.id = "aiLensCreateNewItemStyle";
//        style.innerHTML = `
//        /* ===== AI Lens Create New Item Global Scope ===== */
//
//        `;
//
//        document.head.appendChild(style);
//    }
    $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>" + aiQueryAns + "</div>");
    // ✅ Build Input HTML
    let showPromptInput = '';
    if (aiQueryAns != null && aiQueryAns != undefined && aiQueryAns != '' && aiQueryAns == 'Class Term') {

        showPromptInput = `
        <div class="aiLensCreateNewItem">
            <div class="followup">
                <p>Select one of the following class options.</p>
                <button id="aiNewClassBtn">New Class</button>
                <button id="aiExistingClsBtn">Existing class</button>
            </div>
        </div>
    `;
        defaultAITypingBasedOnResponse(showPromptInput);
        $(document).one("click", "#aiNewClassBtn", function () {
            showPromptInput = `
    <div class="aiLensCreateNewItem">
        <div class="container">
            <div class="header">Please enter the ${aiQueryAns}</div>
            <textarea id="aiClsTermTaBtn" class="textarea" placeholder="Enter ${aiQueryAns}..."></textarea>
            <div class="error"></div>
            <button id='aiClsTermSubBtn' class="btn">Submit</button>
        </div>
    </div>
`;
            defaultAITypingBasedOnResponse(showPromptInput);
        });
        $(document).one("click", "#aiClsTermSubBtn", function () {
            let enteredValue = $("#aiClsTermTaBtn").val().trim();
            if (!enteredValue) {
                $(".aiLensCreateNewItem .error").text("Please enter a value before submitting.");
                return;
            } else {
                $(".aiLensCreateNewItem .error").text("");
            }
            searchBasedAILensResults(enteredValue, $("#currentDomain").val());
        });
    } else if (aiQueryAns != null && aiQueryAns != undefined && aiQueryAns != '' && aiQueryAns == 'Description') {

        showPromptInput = `
    <div class="aiLensCreateNewItem">
        <div class="container">
            <div class="header">Please enter the ${aiQueryAns}</div>
            <textarea id="aiNewItemText${randomId}" class="textarea" placeholder="Enter ${aiQueryAns}..."></textarea>
            <div class="error"></div>
            <button id='aiNewItemSubmitId${randomId}' class="btn">Submit</button>
        </div>
    </div>
`;
        defaultAITypingBasedOnResponse(showPromptInput);
    }


// ✅ Handle submit


    $(document).one("click", "#aiNewItemSubmitId" + randomId, function () {
        let enteredValue = $("#aiNewItemText" + randomId).val().trim();
        if (!enteredValue) {
            $(".aiLensCreateNewItem .error").text("Please enter a value before submitting.");
            return;
        } else {
            $(".aiLensCreateNewItem .error").text("");
        }

//        let tableHTML = buildAINewItemTable(aiQueryAns, enteredValue);
//        enteredValue = "";
        if (aiQueryAns != null && aiQueryAns != undefined && aiQueryAns != '' && aiQueryAns == 'Class Term') {
            $(document).one("click", "#aiNewClsBtn", function () {
                searchBasedAILensResults(enteredValue, $("#currentDomain").val())
            });
            $(document).one("click", "#aiExistingClsBtn", function () {

            });

        } else if (aiQueryAns != null && aiQueryAns != undefined && aiQueryAns != '' && aiQueryAns == 'Description') {
            let followUpHtml = `
        <div class="aiLensCreateNewItem">
            <div class="followup">
                <p>Would you like to add any other details before creating a new record?</p>
                <button id="aiAddMoreBtn">Yes</button>
                <button id="aiFinishBtn">No</button>
            </div>
        </div>
    `;

            defaultAITypingBasedOnResponse(followUpHtml);
        }


        $(document).one("click", "#aiAddMoreBtn", function () {
            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>Yes, I have other details</div>");
            aiLensNewItemTemplate();
        });
        $(document).one("click", "#aiMultiInputSubmit", function () {
            const aiMultiTextInput = $("#aiMultiTextInput").val().trim();
            newItemConfAiAgent(aiQueryAns, aiMultiTextInput, enteredValue);
        });

        $(document).one("click", "#aiFinishBtn", function () {
            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>No, I don't have other details</div>");
            // 🌀 Step 1: Authentication check
            showAILensFixedMessageInAIFormat("Authorizing your access to create a new record. Please wait...", 'Y');
            setTimeout(function () {
                showAILensFixedMessageInAIFormat("✅ Authorization successful. You can now create a new record.");
            }, 7000);
            setTimeout(function () {
                showAILensFixedMessageInAIFormat("Before creating the new record, the system is checking for existing records that match your description. Please wait...");
            }, 14000);
            setTimeout(function () {
                $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>Checking existing records</div>");
                aiShowDuplicatesBasedOnDescription(aiQueryAns, enteredValue);
            }, 23000);
        });

    });

}

// 🧾 Table Builder (using global class)
function buildAINewItemTable(fieldName, fieldValue) {
    if (!window.aiItemDetails)
        window.aiItemDetails = [];
    window.aiItemDetails.push({name: fieldName, value: fieldValue});

    let rows = window.aiItemDetails
            .map(i => `<tr><td>${i.name}</td><td>${i.value}</td></tr>`)
            .join("");

    return `
        <div class="aiLensCreateNewItem">
            <div class="table-container">
                <h4>` + fieldName + ` Details</h4>
                <table class="table">
                    <thead><tr><th>Field Name</th><th>Entered Value</th></tr></thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        </div>
    `;
}
function newItemConfAiAgent(queryVal, inputVal, aiMultiTextInput) {
//    const logData = `
//    <div class='aiLensRobotDataClass'>
//        <label><span><b>Agent: DH-007</b></span></label>
//    </div>
//    `;

    // Build table HTML
    let tableRows = "";
    if (inputVal && inputVal.includes(":")) {
        const pairs = inputVal.split("#");
        pairs.forEach(pair => {
            const [key, value] = pair.split(":");
            if (key && value) {
                tableRows += `
                    <tr>
                        <td>${key.trim().toUpperCase()}</td>
                        <td>${value.trim().toUpperCase()}</td>
                    </tr>`;
            }
        });
    }

    const tableHTML = `
    <div class="aiLensCreateNewItem">
      <div class="table-container">
        <h4>🧾 Extracted Item Details</h4>
        <table class="table">
          <thead>
            <tr>
              <th>FIELD NAME</th>
              <th>VALUE</th>
            </tr>
          </thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>
    </div>`;

    defaultAITypingBasedOnResponse(tableHTML, '', "", "");
}
function aiShowDuplicatesBasedOnDescription(aiQueryAns, enteredValue) {
    showaiLoader();
    $.ajax({
        type: "post",
        url: "aiShowDupBasedOnDescNewRecord",
        cache: false,
        data: {
            'aiQueryAns': aiQueryAns,
            'enteredValue': enteredValue
        },
        traditional: true,
        dataType: 'html',
        async: true,
        success: function (response) {
            stopaiLoader();
            if (response != null && response != undefined && response != '') {
                var jsonObj = JSON.parse(response);
                if (jsonObj.messageFlag) {
                    // 1️⃣ Show message first in AI Lens
                    let aiLensMsg = `
<div class="aiLensCreateNewItem" style="font-family:'Segoe UI',Arial,sans-serif;">
  <div style="
    margin-top:10px;
    color:#0056b3;">
    
    <div style="
      font-size:14px;
      font-weight:500;
      display:flex;
      align-items:center;
      gap:8px;
      color:#0056b3;">
      <span style="font-size:16px;color:#e6a700;">⚠️</span>
      <span><b>${jsonObj.recordCount}</b> matching records found for your description.</span>
    </div>

    <div style="
      font-size:13.5px;
      color:#0056b3;
      margin-top:6px;
      margin-left:24px;
      line-height:1.5;">
      Review the existing data before creating a new record.
    </div>

    <div style="margin-top:12px;margin-left:24px;">
      <button id="aiViewDupDataBtn" style="
        background-color:#ffffff;
        color:#0056b3;
        border:1px solid #c7dbf2;
        border-radius:6px;
        padding:6px 14px;
        font-size:14px;
        cursor:pointer;
        font-weight:500;
        display:flex;
        align-items:center;
        gap:8px;
        transition:all 0.2s ease;">
        <span>View Matching Records</span>
        <span style="
          background-color:#0056b3;
          color:#ffffff;
          border-radius:12px;
          font-size:12px;
          padding:2px 8px;
          font-weight:600;">
          ${jsonObj.recordCount}
        </span>
      </button>
    </div>
  </div>
</div>
`;

                    defaultAITypingBasedOnResponse(aiLensMsg, '', "", "");

                    // 2️⃣ When "View Data" is clicked, show the full table
                    $(document).one("click", "#aiViewDupDataBtn", function () {
                        showaiLoader();
                        $("#dialog1").html(jsonObj['dataStr']);
                        $("#dialog1").dialog({
                            resizable: false,
                            title: labelObject['Description Details'] != null ? labelObject['Description Details'] : 'Description Details',
                            modal: true,
                            width: 1000,
                            height: 500,
                            fluid: true,
                            buttons: [{
                                    text: labelObject['Ok'] || 'Ok',
                                    click: function () {
                                        $(this).html("").dialog("close").dialog("destroy");
                                        let followUpHtml = `
                                                    <div class="aiLensCreateNewItem">
                                                        <div class="followup">
                                                            <p>A similar record already exists. Do you want to continue creating a new record anyway?</p>
                                                            <button id="aiRecExistYes">Yes</button>
                                                            <button id="aiRecExistNo">No</button>
                                                        </div>
                                                    </div>
                                                `;

                                        defaultAITypingBasedOnResponse(followUpHtml);

                                        $(document).one("click", "#aiRecExistYes", function () {
                                            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>Yes, continue to record creation </div>");
                                            var dataMsg = " has been initiated to create the record based on \n\
                                              your provided inputs. The agent is executing classification, \n\
                                              characteristic assignment, and reference data allocation processes \n\
                                               to ensure the record is accurately structured and ready for \n\
                                               further validation.";
                                            const AiData = `<div class='aiLensRobotDataClass'><label><span><b>Agent DH-007</b></span><span>` + dataMsg + `</span></label></div>`;

                                            defaultAgentAiTypingBasedOnResponse(AiData);
                                        });
                                        $(document).one("click", "#aiRecExistNo", function () {
                                            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>No, I will review Existing records </div>");
//                                            newItemConfAiAgent(aiQueryAns, aiMultiTextInput, enteredValue);
                                        });
                                    }
                                }],
                            open: function () {
                                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                                $(".visionHeaderMain, .visionFooterMain").css("z-index", "999");
                            },
                            beforeClose: function () {
                                $(".visionHeaderMain, .visionFooterMain").css("z-index", "99999");
                            }
                        });
                        stopaiLoader();

                    });
                } else {
                    defaultAITypingBasedOnResponse(`
        <div class="aiLensCreateNewItem">
            <div class="aiLensNoDupMsg">${jsonObj.message}</div>
        </div>
    `, '', "", "");
                }
            }

        }
    });
}
function aiLensNewItemTemplate() {
    let showPromptInput = `
<div class="aiLensCreateNewItem" style="font-family:'Segoe UI',Arial,sans-serif;">
  <div class="container">
    
    <div class="header" style="font-size:14px;font-weight:600;color:#0056b3;margin-bottom:10px;">
      Please select the template.
    </div>

    <div class="template-options" style="display:flex;flex-wrap:wrap;gap:8px;">
      <button class="template-btn" data-template="General Info"
        style="flex:1 1 45%;border:1px solid #c7dbf2;border-radius:6px;padding:6px 10px;
               font-size:13.5px;color:#0056b3;background-color:#ffffff;cursor:pointer;
               font-weight:500;text-align:left;">
        🧩 General Info
      </button>

      <button class="template-btn" data-template="Properties Info"
        style="flex:1 1 45%;border:1px solid #c7dbf2;border-radius:6px;padding:6px 10px;
               font-size:13.5px;color:#0056b3;background-color:#ffffff;cursor:pointer;
               font-weight:500;text-align:left;">
        ⚙️ Properties Info
      </button>

      <button class="template-btn" data-template="Reference Info"
        style="flex:1 1 45%;border:1px solid #c7dbf2;border-radius:6px;padding:6px 10px;
               font-size:13.5px;color:#0056b3;background-color:#ffffff;cursor:pointer;
               font-weight:500;text-align:left;">
        📘 Reference Info
      </button>

      <button class="template-btn" data-template="Document Info"
        style="flex:1 1 45%;border:1px solid #c7dbf2;border-radius:6px;padding:6px 10px;
               font-size:13.5px;color:#0056b3;background-color:#ffffff;cursor:pointer;
               font-weight:500;text-align:left;">
        📄 Document Info
      </button>

      <button class="template-btn" data-template="Additional Info"
        style="flex:1 1 45%;border:1px solid #c7dbf2;border-radius:6px;padding:6px 10px;
               font-size:13.5px;color:#0056b3;background-color:#ffffff;cursor:pointer;
               font-weight:500;text-align:left;">
        🧾 Additional Info
      </button>

      <button class="template-btn" data-template="SAP Info"
        style="flex:1 1 45%;border:1px solid #c7dbf2;border-radius:6px;padding:6px 10px;
               font-size:13.5px;color:#0056b3;background-color:#ffffff;cursor:pointer;
               font-weight:500;text-align:left;">
        🧠 SAP Info
      </button>

      <button class="template-btn" data-template="BOM Info"
        style="flex:1 1 45%;border:1px solid #c7dbf2;border-radius:6px;padding:6px 10px;
               font-size:13.5px;color:#0056b3;background-color:#ffffff;cursor:pointer;
               font-weight:500;text-align:left;">
        ⚙️ BOM Info
      </button>

      <button class="template-btn" data-template="Other Info"
        style="flex:1 1 45%;border:1px solid #c7dbf2;border-radius:6px;padding:6px 10px;
               font-size:13.5px;color:#0056b3;background-color:#ffffff;cursor:pointer;
               font-weight:500;text-align:left;">
        📦 Other Info
      </button>
    </div>

  </div>
</div>
`;

    defaultAITypingBasedOnResponse(showPromptInput);
    $(document).off("click", ".template-btn").on("click", ".template-btn", function () {
        $(".template-btn").css("background-color", "#ffffff");
        $(this).css("background-color", "#eaf3ff");
        const selectedTemplate = $(this).data("template");
        loadTemplateForm(selectedTemplate);
    });


}
function loadTemplateForm(selectedTemplate) {
    $(".aiChatgptResponseContainer").append(
            "<div class='aiAppendSenderDataClass userSelectedOption'>" + selectedTemplate + "</div>"
            );

    const templateFields = {
        "General Info": ["Material Type", "Material Description", "Material Group", "UNSPSC Code", "HSN Code"],
        "Properties Info": ["Type", "Specification", "Rating", "Width", "Height"],
        "Reference Info": ["Reference No", "Reference Type", "Vendor Name"],
        "Document Info": ["Document No", "Document Type", "Document Item", "Vendor Name", "Revision"],
        "Additional Info": ["Category", "Remarks"],
        "SAP Info": ["SAP No", "Storage Location", "Business Unit"],
        "BOM Info": ["Component", "Quantity", "Unit"],
        "Other Info": ["Comments", "Notes"]
    };

    const fields = templateFields[selectedTemplate] || [];
    const randomSuffix = Math.floor(Math.random() * 1000000);

    const formHTML = `
  <div class="aiLensCreateNewItem" style="font-family:'Segoe UI',Arial,sans-serif;">
    <div class="container">
      <div style="font-size:14px;font-weight:600;color:#0056b3;margin-bottom:8px;">
        ${selectedTemplate} Details
      </div>

      <table id="aiDynamicFieldTable" style="width:100%;border-collapse:collapse;border:1px solid #d2e3f5;">
        <thead style="background:#f7fbff;color:#0056b3;font-size:13.5px;">
          <tr>
            <th style="border:1px solid #d2e3f5;padding:6px;text-align:left;">Field</th>
            <th style="border:1px solid #d2e3f5;padding:6px;text-align:left;">Value</th>
          </tr>
        </thead>
        <tbody>
          ${fields
            .map((f, index) => {
                const fieldId = `${selectedTemplate.replace(/\s+/g, '').toLowerCase()}_${f
                        .replace(/\s+/g, '')
                        .toLowerCase()}_${randomSuffix}_${index}`;
                return `
              <tr>
                <td style="border:1px solid #d2e3f5;padding:6px;color:#0056b3;font-weight:600;">
                  ${f}
                </td>
                <td style="border:1px solid #d2e3f5;padding:6px;display:flex;align-items:center;gap:6px;">
                  <input id="${fieldId}" type="text" data-field="${f}" placeholder="Enter ${f}"
                    style="flex:1;border:1px solid #c7dbf2;border-radius:4px;padding:4px 6px;font-size:13px;color:#333;">
                  <span class="copyIcon" title="Copy" data-copyid="${fieldId}"
                    style="cursor:pointer;color:#0056b3;font-size:15px;">
                  <img src="images/iDXPUI5SearchDropdown.png" class="aiLensNewItemImgClass"
                  onclick="visionDropdown('DDW_MM_MATL_TYPE','100','FORM-VIEW','MM_PENDING_MGR_REG','RECORD_TYPE','')"
 style="cursor:pointer;width:16px;"></span>
                </td>
              </tr>`;
            })
            .join("")}
        </tbody>
      </table>

      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;">
        <button id="addNewFieldBtn" style="background:none;border:none;color:#0056b3;
          font-weight:500;cursor:pointer;font-size:13.5px;display:flex;align-items:center;gap:6px;">
          ➕ Add New Field
        </button>

        <button id="aiSubmitFormBtn" style="background-color:#0056b3;color:#fff;border:none;
          border-radius:6px;padding:6px 14px;font-size:14px;font-weight:500;cursor:pointer;">
          Submit
        </button>
      </div>
    </div>
  </div>
  `;

    // ✅ Inject to AI Lens output
    defaultAITypingBasedOnResponse(formHTML);

    setTimeout(function () {
        $(".aiLensNewItemImgClass").attr("src", "images/iDXPUI5SearchDropdown.png");
    }, 25000);

    // ✅ Copy to clipboard functionality
    $(document)
            .off("click", ".copyIcon")
            .on("click", ".copyIcon", function () {
                const inputId = $(this).data("copyid");
                const input = document.getElementById(inputId);
                input.select();
                input.setSelectionRange(0, 99999);
                document.execCommand("copy");

                // visual feedback
                const oldIcon = $(this).text();
                $(this).text("✅");
                setTimeout(() => $(this).text(oldIcon), 1000);
            });

    // ✅ Add new field dynamically
    $(document)
            .off("click", "#addNewFieldBtn")
            .on("click", "#addNewFieldBtn", function () {
                const uniqueId = `${selectedTemplate.replace(/\s+/g, '').toLowerCase()}_newfield_${Math.floor(Math.random() * 1000000)}`;
                const newRow = `
        <tr>
          <td style="border:1px solid #d2e3f5;padding:6px;">
            <input type="text" class="newFieldInput" placeholder="Enter Field Name"
              style="width:95%;border:1px solid #c7dbf2;border-radius:4px;padding:4px 6px;font-size:13px;color:#333;font-weight:600;color:#0056b3;">
          </td>
          <td style="border:1px solid #d2e3f5;padding:6px;display:flex;align-items:center;gap:6px;">
            <input id="${uniqueId}" type="text" placeholder="Enter Value"
              style="flex:1;border:1px solid #c7dbf2;border-radius:4px;padding:4px 6px;font-size:13px;color:#333;">
            <span class="copyIcon" data-copyid="${uniqueId}" style="cursor:pointer;color:#0056b3;font-size:15px;">📋</span>
            <button class="deleteRowBtn" style="background:none;border:none;color:#b71c1c;cursor:pointer;font-size:14px;">🗑️</button>
          </td>
        </tr>`;
                $("#aiDynamicFieldTable tbody").append(newRow);
            });

    // ✅ Delete field
    $(document)
            .off("click", ".deleteRowBtn")
            .on("click", ".deleteRowBtn", function () {
                $(this).closest("tr").remove();
            });

    // ✅ Submit handler
    $(document)
            .off("click", "#aiSubmitFormBtn")
            .on("click", "#aiSubmitFormBtn", function () {
                const formData = {};
                $("#aiDynamicFieldTable tbody tr").each(function () {
                    let fieldName = $(this).find("input[data-field]").data("field");
                    if (!fieldName)
                        fieldName = $(this).find(".newFieldInput").val();
                    const fieldValue = $(this).find("td:eq(1) input").val();
                    if (fieldName)
                        formData[fieldName] = fieldValue;
                });

                defaultAITypingBasedOnResponse(`
        <div class="aiLensCreateNewItem">
          <div style="color:#0056b3;font-size:14px;">
            ✅ ${selectedTemplate} data submitted successfully.<br><br>
            <pre style="background:#f7fbff;border:1px solid #d2e3f5;border-radius:6px;padding:10px;">
${JSON.stringify(formData, null, 2)}</pre>
          </div>
        </div>
      `);
            });

}
function showAILensFixedMessageInAIFormat(message, loaderFlag) {
    var loaderHtml = '';
    if (loaderFlag != null && loaderFlag != undefined && loaderFlag != '' && loaderFlag == 'Y') {
        loaderHtml = '<span class="aiLensLoader"></span>';
    }
    var itemShowStr = `
            <div class="listItemsText aiLensCreateNewItem">
              <ul class="listItemsViews">
                <li>
                  <div class="aiLensResultDataClass">
                    ` + loaderHtml + `
                    ` + message + `
                  </div>
                </li>
              </ul>
            </div>
            `;
    defaultAITypingBasedOnResponse(itemShowStr);
}
async function saveAiMOCRBulkData(gridId, dataField, controlInd)
{
    return new Promise(async (resolve, reject) => {
        try {

            var labelObject = {};
            try {
                labelObject = JSON.parse($("#labelObjectHidden").val());
            } catch (e) {

            }
            await defaultAgentAiTypingBasedOnResponse(generateAccessData("Do you want to move the process from the Staging Area to the Active Area?", "aiMOCRMassProcess"));
            $(document)
                    .off('click', '#aiMOCRMassProcess')
                    .on('click', '#aiMOCRMassProcess', function () {
                        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>Yes, Proceeding to Active Area.</div>");
                        var selectedRowsData = [];
                        var index = 0;
                        var panelId = $('#panelId').val();
                        var formId = $('#formId').val();
                        var tableName = $('#tableName').val();
                        var defaultValues = $("#defaultValues").val();
                        var batchId = $('#mocrBatchId').val();
                        var basicData = {};
                        var count = 0;
                        var batchInd = $('#batchIndicator').val();
                        var ValidateCommentColumn = $('#' + gridId + '_massValidateComment').val();
                        if (!(ValidateCommentColumn != null && ValidateCommentColumn != '')) {
                            ValidateCommentColumn = $('#massValidateComment').val();
                        }
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
//                panaloldData[columnsArray[i]] = encodeURIComponent(hiddenVal);
                                }

                            }
                        });
                        if (batchInd != null && batchInd != undefined && batchInd == 'Y')
                        {
                            if (basicData != null) {
                                selectedRowsData.push(basicData);
                            }

                            if (selectedRowsData != null && selectedRowsData.length != 0) {
                                if (batchId != null && batchId != '' && batchId != 'undefined' && batchId != 'Currently no batch(s) available')
                                {
                                    //showLoader();
                                    defaultAgentAiTypingBasedOnResponse("<div class='aiLensResultDataClass'>The MOCR process has been initiated.</div>");
                                    processStepsInterval[batchId] = setInterval(function () {
                                        refreshMOCRProcessStatus(batchId);
                                        resolve(true);
                                    }, 1000);
                                    $.ajax({
                                        type: "post",
                                        url: "massMOCRSaveRecord",
                                        cache: false,
                                        data: {'jsonData': JSON.stringify(selectedRowsData),
                                            //'dropVal': maasSelect,
                                            'defaultValues': defaultValues,
                                            'formId': formId,
                                            'tableName': tableName,
                                            'gridId': gridId,
                                            'panelId': panelId,
                                            'batchId': batchId,
                                            'dataField': dataField,
                                            'buttonLabel': controlInd
                                        },
                                        traditional: true,
                                        dataType: 'html',
                                        success: function (response) {
                                            var asyncFlag = false;
                                            if (asyncFlag) {
                                                stopLoader();
                                                var result = JSON.parse(response);
                                                var flag = result['flag'];
                                                if (flag) {
                                                    var mocrNo = result['mocrNo'];
                                                    var basicData = result['basicData'];
                                                    var navgnGridId = result['navgnGridId'];
                                                    $("#dialog").html(result['resultMessage']);

                                                    $("#dialog").dialog({resizable: false,
                                                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                                                        modal: true,
                                                        height: 'auto',
                                                        minHeight: 'auto',
                                                        minWidth: 400,
                                                        maxWidth: 'auto',
                                                        fluid: true,
                                                        buttons: {
                                                            Ok: function () {
                                                                $("#dxpFormContent").empty();
                                                                var $tabsElement = $('#dxpFromTab');
                                                                $tabsElement.hide();
                                                                $("#dxpMOCRPendingTreeDiv").append("<div id='" + navgnGridId + "'></div>");
                                                                $("#" + navgnGridId).attr("data-gridResultObj", JSON.stringify(basicData));
                                                                var gridInitParamObj = basicData['gridInitParamObj'];
                                                                var treeId = gridInitParamObj['uuu_mocrTreeId'];
                                                                getMocrCreateAssetTreeobject(treeId, "dxpMOCRPendingTreeDiv", mocrNo, dataField, basicData, navgnGridId, "N");
                                                                // navigateToMOCRForm(dataField, basicData, 'form', navgnGridId, "", 0, "N", "", mocrNo);
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
                                                } else {
                                                    $("#dialog").html(result['resultMessage']);
                                                    $("#dialog").dialog({resizable: false,
                                                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
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


                        } else {

                            if (selectedRowsData.length > 0)
                            {
                                var data = basicData;
                                if (data != null) {
                                    var value = basicData[ValidateCommentColumn];
                                    if (value != null && value != undefined && (value == 'OK' || value == 'Record Verified'))
                                    {
                                        if (data != null)
                                        {
                                            selectedRowsData.push(data);
                                        }
                                    } else if (value != null && value != undefined && value == 'Record processed')
                                    {
                                        var message = 'Selected record(s) are already Processed';
                                        message = labelObject[message] != null ? labelObject[message] : message;
                                        popupMessage(message);
                                        return;
                                    } else
                                    {
                                        var message = 'Please select only record(s) with no Validation error(s)';
                                        message = labelObject[message] != null ? labelObject[message] : message;
                                        popupMessage(message);
                                        return;
                                    }
                                }
                                if (selectedRowsData != null && selectedRowsData.length != 0)
                                {
                                    $.ajax({
                                        type: "post",
                                        url: "massMOCRSaveRecord",
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
                                            stopLoader();
                                            $("#dialog").html(result.resultMessage);
                                            $("#dialog").dialog({resizable: false,
                                                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
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
//                                    $("#" + gridId).jqxGrid('clearfilters');
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
                                    message = labelObject[message] != null ? labelObject[message] : message;
                                    popupMessage(message);
                                }
                            } else {
                                var message = 'Please select a Record(s) to process';
                                message = labelObject[message] != null ? labelObject[message] : message;
                                popupMessage(message);
                            }
                        }

                    });
        } catch (c) {
            console.log(c);
            stopLoader();
        }
    });
}


async function masterAILensMOCRDataValidate(gridId, aiFlag) {
    return new Promise(async (resolve, reject) => {
        let agentNo = "MOCR-007"
        try {
            const AiMessage = async (message, id) => {
                const AiData = `<div class='aiLensRobotDataClass' id='${id}'><label><span><b>${agentNo}</b></span><span>${message}</span></label></div>`;
                await defaultAgentAiTypingBasedOnResponse(AiData, '', "", "");
            };

            var labelObject = {};
            try {
                labelObject = JSON.parse($("#labelObjectHidden").val());
            } catch (e) {

            }
            showaiLoader();
            var selectedRowsData = [];
            var basicData = {};
            var resultObj = {};
            var index = 0;
            var batchInd = $('#batchIndicator').val();
            var batchId = $('#mocrBatchId').val();
            var ValidateCommentColumn = $('#' + gridId + '_massValidateComment').val();
            if (!(ValidateCommentColumn != null && ValidateCommentColumn != '')) {
                ValidateCommentColumn = $('#massValidateComment').val();
            }
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
//                panaloldData[columnsArray[i]] = encodeURIComponent(hiddenVal);
                    }

                }
            });
            if (aiFlag != null && aiFlag != undefined && aiFlag != '' && aiFlag == 'Y') {
                await AiMessage("Validating master MOCR data to ensure completeness and consistency before processing.");
            }
            if (batchInd != null && batchInd != undefined && batchInd == 'Y')
            {
                var tableName = $('#tableName').val();
                $.ajax({
                    type: "post",
                    url: "getValidateSubGrids",
                    cache: false,
                    data: {
                        'gridId': gridId,
                    },
                    traditional: true,
                    dataType: 'html',
                    async: true,
                    success: async function (response) {
                        stopaiLoader();
                        if (response != null && response != '' && response != undefined)
                        {
                            response = JSON.parse(response);
                            if (response != null && !jQuery.isEmptyObject(response))
                            {
                                var validateSubGrids = response['validateSubGrids'];
                                var showMOCRValidateResponseGridId = response['showMOCRValidateResponseGridId'];
                                if (batchId != null && batchId != '' && batchId != 'undefined' && batchId != 'Currently no batch(s) available')
                                {
                                    showaiLoader();
                                    if (basicData != null)
                                    {
                                        selectedRowsData.push(basicData);
                                    }
                                    if (selectedRowsData != null && selectedRowsData.length != 0)
                                    {
                                        if (aiFlag != null && aiFlag != undefined && aiFlag != '' && aiFlag == 'Y') {
                                            await AiMessage("Retrieving and validating all MOCR Objects to ensure data consistency and completeness.");
//                                        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>Retrieving and validating all MOCR sub-grids to ensure data consistency and completeness.</div>");
                                        }
                                        showaiLoader();
                                        $.ajax({
                                            type: "post",
                                            url: "massMOCRValidateData",
                                            cache: false,
                                            data: {
                                                'jsonData': JSON.stringify(selectedRowsData),
                                                'tableName': tableName,
                                                'validateSubGrids': validateSubGrids,
                                                'batchId': batchId
                                            },
                                            traditional: true,
                                            dataType: 'html',
                                            async: true,
                                            success: function (response) {
                                                stopaiLoader();
                                                if (aiFlag != null && aiFlag != "" && aiFlag == "Y") {
                                                    defaultAITypingBasedOnResponse(`<div class='aiLensResultDataClass'>${response}</div>`);
                                                    var basicDataStr = $("#itemsstring").val();
                                                    if (basicDataStr != null && basicDataStr != '' && basicDataStr != undefined)
                                                    {
                                                        var basicData = JSON.parse(basicDataStr);
                                                        showCopiedMOCRHierForm(basicData, basicData['BATCH_ID'], basicData['gridId'], "dxpFormContent", "", "", "Y");
                                                    }
                                                    resolve("succesfully");
                                                }

                                                //   }

                                            }
                                        });
                                    }

                                } else
                                {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                }
                            }
                        }
                    }
                });

            } else {
                if (basicData != null && !jQuery.isEmptyObject(basicData))
                {
                    var value = basicData[ValidateCommentColumn];
                    if (value != null && value != undefined && value == 'Record processed')
                    {
                        var message = 'Selected record(s) are already Processed';
                        message = labelObject[message] != null ? labelObject[message] : message;
                        popupMessage(message);
                        return;
                    } else if (value != null && value != undefined && (value == 'OK' || value == 'Record Verified'))
                    {
                        var message = 'Selected record(s) are already Verified';
                        message = labelObject[message] != null ? labelObject[message] : message;
                        popupMessage(message);
                        return;
                    } else
                    {
                        if (basicData != null) {
                            selectedRowsData.push(basicData);
                        }
                    }
                    if (selectedRowsData != null && selectedRowsData.length != 0)
                    {
                        $.ajax({
                            type: "post",
                            url: "massValidateData",
                            cache: false,
                            data: {
                                'jsonData': JSON.stringify(selectedRowsData),
                                'tableName': tableName,
                                'gridId': gridId

                            },
                            traditional: true,
                            dataType: 'html',
                            async: true,
                            success: function (response) {
                                stopLoader();
                                $("#dialog1").html((labelObject["Please review the comments(Error log)."] != null ? labelObject["Please review the comments(Error log)."] : "Please review the comments(Error log)."));
                                $("#dialog1").dialog({resizable: false,
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
                        });
                    } else {
                        var message = 'Please select record(s) to process';
                        message = labelObject[message] != null ? labelObject[message] : message;
                        popupMessage(message);
                    }
                } else {
                    var message = 'Please select record(s) to process';
                    message = labelObject[message] != null ? labelObject[message] : message;
                    popupMessage(message);
                }

            }
            stopLoader();

            return resultObj;
        } catch (c) {
            console.log(c);
            stopLoader();
        }
    });

}
function showFullOutput(element) {
    if ($("#fullOutputDialog").length === 0) {
        $("body").append('<div id="fullOutputDialog" style="display:none;"></div>');
    }
    let fullText = element.getAttribute("data-fulloutput");
    $("#fullOutputDialog").html(
            "<pre style='white-space:pre-wrap; font-size:14px; padding:12px;'>" +
            fullText +
            "</pre>"
            );

    $("#fullOutputDialog").dialog({
        title: labelObject['Full Output'] != null ? labelObject['Full Output'] : 'Full Output',
        width: 500,
        height: 350,
        modal: true,
        appendTo: "body",
        zIndex: 999999,
        buttons: {
            Close: function () {
                $(this).dialog("close");
            }
        }
    });
}
async function getAIPromptContentByLensClick(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag,
        aiSearchString, aiRecordNo, aiReqNo, aiInstance, aiPlant, aiCompany, aiPorg, aiSorg, aiDC, aiDivision, aiERPNo, aiProcess) {
    openAINavigation();
    aiSearchString = $("#BATCH_ID").val();
    sessionStorage.removeItem("agentCode");
    sessionStorage.removeItem("AgentFlag");
    try {
        showaiLoader();

        $(".aiNotificationsResultClass").html("");

        $.ajax({
            type: "POST",
            url: 'getAILensContentFromDB',
            data: {
                aiQuery: aiQuery.replace(/\$/g, ' '),
                aiQueryAns: aiQueryAns.replace(/\$/g, ' '),
                aiQueryType: aiQueryType,
                aiSubQueryFlag: aiSubQueryFlag,
                aiTypeFlag: aiTypeFlag,
                aiSearchString: aiSearchString,
                aiRecordNo: aiRecordNo,
                aiReqNo: aiReqNo,
                aiInstance: aiInstance,
                aiPlant: aiPlant,
                aiCompany: aiCompany,
                aiPorg: aiPorg,
                aiSorg: aiSorg,
                aiDC: aiDC,
                aiDivision: aiDivision,
                aiERPNo: aiERPNo,
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopaiLoader();
                if (response !== null && response !== "" && response !== undefined) {
                    $("#aILensPromptResponseDiv").remove();
                    $("body").append("<div id='aILensPromptResponseDiv' style='display:none'></div>")
                    $("#aILensPromptResponseDiv").html(response);
                    const elements = $("#aILensPromptResponseDiv .viewData div");
                    for (let index = 0; index < elements.length; index++) {
                        const element = $(elements[index]);
                        const text = element.find(".viewText").text() || "";

                        if (text.includes("Auto Harmonize")) {
                            const onclickAttr = element.attr("onclick");
                            if (!onclickAttr) {
                                console.warn("No function found for element", index);
                                continue;
                            }
                            const fnMatch = onclickAttr.match(/^([a-zA-Z0-9_$.]+)\((.*)\)$/);
                            if (!fnMatch) {
                                console.warn("Invalid function format in attribute:", onclickAttr);
                                continue;
                            }
                            const functionName = fnMatch[1];
                            const rawArgs = fnMatch[2];
                            const args = eval(`[${rawArgs}]`);

                            const fnRef = window[functionName];
                            fnRef(...args);
                            return;

                        }

                    }



                }

            }
        });
    } catch (e) {
        stopaiLoader();
    }
}
function likeAIGivenData(type, event, el) {

    let isSubmitted = false; // ✅ Track submit state

    // 🔹 Identify wrapper & data
    const wrapper = $(el).closest('.airesponseWrapperDiv');
    const promptId = wrapper.data('id');
    const text = wrapper.find('.aiLensResultDataClass').text().trim();

    console.log("Feedback Text:", text);
    console.log("Type:", type);

    // 🔹 Icon handling (CSS-based, SAFE)
    const icon = $(el);
    icon.addClass("ai-icon-selected"); // SAP blue
    $("#aiFeedbackPopup").data("icon", icon);

    // 🔹 Popup HTML
    const popupHtml = `
        <div id="aiFeedbackPopup" class="ai-popup-overlay">
            <div class="aiPopup">

                <h3 style="text-align:center;">
                    ${type === 'LIKE'
            ? '👍 What did you like?'
            : type === 'DISLIKE'
            ? '👎 What went wrong?'
            : ''}
                </h3>

                <p style="text-align:center; font-size:14px;">
                    Your feedback helps improve future answers
                </p>

                ${type === 'DISLIKE' ? `
                <div class="feedbackReason">
                    <select id="dislikeReason">
                        <option value="">Select a reason</option>
                        <option>Data validation failed</option>
                        <option>Business rule mismatch</option>
                        <option>Mandatory fields missing</option>
                        <option>Incorrect reference data</option>
                        <option>Insufficient explanation</option>
                        <option>Requires revision</option>
                    </select>
                </div>` : ''}

                <div class="analytics">
                    <div class="ratingBarWrapper">
                        <div class="ratingValue">
                            <span id="ratingPercent">0%</span>
                            <input type="range" id="ratingBar" min="0" max="100" value="0">
                        </div>
                    </div>
                    <input type="hidden" id="selectedRating" value="0">
                </div>

                <div class="feedbackText">
                    <textarea id="aiFeedbackComment"
                        placeholder="Write your feedback..."
                        rows="4"></textarea>
                </div>

            </div>
        </div>
    `;

    // 🔹 Inject popup
    $("#modalDailogDiv").html(popupHtml);

    // 🔹 Rating bar logic
    $(document).off('input change', '#ratingBar')
            .on('input change', '#ratingBar', function () {

                const percent = Number(this.value);
                $('#ratingPercent').text(percent + '%');

                let rating = Math.ceil(percent / 20);
                rating = rating === 0 ? 1 : rating;
                $('#selectedRating').val(rating);

                const hue = percent * 1.2; // red → green
                const color = `hsl(${hue}, 80%, 45%)`;

                this.style.background = `
                linear-gradient(
                    to right,
                    ${color} 0%,
                    ${color} ${percent}%,
                    #ddd ${percent}%,
                    #ddd 100%
                )
            `;
            });

    // 🔹 Dialog
    $("#modalDailogDiv").dialog({
        resizable: false,
        title: (labelObject['Feedback'] || 'Feedback'),
        modal: true,
        width: 480,
        height: 400,
        minHeight: 385,
        fluid: true,
        dialogClass: 'aiFeedbackPopupWrapper',

        buttons: [
            {
                text: (labelObject['Submit'] || "Submit"),
                click: function () {

                    isSubmitted = true; // ✅ mark submitted

                    // ✅ Keep icon SAP blue after submit
                    submitAIFeedback(type, el, text, promptId);

                    $(this).dialog("close").dialog("destroy");
                }
            },
            {
                text: (labelObject['Reset'] || "Reset"),
                click: function () {
                    resetAIFeedback(type);
                }
            }
        ],

        open: function () {
            $(".visionHeaderMain, .visionFooterMain").css("z-index", "999");
        },

        beforeClose: function () {

            // ❌ Reset icon ONLY if NOT submitted
            if (!isSubmitted) {
                const savedIcon = $("#aiFeedbackPopup").data("icon");
                savedIcon && savedIcon.removeClass("ai-icon-selected");
            }

            $(".visionHeaderMain, .visionFooterMain").css("z-index", "99999");
        }
    });
}
function submitAIFeedback(type, img, input, promptId) {

    const rating = $('#selectedRating').val();
    const comment = $('#aiFeedbackComment').val();
    const reason = type === 'DISLIKE' ? $('#dislikeReason').val() : null;


    console.log('Action:', type);
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    console.log('Reason:', reason);
    if (rating == 0) {
        return false;
    }

    const payload = {
        action: type, // LIKE / DISLIKE
        rating: rating, // 1–5
        comment: comment,
        reason: reason,
        input: input
    };
    showLoader();

    console.log('Analytics Payload:', payload);
    try {
        $.ajax({
            type: "POST",
            url: 'getAILensFeedback',
            data: payload,
            dataType: 'json',
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();

                if (response) {
                    console.log(response);
                    //const rating = `${response.rating}`;
                    //$("#ratingscore_" + type + "_" + promptId).text(rating);
                    $("#modalDailogDiv").html(
                            `<div style="margin-top: -6px;font-weight: 600;">${response.status}</div>`);
                }
                $("#modalDailogDiv").dialog({
                    resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    width: 300,
                    height: 100,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : "Ok"),
                            click: function () {
                                //img && (img.src = img.dataset.old);
                                $("#modalDailogDiv").empty();
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }
                        }
                    ],
                    open: function () {
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function ()
                    {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
            },
        });
    } catch (c) {
        console.log(c);

    }
}


function resetAIFeedback(type) {
    // reset rating
    $('.rating span.active').val(0);
    $('.rating span').removeClass('active');
    $('#ratingText').text('');
    $('.rating span:not(.active)').css('color', '#ccc');

    // reset comment
    $('#aiFeedbackComment').val('');
    $('#dislikeReason').val('');

    console.log('Feedback cleared for:', type);
}
function aiRaiseReqBasedOnLensInput(query, columnName, labelName, reqValues) {
    if (reqValues != null && reqValues != undefined && reqValues != '') {
        var parts = reqValues.split(",");
        var gridOrComponentId = parts[0]; // MM_NEW_CHNG_MGR
        var compColName = parts[1]; // RECORD_NO
        var CompType = parts[2]; // componenet type GRID
        var compDesc = parts[3]; // Label Change Request
        var compRoleId = parts[4]; // Role Id MM_MANAGER
        var processId = parts[5]; // processId like Create
        var compDomain = parts[6]; // Domain like PRODUCT
        var compSearchId = parts[7]; // SearchId like FMM_MGR_MATERIAL_SEARCH
    }

    $("#aiRecordNumberTextId").val("");
    if (columnName != null && columnName != undefined && columnName != '' && columnName == 'RECORD_NO') {
        const showRecordNumberInput = `
    <div class="aiLensCreateNewItem">
        <div class="container">
            <div class="header">Please enter the Record Number</div>
            <input type="text" 
                   id="aiRecordNumberTextId" 
                   class="form-control aiInputBox" 
                   placeholder="Enter record number..." 
                   maxlength="50" />
            <div class="error"></div>
            <button id="aiRecordNumberSubmitId" class="btn">Submit</button>
            <button id="aiViewAvailableRecId" class="btn">View Available Records</button>
        </div>
    </div>
`;

        defaultAITypingBasedOnResponse(showRecordNumberInput);
        $(document).one("click", "#aiRecordNumberSubmitId", function () {
            let promptValue = $("#aiRecordNumberTextId").val();
            if (promptValue) {
                $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>" + promptValue + "</div>");
                showAILensFixedMessageInAIFormat("Your " + compDesc + " is being processed. Please wait until the operation completes.");
                getMaterialComponentGrid(CompType, gridOrComponentId, compRoleId, CompType);

                setTimeout(function () {
                    showAILensFixedMessageInAIFormat("" + compDesc + " grid has been opened and results are displayed successfully.");
                    $("#" + gridOrComponentId + "_" + compColName).val(promptValue);
                    getUI5FilterGridResults(gridOrComponentId, 0);
                    console.log("AI Lens search triggered for:", query);
//                                        showAILensFixedMessageInAIFormat("Please wait, filtering your input and displaying the results...");
                }, 2000);
                setTimeout(function () {
                    showAILensFixedMessageInAIFormat("Please wait, the form is opening to show the " + compDesc + " material.");
                    $('#' + gridOrComponentId).jqxGrid('selectrow', 0);
                    var rowdata = $('#' + gridOrComponentId).jqxGrid('getrowdata', 0);
                    navigateToForm(compColName, rowdata, 'form', gridOrComponentId, 0);

//                                        $('#' + selectedGridId).trigger('rowselect', { args: { row: rowdata } });
                    console.log("AI Lens search triggered for:", query);
                    setTimeout(function () {
                        showAILensFixedMessageInAIFormat("Your " + compDesc + " material process has been initiated.");
                        $("#" + processId).trigger("click");
                        $("#aiLensAutomationFlag").val("N");
                    }, 15000);
                }, 8000);
            }

        });
        $(document).one("click", "#aiViewAvailableRecId", function () {
            showKDSPreviewGrid(gridOrComponentId, compDesc, [], 'dialog10');
        });
    } else if (columnName != null && columnName != undefined && columnName != '' && columnName == 'CLASS') {

    } else if (columnName != null && columnName != undefined && columnName != '' && columnName == 'GRID') {
        showKDSPreviewGrid(gridOrComponentId, compDesc, [], 'dialog10');
    }
}
//AI Lens Image creation start
function openImageCreationPopup() {
    aiNextMessageType = "IMAGE";
    const input = document.getElementById("aiTypedValue");
    input.placeholder = "Describe the image you want to generate...";
    input.focus();
}

function createImageFromPrompt(prompt) {
    showaiLoader();
    const imageUrl =
            "https://image.pollinations.ai/prompt/" +
            encodeURIComponent(prompt) + "single%20chrome,%20industrial%20spare%20part,%20front%20view,%20isolated%20on%20solid%20blue%20background,%20product%20photography,%20clean%20lighting,%20realistic,%20no%20machinery,%20no%20gears,%20no%20sci-fi"
    "?model=flux" +
            "&width=1024" +
            "&height=1024" +
            "&enhance=true" +
            "&nologo=true" +
            "&nofeed=true" +
            "&seed=" + Math.floor(Math.random() * 1000000000) +
            "&nocache=" + Date.now();

    const img = new Image();
    img.onload = function () {
        const id = "img_" + Date.now();
        const html = `
            <div class="airesponseWrapperDiv">
                <div style="
                    position:relative;
                    max-width:310px;
                    border-radius:12px;
                    overflow:hidden;
                    margin:6px 0;
                    box-shadow:0 6px 20px rgba(0,0,0,0.08);
                ">
                    <img 
                        src="${imageUrl}"
                        style="
                            width:100%;
                            max-height:210px;
                            object-fit:cover;
                            display:block;
                            border-radius:12px;
                            background:#fff;
                        "
                    >
                    
                    <div id="${id}_actions"
                        style="
                            position:absolute;
                            inset:0;
                            background:linear-gradient(
                                to top,
                                rgba(0,0,0,0.55),
                                rgba(0,0,0,0.0)
                            );
                            display:flex;
                            align-items:flex-end;
                            justify-content:flex-end;
                            padding:12px;
                            gap:8px;
                            opacity:0;
                            transition:opacity .25s ease;
                        ">
                        <button
                            onclick="aiLensCreatedImageViewer('${imageUrl}')"
                            style="
                                padding:5px 12px;
                                border-radius:18px;
                                border:none;
                                background:rgba(255,255,255,.95);
                                cursor:pointer;
                                font-size:12px;
                            ">
                            View
                        </button>
                        <button
                            onclick="aiLensCreatedDownloadImage('${imageUrl}')"
                            style="
                                padding:5px 14px;
                                border-radius:18px;
                                border:none;
                                background:#4f46e5;
                                color:white;
                                cursor:pointer;
                                font-size:12px;
                            ">
                            Download
                        </button>
                    </div>

                </div>
            </div>
        `;

        $(".aiChatgptResponseContainer").append(html);
        const card = $(".aiChatgptResponseContainer").children().last();
        const overlay = card.find(`#${id}_actions`);
        card.on("mouseenter", () => overlay.css("opacity", "1"));
        card.on("mouseleave", () => overlay.css("opacity", "0"));
        aiAutoScrollContainer();
        stopaiLoader();
    };
    img.onerror = function () {
        stopaiLoader();
        alert("Image generation failed. Please try again.");
    };
    img.src = imageUrl;
}


function showImageActions(containerId, imageUrl) {
    const actions = document.getElementById(containerId + "_actions");
    if (actions) {
        actions.style.display = "flex";
    }
}

function aiLensCreatedImageViewer(imageUrl) {
    const old = document.getElementById("aiImageViewer");
    if (old)
        old.remove();
    const viewer = document.createElement("div");
    viewer.id = "aiImageViewer";
    viewer.innerHTML = `
        <div style="
            position:fixed;
            inset:0;
            background:rgba(0,0,0,0.9);
            z-index:999999;
            display:flex;
            align-items:center;
            justify-content:center;
        ">
            <img 
                src="${imageUrl}"
                style="
                    max-width:92%;
                    max-height:92%;
                    border-radius:16px;
                    box-shadow:0 30px 80px rgba(0,0,0,.7);
                "
            >
            <div style="
                position:absolute;
                top:20px;
                right:24px;
                color:white;
                font-size:28px;
                cursor:pointer;
            " onclick="aiLensCreatedImageViewerClose()">×</div>
        </div>
    `;
    document.body.appendChild(viewer);
}

function aiLensCreatedImageViewerClose() {
    const v = document.getElementById("aiImageViewer");
    if (v)
        v.remove();
}

function aiLensCreatedDownloadImage(imageUrl) {

    fetch(imageUrl)
            .then(res => res.blob())
            .then(blob => {

                const url = window.URL.createObjectURL(blob);

                const a = document.createElement("a");
                a.href = url;
                a.download = "ai-image.png";

                document.body.appendChild(a);
                a.click();

                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            })
            .catch(err => {
                alert("Download failed");
                console.error(err);
            });
}

//AI Lens Image creation end

//AI lens Service PR creation start // 10-02-2026
function getAIPRServiceCreation(gridId, copyId, controlType, formId) {
    var moduleCode = $("#currentDomain").val();
    moduleCode = moduleCode.charAt(0).toUpperCase() + moduleCode.slice(1).toLowerCase();
    if (!gridId)
        return;
//    let indexes = $("#" + gridId).jqxGrid('selectedrowindexes');
    let indexes = prListArr;

    if (indexes.length === 0) {
        showMesg("Please select at least one row to process");
        return;
    }

    openAINavigation();
    defaultAITypingBasedOnResponse(
            "<div class='aiLensResultDataClass'>Creating " + moduleCode + "...</div>"
            );

    showaiLoader();

    let successRecords = [];
    let failedCount = 0;
    let currentIndex = 0;

    function processNextRow() {
        if (currentIndex >= indexes.length) {
            stopaiLoader();
            $("#spanPrCreateCountId span").text(prListArr.length);
            let resultStr = successRecords.length + " Record No(s) Created Successfully, "
//                    + "Failed: " + failedCount
                    + "<br>Record No(s): " + successRecords.join(", ");

            defaultAITypingBasedOnResponse(
                    "<div class='aiLensResultDataClass'>" + resultStr + "</div>"
                    );
            setTimeout(() => {
                defaultAITypingBasedOnResponse(generateAccessData("Do you want to create a new  Records?",
                        "serviceAiNewRecordId"));
                $(document).on("click", "#serviceAiNewRecordId", function () {
                    let promptAskStr = "Please provide the inputs for " + moduleCode + " creation";
                    defaultAITypingBasedOnResponse(
                            "<div class='aiLensResultDataClass'>" + promptAskStr + "</div>"
                            );
                    $("#aiTypedValue").focus();
                    localStorage.setItem("aiPrmtFocDescFlag", "Y");
                })
            }, 1000);
            return;
        }
//        let rowIndex = indexes[currentIndex];
//        let rowData = $("#" + gridId).jqxGrid('getrowdata', rowIndex);
        let rowData = indexes[currentIndex];
        let actualIndex = currentIndex;

        currentIndex++;

        if (!rowData) {
//            failedCount++;
            processNextRow();
            return;
        }

        let selectedRowData = {...rowData};

        selectedRowData.FOLLOWUP_GRID_ID = gridId;
        selectedRowData.objectid = formId;
        selectedRowData.ssfromobject = {...rowData};

        let copyJSON = {
            formdata: selectedRowData,
            ssfromobject: selectedRowData.ssfromobject
        };
//        prListArr.splice(actualIndex, 1);
        $.ajax({
            type: 'POST',
            url: 'copyRecords',
            async: true,
            data: {
                jsonData: JSON.stringify(copyJSON),
                copyId: copyId,
                controlType: controlType,
                formId: formId
            },
            success: function (data) {
                try {
                    let jsonObj = JSON.parse(data);
                    if (jsonObj.messageFlag) {
                        successRecords.push(jsonObj['NEW_RECORD_NO']);
                        
                    } else {
                        failedCount++;
                    }
                } catch (e) {
                    failedCount++;
                }
                processNextRow();
            },
            error: function () {
                failedCount++;
                processNextRow();
            }
        });
    }

    processNextRow();
}
let prListArr = [];

function getAIPRServiceListCreation(gridId) {

    let indexes = $("#" + gridId).jqxGrid('selectedrowindexes');

    if (!indexes || indexes.length === 0) {
        showMesg("Please select at least one row to process");
        return;
    }
    indexes.forEach(function (index) {
        let rowData = $("#" + gridId).jqxGrid('getrowdata', index);

        let exists = prListArr.some(obj => obj.uniqueid
                    === rowData.uniqueid
        );
        if (!exists) {
            prListArr.push(rowData);
        }
    });

    let totalCount = prListArr.length;

    let $countSpan = $("#spanPrCreateCountId");

    if ($countSpan.length === 0) {
        $("#" + gridId + " .innerRenderToolBar img").each(function () {
            if ($(this).attr("title") === "View to List") {
                $(this).after(`
                    <sup class="spanPrCreateCount" id="spanPrCreateCountId">
                        <span>${totalCount}</span>
                    </sup>
                `);
            }
        });
    } else {
        $countSpan.find("span").text(totalCount);
    }
}
function getAIPRServiceListViewCreation() {

    if (!prListArr || prListArr.length === 0) {
        showErrorPopupMessage("No Data", 'View PR List', 150, 150);
        return "";
    }

    let table = "<table border='1'><tr>";
    const excludeKeys = ['show_detail', 'HIDDEN', 'uniqueid', 'uid', 'boundindex', 'visibleindex', 'RECORD_NO', 'ERP_NO'];

    // Header
    Object.keys(prListArr[0]).forEach(key => {
        if (!excludeKeys.some(ex => key.includes(ex))) {
            table += `<th>${key}</th>`;
        }
    });
    table += "</tr>";

    // Rows
    for (let i = 0; i < prListArr.length; i++) {
        table += "<tr>";

        Object.entries(prListArr[i]).forEach(([key, val]) => {
            if (!excludeKeys.some(ex => key.includes(ex))) {
                table += `<td style='max-width: 350px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;' title='${val || ''}'>${val || ''}</td>`;
        }
        });

        table += "</tr>";
    }

    table += "</table>";

    showErrorPopupMessage(table, 'View PR List', 700, 400);
}
function aiLensServiceAutoCreate(gridId, aiPromptDesc) {
    showaiLoader();
    $.ajax({
        type: "post",
        traditional: true,
        url: "insertDescriptionInStg",
        cache: false,
        dataType: 'json',
        data: {
            aiPromptDesc: aiPromptDesc
        },
        success: function (data) {
            stopaiLoader();
            localStorage.removeItem("aiPrmtFocDescFlag");
            if (data != null && !jQuery.isEmptyObject(data)) {
                let batchNo = data['batchNumber'];
                let aiMessage = batchNo + " Created Successfully";
                defaultAITypingBasedOnResponse(
                        "<div class='aiLensResultDataClass'>" + aiMessage + "</div>"
                        );
                var paramArray = [];
                var paramObj = {};
                paramObj.column = 'BATCH_ID';
                paramObj.value = batchNo;
                paramObj.operator = 'EQUALS';
                paramObj.selectNum = 1;
                paramArray.push(paramObj);
                $("#dxpGridContent").show();
                getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'Y');
                if ($("#BATCH_ID").length === 0) {
                    $("body").append("<input type='hidden' id='BATCH_ID'>");
                }
                $("#BATCH_ID").val(batchNo);

                setTimeout(() => {
                    getAIContentBasedOnQuery('Choose file to upload', 'Data Imported Successfully in staging area', 'MASSDATAPROCESSCREATE', "Y", "N", batchNo, '', '', '', '', '', '', '', '', '', '', 'AUTOPROCESS');
//                getAIPromptContentByLensClick("Choose file to upload", "Data Imported Successfully in staging area", "MASSDATAPROCESSCREATE", "Y", "N")
                }, 1000);
            }

        }, error: function (errorThrown) {
            stopaiLoader();
            defaultAITypingBasedOnResponse("<div class='aiLensResultDataClass'>" + errorThrown + "</div>");

        }
    });

}
function getAILenServiceCreate(data, gridResultObj) {
    var moduleCode = $("#currentDomain").val();
    moduleCode = moduleCode.charAt(0).toUpperCase() + moduleCode.slice(1).toLowerCase();
    if (data.length === 0) {
        setTimeout(() => {
            openAINavigation();
            let randomId = Math.floor(Math.random() * 1000);
            let noDataStr = "<ul>No Data found for Search Results of ";

            $("#gridUI5Filter_" + gridResultObj.gridId + " .ui5gridfilter-container-form .ui5gridfilter-item")
                    .each(function () {
                        const label = $(this).find("label").text().trim();
                        const value = $(this).find("input").val();

                        if (value) {
                            noDataStr += `<li>${label}: ${value}</li>`;

                        }
                    });

            noDataStr += `</ul>`;

            defaultAITypingBasedOnResponse(`<div class='aiLensResultDataClass'>${noDataStr}</div>`);
            setTimeout(function () {
                defaultAITypingBasedOnResponse(generateAccessData("Do you want to create a new " + moduleCode + " Records?",
                        "serviceAiNewRecordId" + randomId + ""));
                $(document).on("click", "#serviceAiNewRecordId" + randomId + "", function () {
                    let promptAskStr = "Please provide the inputs for " + moduleCode + " creation";
                    defaultAITypingBasedOnResponse(
                            "<div class='aiLensResultDataClass'>" + promptAskStr + "</div>"
                            );
                    $("#aiTypedValue").focus();
                    localStorage.setItem("aiPrmtFocDescFlag", "Y");
                })
            }, 5000)


        }, 500);
    }
}
//AI lens Service PR creation end // 10-02-2026

//AIlens Validation missing info start 11-02-202
//function KDSAIlensReviewOptions() {
//
//    /* ✅ Inject CSS once */
//    if (!document.getElementById("kdsReviewStyles")) {
//
//        var styles = `
//        .aiLensReviewOptions {
//            background: #ffffff;
//            border-radius: 10px;
//            box-shadow: 0 4px 14px rgba(0,0,0,0.12);
//            width: 330px;
//            font-family: Arial, sans-serif;
//            overflow: hidden;
//        }
//        .ai-review-header {
//            background: #0a6ed1;
//            color: white;
//            padding: 6px 10px;
//            font-size: 14px;
//            font-weight: 600;
//            text-align: center;
//        }
//        .ai-review-list {
//            padding: 6px 8px;
//        }
//        .ai-review-item {
//            padding: 7px 6px;
//            border-radius: 6px;
//            cursor: pointer;
//        }
//        .ai-review-row {
//            display: flex;
//            align-items: center;
//        }
//        .ai-review-item:hover {
//            background: #f2f7fd;
//        }
//        .ai-review-icon {
//            margin-right: 8px;
//        }
//        .ai-review-text {
//            font-size: 13px;
//            color: #0a6ed1;
//        }
//        .ai-review-details {
//            margin-top: 6px;
//            padding: 6px 10px;
//            background: #f9fbff;
//            border-left: 2px solid #0a6ed1;
//            border-radius: 4px;
//            display: none;
//            font-size: 12.5px;
//            color: #333;
//        }
//        .ai-review-details ul {
//            padding-left: 16px;
//            margin: 4px 0;
//        }
//        .ai-review-details li {
//            margin-bottom: 3px;
//        }`;
//
//        $("<style>", {
//            id: "kdsReviewStyles",
//            text: styles
//        }).appendTo("head");
//    }
//
//    /* ✅ Icons */
//    var icons = {
//        missing: "🔍",
//        warnings: "⚠",
//        completeness: "📊",
//        duplicates: "🔁",
//        suggestions: "🧾",
//        linked: "🔗"
//    };
//    /* ✅ Example Review Data */
//    var reviewData = {
//
//    missing: [
//        "Mandatory Properties (Characteristics)",
//        "Manufacturer Part Number (Reference Data)",
//        "OEM Part Number (Reference Data)",
//        "Model Number (Reference Data)",
//        "MRP Group (SAP → MRP)"
//    ],
//
//    warnings: [
//        "HSN Code not verified",
//        "Gross Weight not maintained",
//        "Volume Unit missing"
//    ],
// 
//    completeness: [
//        "32% Mandatory fields completed"
//    ],
//
//    duplicates: [
//        "Similar material already exists",
//        "Matching Short Description detected"
//    ],
//
//    suggestions: [
//        "Consider adding UNSPSC classification",
//        "Maintain Gross Weight for logistics accuracy",
//        "Verify Material Group assignment"
//    ],
//
//    linked: [
//        "No linked BoM found",
//        "Equipment linkage not maintained"
//    ]
//};
//    /* ✅ Options */
//    var options = [
//        { label: "Missing Mandatory Fields", value: "missing" },
//        { label: "Validation Warnings", value: "warnings" },
//        { label: "Completeness Score", value: "completeness" },
//        { label: "Duplicate Check Summary", value: "duplicates" },
//        { label: "Suggested Corrections", value: "suggestions" },
//        { label: "Linked Objects / BoM Check", value: "linked" }
//    ];
//
//    /* ✅ Build Panel */
//    var $panel = $("<div>", { class: "aiLensReviewOptions kds-ai-global" });
//    var $header = $("<div>", {
//        class: "ai-review-header",
//        text: "Quality Check"
//    });
//
//    var $list = $("<div>", { class: "ai-review-list" });
//
//    for (var i = 0; i < options.length; i++) {
//
//        var value = options[i].value;
//
//        var $item = $("<div>", {
//            class: "ai-review-item",
//            "data-value": value
//        });
//
//        var $row = $("<div>", { class: "ai-review-row" });
//
//        var $icon = $("<span>", {
//            class: "ai-review-icon",
//            text: icons[value]
//        });
//
//        var $text = $("<span>", {
//            class: "ai-review-text",
//            text: options[i].label
//        });
//
//        var $details = $("<div>", {
//            class: "ai-review-details"
//        });
//
//        if (reviewData[value] && reviewData[value].length) {
//
//            var $ul = $("<ul>");
//
//            for (var j = 0; j < reviewData[value].length; j++) {
//                $ul.append($("<li>").text(reviewData[value][j]));
//            }
//
//            $details.append($ul);
//        } else {
//            $details.text("No issues found.");
//        }
//
//        $row.append($icon).append($text);
//        $item.append($row).append($details);
//        $list.append($item);
//    }
//
//    $panel.append($header).append($list);
//
//    /* ✅ Render */
//    defaultAITypingBasedOnResponse($panel.prop("outerHTML"));
//
//    /* ✅ Click Handling */
//    $(document).off("click", ".ai-review-item");
//
//    $(document).on("click", ".ai-review-item", function () {
//
//        var $this = $(this);
//        var $details = $this.find(".ai-review-details");
//
//        // Collapse others
//        $(".ai-review-details").not($details).slideUp(150);
//
//        // Toggle current
//        $details.slideToggle(150);
//    });
//}

async function AIlensRecReviewOptions() {
    /* ✅ Inject CSS once */
    if (!document.getElementById("kdsReviewStyles")) {
        var styles = `
        .aiLensReviewOptions {
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 14px rgba(0,0,0,0.12);
            width: 330px;
            font-family: Arial, sans-serif;
            overflow: hidden;
        }
        .ai-review-header {
            background: #0b4a99;
            color: white;
            padding: 6px 10px;
            font-size: 14px;
            font-weight: 600;
            text-align: center;
        }
        .ai-review-list {
            padding: 6px 8px;
        }
        .ai-review-item {
            padding: 7px 6px;
            border-radius: 6px;
            cursor: pointer;
        }
        .ai-review-row {
            display: flex;
            align-items: center;
        }
        .ai-review-item:hover {
            background: #f2f7fd;
        }
        .ai-review-icon {
            margin-right: 8px;
        }
        .ai-review-text {
            font-size: 13px;
            color: #0a6ed1;
        }
        .ai-review-details {
            margin-top: 6px;
            padding: 6px 10px;
            background: #f9fbff;
            border-left: 2px solid #0a6ed1;
            border-radius: 4px;
            display: none;
            font-size: 12.5px;
            color: #333;
        }
        .ai-review-details ul {
            padding-left: 16px;
            margin: 4px 0;
        }
        .ai-review-details li {
            margin-bottom: 3px;
        }`;
        $("<style>", {
            id: "kdsReviewStyles",
            text: styles
        }).appendTo("head");
    }
    /* ✅ Icons */
    var icons = {
        missing: "🔍",
        warnings: "⚠",
        completeness: "📊",
        duplicates: "🔁",
        suggestions: "🧾",
        linked: "🔗"
    };
    /* ✅ 🔥 DYNAMIC DATA */
    const missing = AIRecScanUniversalMandatory();
    const warnings = AIRecScanWarnings();
    const duplicates = AIRecScanDuplicates();
    const linked = AIRecScanLinkedObjects();
    const completenessScore = AIRecCalCompUniversal();
    const suggestions = AIRecGenSuggestions(missing);
    const reviewData = {
        missing: missing,
        warnings: warnings,
        completeness: [completenessScore + " Mandatory fields completed"],
        duplicates: duplicates,
        suggestions: suggestions,
        linked: linked
    };
    /* ✅ Options */
    var options = [
        {label: "Missing Mandatory Fields", value: "missing"},
        {label: "Validation Warnings", value: "warnings"},
        {label: "Completeness Score", value: "completeness"},
        {label: "Duplicate Check Summary", value: "duplicates"},
        {label: "Suggested Corrections", value: "suggestions"},
        {label: "Linked Objects / BoM Check", value: "linked"}
    ];
    /* ✅ Build Panel */
    var $panel = $("<div>", {class: "aiLensReviewOptions kds-ai-global"});
    var $header = $("<div>", {
        class: "ai-review-header",
        text: "AI Validation Summary"
    });
    var $list = $("<div>", {class: "ai-review-list"});
    options.forEach(opt => {
        var $item = $("<div>", {
            class: "ai-review-item",
            "data-value": opt.value
        });
        var $row = $("<div>", {class: "ai-review-row"});
        $("<span>", {
            class: "ai-review-icon",
            text: icons[opt.value]
        }).appendTo($row);
        $("<span>", {
            class: "ai-review-text",
            text: opt.label
        }).appendTo($row);
        var $details = $("<div>", {class: "ai-review-details"});
        if (reviewData[opt.value] && reviewData[opt.value].length) {
            var $ul = $("<ul>");
            reviewData[opt.value].forEach(item => {
                $ul.append($("<li>").text(item));
            });
            $details.append($ul);
        } else {
            $details.text("No issues found.");
        }
        $item.append($row).append($details);
        $list.append($item);
    });
    $panel.append($header).append($list);
    /* ✅ WAIT for AI typing */
    await defaultAgentAiTypingBasedOnResponse($panel.prop("outerHTML"), 'N');
    console.log("✅ AI typing finished");
    AIRecAttachReviewHandlers();
}
function AIRecAttachReviewHandlers() {

    $(document).off("click", ".ai-review-item");

    $(document).on("click", ".ai-review-item", function () {

        var $this = $(this);
        var $details = $this.find(".ai-review-details");

        $(".ai-review-details").not($details).slideUp(150);
        $details.slideToggle(150);
    });
}
async function AIlensRecShowTabs() {
    const $tabs = $("#allTabListMainWrapperId .fioriformTabUlListclass li");
    if (!$tabs.length) {
        console.warn("No tabs found.");
        return;
    }
    /* ✅ Inject CSS once */
    if (!document.getElementById("kdsTabStyles")) {

        const styles = `
        .aiLensTabsPanel {
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 14px rgba(0,0,0,0.12);
            width: 330px;
            font-family: Arial, sans-serif;
            overflow: hidden;
            margin-top: 8px;
        }
        .ai-tabs-header {
            background: #0b4a99;
            color: white;
            padding: 6px 10px;
            font-size: 14px;
            font-weight: 600;
            text-align: center;
        }
        .ai-tabs-list {
            padding: 6px 8px;
        }
        .ai-tab-item {
            display: flex;
            align-items: center;
            padding: 8px 6px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 13px;
            color: #0a6ed1;
        }
        .ai-tab-item:hover {
            background: #f2f7fd;
        }
        .ai-tab-icon {
            width: 18px;
            height: 18px;
            margin-right: 8px;
        }
        .ai-tab-desc {
            margin-top: 6px;
            background: #f9fbff;
            border-left: 3px solid #0a6ed1;
            border-radius: 6px;
            padding: 8px 10px;
            font-size: 12.5px;
            color: #333;
        }`;
        $("<style>", {
            id: "kdsTabStyles",
            text: styles
        }).appendTo("head");
    }
    /* ✅ Tab Descriptions */
    const tabDescriptions = {
        "General Info": "View and maintain core material details such as Plant, UOM, Class, and Material Type.",
        "Characteristics": "Maintain classification attributes like Voltage Rating, Power Rating, Frame, etc.",
        "BoM Details (Linked to Equip/Floc/Material)": "Manage Bill of Materials and linked object relationships.",
        "Reference Data": "Maintain manufacturer part numbers, OEM data, and model numbers.",
        "SAP Data": "Maintain SAP-specific views like Basic Data, Purchasing, MRP, Accounting.",
        "Descriptions": "Maintain multilingual material descriptions.",
        "Additional Text": "Maintain supplementary notes and documentation."
    };
    /* ✅ Build Panel */
    const $panel = $("<div>", {class: "aiLensTabsPanel kds-ai-global"});
    const $header = $("<div>", {
        class: "ai-tabs-header",
        text: "AI Navigation Panel"
    });
    const $list = $("<div>", {class: "ai-tabs-list"});
    $tabs.each(function () {
        const $tab = $(this);
        const tabName = $tab.text().trim();
        const onclickFn = $tab.attr("onclick");
        const imgSrc = $tab.find("img").attr("src");
        if (!tabName)
            return;
        const $item = $("<div>", {
            class: "ai-tab-item",
            "data-onclick": onclickFn,
            "data-tabname": tabName
        });
        /* ✅ Tab Icon */
        if (imgSrc) {
            $("<img>", {
                src: imgSrc,
                class: "ai-tab-icon"
            }).appendTo($item);
        } else {
            $("<span>", {
                class: "ai-tab-icon",
                text: "📑"
            }).appendTo($item);
        }
        $("<span>", {
            text: tabName
        }).appendTo($item);
        $list.append($item);
    });
    $panel.append($header).append($list);
    /* ✅ Render via YOUR typing engine */
    await defaultAgentAiTypingBasedOnResponse($panel.prop("outerHTML"), 'N');
    /* ✅ Click Handling */
    $(document).off("click", ".ai-tab-item");
    $(document).on("click", ".ai-tab-item", async function () {
        const tabName = $(this).data("tabname");
        console.log("👉 Tab clicked:", tabName);
        const $realTab = $(".fioriformTabUlListclass li").filter(function () {
            const realName = $.trim(
                    $(this).find("span").last().text() || $(this).text()
                    );
            return realName === tabName;
        });
        if (!$realTab.length) {
            console.warn("❌ Tab not found:", tabName);
            return;
        }
        try {
            console.log("✅ Triggering REAL click");
            $realTab.trigger("click");
            if ($realTab[0])
                $realTab[0].click();
            await waitForTabRender();
            console.log("🔥 Calling Insights");
            await AIRecShowTabInsights(tabName);
            console.log("✅ Insights Done");
        } catch (e) {
            console.error("❌ ERROR:", e);
        }
    });


}
function AIRecScanDuplicates() {

    let duplicates = [];

    $(".duplicateRecordRow:visible").each(function () {
        duplicates.push($(this).text().trim());
    });

    return duplicates;
}
function AIRecScanLinkedObjects() {

    let linked = [];

    $("#bomTableId tr").each(function () {

        const rowText = $(this).text().trim();

        if (rowText) {
            linked.push(rowText);
        }
    });

    if (!linked.length) {
        linked.push("No linked BoM / Equipment / Floc");
    }

    return linked;
}
function AIRecScanWarnings() {

    let warnings = [];

    $("div.allErrors:visible").each(function () {

        const msg = $(this).text().trim();

        if (msg)
            warnings.push(msg);
    });

    return warnings;
}
function AIRecCalCompUniversal() {

    const $container = $(".visionRegisterMaterialMainWrapper:visible");

    if (!$container.length)
        return "0%";

    let totalMandatory = 0;
    let filledMandatory = 0;

    function isFilled($field) {

        if (!$field.length)
            return false;

        if ($field.is("[contenteditable='true']")) {
            return !!$field.text().trim();
        }

        const val = $field.val();
        return !!val && val.trim() !== "";
    }

    /* ✅ FORM Mandatory */
    $container.find("input[data-mandatory='M']:visible, select[data-mandatory='M']:visible")
            .each(function () {

                const $field = $(this);

                totalMandatory++;

                if (isFilled($field))
                    filledMandatory++;
            });

    /* ✅ GRID Mandatory */
    $container.find("tr[id^='tr']").each(function () {

        const $row = $(this);

        const requiredFlag = $row
                .find("td[data-fieldname='REQUIRED_FLAG']")
                .text()
                .trim();

        if (requiredFlag !== "Y")
            return;

        const label = $row
                .find("td[data-fieldname='PROPERTY_NAME']")
                .text()
                .trim();

        const $valueField = $row
                .find("[id^='tbPROPERTY_VALUE1'], [contenteditable='true']")
                .first();

        totalMandatory++;

        if (isFilled($valueField))
            filledMandatory++;
    });

    const percentage = totalMandatory
            ? Math.round((filledMandatory / totalMandatory) * 100)
            : 0;

    console.log("📊 Completeness Debug:", {
        totalMandatory,
        filledMandatory,
        percentage
    });

    return percentage + "%";
}
function AIRecGenSuggestions(missingList) {

    return missingList.map(field =>
        "Maintain " + field.replace(/\(.+\)/, "")
    );
}
function AIRecScanUniversalMandatory() {
    let missingFields = [];
    function isEmpty($el) {
        if (!$el.length)
            return true;
        if ($el.is("[contenteditable='true']")) {
            return !$el.text().trim();
        }
        const val = $el.val();
        return !val || val.trim() === "";
    }
    /* ✅ GRID Mandatory */
    $("tr[id^='tr']").each(function () {
        const $row = $(this);
        const requiredFlag = $row
                .find("td[data-fieldname='REQUIRED_FLAG']")
                .text()
                .trim();
        if (requiredFlag !== "Y")
            return;
        const label = $row
                .find("td[data-fieldname='PROPERTY_NAME']")
                .text()
                .trim();
        const $valueField = $row
                .find("[id^='tbPROPERTY_VALUE1'], [contenteditable='true']")
                .first();
        if (isEmpty($valueField)) {
            const tabName = AIRecResolveTabName($valueField);
            missingFields.push(label + " (" + tabName + ")");
        }
    });
    /* ✅ FORM Mandatory (Red Star) */
    $(".visionRegisterMaterialTabsTableLabel").each(function () {
        const $labelDiv = $(this);
        if (!$labelDiv.find("sup").length)
            return;
        const labelText = $labelDiv.clone()
                .children()
                .remove()
                .end()
                .text()
                .trim();
        const $input = $labelDiv
                .closest("td, div")
                .find("input, select, textarea, [contenteditable='true']")
                .first();
        if (isEmpty($input)) {
            const tabName = AIRecResolveTabName($input);
            missingFields.push(labelText + " (" + tabName + ")");
        }
    });
    /* ✅ SAP Mandatory (data-mandatory='M') */
    $("input[data-mandatory='M'], select[data-mandatory='M'], textarea[data-mandatory='M']")
            .each(function () {
                const $field = $(this);
                if (!isEmpty($field))
                    return;
                const label =
                        $("label[for='" + $field.attr("id") + "']").text().trim()
                        || $field.attr("data-label")
                        || $field.attr("id");
                const tabName = $field[0]['dataset'].label;
                missingFields.push(label + " (" + tabName + ")");
            });
    return missingFields;
}
async function AIRecShowTabInsights(tabName) {
    AIRecInjectInsightsStyles();
    const counts = AIRecCountTabFields();
    const missing = AIRecScanUniversalMandatory();
    const warnings = AIRecScanWarnings();
    const completeness = AIRecCalCompUniversal();
    await defaultAgentAiTypingBasedOnResponse(`
        <div class="aiLensInsightsPanel">
            <div class="ai-insights-header">
                ${tabName} – Live Data Analysis
            </div>
            <div class="ai-insights-body">
                <div class="ai-insights-section">
                    <div class="ai-section-title">📊 Field Completion Summary</div>
                    <div class="ai-kpi-row">
                        <span>Total Fields</span>
                        <b>${counts.total}</b>
                    </div>
                    <div class="ai-kpi-row">
                        <span>Filled Fields</span>
                        <b>${counts.filled}</b>
                    </div>
                    <div class="ai-kpi-row">
                        <span>Unfilled Fields</span>
                        <b>${counts.unfilled}</b>
                    </div>
                    <div class="ai-kpi-row highlightCompleteness">
                        <span>Completeness</span>
                        <b>${completeness}</b>
                    </div>
                </div>
                <div class="ai-insights-section">
                    <div class="ai-section-title">🔎 Mandatory Status</div>
                    <div class="ai-kpi-row">
                        <span>Missing Mandatory</span>
                        <b>${missing.length}</b>
                    </div>
                </div>
                <div class="ai-insights-section">
                    <div class="ai-section-title">⚠ Validation Warnings</div>
                    <div class="ai-warning-text">
                        ${warnings.length ? warnings.length + " warning(s) detected" : "No warnings"}
                    </div>
                </div>
            </div>
        </div>
    `, "N");
}
function AIRecCountTabFields() {

    /* ✅ Visible main wrapper */
    const $container = $(".visionRegisterMaterialMainWrapper:visible");

    if (!$container.length) {
        console.warn("⚠ No visible material wrapper found");
        return {total: 0, filled: 0, unfilled: 0};
    }

    let total = 0;
    let filled = 0;

    function isFilled($field) {

        if ($field.is("[contenteditable='true']")) {
            return !!$field.text().trim();
        }

        const val = $field.val();
        return !!val && val.trim() !== "";
    }

    /* ✅ Scan fields inside form table ONLY */
    $container.find(
            "input:visible, select:visible, textarea:visible, [contenteditable='true']:visible"
            ).each(function () {

        const $field = $(this);

        /* 🚫 Skip hidden / disabled */
        if ($field.prop("disabled"))
            return;

        /* OPTIONAL RULE: skip readonly */
        // if ($field.prop("readonly")) return;

        total++;

        if (isFilled($field))
            filled++;
    });

    console.log("📊 Tab Field Stats:", {total, filled});

    return {
        total: total,
        filled: filled,
        unfilled: total - filled
    };
}
function AIRecCountMandatoryStatus() {
    const missing = AIRecScanUniversalMandatory();
    const mandatoryTotal =
            $("input[data-mandatory='M']:visible").length +
            $("td[data-fieldname='REQUIRED_FLAG']")
            .filter(function () {
                return $(this).text().trim() === "Y";
            }).length;
    return {
        mandatoryTotal: mandatoryTotal || 0,
        missingMandatory: missing.length
    };
}
function AIRecExtractKeyTabData(limit = 5) {
    const data = AIRecExtractActiveTabData();
    return data.slice(0, limit);
}
function AIRecWaitForTabRender(timeout = 2000) {
    return new Promise((resolve) => {
        const start = Date.now();
        const interval = setInterval(() => {
            const $visiblePanel = $(".tab-pane:visible, [role='tabpanel']:visible");
            if ($visiblePanel.length) {
                clearInterval(interval);
                resolve();
            }
            if (Date.now() - start > timeout) {
                clearInterval(interval);
                console.warn("⚠ Tab render wait timeout");
                resolve();
            }
        }, 100);
    });
}
function AIRecExtractActiveTabData() {

    const $panel = $(".tab-pane:visible, [role='tabpanel']:visible").first();

    if (!$panel.length) {
        console.warn("⚠ No active tab panel found");
        return [];
    }

    let collectedData = [];

    function getLabel($field) {

        return (
                $field.attr("data-label") ||
                $("label[for='" + $field.attr("id") + "']").text().trim() ||
                $field.closest("td, div")
                .find(".visionRegisterMaterialTabsTableLabel")
                .clone().children().remove().end().text().trim() ||
                ""
                );
    }

    function isFilled($field) {

        if (!$field.length)
            return false;

        if ($field.is("[contenteditable='true']")) {
            return !!$field.text().trim();
        }

        const val = $field.val();
        return !!val && val.trim() !== "";
    }

    /* ✅ Handle Inputs */
    $panel.find("input, select, textarea").each(function () {

        const $field = $(this);

        if (!$field.is(":visible") || $field.prop("disabled"))
            return;

        if (!isFilled($field))
            return;

        const label = getLabel($field);
        const value = $field.val().trim();

        if (label && value) {
            collectedData.push(label + ": " + value);
        }
    });

    /* ✅ Handle Contenteditable */
    $panel.find("[contenteditable='true']").each(function () {

        const $field = $(this);

        if (!$field.is(":visible"))
            return;

        if (!isFilled($field))
            return;

        const label = getLabel($field);
        const value = $field.text().trim();

        if (label && value) {
            collectedData.push(label + ": " + value);
        }
    });

    console.log("✅ Extracted Tab Data:", collectedData);

    return collectedData;
}
function AIRecInjectInsightsStyles() {
    if (document.getElementById("kdsInsightsStyles"))
        return;
    const styles = `
        .aiLensInsightsPanel {
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 14px rgba(0,0,0,0.12);
            width: 330px;
            font-family: Arial, sans-serif;
            overflow: hidden;
            margin-top: 6px;
        }
        .ai-insights-header {
            background: #0b4a99;
            color: white;
            padding: 7px 10px;
            font-size: 14px;
            font-weight: 600;
            text-align: center;
        }
        .ai-insights-body {
            padding: 8px 10px;
        }
        .ai-insights-section {
            padding: 8px 10px;
        }
        .ai-section-title {
            font-size: 13px;
            font-weight: 600;
            color: #0a6ed1;
            margin-bottom: 6px;
        }
        .ai-kpi-row {
            display: flex;
            justify-content: space-between;
            font-size: 12.5px;
            padding: 2px 0;
            color: #333;
        }
        .ai-kpi-row highlightCompleteness {
            margin-top: 4px;
            padding-top: 4px;
            border-top: 1px solid #dce6f5;
        }
        .ai-warning-text {
            font-size: 12.5px;
            color: #0b4a99;
        }
    `;
    $("<style>", {
        id: "kdsInsightsStyles",
        text: styles
    }).appendTo("head");
}
function AIRecResolveTabName($field) {
    if (!$field || !$field.length)
        return "Unknown Tab";
    const el = $field[0];
    /* ✅ Try dataset.label */
    if (el.dataset && el.dataset.label) {
        return el.dataset.label.trim();
    }
    /* ✅ Try data-label attribute */
    const dataLabel = $field.attr("data-label");
    if (dataLabel) {
        return dataLabel.trim();
    }
    /* ✅ Try parent tab container */
    const $tabPanel = $field.closest(
            ".visionRegisterMaterialTabsContentDiv:visible"
            );
    if ($tabPanel.length) {
        const panelId = $tabPanel.attr("id");
        const $tab = $(".fioriformTabUlListclass li").filter(function () {
            return $(this).attr("data-tabtarget") === panelId;
        });
        if ($tab.length) {
            return $tab.text().trim();
        }
    }
    return "Unknown Tab";
}
function aiLensFeaturesLoad() {

    $(".idxpDropMenuWrapper li ").unbind("click").on("click", function () {
        $("#aiToolSelectHtmlId").remove();
        let imgHtml = "";
        let label = $(this).text();
        label = label.trim();
        let imgSrc = $(this).find(".aiImageAttachedment img").attr("src");
        if (!(imgSrc != null && imgSrc != "" && imgSrc != undefined)) {
            imgSrc = "images/fileAttachment.png";
        }
        if (imgSrc != null && imgSrc != "" && imgSrc != undefined) {
            imgHtml = `<img src="${imgSrc}" alt="Image" width=20px; />`
        }

        let clickedViewStr = `
<div id="aiToolSelectHtmlId" class="createFunActiveWrapper image-upload">
    <span class="close-icon">&times;</span>

    <label for="imageInput">
        ${imgHtml}
        <span>${label}</span>
    </label>
<input type='hidden' id='aiHiddenIndTypeId' value='${label}'/>
</div>`;


        $(".searchFooterClass").before(clickedViewStr);
        $(document).on("click", "#aiToolSelectHtmlId .close-icon", function () {
            $(this).closest("#aiToolSelectHtmlId").remove();
        });

    });
}
//AIlens Validation missing info end 11-02-202












