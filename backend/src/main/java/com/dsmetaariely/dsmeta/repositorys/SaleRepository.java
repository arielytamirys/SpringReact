package com.dsmetaariely.dsmeta.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dsmetaariely.dsmeta.entity.Sales;

@Repository
public interface SaleRepository extends JpaRepository<Sales, Long> {

}
