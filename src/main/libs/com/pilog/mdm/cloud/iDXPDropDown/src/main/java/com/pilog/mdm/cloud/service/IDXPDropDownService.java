/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pilog.mdm.cloud.service;

import com.pilog.mdm.cloud.DAO.IDXPDropDownDAO;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * 
 */
@Service
public class IDXPDropDownService {
    @Autowired
    private IDXPDropDownDAO genericDropDownDAO;
     public String genericDropDown(HttpServletRequest request) {
        return genericDropDownDAO.genericDropDown(request);
    }
       //  GET DROPDOWN DATA
    public String getDropDownData(HttpServletRequest request) {

        String result = "";

        try {

            result = genericDropDownDAO.getDropDownData(request).toJSONString();

        } catch (Exception e) {
            e.printStackTrace();

        }

        return result;
    }
}
