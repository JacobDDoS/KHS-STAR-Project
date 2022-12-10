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
public class RecruitmentActivities {


    @Id
    @SequenceGenerator(
            name = "RecruitmentActivities_sequence",
            sequenceName = "RecruitmentActivities_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "RecruitmentActivities_sequence"
    )
    private Long id;

    private String title;
    private Date date;

    @Column(length = 1000)
    private String description;

    @Column(columnDefinition = "TEXT")
    private String photoURL;

}
