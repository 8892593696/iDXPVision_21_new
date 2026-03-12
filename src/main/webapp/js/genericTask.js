/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nextClickCount = 0;

$(function () {

    $("#selectRecordsCount").change(function () {

        var recordsfrom = 0;
        nextClickCount = 0;
        var tasksCount = parseInt($("#tasksCount").val());

        var showrows = parseInt($('#selectRecordsCount').val());
        if (tasksCount != null && tasksCount > 0) {
            fetchTasks('N', 'next', recordsfrom, showrows);
        }
        // nextClickCount= nextClickCount-1;



    });



    $("#prev").click(function () {

        var recordsfrom = parseInt($("#previterationCountId").val());
        var showrows = parseInt($('#selectRecordsCount').val());
        if (recordsfrom !== null && recordsfrom >= showrows) {
            nextClickCount = nextClickCount - 1;
            if (nextClickCount != null && nextClickCount >= 0) {
                fetchTasks('N', 'prev', recordsfrom, showrows);
            }
            if (nextClickCount < 0) {
                nextClickCount = 0;
            }
        }



    });


    $("#next").click(function () {

        var recordsfrom = parseInt($("#nextiterationCountId").val());
        var totalRecordsCount = parseInt($("#totalRecordsCount").val());
        var showrows = parseInt($('#selectRecordsCount').val());
        if (recordsfrom !== null && recordsfrom < totalRecordsCount) {
            nextClickCount++;
            fetchTasks('N', 'next', recordsfrom, showrows);
        }


    });



    $("#Task").click(function () {
        var recordsfrom = 0;
        nextClickCount = 0;
        var showrows = 10;
        if ($('.visionTask').css('display') !== 'none')
        {

            //                          $(".visionmenuinner").removeClass("visionMenuAdjust");


            $("#Task img").attr('src', 'images/task_List-02.png');
            $('.visionTask').hide();
            $('.visionmenuinner').removeClass("visionMenuAdjust");


            //                            $('.visionmenuinner').removeClass("visionMenuAdjust").show("slide", {direction: "right"}, 1000);
        } else
        {

            //                          $(".visionmenuinner").addClass("visionMenuAdjust");

            $("#Task img").attr('src', 'images/arrowRightAnim.gif');
            var fetchFlag = $(".visionTask").attr("data-fetchFlag");//data-fetchFlag
            //                            $('.visionTask').show();
            //                                $('.visionTask').show("slide", {direction: "right"}, 900);
            if (fetchFlag != null && fetchFlag == 'N') {

                $(".visionTask").attr("data-fetchFlag", "Y");

                fetchTasks(fetchFlag, 'next', recordsfrom, showrows);



            } else {
                $('.visionTask').show();
            }
            $('.visionmenuinner').addClass("visionMenuAdjust");

            $('body,html').stop().animate({
                scrollTop: 0
            }, 1000);
            //                            $('.visionmenuinner').addClass("visionMenuAdjust").show("slide", {direction: "left"}, 1000);


        }

    });

    nextClickCount = 0;
//$("#prev").append("<a href='#' >  &#9668;  </a>");
//$("#next").append("<a href='#' >  &#9658;  </a>");

    $("#prev").append("<a href='#' class='visionPrevArrow'>  &#9664;  </a>");
    $("#next").append("<a href='#' class='visionNextArrow'>  &#9654;  </a>");

//$("#prev").append("<button> &#9664; </button>");
//$("#next").append("<button> &#9654; </button>");

});

function fetchTasks(fetchFlag, direction, recordsfrom, showrows) {
    callStartAjax();
    if (fetchFlag != null && fetchFlag == 'N') {
        $.ajax({
            type: "post",
            url: "fetchTasks",
            cache: false,
            data: {
                recordsfrom: recordsfrom,
                direction: direction,
                showrows: showrows
            },
            traditional: true,
            dataType: 'html',
            success: function (response) {
                alert("response::::" + response);
                $("#visionTaskActionItemsId").html(response);
                callEndAjax();
                $('.visionTask').show();
                var tasksCount = parseInt($("#tasksCount").val());
                if (tasksCount > 0 && nextClickCount != null && nextClickCount >= 0) {
                    var from = (nextClickCount * showrows) + 1;
                    var to = (nextClickCount * showrows) + +tasksCount;
                    //var to =((nextClickCount+1)*10)>=totalRecordsCount? totalRecordsCount :((nextClickCount+1)*10);
                } else {
                    from = 0;
                    to = 0;
                }
                $("#recordsCount").html(from + " - " + to);


            },
            error: function (e) {
                sessionTimeout(e);
            }

        });
    }

}