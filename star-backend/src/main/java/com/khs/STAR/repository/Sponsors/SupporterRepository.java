package com.khs.STAR.repository.Sponsors;

import com.khs.STAR.entity.Sponsors.Supporter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupporterRepository extends JpaRepository<Supporter, Long> {
}
