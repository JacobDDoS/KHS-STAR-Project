package com.khs.STAR;

import com.khs.STAR.entity.*;
import com.khs.STAR.repository.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/")
public class DataController {

    AwardRepository awardRepository;
    ChapterActivityRepository chapterActivityRepository;
    ContactInfoRepository contactInfoRepository;
    OfficerRepository officerRepository;
    ProgramOfWorkRepository programOfWorkRepository;
    SourceRepository sourceRepository;
    SupporterRepository supporterRepository;

    public DataController(AwardRepository awardRepository, ChapterActivityRepository chapterActivityRepository, ContactInfoRepository contactInfoRepository, OfficerRepository officerRepository, ProgramOfWorkRepository programOfWorkRepository, SourceRepository sourceRepository, SupporterRepository supporterRepository) {
        this.awardRepository = awardRepository;
        this.chapterActivityRepository = chapterActivityRepository;
        this.contactInfoRepository = contactInfoRepository;
        this.officerRepository = officerRepository;
        this.programOfWorkRepository = programOfWorkRepository;
        this.sourceRepository = sourceRepository;
        this.supporterRepository = supporterRepository;
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

    @GetMapping("awards")
    public List<Award> getAllAwards() {
        return awardRepository.findAll();
    }

    @GetMapping("chapterActivities")
    public List<ChapterActivity> getAllChapterActivities() {
        return chapterActivityRepository.findAll();
    }

    @GetMapping("contactInfo")
    public List<ContactInfo> getAllContactInfo() {
        return contactInfoRepository.findAll();
    }

    @GetMapping("officers")
    public List<Officer> getAllOfficers() {
        return officerRepository.findAll();
    }

    @GetMapping("programOfWork")
    public ProgramOfWork getProgramOfWork() {
        return programOfWorkRepository.findTopByOrderByIdDesc();
    }

    @GetMapping("sources")
    public List<Source> getSources() {
        return sourceRepository.findAll();
    }

    @GetMapping("supporters")
    public List<Supporter> getAllSupporters() {
        return supporterRepository.findAll();
    }

}
