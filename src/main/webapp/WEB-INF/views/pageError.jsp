<%-- 
    Document   : pageError
    Created on : 21 Dec, 2020, 5:08:28 PM
    Author     : Devint01
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
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='pragma' content='no-cache'>
<html>
    <head>
        <%--<tags:commonfiles/>--%>
        <%@include file="commonfiles.jsp" %>
        <title>PiLog Cloud Page Error</title>
        <link rel="icon" href="images/PiLog-Cloud-Logo-Large.png">
        <style>
            .custom-shape-divider-bottom-1692606309 {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                overflow: hidden;
                line-height: 0;
                transform: rotate(180deg);
            }

            .custom-shape-divider-bottom-1692606309 svg {
                position: relative;
                display: block;
                width: calc(104% + 1.3px);
                height: 124px;
            }

            .custom-shape-divider-bottom-1692606309 .shape-fill {
                fill: #0B4A99;
            }
            .errorDiv-404{
                width: 400px;
                border: 1px solid #f1f1f1;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -20%);
                padding: 8px;
            }
            .errorDiv-404 img{
                max-width: 100%;
            }
            .errorDiv-404 h3{
                font-weight: 600;
                color: #0b4a99;
            }
            @media only screen and (max-width: 767px){
                .errorDiv-404{
                    width: auto;
                    padding: 4px;
                }
                .errorDiv-404 h3{
                    font-size: 24px;
                    font-weight: 600;
                    color: #0b4a99;
                }
            }
        </style>
    </head>
    <body>
        <div id="pcoded" class="pcoded">
            <div class="pcoded-overlay-box"></div>
            <div class="pcoded-container navbar-wrapper">
                <!-- Header -->
                <c:choose>
                    <c:when test="${not empty sessionScope.ssUsername}">
                        <%--<tags:loginHeader/>--%> 
                        <%@include file="loginHeader.jsp" %>
                    </c:when>
                    <c:otherwise>
                        <%--<tags:header/>--%>
                        <%@ include file="header.jsp" %>
                    </c:otherwise>
                </c:choose>
                <!-- / Header -->
                <div class="pcoded-main-container">
                    <div class="pcoded-wrapper">
                        <!-- [ Side navigation menu ] start -->
                        <%--<tags:sideMenu/>--%>
                        <%@ include file="sideMenu.jsp" %>
                        <!-- [ side navigation menu ] end -->
                        <div class="pcoded-content">
                            <!-- Bread crumb -->

                            <!-- Bread crumb -->
                            <div class="pcoded-inner-content">
                                <div class="main-body">
                                    <div class="page-wrapper">
                                        <div class="page-body">
                                            <div class="row align-items-center error-page">
                                                <div class="col-lg-12 col-xl-12">
                                                    <div class='errorDiv-404'>
                                                        <img src="images/404pagenotfound.png" alt="" >
                                                        <!--<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>-->
                                                        <!--<h1 class="error-font">${statusCode}</h1>-->
                                                        <h3>${errorMesg}</h3>
                                                        <p>${detailMessage}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <%--<tags:chatBot/>--%>
                                            <%@include file="chatBot.jsp" %>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- footer -->
                <%--<tags:footer/>--%>
                <%@include file="footer.jsp" %>
            </div>
        </div>
        <div class="custom-shape-divider-bottom-1692606309">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
    </body>
</html>
