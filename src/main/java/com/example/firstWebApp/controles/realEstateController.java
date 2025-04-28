package com.example.firstWebApp.controles;

import com.example.firstWebApp.entities.realEstate;
import com.example.firstWebApp.entities.user;
import com.example.firstWebApp.services.realEstateServices;
import com.example.firstWebApp.services.userServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Optional;

@RestController

public class realEstateController {
    @Autowired
    private realEstateServices realEstateServices;

    @PostMapping("/realEstate/addRealEstate")
    public @ResponseBody realEstate addRealEstate(@RequestBody realEstate r) {
        return realEstateServices.addRealEstate(r);
    }


    @GetMapping("/realEstate/search/{city}/{saleOrRent}/{realEstateType}/{bedRooms}/{minPrice}/{maxPrice}")
    public Optional<ArrayList<realEstate>> searchRealEstate(@PathVariable String city, @PathVariable String saleOrRent, @PathVariable String realEstateType, @PathVariable int bedRooms,@PathVariable int minPrice, @PathVariable int maxPrice) {
        return realEstateServices.searchRealEstate(city, saleOrRent, realEstateType, bedRooms, minPrice, maxPrice);
    }
    @GetMapping("/realEstate/searchById/{id}")
    public @ResponseBody  ArrayList<realEstate> searchById(@PathVariable long id){
        return realEstateServices.searchById(id);
    }
    //remind make it optional
    @GetMapping("/realEstate/getAll/{userId}")
    public @ResponseBody  Optional<ArrayList<realEstate>> getAll(@PathVariable long userId){
        return realEstateServices.getAll(userId);
    }

    @GetMapping("/realEstate/getById/{id}")
    public @ResponseBody Optional<realEstate> findById( @PathVariable long id) {
        return realEstateServices.findById(id);
    }

    @GetMapping("/realEstate/getRealEstateCount/{userId}")
    public @ResponseBody Integer getRealEstateCount(@PathVariable Long userId) {
        return realEstateServices.getRealEstateCount(userId);
    }

    @GetMapping("/realEstate/getAllByArrayList/{arrayList}")
    public @ResponseBody  Optional<ArrayList<realEstate>> getAllByArrayList(@PathVariable ArrayList<Long> arrayList){
        return realEstateServices.getAllByArrayList(arrayList);
    }

    @PutMapping("/realEstate/deactivatePro/{id}")
    public ResponseEntity<String> deactivatePro(@PathVariable Long id) {
        realEstateServices.deactivatePro(id);
        return ResponseEntity.ok("Property have been successfully deactivated. Now, no one can access this property except you");
    }
    @PutMapping("/realEstate/activatePro/{id}")
    public ResponseEntity<String> activatePro(@PathVariable Long id) {
        realEstateServices.activatePro(id);
        return ResponseEntity.ok("Property have been successfully activated. Now, anyone can access this property");
    }

    @GetMapping("/realEstate/checkIsActivate/{id}")
    public @ResponseBody  boolean checkIsActivate( @PathVariable long id){
        return realEstateServices.checkIsActivate(id);
    }

    @DeleteMapping("/realEstate/deletePro/{id}")
    public @ResponseBody  String deletePro( @PathVariable long id){
        return realEstateServices.deletePro(id);
    }
    @GetMapping("/realEstate/getRealEstates")
    public @ResponseBody int[] getRealEstates(){
        return realEstateServices.getRealEstates();
    }


}