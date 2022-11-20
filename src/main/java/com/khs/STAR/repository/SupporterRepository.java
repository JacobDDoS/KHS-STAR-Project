package com.khs.STAR.repository;

import com.khs.STAR.entity.Supporter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupporterRepository extends JpaRepository<Supporter, Long> {
}
