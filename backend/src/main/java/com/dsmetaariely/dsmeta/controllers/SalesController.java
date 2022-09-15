package com.dsmetaariely.dsmeta.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dsmetaariely.dsmeta.entity.Sales;
import com.dsmetaariely.dsmeta.services.SaleServices;
import com.dsmetaariely.dsmeta.services.SmsService;

@RestController
@RequestMapping(value = "/sales")
public class SalesController {
	
	@Autowired
	private SaleServices service;
	@Autowired
	private SmsService smsserver;
	
	
	@GetMapping
	public Page<Sales> findSales(
			@RequestParam(value="minDate", defaultValue = "") String minDate,
			@RequestParam(value="maxDate", defaultValue = "") String maxDate,
			Pageable pageable){
		return service.findSales(minDate, maxDate, pageable );
	
	}
	public void notify() {
		
	}
}
