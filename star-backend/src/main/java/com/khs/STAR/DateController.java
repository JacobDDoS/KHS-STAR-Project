package com.khs.STAR;

import com.khs.STAR.entity.Awards.Award;
import com.khs.STAR.entity.Bibliography.Source;
import com.khs.STAR.entity.Chapter_Activities.ChapterActivity;
import com.khs.STAR.entity.Chapter_Officers.Officer;
import com.khs.STAR.entity.Contacts.ContactInfo;
import com.khs.STAR.entity.Planned_Program_of_Work.ProgramOfWork;
import com.khs.STAR.entity.Sponsors.Supporter;
import com.khs.STAR.repository.Awards.AwardRepository;
import com.khs.STAR.repository.Bibliography.SourceRepository;
import com.khs.STAR.repository.Chapter_Activities.ChapterActivityRepository;
import com.khs.STAR.repository.Chapter_Officers.OfficerRepository;
import com.khs.STAR.repository.Contacts.ContactInfoRepository;
import com.khs.STAR.repository.Planned_Program_of_Work.ProgramOfWorkRepository;
import com.khs.STAR.repository.Sponsors.SupporterRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/")
public class DateController {

    @GetMapping("date")
    public Date getDate() {
        Date date = new Date();
        return date;
    }

}
