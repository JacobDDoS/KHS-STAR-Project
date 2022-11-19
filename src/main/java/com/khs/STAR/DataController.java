package com.khs.STAR;

import com.khs.STAR.entity.Award;
import com.khs.STAR.repository.AwardRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;

@Controller
@RequestMapping("/")
public class DataController {

    AwardRepository awardRepository;

    public DataController(AwardRepository awardRepository) {
        this.awardRepository = awardRepository;
    }

    @PostMapping("addAward")
    public Award addAward(String members,
                          Date date,
                          String awardName,
                          String pictureURL,
                          String description) {
        Award award = Award.builder()
                .membersOfAward(members)
                .date(date)
                .awardName(awardName)
                .pictureOfAwardURL(pictureURL)
                .description(description)
                .build();

        awardRepository.save(award);
        return award;
    }

}
