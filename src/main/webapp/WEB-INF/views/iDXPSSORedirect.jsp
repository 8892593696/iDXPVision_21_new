<%-- 
    Document   : iDXPSSORedirect
    Created on : 26 Dec, 2023, 9:37:24 PM
    Author     : PiLog
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"   uri="http://jakarta.ee/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://jakarta.ee/jsp/jstl/fmt" %>
<%@ taglib prefix="fn"  uri="http://jakarta.ee/jsp/jstl/functions" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags" %>
<!DOCTYPE html>
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="keygeneration" content="${secretKey}">
<meta name="${_csrf.parameterName}" content="${_csrf.token}">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='pragma' content='no-cache'>

<html>
    <head>
        <%@ include file="beforeLoginFiles.jsp" %>
        <title>iDXPSSORedirect</title>
    </head>
    <style>
        .se-pre-con {
            position: fixed;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            z-index: 9999;
            background: url(images/PiLog_Gif.gif) center no-repeat #f8f9f9;
            background-size: 90px 82px;
        }

        .visionLoginOverlay
        {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: rgba(0,0,0,0.5);
            z-index: 10;
        }

        .visionLoginPopup
        {
            width:100%;
        }

        .visionLoginPopup
        {
            width:100%;
        }
        .visionLoginMessageview
        {
            width: 450px;
            height: 125px;
            background:#fff;
            border-radius:10px;
            position:absolute;
            top:0px;
            bottom:0px;
            left:0px;
            right:0px;
            margin:auto;
            z-index: 99999;
            border:1px solid #0071c5;
        }
        .visionMessageHeader
        {
            background:#0071c5;
            color:#fff;
            border-radius: 7px 7px 0px 0px;
            width:100%;
            height:30px;
        }
        .visionLoginPopupHeaderMessage
        {
            line-height:30px;
            margin-left: 10px;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 13px;
            font-weight:bold;
        }
        .visionLoginMessageBody
        {
            width:100%;
            height:95px;
        }
        .visionMessageLoader,.visionMessageContent
        {
            float:left;
            height:95px;
        }
        .visionMessageLoader
        {
            width:20%;
        }
        .visionMessageContent
        {
            width:80%;
            display: table;
        }
        .visionLoginPopupBodyMessage
        {
            display: table-cell;
            vertical-align: middle;
            color:#333 !important;
            font-size:13px !important;  
            font-family: Arial, Helvetica, sans-serif;
            font-size: 13px;
        }
        .visionLoginHandler
        {
            width:100%;
        }
        .visionLoginHandlerInner,.visionLoginHandlerInner1
        {
            height:auto;
            border:1px solid #0071c5;
            font: normal 12px/16px "Helvetica Neue",Helvetica,Arial,sans-serif;
            border-radius:10px;
            position: absolute;
        }
        .visionLoginHandlerInner
        {
            width: 450px;
        }
        .visionLoginHandlerInner1
        {
            width: 350px;
        }
        .visionLoginHandlerHeader
        {
            background:#0071c5;
            height:30px;
            line-height:30px;
            border-top-left-radius:7px;
            border-top-right-radius:7px;
            width:100%;
            padding-left:1px;
            margin-top:-1px;
        }
        .visionLoginHandlerHeader h1 
        {
            text-align:left;
            color:#fff;
            font-size: 13px;
            font-weight: bold;
            padding-left: 10px;
            margin:0px;
        }
        .visionLoginHandlerData a
        {
            text-decoration:none;
        }
        .visionLoginHandlerTable  {border-collapse:collapse;border-spacing:0;margin:0px auto;}
        .visionLoginHandlerTable td{padding: 5px;word-break:normal;}
        .visionLoginHandlerTable th{font-weight:normal;padding: 5px;word-break:normal;}
        .visionLoginHandlerTable .visionLoginHandlerData{vertical-align:middle}
        @media screen and (max-width: 767px) {.visionLoginHandlerTable {width: auto !important;}.visionLoginHandlerTable col {width: auto !important;}.visionLoginHandlerMain {overflow-x: auto;-webkit-overflow-scrolling: touch;margin: auto 0px;}}
        .visionLoginHandlerData img
        {
            width:35px;
            height:35px;
        }
        .visionLoginHandlerDataAlgin
        {
            text-align:center;
        }
        .visionLoginHandlerData span
        {
            color: graytext;
            font-size:14px;
            line-height: 23px;
        }
        .visionLoginHandlermessage
        {
            text-align:left;
        }
        .visionLoginHandlerMain 
        {
            padding:15px;
        }
        .visionLoginHandlerTable  input[type="radio"]
        {
            margin-top: -1px;
            vertical-align: middle;
        }
        _::-webkit-:not(:root:root), .visionLoginHandlerTable  input[type="radio"]
        {
            margin-top:0px;  
        }
        .visionLoginHandlerDataCancel 
        {
            margin-left:20px;
        }
        .visionLoginHandlerDataSubmit input[type="button"]
        {
            background-image: url('../images/submit_icon_blue.png');
        }
        .visionLoginHandlerDataSubmit input[type="button"]:hover
        {
            background-image: url('../images/submit_icon_white.png'); 
        }
        .visionLoginHandlerDataCancel input[type="button"]
        {
            background-image: url('../images/cancel_icon _blue.png');  
        }
        .visionLoginHandlerDataCancel input[type="button"]:hover
        {
            background-image: url('../images/cancel_icon.png');  
        }

    </style> 
    <body>
        <div style="display:none;">   
            <input type="hidden" id="redirectpageStr" value="${redirectpage}"/>      
            <input type="hidden" id="errorMesgStr" value="${errorMesg}"/>
            <!--<input type="hidden" id="resultObjStr" value="${resultObj}"/>-->
        </div>
        <form action="" method="post" name="iDXPhomePage" id="iDXPhomePage"   autocomplete="off">

            <c:if test="true">
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" /> 
            </c:if> 
        </form>    

        <div class="overlay visionLoginOverlay" id="overlay" style="display:none;"></div>
        <div class="visionLoginPopup" id="wait" style="display:none;">
            <div class="visionLoginMessageview">
                <div class="visionMessageHeader">
                    <div class="visionLoginPopupHeaderMessage" >

                        ${labelobj['Message'] != null ? labelobj['Message'] : "Message"}
                    </div>
                </div>
                <div class="visionLoginMessageBody">
                    <div class="visionMessageContent">
                        <span class="visionLoginPopupBodyMessage" id="visionLoginPopupBodyMessage"></span></div>
                </div>
            </div>


        </div>      

        <script>
            $(document).ready(function () {
                showLoader();
                var redirectpage = $("#redirectpageStr").val();
                var errorMesg = $("#errorMesgStr").val();
                var resultObjStr = ${resultObj};
                console.log(resultObjStr);
               try{
               var userName = '${ssUsername}';    
               getSSOLoginSessionObj (userName);
               }catch(e){
               }
               
                
                
    //                var redirectpage = resultObject['redirectpage'];
    //                var errorMesg = resultObject['errorMesg'];
                if (errorMesg != null && errorMesg != '' && errorMesg != undefined)
                {
                    document.getElementById("visionLoginPopupBodyMessage").innerText = errorMesg;
                    $("#overlay").css("display", "block");
                    $("#wait").css("display", "block");
                    $('#iDXPhomePage').attr('action', 'homePage');
                    stopLoader();
                    $("#iDXPhomePage").submit();
                } else if (redirectpage != null && redirectpage != '' && redirectpage != undefined) {
                    $('#iDXPhomePage').attr('action', redirectpage);
                    stopLoader();
                    $("#iDXPhomePage").submit();
                } else {
                    $('#iDXPhomePage').attr('action', 'homePage');
                    stopLoader();
                    $("#iDXPhomePage").submit();
                }
                stopLoader();
                $("#overlay").css("display", "none");
                $("#wait").css("display", "none");
            });

            $(document).ajaxSend(function (e, xhr, options) {
                var token = $('meta[name="_csrf"]').attr('content');
                var header = "X-CSRF-TOKEN";
                xhr.setRequestHeader(header, token);
    //        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            });
        </script>    
    </body>
</html>
