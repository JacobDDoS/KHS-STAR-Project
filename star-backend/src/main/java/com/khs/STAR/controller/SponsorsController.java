package com.khs.STAR.controller;

import com.khs.STAR.entity.Sponsors.Supporter;
import com.khs.STAR.repository.Sponsors.SupporterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class SponsorsController {
    SupporterRepository supporterRepository;

    @Autowired
    public SponsorsController(SupporterRepository supporterRepository) {
        this.supporterRepository = supporterRepository;
    }

    @PostMapping("api/add/Supporter")
    public Supporter addSupporter(@RequestBody Supporter supporter) {
        supporterRepository.save(supporter);
        return supporter;
    }

    @GetMapping("Supporter")
    public List<Supporter> getAllSupporters() {
        return supporterRepository.findAll();
    }


    @PutMapping(value = "api/update/Supporter/{supporterId}",
            consumes = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String updateSupporter(@PathVariable Long supporterId, @RequestBody Supporter supporterDetails) {
        Supporter supporterToUpdate = supporterRepository.getReferenceById(supporterId);

        supporterToUpdate.setCompanyName(supporterDetails.getCompanyName());
        supporterToUpdate.setLogoURL(supporterDetails.getLogoURL());
        supporterToUpdate.setLink(supporterDetails.getLink());
        supporterToUpdate.setDescription(supporterDetails.getDescription());
        supporterRepository.save(supporterToUpdate);
        return "updated Supporter #" + supporterId;
    }

    @DeleteMapping("api/delete/Supporter/{supporterId}")
    public String deleteSupporter(@PathVariable Long supporterId) {
        supporterRepository.deleteById(supporterId);

        return "Deleted Supporter #" + supporterId;
    }
}