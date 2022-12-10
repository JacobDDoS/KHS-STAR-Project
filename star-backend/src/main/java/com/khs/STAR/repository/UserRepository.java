package com.khs.STAR.repository;

import com.khs.STAR.entity.Auth.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findFirstByUsernameOrderById(String username);
}
