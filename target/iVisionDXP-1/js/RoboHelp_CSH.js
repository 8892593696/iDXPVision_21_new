// eHelp� Corporation
// Copyright� 1998-2002 eHelp� Corporation.All rights reserved.
// RoboHelp_CSH.js
// The Helper function for WebHelp Context Sensitive Help

var gbNav6=false;
var gbNav61=false;
var gbNav4=false;
var gbIE4=false;
var gbIE=false;
var gbIE5=false;
var gbIE55=false;

var gAgent=navigator.userAgent.toLowerCase();
var gbMac=(gAgent.indexOf("mac")!=-1);
var gbSunOS=(gAgent.indexOf("sunos")!=-1);
var gbOpera=(gAgent.indexOf("opera")!=-1);

var gVersion=navigator.appVersion.toLowerCase();

var gnVerMajor=parseInt(gVersion);
var gnVerMinor=parseFloat(gVersion);

gbIE=(navigator.appName.indexOf("Microsoft")!=-1);
if(gnVerMajor>=4)
{
    if(navigator.appName=="Netscape")
    {
        gbNav4=true;
        if(gnVerMajor>=5) gbNav6=true;
    }
    gbIE4=(navigator.appName.indexOf("Microsoft")!=-1);
}
if(gbNav6)
{
    document.gnPageWidth=innerWidth;
    document.gnPageHeight=innerHeight;
    var nPos=gAgent.indexOf("netscape");
    if(nPos!=-1)
    {
        var nVersion=parseFloat(gAgent.substring(nPos+10));
        if(nVersion>=6.1) gbNav61=true;
    }
}else if(gbIE4)
{
    var nPos=gAgent.indexOf("msie");
    if(nPos!=-1)
    {
        var nVersion=parseFloat(gAgent.substring(nPos+5));
        if(nVersion>=5) gbIE5=true;
        if(nVersion>=5.5) gbIE55=true;
    }
}

//function RH_ShowHelp(a_pszHelpFile, dwData)
//{
//    // this function only support WebHelp
//    var strHelpPath = a_pszHelpFile;
//
//    ShowWebHelp(a_pszHelpFile, dwData);
//}

function RH_ShowHelp(strHelpPath, nMapId)
{
    var a_pszHelpFile = strHelpPath + "#<id=" + nMapId;

    if (a_pszHelpFile)
    {
        if (gbIE4) loadData(a_pszHelpFile);
    }
}

function getElement(sID)
{
    if(document.getElementById) return document.getElementById(sID);
    else if(document.all) return document.all(sID);

    return null;
}

function loadData(sFileName)
{
    if(!getElement("dataDiv"))
    {
        if(!insertDataDiv())
        {
            gsFileName=sFileName;
            return;
        }
    }
    else
    {
        var sHTML="";
        if(gbMac) sHTML+="<iframe name=\"__WebHelpCshStub\" src=\""+sFileName+"\"></iframe>";
        else sHTML+="<iframe name=\"__WebHelpCshStub\" style=\"visibility:hidden;width:0;height:0\" src=\""+sFileName+"\"></iframe>";

        var oDivCon=getElement("dataDiv");
        if(oDivCon)
        {
            if(gbNav6)
            {
                if(oDivCon.getElementsByTagName&&oDivCon.getElementsByTagName("iFrame").length>0)
                {
                    oDivCon.getElementsByTagName("iFrame")[0].src=sFileName;
                }
                else oDivCon.innerHTML=sHTML;
            }
            else oDivCon.innerHTML=sHTML;
        }
    }
}

function insertDataDiv()
{
    var sHTML="";

    if(gbMac) sHTML+="<div id=dataDiv style=\"display:none;\"></div>";
    else sHTML+="<div id=dataDiv style=\"visibility:hidden\"></div>";
    document.body.insertAdjacentHTML("beforeEnd",sHTML);

    return true;
}
