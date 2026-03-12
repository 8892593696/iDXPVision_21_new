<%-- 
    Document   : iDXPerrorPage
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
        <%@include file="commonfiles.jsp" %> 
        <title>iDXPerrorPage</title>
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
        <div class="visionBodyContent">
        <div class="visionBodyContentInner">
            
      <div class="visionLoginHandler">
 <c:choose>
 <c:when test="${ returnCde!= 'alreadyLoggedIn' && returnCde != 'concurrentUsers' }">

<div class="visionLoginHandlerInner1">
 </c:when>
<c:otherwise>
<div class="visionLoginHandlerInner">
</c:otherwise>
</c:choose>
<div class="visionLoginHandlerHeader">
<h1>${labelobj['Message'] != null ? labelobj['Message'] : 'Message'}</h1>
</div>

<div class="visionLoginHandlerMain">
<table class="visionLoginHandlerTable">
   
  <c:choose>
  <c:when test="${returnCde!='alreadyLoggedIn' && returnCde != 'concurrentUsers' }">
  <tr>
    <td class="visionLoginHandlerData"><img src="<c:url value="/"/>images/exclamation5.png"/>
    <td class="visionLoginHandlerData visionLoginHandlerDataAlgin"><span>${errorMesg}</span></td> </tr>
  </c:when>
   <c:when test="${returnCde == 'concurrentUsers'}">	
   <tr>
    <td class="visionLoginHandlerData visionLoginHandlerDataAlgin" colspan="2"><span>${errorMesg}</span></td>  
    </tr>
    <tr>
   <td class="visionLoginHandlerData visionLoginHandlerDataAlgin" colspan="2"><span>${labelobj['Would you like to Continue with this logon and terminate other sessions'] != null ? labelobj['Would you like to Continue with this logon and terminate other sessions'] : 'Would you like to Continue with this logon and terminate other sessions' }</span></td>  
   </tr>
   </c:when>
   <c:otherwise>
    <tr>
    <td class="visionLoginHandlerData visionLoginHandlerDataAlgin" colspan="2"><span>${labelobj['User'] != null ? labelobj['User'] : 'User'} ${details['userName']} ${labelobj['is already  logged in from'] != null ? labelobj['is already  logged in from'] : 'is already  logged in from'}</span></td></tr>
    <tr>   
    <td class="visionLoginHandlerData visionLoginHandlerDataAlgin" colspan="2"><span>${labelobj['IP'] != null ? labelobj['IP'] : 'IP'}: ${details['ipAddress']} ${labelobj['since'] != null ? labelobj['since'] : 'since'} ${details['loginDate']}</span></td>  
    
   </tr>
   <tr>
	<td class="visionLoginHandlerData visionLoginHandlerDataAlgin visionLoginHandlermessage" colspan="2"><span >${labelobj['Would you like to'] != null ? labelobj['Would you like to'] : 'Would you like to'}:</span></td>  
	</tr>
	 <tr>
    <!--<td class="visionLoginHandlerData"><input type="radio" name="terminate" checked onchange="selectRadio();" value="1"></td>-->
    <td class="visionLoginHandlerData"><span>${labelobj['Continue with this logon and terminate other session'] != null ? labelobj['Continue with this logon and terminate other session'] : 'Continue with this logon and terminate other session'}</span></td>
  </tr>
 <tr>
    <td class="visionLoginHandlerData visionLoginHandlerDataAlgin" colspan="2">
	<a href="<c:url value="/"/>homePage" url="<c:url value="/"/>homePage"  id="modulechooserurl"> <span class="visionLoginHandlerDataSubmit"><input type="button" class="yes" value="${labelobj['Ok'] != null ? labelobj['Ok'] : 'Ok'}"/></span></a>
	<a href="<c:url value="/"/>HomePage" ><span class="visionLoginHandlerDataCancel"><input type="button" class="no" value="${labelobj['Cancel'] != null ? labelobj['Cancel'] : 'Cancel'}"/></span></a>
	</td>
    
  </tr>
  </c:otherwise>
 </c:choose> 
 <c:choose>
 <c:when test="${returnCde=='alreadyLoggedIn'}">
 <tr>
    <td class="visionLoginHandlerData visionLoginHandlerDataAlgin" colspan="2">
	<a href="<c:url value="/"/>homePage" url="<c:url value="/"/>homePage"  id="modulechooserurl"> <span class="visionLoginHandlerDataSubmit"><input type="button" class="yes" value="${labelobj['Ok'] != null ? labelobj['Ok'] : 'Ok'}"/></span></a>
	<a href="<c:url value="/"/>HomePage" ><span class="visionLoginHandlerDataCancel"><input type="button" class="no" value="${labelobj['Cancel'] != null ? labelobj['Cancel'] : 'Cancel'}"/></span></a>
	</td>
    
  </tr>
  </c:when>
  <c:when test="${returnCde=='concurrentUsers'}">
  <tr>
    <td class="visionLoginHandlerData visionLoginHandlerDataAlgin" colspan="2">
	<a href="<c:url value="/"/>homePage" url="<c:url value="/"/>homePage"  id="modulechooserurl"> <span class="visionLoginHandlerDataSubmit"><input type="button" class="yes" value="${labelobj['Ok'] != null ? labelobj['Ok'] : 'Ok'}"/></span></a>
	<a href="<c:url value="/"/>HomePage" ><span class="visionLoginHandlerDataCancel"><input type="button" class="no" value="${labelobj['Cancel'] != null ? labelobj['Cancel'] : 'Cancel'}"/></span></a>
	</td>
    
  </tr>
 </c:when>
 <c:otherwise>
     <c:choose>
         <c:when test="${returnCde=='ldapUserNotExist' || returnCde=='userNotExist' || returnCde=='samlUserNotExist'}">
             <tr>
                 <td class="visionLoginHandlerData visionLoginHandlerDataAlgin" colspan="2"><a href="<c:url value="/"/>HomePage"><span class="visionLoginHandlerDataSubmit"><input type="button" value="${labelobj['Ok'] != null ? labelobj['Ok'] : 'Ok'}" class="yes"/></span></a></td>  
             </tr>  
         </c:when>
         <c:otherwise>
             <tr>
                 <td class="visionLoginHandlerData visionLoginHandlerDataAlgin" colspan="2"><a href="<c:url value="/"/>"><span class="visionLoginHandlerDataSubmit"><input type="button" value="${labelobj['Ok'] != null ? labelobj['Ok'] : 'Ok'}" class="yes"/></span></a></td>  
             </tr>   
         </c:otherwise>
     </c:choose>
  
</c:otherwise>
</c:choose> 	
</table>
</div>

                    <div class="overlay" id="overlay" style="display:none;"></div>
                </div>
                        </div>    
                       <!--</div> --> 
                        </div></div>
                          <script>
                              
                $(document).ready(function() {  
                
                 $( window ).resize(function() {
                
                 if($(".visionLoginHandlerInner1").height()!==null)
                {
                    var messageClass ="visionLoginHandlerInner1";  
                    
}
else if($(".visionLoginHandlerInner").height()!==null)
           {
               var messageClass ="visionLoginHandlerInner";  
           
    }

                if ($(window).width() <= 920)
                 { 
                   var loginfooter = $(".visionFooterMain").height();
                 }
                 else
                 {
                        var loginfooter = $(".visionFooterMain").height();
                 }
                    var loginheader = $(".visionHeader").height();
   var screentotal = (loginfooter-loginheader)/2;
  $('.'+messageClass).css({
   position:'fixed',
   top: ($(window).height() 
     - $('.'+messageClass).outerHeight())/2-screentotal,
   left: ($(window).width() 
     - $('.'+messageClass).outerWidth())/2
     
  });
                 
                            
                 }).resize();
                 
                
                 
               
    });
    
    $(document).ajaxSend(function (e, xhr, options) {
        var token = $('meta[name="_csrf"]').attr('content');
        var header = "X-CSRF-TOKEN";
        xhr.setRequestHeader(header, token);
//        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
//         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    });
                </script>
             
        </div>
    </body> 
    
    
</html>
