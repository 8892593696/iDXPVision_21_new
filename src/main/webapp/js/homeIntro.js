/**
 * This File Contains Home Intro Tour for the new User.
 
   Created on 30-11-2022
 */
 
 //This function is to trigger intro guide on Login page
function loginPageGuide(){
var intro1 = introJs();
	intro1.setOptions({
	   steps:[
		   {
			   title:'Integral',
			   intro:'Hello,Welcome to Integral'
		   },
		   {
			   title:'Login Page',
			   element:'#mainWrapper',
			   intro:'This is Login Form',
			   position:'left'
		   },
		   {
			   title:'Username',
			   element:'#rsUsername',
			   intro:'You can type your usernam here',
			   position:'top'
		   },	
	       {
			   title:'Next',
			   element:'#showPassword',
			   intro:'click on Next button to get to the password feild'
			   
		   },
		   
	   ],
	  nextLabel: 'Next',
	   prevLabel: 'Back',
	    tooltipClass:'loginTooltip',
	  
   });
    intro1.start().oncomplete(function(){
	   intro1.exit();
   });
}
// Ends here



// This function is to trigger Intro on the home page
//function homePageGuide() {
//    $.ajax({
//        type: "POST",
//        dataType: 'json',
//        traditional: true,
//        url: 'getHelp',
//        cache: false,
//        success: function (response) {
//            stopLoader();
//            if (response != null && response != undefined && response != '') {
//           var step = response['steps'];
//                const intro2 = introJs();
//                if ($('#hintImageID').hasClass('disableClickAction')) {
//                    console.log("stoppp")
//                    return;
//                }
//                intro2.setOptions({
//                    steps: step,
//                    nextLabel: 'Next',
//                    prevLabel: 'Back',
//                    tooltipClass: 'customTooltip'
//                });
//                intro2.start().oncomplete(function() {
//                    intro2.exit();
//                });
//               
//            }
//             
//        }
//    });
//
//}
 //Ends here
 
 //This function is to trigger intro for Side bar menu in home page
//function sideBarMenuHomeGuide(){
//	const intro11 = introJs();
//	intro11.setOptions({
//		steps:[
//		
//		],
//		 nextLabel: 'Next',
//	     prevLabel: 'Back',
//		 tooltipClass:'sideBarTooltip',
//		
//	})
//	intro11.start().oncomplete(function(){
//		intro11.exit();
//	})

 
 //This function is to trigger intro on  Data Analytics Home page
 function dxpAnalyticsGuideHome(){
	 const intro3 = introJs();
	 intro3.refresh();
	 intro3.setOptions({
		 steps:[
//			{
//				title:'<img src="images/Data-Integration.svg" width="300px"/><span class="toggleIconsDA">You have to be responsible for the energy you’re putting out into the world.</span>',
//				element:'#leftFileUploadMainDivwrapperID',
//				intro:'description goes here',
//				
//			},
			{
				title:'<img src="images/Data-Analytics.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				element:'#visualizationMainDivwrapperID',
				intro:'Description here'
			},
//			 {
//				title:'<img src="images/Data-Integration-toggle.svg" width="300px"/><span class="toggleIconsDA">You have to be responsible for the energy you’re putting out into the world.</span>',
//				element:'#columnsToggleIcon',
//				intro:'click on the icon to add connections'
//			},
			{
				title:'<img src="images/Data-Analytics-toggle.svg" width="300px"/><span class="toggleIconsDA">You have to be responsible for the energy you’re putting out into the world.</span>',
				element:'#visualToggleIcon',
				intro:'click on the icon to add charts'
			},
			
			 
		 ],
	   nextLabel: 'Next',
	   prevLabel: 'Back',
	   tooltipClass:'customTooltip',
		 
	 });
//	 intro3.onbeforechange(function(){
//		 if(this._currentStep === 2){
//			 console.log('ToggleDivSuccess')
//    		 toggleIntroToggleDA();
//			 return false;
//		 }
//	 });
	 
	intro3.start().oncomplete(function(){
	   intro3.exit();
	   });
	  
 }
 //Ends here
 
// function toggleIntroToggleDA(){
//	 const intro12 = introJs();
//	 intro12.setOptions({
//		 steps:[
//			
//		 ],
//		   nextLabel: 'Next',
//	        prevLabel: 'Back',',
//		    tooltipClass:'toggleToolTips'
//	 });
//	 intro12.start().oncomplete(function(){
//		 intro12.exit();
//	 })
// }
 
 
 
 // This function is to trigger intro for the left Data Integration column on Data Analytics home page
 function dataIntegrationGuide(){
	 const intro4 = introJs();
	 intro4.setOptions({
		 steps:[
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 intro:'Add jobs here'
			 },
			
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'#visualConnectionLi',
				 intro:'click on the icon to add connections'
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'#treeDxpConnectionLi',
				 intro:'Click here to add new connection'
			 },		
             {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'#panelContentpanelVisualizationSources',
				 intro:'You can find, Files,Database,Online Services,ERP'
			 }

		 ],
		nextLabel: 'Next',
	     prevLabel: 'Back',
		 tooltipClass:'customTooltip',
	 });
	 intro4.start().oncomplete(function(){
		 intro4.exit();
	 });
 }
 //Ends here
 
 // This function is to trigger intro for the left Data Analytics column on Data Analytics home page
 function dataAnalyticGuide(){
	 const intro5 = introJs();
	  intro5.setOptions({
		  steps:[
			  {
				  title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				  element:'Here You can add charts',
			  },
			  {
				  title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				  element:'#Visualization',
				  intro:'You can customize your charts here',
				  position:'right'
			  }
		  ],
		 nextLabel: 'Next',
	      prevLabel: 'Back',
		  tooltipClass:'customTooltip',
	  });
	  
	   intro5.start().oncomplete(function(){
		 intro5.exit();
	 });
	  
 }
//Ends here


//This function is to trigger intro for Data Inegration home page
function dataIntegrationHomeGuide(){
	const intro6 = introJs();
	intro6.setOptions({
		steps:[
			{
				title:'<img src="images/Data-integration-Home-1.png" width="300px"/><span class="imageText">You have to be responsible for the energy you’re putting out into the world.</span>',
				intro:'Welcome to Data Integration',
			},
			{
				title:'<img src="images/Connections-Icons.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				element:'.showEtlIcons',
				intro:'Description',
			},
			{
				title:'<img src="images/new-connections.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				element:'#newConnections',
				intro:'Add new connections'
			},
			{
				title:'<img src="images/saved-connection.svg" width="300px"/><span class="toggleIconsDA">You have to be responsible for the energy you’re putting out into the world.</span>',
				element:'#availableConnections',
				intro:'Check for available connections'
			},
			{
				title:'<img src="images/Database-jobs.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				element:'#availableJobs',
				intro:'Check for available jobs'
			},
			{
				title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				element:'#schemaObjects',
				intro:'schema objects',
			},
			{
				title:'<img src="images/Files-DataBase-DI.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				element:'#connectionsTabs',
				intro:'You can find all the sources here',
			},
			{
				title:'<img src="images/Settings-icon-DI.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				element:'#feedListContainer',
				intro:'You can find all the settings related to ETL',
			},
		],
		nextLabel: 'Next',
	    prevLabel: 'Back',
		tooltipClass:'customTooltip',
	});
//	intro6.onbeforechange(function(){
//		if(this._currentStep === 1){
//			console.log("ETL icons")
//			iconsETL();
//			return false;
//		}
//	})
	intro6.start().oncomplete(function(){
		intro6.exit();
	});
}
//Ends here

//function iconsETL(){
//	const intro13 = introJs();
//	intro13.setOptions({
//		steps:[
//			//etl icons
//			
//			
//		],
//		nextLabel: '<img src="images/introjs-arrow-next.svg" width="20px"/>',
//	    prevLabel: 'Back',',
//		tooltipClass:'iconETLTooltip',
//	});
//	intro13.onbeforechange(function(){
//		if(this._currentStep === 1){
//			console.log("connection")
//			connectionsDI();
//			return false;
//		}
//	})
//	intro13.start().oncomplete(function(){
//		intro13.exit();
//	});
//}

//function connectionsDI(){
//	const intro14 = introJs();
//	intro14.setOptions({
//		steps:[
//			
//		],
//		nextLabel: '<img src="images/introjs-arrow-next.svg" width="20px"/>',
//	    prevLabel: 'Back',',
//		tooltipClass:'connectionDITooltip',
//	});
//	intro14.onbeforechange(function(){
//		if(this._currentStep === 4){
//			fileAndDataDI();
//			return false;
//		}
//	})
//	intro14.start().oncomplete(function(){
//		intro14.exit();
//	});
//}

//function fileAndDataDI(){
//	const intro15 = introJs();
//	intro15.setOptions({
//		steps:[
//			
//		],
//		nextLabel: '<img src="images/introjs-arrow-next.svg" width="20px"/>',
//	    prevLabel: 'Back',',
//		tooltipClass:'fileAndDataDITooltip',
//	});
//	intro15.onbeforechange(function(){
//		if(this._currentStep === 1){
//			settingDI();
//			return false;
//		}
//	})
//	
//	intro15.start().oncomplete(function(){
//		intro15.exit();
//	});
//}
//function settingDI(){
//	const intro16 = introJs();
//	intro16.setOptions({
//		steps:[
//			
//		],
//		nextLabel: '<img src="images/introjs-arrow-next.svg" width="20px"/>',
//	    prevLabel: 'Back',',
//		tooltipClass:' settingDITooltip',
//	});
//	
//	intro16.start().oncomplete(function(){
//		intro16.exit();
//	});
//}


//This function is to trigger intro for Transform Features home page
function transformFeaturesGuideHome(){
	const intro7 = introJs();
	intro7.setOptions({
		steps:[
			{
				title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				intro:'Welcome to Transform Features',
			},
			{
				title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				element:'#allFeaturesMenuListM',
				intro:'',
				position:'right'
			},
		],
		nextLabel: '<img src="images/introjs-arrow-next.svg" width="20px"/>',
	    prevLabel: 'Back',
		tooltipClass:'customTooltip',
	});
	intro7.start().oncomplete(function(){
		intro7.exit();
	})
}

function analyticsFeaturesGuideHome(){
	const intro8 = introJs();
	intro8.setOptions({
		steps:[
			{
				title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				intro:'Welcome to Analytics'
			},
			{
				title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				element:'#allFeaturesMenuListM',
				intro:'',
				position:'right'
			},
		],
		nextLabel: 'Next',
	     prevLabel: 'Back',
		tooltipClass:'customTooltip',
	});
	intro8.start().oncomplete(function(){
		intro8.exit();
});

}

//This function is to trigger intro for AI  home page
function aiFeatureGuideHome(){
	const intro9 = introJs();
	intro9.setOptions({
		steps:[
			{
				title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				intro:'Welcome to AI'
			},
			{
				title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				element:'#allFeaturesMenuListM',
				intro:'',
				position:'right'
			},
		],
		nextLabel: 'Next',
	     prevLabel: 'Back',
		tooltipClass:'customTooltip',
	});
	intro9.start().oncomplete(function(){
		intro9.exit();
});

}
//This function is to trigger intro for DS knowlegde home page
function dsKnowledgeHomeGuide(){
 const	intro10 = introJs();
    intro10.setOptions({
		steps:[
			{
				title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				intro:'Welcome to Ds'
			},
			{
				title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				element:'#allFeaturesMenuListM',
				intro:'',
				position:'right'
			},
		],
		nextLabel: 'Next',
	     prevLabel: 'Back',
		tooltipClass:'customTooltip',
	});
	intro10.start().oncomplete(function(){
		intro10.exit();
	});
}
 
 function  	searchToggleGuide(){
	 const intro18 = introJs();
	 intro18.setOptions({
		 steps:[
			 {
				 title:'<img src="images/search-left-side.svg" width="300px"/><span class="languageLeftSide">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'#SelectedValue',
				 intro:'select the feild you wanna search',
			 },
			 {
				 title:'<img src="images/search-bar.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'#SearchResult',
				 intro:'search here',
			 },
			 {
				 title:'<img src="images/settings-advance-search.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'#settingheaderImage',
				 intro:'advanced search',
			 },
			 {
				 title:'<img src="images/search-bar-language.svg" width="300px"/><span class="languageLeftSide">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.languageSelectionBox',
				 intro:'select the language you prefer',
			 },
		 ],
		 nextLabel: 'Next',
	     prevLabel: 'Back',
		tooltipClass:'customTooltip',
	});
	
	intro18.start().oncomplete(function(){
		intro18.exit();
	});
 }
function calenderGuide(){
	const intro19 =  introJs();
	intro19.setOptions({
		steps:[
			{
				title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
			    intro:'Calender',
			    
			},
			{
				title:'Calender',
				intro:'description',
				element:'#settingPannel'
			}
			
		],
		nextLabel: 'Next',
	     prevLabel: 'Back',
		tooltipClass:'customTooltip',
		
	})
	intro19.start();
}
 function settingsGuide(){
	 const intro20 =  introJs();
	 intro20.setOptions({
		 steps:[
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 intro:'Add settings here'
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.settingPannel',
				 intro:'You can find all the settings here',
				 position:'left',
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.fontChangeIcon ',
				 intro:' You can change font her',
				 position:'left',
			 },
			  {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.fontSizeIcon ',
				 intro:'You can change font size here',
				 position:'left',
			 },
			  {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.themeChangeIcon',
				 intro:'You can change theme here',
				 position:'left',
			 },
			  {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.extendedViewIcon',
				 intro:'You can change the screen size to extended view',
				 position:'left',
			 },
			  {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.languageChangeIcon',
				 intro:'You can change language here',
				 position:'left',
			 },
			  {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.organizationIcon',
				 intro:'View you organizations here',
				 position:'left',
			 },
			  {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.feedbackIcon',
				 intro:'Give us a feedback!',
				 position:'left',
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.ThemesIcon',
				 intro:'Change themes here',
				 position:'left',
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.contactPreferencesIcon',
				 intro:'Choose your contact prefrences',
				 position:'left',
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.passworIcon',
				 intro:'You can change your passwords here',
				 position:'left',
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.aboutUsIcon',
				 intro:'About us',
				 position:'left',
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.OtherIcon',
				 intro:'Others',
				 position:'left',
			 },
		 ],
		 nextLabel: 'Next',
	     prevLabel: 'Back',
		tooltipClass:'customTooltip',
		 
	 })
	 intro20.start();
 }
 
 function helpGuide(){
	 const intro21 = introJs();
	 intro21.setOptions({
		 steps:[
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 intro:'Help',
				 
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'#settingPannel',
				 intro:'Help',
				 position:'left',
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'#chartIconID',
				 intro:'Chat with us?',
				 position:'left',
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'#helpDocumentID',
				 intro:'Help with some document',
				 position:'left',
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'#helpvideoID',
				 intro:'Hlep with video',
				 position:'left',
			 },
			 {
				 intro:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'#helpGifID',
				 intro:'Help with a gif',
				 position:'left',
			 }
		 ],
		nextLabel: 'Next',
	     prevLabel: 'Back',
		 tooltipClass:'customTooltip',
	 })
	 intro21.start();
 }
 
 function userProfileGuide(){
	 const intro22 = introJs();
	 intro22.setOptions({
		 steps:[
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 intro:'User Profile',
				 position:'left',
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.shoppingIcon',
				 intro:'Your cart',
				 position:'left',
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.subscriptionsClass',
				 intro:'Your subscription',
				 position:'left',
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.TransactionClass',
				 intro:'Your transactions',
				 position:'left',
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.walletClass',
				 intro:'Your wallet',
				 position:'left',
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.workSpaceClass',
				 intro:'Your workspace',
				 position:'left',
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.WorkspaceAnalyticsClass',
				 intro:'Your workspace analytics',
				 position:'left',
			 },
			 {
				 title:'<img src="images/.svg" width="300px"/><span class="imageTextBottom">You have to be responsible for the energy you’re putting out into the world.</span>',
				 element:'.logoutIcon ',
				 intro:'Logout',
				 position:'left',
			 },
		 ],
		 nextLabel: 'Next',
	     prevLabel: 'Back',
		 tooltipClass:'customTooltip',
		 
	 })
	 intro22.start();
 }
 function homePageGuide2() {
    const intro2 = introJs();
    intro2.setOptions({
        steps: [
            {
                title: '<img src="images/PilogCloudRedBlue.gif" width="80px"/><span class="imageText">iVisionDXP</span>',
                intro: '<div class="headerText"><h6> Welcome to iVisionDXP</h6></div> <span class="homeText">Sample text to know how the text would appear to add css</span>',
            },
            {
                title: '<img src="images/PiLogDots.png" width="30px"/><span class="imageText">Home Page Side-Bar</span>',
                element: '#show-sidebar',
                intro: '<div><h6>Actionable Insights by AI</h6></div> <span class="imageText">Click to show or hide side menus</span>',
                position: 'right'
            },
            {
                title: '<img src="images/Home-Iocn.svg" width="30px"/><span class="imageText">Sidebar Menu</span>',
                element: '.sidebar-content',
                intro: '<div><h6>DS Knowlegde Base</h6></div> <span class="imageText">check the side bar menus</span>',
                position: 'right'
            },
             {
                title: '<img src="images/threedotsBlue.png" width="30px"/><span class="imageText">Second Side-Menu</span>',
                element: '.dxpTabsMenus',
                intro: '<div><h6>Home</h6></div> <span class="homeText">Here you can see all the cards</span>',
            },
           
            {
                title: '<img src="images/search_blue1.png" width="40px"/><span class="imageText">Search here</span>',
                element: '.searchMainWrap',
                intro: '<div><h6>Analytics Feature</h6></div> <span class="imageText">Search with keyword</span>',
                position: 'right'
            },
            {
                title: '<img src="images/iDXPUI5Settings.svg" width="40px"/><span class="imageText">Search Setting</span>',
                element: '.searchSettingIcon',
                intro: '<div><h6>Trending News</h6></div> <span class="imageText">Trending hashtags are shown here</span>',
                position: 'right'
            },
            {
                title: '<img src="images/font.png" width="40px"/><span class="imageText">Select Language</span>',
                element: '#DXPlLanguageSelectionId',
                intro: '<div><h6>Trending</h6></div> <span class="homeText">Show data based on keyword, hashtag and etc.</span>',
                position: 'left'
            },
             {
                title: '<img src="images/dxpmenuList.png" width="40px"/><span class="imageText">Menu List</span>',
                element: '.menuListIcon',
                intro: '<div><h6>Transform Features</h6></div> <span class="homeText">Click to view full screen</span>',
                position: 'right'
            },
            {
                title: '<img src="images/Notifications.png" width="40px"/><span class="imageText">Notification</span>',
                element: '.notificationIcon',
                intro: '<div><h6>Notification</h6></div> <span class="homeText">Show analytics data</span>',
                position: 'left'
            },
            {
                title: '<img src="images/calendarBlue.png" width="45px"/><span class="imageText">Calendar</span>',
                element: '.calendarIcon',
                intro: '<div><h6>Notification</h6></div> <span class="homeText">Calendar events</span>',
                position: 'left'
            },
            {
                title: '<img src="images/iDXPUI5Settings.svg" width="40px"/><span class="imageText">Setting</span>',
                element: '.settingIcon',
                intro: '<div><h6>Notification</h6></div> <span class="homeText">Show all user settings</span>',
                position: 'left'
            },
            {
                title: '<img src="images/Help-Icon.svg" width="40px"/><span class="imageText">help</span>',
                element: '.helpIcon',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
            },

            {
                title: '<img src="images/Profile_Icon.svg" width="40px"/><span class="imageText">Profile</span>',
                element: '.userProfileIcon',
                intro: '<div><h6>Profile</h6></div> <span class="homeText">Click to view my basket and log out options.</span>',
                position: 'left'
            },
            
            
            //  modify
            
            {
                title: '<img src="images/Left-Arrow.png" width="40px"/><span class="imageText">Left Scroll</span>',
                element: '.iconMenuNavPrev',
                intro: '<div><h6>Actionable Insights by AI</h6></div> <span class="imageText">Click to show or hide side menus</span>',
                position: 'right'
            },
            {
                title: '<img src="images/Right-Arrow.png" width="40px"/><span class="imageText">Right Scroll</span>',
                element: '.iconMenuNavNext',
                intro: '<div><h6>Actionable Insights by AI</h6></div> <span class="imageText">Click to show or hide side menus</span>',
                position: 'right'
            },
            {
                title: '<img src="images/MaterialMaster.png" width="40px"/><span class="imageText">Product</span>',
                element: '#menutabIdPRODUCT',
                intro: '<div><h6>DS Knowlegde Base</h6></div> <span class="imageText">check the side bar menus</span>',
                position: 'right'
            },
            {
                title: '<img src="images/ServiceMaster.png" width="40px"/><span class="imageText">Service</span>',
                element: '#menutabIdSERVICE',
                intro: '<div><h6>Home</h6></div> <span class="homeText">Here you can see all the cards</span>',
            },
             {
                title: '<img src="images/BusinessPartner.png" width="40px"/><span class="imageText">Business Partner</span>',
                element: '#menutabIdBUSINESS_PARTNER',
                intro: '<div><h6>DS Knowlegde Base</h6></div> <span class="imageText">check the side bar menus</span>',
                position: 'right'
            },
             
            {
                title: '<img src="images/VendorMaster.png" width="40px"/><span class="imageText">Vendor</span>',
                element: '#menutabIdVENDOR',
                intro: '<div><h6>Analytics Feature</h6></div> <span class="imageText">Search with keyword</span>',
                position: 'right'
            },
            {
                title: '<img src="images/CustomerMaster.png" width="40px"/><span class="imageText">Customer</span>',
                element: '#menutabIdCUSTOMER',
                intro: '<div><h6>Trending News</h6></div> <span class="imageText">Trending hashtags are shown here</span>',
                position: 'right'
            },
            {
                title: '<img src="images/up_arrow_icon.svg" width="40px"/><span class="imageText">Shrink Button</span>',
                element: '#expendInOutDivID',
                intro: '<div><h6>Trending News</h6></div> <span class="imageText">Trending hashtags are shown here</span>',
                position: 'right'
            },
            {
                title: '<img src="images/AssetMaster.png" width="40px"/><span class="imageText">Asset</span>',
                element: '#menutabIdASSET',
                intro: '<div><h6>Trending</h6></div> <span class="homeText">Show data based on keyword, hashtag and etc.</span>',
                position: 'left'
            },
            
            {
                title: '<img src="images/multiCard.PNG" width="40px"/><span class="imageText">Home Page card</span>',
                element: '.defaultShowCards',
                intro: '<div><h6>Notification</h6></div> <span class="homeText">Calendar events</span>',
                position: 'left'
            },
            {
                title: '<img src="images/iDXPUI5AnalyticsShowCard.svg" width="40px"/><span class="imageText">Analytics</span>',
                element: '#defaultHomeCardsChartsData1',
                intro: '<div><h6>Notification</h6></div> <span class="homeText">Show all user settings</span>',
                position: 'left'
            },
            {
                title: '<img src="images/pindxp.png" width="40px"/><span class="imageText">Pin</span>',
                element: '#StartFlipID',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
            },
             {
                title: '<img src="images/SingleCard.PNG" width="40px"/><span class="imageText">Card</span>',
                element: '#showDefulthomepageCardID',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
            },

            
        ],
        nextLabel: 'Next',
        prevLabel: 'Back',
        tooltipClass: 'customTooltip'
    });
    intro2.start().oncomplete(function () { 
        intro2.exit();
    });
};
function productPageGuideIntro() { 
    const	intro3 = introJs();
    intro3.setOptions({
        steps: [
            {
                title: '<img src="images/iDXPChangeRequest.gif" width="40px"/><span class="imageText">Side-bar Content Menu</span>',
                element: '.domain_sidebar_menu',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/gridData.PNG" width="45px"/><span class="imageText">Grid-Table-Data</span>',
                element: '#showdomainBasedCards',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/gridData.PNG" width="45px"/><span class="imageText">Grid Select Box</span>',
                element: '.visionButtonTemplate',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
        ],
        nextLabel: 'Next',
        prevLabel: 'Back',
        tooltipClass: 'customTooltip',
    });
    intro3.start().oncomplete(function () {
        intro3.exit();
    });
}
function productInnerPageGuideIntro() { 
    const	intro4 = introJs();
    intro4.setOptions({
        steps: [
            {
                title: '<img src="images/iDXPChangeRequest.gif" width="40px"/><span class="imageText">Side-bar Content Menu</span>',
                element: '.domain_sidebar_menu',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/threedots.png" width="40px"/><span class="imageText">Grid-Splitter</span>',
                element: '.searchIconsGridSplitterList',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/pdficon.png" width="40px"/><span class="imageText">Click To See PDF Form</span>',
                element: '.dxpPdfFormShowClass',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/down_arrow_icon.svg" width="40px"/><span class="imageText">Select Button</span>',
                element: '#formValidButton',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/MatchedRecords.png" width="40px"/><span class="imageText">Click To Show Count-Data</span>',
                element: '.dxpMatchedCountShowClass',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            
            {
                title: '<img src="images/gridData.PNG" width="45px"/><span class="imageText">Generic Registration Form</span>',
                element: '#registration',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/Save-Icon.svg" width="40px"/><span class="imageText">Click To Save</span>',
                element: '#Save',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/Duplicate-Icon.svg" width="40px"/><span class="imageText">Duplicate Check</span>',
                element: '#Duplicate_Check',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/delete_icon.svg" width="45px"/><span class="imageText">Delete</span>',
                element: '#Delete',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/Submit-Icon.svg" width="40px"/><span class="imageText">Submit</span>',
                element: '#Submit',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/Copy-Icon.svg" width="40px"/><span class="imageText">Copy</span>',
                element: '#Copy',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/iDXPUI5AnalyticsShowCard.svg" width="40px"/><span class="imageText">Infographics</span>',
                element: '#Infographics',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/up_arrow_icon.svg" width="40px"/><span class="imageText">Collaps & Extend</span>',
                element: '#extended',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/GridData.PNG" width="40px"/><span class="imageText">Accordians</span>',
                element: '#accordion',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/visit-card.png" width="40px"/><span class="imageText">Char Accordian</span>',
                element: '.charAccordianbtn',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
        ],
        nextLabel: 'Next',
        prevLabel: 'Back',
        tooltipClass: 'customTooltip',
    });
    intro4.start().oncomplete(function () {
        intro4.exit();
    });
} 
function dxpAnalyticsPageGuide() {
    const intro5 = introJs();
    intro5.refresh();
    intro5.setOptions({
       steps: [
            {
                title: '<img src="images/Right-Arrow.png" width="40px"/><span class="imageText">Upload File</span>',
                element: '#leftFileUploadMainDivwrapperID',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/Right-Arrow.png" width="40px"/><span class="imageText">Visualizations</span>',
                element: '#visualizationMainDivwrapperID',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/Import_Icon.svg" width="40px"/><span class="imageText">Import</span>',
                element: '.emportclasss',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/Save-Icon.svg" width="40px"/><span class="imageText">Save</span>',
                element: '.Saveclasss',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/Analysis_GP-01.svg" width="40px"/><span class="imageText">Analysis</span>',
                element: '.Analysisclasss ',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
            {
                title: '<img src="images/delete_icon.svg" width="40px"/><span class="imageText">Format</span>',
                element: '.Formateclasss ',
                intro: '<div><h6>Select</h6></div> <span class="homeText">Here you can select the type of card you want to see</span>',
                position: 'right'
            },
        ],
        nextLabel: 'Next',
        prevLabel: 'Back',
        tooltipClass: 'customTooltip', 

    });
    intro5.start().oncomplete(function () {
        intro5.exit();
    });

}
function homePageGuide() {
    var username=$("#ssUsername").val();
    if(username=="AJAY_CONFIG"){
       var listId="PaymentClass";
    }
    else{
//        homePageGuide2();
//step5FormIntro();
        return;       
    }       
    $.ajax({
        type: "POST",
        dataType: 'json',
        traditional: true,
        url: 'getHelp',
        cache: false,
        data: {
            'listId': listId,
            
        },
        success: function (response) {
            stopLoader();
            if (response != null && response != undefined && response != '') {
           var step = response['steps'];
                const intro2 = introJs();
                if ($('#hintImageID').hasClass('disableClickAction')) {
                    console.log("stoppp")
                    return;
                }
                intro2.setOptions({
                    steps: step,
                    nextLabel: 'Next',
                    prevLabel: 'Back',
                    tooltipClass: 'customTooltip'
                });
                intro2.start().oncomplete(function() {
                    intro2.exit();
                });
               
            }
             
        }
    });
    
}
function setIntroFn(tab, role) {
    let flag=localStorage.getItem('defIntro');
    if(flag=='Y'){
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: 'getIntroObj',
        data: {
            tab:tab,
            role:role
        },
        traditional: true,
        cache: false,
        success: function (data, textStatus, jqXHR) {
            if (!($.isEmptyObject(data))) {
                setIntroObjData(data);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
    }
}

function setIntroObjData(data) {
    var step = data['steps'];
    const intro2 = introJs();
    if ($('#hintImageID').hasClass('disableClickAction')) {
        console.log('stoppp')
        return;
    }
    intro2.setOptions({
        steps: step,
        nextLabel: 'Next',
        prevLabel: 'Back',
        tooltipClass: 'customTooltip'
    });
    intro2.onbeforechange(function(){
        if(this._currentStep > "2"){
          gettabrightscroll('activeTabInnerBtnDivId', 10);
        }
           
    });
    intro2.start().oncomplete(function () {
        intro2.exit();
    });
}
function step5FormIntro(){
      const intro2 = introJs();
    intro2.setOptions({
        steps: [
            {
                title: '<img src="images/PiLog_Logo_New.png" width="80px"/><span class="imageText">iVisionDXP</span>',
                intro: '<div class="headerText"><h6> Welcome to PiLog Data Governance solution</h6></div><span class="homeText">Your gate way to data quality, I will Guide you through Navigation</span>',
            },
            {
                title: '<img src="images/PiLogDots.png" width="30px"/><span class="imageText">Home Page Side-Bar</span>',
                element: '#show-sidebar',
                intro: '<div><h6>Home page SideBar</h6></div> <span class="imageText">Click to show or hide side menus</span>',
                position: 'right'
            },
            {
                title: '<img src="images/Home-Iocn.svg" width="30px"/><span class="imageText">Home and Side Menu</span>',
                element: '.sidebar-content',
                intro: '<div><h6>Home</h6></div> <span class="imageText"></span>',
                position: 'right'
            },
             {
                title: '<img src="images/threedotsBlue.png" width="30px"/><span class="imageText">Floating Menu</span>',
                element: '.dxpTabsMenus',
                intro: '<div><h6>Floating Menu</h6></div> <span class="homeText">Check Configuration Work Bench Services</span>',
            },
             {
                title: '<img src="images/threedotsBlue.png" width="30px"/><span class="imageText">Three Dots</span>',
                element: '.firstSplitterDotsClass ',
                intro: '<div><h6>Three Dots</h6></div> <span class="homeText">Click to show or hide Floating Menu and Tabs</span>',
            },
             {
                title: '<img src="images/search_blue.png" width="30px"/><span class="imageText">Search In Work Bench Services</span>',
                element: '.sidebarmenusearch ',
                intro: '<div><h6>Search In Work Bench Services</h6></div> <span class="homeText">Click to Search in Work Bench Services</span>',
            },
             {
                title: '<img src="images/iDXPUI5AnalyticsShowCard.svg" width="30px"/><span class="imageText">Analytics</span>',
                element: '.nextScreenClass ',
                intro: '<div><h6>Analytics</h6></div> <span class="homeText">Click to View Work Bench Analytics</span>',
            },
             {
                title: '<img src="images/dxpmenuList.png" width="40px"/><span class="imageText">PiLog Sites</span>',
                element: '.menuListIcon',
                intro: '<div><h6>Pilog Sites</h6></div> <span class="homeText">Click to View other PiLog Sites</span>',
                position: 'right'
            },
            {
                title: '<img src="images/search_blue1.png" width="40px"/><span class="imageText">Global Search</span>',
                element: '.searchMainWrap',
                intro: '<div><h6>Global Search</h6></div> <span class="imageText">Search with keyword</span>',
                position: 'right'
            },
            {
                title: '<img src="images/languageSet.png" width="40px"/><span class="imageText">Select Language</span>',
                element: '#DXPlLanguageSelectionId',
                intro: '<div><h6>Language</h6></div> <span class="homeText">You can select your prefered Language</span>',
                position: 'left'
            },
            {
                title: '<img src="images/Mike-OutLine-Icon-01.png" width="40px"/><span class="imageText">Voice Search</span>',
                element: '#unmuteVoiceId',
                intro: '<div><h6>Voice Search</h6></div><span class="homeText">Click to search based on Voice Recognization</span>',
                position: 'left'
            },
//            {
//                title: '<img src="images/dxpmenuList.png" width="40px"/><span class="imageText">Select Language</span>',
//                element: '.AutotestingIcon',
//                intro: '<div><h6>Microphone</h6></div><span class="homeText"></span>',
//                position: 'left'
//            },
            {
                title: '<img src="images/weather.png" width="40px"/><span class="imageText">Weather Forecast</span>',
                element: '.weatherIcon',
                intro: '<div><h6>Weather Forecast</h6></div><span class="homeText">Click to View Weather Details</span>',
                position: 'left'
            },
            {
                title: '<img src="images/calendarBlue.png" width="45px"/><span class="imageText">Calendar</span>',
                element: '.calendarIcon',
                intro: '<div><h6>Calendar</h6></div> <span class="homeText">Click to view the Events</span>',
                position: 'left'
            },
            {
                title: '<img src="images/Notifications.png" width="40px"/><span class="imageText">Notification</span>',
                element: '.notificationIcon',
                intro: '<div><h6>Notification</h6></div> <span class="homeText">Click to view the Notifications</span>',
                position: 'left'
            },
            {
                title: '<img src="images/iDXPUI5Settings.svg" width="40px"/><span class="imageText">Settings</span>',
                element: '.settingIcon',
                intro: '<div><h6>Settings</h6></div> <span class="homeText">Click to view Themes, Font type, Font Size etc..</span>',
                position: 'left'
            },
            {
                title: '<img src="images/Bulb_Icon_Widget.png" width="40px"/><span class="imageText">Navigator</span>',
                element: '.introCloseAndOn',
                intro: '<div><h6>Navigator</h6></div> <span class="homeText">Click to Enable/Disable Guide</span>',
                position: 'left'
            },
            
            {
                title: '<img src="images/Help-Icon.svg" width="40px"/><span class="imageText">Help</span>',
                element: '.helpIcon',
                intro: '<div><h6>Help</h6></div> <span class="homeText">Click to view Support</span>',
            },

            {
                title: '<img src="images/Profile_Icon.svg" width="40px"/><span class="imageText">Profile</span>',
                element: '.userProfileIcon',
                intro: '<div><h6>Profile</h6></div> <span class="homeText">Click to view my basket and log out options.</span>',
                position: 'left'
            },
            {
                title: '<img src="" width="40px"/><span class="imageText">Lean Governance Configuration Process</span>',
                element: '#activeMainTabId',
                intro: '<div><h6>Lean Governance Configuration Process</h6></div> <span class="homeText">Click to View the Steps and Processes</span>',
                position: 'left'
            },
            {
                title: '<img src="" width="40px"/><span class="imageText">Subscription details</span>',
                element: '.subscription-right-info',
                intro: '<div><h6>Subscription details</h6></div> <span class="homeText">Here are your subscription details</span>',
                position: 'left'
            },
            {
                title: '<img src=""/><span class="imageText">Feature and add ons</span>',
                element: '.planSection',
                intro: '<div><h6>Feature and add ons</h6></div> <span class="homeText">Here are your features and add ons</span>',
                position: 'left'
            },
            {
                title: '<img src="images/AboutUsSet.png" width="40px"/><span class="imageText">About Us</span>',
                element: '.subFeaturesLeftAboutImg',
                intro: '<div><h6>About Us</h6></div> <span class="homeText"></span>',
                position: 'left'
            },
            {
                title: '<img src="images/Video_Icon_blue.svg" width="40px"/><span class="imageText">Video</span>',
                element: '.subFeaturesLeftVideoImg',
                intro: '<div><h6>Video</h6></div> <span class="homeText">Here are your features and add ons</span>',
                position: 'left'
            },
            {
                title: '<img src="images/SearchGif.png" width="40px"/><span class="imageText">Governance process</span>',
                element: '.subFeaturesLeftGifImg',
                intro: '<div><h6>Governance process</h6></div> <span class="homeText">Here are your features and add ons</span>',
                position: 'left'
            },
        ],
        nextLabel: 'Next',
        prevLabel: 'Back',
        tooltipClass: 'customTooltip'
    });
    intro2.start().oncomplete(function () { 
        intro2.exit();
    });
}
function HelpDocumentIntro(helpType) { 
    var helpIntro = introJs();

    function prepareSteps() {
        var steps = [];
        var leftSection = document.querySelector(".wbleftSideMenu");
        var commonClass = document.querySelectorAll(".helplistDataItemli").length > 0
            ? document.querySelectorAll(".helplistDataItemli")
            : document.querySelectorAll(".sideMenulistItem");
        var wbConfigButton = document.querySelector(".btnGroupclass");

        if (leftSection) {
            steps.push({
                element: leftSection,
                intro: "This is the left side menu section."
            });
        }

        for (var i = 0; i < commonClass.length; i++) {
            var item = commonClass[i];
            if (item) {
                steps.push({
                    element: item,
                    intro: item.className.indexOf("helplistDataItemli") !== -1 
                        ? item.innerText 
                        : (item.firstElementChild ? item.firstElementChild.innerText : ""),
                });
            }
        }

        if (wbConfigButton) {
            steps.push({
                element: leftSection,
                intro: "Add more configuration of your choice"     
            });
        }

        return steps;
    }

    var steps = [];

    if (helpType === "Document") {
        steps = prepareSteps();
    } else if (helpType === "Video") {
        steps = prepareSteps();
    } else if (helpType === "Gif") {    
        steps = prepareSteps();
    } else if (helpType === "MM_B_MM_SAP_INSTANCE_5STEPCONFIG") {
        steps = prepareSteps(); 
    } else {
        console.error("Invalid helpType provided!");
        return;
    }

    helpIntro.exit();

    helpIntro
        .setOptions({
            steps: steps,
            nextLabel: 'Next',
            prevLabel: 'Back',
            tooltipClass: 'customTooltip'
        })
        .start()
        .oncomplete(function () {
            helpIntro.exit();
        });
}

function helpDocumentsLiIntro() {
    var intro = introJs();

    intro.setOptions({
        steps: [
            {
                element: ".wbrightContentWrapper",
                intro: "Document view"
            },
            {
                element: ".wbleftSideMenuTogglerDiv",
                intro: "You can open and close the side panel"
            }
        ],
        nextLabel: 'Next',
        prevLabel: 'Back',
        tooltipClass: 'customTooltip'
    }).start()
        .oncomplete(function () {
            intro.exit();
        });
}


