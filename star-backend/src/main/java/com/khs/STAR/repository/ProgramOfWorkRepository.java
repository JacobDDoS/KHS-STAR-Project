package com.khs.STAR.repository;

import com.khs.STAR.entity.Planned_Program_of_Work.ProgramOfWork;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProgramOfWorkRepository extends JpaRepository<ProgramOfWork, Long> {
    ProgramOfWork findTopByOrderByIdDesc();
}
