package com.khs.STAR;

import com.khs.STAR.entity.*;
import com.khs.STAR.repository.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/api/addAward")
    public Award addAward(@RequestBody Award award) {
        awardRepository.save(award);
        return award;
    }

    @GetMapping("date")
    public Date getDate() {
        Date date = new Date();
        return date;
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
