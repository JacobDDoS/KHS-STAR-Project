package com.khs.STAR.repository.Membership;

import com.khs.STAR.entity.Membership.MembershipInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MembershipInfoRepository extends JpaRepository<MembershipInfo, Long> {
}
