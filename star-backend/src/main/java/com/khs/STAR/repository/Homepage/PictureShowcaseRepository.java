package com.khs.STAR.repository.Homepage;

import com.khs.STAR.entity.Homepage.PictureShowcase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PictureShowcaseRepository extends JpaRepository<PictureShowcase, Long> {
    PictureShowcase findTopByOrderByIdDesc();
}
