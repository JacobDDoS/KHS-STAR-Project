package com.khs.STAR.controller;

import com.khs.STAR.entity.Awards.Award;
import com.khs.STAR.repository.Awards.AwardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class AwardController {
    AwardRepository awardRepository;

    @Autowired
    public AwardController(AwardRepository awardRepository) {
        this.awardRepository = awardRepository;
    }

    @PostMapping("api/add/Award")
    public Award addAward(@RequestBody Award award) {
        awardRepository.save(award);
        return award;
    }

    @GetMapping("awards")
    public List<Award> getAllAwards() {
        return awardRepository.findAll();
    }


    @PutMapping(value = "api/update/Award/{awardId}",
    consumes = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String updateAward(@PathVariable Long awardId, @RequestBody Award awardDetails) {
        Award awardToUpdate = awardRepository.getReferenceById(awardId);

        awardToUpdate.setMembersOfAward(awardDetails.getMembersOfAward());
        awardToUpdate.setDate(awardDetails.getDate());
        awardToUpdate.setAwardName(awardDetails.getAwardName());
        awardToUpdate.setPictureOfAwardURL(awardDetails.getPictureOfAwardURL());
        awardToUpdate.setDescription(awardDetails.getDescription());
        awardRepository.save(awardToUpdate);
        return "updated Award #" + awardId;
    }

    @DeleteMapping("api/delete/Award/{awardId}")
    public String deleteAward(@PathVariable Long awardId) {
        awardRepository.deleteById(awardId);

        return "Deleted award #" + awardId;
    }
}
