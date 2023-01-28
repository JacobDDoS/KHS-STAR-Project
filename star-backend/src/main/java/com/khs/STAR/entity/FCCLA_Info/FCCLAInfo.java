package com.khs.STAR.entity.FCCLA_Info;

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
public class FCCLAInfo {


    @Id
    @SequenceGenerator(
            name = "FCCLAInfo_sequence",
            sequenceName = "FCCLAInfo_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "FCCLAInfo_sequence"
    )
    private Long id;

    private String dosAndDonts;
    private String nationalPrograms;
    private String careerPathways;

    @Column(length=1000)
    private String creed;
    private String motto;
    private String tagLine;
    private String nationalTheme;
    private String stateTheme;
    private String chapterTheme;
    private String flower;
    private String colorsAndDefinitions;
    private String websiteLinks;
}
