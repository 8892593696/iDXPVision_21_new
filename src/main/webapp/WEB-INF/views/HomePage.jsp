<%-- 
    Document   : Home
    Created on : Sep, 20, 2023, 6:30:30 PM
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
<meta name="csrf-token" content="">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='pragma' content='no-cache'>
<meta http-equiv='pragma' content='no-cache'>


<html>
 <head>
  
    ${headContent} 
    <script src="<c:url value="/"/>js/disableFunctions.js"></script>
 <style>
        ${styleContent} 
        #cookieConsentBanner{
            display: none;
        }
        #acceptCookies,#denyCookies{
            position: relative;
            left: 530px;
            bottom: 58px;
         }
        .cookie-message{
            margin-top: 10px;
            width: 1050px
         }
</style>
      
    </head>
 <body>
    ${bodyContent}  
    <form id="csrftokenform" method="post" target="_blank">
            <c:if test="true">
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" /> 
            </c:if> 
        </form>
    <c:choose>
            <c:when test="${not empty clientSSOURL}">                              
                <input type="hidden" id="clientSSOURL" value="${clientSSOURL}"/>
            </c:when>
            <c:otherwise>
                <input type="hidden" id="clientSSOURL" value=""/>
            </c:otherwise>
        </c:choose>
    <c:choose>
            <c:when test="${not empty ssoType}">                              
                <input type="hidden" id="ssoType" value="${ssoType}"/>
            </c:when>
            <c:otherwise>
                <input type="hidden" id="ssoType" value=""/>
            </c:otherwise>
        </c:choose>
 <script>  
     
     updateCsrfToken();
  $(document).ready(function () {
                    $(".se-pre-con").fadeOut("slow");

                });
                $(function () {
                    $('[data-toggle="tooltip"]').tooltip()
                })
                /* Santhosh Js for login Toggle */
                $(function () {
                    $('#toggleloginDiv').on('click', function () {
                        $('#visionLoginpageInner').toggle();
                        localStorage['loginClickedFlag']='Y';
                    });
                });
                /* Muni js for slick slider cards on Login */
                $(document).ready(function () {
                    $("#service-statistics").slick({
                        dots: false,
                        arrows: true,
                        speed: 2000,
                        autoplay: false,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        draggable: true,
                        infinite: false,
                        responsive: [
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                }
                            },
                            {
                                breakpoint: 991,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                }
                            },
                            {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    });
                    $('#factsStatdataCount').slick({
                        dots: false,
                        arrows: true,
                        autoplay: true,
            //        fade: true,
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplaySpeed: 5000,
                        speed: 2000,
                        pauseOnHover: true,
                        responsive: [
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1
                                }
                            }


                        ]
            //        cssEase: 'linear'
                    });
                    $('.pilog-appointments').slick({
                        dots: false,
                        arrows: false,
                        autoplay: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplaySpeed: 2000,
                        speed: 6000,
                        pauseOnHover: true,
                        cssEase: 'linear',
                        pauseOnFocus: true,
                        vertical: true,
                        verticalSwiping: true,
                        responsive: [
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 1600,
                                settings: {
                                    slidesToShow: 5,
                                    slidesToScroll: 1
                                }
                            }

                        ]
                    });


                    $('.piLog-awards').slick({
                        dots: false,
                        arrows: false,
                        speed: 1000,
                        autoplay: false,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        responsive: [
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 1026,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    });
                    $('.pilog-clients').slick({
                        dots: false,
                        arrows: false,
                        autoplay: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplaySpeed: 2000,
                        speed: 6000,
                        pauseOnHover: true,
                        cssEase: 'linear',
                        pauseOnFocus: true
                    });


                    $('.announcements').slick({
                        dots: false,
                        arrows: false,
                        autoplay: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplaySpeed: 2000,
                        speed: 6000,
                        pauseOnHover: true,
                        cssEase: 'linear',
                        pauseOnFocus: true,
                        vertical: true,
            //            verticalSwiping: false;
                        responsive: [
                            {
                                breakpoint: 1368,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    });


                    $('.feedback-wrapper').slick({
                        dots: false,
                        arrows: false,
                        autoplay: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplaySpeed: 0,
                        speed: 8000,
                        pauseOnHover: true,
                        cssEase: 'linear',
                        pauseOnFocus: true,
                        responsive: [
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    });

                    $('#pilog-eventId').slick({
                        autoplay: true,
                        arrows: false,
                        speed: 0,
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        cssEase: 'linear',
                        draggable: false,
                        autoplaySpeed: 5000,
                        pauseOnHover: false,
                        responsive: [
                            {
                                breakpoint: 767,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    });
                });
                
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
    
    try{
         updateCsrfToken();
    }catch(e){
        
    }
    

    
    
    
}); 

//$(document).ajaxSend(function (e, xhr, options) {
//        var token = $('meta[name="_csrf"]').attr('content');
//        var header = "X-CSRF-TOKEN";
//        xhr.setRequestHeader(header, token);
////        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
////         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//    });
    
  $(document).ajaxSetup({
        beforeSend: function (xhr) {
             var csrfToken = $('meta[name="csrf-token"]').attr('content');
            if (csrfToken) {
                xhr.setRequestHeader('X-XSRF-TOKEN', csrfToken);
            }
        }
    });  
    

    function iDXPSSOLogin() { 
        
        try{
        var ssoactionUrl = $("#formSSOLogin").attr("action");
        var ssoUrl = $("#clientSSOURL").val();
        console.log(ssoactionUrl);
        console.log(ssoUrl);
      if (ssoUrl != null && ssoUrl != 'null'
         && ssoUrl != '' && ssoUrl != undefined && ssoUrl != 'undefined') {
                $("#formSSOLogin").attr("action", ssoUrl);
            }
            
    }catch(e){
        
    }    
       $("#formSSOLogin").submit(); 
    
    }
    
     function iDXPSAMLSSOLogin() { 
        try{
          $.ajax({
            type: "POST",
            url: "generateSAMLSSOUrl",
            traditional: true,
            cache: false,
            success: function (result) {
                console.log(result);
              $("#formSSOLogin").attr("action", result);
               $("#formSSOLogin").submit();
//               window.open(result, "_self");
            },
            error: function (e){ 
            console.log("Enable to generate SSO URL");   
            window.location.reload(); 
             
            }
        });
          
    }catch(e){
        
    }    
    }
    
    function showNonSSOLogindiv() {
    $("#visionLoginpageOuter").css("display", "none");
    $("#visionLoginpageInner").css("display", "block");
    }
    
    function hideNonSSOLogindiv() {
    $("#visionLoginpageInner").css("display", "none");
    $("#visionLoginpageOuter").css("display", "block");
    }

  </script>  
   </body>
</html>

