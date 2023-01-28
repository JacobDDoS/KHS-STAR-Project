package com.khs.STAR.controller;

import com.khs.STAR.entity.Homepage.PictureShowcase;
import com.khs.STAR.repository.Homepage.PictureShowcaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class HomepageController {
    PictureShowcaseRepository pictureShowcaseRepository;

    @Autowired
    public HomepageController(PictureShowcaseRepository pictureShowcaseRepository) {
        this.pictureShowcaseRepository = pictureShowcaseRepository;
    }

    @PostMapping("api/add/PictureShowcase")
    public PictureShowcase addPictureShowcase(@RequestBody PictureShowcase pictureShowcase) {
        pictureShowcaseRepository.save(pictureShowcase);
        return pictureShowcase;
    }

    @GetMapping("PictureShowcase")
    public List<PictureShowcase> getPictureShowcase() {
        return pictureShowcaseRepository.findAll();
    }


    @PutMapping(value = "api/update/PictureShowcase/{pictureShowcaseId}",
            consumes = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String updatePictureShowcase(@PathVariable Long pictureShowcaseId, @RequestBody PictureShowcase pictureShowcaseDetails) {
        PictureShowcase pictureShowcaseToUpdate = pictureShowcaseRepository.getReferenceById(pictureShowcaseId);

        pictureShowcaseToUpdate.setURLToPicture(pictureShowcaseDetails.getURLToPicture());
        pictureShowcaseRepository.save(pictureShowcaseToUpdate);
        return "updated homepage - picture Showcase #" + pictureShowcaseId;
    }

    @DeleteMapping("api/delete/PictureShowcase/{pictureShowcaseId}")
    public String deletePictureShowcase(@PathVariable Long pictureShowcaseId) {
        pictureShowcaseRepository.deleteById(pictureShowcaseId);

        return "Deleted homepage - picture Showcase #" + pictureShowcaseId;
    }
}



