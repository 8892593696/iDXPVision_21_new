/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pilog.mdm.cloud.DAO;

import java.sql.Clob;
import com.pilog.mdm.cloud.access.DataAccess;
import com.pilog.mdm.cloud.ws.pojo.DalSearchBasket;
import com.pilog.mdm.cloud.vision.utilities.PiLogCloudUtills;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import oracle.sql.RAW;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 *
 */
@Repository
public class IDXPDropDownDAO {

    @Autowired
    private DataAccess access;

    PiLogCloudUtills visionUtills = new PiLogCloudUtills();
    @Autowired
    private IDXPGridProcessDAO visionSearchDAO;

    @Autowired
    private IDXPGridDAO cloudgridformation;

    //GENERIC DTOPDOWN
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public String genericDropDown(HttpServletRequest request) {
        String dropDownData = "No Data Found";
        String resultString = "";
        String relId = "";
        String multiSelectFlag = "";
        String staticCondition = "";
        String dddwWsUrl = "";
        String dddwWsFlag = "";
        String orgnId = "";
        String initialClearFilterFlag = "N";
        String width = "";

        JSONArray dropDownHeaders = new JSONArray();
        JSONArray colArray = new JSONArray();
        JSONArray valueRenderArray = new JSONArray();
        JSONArray datafeildsArray = new JSONArray();
        JSONArray propValueArray = new JSONArray();
        JSONObject valueRenderObj = new JSONObject();
        JSONObject finalJsnObj = new JSONObject();
        JSONObject gridconfig = new JSONObject();
        JSONObject source = new JSONObject();
        JSONObject dependencyParamsObj = null;

        int dropDownColSize = 0;

        HttpSession session = request.getSession(false);
        String orgnName = request.getParameter("orgnName");
        String ddwId = request.getParameter("ddwId") != null ? request.getParameter("ddwId") : "";
        String viewType = request.getParameter("viewType") != null ? request.getParameter("viewType") : "";
        String dependParams = request.getParameter("dependParams") != null ? request.getParameter("dependParams") : "";
        String propValueArrayStr = request.getParameter("propValueArray") != null ? request.getParameter("propValueArray") : "";
        JSONObject labelObj = visionUtills.getMultilingualObject(request);
        if (orgnName != null && !orgnName.equalsIgnoreCase("")) {
            orgnId = getOrgnIdByName(orgnName);
        } else {
            /*bindhu*/
            orgnId = (String) session.getAttribute("ssOrgId") != null ? (String) session.getAttribute("ssOrgId") : request.getParameter("orgnId");
            /*bindhu*/
        }
        JSONObject initParamObject = new JSONObject();
        //for search
        String specsearchid = request.getParameter("searchId");
        if (specsearchid != null && !"".equalsIgnoreCase(specsearchid)
                && !"null".equalsIgnoreCase(specsearchid)) {
            List<DalSearchBasket> searchBasketList = getSearchBasketDetails(orgnId, (String) request.getSession(false).getAttribute("ssRole"), specsearchid);
            if (searchBasketList != null && !searchBasketList.isEmpty()) {
                String searchInitParamStr = searchBasketList.get(0).getSearchFollowupParams();
                String[] splitParams = searchInitParamStr.split("&");
                if (splitParams != null) {
                    for (int i = 0; i < splitParams.length; i++) {
                        String[] innersplitParams = splitParams[i].split("=");
                        initParamObject.put(innersplitParams[0], innersplitParams[1]);
                        System.out.println("innersplitParams" + innersplitParams.toString());
                    }
                }
            }
        }

        //for grid
        String gridId = request.getParameter("gridId");
        if (gridId != null && !"".equalsIgnoreCase(gridId)
                && !"null".equalsIgnoreCase(gridId)) {
            JSONObject gridObj = cloudgridformation.getGrid(gridId, request);
            if (gridObj != null && !gridObj.isEmpty()) {
                initParamObject = (JSONObject) gridObj.get("gridInitParamObj");
            }
        }

        if (initParamObject != null && !initParamObject.isEmpty()) {
            String dropDownWidth = (String) initParamObject.get("uuu_DropdownWidth");
            if (dropDownWidth != null && !"".equalsIgnoreCase(dropDownWidth) && !"null".equalsIgnoreCase(dropDownWidth)) {
                String[] dropDownArray = dropDownWidth.split(";");
                if (dropDownArray != null && dropDownArray.length > 0) {
                    String dropDownWidthValue = Arrays.stream(dropDownArray).filter(ddwValue -> (ddwValue != null && !"".equalsIgnoreCase(ddwValue)
                            && ddwValue.contains(ddwId))).findAny().orElse(null);
                    if (dropDownWidthValue != null && !"".equalsIgnoreCase(dropDownWidthValue)
                            && !"null".equalsIgnoreCase(dropDownWidthValue) && dropDownWidthValue.contains(":")) {
                        String ddwWidth = dropDownWidthValue.split(":")[1];
                        if (ddwWidth != null && !"".equalsIgnoreCase(ddwWidth)) {
                            int ddwNewWidth = Integer.parseInt(ddwWidth);
                            finalJsnObj.put("ddwWidth", ddwNewWidth);
                        }

                    }
                }
            }
        }

//        String gridId = request.getParameter("gridId");
//        if (gridId != null && !"".equalsIgnoreCase(gridId)
//                && !"null".equalsIgnoreCase(gridId)) {
//            JSONObject gridObj = visionGenericDAO.getGrid(gridId, request);
//            if (gridObj != null && !gridObj.isEmpty()) {
//                JSONObject initParamObj = (JSONObject) gridObj.get("gridInitParamObj");
//                if (initParamObj != null && !initParamObj.isEmpty()) {
//                    String dropDownWidth = (String) initParamObj.get("uuu_DropdownWidth");
//                    if (dropDownWidth != null && !"".equalsIgnoreCase(dropDownWidth) && !"null".equalsIgnoreCase(dropDownWidth)) {
//                        String[] dropDownArray = dropDownWidth.split(";");
//                        if (dropDownArray != null && dropDownArray.length > 0) {
//                            String dropDownWidthValue = Arrays.stream(dropDownArray).filter(ddwValue -> (ddwValue != null && !"".equalsIgnoreCase(ddwValue)
//                                    && ddwValue.contains(ddwId))).findAny().orElse(null);
//                            if (dropDownWidthValue != null && !"".equalsIgnoreCase(dropDownWidthValue)
//                                    && !"null".equalsIgnoreCase(dropDownWidthValue) && dropDownWidthValue.contains(":")) {
//                                String ddwWidth = dropDownWidthValue.split(":")[1];
//                                if (ddwWidth != null && !"".equalsIgnoreCase(ddwWidth)) {
//                                    int ddwNewWidth = Integer.parseInt(ddwWidth);
//                                    finalJsnObj.put("ddwWidth", ddwNewWidth);
//                                }
//
//                            }
//                        }
//                    }
//                }
//            }
//        }
        if (dependParams != null
                && !"null".equalsIgnoreCase(dependParams)
                && !"undefined".equalsIgnoreCase(dependParams)
                && !dependParams.contains("undefined")
                && !dependParams.contains("UNDEFINED")
                && !dependParams.equals("")) {
            dependencyParamsObj = (JSONObject) JSONValue.parse(dependParams);
        }
        if (propValueArrayStr != null
                && !"null".equalsIgnoreCase(propValueArrayStr)
                && !"undefined".equalsIgnoreCase(propValueArrayStr)
                && !propValueArrayStr.contains("undefined")
                && !propValueArrayStr.contains("UNDEFINED")
                && !"".equalsIgnoreCase(propValueArrayStr)) {
            propValueArray = (JSONArray) JSONValue.parse(propValueArrayStr);
        }
        System.out.println("propValueArray:::" + propValueArray);
        //System.out.println("dependencyParamsObj   :::: " + dependencyParamsObj);
        try {

            String genericDropDownQuery = " SELECT "
                    + " cols.id.columnName, "//0
                    + " cols.colFilter, "//1
                    + " cols.columnDisplay, "//2
                    + " cols.columnWidth, "//3
                    + " cols.columnLabel, "//4
                    + " cols.columnType, "//5
                    + " cols.valueFlag, "//6
                    + " cols.id.sequenceNo,  "//7
                    + " cols.isHidden,  "// 8
                    + " cols.columnDataType,  "// 9                  
                    + " cols.columnValue  ,"// 10
                    + " drpdown.id.relId , "// 11
                    + " drpdown.multiSelectFlag,  "// 12
                    + " drpdown.ddwWsFlag,  "// 13
                    + " drpdown.ddwWsUrl,  "// 14
                    + " cols.operator,  "// 15
                    + " drpdown.childNullify,  "// 16
                    + " drpdown.childMand,  "// 17
                    + " drpdown.childOpt,  "// 18
                    + " drpdown.childDisable,  "// 19
                    + " drpdown.childEditable,  "// 20
                    + " drpdown.width,  "// 21
                    + " drpdown.height,  "// 22
                    + " drpdown.ddwIntParams,  "// 23
                    + " drpdown.intClearFilterFlag,  "// 24
                    + "drpdown.ddwCustColumn1,  " // 25
                    + "drpdown.ddwCustColumn2,  " // 26
                    + "drpdown.ddwCustColumn3,  " // 27
                    + "drpdown.ddwCustColumn4,  " // 28
                    + "drpdown.ddwCustColumn5,  " // 29
                    + "drpdown.ddwCustColumn6,  " // 30
                    + "drpdown.ddwCustColumn7,  " // 31
                    + "drpdown.ddwCustColumn8,  " // 32
                    + "drpdown.ddwCustColumn9,  " // 33
                    + "drpdown.ddwCustColumn10,  " // 34
                    + "drpdown.ddwCustColumn11,  " // 35
                    + "drpdown.ddwCustColumn12,  " // 36
                    + "drpdown.ddwCustColumn13,  " // 37
                    + "drpdown.ddwCustColumn14,  " // 38
                    + "drpdown.ddwCustColumn15,  " // 39
                    + "drpdown.ddwCustColumn16,  " // 40
                    + "drpdown.ddwCustColumn17,  " // 41
                    + "drpdown.ddwCustColumn18,  " // 42
                    + "drpdown.ddwCustColumn19,  " // 43
                    + "drpdown.ddwCustColumn20  " // 44
                    + " FROM DalDropdownColumn cols,  "
                    + " DalDropdown drpdown "
                    + " WHERE drpdown.id.ddwId = cols.id.ddwId AND "
                    + " drpdown.id.ddwId ='" + ddwId + "'";

            if (ddwId != null && !"".equalsIgnoreCase(ddwId)
                    && (!"DDW_ORGANIZATION".equalsIgnoreCase(ddwId) || !"DDW_REG_LOCALE".equalsIgnoreCase(ddwId))) {
                genericDropDownQuery += " AND drpdown.id.orgnId ='" + orgnId + "'";
            }
            genericDropDownQuery += ""
                    + " ORDER BY cols.id.sequenceNo";

//            System.out.println("genericDropDownQuery :::: " + genericDropDownQuery);
            Map genericDropDownParams = new HashMap();
            List genericDropdownList = access.sqlqueryWithParams(genericDropDownQuery, genericDropDownParams);
            //System.out.println("genericDropdownList :::: " + genericDropdownList.size());
            if (genericDropdownList != null && !genericDropdownList.isEmpty() && genericDropdownList.size() > 0) {

                dropDownColSize = genericDropdownList.size();
                JSONArray selectColumnsArray = new JSONArray();
                JSONArray conditionColumnsArray = new JSONArray();
                String defaultOrderBy = "";

                for (int i = 0; i < dropDownColSize; i++) {

                    JSONObject selectColumns = new JSONObject();
                    JSONObject conditionColumns = new JSONObject();
                    JSONObject colHeaders = new JSONObject();

                    Object drpDwnRec[] = (Object[]) genericDropdownList.get(i);
                    String columnValue = (String) drpDwnRec[10];
                    if (i == 0) {
                        relId = (String) drpDwnRec[11];
                        multiSelectFlag = String.valueOf(drpDwnRec[12]);
                        dddwWsUrl = (String) drpDwnRec[14];
                        dddwWsFlag = String.valueOf(drpDwnRec[13]);
                        initialClearFilterFlag = String.valueOf(drpDwnRec[24]);

                        try {
                            width = (String) drpDwnRec[21];
                            if (width != null && !"null".equalsIgnoreCase(width) && !"".equalsIgnoreCase(width)) {
                                int ddwNewWidth1 = Integer.parseInt(width);
                                finalJsnObj.remove("ddwWidth");
                                finalJsnObj.put("ddwWidth", ddwNewWidth1);
                            }
                        } catch (Exception w) {

                        }

                        JSONObject ddwInitParamsObj = new JSONObject();
                        try {
                            String ddwInitParams = (visionUtills.clobToString((Clob) drpDwnRec[23]));

                            ddwInitParamsObj = cloudgridformation.getInitParamObject(ddwInitParams);
                        } catch (Exception p) {
                            ddwInitParamsObj = new JSONObject();
                        }

                        finalJsnObj.put("ddwInitParamsObj", ddwInitParamsObj);

                        try {
                            String height = (String) drpDwnRec[22];
                            if (height != null && !"null".equalsIgnoreCase(height) && !"".equalsIgnoreCase(height)) {
                                int ddwNewheight = Integer.parseInt(height);
                                finalJsnObj.remove("ddwheight");
                                finalJsnObj.put("ddwheight", ddwNewheight);
                            }
                        } catch (Exception h) {

                        }

                        try {
                            finalJsnObj.put("DDW_CUST_COLUMN1", (String) drpDwnRec[25]);
                            finalJsnObj.put("DDW_CUST_COLUMN2", (String) drpDwnRec[26]);
                            finalJsnObj.put("DDW_CUST_COLUMN3", (String) drpDwnRec[27]);
                            finalJsnObj.put("DDW_CUST_COLUMN4", (String) drpDwnRec[28]);
                            finalJsnObj.put("DDW_CUST_COLUMN5", (String) drpDwnRec[29]);
                            finalJsnObj.put("DDW_CUST_COLUMN6", (String) drpDwnRec[30]);
                            finalJsnObj.put("DDW_CUST_COLUMN7", (String) drpDwnRec[31]);
                            finalJsnObj.put("DDW_CUST_COLUMN8", (String) drpDwnRec[32]);
                            finalJsnObj.put("DDW_CUST_COLUMN9", (String) drpDwnRec[33]);
                            finalJsnObj.put("DDW_CUST_COLUMN10", (String) drpDwnRec[34]);
                            finalJsnObj.put("DDW_CUST_COLUMN11", (String) drpDwnRec[35]);
                            finalJsnObj.put("DDW_CUST_COLUMN12", (String) drpDwnRec[36]);
                            finalJsnObj.put("DDW_CUST_COLUMN13", (String) drpDwnRec[37]);
                            finalJsnObj.put("DDW_CUST_COLUMN14", (String) drpDwnRec[38]);
                            finalJsnObj.put("DDW_CUST_COLUMN15", (String) drpDwnRec[39]);
                            finalJsnObj.put("DDW_CUST_COLUMN16", (String) drpDwnRec[40]);
                            finalJsnObj.put("DDW_CUST_COLUMN17", (String) drpDwnRec[41]);
                            finalJsnObj.put("DDW_CUST_COLUMN18", (String) drpDwnRec[42]);
                            finalJsnObj.put("DDW_CUST_COLUMN19", (String) drpDwnRec[43]);
                            finalJsnObj.put("DDW_CUST_COLUMN20", (String) drpDwnRec[44]);
                        } catch (Exception c) {

                        }

                    }

                    String ddwDataQuery = "";
                    String coulumnType = String.valueOf(drpDwnRec[5]);
                    String coulumnName = (String) drpDwnRec[0];
                    String filter = (String) drpDwnRec[1];
                    String valueFlag = String.valueOf(drpDwnRec[6]);

                    if (coulumnType != null && !"".equals(coulumnType)) {

                        if (coulumnType.equalsIgnoreCase("A")) {
                            JSONObject datafeilds = new JSONObject();
                            datafeilds = new JSONObject();
                            if ("".equalsIgnoreCase(defaultOrderBy)) {
                                if (drpDwnRec[0] != null && !"".equalsIgnoreCase((String) drpDwnRec[0])) {
                                    if (drpDwnRec[2] != null && !"".equalsIgnoreCase(String.valueOf(drpDwnRec[2])) && "Y".equalsIgnoreCase(String.valueOf(drpDwnRec[2]))) {
                                        defaultOrderBy = (String) drpDwnRec[0];
                                    }
                                }
                            }
                            datafeilds.put("name", (String) drpDwnRec[0]);
                            datafeilds.put("type", "string");//drpDwnRec[9]);//15 
                            datafeildsArray.add(datafeilds);
                            selectColumnsArray.add(drpDwnRec[0]);
                            JSONObject colObj = new JSONObject();
                            colObj.put("text", new PiLogCloudUtills().convertIntoMultilingualValue(labelObj, drpDwnRec[4]));//3
                            colObj.put("editable", false);
                            colObj.put("datafield", (String) drpDwnRec[0]);
                            colObj.put("width", (drpDwnRec[3] + "%"));//7                  
                            colObj.put("enabletooltips", true);
                            colObj.put("rendered", "function(header) {  header.css('text-align', 'center');}");
                            if (visionUtills.convertToBoolean(String.valueOf(drpDwnRec[2]))) {
                                colObj.put("hidden", false);
                            } else {
                                colObj.put("hidden", true);
                            }

                            colArray.add(colObj);
                        }

                        if (valueFlag != null && !"".equals(valueFlag)) {

                            if (valueFlag.equalsIgnoreCase("S")) {//FOR SESSION VARIABLES

                                if (filter != null && !"".equals(filter)) {

                                    if (((String) drpDwnRec[10]).equalsIgnoreCase("ssOrgId")) {
                                        if (orgnId != null && !orgnId.equalsIgnoreCase("")) {
                                            conditionColumns.put("KEY", filter);
                                            conditionColumns.put("TYPE", valueFlag);
                                            conditionColumns.put("VALUE", orgnId);
                                            conditionColumns.put("OPERATOR", drpDwnRec[15] != null ? drpDwnRec[15] : " = ");
                                        } else {
                                            conditionColumns.put("KEY", filter);
                                            conditionColumns.put("TYPE", valueFlag);
                                            conditionColumns.put("VALUE", (String) session.getAttribute((String) drpDwnRec[10]));
                                            conditionColumns.put("OPERATOR", drpDwnRec[15] != null ? drpDwnRec[15] : " = ");
                                        }
                                    } else {
                                        conditionColumns.put("KEY", filter);
                                        conditionColumns.put("TYPE", valueFlag);
                                        conditionColumns.put("VALUE", (String) session.getAttribute((String) drpDwnRec[10]));
                                        conditionColumns.put("OPERATOR", drpDwnRec[15] != null ? drpDwnRec[15] : " = ");
                                    }
                                }

                            } else if (valueFlag.equalsIgnoreCase("R")) {//FOR  REQUEST PARAMETERS

                                if (filter != null && !"".equals(filter)) {
                                    String string = "";
                                    if (dependencyParamsObj != null && !dependencyParamsObj.isEmpty() && dependencyParamsObj.size() > 0) {

                                        conditionColumns.put("KEY", filter);
                                        conditionColumns.put("TYPE", valueFlag);
                                        if ((String) drpDwnRec[10] != null
                                                && !"".equalsIgnoreCase((String) drpDwnRec[10])
                                                && ((String) drpDwnRec[10]).contains(",")) {
                                            String inString[] = ((String) drpDwnRec[10]).split(",");
                                            if (inString != null && inString.length > 0) {
                                                string = "( ";

                                                for (int j = 0; j < inString.length; j++) {
                                                    string = string + "'" + dependencyParamsObj.get(inString[j]) + "',";
                                                }
                                                string = string.substring(0, string.lastIndexOf(","));

                                                string = string + ")";
                                            }
                                            conditionColumns.put("VALUE", string);

                                        } else {

                                            conditionColumns.put("VALUE", dependencyParamsObj.get((String) drpDwnRec[10]));

                                        }
                                        conditionColumns.put("OPERATOR", drpDwnRec[15] != null ? drpDwnRec[15] : " = ");

                                    }
                                }

                            } else if (valueFlag.equalsIgnoreCase("Q")) {

                                String subQuery = (String) drpDwnRec[10];
                                String finalSubQuery = (String) drpDwnRec[10];

                                if (finalSubQuery.contains("<<--")) {

                                    while (finalSubQuery.contains("<<--")) {

                                        String conditionCol = (finalSubQuery.substring(finalSubQuery.indexOf("<<--") + 4, finalSubQuery.indexOf("-->>"))).trim();

                                        if (conditionCol != null && !"".equals(conditionCol)) {

                                            if (conditionCol.startsWith("ss")) {

                                                if (conditionCol.equalsIgnoreCase("ssOrgId")) {

                                                    if (orgnId != null && !orgnId.equalsIgnoreCase("")) {

                                                        finalSubQuery = finalSubQuery.replaceAll("<<--" + conditionCol + "-->>", orgnId);
                                                    } else {
                                                        finalSubQuery = finalSubQuery.replaceAll("<<--" + conditionCol + "-->>", (String) session.getAttribute(conditionCol));
                                                    }

                                                } else {
                                                    finalSubQuery = finalSubQuery.replaceAll("<<--" + conditionCol + "-->>", (String) session.getAttribute(conditionCol));
                                                }

                                            } else if (dependencyParamsObj != null && !dependencyParamsObj.isEmpty() && dependencyParamsObj.size() > 0 && dependencyParamsObj.get(conditionCol) != null) {

                                                finalSubQuery = finalSubQuery.replaceAll("<<--" + conditionCol + "-->>", (String) dependencyParamsObj.get(conditionCol));
                                            }

                                        }

                                    }

                                }

                                if (filter != null && !"".equals(filter)) {
                                    //System.out.println("finalSubQuery :: " + finalSubQuery);
                                    conditionColumns.put("KEY", filter);
                                    conditionColumns.put("TYPE", valueFlag);
                                    conditionColumns.put("VALUE", finalSubQuery);
                                    conditionColumns.put("OPERATOR", drpDwnRec[15] != null ? drpDwnRec[15] : " = ");
                                } else {//FOR ADDING DIRECT CONDITION TO THE QUERY

                                    staticCondition = finalSubQuery;
                                    //System.out.println("staticCondition :: " + finalSubQuery);

                                }

                            } else if (valueFlag.equalsIgnoreCase("F")) {
                                if (filter != null && !"".equals(filter)) {

//                                        if (dependencyParamsObj != null && !dependencyParamsObj.isEmpty() && dependencyParamsObj.size() > 0) {
                                    conditionColumns.put("KEY", filter);
                                    conditionColumns.put("TYPE", valueFlag);
                                    conditionColumns.put("VALUE", drpDwnRec[10]);
                                    conditionColumns.put("OPERATOR", drpDwnRec[15] != null ? drpDwnRec[15] : " = ");
//                                        }
                                }

                            }
//3417   
                        }

                        conditionColumnsArray.add(conditionColumns);

//                        if (filter == null && valueFlag != null && valueFlag.equalsIgnoreCase("Q")) { //FOR ADDING DIRECT CONDITION TO THE QUERY
//
//                            staticCondition = (String) drpDwnRec[10];
//
//                        }
                    }

                }
//                if (propValueArray != null && !propValueArray.isEmpty()) {
//                    String propCondition = " PROPERTY_CONCEPT_IDS LIKE REGEXP_REPLACE('%";
                ////                    String propCondition = " PROPERTY_CONCEPT_IDS LIKE '%";
//                    for (int i = 0; i < propValueArray.size(); i++) {
//                        JSONObject propValueObj = (JSONObject) propValueArray.get(i);
//                        if (propValueObj != null && !propValueObj.isEmpty()) {
//                            //staticCondition
//                            //PROPERTY_CONCEPT_IDS
//                            propCondition+= ""+propValueObj.get("PROPERTY_CONCEPT_ID")+":"+propValueObj.get("PROPERTY_VALUE1")+"%";
//
//                        }
//
//                    }
//                      propCondition+= "%',REPL_ID) ";
////                      propCondition+= "%' ";
//                        staticCondition += " AND "+propCondition;
////                    if (staticCondition != null && !"".equalsIgnoreCase(staticCondition)) {
////                      
////                    }else{
////                    staticCondition = propCondition;
////                    }
//                }
                if (propValueArray != null && !propValueArray.isEmpty()) {
                    int propdepCount = 0;

                    if (dependencyParamsObj != null && !dependencyParamsObj.isEmpty()
                            && dependencyParamsObj.size() > 0) {
                        String classConceptId = "";
                        String propConceptId = "";
                        classConceptId = (String) dependencyParamsObj.get("CLASS_CONCEPT_ID");
                        propConceptId = (String) dependencyParamsObj.get("PROPERTY_CONCEPT_ID");

                        if (classConceptId != null && !"".equalsIgnoreCase(classConceptId)
                                && !"null".equalsIgnoreCase(classConceptId)
                                && propConceptId != null && !"".equalsIgnoreCase(propConceptId)
                                && !"null".equalsIgnoreCase(propConceptId)) {
                            propdepCount = excutePropDepCntQuery(classConceptId, propConceptId);
                        }
                    }
                    if (propdepCount > 0) {
                        String propCondition = " PROPERTY_CONCEPT_IDS LIKE REGEXP_REPLACE('%";
                        for (int i = 0; i < propValueArray.size(); i++) {
                            JSONObject propValueObj = (JSONObject) propValueArray.get(i);
                            if (propValueObj != null && !propValueObj.isEmpty()) {
                                propCondition += "" + propValueObj.get("PROPERTY_CONCEPT_ID") + ":" + propValueObj.get("PROPERTY_VALUE1") + "%";
                            }
                        }
                        propCondition += "%',REPL_ID) ";
                        staticCondition += " AND " + propCondition;
                    }
                }
                gridconfig.put("width", "100%");
                gridconfig.put("theme", "energyblue");
                gridconfig.put("filterable", true);
                gridconfig.put("enabletooltips", true);
                gridconfig.put("showfilterrow", true);
                gridconfig.put("pageable", true);
                gridconfig.put("showtoolbar", true);

                if (visionUtills.convertToBoolean(multiSelectFlag)) {

                    gridconfig.put("selectionmode", "checkbox");

                }

                gridconfig.put("columnsresize", true);
                gridconfig.put("columnsreorder", true);
                gridconfig.put("autorowheight", true);
                gridconfig.put("enabletooltips", true);
                gridconfig.put("sortable", true);
                if (!"en_US".equalsIgnoreCase(String.valueOf(request.getSession(false).getAttribute("ssLocale")))) {
                    JSONObject localizationobj = new JSONObject();
                    localizationobj.put("pagergotopagestring", new PiLogCloudUtills().convertIntoMultilingualValue(labelObj, "Go to page"));
                    localizationobj.put("pagershowrowsstring", new PiLogCloudUtills().convertIntoMultilingualValue(labelObj, "Show rows"));
                    localizationobj.put("sortascendingstring", new PiLogCloudUtills().convertIntoMultilingualValue(labelObj, "Sort Ascending"));
                    localizationobj.put("sortdescendingstring", new PiLogCloudUtills().convertIntoMultilingualValue(labelObj, "Sort Descending"));
                    localizationobj.put("sortremovestring", new PiLogCloudUtills().convertIntoMultilingualValue(labelObj, "Remove Sort"));
                    localizationobj.put("pagerrangestring", new PiLogCloudUtills().convertIntoMultilingualValue(labelObj, "of"));
                    localizationobj.put("pagernextbuttonstring", new PiLogCloudUtills().convertIntoMultilingualValue(labelObj, "next"));
                    localizationobj.put("pagerpreviousbuttonstring", new PiLogCloudUtills().convertIntoMultilingualValue(labelObj, "previous"));
                    gridconfig.put("localization", localizationobj);
                }
                JSONArray jsnArray = relationData(relId);
                finalJsnObj.put("valueRenderArray", jsnArray);
                String table = (String) ((JSONObject) jsnArray.get(0)).get("PARENT_TABLE");
                finalJsnObj.put("tableName", table);
                finalJsnObj.put("condCols", conditionColumnsArray);
                finalJsnObj.put("selectCols", selectColumnsArray);
                finalJsnObj.put("staticCondition", staticCondition);
                finalJsnObj.put("localdata", new JSONArray());
                finalJsnObj.put("datafields", datafeildsArray);
                finalJsnObj.put("columns", colArray);
                finalJsnObj.put("gridconfig", gridconfig);
                finalJsnObj.put("valueRenderObj", valueRenderObj);
                finalJsnObj.put("viewType", viewType);
                finalJsnObj.put("defaultOrderBy", defaultOrderBy);
                finalJsnObj.put("multiselectflag", visionUtills.convertToBoolean(multiSelectFlag));
                finalJsnObj.put("dropDownTitle", ((JSONObject) colArray.get(0)).get("text"));
                finalJsnObj.put("initialClearFilterFlag", initialClearFilterFlag);
                finalJsnObj.put("webservicedata", getWebServiceDetailsForDDW(dddwWsFlag, dddwWsUrl, request));
                resultString = finalJsnObj.toJSONString();

            }
        } catch (Exception e) {
            e.printStackTrace();
            resultString = "EXCEPTION ::: " + e.getLocalizedMessage();

        }

        return resultString;
    }

//TO FETCH DROPDOWN DATA    
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public JSONArray getDropDwonData(String tableName, JSONArray condCols, JSONArray selectCols, String staticCondition) {
        String condition = "";
        String selectColumns = "";
        String filterType = "";
        JSONArray ddwHeader = new JSONArray();
        JSONArray result = new JSONArray();

        try {

            if (condCols != null && condCols.size() > 0) {

                for (int i = 0; i < condCols.size(); i++) {
                    JSONObject jsnObj = (JSONObject) condCols.get(i);

                    if (jsnObj != null && !jsnObj.isEmpty()) {
                        filterType = (String) jsnObj.get("TYPE");
                        if (filterType != null && !"".equalsIgnoreCase(filterType)) {
                            if ("Q".equalsIgnoreCase(filterType)) {
                                condition = condition + " " + jsnObj.get("KEY") + " " + jsnObj.get("OPERATOR") + " " + jsnObj.get("VALUE") + "   AND  ";
                            } else if (("R".equalsIgnoreCase(filterType))
                                    && (((String) jsnObj.get("VALUE")).contains("(")
                                    && ((String) jsnObj.get("VALUE")).contains(")"))) {
                                condition = condition + " " + jsnObj.get("KEY") + " " + jsnObj.get("OPERATOR") + " " + jsnObj.get("VALUE") + "   AND  ";
                            } else {
                                condition = condition + " " + jsnObj.get("KEY") + " " + jsnObj.get("OPERATOR") + "  '" + jsnObj.get("VALUE") + "'  AND  ";
                            }

                        }
                    }

                    //condition=+" AND ";
                }
                condition = condition.trim();
                if (condition.endsWith("AND")) {
                    condition = condition.substring(0, condition.length() - 3);
                }

                if (condition != null && !"".equalsIgnoreCase(condition)) {
                    condition = " WHERE " + condition;
                }
            } else {

                if ((condition == null || !"".equalsIgnoreCase(condition) || !condition.contains("WHERE"))) {

                    if (staticCondition != null && !"".equalsIgnoreCase(staticCondition) && !staticCondition.contains("WHERE")) {
                        staticCondition = " WHERE  " + staticCondition;
                    }

                }

            }

            if (selectCols != null && selectCols.size() > 0) {

                for (int i = 0; i < selectCols.size(); i++) {
                    selectColumns = selectColumns + " " + (String) selectCols.get(i) + " , ";
                }
                if (selectColumns.endsWith(",")) {
                    selectColumns = selectColumns.substring(0, selectColumns.length() - 1);
                }

                selectColumns = selectColumns.substring(0, selectColumns.lastIndexOf(",") - 1);

            }

            //System.out.println("condition :::: " + condition);
            //System.out.println("staticCondition :::: " + staticCondition);
            //System.out.println("selectCols :::: " + selectCols);
            String ddwDataQuery = "SELECT " + selectColumns + "  FROM " + tableName + " " + condition + " " + staticCondition;
            System.out.println("ddwDataQuery :::: " + ddwDataQuery);

            int ddwDataRecordSize = 0;
            Map ddwDataQueryParams = new HashMap();
            List ddwDataList = access.sqlqueryWithParams(ddwDataQuery, ddwDataQueryParams);

            if (ddwDataList != null && !ddwDataList.isEmpty() && ddwDataList.size() > 0) {

                ddwDataRecordSize = ddwDataList.size();

                for (int i = 0; i < ddwDataRecordSize; i++) {

                    Object obj = ddwDataList.get(i);
                    JSONObject jsonRecObjet = null;

                    if (obj instanceof Object[]) {

                        Object drpDwnRec[] = (Object[]) obj;
                        jsonRecObjet = new JSONObject();

                        for (int j = 0; j < drpDwnRec.length; j++) {

                            if (drpDwnRec[j] instanceof byte[]) {
                                jsonRecObjet.put(selectCols.get(j), (new RAW(drpDwnRec[j])).stringValue());

                            } else {
                                jsonRecObjet.put(selectCols.get(j), drpDwnRec[j]);
                            }

                        }

                    } else if (obj instanceof String) {

                        jsonRecObjet = new JSONObject();
                        jsonRecObjet.put(selectCols.get(0), obj);

                    }

                    result.add(jsonRecObjet);
                }

            }

        } catch (Exception e) {

            e.printStackTrace();
        }
        return result;
    }
    //FOR FETCHING DROPDOWN DATA

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public JSONArray getDropDownData(HttpServletRequest request) {

        String condition = "";
        String selectColumns = "";
        String searchValue = "";
        String searchField = "";
        JSONObject jsFilterObj = null;
        JSONArray ddwHeader = new JSONArray();
        JSONArray result = new JSONArray();
        JSONArray condCols = new JSONArray();
        JSONArray selectCols = new JSONArray();
        String flag = null;
        Integer pageNumber = Integer.parseInt(request.getParameter("pagenum"));
        Integer pageSize = Integer.parseInt(request.getParameter("pagesize"));
        Integer recordEndIndex = Integer.parseInt(request.getParameter("recordendindex"));
        Integer recordStartIndex = Integer.parseInt(request.getParameter("recordstartindex"));
        String ddwOrderby = "";
        try {

            String tableName = request.getParameter("tableName");
            String gridId = request.getParameter("gridId");
            String staticCondition = request.getParameter("staticCondition");
            String condColsStr = request.getParameter("condCols");//JSONArray
            String selectColsStr = request.getParameter("selectCols");//
            String dropdownlistflag = request.getParameter("dropdownlistflag");
            String filterCondition = " and ";
            if (dropdownlistflag != null && !"".equalsIgnoreCase(dropdownlistflag) && !"null".equalsIgnoreCase(dropdownlistflag) && "Y".equalsIgnoreCase(dropdownlistflag)) {
                filterCondition = " or ";
            }
//System.err.println("condColsStr:::::"+condColsStr);
            if (condColsStr != null && !"".equals(condColsStr)) {
                condCols = (JSONArray) JSONValue.parse(condColsStr);
            }
//            System.err.println("condCols:::::" + condCols);

            if (selectColsStr != null && !"".equals(selectColsStr)) {
                selectCols = (JSONArray) JSONValue.parse(selectColsStr);
            }
            String filterStartsWithFlag = "";
            JSONObject initParamObj = visionSearchDAO.getInitParamByGridId(request, gridId);
            if (initParamObj != null && !initParamObj.isEmpty()) {
                filterStartsWithFlag = (String) initParamObj.get("uuu_GridFilterStartindexFlag");
            }

            if (condCols != null && condCols.size() > 0) {
                condition = "";
                String filterType = "";
                for (int i = 0; i < condCols.size(); i++) {
                    JSONObject jsnObj = (JSONObject) condCols.get(i);
                    if (jsnObj != null && !jsnObj.isEmpty()) {
                        filterType = (String) jsnObj.get("TYPE");
                        if (filterType != null && !"".equalsIgnoreCase(filterType)) {
                            if ("Q".equalsIgnoreCase(filterType)) {
                                condition = condition + " " + jsnObj.get("KEY") + " " + jsnObj.get("OPERATOR") + " " + jsnObj.get("VALUE") + "   AND  ";
                            } else if (("R".equalsIgnoreCase(filterType))
                                    && (jsnObj.get("VALUE") != null && ((String) jsnObj.get("VALUE")).contains("(")
                                    && ((String) jsnObj.get("VALUE")).contains(")"))) {
                                condition = condition + " " + jsnObj.get("KEY") + " " + jsnObj.get("OPERATOR") + " " + jsnObj.get("VALUE") + "   AND  ";
                            } else {
                                condition = condition + " " + jsnObj.get("KEY") + " " + jsnObj.get("OPERATOR") + "  '" + jsnObj.get("VALUE") + "'  AND  ";
                            }
                        }
                    }
                }
                condition = condition.trim();
                if (condition.endsWith("AND")) {
                    condition = condition.substring(0, condition.length() - 3);
                }

                if (condition != null && !"".equalsIgnoreCase(condition)) {
                    condition = " WHERE " + condition;
                }
            } else {

                if ((condition == null || !"".equalsIgnoreCase(condition) || !condition.contains("WHERE"))) {

                    if (staticCondition != null && !"".equalsIgnoreCase(staticCondition) && !staticCondition.contains("WHERE")) {
                        staticCondition = " WHERE  " + staticCondition;
                        //System.out.println("staticCondition :::: " + staticCondition);
                    }

                }

            }

            if (selectCols != null && selectCols.size() > 0) {

                for (int i = 0; i < selectCols.size(); i++) {
                    selectColumns = selectColumns + " " + (String) selectCols.get(i) + " , ";
                }
                if (selectColumns.endsWith(",")) {
                    selectColumns = selectColumns.substring(0, selectColumns.length() - 1);
                }

                selectColumns = selectColumns.substring(0, selectColumns.lastIndexOf(",") - 1);

            }

            //  System.out.println("condition :::: " + condition);
            // System.out.println("staticCondition :::: " + staticCondition);
            // System.out.println("selectCols :::: " + selectCols);
            JSONObject jsGridInfo = gridinfoData(request);
            JSONArray jsFilterArray = (JSONArray) jsGridInfo.get("filtercols");
            JSONObject jsSortCol = (JSONObject) jsGridInfo.get("sortcol");
            String ddwDataQuery = "";
            String ddwCountQuery = "select count(*) " + "  FROM " + tableName + " " + condition;
            String[] columnsArr = selectColumns.split(",");
//           String orderQuery=" ORDER BY MATKL ASC";

//            String distinctDropDownFlag = visionGenericDAO.getOrgPropertyValue(request, "DROPDOWN_DISTINCT_FLAG");
//            if(distinctDropDownFlag != null && !"".equalsIgnoreCase(distinctDropDownFlag) 
//                         && !"null".equalsIgnoreCase(distinctDropDownFlag) && "Y".equalsIgnoreCase(distinctDropDownFlag)){
            ddwDataQuery = "SELECT " + selectColumns + "  FROM " + tableName + " " + condition; 
//            } else {
//                    ddwDataQuery = "SELECT DISTINCT " + selectColumns + "  FROM " + tableName + " " + condition;
//            }
//            String ddwDataQuery = "SELECT DISTINCT " + selectColumns + "  FROM " + tableName + " " + condition;

//            if (jsFilterArray.size() > 0 && ddwDataQuery.toLowerCase().contains("order by")) {
            if (ddwDataQuery.toLowerCase().contains("order by")) {
                try {
                    ddwOrderby = ddwDataQuery.substring(ddwDataQuery.toLowerCase().indexOf("order by"));
                    ddwDataQuery = ddwDataQuery.substring(0, ddwDataQuery.toLowerCase().indexOf("order by"));
                    ddwCountQuery = ddwCountQuery.substring(0, ddwCountQuery.toLowerCase().indexOf("order by"));
                    ddwCountQuery = ddwDataQuery.trim();
                    ddwDataQuery = ddwDataQuery.trim();

                    if (ddwCountQuery.endsWith("AND")) {
                        ddwCountQuery = ddwCountQuery.substring(0, ddwCountQuery.length() - 3);
                    }
                    if (ddwDataQuery.endsWith("AND")) {
                        ddwDataQuery = ddwDataQuery.substring(0, ddwDataQuery.length() - 3);
                    }

                } catch (Exception e) {
                    e.printStackTrace();
                }

            }

            if (jsFilterArray.size() > 0) {
                for (int i = 0; i < jsFilterArray.size(); i++) {
                    jsFilterObj = (JSONObject) jsFilterArray.get(i);
                    searchValue = (String) jsFilterObj.get("value");
                    searchField = (String) jsFilterObj.get("column");
                    if (filterStartsWithFlag != null && !"".equalsIgnoreCase(filterStartsWithFlag)
                            && !"null".equalsIgnoreCase(filterStartsWithFlag) && "Y".equalsIgnoreCase(filterStartsWithFlag)) {
                        searchValue = searchValue;
                    } else {
                        searchValue = "%" + searchValue;
                    }

                    if (ddwCountQuery.contains("WHERE")) {

                        if (i == 0) {
                            ddwCountQuery = ddwCountQuery + " AND ( UPPER(" + searchField + ") like '" + searchValue.toUpperCase().replaceAll("\\s", "%") + "%'";
                            ddwDataQuery = ddwDataQuery + " AND ( UPPER(" + searchField + ") like '" + searchValue.toUpperCase().replaceAll("\\s", "%") + "%'";
                        } else {
                            ddwCountQuery = ddwCountQuery + " " + filterCondition + " UPPER(" + searchField + ") like '" + searchValue.toUpperCase().replaceAll("\\s", "%") + "%'";
                            ddwDataQuery = ddwDataQuery + " " + filterCondition + "  UPPER(" + searchField + ") like '" + searchValue.toUpperCase().replaceAll("\\s", "%") + "%'";
                        }

                    } else {

                        if (i == 0) {
                            ddwCountQuery = ddwCountQuery + " WHERE ( UPPER(" + searchField + ") like '" + searchValue.toUpperCase().replaceAll("\\s", "%") + "%'";
                            ddwDataQuery = ddwDataQuery + " WHERE  ( UPPER(" + searchField + ") like '" + searchValue.toUpperCase().replaceAll("\\s", "%") + "%'";

                        } else {
                            ddwDataQuery = ddwDataQuery + " " + filterCondition + "   UPPER(" + searchField + ") like '" + searchValue.toUpperCase().replaceAll("\\s", "%") + "%'";
                            ddwCountQuery = ddwCountQuery + " " + filterCondition + "   UPPER(" + searchField + ") like '" + searchValue.toUpperCase().replaceAll("\\s", "%") + "%'";
                        }

                    }
                }

                ddwCountQuery = ddwCountQuery + " )";
                ddwDataQuery = ddwDataQuery + " )";
            }

            if (staticCondition != null && !"".equalsIgnoreCase(staticCondition) && !(staticCondition.toLowerCase().replaceAll(" ", "").contains("groupby"))) {
                if (ddwCountQuery.contains(" WHERE ")) {
                    ddwCountQuery = ddwCountQuery + " " + staticCondition;
                    ddwDataQuery = ddwDataQuery + " " + staticCondition;
                } else {
                    ddwCountQuery = ddwCountQuery + " WHERE " + staticCondition;
                    ddwDataQuery = ddwDataQuery + " WHERE " + staticCondition;
                    ddwCountQuery = ddwCountQuery.replaceAll("\\s{2,}", " ").replaceAll(" WHERE AND", " WHERE ");
                    ddwDataQuery = ddwDataQuery.replaceAll("\\s{2,}", " ").replaceAll(" WHERE AND", " WHERE ");
                }

            } else {

//                ddwCountQuery = " select count(*) from( " + ddwDataQuery + " " + staticCondition + " ) ";
                ddwDataQuery = ddwDataQuery + staticCondition;
            }

            if (jsSortCol != null && !jsSortCol.isEmpty() && (jsSortCol.get("sortcol") != null && !"".equals((String) jsSortCol.get("sortcol")))) {

                String sortdatafield = (String) jsSortCol.get("sortcol");
                String sortorder = (String) jsSortCol.get("sortorder");

                //System.out.println("sortorder::" + sortorder + ",  sort datafield:::" + sortdatafield);
                if (sortdatafield != null && sortorder != null
                        && (sortorder.equals("asc") || sortorder.equals("desc"))) {

                    ddwDataQuery = "  " + ddwDataQuery + "  ORDER BY " + sortdatafield + " " + sortorder.toUpperCase();
                    ddwOrderby = "";
                }

            }

            System.out.println("ddwCountQuery :::: " + ddwCountQuery);
            int ddwDataRecordSize = 0;
            Map ddwDataQueryParams = new HashMap();
            String totalRecords = "12"; //Zak
            totalRecords = String.valueOf(excuteCountQuery(ddwCountQuery, selectColumns));
            ddwDataQuery = ddwDataQuery + " " + ddwOrderby;

            System.out.println("ddwDataQuery  >>>>>>>>>FINAL,zak<<<<<<<<<<<<<::" + ddwDataQuery);
            List ddwDataList = access.sqlqueryWithParams(ddwDataQuery, ddwDataQueryParams);
            //System.out.println("ddwDataList size:::" + ddwDataList.size());

            if (ddwDataList != null && !ddwDataList.isEmpty() && ddwDataList.size() > 0) {
                ddwDataRecordSize = ddwDataList.size();
                for (int i = 0; i < ddwDataRecordSize; i++) {
                    Object obj = ddwDataList.get(i);
                    JSONObject jsonRecObjet = null;
                    if (obj instanceof Object[]) {
                        Object drpDwnRec[] = (Object[]) obj;
                        jsonRecObjet = new JSONObject();
                        for (int j = 0; j < selectCols.size(); j++) {
                            if (drpDwnRec[j] instanceof byte[]) {
                                jsonRecObjet.put(selectCols.get(j), (new RAW(drpDwnRec[j])).stringValue());
                            } else {
                                if (drpDwnRec[j] instanceof Clob) {
                                    jsonRecObjet.put(selectCols.get(j), visionUtills.clobToString((Clob) drpDwnRec[j]));
                                } else {
                                    jsonRecObjet.put(selectCols.get(j), drpDwnRec[j]);
                                }
                            }
                        }
                        jsonRecObjet.put("totalRecords", totalRecords);
                    } else {
                        jsonRecObjet = new JSONObject();
                        if (obj instanceof byte[]) {
                            jsonRecObjet.put(selectCols.get(0), (new RAW(obj)).stringValue());
                        } else if (obj instanceof Clob) {
                            jsonRecObjet.put(selectCols.get(0), visionUtills.clobToString((Clob) obj));
                        } else {
                            jsonRecObjet.put(selectCols.get(0), obj);
                        }
                        jsonRecObjet.put("totalRecords", totalRecords);
                    }
                    result.add(jsonRecObjet);
                }
            }
        } catch (Exception e) {

            e.printStackTrace();
        }
        return result;
    }

    //TO FETCH WEBSERVICE DETAILS OF DROPDOWN
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public JSONObject getWebServiceDetailsForDDW(String wsFlag, String wsUrl, HttpServletRequest request) {
        JSONObject result = new JSONObject();
        JSONArray reqestParamsArray = new JSONArray();
        HttpSession session = request.getSession(false);

        try {

            if ((wsFlag != null && !"".equals(wsFlag)) && (wsUrl != null && !"".equals(wsUrl))) {

                if ("Y".equalsIgnoreCase(wsFlag)) {

                    String finalUrl = wsUrl;

                    if ((finalUrl).contains("<<--")) {

                        while (finalUrl.contains("<<--") && finalUrl.contains("-->>")) {

                            //System.out.println("finalUrl.indexOf(<<--) + 4::: "+finalUrl.indexOf("<<--") + 4);
                            //System.out.println("finalUrl.indexOf(-->>)::: "+finalUrl.indexOf("-->>"));
                            String conditionCol = (finalUrl.substring(finalUrl.indexOf("<<--") + 4, finalUrl.indexOf("-->>"))).trim();
                            //System.out.println("conditionCol ::: "+conditionCol);
                            if (conditionCol != null && !"".equals(conditionCol)) {

                                if (conditionCol.startsWith("ss")) {

//                                    String ssValue = (String) session.getAttribute(conditionCol);
                                    String ssValue = String.valueOf(session.getAttribute(conditionCol));
                                    ssValue = ssValue.replace("#", "_");
                                    finalUrl = finalUrl.replaceAll("<<--" + conditionCol + "-->>", ssValue != null ? ssValue : "");

                                } else {

                                    JSONObject obj = new JSONObject();
                                    obj.put("conditionCol", conditionCol);
                                    finalUrl = finalUrl.replaceAll("<<--" + conditionCol + "-->>", "<<" + conditionCol + ">>");
                                    reqestParamsArray.add(obj);
                                }

                            }

                        }

                    }

                    result.put("WS_URL", finalUrl);
                    result.put("REQUEST_PARAMS", reqestParamsArray);
                    String wsURL = wsUrl;
                    if (wsUrl.contains("<<--") && wsUrl.contains("-->>")) {
                        wsURL = wsUrl.substring(0, wsUrl.indexOf("?"));
                    }
                    result.put("IS_WS_UP", visionUtills.isWebServiceUp(wsURL));

                }
                result.put("IS_WS_DDW", visionUtills.convertToBoolean(wsFlag));
//                result.put("IS_WS_UP", visionUtills.isWebServiceUp(wsUrl.substring(0, wsUrl.indexOf("?"))));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        //System.out.println("result >>>>webservice<<< ::: "+result.toJSONString());
        return result;
    }

    @Transactional
    public int excuteCountQuery(String ddwCountQuery, String selectColumns) {
        int count = 0;
        try {
            Map ddwDataQueryParams = new HashMap();
            try {
                System.out.println("ddwCountQuery::B::" + ddwCountQuery);
                System.out.println("ddwCountQuery::A::" + ddwCountQuery);
                List countList = access.sqlqueryWithParams(ddwCountQuery, ddwDataQueryParams);
                if (countList != null && !countList.isEmpty()) {
                    count = visionUtills.convertIntoInteger(countList.get(0));
                }

            } catch (Exception e) {
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return count;
    }

    @Transactional
    public int excutePropDepCntQuery(String classConceptId, String propConceptId) {
        int count = 0;
        Map ddwPropDepCntQueryParams = new HashMap();
        try {
            String ddwPropDepCntQuery = "";
            ddwPropDepCntQuery = "SELECT COUNT(*) FROM DR_CHAR_VALUES_DEPND WHERE"
                    + " CLASS_CONCEPT_ID =:CLASS_CONCEPT_ID AND PROPERTY_CONCEPT_ID =:PROPERTY_CONCEPT_ID";
            ddwPropDepCntQueryParams.put("CLASS_CONCEPT_ID", classConceptId);
            ddwPropDepCntQueryParams.put("PROPERTY_CONCEPT_ID", propConceptId);
            System.out.println("ddwPropDepCntQuery::A::" + ddwPropDepCntQuery);
            List countList = access.sqlqueryWithParams(ddwPropDepCntQuery, ddwPropDepCntQueryParams);
            if (countList != null && !countList.isEmpty()) {
                count = visionUtills.convertIntoInteger(countList.get(0));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return count;
    }

    @Transactional
    public String getOrgnIdByName(String orgname) {
        String orgnId = "";
        try {
            String query = "select orgnId from OrgnStructure where name=:name";
            Map<String, Object> map = new HashMap<>();
            map.put("name", orgname);
            List list = access.queryWithParams(query, map);
            if (list != null && !list.isEmpty()) {
                orgnId = (String) list.get(0);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return orgnId;
    }

    //TO FETCH DROPDOWN RELATIONAL DATA
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public JSONArray relationData(String relId) {

        JSONArray relationDataArr = new JSONArray();
        Object obj = null;

        try {

            String relationsQury = "SELECT   "
                    + "  relation.PARENT_TABLE,"//0
                    + "  relation.CHILD_TABLE, "//1
                    + "  relation.PARENT_FIELD, "//2
                    + "  relation.CHILD_FIELD,"//3
                    + "  relation.REL_ID"//4
                    + "  FROM  DAL_RELATION relation  "
                    + "  WHERE relation.REL_ID = '" + relId + "'";

            Map relationsWherCondtParamsMap = new HashMap();
            List relationsLilst = access.sqlqueryWithParams(relationsQury, relationsWherCondtParamsMap);

            if (relationsLilst != null && !relationsLilst.isEmpty() && relationsLilst.size() > 0) {

                for (int i = 0; i < relationsLilst.size(); i++) {

                    obj = relationsLilst.get(i);
                    JSONObject relRecObj = new JSONObject();

                    if (obj instanceof Object[]) {

                        Object drpDwnRec[] = (Object[]) obj;
                        relRecObj = new JSONObject();

                        //System.out.println("drpDwnRec[1]::::" + drpDwnRec[1]);
                        relRecObj.put("PARENT_TABLE", ((String) drpDwnRec[0]).replaceAll("\\r|\\n", ""));
                        relRecObj.put("CHILD_TABLE", ((String) drpDwnRec[1]).replaceAll("\\r|\\n", ""));
                        relRecObj.put("PARENT_FIELD", ((String) drpDwnRec[2]).replaceAll("\\r|\\n", ""));
                        relRecObj.put("CHILD_FIELD", ((String) drpDwnRec[3]).replaceAll("\\r|\\n", ""));
                        relRecObj.put("REL_ID", ((String) drpDwnRec[4]).replaceAll("\\r|\\n", ""));
                        relationDataArr.add(relRecObj);

                    }

                }

            }

        } catch (Exception e) {
            e.printStackTrace();

        }
        return relationDataArr;
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW, isolation = Isolation.DEFAULT)
    public List getSearchBasketDetails(String orgnId, String roleId, String searchId) {
        List<DalSearchBasket> searchBasketList = new ArrayList<>();
        try {
            String query = " from DalSearchBasket where id.searchId=:searchId and id.roleId=:roleId and id.orgnId=:orgnId";
            Map<String, Object> searchBasketMap = new HashMap<>();
            searchBasketMap.put("searchId", searchId);
            searchBasketMap.put("roleId", roleId);
            searchBasketMap.put("orgnId", orgnId);
            searchBasketList = access.queryWithParams(query, searchBasketMap);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return searchBasketList;
    }

    public JSONObject gridinfoData(HttpServletRequest request) {
        Map<String, Object> map = new HashMap<String, Object>();
        String filterString = "";
        JSONArray jsArray = null;
        JSONObject jsObject = null;

        JSONObject filtersortCols = new JSONObject();
        try {
            jsArray = new JSONArray();
            String where = "";
            Integer filterscount = 0;
            String filtercondition = request.getParameter("filtercondition");
            String filterdatafield = request.getParameter("filterdatafield");
            String filtervalue = request.getParameter("filtervalue");
            if (null != request.getParameter("filterscount")) {
                try {
                    filterscount = Integer.parseInt(request.getParameter("filterscount"));
                } catch (NumberFormatException nfe) {
                    map.put("status", "failure");
                    map.put("reason", nfe.getLocalizedMessage() + ", at filterscount");

                }

            }

            if (filterscount > 0) {
                where = "  (";
                String tmpdatafield = "";
                String tmpfilteroperator = "";

                for (Integer i = 0; i < filterscount; i++) {
                    filtervalue = request.getParameter("filtervalue" + i);
                    filtervalue = filtervalue.toLowerCase();
                    System.out.println("filtervalue:::B:::" + filtervalue);
                    if (filtervalue != null && filtervalue.contains(" 00:00:00")) {
                        filtervalue = filtervalue.replaceAll(" 00:00:00", "");
                    }
                    if (filtervalue != null && filtervalue.contains(" 23:59:59")) {
                        filtervalue = filtervalue.replaceAll(" 23:59:59", "");
                    }
                    System.out.println("filtervalue:::A:::" + filtervalue);
                    filtercondition = request.getParameter("filtercondition" + i);
                    filterdatafield = request.getParameter("filterdatafield" + i);
                    filterdatafield = filterdatafield.replaceAll("([^A-Za-z0-9_])", "");
                    String filteroperator = request.getParameter("filteroperator" + i);
                    jsObject = new JSONObject();
                    jsObject.put("column", filterdatafield);
                    jsObject.put("value", filtervalue);
                    jsObject.put("condition", filtercondition);
                    jsArray.add(jsObject);

                }

                filtersortCols.put("filtercols", jsArray);
            } else {
                jsArray = new JSONArray();
                filtersortCols.put("filtercols", jsArray);
            }
            String orderby = "";
            String sortdatafield = request.getParameter("sortdatafield");
            String sortorder = request.getParameter("sortorder");

            ////System.out.println("sortorder::" + sortorder + ",  sort datafield:::" + sortdatafield);
            if (sortdatafield != null && sortorder != null
                    && (sortorder.equals("asc") || sortorder.equals("desc"))) {
                sortdatafield = sortdatafield.replaceAll("([^A-Za-z0-9_])", "");

                orderby = "order by " + sortdatafield + " " + sortorder;
                jsObject = new JSONObject();
                jsObject.put("sortcol", sortdatafield);
                jsObject.put("sortorder", sortorder);
                //System.out.println("sort order::" + sortorder);
                filtersortCols.put("sortcol", jsObject);
            } else {
                jsObject = new JSONObject();
                jsObject.put("sortcol", "");
                jsObject.put("sortorder", "");
                filtersortCols.put("sortcol", jsObject);
            }

            //Integer pagenum = 0;
            Integer pagenum = request.getParameter("pagenum") != null && !"nan".equalsIgnoreCase(request.getParameter("pagenum")) ? Integer.parseInt(request.getParameter("pagenum")) : 1;
            Integer pagesize = request.getParameter("pagesize") != null && !"nan".equalsIgnoreCase(request.getParameter("pagesize")) ? Integer.parseInt(request.getParameter("pagesize")) : 10;
            Integer recordEndIndex = request.getParameter("recordendindex") != null && !"nan".equalsIgnoreCase(request.getParameter("recordendindex")) ? Integer.parseInt(request.getParameter("recordendindex")) : 10;
            Integer recordStartIndex = request.getParameter("recordstartindex") != null && !"nan".equalsIgnoreCase(request.getParameter("recordstartindex")) ? Integer.parseInt(request.getParameter("recordstartindex")) : 10;

            filtersortCols.put("pageno", pagenum);
            filtersortCols.put("pagesize", pagesize);

         ////System.out.println("filtercols::" + filtersortCols.toJSONString());
        } catch (Exception e) {

            e.printStackTrace();
//            map.put("status", "failure");
//            map.put("reason", e.getLocalizedMessage());
            filtersortCols.put("status", "failure");
            filtersortCols.put("reason", e.getLocalizedMessage());

        }
        return filtersortCols;
    }

}
