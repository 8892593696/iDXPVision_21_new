/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function treeConfig(treeObj) {
    $("#treeGridDiv").hide();
    if (treeObj != null) {
//        treeSplitter
        if ($('#treeSplitter').length != 0) {
            var pageHeight = $(".visionHeader").height() + $(".visionFooterMain").height() + $(".visionBreadcrumMain").height();
            var splitterHeight = (parseInt($(window).height()) - parseInt(pageHeight));
            $('#treeSplitter').jqxSplitter({width: '100%',
                height: parseInt(splitterHeight),
                orientation: 'vertical',
                theme: 'energyblue',
                panels: [{size: '30%', min: 150, resizable: true},{size: '20%', min: 150, resizable: true}]});
        }
        
        $("#jqxExpander").jqxPanel({width: '100%', height: '100%',theme: 'energyblue'});
//        $('#jqxExpander').jqxExpander({showArrow: true, theme: 'energyblue', toggleMode: 'none', width: '100%', height: '100%'});
        var treeConfigObj = treeObj['treeConfigObj'];
        var treeInitParamObj = treeObj['treeInitParamObj'];
        var columnsObj = treeObj['treeColumnObj'];
        treeConfigObj.height=parseInt(splitterHeight);
        $('#jqxTree').jqxTree(treeConfigObj);
        $("#jqxTree").jqxTree('focus');
        $('#jqxTree').on('expand', function (event) {
            var parentItem = $('#jqxTree').jqxTree('getItem', event.args.element);
            var level = parentItem.level;
            var $element = $(event.args.element);
            var loader = false;
            var loaderItem = null;
            var children = $element.find('ul:first').children();
            // var children = $element.find('ul:first').children();
            $.each(children, function () {
                var item = $('#jqxTree').jqxTree('getItem', this);
                if (item && item.value == 'ajax') {
                    loaderItem = item;
                    loader = true;
                    return false
                }
                ;
            });
            if (loaderItem != null) {
                var extTreeParams = $("#extTreeParams").val();
                $('#jqxTree').jqxTree('removeItem', loaderItem.element);
                $.ajax({
                    type: "post",
                    traditional: true,
                    dataType: 'json',
                    url: "getTreeDataOpt",
                    cache: false,
                    data: {
                        parentkey: parentItem.value,
                        treeId: treeObj['treeId'],
                        level: parentItem.level,
                        extTreeParams:extTreeParams ,
                        columnsObj: JSON.stringify(columnsObj)
                    },
                    success: function (data, status, xhr) {
//                            var items = jQuery.parseJSON(data);
                        $('#jqxTree').jqxTree('addTo', data, $element[0]);
                        var items = $('#jqxTree').jqxTree('getItems');
                        $.each(items, function () {
                            $(this.titleElement).attr('title', this.label);
                            $("#" + this.titleElement[0].id).removeClass('visionETLParentHighight');
                        });
                        if (parentItem != null)
                        {
                            var parentItemEle = event.args.element;
                            for (var p = level; p >= 0; p--)
                            {
                                //var parentItemId = $('#' + treeId).jqxTree('getItem', parentItemEle);
                                var parentItemId = $('#jqxTree').jqxTree('getItem', parentItemEle);
                                //var parentItemId = parentItem.id;
                                if (parentItemId != null)
                                {
                                    // var divItemId = parentItemId;
                                    var divItemId = parentItemId.titleElement[0];
                                    $("#" + divItemId.id).addClass('visionETLParentHighight');
                                }
                                parentItemEle = parentItemEle.parentElement.parentElement;
                            }
                        }


                    },
                    error: function (e) {
                        console.log(e);
                        sessionTimeout(e);
                        stopLoader();
                    }
                });
            }



        });

        $('#jqxTree').on('select', function (event)
        {
            var args = event.args;
            var item = $('#jqxTree').jqxTree('getItem', args.element);
            var label = item.label;
            var type = args.type; // mouse, keyboard or null. If the user selects with the mouse, the type will be "mouse".
            var level = item['level'];
            var selectedValue = item['value'];
            if (level != null && level != '' && level != '0') {
                level = parseInt(level) - 1;
            }
            var selectedColumnObj = columnsObj[level];
            if (selectedColumnObj != null && !jQuery.isEmptyObject(selectedColumnObj)) {
                console.log(JSON.stringify(selectedColumnObj) + ":::::" + selectedValue);
                var compType = selectedColumnObj['FOLLOWUP_COMP_TYPE'];
                if (selectedColumnObj['FOLLOWUP_COMP_ID'] != null
                        && selectedColumnObj['FOLLOWUP_COMP_ID'] != ''
                        && compType != null && compType != '') {
                    $('#treeSplitter').jqxSplitter({
                        panels: [{size: '20%', min: 150, resizable: true},{size: '80%', min: 150, resizable: true}]
                    });
                    if (compType == 'CLUSTER') {// grids,tabs,form ,cluster
                        var clusterDiv = '<div id="clusterSplitter">'
                                + '<div class="visionMasterDetailPanelTop" id="levelTabId"></div>'
                                + '<div class="visionMasterDetailPanelBottom" id="level1TabId"></div>'
                                + '</div>';
                        $("#treeGridDiv").html(clusterDiv);
                        fetchCluster(selectedColumnObj, selectedValue, level);
                    } else if (compType == 'TREE') {
                        var childTreeDiv = ' <div id="jqxChildExpander">'
                                + ' <div id="expanderChildDesc" class="visionTreeDescription"></div>'
                                + ' <div style="border: none;" id="jqxChildTreeDropdown" class="visionTreeDropDown" ></div>'
                                + ' <div style="overflow: hidden;" id="jqxChildTreeDiv">'
                                + '<div style="border: none;" id="jqxChildTree"></div>'
                                + '</div>'
                                + '</div>';
                        $("#treeGridDiv").html(childTreeDiv);
                        fetchChildTree('jqxTree', selectedColumnObj, selectedValue, level);
                    } else if (compType == 'ANALYTICS') {

                    }
                }

            }



        });
    }
}

function fetchCluster(selectedColumnObj, selectedValue, level) {
    showLoader();
    //getTreeClusterForm
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "getTreeClusterForm",
        cache: false,
        data: {
            parentkey: selectedValue,
            level: level,
            clusterId: selectedColumnObj['FOLLOWUP_COMP_ID']
        },
        success: function (masterObject, status, xhr) {
            if (masterObject != null) {
                   $("#treeGridDiv").show();
                $("#treeGridDescription").html(selectedColumnObj['FOLLOWOP_COMP_DESCR']);
                $("#levelTabId").html(masterObject['tabString']);
                var masterId = masterObject['masterId'];
                var theme = "ui-redmond";
                $('#' + masterId + '_TAB').jqxTabs({height: '100%', width: '100%', position: 'top',
                    theme: theme, reorder: true, autoHeight: false, keyboardNavigation: true
                    , scrollPosition: 'both'});
                var paramArray = [];
                var paramObj = {};
                paramObj.column = selectedColumnObj['FLD_NAME'];
                paramObj.value = selectedValue;
                paramObj.operator = "LIKE";
                paramObj.symbol = "LIKE";
                paramObj.rangeFlag = "N";
                paramObj.minvalue = "";
                paramObj.maxvalue = "";
                paramArray.push(paramObj);
                if (masterObject['compType'] != 'FILTER_GRID') {
                    var masterGridObj = masterObject['masterGridObj'];
                    $("#levelTabId").removeClass("visionMasterDetailPanelTopACC");
                    if (masterObject['compType'] == 'ANALYTIC') {//compId
                        chartsData(masterObject['compId'], masterObject['compId'], "Y");
                    } else {
                        clusterGridConfig(masterGridObj, masterGridObj['gridId'], masterId, masterObject['compType'], "Y", paramArray);
                    }

                } else {
                    $("#" + masterObject['compId'] + "_ACCORDIAN").accordion({
                        theme: 'energyblue',
                        collapsible: true,
                        heightStyle: "content",
                        active: false,
                        autoHeight: false

                    });
                    $("#" + masterObject['compId'] + "_ACCORDIAN  h3").bind('click', function () {
                        var self = this;
                        setTimeout(function () {
                            var theOffset = $(self).offset();
                            $('body,html').animate({scrollTop: theOffset.top - 40});
                        }, 310); // ensure the collapse animation is done
                    });
                    getClusterFilterGridForm(masterObject['compId'], masterId + '_TAB', 0);
                    $("#" + masterObject['compId'] + "_ACCORDIAN").accordion({active: 0});
                    $("#levelTabId").addClass("visionMasterDetailPanelTopACC");
                    stopLoader();
                }
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}
function getSelectedTree() {
    showLoader();
       var extTreeParams = $("#extTreeParams").val();
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "getSelectedTree",
        cache: false,
        data: {
            treeId: $("#treeSelectBox").val(),
            extTreeParams:extTreeParams
        },
        success: function (treeObject, status, xhr) {
            if (treeObject != null && !jQuery.isEmptyObject(treeObject)) {
                $("#expanderDesc").html(treeObject['treeDesc']);//treeDesc
                var extTreeParams = {};
                extTreeParams = treeObject['extTreeParams'];
                if (extTreeParams != null && !jQuery.isEmptyObject(extTreeParams)) {
                    $("#extTreeParams").val(JSON.stringify(extTreeParams));
                }
               
                selectedTreeConfig(treeObject);
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}
function selectedTreeConfig(treeObj) {
    if (treeObj != null && !jQuery.isEmptyObject(treeObj)) {
        $("#jqxTree").jqxTree('destroy');
         $("#jqxTree").remove();
        $("#jqxTreeDiv").html("<div style=\"border: none;\" id='jqxTree'></div>");
        var pageHeight = $(".visionHeader").height() + $(".visionFooterMain").height() + $(".visionBreadcrumMain").height();
        var splitterHeight = (parseInt($(window).height()) - parseInt(pageHeight));
        var treeConfigObj = treeObj['treeConfigObj'];
        var treeInitParamObj = treeObj['treeInitParamObj'];
        var columnsObj = treeObj['treeColumnObj'];
        treeConfigObj.height = parseInt(splitterHeight);
        $('#jqxTree').jqxTree(treeConfigObj);
     
        $("#jqxTree").jqxTree('focus');
        $('#jqxTree').on('expand', function (event) {
            var parentItem = $('#jqxTree').jqxTree('getItem', event.args.element);
            var $element = $(event.args.element);
            var loader = false;
            var loaderItem = null;
            var children = $element.find('ul:first').children();
            // var children = $element.find('ul:first').children();
            $.each(children, function () {
                var item = $('#jqxTree').jqxTree('getItem', this);
                if (item && item.value == 'ajax') {
                    loaderItem = item;
                    loader = true;
                    return false
                }
                ;
            });
            if (loaderItem != null) {
                var extTreeParams = $("#extTreeParams").val();
                $('#jqxTree').jqxTree('removeItem', loaderItem.element);
                $.ajax({
                    type: "post",
                    traditional: true,
                    dataType: 'json',
                    url: "getTreeDataOpt",
                    cache: false,
                    data: {
                        parentkey: parentItem.value,
                        treeId: treeObj['treeId'],
                        level: parentItem.level,
                        extTreeParams: extTreeParams,
                        columnsObj: JSON.stringify(columnsObj)
                    },
                    success: function (data, status, xhr) {
//                            var items = jQuery.parseJSON(data);
                        $('#jqxTree').jqxTree('addTo', data, $element[0]);
                        var items = $('#jqxTree').jqxTree('getItems');
                        $.each(items, function () {
                            $(this.titleElement).attr('title', this.label);
                        });


                    },
                    error: function (e) {
                        console.log(e);
                        sessionTimeout(e);
                        stopLoader();
                    }
                });
            }



        });

        $('#jqxTree').on('select', function (event)
        {
            var args = event.args;
            var item = $('#jqxTree').jqxTree('getItem', args.element);
            var label = item.label;
            var type = args.type; // mouse, keyboard or null. If the user selects with the mouse, the type will be "mouse".
            var level = item['level'];
            var selectedValue = item['value'];
            if (level != null && level != '' && level != '0') {
                level = parseInt(level) - 1;
            }
            var selectedColumnObj = columnsObj[level];
            if (selectedColumnObj != null && !jQuery.isEmptyObject(selectedColumnObj)) {
                console.log(JSON.stringify(selectedColumnObj) + ":::::" + selectedValue);
                var compType = selectedColumnObj['FOLLOWUP_COMP_TYPE'];
                if (selectedColumnObj['FOLLOWUP_COMP_ID'] != null
                        && selectedColumnObj['FOLLOWUP_COMP_ID'] != ''
                        && compType != null && compType != '') {
                    $('#treeSplitter').jqxSplitter({
                        panels: [{size: '20%', min: 150, resizable: true}, {size: '80%', min: 150, resizable: true}]
                    });
                    if (compType == 'CLUSTER') {// grids,tabs,form ,cluster
                        var clusterDiv = '<div id="clusterSplitter">'
                                + '<div class="visionMasterDetailPanelTop" id="levelTabId"></div>'
                                + '<div class="visionMasterDetailPanelBottom" id="level1TabId"></div>'
                                + '</div>';
                        $("#treeGridDiv").html(clusterDiv);
                        fetchCluster(selectedColumnObj, selectedValue, level);
                    } else if (compType == 'TREE') {
                        var childTreeDiv = ' <div id="jqxChildExpander">'
                                + ' <div id="expanderChildDesc" class="visionTreeDescription"></div>'
                                + ' <div style="border: none;" id="jqxChildTreeDropdown" class="visionTreeDropDown" ></div>'
                                + ' <div style="overflow: hidden;" id="jqxChildTreeDiv">'
                                + '<div style="border: none;" id="jqxChildTree"></div>'
                                + '</div>'
                                + '</div>';
                        $("#treeGridDiv").html(childTreeDiv);
                        fetchChildTree('jqxTree', selectedColumnObj, selectedValue, level);
                    } else if (compType == 'ANALYTICS') {

                    }
                }

            }



        });
    }
       stopLoader();
}
// displaying tree by tree
function fetchChildTree(masterTreeId, selectedColumnObj, selectedValue, level) {
    if (selectedColumnObj != null && !jQuery.isEmptyObject(selectedColumnObj)) {
        var extTreeParams = $("#extChildTreeParams").val();
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getSelectedTree",
            cache: false,
            data: {
                treeId: selectedColumnObj['FOLLOWUP_COMP_ID'],
                selectedColumnObj: JSON.stringify(selectedColumnObj),
                selectedValue: selectedValue,
                level: level,
                extTreeParams: extTreeParams
            },
            success: function (treeObject, status, xhr) {
                if (treeObject != null && !jQuery.isEmptyObject(treeObject)) {
                    $("#expanderChildDesc").html(treeObject['treeDesc']);//treeDesc
                    var extTreeParams = {};
                    extTreeParams = treeObject['extTreeParams'];
                    if (extTreeParams != null && !jQuery.isEmptyObject(extTreeParams)) {
                        $("#extTreeChildParams").val(JSON.stringify(extTreeParams));
                    }

                    selectedChildTreeConfig(treeObject, selectedColumnObj, selectedValue, level);
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
function selectedChildTreeConfig(treeObj, selectedColumnObj, selectedValue, level) {
    if (treeObj != null && !jQuery.isEmptyObject(treeObj)) {
        $("#jqxChildTree").jqxTree('destroy');
        $("#jqxChildTree").remove();
        $("#jqxChildTreeDiv").html("<div style=\"border: none;\" id='jqxChildTree'></div>");
        var pageHeight = $(".visionHeader").height() + $(".visionFooterMain").height() + $(".visionBreadcrumMain").height();
        var splitterHeight = (parseInt($(window).height()) - parseInt(pageHeight));
        var treeConfigObj = treeObj['treeConfigObj'];
        var treeInitParamObj = treeObj['treeInitParamObj'];
        var columnsObj = treeObj['treeColumnObj'];
        treeConfigObj.height = parseInt(splitterHeight);
        $('#jqxChildTree').jqxTree(treeConfigObj);
        $("#jqxChildTree").jqxTree('focus');
        $("#treeGridDiv").show();
        $('#jqxChildTree').on('expand', function (event) {
            var parentItem = $('#jqxChildTree').jqxTree('getItem', event.args.element);
            var $element = $(event.args.element);
            var loader = false;
            var loaderItem = null;
            var children = $element.find('ul:first').children();
            // var children = $element.find('ul:first').children();
            $.each(children, function () {
                var item = $('#jqxChildTree').jqxTree('getItem', this);
                if (item && item.value == 'ajax') {
                    loaderItem = item;
                    loader = true;
                    return false
                }
                ;
            });
            if (loaderItem != null) {
                var extTreeParams = $("#extChildTreeParams").val();
                $('#jqxChildTree').jqxTree('removeItem', loaderItem.element);
                $.ajax({
                    type: "post",
                    traditional: true,
                    dataType: 'json',
                    url: "getTreeDataOpt",
                    cache: false,
                    data: {
                        parentkey: parentItem.value,
                        treeId: treeObj['treeId'],
                        level: parentItem.level,
                        extTreeParams: extTreeParams,
                        columnsObj: JSON.stringify(columnsObj),
                        masterSelectedValue: selectedValue
                    },
                    success: function (data, status, xhr) {
//                            var items = jQuery.parseJSON(data);
                        $('#jqxChildTree').jqxTree('addTo', data, $element[0]);
                        var items = $('#jqxChildTree').jqxTree('getItems');
                        $.each(items, function () {
                            $(this.titleElement).attr('title', this.label);
                        });


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
    stopLoader();
}
function clearTextSearch() {
    stopLoader();
    $("#treeSearchtextcount").text("");
    $("#treeSearchtextcount").text('');
    $("#treeSearchResult").cleanData;
    $("#treeSearchResult").val('');
    $("#intellisense").empty();
    $("#intellisense1").empty();
    $("#jqxTreeDiv").show();
    $("#intellisensebox").css("background", "none");
    //$("#searchResults").jqxGrid('clear');
    // $("#templatesearchResults").jqxGrid('clear');
    $("#intellisensebox").attr("data-space", "no");
    $("#result").attr("data-selected", "NO");
    $("#intellisensebox").attr("data-selection-type", "contain");
    $("#tresults").attr("data-clicked", "no");
    $("#containsearch").prop("checked", "checked");
    //$("#localedd").find('option:first').attr('selected', 'selected');
//    $("#localedd").prop('selectedIndex', 0);


    $("#localedd option").each(function () {
        if ($(this).attr('data-code') == $("#sessionLocale").val())
        {
            $('#localedd').val(this.value);
            return false;
        }
    });
    sourceArray = [];
    // $("#tooltipdiv").jqxTooltip("close");
    //   $("#intellisensebox").hide();

    $("#intellisensebox").attr('data-text', 'NA');
    try {
        $('#searchResults').jqxGrid('clear');
        $("#search_count").html("");
//        $('#templatesearchResults').jqxGrid('clear');
    } catch (err) {
        console.log("Caught error while clearing textsearch:::" + err);
    }
    $(".clear_searchField").hide();
}