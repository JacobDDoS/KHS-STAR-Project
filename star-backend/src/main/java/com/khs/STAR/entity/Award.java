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
public class Award {


    @Id
    @SequenceGenerator(
            name = "award_sequence",
            sequenceName = "award_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "award_sequence"
    )
    private Long id;

    private String membersOfAward;
    private Date date;
    private String awardName;

    @Column(columnDefinition = "TEXT")
    private String pictureOfAwardURL;

    @Column(length=1000)
    private String description;
}
