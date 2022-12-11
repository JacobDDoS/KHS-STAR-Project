package com.khs.STAR.auth;

import com.khs.STAR.entity.Auth.User;
import com.khs.STAR.repository.Auth.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import static com.khs.STAR.security.UserRoles.ADMIN;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findFirstByUsernameOrderById(username);

        if (user == null) {
            throw new UsernameNotFoundException(String.format("Username %s not found", username));
        };

        UserDetails adminUserDetails = new UserDetailsImpl(
                user.getUsername(),
                user.getPassword(),
                ADMIN.getGrantedAuthorities(),
                true,
                true,
                true,
                true
        );

        return adminUserDetails;

    }
}
