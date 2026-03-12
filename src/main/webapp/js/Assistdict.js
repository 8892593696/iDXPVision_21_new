/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * 
 */

$(function(){
    var voiceResponse = localStorage.getItem("voiceResponse");
    if (voiceResponse!=null && voiceResponse.trim()!="" && voiceResponse.indexOf("CHANGE LANGUAGE")!=-1){
     changeLanguage(voiceResponse);
    }
})


var keyWordsOjb ={};


keyWordsOjb["MASTER DATA RECORD MANAGER"]= ["MDRM", "MASTER DATA RECORD MANAGER", "MD RM", "MDM", "INDIA M", "MDRF", "MGRM"];

keyWordsOjb["MASTER DATA PROJECT MANAGER"]= ["MDPM", "MASTER DATA PROJECT MANAGER"];

keyWordsOjb["PILOG REPOSITORY"]= ["PILOG REPOSITORY", "PILOG PREFFERED RECORDS"];

keyWordsOjb["WEB SERVICES REPOSITORY"]= ["WS", "WEB SERVICES REPOSITORY"];

keyWordsOjb["UNDELETION REQUESTS"]= ["AND DELETION REQUEST", "AND DELETION REQUESTS"];


keyWordsOjb["REFRESH"]= ["REFRESH","RELOAD"];

keyWordsOjb["BACK"]= ["BACK","PREVIOUS"];

keyWordsOjb["DOWN"]= [" DOWN"," BOTTOM", " END"];
keyWordsOjb["TOP"]= [" UP"," TOP", " BEGINING", " START"];

keyWordsOjb["PASSWORD"]= ["CHANGE PASSWORD"];

keyWordsOjb["COMMON_WORDS"]= ["I AM SURE","I AM","TAK ME TO ","NEW TAB","QUICK LINKS" ,"SEARCH FOR","GO TO",
    "FORM","GRID","WITH ","PROVIDE ","BRING ","TAKE ","PLEASE","SHOW"," ME","ABOUT",
    " THE"," OF ","CAN ","YOU ","KINDLY","RELATED"," BY ","GIVE","DISPLAY", "OPEN",
    " FIND","COULD","LIKE"," IN "," AT "," OR ","FROM"," IF "," ALL","ALL ", " FORM", " PAGE", "I " ,"WANT ",];

