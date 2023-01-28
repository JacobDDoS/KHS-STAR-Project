package com.khs.STAR.controller;

import com.khs.STAR.entity.FCCLA_Info.FCCLAInfo;
import com.khs.STAR.repository.FCCLA_Info.FCCLAInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class FCCLAInfoController {
    FCCLAInfoRepository fcclaInfoRepository;

    @Autowired
    public FCCLAInfoController(FCCLAInfoRepository fcclaInfoRepository) {
        this.fcclaInfoRepository = fcclaInfoRepository;
    }

    @PostMapping("api/add/FCCLAInfo")
    public FCCLAInfo addFCCLAInfo(@RequestBody FCCLAInfo fcclaInfo) {
        fcclaInfoRepository.save(fcclaInfo);
        return fcclaInfo;
    }

    @GetMapping("FCCLAInfo")
    public FCCLAInfo getAllContactInfo() {
        return fcclaInfoRepository.findTopByOrderByIdDesc();
    }


    @PutMapping(value = "api/update/FCCLAInfo/{fcclaInfoId}",
            consumes = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String updateFCCLAInfo(@PathVariable Long fcclaInfoId, @RequestBody FCCLAInfo fcclaInfo) {
        FCCLAInfo fcclaInfoToUpdate = fcclaInfoRepository.getReferenceById(fcclaInfoId);

        fcclaInfoToUpdate.setDosAndDonts(fcclaInfo.getDosAndDonts());
        fcclaInfoToUpdate.setNationalPrograms(fcclaInfo.getNationalPrograms());
        fcclaInfoToUpdate.setCareerPathways(fcclaInfo.getCareerPathways());
        fcclaInfoToUpdate.setCreed(fcclaInfo.getCreed());
        fcclaInfoToUpdate.setMotto(fcclaInfo.getMotto());
        fcclaInfoToUpdate.setTagLine(fcclaInfo.getTagLine());
        fcclaInfoToUpdate.setNationalTheme(fcclaInfo.getNationalTheme());
        fcclaInfoToUpdate.setStateTheme(fcclaInfo.getStateTheme());
        fcclaInfoToUpdate.setChapterTheme(fcclaInfo.getChapterTheme());
        fcclaInfoToUpdate.setFlower(fcclaInfo.getFlower());
        fcclaInfoToUpdate.setColorsAndDefinitions(fcclaInfo.getColorsAndDefinitions());
        fcclaInfoToUpdate.setWebsiteLinks(fcclaInfo.getWebsiteLinks());
        fcclaInfoRepository.save(fcclaInfoToUpdate);
        return "updated fcclaInfo #" + fcclaInfoId;
    }

    @DeleteMapping("api/delete/FCCLAInfo/{fcclaInfoId}")
    public String deleteFCCLAInfo(@PathVariable Long fcclaInfoId) {
        fcclaInfoRepository.deleteById(fcclaInfoId);

        return "Deleted FCCLAInfo #" + fcclaInfoId;
    }
}