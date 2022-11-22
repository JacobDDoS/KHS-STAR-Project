package com.khs.STAR.repository;

import com.khs.STAR.entity.ProgramOfWork;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProgramOfWorkRepository extends JpaRepository<ProgramOfWork, Long> {
    ProgramOfWork findTopByOrderByIdDesc();
}
