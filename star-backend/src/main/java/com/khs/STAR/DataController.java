package com.khs.STAR;

import com.khs.STAR.entity.Awards.Award;
import com.khs.STAR.entity.Bibliography.Source;
import com.khs.STAR.entity.Chapter_Activities.ChapterActivity;
import com.khs.STAR.entity.Chapter_Officers.Officer;
import com.khs.STAR.entity.Contacts.ContactInfo;
import com.khs.STAR.entity.Planned_Program_of_Work.ProgramOfWork;
import com.khs.STAR.entity.Sponsors.Supporter;
import com.khs.STAR.repository.*;
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

    @PostMapping("/api/add/Award")
    public Award addAward(@RequestBody Award award) {
        awardRepository.save(award);
        return award;
    }

    @PostMapping("/api/add/ChapterActivity")
    public ChapterActivity addChapterActivity(@RequestBody ChapterActivity chapterActivity) {
        chapterActivityRepository.save(chapterActivity);
        return chapterActivity;
    }

    @PostMapping("/api/add/ContactInfo")
    public ContactInfo addContactInfo(@RequestBody ContactInfo contactInfo) {
        contactInfoRepository.save(contactInfo);
        return contactInfo;
    }

    @PostMapping("/api/add/Officer")
    public Officer addOfficer(@RequestBody Officer officer) {
        officerRepository.save(officer);
        return officer;
    }

    @PostMapping("/api/add/ProgramOfWork")
    public ProgramOfWork addProgramOfWork(@RequestBody ProgramOfWork programOfWork) {
        programOfWorkRepository.save(programOfWork);
        return programOfWork;
    }

    @PostMapping("/api/add/Source")
    public Source addSource(@RequestBody Source source) {
        sourceRepository.save(source);
        return source;
    }

    @PostMapping("/api/add/Supporter")
    public Supporter addSupporter(@RequestBody Supporter supporter) {
        supporterRepository.save(supporter);
        return supporter;
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
