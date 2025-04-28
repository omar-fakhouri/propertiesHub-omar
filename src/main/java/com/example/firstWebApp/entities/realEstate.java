package com.example.firstWebApp.entities;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;

@Entity
@Table(name = "realEstate")
public class realEstate {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        //@OneToOne
        //@JoinColumn
        private long userId;
        private String name;
        private String saleOrRent;//for sale/for rent  saleOrRent
        private String realEstateType;//house/apartment/vila
        private int  bathrooms;
        private int bedrooms;
        private String country;
        private String city;
        private String address;

        private int price;
        private boolean availability;
        private int area;
        private String description;
        private String mainImage;
         private ArrayList<String> images;


    public realEstate(Long id, long userId, String name, String saleOrRent, String realEstateType, int bathrooms, int bedrooms, String country, String city, String address, int price, boolean availability, int area, String description, String mainImage, ArrayList<String> images) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.saleOrRent = saleOrRent;
        this.realEstateType = realEstateType;
        this.bathrooms = bathrooms;
        this.bedrooms = bedrooms;
        this.country = country;
        this.city = city;
        this.address = address;
        this.price = price;
        this.availability = availability;
        this.area = area;
        this.description = description;
        this.mainImage = mainImage;
        this.images = images;
    }

    public realEstate(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSaleOrRent() {
        return saleOrRent;
    }

    public void setSaleOrRent(String saleOrRent) {
        this.saleOrRent = saleOrRent;
    }

    public String getRealEstateType() {
        return realEstateType;
    }

    public void setRealEstateType(String realEstateType) {
        this.realEstateType = realEstateType;
    }

    public int getBathrooms() {
        return bathrooms;
    }

    public void setBathrooms(int bathrooms) {
        this.bathrooms = bathrooms;
    }

    public int getBedrooms() {
        return bedrooms;
    }

    public void setBedrooms(int bedrooms) {
        this.bedrooms = bedrooms;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public boolean isAvailability() {
        return availability;
    }

    public void setAvailability(boolean availability) {
        this.availability = availability;
    }

    public int getArea() {
        return area;
    }

    public void setArea(int area) {
        this.area = area;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getMainImage() {
        return mainImage;
    }

    public void setMainImage(String mainImage) {
        this.mainImage = mainImage;
    }
    public ArrayList<String> getImages() {
        return images;
    }

    public void setImages(ArrayList<String> images) {
        this.images = images;
    }
    @Override
    public String toString() {
        return "realEstate{" +
                "id=" + id +
                ", userId=" + userId +
                ", name='" + name + '\'' +
                ", saleOrRent='" + saleOrRent + '\'' +
                ", realEstateType='" + realEstateType + '\'' +
                ", bathrooms=" + bathrooms +
                ", bedrooms=" + bedrooms +
                ", country='" + country + '\'' +
                ", city='" + city + '\'' +
                ", address='" + address + '\'' +
                ", price=" + price +
                ", availability=" + availability +
                ", area=" + area +
                ", description='" + description + '\'' +
                ", mainImage='" + mainImage + '\'' +
                '}';
    }
}


