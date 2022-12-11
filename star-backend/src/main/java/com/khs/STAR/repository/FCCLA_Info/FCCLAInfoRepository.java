package com.khs.STAR.repository.FCCLA_Info;

import com.khs.STAR.entity.FCCLA_Info.FCCLAInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FCCLAInfoRepository extends JpaRepository<FCCLAInfo, Long> {
    FCCLAInfo findTopByOrderByIdDesc();
}
