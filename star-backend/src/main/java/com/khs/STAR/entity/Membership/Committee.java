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
public class Committee {


    @Id
    @SequenceGenerator(
            name = "Committee_sequence",
            sequenceName = "Committee_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "Committee_sequence"
    )
    private Long id;

    private String name;
    private String runTime;

    @Column(length = 1000)
    private String members;

    @Column(columnDefinition = "TEXT")
    private String photoURL;

    @Column(length = 1000)
    private String description;

    @Column(length = 1000)
    private String accomplishments;
}
