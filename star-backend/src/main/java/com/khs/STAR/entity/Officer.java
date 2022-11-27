package com.khs.STAR.entity;

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
public class Officer {


    @Id
    @SequenceGenerator(
            name = "officer_sequence",
            sequenceName = "officer_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "officer_sequence"
    )
    private Long id;

    private String officerName;
    private String officerPosition;
    private Date startTime;
    private Date endTime;

    @Column(length=1000)
    private String chapterResponsibilities;

    @Column(length=1000)
    private String chapterServiceOrCareerGoals;
    private String email;

    @Column(columnDefinition = "TEXT")
    private String photoURL;
}
