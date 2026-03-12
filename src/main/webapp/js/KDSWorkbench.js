/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function onKdsToggleMenu(target) {
    $('#iDXPKDSContainerId, .kdsDalAccessValLeftPanel').removeClass('active');
    if (target === 'kdsx-sidebar') {
        $('#iDXPKDSContainerId').toggleClass('KDSmenuToggle');
    } else if (target === 'kds-grid') {
        $('.kdsDalAccessValLeftPanel').toggleClass('KDSmenuToggle');
    }
}


function getKDSAccessCardBasedResults(highLevelMenu, accValFlag) {
    showLoader();
    if (accValFlag == null || accValFlag == '' || accValFlag == undefined) {
        onKdsToggleMenu('kdsx-sidebar');
        accValFlag = 'K';
    }
    try {
        var clickedValue = $(event.target).closest('.fioriMenuSingleItem')
                .find('.submenuText p').text().trim();
        var iconPath = $(event.currentTarget).find('.domainIcon img').attr('src');
        console.log(clickedValue);
    } catch (e) {
    }


    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getDalAccessValidationsData',
        data: {
            'highLevelMenu': highLevelMenu,
            'accValFlag': accValFlag,
            'clickedValue': clickedValue,
            'iconPath': iconPath
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && response != undefined && response != '') {
                $("#kdsxContentId").html(response['dataStr']);
                initializeAccordions();
            }

        }
    });
}
function kdsDalAccessValToggleList(highLevelMenuId) {
//    onKdsToggleMenu('kds-grid');
    var list = document.getElementById("kdsDalAccessValSubList");
    var arrowIcon = document.querySelector("#kdsDalAccessValArrow i");

    var isOpen = list.style.display === "block";

    list.style.display = isOpen ? "none" : "block";
    arrowIcon.classList.toggle("rotate-down", !isOpen);
//    $("#kdsDalAccessValRightPanel").html("");
    KDSDalAccessValGridData(highLevelMenuId);
    $("#kdsDalAccessValRightPanel").show(100);
}
function kdsDalAccessValPlusToggleSearch() {
    $("#kdsSearchbar").toggle(150, function () {
        if ($(this).is(":visible")) {
            $("#kdsSearchInput").focus();
        }
    });

    $('#kdsSearchInput').on('input', function () {
        subContainerSearchItem($(this).val().toLowerCase().trim());

    });
}
function subContainerSearchItem(input) {
    //var list = $('.kdsDalAccessValSubList');
    //var items = list.children('.kdsDalAccessValSubItem');
    var list, items;
    try {
        list = $('.kdsDalAccessValSubList');
        items = list.children('.kdsDalAccessValSubItem');
    } catch (e) {
        console.warn('List or items not found', e);
        return;
    }
    items.show().each(function () {
        $(this).html($(this).text());
    });
    if (!input)
        return;
    input = input.toLowerCase();
    var matched = [];
    items.each(function () {
        var text = $(this).text();
        var lower = text.toLowerCase();
        if (lower.indexOf(input) > -1) {
            var escaped = input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            var regex = new RegExp('(' + escaped + ')', 'gi');
            var highlightedText =
                    text.replace(regex, '<span class="blue-highlight" style="color: blue;font-weight: 600;">$1</span>');
            $(this).html(highlightedText);
            matched.push(this);
        } else {
            $(this).hide();
        }
    });
    list.prepend(matched);
}
function KDSDalAccessValGridData(tableName) {
    showLoader();
    var data = {
        startIndex: 0,
        endIndex: 100,
        tableName: tableName,
        analytics: "Y"
    };
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: 'viewAnalyticsTableGrid',
        cache: false,
        data: data,
        success: function (response) {
            stopLoader();
            if (response != null) {
                // var responseObj = JSON.parse(response);
                var dataArray = response['dataArray'];
                var dataFieldsArray = response['dataFieldsArray'];
                var columnsArray = response['columnsArray'];
                var totalCount = response['totalCount'];
                var gridId = ("dalAccVal-" + tableName).replace(/\s/g, '');
                gridId = gridId.replace(/\//g, '');
                var genDiv = "<div id='" + gridId + "'></div>";
                $("#kdsDalSubAccPanelId" + tableName + "").html(genDiv);
                data['getOnlyDataArray'] = "Y";
                var source =
                        {
                            type: 'POST',
                            //                                                async: false,
                            datatype: "json",
                            datafields: dataFieldsArray,
                            data: data,
                            url: 'viewAnalyticsTableGridData',
                            cache: false,
                            root: 'Rows',
                            processdata: function (data) {
                                showLoader();
                                data['getOnlyDataArray'] = 'Y';
                            },
                            beforeSend: function (xhr) {
                                xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                                //showLoader();

                            }, loadError: function (xhr, status, error) {
                                stopLoader();
                            }, loadComplete: function (data) {
                                stopLoader();
                            },
                            beforeprocessing: function (data) {

                                source.totalrecords = data[data.length - 1];
                            },
                            sort: function () {
                                //                                                $("#" + gridResultObj['gridId'] + "_sort_columns").remove();
                                $("[id='" + gridId + "']").jqxGrid('updatebounddata', 'sort');
                                try {
                                    $("[id='" + gridId + "']").jqxGrid('clearselection');
                                } catch (e) {
                                }

                            },
                            filter: function () {

                                $("[id='" + gridId + "']").jqxGrid('updatebounddata', 'filter');
                                try {
                                    $("[id='" + gridId + "']").jqxGrid('clearselection');
                                } catch (e) {
                                }

                            }
                        };
                var dataAdapter = new $.jqx.dataAdapter(source);
                $("[id='" + gridId + "']").jqxGrid(
                        {
                            width: "100%",
                            height: "95%",
                            theme: 'energyblue',
                            autoshowloadelement: false,
                            source: dataAdapter,
                            pageable: true,
                            pagesize: 50,
                            showfilterrow: true,
                            filterable: true,
                            sortable: true,
                            virtualmode: true,
                            selectionmode: 'checkbox',
                            pagesizeoptions: ['50', '100', '500'],
                            rendergridrows: function (params) {
                                return params.data;
                            },
                            columnsresize: true,
                            columns: columnsArray
                        });
            }

        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }

    });
}


/*kds custom accordian function changes start here */


var AccordionManager = (function () {
    // Private variables
    var accordionStateMap = {};

    // Initialize state for accordion
    function initializeAccordionState(accordionId) {
        accordionStateMap[accordionId] = {
            expanded: false,
            editMode: false,
            originalCheckboxStates: [],
        };
    }

    // Get accordion state
    function getAccordionState(accordionId) {
        return accordionStateMap[accordionId];
    }

    // Set accordion expanded state
    function setAccordionExpanded(accordionId, isExpanded) {
        accordionStateMap[accordionId].expanded = isExpanded;
    }

    // Set edit mode state
    function setEditMode(accordionId, isEditMode) {
        accordionStateMap[accordionId].editMode = isEditMode;
    }

    // Save original checkbox states
    function saveOriginalCheckboxStates(accordionId, states) {
        accordionStateMap[accordionId].originalCheckboxStates = states;
    }

    // Get original checkbox states
    function getOriginalCheckboxStates(accordionId) {
        return accordionStateMap[accordionId].originalCheckboxStates;
    }

    // Clear original checkbox states
    function clearOriginalCheckboxStates(accordionId) {
        accordionStateMap[accordionId].originalCheckboxStates = [];
    }

    return {
        initializeAccordionState: initializeAccordionState,
        getAccordionState: getAccordionState,
        setAccordionExpanded: setAccordionExpanded,
        setEditMode: setEditMode,
        saveOriginalCheckboxStates: saveOriginalCheckboxStates,
        getOriginalCheckboxStates: getOriginalCheckboxStates,
        clearOriginalCheckboxStates: clearOriginalCheckboxStates,
    };
})();

// ===================================
// Main Accordion Functions
// ===================================

function toggleMainAccordion($accordionElement) {
    $(".accordion").not($accordionElement).each(function () {
        var $acc = $(this);
        var accId = $acc.attr("data-accordion");
        if ($acc.hasClass("expanded")) {
            AccordionManager.setAccordionExpanded(accId, false);
            $acc.removeClass("expanded");
            $acc.find(".accordion-header")
                    .first()
                    .attr("aria-expanded", false);
            $acc.find(".universal-accordion-arrow").hide();
            $acc.find(".accordion-actions").hide();
        }
    });
    var accordionId = $accordionElement.attr("data-accordion");
    var currentState = AccordionManager.getAccordionState(accordionId);
    var newExpandedState = !currentState.expanded;
    AccordionManager.setAccordionExpanded(accordionId, newExpandedState);

    $accordionElement
            .toggleClass("expanded", newExpandedState)
            .find(".accordion-header")
            .first()
            .attr("aria-expanded", newExpandedState);

    var $universalArrow = $accordionElement.find(".universal-accordion-arrow");
    var $accordionActions = $accordionElement.find(".accordion-actions");

    if (newExpandedState) {
        var hasSubAccordions = $accordionElement.find(".sub-accordion").length > 0;
        if (hasSubAccordions) {
            $universalArrow.show();
            $accordionActions.show();
        }
    } else {
        $universalArrow.hide();
        $accordionActions.hide();
    }
}

// Handle main accordion header click
function handleMainAccordionClick(event) {
    var $target = $(event.target);

    // Don't toggle if clicking on action buttons or universal arrow
    if (
            $target.closest(".accordion-actions").length > 0 ||
            $target.closest(".universal-accordion-arrow").length > 0
            ) {
        return;
    }

    var $accordionElement = $(this).closest(".accordion");
    toggleMainAccordion($accordionElement);
}

// Handle main accordion keyboard navigation
function handleMainAccordionKeydown(event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        var $target = $(event.target);

        // Don't toggle if focused on action buttons
        if ($target.closest(".accordion-actions").length === 0) {
            var $accordionElement = $(this).closest(".accordion");
            toggleMainAccordion($accordionElement);
        }
    }
}

// ===================================
// Sub-Accordion Functions
// ===================================

// Toggle sub-accordion expand/collapse
function toggleSubAccordion($subAccordionElement) {
    var isCurrentlyExpanded = $subAccordionElement.hasClass("expanded");
    var newExpandedState = !isCurrentlyExpanded;

    // Update UI
    $subAccordionElement.toggleClass("expanded", newExpandedState);
    $subAccordionElement
            .find(".sub-accordion-header")
            .first()
            .attr("aria-expanded", newExpandedState);
}

// Handle sub-accordion header click
function handleSubAccordionClick(event) {
    event.stopPropagation();
    var $subAccordionElement = $(this).closest(".sub-accordion");
    toggleSubAccordion($subAccordionElement);
}

// Handle sub-accordion keyboard navigation
function handleSubAccordionKeydown(event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        event.stopPropagation();
        var $subAccordionElement = $(this).closest(".sub-accordion");
        toggleSubAccordion($subAccordionElement);
    }
}

// ===================================   
// Universal Toggle Functions
// ===================================

// Toggle all sub-accordions in a main accordion
function toggleAllSubAccordions($accordionElement, shouldExpand) {
    var $subAccordions = $accordionElement.find(".sub-accordion");

    $subAccordions.each(function () {
        var $subAccordion = $(this);
        $subAccordion.toggleClass("expanded", shouldExpand);
        $subAccordion
                .find(".sub-accordion-header")
                .first()
                .attr("aria-expanded", shouldExpand);
    });
}

// Handle universal toggle button click
function handleUniversalToggleClick(event) {
    event.stopPropagation();
    var $universalToggle = $(this);
    var $accordionElement = $universalToggle.closest(".accordion");
    var $upArrow = $universalToggle.find(".defult-up");
    var $downArrow = $universalToggle.find(".defult-down");

    // Determine current state based on visible arrow
    var isCurrentlyCollapsed = $upArrow.is(":visible");

    if (isCurrentlyCollapsed) {
        // Expand all
        toggleAllSubAccordions($accordionElement, true);
        $upArrow.hide();
        $downArrow.show();
    } else {
        // Collapse all
        toggleAllSubAccordions($accordionElement, false);
        $upArrow.show();
        $downArrow.hide();
    }
}

// ===================================
// Edit Mode Functions
// ===================================

// Enter edit mode for accordion
function enterEditMode($accordionElement) {
    var accordionId = $accordionElement.attr("data-accordion");

    // Update state
    AccordionManager.setEditMode(accordionId, true);

    // Get all checkboxes in this accordion
    var $checkboxes = $accordionElement.find(".settings-checkbox");

    // Save original states
    var originalStates = [];
    $checkboxes.each(function () {
        originalStates.push($(this).prop("checked"));
    });
    AccordionManager.saveOriginalCheckboxStates(accordionId, originalStates);

    // Enable checkboxes
    $checkboxes.prop("disabled", false);

    // Remove disabled class from settings items
    $accordionElement.find(".settings-item").removeClass("disabled");

    // Update action buttons
    var $actionsDiv = $accordionElement.find(".accordion-actions");
    $actionsDiv.html(`
                <button class="btn btn-save" data-action="save">Save</button>
                <button class="btn btn-cancel" data-action="cancel">Cancel</button>
            `);

    // Attach event handlers to new buttons
    attachEditModeButtonHandlers($accordionElement);
}

// Exit edit mode for accordion
function exitEditMode($accordionElement) {
    var accordionId = $accordionElement.attr("data-accordion");

    // Update state
    AccordionManager.setEditMode(accordionId, false);
    AccordionManager.clearOriginalCheckboxStates(accordionId);

    // Add disabled class to settings items
    $accordionElement.find(".settings-item").addClass("disabled");

    // Restore Edit button
    var $actionsDiv = $accordionElement.find(".accordion-actions");
    $actionsDiv.html(`
                <button class="btn btn-edit" data-action="edit">Edit</button>
            `);

    // Re-attach edit button handler
    attachEditButtonHandler($accordionElement);
}

// Save changes in edit mode
function saveEditMode($accordionElement) {
    var accordionId = $accordionElement.attr("data-accordion");

    // Get all checkboxes
    var $checkboxes = $accordionElement.find(".settings-checkbox");

    // Disable checkboxes (keeping their current state)
    $checkboxes.prop("disabled", true);

    // Exit edit mode
    exitEditMode($accordionElement);
}

// Cancel edit mode and restore original states
function cancelEditMode($accordionElement) {
    var accordionId = $accordionElement.attr("data-accordion");

    // Get original states
    var originalStates = AccordionManager.getOriginalCheckboxStates(accordionId);

    // Get all checkboxes
    var $checkboxes = $accordionElement.find(".settings-checkbox");

    // Restore original checkbox states
    $checkboxes.each(function (index) {
        $(this).prop("checked", originalStates[index]);
        $(this).prop("disabled", true);
    });

    // Exit edit mode
    exitEditMode($accordionElement);
}

// Handle edit button click
function handleEditButtonClick(event) {
    event.stopPropagation();
    var $accordionElement = $(this).closest(".accordion");
    enterEditMode($accordionElement);
}

// Handle save button click
function handleSaveButtonClick(event) {
    event.stopPropagation();
    var $accordionElement = $(this).closest(".accordion");
    saveEditMode($accordionElement);
}

// Handle cancel button click
function handleCancelButtonClick(event) {
    event.stopPropagation();
    var $accordionElement = $(this).closest(".accordion");
    cancelEditMode($accordionElement);
}

// ===================================
// Event Handler Attachment Functions
// ===================================

// Attach edit button handler
function attachEditButtonHandler($accordionElement) {
    $accordionElement
            .find('[data-action="edit"]')
            .on("click", handleEditButtonClick);
}

// Attach edit mode button handlers (save and cancel)
function attachEditModeButtonHandlers($accordionElement) {
    $accordionElement
            .find('[data-action="save"]')
            .on("click", handleSaveButtonClick);
    $accordionElement
            .find('[data-action="cancel"]')
            .on("click", handleCancelButtonClick);
}

// ===================================
// Initialization Function
// ===================================

function initializeAccordions() {
    // Initialize state for each accordion
    $(".accordion").each(function () {
        var accordionId = $(this).attr("data-accordion");
        AccordionManager.initializeAccordionState(accordionId);
    });

    // Attach main accordion event handlers
    $(".accordion-header").on("click", handleMainAccordionClick);
    $(".accordion-header").on("keydown", handleMainAccordionKeydown);

    // Attach sub-accordion event handlers
    $(".sub-accordion-header").on("click", handleSubAccordionClick);
    $(".sub-accordion-header").on("keydown", handleSubAccordionKeydown);

    // Attach universal toggle handlers
    $(".universal-accordion-arrow").on("click", handleUniversalToggleClick);

    // Attach edit button handlers
    $('[data-action="edit"]').each(function () {
        var $accordionElement = $(this).closest(".accordion");
        attachEditButtonHandler($accordionElement);
    });
}

/*kds custom accordian function changes ends here */
function KDSAIlensDefaultYesNo(title, kdsDalNewEnYes, kdsDalNewEnNo, butYesLabel, butNoLabel, iconYesCls, iconNoCls) {
    const navigationHelpHTML = `<ul class="listItemsViews"><li>
  <div class="textContent">` + title + `</div>
  <div class="viewData AILensDisOrEnaClass" style="flex-wrap: wrap; gap: 5px;">
    <div class="viewButton" id=` + kdsDalNewEnYes + `>
      <span class="viewIcon"><img src class=` + iconYesCls + `></span>
      <span class="viewText">` + butYesLabel + `</span>
    </div>
    <div class="viewButton" id=` + kdsDalNewEnNo + `>
      <span class="viewIcon"><img src class=` + iconNoCls + `></span>
      <span class="viewText">` + butNoLabel + `</span>
    </div>
  </div></li></ul>`;
    defaultAITypingBasedOnResponse(navigationHelpHTML);
}
function KDSAIlensDynamicInput(title, inputTextId, inputSubmitId) {
    var showPromptInput = `
    <div class="aiLensKDSDataTypes">
        <div class="container">
            <div class="header">` + title + `</div>
            <textarea id="${inputTextId}" class="textarea" placeholder="Enter..."></textarea>
            <div class="error"></div>
            <button id="${inputSubmitId}" class="btn">Submit</button>
        </div>
    </div>
`;
    defaultAITypingBasedOnResponse(showPromptInput);
}
function KDSAIlensDynamicCheckbox(title, options, checkBoxSubmit, checkBoxInput, imageClsId) {

    let checkBoxHtml = `<div class="aiLensKDSDataTypes kds-ai-global">
        <div class="container"><div class="header">${title}</div><div class="kds-checkbox-list">`;
    options.forEach(opt => {
        checkBoxHtml += `<label class="kds-checkbox-item" title="${opt.desc || ''}">
                
                <div class="kds-checkbox-row">
                <input type="checkbox" class="kds-checkbox-input ${checkBoxInput}" value="${opt.value}">
                    <span class="kds-checkbox-label">${opt.label}</span>
                    ${opt.desc ? `<span class="kds-checkbox-desc">${opt.desc}</span>` : ``}
                </div>
                <span class="kds-checkbox-info" data-value="${opt.value}" onclick="showKDSPreviewGrid('${opt.value}','${opt.label}')"
                      title="Click to preview the grid"><img class="${imageClsId}" src class="kds-info-icon" style="width:18px;">
                </span>
            </label>`;
    });
    checkBoxHtml += `</div><div class="error"></div><button id="${checkBoxSubmit}" class="btn">Submit</button>
        </div></div>`;
    defaultAITypingBasedOnResponse(checkBoxHtml);
}

function defaultKdsNewDalEntryCreate(menuId, tableName) {
    openAINavigation();
    KDSAIlensDefaultYesNo('Do you need help to create ' + menuId + '?', 'kdsDalNewEnYes',
            'kdsDalNewEnNo', 'Yes', 'No', 'aiDefaultYesImgClass', 'aiDefaultNoImgClass');

    $(document).one("click", "#kdsDalNewEnYes", function () {
        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>Yes</div>");
        KDSAIlensDefaultYesNo('Please select to continue create ' + menuId + ' id', 'kdsDalSubEnYes',
                'kdsDalSubEnNo', 'Copy Existing', 'Create New', 'aiCopyImgClass', 'aiCreateImgClass');
        $(document).one("click", "#kdsDalSubEnYes", function () {
            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>Copy Existing</div>");
            KDSAIlensDynamicInput('Please enter Description to copy ' + menuId + ' id', 'kdsCopyExistInputId',
                    'kdsCopyExistSubmitId');
            $(document).one("click", "#kdsCopyExistSubmitId", function () {
                let enteredValue = $("#kdsCopyExistInputId").val().trim();
                if (enteredValue != null && enteredValue != undefined && enteredValue != '') {
                    const gridOptions = [
                        {label: "Search Grid", value: "DXP_SEARCH_VIEW", desc: "Copy Search Grid"},
                        {label: "Create Grid", value: "MM_PENDING_MGR_REG", desc: "Copy Create Grid"},
                        {label: "Change Grid", value: "MM_PENDING_CHNG_MGR", desc: "Copy Modify Grid"},
                        {label: "Delete Grid", value: "MM_PENDING_DEL_MGR", desc: "Copy Delete Grid"},
                        {label: "Extend Grid", value: "MM_PENDING_EXT_MGR", desc: "Copy Extend Grid"},
                        {label: "Undelete Grid", value: "MM_PENDING_UDEL_MGR", desc: "Copy Undelete Grid"},
                        {label: "Block Grid", value: "MM_PENDING_DEL_MGR", desc: "Copy Block Grid"},
                        {label: "Unblock Grid", value: "MM_PENDING_UDEL_MGR", desc: "Copy Unblock Grid"},
                    ];
                    KDSAIlensDynamicCheckbox("Please select the type of " + menuId + " to copy from an existing one.",
                            gridOptions, "kdsCopyColExSubmit", "kdsCopyColExInput", "aiCheckBoxViewImgClass");
                    $(document).on("change", ".kdsCopyColExInput", function () {
                        $(".kdsCopyColExInput").not(this).prop("checked", false);
                        const selectedValue = $(".kdsCopyColExInput:checked").val();

                    });
                    $(document).one("click", "#kdsCopyColExSubmit", function () {

                        const $checked = $(".kdsCopyColExInput:checked");
                        const selectedGridId = $checked.val();
                        const labelText = $checked
                                .closest('.kds-checkbox-row')
                                .find('.kds-checkbox-label')
                                .text()
                                .trim();

                        KDSAIlensDefaultYesNo(
                                'Selected grid is ' + labelText + '. Do you want to continue with selected grid columns?',
                                'kdsCopyColExYes',
                                'kdsCopyColExNo',
                                'Continue',
                                'Add new columns',
                                'aiDefaultYesImgClass',
                                'aiDefaultNoImgClass'
                                );

                        $(document).one("click", "#kdsCopyColExYes", function () {
                            console.log("Confirmed:", selectedGridId, labelText, enteredValue);
                            insertGridEntryBasedOnAIlensProc(enteredValue, selectedGridId, "");
                            // proceed logic
                        });
                    });

                }
            });
        });
        $(document).one("click", "#kdsDalSubEnNo", function () {
            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>Create New</div>");
            generateKDSDynamicTableForm(tableName, menuId);
//            KDSAIlensDynamicInput('Please enter Description to create ' + menuId + ' id', 'kdsNewCreateInputId',
//                    'kdsNewCreateSubmitId');
//            $(document).one("click", "#kdsNewCreateSubmitId", function () {
//                let enteredValue = $("#kdsNewCreateInputId").val().trim();
//                if (enteredValue != null && enteredValue != undefined && enteredValue != '') {
//                    const gridOptions = [
//                        {label: "Grid Width", value: "GRID_WIDTH", desc: "Horizontal size"},
//                        {label: "Grid Height", value: "GRID_HEIGHT", desc: "Vertical size"},
//                        {label: "Column Resize", value: "COL_RESIZE_FLAG", desc: "Resize columns"},
//                        {label: "Column Reorder", value: "COL_REORDER_FLAG", desc: "Reorder columns"},
//                        {label: "Sorting", value: "SORT_FLAG", desc: "Sort data"},
//                        {label: "Filtering", value: "FILTER_FLAG", desc: "Filter data"},
//                        {label: "Theme", value: "THEME", desc: "Visual style"},
//                        {label: "Pagination", value: "PAGINATION_FLAG", desc: "Page-wise data"},
//                        {label: "Page Size", value: "PAGINATION_SIZE", desc: "Rows per page"},
//                        {label: "Data Sheet", value: "DATA_SHEET_FLAG", desc: "Excel mode"},
//                        {label: "Selection Type", value: "SELECTION_TYPE", desc: "Row selection"}
//                    ];
//                    KDSAIlensDynamicCheckbox("Please select column configuration options to create the grid.",
//                            gridOptions, "kdsNewColEntrySubmit", "kdsNewColEntryInput", "aiCheckBoxViewImgClass");
//                    $(document).one("click", "#kdsNewColEntrySubmit", function () {
//                        let selected = [];
//                        $(".kdsNewColEntryInput:checked").each(function () {
//                            selected.push($(this).val());
//                        });
//                    });
//                }
//            });
        });
//        $(document).on("click", ".kds-checkbox-info", function (e) {
//            e.stopPropagation(); // prevents checkbox toggle
//            const gridId = $(this).data("value");
//            showKDSPreviewGrid(gridId);
//        });
    });
    $(document).one("click", "#kdsDalNewEnNo", function () {
        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>No, I will review Existing records </div>");
    });
}
function showKDSPreviewGrid(gridId, gridDesc, paramArray, appendDivId) {
    showLoader();
    closeAINavigation();
    $("#kdsDalAccessValRightPanel").show();
    $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>Preview " + gridDesc + "</div>");
    $("#kdsDalAccessValRightPanel").html("");
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getCloudGrid',
        data: {
            'gridId': gridId,
            roleId: "MM_MANAGER",
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (appendDivId != null && appendDivId != undefined && appendDivId != '') {
                $("#dialog1").html("<div id='" + gridId + "'></div>");
                $("#dialog1").dialog({resizable: false,
                    title: labelObject['Message'] != null ? labelObject['Message'] : gridDesc,
                    modal: true,
                    height: 500,
                    width: 1200,
                    fluid: true,
                    buttons: [
                        {
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                openAINavigation();
                            }
                        }
                    ],
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        //    $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                        $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    }
                    ,
                    beforeClose: function (event, ui)
                    {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
            } else {
                $("#kdsDalAccessValRightPanel").html("<div id='" + gridId + "'></div>");
            }
            gridConfig(response, 0, paramArray, gridId, '');
        }
    });
}
function insertGridEntryBasedOnAIlensProc(inputVal, gridId, selColumns) {
    showLoader();
    $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>Please wait syatem is creating new gridId</div>");
    $.ajax({
        datatype: "html",
        type: "POST",
        url: 'insertGridEntryBasedOnAIlensProc',
        data: {
            'inputVal': inputVal,
            'gridId': gridId,
            selColumns: selColumns,
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            var resultObj = JSON.parse(response)
            KDSAIlensDefaultYesNo('' + resultObj.message + '', 'kdsGridProcView',
                    '', 'View Data', '', 'aiDefaultYesImgClass', '');
            $(document).one("click", "#kdsGridProcView", function () {
                showKDSPreviewGrid(gridId, inputVal);
            });
        }
    });
}
function generateKDSDynamicTableForm(tableText, tableName) {
    showLoader();
    closeAINavigation();
    $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>Please wait create form is opening...</div>");
    $.ajax({
        datatype: "html",
        type: "POST",
        url: 'generateKDSDynamicTableForm',
        data: {
            'tableName': tableName,
            'tableText': tableText,
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            $("#kdsDalAccessValRightPanel").show();
            $("#kdsDalAccessValRightPanel").html(response);
        }
    });
}
function validateKDSDynamicFormV2() {
    let valid = true;
    const form = document.getElementById('kdsDynamicFormV2');

    form.querySelectorAll('.kds-form-group').forEach(group => {
        const input = group.querySelector('input, textarea');
        const error = group.querySelector('.kds-error-msg');

        if (input && input.hasAttribute('required') && !input.value.trim()) {
            error.style.display = 'block';
            valid = false;
        } else {
            error.style.display = 'none';
        }
    });

    return valid;
}
function submitKDSDynamicForm(tableName) {

    if (!validateKDSDynamicFormV2()) {
        return false;
    }

    const form = document.getElementById('kdsDynamicFormV2');
    const formData = new FormData(form);
    const payload = {};

    formData.forEach((value, key) => {
        const parts = key.split('.');
        if (parts.length === 2) {
            const table = parts[0];
            const column = parts[1];

            if (!payload[table]) {
                payload[table] = {};
            }
            payload[table][column] = value;
        }
    });

    console.log("Submitting Payload:", payload);
    $.ajax({
        datatype: "html",
        type: "POST",
        url: 'insertNewEntrySelAccTable',
        data: {
            basicData: JSON.stringify(payload),
            tableName: tableName
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            openAINavigation();
            KDSAIlensDefaultYesNo(
                    'Form Id is created successfully, Do you want to continue to create other access Configurations',
                    'kdsCopyColExYes',
                    'kdsCopyColExNo',
                    'Yes, Create',
                    'No, Thank you',
                    'aiDefaultYesImgClass',
                    'aiDefaultNoImgClass'
                    );
//            $("#kdsDalAccessValRightPanel").show();
//            $("#kdsDalAccessValRightPanel").html(response);
        }
    });
}
function showKDSNewOrgnCreation(tabId, domain, columnName, showFlag, optionFlag) {
    showLoader();
    $.ajax({
        datatype: "html",
        type: "POST",
        url: 'showKDSNewOrgnCreation',
        data: {
            tabId: tabId,
            domain: domain,
            columnName: columnName,
            optionFlag: optionFlag
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && response != '' && response != undefined) {
                var respObj = JSON.parse(response);
                var defaultVal = respObj['defaultVal'];
                if (showFlag != null && showFlag != '' && showFlag != undefined && showFlag == 'Y') {
                    $("#dialog1").html(respObj['dataStr']);
                    $("#dialog1").dialog({resizable: false,
                        title: 'Message',
                        modal: true,
                        height: "auto",
                        width: 500,
                        fluid: true,
                        dialogClass: "showKDSNewOrgnCreationClass",
                        open: function () {
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                            var dataId = respObj['columnId'];
                            $("#" + dataId).jqxDropDownList({
                                source: respObj['dataList'],
                                width: "93.83%",
                                height: 30,
                                theme: "energyblue",
                                filterable: true,
                                filterPlaceHolder: "Search " + columnName + "",
                                placeHolder: "Select " + columnName + "",
                                dropDownHeight: 250,
                                autoDropDownHeight: false
                            });
                            $("#" + dataId).jqxDropDownList('val', defaultVal);
                        },
                        beforeClose: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });
                } else {
                    $("#kdsxContentWrapperId").html(respObj['dataStr']);
                    $(".kdsFormGridWrapperClass").html(respObj['dataStr']);
                    $("#kdsxContentId").html(respObj['dataStr']);
                    var dataFlag = respObj['dataFlag'];
                    if (dataFlag != null && dataFlag != '' && dataFlag != undefined && dataFlag != 'Q') {
                        var dataId = respObj['columnId'];
                        $("#" + dataId).jqxDropDownList({
                            source: respObj['dataList'],
                            width: "auto",
                            height: "auto",
                            theme: "energyblue",
                            filterable: true,
                            filterPlaceHolder: "Search " + columnName + "",
                            placeHolder: "Select " + columnName + "",
                            dropDownHeight: 250,
                            autoDropDownHeight: false
                        });
                        $("#" + dataId).jqxDropDownList('val', defaultVal);
                    }
                }

            }
        }
    });
}
function generateNewOrganization(columnName, labelName, defaultVal, tableName, typeFlag, procName, objType) {
    openAINavigation();
    KDSAIlensDefaultYesNo(
            'Do you want to generate new ' + labelName + '?',
            'kdsNewOrgnCreateYes',
            'kdsNewOrgnCreateNo',
            'Yes, Create',
            'No, Thank you',
            'aiDefaultYesImgClass',
            'aiDefaultNoImgClass'
            );
    $(document).one("click", "#kdsNewOrgnCreateYes", function () {
        let auditId = '';
        const chars = 'ABCDEF0123456789';
        for (let i = 0; i < 32; i++) {
//            auditId += chars.charAt(Math.floor(Math.random() * chars.length));
//            auditId += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        auditId = '511FAAB15D8D8AB0EAEF88128091D504';
        KDSAIlensDefaultYesNo('A new ' + labelName + ' can be generated by the system.Click Submit to complete the creation and copy all details from the reference ' + labelName + '.',
                'kdsNewOrgnCreateYes',
                'kdsNewOrgnCreateNo',
                '',
                '',
                '',
                ''
                );
        $("#NEW_INPUT_VAL").val(auditId).prop("readonly", true);
        $("#NEW_DESCL_VAL").val("New & Copy " + labelName + "").prop("readonly", true);
        setTimeout(function () {
            closeAINavigation();
        }, 6000);


    });
    $(document).one("click", "#kdsNewOrgnCreateNo", function () {
        KDSAIlensDefaultYesNo(
                'Do you need any other configurations?',
                'kdsNewOthCreateYes',
                'kdsNewOthCreateNo',
                'Yes',
                'No, Thank you',
                'aiDefaultYesImgClass',
                'aiDefaultNoImgClass'
                );
    });
}
function onSubNewOrgnClick(columnName, labelName, defaultVal, tableName, typeFlag, procName, dropDownId, objType) {
    let isValid = true;
    // Field 1
    if ($('#NEW_INPUT_VAL').val() === '') {
        $('#plantNameError').show();
        isValid = false;
    } else {
        $('#plantNameError').hide();
    }
    // Field 2
    if ($('#NEW_DESC_VAL').val() === '') {
        $('#plantDescriptionError').show();
        isValid = false;
    } else {
        $('#plantDescriptionError').hide();
    }
    // Field 3 - Email (conditional)
    if (typeFlag && typeFlag !== 'Q') {
        if ($('#KDS_EMAIL').val() === '') {
            $('#emailError').show();
            isValid = false;
        } else {
            $('#emailError').hide();
        }
        if ($('#REF_INPUT_VAL').val() === '') {
            $('#refInputError').show();
            isValid = false;
        } else {
            $('#refInputError').hide();
        }
    }

    // Field 4 (example - reference value)
    // ❗ Stop execution ONLY AFTER checking all fields
    if (!isValid) {
        return;
    }

    var basicData = {};
    let path = window.location.pathname;
    let basePath = path.substring(0, path.lastIndexOf('/'));
    let currentUrl = window.location.origin + basePath;
    showLoader();
    openAINavigation();
    KDSAIlensDefaultYesNo('A new ' + labelName + ' is being created, and all configurations and details are being copied from the reference ' + labelName + '. This process may take a few moments. You will be notified once the setup is complete.',
            'kdsNewOthCreateYes', 'kdsNewOthCreateNo', '', '', '', '');
    basicData['REF_DESC_VAL'] = $("#REF_DESC_VAL").val();
    basicData['NEW_INPUT_VAL'] = $("#NEW_INPUT_VAL").val();
    basicData['NEW_DESC_VAL'] = $("#NEW_DESC_VAL").val();
    basicData['KDS_COLUMN'] = columnName;
    basicData['TABLE_NAME'] = tableName;
    basicData['LABEL_NAME'] = labelName;
    basicData['TYPE_FLAG'] = typeFlag;
    basicData['PROC_NAME'] = procName;
    basicData['OBJ_TYPE'] = objType;
    if (typeFlag != null && typeFlag != '' && typeFlag != undefined && typeFlag != 'Q') {

        basicData['EMAIL'] = $("#KDS_EMAIL").val();
        basicData['URL'] = currentUrl;
    }
    var refInputVal = $("#REF_INPUT_VAL").val();
    if (!refInputVal || refInputVal === '') {
        var selectedValue = $("#" + dropDownId).jqxDropDownList('val');
        basicData['REF_INPUT_VAL'] = selectedValue;
    } else {
        basicData['REF_INPUT_VAL'] = refInputVal;
    }
    $.ajax({
        datatype: "html",
        type: "POST",
        url: 'kdsNewCreateSubmit',
        data: {
            basicData: JSON.stringify(basicData)
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response) {
                var respObj = JSON.parse(response);
                openAINavigation();
                KDSAIlensDefaultYesNo(respObj['message'], '', '', 'Okay', '');
            }
        },
        error: function () {
            stopLoader();
        }
    });
}


