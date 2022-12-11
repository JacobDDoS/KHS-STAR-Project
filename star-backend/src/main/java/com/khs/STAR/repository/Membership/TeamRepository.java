package com.khs.STAR.repository.Membership;

import com.khs.STAR.entity.Membership.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {
}
