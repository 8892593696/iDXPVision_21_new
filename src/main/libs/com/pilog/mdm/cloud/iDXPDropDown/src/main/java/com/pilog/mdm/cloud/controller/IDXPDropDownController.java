/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pilog.mdm.cloud.controller;

import com.pilog.mdm.cloud.service.IDXPDropDownService;
import jakarta.servlet.http.HttpServletRequest;
import org.json.simple.JSONArray;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * 
 */
//@CrossOrigin(origins = "https://imdrm.pilog.in/WSRep/PartNumberServlet", allowedHeaders = "*")
@Controller
public class IDXPDropDownController {
    
     @Autowired
    private IDXPDropDownService genericDropDownService;
     
        @RequestMapping(value = "/genericDropDown", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
    public @ResponseBody
    String genericDropDown(HttpServletRequest request) {
        String result = "";
        try {

            result = genericDropDownService.genericDropDown(request);

        } catch (Exception e) {

            e.printStackTrace();
        }
        return result;
    }
//    @CrossOrigin("https://imdrm.pilog.in/")
    @RequestMapping(value = "/getDropDownData", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public @ResponseBody
    JSONArray getDropDownData(HttpServletRequest request) {

        String result = "";
JSONArray resultArary = new JSONArray();
        try {
//request.setCharacterEncoding("utf-8");
            result = genericDropDownService.getDropDownData(request);
            if (result != null && !"".equalsIgnoreCase(result)) {
                resultArary = (JSONArray)JSONValue.parse(result);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return resultArary;

    }
}
