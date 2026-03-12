var line;
var MAX_POINTS = 500;
var drawCount;
var value = 1;
var delta = -0.01;


var noOfCubes = 3;
var cubeSize = 100;

var scene, camera, renderer, labelRenderer;
var multiSelectCubeLabels = {};
var axisColumns = {};
var axisLabels = {};

var cubeClickFlag = false;


var selectedCubesArray = [];
$(document).ready(function () {
    $("#cubeIcon3dDiv").css("display", "block");
    $("#cubeIcon3d").css("display", "block");

})

function showCube() {
    $("#wait").css("display", "block");
    var errorCount = 0;
    var errorMessageStr = "";
    axisColumns = {}
    var xAxisObj = {};
    var xAxisColumn = $("#analyticsCubeXaxisInner").find('div').attr("data-column-name");
    var xAxisLabel = $("#xAxisCubeLabel").val();
    xAxisObj['column'] = xAxisColumn;
    xAxisObj['label'] = xAxisLabel;
    axisColumns['x'] = xAxisObj;

    var yAxisObj = {};
    var yAxisColumn = $("#analyticsCubeYaxisInner").find('div').attr("data-column-name");
    var yAxisLabel = $("#yAxisCubeLabel").val();
    yAxisObj['column'] = yAxisColumn;
    yAxisObj['label'] = yAxisLabel;
    axisColumns['y'] = yAxisObj;

    var zAxisObj = {};
    var zAxisColumn = $("#analyticsCubeZaxisInner").find('div').attr("data-column-name");
    var zAxisLabel = $("#zAxisCubeLabel").val();
    zAxisObj['column'] = zAxisColumn;
    zAxisObj['label'] = zAxisLabel;
    axisColumns['z'] = zAxisObj;

    if (!(xAxisColumn != null && xAxisColumn != '' && xAxisColumn != undefined)
            || !(xAxisLabel != null && xAxisLabel != '' && xAxisLabel != undefined))
    {
        errorCount++;
        errorMessage("#disanalyticsCubeXaxis", "Should not be null");
        var description = "X-Axis(Fact Column & Label)";
        errorMessageStr += "<tr><td>  " + '<p class="visionGenericTabStatusDialog">' + " " + '<span style="color:blue;">' + " " + description + "</span><b>:</b> Should not be null.</tr></td>";
    }
    if (!(yAxisColumn != null && yAxisColumn != '' && yAxisColumn != undefined)
            || !(yAxisLabel != null && yAxisLabel != '' && yAxisLabel != undefined))
    {
        errorCount++;
        errorMessage("#disanalyticsCubeYaxis", "Should not be null");
        var description = "Y-Axis(Fact Column & Label)";
        errorMessageStr += "<tr><td>  " + '<p class="visionGenericTabStatusDialog">' + " " + '<span style="color:blue;">' + " " + description + "</span><b>:</b> Should not be null.</tr></td>";
    }
    if (!(zAxisColumn != null && zAxisColumn != '' && zAxisColumn != undefined)
            || !(zAxisLabel != null && zAxisLabel != '' && zAxisLabel != undefined))
    {
        errorCount++;
        errorMessage("#disanalyticsCubeZaxis", "Should not be null");
        var description = "Z-Axis(Fact Column & Label)";
        errorMessageStr += "<tr><td>  " + '<p class="visionGenericTabStatusDialog">' + " " + '<span style="color:blue;">' + " " + description + "</span><b>:</b> Should not be null.</tr></td>";
    }


    axisLabels = {}
    var xlabelObj = {};
    xlabelObj['table'] = $("#analyticsCubeXLabelInner").find('div').attr("data-table-name");
    var xLabelColumn = $("#analyticsCubeXLabelInner").find('div').attr("data-column-name");
    xlabelObj['column'] = xLabelColumn;
    axisLabels['x'] = xlabelObj;

    var ylabelObj = {}
    ylabelObj['table'] = $("#analyticsCubeYLabelInner").find('div').attr("data-table-name");
    var yLabelColumn = $("#analyticsCubeYLabelInner").find('div').attr("data-column-name");
    ylabelObj['column'] = yLabelColumn;
    axisLabels['y'] = ylabelObj;

    var zlabelObj = {}
    zlabelObj['table'] = $("#analyticsCubeZLabelInner").find('div').attr("data-table-name");
    var zLabelColumn = $("#analyticsCubeZLabelInner").find('div').attr("data-column-name");
    zlabelObj['column'] = zLabelColumn;
    axisLabels['z'] = zlabelObj;

    if (!(xLabelColumn != null && xLabelColumn != '' && xLabelColumn != undefined))
    {
        errorCount++;
        errorMessage("#disanalyticsCubeXLabel", "Should not be null");
        var description = "X-Label(Dim Column)";
        errorMessageStr += "<tr><td>  " + '<p class="visionGenericTabStatusDialog">' + " " + '<span style="color:blue;">' + " " + description + "</span><b>:</b> Should not be null.</tr></td>";
    }
    if (!(yLabelColumn != null && yLabelColumn != '' && yLabelColumn != undefined))
    {
        errorCount++;
        errorMessage("#disanalyticsCubeYLabel", "Should not be null");
        var description = "Y-Label(Dim Column)";
        errorMessageStr += "<tr><td>  " + '<p class="visionGenericTabStatusDialog">' + " " + '<span style="color:blue;">' + " " + description + "</span><b>:</b> Should not be null.</tr></td>";
    }
    if (!(zLabelColumn != null && zLabelColumn != '' && zLabelColumn != undefined))
    {
        errorCount++;
        errorMessage("#disanalyticsCubeZLabel", "Should not be null");
        var description = "Z-Label(Dim Column)";
        errorMessageStr += "<tr><td>  " + '<p class="visionGenericTabStatusDialog">' + " " + '<span style="color:blue;">' + " " + description + "</span><b>:</b> Should not be null.</tr></td>";
    }

    var factTable = $("#analyticsCubeXaxisInner").find('div').attr("data-table-name");
    var cubeValueCol = []; //cube changes
    $("#VisionCubeValueTableId tbody tr").each(function () {
        var tdArray = this.cells;
        if (tdArray != null && tdArray.length != 0) {
            var cubeValueObj = {};
            var cubeValueDiv = $(tdArray[1]).find("div");
            var cubeValueColumn;
            $.each(cubeValueDiv, function (index) {
                cubeValueColumn = $(this).attr("data-column-name");
            })
            var cubeValueLabel = $(tdArray[2]).find("input").val();
            var cubeValueCurrency = $(tdArray[3]).find("input").val();
            cubeValueObj['column'] = cubeValueColumn;
            cubeValueObj['label'] = cubeValueLabel;
            cubeValueObj['currency'] = cubeValueCurrency;
            cubeValueCol.push(cubeValueObj);
        }
    });
    cubeValueCol = JSON.stringify(cubeValueCol);

    multiSelectCubeLabels = {};
    var aggId = "B940D2E1679C45A6E053210110ACAAA6";
    var cubeTitleSelectBox = $("#visionCubeTitleSelectBoxTypesId").val();
    var chartTitle = $("#cubeTitle").val();
    if (chartTitle != null && chartTitle != '' && chartTitle != undefined) {
        if (xAxisLabel != null && xAxisLabel != '' && xAxisLabel != undefined && yAxisLabel != null && yAxisLabel != '' && yAxisLabel != undefined
                && zAxisLabel != null && zAxisLabel != '' && zAxisLabel != undefined) {
            chartTitle = chartTitle + "/" + xAxisLabel + "/" + yAxisLabel + "/" + zAxisLabel;
            $("#cubeTitle").val(chartTitle);
        }
    }

    if (!(chartTitle != null && chartTitle != '')) {
        errorCount++;
        var cubeTitle = "Cube Title";
        errorMessage("#discubeTitle", "Should not be null.Please select Title");
        errorMessageStr += "<tr><td>  " + '<p class="visionGenericTabStatusDialog">' + " " + '<span style="color:blue;">' + " " + cubeTitle + "</span><b>:</b> Should not be null.</tr></td>";
    }

    var chartOptAllObj = {};
    var colorX = $("#BAR_CHART_CUBE_X_AXIS_COLORS").val();
    var colorY = $("#BAR_CHART_CUBE_Y_AXIS_COLORS").val();
    var colorZ = $("#BAR_CHART_CUBE_Z_AXIS_COLORS").val();
    chartOptAllObj['x'] = colorX;
    chartOptAllObj['y'] = colorY;
    chartOptAllObj['z'] = colorZ;
    if (errorCount == 0) {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'JSON',
            cache: false,
            url: "getCubeLabels",
            data: {
                factTable: factTable,
                axisColumns: JSON.stringify(axisColumns),
                axisLabels: JSON.stringify(axisLabels),
                chartTitle: chartTitle,
                colorsObj: JSON.stringify(chartOptAllObj),
                cubeTitleSelectBox: cubeTitleSelectBox
            },
            success: function (response) {
                var labelsArray = response['labelsObject'];

                $("#wait").css("display", "none");
                var chartId = "cubeContainer1";
                $("#designAreaAnalyticsButtonsDiv").empty();

                $("#designAreaAnalyticsDisplayDiv").empty();

                $("#designAreaAnalyticsDisplayDiv").html("<div id='cubeContainer1'></div>");
                $("#cubeContainer1").html("<div style='right:0;' class='cubeControlButtonsDiv'><button id='showReport' class='cubeControlButtons' onclick=showReport()> Show Report</button>\n\
                                                        <button  class='cubeControlButtons' id='resetCubes' onClick=resetCubes('','" + chartId + "')> Reset</button></div>")


                scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera(45, 2.5, 1, 10000);
                renderer = new THREE.WebGLRenderer({antialias: true});
                renderer.setSize(window.innerWidth, window.innerHeight);
                scene.background = new THREE.Color(0xFFFFFF);
                document.querySelector("#cubeContainer1").appendChild(renderer.domElement);
                camera.position.set(1800 * 5, 1000 * 5, 600 * 5);


                var raycaster = new THREE.Raycaster();
                var mouse = new THREE.Vector2();
                const axesHelper = new THREE.AxesHelper((noOfCubes + 5) * 100);

                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setSize(window.innerWidth, window.innerHeight);
                labelRenderer = new CSS2DRenderer();
                labelRenderer.setSize(window.innerWidth, window.innerHeight);
                labelRenderer.domElement.style.position = 'absolute';
                labelRenderer.domElement.style.top = '0px';
                document.querySelector("#cubeContainer1").appendChild(labelRenderer.domElement);
                var domEvents = new THREEx.DomEvents(camera, labelRenderer.domElement);
                var axisArray = [];
                var xlen = labelsArray['x'].length;
                var ylen = labelsArray['y'].length;
                var zlen = labelsArray['z'].length;

                var xIndex = 1;
                for (var j = -xlen / 2; j < xlen / 2; j++) {
                    var sign = j / Math.abs(j);
                    var elem = document.createElement('div');
                    elem.className = 'label';
                    elem.style.marginTop = '-1em';
                    var Label = new CSS2DObject(elem);
                    var xpoints = [];
                    if (j != (xlen / 2 - 1)) {
                        xpoints.push(new THREE.Vector3((j - 0.5) * cubeSize, -(ylen / 2 + 0.5) * cubeSize, (zlen / 2 + 0.5) * cubeSize));
                        xpoints.push(new THREE.Vector3((j + 0.5) * cubeSize, -(ylen / 2 + 0.5) * cubeSize, (zlen / 2 + 0.5) * cubeSize));
                    } else {

                        xpoints.push(new THREE.Vector3((j - 0.5) * cubeSize, -(ylen / 2 + 0.5) * cubeSize, (zlen / 2 + 0.5) * cubeSize));
                        xpoints.push(new THREE.Vector3((j + 0.5) * cubeSize * 2, -(ylen / 2 + 0.5) * cubeSize, (zlen / 2 + 0.5) * cubeSize));
                    }
                    var xmaterial = new THREE.LineBasicMaterial({color: 0x0071C5});
                    var xgeometry = new THREE.BufferGeometry().setFromPoints(xpoints);
                    var xaxis = new THREE.Line(xgeometry, xmaterial);
                    scene.add(xaxis);
                    Label.position.set((j + 0.5) * cubeSize, -(ylen / 2 + 0.5) * cubeSize, (zlen / 2 + 0.5) * cubeSize);
                    elem.textContent = labelsArray['x'][xIndex - 1][0];
                    elem.id = chartId + "_x_" + labelsArray['x'][xIndex - 1][1];
                    xaxis.add(Label);
                    axisArray.push(xaxis)
                    xIndex++;
                }


                var yIndex = 1;
                for (var j = -(ylen / 2); j < ylen / 2; j++) {

                    var elem = document.createElement('div');
                    elem.className = 'label';
                    elem.style.marginTop = '-1em';
                    var Label = new CSS2DObject(elem);
                    var ypoints = [];
                    if (j != (ylen / 2 - 1)) {

                        ypoints.push(new THREE.Vector3(-(xlen / 2 + 0.5) * cubeSize, (j - 0.5) * cubeSize, (zlen / 2 + 0.5) * cubeSize));
                        ypoints.push(new THREE.Vector3(-(xlen / 2 + 0.5) * cubeSize, (j + 0.5) * cubeSize, (zlen / 2 + 0.5) * cubeSize));
                    } else {

                        ypoints.push(new THREE.Vector3(-(xlen / 2 + 0.5) * cubeSize, (j - 0.5) * cubeSize, (zlen / 2 + 0.5) * cubeSize));
                        ypoints.push(new THREE.Vector3(-(xlen / 2 + 0.5) * cubeSize, (j + 0.5) * cubeSize * 1.5, (zlen / 2 + 0.5) * cubeSize));
                    }

                    var ymaterial = new THREE.LineBasicMaterial({color: 0x0071C5});
                    var ygeometry = new THREE.BufferGeometry().setFromPoints(ypoints);
                    var yaxis = new THREE.Line(ygeometry, ymaterial);
                    scene.add(yaxis);
                    Label.position.set(-(xlen / 2 + 0.5) * cubeSize, (j + 0.5) * cubeSize - 20, (zlen / 2 + 0.5) * cubeSize);
                    elem.textContent = labelsArray['y'][yIndex - 1][0];
                    elem.id = chartId + "_y_" + labelsArray['y'][yIndex - 1][1];
                    yaxis.add(Label);
                    axisArray.push(yaxis)
                    yIndex++;

                }


                var zIndex = 1;
                for (var j = -(zlen / 2); j < zlen / 2; j++) {
                    var noOfCubes = labelsArray['x'].length;
                    var elem = document.createElement('div');
                    elem.className = 'label';
                    elem.style.marginTop = '-1em';
                    var Label = new CSS2DObject(elem);
                    var zpoints = [];
                    if (j != (zlen / 2 - 1)) {

                        zpoints.push(new THREE.Vector3(-(xlen / 2 + 0.5) * cubeSize + noOfCubes * cubeSize + cubeSize, -(ylen / 2 + 0.5) * cubeSize, -(j - 0.5) * cubeSize));
                        zpoints.push(new THREE.Vector3(-(xlen / 2 + 0.5) * cubeSize + noOfCubes * cubeSize + cubeSize, -(ylen / 2 + 0.5) * cubeSize, -(j + 0.5) * cubeSize));
                    } else {

                        zpoints.push(new THREE.Vector3(-(xlen / 2 + 0.5) * cubeSize + noOfCubes * cubeSize + cubeSize, -(ylen / 2 + 0.5) * cubeSize, -(j - 0.5) * cubeSize));
                        zpoints.push(new THREE.Vector3(-(xlen / 2 + 0.5) * cubeSize + noOfCubes * cubeSize + cubeSize, -(ylen / 2 + 0.5) * cubeSize, -(j + 0.5) * cubeSize * 1.5));
                    }

                    var zmaterial = new THREE.LineBasicMaterial({color: 0x0071C5});
                    var zgeometry = new THREE.BufferGeometry().setFromPoints(zpoints);
                    var zaxis = new THREE.Line(zgeometry, zmaterial);
                    scene.add(zaxis);
                    Label.position.set(-(xlen / 2 + 0.5) * cubeSize + noOfCubes * cubeSize + cubeSize, -(ylen / 2 + 0.5) * cubeSize, -(j + 0.5) * cubeSize);
//                        Label.position.set(noOfCubes * cubeSize + cubeSize, (j/Math.abs(j))* (ylen/2)* cubeSize, -j * cubeSize);
                    elem.textContent = labelsArray['z'][zIndex - 1][0];
                    elem.id = chartId + "_z_" + labelsArray['z'][zIndex - 1][1];
                    zaxis.add(Label);
                    axisArray.push(zaxis)
                    zIndex++;

                }


                var geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
                // material
                material = new THREE.MeshBasicMaterial({
                    color: $("#BAR_CHART_CUBE_CLICK_AXIS_COLORS").val(),
                    vertexColors: true,
                    opacity: 0.5,
                    transparent: true
                });
                if (chartOptAllObj != null && !jQuery.isEmptyObject(chartOptAllObj))
                {
                    red = new THREE.Color(chartOptAllObj['x']);
                    green = new THREE.Color(chartOptAllObj['y']);
                    blue = new THREE.Color(chartOptAllObj['z']);
                } else
                {
                    red = new THREE.Color(0x0071C5);
                    green = new THREE.Color(0x99e6ff);
                    blue = new THREE.Color(0xEAF4FD);
                }
                var colors = [red, green, blue];
                for (var i = 0; i < 3; i++) {
                    geometry.faces[4 * i].color = colors[i];
                    geometry.faces[4 * i + 1].color = colors[i];
                    geometry.faces[4 * i + 2].color = colors[i];
                    geometry.faces[4 * i + 3].color = colors[i];
                }

                var relativeX = 0;
                var relativeY = 0;
                var relativeZ = 0;
                for (var i = -(xlen / 2); i < xlen / 2; i++) {

                    relativeX = relativeX + cubeSize;
                    relativeY = 0;
                    relativeZ = 0;
                    for (var j = -(ylen / 2); j < ylen / 2; j++) {
                        relativeY = relativeY + cubeSize;
                        relativeZ = 0;
                        for (var k = -(zlen / 2); k < zlen / 2; k++) {
                            relativeZ = relativeZ - cubeSize;
                            var cube = new THREE.Mesh(geometry, material);
                            scene.add(cube);
                            var edges = new THREE.EdgesGeometry(geometry);
                            line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x000000, opacity: 0.5, transparent: true}));
                            cube.add(line);
                            cube.position.set((i + 0.5) * cubeSize, (j + 0.5) * cubeSize, -(k + 0.5) * cubeSize);
                            var relativePosition = {};
                            relativePosition.x = relativeX;
                            relativePosition.y = relativeY;
                            relativePosition.z = relativeZ;

                            cube.userData['relativePosition'] = relativePosition;
                            // CLICK EVENT----->>>>>

                            domEvents.addEventListener(cube, 'click', function (event) {
                                console.log("clicked");
                                event.origDomEvent.preventDefault();
                                cubeClickFlag = true;
                                material.opacity = 0.5;
                                var originalcubePosition = event.target.position;
                                var cubePosition = event.target.userData['relativePosition'];
//                                    cubePosition.x = cubePosition.x+300;
//                                    cubePosition.y = cubePosition.y+300;
//                                    cubePosition.z = cubePosition.z-300;

                                var xindex = Math.abs((cubePosition.x) / cubeSize);
                                var xlabel = labelsArray['x'][xindex - 1][0];
                                var xlabelId = labelsArray['x'][xindex - 1][1];

                                var yindex = Math.abs((cubePosition.y) / cubeSize);
                                var ylabel = labelsArray['y'][yindex - 1][0];
                                var ylabelId = labelsArray['y'][yindex - 1][1];

                                var zindex = Math.abs((cubePosition.z) / cubeSize);
                                var zlabel = labelsArray['z'][zindex - 1][0];
                                var zlabelId = labelsArray['z'][zindex - 1][1];

                                alert("X::" + xlabel + "  Y::" + ylabel + "  Z::" + zlabel);


                                var clickedLabels = {}
                                clickedLabels['x'] = xlabel;
                                clickedLabels['y'] = ylabel;
                                clickedLabels['z'] = zlabel;

                                var clickedLabelIds = {}
                                clickedLabelIds['x'] = xlabelId;
                                clickedLabelIds['y'] = ylabelId;
                                clickedLabelIds['z'] = zlabelId;

                                var firstSelectedCubeLebel = {};

                                if (event.origDomEvent.shiftKey) {

                                    var multiSelectCubeLabel = multiSelectCubeLabels[chartId];
                                    if (multiSelectCubeLabel == null || jQuery.isEmptyObject(multiSelectCubeLabel)) {
                                        multiSelectCubeLabel = {};
                                    }

                                    var selectedCubesArray = selectedCubesArrayObj[chartId];
                                    if (selectedCubesArray == null || selectedCubesArray.length == 0) {
                                        selectedCubesArray = [];
                                    }

                                    if (multiSelectCubeLabel != null && Object.keys(multiSelectCubeLabel).length == 1) {
                                        firstSelectedCubeLebel = multiSelectCubeLabel
                                        var matchCount = 0;
                                        var values = Object.values(multiSelectCubeLabel)[0];
                                        var staticAxi = [];

                                        var sliceAxis;
                                        if (values['x'] == clickedLabelIds['x']) {
                                            matchCount++;
                                            staticAxi.push('x');
                                        } else {
                                            sliceAxis = 'x';
                                        }
                                        if (values['y'] == clickedLabelIds['y']) {
                                            matchCount++;
                                            staticAxi.push('y');
                                        } else {
                                            sliceAxis = 'y';
                                        }
                                        if (values['z'] == clickedLabelIds['z']) {
                                            matchCount++;
                                            staticAxi.push('z');
                                        } else {
                                            sliceAxis = 'z';
                                        }
                                        if (matchCount == 5) {

                                            $(".label").removeClass("highLightLabel");

                                            $.each(selectedCubesArray, function (index) {

                                                scene.remove(selectedCubesArray[index]);
                                                $(".cubeLabel").remove();
                                            })


                                            labelsArray[sliceAxis];
//                                                var selectedCubesArray = selectedCubesArrayObj[chartId];
//                                                 if (selectedCubesArray==null || selectedCubesArray.length==0){
//                                                     selectedCubesArray = [];
//                                                 }
                                            var selectCubeLabels = {};
                                            var addOrder;
                                            var sliceAxisPos;
                                            var newCubePosition = {};
                                            var cubeReached = false;
                                            for (var i = 0; i < labelsArray[sliceAxis].length; i++) {

                                                if (!cubeReached) {
                                                    if (i == 0) {
                                                        var yellowCube = selectedCubesArray[0];
                                                        newCubePosition = yellowCube.position;
                                                        sliceAxisPos = newCubePosition[sliceAxis];
                                                        if (Math.abs(cubePosition[sliceAxis]) - Math.abs(newCubePosition[sliceAxis]) >= 0) {
                                                            addOrder = "plus";
                                                        } else {
                                                            addOrder = "minus";
                                                        }

                                                    } else {
                                                        if (addOrder == "plus") {
                                                            newCubePosition[sliceAxis] = sliceAxisPos + (sliceAxisPos / Math.abs(sliceAxisPos) * i * cubeSize);
                                                            if (newCubePosition[sliceAxis] == event.target.position[sliceAxis]) {
                                                                cubeReached = true;
                                                            }
                                                        } else if (addOrder == "minus") {

                                                            newCubePosition[sliceAxis] = sliceAxisPos - (sliceAxisPos / Math.abs(sliceAxisPos) * i * cubeSize);
                                                            if (newCubePosition[sliceAxis] == event.target.position[sliceAxis]) {
                                                                cubeReached = true;
                                                            }
                                                        }

                                                    }
                                                    if (sliceAxis == 'z') {
                                                        var sliceAxisindex = Math.abs((newCubePosition[sliceAxis]) / cubeSize);
                                                    } else {
                                                        var sliceAxisindex = Math.abs((newCubePosition[sliceAxis]) / cubeSize);
                                                    }

                                                    var sliceAxislabel = labelsArray[sliceAxis][sliceAxisindex - 1][0];
                                                    var sliceAxislabelId = labelsArray[sliceAxis][sliceAxisindex - 1][1];

                                                    var staticAxis1 = staticAxi[0];
                                                    if (staticAxis1 == 'z') {
                                                        var staticAxis1index = Math.abs((newCubePosition[staticAxis1]) / cubeSize);
                                                    } else {
                                                        var staticAxis1index = Math.abs((newCubePosition[staticAxis1]) / cubeSize);
                                                    }

                                                    var staticAxis1label = labelsArray[staticAxis1][staticAxis1index - 1][0];
                                                    var staticAxis1labelId = labelsArray[staticAxis1][staticAxis1index - 1][1];

                                                    var staticAxis2 = staticAxi[1];
                                                    if (staticAxis2 == 'z') {
                                                        var staticAxis2index = Math.abs((newCubePosition[staticAxis2]) / cubeSize);
                                                    } else {
                                                        var staticAxis2index = Math.abs((newCubePosition[staticAxis2]) / cubeSize);
                                                    }

                                                    var staticAxis2label = labelsArray[staticAxis2][staticAxis2index - 1][0];
                                                    var staticAxis2labelId = labelsArray[staticAxis2][staticAxis2index - 1][1];

                                                    var labels = {}
                                                    labels[sliceAxis] = sliceAxislabel;
                                                    labels[staticAxis1] = staticAxis1label;
                                                    labels[staticAxis2] = staticAxis2label;

                                                    var labelIds = {}
                                                    labelIds[sliceAxis] = sliceAxislabelId;
                                                    labelIds[staticAxis1] = staticAxis1labelId;
                                                    labelIds[staticAxis2] = staticAxis2labelId;

//                                                        selectCubeLabels[sliceAxislabelId + staticAxis1labelId + staticAxis2labelId] = labelIds;
                                                    selectCubeLabels[newCubePosition.x + "," + newCubePosition.y + "," + newCubePosition.z] = labelIds;
//                                                       selectCubeLabels[newCubePosition[sliceAxis] +","+ newCubePosition[staticAxis1] +","+ newCubePosition[staticAxis2]] = labelIds;

                                                    var Ngeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
                                                    var Nmaterial = new THREE.MeshBasicMaterial({
                                                        color: "#FFFF00",
                                                        vertexColors: true,
                                                        opacity: 0.6,
                                                        transparent: true
                                                    });

                                                    var ncube = new THREE.Mesh(Ngeometry, Nmaterial);
                                                    ncube.position.set(newCubePosition.x - ((xlen / 2 * cubeSize) + cubeSize / 2), newCubePosition.y - ((ylen / 2 * cubeSize) + cubeSize / 2), newCubePosition.z + ((zlen / 2 * cubeSize) + cubeSize / 2));
                                                    scene.add(ncube);
                                                    selectedCubesArray.push(ncube);

                                                }
                                            }

                                            $.each(selectCubeLabels, function (indx) {
                                                var selectedLableIds = this;
                                                $("#" + chartId + "_" + sliceAxis + "_" + selectedLableIds[sliceAxis]).addClass("highLightLabel");
                                            })

                                            selectCubeLabels['lineSlice'] = 'Y';
                                            multiSelectCubeLabels[chartId] = selectCubeLabels;
                                            selectedCubesArrayObj[chartId] = selectedCubesArray;



                                        } else {
                                            //single dice code 
                                            //showDialog("Incorrect Selection");


                                            var selectedCubes = multiSelectCubeLabels;
                                            var pos = cubePosition;
                                            var prevCubePosArr = Object.keys(multiSelectCubeLabels)[0].split(",");
                                            var prevCubePos = {};
                                            prevCubePos['x'] = parseInt(prevCubePosArr[0]);
                                            prevCubePos['y'] = parseInt(prevCubePosArr[1]);
                                            prevCubePos['z'] = parseInt(prevCubePosArr[2]);

                                            resetCubes("", chartId);


                                            var zDiff = cubePosition.z / 100 - prevCubePos['z'] / 100;
                                            var yDiff = cubePosition.y / 100 - prevCubePos['y'] / 100;
                                            var xDiff = cubePosition.x / 100 - prevCubePos['x'] / 100;
                                            var zeroDiffCount = 0;
                                            if (zDiff == 0) {
                                                zeroDiffCount++;
                                            }
                                            if (yDiff == 0) {
                                                zeroDiffCount++;
                                            }
                                            if (xDiff == 0) {
                                                zeroDiffCount++;
                                            }
                                            if (zeroDiffCount == 2) {
                                                multiSelectCubeLabels['lineSlice'] = 'Y';
                                            }
                                            var colorCode = "";
                                            if (zeroDiffCount == 0)
                                            {
                                                colorCode = $("#BAR_CHART_CUBE_DICE_AXIS_COLORS").val();
                                            } else if (zeroDiffCount == 1)
                                            {
                                                colorCode = $("#BAR_CHART_CUBE_SLICE_AXIS_COLORS").val();
                                            } else if (zeroDiffCount == 2)
                                            {
                                                colorCode = $("#BAR_CHART_CUBE_SLICE_AXIS_COLORS").val();
                                            }
                                            for (var k = 0; k <= Math.abs(zDiff); k++) {
                                                for (var j = 0; j <= Math.abs(yDiff); j++) {

                                                    for (var i = 0; i <= Math.abs(xDiff); i++) {


                                                        var currentCubePos = {};

                                                        currentCubePos['x'] = prevCubePos.x + ((xDiff != 0) ? (xDiff / Math.abs(xDiff) * i * 100) : 0);
                                                        currentCubePos['y'] = prevCubePos.y + ((yDiff != 0) ? (yDiff / Math.abs(yDiff) * j * 100) : 0);
                                                        currentCubePos['z'] = prevCubePos.z + ((zDiff != 0) ? (zDiff / Math.abs(zDiff) * k * 100) : 0);

                                                        var xindex = Math.abs(currentCubePos.x / cubeSize);
                                                        var xlabel = labelsArray['x'][xindex - 1][0];
                                                        var xlabelId = labelsArray['x'][xindex - 1][1];

                                                        var yindex = Math.abs(currentCubePos.y / cubeSize);
                                                        var ylabel = labelsArray['y'][yindex - 1][0];
                                                        var ylabelId = labelsArray['y'][yindex - 1][1];

                                                        var zindex = Math.abs(currentCubePos.z / cubeSize);
                                                        var zlabel = labelsArray['z'][zindex - 1][0];
                                                        var zlabelId = labelsArray['z'][zindex - 1][1];

                                                        alert("X::" + xlabel + "  Y::" + ylabel + "  Z::" + zlabel);
                                                        var clickedLabels = {}
                                                        clickedLabels['x'] = xlabel;
                                                        clickedLabels['y'] = ylabel;
                                                        clickedLabels['z'] = zlabel;
                                                        var clickedLabelIds = {}
                                                        clickedLabelIds['x'] = xlabelId;
                                                        clickedLabelIds['y'] = ylabelId;
                                                        clickedLabelIds['z'] = zlabelId;

//                                                          multiSelectCubeLabels[xlabelId + ylabelId + zlabelId] = clickedLabelIds;
                                                        multiSelectCubeLabels[currentCubePos.x + "," + currentCubePos.y + "," + currentCubePos.z] = clickedLabelIds;
                                                        multiSelectCubeLabels['Dimension'] = '3D';

                                                        $("#" + chartId + "_x_" + clickedLabelIds['x']).addClass("highLightLabel");
                                                        $("#" + chartId + "_y_" + clickedLabelIds['y']).addClass("highLightLabel");
                                                        $("#" + chartId + "_z_" + clickedLabelIds['z']).addClass("highLightLabel");

                                                        material.opacity = 0.1;

                                                        var Ngeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
                                                        var Nmaterial = new THREE.MeshBasicMaterial({
                                                            color: colorCode,
                                                            vertexColors: true,
                                                            opacity: 0.6,
                                                            transparent: true
                                                        });

                                                        var ncube = new THREE.Mesh(Ngeometry, Nmaterial);

                                                        ncube.position.set(currentCubePos.x - ((xlen / 2 * cubeSize) + cubeSize / 2), currentCubePos.y - ((ylen / 2 * cubeSize) + cubeSize / 2), currentCubePos.z + ((zlen / 2 * cubeSize) + cubeSize / 2));
                                                        scene.add(ncube);
                                                        selectedCubesArray.push(ncube);
                                                    }
                                                }
                                            }
//                                                }



                                            multiSelectCubeLabels[chartId] = multiSelectCubeLabels;

                                            selectedCubesArrayObj[chartId] = selectedCubesArray;
                                            stopLoader();
                                            //return false;
                                            //single dice code 
                                        }



                                    }
                                    // ravi dice code start

                                    // ravi dice code end
                                    else {
                                        resetCubes("", chartId);
                                        var multiSelectCubeLabel = multiSelectCubeLabels[chartId];
                                        if (multiSelectCubeLabel == null || jQuery.isEmptyObject(multiSelectCubeLabel)) {
                                            multiSelectCubeLabel = {};
                                        }

                                        var selectedCubesArray = selectedCubesArrayObj[chartId];
                                        if (selectedCubesArray == null || selectedCubesArray.length == 0) {
                                            selectedCubesArray = [];
                                        }

                                        multiSelectCubeLabel = {};
                                        selectedCubesArray = [];
//                                            multiSelectCubeLabels[xlabelId + ylabelId + zlabelId] = clickedLabelIds;
                                        multiSelectCubeLabel[cubePosition.x + "," + cubePosition.y + "," + cubePosition.z] = clickedLabelIds;

                                        var Ngeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
                                        var Nmaterial = new THREE.MeshBasicMaterial({
                                            color: $("#BAR_CHART_CUBE_CLICK_AXIS_COLORS").val(),
                                            vertexColors: true,
                                            opacity: 0.6,
                                            transparent: true
                                        });


                                        var ncube = new THREE.Mesh(Ngeometry, Nmaterial);
                                        ncube.position.set(cubePosition.x - ((xlen / 2 * cubeSize) + cubeSize / 2), cubePosition.y - ((ylen / 2 * cubeSize) + cubeSize / 2), cubePosition.z + ((zlen / 2 * cubeSize) + cubeSize / 2));
                                        ncube.position.setscene.add(ncube);
                                        multiSelectCubeLabels[chartId] = multiSelectCubeLabel;

                                        selectedCubesArray.push(ncube);
                                        selectedCubesArrayObj[chartId] = selectedCubesArray;

                                    }
                                } else if (event.origDomEvent.ctrlKey) {

                                    var multiSelectCubeLabel = multiSelectCubeLabels[chartId];
                                    if (multiSelectCubeLabel == null || jQuery.isEmptyObject(multiSelectCubeLabel)) {
                                        multiSelectCubeLabel = {};
                                    }

                                    var selectedCubesArray = selectedCubesArrayObj[chartId];
                                    if (selectedCubesArray == null || selectedCubesArray.length == 0) {
                                        selectedCubesArray = [];
                                    }

//                                        multiSelectCubeLabels[xlabelId + ylabelId + zlabelId] = clickedLabelIds;
                                    multiSelectCubeLabel[cubePosition.x + "," + cubePosition.y + "," + cubePosition.z] = clickedLabelIds;

                                    var Ngeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
                                    var Nmaterial = new THREE.MeshBasicMaterial({
                                        color: $("#BAR_CHART_CUBE_CLICK_AXIS_COLORS").val(),
                                        vertexColors: true,
                                        opacity: 0.6,
                                        transparent: true
                                    });


                                    var ncube = new THREE.Mesh(Ngeometry, Nmaterial);
                                    ncube.position.set(cubePosition.x - ((xlen / 2 * cubeSize) + cubeSize / 2), cubePosition.y - ((ylen / 2 * cubeSize) + cubeSize / 2), cubePosition.z + ((zlen / 2 * cubeSize) + cubeSize / 2));

                                    scene.add(ncube);
                                    multiSelectCubeLabels[chartId] = multiSelectCubeLabel;

                                    selectedCubesArray.push(ncube);
                                    selectedCubesArrayObj[chartId] = selectedCubesArray;

                                } else {
                                    resetCubes("", chartId);
                                    var multiSelectCubeLabel = multiSelectCubeLabels[chartId];
                                    if (multiSelectCubeLabel == null || jQuery.isEmptyObject(multiSelectCubeLabel)) {
                                        multiSelectCubeLabel = {};
                                    }

                                    var selectedCubesArray = selectedCubesArrayObj[chartId];
                                    if (selectedCubesArray == null || selectedCubesArray.length == 0) {
                                        selectedCubesArray = [];
                                    }


                                    multiSelectCubeLabel = {};
//                                        multiSelectCubeLabels[xlabelId + ylabelId + zlabelId] = clickedLabelIds;
                                    multiSelectCubeLabel[cubePosition.x + "," + cubePosition.y + "," + cubePosition.z] = clickedLabelIds;

                                    var Ngeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
                                    var Nmaterial = new THREE.MeshBasicMaterial({
                                        color: $("#BAR_CHART_CUBE_CLICK_AXIS_COLORS").val(),
                                        vertexColors: true,
                                        opacity: 0.6,
                                        transparent: true
                                    });


                                    var ncube = new THREE.Mesh(Ngeometry, Nmaterial);
                                    ncube.position.set(cubePosition.x - ((xlen / 2 * cubeSize) + cubeSize / 2), cubePosition.y - ((ylen / 2 * cubeSize) + cubeSize / 2), cubePosition.z + ((zlen / 2 * cubeSize) + cubeSize / 2));

                                    scene.add(ncube);
                                    multiSelectCubeLabels[chartId] = multiSelectCubeLabel;

                                    selectedCubesArray.push(ncube);
                                    selectedCubesArrayObj[chartId] = selectedCubesArray;
                                }

                                // for slice or Dice

                                var lineSlice = multiSelectCubeLabels[chartId]['lineSlice'];


                                var lineSliceWhrClause = "";
                                var xWhereClause = "";
                                var yWhereClause = "";
                                var zWhereClause = "";

                                $.each(multiSelectCubeLabels[chartId], function (key, val) {
                                    if (key != "Dimension" && key != "lineSlice") {
                                        if (xWhereClause.indexOf("'" + this['x'] + "',") == -1) {
                                            xWhereClause += "'" + this['x'] + "',";
                                        }
                                        if (yWhereClause.indexOf("'" + this['y'] + "',") == -1) {
                                            yWhereClause += "'" + this['y'] + "',";
                                        }
                                        if (zWhereClause.indexOf("'" + this['z'] + "',") == -1) {
                                            zWhereClause += "'" + this['z'] + "',";
                                        }
                                    }
                                })

                                //cube changes
                                lineSliceWhrClause = axisColumns['x']['column'] + " IN (" + xWhereClause.slice(0, -1) + ") AND " + axisColumns['y']['column'] + " IN (" + yWhereClause.slice(0, -1) + ") AND " + axisColumns['z']['column'] + " IN (" + zWhereClause.slice(0, -1) + ")";


                                if (multiSelectCubeLabels != null && (Object.keys(multiSelectCubeLabels[chartId]).length == 1 || lineSlice == "Y")) {

                                    $.ajax({
                                        type: "post",
                                        traditional: true,
                                        dataType: 'JSON',
                                        cache: false,
                                        url: "getCubeValue",
                                        data: {
                                            factTable: factTable,
                                            cubeValueCol: cubeValueCol,
                                            clickedLabels: JSON.stringify(clickedLabelIds),
                                            axisColumns: JSON.stringify(axisColumns),
                                            lineSlice: lineSlice,
                                            lineSliceWhrClause: lineSliceWhrClause
                                        },
                                        success: function (response) {


                                            var cubeValue = response['cubeValue']
//                                           scene.remove( event.target );
//                                           scene.dispose( event.target );
                                            //event.target.dispose();

                                            var elem = document.createElement('div');

                                            elem.className = 'cubeLabel';
                                            //elem.style.marginTop = '-1em';
                                            var Label = new CSS2DObject(elem);
                                            //Label.position.set(0,0,0);
//                                            elem.textContent = cubeValue;

                                            elem.innerHTML = cubeValue;
                                            elem.id = chartId + "_CUBEVAL_" + cubeValue;

                                            ncube.add(Label);



                                            $("#" + chartId + "_x_" + clickedLabelIds['x']).addClass("highLightLabel");
                                            $("#" + chartId + "_y_" + clickedLabelIds['y']).addClass("highLightLabel");
                                            $("#" + chartId + "_z_" + clickedLabelIds['z']).addClass("highLightLabel");


                                            stopLoader();

                                        },
                                        error: function (e) {
                                            stopLoader();
                                            sessionTimeout(e);
                                        }
                                    });

                                }

                                globalSceneObj[chartId] = scene;
                            });


                            domEvents.addEventListener(cube, 'dblclick', function (event) {
                                console.log("dbl clicked");
                                event.origDomEvent.preventDefault();
                                var cubePosition = event.target.position;
                                var xindex = Math.abs(cubePosition.x / cubeSize);
                                var xlabel = labelsArray['x'][xindex - 1][0];
                                var xlabelId = labelsArray['x'][xindex - 1][1];
                                var yindex = Math.abs(cubePosition.y / cubeSize);
                                var ylabel = labelsArray['y'][yindex - 1][0];
                                var ylabelId = labelsArray['y'][yindex - 1][1];
                                var zindex = Math.abs(cubePosition.z / cubeSize);
                                var zlabel = labelsArray['z'][zindex - 1][0];
                                var zlabelId = labelsArray['z'][zindex - 1][1];
                                alert("X::" + xlabel + "  Y::" + ylabel + "  Z::" + zlabel);
                                var clickedLabels = {}
                                clickedLabels['x'] = xlabel;
                                clickedLabels['y'] = ylabel;
                                clickedLabels['z'] = zlabel;
                                var clickedLabelIds = {}
                                clickedLabelIds['x'] = xlabelId;
                                clickedLabelIds['y'] = ylabelId;
                                clickedLabelIds['z'] = zlabelId;
                                var multiSelectCubeLabel = {};
                                multiSelectCubeLabel[xlabelId + ylabelId + zlabelId] = clickedLabelIds;

                                multiSelectCubeLabels[chartId] = multiSelectCubeLabel;
                                showReport('', chartId);


                                globalSceneObj[chartId] = scene;
                            });
                        }
                    }
                }


                var controls = new THREE.OrbitControls(camera, labelRenderer.domElement);
                controls.update();
                controls.target.set(0, 0, 0);
                function render() {

                    if (rotateFlagCW) {
                        $("#" + chartId + "_cubeContainer").find("div").css("display", "none");

//                            1800*5, 1000*5, 600*5)
                        camera.position.x -= 180 / 2;
                        camera.position.y -= 100 / 2;
                        camera.position.z -= 60 / 2;

                        scene.rotation.x += 0.1;
                        scene.rotation.y += 0.1;
                        scene.rotation.z += 0.1;
                    }

                    requestAnimationFrame(render);
                    renderer.render(scene, camera);
                    labelRenderer.render(scene, camera);

                }
                render();
                rotateCube(scene, camera, chartId);
                var qubeChartId = chartId + "_cubeContainer";
                var pos = $("#" + qubeChartId).css({marginLeft: -664});


            },
            error: function (e) {
                sessionTimeout(e);
            }
        });
    } else {
        stopLoader();
        $("#wait").css("display", "none");
        $("#dialog").html(errorMessageStr);
        $("#dialog").dialog({ resizable: false,
            title: (labelObject['Error'] != null ? labelObject['Error'] : 'Error'),
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





}

function render() {

    requestAnimationFrame(render);
//cube.rotation.x += 0.01;
//cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);


}



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}




//window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {

    renderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}


function showReport() {
    var labelsObject = {};
    //var cubeValueCol =  $("#analyticsCubeValueInner").find('div').attr("data-column-name");
    var cubeValueCol = []; //cube changes
    $("#VisionCubeValueTableId tbody tr").each(function () {
        var tdArray = this.cells;
        if (tdArray != null && tdArray.length != 0) {
            var cubeValueObj = {};
            var cubeValueDiv = $(tdArray[1]).find("div");
            var cubeValueColumn;
            $.each(cubeValueDiv, function (index) {
                cubeValueColumn = $(this).attr("data-column-name");
            })
            var cubeValueLabel = $(tdArray[2]).find("input").val();
            var cubeValueCurrency = $(tdArray[3]).find("input").val();
            cubeValueObj['column'] = cubeValueColumn;
            cubeValueObj['label'] = cubeValueLabel;
            cubeValueObj['currency'] = cubeValueCurrency;
            cubeValueCol.push(cubeValueObj);
        }
    });
    cubeValueCol = JSON.stringify(cubeValueCol);
    var chartId = "cubeContainer1";
    var multiSelectCubeLabel = multiSelectCubeLabels[chartId];
    var factTable = $("#analyticsCubeXaxisInner").find('div').attr("data-table-name");
    var exportIcon = '<div id="exportDropdown" class="visionCubeReportExport exportDropdown visionSearchExport visionSearchExportDiv" style="vertical-align: bottom; display: inline-block; padding-top: 8px; float:left;"><table style="vertical-align: bottom; display: inline-block;" class="visionSearchExportTable"><tbody><tr><td><select id="exportsearchResults" onchange="getExportType(\'searchResults\')"><option data-optlabel="Select" value="" selected="selected">Select</option><option data-optlabel="XLSX" value="Xlsx">XLSX</option><option data-optlabel="CSV" value="CSV">CSV</option></select></td></tr></tbody></table> <input value="Export" id="excelExportsearchResults" onclick="finalExport(\'searchResults\',\'S\')" class="exportClass visionSearchExportButton" type="button" style="background: url(&quot;images/export_as_xlsx_icon_blue.png&quot;) 5px center no-repeat rgb(255, 255, 255);"></div>';

    if (!jQuery.isEmptyObject(multiSelectCubeLabel)) {
        var xStatic = false;
        var yStatic = false;
        var zStatic = false;
        var prevx = "";
        var prevy = "";
        var prevz = "";
        var xCol = axisColumns['x']['column'];//cube changes
        var yCol = axisColumns['y']['column'];
        var zCol = axisColumns['z']['column'];
        var nonStaticWhereCond = "";
        var nonStaticCol = "";
        var nonStaticAxis = "";
        var url;
        var count = Object.keys(multiSelectCubeLabel).length;
        if (count == 1) {
            var values = Object.values(multiSelectCubeLabel)[0];
            labelsObject[xCol] = values['x']
            labelsObject[yCol] = values['y']
            labelsObject[zCol] = values['z']
            url = "getCubeData";
        } else if (count > 1) {
            url = "getMultiCubeData";
            $.each(multiSelectCubeLabel, function (key, val) {
                if (prevx == val['x']) {
                    prevx = val['x'];
                    xStatic = true;
                    labelsObject[xCol] = val['x'];

                } else {
                    if (prevx != "") {
                        nonStaticAxis = "x";
                        nonStaticCol = xCol;
                    }
                    prevx = val['x'];
                    xStatic = false;
                    delete labelsObject[xCol];
                }

                if (prevy == val['y']) {
                    prevy = val['y'];
                    yStatic = true;
                    labelsObject[yCol] = val['y'];
                } else {
                    if (prevy != "") {
                        nonStaticAxis = "y";
                        nonStaticCol = yCol;
                    }
                    prevy = val['y'];
                    yStatic = false;
                    delete labelsObject[yCol];
                }
                if (prevz == val['z']) {
                    prevz = val['z'];
                    zStatic = true;
                    labelsObject[zCol] = val['z'];
                } else {
                    if (prevx != "") {
                        nonStaticAxis = "z";
                        nonStaticCol = zCol;
                    }
                    prevz = val['z'];
                    zStatic = false;
                    delete labelsObject[zCol];
                }
            })

            $.each(multiSelectCubeLabel, function (key, val) {
                if (nonStaticAxis != "") {
                    nonStaticWhereCond += "'" + val[nonStaticAxis] + "',";
                }

            })
            if (nonStaticWhereCond != "") {
                nonStaticWhereCond = nonStaticWhereCond.substring(0, nonStaticWhereCond.length - 1);
                nonStaticWhereCond = " AND " + nonStaticCol + " IN (" + nonStaticWhereCond + ") ";
            }
        }

        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'JSON',
            cache: false,
            url: url,
            data: {
                factTable: factTable,
                cubeValueCol: cubeValueCol,
                clickedLabelIds: JSON.stringify(labelsObject),
                axisColumns: JSON.stringify(axisColumns),
                axisLabels: JSON.stringify(axisLabels),
                nonStaticWhereCond: nonStaticWhereCond,
            },
            success: function (response) {
                $("#treeGrid").remove();
                var treeGridStr = "<div >" + exportIcon + "<div id ='treeGrid'></div></div>";
//            $("#dialog").html("<div id ='treeGrid'></div>");
                $("#dialog").html(treeGridStr);
                $("#dialog").dialog({ resizable: false,
                    title: (labelObject['Report'] != null ? labelObject['Report'] : 'Report'),
                    modal: true,
                    height: "auto",
                    maxHeight: 500,
                    width: 1038,
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

                        var dataFields = response['dataFields'];
                        var columns = response['columns'];

                        var treeGridData = response['data'];
                        var source =
                                {
                                    dataType: "json",
                                    dataFields: dataFields,
                                    hierarchy:
                                            {
                                                root: "children"
//                                                                     keyDataField: { name: 'PLANT' },
//                                                                     parentDataField: { name: 'Q_ID' }
                                            },
                                    //id: "ID",
                                    localData: treeGridData

                                };
                        var dataAdapter = new $.jqx.dataAdapter(source, {
                            loadComplete: function () {
                                $("#treeGrid").jqxTreeGrid('expandRow', '0');
                            }
                        });
                        // create jqxTreeGrid.
                        $("#treeGrid").jqxTreeGrid(
                                {
                                    source: dataAdapter,
                                    altRows: true,
                                    width: "100%",

                                    columnsResize: true,
                                    //showAggregates: true,
                                    showSubAggregates: true,
                                    aggregatesHeight: 70,
                                    ready: function () {
                                        $("#treeGrid").jqxTreeGrid('expandRow', '0');

                                    },
                                    columns: columns
                                });
                        $("#treeGrid").jqxTreeGrid('expandRow', '0');


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
                sessionTimeout(e);
            }
        });

    } else {

        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'JSON',
            cache: false,
            url: 'getAllCubesData',
            data: {
                factTable: factTable,
                cubeValueCol: cubeValueCol,
                clickedLabelIds: JSON.stringify(labelsObject),
                axisColumns: JSON.stringify(axisColumns),
                axisLabels: JSON.stringify(axisLabels),
                nonStaticWhereCond: nonStaticWhereCond
            },
            success: function (response) {
                $("#treeGrid").remove();
//            $("#dialog").html("<div id ='treeGrid'></div>");
                var treeGridStr = "<div >" + exportIcon + "<div id ='treeGrid'></div></div>";
                $("#dialog").html(treeGridStr);
                $("#dialog").dialog({ resizable: false,
                    title: (labelObject['Report'] != null ? labelObject['Report'] : 'Report'),
                    modal: true,
                    height: "auto",
                    maxHeight: 500,
                    width: 1038,
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

                        var dataFields = response['dataFields'];
                        var columns = response['columns'];

                        var treeGridData = response['data'];
                        var source =
                                {
                                    dataType: "json",
                                    dataFields: dataFields,
                                    hierarchy:
                                            {
                                                root: "children"
//                                                                     keyDataField: { name: 'PLANT' },
//                                                                     parentDataField: { name: 'Q_ID' }
                                            },
                                    //id: "ID",
                                    localData: treeGridData

                                };
                        var dataAdapter = new $.jqx.dataAdapter(source, {
                            loadComplete: function () {
                                $("#treeGrid").jqxTreeGrid('expandRow', '0');
                            }
                        });
                        // create jqxTreeGrid.
                        $("#treeGrid").jqxTreeGrid(
                                {
                                    source: dataAdapter,
                                    altRows: true,
                                    width: "100%",

                                    columnsResize: true,
                                    showAggregates: true,
                                    //showSubAggregates: true,
                                    aggregatesHeight: 70,
                                    ready: function () {
                                        $("#treeGrid").jqxTreeGrid('expandRow', '0');

                                    },
                                    columns: columns
                                });
                        $("#treeGrid").jqxTreeGrid('expandRow', '0');


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
                sessionTimeout(e);
            }
        });

    }

}

function resetCubes(analyticId, chartId) { // cube changes

    cubeClickFlag = false;
    material.opacity = 0.5;

    var selectedCubesArray = selectedCubesArrayObj[chartId];
    if (selectedCubesArray != null) {
        $.each(selectedCubesArray, function (index) {
            var scene = globalSceneObj[chartId];
            scene.remove(this);
            $(".cubeLabel").remove();
            $(".label").removeClass("highLightLabel");

        })
    }

    multiSelectCubeLabels[chartId] = {};
    selectedCubesArrayObj[chartId] = [];

//    multiSelectCubeLabels = {};
//
//    $.each(selectedCubesArray, function (index) {
//        scene.remove(this);
//        $(".cubeLabel").remove();
//        $(".label").removeClass("highLightLabel");
//
//    })
//
//    selectedCubesArray = [];
//    cubeClickFlag = false;

}


function addLight(...pos) {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(...pos);
    scene.add(light);
}
function publishQube() { //cube changes
    showLoader();
    $("#wait").css("display", "block");
    var errorCount = 0;
    var errorMessageStr = "";
    axisColumns = {}
    var xAxisObj = {};
    var xAxisColumn = $("#analyticsCubeXaxisInner").find('div').attr("data-column-name");
    var xAxisTable = $("#analyticsCubeXaxisInner").find('div').attr("data-table-name");
    var xAxisLabel = $("#xAxisCubeLabel").val();
    xAxisObj['column'] = xAxisColumn;
    xAxisObj['label'] = xAxisLabel;
    xAxisObj['table'] = xAxisTable;
    axisColumns['x'] = xAxisObj;

    var yAxisObj = {};
    var yAxisColumn = $("#analyticsCubeYaxisInner").find('div').attr("data-column-name");
    var yAxisTable = $("#analyticsCubeYaxisInner").find('div').attr("data-table-name");
    var yAxisLabel = $("#yAxisCubeLabel").val();
    yAxisObj['column'] = yAxisColumn;
    yAxisObj['label'] = yAxisLabel;
    yAxisObj['table'] = yAxisTable;
    axisColumns['y'] = yAxisObj;

    var zAxisObj = {};
    var zAxisColumn = $("#analyticsCubeZaxisInner").find('div').attr("data-column-name");
    var zAxisTable = $("#analyticsCubeZaxisInner").find('div').attr("data-table-name");
    var zAxisLabel = $("#zAxisCubeLabel").val();
    zAxisObj['column'] = zAxisColumn;
    zAxisObj['label'] = zAxisLabel;
    zAxisObj['table'] = zAxisTable;
    axisColumns['z'] = zAxisObj;

    if (!(xAxisColumn != null && xAxisColumn != '' && xAxisColumn != undefined)
            || !(xAxisLabel != null && xAxisLabel != '' && xAxisLabel != undefined))
    {
        errorCount++;
        errorMessage("#disanalyticsCubeXaxis", "Should not be null");
        var description = "X-Axis(Fact Column & Label)";
        errorMessageStr += "<tr><td>  " + '<p class="visionGenericTabStatusDialog">' + " " + '<span style="color:blue;">' + " " + description + "</span><b>:</b> Should not be null.</tr></td>";
    }
    if (!(yAxisColumn != null && yAxisColumn != '' && yAxisColumn != undefined)
            || !(yAxisLabel != null && yAxisLabel != '' && yAxisLabel != undefined))
    {
        errorCount++;
        errorMessage("#disanalyticsCubeYaxis", "Should not be null");
        var description = "Y-Axis(Fact Column & Label)";
        errorMessageStr += "<tr><td>  " + '<p class="visionGenericTabStatusDialog">' + " " + '<span style="color:blue;">' + " " + description + "</span><b>:</b> Should not be null.</tr></td>";
    }
    if (!(zAxisColumn != null && zAxisColumn != '' && zAxisColumn != undefined)
            || !(zAxisLabel != null && zAxisLabel != '' && zAxisLabel != undefined))
    {
        errorCount++;
        errorMessage("#disanalyticsCubeZaxis", "Should not be null");
        var description = "Z-Axis(Fact Column & Label)";
        errorMessageStr += "<tr><td>  " + '<p class="visionGenericTabStatusDialog">' + " " + '<span style="color:blue;">' + " " + description + "</span><b>:</b> Should not be null.</tr></td>";
    }

    axisLabels = {}
    var xlabelObj = {};
    xlabelObj['table'] = $("#analyticsCubeXLabelInner").find('div').attr("data-table-name");
    var xLabelColumn = $("#analyticsCubeXLabelInner").find('div').attr("data-column-name");
    xlabelObj['column'] = xLabelColumn;
    axisLabels['x'] = xlabelObj;

    var ylabelObj = {}
    ylabelObj['table'] = $("#analyticsCubeYLabelInner").find('div').attr("data-table-name");
    var yLabelColumn = $("#analyticsCubeYLabelInner").find('div').attr("data-column-name");
    ylabelObj['column'] = yLabelColumn;
    axisLabels['y'] = ylabelObj;

    var zlabelObj = {}
    zlabelObj['table'] = $("#analyticsCubeZLabelInner").find('div').attr("data-table-name");
    var zLabelColumn = $("#analyticsCubeZLabelInner").find('div').attr("data-column-name");
    zlabelObj['column'] = zLabelColumn;
    axisLabels['z'] = zlabelObj;

    if (!(xLabelColumn != null && xLabelColumn != '' && xLabelColumn != undefined))
    {
        errorCount++;
        errorMessage("#disanalyticsCubeXLabel", "Should not be null");
        var description = "X-Label(Dim Column)";
        errorMessageStr += "<tr><td>  " + '<p class="visionGenericTabStatusDialog">' + " " + '<span style="color:blue;">' + " " + description + "</span><b>:</b> Should not be null.</tr></td>";
    }
    if (!(yLabelColumn != null && yLabelColumn != '' && yLabelColumn != undefined))
    {
        errorCount++;
        errorMessage("#disanalyticsCubeYLabel", "Should not be null");
        var description = "Y-Label(Dim Column)";
        errorMessageStr += "<tr><td>  " + '<p class="visionGenericTabStatusDialog">' + " " + '<span style="color:blue;">' + " " + description + "</span><b>:</b> Should not be null.</tr></td>";
    }
    if (!(zLabelColumn != null && zLabelColumn != '' && zLabelColumn != undefined))
    {
        errorCount++;
        errorMessage("#disanalyticsCubeZLabel", "Should not be null");
        var description = "Z-Label(Dim Column)";
        errorMessageStr += "<tr><td>  " + '<p class="visionGenericTabStatusDialog">' + " " + '<span style="color:blue;">' + " " + description + "</span><b>:</b> Should not be null.</tr></td>";
    }

    var factTable = $("#analyticsCubeXaxisInner").find('div').attr("data-table-name");
    var cubeValueCol = []; //cube changes
    $("#VisionCubeValueTableId tbody tr").each(function () {
        var tdArray = this.cells;
        if (tdArray != null && tdArray.length != 0) {
            var cubeValueObj = {};
            var cubeValueDiv = $(tdArray[1]).find("div");
            var cubeValueColumn;
            $.each(cubeValueDiv, function (index) {
                cubeValueColumn = $(this).attr("data-column-name");
            })
            var cubeValueLabel = $(tdArray[2]).find("input").val();
            var cubeValueCurrency = $(tdArray[3]).find("input").val();
            cubeValueObj['column'] = cubeValueColumn;
            cubeValueObj['label'] = cubeValueLabel;
            cubeValueObj['currency'] = cubeValueCurrency;
            cubeValueCol.push(cubeValueObj);
        }
    });
    cubeValueCol = JSON.stringify(cubeValueCol);
    var cubeTitleSelectBox = $("#visionCubeTitleSelectBoxTypesId").val();
    var chartTitle = $("#cubeTitle").val();
    if (chartTitle != null && chartTitle != '' && chartTitle != undefined) {
        if (xAxisLabel != null && xAxisLabel != '' && xAxisLabel != undefined && yAxisLabel != null && yAxisLabel != '' && yAxisLabel != undefined
                && zAxisLabel != null && zAxisLabel != '' && zAxisLabel != undefined) {
            chartTitle = chartTitle + "/" + xAxisLabel + "/" + yAxisLabel + "/" + zAxisLabel;
            $("#cubeTitle").val(chartTitle);
        }
    }
    var aggId = "B940D2E1679C45A6E053210110ACAAA6";
    var z = 0;
    $("#VisionCubePossibelDimTableId tbody tr").each(function () {
        var tdArray = this.cells;
        if (tdArray != null && tdArray.length != 0) {
            var axisColObj = {};
            var axisLabelObj = {};
            var factColDiv = $(tdArray[1]).find("div");
            var factColumn;
            var factTable;
            $.each(factColDiv, function (index) {
                factColumn = $(this).attr("data-column-name");
                factTable = $(this).attr("data-table-name");
            })
            var dimColDiv = $(tdArray[2]).find("div");
            var dimColumn;
            var dimTable;
            $.each(dimColDiv, function (index) {
                dimColumn = $(this).attr("data-column-name");
                dimTable = $(this).attr("data-table-name");
            })
            var factColLabel = $(tdArray[3]).find("input").val();
            axisColObj['column'] = factColumn;
            axisColObj['label'] = factColLabel;
            axisColObj['table'] = factTable;
            axisColumns[z] = axisColObj;
            axisLabelObj['column'] = dimColumn;
            axisLabelObj['table'] = dimTable;
            axisLabels[z] = axisLabelObj;
        }
        z++;
    });
    var cubeDimCount = z;
    if (!(chartTitle != null && chartTitle != '')) {
        errorCount++;
        var cubeTitle = "Cube Title";
        errorMessage("#discubeTitle", "Should not be null");
        errorMessageStr += "<tr><td>  " + '<p class="visionGenericTabStatusDialog">' + " " + '<span style="color:blue;">' + " " + cubeTitle + "</span><b>:</b> Should not be null.</tr></td>";
    }

    var chartOptAllObj = {};
    var colorX = $("#BAR_CHART_CUBE_X_AXIS_COLORS").val();
    var colorY = $("#BAR_CHART_CUBE_Y_AXIS_COLORS").val();
    var colorZ = $("#BAR_CHART_CUBE_Z_AXIS_COLORS").val();
    chartOptAllObj['x'] = colorX;
    chartOptAllObj['y'] = colorY;
    chartOptAllObj['z'] = colorZ;

    var cubeClickedColorsObj = {};
    var clickColor = $("#BAR_CHART_CUBE_CLICK_AXIS_COLORS").val();
    var sliceColor = $("#BAR_CHART_CUBE_SLICE_AXIS_COLORS").val();
    var diceColor = $("#BAR_CHART_CUBE_DICE_AXIS_COLORS").val();
    cubeClickedColorsObj['click'] = clickColor;
    cubeClickedColorsObj['slice'] = sliceColor;
    cubeClickedColorsObj['dice'] = diceColor;

    if (errorCount == 0) {
        $.ajax({
            type: "post",
            url: "analyticsProp",
            cache: false,
            data: {

            },
            traditional: true,
            dataType: 'html',
            success: function (response) {
                hideErrors();
                stopLoader();
                response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any Comp Id'] != null ? labelObject['Please give new Comp Id'] : 'Please give new Comp Id like MM_ABC_XYZ ') + "</div>";
                $("#dialog").html(response);
                $("#dialog").dialog({ resizable: false,
                    title: (labelObject['Analytics Suit Properties'] != null ? labelObject['Analytics Suit Properties'] : 'Analytics Suit Properties'),
                    modal: true,
                    height: 'auto',
                    minWidth: 450,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['YES'] != null ? labelObject['YES'] : 'YES'),
                            click: function () {
                                var compId = $("#reasonId").val();
                                var selectedcompId = $("#reportTittle").val();
                                var chkBoxVal = $("#chktype").val();
                                if (chkBoxVal != null && chkBoxVal != '' && chkBoxVal == 'on' && compId != null && compId != '') {
                                    $("#dailog_error_id").hide();
                                    savePublishQubeData(axisColumns, axisLabels, factTable, aggId, cubeValueCol, compId, selectedcompId, chartTitle, chartOptAllObj, cubeClickedColorsObj, cubeDimCount, cubeTitleSelectBox);
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                } else if (chkBoxVal != null && chkBoxVal != '' && chkBoxVal == 'off' && compId != null && compId != '') {
                                    $("#dailog_error_id").hide();
                                    savePublishQubeData(axisColumns, axisLabels, factTable, aggId, cubeValueCol, compId, '', chartTitle, chartOptAllObj, cubeClickedColorsObj, cubeDimCount, cubeTitleSelectBox);
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                } else {
                                    $("#dailog_error_id").fadeIn(1000).show();
                                }
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
    } else
    {
        $("#wait").css("display", "none");
        stopLoader();
        $("#dialog").html(errorMessageStr);
        $("#dialog").dialog({ resizable: false,
            title: (labelObject['Error'] != null ? labelObject['Error'] : 'Error'),
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
}

function savePublishQubeData(axisColumns, axisLabels, factTable, aggId, cubeValueCol, compId, selectedcompId, chartTitle, colorsObj, cubeClickedColorsObj, cubeDimCount, cubeTitleSelectBox)//cube changes
{
    showLoader();
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'JSON',
        cache: false,
        url: "publishQube",
        data: {
            factTable: factTable,
            axisColumns: JSON.stringify(axisColumns),
            axisLabels: JSON.stringify(axisLabels),
            aggId: aggId,
            compId: compId,
            cubeValueCol: cubeValueCol,
            selectedcompId: ((selectedcompId != null && selectedcompId != '' && selectedcompId != undefined) ? selectedcompId : ""),
            qubeFlag: 'Y',
            chartTitle: chartTitle, //cube changes
            chartOptAllObj: JSON.stringify(colorsObj),
            cubeClickedColorsObj: JSON.stringify(cubeClickedColorsObj),
            cubeDimCount: cubeDimCount,
            cubeTitleSelectBox: cubeTitleSelectBox
        },
        success: function (response) {
            if (response != null && response != '' && response != undefined) {
                $("#wait").css("display", "none");
                var errorMessage = response['messageStr'];
                stopLoader();
                if (errorMessage != null && errorMessage != '') {
                    $("#dialog").html(errorMessage);
                    $("#dialog").dialog({ resizable: false,
                        title: (labelObject['Message'] != null ? labelObject['Message '] : 'Message'),
                        modal: true,
                        height: 'auto',
                        minWidth: 300,
                        maxWidth: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                }},
                            {
                                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                    // $("#labeld").empty();

                                }

                            }],
                        open: function () {
                             //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
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
        },
        error: function (e) {
            sessionTimeout(e);
        }
    });
}

function cubeTitleSelectBox(value)
{
    var cubeTitleSelectBoxText = $("#visionCubeTitleSelectBoxTypesId option:selected").text();
    if (cubeTitleSelectBox != null && cubeTitleSelectBox != '' && cubeTitleSelectBox != undefined)
    {
        if (cubeTitleSelectBoxText != null && cubeTitleSelectBoxText != '' && cubeTitleSelectBoxText != undefined
                && cubeTitleSelectBoxText != 'Select' && cubeTitleSelectBoxText != 'select' && cubeTitleSelectBoxText != 'SELECT')
        {
            $("#cubeTitle").val(cubeTitleSelectBoxText);
        }
    }
}