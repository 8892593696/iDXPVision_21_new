/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {

    // TO DISABLE MOUSE RIGHT CLICK EVENT
    $(document).bind('contextmenu', function (e) {
        e.preventDefault();
    });
    $(document).bind('oncontextmenu', function (e) {
        e.preventDefault();
    });
    $(document).bind('keydown', function (e) {
        disableKeyboardMouseEvents(e);
    });
    $(document).bind('onkeydown', function (e) {
        disableKeyboardMouseEvents(e);
    });


    // TO DISABLE F-12 KEY EVENT
    document.addEventListener('keydown', disableKeyboardMouseEvents(event));
    document.oncontextmenu = new Function("return false")
    document.addEventListener('onkeydown', disableKeyboardMouseEvents(event));
//    $(document).keydown(function (event) {
//        if (event.key == 123) {
//            event.preventDefault();
//        }
//        // TO DISABLE Ctrl+U(View Source)
//        if (event.ctrlKey && (event.key === 85 || event.key === 117)) {
////            return false;
//             event.preventDefault();
//        }
//        if (event.ctrlKey  && event.shiftKey && event.key == 105) {
////            return false;
//             event.preventDefault();
//        }
//    });

// TO DISABLE BROWSER BACKWARD NAVIGATION
    var myhref = window.location.href + '#';
// window.history.pushState(null, null, myhref);
//                        window.onpopstate = function () {
//                        window.history.go();
//                    }
//    window.onload = disableBack();
//    window.onpageshow = function (evt) {
//        if (evt.persisted)
//            disableBack();
//    }
    history.pushState(null, null, myhref);
    window.addEventListener('popstate', function () {
        history.pushState(null, null, myhref);
    });

//    document.onselectstart = new Function("return false");
//  $(document).ready(function () {
////                      history.pushState(null, null, null);
////                        history.back();
////                        window.onpopstate = () => history.forward();
////                        window.onpopstate = function () {
////                            history.go(1);
//                           window.history.pushState(null, null, null);
//                        window.onpopstate = function () {
//                        window.history.go(1);
//                        }; 
//                        };
//});


    $("#dxpTabsMenus").resizable({
        disabled: true
    });
    $("#dxpTabs").resizable({
        disabled: true
    });
    $("#dxpMenus").resizable({
        disabled: true
    });
    $("#dxpDomainMenus").resizable({
        disabled: true
    });

});

function disableBack() {
    event.preventDefault();
    window.history.forward();
}
function disableKeyboardMouseEvents(event) {
    try {
        if (event.keyCode == 123) {
            event.preventDefault();
        }
    } catch (e) {

    }


    // TO DISABLE Ctrl+U(View Source)
//        if ((event.key === 85 || event.key === 117)&& event.ctrlKey) {
////            
//             event.preventDefault();
//             return false;
//        }
//        if (event.key == 105 && event.ctrlKey  && event.shiftKey) {
////            
//             event.preventDefault();
//             return false;
//        }


    if (event.ctrlKey && (event.keyCode == 85 || event.keyCode == 117)) {

        event.preventDefault();
        return false;
    }

    if (event.ctrlKey && event.shiftKey && event.keyCode == 105) {
        event.preventDefault();
        return false;
    }
    if (event.ctrlKey && event.keyCode == 65) {
        event.disableTextSelect();
        event.preventDefault();
        return false;
    }

// if (event.ctrlKey) {
//        if (event.keyCode === 85 || event.keyCode === 117) {
//            event.preventDefault();
//            return false;
//        }
//    }
// if (event.ctrlKey) {
//        if (event.shiftKey) {
//            if (event.keyCode == 105) {
//                event.preventDefault();
//                return false;
//            }
//        }
//    }

//    if (event.ctrlKey) {
//        if (event.keyCode == 65) {
//            event.disableTextSelect();
//            event.preventDefault();
//            return false;
//        }
//    }



} 