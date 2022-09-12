package com.dsmetaariely.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsmetaariely.dsmeta.entity.Sales;
import com.dsmetaariely.dsmeta.repositorys.SaleRepository;

@Service
public class SaleServices {
	
	@Autowired
	private SaleRepository repository;
	
	public List <Sales>findSales() {
		return repository.findAll();
	}
}
