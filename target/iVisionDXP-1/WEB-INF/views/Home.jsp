<%-- 
    Document   : Home
    Created on : Dec 17, 2020, 5:53:37 PM
    Author     : Devint01
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"   uri="jakarta.tags.core"%>
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
<html>
    <head>
        <c:choose>
            <c:when test="${not empty sessionScope.ssUsername}"> 
                <%--<%@include file="loginHeader.jsp" %>--%>
                <%@include file="commonfiles.jsp" %>  
            </c:when> 
            <c:otherwise> 
                <%@ include file="beforeLoginFiles.jsp" %>
            </c:otherwise>
        </c:choose>

        <c:choose>
            <c:when test="${not empty homePageTitle}"> 
                <%--<%@include file="loginHeader.jsp" %>--%>
                <title>${homePageTitle}</title>  
            </c:when> 
            <c:otherwise> 
                <title>PiLog SaaS Solution</title>
            </c:otherwise>
        </c:choose>


        <link rel="icon" href="images/PiLog-Cloud-Logo-Large.png">
        <meta name="description" content="PiLog Cloud Platform is a self-service solution for all Data & Analytics services, 
              It provides process-driven and methodology-based lean data harmonization, governance & Analytics for 
              multiple domains, a cloud-based application, providing Master data as a service, saas, business value, 
              learning, and consulting services.">

        <c:choose>
            <c:when test="${not empty IDXP_AI_LENS_FLAG &&  IDXP_AI_LENS_FLAG == 'N'}">                               

            </c:when>
            <c:otherwise>
                <style>
                    .visionParamSearchCover .param_td:hover{
                        cursor:url('../images/AIlensMouseHover.png'), auto !important;     
                    }
                    .dxpDictPropetyDetailsClass .card .card-body{
                        cursor:url('../images/AIlensMouseHover.png'), auto !important; 
                    }
                    .tg-wrap .visionDictionaryTable tr:hover{
                        cursor:url('../images/AIHover.png'), auto !important;  
                    }
                </style>
            </c:otherwise>
        </c:choose>   

    </head>
    <body>
        <!-- Header -->
        <c:choose>
            <c:when test="${not empty sessionScope.ssUsername}">
                <%--<tags:loginHeader/>--%> 
                <%@include file="loginHeader.jsp" %>
            </c:when>
            <c:otherwise>
                <c:choose>
                    <c:when test="${not empty newHomePageEnableFlag && newHomePageEnableFlag eq 'Y'}">
                        <%@ include file="header.jsp" %> 
                    </c:when>
                    <c:otherwise>
                        <%--<%@ include file="loginPremises.jsp" %>--%> 
                    </c:otherwise>
                </c:choose>
                <%--<%@ include file="header.jsp" %>--%> 

                <%--<tags:header/>--%>
            </c:otherwise>
        </c:choose>
        <div id="Loader" class="loaderwait" style="display: none">
            <img src="images/PiLog_Gif.gif" class="themeModeDark"/>     
        </div>
        <!-- / Header -->
        <!-- DXP New Theme Layout -->
        <div class="dxpPageWrapper dxpTheme  toggled">

            <img src="images/closeIcon_blue.png" class="closeFullscreenIcon" alt="closeFullScreen" onclick="homeSideMenu()" title="Close Full Screen" style="width:20px;height: 20px;display:none;position: absolute;left:0; z-index: 9999;">
            <%@include file="sideMenu.jsp" %>  
            <div class="hover-container" id="hover-containerId" styl="display:none"></div>
            <!-- sidebar-wrapper  End-->
            <div class="dxpPageContent">  
                <div class="page-body" id="pageBody">
                    <!--${menuStr}-->  
                    <div class="page-body-content" id="pageBodyContent">
                        <!--new layout code divs-->
                        <!--new layout code divs-->
                        <div id='dxpMain' >

                            <!--dxpMenuTabs start--> 
                            <div id='dxpTabsMenus' class='dxpTabsMenus' >   
                                <div id='dxpTabsMenusIcons' >
                                    <c:choose>
                                        <c:when test="${not empty sessionScope.ssUsername}"> 
                                            <div class="searchIconsFirstSplitterList">
                                                <img src="images/threedotsBlue.png" class="firstSplitterDotsClass visualDarkMode" id="firstSplitterDotsId" title="Show Splitter" onclick="toggleTabsAndMenus(event)">
                                                <c:choose>
                                                    <c:when test="${not empty IDXP_TAB_MENU_SEARCH_FLAG &&  IDXP_TAB_MENU_SEARCH_FLAG == 'N'}">
                                                    </c:when>
                                                    <c:otherwise>
                                                        <img src="images/iDXPUI5Search.svg" title="search" class="sidebarmenusearch visualDarkMode" id="sidebarsearchButton"  onclick="floatingMenuSearch()" >
                                                    </c:otherwise>
                                                </c:choose>
                                                <c:choose>
                                                    <c:when test="${not empty IDXP_TAB_MENU_ANALYTICS_FLAG &&  IDXP_TAB_MENU_ANALYTICS_FLAG == 'N'}"> 
                                                    </c:when>
                                                    <c:otherwise>
                                                        <img src="images/iDXPUI5AnalyticsShowCard.svg" class="nextScreenClass visualDarkMode" id="nextScreenClass" title="Change Default Home page" onclick="getSelectBoxResults('H')" style="padding:2px;margin-left:6px;">
                                                    </c:otherwise>
                                                </c:choose>
                                            </div>
                                            <input id="sidebarsearch" placeholder="search" class="sidebarsearch" style="display:none; width: 100px; Height:27px"> 
                                        </c:when>
                                        <c:otherwise>
                                        </c:otherwise> 
                                    </c:choose>
                                </div>

                                <div id='dxpTabs' style='display:none;' class='dxpTabMenu'>
                                    <div class="mainBookMark" style="display: block;">
                                        <div class="showBookMarkTab  flex-container">
                                            <div id="dxpHomeTab" class="dxpSplitterTabs dxpTabBlue active" onclick="showSelectedTabContent(event, 'dxpHomeTab', 'dxpHomeContent')" data-defaulttabname="Home"><p class="tabTitle"><b defaulttabname='Home'  >Home</b></p></div>
                                            <div id="dxpSearchTab" class="dxpSplitterTabs dxpTabBlue" onclick="showSelectedTabContent(event, 'dxpSearchTab', 'dxpSearchContent')" style="display:none;" data-defaulttabname="View Search"><p class="tabTitle"><b defaulttabname='View Search'  >Search</b><span class="dxpSplitterTabsCrossSpan"><img src="images/crossicon.png" onclick="setCrossIconsTabs(event, 'dxpSearchTab', 'dxpSearchContent')" class="dxpSplitterTabsCrossIcon" width="10"></span></p></div> 
                                            <div id="dxp1TabsWithGrid" class="dxpSplitterTabs dxpTabRed" onclick="showSelectedTabContent(event, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent')" style="display:none;" data-defaulttabname="View Tabs Data" ><p class="tabTitle"><b defaulttabname='View Tabs Data'  >View Tabs Data</b><span class="dxpSplitterTabsCrossSpan"><img src="images/crossicon.png" onclick="setCrossIconsTabs(event, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent')" class="dxpSplitterTabsCrossIcon" width="10"></span></p></div>
                                            <div id="dxpFromTab" class="dxpSplitterTabs dxpTabRed" onclick="showSelectedTabContent(event, 'dxpFromTab', 'dxpFormContent')" style="display:none;"  data-defaulttabname="View Form"  ><p class="tabTitle"><b defaulttabname='View Form'  >View Form</b><span class="dxpSplitterTabsCrossSpan"><img src="images/crossicon.png" onclick="setCrossIconsTabs(event, 'dxpFromTab', 'dxpFormContent')" class="dxpSplitterTabsCrossIcon" width="10"></span></p></div>
                                            <div id="dxpGridTab" class="dxpSplitterTabs dxpTabRed" onclick="showSelectedTabContent(event, 'dxpGridTab', 'dxpGridContent')" style="display:none;" data-defaulttabname="View Data"  ><p class="tabTitle"><b defaulttabname='View Data'  >View Data</b><span class="dxpSplitterTabsCrossSpan"><img src="images/crossicon.png" onclick="setCrossIconsTabs(event, 'dxpGridTab', 'dxpGridContent')" class="dxpSplitterTabsCrossIcon" width="10"></span></p></div>                                          
                                            <div id="dxpFioriGridContentTab" class="dxpSplitterTabs dxpTabRed" onclick="showSelectedTabContent(event, 'dxpFioriGridContentTab', 'dxpFioriGridContent')" style="display:none;" data-defaulttabname="View Data"  ><p class="tabTitle"><b defaulttabname='View Data'  >View Data</b><span class="dxpSplitterTabsCrossSpan"><img src="images/crossicon.png" onclick="setCrossIconsTabs(event, 'dxpFioriGridContentTab', 'dxpFioriGridContent')" class="dxpSplitterTabsCrossIcon" width="10"></span></p></div>                                          
                                            <div id="dxpFioriContentTab" class="dxpSplitterTabs dxpTabRed" onclick="showSelectedTabContent(event, 'dxpFioriContentTab', 'dxpFioriContent')" style="display:none;" data-defaulttabname="View Data"  ><p class="tabTitle"><b defaulttabname='View Data'  >View Data</b><span class="dxpSplitterTabsCrossSpan"><img src="images/crossicon.png" onclick="setCrossIconsTabs(event, 'dxpFioriContentTab', 'dxpFioriContent')" class="dxpSplitterTabsCrossIcon" width="10"></span></p></div>
                                            <div id="dxp2TabsWithGrid" class="dxpSplitterTabs dxpTabBlue" onclick="showSelectedTabContent(event, 'dxp2TabsWithGrid', 'dxp2TabsWithGridContent')" style="display:none;" data-defaulttabname="View Tabs Data" ><p class="tabTitle"><b defaulttabname='View Tabs Data'  >View Tabs Data</b><span class="dxpSplitterTabsCrossSpan"><img src="images/crossicon.png" onclick="setCrossIconsTabs(event, 'dxp2TabsWithGrid', 'dxp2TabsWithGridContent')" class="dxpSplitterTabsCrossIcon" width="10"></span></p></div>
                                            <div id="dxpClassesTab" class="dxpSplitterTabs dxpTabBlue" onclick="showSelectedTabContent(event, 'dxpClassesTab', 'dxClassesContent')" style="display:none;" style="display:none;" data-defaulttabname="View Classes" ><p class="tabTitle"><b defaulttabname='View Classes'  >View Classes</b><span class="dxpSplitterTabsCrossSpan"><img src="images/crossicon.png" onclick="setCrossIconsTabs(event, 'dxpClassesTab', 'dxClassesContent')" class="dxpSplitterTabsCrossIcon" width="10"></span></p></div>
                                            <div id="dxpClusterTab" class="dxpSplitterTabs dxpTabBlue" onclick="showSelectedTabContent(event, 'dxpClusterTab', 'dxpClusterContent')" style="display:none;" data-defaulttabname="View Cluster" ><p class="tabTitle"><b defaulttabname='View Cluster'  >View Cluster</b><span class="dxpSplitterTabsCrossSpan"><img src="images/crossicon.png" onclick="setCrossIconsTabs(event, 'dxpClusterTab', 'dxpClusterContent')" class="dxpSplitterTabsCrossIcon" width="10"></span></p></div>
                                            <div id="dxpClusterTab2" class="dxpSplitterTabs dxpTabBlue" onclick="showSelectedTabContent(event, 'dxpClusterTab2', 'dxpCluster')" style="display:none;" data-defaulttabname="View Cluster" ><p class="tabTitle"><b defaulttabname='View Cluster'  >View Cluster</b><span class="dxpSplitterTabsCrossSpan"><img src="images/crossicon.png" onclick="setCrossIconsTabs(event, 'dxpClusterTab2', 'dxpCluster')" class="dxpSplitterTabsCrossIcon" width="10"></span></p></div>
                                            <div id="dxpAnalyticsTab" class="dxpSplitterTabs dxpTabBlue active" onclick="showSelectedTabContent(event, 'dxpAnalyticsTab', 'dxpAnalyticsContent')" style="display:none;" data-defaulttabname="View Analytics"  ><p class="tabTitle"><b defaulttabname='View Analytics' >View Analytics</b><span class="dxpSplitterTabsCrossSpan"><img src="images/crossicon.png" onclick="setCrossIconsTabs(event, 'dxpAnalyticsTab', 'dxpAnalyticsContent')" class="dxpSplitterTabsCrossIcon" width="10"></span></p></div>
                                            <div id="dxpconsolidationTab" class="dxpSplitterTabs dxpTabBlue" onclick="showSelectedTabContent(event, 'dxpconsolidationTab', 'dxpconsolidationFormView')" style="display:none;" data-defaulttabname="Smart Consolidation"><p class="tabTitle"><b defaulttabname='Smart Consolidation'  >Smart Consolidation</b><span class="dxpSplitterTabsCrossSpan"><img src="images/crossicon.png" onclick="setCrossIconsTabs(event, 'dxpconsolidationTab', 'dxpconsolidationFormView')" class="dxpSplitterTabsCrossIcon" width="10"></span></p></div> 
                                        </div>
                                    </div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div id='dxpMenus' style='display:none;'></div> 
                                <div id='dxpDomainMenus'></div>
                            </div>    
                            <!--dxpMenuTabs end--> 

                            <!--dxpContent start--> 
                            <!--<div class="dxpContentWrapper">-->
                                <div id='dxpContent' >    

                                    <div id='dxpAnalyticsContent' class='dxpSplitterTabsContent' ></div>
                                    <div id='dxpGridContent' class='dxpSplitterTabsContent' ></div>
                                    <!--<div id='dxpFioriGridContent' class='dxpSplitterTabsContent' ></div>-->
                                    <div id='dxpFioriContent' class='dxpSplitterTabsContent' ></div>
                                    <div id='dxpHomeContent' class='dxpSplitterTabsContent active' ></div>
                                    <div id='dxClassesContent' class='dxpSplitterTabsContent'></div>
                                    <div id='dxpFormContent'class='dxpSplitterTabsContent'></div>
                                    <div id='dxpCluster' class='dxpSplitterTabsContent'></div>
                                    <div id='dxpconsolidationFormView' class='dxpSplitterTabsContent'></div>
                                    <!--<div id="selectDasbordHomeCard" class="selectDasbordHomeCard"></div>-->

                                    <!--dxpClusterContent start-->  
                                    <div id='dxpClusterContent'class='dxpSplitterTabsContent' style='height:100%;display:none;' >   
                                        <div id='dxpClusterMainSplitter' >
                                            <div id='dxpClusterFirstDiv' ></div>
                                            <div id='dxpClusterSecondDiv' ></div>
                                        </div>
                                    </div>  
                                    <!--dxpClusterContent end-->  

                                    <!--dxp1TabsWithGridContent start--> 
                                    <div id='dxp1TabsWithGridContent' class='dxpSplitterTabsContent' style='height:100%;display:none;' > 
                                        <div id='dxp1Filterdiv' style="display:none;"></div>
                                        <div id='dxp1MainSplitter'>
                                            <div id='dxp1Firstdiv'></div>
                                            <div id='dxp1Seconddiv'>
                                                <!--                                            <div id='dxp11MainSplitter'>
                                                                                                <div id='dxp11FirstDiv'></div>
                                                                                                <div id='dxp11SecondDiv'></div>
                                                                                            </div>-->
                                            </div>  
                                            <!--<div id='dxp1Thirddiv'></div>-->
                                        </div>

                                    </div>   
                                    <div id='dxpSearchContent' class='dxpSplitterTabsContent' style='height:100%;display:none;' >    
                                        <div id='dxpSearchMainSplitter'>
                                            <div id='dxpSearchFirstdiv'></div>
                                            <div id='dxpSearchSeconddiv'>
                                                <!--                                            <div id='dxp11MainSplitter'>
                                                                                                <div id='dxp11FirstDiv'></div>
                                                                                                <div id='dxp11SecondDiv'></div>
                                                                                            </div>-->
                                            </div>  
                                            <!--<div id='dxp1Thirddiv'></div>-->
                                        </div>

                                    </div>   
                                    <!--dxp1TabsWithGridContent end-->  

                                    <!--dxpTwoLevelTabsWithGridContent  start-->  
                                    <div id='dxp2FioriTabsWithGridContent' class='dxp2FioriTabsWithGridContent' style='display:none;' ></div>
                                    <div id='dxp2TabsWithGridContent' class='dxpSplitterTabsContent' style='height:100%;display:none;' >   
                                        <div id='dxp2MainSplitter'>
                                            <div id='dxp2FirstDiv'></div>
                                            <div id='dxp2SecondDiv'>
                                                <div id='dxp21MainSplitter' >
                                                    <div id='dxp21FirstDiv' ></div>
                                                    <div id='dxp21SecondDiv' ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                    <!--dxpTwoLevelTabsWithGridContent  end-->  

                                </div>  
<!--                                <div class="idxpGridRowOverviewWrapper" style="display:none"></div>
                            </div>-->
                            <!--dxpContent  end-->  
                        </div>

                        <div class="searchDxpSplitter" id="searchDxpSplitter" style="display:none;">
                            <div class="searchDefaultSplitter" id="searchDefaultSplitter">
                                <div id='searchsettingsSplitter' class='searchsettingsSplitter'>
                                    <div style="overflow: hidden;" id="jqxTreeDiv" class="visionjqxTreeDiv">
                                        <div style="border: none;" id='jqxTree'>
                                        </div>
                                    </div>
                                    <div class="dxpDictionaryFormClassData"></div>
                                    <div id='searchTypeSplitter' class='searchTypeSplitterClass'>

                                    </div>

                                    <div  class="personaliseoption visionSearchPersonaliseoption">
                                        <div onclick="slideSettings();" class="layoutoptions ui-accordion">
                                            <h3 class="ui-accordion-header1">
                                                <span class="ui-accordion-header-icon ui-icon1 ui-icon-triangle-1-e" id="personalizeid"></span>
                                                <img alt="" class="navIcon gear" src='images/iDXPUI5Settings.svg' title='Personalise'/>
                                            </h3>
                                        </div>
                                        <div id="settings_panel" class="search_settings_panel" >
                                        </div>
                                    </div>
                                </div>

                                <div id='accordioncover' class="acrdn visionMaterialGeneric" >
                                </div>
                            </div>
                            <div class="searchresultsSplitter" id="searchresultsSplitter"> 
                                <div id="searchResults"></div>
                            </div>
                        </div> 

                        <div class="dxpClassficationAppendClass" id="dxpClassficationAppendClass">
                        </div>
                        <c:choose>
                            <c:when test="${not empty IDXP_AI_LENS_FLAG &&  IDXP_AI_LENS_FLAG == 'N'}">                              

                            </c:when>
                            <c:otherwise>
                                <section class='OpenAisection'> 
                                    <!--                                    <div class="openAiButton">
                                                                            <span style="font-size:30px;cursor:pointer" title="Click to Enable" onclick="aiEnableBasedOnClick()"><img class='aiEnaDisShowHideImgClass' src='images/AILens.gif' style="cursor:pointer;width:30px;"/></span>
                                                                        </div>-->
                                    <div id="myNav" class="overlay">
                                        <!--<div class="dragArrowDiv"><img src="images/leftArrow.png" width="22px" id="dragArrowImgId" onclick="LRDragAIPanel()"></div>-->
                                        <div class="defultShowAIDiv" >
                                            <div class='closeAibutton'>
                                                <div class="aiWelcometext">   
                                                    <ul>
                                                        <li class="ailensicon"> <img src="" class="aiLensImgSrcAppend" onclick="disableEnableAiLens()" style="cursor: pointer;" title="Click to Disable"/> </li>
                                                        <li class="ailensTitle"> AI Lens </li>
                                                    </ul>
                                                </div>
                                                <div class="aipanelRightIconsDiv">
                                                    <!--                                        <ul>
                                                                                                <li> <img src="images/aiSearchIcon.png" id="aiSearchId" onclick="showAISearch()" style="cursor:pointer;width:20px;"> </li>
                                                                                                <li> <img src="images/ai-history.png" id="aiPromptDataIcon" onclick="showRecentPromptData()" title="show prompts" style="cursor:pointer;width:20px;" /> </li>
                                                                                                <li> <img src="images/AINotification.gif" class="ainotification" onclick="showAINotification()" style="cursor:pointer;width:27px;"/> </li>
                                                                                                <li><a href="javascript:void(0)" class="closebtn" onclick="closeAINavigation()">&times;</a></li>
                                                                                            </ul>-->
                                                </div>
                                            </div>
                                            <div class="overlay-content">
                                                <div class="dragLeftArrowDiv"><img src="images/leftArrow.png" width="22px" id="dragLeftArrowImgId" onclick="leftDragAIPanel()"></div>
                                                <div class="dragRightArrowDiv" style="display: none"><img src="images/rightArrow.png" width="20px" id="dragRightArrowImgId" onclick="rightDragAIPanel()"></div>
                                                <!--                                        <div class="aiToggleBtn" id="aiLensToggleBtnId" onclick="disableEnableAiLens()">
                                                                                            <span> <img src="images/aieyeLensclick.png"  width="24px" title="AI Lens Desable/Enable Buttton" /></span>
                                                                                            <span class="aiTextHint">Click to disable <span class="aiBrand">AI Lens</span></span>
                                                                                        </div>-->
                                                <div class='searchAiBarDiv' style="display:none">
                                                    <div class="aiSearchIconMainDiv" > <img src="images/aiSearchIcon.png" width="20px" /> </div>
                                                    <input type='text' class="form-control aiSearh-input" placeholder='Search..' oninput="highlightTextSearch(event)"/>
                                                    <div class="searchrightInnerContainer" style="display:none;">
                                                        <div id="currentHighlightCount"></div>
                                                        <div onclick="goToNextHighlight()" class="downArrowDiv"><i id="searchdown" class="fa fa-angle-double-down"></i></div>
                                                        <div onclick="goToPreviousHighlight()" class="upArrowDiv"><i id="searchup" class="fa fa-angle-double-up"  ></i></div>
                                                        <div class="aiSearchClearBtn result" id="searchCount" style="right: 36px !important ; color: #808080;"></div>
                                                        <img src="images/aiCloseIcon.png" id="clearAISearch" class="aiSearchClearBtn" width="20px" onclick="showAISearch()"/>
                                                    </div>
                                                </div>
                                                <div class='aicontentArea'>
                                                    <div id="myBtnContainer" class="aiButtongroup">
                                                    </div>
                                                    <!--                                            <div class="introGuiderAi" id="introGuiderAi" style="display: none">
                                                                                                    <p>Do you need help to Navigate?</p>
                                                                                                    <div class="navigateBtn">
                                                                                                        <button onclick="openIntroWithAI()">Yes</button>
                                                                                                        <button onclick="closeIntroWithAI()">No</button> 
                                                                                                    </div>
                                                                                                </div>-->
                                                    <!-- Portfolio Gallery Grid -->
                                                    <div class="aigridrow">
                                                    </div>
                                                    <div class='aiNotificationsResultClass' style="margin-top: 10px;"></div>
                                                    <div class="aiChatContainer" id="aiChatContainerdivID">
                                                        <div class="aisenderDivClass"></div>
                                                        <div class='aiChatgptResponseContainer'></div>
                                                    </div>
                                                    <div id="threeDotsLoader" class='threeDotsLoader' style="display: none;"> <span id='ailoaderTextID' class="ailoaderText"></span> <span><img src="images/dots.gif"  /></span></div>
                                                </div> 

                                                <div class='aibottomMessageContainer'>
                                                    <div class="newChatDivs" title="New Chat" onclick="showNewChatData()"><img src="images/newMessage1.png" width="20px"  style="cursor:pointer;"> <span>New chat</span></div>
                                                    <div class="stopresponding" id="stopResponsingID" style="display: none;"><button class="btn btn-primary"><span class="stopIcon"><i class="fa fa-stop" aria-hidden="true"></i></span> <span class="stopText">Stop Responding</span></button></div>
                                                    <div class="aiLensAttachedmentFile" id="aiLensAttachedmentFile"></div>
                                                    <div class='userAIInputBottomWidget' id="userAIInputBottomWidgetId">
                                                        <div class="userAIInputText">
                                                            <input type='text' class="form-control" placeholder='Ask me anything...' id='aiTypedValue' onkeyup="showAIKeyDownResults(event)" autocomplete="off"/> 

                                                        </div>
                                                        <div class='moreaiOptions'>
                                                            <ul>
                                                                <!--<li data-toggle="modal" data-target="#discovermoreAiPopup"><img src="images/threedots.png" width='20px' title="discover more" class="morethreeDots" style="cursor:pointer;"/></li>-->
                                                                <!--<li><img src="images/newMessage.png" width="20px" title="New Chat" onclick="showNewChatData()" style="cursor:pointer;"></li>-->
                                                                <li><div class="aiAttachedment">
                                                                        <input type="file" id="aiAttachedmentImageUpload" onchange="aiLensAttachedment()" accept=".txt">
                                                                        <label for="aiAttachedmentImageUpload"></label>
                                                                    </div> 
                                                                </li>
                                                                <li>
                                                                    <div class="aiImageAttachedment">
                                                                        <input type="file" id="aiImageAttachedmentUpload" onchange="aiLensAttachedment('aiAttachedmentImageUpload')" accept=".png,.jpg,.jpeg">
                                                                        <label for="aiImageAttachedmentUpload"></label>
                                                                    </div>
                                                                </li>

                                                                <ul class="messageSendElement">
                                                                    <li><img src="images/aiMic.png"  id="muteMicId" class="" title="record a message" style="cursor:pointer;"/></li>  
                                                                    <li><img src='images/send-message.png' onclick="showAITypeSearchResults()" style="cursor:pointer; width:18px; opacity: 0.5" id="sendMessageIconId"/></li>
                                                                </ul>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                
                                    </div>
                                </section>
                            </c:otherwise>              
                        </c:choose>

                        <div id="selectDasbordHomeCard" class="selectDasbordHomeCard"></div>
                        <section class="decompositionBoxTreeSection">
                            <div class="container-fluid" id="treeContainerWithBoxes" style="display:none;">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="settingBtnDiv">
                                            <button class="settingsopenbtn btn btn-info" onclick="decompositionTreeSettingsOpen()"><span class="dSettings"><img src="images/iDXPUI5Settings.svg" width="18px" title="Settings" /></span><span class="btnTitle">Personalize</span></button>
                                            <div id="settingsPanel" class="settingsSidePanel">
                                                <div class="settingPanelCloseDiv">
                                                    <a href="javascript:void(0)" class="closebtn" onclick="decompositionTreeSettingsClose()">×</a>
                                                </div>
                                                <div id="accordionTree">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <a class="card-link" data-toggle="collapse" href="#collapseOne">
                                                                Set Levels
                                                            </a>
                                                        </div>
                                                        <div id="collapseOne" class="collapse show" data-parent="#accordionTree">
                                                            <div class="card-body">
                                                                <div class="dxpDecompositionLevels" id="dxpDecompositionLevels"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <a class="card-link" data-toggle="collapse" href="#collapse2">
                                                                Set Color's
                                                            </a>
                                                        </div>
                                                        <div id="collapse2" class="collapse" data-parent="#accordionTree">
                                                            <div class="card-body">
                                                                <div id="DropdownList" class="dropdown-content">
                                                                    <div class='colorselectMainForm'>
                                                                        <div class='colorselectDiv'>
                                                                            <!--<span value="8">Color</span>-->
                                                                            <div class="innerColorSelect">
                                                                                <span class="colorLevelLabel" value="0" colorHex="#0b4a99">Level 0</span>
                                                                                <span class="colorLevelSelect">
                                                                                    <input type="color" class="colorAdder" id="colorAdderlevel0" level ="0" value="#0b4a99" >
                                                                                </span>
                                                                            </div>
                                                                            <div class="innerColorSelect">
                                                                                <span class="colorLevelLabel" value="1" colorHex="#0b4a99">Level 1</span>
                                                                                <span class="colorLevelSelect">
                                                                                    <input type="color" class="colorAdder" id="colorAdderlevel1" level ="1" value="#0b4a99" >
                                                                                </span>
                                                                            </div>
                                                                            <div class="innerColorSelect">
                                                                                <span class="colorLevelLabel" value="2" colorHex="#0b4a99">Level 2</span>
                                                                                <span class="colorLevelSelect">
                                                                                    <input type="color" class="colorAdder" id="colorAdderlevel2" level ="2" value="#0b4a99" >
                                                                                </span>
                                                                            </div>
                                                                            <div class="innerColorSelect">
                                                                                <span class="colorLevelLabel" value="3" colorHex="#0b4a99">Level 3</span>
                                                                                <span class="colorLevelSelect">
                                                                                    <input type="color" class="colorAdder" id="colorAdderlevel3" level ="3" value="#0b4a99">
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <!--<div class='applyBtn'><button class="btn btn-primary" id="collapseChildren" class="dxpLevelsColorApplyClass" >Apply</button></div>-->
                                                                    </div> 
                                                                </div> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <a class="card-link" data-toggle="collapse" href="#collapse3">
                                                                Download Tree
                                                            </a>
                                                        </div>
                                                        <div id="collapse3" class="collapse" data-parent="#accordionTree">
                                                            <div class="card-body">
                                                                <div class="dropdown-content" id="exportTypeContainer">
                                                                    <div class="mainFlexExport">
                                                                        <div class="typeExport" onclick="downloadBoxTree('pdf')" title="Download PDF">
                                                                            <p>PDF</span>
                                                                            <p class="iconImage">
                                                                                <img src="images/ETL_PDFIcon.png" width="16px"  >
                                                                            </p>
                                                                        </div>
                                                                        <div class="typeExport" onclick="downloadBoxTree('xml')" title="Download XML">
                                                                            <p>XML</p>
                                                                            <p class="iconImage">
                                                                                <img src="images/XML-Icon.svg" width="18px"  >
                                                                            </p>
                                                                        </div>
                                                                        <div class="typeExport" onclick="downloadBoxTree('xls')" title="Download XLS">
                                                                            <p>XLS</p>
                                                                            <p class="iconImage">
                                                                                <img src="images/xls-Icon.svg" width="18px"  >
                                                                            </p>
                                                                        </div>
                                                                        <div class="typeExport" onclick="downloadBoxTree('xlsx')" title="Download XLSX">
                                                                            <p>XLSX</p>
                                                                            <p class="iconImage">
                                                                                <img src="images/XLSX-Icon.svg" width="18px"  >
                                                                            </p>
                                                                        </div>
                                                                        <div class="typeExport" onclick="downloadBoxTree('csv')" title="Download CSV">
                                                                            <p>CSV</p>
                                                                            <p class="iconImage">
                                                                                <img src="images/CSV-Icon.svg" width="18px"  >
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <ct-visualization id="tree-container"></ct-visualization>
                                    </div>
                                </div>
                        </section>
                        <c:choose>
                            <c:when test="${not empty IDXP_HEADER_FLOATING_FLAG &&  IDXP_HEADER_FLOATING_FLAG == 'N'}">                              

                            </c:when>
                            <c:otherwise>
                                <div class="hintImage" id="hintImageID" style="display:none;" onclick="homePageGuide()">
                                    <img src="images/idea-icon-trans-bg.png" class="hintImageClass" id="hintImageID" width="20px"/>    
                                    <span class="textHint" id="textHintID">Click Me to Navigate</span>
                                    <div class="navigatorPinIcon"> 
                                        <img src="images/pindxp.png" onclick="setNavigatorPinnOrUnpinnedDIV('P')" id="dxpNavigatorPinImgID" class="dxpNavigatorPinImgClass themeModeDark" style="width: 20px; cursor: pocursorinter; display: inline;">
                                        <!--<img src="images/unpincard.png" onclick="setNavigatorPinnOrUnpinnedDIV('U')" id="dxpNavigatorUnPinImgID" class="dxpNavigatorUnpinImgClass themeModeDark" style="width: 20px; cursor: pointer; display: none;">-->
                                    </div>
                                </div> 
                            </c:otherwise>
                        </c:choose>
                        <!--                        <div class="showandhideNavFooter" id="header-footer" style="display:none" onclick="homeSideMenu()">
                                                    <img  src="images/PilogCloudRedBlue.gif" class="CancelImage" style='width:32px;height:22px;margin-top:-22px'/>
                                                </div>-->
                    </div>
                    <div class="backGroundOpacity" id="backgroundShadowDiv" style="display:none"></div> 


                </div>
                <!-- footer -->
                <%--<tags:footer/>--%>
                <%@include file="footer.jsp" %>                     
            </div>
        </div><!-- DXP New Theme Body Layout -->
        <section id="settingPannelDXP" class="rightPannelSettings" >
            <div class="pannelTitle">
                <span class='settingsIcon' id='settingsIcon'></span> <span
                    class='spanTitle' id="clickedTitle">Settings</span> <span
                    class='spanCloseIcon' onclick="closesettingPannel()">×</span>
            </div>
            <div class="settingPannelInnerWrapper">
                <div class='listofSettingDiv' id='settingContentDiv'
                     style='display: none;'>
                    <ul>
                        <!--                        <li class="fontChangeIcon dropdown">
                                                    <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                                                        <span class="listImage"><img src="images/font.png" style="width: 20px;" title="Font Type" class="fontChangeButton themeModeDark">
                                                        </span>
                                                        <span class="mobileTitle">Font Type</span>
                                                    </a>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-toggle" data-toggle="dropdown" href="#"> Menu</a>
                                                            <ul class="submenu dropdown-menu">
                                                                <li><a tabindex="-1" href="#" id="upperCaseMenu" onclick="fontUpperCase('Menu', 'UpperCase')">UpperCase</a></li>
                                                                <li><a tabindex="-1" href="#" id="LowerCaseMenu" onclick="fontUpperCase('Menu', 'LowerCase')">LowerCase</a></li>
                                                                <li><a tabindex="-1" href="#" id="capitaliseFontMenu" onclick="fontUpperCase('Menu', 'Refresh')">Refresh</a></li>
                        
                                                            </ul></li>
                                                                                                        <li><a class="dropdown-toggle" data-toggle="dropdown" href="#">Description </a>
                                                                                                            <ul class="submenu dropdown-menu">
                                                                                                                <li><a tabindex="-1" href="#" id="upperCaseDes" onclick="showViewFont('Description', 'UpperCase')">UpperCase</a></li>
                                                                                                                <li><a tabindex="-1" href="#" id="LowerCaseDes" onclick="showViewFont('Description', 'LowerCase')">LowerCase</a></li>
                                                                                                                <li><a tabindex="-1" href="#" id="capitaliseFontDes" onclick="showViewFont('Description', 'Refresh')">Refresh</a></li>
                                                        
                                                                                                            </ul></li>
                                                        <li><a class="dropdown-toggle" data-toggle="dropdown" href="#">Content</a>
                                                            <ul class="submenu dropdown-menu">
                                                                <li><a tabindex="-1" href="#" id="upperCaseContent" onclick="fontUpperCase('Content', 'UpperCase')">UpperCase</a></li>
                                                                <li><a tabindex="-1" href="#" id="LowerCaseContent" onclick="fontUpperCase('Content', 'LowerCase')">LowerCase</a></li>
                                                                <li><a tabindex="-1" href="#" id="capitaliseFontContent" onclick="fontUpperCase('Content', 'Refresh')">Refresh</a></li>
                                                            </ul></li>
                                                    </ul></li>-->
                        <li id="fontChangeSettingId" class="fontChangeIcon dropdown">
                            <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                                <span class="listImage"><img id="fontChangeSettingImgId" src="images/font.png" style="width: 20px;" title="Font Type" class="fontChangeButton themeModeDark">
                                </span>
                                <span id="fontChangeSettingTitleId" class="mobileTitle">Font Type</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li onclick="fontUpperCase('UpperCase')"><a tabindex="-1" href="#" id="upperCaseMenu" >UpperCase</a></li>
                                <li onclick="fontUpperCase('LowerCase')"><a tabindex="-1" href="#" id="LowerCaseMenu" >LowerCase</a></li>
                                <li onclick="fontUpperCase('Default')"><a tabindex="-1" href="#" id="capitaliseFontMenu" >Default</a></li>

                            </ul></li> 

                        <li id="fontSizeSettingId" class="fontSizeIcon dropdown">
                            <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                                <span class="listImage">
                                    <img id="fontSizeSettingImgId" src="images/font-size.png" style="width: 20px;" title="Font Size" class="fontSizeChangeButton themeModeDark">
                                </span>
                                <span id="fontSizeSettingTitleId" class="mobileTitle">Font Size</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li onclick="changeFontSize('Smaller')"><a tabindex="-1" href="#" id="SmallerFontSize">Smaller</a></li>
                                <li onclick="changeFontSize('Medium')"><a tabindex="-1" href="#" id="MediumFontSize">Medium</a></li>
                                <li onclick="changeFontSize('Large')"><a tabindex="-1" href="#" id="LargeFontSize">Large</a></li>
                                <li onclick="changeFontSize('Default')"><a tabindex="-1" href="#" id="DefaultFontSize" >Default</a></li>

                            </ul></li> 


                        <!--                        <li class="fontSizeIcon dropdown">
                                                    <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                                                        <span class="listImage">
                                                            <img src="images/font-size.png" style="width: 20px;" title="Font Size" class="fontSizeChangeButton themeModeDark">
                                                        </span>
                                                        <span class="mobileTitle">Font Size</span>
                                                    </a>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-toggle" data-toggle="dropdown" href="#"> Menu</a>
                                                            <ul class="submenu dropdown-menu">
                                                                <li class="dropdown-item"><a  onclick="menuFontSizeData('Menu', 'Smaller')" event.preventdefault();="" href="#">Smaller</a></li>
                                                                <li class="dropdown-item"><a  href="#" onclick="menuFontSizeData('Menu', 'Medium')">Medium</a></li>
                                                                <li class="dropdown-item"><a  href="#" onclick="menuFontSizeData('Menu', 'Large')">Large</a></li>
                                                                <li class="dropdown-item"><a  href="#" onclick="menuFontSizeData('Menu', 'Reset')">Reset</a></li>
                                                            </ul></li>
                                                        <li><a class="dropdown-toggle" data-toggle="dropdown" href="#"> Content </a>
                                                            <ul class="submenu dropdown-menu">
                                                                <li class="dropdown-item"><a href="#" onclick="ChangingFontSize('Content', 'Smaller')">Smaller</a></li>
                                                                <li class="dropdown-item"><a href="#" onclick="ChangingFontSize('Content', 'Medium')">Medium</a></li>
                                                                <li class="dropdown-item"><a href="#" onclick="ChangingFontSize('Content', 'Large')">Large</a></li>
                                                                <li class="dropdown-item"><a href="#" onclick="ChangingFontSize('Content', 'Reset')">Reset</a></li>
                                                            </ul></li>
                                                           
                                                                                                        <li><a class="dropdown-toggle" data-toggle="dropdown" href="#"> Description </a>
                                                                                                            <ul class="submenu dropdown-menu">
                                                                                                                <li><a class="dropdown-item" href="#" onclick="descriptionFontSize('Description', 'Smaller')">Smaller</a></li>
                                                                                                                <li><a class="dropdown-item" href="#" onclick="descriptionFontSize('Description', 'Medium')">Medium</a></li>
                                                                                                                <li><a class="dropdown-item" href="#" onclick="descriptionFontSize('Description', 'Large')">Large</a></li>
                                                                                                                <li><a class="dropdown-item" href="#" onclick="descriptionFontSize('Description', 'Reset')">Reset</a></li>
                                                        
                                                                                                            </ul></li>
                                                    </ul></li>-->
                        <li id="themeChangeSettingId" class="themeChangeIcon" onclick="changeTheme()">
                            <a class="" href="#">
                                <span class="listImage">
                                    <img id="themeChangeSettingImgId" src="images/lightmode.png" title="Light Mode" class="themeModeClickButton" width="20px">
                                </span>
                                <span id="themeChangeSettingTitleId" class="mobileTitle themeModeTitle">Dark Mode</span>
                            </a>
                        </li>

                        <li id="extendedViewSettingId" class="extendedViewIcon" onclick="toggleFullScreen()">
                            <a href="#!" class="waves-effect waves-light">
                                <span class="listImage">
                                    <img id="extendedViewSettingImgId" src="images/extendedview.png" class="themeModeDark" width="20px" id="IntelliSenseFs" title="View full screen">
                                </span>		
                                <span id="extendedViewSettingTitleId" class="mobileTitle">View Full Screen</span>				     
                            </a>						    
                        </li>

                        <li id="languageChangeSettingId" class="languageChangeIcon" onclick="changeLanguage()">
                            <a class="" href="#">
                                <span class="listImage"> 
                                    <img id="languageChangeSettingImgId" src="images/languageSet.png" title="languageSet" class="themeModeDark" width="20px">  
                                </span>
                                <span id="languageChangeSettingTiteId" class="mobileTitle">Language</span>
                            </a>

                        </li>

                        <!--                        <li class="organizationIcon">
                                                    <a class="" href="#">
                                                        <span class="listImage">
                                                            <img src="images/Organization_Vision_Icon.svg" title="DXP" class="profile-img themeModeDark" width="20px">
                                                        </span>					
                                                        <span class="mobileTitle">Organization</span>
                                                    </a>
                                                </li>-->
                        <li id="feedbackSettingId" class="feedbackIcon">
                            <a href="#" onclick="openFeedBackPagePopup()">
                                <span class="listImage">
                                    <img id="feedbackSettingImgId" src="images/FeedBack_Icon.svg" title="Feedback" class="headerFeedback themeModeDark" width="20px">
                                </span>
                                <span id="feedbackSettingTitleId" class="mobileTitle">Feedback</span>
                            </a> 


                        </li>


                        <li id="themesChangeSettingId"  class="ThemesIcon" id="themesShowClass">
                            <a class="" href="#"> 
                                <span class="listImage"> 
                                    <img id="themesChangeSettingImgId" src="images/Themes.png" title="Themes" class="profile-img themeModeDark" width="20px">
                                </span>
                                <span id="themesChangeSettingTitleId" class="mobileTitle">Themes</span>
                            </a> 
                            <div class="innerThemes">
                                <ul>
                                    <li onclick="resetToDefault()">
                                        <div class="lightthemeColor defaultColor" ></div>
                                    </li>
                                    <li onclick="applyTheme(this, 'colorAsBgTheme', 'darkcoloredTheme')">
                                        <div class="darkthemeColor primaryColor" ></div>
                                    </li>
                                    <li onclick="applyTheme(this, 'colorAsBgTheme', 'darkcoloredTheme')">
                                        <div class="lightthemeColor secondaryColor" ></div>
                                    </li>
                                    <li onclick="applyTheme(this, 'colorAsBgTheme', 'darkcoloredTheme')">
                                        <div class="darkthemeColor basicColor" ></div>
                                    </li>
                                    <li onclick="applyTheme(this, 'colorAsBgTheme', 'darkcoloredTheme')">
                                        <div class="darkthemeColor darkedColor" ></div>
                                    </li>
                                    <li onclick="applyTheme(this, 'colorAsBgTheme', 'darkcoloredTheme')">
                                        <div class="darkthemeColor lightDarkColor" ></div>  
                                    </li>
                                </ul>
                                <ul>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme', 'darkcoloredTheme')">
                                        <img src="images/home_theme1.png"  class="lightthemeColors defaulttheme">
                                    </li>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme', 'darkcoloredTheme')">
                                        <img src="images/home_theme2.jpg"  class="lightthemeColors primarytheme">
                                    </li>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme', 'darkcoloredTheme')">
                                        <img src="images/home_theme3.jpg"  class="lightthemeColors secondarytheme">
                                    </li>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme', 'darkcoloredTheme')">
                                        <img src="images/home_theme4.jpg"  class="lightthemeColors basictheme">
                                    </li>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme', 'darkcoloredTheme')">
                                        <img src="images/home_theme5.jpeg"  class="lightthemeColors darktheme">
                                    </li>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme', 'whitecoloredThemeBg')">
                                        <img src="images/home_theme6.png"  class="lightthemeColors lighttheme"></li>
                                </ul>
                            </div>
                            <div class="moreThemesShowDiv" style="display: block;">More Themes <i class="fa fa-angle-down" aria-hidden="true"></i></div>

                            <div class="moreThemes" style="display: none;">
                                <ul>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme', 'darkcoloredTheme')">
                                        <img src="images/themebg_1.jpg" class="lightthemeColors moreThemeOne">
                                    </li>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme', 'darkcoloredTheme')">
                                        <img src="images/themebg_2.jpg" class="lightthemeColors moreThemeTwo">
                                    </li>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme', 'darkcoloredTheme')">
                                        <img src="images/themebg_3.jpg" class="lightthemeColors moreThemeThree">
                                    </li>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme', 'darkcoloredTheme')">
                                        <img src="images/themebg_4.jpg" class="lightthemeColors moreThemeFour">
                                    </li>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme', 'darkcoloredTheme')">
                                        <img src="images/themebg_5.jpg" class="lightthemeColors moreThemeFive">
                                    </li>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme', 'darkcoloredTheme')">
                                        <img src="images/themebg_6.jpg" class="lightthemeColors moreThemeSix">
                                    </li> 
                                </ul>
                                <ul>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme')"><img src="images/themebg_7.jpg" class="lightthemeColors moreThemeSeveen"></li>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme')"><img src="images/themebg_8.jpg" class="lightthemeColors moreThemeEight"></li>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme')"><img src="images/themebg_9.png" class="lightthemeColors moreThemeNine"></li>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme')"><img src="images/themebg_10.jpg" class="lightthemeColors moreThemeTen"></li>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme')"><img src="images/themebg_11.jpg" class="lightthemeColors moreThemeNine"></li>
                                    <li onclick="applyTheme(this, 'imageAsBgTheme')"><img src="images/themebg_12.jpg" class="lightthemeColors moreThemeTen"></li>
                                </ul>
                            </div>

                            <div class="moreThemesHideDiv" style="display: none;">Hide Themes <i class="fa fa-angle-up" aria-hidden="true"></i></div>
                        </li>

                        <li id = "contactPreferencesSettingId" class="contactPreferencesIcon">
                            <a class="" href="#" onclick="getHtmlContentBasedOnQueryPopUp('Contact Preferences', 'Contact Preferences', 'CONTACT PREFERENCES', 'H', 'Contact Preferences', 'N')" >
                                <span class="listImage">
                                    <img id = "contactPreferencesSettingImgId" src="images/SignUp.png" title="Contact Preferences" class="profile-img themeModeDark" width="20px"> 
                                </span>							
                                <span id = "contactPreferencesSettingTitleId" class="mobileTitle">Contact Preferences</span>
                            </a>
                        </li>
                        <li id = "passwordChageSettingId" class="passworIcon" onclick="updatePassForm('C')">
                            <a class="" href="#">
                                <span class="listImage">
                                    <img id = "passwordChageSettingImgId" src="images/passwordSet.png" title="Change Password" class="profile-img themeModeDark" width="20px">
                                </span>

                                <span id = "passwordChageSettingTitleId" class="mobileTitle">Change Password</span>
                            </a>
                        </li>
                        <li id = "aboutUsSettingId" class="aboutUsIcon">
                            <a class="" href="https://www.piloggroup.com/" target="_blank">
                                <span class="listImage">
                                    <img id = "aboutUsSettingImgId" src="images/AboutUsSet.png" title="About Us" class="profile-img themeModeDark" width="20px">
                                </span>

                                <span id = "aboutUsSettingTitleId" class="mobileTitle">About Us</span>
                            </a>
                        </li>
                        <li id = "OtherSettingsId" class="OtherIcon">
                            <a class="" href="https://www.piloggroup.com/innovative-products.php" target="_blank">
                                <span class="listImage">
                                    <img id = "OtherSettingsImgId" src="images/search_blue1.png" title="Other" class="profile-img themeModeDark" width="20px">
                                </span>							

                                <span id = "OtherSettingsTitleId" class="mobileTitle">Other</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div  class='listofSettingDiv' id='helpContentDiv'
                      style='display: none;' onclick="getHelpHtmlContent()">
                    <ul>
                        <!--                        <li>
                                                    <a class="" href="#">
                                                        <span class="listImage">
                                                            <img src="images/ChatIcon.png" title="Mycart" class="headerShoppingCart themeModeDark" width="20px">
                                                        </span>
                                                        <span class="mobileTitle">Chat</span>
                                                    </a>
                                                </li>-->
                        <c:choose>
                            <c:when test="${not empty IDXP_HEADER_HELPDOC_FLAG &&  IDXP_HEADER_HELPDOC_FLAG == 'N'}">                              

                            </c:when>
                            <c:otherwise>
                                <li class="helpDocList" id ="helpDocListId" onclick="showHelpDocVidGif('Document')">
                                    <a class="" href="#">
                                        <span class="listImage">							
                                            <img src="images/SearchHelp.png" title="Help Document" class="headerShoppingCart themeModeDark" width="20px">
                                        </span>
                                        <span class="mobileTitle">Help Document</span>
                                    </a>
                                </li>
                            </c:otherwise>
                        </c:choose>
                        <c:choose>
                            <c:when test="${not empty IDXP_HEADER_HELPVIDEO_FLAG &&  IDXP_HEADER_HELPVIDEO_FLAG == 'N'}">                              

                            </c:when>
                            <c:otherwise>
                                <li class="helpDocList" id ="helpVideoListId" onclick="showHelpDocVidGif('Video')">
                                    <a class="" href="#">
                                        <span class="listImage">	
                                            <img src="images/SearchVideoPlay.png" title="Help Video" class="headerShoppingCart themeModeDark" width="20px">
                                        </span>
                                        <span class="mobileTitle">Help Video</span>
                                    </a>
                                </li>
                            </c:otherwise>
                        </c:choose>
                        <c:choose>
                            <c:when test="${not empty IDXP_HEADER_HELPGIF_FLAG &&  IDXP_HEADER_HELPGIF_FLAG == 'N'}">                              

                            </c:when>
                            <c:otherwise>
                                <li class="helpDocList" id ="helpGifListId" onclick="showHelpDocVidGif('Gif')">
                                    <a class="" href="#">
                                        <span class="listImage">
                                            <img src="images/SearchGif.png" title="Help Gif" class="headerShoppingCart themeModeDark" width="20px">
                                        </span>
                                        <span class="mobileTitle">Help Gif</span>
                                    </a>
                                </li>
                            </c:otherwise>
                        </c:choose>
                        <!--                        <li>
                                                    <a class="" href="#">
                                                        <span class="listImage">
                                                            <img src="images/feedback_icon.png" title="Feedback" class="headerShoppingCart themeModeDark" width="20px">
                                                        </span>
                                                        <span class="mobileTitle">Feedback</span>
                                                    </a>
                                                </li>-->
                    </ul>
                </div>
                <div class='listofSettingDiv' id='calendarContentDiv'
                     style='display: none;'>
                    <div class="scheduledCalendarMainWrapper">
                        <div class="content-wrapper grey lighten-3">
                            <div class="container calendarMainClass">
                                <div class="calendar-wrapper z-depth-2">
                                    <div class="calendar-header">
                                        <div class="header-title header-text">  
                                            <div class="monthNameClass">
                                                <h3><span id="month-name"></span></h3>
                                            </div>
                                            <!--                                            <div class="col-md-6">
                                                                                            <div class="currentdate">
                                                                                                                                                <h5 id="todayDayName">Today</h5>
                                            
                                                                                            </div>
                                                                                        </div>-->
                                        </div>
                                    </div>


                                    <div class="calendar-content">
                                        <div class="togglePrevNextClass">
                                            <a class="prev-button" id="prevCalender"> <i
                                                    class="fa fa-angle-left" aria-hidden="true"></i></a> 
                                            <a class="next-button" id="nextCalender"> <i
                                                    class="fa fa-angle-right" aria-hidden="true"></i>
                                            </a></div>

                                        <div id="calendar-table" class="calendar-cells">
                                            <div id="table-header">
                                                <div class="row">
                                                    <div class="col-1 colDays">M</div>
                                                    <div class="col-1 colDays">T</div>
                                                    <div class="col-1 colDays">W</div>
                                                    <div class="col-1 colDays">T</div>
                                                    <div class="col-1 colDays">F</div>
                                                    <div class="col-1 colDays">S</div>
                                                    <div class="col-1 colDays">S</div>
                                                </div>
                                                <!--<hr />-->
                                            </div>

                                            <div id="table-body">
                                            </div>

                                        </div>
                                    </div>
                                    <div class="sidebar-wrapper z-depth-2 side-nav fixed"
                                         id="sidebar">
                                        <div class="sidebar-title"> 
                                            <h5 id="eventDayName">Date</h5>
                                        </div>
                                        <div class="sidebar-events" id="sidebarEvents">
                                            <div class="empty-message">Currently, no events to
                                                selected date</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="newEventMainDiv" onclick="addNewDateWiseEvent()">
                            <div>
                                <span class="newEventSpan">												
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div class="newEventName">New event
                            </div>
                        </div>
                    </div>

                </div>
                <div class='listofSettingDiv menuListDetails' id='externalMenuContentDiv'
                     style='display: none;'>
                    <div class='closeSettings' onclick="closesettingPannel()" style='display: none;'><span>×</span></div>
                    <div class='row'>
                        <div class='col-md-6'> 
                            <div class="card">  
                                <div class="card-body">
                                    <div class='menuItem' >
                                        <a class="" href="https://pilogcloud.com/iVisionDXP/"><img src='images/Lean-Governance.png' class='menuListImg themeModeDark'/>
                                            <p class='menuitemText'>Lean Governance</p></a>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div class='col-md-6'> 
                            <div class="card">
                                <div class="card-body">
                                    <!--                                    <div class='menuItem' >
                                                                            <a class="" href="https://insights.intellisensesolutions.com"><img src='images/IntelliSense-Logo.png' class='menuListImg themeModeDark' />
                                                                                <p class='menuitemText'>Intellisense</p></a>
                                                                        </div>-->
                                </div>
                            </div>    
                        </div>
                        <div class='col-md-6'>
                            <div class="card">
                                <div class="card-body">
                                    <div class='menuItem' href="https://smart.integraldataanalytics.com">
                                        <!--<img src='images/logo_red.png' class='menuListImg themeModeDark' />-->
                                        <p class='menuitemText'>Smart inteGraphics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-md-6'>
                            <div class="card">
                                <div class="card-body">
                                    <div class='menuItem' href="https://mdrmcloudprd.pilogcloud.com/V10_CLOUD/">
                                        <img src='images/DQH_icon.svg' class='menuListImg themeModeDark' />
                                        <p class='menuitemText'>DQH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-md-6'> 
                            <div class="card">
                                <div class="card-body">
                                    <div class='menuItem' href="https://pilogcloud.com/">
                                        <!--<img src='images/PiLogCloud-New-Logo-blue-red.png' class='menuListImg themeModeDark' />-->
                                        <p class='menuitemText'>Pilog Cloud</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='listofSettingDiv userAccountDetails' id='userContentDiv'
                     style='display: none;'>
                    <div class='closeSettings' onclick="closesettingPannel()" style='display: none;'><span>×</span></div>
                    <div class="media"> 
                        <div id="userProfileImgDiv" class="userProfileImgDiv" objStr="${sessionScope.ssUsername}">
                            <div class="avatar-upload">
                                <div class="avatar-edit">
                                    <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                                    <label for="imageUpload"></label>
                                </div>
                                <div class="avatar-preview">
                                    <div id="imagePreview" style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqsb6lK-PlD1kHFoubbiC-jN21tqj9ADz9crJ2rBIstz1gKFPE&usqp=CAU);">
                                    </div>
                                </div>
                            </div>
                            <div class="deleteProfileImg"><img src='images/iDXPUI5Delete.svg' onclick="removeUserProfilePic()"/></div>
                        </div>
                        <div class="media-body">
                            <h4 class='loginaccName'>${sessionScope.ssUsername}</h4>
                        </div>
                        <!--                                        <div class="p-image">
                                                                    <i class="fa fa-camera upload-button"></i>
                                                                </div>-->
                    </div>
                    <ul>

                        <!--                        <li class="header-notification">
                        
                                                    <a href="<c:url value="/"/>myCart">
                                                        <span class='ListimageIcon'><img src="images/shopping-Cart-Icon.svg" title="Mycart" class="headerShoppingCart themeModeDark" style="height: 23px;width: 24px;"><sup id ="cartCount" class='PiLogCloudCartCount'>${cartCount}</sup></span>
                                                        <span class='ListIconText'>My Cart</span>
                                                    </a>
                        
                                                </li>-->
                        <!--                        <li class="header-notification notoficationLogout" data-toggle="modal" data-target="#signOut">
                                                    <span class='ListimageIcon'><img src="images/LogOut_Icon.svg" class="profile-img themeModeDark" title="Logout"></span> <span class='ListIconText'>Sign Out</span></li>-->
                    </ul>
                </div>
            </div>
        </section>
        <div class="dxpDataCompositionTree" id="dxpDataCompositionTree"></div>
        <div class="dataDxpSplitterValue" id="dataDxpSplitterValue"></div>
        <div class="showExtendPdfTableData" id="showExtendPdfTableData"></div>
        <div class="intiateRequestClass" id="intiateRequestClass"></div>
        <div class="dataDxpSplitterValueNew" id="dataDxpSplitterValueNew"></div>
        <div id="formView"></div>
        <div id="dddw"></div> 
        <div id="uomgridpopup" class="searchDialogPos"></div> 
        <div id="dialog"></div> 
        <div id="dialogsucess"></div> 
        <div id="dialog1"></div>
        <div id="gridDialog"></div> 
        <div id="instanceDialogBox"></div> 
        <div id="treeDialog"></div> 
        <div id="visionTempleteHoverImage" class="visionTempleteHoverImage"></div>
        <div id="visionTempleteImagePopup" class="visionTempleteHoverImage"></div>
        <div id="columnMappingDialog"></div>
        <div id="showPopupdialogBox" class="showPopupdialogBox"></div>
        <div id="joinTableColumnTr" style="display: none"></div>
        <div id="filterTableColumnTr" style="display: none"></div>
        <div id="whereTableColumnTr" style="display: none"></div>
        <div id="popover" style="display: none"></div>
        <div id="filterDxpResults" style="display: none"></div>
        <div id="createDxppopoverREsult"></div>
        <div id="dxpCreatePopOver"></div>
        <div id="homepageChartDialog"></div>
        <input type="hidden" id="labelObjectHidden" value=""/>
        <div id="duplicateDialog"><div id="duplicateGrid"></div></div>
        <div id="geoLocationMap"><div id="geoLocation"></div><div id="geoMap"></div></div>
        <div id="clusterFormdialog"><div id="clusterFormpopupData"></div></div>
        <div id="dialogGridPersonlization"><div id="dialogGridPersonlizationTable" class="dialogGridPersonlizationTable"></div></div>
        <div id="dialog3"></div>
        <div id="dialog4"></div>
        <div id="dialog5"></div>
        <div id="dialog6"></div>
        <div id="dialog7"></div>
        <div id="dialog8"></div>
        <div id="dialog9"></div>
        <div id="dialog10"></div>
        <div id="dialogbluksubmit"></div>
        <div id="messagedialog1"></div>
        <div id="messagedialog2"></div>
        <div id="messagedialog3"></div>
        <div id="messagedialog4"></div>
        <div id="messagedialog5"></div>
        <div id="reasonmessagedialog1"></div>
        <div id="reasonmessagedialog2"></div>
        <div id="reasonmessagedialog3"></div>
        <div id="reasonmessagedialog4"></div>
        <div id="reasonmessagedialog5"></div>
        <div id="duplicategridCheckForm"></div>
        <div id="searchResultsParamsData" style="display:none;"></div>
        <div id="filterGridForm"></div>
        <div id="dxpIncrementTimer" style="text-align: center;font-weight: bold;"></div>
        <div id="dxpCountdownTimer"style="text-align: center;font-weight: bold;"></div>
        <div id="visualizeAreaGirdData1"></div>
        <div id="datagridFormViewPopup"></div>   
        <input type="hidden" value="${sessionScope.ssExportRange}" id="ssExportRange"/>
        <input type="hidden" value="${sessionScope.ssExportCount}" id="ssExportCount"/>
        <input type="hidden" value="${sessionScope.ssExportColFlag}" id="ssExportColFlag"/>
        <input type="hidden" id="srcurl" value=""/>
        <input type="hidden" id="duplicateGridbasicData" value=""/>
        <input type="hidden" id="analysisType" value=""/>
        <input type="hidden" id="latitude" value=""/>
        <input type="hidden" id="logtitude" value=""/> 
        <input type="hidden" id="SelectedCurrentTabId" value=""/> 
        <input type="hidden" id="multipleGridRows" value=""/>
        <div  class='notificationClass' id="notification"></div> 
        <input type="hidden" value="${sessionScope.notificationActivated}" id="notificationActivatedID"/>
        <input type="hidden" id="sessionLocale" value="${sessionScope.ssLocale}"/>                           
        <c:choose>
            <c:when test="${not empty IDXP_HEADER_SEARCH_BAR_FLAG &&  IDXP_HEADER_SEARCH_BAR_FLAG == 'N'}">                              
                <input type="hidden" id="idxpglobalsearchflag" value="N"/>
            </c:when>
            <c:otherwise>
                <input type="hidden" id="idxpglobalsearchflag" value="Y"/>
            </c:otherwise>
        </c:choose> 
        <c:choose>
            <c:when test="${not empty IDXP_DUP_UPD_ACT_FLAG &&  IDXP_DUP_UPD_ACT_FLAG == 'N'}">                              
                <input type="hidden" id="idxpdupupdactflag" value="N"/>
            </c:when>
            <c:otherwise>
                <input type="hidden" id="idxpdupupdactflag" value="Y"/>
            </c:otherwise>
        </c:choose> 
        <c:choose>
            <c:when test="${not empty IDXP_DUP_RESET_ACT_FLAG &&  IDXP_DUP_RESET_ACT_FLAG == 'N'}">                              
                <input type="hidden" id="idxpduprestetactflag" value="N"/>
            </c:when>
            <c:otherwise>
                <input type="hidden" id="idxpduprestetactflag" value="Y"/>
            </c:otherwise>
        </c:choose> 
        <c:choose>
            <c:when test="${not empty IDXP_DUP_EXPORT_FLAG &&  IDXP_DUP_EXPORT_FLAG == 'N'}">                              
                <input type="hidden" id="idxpdupexportflag" value="N"/>
            </c:when>
            <c:otherwise>
                <input type="hidden" id="idxpdupexportflag" value="Y"/>
            </c:otherwise>
        </c:choose> 
        <c:choose>
            <c:when test="${not empty IDXP_DUP_RESOLVE_ACT_FLAG &&  IDXP_DUP_RESOLVE_ACT_FLAG == 'N'}">                              
                <input type="hidden" id="idxpdupresolveactflag" value="N"/>
            </c:when>
            <c:otherwise>
                <input type="hidden" id="idxpdupresolveactflag" value="Y"/>
            </c:otherwise>
        </c:choose> 
        <c:choose>
            <c:when test="${not empty IDXP_AI_LENS_FLAG &&  IDXP_AI_LENS_FLAG == 'N'}">                              
                <input type="hidden" id="AIEnableOrDisableFlag" value="N"/>
            </c:when>
            <c:otherwise>
                <input type="hidden" id="AIEnableOrDisableFlag" value="Y"/>
            </c:otherwise>
        </c:choose> 
        <c:choose>
            <c:when test="${not empty IDXP_CHART_IMAGE_PER_ROW}">                              
                <input type="hidden" id="downloadChartImagperrow" value="${IDXP_CHART_IMAGE_PER_ROW}"/>
            </c:when>
            <c:otherwise>
                <input type="hidden" id="downloadChartImagperrow" value="2"/>
            </c:otherwise>
        </c:choose>                       
        <c:choose>
            <c:when test="${not empty IDXP_CHART_SAVE_FLAG}">                              
                <input type="hidden" id="smartChartSaveFlag" value="${IDXP_CHART_SAVE_FLAG}"/>
            </c:when>
            <c:otherwise>
                <input type="hidden" id="smartChartSaveFlag" value="N"/>
            </c:otherwise>
        </c:choose>                       
        <c:choose>
            <c:when test="${not empty IDXP_CHART_SAVE_FLAG_ROLE}">                              
                <input type="hidden" id="smartChartSaveFlagRole" value="${IDXP_CHART_SAVE_FLAG_ROLE}"/>
            </c:when>
            <c:otherwise>
                <input type="hidden" id="smartChartSaveFlagRole" value=""/>
            </c:otherwise>
        </c:choose>                       
        <c:choose>
            <c:when test="${not empty IDXP_DOMAIN_CHARTS_FLAG}">                              
                <input type="hidden" id="domainBasedchartsflag" value="${IDXP_DOMAIN_CHARTS_FLAG}"/>
            </c:when>
            <c:otherwise>
                <input type="hidden" id="domainBasedchartsflag" value="N"/>
            </c:otherwise>
        </c:choose>                       
        <c:choose>
            <c:when test="${not empty IDXP_DOMAIN_COUNT_FLAG}">                              
                <input type="hidden" id="domainBasedcountflag" value="${IDXP_DOMAIN_COUNT_FLAG}"/>
            </c:when>
            <c:otherwise>
                <input type="hidden" id="domainBasedcountflag" value="Y"/>
            </c:otherwise>
        </c:choose>   





        <div id="dataViewDiv" class="visionETLDesignTabContent" style="display:none;">

        </div>
        <input type="hidden" id="OCI_HOOK_URL" value = "${sessionScope.sssapOcihookurl}"/>
        <input type="hidden" id="OCI_RETURNTARGET" value = "${sessionScope.sssapOcireturntarget}"/> 
        <input type="hidden" id="mlConfigFlag" value = "${sessionScope.ssMLCongifFlag}"/>    
        <div id="pivotGridDialog">
            <div id='output'></div>
        </div>
        <div id="jqxpivotGridDialog" style="display:none">
            <table>
                <tr>
                    <td>
                        <div id="divPivotGridDesigner" style="height: 400px; width: 250px;">
                        </div>
                    </td>
                    <td>
                        <div id="divPivotGrid" style="height: 400px; width: 550px;"></div>
                    </td>
                </tr>
            </table>
        </div>
        <div id="ccAvenuePaymentProcess" style="display:none;">
            <div id="paymentResponse"></div>
            <!--<form name="customerData">-->
            <table width="40%" height="100" border='1' align="center">
                <caption>
                    <font size="4" color="blue"><b>Integration Kit</b></font>
                </caption>
            </table>
            <table width="40%" height="100" border='1' id="paymentDetails" align="center">
                <tr>
                    <td>Parameter Name:</td>
                    <td>Parameter Value:</td>
                </tr>
                <tr>
                    <td colspan="2">Compulsory information</td>
                </tr>
                <tr>
                    <td>TID	:</td><td><input type="text" name="tid" id="tid" readonly /></td>
                </tr>
                <tr>
                    <td>integration type	:</td>
                    <td><input type="text" value="iframe_normal" name="integration_type" id="integration_type" disabled></td>
                </tr>
                <tr>
                    <td>Merchant Id</td>
                    <td><input type="text" name="merchant_id" id="merchant_id" value="2165579" /></td>
                </tr>
                <tr>
                    <td>Order Id</td>
                    <td><input type="text" name="order_id" value="" /></td>
                </tr>
                <tr>
                    <td>Currency</td>
                    <td><input type="text" name="currency" value="INR" /></td>
                </tr>
                <tr>
                    <td>Amount</td>
                    <td><input type="text" name="amount" value="1.00" /></td>
                </tr>
                <tr>
                    <td>Redirect URL</td>
                    <!--                <td><input type="text" name="redirect_url"
                                               value="https://www.piloggroup.com/subscriptions.php" />
                                    </td>-->
                </tr>
                <tr>
                    <td>Cancel URL</td>
                    <td><input type="text" name="cancel_url"
                               value="https://www.piloggroup.com/subscriptions.php" />
                    </td>
                </tr>
                <tr>
                    <td>Language</td>
                    <td><input type="text" name="language" id="language" value="EN" /></td>
                </tr>
                <tr>
                    <td colspan="2">Billing information(optional):</td>
                </tr>
                <tr>
                    <td>Billing Name</td>
                    <td><input type="text" name="billing_name" value="Peter" /></td>
                </tr>
                <tr>
                    <td>Billing Address:</td>
                    <td><input type="text" name="billing_address" value="Santacruz" /></td>
                </tr>
                <tr>
                    <td>Billing City:</td>
                    <td><input type="text" name="billing_city" value="Mumbai" /></td>
                </tr>
                <tr>
                    <td>Billing State:</td>
                    <td><input type="text" name="billing_state" value="MH" /></td>
                </tr>
                <tr>
                    <td>Billing Zip:</td>
                    <td><input type="text" name="billing_zip" value="400054" /></td>
                </tr>
                <tr>
                    <td>Billing Country:</td>
                    <td><input type="text" name="billing_country" value="India" /></td>
                </tr>
                <tr>
                    <td>Billing Tel:</td>
                    <td><input type="text" name="billing_tel" value="0229874789" /></td>
                </tr>
                <tr>
                    <td>Billing Email:</td>
                    <td><input type="text" name="billing_email" value="testing@domain.com" /></td>
                </tr>
                <tr>
                    <td colspan="2">Shipping information(optional):</td>
                </tr>
                <tr>
                    <td>Shipping Name</td>
                    <td><input type="text" name="delivery_name" value="Sam" /></td>
                </tr>
                <tr>
                    <td>Shipping Address:</td>
                    <td><input type="text" name="delivery_address" value="Vile Parle" /></td>
                </tr>
                <tr>
                    <td>Shipping City:</td>
                    <td><input type="text" name="delivery_city" value="Mumbai" /></td>
                </tr>
                <tr>
                    <td>Shipping State:</td>
                    <td><input type="text" name="delivery_state" value="Maharashtra" /></td>
                </tr>
                <tr>
                    <td>Shipping Zip:</td>
                    <td><input type="text" name="delivery_zip" value="400038" /></td>
                </tr>
                <tr>
                    <td>Shipping Country:</td>
                    <td><input type="text" name="delivery_country" value="India" /></td>
                </tr>
                <tr>
                    <td>Shipping Tel:</td>
                    <td><input type="text" name="delivery_tel" value="0221234321" /></td>
                </tr>
                <tr>
                    <td>Merchant Param1</td>
                    <td><input type="text" name="merchant_param1" value="additional Info." /></td>
                </tr>
                <tr>
                    <td>Merchant Param2</td>
                    <td><input type="text" name="merchant_param2" value="additional Info." /></td>
                </tr>
                <tr>
                    <td>Merchant Param3</td>
                    <td><input type="text" name="merchant_param3" value="additional Info." /></td>
                </tr>
                <tr>
                    <td>Merchant Param4</td>
                    <td><input type="text" name="merchant_param4" value="additional Info." /></td>
                </tr>
                <tr>
                    <td>Merchant Param5</td>
                    <td><input type="text" name="merchant_param5" value="additional Info." /></td>
                </tr>
                <tr>
                    <td>Promo Code:</td>
                    <td><input type="text" name="promo_code" value=""/></td>
                </tr>
                <tr>
                    <td>Customer Id:</td>
                    <td><input type="text" name="customer_identifier" value=""/></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <INPUT TYPE="submit" onclick="paymentsRedirect()" value="Checkout">
        </div>
        <!--<div id="duplicateCheckForm"></div>-->


        <div id='importsearchcriteria' style="display: none">

            <div class="visionSearchImportmain">
                <div id="visionImportErrorMsg" style='display:none'>
                    <p style="color:#0071C5;"><b>${labelobj['Note'] != null ? labelobj['Note']:"Note"}</b>:${labelobj['Please maintain data in first column in Excel file'] != null ? labelobj['Please maintain data in first column in Excel file']:"Please maintain data in first column in Excel file"}</p>
                </div>
                <div class="visionSearchImportSelect">
                    <select onchange="onimportddwChange();" id='browsecolsddw'></select>
                </div>
                <div class="visionSearchImportButton" id="uploadButtonDiv">
                    <input type="button" value="Upload" class="visionFileUpload" onclick="importParamSearch()"/>
                    <input id='browsecols' name='importFile' class="upload" type="file" value="Import file" style="display:none;"/>
                    <input type="hidden" id="browsecolsHidden" value=""/>

                </div>
            </div>
            <div id="somediv" title="" class="visionDisplaySomeDiv">
                <div id="deleteIcon"></div>                       
                <div id="pdfMM"></div>
            </div>
            <div id="imgdiv" title="" class="visionDisplaySomeDiv">
                <div id="deleteImg" style="float:right">
                    <img src="images/delete.gif" id="deleteimgAttachmentId" class="visionDeleteAttachment" title="Delete" onclick="updateVendorEnclousure('delete', 'image')">
                    <img src="images/download.png" id="downloadAttachmentId" class="visionDeleteAttachment" title="Download" onclick="downloadVendorEnclousure()">
                </div>
                <img id="imgdialog" class='attachImage visionFormAttachImage' onload='showDeleteButton()'/>
            </div>

            <div id="menupopoverid" title="" class="menupopoverClass">
            </div>
            <div id="producttypeId" title="" class="producttypeClass">
            </div>

        </div>
        <div id="deComMainDiv" class="deComMainDiv"> 
            <input type="hidden" id="deComTreeNodeColor0" level="0" value="#0b4a99"/>
            <input type="hidden" id="deComTreeNodeColor1" level="1" value="#0b4a99"/>
            <input type="hidden" id="deComTreeNodeColor2" level="2" value="#0b4a99"/>
            <input type="hidden" id="deComTreeNodeColor3" level="3" value="#0b4a99"/>
            <input type="hidden" id="deComTreeNodeColor4" level="4" value="#0b4a99"/>
        </div>
        <input type="hidden" name="profileUser" id="profileUser" value=""/>
        <input type="hidden" name="currentRole" id="currentRole" value=""/>
        <input type="hidden" name="userName" id="userName" value="${sessionScope.ssUsername}"/>
        <!--<input type="hidden" name="ssUserDetails" id="userName" value="${sessionScope.ssUserDetails}"/>-->
        <!--<input type="hidden" name="ssLangListStr" id="userName" value="${sessionScope.ssLangListStr}"/>-->
        <input type="hidden" name="helpMenuRole" id="helpMenuRole" value="${ssRoleId}"/>
        <input type="hidden" name="helpMenuThemesURL" id="helpMenuThemesURL" value="${ssThemesURL}"/>
        <input type="hidden" name="result" id="result" value=""/>
        <input type="hidden" name="itemsstring" id="itemsstring" value=""/>
        <input type="hidden" name="classConceptId" id="classConceptId" value=""/>
        <input type="hidden" name="stripValue" id="stripValue" value=""/>
        <input type="hidden" name="linkedColumns" id="linkedColumns" value=""/>
        <input type="hidden" name="imageTable" id="imageTable" value="ONTG_ATTACHMENTS"/>
        <input type="hidden" name="imageTableColumn" id="imageTableColumn" value="CONTENT"/>
        <input type="hidden" name="imageColumn" id="imageColumn" value="CONCEPT_ID"/>
        <input type="hidden" name="currentSearchId" id="searchId" value=""/>
        <input type="hidden" name="operationName" id="operationName" value=""/>
        <input type="hidden" name="formId" id="formId" value=""/>
        <input type="hidden" name="objectid" id="objectid" value=""/>
        <input type="hidden" name="rolehid" id="rolehid" value=""/>
        <input type="hidden" name="selectedCols" id="selectedCols" value=""/>
        <input type="hidden" name="currentRowIndex" id="currentRowIndex" value=""/>
        <input type="hidden" name="currentGridId" id="currentGridId" value=""/>  
        <input type="hidden" name="currentDomain" id="currentDomain" value=""/>
        <input type="hidden" name="listOfValues" id="listOfValues" value=""/>
        <input type="hidden" name="panelId" id="panelId" value=""/>   
        <input type="hidden" name="showFlag" id="showFlag" value="Y"/> 
        <input type="hidden" name="searchedValue" id="searchedValue" value=""/>  
        <input type="hidden" name="vendorOnBoardFlag" id="vendorOnBoardFlag" value=""/> 
        <input type="hidden" name="customizeToolbar" id="customizeToolbarData" value=""/>  
        <input type="hidden" name="checkBoxIds" id="checkBoxIds" value=""/>  
        <input type="hidden" name="currentClass" id="currentClass" value=""/>  
        <input type="hidden" name="currentTypedValue" id="currentTypedValue" value=""/> 
        <input type="hidden" id="currentSearchType" value=""/>
        <input type="hidden" id="currentshowSearchDomain" value=""/>
        <input type="hidden" id="currentSearchwithOutTemp" value=""/>
        <input type="hidden" id="currentshowSearchId" value=""/> 
        <input type="hidden" id="currentshowSearchRole" value=""/>
        <input type="hidden" id="currentSearchReqType" value=""/>
        <input type="hidden" id="currentSearchCatType" value=""/> 
        <input type="hidden" id="currentVisualizeChartTable" value=""/> 
        <input type="hidden" id="currentVisualizeChartParamArray" value=""/> 
        <input type="hidden" name="currentSearchData" id="currentSearchData" value=""/> 
        <input type="hidden" name="searchButtonObj" id="searchButtonObj" value=""/>    
        <input type="hidden" name="panelGridId" id="panelGridId" value=""/>
        <input type="hidden" name="charDupRecordListForAnalytics" id="charDupRecordListForAnalytics" value=""/>
        <input type="hidden" name="tableName" id="tableName" value=""/> 
        <input type="hidden" name="regGrdiId" id="regGrdiId" value=""/>         
        <input type="hidden" id="searchtemplateFlag" value=""/> 
        <input type="hidden" id="searchtemplateGrid" value=""/> 
        <input type="hidden" name="massColumnHide" id="massColumnHide" value=""/> 
        <input type="hidden" name="gridTemplateColLabels" id="gridTemplateColLabels" value=""/> 
        <input type="hidden" name="gridTemplateColumns" id="gridTemplateColumns" value=""/> 
        <input type="hidden" name="updateClassAllocation" id="updateClassAllocation" value=""/> 
        <input type="hidden" id="masterPanelId"/>
        <input type="hidden" id="masterFormId"/>
        <input type="hidden" id="masterGridObj" value=""/>
        <input type="hidden" id="masterObject"/>
        <input type="hidden" id="masterhrefColumn"/>
        <input type="hidden" id="hrefColumn"/>
        <input type="hidden" id="masterLinkedColumns"/>
        <input type="hidden" id="masterStripValue"/>
        <input type="hidden" id="hiddenObj"/>
        <input type="hidden" id="ssDuplCheckEnableFlag" value="${sessionScope.ssDuplCheckEnableFlag}"/>
        <input type="hidden" id="requestProcessNotAllowedStatuses" value=""/>
        <input type="hidden" id="masterColumnInitParamsObj"/>
        <input type="hidden" id="masterClusterId"/>
        <input type="hidden" id="masterImageColumn"/>
        <input type="hidden" id="imageTableColumn"/>
        <input type="hidden" id="imageTable"/>
        <input type="hidden" id='mastergridid'/> 
        <input type="hidden" id="defaultValues" value=""/>
        <input type="hidden" id='currentSelectMasterGridId'/>          
        <input type="hidden" id='currentSelectChildGridId'/>       
        <input type="hidden" id='multiSelectGridId'/>
        <input type="hidden" id="currentSelectFillDownDependencyColumns" value=""/>
        <input type="hidden" id="currentSelectFillDownData" value=""/>
        <input type="hidden" id="currentSelectGridIndex" value="0"/>
        <input type="hidden" id="currentSelectMasterGridIndex" value="0"/>
        <input type="hidden" id="openDocsInitParam" value=""/>
        <input type="hidden" value="" id="CompareQueryAndUrlMethod"/>
        <input type="hidden" id="attachGridViewFlag" value=""/>
        <input type="hidden" id="batchIndicator" value=""/>    
        <input type="hidden" value="" id="massValidateComment"/>
        <input type="hidden" value="" id="gridRefreshVal"/>
        <input type="hidden" value="" id="relationArray"/>
        <input type="hidden" value="" id="tabChartsId"/>
        <input type="hidden" value="" id="tabComponentId"/>
        <input type="hidden" value="" id="currentParentGridpageNum"/>
        <input type="hidden" value="" id="currentChildGridpageNum"/>
        <input type="hidden"  id="itemObjDefaultValues"  value=""/>
        <input type="hidden" value="" id="DDWPageNationSize"/>
        <input type="hidden" value="" id="GSTINAddressData"/>
        <input type="hidden" id="nestedGridObjHidden"/>
        <input type="hidden" id="selectedGridObjHidden"/>
        <input type="hidden" id="basicDataObjHidden"/>
        <input type="hidden" id="currentPage" value="1"/>
        <!--<input type="hidden" id="selectedGridObjColumns"/>-->
        <input type="hidden" id="selectedGridActions"/>
        <input type="hidden" id="selectedGridObj"/>
        <input type="hidden" id="processClassAndMethod"/>
        <input type="hidden" id="barCodeColumnName"/>
        <input type="hidden" id="ssExportCount"/>
        <input type="hidden" id="columnInitParams"/>
        <input type="hidden" id="hiddenObj"/>
        <input type="hidden" id="submitDropdown"/>
        <input type="hidden" id="exportDropdown"/>
        <input type="hidden" id="basketName" value=""/>
        <input type="hidden" id="loaddeafaultlensicons" value="LENS_BODY_ICONS"/>
        <input type="hidden" id="consolidationDataSize" value=""/>
        <input type="hidden" id="dxpVisionFormDataHidden" value=""/>
        <input type="hidden" id="hiddenRowId" value=""/> 
        <input type="hidden" id="AIClickedProperty" value=""/> 
        <input type="hidden" id="previousCurrentTabId" value=""/> 
        <input type="hidden" id="extendedFullScreenViewFlag" value="N"/> 
        <input type="hidden" id="pprDomainType" value=""/> 
        <input type="hidden" id="fuzzySearchFlag" value=""/> 
        <input type="hidden" id="ddwClearId" value=""/> 
        <div id='importfiltergridcriteria' style="display: none"></div>
        <div id="dialog2"></div>
        <div id="logoutDailog"></div>
        <div id = "idsearchwraptempContainerdiv" style="display:inline-block; visibility:hidden;position:absolute; white-space: normal; word-wrap: break-word;"></div> 
        <div id="valuesgridpopup" class="searchDialogPos"></div> 
        <input type="hidden" id="rejectType" value="${sessionScope.ssRejectType}"/>
        <input type="hidden" id="rejectData" value />
        <input type="hidden" id="rejectReasonsObj" value />
        <input type="hidden" id="processWiserejectReasonsObj" value />
        <input type="hidden" id="headerWeatherFlag" value="${IDXP_HEADER_WEATHER_FLAG}" />
        <input type="hidden" id="headerCalenderFlag" value="${IDXP_HEADER_CALENDER_FLAG}" />
        <input type="hidden" id="headerFioriFlag" value="${IDXP_HEADER_FIORI_THEME_FLAG}" />
        <input type="hidden" id="headerNotificationFlag" value="${IDXP_HEADER_NOTIFICATION_FLAG}" />
        <input type="hidden" id="aiAgentEnableFlag" value="" />
        <input type="hidden" name="userName" id="loginUserDefaultDomain" value="${sessionScope.ssDomain}"/>


        <!--ms365-->
        <input type="hidden" name="activationStatus" id="activationStatus" value="${activationStatus}"/>
        <input type="hidden" name="activationDispMessage" id="activationDispMessage" value="${activationDispMessage}"/>
        <!--ms365-->
        <form action="" id="navigationUrlForm" method="POST">
            <c:if test="true">
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" /> 
            </c:if> 
        </form>
        <form id="exportConsolidationForm" method="post">
            <c:if test="true">
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" /> 
            </c:if>
            <input type="hidden" name="selectedRowData" id="selectedRowData" value=""/>
            <input type="hidden" name="exportGridId" id="exportConsolidationGridId" value=""/>


        </form>
        <form id="downloadData" action="" method="POST" target="_blank">
            <c:if test="true">
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" /> 
            </c:if> 
            <input type="hidden" name="jsonExpData" id="downloadDatajsonData"/>
            <input type="hidden" name="gridId" id="exportGridId">
            <input type="hidden" name="selectType" id="selectType">
            <input type="hidden" name="exportRange" id="exportRange">
            <input type="hidden" name="exportRangeCount" id="exportRangeCount">
            <input type="hidden" name="selectedRowData" id="selectedRowData" value=""/>
            <input type="hidden" name="exportGridId" id="exportConsolidationGridId" value=""/>
            <input type="hidden" name="colsArrayStr" id="colsArrayStr" value="">
        </form>

        <form id="downloadForm" action="" method="POST" target="_blank">
            <c:if test="true">
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" /> 
            </c:if> 
            <input type="hidden" name="templateId" id="templateId"/>
        </form>

        <form id="importData" action="" method="POST" target="_blank">
            <input type="hidden" name="jsonImportData" id="importDataHidden"/>
        </form>
        <form id="urlSubmitForm" method="post" action="viewDocuments" target="_blank">

        </form>
        <form id="registerForm" method="post" action="cloudRegistrationForm" target="_blank">
        </form>
        <form id="bulkDuplicateSubmitForm" action="viewSelectedRecordDuplicates" target="_blank" method="post">

            <input type="hidden" name="" value=""> 

            <input type="hidden" name="gridId" id="bulkDuplicateSubmitFormGridId" value="">
            <input type="hidden" name="duplicateGridId" id="bulkDuplicateSubmitFormDuplicateGridId" value="">
            <input type="hidden" name="sourceRecordNo" id="sourceRecordNo">
            <input type="hidden" name="duplicateRecordBasicData" id="duplicateRecordBasicData">
            <input type="hidden" name="gridInitParam" id="duplicateGridInitParam">
        </form>
        <form id="exportConsolidationForm" method="post" action="" target="_blank">
            <input type="hidden" name="selectedRowData" id="selectedRowData"/>
            <input type="hidden" name="exportGridId" id="exportDupGridId">  
        </form>
        <form id="dataProfilingForm" method="post" target="_blank">
            <input type="hidden" name="batchID" id="batchID" value=""/>
            <input type="hidden" name="columnArray" id="columnArray" value=""/> 

        </form>
        <script>
            async function main() {
            try {
            const tokenData = await updateCsrfToken();
            var quickLinksData = '';
            var chartFlag = '';
            var weatherFlag = '';
            var requestProcessNotAllowedStatuses = '';
            chartFlag = '${chartFlag}';
            weatherFlag = '${showWeatherFlag}';
            var ssRoleId = '${ssRoleId}';
            var sschartSaveFlag = '${sessionScope.sschartSaveFlag}';
            var chartSaveFlag = '${IDXP_CHART_SAVE_FLAG}';
            if (sschartSaveFlag != null && sschartSaveFlag != '' && sschartSaveFlag != undefined
                    && sschartSaveFlag == 'Y' && chartSaveFlag != null && chartSaveFlag != '' && chartSaveFlag != undefined
                    && chartSaveFlag == 'Y') {
            $("#smartChartSaveFlag").val(chartSaveFlag);
            } else{
            $("#smartChartSaveFlag").val("N");
            }


            requestProcessNotAllowedStatuses = '${requestProcessNotAllowedStatuses}';
            $("#requestProcessNotAllowedStatuses").val("");
            $("#requestProcessNotAllowedStatuses").val(requestProcessNotAllowedStatuses);
            if (weatherFlag != null && weatherFlag != '' && weatherFlag == 'Y') {
//                    getLocationDetails();
            }

            var userName = '${ssUsername}';
            if (chartFlag != null && chartFlag != '' && chartFlag == 'Y') {

            //                setTimeout(function () {
            getNewDefaultFormWithCardsCreation('CREATE');
            //                    domainBasedFormView('MATERIAL');
            if (userName != null && userName != '' && userName != undefined) {
            showLoader();
            $('.dxpSideMenuClass').show();
            getHomePageSelectBoxResults("HOME");
            //                        defaulthomepagecard();
            $('.dxpSideMenuClass').show();
            $('#hintImageID').show();
            stopLoader();
            }
            //                    $('.dxpSideMenuClass').show();
            //                }, 1000);

            //                getVisualizationchart(); 
            }

            $(document).ready(function () {
            $(".notoficationLogout").click(function () {
            closesettingPannel();
            });
            $("#idxpUserProfileSignoutId").on('click', function () {
            closesettingPannel();
            });
            $("#backgroundShadowDiv").click(function () {
            closesettingPannel();
            });
            $('#dxpMain').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', panels: [{size: 70}]});
            //              
            quickLinksData = '${quickLinksObj}';
            $("#autoHeaderSearch").val('');
            $("#dxp11MainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 5, panels: [{size: '50%'}]});
            $('#firstDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', panels: [{size: 75}]});
            $('#secondDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', panels: [{size: 270}]});
            $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', panels: [{size: '100%'}]});
            $("#searchDxpSplitter").jqxSplitter({
            width: '100%',
                    height: '100%',
                    theme: 'energyblue',
                    orientation: 'vertical',
                    splitBarSize: 0,
                    panels: [{size: 1100}]
            });
            //            $('#fourthDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 200}]});
            $(".searchAccordion").accordion({
            collapsible: true,
                    heightStyle: "content",
                    active: false,
                    autoHeight: false
            });
            var activationStatus = $("#activationStatus").val();
            if (activationStatus == 'Y') {
            var modalObj = {
            title: 'Message',
                    body: $("#activationDispMessage").val()
            };
            var buttonArray = [
            {
            text: 'Sign In',
                    isCloseButton: true,
                    click: function () {
                    $('#loginModel').modal('show');
                    }
            },
            {
            text: 'Ok',
                    isCloseButton: true,
            }
            ];
            modalObj['buttons'] = buttonArray;
            createModal("modalDailogDiv1", modalObj);
            }
            //ms365
            $(".visionMaterialGeneric .ui-state-default").hasClass("ui-state-active")
            {
            var ids = $('.visionMaterialGeneric .ui-state-default').eq(0).attr('id');
            }
            $('.visionMaterialGeneric .ui-state-default').bind('mouseover mouseleave click', function (event) {
            var getdatas = this.id;
            var tabsids = $('.visionMaterialGeneric .ui-state-default').map(function () {
            return $(this).attr('id');
            });
            var activestate = $("#" + getdatas).hasClass("ui-state-active");
            var tabidscount = tabsids.length;
            if (event.type == 'click') {
            var tabasctiveids = $('.visionMaterialGeneric .ui-state-active').map(function () {
            return $(this).attr('id');
            });
            var tabasctivecount = tabasctiveids.length;
            var arrayvalues = [];
            for (var j = 0; j <= tabidscount - 1; j++)
            {
            for (var k = 0; k <= tabasctivecount - 1; k++)
            {

            if (tabasctiveids[k] == tabsids[j])
            {

            iconsWhite(tabasctiveids[k]);
            } else
            {
            arrayvalues[j] = tabsids[j];
            for (var i = 0; i <= arrayvalues.length; i++)
            {
            if (arrayvalues[i] == tabsids[j])
            {
            iconsWhite(tabasctiveids[k]);
            } else
            {
            iconsBlue(tabsids[j]);
            }
            }
            }


            }

            }
            } else if (event.type == 'mouseover')
            {
            iconsWhite(getdatas);
            } else if (event.type == 'mouseleave')
            {


            if (activestate !== true)
            {

            iconsBlue(getdatas);
            } else
            {
            iconsWhite(getdatas);
            }
            }

            });
            $('.expandAll').click(function () {

            //                                        var count = $("#accdiv").find('h3').length;
            //                                        var className = $("h3").attr("class");
            var userIds = $('.ui-accordion-header').map(function () {
            return $(this).data('onclick');
            }).get();
            for (var i = 0; i < userIds.length; i++)
            {
            eval(userIds[i]);
            }

            $('.ui-accordion-header').removeClass('ui-corner-all').addClass('ui-accordion-header-active ui-state-active ui-corner-top').attr({
            'aria-selected': 'true',
                    'tabindex': '0'
            });
            $('.ui-accordion-header-icon').removeClass(icons.header).addClass(icons.headerSelected);
            $('.ui-accordion-content').addClass('ui-accordion-content-active').attr({
            'aria-expanded': 'true',
                    'aria-hidden': 'false'
            }).show();
            $(this).attr("disabled", "disabled");
            $('.collapseAll').removeAttr("disabled");
            $(".ui-accordion-header").addClass("ui-state-disabled");
            });
            $('.collapseAll').click(function () {
            $('.ui-accordion-header').removeClass('ui-accordion-header-active ui-state-active ui-corner-top').addClass('ui-corner-all').attr({
            'aria-selected': 'false',
                    'tabindex': '-1'
            });
            $('.ui-accordion-header-icon').removeClass(icons.headerSelected).addClass(icons.header);
            $('.ui-accordion-content').removeClass('ui-accordion-content-active').attr({
            'aria-expanded': 'false',
                    'aria-hidden': 'true'
            }).hide();
            $(this).attr("disabled", "disabled");
            $('.expandAll').removeAttr("disabled");
            $(".ui-accordion-header").removeClass("ui-state-disabled");
            });
            $('.ui-accordion-header').click(function () {
            $('.expandAll').removeAttr("disabled");
            $('.collapseAll').removeAttr("disabled");
            });
            });
//            $(".voiceNavigator,.weatherIcon,.calendarIcon,.notificationIcon,.settingIcon,.helpIcon,.userProfileIcon,.menuListIcon,.slicerImage,.introCloseAndOn").mouseenter(function (event) {
//            let imgsrc = $(this).find("img").attr("src");
//            let header = $(this).find("span").text();
//            hoverCard(imgsrc, header, this);
//            $(this).popover('show');
//            $(".popover-header").hide();
//            }).mouseout(function () {
//            $(".showCustomDiscriptionPopUp").remove();
//            });
            var ssRejectCommentObj = '${sessionScope.ssRejectCommentObj}';
            $(document).ready(function () {
            try {
            if (ssRejectCommentObj != null) {
            if (typeof ssRejectCommentObj === "object") {
            $("#rejectData").val(JSON.stringify(ssRejectCommentObj));
            } else if (typeof ssRejectCommentObj === "string") {
            $("#rejectData").val(ssRejectCommentObj);
            }
            }
            } catch (e) {
            }
            });
//            window.onload = setTimeout(function () {
//            $("#filterRowButton .outerWidthcol").addClass("animate-menu");
//            }, 2000)
//
//                    setTimeout(function () {
//                    $('#filterRowButton  .outerWidthcol').removeClass('animate-menu')
//                    }, 5000);
            } catch (error) {
            console.error('Error executing main function:', error);
            }
            }
            main();
// let userLogin = localStorage['userName'];
//                let savedTheme = localStorage.getItem(userLogin + "_headerTheme");
//                if (savedTheme) {
//                applyTheme(null, null, null, savedTheme);
//                }
            $(document).ready(function () {
            try {
            let uisaveddisplaymode = '';
            let uisavedtheme = '';
            let uisavedfonttype = '';
            let uisavedfontsize = '';
            uisaveddisplaymode = '${UISAVEDDISPLAYMODE}';
            uisavedtheme = '${UISAVEDTHEME}';
            uisavedfonttype = '${UISAVEDFONTTYPE}';
            uisavedfontsize = '${UISAVEDFONTSIZE}';
            applyUsersSavedThemes(uisaveddisplaymode, uisavedtheme, uisavedfonttype, uisavedfontsize);
            } catch (e) {
            }

            });
        </script>           

        <%@include file="chatBot.jsp" %> 
        <div class="modal fade aidiscovermorePopup" id="discovermoreAiPopup" role="dialog">
            <div class="modal-dialog modal-md">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">AI Lens</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
        <script>



            // Add active class to the current button (highlight it)



//                $(document).ready(function () {
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



            $('.aigridcolumn').each(function () {
            var hue = 'rgb(' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ')';
            $(this).css("background-color", hue);
            });
            filterSelection("all");
            $("#aitabscontainer").tabs();
            });

        </script>

    </body>
</html>

