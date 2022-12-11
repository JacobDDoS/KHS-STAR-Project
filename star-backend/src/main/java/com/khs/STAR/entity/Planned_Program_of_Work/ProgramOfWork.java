package com.khs.STAR.entity.Planned_Program_of_Work;

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
public class ProgramOfWork {


    @Id
    @SequenceGenerator(
            name = "programOfWork_sequence",
            sequenceName = "programOfWork_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "programOfWork_sequence"
    )
    private Long id;

    private String linkToPDFOfChapterProgramOfWork;
}
