package com.khs.STAR.entity.Homepage;

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
public class PictureShowcase {


    @Id
    @SequenceGenerator(
            name = "PictureShowcase_sequence",
            sequenceName = "PictureShowcase_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "PictureShowcase_sequence"
    )
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String URLToPicture;
}
