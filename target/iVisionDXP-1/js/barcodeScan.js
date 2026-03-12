
var labelObject = {};



$(function () {

    var _scannerIsRunning = true;

    function startScanner() {
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: document.querySelector('#scanner-container'),
                constraints: {
                    width: 480,
                    height: 300,
                    facingMode: "environment"
                },
            },
            decoder: {
                readers: [
                    "code_128_reader"
                ],
                debug: {
                    showCanvas: false,
                    showPatches: false,
                    showFoundPatches: false,
                    showSkeleton: false,
                    showLabels: false,
                    showPatchLabels: false,
                    showRemainingPatchLabels: false,

                }
            },

        }, function (err) {
            if (err) {
                console.log(err);
                return
            }

            console.log("Initialization finished. Ready to start");
            Quagga.start();

            // Set flag to is running
            _scannerIsRunning = true;
        });

        Quagga.onProcessed(function (result) {
            var drawingCtx = Quagga.canvas.ctx.overlay,
                    drawingCanvas = Quagga.canvas.dom.overlay;


        });


        Quagga.onDetected(function (result) {
            var scannedResult = result.codeResult.code;
            console.log("Barcode detected and processed : [" + result.codeResult.code + "]", result);
            //$('#results').html(barcodeResult);
            console.log("barcode result is:::" + scannedResult);
            $('#barcodeResult').val(scannedResult);

            var barcodeinputvalue = $('#barcodeResult').val();
            if (barcodeinputvalue != null && barcodeinputvalue != '')
            {
                Quagga.stop();
                $("#barcodeScanDialogBox").dialog("close");
            }


        });

    }



    // Start/stop scanner
    window.onload = function () {
        if ($("#barcodeScannerBtn").length && window.location.protocol == 'https:') {
            $("#barcodeScannerBtn").addEventListener("click", function () {
//        document.getElementById("barcodeScannerBtn").addEventListener("click", function () {
                if (_scannerIsRunning) {
//            Quagga.stop();
                    startScanner();
                } else {
                    Quagga.stop();
                }
            }, true);
        }

    }
//    document.getElementById("barcodeScannerBtn").addEventListener("click", function () {
//        if (_scannerIsRunning) {
////            Quagga.stop();
//            startScanner();
//        } else {
//            Quagga.stop();
//        }
//    }, true);




    $("#barcodeScannerBtn").click(function () {
        $('#barcodeResult').val('');
        $("#barcodeScanDialogBox").dialog({ resizable: false,
            modal: true,
            title: (labelObject['Scanner'] != null ? labelObject['Scanner'] : 'Scanner'),
            minWidth: 500,
            maxWidth: 'auto',
            height: 340,
            overflow: 'hidden',
            fluid: true,
            buttons: [{
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {

                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                }],
            open: function () {
                 //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");

            },
            beforeClose: function (event, ui)
            {

                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");

            }
        });

    });

});

