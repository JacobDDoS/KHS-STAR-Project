package com.khs.STAR.repository.Chapter_Activities;

import com.khs.STAR.entity.Chapter_Activities.ChapterActivity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChapterActivityRepository extends JpaRepository<ChapterActivity, Long> {
}
