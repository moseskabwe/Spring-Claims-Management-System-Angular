package com.simplehomeinsurance.claims_management_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.simplehomeinsurance.claims_management_system.entity.PolicyHolder;
import com.simplehomeinsurance.claims_management_system.service.PolicyHolderService;

@RestController
@RequestMapping("/api")
public class PolicyHolderRestController {
	@Autowired
	private PolicyHolderService policyHolderService;	
	
	@GetMapping("/policyholders")
	public List<PolicyHolder> getPolicyholders(@RequestParam(value = "searchTerm", required = false) String searchTerm) {	
		if (searchTerm != null) {
		    return policyHolderService.searchPolicyHolders(searchTerm);	
		} else {
		    return policyHolderService.getPolicyHolderList();    	    
		}
	}
	
	@GetMapping("/policyholders/{policyHolderNumber}")
	public PolicyHolder getPolicyholder(@PathVariable("policyHolderNumber") 
										  String policyholderNumber) {
		return policyHolderService.getPolicyHolder(policyholderNumber);
	}
}
