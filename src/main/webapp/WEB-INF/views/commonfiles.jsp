<%-- 
    Document   : commonfiles
    Created on : 19 Nov, 2021, 2:05:43 PM
    Author     : PiLog
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"   uri="jakarta.tags.core" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>
<%@ taglib prefix="fn"  uri="jakarta.tags.functions" %>
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
<!--[if !HTML5]>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<![endif]-->
<meta charset="UTF-8">

<!-- <meta http-equiv="X-UA-Compatible" content="IE=11" />-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="keygeneration" content="${secretKey}">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='pragma' content='no-cache'>
<!--<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Quicksand:500,700" rel="stylesheet">-->
<link rel="stylesheet" type="text/css" href="<c:url value="/"/>css/jquery-ui.css"> 
<link rel="stylesheet" href="<c:url value="/"/>css\theme\etlDark.css" type="text/css" />
<!--<link rel="stylesheet" href="<c:url value="/"/>css\theme\headerDark.css" type="text/css" />-->
<link rel="stylesheet" href="<c:url value="/"/>css\theme\jqxDark.base.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\theme\jqxDark.energyblue.css" type="text/css" /> 
<link rel="stylesheet" href="<c:url value="/"/>css\theme\PiLogCloudDark.css" type="text/css" />
<!--<link rel="stylesheet" href="<c:url value="/"/>css\theme\sidebarDark.css" type="text/css" />-->
<link rel="stylesheet" href="<c:url value="/"/>css\theme\dxpAnalyticsDark.css" type="text/css" />
<!--<link rel="stylesheet" href="<c:url value="/"/>css\theme\bootstrap-multiselect.css" type="text/css" />-->
<!--<link rel="stylesheet" href="<c:url value="/"/>css\theme\political_profile_Dark.css" type="text/css" />-->
<link rel="stylesheet" href="<c:url value="/"/>css/quartzLiteTheme.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css/SAPEveningHorizonTheme.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css/PiLogCloud.css" type="text/css" /> 
<link rel="stylesheet" href="<c:url value="/"/>css/etl.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css/header.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\sidebar.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css/dxptheme.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css/jquery.flowchart.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css/invMngment.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css/slick.css" type="text/css" />   
<link rel="stylesheet" href="<c:url value="/"/>css/jquery.timepicker.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\bootstrap.min.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\AIagent.css" type="text/css" />

<link rel="stylesheet" href="<c:url value="/"/>css\font-awesome.min.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\input.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\reply.css" type="text/css" />   
<link rel="stylesheet" href="<c:url value="/"/>css\says.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\setup.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\typing.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\customSchedulCalendar.css" type="text/css" />
<!--<link rel="stylesheet" href="<c:url value="/"/>css\political_profile.css" type="text/css" />-->
<!--<link rel="stylesheet" href="<c:url value="/"/>css\genieAnimationCss\canvas.css" type="text/css" />-->
<!--<link rel="stylesheet" href="<c:url value="/"/>css\genieAnimationCss\genie.css" type="text/css" />--> 
<link rel="stylesheet" href="<c:url value="/"/>css\keyboard.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\print.min.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\dxpAssetTree.css" type="text/css" />



<!--*/pivot*/--> 


<!--pivot-->

<script src="<c:url value="/"/>js/popper.min.js"></script>
<script type="text/javascript" src="<c:url value="/"/>js/jquery-3.7.0.js"></script>
<!--<script type="text/javascript" src="<c:url value="/"/>js/jquery-3.5.1.js"></script>-->
<script type="text/javascript" src="<c:url value="/"/>js/jquery-ui.js"></script> 
<!--<script src="<c:url value="/"/>js/loader.js"></script>-->
<script src="<c:url value="/"/>js/logout.js"></script>
<!--<script src="<c:url value="/"/>js/disableFunctions.js"></script>-->
<!--<script src="<c:url value="/"/>js/disableRightClick.js"></script>-->
<script src="<c:url value="/"/>js/aes.js"></script>
<script src="<c:url value="/"/>js/jquery.clearsearch-instance-dropdown.js"></script>
<script src="<c:url value="/"/>js/jquery.scannerdetection.js"></script>
<script src="<c:url value="/"/>js/jquery.easing.min.js"></script>
<script src="<c:url value="/"/>js/jquery.timepicker.js"></script>
<script src="<c:url value="/"/>js/jquery-cron-quartz.js"></script>
<script src="<c:url value="/"/>js/bootstrap.min.js"></script>
<script src="<c:url value="/"/>js/waves.min.js"></script>
<script src="<c:url value="/"/>js/jquery.slimscroll.js"></script>
<!--<script src="<c:url value="/"/>js/modernizr.js"></script>-->
<!--<script src="<c:url value="/"/>js/pcoded.min.js"></script> 
<script src="<c:url value="/"/>js/menu-compact.js"></script>-->
<script src="<c:url value="/"/>js/uniquefunctions.js"></script>
<script src="<c:url value="/"/>js/uniquefunctions2.js"></script>
<script src="<c:url value="/"/>js/script.js"></script>
<script src="<c:url value="/"/>js/loginOperations.js"></script>
<script src="<c:url value="/"/>js/operations.js"></script>
<script src="<c:url value="/"/>js/enclosure.js"></script>
<script src="<c:url value="/"/>js/cloudAnalytics.js"></script>
<script src="<c:url value="/"/>js/paymentGateway.js"></script>
<script src="<c:url value="/"/>js/additional-methods.min.js"></script>
<script src="<c:url value="/"/>js/jquery.validate.min.js"></script>
<script src="<c:url value="/"/>js/jquery-steps.js"></script>
<script src="<c:url value="/"/>js/invenMngmnt.js"></script>
<script src="<c:url value="/"/>js/slick.js"></script>
<script src="<c:url value="/"/>js/dxptheme.js"></script>
<script src="<c:url value="/"/>js/purify.min.js"></script>
<script src="<c:url value="/"/>js/googleapiwithkey.min.js"></script>
<!--<script src="<c:url value="/"/>js/genieAnimationJs/canvas.js"></script>
<script src="<c:url value="/"/>js/genieAnimationJs/genie.js"></script>
<script src="<c:url value="/"/>js/genieAnimationJs/html2canvas.js"></script>
<script src="<c:url value="/"/>js/genieAnimationJs/jquery.genie.js"></script> -->
<script src="<c:url value="/"/>js/dxpDropDown.js"></script>
<script src="<c:url value="/"/>js/masterCluster.js"></script>
<script src="<c:url value="/"/>js/mmTabsUpdate.js"></script>
<script src="<c:url value="/"/>js/masterlDetailView.js"></script>
<script src="<c:url value="/"/>js/dlov_all.js"></script>
<script src="<c:url value="/"/>js/dlov_Adani.js"></script>
<script src="<c:url value="/"/>js/print.min.js"></script>

<script type="text/javascript" src="<c:url value="/"/>js/jquery.ba-throttle-debounce.min.js"></script>
<script src="<c:url value="/"/>js/chosen.jquery.js"></script>

<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script>-->

<script src="<c:url value="/"/>js/Bubbles.js"></script>
<!--<script src="<c:url value="/"/>js/mainSearch.js"></script>--> 
<script src="<c:url value="/"/>js/dataAnalytics.js"></script>
<!--<script src="https://checkout.razorpay.com/v1/checkout.js"></script>-->
<link rel="stylesheet" href="<c:url value="/"/>css\dxpAnalytics.css" type="text/css" />
<!--<script src="<c:url value="/"/>js/dxpDataAnalytics.js"></script>-->
<script src="<c:url value="/"/>js/jquery.dragtable.js"></script>
<script src="<c:url value="/"/>js/nimicPOC.js"></script>
<link rel="stylesheet" href="<c:url value="/"/>css/pivot.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css/pivot.min.css" type="text/css" />
<script type="text/javascript" src="<c:url value="/"/>js/pivot.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxpivot.js"></script> 
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxpivotgrid.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxpivotdesigner.js"></script>
<script type="text/javascript" src="<c:url value="/"/>js/d3.min.js"></script>
<script type="text/javascript" src="<c:url value="/"/>js/c3.min.js"></script>
<script type="text/javascript" src="<c:url value="/"/>js/papaparse.min.js"></script>
<script type="text/javascript" src="<c:url value="/"/>js/c3_renderers.js"></script>
<script type="text/javascript" src="<c:url value="/"/>js/bootstrap-multiselect.js"></script>
<link rel="stylesheet" href="<c:url value="/"/>jqwidgets/styles/jqx.base.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>jqwidgets/styles/jqx.bootstrap.css" type="text/css" />  
<link rel="stylesheet" href="<c:url value="/"/>jqwidgets/styles/jqx.energyblue.css" type="text/css" />       
<link rel="stylesheet" href="<c:url value="/"/>jqwidgets/styles/jqx.ui-redmond.css" type="text/css" />       
<link rel="stylesheet" href="<c:url value="/"/>jqwidgets/styles/jqx.metro.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>jqwidgets/styles/jqx.fresh.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>jqwidgets/styles/jqx.darkblue.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\calenderMain.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\vendorOnbarding.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\treeBox.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\aiPanel.css" type="text/css" />    
<link rel="stylesheet" href="<c:url value="/"/>css\spectrum.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="<c:url value="/"/>css/jquery-ui-visuallizeResize.css">
<link rel="stylesheet" href="<c:url value="/"/>css\introjs.min.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\IDXPResponsiveDesign.css" type="text/css" />
<!--<link rel="stylesheet" href="https://use.fontawesome.com/releases/v4.7.0/css/all.css">-->
<link rel="stylesheet" href="<c:url value="/"/>css\animatedStyle.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\staticFormGuider.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\aiPanelFlowchart.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\BNACWorkflowDesign.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\workflowDesignWorkBench.css" type="text/css" />
<!--<link rel="stylesheet" href="<c:url value="/"/>css\dxpLargeDeviceFonts.css" type="text/css" />--> 
<script src="<c:url value="/"/>js/calenderMain.js"></script>
<script src="<c:url value="/"/>js/typed.umd.js"></script>
<!--<script src="<c:url value="/"/>js/anime.min.js"></script>-->
<script src="<c:url value="/"/>jqwidgets/jqx-all.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxtabs.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxresponse.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxnotification.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxbuttons.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxcheckbox.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxscrollbar.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxmenu.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxgrid.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxgrid.selection.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxgrid.sort.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxgrid.columnsresize.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxgrid.columnsreorder.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxgrid.edit.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxlistbox.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxdropdownlist.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxgrid.pager.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxgrid.filter.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxprogressbar.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxinput.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxcalendar.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxdatetimeinput.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxdata.export.js"></script> 
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxgrid.export.js"></script> 
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxgrid.grouping.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxgrid.aggregates.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxpanel.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxtree.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxpopover.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxtooltip.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxnotification.js"></script>
<script src="<c:url value="/"/>js/etl/etlDXP.js"></script>
<script src="<c:url value="/"/>js/etl/etlComponents.js"></script>
<script src="<c:url value="/"/>js/etl/etlConnections.js"></script>
<script src="<c:url value="/"/>js/etl/dataModeller.js"></script>
<script src="<c:url value="/"/>js/etl/Filesaver.js"></script>
<script src="<c:url value="/"/>js/etl/jszip.js"></script>
<script src="<c:url value="/"/>js/etl/xlsx.min.js"></script>
<script src="<c:url value="/"/>js/etl/xlsx.full.min.js"></script> 
<script type="text/javascript" src="<c:url value="/"/>js/jquery.flowchart.js"></script> 
<script type="text/javascript" src="<c:url value="/"/>js/jquery.ajaxfileupload.js"></script>
<script src="<c:url value="/"/>js/dxpDataAnalytics.js"></script>
<script src="<c:url value="/"/>js/dxpDataAnalytics2.js"></script>
<script src="<c:url value="/"/>js/dxpDataAnalytics3.js"></script>
<script src="<c:url value="/"/>js/DxpGenericTree.js"></script>
<script src="<c:url value="/"/>js/dxpWorkflow.js"></script>
<script src="<c:url value="/"/>js/DxpUnification.js"></script>
<script src="<c:url value="/"/>js/customSchedulCalendar.js"></script>
<script src="<c:url value="/"/>js/jquery.dragtable.js"></script>
<script src="<c:url value="/"/>js/colResizable-1.6.js"></script> 
<script src="<c:url value="/"/>js/jquery.tablednd.js"></script>
<script src="<c:url value="/"/>js/loader.js"></script>
<script src="<c:url value="/"/>js/jspdf.min.js"></script>
<script src="<c:url value="/"/>js/jspdf.plugin.autotable.js"></script>
<script src="<c:url value="/"/>js/tableExport.min.js"></script>
<script src="<c:url value="/"/>js/xlsx.core.min.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxkanban.js"></script>
<script src="<c:url value="/"/>js/dxpKanbanView.js"></script>
<script src="<c:url value="/"/>js/spectrum.js"></script>
<script type="text/javascript" src="<c:url value="/"/>js/intro.min.js"></script><!-- introJs plugin JS -->
<script type="text/javascript" src="<c:url value="/"/>js/homeIntro.js"></script>
<script src="<c:url value="/"/>js/formGuiderModule.js"></script>
<script src="<c:url value="/"/>js/inlineFormGuider.js"></script>
<script src="<c:url value="/"/>js/valid.js"></script>
<script src="<c:url value="/"/>js/smartConsolidation.js"></script>
<script src="<c:url value="/"/>js/html2pdf.bundle.min.js"></script>
<script type="text/javascript" src="<c:url value="/"/>js/jquery.keyboard.js"></script>
<script type="text/javascript" src="<c:url value="/"/>js/jquery.mousewheel.js"></script>
<script type="text/javascript" src="<c:url value="/"/>js/jquery.keyboard.extension-typing.js"></script>
<%-- <script type="text/javascript" src="<c:url value="/"/>js/jquery-ui.js"></script> --%>
<script type="text/javascript" src="<c:url value="/"/>js/keyboard-layouts-microsoft.min.js"></script>
<script src="<c:url value="/"/>js/d3.min.js"></script>
<script src="<c:url value="/"/>js/plotly-2.6.3.min.js"></script>
<script src="<c:url value="/"/>js/d3.v3.min.js"></script>
<script src="<c:url value="/"/>js/ace.js"></script>
<script src="<c:url value="/"/>js/widget.js"></script>
<script src="<c:url value="/"/>js/polyfill.min.js"></script>
<script src="<c:url value="/"/>js/echarts.min.js"></script>
<script src="<c:url value="/"/>js/AIOperations.js"></script>
<script src="<c:url value="/"/>js/disableFunctions.js"></script>
<script src="<c:url value="/"/>js/idxpSearch.js"></script>
<script src="<c:url value="/"/>js/digitalSignature.js"></script>
<script src="<c:url value="/"/>js/worflowDesign.js"></script>
<script src="<c:url value="/"/>js/BNACWorkflowDesign.js"></script>
<script src="<c:url value="/"/>js/AIAgent.js"></script>
<script src="<c:url value="/"/>js/workflowDesignWorkBench.js"></script>
<script src="<c:url value="/"/>js/dxpAssetTree.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jsplumb@2.15.0/dist/js/jsplumb.min.js"></script>


<!--
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script>
<script src='https://cdn.plot.ly/plotly-2.6.3.min.js'></script>
<script src='https://d3js.org/d3.v3.min.js'></script>
<script src="https://fastly.jsdelivr.net/npm/echarts@5/dist/ec harts.min.js"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.1.3/ace.js" type="text/javascript" charset="utf-8"></script>--> 
<!--<script type="text/javascript" src="https://www.gartner.com/reviews/public/Widget/js/widget.js"></script>--> 
<!--<script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>-->


<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<!--<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>-->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
<!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"></script>-->

<script>
    $(document).ready(function() {
            $.ajax({
                url: 'getMapUrl',
                method: 'GET',
                success: function(srcUrl) {
                    let defaultSrc = "default-src 'self' cdn.example.com";
                    let formAction = "form-action 'self'";
                    let frameAncestors = "frame-ancestors 'none'";
                    let styleSrc = "style-src 'none'";
                    let imgSrc = "img-src 'self'";
                    let scriptSrc = "script-src 'self'";
                    const csp = [defaultSrc, formAction, frameAncestors, styleSrc, imgSrc, scriptSrc].join(';');

                    var script_tag = document.createElement('script');
                    script_tag.setAttribute('type', 'text/javascript');
                    script_tag.setAttribute('Content-Security-Policy', csp);
                    script_tag.setAttribute('src', srcUrl);
                    document.head.appendChild(script_tag); 
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error('Error fetching the map URL:', textStatus, errorThrown);
                }
            });
        });
//    /* Storing user's device details in a variable*/
//    let details = navigator.userAgent;
//    let srcurltext = "";
//    /* Creating a regular expression 
//     containing some mobile devices keywords 
//     to search it in details string*/
//    let regexp = /android|iphone|kindle|ipad|Android|Iphone|Kindle|Ipad|iPhone/;
//
//    /* Using test() method to search regexp in details
//     it returns boolean value*/
//    let isMobileDevice = regexp.test(details);
////       srcurltext="${pageContext.request.contextPath}/js/mapssensorfalse.js";
//    srcurltext = "https://maps.google.com/maps/api/js?key=${sessionScope.ssGoogleApiKey}&sensor=false";
//    if (isMobileDevice) {
////            document.write("You are using a Mobile Device");
//        srcurltext = "https://maps.google.com/maps/api/js?key=${sessionScope.ssGoogleApiKey}&sensor=true";
//        $("#srcurl").val(srcurltext);
////        srcurltext="${pageContext.request.contextPath}/js/mapssensortrue.js"            
//    } else {
////            document.write("You are using Desktop");
//        srcurltext = "https://maps.google.com/maps/api/js?key=${sessionScope.ssGoogleApiKey}&sensor=false";
//        $("#srcurl").val(srcurltext);
////         srcurltext="${pageContext.request.contextPath}/js/mapssensorfalse.js";
//
//    }
//    let defaultSrc = "default-src 'self' cdn.example.com";
//    let formAction = "form-action 'self'";
//    let frameAncestors = "frame-ancestors 'none'";
//    let styleSrc = "style-src 'none'";
//    let imgSrc = "img-src 'self'";
//    let scriptSrc = "script-src 'self'";
//    const csp = [defaultSrc, formAction, frameAncestors, styleSrc, imgSrc, scriptSrc].join(';');
//    var script_tag = document.createElement('script');
//    script_tag.setAttribute('type', 'text/javascript');
//    script_tag.setAttribute('Content-Security-Policy', csp);
//    script_tag.setAttribute('src', srcurltext);
//    document.head.appendChild(script_tag);
</script>

<script>
    google.charts.load('current', {packages: ['corechart', 'annotationchart',
            'calendar', 'gantt', 'gauge', 'map', 'orgchart', 'sankey', 'timeline', 'treemap',
            'wordtree', 'bar', 'line', 'scatter', 'geochart']});

</script>