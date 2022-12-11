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
public class Team {


    @Id
    @SequenceGenerator(
            name = "Team_sequence",
            sequenceName = "Team_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "Team_sequence"
    )
    private Long id;

    private String teamCaptains;
    private String members;
    private String score;

}
