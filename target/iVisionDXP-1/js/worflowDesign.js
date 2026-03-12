/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var connectionDetailsMap = {};
function getWorkflowMappingComponent(treeId)
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
                                                <option value='ASSET'>Asset</option>
                                            </select> 
                                        </span> 
                                    </div>
                                </div>
                                <div id="" class="ui5gridfilter-item">
                                    <label for="Search">Process</label>
                                    <div class="ui5gridfilter-inputFeildDiv">  
                                        <span class="ui5gridinputFeildSpan" style="width:100%"> 
                                             <select id='visionWorkflowDesinDomainProcessId'>
                                                <option value='CREATE'>Create</option>
                                                <option value='EXTEND'>Extend</option>
                                                <option value='CHANGE'>Change</option>
                                                <option value='BLOCK'>Block</option>
                                                <option value='UNBLOCK'>Un Block</option>
                                            </select>
                                        </span> 
                                    </div>
                                </div>
                         <div class="ui5gridbutton-row">
                            <button class="ui5gridgo-btn go-btn" onclick="showWorkflowDesignResourceProcess()">Preview</button> 
                            <button class="ui5gridgo-btn go-btn" onclick="showNewWorkflowDesignProcess()">Create New</button> 
                            <button class="ui5gridgo-btn go-btn" onclick="showNavigateNewWorkflowDesignProcess()">Navigate</button>
                        </div>
                        </div>
                       
                    </div>
               </div>`;

        $("#worflowDesignResourcesId").html(workflowTabsDesign);

        //$("#worflowDesignOperationsId").html("<div id='worflowDesignOperationsDataId' class='worflowDesignOperationsDataClass'></div><div id='worflowDesignOperationsHeaderId' class='worflowDesignOperationsHeaderClass' style='display:none'></div>")
        $("#worflowDesignOperationsId").html("<div class='worflowDesignOperationsMainDataClass'><div id='worflowDesignOperationsOriginalDataId' class='worflowDesignOperationsDataClass worflowDesignOperationsDataEditDivClass' style='display:none'></div><div id='worflowDesignOperationsDataId' class='worflowDesignOperationsDataClass' style='display:none'></div><div id='worflowDesignOperationsDataNewId' class='worflowDesignOperationsDataNewClass' style='display:none'></div></div><div id='worflowDesignOperationsHeaderId' class='worflowDesignOperationsHeaderClass' style='display:none'></div>");
        var html = `<div class="workflowMinMaxClass"><span class="workflowMinMaxImgClass" id="workflowMinId" onclick="workflowMinimizeClick('worflowDesignOperationsDataId')"><img src="images/iDXPUI5Minimize.svg" width="16px"></span><span class="workflowMinMaxImgClass" id="workflowMaxId" onclick="workflowMaxmizeClick('worflowDesignOperationsDataId')"><img src="images/iDXPUI5Maximize.svg" width="16px"></span></div> 
                   <div class="node rect-node" id="node1">
                        <div class="label">Field Technician</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                     </div>
                <div class="node empty-circle-node" id="node3">
                       <div class="dot right"></div>
                        <div class="dot left"></div>
                </div>
                <div class="node empty-circle-node" id="node5">
                    <div class="dot right"></div>
                    <div class="dot left"></div>
               </div>
               <div class="node empty-circle-node-deleted" id="node4">
                   <div class="dot left"></div>
             </div>
            <div class="node rect-node" id="approver1">
                        <div class="label">Field Engineer</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                     </div>
            <div class="node rect-node" id="approver2">
                      <div class="label">Reliability Engineer</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                     </div>
            <div class="node rect-node" id="approver3">
                        <div class="label">Finance Controller</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                     </div>
            <div class="node rect-node" id="steward">
                        <div class="label">Operations & Maintenance Manager</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                     </div>
            <div class="node rect-node" id="manager">
                       <div class="label">System Manager</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                    </div> 
            <div class="node rect-node" id="sap">
                       <div class="label">SAP</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                    </div>
                 `;
//        $("#worflowDesignOperationsHeaderId").html(`<div class="ui5gridbutton-row treeLinkEditDiv">
//                            <button class="ui5gridgo-btn go-btn treeLinkEditBTN" onclick="treeLinkEditFn()">Edit</button> 
//                        </div>`);
        $("#worflowDesignOperationsOriginalDataId").html(html);


    } catch (e) {

    }


}



function showWorkflowDesignResourceSubButtons(id)
{
    $("#" + id).toggle();
}
var boxCount = 0;
var jsPlumbInstance;
function showWorkflowDesignResourceProcess2()
{
    $("#worflowDesignOperationsHeaderId").show();
    $("#worflowDesignOperationsDataId").show();
    newWorkFlowModel();
}
function showWorkflowDesignResourceProcess1()
{
    $("#worflowDesignOperationsHeaderId").show();
    $("#worflowDesignOperationsDataId").show();
    newWorkFlowModel();
    var processType = $("#visionWorkflowDesinDomainProcessId").val();
    $("#worflowDesignOperationsHeaderId").html(`
      <div class='worflowDesignOperationsbtnwrapper'>
          <button class="ui5gridgo-btn go-btn treeLinkEditBTN" onclick="treeLinkEditFn()">
            Edit
          </button> 
          <button class="ui5gridgo-btn go-btn treeLinkActivateBTN" onclick="treeLinkActivateFn()">
            Edit
          </button> 
         <button class='workflowSaveButtonClass' id='workflowSaveButtonId' onclick=getFlowchartMappingData() style='display:none'>
          <img title='Save' src='images/iDXPUI5Save.svg' alt='Roles'>
        </button>  
        <button class='workflowRolesButtonClass' id='workflowRolesButtonId' onclick=showWorkflowDesignRoles('${processType}') style='display:none'>
         <img title='Roles' src='images/Palette.svg' alt='Roles'>
        </button>
  
      </div>`);
    $("body").append(`<div id='${processType}RolesId' class='worflowOperationsHeaderRolesClass' style='display:none'>
            <div id='workflowRequestorRoleId' class='worflowOperationsHeaderRoleDragClass'>Requestor</div>
            <div id='workflowApproverRoleId' class='worflowOperationsHeaderRoleDragClass'>Approver</div>
            <div id='workflowManagerRoleId' class='worflowOperationsHeaderRoleDragClass'>Manager</div>
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

    const canvas = document.getElementById('worflowDesignOperationsDataId');
    jsPlumb.ready(function () {
        jsPlumbInstance = jsPlumb.getInstance({
            Container: canvas,
            Connector: ["Flowchart", {stub: [10, 20], gap: 5}],
            Endpoint: ["Dot", {radius: 5}],
            PaintStyle: {stroke: "#0b4a99", strokeWidth: 1},
            EndpointStyle: {fill: "#1890ff"},
            ConnectionOverlays: [
                ["Arrow", {location: 1, width: 10, length: 10}],
                ["Custom", {
                        create: function () {
                            const div = document.createElement("div");
                            div.className = "delete-icon";
                            div.innerHTML = "X";
                            return div;
                        },
                        location: 0.5,
                        id: "deleteOverlay"
                    }]
            ]
        });


        jsPlumbInstance.bind("beforeDrop", function (info)
        {
            const existing = jsPlumbInstance.getConnections({
                source: info.sourceId,
                target: info.targetId
            });
            if (existing.length > 0) {
                alert("This connection already exists.");
                return false;
            }
            return true;
        });
        jsPlumbInstance.bind("connection", function (info) {
            const sourceDot = info.sourceEndpoint.element;
            if (sourceDot.parentElement.classList.contains("operation"))
                return;
            if (!sourceDot)
                return;

            const classList = sourceDot.classList;

            let labelText = "";

            if (classList.contains("right")) {
                labelText = "No";
            } else if (classList.contains("bottom")) {
                labelText = "Yes";
            }

            if (labelText !== "") {
                info.connection.addOverlay([
                    "Label",
                    {
                        label: labelText,
                        id: "label",
                        cssClass: "connection-label",
                        location: 0.75, // Position along the connection line (0 to 1)
                        events: {
                            click: function () {
                                alert("Link Label: " + labelText);
                            }
                        }
                    }
                ]);
            }
        });
        jsPlumbInstance.bind("mouseover", function (conn) {
            const overlay = conn.getOverlay("deleteOverlay");
            if (overlay)
                overlay.setVisible(true);
        });
        jsPlumbInstance.bind("mouseout", function (conn) {
            const overlay = conn.getOverlay("deleteOverlay");
            if (overlay)
                overlay.setVisible(false);
        });
        jsPlumbInstance.bind("click", function (conn) {
            const overlay = conn.getOverlay("deleteOverlay");
            if (overlay)
                jsPlumbInstance.deleteConnection(conn);
        });
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
            addBox(label, randomNum, 50 + boxCount * 100, 50, checkRoleorCondition, canvas, workflowInstance);
            //addNewNode(label, randomNum, 50 + boxCount * 100, 50, checkRoleorCondition, canvas, jsPlumbInstance);

        }
    });
}
function showWorkflowDesignResourceProcess()
{
    $("#worflowDesignOperationsHeaderId").show();
    $("#worflowDesignOperationsOriginalDataId").show();
    $("#worflowDesignOperationsDataNewId").hide();
    $("#worflowDesignOperationsDataId").hide();
    $("#worflowDesignOperationsOriginalDataId").css("width", "100%", "!important");
    $("#worflowDesignOperationsOriginalDataId").css("height", "100%", "!important");
    $("#worflowDesignOperationsOriginalDataId").css("position", "relative", "!important");
    newWorkFlowModel();
    var processType = $("#visionWorkflowDesinDomainProcessId").val();
    $("#worflowDesignOperationsHeaderId").html(`
      <div class='worflowDesignOperationsbtnwrapper'>
          <button class="ui5gridgo-btn go-btn treeLinkEditBTN" onclick="treeLinkEditFn()">
            Edit
          </button> 
          <button class="ui5gridgo-btn go-btn treeLinkActivateBTN" id='workflowActivateButtonId' style='display:none' onclick="treeLinkActivateFn()">
            Activate
          </button> 
         <button class='workflowSaveButtonClass' id='workflowSaveButtonId' onclick=getFlowchartMappingData() style='display:none'>
          <img title='Save' src='images/iDXPUI5Save.svg' alt='Roles'>
        </button>  
        <button class='workflowRolesButtonClass' id='workflowRolesButtonId' onclick=showWorkflowDesignRoles('${processType}') style='display:none'>
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
            if (label == 'Field Technician')
            {
                nodeId = 'copynode1';
            } else if (label == 'Field Engineer')
            {
                nodeId = 'copyapprover1';
            } else if (label == 'Reliability Engineer')
            {
                nodeId = 'copyapprover2';
            } else if (label == 'Finance Controller')
            {
                nodeId = 'copyapprover3';
            } else if (label == 'Operations & Maintenance Manager')
            {
                nodeId = 'copysteward';
            } else if (label == 'System Manager')
            {
                nodeId = 'copymanager';
            }
            staticAddNewConditionNode(label, nodeId, 50 + boxCount * 100, 1100, checkRoleorCondition, canvas, copyWorkflowInstance);

        }
    });
}

function showWorkflowDesignConditions(processType)
{
    $("#" + processType + "ConditionsId").toggle();
    $("#" + processType + "RolesId").hide();
}
function showWorkflowDesignRoles(processType)
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



function makeBoxInteractable(el, instance) {
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

function makeDynamicAddBoxInteractable(el, instance) {
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
        askConformationforDeletingNode(el.id, instance);
    });

}

function addBox(label, id, top, left, isCondition = false, canvas, instance) {
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
    makeBoxInteractable(box, instance);
    return box;
}
function addNewNode(label, id, top, left, isCondition = false, canvas, instance) {
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
    makeDynamicAddBoxInteractable(box, instance);
    // instance.repaintEverything();
    //return box;
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

var workflowInstance;
function newWorkFlowModel() {
    $("body").removeClass("fiorithemeClass dark-mode Default").addClass("fiorithemeClass");
    jsPlumb.ready(function () {
        if (!(workflowInstance != null)) {
            workflowInstance = jsPlumb.getInstance({
                Container: "worflowDesignOperationsOriginalDataId",
                Connector: ["Flowchart", {cornerRadius: 10, stub: [40, 60]}],
                Endpoint: "Dot",
                EndpointStyle: {fill: "#456", radius: 5},
                PaintStyle: {stroke: "#0b4a99", strokeWidth: 1},
                HoverPaintStyle: {stroke: "#007BFF", strokeWidth: 1.5},
            });
        }
        const allNodes = ["node1", "node3", "node4", "node5", "approver1", "approver2", "approver3", "steward", "manager", "sap"];
        allNodes.forEach(id => {
            const el = document.getElementById(id);
            if (!el.classList.contains("jtk-draggable")) {
                workflowInstance.draggable(el);
            }
            createDotsToNodes(el, workflowInstance);
            el.addEventListener("dblclick", function (e) {
                e.stopPropagation(); // prevent bubbling up to body or other listeners
                // askConformationforDeletingNode(id, workflowInstance);
            });
        });

        setTimeout(function () {

// Main flow
            workflowInstance.connect({source: "node1", target: "node4", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Deleted", location: 0.88, cssClass: "label-reject lebelLink"}]], data: {flag: false}, createEndpoint: false});
            workflowInstance.connect({source: "node1", target: "approver1", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Submit", location: 0.3, cssClass: "label-branch hidelebelLink"}]], data: {flag: true}, createEndpoint: false});
            workflowInstance.connect({source: "node1", target: "approver2", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Submit", location: 0.3, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});
            workflowInstance.connect({source: "node1", target: "approver3", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Submit", location: 0.3, cssClass: "label-branch hidelebelLink"}]], data: {flag: true}, createEndpoint: false});
            workflowInstance.connect({source: "approver1", target: "steward", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Approve", location: 0.5, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});
            workflowInstance.connect({source: "approver2", target: "steward", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Approve", location: 0.4, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});
            workflowInstance.connect({source: "approver3", target: "steward", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Approve", location: 0.5, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});
            //workflowInstance.connect({source: "steward", target: "manager", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Approve", location: 0.5, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});

// Return links (go below approvers → left → up to joint)
            workflowInstance.connect({
                source: "approver1",
                target: "node3",
                anchors: ["Bottom", "Top"],
                connector: ["Flowchart", {stub: [50, 370], cornerRadius: 5}],
                overlays: [["Arrow", {width: 12, length: 12, location: 1}]],
                createEndpoint: false
            });
            workflowInstance.connect({
                source: "approver2",
                target: "node3",
                anchors: ["Bottom", "Top"],
                connector: ["Flowchart", {stub: [50, 220], cornerRadius: 5}],
                overlays: [["Arrow", {width: 12, length: 12, location: 1}]],
                createEndpoint: false
            });
            workflowInstance.connect({
                source: "approver3",
                target: "node3",
                anchors: ["Bottom", "Top"],
                connector: ["Flowchart", {stub: [50, 50], cornerRadius: 5}],
                overlays: [["Arrow", {width: 12, length: 12, location: 1}]],
                createEndpoint: false
            });
// node3 to requester


// steward to joint
            workflowInstance.connect({
                source: "steward",
                target: "node3",
                anchors: ["Bottom", "Right"],
                connector: ["Flowchart", {
                        stub: [100, 100],
                        cornerRadius: 10,
                        alwaysRespectStubs: true
                    }],
                overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Return", location: 0.55, cssClass: "label-reject lebelLink"}]],
                createEndpoint: false
            });

// manager to joint
            workflowInstance.connect({
                source: "manager",
                target: "node3",
                anchors: ["Bottom", "Right"],
                connector: ["Flowchart", {
                        stub: [100, 100],
                        cornerRadius: 10,
                        alwaysRespectStubs: true
                    }],
                overlays: [["Arrow", {width: 12, length: 12, location: 1}]],
                createEndpoint: false
            });

            workflowInstance.connect({
                source: "node3",
                target: "node1",
                anchors: ["Left", "Bottom"],
                connector: ["Flowchart", {
                        stub: [100, 100],
                        cornerRadius: 10,
                        alwaysRespectStubs: true
                    }],
                overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Return", location: 0.6, cssClass: "label-reject lebelLink"}]],
                createEndpoint: false
            });

            workflowInstance.connect({
                source: "node1",
                target: "node5",
                anchors: ["Top", "Left"],
                connector: ["Flowchart", {
                        stub: [100, 100],
                        cornerRadius: 10,
                        alwaysRespectStubs: true
                    }],
                overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Re-work", location: 0.6, cssClass: "label-rework lebelLink"}]]
            });


            workflowInstance.connect({
                source: "node5",
                target: "approver1",
                anchors: ["Bottom", "Top"],
                connector: ["Flowchart", {stub: [40, 50], cornerRadius: 10}],
                overlays: [["Arrow", {width: 12, length: 12, location: 1}]]
            });
            workflowInstance.connect({
                source: "node5",
                target: "approver2",
                anchors: ["Bottom", "Top"],
                connector: ["Flowchart", {stub: [210, 15], cornerRadius: 10}],
                overlays: [["Arrow", {width: 12, length: 12, location: 1}]]
            });
            workflowInstance.connect({
                source: "node5",
                target: "approver3",
                anchors: ["Bottom", "Top"],
                connector: ["Flowchart", {stub: [360, 15], cornerRadius: 10}],
                overlays: [["Arrow", {width: 12, length: 12, location: 1}]]
            });

            workflowInstance.connect({
                source: "node5",
                target: "steward",
                anchors: ["Right", "Top"],
                connector: ["Flowchart", {
                        stub: [100, 100],
                        cornerRadius: 10,
                        alwaysRespectStubs: true
                    }],
                overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Re-work", location: 0.5, cssClass: "label-rework lebelLink"}]]
            });

            workflowInstance.connect({
                source: "node5",
                target: "manager",
                anchors: ["Right", "Top"],
                connector: ["Flowchart", {
                        stub: [100, 100],
                        cornerRadius: 10,
                        alwaysRespectStubs: true
                    }],
                overlays: [["Arrow", {width: 12, length: 12, location: 1}]]
            });

            workflowInstance.connect({source: "steward", target: "manager", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Approve", location: 0.5, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});
            workflowInstance.connect({source: "manager", target: "sap", anchors: ["Right", "Left"], overlays: [["Arrow", {width: 12, length: 12, location: 1}], ["Label", {label: "Transfer to ERP", location: 0.5, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});

            connectionDetailsMap["node5approver3"] = ["Flowchart", {stub: [360, 15], cornerRadius: 10}];
            connectionDetailsMap["node5approver2"] = ["Flowchart", {stub: [210, 15], cornerRadius: 10}];
            connectionDetailsMap["node5approver1"] = ["Flowchart", {stub: [40, 50], cornerRadius: 10}];
            connectionDetailsMap["approver1node3"] = ["Flowchart", {stub: [50, 370], cornerRadius: 15}];
            connectionDetailsMap["approver2node3"] = ["Flowchart", {stub: [50, 220], cornerRadius: 20}];
            connectionDetailsMap["approver3node3"] = ["Flowchart", {stub: [50, 50], cornerRadius: 20}];

            workflowInstance.bind("click", function (conn, originalEvent) {
                console.log("Connection clicked from " + conn.sourceId + " to " + conn.targetId);
            });
        }, 50);


    });
}
function newWorkFlowModel1() {
    $("body").removeClass("fiorithemeClass dark-mode Default").addClass("fiorithemeClass");
    jsPlumb.ready(function () {
        workflowInstance = jsPlumb.getInstance({
            //  Container: "diagramContainer",
            Container: "worflowDesignOperationsDataId",
            Connector: ["Flowchart", {cornerRadius: 10, stub: [40, 60]}],
            Endpoint: "Dot",
            EndpointStyle: {fill: "#456", radius: 5},
            PaintStyle: {stroke: "#0b4a99", strokeWidth: 1},
            HoverPaintStyle: {stroke: "#007BFF", strokeWidth: 1.5},
        });
        const allNodes = ["node1", "node3", "node4", "node5", "approver1", "approver2", "approver3", "steward", "manager", "sap"];
        allNodes.forEach(id => {
            const el = document.getElementById(id);
            workflowInstance.draggable(el);
            createDotsToNodes(el, workflowInstance);
            el.addEventListener("dblclick", function (e) {
                e.stopPropagation(); // prevent bubbling up to body or other listeners
                // askConformationforDeletingNode(id, workflowInstance);
            });
        });

        setTimeout(function () {

// Main flow
            workflowInstance.connect({source: "node1", target: "node4", Connector: ["Flowchart", {stub: [10, 20], gap: 5}], Endpoint: ["Dot", {radius: 5}], PaintStyle: {stroke: "#0b4a99", strokeWidth: 1},
                EndpointStyle: {fill: "#1890ff"},
                anchors: ["Bottom", "Left"], overlays: [["Arrow", {location: 1}], ["Label", {label: "Deleted", location: 0.8, cssClass: "label-reject lebelLink"}]], data: {flag: false}, createEndpoint: false});
            workflowInstance.connect({source: "node1", target: "approver1", anchors: ["Bottom", "Top"], overlays: [["Arrow", {location: 1}]], data: {flag: true}, createEndpoint: false});
            workflowInstance.connect({source: "node1", target: "approver2", anchors: ["Bottom", "Top"], overlays: [["Arrow", {location: 1}], ["Label", {label: "Submit", location: 0.3, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});
            workflowInstance.connect({source: "node1", target: "approver3", anchors: ["Bottom", "Top"], overlays: [["Arrow", {location: 1}]], data: {flag: true}, createEndpoint: false});
            workflowInstance.connect({source: "approver1", target: "steward", anchors: ["Bottom", "Top"], overlays: [["Arrow", {location: 1}], ["Label", {label: "Approve", location: 0.5, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});
            workflowInstance.connect({source: "approver2", target: "steward", anchors: ["Bottom", "Top"], overlays: [["Arrow", {location: 1}], ["Label", {label: "Approve", location: 0.4, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});
            workflowInstance.connect({source: "approver3", target: "steward", anchors: ["Bottom", "Top"], overlays: [["Arrow", {location: 1}], ["Label", {label: "Approve", location: 0.5, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});
            workflowInstance.connect({source: "steward", target: "manager", anchors: ["Bottom", "Top"], overlays: [["Arrow", {location: 1}], ["Label", {label: "Approve", location: 0.5, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});
            workflowInstance.connect({source: "manager", target: "sap", anchors: ["Bottom", "Top"], overlays: [["Arrow", {location: 1}], ["Label", {label: "Transfer to ERP", location: 0.5, cssClass: "label-branch lebelLink"}]], data: {flag: true}, createEndpoint: false});
// Return links (go below approvers → left → up to joint)
            workflowInstance.connect({
                source: "approver1",
                target: "node3",
                anchors: ["LeftMiddle", "Right"],
                connector: ["Flowchart", {stub: [50, 200], cornerRadius: 15}],
                overlays: [["Arrow", {location: 1}], ["Label", {label: "Return", location: 0.2, cssClass: "label-approve lebelLink"}]],
                createEndpoint: false
            });
            workflowInstance.connect({
                source: "approver2",
                target: "node3",
                anchors: ["LeftMiddle", "Right"],
                connector: ["Flowchart", {stub: [25, 450], cornerRadius: 20}],
                overlays: [["Arrow", {location: 1}], ["Label", {label: "Return", location: 0.3, cssClass: "label-approve lebelLink"}]],
                createEndpoint: false
            });
            workflowInstance.connect({
                source: "approver3",
                target: "node3",
                anchors: ["LeftMiddle", "Right"],
                connector: ["Flowchart", {stub: [20, 710], cornerRadius: 20}],
                overlays: [["Arrow", {location: 1}], ["Label", {label: "Return", location: 0.2, cssClass: "label-approve lebelLink"}]],
                createEndpoint: false
            });
// node3 to requester
            workflowInstance.connect({
                source: "node3",
                target: "node1",
                anchors: ["Top", "Left"],
                connector: ["Flowchart", {
                        stub: [100, 100],
                        cornerRadius: 10,
                        alwaysRespectStubs: true
                    }],
                overlays: [["Arrow", {location: 1}], ["Label", {label: "Return", location: 0.6, cssClass: "label-approve lebelLink"}]],
                createEndpoint: false
            });

// steward to joint
            workflowInstance.connect({
                source: "steward",
                target: "node3",
                anchors: ["Left", "Bottom"],
                connector: ["Flowchart", {
                        stub: [100, 100],
                        cornerRadius: 10,
                        alwaysRespectStubs: true
                    }],
                overlays: [["Arrow", {location: 1}], ["Label", {label: "Return", location: 0.5, cssClass: "label-approve lebelLink"}]],
                createEndpoint: false
            });

// manager to joint
            workflowInstance.connect({
                source: "manager",
                target: "node3",
                anchors: ["Left", "Bottom"],
                connector: ["Flowchart", {
                        stub: [100, 100],
                        cornerRadius: 10,
                        alwaysRespectStubs: true
                    }],
                overlays: [["Arrow", {location: 1}], ["Label", {label: "Return", location: 0.4, cssClass: "label-approve lebelLink"}]],
                createEndpoint: false
            });

            workflowInstance.connect({
                source: "node1",
                target: "node5",
                anchors: ["Right", "Top"],
                connector: ["Flowchart", {
                        stub: [100, 100],
                        cornerRadius: 10,
                        alwaysRespectStubs: true
                    }],
                overlays: [["Arrow", {location: 1}], ["Label", {label: "Re-work", location: 0.6, cssClass: "label-approve lebelLink"}]]
            });

            workflowInstance.connect({
                source: "node5",
                target: "manager",
                anchors: ["Bottom", "Right"],
                connector: ["Flowchart", {
                        stub: [100, 100],
                        cornerRadius: 10,
                        alwaysRespectStubs: true
                    }],
                overlays: [["Arrow", {location: 1}], ["Label", {label: "Re-work", location: 0.6, cssClass: "label-approve lebelLink"}]]
            });
            workflowInstance.connect({
                source: "node5",
                target: "steward",
                anchors: ["Bottom", "Right"],
                connector: ["Flowchart", {
                        stub: [100, 100],
                        cornerRadius: 10,
                        alwaysRespectStubs: true
                    }],
                overlays: [["Arrow", {location: 1}], ["Label", {label: "Re-work", location: 0.5, cssClass: "label-approve lebelLink"}]]
            });

            workflowInstance.connect({
                source: "node5",
                target: "approver1",
                anchors: ["Left", "Right"],
                connector: ["Flowchart", {stub: [740, 10], cornerRadius: 10}],
                overlays: [["Arrow", {location: 1}]]
            });
            workflowInstance.connect({
                source: "node5",
                target: "approver2",
                anchors: ["Left", "Right"],
                connector: ["Flowchart", {stub: [505, 20], cornerRadius: 10}],
                overlays: [["Arrow", {location: 1}]]
            });
            workflowInstance.connect({
                source: "node5",
                target: "approver3",
                anchors: ["Left", "Right"],
                connector: ["Flowchart", {stub: [200, 40], cornerRadius: 10}],
                overlays: [["Arrow", {location: 1}], ["Label", {label: "Re-work", location: 0.4, cssClass: "label-approve lebelLink"}]]
            });

            connectionDetailsMap["node5approver3"] = ["Flowchart", {stub: [200, 40], cornerRadius: 10}];
            connectionDetailsMap["node5approver2"] = ["Flowchart", {stub: [505, 20], cornerRadius: 10}];
            connectionDetailsMap["node5approver1"] = ["Flowchart", {stub: [740, 10], cornerRadius: 10}];
            connectionDetailsMap["approver1node3"] = ["Flowchart", {stub: [50, 200], cornerRadius: 15}];
            connectionDetailsMap["approver2node3"] = ["Flowchart", {stub: [25, 450], cornerRadius: 20}];
            connectionDetailsMap["approver3node3"] = ["Flowchart", {stub: [20, 710], cornerRadius: 20}];

            workflowInstance.bind("click", function (conn, originalEvent) {
                console.log("Connection clicked from " + conn.sourceId + " to " + conn.targetId);
            });
        }, 50);


    });
}


function treeLinkEditFn() {
    $("#workflowSaveButtonId").show();
    $("#workflowRolesButtonId").show();
    $("#workflowActivateButtonId").show();
    //$(".workflowMinMaxClass").hide();
    $(".worflowDesignOperationsbtnwrapper").find("button.treeLinkEditBTN").hide();
    if (!($("#worflowDesignOperationsOriginalDataId").is(":visible")))
    {
        return;
    }
    var node1left = $('#node1').position().left + 'px';
    var node3left = $('#node3').position().left + 'px';
    var node4left = $('#node4').position().left + 'px';
    var node5left = $('#node5').position().left + 'px';
    var approver1left = $('#approver1').position().left + 'px';
    var approver2left = $('#approver2').position().left + 'px';
    var approver3left = $('#approver3').position().left + 'px';
    var stewardleft = $('#steward').position().left + 'px';
    var managerleft = $('#manager').position().left + 'px';
    var sapleft = $('#sap').position().left + 'px';
    $(".worflowDesignOperationsMainDataClass").css("display", "flex", "!important");

    copyWorkFlowModel(node1left, node3left, node4left, node5left, approver1left, approver2left, approver3left, stewardleft, managerleft, sapleft);
    //$("#worflowDesignOperationsOriginalDataId").html($("#worflowDesignOperationsDataId").html());
    //$("#worflowDesignOperationsOriginalDataId").show();


    const allNodes = ["node1", "node3", "node4", "node5", "approver1", "approver2", "approver3", "steward", "manager", "sap"];
    allNodes.forEach(id => {
        const el = document.getElementById(id);
        el.addEventListener("dblclick", function (e) {
            e.stopPropagation(); // prevent bubbling up to body or other listeners
            askConformationforDeletingNode(id, workflowInstance);
        });
    });




}


function linkPopup(source, target) {
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
                    openConditionBox(source, target, label);
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
function openConditionBox(source, target, label) {
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
                 <a href='#' onclick=getconditionSelection('${label}')>Please select condition</a>
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
                 <button type="button" id='worflowDesigConditionSaveBtn' onclick=saveWorkflowDesignCondition('${label}','${source}','${target}') class="btn btn-primary worflowDesigConditionSaveBtn">Save</button>
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
function askConformationforDeletingNode(id, instance)
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

function getCopyWorkFlowModel()
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
                    {width: 12, length: 12, location: 1}
                ]
                        );
            }
        }

        connections.push({
            source: "copy" + conn.sourceId,
            target: "copy" + conn.targetId,
            anchors: anchors,
            connector: connectionDetailsMap[conn.sourceId + conn.targetId],
            overlays: overlays,
            data: {flag: conn.getData().flag}
        });
    });

    const data = {nodes, connections};
    return data;
}
var copyWorkflowInstance;
async function copyWorkFlowModel(node1left, node3left, node4left, node5left, approver1left, approver2left, approver3left, stewardleft, managerleft, sapleft) {
    var data = await getCopyWorkFlowModel();
    var width = $("#worflowDesignOperationsDataId").width();
    if (width < 1000)
    {
      //  return;
    }
    $("#worflowDesignOperationsOriginalDataId").hide();
    $("#worflowDesignOperationsDataId").css("width", "100%", "!important");
    var html = `<div class="workflowMinMaxClass"><span class="workflowMinMaxImgClass" onclick="workflowMinimizeClick('worflowDesignOperationsOriginalDataId')"><img src="images/iDXPUI5Minimize.svg" width="16px"></span><span class="workflowMinMaxImgClass" onclick="workflowMaxmizeClick('worflowDesignOperationsOriginalDataId')"><img src="images/iDXPUI5Maximize.svg" width="16px"></span></div> 
                <div class="node rect-node" id="copynode1">
                        <div class="label">Field Technician</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                     </div>
                <div class="node empty-circle-node" id="copynode3">
                     <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                </div>
                <div class="node empty-circle-node" id="copynode5">
                    <div class="dot top"></div>
                    <div class="dot right"></div>
                    <div class="dot bottom"></div>
                    <div class="dot left"></div>
               </div>
               <div class="node empty-circle-node-deleted" id="copynode4">
                   <div class="dot left"></div>
             </div>
            <div class="node rect-node" id="copyapprover1">
                        <div class="label">Field Engineer</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                     </div>
            <div class="node rect-node" id="copyapprover2">
                      <div class="label">Reliability Engineer</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                     </div>
            <div class="node rect-node" id="copyapprover3">
                        <div class="label">Finance Controller</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                     </div>
            <div class="node rect-node" id="copysteward">
                        <div class="label">Operations & Maintenance Manager</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                     </div>
            <div class="node rect-node" id="copymanager">
                       <div class="label">System Manager</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                    </div> 
            <div class="node rect-node" id="copysap">
                       <div class="label">SAP</div> 
                        <div class="dot top"></div>
                        <div class="dot right"></div>
                        <div class="dot bottom"></div>
                        <div class="dot left"></div>
                    </div>
                 `;
    $("#worflowDesignOperationsDataId").html(html);
    $("#worflowDesignOperationsDataId").show();
    $("body").removeClass("fiorithemeClass dark-mode Default").addClass("fiorithemeClass");
    
    jsPlumb.ready(function () {
        copyWorkflowInstance = jsPlumb.getInstance({
            Container: "worflowDesignOperationsDataId",
            Connector: ["Flowchart", {cornerRadius: 10, stub: [40, 60]}],
            Endpoint: "Dot",
            EndpointStyle: {fill: "#456", radius: 5},
            PaintStyle: {stroke: "#0b4a99", strokeWidth: 1},
            HoverPaintStyle: {stroke: "#007BFF", strokeWidth: 1.5},
        });

        const allNodes = ["copynode1", "copynode3", "copynode4", "copynode5", "copyapprover1", "copyapprover2", "copyapprover3", "copysteward", "copymanager", "copysap"];
        allNodes.forEach(id => {
            const el = document.getElementById(id);
            copyWorkflowInstance.draggable(el);
            createDotsToNodes(el, copyWorkflowInstance);
//            el.addEventListener("dblclick", function (e) {
//                e.stopPropagation(); // prevent bubbling up to body or other listeners
//                askConformationforDeletingNode(id, copyWorkflowInstance);
//            });
        });
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
            $("#worflowDesignOperationsOriginalDataId").show();
            $("#worflowDesignOperationsOriginalDataId").css("width", "50%", "!important");
            $("#worflowDesignOperationsOriginalDataId").css("height", "100%", "!important");
            $("#worflowDesignOperationsOriginalDataId").css("border", "1px solid #cccccc", "!important");

            $("#worflowDesignOperationsDataId").css("width", "50%", "!important");
            $("#worflowDesignOperationsDataId").css("height", "100%", "!important");
            $("#worflowDesignOperationsDataId").css("border", "1px solid #cccccc", "!important");

            $('.worflowDesignOperationsDataEditDivClass').find("#node1").css("left", node1left);
            $('.worflowDesignOperationsDataEditDivClass').find("#node3").css("left", node3left);
            $('.worflowDesignOperationsDataEditDivClass').find("#node4").css("left", node4left);
            $('.worflowDesignOperationsDataEditDivClass').find("#node5").css("left", node5left);
            $('.worflowDesignOperationsDataEditDivClass').find("#approver1").css("left", approver1left);
            $('.worflowDesignOperationsDataEditDivClass').find("#approver2").css("left", approver2left);
            $('.worflowDesignOperationsDataEditDivClass').find("#approver3").css("left", approver3left);
            $('.worflowDesignOperationsDataEditDivClass').find("#steward").css("left", stewardleft);
            $('.worflowDesignOperationsDataEditDivClass').find("#manager").css("left", managerleft);
            $('.worflowDesignOperationsDataEditDivClass').find("#sap").css("left", sapleft);

            $('.worflowDesignOperationsDataClass').find("#copynode1").css("left", node1left);
            $('.worflowDesignOperationsDataClass').find("#copynode3").css("left", node3left);
            $('.worflowDesignOperationsDataClass').find("#copynode4").css("left", node4left);
            $('.worflowDesignOperationsDataClass').find("#copynode5").css("left", node5left);
            $('.worflowDesignOperationsDataClass').find("#copyapprover1").css("left", approver1left);
            $('.worflowDesignOperationsDataClass').find("#copyapprover2").css("left", approver2left);
            $('.worflowDesignOperationsDataClass').find("#copyapprover3").css("left", approver3left);
            $('.worflowDesignOperationsDataClass').find("#copysteward").css("left", stewardleft);
            $('.worflowDesignOperationsDataClass').find("#copymanager").css("left", managerleft);
            $('.worflowDesignOperationsDataClass').find("#copysap").css("left", sapleft);
        }, 100);


        const allConnections = copyWorkflowInstance.getAllConnections();

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
                if (sourceId == 'copynode1' && targetId == 'copyapprover1')
                {
                    currentLoc = 0.85;
                }
                if (sourceId == 'copynode1' && targetId == 'copyapprover2') 
                {
                    currentLoc = 0.55;
                }
                if (sourceId == 'copynode1' && targetId == 'copyapprover3')
                {
                    currentLoc = 0.85;
                }
                if (sourceId == 'copyapprover1' && targetId == 'copysteward')
                {
                    currentLoc = 0.13;
                }
                if (sourceId == 'copyapprover2' && targetId == 'copysteward')
                {
                    currentLoc = 0.3;
                }
                if (sourceId == 'copyapprover3' && targetId == 'copysteward')
                {
                    currentLoc = 0.13;
                }
                conn.addOverlay([
                    "Custom", {
                        create: function () {
                            const div = document.createElement("div");
                            div.innerHTML = `<span class="plus-icon" onclick="linkPopup('${sourceId}', '${targetId}')">+</span>`; // You can replace '+' with an icon (like font-awesome if loaded)
                            div.title = "Add new connection"; // optional tooltip
                            return div;
                        },
                        location: currentLoc,
                        id: "editOverlay"
                    }
                ]);

            }
        });


    });
}


function showNewWorkflowDesignProcess()
{
    $("#worflowDesignOperationsHeaderId").show();
    $("#worflowDesignOperationsDataId").show();
    $("#worflowDesignOperationsDataId").hide();
    $("#worflowDesignOperationsOriginalDataId").hide();
    $("#worflowDesignOperationsDataNewId").show();
    $("#worflowDesignOperationsDataNewId").css("width", "100%", "!important");
    $("#worflowDesignOperationsDataNewId").css("height", "100%", "!important");
    $("#worflowDesignOperationsDataNewId").css("position", "relative", "!important");
    showNewWorkflowDesignResourceProcess();
}
var newWorkflowInstance;
function showNewWorkflowDesignResourceProcess()
{

    jsPlumb.ready(function () {
        newWorkflowInstance = jsPlumb.getInstance({
            Container: "worflowDesignOperationsDataNewId",
            Connector: ["Flowchart", {cornerRadius: 10, stub: [40, 60]}],
            Endpoint: "Dot",
            EndpointStyle: {fill: "#456", radius: 5},
            PaintStyle: {stroke: "#0b4a99", strokeWidth: 1},
            HoverPaintStyle: {stroke: "#007BFF", strokeWidth: 1.5},
        });
    });
    var processType = $("#visionWorkflowDesinDomainProcessId").val();
    $("#worflowDesignOperationsHeaderId").html(`
      <div class='worflowDesignOperationsbtnwrapper'>
         <button class='workflowSaveButtonClass' id='newworkflowSaveButtonId' onclick=getNewFlowchartMappingData() style='display:none'>
          <img title='Save' src='images/iDXPUI5Save.svg' alt='Roles'>
        </button>  
        <button class="ui5gridgo-btn go-btn treeLinkActivateBTN" onclick="treeLinkActivateFn()">
            Activate
          </button> 
        <button class='workflowRolesButtonClass' id='newworkflowRolesButtonId' onclick=showWorkflowDesignRoles('${processType}') style='display:none'>
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
            addNewNode(label, randomNum, 50 + boxCount * 100, 1100, checkRoleorCondition, canvas, newWorkflowInstance);

        }
    });
}

function getNewFlowchartMappingData()
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
function getconditionSelection(label)
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
            + "<button type='button' class='workflowconditionNewColumnClass' value='Add New Column' onclick='addCondColumn(this)'>Add New Column</button>"
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

function addCondColumn()
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
    copyWorkflowInstance.getAllConnections().forEach(conn => {
        if (conn.sourceId == source && conn.targetId == target)
        {
            copyWorkflowInstance.deleteConnection(conn);
        }
    });
    ifRole = "copy"+ifRole;
    defaultRole = "copy"+defaultRole;
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
        staticAddNewConditionNode(label + conditionCount, conditionNode, midY, midX, false, canvas, copyWorkflowInstance);
    }
    if ($("#" + ifRole).length == 0) {
        staticAddNewConditionNode(ifRoleTxt, ifRole, midY + 100, midX, false, canvas, copyWorkflowInstance);
    }
    if ($("#" + defaultRole).length == 0) {
        staticAddNewConditionNode(defaultRoleTxt, defaultRole, midY + 100, midX + 250, false, canvas, copyWorkflowInstance);
    }
    setTimeout(function () {
        copyWorkflowInstance.connect({
            source: source,
            target: conditionNode,
            anchors: ["Right", "Left"],
            //connector: ["Flowchart", {stub: [50, 200], cornerRadius: 15}],
            //overlays: [["Arrow", {location: 1}], ["Label", {label: "Return", location: 0.2, cssClass: "label-approve lebelLink"}]],
            createEndpoint: false
        });
        copyWorkflowInstance.connect({
            source: conditionNode,
            target: ifRole,
            anchors: ["Right", "Left"],
            //connector: ["Flowchart", {stub: [50, 200], cornerRadius: 15}],
            overlays: [["Arrow", {location: 1}], ["Label", {label: "true", location: 0.2, cssClass: "label-approve lebelLink"}]],
            createEndpoint: false
        });
        copyWorkflowInstance.connect({
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

function staticAddNewConditionNode(label, id, top, left, isCondition = false, canvas, instance) {
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
    makeDynamicAddBoxInteractable(box, instance);
    // instance.repaintEverything();
    //return box;
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


function showNavigateNewWorkflowDesignProcess() {
    copyWorkflowInstance.repaintEverything();

    new Promise((resolve) => {
        setTimeout(resolve, 1000);
    }).then(() => {
        const connections = copyWorkflowInstance.getConnections();
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