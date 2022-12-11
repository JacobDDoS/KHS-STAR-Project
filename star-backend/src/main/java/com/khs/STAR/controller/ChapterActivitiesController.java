package com.khs.STAR.controller;

import com.khs.STAR.entity.Chapter_Activities.ChapterActivity;
import com.khs.STAR.repository.Chapter_Activities.ChapterActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class ChapterActivitiesController {
    ChapterActivityRepository chapterActivityRepository;

    @Autowired
    public ChapterActivitiesController(ChapterActivityRepository chapterActivityRepository) {
        this.chapterActivityRepository = chapterActivityRepository;
    }

    @PostMapping("api/add/ChapterActivity")
    public ChapterActivity addChapterActivity(@RequestBody ChapterActivity chapterActivity) {
        chapterActivityRepository.save(chapterActivity);
        return chapterActivity;
    }

    @GetMapping("chapterActivities")
    public List<ChapterActivity> getAllChapterActivity() {
        return chapterActivityRepository.findAll();
    }


    @PutMapping(value = "api/update/ChapterActivity/{chapterActivityId}",
            consumes = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String updateChapterActivity(@PathVariable Long chapterActivityId, @RequestBody ChapterActivity chapterActivityDetails) {
        ChapterActivity chapterActivityToUpdate = chapterActivityRepository.getReferenceById(chapterActivityId);

        chapterActivityToUpdate.setPhotoURL(chapterActivityDetails.getPhotoURL());
        chapterActivityToUpdate.setStartDate(chapterActivityDetails.getStartDate());
        chapterActivityToUpdate.setEndDate(chapterActivityDetails.getEndDate());
        chapterActivityToUpdate.setNameOfActivity(chapterActivityDetails.getNameOfActivity());
        chapterActivityToUpdate.setDescription(chapterActivityDetails.getDescription());
        chapterActivityRepository.save(chapterActivityToUpdate);
        return "updated Chapter Activity #" + chapterActivityId;
    }

    @DeleteMapping("api/delete/ChapterActivity/{chapterActivityId}")
    public String deleteChapterActivity(@PathVariable Long chapterActivityId) {
        chapterActivityRepository.deleteById(chapterActivityId);

        return "Deleted Chapter Activity #" + chapterActivityId;
    }
}