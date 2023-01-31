package com.khs.STAR.entity.Membership;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Milestone {


    @Id
    @SequenceGenerator(
            name = "Milestone_sequence",
            sequenceName = "Milestone_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "Milestone_sequence"
    )
    private Long id;

    private String year;
    private String numberOfMembers;
    private String numberOfCompetitiveEvents;

    @Column(length = 5000)
    private String yearlyAccomplishments;

    @Column(length = 2000)
    private String highlightedMembers;
}
