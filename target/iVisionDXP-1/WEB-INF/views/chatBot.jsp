<%-- 
    Document   : chatBot
    Created on : 19 Nov, 2021, 2:10:58 PM
    Author     : PiLog
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"   uri="jakarta.tags.core" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>
<%@ taglib prefix="fn"  uri="jakarta.tags.functions" %>
<!DOCTYPE html>


<!--18-10-2021-->
<c:choose>
                    <c:when test="${not empty IDXP_HEADER_HOWMAYHELP_FLAG &&  IDXP_HEADER_HOWMAYHELP_FLAG == 'N'}">                              

                </c:when>
                <c:otherwise>
                   <div class="mainchatcontainer">
    <div class="chatIcon" onclick="chatApplication();">
      <img src="images/chatbot-blue.png" ><span class="howmayhelp">How may i help you</span>
    </div>
    <div id="chat" class="chatBox">
      <div class="container mainHeader">   
        <div class="row  chatBotHeaderTop">
          <div class="col-12 leftBotIcon">
            <span><img src="images/chatbot-blue.png">
            </span>
<!--            <span>
              <p style="margin-top: -35px;">Hello...</p>
            </span>-->
            <p>PiLog, Personal Assistant</p>
          </div>

          <div class="rightIcons">
<!--            <span class="minmaxIcon" onclick="minimizeChatBot();"><img src="images/minimize.png" id="maxminIcon"
                title="minimize"></span>-->
            <span class="chatbotClose" onclick="closeChatBot();"><img src="images/closeIcon.png"
                title="close"></span>
          </div>

        </div>
      </div>
    </div>
  </div> 
                    </c:otherwise>
                </c:choose>  

<script>
   $(document).ready(function() {
    $(".chatIcon").ready(function() { 
        $(".howmayhelp").animate({width: '144px'}, 1000);
//        setTimeout(function() {
//            $(".howmayhelp").animate({width: '0px'}, 600);
//        }, 5000); 
    });
    $(".chatIcon").click(function() { 
        $(".howmayhelp").hide();
        
    })
});
</script>
