package com.khs.STAR.security;

import com.khs.STAR.entity.User;
import com.khs.STAR.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

import static com.khs.STAR.security.UserRoles.ADMIN;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Value("${spring.admin.username}")
    private String usernameOfAdminUser;

    @Value("${spring.admin.password}")
    private String passwordOfAdminUser;

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public SecurityConfiguration(PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //Create Admin user if it doesn't exist
        if (userRepository.findFirstByUsernameOrderById(usernameOfAdminUser) == null) {
            System.out.println("Created admin user");
            User user = new User(
                    usernameOfAdminUser,
                    passwordEncoder.encode(passwordOfAdminUser)
            );

            userRepository.save(user);
        } else {
            System.out.println("Admin user already created");
        }

        http
                .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .and()
                .authorizeRequests()
                .antMatchers("/*").permitAll()
                .antMatchers("/api/**").hasRole(ADMIN.name())
                .anyRequest()
                .authenticated() // client must specify username and password
                .and()
                .formLogin();
    }

}