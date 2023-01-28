package com.khs.STAR.controller;

import com.khs.STAR.entity.Chapter_Officers.Officer;
import com.khs.STAR.repository.Chapter_Officers.OfficerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class ChapterOfficersController {
    OfficerRepository officerRepository;

    @Autowired
    public ChapterOfficersController(OfficerRepository officerRepository) {
        this.officerRepository = officerRepository;
    }

    @PostMapping("api/add/Officer")
    public Officer addOfficer(@RequestBody Officer officer) {
        officerRepository.save(officer);
        return officer;
    }

    @GetMapping("Officer")
    public List<Officer> getAllOfficers() {
        return officerRepository.findAll();
    }


    @PutMapping(value = "api/update/Officer/{officerId}",
            consumes = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String updateOfficer(@PathVariable Long officerId, @RequestBody Officer officer) {
        Officer officerToUpdate = officerRepository.getReferenceById(officerId);

        officerToUpdate.setOfficerName(officer.getOfficerName());
        officerToUpdate.setOfficerPosition(officer.getOfficerPosition());
        officerToUpdate.setStartTime(officer.getStartTime());
        officerToUpdate.setEndTime(officer.getEndTime());
        officerToUpdate.setChapterResponsibilities(officer.getChapterResponsibilities());
        officerToUpdate.setChapterServiceOrCareerGoals(officer.getChapterServiceOrCareerGoals());
        officerToUpdate.setEmail(officer.getEmail());
        officerToUpdate.setPhotoURL(officer.getPhotoURL());

        officerRepository.save(officerToUpdate);
        return "updated Officer #" + officerId;
    }

    @DeleteMapping("api/delete/Officer/{officerId}")
    public String deleteOfficer(@PathVariable Long officerId) {
        officerRepository.deleteById(officerId);

        return "Deleted Officer #" + officerId;
    }
}