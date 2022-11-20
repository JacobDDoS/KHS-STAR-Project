package com.khs.STAR.repository;

import com.khs.STAR.entity.ChapterActivity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChapterActivityRepository extends JpaRepository<ChapterActivity, Long> {
}
