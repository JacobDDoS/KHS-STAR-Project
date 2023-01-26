package com.khs.STAR.security;

import com.khs.STAR.entity.Auth.User;
import com.khs.STAR.repository.Auth.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.session.SessionManagementFilter;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import static com.khs.STAR.security.UserRoles.ADMIN;
import static java.util.Collections.singletonList;

@Configuration
@CrossOrigin
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class SecurityConfiguration {

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

    @Bean
    protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        //Create Admin user if it doesn't exist
        if (userRepository.findFirstByUsernameOrderById(usernameOfAdminUser) == null) {
            User user = new User(
                    usernameOfAdminUser,
                    passwordEncoder.encode(passwordOfAdminUser)
            );

            userRepository.save(user);
        }

        http
                .cors()
                .configurationSource(corsConfigurationSource())
                .and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/api/**").hasRole(ADMIN.name())
                .antMatchers("/PictureShowcase").hasRole(ADMIN.name())
                .antMatchers("/*").permitAll()
                .anyRequest()
                .authenticated()
                .and()
//                .requiresChannel().anyRequest().requiresSecure()
//                .and()
                .formLogin()
                .defaultSuccessUrl("https://www.kearneyfcclaserver.com/Award")
                .failureUrl("/failure")
                .and()
                .logout()
                .logoutUrl("/logout")
                .deleteCookies("JSESSIONID")
        ; // client must specify username and password
//                .and()
//                .formLogin().successHandler(new AuthenticationSuccessHandler() {
//                    @Override
//                    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
//                        //redirect to admin view
//                        System.out.println("authentication = " + authentication.getAuthorities());
//                        System.out.println("authentication = " + authentication.getName());
//                        System.out.println("ADMIN.name() = " + ADMIN.name());
//                    }
//                })
//                .failureUrl("/failure");

        return http.build();
    }

    private CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        List<String> allowOrigins = Arrays.asList("https://kearneyfccla.com", "http://localhost:3000");
//        List<String> allowOrigins = Arrays.asList("https://kearneyfccla.com");
        configuration.setAllowedOrigins(allowOrigins);
        configuration.setAllowedMethods(singletonList("*"));
        configuration.setAllowedHeaders(singletonList("*"));
        //in case authentication is enabled this flag MUST be set, otherwise CORS requests will fail
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}