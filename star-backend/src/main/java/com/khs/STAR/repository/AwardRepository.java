package com.khs.STAR.repository;

import com.khs.STAR.entity.Awards.Award;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AwardRepository extends JpaRepository<Award, Long> {
}
