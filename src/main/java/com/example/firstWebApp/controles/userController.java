package com.example.firstWebApp.controles;
import com.example.firstWebApp.entities.realEstate;
import com.example.firstWebApp.services.userServices;
import com.example.firstWebApp.entities.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
public class userController {

    @Autowired
    private userServices userServices;
    @PostMapping("/users/addUser")
    public @ResponseBody user addUser(@RequestBody user u)
    {
        return userServices.addUser(u);
    }

    @GetMapping("/users/getAll")
    public @ResponseBody ArrayList<user> getAll()
    {
        return userServices.getAll();
    }
    @GetMapping("/users/login/{email}/{password}")
    public @ResponseBody Optional< user> login(@PathVariable String  email ,@PathVariable String  password)
    {
        return userServices.login(email,password);
    }

    @GetMapping("/users/findUserId/{id}")
    public @ResponseBody Optional<user> findUserById(@PathVariable Long id)
    {
        return userServices.findUserById(id);
    }

    @GetMapping("/users/setFavorites/{userId}/{realEstateId}")
    public @ResponseBody Optional<user> setFavorites(@PathVariable Long userId,@PathVariable Long realEstateId)
    {
        return userServices.findUserById(userId);
    }
    @PutMapping("/users/{userId}/favorites/{realEstateId}")
    public ResponseEntity<String> addToFavorites(@PathVariable Long userId, @PathVariable Long realEstateId) {
        userServices.addToFavorites(userId, realEstateId);
        return ResponseEntity.ok("Real estate added to favorites successfully.");
    }

    @PutMapping("/users/{userId}/removeFromFavorites/{realEstateId}")
    public ResponseEntity<String> removeFromFavorites(@PathVariable Long userId, @PathVariable Long realEstateId) {
        userServices.removeFromFavorites(userId, realEstateId);
        return ResponseEntity.ok("Real estate removed from favorites successfully.");
    }
    @PutMapping("/users/editUser/{userId}/{userName}/{email}/{phoneNumber}/{password}")
    public ResponseEntity<String> editUser(@PathVariable long userId ,@PathVariable String userName , @PathVariable String email, @PathVariable String phoneNumber, @PathVariable String password) {
        userServices.editUser(userId, userName, email, phoneNumber, password);
        return ResponseEntity.ok("User edited successfully.");
    }

    @GetMapping("/users/checkIsFav/{realEstateId}/{userId}")
    public @ResponseBody  boolean checkIsFav(@PathVariable long realEstateId, @PathVariable long userId){
        return userServices.checkIsFav(realEstateId,userId);
    }

    @GetMapping("/users/getFa/{userId}")
    public @ResponseBody Optional<ArrayList<Long>> getFa(@PathVariable long userId) {
        return userServices.getFa(userId);
    }

}
