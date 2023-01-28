package com.khs.STAR.controller;

import com.khs.STAR.entity.Bibliography.Source;
import com.khs.STAR.entity.Membership.*;
import com.khs.STAR.repository.Bibliography.SourceRepository;
import com.khs.STAR.repository.Membership.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class MembershipController {
    CommitteeRepository committeeRepository;
    MembershipInfoRepository membershipInfoRepository;
    MilestoneRepository milestoneRepository;
    RecruitmentActivitiesRepository recruitmentActivitiesRepository;
    TeamRepository teamRepository;

    @Autowired
    public MembershipController(CommitteeRepository committeeRepository, MembershipInfoRepository membershipInfoRepository, MilestoneRepository milestoneRepository, RecruitmentActivitiesRepository recruitmentActivitiesRepository, TeamRepository teamRepository) {
        this.committeeRepository = committeeRepository;
        this.membershipInfoRepository = membershipInfoRepository;
        this.milestoneRepository = milestoneRepository;
        this.recruitmentActivitiesRepository = recruitmentActivitiesRepository;
        this.teamRepository = teamRepository;
    }

// GET endpoints

    @GetMapping("Committee")
    public List<Committee> getAllCommittees() {
        return committeeRepository.findAll();
    }

    @GetMapping("MembershipInfo")
    public MembershipInfo getAllMembershipInfo() {
        return membershipInfoRepository.findAll().get(0);
    }

    @GetMapping("Milestone")
    public List<Milestone> getAllMilestones() {
        return milestoneRepository.findAll();
    }

    @GetMapping("RecruitmentActivity")
    public List<RecruitmentActivities> getAllRecruitmentActivities() {
        return recruitmentActivitiesRepository.findAll();
    }

    @GetMapping("Team")
    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }


    // POST endpoints

    @PostMapping("api/add/Committee")
    public Committee addCommittee(@RequestBody Committee committee) {
        committeeRepository.save(committee);
        return committee;
    }

    @PostMapping("api/add/MembershipInfo")
    public MembershipInfo addMembershipInfo(@RequestBody MembershipInfo membershipInfo) {
        membershipInfoRepository.save(membershipInfo);
        return membershipInfo;
    }

    @PostMapping("api/add/Milestone")
    public Milestone addMilestone(@RequestBody Milestone milestone) {
        milestoneRepository.save(milestone);
        return milestone;
    }

    @PostMapping("api/add/RecruitmentActivity")
    public RecruitmentActivities addRecruitmentActivity(@RequestBody RecruitmentActivities recruitmentActivities) {
        recruitmentActivitiesRepository.save(recruitmentActivities);
        return recruitmentActivities;
    }

    @PostMapping("api/add/Team")
    public Team addTeam(@RequestBody Team team) {
        teamRepository.save(team);
        return team;
    }


    // PUT endpoints

    @PutMapping(value = "api/update/Committee/{committeeId}",
            consumes = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String updateCommittee(@PathVariable Long committeeId, @RequestBody Committee committee) {
        Committee committeeToUpdate = committeeRepository.getReferenceById(committeeId);

        committeeToUpdate.setName(committee.getName());
        committeeToUpdate.setRunTime(committee.getRunTime());
        committeeToUpdate.setMembers(committee.getMembers());
        committeeToUpdate.setPhotoURL(committee.getPhotoURL());
        committeeToUpdate.setDescription(committee.getDescription());
        committeeToUpdate.setAccomplishments(committee.getAccomplishments());
        committeeRepository.save(committeeToUpdate);
        return "updated Committee #" + committeeId;
    }

    @PutMapping(value = "api/update/MembershipInfo/{membershipInfoId}",
            consumes = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String updateMembershipInfo(@PathVariable Long membershipInfoId, @RequestBody MembershipInfo membershipInfo) {
        MembershipInfo membershipInfoToUpdate = membershipInfoRepository.getReferenceById(membershipInfoId);

        membershipInfoToUpdate.setCost(membershipInfo.getCost());
        membershipInfoToUpdate.setBenefits(membershipInfo.getBenefits());
        membershipInfoToUpdate.setDeadline(membershipInfo.getDeadline());
        membershipInfoRepository.save(membershipInfoToUpdate);
        return "updated MembershipInfo #" + membershipInfoId;
    }

    @PutMapping(value = "api/update/Milestone/{milestoneId}",
            consumes = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String updateMilestone(@PathVariable Long milestoneId, @RequestBody Milestone milestone) {
        Milestone milestoneToUpdate = milestoneRepository.getReferenceById(milestoneId);

        milestoneToUpdate.setYear(milestone.getYear());
        milestoneToUpdate.setNumberOfMembers(milestone.getNumberOfMembers());
        milestoneToUpdate.setNumberOfCompetitiveEvents(milestone.getNumberOfCompetitiveEvents());
        milestoneToUpdate.setYearlyAccomplishments(milestone.getYearlyAccomplishments());

        milestoneRepository.save(milestoneToUpdate);
        return "updated Milestone #" + milestoneId;
    }

    @PutMapping(value = "api/update/RecruitmentActivity/{recruitmentActivityId}",
            consumes = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String updateMilestone(@PathVariable Long recruitmentActivityId, @RequestBody RecruitmentActivities recruitmentActivity) {
        RecruitmentActivities recruitmentActivityToUpdate = recruitmentActivitiesRepository.getReferenceById(recruitmentActivityId);

        recruitmentActivityToUpdate.setTitle(recruitmentActivity.getTitle());
        recruitmentActivityToUpdate.setDate(recruitmentActivity.getDate());
        recruitmentActivityToUpdate.setDescription(recruitmentActivity.getDescription());
        recruitmentActivityToUpdate.setPhotoURL(recruitmentActivity.getPhotoURL());
        recruitmentActivitiesRepository.save(recruitmentActivityToUpdate);
        return "updated Recruitment Activity #" + recruitmentActivityId;
    }

    @PutMapping(value = "api/update/Team/{teamId}",
            consumes = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String updateMilestone(@PathVariable Long teamId, @RequestBody Team team) {
        Team teamToUpdate = teamRepository.getReferenceById(teamId);

        teamToUpdate.setTeamCaptains(team.getTeamCaptains());
        teamToUpdate.setMembers(team.getMembers());
        teamToUpdate.setScore(team.getScore());
        teamRepository.save(teamToUpdate);
        return "updated Team #" + teamId;
    }

    // DELETE endpoints

    @DeleteMapping("api/delete/Committee/{committeeId}")
    public String deleteCommittee(@PathVariable Long committeeId) {
        committeeRepository.deleteById(committeeId);
        return "Deleted Committee #" + committeeId;
    }

    @DeleteMapping("api/delete/MembershipInfo/{membershipInfoId}")
    public String deleteMembershipInfo(@PathVariable Long membershipInfoId) {
        membershipInfoRepository.deleteById(membershipInfoId);
        return "Deleted MembershipInfo #" + membershipInfoId;
    }

    @DeleteMapping("api/delete/Milestone/{milestoneId}")
    public String deleteMilestone(@PathVariable Long milestoneId) {
        milestoneRepository.deleteById(milestoneId);
        return "Deleted Milestone #" + milestoneId;
    }

    @DeleteMapping("api/delete/RecruitmentActivity/{recruitmentActivityId}")
    public String deleteRecruitmentActivity(@PathVariable Long recruitmentActivityId) {
        recruitmentActivitiesRepository.deleteById(recruitmentActivityId);
        return "Deleted RecruitmentActivity #" + recruitmentActivityId;
    }

    @DeleteMapping("api/delete/Team/{teamId}")
    public String deleteTeam(@PathVariable Long teamId) {
        teamRepository.deleteById(teamId);
        return "Deleted Team #" + teamId;
    }

}






//@GetMapping("sources")
//    public List<Source> getSources() {
//        return sourceRepository.findAll();
//    }
