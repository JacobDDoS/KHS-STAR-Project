package com.khs.STAR;

import com.khs.STAR.entity.Award;
import com.khs.STAR.repository.AwardRepository;
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
public class DataControllerTests {

    @Autowired
    private AwardRepository awardRepository;


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


}
