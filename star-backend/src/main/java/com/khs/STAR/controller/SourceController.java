package com.khs.STAR.controller;

import com.khs.STAR.entity.Bibliography.Source;
import com.khs.STAR.repository.Bibliography.SourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class SourceController {
    SourceRepository sourceRepository;

    @Autowired
    public SourceController(SourceRepository sourceRepository) {
        this.sourceRepository = sourceRepository;
    }

    @PostMapping("api/add/Source")
    public Source addSource(@RequestBody Source source) {
        sourceRepository.save(source);
        return source;
    }

    @GetMapping("Source")
    public List<Source> getAllSources() {
        return sourceRepository.findAll();
    }


    @PutMapping(value = "api/update/Source/{sourceId}",
            consumes = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String updateSource(@PathVariable Long sourceId, @RequestBody Source sourceDetails) {
        Source sourceToUpdate = sourceRepository.getReferenceById(sourceId);

        sourceToUpdate.setSource(sourceDetails.getSource());
        sourceRepository.save(sourceToUpdate);
        return "updated Source #" + sourceId;
    }

    @DeleteMapping("api/delete/Source/{sourceId}")
    public String deleteSource(@PathVariable Long sourceId) {
        sourceRepository.deleteById(sourceId);

        return "Deleted source #" + sourceId;
    }
}






//@GetMapping("sources")
//    public List<Source> getSources() {
//        return sourceRepository.findAll();
//    }
