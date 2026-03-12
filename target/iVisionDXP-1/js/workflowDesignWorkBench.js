/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var connectionDetailsMap = {};
var conditionCount = 0;
var deleteType = "";
function getWorkflowCreatingComponent(tableName)
{
    conditionCount = 1;
    try {
        $(".visualizationDashboardView").hide();
        $("#dxp1Seconddiv").html("");
        $("#dxp1Firstdiv").html("");
        $("#dxp21MainSplitter").hide();
        $(".dxpSplitterTabsContent").hide();
        $("#dxpDomainMenus").hide();
        $("#dxpGridContent").hide();
        $("#dxpAnalyticsContent").hide();
        $("#dxpHomeContent").hide();
        $("#dxClassesContent").hide();
        $("#dxpFormContent").hide();
        $("#dxpCluster").hide();
        $("#VisualizePageBody").hide();
        $("#VisualizePageBody").html("");
        $("#dxpconsolidationFormView").hide();
        $("#dxpClusterContent").hide();
        $("#dxp1TabsWithGridContent").hide();
        $("#dxp2TabsWithGridContent").hide();
        $("#dxpMenus").hide();
        $("#dxpTaskListDivId").hide();

        showSelectedTabContent(event, 'dxpClusterTab2', 'dxpCluster');
        $("#dxpCluster").css({width: "100%", height: "100%"});
        $("#dxpCluster").html("<div id='workflowDesignMainId' class='workflowDesignMainClass'><div id='workflowDesignResourcesId' class='workflowDesignResourcesClass'></div><div id='workflowDesignOperationsId' class='workflowDesignOperationsClass'></div><div id='conditionHiddenFieldsId' style='display:none'></div></div>")
        //$("#workflowDesignMainId").jqxSplitter({width: '100%', height: '100%', orientation: 'horizontal', splitBarSize: 5, panels: [{size: '8%'}]});
        try {
            $('#workflowDesignMainId').jqxSplitter('expand');
        } catch (e) {

        }

        $.ajax({
            datatype: "json",
            type: "POST",
            url: 'getWorkflowDomainProcessDetails',
            data: {
                'tableName': tableName,
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                if (response != null && !jQuery.isEmptyObject(response)) {
                    var workflowTabsDesignStr = response['workflowTabsDesignStr'];
                    var domain = response['selectedDomain'];
                    var source = response['selectedSource'];
                    var workflowId = response['workflowId'];
                    var version = response['version'];
                    $("#workflowDesignResourcesId").html(workflowTabsDesignStr);
                    $("#versionDetailId").html("version : " + version)
                    $("#workflowDesignOperationsId").html("<div id='workflowDesignOperationsMainDataId' class='workflowDesignOperationsMainDataClass'><div id='workflowDesignOperationsOriginalDataId' class='workflowDesignOperationsDataClass workflowDesignOperationsDataEditDivClass' style='display:none'></div><div id='workflowDesignOperationsDataId' class='workflowDesignOperationsDataClass' style='display:none'></div></div><div id='workflowDesignOperationsHeaderId' class='workflowDesignOperationsHeaderClass' style='display:none'></div>");
                    $("#workflowDesignOperationsMainDataId").jqxSplitter({width: '100%',
                        height: '709px',
                        orientation: 'vertical',
                        panels: [{size: '0%', min: 0, resizable: true}, {size: '100%', min: 500, resizable: true}]});

                }
                previewVersionWorkflowDesign(domain, source, workflowId, version);

            }, error: function (e) {
                console.log("The Error Message is:::" + e.message);
                stopLoader();
                sessionTimeout(e);
            }
        });
    } catch (e) {

    }


}


function showDomainSources($this, domainSourceObj)
{
    var selectedDomain = $($this).val();
    if (domainSourceObj != null && domainSourceObj != '' && domainSourceObj != undefined)
    {
        domainSourceObj = JSON.parse(domainSourceObj);
        if (domainSourceObj != null && !jQuery.isEmptyObject(domainSourceObj))
        {
            var selectedDomainSources = domainSourceObj[selectedDomain];
            if (selectedDomainSources != null && !jQuery.isEmptyObject(selectedDomainSources)) {
                var sourceStr = "";
                $.each(selectedDomainSources, function (i, val) {
                    var selected = "";
                    var source = val;
                    var sourceLabel = source.replaceAll("_", " ");
                    sourceLabel = sourceLabel.split(' ') // Split sentence into words
                            .map(word =>
                                word.length > 0 ?
                                        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word // Capitalize first letter and lowercase the rest
                            )
                            .join(' ');
                    if (i == 0)
                    {
                        selected = "selected";
                    }
                    sourceStr += "<option value='" + val + "' " + selected + ">" + sourceLabel + "</option>"
                });
                $("#visionWorkflowDesinSourceSelectId").html(sourceStr);
            }


        }
    }
}


function showWorkflowDesignResourceSubButtons(id)
{
    $("#" + id).toggle();
}


function showWorkflowDesignConditions(processType)
{
    $("#" + processType + "ConditionsId").toggle();
    $("#" + processType + "RolesId").hide();
}
//function showWorkflowCreateDesignRoles()
//{
//    var domain = $("#visionWorkflowDesinDomainSelectId").val();
//    var source = $("#visionWorkflowDesinSourceSelectId").val();
//    $("#" + domain + "_" + source + "_RolesId").jqxPopover({offset: {left: 0, top: 50}, arrowOffsetValue: -50});
//    $("#" + domain + "_" + source + "_RolesId").jqxPopover('open');
//}

$(document).off('mousedown.jqxPopoverClose')
        .on('mousedown.jqxPopoverClose', function (e) {
            if ($(e.target).closest('.jqx-popover').length === 0) {
                $('[id$="_RolesId"]').each(function () {
                    if ($(this).data('jqxPopover')) {
                        $(this).jqxPopover('close');
                    }
                });
            }
        });

//  
//  function toggleWorkflowCreateDesignRoles() {
//    var domain = $("#visionWorkflowDesinDomainSelectId").val();
//    var source = $("#visionWorkflowDesinSourceSelectId").val();
//    var popoverId = "#" + domain + "_" + source + "_RolesId";
//
//    if ($(popoverId).length === 0) return;
//
//    if (!$(popoverId).data('jqxPopover')) {
//        $(popoverId).jqxPopover({
//            offset: { left: 0, top: 50 },
//            arrowOffsetValue: -50,
//            autoClose: true
//        });
//
//        $(popoverId).data('isOpen', false);
//        $(popoverId).on('open', function () {
//            $(this).data('isOpen', true);
//        });
//        $(popoverId).on('close', function () {
//            $(this).data('isOpen', false);
//        });
//    }
//    
//    if ($(popoverId).data('isOpen')) {
//        $(popoverId).jqxPopover('close');
//    } else {
//        $(popoverId).jqxPopover('open');
//    }
//}


function createMakeDynamicAddBoxInteractable(el, instance) {
    instance.draggable(el);
    var connectorsArr = ["Top", "Bottom", "Left", "Right"];
    connectorsArr.forEach(function (i, val) {
        instance.addEndpoint(el.id, {
            anchor: i,
            endpoint: "Dot",
            isSource: true,
            isTarget: true,
            maxConnections: -1
        });
    });

    instance.repaintEverything();
    el.addEventListener("dblclick", function (e) {
        e.stopPropagation(); // prevent bubbling up to body or other listeners
        //createAskConformationforDeletingNode(el.id, instance);
    });


    $('#' + el.id).on('mousedown', function (event) {
        var nodeId = el.id;
        var target = $(event.target).is('.node.rect-node.operation');
//        var target = $(event.target).is('.node.rect-node.operation') ||
//                $(event.target).parents('.node.rect-node.operation').length > 0;
        var rightClick = isRightClick(event);
        if (rightClick) {
            if (target) {
                var menuItems = "";
                var menuHeight;
                var rightClickFunc;
                if (nodeId != null && nodeId != '' && nodeId != undefined && nodeId.indexOf("ConditionNode") > -1)
                {
                    rightClickFunc = `Show condition:showNewWofkflowCondition('${el.id}');Delete:createAskConformationforDeletingNode('${el.id}')`;
                } else
                {
                    rightClickFunc = "Add condition:addNewWofkflowCondition('" + nodeId + "');Delete:createAskConformationforDeletingNode('" + nodeId + "');Edit:editroleNode('" + nodeId + "')";
                }
                if (rightClickFunc != null) {
                    var options = rightClickFunc.split(";");
                    menuHeight = options.length;
                    $.each(options, function (index) {
                        var menuItem = options[index].split(":")[0];
                        var funcName = options[index].split(":")[1];
                        menuItems += `<li onclick=${funcName}>${menuItem}</li>`;
                    });
                }

                $("#jqxMenu").remove();
                $("body").append("<div id='jqxMenu' class='jqxMenuClass'><ul></ul></div>");
                $("#jqxMenu ul").html(menuItems);
                var contextMenu = $("#jqxMenu").jqxMenu({width: '120px', height: menuHeight * 30 + 'px', autoOpenPopup: false, mode: 'popup', theme: 'energyblue'}); // ravi start
                var scrollTop = $(window).scrollTop();
                var scrollLeft = $(window).scrollLeft();
                contextMenu.jqxMenu('open', parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                return true;



            } else {
                return false;
            }

        }
    });


    // disable the default browser's context menu.
    $(document).on('contextmenu', function (e) {
        if ($(e.target).parents('.jqx-tree').length > 0) {
            return false;
        }
        return true;
    });

}



function makeDynamicPreviewBoxInteractable(el, instance) {
    instance.draggable(el);
    var connectorsArr = ["Top", "Bottom", "Left", "Right"];
    connectorsArr.forEach(function (i, val) {
        instance.addEndpoint(el.id, {
            anchor: i,
            endpoint: "Dot",
            isSource: true,
            isTarget: true,
            maxConnections: -1
        });
    });

    instance.repaintEverything();
}

function createAddNewNode(
        label,
        businessRoleId,
        roleId,
        conditionId,
        imageNameId,
        roleCssClass,
        top,
        left,
        canvas,
        instance
        ) {

    /* =====================================================
     PREVENT DUPLICATE OPERATION NODE
     ===================================================== */
    if ($("#" + businessRoleId).length > 0) {
        return;
    }

    /* =====================================================
     CHECK IF THIS IS FIRST OPERATION NODE
     ===================================================== */
    const existingOperationNodes =
            canvas.querySelectorAll(".node.operation");

    const isFirstNode = existingOperationNodes.length === 0;

    /* =====================================================
     CREATE START EVENT (ROUND + DRAGGABLE + LABEL)
     ===================================================== */
//    if (isFirstNode && !document.getElementById("Start_Event_1")) {
//
//        const start = document.createElement("div");
//        start.className = "node bpmn-event start";
//        start.id = "Start_Event_1";
//
//        start.style.top = (top + 10) + "px";
//        start.style.left = (left - 140) + "px";
//
//        start.innerHTML = `
//    <div class="bpmn-start-text above">
//        <div class="bpmn-start-desc">Check requested</div>
//    </div>
//    <div class="bpmn-start-circle"></div>
//`;
//
//        canvas.append(start);
//
//        // âœ… Make start draggable
//        instance.draggable(start);
//
//        // âœ… Allow only one outgoing connection
//        instance.makeSource(start, {
//            anchor: "Right",
//            maxConnections: 1
//        });
//
//        instance.makeTarget(start, {
//            allowLoopback: false
//        });
//    }

    /* =====================================================
     CREATE OPERATION NODE
     ===================================================== */
    const box = document.createElement("div");
    box.className = "node rect-node operation " + roleCssClass;
    box.id = businessRoleId;
    box.style.top = top + "px";
    box.style.left = left + "px";

    box.innerHTML = `
        <div class="label"
             data-roleId="${roleId}"
             data-businessRoleId="${businessRoleId}"
             data-conditionId="${conditionId}"
             data-roleCssClass="${roleCssClass}">
             
            <span class="workflowDesignRolesSpanImageClass">
                <img src="${imageNameId}" class="workflowDesignRolesImageClass"/>
            </span>

            <span class="workflowDesignRolesLabelClass">
                ${label}
            </span>
        </div>
    `;

    canvas.append(box);

    /* =====================================================
     DRAG & INTERACTION
     ===================================================== */
    if (label === "DQG Suite" || label === "SAP Ecosystem") {
        instance.draggable(box);
    } else {
        createMakeDynamicAddBoxInteractable(box, instance);
    }

    /* =====================================================
     AUTO CONNECT START â†’ FIRST NODE
     ===================================================== */
    if (isFirstNode) {
        setTimeout(function () {
            instance.connect({
                source: "Start_Event_1",
                target: businessRoleId,
                anchors: ["Right", "Left"],
                overlays: [
                    ["Arrow", {width: 10, length: 10}]
                ]
            });
        }, 50);
    }

    instance.repaintEverything();
}

//function createAddNewNode(label, businessRoleId, roleId, conditionId, imageNameId, roleCssClass, top, left, canvas, instance) {
//    const box = document.createElement("div");
//    box.className = "node rect-node operation " + roleCssClass + "";
//    box.id = businessRoleId;
//    box.style.top = top + "px";
//    box.style.left = left + "px";
//    box.innerHTML = `<div class="label" data-roleId='${roleId}' data-businessRoleId='${businessRoleId}' 
//               data-conditionId='${conditionId}' data-roleCssClass='${roleCssClass}'><span class='workflowDesignRolesSpanImageClass'>
//    <img src=${imageNameId} class='workflowDesignRolesImageClass'/>
//</span><span class='workflowDesignRolesLabelClass'>${label}</span></div>`;
//    if (!($("#" + businessRoleId).length > 0))
//    {
//        canvas.append(box);
//    }
//    if (label == 'DQG Suite' || label == 'SAP Ecosystem')
//    {
//        instance.draggable(box);
//    } else {
//        createMakeDynamicAddBoxInteractable(box, instance);
//    }
//    //createMakeDynamicAddBoxInteractable(box, instance);
//    instance.repaintEverything();
//}

function addPreviewNode(label, businessRoleId, roleId, conditionId, imageNameId, roleCssClass, top, left, canvas, instance) {
    const box = document.createElement("div");
    box.className = "node rect-node operation " + roleCssClass + "";
    box.id = businessRoleId;
    box.style.top = top + "px";
    box.style.left = left + "px";
    box.innerHTML = `<div class="label" data-roleId='${roleId}' data-businessRoleId='${businessRoleId}' 
               data-conditionId='${conditionId}' data-roleCssClass='${roleCssClass}'><span class='workflowDesignRolesSpanImageClass'>
    <img src=${imageNameId} class='workflowDesignRolesImageClass'/>
</span><span class='workflowDesignRolesLabelClass'>${label}</span></div>`;
    if (!($("#" + businessRoleId).length > 0))
    {
        canvas.append(box);
    }
    makeDynamicPreviewBoxInteractable(box, instance);
    instance.repaintEverything();
}


var workflowSaveFlag = false;
var workflowSaveCnt = 0;
function getFlowchartMappingData() {
    const nodes = [];
    const connections = [];

    workflowSaveFlag = true;
    workflowSaveCnt++;
    workflowInstance.getAllConnections().forEach(conn => {
        const anchors = [
            conn.endpoints[0].anchor.type || conn.endpoints[0].anchor.name || '',
            conn.endpoints[1].anchor.type || conn.endpoints[1].anchor.name || ''
        ];

        const connector = conn.getConnector();
        var connectorOptions = connector._jsPlumb.instance.Defaults.Connector;
        const connectorData = {
            type: connectorOptions[0] || "Flowchart", // Default to "Flowchart" if not available
            stub: connectorOptions[1].stub || [], // Get stub data if available
            cornerRadius: connectorOptions[1].cornerRadius || 0, // Get corner radius, default to 0
            alwaysRespectStubs: connectorOptions[1].alwaysRespectStubs || false // Respect stubs flag
        };

        const overlays = [];
        const overlayObjects = conn.getOverlays();
        for (const [id, overlay] of Object.entries(overlayObjects || {})) {
            if (overlay.type === "Label") {
                overlays.push({
                    type: "Label",
                    id,
                    label: overlay.getLabel() || "",
                    location: overlay.location || 0.5,
                    cssClass: overlay.canvas.className || ""
                });
            } else if (overlay.type === "Arrow") {
                overlays.push({
                    type: "Arrow",
                    id,
                    location: overlay.location || 1,
                    width: overlay.width || 10,
                    length: overlay.length || 20,
                    direction: overlay.direction || 1
                });
            } else {
                overlays.push({
                    type: overlay.type || "Unknown",
                    id,
                    location: overlay.location || null
                });
            }
        }

        connections.push({
            sourceId: conn.sourceId,
            targetId: conn.targetId,
            anchors: anchors,
            connector: connectorData,
            overlays: overlays
        });
    });

    const data = {nodes, connections};
    $("#dialog").html("<div class ='linkDialogBox'>Workflow Version " + workflowSaveCnt + " saved successfully</div>");
    $("#dialog").dialog({resizable: false,
        title: 'Save',
        modal: true,
        width: 300,
        height: 150,
        fluid: true,
        buttons: [
            {
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }, {
                text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }
        ],
        open: function (event, ui) {

        },
        beforeClose: function (event, ui) {
            $(this).html("");
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });

}



function getFlowchartMappingData1() {
    const nodes = [];
    const connections = [];
    document.querySelectorAll('.operation, .condition').forEach(el => {
        nodes.push({
            id: el.id,
            type: el.classList.contains('condition') ? 'condition' : 'operation',
            label: el.querySelector('.label').innerText || '',
            top: el.style.top,
            left: el.style.left
        });
    });
    jsPlumbInstance.getAllConnections().forEach(conn => {
//        const labelOverlay = conn.getOverlay("label");
//        const label = labelOverlay.getLabel() || '';
        const sourceId = conn.sourceId;
        const targetId = conn.targetId;
        connections.push({
            sourceId,
            targetId,
//            label
        });
    });
    var data = {nodes, connections};
    console.log(data);
    return data;
}



function createlinkPopup(source, target) {
    let html = `<ul id= class="list-group">`
            // + `<li class="list-group-item" data-source="${source}" data-target="${target}" style='cursor: pointer;'>Branch</li>`
            + `<li class="list-group-item" data-source="${source}" data-target="${target}" style='cursor: pointer;'>Condition</li>`
            + `</ul>`;
    $("#dialog").html("<div class ='linkDialogBox'>" + html + "</div>");
    $("#dialog").dialog({resizable: false,
        title: 'Create',
        modal: true,
        width: 300,
        height: 150,
        fluid: true,
//        buttons: [{
//                text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
//                click: function () {
//                    $(this).html("");
//                    $(this).dialog("close");
//                    $(this).dialog("destroy");
//                }
//            }
//        ],
        open: function (event, ui) {
            document.addEventListener("click", function (event) {
                if (event.target.classList.contains("list-group-item")) {
                    const siblings = event.target.parentElement.querySelectorAll(".list-group-item");
                    siblings.forEach(item => item.classList.remove("active"));
                    event.target.classList.add("active");
                    const source = event.target.dataset.source;
                    const target = event.target.dataset.target;
                    const label = event.target.textContent;
                    createOpenConditionBox(source, target, label);
                    console.log("Source:", source, "Target:", target);
                }
            });
        },
        beforeClose: function (event, ui) {
            $(this).html("");
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}
function createOpenConditionBox(source, conditionId, conditionNodeId, label, controlType) {
    $('#workflowConditionMainBoxDiv').remove();
    let labelHtml = '';
    if (label == 'Condition') {
        var roles = {};
        var rolesStr = "";
        var sourceCond = "";
        $(".workflowOperationsHeaderRolesClass").find("div").each(function (i, val) {
            var divId = $(this).attr("id");
            roles[$("#" + divId).attr("data-businessRoleId")] = $("#" + divId).html();
        });
        if (roles != null && !jQuery.isEmptyObject(roles))
        {
            sourceCond = roles[source];
            rolesStr += "<option value='Select'>Select</option>";
            $.each(roles, function (key, val) {
                rolesStr += "<option value='" + key + "'>" + val + "</option>";
            });
        }
        labelHtml = `<div id='workflowConditionOperations' class='workflowConditionOperations'>
                 <div id='worflowConditionBodyOperations' class='worflowConditionBodyOperations'>
                 <label class="form-label">CASE</label>
                   <input type="text" id="ifCondition${conditionNodeId}" class="form-control" readonly placeholder="WHEN">
                 </div>                
                <div class="mb-3">
                 <a href='#' onclick=createGetconditionSelection('${label}','${conditionId}','${conditionNodeId}','${source}')>Please select condition</a>
                 </div>
                 <div class="mb-3 defaultroleDivClass">
                 <label>ELSE</label>
                 <select id='selectElseRole${conditionNodeId}' class='selectCondClass form-control'>
                 ${rolesStr}
                 </select>
                 </div>
                 </div>
                 <div id='conditionErrorId${conditionNodeId}' style='display:none;color:red' class='errorMsgDisplay'>Please select the If and Default Role & condition(s)</div>
                 <button type="button" id='worflowDesigConditionSaveBtn' onclick=createSaveWorkflowDesignConditions('${label}','${source}','${conditionNodeId}','${controlType}') class="btn btn-primary worflowDesigConditionSaveBtn">Save</button>
                 </div>`;
    }
    let html = `<div id='workflowConditionMainBoxDiv' class='workflowConditionMainBoxDiv'>`
            + `<div class='workflowConditionHeader'><div class='workflowConditionHeaderLabel'>${sourceCond} Condition</div><i class='fa fa-times' id=\"closeSideBtn\" aria-hidden='true'></i></div>`
            + `<div id='worflowOperations' class='worflowOperations'>`
            + `${labelHtml}`
            + `</div>`
            + `</div>`;
    $('#workflowDesignMainId').append(html);
    $('#closeSideBtn').click(function () {
        $('#workflowConditionMainBoxDiv').remove();
    });


}
function createAskConformationforDeletingNode(id)
{
    var instance = newWorkflowInstance;
    showLoader();
    var domainType = $("#visionWorkflowDesinDomainSelectId").val();
    var processType = $("#visionWorkflowDesinSourceSelectId").val();
    var nodeLabel = $("#" + id).find(".workflowDesignRolesLabelClass").text();
    var roleId = $("#" + id).find(".label").attr('data-businessroleid');
    var connections = instance.getConnections();
    var nodeConnections = connections.filter(function (connection) {
        return connection.sourceId === id || connection.targetId === id;
    });



    const result = [];

    const conditionMap = {};
    const joinConnections = {}; // Join node to multiple targets

    nodeConnections.forEach(conn => {
        const sourceId = conn.sourceId;
        const targetId = conn.targetId;
        var businessRoleSourceId = $("#" + sourceId).find("div").attr("data-businessroleid");
        // console.log("source Id:::" + sourceId + "    TargetId:::" + targetId);

        const overlay = Object.values(conn.getOverlays() || {}).find(o => o.type === "Label");
        var label = overlay ? overlay.getLabel() : "";
        var parser = new DOMParser();
        var doc = parser.parseFromString(label, 'text/html');
        // Get the value inside the <span> element
        var spanValue = doc.querySelector('.workflowDesignConnectionDeleteSpanClass').innerText;
        if (spanValue != null && spanValue != '' && spanValue != undefined)
        {
            label = spanValue;
        }
        console.log(spanValue);
        const isConditionSource = sourceId.includes("Condition");
        const isConditionTarget = targetId.includes("Condition");
        const isJoinSource = sourceId.indexOf("join") > -1;
        const isJoinTarget = targetId.indexOf("join") > -1;

        // 1. Source → condition node
        if (isConditionTarget) {
            conditionMap[targetId] = conditionMap[targetId] || {
                type: "condition",
                sourceId,
                conditionNode: targetId,
                label: label,
                trueTargetId: null,
                trueLabel: null,
                falseTargetId: null,
                falseLabel: null,
                businessRoleId: businessRoleSourceId
            };
        }

        // 2. Condition → true / false branches
        else if (isConditionSource) {
            const cond = conditionMap[sourceId] || {
                type: "condition",
                sourceId: null,
                label: "",
                conditionNode: sourceId,
                trueTargetId: null,
                trueLabel: null,
                falseTargetId: null,
                falseLabel: null

            };

            if (label.toLowerCase() === "true") {
                cond.trueTargetId = targetId;
                cond.trueLabel = label;
            } else if (label.toLowerCase() === "false") {
                cond.falseTargetId = targetId;
                cond.falseLabel = label;
            }
            cond['condition'] = $("#" + sourceId + "_FilterVal").val();
            conditionMap[sourceId] = cond;
        }

        // 3. Source → join
        else if (isJoinTarget) {
            result.push({
                type: "join",
                sourceId,
                joinNode: targetId,
                label,
                businessRoleId: businessRoleSourceId,
                targets: [] // Will fill later if needed
            });
        }

        // 4. Join → target (store multiple targets)
        else if (isJoinSource) {
            if (!joinConnections[sourceId]) {
                joinConnections[sourceId] = [];
            }
            joinConnections[sourceId].push({
                targetId,
            });
        }

        // 5. Normal connections
        else {
            result.push({
                type: "normal",
                sourceId,
                targetId,
                label,
                businessRoleId: businessRoleSourceId
            });
        }
    });

    // Add conditions
    Object.values(conditionMap).forEach(cond => result.push(cond));

    // Merge join targets into their corresponding join entries
    result.forEach(obj => {
        if (obj.type === "join" && joinConnections[obj.joinNode]) {
            //obj.targetIds = joinConnections[obj.joinNode].map(j => j.targetId).join(", ");
            obj.targetId = [...new Set(joinConnections[obj.joinNode].map(j => j.targetId))].join(", ");
            delete obj.targets;
        }
    });

    result.forEach(obj => {
        if (obj.type === "join") {
            var joinNode = obj.joinNode;
            if (joinNode != null && joinNode != '' && joinNode != undefined)
            {
                joinNode = joinNode.replace("joint-", "");
                obj.targetId = joinNode;
            }
            delete obj.targets;
        } else if (obj.type === "condition")
        {
            if (!((obj.trueTargetId != null && obj.trueTargetId != '' && obj.trueTargetId != undefined)
                    || (obj.falseTargetId != null && obj.falseTargetId != '' && obj.falseTargetId != undefined)))
            {
                var connNode = obj.conditionNode;
                var outgoingConnections = instance.getConnections();
                var outgoingConns = outgoingConnections.filter(function (connection) {
                    return connection.sourceId === connNode;
                });
                outgoingConns.forEach(conn => {
                    const targetId = conn.targetId;
                    const overlay = Object.values(conn.getOverlays() || {}).find(o => o.type === "Label");
                    var label = overlay ? overlay.getLabel() : "";
                    var parser = new DOMParser();
                    var doc = parser.parseFromString(label, 'text/html');
                    // Get the value inside the <span> element
                    var spanValue = doc.querySelector('.workflowDesignConnectionDeleteSpanClass').innerText;
                    if (spanValue != null && spanValue != '' && spanValue != undefined)
                    {
                        label = spanValue;
                    }
                    if (label == "True")
                    {
                        obj.trueLabel = label;
                        obj.trueTargetId = targetId;
                    } else if (label == 'False')
                    {
                        obj.falseLabel = label;
                        obj.falseTargetId = targetId;
                    }
                });

            } else if (!(obj.sourceId != null && obj.sourceId != '' && obj.sourceId != undefined))
            {
                var connNode = obj.conditionNode;
                var incomingconnections = instance.getConnections();
                var incomingconns = incomingconnections.filter(function (connection) {
                    return connection.targetId === connNode;
                });
                incomingconns.forEach(conn => {
                    const sourceId = conn.sourceId;
                    const overlay = Object.values(conn.getOverlays() || {}).find(o => o.type === "Label");
                    var label = overlay ? overlay.getLabel() : "";
                    var parser = new DOMParser();
                    var doc = parser.parseFromString(label, 'text/html');
                    // Get the value inside the <span> element
                    var spanValue = doc.querySelector('.workflowDesignConnectionDeleteSpanClass').innerText;
                    if (spanValue != null && spanValue != '' && spanValue != undefined)
                    {
                        label = spanValue;
                    }
                    obj.label = label;
                    obj.sourceId = sourceId;
                });
            }
        }
    });

    if (deleteType == 'EDIT' && nodeConnections.length > 0) {
        $.ajax({
            datatype: "json",
            type: "POST",
            url: 'getWorkflowDeleteRoleImpactData',
            data: {
                'source': processType,
                'domain': domainType,
                'roleLabel': nodeLabel,
                'roleId': roleId,
                'impactRolesObj': JSON.stringify(result),
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                if (response != null && !jQuery.isEmptyObject(response)) {
                    var message = response['Message'];
                    $("#dialog").html(message);
                    $("#dialog").dialog({resizable: false,
                        title: 'Remove',
                        modal: true,
                        width: 400,
                        height: 250,
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    instance.remove(id);
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                }
                            }, {
                                text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                }
                            }

                        ],
                        open: function (event, ui) {

                        },
                        beforeClose: function (event, ui) {
                            $(this).html("");
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });
                }

            }, error: function (e) {
                console.log("The Error Message is:::" + e.message);
                stopLoader();
                sessionTimeout(e);
            }
        });

    } else {
        stopLoader();
        instance.remove(id);
    }

}

function createDotsToNodes(el, instance)
{
    const dots = el.querySelectorAll('.dot');
    dots.forEach(dot => {
        let anchorPos;
        let targetAnchorPos;
        let customClassId = '';
        let customAnchorType = '';
        if (dot.classList.contains('top')) {
            if (dot.offsetParent.classList.contains('condition')) {
                anchorPos = [0, 0, 0, -1];
                targetAnchorPos = [0, 0, 0, 0];
            } else {
                anchorPos = [0.1, 0.5, 0, -1];
                targetAnchorPos = [0, 0.5, 0, 0];
            }
            customClassId = 'top';
            customAnchorType = 'Top';
        } else if (dot.classList.contains('right')) {
            if (dot.offsetParent.classList.contains('condition')) {
                anchorPos = [1, 0, 0, 0];
                targetAnchorPos = [1, 0, 0, 0];
            } else {
                anchorPos = [0.5, 0, 1, 0];
                targetAnchorPos = [0.5, 0, 0, 0];
            }
            customClassId = 'right';
            customAnchorType = 'Right';
        } else if (dot.classList.contains('bottom')) {
            if (dot.offsetParent.classList.contains('condition')) {
                anchorPos = [0, 1, 0, -1];
                targetAnchorPos = [0, 1, 0, 0];
            } else {
                anchorPos = [0.1, 0.5, 0, 0];
                targetAnchorPos = [0, 0.5, 0, 0];
            }
            customClassId = 'bottom';
            customAnchorType = 'Bottom';
        } else if (dot.classList.contains('left')) {
            if (dot.offsetParent.classList.contains('condition')) {
                anchorPos = [0, 0, 0, 0];
                targetAnchorPos = [0, 0, 0, 0];
            } else {
                anchorPos = [0.5, 0.1, 0, 0];
                targetAnchorPos = [0.5, 0, 0, 0];
            }
            customClassId = 'left';
            customAnchorType = 'Left';
        }

        // Set the custom random ID
        const customId = `${el.id}:dot-${customClassId}`;
        dot.id = customId;

        instance.makeSource(customId, {
            parent: el.id,
            anchor: customAnchorType,
            // anchor: anchorPos,
            maxConnections: -1,
            isSource: true
        });

        instance.makeTarget(customId, {
            parent: el.id,
            anchor: customAnchorType,
            //anchor: targetAnchorPos,
            allowLoopback: false,
            maxConnections: -1,
            isTarget: true
        });
    });
}

function showOriginalWorkflowMappingData()
{
    $("#worflowDesignOperationsOriginalDataId").toggleClass('expandOriginalWorkflowMappingDataClass');
    $("#worflowDesignOperationsId").toggleClass("expandEditParentWorkflowMappingDataClass")
}





function showCreateNewWorkflowDesignProcess()
{
    $("#workflowDesignOperationsHeaderId").show();
    $("#workflowDesignOperationsDataId").show();
    $("#workflowDesignOperationsDataNewId").show();
    showCreateNewWorkflowDesignResourceProcess();
}
var newWorkflowInstance;
function showCreateNewWorkflowDesignResourceProcess()
{
    deleteType = "CREATE";
    $('.toggleRightPanelBtn').remove();
    $('.toggleLeftPanelBtn').remove();
    $("#workflowDesignOperationsDataId").html("");
    $("#workflowDesignOperationsDataId").show();
    $("#conditionHiddenFieldsId").html("");
    $("#workflowDesignOperationsOriginalDataId").html("");
    $("#workflowDesignOperationsOriginalDataId").hide();
    var domain = $("#visionWorkflowDesinDomainSelectId").val();
    var source = $("#visionWorkflowDesinSourceSelectId").val();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getWorkflowDesignDetails',
        data: {
            'domain': domain,
            'source': source
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var designResourcesStr = response['designResourcesStr'];
                var rolesDivStr = response['rolesDivStr'];
                $("#workflowDesignOperationsHeaderId").html(designResourcesStr);
                $("#" + domain + "_" + source + "_RolesId").remove();
                $("body").append(rolesDivStr);
                $("#" + domain + "_" + source + "_RolesId").jqxPopover({
                    offset: {left: 0, top: 0},
                    position: 'left',
                    width: 200,
                    height: 'auto',
                    position: 'left',
                    autoClose: false,
                    title: "Roles",
                    showCloseButton: true,
                    selector: $("#newworkflowRolesButtonId")
                });
                $("#workflowDesignOperationsMainDataId").jqxSplitter({width: '100%',
                    height: '709px',
                    orientation: 'vertical',
                    panels: [{size: '0%', min: 0, resizable: true}, {size: '100%', min: 500, resizable: true}]});
                loadNewWorkflowDesignResources();

            }

        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });


}

function loadNewWorkflowDesignResources()
{

    try {
        window.deleteAllConnections = function () {
            newWorkflowInstance.deleteEveryConnection();
            console.log("All connections have been deleted.");
            // Optional: Clear the container if you want to reset the canvas completely
            // $("#workflowDesignOperationsDataId").html("");
        };
    } catch (e) {

    }
//    $("#workflowDesignOperationsDataId").html("");
    let workflowType = $("#visionWorkflowDesinWorkflowId").val();

    jsPlumb.ready(function () {
        newWorkflowInstance = jsPlumb.getInstance({
            Container: "workflowDesignOperationsDataId",
            Connector: ["Flowchart", {cornerRadius: 10, stub: [40, 60]}],
            Endpoint: "Dot",
            EndpointStyle: {fill: "#456", radius: 5},
            PaintStyle: {stroke: "#1E90FF", strokeWidth: 2},
            HoverPaintStyle: {stroke: "#FF4500", strokeWidth: 3},
        });
        function safeConnect(instance, config) {
            const conn = instance.connect(config);
            conn._isProgrammatic = true; // Mark this connection
            return conn;
        }

        newWorkflowInstance.unbind("connection", newConnection);
        newWorkflowInstance.bind("connection", newConnection);

        function newConnection(info) {
            // Ignore programmatic connections
            if (info.connection._isProgrammatic) {
                return;
            }
            var targetSourceId = info.sourceId;
            const targetId = info.targetId;
            const targetEndpoint = info.targetEndpoint;
            const anchorType = targetEndpoint['anchor']['type'];

            var askLabelFlag = true;

            // Check if this is an existing connection being edited
            const isExistingConnection = newWorkflowInstance.getAllConnections().some(conn => {
                return conn.sourceId === targetSourceId && conn.targetId === targetId && !conn._isProgrammatic;
            });

            const overlayObjects = info.connection.getOverlays();
            for (const [id, overlay] of Object.entries(overlayObjects || {})) {
                if (overlay.type === "Label" || overlay.type === "Arrow") {
                    return;
                }
            }

            if (askLabelFlag) {
                var controlTypesOptionsStr = "";
                if (targetSourceId.includes("-")) {
                    var targetRoleIdarr = targetSourceId.split("-");
                    targetSourceId = targetRoleIdarr[0];
                }
                var controlTypesStr = $("#" + targetSourceId + "_controlTypes").val();
                if (controlTypesStr != null && controlTypesStr != '' && controlTypesStr != undefined) {
                    var controlTypesArr = JSON.parse(controlTypesStr);
                    if (controlTypesArr != null && !jQuery.isEmptyObject(controlTypesArr)) {
                        controlTypesOptionsStr += "<option value='SELECT'>select</option>";
                        $.each(controlTypesArr, function (i, val) {
                            controlTypesOptionsStr += "<option value='" + val + "'>" + val + "</option>";
                        });
                    }
                }
                var askLabelStr = "<div class='workflowDesignConnectionLabelClass'>" +
                        "<span class='workflowDesignConnectionLabelSpanClass'>Please select label :</span>" +
                        "<select id='workflowDesignConnectionLabelSelectId'>" +
                        controlTypesOptionsStr +
                        "</select>" +
                        "<span id='workflowDesignConnectionLabelErrorSpanId' class='workflowDesignConnectionLabelErrorSpanClass' style='display:none;color:red'></span>" +
                        "</div>";
                $("#dialog").html("<div class='linkDialogBox'>" + askLabelStr + "</div>");
                $("#dialog").dialog({
                    resizable: false,
                    title: 'Label',
                    modal: true,
                    width: 300,
                    height: 'auto',
                    fluid: true,
                    buttons: [
                        {
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                var userLabel = $("#workflowDesignConnectionLabelSelectId").val();

                                if (userLabel != null && userLabel == 'DUPLICATE-CHECK') {
                                    var $confirmDlg = $("<div>")
                                            .html("Can not processed  Duplicate Check Before Submit Process")
                                            .dialog({
                                                resizable: false,
                                                title: "Confirm Duplicate Check",
                                                modal: true,
                                                width: 350,
                                                height: "auto",
                                                fluid: true,
                                                open: function () {
                                                    // make sure the main dialog stays behind the confirm dialog
                                                    $(this).parent().css("z-index", 10001);
                                                },

                                                close: function () {
                                                    $(this).remove();               // clean up the temporary div
                                                }
                                            });

                                    // **stop** the original OK-handler here – we wait for the user
                                    return;
                                }

                                if (userLabel !== null && userLabel != '' && userLabel != undefined && userLabel != 'SELECT') {
                                    // Get the current label of the connection if it exists
                                    var currentLabel = "";
                                    const existingOverlays = info.connection.getOverlays();
                                    for (const [id, overlay] of Object.entries(existingOverlays || {})) {
                                        if (overlay.type === "Label") {
                                            var existingLabel = overlay.getLabel();
                                            var parser = new DOMParser();
                                            var doc = parser.parseFromString(existingLabel, 'text/html');
                                            var spanValue = doc.querySelector('.workflowDesignConnectionDeleteSpanClass').innerText;
                                            if (spanValue)
                                                currentLabel = spanValue;
                                        }
                                    }

                                    // Check for duplicate label from the same source AND same target, but skip if editing the same connection
                                    const existingConnections = newWorkflowInstance.getAllConnections().filter(conn => {
                                        if (conn === info.connection)
                                            return false; // Skip the current connection
                                        const overlayObjects = conn.getOverlays();
                                        for (const [id, overlay] of Object.entries(overlayObjects || {})) {
                                            if (overlay.type === "Label") {
                                                var existingLabel = overlay.getLabel();
                                                var parser = new DOMParser();
                                                var doc = parser.parseFromString(existingLabel, 'text/html');
                                                var spanValue = doc.querySelector('.workflowDesignConnectionDeleteSpanClass').innerText;
                                                if (spanValue && spanValue === userLabel &&
                                                        conn.sourceId === targetSourceId &&
                                                        conn.targetId === targetId && // NEW: Check same target too
                                                        !conn._isProgrammatic) {
                                                    return true;
                                                }
                                            }
                                        }
                                        return false;
                                    });

                                    if (existingConnections.length > 0) {
                                        $("#workflowDesignConnectionLabelErrorSpanId").text("Cannot add — this target is already linked with the same process.").show();
                                        if (!isExistingConnection) {
                                            newWorkflowInstance.deleteConnection(info.connection); // Delete only if new duplicate
                                        }
                                        return;
                                    }


                                    // Add increased spacing for new connections
                                    const connectionsToTarget = newWorkflowInstance.getAllConnections().filter(conn => conn.targetId === targetId && !conn._isProgrammatic);
                                    const offsetY = connectionsToTarget.length * 60; // Increased from 40 to 60 for more space

                                    var userLabelStr = userLabel.replace("_", " ");
                                    userLabelStr = userLabelStr.replace("-", " ");
                                    userLabelStr = userLabelStr.split(' ').map(word => word.length > 0 ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word).join(' ');
                                    userLabelStr = userLabelStr.replaceAll(" ", "");
                                    var labelStr = `<span class='workflowDesignConnectionDeleteSpanClass'>${userLabel}</span><img src='images/iDXPUI5DeleteRow.svg' class="workflowDesignConnectionDeleteImgClass" onclick="deleteLinkPopup('${userLabel}','${targetSourceId}', '${targetId}')"/>`;
                                    info.connection.addOverlay([
                                        "Custom",
                                        {
                                            id: `plus-${info.connection.id}`,
                                            location: 0.9,

                                            create: function () {

                                                const wrapper = document.createElement("div");
                                                wrapper.style.position = "relative";
                                                wrapper.style.top = `${offsetY}px`;
                                                wrapper.style.pointerEvents = "auto";

                                                const span = document.createElement("span");
                                                span.className = "plus-circle";
                                                span.innerText = "+";
                                                span.title = "Add new control";
                                                span.style.cursor = "pointer";

                                                // ✅ SAVE ALL PARAMETERS ON ELEMENT
                                                span.dataset.targetSourceId = targetSourceId;
                                                span.dataset.targetId = targetId;
                                                span.dataset.connectionId = info.connection.id;
                                                span.dataset.offsetY = offsetY;
                                                span.dataset.show = "true";
                                                span.dataset.role = "ADD";

                                                // ✅ CLICK HANDLER (NO INLINE JS)
                                                span.addEventListener("click", function (e) {
                                                    e.stopPropagation();

                                                    addControlPopup(
                                                            span.dataset.targetSourceId,
                                                            span.dataset.targetId,
                                                            span.dataset.connectionId,
                                                            span.dataset.offsetY
                                                            );
                                                });

                                                wrapper.appendChild(span);
                                                return wrapper;
                                            }
                                        }
                                    ]);


                                    info.connection.addOverlay([
                                        "Arrow",
                                        {
                                            location: 1,
                                            id: "arrow",
                                            width: 10,
                                            length: 12,
                                            foldback: 0.8
                                        }
                                    ]);
                                    var path = "";

                                    if (userLabel === 'RETURN') {
                                        path = "images/opposite-arrow-icon.png";
                                    } else if (userLabel === 'SUBMIT') {
                                        path = "images/iDXPUI5Submit.svg";
                                    } else if (userLabel === 'APPROVE') {
                                        path = "images/iDXPUI5Approvals.svg";

                                    } else if (userLabel === 'RE-SUBMIT') {
                                        path = "images/SubmitCheck.png";
                                    } else if (userLabel === 'TRANSFER TO SAP') {
                                        path = "images/Transfer-to-ERP-01.svg";

                                    } else if (userLabel === 'REPLICATE TO SAP') {
                                        path = "images/Transfer-to-ERP-01.svg";

                                    } else if (userLabel === 'REPLICATE TO BNAC') {
                                        path = "images/Transfer-to-ERP-01.svg";

                                    } else if (userLabel === 'Fetch Data from BNAC') {
                                        path = "images/download.png";
                                    }
                                    const controlId = `DECISION_${Date.now()}`;
                                    const overlayId = `decision-${controlId}`;


                                    info.connection.addOverlay([
                                        "Custom",
                                        {
                                            id: overlayId, // ✅ STABLE ID
                                            location: 0.3,

                                            create: function () {
                                                const wrapper = document.createElement("div");
                                                wrapper.classList.add("custom-overlay");

                                                // ✅ STORE DATA
                                                wrapper.dataset.label = userLabel;
                                                wrapper.dataset.path = path;
                                                wrapper.dataset.show = "true";

                                                var width = "";
                                                var height = "";
                                                if (userLabel == 'RETURN') {
                                                    width = "62px"
                                                    height = "65px"

                                                } else {
                                                    width = "26px"
                                                    height = "28px"

                                                }


                                                wrapper.style.width = "40px";
                                                wrapper.style.height = "40px";
                                                wrapper.style.position = "relative";
                                                wrapper.style.pointerEvents = "auto";
                                                wrapper.style.cursor = "pointer";
                                                wrapper.title = userLabel;
                                                wrapper.path = path;

                                                const diamond = document.createElement("div");
                                                diamond.style.width = "34px";
                                                diamond.style.height = "34px";
                                                diamond.style.background = "#fff";
                                                diamond.style.border = "2px solid #000";
                                                diamond.style.position = "absolute";
                                                diamond.style.top = "50%";
                                                diamond.style.left = "50%";
                                                diamond.style.transform = "translate(-50%, -50%) rotate(45deg)";
                                                diamond.style.boxSizing = "border-box";

                                                const img = document.createElement("img");
                                                img.src = path;
                                                img.style.width = width;
                                                img.style.height = height;
                                                img.style.position = "absolute";
                                                img.style.top = "50%";
                                                img.style.left = "50%";
                                                img.style.transform = "translate(-50%, -50%) rotate(-45deg)";
                                                img.style.pointerEvents = "none";

                                                diamond.appendChild(img);
                                                wrapper.appendChild(diamond);

                                                return wrapper;
                                            }
                                        }
                                    ]);

                                    if (!info.connection._processControls) {
                                        info.connection._processControls = [];
                                    }

                                    info.connection._processControls.push({
                                        controlId: controlId,
                                        type: userLabel, // e.g. SUBMIT / APPROVE / CONDITION
                                        overlayId: overlayId, // ✅ SAME ID
                                        location: 0.5
                                    });



                                    info.connection.addOverlay([
                                        "Custom",
                                        {
                                            id: "delete-conn",
                                            location: 0.7,
                                            create: function () {
                                                const wrapper = document.createElement("div");
                                                wrapper.className = "conn-delete-wrapper";


                                                const del = document.createElement("div");
                                                del.innerHTML = '<img src="images/delete_icon.svg" width="16px">';
                                                del.className = "conn-delete-icon";
                                                del.title = "Delete connection";
                                                del.dataset.DeleteLabel = userLabel;
                                                del.dataset.connectionId = info.connection.id;

                                                del.onclick = function (e) {
                                                    e.stopPropagation();
                                                    openDeleteProcessPopup(info.connection);
                                                };


                                                wrapper.appendChild(del);
                                                return wrapper;
                                            }
                                        }
                                    ]);
                                    info.connection.addOverlay([
                                        "Label",
                                        {
                                            id: "hiddenLabel",
                                            label: labelStr, // âœ… Stored value
                                            location: 0.3,
                                            cssClass: "jsplumb-hidden-label label-" + userLabelStr
                                        }
                                    ]);


//                                    info.connection.addOverlay([
//                                        "Arrow",
//                                        {
//                                            location: 1,
//                                            id: "arrow",
//                                            width: 10,
//                                            length: 12,
//                                            foldback: 0.8
//                                        }
//                                    ]);



                                    // ... (rest of the overlay extraction, joint logic, and controlTypes handling remains unchanged from previous version)
                                    var newConnectionLabel = "";
                                    const overlayObjects = info.connection.getOverlays();
                                    for (const [id, overlay] of Object.entries(overlayObjects || {})) {
                                        if (overlay.type === "Label") {
                                            newConnectionLabel = overlay.getLabel();
                                            var parser = new DOMParser();
                                            var doc = parser.parseFromString(newConnectionLabel, 'text/html');
                                            var spanValue = doc.querySelector('.workflowDesignConnectionDeleteSpanClass').innerText;
                                            if (spanValue != null && spanValue != '' && spanValue != undefined) {
                                                newConnectionLabel = spanValue;
                                            }
                                        }
                                    }
                                    const incoming = newWorkflowInstance.getAllConnections().filter(conn => {
                                        var newIncomingConnLabel = "";
                                        const incomingOverlayObjects = conn.getOverlays();
                                        for (const [id, overlay] of Object.entries(incomingOverlayObjects || {})) {
                                            if (overlay.type === "Label") {
                                                newIncomingConnLabel = overlay.getLabel();
                                                var parser = new DOMParser();
                                                var doc = parser.parseFromString(newIncomingConnLabel, 'text/html');
                                                var spanValue = doc.querySelector('.workflowDesignConnectionDeleteSpanClass').innerText;
                                                if (spanValue != null && spanValue != '' && spanValue != undefined) {
                                                    newIncomingConnLabel = spanValue;
                                                }
                                            }
                                        }
                                        return conn.targetId === targetId && conn.endpoints[1].anchor.type === anchorType && newIncomingConnLabel == newConnectionLabel;
                                    });

                                    if (incoming.length > 1 && targetId.indexOf("joint") === -1) {
                                        console.log("Multiple incoming connections detected. Creating joint...");
                                        const jointId = `joint-${targetId}`;
                                        var deletedLabel = "";
                                        const userIncoming = incoming.filter((conn, i) => {
                                            const sourceId = conn.sourceId;
                                            if (conn._isProgrammatic) {
                                                if (sourceId && sourceId.indexOf("joint") > -1) {
                                                    const overlayObjects = conn.getOverlays();
                                                    for (const [id, overlay] of Object.entries(overlayObjects || {})) {
                                                        if (overlay.type === "Label") {
                                                            deletedLabel = overlay.getLabel();
                                                            var parser = new DOMParser();
                                                            var doc = parser.parseFromString(deletedLabel, 'text/html');
                                                            var spanValue = doc.querySelector('.workflowDesignConnectionDeleteSpanClass').innerText;
                                                            if (spanValue != null && spanValue != '' && spanValue != undefined) {
                                                                deletedLabel = spanValue;
                                                            }
                                                        }
                                                    }
                                                }
                                                return false;
                                            }
                                            if (sourceId && sourceId.indexOf("joint") > -1) {
                                                incoming.splice(i, 1);
                                                jointId = sourceId;
                                                return false;
                                            }
                                            return true;
                                        });

                                        if (!document.getElementById(jointId)) {
                                            createJointNode(jointId, newWorkflowInstance, "workflowDesignOperationsDataId");
                                        }

                                        userIncoming.forEach(conn => {
                                            const overlayObjects = conn.getOverlays();
                                            for (const [id, overlay] of Object.entries(overlayObjects || {})) {
                                                if (overlay.type === "Label") {
                                                    deletedLabel = overlay.getLabel();
                                                    var parser = new DOMParser();
                                                    var doc = parser.parseFromString(deletedLabel, 'text/html');
                                                    var spanValue = doc.querySelector('.workflowDesignConnectionDeleteSpanClass').innerText;
                                                    if (spanValue != null && spanValue != '' && spanValue != undefined) {
                                                        deletedLabel = spanValue;
                                                    }
                                                }
                                            }
                                            newWorkflowInstance.deleteConnection(conn);
                                        });

                                        var deletedLabelStr = deletedLabel.replace("_", " ");
                                        deletedLabelStr = deletedLabelStr.replace("-", " ");
                                        deletedLabelStr = deletedLabelStr.split(' ').map(word => word.length > 0 ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word).join(' ');
                                        deletedLabelStr = deletedLabelStr.replaceAll(" ", "");
                                        userIncoming.forEach(conn => {
                                            if (userLabel === 'RETURN') {
                                                path = "images/opposite-arrow-icon.png";
                                            } else if (userLabel === 'SUBMIT') {
                                                path = "images/SubmitCheck.png";
                                            } else if (userLabel === 'APPROVE') {
                                                path = "images/iDXPUI5Approvals.svg";

                                            } else if (userLabel === 'RE-SUBMIT') {
                                                path = "images/SubmitCheck.png";
                                            } else if (userLabel === 'TRANSFER TO SAP') {
                                                path = "images/Transfer-to-ERP-01.svg";
                                            }

                                            const connection = safeConnect(newWorkflowInstance, {
                                                source: conn.sourceId,
                                                target: jointId,
                                                anchors: ["Bottom", "Right"],
                                                overlays: [
                                                    ["Arrow", {width: 12, length: 12, location: 1}],

                                                    // 🔶 Diamond (initial state)
                                                    ["Custom", {
                                                            id: "diamondOverlay",
                                                            location: 0.2,
                                                            create: () => createConditionDiamond({
                                                                    iconPath: path,
                                                                    text: deletedLabelStr
                                                                })
                                                        }],

                                                    // 🗑 Delete overlay (hidden initially)
                                                    ["Label", {
                                                            id: "deleteLabelOverlay",
                                                            location: 0.2,
                                                            cssClass: "connection-label label-" + deletedLabelStr + " lebelLink",
                                                            label: `
                    <span class='workflowDesignConnectionDeleteSpanClass'>${deletedLabel}</span>
                    <img src='images/iDXPUI5DeleteRow.svg'
                         class="workflowDesignConnectionDeleteImgClass"
                         onclick="deleteLinkPopup('${deletedLabel}','${conn.sourceId}','${jointId}')"/>
                `
                                                        }]
                                                ]
                                            });

                                            // ✅ Hide delete overlay initially
                                            connection.getOverlay("deleteLabelOverlay").hide();
                                        });


                                        const connection2 = safeConnect(newWorkflowInstance, {
                                            source: jointId,
                                            target: targetId,
                                            anchors: ["Left", "Bottom"],
                                            overlays: [
                                                ["Arrow", {width: 12, length: 12, location: 1}],

                                                ["Custom", {
                                                        id: "diamondOverlay",
                                                        location: 0.2,
                                                        create: () => createConditionDiamond({
                                                                iconPath: path,
                                                                tooltip: deletedLabelStr
                                                            })
                                                    }],

                                                ["Label", {
                                                        id: "deleteLabelOverlay",
                                                        location: 0.2,
                                                        cssClass: "connection-label label-" + deletedLabelStr + " lebelLink",
                                                        label: `
                <span class='workflowDesignConnectionDeleteSpanClass'>${deletedLabel}</span>
                <img src='images/iDXPUI5DeleteRow.svg'
                     class="workflowDesignConnectionDeleteImgClass"
                     onclick="deleteLinkPopup('${deletedLabel}','${jointId}','${targetId}')"/>
            `
                                                    }]
                                            ]
                                        });

// hide delete initially
                                        connection2.getOverlay("deleteLabelOverlay").hide();


                                        askLabelFlag = false;
                                    }

                                    var controlTypesStr = $("#" + targetSourceId + "_controlTypes").val();
                                    if (controlTypesStr != null && controlTypesStr != '' && controlTypesStr != undefined) {
                                        var controlTypesArr = JSON.parse(controlTypesStr);
                                        if (controlTypesArr != null && !jQuery.isEmptyObject(controlTypesArr)) {
                                            let index = controlTypesArr.indexOf(userLabel);
                                            if (index !== -1) {
                                                // controlTypesArr.splice(index, 1);
                                                // $("#" + targetSourceId + "_controlTypes").val(JSON.stringify(controlTypesArr));
                                            }
                                        }
                                    }
                                } else {
                                    $("#workflowDesignConnectionLabelErrorSpanId").text("Please select a valid label.").show();
                                    return;
                                }

                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }
                        }, {
                            text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
                            click: function () {
                                // Delete only the specific connection associated with this dialog
                                newWorkflowInstance.deleteConnection(info.connection);
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }
                        }
                    ],
                    open: function (event, ui) {
                        // Prepopulate the select with the current label if editing
                        if (isExistingConnection) {
                            const existingOverlays = info.connection.getOverlays();
                            for (const [id, overlay] of Object.entries(existingOverlays || {})) {
                                if (overlay.type === "Label") {
                                    var existingLabel = overlay.getLabel();
                                    var parser = new DOMParser();
                                    var doc = parser.parseFromString(existingLabel, 'text/html');
                                    var spanValue = doc.querySelector('.workflowDesignConnectionDeleteSpanClass').innerText;
                                    if (spanValue) {
                                        $("#workflowDesignConnectionLabelSelectId").val(spanValue);
                                    }
                                }
                            }
                        }
                    },
                    beforeClose: function (event, ui) {
                        $(this).html("");
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
            }
        }

        // Function to handle adding controls via plus icon
        // Global function — now accepts required parameters
        function addControlConfirmed(connectionId, targetSourceId, targetId) {
            const $mainDialog = $("#dialog"); // We can't rely on 'this' anymore, so use ID

            var newControl = $("#workflowDesignConnectionControlSelectId").val();
            if (newControl != null && newControl == 'Duplicate-check') {
                return;
            }

            // Basic validation
            if (!newControl || newControl === 'SELECT') {
                $("#workflowDesignConnectionControlErrorSpanId")
                        .text("Please select a valid control.").show();
                return;
            }

            const connection = newWorkflowInstance.getAllConnections()
                    .find(conn => conn.id === connectionId);
            if (!connection) {
                $("#workflowDesignConnectionControlErrorSpanId")
                        .text("Connection not found.").show();
                return;
            }




            // Check for duplicate labels
            var overlaysObj = connection.getOverlays();
            var existingLabels = Object.values(overlaysObj)
                    .filter(overlay => overlay.type === "Label");

            var isDuplicate = existingLabels.some(overlay => {
                var existingLabel = overlay.getLabel();
                var parser = new DOMParser();
                var doc = parser.parseFromString(existingLabel, 'text/html');
                var spanValue = doc.querySelector('.workflowDesignConnectionDeleteSpanClass').innerText;
                return spanValue === newControl;
            });

            if (isDuplicate) {
                $("#workflowDesignConnectionControlErrorSpanId")
                        .text("This control already exists on the connection.").show();
                return;
            }

            // Calculate location
            var baseLocation = 0.3;
            var locationIncrement = 0.4;
            let newLocation = baseLocation;
            if (existingLabels.length > 0) {
                newLocation = baseLocation + (existingLabels.length * locationIncrement);
                if (newLocation > 0.7)
                    newLocation = 0.7;
            }

            // Format label
//            var controllabel = newControl;
            var newControlStr = newControl
                    .replace(/_/g, " ").replace(/-/g, " ")
                    .split(' ')
                    .map(word => word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : '')
                    .join(' ');

            var labelStr = `
  <span class='workflowDesignConnectionDeleteSpanClass'>${newControlStr}</span>
  <img src='images/deleteflowchart.png'
       class='workflowDesignConnectionDeleteImgClass'
       style='margin-left:5px;cursor:pointer;'
        onclick='deleteLinkPopup("${newControlStr}","${targetSourceId}","${targetId}","${connectionId}")'/>
  <span class='workflowDesignConnectionAddImgClass'
       onclick='addLinkPopup("${newControlStr}","${targetSourceId}","${targetId}","${connectionId}","${newLocation}")'>+</span>`;
            // Add overlay
            try {

                const controlId = `EMAIL_${Date.now()}`;
                const overlayId = `email-${controlId}`;

                // ADD EMAIL OVERLAY
                connection.addOverlay([
                    "Custom",
                    {
                        id: overlayId,
                        location: newLocation,
                        create: function () {

                            const wrapper = document.createElement("div");
                            wrapper.className = "email-double-wrapper";
                            wrapper.style.pointerEvents = "auto";
                            wrapper.style.cursor = "pointer";
                            wrapper.title = newControlStr;

                            const outer = document.createElement("div");
                            outer.className = "email-double-outer";

                            const inner = document.createElement("div");
                            inner.className = "email-double-inner";

                            const img = document.createElement("img");
                            img.src = "images/email_icon.png";
                            img.className = "email-double-img";

                            inner.appendChild(img);
                            outer.appendChild(inner);
                            wrapper.appendChild(outer);

                            return wrapper;
                        }
                    }
                ]);

                // STORE METADATA (CRITICAL)
                if (!connection._processControls) {
                    connection._processControls = [];
                }

                connection._processControls.push({
                    controlId: controlId,
                    type: newControl,
                    overlayId: overlayId,
                    location: newLocation
                });

                // ADD DELETE ICON ONCE
                if (connection.getOverlay("delete-conn")) {
                    connection.addOverlay([
                        "Custom",
                        {
                            id: "delete-conn",
                            location: 0.93,
                            create: function () {

                                const wrapper = document.createElement("div");
                                wrapper.className = "conn-delete-wrapper";

                                const img = document.createElement("img");
                                img.src = "images/delete_icon.svg";
                                img.width = 16;
                                img.title = "Delete process";

                                img.onclick = function (e) {
                                    e.stopPropagation();
                                    openDeleteProcessPopup(connection);
                                };

                                wrapper.appendChild(img);
                                return wrapper;
                            }
                        }
                    ]);
                }

            } catch (e) {
                console.error("Error adding overlay: ", e);
                $("#workflowDesignConnectionControlErrorSpanId")
                        .text("Failed to add control.")
                        .show();
            }


            // Plus button overlay (only once)
            if (connection.getOverlay("plus")) {
                connection.addOverlay([
                    "Custom",
                    {
                        create: function () {
                            const div = document.createElement("div");
                            div.innerHTML = `<span class='plus-circle' onclick='addControlPopup("${targetSourceId}","${targetId}","${connectionId}")' title='Add new control'>+</span>`;
                            div.style.position = "relative";
                            return div;
                        },
                        location: 0.8,
                        id: "plus"
                    }
                ]);
            }

            // Update control types (optional)
            var controlTypesStr = $("#" + targetSourceId + "_controlTypes").val();
            if (controlTypesStr && controlTypesStr.trim()) {
                try {
                    var controlTypesArr = JSON.parse(controlTypesStr);
                    let index = controlTypesArr.indexOf(newControl);
                    if (index !== -1) {
                        // controlTypesArr.splice(index, 1);
                        // $("#" + targetSourceId + "_controlTypes").val(JSON.stringify(controlTypesArr));
                    }
                } catch (e) {
                    console.warn("Failed to update controlTypes", e);
                }
            }

            // Close main dialog
            $mainDialog.html("");
            $mainDialog.dialog("close");
            $mainDialog.dialog("destroy");
        }

        function openDeleteProcessPopup(connection) {

            const controls = connection._processControls || [];

            if (controls.length === 1) {
                newWorkflowInstance.deleteConnection(connection);
                return;
            }

            // Build dropdown HTML
            let bodyHtml = `
        <div style="padding:10px">
            <h4>Select process to delete</h4>
            <select id="deleteProcessSelect"
                    style="width:100%;margin-top:10px">
    `;

            controls.forEach(ctrl => {
                bodyHtml += `
            <option value="${ctrl.controlId}">
                ${ctrl.type} (position ${ctrl.location.toFixed(2)})
            </option>`;
            });

            bodyHtml += `
            </select>
        </div>
    `;

            // Modal configuration
            const modalObj = {
                title: "Delete Process",
                body: bodyHtml
            };

            const buttonArray = [
                {
                    text: "Delete",
                    click: function () {
                        confirmDeleteProcess(connection.id);
                    },
                    isCloseButton: true
                },
                {
                    text: "Cancel",
                    click: function () {
                        // nothing
                    },
                    isCloseButton: true
                }
            ];

            modalObj.buttons = buttonArray;

            // Open modal
            createModal("dataDxpSplitterValue", modalObj);
            $(".modal-dialog").addClass("opacity-animate3");
        }


        function confirmDeleteProcess(connectionId) {

            const connection = newWorkflowInstance.getAllConnections()
                    .find(c => c.id === connectionId);

            if (!connection || !connection._processControls)
                return;

            const selectedId = $("#deleteProcessSelect").val();

            const index = connection._processControls.findIndex(
                    c => c.controlId === selectedId
            );

            if (index === -1)
                return;

            const ctrl = connection._processControls[index];

            /* =========================
             REMOVE OVERLAY + DOM
             ========================= */
            const overlay = connection.getOverlay(ctrl.overlayId);

            if (overlay) {
                const el = overlay.getElement && overlay.getElement();
                if (el && el.parentNode) {
                    el.parentNode.removeChild(el);
                }
                connection.removeOverlay(ctrl.overlayId);
            }

            /* =========================
             REMOVE METADATA
             ========================= */
            connection._processControls.splice(index, 1);

            /* =========================
             REALIGN REMAINING CONTROLS
             ========================= */
            realignConnectionControls(connection);

            /* =========================
             FORCE REPAINT
             ========================= */
            newWorkflowInstance.repaint(connection.sourceId);
            newWorkflowInstance.repaint(connection.targetId);
            newWorkflowInstance.repaintEverything();
        }


        function realignConnectionControls(connection) {

            const START = 0.55;
            const GAP = 0.1;

            connection._processControls.forEach((ctrl, idx) => {
                const newLoc = START + (idx * GAP);
                ctrl.location = newLoc;

                const overlay = connection.getOverlay(ctrl.overlayId);
                if (overlay) {
                    overlay.setLocation(newLoc);
                }
            });
        }



//        function confirmDeleteProcess(connectionId) {
//
//            const connection = newWorkflowInstance.getAllConnections()
//                    .find(c => c.id === connectionId);
//
//            if (!connection || !connection._processControls)
//                return;
//
//            const selectedId = $("#deleteProcessSelect").val();
//
//            const index = connection._processControls.findIndex(
//                    c => c.controlId === selectedId
//            );
//
//            if (index === -1)
//                return;
//
//            const ctrl = connection._processControls[index];
//
//            // Remove overlay
//            connection.removeOverlay(ctrl.overlayId);
//
//            // Remove metadata
//            connection._processControls.splice(index, 1);
//
//            // Realign remaining controls
//            realignConnectionControls(connection);
//
//            closeDeletePopup();
//        }

// Main popup function
        window.addControlPopup = function (targetSourceId, targetId, connectionId) {
            if (!targetSourceId || !targetId || !connectionId) {
                console.error("Invalid parameters: targetSourceId, targetId, or connectionId is missing");
                return;
            }

            var controlTypesStr = $("#" + targetSourceId + "_controlTypes").val() || "";
            var controlTypesOptionsStr = "<option value='SELECT'>select</option>";

            try {
                var controlTypesArr = JSON.parse(controlTypesStr);
                if (Array.isArray(controlTypesArr)) {
                    $.each(controlTypesArr, function (i, val) {
                        controlTypesOptionsStr += "<option value='" + val + "'>" + val + "</option>";
                    });
                }
            } catch (e) {
                console.error("Error parsing controlTypesStr: ", e);
            }

            var askControlStr = "<div class='workflowDesignConnectionLabelClass'>" +
                    "<span class='workflowDesignConnectionLabelSpanClass'>Add control:</span>" +
                    "<select id='workflowDesignConnectionControlSelectId'>" +
                    controlTypesOptionsStr +
                    "</select>" +
                    "<span id='workflowDesignConnectionControlErrorSpanId' class='workflowDesignConnectionLabelErrorSpanClass' style='display:none;color:red'></span>" +
                    "</div>";

            $("#dialog").html("<div class='linkDialogBox'>" + askControlStr + "</div>");

            $("#dialog").dialog({
                resizable: false,
                title: 'Add Control',
                modal: true,
                width: 300,
                height: 'auto',
                fluid: true,
                buttons: [
                    {
                        text: (labelObject['Ok'] || 'Ok'),
                        click: function () {
                            var newControl = $("#workflowDesignConnectionControlSelectId").val();

                            // DUPLICATE-CHECK: Show confirmation dialog
                            if (newControl === 'DUPLICATE-CHECK') {
                                $("<div>")
                                        .html("<p>Do you want to include the Duplicate Check process</p>")
                                        .dialog({
                                            resizable: false,
                                            title: "Confirm Duplicate Check",
                                            modal: true,
                                            width: 350,
                                            height: "auto",
                                            fluid: true,
                                            open: function () {
                                                $(this).parent().css("z-index", 10001);
                                            },
                                            buttons: [
                                                {
                                                    text: "Yes",
                                                    click: function () {
                                                        $(this).dialog("close");
                                                        $("#duplicateCheckPopup").remove();



                                                        $("body").append(`
        <div id="duplicateCheckPopup" class="custom-modal">
            <div class="custom-modal-content">
                <span class="close-btn" onclick="closeDuplicateCheckPopup()">&times;</span>
                <h3>Configure Duplicate Check</h3>
                
                <div class="form-group">
                    <label for="duplicateTypeSelect">Select Duplicate Check Type:</label>
                    <select id="duplicateTypeSelect" class="form-control">
                        <option value="">Please Select </option>
                        <option value="PDR1">PDR1 – Reference & Document Validation</option>
                        <option value="PDR2">PDR2 – Characteristic Matching</option>
                        <option value="PDR3">PDR3 – Description Similarity</option>
                    </select> 
                </div>

                <div class="modal-buttons">
                    <button class="btn-cancel" onclick="closeDuplicateCheckPopup('${connectionId}','${targetSourceId}','${targetId}','${newControl}')">Apply</button>
                </div>
            </div>
        </div>
    `);

                                                        addControlConfirmed(connectionId, targetSourceId, targetId);
                                                    }
                                                },
                                                {
                                                    text: "No",
                                                    click: function () {
                                                        $(this).dialog("close");
                                                    }
                                                }
                                            ],
                                            close: function () {
                                                $(this).remove();
                                            }
                                        });
                                return;
                            }

                            // Other controls: add directly
                            addControlConfirmed(connectionId, targetSourceId, targetId);
                        }
                    },
                    {
                        text: (labelObject['Close'] || 'Close'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }
                    }
                ],
                beforeClose: function () {
                    $(this).html("");
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
        };

    });


    $(".workflowOperationsHeaderRoleDragClass").draggable({
        revert: "invalid",
        refreshPositions: true,
        cursor: 'move',
        zindex: false,
        opacity: false,
        helper: "clone"  // optional: keeps the original element in place
    });




    let approverCounter = 0;

    function getNextApproverNumber() {
        approverCounter++;
        return approverCounter;
    }

    $(".workflowDesignOperationsDataClass").droppable({
        revert: true,
        refreshPositions: true,
        cursor: 'move',
        accept: '.workflowOperationsHeaderRoleDragClass',
        drop: function (event, ui) {
            var draggable = $(ui.draggable);
            var draggableId = draggable.attr("id");
            var roleId = draggable.attr("data-roleId");
            var businessRoleId = draggable.attr("data-businessRoleId");
            var conditionId = draggable.attr("data-conditionId");
            var imageNameId = draggable.attr("data-imageNameId");
            var roleCssClass = draggable.attr("data-roleCssClass");
            var roleLabel = draggable.text().trim();

            const canvas = document.getElementById('workflowDesignOperationsDataId');
            var canvasOffset = $(canvas).offset();
            var top = ui.offset.top - canvasOffset.top + canvas.scrollTop;
            var left = ui.offset.left - canvasOffset.left + canvas.scrollLeft;

            // Check workflow type
            if (workflowType === "Sequential") {
                createAddNewNode(roleLabel, businessRoleId, roleId, conditionId, imageNameId, roleCssClass, top, left, canvas, newWorkflowInstance);
            } else if (workflowType === "Parallel") {
                // For approvers, allow multiple boxes with incremental IDs
                if (roleLabel.toLowerCase() === "approver") {
                    let number = getNextApproverNumber();
                    businessRoleId = businessRoleId + "-" + number;
                    roleLabel = "Approver" + number;
                }

                createParallelAddNewNode(roleLabel, businessRoleId, roleId, conditionId, imageNameId, roleCssClass, top, left, canvas, newWorkflowInstance);
            } else {
                alert("Please select a Workflow Type (Sequential or Parallel) before dragging roles.");
            }
        }
    });




}

function getNewFlowchartMappingData1()
{
    const nodes = [];
    const connections = [];
    newWorkflowInstance.getAllConnections().forEach(conn => {
        const anchors = [
            conn.endpoints[0].anchor.type || conn.endpoints[0].anchor.name || '',
            conn.endpoints[1].anchor.type || conn.endpoints[1].anchor.name || ''
        ];

        let stub = [];

        const connector = conn.getConnector();
        let sourceLeft = $('#' + conn.sourceId).position().left;
        let targetLeft = $('#' + conn.targetId).position().left;
        if ((anchors[0] === 'Left' && anchors[1] === 'Right') ||
                (anchors[0] === 'Right' && anchors[1] === 'Left')) {
            if (sourceLeft < targetLeft) {
                stub.push(30);
                stub.push(targetLeft - sourceLeft - 20);
            } else {
                let targetWidth = $('#' + conn.targetId).width();  // Dynamically use sourceId instead of hardcoding 'approver1'
                stub.push(sourceLeft - (targetLeft + targetWidth) - 20);
                stub.push(30);
            }
        }

        const connectorData = {
            type: connector.type || "Flowchart",
            stub: stub || []
        };

        const overlays = [];
        const overlayObjects = conn.getOverlays();
        for (const [id, overlay] of Object.entries(overlayObjects || {})) {
            if (overlay.type === "Label") {
                overlays.push(
                        ["Label",
                            {
                                label: overlay.getLabel() || "",
                                location: overlay.location || 0.5,
                                cssClass: overlay.canvas.className || ""
                            }]
                        );
            } else if (overlay.type === "Arrow") {
                overlays.push([
                    "Arrow",
                    {location: overlay.location || 1, }
                ]
                        );
            }
        }

        connections.push({
            source: "copy" + conn.sourceId,
            target: "copy" + conn.targetId,
            anchors: anchors,
            connector: connectorData,
            overlays: overlays
        });
    });

    const data = {nodes, connections};

}

var condCol = 0;
function createGetconditionSelection(label, conditionId, conditionNode, source)
{
    var id = condCol;
    var roles = {};
    var rolesStr = "";
    $(".workflowOperationsHeaderRolesClass").find("div").each(function (i, val) {
        var divId = $(this).attr("id");
        roles[$("#" + divId).attr("data-businessRoleId")] = $("#" + divId).html();
    });
    if (roles != null && !jQuery.isEmptyObject(roles))
    {
        rolesStr += "<option value='Select'>Select</option>";
        $.each(roles, function (key, val) {
            rolesStr += "<option value='" + key + "'>" + val + "</option>";
        });
    }



    $.ajax({
        type: "post",
        traditional: true,
        // dataType: 'json',
        url: "getWorkflowConditionForm",
        cache: false,
        data: {
            selectedGridId: conditionId,
            'UI5FilterGridFlag': 'N'
        },
        success: function (response) {
            if (response != null && response != '' && response != undefined) {
                response = JSON.parse(response);
                var selectedGridId = conditionId;
                $("#dialog").html("<div class ='conditionDialogBox'>" + response['result'] + "</div>"
                        + "<div class='selectConditionRoleClass'>"
                        + "<div class='feildItem'><label>Role :</label>"
                        + "<select id='selectTHENRole" + conditionNode + "' class='selectCondClass form-control'>"
                        + rolesStr
                        + "</select></div>"
                        + "</div>"
                        + "<div id='errorConditionId' style='display:none;color:red'>Please Select Role & Condition(s)</div>");
                $("#dialog").dialog({resizable: false,
                    title: 'Conditions',
                    modal: true,
                    width: 640,
                    height: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                var i = 0;
                                var paramArray = [];
                                $("#" + selectedGridId + "_FILTER_FORM_TABLE tbody tr").each(function () {
                                    var isAllow = false;
                                    var paramObj = {};
                                    var colname = $(this).attr('data-colname');
                                    var dataRange = $(this).attr('data-range');
                                    var value = $("#" + selectedGridId + "_" + colname).val();
                                    var dataColType = $(this).attr('data-coltype');
                                    if (dataColType == 'L') {
                                        value = "";
                                        var selectBoxValue = $("#" + selectedGridId + "_" + colname).jqxComboBox('getSelectedItems');
                                        if (selectBoxValue != null) {
                                            for (var j = 0; j < selectBoxValue.length; j++)
                                            {
                                                value += selectBoxValue[j].value;
                                                if (j != selectBoxValue.length - 1) {
                                                    value += ",";
                                                }
                                            }
                                        }
                                    }
                                    var minvalue = $("#" + selectedGridId + "_" + colname + "_MIN").val();
                                    var maxvalue = $("#" + selectedGridId + "_" + colname + "_MAX").val();
                                    if (value != null && value != '') {
                                        isAllow = true;
                                    } else if (dataRange != null && dataRange == 'Y'
                                            && ((minvalue != null && minvalue != '')
                                                    || (maxvalue != null && maxvalue != ''))
                                            ) {
                                        isAllow = true;
                                    }
                                    var type = $("#" + selectedGridId + "_" + colname).attr("type");
                                    if (type != null && type == 'checkbox') {
                                        var textval = "N";
                                        if ($("#" + selectedGridId + "_" + colname).is(':checked')) {
                                            isAllow = true;
                                        } else {
                                            isAllow = false;
                                        }
                                    }
                                    console.log("isAllow::::" + isAllow);
                                    if (isAllow) {
                                        paramObj.column = $.trim($(this).attr('data-colname'));
                                        if (dataColType == 'L') {
                                            var value = "";
                                            var selectBoxValue = $("#" + selectedGridId + "_" + colname).jqxComboBox('getSelectedItems');
                                            if (selectBoxValue != null) {
                                                for (var j = 0; j < selectBoxValue.length; j++)
                                                {
                                                    value += selectBoxValue[j].value;
                                                    if (j != selectBoxValue.length - 1) {
                                                        value += ",";
                                                    }
                                                }
                                            }
                                            paramObj.value = value;
                                        } else if (type != null && type == 'checkbox') {
                                            var textval = "N";
                                            if ($("#" + selectedGridId + "_" + colname).is(':checked')) {
                                                textval = "Y";
                                            } else {
                                                textval = "N";
                                            }
                                            paramObj.value = textval;
                                        } else {
                                            paramObj.value = $.trim($("#" + selectedGridId + "_" + colname).val());
                                        }
                                        paramObj.operator = $("#operator" + selectedGridId + i).val();
                                        paramObj.symbol = $.trim($("#operator" + selectedGridId + i).find('option:selected').text());
                                        paramObj.rangeFlag = dataRange;
                                        paramObj.andOrCond = $("#andorOperator" + selectedGridId + i).val();
                                        if (dataRange != null && dataRange == 'Y') {
                                            paramObj.minvalue = minvalue;
                                            paramObj.maxvalue = maxvalue;
                                        } else {
                                            paramObj.minvalue = "";
                                            paramObj.maxvalue = "";
                                        }
                                        if ((paramObj.value != null && paramObj.value != '' && paramObj.value != undefined) ||
                                                (paramObj.minvalue != '' && paramObj.minvalue != '' && paramObj.minvalue != undefined &&
                                                        paramObj.maxvalue != null && paramObj.maxvalue != '' && paramObj.maxvalue != undefined)) {
                                            paramArray.push(paramObj);
                                        }
                                    }
                                    ++i;
                                });
                                var role = $("#selectTHENRole" + conditionNode).val();
                                var roleTxt = $("#selectTHENRole" + conditionNode + " option:selected").text();
                                if (!(role != null && role != '' && role != undefined && role != 'Select'
                                        && paramArray != null && !jQuery.isEmptyObject(paramArray) && paramArray.length > 0))
                                {
                                    $("#errorConditionId").show();
                                    return;
                                }
                                var jsonObj = {};
                                jsonObj['role'] = role;
                                jsonObj['paramColArr'] = paramArray;
                                jsonObj['roleTxt'] = roleTxt;
                                jsonObj['conditionId'] = conditionId;//22-05-2025
                                jsonObj['source'] = source;
                                $("#" + label + "Node" + conditionNode + "_Filter").remove();
                                $("#conditionHiddenFieldsId").append("<input type='hidden' id='" + label + "Node" + conditionNode + "_Filter' value=''/>")
                                $("#" + label + "Node" + conditionNode + "_Filter").val(JSON.stringify(jsonObj));
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }
                        }, {
                            text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }
                        }
                    ],
                    open: function (event, ui) {
                        var jsDateItems = response['dateObjArray'];
                        for (var i = 0; i < jsDateItems.length; i++) {
                            console.log("tbid:::" + jsDateItems[i].tbid);
                            $("#" + jsDateItems[i].tbid).datepicker(
                                    {dateFormat: "dd-mm-yy",
                                        changeMonth: true,
                                        changeYear: true})
                                    .on('changeDate', function (ev) {
                                        if (jsDateItems[i].type == 'min') {
                                            console.log($("#" + jsDateItems[i].tbid).datepicker("getDate"));
                                            $("#" + jsDateItems[i].tbid).datepicker(
                                                    {
                                                        minDate: $("#" + jsDateItems[i].tbid).datepicker("getDate")
                                                    });
                                        } else {
                                        }
                                    });
                        }

                        var lovColumns = response['lovColumns'];
                        if (lovColumns != null && !jQuery.isEmptyObject(lovColumns)) {
                            for (var lovColumnanme in lovColumns) {
                                if (lovColumnanme != null && lovColumnanme != '') {
                                    var comboBoxOptions = {
                                        searchMode: 'containsignorecase',
                                        width: 315,
                                        height: 20,
                                        dropDownHeight: 100,
                                        autoComplete: true
                                    };
                                    if (lovColumns[lovColumnanme] == true) {
                                        comboBoxOptions['multiSelect'] = true;
                                        // multiSelect: true,
                                    }
                                    $("#" + lovColumnanme).jqxComboBox(comboBoxOptions);
                                    $("#" + lovColumnanme).on('select', function (event) {
                                        var args = event.args;
                                        if (args) {
                                            // index represents the item's index.                          
                                            var index = args.index;
                                            var item = args.item;
                                            if (item != null) {
                                                var label = item.label;
                                                var value = item.value;
                                                if (value != null && value != '') {
                                                    var filterGridFlagCount = $("#" + lovColumnanme + "_jqxComboBox").attr("data-filtergridflag-count"); //data-filtergridflag-count
                                                    var operatorId = "operator" + $("#" + lovColumnanme + "_jqxComboBox").attr("data-viewid") + filterGridFlagCount;
                                                    $("#" + operatorId).val("IN");
                                                }
                                            }
                                            // get item's label and value.
                                        }
                                    });
                                }
                            }
                        }
                    },
                    beforeClose: function (event, ui) {
                        $(this).html("");
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });






            }

        },
        error: function (e) {
            sessionTimeout(e);
        }// Error function in Ajax
    });




//
//    var html = "<div id='selectCondColDiv" + id + "' class='selectConMainDivClass'>"
//            + "<div class='feildItem'><label>Column Name :</label>"
//            + "<select id='selectCondColName" + id + "' class='selectCondClass'>"
//            + "<option value='Select'>Select</option>"
//            + "<option value='VERPR'>Moving Average Price</option>"
//            + "</select></div>"
//            + "<div class='feildItem'><label>Operator :</label>"
//            + "<select id='selectCondColOperator" + id + "' class='selectCondClass'>"
//            + "<option value='Select'>Select</option>"
//            + "<option value='EQUALS'>=</option>"
//            + "<option value='GREATER THAN'>></option>"
//            + "<option value='LESS THAN'><</option>"
//            + "<option value='NOT EQUALS'>!=</option>"
//            + "</select></div>"
//            + "<div class='feildItem'><label>Value :</label>"
//            + "<input type='text' id='selectCondColValue" + id + "'/></div>"
//            + "</div>";
//    $("#dialog").html("<div class ='conditionDialogBox'>" + html + "</div>"
//            + "<div class='selectConditionRoleClass'>"
//            + "<div class='feildItem'><label>Role :</label>"
//            + "<select id='selectTHENRole" + conditionNode + "' class='selectCondClass form-control'>"
//            + rolesStr
//            + "</select></div>"
//            + "</div>"
//            + "<div class='workflowconditionNewColumnButtonClass'>"
//            + "<button type='button' class='workflowconditionNewColumnClass' value='Add New Column' onclick='addCondColumn(this)'>Add New Column</button>"
//            + "</div>"
//            + "<div id='errorConditionId' style='display:none;color:red'>Please Select Role & Condition(s)</div>");
//    $("#dialog").dialog({resizable: false,
//        title: 'Create',
//        modal: true,
//        width: 600,
//        height: 270,
//        fluid: true,
//        buttons: [{
//                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
//                click: function () {
//                    var paramColArr = [];
//                    $(".conditionDialogBox").find("div.selectConMainDivClass").each(function () {
//                        var divId = $(this).attr("id");
//                        var divCount = divId.replace("selectCondColDiv", "");
//                        var colName = $("#selectCondColName" + divCount).val();
//                        var colOperator = $("#selectCondColOperator" + divCount).val();
//                        var colValue = $("#selectCondColValue" + divCount).val();
//                        if (colName != null && colName != '' && colName != undefined && colName != 'Select'
//                                && colOperator != null && colOperator != '' && colOperator != undefined && colOperator != 'Select')
//                        {
//                            var paramColObj = {};
//                            paramColObj['colName'] = colName;
//                            paramColObj['colOperator'] = colOperator;
//                            paramColObj['colValue'] = colValue;
//                            paramColArr.push(paramColObj);
//                        }
//                    });
//                    var role = $("#selectTHENRole" + conditionNode).val();
//                    var roleTxt = $("#selectTHENRole" + conditionNode + " option:selected").text();
//                    if (!(role != null && role != '' && role != undefined && role != 'Select'
//                            && paramColArr != null && !jQuery.isEmptyObject(paramColArr)))
//                    {
//                        $("#errorConditionId").show();
//                        return;
//                    }
//                    var jsonObj = {};
//                    jsonObj['role'] = role;
//                    jsonObj['paramColArr'] = paramColArr;
//                    jsonObj['roleTxt'] = roleTxt;
//                    $("#conditionHiddenFieldsId").append("<input type='hidden' id='" + label + conditionNode + "' value=''/>")
//                    $("#" + label + conditionNode).val(JSON.stringify(jsonObj));
//                    $(this).html("");
//                    $(this).dialog("close");
//                    $(this).dialog("destroy");
//                }
//            }, {
//                text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
//                click: function () {
//                    $(this).html("");
//                    $(this).dialog("close");
//                    $(this).dialog("destroy");
//                }
//            }
//        ],
//        open: function (event, ui) {
//
//        },
//        beforeClose: function (event, ui) {
//            $(this).html("");
//            $(".visionHeaderMain").css("z-index", "99999");
//            $(".visionFooterMain").css("z-index", "99999");
//        }
//    });


}

function createAddCondColumn()
{
    condCol++;
    var id = condCol;
    var html = "<div id='selectCondColDiv" + id + "' class='selectConMainDivClass'>"
            + "<div class='feildItem'><label>Column Name :</label>"
            + "<select id='selectCondColName" + id + "' class='selectCondClass'>"
            + "<option value='Select'>Select</option>"
            + "<option value='VERPR'>Moving Average Price</option>"
            + "<option value='VERPR1'>Business Criticality</option>"
            + "<option value='VERPR2'>Cost Criticality</option>"
            + "<option value='VERPR3'>HSE Criticality</option>"
            + "<option value='VERPR4'>Quality Criticality</option>"
            + "<option value='VERPR5'>Global Criticality</option>"
            + "</select></div>"
            + "<div class='feildItem'><label>Operator :</label>"
            + "<select id='selectCondColOperator" + id + "' class='selectCondClass'>"
            + "<option value='Select'>Select</option>"
            + "<option value='EQUALS'>=</option>"
            + "<option value='GREATER THAN'>></option>"
            + "<option value='LESS THAN'><</option>"
            + "<option value='NOT EQUALS'>!=</option>"
            + "</select></div>"
            + "<div class='feildItem'><label>Value :</label>"
            + "<input type='text' id='selectCondColValue" + id + "'/>"
            + "</div></div>";
    $("#selectCondColDiv" + (condCol - 1)).after(html);
}

async function createSaveWorkflowDesignConditions(label, source, conditionNode, controlType)
{
    var conditionNodeId = label + "Node" + conditionNode;
    var ifRole = "";
    var ifRoleTxt = "";
    var conditionDetailsStr = $("#" + label + "Node" + conditionNode + "_Filter").val();
    var defaultRole = $("#selectElseRole" + conditionNode).val();
    var defaultRoleTxt = $("#selectElseRole" + conditionNode + " option:selected").text();
    if (!(defaultRole != null && defaultRole != '' && defaultRole != undefined && defaultRole != 'Select'
            && conditionDetailsStr != null && conditionDetailsStr != '' && conditionDetailsStr != undefined))
    {
        $("#conditionErrorId" + conditionNode).show();
        return;
    }
    var conditionCase = "CASE "
            + "WHEN ";
    if (conditionDetailsStr != null && conditionDetailsStr != '' && conditionDetailsStr != undefined)
    {
        var conditionDetailsObj = JSON.parse(conditionDetailsStr);
        if (conditionDetailsObj != null && !jQuery.isEmptyObject(conditionDetailsObj))
        {
            var whenRole = conditionDetailsObj['role'];
            var paramColArr = conditionDetailsObj['paramColArr'];
            conditionDetailsObj['defaultRole'] = defaultRole;
            conditionDetailsObj['defaultRoleTxt'] = defaultRoleTxt;
            $("#" + label + "Node" + conditionNode + "_Filter").val(JSON.stringify(conditionDetailsObj));
            if (paramColArr != null && !jQuery.isEmptyObject(paramColArr))
            {
                await getConditionfromParamArray(paramColArr, conditionCase, whenRole, defaultRole, conditionNodeId);
            }
        }
    }

    var roleDetails = {};
    $(".workflowOperationsHeaderRolesClass").find("div").each(function (i, val) {
        var divId = $(this).attr("id");
        var details = {};
        details['roleId'] = $("#" + divId).attr("data-roleid");
        details['businessRoleId'] = $("#" + divId).attr("data-businessroleid");
        details['conditionId'] = $("#" + divId).attr("data-conditionid");
        details['imageNameId'] = $("#" + divId).attr("data-imagenameid");
        details['roleCssClass'] = $("#" + divId).attr("data-roleCssClass");
        details['label'] = $("#" + divId).html();
        roleDetails[$("#" + divId).attr("data-businessroleid")] = details;
    });
    var conditionDetails = JSON.parse(conditionDetailsStr);
    if (conditionDetails != null && !jQuery.isEmptyObject(conditionDetails))
    {
        ifRole = conditionDetails['role'];
        ifRoleTxt = conditionDetails['roleTxt'];
    }
//    newWorkflowInstance.getAllConnections().forEach(conn => {
//        if (conn.sourceId == source && conn.targetId == target)
//        {
//            newWorkflowInstance.deleteConnection(conn);
//        }
//    });

    const a = document.getElementById(source);  // Get the source element

    const aRect = a.getBoundingClientRect();
    const containerRect = document.getElementById('workflowDesignOperationsDataId').getBoundingClientRect();
    const gapX = aRect.left - containerRect.left;  // Horizontal gap from the container
    const midX = gapX + 320;
    const midY = aRect.top - containerRect.top;
    const canvas = document.getElementById('workflowDesignOperationsDataId');
    if ($("#" + conditionNodeId).length == 0)
    {
        addNewConditionNode(label + conditionCount, conditionNodeId, midY, midX, false, canvas, newWorkflowInstance);
    }
    if ($("#" + ifRole).length == 0) {
        var rolesInfo = roleDetails[ifRole];
        createAddNewNode(ifRoleTxt, ifRole, rolesInfo['roleId'], rolesInfo['conditionId'], rolesInfo['imageNameId'], rolesInfo['roleCssClass'], midY - 150, midX + 250, canvas, newWorkflowInstance);
    }
    if ($("#" + defaultRole).length == 0) {
        var rolesInfo = roleDetails[defaultRole];
        createAddNewNode(defaultRoleTxt, defaultRole, rolesInfo['roleId'], rolesInfo['conditionId'], rolesInfo['imageNameId'], rolesInfo['roleCssClass'], midY + 150, midX + 250, canvas, newWorkflowInstance);
    }
    var controlTypeStr = controlType.replace("_", " ");
    controlTypeStr = controlTypeStr.replace("-", " ");
    controlTypeStr = controlTypeStr.split(' ') // Split sentence into words
            .map(word => word.length > 0 ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word).join(' ');
    controlTypeStr = controlTypeStr.replaceAll;
    var path = "";
    if (controlType === 'RETURN') {
        path = "images/return_icon.png";
    } else if (controlType === 'SUBMIT') {
        path = "images/SubmitCheck.png";
    } else if (controlType === 'APPROVE') {
        path = "images/iDXPUI5Approvals.svg";

    } else if (controlType === 'RE-SUBMIT') {
        path = "images/SubmitCheck.png";
    } else if (controlType === 'TRANSFER TO SAP') {
        path = "images/Transfer-to-ERP-01.svg";
    }
    setTimeout(function () {
        newWorkflowInstance.connect({
            source: source,
            target: conditionNodeId,
            anchors: ["Right", "Left"],
            overlays: [
                ["Arrow", {width: 12, length: 12}],
                ["Custom", {
                        location: 0.2,
                        create: function () {
                            return createConditionDiamond({
                                iconPath: path,
                                text: controlType
                            });
                        }
                    }]
            ],
            createEndpoint: false
        });
    }, 300);

    setTimeout(function () {
        newWorkflowInstance.connect({
            source: conditionNodeId,
            target: ifRole,
            anchors: ["Top", "Left"],
            overlays: [
                ["Arrow", {width: 12, length: 12}],
                ["Custom", {
                        location: 0.3,
                        create: function () {
                            return createConditionDiamond({
                                text: "True",
                                tooltip: "Condition = True",
                                value: true
                            });
                        }
                    }]
            ],
            createEndpoint: false
        });

        newWorkflowInstance.connect({
            source: conditionNodeId,
            target: defaultRole,
            anchors: ["Bottom", "Left"],
            overlays: [
                ["Arrow", {width: 12, length: 12}],
                ["Custom", {
                        location: 0.3,
                        create: function () {
                            return createConditionDiamond({
                                text: "False",
                                tooltip: "Condition = True",
                                value: false   // 👈 IMPORTANT
                            });
                        }
                    }]
            ],
            createEndpoint: false
        });

        $('#workflowConditionMainBoxDiv').remove();
    }, 500);
    conditionCount++;
}

function createConditionDiamond( { iconPath, text, tooltip, value}) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("custom-overlay");

    // ✅ STORE DATA
    if (iconPath == 'undefuned') {
        wrapper.dataset.label = text;
        wrapper.dataset.path = text;
    } else {
        wrapper.dataset.label = text;
        wrapper.dataset.path = iconPath;
    }

    wrapper.dataset.show = "true";
    wrapper.style.width = "40px";
    wrapper.style.height = "40px";
    wrapper.style.position = "relative";
    wrapper.style.pointerEvents = "auto";
    wrapper.title = tooltip || "";
    // Diamond shape
    const diamond = document.createElement("div");
    diamond.style.width = "34px";
    diamond.style.height = "34px";
    diamond.style.background = "#fff";
    diamond.style.border = "2px solid #000";
    diamond.style.transform = "rotate(45deg)";
    diamond.style.position = "absolute";
    diamond.style.top = "50%";
    diamond.style.left = "50%";
    diamond.style.translate = "-50% -50%";
    diamond.style.display = "flex";
    diamond.style.alignItems = "center";
    diamond.style.justifyContent = "center";
    diamond.style.boxSizing = "border-box";

    if (value === true) {
        diamond.style.border = "2px solid #28a745";
        diamond.style.background = "#e6f4ea";
    } else if (value === false) {
        diamond.style.border = "2px solid #dc3545";
        diamond.style.background = "#fdecea";
    }
    if (iconPath) {
        // âœ… ICON MODE
        const img = document.createElement("img");
        img.src = iconPath;
        img.style.width = "32px";
        img.style.height = "32px";
        img.style.transform = "rotate(-45deg)";
        img.style.pointerEvents = "none";
        diamond.appendChild(img);

    } else if (text) {
        // âœ… TEXT MODE (True / False)
        const span = document.createElement("span");
        span.innerText = text;
        span.style.fontSize = "10px";
        span.style.fontWeight = "600";
        span.style.color = "#000";
        span.style.transform = "rotate(-45deg)";
        span.style.pointerEvents = "none";
        diamond.appendChild(span);
    }

    wrapper.appendChild(diamond);
    return wrapper;
}


function addNewConditionNode(label, id, top, left, isCondition = false, canvas, instance) {
    const boxClass = isCondition ? "condition" : "operation";
    const box = document.createElement("div");
    box.className = "node rect-node " + boxClass + " iDXPWorkflowDesignConditionRoleClass";
    box.id = id;
    box.style.top = top + "px";
    box.style.left = left + "px";
    box.innerHTML = `<div class="label">${label}</div>`;
    canvas.append(box);
    createMakeDynamicAddBoxInteractable(box, instance);

}
function addPreviewConditionNode(label, id, top, left, isCondition = false, canvas, instance) {
    const boxClass = isCondition ? "condition" : "operation";
    const box = document.createElement("div");
    box.className = "node rect-node " + boxClass + " iDXPWorkflowDesignConditionRoleClass";
    box.id = id;
    box.style.top = top + "px";
    box.style.left = left + "px";
    box.innerHTML = `<div class="label">${label}</div>`;
    canvas.append(box);
    makeDynamicPreviewBoxInteractable(box, instance);

}

function treeLinkActivateFn()
{
    var message = "";
    if (workflowSaveFlag)
    {
        message = "The new workflow verison " + workflowSaveCnt + " with conditions has been activated. From now on, the process will run according to the new workflow conditions. The changes are now in action, and you can see the updates as per the new workflow.";
    } else {
        message = "Please save workflow before activate."
    }
    $("#dialog").html("<div class ='linkDialogBox'>" + message + "</div>");
    $("#dialog").dialog({resizable: false,
        title: 'Action',
        modal: true,
        width: 300,
        height: 200,
        fluid: true,
        buttons: [
            {
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }, {
                text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }
        ],
        open: function (event, ui) {

        },
        beforeClose: function (event, ui) {
            $(this).html("");
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}

function workflowMinimizeClick(id) {
    if ($("#" + id).hasClass("workflowMaxSize")) {
        $("#" + id).removeClass("workflowMaxSize")
        $("#worflowDesignOperationsId").removeClass("parentMaximize");
//        $("#workflowDesignResourceDataId").show();
//        $("#worflowDesignOperationsHeaderId").show();
//        $(".worflowDesignOperationsMainDataClass").css("width", "96%");
//        $("#worflowDesignOperationsId").css("height", "calc(100vh - 130px)");
        workflowInstance.repaintEverything();
    }
}
function workflowMaxmizeClick(id) {
    $("#" + id).addClass("workflowMaxSize");
    $("#worflowDesignOperationsId").addClass("parentMaximize");
//    $("#workflowDesignResourceDataId").hide();
//    $("#worflowDesignOperationsHeaderId").hide();
//    $(".worflowDesignOperationsMainDataClass").css("width", "100%");
//    $("#worflowDesignOperationsId").css("height", "calc(100vh - 55px)");
    workflowInstance.repaintEverything();
}
window.deleteconnectionLink = function (deletelabel, deletesourceId, deletetargetId, location) {
    try {
        console.log("[DEBUG] deleteLinkPopup", deletelabel, deletesourceId, deletetargetId, location);

        const wanted = deletelabel.trim().toLowerCase();

        // 1️⃣ FIND EXACT CONNECTION (NOT all connections)
        const conn = newWorkflowInstance.getAllConnections()
                .find(c => c.sourceId === deletesourceId && c.targetId === deletetargetId);

        if (!conn) {
            console.warn("[WARN] No matching connection for", deletesourceId, "->", deletetargetId);
            return;
        }

        // 2️⃣ FIND OVERLAYS OF THIS CONNECTION ONLY
        const overlays = conn.getOverlays();

        let overlayDeleted = false;

        for (const key in overlays) {
            const ov = overlays[key];
            if (!ov || ov.type !== "Label")
                continue;

            // Extract label text from <span>
            let actual = "";
            try {
                const html = ov.getLabel();
                const doc = new DOMParser().parseFromString(html, "text/html");
                const span = doc.querySelector(".workflowDesignConnectionDeleteSpanClass");
                if (span)
                    actual = span.textContent.trim().toLowerCase();
            } catch (e) {
            }

            // Delete only this clicked label
            if (actual === wanted) {
                console.log("[INFO] Removing overlay:", ov.id);
                conn.removeOverlay(ov.id);
                overlayDeleted = true;
                break;
            }
        }

        // If no matching overlay → exit
        if (!overlayDeleted) {
            console.warn("[WARN] No overlay found with", deletelabel);
            return;
        }

        // 3️⃣ AFTER DELETING → CHECK THE REMAINING LABEL COUNT
        const remaining = Object.values(conn.getOverlays())
                .filter(ov => ov.type === "Label");

        console.log("[DEBUG] Remaining labels:", remaining.length);

        // A) If SUBMIT was deleted → delete entire connection
        if (wanted === "submit") {
            console.log("[INFO] Submit deleted → removing full connection");
            newWorkflowInstance.deleteConnection(conn);
            if (typeof autoAdjustNodes === "function")
                autoAdjustNodes();
            return;
        }

        // B) If no labels remain → delete entire connection
        if (remaining.length === 0) {
            console.log("[INFO] No labels left → deleting connection");
            newWorkflowInstance.deleteConnection(conn);
            if (typeof autoAdjustNodes === "function")
                autoAdjustNodes();
            return;
        }

        // C) Otherwise just repaint
        if (typeof autoAdjustNodes === "function")
            autoAdjustNodes();

    } catch (err) {
        console.error("[ERROR deleteLinkPopup]:", err);
    }
};
window.deleteLinkPopup = function (deletelabel, deletesourceId, deletetargetId, location) {
    try {
        console.log("[DEBUG] deleteLinkPopup", deletelabel, deletesourceId, deletetargetId, location);

        const wanted = deletelabel.trim().toLowerCase();

        // 1️⃣ FIND EXACT CONNECTION (NOT all connections)
        const conn = newWorkflowInstance.getAllConnections()
                .find(c => c.sourceId === deletesourceId && c.targetId === deletetargetId);

        if (!conn) {
            console.warn("[WARN] No matching connection for", deletesourceId, "->", deletetargetId);
            return;
        }

        // 2️⃣ FIND OVERLAYS OF THIS CONNECTION ONLY
        const overlays = conn.getOverlays();

        let overlayDeleted = false;

        for (const key in overlays) {
            const ov = overlays[key];
            if (!ov || ov.type !== "Label")
                continue;

            // Extract label text from <span>
            let actual = "";
            try {
                const html = ov.getLabel();
                const doc = new DOMParser().parseFromString(html, "text/html");
                const span = doc.querySelector(".workflowDesignConnectionDeleteSpanClass");
                if (span)
                    actual = span.textContent.trim().toLowerCase();
            } catch (e) {
            }

            // Delete only this clicked label
            if (actual === wanted) {
                console.log("[INFO] Removing overlay:", ov.id);
                conn.removeOverlay(ov.id);
                overlayDeleted = true;
                break;
            }
        }

        // If no matching overlay → exit
        if (!overlayDeleted) {
            console.warn("[WARN] No overlay found with", deletelabel);
            return;
        }

        // 3️⃣ AFTER DELETING → CHECK THE REMAINING LABEL COUNT
        const remaining = Object.values(conn.getOverlays())
                .filter(ov => ov.type === "Label");

        console.log("[DEBUG] Remaining labels:", remaining.length);

        // A) If SUBMIT was deleted → delete entire connection
        if (wanted === "submit") {
            console.log("[INFO] Submit deleted → removing full connection");
            newWorkflowInstance.deleteConnection(conn);
            if (typeof autoAdjustNodes === "function")
                autoAdjustNodes();
            return;
        }

        // B) If no labels remain → delete entire connection
        if (remaining.length === 0) {
            console.log("[INFO] No labels left → deleting connection");
            newWorkflowInstance.deleteConnection(conn);
            if (typeof autoAdjustNodes === "function")
                autoAdjustNodes();
            return;
        }

        // C) Otherwise just repaint
        if (typeof autoAdjustNodes === "function")
            autoAdjustNodes();

    } catch (err) {
        console.error("[ERROR deleteLinkPopup]:", err);
    }
};

// Function to auto-adjust nodes after deletion
function autoAdjustNodes() {
    try {
        console.log("[DEBUG] Auto-adjusting nodes...");

        // Option 1: Use jsPlumb's revalidate to refresh the layout
        newWorkflowInstance.revalidate(document.getElementById("workflowDesignOperationsDataId"));
        console.log("[INFO] jsPlumb layout revalidated");

        // Option 2: Custom repositioning logic (uncomment if needed)
        /*
         const container = $("#workflowDesignOperationsDataId");
         const nodes = container.find(".workflowDesignNode"); // Adjust selector to match your node class
         let xOffset = 50;
         let yOffset = 50;
         nodes.each(function (index) {
         $(this).css({
         left: xOffset + (index % 5) * 150, // Arrange in a grid, adjust as needed
         top: yOffset + Math.floor(index / 5) * 100
         });
         });
         newWorkflowInstance.repaintEverything();
         console.log("[INFO] Nodes repositioned and layout repainted");
         */
    } catch (err) {
        console.error("[ERROR] autoAdjustNodes:", err);
    }
}
function createJointNode(id, instance, canvasId) {
    const jointDiv = document.createElement('div');
    jointDiv.id = id;
    jointDiv.className = 'node empty-circle-node';
    jointDiv.innerText = '+';
    document.getElementById(canvasId).appendChild(jointDiv);

    // Position it (you might want to calculate this better)
    jointDiv.style.position = 'absolute';
    jointDiv.style.left = '300px';
    jointDiv.style.top = '600px';

    // Make it a jsPlumb endpoint
    instance.draggable(jointDiv);
    instance.makeSource(jointDiv, {anchor: "Continuous"});
    instance.makeTarget(jointDiv, {anchor: "Continuous"});
}


function previewJointNode(label, id, top, left, canvasId, instance) {
    const jointDiv = document.createElement('div');
    jointDiv.id = id;
    jointDiv.className = 'node empty-circle-node';
    jointDiv.innerText = label;
    document.getElementById(canvasId).appendChild(jointDiv);

    // Position it (you might want to calculate this better)
    jointDiv.style.position = 'absolute';
    jointDiv.style.left = left + "px";
    jointDiv.style.top = top + "px";

    // Make it a jsPlumb endpoint
    instance.draggable(jointDiv);
    instance.makeSource(jointDiv, {anchor: "Continuous"});
    instance.makeTarget(jointDiv, {anchor: "Continuous"});
}

function getNewFlowchartMappingData2() {
    const allConnections = newWorkflowInstance.getAllConnections();
    const result = [];

    const conditionMap = {};
    const joinConnections = {};

    allConnections.forEach(conn => {
        const sourceId = conn.sourceId;
        const targetId = conn.targetId;

        const overlay = Object.values(conn.getOverlays() || {}).find(o => o.type === "Label");
        var label = overlay ? overlay.getLabel() : "";
        var parser = new DOMParser();
        var doc = parser.parseFromString(label, 'text/html');
        // Get the value inside the <span> element
        var spanValue = doc.querySelector('.workflowDesignConnectionDeleteSpanClass').innerText;
        if (spanValue != null && spanValue != '' && spanValue != undefined)
        {
            label = spanValue;
        }
        console.log(spanValue);
        const isConditionSource = sourceId.includes("condition");
        const isConditionTarget = targetId.includes("condition");
        const isJoinSource = sourceId.includes("join");
        const isJoinTarget = targetId.includes("join");

        switch (true) {
            // 1. Normal connection
            case !isConditionSource && !isConditionTarget && !isJoinSource && !isJoinTarget:
                result.push({type: "normal", sourceId, targetId, label});
                break;

                // 2. Source → condition node
            case isConditionTarget:
                conditionMap[targetId] = conditionMap[targetId] || {
                    type: "condition",
                    sourceId,
                    conditionNode: targetId,
                    label,
                    branches: []  // new structure
                };
                break;

                // 3. Condition → any labeled branch
            case isConditionSource:
                const cond = conditionMap[sourceId] || {
                    type: "condition",
                    sourceId: null,
                    conditionNode: sourceId,
                    label: "",
                    branches: []
                };

                cond.branches.push({
                    label: label || "default",
                    targetId
                });

                conditionMap[sourceId] = cond;
                break;

                // 4. Source → join node
            case isJoinTarget:
                result.push({
                    type: "join",
                    sourceId,
                    joinNode: targetId,
                    label,
                    targets: []
                });
                break;

                // 5. Join → target
            case isJoinSource:
                if (!joinConnections[sourceId]) {
                    joinConnections[sourceId] = [];
                }
                joinConnections[sourceId].push({targetId});
                break;
        }
    });

    // Add all condition nodes to result
    Object.values(conditionMap).forEach(cond => result.push(cond));

    // Merge join connections
    result.forEach(obj => {
        if (obj.type === "join" && joinConnections[obj.joinNode]) {
            //obj.targetIds = joinConnections[obj.joinNode].map(j => j.targetId).join(", ");
            obj.targetId = [...new Set(joinConnections[obj.joinNode].map(j => j.targetId))].join(", ");
            delete obj.targets;
        }
    });

    console.log(result);
}


function getNewFlowchartCreatingData() {
    var domain = $("#visionWorkflowDesinDomainSelectId").val();
    var source = $("#visionWorkflowDesinSourceSelectId").val();

    const allConnections = newWorkflowInstance.getAllConnections();
    const result = [];
    const conditionMap = {};
    const joinConnections = {}; // Join node to multiple targets


    var workflowVersion = $("#EditedWirdkflowId").val();
//        if(workflowVersion){
//            result.push({"version":workflowVersion});
//        } 
    allConnections.forEach(conn => {
        const sourceId = conn.sourceId;
        const targetId = conn.targetId;

        var businessRoleSourceId = $("#" + sourceId).find("div").attr("data-businessroleid");
        var businessRoleTargetId = $("#" + targetId).find("div").attr("data-businessroleid");

        // ✅ Get ALL label overlays (instead of one)
        const overlays = Object.values(conn.getOverlays() || {});
        let labelValues = [];



        overlays.forEach(o => {
//            if (o.type === "Label") {
//                var rawLabel = o.getLabel();
//                if (rawLabel) {
//                    var parser = new DOMParser();
//                    var doc = parser.parseFromString(rawLabel, 'text/html');
//                    var spanValue = doc.querySelector('.workflowDesignConnectionDeleteSpanClass').innerText.trim();
//                    if (spanValue) {
//                        labelValues.push(spanValue);
//                    }
//                }
//            } 
           if(o.type==='Custom'){
                const el = o.getElement() || {};
                const id = el.id || "";
                const label = el.dataset.label;
                if (label) {
                        labelValues.push(label);
                    }
                }
        });

        // Combine labels into single string (for backward compatibility)
        var label = labelValues.join(" | ");

        const isConditionSource = sourceId.includes("Condition");
        const isConditionTarget = targetId.includes("Condition");
        const isJoinSource = sourceId.indexOf("join") > -1;
        const isJoinTarget = targetId.indexOf("join") > -1;
       
        // 1️⃣ Source → condition node
        if (isConditionTarget) {
            conditionMap[targetId] = conditionMap[targetId] || {
                type: "condition",
                sourceId,
                conditionNode: targetId,
                labels: label,
                trueTargetId: null,
                trueLabel: null,
                falseTargetId: null,
                falseLabel: null,
                businessRoleSourceId: businessRoleSourceId,
            };
        }

        // 2️⃣ Condition → true/ false branches
        else if (isConditionSource) {
            const cond = conditionMap[sourceId] || {
                type: "condition",
                sourceId: null,
                conditionNode: sourceId,
                label: labelValues,
                trueTargetId: null,
                trueLabel: null,
                falseTargetId: null,
                falseLabel: null
            };

            if (label.toLowerCase().includes("true")) {
                cond.trueTargetId = targetId;
                cond.trueLabel = label;
                cond.businessRoleTrueTargetId = businessRoleTargetId;
            } else if (label.toLowerCase().includes("false")) {
                cond.falseTargetId = targetId;
                cond.falseLabel = label;
                cond.businessRoleFalseTargetId = businessRoleTargetId;
            }
            cond['condition'] = $("#" + sourceId + "_FilterVal").val();
            conditionMap[sourceId] = cond;
        }

        // 3️⃣ Source → join
        else if (isJoinTarget) {
            result.push({
                type: "join",
                sourceId,
                joinNode: targetId,
                labels: labelValues,
                label,
                businessRoleSourceId,
                businessRoleTargetId,
                targets: []
            });
        }

        // 4️⃣ Join → target (store multiple targets)
        else if (isJoinSource) {
            if (!joinConnections[sourceId])
                joinConnections[sourceId] = [];
            if (!joinConnections[sourceId + "businessTargetId"])
                joinConnections[sourceId + "businessTargetId"] = [];

            joinConnections[sourceId].push({targetId});
            joinConnections[sourceId + "businessTargetId"].push({businessRoleTargetId});
        }

        // 5️⃣ Normal connections
        else {
            result.push({
                type: "normal",
                sourceId,
                targetId,
                label: labelValues, // ✅ now array of all span texts
                businessRoleSourceId,
                businessRoleTargetId
            });
        }
    });

    // Add conditions
    Object.values(conditionMap).forEach(cond => result.push(cond));

    // Merge join targets into their corresponding join entries
    result.forEach(obj => {
        if (obj.type === "join" && joinConnections[obj.joinNode]) {
            //obj.targetIds = joinConnections[obj.joinNode].map(j => j.targetId).join(", ");
            obj.targetId = [...new Set(joinConnections[obj.joinNode].map(j => j.targetId))].join(", ");
            obj.businessRoleTargetId = [...new Set(joinConnections[obj.joinNode + "businessTargetId"].map(j => j.businessRoleTargetId))].join(", ");
            delete obj.targets;

        }
    });

    const connectionData = allConnections.map(conn => {
        // Initialize an array to store all overlays
        const overlays = [];

        // Get all overlays of the connection
        const overlayObjects = conn.getOverlays();

        // Loop through each overlay and capture the type, label, location, and other properties
        let labelIndex = 0;
        const labelSpacing = 0.15; // spacing for multiple labels
        for (const overlay of Object.values(overlayObjects || {})) {
            if (overlay.type === "Label") {
                const adjustedLocation = 0.4 + (labelIndex * labelSpacing);
                labelIndex++;

                overlays.push([
                    "Label",
                    {
                        label: overlay.getLabel() || "",
                        location: adjustedLocation > 0.9 ? 0.9 : adjustedLocation,
                        cssClass: overlay.canvas.className || ""
                    }
                ]);
            } else if (overlay.type === "Arrow") {
                overlays.push([
                    "Arrow",
                    {
                        width: 12,
                        length: 12,
                        location: overlay.location || 1
                    }
                ]);
            }
//            else if (overlay.type === "Custom") {
//                const el = overlay.getElement();
//                const label = el.dataset.label;
//                const path = el.dataset.path;
//                const show = el.dataset.show;
//                overlays.push(["Custom", {
//                        id: overlay.id,
//                        location: overlay.loc,
//                        role: overlay.id.startsWith("plus-") ? "ADD"
//                                : overlay.id === "delete-conn" ? "DELETE"
//                                : overlay.id.startsWith("decision-") ? "DECISION"
//                                : "UNKNOWN",
//                        label: label,
//                        path: path,
//                        show: show,
//                        text: label
//                    }
//                ]);
//
//            }
            else if (overlay.type === "Custom") {

                const el = overlay.getElement() || {};
                const id = overlay.id || "";

                const role =
                        id.startsWith("plus-") ? "ADD" :
                        id === "delete-conn" ? "DELETE" :
                        id.startsWith("decision-") ? "DECISION" :
                        "UNKNOWN";

                const overlayObj = {
                    id: id,
                    location: overlay.loc,
                    role: role,
                    label: el.dataset.label || "",
                    path: el.dataset.path || el.path,
                    show: el.dataset.show || "true",
                    title: el.title || ""
                };

                // ✅ SAVE ADD (+) PARAMETERS
                if (role === "ADD") {

                    const wrapperEl = overlay.getElement();
                    const plusEl = wrapperEl
                            ? wrapperEl.querySelector(".plus-circle")
                            : null;
                    if (plusEl != null) {
                        overlayObj.targetSourceId = plusEl.dataset.targetSourceId || "";
                        overlayObj.targetId = plusEl.dataset.targetId || "";
                        overlayObj.connectionId = plusEl.dataset.connectionId || conn.id;
                        overlayObj.offsetY = plusEl.dataset.offsetY || "";
                    }


                }

                if (role === "DELETE") {

                    const wrapperEl = overlay.getElement();
                    const delEl = wrapperEl
                            ? wrapperEl.querySelector(".conn-delete-icon")
                            : null;

                    overlayObj.connectionId =
                            delEl.dataset.connectionId || conn.id;
                    overlayObj.DeleteLabel =
                            delEl.dataset.DeleteLabel || "";
                }

                overlays.push(["Custom", overlayObj]);
            }


        }

        // Return the connection data, including the overlays
        return {
            source: conn.sourceId,
            target: conn.targetId,
            anchors: [
                conn.endpoints[0].anchor.type || conn.endpoints[0].anchor.name || '',
                conn.endpoints[1].anchor.type || conn.endpoints[1].anchor.name || ''
            ],
            overlays: overlays  // Store the collected overlays here
        };
    });
    var conditions = {};
    const parent = document.getElementById("workflowDesignOperationsDataId");
    const nodes = Array.from(parent.querySelectorAll(".node")).map(node => {
        var nodeId = node.id;
        if (nodeId != null && nodeId != '' && nodeId != undefined && nodeId.indexOf("ConditionNode") > -1)
        {
            var divLabel = $("#" + nodeId).find("div.label").html();
            conditions[nodeId + '_Filter'] = $("#" + nodeId + "_Filter").val();
            conditions[nodeId + '_FilterVal'] = $("#" + nodeId + "_FilterVal").val();
            return{
                roleId: nodeId,
                roleLabel: divLabel,
                position: {
                    top: node.style.top,
                    left: node.style.left
                }
            }
        } else if (nodeId != null && nodeId != '' && nodeId != undefined && nodeId.indexOf("joint-") > -1)
        {
            var divLabel = $("#" + nodeId).html();
            return{
                roleId: nodeId,
                roleLabel: divLabel,
                position: {
                    top: node.style.top,
                    left: node.style.left
                }
            }
        } else {
            var roleId = $("#" + nodeId).find("div.label").attr("data-roleid");
            var businessRoleId = $("#" + nodeId).find("div.label").attr("data-businessroleid");
            var roleCssClass = $("#" + nodeId).find("div.label").attr("data-roleCssClass");
            var conditionId = $("#" + nodeId).find("div.label").attr("data-conditionid");
            var divLabel = $("#" + nodeId).find("div.label");
            var label = divLabel.find("span.workflowDesignRolesLabelClass").text();
            var spanimage = divLabel.find("span.workflowDesignRolesSpanImageClass");
            var imgSrc = spanimage.find("img").attr('src');
            return{
                roleId: roleId,
                businessRoleId: businessRoleId,
                conditionId: conditionId,
                roleLabel: label,
                imageNameId: imgSrc,
                roleCssClass: roleCssClass,
                position: {
                    top: node.style.top,
                    left: node.style.left
                }
            }
        }

    });

    // Combine nodes and connections
    const saveData = {
        nodes: nodes,
        connections: connectionData,
        conditions: conditions
    };

    console.log(result);
    if (result != null && !jQuery.isEmptyObject(result) && result.length > 0 && saveData != null && !jQuery.isEmptyObject(saveData)
            && saveData['nodes'] != null && !jQuery.isEmptyObject(saveData['nodes'])
            && saveData['connections'] != null && !jQuery.isEmptyObject(saveData['connections'])
            ) {
        $.ajax({
            datatype: "json",
            type: "POST",
            url: 'getWorkflowName',
            data: {
                'domain': domain,
                'source': source,
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                if (response != null && !jQuery.isEmptyObject(response)) {
                    var selectBoxStr = response['selectBoxStr'];
                    var textAreaStr = "<textarea id='workflowDesignNewTextId' class='workflowDesignNewTextClass' style='display:none'></textarea>";
                    $("#dialog").html("<div class ='selectDialogBox'>" + selectBoxStr + textAreaStr + ""
                            + "<span id='workflowNameErrorSpanId' class='workflowNameErrorSpanClass' style='display:none;color:red'>Please Provide Workflow Name</span>"
                            + "</div>");
                    $("#dialog").dialog({resizable: false,
                        title: 'Save Workflow',
                        modal: true,
                        width: 300,
                        height: 'auto',
                        fluid: true,
                        buttons: [
                            {
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    $("#workflowNameErrorSpanId").hide();
                                    var workflowId = $("#workflowDesignNameId").val();
                                    var workflowName = $("#workflowDesignNameId option:selected").text();
                                    if (workflowId != null && workflowId != '' && workflowId != undefined && workflowId == 'SELECT')
                                    {
                                        $("#workflowNameErrorSpanId").text("Please Provide Workflow Name");
                                        $("#workflowNameErrorSpanId").show();
                                        return;
                                    } else if (workflowId != null && workflowId != '' && workflowId != undefined && workflowId == 'NEW') {
                                        workflowName = $("#workflowDesignNewTextId").val();
                                        if (!(workflowName != null && workflowName != '' && workflowName != undefined))
                                        {
                                            $("#workflowNameErrorSpanId").text("Please Provide Workflow Name");
                                            $("#workflowNameErrorSpanId").show();
                                            return;
                                        }
                                        workflowId = Array.from({length: 16}, () => Math.floor(Math.random() * 10)).join('');
                                    }
                                    if (!(result != null && !jQuery.isEmptyObject(result)))
                                    {
                                        $("#workflowNameErrorSpanId").text("Please configure workflow to save & activate");
                                        $("#workflowNameErrorSpanId").show();
                                        return;
                                    }

                                    $.ajax({
                                        datatype: "json",
                                        type: "POST",
                                        url: 'saveWorkflowStatusDetails',
                                        data: {
                                            'mappingObj': JSON.stringify(result),
                                            'workflowId': workflowId,
                                            'workflowName': workflowName,
                                            'domain': domain,
                                            'source': source,
                                            'workflowVersion': workflowVersion,
                                            'rawData': JSON.stringify(saveData)
                                        },
                                        traditional: true,
                                        cache: false,
                                        success: function (response) {
                                            stopLoader();
                                            if (response != null && !jQuery.isEmptyObject(response)) {
                                                var message = response['message'];
                                                $("#dialog").html("<div class ='linkDialogBox'>" + message + "</div>");
                                                $("#dialog").dialog({resizable: false,
                                                    title: 'Message',
                                                    modal: true,
                                                    width: 300,
                                                    height: 150,
                                                    fluid: true,
                                                    buttons: [
                                                        {
                                                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                                            click: function () {
                                                                $("#workflowDesignOperationsDataId").html("");
                                                                $("#conditionHiddenFieldsId").html("");
                                                                newWorkflowInstance = jsPlumb.getInstance({
                                                                    Container: "workflowDesignOperationsDataId",
                                                                    Connector: ["Flowchart", {cornerRadius: 10, stub: [40, 60]}],
                                                                    Endpoint: "Dot",
                                                                    EndpointStyle: {fill: "#456", radius: 5},
                                                                    PaintStyle: {stroke: "#0b4a99", strokeWidth: 1},
                                                                    HoverPaintStyle: {stroke: "#007BFF", strokeWidth: 1.5},
                                                                });
                                                                $(this).html("");
                                                                $(this).dialog("close");
                                                                $(this).dialog("destroy");
                                                            }
                                                        }
                                                    ],
                                                    open: function (event, ui) {

                                                    },
                                                    beforeClose: function (event, ui) {
                                                        $(this).html("");
                                                        $(".visionHeaderMain").css("z-index", "99999");
                                                        $(".visionFooterMain").css("z-index", "99999");
                                                    }
                                                });
                                            }

                                        }, error: function (e) {
                                            console.log("The Error Message is:::" + e.message);
                                            stopLoader();
                                            sessionTimeout(e);
                                        }
                                    });

                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                }
                            }, {
                                text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                }
                            }
                        ],
                        open: function (event, ui) {

                        },
                        beforeClose: function (event, ui) {
                            $(this).html("");
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });
                }

            }, error: function (e) {
                console.log("The Error Message is:::" + e.message);
                stopLoader();
                sessionTimeout(e);
            }
        });

    } else {
        showWorkflowMsg("Message", "Please configure the workflow before save");
    }
}

//
//function getNewFlowchartCreatingData() {
//    var domain = $("#visionWorkflowDesinDomainSelectId").val();
//    var source = $("#visionWorkflowDesinSourceSelectId").val();
//
//    const allConnections = newWorkflowInstance.getAllConnections();
//    const result = [];
//
//    const conditionMap = {};
//    const joinConnections = {}; // Join node to multiple targets
//
//    allConnections.forEach(conn => {
//        const sourceId = conn.sourceId;
//        const targetId = conn.targetId;
//        var businessRoleSourceId = $("#" + sourceId).find("div").attr("data-businessroleid");
//        var businessRoleTargetId = $("#" + targetId).find("div").attr("data-businessroleid");
//        // console.log("source Id:::" + sourceId + "    TargetId:::" + targetId);
//
//        const overlay = Object.values(conn.getOverlays() || {}).find(o => o.type === "Label");
//        var label = overlay ? overlay.getLabel() : "";
//        var parser = new DOMParser();
//        var doc = parser.parseFromString(label, 'text/html');
//        // Get the value inside the <span> element
//        var spanValue = doc.querySelector('.workflowDesignConnectionDeleteSpanClass').innerText;
//        if (spanValue != null && spanValue != '' && spanValue != undefined)
//        {
//            label = spanValue;
//        }
//        console.log(spanValue);
//        const isConditionSource = sourceId.includes("Condition");
//        const isConditionTarget = targetId.includes("Condition");
//        const isJoinSource = sourceId.indexOf("join") > -1;
//        const isJoinTarget = targetId.indexOf("join") > -1;
//
//        // 1. Source → condition node
//        if (isConditionTarget) {
//            conditionMap[targetId] = conditionMap[targetId] || {
//                type: "condition",
//                sourceId,
//                conditionNode: targetId,
//                label,
//                trueTargetId: null,
//                trueLabel: null,
//                falseTargetId: null,
//                falseLabel: null,
//                businessRoleSourceId: businessRoleSourceId,
//
//            };
//        }
//
//        // 2. Condition → true / false branches
//        else if (isConditionSource) {
//            const cond = conditionMap[sourceId] || {
//                type: "condition",
//                sourceId: null,
//                conditionNode: sourceId,
//                label: "",
//                trueTargetId: null,
//                trueLabel: null,
//                falseTargetId: null,
//                falseLabel: null
//
//            };
//
//            if (label.toLowerCase() === "true") {
//                cond.trueTargetId = targetId;
//                cond.trueLabel = label;
//                cond.businessRoleTrueTargetId = businessRoleTargetId;
//            } else if (label.toLowerCase() === "false") {
//                cond.falseTargetId = targetId;
//                cond.falseLabel = label;
//                cond.businessRoleFalseTargetId = businessRoleTargetId;
//            }
//            cond['condition'] = $("#" + sourceId + "_FilterVal").val();
//            conditionMap[sourceId] = cond;
//        }
//
//        // 3. Source → join
//        else if (isJoinTarget) {
//            result.push({
//                type: "join",
//                sourceId,
//                joinNode: targetId,
//                label,
//                businessRoleSourceId: businessRoleSourceId,
//                businessRoleTargetId: businessRoleTargetId,
//                targets: [] // Will fill later if needed
//            });
//        }
//
//        // 4. Join → target (store multiple targets)
//        else if (isJoinSource) {
//            if (!joinConnections[sourceId]) {
//                joinConnections[sourceId] = [];
//            }
//            if (!joinConnections[sourceId + "businessTargetId"]) {
//                joinConnections[sourceId + "businessTargetId"] = [];
//            }
//            joinConnections[sourceId].push({
//                targetId,
//            });
//            joinConnections[sourceId + "businessTargetId"].push({
//                businessRoleTargetId,
//            });
//        }
//
//        // 5. Normal connections
//        else {
//            result.push({
//                type: "normal",
//                sourceId,
//                targetId,
//                label,
//                businessRoleSourceId: businessRoleSourceId,
//                businessRoleTargetId: businessRoleTargetId
//            });
//        }
//    });
//
//    // Add conditions
//    Object.values(conditionMap).forEach(cond => result.push(cond));
//
//    // Merge join targets into their corresponding join entries
//    result.forEach(obj => {
//        if (obj.type === "join" && joinConnections[obj.joinNode]) {
//            //obj.targetIds = joinConnections[obj.joinNode].map(j => j.targetId).join(", ");
//            obj.targetId = [...new Set(joinConnections[obj.joinNode].map(j => j.targetId))].join(", ");
//            obj.businessRoleTargetId = [...new Set(joinConnections[obj.joinNode + "businessTargetId"].map(j => j.businessRoleTargetId))].join(", ");
//            delete obj.targets;
//
//        }
//    });
//
//    const connectionData = allConnections.map(conn => {
//        // Initialize an array to store all overlays
//        const overlays = [];
//
//        // Get all overlays of the connection
//        const overlayObjects = conn.getOverlays();
//
//        // Loop through each overlay and capture the type, label, location, and other properties
//        for (const overlay of Object.values(overlayObjects || {})) {
//            if (overlay.type === "Label") {
//                overlays.push([
//                    "Label",
//                    {
//                        label: overlay.getLabel() || "", // Get the label text
//                        location: overlay.location || 0.5, // Get the location of the label (default 0.5)
//                        cssClass: overlay.canvas.className || ""  // Get any associated CSS class for styling
//                    }
//                ]);
//            } else if (overlay.type === "Arrow") {
//                overlays.push([
//                    "Arrow",
//                    {
//                        width: 12,
//                        length: 12,
//                        location: overlay.location || 1  // Get the location of the arrow (default 1)
//                    }
//                ]);
//            }
//        }
//
//        // Return the connection data, including the overlays
//        return {
//            source: conn.sourceId,
//            target: conn.targetId,
//            anchors: [
//                conn.endpoints[0].anchor.type || conn.endpoints[0].anchor.name || '',
//                conn.endpoints[1].anchor.type || conn.endpoints[1].anchor.name || ''
//            ],
//            overlays: overlays  // Store the collected overlays here
//        };
//    });
//    var conditions = {};
//    const parent = document.getElementById("workflowDesignOperationsDataId");
//    const nodes = Array.from(parent.querySelectorAll(".node")).map(node => {
//        var nodeId = node.id;
//        if (nodeId != null && nodeId != '' && nodeId != undefined && nodeId.indexOf("ConditionNode") > -1)
//        {
//            var divLabel = $("#" + nodeId).find("div.label").html();
//            conditions[nodeId + '_Filter'] = $("#" + nodeId + "_Filter").val();
//            conditions[nodeId + '_FilterVal'] = $("#" + nodeId + "_FilterVal").val();
//            return{
//                roleId: nodeId,
//                roleLabel: divLabel,
//                position: {
//                    top: node.style.top,
//                    left: node.style.left
//                }
//            }
//        } else if (nodeId != null && nodeId != '' && nodeId != undefined && nodeId.indexOf("joint-") > -1)
//        {
//            var divLabel = $("#" + nodeId).html();
//            return{
//                roleId: nodeId,
//                roleLabel: divLabel,
//                position: {
//                    top: node.style.top,
//                    left: node.style.left
//                }
//            }
//        } else {
//            var roleId = $("#" + nodeId).find("div.label").attr("data-roleid");
//            var businessRoleId = $("#" + nodeId).find("div.label").attr("data-businessroleid");
//            var roleCssClass = $("#" + nodeId).find("div.label").attr("data-roleCssClass");
//            var conditionId = $("#" + nodeId).find("div.label").attr("data-conditionid");
//            var divLabel = $("#" + nodeId).find("div.label");
//            var label = divLabel.find("span.workflowDesignRolesLabelClass").text();
//            var spanimage = divLabel.find("span.workflowDesignRolesSpanImageClass");
//            var imgSrc = spanimage.find("img").attr('src');
//            return{
//                roleId: roleId,
//                businessRoleId: businessRoleId,
//                conditionId: conditionId,
//                roleLabel: label,
//                imageNameId: imgSrc,
//                roleCssClass: roleCssClass,
//                position: {
//                    top: node.style.top,
//                    left: node.style.left
//                }
//            }
//        }
//
//    });
//
//    // Combine nodes and connections
//    const saveData = {
//        nodes: nodes,
//        connections: connectionData,
//        conditions: conditions
//    };
//
//    console.log(result);
//    if (result != null && !jQuery.isEmptyObject(result) && result.length > 0 && saveData != null && !jQuery.isEmptyObject(saveData)
//            && saveData['nodes'] != null && !jQuery.isEmptyObject(saveData['nodes'])
//            && saveData['connections'] != null && !jQuery.isEmptyObject(saveData['connections'])
//            ) {
//        $.ajax({
//            datatype: "json",
//            type: "POST",
//            url: 'getWorkflowName',
//            data: {
//                'domain': domain,
//                'source': source,
//            },
//            traditional: true,
//            cache: false,
//            success: function (response) {
//                stopLoader();
//                if (response != null && !jQuery.isEmptyObject(response)) {
//                    var selectBoxStr = response['selectBoxStr'];
//                    var textAreaStr = "<textarea id='workflowDesignNewTextId' class='workflowDesignNewTextClass' style='display:none'></textarea>";
//                    $("#dialog").html("<div class ='selectDialogBox'>" + selectBoxStr + textAreaStr + ""
//                            + "<span id='workflowNameErrorSpanId' class='workflowNameErrorSpanClass' style='display:none;color:red'>Please Provide Workflow Name</span>"
//                            + "</div>");
//                    $("#dialog").dialog({resizable: false,
//                        title: 'Save Workflow',
//                        modal: true,
//                        width: 300,
//                        height: 'auto',
//                        fluid: true,
//                        buttons: [
//                            {
//                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
//                                click: function () {
//                                    $("#workflowNameErrorSpanId").hide();
//                                    var workflowId = $("#workflowDesignNameId").val();
//                                    var workflowName = $("#workflowDesignNameId option:selected").text();
//                                    if (workflowId != null && workflowId != '' && workflowId != undefined && workflowId == 'SELECT')
//                                    {
//                                        $("#workflowNameErrorSpanId").text("Please Provide Workflow Name");
//                                        $("#workflowNameErrorSpanId").show();
//                                        return;
//                                    } else if (workflowId != null && workflowId != '' && workflowId != undefined && workflowId == 'NEW') {
//                                        workflowName = $("#workflowDesignNewTextId").val();
//                                        if (!(workflowName != null && workflowName != '' && workflowName != undefined))
//                                        {
//                                            $("#workflowNameErrorSpanId").text("Please Provide Workflow Name");
//                                            $("#workflowNameErrorSpanId").show();
//                                            return;
//                                        }
//                                        workflowId = Array.from({length: 16}, () => Math.floor(Math.random() * 10)).join('');
//                                    }
//                                    if (!(result != null && !jQuery.isEmptyObject(result)))
//                                    {
//                                        $("#workflowNameErrorSpanId").text("Please configure workflow to save & activate");
//                                        $("#workflowNameErrorSpanId").show();
//                                        return;
//                                    }
//
//                                    $.ajax({
//                                        datatype: "json",
//                                        type: "POST",
//                                        url: 'saveWorkflowStatusDetails',
//                                        data: {
//                                            'mappingObj': JSON.stringify(result),
//                                            'workflowId': workflowId,
//                                            'workflowName': workflowName,
//                                            'domain': domain,
//                                            'source': source,
//                                            'rawData': JSON.stringify(saveData)
//                                        },
//                                        traditional: true,
//                                        cache: false,
//                                        success: function (response) {
//                                            stopLoader();
//                                            if (response != null && !jQuery.isEmptyObject(response)) {
//                                                var message = response['message'];
//                                                $("#dialog").html("<div class ='linkDialogBox'>" + message + "</div>");
//                                                $("#dialog").dialog({resizable: false,
//                                                    title: 'Message',
//                                                    modal: true,
//                                                    width: 300,
//                                                    height: 150,
//                                                    fluid: true,
//                                                    buttons: [
//                                                        {
//                                                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
//                                                            click: function () {
//                                                                $("#workflowDesignOperationsDataId").html("");
//                                                                $("#conditionHiddenFieldsId").html("");
//                                                                newWorkflowInstance = jsPlumb.getInstance({
//                                                                    Container: "workflowDesignOperationsDataId",
//                                                                    Connector: ["Flowchart", {cornerRadius: 10, stub: [40, 60]}],
//                                                                    Endpoint: "Dot",
//                                                                    EndpointStyle: {fill: "#456", radius: 5},
//                                                                    PaintStyle: {stroke: "#0b4a99", strokeWidth: 1},
//                                                                    HoverPaintStyle: {stroke: "#007BFF", strokeWidth: 1.5},
//                                                                });
//                                                                $(this).html("");
//                                                                $(this).dialog("close");
//                                                                $(this).dialog("destroy");
//                                                            }
//                                                        }
//                                                    ],
//                                                    open: function (event, ui) {
//
//                                                    },
//                                                    beforeClose: function (event, ui) {
//                                                        $(this).html("");
//                                                        $(".visionHeaderMain").css("z-index", "99999");
//                                                        $(".visionFooterMain").css("z-index", "99999");
//                                                    }
//                                                });
//                                            }
//
//                                        }, error: function (e) {
//                                            console.log("The Error Message is:::" + e.message);
//                                            stopLoader();
//                                            sessionTimeout(e);
//                                        }
//                                    });
//
//                                    $(this).html("");
//                                    $(this).dialog("close");
//                                    $(this).dialog("destroy");
//                                }
//                            }, {
//                                text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
//                                click: function () {
//                                    $(this).html("");
//                                    $(this).dialog("close");
//                                    $(this).dialog("destroy");
//                                }
//                            }
//                        ],
//                        open: function (event, ui) {
//
//                        },
//                        beforeClose: function (event, ui) {
//                            $(this).html("");
//                            $(".visionHeaderMain").css("z-index", "99999");
//                            $(".visionFooterMain").css("z-index", "99999");
//                        }
//                    });
//                }
//
//            }, error: function (e) {
//                console.log("The Error Message is:::" + e.message);
//                stopLoader();
//                sessionTimeout(e);
//            }
//        });
//
//    } else {
//        showWorkflowMsg("Message", "Please configure the workflow before save");
//    }
//}

function showNewWorkflowTextInput()
{
    $("#workflowNameErrorSpanId").hide();
    var workflowName = $("#workflowDesignNameId").val();
    if (workflowName != null && workflowName != '' && workflowName != undefined && workflowName == 'NEW')
    {
        $("#workflowDesignNewTextId").show();
    } else {
        $("#workflowDesignNewTextId").html("");
        $("#workflowDesignNewTextId").hide();
    }
}

function addNewWofkflowCondition(id)
{
    var conditionId = $("#" + id).find("div").attr('data-conditionId');
    var min = 10;
    var max = 100000;
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    var controlTypesOptionsStr = "";
    var controlTypesStr = $("#" + id + "_controlTypes").val();
    if (controlTypesStr != null && controlTypesStr != '' && controlTypesStr != undefined)
    {
        var controlTypesArr = JSON.parse(controlTypesStr);
        if (controlTypesArr != null && !jQuery.isEmptyObject(controlTypesArr))
        {
            controlTypesOptionsStr += "<option value='SELECT'>select</option>"
            $.each(controlTypesArr, function (i, val) {
                controlTypesOptionsStr += "<option value='" + val + "'>" + val + "</option>"
            });
        }
    }
    var askLabelStr = "<div class='workflowDesignConnectionLabelClass'>"
            + "<span class='workflowDesignConnectionLabelSpanClass'>Please select label :</span>"
            + "<select id='workflowDesignConnectionLabelSelectId'>"
            + controlTypesOptionsStr
            + "</select>"
            + "<span id='workflowDesignConnectionLabelErrorSpanId' class='workflowDesignConnectionLabelErrorSpanClass' style='display:none;color:red'>please select label</span>"
            + "</div>"
    $("#dialog").html("<div class ='linkDialogBox'>" + askLabelStr + "</div>");
    $("#dialog").dialog({resizable: false,
        title: 'Label',
        modal: true,
        width: 300,
        height: 'auto',
        fluid: true,
        buttons: [
            {
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    var userLabel = $("#workflowDesignConnectionLabelSelectId").val();
                    if (userLabel !== null && userLabel != '' && userLabel != undefined && userLabel != 'SELECT') {
                        createOpenConditionBox(id, conditionId, randomNum, "Condition", userLabel);
                    } else {
                        $("#workflowDesignConnectionLabelErrorSpanId").show();
                        return;
                    }
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }, {
                text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");

                }
            }
        ],
        open: function (event, ui) {

        },
        beforeClose: function (event, ui) {
            $(this).html("");
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}


async function getConditionfromParamArray(paramArray, conditionCase, whenRole, defaultRole, conditionNodeId)
{
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getConditionfromParamArr',
        data: {
            'paramArray': JSON.stringify(paramArray),
            'conditionCase': conditionCase,
            'whenRole': whenRole,
            'defaultRole': defaultRole,
            'conditionNodeId': conditionNodeId
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var conditionVal = response['conditionHiddenField'];
                $("#" + conditionNodeId + "_FilterVal").remove();
                $("#conditionHiddenFieldsId").append(conditionVal);
            }

        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });
}


function showWorkflowDesignVersions()
{
    var domain = $("#visionWorkflowDesinDomainSelectId").val();
    var source = $("#visionWorkflowDesinSourceSelectId").val();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getWorkflowDesignVersions',
        data: {
            'domain': domain,
            'source': source
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var workflowDesignNameVersionsStr = response['workflowDesignNameVersionsStr'];
                if (!(workflowDesignNameVersionsStr != null && workflowDesignNameVersionsStr != ''
                        && workflowDesignNameVersionsStr != undefined))
                {
                    showWorkflowMsg("Message", "There are no workflows configured for this domain and source.");
                    return;
                }
                $("#dialog").html(workflowDesignNameVersionsStr);
                $("#dialog").dialog({resizable: false,
                    title: 'Versions',
                    modal: true,
                    width: 600,
                    height: 'auto',
                    fluid: true,
                    buttons: [
                        {
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                var workflowId = $("#workflowDesignNameSelectId").val();
                                var version = $("#workflowDesignVersionsSelectId").val();
                                $("#versionDetailId").html("version : " + version)
                                if (workflowId != null && workflowId != '' && workflowId != undefined
                                        && version != null && version != '' && version != undefined)
                                {
                                    $("#workflowDesignOperationsDataId").html("");
//                                    previewVersionWorkflowDesign(domain, source, workflowId, version);
                                    showVersionWorkflowDesign(domain, source, workflowId, version);
                                }
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }
                        }, {
                            text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");

                            }
                        }
                    ],
                    open: function (event, ui) {

                    },
                    beforeClose: function (event, ui) {
                        $(this).html("");
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
            }

        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });
}

function getWorkflowDesignVersionsByWorkflowName()
{
    var domain = $("#visionWorkflowDesinDomainSelectId").val();
    var source = $("#visionWorkflowDesinSourceSelectId").val();
    var workflowId = $("#workflowDesignNameSelectId").val();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getWorkflowDesignVersionsByWorkflowName',
        data: {
            'domain': domain,
            'source': source,
            'workflowId': workflowId
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var versionStr = response['versionStr'];
                $("#workflowDesignVersionsSelectId").html(versionStr);
            }

        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });
}

function showWorkflowMsg(title, message) {
    $("#dialog").html(message);
    $("#dialog").dialog({resizable: false,
        title: (labelObject[title] != null ? labelObject[title] : title),
        width: 600,
        maxWidth: 600,
        height: 150,
        maxHeight: 1000,
        fluid: true,
        dialogClass: "workflowNavigation",
        buttons: [
            {
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }],
        open: function () {
            $("#Loader").css("display", "none");
            $("body").css({"pointer-events": "auto"});
        },
        beforeClose: function (event, ui) {

        }
    });
}

var previewData = {};
var previewWorkflowInstance;
function previewWorkflowDesignProcess()
{
//    getWorkflowCreatingComponent(); 
//    $('.toggleRightPanelBtn').remove();
//    $('.toggleLeftPanelBtn').remove();
//    var domain = $("#visionWorkflowDesinDomainSelectId").val();
//    var source = $("#visionWorkflowDesinSourceSelectId").val();
//    $.ajax({
//        datatype: "json",
//        type: "POST",
//        url: 'previewWorkflowDesign',
//        data: {
//            'domain': domain,
//            'source': source,
//        },
//        traditional: true,
//        cache: false,
//        success: function (response) {
//            stopLoader();
//            if (response != null && !jQuery.isEmptyObject(response)) {
//                var previewWorkflowData = response['previewWorkflowData'];
//                $("#workflowDesignOperationsId").html('');
//                if (source != null && source != '' && source != undefined && source == 'WORKFLOW') {
//                    $("#workflowDesignOperationsId").html(previewWorkflowData);
////                    $("#workflowDesignOperationsDataId").hide();
//                }
//                if (previewWorkflowData != null && previewWorkflowData != '' && previewWorkflowData != undefined) {
//                    const savedState = JSON.parse(previewWorkflowData);
//                    if (savedState != null && !jQuery.isEmptyObject(savedState)) {
//                        previewData['previewData'] = savedState;
//                        $("#workflowDesignOperationsDataId").html("");
//                        $("#workflowDesignOperationsDataId").hide();
//                        $("#conditionHiddenFieldsId").html("");
//                        $("#workflowDesignOperationsOriginalDataId").html("");
//                        $("#workflowDesignOperationsOriginalDataId").show();
//                        $("#workflowDesignOperationsMainDataId").jqxSplitter({width: '100%',
//                            height: '709px',
//                            orientation: 'vertical',
//                            panels: [{size: '99.5%', min: 500, resizable: true}, {size: '0%', min: 0, resizable: true}]});
//                        $("#workflowDesignOperationsMainDataId").find("div.jqx-splitter-splitbar-vertical").css("top", "0px", "!important");
//
//                        const canvas = document.getElementById('workflowDesignOperationsOriginalDataId');
//                        jsPlumb.ready(function () {
//                            previewWorkflowInstance = jsPlumb.getInstance({
//                                Container: "workflowDesignOperationsOriginalDataId",
//                                Connector: ["Flowchart", {cornerRadius: 10, stub: [40, 60]}],
//                                Endpoint: "Dot",
//                                EndpointStyle: {fill: "#456", radius: 5},
//                                PaintStyle: {stroke: "#0b4a99", strokeWidth: 1},
//                                HoverPaintStyle: {stroke: "#007BFF", strokeWidth: 1.5},
//                            });
//
//                            // Load nodes
//                            savedState.nodes.forEach(nodeData => {
//                                var top = nodeData.position.top;
//                                var left = nodeData.position.left;
//                                top = top.replace("px", "");
//                                left = left.replace("px", "");
//                                var roleId = nodeData.roleId;
//                                if (roleId != null && roleId != '' && roleId != undefined && roleId.indexOf("ConditionNode") > -1)
//                                {
//                                    var roleLabel = nodeData.roleLabel;
//                                    var roleId = nodeData.roleId;
//                                    addPreviewConditionNode(roleLabel, roleId + "_Edit", top, left, false, canvas, previewWorkflowInstance);
//                                } else if (roleId != null && roleId != '' && roleId != undefined && roleId.indexOf("joint-") > -1)
//                                {
//                                    var roleLabel = nodeData.roleLabel;
//                                    var roleId = nodeData.roleId;
//                                    previewJointNode(roleLabel, roleId + "_Edit", top, left, "workflowDesignOperationsOriginalDataId", previewWorkflowInstance);
//                                } else {
//                                    var roleLabel = nodeData.roleLabel;
//                                    var businessRoleId = nodeData.businessRoleId;
//                                    var roleId = nodeData.roleId;
//                                    var conditionId = nodeData.conditionId;
//                                    var imageNameId = nodeData.imageNameId;
//                                    var roleCssClass = nodeData.roleCssClass;
//                                    addPreviewNode(roleLabel, businessRoleId + "_Edit", roleId + "_Edit", conditionId, imageNameId, roleCssClass, top, left, canvas, previewWorkflowInstance);
//                                }
//                            });
//                            // Reconnect the connections
//                            savedState.connections.forEach(connData => {
//                                previewWorkflowInstance.connect({
//                                    source: connData.source + "_Edit",
//                                    target: connData.target + "_Edit",
//                                    anchors: connData.anchors,
//                                    overlays: connData.overlays,
//                                    createEndpoint: false
//                                });
//                            });
//                        });
//
//                        $('#workflowDesignOperationsOriginalDataId div').css('pointer-events', 'none');
//                        $('#workflowDesignOperationsOriginalDataId div.jtk-endpoint').css('display', 'none', '!important');
//                        loadPreviewWorkflowDesignProcess(domain, source, previewWorkflowData);
//                    }
//                }
//            } else {
//                previewData = {};
//                showWorkflowMsg("Message", "There are no active workflows configured for this domain and source.");
//            }
//
//        }, error: function (e) {
//            console.log("The Error Message is:::" + e.message);
//            stopLoader();
//            sessionTimeout(e);
//        }
//    });

    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getWorkflowDomainProcessDetails',
        data: {
            'tableName': tableName,
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var workflowTabsDesignStr = response['workflowTabsDesignStr'];
                var domain = response['selectedDomain'];
                var source = response['selectedSource'];
                var workflowId = response['workflowId'];
                var version = response['version'];
//                    $("#workflowDesignResourcesId").html(workflowTabsDesignStr);
                $("#versionDetailId").html("")
                $("#workflowDesignOperationsId").html("<div id='workflowDesignOperationsMainDataId' class='workflowDesignOperationsMainDataClass'><div id='workflowDesignOperationsOriginalDataId' class='workflowDesignOperationsDataClass workflowDesignOperationsDataEditDivClass' style='display:none'></div><div id='workflowDesignOperationsDataId' class='workflowDesignOperationsDataClass' style='display:none'></div></div><div id='workflowDesignOperationsHeaderId' class='workflowDesignOperationsHeaderClass' style='display:none'></div>");
                $("#workflowDesignOperationsMainDataId").jqxSplitter({width: '100%',
                    height: '709px',
                    orientation: 'vertical',
                    panels: [{size: '0%', min: 0, resizable: true}, {size: '100%', min: 500, resizable: true}]});

            }
            previewVersionWorkflowDesign(domain, source, workflowId, version);

        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });



}

function loadPreviewWorkflowDesignProcess(domain, source, previewWorkflowData)
{
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getWorkflowPreviewDesignDetails',
        data: {
            'domain': domain,
            'source': source,
            'previewWorkflowData': previewWorkflowData
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                $("#workflowDesignOperationsHeaderId").show();
                var designResourcesStr = response['designResourcesStr'];
                var rolesDivStr = response['rolesDivStr'];
                $("#workflowDesignOperationsHeaderId").html(designResourcesStr);
                $("#" + domain + "_" + source + "_RolesId").remove();
                $("body").append(rolesDivStr);
                $("#" + domain + "_" + source + "_RolesId").jqxPopover({
                    offset: {left: 0, top: 0},
                    position: 'left',
                    width: 200,
                    height: 'auto',
                    position: 'left',
                    autoClose: false,
                    title: "Roles",
                    showCloseButton: true,
                    selector: $("#newworkflowRolesButtonId")
                });

                $(".workflowOperationsHeaderRoleDragClass").draggable({
                    revert: "invalid",
                    refreshPositions: true,
                    cursor: 'move',
                    zindex: false,
                    opacity: false,
                    helper: "clone"  // optional: keeps the original element in place
                });

                $(".workflowDesignOperationsDataClass").droppable({
                    revert: true,
                    refreshPositions: true,
                    cursor: 'move',
                    accept: '.workflowOperationsHeaderRoleDragClass',
                    drop: function (event, ui) {
                        var draggable = $(ui.draggable);
                        var draggableId = draggable[0]['id'];
                        var roleId = $("#" + draggableId).attr("data-roleId");
                        var businessRoleId = $("#" + draggableId).attr("data-businessRoleId");
                        var conditionId = $("#" + draggableId).attr("data-conditionId");
                        var imageNameId = $("#" + draggableId).attr("data-imageNameId");
                        var roleCssClass = $("#" + draggableId).attr("data-roleCssClass");
                        var roleLabel = draggable[0].textContent;
                        const canvas = document.getElementById('workflowDesignOperationsDataId');
                        var canvasOffset = $(canvas).offset();
                        var top = ui.offset.top - canvasOffset.top + canvas.scrollTop;
                        var left = ui.offset.left - canvasOffset.left + canvas.scrollLeft;
                        createAddNewNode(roleLabel, businessRoleId, roleId, conditionId, imageNameId, roleCssClass, top, left, canvas, newWorkflowInstance);

                    }
                });

            }

        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });



}

function EditWorkflowDesign()
{
    window.WORKFLOW_MODE = "EDIT";
    $("#EditedWirdkflowId").val("");
    deleteType = "EDIT";
    $("#editworkflowButtonId").hide();
    var savedState = previewData['previewData'];
    var version = previewData['version'];
    $("#EditedWirdkflowId").val(version);

    if (savedState != null && !jQuery.isEmptyObject(savedState)) {
        $("#workflowDesignOperationsDataId").show();
        $('.toggleRightPanelBtn').remove();
        $('.toggleLeftPanelBtn').remove();
        $('#workflowDesignOperationsOriginalDataId').append(`<button class="toggleRightPanelBtn">Expand/Collapse</button>`);
        $('#workflowDesignOperationsDataId').append(`<button class="toggleLeftPanelBtn">Expand/Collapse</button>`);
        $("#workflowDesignOperationsMainDataId").jqxSplitter({width: '100%',
            height: '709px',
            orientation: 'vertical',
            panels: [{size: '49%', min: 300, resizable: true}, {size: '49%', min: 300, resizable: true}]});
        $('#workflowDesignOperationsMainDataId').jqxSplitter('refresh');
        const canvas = document.getElementById('workflowDesignOperationsDataId');
        loadNewWorkflowDesignResources();
        savedState.nodes.forEach(nodeData => {
            var top = nodeData.position.top;
            var left = nodeData.position.left;
            top = top.replace("px", "");
            left = left.replace("px", "");
            var roleId = nodeData.roleId;
            if (roleId != null && roleId != '' && roleId != undefined && roleId.indexOf("ConditionNode") > -1)
            {
                var roleLabel = nodeData.roleLabel;
                addNewConditionNode(roleLabel, roleId, top, left, false, canvas, newWorkflowInstance);
            } else if (roleId != null && roleId != '' && roleId != undefined && roleId.indexOf("joint-") > -1)
            {
                var roleLabel = nodeData.roleLabel;
                var roleId = nodeData.roleId;
                previewJointNode(roleLabel, roleId, top, left, "workflowDesignOperationsDataId", newWorkflowInstance);
            } else {
                var roleLabel = nodeData.roleLabel;
                var businessRoleId = nodeData.businessRoleId;
                var roleId = nodeData.roleId;
                var conditionId = nodeData.conditionId;
                var imageNameId = nodeData.imageNameId;
                var roleCssClass = nodeData.roleCssClass;
                createAddNewNode(roleLabel, businessRoleId, roleId, conditionId, imageNameId, roleCssClass, top, left, canvas, newWorkflowInstance);
            }
        });
        // Reconnect the connections

        savedState.connections.forEach(connData => {

            const overLaysArr = connData.overlays;
            if (!Array.isArray(overLaysArr) || overLaysArr.length === 0)
                return;

            connData.overlays = overLaysArr

                    // ✅ DO NOT DROP CUSTOM OVERLAYS
                    .filter(val => {
                        if (Array.isArray(val) && val[0] === "Custom") {
                            const opt = val[1] || {};
                            return opt.show == null || opt.show === "true";
                        }
                        return true;
                    })

                    // ✅ HANDLE EACH CUSTOM TYPE CORRECTLY
                    .map(val => {

                        if (!Array.isArray(val) || val[0] !== "Custom")
                            return val;

                        const opt = val[1] || {};

                        // ✅ RELIABLE ROLE DETECTION
                        const role =
                                opt.role ||
                                (opt.id.startsWith("plus-") ? "ADD" :
                                        opt.id === "delete-conn" ? "DELETE" :
                                        opt.id.startsWith("decision-") ? "DECISION" :
                                        "UNKNOWN");

                        const path = opt.path;
                        const userLabel = opt.label;

                        /* ➕ PLUS */
                        if (role === "ADD") {

                            opt.create = function () {
                                const span = document.createElement("span");
                                span.className = "plus-circle";
                                span.innerText = "+";
                                span.title = opt.title || "Add new control";
                                span.style.cursor = "pointer";
                                span.style.pointerEvents = "auto";


                                // ✅ HIDE IN PREVIEW
                                span.style.display =
                                        window.WORKFLOW_MODE === "EDIT" ? "inline-flex" : "none";

                                // ✅ CLICK HANDLER (EDIT MODE)
                                span.addEventListener("click", function (e) {
                                    e.stopPropagation();

                                    if (window.WORKFLOW_MODE !== "EDIT")
                                        return;

                                    addControlPopup(
                                            opt.targetSourceId,
                                            opt.targetId,
                                            opt.connectionId,
                                            opt.offsetY
                                            );
                                });

                                return span;
                            };
                        } else if (role === "DELETE") {

                            const sourceid = connData.source;
                            const target = connData.target;

                            opt.create = function () {

                                // 🔹 WRAPPER (hover area)
                                const wrapper = document.createElement("div");
                                wrapper.className = "conn-delete-wrapper";
                                wrapper.style.pointerEvents = "auto";

                                // 🔹 ICON (actual button)
                                const del = document.createElement("div");
                                del.className = "conn-delete-icon";
                                del.innerHTML = `<img src="images/delete_icon.svg" width="14">`;
                                del.style.cursor = "pointer";

                                const con = opt.connectionId;

                                // ✅ SHOW ONLY IN EDIT MODE
                                wrapper.style.display =
                                        window.WORKFLOW_MODE === "EDIT" ? "flex" : "none";

                                // ✅ CLICK HANDLER
                                del.onclick = function (e) {
                                    e.stopPropagation();
                                    if (window.WORKFLOW_MODE !== "EDIT")
                                        return;
                                    if (opt.DeleteLabel) {
                                        deleteconnectionLink(opt.DeleteLabel, sourceid, target);
                                    }
                                };

                                wrapper.appendChild(del);
                                return wrapper;
                            };
                        }


                        /* 🔷 DECISION */
                        else if (role === "DECISION") {
                            opt.create = function () {

                                let width, height;

                                if (userLabel === "RETURN") {
                                    width = "62px";
                                    height = "65px";
                                } else {
                                    width = "26px";
                                    height = "28px";
                                }

                                const wrapper = document.createElement("div");
                                wrapper.style.width = "40px";
                                wrapper.style.height = "40px";
                                wrapper.style.position = "relative";
                                wrapper.style.pointerEvents = "auto";
                                wrapper.style.cursor = "pointer";
                                wrapper.title = userLabel;

                                const diamond = document.createElement("div");
                                diamond.style.width = "34px";
                                diamond.style.height = "34px";
                                diamond.style.background = "#fff";
                                diamond.style.border = "2px solid #000";
                                diamond.style.position = "absolute";
                                diamond.style.top = "50%";
                                diamond.style.left = "50%";
                                diamond.style.transform =
                                        "translate(-50%, -50%) rotate(45deg)";
                                diamond.style.boxSizing = "border-box";


                                if (path != 'null' && path != 'undefined') {
                                    const img = document.createElement("img");
                                    img.src = path;
                                    img.style.width = width;
                                    img.style.height = height;
                                    img.style.position = "absolute";
                                    img.style.top = "50%";
                                    img.style.left = "50%";
                                    img.style.transform =
                                            "translate(-50%, -50%) rotate(-45deg)";
                                    img.style.pointerEvents = "none";

                                    diamond.appendChild(img);

                                } else if (userLabel) {
                                    // âœ… TEXT MODE (True / False)
                                    const span = document.createElement("span");
                                    span.innerText = userLabel;
                                    span.style.fontSize = "10px";
                                    span.style.fontWeight = "600";
                                    span.style.color = "#000";
                                    span.style.transform = "rotate(-45deg)";
                                    span.style.pointerEvents = "none";
                                    diamond.appendChild(span);
                                }


                                wrapper.appendChild(diamond);

                                return wrapper;

                            };
                        }

                        /* ❗ FALLBACK */
                        else {
                            opt.create = () => document.createElement("div");
                        }

                        return ["Custom", opt];
                    });
        });


        savedState.connections.forEach(connData => {
            newWorkflowInstance.connect({
                source: connData.source,
                target: connData.target,
                anchors: connData.anchors,
                overlays: connData.overlays,
                createEndpoint: false
            });
        });

        $("#workflowDesignOperationsDataId .plus-circle")
                .css("display", "inline-flex")
                .css("pointer-events", "auto");

        $("#workflowDesignOperationsDataId .conn-delete-icon")
                .css("display", "block")
                .css("pointer-events", "auto");

        var conditions = savedState.conditions;
        if (conditions != null && !jQuery.isEmptyObject(conditions))
        {
            $.each(conditions, function (key, val) {
                if (key != null && key != '' && key != undefined && key.indexOf("_FilterVal") > -1)
                {
                    $("#conditionHiddenFieldsId").append("<input type='hidden' id='" + key + "' value=\"" + val + "\"/>");
                } else {
                    $("#conditionHiddenFieldsId").append("<input type='hidden' id='" + key + "' value='" + val + "'/>");
                }
            });
        }



        $(".workflowDesignOperationsDataClass").removeClass("workflowDesignOperationsDataClass");
        $("#workflowDesignOperationsDataId").css({
            'overflow-x': 'auto',
            'scrollbar-width': 'thin'
        });
        $("#newworkflowSaveButtonId").show();
        $("#activateNewWorkflowButtonId").show();
        $("#newworkflowRolesButtonId").show();
        let isRightPanelCollapsed = true;
        $(".toggleRightPanelBtn").on("click", function () {
            if (isRightPanelCollapsed) {
                $(".toggleLeftPanelBtn").hide();
                $("#workflowDesignOperationsMainDataId").jqxSplitter({width: '100%',
                    height: '709px',
                    orientation: 'vertical',
                    panels: [{size: '100%', min: 300, resizable: true, collapsible: true}, {size: '0%', resizable: true, collapsible: true}]});
            } else {
                $(".toggleLeftPanelBtn").show();
                $("#workflowDesignOperationsMainDataId").jqxSplitter({width: '100%',
                    height: '709px',
                    orientation: 'vertical',
                    panels: [{size: '50%', min: 300, resizable: true, collapsible: true}, {size: '50%', min: 300, resizable: true, collapsible: true}]});
            }

            isRightPanelCollapsed = !isRightPanelCollapsed;
        });

        let isLeftPanelCollapsed = false;
        $(".toggleLeftPanelBtn").on("click", function () {
            if (isLeftPanelCollapsed) {
                // Expand left panel (index 0)
                $("#workflowDesignOperationsMainDataId").jqxSplitter('expand', 0);
            } else {
                // Collapse right panel (index 1)
                $("#workflowDesignOperationsMainDataId").jqxSplitter('collapse', 0);
            }
            isLeftPanelCollapsed = !isLeftPanelCollapsed;
        });
    }
}

function showVersionWorkflowDesign(domain, source, workflowId, version)
{
    domain = $("#visionWorkflowDesinDomainSelectId").val();
    source = $("#visionWorkflowDesinSourceSelectId").val();
    $("#workflowDesignOperationsDataId").html("");
    $("#workflowDesignOperationsDataId").hide();
    $("#conditionHiddenFieldsId").html("");
    $("#workflowDesignOperationsOriginalDataId").html("");
    $("#workflowDesignOperationsOriginalDataId").show();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getVersionWorkflowDesign',
        data: {
            'domain': domain,
            'source': source,
            'workflowId': workflowId,
            'version': version
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var previewWorkflowData = response['previewWorkflowData'];
                var ParrentWorkFlowId = response['ParrentWorkFlowId'];
                if (previewWorkflowData != null && previewWorkflowData != '' && previewWorkflowData != undefined) {
                    const savedState = JSON.parse(previewWorkflowData);
                    if (savedState != null && !jQuery.isEmptyObject(savedState)) {
                        $('.toggleRightPanelBtn').remove();
                        $('.toggleLeftPanelBtn').remove();
                        previewData['previewData'] = savedState;
                        previewData['version'] = version;
                        $("#workflowDesignOperationsMainDataId").jqxSplitter({width: '100%',
                            height: '709px',
                            orientation: 'vertical',
                            panels: [{size: '99.5%', min: 500, resizable: true}, {size: '0%', min: 0, resizable: true}]});
                        $("#workflowDesignOperationsMainDataId").find("div.jqx-splitter-splitbar-vertical").css("top", "0px", "!important");
                        const canvas = document.getElementById('workflowDesignOperationsOriginalDataId');
                        jsPlumb.ready(function () {
                            previewWorkflowInstance = jsPlumb.getInstance({
                                Container: "workflowDesignOperationsOriginalDataId",
                                Connector: ["Flowchart", {cornerRadius: 10, stub: [40, 60]}],
                                Endpoint: "Dot",
                                EndpointStyle: {fill: "#456", radius: 5},
                                PaintStyle: {stroke: "#0b4a99", strokeWidth: 1},
                                HoverPaintStyle: {stroke: "#007BFF", strokeWidth: 1.5},
                            });

                            // Load nodes
                            savedState.nodes.forEach(nodeData => {
                                var top = nodeData.position.top;
                                var left = nodeData.position.left;
                                top = top.replace("px", "");
                                left = left.replace("px", "");
                                var roleId = nodeData.roleId;
                                if (roleId != null && roleId != '' && roleId != undefined && roleId.indexOf("ConditionNode") > -1)
                                {
                                    var roleLabel = nodeData.roleLabel;
                                    var roleId = nodeData.roleId;
                                    addPreviewConditionNode(roleLabel, roleId + "_Edit", top, left, false, canvas, previewWorkflowInstance);
                                } else if (roleId != null && roleId != '' && roleId != undefined && roleId.indexOf("joint-") > -1)
                                {
                                    var roleLabel = nodeData.roleLabel;
                                    var roleId = nodeData.roleId;
                                    previewJointNode(roleLabel, roleId + "_Edit", top, left, "workflowDesignOperationsOriginalDataId", previewWorkflowInstance);
                                } else {
                                    var roleLabel = nodeData.roleLabel;
                                    var businessRoleId = nodeData.businessRoleId;
                                    var roleId = nodeData.roleId;
                                    var conditionId = nodeData.conditionId;
                                    var imageNameId = nodeData.imageNameId;
                                    var roleCssClass = nodeData.roleCssClass;
                                    addPreviewNode(roleLabel, businessRoleId + "_Edit", roleId + "_Edit", conditionId, imageNameId, roleCssClass, top, left, canvas, previewWorkflowInstance);
                                }
                            });
                            savedState.connections.forEach(connData => {

                                const overLaysArr = connData.overlays;
                                if (!Array.isArray(overLaysArr) || overLaysArr.length === 0)
                                    return;

                                connData.overlays = overLaysArr

                                        // ✅ DO NOT DROP CUSTOM OVERLAYS
                                        .filter(val => {
                                            if (Array.isArray(val) && val[0] === "Custom") {
                                                const opt = val[1] || {};
                                                return opt.show == null || opt.show === "true";
                                            }
                                            return true;
                                        })

                                        // ✅ HANDLE EACH CUSTOM TYPE CORRECTLY
                                        .map(val => {

                                            if (!Array.isArray(val) || val[0] !== "Custom")
                                                return val;

                                            const opt = val[1] || {};

                                            // ✅ RELIABLE ROLE DETECTION
                                            const role =
                                                    opt.role ||
                                                    (opt.id.startsWith("plus-") ? "ADD" :
                                                            opt.id === "delete-conn" ? "DELETE" :
                                                            opt.id.startsWith("decision-") ? "DECISION" :
                                                            "UNKNOWN");

                                            const path = opt.path;
                                            const userLabel = opt.label;

                                            /* ➕ PLUS */
                                            if (role === "ADD") {

                                                opt.create = function () {
                                                    const span = document.createElement("span");
                                                    span.className = "plus-circle";
                                                    span.innerText = "+";
                                                    span.title = opt.title || "Add new control";
                                                    span.style.cursor = "pointer";
                                                    span.style.pointerEvents = "auto";


                                                    // ✅ HIDE IN PREVIEW
                                                    span.style.display =
                                                            window.WORKFLOW_MODE === "EDIT" ? "inline-flex" : "none";

                                                    // ✅ CLICK HANDLER (EDIT MODE)
                                                    span.addEventListener("click", function (e) {
                                                        e.stopPropagation();

                                                        if (window.WORKFLOW_MODE !== "EDIT")
                                                            return;

                                                        addControlPopup(
                                                                opt.targetSourceId,
                                                                opt.targetId,
                                                                opt.connectionId,
                                                                opt.offsetY
                                                                );
                                                    });

                                                    return span;
                                                };
                                            } else if (role === "DELETE") {

                                                const sourceid = connData.source;
                                                const target = connData.target;

                                                opt.create = function () {

                                                    // 🔹 WRAPPER (hover area)
                                                    const wrapper = document.createElement("div");
                                                    wrapper.className = "conn-delete-wrapper";
                                                    wrapper.style.pointerEvents = "auto";

                                                    // 🔹 ICON (actual button)
                                                    const del = document.createElement("div");
                                                    del.className = "conn-delete-icon";
                                                    del.innerHTML = `<img src="images/delete_icon.svg" width="14">`;
                                                    del.style.cursor = "pointer";

                                                    const con = opt.connectionId;

                                                    // ✅ SHOW ONLY IN EDIT MODE
                                                    wrapper.style.display =
                                                            window.WORKFLOW_MODE === "EDIT" ? "flex" : "none";

                                                    // ✅ CLICK HANDLER
                                                    del.onclick = function (e) {
                                                        e.stopPropagation();
                                                        if (window.WORKFLOW_MODE !== "EDIT")
                                                            return;
                                                        if (opt.DeleteLabel) {
                                                            deleteconnectionLink(opt.DeleteLabel, sourceid, target);
                                                        }
                                                    };

                                                    wrapper.appendChild(del);
                                                    return wrapper;
                                                };
                                            }


                                            /* 🔷 DECISION */
                                            else if (role === "DECISION") {
                                                opt.create = function () {

                                                    let width, height;

                                                    if (userLabel === "RETURN") {
                                                        width = "62px";
                                                        height = "65px";
                                                    } else {
                                                        width = "26px";
                                                        height = "28px";
                                                    }


                                                    const wrapper = document.createElement("div");
                                                    wrapper.style.width = "40px";
                                                    wrapper.style.height = "40px";
                                                    wrapper.style.position = "relative";
                                                    wrapper.style.pointerEvents = "auto";
                                                    wrapper.style.cursor = "pointer";
                                                    wrapper.title = userLabel;

                                                    wrapper.path = path;
                                                    wrapper.dataset.show = "true";

                                                    const diamond = document.createElement("div");
                                                    diamond.style.width = "34px";
                                                    diamond.style.height = "34px";
                                                    diamond.style.background = "#fff";
                                                    diamond.style.border = "2px solid #000";
                                                    diamond.style.position = "absolute";
                                                    diamond.style.top = "50%";
                                                    diamond.style.left = "50%";
                                                    diamond.style.transform =
                                                            "translate(-50%, -50%) rotate(45deg)";
                                                    diamond.style.boxSizing = "border-box";


                                                    if (path != 'null' && path != 'undefined') {
                                                        const img = document.createElement("img");
                                                        img.src = path;
                                                        img.style.width = width;
                                                        img.style.height = height;
                                                        img.style.position = "absolute";
                                                        img.style.top = "50%";
                                                        img.style.left = "50%";
                                                        img.style.transform =
                                                                "translate(-50%, -50%) rotate(-45deg)";
                                                        img.style.pointerEvents = "none";

                                                        diamond.appendChild(img);

                                                    } else if (userLabel) {
                                                        // âœ… TEXT MODE (True / False)
                                                        const span = document.createElement("span");
                                                        span.innerText = userLabel;
                                                        span.style.fontSize = "10px";
                                                        span.style.fontWeight = "600";
                                                        span.style.color = "#000";
                                                        span.style.transform = "rotate(-45deg)";
                                                        span.style.pointerEvents = "none";
                                                        diamond.appendChild(span);
                                                    }


                                                    wrapper.appendChild(diamond);

                                                    return wrapper;

                                                };
                                            }

                                            /* ❗ FALLBACK */
                                            else {
                                                opt.create = () => document.createElement("div");
                                            }

                                            return ["Custom", opt];
                                        });
                            });


                            function DeleteProcessPopup(connectionId) {

                                const connection = newWorkflowInstance
                                        .getConnections()
                                        .find(c => c.id === connectionId);

                                if (!connection)
                                    return;

                                const controls = connection._processControls || [];

                                if (controls.length === 1) {
                                    newWorkflowInstance.deleteConnection(connection);
                                    return;
                                }




                                // Build dropdown HTML
                                let bodyHtml = `
        <div style="padding:10px">
            <h4>Select process to delete</h4>
            <select id="deleteProcessSelect"
                    style="width:100%;margin-top:10px">
    `;

                                controls.forEach(ctrl => {
                                    bodyHtml += `
            <option value="${ctrl.controlId}">
                ${ctrl.type} (position ${ctrl.location.toFixed(2)})
            </option>`;
                                });

                                bodyHtml += `
            </select>
        </div>
    `;

                                // Modal configuration
                                const modalObj = {
                                    title: "Delete Process",
                                    body: bodyHtml
                                };

                                const buttonArray = [
                                    {
                                        text: "Delete",
                                        click: function () {
                                            confirmDeleteProcess(connection.id);
                                        },
                                        isCloseButton: true
                                    },
                                    {
                                        text: "Cancel",
                                        click: function () {
                                            // nothing
                                        },
                                        isCloseButton: true
                                    }
                                ];

                                modalObj.buttons = buttonArray;

                                // Open modal
                                createModal("dataDxpSplitterValue", modalObj);
                                $(".modal-dialog").addClass("opacity-animate3");
                            }


                            // Reconnect the connections
                            savedState.connections.forEach(connData => {
                                previewWorkflowInstance.connect({
                                    source: connData.source + "_Edit",
                                    target: connData.target + "_Edit",
                                    anchors: connData.anchors,
                                    overlays: connData.overlays,
                                    createEndpoint: false
                                });
                            });
                        });

                        $('#workflowDesignOperationsOriginalDataId div').css('pointer-events', 'none');
                        $('#workflowDesignOperationsOriginalDataId').css("visibility", "visible");
                        $('#workflowDesignOperationsOriginalDataId div.jtk-endpoint').css('display', 'none', '!important');
                        loadPreviewWorkflowDesignProcess(domain, source, previewWorkflowData);
                    }
                }
                if (ParrentWorkFlowId != null && ParrentWorkFlowId != undefined && ParrentWorkFlowId != "") {
                    $("#workflowDesignOperationsOriginalDataId").append("<div id='parrentWorkflowId' class='test'><span>This Workflow is Derived from Version " + ParrentWorkFlowId + "</span></div>")
                }
            }

        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });
}
function previewVersionWorkflowDesign(domain, source, workflowId, version)
{
    domain = $("#visionWorkflowDesinDomainSelectId").val();
    source = $("#visionWorkflowDesinSourceSelectId").val();
    $("#workflowDesignOperationsDataId").html("");
    $("#workflowDesignOperationsDataId").hide();
    $("#conditionHiddenFieldsId").html("");
    $("#workflowDesignOperationsOriginalDataId").html("");
    $("#workflowDesignOperationsOriginalDataId").show();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'previewVersionWorkflowDesign',
        data: {
            'domain': domain,
            'source': source
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var previewWorkflowData = response['previewWorkflowData'];
                var version = response['version'];

                if (previewWorkflowData != null && previewWorkflowData != '' && previewWorkflowData != undefined) {
                    const savedState = JSON.parse(previewWorkflowData);
                    if (savedState != null && !jQuery.isEmptyObject(savedState)) {
                        $('.toggleRightPanelBtn').remove();
                        $('.toggleLeftPanelBtn').remove();
                        $("#versionDetailId").html("version : " + version)
                        previewData['previewData'] = savedState;
                        previewData['version'] = version;
                        $("#workflowDesignOperationsMainDataId").jqxSplitter({width: '100%',
                            height: '709px',
                            orientation: 'vertical',
                            panels: [{size: '99.5%', min: 500, resizable: true}, {size: '0%', min: 0, resizable: true}]});
                        $("#workflowDesignOperationsMainDataId").find("div.jqx-splitter-splitbar-vertical").css("top", "0px", "!important");
                        const canvas = document.getElementById('workflowDesignOperationsOriginalDataId');
                        jsPlumb.ready(function () {
                            previewWorkflowInstance = jsPlumb.getInstance({
                                Container: "workflowDesignOperationsOriginalDataId",
                                Connector: ["Flowchart", {cornerRadius: 10, stub: [40, 60]}],
                                Endpoint: "Dot",
                                EndpointStyle: {fill: "#456", radius: 5},
                                PaintStyle: {stroke: "#0b4a99", strokeWidth: 1},
                                HoverPaintStyle: {stroke: "#007BFF", strokeWidth: 1.5},
                            });

                            // Load nodes
                            savedState.nodes.forEach(nodeData => {
                                var top = nodeData.position.top;
                                var left = nodeData.position.left;
                                top = top.replace("px", "");
                                left = left.replace("px", "");
                                var roleId = nodeData.roleId;
                                if (roleId != null && roleId != '' && roleId != undefined && roleId.indexOf("ConditionNode") > -1)
                                {
                                    var roleLabel = nodeData.roleLabel;
                                    var roleId = nodeData.roleId;
                                    addPreviewConditionNode(roleLabel, roleId + "_Edit", top, left, false, canvas, previewWorkflowInstance);
                                } else if (roleId != null && roleId != '' && roleId != undefined && roleId.indexOf("joint-") > -1)
                                {
                                    var roleLabel = nodeData.roleLabel;
                                    var roleId = nodeData.roleId;
                                    previewJointNode(roleLabel, roleId + "_Edit", top, left, "workflowDesignOperationsOriginalDataId", previewWorkflowInstance);
                                } else {
                                    var roleLabel = nodeData.roleLabel;
                                    var businessRoleId = nodeData.businessRoleId;
                                    var roleId = nodeData.roleId;
                                    var conditionId = nodeData.conditionId;
                                    var imageNameId = nodeData.imageNameId;
                                    var roleCssClass = nodeData.roleCssClass;
                                    addPreviewNode(roleLabel, businessRoleId + "_Edit", roleId + "_Edit", conditionId, imageNameId, roleCssClass, top, left, canvas, previewWorkflowInstance);
                                }
                            });

                            savedState.connections.forEach(connData => {

                                const overLaysArr = connData.overlays;
                                if (!Array.isArray(overLaysArr) || overLaysArr.length === 0)
                                    return;

                                connData.overlays = overLaysArr

                                        // ✅ DO NOT DROP CUSTOM OVERLAYS
                                        .filter(val => {
                                            if (Array.isArray(val) && val[0] === "Custom") {
                                                const opt = val[1] || {};
                                                return opt.show == null || opt.show === "true";
                                            }
                                            return true;
                                        })

                                        // ✅ HANDLE EACH CUSTOM TYPE CORRECTLY
                                        .map(val => {

                                            if (!Array.isArray(val) || val[0] !== "Custom")
                                                return val;

                                            const opt = val[1] || {};

                                            // ✅ RELIABLE ROLE DETECTION
                                            const role =
                                                    opt.role ||
                                                    (opt.id.startsWith("plus-") ? "ADD" :
                                                            opt.id === "delete-conn" ? "DELETE" :
                                                            opt.id.startsWith("decision-") ? "DECISION" :
                                                            "UNKNOWN");

                                            const path = opt.path;
                                            const userLabel = opt.label;

                                            /* ➕ PLUS */
                                            if (role === "ADD") {

                                                opt.create = function () {
                                                    const span = document.createElement("span");
                                                    span.className = "plus-circle";
                                                    span.innerText = "+";
                                                    span.title = opt.title || "Add new control";
                                                    span.style.cursor = "pointer";
                                                    span.style.pointerEvents = "auto";


                                                    // ✅ HIDE IN PREVIEW
                                                    span.style.display =
                                                            window.WORKFLOW_MODE === "EDIT" ? "inline-flex" : "none";

                                                    // ✅ CLICK HANDLER (EDIT MODE)
                                                    span.addEventListener("click", function (e) {
                                                        e.stopPropagation();

                                                        if (window.WORKFLOW_MODE !== "EDIT")
                                                            return;

                                                        addControlPopup(
                                                                opt.targetSourceId,
                                                                opt.targetId,
                                                                opt.connectionId,
                                                                opt.offsetY
                                                                );
                                                    });

                                                    return span;
                                                };
                                            } else if (role === "DELETE") {

                                                const sourceid = connData.source;
                                                const target = connData.target;

                                                opt.create = function () {

                                                    // 🔹 WRAPPER (hover area)
                                                    const wrapper = document.createElement("div");
                                                    wrapper.className = "conn-delete-wrapper";
                                                    wrapper.style.pointerEvents = "auto";

                                                    // 🔹 ICON (actual button)
                                                    const del = document.createElement("div");
                                                    del.className = "conn-delete-icon";
                                                    del.innerHTML = `<img src="images/delete_icon.svg" width="14">`;
                                                    del.style.cursor = "pointer";

                                                    const con = opt.connectionId;

                                                    // ✅ SHOW ONLY IN EDIT MODE
                                                    wrapper.style.display =
                                                            window.WORKFLOW_MODE === "EDIT" ? "flex" : "none";

                                                    // ✅ CLICK HANDLER
                                                    del.onclick = function (e) {
                                                        e.stopPropagation();
                                                        if (window.WORKFLOW_MODE !== "EDIT")
                                                            return;
                                                        if (opt.DeleteLabel) {
                                                            deleteconnectionLink(opt.DeleteLabel, sourceid, target);
                                                        }
                                                    };

                                                    wrapper.appendChild(del);
                                                    return wrapper;
                                                };
                                            }


                                            /* 🔷 DECISION */
                                            else if (role === "DECISION") {
                                                opt.create = function () {

                                                    let width, height;

                                                    if (userLabel === "RETURN") {
                                                        width = "62px";
                                                        height = "65px";
                                                    } else {
                                                        width = "26px";
                                                        height = "28px";
                                                    }

                                                    const wrapper = document.createElement("div");
                                                    wrapper.style.width = "40px";
                                                    wrapper.style.height = "40px";
                                                    wrapper.style.position = "relative";
                                                    wrapper.style.pointerEvents = "auto";
                                                    wrapper.style.cursor = "pointer";
                                                    wrapper.title = userLabel;

                                                    const diamond = document.createElement("div");
                                                    diamond.style.width = "34px";
                                                    diamond.style.height = "34px";
                                                    diamond.style.background = "#fff";
                                                    diamond.style.border = "2px solid #000";
                                                    diamond.style.position = "absolute";
                                                    diamond.style.top = "50%";
                                                    diamond.style.left = "50%";
                                                    diamond.style.transform =
                                                            "translate(-50%, -50%) rotate(45deg)";
                                                    diamond.style.boxSizing = "border-box";


                                                    if (path != 'null' && path != 'undefined') {
                                                        const img = document.createElement("img");
                                                        img.src = path;
                                                        img.style.width = width;
                                                        img.style.height = height;
                                                        img.style.position = "absolute";
                                                        img.style.top = "50%";
                                                        img.style.left = "50%";
                                                        img.style.transform =
                                                                "translate(-50%, -50%) rotate(-45deg)";
                                                        img.style.pointerEvents = "none";

                                                        diamond.appendChild(img);

                                                    } else if (userLabel) {
                                                        // âœ… TEXT MODE (True / False)
                                                        const span = document.createElement("span");
                                                        span.innerText = userLabel;
                                                        span.style.fontSize = "10px";
                                                        span.style.fontWeight = "600";
                                                        span.style.color = "#000";
                                                        span.style.transform = "rotate(-45deg)";
                                                        span.style.pointerEvents = "none";
                                                        diamond.appendChild(span);
                                                    }


                                                    wrapper.appendChild(diamond);

                                                    return wrapper;

                                                };
                                            }

                                            /* ❗ FALLBACK */
                                            else {
                                                opt.create = () => document.createElement("div");
                                            }

                                            return ["Custom", opt];
                                        });
                            });

                            // Reconnect the connections
                            savedState.connections.forEach(connData => {
                                previewWorkflowInstance.connect({
                                    source: connData.source + "_Edit",
                                    target: connData.target + "_Edit",
                                    anchors: connData.anchors,
                                    overlays: connData.overlays,
                                    createEndpoint: false
                                });
                            });
                        });

                        $('#workflowDesignOperationsOriginalDataId div').css('pointer-events', 'none');
                        $('#workflowDesignOperationsOriginalDataId div.jtk-endpoint').css('display', 'none', '!important');
                        loadPreviewWorkflowDesignProcess(domain, source, previewWorkflowData);
                    }
                }
            }

        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });
}

function activateSavedWorkflowDesign()
{
    var domain = $("#visionWorkflowDesinDomainSelectId").val();
    var source = $("#visionWorkflowDesinSourceSelectId").val();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getWorkflowDesignVersions',
        data: {
            'domain': domain,
            'source': source
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var workflowDesignNameVersionsStr = response['workflowDesignNameVersionsStr'];
                if (!(workflowDesignNameVersionsStr != null && workflowDesignNameVersionsStr != ''
                        && workflowDesignNameVersionsStr != undefined))
                {
                    showWorkflowMsg("Message", "There are no workflows configured for this domain and source.");
                    return;
                }
                $("#dialog").html(workflowDesignNameVersionsStr);
                $("#dialog").dialog({resizable: false,
                    title: 'Activate',
                    modal: true,
                    width: 600,
                    height: 'auto',
                    fluid: true,
                    buttons: [
                        {
                            text: (labelObject['Activate'] != null ? labelObject['Activate'] : 'Activate'),
                            click: function () {
                                var workflowId = $("#workflowDesignNameSelectId").val();
                                var workflowName = $("#workflowDesignNameSelectId option:selected").text();
                                var version = $("#workflowDesignVersionsSelectId").val();
                                if (workflowId != null && workflowId != '' && workflowId != undefined
                                        && workflowName != null && workflowName != '' && workflowName != undefined
                                        && version != null && version != '' && version != undefined)
                                {
                                    activateSelectedWorkflowVersion(domain, source, workflowName, workflowId, version);
                                }
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }
                        }, {
                            text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");

                            }
                        }
                    ],
                    open: function (event, ui) {

                    },
                    beforeClose: function (event, ui) {
                        $(this).html("");
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
            }

        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });
}

function activateSelectedWorkflowVersion(domain, source, workflowName, workflowId, version)
{
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'activateWorkflowDesignVersion',
        data: {
            'domain': domain,
            'source': source,
            'workflowName': workflowName,
            'workflowId': workflowId,
            'version': version
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var message = response['Message'];
                if (!(message != null && message != ''
                        && message != undefined))
                {
                    showWorkflowMsg("Message", "There are no workflows configured for this domain and source.");
                    return;
                }
                $("#dialog").html(message);
                $("#dialog").dialog({resizable: false,
                    title: 'Versions',
                    modal: true,
                    width: 600,
                    height: 'auto',
                    fluid: true,
                    buttons: [
                        {
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }
                        }
                    ],
                    open: function (event, ui) {

                    },
                    beforeClose: function (event, ui) {
                        $(this).html("");
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
            }

        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });
}


function showNewWofkflowCondition(id) {
    const val = $('#' + id + '_FilterVal').val();
    const prevVal = $('#' + id + '_Filter').val();
    const jsonObject = JSON.parse(prevVal);
    const number = id.match(/\d+/);
    createOpenConditionBox(jsonObject.source, jsonObject.conditionId, number, "Condition", '');
//    getconditionSelection('Condition', jsonObject.conditionId, number);
    var thenMatch = val.match(/THEN\s+(\w+)/i);
    var thenValue = thenMatch ? thenMatch[1] : null;
    var elseMatch = val.match(/ELSE\s+(\w+)/i);
    var elseValue = elseMatch ? elseMatch[1] : null;
    let t = setInterval(() => {
        if ($('#selectTHENRole' + number).length) {
            $('#selectTHENRole' + number).val(thenValue);
            $.each(jsonObject.paramColArr, function (index, column) {
                var type = column.column;
                $('#' + jsonObject.conditionId + '_FILTER_FORM_TABLE tbody tr').each(function (ind, ele) {
                    var $row = $(ele);
                    if ($row.attr('data-colname') === type) {
                        $('#operator' + jsonObject.conditionId + ind).val(column.operator);
                        $row.find('#' + jsonObject.conditionId + '_' + type).val(column.value);
                    }
                });
            });
        }
    }, 200);
    let e;
    e = setInterval(() => {
        if ($('#selectElseRole' + number).length) {
            $('#selectElseRole' + number).val(elseValue);
            clearInterval(e);
        }
    }, 200);
    setTimeout(() => clearInterval(e), 100000);
}



function getEndpointPositions(connection) {
    try {
        const container = document.getElementById("worflowDesignOperationsDataId");
        const containerRect = container.getBoundingClientRect();

        const sourceEndpoint = connection.endpoints[0];
        const targetEndpoint = connection.endpoints[1];
        const sourceElement = sourceEndpoint.element;
        const targetElement = targetEndpoint.element;

        const sourcePos = sourceElement.getBoundingClientRect();
        const targetPos = targetElement.getBoundingClientRect();

        let sourceX = sourcePos.left + sourcePos.width / 2;
        let sourceY = sourcePos.top + sourcePos.height / 2;
        let targetX = targetPos.left + targetPos.width / 2;
        let targetY = targetPos.top + targetPos.height / 2;

        const sourceAnchor = sourceEndpoint.anchor.type;
        const targetAnchor = targetEndpoint.anchor.type;

        if (sourceAnchor === "Right")
            sourceX += sourcePos.width / 2;
        else if (sourceAnchor === "Left")
            sourceX -= sourcePos.width / 2;
        else if (sourceAnchor === "Top")
            sourceY -= sourcePos.height / 2;
        else if (sourceAnchor === "Bottom")
            sourceY += sourcePos.height / 2;

        if (targetAnchor === "Right")
            targetX += targetPos.width / 2;
        else if (targetAnchor === "Left")
            targetX -= targetPos.width / 2;
        else if (targetAnchor === "Top")
            targetY -= targetPos.height / 2;
        else if (targetAnchor === "Bottom")
            targetY += targetPos.height / 2;

        const endpointRadius = 4;
        if (sourceAnchor === "Right")
            sourceX += endpointRadius;
        else if (sourceAnchor === "Left")
            sourceX -= endpointRadius;
        else if (sourceAnchor === "Top")
            sourceY -= endpointRadius;
        else if (sourceAnchor === "Bottom")
            sourceY += endpointRadius;

        if (targetAnchor === "Right")
            targetX += endpointRadius;
        else if (targetAnchor === "Left")
            targetX -= endpointRadius;
        else if (targetAnchor === "Top")
            targetY -= endpointRadius;
        else if (targetAnchor === "Bottom")
            targetY += endpointRadius;

        sourceX -= containerRect.left;
        sourceY -= containerRect.top;
        targetX -= containerRect.left;
        targetY -= containerRect.top;

        let parent = container;
        while (parent && parent !== document.body) {
            sourceX += parent.scrollLeft || 0;
            sourceY += parent.scrollTop || 0;
            targetX += parent.scrollLeft || 0;
            targetY += parent.scrollTop || 0;
            parent = parent.parentElement;
        }

        console.log(`Source (X: ${sourceX}, Y: ${sourceY}), Target (X: ${targetX}, Y: ${targetY})`);

        return {sourceX, sourceY, targetX, targetY};
    } catch (error) {
        console.error("Error getting endpoint positions:", error);
        return {sourceX: 0, sourceY: 0, targetX: 0, targetY: 0};
    }
}

function getConnectorPathLength(connection) {
    try {
        const container = document.getElementById("worflowDesignOperationsDataId");
        let offsetX = 0;
        let offsetY = 0;

        let parent = container;
        while (parent && parent !== document.body) {
            offsetX += parent.scrollLeft || 0;
            offsetY += parent.scrollTop || 0;
            parent = parent.parentElement;
        }

        console.log(`Container Offset (X: ${offsetX}, Y: ${offsetY})`);

        let pathStr;
        if (connection.connector.canvas) {
            const connectorCanvas = connection.connector.canvas;
            const pathElement = connectorCanvas.querySelector('path');
            if (pathElement) {
                pathStr = pathElement.getAttribute('d');
            }
        } else {
            pathStr = connection.connector.getPathData();
        }

        if (!pathStr) {
            throw new Error("No path data available for connection.");
        }

        console.log("SVG Path:", pathStr);

        const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathElement.setAttribute("d", pathStr);

        const pathLength = pathElement.getTotalLength();
        return pathLength;
    } catch (error) {
        console.error("Error getting connector path length:", error);
        return 0;
    }
}

function createMoveLineAlongConnection(connection, onComplete) {
    try {
        // Get the SVG path element from the connection
        let pathElement;
        if (connection.connector.canvas) {
            const connectorCanvas = connection.connector.canvas;
            pathElement = connectorCanvas.querySelector('path');
        }

        if (!pathElement) {
            console.warn("No SVG path element found for connection.");
            if (onComplete)
                onComplete();
            return;
        }

        const pathLength = pathElement.getTotalLength();
        if (pathLength === 0) {
            console.warn("Path length is zero, cannot animate.");
            if (onComplete)
                onComplete();
            return;
        }

        // Determine the bar length based on the connection type (mimicking previous bar widths)
        const overlayObjects = connection.getOverlays();
        let barLength = 30; // Default for workflowLineDot
        for (const [id, overlay] of Object.entries(overlayObjects || {})) {
            if (overlay.type === "Label") {
                const label = overlay.getLabel();
                if (label === 'Return') {
                    barLength = 50; // For workflowLineReturnDot
                }
            }
        }

        // Get the connection's stroke color (or set a default)
        const strokeColor = pathElement.getAttribute('stroke') || '#000000';
        let barColor = strokeColor;
        for (const [id, overlay] of Object.entries(overlayObjects || {})) {
            if (overlay.type === "Label") {
                const label = overlay.getLabel();
                if (label === 'Return') {
                    barColor = 'red'; // Match workflowLineReturnDot
                } else {
                    barColor = 'green'; // Match workflowLineDot
                }
            }
        }

        // Set up the dash pattern: barLength for the visible segment, (pathLength - barLength) for the gap
        const dashArray = `${barLength},${pathLength - barLength}`;
        pathElement.style.strokeDasharray = dashArray;
        pathElement.style.stroke = barColor;
        pathElement.style.strokeWidth = "3";

        // Animate the dash offset from pathLength to 0
        let dashOffset = pathLength;
        const speed = 5; // Adjust speed of animation (pixels per frame)

        function animate() {
            dashOffset -= speed;
            if (dashOffset < 0)
                dashOffset = 0;

            pathElement.style.strokeDashoffset = dashOffset;

            if (dashOffset <= 0) {
                // Reset the path styles
                pathElement.style.strokeDasharray = 'none';
                pathElement.style.strokeDashoffset = '0';
                pathElement.style.stroke = strokeColor; // Restore original color
                if (onComplete)
                    onComplete();
                return;
            }

            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    } catch (error) {
        console.error("Error animating connection path:", error);
        if (onComplete)
            onComplete();
    }
}

function createGroupConnectionsBySourceAnchor(connections) {
    const groups = {};
    const seenConnections = new Set();
    const targetSourceAnchorMap = {};

    for (const conn of connections) {
        const sourceAnchor = conn.endpoints[0].anchor.type;
        const targetAnchor = conn.endpoints[1].anchor.type;
        if (!sourceAnchor || !targetAnchor) {
            console.warn(`Skipping connection ${conn.sourceId} -> ${conn.targetId}: invalid anchor`);
            continue;
        }

        const connId = `${conn.sourceId}_${conn.targetId}_${sourceAnchor}_${targetAnchor}`;
        if (seenConnections.has(connId)) {
            console.warn(`Duplicate connection detected: ${connId}`);
            continue;
        }
        seenConnections.add(connId);

        const targetSourceKey = `${conn.targetId}_${targetAnchor}_${sourceAnchor}`;
        if (!targetSourceAnchorMap[targetSourceKey]) {
            targetSourceAnchorMap[targetSourceKey] = [];
        }
        targetSourceAnchorMap[targetSourceKey].push(conn);
    }

    for (const conn of connections) {
        const sourceAnchor = conn.endpoints[0].anchor.type;
        const targetAnchor = conn.endpoints[1].anchor.type;
        if (!sourceAnchor || !targetAnchor) {
            continue;
        }

        const targetSourceKey = `${conn.targetId}_${targetAnchor}_${sourceAnchor}`;
        const sourceKey = `${conn.sourceId}_${sourceAnchor}`;

        if (targetSourceAnchorMap[targetSourceKey].length > 1) {
            if (!groups[targetSourceKey]) {
                groups[targetSourceKey] = [];
            }
            groups[targetSourceKey].push(conn);
        } else {
            if (!groups[sourceKey]) {
                groups[sourceKey] = [];
            }
            groups[sourceKey].push(conn);
        }
    }

    console.log("Grouped connections output:", groups);
    return groups;
}

function showWorkflowDesignNavigateProcess() {
    // --- Helper: decide which instance to use ---
    function getActiveWorkflowInstance() {
        if (typeof newWorkflowInstance === "undefined" && typeof previewWorkflowInstance === "undefined") {
            return null;
        }
        if ($('#workflowDesignOperationsOriginalDataId').width() === 0) {
            return newWorkflowInstance;
        } else if (
                $('#workflowDesignOperationsOriginalDataId').width() !== 0 &&
                $('#workflowDesignOperationsDataId').width() !== 0 &&
                $('#workflowDesignOperationsDataId').is(":visible")
                ) {
            return newWorkflowInstance;
        } else {
            return previewWorkflowInstance;
        }
    }

    // --- Helper: remove duplicates and filter valid connections ---
    function getUniqueValidConnections(instance) {
        const connections = instance.getConnections();
        if (!connections || !connections.length)
            return [];

        const seenConnections = new Set();
        const uniqueConnections = connections.filter(conn => {
            const sourceAnchor = conn.endpoints[0].anchor.type || "unknown";
            const targetAnchor = conn.endpoints[1].anchor.type || "unknown";
            const connId = `${conn.sourceId}_${conn.targetId}_${sourceAnchor}`;
            if (seenConnections.has(connId))
                return false;
            seenConnections.add(connId);
            return true;
        });

        return uniqueConnections.filter(conn => {
            const overlays = conn.getOverlays();
            for (const [id, overlay] of Object.entries(overlays || {})) {
                if (overlay.type === "Label") {
                    const label = overlay.getLabel();
                    if (label && label.trim() !== "" && label !== "Deleted") {
                        return true;
                    }
                }
            }
            return false;
        });
    }

    // --- Helper: group connections by source anchor ---
    function createGroupConnectionsBySourceAnchor(connections) {
        const grouped = {};
        connections.forEach(conn => {
            const sourceAnchor = conn.endpoints[0].anchor.type || "unknown";
            const key = `${conn.sourceId}_${sourceAnchor}`;
            if (!grouped[key])
                grouped[key] = [];
            grouped[key].push(conn);
        });
        return grouped;
    }

    // --- Helper: build queue ---
    function buildNavigationQueue(connections, grouped) {
        const queue = [];
        const processedIds = new Set();

        connections.forEach(conn => {
            const sourceAnchor = conn.endpoints[0].anchor.type || "unknown";
            const key = `${conn.sourceId}_${sourceAnchor}`;
            const connId = `${conn.sourceId}_${conn.targetId}_${sourceAnchor}`;
            if (processedIds.has(connId))
                return;

            if (grouped[key] && grouped[key].length > 1) {
                queue.push({type: "group", conns: grouped[key]});
                grouped[key].forEach(c => {
                    const sa = c.endpoints[0].anchor.type || "unknown";
                    processedIds.add(`${c.sourceId}_${c.targetId}_${sa}`);
                });
            } else {
                queue.push({type: "connection", conn});
                processedIds.add(connId);
            }
        });
        return queue;
    }

    // --- Helper: highlight node with improved focus colors ---
    function highlightNode(nodeId) {
        const $node = $("#" + nodeId);
        $node.addClass("highlight-node");
        // Add a subtle background color for emphasis
        $node.css("background-color", "#E0F7FA"); // Light cyan background
        setTimeout(() => {
            $node.removeClass("highlight-node");
            $node.css("background-color", ""); // Reset background
        }, 1000);
    }

    // --- Main Execution ---
    const instance = getActiveWorkflowInstance();
    if (!instance) {
        console.log("The workflow is empty or does not contain any connections to navigate");
        return;
    }

    instance.repaintEverything();
    const connections = getUniqueValidConnections(instance);
    if (!connections.length) {
        console.log("No valid connections to navigate");
        return;
    }

    const grouped = createGroupConnectionsBySourceAnchor(connections);
    const queue = buildNavigationQueue(connections, grouped);

    let currentIndex = 0;

    function playStep(step, callback) {
        if (step.type === "connection") {
            const conn = step.conn;
            highlightNode(conn.sourceId);
            highlightNode(conn.targetId);
            createMoveLineAlongConnection(conn, callback);
        } else if (step.type === "group") {
            let completed = 0;
            step.conns.forEach(conn => {
                highlightNode(conn.sourceId);
                highlightNode(conn.targetId);
                createMoveLineAlongConnection(conn, () => {
                    completed++;
                    if (completed === step.conns.length)
                        callback();
                });
            });
        }
    }

    function playNext() {
        if (currentIndex >= queue.length) {
            console.log("Navigation finished at 12:26 PM IST on Tuesday, September 30, 2025.");
            return;
        }
        const step = queue[currentIndex];
        playStep(step, () => {
            currentIndex++;
            setTimeout(playNext, 600); // Auto-advance every 600ms
        });
    }

    // Start the navigation automatically
    console.log("Starting workflow navigation at 12:26 PM IST on Tuesday, September 30, 2025.");
    playNext();
}
function openWorkflowAbout() {

    /* ================================
     * 1. GET ACTIVE WORKFLOW INSTANCE
     * ================================ */
    function getActiveWorkflowInstance() {
        if (typeof newWorkflowInstance === "undefined" &&
                typeof previewWorkflowInstance === "undefined") {
            return null;
        }

        if ($('#workflowDesignOperationsOriginalDataId').width() === 0) {
            return newWorkflowInstance;
        } else if (
                $('#workflowDesignOperationsOriginalDataId').width() !== 0 &&
                $('#workflowDesignOperationsDataId').width() !== 0 &&
                $('#workflowDesignOperationsDataId').is(":visible")
                ) {
            return newWorkflowInstance;
        } else {
            return previewWorkflowInstance;
        }
    }

    const workflowInstance = getActiveWorkflowInstance();
    if (!workflowInstance)
        return;

    const aboutData = getWorkflowAboutData(workflowInstance);
    const steps = buildWorkflowExecutionSteps(workflowInstance);
    const conditions = buildWorkflowConditions(workflowInstance);

    const html = buildWorkflowAboutHtml(aboutData, steps, conditions);

    $("#workflowDesignOperationsId")
            .append("<div id='workflowDetailsId' class='workflowDetailsclass'></div>");
    $("#workflowDetailsId").html(html);   // set main content FIRST

    $("#workflowDesignOperationsHeaderId").append(
            "<div class='workflowdetaildToggelerBtn' onclick='workflowdetaildTogger()'>" +
            "<i id='workflowToggleIcon' class='fa fa-arrow-circle-o-right'></i>" +
            "</div>"
            );

    $("#workflowDesignOperationsOriginalDataId").jqxSplitter({
        width: '100%',
        height: '709px',
        orientation: 'vertical',
        panels: [{size: '0%', min: 0}, {size: '100%', min: 500}]
    });




    /* ================================
     * 2. WORKFLOW OVERVIEW DATA
     * ================================ */
    function getWorkflowAboutData(workflowInstance) {

        const connections = workflowInstance.getAllConnections();
        const nodes = document.querySelectorAll(".node");

        let roles = new Set();
        let hasEmail = false;
        let hasSAP = false;

        nodes.forEach(node => {
            const label = node.innerText.trim();
            if (label && label !== "+")
                roles.add(label);
        });

        connections.forEach(conn => {
            if (conn._processControls) {
                conn._processControls.forEach(ctrl => {
                    if (ctrl.type === "EMAIL-NOTIFICATION")
                        hasEmail = true;
                    if (ctrl.type.toLowerCase().includes("sap"))
                        hasSAP = true;
                });
            }
        });

        return {
            domain: $("#domainSelect").val() || "Product",
            process: $("#processSelect").val() || "Create",
            workflowType: $("#workflowTypeSelect").val() || "Sequential",
            version: $("#workflowVersion").text() || "v1",
            totalSteps: nodes.length,
            totalConnections: connections.length,
            roles: [...roles],
            integrations: {email: hasEmail, sap: hasSAP}
        };
    }

    /* ================================
     * 3. EXECUTION STEPS DATA
     * ================================ */
    function buildWorkflowExecutionSteps(workflowInstance) {

        const connections = workflowInstance.getAllConnections();
        const steps = [];

        function getNodeLabel(id) {
            const el = document.getElementById(id);
            return el ? el.innerText.trim() : id;
        }

        connections.forEach(conn => {

            let action = "Move";

            Object.values(conn.getOverlays()).forEach(ov => {
                if (ov.type === "Label") {
                    const txt = ov.getLabel().replace(/<[^>]*>/g, "").trim();
                    if (txt)
                        action = txt;
                }
            });

            steps.push({
                from: getNodeLabel(conn.sourceId),
                to: getNodeLabel(conn.targetId),
                action
            });
        });

        return steps;
    }

    /* ================================
     * 3.1 CONDITIONS DATA
     * ================================ */
    function buildWorkflowConditions(workflowInstance) {

        const connections = workflowInstance.getAllConnections();
        const conditions = [];

        function getNodeLabel(id) {
            const el = document.getElementById(id);
            return el ? el.innerText.trim() : id;
        }

        connections.forEach(conn => {

            let conditionText = null;

            Object.values(conn.getOverlays()).forEach(ov => {
                if (ov.type === "Label") {
                    const txt = ov.getLabel().replace(/<[^>]*>/g, "").trim();
                    if (txt && !["SUBMIT", "APPROVE"].includes(txt.toUpperCase())) {
                        conditionText = txt;
                    }
                }
            });

            if (conditionText) {
                conditions.push({
                    from: getNodeLabel(conn.sourceId),
                    condition: conditionText,
                    to: getNodeLabel(conn.targetId)
                });
            }
        });

        return conditions;
    }

    /* ================================
     * 4. EXECUTION FLOW UI
     * ================================ */
    function buildExecutionFlowUI(steps) {
        return `
        <div class="execution-flow-ui">
            ${steps.map((s, i) => `
                <div class="flow-step">
                    <div class="step-index">${i + 1}</div>
                    <div class="step-body">
                        <span class="node">${s.from}</span>
                        <span class="action ${s.action.toLowerCase()}">${s.action}</span>
                        <span class="arrow">→</span>
                        <span class="node">${s.to}</span>
                    </div>
                </div>
            `).join("")}
        </div>`;
    }

    /* ================================
     * 5. FINAL TAB UI (ENHANCED OVERVIEW)
     * ================================ */
    function buildWorkflowAboutHtml(data, steps, conditions) {

        return `
        <div class="about-container">
            <div class="about-tabs">
                <button class="about-tab active" onclick="openAboutTab(event,'tabOverview')">Overview</button>            
                <button class="about-tab" onclick="openAboutTab(event,'tabFlow')">Execution Flow</button>
                <button class="about-tab" onclick="openconditiontabTab(event)">Conditions</button>
          <button class="about-tab" onclick="openAboutTab(event,'tabIntegrations')">Integrations</button>
            </div>

            <!-- OVERVIEW -->
            <div id="tabOverview" class="about-tab-content active">

                <div class="overview-header">
                    <h2>${data.domain} ${data.process} Workflow</h2>
                    <p class="overview-subtitle">
                        A ${data.workflowType.toLowerCase()} workflow with conditional routing and approval governance.
                    </p>

                    <div class="overview-badges">
                        <span class="badge primary">${data.workflowType}</span>
                        <span class="badge">Version ${data.version}</span>
                        <span class="badge success">Active</span>
                    </div>
                </div>

                <div class="overview-stats">
                    <div class="stat-box"><b>📦 Domain</b><span>${data.domain}</span></div>
                    <div class="stat-box"><b>⚙️ Process</b><span>${data.process}</span></div>
                    <div class="stat-box"><b>👥 Roles</b><span>${data.roles.length}</span></div>
                    <div class="stat-box"><b>🧩 Steps</b><span>${data.totalSteps}</span></div>
                    <div class="stat-box"><b>🔗 Connections</b><span>${data.totalConnections}</span></div>
                    <div class="stat-box"><b>🔀 Conditions</b><span>${conditions.length}</span></div>
                </div>

                <div class="overview-section">
                    <h3>Workflow Description</h3>
                    <p>
                        This workflow manages ${data.process.toLowerCase()} operations for ${data.domain.toLowerCase()} records.
                        Requests are initiated by the Requestor and evaluated through defined conditions.
                        Based on the outcome, requests are routed to approvers or managers, ensuring compliance and control.
                    </p>
                </div>

                <div class="overview-section">
                    <h3>High-Level Flow</h3>
                    <ul class="flow-summary">
                        <li>Requestor submits the request</li>
                        <li>Condition checks are evaluated</li>
                        <li>Approved paths move forward</li>
                        <li>Rejected paths are rerouted</li>
                        <li>Final decision completes the workflow</li>
                    </ul>
                </div>

                <div class="overview-section">
                    <h3>Conditions Preview</h3>
                    <div class="condition-preview">
                        ${conditions.length === 0
                ? "<span class='muted'>No conditions defined</span>"
                : conditions.map(c => `
                                <span class="condition-pill">
                                    ${c.condition}: ${c.from} → ${c.to}
                                </span>
                            `).join("")}
                    </div>
                </div>

            </div>

          

           

            <!-- FLOW -->
            <div id="tabFlow" class="about-tab-content">
                <div class="about-card">
                    ${buildExecutionFlowUI(steps)}
                </div>
            </div>

            <!-- CONDITIONS -->
   <div id="tabConditions" class="about-tab-content">
    <div class="about-card">
        <div id="conditionsContent">
            <div class="empty-state">No conditions loaded</div>
        </div>
    </div>
</div>
         <!-- INTEGRATIONS -->
            <div id="tabIntegrations" class="about-tab-content">
                <div class="about-card">
                    ${data.integrations.email ? "<div>✉ Email Notification</div>" : ""}
                    ${data.integrations.sap ? "<div>🔗 SAP Integration</div>" : ""}
                </div>
            </div>

        </div>`;
    }
}


//
//function openWorkflowAbout() {
//
//    /* ================================
//     * 1. GET ACTIVE WORKFLOW INSTANCE
//     * ================================ */
//    function getActiveWorkflowInstance() {
//        if (typeof newWorkflowInstance === "undefined" &&
//            typeof previewWorkflowInstance === "undefined") {
//            return null;
//        }
//
//        if ($('#workflowDesignOperationsOriginalDataId').width() === 0) {
//            return newWorkflowInstance;
//        } else if (
//            $('#workflowDesignOperationsOriginalDataId').width() !== 0 &&
//            $('#workflowDesignOperationsDataId').width() !== 0 &&
//            $('#workflowDesignOperationsDataId').is(":visible")
//        ) {
//            return newWorkflowInstance;
//        } else {
//            return previewWorkflowInstance;
//        }
//    }
//
//    const workflowInstance = getActiveWorkflowInstance();
//    if (!workflowInstance) return;
//
//    const aboutData = getWorkflowAboutData(workflowInstance);
//    const steps = buildWorkflowExecutionSteps(workflowInstance);
//
//    /* 🔹 ADDED */
//    const conditions = buildWorkflowConditions(workflowInstance);
//
//    const html = buildWorkflowAboutHtml(aboutData, steps, conditions);
//
//    $("#workflowDesignOperationsId")
//        .append("<div id='workflowDetailsId' class='workflowDetailsclass'></div>");
//
//    $("#workflowDetailsId").html(html);
//
//    $("#workflowDesignOperationsOriginalDataId").jqxSplitter({
//        width: '100%',
//        height: '709px',
//        orientation: 'vertical',
//        panels: [{ size: '0%', min: 0 }, { size: '100%', min: 500 }]
//    });
//
//    /* ================================
//     * 2. WORKFLOW OVERVIEW DATA
//     * ================================ */
//    function getWorkflowAboutData(workflowInstance) {
//
//        const connections = workflowInstance.getAllConnections();
//        const nodes = document.querySelectorAll(".node");
//
//        let roles = new Set();
//        let hasEmail = false;
//        let hasSAP = false;
//
//        nodes.forEach(node => {
//            const label = node.innerText.trim();
//            if (label && label !== "+") roles.add(label);
//        });
//
//        connections.forEach(conn => {
//            if (conn._processControls) {
//                conn._processControls.forEach(ctrl => {
//                    if (ctrl.type === "EMAIL_NOTIFICATION") hasEmail = true;
//                    if (ctrl.type.toLowerCase().includes("sap")) hasSAP = true;
//                });
//            }
//        });
//
//        return {
//            domain: $("#domainSelect").val() || "Asset",
//            process: $("#processSelect").val() || "Create",
//            workflowType: $("#workflowTypeSelect").val() || "Sequential",
//            version: $("#workflowVersion").text() || "v1",
//            totalSteps: nodes.length,
//            totalConnections: connections.length,
//            roles: [...roles],
//            integrations: { email: hasEmail, sap: hasSAP }
//        };
//    }
//
//    /* ================================
//     * 3. EXECUTION STEPS DATA
//     * ================================ */
//    function buildWorkflowExecutionSteps(workflowInstance) {
//
//        const connections = workflowInstance.getAllConnections();
//        const steps = [];
//
//        function getNodeLabel(id) {
//            const el = document.getElementById(id);
//            return el ? el.innerText.trim() : id;
//        }
//
//        connections.forEach(conn => {
//
//            let action = "Move";
//
//            Object.values(conn.getOverlays()).forEach(ov => {
//                if (ov.type === "Label") {
//                    const txt = ov.getLabel().replace(/<[^>]*>/g, "").trim();
//                    if (txt) action = txt;
//                }
//            });
//
//            steps.push({
//                from: getNodeLabel(conn.sourceId),
//                to: getNodeLabel(conn.targetId),
//                action
//            });
//        });
//
//        return steps;
//    }
//
//    /* ================================
//     * 3.1 CONDITIONS DATA  (🔹 ADDED)
//     * ================================ */
//    function buildWorkflowConditions(workflowInstance) {
//
//        const connections = workflowInstance.getAllConnections();
//        const conditions = [];
//
//        function getNodeLabel(id) {
//            const el = document.getElementById(id);
//            return el ? el.innerText.trim() : id;
//        }
//
//        connections.forEach(conn => {
//
//            let conditionText = null;
//
//            Object.values(conn.getOverlays()).forEach(ov => {
//                if (ov.type === "Label") {
//                    const txt = ov.getLabel().replace(/<[^>]*>/g, "").trim();
//
//                    // consider RETURN / REJECT / CONDITION only
//                    if (txt && !["SUBMIT", "APPROVE"].includes(txt.toUpperCase())) {
//                        conditionText = txt;
//                    }
//                }
//            });
//
//            if (conditionText) {
//                conditions.push({
//                    from: getNodeLabel(conn.sourceId),
//                    condition: conditionText,
//                    to: getNodeLabel(conn.targetId)
//                });
//            }
//        });
//
//        return conditions;
//    }
//
//    /* ================================
//     * 4. EXECUTION FLOW UI
//     * ================================ */
//    function buildExecutionFlowUI(steps) {
//        return `
//        <div class="execution-flow-ui">
//            ${steps.map((s, i) => `
//                <div class="flow-step">
//                    <div class="step-index">${i + 1}</div>
//                    <div class="step-body">
//                        <span class="node">${s.from}</span>
//                        <span class="action ${s.action.toLowerCase()}">${s.action}</span>
//                        <span class="arrow">→</span>
//                        <span class="node">${s.to}</span>
//                    </div>
//                </div>
//            `).join("")}
//        </div>`;
//    }
//
//    /* ================================
//     * 5. FINAL TAB UI (MODIFIED)
//     * ================================ */
//    function buildWorkflowAboutHtml(data, steps, conditions) {
//
//        return `
//        <div class="about-container">
//
//            <div class="about-tabs">
//                <button class="about-tab active" onclick="openAboutTab(event,'tabOverview')">Overview</button>
//                <button class="about-tab" onclick="openAboutTab(event,'tabRoles')">Roles</button>
//                <button class="about-tab" onclick="openAboutTab(event,'tabIntegrations')">Integrations</button>
//                <button class="about-tab" onclick="openAboutTab(event,'tabFlow')">Execution Flow</button>
//                <button class="about-tab" onclick="openAboutTab(event,'tabConditions')">Conditions</button>
//            </div>
//
//            <!-- OVERVIEW -->
//            <div id="tabOverview" class="about-tab-content active">
//                <div class="about-card">
//                    <div class="about-grid">
//                        <div><span>Domain</span><b>${data.domain}</b></div>
//                        <div><span>Process</span><b>${data.process}</b></div>
//                        <div><span>Workflow Type</span><b>${data.workflowType}</b></div>
//                        <div><span>Version</span><b>${data.version}</b></div>
//                        <div><span>Steps</span><b>${data.totalSteps}</b></div>
//                        <div><span>Connections</span><b>${data.totalConnections}</b></div>
//                    </div>
//                </div>
//            </div>
//
//            <!-- ROLES -->
//            <div id="tabRoles" class="about-tab-content">
//                <div class="about-card">
//                    ${data.roles.map(r => `<span class="chip">${r}</span>`).join("")}
//                </div>
//            </div>
//
//            <!-- INTEGRATIONS -->
//            <div id="tabIntegrations" class="about-tab-content">
//                <div class="about-card">
//                    ${data.integrations.email ? "<div>✉ Email Notification</div>" : ""}
//                    ${data.integrations.sap ? "<div>🔗 SAP Integration</div>" : ""}
//                </div>
//            </div>
//
//            <!-- FLOW -->
//            <div id="tabFlow" class="about-tab-content">
//                <div class="about-card">
//                    ${buildExecutionFlowUI(steps)}
//                </div>
//            </div>
//
//            <!-- CONDITIONS (🔹 NEW TAB) -->
//            <div id="tabConditions" class="about-tab-content">
//                <div class="about-card">
//                    ${conditions.length === 0 ? `
//                        <div class="empty-state">No conditions defined</div>
//                    ` : `
//                        <table class="conditions-table">
//                            <thead>
//                                <tr>
//                                    <th>From</th>
//                                    <th>Condition</th>
//                                    <th>To</th>
//                                </tr>
//                            </thead>
//                            <tbody>
//                                ${conditions.map(c => `
//                                    <tr>
//                                        <td>${c.from}</td>
//                                        <td><span class="condition-chip">${c.condition}</span></td>
//                                        <td>${c.to}</td>
//                                    </tr>
//                                `).join("")}
//                            </tbody>
//                        </table>
//                    `}
//                </div>
//            </div>
//
//        </div>`;
//    }
//}

//function openAboutTab(evt, tabId) {
//    document.querySelectorAll('.about-tab-content')
//        .forEach(t => t.classList.remove('active'));
//
//    document.querySelectorAll('.about-tab')
//        .forEach(b => b.classList.remove('active'));
//
//    document.getElementById(tabId).classList.add('active');
//    evt.currentTarget.classList.add('active');
//}

function openAboutTab(evt, tabId) {

    document.querySelectorAll('.about-tab-content')
            .forEach(t => t.classList.remove('active'));

    document.querySelectorAll('.about-tab')
            .forEach(b => b.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');

    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add('active');
    } else {
        document
                .querySelector(`.about-tab[onclick*="${tabId}"]`)
                .classList.add('active');
    }
}



//function openWorkflowAbout() {
//
//    /* ================================
//     * 1. GET ACTIVE WORKFLOW INSTANCE
//     * ================================ */
//    function getActiveWorkflowInstance() {
//        if (typeof newWorkflowInstance === "undefined" &&
//                typeof previewWorkflowInstance === "undefined") {
//            return null;
//        }
//
//        if ($('#workflowDesignOperationsOriginalDataId').width() === 0) {
//            return newWorkflowInstance;
//        } else if (
//                $('#workflowDesignOperationsOriginalDataId').width() !== 0 &&
//                $('#workflowDesignOperationsDataId').width() !== 0 &&
//                $('#workflowDesignOperationsDataId').is(":visible")
//                ) {
//            return newWorkflowInstance;
//        } else {
//            return previewWorkflowInstance;
//        }
//    }
//
//    const workflowInstance = getActiveWorkflowInstance();
//    if (!workflowInstance)
//        return;
//
//    const aboutData = getWorkflowAboutData(workflowInstance);
//    const steps = buildWorkflowExecutionSteps(workflowInstance);
//    const html = buildWorkflowAboutHtml(aboutData, steps);
//
//    $("#workflowDesignOperationsId").append("<div id='workflowDetailsId' class = 'workflowDetailsclass'>");
//    $("#workflowDetailsId").html(html);
//     $("#workflowDesignOperationsOriginalDataId").jqxSplitter({width: '100%',
//                        height: '709px',
//                        orientation: 'vertical',
//                        panels: [{size: '0%', min: 0, resizable: true}, {size: '100%', min: 500, resizable: true}]});
//
//
//
////    createModal("dataDxpSplitterValue", {
////        title: "About This Workflow",
////        body: html,
////        buttons: [{ text: "Close", isCloseButton: true }]
////    });
//
//    /* ================================
//     * 2. WORKFLOW OVERVIEW DATA
//     * ================================ */
//    function getWorkflowAboutData(workflowInstance) {
//
//        const connections = workflowInstance.getAllConnections();
//        const nodes = document.querySelectorAll(".node");
//
//        let roles = new Set();
//        let hasEmail = false;
//        let hasSAP = false;
//
//        nodes.forEach(node => {
//            const label = node.innerText.trim();
//            if (label && label !== "+")
//                roles.add(label);
//        });
//
//        connections.forEach(conn => {
//            if (conn._processControls) {
//                conn._processControls.forEach(ctrl => {
//                    if (ctrl.type === "EMAIL_NOTIFICATION")
//                        hasEmail = true;
//                    if (ctrl.type.toLowerCase().includes("sap"))
//                        hasSAP = true;
//                });
//            }
//        });
//
//        return {
//            domain: $("#domainSelect").val() || "Asset",
//            process: $("#processSelect").val() || "Create",
//            workflowType: $("#workflowTypeSelect").val() || "Sequential",
//            version: $("#workflowVersion").text() || "v1",
//            totalSteps: nodes.length,
//            totalConnections: connections.length,
//            roles: Array.from(roles),
//            integrations: {email: hasEmail, sap: hasSAP}
//        };
//    }
//
//    /* ================================
//     * 3. EXECUTION STEPS (DATA)
//     * ================================ */
//    function buildWorkflowExecutionSteps(workflowInstance) {
//
//        const connections = workflowInstance.getAllConnections();
//        const steps = [];
//
//        function getNodeLabel(id) {
//            const el = document.getElementById(id);
//            return el ? el.innerText.trim().replace(/\s+/g, " ") : id;
//        }
//
//        connections.forEach(conn => {
//
//            const from = getNodeLabel(conn.sourceId);
//            const to = getNodeLabel(conn.targetId);
//            let action = "Move";
//
//            const overlays = conn.getOverlays();
//            Object.values(overlays).forEach(ov => {
//                if (ov.type === "Label" && ov.getLabel) {
//                    const txt = ov.getLabel().replace(/<[^>]*>/g, "").trim();
//                    if (txt)
//                        action = txt;
//                }
//            });
//
//            steps.push({from, to, action});
//
//            if (conn._processControls) {
//                conn._processControls.forEach(ctrl => {
//                    if (ctrl.type === "EMAIL_NOTIFICATION") {
//                        steps.push({
//                            from: "System",
//                            to,
//                            action: "Email Notification"
//                        });
//                    }
//                    if (ctrl.type.toLowerCase().includes("sap")) {
//                        steps.push({
//                            from: "System",
//                            to: "SAP",
//                            action: "Transfer"
//                        });
//                    }
//                });
//            }
//        });
//
//        return steps;
//    }
//
//    /* ================================
//     * 4. EXECUTION FLOW UI (VISUAL)
//     * ================================ */
//    function buildExecutionFlowUI(steps) {
//
//        return `
//        <div class="execution-flow-ui">
//            ${steps.map((s, i) => `
//                <div class="flow-step">
//                    <div class="step-index">${i + 1}</div>
//                    <div class="step-body">
//                        <span class="node from">${s.from}</span>
//                        <span class="action ${s.action.toLowerCase().replace(/\s/g, "-")}">
//                            ${s.action}
//                        </span>
//                        <span class="arrow">→</span>
//                        <span class="node to">${s.to}</span>
//                    </div>
//                </div>
//            `).join("")}
//        </div>`;
//    }
//
//    /* ================================
//     * 5. FINAL ABOUT UI
//     * ================================ */
//    function buildWorkflowAboutHtml(data, steps) {
//
//        return `
//        <div class="about-container">
//
//            <div class="about-card">
//                <h3>Workflow Overview</h3>
//                <div class="about-grid">
//                    <div><span>Domain</span><b>${data.domain}</b></div>
//                    <div><span>Process</span><b>${data.process}</b></div>
//                    <div><span>Workflow Type</span><b>${data.workflowType}</b></div>
//                    <div><span>Version</span><b>${data.version}</b></div>
//                    <div><span>Steps</span><b>${data.totalSteps}</b></div>
//                    <div><span>Connections</span><b>${data.totalConnections}</b></div>
//                </div>
//            </div>
//
//            <div class="about-card">
//                <h3>Roles Involved</h3>
//                <div class="chip-container">
//                    ${data.roles.map(r => `<span class="chip">${r}</span>`).join("")}
//                </div>
//            </div>
//
//            ${(data.integrations.email || data.integrations.sap) ? `
//            <div class="about-card">
//                <h3>Integrations</h3>
//                <ul class="integration-list">
//                    ${data.integrations.email ? "<li>✉ Email Notification</li>" : ""}
//                    ${data.integrations.sap ? "<li>🔗 SAP Integration</li>" : ""}
//                </ul>
//            </div>` : ""}
//
//            <div class="about-card">
//                <h3>Workflow Execution Flow</h3>
//                ${buildExecutionFlowUI(steps)}
//            </div>
//
//        </div>`;
//    }
//}

//function openWorkflowAbout() {
//    function getActiveWorkflowInstance() {
//        if (typeof newWorkflowInstance === "undefined" && typeof previewWorkflowInstance === "undefined") {
//            return null;
//        }
//        if ($('#workflowDesignOperationsOriginalDataId').width() === 0) {
//            return newWorkflowInstance;
//        } else if (
//                $('#workflowDesignOperationsOriginalDataId').width() !== 0 &&
//                $('#workflowDesignOperationsDataId').width() !== 0 &&
//                $('#workflowDesignOperationsDataId').is(":visible")
//                ) {
//            return newWorkflowInstance;
//        } else {
//            return previewWorkflowInstance;
//        }
//    }
//    const workflowInstance = getActiveWorkflowInstance();
//    if (!workflowInstance)
//        return;
//
//    const aboutData = getWorkflowAboutData(workflowInstance);
//    const steps = buildWorkflowExecutionSteps(workflowInstance);
//    const html = buildWorkflowAboutHtml(aboutData, steps);
//    
//
//    const modalObj = {
//        title: "About This Workflow",
//        body: html,
//        buttons: [
//            {
//                text: "Close",
//                isCloseButton: true
//            }
//        ]
//    };
//    createModal("dataDxpSplitterValue", modalObj);
//
//    function getWorkflowAboutData() {
//        var newWorkflowInstance1 = getActiveWorkflowInstance();
//        const connections = workflowInstance.getAllConnections();
//        const nodes = document.querySelectorAll(".node");
//
//        let roles = new Set();
//        let hasEmail = false;
//        let hasSAP = false;
//        let conditionCount = 0;
//
//        nodes.forEach(node => {
//            const label = node.innerText.trim();
//            if (label)
//                roles.add(label);
//        });
//
//        connections.forEach(conn => {
//            if (conn._processControls) {
//                conn._processControls.forEach(ctrl => {
//                    if (ctrl.type === "EMAIL_NOTIFICATION")
//                        hasEmail = true;
//                    if (ctrl.type.toLowerCase().includes("sap"))
//                        hasSAP = true;
//                    if (ctrl.type.toLowerCase().includes("condition"))
//                        conditionCount++;
//                });
//            }
//        });
//
//        return {
//            domain: $("#domainSelect").val() || "Asset",
//            process: $("#processSelect").val() || "Create",
//            workflowType: $("#workflowTypeSelect").val() || "Sequential",
//            version: $("#workflowVersion").text() || "v1",
//            totalSteps: nodes.length,
//            totalConnections: connections.length,
//            conditions: conditionCount,
//            roles: Array.from(roles),
//            integrations: {
//                email: hasEmail,
//                sap: hasSAP
//            }
//        };
//    }
//    function buildWorkflowExecutionSteps(workflowInstance) {
//
//        const connections = workflowInstance.getAllConnections();
//        const steps = [];
//
//        function getNodeLabel(nodeId) {
//            const el = document.getElementById(nodeId);
//            return el ? el.innerText.trim().replace(/\s+/g, " ") : nodeId;
//        }
//
//        connections.forEach(conn => {
//
//            const from = getNodeLabel(conn.sourceId);
//            const to = getNodeLabel(conn.targetId);
//
//            let action = "moves";
//
//            // Read label overlays (SUBMIT / APPROVE / RETURN / etc.)
//            const overlays = conn.getOverlays();
//            Object.values(overlays).forEach(ov => {
//                if (ov.type === "Label" && ov.getLabel) {
//                    const text = ov.getLabel()
//                            .replace(/<[^>]*>/g, "")
//                            .trim();
//                    if (text)
//                        action = text.toLowerCase();
//                }
//            });
//
//            steps.push(
//                    `The workflow ${action} from <b>${from}</b> to <b>${to}</b>.`
//                    );
//
//            // Process controls (Email / SAP / System)
//            if (conn._processControls) {
//                conn._processControls.forEach(ctrl => {
//                    if (ctrl.type === "EMAIL_NOTIFICATION") {
//                        steps.push(
//                                `An email notification is triggered during this transition.`
//                                );
//                    }
//                    if (ctrl.type.toLowerCase().includes("sap")) {
//                        steps.push(
//                                `A system integration is executed to transfer data to SAP.`
//                                );
//                    }
//                });
//            }
//
//            // Condition handling
//            Object.values(overlays).forEach(ov => {
//                if (ov.type === "Custom") {
//                    const el = ov.getElement && ov.getElement();
//                    if (!el)
//                        return;
//
//                    const text = el.innerText.toLowerCase();
//                    if (text === "true") {
//                        steps.push(
//                                `If the condition evaluates to <b>True</b>, the workflow proceeds to <b>${to}</b>.`
//                                );
//                    }
//                    if (text === "false") {
//                        steps.push(
//                                `If the condition evaluates to <b>False</b>, the workflow proceeds to <b>${to}</b>.`
//                                );
//                    }
//                }
//            });
//        });
//
//        return steps;
//    }
//    function buildWorkflowAboutHtml(data, steps) {
//
//        return `
//    <div class="about-container">
//
//        <!-- OVERVIEW -->
//        <div class="about-card">
//            <h3>Workflow Overview</h3>
//            <div class="about-grid">
//                <div><span>Domain</span><b>${data.domain}</b></div>
//                <div><span>Process</span><b>${data.process}</b></div>
//                <div><span>Workflow Type</span><b>${data.workflowType}</b></div>
//                <div><span>Version</span><b>${data.version}</b></div>
//                <div><span>Total Steps</span><b>${data.totalSteps}</b></div>
//                <div><span>Connections</span><b>${data.totalConnections}</b></div>
//            </div>
//        </div>
//
//        <!-- ROLES -->
//        <div class="about-card">
//            <h3>Roles Involved</h3>
//            <div class="chip-container">
//                ${data.roles.map(r => `<span class="chip">${r}</span>`).join("")}
//            </div>
//        </div>
//
//        <!-- INTEGRATIONS -->
//        <div class="about-card">
//            <h3>Integrations</h3>
//            <ul class="integration-list">
//                ${data.integrations.email ? "<li>✉ Email Notification</li>" : ""}
//                ${data.integrations.sap ? "<li>🔗 SAP Integration</li>" : ""}
//            </ul>
//        </div>
//
//        <!-- EXECUTION FLOW -->
//        <div class="about-card">
//            <h3>Workflow Execution Flow</h3>
//            <ol class="execution-flow">
//                ${steps.map(s => `<li>${s}</li>`).join("")}
//            </ol>
//        </div>
//
//    </div>
//    `;
//    }
//
//}

function migrateDatabaseData(menu) {
    replacejscssfile("", "", "");
    menu = menu != null ? menu : "";
    globalETLLoadMenu = menu != null ? menu : "";
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "getiDXPDataPiping",
        cache: false,
        data: {
            treeId: 'MM_SOURCE_AVAILABLE_CONNECTION_TREE',
        },
        success: function (response) {


            if (response != null && !jQuery.isEmptyObject(response)) {
                var currentV10ConnObj = response['currentV10ConnObj'];
                savedDBData["Current_V10"] = currentV10ConnObj;
                var availableConnections = response['availableConnections'];
                $.each(availableConnections, function (i) {
                    var connObj = availableConnections[i];
                    var connectionName = connObj['CONNECTION_NAME']
                    savedDBData[connectionName] = connObj;
                })

                var connectionsDivStr = response['connectionDivsStr'];
                $("#DxpVisualizationbutton").hide()
                $(".searchMainWrap").show();
                $(".languageSelectionBox").show();
                $(".settingheaderImage").show();
                $("#pageBodyContent").remove();
                $("#pageBody").append('<div class="page-body-content" id="pageBodyContent"><div id ="etlPageBody" class="etl-page-body"></div></div></div>');
                $("#etlPageBody").append(connectionsDivStr);
                var componentsDivStr = response['componentsDiv'];
                $("#etlIconGroup").append(componentsDivStr);
                var connMainDivStr = response['connMainDiv'];
                $("#ConnInnerDiv").append(connMainDivStr);
                $("#treePageSize").val(50);
                var treeObj = {};
                try {
                    treeObj = response['treeObj']
                } catch (e) {
                }

                showSavedJobs();
                splitterAdjustment(treeObj, connectionsDivStr);
                initializeOperators();
                setTimeout(function () {
                    $(window).resize(function () {
                        var $flowchart = $('#' + flowChartWorkSpaceId);
                        $flowchart.flowchart("setPositionRatio", 1);
                        $("#feedListExpander").css('height', '100%');
                        var savedSourcesHeight = $("#savedSources").height();
                        //                        $("#avaialableJobsTree").css("height", parseInt(savedSourcesHeight) + "px");
                        $("#panelavaialableJobsTree").css("height", (parseInt(savedSourcesHeight) + 20) + "px");
                        /*$("#feedListContainer").parent().css("position","relative");
                         $("#feedListContainer").parent().css("top","25px");
                         
                         $("#feedHeader").css("position","relative");
                         $("#feedHeader").css("top","45px");*/

                    }).resize();
                }, 600);
                $("#etlIconGroup div").draggable({
                    cursor: "move",
                    opacity: 0.7,
                    helper: 'clone',
                    containment: "#jqxWidget",
                    //                                appendTo: 'body',
                    zIndex: 999999,
                    helper: function (event, ui) {
                        var $this = $(this);
                        var innerText = $this.text();
                        var descripttion = $this.attr("title");
                        var operatorData = {
                            top: event.screenX,
                            left: event.screenY,
                            properties: {
                                body: '<div title="' + descripttion + '" class="visionOpLabelDiv">' + innerText + '</div>',
                                inputs: {
                                    input_1: {
                                        label: '',
                                        multipleLinks: true
                                    }
                                },
                                outputs: {
                                    output_1: {
                                        label: '',
                                        multipleLinks: true

                                    }
                                }
                            }
                        };
                        //            var obj = $('#'+flowChartWorkSpaceId).flowchart('getOperatorElement', operatorData);
                        var contentSplitterStyle = $("#contentSplitter").css("display");
                        var $flowchart = $('#' + flowChartWorkSpaceId);
                        var operatorDiv = $flowchart.flowchart('getOperatorElement', operatorData);
                        var operatorbody = operatorDiv.prop("outerHTML");
                        $("#draggableOperatorId").remove();
                        var body = '<div id="draggableOperatorId" style="z-index: 999999;">' + operatorbody + '</div>';
                        $(".etl-page-body").append(body);
                        return $("#draggableOperatorId");
                        //                        return  $flowchart.flowchart('getOperatorElement', operatorData);
                        //            return  $('#'+flowChartWorkSpaceId).flowchart('getOperatorElement', operatorData);
                    },
                    stop: function (e, ui) {
                        $(".flowchart-operator-connector-label").hide();
                        var contentSplitterStyle = $("#contentSplitter").css("display");
                        var contentSplitter1Style = $("#contentSplitter1").css("display");
                        var $flowchart;
                        var $container;
                        var $flowchart = $('#' + flowChartWorkSpaceId);
                        var $container = $('#' + flowChartWorkSpaceId);
                        //            var $flowchart = $('#'+flowChartWorkSpaceId);
                        //            var $container = $('#'+flowChartWorkSpaceId);
                        var $this = $(this);
                        var innerText = $this.html();
                        var title = $(this).attr("data-optitle");
                        if (!(title != null && title != '')) {
                            title = $(this).attr("title");
                        }
                        var imgsrc = $(this).attr("data-imgsrc");
                        var iconType = $(this).attr("data-type");
                        var component = $(this).attr("component"); // ravi component
                        var functionName = $(this).attr("data-functionname");
                        if (!(functionName != null && functionName != '')) {
                            //                functionName = "showTranformationRules(this)";
                        }
                        var jobId;
                        var jobName;
                        if (previousOperatorId != null) {
                            var previousMapOperatorData = $('#' + flowChartWorkSpaceId).flowchart('getOperatorData', previousOperatorId);
                            jobId = previousMapOperatorData['jobId'];
                            jobName = previousMapOperatorData['jobName'];
                        }

                        trfmRulesChanged = true;
                        //            var title = "Click here to add transformation rules";

                        var elOffset = ui.offset;
                        var containerOffset = $container.offset();
                        if (elOffset.left > containerOffset.left &&
                                elOffset.top > containerOffset.top &&
                                elOffset.left < containerOffset.left + $container.width() &&
                                elOffset.top < containerOffset.top + $container.height()) {
                            var flowchartOffset = $flowchart.offset();
                            var relativeLeft = elOffset.left - flowchartOffset.left;
                            var relativeTop = elOffset.top - flowchartOffset.top;
                            var positionRatio = $flowchart.flowchart('getPositionRatio');
                            relativeLeft /= positionRatio;
                            relativeTop /= positionRatio;
                            elOffset.left = relativeLeft;
                            elOffset.top = relativeTop;
                        }

                        var bodyLabel = "";
                        //if (component != "Y") {
                        bodyLabel = '<div class="visionOpLabelDiv" title="Double click to Rename" ondblclick="renameOperatorDisplayLabel(\'' + title + '\',this)" style="width:' + (title.length * 5) + 'px;margin-left:' + (((title.length * -5) / 2) + 14) + 'px;">' + title + '</div>'
                        //}

                        //mapDivId:'',

                        var executionSequence = getHighestSequence(flowChartWorkSpaceId);
                        var data = {
                            top: elOffset.top,
                            left: elOffset.left,
                            iconType: iconType,
                            component: component,
                            jobName: jobName,
                            jobId: jobName,
                            executionSequence: executionSequence,
                            timeStamp: new Date().getTime(),
                            //                statusLabel: innerText,
                            properties: {

                                //                                title: innerText,
                                body: '<div data-icontype="' + iconType + '" title="' + title + '" ondblclick=' + functionName
                                        + ' class="visionMapOperator"><img src="' + imgsrc + '" class="visionETLIcons" '
                                        + 'style="width:20px;height: 20px;"/>'
                                        + '<div class="etlOperatorExecutionSequecne"><span>' + executionSequence + '</span></div>'
                                        + '</div>'
                                        + bodyLabel,
                                inputs: {
                                    input_1: {
                                        label: 'I-' + iconType,
                                        multipleLinks: true
                                    }
                                },
                                outputs: {
                                    output_1: {
                                        label: 'O-' + iconType,
                                        multipleLinks: true

                                    }
                                }
                            }
                        };
                        var operatorId = $flowchart.flowchart('addOperator', data);
                        $(".flowchart-operator-connector-label").hide();
                        $(".flowchart-operator-title").hide();
                        console.log("operatorId:::" + operatorId);
                        initializeOperators();
                    }
                });
                $("#savedConnections").on('mousedown', function (event) {


                    var target = $(event.target).parents('li:first')[0];
                    var rightClick = isRightClick(event);
                    if (rightClick && target != null) {
                        $("#savedConnections").jqxTree('selectItem', target);
                        var selectedItem = $('#savedConnections').jqxTree('getSelectedItem');
                        if (selectedItem.level == 5 || selectedItem.level == 4) {
                            var menuItems = "";
                            var menuHeight;
                            var columnObj = globalTreeObj['treeColumnObj'][selectedItem.level];
                            var initParams = columnObj.TREE_INIT_PARAMS;
                            if (initParams != null) {
                                var rightClickFunc = initParams.uuu_RightClickFunc;
                                if (rightClickFunc != null) {
                                    var options = rightClickFunc.split(";");
                                    menuHeight = options.length;
                                    $.each(options, function (index) {
                                        var menuItem = options[index].split(":")[0];
                                        var funcName = options[index].split(":")[1];
                                        menuItems += "<li onclick='" + funcName + "'>" + menuItem + "</li>"
                                    });
                                }
                            }
                            $("#jqxMenu").remove();
                            $(".etl-page-body").append("<div id='jqxMenu'><ul></ul></div>");
                            $("#jqxMenu ul").html(menuItems);
                            var contextMenu = $("#jqxMenu").jqxMenu({
                                width: '120px', height: menuHeight * 30 + 'px', autoOpenPopup: false, mode: 'popup',
                                //                                theme: 'energyblue'
                            }); // ravi start




                        } else if (selectedItem.level == 3) {// ravi start
                            var height = 1;
                            var parentListItem = selectedItem.parentElement.parentElement.parentElement;
                            if (parentListItem != null) {
                                var selectedParentItem = $('#savedConnections').jqxTree('getItem', parentListItem);
                            }


                            //   PKH View file data START--->  


                            var item = $("#savedConnections").jqxTree('getSelectedItem');
                            var fileType = "";
                            var title = item.label;
                            var fileExtensions = [".xlsx", ".xls", ".XLS", ".XLSX", ".txt", ".csv", ".xml", ".TXT", ".CSV", ".XML", ".JSON", ".json", ".PDF", ".pdf", ".JPEG", ".jpeg", ".PNG", ".png"];
                            if (item != null && !item.hasItems && title != null && title != '') {
                                for (var i = 0; i < fileExtensions.length; i++) {
                                    if (title.endsWith(fileExtensions[i])) {
                                        fileType = fileExtensions[i];
                                        break;
                                    }
                                }
                            }
                            var fileType = "." + title.substr((title.lastIndexOf('.') + 1));
                            var fileObj = {};
                            var filePath = item['value'];
                            if (filePath != null && filePath.lastIndexOf("\\") > -1) {
                                filePath = filePath.substring(filePath.lastIndexOf("\\") + 1);
                            }
                            fileObj['filePath'] = filePath;
                            fileObj['fileType'] = fileType;
                            for (var entitykey in HtmlEntities) {
                                var entity = HtmlEntities[entitykey];
                                var regex = new RegExp(entitykey, 'g');
                                title = title.replace(regex, entity);
                            }
                            fileObj['fileName'] = title;
                            //   PKH View file data end ----->  

                            if (selectedParentItem != null && selectedParentItem.label == "Files") {
                                height = 2;
                                var menuItems = "<li onclick='deleteFile()' file-data='" + JSON.stringify(fileObj) + "' >Delete</li>";
                                menuItems += "<li onclick=viewFileData('" + JSON.stringify(fileObj) + "')>View File Data</li>";
                                $("#jqxMenu").remove();
                                $(".etl-page-body").append("<div id='jqxMenu'><ul></ul></div>");
                                $("#jqxMenu ul").html(menuItems);
                                var contextMenu = $("#jqxMenu").jqxMenu({
                                    width: '140px', height: height * 30 + 'px', autoOpenPopup: false, mode: 'popup',
                                    //                                    theme: 'energyblue'
                                }); // ravi start

                            } else {
                                var menuItems = "";
                                height = 1;
                                if (selectedItem.value != "Current_V10") {
                                    menuItems += "<li onclick='viewConnection()'>View</li>";
                                    menuItems += "<li onclick='deleteConnection()'>Delete</li>";
                                    height = 3;
                                }
                                menuItems += "<li onclick=viewSQLEditor('" + selectedItem.value + "')>SQL</li>";
                                $("#jqxMenu").remove();
                                $(".etl-page-body").append("<div id='jqxMenu'><ul></ul></div>");
                                $("#jqxMenu ul").html(menuItems);
                                var contextMenu = $("#jqxMenu").jqxMenu({
                                    width: '140px', height: height * 30 + 'px', autoOpenPopup: false, mode: 'popup',
                                    //                                    theme: 'energyblue'
                                }); // ravi start
                            }
                        } else { // ravi end
                            return false;
                        }


                        var scrollTop = $(window).scrollTop();
                        var scrollLeft = $(window).scrollLeft();
                        contextMenu.jqxMenu('open', parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                        return false;
                    }
                });
                // ravi start
                $("#schemaObjectsDiv").on('mousedown', function (event) {

                    var target;
                    if ($(event.target).hasClass('visionObjectNameDiv')) {
                        target = $(event.target);
                    } else {
                        target = $(event.target).parents('div.visionObjectNameDiv')[0];
                    }



                    var rightClick = isRightClick(event);
                    if (rightClick && target != null) {

                        $(".visionObjectNameDiv").removeClass("visionSelectedObject");
                        $(target).addClass("visionSelectedObject");
                        $(".visionObjectNameDiv").find('span').removeClass("visionHighlightTables");
                        $(target).find('span').addClass("visionHighlightTables");
                        var menuItems = "";
                        var menuHeight;
                        var columnObj = globalTreeObj['treeColumnObj'][5];
                        var initParams = columnObj.TREE_INIT_PARAMS;
                        if (initParams != null) {
                            var rightClickFunc = initParams.uuu_RightClickFunc;
                            if (rightClickFunc != null) {
                                var options = rightClickFunc.split(";");
                                menuHeight = options.length;
                                $.each(options, function (index) {
                                    var menuItem = this.split(":")[0];
                                    var funcName = this.split(":")[1];
                                    menuItems += "<li onclick='" + funcName + "'>" + menuItem + "</li>"
                                });
                            }
                        }

                        $("#jqxMenu").remove();
                        $(".etl-page-body").append("<div id='jqxMenu'><ul></ul></div>");
                        $("#jqxMenu ul").html(menuItems);
                        var contextMenu = $("#jqxMenu").jqxMenu({
                            width: '120px', height: menuHeight * 30 + 'px', autoOpenPopup: false, mode: 'popup',
                            //                            theme: 'energyblue'
                        }); // ravi start

                        var scrollTop = $(window).scrollTop();
                        var scrollLeft = $(window).scrollLeft();
                        contextMenu.jqxMenu('open', parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                        return false;
                    }
                });
                //				$("#availableJobsId").on('mousedown', function(event) {
                //
                //
                //					var target = $(event.target).parents('li:first')[0];
                //					var treeItem = $(event.target).closest('.visionETLAvailableJobs');
                //					var rightClick = isRightClick(event);
                //					if (rightClick && target != null && treeItem.length > 0) {
                //						$("#avaialableJobsTree").jqxTree('selectItem', target);
                //						var selectedItem = $('#avaialableJobsTree').jqxTree('getSelectedItem');
                //						var jobName = selectedItem['label'];
                //						var jobId = $(target).find("div.visionETLAvailableJobs").attr("id");
                //						
                //						var  folderId =  $('#'+jobId).closest("ul").siblings("div").find(".visionEtlTreeFolders").attr("id"); 
                //						var folderName = $("#"+folderId).text(); 				
                //						var menuItems = "<li onclick=\"openSavedJob(" + true + ",'" + jobId + "','" + jobName +"','" + folderName +"','" + folderId + "')\">Open</li>";
                //						menuItems += "<li onclick=\"rightClickProcessJob('" + jobId + "')\">Execute</li>";
                //						menuItems += "<li onclick=\"deleteJob('" + jobId + "')\">Delete</li>";
                //						menuItems += "<li onclick=\"copyJob('" + jobId + "')\">Copy</li>"; // -----------------ravi copy job
                //						menuItems += "<li onclick=\"renameJob('" + jobId + "','" + jobName + "')\">Rename</li>"; // -----------------ravi copy job
                //						menuItems += "<li onclick=\"scheduleJob('" + jobId + "')\">Schedule</li>";
                //						var menuHeight = 4;
                //
                //						$("#jqxMenu").remove();
                //						$(".etl-page-body").append("<div id='jqxMenu'><ul></ul></div>");
                //						$("#jqxMenu ul").html(menuItems);
                //						var contextMenu = $("#jqxMenu").jqxMenu({
                //							width: '120px', height: menuHeight * 27.5 + 'px', autoOpenPopup: false, mode: 'popup',
                //							//                            theme: 'energyblue'
                //						}); // ravi start
                //
                //
                //						var scrollTop = $(window).scrollTop();
                //						var scrollLeft = $(window).scrollLeft();
                //						contextMenu.jqxMenu('open', parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                //						return false;
                //					}
                //					if (rightClick && target != null && treeItem.length == 0) { // // -----------------ravi new job
                //						$("#avaialableJobsTree").jqxTree('selectItem', target);
                //						var selectedItem = $('#avaialableJobsTree').jqxTree('getSelectedItem');
                //						var menuItems = "<li onclick=\"createNewJob()\">New Job</li>"
                //							+ "<li onclick=\"createNewSaveJobFolder()\">New Folder</li>"
                //							+ "<li onclick=\"deleteFolder()\">Delete Folder</li>"
                //
                //						var menuHeight = 3;
                //						$("#jqxMenu").remove();
                //						$(".etl-page-body").append("<div id='jqxMenu'><ul></ul></div>");
                //						$("#jqxMenu ul").html(menuItems);
                //						var contextMenu = $("#jqxMenu").jqxMenu({
                //							width: '120px', height: menuHeight * 30 + 'px', autoOpenPopup: false, mode: 'popup',
                //							//                            theme: 'energyblue'
                //						}); // ravi start
                //
                //						var scrollTop = $(window).scrollTop();
                //						var scrollLeft = $(window).scrollLeft();
                //						contextMenu.jqxMenu('open', parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                //						return false;
                //					}
                //				});
                // disable the default browser's context menu.
                $(document).on('contextmenu', function (e) {
                    if ($(e.target).parents('.jqx-tree').length > 0) {
                        return false;
                    }
                    if ($(event.target).parents('div.visionObjectNameDiv').length > 0 || $(event.target).hasClass('visionObjectNameDiv')) {
                        return false;
                    }
                    if ($(event.target).parents('div.ConnInnerDivClass').length > 0 || $(event.target).hasClass('ConnInnerDivClass')) {
                        return false;
                    }
                    if ($(event.target).parents('div.etl-page-body').length > 0 || $(event.target).hasClass('etl-page-body')) {
                        return false;
                    }

                    return true;
                });
                function isRightClick(event) {
                    var rightclick;
                    if (!event)
                        var event = window.event;
                    if (event.which)
                        rightclick = (event.which == 3);
                    else if (event.button)
                        rightclick = (event.button == 2);
                    return rightclick;
                }
                //$("#sqlIconsdiv").remove();
                $('#editorViewDiv').jqxTabs({
                    width: "100%",
                    height: "100%",
                    position: 'top',
                    //                    theme: 'energyblue',
                    reorder: true,
                    showCloseButtons: true
                });
                $('#editorViewDiv').unbind('selected').on('selected', function (event) {

                    /*	var width = $("#editorViewDiv").find("li.jqx-tabs-title-selected-top").width();
                     $("#editorViewDiv").find("li").find("style").remove();
                     $("#editorViewDiv").find("li.jqx-tabs-title-selected-top").append('<style>.etl-page-body #editorViewDiv .jqx-tabs-title-selected-top::after{margin-left:'+(width+8)+'px !important;}</style>');
                     */
                });
                $("#Current_V10_editor_1").attr("data-connction-name", "Current_V10");
                var sqlMainEditor = ace.edit("Current_V10_editor_1", {
                    mode: "ace/mode/sql",
                    // enableBasicAutocompletion: true, // the editor completes the statement when you hit Ctrl + Space
                    // showPrintMargin: true, // hides the vertical limiting strip
                    fontSize: "100%", // ensures that the editor fits in the environment
                    minLines: 5,
                    maxLines: 20,
                    wrap: true,
                    autoScrollEditorIntoView: true
                });
                $("#Current_V10_editor_1").find(".ace_content").on("mousedown", function (mdevent) {

                    if (mdevent.ctrlKey) {
                        var text = sqlMainEditor.getSelectedText();
                        if (text != null && text != "") {
                            var columnsObj = globalTreeObj['treeColumnObj'];
                            var extTreeParams = $("#extTreeParams").val();
                            var data = {
                                parentkey: text.toUpperCase(),
                                treeId: globalTreeObj['treeId'],
                                level: '5',
                                extTreeParams: {},
                                columnsObj: JSON.stringify(columnsObj),
                                connectionObj: JSON.stringify(savedDBData['Current_V10']),
                                startIndex: 0,
                                endIndex: 50,
                                DBValue: 'Current_V10',
                                tableName: text.toUpperCase()
                            };
                            viewTableDataGrid(data);
                        }


                    }

                });
                $("#Current_V10_editor_1").on("keydown", function (event) {

                    if (event.ctrlKey && event.which === 13) {
                        console.log('you pressed ctrlKey+Enter');
                        executeEditorScripts("editorViewDiv");
                    } else if (event.ctrlKey) {


                        // wrap words in spans
                        //                                        $("#Current_V10_editor_1").find('.ace_line').each(function() {
                        //                                            var $this = $(this);
                        //                                            $this.html($this.text().replace(/\b(\w+)\b/g, "<span>$1</span>"));
                        //                                            
                        //                                             $("#Current_V10_editor_1").find(".ace_scroller").find(".ace_content").hover(function() {
                        //                                                $(this).css('background-color','#ffff66').text(); 
                        //                                            },function() {
                        //                                                 $(this).css('background-color',''); 
                        //                                            });
                        //                                            
                        //                                        });
                        // ace_text-layer

                        // bind to each span


                    }


                })

                $("#editorViewDiv").on("mousedown", "li.jqx-tabs-title", function (event) {
                    if (isRightClick(event)) {
                        var renameTabIndex = $(event.currentTarget).text();
                        var height = 2;
                        var menuItems = "<li onclick=sqlEditorRename('" + renameTabIndex + "')>Rename</li>";
                        $("#jqxMenu").remove();
                        $(".etl-page-body").append("<div id='jqxMenu'><ul></ul></div>");
                        $("#jqxMenu ul").html(menuItems);
                        var contextMenu = $("#jqxMenu").jqxMenu({
                            width: '140px', height: height * 30 + 'px', autoOpenPopup: false, mode: 'popup',
                            //                                    theme: 'energyblue'
                        });
                        var scrollTop = $(window).scrollTop();
                        var scrollLeft = $(window).scrollLeft();
                        contextMenu.jqxMenu('open', parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                        $("#editorViewDiv").scroll(function (scrollevent) {
                            $("#jqxMenu").remove();
                        });
                        return false;
                    }

                });
                $("#refreshSQLEditor").unbind("click").on("click", function (event) {
                    var sqlMainEditor = sqlMainEditor = ace.edit("Current_V10_editor_1");
                    var script = "";
                    sqlMainEditor.setValue(script);
                });
                $("#scriptsExecute").click(function () {
                    executeEditorScripts("editorViewDiv");
                });
                $('#Current_V10_editor_1_splitter').jqxSplitter({
                    width: '100%', height: '100%',
                    orientation: 'horizontal',
                    panels: [{size: "30%", min: 30}, {min: 70, size: "70%"}]
                });
                $('#jobSchedulingViewSplitter').jqxSplitter({
                    width: '100%', height: '100%',
                    orientation: 'vertical',
                    panels: [{size: "20%", min: 50}, {min: 50, size: "80%"}]
                });
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}





function createParallelAddNewNode(label, businessRoleId, roleId, conditionId, imageNameId, roleCssClass, top, left, canvas, instance) {
    if ($("#" + businessRoleId).length > 0)
        return;

    const box = document.createElement("div");
    box.className = "node rect-node operation " + roleCssClass;
    box.id = businessRoleId;
    box.style.top = top + "px";
    box.style.left = left + "px";
    box.innerHTML = `<div class="label" data-roleId='${roleId}' data-businessRoleId='${businessRoleId}' 
               data-conditionId='${conditionId}' data-roleCssClass='${roleCssClass}'><span class='workflowDesignRolesSpanImageClass'>
    <img src=${imageNameId} class='workflowDesignRolesImageClass'/>
</span><span class='workflowDesignRolesLabelClass'>${label}</span></div>`;

    canvas.append(box);

    if (label === 'DQG Suite' || label === 'SAP Ecosystem') {
        instance.draggable(box);
    } else {
        createMakeDynamicAddBoxInteractable(box, instance);
    }

    instance.repaintEverything();
}

function editroleNode(id) {
    // Remove old modal if it exists (to prevent duplicates)
    $("#editRoleModal").remove();

    // Append modal HTML dynamically
    $("body").append(`
  <div id="editRoleModal" class="custom-modal">
    <div class="custom-modal-content">
      <span class="close-btn" onclick="closeEditRoleModal()">&times;</span>
      <h3>Edit Workflow Role</h3>
      <input type="hidden" id="editRoleNodeId" value="${id}" />
      <div class="form-group">
        <label for="editRoleName">Role Name:</label>
        <input type="text" id="editRoleName" class="form-control" autocomplete="off"  />
      </div>
      <div class="modal-buttons">
        <button onclick="updateRoleNode('${id}')" class="btn-cancel">Update</button>
      </div>
    </div>
  </div>
`);



}

function closeEditRoleModal() {
    var editModal = $("#editRoleModal");
    if (editModal) {
        editModal.hide();
    }
}

function updateRoleNode(elId) {
    var nodeElement = document.getElementById(elId);
    var newName = $("#editRoleName").val();
    if (!newName) {
        $("#editRoleName").next(".error-message").remove();
        $("#editRoleName").after('<div class="error-message" style="color: red; margin-top: 5px;">Role cannot be empty</div>');
        return;
    }
    if (nodeElement) {
        // ✅ Find the inner .label div
        var labelDiv = $(nodeElement).find(".label");
        // ✅ Update only the text label span (keep icon/image span untouched)
        labelDiv.find(".workflowDesignRolesLabelClass").text(newName);
        // ✅ Update the data-name attribute in the main node
        nodeElement.setAttribute("data-name", newName);
    }
    // ✅ Close and remove the modal
    $("#editRoleModal").fadeOut(200, function () {
        $(this).remove();
    });
}
function closeDuplicateCheckPopup(connectionId, targetSourceId, targetId, duplicatelabel) {
    const selectedValue = $("#duplicateTypeSelect").val();
    if (!selectedValue) {
        alert("Please select a Duplicate Check Type.");
        return;
    }

    const newControl = `
        <div style="text-align:center;">
            <b>Duplicate Check</b><br>
            <span style="color:#007bff; font-weight:600;">
                ${selectedValue}
            </span>
        </div>
    `;

    // ✅ Find the connection by ID
    const connection = newWorkflowInstance.getAllConnections()
            .find(conn => conn.id === connectionId);

    if (!connection) {
        alert("Connection not found.");
        $("#duplicateCheckPopup").fadeOut(200, function () {
            $(this).remove();
        });
        return;
    }



    // ✅ Log existing label (if any)
    const existingOverlays = connection.getOverlays();

    var existingLabels = Object.values(existingOverlays)
            .filter(overlay => overlay.type === "Label");

    var isDuplicate = existingLabels.some(overlay => {
        var existingLabel = overlay.getLabel();
        var parser = new DOMParser();
        var doc = parser.parseFromString(existingLabel, 'text/html');
        var spanValue = doc.querySelector('.workflowDesignConnectionDeleteSpanClass').innerText;
        return spanValue === newControl;
    });

    if (isDuplicate) {
        $("#workflowDesignConnectionControlErrorSpanId")
                .text("This control already exists on the connection.").show();
        return;
    }
    var baseLocation = 0.3;
    var locationIncrement = 0.2;
    let newLocation = baseLocation;
    if (existingLabels.length > 0) {
        newLocation = baseLocation + (existingLabels.length * locationIncrement);
        if (newLocation > 0.7)
            newLocation = 0.7;
    }
    for (const [id, overlay] of Object.entries(existingOverlays || {})) {
        if (overlay.type === "Label") {
            deletedLabel = overlay.getLabel();
            var parser = new DOMParser();
            var doc = parser.parseFromString(deletedLabel, 'text/html');
            var spanValue = doc.querySelector('.workflowDesignConnectionDeleteSpanClass').innerText;
            if (spanValue != null && spanValue != '' && spanValue != undefined) {
                deletedLabel = spanValue;
            }
            const existingLabelHTML = overlay.getLabel();
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = existingLabelHTML;
            const existingLabelText = tempDiv.innerText.trim();
            console.log("🟢 Existing Label:", existingLabelText);
        }
    }

    // ✅ Remove all duplicate-related labels
    for (const [id, overlay] of Object.entries(existingOverlays || {})) {
        if (overlay.type === "Label") {
            const labelHTML = overlay.getLabel();
            if (labelHTML && (labelHTML.includes("Duplicate Check") || labelHTML.includes("DUPLICATE-CHECK"))) {
                connection.removeOverlay(id);
            }
        }
    }

    // ✅ Create new label HTML
    const labelStr = `
        <span class='workflowDesignConnectionDeleteSpanClass'>
            ${newControl}
        </span>
        <img src='images/deleteflowchart.png'
             class='workflowDesignConnectionDeleteImgClass'
             style='margin-left:5px;cursor:pointer;'
             onclick='deleteLinkPopup("${duplicatelabel}","${targetSourceId}","${targetId}","${connectionId}")'/>
    `;

    // ✅ Add clean overlay
    connection.addOverlay([
        "Label",
        {
            label: labelStr,
            id: `label-${selectedValue}-${connectionId}`,
            cssClass: `connection-label label-${selectedValue} lebelLink`,
            location: newLocation, // adjust label position
            create: function () {
                const div = document.createElement("div");
                div.style.display = "inline-flex";
                div.style.alignItems = "center";
                div.style.backgroundColor = "white";
                div.style.borderRadius = "5px";
                div.style.padding = "2px 4px";
                div.style.boxShadow = "0 1px 2px rgba(0,0,0,0.2)";
                return div;
            }
        }
    ]);

    // ✅ Verify newly added label
    const addedOverlay = connection.getOverlay(`label-${selectedValue}-${connectionId}`);
    if (addedOverlay) {
        console.log("🟣 New Label Added:", addedOverlay.getLabel());
    }

    // ✅ Close popup
    $("#duplicateCheckPopup").fadeOut(200, function () {
        $(this).remove();
    });
}
function deleteConnectionWithConfirm(connection) {

    const controls = connection._processControls || [];

    if (controls.length === 0) {
        alert("No processes to delete.");
        return;
    }

    let html = `
        <div style="padding:10px">
            <h4>Select process to delete</h4>
            <select id="deleteProcessSelect" style="width:100%;margin-top:10px">
    `;

    controls.forEach(ctrl => {
        html += `<option value="${ctrl.controlId}">
            ${ctrl.type} (position ${ctrl.location.toFixed(2)})
        </option>`;
    });

    html += `
            </select>
            <div style="margin-top:15px;text-align:right">
                <button onclick="confirmDeleteProcess('${connection.id}')">Delete</button>
                <button onclick="closeDeletePopup()">Cancel</button>
            </div>
        </div>
    `;

    $("#dialog").html(html).dialog({
        modal: true,
        width: 320,
        title: "Delete Process"
    });
}
var workflowDetailsCollapsed = false;

function workflowdetaildTogger() {
    const icon = $("#workflowToggleIcon");

    if (!workflowDetailsCollapsed) {
        // Collapse
        $("#workflowDetailsId").hide();
        icon.removeClass("fa-arrow-circle-o-right")
                .addClass("fa-arrow-circle-o-left");
    } else {
        // Expand
        $("#workflowDetailsId").show();
        icon.removeClass("fa-arrow-circle-o-left")
                .addClass("fa-arrow-circle-o-right");
    }

    workflowDetailsCollapsed = !workflowDetailsCollapsed;
}

function openconditiontabTab(evt) {

    // Switch tab
    openAboutTab(evt, "tabConditions");

    const allConnections = newWorkflowInstance.getAllConnections();
    const conditionMap = {};

    allConnections.forEach(conn => {

        const sourceId = conn.sourceId;
        const targetId = conn.targetId;

        const fromRole = $("#" + sourceId).find("div").attr("data-businessroleid");

        const isConditionSource = sourceId.includes("Condition");
        const isConditionTarget = targetId.includes("Condition");

        // Source → Condition
        if (isConditionTarget) {
            conditionMap[targetId] = conditionMap[targetId] || {
                from: fromRole,
                caseText: null,
                thenRole: null,
                elseRole: null
            };
        }

        // Condition → Next nodes
        if (isConditionSource) {

            const cond = conditionMap[sourceId] || {
                from: fromRole,
                caseText: null,
                thenRole: null,
                elseRole: null
            };

            // CASE condition text
            cond.caseText = $("#" + sourceId + "_FilterVal").val();

            // Parse THEN / ELSE directly from CASE text
            if (cond.caseText) {
                const normalized = cond.caseText.replace(/\s+/g, " ").toUpperCase();

                const thenMatch = normalized.match(/THEN\s+([A-Z0-9_]+)/);
                const elseMatch = normalized.match(/ELSE\s+([A-Z0-9_]+)/);

                cond.thenRole = thenMatch ? thenMatch[1] : "-";
                cond.elseRole = elseMatch ? elseMatch[1] : "-";
            }

            conditionMap[sourceId] = cond;
        }
    });

    // Build table
    let html = `
        <table class="table table-bordered conditions-table">
            <thead>
                <tr>
                    <th style="width:20%">From</th>
                    <th style="width:50%">Condition</th>
                    <th style="width:30%">To</th>
                </tr>
            </thead>
            <tbody>
    `;

    const conditions = Object.values(conditionMap);

    if (conditions.length === 0) {
        html += `
            <tr>
                <td colspan="3" class="text-center">No conditions defined</td>
            </tr>
        `;
    } else {

        conditions.forEach(c => {

            // WHEN → THEN
            html += `
                <tr>
                    <td><b>${c.from || "-"}</b></td>
                    <td>
                        <span class="cond-badge when">WHEN</span>
                        <div class="cond-text">${c.caseText || "-"}</div>
                    </td>
                    <td><span class="to-chip">${c.thenRole}</span></td>
                </tr>
            `;

            // ELSE → ELSE
            html += `
                <tr class="else-row">
                    <td><b>${c.from || "-"}</b></td>
                    <td>
                        <span class="cond-badge else">ELSE</span>
                    </td>
                    <td><span class="to-chip secondary">${c.elseRole}</span></td>
                </tr>
            `;
        });
    }

    html += "</tbody></table>";

    document.getElementById("conditionsContent").innerHTML = html;
}


