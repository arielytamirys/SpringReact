package com.dsmetaariely.dsmeta.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dsmetaariely.dsmeta.entity.Sales;
import com.dsmetaariely.dsmeta.services.SaleServices;

@RestController
@RequestMapping(value = "/sales")
public class SalesController {
	
	@Autowired
	private SaleServices service;
	
	@GetMapping
	public List<Sales> findSales(){
		return service.findSales();
	
	
	
	}
}
