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

<link rel="stylesheet" href="<c:url value="/"/>css/PiLogCloud.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css/header.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\sidebar.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css/dxptheme.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css/invMngment.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\bootstrap.min.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\slick.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\input.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\reply.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\says.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\setup.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\typing.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\arabicstyles.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\font-awesome.min.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\theme\bootstrap-multiselect.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\splide.min.css" type="text/css" />

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
<script src="<c:url value="/"/>js/modernizr.js"></script>
<!--<script src="<c:url value="/"/>js/pcoded.min.js"></script> 
<script src="<c:url value="/"/>js/menu-compact.js"></script>-->
<script src="<c:url value="/"/>js/script.js"></script>
<script src="<c:url value="/"/>js/loginOperations.js"></script>
<script src="<c:url value="/"/>js/cloudAnalytics.js"></script>
<script src="<c:url value="/"/>js/paymentGateway.js"></script>
<script src="<c:url value="/"/>js/additional-methods.min.js"></script>
<script src="<c:url value="/"/>js/jquery.validate.min.js"></script>
<script src="<c:url value="/"/>js/jquery-steps.js"></script>
<script src="<c:url value="/"/>js/invenMngmnt.js"></script>
<script src="<c:url value="/"/>js/slick.js"></script>
<!--<script src="<c:url value="/"/>js/splide.min.js"></script>-->
<script src="<c:url value="/"/>js/auto-scroll.min.js"></script>
<!--<script src="<c:url value="/"/>js/dxptheme.js"></script>-->
<script src="<c:url value="/"/>js/genieAnimationJs/canvas.js"></script>
<script src="<c:url value="/"/>js/genieAnimationJs/genie.js"></script>
<script src="<c:url value="/"/>js/genieAnimationJs/html2canvas.js"></script>
<script src="<c:url value="/"/>js/genieAnimationJs/jquery.genie.js"></script> 
<script type="text/javascript" src="<c:url value="/"/>js/jquery.ba-throttle-debounce.min.js"></script>
<script src="<c:url value="/"/>js/chosen.jquery.js"></script>
<script src="<c:url value="/"/>js/disableFunctions.js"></script>

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
<!--<script type="text/javascript" src="<c:url value="/"/>js/pivot.js"></script>-->
<!--<script type="text/javascript" src="<c:url value="/"/>js/d3.min.js"></script>-->
<!--<script type="text/javascript" src="<c:url value="/"/>js/c3.min.js"></script>-->
<script type="text/javascript" src="<c:url value="/"/>js/papaparse.min.js"></script>
<!--<script type="text/javascript" src="<c:url value="/"/>js/c3_renderers.js"></script>-->
<script type="text/javascript" src="<c:url value="/"/>js/bootstrap-multiselect.js"></script>
<link rel="stylesheet" href="<c:url value="/"/>css\calenderMain.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\vendorOnbarding.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\treeBox.css" type="text/css" />
<link rel="stylesheet" href="<c:url value="/"/>css\spectrum.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="<c:url value="/"/>css/jquery-ui-visuallizeResize.css">
<link rel="stylesheet" href="<c:url value="/"/>css\iVisionLogin.css" type="text/css" />
<!--<link rel="stylesheet" href="https://use.fontawesome.com/releases/v4.7.0/css/all.css">-->
<link rel="stylesheet" href="<c:url value="/"/>jqwidgets/styles/jqx.base.css" type="text/css" />
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxcore.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxpopover.js"></script>
<script type="text/javascript" src="<c:url value="/"/>jqwidgets/jqxbuttons.js"></script>

<!--<script src="<c:url value="/"/>js/calenderMain.js"></script>
<script src="<c:url value="/"/>js/etl/etlDXP.js"></script>
<script src="<c:url value="/"/>js/etl/etlComponents.js"></script>
<script src="<c:url value="/"/>js/etl/etlConnections.js"></script>
<script src="<c:url value="/"/>js/etl/dataModeller.js"></script>
<script src="<c:url value="/"/>js/etl/Filesaver.js"></script>
<script src="<c:url value="/"/>js/etl/jszip.js"></script>
<script src="<c:url value="/"/>js/etl/xlsx.min.js"></script>
<script src="<c:url value="/"/>js/etl/xlsx.full.min.js"></script>-->
<!--<script type="text/javascript" src="<c:url value="/"/>js/jquery.flowchart.js"></script> 
<script type="text/javascript" src="<c:url value="/"/>js/jquery.ajaxfileupload.js"></script>-->
<!--<script src="<c:url value="/"/>js/dxpDataAnalytics.js"></script>
<script src="<c:url value="/"/>js/DxpGenericTree.js"></script>-->
<script src="<c:url value="/"/>js/dxpWorkflow.js"></script>
<script src="<c:url value="/"/>js/DxpUnification.js"></script>
<!--<script src="<c:url value="/"/>js/decompositionTree.js"></script>-->
<script src="<c:url value="/"/>js/jquery.dragtable.js"></script>
<script src="<c:url value="/"/>js/colResizable-1.6.js"></script> 
<script src="<c:url value="/"/>js/jquery.tablednd.js"></script>
<!--<script src='https://cdn.plot.ly/plotly-2.6.3.min.js'></script>-->

<script src="<c:url value="/"/>js/loader.js"></script>
<!--<script src="<c:url value="/"/>js/echarts.min.js"></script>-->
<script src="<c:url value="/"/>js/jspdf.min.js"></script>
<script src="<c:url value="/"/>js/jspdf.plugin.autotable.js"></script>
<script src="<c:url value="/"/>js/tableExport.min.js"></script>
<script src="<c:url value="/"/>js/xlsx.core.min.js"></script>
<script src="<c:url value="/"/>js/dxpKanbanView.js"></script>
<script src="<c:url value="/"/>js/spectrum.js"></script>



<!--<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>--> 
<!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"></script>-->
<!--<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>-->
<!--<script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>-->
<!--<script src="https://fastly.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script>-->
<!--<script src='https://d3js.org/d3.v3.min.js'></script>-->
<!--<script src='https://cdn.plot.ly/plotly-2.6.3.min.js'></script>-->
<!--<script src="<c:url value="/"/>js/d3.min.js"></script>-->
<script src="<c:url value="/"/>js/plotly-2.6.3.min.js"></script>
<!--<script src="<c:url value="/"/>js/d3.v3.min.js"></script>-->
<!--<script src="<c:url value="/"/>js/echarts.min.js"></script>-->




<script>
    google.charts.load('current', {packages: ['corechart', 'annotationchart',
            'calendar', 'gantt', 'gauge', 'map', 'orgchart', 'sankey', 'timeline', 'treemap',
            'wordtree', 'bar', 'line', 'scatter', 'geochart']});

</script>