package com.khs.STAR;

import com.khs.STAR.entity.*;
import com.khs.STAR.repository.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

@SpringBootTest // This will persist data
//@DataJpaTest // This will not persist data
//@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class DataRepositoryTests {

    @Autowired
    private AwardRepository awardRepository;

    @Autowired
    private ChapterActivityRepository chapterActivityRepository;

    @Autowired
    private ContactInfoRepository contactInfoRepository;

    @Autowired
    private OfficerRepository officerRepository;

    @Autowired
    private ProgramOfWorkRepository programOfWorkRepository;

    @Autowired
    private SourceRepository sourceRepository;

    @Autowired
    private SupporterRepository supporterRepository;


    @Test
    public void addAward() {
        Award award = Award.builder()
                .membersOfAward("Adan,Jacob,Alex")
                .date(new Date())
                .awardName("Amazing STAR Project!")
                .pictureOfAwardURL("https://img.freepik.com/free-vector/start_53876-25533.jpg")
                .description("Adan, Jacob, & Alex came together to build an amazing STAR Project!")
                .build();

        awardRepository.save(award);
    }

    @Test
    public void addChapterActivity() {
        ChapterActivity chapterActivity = ChapterActivity.builder()
                .photoURL("https://fcclainc.org/sites/default/files/education-training_0.jpg")
                .startDate(new Date(System.currentTimeMillis() - 3600 * 1000 * 48)) //48 hours ago
                .endDate(new Date())
                .nameOfActivity("Very Fun FCCLA Stuff")
                .description("We did a lot of very fun FCCLA stuff. By the way, we are an organization, not a club! we did stuff and stuff and stuff and stuff etc")
                .build();

        chapterActivityRepository.save(chapterActivity);
    }

    @Test
    public void addContactInfo() {
        ContactInfo contactInfo = ContactInfo.builder()
                .emailToContact("chapter@fccla.com")
                .build();

        contactInfoRepository.save(contactInfo);
    }

    @Test
    public void addOfficer() {
        Officer officer = Officer.builder()
                .officerName("Adan AlexJacob")
                .officerPosition("Top G")
                .startTime(new Date(System.currentTimeMillis() - 3600L * 1000 * 24 * 365 * 2)) //2 years ago
                .endTime(new Date())
                .chapterResponsibilities("Cleaning;Organizing;Doing stuff;Whatever else you wanna add here")
                .chapterServiceOrCareerGoals("Be the best;Help others;Never be nihilist")
                .build();

        officerRepository.save(officer);
    }

    @Test
    public void addProgramOfWork() {
        ProgramOfWork programOfWork = ProgramOfWork.builder()
                .linkToPDFOfChapterProgramOfWork("https://6c3d74bd-dcc8-414d-8590-02b075d9d23f.filesusr.com/ugd/27e2eb_b04ccc663aef4c799112c5a6411363dc.pdf")
                .build();

        programOfWorkRepository.save(programOfWork);
    }

    @Test
    public void addSource() {
        Source source = Source.builder()
                .source("https://en.wikipedia.org/wiki/Family,_Career_and_Community_Leaders_of_America")
                .build();

        sourceRepository.save(source);
    }

    @Test
    public void addSupporter() {
        Supporter supporter = Supporter.builder()
                .companyName("Baldwin Filters")
                .logoURL("https://static.wixstatic.com/media/27e2eb_3ad5505737924a808b997f65b8946b48~mv2.gif")
                .link("https://www.baldwinfilter.com/")
                .description("Baldwin Filters is a worldwide manufacturer of heavy-duty air, lube, fuel, coolant, transmission, and hydraulic filtration products.Baldwin Filters is a financial partner who provided us with support and the means to travel to our District, State, and National Leadership Conferences. We are thankful for their support throughout the years.")
                .build();

        supporterRepository.save(supporter);
    }


}
