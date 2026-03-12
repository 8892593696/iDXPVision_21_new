/* 

    Modal Form Guider v1
    Abhishek B. / 30-03-23

 */
(function ($) {

    $.fn.modalFormGuider = function (options) {

        let $this = $(this);
                
        var settings = $.extend({
            formResponses: {},
            currentlyActiveIdx: null,
            inputStructures: [],
            submitButton: "",
            nextButtonClick: function (...ops){
                
            },
            removeGuidedPanel: function(){
                 $(".guidedFormModule").removeClass("showGuidedForm animate__animated animate__zoomIn").remove();
                 
            }
        }, options);
        
        
       function createBoilerPlate() {
           if($(".guidedFormModule").length > 0){
               return;
           }
            $("body").append(`
            <div class="guidedFormModule">
                <div class="guidedFormModuleInner">
                    <div class="guidedFormStep showstep">
                        <div class="guidedFormBody">
                            <div class="guidedFormQuestion">
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
            let cIp = parseInt(settings.currentlyActiveIdx);
            
            //console.log(cIp, "cIp");
            
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
            let cIp = parseInt(settings.currentlyActiveIdx);
            
            //console.log(cIp, "cIp");
            let inputName = "";
            let inputValue = "";
            
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
                    inputValue = __ov;
                });
                inputName = $el.attr("name");
                
            }else{
                //check current input
                if($(".guidedFormInputBox .guidedFormInputText ").length > 0){
                    let __val = $(".guidedFormInputBox .guidedFormInputText ").val();
                    if(!__val.trim().length > 0 && $(".guidedFormInputBox .guidedFormInputText ").attr("required") == "required"){
                        alert("Pleae fill the details");
                        return;
                    }
                    inputName = $(".mfGuideInput"+cIp).attr("name");
                    inputValue = __val;
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
            
            settings.nextButtonClick(inputName, inputValue);
        }
        
        function controlSlideFunctionAttacher(){
            //curent Input
            
            $(".guidedFormBtnNext ").click(function(){
                nextInputField();
            });
            
            $(".guidedFormBtnBack  ").click(function(){
                prevInputField();
            })
      
        }
        
        function mfSubmitFormSet(){
            
            let cIp = parseInt(settings.currentlyActiveIdx);
            
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
            
            if( settings.submitButton.length > 0 ){
                $(settings.submitButton).trigger("click");
            }
        }
        
        function submitButtonFunctionAttacher(){
            $(".guidedFormBtnSaveInputs").click(function(){
                mfSubmitFormSet();
            })
            
        }
        
        function animateAndShowModalOptions(){
            let $guidedFormElem = $(".guidedFormModule");

            $guidedFormElem.find(".guidedFormQuestion h4, .guidedFormQuestion p,.guidedFormInputBox, .guidedFormOptions")
                    .removeClass("animate__animated animate__fadeOut")
                    .addClass("animate__animated animate__fadeIn");
            
            if(parseInt(settings.currentlyActiveIdx) < 1){
                $(".guidedFormBtnBack ").fadeOut();
            }else{
                $(".guidedFormBtnBack ").fadeIn();
            }
            
            if(parseInt(settings.currentlyActiveIdx) == $(".mfguider").length - 1){
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
            
            clearAndHideModalOptions();
            let quesName = (checkHasAttribute($t,"data-questionName")) ? $t.attr("data-questionName") : `What is the ` + $t.attr("data-label") + ` ?`;
            let quesDesc = (checkHasAttribute($t,"data-questionDesc")) ? $t.attr("data-questionDesc") : "Please enter below,";
            let quesType = (checkHasAttribute($t,"data-questionDesc")) ? $t.attr("data-questionType") : "regular";
            
            settings.currentlyActiveIdx = $t.attr("data-mfguideindex");
            
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
                $t.click(function(){
                    generateInputPanel($t);
                    $(".guidedFormModule").addClass("showGuidedForm animate__animated animate__zoomIn");
                    
                })
                i++;
            })
        }
        
        function showmfGuidedFormPanel(){
            generateInputPanel($(".mfGuideInput0"));
            $(".guidedFormModule").addClass("showGuidedForm animate__animated animate__zoomIn");
        }
        
        function hideGuidedPanel(){
//             generateInputPanel($(".mfGuideInput0"));
            $(".guidedFormModule").removeClass("showGuidedForm animate__animated animate__zoomIn");
        }
        
        
        function attachClosePopupAction(){
            $(".guidedFormModule").find(".guidedFormClose").click(function(){
                $(".guidedFormModule").removeClass("showGuidedForm animate__animated animate__zoomIn");
            })
        }
        
        
        
        function init(){
            //initialize
            createBoilerPlate();
            attachClickShowAction();
            attachClosePopupAction();
            controlSlideFunctionAttacher();
            submitButtonFunctionAttacher();
        }
        
        init();
        
        return {showmfGuidedFormPanel};
        
    }
    
    
})(jQuery);
