package com.khs.STAR.controller;

import com.khs.STAR.entity.Planned_Program_of_Work.ProgramOfWork;
import com.khs.STAR.repository.Planned_Program_of_Work.ProgramOfWorkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class PPWController {
    ProgramOfWorkRepository programOfWorkRepository;

    @Autowired
    public PPWController(ProgramOfWorkRepository programOfWorkRepository) {
        this.programOfWorkRepository = programOfWorkRepository;
    }

    @PostMapping("api/add/ProgramOfWork")
    public ProgramOfWork addProgramOfWork(@RequestBody ProgramOfWork programOfWork) {
        programOfWorkRepository.save(programOfWork);
        return programOfWork;
    }

    @GetMapping("programOfWork")
    public ProgramOfWork getProgramOfWork() {
        return programOfWorkRepository.findTopByOrderByIdDesc();
    }


    @PutMapping(value = "api/update/ProgramOfWork/{programOfWorkId}",
            consumes = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String updateProgramOfWork(@PathVariable Long programOfWorkId, @RequestBody ProgramOfWork programOfWorkDetails) {
        ProgramOfWork programOfWorkToUpdate = programOfWorkRepository.getReferenceById(programOfWorkId);

        programOfWorkToUpdate.setLinkToPDFOfChapterProgramOfWork(programOfWorkDetails.getLinkToPDFOfChapterProgramOfWork());
        programOfWorkRepository.save(programOfWorkToUpdate);
        return "updated Program Of Work #" + programOfWorkId;
    }

    @DeleteMapping("api/delete/ProgramOfWork/{programOfWorkId}")
    public String deleteProgramOfWork(@PathVariable Long programOfWorkId) {
        programOfWorkRepository.deleteById(programOfWorkId);

        return "Deleted Program of Work #" + programOfWorkId;
    }
}