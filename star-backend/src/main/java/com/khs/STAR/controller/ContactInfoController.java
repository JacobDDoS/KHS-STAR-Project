package com.khs.STAR.controller;

import com.khs.STAR.entity.Contacts.ContactInfo;
import com.khs.STAR.repository.Contacts.ContactInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class ContactInfoController {
    ContactInfoRepository contactInfoRepository;

    @Autowired
    public ContactInfoController(ContactInfoRepository contactInfoRepository) {
        this.contactInfoRepository = contactInfoRepository;
    }

    @PostMapping("api/add/ContactInfo")
    public ContactInfo addContactInfo(@RequestBody ContactInfo contactInfo) {
        contactInfoRepository.save(contactInfo);
        return contactInfo;
    }

    @GetMapping("contactInfo")
    public List<ContactInfo> getAllContactInfo() {
        return contactInfoRepository.findAll();
    }


    @PutMapping(value = "api/update/ContactInfo/{contactInfoId}",
            consumes = {MediaType.APPLICATION_JSON_VALUE}
    )
    public String updateContactInfo(@PathVariable Long contactInfoId, @RequestBody ContactInfo contactInfo) {
        ContactInfo contactInfoToUpdate = contactInfoRepository.getReferenceById(contactInfoId);

        contactInfoToUpdate.setEmailToContact(contactInfo.getEmailToContact());
        contactInfoRepository.save(contactInfoToUpdate);
        return "updated contactInfo #" + contactInfoId;
    }

    @DeleteMapping("api/delete/ContactInfo/{contactInfoId}")
    public String deleteContactInfo(@PathVariable Long contactInfoId) {
        contactInfoRepository.deleteById(contactInfoId);

        return "Deleted ContactInfo #" + contactInfoId;
    }
}