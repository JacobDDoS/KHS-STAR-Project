package com.khs.STAR.repository.Chapter_Officers;

import com.khs.STAR.entity.Chapter_Officers.Officer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfficerRepository extends JpaRepository<Officer, Long> {
}
