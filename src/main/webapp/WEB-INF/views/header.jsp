<%-- 
    Document   : header
Created on : 19 Nov, 2021, 10:50:50 AM
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
<!--<meta name="${_csrf.parameterName}" content="${_csrf.token}">-->
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='pragma' content='no-cache'>
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

</style> 
<script src="<c:url value="/"/>js/loginOperations.js"></script>

<div class="se-pre-con"></div>
${mainHeader}
<div class="modal fade signInpopUp " id="accountActivationModal" role="dialog">
    <div class="modal-dialog opacity-animate3">

        <!-- Modal content-->
        <div class="modal-content visionLoginpageInner accountActivationModalInner">
            <div class="modal-header">
                <div class="signinLogo">
                    <img src="images/PilogCloudRedBlue.gif" class="pilogcloudLogo" alt="pilogcloud">
                </div>
                <!-- newly added the div Ends here -->
                <!--14322--> 
                <div class="signintext divSplitter">
                    <!--                    <div>
                                            <img src="images/construction_bgi.jpg" class="bgiSize" alt="BGI">
                                        </div>-->
                    <div class="welcomeContent">
                        <h6 class="modal-title text-center userWelcomeText">Welcome! You have Successfully activated your account
                        </h6>
                        <h8 class="secondaryWelcomeContent"> The entire office welcomes you, and we hope to have a long and successful journey together.</h8>
                        <h8 class="secondaryWelcomeContent"> You can close the window and goto the main page this will automatically close in 10 seconds</h8>

                    </div>
                </div>
                <button type="button" class="close" data-dismiss="modal" onclick="closeLoginForm()"style="margin: 0; top: 0; right: 0; position: absolute;">&times;</button>
            </div>

        </div>
    </div>
</div>
<div  id="CheckOutModel" ></div>                        
<div  id="modalInfoDailogDiv">

</div>
<div class="signintext divSplitter" style="display:none;">

    <div class="welcomeContent">
        <h6 class="modal-title text-center userWelcomeText">Welcome! You have Successfully activated your account
        </h6>
        <h8 class="secondaryWelcomeContent"> The entire office welcomes you, and we hope to have a long and successful journey together.</h8>
    </div>
</div>
<script>
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
            arrows: false,
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
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }

            ]
        });


        $('.piLog-awards').slick({
            dots: false,
            arrows: false,
            speed: 1000,
            autoplay: true,
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

    


</script> 