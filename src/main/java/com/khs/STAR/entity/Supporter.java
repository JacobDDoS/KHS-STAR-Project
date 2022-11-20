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
public class Supporter {


    @Id
    @SequenceGenerator(
            name = "supporter_sequence",
            sequenceName = "supporter_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "supporter_sequence"
    )
    private Long id;

    private String companyName;
    private String logoURL;
    private String link;

}
