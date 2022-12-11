package com.khs.STAR.security;

import com.khs.STAR.entity.Auth.User;
import com.khs.STAR.repository.Auth.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;

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
            User user = new User(
                    usernameOfAdminUser,
                    passwordEncoder.encode(passwordOfAdminUser)
            );

            userRepository.save(user);
        }

        http
//                .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
//                .and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/*").permitAll()
                .antMatchers("/homepage/*").permitAll()
                .antMatchers("/membership/*").permitAll()
                .antMatchers("/api/**").hasRole(ADMIN.name())
                .anyRequest()
                .authenticated() // client must specify username and password
                .and()
                .formLogin();
    }

}