<%-- 
    Document   : loginHeader
    Created on : 19 Nov, 2021, 11:19:03 AM
    Author     : PiLog
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"   uri="jakarta.tags.core" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>
<%@ taglib prefix="fn"  uri="jakarta.tags.functions" %>
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="keygeneration" content="${secretKey}">
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='pragma' content='no-cache'>
<!DOCTYPE html>

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
<div class="se-pre-con"></div>

<div class="modal fade signOutpopUp " id="signOut" role="dialog">
    <div class="backGroundOpacityModal"></div>
    <div class="modal-dialog opacity-animate3">

        <!-- Modal content-->
        <div class="modal-content">

            <div class="modal-header">
                <div class="signoutLogo">
                    <!--<img src="images/PilogCloudRedBlue.gif" class="pilogcloudLogo themeModeDark" alt="pilogcloud">-->
                </div>
                <div class="signouttext">
                    <h5 class="modal-title text-center">Sign Out</h5>
                </div>
            </div>
            <div class="modal-body">
                <!--<p><span class="signOutWarningMsg"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></span>Unsaved data will be lost, do you want to Signout?</p>-->
                <p><span class="signOutWarningMsg"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></span>Do you want to Signout?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" onclick="logout()">Yes</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal">No</button>
            </div>
        </div>		
    </div>
</div>

<div  id="modalDailogDiv">

</div>
<div  id="modalDailogDiv1">

</div>
<div  id="modalInfoDailogDiv">

</div>


<div class="dxpLoginHeader">




    <nav class="navbar navbar-expand-md header-navbar pcoded-header">
        <ul class="leftNavList">
            <div class="ImageIconThemeShadeLeft" style="display:none"></div>

            <!--<li class="pilognineDots"><img id="show-sidebar" class="show-sidebar themeModeDark" src="images/PiLogDots.png" width="16px" alt="" onclick="homeSideMenu()"/></li>-->
            <c:choose>
                <c:when test="${not empty IDXP_HEADER_EXT_MENU_FLAG &&  IDXP_HEADER_EXT_MENU_FLAG == 'N'}">                              

                </c:when>
                <c:otherwise>
                    <li class='menuListIcon' onclick="openSettingPannel('externalMenus')"       
                        title='MenuList'><img src='images/dxpmenuList.png'        
                                          style='width:20px;margin-left:28px;' class='themeModeDark' /></li>      
                    </c:otherwise>
                </c:choose>

            <c:choose>
                <c:when test="${not empty IDXP_HEADER_LOGO}">                              
                    <!--<li><a class="navbar-brand" href="#" onclick="navigationMenuUrl('homePage')">-->
                    <li><span class="pilogFioriBackBtnDiv" style="display:none" data-sapiconbackIcon="&#xe1eb" onclick="moveBackFn()"></span> 
                        <span class="standardlogo"><a class="navbar-brand" href="#">
                                ${IDXP_HEADER_LOGO}
                                <!--<img src="${IDXP_HEADER_LOGO}" class="pilogcloudLogo themeModeDark" alt="pilogcloud">-->
                            </a></span></li>
                        </c:when>
                        <c:otherwise>
                    <!--<li><a class="navbar-brand" href="#" onclick="navigationMenuUrl('homePage')">-->
                    <li><a class="navbar-brand" href="#">
                            <img src="images/iContentFoundry2.gif" class="pilogcloudLogo themeModeDark" alt="pilogcloud">
                            <!--<img src="images/PilogCloudRedBlue.gif" class="pilogcloudLogo themeModeDark" alt="pilogcloud">-->
                        </a></li>      
                    </c:otherwise>
                </c:choose>


            <!--            <li class="defultSearchBar" style="display:none">
                            <div class="form-group has-search" width="120px">
                                <input type="text" class="form-control" placeholder="Search" value="" id="SearchResult" onkeyup="keySearch(event)">
                                <div class="tooltipdiv" id="tooltipdiv"></div>
                                <div class="intellisense" id="intellisense"></div>
                                <div class="searchResultsDiv" id="intellisense"></div>
                                <a class="clear_input" style="display:none" onclick="clearTextSearch();">×</a>
                            </div>
                        </li>-->


        </ul>
        <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">  
            <div class="globalSearchBar">
                <c:choose>
                    <c:when test="${not empty IDXP_HEADER_SEARCH_BAR_FLAG &&  IDXP_HEADER_SEARCH_BAR_FLAG == 'N'}">                                 

                    </c:when>
                    <c:otherwise>
                        <div class="headerSearchIcon" onclick="defaultSearchFun()"><img src="images/iDXPUI5Search.svg" alt="search_blue"></div>
                        <div class="massSearchListItem">
                            <div class="searchMainWrap">
                                <div class="selectDropDown">
                                    <div class="form-group" id="selectFilter">
                                    </div>
                                </div>

                                <div class="backbutton"><img src="images/iDXPUI5ArrowLeft.svg" width="20px" onclick="clearTextSearch()" class="themeModeDark" /></div>
                                <div class="searchbutton" id="rightsearchicon"><img src="images/iDXPUI5Search.svg" class="themeModeDark" width="20px" onclick="smartTextSearch('SearchResult', 'SelectedValue', 'N')"/></div>
                                <div class="filterDownArrowIcon" id="filterDownArrowIconID" style="display: none"><img src="images/filterdownarrowblue.png" class="themeModeDark" width="16px" /></div>
                                <div class="form-group has-search" id="has_SearchId">
                                    <input type="text" autocomplete="off" class="form-control" placeholder="Search" value id="SearchResult" onkeyup="keySearch(event)"  onclick="advancedSearches(event)">
                                    <div class="tooltipdiv" id="tooltipdiv"></div>
                                    <!--<div class="intellisense" id="intellisense"></div>-->
                                    <div id="searchsuggessionmain" class="searchsuggessionmainclass">
                                        <div class="searchResultsDiv" id="intellisense"></div>
                                        <div class="searchResultsCount" id="searchResultsCountId" style="display:none" ></div>
                                    </div>
                                    <!--<a class="clear_input" style="display:none" onclick="clearTextSearch();">×</a>-->
                                </div>
                            </div>
                            <div class="DxpVisualizationbutton" id="DxpVisualizationbutton" style="display: none">

                            </div>
                            <div class="showHeaderpopUpBox"><div class="media border p-2"><img src="images/iDXPUI5Search.svg" alt="" class="popupInnerImgShowClass themeModeDark mr-2 mt-1 " style="width:40px;">
                                    <div class="media-body"><h4>Smart Search</h4><small>Click to Search</small></div></div></div>

                        </div>
                    </c:otherwise>
                </c:choose>  
            </div>
            <div class="rightIcons">
                <div class="ImageIconThemeShadeRight" style="display:none"></div>  
                <ul class="navbar-nav">
                    <!--<c:choose>
                        <c:when test="${not empty IDXP_HEADER_LANGUAGE_FLAG &&  IDXP_HEADER_LANGUAGE_FLAG == 'N'}">                              

                        </c:when>
                        <c:otherwise>
                            ${ssLangListStr}
                        </c:otherwise>
                    </c:choose>
                     <li class="openAiButton">
                        <span style="font-size:30px;cursor:pointer" title="Click to Enable" onclick="aiEnableBasedOnClick()"><img class='aiEnaDisShowHideImgClass' src='images/AILens blue.gif' style="cursor:pointer;width:30px;"/></span>
                    </li>     
                    <c:choose>
                        <c:when test="${not empty IDXP_HEADER_VOICE_FLAG &&  IDXP_HEADER_VOICE_FLAG == 'N'}">                              

                        </c:when>
                        <c:otherwise>
                            <li class="voiceNavigator" id='unmuteVoiceId'onclick="speechToText('SearchResult', 'muteVoiceId', 'unmuteVoiceId')" data-idx="0">
                                <img src='images/Mike-OutLine-Icon-01.png' width="20px" class='themeModeDark' />
                                <span class="headerOptionTitle" style="display: none">Microphone</span>
                                <div class="showHeaderpopUpBox"><div class="media border p-2"><img src="images/Mike-OutLine-Icon-01.png" alt="" class="popupInnerImgShowClass themeModeDark mr-2 mt-1 " style="width:40px;">
                                        <div class="media-body"><h4>Voice Search</h4><small>Click to Speak to Search</small></div></div></div>
                            </li>     
                        </c:otherwise>
                    </c:choose>

                    <c:choose>
                        <c:when test="${not empty IDXP_HEADER_WEATHER_FLAG &&  IDXP_HEADER_WEATHER_FLAG == 'N'}">                              

                        </c:when>
                        <c:otherwise>
                            <li class='weatherIcon' onclick="getWeatherDetails()" 
                                title='Weather ForeCast' data-idx="1"><img src='images/weather.png'
                                                                       width='24px' class='themeModeDark' /><span class="headerOptionTitle" style="display: none">Weather ForeCast</span>
                                <div class="showHeaderpopUpBox"><div class="media border p-2"><img src="images/weather.png" alt="" class="popupInnerImgShowClass themeModeDark mr-2 mt-1 " style="width:40px;">
                                        <div class="media-body"><h4>Weather</h4><small>View the Weather Report</small></div></div></div>
                            </li>     
                        </c:otherwise>
                    </c:choose>

                    <c:choose>
                        <c:when test="${not empty IDXP_HEADER_CALENDER_FLAG &&  IDXP_HEADER_CALENDER_FLAG == 'N'}">                              

                        </c:when>
                        <c:otherwise>
                            <li class='calendarIcon' onclick="openSettingPannel('calendardiv')"
                                title='Calender' data-idx="2"><img src='images/calendarBlue.png'
                                                               width='20px' class='themeModeDark' /><span class="headerOptionTitle" style="display: none">Calendar</span>
                                <div class="showHeaderpopUpBox"><div class="media border p-2"><img src="images/calendarBlue.png" alt="" class="popupInnerImgShowClass themeModeDark mr-2 mt-1 " style="width:40px;">
                                        <div class="media-body"><h4>Calendar</h4><small>Click to View the Events</small></div></div></div>

                            </li>       
                        </c:otherwise>
                    </c:choose>



                    <c:choose>
                        <c:when test="${not empty IDXP_HEADER_NOTIFICATION_FLAG &&  IDXP_HEADER_NOTIFICATION_FLAG == 'N'}">                              

                        </c:when>
                        <c:otherwise>
                    <div class='notificationIcon' id='usernotificationid'  onclick="notificationsData('notifications')"
                                title='Notifications'><img src='images/Notifications.png' 
                                                       width='20px' class='themeModeDark' />                             
                                <sup class ='notificationCountClass' id='NotificationCountId' style="display: none"></sup>
                            </div>
                    
                        </c:otherwise>
                    </c:choose>
                    <li class="settingIcon" onclick="openSettingPannel('settingdiv')"
                        title='Settings' data-idx="3">
                        <img src="images/iDXPUI5Settings.svg" class="themeModeDark" width='20px'  title="Settings" />
                        <span class="headerOptionTitle" style="display: none">Settings</span>
                        <div class="showHeaderpopUpBox"><div class="media border p-2"><img src="images/iDXPUI5Settings.svg" alt="" class="popupInnerImgShowClass themeModeDark mr-2 mt-1 " style="width:40px;">
                                <div class="media-body"><h4>Settings</h4><small>Click to View Themes, Font type etc..</small></div></div></div>
                    </li>
                    <c:choose>
                        <c:when test="${not empty IDXP_HEADER_FIORI_THEME_FLAG &&  IDXP_HEADER_FIORI_THEME_FLAG == 'N'}">                              

                        </c:when>
                        <c:otherwise>
                            <li class="fioriThemeItem toggle-switch" title="Fiori Theme">        
                                <label for="cb-switch">
                                    <input type="checkbox" id="cb-switch" value="" onchange="handleThemeAction()">      
                                    <span>
                                        <small></small>   
                                    </span>
                                </label>     
                            </li>
                        </c:otherwise>  
                    </c:choose>-->
                    <c:choose>
                        <c:when test="${not empty IDXP_HEADER_FIORI_THEME_FLAG}">                              
                            <li id="fioriMainSwich" class="fioriThemeItem toggle-switch" title="Open UI5" style="display:none"> 
                                <!--<span><img src="images/iDXPSAPUI5LightTheme.svg" alt="themeIcon"></span>-->
                                <div class="d-flex align-items-center">
                                    <label for="cb-switch" style="margin-top:0">
                                        <input type="checkbox" id="cb-switch" value="" onchange="handleThemeAction()">      
                                        <span>
                                            <small></small>     
                                        </span>
                                    </label>  
                                    <span class="pl-2">UI5 Theme</span>
                                </div>
                            </li>
                        </c:when>

                    </c:choose>

                    <c:choose>
                        <c:when test="${not empty IDXP_HEADER_FLOATING_FLAG &&  IDXP_HEADER_FLOATING_FLAG == 'N'}">                                 

                        </c:when>
                        <c:otherwise>
                            <li class="guideIntroONOFF" id="introON_OFFBtnId" onclick="introONOFFBtnFun()">

                                <img src="images/Bulb_Icon_Widget.png"  width="22px" title="Intro ON/OFF Button" />  

                            </li>      
                        </c:otherwise>              
                    </c:choose>

                    <!--                    <li class='helpIcon'  onclick="openSettingPannel('helpdiv')" title='Help' data-idx="5"><img
                                                src='images/Help-Icon.svg' width='20px' class='themeModeDark' /><span class="headerOptionTitle" style="display: none">Help</span>
                                            <div class="showHeaderpopUpBox"><div class="media border p-2"><img src="images/Help-Icon.svg" alt="" class="popupInnerImgShowClass themeModeDark mr-2 mt-1 " style="width:40px;">
                                                    <div class="media-body"><h4>Help</h4><small>Support with Chat and Help Manuals</small></div></div></div>
                                        </li>-->
                    <li class="userProfileIcon" id="userProfileIconLi" onclick="openSettingPannel('useraccdiv')" data-idx="6" title='Profile'>
                        <img src="images/Profile_Icon.svg" id="userProfileImage" class="themeModeDark userMainProfile" alt="User-Profile-Image" title="${sessionScope.ssUsername}" />
                        <span class="headerOptionTitle" style="display: none">${sessionScope.ssUsername}</span>
                        <div class="showHeaderpopUpBox"><div class="media border p-2"><img src="images/Profile_Icon.svg" alt="" class="popupInnerImgShowClass themeModeDark mr-2 mt-1 " style="width:40px;">
                                <div class="media-body"><h4>User</h4><small>${sessionScope.ssUsername}</small></div></div></div>
                    </li>
                    <c:choose>
                        <c:when test="${not empty IDXP_HEADER_CLIENT_LOGO}">                                
                            <li><a class="navbar-clientbrand" href="#">
                                    ${IDXP_HEADER_CLIENT_LOGO}
                                    <!--<img src="${IDXP_HEADER_CLIENT_LOGO}" class="pilogcloudLogo themeModeDark" alt="clientLogo">-->
                                </a></li>
                            </c:when>
                            <c:otherwise>                        
                            </c:otherwise>
                        </c:choose>
                        <c:choose>
                            <c:when test="${not empty IDXP_AI_LENS_FLAG &&  IDXP_AI_LENS_FLAG == 'N'}">                              

                        </c:when>
                        <c:otherwise>
                            <li class="openAiButton">
                                <span style="font-size:30px;cursor:pointer" title="Click to Enable" onclick="aiEnableBasedOnClick()"><img class='aiEnaDisShowHideImgClass' src='images/AILens blue.gif' style="cursor:pointer;width:30px;"/></span>
                            </li> 
                        </c:otherwise>              
                    </c:choose>  
                </ul>
            </div> 
        </div>

    </nav>   

    <!--<marquee>This text will scroll from right to left</marquee>-->
</div>  

<!-- Modal -->
<input type="hidden" id="ssUsername" value="${sessionScope.ssUsername}"/>
<input type="hidden" id="idxpHeaderWeatherflagId" value="${IDXP_HEADER_WEATHER_FLAG}"/>
<input type="hidden" id="ssCloudV10URL" value="${sessionScope.ssCloudV10URL}"/>
<input type="hidden" id="addToCartCount" value="${cartCount}"/>		
<form action="" id="navigationUrlForm" method="POST">
    <c:if test="true">
        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" /> 
    </c:if> 
</form>

<script>
    $(document).ready(function () {
        $(".se-pre-con").fadeOut("slow");
    });
//    onmouseover="templeteMouseOver(id)" onmouseout="templeteMouseOut(id)"
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    const searchInput = document.getElementById('SearchResult');
    const clearIcon = document.querySelector('.clearicon');

// Add event listeners
    searchInput.addEventListener('input', handleInputChange);
    clearIcon.addEventListener('click', handleClearIconClick);

// Handle input change event
    function handleInputChange() {
        if (searchInput.value !== '') {
            clearIcon.style.display = 'block'; // Show the clear icon
        } else {
            clearIcon.style.display = 'none'; // Hide the clear icon
        }
    }

// Handle clear icon click event
    function handleClearIconClick() {
        searchInput.value = ''; // Clear the input field
        clearIcon.style.display = 'none'; // Hide the clear icon
        $("#intellisense").html("");
        $("#intellisense").hide();
    }

</script>