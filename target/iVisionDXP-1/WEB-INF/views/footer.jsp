<%-- 
    Document   : footer
    Created on : 19 Nov, 2021, 1:58:23 PM
    Author     : Onkar
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"   uri="jakarta.tags.core" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>
<%@ taglib prefix="fn"  uri="jakarta.tags.functions" %>
<!DOCTYPE html>
<div class="expendFooterInOutDivClass" id="expendFooterInOutDivClass" onclick="FooterShrink()"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>
<div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-xl-6">
                <ul class="footer-social-icons">
                    <li>
                        <a href="https://www.linkedin.com/company/piloggroup/" title="Linked In" target="_blank"><i class="fa fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/piloggroup/" title="Facebook" class="facebookFontIcon" target="_blank"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li class="header-notification">
                        <a href="https://www.instagram.com/piloggroup/" title="Instagram" target="_blank"><i class="fa fa-instagram"></i></a>
                    </li>
                    <li class="header-notification twitterxicon">
                        <a href="https://twitter.com/PiLogGroup" title="Twitter" target="_blank">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a>
                    </li>

                    <li class="header-notification">
                        <a href="https://www.youtube.com/channel/UCEOznx22QvZvTbkeJ-lj7GQ" title="You Tube" target="_blank"><i class="fa fa-youtube-play"></i></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-12 col-xl-6 text-right pilog-service-log">
                <fmt:formatDate var="currentYear" value="<%=new java.util.Date()%>" pattern="yyyy" />
                <p>Copyright &copy; ${currentYear} PiLog Group</p>
            
                 <c:choose>
                    <c:when test="${not empty IDXP_FOOTER_SRS_FLAG &&  IDXP_FOOTER_SRS_FLAG == 'N'}">                              

                    </c:when>
                    <c:otherwise>
                       <c:choose>
                <c:when test="${sessionScope.ssRole!= null}">
                 <div class="visionSrsSupport">
                    <img src="images/iDXPUI5SRS.svg" alt="contact service">
                    <!--<a href="#" onclick="navigateSrsForm('GEN_SRS_NEW_REQ')"> <span>SRS</span></a>-->
                    <a href="#" onclick="workflowBasketTabs('GEN_SRS_TAB','GEN_SRS_TAB','MM_MANAGER')"> <span>SRS</span></a>
                </div>                
                </c:when>
                <c:otherwise>
<!--                    <div class="visionSrsSupport">
                    <img src="images/SRS_icon.png" alt="contact service">
                    <a href="#" onclick="navigateSrsForm('GEN_SRS_NEW_REQ')"> <span>SRS</span></a>
                </div>-->
                </c:otherwise>
            </c:choose>
                </c:otherwise>
                    </c:choose>
                
            </div>
        </div>
    </div> 
</div>
            <script>
         $(document).ready(function () {
             var screenHeight = screen.height;
             var breadCrumbHeight = $("#breadCrumbDiv").height();
             var headerHeight = $(".pcoded-header").height();
             var footerHeight = $(".footer").height();
     //        console.log("screenHeight:::" + screenHeight);
     //        console.log("breadCrumbHeight:::" + breadCrumbHeight);
     //        console.log("headerHeight:::" + headerHeight);
     //        console.log("footerHeight:::" + footerHeight);
             var menuHeight = parseInt(screenHeight) - (parseInt(breadCrumbHeight) + parseInt(headerHeight) + parseInt(footerHeight));
     //        console.log("menuHeight:::" + menuHeight);
             menuHeight = parseInt(menuHeight)-150;
     //           console.log("menuHeight:::" + menuHeight);
             $(".pcoded-inner-content").css("height",menuHeight + "px");
         });
            </script>