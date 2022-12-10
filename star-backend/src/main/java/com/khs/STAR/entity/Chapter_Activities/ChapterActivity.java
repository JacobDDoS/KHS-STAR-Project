package com.khs.STAR.entity.Chapter_Activities;

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
public class ChapterActivity {


    @Id
    @SequenceGenerator(
            name = "chapterActivity_sequence",
            sequenceName = "chapterActivity_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "chapterActivity_sequence"
    )
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String photoURL;
    private Date startDate;
    private Date endDate;
    private String nameOfActivity;

    @Column(length=1000)
    private String description;
}
