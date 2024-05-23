package com.example.firstWebApp.services;

import com.example.firstWebApp.entities.realEstate;
import com.example.firstWebApp.entities.user;
import com.example.firstWebApp.repository.userRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class userServices {
    @Autowired
    private userRepository repository;

    public user addUser(user u) {
        u.setFavoritesId(new ArrayList<>());
        return repository.save(u);

    }

    public ArrayList<user> getAll() {
        return (ArrayList<user>) repository.findAll();
    }

    public Optional<user> findUserById(Long id) {
        return repository.findById(id);
    }

    public Optional<user> login(String email, String password) {
        ArrayList<user> myList = (ArrayList<user>) repository.findAll();
        for (int i = 0; i < myList.size(); i++) {
            if ((myList.get(i).getEmail().equals(email) || myList.get(i).getUserName().equals(email)) &&
                    myList.get(i).getPassword().equals(password)) {
                return Optional.ofNullable(myList.get(i));
            }
        }
        return Optional.empty();
    }

    public void addToFavorites(Long userId, Long realEstateId) {
        user user = repository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + userId));
        user.getFavoritesId().add(realEstateId);
        repository.save(user);

    }

    public void removeFromFavorites(Long userId, Long realEstateId) {
        user user = repository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + userId));
        user.getFavoritesId().remove(realEstateId);
        repository.save(user);

    }

    public Optional<ArrayList<Long>> getFa(long userId) {
        ArrayList<user> myList = (ArrayList<user>) repository.findAll();
        for (int i = 0; i < myList.size(); i++) {
            if (myList.get(i).getId() == userId) {
                if (myList.get(i).getFavoritesId().isEmpty())
                    return Optional.empty();
                else
                  return Optional.of(myList.get(i).getFavoritesId());
            }
        }
        return Optional.empty();
    }

    public boolean checkIsFav( long realEstateId,  long userId) {
       Optional<user> user=repository.findById(userId);
       for (int i=0;i<user.get().getFavoritesId().size();i++)
           if (user.get().getFavoritesId().get(i)==realEstateId)
               return true;
       return false;
    }

    public void editUser(long userId,String userName , String email, String phoneNumber, String password) {
        user user = repository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + userId));
        user.setUserName(userName);
        user.setEmail(email);
        user.setPhoneNumber(phoneNumber);
        user.setPassword(password);
        repository.save(user);
    }


}