package com.dsmetaariely.dsmeta.repositorys;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dsmetaariely.dsmeta.entity.Sales;

@Repository
public interface SaleRepository extends JpaRepository<Sales, Long> {
	
	@Query("SELECT obj FROM Sales obj WHERE obj.date BETWEEN :min AND :max ORDER BY obj.amount DESC")
	Page<Sales>findSales(LocalDate min, LocalDate max, Pageable pageable);
}

