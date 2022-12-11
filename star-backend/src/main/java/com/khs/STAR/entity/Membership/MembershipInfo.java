package com.khs.STAR.entity.Membership;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MembershipInfo {


    @Id
    @SequenceGenerator(
            name = "MembershipInfo_sequence",
            sequenceName = "MembershipInfo_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "MembershipInfo_sequence"
    )
    private Long id;

    private String cost;

    @Column(length = 1000)
    private String benefits;
    private Date deadline;
}
