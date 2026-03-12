function showMasterDataRegistry(gridId) {
    closePopOverSideMenu();
    showLoader();
    $.ajax({
        type: "POST",
        url: 'getCloudGrid',
        data: {
            gridId: gridId,
            roleId: $("#rolehid").val(),
        },
        traditional: true,
        cache: false,
        success: function (result) {
            stopLoader();
            $("#DxpVisualizationbutton").hide();
            $(".searchMainWrap").show();
            $(".languageSelectionBox").show();
            $(".settingheaderImage").show();
            var divstr = "<div class='dataUnificationMainDiv' id='dataUnificationMainDiv'>"
                    + "<div id='tabsdiv'>"
                    + "<div class ='registryTabHeader active' id='defaultTab' style='display:none;'  onclick='switchRegistryTabs(\"defaultTab\", \"treeGridDiv\",event)' ><p class='oddClass'>Default<span class='closeBtn' onclick='closeRegistryTab(\"defaultTab\", \"treeGridDiv\")' ><img src='images/close.png' width='14px'></span></p></div>"
                    + "<div class ='registryTabHeader' id='refernceDataTab' style='display:none;'  onclick='switchRegistryTabs(\"refernceDataTab\", \"refernceDataTabContent\",event)' ><p class='evenClass'>Reference<span class='closeBtn' onclick='closeRegistryTab(\"refernceDataTab\", \"refernceDataTabContent\")'  ><img src='images/close.png' width='14px'></span></p></div>"
                    + "<div class ='registryTabHeader' id='charDataTab' style='display:none;'  onclick='switchRegistryTabs(\"charDataTab\", \"charDataTabContent\",event)' ><p class='oddClass'>Characteristics<span class='closeBtn' onclick='closeRegistryTab(\"charDataTab\", \"charDataTabContent\")' ><img src='images/close.png' width='14px'></span></p></div>"
//                    + "<div class ='registryTabHeader' id='classAllocationTab' style='display:none;'  onclick='switchRegistryTabs(\"classAllocationTab\", \"classAllocationTabContent\",event)' ><p class='evenClass'>Class Allocation<span class='closeBtn' onclick='closeRegistryTab(\"classAllocationTab\", \"classAllocationTabContent\")' ><img src='images/close.png' width='14px'></span></p></div>"
                    + "<div class ='registryTabHeader' id='dataProfilingTab' style='display:none;'  onclick='switchRegistryTabs(\"dataProfilingTab\", \"dataProfilingTabContent\",event)' ><p class='evenClass'>Data Profiling<span class='closeBtn' onclick='closeRegistryTab(\"dataProfilingTab\", \"dataProfilingTabContent\")'  ><img src='images/close.png' width='14px'></span></p></div>"
                    + "<div class ='registryTabHeader' id='dataHealthAssessmentTab' style='display:none;'  onclick='switchRegistryTabs(\"dataHealthAssessmentTab\", \"dataHealthAssessmentTabContent\",event)' ><p class='oddClass'>DHA<span class='closeBtn' onclick='closeRegistryTab(\"dataHealthAssessmentTab\", \"dataHealthAssessmentTabContent\")'  ><img src='images/close.png' width='14px'></span></p></div>"
                    + "<div class ='registryTabHeader' id='duplicateCheckTabForExisting' style='display:none;'  onclick='switchRegistryTabs(\"duplicateCheckTabForExisting\", \"duplicateCheckTabContentForExisting\",event)' ><p class='evenClass'>File Duplicates<span class='closeBtn' onclick='closeRegistryTab(\"duplicateCheckTabForExisting\", \"duplicateCheckTabContentForExisting\")' ><img src='images/close.png' width='14px'></span></p></div>"
                    + "<div class ='registryTabHeader' id='duplicateCheckTabForFile' style='display:none;'  onclick='switchRegistryTabs(\"duplicateCheckTabForFile\", \"duplicateCheckTabContentForFile\",event)' ><p class='oddClass'>File Duplicates<span class='closeBtn' onclick='closeRegistryTab(\"duplicateCheckTabForFile\", \"duplicateCheckTabContentForFile\")' ><img src='images/close.png' width='14px'></span></p></div>"
                    + "<div class ='registryTabHeader' id='duplicateReferenceDataTab' style='display:none;'  onclick='switchRegistryTabs(\"duplicateReferenceDataTab\", \"duplicateReferenceDataTabContent\",event)' ><p class='evenClass'>Reference Duplicate<span class='closeBtn' onclick='closeRegistryTab(\"duplicateReferenceDataTab\", \"duplicateReferenceDataTabContent\")' ><img src='images/close.png' width='14px'></span></p></div>"
                    + "</div>"
                    + "<div id='tabsContentdiv'>"
                    + "<div class ='registryTabContent' id='treeGridDiv'></div>"
                    + "<div class ='registryTabContent' id='refernceDataTabContent'></div>"
                    + "<div class ='registryTabContent' id='charDataTabContent'></div>"
//                    + "<div class ='registryTabContent' id='classAllocationTabContent'></div>"
                    + "<div class ='registryTabContent' id='dataProfilingTabContent'></div>"
                    + "<div class ='registryTabContent' id='dataHealthAssessmentTabContent'></div>"
                    + "<div class ='registryTabContent' id='duplicateCheckTabContentForExisting'></div>"
                    + "<div class ='registryTabContent' id='duplicateCheckTabContentForFile'></div>"
                    + "<div class ='registryTabContent' id='duplicateReferenceDataTabContent'></div>"
                    + "</div>"
                    + "</div>";

            $("#pageBodyContent").remove();
            $("#pageBody").append('<div class="page-body-content" id="pageBodyContent">' + divstr + '</div></div>');
            $("#pageBodyContent").append("<div class=\"dxpClassficationAppendClass\" id=\"dxpClassficationAppendClass\">");
            var paramObj = {};

//          paramObj.column = 'RECORD_NO';
//          paramObj.value = '3120002935423';
            paramObj.column = '1';
            paramObj.value = '1';
            paramObj.operator = "EQUALS";
            paramObj.symbol = "Euqals";
            gridNewConfigPoc(result, "", paramObj, gridId);
        }
    });
}

function gridNewConfigPoc(gridResultObj, selectedGridIndex, paramObj, selectedGridId) {
    showLoader();
    globalTabId = gridResultObj['gridId'];
    console.log(":293::gridConfig::");
    var parentDiv;
    if (gridResultObj['gridId'] == "MM_REFERENCE") {
        parentDiv = "refernceDataTabContent";
    } else if (gridResultObj['gridId'] == "MM_MASTER_O_RECORD_CHAR") {
        parentDiv = "charDataTabContent";
    } else {
        parentDiv = "treeGridDiv";
    }
    $("#" + parentDiv).html("<div id='" + gridResultObj['gridId'] + "'></div>");

    try {
        // if(true) {
        try {
            $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'cells');
            $('#' + gridResultObj['gridId']).jqxGrid('clearfilters');
        } catch (e) {

        }

        // $('#' + gridResultObj['gridId']).jqxGrid('destroy');
        alert(subTabId + "::::" + $("#" + gridResultObj['gridId']).length);

        if (gridResultObj != null) {
            //need to assign all hidden fields like hrefColumn,linkedColumns,stripValue,imageColumn,imageTable,imageTableColumn
            var hrefObj = {}; //hrefObj
            hrefObj = gridResultObj['hrefObj'];
            $("#hrefColumn").val(hrefObj['hrefColumn'] != null ? hrefObj['hrefColumn'] : "");
//                        $("#hrefColumn").val(hrefObj['hrefColumn']);
            $("#linkedColumns").val(hrefObj['linkedColumns']);
            $("#stripValue").val(hrefObj['stripValue']);
            $("#imageColumn").val(hrefObj['imageColumn']);
            $("#imageTable").val(hrefObj['imageTable']);
            $("#imageTableColumn").val(hrefObj['imageTableColumn']);
            $("#defaultValues").val(gridResultObj['defaultValues']);
            $("#currentGridId").val(selectedGridId);

            var gridInitParamObj = {}; //gridInitParamObj
            gridInitParamObj = gridResultObj['gridInitParamObj'];

            if (gridInitParamObj != null && !jQuery.isEmptyObject(gridInitParamObj)) {
                $("#" + gridResultObj['gridId']).attr("data-gridinitparamobj", JSON.stringify(gridInitParamObj));
            }
            if (gridResultObj != null && !jQuery.isEmptyObject(gridResultObj)) {
                $("#" + gridResultObj['gridId']).attr("data-gridResultObj", JSON.stringify(gridResultObj));
            }
            $("#processClassAndMethod").val(gridInitParamObj['uuu_processClassAndMethod'] != null ? gridInitParamObj['uuu_processClassAndMethod'] : "");
            var batchInd = gridInitParamObj["uuu_BatchInd"];
            $("#massColumnHide").val(gridInitParamObj['massColumnHide']);
            $("#massValidateComment").val(gridInitParamObj['uuu_ValidateComment']);
            $("#batchIndicator").val(batchInd);
            var tableName = gridResultObj['tableName'];
            $("#tableName").val(tableName);
            var barCodeColumnName = gridInitParamObj['uuu_BarCodeColumn'];
            $("#barCodeColumnName").val(barCodeColumnName);
            var gridTemplateColLabels = gridInitParamObj['uuu_gridTemplateColLabels'];
            var gridTemplateColumns = gridInitParamObj['uuu_gridTemplateColumns'];
            var apiResponseWaitTimeInMilliSec = gridInitParamObj['uuu_apiResponseWaitTimeInMilliSec'];
            var updateClassAllocation = gridInitParamObj['uuu_updateClassAllocation'];
            if (gridTemplateColLabels !== null && gridTemplateColLabels !== '' && gridTemplateColLabels !== undefined) {
                $("#gridTemplateColLabels").val(gridTemplateColLabels);
            }
            if (gridTemplateColumns !== null && gridTemplateColumns !== '' && gridTemplateColumns !== undefined) {
                $("#gridTemplateColumns").val(gridTemplateColumns);
            }
            if (updateClassAllocation !== null && updateClassAllocation !== '' && updateClassAllocation !== undefined) {
                $("#updateClassAllocation").val(updateClassAllocation);
            }
            if (apiResponseWaitTimeInMilliSec !== null && apiResponseWaitTimeInMilliSec !== '' && apiResponseWaitTimeInMilliSec !== undefined) {
                $("#apiResponseWaitTimeInMilliSec").val(apiResponseWaitTimeInMilliSec);
            }
            if (gridInitParamObj['uuu_exportRangeCount'] != null && gridInitParamObj['uuu_exportRangeCount'] != '') {
                $("#ssExportCount").val(gridInitParamObj['uuu_exportRangeCount']);
            }

            var columnInitParamObj = {};
            columnInitParamObj = gridResultObj['columnInitParamsObj'];
            $("#columnInitParams").val(JSON.stringify(columnInitParamObj));

            var dropDownListData = gridResultObj.dropDownListData;

            //  alert("hrefObj:::::"+JSON.stringify(hrefObj));
            if (gridResultObj != null && gridResultObj.datafields) {
                var dataFeilds = gridResultObj.datafields;
                var hrefObj = gridResultObj.hrefObj;
                var localData = gridResultObj.data;
                var formId = gridResultObj.formId;
                var panelId = gridResultObj.panelId;
                var gridOperation = gridResultObj.gridOperation;
                $('#formId').val(formId);
                $('#panelId').val(panelId);
                var gridPropObj = {};
                gridPropObj = gridResultObj.gridPropObj;
                var hiddenObj = gridResultObj['hiddenObj'];
                if (hiddenObj != null) {
                    $("#hiddenObj").val(JSON.stringify(hiddenObj));
                }
                if (gridPropObj != null) {
                    fieldsArray.length = 0;
                    fieldsArray = gridResultObj.columns;
                    gridPropObj.columns = gridResultObj.columns;
                    var headerTooltipRenderer = function (element) {
                        $(element).parent().jqxTooltip({position: 'mouse',
                            position: 'bottom-right',
                            showArrow: false, content: $(element).text()});
                    };
                    var dataSheetRendered = function (element) {
                        // $(element).html("<div class='show_detail' ></div>");
                        $(element).addClass("show_detail");
                        $(element).parent().jqxTooltip({position: 'mouse',
                            position: 'bottom-right',
                            showArrow: false,
                            content: "Data Sheet"});
                        //content: $(element).text()});
                    };
                    var renderToolbar = gridPropObj.renderToolbar;
                    gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');

                    var descoptrender
                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                                var element = $(defaulthtml);
                                element.addClass('visionSearchWrapDescrDiv');
                                var gridRowHeight = $('#' + gridResultObj['gridId']).jqxGrid('rowsheight');
                                if (gridRowHeight != null && parseInt(gridRowHeight) <= 50) {
//                                         element.css('overflow', 'scroll');
                                    element.css('overflow-y', 'scroll');//overflow-y:scroll !important;
                                }
                                if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                                    var selectedColumnInitParamObj = columnInitParamObj[columnfield];
                                    if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
                                        var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
                                        if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
                                                rowData != null
                                                && rowData[uuu_TitleValueColumn] != null
                                                && rowData[uuu_TitleValueColumn] != ''
                                                ) {//REQUIRED_FLAG
                                            element.removeAttr('title');
                                            element.attr('title', rowData[uuu_TitleValueColumn]);
                                        }
                                    }

                                }
//                                            element.css('overflow', 'scroll');
                                return element[0].outerHTML;
                            };
                    var buttonRanderer
                            = function (row, columnfield, value, defaulthtml, columnproperties) {
                                return ""
                                        + "<button onclick=showDuplicatesPDR1AndPDR2('" + gridResultObj['gridId'] + "','" + row + "') style='width: 100px;'>Duplicates</button>"
                                        + "<button onclick=showCharacteristicsPopup('" + gridResultObj['gridId'] + "','" + row + "') style='width: 100px;'>Characteristics</button>"
                                        + "<button onclick=suggestedVendorsList('" + gridResultObj['gridId'] + "','" + row + "') style='width: 120px;'>Suggested Vendors</button>"
                                        + "<button onclick=vendorsList('" + gridResultObj['gridId'] + "','" + row + "') style='width: 100px;'>Vendors List</button>";
                            };
                    var processStatusRanderer
                            = function (row, columnfield, value, defaulthtml, columnproperties) {
                                return "<select style='height:100%;' class='recordProcessStatusClass'  id='recordProcessStatus' onchange=updateRecordProcessStatus('" + gridResultObj['gridId'] + "','" + row + "')>"
                                        + "<option value='INPROCESS'>In Process</option>"
                                        + "<option value='COMPLETED'>Completed</option>"
                                        + "</select>"
                            };
                    var editable = gridPropObj.editable;
                    if (editable) {
                        for (var i = 0; i < dataFeilds.length; i++) {
                            if (typeof dataFeilds[i].values != "undefined" && dataFeilds[i].values != null) {
                                var listboxData = eval(dataFeilds[i].values.source);
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
                                gridResultObj.datafields[i].values.source = listBoxAdapter.records;
                            }
                        }
                    }
                    for (var i = 0; i < gridPropObj.columns.length; i++) {
                        if (gridPropObj.columns [i].cellsrenderer != null) {
                            gridPropObj.columns [i].cellsrenderer = eval(gridPropObj.columns [i].cellsrenderer);
                        }
                        if (gridPropObj.columns[i].rendered != null) {
                            gridPropObj.columns[i].rendered = eval('(' + gridPropObj.columns[i].rendered + ')');
                        }

                        if (gridPropObj.columns[i].createeditor != null) {
                            gridPropObj.columns[i].createeditor = eval('(' + gridPropObj.columns[i].createeditor + ')');
                        }
                        if (gridPropObj.columns[i].initeditor != null) {
                            gridPropObj.columns[i].initeditor = eval('(' + gridPropObj.columns[i].initeditor + ')');
                        }
                        if (gridPropObj.columns[i].geteditorvalue != null) {
                            gridPropObj.columns[i].geteditorvalue = eval('(' + gridPropObj.columns[i].geteditorvalue + ')');
                        }
                        if (gridPropObj.columns[i].cellvaluechanging != null) {
                            gridPropObj.columns[i].cellvaluechanging = eval('(' + gridPropObj.columns[i].cellvaluechanging + ')');
                        }
                        if (gridPropObj.columns[i].cellbeginedit != null) {
                            gridPropObj.columns[i].cellbeginedit = eval('(' + gridPropObj.columns[i].cellbeginedit + ')');
                        }
                    }
                    if (gridPropObj.rendergridrows != null && gridPropObj.rendergridrows != "") {

                        gridPropObj.rendergridrows = eval('(' + gridPropObj.rendergridrows + ')');
                    }

                    var paramArray = [];
                    paramArray.push(paramObj);

                    var subTabId = "jqxTabs";
                    console.log("before dataFeilds" + JSON.stringify(dataFeilds));
                    var data = {
                        gridId: gridResultObj['gridId'],
                        colsArray: JSON.stringify(gridResultObj['colsArray']),
                        tableName: gridResultObj['tableName'],
                        paramArray: JSON.stringify(paramArray),
                        gridInitParamObj: JSON.stringify(gridInitParamObj),
                        columnInitParamObj: JSON.stringify(columnInitParamObj),
                        processClassAndMethod: $("#processClassAndMethod").val()

                    };
                    var source =
                            {
                                type: 'POST',
//                                                async: false,
                                datatype: "json",
                                datafields: dataFeilds,
                                data: data,
                                url: 'cloudGridResults',
                                cache: false,
                                root: 'Rows',
                                processdata: function (data) {
                                },
                                beforeSend: function (xhr) {
                                    xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                                    showLoader();
                                }, loadError: function (xhr, status, error) {
                                    globalSelectedRow = null;
                                    stopLoader();
                                    // throw new Error(error);
                                }, loadComplete: function (data)
                                {
                                    globalSelectedRow = null;
                                    stopLoader();
                                },
                                beforeprocessing: function (data) {
                                    if (data[0] != null) {
                                        //  alert(data.JSONObjectList[0].TotalRows);
                                        source.totalrecords = data[0].TotalRows;
                                        $("#excelExport" + gridResultObj['gridId']).attr("disabled", true);
//                                                        $("#excelExport").removeAttr("disabled");
                                        $("#drop" + gridResultObj['gridId']).removeAttr("disabled");
                                        $("#drop" + gridResultObj['gridId']).removeAttr("opacity");
                                        $("#export" + gridResultObj['gridId']).removeAttr("disabled");
                                        $("#export" + gridResultObj['gridId']).removeAttr("style");
                                        console.log("data[0] != null:::: $(\"#drop\").attr(\"disabled\":::::" + $("#drop" + gridResultObj['gridId']).attr("disabled"));
                                        console.log("data[0] != null::: $(\"#export\").attr(\"disabled\":::::" + $("#export" + gridResultObj['gridId']).attr("disabled"));
                                    } else {

                                        source.totalrecords = 0;
                                        $("#excelExport" + gridResultObj['gridId']).attr("disabled", true);
                                        $("#approvebutt" + gridResultObj['gridId']).attr("disabled", true);
                                        $("#drop" + gridResultObj['gridId']).attr("disabled", true);
                                        $("#drop" + gridResultObj['gridId']).css("opacity", "0.5");
                                        $("#export" + gridResultObj['gridId']).attr("disabled", true);
                                        $("#export" + gridResultObj['gridId']).css("opacity", "0.5");
                                    }
                                    stopLoader();
                                },
                                sort: function ()
                                {
//                                                $("#" + gridResultObj['gridId'] + "_sort_columns").remove();
                                    $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'sort');
                                    try {
                                        $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
                                    } catch (e) {
                                    }
                                    stopLoader();
                                },
                                filter: function () {
                                    $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'filter');
                                    try {
                                        $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
                                    } catch (e) {
                                    }
                                    stopLoader();
                                }


                            };
                    var dataAdapter = new $.jqx.dataAdapter(source);
                    gridPropObj.source = dataAdapter;
                    var srsRegiterButton = gridInitParamObj['registerButtonFlag'];
                    var hideToolBar = gridInitParamObj['uuu_hideToolBar'];
                    // var hideToolBar = gridInitParamObj['hideToolBar'];
                    //var srsRegiterButton = gridInitParamObj['srsRegisterFlag'];
                    if ((srsRegiterButton != null && srsRegiterButton != undefined && srsRegiterButton == 'Y')
                            || (hideToolBar != null && hideToolBar != undefined && hideToolBar == 'Y'))
                    {
                        gridPropObj.showtoolbar = true;
                        console.log("iam in if condition in toolbar 846" + srsRegiterButton);
                    } else
                    {
                        gridPropObj.showtoolbar = false;
                        console.log("iam in else condition in toolbar 852" + srsRegiterButton);
                    }
                    // gridPropObj.showtoolbar = false;
                    gridPropObj.rowdetails = true;
                    gridPropObj.rendergridrows = function () {
                        return dataAdapter.records;
                    };

                    $("#submitDropdown" + gridResultObj['gridId']).html(gridResultObj['buttonObj']);
                    $("#exportDropdown" + gridResultObj['gridId']).html(gridResultObj['gridOperation']);
                    gridPropObj.rowdetails = false;
                    alert("Before Grid");
                    //subTabId

                    if (editable)
                    {
                        $('#gridRefreshButton').hide();
//                                        $('div#submitDropdown > img').remove();
                    }

                    $("#currentGridpageNum").val(0);
                    gridPropObj['pagesize'] = "50";
//                var columns = gridPropObj['columns'];
//                $.each(columns, function(i){
//                   if (this['datafield']=='VENDOR'){
//                         this['columntype'] = 'button';
//                        columnsObject['cellsrenderer'] = showActionButton;
//                        columnsObject['buttonclick'] = registerItem;
//                   }
//                })

//                gridPropObj['selectionmode'] = "none";
                    $('#' + gridResultObj['gridId']).jqxGrid(gridPropObj);
//                $('#' + gridResultObj['gridId']).jqxGrid('selectionmode', 'singlerow');
//                var height = $('#' + gridResultObj['gridId']).jqxGrid('height');
//                $('#' + gridResultObj['gridId']).jqxGrid({height: 630});
//                $('#' + gridResultObj['gridId']).jqxGrid({ pagesize: 50}); 

                    $("#" + gridResultObj['gridId']).on('cellbeginedit', function (event) {
                        var args = event.args;
                        var columntype = args.columntype
                        var dataField = args.datafield;
                        var columnindex = args.columnindex;
                        var rowBoundIndex = args.rowindex;
                        var cellValue = args.value;
                        currentDataField = dataField;
                        currentRowIndex = rowBoundIndex;
                        currentColumnindex = columnindex;

                    });
                    $('#' + gridResultObj['gridId']).on('cellclick', function (event) {
//                                    $('#searchResults').bind('cellclick', function (event) {
                        var panelId = $("#panelId").val();
                        console.log(panelId + ":::event.args.column.datafield:::::" + event.args.column.datafield);

                        // navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId']);
                    });
                    $('#' + gridResultObj['gridId']).on('celldoubleclick', function (event) {
                        var args = event.args;
                        var dataField = args.datafield;
                        var dataField1 = args.text;
                        var rowIndex = args.rowindex;
                        var cellValue = args.value;
                        var column = $('#' + gridResultObj['gridId']).jqxGrid('getcolumn', event.args.datafield).text;
                        popupedit(column, cellValue);
                    });
//                    $('#' + gridResultObj['gridId']).unbind('rowunselect').on('rowunselect', function (event) {
//                        $("#linkVendorDxpButton").parent().hide();
//                        $("#vendorsListDxpButton").parent().hide();
////                                    showSelectedRows(gridResultObj['gridId'],null,gridInitParamObj['uuu_GridNtfnFlag']);
//                    });
//                    $('#' + gridResultObj['gridId']).unbind('rowselect').on('rowselect', function (event) {
//                        globalSelectedRow = event.args.rowindex;
//                        var selectedrowindexes = $('#' + gridResultObj['gridId']).jqxGrid('selectedrowindexes');
//                        var selectedRowIndex = event.args.rowindex;
//                        $.each(selectedrowindexes, function (i) {
//                            if (selectedrowindexes[i] != selectedRowIndex) {
//                                $('#' + gridResultObj['gridId']).jqxGrid('unselectrow', selectedrowindexes[i]);
//                            }
//                        })
//                        $("#linkVendorDxpButton").parent().show();
//                        $("#vendorsListDxpButton").parent().show();
////                    $('#' + gridResultObj['gridId']).jqxGrid({selectedrowindex: event.args.rowindex});
////                                    showSelectedRows(gridResultObj['gridId'], event.args.rowindex,gridInitParamObj['uuu_GridNtfnFlag']);
//                    });

                    $('#' + gridResultObj['gridId']).on("pagechanged", function (event) {
                        var oldPageNum = $("#currentGridpageNum").val();
                        console.log("oldPageNum:::" + oldPageNum + "::::Current Page Num:::" + event.args.pagenum);
                        // event arguments.
                        var args = event.args;
                        // page number.
                        var pagenum = args.pagenum;
                        // page size.
                        var pagesize = args.pagesize;
                        if (parseInt(event.args.pagenum) != parseInt(oldPageNum)) {
                            var selectedrowindexes = $('#' + gridResultObj['gridId']).jqxGrid('selectedrowindexes');
//                                        console.log("searchResults:::selectedrowindexes:::" + selectedrowindexes);
                            try {
                                if (selectedrowindexes != null
                                        && selectedrowindexes.length != 0
                                        && selectedrowindexes[0] != -1) {
                                    $('#' + gridResultObj['gridId']).jqxGrid('clearselection');
                                }

                            } catch (e) {
                            }
                        }
                        $("#currentGridpageNum").val(event.args.pagenum);
                    });
                    $('#' + gridResultObj['gridId']).on("pagesizechanged", function (event) {
                        console.log("::pagesizechanged:::" + event.args.pagenum);
                        $("#currentGridpageNum").val(0);
                    });

                    alert("604 Grid");
                    $(window).resize(function () {
                        if (gridResultObj != null && $('#' + gridResultObj['gridId']).length > 0) {
                            var windowWidth = $(this).width();
                            if (windowWidth <= 415)
                            {
                                $('#' + gridResultObj['gridId']).jqxGrid({pagerheight: 70});
                            } else if (windowWidth >= 416 && windowWidth <= 500)
                            {
                                $('#' + gridResultObj['gridId']).jqxGrid({pagerheight: 40});
                            } else
                            {
                                $('#' + gridResultObj['gridId']).jqxGrid({pagerheight: 30});
                                $('#' + gridResultObj['gridId']).jqxGrid({scrollbarsize: 8});
                            }
                        }

                    }).resize();
                    $('#' + gridResultObj['gridId']).parent().css("padding-top", "3px", "important");
                    $('#' + gridResultObj['gridId']).parent().css("padding-bottom", "3px", "important");
                    //   $('#' + gridResultObj['gridId']).jqxGrid('showtoolbar', false);
                    if ((srsRegiterButton != null && srsRegiterButton != undefined && srsRegiterButton == 'Y')
                            || (hideToolBar != null && hideToolBar != undefined && hideToolBar == 'Y'))

                    {
                        $('#' + gridResultObj['gridId']).jqxGrid('showtoolbar', true);
                        console.log("iam in if grid condition in toolbar 1016" + srsRegiterButton);
                    } else
                    {
                        $('#' + gridResultObj['gridId']).jqxGrid('showtoolbar', false);
                        console.log("iam in else grid condition in toolbar 1021" + srsRegiterButton);
                    }
                    alert("683 Grid");
                }// end if(gridPropObj != null)
            }
        }
    } catch (e) {
        stopLoader();
    }
    stopLoader();

}

function downloadTemplateCustCols(gridId, templateId) {
    labelObject = {};
    labelObject = JSON.parse($("#labelObjectHidden").val());
    var form = '<form id="importData"  method="post">'
            + '<input type="hidden" name="columnsList" id="columnsList" value=""/>'
            + '</form>';
    $("body").append(form);
    var columnsLabels = $("#gridTemplateColLabels").val();
    $('#columnsList').val(columnsLabels);
    $("#importData").attr("action", "downloadRegistryTemplate");
    $("#importData").submit();
}

function showDRReferncesInputForm11(gridId, operationName) {
    var selectBatchIdsList = "";
    $.ajax({
        type: "POST",
        url: 'getBatchIdList',
        dataType: 'json',
        data: {
            tableName: 'O_RECORD_DATA_UNIFICATION_STG'
        },
        traditional: true,
        cache: false,
        success: function (response) {
            if (response != null) {
                var batchIdList = response['batchIdList'];


                var selectBatchIdsList = "<div class='batchSelectColumn'><h6>Select Batch Ids </h6>"
                        + "<div style='max-height:200px;overflow-y: scroll;' class='batchSelectColumntableView'><table>";
                $.each(batchIdList, function (i) {
                    selectBatchIdsList += "<tr>"
                            + "<td>" + batchIdList[i] + "</td>"
                            + "<td><input class='batchIdValues' type='checkbox' value='" + batchIdList[i] + "' /></td>"
                            + "</tr>";
                })
                selectBatchIdsList += "</table>";
                selectBatchIdsList += "</div>";

                var modalObj = {
                    title: 'Provide Input Values',
                    body: selectBatchIdsList
                };
                var buttonArray = [
                    {
                        text: 'Submit',
                        click: function () {
                            var batchId = "";
                            var batchId = "";
                            $(".batchIdValues:checkbox:checked").each(function (i) {
                                batchId += $(this).val() + ",";
                            })
                            if (batchId != "") {
                                batchId = batchId.slice(0, -1);
                            }
                            getDRRefernces(gridId, operationName, batchId);
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                $("#modalDailogDiv").remove();
                $("body").append("<div id='modalDailogDiv'></div>");
                createModal("modalDailogDiv", modalObj);
                $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");
            }
        }
    });

}

function showDRReferncesInputForm(gridId, operationName) {

    var selectBatchIdsList = "<div class='batchSelectColumn'><h6>Select Batch Ids </h6>"
            + "<div style='max-height:200px;overflow-y: scroll;' class='batchSelectColumntableView'><table>";

    selectBatchIdsList += "<tr>"
            + "<td style='width: 95%;'><input id='batchIdsListInput' value='' style='width: 100%;'></td>"
            + "<td><img src='images/iDXPUI5Search.svg' style='width:15px;height:15px;' onclick=selectBatchIdGrid('selectBatchIdListGrid')  /></td>"
            + "</tr>";

    selectBatchIdsList += "</table>";
    selectBatchIdsList += "</div>";
    selectBatchIdsList += "</div>";

    var modalObj = {
        title: 'Provide Input Values',
        body: selectBatchIdsList
    };
    var buttonArray = [
        {
            text: 'Submit',
            click: function () {
                var batchId = $("#batchIdsListInput").val();
                getDRRefernces(gridId, operationName, batchId);
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    $("#modalDailogDiv").remove();
    $("body").append("<div id='modalDailogDiv'></div>");
    createModal("modalDailogDiv", modalObj);
    $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");

}

function selectBatchIdGrid(gridId) {
    var body = "<div id='" + gridId + "'></div>";
    var modalObj = {
        title: 'Choose Batch Id ',
        body: body
    };
    var buttonArray = [
        {
            text: 'Submit',
            click: function () {
                var batchId = "";
                var selectedRows = $('#' + gridId).jqxGrid('getselectedrowindexes');
                $.each(selectedRows, function (i) {
                    var data = $("#" + gridId).jqxGrid('getrowdata', selectedRows[i]);
                    var batch = data['BATCH_ID'];
                    batchId += batch + ",";
                })
                if (batchId != "") {
                    batchId = batchId.slice(0, -1);
                }
                $("#batchIdsListInput").val(batchId);
//                getDRRefernces(gridId, null, batchId);
            },
            isCloseButton: true
        },
        {
            text: 'Close',
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    $("#modalDailogDiv1").remove();
    $("body").append("<div id='modalDailogDiv1'></div>");
    createModal("modalDailogDiv1", modalObj);
    $("#modalDailogDiv1").find('.modal-header').hide();
    $("#modalDailogDiv1").find(".modal-dialog").addClass("modal-xs opacity-animate3");

//    var dataArray = [];
//    $.each(batchIdList, function (i) {
//        var dataObj = {};
//        dataObj['BATCH_ID'] = batchIdList[i];
//        dataArray.push(dataObj);
//    })

    var dataFieldsArray = [];
    var datafieldObj = {};
    datafieldObj['name'] = 'BATCH_ID';
    datafieldObj['type'] = 'string'
    dataFieldsArray.push(datafieldObj);

    var columnsArray = [];
    var colsObj = {};
    colsObj['datafield'] = 'BATCH_ID';
    colsObj['sortable'] = 'true';
    colsObj['text'] = 'BATCH_ID';
    colsObj['width'] = '430';
    columnsArray.push(colsObj);

    var source =
            {
                type: 'POST',
//                                                async: false,
                datatype: "json",
                datafields: dataFieldsArray,
                data: {
                    tableName: "O_RECORD_DATA_UNIFICATION_STG"
                },
                url: 'getBatchIdGridList',
                cache: false,
                root: 'Rows',
                processdata: function (data) {
//                                showLoader();
                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                    showLoader();
                }, loadError: function (xhr, status, error) {
                    stopLoader();

                }, loadComplete: function (data)
                {

                    stopLoader();
                },
                beforeprocessing: function (data) {

                    source.totalrecords = data[data.length - 1];
                },
                sort: function ()
                {
//                                                $("#" + gridResultObj['gridId'] + "_sort_columns").remove();
                    $("[id='" + gridId + "']").jqxGrid('updatebounddata', 'sort');
                    try {
                        $("[id='" + gridId + "']").jqxGrid('clearselection');
                    } catch (e) {
                    }
                    stopLoader();
                },
                filter: function () {

                    $("[id='" + gridId + "']").jqxGrid('updatebounddata', 'filter');
                    try {
                        $("[id='" + gridId + "']").jqxGrid('clearselection');
                    } catch (e) {
                    }
                    stopLoader();
                }
            };
    stopLoader();
    var dataAdapter = new $.jqx.dataAdapter(source, {
        loadComplete: function (data) { },
        loadError: function (xhr, status, error) { }
    });

    $("#" + gridId).jqxGrid(
            {
                width: "100%",
                height: "200",
                autoshowloadelement: false,
                source: dataAdapter,
//                pageable: true,
//                pagesize: 50,
//                showfilterrow: true,
//                filterable: true,
//                sortable: true,
                virtualmode: true,
//                pagesizeoptions: ['10', '20', '50', '100'],
                enabletooltips: true,
                enablemousewheel: true,
                enablehover: true,
                enablebrowserselection: true,
                selectionmode: 'checkbox',
                rendergridrows: function (params) {
                    return params.data;
                },
                columnsresize: true,
                columns: columnsArray
            });
}


function showReferenceDataInputForm(gridId, operationName) {
    var selectBatchIdsList = "<div class='batchSelectColumn'><h6>Select Batch Ids </h6>"
            + "<div style='max-height:200px;overflow-y: scroll;' class='batchSelectColumntableView'><table>";

    selectBatchIdsList += "<tr>"
            + "<td style='width: 95%;'><input id='batchIdsListInput' value='' style='width: 100%;'></td>"
            + "<td><img src='images/iDXPUI5Search.svg' style='width:15px;height:15px;' onclick=selectBatchIdGrid('selectBatchIdListGrid')  /></td>"
            + "</tr>";

    selectBatchIdsList += "</table>";
    selectBatchIdsList += "</div>";
    selectBatchIdsList += "</div>";

    var modalObj = {
        title: 'Provide Input Values',
        body: selectBatchIdsList
    };
    var buttonArray = [
        {
            text: 'Submit',
            click: function () {
                var batchId = $("#batchIdsListInput").val();
                getReferenceData(gridId, operationName, batchId);
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    $("#modalDailogDiv").remove();
    $("body").append("<div id='modalDailogDiv'></div>");
    createModal("modalDailogDiv", modalObj);
    $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");



}

function getDRRefernces(gridId, operationName, batchId) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'drReferncesUpdate',
        data: {
            'gridId': gridId,
            'batchId': batchId,
            'operationName': operationName
        },
        datatype: "json",
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null) {
                var charResult = response['charResult'];
                var refResult = response['refResult'];
                var modalObj = {
                    title: 'Message',
                    body: charResult + "<br><span onclick=\"viewGridData('MM_REFERENCE','refernceDataTabContent')\">View Reference Data</span><br>"
                            + refResult + "<br><span onclick=\"viewGridData('MM_MASTER_O_RECORD_CHAR','charDataTabContent')\">View Data</span><br>"
                };
                var buttonArray = [
                    {
                        text: 'Close',
                        click: function () {
//                        switchRegistryTabs('refernceDataTab', 'refernceDataTabContent');
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                $("#modalDailogDiv").remove();
                $("body").append("<div id='modalDailogDiv'></div>");
                createModal("modalDailogDiv", modalObj);
                $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");

            }


        },
        error: function (error) {
            console.error(error);
        }
    });
}

function getReferenceData(gridId, operationName, batchId) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'refernceDataUpdate',
        data: {
            'gridId': gridId,
            'batchId': batchId,
            'operationName': operationName
        },
        traditional: true,
        cache: false,
        success: function (result) {
            stopLoader();
            var modalObj = {
                title: 'Reference Data',
                body: result + "<br><span onclick=\"viewGridData('MM_REFERENCE','refernceDataTabContent')\">View Data</span>"
            };
            var buttonArray = [
                {
                    text: 'Close',
                    click: function () {
//                        switchRegistryTabs('refernceDataTab', 'refernceDataTabContent');
                    },
                    isCloseButton: true
                }
            ];
            modalObj['buttons'] = buttonArray;
            $("#modalDailogDiv").remove();
            $("body").append("<div id='modalDailogDiv'></div>");
            createModal("modalDailogDiv", modalObj);
            $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");
        },
        error: function (error) {
            console.error(error);
        }
    });
}


function showClassAllocDataInputForm(gridId, operationName) {

    var selectBatchIdsList = "<div class='batchSelectColumn'><h6>Select Batch Ids </h6>"
            + "<div style='max-height:200px;overflow-y: scroll;' class='batchSelectColumntableView'><table>";

    selectBatchIdsList += "<tr>"
            + "<td style='width: 95%;'><input id='batchIdsListInput' value='' style='width: 100%;'></td>"
            + "<td><img src='images/iDXPUI5Search.svg' style='width:15px;height:15px;' onclick=selectBatchIdGrid('selectBatchIdListGrid')  /></td>"
            + "</tr>";

    selectBatchIdsList += "</table>";
    selectBatchIdsList += "</div>";
    selectBatchIdsList += "</div>";
    var modalObj = {
        title: 'Provide Input Values',
        body: selectBatchIdsList
    };
    var buttonArray = [
        {
            text: 'Submit',
            click: function () {
                var batchId = $("#batchIdsListInput").val();
                getClassAllocationData(gridId, operationName, batchId);
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    $("#modalDailogDiv").remove();
    $("body").append("<div id='modalDailogDiv'></div>");
    createModal("modalDailogDiv", modalObj);
    $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");
}

function showModalPopUp(message) {
    var modalObj = {
        title: 'Message',
        body: message
    };

    var buttonArray = [
        {
            text: 'ok',
            click: function () {
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    $("#modalDailogDiv").remove();
    $("body").append("<div id='modalDailogDiv'></div>");
    createModal("modalDailogDiv", modalObj);
}
function getClassAllocationData(gridId, operationName, batchId) {
    showLoader();
    var url = "classAllocationUpdate";
    var updateClassAllocation = $("#updateClassAllocation").val();
    if (updateClassAllocation === "N") {
        url = "classAllocation";
    }
    $.ajax({
        type: "POST",
        url: url,
        data: {
            'gridId': gridId,
            'operationName': operationName,
            'batchId': batchId
        },
        traditional: true,
        cache: false,
        success: function (result) {
            stopLoader();
            var modalObj = {
                title: 'Class Allocation',
                body: result
            };
            var buttonArray = [
                {
                    text: 'Close',
                    click: function () {
                        gridoperations(gridId, 'refresh');
//                        switchRegistryTabs()
                    },
                    isCloseButton: true
                }
            ];
            modalObj['buttons'] = buttonArray;
            $("#modalDailogDiv").remove();
            $("body").append("<div id='modalDailogDiv'></div>");
            createModal("modalDailogDiv", modalObj);
            $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");
        }
    });
}

function showCharDataInputForm(gridId, operationName) {

    var selectBatchIdsList = "<div class='batchSelectColumn'><h6>Select Batch Ids </h6>"
            + "<div style='max-height:200px;overflow-y: scroll;' class='batchSelectColumntableView'><table>";

    selectBatchIdsList += "<tr>"
            + "<td style='width: 95%;'><input id='batchIdsListInput' value='' style='width: 100%;'></td>"
            + "<td><img src='images/iDXPUI5Search.svg' style='width:15px;height:15px;' onclick=selectBatchIdGrid('selectBatchIdListGrid')  /></td>"
            + "</tr>";

    selectBatchIdsList += "</table>";
    selectBatchIdsList += "</div>";
    selectBatchIdsList += "</div>";

    var modalObj = {
        title: 'Provide Input Values',
        body: selectBatchIdsList
    };
    var buttonArray = [
        {
            text: 'Submit',
            click: function () {
                var batchId = $("#batchIdsListInput").val();
                getCharData(gridId, operationName, batchId);
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    $("#modalDailogDiv").remove();
    $("body").append("<div id='modalDailogDiv'></div>");
    createModal("modalDailogDiv", modalObj);
    $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");



}
function getCharData(gridId, operationName, batchId) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'charAllocation',
        data: {
            'gridId': gridId,
            'operationName': operationName,
            'batchId': batchId
        },
        traditional: true,
        cache: false,
        success: function (result) {
            stopLoader();
            if (result !== null && result !== "") {
                switchRegistryTabs('charDataTab', 'charDataTabContent');
                $("#charDataTabContent").html("<div id='" + gridId + "_CHAR_DATA'></div>");
                var dataArray = result;
                var dataFieldsArray = [];
                var columnsArray = [];
                var wrapTextRendrer = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                    var element = $(defaulthtml);
                    element.addClass('visionSearchWrapDescrDiv');
                    var gridRowHeight = $("#" + gridId).jqxGrid('rowsheight');
                    if (gridRowHeight !== null && parseInt(gridRowHeight) <= 50) {
                        element.css('overflow-y', 'scroll');
                    }
                    return element[0].outerHTML;
                };

                var colsString = "MDRM,Class,Prop_Name,Prop_Val,Long Description";
                var colsLabelsString = "Record No,Class,Property name,Property Value,Long Description";
                var columnsList = colsString.split(",");
                var colsLabelsList = colsLabelsString.split(",");
                $.each(columnsList, function (i, value) {
                    var dataFieldsObj = {};
                    dataFieldsObj['name'] = value;
                    dataFieldsObj['type'] = 'string';
                    dataFieldsArray.push(dataFieldsObj);
                    var columnsObject = {};
                    columnsObject['text'] = colsLabelsList[i];
                    columnsObject['datafield'] = value;
                    columnsObject['align'] = 'center';
                    columnsObject['width'] = 200;
                    if (value === "Long Description" || value === "LONG_DESCRIPTION" || value === "Unmatched_words") {
                        columnsObject['cellsrenderer'] = wrapTextRendrer;
                        columnsObject['width'] = 300;
                    }
                    columnsArray.push(columnsObject);
                });

                var source =
                        {
                            datatype: "json",
                            datafields: dataFieldsArray,
                            localdata: dataArray
                        };
                var dataAdapter = new $.jqx.dataAdapter(source);
                $('#' + gridId + "_CHAR_DATA").jqxGrid(
                        {
                            width: "100%",
                            height: "540",
                            theme: 'energyblue',
                            autoshowloadelement: false,
                            filterable: true,
                            sortable: true,
                            source: dataAdapter,
                            pageable: true,
                            pagesize: 50,
                            showfilterrow: true,
                            virtualmode: false,
                            pagesizeoptions: ['10', '50', '100'],
                            enabletooltips: true,
                            enablemousewheel: true,
                            enablehover: true,
                            selectionmode: 'checkbox',
                            enablebrowserselection: true,
                            rendergridrows: function (params) {
                                return params.data;
                            },
                            columnsresize: true,
                            columns: columnsArray
                        });

                $('#' + gridId + "_CHAR_DATA").on('celldoubleclick', function (event) {
                    var args = event.args;
                    var cellValue = args.value;
                    var column = $('#' + gridId + "_CHAR_DATA").jqxGrid('getcolumn', event.args.datafield).text;
                    popupedit(column, cellValue);
                });
            }

        }
    });
}

function showDataProfilingInputForm(gridId, operationName) {
    var selectBatchIdsList = "";
    $.ajax({
        type: "POST",
        url: 'getBatchIdList',
        dataType: 'json',
        data: {
            fetchColumns: 'Y',
            gridId: gridId,
            tableName: 'O_RECORD_DATA_UNIFICATION_STG'
        },
        traditional: true,
        cache: false,
        success: function (response) {
            if (response != null) {
                var batchIdList = response['batchIdList'];
                var selectBatchIdsList = "<div class='batchSelectColumn'><h6>Select Batch Ids </h6>"
                        + "<div style='max-height:200px;overflow-y: scroll;' class='batchSelectColumntableView'><table>";

                selectBatchIdsList += "<tr>"
                        + "<td style='width: 95%;'><input id='batchIdsListInput' value='' style='width: 100%;'></td>"
                        + "<td><img src='images/iDXPUI5Search.svg' style='width:15px;height:15px;' onclick=selectBatchIdGrid('selectBatchIdListGrid')  /></td>"
                        + "</tr>";

                selectBatchIdsList += "</table>";
                selectBatchIdsList += "</div>";
                selectBatchIdsList += "</div>";

//            selectBatchIdsList = "<div class='form-inline batchSelection'><label>Select BatchId :&nbsp;&nbsp;</label> " + selectBatchIdsList + "</div>";

                var columnsObj = response['labelsList'];
                var columnsListStr = "<div class='batchSelectColumn'><h6>Select Columns for Profiling </h6>"
                        + "<div style='max-height:200px;overflow-y: scroll;' class='batchSelectColumntableView'><table>";
                $.each(columnsObj, function (i) {
                    var colObj = columnsObj[i];
                    var columnName = colObj[0];
                    if (columnName == "RECORD_NO" || columnName == "UOM" || columnName == "LONG_TEXT"
                            || columnName == "REFERENCE_DATA" || columnName == "VENDOR_NAME") {
                        columnsListStr += "<tr>"
                                + "<td>" + colObj[1] + "</td>"
                                + "<td><input class='profilingcolumns' type='checkbox' value='" + colObj[0] + "' checked onclick='return false;' /></td>"
                                + "</tr>";
                    } else {
                        columnsListStr += "<tr>"
                                + "<td>" + colObj[1] + "</td>"
                                + "<td><input class='profilingcolumns' type='checkbox' value='" + colObj[0] + "'></td>"
                                + "</tr>";
                    }

                })
                columnsListStr += "</table></div></div>";


                var body = selectBatchIdsList + columnsListStr;
                var modalObj = {
                    title: 'Provide Input Values',
                    body: body
                };
                var buttonArray = [
                    {
                        text: 'Submit',
                        click: function () {
                            var batchId = $("#batchIdsListInput").val();

                            var profilingColumns = "";
                            $(".profilingcolumns:checkbox:checked").each(function (i) {
                                profilingColumns += $(this).val() + ",";
                            })
                            if (profilingColumns != "") {
                                profilingColumns = profilingColumns.slice(0, -1);
                            }

                            getDataProfiling(gridId, operationName, batchId, profilingColumns);
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                $("#modalDailogDiv").remove();
                $("body").append("<div id='modalDailogDiv'></div>");
                createModal("modalDailogDiv", modalObj);
                $("#modalDailogDiv").css("padding-top", "inherit");
                $("#modalDailogDiv").addClass("dataProfilingPopup");
                $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");
            }
        }
    });
}


function getDataProfiling(gridId, operationName, batchId, profilingColumns) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'dataProfilingUpdate',
        data: {
            gridId: gridId,
            operationName: operationName,
            batchId: batchId,
            profilingColumns: profilingColumns,
        },
        traditional: true,
        cache: false,
        success: function (result) {
            stopLoader();
            switchRegistryTabs('dataProfilingTab', 'dataProfilingTabContent');
            $("#dataProfilingTabContent").html("");
//            $("#dataProfilingTabContent").append(result);

            switchRegistryTabs('dataProfilingTab', 'dataProfilingTabContent');
            var pdfContent = "<iframe id='dataProfilingIframe' style='width: 100%; height:650px;' srcdoc='' '></iframe>";
            $("#dataProfilingTabContent").html(pdfContent);
            var downloadDataButton = "<div id='downloadiFrameHtmlButton'>"
                    + "<button onclick=downloadiFrameHtml('dataProfilingIframe')>Download Report</button>"
                    + "<button onclick=downloadPdfButton('dataProfilingIframe')>Download as PDF</button>";
            +"</div>"
//            var downloadPdfDataButton = "<div id='downloadPdfButton'><button onclick=downloadPdfButton('dataProfilingIframe')>Download as PDF</button></div>"
            $('#dataProfilingIframe').attr('srcdoc', result);
            $("#dataProfilingTabContent").append(downloadDataButton);
//            $("#dataProfilingTabContent").append(downloadPdfDataButton);


        }
    });
}

function downloadiFrameHtml(iframeId) {
    var elHtml = $("#" + iframeId).attr("srcdoc");
    var link = document.createElement('a');
    var mimeType = 'text/html';

    link.setAttribute('download', 'dataProfiling');
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click();
}

//function downloadPdfButton(iframeId) 
function downloadPdfButton(iframeId) {
    var elementHTML = document.getElementById(iframeId);
    var elHtml = $("#" + iframeId).attr("srcdoc");

    var printWindow = window.open('', '', 'height=400,width=800');
//            printWindow.document.write('<html><head><title>DIV Contents</title>');
//            printWindow.document.write('</head><body >');
    printWindow.document.write(elHtml);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();

}



function showDHAInputForm(gridId, operationName) {

    var selectBatchIdsList = "<div class='batchSelectColumn'><h6>Select Batch Ids </h6>"
            + "<div style='max-height:200px;overflow-y: scroll;' class='batchSelectColumntableView'><table>";

    selectBatchIdsList += "<tr>"
            + "<td style='width: 95%;'><input id='batchIdsListInput' value='' style='width: 100%;'></td>"
            + "<td><img src='images/iDXPUI5Search.svg' style='width:15px;height:15px;' onclick=selectBatchIdGrid('selectBatchIdListGrid')  /></td>"
            + "</tr>";

    selectBatchIdsList += "</table>";
    selectBatchIdsList += "</div>";
    selectBatchIdsList += "</div>";

    var modalObj = {
        title: 'Provide Input Values',
        body: selectBatchIdsList
    };
    var buttonArray = [
        {
            text: 'Submit',
            click: function () {
                var batchId = $("#batchIdsListInput").val();
                getDHAData(gridId, operationName, batchId);
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    $("#modalDailogDiv").remove();
    $("body").append("<div id='modalDailogDiv'></div>");
    createModal("modalDailogDiv", modalObj);
    $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");

}

function getDHAData(gridId, operationName, batchId) {
    showLoader()
    var iframeLoadFlaf = false;
    switchRegistryTabs('dataHealthAssessmentTab', 'dataHealthAssessmentTabContent');
    var pdfContent = "<iframe id='DHAIframe' style='width: 100%; height:650px;' src='dataHealthAssessmentUpdate?gridId=" + gridId + "&batchId=" + batchId + "&operationName=" + operationName + "' ></iframe>";
    $("#dataHealthAssessmentTabContent").html(pdfContent);

    $('#DHAIframe').on("load", function () {
        stopLoader();
//        iframeLoadFlaf = true;

    });


}


function viewGridData(gridId, appendDiv) {
    $.ajax({
        type: "POST",
        url: 'getCloudGrid',
        data: {
            gridId: gridId,
            roleId: $("#rolehid").val(),
        },
        traditional: true,
        cache: false,
        success: function (result) {
            if (appendDiv == null) {
                appendDiv = 'treeGridDiv';
            }
            $("#" + appendDiv).html("");
            $("#" + appendDiv).html("<div id='" + gridId + "'></div>");
            var paramObj = {};
            paramObj.column = '1';
            paramObj.value = '1';
            paramObj.operator = "EQUALS";
            paramObj.symbol = "Euqals";
            gridNewConfig(result, "", paramObj, gridId);
            if (gridId == "MM_REFERENCE") {
                switchRegistryTabs('refernceDataTab', 'refernceDataTabContent');
            } else if (gridId == "MM_MASTER_O_RECORD_CHAR") {
                switchRegistryTabs('charDataTab', 'charDataTabContent');
            }
            $('#dialog').modal('hide');

        }
    });
}

function switchRegistryTabs(tabHeaderId, tabContentDivId, event) {
    if (event != null) {
        if ($(event.target).hasClass("closeBtn") || $(event.target.parentElement).hasClass("closeBtn")) {
            return false;
        }
    }
    $(".registryTabHeader").removeClass("active");
    $(".registryTabContent").hide();
    $("#" + tabHeaderId).addClass("active");
    $("#tabsdiv").css("width", "2%");
    $("#tabsContentdiv").css("width", "97%");
    $("#defaultTab").show();
    $("#" + tabHeaderId).show();
    $("#" + tabContentDivId).show();
}

function linkVendor(gridId, row) {
//    var selectedrowindex = $("#" + gridId).jqxGrid('selectedrowindex');
//    if (selectedrowindex == -1) {
//        selectedrowindex = globalSelectedRow;
//    }
    var rowData = $("#" + gridId).jqxGrid('getrowdata', row);
    var recordNo = rowData['RECORD_NO'];
    $("#" + gridId).jqxGrid();
    $.ajax({
        type: "POST",
        url: 'linkVendor',
        dataType: 'json',
        data: {
            gridId: gridId,
            recordNo: recordNo
        },
        traditional: true,
        cache: false,
        success: function (response) {
            if (response != null) {
                var message = response['message'];

                var modalObj = {
                    title: 'Link Vendor',
                    body: message
                };
                var buttonArray = [
                    {
                        text: 'ok',
                        click: function () {

                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                $("#modalDailogDiv").remove();
                $("body").append("<div id='modalDailogDiv'></div>");
                createModal("modalDailogDiv", modalObj);
                $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");
            }

        }
    });
}

function vendorsList(gridId, selectedrowindex) {
//    var selectedrowindex = $("#" + gridId).jqxGrid('selectedrowindex');
//    if (selectedrowindex == -1) {
//        selectedrowindex = globalSelectedRow;
//    }
    var rowData = $("#" + gridId).jqxGrid('getrowdata', selectedrowindex);
    var recordNo = rowData['RECORD_NO'];
    $("#" + gridId).jqxGrid()
    $.ajax({
        type: "POST",
        url: 'fetchVendorsList',
        dataType: 'json',
        data: {
            gridId: gridId,
            recordNo: recordNo
        },
        traditional: true,
        cache: false,
        success: function (response) {
            if (response != null) {
                var vendorsList = response['vendorsList'];
                var divstr = "";
                if (vendorsList != null) {
                    divstr = '<div id="accordion" class="vendorListPopUp">';
                    $.each(vendorsList, function (i) {
                        var vendorName = vendorsList[i];
                        var regex = new RegExp(" ", 'g');
                        vendorName = vendorName.replace(regex, "&nbsp;");
                        divstr += '<div class="card card-vendorDetails">'
                                + '<div class="card-header" id="headingOne_' + i + '">'
                                + '<h5 class="mb-0">'
                                + '<button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne_' + i + '" aria-expanded="true" aria-controls="collapseOne_' + i + '" onclick=fetchVendorDetails(\'' + vendorName + '\',\'cardBodyId_' + i + '\',\'' + gridId + '\',\'' + selectedrowindex + '\')>'
                                + vendorName + '<i class="fa fa-angle-down" aria-hidden="true"></i>'
                                + '</button>'
                                + '</h5>'
                                + '</div>'
                                + '<div id="collapseOne_' + i + '" class="collapse" aria-labelledby="headingOne_' + i + '" data-parent="#accordion" style="">'
                                + '<div class="card-body" id="cardBodyId_' + i + '" >'
                                + vendorName
                                + '</div>'
                                + '</div>'
                                + '</div>'

                        //                    divstr += "<div><span onclick=fetchVendorDetails(\'" + vendorName + "\') style='cursor: pointer; font-weight: bold;'>" + vendorName + "</span><div id='vendorDetailsDiv_" + vendorName + "' style='display:none;'></div></div><br>"
                    })
                    divstr += '</div>';
                } else {
                    divstr = 'No vendors Linked';
                }

                var modalObj = {
                    title: 'Linked Vendors',
                    body: divstr
                };
                var buttonArray = [
                    {
                        text: 'ok',
                        click: function () {
                        },
                        isCloseButton: true
                    }
                ];

                modalObj['buttons'] = buttonArray;
                $("#modalDailogDiv").remove();
                $("body").append("<div id='modalDailogDiv'></div>");
                createModal("modalDailogDiv", modalObj);
                $("#modalDailogDiv").find(".modal-body").css("max-height", "350px");
                $("#modalDailogDiv").find(".modal-body").css("overflow-y", "auto");
                $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");
            }

        }
    });
}

function suggestedVendorsList(gridId, selectedrowindex) {
//    var selectedrowindex = $("#" + gridId).jqxGrid('selectedrowindex');
//    if (selectedrowindex == -1) {
//        selectedrowindex = globalSelectedRow;
//    }
    var rowData = $("#" + gridId).jqxGrid('getrowdata', selectedrowindex);
    var UNSPSC = rowData['UNSPSC'];
    $("#" + gridId).jqxGrid()
    $.ajax({
        type: "POST",
        url: 'fetchSuggestedVendorsList',
        dataType: 'json',
        data: {
            gridId: gridId,
            UNSPSC: UNSPSC
        },
        traditional: true,
        cache: false,
        success: function (response) {
            if (response != null) {
                var vendorsList = response['vendorsList'];
                var divstr = "";
                if (vendorsList != null) {
                    divstr = '<div id="accordion" class="vendorListPopUp">';
                    $.each(vendorsList, function (i) {
                        var vendorName = vendorsList[i];
                        var regex = new RegExp(" ", 'g');
                        vendorName = vendorName.replace(regex, "&nbsp;");
                        divstr += '<div class="card card-vendorDetails">'
                                + '<div class="card-header" id="headingOne_' + i + '">'
                                + '<h5 class="mb-0">'
                                + '<button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne_' + i + '" aria-expanded="true" aria-controls="collapseOne_' + i + '" onclick=fetchVendorDetails(\'' + vendorName + '\',\'cardBodyId_' + i + '\',\'' + gridId + '\',\'' + selectedrowindex + '\')>'
                                + vendorName + '<i class="fa fa-angle-down" aria-hidden="true"></i>'
                                + '</button>'
                                + '</h5>'
                                + '</div>'
                                + '<div id="collapseOne_' + i + '" class="collapse" aria-labelledby="headingOne_' + i + '" data-parent="#accordion" style="">'
                                + '<div class="card-body" id="cardBodyId_' + i + '" >'
                                + vendorName
                                + '</div>'
                                + '</div>'
                                + '</div>'

                        //                    divstr += "<div><span onclick=fetchVendorDetails(\'" + vendorName + "\') style='cursor: pointer; font-weight: bold;'>" + vendorName + "</span><div id='vendorDetailsDiv_" + vendorName + "' style='display:none;'></div></div><br>"
                    })
                    divstr += '</div>';

                } else {
                    divstr = 'No Data';
                }
                var modalObj = {
                    title: 'Suggested Vendors',
                    body: divstr
                };
                var buttonArray = [
                    {
                        text: 'ok',
                        click: function () {

                        },
                        isCloseButton: true
                    }
                ];

                modalObj['buttons'] = buttonArray;
                $("#modalDailogDiv").remove();
                $("body").append("<div id='modalDailogDiv'></div>");
                createModal("modalDailogDiv", modalObj);
                $("#modalDailogDiv").find(".modal-body").css("max-height", "350px");
                $("#modalDailogDiv").find(".modal-body").css("overflow-y", "auto");
                $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");
            }

        }
    });
}

function fetchVendorDetails(vendor, tabContentId, gridId, selectedrowindex) {

    $.ajax({
        type: "POST",
        url: 'fetchVendorDetails',
        dataType: 'json',
        data: {
            vendor: vendor,
            gridId: gridId,
            selectedrowindex: selectedrowindex
        },
        traditional: true,
        cache: false,
        success: function (response) {
            if (response != null) {
                var tableStr = response['tableStr'];


                $("#" + tabContentId).html("");
                $("#" + tabContentId).html(tableStr);
                var width = $('.modal-dialog').css('max-width');
                $('.modal-dialog').removeClass('normal');
                $('.modal-dialog').addClass('grow');
//                    $('.modal-dialog').css('max-width', '1200px');
//                    $("#vendorDetailsDiv_" + vendor).show();
                ;

            }

        }
    });


}

function duplicateCheckInputForm(gridId, operationName) {
    var selectBatchIdsList = "<div class='batchSelectColumn'><h6>Select Batch Ids </h6>"
            + "<div style='max-height:200px;overflow-y: scroll;' class='batchSelectColumntableView'><table>";

    selectBatchIdsList += "<tr>"
            + "<td style='width: 95%;'><input id='batchIdsListInput' value='' style='width: 100%;'></td>"
            + "<td><img src='images/iDXPUI5Search.svg' style='width:15px;height:15px;' onclick=selectBatchIdGrid('selectBatchIdListGrid')  /></td>"
            + "</tr>"
            + "<tr style='display: none;'><td style='color:red;font-size: 12px;'>Please Provide Batch Id</td></tr>";

    selectBatchIdsList += "</table>";
    selectBatchIdsList += "</div>";
    selectBatchIdsList += "</div>";

    var duplicateCheckTypes = "<div> Select Duplicate Check Type : "
            + "<select id= 'selectDuplicateCheckType'>"
            + "<option>Select</option>"
            + "<option value='POMATCH' >Description</option>"
//                                    +"<option value='PDR1' >Characteristics</option>"
            + "<option value='PDR2' >Reference Data</option>"
            + "</select>"
            + "<span style='display: none;color:red';>Please Select Duplicate Type</span>"
            + "</div>";

    var isDataValidated = true;
    var body = duplicateCheckTypes + "<div> " + selectBatchIdsList + "</div>";
    var modalObj = {
        title: 'Provide Input Values',
        body: body
    };
    var buttonArray = [
        {
            text: 'Submit',
            click: function () {
                var batchId = $("#batchIdsListInput").val();
                var duplicateCheckType = $("#selectDuplicateCheckType").val();
                $("#selectDuplicateCheckType").change(function () {
                    $(duplicateCheckType).next().css('display', 'none');
                });
                if (duplicateCheckType !== null && duplicateCheckType !== "" &&
                        (duplicateCheckType === "POMATCH" || duplicateCheckType === "PDR2")) {
                    if (batchId === '' || batchId === null || batchId === undefined) {
                        $('#batchIdsListInput').parents('tr').next().css('display', 'inline-block');
                        isDataValidated = false;
                        return;
                    }
                }
                if (duplicateCheckType != null && duplicateCheckType != "" && duplicateCheckType == "POMATCH") {
                    isDataValidated = true;
//                    duplicateCheckPOMatchMultipleFiles("DISCRIPTION_MATCHING_GRID", operationName, batchId, duplicateCheckType);
                    duplicateCheckPOMatch("DISCRIPTION_MATCHING_GRID", operationName, batchId, duplicateCheckType);
                } else if (duplicateCheckType != null && duplicateCheckType != "" && duplicateCheckType == "PDR2") {
                    isDataValidated = true;
                    duplicateCheckPDR2("REFERENCE_DATA_MATCHING_GRID", operationName, batchId, duplicateCheckType);
                } else {
                    $(duplicateCheckType).next().css('display', 'inline-block');
                    isDataValidated = false;
                }
            },
            isCloseButton: true
        }
    ];
    var gridRowData = $("#" + gridId).jqxGrid('getrows');
    var message = "Please Run Classification Analysis.";
    if ($.isEmptyObject(gridRowData) || gridRowData === null) {
        showModalPopUp(message);
    } else {
        modalObj['buttons'] = buttonArray;
        $("#modalDailogDiv").remove();
        $("body").append("<div id='modalDailogDiv'></div>");
        createModal("modalDailogDiv", modalObj);
        $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");
    }

    /*
     * Validation to inform user to make sure all the classes are available
     * else if (!gridRowData.every(item => item.CLASS)) {
     * showModalPopUp(message);
     } 
     */

}

function descriptionGenerationInputForm(gridId) {
    var indexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    var selectedRowsData = [];
    if (indexes.length > 0) {

        var body = '<div class="batchSelectColumn"><h6>Overwrite Enriched Description(s)?</h6></div>'
                + '<div class="form-check disabled">'
                + '<label class="form-check-label">'
                + '<input type="radio" id="Yes" name="overwritePPRDesc" value="Y" checked >Yes'
                + '</label>'
                + '</div>'
                + '<div class="form-check disabled">'
                + '<label class="form-check-label">'
                + '<input type="radio" id="No" name="overwritePPRDesc" value="N">No'
                + '</label>'
                + '</div>'

        var modalObj = {
            title: 'Confirm',
            body: body
        };
        var buttonArray = [
            {
                text: 'OK',
                click: function () {
                    var overwritePPRDesc = $('input[name="overwritePPRDesc"]:checked').val();
                    var totalRowIndex = indexes.length;
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
                        var data = $("#" + gridId).jqxGrid('getrowdata', indexes[i]);
                        selectedRowsData.push(data);
                    }
                    descriptionGeneration(gridId, null, selectedRowsData, overwritePPRDesc);
                },
                isCloseButton: true
            }
        ];
        modalObj['buttons'] = buttonArray;
        $("#modalDailogDiv").remove();
        $("body").append("<div id='modalDailogDiv'></div>");
        createModal("modalDailogDiv", modalObj);
        $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");


    } else {


        var selectBatchIdsList = "<div class='batchSelectColumn'><h6>Select Batch Ids </h6>"
                + "<div style='max-height:200px;overflow-y: scroll;' class='batchSelectColumntableView'><table>";

        selectBatchIdsList += "<tr>"
                + "<td style='width: 95%;'><input id='batchIdsListInput' value='' style='width: 100%;'></td>"
                + "<td><img src='images/iDXPUI5Search.svg' style='width:15px;height:15px;' onclick=selectBatchIdGrid('selectBatchIdListGrid')  /></td>"
                + "</tr>";

        selectBatchIdsList += "</table>";
        selectBatchIdsList += "</div>";
        selectBatchIdsList += "</div>";

        var overWriteButtons = '<div class="batchSelectColumn"><h6>Overwrite Enriched Description(s)</h6></div>'
                + '<div class="form-check disabled">'
                + '<label class="form-check-label">'
                + '<input type="radio" id="Yes" name="overwritePPRDesc" value="Y" checked >Yes'
                + '</label>'
                + '</div>'
                + '<div class="form-check disabled">'
                + '<label class="form-check-label">'
                + '<input type="radio" id="No" name="overwritePPRDesc" value="N">No'
                + '</label>'
                + '</div>'

        var body = selectBatchIdsList + overWriteButtons;
        var modalObj = {
            title: 'Provide Input Values',
            body: body
        };
        var buttonArray = [
            {
                text: 'Submit',
                click: function () {
                    var batchId = $("#batchIdsListInput").val();
                    var overwritePPRDesc = $('input[name="overwritePPRDesc"]:checked').val();

                    $(".batchIdValues:checkbox:checked").each(function (i) {
                        batchId += $(this).val() + ",";
                    })
                    if (batchId != "") {
                        batchId = batchId.slice(0, -1);
                    }
                    descriptionGeneration(gridId, batchId, null, overwritePPRDesc);
                },
                isCloseButton: true
            }
        ];
        modalObj['buttons'] = buttonArray;
        $("#modalDailogDiv").remove();
        $("body").append("<div id='modalDailogDiv'></div>");
        createModal("modalDailogDiv", modalObj);
        $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");

    }
}

function bulkRegisterInputForm(gridId) {
    var indexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    var selectedRowsData = [];
    if (indexes.length > 0) {
        var body = "Click OK to Register Selected Unregistered records";
        var modalObj = {
            title: 'Confirm',
            body: body
        };
        var buttonArray = [
            {
                text: 'OK',
                click: function () {
                    var totalRowIndex = indexes.length;
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
                        var data = $("#" + gridId).jqxGrid('getrowdata', indexes[i]);
                        if (data['REGISTERED_RECORD_NO'] != null && data['REGISTERED_RECORD_NO'] != "") {

                        } else {
                            selectedRowsData.push(data);
                        }

                    }
                    bulkRegister(gridId, null, selectedRowsData);
                },
                isCloseButton: true
            }
        ];
        modalObj['buttons'] = buttonArray;
        $("#modalDailogDiv").remove();
        $("body").append("<div id='modalDailogDiv'></div>");
        createModal("modalDailogDiv", modalObj);
        $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");


    } else {

        var selectBatchIdsList = "";
        $.ajax({
            type: "POST",
            url: 'getBatchIdList',
            dataType: 'json',
            data: {
                tableName: 'O_RECORD_DATA_UNIFICATION_STG'
            },
            traditional: true,
            cache: false,
            success: function (response) {
                if (response != null) {
                    var batchIdList = response['batchIdList'];
                    var selectBatchIdsList = "<div class='batchSelectColumn'><h6>Select Batch Ids </h6>"
                            + "<div style='max-height:200px;overflow-y: scroll;' class='batchSelectColumntableView'><table>";
                    $.each(batchIdList, function (i) {
                        selectBatchIdsList += "<tr>"
                                + "<td>" + batchIdList[i] + "</td>"
                                + "<td><input class='batchIdValues' type='checkbox' value='" + batchIdList[i] + "' /></td>"
                                + "</tr>";
                    })
                    selectBatchIdsList += "</table>";
                    selectBatchIdsList += "</div>";

                    var modalObj = {
                        title: 'Provide Input Values',
                        body: selectBatchIdsList
                    };
                    var buttonArray = [
                        {
                            text: 'Submit',
                            click: function () {
                                var batchId = "";
                                var batchId = "";
                                $(".batchIdValues:checkbox:checked").each(function (i) {
                                    batchId += $(this).val() + ",";
                                })
                                if (batchId != "") {
                                    batchId = batchId.slice(0, -1);
                                }
                                bulkRegister(gridId, batchId);
                            },
                            isCloseButton: true
                        }
                    ];
                    modalObj['buttons'] = buttonArray;
                    $("#modalDailogDiv").remove();
                    $("body").append("<div id='modalDailogDiv'></div>");
                    createModal("modalDailogDiv", modalObj);
                    $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");
                }
            }
        });
    }
}

function descriptionGeneration(gridId, batchId, selectedRowsData, overwritePPRDesc) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'descriptionGeneration',
        dataType: 'json',
        data: {
            gridId: gridId,
            batchId: batchId,
            selectedRowsData: selectedRowsData != null ? JSON.stringify(selectedRowsData) : null,
            overwritePPRDesc: overwritePPRDesc
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
//            switchRegistryTabs('
//            cateCheckTab', 'duplicateCheckTabContent');
            if (response != null) {
                var message = response['message'];

                var modalObj = {
                    title: 'Message',
                    body: message
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        click: function () {
                            gridoperations(gridId, 'refresh');
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                $("#modalDailogDiv").remove();
                $("body").append("<div id='modalDailogDiv'></div>");
                createModal("modalDailogDiv", modalObj);
                $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");
            }

        },
        error: function (error) {

        }
    });
}

function bulkRegister(gridId, batchId, selectedRowsData) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'bulkRegister',
        dataType: 'json',
        data: {
            gridId: gridId,
            batchId: batchId,
            selectedRowsData: selectedRowsData != null ? JSON.stringify(selectedRowsData) : null
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
//            switchRegistryTabs('duplicateCheckTab', 'duplicateCheckTabContent');
            if (response != null) {
                var message = response['message'];

                var modalObj = {
                    title: 'Message',
                    body: message
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
                $("#modalDailogDiv").remove();
                $("body").append("<div id='modalDailogDiv'></div>");
                createModal("modalDailogDiv", modalObj);
                $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");
            }

        },
        error: function (error) {

        }
    });
}

function duplicateCheckPOMatch(gridId, operationName, batchId, duplicateCheckType) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'duplicateCheck',
        dataType: 'json',
        data: {
            gridId: gridId,
            operationName: operationName,
            batchId: batchId,
            duplicateCheckType: duplicateCheckType
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            switchRegistryTabs('duplicateCheckTabForExisting', 'duplicateCheckTabContentForExisting');
            if (response !== null) {
                $("#duplicateCheckTabContentForExisting").html("<div id='" + gridId + "'></div>");
//                var dataArray = response['dataArray'];
                var dataArray = response['withinFileDataArray'];
                var dataFieldsArray = [];
                var columnsArray = [];
                var showActionButton = function (row, column, value) {
                    return "Register";
                };
                var registerItem = function (row) {
                    registerSelectedItem(gridId, row, "POMATCH");
                };

                var wrapTextRendrer = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                    var element = $(defaulthtml);
                    element.addClass('visionSearchWrapDescrDiv');
                    var gridRowHeight = $("#" + gridId).jqxGrid('rowsheight');
                    if (gridRowHeight !== null && parseInt(gridRowHeight) <= 50) {
                        element.css('overflow-y', 'scroll');
                    }
                    return element[0].outerHTML;
                };
//REFERENCE_NO,REFERENCE_TYPE,VENDOR_NAME,
                var colsString = "INPUT_RECORD_NO,RECORD_NO,INPUT_LONG_DESCRIPTION,LONG_DESCRIPTION,UNMATCHED_WORDS,INPUT_DESC_PERCENTAGE,EXISTING_SRC_DESC_PERCENTAGE,GROUP,BATCH_ID";
//Existing Reference No,Existing Reference Type,Existing Vendor Name,
                var colsLabelsString = "New Record No,Duplicate with,New Description,Duplicate Item Description,Unmatched Words,Match Percentage,Existing Source Match ,Group,Batch Id";
                var columnsList = colsString.split(",");
                var colsLabelsList = colsLabelsString.split(",");
                $.each(columnsList, function (i, value) {
                    var dataFieldsObj = {};
                    dataFieldsObj['name'] = value;
                    dataFieldsObj['type'] = 'string';
                    dataFieldsArray.push(dataFieldsObj);
                    var columnsObject = {};
                    columnsObject['text'] = colsLabelsList[i];
                    columnsObject['datafield'] = value;
                    columnsObject['width'] = 100;
                    if (value === "INPUT_LONG_DESCRIPTION" || value === "LONG_DESCRIPTION" || value === "Unmatched_words") {
                        columnsObject['cellsrenderer'] = wrapTextRendrer;
                        columnsObject['width'] = 400;
                    }
                    if (value === "INPUT_DESC_PERCENTAGE" || value === "EXISTING_SRC_DESC_PERCENTAGE" || value === "UNMATCHED_WORDS") {
                        columnsObject['cellsrenderer'] = wrapTextRendrer;
                        columnsObject['width'] = 250;
                    }
                    columnsObject['align'] = 'center';
                    if (value === "BATCH_ID" || value === "Unmatched_words" || value === "GROUP") {
                        columnsObject['hidden'] = true;
                    }
                    if (value === "Action") {
                        columnsObject['columntype'] = 'button';
                        columnsObject['cellsrenderer'] = showActionButton;
                        columnsObject['buttonclick'] = registerItem;
                    }
                    columnsArray.push(columnsObject);
                });
                var source =
                        {
                            localdata: dataArray,
                            datatype: "array",
                            datafields: dataFieldsArray
                        };

                var dataAdapter = new $.jqx.dataAdapter(source);
//                var tabHeight = $("#" + gridId).closest(".jqx-tabs-content-element").height();
                $("#" + gridId).jqxGrid(
                        {
                            width: "100%",
                            height: "560",
                            theme: 'energyblue',
                            autoshowloadelement: false,
                            filterable: true,
                            sortable: true,
                            source: dataAdapter,
                            pageable: true,
                            pagesize: 50,
                            showfilterrow: true,
                            virtualmode: false,
                            pagesizeoptions: ['10', '50', '100'],
                            enabletooltips: true,
                            enablemousewheel: true,
                            enablehover: true,
                            selectionmode: 'checkbox',
                            enablebrowserselection: true,
                            rendergridrows: function (params) {
                                return params.data;
                            },
                            columnsresize: true,
                            columns: columnsArray
                        });

                $('#' + gridId).on('celldoubleclick', function (event) {
                    var args = event.args;
                    var dataField = args.datafield;
                    var dataField1 = args.text;
                    var rowIndex = args.rowindex;
                    var cellValue = args.value;
                    var column = $('#' + gridId).jqxGrid('getcolumn', event.args.datafield).text;
                    popupedit(column, cellValue);
                });
            }
        },
        error: function (error) {

        }
    });
}


function duplicateCheckPDR2(gridId, operationName, batchId, duplicateCheckType) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'duplicateCheck',
        dataType: 'json',
        data: {
            gridId: gridId,
            operationName: operationName,
            batchId: batchId,
            duplicateCheckType: duplicateCheckType
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            switchRegistryTabs('duplicateReferenceDataTab', 'duplicateReferenceDataTabContent');
            if (response != null) {
                $("#duplicateReferenceDataTabContent").html("<div id='" + gridId + "'></div>");
                var dataArray = response['dataArray'];
//                var columnsList = response['columnsList'];
                var dataFieldsArray = [];
                var columnsArray = [];
                var showActionButton = function (row, column, value) {
                    return "Update Char/Ref Data";
                };
                var updateCharRefData = function (row) {
                    updateCharRefDataPDR2(gridId, row, "PDR2");
                };

                var wrapTextRendrer = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                    var element = $(defaulthtml);
                    element.addClass('visionSearchWrapDescrDiv');
                    var gridRowHeight = $("#" + gridId).jqxGrid('rowsheight');
                    if (gridRowHeight !== null && parseInt(gridRowHeight) <= 50) {
                        element.css('overflow-y', 'scroll');
                    }
                    return element[0].outerHTML;
                };
//                var colsString = "SOURCE_RECORD_NO,RECORD_NO,REFERENCE_NO,REFERENCE_TYPE,REGISTERED_RECORD_NO,CLASS,LONG_TEXT,Action";
//                var colsLabelsString = "Source Record No,Matched Record No,Reference No,Reference Type,Registered Record No,Class,Long Text,Action";
                var colsString = "RECORD_NO,CLASS,LONG_TEXT,REFERENCE_DATA";
                var colsLabelsString = "Record No,Class,Long Description,Reference Data";
                var columnsList = colsString.split(",");
                var colsLabelsList = colsLabelsString.split(",");
                $.each(columnsList, function (i, value) {
                    var dataFieldsObj = {};
                    dataFieldsObj['name'] = value;
                    dataFieldsObj['type'] = 'string';
                    dataFieldsArray.push(dataFieldsObj);
                    var columnsObject = {};
                    columnsObject['text'] = colsLabelsList[i];
                    columnsObject['datafield'] = value;
                    columnsObject['width'] = 300;
                    if (value === "LONG_TEXT") {
                        columnsObject['width'] = 350;
                        columnsObject['cellsrenderer'] = wrapTextRendrer;
                    }
                    columnsObject['align'] = 'center';
                    columnsArray.push(columnsObject);
                });
                var source =
                        {
                            localdata: dataArray,
                            datatype: "array",
                            datafields: dataFieldsArray
                        };

                var dataAdapter = new $.jqx.dataAdapter(source);
//                var tabHeight = $("#" + gridId).closest(".jqx-tabs-content-element").height();
                $("[id='" + gridId + "']").jqxGrid(
                        {
                            width: "100%",
                            height: "560",
                            theme: 'energyblue',
                            autoshowloadelement: false,
                            filterable: true,
                            sortable: true,
                            source: dataAdapter,
                            pageable: true,
                            pagesize: 50,
                            showfilterrow: true,
                            virtualmode: false,
                            pagesizeoptions: ['10', '50', '100'],
                            enabletooltips: true,
                            enablemousewheel: true,
                            enablehover: true,
                            selectionmode: 'checkbox',
                            enablebrowserselection: true,
                            rendergridrows: function (params) {
                                return params.data;
                            },
                            columnsresize: true,
                            columns: columnsArray
                        });
                $('#' + gridId).on('celldoubleclick', function (event) {
                    var args = event.args;
                    var dataField = args.datafield;
                    var dataField1 = args.text;
                    var rowIndex = args.rowindex;
                    var cellValue = args.value;
                    var column = $('#' + gridId).jqxGrid('getcolumn', event.args.datafield).text;
                    popupedit(column, cellValue);
                });

            }

        },
        error: function (error) {

        }
    });
}

function registerSelectedItem(gridId, row, duplicateCheckFlag) {
    var rowData = $("#" + gridId).jqxGrid('getrowdata', row);

    $.ajax({
        type: "POST",
        url: 'checkRecordRegistered',
        dataType: 'json',
        data: {
            rowData: JSON.stringify(rowData)
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response['recordRegistered'] != "Y") {
                var description = "";

                description = rowData['LONG_TEXT']
                var currentDataContent = 1;
                var body = "<div id='charRefData'>"
                        + "<div ><textarea id='recordDescription'  rows='3' cols='120' >" + description + "</textarea></div>"
                        + "<div id='characteristicsData' class='recordDataConentTabs' data-function=showCharacteristics('" + gridId + "','" + row + "') ></div>"
                        + "<div id='referenceData'  class='recordDataConentTabs' data-function=showReferenceData('" + gridId + "','" + row + "') style='display:none;'></div>"
                        + "</div>"
                        + "<div id='buttonsDiv' style='float:right;margin:10px;'>"
                        + "<button id='prevButton'>Prev</button>"
                        + "<button id='nextButton'>Next</button>"
                        + "<button id='processButton'>Process</button>"
                        + "</div>";
                var modalObj = {
                    title: 'Characteristics Data',
                    body: body
                };
                var buttonArray = [
                    {
                    }
                ];
                modalObj['buttons'] = buttonArray;
                $("#modalDailogDiv").remove();
                $("body").append("<div id='modalDailogDiv'></div>");
                createModal("modalDailogDiv", modalObj);
//            $("#dialog").find(".modal-dialog").addClass("modal-xs");
                $("#modalDailogDiv").find(".modal-dialog").addClass("model-cust-rec-reg opacity-animate3");

                showCharacteristics(gridId, row, duplicateCheckFlag);


                $("#prevButton").click(function (event) {
                    var visibleTabId = $($(".recordDataConentTabs:visible")[0]).attr("id");

                    if (visibleTabId != null && $("#" + visibleTabId).prev("div").length > 0) {
                        $(".recordDataConentTabs").hide();
                        $("#" + visibleTabId).prev("div").show();
                        var datafunction = $("#" + visibleTabId).prev("div").attr("data-function");
                        if (datafunction != null) {
                            eval(datafunction);
                        }
                    }
                });

                $("#nextButton").click(function (event) {
                    var visibleTabId = $($(".recordDataConentTabs:visible")[0]).attr("id");

                    if (visibleTabId != null && $("#" + visibleTabId).next("div").length > 0) {
                        $(".recordDataConentTabs").hide();
                        $("#" + visibleTabId).next("div").show();
                        var datafunction = $("#" + visibleTabId).next("div").attr("data-function");
                        if (datafunction != null) {
                            eval(datafunction)
                        }
                    }
                });

                $("#processButton").click(function (event) {
                    var charData = [];

                    $("#characteristicsData").find("table").find("tbody").find("tr").each(function (i) {
                        var charRowData = {};
//            charRowData['RECORD_NO'] = $($(this).find('td')[0]).text();
                        charRowData['PROPERTY_NAME'] = $($(this).find('td')[0]).text();
                        charRowData['PROPERTY_VALUE1'] = $($(this).find('td')[1]).find('input').val();
                        charRowData['PROPERTY_UOM'] = $($(this).find('td')[2]).find('input').val();
                        charData.push(charRowData);
                    });

                    var refData = [];

                    $("#referenceData").find("table").find("tbody").find("tr").each(function (i) {
                        var refRowData = {};
                        refRowData['RECORD_NO'] = $($(this).find('td')[0]).text();
                        refRowData['REFERENCE_NO'] = $($(this).find('td')[1]).find('input').val();
                        refRowData['REFERENCE_TYPE'] = $($(this).find('td')[2]).find('input').val();
                        refRowData['VENDOR_NAME'] = $($(this).find('td')[3]).find('input').val();
                        refRowData['R_STXT_FLAG'] = $($(this).find('td')[4]).find('input').val();
                        refRowData['R_LTXT_FLAG'] = $($(this).find('td')[5]).find('input').val();
                        refData.push(refRowData);
                    });

                    $.ajax({
                        type: "POST",
                        url: 'processRecord',
                        dataType: 'json',
                        data: {
                            charactertisticsData: JSON.stringify(charData),
                            referenceData: JSON.stringify(refData),
                            rowData: JSON.stringify(rowData)
                        },
                        traditional: true,
                        cache: false,
                        success: function (response) {

                            stopLoader();
                            var message = response['message'];
                            $("#dialog").find(".modal-title").text("Message");
                            $("#dialog").find(".modal-body").text(message);

                        },
                        error: function (error) {

                        }
                    });
                });
            } else {
                var modalObj = {
                    title: 'Message',
                    body: "Item already registered for this record"
                };
                var buttonArray = [
                    {
                    }
                ];
                modalObj['buttons'] = buttonArray;
                $("#modalDailogDiv").remove();
                $("body").append("<div id='modalDailogDiv'></div>");
                createModal("modalDailogDiv", modalObj);
//            $("#dialog").find(".modal-dialog").addClass("modal-xs");
                $("#modalDailogDiv").find(".modal-dialog").addClass("model-cust-rec-reg opacity-animate3");
            }


        },
        error: function (error) {

        }
    });
}

function updateCharRefDataPDR2(gridId, row, duplicateCheckFlag) {
    var rowData = $("#" + gridId).jqxGrid('getrowdata', row);
    var description = rowData['LONG_TEXT']
    var currentDataContent = 1;
    var body = "<div id='charRefData'>"
            + "<div ><textarea id='recordDescription'  rows='3' cols='120' >" + description + "</textarea></div>"
            + "<div id='characteristicsData' class='recordDataConentTabs' data-function=showCharacteristics('" + gridId + "','" + row + "') ></div>"
            + "<div id='referenceData'  class='recordDataConentTabs' data-function=showReferenceData('" + gridId + "','" + row + "') style='display:none;'></div>"
            + "</div>"
            + "<div id='buttonsDiv' style='float:right;margin:10px;'>"
            + "<button id='prevButton'>Prev</button>"
            + "<button id='nextButton'>Next</button>"
            + "<button id='processButton'>Update</button>"
            + "</div>";
    var modalObj = {
        title: 'characteristics Data',
        body: body
    };
    var buttonArray = [
        {
        }
    ];
    modalObj['buttons'] = buttonArray;
    $("#modalDailogDiv").remove();
    $("body").append("<div id='modalDailogDiv'></div>");
    createModal("modalDailogDiv", modalObj);
//            $("#dialog").find(".modal-dialog").addClass("modal-xs");
    $("#modalDailogDiv").find(".modal-dialog").addClass("model-cust-rec-reg opacity-animate3");

    showCharacteristics(gridId, row, duplicateCheckFlag);


    $("#prevButton").click(function (event) {
        var visibleTabId = $($(".recordDataConentTabs:visible")[0]).attr("id");

        if (visibleTabId != null && $("#" + visibleTabId).prev("div").length > 0) {
            $(".recordDataConentTabs").hide();
            $("#" + visibleTabId).prev("div").show();
            var datafunction = $("#" + visibleTabId).prev("div").attr("data-function");
            if (datafunction != null) {
                eval(datafunction)
            }
        }
    })

    $("#nextButton").click(function (event) {
        var visibleTabId = $($(".recordDataConentTabs:visible")[0]).attr("id");

        if (visibleTabId != null && $("#" + visibleTabId).next("div").length > 0) {
            $(".recordDataConentTabs").hide();
            $("#" + visibleTabId).next("div").show();
            var datafunction = $("#" + visibleTabId).next("div").attr("data-function");
            if (datafunction != null) {
                eval(datafunction)
            }
        }
    })

    $("#processButton").click(function (event) {
        var charData = [];

        $("#characteristicsData").find("table").find("tbody").find("tr").each(function (i) {
            var charRowData = {};
//            charRowData['RECORD_NO'] = $($(this).find('td')[0]).text();
            charRowData['PROPERTY_NAME'] = $($(this).find('td')[0]).text();
            charRowData['PROPERTY_VALUE1'] = $($(this).find('td')[1]).find('input').val();
            charRowData['PROPERTY_UOM'] = $($(this).find('td')[2]).find('input').val();
            charData.push(charRowData);
        })

        var refData = [];

        $("#referenceData").find("table").find("tbody").find("tr").each(function (i) {
            var refRowData = {};
            refRowData['RECORD_NO'] = $($(this).find('td')[0]).text();
            refRowData['REFERENCE_NO'] = $($(this).find('td')[1]).find('input').val();
            refRowData['REFERENCE_TYPE'] = $($(this).find('td')[2]).find('input').val();
            refRowData['VENDOR_NAME'] = $($(this).find('td')[3]).find('input').val();
            refRowData['R_STXT_FLAG'] = $($(this).find('td')[4]).find('input').val();
            refRowData['R_LTXT_FLAG'] = $($(this).find('td')[5]).find('input').val();
            refData.push(refRowData);
        })

        $.ajax({
            type: "POST",
            url: 'updateCharRefData',
            dataType: 'json',
            data: {
                charactertisticsData: JSON.stringify(charData),
                referenceData: JSON.stringify(refData),
                rowData: JSON.stringify(rowData)
            },
            traditional: true,
            cache: false,
            success: function (response) {

                stopLoader();
                var message = response['message'];
                $("#dialog").find(".modal-title").text("Message");
                $("#dialog").find(".modal-body").text(message);

            },
            error: function (error) {

            }
        });
    })
}

function showCharacteristicsPopup(gridId, row) {

    var rowData = $("#" + gridId).jqxGrid("getRowData", row);
    var recordNo = rowData['RECORD_NO'];
    var description = rowData['LONG_TEXT']
    $.ajax({
        type: "POST",
        url: 'charecteristicsData',
        dataType: 'json',
        data: {
            recordNo: recordNo,
            rowData: JSON.stringify(rowData),
            duplicateCheckFlag: "CHARDATA"
        },
        traditional: true,
        cache: false,
        success: function (response) {

            stopLoader();
            var charDataList = response['charDataList'];
            var tableStr = "<div>"
                    + "<div ><textarea id='recordDescription'  rows='3' cols='120' >" + description + "</textarea></div>"
                    + "<table id='characteristicsDataTable' style='width: 90%;'>"
                    + "<thead style='background: #f1f1f1;'>"
                    + "<tr>"
                    + "<th>Characteristic</th>"
                    + "<th>Value</th>"
                    + "<th>UOM</th>"
                    + "</tr>"
                    + "</thead>"
                    + "<tbody>";
            $.each(charDataList, function (i) {
                var rowData = charDataList[i];
                var propertyName = rowData[0] != null ? rowData[0] : "";
                var propertyValue = rowData[1] != null ? rowData[1] : "";
                var propertyUOM = rowData[2] != null ? rowData[2] : "";
                tableStr += "<tr>"
                        + "<td>" + propertyName + "</td>"
                        + "<td><input style='width: 100%;' type='text' value='" + propertyValue + "' /></td>"
                        + "<td><input style='width: 100%;' type='text' value='" + propertyUOM + "' /></td>"
                        + "</tr>"

            });
            tableStr += "</tbody></table>"
                    + "</div>"

//            $("#characteristicsData").html(tableStr);
            var modalObj = {
                title: 'Characteristics Data',
                body: tableStr
            };
            var buttonArray = [
                {
                }
            ];
            modalObj['buttons'] = buttonArray;
            $("#modalDailogDiv").remove();
            $("body").append("<div id='modalDailogDiv'></div>");
            createModal("modalDailogDiv", modalObj);
//            $("#dialog").find(".modal-dialog").addClass("modal-xs");
            $("#modalDailogDiv").find(".modal-dialog").addClass("model-cust-rec-reg opacity-animate3");
        },
        error: function (error) {

        }
    });

}

function showCharacteristics(gridId, row, duplicateCheckFlag) {

    $("#dialog").find(".modal-title").text("Characteristics Data");
    if (!$("#characteristicsDataTable").length > 0) {
        var rowData = $("#" + gridId).jqxGrid("getRowData", row);
        var recordNo = rowData['RECORD_NO'];
        $.ajax({
            type: "POST",
            url: 'charecteristicsData',
            dataType: 'json',
            data: {
                recordNo: recordNo,
                rowData: JSON.stringify(rowData),
                duplicateCheckFlag: duplicateCheckFlag
            },
            traditional: true,
            cache: false,
            success: function (response) {

                stopLoader();
                var charDataList = response['charDataList'];
                var tableStr = "<table id='characteristicsDataTable' style='width: 90%;'>"
                        + "<thead style='background: #f1f1f1;'>"
                        + "<tr>"
                        + "<th>Characteristic</th>"
                        + "<th>Value</th>"
                        + "<th>UOM</th>"
                        + "</tr>"
                        + "</thead>"
                        + "<tbody>";
                $.each(charDataList, function (i) {
                    var rowData = charDataList[i];
                    var propertyName = rowData[0] != null ? rowData[0] : "";
                    var propertyValue = rowData[1] != null ? rowData[1] : "";
                    var propertyUOM = rowData[2] != null ? rowData[2] : "";
                    tableStr += "<tr>"
                            + "<td>" + propertyName + "</td>"
                            + "<td><input style='width: 100%;' type='text' value='" + propertyValue + "' /></td>"
                            + "<td><input style='width: 100%;' type='text' value='" + propertyUOM + "' /></td>"
                            + "</tr>"

                });
                tableStr += "</tbody></table>"

                $("#characteristicsData").html(tableStr);
            },
            error: function (error) {

            }
        });
    }

}

function showReferenceData(gridId, row) {
    $("#dialog").find(".modal-title").text("Reference Data");
    if (!$("#referenceDataTable").length > 0) {
        var rowData = $("#" + gridId).jqxGrid("getRowData", row);
        var recordNo = rowData['RECORD_NO'];
        $.ajax({
            type: "POST",
            url: 'recordReferenceData',
            dataType: 'json',
            data: {
                recordNo: recordNo
            },
            traditional: true,
            cache: false,
            success: function (response) {

                stopLoader();
                var referenceData = response['referenceData'];
                var tableStr = "<table id='referenceDataTable' style='width: 100%;'>"
                        + "<thead style='background: #f1f1f1;'>"
                        + "<tr>"
                        + "<th style='display:none;'>RecordNo</th>"
                        + "<th>Reference No</th>"
                        + "<th>Reference Type</th>"
                        + "<th>Vendor Name</th>"
                        + "<th>Include In SFD</th>"
                        + "<th>Include In POD</th>"
                        + "</tr>"
                        + "</thead>"
                        + "<tbody>";
                $.each(referenceData, function (i) {
                    var rowData = this;
                    tableStr += "<tr>"
                            + "<td style='display:none;' >" + rowData[0] + "</td>"
                            + "<td><input style='width: 100%;' type='text' value='" + rowData[1] + "' /></td>"
                            + "<td><input style='width: 100%;' type='text' value='" + rowData[2] + "' /></td>"
                            + "<td><input style='width: 100%;' type='text' value='" + rowData[3] + "' /></td>"
                            + "<td><input style='width: 100%;' type='text' value='" + rowData[4] + "' /></td>"
                            + "<td><input style='width: 100%;' type='text' value='" + rowData[5] + "' /></td>"
                            + "</tr>"

                });
                tableStr += "</tbody></table>"

                $("#referenceData").html(tableStr);


            },
            error: function (error) {

            }
        });
    }
}

function importFile(gridId) {
    var fileType = $("#import" + gridId).val();
    if (fileType == null || fileType == "") {
        showMesg("Please select File type to import");
        return false;
    }
    $("#importTreeDMFile").unbind('change').on('change', function (event) {
        var files = event.target.files;
        if (fileType !== null && fileType !== '' && fileType !== undefined && fileType === 'PDF') {
            importPdfFileIntoDatabase(files[0], fileType, gridId);
        } else {
            uploadFile(files[0], fileType, gridId);
        }
        var $inputFile = $("#excelImport" + gridId);
        $inputFile.next().remove();
        $inputFile.after("<input type='file' name='importTreeDMFile' id='importTreeDMFile' style='display:none;'/>");
    });
    $("#importTreeDMFile").click();

}

function uploadFile(files, fileType, stgGridId) {
    var data;
    var url;
    var fileData = files['name'];
    var xlsxETLFileData = new FormData();
    xlsxETLFileData.append("importTreeDMFile", files);
    xlsxETLFileData.append("selectedFiletype", fileType);
    xlsxETLFileData.append("fileLocalPath", "");
    data = xlsxETLFileData;
    url = "importTreeDMFile";
    $.ajax({
        url: 'importTreeDMFile',
        type: "POST",
        data: xlsxETLFileData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        success: function (response) {
            response = JSON.parse(response);
            var resultFlag = response['flag']
            if (resultFlag != null && resultFlag == "Success") {
                console.log("The result is:::" + response);
                $("#Loader").css("display", "none");
                $("body").css({"pointer-events": "auto"});

                var fileName = response.fileName;
                var result = response.result;
                if (fileType.toUpperCase() == "PDF") {
                    showPdfDataInPopUp(fileName, fileType);
                } else if (fileType.toUpperCase() == "XLSX" || fileType.toUpperCase() == "XLS") {
                    var gridTable = $("#tableName").val();
                    var tableName = gridTable ? gridTable : "O_RECORD_DATA_UNIFICATION_STG";
                    importDataToStgTable(fileName, fileType, tableName, stgGridId);
                } else if (fileType.toUpperCase() == "IMAGE") {

                    var gridId = "imagePreviewDiv";
                    var divHtml = "<div style='height:400px; overflow:scroll;'>"
                            + "<button onclick=imageToHtmlPOC('" + fileName + "','" + fileType + "','" + gridId + "')>View as Html</button>"
                            + "<div id='" + gridId + "'></div>"
                            + "<div>";
                    $("#dialog").remove();
                    $("body").append("<div id='dialog'></div>");
                    $("#dialog").html(divHtml);

                    $("#dialog").dialog({resizable: false,
                        title: (labelObject['Preview'] != null ? labelObject['Preview'] : 'Preview'),
                        modal: false,
                        minHeight: 100,
                        maxHeight: 500,
                        minWidth: 1000,
                        maxWidth: 'auto',
                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                }
                            }],
                        open: function () {
                            $.ajax({
                                type: "post",
                                traditional: true,
                                dataType: 'html',
                                url: 'getImageString',
                                cache: false,
                                data: {
                                    fileName: fileName,
                                    fileType: response.fileType
                                },
                                success: function (result) {
                                    stopLoader();
                                    $("#imagePreviewDiv").html("<img src='" + result + "' />");
                                },
                                error: function (e) {
                                    console.log(e);
                                    sessionTimeout(e);
                                    stopLoader();
                                }
                            });

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

            } else if (resultFlag != null && resultFlag == "Fail") {
                $("#dialog").remove();
                $("body").append("<div id='dialog'></div>");
                $("#dialog").html(response.result);
                $("#dialog").dialog({resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: false,
                    minHeight: 100,
                    maxHeight: 500,
                    minWidth: 1000,
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
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}

function importPdfFileIntoDatabase(files, fileType, gridId) {
    var pdfFileData = new FormData();
    var apiResponseWaitTimeInMilliSec = $("#apiResponseWaitTimeInMilliSec").val();
    pdfFileData.append("importTreeDMFile", files);
    pdfFileData.append("selectedFiletype", fileType);
    pdfFileData.append("fileLocalPath", "");
    pdfFileData.append("apiResponseWaitTimeInMilliSec", apiResponseWaitTimeInMilliSec);
    showLoader();
    $.ajax({
        type: 'POST',
        url: 'insertPdfDataIntoTable',
        data: pdfFileData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        success: function (response) {
            stopLoader();
            if (response !== null && response !== '' && response !== undefined) {
                var buttonArray = [
                    {
                        text: 'ok',
                        click: function () {
                            showLoader();
                            gridoperations(gridId, 'refresh');
                        },
                        isCloseButton: true
                    }
                ];
                showPopUpWithButtonFunctionCall(response, buttonArray);
            }
        },
        error: function (error) {
            console.log("The Error Message is:::" + error.message);
            sessionTimeout(error);
        }
    });

}

function showPdfDataInPopUp(fileName, fileType) {
    var gridId = ('divGrid-' + fileName.replace(fileType, '').replace('.csv', '')).replace(/\s/g, '');
    gridId = gridId.replace(/\//g, '');
    gridId = gridId.replaceAll(/\./g, '');
    var divHtml = "<div style='height:400px; overflow:scroll;'>"
            + "<div id='options" + gridId + "' style='display:flex;'>"
            + "<button onclick=pdfToHtmlPOC('" + fileName + "','" + fileType + "','" + gridId + "')>View as Html</button>"
            + "</div>"
            + "<div id='" + gridId + "'></div>"
            + "</div>";
    $("#dialog").remove();
    $("body").append("<div id='dialog'></div>");
    $("#dialog").html(divHtml);

    $("#dialog").dialog({resizable: false,
        title: (labelObject['View Data'] != null ? labelObject['View Data'] : 'View Data'),
        modal: false,
        minHeight: 100,
        maxHeight: 500,
        minWidth: 1000,
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
            var pdfContent = "<iframe id='viewPDFData' style='width: 100%; height:500px;' src='readPDF?filePath=" + fileName + "' ></iframe>";
            $("#" + gridId).html(pdfContent);

            $('#viewPDFData').on("load", function () {
                stopLoader();
            });

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
function importDataToStgTable(fileName, fileType, tableName, gridId) {
    showLoader();
    var columnLabels = $("#gridTemplateColLabels").val();
    var columnNames = $("#gridTemplateColumns").val();
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: 'importDataToStgTable',
        cache: false,
        data: {
            tableName: tableName,
            fileName: fileName,
            gridId: gridId,
            columnLabels: columnLabels,
            columnNames: columnNames
        },
        success: function (result) {
            stopLoader();
            var message = result['message'];
            $("#dialog").remove();
            $("body").append("<div id='dialog'></div>");
            $("#dialog").html(message);
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['View Data'] : 'Message'),
                modal: false,
                height: 135,
                minWidth: 300,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            gridoperations(gridId, 'refresh');
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
            stopLoader();
        }
    });
}

function pdfToHtmlPOC(fileName, fileType, parentDivId) {
    showLoader();
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        url: 'convertPDFToHTML',
        cache: false,
        data: {
            filePath: fileName
        },
        success: function (result) {
            stopLoader();
            var pdfContent = "<iframe id='pdfToHTMLData' style='width: 100%; height:650px;' srcdoc='' '></iframe>";
            $("#" + parentDivId).html(pdfContent);
            $('#pdfToHTMLData').attr('srcdoc', result);
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function imageToHtmlPOC(fileName, fileType, parentDivId) {
    showLoader();
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        url: 'convertImageToHTML',
        cache: false,
        data: {
            filePath: fileName
        },
        success: function (result) {
            stopLoader();
            var imageContent = "<iframe id='imageToHTMLData' style='width: 100%; height:650px;' srcdoc='' ></iframe>";
            $("#" + parentDivId).html(imageContent);
            $('#imageToHTMLData').attr('srcdoc', result);
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function updateStagingTable(gridId, rowIndex) {
    showLoader();
    var rowData = $("#" + gridId).jqxGrid('getrowdata', rowIndex);
    rowData[gridId + "_HIDDEN"] = 'UPDATE';
//    var commit =  $("#" + gridId).jqxGrid('endupdate');
    $("#" + gridId).jqxGrid('endcelledit', rowIndex, currentCellDataField, false);
//    var commit =  $("#" + gridId).jqxGrid('endrowedit', rowIndex, true);
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: 'insertStagingTable',
        cache: false,
        async: false,
        data: {
            rowData: JSON.stringify(rowData)
        },
        success: function (result) {
            stopLoader();
            var message = result['message'];
            $("#dialog").remove();
            $("body").append("<div id='dialog'></div>");
            $("#dialog").html(message);
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['View Data'] : 'Message'),
                modal: false,
                height: 135,
                minWidth: 300,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            gridoperations(gridId, 'refresh')
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
            stopLoader();
        }
    });
}


function SearchInRepository1(gridId, operation) {


    var selectedrowindex = $("#" + gridId).jqxGrid('selectedrowindex');
    if (selectedrowindex == -1 && globalSelectedRow == null) {
        showMesgPoc("Select Record");
        return false;
    }
    if (selectedrowindex == -1) {
        selectedrowindex = globalSelectedRow;
    }
//    var selectedrowindex = $("#" + gridId).jqxGrid('selectedrowindex');

    var rowdata = $("#" + gridId).jqxGrid('getrowdata', selectedrowindex);
    var referenceData = rowdata['REFERENCE_DATA'];
    var classData = rowdata['CLASS'];

    $.ajax({
        type: "POST",
        url: 'getParamSearchForm',
        data: {
            'searchId': 'FDXP_GENERIC_SEARCH',
            'reqType': 'PRA',
//            searchName: searchName
        },
        traditional: true,
        cache: false,
        async: false,
        success: function (response) {

            if (response != null && response != '') {
                var responseObj = JSON.parse(response);
                $("#settingheaderImage").trigger("click");
//                getPersonalizationDataOpt('PRA');
//                getClassificationSuggetions();
//                    dxpTreeSearch();

                $("#jqxSplitter").remove();
                $("#searchResults").remove();
                $("#searchDefaultSplitter").remove();
                $("#searchresultsSplitter").remove();

                var body = "<div id='jqxSplitter'>"
                        + "<div class ='searchDefaultSplitter' id='searchDefaultSplitter' ></div>"
                        + "<div class='searchresultsSplitter' id='searchresultsSplitter'><div id='searchResults'></div></div>"
                        + "</div>"

                var parametricSearchForm = responseObj['formString']
                var modalObj = {
                    title: 'Search in Repository',
                    body: body
                };
                var buttonArray = [
                    {
                    }
                ];
                modalObj['buttons'] = buttonArray;
                $("#modalDailogDiv").remove();
                $("body").append("<div id='modalDailogDiv'></div>");
                createModal("modalDailogDiv", modalObj);
                $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xl opacity-animate3");

//                $("#jqxSplitter").jqxSplitter({theme: 'summer'});
//                $("#jqxSplitter").jqxSplitter({
//                    width: 'auto',
//                    orientation: 'vertical',
//                    splitBarSize: 5,
//                    panels: [{size: 100}]
//                });
                setTimeout(function () {
                    $("#jqxSplitter").jqxSplitter({width: '99.7%',
                        splitBarSize: '5px',
                        panels: [{size: "40%"}, {min: '60%', size: "60%"}]})
                    $("#searchDefaultSplitter").html(parametricSearchForm)
                    $("#DxpParamSplitterDotsClass").remove();
                    $("#PRAREFERENCE_NO").find(".value_td").find("input").val(referenceData);
                    $("#PRATERM").find(".value_td").find("input").val(classData);
                }, 500);

                $('#modalDailogDiv').on('hidden.bs.modal', function () {

                    $("#searchResults").jqxGrid('destroy');
                    $("#modalDailogDiv").remove();
                    $("body").append("<div id='modalDailogDiv'></div>");
                    var gridId = 'DXP_UNIFICATION_PORTAL_GRID';
                    $.ajax({
                        type: "POST",
                        url: 'getCloudGrid',
                        data: {
                            gridId: gridId,
                            roleId: $("#rolehid").val(),
                        },
                        traditional: true,
                        cache: false,
                        success: function (result) {
                            var paramObj = {};

//          paramObj.column = 'RECORD_NO';
//          paramObj.value = '3120002935423';
                            paramObj.column = '1';
                            paramObj.value = '1';
                            paramObj.operator = "EQUALS";
                            paramObj.symbol = "Euqals";
                            gridNewConfigPoc(result, "", paramObj, gridId);
                        }
                    });
                })
            }
        },
        error: function (e) {
            console.log(e);
            // stopLoader();
            sessionTimeout(e);
        }

    });
}

function SearchInRepository(gridId, operation) {

    var indexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    var selectedRowsData = [];
    if (indexes.length == 0) {
        showMesgPoc("Select Record");
        return false;
    }
    if (indexes.length > 0) {

        var totalRowIndex = indexes.length;
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
            var data = $("#" + gridId).jqxGrid('getrowdata', indexes[i]);
            selectedRowsData.push(data);
        }

    }

    var referenceData = "";
    var classData = "";
    if (selectedRowsData.length == 1) {
        var rowData = selectedRowsData[0];
        referenceData = rowData['REFERENCE_DATA']
    } else if (selectedRowsData.length > 1) {
        $.each(selectedRowsData, function (i) {
            var rowData = selectedRowsData[i];
            if (i == (selectedRowsData.length - 1)) {
                referenceData += "'" + rowData['REFERENCE_DATA'] + "'";
            } else {
                referenceData += "'" + rowData['REFERENCE_DATA'] + "',";
            }

        })
    }

    $.ajax({
        type: "POST",
        url: 'getParamSearchForm',
        data: {
            'searchId': 'FDXP_GENERIC_SEARCH',
            'reqType': 'PRA',
//            searchName: searchName
        },
        traditional: true,
        cache: false,
        async: false,
        success: function (response) {

            if (response != null && response != '') {
                var responseObj = JSON.parse(response);
                $("#settingheaderImage").trigger("click");
//                getPersonalizationDataOpt('PRA');
//                getClassificationSuggetions();
//                    dxpTreeSearch();

                $("#jqxSplitter").remove();
                $("#searchResults").remove();
                $("#searchDefaultSplitter").remove();
                $("#searchresultsSplitter").remove();

                var body = "<div id='jqxSplitter'>"
                        + "<div class ='searchDefaultSplitter' id='searchDefaultSplitter' ></div>"
                        + "<div class='searchresultsSplitter' id='searchresultsSplitter'><div id='searchResults'></div></div>"
                        + "</div>"

                var parametricSearchForm = responseObj['formString']
                var modalObj = {
                    title: 'Search in Repository',
                    body: body
                };
                var buttonArray = [
                    {
                    }
                ];
                modalObj['buttons'] = buttonArray;
                $("#modalDailogDiv").remove();
                $("body").append("<div id='modalDailogDiv'></div>");
                createModal("modalDailogDiv", modalObj);
                $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xl opacity-animate3");

//                $("#jqxSplitter").jqxSplitter({theme: 'summer'});
//                $("#jqxSplitter").jqxSplitter({
//                    width: 'auto',
//                    orientation: 'vertical',
//                    splitBarSize: 5,
//                    panels: [{size: 100}]
//                });
                setTimeout(function () {
                    $("#jqxSplitter").jqxSplitter({width: '99.7%',
                        splitBarSize: '5px',
                        panels: [{size: "40%"}, {min: '60%', size: "60%"}]})
                    $("#searchDefaultSplitter").html(parametricSearchForm)
                    $("#DxpParamSplitterDotsClass").remove();
                    $("#PRAREFERENCE_NO").find(".value_td").find("input").val(referenceData);
//                    $("#PRATERM").find(".value_td").find("input").val(classData);
                }, 500);

                $('#modalDailogDiv').on('hidden.bs.modal', function () {

                    $("#searchResults").jqxGrid('destroy');
                    $("#modalDailogDiv").remove();
                    $("body").append("<div id='modalDailogDiv'></div>");
                    var gridId = 'DXP_UNIFICATION_PORTAL_GRID';
                    $.ajax({
                        type: "POST",
                        url: 'getCloudGrid',
                        data: {
                            gridId: gridId,
                            roleId: $("#rolehid").val(),
                        },
                        traditional: true,
                        cache: false,
                        success: function (result) {
                            var paramObj = {};

//          paramObj.column = 'RECORD_NO';
//          paramObj.value = '3120002935423';
                            paramObj.column = '1';
                            paramObj.value = '1';
                            paramObj.operator = "EQUALS";
                            paramObj.symbol = "Euqals";
                            gridNewConfigPoc(result, "", paramObj, gridId);
                        }
                    });
                })
            }
        },
        error: function (e) {
            console.log(e);
            // stopLoader();
            sessionTimeout(e);
        }

    });
}

function sendOrderMail(organisationName, gridId, selectedrowindex, recordNo) {
    var rowdata = $("#" + gridId).jqxGrid('getrowdata', selectedrowindex);

    var body = "<div id='orderDetailsDiv' style='border: 2px solid #cacaca;border-radius: 10px;padding: 15px;'><table>"
            + "<tr><td>Class : </td><td><input type='text' value='" + rowdata['CLASS'] + "'/></td>"
            + "<td>Description : </td><td><textarea  rows='3' cols='30'>" + rowdata['LONG_TEXT'] + "</textarea></td>"
            + "<td>UNSPSC : </td><td><input type='text' value='" + rowdata['UNSPSC'] + "'/></td>"
            + "<td>Quantity : </td><td><input id='orderQuantity' type='text' value='' /></td></tr>"
            + "</table></div>"
    var modalObj = {
        title: 'Send Request',
        body: body,
        recordNo: recordNo
    };
    var buttonArray = [
        {
            text: 'Send Request',
            click: function () {
                showLoader();
                var orderQuantity = $("#orderQuantity").val();
                $("#orderQuantity").attr("value", orderQuantity);

                $.ajax({
                    type: "POST",
                    url: 'sendOrderRquest',
                    data: {
                        mailBody: $("#orderDetailsDiv").html(),
                        recordNo: recordNo,
                        organisationName: organisationName,
                        rowdata: JSON.stringify(rowdata),
                        orderQuantity: orderQuantity
                    },
                    traditional: true,
                    cache: false,
                    async: false,
                    success: function (response) {

                        stopLoader();
                        if (response != null && response != '') {

                            var message = response['message'];
                            var modalObj = {
                                title: 'Message',
                                body: message
                            };
                            var buttonArray = [
                                {
                                }
                            ];
                            modalObj['buttons'] = buttonArray;
                            $("#dialog1").remove();
                            $("body").append("<div id='dialog1'></div>");
                            createModal("dialog1", modalObj);
                            $("#dialog1").find(".modal-dialog").addClass("modal-xs opacity-animate3");

                        }
                    },
                    error: function (e) {
                        console.log(e);
                        // stopLoader();
                        sessionTimeout(e);
                    }

                });
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    $("#dialog1").remove();
    $("body").append("<div id='dialog1'></div>");
    createModal("dialog1", modalObj);
    $("#dialog1").find(".modal-dialog").addClass("modal-xl opacity-animate3");
    $("#orderQuantity").focus();
}


function showVendorNotifications() {
    $.ajax({
        type: "POST",
        url: 'vendorNotifications',
        data: {
        },
        traditional: true,
        cache: false,
        async: false,
        success: function (response) {
            stopLoader();
            if (response != null && response != '') {

                var notificationsList = response['notifications'];
                var body = "";
                if (notificationsList != null && notificationsList.length > 0) {
                    $("#vendorNotificationCount").css("display", "none");
                    body += "<table><thead style='background: #f1f1f1;' ><tr>"
                            + "<th>SNO</th>"
                            + "<th>CLIENT</th>"
                            + "<th>CLASS</th>"
                            + "<th>DESCRIPTION</th>"
                            + "<th>UNSPSC</th>"
                            + "<th>QUANTITY</th>"
                            + "</tr></thead><tbody>";

                    $.each(notificationsList, function (i) {
                        var notification = notificationsList[i];
                        body += "<tr>"
                                + "<td>" + (i + 1) + "</td>"
                                + "<td><input type='text' value=" + (notification[0] != null ? notification[0] : "") + " /></td>"
                                + "<td><input type='text' value=" + (notification[1] != null ? notification[1] : "") + " /></td>"
                                + "<td><textarea  rows='2' cols='30' >" + (notification[2] != null ? notification[2] : "") + "</textarea></td>"
                                + "<td><input type='text' value=" + (notification[3] != null ? notification[3] : "") + " /></td>"
                                + "<td><input type='text' value=" + (notification[4] != null ? notification[4] : "") + " /></td>"
                                + "</tr>"
                    })
                    body += "</tbody></table>";
                }
                var modalObj = {
                    title: 'Notifications',
                    body: body
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
                $("#dialog1").remove();
                $("body").append("<div id='dialog1'></div>");
                createModal("dialog1", modalObj);
                $("#dialog1").find(".modal-dialog").addClass("model-cust-rec-reg modal-xl opacity-animate3");

            }
        },
        error: function (e) {
            console.log(e);
            // stopLoader();
            sessionTimeout(e);
        }
    });
}

function deleteStagingTable(gridId, indexes) {
    if (indexes.length > 0) {
        var rowsSelected = [];
        var totalRowIndex = indexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        var tableName = $('#tableName').val().toUpperCase();
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
            var data = $("#" + gridId).jqxGrid('getrowdata', indexes[i]);
            rowsSelected.push(data);
        }
        if (rowsSelected == null || rowsSelected.length == 0) {
            stopLoader();//13
            var results = "No Record(s) to Delete";
            results = (labelObject[results] != null ? labelObject[results] : results);
            var dialogSplitMessage = dialogSplitIconText(results, "Y");
            $("#dialog").html(dialogSplitMessage);
            $("#dialog").dialog({resizable: false,
                modal: true,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                height: 'auto',
                minHeight: 'auto',
                minWidth: 350,
                maxWidth: 'auto',
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }
                    }],
                open: function () {
                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                    $(this).closest(".ui-dialog").addClass("visionCommonDialog");
                }
            });
        } else {
            stopLoader();//14
            var results = "Are you sure you want to Delete this Record?";
            results = (labelObject[results] != null ? labelObject[results] : results);
//            var dialogSplitMessage = dialogSplitIconText(results, "Y");
            $("#dialog").html(results);
            $("#dialog").dialog({resizable: false,
                modal: true,
                title: (labelObject['Confirmation'] != null ? labelObject['Confirmation'] : 'Confirmation'),
                height: 'auto',
                minHeight: 'auto',
                minWidth: 350,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                        click: function () {
                            showLoader();//3
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            showLoader();//13
                            $.ajax({
                                type: "post",
                                traditional: true,
                                dataType: 'json',
                                url: 'deleteStagingTable',
                                cache: false,
                                async: false,
                                data: {
                                    rowData: JSON.stringify(rowsSelected),
                                    tableName: tableName
                                },
                                success: function (result) {
                                    stopLoader();
                                    var message = result['message'];
                                    $("#dialog").remove();
                                    $("body").append("<div id='dialog'></div>");
                                    $("#dialog").html(message);
                                    $("#dialog").dialog({resizable: false,
                                        title: (labelObject['Message'] != null ? labelObject['View Data'] : 'Message'),
                                        modal: false,
                                        height: 135,
                                        minWidth: 300,
                                        maxWidth: 'auto',
                                        fluid: true,
                                        buttons: [{
                                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                                click: function () {
                                                    gridoperations(gridId, 'refresh')
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
                                    stopLoader();
                                }
                            });



                        }},
                    {
                        text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }
                    }],
                open: function () {
                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                    $(this).closest(".ui-dialog").addClass("visionCommonDialog");
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
        deleteRecordsWithBatchId(gridId);
    }
}

function deleteRecordsWithBatchId(gridId) {

    var selectBatchIdsList = "<div class='batchSelectColumn'><h6>Select Batch Ids </h6>"
            + "<div style='max-height:200px;overflow-y: scroll;' class='batchSelectColumntableView'><table>";

    selectBatchIdsList += "<tr>"
            + "<td style='width: 95%;'><input id='batchIdsListInput' value='' style='width: 100%;'></td>"
            + "<td><img src='images/iDXPUI5Search.svg' style='width:15px;height:15px;' onclick=selectBatchIdGrid('selectBatchIdListGrid')  /></td>"
            + "</tr>";

    selectBatchIdsList += "</table>";
    selectBatchIdsList += "</div>";
    selectBatchIdsList += "</div>";

    var modalObj = {
        title: 'Provide Input Values',
        body: selectBatchIdsList
    };
    var buttonArray = [
        {
            text: 'Submit',
            click: function () {
                showLoader();//13
                var batchId = $("#batchIdsListInput").val();
                $.ajax({
                    type: "post",
                    traditional: true,
                    dataType: 'json',
                    url: 'deleteStagingTable',
                    cache: false,
                    async: false,
                    data: {
                        batchId: batchId
                    },
                    success: function (result) {
                        stopLoader();
                        var message = result['message'];

                        var modalObj = {
                            title: 'Message',
                            body: message
                        };
                        var buttonArray = [
                            {
                                text: 'ok',
                                click: function () {
                                    gridoperations(gridId, 'refresh');
                                },
                                isCloseButton: true
                            }
                        ];
                        modalObj['buttons'] = buttonArray;
                        $("#modalDailogDiv1").remove();
                        $("body").append("<div id='modalDailogDiv1'></div>");
                        createModal("modalDailogDiv1", modalObj);
                        $("#modalDailogDiv1").find(".modal-dialog").addClass("modal-xs opacity-animate3");

                        $('#modalDailogDiv1').on('hidden.bs.modal', function () {
                            gridoperations(gridId, 'refresh');
                        })
                    },
                    error: function (e) {
                        console.log(e);
                        sessionTimeout(e);
                        stopLoader();
                    }
                });
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    $("#modalDailogDiv").remove();
    $("body").append("<div id='modalDailogDiv'></div>");
    createModal("modalDailogDiv", modalObj);
    $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs opacity-animate3");

}


function showMesgPoc(message) {
    if (message != null) {
        $("#dialog").html(message);
        $("#dialog").dialog({resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            height: 'auto',
            minWidth: 300,
            maxWidth: 300,
            fluid: true,
            buttons: [{
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {
                        $(this).html("");
//                        //$(this).dialog("close");
                        $(this).dialog("destroy");
                    }}],
            open: function () {
                $(this).closest(".ui-dialog").css("z-index", "9999")
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

function enrichDescription() {
    var rowindexstg = $("#DXP_UNIFICATION_PORTAL_GRID").jqxGrid('selectedrowindex');
    var rowDataStg = $("#DXP_UNIFICATION_PORTAL_GRID").jqxGrid('getrowdata', rowindexstg);
    var recordNo = rowDataStg['RECORD_NO'];
    var rowindex = $("#searchResults").jqxGrid('selectedrowindex');
    var rowData = $("#searchResults").jqxGrid('getrowdata', rowindex);
    $.ajax({
        type: "POST",
        url: 'enrichDescriptionInRepository',
        data: {
            rowData: JSON.stringify(rowData),
            recordNo: recordNo
        },
        traditional: true,
        cache: false,
        async: false,
        success: function (response) {
            stopLoader();
            if (response != null && response != '') {
                var body = response['message'];

                var modalObj = {
                    title: 'Message',
                    body: body
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
                $("#dialog1").remove();
                $("body").append("<div id='dialog1'></div>");
                createModal("dialog1", modalObj);
                $("#dialog1").find(".modal-dialog").addClass("model-cust-rec-reg modal-xl opacity-animate3");

            }
        },
        error: function (e) {
            console.log(e);
            // stopLoader();
            sessionTimeout(e);
        }
    });
}

function closeRegistryTab(tabHeaderId, tabContentDivId) {
    if (tabHeaderId == "defaultTab") {
        var visibleTabsLength = $(".registryTabHeader:visible").length;
        if (visibleTabsLength > 1) {

        } else if (visibleTabsLength == 1) {
            $(".registryTabHeader").removeClass("active");
            $("#" + tabHeaderId).hide();
            $("#tabsdiv").css("width", "0px");
        }
    } else {
        $(".registryTabHeader").removeClass("active");
        $("#defaultTab").addClass("active");
        $("#treeGridDiv").show();

        $("#" + tabContentDivId).html("");
        $("#" + tabHeaderId).hide();
        $("#" + tabContentDivId).hide();


    }
}

function updateRecordProcessStatus(gridId, row) {
    var body = "Are you sure you want to change the status?";

    var modalObj = {
        title: 'Message',
        body: body
    };
    var buttonArray = [
        {
            text: 'Yes',
            click: function () {
                var indexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
                var rowsSelected = [];
                if (indexes.length > 0) {
                    var totalRowIndex = indexes.length;
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
                        var data = $("#" + gridId).jqxGrid('getrowdata', indexes[i]);
                        rowsSelected.push(data);
                    }
                } else {
                    var data = $("#" + gridId).jqxGrid('getrowdata', row);
                    rowsSelected.push(data);
                }

                $.ajax({
                    type: "POST",
                    url: 'updateRecordProcessStatus',
                    data: {
                        selectedRowsArray: JSON.stringify(rowsSelected)
                    },
                    traditional: true,
                    cache: false,
                    async: false,
                    success: function (response) {
                        stopLoader();
                        if (response != null && response != '') {
                            var body = response['message'];

                            var modalObj = {
                                title: 'Message',
                                body: body
                            };
                            var buttonArray = [
                                {
                                    text: 'Ok',
                                    click: function () {
                                        gridoperations(gridId, 'refresh');
                                    },
                                    isCloseButton: true
                                }
                            ];
                            modalObj['buttons'] = buttonArray;
                            $("#dialog1").remove();
                            $("body").append("<div id='dialog1'></div>");
                            createModal("dialog1", modalObj);
                            $("#dialog1").find(".modal-dialog").addClass("modal-xs opacity-animate3");

                        }
                    },
                    error: function (e) {
                        console.log(e);
                        // stopLoader();
                        sessionTimeout(e);
                    }
                });
            },
            isCloseButton: true
        },
        {
            text: 'No',
            click: function () {
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    $("#dialog").remove();
    $("body").append("<div id='dialog'></div>");
    createModal("dialog", modalObj);
    $("#dialog").find(".modal-dialog").addClass("modal-xs opacity-animate3");


}


function showDuplicatesPDR1AndPDR2(gridId, row) {
    var basicData = $("#" + gridId).jqxGrid("getRowData", row);
    basicData['RECORD_NO'] = basicData['REGISTERED_RECORD_NO'];
    $.ajax({
        type: "get",
        traditional: true,
        dataType: 'html',
        url: "recordDuplicateCheck",
        cache: false,
        data: {
            basicData: JSON.stringify(basicData)

        },
        error: function (result) {
            return false;
            sessionTimeout(result);
        },
        success: function (result) {
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
                        var dialogSplitMessage = dialogSplitIconText(results, "Y");
                        $("#dialog").html(dialogSplitMessage).dialog({resizable: false,
                            title: (labelObject['Duplicate Check'] != null ? labelObject['Duplicate Check'] : 'Duplicate Check'),
                            height: 'auto',
                            minHeight: 'auto',
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
            }

        }

    }
    );
}

function importFileFromDrive(gridId) {
    var $driveDropDownElement = $("#importDriveExcel" + gridId);
    var selectedDriveType = $($driveDropDownElement).val();
    selectedDriveType = selectedDriveType.replace(" ", "-").toLowerCase();
//    var convertedcamelCaseText = toCamelCase(selectedDriveType);
    var $selectedDriveElement = $($driveDropDownElement).children(":selected").attr("id", selectedDriveType);
    var selectedDriveId = $($selectedDriveElement).attr("id");
    if (selectedDriveType === null || selectedDriveType === "") {
        showMesg("Please Select Drive type to Import");
        return false;
    }

    if (selectedDriveId !== null && selectedDriveId !== undefined && selectedDriveId !== '') {
        if (selectedDriveId === 'google-drive') {
            checkUserAuthentication();
        } else if (selectedDriveId === 'ftp-server') {
//            connectToFtpServerAndGetList();
            ftpFileExplorer();

        }
    } else {
        showModalPopUp("Unable to Connect to " + selectedDriveType + " Server.");
    }
}


function toCamelCase(textToConvert) {
    return textToConvert
            .replace(/\s(.)/g, function ($1) {
                return $1.toUpperCase();
            })
            .replace(/\s/g, '')
            .replace(/^(.)/, function ($1) {
                return $1.toLowerCase();
            });
}

function checkUserAuthentication() {
    showLoader();
    $.ajax({
        type: "GET",
        traditional: true,
        dataType: 'html',
        url: "checkUserAuthentication",
        cache: false,
        success: function (status) {
            if (status !== null && status !== undefined && status !== '') {
                if (status === 'Y') {
                    importFileFromGoogleDrive();
                } else {
                    var message = "Please Provide Your Google Drive Authentication.";
                    var buttonArray = [
                        {
                            text: 'ok',
                            click: function () {
                                getGoogleAuthentication();
                            },
                            isCloseButton: true
                        }
                    ];
                    showPopUpWithButtonFunctionCall(message, buttonArray);
                    stopLoader();
                }
            }
        }, error: function (result) {
            return false;
            sessionTimeout(result);
        }
    });
}

function getGoogleAuthentication() {
    $.ajax({
        type: "GET",
        traditional: true,
        dataType: 'html',
        url: "getGoogleAuthentication",
        cache: false,
        success: function (redirectUrl) {
            stopLoader();
            if (redirectUrl !== null && redirectUrl !== undefined && redirectUrl !== '') {
                window.open(redirectUrl, "_target");
            }
        }, error: function (result) {
            return false;
            sessionTimeout(result);
        }
    });
}

function importFileFromGoogleDrive() {
    $.ajax({
        type: "GET",
        traditional: true,
        dataType: 'html',
        url: "getListOfFiles",
        cache: false,
        success: function (responseAsTableString) {
            if (responseAsTableString !== null && responseAsTableString !== undefined
                    && responseAsTableString !== '') {
                var modalObj = {
                    title: 'List of Sheets',
                    body: responseAsTableString
                };
                $("#modalDailogDiv").remove();
                $("body").append("<div id='modalDailogDiv'></div>");
                createModal("modalDailogDiv", modalObj);
                $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs"); //opacity-animate3
                $("#modalDailogDiv .modal-footer").remove();
                stopLoader();
            }
        }, error: function (result) {
            return false;
            sessionTimeout(result);
        }
    });
}

function showPopUpWithButtonFunctionCall(message, buttonArray) {
    var modalObj = {
        title: 'Message',
        body: message
    };
    modalObj['buttons'] = buttonArray;
    $("#modalDailogDiv").remove();
    $("body").append("<div id='modalDailogDiv'></div>");
    createModal("modalDailogDiv", modalObj);
}

function importGoogleSheetData(googleSheetId) {
    var columnNames = $("#gridTemplateColumns").val();
    var gridTable = $("#tableName").val();
    var gridId = $("#currentGridId").val();
//    var tableName = gridTable ? gridTable : "O_RECORD_DATA_UNIFICATION_STG";
    showLoader();
    $.ajax({
        type: "GET",
        traditional: true,
        dataType: 'html',
        url: "importGoogleSheetData",
        data: {
            googleSheetId: googleSheetId,
            columnNames: columnNames,
            tableName: gridTable
        },
        cache: false,
        success: function (responseAsTableString) {
            stopLoader();
            if (responseAsTableString !== null && responseAsTableString !== undefined
                    && responseAsTableString !== '') {
                var modalObj = {
                    title: 'Imported Record Count',
                    body: responseAsTableString
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        click: function () {
                            showLoader();
                            gridoperations(gridId, 'refresh');
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                $("#modalDailogDiv").remove();
                $("body").append("<div id='modalDailogDiv'></div>");
                createModal("modalDailogDiv", modalObj);
                $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs"); //opacity-animate3
            }
        }
        , error: function (result) {
            return false;
            sessionTimeout(result);
        }
    }
    );
}

function connectToFtpServerAndGetList() {
    showLoader();
    $.ajax({
        type: "GET",
        traditional: true,
        dataType: 'JSON',
        url: "getListOfFilesFromFtpServer",
        cache: false,
        success: function (response) {
            stopLoader();
            if (response !== null && !jQuery.isEmptyObject(response)) {
                var hostname = response['hostName'];
                var listOfFiles = response['filesListHtml'];
                var connectionStatus = response['connectionStatus'];
                var modalObj = {
//                    title: 'Connected to <strong style=\'color: #007bff\'>' + hostname + "</strong>",
                    title: hostname,
                    body: listOfFiles
                };
                $("#modalDailogDiv").remove();
                $("body").append("<div id='modalDailogDiv'></div>");
                createModal("modalDailogDiv", modalObj);
                $("#modalDailogDiv").find(".modal-dialog").addClass("modal-xs");
                if (connectionStatus) {
                    $("#modalDailogDiv").addClass("ftpServerPopup");
                }
                $("#modalDailogDiv .modal-footer button").remove();
            } else {
                showModalPopUp("Unable to connect to server.");
            }
        }, error: function (result) {
            stopLoader();
            sessionTimeout(result);
        }
    });
}


function duplicateCheckPOMatchMultipleFiles(gridId, operationName, batchId, duplicateCheckType) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'duplicateCheck',
        dataType: 'json',
        data: {
            gridId: gridId,
            operationName: operationName,
            batchId: batchId,
            duplicateCheckType: duplicateCheckType
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            switchRegistryTabs('duplicateCheckTabForExisting', 'duplicateCheckTabContentForExisting');
//            switchRegistryTabs('duplicateCheckTabForFile', 'duplicateCheckTabContentForFile');
            if (response !== null && !$.isEmptyObject(response)) {
                $.each(response, function (key, value) {
                    if (key !== null && key !== '' && key !== undefined) {
                        if (key === 'dataArray') {
                            var gridIdForExistingData = gridId + "_EXISTING_DATA";
                            $("#duplicateCheckTabContentForExisting").html("<div id='" + gridIdForExistingData + "'></div>");
                            showDuplicatesFromOtherDataInGrid(value, gridIdForExistingData);
                        } else if (key === 'withinFileDataArray') {
                            var gridIdForFileData = gridId + "_FILE_DATA";
                            $("#duplicateCheckTabForFile").show();
                            $("#duplicateCheckTabContentForFile").html("<div id='" + gridIdForFileData + "'></div>");
                            showDuplicatesFromSameFileInGrid(value, gridIdForFileData);
                        }
                    }
                });
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function showDuplicatesFromOtherDataInGrid(responseData, gridId) {
    var dataFieldsArray = [];
    var columnsArray = [];
    var showActionButton = function (row, column, value) {
        return "Register";
    };
    var registerItem = function (row) {
        registerSelectedItem(gridId, row, "POMATCH");
    };
//REFERENCE_NO,REFERENCE_TYPE,VENDOR_NAME,
    var colsString = "INPUT_RECORD_NO,RECORD_NO,INPUT_LONG_DESCRIPTION,LONG_TEXT,UNMATCHED_WORDS,INPUT_DESC_PERCENTAGE,EXISTING_SRC_DESC_PERCENTAGE,GROUP,BATCH_ID,Action";
//Existing Reference No,Existing Reference Type,Existing Vendor Name,
    var colsLabelsString = "New Record No,Duplicate with,New Description,Duplicate Item Description,Unmatched Words,Match Percentage,Existing Source Match ,Group,Batch Id,Action";
    var columnsList = colsString.split(",");
    var colsLabelsList = colsLabelsString.split(",");
    $.each(columnsList, function (index) {
        var dataFieldsObj = {};
        dataFieldsObj['name'] = this;
        dataFieldsObj['type'] = 'string';
        var columnsObject = {};
        columnsObject['text'] = colsLabelsList[index];
        columnsObject['datafield'] = this;
        columnsObject['width'] = 100;
        columnsObject['sortable'] = true;
        if (this == "INPUT_LONG_DESCRIPTION" || this == "LONG_TEXT" || this == "Unmatched_words") {
            columnsObject['width'] = 400;
        }
        if (this == "BATCH_ID" || this == "Unmatched_words" || this == "GROUP") {
            columnsObject['hidden'] = true;
        }
        if (this == "Action") {
            columnsObject['columntype'] = 'button';
            columnsObject['cellsrenderer'] = showActionButton;
            columnsObject['buttonclick'] = registerItem;
        }
        columnsArray.push(columnsObject);
    });
    gridConfigForMultipleDuplicatesinTabs(gridId, responseData, dataFieldsArray, columnsArray);
}

function showDuplicatesFromSameFileInGrid(responseData, gridId) {
    var dataFieldsArray = [];
    var columnsArray = [];
    var columnsList = ["INPUT_RECORD_NO", "RECORD_NO", "INPUT_LONG_DESCRIPTION",
        "LONG_DESCRIPTION", "UNMATCHED_WORDS", "INPUT_DESC_PERCENTAGE",
        "EXISTING_SRC_DESC_PERCENTAGE", "GROUP", "BATCH_ID"];
    var colsLabelsString = "New Record No,Duplicate with,New Description,Duplicate Item Description,Unmatched Words,Match Percentage,Existing Source Match ,Group,Batch Id";
    var colsLabelsList = colsLabelsString.split(",");
    $.each(columnsList, function (index) {
        var dataFieldsObj = {};
        dataFieldsObj['name'] = this;
        dataFieldsObj['type'] = 'string';
        var columnsObject = {};
        columnsObject['text'] = colsLabelsList[index];
        columnsObject['datafield'] = this;
        columnsObject['width'] = 100;
        columnsObject['sortable'] = true;
        if (this == "INPUT_LONG_DESCRIPTION" || this == "LONG_DESCRIPTION" || this == "Unmatched_words") {
            columnsObject['width'] = 400;
        }
        if (this == "BATCH_ID" || this == "Unmatched_words" || this == "GROUP") {
            columnsObject['hidden'] = true;
        }
        columnsArray.push(columnsObject);
    });
    gridConfigForMultipleDuplicatesinTabs(gridId, responseData, dataFieldsArray, columnsArray);
}

function gridConfigForMultipleDuplicatesinTabs(gridId, dataArray, dataFieldsArray, columnsArray) {
    var source =
            {
                localdata: dataArray,
                datatype: "array",
                datafields: dataFieldsArray,
                sort: function ()
                {
                    $("[id='" + gridId + "']").jqxGrid('updatebounddata', 'sort');
                    try {
                        $("[id='" + gridId + "']").jqxGrid('clearselection');
                    } catch (e) {
                    }
                    stopLoader();
                },
                filter: function () {
                    $("[id='" + gridId + "']").jqxGrid('updatebounddata', 'filter');
                    try {
                        $("[id='" + gridId + "']").jqxGrid('clearselection');
                    } catch (e) {
                    }
                    stopLoader();
                }
            };

    var dataAdapter = new $.jqx.dataAdapter(source);
    $("[id='" + gridId + "']").jqxGrid(
            {
                width: "100%",
                height: "490",
                theme: 'energyblue',
                autoshowloadelement: false,
                source: dataAdapter,
                pageable: true,
                pagesize: 50,
                showfilterrow: true,
                filterable: true,
                sortable: true,
                virtualmode: true,
                pagesizeoptions: ['50', '100', '500', '1000', '5000', '10000', '50000'],
                enabletooltips: true,
                enablemousewheel: true,
                enablehover: true,
                selectionmode: 'checkbox',
                enablebrowserselection: true,
                rendergridrows: function (params) {
                    return params.data;
                },
                columnsresize: true,
                columns: columnsArray
            });

    $('#' + gridId).on('celldoubleclick', function (event) {
        var args = event.args;
        var dataField = args.datafield;
        var dataField1 = args.text;
        var rowIndex = args.rowindex;
        var cellValue = args.value;
        var column = $('#' + gridId).jqxGrid('getcolumn', event.args.datafield).text;
        popupedit(column, cellValue);
    });
}

function ftpFileExplorer() {

    var explorerWindow = "<div class=''>"
            + "<div class='row'>"
            + "<div class='ftpConnectorForm'>"

            + "<input class='ftpConnectorInputField' id='ftpHostName' placeholder='Host Name' />"
            + "<input class='ftpConnectorInputField' id='ftpUserName' placeholder='User Name' />"
            + "<input class='ftpConnectorInputField' id='ftpPassword' placeholder='Password' type='password' />"
//            + "<input class='ftpConnectorInputField' id='ftpPassword' placeholder='Password'  />"
            + "<input class='ftpConnectorInputField' id='ftpPort' placeholder='Port' />"
            + "<input class='ftpConnectorInputField' id='connectToFTP' type='button' value='Connect' />"
            + "</div>"
            + "</div>"
            + "<div class='row ftpFileExplorerInner'>"
            + "<div class='col-sm-2 col-md-2 col-lg-2'>"
            + "<div  class='ftpDirectories'>"
            + "<div  id='ftpDirectoriesId'>"

            + "</div>"
            + "</div>"
            + "</div>"
            + "<div class='col-sm-10 col-md-10 col-lg-10'>"
            + "<div class='ftpDirectoryContents'>"
            + "<div  id='ftpDirectoryContentsId'>"

            + "</div>"
            + "</div>"
            + "</div>"
            + "</div>"
            + "</div>"
            + "<input type='hidden' id='ftpConnectionDetails' value='' />";
    var modalObj = {
        title: "FTP Explorer",
        body: explorerWindow
    };
    $("#modalDailogDiv").remove();
    $("body").append("<div id='modalDailogDiv'></div>");
    createModal("modalDailogDiv", modalObj);
    $("#modalDailogDiv").addClass("ftpFileExplorerDialogBox");
    $("#modalDailogDiv").find(".modal-dialog").addClass("ftpFileExplorer");
    $("#modalDailogDiv").find(".modal-footer").css("display", "none");

    $("#ftpDirectoryContentsId").on('contextmenu', function (e) {
        return false;
    });

    $("#connectToFTP").click(function (event) {
        var ftpHostName = $("#ftpHostName").val();
        if (ftpHostName == null || ftpHostName == "") {
            showMessageBox("Host Name cannot be Empty", "error");
            return false;
        }
        var ftpUserName = $("#ftpUserName").val();
        if (ftpUserName == null || ftpUserName == "") {
            showMessageBox("User Name cannot be Empty", "error");
            return false;
        }
        var ftpPassword = $("#ftpPassword").val();
        if (ftpPassword == null || ftpPassword == "") {
            showMessageBox("Password cannot be Empty", "error");
            return false;
        }
        var ftpPort = $("#ftpPort").val();
        if (ftpPort == null || ftpPort == "") {
            ftpPort = "21";
        }

        $.ajax({
            type: "GET",
            traditional: true,
            dataType: 'JSON',
            url: "loginToFtpServerAndGetStatus",
            cache: false,
            data: {
                ftpHostName: ftpHostName,
                ftpUserName: ftpUserName,
                ftpPassword: ftpPassword,
                ftpPort: ftpPort
            },
            success: function (response) {
                stopLoader();
                if (response !== null && !jQuery.isEmptyObject(response)) {

                    var ftpConnDetails = {
                        ftpHostName: ftpHostName,
                        ftpUserName: ftpUserName,
                        ftpPassword: ftpPassword,
                        ftpPort: ftpPort
                    };
                    $("#ftpConnectionDetails").val(JSON.stringify(ftpConnDetails));
                    var message = response['message'];
                    var hostname = response['hostName'];
                    var listOfFiles = response['filesNamesList'];
                    var connectionStatus = response['connectionStatus'];

                    if (connectionStatus) {

                        showMessageBox(message);
                        $("#ftpDirectoriesId").jqxTree({source: listOfFiles, height: '394px', width: '118px'});
                        var treeItems = $("#ftpDirectoriesId").jqxTree('getItems');
                        var firstElement;
                        $.each(treeItems, function (i) {
                            if (i == 0) {
                                firstElement = this.element;
                            }
                            var Element = this.element;
                            $('#ftpDirectoriesId').jqxTree('addTo', {html: "<div>loading...</div>"}, Element);
                        })
                        $('#ftpDirectoriesId').jqxTree('selectItem', firstElement);
                    } else {
                        showMessageBox("Password cannot be Empty", "error");
                    }

                } else {

                }
            }, error: function (result) {
                stopLoader();
                sessionTimeout(result);
            }
        });
    })


    $("#ftpDirectoriesId").on('itemClick', function (event) {
        var args = event.args;
        var item = $('#ftpDirectoriesId').jqxTree('getItem', args.element);
        var label = item.label;
        $.ajax({
            type: "GET",
            traditional: true,
            dataType: 'JSON',
            url: "getListOfFilesFromParentDir",
            cache: false,
            data: {
                ftpConnectionDetails: $("#ftpConnectionDetails").val(),
                parentDir: label
            },
            success: function (response) {
                stopLoader();
                if (response !== null && !jQuery.isEmptyObject(response)) {

                    var hostname = response['hostName'];
                    var filesListHtml = response['filesListHtml'];
                    var connectionStatus = response['connectionStatus'];

                    if (connectionStatus) {
//                        showMessageBox(message);
                        $("#ftpDirectoryContentsId").html(filesListHtml);
                    } else {
                        showMessageBox("Password cannot be Empty", "error");
                    }

                } else {

                }
            }, error: function (result) {
                stopLoader();
                sessionTimeout(result);
            }
        });
    });

    $("#ftpDirectoriesId").on('expand', function (event) {
        var args = event.args;
        var item = $('#ftpDirectoriesId').jqxTree('getItem', args.element);
        var label = item.label;
        $.ajax({
            type: "GET",
            traditional: true,
            dataType: 'JSON',
            url: "getListOfFilesFromParentDir",
            cache: false,
            data: {
                ftpConnectionDetails: $("#ftpConnectionDetails").val(),
                parentDir: label
            },
            success: function (response) {
                stopLoader();
                if (response !== null && !jQuery.isEmptyObject(response)) {

                    var hostname = response['hostName'];
                    var directoriesList = response['directoriesList'];
                    var connectionStatus = response['connectionStatus'];

                    if (connectionStatus) {
//                        showMessageBox(message);
//                        $('#ftpDirectoriesId').jqxTree('addTo', directoriesList, item.element);
                        var childLi = $($(args.element).find("ul")[0]).find("li");
                        for (var i = 0; i < childLi.length; i++) {
                            $('#ftpDirectoriesId').jqxTree('removeItem', childLi[i]);
                        }

                        for (var i = 0; i < directoriesList.length; i++) {
                            $('#ftpDirectoriesId').jqxTree('addTo', {label: directoriesList[i], items: {label: "loading..."}}, item.element);
                        }

//                        $('#jqxTree').jqxTree('removeItem', element);
//                        var treeItems = $("#ftpDirectoriesId").jqxTree('getItems');
//                        $.each(childItems, function (i) {
//                            var childElement = this.element;
//                            $('#avaialableJobsTree').jqxTree('addTo', {html: "<div>loading...</div>"}, childElement);
//                        })
                    } else {
                        showMessageBox("Password cannot be Empty", "error");
                    }

                } else {

                }
            }, error: function (result) {
                stopLoader();
                sessionTimeout(result);
            }
        });
    });

}


function importFtpServerSheetData(filename, parentDir) {
    showLoader();
    filename = filename.replace(/\u00a0/g, " ");
    parentDir = parentDir.replace(/\u00a0/g, " ");
    var gridTable = $("#tableName").val();
    var gridId = $("#currentGridId").val();
    var tableName = gridTable ? gridTable : "O_RECORD_DATA_UNIFICATION_STG";
    var columnLabels = $("#gridTemplateColLabels").val();
    var columnNames = $("#gridTemplateColumns").val();
    $.ajax({
        type: 'POST',
        traditional: true,
        dataType: 'HTML',
        url: "downloadAndImportFileFromFTPServer",
        cache: false,
        data: {
            tableName: tableName,
            toDownloadFile: filename,
            columnLabels: columnLabels,
            columnNames: columnNames,
            ftpConnectionDetails: $("#ftpConnectionDetails").val(),
            parentDir: parentDir
        },
        success: function (response) {
            stopLoader();
            if (response !== null && response !== '' && response !== undefined) {
                showMessageBox(response);
                var buttonArray = [
                    {
                        text: 'ok',
                        click: function () {
                            showLoader();
                            gridoperations(gridId, 'refresh');
                        },
                        isCloseButton: true
                    }
                ];
                showPopUpWithButtonFunctionCall(response, buttonArray);
            }
        },
        error: function (response) {

        }
    });

}

function showMessageBox(message, messageType) {
    $("#messageBox").remove();
    $("body").append("<div id='messageBox'></div>");
    if (messageType != null && messageType == "error") {
        $("#messageBox").addClass("errorMessage");
    } else {
        $("#messageBox").addClass("successMessage");
    }
    $("#messageBox").html(message);
    $("#messageBox").delay(1000).fadeOut(1000);
}

function openDirectory(parentDir, superParentDir) {
    $.ajax({
        type: "GET",
        traditional: true,
        dataType: 'JSON',
        url: "getListOfFilesFromParentDir",
        cache: false,
        data: {
            ftpConnectionDetails: $("#ftpConnectionDetails").val(),
            parentDir: parentDir
        },
        success: function (response) {
            stopLoader();
            if (response !== null && !jQuery.isEmptyObject(response)) {

                var hostname = response['hostName'];
                var filesListHtml = response['filesListHtml'];
                var connectionStatus = response['connectionStatus'];

                if (connectionStatus) {
//                        showMessageBox(message);
                    $("#ftpDirectoryContentsId").html(filesListHtml);
                } else {
                    showMessageBox("Failed to Connect. Try again", "error");
                }

            } else {

            }
        }, error: function (result) {
            stopLoader();
            sessionTimeout(result);
        }
    });
}

function openFTPFileContextMenu(event, filename, parentDir) {

    var rightClick = isRightClick(event);
    if (rightClick) {
        var menuItems = "<li onclick=importFtpServerSheetData('" + filename + "','" + parentDir + "')>Import File Data</li>";
        var menuHeight = 30;
        $("#jqxMenu").remove();
        $("#ftpDirectoryContentsId").append("<div id='jqxMenu'><ul></ul></div>");
        $("#jqxMenu ul").html(menuItems);
        var contextMenu = $("#jqxMenu").jqxMenu({width: '140px', height: menuHeight + 'px', autoOpenPopup: false, mode: 'popup',
//            theme: 'energyblue'
        }); // ravi start
        var scrollTop = $("#ftpDirectoryContentsId").scrollTop();
        var scrollLeft = $("#ftpDirectoryContentsId").scrollLeft();

        contextMenu.jqxMenu('open', parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
        return false;
    }
}

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

//long description API start

function getDescription(userInput) {
    showLoader();
    $.ajax({
        url: 'generateDescription',
        dataType: 'html',
        type: 'post',
        data: {
            userInput: userInput
        },
        success: function (response) {
            stopLoader();
            let result = '';
            let modalWidthClass = '';
            if (response !== null && response !== '') {
                result = getResponseInfo(response, true);
                modalWidthClass = "modal-750";
            } else {
                result = getResponseInfo("Failed to fetch response.", false);
            }
            var modalObj = {
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Description Generation',
                body: result
            };
            var buttonArray = [
                {
                    text: labelObject['Close'] != null ? labelObject['Close'] : 'Close',
                    click: function () {
                    },
                    isCloseButton: true
                }
            ];
            modalObj['buttons'] = buttonArray;
            createModal("intiateRequestClass", modalObj);
            $(".modal-dialog").addClass("modal-xs " + modalWidthClass);
        },
        error: function (error) {

        }
    });
}

function getResponseInfo(response, status) {

    var image = {
        "success": "images/Success_Icons.svg",
        "error": "images/Failed_Icons.svg"
    };
    return `<div class='success-response' text-center>
                <img src='${(status) ? image['success'] : image['error']}' 
                     alt='${(status) ? "Success" : "Error"}'>
                <p class='response-text'>${response}</p>
            </div>`;
}

//long description API end
//
//
// Analysis API start
function getAnalysisForm(gridId, formId) {
    showLoader();
    $.ajax({
        url: "getEmptyForm",
        type: "post",
        data: {
            gridId: formId
        },
        success: function (response) {
            stopLoader();
            if (!isNullOrUndefined(response) && !jQuery.isEmptyObject(response)) {
                var r = JSON.parse(response);
                $("#analysisDialog").remove();
                $("body").append("<div id='analysisDialog'></div>");
                $('#analysisDialog').html(r['emptyFormStr']);
                $("#analysisDialog").dialog({resizable: false,
                    title: (labelObject['Input Parameters'] != null ? labelObject['Input Parameters'] : 'Input Parameters'),
                    modal: true,
                    height: "auto",
                    width: 800,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Run Analysis'] != null ? labelObject['Run Analysis'] : 'Run Analysis'),
                            click: function () {
                                setAssetCriticalRanking(gridId);
                                setParamsData(gridId, formId);
//                                setTimeout(function () {
//                                    setAssetCriticalRanking(gridId);
//                                }, 2000)

                                $(this).html("");
                                $(this).dialog("destroy");

                            }
                        }]
                });
                $(".ui-dialog").addClass("AnalysisPopupForm");
            }
        },
        error: function (error) {

        }
    });
}
function setAssetCriticalRanking(gridId) {
    showLoader();

    var gridRows = $("#" + gridId).jqxGrid('getrows');

    // Iterate through each row in the grid
    for (var i = 0; i < gridRows.length; i++) {
        var rowData = gridRows[i];
        // Calculate total for each row (Value1 + Value2)
        var total = parseInt(rowData.FAILURE_CONSEQUENCES_SCORE) * parseInt(rowData.IMPORTANCE_SCORE) * parseInt(rowData.RELIABILITY_SCORE) * parseInt(rowData.UTILIZATION_SCORE);
        // Update the 'Total' column in the row data
        gridRows[i].ASSET_CRITICALITY_INDEX = total;

        if (total == 0 || total <= 2) {
            gridRows[i].ASSET_CRITICALITY_RANKING = "Critical Equipment";
            gridRows[i].EQUIPMENT_RANKING = "3";

        } else if (total == 3 || total < 24) {
            gridRows[i].ASSET_CRITICALITY_RANKING = "Important Equipment";
            gridRows[i].EQUIPMENT_RANKING = "2";
        } else if (total > 25) {
            gridRows[i].ASSET_CRITICALITY_RANKING = "Ordinary Equipment";
            gridRows[i].EQUIPMENT_RANKING = "1";
        }

    }

    // Update the grid with the modified data
//    $("#"+gridId).jqxGrid('updatebounddata');
    stopLoader();

}
function setParamsData(gridId, formId) {
    var paramsObj = {};
    var analysisType = $("#analysisType").val();
    var BatchId = $("#BATCH_ID").val();
    var $form = $("#" + formId + "_InputTableForm").find("input");
//      var $form = $("#" + formId + "_InputTableForm").find(".item :input");
//    paramsObj['analysisType'] = analysisType;
//    paramsObj['analysisType'] = "ABC";
    paramsObj['tableName'] = $("#tableName").val();
    var columnArr = [];
    $form.each(function (index, element) {
        var textid = $(this).attr("id");
        var type = $(this).attr("type");
        var textval = $(this).val();
        if (type !== 'hidden') {
            if (textval !== null && textval !== '') {
                textval = textval.toUpperCase();
            }
        }
        if (textid === 'Plant' && textval.indexOf(",") > -1) {
            textval = textval.split(',');
            textval = JSON.stringify(textval);
            textval = textval.replace(/"/g, '').replace(/\'/g, '');
        }
        paramsObj[textid] = textval;
//            paramsObj['BATCH_ID'] = BatchId;
//        if (textval == 'VED' || textval == 'SDE') {
        paramsObj['BATCH_ID'] = BatchId;
//        }

        columnArr.push(textid);
    });
    if (validateAnalysis(analysisType)) {
        runAnalysis(gridId, paramsObj, columnArr);
    }
}

function validateAnalysis(a) {
    let source = '';
    let destination = '';
    switch (a) {
        case "ABC" :
            source = $("#A").val();
            destination = $("#C").val();
            break;
        case "HML" :
            source = $("#H").val();
            destination = $("#L").val();
            break;
        case "FSN" :
            break;
        case "XYZ" :
            break;
        case "SDE" :
            break;
    }
    if (+source > +destination) {
        var errorMessage = `${destination} Value must be greater than ${source}`;
        analysisFormPopup(errorMessage);
        return false;
    }
    return true;
}

function runAnalysis(gridId, p) {
    showLoader();
    $.ajax({
        url: "runAnalysis",
        type: "post",
        data: {
            requestBody: JSON.stringify(p),
            gridId: gridId
        },
        success: function (response) {
            stopLoader();
            var message = '';

            var resultobj = JSON.parse(response);
            var reports = resultobj['report']
            message = reports;
            $("#analysisResultObj").remove();
            $('body').append(`<input type='hidden' id='analysisResultObj' value='${response}'>`);

            if (reports != null && reports != '') {
                var modalObj = {
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Data Analysis',
                    body: '<iframe id="dataProfilingIframe" style="width:100%;height:100%;" srcdoc=""></iframe>'
                };
                var buttonArray = [
                    {
                        text: labelObject['Close'] != null ? labelObject['Close'] : 'Close',
                        click: function () {
                            gridoperations(gridId, "refresh");
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("intiateRequestClass", modalObj);
                $("#intiateRequestClass").addClass("vendorProfilingPopupHTML");
                $("#intiateRequestClass .modal-dialog").addClass("modal-xl");
                $("#dataProfilingIframe").attr("srcdoc", message);


            } else {
                if (!isNullOrUndefined(response)) {
                    message = getDialogDivAfterAnalasis();
                }

                var modalObj = {
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Data Analysis',
                    body: message
                };
                var buttonArray = [
                    {
                        text: labelObject['Close'] != null ? labelObject['Close'] : 'Close',
                        click: function () {
                            gridoperations(gridId, "refresh");
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("intiateRequestClass", modalObj);
                getChartAfterAnalyasis();
//                $(".modal-dialog").addClass("modal-xl");
                $(".modal-dialog").addClass("runAnalysisDilogCustomClass modal-md");
            }
        }
    });

}


function getChartAfterAnalyasis() {
    var chartDataStr = $("#analysisResultObj").val();
    if (chartDataStr != null && chartDataStr != undefined && chartDataStr != '') {
        var chartDataObj = JSON.parse(chartDataStr);
        var ChartTitle = Object.keys(chartDataObj[0]);
        var AnalysisData = chartDataObj[0]['CHART'];
        var labels = [];
        var countArr = [], percentArr = [];
        var totalrecords = AnalysisData['Total Count'];
        for (var key in AnalysisData) {
            if (key.includes("Count") && key != "Total Count") {
                countArr.push(AnalysisData[key]);
            }
            if (key.includes("Percentage")) {
                percentArr.push(AnalysisData[key]);
                labels.push(key.replace(new RegExp('Percentage', 'i'), '').replaceAll("_", ""));
            }
        }
        var layout = {
            title: AnalysisData['tittle'].replace("_", " "),
            height: 350,
            width: 350,

        };
        var config = {
            displayModeBar: false,
            displaylogo: false
        };
        var colorsArr = ["#EAC117", "#347C2C", "#806517", "#E66C2C", "#5C3317", "#C11B17"]
        var chartType = $('#analysisChartTypeDropdown').val();
        switch (chartType) {
            case 'pie':
                var data = [{
                        values: percentArr,
                        labels: labels,
                        type: 'pie',
                        textposition: 'inside',
                        hovertemplate: '%{label}: %{percent}<extra></extra>',
                        textinfo: 'percent+label',
                        marker: {
                            colors: colorsArr,
                        }
                    }];
                break;
            case 'bar':
                var data = [{
                        x: labels,
                        y: percentArr,
                        type: 'bar',
                        hovertemplate: '%{label}: %{y}%<extra></extra>',
                        textinfo: 'percent+label',
                        marker: {
                            color: colorsArr,
                        }
                    }];
                break;
            case "lines":
                var data = [{
                        x: labels,
                        y: percentArr,
                        mode: 'lines',
                        type: 'scatter',
                        hovertemplate: '%{x}: %{y}%<extra></extra>',
                        textinfo: 'percent+label',
                        line: {
                            color: colorsArr[0],
                        }
                    }];
                break;
            case "donut":
                var data = [{
                        values: percentArr,
                        labels: labels,
                        type: 'pie',
                        hole: 0.5,
                        hovertemplate: '%{label}: %{percent}<extra></extra>',
                        textinfo: 'percent+label',
                        marker: {
                            colors: colorsArr,
                        }
                    }];

                break;
            case "waterfall":
                var data = [{
                        x: labels,
                        y: percentArr,
                        type: 'waterfall',
                        orientation: 'v',
                        name: labels.join(""),
                        textposition: "outside",
                        hovertemplate: '%{x}: %{y}%<extra></extra>',
                        textinfo: 'percent+label',
                        increasing: {
                            'marker': {
                                'color': colorsArr[0],
                            }
                        }
                    }];
                break;
            case "boxplot":
                var data = [{
                        //x: labels,
                        y: percentArr,
                        boxpoints: 'all',
                        jitter: 0.3,
                        pointpos: -1.8,
                        type: 'box',
                        name: labels.join(""),
                        hovertemplate: '%{y}%<extra></extra>',
                        textinfo: 'percent+label',
                        marker: {
                            color: colorsArr[0],
                        }
                    }];
                break;
            case "scatter":
                var data = [{
                        x: labels,
                        y: percentArr,
                        mode: 'markers',
                        type: 'scatter',
                        hovertemplate: '%{x}: %{y}%<extra></extra>',
                        textinfo: 'percent+label',
                        marker: {
                            color: colorsArr[0],
                        }
                    }];
                break;
            case "AreaChart":
                var data = [{
                        x: labels,
                        y: percentArr,
                        fill: 'tozeroy',
                        type: 'scatter',
                        hovertemplate: '%{x}: %{y}<extra></extra>',
                        textinfo: 'percent+label',
                        fillcolor: colorsArr[0],
                    }];
            default :
                var data = [{
                        x: labels,
                        y: percentArr,
                        fill: 'tozeroy',
                        type: 'scatter',
                        hovertemplate: '%{x}: %{y}<extra></extra>',
                        textinfo: 'percent+label',
                        fillcolor: colorsArr[0],
                    }];
                break;

        }
        //data[0].marker={colors:["#EAC117","#347C2C","#806517","#E66C2C","#5C3317","#C11B17"]}; 
        Plotly.newPlot('visionVisualChartForAnalaysis', data, layout, config);
        convertPlotlyChartToBase64('visionVisualChartForAnalaysis');

    }
}
function getDialogDivAfterAnalasis() {
    var dialogBoxDiv = `<div style='display:flex;justify-content: space-between;width:100%;'>
      <select id="analysisChartTypeDropdown" onchange="getChartAfterAnalyasis()">
        <option value="pie">Pie Chart</option>
        <option value="bar">Bar Chart</option>
        <option value="lines">Line Chart</option>
        <option value="donut">Donut Chart</option>
        <option value="waterfall">Waterfall Chart</option>
        <option value="boxplot">Boxplot</option>
        <option value="scatter">Scatter Plot</option>
        <option value="AreaChart">Area Chart</option>
  </select>    
<div id='pdfReportForAnalysis'> <img src='images/pdficon.png'  class='imagepdfReportForAnalysis' onclick=getPdfReportAfterAnalysis('visionVisualChartForAnalaysis')  title='Pdf Report' style='width:20px;height:20px'/></div>
</div>
<div id='visionVisualChartForAnalaysis'></div>`;
    return dialogBoxDiv;
}
function getPdfReportAfterAnalysis(chartId) {
    $('#pdfbodyForm').remove();
    $('body').append(`<form action='downloadChartImagePDF' id='pdfbodyForm'  method='POST' target='_blank' style="display:none">
            <input type='hidden' id='imageData' name='imageData' value="">
            
        </form>`);

    //$(".chartDownloadDialog").attr("chartImageData");
    // $("#source-listbox").show();  
    var imageData = $("#" + chartId).attr("chartImageData");
    $("#imageData").val(imageData);
    //$("#dataIMG").attr("chartId", chartId);
    var chartFlag = $("#" + chartId).attr("jqwidgetChartFlag");
    var chartDataStr = $("#analysisResultObj").val();
    var chartDataObj = JSON.parse(chartDataStr);
    var ChartTitle = Object.keys(chartDataObj)[0];
    var analysisType1 = chartDataObj[0]['CHART']['tittle'];
    var AnalysisData = chartDataObj[0]['PDF'];
    var imageData = $("#" + chartId).attr("chartImageData");
    $("#imageData").val(imageData);
    for (var key in AnalysisData) {
        if (AnalysisData.hasOwnProperty(key)) {
            var inputType = "<input type='hidden' name='" + key + "' value='" + AnalysisData[key] + "'/>";
            $("#pdfbodyForm").append(inputType);
        }
    }
    // var selectedItemText = $("#selectedChart option:selected").text();
    var opt = 'PDF';//$("#selectedChart option:selected").val();
    var inputType = "";
    var analysisType = analysisType1.split('_')[0];//$("#analysisType").val();
    if (analysisType === 'ASSET') {
        analysisType = "ASSET CRITICALITY ASSESSMENT";
    }
    $("#analysisType").val(analysisType);

    inputType = "<input type='hidden' name='tableName' value='" + $("#tableName").val() + "'/>";
    $("#pdfbodyForm").append(inputType);
    inputType = "<input type='hidden' name='analysisType' value='" + $("#analysisType").val() + "'/>";
    $("#pdfbodyForm").append(inputType);
    inputType = "<input type='hidden' name='fromDate' value='" + $("#fromDate").val() + "'/>";
    $("#pdfbodyForm").append(inputType);
    inputType = "<input type='hidden' name='toDate' value='" + $("#toDate").val() + "'/>";
    $("#pdfbodyForm").append(inputType);
    inputType = "<input type='hidden' name='colsArray' value='" + $("#colsArray").val() + "'/>";
    $("#pdfbodyForm").append(inputType);
    inputType = "<input type='hidden' name='gridId' value='" + $("#gridId").val() + "'/>";
    $("#pdfbodyForm").append(inputType);

//     if (opt == "PNG") {
//         if (chartFlag != null && chartFlag != '' && chartFlag != undefined && chartFlag == 'Y') {
//             var imageContent = $("#" + chartId).jqxChart('saveAsJPEG', 'myChart.jpeg', "test", true);
//             imageContent = "data:image/png;base64," + imageContent;
//             var showImageChart = $("<a>").attr("href", imageContent).attr("download", "img.png").appendTo("body");
//             showImageChart[0].click();
//             showImageChart.remove();
//             $(this).dialog('close');
//         } else {
//             downloadChartAsImage(chartId);
// //                        $("#" + chartId).jqxChart('saveAsPNG', 'myChart.png', 'https://www.jqwidgets.com/export_server/export.php');
//             $(this).dialog('close');
//         }
//     }
    if (opt == "PDF") {
        if (chartFlag != null && chartFlag != '' && chartFlag != undefined && chartFlag == 'Y') {
            var imageContent;
            imageContent = "data:image/png;base64," + $("#" + chartId).jqxChart('saveAsJPEG', 'myChart.jpeg', "test", true);
            $("#" + chartId).attr("jqxChartImageData", imageContent);
            var jqxImageData1 = $("#" + chartId).attr("jqxChartImageData");
            $("#jqxImageData1").val(jqxImageData1);
            //showAsJQXPdfform();
            showAsPdfform();


        } else {
            showAsPdfform();

        }
    }

}
function convertPlotlyChartToBase64(chartId) {
    Plotly.toImage(chartId, {format: 'png', height: 500, width: 700})
            .then(function (uri) {

                $("#" + chartId).attr("chartImageData", uri);
            });
}

function importFileAjax(targetId, gridId) {
    var $selector = "#" + targetId;
    $($selector).unbind('change').on('change', function (event) {
        var files = event.target.files;
        loadFile(files[0], gridId);
        var $file = $($selector);
        $file.prev().remove();
        var inputTag = `<input type='file' name='${targetId}' id='${targetId}' style='display:none;'/>`;
        $file.before(inputTag);
    });
    $($selector).click();
}

function loadFile(files, gridId) {
    var table = $("#tableName").val();
    var fileFormData = new FormData();
    fileFormData.append("gridId", gridId);
    fileFormData.append("tableName", table);
    fileFormData.append("importFile", files);
    showLoader();
    $.ajax({
        url: 'importFileAjax',
        type: "POST",
        data: fileFormData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        success: function (response) {
            stopLoader();
            if (isNullOrUndefined(response) || response === '') {
                showMesg("Unable to Import File.");
                return;
            }
            var message = getResponseInfo(response, true);
            var modalObj = {
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Inventory Analysis',
                body: message
            };
            var buttonArray = [
                {
                    text: labelObject['Close'] != null ? labelObject['Close'] : 'Close',
                    click: function () {
                        gridoperations(gridId, "refresh");
                    },
                    isCloseButton: true
                }
            ];
            modalObj['buttons'] = buttonArray;
            createModal("intiateRequestClass", modalObj);
            $(".modal-dialog").addClass("modal-xs");
        },
        error: function (error) {

        }
    });
}
// Analysis API end

