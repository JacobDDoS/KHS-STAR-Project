package com.khs.STAR.repository.Bibliography;

import com.khs.STAR.entity.Bibliography.Source;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SourceRepository extends JpaRepository<Source, Long> {
}
