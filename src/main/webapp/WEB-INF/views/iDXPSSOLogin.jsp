<%-- 
    Document   : iDXPSSOLogin
    Created on : 26 Dec, 2023, 9:37:24 PM
    Author     : PiLog
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"   uri="jakarta.tags.core" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>
<%@ taglib prefix="fn"  uri="jakarta.tags.functions" %>
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
        <title>iDXPSSOLogin</title>
    </head>
    <body>
       
        
    <form action="iDXPSSOCloudLogin" method="post" name="ssoLoginForm" id="ssoLoginForm"   autocomplete="off">

            <c:if test="true">
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" /> 
            </c:if> 

            <input type=hidden id=ssAutoStart name=ssAutoStart value="${ssAutoStart}" >
            <input type=hidden id=rsUsername name=rsUsername value="${rsUsername}" >
            <input type=hidden id=rsPassword name=rsPassword value="" >
            <input type=hidden id=language name=language value="${language}" >
        </form>    
     
   <div class="overlay visionLoginOverlay" id="overlay" style="display:none;"></div>
        <div class="visionLoginPopup" id="wait" style="display:none;">
            <div class="visionLoginMessageview">
                <div class="visionMessageHeader">
                    <div class="visionLoginPopupHeaderMessage">

                        ${labelobj['Message'] != null ? labelobj['Message'] : "Message"}
                    </div>
                </div>
                <div class="visionLoginMessageBody">
                    <div class="visionMessageContent">
                        <span class="visionLoginPopupBodyMessage">
                            ${labelobj['Please wait while your credentials are being authenticated'] != null ? labelobj['Please wait while your credentials are being authenticated'] : "Please wait while your credentials are being authenticated"}

                        </span></div>

                </div>
            </div>


        </div>      
        
    <script>
            $(document).ready(function () {
                $("#overlay").css("display", "block");
                $("#wait").css("display", "block");
                showLoader();
                var ssAutoStart = $("#ssAutoStart").val();
                console.log("ssAutoStart:::" + ssAutoStart);
                if (ssAutoStart != null && ssAutoStart == 'Y') {
                    $("#ssoLoginForm").submit();
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
