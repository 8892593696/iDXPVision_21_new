/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var connectionDetailsMap = {};
function BNACgetWorkflowMappingComponent(treeId)
{

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
        $("#dxpCluster").html("<div id='workflowDesignMainId' class='workflowDesignMainClass'><div id='worflowDesignResourcesId' class='worflowDesignResourcesClass'></div><div id='worflowDesignOperationsId' class='worflowDesignOperationsClass'></div><div id='conditionHiddenFieldsId' style='display:none'></div></div>")
        //$("#workflowDesignMainId").jqxSplitter({width: '100%', height: '100%', orientation: 'horizontal', splitBarSize: 5, panels: [{size: '8%'}]});
        try {
            $('#workflowDesignMainId').jqxSplitter('expand');
        } catch (e) {

        }


        var workflowTabsDesign = `<div class="workflowDesignResourceDataClass" id="workflowDesignResourceDataId">
                   <div class="ui5gridfilter-container-form">
                                <div class="ui5gridfilter-row">
                                <div id="" class="ui5gridfilter-item">
                                    <label for="Search">Domain</label>
                                    <div class="ui5gridfilter-inputFeildDiv">  
                                        <span class="ui5gridinputFeildSpan" style="width:100%"> 
                                                <select id='visionWorkflowDesinDomainSelectId'>
                                                <option value='MODEL'>Model</option>
                                                <option value='SPARE'>Spare</option>
                                                <option value='EQUIPMENT'>Equipment</option>
                                            </select> 
                                        </span> 
                                    </div>
                                </div>
                                <div id="" class="ui5gridfilter-item">
                                    <label for="Search">Process</label>
                                    <div class="ui5gridfilter-inputFeildDiv">  
                                        <span class="ui5gridinputFeildSpan" style="width:100%"> 
                                             <select id='visionWorkflowDesinDomainProcessId'>
                                                <option value='Workflow1'>Workflow1</option>
                                                <option value='Workflow2'>Workflow2</option>
                                              </select>
                                        </span> 
                                    </div>
                                </div>
                         <div class="ui5gridbutton-row">
                            <button class="ui5gridgo-btn go-btn" onclick="BNACshowWorkflowDesignResourceProcess()">Preview</button> 
                            <button class="ui5gridgo-btn go-btn" onclick="BNACshowNewWorkflowDesignProcess()">Create New</button> 
                            <button class="ui5gridgo-btn go-btn" onclick="BNACNavigateNewWorkflowDesignProcess()">Navigate</button> 
                        </div>
                        </div>
                       
                    </div>
               </div>`;

        $("#worflowDesignResourcesId").html(workflowTabsDesign);

        //$("#worflowDesignOperationsId").html("<div id='worflowDesignOperationsDataId' class='worflowDesignOperationsDataClass'></div><div id='worflowDesignOperationsHeaderId' class='worflowDesignOperationsHeaderClass' style='display:none'></div>")
        $("#worflowDesignOperationsId").html("<div class='worflowDesignOperationsMainDataClass'><div id='worflowDesignOperationsOriginalDataId' class='worflowDesignOperationsDataClass worflowDesignOperationsDataEditDivClass' style='display:none'></div><div id='worflowDesignOperationsDataId' class='worflowDesignOperationsDataClass' style='display:none'></div><div id='worflowDesignOperationsDataNewId' class='worflowDesignOperationsDataNewClass' style='display:none'></div></div><div id='worflowDesignOperationsHeaderId' class='worflowDesignOperationsHeaderClass' style='display:none'></div>");



    } catch (e) {

    }


}



function showWorkflowDesignResourceSubButtons(id)
{
    $("#" + id).toggle();
}
var boxCount = 0;
function BNACshowWorkflowDesignResourceProcess()
{
    $("#worflowDesignOperationsOriginalDataId").hide();
    $("#worflowDesignOperationsOriginalDataId").css("width", "100%", "!important");
    $("#worflowDesignOperationsDataId").css("width", "100%", "!important");
    var process = $("#visionWorkflowDesinDomainProcessId").val();
    var processId = 1;
    if (process == 'Workflow1')
    {
        processId = 1;
    } else if (process == 'Workflow2')
    {
        processId = 2;
    }
    var html = `<div class="workflowMinMaxClass"><span class="workflowMinMaxImgClass" id="workflowMinId" onclick="BNACworkflowMinimizeClick('worflowDesignOperationsDataId')"><img src="images/iDXPUI5Minimize.svg" width="16px"></span><span class="workflowMinMaxImgClass" id="workflowMaxId" onclick="BNACworkflowMaxmizeClick('worflowDesignOperationsDataId')"><img src="images/iDXPUI5Maximize.svg" width="16px"></span></div> 
                   <div class="node rect-node" id="BNAC_Operator${processId}">
                        <div class="label">Operator</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                     </div>
                <div class="node empty-circle-node" id="BNAC_Return${processId}">
                     <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                </div>
                <div class="node empty-circle-node" id="BNAC_Rework${processId}">
                    <div class="dot top"></div>
                    <div class="dot right"></div>
                    <div class="dot bottom"></div>
                    <div class="dot left"></div>
               </div>
               <div class="node empty-circle-node-deleted" id="BNAC_Delete${processId}">
                   <div class="dot left"></div>
             </div>
            <div class="node rect-node" id="BNAC_OEM${processId}">
                        <div class="label">OEM</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                     </div>
            <div class="node rect-node" id="BNAC_CONTENT_MANAGER${processId}">
                      <div class="label">ContentManager</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                     </div>
            <div class="node rect-node" id="BNAC_SAP_BNAC${processId}">
                       <div class="label">SAP BNAC</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                    </div> 
            <div class="node rect-node" id="BNAC_SAP_H4HANA${processId}">
                       <div class="label">SAP S4HANA</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                    </div>
            <div class="node rect-node" id="BNAC_NON_SAP${processId}">
                       <div class="label">Non SAP</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                    </div>
                 `;
//        $("#worflowDesignOperationsHeaderId").html(`<div class="ui5gridbutton-row treeLinkEditDiv">
//                            <button class="ui5gridgo-btn go-btn treeLinkEditBTN" onclick="BNACtreeLinkEditFn()">Edit</button> 
//                        </div>`);
    $("#worflowDesignOperationsDataId").html(html);
    $("#worflowDesignOperationsHeaderId").show();
    $("#worflowDesignOperationsDataId").show();
    $("#worflowDesignOperationsDataNewId").hide();
    BNACnewWorkFlowModel(processId);
    var processType = $("#visionWorkflowDesinDomainProcessId").val();
    $("#worflowDesignOperationsHeaderId").html(`
      <div class='worflowDesignOperationsbtnwrapper'>
          <button class="ui5gridgo-btn go-btn treeLinkEditBTN" onclick="BNACtreeLinkEditFn(${processId})">
            Edit
          </button> 
          <button class="ui5gridgo-btn go-btn treeLinkActivateBTN" id='workflowActivateButtonId' style='display:none' onclick="BNACtreeLinkActivateFn()">
            Activate
          </button> 
         <button class='workflowSaveButtonClass' id='workflowSaveButtonId' onclick=BNACgetFlowchartMappingData() style='display:none'>
          <img title='Save' src='images/iDXPUI5Save.svg' alt='Roles'>
        </button>  
        <button class='workflowRolesButtonClass' id='workflowRolesButtonId' onclick=BNACshowWorkflowDesignRoles('${processType}') style='display:none'>
         <img title='Roles' src='images/Palette.svg' alt='Roles'>
        </button>
  
      </div>`);
    $("body").append(`<div id='${processType}RolesId' class='worflowOperationsHeaderRolesClass' style='display:none'>
            <div id='workflowFieldTechnicianRoleId' class='worflowOperationsHeaderRoleDragClass'>Operator</div>
            <div id='workflowFieldEngineerRoleId' class='worflowOperationsHeaderRoleDragClass'>OEM</div>
            <div id='workflowReliabilityEngRoleId' class='worflowOperationsHeaderRoleDragClass'>Content Manager</div>
            </div>`);
    $("body").append(`<div id='${processType}ConditionsId' class='worflowOperationsHeaderConditionsClass' style='display:none'>
            <div id='workflowSubmitConditionId' class='worflowOperationsHeaderConditionDragClass'>Submit</div>
            <div id='workflowApproveConditionId' class='worflowOperationsHeaderConditionDragClass'>Approve</div>
            <div id='workflowReturnConditionId' class='worflowOperationsHeaderConditionDragClass'>Return</div>
            </div>`);

    $(".worflowOperationsHeaderRoleDragClass").draggable({
        revert: "invalid",
        refreshPositions: true,
        cursor: 'move',
        zindex: false,
        opacity: false,
        helper: "clone"  // optional: keeps the original element in place
    });
    $(".worflowOperationsHeaderConditionDragClass").draggable({
        revert: "invalid",
        refreshPositions: true,
        cursor: 'move',
        zindex: false,
        opacity: false,
        helper: "clone"  // optional: keeps the original element in place
    });



    $(".worflowDesignOperationsDataClass").droppable({
        revert: true,
        refreshPositions: true,
        cursor: 'move',
        accept: '.worflowOperationsHeaderRoleDragClass,.worflowOperationsHeaderConditionDragClass',
        drop: function (event, ui) {
            var $this = $(this);
            var draggable = $(ui.draggable);
            var label = draggable[0].textContent;
            console.log("draggable");
            var checkRoleorCondition = false;
            if ($(draggable[0]).hasClass("worflowOperationsHeaderConditionDragClass"))
            {
                checkRoleorCondition = true;
            }
            var min = 10;
            var max = 100000;
            var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            const canvas = document.getElementById('worflowDesignOperationsDataId');
            var nodeId = "";
            if (label == 'Operator')
            {
                nodeId = 'BNAC_Operator';
            } else if (label == 'OEM')
            {
                nodeId = 'BNAC_OEM';
            } else if (label == 'Content Manager')
            {
                nodeId = 'BNAC_CONTENT_MANAGER';
            }
            BNACaddNewConditionNode(label, nodeId, 50 + boxCount * 100, 1100, checkRoleorCondition, canvas, workflowInstance);

        }
    });
}

function BNACshowWorkflowDesignConditions(processType)
{
    $("#" + processType + "ConditionsId").toggle();
    $("#" + processType + "RolesId").hide();
}
function BNACshowWorkflowDesignRoles(processType)
{
//    $("#" + processType + "RolesId").toggle();
//    $("#" + processType + "ConditionsId").hide();

    const $rolesBox = $("#" + processType + "RolesId");
    const $conditionsBox = $("#" + processType + "ConditionsId");

    // Toggle roles box
    $rolesBox.toggle();
    $conditionsBox.hide();

    // Remove previous click handler if any
    $(document).off("click.workflowDesignMainClass");

    // If now visible, bind outside click
    if ($rolesBox.is(":visible")) {
        setTimeout(() => {
            $(document).on("click.workflowDesignMainClass", function (e) {
                if (
                        !$rolesBox.is(e.target) &&
                        $rolesBox.has(e.target).length === 0 &&
                        !$("#" + processType + "ButtonId").is(e.target)
                        ) {
                    $rolesBox.hide();
                    $(document).off("click.workflowDesignMainClass");
                }
            });
        }, 0);
    }

}



function BNACmakeBoxInteractable(el, instance) {
    instance.draggable(el);

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

        instance.makeSource(dot, {
            parent: el,
            anchor: customAnchorType,
            //anchor: anchorPos,
            maxConnections: -1
        });

        instance.makeTarget(dot, {
            parent: el,
            anchor: customAnchorType,
            //anchor: targetAnchorPos,
            allowLoopback: false,
            maxConnections: -1
        });




    });

}

function BNACmakeDynamicAddBoxInteractable(el, instance) {
    instance.draggable(el);

    const dots = el.querySelectorAll('.dot');
    dots.forEach(dot => {
        let anchorPos;
        let targetAnchorPos;
        let customClassId = '';
        let customAnchorType = '';
        if (dot.classList.contains('top')) {
            anchorPos = [0.1, 0.5, 0, -1];
            targetAnchorPos = [0, 0.5, 0, 0];
            customClassId = 'top';
            customAnchorType = 'Top';
        } else if (dot.classList.contains('right')) {
            anchorPos = [0.5, 0, 1, 0];
            targetAnchorPos = [0.5, 0, 0, 0];
            customClassId = 'right';
            customAnchorType = 'Right';
        } else if (dot.classList.contains('bottom')) {
            anchorPos = [0.1, 0.5, 0, 0];
            targetAnchorPos = [0, 0.5, 0, 0];
            customClassId = 'bottom';
            customAnchorType = 'Bottom';
        } else if (dot.classList.contains('left')) {
            anchorPos = [0.5, 0.1, 0, 0];
            targetAnchorPos = [0.5, 0, 0, 0];
            customClassId = 'left';
            customAnchorType = 'Left';
        }

        // Set the custom random ID
        const customId = `${el.id}:dot-${customClassId}`;
        dot.id = customId;

        instance.makeSource(dot, {
            parent: el.id,
            anchor: customAnchorType,
            //anchor: anchorPos,
            maxConnections: -1,
            isSource: true
        });

        instance.makeTarget(dot, {
            parent: el.id,
            anchor: customAnchorType,
            //anchor: targetAnchorPos,
            allowLoopback: false,
            maxConnections: -1,
            isTarget: true
        });




    });
    instance.repaintEverything();
    el.addEventListener("dblclick", function (e) {
        e.stopPropagation(); // prevent bubbling up to body or other listeners
        BNACaskConformationforDeletingNode(el.id, instance);
    });

}

function BNACaddBox(label, id, top, left, isCondition = false, canvas, instance) {
    boxCount++;
    const boxClass = isCondition ? "condition" : "operation";
    const box = document.createElement("div");
    box.className = "node rect-node " + boxClass;
    box.id = "box" + id;
    box.innerHTML = `
        <div class="label">${label}</div>
        <div class="dot top"></div>
        <div class="dot right"></div>
        <div class="dot bottom"></div>
         ${!isCondition ? '<div class="dot left"></div>' : ''}
      `;
    box.style.top = top + "px";
    box.style.left = left + "px";
    box.addEventListener("click", function () {
        //showBoxClick(label, isCondition);
    });
    canvas.appendChild(box);
    BNACmakeBoxInteractable(box, instance);
    return box;
}
function BNACaddNewNode(label, id, top, left, isCondition = false, canvas, instance) {
    boxCount++;
    const boxClass = isCondition ? "condition" : "operation";
    const box = document.createElement("div");
    box.className = "node rect-node " + boxClass;
    box.id = "box" + id;
    box.style.top = top + "px";
    box.style.left = left + "px";
    box.innerHTML = `
        <div class="label">${label}</div>
        <div class="dot top"></div>
        <div class="dot right"></div>
        <div class="dot bottom"></div>
        <div class="dot left"></div>
           `;
    canvas.append(box);
    BNACmakeDynamicAddBoxInteractable(box, instance);
    // instance.repaintEverything();
    //return box;
}
var workflowSaveFlag = false;
var workflowSaveCnt = 0;
function BNACgetFlowchartMappingData() {
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




var workflowInstance;
function BNACnewWorkFlowModel(processId) {
    $("body").removeClass("fiorithemeClass dark-mode Default").addClass("fiorithemeClass");
    jsPlumb.ready(function () {
        workflowInstance = jsPlumb.getInstance({
            //  Container: "diagramContainer",
            Container: "worflowDesignOperationsDataId",
            Connector: ["Flowchart", {cornerRadius: 10, stub: [40, 60]}],
            Endpoint: "Dot",
            EndpointStyle: {fill: "#456", radius: 5},
            PaintStyle: {stroke: "#ddd", strokeWidth: 1},
            HoverPaintStyle: {stroke: "#007BFF", strokeWidth: 1.5},
        });
        const allNodes = ["BNAC_Operator" + processId + "", "BNAC_Return" + processId + "", "BNAC_Delete" + processId + "", "BNAC_Rework" + processId + "", "BNAC_OEM" + processId + "", "BNAC_CONTENT_MANAGER" + processId + "", "BNAC_SAP_BNAC" + processId + "", "BNAC_SAP_H4HANA" + processId + "", "BNAC_NON_SAP" + processId + ""];
        allNodes.forEach(id => {
            const el = document.getElementById(id);
            workflowInstance.draggable(el);
            BNACcreateDotsToNodes(el, workflowInstance);
            el.addEventListener("dblclick", function (e) {
                e.stopPropagation(); // prevent bubbling up to body or other listeners
                // BNACaskConformationforDeletingNode(id, workflowInstance);
            });
        });


        if (processId == 1) {
            setTimeout(function () {

// Main flow
                workflowInstance.connect({source: "BNAC_Operator1", target: "BNAC_Delete1", anchors: ["Bottom", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Deleted", location: 0.88, cssClass: "label-reject lebelLink"}]], data: {flag: false}, createEndpoint: false});
                workflowInstance.connect({source: "BNAC_CONTENT_MANAGER1", target: "BNAC_Delete1", anchors: ["Right", "Top"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Deleted", location: 0.88, cssClass: "label-reject lebelLink"}]], data: {flag: false}, createEndpoint: false});
                workflowInstance.connect({source: "BNAC_Operator1", target: "BNAC_OEM1", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Submit", location: 0.7, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});
                workflowInstance.connect({source: "BNAC_OEM1", target: "BNAC_CONTENT_MANAGER1", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Approve", location: 0.5, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});


// Return links (go below approvers → left → up to joint)
                workflowInstance.connect({
                    source: "BNAC_CONTENT_MANAGER1",
                    target: "BNAC_Return1",
                    anchors: ["Bottom", "Right"],
                    connector: ["Flowchart", {stub: [100, 100], cornerRadius: 5}],
                    overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Return", location: 0.8, cssClass: "label-reject lebelLink"}]],
                    createEndpoint: false
                });

// node3 to requester
                workflowInstance.connect({
                    source: "BNAC_Return1",
                    target: "BNAC_OEM1",
                    anchors: ["Left", "Bottom"],
                    connector: ["Flowchart", {
                            stub: [100, 100],
                            cornerRadius: 10,
                            alwaysRespectStubs: true
                        }],
                    overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Return", location: 0.6, cssClass: "label-reject lebelLink"}]],
                    createEndpoint: false
                });

// steward to joint


                workflowInstance.connect({
                    source: "BNAC_OEM1",
                    target: "BNAC_Rework1",
                    anchors: ["Top", "Left"],
                    connector: ["Flowchart", {
                            stub: [100, 100],
                            cornerRadius: 10,
                            alwaysRespectStubs: true
                        }],
                    overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Re-work", location: 0.6, cssClass: "label-rework lebelLink"}]]
                });

                workflowInstance.connect({
                    source: "BNAC_Rework1",
                    target: "BNAC_CONTENT_MANAGER1",
                    anchors: ["Right", "Top"],
                    connector: ["Flowchart", {
                            stub: [100, 100],
                            cornerRadius: 10,
                            alwaysRespectStubs: true
                        }],
                    overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Re-work", location: 0.6, cssClass: "label-rework lebelLink"}]]
                });


                workflowInstance.connect({source: "BNAC_CONTENT_MANAGER1", target: "BNAC_SAP_BNAC1", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Integration", location: 0.8, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});
                workflowInstance.connect({source: "BNAC_CONTENT_MANAGER1", target: "BNAC_SAP_H4HANA1", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Integration", location: 0.8, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});
                workflowInstance.connect({source: "BNAC_CONTENT_MANAGER1", target: "BNAC_NON_SAP1", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Integration", location: 0.8, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});





                workflowInstance.bind("click", function (conn, originalEvent) {
                    console.log("Connection clicked from " + conn.sourceId + " to " + conn.targetId);
                });
            }, 50);

        } else if (processId == 2)
        {
            setTimeout(function () {

// Main flow
                workflowInstance.connect({source: "BNAC_CONTENT_MANAGER2", target: "BNAC_Delete2", anchors: ["Right", "Left"], connector: ["Flowchart", {stub: [5, 320], cornerRadius: 5}], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Deleted", location: 0.88, cssClass: "label-reject lebelLink"}]], data: {flag: false}, createEndpoint: false});
                workflowInstance.connect({source: "BNAC_Operator2", target: "BNAC_Delete2", anchors: ["Right", "Top"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Deleted", location: 0.88, cssClass: "label-reject lebelLink"}]], data: {flag: false}, createEndpoint: false});
                workflowInstance.connect({source: "BNAC_OEM2", target: "BNAC_CONTENT_MANAGER2", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Submit", location: 0.7, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});


// Return links (go below approvers → left → up to joint)
                workflowInstance.connect({
                    source: "BNAC_CONTENT_MANAGER2",
                    target: "BNAC_Return2",
                    anchors: ["Bottom", "Right"],
                    connector: ["Flowchart", {stub: [100, 100], cornerRadius: 5}],
                    overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Return", location: 0.8, cssClass: "label-reject lebelLink"}]],
                    createEndpoint: false
                });

// node3 to requester
                workflowInstance.connect({
                    source: "BNAC_Return2",
                    target: "BNAC_OEM2",
                    anchors: ["Left", "Bottom"],
                    connector: ["Flowchart", {
                            stub: [100, 100],
                            cornerRadius: 10,
                            alwaysRespectStubs: true
                        }],
                    overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Return", location: 0.6, cssClass: "label-reject lebelLink"}]],
                    createEndpoint: false
                });

// steward to joint


                workflowInstance.connect({
                    source: "BNAC_OEM2",
                    target: "BNAC_Rework2",
                    anchors: ["Top", "Left"],
                    connector: ["Flowchart", {
                            stub: [100, 100],
                            cornerRadius: 10,
                            alwaysRespectStubs: true
                        }],
                    overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Re-work", location: 0.6, cssClass: "label-rework lebelLink"}]]
                });

                workflowInstance.connect({
                    source: "BNAC_Rework2",
                    target: "BNAC_CONTENT_MANAGER2",
                    anchors: ["Right", "Top"],
                    connector: ["Flowchart", {
                            stub: [100, 100],
                            cornerRadius: 10,
                            alwaysRespectStubs: true
                        }],
                    overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Re-work", location: 0.6, cssClass: "label-rework lebelLink"}]]
                });

                workflowInstance.connect({source: "BNAC_CONTENT_MANAGER2", target: "BNAC_Operator2", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Approve", location: 0.5, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});
                workflowInstance.connect({source: "BNAC_Operator2", target: "BNAC_SAP_BNAC2", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Integration", location: 0.8, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});
                workflowInstance.connect({source: "BNAC_Operator2", target: "BNAC_SAP_H4HANA2", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Integration", location: 0.8, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});
                workflowInstance.connect({source: "BNAC_Operator2", target: "BNAC_NON_SAP2", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Integration", location: 0.8, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});

                workflowInstance.bind("click", function (conn, originalEvent) {
                    console.log("Connection clicked from " + conn.sourceId + " to " + conn.targetId);
                });
            }, 50);
        }


    });
}

function BNACtreeLinkEditFn(processId) {
    $("#workflowSaveButtonId").show();
    $("#workflowRolesButtonId").show();
    $("#workflowActivateButtonId").show();
    //$(".workflowMinMaxClass").hide();
    if (!($("#worflowDesignOperationsDataId").is(":visible")))
    {
        return;
    }
    var node1left = $('#BNAC_Operator' + processId + '').position().left + 'px';
    var node3left = $('#BNAC_Return' + processId + '').position().left + 'px';
    var node4left = $('#BNAC_Delete' + processId + '').position().left + 'px';
    var node5left = $('#BNAC_Rework' + processId + '').position().left + 'px';
    var approverleft = $('#BNAC_OEM' + processId + '').position().left + 'px';
    var stewardleft = $('#BNAC_CONTENT_MANAGER' + processId + '').position().left + 'px';
    var managerleft = $('#BNAC_SAP_BNAC' + processId + '').position().left + 'px';
    var sapleft = $('#BNAC_SAP_H4HANA' + processId + '').position().left + 'px';
    var nonsapleft = $('#BNAC_NON_SAP' + processId + '').position().left + 'px';
    $(".worflowDesignOperationsMainDataClass").css("display", "flex", "!important");

    BNACcopyWorkFlowModel(processId, node1left, node3left, node4left, node5left, approverleft, stewardleft, managerleft, sapleft, nonsapleft);
    //$("#worflowDesignOperationsOriginalDataId").html($("#worflowDesignOperationsDataId").html());
    //$("#worflowDesignOperationsOriginalDataId").show();


    const allNodes = ["BNAC_Operator" + processId + "", "BNAC_Return" + processId + "", "BNAC_Delete" + processId + "", "BNAC_Rework" + processId + "", "BNAC_OEM" + processId + "", "BNAC_CONTENT_MANAGER" + processId + "", "BNAC_SAP_BNAC" + processId + "", "BNAC_SAP_H4HANA" + processId + ""];
    allNodes.forEach(id => {
        const el = document.getElementById(id);
        el.addEventListener("dblclick", function (e) {
            e.stopPropagation(); // prevent bubbling up to body or other listeners
            BNACaskConformationforDeletingNode(id, workflowInstance);
        });
    });



    const allConnections = workflowInstance.getAllConnections();

    allConnections.forEach(conn => {
        // Get all overlays of the connection
        const overlays = Object.values(conn.getOverlays());
        let flag = conn.getData().flag;

        // If an "Approve" label is found, perform your desired action
        if (flag) {
            // Skip if overlay already added
            if (conn.getOverlay("editOverlay"))
                return;

            let currentLoc = overlays[1] ? overlays[1].getLocation() : 1;
            if (currentLoc === 1) {
                currentLoc = currentLoc - 0.3;
            } else if (currentLoc > 0.8) {
                currentLoc = currentLoc - 0.2;
            } else if (currentLoc > 0.1) {
                currentLoc = currentLoc + 0.2;
            }
            const sourceId = conn.sourceId;
            const targetId = conn.targetId;
            if (sourceId == 'node1' && targetId == 'approver1')
            {
                currentLoc = 0.85;
            }
            if (sourceId == 'node1' && targetId == 'approver2')
            {
                currentLoc = 0.55;
            }
            if (sourceId == 'node1' && targetId == 'approver3')
            {
                currentLoc = 0.85;
            }
            if (sourceId == 'approver1' && targetId == 'steward')
            {
                currentLoc = 0.13;
            }
            if (sourceId == 'approver2' && targetId == 'steward')
            {
                currentLoc = 0.3;
            }
            if (sourceId == 'approver3' && targetId == 'steward')
            {
                currentLoc = 0.13;
            }
            conn.addOverlay([
                "Custom", {
                    create: function () {
                        const div = document.createElement("div");
                        div.innerHTML = `<span class="plus-icon" onclick="BNAClinkPopup('${sourceId}', '${targetId}')">+</span>`; // You can replace '+' with an icon (like font-awesome if loaded)
                        div.title = "Add new connection"; // optional tooltip
                        return div;
                    },
                    location: currentLoc,
                    id: "editOverlay"
                }
            ]);

        }
    });
}


function BNAClinkPopup(source, target) {
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
                    BNACopenConditionBox(source, target, label);
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
var conditionCount = 1;
function BNACopenConditionBox(source, target, label) {
    $('#workflowConditionMainBoxDiv').remove();
    let labelHtml = '';
    if (label == 'Branch') {
        labelHtml = `<div id='worflowBranchOperations' class='worflowBranchOperations'>`
                + `<div id='worflowBranchHeaderOperations' class='worflowBranchHeaderOperations'>`
                + `</div>`
                + `<div id='worflowBranchBodyOperations' class='worflowBranchBodyOperations'>`
                + `<div class="mb-3">`
                + `<label for="branchInput1" class="form-label">branchInput 1</label>`
                + `<input type="text" id="branchInput1" class="form-control" placeholder="select role">`
                + `</div>`
                + `<div class="mb-3">`
                + `<label for="branchInput2" class="form-label">branchInput 2</label>`
                + `<input type="text" id="branchInput2" class="form-control" placeholder="select role">`
                + `</div>`
                + `<button type="button" id='worflowBranchAddBtn' class="btn btn-primary worflowOperationAddBtn">Add</button>`
                + `</div>`
                + `</div>`;
    } else if (label == 'Condition') {
        labelHtml = `<div id='worflowConditionOperations' class='worflowConditionOperations'>
                 <div id='worflowConditionHeaderOperations' class='worflowConditionHeaderOperations'>
                 <label for="labelConditionIf1" class="form-label">Step Name</label>
                 <input type="text" id="labelConditionIf${conditionCount}" class="form-control" placeholder="Condition ${conditionCount}">
                 </div>
                 <div id='worflowConditionBodyOperations' class='worflowConditionBodyOperations'>
                 <label class="form-label">Branch Condition</label>
                <input type="text" id="conditionIf${conditionCount}" class="form-control" readonly placeholder="If">
                 </div>                
                <div class="mb-3">
                 <a href='#' onclick=BNACgetconditionSelection('${label}')>Please select condition</a>
                 </div>
                 <div class="mb-3 defaultroleDivClass">
                 <label>Default Role :</label>
                 <select id='selectDefaultCondRole${conditionCount}' class='selectCondClass form-control'>
                 <option value='Select'>Select</option>
                 <option value='node1'>Field Technician</option>
                 <option value='approver1'>Field Engineer</option>
                 <option value='approver2'>Reliability Engineer</option>
                 <option value='approver3'>Finance Controller</option>
                 <option value='steward'>Operations & Maintenance Manager</option>
                 <option value='manager'>System Manager</option>
                 </select>
                 </div>
                 </div>
                 <div id='conditionErrorId${conditionCount}' style='display:none;color:red' class='errorMsgDisplay'>Please select the If and Default Role & condition(s)</div>
                 <button type="button" id='worflowDesigConditionSaveBtn' onclick=BNACsaveWorkflowDesignCondition('${label}','${source}','${target}') class="btn btn-primary worflowDesigConditionSaveBtn">Save</button>
                 </div>`;
    }
    let html = `<div id='workflowConditionMainBoxDiv' class='workflowConditionMainBoxDiv'>`
            + `<div class='workflowConditionHeader'><div class='workflowConditionHeaderLabel'>${label}</div><i class='fa fa-times' id=\"closeSideBtn\" aria-hidden='true'></i></div>`
            + `<div id='worflowOperations' class='worflowOperations'>`
            + `${labelHtml}`
            + `</div>`
            + `</div>`;
    $('#workflowDesignMainId').append(html);
    $('#closeSideBtn').click(function () {
        $('#workflowConditionMainBoxDiv').remove();
    });
    $('.worflowOperationAddBtn').click(function (event) {
        let addHtml = `<div class="mb-3">`
                + `<label for="branchInput2" class="form-label">branchInput 2</label>`
                + `<input type="text" id="branchInput2" class="form-control" placeholder="branchInput 2">`
                + `</div>`;
        $(this).prev().after(addHtml);
    });

}
function BNACaskConformationforDeletingNode(id, instance)
{
    showLoader();
    var processType = $("#visionWorkflowDesinDomainProcessId").val();
    var nodeLabel = $("#" + id).find(".label").text();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getWorkflowImpactData',
        data: {
            'process': processType,
            'role': nodeLabel,
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

}

function BNACcreateDotsToNodes(el, instance)
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

function BNACshowOriginalWorkflowMappingData()
{
    $("#worflowDesignOperationsOriginalDataId").toggleClass('expandOriginalWorkflowMappingDataClass');
    $("#worflowDesignOperationsId").toggleClass("expandEditParentWorkflowMappingDataClass")
}

function BNACgetCopyWorkFlowModel(processId)
{
    const nodes = [];
    const connections = [];
    workflowInstance.getAllConnections().forEach(conn => {
        const anchors = [
            conn.endpoints[0].anchor.type || conn.endpoints[0].anchor.name || '',
            conn.endpoints[1].anchor.type || conn.endpoints[1].anchor.name || ''
        ];

//        const connector = conn.getConnector();
//        var connectorOptions = connector._jsPlumb.instance.Defaults.Connector;
//        const connectorData = {
//            type: connectorOptions[0] || "Flowchart", // Default to "Flowchart" if not available
//            stub: connectorOptions[1].stub || [], // Get stub data if available
//            cornerRadius: connectorOptions[1].cornerRadius || 0, // Get corner radius, default to 0
//            alwaysRespectStubs: connectorOptions[1].alwaysRespectStubs || false // Respect stubs flag
//        };
//
//        const overlays = [];
//        const overlayObjects = conn.getOverlays();
//        for (const [id, overlay] of Object.entries(overlayObjects || {})) {
//            if (overlay.type === "Label") {
//                overlays.push({
//                    type: "Label",
//                    id,
//                    label: overlay.getLabel() || "",
//                    location: overlay.location || 0.5,
//                    cssClass: overlay.canvas.className || ""
//                });
//            } else if (overlay.type === "Arrow") {
//                overlays.push({
//                    type: "Arrow",
//                    id,
//                    location: overlay.location || 1,
//                    width: overlay.width || 10,
//                    length: overlay.length || 20,
//                    direction: overlay.direction || 1
//                });
//            } else {
//                overlays.push({
//                    type: overlay.type || "Unknown",
//                    id,
//                    location: overlay.location || null
//                });
//            }
//        }


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
            source: "Copy_" + conn.sourceId,
            target: "Copy_" + conn.targetId,
            anchors: anchors,
            connector: connectionDetailsMap[conn.sourceId + conn.targetId],
            overlays: overlays
        });
    });

    const data = {nodes, connections};
    return data;
}
async function BNACcopyWorkFlowModel(processId, node1left, node3left, node4left, node5left, approverleft, stewardleft, managerleft, sapleft, nonsapleft) {
    var data = await BNACgetCopyWorkFlowModel(processId);
    var width = $("#worflowDesignOperationsOriginalDataId").width();
    if (width < 1000)
    {
        return;
    }
    $("#worflowDesignOperationsDataId").hide();
    var html = `<div class="workflowMinMaxClass"><span class="workflowMinMaxImgClass" onclick="BNACworkflowMinimizeClick('worflowDesignOperationsOriginalDataId')"><img src="images/iDXPUI5Minimize.svg" width="16px"></span><span class="workflowMinMaxImgClass" onclick="BNACworkflowMaxmizeClick('worflowDesignOperationsOriginalDataId')"><img src="images/iDXPUI5Maximize.svg" width="16px"></span></div> 
                <div class="node rect-node" id="Copy_BNAC_Operator${processId}">
                        <div class="label">Operator</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                     </div>
                <div class="node empty-circle-node" id="Copy_BNAC_Return${processId}">
                     <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                </div>
                <div class="node empty-circle-node" id="Copy_BNAC_Rework${processId}">
                    <div class="dot top"></div>
                    <div class="dot right"></div>
                    <div class="dot bottom"></div>
                    <div class="dot left"></div>
               </div>
               <div class="node empty-circle-node-deleted" id="Copy_BNAC_Delete${processId}">
                   <div class="dot left"></div>
             </div>
            <div class="node rect-node" id="Copy_BNAC_OEM${processId}">
                        <div class="label">OEM</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                     </div>
            <div class="node rect-node" id="Copy_BNAC_CONTENT_MANAGER${processId}">
                      <div class="label">ContentManager</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                     </div>
            <div class="node rect-node" id="Copy_BNAC_SAP_BNAC${processId}">
                       <div class="label">SAP BNAC</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                    </div> 
            <div class="node rect-node" id="Copy_BNAC_SAP_H4HANA${processId}">
                       <div class="label">SAP S4HANA</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                    </div>
            <div class="node rect-node" id="Copy_BNAC_NON_SAP${processId}">
                       <div class="label">Non SAP</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                    </div>
                 `;
    $("#worflowDesignOperationsOriginalDataId").html(html);
    $("#worflowDesignOperationsOriginalDataId").show();
    $("body").removeClass("fiorithemeClass dark-mode Default").addClass("fiorithemeClass");
    var copyWorkflowInstance;
    jsPlumb.ready(function () {
        copyWorkflowInstance = jsPlumb.getInstance({
            Container: "worflowDesignOperationsOriginalDataId",
            Connector: ["Flowchart", {cornerRadius: 10, stub: [40, 60]}],
            Endpoint: "Dot",
            EndpointStyle: {fill: "#456", radius: 5},
            PaintStyle: {stroke: "#ddd", strokeWidth: 1},
            HoverPaintStyle: {stroke: "#007BFF", strokeWidth: 1.5},
        });
        if (processId == 1)
        {
            const allNodes = ["Copy_BNAC_Operator1", "Copy_BNAC_Return1", "Copy_BNAC_Delete1", "Copy_BNAC_Rework1", "Copy_BNAC_OEM1", "Copy_BNAC_CONTENT_MANAGER1", "Copy_BNAC_SAP_BNAC1", "Copy_BNAC_SAP_H4HANA1", "Copy_BNAC_NON_SAP1"];
            allNodes.forEach(id => {
                const el = document.getElementById(id);
                copyWorkflowInstance.draggable(el);
                BNACcreateDotsToNodes(el, copyWorkflowInstance);
            });
        } else if (processId == 2) {
            const allNodes = ["Copy_BNAC_Operator2", "Copy_BNAC_Return2", "Copy_BNAC_Delete2", "Copy_BNAC_Rework2", "Copy_BNAC_OEM2", "Copy_BNAC_CONTENT_MANAGER2", "Copy_BNAC_SAP_BNAC2", "Copy_BNAC_SAP_H4HANA2", "Copy_BNAC_NON_SAP2"];
            allNodes.forEach(id => {
                const el = document.getElementById(id);
                copyWorkflowInstance.draggable(el);
                BNACcreateDotsToNodes(el, copyWorkflowInstance);
            });
        }
        if (true) {
            const dataObjArr = data;
            if (dataObjArr !== null && Array.isArray(dataObjArr.connections) && dataObjArr.connections.length > 0) {
                dataObjArr['connections'].forEach(function (value, index) {
                    copyWorkflowInstance.connect(value);
                });
                copyWorkflowInstance.repaintEverything();
            }
        } else {
            console.warn("⚠️ 'nodes' is null, not an array, or empty.");
        }

        setTimeout(function () {
            $("#worflowDesignOperationsDataId").show();
            $("#worflowDesignOperationsDataId").css("width", "50%", "!important");
            $("#worflowDesignOperationsDataId").css("height", "100%", "!important");
            $("#worflowDesignOperationsDataId").css("border", "1px solid #cccccc", "!important");

            $("#worflowDesignOperationsOriginalDataId").css("width", "50%", "!important");
            $("#worflowDesignOperationsOriginalDataId").css("height", "100%", "!important");
            $("#worflowDesignOperationsOriginalDataId").css("border", "1px solid #cccccc", "!important");

            $('.worflowDesignOperationsDataClass').find("#BNAC_Operator" + processId + "").css("left", node1left);
            $('.worflowDesignOperationsDataClass').find("#BNAC_Return" + processId + "").css("left", node3left);
            $('.worflowDesignOperationsDataClass').find("#BNAC_Delete" + processId + "").css("left", node4left);
            $('.worflowDesignOperationsDataClass').find("#BNAC_Rework" + processId + "").css("left", node5left);
            $('.worflowDesignOperationsDataClass').find("#BNAC_OEM" + processId + "").css("left", approverleft);
            $('.worflowDesignOperationsDataClass').find("#BNAC_CONTENT_MANAGER" + processId + "").css("left", stewardleft);
            $('.worflowDesignOperationsDataClass').find("#BNAC_SAP_BNAC" + processId + "").css("left", managerleft);
            $('.worflowDesignOperationsDataClass').find("#BNAC_SAP_H4HANA" + processId + "").css("left", sapleft);
            $('.worflowDesignOperationsDataClass').find("#BNAC_NON_SAP" + processId + "").css("left", nonsapleft);

            $('.worflowDesignOperationsDataEditDivClass').find("#Copy_BNAC_Operator" + processId + "").css("left", node1left);
            $('.worflowDesignOperationsDataEditDivClass').find("#Copy_BNAC_Return" + processId + "").css("left", node3left);
            $('.worflowDesignOperationsDataEditDivClass').find("#Copy_BNAC_Delete" + processId + "").css("left", node4left);
            $('.worflowDesignOperationsDataEditDivClass').find("#Copy_BNAC_Rework" + processId + "").css("left", node5left);
            $('.worflowDesignOperationsDataEditDivClass').find("#Copy_BNAC_OEM" + processId + "").css("left", approverleft);
            $('.worflowDesignOperationsDataEditDivClass').find("#Copy_BNAC_CONTENT_MANAGER" + processId + "").css("left", stewardleft);
            $('.worflowDesignOperationsDataEditDivClass').find("#Copy_BNAC_SAP_BNAC" + processId + "").css("left", managerleft);
            $('.worflowDesignOperationsDataEditDivClass').find("#Copy_BNAC_SAP_H4HANA" + processId + "").css("left", sapleft);
            $('.worflowDesignOperationsDataEditDivClass').find("#Copy_BNAC_NON_SAP" + processId + "").css("left", sapleft);
        }, 100);


    });
}


function BNACshowNewWorkflowDesignProcess()
{
    $("#worflowDesignOperationsHeaderId").show();
    $("#worflowDesignOperationsDataId").show();
    $("#worflowDesignOperationsDataId").hide();
    $("#worflowDesignOperationsOriginalDataId").hide();
    $("#worflowDesignOperationsDataNewId").show();
    $("#worflowDesignOperationsDataNewId").css("width", "100%", "!important");
    $("#worflowDesignOperationsDataNewId").css("height", "100%", "!important");
    $("#worflowDesignOperationsDataNewId").css("position", "relative", "!important");
    BNACshowNewWorkflowDesignResourceProcess();
}
var newWorkflowInstance;
function BNACshowNewWorkflowDesignResourceProcess()
{

    jsPlumb.ready(function () {
        newWorkflowInstance = jsPlumb.getInstance({
            Container: "worflowDesignOperationsDataNewId",
            Connector: ["Flowchart", {cornerRadius: 10, stub: [40, 60]}],
            Endpoint: "Dot",
            EndpointStyle: {fill: "#456", radius: 5},
            PaintStyle: {stroke: "#ddd", strokeWidth: 1},
            HoverPaintStyle: {stroke: "#007BFF", strokeWidth: 1.5},
        });
    });
    var processType = $("#visionWorkflowDesinDomainProcessId").val();
    $("#worflowDesignOperationsHeaderId").html(`
      <div class='worflowDesignOperationsbtnwrapper'>
         <button class='workflowSaveButtonClass' id='newworkflowSaveButtonId' onclick=BNACgetNewFlowchartMappingData() style='display:none'>
          <img title='Save' src='images/iDXPUI5Save.svg' alt='Roles'>
        </button>  
        <button class="ui5gridgo-btn go-btn treeLinkActivateBTN" onclick="BNACtreeLinkActivateFn()">
            Activate
          </button> 
        <button class='workflowRolesButtonClass' id='newworkflowRolesButtonId' onclick=BNACshowWorkflowDesignRoles('${processType}') style='display:none'>
         <img title='Roles' src='images/Palette.svg' alt='Roles'>
        </button>
  
      </div>`);
    $("body").append(`<div id='${processType}RolesId' class='worflowOperationsHeaderRolesClass' style='display:none'>
            <div id='workflowFieldTechnicianRoleId' class='worflowOperationsHeaderRoleDragClass'>Field Technician</div>
            <div id='workflowFieldEngineerRoleId' class='worflowOperationsHeaderRoleDragClass'>Field Engineer</div>
            <div id='workflowReliabilityEngRoleId' class='worflowOperationsHeaderRoleDragClass'>Reliability Engineer</div>
            <div id='workflowFinanceContRoleId' class='worflowOperationsHeaderRoleDragClass'>Finance Controller</div>
            <div id='workflowOpsMainsManagerRoleId' class='worflowOperationsHeaderRoleDragClass'>Ops&Mains Manager</div>
            <div id='workflowSystemManagerRoleId' class='worflowOperationsHeaderRoleDragClass'>System Manager</div>
            </div>`);

    $("#newworkflowSaveButtonId").show();
    $("#newworkflowRolesButtonId").show();
    $(".worflowOperationsHeaderRoleDragClass").draggable({
        revert: "invalid",
        refreshPositions: true,
        cursor: 'move',
        zindex: false,
        opacity: false,
        helper: "clone"  // optional: keeps the original element in place
    });

    $(".worflowDesignOperationsDataNewClass").droppable({
        revert: true,
        refreshPositions: true,
        cursor: 'move',
        accept: '.worflowOperationsHeaderRoleDragClass',
        drop: function (event, ui) {
            var $this = $(this);
            var draggable = $(ui.draggable);
            var label = draggable[0].textContent;
            console.log("draggable");
            var checkRoleorCondition = false;
            if ($(draggable[0]).hasClass("worflowOperationsHeaderConditionDragClass"))
            {
                checkRoleorCondition = true;
            }
            var min = 10;
            var max = 100000;
            var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            const canvas = document.getElementById('worflowDesignOperationsDataNewId');
            BNACaddNewNode(label, randomNum, 50 + boxCount * 100, 1100, checkRoleorCondition, canvas, newWorkflowInstance);

        }
    });
}

function BNACgetNewFlowchartMappingData()
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
function BNACgetconditionSelection(label)
{
    var id = condCol;
    var html = "<div id='selectCondColDiv" + id + "' class='selectConMainDivClass'>"
            + "<div class='feildItem'><label>Column Name :</label>"
            + "<select id='selectCondColName" + id + "' class='selectCondClass'>"
            + "<option value='Select'>Select</option>"
            + "<option value='VERPR'>Moving Average Price</option>"
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
            + "<input type='text' id='selectCondColValue" + id + "'/></div>"
            + "</div>";
    $("#dialog").html("<div class ='conditionDialogBox'>" + html + "</div>"
            + "<div class='selectConditionRoleClass'>"
            + "<div class='feildItem'><label>Role :</label>"
            + "<select id='selectCondRole" + conditionCount + "' class='selectCondClass form-control'>"
            + "<option value='Select'>Select</option>"
            + "<option value='node1'>Field Technician</option>"
            + "<option value='approver1'>Field Engineer</option>"
            + "<option value='approver2'>Reliability Engineer</option>"
            + "<option value='approver3'>Finance Controller</option>"
            + "<option value='steward'>Operations & Maintenance Manager</option>"
            + "<option value='manager'>System Manager</option>"
            + "</select></div>"
            + "</div>"
            + "<div class='workflowconditionNewColumnButtonClass'>"
            + "<button type='button' class='workflowconditionNewColumnClass' value='Add New Column' onclick='BNACaddCondColumn(this)'>Add New Column</button>"
            + "</div>"
            + "<div id='errorConditionId' style='display:none;color:red'>Please Select Role & Condition(s)</div>");
    $("#dialog").dialog({resizable: false,
        title: 'Create',
        modal: true,
        width: 600,
        height: 270,
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    var paramColArr = [];
                    $(".conditionDialogBox").find("div.selectConMainDivClass").each(function () {
                        var divId = $(this).attr("id");
                        var divCount = divId.replace("selectCondColDiv", "");
                        var colName = $("#selectCondColName" + divCount).val();
                        var colOperator = $("#selectCondColOperator" + divCount).val();
                        var colValue = $("#selectCondColValue" + divCount).val();
                        if (colName != null && colName != '' && colName != undefined && colName != 'Select'
                                && colOperator != null && colOperator != '' && colOperator != undefined && colOperator != 'Select')
                        {
                            var paramColObj = {};
                            paramColObj['colName'] = colName;
                            paramColObj['colOperator'] = colOperator;
                            paramColObj['colValue'] = colValue;
                            paramColArr.push(paramColObj);
                        }
                    });
                    var role = $("#selectCondRole" + conditionCount).val();
                    var roleTxt = $("#selectCondRole" + conditionCount + " option:selected").text();
                    if (!(role != null && role != '' && role != undefined && role != 'Select'
                            && paramColArr != null && !jQuery.isEmptyObject(paramColArr)))
                    {
                        $("#errorConditionId").show();
                        return;
                    }
                    var jsonObj = {};
                    jsonObj['role'] = role;
                    jsonObj['paramColArr'] = paramColArr;
                    jsonObj['roleTxt'] = roleTxt;
                    $("#conditionHiddenFieldsId").append("<input type='hidden' id='" + label + conditionCount + "' value=''/>")
                    $("#" + label + conditionCount).val(JSON.stringify(jsonObj));
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

function BNACaddCondColumn()
{
    condCol++;
    var id = condCol;
    var html = "<div id='selectCondColDiv" + id + "' class='selectConMainDivClass'>"
            + "<div class='feildItem'><label>Column Name :</label>"
            + "<select id='selectCondColName" + id + "' class='selectCondClass'>"
            + "<option value='Select'>Select</option>"
            + "<option value='VERPR'>Moving Average Price</option>"
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

function saveWorkflowDesignCondition(label, source, target)
{
    var ifRole = "";
    var ifRoleTxt = "";
    var conditionDetailsStr = $("#" + label + conditionCount).val();
    var defaultRole = $("#selectDefaultCondRole" + conditionCount).val();
    var defaultRoleTxt = $("#selectDefaultCondRole" + conditionCount + " option:selected").text();
    if (!(defaultRole != null && defaultRole != '' && defaultRole != undefined && defaultRole != 'Select'
            && conditionDetailsStr != null && conditionDetailsStr != '' && conditionDetailsStr != undefined))
    {
        $("#conditionErrorId" + conditionCount).show();
        return;
    }
    var conditionDetails = JSON.parse(conditionDetailsStr);
    if (conditionDetails != null && !jQuery.isEmptyObject(conditionDetails))
    {
        ifRole = conditionDetails['role'];
        ifRoleTxt = conditionDetails['roleTxt'];
    }
    workflowInstance.getAllConnections().forEach(conn => {
        if (conn.sourceId == source && conn.targetId == target)
        {
            workflowInstance.deleteConnection(conn);
        }
    });

    const a = document.getElementById(source);
    const b = document.getElementById(target);

    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();
    const containerRect = document.getElementById('worflowDesignOperationsDataId').getBoundingClientRect();

    // Calculate mid point relative to container
    const midX = ((aRect.left + bRect.left) / 2) - containerRect.left;
    const midY = ((aRect.top + bRect.top) / 2) - containerRect.top;
    var min = 10;
    var max = 100000;


    var conditionNode = label + "node" + conditionCount;
    const canvas = document.getElementById('worflowDesignOperationsDataId');
    if ($("#" + conditionNode).length == 0)
    {
        BNACaddNewConditionNode(label + conditionCount, conditionNode, midY, midX, false, canvas, workflowInstance);
    }
    if ($("#" + ifRole).length == 0) {
        BNACaddNewConditionNode(ifRoleTxt, ifRole, midY + 100, midX, false, canvas, workflowInstance);
    }
    if ($("#" + defaultRole).length == 0) {
        BNACaddNewConditionNode(defaultRoleTxt, defaultRole, midY + 100, midX + 250, false, canvas, workflowInstance);
    }
    setTimeout(function () {
        workflowInstance.connect({
            source: source,
            target: conditionNode,
            anchors: ["Right", "Left"],
            //connector: ["Flowchart", {stub: [50, 200], cornerRadius: 15}],
            //overlays: [["Arrow", {location: 1}], ["Label", {label: "Return", location: 0.2, cssClass: "label-approve lebelLink"}]],
            createEndpoint: false
        });
        workflowInstance.connect({
            source: conditionNode,
            target: ifRole,
            anchors: ["Right", "Left"],
            //connector: ["Flowchart", {stub: [50, 200], cornerRadius: 15}],
            overlays: [["Arrow", {location: 1}], ["Label", {label: "true", location: 0.2, cssClass: "label-approve lebelLink"}]],
            createEndpoint: false
        });
        workflowInstance.connect({
            source: conditionNode,
            target: defaultRole,
            anchors: ["Right", "Left"],
            //connector: ["Flowchart", {stub: [50, 200], cornerRadius: 15}],
            overlays: [["Arrow", {location: 1}], ["Label", {label: "false", location: 0.2, cssClass: "label-approve lebelLink"}]],
            createEndpoint: false
        });
//        workflowInstance.connect({
//            source: ifRole,
//            target: target,
//            anchors: ["Bottom", "Top"],
//            //connector: ["Flowchart", {stub: [50, 200], cornerRadius: 15}],
//            //overlays: [["Arrow", {location: 1}], ["Label", {label: "Return", location: 0.2, cssClass: "label-approve lebelLink"}]],
//            createEndpoint: false
//        });
//        workflowInstance.connect({
//            source: defaultRole,
//            target: target,
//            anchors: ["Bottom", "Top"],
//            //connector: ["Flowchart", {stub: [50, 200], cornerRadius: 15}],
//            //overlays: [["Arrow", {location: 1}], ["Label", {label: "Return", location: 0.2, cssClass: "label-approve lebelLink"}]],
//            createEndpoint: false
//        });
    }, 3000);
    conditionCount++;
}

function BNACaddNewConditionNode(label, id, top, left, isCondition = false, canvas, instance) {
    boxCount++;
    const boxClass = isCondition ? "condition" : "operation";
    const box = document.createElement("div");
    box.className = "node rect-node " + boxClass;
    box.id = id;
    box.style.top = top + "px";
    box.style.left = left + "px";
    box.innerHTML = `
        <div class="label">${label}</div>
        <div class="dot top"></div>
        <div class="dot right"></div>
        <div class="dot bottom"></div>
        <div class="dot left"></div>
           `;
    canvas.append(box);
    BNACmakeDynamicAddBoxInteractable(box, instance);
    // instance.repaintEverything();
    //return box;
}

function BNACtreeLinkActivateFn()
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

function BNACworkflowMinimizeClick(id) {
    if ($("#" + id).hasClass("workflowMaxSize")) {
        $("#" + id).removeClass("workflowMaxSize")
        $("#worflowDesignOperationsId").removeClass("parentMaximize");
//        $("#workflowDesignResourceDataId").show();
//        $("#worflowDesignOperationsHeaderId").show();
//        $(".worflowDesignOperationsMainDataClass").css("width", "96%");
//        $("#worflowDesignOperationsId").css("height", "calc(100vh - 130px)");
        setTimeout(function () {
            workflowInstance.repaintEverything();
        }, 50);
    }
}
function BNACworkflowMaxmizeClick(id) {
    $("#" + id).addClass("workflowMaxSize");
    $("#worflowDesignOperationsId").addClass("parentMaximize");
//    $("#workflowDesignResourceDataId").hide();
//    $("#worflowDesignOperationsHeaderId").hide();
//    $(".worflowDesignOperationsMainDataClass").css("width", "100%");
//    $("#worflowDesignOperationsId").css("height", "calc(100vh - 55px)");
    setTimeout(function () {
        workflowInstance.repaintEverything();
    }, 50);

}





function getPathData1(connection) {
    try {
        const sourcePos = connection.source.getBoundingClientRect();
        const targetPos = connection.target.getBoundingClientRect();

        const sourceX = sourcePos.left + sourcePos.width / 2;
        const sourceY = sourcePos.top + sourcePos.height / 2;
        const targetX = targetPos.left + targetPos.width / 2;
        const targetY = targetPos.top + targetPos.height / 2;

        return {sourceX, sourceY, targetX, targetY};
    } catch (error) {
        console.error("Error getting path data:", error);
        return {sourceX: 0, sourceY: 0, targetX: 0, targetY: 0}; // Fallback to avoid crashes
    }
}

// Function to animate the line along the connection path
function moveLineAlongConnection1(connection, line) {
    const {sourceX, sourceY, targetX, targetY} = getPathData1(connection);

    let currentX = sourceX;
    let currentY = sourceY;

    const duration = 2000; // Animation duration in ms
    const startTime = Date.now();

    // Function to update the position of the line
    function animateLine1() {
        const timeElapsed = Date.now() - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1

        // Move the line along the path (lerp between source and target)
        currentX = sourceX + (targetX - sourceX) * progress;
        currentY = sourceY + (targetY - sourceY) * progress;

        line.style.left = `${currentX}px`;
        line.style.top = `${currentY}px`;

        if (progress < 1) {
            requestAnimationFrame(animateLine1); // Continue animating
        }
    }

    animateLine1(); // Start animating the line
}

// Handle the line movement on button click
//document.getElementById('navigateBtn').addEventListener('click', () => {
function BNACNavigateNewWorkflowDesignProcess1() {
    // Dynamically create the line element if it doesn't exist
    let line = document.getElementById('workflowDesignLineId');
    if (!line) {
        line = document.createElement('div');
        line.id = 'workflowDesignLineId';
        line.style = 'color:red';
        document.body.appendChild(line);
    }

    const connections = workflowInstance.getConnections(); // Get all the connections
    console.log("Connections:", connections); // Debug connections

    if (connections.length === 0) {
        console.warn("No connections found to animate.");
        return;
    }

    let currentConnectionIndex = 0;

    // Function to move the line along each connection
    function moveLine1() {
        if (currentConnectionIndex >= connections.length) {
            return; // Stop if no more connections
        }

        const connection = connections[currentConnectionIndex];
        moveLineAlongConnection1(connection, line);

        currentConnectionIndex++;
        if (currentConnectionIndex < connections.length) {
            setTimeout(moveLine1, 3000); // Delay before moving to the next connection
        }
    }

    moveLine1(); // Start moving the line
//});
}










function getEndpointPositions(connection) {
    try {
        const container = document.getElementById("worflowDesignOperationsDataId");
        const containerRect = container.getBoundingClientRect();

        const sourceEndpoint = connection.endpoints[0];
        const targetEndpoint = connection.endpoints[1];
        const sourceElement = sourceEndpoint.element;
        const targetElement = targetEndpoint.element;

        // Get the bounding box of the elements relative to the viewport
        const sourcePos = sourceElement.getBoundingClientRect();
        const targetPos = targetElement.getBoundingClientRect();

        // Calculate the base positions (center of the nodes)
        let sourceX = sourcePos.left + sourcePos.width / 2;
        let sourceY = sourcePos.top + sourcePos.height / 2;
        let targetX = targetPos.left + targetPos.width / 2;
        let targetY = targetPos.top + targetPos.height / 2;

        const sourceAnchor = sourceEndpoint.anchor.type;
        const targetAnchor = targetEndpoint.anchor.type;

        // Adjust for anchor positions
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

        // Adjust for endpoint radius (Dot endpoint with radius: 4)
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

        // Adjust for the canvas's position relative to the viewport
        sourceX -= containerRect.left;
        sourceY -= containerRect.top;
        targetX -= containerRect.left;
        targetY -= containerRect.top;

        // Account for scrolling within the container or its parents
        let parent = container;
        while (parent && parent !== document.body) {
            sourceX += parent.scrollLeft || 0;
            sourceY += parent.scrollTop || 0;
            targetX += parent.scrollLeft || 0;
            targetY += parent.scrollTop || 0;
            parent = parent.parentElement;
        }

        // Log endpoint positions for debugging
        console.log(`Source (X: ${sourceX}, Y: ${sourceY}), Target (X: ${targetX}, Y: ${targetY})`);



        return {sourceX, sourceY, targetX, targetY};
    } catch (error) {
        console.error("Error getting endpoint positions:", error);
        return {sourceX: 0, sourceY: 0, targetX: 0, targetY: 0};
    }
}

// Function to parse the SVG path and return an array of points
function getConnectorPathPoints(connection) {
    try {
        const container = document.getElementById("worflowDesignOperationsDataId");
        const containerRect = container.getBoundingClientRect();

        // Calculate the offset of the canvas relative to the viewport
        let offsetX = 0;
        let offsetY = 0;

        // The SVG path is already in the container's coordinate system, so we don't need to add viewport offsets
        // Just account for scrolling within the container or its parents
        let parent = container;
        while (parent && parent !== document.body) {
            offsetX += parent.scrollLeft || 0;
            offsetY += parent.scrollTop || 0;
            parent = parent.parentElement;
        }

        // Log offsets for debugging
        console.log(`Container Offset (X: ${offsetX}, Y: ${offsetY})`);

        // Get the SVG path
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

        // Log the SVG path for debugging
        console.log("SVG Path:", pathStr);

        // Create an SVG path element dynamically
        const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathElement.setAttribute("d", pathStr);

        // Get the path's total length
        const pathLength = pathElement.getTotalLength();

        // Array to store the points of the path
        const points = [];
        const stepSize = 5; // Adjust for density of points
        for (let i = 0; i <= pathLength; i += stepSize) {
            const point = pathElement.getPointAtLength(i);
            const x = point.x + offsetX;
            const y = point.y + offsetY;
            points.push({x, y});
        }



        return points;
    } catch (error) {
        console.error("Error getting connector path points:", error);
        return [];
    }
}

// Function to shift the entire path to align start and end points with anchors
function alignPathToAnchors(points, sourceX, sourceY, targetX, targetY) {
    if (points.length < 2)
        return points;

    const startX = points[0].x;
    const startY = points[0].y;
    const deltaXStart = sourceX - startX;
    const deltaYStart = sourceY - startY;

    const shiftedPoints = points.map(point => ({
            x: point.x + deltaXStart,
            y: point.y + deltaYStart,
        }));

    const endX = shiftedPoints[shiftedPoints.length - 1].x;
    const endY = shiftedPoints[shiftedPoints.length - 1].y;
    const deltaXEnd = targetX - endX;
    const deltaYEnd = targetY - endY;

    const finalPoints = shiftedPoints.map((point, index) => {
        const t = index / (shiftedPoints.length - 1);
        const adjustX = deltaXEnd * t;
        const adjustY = deltaYEnd * t;
        return {
            x: point.x + adjustX,
            y: point.y + adjustY,
        };
    });

    return finalPoints;
}

// Animate dot along the points
function animateThroughPoints(points, line, speed, onComplete) {
    let index = 0;
    let progress = 0;

    function animate() {
        if (index >= points.length - 1) {
            if (onComplete)
                onComplete();
            return;
        }

        const p1 = points[index];
        const p2 = points[index + 1];
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const len = Math.sqrt(dx * dx + dy * dy);

        if (len === 0) {
            index++;
            progress = 0;
            requestAnimationFrame(animate);
            return;
        }

        progress += speed;
        const t = Math.min(progress / len, 1);
        const x = p1.x + dx * t;
        const y = p1.y + dy * t;

        line.style.left = `${x}px`;
        line.style.top = `${y}px`;

        if (t >= 1) {
            index++;
            progress = 0;
        }

        requestAnimationFrame(animate);
    }

    animate();
}

// Animate through a jsPlumb connection
function moveLineAlongConnection(connection, line, onComplete) {
    let points = getConnectorPathPoints(connection);
    if (points.length < 2) {
        console.warn("Not enough points to animate.");
        if (onComplete)
            onComplete();
        return;
    }

    const {sourceX, sourceY, targetX, targetY} = getEndpointPositions(connection);
    points = alignPathToAnchors(points, sourceX, sourceY, targetX, targetY);

    animateThroughPoints(points, line, 20, onComplete);
}

// Animate through all connections
function BNACNavigateNewWorkflowDesignProcess2() {


    let line = document.getElementById("workflowDesignLineId");
    if (!line) {
        line = document.createElement("div");
        line.id = "workflowDesignLineId";
        document.getElementById("worflowDesignOperationsDataId").appendChild(line);
    }

    workflowInstance.repaintEverything();

    // Use a Promise to wait for repaint to complete
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    }).then(() => {
        const connections = workflowInstance.getConnections();
        if (!connections.length) {
            console.warn("No connections to animate.");
            return;
        }

        let current = 0;

        function next() {
            if (current >= connections.length)
                return;
            const conn = connections[current];
            console.log("Animating connection:", conn.sourceId, "→", conn.targetId);
            moveLineAlongConnection(conn, line, () => {
                current++;
                setTimeout(next, 1000);
            });
        }

        next();
    });
}



//function groupConnectionsBySourceAnchor(connections) {
//    const groups = {};
//    const seenConnections = new Set(); // Track unique connections
//
//    for (const conn of connections) {
//        const anchor = conn.endpoints[0].anchor.type;
//        if (!anchor) {
//            console.warn(`Skipping connection ${conn.sourceId} -> ${conn.targetId}: invalid anchor`);
//            continue;
//        }
//
//        // Create a unique identifier for the connection
//        const connId = `${conn.sourceId}_${conn.targetId}_${anchor}`;
//        if (seenConnections.has(connId)) {
//            console.warn(`Duplicate connection detected: ${connId}`);
//            continue;
//        }
//        seenConnections.add(connId);
//
//        const key = `${conn.sourceId}_${anchor}`;
//        if (!groups[key]) {
//            groups[key] = [];
//        }
//        groups[key].push(conn);
//    }
//
//    console.log("Grouped connections output:", groups);
//    return groups;
//}
//
//function BNACNavigateNewWorkflowDesignProcess() {
//    workflowInstance.repaintEverything();
//
//    new Promise((resolve) => {
//        setTimeout(resolve, 1000);
//    }).then(() => {
//        const connections = workflowInstance.getConnections();
//        if (!connections.length) {
//            console.warn("No connections to animate.");
//            return;
//        }
//
//        // Deduplicate connections
//        const seenConnections = new Set();
//        const uniqueConnections = connections.filter(conn => {
//            const anchor = conn.endpoints[0].anchor.type || "unknown";
//            const connId = `${conn.sourceId}_${conn.targetId}_${anchor}`;
//            if (seenConnections.has(connId)) {
//                console.warn(`Duplicate connection filtered: ${connId}`);
//                return false;
//            }
//            seenConnections.add(connId);
//            return true;
//        });
//
//        console.log("Unique connections:", uniqueConnections);
//
//        // Flexible label check
//        const validConnections = uniqueConnections.filter(conn => {
//            const overlayObjects = conn.getOverlays();
//            for (const [id, overlay] of Object.entries(overlayObjects || {})) {
//                if (overlay.type === "Label") {
//                    const label = overlay.getLabel();
//                    if (label != null && label != '' && label != undefined && label != 'Deleted')
//                    {
//                        return label && label.trim() !== "";
//                    }
//                }
//            }
//        });
//
//        console.log("Valid connections:", validConnections);
//        if (!validConnections.length) {
//            console.warn("No connections with valid labels to animate.");
//            return;
//        }
//
//        const grouped = groupConnectionsBySourceAnchor(validConnections);
//        const singleConnections = [];
//        const groupedKeys = Object.keys(grouped);
//        const processedConnIds = new Set(); // Track connections to avoid duplicates in singleConnections
//
//        console.log("Grouped keys:", groupedKeys);
//
//        // Separate grouped (multiple targets) and single connections
//        validConnections.forEach(conn => {
//            const anchor = conn.endpoints[0].anchor.type || "unknown";
//            const connId = `${conn.sourceId}_${conn.targetId}_${anchor}`;
//            if (processedConnIds.has(connId)) {
//                console.warn(`Duplicate connection in singleConnections: ${connId}`);
//                return;
//            }
//
//            const key = `${conn.sourceId}_${anchor}`;
//            if (grouped[key] && grouped[key].length > 1) {
//                return; // Part of a multi-target group
//            }
//
//            singleConnections.push(conn);
//            processedConnIds.add(connId);
//        });
//
//        console.log("Single connections:", singleConnections);
//
//        // Track animating groups to prevent double calls
//        let currentAnimatingGroup = null;
//
//        // Sequentially animate single connections
//        let currentSingleIndex = 0;
//
//        function animateSingleConnections() {
//            if (currentAnimatingGroup !== null || currentSingleIndex >= singleConnections.length) {
//                currentAnimatingGroup = null;
//                console.log("Finished animating single connections.");
//                return;
//            }
//            currentAnimatingGroup = `single_${currentSingleIndex}`;
//
//            const conn = singleConnections[currentSingleIndex];
//            let line = document.createElement("div");
//            line.className = "workflowLineDot";
//            line.id = `workflowDesignLineId_${conn.sourceId}_${currentSingleIndex}`;
//            document.getElementById("worflowDesignOperationsDataId").appendChild(line);
//
//            console.log(`Animating single connection ${currentSingleIndex}: ${conn.sourceId} -> ${conn.targetId}`);
//
//            moveLineAlongConnection(conn, line, () => {
//                setTimeout(() => {
//                    line.remove();
//                    currentSingleIndex++;
//                    currentAnimatingGroup = null;
//                    animateSingleConnections(); // Process next single connection
//                }, 500);
//            });
//        }
//
//        // Handle grouped connections (simultaneous animations for multiple targets)
//        let currentGroupIndex = 0;
//
//        function animateNextGroup() {
//            if (currentAnimatingGroup !== null || currentGroupIndex >= groupedKeys.length) {
//                currentAnimatingGroup = null;
//                console.log("Finished animating grouped connections, starting single connections.");
//                //animateSingleConnections();
//                return;
//            }
//
//            const groupKey = groupedKeys[currentGroupIndex];
//            const group = grouped[groupKey];
//            if (!group || group.length === 0) {
//                console.warn(`Empty or invalid group at index ${currentGroupIndex}, key: ${groupKey}`);
//                currentGroupIndex++;
//                animateNextGroup();
//                return;
//            }
//
//            currentAnimatingGroup = `group_${currentGroupIndex}`;
//            console.log(`Starting group ${currentGroupIndex} (key: ${groupKey}, size: ${group.length}):`, group);
//
//            if (group.length > 1) {
//                // Animate all lines for this group simultaneously
//                const lines = group.map((conn, index) => {
//                    let line = document.createElement("div");
//                    const overlayObjects = conn.getOverlays();
//                    for (const [id, overlay] of Object.entries(overlayObjects || {})) {
//                        if (overlay.type === "Label") {
//                            const label = overlay.getLabel();
//                            if (label != null && label != '' && label != undefined && label == 'Return')
//                            {
//                                line.className = "workflowLineReturnDot";
//                            } else {
//                                line.className = "workflowLineDot";
//                            }
//                        }
//                    }
//                    line.id = `workflowDesignLineId_${conn.sourceId}_${index}`;
//                    document.getElementById("worflowDesignOperationsDataId").appendChild(line);
//                    return line;
//                });
//
//                let completedConnections = 0;
//                const totalConnections = group.length;
//
//                group.forEach((conn, index) => {
//                    console.log(`Animating group connection ${index} (group ${currentGroupIndex}): ${conn.sourceId} -> ${conn.targetId}`);
//                    moveLineAlongConnection(conn, lines[index], () => {
//                        console.log(`Completed group connection ${index} (group ${currentGroupIndex}): ${conn.sourceId} -> ${conn.targetId}`);
//                        setTimeout(() => {
//                            lines[index].remove();
//                            completedConnections++;
//                            console.log(`Group ${currentGroupIndex} progress: ${completedConnections}/${totalConnections} connections completed`);
//                            if (completedConnections === totalConnections && currentAnimatingGroup === `group_${currentGroupIndex}`) {
//                                console.log(`Finished group ${currentGroupIndex}, moving to next group`);
//                                currentGroupIndex++;
//                                currentAnimatingGroup = null;
//                                animateNextGroup(); // Process next group
//                            }
//                        }, 500);
//                    });
//                });
//            } else {
//                // Single connection in the group, treat as sequential
//                const conn = group[0];
//                let line = document.createElement("div");
//                const overlayObjects = conn.getOverlays();
//                for (const [id, overlay] of Object.entries(overlayObjects || {})) {
//                    if (overlay.type === "Label") {
//                        const label = overlay.getLabel();
//                        if (label != null && label != '' && label != undefined && label == 'Return')
//                        {
//                            line.className = "workflowLineReturnDot";
//                        } else {
//                            line.className = "workflowLineDot";
//                        }
//                    }
//                }
//                line.id = `workflowDesignLineId_${conn.sourceId}`;
//                document.getElementById("worflowDesignOperationsDataId").appendChild(line);
//
//                console.log(`Animating single group connection (group ${currentGroupIndex}): ${conn.sourceId} -> ${conn.targetId}`);
//
//                moveLineAlongConnection(conn, line, () => {
//                    console.log(`Completed single group connection (group ${currentGroupIndex}): ${conn.sourceId} -> ${conn.targetId}`);
//                    setTimeout(() => {
//                        line.remove();
//                        currentGroupIndex++;
//                        currentAnimatingGroup = null;
//                        animateNextGroup(); // Process next group
//                    }, 500);
//                });
//            }
//        }
//
//        console.log("Starting animation process.");
//        animateNextGroup(); // Start the process with the first group
//    });
//}









// Helper function to extract label from connection
function groupConnectionsBySourceAnchor(connections) {
    const groups = {};
    const seenConnections = new Set();
    const targetSourceAnchorMap = {};

    // First pass: Build targetSourceAnchorMap to count connections
    for (const conn of connections) {
        const sourceAnchor = conn.endpoints[0].anchor.type; // Source anchor (e.g., Right)
        const targetAnchor = conn.endpoints[1].anchor.type; // Target anchor (e.g., Top)
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

        // Track connections by targetId, targetAnchor, and sourceAnchor
        const targetSourceKey = `${conn.targetId}_${targetAnchor}_${sourceAnchor}`;
        if (!targetSourceAnchorMap[targetSourceKey]) {
            targetSourceAnchorMap[targetSourceKey] = [];
        }
        targetSourceAnchorMap[targetSourceKey].push(conn);
    }

    // Second pass: Group connections based on targetSourceAnchorMap
    for (const conn of connections) {
        const sourceAnchor = conn.endpoints[0].anchor.type;
        const targetAnchor = conn.endpoints[1].anchor.type;
        if (!sourceAnchor || !targetAnchor) {
            continue; // Already warned in first pass
        }

        const targetSourceKey = `${conn.targetId}_${targetAnchor}_${sourceAnchor}`;
        const sourceKey = `${conn.sourceId}_${sourceAnchor}`;

        // Group by targetId_targetAnchor_sourceAnchor if multiple sources share same target, target anchor, and source anchor
        if (targetSourceAnchorMap[targetSourceKey].length > 1) {
            if (!groups[targetSourceKey]) {
                groups[targetSourceKey] = [];
            }
            groups[targetSourceKey].push(conn);
        } else {
            // Otherwise, group by sourceId_sourceAnchor
            if (!groups[sourceKey]) {
                groups[sourceKey] = [];
            }
            groups[sourceKey].push(conn);
        }
    }

    console.log("Grouped connections output:", groups);
    return groups;
}

function BNACNavigateNewWorkflowDesignProcess() {
    workflowInstance.repaintEverything();

    new Promise((resolve) => {
        setTimeout(resolve, 1000);
    }).then(() => {
        const connections = workflowInstance.getConnections();
        if (!connections.length) {
            console.warn("No connections to animate.");
            return;
        }

        // Deduplicate connections
        const seenConnections = new Set();
        const uniqueConnections = connections.filter(conn => {
            const sourceAnchor = conn.endpoints[0].anchor.type || "unknown";
            const targetAnchor = conn.endpoints[1].anchor.type || "unknown";
            const connId = `${conn.sourceId}_${conn.targetId}_${sourceAnchor}_${targetAnchor}`;
            if (seenConnections.has(connId)) {
                console.warn(`Duplicate connection filtered: ${connId}`);
                return false;
            }
            seenConnections.add(connId);
            return true;
        });

        console.log("Unique connections:", uniqueConnections);

        // Flexible label check
        const validConnections = uniqueConnections.filter(conn => {
            const overlayObjects = conn.getOverlays();
            for (const [id, overlay] of Object.entries(overlayObjects || {})) {
                if (overlay.type === "Label") {
                    const label = overlay.getLabel();
                    if (label != null && label !== '' && label !== undefined && label !== 'Deleted') {
                        return label && label.trim() !== "";
                    }
                }
            }
            return false;
        });

        console.log("Valid connections:", validConnections);
        if (!validConnections.length) {
            console.warn("No connections with valid labels to animate.");
            return;
        }

        const grouped = groupConnectionsBySourceAnchor(validConnections);
        const singleConnections = [];
        const groupedKeys = Object.keys(grouped);
        const processedConnIds = new Set();

        console.log("Grouped keys:", groupedKeys);

        // Separate grouped (multiple connections) and single connections
        validConnections.forEach(conn => {
            const sourceAnchor = conn.endpoints[0].anchor.type || "unknown";
            const targetAnchor = conn.endpoints[1].anchor.type || "unknown";
            const connId = `${conn.sourceId}_${conn.targetId}_${sourceAnchor}_${targetAnchor}`;
            if (processedConnIds.has(connId)) {
                console.warn(`Duplicate connection in singleConnections: ${connId}`);
                return;
            }

            const sourceKey = `${conn.sourceId}_${sourceAnchor}`;
            const targetSourceKey = `${conn.targetId}_${targetAnchor}_${sourceAnchor}`;
            // Check if the connection is part of a multi-connection group
            if ((grouped[sourceKey] && grouped[sourceKey].length > 1) || 
                (grouped[targetSourceKey] && grouped[targetSourceKey].length > 1)) {
                return; // Part of a multi-connection group
            }

            singleConnections.push(conn);
            processedConnIds.add(connId);
        });

        console.log("Single connections:", singleConnections);

        let currentAnimatingGroup = null;
        let currentSingleIndex = 0;

        function animateSingleConnections() {
            if (currentAnimatingGroup !== null || currentSingleIndex >= singleConnections.length) {
                currentAnimatingGroup = null;
                console.log("Finished animating single connections.");
                return;
            }
            currentAnimatingGroup = `single_${currentSingleIndex}`;

            const conn = singleConnections[currentSingleIndex];
            let line = document.createElement("div");
            line.className = "workflowLineDot";
            line.id = `workflowDesignLineId_${conn.sourceId}_${currentSingleIndex}`;
            document.getElementById("worflowDesignOperationsDataId").appendChild(line);

            console.log(`Animating single connection ${currentSingleIndex}: ${conn.sourceId} -> ${conn.targetId}`);

            moveLineAlongConnection(conn, line, () => {
                setTimeout(() => {
                    line.remove();
                    currentSingleIndex++;
                    currentAnimatingGroup = null;
                    animateSingleConnections();
                }, 500);
            });
        }

        let currentGroupIndex = 0;

        function animateNextGroup() {
            if (currentAnimatingGroup !== null || currentGroupIndex >= groupedKeys.length) {
                currentAnimatingGroup = null;
                console.log("Finished animating grouped connections, starting single connections.");
                //animateSingleConnections(); // Start single connections after groups
                return;
            }

            const groupKey = groupedKeys[currentGroupIndex];
            const group = grouped[groupKey];
            if (!group || group.length === 0) {
                console.warn(`Empty or invalid group at index ${currentGroupIndex}, key: ${groupKey}`);
                currentGroupIndex++;
                animateNextGroup();
                return;
            }

            currentAnimatingGroup = `group_${currentGroupIndex}`;
            console.log(`Starting group ${currentGroupIndex} (key: ${groupKey}, size: ${group.length}):`, group);

            if (group.length > 1) {
                // Animate all lines for this group simultaneously
                const lines = group.map((conn, index) => {
                    let line = document.createElement("div");
                    const overlayObjects = conn.getOverlays();
                    for (const [id, overlay] of Object.entries(overlayObjects || {})) {
                        if (overlay.type === "Label") {
                            const label = overlay.getLabel();
                            if (label != null && label !== '' && label !== undefined && label === 'Return') {
                                line.className = "workflowLineReturnDot";
                            } else {
                                line.className = "workflowLineDot";
                            }
                        }
                    }
                    line.id = `workflowDesignLineId_${conn.sourceId}_${index}`;
                    document.getElementById("worflowDesignOperationsDataId").appendChild(line);
                    return line;
                });

                let completedConnections = 0;
                const totalConnections = group.length;

                group.forEach((conn, index) => {
                    console.log(`Animating group connection ${index} (group ${currentGroupIndex}): ${conn.sourceId} -> ${conn.targetId}`);
                    moveLineAlongConnection(conn, lines[index], () => {
                        console.log(`Completed group connection ${index} (group ${currentGroupIndex}): ${conn.sourceId} -> ${conn.targetId}`);
                        setTimeout(() => {
                            lines[index].remove();
                            completedConnections++;
                            console.log(`Group ${currentGroupIndex} progress: ${completedConnections}/${totalConnections} connections completed`);
                            if (completedConnections === totalConnections && currentAnimatingGroup === `group_${currentGroupIndex}`) {
                                console.log(`Finished group ${currentGroupIndex}, moving to next group`);
                                currentGroupIndex++;
                                currentAnimatingGroup = null;
                                animateNextGroup();
                            }
                        }, 500);
                    });
                });
            } else {
                // Single connection in the group, treat as sequential
                const conn = group[0];
                let line = document.createElement("div");
                const overlayObjects = conn.getOverlays();
                for (const [id, overlay] of Object.entries(overlayObjects || {})) {
                    if (overlay.type === "Label") {
                        const label = overlay.getLabel();
                        if (label != null && label !== '' && label !== undefined && label === 'Return') {
                            line.className = "workflowLineReturnDot";
                        } else {
                            line.className = "workflowLineDot";
                        }
                    }
                }
                line.id = `workflowDesignLineId_${conn.sourceId}`;
                document.getElementById("worflowDesignOperationsDataId").appendChild(line);

                console.log(`Animating single group connection (group ${currentGroupIndex}): ${conn.sourceId} -> ${conn.targetId}`);

                moveLineAlongConnection(conn, line, () => {
                    console.log(`Completed single group connection (group ${currentGroupIndex}): ${conn.sourceId} -> ${conn.targetId}`);
                    setTimeout(() => {
                        line.remove();
                        currentGroupIndex++;
                        currentAnimatingGroup = null;
                        animateNextGroup();
                    }, 500);
                });
            }
        }

        console.log("Starting animation process.");
        animateNextGroup();
    });
}

