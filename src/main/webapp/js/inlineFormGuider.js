

/* 

    Inline Form Guider v1
    Abhishek B. / 

 */
(function ($) {

    $.fn.inlineFormGuider = function (options) {

        let $this = $(this);
                
        let settingsStaticForm = $.extend({
            formResponses: {},
            currentlyActiveIdx: null,
            inputStructures: [],
            submitButton: "",
            togglButtonContainer: "",
            showMode: false
        }, options);
         
         
        function createSwitch(){
            
            let switchHtml = `<div class="staticFormSwitch attachSwitchAction"><label class="staticswitch">
                <input class="staticswitchCheckbox" type="checkbox" checked>
                <span class="staticswitchslider staticswitchround"></span>
              </label></div>`;
            
            if(settingsStaticForm.togglButtonContainer.length > 0){
//                $(settingsStaticForm.togglButtonContainer).append(switchHtml);
                
                $(".attachSwitchAction .staticswitchCheckbox").change(function(){
                    if($(this).is(":checked")){
                        settingsStaticForm.showMode = true;
                        return;
                    }
                    
                    settingsStaticForm.showMode = false;
                })
            }
            
        }
        
       function createBoilerPlate() {
           if($(".guidedFormModule").length > 0){
               return;
           }
            $("body").append(`
            <div class="staticGuideFormBackdrop"></div>
            <div class="guidedFormModule StaticGuideModule">
                <div class="guidedFormModuleInnerStatic">
                    <div class="guidedFormStep showstep">
                        <div class="guidedFormBody">
                            <div class="guidedFormQuestion StaticQuestion">
                            <h4 class="guidedFormQues"></h4>
                            <p class="guidedFormDesc"></p>
                            <button id="closePanel" class=" guidedFormClose "><i class="fa fa-times"></i></button>
                            </div>
                            <div class="guidedFormInputBox">
                            </div>
                            <div class="guidedFormOptions optionSelectRegion ">
                            </div>
                        </div>
                        <div class="guidedFormFooter">
                        
                        
                        <button id="backPanel" class="guidedFormFooterBtn guidedFormBtnBack "><i class="fa fa-arrow-left"></i> Previous</button>
                        <div></div>
                        <button id="nextPanel" class="guidedFormFooterBtn guidedFormBtnNext ">Next <i class="fa fa-arrow-right"></i></button>
                        <button id="savePanel" class="guidedFormFooterBtn guidedFormBtnSaveInputs "><i class="fa fa-floppy-o"></i> Save</button>
                        </div>
                    </div>
                </div>
            </div>
            `)
        }
        
        function checkHasAttribute($t,attrName){
            let attr = $t.attr(attrName);
            if(typeof attr !== 'undefined' && attr !== false){
                return true;
            }
            return false;
        }
        
        function generateTextAreaOptionMF($t){
            $(".guidedFormInputBox").append(`
            <textarea class="guidedFormInputText vendorSearchName"   placeholder="${ (checkHasAttribute($t, "placeholder")) ? $t.attr("placeholder") : "" }" >${($t.val().length > 0) ? `${ $t.val() }`: ``}</textarea>
        `);
        }
        
        function generateInputOptionMF($t){

            $(".guidedFormInputBox").append(`
                <input class="guidedFormInputText vendorSearchName" placeholder="${ (checkHasAttribute($t, "placeholder")) ? $t.attr("placeholder") : "" }" value="${ (checkHasAttribute($t,"value")) ? $t.attr("value") : "" }"></input>
            `);
        }
        
        function clearAndHideModalOptions(){
            let $guidedFormElem = $(".guidedFormModule");

            $guidedFormElem.find(".guidedFormQuestion h4, .guidedFormQuestion p,.guidedFormInputBox, .guidedFormOptions")
                    .removeClass("animate__animated animate__fadeIn")
                    .addClass("animate__animated animate__fadeOut");

            //reset everything
            $guidedFormElem.find(".guidedFormQuestion h4, .guidedFormQuestion p,.guidedFormInputBox, .guidedFormOptions").html("");
        }
        
        function prevInputField(){
            let cIp = parseInt(settingsStaticForm.currentlyActiveIdx);
            
            //console.log(cIp, "cIp");
            let _cid = $(".mfGuideInput"+(cIp-1)).attr("id");
            
            if($("#dd"+ _cid).length > 0){
                $("#dd"+ _cid).trigger("click");
            }
            
            if(cIp == 0){
                return;
            }else if(cIp == 1){
                generateInputPanel($(".mfGuideInput" + (cIp - 1)));
            }else{
                generateInputPanel($(".mfGuideInput" + (cIp - 1)));
            }
            
            if(cIp == $(".mfguider").length){
                //looped through all the elements
                $(".guidedFormBtnNext ").fadeOut(0);
            }else{
                $(".guidedFormBtnNext ").fadeIn(0);
            }
        }
        
        function nextInputField(){
            let cIp = parseInt(settingsStaticForm.currentlyActiveIdx);
            
            //console.log(cIp, "cIp");
            
            let _cid = $(".mfGuideInput"+(cIp+1)).attr("id");
            
            if($("#dd"+ _cid).length > 0){
                $("#dd"+ _cid).trigger("click");
            }
            
            if($(".mfGuideInput"+cIp)[0].tagName == "SELECT"){
                $el = $(".mfGuideInput"+cIp);
                if(checkHasAttribute($el,"required") && ! $(".gudSelectedOpt").length > 0){
                    alert("Please select one of the option");
                    return;
                }
                $(".guidedFormOptions .gudSelectedOpt").map(function(){
                    let __ov = $(this).attr("data-optionvalue");
                    $(".mfGuideInput"+cIp).find("[selected]").removeAttr("selected");
                    $(".mfGuideInput"+cIp).find(`[value="${__ov}"]`).attr("selected","selected");
                });

            }else{
                //check current input
                if($(".guidedFormInputBox .guidedFormInputText ").length > 0){
                    let __val = $(".guidedFormInputBox .guidedFormInputText ").val();
                    if(!__val.trim().length > 0 && $(".guidedFormInputBox .guidedFormInputText ").attr("required") == "required"){
                        alert("Pleae fill the details");
                        return;
                    }
                    $(".mfGuideInput"+cIp).val(__val);
                    $(".mfGuideInput"+cIp).attr("value",__val);
                }
            }

            
            
            if(cIp > 1){
                $(".guidedFormBtnBack ").fadeIn();
            }
            
            if(cIp == $(".mfguider").length - 2){
                //looped through all the elements
                $(".guidedFormBtnNext ").fadeOut(0);
                generateInputPanel($(".mfGuideInput" + (cIp + 1)));
            }else{
                //show next element
                generateInputPanel($(".mfGuideInput" + (cIp + 1)));
                $(".guidedFormBtnNext ").fadeIn(0);
            }
        }
        
        function showBackdrop(){
            $(".staticGuideFormBackdrop").fadeIn();
        }
        
        function controlSlideFunctionAttacher(){
            //curent Input
            
            $(".guidedFormBtnNext ").unbind("click").click(function(){
                nextInputField();
            });
            
            $(".guidedFormBtnBack  ").unbind("click").click(function(){
                prevInputField();
            })
      
        }
        
        function mfSubmitFormSet(){
            
            let cIp = parseInt(settingsStaticForm.currentlyActiveIdx);
            
            if($(".mfGuideInput"+cIp)[0].tagName == "SELECT"){
                $el = $(".mfGuideInput"+cIp);
                if(checkHasAttribute($el,"required") && ! $(".gudSelectedOpt").length > 0){
                    alert("Please select one of the option");
                    return;
                }
                $(".guidedFormOptions .gudSelectedOpt").map(function(){
                    let __ov = $(this).attr("data-optionvalue");
                    $(".mfGuideInput"+cIp).find("[selected]").removeAttr("selected");
                    $(".mfGuideInput"+cIp).find(`[value="${__ov}"]`).attr("selected","selected");
                });

            }else{
                //check current input
                if($(".guidedFormInputBox .guidedFormInputText ").length > 0){
                    let __val = $(".guidedFormInputBox .guidedFormInputText ").val();
                    if(!__val.trim().length > 0 && $(".guidedFormInputBox .guidedFormInputText ").attr("required") == "required"){
                        alert("Pleae fill the details");
                        return;
                    }
                    $(".mfGuideInput"+cIp).val(__val);
                    $(".mfGuideInput"+cIp).attr("value",__val);
                }
            }
            
            if( settingsStaticForm.submitButton.length > 0 ){
                $(settingsStaticForm.submitButton).trigger("click");
            }
        }
        
        function submitButtonFunctionAttacher(){
            $(".guidedFormBtnSaveInputs").click(function(){
                mfSubmitFormSet();
                $(".guidedFormModule").removeClass("showGuidedForm animate__animated animate__zoomIn");
                $(".staticGuideFormBackdrop").fadeOut();
            })
            
        }
        
        function animateAndShowModalOptions(){
            let $guidedFormElem = $(".guidedFormModule");

            $guidedFormElem.find(".guidedFormQuestion h4, .guidedFormQuestion p,.guidedFormInputBox, .guidedFormOptions")
                    .removeClass("animate__animated animate__fadeOut")
                    .addClass("animate__animated animate__fadeIn");
            
            if(parseInt(settingsStaticForm.currentlyActiveIdx) < 1){
                $(".guidedFormBtnBack ").fadeOut();
            }else{
                $(".guidedFormBtnBack ").fadeIn();
            }
            
            if(parseInt(settingsStaticForm.currentlyActiveIdx) == $(".mfguider").length - 1){
                //looped through all the elements
                $(".guidedFormBtnNext ").fadeOut(0);
                $(".guidedFormBtnSaveInputs").fadeIn(0);
            }else{
                $(".guidedFormBtnNext ").fadeIn(0);
                $(".guidedFormBtnSaveInputs").fadeOut(0);
            }

         }

         function generateGuidedOptions(ops) {
            let $guidedFormElem = $(".guidedFormModule");
            
            //console.log(ops);

            ops.find("option").map(function(){

                let $op = $(this);
                
                //console.log($op);
                $guidedFormElem.find(".guidedFormOptions").append(`<div class="guidedOption attachPanelThreadAction ${ (checkHasAttribute($op,"selected")) ? " gudSelectedOpt " : " " } attachPanelThreadAction" data-optionvalue=${ $op.attr("value")}>
                    <i class="fa fa-check" aria-hidden="true"></i><span>${ $op.html() }</span>
                </div>`);
            })

            

            $(".guidedOption").map(function (i) {
                let $t = $(this);
                setTimeout(() => {
                    $t.addClass("animate__animated animate__zoomIn");
                }, i * 250);
            })

        }

        function generateSelectOptionSearchMF($t){

            //loop through the select options and append them
            generateGuidedOptions($t);

            //attach the serach box
            $(".guidedFormInputBox").append(`
                <input class="guidedFormInputText searchInput attachGuidedSearchInput" placeholder="${ (checkHasAttribute($t, "placeholder")) ? $t.attr("placeholder") : "" }"></input>
            `);

            attachGuidedOptionSearch();
            attachThreadMOActions();

        }

        function attachThreadMOActions() {
            let $cont = $(".guidedFormModule");
            $cont.find(".attachPanelThreadAction").map(function () {
                $(this).click(function () {

                            $(".gudSelectedOpt").removeClass("gudSelectedOpt");
                            $(this).addClass("gudSelectedOpt");
                })
                $(this).removeClass("attachPanelThreadAction")
            })

        }

        function attachGuidedOptionSearch(){
            $(".attachGuidedSearchInput").map(function(){
                $(this).keyup(function(){   

                    let __v =  $(this).val();

                    if(!__v.length > 0){
                        $(".guidedFormOptions .guidedOption ").map(function(){
                            $(this).fadeIn(0);
                        });
                        return;
                    }

                   $(".guidedFormOptions .guidedOption ").map(function(){
                        let __t = $(this).find("span").text().trim().toLowerCase();

                        if(__t.indexOf(__v.trim().toLowerCase()) != -1){
                            $(this).fadeIn(0);
                        }else{
                            $(this).fadeOut(0);
                        }
                   })
                });
                $(this).removeClass("attachGuidedSearchInput");
            })
        }
        
        function generateInputPanel($t){
            
            showBackdrop();
            clearAndHideModalOptions();
            let quesName = (checkHasAttribute($t,"data-questionName")) ? $t.attr("data-questionName") :  $t.attr("data-label");
            let quesDesc = (checkHasAttribute($t,"data-questionDesc")) ? $t.attr("data-questionDesc") : "Please enter below,";
            let quesType = (checkHasAttribute($t,"data-questionDesc")) ? $t.attr("data-questionType") : "regular";
            
            settingsStaticForm.currentlyActiveIdx = $t.attr("data-mfguideindex");
            
            //console.log($t, $t[0].tagName, "tagName");
            
            switch($t[0].tagName){
                case "INPUT":
                    generateInputOptionMF($t);
                    $(".guidedFormInputBox ").fadeIn(0);
                    $(".guidedFormOptions ").fadeOut(0);
                    break;
                case "SELECT":
                    generateSelectOptionSearchMF($t);
                    $(".guidedFormInputBox , .guidedFormOptions ").fadeIn(0);
                    //console.log("select")
                    break;
                case "TEXTAREA":
                    //console.log("textarea");
                    generateTextAreaOptionMF($t);
                    $(".guidedFormInputBox ").fadeIn(0);
                    $(".guidedFormOptions ").fadeOut(0);
                    break;
            }
            
//            //console.log(quesName);
            
            let $guidedFormElem = $(".guidedFormModule");
            $guidedFormElem.find(".guidedFormQuestion h4").html(quesName);
            $guidedFormElem.find(".guidedFormQuestion p").html(quesDesc);
            
            animateAndShowModalOptions();
            setPanelPosition($t);
        }
        
        function setPanelPosition($t){
            let offset = $t.offset();
            let w = $(window);
//            let qSecHt = $(".guidedFormQuestion.StaticQuestion").height();
            let xPos = (offset.left-w.scrollLeft());
            let yPos =(offset.top-w.scrollTop()-32 + 30);
            let eWid = $t.width();
            $(".StaticGuideModule")
                    .css("top",yPos + "px")
                    .css("left", xPos + "px")
                    .css("width",eWid + "px");
        }
        
        function attachClickShowAction(){
            
            let i =0;
            
            $this.find('input[type="text"], select, textarea').map(function(){
                
                let $t = $(this);
                if($t.hasClass("mfGuideIgnore")){
                    return;
                }
                $(this).addClass("mfGuideInput"+i).addClass("mfguider");
                $(this).attr("data-mfGuideIndex", i);
                
                $(this).change(function(){
                    
                    if(!settingsStaticForm.showMode){
                        return;
                    }
                    let cIp = parseInt(settingsStaticForm.currentlyActiveIdx);
                    generateInputPanel($(".mfGuideInput"+(cIp)));
                    //TODO
//                    nextInputField();
                })
                
                $(this).click(function(){
                    
                    if(!settingsStaticForm.showMode){
                        return;
                    }
                    
                    generateInputPanel($(this));
                    $(".guidedFormModule").addClass("showGuidedForm animate__animated animate__zoomIn");
                    
                    let _cid = $(this).attr("id");
            
                    if($("#dd"+ _cid).length > 0){
                        $("#dd"+ _cid).trigger("click");
                    }

                })
                i++;
            })
        }
        
        function showmfGuidedFormPanel(){
            generateInputPanel($(".mfGuideInput0"));
            $(".guidedFormModule").addClass("showGuidedForm animate__animated animate__zoomIn");
        }
        
        
        function attachClosePopupAction(){
            $(".guidedFormModule").find(".guidedFormClose").click(function(){
                $(".guidedFormModule").removeClass("showGuidedForm animate__animated animate__zoomIn");
                $(".staticGuideFormBackdrop").fadeOut();
            })
        }
        function attachKeyboardAction(){
            $(window).keyup(function(event){
                
                
                let cIp = parseInt(settingsStaticForm.currentlyActiveIdx);
                let total = $(".mfguider").length;
                
//                console.log("keyup",event.srcElement, event.target  , event.which, $(".showGuidedForm").length,)
//                   console.log(cIp,total)
                
                let srcElem = event.target || event.srcElement;
                
                if($(srcElem)[0].tagName == "INPUT"){
                    return;
                }
                
                
                if( $(".showGuidedForm").length > 0  && (event.which == 39 || event.which == 8 || event.which == 37 || event.which == 13)){
                    switch(event.which){
                        case 37 :
                        case 8 :
                            //previous
                            if( cIp == 0){
//                                console.log("Lowest Point")
                               return;
                            }
                            prevInputField();
                            break;
                        case 39:
                        case 13:
                            //next
                            if( cIp+2 > total){
//                                console.log("Highest point")
                                mfSubmitFormSet();
                                $(".guidedFormModule").removeClass("showGuidedForm animate__animated animate__zoomIn");
                                $(".staticGuideFormBackdrop").fadeOut();
                               return;
                            }
                            nextInputField();
                            break;
                    }
                }
            })
        }

        
        
        
        
        function init(){
            //initialize
            createBoilerPlate();
            createSwitch();
            attachClickShowAction();
            attachClosePopupAction();
            attachKeyboardAction();
            controlSlideFunctionAttacher();
            submitButtonFunctionAttacher();
        }
        
        init();
        
        return {showmfGuidedFormPanel};
        
    }
    
    
})(jQuery);