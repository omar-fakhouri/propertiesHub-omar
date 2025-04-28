package com.example.firstWebApp.services;
import com.example.firstWebApp.entities.realEstate;
import com.example.firstWebApp.entities.user;
import com.example.firstWebApp.repository.realEstateRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.Objects;
import java.util.Optional;

@Service
public class realEstateServices {
    @Autowired
    private realEstateRepository repository;

    public realEstate addRealEstate(realEstate r) {
        if (r.getName()==null || r.getCity()==null ||r.getSaleOrRent()==null ||r.getRealEstateType()==null /* ||r.getDescription()==null*/)
            return repository.save(new realEstate( r.getId() ,0, "null","null", "null",0, 0, "null", "null", "null",0, false, 0, "null","null", new ArrayList<>()));
        else
            return repository.save(r);

    }


    public Optional<ArrayList<realEstate>> searchRealEstate(String city, String saleOrRent, String realEstateType, int bedRooms, int minPrize, int maxPrize) {
        ArrayList<realEstate> myList = (ArrayList<realEstate>) repository.findAll();
        ArrayList<realEstate> result = new ArrayList<>();
        int count=0;
        for (int i = 0; i < myList.size(); i++) {
            // note: if (-1 --> any)for int   ,   if ("any" --> any)for string
            if ((myList.get(i).getCity().equals(city) || city.equals("any")) && (myList.get(i).getSaleOrRent().equals(saleOrRent) || saleOrRent.equals("any")) && (myList.get(i).getRealEstateType().equals(realEstateType) || realEstateType.equals("any")) && (myList.get(i).getPrice() <= maxPrize || maxPrize == -1) && (myList.get(i).getPrice() >= minPrize || minPrize == -1) && myList.get(i).isAvailability()) {
                if (((myList.get(i).getBedrooms() == bedRooms || bedRooms == -1 || (myList.get(i).getBedrooms() >= 5 && bedRooms == 5/*(5+ )*/)))){
                    result.add(myList.get(i));
                    count++;
                }
            }
        }
        if (count==0)
            return Optional.empty();
        else
            return Optional.of(result);
    }

    public ArrayList<realEstate> searchById(long id) {
        ArrayList<realEstate> myList = (ArrayList<realEstate>) repository.findAll();
        ArrayList<realEstate> result = new ArrayList<>();

        for (int i = 0; i < myList.size(); i++) {
            if (myList.get(i).getId() == id)
                result.add(myList.get(i));


        }

        return result;

    }

    public Optional<ArrayList<realEstate>> getAll(long userId){
        ArrayList<realEstate> myList = (ArrayList<realEstate>) repository.findAll();
        ArrayList<realEstate> result = new ArrayList();
        int count=0;
        for (int i = 0; i < myList.size(); i++) {
            if (myList.get(i).getUserId() == userId){
                result.add(myList.get(i));++count;
        }
        }
        if (count==0){
            return Optional.empty();
        }
        else
            return Optional.of(result);
    }

    public Optional<ArrayList<realEstate>> getAllByArrayList(ArrayList<Long> arrayList) {
        ArrayList<realEstate> myList = (ArrayList<realEstate>) repository.findAll();
        ArrayList<realEstate> result = new ArrayList();
        for (int i = 0; i < myList.size(); i++) {
            for (int z = 0; z < arrayList.size(); z++) {
               if (Objects.equals(myList.get(i).getId(), arrayList.get(z))){
                   result.add(myList.get(i));
                   break;
            }
            }
        }
        if (result.isEmpty())
            return Optional.empty();
        else
       return Optional.of(result);
    }


    public Optional<realEstate> findById(long id) {
        ArrayList<realEstate> myList = (ArrayList<realEstate>) repository.findAll();
        for (int i = 0; i < myList.size(); i++) {
            if (myList.get(i).getId()==id) {
                return Optional.of(myList.get(i));
            }
        }
        return Optional.empty();

    }
    public Integer getRealEstateCount(Long userId) {
        ArrayList<realEstate> myList = (ArrayList<realEstate>) repository.findAll();
        int count=0;
        for (int i = 0; i < myList.size(); i++) {
            if (myList.get(i).getUserId() == userId ) {
                count++;
            }
        }
        return count;
    }

    public void deactivatePro(long id) {
        realEstate realEstate = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("real estate not found with id: " + id));
        realEstate.setAvailability(false);
        repository.save(realEstate);
    }
    public void activatePro(long id) {
        realEstate realEstate = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("real estate not found with id: " + id));
        realEstate.setAvailability(true);
        repository.save(realEstate);
    }
    public boolean checkIsActivate(long id) {
        if (repository.findById(id).get().isAvailability())
            return true;
        return false;
    }
    public String deletePro(long id) {
        repository.deleteById(id);
        return "Property have been successfully deleted.";
    }

    public  int[] getRealEstates(){
        ArrayList<realEstate> myList = (ArrayList<realEstate>) repository.findAll();
        int[] result = new int[4];
        for (int i = 0; i < myList.size(); i++) {
        if (myList.get(i).getRealEstateType().equals("apartment")){
            result[0]++;
        }
        else if (myList.get(i).getRealEstateType().equals("villa")){
            result[1]++;
        }
          else if (myList.get(i).getRealEstateType().equals("house")){
          result[2]++;
         }  else if (myList.get(i).getRealEstateType().equals("condo")){
             result[3]++;
        }

    }
     return result;
}


}