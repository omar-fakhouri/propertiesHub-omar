
           function getQueryParam(name)
             {
               const urlParams = new URLSearchParams(window.location.search);
               return urlParams.get(name);
              }

       var id;
       //filling property description
        $.ajax({
                type: "Get",
                url: "/realEstate/getById/"+localStorage.getItem("real-estate"),
                success: function (realEstate) {
                 document.getElementById("price").innerText = realEstate.price+"$";
                 document.getElementById("saleOrRent").innerText = "for "+realEstate.saleOrRent;
                 document.getElementById("realEstateType").innerText = realEstate.realEstateType;
                  if(realEstate.saleOrRent=="rent"){
                   document.getElementById("perMonth").innerText = " per month";
                  }
                 document.getElementById("bathrooms").innerText = realEstate.bathrooms;
                 document.getElementById("bedrooms").innerText = realEstate.bedrooms;
                 document.getElementById("city").innerText = realEstate.city;
                 document.getElementById("area").innerText = realEstate.area;
                 document.getElementById("address").innerText = realEstate.address;
                 document.getElementById("description").innerText = realEstate.description;
                  id=realEstate.userId;

                  //filling user description
                       $.ajax({
                            type: "Get",
                            url: "/users/findUserId/"+id,
                            success: function (user) {
                             document.getElementById("phoneNumber-pu").innerText = user.phoneNumber;
                             document.getElementById("userName-pu").innerText = user.userName;
                             document.getElementById("email-pu").innerText = user.email;
                             var userID=user.id;
                             $.ajax({
                              type: "Get",
                              url: "/realEstate/getRealEstateCount/"+userID,
                              success: function (realEstateCount) {
                               document.getElementById("PublishedRealEstate-pu").innerText = realEstateCount;
                              },
                              error: function (error) {
                                  console.log("Error getting your Published real estate", error);
                              }
                          });
                            },
                            error: function (error) {
                                console.log("Error finding your account", error);
                            }
                        });

                },
                error: function (error) {
                    console.log("Error finding your real estate", error);
                }
            });
             // Get the profile element
              var profile = document.getElementById('profile');


              function getQueryParam(name)
              {
                const urlParams = new URLSearchParams(window.location.search);
                return urlParams.get(name);
               }


               //going to PublicProfile page
               function goPublicProfile()
                {
                 window.location.href="publicProfile.html?id="+id;
                }
                 

                function goIndex()
                {
                    localStorage.removeItem("real-estate");
                    window.location.href="index.html";
                }


                  //going to profile page and adding the user information
                function goProfile()
                {
                    localStorage.removeItem("real-estate");
                    window.location.href="profile.html";
                }


                //going to profile page
                function goAddProperty()
                {
                    localStorage.removeItem("real-estate");
                    window.location.href="addProperty.html";
                }


                //going to contact page
                function goContact()
                {
                localStorage.removeItem("real-estate");
                window.location.href="contact.html";
                }



                 //going to about page
                function goAbout()
                {
                    localStorage.removeItem("real-estate");
                window.location.href="about.html";
                }


                  //going to propertiesList page
                function goPropertiesList()
                {
                 localStorage.removeItem("real-estate");
                window.location.href="propertiesList.html";

                }

               //going to property page page
                function goProperty()
                {
                  localStorage.removeItem("real-estate");
                window.location.href="property.html";

                }