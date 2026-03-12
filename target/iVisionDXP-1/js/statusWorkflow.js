/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).on('keyup', function (e) {
    // if key is Delete/Back Space
    if (e.which == 46 || e.which == 8) {
        // remove the same div you clicked on
        var selectedTypeVal = e.currentTarget.activeElement.type;
        if (selectedTypeVal != null
                && (selectedTypeVal == 'input'
                        || selectedTypeVal == 'textarea'
                        || selectedTypeVal == 'text'
                        || selectedTypeVal == 'checkbox'
                        || selectedTypeVal == 'password'
                        || selectedTypeVal == 'hidden'
                        || selectedTypeVal == 'date'
                        || selectedTypeVal == 'number'
                        || selectedTypeVal == 'select')) {
            // console.log('selectedClassVal::::'+selectedClassVal);
        } else {
            // remove the same div you clicked on
            deleteSelectedOporLink();
        }

    }
});
$(document).ready(function () {
    hideBreadcrumb();
    var levelTabIdHeight = $("#levelTabId").height();
    var visionClusterSpliterMainHeight = $("#visionClusterSpliterMain").height();
    var levelTabIdHeight = $("#levelTabId").height();
    var visionClusterSpliterMainHeight = $("#visionClusterSpliterMain").height();
    var pageHeight = $(".visionHeader").height() + $(".visionFooterMain").height() + $(".visionBreadcrumMain").height();
    var pageHeight1 = $(".visionHeader").height() + $(".visionFooterMain").height();
    var splitterHeight = (parseInt($(window).height()) - parseInt(pageHeight1)) - 10;
//    /mainStatusWFSplitter
    $("#mainStatusWFSplitter").jqxSplitter({width: '99.1%', height: parseInt(splitterHeight),
        orientation: 'vertical',
        panels: [{size: "15%"}, {min: 50, size: "85%"}]});
    $('#statusDesignSplitter').jqxSplitter({width: '100%', height: '100%',
        orientation: 'horizontal',
        panels: [{size: "70%", min: 200}, {min: 30, size: "30%"}]});

});

function buildStatusTree(treeObj, treeId) {
    treeId = "statusWFTree";
    var connectionObj = treeObj['connObj'];
    var treeConfigObj = treeObj['treeConfigObj'];
    var dragEndFunction = treeObj['dragEndFunction'];
    treeConfigObj.allowDrag = true;
    treeConfigObj.allowDrop = true;
//    treeConfigObj.hasThreeStates = true;
//    treeConfigObj.checkboxes = true;
    treeConfigObj.dragEnd = function (item) {
        createStatusWf(item);

    };

    var columnsObj = treeObj['treeColumnObj'];
    $('#' + treeId).jqxTree(treeConfigObj);
    $('#' + treeId).jqxTree('focus');
    $('#flowchartStatusWFSpace').flowchart({
        linkWidth: 3,
        defaultSelectedLinkColor: '#000055',
        grid: 10,
        distanceFromArrow: 0,
//                defaultOperatorClass:'VisionWorkFlowTest',
        multipleLinksOnInput: true,
        multipleLinksOnOutput: true,
        defaultSelectedLinkColor: 'red',
        onLinkDoubleClick: function (linkId, linkData) {
            $("#currentLinkId").val(linkId);
            displayStatusWFProperties(linkId, linkData);
            return true;
        }
    });
    $('#' + treeId).on('expand', function (event) {

        var parentItem = $('#' + treeId).jqxTree('getItem', event.args.element);
        var $element = $(event.args.element);
        var loader = false;
        var loaderItem = null;
        var children = $element.find('ul:first').children();
        $.each(children, function () {
            var item = $('#' + treeId).jqxTree('getItem', this);
            if (item && item.value == 'ajax') {
                loaderItem = item;
                loader = true;
                return false
            }
        });
        if (loaderItem != null) {
            showLoader();
            var extTreeParams = $("#extTreeParams").val();
            var value;
            var level = parentItem.level;
            $('#' + treeId).jqxTree('removeItem', loaderItem.element);
            if (parentItem.level > 1)
            {
                //var prevObj = parentItem['prevItem'];
//                value = parentItem['value'];
                var parentEventItem = event.args.element;
                for (var i = level; i > 1; i--)
                {
                    parentEventItem = parentEventItem.parentElement.parentElement;
                }
                var selectedItem = $('#' + treeId).jqxTree('getItem', parentEventItem);
                value = selectedItem['value'];
            }


            var data = {
                parentkey: parentItem.value,
                treeId: treeId,
                level: parentItem.level,
                extTreeParams: extTreeParams,
                columnsObj: JSON.stringify(columnsObj),
                connectionObj: JSON.stringify(connectionObj),
                startIndex: 0,
                endIndex: 20
            };

            var url = "getTreePagingDataOpt";
            var treePagingObj = {};
            treePagingObj['startIndex'] = '0';
            treePagingObj['endIndex'] = $("#treePageSize").val();

//            var url = "getTreeDataOpt";
            var filesParentElement = parentItem['parentElement'];

            var selectedFilesItem = $('#' + treeId).jqxTree('getItem', filesParentElement);
            if (parentItem.value == 'FILES'
                    || (selectedFilesItem != null
                            && selectedFilesItem['value'] == 'FILES'))
            {
                url = 'getTreeUploadedFiles';
            }

            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: url,
                cache: false,
                data: data,
                success: function (data, status, xhr) {
                    stopLoader();

                    $('#' + treeId).jqxTree('addTo', data, $element[0]);
                    var items = $('#' + treeId).jqxTree('getItems');
                    $.each(items, function () {
                        $(this.titleElement).attr('title', this.label);
                        $("#" + this.titleElement[0].id).removeClass('visionETLParentHighight');
                        if (this.value == "Show More")
                        {
                            var childLength = this.element.children['length'];
                            var expandDiv = this.element.children[0];
                            if (childLength > 3) {
                                var div = this.element.children[1];
                                var checkBoxDiv = this.element.children[2];
                                $("#" + expandDiv.id).remove();
                                $("#" + div.id).remove();
                                $("#" + checkBoxDiv.id).addClass('visionETLCheckboxEmptySpace');
                            } else
                            {
                                $("#" + expandDiv.id).remove();
                            }
                        }
                    });


//                    $('#mainSplitter').resize();
                },
                error: function (e) {
                    console.log(e);
                    sessionTimeout(e);
                    stopLoader();
                }
            });
        }



    });
}
function createStatusWf(selectedTreeItem) {
    //&& selectedTreeItem['level'] == 4
    if (selectedTreeItem != null && !jQuery.isEmptyObject(selectedTreeItem)
            && selectedTreeItem['level'] == 4
            ) {

//        var parentElement = selectedTreeItem.parentElement;
//        var parent = $(parentElement)[0].parentElement;
//        var childObj = parent.parentElement.children[1];
//        var valueObj = childObj.treeItem['value'];
//        console.log("valueObj:::"+valueObj);
        var selectedRoleId = "";
        var selectedProcess = "";
        var sourceItem = $('#statusWFTree').jqxTree('getItem', selectedTreeItem.parentElement);//source
        if (sourceItem != null) {
            selectedProcess = sourceItem['value'];
           
            var roleItem = $('#statusWFTree').jqxTree('getItem', sourceItem.parentElement);
            if (roleItem != null) {
                selectedRoleId = roleItem['value'];
                if (selectedProcess != null && selectedProcess != '') {
                    selectedProcess = selectedProcess.replace(selectedRoleId+"-","");
                }
            }

        }
        console.log("selectedPrecess::::" + selectedProcess);
        console.log("selectedRoleId::::" + selectedRoleId);
        $("#statusWFTree").off('dragEnd').on('dragEnd', function (event) {
            $(".flowchart-operator-connector-label").hide();
            var $flowchart = $('#flowchartStatusWFSpace');
            var $container = $('#flowchartStatusWFSpace');
            var $this = $(this);
            var ui = event.args.originalEvent;
            var elOffset = ui.position;
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
            var data = {
                top: elOffset.top,
                left: elOffset.left,
                statusDescr: selectedTreeItem['label'],
                status: selectedTreeItem['value'],
                selectedRoleId: selectedRoleId,
                selectedProcess: selectedProcess,
            };

            data['properties'] = {
                body: '<div  title="' + selectedTreeItem['label'] + '" class="">'
                        + '<div class="visionStatusOpLabelDiv">' + selectedTreeItem['value'] + '</div>'
                        + '</div>',
                inputs: {
                    input_1: {
                        label: '',
                    }
                },
                outputs: {
                    output_1: {
                        label: '',
                    }
                }
            }
            $flowchart.flowchart('addOperator', data);
            $(".flowchart-operator-connector-label").hide();
            $(".flowchart-operator-title").hide();

        });
    }
}

function displayStatusWFProperties(linkId, linkData) {
    console.log("onLinkDoubleClick::linkId:::" + linkId);
    var fromOperator = linkData['fromOperator'];
    var toOperator = linkData['toOperator'];
    var toOperatorData = $('#flowchartStatusWFSpace').flowchart('getOperatorData', toOperator)
    var fromOperatorData = $('#flowchartStatusWFSpace').flowchart('getOperatorData', fromOperator)
//                                    console.log("onLinkDoubleClick::Link Data:::" + + JSON.stringify(toOperatorData));
//                                    console.log("onLinkDoubleClick::Link Data:::" + + JSON.stringify(fromOperatorData));
    console.log(fromOperatorData['status'] + "--->" + toOperatorData['status']);
    if (fromOperatorData != null
            && !jQuery.isEmptyObject(fromOperatorData)
            && toOperatorData != null
            && !jQuery.isEmptyObject(toOperatorData)
            ) {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getSelectedLinkProperties",
            cache: false,
            data: {
                fromOperatorData: JSON.stringify(fromOperatorData),
                toOperatorData: JSON.stringify(toOperatorData),
            },
            success: function (data, status, xhr) {
                stopLoader();
                if (data != null) {
//                    statusWFProperties
                    $("#statusWFProperties").html(data['linkPropertiesStr']);
                    //selectedLinkPropertiesTab
                    $("#selectedLinkPropertiesTab").jqxTabs({
                        width: "100%", 
                        height: "130px", 
                        position: 'top', 
                        theme: 'ui-redmond', 
                        reorder: true});
                }

            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });
    }

}
function deleteSelectedOporLink() {
    $("#flowchartStatusWFSpace .selected").each(function () {
        var selectedOpeartorId = $(this).data("operator_id");
        console.log(":::::;" + selectedOpeartorId);
        $('#flowchartStatusWFSpace').flowchart('deleteOperator', selectedOpeartorId);
    });
    try {
        $('#flowchartStatusWFSpace').flowchart('deleteSelected');
    } catch (e) {
    }
  
//    

}