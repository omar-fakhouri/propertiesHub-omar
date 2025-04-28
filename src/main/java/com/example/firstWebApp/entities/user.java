package com.example.firstWebApp.entities;

import jakarta.persistence.*;
import org.hibernate.annotations.NotFound;

import java.io.Serializable;
import java.util.ArrayList;

@Entity
@Table(name = "users")
public class user implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userName;

    private String  email;
    private String phoneNumber;
    private String profilePic;
    private ArrayList<Long> favoritesId;
    private String  password;
    private String  profileImage;

    public user(Long id, String userName, String email, String phoneNumber, String profilePic, ArrayList<Long> favoritesId, String password, String profileImage) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.profilePic = profilePic;
        this.favoritesId = favoritesId;
        this.password = password;
        this.profileImage = profileImage;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }



    public user(){}

    public void setFavoritesId(ArrayList<Long> favoritesId) {
        this.favoritesId = favoritesId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }





    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getProfilePic() {
        return profilePic;
    }

    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }

    public ArrayList<Long> getFavoritesId() {
        return favoritesId;
    }


        }


