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
public class Source {


    @Id
    @SequenceGenerator(
            name = "source_sequence",
            sequenceName = "source_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "source_sequence"
    )
    private Long id;

    private String source;
}
